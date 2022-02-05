
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



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




