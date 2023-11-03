### 配置

- [OpenVPN 中 server.conf 和 client.conf 配置文件详解](https://blog.csdn.net/sinat_27690807/article/details/118482528)
- [深入 openvpn 配置-有案例](https://www.linuxfly.org/post/86/)
- [openvpn2.3.12 安装与 easy-rsa3 的使用](https://blog.51cto.com/icenycmh/1867641)
- [阿里云服务器配置 CentOS7.4+OpenVPN-2.4.5+easy-rsa-3.0](https://blog.51cto.com/songky/2115052?articleABtest=1)

### 按照

cd 
mkdir openvpn
cd openvpn

wget https://swupdate.openvpn.org/community/releases/openvpn-2.6.6.tar.gz

tar -zxf openvpn-<version>.tar.gz
cd openvpn-<version>
./configure

报错：
configure: error: libnl-genl-3.0 package not found or too old. Is the development package and pkg-config installed? Must be version 3.4.0 or newer for DCO

解决：
wget http://www.infradead.org/~tgr/libnl/files/libnl-3.2.25.tar.gz
