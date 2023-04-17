
## ES版本

1. 目前使用的版本是6.3.2，相对应的logstash/kibana/filebeat也使用的是6.3.2，java对应的jar包client也是用的6.3.2；

## ES基础概念

1. Index（索引-数据库），索引包含一堆有相似结构的文档数据，，比如可以有一个客户索引，商品分类索引，订单索引，索引有一个名称。一个index包含很多document，一个index就代表了一类类似的或者相同的document。比如说建立一个product index，商品索引，里面可能就存放了所有的商品数据，所有的商品document。必须是英文小写命名。
2. ~~Type（类型-表），每个索引里都可以有一个或多个type，type是index中的一个逻辑数据分类，一个type下的document，都有相同的field。~~
3. Document（文档-行），文档是es中的最小数据单元，一个document可以是一条客户数据，一条商品分类数据，一条订单数据，通常用JSON数据结构表示，每个index下的type中，都可以去存储多个document。
4. Field（字段-列），Field是Elasticsearch的最小单位。一个document里面有多个field，每个field就是一个数据字段。
5. mapping（映射-约束），数据如何存放到索引对象上，需要有一个映射配置，包括：数据类型、是否存储、是否分词等。这样就创建了一个名为blog的Index。Type不用单独创建，在创建Mapping 时指定就可以。Mapping用来定义Document中每个字段的类型，即所使用的 analyzer、是否索引等属性，非常关键等。



**注意事项：**

从ES6.0开始，官方便不建议一个索引中创建多个类型；在ES7.0中，更是移除了类型(Type)这个概念。为什么呢？
在Elasticsearch索引中，不同类型(Type)中具有相同名称的字段在内部由相同的Lucene字段支持。一个index中多个Type在Lucene中会有许多问题。具体的可以参考官方说明。

## 分页

1. 深度分页，理解在分布式系统中深度分页是有问题的，所以使用此分页在对需要限制分页数量；
2. 快照分页(scroll)
3. search_after分页

## 分片和副本

```shell
//新增索引的同时添加分片，不使用默认分片，分片的数量
//一般以（节点数*1.5或3倍）来计算，比如有4个节点，分片数量一般是6个到12个，每个分片一般分配一个副本
PUT /testindex
{
   "settings" : {
      "number_of_shards" : 5,
      "number_of_replicas" : 1
   }
}
```

1. 一个 分片 是一个底层的 工作单元 ，它仅保存了全部数据中的一部分。
2. 一个分片是一个 Lucene 的实例，以及它本身就是一个完整的搜索引擎。
3. 一个分片可以是 主 分片或者 副本 分片。 索引内任意一个文档都归属于一个主分片，所以主分片的数目决定着索引能够保存的最大数据量。
4. 技术上来说，一个主分片最大能够存储 Integer.MAX_VALUE - 128 个文档 ~= 21亿条
5. 一个副本分片只是一个主分片的拷贝。副本分片作为硬件故障时保护数据不丢失的冗余备份，并为搜索和返回文档等读操作提供服务。
6. 在索引建立的时候就已经确定了主分片数，但是副本分片数可以随时修改。读操作——搜索和返回数据——可以同时被主分片 _或_ 副本分片所处理，所以当你拥有越多的副本分片时，也将拥有越高的吞吐量。

## 常用查询(curl)

### 基础概念
```shell
#
url中携带?v表示展示表头
url中携带?pretty表示展示格式化
url中带着?help查看列的定义
url中带着?h=a,b指定查看某些列

#浏览es服务信息
curl -XGET http://127.0.0.1:9200
```

### 查看所有索引库
```shell
#根据索引库名称排序
curl -XGET 'http://127.0.0.1:9200/_cat/indices?v&s=index'
#根据文档数量排序
curl -XGET 'http://127.0.0.1:9200/_cat/indices?v&s=docs.count'
#根据文档磁盘存储大小排序
curl -XGET 'http://127.0.0.1:9200/_cat/indices?v&s=store.size'
#查看所有索引库的设置信息
curl -XGET 'http://127.0.0.1:9200/_all/_settings?pretty'
#某个索引
curl -XGET 'http://127.0.0.1:9200/_cat/indices/{具体的索引库}?v'
```

### 查看某个索引库信息
```shell
#查看某个索引库的aliases/mappings/settings
curl -XGET 'http://127.0.0.1:9200/{具体的索引库}?pretty'
#查看某个索引库的settings
curl -XGET 'http://127.0.0.1:9200/{具体的索引库}/_settings?pretty'
#查看某个索引库的mappings
curl -XGET 'http://127.0.0.1:9200/{具体的索引库}/_mappings?pretty'
```

