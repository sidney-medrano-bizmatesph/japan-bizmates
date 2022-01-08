-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2021 at 02:01 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `payroll`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee_contribution`
--

CREATE TABLE `employee_contribution` (
  `id` int(11) NOT NULL,
  `pi_number` varchar(255) NOT NULL,
  `tax` int(11) DEFAULT NULL COMMENT '0 = off, 1 = on',
  `tax_type_id` int(11) DEFAULT NULL COMMENT '1 = 3%; 2 = 5%',
  `gsis` int(11) DEFAULT NULL COMMENT '0 = off, 1 = on',
  `sss` int(11) DEFAULT NULL COMMENT '0 = off, 1 = on 	',
  `philhealth` int(11) DEFAULT NULL COMMENT '0 = off, 1 = on',
  `pagibig` int(11) DEFAULT NULL COMMENT '0 = off, 1 = on',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee_contribution`
--

INSERT INTO `employee_contribution` (`id`, `pi_number`, `tax`, `tax_type_id`, `gsis`, `sss`, `philhealth`, `pagibig`, `updated_at`, `created_at`) VALUES
(1, '83', 1, 2, 1, 1, 0, 0, '2021-05-06 21:56:59', '2021-02-10 03:41:25'),
(2, '313', 0, 1, 0, 0, 0, 0, '2021-03-24 06:45:22', '2021-02-10 03:41:35'),
(3, '561', 0, 1, 0, 0, 0, 0, '2021-02-10 03:41:46', '2021-02-10 03:41:46'),
(4, '600', 0, 1, 0, 0, 0, 0, '2021-02-10 03:41:57', '2021-02-10 03:41:57'),
(5, '689', 0, 1, 0, 0, 0, 0, '2021-02-10 03:41:58', '2021-02-10 03:41:58'),
(7, '', 0, 0, 0, 0, 0, 0, '2021-02-10 03:50:58', '2021-02-10 03:50:58'),
(8, '875', 0, 1, 0, 0, 0, 0, '2021-02-18 00:57:00', '2021-02-18 00:57:00'),
(9, '1157', 0, 1, 0, 0, 0, 0, '2021-02-18 00:57:05', '2021-02-18 00:57:05'),
(10, '1159', 0, 1, 0, 0, 0, 0, '2021-02-18 00:57:09', '2021-02-18 00:57:09'),
(11, '83', 0, 1, 0, 0, 0, 0, '2021-03-24 02:45:42', '2021-03-24 02:45:42'),
(12, '888', 0, 1, 0, 0, 0, 0, '2021-03-24 02:46:42', '2021-03-24 02:46:42'),
(13, '910', 0, 1, 0, 0, 0, 0, '2021-03-24 02:46:44', '2021-03-24 02:46:44'),
(14, '970', 0, 1, 0, 0, 0, 0, '2021-03-24 02:46:45', '2021-03-24 02:46:45'),
(15, '1045', 0, 1, 0, 0, 0, 0, '2021-03-24 02:46:45', '2021-03-24 02:46:45'),
(16, '1051', 0, 1, 0, 0, 0, 0, '2021-03-24 02:46:46', '2021-03-24 02:46:46'),
(17, '679', 0, 1, 0, 0, 0, 0, '2021-03-24 02:47:02', '2021-03-24 02:47:02'),
(18, '637', 0, 1, 0, 0, 0, 0, '2021-03-24 02:47:06', '2021-03-24 02:47:06'),
(19, '1764', 0, 1, 0, 0, 0, 0, '2021-05-06 02:33:00', '2021-05-06 02:33:00'),
(20, '1793', 0, 1, 0, 0, 0, 0, '2021-05-06 02:33:03', '2021-05-06 02:33:03'),
(21, '1684', 1, 1, 1, 1, 1, 1, '2021-05-26 21:20:13', '2021-05-26 21:20:03');

-- --------------------------------------------------------

--
-- Table structure for table `employee_monthly_deduction_addition`
--

