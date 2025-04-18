import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill out all required fields' },
        { status: 400 }
      );
    }

    // Configure nodemailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailData = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Contact Form: ${name} - ${service || 'General Inquiry'}`,
      text: `
Name: ${name}
Email: ${email}
Service: ${service || 'Not specified'}
Message: ${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #444; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
  <p><strong>Service:</strong> ${service || 'Not specified'}</p>
  <p><strong>Message:</strong></p>
  <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
    ${message.replace(/\n/g, '<br>')}
  </div>
</div>
      `,
    };

    // Send email
    await transporter.sendMail(mailData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
} 