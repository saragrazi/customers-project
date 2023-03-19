-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 19, 2023 at 04:56 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(17) NOT NULL,
  `lastName` varchar(22) NOT NULL,
  `birthday` date NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  `city` varchar(25) NOT NULL,
  `street` varchar(25) NOT NULL,
  `isDeleted` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `firstName`, `lastName`, `birthday`, `phone`, `email`, `city`, `street`, `isDeleted`) VALUES
(1, 'שם ארוך מאוד', 'וגם שם משפחה', '2001-05-27', '07898789789', 'sara@sara', 'עיר ארוכה מאוד', 'רחוב מסוים', 0),
(3, 'שיר', 'שירה', '2023-02-05', '1132323', 'avi@avi', 'שירה', 'שירה', 0),
(7, 'איש קשר', 'לבדיקה', '1975-02-10', '444444', 'ckkc@dddd', 'עיר', 'לבדיקה', 0),
(8, 'גלי', 'גל', '2013-03-14', '0996069059', 'sar@gmail.com', 'בית שמש', 'גליגל', 0),
(6, 'שרה', 'גראזי', '2003-11-08', '0583282897', 'sar@gmail.com', 'בית שמש', 'c', 1);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `email` varchar(40) NOT NULL,
  `country` varchar(20) NOT NULL,
  `city` varchar(25) NOT NULL,
  `street` varchar(25) NOT NULL,
  `remark` varchar(100) DEFAULT '',
  `isDeleted` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `createTime`, `firstName`, `lastName`, `phone`, `email`, `country`, `city`, `street`, `remark`, `isDeleted`) VALUES
(1, '2023-02-09 20:24:54', 'בן אדם', 'משפחה', '058058058', 'sara@sara', 'ישראל', 'בית שמש', 'חגי הנביא', 'הערה כלשהי', 0),
(2, '2023-02-14 22:19:25', 'שיר', 'שיר', '0887777666', 'shir@shir', 'טורקיה', 'עיר', 'רחוב', 'שווה', 0),
(5, '2023-02-14 23:31:01', 'אפרימי', 'אפרים', '0990909', 'sara2SA', 'ארצות הברית', 'ניו ג\'רזי', 'רחוב מסוים', '', 0),
(6, '2023-02-15 00:59:34', 'אברהם', 'אברהמי', '0400049944', 'avi@avi', 'אברהם', 'אברהם', 'אברהמי', '', 0),
(7, '2023-02-15 16:49:04', 'שם פרטי', 'ומשפחה', '0599940809', 'sara@sara', 'טורקיה', 'בית שמש', 'חגי הנביא', '', 0),
(8, '2023-02-15 17:10:11', 'שרהלה', 'גראזי', '090950809809', 'sara@sarad', 'ישראל', 'שראלה', 'ישראלוש', 'לקוח מצוין', 0),
(9, '2023-02-15 21:20:55', 'שיר', 'שירה', '0559356898', 'aaa@aaa', 'שיר', 'שירה', 'שירה', '', 0),
(15, '2023-03-19 18:46:24', 'לקוח חדש', 'לבדיקה', '9859855', 'check@check', 'שיר', 'לבדיקה', 'בדוק', 'לקוח בבדיקה מקיפה כרגע', 0),
(10, '2023-02-19 14:05:18', 'משפחת', 'ברווזי', '0583282897', 'sar328@gmail.com', 'אברהם', 'אברהם', 'חגי oo', '', 0),
(13, '2023-03-05 19:17:04', 'מירי', 'מורסיא', '879744444', 'miri@miri', 'נפל', 'עיר', 'חזון איש', '', 1),
(14, '2023-03-12 20:28:15', 'בנאדם אחד', 'שירה', '4324424243', 'avi@avi', 'ישראל', 'עיר', 'הרחוב שלי', 'cs', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdTime` datetime NOT NULL,
  `fullName` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `userName` varchar(20) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `createdTime`, `fullName`, `email`, `userName`, `password`) VALUES
(8, '2023-01-15 17:46:00', 'hahaha', 'haha@haha', 'haha', '7b1f46bf43a0a1acdb65141a8dbfe329'),
(9, '2023-01-15 17:49:46', 'שם מלא', 'email@email', 'שם משתמש', '920e39ebbf14cfab766a06ab051c9916'),
(3, '2023-01-11 21:03:55', 'שרה', 'sara@sara', 'fullName', 'b51e8dbebd4ba8a8f342190a4b9f08d7'),
(7, '2023-01-15 17:43:19', 'sara', 'sa@sa.com', 'saraG', '800e365301349f2b62fc5bcbf6ac2b39'),
(6, '2023-01-11 21:09:45', 'שרה', 'sara@sara', 'שם מיוחד', 'b51e8dbebd4ba8a8f342190a4b9f08d7'),
(10, '2023-01-15 19:37:56', 'כעכע', '123@123', 'דשרש', 'e10adc3949ba59abbe56e057f20f883e'),
(11, '2023-01-15 20:00:22', 'chana', 'hana@hana', 'chana', 'e10adc3949ba59abbe56e057f20f883e'),
(12, '2023-01-15 20:15:17', 'שירה', '123@123', 'שירה', '4297f44b13955235245b2497399d7a93'),
(13, '2023-01-15 20:24:55', 'תהילה', '123@123', 'תהילה', '4297f44b13955235245b2497399d7a93'),
(14, '2023-01-22 19:16:13', 'sara', 'sara@sara', 'sara', '81dc9bdb52d04dc20036dbd8313ed055'),
(15, '2023-02-15 15:47:49', 'shira', 'shira@shira', 'shira', 'e10adc3949ba59abbe56e057f20f883e'),
(16, '2023-02-15 15:48:37', 'shira', 'shira@shira', 'shira', 'e10adc3949ba59abbe56e057f20f883e'),
(17, '2023-02-22 19:14:58', 'sara', 'sara@sara', 'sara', 'b59c67bf196a4758191e42f76670ceba'),
(18, '2023-02-25 22:01:35', 'שרה גראזי', 'saragr328@gmail.com', '', ''),
(19, '2023-02-25 22:05:11', 'יצחק ורבקה גראזי', '4102091ir@gmail.com', '', ''),
(20, '2023-02-28 23:19:03', 'אפרת', 'efrat@efrat', 'efrat', 'b59c67bf196a4758191e42f76670ceba'),
(21, '2023-03-05 18:53:03', 'shushu', 'shushu@shushu', 'shushu', 'a01610228fe998f515a72dd730294d87'),
(22, '2023-03-12 22:07:32', 'שוש שוש', 'shush@shush', 'שוש', '1d72310edc006dadf2190caad5802983');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
