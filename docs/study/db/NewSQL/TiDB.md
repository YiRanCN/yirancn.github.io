### 背景

#### 替换 MySQL Sharding(分片) 作为主生产数据库


这个场景其实是 TiDB 设计的初衷，在单机 MySQL 数据量太大后，过去能选的基本就是分库分表，再分不开的话就只能 Sharding，但是分库分表、Sharding，其实不管是维护成本和开发改造成本都很高，所以 TiDB 给这些用户提供了一个可以弹性扩展的，用起来就像单机 MySQL 一样的，支持事务和复杂查询的分布式数据库，同时还支持多副本自动的高可用，当然很爽。

这部分用户一般一开始上线前都会用 TiDB 的 [Syncer](https://link.zhihu.com/?target=https%3A//github.com/pingcap/docs-cn/blob/master/tools/syncer.md)， 将 TiDB 集群作为线上 MySQL 的从库，实时同步线上的 MySQL 主库，观察一段时间稳定性兼容性、进行压力测试后，直接将线上库指向 TiDB，不用修改一行代码。

#### 替换 HBase/C*/ES 等 NoSQL 数据库


这类用户主要是过去用着 NoSQL，希望在拥有弹性伸缩能力，可以线性扩展的实时并发写入能力，再能拥有更强大的查询能力，比如二级索引点查，比如复杂的 Join 支持。典型的应用场景是客服查询，User profile 系统等等。
通常这类用户的数据量巨大，可能单库都有上百 T，TiDB 能很好的满足：

1. 大海捞针式的精准查询
2. Ad-hoc 分析

这一切都是在不牺牲实时写入能力的同时拥有的。

#### 使用 TiDB 作为 HTAP 数据库（实时事务+实时分析）


这类用户是在刚开始做 TiDB 的时候完全没想到的，随着 TiDB 的 SQL 能力越来越强，并且随着 TiDB 的子项目 TiSpark 的发布，让用户在拥有关系数据库的事务写入能力同时可以在同一份数据上进行复杂的分析；这类用户一般用 Syncer 将所有线上生产数据库同步到一个大的 TiDB 集群上（Syncer 支持多源同步，合并分库分表等功能），然后直接在这个 TiDB Cluster 上通过 TiDB 或者 TiSpark 进行分析。

### 简介

TiDB 是 PingCAP 公司设计的开源分布式 HTAP (Hybrid Transactional and Analytical Processing) 数据库，结合了传统的 RDBMS 和 NoSQL 的最佳特性。TiDB 兼容 MySQL，支持无限的水平扩展，具备强一致性和高可用性。TiDB 的目标是为 OLTP (Online Transactional Processing) 和 OLAP (Online Analytical Processing) 场景提供一站式的解决方案。

TiDB 具备如下特性：

- 高度兼容 MySQL
大多数情况下，无需修改代码即可从 MySQL 轻松迁移至 TiDB，分库分表后的 MySQL 集群亦可通过 TiDB 工具进行实时迁移。
- 水平弹性扩展
通过简单地增加新节点即可实现 TiDB 的水平扩展，按需扩展吞吐或存储，轻松应对高并发、海量数据场景。
- 分布式事务
TiDB 100% 支持标准的 ACID 事务。
- 真正金融级高可用
相比于传统主从 (M-S) 复制方案，基于 Raft 的多数派选举协议可以提供金融级的 100% 数据强一致性保证，且在不丢失大多数副本的前提下，可以实现故障的自动恢复 (auto-failover)，无需人工介入。
- 一站式 HTAP 解决方案
TiDB 作为典型的 OLTP 行存数据库，同时兼具强大的 OLAP 性能，配合 TiSpark，可提供一站式 HTAP 解决方案，一份存储同时处理 OLTP & OLAP，无需传统繁琐的 ETL 过程。
- 云原生 SQL 数据库
TiDB 是为云而设计的数据库，支持公有云、私有云和混合云，使部署、配置和维护变得十分简单。

TiDB 的设计目标是 100% 的 OLTP 场景和 80% 的 OLAP 场景，更复杂的 OLAP 分析可以通过 TiSpark 项目来完成。

TiDB 对业务没有任何侵入性，能优雅的替换传统的数据库中间件、数据库分库分表等 Sharding 方案。同时它也让开发运维人员不用关注数据库 Scale 的细节问题，专注于业务开发，极大的提升研发的生产力。

三篇文章了解 TiDB 技术内幕：

- [说存储](https://pingcap.com/blog-cn/tidb-internal-1/)
- [说计算](https://pingcap.com/blog-cn/tidb-internal-2/)
- [谈调度](https://pingcap.com/blog-cn/tidb-internal-3/)

### 目前状况(V3.0)

TiDB 目前还不支持触发器、存储过程、自定义函数、外键，除此之外，TiDB 支持绝大部分 MySQL 5.7 的语法。