CREATE TABLE `employee_monthly_deduction_addition` (
  `id` int(11) NOT NULL,
  `pi_number` int(11) NOT NULL,
  `item` text NOT NULL,
  `amount` varchar(255) NOT NULL,
  `type` int(11) NOT NULL COMMENT '1 = addition; 0 = deduction',
  `status` int(11) NOT NULL COMMENT '1 = active; 0 = inactive',
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee_monthly_deduction_addition`
--

INSERT INTO `employee_monthly_deduction_addition` (`id`, `pi_number`, `item`, `amount`, `type`, `status`, `updated_at`, `created_at`) VALUES
(1, 83, 'ANTAP PREM INS (EDITED)', '1500', 1, 1, '2021-05-06 21:57:30', '2021-05-07 05:57:30'),
(2, 83, 'PROVIDENTSX', '100', 0, 1, '2021-05-06 21:57:38', '2021-05-07 05:57:38'),
(3, 83, 'ANTAP AIDS', '449.52', 0, 1, '2021-05-06 22:12:56', '2021-05-07 06:12:56'),
(4, 83, 'PERA/ACA', '1909.09', 1, 1, '2021-03-24 06:27:50', '2021-03-24 06:27:50'),
(5, 313, 'Test', '100', 0, 1, '2021-05-06 05:18:04', '2021-05-06 13:18:04'),
(6, 83, 'TEST DEDUCTION', '1000', 0, 1, '2021-05-06 21:45:02', '2021-05-07 05:45:02'),
(7, 83, 'ANTAP', '1000', 1, 1, '2021-05-06 22:05:52', '2021-05-06 22:05:52'),
(8, 1684, 'VIOS', '8000', 0, 1, '2021-05-26 21:20:36', '2021-05-26 21:20:36'),
(9, 1684, 'LANCER', '1500', 0, 1, '2021-05-26 21:20:45', '2021-05-26 21:20:45'),
(10, 1684, 'ALLOWANCE', '2000', 1, 1, '2021-05-26 21:25:22', '2021-05-26 21:25:22');

-- --------------------------------------------------------

--
-- Table structure for table `employee_salary`
--

CREATE TABLE `employee_salary` (
  `id` int(11) NOT NULL,
  `pi_number` int(11) NOT NULL,
  `monthly_salary` varchar(255) NOT NULL,
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee_salary`
--

INSERT INTO `employee_salary` (`id`, `pi_number`, `monthly_salary`, `updated_at`, `created_at`) VALUES
(6, 3, '380.00', '2019-09-03 08:45:41', '2019-09-03 08:45:41'),
(7, 8, '10008', '2019-09-03 08:48:40', '2019-09-03 08:48:40'),
(16, 1013, '24510', '2019-09-11 01:01:56', '2019-09-11 01:01:56'),
(17, 786, '11178.88', '2019-09-20 05:47:39', '2019-09-20 05:47:39'),
(19, 1375, '15000', '2019-09-20 06:46:54', '2019-09-20 06:46:54'),
(20, 546, '17059', '2019-09-20 06:47:46', '2019-09-20 06:47:46'),
(22, 307, '123393', '2019-09-20 08:01:34', '2019-09-20 08:01:34'),
(24, 488, '21561', '2019-10-01 07:26:32', '2019-10-01 07:26:32'),
(25, 1750, '7700', '2019-10-01 07:26:50', '2019-10-01 07:26:50'),
(35, 1682, '20754', '2020-02-27 08:37:50', '2020-02-27 08:37:50'),
(36, 1681, '20754', '2020-03-13 06:43:13', '2020-03-13 06:43:13'),
(38, 327, '8118', '2020-05-21 12:53:18', '2020-05-21 12:53:18'),
(39, 1372, '20961', '2020-07-10 06:50:16', '2020-07-10 06:50:16'),
(41, 83, '20000', '2021-05-06 21:57:50', '2021-03-24 08:27:27'),
(42, 313, '30000', '2021-03-24 08:33:30', '2021-03-24 08:32:53'),
(43, 561, '10000', '2021-05-06 21:57:58', '2021-05-06 21:57:56'),
(44, 1684, '23876.82', '2021-05-26 21:21:01', '2021-05-26 06:21:21');

-- --------------------------------------------------------

--
-- Table structure for table `funds`
--

CREATE TABLE `funds` (
  `id` int(11) NOT NULL,
  `fund_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `funds`
--

INSERT INTO `funds` (`id`, `fund_name`, `created_at`, `updated_at`) VALUES
(1, 'Fund164', '2021-02-08 06:08:30', '2021-02-08 06:08:30'),
(2, 'Fund101', '2021-02-08 06:42:37', '2021-02-08 06:42:37'),
(3, '12347', '2021-02-08 06:50:19', '2021-02-17 05:42:59'),
(4, '123456', '2021-02-08 06:51:19', '2021-02-17 05:42:50'),
(5, 'Gerald', '2021-02-09 03:13:13', '2021-02-09 03:13:13'),
(6, '1234', '2021-02-09 03:13:21', '2021-02-17 05:42:44'),
(7, 'Joke lang gerald', '2021-02-09 03:13:32', '2021-02-09 03:56:51'),
(8, 'Zasdfasdf - updated again', '2021-02-09 03:20:12', '2021-02-09 03:57:32'),
(9, 'Zaqasdfasfd - updated', '2021-02-09 03:20:20', '2021-02-09 03:56:45'),
(10, 'zzzz', '2021-02-09 03:38:59', '2021-02-09 03:38:59'),
(12, 'New fund', '2021-02-16 06:34:59', '2021-02-16 06:34:59'),
(13, 'Sidney Supot', '2021-03-24 01:31:23', '2021-03-24 01:31:23'),
(14, 'zzzzzzzzz', '2021-02-10 00:07:36', '2021-02-10 00:46:39');

-- --------------------------------------------------------

--
-- Table structure for table `fund_members`
--

CREATE TABLE `fund_members` (
  `id` int(11) NOT NULL,
  `pi_number` int(11) NOT NULL,
  `fund_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fund_members`
--

INSERT INTO `fund_members` (`id`, `pi_number`, `fund_id`) VALUES
(1, 1013, 1),
(2, 1375, 1),
(3, 786, 1),
(4, 546, 1),
(5, 307, 1),
(6, 1372, 1),
(7, 1684, 1),
(8, 488, 1),
(9, 1750, 1),
(10, 1, 1),
(11, 2, 1),
(12, 3, 1),
(13, 4, 1),
(15, 6, 1),
(17, 8, 1),
(19, 10, 1),
(20, 11, 1);

-- --------------------------------------------------------

--
-- Table structure for table `gsis_prem`
--

CREATE TABLE `gsis_prem` (
  `id` int(11) NOT NULL,
  `personal_share` text NOT NULL,
  `government_share` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gsis_prem`
--

INSERT INTO `gsis_prem` (`id`, `personal_share`, `government_share`) VALUES
(1, '9', '12');

-- --------------------------------------------------------

--
-- Table structure for table `insurance_settings`
--

CREATE TABLE `insurance_settings` (
  `id` int(11) NOT NULL,
  `fund_id` int(11) NOT NULL,
  `salary_source` varchar(255) NOT NULL COMMENT 'base, gross',
  `payment_sched` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `insurance_settings`
--

INSERT INTO `insurance_settings` (`id`, `fund_id`, `salary_source`, `payment_sched`) VALUES
(1, 2, 'base', 1),
(2, 1, 'base', 2),
(3, 4, 'base', 3),
(4, 3, 'gross', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `loan_amor_logs`
--

CREATE TABLE `loan_amor_logs` (
  `id` int(11) NOT NULL,
  `loan_id` int(11) NOT NULL,
  `amount_paid` float NOT NULL,
  `remaining_after` float NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `loan_ledger`
--

CREATE TABLE `loan_ledger` (
  `id` int(11) NOT NULL,
  `pi_number` int(11) NOT NULL,
  `loan_description` text NOT NULL,
  `loan_amt` float NOT NULL,
  `monthly_amor` float NOT NULL,
  `remaining_times_topay` int(11) NOT NULL,
  `status` int(11) NOT NULL COMMENT '1 = ongoing; 0 = paid',
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `loan_ledger`
--

INSERT INTO `loan_ledger` (`id`, `pi_number`, `loan_description`, `loan_amt`, `monthly_amor`, `remaining_times_topay`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'Phone', 2500, 100, 2500, 1, '2020-12-02 00:53:37', '2020-12-02 00:53:37'),
(2, 83, 'Cart', 500000, 5000, 10, 1, '2021-03-25 02:17:31', '2021-05-06 00:56:04'),
(3, 83, 'iPhones', 50000, 15000, 10, 1, '2021-03-25 02:18:37', '2021-05-06 00:56:15'),
(4, 83, 'House', 20000, 200, 100, 1, '2021-03-25 02:53:16', '2021-05-06 21:58:57'),
(5, 83, 'Cart2', 10000, 2000, 5, 1, '2021-05-06 21:58:51', '2021-05-06 21:58:51'),
(6, 83, 'Cart', 0, 0, 0, 1, '2021-05-25 00:08:56', '2021-05-25 00:08:56'),
(7, 1684, 'MAYARI GAMING CHAIR', 10000, 1000, 10, 1, '2021-05-26 21:21:21', '2021-05-26 21:21:21');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `misc_deductions`
--

CREATE TABLE `misc_deductions` (
  `id` int(11) NOT NULL,
  `field` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `misc_deductions`
--

INSERT INTO `misc_deductions` (`id`, `field`) VALUES
(1, 'Monthly Rent'),
(2, 'Internet Bills'),
(3, 'Cable'),
(4, 'Electric Bills'),
(5, 'Food Allowance'),
(6, 'OTHERS'),
(7, 'ETC'),
(8, 'sample'),
(9, 'TEST'),
(10, 'TEST 2'),
(11, 'TEST'),
(12, 'WTF'),
(13, 'test'),
(14, 'aweae'),
(15, 'test'),
(16, '123123123'),
(17, '1231'),
(18, '4141'),
(19, '41414141'),
(20, 'MAYATEN'),
(21, 'MYAYEN');

-- --------------------------------------------------------

--
-- Table structure for table `month`
--

CREATE TABLE `month` (
  `id` int(11) NOT NULL,
  `month` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `month`
--

INSERT INTO `month` (`id`, `month`) VALUES
(1, 'january'),
(2, 'february'),
(3, 'march'),
(4, 'april'),
(5, 'may'),
(6, 'june'),
(7, 'july'),
(8, 'august'),
(9, 'september'),
(10, 'october'),
(11, 'november'),
(12, 'december');

-- --------------------------------------------------------

--
-- Table structure for table `organizations`
--

CREATE TABLE `organizations` (
  `id` int(11) NOT NULL,
  `org_name` text NOT NULL,
  `active` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `organizations`
--

INSERT INTO `organizations` (`id`, `org_name`, `active`, `created_at`, `updated_at`) VALUES
(1, 'ANTAP', 1, '2020-03-18 07:46:37', NULL),
(2, 'Provident Fund', 1, '2020-03-18 08:30:32', NULL),
(3, 'Sidney is awesome', 1, '2021-05-06 08:44:35', '2021-05-06 00:44:35'),
(4, 'ANTAP ORG', 1, '2021-05-06 22:14:52', '2021-05-06 22:14:52');

-- --------------------------------------------------------

--
-- Table structure for table `org_deduct_addition`
--

CREATE TABLE `org_deduct_addition` (
  `id` int(11) NOT NULL,
  `org_id` int(11) NOT NULL,
  `item` text NOT NULL,
  `amount` float NOT NULL,
  `type` int(11) NOT NULL COMMENT '1 = addition; 0 = deduction',
  `status` int(11) NOT NULL COMMENT '1 = active; 0 = inactive',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `org_deduct_addition`
--

INSERT INTO `org_deduct_addition` (`id`, `org_id`, `item`, `amount`, `type`, `status`, `updated_at`, `created_at`) VALUES
(1, 1, 'ANTAP', 150, 0, 1, '2021-05-06 11:26:47', '2020-03-18 09:17:10'),
(2, 1, 'ANTAP Aid', 200, 0, 1, '2021-05-06 11:26:47', '2020-03-23 06:21:08'),
(3, 2, 'Provident Funds', 12001, 0, 1, '2021-05-06 05:48:00', '2021-05-06 13:48:00'),
(4, 1, 'PERA/ACA', 1000, 1, 1, '2021-05-26 21:26:25', '2021-05-27 05:26:25'),
(5, 1, 'PROVIDENTSX', 0, 0, 0, '2021-05-06 04:50:51', '2021-05-06 04:50:51'),
(6, 1, 'ANTART', 1515150, 0, 0, '2021-05-06 05:23:13', '2021-05-06 05:23:13'),
(7, 4, 'ANTAP AID1', 100, 0, 0, '2021-05-06 22:15:55', '2021-05-07 06:15:55');

-- --------------------------------------------------------

--
-- Table structure for table `org_members`
--

CREATE TABLE `org_members` (
  `id` int(11) NOT NULL,
  `org_id` int(11) NOT NULL,
  `pid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `org_members`
--

INSERT INTO `org_members` (`id`, `org_id`, `pid`) VALUES
(2, 1, 1684),
(4, 1, 1682),
(5, 1, 1),
(6, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `pagibig_table`
--

CREATE TABLE `pagibig_table` (
  `id` int(11) NOT NULL,
  `monthly_from` float(10,2) NOT NULL,
  `monthly_to` float(10,2) NOT NULL,
  `ee` float(10,2) NOT NULL,
  `er` float(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pagibig_table`
--

INSERT INTO `pagibig_table` (`id`, `monthly_from`, `monthly_to`, `ee`, `er`) VALUES
(1, 0.00, 1500.00, 1.00, 2.00),
(2, 1501.00, 9999999.00, 2.00, 2.00);

-- --------------------------------------------------------

--
-- Table structure for table `payment_schedules`
--

CREATE TABLE `payment_schedules` (
  `id` int(11) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment_schedules`
--

INSERT INTO `payment_schedules` (`id`, `description`) VALUES
(1, 'monthly on the 1st payroll'),
(2, 'monthly on the 2nd payroll'),
(3, 'per payroll (calculated monthly)');

-- --------------------------------------------------------

--
-- Table structure for table `payroll`
--

CREATE TABLE `payroll` (
  `id` int(11) NOT NULL,
  `fund_id` int(11) NOT NULL,
  `applicable_month` int(11) NOT NULL,
  `applicable_year` text NOT NULL,
  `payroll_type` int(11) NOT NULL COMMENT '0 = quincena; 1 = monthly',
  `quincena_half` int(11) DEFAULT NULL COMMENT '0 = first half; 1 = second half;',
  `status` int(11) NOT NULL,
  `creator` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payroll`
--

INSERT INTO `payroll` (`id`, `fund_id`, `applicable_month`, `applicable_year`, `payroll_type`, `quincena_half`, `status`, `creator`, `updated_at`, `created_at`) VALUES
(1, 1, 3, '2021', 1, 0, 0, 1, '2021-05-26 22:26:34', '2021-05-26 22:26:34'),
(2, 1, 2, '2021', 1, 0, 0, 1, '2021-05-27 00:13:00', '2021-05-27 00:13:00'),
(4, 1, 4, '2021', 1, 0, 0, 1, '2021-05-27 00:14:48', '2021-05-27 00:14:48'),
(5, 1, 1, '2021', 1, 0, 0, 1, '2021-05-27 00:15:30', '2021-05-27 00:15:30');

-- --------------------------------------------------------

--
-- Table structure for table `payroll_details`
--

CREATE TABLE `payroll_details` (
  `id` int(11) NOT NULL,
  `payroll_id` int(11) NOT NULL,
  `pi_number` int(11) NOT NULL,
  `basic_pay` float NOT NULL,
  `days_rendered` int(11) NOT NULL,
  `total_awop` float NOT NULL,
  `hours_ot` float NOT NULL,
  `ot_pay` float NOT NULL,
  `tax` float DEFAULT NULL,
  `gsis` float DEFAULT NULL,
  `gsis_er` float DEFAULT NULL,
  `sss` float DEFAULT NULL,
  `sss_er` float DEFAULT NULL,
  `philhealth` float DEFAULT NULL,
  `philhealth_er` float DEFAULT NULL,
  `pagibig` float DEFAULT NULL,
  `pagibig_er` float DEFAULT NULL,
  `gross_pay` float NOT NULL,
  `total_pay` float NOT NULL,
  `net_pay` float NOT NULL,
  `total_loan` float NOT NULL,
  `total_deduct` float NOT NULL,
  `total_deduct_org` float NOT NULL,
  `total_misc` float NOT NULL,
  `total_addition` float NOT NULL,
  `total_addition_org` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `payroll_details_ext`
--

CREATE TABLE `payroll_details_ext` (
  `id` int(11) NOT NULL,
  `payroll_details_id` int(11) NOT NULL,
  `ext_id` int(11) NOT NULL COMMENT '1 = loan_id, 2 = deduct_id; 3 = additional_id; 4 = misc_id',
  `amount` float NOT NULL,
  `type` int(11) NOT NULL COMMENT '1 = loan, 2 = deduct; 3 = additional; 4 = misc; 5 = deduct_org; 6 = addition_org'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `payroll_misc_deductions`
--

CREATE TABLE `payroll_misc_deductions` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `applicable_month` int(11) NOT NULL,
  `applicable_year` text NOT NULL,
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payroll_misc_deductions`
--

INSERT INTO `payroll_misc_deductions` (`id`, `title`, `applicable_month`, `applicable_year`, `created_by`, `updated_at`, `created_at`) VALUES
(1, 'TEST', 5, '2021', 1, '2021-05-23 18:31:24', '2021-05-23 18:31:24'),
(3, 'Test Replicate', 5, '2021', 1, '2021-05-23 21:33:58', '2021-05-23 21:33:58'),
(4, 'Test Replicate 2', 10, '2021', 1, '2021-05-23 21:36:02', '2021-05-23 21:36:02'),
(5, 'Test Replicate 3', 11, '2021', 1, '2021-05-23 21:36:31', '2021-05-23 21:36:31'),
(6, 'Test Replicate 4', 12, '2021', 1, '2021-05-23 21:36:55', '2021-05-23 21:36:55'),
(7, 'Test Replicate aweawe', 1, '2021', 1, '2021-05-23 21:37:20', '2021-05-23 21:37:20'),
(8, 'Test ReplicateTEST', 2, '2021', 1, '2021-05-23 21:38:23', '2021-05-23 21:38:23'),
(9, 'TEST DRIVE', 4, '2021', 1, '2021-05-23 21:39:20', '2021-05-23 21:39:20'),
(10, 'TEST DRIVE 2', 3, '2021', 1, '2021-05-23 21:52:01', '2021-05-23 21:52:01'),
(11, 'TEST DRIVE 3', 2, '2021', 1, '2021-05-23 21:54:27', '2021-05-23 21:54:27'),
(12, 'TEST DRIVE 4', 9, '2021', 1, '2021-05-23 22:00:54', '2021-05-23 22:00:54'),
(13, 'TEST DRIVE 5', 2, '2021', 1, '2021-05-23 22:04:54', '2021-05-23 22:04:54'),
(14, 'TEST DRIVE 6', 11, '2021', 1, '2021-05-23 22:05:16', '2021-05-23 22:05:16'),
(15, 'Test Replicate 123123', 4, '2020', 1, '2021-05-23 22:06:24', '2021-05-23 22:06:24'),
(16, 'MARCH', 3, '2021', 1, '2021-05-27 22:00:29', '2021-05-27 22:00:29');

-- --------------------------------------------------------

--
-- Table structure for table `payroll_misc_deductions_employee`
--

CREATE TABLE `payroll_misc_deductions_employee` (
  `id` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `pmd_id` int(11) NOT NULL,
  `misc_deduct_id` int(11) NOT NULL,
  `finalize` int(11) NOT NULL COMMENT '0 = no; 1 = finalized; 2 = used in payroll half pay; 3 = used in payroll full pay'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payroll_misc_deductions_employee`
--

INSERT INTO `payroll_misc_deductions_employee` (`id`, `pid`, `amount`, `pmd_id`, `misc_deduct_id`, `finalize`) VALUES
(76, 83, '1', 1, 1, 0),
(77, 83, '2', 1, 2, 0),
(78, 83, '3', 1, 3, 0),
(79, 83, '3', 1, 4, 0),
(80, 83, '3', 1, 5, 0),
(81, 313, '4', 1, 1, 0),
(82, 313, '2', 1, 2, 0),
(83, 313, '4', 1, 3, 0),
(84, 313, '4', 1, 4, 0),
(85, 313, '1', 1, 5, 0),
(86, 561, '5', 1, 1, 0),
(87, 561, '2', 1, 2, 0),
(88, 561, '1', 1, 3, 0),
(89, 561, '1', 1, 4, 0),
(90, 561, '6', 1, 5, 0),
(106, 83, '2', 3, 1, 0),
(107, 83, '2', 3, 2, 0),
(108, 83, '3', 3, 3, 0),
(109, 83, '3', 3, 4, 0),
(110, 83, '3', 3, 5, 0),
(111, 313, '4', 3, 1, 0),
(112, 313, '2', 3, 2, 0),
(113, 313, '4', 3, 3, 0),
(114, 313, '4', 3, 4, 0),
(115, 313, '1', 3, 5, 0),
(116, 561, '5', 3, 1, 0),
(117, 561, '2', 3, 2, 0),
(118, 561, '1', 3, 3, 0),
(119, 561, '1', 3, 4, 0),
(120, 561, '6', 3, 5, 0),
(121, 83, '2', 4, 1, 0),
(122, 83, '2', 4, 2, 0),
(123, 83, '3', 4, 3, 0),
(124, 83, '3', 4, 4, 0),
(125, 83, '3', 4, 5, 0),
(126, 313, '4', 4, 1, 0),
(127, 313, '2', 4, 2, 0),
(128, 313, '4', 4, 3, 0),
(129, 313, '4', 4, 4, 0),
(130, 313, '1', 4, 5, 0),
(131, 561, '5', 4, 1, 0),
(132, 561, '2', 4, 2, 0),
(133, 561, '1', 4, 3, 0),
(134, 561, '1', 4, 4, 0),
(135, 561, '6', 4, 5, 0),
(136, 83, '2', 5, 1, 0),
(137, 83, '2', 5, 2, 0),
(138, 83, '3', 5, 3, 0),
(139, 83, '3', 5, 4, 0),
(140, 83, '3', 5, 5, 0),
(141, 313, '4', 5, 1, 0),
(142, 313, '2', 5, 2, 0),
(143, 313, '4', 5, 3, 0),
(144, 313, '4', 5, 4, 0),
(145, 313, '1', 5, 5, 0),
(146, 561, '5', 5, 1, 0),
(147, 561, '2', 5, 2, 0),
(148, 561, '1', 5, 3, 0),
(149, 561, '1', 5, 4, 0),
(150, 561, '6', 5, 5, 0),
(151, 83, '2', 6, 1, 0),
(152, 83, '2', 6, 2, 0),
(153, 83, '3', 6, 3, 0),
(154, 83, '3', 6, 4, 0),
(155, 83, '3', 6, 5, 0),
(156, 313, '4', 6, 1, 0),
(157, 313, '2', 6, 2, 0),
(158, 313, '4', 6, 3, 0),
(159, 313, '4', 6, 4, 0),
(160, 313, '1', 6, 5, 0),
(161, 561, '5', 6, 1, 0),
(162, 561, '2', 6, 2, 0),
(163, 561, '1', 6, 3, 0),
(164, 561, '1', 6, 4, 0),
(165, 561, '6', 6, 5, 0),
(166, 83, '2', 7, 1, 0),
(167, 83, '2', 7, 2, 0),
(168, 83, '3', 7, 3, 0),
(169, 83, '3', 7, 4, 0),
(170, 83, '3', 7, 5, 0),
(171, 313, '4', 7, 1, 0),
(172, 313, '2', 7, 2, 0),
(173, 313, '4', 7, 3, 0),
(174, 313, '4', 7, 4, 0),
(175, 313, '1', 7, 5, 0),
(176, 561, '5', 7, 1, 0),
(177, 561, '2', 7, 2, 0),
(178, 561, '1', 7, 3, 0),
(179, 561, '1', 7, 4, 0),
(180, 561, '6', 7, 5, 0),
(181, 83, '2', 8, 1, 0),
(182, 83, '2', 8, 2, 0),
(183, 83, '3', 8, 3, 0),
(184, 83, '3', 8, 4, 0),
(185, 83, '3', 8, 5, 0),
(186, 313, '4', 8, 1, 0),
(187, 313, '2', 8, 2, 0),
(188, 313, '4', 8, 3, 0),
(189, 313, '4', 8, 4, 0),
(190, 313, '1', 8, 5, 0),
(191, 561, '5', 8, 1, 0),
(192, 561, '2', 8, 2, 0),
(193, 561, '1', 8, 3, 0),
(194, 561, '1', 8, 4, 0),
(195, 561, '6', 8, 5, 0),
(196, 83, '2', 9, 1, 0),
(197, 83, '2', 9, 2, 0),
(198, 83, '3', 9, 3, 0),
(199, 83, '3', 9, 4, 0),
(200, 83, '3', 9, 5, 0),
(201, 313, '4', 9, 1, 0),
(202, 313, '2', 9, 2, 0),
(203, 313, '4', 9, 3, 0),
(204, 313, '4', 9, 4, 0),
(205, 313, '1', 9, 5, 0),
(206, 561, '5', 9, 1, 0),
(207, 561, '2', 9, 2, 0),
(208, 561, '1', 9, 3, 0),
(209, 561, '1', 9, 4, 0),
(210, 561, '6', 9, 5, 0),
(211, 83, '2', 10, 1, 0),
(212, 83, '2', 10, 2, 0),
(213, 83, '3', 10, 3, 0),
(214, 83, '3', 10, 4, 0),
(215, 83, '3', 10, 5, 0),
(216, 313, '4', 10, 1, 0),
(217, 313, '2', 10, 2, 0),
(218, 313, '4', 10, 3, 0),
(219, 313, '4', 10, 4, 0),
(220, 313, '1', 10, 5, 0),
(221, 561, '5', 10, 1, 0),
(222, 561, '2', 10, 2, 0),
(223, 561, '1', 10, 3, 0),
(224, 561, '1', 10, 4, 0),
(225, 561, '6', 10, 5, 0),
(226, 83, '2', 11, 1, 0),
(227, 83, '2', 11, 2, 0),
(228, 83, '3', 11, 3, 0),
(229, 83, '3', 11, 4, 0),
(230, 83, '3', 11, 5, 0),
(231, 313, '4', 11, 1, 0),
(232, 313, '2', 11, 2, 0),
(233, 313, '4', 11, 3, 0),
(234, 313, '4', 11, 4, 0),
(235, 313, '1', 11, 5, 0),
(236, 561, '5', 11, 1, 0),
(237, 561, '2', 11, 2, 0),
(238, 561, '1', 11, 3, 0),
(239, 561, '1', 11, 4, 0),
(240, 561, '6', 11, 5, 0),
(241, 83, '2', 12, 1, 0),
(242, 83, '2', 12, 2, 0),
(243, 83, '3', 12, 3, 0),
(244, 83, '3', 12, 4, 0),
(245, 83, '3', 12, 5, 0),
(246, 313, '4', 12, 1, 0),
(247, 313, '2', 12, 2, 0),
(248, 313, '4', 12, 3, 0),
(249, 313, '4', 12, 4, 0),
(250, 313, '1', 12, 5, 0),
(251, 561, '5', 12, 1, 0),
(252, 561, '2', 12, 2, 0),
(253, 561, '1', 12, 3, 0),
(254, 561, '1', 12, 4, 0),
(255, 561, '6', 12, 5, 0),
(256, 83, '2', 13, 1, 0),
(257, 83, '2', 13, 2, 0),
(258, 83, '3', 13, 3, 0),
(259, 83, '3', 13, 4, 0),
(260, 83, '3', 13, 5, 0),
(261, 313, '4', 13, 1, 0),
(262, 313, '2', 13, 2, 0),
(263, 313, '4', 13, 3, 0),
(264, 313, '4', 13, 4, 0),
(265, 313, '1', 13, 5, 0),
(266, 561, '5', 13, 1, 0),
(267, 561, '2', 13, 2, 0),
(268, 561, '1', 13, 3, 0),
(269, 561, '1', 13, 4, 0),
(270, 561, '6', 13, 5, 0),
(271, 83, '2', 14, 1, 0),
(272, 83, '2', 14, 2, 0),
(273, 83, '3', 14, 3, 0),
(274, 83, '3', 14, 4, 0),
(275, 83, '3', 14, 5, 0),
(276, 313, '4', 14, 1, 0),
(277, 313, '2', 14, 2, 0),
(278, 313, '4', 14, 3, 0),
(279, 313, '4', 14, 4, 0),
(280, 313, '1', 14, 5, 0),
(281, 561, '5', 14, 1, 0),
(282, 561, '2', 14, 2, 0),
(283, 561, '1', 14, 3, 0),
(284, 561, '1', 14, 4, 0),
(285, 561, '6', 14, 5, 0),
(286, 83, '2', 15, 1, 0),
(287, 83, '2', 15, 2, 0),
(288, 83, '3', 15, 3, 0),
(289, 83, '3', 15, 4, 0),
(290, 83, '3', 15, 5, 0),
(291, 313, '4', 15, 1, 0),
(292, 313, '2', 15, 2, 0),
(293, 313, '4', 15, 3, 0),
(294, 313, '4', 15, 4, 0),
(295, 313, '1', 15, 5, 0),
(296, 561, '5', 15, 1, 0),
(297, 561, '2', 15, 2, 0),
(298, 561, '1', 15, 3, 0),
(299, 561, '1', 15, 4, 0),
(300, 561, '6', 15, 5, 0),
(301, 1684, '100', 16, 1, 0),
(302, 1684, '200', 16, 2, 0),
(303, 1684, '300', 16, 3, 0),
(304, 1684, '400', 16, 4, 0);

-- --------------------------------------------------------

--
-- Table structure for table `phic_table`
--

CREATE TABLE `phic_table` (
  `id` int(11) NOT NULL,
  `year` varchar(255) NOT NULL,
  `prem_rate` float(10,2) NOT NULL COMMENT '%'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `phic_table`
--

INSERT INTO `phic_table` (`id`, `year`, `prem_rate`) VALUES
(1, '2021', 3.50),
(2, '2022', 4.00),
(3, '2023', 4.50),
(4, '2024', 5.00),
(5, '2025', 5.00);

-- --------------------------------------------------------

--
-- Table structure for table `salary_logs`
--

CREATE TABLE `salary_logs` (
  `id` int(11) NOT NULL,
  `pi_id` int(11) NOT NULL,
  `logs` varchar(255) NOT NULL,
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salary_logs`
--

INSERT INTO `salary_logs` (`id`, `pi_id`, `logs`, `updated_at`, `created_at`) VALUES
(1, 1, 'Added salary -> 22999 to 1', '2019-09-03 07:40:07', '2019-09-03 07:40:07'),
(2, 1, 'Removed current salary', '2019-09-03 07:40:25', '2019-09-03 07:40:25'),
(3, 1, 'Added salary -> 23000 to 1', '2019-09-03 07:40:43', '2019-09-03 07:40:43'),
(4, 1, 'Removed current salary', '2019-09-03 07:42:52', '2019-09-03 07:42:52'),
(5, 1, 'Added salary -> 30000 to 1', '2019-09-03 07:43:00', '2019-09-03 07:43:00'),
(6, 2, 'Added salary -> 11,488.00 to 2', '2019-09-03 07:49:13', '2019-09-03 07:49:13'),
(7, 2, 'Removed current salary', '2019-09-03 08:41:07', '2019-09-03 08:41:07'),
(8, 2, 'Added salary -> 11,400.00 to 2', '2019-09-03 08:41:14', '2019-09-03 08:41:14'),
(9, 3, 'Added salary -> 380.00 to 3', '2019-09-03 08:45:41', '2019-09-03 08:45:41'),
(10, 8, 'Added salary -> 10008 to 8', '2019-09-03 08:48:40', '2019-09-03 08:48:40'),
(11, 2, 'Removed current salary', '2019-09-03 08:50:29', '2019-09-03 08:50:29'),
(12, 2, 'Added salary -> 11,488.00 to 2', '2019-09-03 08:50:31', '2019-09-03 08:50:31'),
(13, 2, 'Removed current salary', '2019-09-03 08:51:14', '2019-09-03 08:51:14'),
(14, 2, 'Added salary -> 11,488.00 to 2', '2019-09-03 08:52:25', '2019-09-03 08:52:25'),
(15, 2, 'Removed current salary', '2019-09-03 08:52:28', '2019-09-03 08:52:28'),
(16, 2, 'Added salary -> 11,488.00 to 2', '2019-09-03 08:52:30', '2019-09-03 08:52:30'),
(17, 2, 'Removed current salary', '2019-09-04 00:18:29', '2019-09-04 00:18:29'),
(18, 1, 'Removed current salary', '2019-09-04 00:19:26', '2019-09-04 00:19:26'),
(19, 1, 'Added salary -> 22999.23 to 1', '2019-09-04 00:21:34', '2019-09-04 00:21:34'),
(20, 1, 'Removed current salary', '2019-09-04 00:21:54', '2019-09-04 00:21:54'),
(21, 1, 'Added salary -> 22999.50 to 1', '2019-09-04 00:25:27', '2019-09-04 00:25:27'),
(22, 1684, 'Added salary -> 20961 to 1684', '2019-09-04 00:28:03', '2019-09-04 00:28:03'),
(23, 1684, 'Removed current salary', '2019-09-04 01:05:41', '2019-09-04 01:05:41'),
(24, 1684, 'Added salary -> 20961 to 1684', '2019-09-04 01:06:14', '2019-09-04 01:06:14'),
(25, 1684, 'Removed current salary', '2019-09-11 00:19:55', '2019-09-11 00:19:55'),
(26, 1684, 'Added salary -> 20961 to 1684', '2019-09-11 00:20:08', '2019-09-11 00:20:08'),
(27, 1013, 'Added salary -> 24510 to 1013', '2019-09-11 01:01:56', '2019-09-11 01:01:56'),
(28, 786, 'Added salary -> 7708 to 786', '2019-09-20 05:47:39', '2019-09-20 05:47:39'),
(29, 1372, 'Added salary -> 20961 to 1372', '2019-09-20 06:45:42', '2019-09-20 06:45:42'),
(30, 1375, 'Added salary -> 15000 to 1375', '2019-09-20 06:46:55', '2019-09-20 06:46:55'),
(31, 546, 'Added salary -> 17059 to 546', '2019-09-20 06:47:46', '2019-09-20 06:47:46'),
(32, 307, 'Added salary -> 123393 to 307', '2019-09-20 06:47:57', '2019-09-20 06:47:57'),
(33, 307, 'Added salary -> 123393 to 307', '2019-09-20 08:01:34', '2019-09-20 08:01:34'),
(34, 1, 'Added salary -> 16200 to 1', '2019-09-20 08:31:01', '2019-09-20 08:31:01'),
(35, 488, 'Added salary -> 21561 to 488', '2019-10-01 07:26:32', '2019-10-01 07:26:32'),
(36, 1750, 'Added salary -> 7700 to 1750', '2019-10-01 07:26:50', '2019-10-01 07:26:50'),
(37, 1372, 'Removed current salary', '2019-10-08 03:16:33', '2019-10-08 03:16:33'),
(38, 1372, 'Added salary -> 20961 to 1372', '2019-10-08 03:23:39', '2019-10-08 03:23:39'),
(39, 1372, 'Removed current salary', '2019-10-08 03:23:54', '2019-10-08 03:23:54'),
(40, 1372, 'Added salary -> 20741 to 1372', '2019-10-08 03:25:31', '2019-10-08 03:25:31'),
(41, 1372, 'Removed current salary', '2019-10-08 03:26:10', '2019-10-08 03:26:10'),
(42, 1372, 'Added salary -> 20742 to 1372', '2019-10-08 03:26:51', '2019-10-08 03:26:51'),
(43, 1682, 'Added salary -> 20961.51 to 1682', '2019-10-08 08:17:32', '2019-10-08 08:17:32'),
(44, 1682, 'Removed current salary', '2019-10-08 08:22:05', '2019-10-08 08:22:05'),
(45, 1682, 'Added salary -> 20961.54 to 1682', '2019-10-08 08:22:10', '2019-10-08 08:22:10'),
(46, 1684, 'Added salary -> 20961 to 1684', '2019-10-11 08:49:51', '2019-10-11 08:49:51'),
(47, 1, 'Removed current salary', '2019-10-24 01:03:44', '2019-10-24 01:03:44'),
(48, 1, 'Added salary -> 15000 to 1', '2019-10-24 01:03:58', '2019-10-24 01:03:58'),
(49, 1, 'Removed current salary', '2019-11-19 01:30:50', '2019-11-19 01:30:50'),
(50, 1, 'Added salary -> 25000 to 1', '2019-11-19 01:31:00', '2019-11-19 01:31:00'),
(51, 1684, 'Removed current salary', '2020-02-27 01:00:12', '2020-02-27 01:00:12'),
(52, 1684, 'Added salary -> 20754 to 1684', '2020-02-27 01:00:18', '2020-02-27 01:00:18'),
(53, 1682, 'Removed current salary', '2020-02-27 08:37:28', '2020-02-27 08:37:28'),
(54, 1682, 'Added salary -> 20754 to 1682', '2020-02-27 08:37:50', '2020-02-27 08:37:50'),
(55, 1681, 'Added salary -> 20754 to 1681', '2020-03-13 06:43:13', '2020-03-13 06:43:13'),
(56, 1, 'Removed current salary', '2020-03-13 08:14:11', '2020-03-13 08:14:11'),
(57, 1, 'Added salary -> 20961 to 1', '2020-03-13 08:14:29', '2020-03-13 08:14:29'),
(58, 327, 'Added salary -> 8118 to 327', '2020-05-21 12:53:18', '2020-05-21 12:53:18'),
(59, 1684, 'Removed current salary', '2021-05-26 06:21:15', '2021-05-26 06:21:15'),
(60, 1684, 'Added salary -> 20749 to 1684', '2021-05-26 06:21:21', '2021-05-26 06:21:21');

-- --------------------------------------------------------

--
-- Table structure for table `salary_settings`
--

CREATE TABLE `salary_settings` (
  `id` int(11) NOT NULL,
  `fund_id` int(11) NOT NULL,
  `salary_source` varchar(255) NOT NULL COMMENT 'base, gross',
  `payment_sched` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `salary_settings`
--

INSERT INTO `salary_settings` (`id`, `fund_id`, `salary_source`, `payment_sched`) VALUES
(1, 2, 'base', 1),
(2, 1, 'base', 2),
(3, 4, 'base', 3),
(4, 3, 'gross', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sss_perm`
--

CREATE TABLE `sss_perm` (
  `id` int(11) NOT NULL,
  `from_range` float(10,2) NOT NULL,
  `to_range` float(10,2) NOT NULL,
  `er` float(10,2) NOT NULL,
  `ee` float(10,2) NOT NULL,
  `ec` float(10,2) NOT NULL,
  `total` float(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sss_perm`
--

INSERT INTO `sss_perm` (`id`, `from_range`, `to_range`, `er`, `ee`, `ec`, `total`) VALUES
(1, 0.00, 3249.99, 210.00, 200.00, 10.00, 410.00),
(2, 3250.00, 3749.99, 307.50, 157.50, 10.00, 465.00),
(3, 3750.00, 4249.99, 350.00, 180.00, 10.00, 530.00),
(4, 4250.00, 4749.99, 392.50, 202.50, 10.00, 595.00),
(5, 4750.00, 5249.99, 435.00, 225.00, 10.00, 660.00),
(6, 5250.00, 5749.99, 477.50, 247.50, 10.00, 725.00),
(7, 5750.00, 6249.99, 520.00, 270.00, 10.00, 790.00),
(8, 6250.00, 6749.99, 562.50, 292.50, 10.00, 855.00),
(9, 6750.00, 7249.99, 605.00, 315.00, 10.00, 920.00),
(10, 7250.00, 7749.99, 647.50, 337.50, 10.00, 985.00),
(11, 7750.00, 8249.99, 690.00, 360.00, 10.00, 1050.00),
(12, 8250.00, 8749.99, 732.50, 382.50, 10.00, 1115.00),
(13, 8750.00, 9249.99, 775.00, 405.00, 10.00, 1180.00),
(14, 9250.00, 9749.99, 817.50, 427.50, 10.00, 1245.00),
(15, 9750.00, 10249.99, 860.00, 450.00, 10.00, 1310.00),
(16, 10250.00, 10749.99, 902.50, 472.50, 10.00, 1375.00),
(17, 10750.00, 11249.99, 945.00, 495.00, 10.00, 1440.00),
(18, 11250.00, 11749.99, 987.50, 517.50, 10.00, 1505.00),
(19, 11750.00, 12249.99, 1030.00, 540.00, 10.00, 1570.00),
(20, 12250.00, 12749.99, 1072.50, 562.50, 10.00, 1635.00),
(21, 12750.00, 13249.99, 1115.00, 585.00, 10.00, 1700.00),
(22, 13250.00, 13749.99, 1157.50, 607.50, 10.00, 1765.00),
(23, 13750.00, 14249.99, 1200.00, 630.00, 10.00, 1830.00),
(24, 14250.00, 14749.99, 1242.50, 652.50, 10.00, 1895.00),
(25, 14750.00, 15249.99, 1305.00, 675.00, 30.00, 1980.00),
(26, 15250.00, 15749.99, 1347.50, 697.50, 30.00, 2045.00),
(27, 15750.00, 16249.99, 1390.00, 720.00, 30.00, 2110.00),
(28, 16250.00, 16749.99, 1432.50, 742.50, 30.00, 2175.00),
(29, 16750.00, 17249.99, 1475.00, 765.00, 30.00, 2240.00),
(30, 17250.00, 17749.99, 1517.50, 787.50, 30.00, 2305.00),
(31, 17750.00, 18249.99, 1560.00, 810.00, 30.00, 2370.00),
(32, 18250.00, 18749.99, 1602.50, 832.50, 30.00, 2435.00),
(33, 18750.00, 19249.99, 1645.00, 855.00, 30.00, 2500.00),
(34, 19250.00, 19749.99, 1687.50, 877.50, 30.00, 2565.00),
(35, 19750.00, 20249.99, 1730.00, 900.00, 30.00, 2630.00),
(36, 20250.00, 20749.99, 1772.50, 922.50, 30.00, 2695.00),
(37, 20750.00, 21249.99, 1815.00, 945.00, 30.00, 2760.00),
(38, 21250.00, 21749.99, 1857.50, 967.50, 30.00, 2825.00),
(39, 21750.00, 22249.99, 1900.00, 990.00, 30.00, 2890.00),
(40, 22250.00, 22749.99, 1942.50, 1012.50, 30.00, 2955.00),
(41, 22750.00, 23249.99, 1985.00, 1035.00, 30.00, 3020.00),
(42, 23250.00, 23749.99, 2027.50, 1057.50, 30.00, 3085.00),
(43, 23750.00, 24249.99, 2070.00, 1080.00, 30.00, 3150.00),
(44, 24250.00, 24749.99, 2112.50, 1102.50, 30.00, 3215.00),
(45, 24750.00, 99999.99, 2155.00, 1125.00, 30.00, 3280.00);

-- --------------------------------------------------------

--
-- Table structure for table `sss_self_employed`
--

CREATE TABLE `sss_self_employed` (
  `id` int(11) NOT NULL,
  `from_range` float(10,2) NOT NULL,
  `to_range` float(10,2) NOT NULL,
  `er` float(10,2) NOT NULL,
  `ee` float(10,2) NOT NULL,
  `ec` float(10,2) NOT NULL,
  `mrf` float(10,2) NOT NULL,
  `total` float(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sss_self_employed`
--

INSERT INTO `sss_self_employed` (`id`, `from_range`, `to_range`, `er`, `ee`, `ec`, `mrf`, `total`) VALUES
(1, 0.00, 3249.00, 390.00, 0.00, 10.00, 10.00, 400.00),
(2, 3250.00, 3749.99, 455.00, 0.00, 10.00, 20.00, 465.00),
(3, 3750.00, 4249.99, 520.00, 0.00, 10.00, 30.00, 530.00),
(4, 4250.00, 4749.99, 585.00, 0.00, 10.00, 0.00, 595.00),
(5, 4750.00, 5249.99, 649.00, 0.00, 10.00, 0.00, 659.00),
(6, 5250.00, 5749.99, 715.00, 0.00, 10.00, 0.00, 725.00),
(7, 5750.00, 6249.99, 845.00, 0.00, 10.00, 0.00, 855.00),
(8, 6250.00, 6749.99, 910.00, 0.00, 10.00, 0.00, 920.00),
(9, 6750.00, 7249.99, 975.00, 0.00, 10.00, 0.00, 985.00),
(10, 7250.00, 7749.99, 1040.00, 0.00, 10.00, 0.00, 1050.00),
(11, 7750.00, 8249.99, 1105.00, 0.00, 10.00, 0.00, 1115.00),
(12, 8250.00, 8749.99, 1170.00, 0.00, 10.00, 0.00, 1180.00),
(13, 8750.00, 9249.99, 1235.00, 0.00, 10.00, 0.00, 1245.00),
(14, 9250.00, 9749.99, 1300.00, 0.00, 10.00, 0.00, 1310.00),
(15, 9750.00, 10249.99, 1365.00, 0.00, 10.00, 0.00, 1375.00),
(16, 10250.00, 10749.99, 1430.00, 0.00, 10.00, 0.00, 1440.00),
(17, 10750.00, 11249.99, 1495.00, 0.00, 10.00, 0.00, 1505.00),
(18, 11250.00, 11749.99, 1560.00, 0.00, 10.00, 0.00, 1570.00),
(19, 11750.00, 12249.99, 1625.00, 0.00, 10.00, 0.00, 1635.00),
(20, 12250.00, 12749.99, 1690.00, 0.00, 10.00, 0.00, 1700.00),
(21, 12750.00, 13249.99, 1755.00, 0.00, 10.00, 0.00, 1765.00),
(22, 13250.00, 13749.99, 1820.00, 0.00, 10.00, 0.00, 1830.00),
(23, 13750.00, 14249.99, 1885.00, 0.00, 10.00, 0.00, 1895.00),
(24, 14250.00, 14749.99, 1950.00, 0.00, 10.00, 0.00, 1960.00),
(25, 14750.00, 15249.99, 2015.00, 0.00, 30.00, 0.00, 2045.00),
(26, 15250.00, 15749.99, 2080.00, 0.00, 30.00, 0.00, 2110.00),
(27, 15750.00, 16249.99, 2145.00, 0.00, 30.00, 0.00, 2175.00),
(28, 16250.00, 16749.99, 2210.00, 0.00, 30.00, 0.00, 2240.00),
(29, 16750.00, 17249.99, 2275.00, 0.00, 30.00, 0.00, 2305.00),
(30, 17250.00, 17749.99, 2340.00, 0.00, 30.00, 0.00, 2370.00),
(31, 17750.00, 18249.99, 2405.00, 0.00, 30.00, 0.00, 2435.00),
(32, 18250.00, 18749.99, 2470.00, 0.00, 30.00, 0.00, 2500.00),
(33, 18750.00, 19249.99, 2535.00, 0.00, 30.00, 0.00, 2565.00),
(34, 19250.00, 19749.99, 2600.00, 0.00, 30.00, 0.00, 2630.00),
(35, 19750.00, 20249.99, 2600.00, 0.00, 30.00, 0.00, 2630.00),
(36, 20250.00, 20749.99, 2600.00, 0.00, 30.00, 65.00, 2695.00),
(37, 20750.00, 21249.99, 2600.00, 0.00, 30.00, 130.00, 2760.00),
(38, 21250.00, 21749.99, 2600.00, 0.00, 30.00, 195.00, 2825.00),
(39, 21750.00, 22249.99, 2600.00, 0.00, 30.00, 260.00, 2890.00),
(40, 22250.00, 22749.99, 2600.00, 0.00, 30.00, 325.00, 2955.00),
(41, 22750.00, 23249.99, 2600.00, 0.00, 30.00, 390.00, 3020.00),
(42, 23250.00, 23749.99, 2600.00, 0.00, 30.00, 455.00, 3085.00),
(43, 23750.00, 24249.99, 2600.00, 0.00, 30.00, 520.00, 3150.00),
(44, 24250.00, 24749.99, 2600.00, 0.00, 30.00, 585.00, 3215.00),
(45, 24750.00, 99999.99, 2600.00, 0.00, 30.00, 650.00, 3280.00);

-- --------------------------------------------------------

--
-- Table structure for table `system_logs`
--

CREATE TABLE `system_logs` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `logs` varchar(255) NOT NULL,
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `system_logs`
--

INSERT INTO `system_logs` (`id`, `user_id`, `logs`, `updated_at`, `created_at`) VALUES
(1, 1, 'Added salary -> 22999 to 1', '2019-09-03 07:40:07', '2019-09-03 07:40:07'),
(2, 1, 'Removed current salary', '2019-09-03 07:40:25', '2019-09-03 07:40:25'),
(3, 1, 'Added salary -> 23000 to 1', '2019-09-03 07:40:43', '2019-09-03 07:40:43'),
(4, 1, 'Removed current salary', '2019-09-03 07:42:52', '2019-09-03 07:42:52'),
(5, 1, 'Added salary -> 30000 to 1', '2019-09-03 07:43:00', '2019-09-03 07:43:00'),
(6, 2, 'Added salary -> 11,488.00 to 2', '2019-09-03 07:49:13', '2019-09-03 07:49:13'),
(7, 2, 'Removed current salary', '2019-09-03 08:41:07', '2019-09-03 08:41:07'),
(8, 2, 'Added salary -> 11,400.00 to 2', '2019-09-03 08:41:14', '2019-09-03 08:41:14'),
(9, 3, 'Added salary -> 380.00 to 3', '2019-09-03 08:45:41', '2019-09-03 08:45:41'),
(10, 8, 'Added salary -> 10008 to 8', '2019-09-03 08:48:40', '2019-09-03 08:48:40'),
(11, 2, 'Removed current salary', '2019-09-03 08:50:29', '2019-09-03 08:50:29'),
(12, 2, 'Added salary -> 11,488.00 to 2', '2019-09-03 08:50:31', '2019-09-03 08:50:31'),
(13, 2, 'Removed current salary', '2019-09-03 08:51:14', '2019-09-03 08:51:14'),
(14, 2, 'Added salary -> 11,488.00 to 2', '2019-09-03 08:52:25', '2019-09-03 08:52:25'),
(15, 2, 'Removed current salary', '2019-09-03 08:52:28', '2019-09-03 08:52:28'),
(16, 2, 'Added salary -> 11,488.00 to 2', '2019-09-03 08:52:30', '2019-09-03 08:52:30'),
(17, 2, 'Removed current salary', '2019-09-04 00:18:29', '2019-09-04 00:18:29'),
(18, 1, 'Removed current salary', '2019-09-04 00:19:26', '2019-09-04 00:19:26'),
(19, 1, 'Added salary -> 22999.23 to 1', '2019-09-04 00:21:34', '2019-09-04 00:21:34'),
(20, 1, 'Removed current salary', '2019-09-04 00:21:54', '2019-09-04 00:21:54'),
(21, 1, 'Added salary -> 22999.50 to 1', '2019-09-04 00:25:27', '2019-09-04 00:25:27'),
(22, 1684, 'Added salary -> 20961 to 1684', '2019-09-04 00:28:03', '2019-09-04 00:28:03'),
(23, 1684, 'Removed current salary', '2019-09-04 01:05:41', '2019-09-04 01:05:41'),
(24, 1684, 'Added salary -> 20961 to 1684', '2019-09-04 01:06:14', '2019-09-04 01:06:14'),
(25, 1684, 'Removed current salary', '2019-09-11 00:19:55', '2019-09-11 00:19:55'),
(26, 1684, 'Added salary -> 20961 to 1684', '2019-09-11 00:20:08', '2019-09-11 00:20:08'),
(27, 1013, 'Added salary -> 24510 to 1013', '2019-09-11 01:01:56', '2019-09-11 01:01:56'),
(28, 786, 'Added salary -> 7708 to 786', '2019-09-20 05:47:39', '2019-09-20 05:47:39'),
(29, 1372, 'Added salary -> 20961 to 1372', '2019-09-20 06:45:42', '2019-09-20 06:45:42'),
(30, 1375, 'Added salary -> 15000 to 1375', '2019-09-20 06:46:55', '2019-09-20 06:46:55'),
(31, 546, 'Added salary -> 17059 to 546', '2019-09-20 06:47:46', '2019-09-20 06:47:46'),
(32, 307, 'Added salary -> 123393 to 307', '2019-09-20 06:47:57', '2019-09-20 06:47:57'),
(33, 307, 'Added salary -> 123393 to 307', '2019-09-20 08:01:34', '2019-09-20 08:01:34'),
(34, 1, 'Added salary -> 16200 to 1', '2019-09-20 08:31:01', '2019-09-20 08:31:01'),
(35, 488, 'Added salary -> 21561 to 488', '2019-10-01 07:26:32', '2019-10-01 07:26:32'),
(36, 1750, 'Added salary -> 7700 to 1750', '2019-10-01 07:26:50', '2019-10-01 07:26:50'),
(37, 1372, 'Removed current salary', '2019-10-08 03:16:33', '2019-10-08 03:16:33'),
(38, 1372, 'Added salary -> 20961 to 1372', '2019-10-08 03:23:39', '2019-10-08 03:23:39'),
(39, 1372, 'Removed current salary', '2019-10-08 03:23:54', '2019-10-08 03:23:54'),
(40, 1372, 'Added salary -> 20741 to 1372', '2019-10-08 03:25:31', '2019-10-08 03:25:31'),
(41, 1372, 'Removed current salary', '2019-10-08 03:26:10', '2019-10-08 03:26:10'),
(42, 1372, 'Added salary -> 20742 to 1372', '2019-10-08 03:26:51', '2019-10-08 03:26:51'),
(43, 1682, 'Added salary -> 20961.51 to 1682', '2019-10-08 08:17:32', '2019-10-08 08:17:32'),
(44, 1682, 'Removed current salary', '2019-10-08 08:22:05', '2019-10-08 08:22:05'),
(45, 1682, 'Added salary -> 20961.54 to 1682', '2019-10-08 08:22:10', '2019-10-08 08:22:10'),
(46, 1684, 'Added salary -> 20961 to 1684', '2019-10-11 08:49:51', '2019-10-11 08:49:51'),
(47, 1, 'Removed current salary', '2019-10-24 01:03:44', '2019-10-24 01:03:44'),
(48, 1, 'Added salary -> 15000 to 1', '2019-10-24 01:03:58', '2019-10-24 01:03:58'),
(49, 1, 'Removed current salary', '2019-11-19 01:30:50', '2019-11-19 01:30:50'),
(50, 1, 'Added salary -> 25000 to 1', '2019-11-19 01:31:00', '2019-11-19 01:31:00'),
(51, 1684, 'Removed current salary', '2020-02-27 01:00:12', '2020-02-27 01:00:12'),
(52, 1684, 'Added salary -> 20754 to 1684', '2020-02-27 01:00:18', '2020-02-27 01:00:18'),
(53, 1682, 'Removed current salary', '2020-02-27 08:37:28', '2020-02-27 08:37:28'),
(54, 1682, 'Added salary -> 20754 to 1682', '2020-02-27 08:37:50', '2020-02-27 08:37:50'),
(55, 1681, 'Added salary -> 20754 to 1681', '2020-03-13 06:43:13', '2020-03-13 06:43:13'),
(56, 1, 'Removed current salary', '2020-03-13 08:14:11', '2020-03-13 08:14:11'),
(57, 1, 'Added salary -> 20961 to 1', '2020-03-13 08:14:29', '2020-03-13 08:14:29'),
(58, 327, 'Added salary -> 8118 to 327', '2020-05-21 12:53:18', '2020-05-21 12:53:18'),
(59, 1372, 'Removed current salary', '2020-07-10 06:50:06', '2020-07-10 06:50:06'),
(60, 1372, 'Added salary -> 20961 to 1372', '2020-07-10 06:50:16', '2020-07-10 06:50:16'),
(61, 1, 'Removed current salary', '2021-02-01 06:58:57', '2021-02-01 06:58:57');

-- --------------------------------------------------------

--
-- Table structure for table `tax_type`
--

CREATE TABLE `tax_type` (
  `id` int(11) NOT NULL,
  `tax` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tax_type`
--

INSERT INTO `tax_type` (`id`, `tax`) VALUES
(1, 3),
(2, 5);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `acc_type` int(11) NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email_verified_at`, `acc_type`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Agngarayngay, Zenaida Marcos', 'acctg', NULL, 1, '$2y$10$D74/ZKSMT3C0VQD2gjOvvuti1WhFmux8mS0X2Og3mLv9YEoWJLcHm', 'otCk0txf6Txku7sYKIieD4Jix9dx4RLjJS6D8tvUJmWDWvvMQkpfLS1v0CSC', '2019-05-27 16:46:30', '2019-05-27 16:46:30'),
(2, 'Accounting 2', 'acctg2', NULL, 1, '$2y$10$edjm1oiguJDah.kb3lDODON9FUwDERusKCbMr2eidakS4Z8WYKInO', NULL, '2019-05-28 00:25:21', '2019-05-28 00:25:21'),
(3, 'Accounting 3', 'acctg3', NULL, 1, '$2y$10$Q6VDYQ43fcIzxLmJNCBjZeDtlBx4V9rHwU1ChbzmQ0DXys4.6Cp/6', NULL, '2019-07-02 03:12:40', '2019-07-02 03:12:40'),
(4, 'Administrator', 'admin', NULL, 0, '$2y$10$DcShjAJ1BiPW85FTTByNIe0B4XxJuxzs9bR7l60P9lljlwZU0Y8YC', NULL, '2019-10-23 16:50:12', '2019-10-23 16:50:12'),
(5, 'Accounting 4', 'acctg4', NULL, 1, '$2y$10$IAM59I8oueZW7khVIg95weYyjkuxs3jEsO8Z6rT8qkJ2FKA3plNLu', NULL, '2019-10-28 18:11:19', '2019-10-28 18:11:19'),
(6, 'Accounting 5', 'acctg5', NULL, 1, '$2y$10$U5SblOI4tJOeXyUAVNq6C.IKRhZqzyYXMBjecVzuAsUVTaeXsmo.y', NULL, '2019-10-28 18:12:16', '2019-10-28 18:12:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee_contribution`
--
ALTER TABLE `employee_contribution`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee_monthly_deduction_addition`
--
ALTER TABLE `employee_monthly_deduction_addition`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee_salary`
--
ALTER TABLE `employee_salary`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `funds`
--
ALTER TABLE `funds`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fund_members`
--
ALTER TABLE `fund_members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gsis_prem`
--
ALTER TABLE `gsis_prem`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `insurance_settings`
--
ALTER TABLE `insurance_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `loan_amor_logs`
--
ALTER TABLE `loan_amor_logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `loan_ledger`
--
ALTER TABLE `loan_ledger`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `misc_deductions`
--
ALTER TABLE `misc_deductions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `month`
--
ALTER TABLE `month`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `organizations`
--
ALTER TABLE `organizations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `org_deduct_addition`
--
ALTER TABLE `org_deduct_addition`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `org_members`
--
ALTER TABLE `org_members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pagibig_table`
--
ALTER TABLE `pagibig_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment_schedules`
--
ALTER TABLE `payment_schedules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payroll`
--
ALTER TABLE `payroll`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payroll_details`
--
ALTER TABLE `payroll_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payroll_details_ext`
--
ALTER TABLE `payroll_details_ext`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payroll_misc_deductions`
--
ALTER TABLE `payroll_misc_deductions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payroll_misc_deductions_employee`
--
ALTER TABLE `payroll_misc_deductions_employee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `phic_table`
--
ALTER TABLE `phic_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `salary_logs`
--
ALTER TABLE `salary_logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `salary_settings`
--
ALTER TABLE `salary_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sss_perm`
--
ALTER TABLE `sss_perm`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sss_self_employed`
--
ALTER TABLE `sss_self_employed`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `system_logs`
--
ALTER TABLE `system_logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tax_type`
--
ALTER TABLE `tax_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee_contribution`
--
ALTER TABLE `employee_contribution`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `employee_monthly_deduction_addition`
--
ALTER TABLE `employee_monthly_deduction_addition`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `employee_salary`
--
ALTER TABLE `employee_salary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `funds`
--
ALTER TABLE `funds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `fund_members`
--
ALTER TABLE `fund_members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `gsis_prem`
--
ALTER TABLE `gsis_prem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `insurance_settings`
--
ALTER TABLE `insurance_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `loan_amor_logs`
--
ALTER TABLE `loan_amor_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `loan_ledger`
--
ALTER TABLE `loan_ledger`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `misc_deductions`
--
ALTER TABLE `misc_deductions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `month`
--
ALTER TABLE `month`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `organizations`
--
ALTER TABLE `organizations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `org_deduct_addition`
--
ALTER TABLE `org_deduct_addition`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `org_members`
--
ALTER TABLE `org_members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pagibig_table`
--
ALTER TABLE `pagibig_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `payment_schedules`
--
ALTER TABLE `payment_schedules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `payroll`
--
ALTER TABLE `payroll`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `payroll_details`
--
ALTER TABLE `payroll_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payroll_details_ext`
--
ALTER TABLE `payroll_details_ext`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payroll_misc_deductions`
--
ALTER TABLE `payroll_misc_deductions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `payroll_misc_deductions_employee`
--
ALTER TABLE `payroll_misc_deductions_employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=305;

--
-- AUTO_INCREMENT for table `phic_table`
--
ALTER TABLE `phic_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `salary_logs`
--
ALTER TABLE `salary_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `salary_settings`
--
ALTER TABLE `salary_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sss_perm`
--
ALTER TABLE `sss_perm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `sss_self_employed`
--
ALTER TABLE `sss_self_employed`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `system_logs`
--
ALTER TABLE `system_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `tax_type`
--
ALTER TABLE `tax_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
