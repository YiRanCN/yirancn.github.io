### JPA

- JPA 是 Java Persistence API 的简称，中文名 Java 持久层 API 。
- 是 Java EE 5.0 平台标准的 ORM 规范，使得应用程序以统一的方式访问持久层。既然是规范，那肯定就需要技术来实现这个规范，所以 Hibernate3.2+、TopLink 10.1.3 以及 OpenJPA 都提供了 JPA 的实现。

### MyBatis

- MyBatis 是支持普通 SQL 查询，存储过程和高级映射的优秀持久层框架。
- MyBatis 消除了几乎所有的 JDBC 代码和参数的手工设置以及结果集的检索。
- MyBatis 使用简单的 XML 或注解用于配置和原始映射，将接口和 Java 的 POJOs（Plain Ordinary Java Objects，普通的 Java 对象）映射成数据库中的记录。

### 两者对比

- MyBatis 没有实现 JPA 规范，属于半自动 ORM 映射工具，在 MyBatis 中，程序员需要自己编写 Sql 语句。
- JPA 是 Repository，MyBatis 是 Mapper。
- MyBatis 支持定制化 SQL、存储过程以及高级映射。JPA 仅支持简单的映射，它映射实体类属性到数据库表的字段上。
- MyBatis 需要手动进行分页，而 JPA 可以使用框架自带的分页机制。

### 总结

- JPA 对于单表的简单查询确实简单方便又实用。
- mybatis ,只能说对于多表查询确实是比较支持。尤其是在业务逻辑多是多表关联的情况下，mybatis 绝对比 jpa 要更加适合。无论是以后的维护还是业务的变更都方便不少。

### 参考

- [CSDN-鱼和熊掌兼得：同时使用 JPA 和 Mybatis](https://blog.csdn.net/weixin_49794051/article/details/111903009)
