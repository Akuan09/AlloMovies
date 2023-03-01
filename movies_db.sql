-- MySQL dump 10.13  Distrib 8.0.26, for Linux (x86_64)
--
-- Host: localhost    Database: movies_db
-- ------------------------------------------------------
-- Server version	8.0.26-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `movies_db`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `movies_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `movies_db`;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id_category` int unsigned NOT NULL AUTO_INCREMENT,
  `name_category` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Science-fiction'),(2,'Action'),(3,'Adventure'),(4,'Comedy'),(5,'Drama'),(6,'Fantasy'),(7,'Supernatural'),(8,'Horror');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `directors`
--

DROP TABLE IF EXISTS `directors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `directors` (
  `id_director` int unsigned NOT NULL AUTO_INCREMENT,
  `name_director` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birth_director` date DEFAULT NULL,
  `pic_director` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_director`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `directors`
--

LOCK TABLES `directors` WRITE;
/*!40000 ALTER TABLE `directors` DISABLE KEYS */;
INSERT INTO `directors` VALUES (1,'Paul Verhoeven','1938-07-18','https://upload.wikimedia.org/wikipedia/commons/f/ff/Paul_Verhoeven_Cannes_2016.jpg'),(2,'James Cameron','1954-08-16','https://upload.wikimedia.org/wikipedia/commons/f/fe/James_Cameron_by_Gage_Skidmore.jpg'),(3,'Pedro Almodovar','1949-09-25','https://upload.wikimedia.org/wikipedia/commons/8/84/Pedro_Almod%C3%B3var_at_Premios_Goya_2017_1_%28cropped_3%29.jpg'),(4,'Peter Jackson','1961-10-31','https://upload.wikimedia.org/wikipedia/commons/4/4a/Peter_Jackson_SDCC_2014.jpg'),(5,'Ivan Reitman','1946-10-27','https://upload.wikimedia.org/wikipedia/commons/7/7d/Front_Runner_08_%2844849853362%29_%28cropped%29.jpg'),(6,'Ridley Scott','1937-11-30','https://upload.wikimedia.org/wikipedia/commons/1/12/NASA_Journey_to_Mars_and_%E2%80%9CThe_Martian%E2%80%9D_%28201508180030HQ%29.jpg');
/*!40000 ALTER TABLE `directors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id_movie` int unsigned NOT NULL AUTO_INCREMENT,
  `title_movie` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `duration_movie` int unsigned DEFAULT NULL,
  `year_movie` year DEFAULT NULL,
  `synopsis_movie` varchar(512) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `director_movie` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id_movie`),
  KEY `movies_directors_id` (`director_movie`),
  CONSTRAINT `movies_directors_fk` FOREIGN KEY (`director_movie`) REFERENCES `directors` (`id_director`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Starship Troopers',129,1997,'Synopsis Starship Troopers',1),(2,'Terminator',107,1984,'Synopsis Terminator',2),(3,'Terminator 2 - Judgment Day',137,1991,'Synopsis Terminator 2 - Judgment Day',2),(4,'Volver',121,2005,'Synopsis Volver',3),(5,'Lord of the rings',178,2001,'Synopsis Lord of the rings',4),(6,'The Frighteners',110,1996,'Synopsis The Frighteners',4),(7,'Bad Taste',92,1987,'Synopsis Bad Taste',4),(8,'Ghostbusters',105,1984,'Synopsis Ghostbusters',5),(9,'Alien',117,1979,'Synopsis Alien',6);
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_categories`
--

DROP TABLE IF EXISTS `movies_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies_categories` (
  `id_movie_category` int unsigned NOT NULL AUTO_INCREMENT,
  `id_movie` int unsigned DEFAULT NULL,
  `id_category` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id_movie_category`),
  KEY `mc_movies_id` (`id_movie`),
  KEY `mc_categories_id` (`id_category`),
  CONSTRAINT `mc_categories_fk` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id_category`),
  CONSTRAINT `mc_movies_fk` FOREIGN KEY (`id_movie`) REFERENCES `movies` (`id_movie`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_categories`
--

LOCK TABLES `movies_categories` WRITE;
/*!40000 ALTER TABLE `movies_categories` DISABLE KEYS */;
INSERT INTO `movies_categories` VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,1),(5,2,2),(6,3,1),(7,3,2),(8,4,4),(9,4,5),(10,5,6),(11,5,2),(12,5,3),(13,5,5),(14,6,7),(15,6,4),(16,6,8),(17,7,1),(18,7,4),(19,7,8),(20,8,7),(21,8,4),(22,9,1),(23,9,8);
/*!40000 ALTER TABLE `movies_categories` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-29 20:03:27
