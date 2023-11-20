# unix pfctl 防火墙

iptables 是 Linux 下的防火墙，可以进行数据包的过滤，在网络层进行数据的转发、拦截或丢弃等，使用非常普遍，功能也非常强大。但是 Mac 下没有 iptables，为了实现流量转发和过滤，要使用到 Mac 自带的 PFctl。PFctl 即 control the packet filter，是 Unix LIKE 系统上进行 TCP/IP 流量过滤和网络地址转换的系统，也能提供流量整形和控制等

### 参考

- [pfctl](https://www.imydl.tech/linux-command/c/pfctl.html)
- [识典百科-PF 防火墙](https://shidian.baike.com/wikiid/658345936018390300)
