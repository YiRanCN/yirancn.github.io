# centos-jdk17-app

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

```shell
vim /etc/profile

# 增加如下
export JAVA_HOME=/root/iot-cloud-backend/jdk-17.0.8;
export PATH=$JAVA_HOME/bin:$PATH;
export CLASSPATH=.:$JAVA_HOME/lib;

#保存后
source /etc/profile
```

```shell
mkdir -p /root/iot-cloud-backend/hivemq/embedded-config-folder
mkdir -p /root/iot-cloud-backend/hivemq/embedded-data-folder
mkdir -p /root/iot-cloud-backend/hivemq/embedded-extensions-folder
# config下面有三个配置文件需要传过去

```

```shell
# 启动
java -jar application-0.0.1-SNAPSHOT.jar > iot-cloud-backend.log &
```
