# centos-jdk17-app

### 安装 jdk

```shell
#需要看cpu架构 x64
uname -a
cd ~
mkdir iot-cloud-backend
cd iot-cloud-backend
wget https://download.oracle.com/java/17/latest/jdk-17_linux-x64_bin.tar.gz
tar -zxvf jdk-17_linux-x64_bin.tar.gz

#需要看cpu架构 aarch64
uname -a
cd ~
mkdir iot-cloud-backend
cd iot-cloud-backend
wget https://download.oracle.com/java/17/latest/jdk-17_linux-aarch64_bin.tar.gz
tar -zxvf jdk-17_linux-aarch64_bin.tar.gz
```

### 配置 java

```shell
vim /etc/profile

# 增加如下
export JAVA_HOME=/root/iot-cloud-backend/jdk-17.0.8;
export PATH=$JAVA_HOME/bin:$PATH;
export CLASSPATH=.:$JAVA_HOME/lib;

# 保存后
source /etc/profile
```

### 配置应用所需的环境变量

```shell
vim ~/.bash_profile

# 增加如下
export IOT_MYSQL_HOST=127.0.0.1
export IOT_MYSQL_PORT=13306
# HIVEMQ_HOME=/Users/weic/Documents/GITREP/GITHUB/net-cloud-backend/hivemq
export IOT_ALIYUN_KEY=xxx
export IOT_ALIYUN_SECRET=xxx
export IOT_SMS_REAL=0

#保存后
source /etc/profile
```

### 创建 hivemq 文件夹

```shell
mkdir -p /root/iot-cloud-backend/hivemq/embedded-config-folder
mkdir -p /root/iot-cloud-backend/hivemq/embedded-data-folder
mkdir -p /root/iot-cloud-backend/hivemq/embedded-extensions-folder
# config下面有三个配置文件需要传过去

```

### 启动应用

```shell
# 启动
java -jar application-0.0.1-SNAPSHOT.jar > iot-cloud-backend.log &
```

### 启动脚本

```shell
#!/bin/sh
# 查找Java进程，并将结果保存到变量中
java_pid=$(ps aux | grep java | grep application | grep -v grep | awk '{print $2}')

if [ -n "$java_pid" ]; then
    echo "已存在 $java_pid"
else
    java -jar application-0.0.1-SNAPSHOT.jar > net-cloud-backend.log &
    echo "启动中..."
    tail -f net-cloud-backend.log
fi
```

### 停止脚本

```shell
#!/bin/sh

# 查找Java进程，并将结果保存到变量中
java_pid=$(ps aux | grep java | grep application | grep -v grep | awk '{print $2}')

if [ -n "$java_pid" ]; then
    echo "正在终止Java进程 $java_pid"
    kill -9 $java_pid
    echo "Java进程已终止"
else
    echo "未找到Java进程"
fi
```
