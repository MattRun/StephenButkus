// import { NextResponse } from 'next/server';
// import prisma from '@/lib/prisma';

// // Helper to check if the user is an admin
// async function isAdmin(email: string) {
//   const user = await prisma.user.findUnique({ where: { email } });
//   return user?.role === 'ADMIN';
// }

// // Fetch all certificates
// export async function GET(req: Request) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const email = searchParams.get('email');

//     if (!email || !(await isAdmin(email))) {
//       return NextResponse.json({ error: 'Access denied' }, { status: 403 });
//     }

//     const certificates = await prisma.certificate.findMany();
//     return NextResponse.json(certificates, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching certificates:', error);
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }

// // Create a new certificate
// export async function POST(req: Request) {
//   try {
//     const { email, certificateData } = await req.json();

//     if (!email || !(await isAdmin(email))) {
//       return NextResponse.json({ error: 'Access denied' }, { status: 403 });
//     }

//     const {
//       certificateNumber,
//       studentName,
//       courseName,
//       courseID,
//       issueDate,
//       expirationDate,
//       securitySeal,
//     } = certificateData;

//     const certificate = await prisma.certificate.create({
//       data: {
//         certificateNumber,
//         studentName,
//         courseName,
//         courseID,
//         issueDate: new Date(issueDate),
//         expirationDate: expirationDate ? new Date(expirationDate) : null,
//         securitySeal,
//       },
//     });

//     return NextResponse.json(certificate, { status: 201 });
//   } catch (error) {
//     console.error('Error creating certificate:', error);
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }

// // Update a certificate
// export async function PUT(req: Request) {
//   try {
//     const { email, id, updateData } = await req.json();

//     if (!email || !(await isAdmin(email))) {
//       return NextResponse.json({ error: 'Access denied' }, { status: 403 });
//     }

//     const certificate = await prisma.certificate.update({
//       where: { id },
//       data: updateData,
//     });

//     return NextResponse.json(certificate, { status: 200 });
//   } catch (error) {
//     console.error('Error updating certificate:', error);
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }

// // Delete a certificate
// export async function DELETE(req: Request) {
//   try {
//     const { email, id } = await req.json();

//     if (!email || !(await isAdmin(email))) {
//       return NextResponse.json({ error: 'Access denied' }, { status: 403 });
//     }

//     await prisma.certificate.delete({ where: { id } });
//     return NextResponse.json({ message: 'Certificate deleted successfully' }, { status: 200 });
//   } catch (error) {
//     console.error('Error deleting certificate:', error);
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';

// Helper to check if the user is an admin
async function isAdmin(email: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error(`User not found: ${email}`);
  return user.role === 'ADMIN';
}

// Fetch all certificates
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!(await isAdmin(email))) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    const certificates = await prisma.certificate.findMany();
    return NextResponse.json(certificates, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching certificates:', error.message);
    } else {
      console.error('Unknown error:', error);
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
  
}

// Create a new certificate
export async function POST(req: Request) {
  try {
    const { email, certificateData } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!(await isAdmin(email))) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    const {
      certificateNumber,
      studentName,
      courseName,
      courseID,
      issueDate,
      expirationDate,
      securitySeal,
    } = certificateData;

    const certificate = await prisma.certificate.create({
      data: {
        certificateNumber,
        studentName,
        courseName,
        courseID,
        issueDate: new Date(issueDate),
        expirationDate: expirationDate ? new Date(expirationDate) : undefined,
        securitySeal,
      },
    });

    return NextResponse.json(certificate, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error creating certificate:', error.message);
    } else {
      console.error('Unknown error:', error);
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
  
}

// Update a certificate
// PUT handler in `/dashboard/pages/api/certificates`
export async function PUT(req: Request) {
  try {
    const { email, id, updateData } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!(await isAdmin(email))) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    // Parse date fields into proper Date objects
    const { issueDate, expirationDate, ...otherData } = updateData;

    const certificate = await prisma.certificate.update({
      where: { id },
      data: {
        ...otherData,
        issueDate: issueDate ? new Date(issueDate) : null,
        expirationDate: expirationDate ? new Date(expirationDate) : null,
      },
    });

    return NextResponse.json(certificate, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error updating certificate:', error.message);
    } else {
      console.error('Unknown error:', error);
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
  
}


// Delete a certificate
export async function DELETE(req: Request) {
  try {
    const { email, id } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!(await isAdmin(email))) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    await prisma.certificate.delete({ where: { id } });
    return NextResponse.json({ message: 'Certificate deleted successfully' }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error deleting certificate:', error.message);
    } else {
      console.error('Unknown error:', error);
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
  
}
