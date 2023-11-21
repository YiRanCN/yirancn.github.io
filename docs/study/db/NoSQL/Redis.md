### Redis 是什么

redis 是一个开源的、使用 C 语言编写的、支持网络交互的、可基于内存也可持久化的 Key-Value 数据库。[官网](https://redis.io)。

目前，Vmware 在资助着 redis 项目的开发和维护。

redis 的作者，他叫 Salvatore Sanfilippo，网名是 antirez，去他的博客逛逛，地址是 antirez.com，当然也可以去 follow 他的 github，地址是[http://github.com/antirez](http://github.com/antirez)。

Redis 是 K-V 存储的典型代表，它是一款开源（基于 BSD 许可）的高性能 K-V 缓存和存储系统。Redis 的 Value 是具体的数据结构，包括 string、hash、list、set、sorted set、bitmap 和 hyperloglog，所以常常被称为数据结构服务器。

### Redis 数据结构

redis 是一种高级的 key:value 存储系统，其中 value 支持五种数据类型：

1. 字符串（strings）
2. 字符串列表（lists）
3. 字符串集合（sets）
4. 有序字符串集合（sorted sets）
5. 哈希（hashes）
   1. hashes 存的是字符串和字符串值之间的映射，比如一个用户要存储其全名、姓氏、年龄等等，就很适合使用哈希。

key 的命名规则：

1. key 不要太长，尽量不要超过 1024 字节，这不仅消耗内存，而且会降低查找的效率；
2. key 也不要太短，太短的话，key 的可读性会降低；
3. 在一个项目中，key 最好使用统一的命名模式，例如 user:10000:passwd。

### Redis 持久化

redis 提供了两种持久化的方式，分别是 RDB（Redis DataBase）和 AOF（Append Only File）。

RDB，简而言之，就是在不同的时间点，将 redis 存储的数据生成快照并存储到磁盘等介质上；
AOF，则是换了一个角度来实现持久化，那就是将 redis 执行过的所有写指令记录下来，在下次 redis 重新启动时，只要把这些写指令从前到后再重复执行一遍，就可以实现数据恢复了。

其实 RDB 和 AOF 两种方式也可以同时使用，在这种情况下，如果 redis 重启的话，则会优先采用 AOF 方式来进行数据恢复，这是因为 AOF 方式的数据恢复完整度更高。

如果你没有数据持久化的需求，也完全可以关闭 RDB 和 AOF 方式，这样的话，redis 将变成一个纯内存数据库，就像 memcache 一样。

### Redis 主从

像 MySQL 一样，redis 是支持主从同步的，而且也支持一主多从以及多级从结构。

主从结构，一是为了纯粹的冗余备份，二是为了提升读性能，比如很消耗性能的 SORT 就可以由从服务器来承担。

redis 的主从同步是异步进行的，这意味着主从同步不会影响主逻辑，也不会降低 redis 的处理性能。

主从架构中，可以考虑关闭主服务器的数据持久化功能，只让从服务器进行持久化，这样可以提高主服务器的处理性能。

在主从架构中，从服务器通常被设置为只读模式，这样可以避免从服务器的数据被误修改。但是从服务器仍然可以接受 CONFIG 等指令，所以还是不应该将从服务器直接暴露到不安全的网络环境中。如果必须如此，那可以考虑给重要指令进行重命名，来避免命令被外人误执行。

### 参考资料

- [张彦飞-Redis 6 中的多线程实现方式比我预期的要差](https://zhuanlan.zhihu.com/p/523368070)
- [张彦飞-深度解析单线程的 Redis 如何做到每秒数万 QPS 的超高处理能力！](https://zhuanlan.zhihu.com/p/512502929)
