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

### 参考

[参考 1](https://developer.aliyun.com/article/272173)
