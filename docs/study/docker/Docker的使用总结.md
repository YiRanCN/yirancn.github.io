1. Docker 官方仓库  [https://hub.docker.com](https://hub.docker.com)
2. 脚本搜索版本号  [docker-tags](https://blog.csdn.net/CodyGuo/article/details/86515354)

### 修改镜像源

/etc/docker/daemon.json

```json
{
  "registry-mirrors": ["https://registry.docker-cn.com", "http://hub-mirror.c.163.com", "https://docker.mirrors.ustc.edu.cn"]
}
```

```shell
docker info | grep Reg
```

### 常用命令大全

docker --help

![1.png](./imgs/1.png)

### 获取某个 docker 容器的 IP 地址

```shell
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id
```

### 容器自动启动

```shell
docker run  --restart=always
#no -  容器退出时，不重启容器；
#on-failure - 只有在非0状态退出时才从新启动容器；
#always - 无论退出状态是如何，都重启容器；
#如果创建时未指定 --restart=always ,可通过update 命令
docker update --restart=always container_name_or_id
docker update --restart=no container_name_or_id
```

### 容器时区问题

```shell
# 创建容器的时候加上这个参数 会让容器采用宿主机的时区
-v /etc/localtime:/etc/localtime
```

### 查看和清除容器日志

```shell
#
ls -lh $(find /var/lib/docker/containers/ -name *-json.log)
#
truncate -s 0 /var/lib/docker/containers/*/*-json.log
#用于查看Docker的磁盘使用情况
docker system df
#用于查看Docker的磁盘使用情况 详细情况
docker system df -v
#用于清理磁盘，删除关闭的容器、无用的数据卷和网络，以及dangling镜像（即无tag的镜像）
docker system prune
#清理得更加彻底，可以将没有容器使用Docker镜像都删掉。
docker system prune -a
```

### 版本太低 需要升级

```shell
# docker build 报错如下
is not a valid repository/tag: invalid reference format
# 检查版本 docker 版本太低
docker version


# 卸载旧版本
yum -y remove docker*
# 安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的
sudo yum install -y yum-utils
# 设置yum源
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# 安装docker
yum install docker-ce docker-ce-cli containerd.io
# 配置国内docker镜像源
mkdir -p /etc/docker
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": [
  "https://kfwkfulq.mirror.aliyuncs.com",
  "https://2lqq34jg.mirror.aliyuncs.com",
  "https://pee6w651.mirror.aliyuncs.com",
  "https://registry.docker-cn.com",
  "http://hub-mirror.c.163.com"
  ],
  "dns": ["8.8.8.8","8.8.4.4"]
}
EOF
# 重启docker
systemctl daemon-reload
systemctl restart docker
# 验证docker版本
docker version
```

### run后保持运行状态

```shell
#
docker run -tid \
--privileged=true \
--name test-ubuntu \
ubuntu
#
docker run -tid \
--privileged=true \
--name test-nginx \
nginx:stable-alpine3.17-slim
```

### 绑定随机端口

```shell
#
docker run -tid \
-p :80 \
--privileged=true \
--name test-ubuntu \
ubuntu
# 重启之后 随机的端口会换掉
docker port test-ubuntu
# 重启之后 随机的端口会换掉
docker restart test-ubuntu
# 重启之后 随机的端口会换掉
docker port test-ubuntu
```

### dcoker save/load 保存和加载镜像

对镜像的保存和加载

### docker export/import 导出和导入容器

对容器的导出和导入

### Linux修改网络后，导致Docker容器网络出现问题

- [csdn-Linux重启网络后导致容器网络无法连接的解决办法](https://blog.csdn.net/m0_61230499/article/details/137916082)
  
### Docker容器生成镜像

```shell
docker   commit -m="描述信息" -a="作者" 容器id 目标镜像名： [TAG]
docker commit -m="test" -a="weic" ccsp-kms-6732855048744075908 kmstest:20016-1
docker commit -m="test" -a="weic" ccsp-kms-6727922143110496901 kmstest:20016-2
```

也可以用于容器端口修改，先把容器生成镜像，然后再根据镜像重新创建容器

146

```shell
docker run \
-td \
-p 10.0.101.146:23000:20100 \
-p 10.0.101.146:23004:20102 \
-p 10.0.101.146:23001:20121 \
-p 10.0.101.146:23002:20122 \
-p 10.0.101.146:23003:20134 \
-p 10.0.101.146:20016:20016 \
--name ccsp-kms-6681579207347144964-c \
kmstest:20016-1 \
/bin/bash -c "sh /opt/sansec/ccsp/startService.sh&bash"
```

```shell
docker run \
-td \
-p 10.0.101.146:23005:20100 \
-p 10.0.101.146:23009:20102 \
-p 10.0.101.146:23006:20121 \
-p 10.0.101.146:23007:20122 \
-p 10.0.101.146:23008:20134 \
-p 10.0.101.146:20017:20016 \
--name ccsp-kms-6727922143110496901-c \
kmstest:20016-2 \
/bin/bash -c "sh /opt/sansec/ccsp/startService.sh&bash"
```

cce926337c3f   ccsp-kms-openeuler-x86:3.3.1.4.30          "/bin/bash -c 'sh /o…"   43 hours ago    Up 43 hours                   10.0.101.146:23005->20100/tcp, 10.0.101.146:23009->20102/tcp, 10.0.101.146:23006->20121/tcp, 10.0.101.146:23007->20122/tcp, 10.0.101.146:23008->20134/tcp                                  ccsp-kms-6727922143110496901

147

```shell
#147
docker commit -m="test" -a="weic" ccsp-kms-6727095949277135749 kmstest:20016-1
docker commit -m="test" -a="weic" ccsp-kms-6725254558919033737 kmstest:20016-2
#
docker run \
-td \
-p 10.0.101.147:23000:20100 \
-p 10.0.101.147:23004:20102 \
-p 10.0.101.147:23001:20121 \
-p 10.0.101.147:23002:20122 \
-p 10.0.101.147:23003:20134 \
-p 10.0.101.147:20016:20016 \
--name ccsp-kms-6727095949277135749-c \
kmstest:20016-1 \
/bin/bash -c "sh /opt/sansec/ccsp/startService.sh&bash"
#
docker run \
-td \
-p 10.0.101.147:23009:20100 \
-p 10.0.101.147:23013:20102 \
-p 10.0.101.147:23010:20121 \
-p 10.0.101.147:23011:20122 \
-p 10.0.101.147:23012:20134 \
-p 10.0.101.147:20017:20016 \
--name ccsp-kms-6725254558919033737-c \
kmstest:20016-2 \
/bin/bash -c "sh /opt/sansec/ccsp/startService.sh&bash"
```

101

```shell
#147
docker commit -m="test" -a="weic" ccsp-kms-6721501946679004930 kmstest:20016-1
docker commit -m="test" -a="weic" ccsp-kms-6719261535470749060 kmstest:20016-2
#
docker run \
-td \
-p 10.0.101.147:23000:20100 \
-p 10.0.101.147:23008:20102 \
-p 10.0.101.147:23001:20121 \
-p 10.0.101.147:23002:20122 \
-p 10.0.101.147:23003:20134 \
-p 10.0.101.147:20016:20016 \
--name ccsp-kms-6721501946679004930-c \
kmstest:20016-1 \
/bin/bash -c "sh /opt/sansec/ccsp/startService.sh&bash"
#
docker run \
-td \
-p 10.0.101.147:23004:20100 \
-p 10.0.101.147:23014:20102 \
-p 10.0.101.147:23005:20121 \
-p 10.0.101.147:23006:20122 \
-p 10.0.101.147:23007:20134 \
-p 10.0.101.147:20017:20016 \
--name ccsp-kms-6719261535470749060-c \
kmstest:20016-2 \
/bin/bash -c "sh /opt/sansec/ccsp/startService.sh&bash"
```

106

```shell
#147
docker commit -m="test" -a="weic" ccsp-kms-6721772595620220678 kmstest:20016-1
docker commit -m="test" -a="weic" ccsp-kms-6719405569719275266 kmstest:20016-2
#
docker run \
-td \
-p 10.0.101.147:23000:20100 \
-p 10.0.101.147:23009:20102 \
-p 10.0.101.147:23001:20121 \
-p 10.0.101.147:23002:20122 \
-p 10.0.101.147:23003:20134 \
-p 10.0.101.147:20016:20016 \
--name ccsp-kms-6721772595620220678-c \
kmstest:20016-1 \
/bin/bash -c "sh /opt/sansec/ccsp/startService.sh&bash"
#
docker run \
-td \
-p 10.0.101.147:23004:20100 \
-p 10.0.101.147:23008:20102 \
-p 10.0.101.147:23005:20121 \
-p 10.0.101.147:23006:20122 \
-p 10.0.101.147:23007:20134 \
-p 10.0.101.147:20017:20016 \
--name ccsp-kms-6719405569719275266-c \
kmstest:20016-2 \
/bin/bash -c "sh /opt/sansec/ccsp/startService.sh&bash"
```

### 参考

[参考 1](https://developer.aliyun.com/article/272173)
