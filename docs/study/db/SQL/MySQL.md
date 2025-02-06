### 概述

源码下载 

https://downloads.mysql.com/archives/community/

### 版本选择

当前比较稳定版本是5.6、5.7和8.0，如果是新项目当然是用8.0；6.0就是个废弃版本，7.x是NDB Cluster版；

mysql8.0的主要新特性：

1. hash join；

### 修改时区

```shell
docker exec -it mysql02 bash
cd /etc/mysql/mysql.conf.d
echo "default-time_zone = '+8:00'" >> mysqld.cnf
exit
docker restart mysql02
```

### 创建用户并授权

```shell
-- 创建用户
create user 'xx'@'%' identified by 'xx';
-- 授权某个表的查询和增加权限
grant SELECT,INSERT on newcloud.elk_user_func_flow_for_user_op_for_res to 'xx'@'%';
-- 删除用户
drop user 'xx'@'%';
-- 查看某个用户的授权信息
show grants for 'cloudExtend'@'%'; 
--
flush privileges;
```

### 内存分配
```sql
-- 查询共享内存使用情况 单位是Byte
show variables where variable_name in (
'innodb_buffer_pool_size','innodb_log_buffer_size','innodb_additional_mem_pool_size','key_buffer_size','query_cache_size'
);
-- InnoDB 缓冲池划分为的区域数
show variables like 'innodb_buffer_pool_instances'
-- 查询session私有内测使用情况 单位是Byte
show variables where variable_name in (
'read_buffer_size','read_rnd_buffer_size','sort_buffer_size','join_buffer_size','binlog_cache_size','tmp_table_size'
);
```

MySQL 的内存大体可以分为共享内存和 session 私有内存两部分，下面将详细介绍各部分的构成。

#### 共享内存

参数说明：

- innodb_buffer_pool
该部分缓存是 Innodb 引擎最重要的缓存区域，是通过内存来弥补物理数据文件的重要手段。其中主要包含数据页、索引页、undo 页、insert buffer、自适应哈希索引、锁信息以及数据字典等信息。在进行 SQL 读和写的操作时，首先并不是对物理数据文件操作，而是先对 buffer_pool 进行操作，然后再通过 checkpoint 等机制写回数据文件。该空间的优点是可以提升数据库的性能、加快 SQL 运行速度，缺点是故障恢复速度较慢。
- innodb_log_buffer
该部分主要存放 redo log 的信息，在 RDS 上会设置 1 M 的大小。InnoDB 会首先将 redo log 写在这里，然后按照一定频率将其刷新回重做日志文件中。该空间不需要太大，因为一般情况下该部分缓存会以较快频率刷新至 redo log（Master Thread 会每秒刷新、事务提交时会刷新、其空间少于 1/2 时同样会刷新）。
- innodb_additional_mem_pool
该部分主要存放 InnoDB 内的一些数据结构，在 RDS 中统一设置为 2 M。通常是在 buffer_pool 中申请内存的时候还需要在额外内存中申请空间存储该对象的结构信息。该大小主要与表数量有关，表数量越大需要更大的空间。
- key_buffer
该部分是 MyISAM 表的重要缓存区域，所有实例统一为 16 M。该部分主要存放 MyISAM 表的键。MyISAM 表不同于 InnoDB 表，其缓存的索引缓存是放在 key_buffer 中的，而数据缓存则存储于操作系统的内存中。RDS 的系统是 MyISAM 引擎的，因此在 RDS 中是给予该部分一定量的空间的。
- query_cache
该部分是对查询结果做缓存以减少解析 SQL 和执行 SQL 的花销，在 RDS 上关闭了该部分的缓存。主要适合于读多写少的应用场景，因为它是按照 SQL 语句的 hash 值进行缓存的，当表数据发生变化后即失效。

#### Session 私有内存

共享内存中介绍的内存空间是实例创建时即分配的内存空间，并且是所有连接共享的。

参数说明：

