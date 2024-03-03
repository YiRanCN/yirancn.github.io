# Spring Boot

### 常看文档

- [V3.2.0 官方参考文档，没事多看看](https://docs.spring.io/spring-boot/docs/3.2.0/reference/html/)

### 两种方式管理依赖

#### 继承

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.1.1.RELEASE</version>
</parent>
```

#### 依赖管理

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-dependencies</artifactId>
            <version>2.1.1.RELEASE</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

### bootstrap.properties/yml

单纯做 Spring Boot 开发，可能不太容易遇到 bootstrap.properties 配置文件，但是在结合 Spring Cloud 时，这个配置就会经常遇到了，特别是在需要加载一些远程配置文件的时侯。
bootstrap.properties 在 application.properties 之前加载，配置在应用程序上下文的引导阶段生效。一般来说我们在 Spring Cloud Config 或者 Nacos 中会用到它。bootstrap.properties 被 Spring ApplicationContext 的父类加载，这个类先于加载 application.properties 的 ApplicatonContext 启动。
