### VLAN

VLAN(Virtual LAN)，翻译成中文是“虚拟局域网”。LAN可以是由少数几台家用计算机构成的网络，也可以是数以百计的计算机构成的企业网络。VLAN所指的LAN特指使用路由器分割的网络(也就是广播域)。其实就是在物理局域网的基础上再划分出多个虚拟局域网。

VLAN作为传统的网络隔离技术，在标准定义中VLAN的数量只有4000个左右(VLAN ID的取值范围只支持1-4094)，无法满足大型数据中心的租户间隔离需求。另外，VLAN的二层范围一般较小且固定，无法支持虚拟机大范围的动态迁移.



### VXLAN

VXLAN（Virtual eXtensible Local Area Network，虚拟扩展局域网），是由IETF定义的NVO3（Network Virtualization over Layer 3）标准技术之一，是对传统VLAN协议的一种扩展。VXLAN的特点是将L2的以太帧封装到UDP消息（即L2 over L4）中，并在L3网络中传输。是overlay网络的实现技术之一。

vxlan解决了什么关键问题

虚拟化服务器动态迁移

服务器从该二层交换机的一个端口迁移到另一个端口时，IP地址是可以保持不变的，VXLAN利用此设计理念，在数据中心IP网络基础上，构建一张全互联的二层隧道虚拟网络，保证任意两点之间都能通过VXLAN隧道来通信，并忽略底层网络的结构和细节，VXLAN为它们将整个数据中心基础网络虚拟成了一台巨大的“二层交换机（大二层）”，所有服务器都连接在这台虚拟二层交换机上。

大规模数据中心，海量租户隔离能力

在标准定义中VLAN的数量只有4000个左右，无法满足大型数据中心的租户间隔离需求。 VXLAN完美地弥补了VLAN的上述不足，一方面通过VXLAN中的24比特VNI字段。提供多达16M租户的标识能力

### 参考

- [csdn-vlan和vxlan](https://blog.csdn.net/ecloud_developer/article/details/120526041)