### 设置某个索引库信息
```shell
#设置某个索引库的settings 副本数量，副本数量越合理的越多，会提高查询速度
curl -XPUT 'http://127.0.0.1:9200/{具体的索引库}/_settings' \
-H "Content-Type: application/json" \
-d '{"index":{"number_of_replicas":"1"}}'
#设置某个索引库的某个字段支持aggs分析 如果某个字段的类型是对象，支持用.运算符
curl -XPUT 'http://127.0.0.1:9200/{具体的索引库}/_mappings/doc?pretty' \
-H "Content-Type: application/json" \
-d '{"properties" : {"url" : {"type" : "text", "fielddata" : true }}}'
```

### 分析
```shell
#根据某个字段分析文档数量 如果某个字段的类型是对象，支持用.运算符 
#这个字段需要支持fielddata=true
curl -XGET 'http://127.0.0.1:9200/{具体的索引库}/_search?pretty' \
-H "Content-Type: application/json" \
-d '{"size" : 0 ,"aggs": {"all_interests": {"terms": { "field": "url" }}}}'
#根据某个字段先查询再分析文档数量
curl -XGET 'http://127.0.0.1:9200/{具体的索引库}/_search?pretty' \
-H "Content-Type: application/json" \
-d '{
"query":{"match":{"method":"POST"}},
"size" : 0 ,"aggs": {"all_interests": {"terms": { "field": "uaj.name" }}}}'
```

### 删除指定索引库
```shell
#
curl -XDELETE 'http://127.0.0.1:9200/{具体的索引库}?pretty'
```

### 深入搜索
```shell
##############################################结构化搜索
# 结构化搜索-精确值查找
curl -XPOST \
http://127.0.0.1:9200/{具体的索引库}/_search?pretty \
-H "Content-Type: application/json" \
-d '{ "sort": [{"@timestamp": {"order": "asc"}}], 
"from":0,"size": 10,"query":{"term":{"code":"200"}}}'

curl -XPOST \
http://127.0.0.1:9400/{具体的索引库}/_search?pretty \
-H "Content-Type: application/json" \
-d '{ 
"from":0,"size": 10,"query":{"term":{"_id":"uNp30XIB0LLx2kagtfJo"}}}'
# 结构化搜索-精确值查找
# 通常当查找一个精确值的时候，我们不希望对查询进行评分计算。只希望对文档进行包括或排除的计算，
# 所以我们会使用 constant_score 查询以非评分模式来执行 term 查询并以一作为统一评分。
curl -XPOST \
http://127.0.0.1:9200/{具体的索引库}/_search?pretty \
-H "Content-Type: application/json" \
-d '{ "sort": [{"@timestamp": {"order": "desc"}}], 
"from":0,"size": 10,"query":{
"constant_score":{
  "filter":{
    "term":{"code":"200"}
  }
}
}}'
#
curl -XPOST \
http://127.0.0.1:9200/{具体的索引库}/_search?pretty \
-H "Content-Type: application/json" \
-d '{ "sort": [{"@timestamp": {"order": "desc"}}], 
"from":0,"size": 10,"query":{
"constant_score":{
  "filter":{
    "range":{"code":{
    	"lte": "now"
    }}
  }
}
}}'



##############################################全文搜索
# 全文搜索-查询所有-排序
curl -XPOST \
http://127.0.0.1:9200/{具体的索引库}/_search?pretty \
-H "Content-Type: application/json" \
-d '{ "sort": [{"@timestamp": {"order": "desc"}}], 
"from":0,"size": 10,"query":{"match_all":{}}}'
# 全文搜索-某个字段查询
curl -XPOST \
http://127.0.0.1:9200/{具体的索引库}.20.6.11/_search?pretty \
-H "Content-Type: application/json" \
-d '{ "from":0,"size": 10,"query":{"match":{"site":"m"}}}'
# 模糊查询
curl -XPOST \
http://127.0.0.1:9200/{具体的索引库}/_search?pretty \
-H "Content-Type: application/json" \
-d '{ "from":0,"size": 10,"query": {
"wildcard": {
	"site": "*show.html*"
}
}}'
curl -XPOST \
http://127.0.0.1:9200/{具体的索引库}/_search?pretty \
-H "Content-Type: application/json" \
-d '{ "from":0,"size": 10,"query": {
"bool":{
  "must_not":[
  	{"term":{"market.keyword":"科创板"}}
    ,{"wildcard": {"name": "*ST*"}}
  ]
}
}}'


```
### 新增数据
```shell
#POST提交 自动生成_id
curl -XPOST \
http://127.0.0.1:9200/stock/test \
-H "Content-Type: application/json" \
-d '{"author" : "Doug Cutting"}' 
#PUT提交 指定_id
curl -XPOST \
http://127.0.0.1:9200/stock/test/1 \
-H "Content-Type: application/json" \
-d '{"author" : "Doug Cutting"}' 
```

