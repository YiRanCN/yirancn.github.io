# OpenGauss

官网 https://opengauss.org/zh/

文档 https://docs.opengauss.org/zh/

集群方案 https://docs.opengauss.org/zh/docs/5.0.0/docs/DatabaseAdministrationGuide/openGauss%E5%B8%B8%E8%A7%81%E4%B8%BB%E5%A4%87%E9%83%A8%E7%BD%B2%E6%96%B9%E6%A1%88%E7%AE%80%E4%BB%8B.html

对标的是PostgreSQL

### 常用的工具

- gsql 这是 OpenGauss 数据库的交互式客户端工具，用于连接数据库并执行 SQL 命令。\q（在 gsql 中使用）：用于退出gsql交互式客户端。
- gs_dump 用于备份数据库。
- gs_dumpall：用于备份整个数据库系统，包括所有数据库和用户信息等。
- gs_restore：用于恢复数据库备份。
- gs_om是 OpenGauss 数据库提供的一个重要的运维管理工具。它主要用于数据库**集群**的安装、启动、停止、状态查看以及配置管理等操作，帮助管理员高效地维护 OpenGauss 数据库环境。
  - gs_om --help 不同版本，可能参数不一样，使用此命令具体查看
  - gs_om -t start 它会按照预先配置的方式启动整个 OpenGauss 数据库集群。在启动过程中，gs_om会检查集群节点的状态，依次启动各个节点上的数据库服务。
  - gs_om -t stop 停止集群
  - gs_om -t status 查看集群状态
  - gs_om -t refreshconf 重新加载集群配置
- gs_ctl gs_ctl是 OpenGauss 数据库中的一个重要的控制工具。它主要用于对**单个数据库节点**进行管理和控制，包括启动、停止、重启数据库实例，以及检查数据库状态、故障恢复等操作。
  - gs_ctl --help 不同版本，可能参数不一样，使用此命令具体查看
  - gs_ctl start -D DATADIR 启动
  - gs_ctl stop -D DATADIR 停止
  - gs_ctl restart -D DATADIR 重启
  - gs_ctl status -D DATADIR 状态检查
  - gs_ctl reload -D DATADIR 重新加载配置文件，而无需重启
  - gs_ctl query -D DATADIR 查询节点信息
  - gs_ctl switchover -D DATADIR 在备节点执行，备节点会切换到主节点
  - cat postgresql.conf|grep -v '^\s*#'|grep -v "^$"  查看配置文件去掉注释行
- 物理备份 gs_basebackup
- 逻辑备份 gs_dump gs_dumpall，没有增量备份

### 如何查看版本

执行SQL，select version();

### 如何查看最大连接数

执行SQL，SELECT * FROM pg_settings WHERE name = 'max_connections';

### 如何修改最大连接数

修改postgresql.conf文件的max_connections参数

不一定会成功，需要查看日志或者再查询一遍看看效果





### 修改最大连接数报错 

```shell
2024-05-14 10:02:06.004 [unknown] [unknown] localhost 140450292528512 0[0:0#0]  0 [CACHE] LOG:  set data cache  size(402653184)
2024-05-14 10:02:06.247 [unknown] [unknown] localhost 140450292528512 0[0:0#0]  0 [BACKEND] FATAL:  could not create semaphores: No space left on device
2024-05-14 10:02:06.247 [unknown] [unknown] localhost 140450292528512 0[0:0#0]  0 [BACKEND] DETAIL:  Failed system call was semget(5432129, 17, 03600).
2024-05-14 10:02:06.247 [unknown] [unknown] localhost 140450292528512 0[0:0#0]  0 [BACKEND] HINT:  This error does *not* mean that you have run out of disk space.  It occurs when either the system limit for the maximum number of semaphore sets (SEMMNI), or the system wide maximum number of semaphores (SEMMNS), would be exceeded.  You need to raise the respective kernel parameter.  Alternatively, reduce openGauss's consumption of semaphores by reducing its max_connections parameter.
        The openGauss documentation contains more information about configuring your system for openGauss.
2024-05-14 10:02:06.247 [unknown] [unknown] localhost 140450292528512 0[0:0#0]  0 [BACKEND] BACKTRACELOG:  tid[1]'s backtrace:
        gaussdb(+0xe3a41e) [0x55c87d3c041e]
        gaussdb(_Z9errfinishiz+0x441) [0x55c87d3b8651]
        gaussdb(+0xbb6618) [0x55c87d13c618]
        gaussdb(_Z17PGSemaphoreCreateP15PGSemaphoreData+0x9c) [0x55c87d13c93c]
        gaussdb(_Z14InitProcGlobalv+0x7dd) [0x55c87e18bddd]
        gaussdb(_Z31CreateSharedMemoryAndSemaphoresbi+0x3a5) [0x55c87e165605]
        gaussdb(_Z14PostmasterMainiPPc+0x183f) [0x55c87d982a4f]
        gaussdb(main+0x3f2) [0x55c87ce545f2]
        /usr/lib64/libc.so.6(+0x2d210) [0x7fbd21d16210]
        /usr/lib64/libc.so.6(__libc_start_main+0x7c) [0x7fbd21d162bc]
        gaussdb(_start+0x25) [0x55c87cec57f5]
        Use addr2line to get pretty function name and line

2024-05-14 10:02:06.342 [unknown] [unknown] localhost 140450292528512 0[0:0#0]  0 [BACKEND] LOG:  FiniNuma allocIndex: 0.
```

上面的报错是因为宿主机的信号量设置的太小了

```shell
# 在宿主机执行 查看信号量相关设置
sysctl -a|grep sem
ipcs -ls
cat  /proc/sys/kernel/sem
# 结果如下
------ Semaphore Limits --------
max number of arrays = 128
max semaphores per array = 250
max semaphores system wide = 32000
max ops per semop call = 32
semaphore max value = 32767
```

```shell
#修改 vi /etc/sysctl.conf 的以下参数
kernel.sem = 50100 128256000 50100 2560
#
sysctl -p 生效
#重启数据库即可
```

### rdtscp指令集问题

OpenEluer确保安装rdtscp指令集，否则无法安装OpenGauss数据库

```shell
# 如何查看当前系统是否执行rdtscp
cat /boot/config-$(uname -r) | grep TSC
cat /boot/config-$(uname -r) | grep PERF_EVENT
```

### 商业发行版

https://www.mogdb.io/  https://enmotech.com/

MogDB是云和恩墨基于openGauss开源数据库进行完善增强的企业发行版。它围绕高性能、高可用、全密态、自动化运维、多数据库兼容等企业需求，应对企业用户需求新一代数据库的应用场景。其核心价值是高安全、高性能、高兼容、易运维和全天候的企业支持。

https://www.vastdata.com.cn/ 海量数据

Vastbase G100 基于openGauss内核的企业级关系型数据库

### shell通过gsql查询

```shell
# 
echo -e "\pset format unaligned\nSHOW ALL;" > show_all.sql
# 通过此种方式查询出来的数据的格式很好看的
gsql -p 5432 -U sansec -W passwordxxx -f show_all.sql
```


