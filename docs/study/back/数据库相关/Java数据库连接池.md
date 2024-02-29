### Java 数据库连接池

是用于管理数据库连接的软件组件，它们提供了连接的创建、管理和释放等功能，以提高数据库访问的效率和性能。

目前，流行的 Java 数据库连接池包括：

- DBCP：DBCP 是 Apache 开源组织提供的连接池实现，它直接依赖于 Jakarta commons-pool 对象池机制。DBCP 支持 JNDI 数据源和 JDBC 数据源，并且可以直接在应用程序中使用。Tomcat 的数据源就是使用的 DBCP。
- C3P0：C3P0 是一个老牌的 Java 数据库连接池，它实现了 JDBC 3 和 JDBC 4 的规范，支持 JNDI 数据源和 JDBC 数据源。C3P0 连接池可以配置多种参数进行调优，并支持自动回收空闲连接。
- HikariCP：HikariCP 是一个轻量级、高效的连接池，它在高并发环境下表现出色。HikariCP 支持 JNDI 数据源和 JDBC 数据源，并具有超时线程等配置参数。
- Tomcat-JDBC：Tomcat-JDBC 是 Tomcat 服务器提供的 JDBC 连接池实现，它与 Tomcat 服务器紧密集成，适用于 Tomcat 应用场景。
- Druid：Druid 是阿里巴巴开发的数据库连接池，它支持 JNDI 数据源和 JDBC 数据源，并且提供了实时监控功能。Druid 不仅仅是一个数据库连接池，它还包括一个 ProxyDriver，一系列内置的 JDBC 组件库，一个 SQL Parser。它支持所有 JDBC 兼容的数据库，包括 Oracle、MySQL、Derby、PostgreSQL、SQL Server、H2 等，并对 Oracle 和 MySQL 做了特别优化。

以上连接池各有特点，适用于不同的应用场景和数据库类型。
