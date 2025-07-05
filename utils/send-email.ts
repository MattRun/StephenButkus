// // utils/send-email.ts

// import sgMail from '@sendgrid/mail';

// sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// export default async function sendVerificationEmail(email: string, url: string) {
//   const msg = {
//     to: email,
//     from: 'info@pinnaclelab.com', // Change to your verified sender
//     subject: 'Verify Your Email',
//     html: `<p>Please click the following link to verify your email: <a href="${url}">Verify Email</a></p>`,
//   };

//   await sgMail.send(msg);
// }


// utils/send-emails.ts

// import sgMail from '@sendgrid/mail';

// export const sendVerificationEmail = async (to: string, verificationUrl: string) => {
//   console.log("Preparing to send email"); // Start email send process
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

//   const msg = {
//     to,
//     from: 'your_verified_sender@example.com', // Replace with your SendGrid verified sender email
//     subject: 'Verify Your Email',
//     html: `<p>Click <a href="${verificationUrl}">here</a> to verify your email.</p>`,
//   };

//   try {
//     console.log("Email message constructed:", msg); // Log email structure
//     await sgMail.send(msg);
//     console.log("Email sent successfully"); // Confirm email was sent
//   } catch (error) {
//     console.error("Error sending email:", error); // Log any errors in sending email
//     throw new Error('Could not send verification email');
//   }
// };


import CoursePage from '@/app/dashboard/pages/alltraining/page';
import * as sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export const sendVerificationEmail = async (to: string, verificationUrl: string) => {
  const msg = {
    to,
    from: 'info@pinnaclelab.com', // Replace with your verified sender email
    subject: 'Welcome to AEHS Training!',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>Welcome to AEHS Training!</h2>
        <p>Thank you for signing up and joining our community. We're thrilled to have you on board!</p>
        <p>At AEHS Training, we offer a wide variety of courses to help you achieve your goals. Feel free to browse our full course catalog by clicking the button below:</p>
        <p style="text-align: center; margin: 20px 0;">
          <a 
            href="${CoursePage}" 
            style="background-color: #0056b3; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">
            Browse Courses
          </a>
        </p>
        <p>If you have any questions or need assistance, don't hesitate to contact our support team at 
          <a href="mailto:info@pinnaclelab.com" style="color: #0056b3;">info@pinnaclelab.com</a>.
        </p>
        <p>Thank you again for choosing AEHS Training. We look forward to helping you achieve your goals!</p>
        <p>Best regards,<br/>The AEHS Training Team</p>
      </div>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log("Welcome email sent successfully");
  } catch (error: any) {
    if (error?.response?.body) {
      console.error("Error sending email:", error.response.body);
    } else {
      console.error("Error sending email:", error.message || error);
    }
    throw new Error('Could not send verification email');
  }
};