### 一些经常读的官方文档

- [MyBatis 官方参考文档](https://mybatis.org/mybatis-3/zh_CN/index.html)
- [GitHub-MyBatis](https://github.com/mybatis)
- [MyBatis integration with Spring Boot](https://github.com/mybatis/spring-boot-starter)

### MyBatis 缓存

myabtis 的缓存分为一级缓存和二级缓存，默认开启一级缓存，关闭二级缓存，一级缓存时 sqlSession 级别，二级缓存是 namespace 级别。

#### 作用范围

- 一级缓存是会话级别的缓存，即 sqlSession 级别，会话结束，清除会话中的缓存数据，实际代码中通过通过开启事务让多个数据库操作共享一个 sqlSession。
- 二级缓存: 全局级别，也叫 namespace 级别，会话结束，缓存依然存在，多个请求可以共享缓存数据。

#### 缓存位置

- 一级缓存由于是 sqlSession 级别，本质上是在 JVM 中创建一个 Map 集合对象保存缓存数据，所以缓存数据保留的地方是本地 JVM 内存中。
- 二级缓存默认也是保存在 JVM 中，但是可以通过配置将缓存数据保存到第三方缓存中，比如 ehcache、redis。保存在 redis 这些的分布式缓存中，能提供更好的分布式场景的支持。

#### 缓存过期

- 一级缓存无过期时间，只有生命周期，缓存会先放在一级缓存中，当 sqlSession 会话提交或者关闭时才会将一级缓存刷新到二级缓存中；开启二级缓存后，用户查询时，会先去二级缓存中找，找不到在去一级缓存中找，然后才去数据库查询；
- 二级缓存的过期时间默认是 1 小时，如果这个 cache 存活了一个小时，那么将整个清空一下。需要注意的是，并不是 key-value 的过期时间，而是这个 cache 的过期时间，是 flushInterval，意味着整个清空缓存 cache，所以不需要后台线程去定时检测，每当存取数据的时候，都有检测一下 cache 的生命时间。
