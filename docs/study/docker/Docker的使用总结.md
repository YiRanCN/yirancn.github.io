1. Docker命令详解(run篇) 链接
2. 搜索版本号 [https://hub.docker.com](https://hub.docker.com)
3. 脚本搜索版本号 [docker-tags](https://blog.csdn.net/CodyGuo/article/details/86515354)
4. Dcoker数据源，修改文件 /etc/docker/daemon.json
```json

{ 
	"registry-mirrors": ["https://registry.docker-cn.com","http://hub-mirror.c.163.com","https://docker.mirrors.ustc.edu.cn"] 
}


```
### 常用命令大全

![1.png](./imgs/1.png)

```shell
#获取某个docker容器的IP地址
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id
```

### 修改容器配置

```shell
/var/lib/docker/containers/[hash_of_the_container]/hostconfig.json
systemctl restart docker
#此种方法 我试验了，貌似不行，有空再实验一下
```

### 容器自动启动

```shell
docker run  --restart=always 
#no -  容器退出时，不重启容器；
#on-failure - 只有在非0状态退出时才从新启动容器；
#always - 无论退出状态是如何，都重启容器；
#如果创建时未指定 --restart=always ,可通过update 命令
docker update --restart=always xxx
docker update --restart=always api
docker update --restart=always redis
docker update --restart=always es
#
docker update --restart=no es-usr.2
```


### 安装

```shell
#安装方式一
yum install docker
systemctl start docker

#安装方式二
mkdir -p /root/deploy
cd /root/deploy
wget https://ucloud-deploy.oss-cn-shanghai.aliyuncs.com/docker/docker-engine-1.13.1-1.el7.centos.x86_64.rpm
wget https://ucloud-deploy.oss-cn-shanghai.aliyuncs.com/docker/docker-engine-selinux-1.13.1-1.el7.centos.noarch.rpm
yum -y localinstall docker-engine-selinux-1.13.1-1.el7.centos.noarch.rpm
yum -y localinstall docker-engine-1.13.1-1.el7.centos.x86_64.rpm
systemctl start docker
systemctl status docker
```


### jenkins

```shell


docker pull jenkins

#mkdir -p /mnt/docker/jenkins/jenkins_home
mkdir -p ~/Documents/docker/jenkins/jenkins_home

docker run --name jenkins -p 8080:8080 -p 50000:50000 -v ~/Documents/docker/jenkins/jenkins_home:/var/jenkins_home -d jenkins:latest


#查看管理员密码
docker logs jenkins
#62a9ddd49d9b4a6db5fabaedb430b13f




```


### nexus

```shell

mkdir -p /mnt/docker/nexus/nexus-data
mkdir -p ~/Documents/docker/nexus/nexus-data

docker pull sonatype/nexus3 


docker run -d --name nexus3 \
 --restart=always \
-p 8081:8081 \
-p 8082:8082  \
-p 8083:8083  \
-p 8084:8084  \
-p 8085:8085   \
-v /mnt/docker/nexus/nexus-data:/nexus-data \
sonatype/nexus3


docker run -d --name nexus3 \
 --restart=always \
-p 8081:8081 \
-p 8082:8082  \
-p 8083:8083  \
-p 8084:8084  \
-p 8085:8085   \
-v ~/Documents/docker/nexus/nexus-data:/nexus-data \
sonatype/nexus3

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
[参考1](https://developer.aliyun.com/article/272173)

