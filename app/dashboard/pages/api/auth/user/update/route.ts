import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Make sure to configure Prisma in lib/prisma.ts
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { userId, name, email, phone, bio, birthday, image } = await req.json();

    // Update the user profile
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        email,
        phone,
        bio,
        birthday: birthday ? new Date(birthday) : undefined,
        image,
      },
    });

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Failed to update profile' });
  }
}
