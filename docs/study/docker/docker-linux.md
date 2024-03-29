### alpine

```shell
docker pull alpine:3.18.3

docker run -d \
-p 1883:1883 \
-p 8080:8080 \
-p 8081:8081 \
-p 8000:8000 \
-p 15000:15000 \
--privileged=true \
-e TZ=Asia/Shanghai \
--name alpine-study \
alpine:3.18.3
```

```shell
FROM alpine:3.18.3
MAINTAINER jiot.cloud "cniiot@163.com"
WORKDIR /root/iot-cloud-backend
ADD jdk-17_linux-x64_bin.tar.gz /root/iot-cloud-backend/
ENV JAVA_HOME=/root/iot-cloud-backend/jdk-17.0.8
ENV PATH=$JAVA_HOME/bin:$PATH
```

```shell
docker build -t jdk17:jiot.cloud .

docker run -it jdk17:jiot.cloud /bin/sh

docker pull debian:stable-slim

docker run -d \
-p 1883:1883 \
-p 8080:8080 \
-p 8081:8081 \
--privileged=true \
-e TZ=Asia/Shanghai \
--name debian-study \
debian:stable-slim
```

```shell
FROM debian:stable-slim
MAINTAINER jiot.cloud "cniiot@163.com"
WORKDIR /root/iot-cloud-backend
ADD jdk-17_linux-x64_bin.tar.gz /root/iot-cloud-backend/
ENV JAVA_HOME=/root/iot-cloud-backend/jdk-17.0.8
ENV PATH=$JAVA_HOME/bin:$PATH
```

```shell
docker build -t jdk17:jiot.cloud .

docker run -it jdk17:jiot.cloud /bin/sh

docker pull centos:centos7.9.2009

docker run -d \
-p 1883:1883 \
-p 8080:8080 \
-p 8081:8081 \
--privileged=true \
-e TZ=Asia/Shanghai \
--name debian-study \
centos:centos7.9.2009
```

```shell
FROM centos:centos7.9.2009
MAINTAINER jiot.cloud "cniiot@163.com"
WORKDIR /root/iot-cloud-backend
ADD jdk-17_linux-x64_bin.tar.gz /root/iot-cloud-backend/
ENV JAVA_HOME=/root/iot-cloud-backend/jdk-17.0.8
ENV PATH=$JAVA_HOME/bin:$PATH
```

```shell
docker build -t jdk17:jiot.cloud .

docker run -it jdk17:jiot.cloud /bin/sh
```
