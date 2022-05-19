/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : db_movie

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2022-02-10 12:29:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `tb_movie`
-- ----------------------------
DROP TABLE IF EXISTS `tb_movie`;
CREATE TABLE `tb_movie` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `thumbnail` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of tb_movie
-- ----------------------------
INSERT INTO `tb_movie` VALUES ('6', 'aaa1111', 'dsfdf', 'sdsd', 'sdfff');
INSERT INTO `tb_movie` VALUES ('7', 'aaa', 'dsfdf', 'sdsd', 'sdfff');
INSERT INTO `tb_movie` VALUES ('8', 'aaa', 'dsfdf', 'sdsd', 'sdfff');
INSERT INTO `tb_movie` VALUES ('9', 'aaa1111', 'dsfdf', 'sdsda', 'sdfff');
INSERT INTO `tb_movie` VALUES ('10', 'bbb', 'bb', 'bb', 'bb');
