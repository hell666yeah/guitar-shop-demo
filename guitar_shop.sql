-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2018 at 11:30 PM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `guitar_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(255) NOT NULL,
  `username` varchar(11) NOT NULL,
  `products` blob NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `serialNumber` int(11) NOT NULL,
  `type` varchar(25) NOT NULL,
  `subType` varchar(25) NOT NULL,
  `count` int(11) NOT NULL,
  `name` text NOT NULL,
  `brand` text NOT NULL,
  `strings` varchar(11) NOT NULL,
  `price` int(11) NOT NULL,
  `size` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`serialNumber`, `type`, `subType`, `count`, `name`, `brand`, `strings`, `price`, `size`) VALUES
(1, 'guitars', 'electric', 333, 'Steve Vai Signature', 'Ibanez', '6', 125, ''),
(2, 'guitars', 'electric', 444, 'American Special', 'Fender', '6', 200, ''),
(3, 'guitars', 'electric', 501, 'Revstar RS420', 'Yamaha', '6', 125, ''),
(4, 'guitars', 'electric', 1, 'Jimmy Page Special Edition', 'Les Paul', '12', 999, ''),
(5, 'guitars', 'acoustic', 222, 'Paldio', 'Santanio', '6', 99, ''),
(6, 'guitars', 'acoustic', 123, 'Yamaha12022', 'Yamaha', '6', 45, ''),
(7, 'guitars', 'acoustic', 234, 'Yamaha12662', 'Yamaha', '6', 85, ''),
(8, 'straps', 'large', 1254, 'Penny Creek Style 1', 'Penny Creek', 'none', 10, ''),
(9, 'straps', 'large', 2500, 'Rocky Strap', 'Ibanez', 'none', 12, ''),
(10, 'straps', 'small', 888, 'Santa Strap', 'Santonio', 'none', 11, ''),
(11, 'straps', 'large', 158, 'test Strap', 'Santonio', 'none', 10, ''),
(12, 'straps', 'large', 158, 'testing Strap', 'Antonio', 'none', 10, ''),
(13, 'picks', 'plastic', 8500, 'Furtedos Pick Pack of 3', 'Furtedos', 'none', 10, ''),
(14, 'picks', 'wooden', 1000, 'Furtedos Pick Pack of 5', 'Furtedos', 'none', 13, ''),
(15, 'picks', 'wooden', 1000, 'Strummers Paradise', 'Strummers Paradise', 'none', 2, ''),
(16, 'picks', 'wooden', 25, 'Yamaha Limited Edition Picks', 'Yamaha', 'none', 22, '');

-- --------------------------------------------------------

--
-- Table structure for table `purchase_details`
--

CREATE TABLE `purchase_details` (
  `purchaseId` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `products` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchase_details`
--

INSERT INTO `purchase_details` (`purchaseId`, `username`, `products`) VALUES
(1, 'admin', 'test'),
(4, 'admin', 'null purchased items.'),
(5, 'admin', 'Admin purchased items.'),
(6, 'admin', 'Admin purchased items.'),
(7, 'admin', 'Admin purchased items.'),
(8, 'admin', 'Admin purchased items.'),
(9, 'admin', 'Admin purchased items.'),
(10, 'admin', 'Admin purchased items.'),
(11, 'admin', 'Admin purchased items.');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` int(11) NOT NULL,
  `username` varchar(25) DEFAULT NULL,
  `password` varchar(25) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `username`, `password`, `email`) VALUES
(1, 'admin', 'admin', 'a@a.com'),
(2, 'test2', 'asd123', 'b@b.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`serialNumber`);

--
-- Indexes for table `purchase_details`
--
ALTER TABLE `purchase_details`
  ADD PRIMARY KEY (`purchaseId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `serialNumber` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `purchase_details`
--
ALTER TABLE `purchase_details`
  MODIFY `purchaseId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
