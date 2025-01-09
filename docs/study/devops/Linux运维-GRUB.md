### GRUB

/etc/default/grub是一个在基于 Linux 的系统（如 Ubuntu、Debian 等）中用于配置 GRUB（GRand Unified Bootloader）引导加载程序的重要文件。GRUB 是大多数 Linux 系统用于引导操作系统内核启动的工具，它可以识别不同的操作系统和内核版本，并在启动时提供一个菜单让用户选择启动项。

这个文件包含了许多用于定制 GRUB 行为的配置选项，这些选项会在系统启动过程中被读取并应用，以确定如何加载和启动内核以及相关的初始化程序。

可以设置内核参数

如果Docker info返回WARNING: No swap limit support 可以通过此设置解决

```shell
# 查询系统是否启用了swap memory
/sys/fs/cgroup/memory/memory.swappiness
# 不一定有 不准 主要还得看上面的
cat /proc/cmdline
```