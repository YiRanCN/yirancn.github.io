# MySQL 笔记

### WITH 查询

MySQL 语句 WITH 是 MySQL 8.0 中的一个新特性，用于帮助简化复杂查询以及提高查询效率。在大多数情况下，查询都需要多次嵌套使用，这导致查询语句写得很长且难以维护。WITH 语句就是用来解决这个问题的，它是一种临时表的方式，得到的结果集可以作为查询的结果集。在 WITH 语句中，可以定义多个别名，然后嵌套使用。

```sql
WITH t1 AS (
    SELECT col1 FROM table1
),
t2 as (
    SELECT col1 FROM table2
)
--使用
SELECT * FROM t1 INNER JOIN t2 ON t1.col1 = t2.col1;
```

在这个例子中，我们定义了两张表，t1 和 t2，然后使用了这两张表来进行查询，这样我们就可以避免在查询语句中多次嵌套使用相同的子查询，并且也不需要为每个查询定义一个临时表。

with 特性：

- with 其实就是一个子查询抽取出来，换了一个别名
- 和视图的区别：with as 等同于一次性视图，只会持续到下一个查询。在之后就不能再被引用
- 主要用于简化复杂的 数据集 和 递归

其实 WITH 表达式除了和 SELECT 一起用， 还可以有下面的组合：

insert with 、with update、with delete、with with、with recursive(可以模拟数字、日期等序列)、WITH 可以定义多张表

```sql
with_clause:
    WITH [RECURSIVE]
        cte_name [(col_name [, col_name] ...)] AS (subquery)
        [, cte_name [(col_name [, col_name] ...)] AS (subquery)] ...
```

### 递归共用表达式 with recursive

```sql
WITH RECURSIVE cte (n) AS
(
  SELECT 1
  UNION ALL
  SELECT n + 1 FROM cte WHERE n < 5
)
SELECT * FROM cte;
```

### 事件/定时任务

```sql
-- 先检查是否开启 一般都是默认关闭的
show variables like 'event%'
set global event_scheduler=on;
--
CREATE EVENT handle_server_count_schedule
ON SCHEDULE EVERY 10 SECOND
STARTS '2024-03-13 00:00:00.000'
ON COMPLETION NOT PRESERVE
ENABLE
DO begin
update server_count set COUNT = COUNT + (FLOOR(RAND() * 100) + 1)
where REGION_ID in(1,2) and TENANT_NAME in('联通信创云','浪潮政务云');
END
```

### 参考文档

- [MySQL 8.0 with 语法(cte)](https://halo.sherlocky.com/archives/mysql-8-cte)
- [MySQL 8.0 官方文档](https://dev.mysql.com/doc/refman/8.0/en/preface.html)
