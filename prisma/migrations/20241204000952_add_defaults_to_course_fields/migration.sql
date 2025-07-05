/*
  Warnings:

  - Added the required column `updatedAt` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'Uncategorized',
ADD COLUMN     "duration" TEXT NOT NULL DEFAULT 'TBD',
ADD COLUMN     "format" TEXT NOT NULL DEFAULT 'Online',
ADD COLUMN     "language" TEXT NOT NULL DEFAULT 'English',
ADD COLUMN     "level" TEXT NOT NULL DEFAULT 'Initial';

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
