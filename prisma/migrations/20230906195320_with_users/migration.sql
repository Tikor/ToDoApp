/*
  Warnings:

  - Added the required column `createdBy` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "createdBy" TEXT NOT NULL;
