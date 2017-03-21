-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-03-2017 a las 17:43:09
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 7.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crud`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `monitores`
--

CREATE TABLE `monitores` (
  `id` int(11) NOT NULL,
  `cedula` varchar(50) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `area` varchar(100) NOT NULL,
  `semestre` int(2) NOT NULL,
  `descripcion` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `monitores`
--

INSERT INTO `monitores` (`id`, `cedula`, `nombre`, `apellidos`, `area`, `semestre`, `descripcion`) VALUES
(1, '12345', 'daniel', 'gutierrez', 'sistemas', 7, 'estudiante'),
(2, '21341232', 'leonardo', 'torrado', 'sistemas', 8, 'estudiante'),
(3, '34213213', 'gissell', 'peÃ±a', 'psicologia', 9, 'estudiante de intercambio'),
(4, '123812736712', 'maria', 'barrios', 'medicina', 8, 'estudiante'),
(6, '1140885609', 'eduardo', 'carrillo', 'ingenieria ambiental', 6, 'estudiante'),
(7, '1232172681', 'carlos', 'andrade', 'psicologia', 9, 'estudiante'),
(8, '123124132133', 'juanito', 'alimaÃ±a', 'psicologia', 9, 'aplazo matricula'),
(9, '23432423243', 'daniela', 'perez', 'medicina', 9, 'estudiantes'),
(10, '9876543', 'juana', 'de arco', 'Ciencias', 8, 'monitora'),
(13, '7832482384', 'gabriel', 'suarez', 'administracion', 9, 'estudiante'),
(14, '7878988', 'juan', 'castro', 'derecho', 9, 'estudiante');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `monitores`
--
ALTER TABLE `monitores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `monitores`
--
ALTER TABLE `monitores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
