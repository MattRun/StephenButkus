/*
  Warnings:

  - You are about to drop the column `createdBy` on the `Certificate` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Certificate" DROP CONSTRAINT "Certificate_createdBy_fkey";

-- AlterTable
ALTER TABLE "Certificate" DROP COLUMN "createdBy",
ADD COLUMN     "adminId" INTEGER;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
