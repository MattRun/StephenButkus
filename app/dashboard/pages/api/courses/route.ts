// import { NextResponse } from 'next/server';
// import prisma from '@/lib/prisma';

// // Fetch all courses
// export async function GET() {
//   try {
//     const courses = await prisma.course.findMany();
//     return NextResponse.json(courses, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching courses:', error);
//     return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 });
//   }
// }

// // Add a new course
// export async function POST(req: Request) {
//   try {
//     const {
//       title,
//       description,
//       keyTopics,
//       location,
//       nextSession,
//       time,
//       contactHours,
//       pdfPath,
//       type,
//     } = await req.json();

//     const course = await prisma.course.create({
//       data: {
//         title,
//         description,
//         keyTopics: keyTopics, // Directly assign if `Json`; otherwise, JSON.stringify(keyTopics)
//         location,
//         nextSession,
//         time,
//         contactHours,
//         pdfPath,
//         type,
//       },
//     });

//     return NextResponse.json(course, { status: 201 });
//   } catch (error) {
//     console.error('Error creating course:', error);
//     return NextResponse.json({ error: 'Failed to create course' }, { status: 500 });
//   }
// }


// // Update an existing course
// export async function PUT(req: Request) {
//   try {
//     const { id, updateData } = await req.json();

//     const course = await prisma.course.update({
//       where: { id },
//       data: {
//         ...updateData,
//         keyTopics: updateData.keyTopics, // Directly assign if `Json`; otherwise, JSON.stringify(updateData.keyTopics)
//       },
//     });

//     return NextResponse.json(course, { status: 200 });
//   } catch (error) {
//     console.error('Error updating course:', error);
//     return NextResponse.json({ error: 'Failed to update course' }, { status: 500 });
//   }
// }


// // Delete a course
// export async function DELETE(req: Request) {
//   try {
//     const { id } = await req.json();

//     // Validate required fields
//     if (!id) {
//       return NextResponse.json({ error: 'Missing course ID' }, { status: 400 });
//     }

//     await prisma.course.delete({ where: { id } });
//     return NextResponse.json({ message: 'Course deleted successfully' }, { status: 200 });
//   } catch (error) {
//     console.error('Error deleting course:', error);
//     return NextResponse.json({ error: 'Failed to delete course' }, { status: 500 });
//   }
// }


// import { NextResponse } from 'next/server';
// import prisma from '@/lib/prisma';

// // Fetch all courses
// export async function GET() {
//   try {
//     const courses = await prisma.course.findMany({
//       orderBy: { category: 'asc' }, // Sort by category for grouping
//     });
//     return NextResponse.json(courses, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching courses:', error);
//     return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 });
//   }
// }

// // Add a new course
// export async function POST(req: Request) {
//   try {
//     const {
//       title,
//       description,
//       keyTopics,
//       location,
//       nextSession,
//       time,
//       contactHours,
//       pdfPath,
//       category,
//       format,
//       language,
//       level,
//       duration,
//     } = await req.json();
    
//     const course = await prisma.course.create({
//       data: {
//         title,
//         description,
//         keyTopics,
//         location,
//         nextSession,
//         time,
//         contactHours,
//         pdfPath,
//         category,
//         format,
//         language,
//         level,
//         duration,
//       },
//     });
    
//     return NextResponse.json(course, { status: 201 });
//   } catch (error) {
//     console.error('Error creating course:', error);
//     return NextResponse.json({ error: 'Failed to create course' }, { status: 500 });
//   }
// }

// // Update an existing course
// export async function PUT(req: Request) {
//   try {
//     const { id, updateData } = await req.json();
    
//     const course = await prisma.course.update({
//       where: { id },
//       data: {
//         ...updateData,
//         keyTopics: updateData.keyTopics,
//       },
//     });
    
//     return NextResponse.json(course, { status: 200 });
//   } catch (error) {
//     console.error('Error updating course:', error);
//     return NextResponse.json({ error: 'Failed to update course' }, { status: 500 });
//   }
// }

// // Delete a course
// export async function DELETE(req: Request) {
//   try {
//     const { id } = await req.json();
    
//     if (!id) {
//       return NextResponse.json({ error: 'Missing course ID' }, { status: 400 });
//     }
    
//     await prisma.course.delete({ where: { id } });
//     return NextResponse.json({ message: 'Course deleted successfully' }, { status: 200 });
//   } catch (error) {
//     console.error('Error deleting course:', error);
//     return NextResponse.json({ error: 'Failed to delete course' }, { status: 500 });
//   }
// }





import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Adjust the import path based on your setup
export const dynamic = 'force-dynamic';

// Fetch all courses
export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 });
  }
}

// Create a new course
export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.type) {
      return NextResponse.json({ error: "Missing required field: type" }, { status: 400 });
    }

    const newCourse = await prisma.course.create({
      data: {
        title: body.title,
        description: body.description,
        additionalParagraph: body.additionalParagraph,
        keyTopics: body.keyTopics,
        location: body.location,
        nextSession: body.nextSession,
        time: body.time,
        contactHours: body.contactHours,
        pdfPath: body.pdfPath,
        quickbooksLink: body.quickbooksLink,
        registrationLink: body.registrationLink,
        talentLmsLink: body.talentLmsLink,
        category: body.category,
        format: body.format,
        language: body.language,
        level: body.level,
        duration: body.duration,
        type: body.type, // Ensure this is included
      },
    });

    return NextResponse.json(newCourse);
  } catch (error) {
    console.error("Error creating course:", error);
    return NextResponse.json({ error: "Failed to create course" }, { status: 500 });
  }
}


// Update an existing course
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id } = body; // Ensure the request includes the course ID

    const updatedCourse = await prisma.course.update({
      where: { id },
      data: {
        title: body.title,
        description: body.description,
        additionalParagraph: body.additionalParagraph,
        keyTopics: body.keyTopics,
        location: body.location,
        nextSession: body.nextSession,
        time: body.time,
        contactHours: body.contactHours,
        pdfPath: body.pdfPath,
        quickbooksLink: body.quickbooksLink,
        registrationLink: body.registrationLink,
        talentLmsLink: body.talentLmsLink,
        category: body.category,
        format: body.format,
        language: body.language,
        level: body.level,
        duration: body.duration,
      },
    });

    return NextResponse.json(updatedCourse);
  } catch (error) {
    console.error('Error updating course:', error);
    return NextResponse.json({ error: 'Failed to update course' }, { status: 500 });
  }
}
// Delete a course
export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing course ID" }, { status: 400 });
    }

    // Ensure `id` is an integer
    const courseId = parseInt(id, 10);
    if (isNaN(courseId)) {
      return NextResponse.json({ error: "Invalid course ID" }, { status: 400 });
    }

    await prisma.course.delete({
      where: { id: courseId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting course:", error);
    return NextResponse.json({ error: "Failed to delete course" }, { status: 500 });
  }
}