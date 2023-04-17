### jstat
#### about
jstat [Options] pid [interval] [count]
pid，当前运行的 java进程号 

interval，间隔时间，单位为秒或者毫秒 

count，打印次数，如果缺省则打印无数次
#### options
l  class (类加载器) 
l  compiler (JIT) 
l  gc (GC堆状态) 
l  gccapacity (各区大小) 
l  gccause (最近一次GC统计和原因) 
l  gcnew (新区统计)
l  gcnewcapacity (新区大小)
l  gcold (老区统计)
l  gcoldcapacity (老区大小)
l  gcpermcapacity (永久区大小)
l  gcutil (GC统计汇总)
l  printcompilation (HotSpot编译统计)

```shell
#
jstat -gcutil 22573 5000
```

### 参考

1. [jstat命令详解](https://blog.csdn.net/zhaozheng7758/article/details/8623549)
