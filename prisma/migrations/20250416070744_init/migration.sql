/*
  Warnings:

  - You are about to drop the column `endDate` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `classsId` on the `Student` table. All the data in the column will be lost.
  - The primary key for the `_SubjectToTeacher` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[A,B]` on the table `_SubjectToTeacher` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `endTime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_supervisorId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_classsId_fkey";

-- AlterTable
ALTER TABLE "Class" ALTER COLUMN "supervisorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "endDate",
DROP COLUMN "startDate",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Exam" DROP COLUMN "endDate",
DROP COLUMN "startDate",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "classsId",
ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "classId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "_SubjectToTeacher" DROP CONSTRAINT "_SubjectToTeacher_AB_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "_SubjectToTeacher_AB_unique" ON "_SubjectToTeacher"("A", "B");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
