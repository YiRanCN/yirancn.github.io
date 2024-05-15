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

```shell
[root@f37c6d33715e /]# ipcs -ls

------ Semaphore Limits --------
max number of arrays = 128
max semaphores per array = 250
max semaphores system wide = 32000
max ops per semop call = 32
semaphore max value = 32767

[root@f37c6d33715e /]# cat  /proc/sys/kernel/sem
250     32000   32      128
```

```shell
修改 vi /etc/sysctl.conf 的以下参数
kernel.sem = 50100 128256000 50100 2560
sysctl -p 生效
重启数据库即可
docker cp ./postgresql.conf f37c6d33715e:/var/lib/opengauss/data/postgresql.conf
docker cp ./sysctl.conf f37c6d33715e:/etc/sysctl.conf
docker restart f37c6d33715e
docker ps -a | grep opengauss
/var/lib/opengauss/data/postgresql.conf
```