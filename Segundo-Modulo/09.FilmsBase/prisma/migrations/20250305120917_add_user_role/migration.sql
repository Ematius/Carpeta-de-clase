/*
  Warnings:

  - You are about to alter the column `rating` on the `films` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `films` MODIFY `rating` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `role` ENUM('USER', 'EDITOR', 'ADMIN') NOT NULL DEFAULT 'USER';
