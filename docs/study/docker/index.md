---
sidebar_position: 1
---

# 概述

一种虚拟技术。

### windows/linux docker

- windows docker 宿主机 可以运行 windows 和 linux 容器;
- linux docker 宿主机只能运行 linux 容器;
- windows 宿主机可以运行 linux 容器的原因是： windows 在后台创建了一个 Linux 子系统(WSL)，因此 Linux 容器仍在 Linux 上运行;

### 官方参考文档

- [官方参考文档](https://docs.docker.com/reference/)

没什么好的办法。把这个文档多读多实践，基本上也算半个专家了。

没事多看看，
docker --help
dockerd --hlep

### docker cli

- [docker cli 官方参考文档](https://docs.docker.com/reference/cli/docker/)

### docker engine api

- [docker engine api v1.45 官方参考文档](https://docs.docker.com/engine/api/v1.45/)

### docker 官方镜像库 docker hub

- [docker hub](https://hub.docker.com/)
- [docker hub-stage](https://hub-stage.docker.com/)
### docker 私有镜像仓库软件

- [harbor](https://github.com/goharbor/harbor)
- [docker官方私有registry](https://hub.docker.com/_/registry)
