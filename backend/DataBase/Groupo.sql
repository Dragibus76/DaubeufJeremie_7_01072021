-- -------------------------------------------------------------
-- TablePlus 4.5.2(402)
--
-- https://tableplus.com/
--
-- Database: Groupo
-- Generation Time: 2022-01-14 13:20:15.5630
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE TABLE `Comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `messageId` int DEFAULT NULL,
  `userId` int NOT NULL,
  `content` varchar(1500) DEFAULT NULL,
  `commentLikes` int DEFAULT NULL,
  `commentDislikes` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `messageId` (`messageId`),
  KEY `userId` (`userId`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`messageId`) REFERENCES `Messages` (`id`) ON DELETE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `CommentsLikes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `commentId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `userLike` tinyint(1) NOT NULL,
  `userDislike` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `commentId` (`commentId`),
  KEY `userId` (`userId`),
  CONSTRAINT `commentslikes_ibfk_1` FOREIGN KEY (`commentId`) REFERENCES `Comments` (`id`) ON DELETE CASCADE,
  CONSTRAINT `commentslikes_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Likes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `messageId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `userLike` tinyint(1) NOT NULL,
  `userDislike` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `messageId` (`messageId`),
  KEY `userId` (`userId`),
  CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`messageId`) REFERENCES `Messages` (`id`) ON DELETE CASCADE,
  CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(2550) NOT NULL,
  `attachment` varchar(2550) DEFAULT NULL,
  `likes` int NOT NULL,
  `dislikes` int NOT NULL,
  `comments` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Comments` (`id`, `messageId`, `userId`, `content`, `commentLikes`, `commentDislikes`, `createdAt`, `updatedAt`) VALUES
(50, 26, 11, 'tu sera amené plus tard a travailler en groupe', 3, 0, '2022-01-14 12:04:40', '2022-01-14 12:10:34'),
(51, 27, 11, 'je l\'espere pour lui', 3, 0, '2022-01-14 12:05:05', '2022-01-14 12:10:26'),
(52, 29, 12, 'je suis telement d\'accord ! :)', 2, 1, '2022-01-14 12:07:51', '2022-01-14 12:11:28'),
(53, 28, 12, 'bonjour bienvenue', 3, 0, '2022-01-14 12:08:03', '2022-01-14 12:11:47'),
(54, 27, 12, 'j\'adore trop ce film !', 3, 0, '2022-01-14 12:08:21', '2022-01-14 12:12:02'),
(55, 26, 12, 'oui c\'est vrai !', 2, 0, '2022-01-14 12:08:58', '2022-01-14 12:12:43'),
(56, 30, 10, 'bienvenue sur groupomania', 2, 0, '2022-01-14 12:09:38', '2022-01-14 12:11:14'),
(57, 29, 10, 'il faut toujours etre serieux', 2, 0, '2022-01-14 12:09:58', '2022-01-14 12:11:29'),
(58, 28, 10, 'bonjour !', 2, 0, '2022-01-14 12:10:13', '2022-01-14 12:11:46'),
(59, 30, 11, 'bienvenue', 1, 0, '2022-01-14 12:11:12', '2022-01-14 12:11:15'),
(60, 29, 11, 'merci de me soutenir', 0, 0, '2022-01-14 12:11:35', '2022-01-14 12:11:35'),
(61, 28, 11, 'merci beaucoup', 0, 0, '2022-01-14 12:11:55', '2022-01-14 12:11:55'),
(62, 27, 11, 'moi aussi j\'aime bien ce film', 0, 0, '2022-01-14 12:12:14', '2022-01-14 12:12:14'),
(63, 26, 11, 'c\'est super le travail de groupe', 1, 0, '2022-01-14 12:12:40', '2022-01-14 12:12:42');

