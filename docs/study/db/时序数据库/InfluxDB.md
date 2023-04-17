---
sidebar_position: 1
---
### 官方文档

[官网](https://www.influxdata.com/)
[学习笔记](https://blog.csdn.net/vtnews/article/details/80197045)

### 基础信息

1. 编程语言：golang
2. 集群方案：非集群开源，集群收费
3. 影响力：影响力很大，社区也比较活跃，如果数据量没这么大，其实还可以的，最好不要做公有云用这个数据库，因为数据量大了之后，很难受，必须的上集群，但是集群是收费的。需要花大精力去处理集群问题。
4. 运维难度：非集群开源版本运维难度还是简单的。
5. 接口：InfluxQL and HTTP API
6. 开源协议：MIT

### 评价

1. InfluxDB单机版本安装简单，维护也方便；运维人员少（1-3个）数量少（1T以下）的情况下是最合适的选择；
2. InfluxDB单机版本性能并不够卓越，数据量超过1T存在性能瓶颈，QPS超过1K后负载极高；
3. 开源版本不支持集群，拓展性不行；

### 常用概念

1. database，数据库
2. measurement，表
3. field，字段，field set，a=1，field没有索引
4. tag，标签，tag set，b=1，tag有索引
5. rp，retention policy，数据保留策略，滚动式，旧数据会删除，默认autogen，永不删除
6. cq，continuous query，连续查询，类似存储过程，自动采样
7. series：series是共同retention policy，measurement和tag set的集合。
8. point：point是具有相同timestamp、相同series（measurement，rp，tag set相同）的field。这个点在此时刻是唯一存在的。
9. wal(Write Ahead Log) ，最近写的点数的临时缓存。为了减少访问永久存储文件的频率，InfluxDB将最新的数据点缓冲进WAL中，直到其总大小或时间触发然后flush到长久的存储空间。这样可以有效地将写入batch处理到TSM中。

