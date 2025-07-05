import { NextResponse } from 'next/server';
import * as sgMail from '@sendgrid/mail';
// import { NextApiRequest, NextApiResponse } from 'next';
export const dynamic = 'force-dynamic';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { adminEmail, userEmail } = body;

    if (!adminEmail || !userEmail) {
      return NextResponse.json({ error: 'Missing required fields: adminEmail or userEmail' }, { status: 400 });
    }

    // Send email to admin
    await sgMail.send(adminEmail);

    // Send confirmation email to the user
    await sgMail.send(userEmail);

    console.log('Emails sent successfully');
    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending emails:', error.response ? error.response.body : error);
    return NextResponse.json({ error: 'Failed to send emails' }, { status: 500 });
  }
}

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const { adminEmail, userEmail } = await req.json();

//     if (!adminEmail || !userEmail) {
//       return res.status(400).json({ error: 'Missing required fields: adminEmail or userEmail' });
//     }

//     // Add "New Registration" to the subject line
//     adminEmail.subject = 'New Registration';

//     // Generate suggested response for the admin based on additionalInfo
//     const additionalInfo = adminEmail.html.match(/<strong>Additional Info:<\/strong>\s*(.*)<\/p>/)?.[1] || 'N/A';
//     let suggestedResponse = 'No additional info provided.';
//     if (additionalInfo !== 'N/A') {
//       if (additionalInfo.toLowerCase().includes('urgent')) {
//         suggestedResponse = 'The client mentioned this is urgent. Respond as soon as possible.';
//       } else if (additionalInfo.toLowerCase().includes('pricing')) {
//         suggestedResponse = 'The client asked about pricing details. Provide pricing breakdown or discounts.';
//       } else if (additionalInfo.toLowerCase().includes('schedule')) {
//         suggestedResponse = 'The client is inquiring about scheduling. Share available dates and options.';
//       } else {
//         suggestedResponse = `Suggested response: Follow up based on this info - "${additionalInfo}".`;
//       }
//     }

//     // Append suggested response to the admin email
//     adminEmail.html += `
//       <h3>Suggested Response</h3>
//       <p>${suggestedResponse}</p>
//     `;

//     adminEmail.from = { email: 'info@pinnaclelab.com', name: 'AEHS Training' };
//     userEmail.from = { email: 'info@pinnaclelab.com', name: 'AEHS Training' };

//     await sgMail.send(adminEmail);
//     await sgMail.send(userEmail);

//     return res.status(200).json({ message: 'Emails sent successfully' });
//   } catch (error: any) {
//     console.error('Error sending emails:', error.response ? error.response.body : error);
//     return res.status(500).json({ error: 'Failed to send emails' });
//   }
// }