- read_buffer&read_rnd_buffer
分别存放了对顺序和随机扫描（例如按照排序的顺序访问）的缓存，RDS 给每个 session 设置 256 K 的大小。当 thread 进行顺序或随机扫描数据时会首先扫描该 buffer 空间以避免更多的物理读。
- sort_buffer
需要执行 order by 和 group by 的 SQL 都会分配 sort_buffer，用于存储排序的中间结果，在 RDS 上设置 256 K。在排序过程中，若存储量大于 sort_buffer_size，则会在磁盘生成临时表以完成操作。在 Linux 系统中，当分配空间大于 2 M 时会使用 mmap() 而不是 malloc() 来进行内存分配，导致效率降低。
- join_buffer
MySQL 仅支持 nest loop 的 join 算法，RDS 设置 256 K 的大小。处理逻辑是驱动表的一行和非驱动表联合查找，这时就可以将非驱动表放入 join_buffer，不需要访问拥有并发保护机制的 buffer_pool。
- binlog_cache
该区域用来缓存该 thread 的 binlog 日志，RDS 设置 256 K 的大小。在一个事务还没有 commit 之前会先将其日志存储于 binlog_cache 中，等到事务 commit 后会将其 binlog 刷回磁盘上的 binlog 文件以持久化。
- tmp_table
不同于上面各个 session 层次的 buffer，这个参数可以在控制台上修改。该参数是指用户内存临时表的大小，如果该 thread 创建的临时表超过它设置的大小会把临时表转换为磁盘上的一张 MyISAM 临时表。如果用户在执行事务时遇到类似如下这样的错误，可以考虑增大 tmp_table 的值。

#### 如何设置

针对当前MySQL企业用户的实际环境（大内存）：

1. 在专用数据库服务器上，可以将innodb_buffer_pool_size设置为计算机物理内存大小的80％;
2. 在innodb_buffer_pool_size设置比较大的情况下，可以将innodb_buffer_pool_instances的值设置为8-16，保证一个pool 10G以上。

（注意innodb_buffer_pool_size必须为 innodb_buffer_pool_instances 的倍数）

```shell
#通过SQL修改 重启后失效 2G
set global innodb_buffer_pool_size = 2147483648

#修改my.cnf配置 需要重启
innodb_buffer_pool_size = 2147483648
innodb_buffer_pool_size = 2G
innodb_buffer_pool_size = 2048M
```

### 查询优化
```sql
#
-- 查询缓存
show variables where variable_name in (
'have_query_cache','query_cache_limit','query_cache_min_res_unit','query_cache_size','query_cache_type','query_cache_wlock_invalidate'
);
```

1. have_query_cache：当前的MYSQL版本是否支持“查询缓存”功能。
2. query_cache_min_res_unit：查询缓存分配的最小块（字节）。默认值是4096（4KB）。当查询进行时，MySQL把查询结果保存在query cache，但是如果保存的结果比较大，超过了query_cache_min_res_unit的值，这时候MySQL将一边检索结果，一边进行保存结果。他保存结果也是按默认大小先分配一块空间，如果不够，又要申请新的空间给他。如果查询结果比较小，默认的query_cache_min_res_unit可能造成大量的内存碎片，如果查询结果比较大，默认的query_cache_min_res_unit又不够，导致一直分配块空间，所以可以根据实际需求，调节query_cache_min_res_unit的大小。注：如果上面说的内容有点弯弯绕，那举个现实生活中的例子，比如咱现在要给运动员送水，默认的是500ml的瓶子，如果过来的是少年运动员，可能500ml太大了，他们喝不完，造成了浪费，那我们就可以选择300ml的瓶子，如果过来的是成年运动员，可能500ml不够，那他们一瓶喝完了，又开一瓶，直接不渴为止。那么那样开瓶子也要时间，我们就可以选择1000ml的瓶子。
3. query_cache_size：为缓存查询结果分配的总内存。
4. query_cache_type：默认为on。
5. query_cache_wlock_invalidate：如果该表被锁住，是否返回缓存中的数据，默认是关闭的。

