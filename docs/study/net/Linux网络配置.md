### 如何查看网卡

```shell
#
ifconfig -a
#
ip a
#
netstat -i

# 如果网卡处于DOWN状态，可以使用ifup激活
ifup [网卡名称]
# 如果需要关闭某个网卡，可以使用ifdown关闭
ifdown [网卡名称]
```

### 如何配置网卡

```shell
#
cd /etc/sysconfig/network-scripts/
#
ls
#
vi ifcfg-xxx
# 配置静态IP的常用参数修改-------------------------------------start
BOOTPROTO=static #静态IP固定配置
IPADDR=10.20.25.101 #分配的静态IP
NETMASK=255.255.255.0 #子网掩码
GATEWAY=10.20.25.254 #网关地址
ONBOOT=yes #开机自启，否则还得手动启动网卡
DNS1=8.8.8.8 #DNS配置DNS[数字]
DNS2=114.114.114.114 #DNS配置DNS[数字]
# 配置静态IP的常用参数修改-------------------------------------end
# 重启网络服务，会根据配置文件，生效配置文件，注意如果ONBOOT=no的话，这个网卡不会启动
systemctl restart network
```

### 强大的网络管理集成工具

下面两个工具并不是所有系统都支持，但是上面的配置是所有系统都支持

nmcli 集成工具，增删改查网络配置

nmtui 终端字符图形工具，增删改查网络配置

### 如何配置DNS

- 通过修改ifcfg-xxx的网卡配置文件来
- 通过修改/etc/resolv.conf，增加nameserver 8.8.8.8来配置，这个文件手动修改可能会被其他网络管理工具覆盖