// app/api/user/onboarding/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Assume the user is logged in, and their ID is stored in the token
    const userId = 1; // Replace with actual user ID retrieval logic

    // Update the user's details in the database
    await prisma.user.update({
      where: { id: userId },
      data: {
        name: data.name,
        phone: data.phone,
        bio: data.bio,
        birthday: data.birthday ? new Date(data.birthday) : null,
        role: data.role,
      },
    });

    return NextResponse.json({ message: 'Onboarding data saved successfully' });
  } catch (error) {
    console.error('Error saving onboarding data:', error);
    return NextResponse.json({ error: 'Failed to save onboarding data' }, { status: 500 });
  }
}
