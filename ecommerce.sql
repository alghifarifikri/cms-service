-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2021 at 11:36 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id_admin` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id_admin`, `username`, `password`, `role`) VALUES
('001', 'admin', 'admin', 1);

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id_cart` varchar(100) NOT NULL,
  `id_product` varchar(100) NOT NULL,
  `id_customer` varchar(100) NOT NULL,
  `quantity` int(10) NOT NULL,
  `created_on` datetime(5) NOT NULL,
  `updated_on` datetime(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id_cart`, `id_product`, `id_customer`, `quantity`, `created_on`, `updated_on`) VALUES
('e6963cea-b2b3-4f9a-8f8c-3f6f62350f43', 'fc7e4e85-bcb8-45a2-9cf4-21aed22b9e94', '80b0f771-3c63-486e-b6af-c00c14697f04', 5, '2021-09-21 14:35:10.56400', '2021-09-21 14:35:10.56400');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id_customer` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` int(5) NOT NULL,
  `created_on` datetime(5) NOT NULL,
  `updated_on` datetime(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id_customer`, `username`, `email`, `password`, `role`, `created_on`, `updated_on`) VALUES
('80b0f771-3c63-486e-b6af-c00c14697f04', 'alfareez', 'alghi7733@gmail.com', '$2a$10$.A1OVbOhjVjWY6tlY5fNjO9AbzEd0iFzKW/jyj9gbRmJvU3Ak73uC', 2, '2021-09-21 11:19:30.48400', '2021-09-21 11:19:30.48400');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id_product` varchar(50) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `price` int(10) NOT NULL,
  `total_product` int(10) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `categories` varchar(50) NOT NULL,
  `ratings` int(5) NOT NULL,
  `created_on` datetime(5) NOT NULL,
  `updated_on` datetime(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id_product`, `product_name`, `description`, `price`, `total_product`, `image`, `categories`, `ratings`, `created_on`, `updated_on`) VALUES
('4264f14b-738b-4c98-85d9-9210ecb07ee9', 'Bedak Bayi', 'Bedak Super Lembut', 10000, 10, 'IMG_20150806_203024.jpg', 'kecantikan', 0, '2021-09-21 10:47:58.53700', '2021-09-21 10:47:58.53700'),
('6f2f37da-511f-4ca7-bc5c-81c300e987bf', 'Drone', 'Drone Ajaib', 10000, 10, 'pemerintah-akhirnya-keluarkan-regulasi-soal-drone-ini-kata-apdi.jpg', '', 0, '2021-09-15 13:14:18.08700', '2021-09-15 13:14:18.08700'),
('fc7e4e85-bcb8-45a2-9cf4-21aed22b9e94', 'Drone Mini', 'Drone Super Mini', 10000, 8, 'img_20210623_10090284.jpg', 'elektronik', 0, '2021-09-20 16:21:10.70600', '2021-09-21 10:45:49.52900');

-- --------------------------------------------------------

--
-- Table structure for table `revoked_token`
--

CREATE TABLE `revoked_token` (
  `token` varchar(300) NOT NULL,
  `revoked` int(11) NOT NULL,
  `created_on` datetime(5) NOT NULL,
  `update_on` datetime(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `revoked_token`
--

INSERT INTO `revoked_token` (`token`, `revoked`, `created_on`, `update_on`) VALUES
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZXMiOjEsImlhdCI6MTYzMjExMDIwN30.GtW1BJyjxBUbnI5BcjsVvgqtbvFxoSFlcCDi7aYPKP0', 0, '2021-09-20 10:56:47.06000', '2021-09-20 10:56:47.06000'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9jdXN0b21lciI6IjgwYjBmNzcxLTNjNjMtNDg2ZS1iNmFmLWMwMGMxNDY5N2YwNCIsInVzZXJuYW1lIjoiYWxmYXJlZXoiLCJlbWFpbCI6ImFsZ2hpNzczM0BnbWFpbC5jb20iLCJyb2xlcyI6MiwiaWF0IjoxNjMyMTk4NzUxfQ.XAYfT6gR6Lid1nCodvny3zs3mZomjPuGa3cuN23soTQ', 0, '2021-09-21 11:32:31.16300', '2021-09-21 11:32:31.16300');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id_cart`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id_customer`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_product`);

--
-- Indexes for table `revoked_token`
--
ALTER TABLE `revoked_token`
  ADD PRIMARY KEY (`token`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
