### 配置上游服务的keep-alive

```shell
# 如果使用的SpringBoot的undertow 单位为毫秒
server.undertow.always-set-keep-alive=true
server.undertow.keep-alive-timeout=5000000
```

需要确保上游服务有足够多的CPU和内存，否则性能跑不起来

### apisix的路由增加keep-alive

```shell
# 需要在upstream增加如下
# size参数定义了连接池的大小，即连接池中最多可以保存的连接数量。这里设置为 32，表示最多有 32 个与上游服务器的连接可以被复用。
# requests参数指定了一个连接可以被复用的最大请求次数。当一个连接被使用的请求次数达到这个值后，连接将被关闭并重新建立。这里设置为 1000。
# idle_timeout参数定义了连接在空闲状态下可以存活的时间（单位是秒）。如果一个连接在idle_timeout秒内没有被使用，它将被关闭。这里设置为 60 秒。
,"keepalive_pool":{"idle_timeout":60,"requests":1000,"size":32}
# 然后更新
./etcdctl put /apisix/routes/00000000000000000956 '{"upstream":{"timeout":{"connect":180,"read":180,"send":180},"keepalive_pool":{"idle_timeout":60000,"requests":1000,"size":320},"nodes":{"10.0.102.139:20001":100},"pass_host":"node","type":"roundrobin","scheme":"https","hash_on":"vars"},"status":1,"priority":0,"vars":[["http_X-SW-Authorization-TenantCode","==","tenant"],["http_X-SW-Authorization-AppCode","IN",["","testapp"]]],"name":"tenant_加解密服务_tenant_业务","plugins":{},"uris":["/pki/*"],"id":"00000000000000000956","create_time":1729748682,"update_time":1729818639}'
```

{
    "upstream": {
        "timeout": {
            "connect": 180,
            "read": 180,
            "send": 180
        },
        "keepalive_pool": {
            "idle_timeout": 60,
            "requests": 1000,
            "size": 320
        },
        "nodes": {
            "10.0.102.139:20001": 100
        },
        "pass_host": "node",
        "type": "roundrobin",
        "scheme": "https",
        "hash_on": "vars"
    },
    "status": 1,
    "priority": 0,
    "vars": [
        [
            "http_X-SW-Authorization-TenantCode",
            "==",
            "tenant"
        ],
        [
            "http_X-SW-Authorization-AppCode",
            "IN",
            [
                "",
                "testapp"
            ]
        ]
    ],
    "name": "tenant_加解密服务_tenant_业务",
    "plugins": {},
    "uris": [
        "/pki/*"
    ],
    "id": "00000000000000000956",
    "create_time": 1729748682,
    "update_time": 1729818639
}