MYSQL的查询缓存实质上是缓存SQL的hash值和该SQL的查询结果，如果运行相同的SQL,服务器直接从缓存中去掉结果，而不再去解析，优化，寻找最低成本的执行计划等一系列操作，大大提升了查询速度。
但是万事有利也有弊。

- 第一个弊端就是如果表的数据有一条发生变化，那么缓存好的结果将全部不再有效。这对于频繁更新的表，查询缓存是不适合的。
- 第二个弊端就是缓存机制是通过对SQL的hash，得出的值为key，查询结果为value来存放的，那么就意味着SQL必须完完全全一模一样，否则就命不中缓存。

默认query_cache_type设置为OFF，其实网上资料和各大云厂商提供的云服务器都是将这个功能关闭的，从上面的原理来看，在一般情况下，他的弊端大于优点。

### 冗余索引

冗余索引指的是索引的功能相同，能够命中就肯定能命中 ，那么就是冗余索引如（name,city ）和（name ）这两个索引就是冗余索引，能够命中后者的查询肯定是能够命中前者的 在大多数情况下，都应该尽量扩展已有的索引而不是创建新索引。
MySQLS.7 版本后，可以通过查询 sys 库的 schema_redundant_indexes 表来查看冗余索引。

### 存储引擎
```sql
-- 查询当前数据库服务器支持的存储引擎列表
show engines;
-- 查看默认的存储引擎
show variables like '%storage_engine%';
-- 查看表的存储引擎及其他相关信息
show table status like "table_name";
```

### MyISAM和InnoDB区别

MyISAM是MySQL的默认数据库引擎（5.5版之前）。虽然性能极佳，而且提供了大量的特性，包括全文索引、压缩、空间函数等，但MyISAM不支持事务和行级锁，而且最大的缺陷就是崩溃后无法安全恢复。不过，5.5版本之后，MySQL引入了InnoDB（事务性数据库引擎），MySQL 5.5版本后默认的存储引擎为InnoDB。
大多数时候我们使用的都是 InnoDB 存储引擎，但是在某些情况下使用 MyISAM 也是合适的比如读密集的情况下。（如果你不介意 MyISAM 崩溃回复问题的话）。

两者的对比：

1. 是否支持行级锁: MyISAM 只有表级锁(table-level locking)，而InnoDB 支持行级锁(row-level locking)和表级锁,默认为行级锁。
2. 是否支持事务和崩溃后的安全恢复：MyISAM强调的是性能，每次查询具有原子性,其执行比InnoDB类型更快，但是不提供事务支持。但是InnoDB提供事务支持事务，外部键等高级数据库功能。具有事务(commit)、回滚(rollback)和崩溃修复能力(crash recovery capabilities)的事务安全(transaction-safe (ACID compliant))型表。
3. 是否支持外键：MyISAM不支持，而InnoDB支持。
4. 是否支持MVCC：仅 InnoDB 支持。应对高并发事务, MVCC比单纯的加锁更高效;MVCC只在 READ COMMITTED和 REPEATABLE READ两个隔离级别下工作;MVCC可以使用 乐观(optimistic)锁 和 悲观(pessimistic)锁来实现;各数据库中MVCC实现并不统一。
5. ......

《MySQL高性能》上面有一句话这样写到:
> 不要轻易相信“MyISAM比InnoDB快”之类的经验之谈，这个结论往往不是绝对的。在很多我们已知场景中，InnoDB的速度都可以让MyISAM望尘莫及，尤其是用到了聚簇索引，或者需要访问的数据都可以放入内存的应用。


一般情况下我们选择 InnoDB 都是没有问题的，但是某事情况下你并不在乎可扩展能力和并发能力，也不需要事务支持，也不在乎崩溃后的安全恢复问题的话，选择MyISAM也是一个不错的选择。但是一般情况下，我们都是需要考虑到这些问题的。

### 乐观锁与悲观锁的区别
#### 
#### 悲观锁