### 拷贝索引库
#### 同一个集群拷贝
```shell
# x > .temp
....
#reindex one > bak
curl -XPOST 'http://127.0.0.1:9200/_reindex' \
-H "Content-Type: application/json" \
-d '{
  "source": {"index": "{具体的索引库}.temp"},
  "dest": {"index": "{具体的索引库}"}}'
#
#curl -XDELETE 'http://127.0.0.1:9200/{具体的索引库}?pretty'
#reindex bak > one
curl -XPOST 'http://127.0.0.1:9200/_reindex' \
-H "Content-Type: application/json" \
-d '{
  "source": {"index": "{具体的索引库}"},
  "dest": {"index": "{具体的索引库}"}}'
# restart logstash-xxx
...
#reindex temp > one
curl -XPOST 'http://127.0.0.1:9200/_reindex' \
-H "Content-Type: application/json" \
-d '{
  "source": {"index": "{具体的索引库}.temp"},
  "dest": {"index": "{具体的索引库}"}}'
#
#curl -XDELETE 'http://127.0.0.1:9200/{具体的索引库}.bak?pretty'
#curl -XDELETE 'http://127.0.0.1:9200/{具体的索引库}.temp?pretty'
```
#### 不同的集群拷贝

注意：
必须配置reindex.remote.whitelist=172.19.184.169:9200
```shell
#reindex one > bak --{具体的索引库}
curl -XPOST 'http://127.0.0.1:9200/_reindex' \
-H "Content-Type: application/json" \
-d '{
  "source": {"index": "prod_device_active","remote":{"host":"http://172.19.184.169:9200"}},
  "dest": {"index": "prod_device_active"}}'
#reindex one > bak --prod_device_address_statistics
curl -XPOST 'http://127.0.0.1:9200/_reindex' \
-H "Content-Type: application/json" \
-d '{
  "source": {"index": "prod_device_address_statistics","remote":{"host":"http://172.19.184.169:9200"}},
  "dest": {"index": "prod_device_address_statistics"}}'
#reindex one > bak --prod_device_product_model_statistics
curl -XPOST 'http://127.0.0.1:9200/_reindex' \
-H "Content-Type: application/json" \
-d '{
  "source": {"index": "prod_device_product_model_statistics","remote":{"host":"http://172.19.184.169:9200"}},
  "dest": {"index": "prod_device_product_model_statistics"}}'
#reindex one > bak --prod_ranking
curl -XPOST 'http://127.0.0.1:9200/_reindex' \
-H "Content-Type: application/json" \
-d '{
  "source": {"index": "prod_ranking","remote":{"host":"http://172.19.184.169:9200"}},
  "dest": {"index": "prod_ranking.bak"}}'
#reindex one > bak --prod_user_func_flow_for_user_op_for_res
curl -XPOST 'http://127.0.0.1:9200/_reindex' \
-H "Content-Type: application/json" \
-d '{
  "source": {"index": "prod_user_func_flow_for_user_op_for_res","remote":{"host":"http://192.168.0.33:9200"}},
  "dest": {"index": "prod_user_func_flow_for_user_op_for_res"}}'
```

### 报错处理
```shell
#如果报错如下 需要执行
#Fielddata is disabled on text fields by default. Set fielddata=true on [ipo_date] in order to load fielddata in memory by uninverting the inverted index. Note that this can however use significant memory. Alternatively use a keyword field instead.
curl -i -H "Content-Type:application/json" \
-XPUT http://127.0.0.1:9200/daily/_mapping/doc/?pretty \
-d '{"doc":{"properties":{"trade_date":{"type":"text","fielddata":true}}}}'

#解决错误 retrying failed action with response code: 403 ({"type"=>"cluster_block_exception", "reason"=>"block
curl -XPUT -H 'Content-Type: application/json' \
http://127.0.0.1:9200/_all/_settings \
-d '{"index.blocks.read_only_allow_delete": null}'
```

### 查询分片信息/文档总数/主节点
```shell
#查询某个索引库的分片信息
curl -XGET 'http://127.0.0.1:9200/{具体的索引库}/_search_shards?pretty'
#查询某个索引库的文档总数量
curl -XGET 'http://127.0.0.1:9200/{具体的索引库}/doc/_count?pretty'
#查询主节点
curl -XGET 'http://127.0.0.1:9200/_cat/master?v'
```

