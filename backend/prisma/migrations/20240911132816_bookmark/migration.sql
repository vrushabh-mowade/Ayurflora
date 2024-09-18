/*
  Warnings:

  - The `bookmark` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[plantId]` on the table `plant` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "bookmark",
ADD COLUMN     "bookmark" INTEGER[];

-- CreateIndex
CREATE UNIQUE INDEX "plant_plantId_key" ON "plant"("plantId");