INSERT INTO `CommentsLikes` (`id`, `commentId`, `userId`, `userLike`, `userDislike`, `createdAt`, `updatedAt`) VALUES
(23, 50, 11, 1, 0, '2022-01-14 12:04:49', '2022-01-14 12:04:49'),
(24, 51, 11, 1, 0, '2022-01-14 12:05:10', '2022-01-14 12:05:10'),
(25, 54, 12, 1, 0, '2022-01-14 12:08:25', '2022-01-14 12:08:25'),
(26, 51, 12, 1, 0, '2022-01-14 12:08:27', '2022-01-14 12:08:27'),
(27, 53, 12, 1, 0, '2022-01-14 12:08:32', '2022-01-14 12:08:32'),
(28, 52, 12, 0, 1, '2022-01-14 12:08:39', '2022-01-14 12:08:39'),
(29, 50, 12, 1, 0, '2022-01-14 12:08:47', '2022-01-14 12:08:47'),
(30, 56, 10, 1, 0, '2022-01-14 12:09:43', '2022-01-14 12:09:43'),
(31, 57, 10, 1, 0, '2022-01-14 12:10:02', '2022-01-14 12:10:02'),
(32, 52, 10, 1, 0, '2022-01-14 12:10:04', '2022-01-14 12:10:04'),
(33, 58, 10, 1, 0, '2022-01-14 12:10:18', '2022-01-14 12:10:18'),
(34, 53, 10, 1, 0, '2022-01-14 12:10:19', '2022-01-14 12:10:19'),
(35, 51, 10, 1, 0, '2022-01-14 12:10:26', '2022-01-14 12:10:26'),
(36, 54, 10, 1, 0, '2022-01-14 12:10:27', '2022-01-14 12:10:27'),
(37, 55, 10, 1, 0, '2022-01-14 12:10:33', '2022-01-14 12:10:33'),
(38, 50, 10, 1, 0, '2022-01-14 12:10:34', '2022-01-14 12:10:34'),
(39, 56, 11, 1, 0, '2022-01-14 12:11:14', '2022-01-14 12:11:14'),
(40, 59, 11, 1, 0, '2022-01-14 12:11:15', '2022-01-14 12:11:15'),
(41, 52, 11, 1, 0, '2022-01-14 12:11:28', '2022-01-14 12:11:28'),
(42, 57, 11, 1, 0, '2022-01-14 12:11:29', '2022-01-14 12:11:29'),
(43, 58, 11, 1, 0, '2022-01-14 12:11:46', '2022-01-14 12:11:46'),
(44, 53, 11, 1, 0, '2022-01-14 12:11:47', '2022-01-14 12:11:47'),
(45, 54, 11, 1, 0, '2022-01-14 12:12:02', '2022-01-14 12:12:02'),
(46, 63, 11, 1, 0, '2022-01-14 12:12:42', '2022-01-14 12:12:42'),
(47, 55, 11, 1, 0, '2022-01-14 12:12:43', '2022-01-14 12:12:43');

INSERT INTO `Likes` (`id`, `messageId`, `userId`, `userLike`, `userDislike`, `createdAt`, `updatedAt`) VALUES
(21, 26, 10, 1, 0, '2022-01-14 11:50:59', '2022-01-14 11:50:59'),
(22, 27, 10, 1, 0, '2022-01-14 11:52:48', '2022-01-14 11:52:48'),
(23, 28, 11, 1, 0, '2022-01-14 12:02:39', '2022-01-14 12:02:39'),
(24, 27, 11, 1, 0, '2022-01-14 12:02:44', '2022-01-14 12:02:44'),
(25, 26, 11, 1, 0, '2022-01-14 12:02:47', '2022-01-14 12:12:18'),
(26, 29, 12, 1, 0, '2022-01-14 12:07:33', '2022-01-14 12:07:33'),
(27, 28, 12, 1, 0, '2022-01-14 12:07:56', '2022-01-14 12:07:56'),
(28, 30, 10, 1, 0, '2022-01-14 12:09:24', '2022-01-14 12:09:24'),
(29, 29, 10, 1, 0, '2022-01-14 12:09:46', '2022-01-14 12:09:46'),
(30, 28, 10, 1, 0, '2022-01-14 12:10:14', '2022-01-14 12:10:14'),
(31, 30, 11, 1, 0, '2022-01-14 12:11:16', '2022-01-14 12:11:16'),
(32, 29, 11, 1, 0, '2022-01-14 12:11:22', '2022-01-14 12:11:22'),
(33, 31, 1, 1, 0, '2022-01-14 12:15:27', '2022-01-14 12:15:27');

