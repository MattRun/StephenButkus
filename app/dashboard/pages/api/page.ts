// import * as sgMail from '@sendgrid/mail';

// export default async function handler(req: any) {
  
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

//   const msg = {
//     to: req?.searchParams?.to, // Change to your recipient
//     from: 'info@pinnaclelab.com', // Change to your verified sender
//     subject: 'This is a simple message',
//     text: req?.searchParams?.text,
//     html: '<strong>and some html</strong>',
//   }
  
//   sgMail.send(msg)
// }


// import * as sgMail from '@sendgrid/mail';

// export default async function handler(req: any, res: any) {
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

//   // Use `searchParams` instead of `query`
//   const searchParams = req.searchParams;

//   // Safety check to ensure searchParams is defined
//   if (!searchParams) {
//     console.error('searchParams is undefined');
//     return res.status(400).json({ error: 'Request query parameters are missing' });
//   }

//   // Extract parameters from searchParams
//   const to = searchParams.to;
//   const text = searchParams.text;
//   const subject = searchParams.subject;

//   // Log the extracted parameters
//   console.log(`Sending email to: ${to}`);
//   console.log(`Email subject: ${subject}`);
//   console.log(`Email text: ${text}`);

//   // If any parameter is missing, return an error response
//   if (!to || !text || !subject) {
//     console.error('Missing required parameters:', { to, text, subject });
//     return res.status(400).json({ error: 'Missing required parameters: to, text, or subject' });
//   }

//   // Create the email message using the extracted parameters
//   const msg = {
//     to: to as string,
//     from: 'info@pinnaclelab.com',
//     subject: subject as string,
//     text: text as string,
//     html: `<p><strong>${text}</strong></p>`,
//   };

//   try {
//     await sgMail.send(msg);
//     console.log('Email sent successfully!');
//     return res.status(200).json({ message: 'Emails sent successfully!' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return res.status(500).json({ error: error.message });
//   }
// }


import * as sgMail from '@sendgrid/mail';

export default async function handler(req: any, res: any) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  const searchParams = req.searchParams;

  if (!searchParams) {
    console.error('searchParams is undefined');
    return res.status(400).json({ error: 'Request query parameters are missing' });
  }

  const to = searchParams.to;
  const text = searchParams.text;
  const subject = searchParams.subject;
  const name = searchParams.name; // Fallback if `name` is missing

  if (!to || !text || !subject) {
    console.error('Missing required parameters:', { to, text, subject });
    return res.status(400).json({ error: 'Missing required parameters: to, text, or subject' });
  }

  // Define the formatted HTML templates for each email type
  // const userConfirmationEmail = `
  //   <p>Dear ${name},</p>
  //   <p>Thank you for your question. We appreciate you reaching out to AEHS Training. Our team will review your message and get back to you as soon as possible.</p>
  //   <p>If your message requires immediate attention, feel free to call us at <strong>(310) 400-6153</strong> during business hours or reply to this email.</p>
  //   <p>Regards,</p>
  //   <p><strong>Steve Vaughn</strong></p>
  //   <p>AEHS Training | Academy of Envionmental Health & Safety</p>
  //   <p>Phone: <strong>(310) 400-6153</strong></p>
  //   <p>Email: <a href="mailto:info@pinnaclelab.com">info@pinnaclelab.com</a></p>
  //   <p>Website: <a href="https://aehstraining.com">https://aehstraining.com</a></p>
  // `;
  // === Updated userConfirmationEmail (PinnacleLab version) ===
// -------------------- User Confirmation Email --------------------
const userConfirmationEmail = `
<div style="font-family: 'Saira', sans-serif; line-height: 1.6; color: #333; background-color: #ECECEC; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    
    <!-- Header / Banner Section -->
    <header style="background: linear-gradient(90deg, #16436F, #10b1b4); color: #ffffff; text-align: center; padding: 20px;">
      <!-- Replace with your actual banner image -->
      <img 
        src="https://pinnaclelab.com/pinnaclelab/Logos/logoemail.png"
        alt="Pinnacle Laboratory Banner" 
        style="max-width: 200px; height: auto; border-radius: 5px;"
      />
    </header>

    <!-- Main Content -->
    <main style="padding: 20px;">
      <h2 style="color: #16436F; margin-top: 0;">
        Dear ${searchParams.name},
      </h2>
      <p>
        Thank you for reaching out to 
        <strong>Pinnacle Laboratory</strong>. We appreciate your inquiry and will respond as soon as possible. 
      </p>
      <p>Below is a copy of your message:</p>
        In the meantime, feel free to explore our 
        <a 
          href="https://pinnaclelab.com/dashboard/pages/faq"
          style="color: #16436F; text-decoration: none; font-weight: bold;"
        >
          FAQ
        </a> 
        page for more information.
      </p>
      <p style="margin-top: 24px;">
        Talk to you soon,<br />
        <strong>Pinnacle Team</strong>
      </p>
    </main>

    <!-- Footer -->
    <footer style="background-color: #f9f9f9; color: #777; padding: 10px; text-align: center; font-size: 14px;">
      <p style="margin: 0; font-weight: bold;">PinnacleLab</p>
      <p style="margin: 0;">15200 Grevillea Ave, Suite A-1, Lawndale, CA 90260</p>
      <p style="margin: 0;">
        Phone: 
        <a 
          href="tel:+13104319270" 
          style="color: #16436F;"
        >
          (310) 431-9270
        </a>
      </p>
      <p style="margin: 0;">
        Website: 
        <a 
          href="https://pinnaclelab.com" 
          style="color: #16436F;"
        >
          pinnaclelab.com
        </a>
      </p>
    </footer>
  </div>
</div>
`;

