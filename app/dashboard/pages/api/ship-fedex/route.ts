

// import { NextRequest, NextResponse } from "next/server";
// import * as sgMail from "@sendgrid/mail";


// // Set SendGrid API Key
// sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);


// // FedEx credentials from environment variables
// const FEDEX_CLIENT_ID = process.env.FEDEX_CLIENT_ID!;
// const FEDEX_CLIENT_SECRET = process.env.FEDEX_CLIENT_SECRET!;
// const FEDEX_ACCOUNT_NUMBER = process.env.FEDEX_ACCOUNT_NUMBER!;


// async function getFedExAuthToken() {
//  const authRes = await fetch("https://apis.fedex.com/oauth/token", {
//    method: "POST",
//    headers: { "Content-Type": "application/x-www-form-urlencoded" },
//    body: new URLSearchParams({
//      grant_type: "client_credentials",
//      client_id: FEDEX_CLIENT_ID,
//      client_secret: FEDEX_CLIENT_SECRET,
//    }),
//  });
//  if (!authRes.ok) {
//    const text = await authRes.text();
//    throw new Error(`FedEx OAuth Error: ${text}`);
//  }
//  const data = await authRes.json();
//  if (!data.access_token) throw new Error("No access_token from FedEx");
//  return data.access_token;
// }


// export async function POST(req: NextRequest) {
//  try {
//    // 1) Parse JSON from the client
//    const body = await req.json();
//    const { sender, package: pkg } = body;


//    if (!sender || !pkg) {
//      return NextResponse.json(
//        { error: "Missing sender/package in request body." },
//        { status: 400 }
//      );
//    }


//    // Destructure sender details
//    const {
//      name: senderName,
//      address: senderAddr,
//      city: senderCity,
//      state: senderState,
//      zip: senderZip,
//      phone: senderPhone,
//    } = sender;


//    // Package details
//    const { weight, serviceType } = pkg;


//    // 2) Get FedEx OAuth token
//    const token = await getFedExAuthToken();


//    // 3) Build the FedEx Ship API request
//    const requestBody = {
//      accountNumber: { value: FEDEX_ACCOUNT_NUMBER },
//      labelResponseOptions: "URL_ONLY",
//      requestedShipment: {
//        shipDatestamp: new Date().toISOString().split("T")[0],
//        serviceType,
//        packagingType: "YOUR_PACKAGING", // Adjust as needed
//        pickupType: "DROPOFF_AT_FEDEX_LOCATION",
//        totalWeight: weight || 1.0,
//        shipper: {
//          address: {
//            streetLines: [senderAddr],
//            city: senderCity,
//            stateOrProvinceCode: senderState,
//            postalCode: senderZip,
//            countryCode: "US",
//          },
//          contact: {
//            personName: senderName,
//            phoneNumber: senderPhone?.replace(/\D+/g, ""),
//          },
//        },
//        recipients: [
//          {
//            address: {
//              streetLines: ["15200 Grevillea Avenue", "Suite A-1"],
//              city: "Lawndale",
//              stateOrProvinceCode: "CA",
//              postalCode: "90260",
//              countryCode: "US",
//            },
//            contact: {
//              personName: "Void Creatives",
//              phoneNumber: "3104319270",
//            },
//          },
//        ],
//        shippingChargesPayment: {
//          paymentType: "SENDER",
//          payor: {
//            responsibleParty: {
//              accountNumber: { value: FEDEX_ACCOUNT_NUMBER },
//              address: { countryCode: "US" },
//            },
//          },
//        },
//        requestedPackageLineItems: [
//          {
//            groupPackageCount: 1,
//            weight: {
//              units: "LB",
//              value: weight || 1.0,
//            },
//          },
//        ],
//        labelSpecification: {
//          imageType: "PDF", // Options: PDF, PNG, etc.
//          labelStockType: "PAPER_4X6",
//          labelPrintingOrientation: "TOP_EDGE_OF_TEXT_FIRST",
//          labelOrder: "SHIPPING_LABEL_FIRST",
//        },
//      },
//    };


//    // 4) Call FedEx Ship API using production endpoint
//    const fedexRes = await fetch("https://apis.fedex.com/ship/v1/shipments", {
//      method: "POST",
//      headers: {
//        Authorization: `Bearer ${token}`,
//        "Content-Type": "application/json",
//      },
//      body: JSON.stringify(requestBody),
//    });


