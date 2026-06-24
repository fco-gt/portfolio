import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const MAX_BODY_BYTES = 10_240; // 10 KB

// ── Validation constants ────────────────────────────────────────────────

const LIMITS = {
  name: { max: 100 },
  message: { max: 5000 },
} as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const BLOCKED_PATTERNS = [
  /<[^>]*>/g,          // HTML tags
  /https?:\/\/[^\s]{50,}/g, // suspiciously long URLs
  /(.)\1{50,}/g,       // repetitive chars (50+ same char)
] as const;

// ── Helpers ─────────────────────────────────────────────────────────────

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 });
    return true;
  }

  if (limit.count >= 5) {
    return false;
  }

  limit.count++;
  return true;
}

function sanitize(input: string): string {
  return input
    .replace(/[<>]/g, "")
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "") // strip control chars (except \t, \n, \r)
    .trim();
}

interface ValidationError {
  field: string;
  message: string;
}

function validateField(
  field: string,
  value: string,
  label: string,
  max: number,
): ValidationError | null {
  if (!value || value.trim().length === 0) {
    return { field, message: `${label} is required` };
  }

  const cleaned = value.trim();

  if (cleaned.length > max) {
    return { field, message: `${label} must be ${max} characters or fewer` };
  }

  for (const pattern of BLOCKED_PATTERNS) {
    pattern.lastIndex = 0;
    if (pattern.test(cleaned)) {
      return { field, message: `${label} contains invalid content` };
    }
  }

  return null;
}

// ── Route ───────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const ip = request.headers.get("x-forwarded-for") || "unknown";

  // Rate limit
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  // Content-Type check
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { error: "Content-Type must be application/json" },
      { status: 415 },
    );
  }

  try {
    // Body size guard
    const text = await request.text();
    if (Buffer.byteLength(text, "utf-8") > MAX_BODY_BYTES) {
      return NextResponse.json(
        { error: "Request body too large" },
        { status: 413 },
      );
    }

    const body = JSON.parse(text);
    const rawName = typeof body.name === "string" ? body.name : "";
    const rawEmail = typeof body.email === "string" ? body.email : "";
    const rawMessage = typeof body.message === "string" ? body.message : "";

    // Validate fields
    const errors: ValidationError[] = [];

    const nameErr = validateField("name", rawName, "Name", LIMITS.name.max);
    if (nameErr) errors.push(nameErr);

    const msgErr = validateField(
      "message",
      rawMessage,
      "Message",
      LIMITS.message.max,
    );
    if (msgErr) errors.push(msgErr);

    if (!rawEmail || rawEmail.trim().length === 0) {
      errors.push({ field: "email", message: "Email is required" });
    } else if (!EMAIL_REGEX.test(rawEmail.trim())) {
      errors.push({ field: "email", message: "Invalid email address" });
    }

    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    // Sanitize
    const sanitized = {
      email: rawEmail.trim().toLowerCase(),
      name: sanitize(rawName),
      message: sanitize(rawMessage),
    };

    // Re-check after sanitize (e.g., if name was only <> it's now empty)
    if (!sanitized.name || !sanitized.message) {
      return NextResponse.json(
        { error: "Invalid input after sanitization" },
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
      subject: `New Contact Form Message from ${sanitized.name}`,
      react: EmailTemplate({
        name: sanitized.name,
        email: sanitized.email,
        message: sanitized.message,
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
