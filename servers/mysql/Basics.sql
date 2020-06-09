#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS Basics;
#创建数据库，设置存储的编码
CREATE DATABASE Basics CHARSET=UTF8;
#进入数据库
USE Basics; 

/**用户信息**/
CREATE TABLE users(
  uid INT PRIMARY KEY AUTO_INCREMENT,   ##用户id
  uname VARCHAR(32),                    ##用户名
  upwd VARCHAR(32),                     ##用户密码
  email VARCHAR(64),                    ##用户邮箱
  phone VARCHAR(16)                     ##电话号码
);

INSERT INTO users VALUES 
  (1, '童晨312', '970416', 'lolilove@163.com',18024377776),
  (2, '金鹏', '123321', '123321@163.com', 18024377778),
  (3, '玉米', '123456', '123456@163.com', 18024377779),
  (4, '吉吉', '999999', '999999@163.com', 18024377770);


--  DELETE FROM banner WHERE banner_id >=3;
/**图片组**/
CREATE TABLE banner(
  banner_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(128),
  src VARCHAR(128)
);

INSERT INTO banner VALUES 
  (1, '皮卡丘', '/upload/pikaqiu.jpg'),
  (2, '草莓', '/upload/caomei.jpg');




