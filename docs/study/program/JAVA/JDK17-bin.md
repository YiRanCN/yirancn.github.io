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

### jconsole

jconsole 提供了可视化的方式来获取有关 Java 应用程序的各种信息，包括内存使用情况、线程活动、GC 行为等重要指标。它还允许远程连接到运行中的 Java 进程，提供对远程应用程序的监控和管理能力。

### jdb

### jdeprscan

### jdeps

### jfr

### jhsdb

### jimage

### jinfo

Java Configuration Info ：查看配置参数信息，支持部分参数运行时修改

### jlink

### jmap

Java Memory Map ：分析堆内存工具，导出 dump 堆内存快照

```shell
jmap -dump:live,format=b,file=heap.bin <pid>
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
