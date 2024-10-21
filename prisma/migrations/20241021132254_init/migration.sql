-- CreateTable
CREATE TABLE `person` (
    `person_id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `fname` VARCHAR(20) NOT NULL,
    `lname` VARCHAR(20) NOT NULL,
    `eye_color` ENUM('BR', 'BL', 'GR') NOT NULL,
    `birth_date` DATE NOT NULL,
    `street` VARCHAR(30) NULL,
    `city` VARCHAR(20) NULL,
    `state` VARCHAR(20) NULL,
    `country` VARCHAR(20) NULL,
    `postal_code` VARCHAR(20) NULL,

    PRIMARY KEY (`person_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `favorite_food` (
    `person_id` SMALLINT UNSIGNED NOT NULL,
    `food` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`person_id`, `food`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `favorite_food` ADD CONSTRAINT `favorite_food_person_id_fkey` FOREIGN KEY (`person_id`) REFERENCES `person`(`person_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
