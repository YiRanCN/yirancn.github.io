### /etc/sysctl.conf

/etc/sysctl.conf是一个重要的 Linux 系统配置文件。

这个文件用于设置和调整 Linux 内核的各种参数。这些参数控制着系统的行为、性能和资源分配。

```shell
# 修改
vi /etc/sysctl.conf
# 修改完文件之后，执行此命令，立即生效
sysctl -p
# 查询
sysctl -a
# 临时修改，并没有落盘到/etc/sysctl.conf文件，重启后失效
sysctl -w xxxxx=yyy
```

常用的内核参数 

### /etc/profile /etc/bashrc

系统级别的配置文件、环境变量

所有用户都以这个为基础

修改后，需要重新登录

### ~/.bashrc ~/.bash_profile

用户级别的配置文件、环境变量

用户登录后，会执行这些文件