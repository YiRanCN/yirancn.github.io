### 简介

kafka 最新定义为：分布式流式平台，而不是单纯的消息系统，更具有持久化、流处理的特点；主要处理两类应用：实时流数据管道和实时流应用程序。

实时流数据管道：举个例子 Kafka+ELK 处理日志；
实时流应用程序：举个例子 Kafka+报警模块 APP；
持久化，可以作为存储系统，每个消费者对每个 topic 都有一个 offset 来记录上次消费的位置；

### 常见使用场景

1. 消息，可以媲美 ActiveMQ 和 RabbitMQ；
2. 网站活动跟踪，数据>>Kafka>>ELK/Hbase/Hadoop；
3. 度量，运营监控数据；
4. 日志聚合，Kafka+ELK；
5. 流处理，从 0.10 开始，Kafka Streams 是一个轻量级但功能强大的流处理库；

### 常用命令

```shell
# 查看topic列表
./kafka-topics.sh --list --bootstrap-server localhost:9092
# 创建topic
./kafka-topics.sh --create --bootstrap-server localhost:9092 --topic xxx
# 创建生产者
./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic weic
# 创建消费者
./kafka-console-consumer.sh --bootstrap-server localhost:9092 \
--topic weic \
--from-beginning
```
