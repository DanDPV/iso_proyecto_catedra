-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-12-2023 a las 03:42:45
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `Release_date` date NOT NULL,
  `category` varchar(11) NOT NULL,
  `image` varchar(70) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `title`, `Release_date`, `category`, `image`, `description`) VALUES
(1, 'Do not contact a Rental to cancel a reservation', '2023-11-07', 'Car', 'products/cardonot.jpg', 'Critical Update on how to handle merchant car reservations'),
(2, 'Amadeus Ticket refund', '2023-10-06', 'Flight', 'products/Amadeusticket.jpg', 'Description on how to implement Amadeus automated ticket refunds'),
(3, 'Tips to for ATR', '2023-10-10', 'Flight', 'products/ATR.jpg', 'Tips on how to run ATR'),
(4, 'Critical customer processes', '2023-10-15', 'General', 'products/critical-customer.jpg', 'Reminder about documentation'),
(5, 'Delta Pro', '2023-10-27', 'Flight', 'products/deltapro.jpg', 'Steps on how to use Delta Pro'),
(6, 'Flight refund request due to ECR', '2023-07-08', 'Flight', 'products/flight-refund.jpg', 'Steps on how to request a refund'),
(7, 'How to respond to sensitive topics?', '2023-06-16', 'General', 'products/how-to-respond.jpg', 'Little guide on how to answer sensitive questions from customers'),
(8, 'Name correction training', '2023-04-07', 'Car', 'products/name-correction.jpg', 'Name correction training details'),
(9, 'One Key program statement', '2023-09-14', 'Hotel', 'products/onekey.jpg', 'Guide on how to handle one key complaints'),
(10, 'How to calculate earning', '2023-09-17', 'Hotel', 'products/onekey2.jpg', 'Steps on how to calculate earnings from one key loyalty program'),
(11, 'One Key Articles matrix', '2023-09-13', 'Hotel', 'products/onekey3.jpg', 'Visual guide of all existing articles to handle one key'),
(12, 'Support is now on one team', '2023-09-17', 'General', 'products/oneteam.jpg', 'Instructions on how to answer the new one team'),
(13, 'Opening & Clossing Chat Midas', '2023-10-01', 'General', 'products/openin-closing.jpg', 'Verbiages that Midas agents need to use'),
(14, 'Refusing to escalate is considered a ZTP', '2023-10-05', 'General', 'products/refusing-to-escalate.jpg', 'Reminder on how to handle escalation requests'),
(15, 'Response time Bonus', '2023-09-08', 'General', 'products/response.jpg', 'Introduction and details of Response time bonus'),
(16, 'Response time tips', '2023-09-15', 'General', 'products/response-tips.jpg', 'Tips on how to improve response time'),
(17, 'When a customer request to speak with a manager', '2023-06-20', 'General', 'products/manager.jpg', 'Verbiage to be use when recieving a manager request'),
(18, 'Void timeframes for United Airlines', '2020-05-01', 'Flight', 'products/void-timeframe.jpg', 'Update on void window policy');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
