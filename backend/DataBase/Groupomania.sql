-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : sam. 05 fév. 2022 à 16:19
-- Version du serveur : 5.7.34
-- Version de PHP : 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `Groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `Comments`
--

CREATE TABLE `Comments` (
  `id` int(11) NOT NULL,
  `messageId` int(11) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `content` varchar(1500) DEFAULT NULL,
  `commentLikes` int(11) DEFAULT NULL,
  `commentDislikes` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Comments`
--

INSERT INTO `Comments` (`id`, `messageId`, `userId`, `content`, `commentLikes`, `commentDislikes`, `createdAt`, `updatedAt`) VALUES
(2, 35, 14, 'On a envie d\'y etre', 1, 0, '2022-02-05 12:45:11', '2022-02-05 16:17:35'),
(4, 36, 16, 'j\'aimerais pas avoir ça chez moi lol !', 0, 0, '2022-02-05 15:52:55', '2022-02-05 15:52:55'),
(5, 35, 16, 'ça a l\'air paisible comme endroit', 2, 0, '2022-02-05 15:53:32', '2022-02-05 16:15:47'),
(6, 37, 17, 'ses yeux sont trop beaux', 0, 0, '2022-02-05 15:58:01', '2022-02-05 15:58:01'),
(7, 36, 17, 'il a pas l\'air gentil celui la lol', 1, 0, '2022-02-05 15:58:16', '2022-02-05 16:18:44'),
(8, 39, 14, 'il cherche un bon poisson', 1, 0, '2022-02-05 16:15:24', '2022-02-05 16:18:21'),
(9, 37, 14, 'j\'adore !', 1, 0, '2022-02-05 16:15:34', '2022-02-05 16:18:36'),
(10, 39, 16, 'il est beau cet ours', 1, 0, '2022-02-05 16:18:15', '2022-02-05 16:18:19'),
(11, 37, 16, 'j\'en veux un !', 1, 0, '2022-02-05 16:18:35', '2022-02-05 16:18:37');

-- --------------------------------------------------------

--
-- Structure de la table `CommentsLikes`
--

