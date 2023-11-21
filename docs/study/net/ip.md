# Linux ip 命令

ip 命令来自 iproute 软件包，软件包提供了很多命令（rpm -ql iproute |grep bin），如 ss 命令、bridge，这些命令可以完全替代 ifconfig、netstat、route 等命令。

ip 命令有很多子命令，可以通过 man ip 查看

link - address - addrlabel - route - rule - neigh - ntable - tunnel - tuntap - maddress - mroute - mrule - monitor - xfrm - netns - l2tp - tcp_metrics -
token - macsec

查看命令的用法：

- ip netns help
- ip address help
- ip route help
- ip link help
- ip neigh help

查看帮助文档：

- man ip-netns
- man ip-address
- man ip-route
- man ip-link
- man ip-neighbour

更多命令的帮助文档可以通过以下命令查看：

rpm -ql iproute |grep man

### ip netns

查看所有网络命名空间，用于隔离网络

### ip address

address 可以简写为 a 或 ad 或 add 或 addr

查看 ip

### ip route

route 可以简写为 r 或 ro 或 rou

查看路由

### ip link

link 表示链路层。link 可以简写为 l 或 li 或 lin

ip l：查看所有的网络设备（因为是链路层，所以只显示 MAC 地址，不显示 IP 地址）。其中，lo、ens33 等是真实的物理设备，通过 ip l add 命令创建的都是虚拟设备。

- [轻松理解 Docker 网络虚拟化基础之 veth 设备！](https://mp.weixin.qq.com/s/sSQFINJ8RO8Nc4XtcyQIjQ)
- [25 张图，一万字，拆解 Linux 网络包发送过程](https://mp.weixin.qq.com/s?__biz=MjM5Njg5NDgwNA==&mid=2247485146&idx=1&sn=e5bfc79ba915df1f6a8b32b87ef0ef78&scene=21#wechat_redirect)
- [图解 Linux 网络包接收过程](https://mp.weixin.qq.com/s?__biz=MjM5Njg5NDgwNA==&mid=2247484058&idx=1&sn=a2621bc27c74b313528eefbc81ee8c0f&scene=21#wechat_redirect)

### ip neigh

neigh 可以简写为 n 或 ne 或 nei

ip n：查看内核中记录的 ARP 表（也就是链路层直连的主机的 IP 和 MAC 地址，不一定准确，需要之前连过）。
