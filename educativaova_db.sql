-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 25-12-2021 a las 14:46:18
-- Versión del servidor: 8.0.17
-- Versión de PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `educativaova_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recursos`
--

CREATE TABLE `recursos` (
  `id_recurso` int(10) NOT NULL,
  `url` varchar(50) NOT NULL,
  `texto` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `recursos`
--

INSERT INTO `recursos` (`id_recurso`, `url`, `texto`) VALUES
(12, '8jYM6BKYh5g', '<div class=\"udlite-heading-xl\">\r\n <div id=\"titulo\">Acerca de este ova</div>\r\n</div>\r\n<div id=\"parrafo1\">\r\nLa computación en la nube cada vez toma más fuerza en casi todas las plataformas tecnológicas de la actualidad, en muchos sistemas de la información hacemos uso de la computación en la nube y probablemente no nos hemos dado cuenta. Las grandes industrias están a la vanguardia de la computación en la nube, Amazon Web Service (AWS) Wittig, M., & Wittig, A. (2018). Amazon web services in action. Simon and Schuster., Microsoft Azure, Oracle Cloud y Google Cloud, son un ejemplo de estas empresas que ofrecen servicios informáticos en la nube en todo el mundo.\r\n</div>\r\n <div id=\"descripcion\"> </div> '),
(13, 'UY7u2tlf8cQ', '<br><p>Hoy en día la tecnología, inmersa en la red de redes; el internet. Está involucrando cada vez más las actividades humanas; vivimos en una era de transformación digital de forma acelerada, y cada vez es un reto para los expertos poder controlar todo lo que esta sucediendo. \r\nLa informática no es la misma de hace 30 años, y la computación en la nube ha marcado una diferencia radical, que hasta ahora se ha posicionado fuertemente y sigue creciendo  a una velocidad exponencial. \r\n</p><br><p>Definición de computación en la nube \r\n</p><br><p>Significa almacenar y acceder a datos y programas a través de Internet de forma remota en lugar del disco duro local.</p> \r\n<br><div class=\"udlite-heading-xl\">Definición por parte de NIST</div> \r\n<br><p>Modelo que permite el acceso a la red a pedido, conveniente y ubico a un grupo compartido de recursos de computación configurables (por ejemplo, redes , servidores, almacenamiento, aplicaciones y servicios) que se pueden aprovisionar y liberar rápidamente con un mínimo esfuerzo de gestión o interacción del proveedor de servicios.</p> \r\n'),
(14, 'Kujf9gxZzLU', '<img src=\"./img/caracteristicas.png\">'),
(15, 'Rfl7nctpvYw', '<div class=\"udlite-heading-xl\">\r\n <div id=\"titulo\">\r\nNube Vs Datacenter\r\n</div>\r\n</div>\r\n<div id=\"parrafo1\">\r\nUn centro de datos local  es un conjunto de servidores de tu propiedad,\r\n que controlas de manera privada. La computación en la nube tradicional \r\n(a diferencia de los modelos de computación en la nube híbrida o privada)\r\n implica, esencialmente, el arrendamiento de los recursos del centro de datos \r\na un proveedor de servicios externo.\r\n</div>\r\n'),
(16, 'ZwDaipDCqHk', '<div class=\"udlite-heading-xl\">\r\n <div id=\"titulo\">\r\nEconomías de escala\r\n</div>\r\n</div>\r\n<div id=\"parrafo1\">\r\nse suman los consumos realizados por miles de usuarios.\r\n Esto te permite tener costes variables más bajos de los\r\n que tendrías con tus propios recursos, puesto que hace\r\n posible una economía de escala, que se traduce en un bajo\r\n coste por servicio consumido.\r\n\r\nCon las economías de escala, se produce un mayor beneficio por cada unidad extra que producimos.\r\nEsta reducción del coste de fabricación unitario no se da porque baje el precio de las materias\r\n primas, sino por aprovechar un material que tenemos ya comprado y en el que invertimos dinero \r\nen el pasado.\r\n\r\n\r\n</div>\r\n'),
(17, 'ZwDaipDCqHk', 'Relacionar-Economia_Escala.htm'),
(22, '8jYM6BKYh5g', ' .'),
(23, 'cYByN_-lmCQ', '\r\n<div id=\"titulo\">Aspectos que debe tener en cuenta al elegir un proveedor de IaaS\r\n</div>\r\n\r\n</div>\r\n\r\n<div id=\"parrafo1\">\r\n\r\nFlexibilidad: adquiera únicamente los elementos que necesita para su caso práctico y ajuste su capacidad en función de las necesidades empresariales.\r\nAsequibilidad: la IaaS es una opción asequible, ya que los gastos generales son bajos y no genera costos de mantenimiento. Pague solo por lo que utiliza y por la frecuencia con que lo hace, como si se tratara de la factura de un servicio público.\r\nControl: el usuario controla la infraestructura.\r\nSeguridad: trabaje con aquellos proveedores que tienen una reputación confiable y poseen los recursos necesarios para evitar y gestionar las amenazas de seguridad. Además, asegúrese de que cuentan con protocolos documentados de recuperación ante desastres para garantizar la continuidad empresarial.\r\nSistemas multiempresa: dado que los proveedores de IaaS suelen asignar recursos de infraestructura a varios clientes según sea necesario, el proveedor debe asegurarse de que no puedan acceder a los datos de los demás. El hecho de que varios clientes utilicen la infraestructura de un proveedor puede generar un desequilibrio conocido como vecino molesto, donde el monopolio de un recurso específico por parte de un usuario ralentiza el rendimiento de los demás. Los proveedores deben tener muy en cuenta este aspecto a la hora de planificar la asignación de los recursos. Por eso, es importante entender cómo ajustan su capacidad en función de las cargas de consumo.\r\nServicio: conozca los acuerdos de nivel de servicio (SLA) del proveedor, los cuales establecen la cantidad mínima de tiempo y esfuerzo que garantiza para resolver los problemas de implementación de los recursos.\r\nConfiabilidad: el rendimiento y la velocidad dependen en gran medida del proveedor. Cualquier problema con el software o hardware que sea su responsabilidad afectará los tiempos de ejecución de los usuarios.\r\n\r\n\r\n</div>'),
(24, 'aReXSPSo5uA', '.'),
(25, '8jYM6BKYh5g', '<div id=\"titulo\">Ventajas de la PaaS</div>\r\n\r\n</div>\r\n\r\n<div id=\"parrafo1\">\r\n\r\nLa PaaS es una muy buena opción para los desarrolladores y los programadores que tienen ideas y escriben el código para hacerlas realidad, pero que no tienen o no desean tener los equipos y las complicaciones de mantenerlos en sus propias instalaciones.\r\n\r\nPueden sincronizar el código con una PaaS y ejecutar su aplicación usando el hardware y el software del proveedor, quien se encarga de su mantenimiento. Esto despeja el camino y permite un mayor desarrollo e innovación con menos distracciones, además de que reduce la cantidad de ajustes y codificación de la infraestructura. Dado que la PaaS se encuentra en la nube, también ofrece escalabilidad y fácil migración.\r\n</div>'),
(26, '8jYM6BKYh5g', '<div class=\"udlite-heading-xl\">\r\n <div id=\"titulo\">Introduccion 2.5</div>\r\n</div>\r\n<div id=\"parrafo1\">esta es la intro</div>\r\n <div id=\"descripcion\"> descripcion </div>'),
(27, '-A8g85Yk-WI', '<div class=\"udlite-heading-xl\">\r\n <div id=\"titulo\">Introduccion 2.6</div>\r\n</div>\r\n<div id=\"parrafo1\">esta es la intro</div>\r\n <div id=\"descripcion\"> descripcion </div>'),
(28, '8jYM6BKYh5g', '<div class=\"udlite-heading-xl\">\r\n <div id=\"titulo\">Introduccion 2.7</div>\r\n</div>\r\n<div id=\"parrafo1\">esta es la intro</div>\r\n <div id=\"descripcion\"> descripcion </div>'),
(29, '8jYM6BKYh5g', '<div class=\"udlite-heading-xl\">\r\n <div id=\"titulo\">Introduccion 2.8</div>\r\n</div>\r\n<div id=\"parrafo1\">esta es la intro</div>\r\n <div id=\"descripcion\"> descripcion </div>'),
(32, '8jYM6BKYh5g', '<div class=\"udlite-heading-xl\">\r\n <div id=\"titulo\">Introduccion 3.1</div>\r\n</div>\r\n<div id=\"parrafo1\">esta es la intro</div>\r\n <div id=\"descripcion\"> descripcion </div>'),
(33, '8jYM6BKYh5g', ''),
(34, '8jYM6BKYh5g', ''),
(42, 'gDG_LBUYQSM', ''),
(43, 'q8jBMSZuTWs', ''),
(44, 'Ee_vbRYZuxg', ''),
(45, 'ontfxznrn58', ''),
(281, '8jYM6BKYh5g', '2.7_Sass.htm'),
(291, '8jYM6BKYh5g', ''),
(292, '8jYM6BKYh5g', ''),
(293, '8jYM6BKYh5g', 'nube_Hibrida.htm');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) NOT NULL,
  `nombre` varchar(40) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `apellido` varchar(40) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `password`) VALUES
