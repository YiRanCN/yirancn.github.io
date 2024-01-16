---
sidebar_position: 1
---

### 官方文档

[官网](https://www.influxdata.com/)
[学习笔记](https://blog.csdn.net/vtnews/article/details/80197045)

### 基础信息

1. 编程语言：Rust
2. 集群方案：非集群开源，集群收费
3. 影响力：影响力很大，社区也比较活跃，如果数据量没这么大，其实还可以的，最好不要做公有云用这个数据库，因为数据量大了之后，很难受，必须的上集群，但是集群是收费的。需要花大精力去处理集群问题。
4. 运维难度：非集群开源版本运维难度还是简单的。
5. 接口：InfluxQL and HTTP API
6. 开源协议：MIT

### 评价

1. InfluxDB 单机版本安装简单，维护也方便；运维人员少（1-3 个）数量少（1T 以下）的情况下是最合适的选择；
2. InfluxDB 单机版本性能并不够卓越，数据量超过 1T 存在性能瓶颈，QPS 超过 1K 后负载极高；
3. 开源版本不支持集群，拓展性不行；

### 常用概念

1. database，数据库
2. measurement，表
3. field，字段，field set，a=1，field 没有索引
4. tag，标签，tag set，b=1，tag 有索引
5. rp，retention policy，数据保留策略，滚动式，旧数据会删除，默认 autogen，永不删除
6. cq，continuous query，连续查询，类似存储过程，自动采样
7. series：series 是共同 retention policy，measurement 和 tag set 的集合。
8. point：point 是具有相同 timestamp、相同 series（measurement，rp，tag set 相同）的 field。这个点在此时刻是唯一存在的。
9. wal(Write Ahead Log) ，最近写的点数的临时缓存。为了减少访问永久存储文件的频率，InfluxDB 将最新的数据点缓冲进 WAL 中，直到其总大小或时间触发然后 flush 到长久的存储空间。这样可以有效地将写入 batch 处理到 TSM 中。

### 快速入门

```shell
# v2
wget https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.5-1.x86_64.rpm
sudo yum localinstall influxdb2-2.7.5-1.x86_64.rpm
sudo service influxdb start
sudo service influxdb status
# influx
wget https://dl.influxdata.com/influxdb/releases/influxdb2-client-2.7.3-linux-arm64.tar.gz
tar xvzf ./influxdb2-client-2.7.3-linux-arm64.tar.gz
sudo cp ./influx /usr/local/bin/


> create database mydb
> use mydb
> show measurements
> insert mymeasurement,tag1=value1 field1=value2
> select * from mymeasurement where tag1='value1'
> select * from mymeasurement
> select * from mymeasurement where tag1='value1' and field1 > 10 order by time desc limit 1
```

- [HTTP V1 API](https://docs.influxdata.com/influxdb/v1/tools/api/)
- [HTTP V2 API](https://docs.influxdata.com/influxdb/v2/api/)
- [V1 client java](https://github.com/influxdata/influxdb-java?tab=readme-ov-file)
- [V2 client java](https://github.com/influxdata/influxdb-client-java)

### 其他

- [InfluxDB CTO 关于编程语言 Go 切换到 RUST 的解释](https://old.reddit.com/r/rust/comments/16v13l5/influxdb_officially_made_the_switch_from_go_rust/)
