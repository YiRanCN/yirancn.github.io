# SSL TLS HTTPS

为了保证网络通信的安全性，需要对网络上传递的数据进行加密。现在主流的加密方法就是 SSL (Secure Socket Layer)，TLS (Transport Layer Security)。后者比前者要新一些，不过在很多场合还是用 SSL 指代 SSL 和 TLS。

### SSL/TLS

SSL（Secure Socket Layer）是指安全套接字层，简而言之，它是一项标准技术，可确保互联网连接安全，保护两个系统之间发送的任何敏感数据，防止网络犯罪分子读取和修改任何传输信息，包括个人资料。TLS（Transport Layer Security，传输层安全）是更为安全的升级版 SSL。

TLS 1.0 版实际上最初作为 SSL 3.1 版开发，HTTPS 是在 HTTP 协议基础上实施 TLS 加密，所有网站以及其他部分 web 服务都使用该协议。因此，任何使用 HTTPS 的网站都使用 TLS 加密。不同版本的 TLS 协议内容约定不一样，这也会给 HTTPS 建立连接时需要握手协商的信息造成差异。

TLS 已经完全的代替掉 SSL 了，所以只推荐 TLS；目前的 SSL 证书许可，下发的其实都是 SSL/TLS 证书。

HTTP 是超文本传输协议，信息是明文传输；HTTPS，也称作 HTTP over TLS，则是具有安全性的 SSL 加密传输协议。

HTTPS 协议需要到证书颁发机构 (Certificate Authority，简称 CA)申请证书，通过数字证书管理服务完成证书购买、申请，并将证书部署到您的 Web 服务器后，Web 服务将会通过 HTTPS 加密协议来传输数据。

### 参考

- [浅谈 SSL/TLS 工作原理](https://zhuanlan.zhihu.com/p/36981565)
- [SSL/TLS 与 IPSec 对比](https://zhuanlan.zhihu.com/p/416587205)