### 需要密码时(nginx)
```shell
#需要密码时 举例
curl -XGET  \
--user admin:Aa0123 \
#查看某个索引库下的前1000条数据
curl -XGET  --user admin:Aa0123 \
'http://47.103.38.240:8443/rc_ranking/_search' \
-H "Content-Type: application/json" \
-d '{ "sort": [{"@timestamp": {"order": "desc"}}],\
"from":0,"size": 1000,"query":{"match_all":{}}}'
```

### 模板
```shell
#查询所有模板
curl -XGET 'http://127.0.0.1:9200/_template?pretty'
curl -XGET 'http://127.0.0.1:9200/_template?pretty' > t.json
#新增某个模板--logstash-index-template-nginx-api
curl -XPUT http://127.0.0.1:9200/_template/logstash-index-template-nginx-api?pretty \
-H "Content-Type: application/json" \
-d @logstash-index-template-nginx-api.json

#新增某个模板--logstash-index-template-userop
curl -XPUT http://127.0.0.1:9200/_template/logstash-index-template-userop?pretty \
-H "Content-Type: application/json" \
-d @logstash-index-template-userop.json

#新增某个模板--logstash-index-template-alarm-data-history.json
curl -XPUT http://127.0.0.1:9200/_template/logstash-index-template-alarm-data-history?pretty \
-H "Content-Type: application/json" \
-d @logstash-index-template-alarm-data-history.json


#删除某个模板
curl -XDELETE 'http://127.0.0.1:9200/_template/logstash-index-template-nginx-api?pretty'
```

### 创建索引库
```shell
# 创建索引库
curl -XPUT 'http://127.0.0.1:9200/stock?pretty' \
-H 'Content-Type: application/json' \
-d '{
   "settings" : {
      "number_of_shards" : 5,
      "number_of_replicas" : 1
   }
}'
```
### 集群状态查看

```shell
# 服务检测
curl -XGET 'http://127.0.0.1:9200/_cat/health?v'
# 查看所有集群节点
curl -XGET 'http://127.0.0.1:9200/_cat/allocation?v'
# 查看集群所有分片分布情况
curl -XGET 'http://127.0.0.1:9200/_cat/shards?v'
# 查看集群某个索引的分片分布情况
curl -XGET 'http://127.0.0.1:9200/_cat/shards/{具体的索引库}?v'
# 查看集群的主节点
curl -XGET 'http://127.0.0.1:9200/_cat/master?v'
# 查看集群的所有数据节点
curl -XGET 'http://127.0.0.1:9200/_cat/nodes?v'
# 查看集群的所有段(数据集)
curl -XGET 'http://127.0.0.1:9200/_cat/segments?v'
# 查看集群某个索引的段分布情况
curl -XGET 'http://127.0.0.1:9200/_cat/segments/{具体的索引库}?v'
# 查看集群的所有文档数量
curl -XGET 'http://127.0.0.1:9200/_cat/count?v'
# 查看集群某个索引的文档数量
curl -XGET 'http://127.0.0.1:9200/_cat/count/{具体的索引库}?v'
# 查看集群的所有发现机制
curl -XGET 'http://127.0.0.1:9200/_cat/recovery?v'
# 查看集群某个索引的发现机制
curl -XGET 'http://127.0.0.1:9200/_cat/recovery/{具体的索引库}?v'
# 查看集群的所有阻塞任务？
curl -XGET 'http://127.0.0.1:9200/_cat/pending_tasks?v'
# 查看集群的所有别名
curl -XGET 'http://127.0.0.1:9200/_cat/aliases?v'
# 查看集群某个索引的别名
curl -XGET 'http://127.0.0.1:9200/_cat/aliases/{具体的索引库}?v'
# 查看集群的所有线程池
curl -XGET 'http://127.0.0.1:9200/_cat/thread_pool?v'
# 查看集群的所有插件列表
curl -XGET 'http://127.0.0.1:9200/_cat/plugins?v'
# 查看集群的所有fielddata
curl -XGET 'http://127.0.0.1:9200/_cat/fielddata?v'
curl -XGET 'http://127.0.0.1:9200/_cat/fielddata/{fields}?v'
# 查看集群的所有节点的节点属性
curl -XGET 'http://127.0.0.1:9200/_cat/nodeattrs?v'
```

