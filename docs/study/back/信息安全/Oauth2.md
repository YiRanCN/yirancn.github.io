# Oauth2

Oauth2 是目前最流行的授权机制，用来授权第三方应用，获取用户数据。

Oauth2 有四种角色，一个是客户端，一个是资源所有者，一个是授权服务器，还有一个是资源服务器。

### Oauth2 四种认证方式

- 授权码模式（authorization code）：要授权，同意，给授权码，拿授权码要令牌
- 简化模式（隐藏模式）（implicit）：要授权，同意，直接拿令牌，**_一般是第三方应用只有前端_**
- 密码模式（resource owner password credentials），要授权，直接给用户名和密码，**_及其信任，很少用到_**
- 客户端模式（client credentials），要授权，直接给令牌；**_一般是第三方应用的后端，同时支持很多自己的用户_**

不管是哪一种授权方式，第三方应用申请令牌之前，都必须先到系统备案，说明自己的身份，然后拿到两个身份的识别码，客户端和客户端密钥，这是防止密钥被滥用，没有备案过的第三方的应用，是不会拿到令牌的

### 参考文档

- [CSDN-前言技术之 Oauth2 全方面介绍](https://blog.csdn.net/m0_53151031/article/details/123737336)
