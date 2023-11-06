### 配置

- [OpenVPN 中 server.conf 和 client.conf 配置文件详解](https://blog.csdn.net/sinat_27690807/article/details/118482528)
- [深入 openvpn 配置-有案例](https://www.linuxfly.org/post/86/)
- [openvpn2.3.12 安装与 easy-rsa3 的使用](https://blog.51cto.com/icenycmh/1867641)
- [阿里云服务器配置 CentOS7.4+OpenVPN-2.4.5+easy-rsa-3.0](https://blog.51cto.com/songky/2115052?articleABtest=1)

### 脚本

```shell
# 安装
yum install openvpn
yum install easy-rsa

# 准备目录 注意版本号 需要自行更改
cp /usr/share/doc/openvpn-2.4.5/sample/sample-config-files/server.conf /etc/openvpn
cp -r /usr/share/easy-rsa/ /etc/openvpn
cp /usr/share/doc/easy-rsa-3.0.3/vars.example easy-rsa/3.0/vars

# 初始化pki
cd /etc/openvpn/easy-rsa/3.0
./easyrsa init-pki

# 创建ca，记住ca密码
./easyrsa build-ca

# 创建Diffie-Hellman，确保key穿越不安全网络
./easyrsa gen-dh
# 生成防攻击key文件
openvpn --genkey --secret ta.key

# 创建服务器证书 注意名字为vpnserver 可以更改
./easyrsa gen-req vpnserver nopass
# 签约服务端证书 注意名字为vpnserver
./easyrsa sign server vpnserver

# 将服务器证书整理到一起
cd /etc/openvpn/
mkdir pki
cd pki
/usr/bin/cp -rf ../easy-rsa/3.0/ta.key ./
/usr/bin/cp -rf ../easy-rsa/3.0/pki/ca.crt ./
/usr/bin/cp -rf ../easy-rsa/3.0/pki/dh.pem ./
/usr/bin/cp -rf ../easy-rsa/3.0/pki/issued/vpnserver.crt ./
/usr/bin/cp -rf ../easy-rsa/3.0/pki/private/vpnserver.key ./
# 将客户端所需证书整理到一起
mkdir /etc/openvpn/client
cd /etc/openvpn/client
/usr/bin/cp -rf ../easy-rsa/3.0/ta.key ./
/usr/bin/cp -rf ../easy-rsa/3.0/pki/ca.crt ./
/usr/bin/cp -rf ../easy-rsa/3.0/pki/issued/client001.crt ./
/usr/bin/cp -rf ../easy-rsa/3.0/pki/private/client001.key ./

# 启动 停止 状态
systemctl start openvpn@server
systemctl stop openvpn@server
systemctl status openvpn@server
```

### server.conf

```shell
local 102.94.xx.xx（填写你的vps IP, 对于阿里云服务器，此项需注释**！！！**）
port 1194
proto udp
dev tun
ca /etc/openvpn/pki/ca.crt
cert /etc/openvpn/pki/server.crt
key /etc/openvpn/pki/server.key # This file should be kept secret
dh /etc/openvpn/pki/dh.pem
server 10.8.0.0 255.255.255.0
ifconfig-pool-persist ipp.txt
push "redirect-gateway def1 bypass-dhcp"
push "dhcp-option DNS 8.8.8.8"
keepalive 10 120
tls-auth /etc/openvpn/pki/ta.key 0
comp-lzo
max-clients 100
persist-key
persist-tun
status openvpn-status.log
verb 3
```

### 配置 IP 转发功能

```shell
# 查询
sysctl net.ipv4.ip_forward
# 设置
echo 'net.ipv4.ip_forward = 1' >/etc/sysctl.conf
sysctl -p
```

[net.ipv4.ip_forward](https://blog.csdn.net/wangqiaowq/article/details/131802323)

### client.ovpn

```shell
client
dev tun
proto udp
remote 60.204.171.251 1194
resolv-retry infinite
nobind
persist-key
persist-tun
ca ca.crt
cert client001.crt
key client001.key
tls-auth ta.key 1
comp-lzo
verb 3
```

### 生成客户端证书

```shell
cd /etc/openvpn/easy-rsa/3.0/
./easyrsa build-client-full client002
/usr/bin/cp -rf /etc/openvpn/easy-rsa/3.0/pki/issued/client002.crt /etc/openvpn/client
/usr/bin/cp -rf /etc/openvpn/easy-rsa/3.0/pki/private/client002.key /etc/openvpn/client
```
