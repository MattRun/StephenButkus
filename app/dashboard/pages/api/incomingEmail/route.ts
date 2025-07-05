// app/api/notifications/incomingEmail/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { sender, subject, body, userId } = await request.json();

    // Basic filtering based on email content
    if (sender === 'info@pinnaclelab.com') {
      await prisma.notification.create({
        data: {
          userId,          // Required userId
          title: subject,  // Email subject as title
          content: body,   // Email body as content
          message: body,   // Use the email body as message (or customize)
          type: 'email',   // Example type (adjust based on your use case)
          sentAt: new Date(), // Current timestamp
          read: false,     // Default to unread
          createdAt: new Date(), // Creation timestamp
        },
      });
      

      return NextResponse.json({ message: 'Notification created successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Unauthorized sender' }, { status: 403 });
    }
  } catch (error) {
    console.error('Error processing incoming email:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
