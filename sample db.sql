-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2023 at 05:42 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `weatherapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `user` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `review` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`user`, `email`, `review`) VALUES
('Mustali Sadikot', 'mustali@gmail.com', 'A clear and colorful UI design makes weather data easy to understand.'),
('Devansh Jethwa', 'devansh@gmail.com', 'The website is very attractive and fast. The functioning of this website is very impressive. Glitch free website.'),
('Uday Vara', 'uday@gmail.com', 'Precise data with great visual appeal.'),
('Nandini Odedra', 'nandini@gmail.com', 'Its an awesome website with accurate information.'),
('Purvi Dabhi', 'purvi@gmail.com', 'Nicely designed website to stay updated with forcast.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
