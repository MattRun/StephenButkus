import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await prisma.$connect(); // Test connection to the database
    return new Response("Database is connected successfully!", { status: 200 });
  } catch (error) {
    console.error("Database connection error:", error);
    return new Response("Database connection failed!", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
