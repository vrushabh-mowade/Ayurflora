-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT,
    "Lastname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "bookmark" TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plant" (
    "id" SERIAL NOT NULL,
    "plantId" INTEGER NOT NULL,
    "plantName" TEXT NOT NULL,
    "sciName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "recipes" TEXT[],
    "region" TEXT[],
    "usage" TEXT[],

    CONSTRAINT "plant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