CREATE TABLE `CommentsLikes` (
  `id` int(11) NOT NULL,
  `commentId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `userLike` tinyint(1) NOT NULL,
  `userDislike` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `CommentsLikes`
--

INSERT INTO `CommentsLikes` (`id`, `commentId`, `userId`, `userLike`, `userDislike`, `createdAt`, `updatedAt`) VALUES
(1, 5, 16, 1, 0, '2022-02-05 15:53:37', '2022-02-05 15:53:37'),
(2, 5, 14, 1, 0, '2022-02-05 16:15:47', '2022-02-05 16:15:47'),
(3, 2, 14, 1, 0, '2022-02-05 16:15:49', '2022-02-05 16:15:49'),
(4, 10, 16, 1, 0, '2022-02-05 16:18:19', '2022-02-05 16:18:19'),
(5, 8, 16, 1, 0, '2022-02-05 16:18:21', '2022-02-05 16:18:21'),
(6, 9, 16, 1, 0, '2022-02-05 16:18:36', '2022-02-05 16:18:36'),
(7, 11, 16, 1, 0, '2022-02-05 16:18:37', '2022-02-05 16:18:37'),
(8, 7, 16, 1, 0, '2022-02-05 16:18:44', '2022-02-05 16:18:44');

-- --------------------------------------------------------

--
-- Structure de la table `Likes`
--

CREATE TABLE `Likes` (
  `id` int(11) NOT NULL,
  `messageId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `userLike` tinyint(1) NOT NULL,
  `userDislike` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Likes`
--

INSERT INTO `Likes` (`id`, `messageId`, `userId`, `userLike`, `userDislike`, `createdAt`, `updatedAt`) VALUES
(1, 35, 14, 1, 0, '2022-02-05 12:45:06', '2022-02-05 12:45:06'),
(2, 36, 15, 1, 0, '2022-02-05 15:51:12', '2022-02-05 15:51:12'),
(3, 36, 16, 1, 0, '2022-02-05 15:52:40', '2022-02-05 15:52:40'),
(4, 35, 16, 1, 0, '2022-02-05 15:53:13', '2022-02-05 15:53:13'),
(5, 39, 17, 1, 0, '2022-02-05 15:57:43', '2022-02-05 16:12:29'),
(6, 37, 17, 1, 0, '2022-02-05 15:57:50', '2022-02-05 15:57:50'),
(7, 36, 17, 1, 0, '2022-02-05 15:58:06', '2022-02-05 15:58:06'),
(8, 35, 17, 1, 0, '2022-02-05 15:58:22', '2022-02-05 15:58:22'),
(9, 39, 14, 1, 0, '2022-02-05 16:15:09', '2022-02-05 16:15:09'),
(10, 37, 14, 1, 0, '2022-02-05 16:15:29', '2022-02-05 16:15:29'),
(11, 36, 14, 1, 0, '2022-02-05 16:15:40', '2022-02-05 16:15:40'),
(12, 40, 14, 1, 0, '2022-02-05 16:16:38', '2022-02-05 16:16:38'),
(13, 39, 16, 1, 0, '2022-02-05 16:18:07', '2022-02-05 16:18:07');

-- --------------------------------------------------------

--
-- Structure de la table `Messages`
--

CREATE TABLE `Messages` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(2550) NOT NULL,
  `attachment` varchar(2550) DEFAULT NULL,
  `likes` int(11) NOT NULL,
  `dislikes` int(11) NOT NULL,
  `comments` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Messages`
--

INSERT INTO `Messages` (`id`, `userId`, `title`, `content`, `attachment`, `likes`, `dislikes`, `comments`, `createdAt`, `updatedAt`) VALUES
(35, 14, 'Un coin sympas', 'C\'est un coin super sympas', 'http://localhost:4000/images/image__0izgHLC1_OWEVAhqsqCn.jpg', 3, 0, 2, '2022-02-05 12:45:04', '2022-02-05 16:17:21'),
(36, 15, 'c\'est venimeux !', 'Ce serpent fait un peu flipper !', 'http://localhost:4000/images/image_3Zv9ZRLx_q4W7opWg-WUG.gif', 4, 0, 2, '2022-02-05 15:48:35', '2022-02-05 16:15:40'),
(37, 16, 'Un super chiot !', 'il est trop mimi mon chiot', 'http://localhost:4000/images/image_hhe9abpRXUNsMCESGmxPI.jpg', 2, 0, 3, '2022-02-05 15:52:17', '2022-02-05 16:18:35'),
(39, 17, 'Un sacré ours !', 'J\'aime trop les ours !', 'http://localhost:4000/images/image_mQTTIfOGtwuVOsiL2PXGz.jpg', 3, 0, 2, '2022-02-05 15:57:39', '2022-02-05 16:18:15'),
(40, 14, 'Un super fond d\'ecran', 'Un fond d\'ecran en 3d c\'est trop top', 'http://localhost:4000/images/image_sWuJMZNRJI8BVeQa7rU2T.gif', 1, 0, 0, '2022-02-05 16:16:35', '2022-02-05 16:16:38');

-- --------------------------------------------------------

--
-- Structure de la table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `SequelizeMeta`
--

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

-- --------------------------------------------------------

--
-- Structure de la table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Users`
--

INSERT INTO `Users` (`id`, `email`, `firstname`, `lastname`, `password`, `bio`, `avatar`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
(14, 'CodeDragi@groupomania.com', 'Code', 'Dragi', '$2a$05$WfOyK6vk9CRxvaPkgf.jAOctY9VDllYL3BbyshMmH0LNTntAZoIPK', 'gdgfg', '/static/media/4.a9833454b3c5029c3033.jpg', 1, '2022-02-05 12:43:13', '2022-02-05 13:34:56'),
(15, 'evaluateur@groupomania.com', 'Evaluateur', 'Openclassrooms', '$2a$05$dXExFV6GhkbryF2UfWBzTecEwK.IVGDSDLV28rZW.5juT0qRe/IKq', 'Je suis. l\'évaluateur d\'openclassrooms', '/static/media/6.5e0e99cf0df950a40d19.jpg', 0, '2022-02-05 14:59:59', '2022-02-05 15:37:48'),
(16, 'mentor@groupomania.com', 'Mentor', 'Openclassrooms', '$2a$05$pH3hh.JAQRb6tT0AnHAQXOGqtF0QudiePgyJ8HK2ya3ObfrGEyim2', 'je s', '/static/media/1.589279a0f8cbe999d00b.jpg', 0, '2022-02-05 15:02:04', '2022-02-05 15:32:27'),
(17, 'utilisateur@groupomania.com', 'Utilisateur', 'Openclassrooms', '$2a$05$4k1X1oZsO0zFEqi6YVQrTO2xIH47BV2j6zg38dj0y.GsrFf0Uq6ha', 'Je susi un utilisateur', '/static/media/8.7014157be19f3da26ae9.jpg', 0, '2022-02-05 15:54:24', '2022-02-05 15:56:06');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Comments`
--
ALTER TABLE `Comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `messageId` (`messageId`),
  ADD KEY `userId` (`userId`);

--
-- Index pour la table `CommentsLikes`
--
ALTER TABLE `CommentsLikes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `commentId` (`commentId`),
  ADD KEY `userId` (`userId`);

--
-- Index pour la table `Likes`
--
ALTER TABLE `Likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `messageId` (`messageId`),
  ADD KEY `userId` (`userId`);

--
-- Index pour la table `Messages`
--
ALTER TABLE `Messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Index pour la table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Comments`
--
ALTER TABLE `Comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `CommentsLikes`
--
ALTER TABLE `CommentsLikes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `Likes`
--
ALTER TABLE `Likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `Messages`
--
ALTER TABLE `Messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT pour la table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Comments`
--
ALTER TABLE `Comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`messageId`) REFERENCES `Messages` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `CommentsLikes`
--
ALTER TABLE `CommentsLikes`
  ADD CONSTRAINT `commentslikes_ibfk_1` FOREIGN KEY (`commentId`) REFERENCES `Comments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `commentslikes_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `Likes`
--
ALTER TABLE `Likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`messageId`) REFERENCES `Messages` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `Messages`
--
ALTER TABLE `Messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