### 快照
```shell
#查看快照存储仓库列表
curl -X ET "127.0.0.1:9200/_cat/repositories?v"
#查看某个快照存储仓库的快照列表
curl -XGET "127.0.0.1:9200/_snapshot/snapshots/_all?pretty"
#注册快照存储库
curl -XPUT \
http://127.0.0.1:9200/_snapshot/snapshots?pretty \
-H "Content-Type: application/json" \
-d '{ "type":"fs","settings":{"location":"/usr/share/elasticsearch/snapshots"}}'
#查看快照存储库
curl -XGET \
http://127.0.0.1:9200/_snapshot?pretty
#执行快照存储库
curl -XPUT \
'http://127.0.0.1:9200/_snapshot/snapshots/snapshot_02?wait_for_completion=true'
#查看执行快照存储库的结果
curl -XGET \
http://127.0.0.1:9200/_snapshot/snapshots/snapshot_02?pretty
#删除快照存储库
curl -XDELETE "127.0.0.1:9200/_snapshot/snapshots?pretty"
#删除快照
curl -XDELETE "127.0.0.1:9200/_snapshot/snapshots/snapshot_02?pretty"
#打包
cd /mnt/docker/es.1
tar czvf snapshots.tar.gz ./snapshots/*
#############目的地
cd /mnt/docker/es.1
#upload an tar
tar xzvf snapshots.tar.gz 
#注册快照存储库
curl -XPUT \
http://127.0.0.1:9200/_snapshot/snapshots?pretty \
-H "Content-Type: application/json" \
-d '{ "type":"fs","settings":{"location":"/usr/share/elasticsearch/snapshots"}}'
#还原快照存储库
curl -XPOST \
'http://127.0.0.1:9200/_snapshot/snapshots/snapshot_02/_restore?wait_for_completion=true'
```

### 删除数据
```shell
#根据时间删除部分数据
curl -XPOST \
http://127.0.0.1:9200/{具体的索引库}/_delete_by_query?pretty \
-H "Content-Type: application/json" \
-d '{ "query": {
    "range": {
      "@timestamp": {
        "lt": "2022-10-01T00:00:00Z"
      }
    }
  } }'
#刷新索引 删除 Elasticsearch 索引中的部分数据后，磁盘上可能会出现不必要的碎片。为了回收这些磁盘空间，您可以运行一次索引刷新操作，这将删除已标记为删除但未实际删除的文档，并重新组织剩余文档以减少碎片。
curl -XPOST \
http://127.0.0.1:9200/{具体的索引库}/_refresh?pretty \
-H "Content-Type: application/json" \
-d '{}'
```
#强制合并
curl -XPOST \
http://127.0.0.1:9200/{具体的索引库}/_forcemerge?only_expunge_deletes=true \
-H "Content-Type: application/json" \
-d '{}'
```

## 近实时搜索/refresh

在 Elasticsearch 中，写入和打开一个新段的轻量的过程叫做 refresh 。 默认情况下每个分片会每秒自动刷新一次。这就是为什么我们说 Elasticsearch 是 近 实时搜索: 文档的变化并不是立即对搜索可见，但会在一秒之内变为可见。

这些行为可能会对新用户造成困惑: 他们索引了一个文档然后尝试搜索它，但却没有搜到。这个问题的解决办法是用 refresh API 执行一次手动刷新:
```shell
POST /_refresh 
POST /blogs/_refresh 
```

## es访问权限

因为开源的es是不带访问权限控制的，并不能用于生产环境；商业版插件x-pack是支持用户权限的，但是收费。
可以使用nginx增加访问权限来方向代理es，但是es的9200/9300端口不能外网开放；

```shell
#安装httpd-tools
yum install httpd-tools
mkdir /usr/local/nginx/conf/passwd
htpasswd -c /usr/local/nginx/conf/passwd/es admin
#nginx配置反向代理增加
server
{
    listen 8443;
    location / {
      proxy_set_header Host $host;
      proxy_set_header X-Forwarded-For $remote_addr;
      proxy_pass http://172.17.0.1:9200;
      proxy_connect_timeout 18000;
      proxy_send_timeout 18000;
      proxy_read_timeout 18000;
      #
      auth_basic "Please input password";
      auth_basic_user_file /usr/local/nginx/conf/passwd/es;
   } 
}
```

## GEOIP
```shell
#
yum install GeoIP-data -y
```

## 相关资料

1. [从零学Elasticsearch系列——JAVA API操作](https://blog.csdn.net/qq_31871785/article/details/86138291)
2. [如何把Elasticsearch发挥到极致？](https://yqh.aliyun.com/detail/9912)
3. [ebatis【ebatis 是一个简单方便上手的 Elasticsearch ORM 框架】](https://gitee.com/ymm-tech/ebatis)
