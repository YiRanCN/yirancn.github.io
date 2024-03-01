# Spring Security

Spring Security 是一套安全框架，可以基于 RBAC（基于角色的权限控制）对用户的访问权限进行控制，

核心思想是通过一系列的 filter chain 来进行拦截过滤，对用户的访问权限进行控制，

​spring security 的核心功能主要包括：

- 认证 （你是谁）
- 授权 （你能干什么）
- 攻击防护 （防止伪造身份）

其核心就是一组过滤器链，项目启动后将会自动配置。最核心的就是 Basic Authentication Filter 用来认证用户的身份，一个在 spring security 中一种过滤器处理一种认证方式。

[官方参考文档](https://docs.spring.io/spring-security/reference/index.html)

这样的安全框架还有，

[Apache Shiro](https://shiro.apache.org/)

[Sa-Token](https://sa-token.cc/)
