import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export const dynamic = "force-dynamic";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

/**
 * Updated search function that returns search links for popular e-commerce sites.
 */
async function searchWebForProduct(productName: string): Promise<{ title: string; url: string }[]> {
  const encodedQuery = encodeURIComponent(productName);
  return [
    {
      title: `Search on Amazon for "${productName}"`,
      url: `https://www.amazon.com/s?k=${encodedQuery}`,
    },
    {
      title: `Search on eBay for "${productName}"`,
      url: `https://www.ebay.com/sch/i.html?_nkw=${encodedQuery}`,
    },
    {
      title: `Search on Walmart for "${productName}"`,
      url: `https://www.walmart.com/search/?query=${encodedQuery}`,
    },
  ];
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name")?.toString();
    const contactNumber = formData.get("contactNumber")?.toString() || "";
    const email = formData.get("email")?.toString();
    const productName = formData.get("productName")?.toString() || "";
    const productDescription = formData.get("productDescription")?.toString() || "";

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and Email are required." },
        { status: 400 }
      );
    }

    // Process file attachments (if any)
    const attachments = [];
    const files = formData.getAll("images");
    for (const file of files) {
      if (file instanceof File) {
        const arrayBuffer = await file.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString("base64");
        attachments.push({
          content: base64,
          filename: file.name,
          type: file.type,
          disposition: "attachment",
        });
      }
    }

    // If a product name is provided, search the web for product links.
    let productSearchResults: { title: string; url: string }[] = [];
    if (productName) {
      productSearchResults = await searchWebForProduct(productName);
    }

    // Prepare the admin notification email with product research and suggested links.
    const adminMsg = {
      to: "info@pinnaclelab.com",
      from: "info@pinnaclelab.com",
      subject: "New Product Inquiry Submission",
      html: `
        <h2>New Product Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${contactNumber ? `<p><strong>Contact Number:</strong> ${contactNumber}</p>` : ""}
        ${productName ? `<p><strong>Product Name:</strong> ${productName}</p>` : ""}
        ${productDescription ? `<p><strong>Product Description:</strong> ${productDescription}</p>` : ""}
        ${
          productSearchResults.length
            ? `<h3>Suggested Search Links:</h3>
               <ul>
                 ${productSearchResults.map(item => `<li><a href="${item.url}" target="_blank">${item.title}</a></li>`).join("")}
               </ul>`
            : ""
        }
      `,
      attachments,
    };

    // Send email to admin.
    await sgMail.send(adminMsg);

    // Prepare the enhanced confirmation email to the user with inline CSS.
    const userMsg = {
      to: email,
      from: "info@pinnaclelab.com",
      subject: "We Received Your Product Inquiry",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Inquiry Confirmation</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f6f6f6;
                margin: 0;
                padding: 0;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background: #fff;
                padding: 20px;
              }
              .header {
                background-color: #1c3b6e;
                color: #fff;
                padding: 20px;
                text-align: center;
              }
              .content {
                padding: 20px;
              }
              .button {
                background-color: #1c3b6e;
                color: #fff;
                padding: 10px 20px;
                text-decoration: none;
                border-radius: 4px;
              }
              .footer {
                text-align: center;
                padding: 10px;
                font-size: 12px;
                color: #888;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Your Inquiry!</h1>
              </div>
              <div class="content">
                <p>Dear ${name},</p>
                <p>Thank you for reaching out regarding ${
                  productName ? `<strong>${productName}</strong>` : "your inquiry"
                }.</p>
                <p>We have received your details and will contact you soon with further information.</p>
                <p>If you have any immediate questions, feel free to reply to this email or contact us at <a href="mailto:info@pinnaclelab.com">info@pinnaclelab.com</a>.</p>
                <p style="text-align: center; margin-top: 20px;">
                  <a class="button" href="https://pinnaclelab.com" target="_blank">Visit Our Website</a>
                </p>
              </div>
              <div class="footer">
                <p>The Pinnacle Lab Team</p>
                <p>info@pinnaclelab.com | (310) 431-9270</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Send the confirmation email to the user.
    await sgMail.send(userMsg);

    // Return a successful response with popup data.
    return NextResponse.json(
      {
        message: "Inquiry submitted successfully.",
        popup: {
          title: "Thank You!",
          subheading: "Inquiry Received",
          text: "We have received your product inquiry. Our team will contact you soon with more details.",
          imageUrl: "/AdobeStock_1.png", // Update with the correct image path if needed
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    return NextResponse.json(
      { error: "Inquiry submission failed. Please try again later." },
      { status: 500 }
    );
  }
}
