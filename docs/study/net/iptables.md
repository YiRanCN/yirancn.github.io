# Linux iptables 防火墙

```shell
# 列出当前iptables中的所有规则
iptables -L
# +展示IP和端口
iptables -L -n
# +数据包和字节计数器
iptables -L -v
# 展示入口 出口 
iptables -L INPUT/OUTPUT/FORWARD
## 规则在 iptables 的链中的顺序很重要，因为 iptables 会按顺序检查规则。-I 会将规则插入到链的头部，-A 会将规则添加到链的尾部，-D 会删除规则。不同的插入或添加顺序可能会导致不同的网络访问结果，特别是当有其他相关的规则存在时。
# 表示从 INPUT 链中删除一条规则。
iptables -D INPUT -p tcp --dport 26379 -s $ip -j ACCEPT
# 表示将一条规则插入到 INPUT 链的头部。
iptables -I INPUT -p tcp --dport 26379 -s $ip -j ACCEPT
# 表示将一条规则添加到 INPUT 链的尾部。
iptables -A INPUT -p tcp --dport 26379 -s $ip -j ACCEPT
```