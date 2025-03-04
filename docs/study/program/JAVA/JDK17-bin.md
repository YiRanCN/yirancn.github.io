# JDK17-bin

### jar

操作 jar 文件，包括新建、查看内容、解压、添加文件等

### jarsigner

jarsigner 命令是 Java 开发工具中用于对 JAR 文件进行签名的重要工具之一。它通过数字签名实现身份验证和保证应用程序的完整性，提供了应用程序发布和分发的安全性。但它也引入了额外的复杂性和一些操作步骤。通过理解和正确使用 jarsigner，可以提高 Java 应用程序的安全性和用户的信任度。

总的来说，jarsigner 为 Java 应用程序提供了一种有效的方式来验证应用程序的来源和完整性，帮助建立用户和开发者之间的信任关系。

### java

### javac

### javadoc

### javap

解释：

javap：是 Java 的类文件反汇编器，用于解析 .class 文件并输出其信息。

-private：显示所有类和成员，包括私有的。如果你只想看公共的，可以使用 -public 选项。

-classpath your-jar-file.jar：指定类路径，也就是你的 JAR 包的位置。

com.example.YourClass：是你要查看的类的全限定名。

```shell
javap -private -classpath etcdwrapper-2.6.4.2-SNAPSHOT.jar com.sansec.ccsp.ServiceEtcdStub
```
### jcmd

```shell
# 列出所有 Java 进程
# 如果查询不到，可能是ll /tmp/hsperfdata_ccsp下的临时文件被删除了
jcmd -l
# 查看命令帮助信息 有很多
jcmd <pid> help
# 生成堆转储文件 可以使用Java Visual VM分析
jcmd <pid> GC.heap_dump <filename>
jcmd 1234 GC.heap_dump /path/to/heapdump.hprof
# 执行垃圾回收
jcmd <pid> GC.run
# 查看堆内存信息
jcmd <pid> GC.heap_info
# 查看类加载信息
jcmd <pid> VM.classloader_stats
# 查看 JVM 配置信息
jcmd <pid> VM.flags
# 返回信息：-XX:CICompilerCount=3 -XX:InitialHeapSize=249561088 -XX:MaxHeapSize=3990880256 -XX:MaxNewSize=1330118656 -XX:MinHeapDeltaBytes=524288 -XX:NewSize=82837504 -XX:OldSize=166723584 -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseParallelGC 
# 查看线程堆栈信息
jcmd <pid> Thread.print
#
jcmd <pid> VM.command_line
# VM.native_memory 注意启动java进程需要增加参数-XX:NativeMemoryTracking=detail，且这个参数必须在java命令后的第一位置
# [options]：可选参数，用于指定输出的详细程度和其他选项，常见的选项有：
# summary：以摘要形式输出本地内存使用情况，这是默认选项。
# detail：以详细模式输出，会展示更多关于本地内存分配的信息。
# baseline：创建一个内存使用的基线，后续可以使用 diff 选项与该基线进行比较。
# diff：与之前创建的基线进行比较，显示内存使用的变化情况。
# scale=[KB|MB|GB]：指定输出内存大小的单位，默认是字节。
jcmd <pid> VM.native_memory [options]
```

### jconsole

jconsole 提供了可视化的方式来获取有关 Java 应用程序的各种信息，包括内存使用情况、线程活动、GC 行为等重要指标。它还允许远程连接到运行中的 Java 进程，提供对远程应用程序的监控和管理能力。

### jdb

### jdeprscan

### jdeps

### jfr

Java Flight Recorder（JFR）是Java虚拟机（JVM）内置的性能分析工具，用于收集和分析Java应用程序的运行时数据。JFR能够以极低的性能开销记录应用程序的运行状态，帮助开发者和运维人员诊断性能问题、内存泄漏、线程争用等。

### jhsdb

### jimage

### jinfo

Java Configuration Info ：查看配置参数信息，支持部分参数运行时修改

### jlink

### jmap

Java Memory Map ：分析堆内存工具，导出 dump 堆内存快照

```shell
# 导出文件后 可以使用JDK自带的Java Visual VM加载打开
jmap -dump:format=b,file=./heapdump.hprof <pid>
```

### jmod

### jpakcage

### jps

JVM Process status tool：JVM 进程状态工具，查看进程基本信息

用的不多

### jrunscript

### jshell

### jstack

Java Stack Trace ：Java 堆栈跟踪工具

可以生成 JVM 当前时刻的线程快照，生成线程快照的主要目的是定位线程出现长时间停顿的原因，如线程间死锁、死循环、请求外部资源导致的长时间等待等。

```shell
jstack -l {PID} > jstack-dump.log
```

然后 放到 [fastthread.io](https://fastthread.io/) 分析

### jstat

JVM statistics monitoring tool ： JVM 统计监控工具，查看堆，GC 详细信息

先用他分析 GC 问题，包括 GC 次数、GC 时间、GC 原因、GC 前后堆内存变化

### jstatd

### keytool

### rmiregistry

### serialver

### 其他分析工具

- [VisualVM](https://visualvm.github.io/) 远程需要配合 jstatd 使用
- [GCEasy：免费 GC 日志可视化分析 Web 工具](https://gceasy.io/)
- [Eclipse MAT：Memory Analyzer Tool 可视化内存分析工具](https://eclipse.dev/mat/downloads.php)
- [GCViewer：开源的 GC 日志分析工具](https://github.com/chewiebug/GCViewer)
- [ Alibaba Arthas：线上 Java 程序诊断工具，功能非常强大](https://github.com/alibaba/arthas/blob/master/README_CN.md)
