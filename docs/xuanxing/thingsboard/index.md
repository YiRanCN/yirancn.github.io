---
sidebar_position: 1
---

# 综述

thingsboard 应该算是顶级的开源物联网云平台了。但是，经我研究，不是很适合国内用户。但是却有很多学习和借鉴的地方，例如规则引擎。

### 环境要求

- JDK 11
- Maven 3.6.0+

### Maven 版本

有问题，至少得是 3.6.0，官网文档有误；

```shell
[ERROR] Failed to execute goal com.github.eirslett:frontend-maven-plugin:1.12.0:install-node-and-yarn (install node and npm) on project ui-ngx: The plugin com.github.eirslett:frontend-maven-plugin:1.12.0 requires Maven version 3.6.0 -> [Help 1]
```

### 安装 postgres

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

# 执行 mvn compile 报错

```shell
[ERROR] Failed to execute goal org.apache.maven.plugins:maven-dependency-plugin:2.8:unpack (extract-web-ui) on project web-ui: Artifact has not been packaged yet. When used on reactor artifact, unpack should be executed after packaging: see MDEP-98. -> [Help 1]
```

碰到这个错误，是因为 ui-ngx 没有 install，install 一下即可

### 创建数据库

使用 DBeaver 连接数据库 postgresql，并创建数据库**thingsboard**

修改**thingsboard/application/src/main/resources/thingsboard.yml**文件中的数据库配置，

```yml
url: "${SPRING_DATASOURCE_URL:jdbc:postgresql://192.168.0.40:5432/thingsboard}"
password: "${SPRING_DATASOURCE_PASSWORD:Aa0123}"
```

### 执行 mvn package 打包并初始化数据库

mvn package 命令直接成功。

然后执行**application/target/bin/install/install_dev_db.sh**此脚本，也成功了

### IDEA 运行

执行**application/src/main/java/org/thingsboard/server/ThingsboardServerApplication.java** debug 此文件，
如果存在 JDK 版本问题，把所有 JDK 的配置切换成 JDK11.

等程序跑起来成功后，方位**http://localhost:8080**即可。可以使用以下三种类型的账号登录：

- 系统 管理员: sysadmin@thingsboard.org / sysadmin
- 租户 账号: tenant@thingsboard.org / tenant
- 客户 账号: customer@thingsboard.org / customer

至此，ThingsBoard 在本地成功运行。