INSERT INTO `Messages` (`id`, `userId`, `title`, `content`, `attachment`, `likes`, `dislikes`, `comments`, `createdAt`, `updatedAt`) VALUES
(26, 10, 'trop cool l\'évènement de groupe', 'c\'etait vraiment cool d\'avoir travailler en groupe, le travail de groupe c\'est important sache le!', 'http://localhost:4000/images/image_2k0oU6LNFfn2VuUi7mATd.jpg', 2, 0, 3, '2022-01-14 11:50:49', '2022-01-14 12:12:40'),
(27, 10, 'plus tu t\'entraine plus tu deviens rapide !', 'Un jour peut-etre tu deviendra comme Jim Carrey dans Bruce tout puissant ! :)', 'http://localhost:4000/images/image_PBwAHIKEl671yxlEDXw1V.gif', 2, 0, 3, '2022-01-14 11:52:36', '2022-01-14 12:12:14'),
(28, 11, 'je suis l\'évaluateur d\'openclassrooms', 'Bonjour, je suis l\'évaluateur d\'openclassrooms', 'http://localhost:4000/images/image_QB3SAvMqUE1DRoWSoXciz.jpg', 3, 0, 3, '2022-01-14 12:02:36', '2022-01-14 12:11:55'),
(29, 11, 'le sérieux c\'est important', 'tu dois rester serieux !', 'http://localhost:4000/images/image_NYG3VHKhK_tc0kw8pM128.gif', 3, 0, 3, '2022-01-14 12:03:24', '2022-01-14 12:11:35'),
(30, 12, 'je suis un utilisateur d\'openclassrooms', 'apprendre de nouveaux languages c\'est trop cool', 'http://localhost:4000/images/image_DooeWoGQT-DGFPNTIcpRN.jpg', 2, 0, 2, '2022-01-14 12:07:18', '2022-01-14 12:11:16'),
(31, 1, 'Merci de vos messages', 'Bonjour moi c\'est jeremie,\nmerci pour tous vos messages', 'http://localhost:4000/images/image_Y9UDlisNCUXJBZHWz9R39.jpg', 1, 0, 0, '2022-01-14 12:15:21', '2022-01-14 12:15:27');

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20210528102102-create-user.js'),
('20210528102442-create-message.js'),
('20210603141226-create-like.js'),
('20210608150254-create-comments.js'),
('20210616142252-create-comments-likes.js'),
('20211113222309-create-post.js'),
('20211113222321-create-user.js'),
('20211113222416-create-category.js'),
('20211113222426-create-comment.js'),
('20211117195213-create-reaction.js'),
('20211129204136-create-mood.js'),
('20211129213019-create-follow.js');

INSERT INTO `Users` (`id`, `email`, `firstname`, `lastname`, `password`, `bio`, `avatar`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
(1, 'CodeDragi@groupomania.com', 'Code', 'Dragi', '$2b$05$0gl7TLSpUlyYhDvLmsHJdeozrpYHi9RZc3AN7DHyYPgRd/LkVOfhy', 'C\'est Darky l\'admin', '/static/media/2.199dbb55.jpg', 1, '2021-09-23 12:34:42', '2022-01-14 12:15:45'),
(10, 'mentor@groupomania.com', 'mentor', 'openclassrooms', '$2a$05$FKboLiUFfNsOlRXm/4xLD.28rpq19FdOFLTCEvVmxQEugWQ8pgQky', 'je suis le mentor d\'openclassrooms', '/static/media/1.9e5d605f.jpg', 1, '2022-01-14 11:21:52', '2022-01-14 11:43:50'),
(11, 'evaluateur@groupomania.com', 'eval', 'Openclassrooms', '$2a$05$mVwoVa6rlhTGS3rQKTtelemABT9Rqwpiu8yNG5p3RgTEGYmQNlybK', 'Je suis l\'évaluateur d\'openclassrooms', '/static/media/5.015c736e.jpg', 1, '2022-01-14 11:56:02', '2022-01-14 12:05:28'),
(12, 'utilisateur@groupomania.com', 'util', 'openclassrooms', '$2a$05$kgRASdGG86JgRuft5nmlnOLcwVQxhv5S/00eIoNuZbzmCmbD8l5W.', 'je suis un utilisateur d\'openclassrooms', '/static/media/7.7d8dcb30.jpg', 0, '2022-01-14 11:57:50', '2022-01-14 12:06:09');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;