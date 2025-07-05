import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Check if email is provided
    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    // Case-insensitive email match
    const user = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive', // Case-insensitive match
        },
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'No user found with this email.' }, { status: 404 });
    }

    // Generate a new verification code and expiration timestamp
    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
    const codeExpiresAt = new Date(Date.now() + 15 * 60 * 1000); // Code valid for 15 minutes

    // Update user with new code and expiration time
    await prisma.user.update({
      where: { email: user.email },
      data: {
        verificationCode,
        codeExpiresAt,
      },
    });

    console.log(`New verification code sent to ${email}: ${verificationCode}`);

    return NextResponse.json(
      { message: 'Verification code resent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in resend-code route:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing the request.' },
      { status: 500 }
    );
  }
}
