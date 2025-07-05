// import { NextResponse } from 'next/server';
// import prisma from '@/lib/prisma';

// // Certificate search by certificateNumber
// export async function GET(req: Request) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const certificateNumber = searchParams.get('certificateNumber');

//     if (!certificateNumber) {
//       return NextResponse.json({ error: 'Certificate number is required' }, { status: 400 });
//     }

//     const certificate = await prisma.certificate.findFirst({
//       where: {
//         certificateNumber: certificateNumber,
//       },
//     });

//     if (!certificate) {
//       return NextResponse.json(
//         { error: 'Certificate not found or expired. Please contact support for further assistance.' },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(certificate, { status: 200 });
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error('Error verifying certificate:', error.message);
//     } else {
//       console.error('Unknown error:', error);
//     }
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
  
// }


// import { NextResponse } from 'next/server';
// import prisma from '@/lib/prisma';

// // Certificate search by certificateNumber
// export async function GET(req: Request) {
//   try {
//     // Extract the query parameter from the request URL
//     const { searchParams } = new URL(req.url);
//     const certificateNumber = searchParams.get('certificateNumber');

//     // Check if the certificateNumber parameter is provided
//     if (!certificateNumber) {
//       return NextResponse.json(
//         { error: 'Certificate number is required.' },
//         { status: 400 }
//       );
//     }

//     // Query the database for the certificate
//     const certificate = await prisma.certificate.findFirst({
//       where: {
//         certificateNumber: certificateNumber,
//       },
//     });

//     // If no certificate is found, return a 404 response
//     if (!certificate) {
//       return NextResponse.json(
//         {
//           error:
//             'Certificate not found or expired. Please contact support for further assistance.',
//         },
//         { status: 404 }
//       );
//     }

//     // Return the certificate details in a successful response
//     return NextResponse.json(certificate, { status: 200 });
//   } catch (error) {
//     // Log the error details
//     console.error('Error verifying certificate:', error);

//     // Handle Prisma-related errors separately if needed
//     if (error instanceof Error && error.name === 'PrismaClientKnownRequestError') {
//       return NextResponse.json(
//         {
//           error: 'A database error occurred. Please contact support.',
//         },
//         { status: 500 }
//       );
//     }

//     // Generic internal server error response
//     return NextResponse.json(
//       { error: 'Internal server error. Please try again later.' },
//       { status: 500 }
//     );
//   } finally {
//     // Ensure the Prisma client disconnects after the request
//     await prisma.$disconnect();
//   }
// }



import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';

// Certificate search by certificateNumber
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const certificateNumber = searchParams.get('certificateNumber');

    if (!certificateNumber) {
      return NextResponse.json(
        { error: 'Certificate number is required.' },
        { status: 400 }
      );
    }

    const certificate = await prisma.certificate.findFirst({
      where: { certificateNumber },
    });

    if (!certificate) {
      return NextResponse.json(
        { error: 'Certificate not found or expired. Please contact support for further assistance.' },
        { status: 404 }
      );
    }

    return NextResponse.json(certificate, { status: 200 });
  } catch (error) {
    console.error('Error verifying certificate:', error);

    if (error instanceof Error && error.name === 'PrismaClientKnownRequestError') {
      return NextResponse.json(
        { error: 'A database error occurred. Please contact support.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
