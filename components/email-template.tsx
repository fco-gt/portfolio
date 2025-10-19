import {
  Head,
  Body,
  Container,
  Section,
  Text,
  Link,
  Heading,
} from '@react-email/components';
import { Html } from '@react-email/html';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Body style={{
        backgroundColor: "#0B1020",
        color: "#E5E7EB",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}>
        <Container>
          <Section style={{
            backgroundColor: "#111827",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid #1F2937",
            maxWidth: "600px",
            margin: "40px auto",
          }}>
            {/* Header */}
            <Section style={{
              background: "linear-gradient(135deg, #00C87A 0%, #00A86B 100%)",
              padding: "32px 24px",
              textAlign: "center",
            }}>
              <Heading style={{
                margin: 0,
                fontSize: "28px",
                fontWeight: "bold",
                color: "#0B1020",
              }}>
                New Contact Message
              </Heading>
            </Section>

            {/* Content */}
            <Section style={{ padding: "32px 24px" }}>
              <Text style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#9CA3AF",
              }}>
                You have received a new message from your portfolio contact form.
              </Text>

              {/* Sender Info */}
              <Section style={{
                backgroundColor: "#1F2937",
                borderRadius: "8px",
                padding: "20px",
                marginBottom: "24px",
                borderLeft: "4px solid #00C87A",
              }}>
                <Text style={{ marginBottom: "12px" }}>
                  <Text style={{
                    color: "#00C87A",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}>
                    From:
                  </Text>
                  <Text style={{
                    margin: "4px 0 0 0",
                    fontSize: "16px",
                    color: "#E5E7EB",
                  }}>
                    {name}
                  </Text>
                </Text>

                <Text>
                  <Text style={{
                    color: "#00C87A",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}>
                    Email:
                  </Text>
                  <Link
                    href={`mailto:${email}`}
                    style={{
                      color: "#00C87A",
                      textDecoration: "none",
                    }}
                  >
                    {email}
                  </Link>
                </Text>
              </Section>

              {/* Message */}
              <Section>
                <Text style={{
                  color: "#00C87A",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "12px",
                }}>
                  Message:
                </Text>
                <Text style={{
                  backgroundColor: "#1F2937",
                  borderRadius: "8px",
                  padding: "20px",
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: "#E5E7EB",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}>
                  {message}
                </Text>
              </Section>

              {/* Reply Button */}
              <Section style={{ textAlign: "center", marginTop: "32px" }}>
                <Link
                  href={`mailto:${email}`}
                  style={{
                    backgroundColor: "#00C87A",
                    color: "#0B1020",
                    padding: "14px 32px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  Reply to {name}
                </Link>
              </Section>
            </Section>

            {/* Footer */}
            <Section style={{
              backgroundColor: "#0B1020",
              padding: "24px",
              textAlign: "center",
              borderTop: "1px solid #1F2937",
            }}>
              <Text style={{
                margin: 0,
                fontSize: "14px",
                color: "#6B7280",
              }}>
                This message was sent from your portfolio contact form
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
