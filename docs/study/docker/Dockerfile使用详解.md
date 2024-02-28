### 官方参考文档

- [官方参考文档-英文版本](https://docs.docker.com/reference/dockerfile/)

### SpringBoot Dockerfile 示例

#### 示例 1

```shell
# JDK17环境
FROM ubuntu:23.10 as ujdk17
WORKDIR /root/jdk
ADD jdk-17_linux-x64_bin.tar.gz  ./
ENV JAVA_HOME=/root/jdk/jdk-17.0.8
ENV PATH=$JAVA_HOME/bin:$PATH
RUN java --version
# 直接运行SpringBoot Jar包模式
FROM ujdk17 as xxx
WORKDIR /root/application
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} application.jar
EXPOSE 8080
ENTRYPOINT java -jar application.jarca
```

#### 示例 2

没有成功！！(原因是 SpringBoot 的版本用的是 3.0.3)

成功！！(原因是 SpringBoot 的版本用的是 3.2.3)

一定要看清 SpringBoot 的版本号，差异还是很大的

```shell
# JDK17环境
FROM ubuntu:23.10 as ujdk17
WORKDIR /root/jdk
ADD jdk-17_linux-x64_bin.tar.gz  ./
ENV JAVA_HOME=/root/jdk/jdk-17.0.8
ENV PATH=$JAVA_HOME/bin:$PATH
RUN java --version
# 构建环境 主要是想利用Docker的分层缓存概念达到快速构建的目的 jarmode模式
FROM ujdk17 as builder
WORKDIR /root/application
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} application.jar
RUN java -Djarmode=layertools -jar application.jar extract
# jarmode模式启动
FROM ujdk17 as xxx
WORKDIR /root/application
COPY --from=builder /root/application/dependencies/ ./
COPY --from=builder /root/application/spring-boot-loader/ ./
COPY --from=builder /root/application/snapshot-dependencies/ ./
COPY --from=builder /root/application/application/ ./
EXPOSE 8080
ENTRYPOINT ["java", "org.springframework.boot.loader.launch.JarLauncher"]
```

### 参考文档

- [简书-Dockerfile 详解（超详细）](https://www.jianshu.com/p/4508784f6ddc)
