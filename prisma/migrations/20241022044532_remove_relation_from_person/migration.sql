-- DropForeignKey
ALTER TABLE `favorite_food` DROP FOREIGN KEY `favorite_food_person_id_fkey`;

-- AddForeignKey
ALTER TABLE `favorite_food` ADD CONSTRAINT `favorite_food_person_id_fkey` FOREIGN KEY (`person_id`) REFERENCES `person`(`person_id`) ON DELETE CASCADE ON UPDATE CASCADE;