//    if (!fedexRes.ok) {
//      const error = await fedexRes.text();
//      console.error("FedEx Ship Error:", error);
//      return NextResponse.json({ error }, { status: 400 });
//    }


//    const data = await fedexRes.json();


//    // 5) Extract label URL and tracking number
//    let labelUrl: string | null = null;
//    let trackingNumber: string | null = null;
//    const shipmentOut = data.output;
//    if (shipmentOut?.transactionShipments?.length) {
//      const ts = shipmentOut.transactionShipments[0];
//      trackingNumber = ts.trackingNumber || null;
//      if (ts?.pieceResponses?.length) {
//        const docs = ts.pieceResponses[0].packageDocuments || [];
//        if (docs.length > 0) {
//          labelUrl = docs[0].url;
//        }
//      }
//      if (!labelUrl && ts?.shipmentDocuments?.length) {
//        labelUrl = ts.shipmentDocuments[0].url;
//      }
//    }


//    // 6) Attempt to download the PDF (if labelUrl is available)
//    let pdfBase64 = "";
//    let pdfDownloadError = "";
//    if (labelUrl) {
//      const pdfRes = await fetch(labelUrl);
//      if (pdfRes.ok) {
//        const pdfBuffer = Buffer.from(await pdfRes.arrayBuffer());
//        pdfBase64 = pdfBuffer.toString("base64");
//      } else {
//        pdfDownloadError = await pdfRes.text();
//        console.error("Failed to download PDF from FedEx:", pdfDownloadError);
//      }
//    }


//    // 7) Compose email content for admin notification using SendGrid
//    const emailHtml = `
//      <h2>New FedEx Shipping Label Created</h2>
//      <p><strong>Sender:</strong> ${senderName}</p>
//      <p><strong>Tracking Number:</strong> ${trackingNumber || "N/A"}</p>
//      ${
//        labelUrl
//          ? `<p>Label URL: <a href="${labelUrl}">${labelUrl}</a></p>`
//          : `<p>No label URL was returned.</p>`
//      }
//      ${
//        pdfDownloadError
//          ? `<p style="color: red;">PDF download error: ${pdfDownloadError}</p>`
//          : ""
//      }
//    `;


//    const msg = {
//      to: "info@pinnaclelab.com",
//      from: "info@pinnaclelab.com", // Verified sender
//      subject: `New Shipping Label Created for ${senderName}`,
//      text: `A new shipping label has been created.
// Tracking Number: ${trackingNumber || "N/A"}
// Label URL: ${labelUrl || "N/A"}`,
//      html: emailHtml,
//      attachments:
//        pdfBase64 && !pdfDownloadError
//          ? [
//              {
//                content: pdfBase64,
//                filename: "shipping-label.pdf",
//                type: "application/pdf",
//                disposition: "attachment",
//              },
//            ]
//          : undefined,
//    };


//    await sgMail.send(msg);


//    // 8) Return success JSON
//    return NextResponse.json({
//      success: true,
//      shipment: data.output,
//      labelUrl: labelUrl || null,
//      trackingNumber: trackingNumber || null,
//    });
//  } catch (err: any) {
//    console.error("Ship-FedEx POST Error:", err.message);
//    return NextResponse.json({ error: err.message }, { status: 500 });
//  }
// }



import { NextRequest, NextResponse } from "next/server";
import * as sgMail from "@sendgrid/mail";

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

// FedEx credentials from environment variables
const FEDEX_CLIENT_ID = process.env.FEDEX_CLIENT_ID!;
const FEDEX_CLIENT_SECRET = process.env.FEDEX_CLIENT_SECRET!;
const FEDEX_ACCOUNT_NUMBER = process.env.FEDEX_ACCOUNT_NUMBER!;

async function getFedExAuthToken() {
  const authRes = await fetch("https://apis.fedex.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: FEDEX_CLIENT_ID,
      client_secret: FEDEX_CLIENT_SECRET,
    }),
  });
  if (!authRes.ok) {
    const text = await authRes.text();
    throw new Error(`FedEx OAuth Error: ${text}`);
  }
  const data = await authRes.json();
  if (!data.access_token) throw new Error("No access_token from FedEx");
  return data.access_token;
}

