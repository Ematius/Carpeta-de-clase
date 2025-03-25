/*
  Warnings:

  - You are about to drop the `_categoriestofilm` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `categories` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `_categoriestofilm` DROP FOREIGN KEY `_CategoriesToFilm_A_fkey`;

-- DropForeignKey
ALTER TABLE `_categoriestofilm` DROP FOREIGN KEY `_CategoriesToFilm_B_fkey`;

-- DropTable
DROP TABLE `_categoriestofilm`;

-- CreateTable
CREATE TABLE `_CategoryToFilm` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CategoryToFilm_AB_unique`(`A`, `B`),
    INDEX `_CategoryToFilm_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `categories_name_key` ON `categories`(`name`);

-- AddForeignKey
ALTER TABLE `_CategoryToFilm` ADD CONSTRAINT `_CategoryToFilm_A_fkey` FOREIGN KEY (`A`) REFERENCES `categories`(`category_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoryToFilm` ADD CONSTRAINT `_CategoryToFilm_B_fkey` FOREIGN KEY (`B`) REFERENCES `films`(`film_id`) ON DELETE CASCADE ON UPDATE CASCADE;
