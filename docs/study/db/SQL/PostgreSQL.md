### 简介

**PostgreSQL** (也叫 Postgres)是一个自由的**对象-关系数据库**服务器(数据库管理系统)，它在灵活的 BSD-风格许可证下发行。它提供了相对其他开放源代码数据库系统(比如 MySQL 和 Firebird)，和对专有系统比如 Oracle、Sybase、IBM 的 DB2 和 Microsoft SQL Server的一种选择。

PostgreSQL 的 Slogan(口号) 是 "世界上最先进的开源关系型数据库"。

### PostGIS

PostGIS在对象关系型数据库PostgreSQL上增加了存储管理空间数据的能力，相当于Oracle的spatial部分。PostGIS最大的特点是符合并且实现了OpenGIS的一些规范，是最著名的开源GIS数据库。

PostGIS通过向PostgreSQL添加对空间数据类型、空间索引和空间函数的支持，将PostgreSQL数据库管理系统转换为空间数据库。

因为PostGIS是建立在PostgreSQL之上的，所以PostGIS自动继承了重要的"企业级"特性以及开放源代码的标准。

可以说PostGIS仅仅只是PostgreSQL的一个插件，但是它将PostgreSQL变成了一个强大的空间数据库！

问题描述：

对车辆的位置信息进行存储，查询车辆的行驶轨迹和里程。

### 安装postgres

```shell
#
docker pull postgres:11.19-bullseye
#
docker run \
--privileged=true \
--restart=always \
--name postgres \
-e POSTGRES_PASSWORD=Aa0123 \
-p 5432:5432 \
-v /mnt/docker/postgresql/data:/var/lib/postgresql/data \
-d postgres:11.19-bullseye
# 发现使用DBeaver连接不上，需要修改/mnt/docker/postgresql/data/pg_hba.conf 
# 增加一行host    all             all             192.168.41.69/32            trust
# 192.168.41.69是我自己的ip

```

```shell
# 在ubuntu上安装
sudo apt-get install postgresql -y
sudo systemctl status postgresql
#
passwd postgres
#
su - postgres
#
pgsql
#
\password postgres
# 查看所有数据库
\l
# 创建数据库
create database xxx with owner=postgres encoding='UTF-8';
```

### mysql迁移到postgres

```shell
# 在ubuntu上安装
sudo apt-get install pgloader -y
# 注意密码的使用，如果携带特殊字符@，可以用两个@标识
pgloader mysql://root:yyyyyyyyy@10.20.37.101:3306/ccsp_common pgsql://postgres:yyyyyyyyyy@127.0.0.1:5432/class
```

参考文档 https://pgloader.readthedocs.io/en/latest/ref/mysql.html#using-default-settings

