/*
  Warnings:

  - You are about to drop the column `UidUser` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `cep` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `cpf` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `product` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `Orders` table. All the data in the column will be lost.
  - Added the required column `UserId` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "UidUser",
DROP COLUMN "cep",
DROP COLUMN "city",
DROP COLUMN "cpf",
DROP COLUMN "number",
DROP COLUMN "phone",
DROP COLUMN "product",
DROP COLUMN "state",
DROP COLUMN "street",
ADD COLUMN     "UserId" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "total" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ALTER COLUMN "amount" SET DATA TYPE TEXT,
ALTER COLUMN "price" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "Checkout_info" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Checkout_info_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Checkout_info"("id") ON DELETE CASCADE ON UPDATE CASCADE;
