### 字符集问题

```shell
# 安装字符集
dnf install -y glibc-all-langpacks
# 查询所有安装的字符集
locale -a
# 设置字符集
export LANG="en_US.utf8"
```

### yum源问题

- https://blog.csdn.net/lxcw_sir/article/details/140185068