总是假设最坏的情况，每次去拿数据的时候都认为别人会修改，所以每次在拿数据的时候都会上锁，这样别人想拿这个数据就会阻塞直到它拿到锁（共享资源每次只给一个线程使用，其它线程阻塞，用完后再把资源转让给其它线程）。传统的关系型数据库里边就用到了很多这种锁机制，比如行锁，表锁等，读锁，写锁等，都是在做操作之前先上锁。Java中synchronized和ReentrantLock等独占锁就是悲观锁思想的实现。

#### 乐观锁

总是假设最好的情况，每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在更新的时候会判断一下在此期间别人有没有去更新这个数据，可以使用版本号机制和CAS算法实现。乐观锁适用于多读的应用类型，这样可以提高吞吐量，像数据库提供的类似于write_condition机制，其实都是提供的乐观锁。在Java中java.util.concurrent.atomic包下面的原子变量类就是使用了乐观锁的一种实现方式CAS实现的。

#### 两种锁的使用场景

从上面对两种锁的介绍，我们知道两种锁各有优缺点，不可认为一种好于另一种，像乐观锁适用于写比较少的情况下（多读场景），即冲突真的很少发生的时候，这样可以省去了锁的开销，加大了系统的整个吞吐量。但如果是多写的情况，一般会经常产生冲突，这就会导致上层应用会不断的进行retry，这样反倒是降低了性能，所以一般多写的场景下用悲观锁就比较合适。

### 日志相关/Binlog等

#### Binlog录入格式

- 有三种格式，statement，row和mixed。
   - statement模式下，每一条会修改数据的sql都会记录在binlog中。不需要记录每一行的变化，减少了binlog日志量，节约了IO，提高性能。由于sql的执行是有上下文的，因此在保存的时候需要保存相关的信息，同时还有一些使用了函数之类的语句无法被记录复制。
   - row级别下，不记录sql语句上下文相关信息，仅保存哪条记录被修改。记录单元为每一行的改动，基本是可以全部记下来但是由于很多操作，会导致大量行的改动(比如alter table)，因此这种模式的文件保存的信息太多，日志量太大。
   - mixed，一种折中的方案，普通操作使用statement记录，当无法使用statement的时候使用row。
- 此外，新版的MySQL中对row级别也做了一些优化，当表结构发生变化的时候，会记录语句而不是逐行记录。

#### 参考

1. [MySQL 服务器中的 6 种日志类型](https://blog.csdn.net/horses/article/details/106053399?utm_medium=distribute.pc_category.none-task-blog-hot-10.nonecase&depth_1-utm_source=distribute.pc_category.none-task-blog-hot-10.nonecase&request_id=)

### 占用磁盘大小/数据大小/索引大小
```sql
-- 查看所有数据库数据大小和索引大小
select TABLE_SCHEMA, 
concat(truncate(sum(data_length)/1024/1024,2),' MB') as data_size,
sum(data_length) as data_size_B,
concat(truncate(sum(index_length)/1024/1024,2),'MB') as index_size,
sum(index_length)  as index_size_B
from information_schema.tables
group by TABLE_SCHEMA
order by data_size_B desc;

-- 查看某个数据库所有数据表数据大小和索引大小
select TABLE_NAME, 
concat(truncate(sum(data_length)/1024/1024,2),' MB') as data_size,
sum(data_length) as data_size_B,
concat(truncate(sum(index_length)/1024/1024,2),'MB') as index_size,
sum(index_length)  as index_size_B
from information_schema.tables
 where TABLE_SCHEMA = 'newcloud'
group by TABLE_NAME
order by data_size_B desc;

-- 查看某个数据库某个数据表数据大小和索引大小
select TABLE_NAME, 
concat(truncate(sum(data_length)/1024/1024,2),' MB') as data_size,
sum(data_length) as data_size_B,
concat(truncate(sum(index_length)/1024/1024,2),'MB') as index_size,
sum(index_length)  as index_size_B
from information_schema.tables
where TABLE_SCHEMA = 'newcloud'
and table_name='log_err_flow'
group by TABLE_NAME
order by data_size_B desc;
```






### 优化

1. [程序员进阶必读，万字总结Mysql优化精华篇](https://cloud.tencent.com/developer/article/1580260)
