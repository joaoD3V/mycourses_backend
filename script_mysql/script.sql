-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';


CREATE SCHEMA IF NOT EXISTS `mycourses` ;
USE `mycourses` ;

-- -----------------------------------------------------
-- Table `mycourses`.`administrator`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mycourses`.`administrators` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '\n',
  `name` VARCHAR(100) NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mycourses`.`modules`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mycourses`.`modules` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mycourses`.`lessons`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mycourses`.`lessons` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_modules` INT(10) UNSIGNED NULL,
  `name` VARCHAR(45) NULL,
  `video_url` VARCHAR(45) NULL,
  `startLessonDate` DATETIME NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_modules_1_idx` (`id_modules` ASC),
  CONSTRAINT `fk_modules_1`
    FOREIGN KEY (`id_modules`)
    REFERENCES `mycourses`.`modules` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


START TRANSACTION;
USE `mycourses`;
INSERT INTO `mycourses`.`administrators` (`name`, `email`, `password`, `created_at`, `updated_at` ) VALUES ('admin', 'admin@verzel.com.br', '$2b$10$n41h5F1xugVkCecwtyRr6Ot/K.HaiP/kGF.JPX1ZQR2tugwdN2fjK', NOW(), NOW());
INSERT INTO `mycourses`.`modules` (`name`, `created_at`, `updated_at`) VALUES ('Sistemas de Informação', NOW(), NOW());
INSERT INTO `mycourses`.`lessons` (`id_modules`, `name`, `video_url`, `startLessonDate`, `created_at`, `updated_at` ) VALUES ('1', 'Introdução a Programação', 'https://www.youtube.com/embed/mq-mM8UdEDM', NOW(), NOW(), NOW());
COMMIT;

