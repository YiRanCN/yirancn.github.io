# Docker Compose

### 定义

Docker 是一个开源的容器引擎，它有助于更快地交付应用。方便快捷已经是 Docker 的最大优势，过去需要用数天乃至数周的任务，在 Docker 容器的处理下，只需要数秒就能完成。

### 为什么要用 Docker

1. 一致的运行环境：Docker 的镜像提供了除内核外完整的运行时环境，确保了应用运行环境一致性。
2. 持续交付和部署：使用 Docker 可以通过定制应用镜像来实现持续集成、持续交付、部署。一次创建或配置，可以在任意地方正常运行。
3. 更轻松的迁移：Docker 确保了执行环境的一致性，使得应用的迁移更加容易。Docker 可以在很多平台上运行，无论是物理机、虚拟机、公有云、私有云，甚至是笔记本，其运行结果是一致的。
4. 更快速的启动时间：Docker 容器应用，由于直接运行于宿主内核，无需启动完整的操作系统，因此可以做到秒级、甚至毫秒级的启动时间。
5. 更高效的利用系统资源：由于容器不需要进行硬件虚拟以及运行完整操作系统等额外开销，Docker 对系统资源的利用率更高。

### Docker 基本组成

1. 镜像(Images)
2. 容器(Container)
3. 镜像仓库(Registry)

### 常用命令

1. docker ps
2. docker ps -a
3. docker start xxx
4. dcoker stop xxx
5. docker rm xxx
6. docker rmi xxx
7. docker save -o ./xxx.tar xxx 导出镜像
8. docker load -i xxx.tar 导入镜像
9. docker logs
10. docker inspect xxx 查看容器详细信息
11. docker port xxx 列出或指定容器端口映射
12. docker cp [dir] xxx:[dir]
13. docker diff xxx 查看容器和镜像的差异
14. docker kill 容器 id 强制停止容器
15. docker container logs 容器 id：查看容器日志
16. docker top 容器 id：查看容器里的进程

### Docker Compose

Docker Compose 是 docker 提供的一个命令行工具，用来定义和运行由多个容器组成的应用。使用 compose，我们可以通过 YAML 文件声明式的定义应用程序的各个服务，并由单个命令完成应用的创建和启动。

#### 安装

```shell
#需要先把python3和pip3安装好
pip3 install docker-compose
docker-compose --version
```

#### 常用命令

1. docker-compose up -d   后台启动
2. docker-compose ps/stop/start/restart/rm
3. docker-compose scale service=num  设置指定服务运行的容器个数。通过 service=num 的参数来设置数量

### 问题处理

1. [python 安装 pandas 库出现 No module named ‘\_lzma’](https://blog.csdn.net/sangfei18829896970/article/details/97754635)
2. [docker 之网络配置](https://blog.51cto.com/13362895/2130375)
3. [Docker 入门之 docker-compose](https://www.cnblogs.com/minseo/p/11548177.html)
