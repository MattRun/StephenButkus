import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  // Parse query parameters from the URL
  const url = new URL(req.url);
  const email = url.searchParams.get('email'); // Expecting ?email=<email> in the query string

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  try {
    // Fetch the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Return the user data, including the role
    return NextResponse.json({
      id: user.id,
      email: user.email,
      role: user.role,
      verified: user.verified,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
