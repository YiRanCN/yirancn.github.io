# Linux运维-自启

systemd和init是Linux系统中用于启动和管理系统的两个不同工具。

### init

它是Linux内核启动后的第一个用户进程，用于初始化和管理系统服务和守护进程。init使用service命令来管理服务，如启动、停止和重启服务。init的主要缺点是启动时间长，因为它在启动过程中是串行的，这意味着必须依次启动每个服务。此外，init的配置脚本较为复杂，需要自行处理各种情况，这可能导致脚本变得很长。

### systemd

它是较新的Linux系统守护进程管理工具，在CentOS 7及更高版本中，systemd取代了init作为系统的默认进程管理器。systemd提供了并行启动服务的能力，使用socket和D-Bus激活机制，这显著提高了系统的启动速度。systemd还支持SysV和LSB初始化脚本，并能够管理系统的各项功能，如日志记录、网络配置、电源管理等。systemd的核心概念包括基于依赖关系的服务控制和统一任务定义，这使得管理更加高效和简化。

### Docker systemd

- [Docker服务systemd配置文件详解](https://blog.csdn.net/qq_46207024/article/details/134006150)
- [配置 Docker 的 cgroup driver 为 systemd](https://zhuanlan.zhihu.com/p/633832183)