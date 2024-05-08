### 内核/发行版

```shell
# 内核 CPU架构
uname -a
# 发行版
lsb_release -a
```

### 删除多余的备份

```shell
# 删除90之前的备份文件
find /root/sh/bak/*.gz -mtime +90 -type f -exec rm -f {} \;
# 删除60之前的备份文件
find /root/sh/bak/*.gz -mtime +60 -type f -exec rm -f {} \;
# 删除10之前的备份文件
find /mnt/docker/tomcat/logs/*.log -mtime +10 -type f -exec rm -f {} \;
```

### 文件/目录大小查看

```shell
#查看当前目录总共占的容量。而不单独列出各子项占用的容量
du -sh
#查看当前目录下一级子文件和子目录占用的磁盘容量。
du -lh --max-depth=1
#按照文件大小 从小到大排序
ls -hSlr
#按照修改时间 从小到大排序
ls -hlt
```

### 网络带宽问题

```shell
yum install libpcap nethogs
nethogs -a
lsof -i:被占用的端口号
```

### 定时任务

### 防火墙

```shell
#检查防火墙 如果防火强修改了 记得重启docker
systemctl status firewalld
#
firewall-cmd --list-ports

#开启防火墙端口
#
firewall-cmd --permanent --add-port=9100/tcp && \
firewall-cmd --permanent --add-port=9200/tcp && \
firewall-cmd --permanent --add-port=9300/tcp && \
firewall-cmd --reload
#
firewall-cmd --permanent --add-port=5044-5054/tcp && \
firewall-cmd --reload
#
firewall-cmd --permanent --add-port=8090-8099/tcp && \
firewall-cmd --reload

#关闭防火墙端口
firewall-cmd --permanent --remove-port=9100/tcp && \
firewall-cmd --permanent --remove-port=9200/tcp && \
firewall-cmd --permanent --remove-port=9300/tcp && \
firewall-cmd --reload
```

### 后台运行

```shell
nohup python ./analyse_init_stocks.py > /dev/null 2>&1 &
```

### zip 文件

```shell
yum install -y unzip zip
```

### centos 字符集问题

1. [CentOS7 及 Docker 配置中文字符集问题](https://www.cnblogs.com/kcxg/p/11451120.html)

### 宝塔相关

1. 如果不知道宝塔的管理员的用户名和密码，但是可以登录服务器，使用脚本 bt default 来获取管理员的用户名和密码。

### 登录用户

```shell
#
w
# 
who
#
whoami
# 查看当前用户分组
id [user]
```

### 常用的 ls 命令

```shell
#忽略某些文件名展示
ll -h --ignore="*bak*"
```

### CPU

```shell
#该服务器一共有几个物理CPU
grep "physical id" /proc/cpuinfo | uniq | wc -l
#该服务器一共有几个逻辑CPU
grep "processor" /proc/cpuinfo | wc -l
#查看cpu核心数
cat /proc/cpuinfo| grep "cpu cores"| uniq
#查看cpu详细信息
lscpu
#查看CPU位数
getconf LONG_BIT
# 列出CPU占用最多的5个进程
ps -aux | sort -k3nr | head -5
# P按照内存大小排序 c显示进程全称
top
```

### apt-get

```sql
#
apt-get update
#
apt-get install vim
```

### 系统盘符

```shell
#查看系统支持的盘符，查看分区和磁盘
lsblk
#查看空间使用情况
df -h
#查看硬盘label（别名）磁盘文件类型
blkid
```

### 内存

```shell
# 查看内存大小
free -h 　
# 内存占用最多的5个进程
ps -aux | sort -k4nr | head -5
# >或M按照内存大小排序 c显示进程全称
top
```

### 操作系统版本

```shell
#红帽系列 centos
cat /etc/redhat-release
#查看内核/操作系统/CPU信息：
uname -a
```

### 端口/连接

```shell
#查看所有监听的端口
netstat -lntp
#查看已经建立的链接
netstat -antp
#
yum list |grep telnet
yum -y install telnet.x86_64
telnet 172.19.74.146 9200
# 根据监听端口查找进程，根据进程号查找进程命令
netstat -tulnp | grep ':端口号'
ss -tulnp | grep ':端口号'
ps -f -p 99382|cat
```

### vi/vim 中文乱码

```shell
#
vi /etc/vimrc
#在文件头增加如下内容
set fileencodings=utf-8,gb2312,gbk,gb18030
set termencoding=utf-8
set fileformats=unix
set encoding=prc
```

### htop/top

```shell
#支持鼠标 支持左右方向键
htop
#
H 只展示进程/显示线程
h, ? F1查看htop使用说明
S F2 htop 设定
/ F3 搜索进程
\ F4 增量进程过滤器
t F5 显示树形结构
<, > F6 选择排序方式
[ F7 可减少nice值可以提高对应进程的优先级
] F8 可增加nice值，降低对应进程的优先级
k F9 可对进程传递信号
q F10 结束htop
u 只显示一个给定的用户的过程
U 取消标记所有的进程
H 显示或隐藏用户线程
K 显示或隐藏内核线程
F 跟踪进程
P 按CPU 使用排序
M 按内存使用排序
T 按Time+ 使用排序
l 显示进程打开的文件
I 倒转排序顺序
s 选择某进程，按s:用strace追踪进程的系统调用
```

### grep

```shell
#
less user-func-flow-for-res.2022-03-11.log | grep -E '61.166.240.34' |grep get | more


```

### pstree

```shell
#pstree 命令是以树形结构显示程序和进程之间的关系
man pstree
#展示进程命令行
pstree -a
```
