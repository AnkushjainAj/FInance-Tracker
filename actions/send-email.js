"use server";

import nodemailer from "nodemailer";
import { renderEmail } from "@/lib/render-email";

export async function sendEmail({ to, subject, react }) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Convert React component to HTML using @react-email/render
    const htmlContent = await renderEmail(react);

    const mailOptions = {
      from: `"Finance App" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error };
  }
}
