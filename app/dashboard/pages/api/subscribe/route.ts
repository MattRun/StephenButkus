import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export const dynamic = "force-dynamic";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Prepare the subscription confirmation email for the user
    const userMsg = {
      to: email,
      from: "info@pinnaclelab.com", // Replace with your verified sender
      subject: "Subscription Confirmation - Void Creatives",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta charset="UTF-8">
            <title>Subscription Confirmation</title>
            <style>
              body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f6f6f6; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; background: #fff; padding: 20px; }
              .header { background-color: #1c3b6e; color: #fff; padding: 20px; text-align: center; }
              .content { padding: 20px; }
              .button { background-color: #1c3b6e; color: #fff; padding: 15px 25px; text-decoration: none; border-radius: 5px; display: inline-block; }
              .footer { text-align: center; padding: 10px; font-size: 12px; color: #888; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Welcome to Void Creatives!</h1>
              </div>
              <div class="content">
                <p>Thank you for subscribing to our newsletter. You will now receive our latest news, articles, and exclusive offers directly in your inbox.</p>
                <p>We look forward to keeping you updated with our cutting-edge environmental testing news and insights.</p>
                <p style="text-align: center; margin-top: 20px;">
                  <a href="https://pinnaclelab.com" class="button" target="_blank">Visit Our Website</a>
                </p>
              </div>
              <div class="footer">
                <p>Void Creatives | 15200 Grevillea Avenue, Suite A-1, Lawndale, CA 90260</p>
                <p>info@pinnaclelab.com | (310) 431-9270</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    await sgMail.send(userMsg);

    // Prepare the admin notification email
    const adminMsg = {
      to: "info@pinnaclelab.com",
      from: "info@pinnaclelab.com",
      subject: "New Subscriber Notification - Void Creatives",
      html: `
        <h2>New Subscriber Added</h2>
        <p>A new user has subscribed to our newsletter.</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>Please add this email to your mailing list.</p>
      `,
    };

    await sgMail.send(adminMsg);

    // Return a successful response with popup details
    return NextResponse.json(
      {
        message: "Subscription successful",
        popup: {
          title: "Thank You for Subscribing!",
          subheading: "Welcome to Void Creatives",
          text: "You will now receive the latest news, articles, and exclusive offers.",
          imageUrl: "/AdobeStock_1.png", // Update with your desired image path
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error subscribing user:", error);
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
  }
}
