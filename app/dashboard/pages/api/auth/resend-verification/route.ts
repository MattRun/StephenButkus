// app/api/auth/resend-verification/route.ts

import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';
import { sendVerificationEmail } from '@/utils/send-email';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (user.verified) {
      return NextResponse.json({ message: 'User is already verified' }, { status: 200 });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    const verificationUrl = `${process.env.NEXT_PUBLIC_URL}/api/auth/verify-email?token=${token}`;

    await sendVerificationEmail(email, verificationUrl);

    return NextResponse.json({ message: 'Verification email resent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error resending verification email:', error);
    return NextResponse.json({ error: 'Error resending verification email' }, { status: 500 });
  }
}
