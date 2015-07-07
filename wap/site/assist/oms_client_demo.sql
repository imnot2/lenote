-- 生成日期: 2014 年 06 月 19 日 09:18
-- 服务器版本: 5.5.31

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

-- --------------------------------------------------------

--
-- 表的结构 `client`
--
-- 创建时间: 2014 年 06 月 16 日 09:19
--

-- DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tid` tinyint(4) unsigned NOT NULL COMMENT '类型',
  `link` text NOT NULL COMMENT '下载地址',
  `version` varchar(15) NOT NULL COMMENT '版本',
  `sizeof` varchar(15) NOT NULL COMMENT '文件大小',
  `publish_time` datetime NOT NULL COMMENT '发布时间',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '0不可用1可用',
  `summary` text COMMENT '描述',
  `createBy` varchar(30) DEFAULT NULL COMMENT '创建者',
  `updateBy` varchar(30) DEFAULT NULL COMMENT '最后更新者',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tid` (`tid`),
  KEY `publish_time` (`publish_time`),
  KEY `status` (`status`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='客户端' AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `client`
--

INSERT INTO `client` (`id`, `tid`, `link`, `version`, `sizeof`, `publish_time`, `status`, `summary`, `createBy`, `updateBy`, `create_time`, `update_time`) VALUES
(1, 1, 'http://susapi.lenovomm.com/adpserver/GetPackByPN?PackageName=com.lenovo.supernote&ChannelKey=null&UserKey=', '2.0.14', '10.30M', '2014-06-17 11:34:05', 1, 'Android客户端', NULL, NULL, '2014-06-17 11:34:05', '2014-06-17 11:34:05'),
(2, 2, 'http://susapi.lenovomm.com/adpserver/DLBIDFS?ds=20069_20531368&rt=POL', '1.1.24', '19.50M', '2014-06-29 11:34:05', 0, 'windows客户端', NULL, NULL, '2014-06-29 11:34:05', '2014-06-29 11:34:05'),
(3, 2, 'http://susapi.lenovomm.com/adpserver/DLBIDFS?ds=20069_20531368&rt=POL', '1.1.24', '19.50M', '2014-06-16 11:34:05', 1, 'windows客户端', NULL, NULL, '2014-06-16 11:34:05', '2014-06-16 11:34:05'),
(4, 2, 'http://susapi.lenovomm.com/adpserver/DLBIDFS?ds=20069_20531368&rt=POL', '1.1.24', '19.50M', '2014-06-19 11:34:05', 1, 'windows客户端', NULL, NULL, '2014-06-19 11:34:05', '2014-06-19 11:34:05'),
(5, 2, 'http://susapi.lenovomm.com/adpserver/DLBIDFS?ds=20069_20531368&rt=POL', '1.1.24', '19.50M', '2014-06-25 11:34:05', 1, 'windows客户端', NULL, NULL, '2014-06-25 11:34:05', '2014-06-25 11:34:05'),
(6, 1, 'http://susapi.lenovomm.com/adpserver/GetPackByPN?PackageName=com.lenovo.supernote&ChannelKey=null&UserKey=', '2.0.14', '10.30M', '2014-06-19 11:34:05', 1, 'Android客户端', NULL, NULL, '2014-06-19 11:34:05', '2014-06-19 11:34:05'),
(7, 1, 'http://susapi.lenovomm.com/adpserver/GetPackByPN?PackageName=com.lenovo.supernote&ChannelKey=null&UserKey=', '2.0.14', '10.30M', '2014-06-25 11:34:05', 1, 'Android客户端', NULL, NULL, '2014-06-25 11:34:05', '2014-06-25 11:34:05');

-- --------------------------------------------------------

--
-- 表的结构 `client_type`
--
-- 创建时间: 2014 年 06 月 16 日 08:56
--

-- DROP TABLE IF EXISTS `client_type`;
CREATE TABLE IF NOT EXISTS `client_type` (
  `id` tinyint(4) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `summary` varchar(80) DEFAULT NULL,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='客户端类型' AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `client_type`
--

INSERT INTO `client_type` (`id`, `name`, `summary`, `create_time`, `update_time`) VALUES
(1, 'android', 'Android Phone', '2014-06-19 11:34:05', '2014-06-19 11:34:05'),
(2, 'windows', 'Windows XP/Window7, etc..', '2014-06-19 11:35:37', '2014-06-19 11:35:37');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
