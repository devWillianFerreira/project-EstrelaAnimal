/*
  Warnings:

  - Added the required column `cep` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "number" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL;
