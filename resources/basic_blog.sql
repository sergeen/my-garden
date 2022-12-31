CREATE TABLE `blog`.`users` (
    `id` INT NOT NULL AUTO_INCREMENT ,
    `name` VARCHAR(100) NOT NULL ,
    `email` VARCHAR(50) NOT NULL ,
    `password` VARCHAR(60) NOT NULL ,
    PRIMARY KEY (`id`),
    UNIQUE `email_unique` (`email`)
    )
ENGINE = InnoDB;

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES (NULL, 'Haafiz', 'kaasib@gmail.com', '$2y$10$ZGZkZmVyZXJlM2ZkZjM0Z.rUgJrCXgyCgUfAG1ds6ziWC8pgLiZ0m'), (NULL, 'Ali', 'abc@email.com', '$2y$10$ZGZkZmVyZXJlM2ZkZjM0Z.rUgJrCXgyCgUfAG1ds6ziWC8pgLiZ0m');

CREATE TABLE `blog`.`posts` (
    `id` INT NOT NULL AUTO_INCREMENT ,
    `title` VARCHAR(100) NOT NULL , 
    `status` ENUM('draft', 'published') NOT NULL DEFAULT 'draft' ,
    `content` TEXT NOT NULL ,
    `user_id` INT NOT NULL ,
    PRIMARY KEY (`id`),
    INDEX('user_id')
)
ENGINE = InnoDB;

ALTER TABLE `posts` ADD CONSTRAINT `user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

CREATE TABLE `blog`.`comments` (
    `id` INT NOT NULL AUTO_INCREMENT ,
    `comment` VARCHAR(250) NOT NULL ,
    `post_id` INT NOT NULL ,
    `user_id` INT NOT NULL ,
    PRIMARY KEY (`id`),
    INDEX(`post_id`),
    INDEX(`user_id`)
)
ENGINE = InnoDB;

ALTER TABLE `comments` ADD CONSTRAINT `post_id_comment_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `comments` ADD CONSTRAINT `post_id_comment_foreing` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;