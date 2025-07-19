/*
  Warnings:

  - You are about to alter the column `address` on the `Customers` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `price` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - A unique constraint covering the columns `[email]` on the table `Customers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Customers" ALTER COLUMN "address" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Products" ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2);

-- CreateIndex
CREATE UNIQUE INDEX "Customers_email_key" ON "Customers"("email");
