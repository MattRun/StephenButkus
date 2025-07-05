import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { name, email, question } = await req.json();
    if (!name || !email || !question) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Prepare the admin notification email
    const adminMsg = {
      to: "info@pinnaclelab.com",
      from: "info@pinnaclelab.com",
      subject: "New Ask Our Experts Submission",
      html: `
        <h2>New Question Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Question:</strong> ${question}</p>
      `,
    };
    await sgMail.send(adminMsg);

    // Prepare the confirmation email to the user
    const userMsg = {
      to: email,
      from: "info@pinnaclelab.com",
      subject: "We Received Your Question",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to our experts. We have received your question and will respond as soon as possible.</p>
        <p>Best regards,<br/>Pinnacle Laboratory Team</p>
      `,
    };
    await sgMail.send(userMsg);

    return NextResponse.json({ message: "Your question has been submitted. We will contact you soon." }, { status: 200 });
  } catch (error) {
    console.error("Error in Ask Our Experts submission:", error);
    return NextResponse.json({ error: "Submission failed. Please try again later." }, { status: 500 });
  }
}
