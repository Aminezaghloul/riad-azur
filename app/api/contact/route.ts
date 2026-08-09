import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/data/site";

const requiredFields = ["name", "email", "subject", "message"];

const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;",
}[character] || character));

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const { name, email, phone, subject, message } = body;

  for (const field of requiredFields) {
    if (!body[field] || typeof body[field] !== "string" || !body[field].trim()) {
      return NextResponse.json({ error: `Please provide a valid ${field}.` }, { status: 400 });
    }
  }

  if (!validateEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  if (name.length > 120 || email.length > 254 || String(phone || "").length > 40 || subject.length > 120 || message.length > 5000) {
    return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const fromAddress = process.env.CONTACT_EMAIL_FROM || smtpUser || `no-reply@${siteConfig.name.toLowerCase().replace(/\s+/g, "")}.com`;
  const toAddress = process.env.CONTACT_EMAIL_TO || siteConfig.email;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    return NextResponse.json(
      {
        error:
          "Email server is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in environment variables.",
      },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const mailSubject = `${siteConfig.name} Contact Form: ${subject}`;
  const mailText = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nSubject: ${subject}\n\nMessage:\n${message}`;
  const mailHtml = `
    <div style="font-family:system-ui, sans-serif; color:#111; line-height:1.5;">
      <h2 style="margin-bottom:0.75rem;">New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "N/A")}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <div style="margin-top:1rem; padding:1rem; background:#f8f4ee; border-radius:8px;">
        <strong>Message</strong>
        <p style="white-space:pre-wrap; margin-top:0.5rem;">${escapeHtml(message)}</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: mailSubject,
      text: mailText,
      html: mailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const reason = error instanceof Error ? error.message : "Unknown SMTP error";
    console.error("Contact email send error:", reason);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or contact us directly on WhatsApp." },
      { status: 500 }
    );
  }
}