export async function POST(req: NextRequest) {
  try {
    // 1) Parse JSON from the client
    const body = await req.json();
    const { sender, package: pkg } = body;

    if (!sender || !pkg) {
      return NextResponse.json(
        { error: "Missing sender/package in request body." },
        { status: 400 }
      );
    }

    // Destructure sender details
    const {
      name: senderName,
      address: senderAddr,
      city: senderCity,
      state: senderState,
      zip: senderZip,
      phone: senderPhone,
    } = sender;

    // Package details
    const { weight, serviceType } = pkg;

    // 2) Get FedEx OAuth token
    const token = await getFedExAuthToken();

    // 3) Build the FedEx Ship API request
    const requestBody = {
      accountNumber: { value: FEDEX_ACCOUNT_NUMBER },
      labelResponseOptions: "URL_ONLY",
      requestedShipment: {
        shipDatestamp: new Date().toISOString().split("T")[0],
        serviceType,
        packagingType: "YOUR_PACKAGING",
        pickupType: "DROPOFF_AT_FEDEX_LOCATION",
        totalWeight: weight || 1.0,
        shipper: {
          address: {
            streetLines: [senderAddr],
            city: senderCity,
            stateOrProvinceCode: senderState,
            postalCode: senderZip,
            countryCode: "US",
          },
          contact: {
            personName: senderName,
            phoneNumber: senderPhone?.replace(/\D+/g, ""),
          },
        },
        recipients: [
          {
            address: {
              streetLines: ["15200 Grevillea Avenue", "Suite A-1"],
              city: "Lawndale",
              stateOrProvinceCode: "CA",
              postalCode: "90260",
              countryCode: "US",
            },
            contact: {
              personName: "Void Creatives",
              phoneNumber: "3104319270",
            },
          },
        ],
        shippingChargesPayment: {
          paymentType: "SENDER",
          payor: {
            responsibleParty: {
              accountNumber: { value: FEDEX_ACCOUNT_NUMBER },
              address: { countryCode: "US" },
            },
          },
        },
        requestedPackageLineItems: [
          {
            groupPackageCount: 1,
            weight: {
              units: "LB",
              value: weight || 1.0,
            },
          },
        ],
        labelSpecification: {
          imageType: "PDF",
          labelStockType: "PAPER_4X6",
          labelPrintingOrientation: "TOP_EDGE_OF_TEXT_FIRST",
          labelOrder: "SHIPPING_LABEL_FIRST",
        },
      },
    };

    // 4) Call FedEx Ship API
    const fedexRes = await fetch("https://apis.fedex.com/ship/v1/shipments", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!fedexRes.ok) {
      const error = await fedexRes.text();
      console.error("FedEx Ship Error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    const data = await fedexRes.json();

    // 5) Extract label URL and tracking number
    let labelUrl: string | null = null;
    let trackingNumber: string | null = null;
    const shipmentOut = data.output;

    if (shipmentOut?.transactionShipments?.length) {
      const ts = shipmentOut.transactionShipments[0];
      
      // Try multiple sources for tracking number and format it
      trackingNumber = ts.masterTrackingNumber || 
                      (ts.pieceResponses?.[0]?.trackingNumber) || 
                      (ts.completedShipmentDetail?.masterTrackingId?.trackingNumber);
      
      // Format the tracking number with spaces (e.g., "7728 1170 0474")
      if (trackingNumber && trackingNumber.length === 12) {
        trackingNumber = trackingNumber.replace(/(\d{4})(\d{4})(\d{4})/, "$1 $2 $3");
      }

      // Extract label URL
      if (ts?.pieceResponses?.length) {
        const docs = ts.pieceResponses[0].packageDocuments || [];
        if (docs.length > 0) {
          labelUrl = docs[0].url;
        }
      }
      if (!labelUrl && ts?.shipmentDocuments?.length) {
        labelUrl = ts.shipmentDocuments[0].url;
      }
    }

    // 6) Attempt to download the PDF
    let pdfBase64 = "";
    let pdfDownloadError = "";
    if (labelUrl) {
      const pdfRes = await fetch(labelUrl);
      if (pdfRes.ok) {
        const pdfBuffer = Buffer.from(await pdfRes.arrayBuffer());
        pdfBase64 = pdfBuffer.toString("base64");
      } else {
        pdfDownloadError = await pdfRes.text();
        console.error("Failed to download PDF from FedEx:", pdfDownloadError);
      }
    }

//     // 7) Compose email content for admin notification
//     const emailHtml = `
//       <h2>New FedEx Shipping Label Created</h2>
//       <p><strong>Sender:</strong> ${senderName}</p>
//       <p><strong>Tracking Number:</strong> ${trackingNumber || "N/A"}</p>
//       <p><strong>Service Type:</strong> ${serviceType}</p>
//       <p><strong>Weight:</strong> ${weight || "1.0"} LB</p>
//       ${
//         labelUrl
//           ? `<p>Label URL: <a href="${labelUrl}">${labelUrl}</a></p>`
//           : `<p>No label URL was returned.</p>`
//       }
//       ${
//         pdfDownloadError
//           ? `<p style="color: red;">PDF download error: ${pdfDownloadError}</p>`
//           : ""
//       }
//     `;

//     const msg = {
//       to: "info@pinnaclelab.com",
//       from: "info@pinnaclelab.com",
//       subject: `New Shipping Label Created for ${senderName} - Tracking #${trackingNumber || "N/A"}`,
//       text: `A new shipping label has been created.
// Sender: ${senderName}
// Tracking Number: ${trackingNumber || "N/A"}
// Service Type: ${serviceType}
// Weight: ${weight || "1.0"} LB
// Label URL: ${labelUrl || "N/A"}`,
//       html: emailHtml,
//       attachments: pdfBase64 && !pdfDownloadError
//         ? [{
//             content: pdfBase64,
//             filename: `FedEx_Label_${trackingNumber?.replace(/\s/g, "") || "Shipping"}.pdf`,
//             type: "application/pdf",
//             disposition: "attachment",
//           }]
//         : undefined,
//     };

//     await sgMail.send(msg);


// 7) Compose email content for admin notification
const trackingUrl = trackingNumber 
  ? `https://www.fedex.com/fedextrack/?trknbr=${trackingNumber.replace(/\s/g, '')}` 
  : null;

const emailHtml = `
  <h2>New FedEx Shipping Label Created</h2>
  <p><strong>Sender:</strong> ${senderName}</p>
  <p><strong>Tracking Number:</strong> ${trackingNumber || "N/A"}</p>
  ${
    trackingUrl
      ? `<p><strong>Track Package:</strong> <a href="${trackingUrl}" target="_blank">Click here to track</a></p>`
      : `<p>No tracking information available.</p>`
  }
  <p><strong>Service Type:</strong> ${serviceType}</p>
  <p><strong>Weight:</strong> ${weight || "1.0"} LB</p>
  ${
    labelUrl
      ? `<p>Label URL: <a href="${labelUrl}" target="_blank">${labelUrl}</a></p>`
      : `<p>No label URL was returned.</p>`
  }
  ${
    pdfDownloadError
      ? `<p style="color: red;">PDF download error: ${pdfDownloadError}</p>`
      : ""
  }
`;

const msg = {
  to: "info@pinnaclelab.com",
  from: "info@pinnaclelab.com",
  subject: `New Shipping Label Created for ${senderName} - Tracking #${trackingNumber || "N/A"}`,
  text: `A new shipping label has been created.
Sender: ${senderName}
Tracking Number: ${trackingNumber || "N/A"}
${trackingUrl ? `Track Package: ${trackingUrl}` : "No tracking information available."}
Service Type: ${serviceType}
Weight: ${weight || "1.0"} LB
Label URL: ${labelUrl || "N/A"}`,
  html: emailHtml,
  attachments: pdfBase64 && !pdfDownloadError
    ? [{
        content: pdfBase64,
        filename: `FedEx_Label_${trackingNumber?.replace(/\s/g, "") || "Shipping"}.pdf`,
        type: "application/pdf",
        disposition: "attachment",
      }]
    : undefined,
};

// 8) Send email and return success JSON (unchanged)
await sgMail.send(msg);

return NextResponse.json({
  success: true,
  shipment: data.output,
  labelUrl: labelUrl || null,
  trackingNumber: trackingNumber || null,
  trackingUrl: trackingUrl || null, // Optional: return the tracking URL in the response
});




//     // 8) Return success JSON
//     return NextResponse.json({
//       success: true,
//       shipment: data.output,
//       labelUrl: labelUrl || null,
//       trackingNumber: trackingNumber || null,
//     });
  } catch (err: any) {
    console.error("Ship-FedEx POST Error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}