(1, 'jose eduardo', 'rozo molina', 'joseeduardorm@ufps.edu.co', '$argon2id$v=19$m=1024,t=1,p=1$wTf35NKmZZKlqAwLAv187Q$lASuUpgfj8Ri37SjaHZ2ff2sCRkJzD26VdBvCxyBE6w'),
(2, 'angel leonardo', 'vivas andrade', 'angelleonardovian@ufps.edu.co', '$argon2id$v=19$m=1024,t=1,p=1$wTf35NKmZZKlqAwLAv187Q$lASuUpgfj8Ri37SjaHZ2ff2sCRkJzD26VdBvCxyBE6w'),
(3, 'jeison', 'barbosa solano', 'yeisonbs@ufps.edu.co', '$argon2id$v=19$m=1024,t=1,p=1$3Uxl024193VA/kRHLLPGyg$SvEOqlB+k+tBUBbvBCkVNBp5a4v+ybojN3A5gLqbvjo'),
(11, 'pepito', 'perez', 'pepito@ufps.edu.co', '$argon2id$v=19$m=1024,t=1,p=1$6Ue+idXJXOV6tfJslhK/kg$XYgsbENmmKUbmHBgi0RKvV8bRTPdVE00vAOWUJTpiKk'),
(12, 'juan', 'perez', 'juan@ufps.edu.co', '$argon2id$v=19$m=1024,t=1,p=1$lOyIAbumvAJNuKW3z6CZQQ$SfsTOaiM9HgB5pNaHxP4rqaGXgovqLpnM+lf2WHgch0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_recurso`
--

CREATE TABLE `usuario_recurso` (
  `id` int(10) NOT NULL,
  `id_usuario` int(10) NOT NULL,
  `id_recurso` int(10) NOT NULL,
  `nota` int(10) NOT NULL,
  `vista` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuario_recurso`
--

INSERT INTO `usuario_recurso` (`id`, `id_usuario`, `id_recurso`, `nota`, `vista`) VALUES
(10, 1, 12, 0, 1),
(11, 1, 14, 0, 1),
(14, 1, 16, 0, 1),
(15, 1, 13, 0, 1),
(16, 1, 22, 0, 1),
(17, 1, 25, 0, 1),
(18, 1, 23, 0, 1),
(19, 1, 15, 0, 1),
(20, 1, 24, 0, 1),
(21, 1, 26, 0, 1),
(22, 1, 27, 0, 1),
(23, 1, 28, 0, 1),
(24, 1, 29, 0, 1),
(25, 1, 291, 0, 1),
(26, 1, 292, 0, 1),
(27, 1, 32, 0, 1),
(28, 1, 33, 0, 1),
(29, 1, 34, 0, 1),
(30, 1, 42, 0, 1),
(31, 1, 43, 0, 1),
(32, 1, 44, 0, 1),
(33, 2, 14, 0, 1),
(37, 11, 12, 0, 1),
(38, 11, 13, 0, 1),
(39, 11, 14, 0, 1),
(40, 11, 15, 0, 1),
(41, 11, 16, 0, 1),
(42, 12, 13, 0, 1),
(43, 12, 12, 0, 1),
(44, 12, 14, 0, 1),
(45, 12, 15, 0, 1),
(46, 1, 17, 0, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `recursos`
--
ALTER TABLE `recursos`
  ADD PRIMARY KEY (`id_recurso`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario_recurso`
--
ALTER TABLE `usuario_recurso`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `recursos`
--
ALTER TABLE `recursos`
  MODIFY `id_recurso` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=294;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `usuario_recurso`
--
ALTER TABLE `usuario_recurso`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
