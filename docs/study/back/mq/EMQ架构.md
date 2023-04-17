1. EMQ单点或集群；
2. backend集群，不同的backend处理不同的主题或同一个主题的不同参数；
3. backend集群将一部分必要休息存储到kakfa集群；
4. logstash的输入域为kafka集群，并输出到es中存储；


### Linux安装测试工具

```shell
yum -y install gcc glibc-devel make ncurses-devel openssl-devel xmlto perl wget
wget http://erlang.org/download/otp_src_22.1.tar.gz
./configure --prefix=/usr/local/erlang
make && make install

vim /etc/profile
ER_LANG=/usr/local/erlang
PATH=$PATH:$ER_LANG/bin:
export PATH
source /etc/profile

git clone https://github.com/erlang/rebar3.git
cd /opt/rebar3/
./bootstrap
以及添加环境变量
echo "export PATH=/opt/rebar3:$PATH" >>/etc/profile

git clone https://github.com/emqx/emqtt-bench.git

make

#测试连接数 一个客户端不要超过3W
./emqtt_bench conn -h 192.168.0.39 -c 30000 -i 10

sysctl -w net.ipv4.ip_local_port_range="500 65535"
echo 1000000 > /proc/sys/fs/nr_open
ulimit -n 100000
```

### 参考

1. [Mac的最大连接数限制和端口的相关参数的设置](https://blog.csdn.net/ys5773477/article/details/73614220)