// -------------------- Admin Notification Email --------------------
const adminNotificationEmail = `
<div style="font-family: 'Saira', sans-serif; line-height: 1.6; color: #333;">
  <blockquote style="border-left: 2px solid #ccc; padding-left: 10px; margin-left: 0;">
    ${text}
  </blockquote>
  <p>Please follow up with the customer as soon as possible.</p>
  <hr />
  <p style="color: #555;">This is an automated notification. Do not reply directly to this email.</p>
  <p><strong>PinnacleLab Team</strong></p>
</div>
`;



  // Use a single `msg` object and dynamically assign the correct HTML template
  const msg = {
    to: to as string,
    from: 'info@pinnaclelab.com', // Your verified sender email
    subject: subject as string,
    text: text as string,
    html: to === 'info@pinnaclelab.com' ? adminNotificationEmail : userConfirmationEmail, // Choose the template based on recipient
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully!');
    return res.status(200).json({ message: 'Emails sent successfully!' });
     } catch (error) {
    console.error('Error sending email:', error);

    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';

    return res.status(500).json({ error: errorMessage });
  }

}


// import * as sgMail from '@sendgrid/mail';

// export default async function handler(req: any, res: any) {
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

//   try {
//     // Ensure the request method is GET
//     if (req.method !== 'GET') {
//       return res.status(405).json({ error: 'Method not allowed' });
//     }

//     // Safely extract query parameters
//     const { to, text, subject, name = 'Valued Customer', email } = req.query || {};

//     // Validate required parameters
//     if (!to || !text || !subject) {
//       return res.status(400).json({
//         error: 'Missing required query parameters: to, text, or subject',
//         received: req.query,
//       });
//     }

//     // Define email templates
//     const userConfirmationEmail = `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
//         <div style="background-color: #007bff; color: #ffffff; padding: 20px; text-align: center;">
//           <h1 style="margin: 0;">Academy of Environmental Health & Safety</h1>
//           <p style="margin: 0;">Thank you for contacting us!</p>
//         </div>
//         <div style="padding: 20px; text-align: center;">
//           <img src="${process.env.NEXT_PUBLIC_BASE_URL}/AEHS_Logo.png" alt="AEHS Logo" style="width: 150px; border-radius: 8px;" />
//         </div>
//         <div style="padding: 20px; color: #333;">
//           <p>Dear ${name},</p>
//           <p>Thank you for reaching out to AEHS Training. We have received your inquiry and will respond as soon as we can.</p>
//           <p>Best regards, <br />AEHS Training Team</p>
//         </div>
//       </div>
//     `;

//     const adminNotificationEmail = `
//       <h2>New General Inquiry Received</h2>
//       <p><strong>Sender's Name:</strong> ${name}</p>
//       <p><strong>Sender's Email:</strong> <a href="mailto:${email}">${email}</a></p>
//       <p><strong>Message:</strong></p>
//       <blockquote style="border-left: 2px solid #ccc; padding-left: 10px; margin-left: 0;">
//         ${text}
//       </blockquote>
//       <p>Please follow up with the customer as soon as possible.</p>
//     `;

//     // Choose email template based on recipient
//     const html = to === 'info@pinnaclelab.com' ? adminNotificationEmail : userConfirmationEmail;

//     // Send email
//     const msg = {
//       to,
//       from: 'info@pinnaclelab.com',
//       subject,
//       text,
//       html,
//     };

//     await sgMail.send(msg);

//     console.log('Email sent successfully!');
//     return res.status(200).json({ message: 'Email sent successfully!' });
//   } catch (error: any) {
//     console.error('Error sending email:', error);
//     return res.status(500).json({ error: error.message || 'Failed to send email' });
//   }
// }
