# Apache APISIX

Apache APISIX 是一个动态、实时、高性能的云原生 API 网关，提供了负载均衡、动态上游、灰度发布、服务熔断、身份认证、可观测性等丰富的流量管理功能。

[官方网站](https://apisix.apache.org/zh/)

[官方文档](https://apisix.apache.org/zh/docs/apisix/getting-started/README/)

基于 [OpenResty](https://openresty.org/cn/) 和 [etcd](https://etcd.io/)

### APISIX 所展现出的性能如何？

与其它 API 网关相比，Apache APISIX 提供了更好的性能，其单核 QPS 高达 18,000，平均延迟仅为 0.2 ms。

如果您想获取性能基准测试的具体结果，请查看 [benchmark](https://apisix.apache.org/zh/docs/apisix/benchmark/)。


### apisix dashboard

https://apisix.apache.org/zh/docs/dashboard/USER_GUIDE/

```shell
#
docker pull apache/apisix-dashboard
#
docker run -d \
--name dashboard \
-p 9000:9000        \
-v /root/conf.yaml:/usr/local/apisix-dashboard/conf/conf.yaml \
apache/apisix-dashboard:24.9.26 
```

conf.yaml

```shell
#
# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

# yamllint disable rule:comments-indentation
conf:
  listen:
    # host: 127.0.0.1     # the address on which the `Manager API` should listen.
                          # The default value is 0.0.0.0, if want to specify, please enable it.
                          # This value accepts IPv4, IPv6, and hostname.
    port: 9000            # The port on which the `Manager API` should listen.

  # ssl:
  #   host: 127.0.0.1     # the address on which the `Manager API` should listen for HTTPS.
                          # The default value is 0.0.0.0, if want to specify, please enable it.
  #   port: 9001            # The port on which the `Manager API` should listen for HTTPS.
  #   cert: "/tmp/cert/example.crt" # Path of your SSL cert.
  #   key:  "/tmp/cert/example.key"  # Path of your SSL key.

  allow_list:             # If we don't set any IP list, then any IP access is allowed by default.
    #- 127.0.0.1           # The rules are checked in sequence until the first match is found.
    #- 0.0.0.0                 # In this example, access is allowed only for IPv4 network 127.0.0.1, and for IPv6 network ::1.
                          # It also support CIDR like 192.168.1.0/24 and 2001:0db8::/32
  etcd:
    endpoints:            # supports defining multiple etcd host addresses for an etcd cluster
      - 10.0.101.150:2379
                          # yamllint disable rule:comments-indentation
                          # etcd basic auth info
    # username: "root"    # ignore etcd username if not enable etcd auth
    # password: "123456"  # ignore etcd password if not enable etcd auth
    mtls:
      key_file: ""          # Path of your self-signed client side key
      cert_file: ""         # Path of your self-signed client side cert
      ca_file: ""           # Path of your self-signed ca cert, the CA is used to sign callers' certificates
    # prefix: /apisix       # apisix config's prefix in etcd, /apisix by default
  log:
    error_log:
      level: warn       # supports levels, lower to higher: debug, info, warn, error, panic, fatal
      file_path:
        logs/error.log  # supports relative path, absolute path, standard output
                        # such as: logs/error.log, /tmp/logs/error.log, /dev/stdout, /dev/stderr
                        # such as absolute path on Windows: winfile:///C:\error.log
    access_log:
      file_path:
        logs/access.log  # supports relative path, absolute path, standard output
                         # such as: logs/access.log, /tmp/logs/access.log, /dev/stdout, /dev/stderr
                         # such as absolute path on Windows: winfile:///C:\access.log
                         # log example: 2020-12-09T16:38:09.039+0800    INFO    filter/logging.go:46    /apisix/admin/routes/r1 {"status": 401, "host": "127.0.0.1:9000", "query": "asdfsafd=adf&a=a", "requestId": "3d50ecb8-758c-46d1-af5b-cd9d1c820156", "latency": 0, "remoteIP": "127.0.0.1", "method": "PUT", "errs": []}
  max_cpu: 0             # supports tweaking with the number of OS threads are going to be used for parallelism. Default value: 0 [will use max number of available cpu cores considering hyperthreading (if any)]. If the value is negative, is will not touch the existing parallelism profile.
  # security:
  #   access_control_allow_origin: "http://httpbin.org"
  #   access_control_allow_credentials: true          # support using custom cors configration
  #   access_control_allow_headers: "Authorization"
  #   access_control-allow_methods: "*"
  #   x_frame_options: "deny"
  # 这里需要修改
  content_security_policy: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; frame-src xx.xx.xx.xx:3000"  # You can set frame-src to provide content for your grafana panel.

authentication:
  secret:
    secret              # secret for jwt token generation.
                        # NOTE: Highly recommended to modify this value to protect `manager api`.
                        # if it's default value, when `manager api` start, it will generate a random string to replace it.
  expire_time: 3600     # jwt token expire time, in second
  users:                # yamllint enable rule:comments-indentation
    - username: admin   # username and password for login `manager api`
      password: admin
    - username: user
      password: user

oidc:
  enabled: false
  expire_time: 3600
  client_id: dashboard
  client_secret: dashboard
  auth_url: http://172.17.0.1:8080/auth/realms/master/protocol/openid-connect/auth
  token_url: http://172.17.0.1:8080/auth/realms/master/protocol/openid-connect/token
  user_info_url: http://172.17.0.1:8080/auth/realms/master/protocol/openid-connect/userinfo
  redirect_url: http://127.0.0.1:9000/apisix/admin/oidc/callback
  scope: openid

plugins:
  - api-breaker
  - authz-casbin
  - authz-casdoor
  - authz-keycloak
  - aws-lambda
  - azure-functions
  - basic-auth
  # - batch-requests
  - clickhouse-logger
  - client-control
  - consumer-restriction
  - cors
  - csrf
  - datadog
  # - dubbo-proxy
  - echo
  - error-log-logger
  # - example-plugin
  - ext-plugin-post-req
  - ext-plugin-post-resp
  - ext-plugin-pre-req
  - fault-injection
  - file-logger
  - forward-auth
  - google-cloud-logging
  - grpc-transcode
  - grpc-web
  - gzip
  - hmac-auth
  - http-logger
  - ip-restriction
  - jwt-auth
  - kafka-logger
  - kafka-proxy
  - key-auth
  - ldap-auth
  - limit-conn
  - limit-count
  - limit-req
  - loggly
  # - log-rotate
  - mocking
  # - node-status
  - opa
  - openid-connect
  - opentelemetry
  - openwhisk
  - prometheus
  - proxy-cache
  - proxy-control
  - proxy-mirror
  - proxy-rewrite
  - public-api
  - real-ip
  - redirect
  - referer-restriction
  - request-id
  - request-validation
  - response-rewrite
  - rocketmq-logger
  - server-info
  - serverless-post-function
  - serverless-pre-function
  - skywalking
  - skywalking-logger
  - sls-logger
  - splunk-hec-logging
  - syslog
  - tcp-logger
  - traffic-split
  - ua-restriction
  - udp-logger
  - uri-blocker
  - wolf-rbac
  - zipkin
  - elasticsearch-logge
  - openfunction
  - tencent-cloud-cls
  - ai
  - cas-auth
```

```shell
#
docker pull grafana/grafana
mkdir -p /root/grafana/conf
#
docker run -d \
--name grafana \
-p 3000:3000        \
grafana/grafana:24.9.27 
-v /root/grafana/conf:/usr/share/grafana/conf \
#
http://127.0.0.1:3000
#
admin/admin
admin/Aa123456
#
[auth.anonymous]                                                                                                                           
# enable anonymous access         
enabled = true
allow_embedding = true
```


使用prometheus收集apisix的指标信息，除了收集也可以有简单的web界面、图表展示

```shell
#
docker pull prom/prometheus
#
docker run -d \
--name prometheus \
-p 9090:9090        \
-v /etc/localtime:/etc/localtime \
prom/prometheus:latest 
#
vi /etc/prometheus/prometheus.yml 
# 进入容器增加
- job_name: 'apisix'
    scrape_interval: 10s
    metrics_path: '/apisix/prometheus/metrics'
    static_configs:
      - targets: ['10.0.101.150:9091']
```

需要apisix打开直销信息收集接口

```shell
# 修改apisix的配置文件 打开Prometheus
vi config-default.yaml
#
enable_export_server: true              # Enable the Prometheus export server.
export_addr:                            # Set the address for the Prometheus export server.
ip: 10.0.101.150                         # Set the IP.
port: 9091                            # Set the port.
#
curl -i http://10.0.101.150:9091/apisix/prometheus/metrics
```

### 如何查看apisix的版本

```shell
cat /opt/ccsp/apisix/apisix/core/version.lua
/opt/ccsp/apisix/deps/bin/apisix version
```

### 四种部署模式

"traditional", "control_plane", "data_plane", "standalone"

- 传统模式
- 控制模式，管理接口
- 数据模式，业务接口
- 单机模式

### 内存排除

```shell
先查到worker进程内存信息
ps -ef|grep `ps -ef|grep /bin/openresty |grep apisix|grep -v grep|awk '{print $2}'`|grep worker|awk '{ system("ps -aux| grep " $2) }'|grep -v grep

再查找各worker进程的内存分配情况，找到异常的内存地址块，记录首地址StartAddress
pmap -XX {PID}

再根据地址块首地址找到地址块的首尾地址：StartAddress-EndAddress
cat /proc/{PID}/maps

通过gdb抓取该地址块的内存快照
gdb attach {PID}
(gdb) dump memory /root/37.211_72508c9b2000-72508e933000_20250105145100.dump 0x首地址 0x尾地址

查看快照内容
strings -n 12 37.211_72508c9b2000-72508e933000_20250105145100.dump
```



# 参考

- https://blog.csdn.net/zcs2312852665/article/details/137352254
- https://www.cnblogs.com/Chary/p/18050607

