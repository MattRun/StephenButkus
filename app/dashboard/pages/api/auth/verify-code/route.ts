// app/dashboard/pages/api/auth/verify-code/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken'; // Use JSON Web Token for authentication
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { code } = await req.json();

    if (!code) {
      return NextResponse.json({ message: 'Verification code is required.' }, { status: 400 });
    }

    const user = await prisma.user.findFirst({
      where: {
        verificationCode: code,
        codeExpiresAt: { gte: new Date() },
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'Invalid or expired code.' }, { status: 400 });
    }

    // Update the user's verified status
    await prisma.user.update({
      where: { id: user.id },
      data: {
        verified: true,
        verificationCode: null,
        codeExpiresAt: null,
      },
    });

    // Create a JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });

    return NextResponse.json(
      {
        message: 'Verification successful',
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
  }
}
