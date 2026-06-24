import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minute window
    return true;
  }

  if (limit.count >= 5) {
    return false;
  }

  limit.count++;
  return true;
}

function sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, "");
}

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const ip = request.headers.get("x-forwarded-for") || "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      message: sanitizeInput(message),
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedData.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      subject: `New Contact Form Message from ${sanitizedData.name}`,
      react: EmailTemplate({
        name: sanitizedData.name,
        email: sanitizedData.email,
        message: sanitizedData.message,
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
