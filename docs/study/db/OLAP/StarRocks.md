#### 背景信息

Doris 最早是解决百度凤巢统计报表的专用系统，随着百度业务的飞速发展对系统进行了多次迭代，逐渐承担起百度内部业务的统计报表和多维分析需求。2013 年，我们把 Doris 进行了 MPP 框架的升级，并将新系统命名为 Palo ，2017 年我们以百度 Palo 的名字在 GitHub 上进行了开源，2018 年贡献给 Apache 基金会时，由于与国外数据库厂商重名，因此选择用回最初的名字，这就是 Apache Doris 的由来。

2020 年 2 月，百度 Doris 团队的个别同学离职创业，基于 Apache Doris做了自己的商业化闭源产品 DorisDB ，这就是 StarRocks 的前身。

【总结】Doris属于百度的，Apache Doris是有百度贡献给Apache 的，DorisDB是百度前员工基于Apache Doris做的商业版本属于另外的公司，后面因为版权的问题，将DorisDB改名为StarRocks，所以StarRocks和DorisDB是属于一个产品，一个公司的。不知道小伙伴，还记不记得另外一个产品的经历跟Doris的经历非常的相似，那就是presto。这里主要讲StarRocks，因为StarRocks更新迭代很快，活跃度也高。

Apache Doris GitHub地址：[https://github.com/apache/doris](https://github.com/apache/doris)
Apache Doris 官网文档：[https://doris.apache.org/docs/get-starting/get-starting.html](https://doris.apache.org/docs/get-starting/get-starting.html)

StarRocks GitHub地址：[https://github.com/StarRocks/starrocks](https://github.com/StarRocks/starrocks)
StarRocks官方文档：[https://docs.starrocks.com/zh-cn/main/introduction/StarRocks_intro](https://docs.starrocks.com/zh-cn/main/introduction/StarRocks_intro)

#### 概述

StarRocks 是一款高性能分析型数据仓库，使用向量化、MPP（Massively Parallel Processing：大规模并行处理） 架构、可实时更新的列式存储引擎等技术实现多维、实时、高并发的数据分析。StarRocks 既支持从各类实时和离线的数据源高效导入数据，也支持直接分析数据湖上各种格式的数据。StarRocks 兼容 MySQL 协议，可使用 MySQL 客户端和常用 BI 工具对接。同时 StarRocks 具备水平扩展，高可用，高可靠，易运维等特性。广泛应用于实时数仓、OLAP 报表、数据湖分析等场景。
