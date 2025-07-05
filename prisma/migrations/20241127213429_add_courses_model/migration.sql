/*
  Warnings:

  - Added the required column `contactHours` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `keyTopics` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nextSession` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "contactHours" TEXT NOT NULL,
ADD COLUMN     "keyTopics" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "nextSession" TEXT NOT NULL,
ADD COLUMN     "pdfPath" TEXT,
ADD COLUMN     "time" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
