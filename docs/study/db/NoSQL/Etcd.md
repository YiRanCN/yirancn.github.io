ETCD是CoreOs公司发布的一个分布式的、高可用的、key-value存储的数据库。基于Go语言实现，k8s中也使用了ETCD作为数据库。主要用于共享配置和服务发现。相对于zookeeper采用的Paxos，ETCD采用的是Raft算法，该算法具备的性能更佳、数据一致性强等优点。

ETCD存储数据量默认为2GB，最大可以设置为8GB。针对ETCD存储数据量较小的特性，故建议ETCD最好作为热点数据存储的数据库使用，而不能作为应用数据持久化的数据库使用。常见的使用场景如下：

场景1：服务发现（Service Discovery）

场景2：消息发布与订阅

场景3：负载均衡

场景4：分布式通知与协调

场景5：分布式锁、分布式队列

场景6：集群监控与Leader竞选。

比如：某个用户需要一个分布式存储仓库来存储配置信息，并且对于读写速度、高可用、部署便捷等方面都有要求，则该场景可以优先考虑ETCD数据库。当前使广泛的kubernetes，亦使用ETCD来存储docker集群的配置信息。

[官方文档](https://etcd.io/docs/v3.5/)

故障模式 https://etcd.io/docs/v3.5/op-guide/failures/

### etcdctl

etcdctl is a command line client for etcd.

[官方文档](https://github.com/etcd-io/etcd/tree/main/etcdctl)

#### 数据相关命令
```shell
# help 
./etcdctl --help
# 返回所有 包括value
./etcdctl get --from-key '' -w fields
# 返回所有 只有key
./etcdctl get --from-key '' --keys-only -w fields
# 根据key的前缀查询
./etcdctl get --prefix /apisix/upstreams/451739158021407449 -w fields
# 列形式返回
./etcdctl get --prefix /apisix/upstreams -w fields
# 只返回key
./etcdctl get --prefix /apisix/routes -w simple --keys-only
./etcdctl get --insecure-skip-tls-verify=true --insecure-transport=false --prefix /apisix/routes -w simple --keys-only
# 返回指定key
./etcdctl get /apisix/routes/488415811682173648
# 更新指定key的value
./etcdctl put /mykey "my new value" --if-exists
```

#### 集群维护相关命令
```shell
# 集群内所有节点 
./etcdctl member list -w table
# 集群内所有节点状态
./etcdctl endpoint --cluster health
# 集群内所有节点状态 会有哪个是领导者、学习者
./etcdctl -w table endpoint --cluster status
# 报警列表
./etcdctl alarm list
```

### 参考 

- [知乎-ETCD概述](https://zhuanlan.zhihu.com/p/638288999)