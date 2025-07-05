// // // pages/api/auth/register.ts

// // import bcrypt from 'bcrypt';
// // import jwt from 'jsonwebtoken';
// // import prisma from '@/lib/prisma';
// // import { sendVerificationEmail } from '@/utils/send-email';

// // export default async function handler(req: any, res: any) {
// //   console.log('Register API route hit'); // Debugging log

// //   if (req.method === 'POST') {
// //     const { email, password } = req.body;
// //     console.log(`Received data: email=${email}, password=${password}`); // Debugging log

// //     try {
// //       console.log('test')
// //       // Hash password
// //       const hashedPassword = await bcrypt.hash(password, 10);

// //       // Create user in database
// //       const user = await prisma.user.create({
// //         data: {
// //           email,
// //           password: hashedPassword,
// //           verified: false,
// //         },
// //       });
// //       console.log('User created successfully:', user);

// //       // Generate token for email verification
// //       const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
// //       const verificationUrl = `${process.env.NEXT_PUBLIC_URL}/verify-email?token=${token}`;
// //       console.log('Verification URL:', verificationUrl); // Debugging log

// //       // Send verification email
// //       await sendVerificationEmail(email, verificationUrl);

// //       return res.status(201).json({ message: 'Registration successful, please verify your email.' });
// //     } catch (error) {
// //       console.error('Error during user registration:', error);
// //       return res.status(500).json({ error: 'Error registering user' });
// //     }
// //   } else {
// //     return res.status(405).json({ message: 'Method not allowed' });
// //   }
// // }

// import { NextResponse } from 'next/server';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import prisma from '@/lib/prisma'; // Adjust this import based on your `lib` directory structure
// import { sendVerificationEmail } from '@/utils/send-email';





// export default async function POST(request: any) {
//   try {
//     const body = await request.body;
//     console.log(request)

//     // // Hash the password
//     // const hashedPassword = await bcrypt.hash(password, 10);

//     // // Create a new user in the database
//     // const user = await prisma.user.create({
//     //   data: {
//     //     email:email,
//     //     password: hashedPassword,
//     //     verified: false,
//     //   },
//     // });
//     // // Generate a verification token
//     // const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
//     // const verificationUrl = `${process.env.NEXT_PUBLIC_URL}/verify-email?token=${token}`;

//     // // Send verification email
//     // await sendVerificationEmail(email, verificationUrl);

//     // // Respond with a success message
//     // return NextResponse.json({ message: 'Registration successful, please verify your email.' }, { status: 201 });
//   } catch (error) {
//     console.error('Error registering user:', error);
//     return NextResponse.json({ message: 'Error registering user' }, { status: 500 });
//   }
// }

// import { NextResponse } from 'next/server';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import prisma from '@/lib/prisma';
// import { sendVerificationEmail } from '@/utils/send-email';

// export async function POST(request: Request) {
//   try {
//     const { email, password } = await request.json();
//     console.log("Parsed request JSON:", { email, password });

//     if (!email || !password) {
//       return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
//     }

//     const existingUser = await prisma.user.findUnique({
//       where: { email },
//     });
//     if (existingUser) {
//       return NextResponse.json({ error: 'User already exists' }, { status: 400 });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await prisma.user.create({
//       data: { email, password: hashedPassword, verified: false },
//     });

//     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
//     const verificationUrl = `${process.env.NEXT_PUBLIC_URL}/verify-email?token=${token}`;

//     await sendVerificationEmail(email, verificationUrl);

//     return NextResponse.json({ message: 'Registration successful, please verify your email.' }, { status: 201 });
//   } catch (error) {
//     console.error('Error in registration:', error.message);
//     return NextResponse.json({ error: 'Error registering user' }, { status: 500 });
//   }
// }

// export function GET() {
//   return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
// }


// pages/api/auth/register.ts
// app/dashboard/pages/api/auth/register/route.ts

import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { sendVerificationEmail } from '@/utils/send-email';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Missing required fields: email or password' }, { status: 400 });
    }

    // Check for an existing user
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a 4-digit code
    const codeExpiresAt = new Date(Date.now() + 10 * 60000); // Code expires in 10 minutes

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        verified: false,
        verificationCode,
        codeExpiresAt,
      },
    });

    // Send verification email
    await sendVerificationEmail(email, verificationCode); // Reuse the function to send the 4-digit code

    const msg = {
      to: email,
      from: 'info@pinnaclelab.com', // Verified sender email
      subject: 'Your 4-Digit Verification Code',
      html: `
        <div>
          <p>Hello,</p>
          <p>Thank you for registering. Your 4-digit verification code is:</p>
          <h2>${verificationCode}</h2>
          <p>This code will expire in 10 minutes. Please enter it on the confirmation page to verify your email.</p>
          <p>If you didn’t sign up, please ignore this email.</p>
        </div>
      `,
    };

    // Attempt to send email
    try {
      await sgMail.send(msg);
      return NextResponse.json({ message: 'Registration successful! Please check your email for the verification code.' }, { status: 201 });
    } catch (error) {
      const err = error as any; // Cast to 'any' to access properties
      console.error('Error sending email:', err.response ? err.response.body : err.message);
      return NextResponse.json({ error: 'Could not send verification email' }, { status: 500 });
    }

  } catch (error) {
    console.error('Error in registration:', (error as Error).message);
    return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
  }

}
