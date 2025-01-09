"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4968],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>h});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),g=r,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return t?a.createElement(h,s(s({ref:n},c),{},{components:t})):a.createElement(h,s({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},97337:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const o={},s="Apache APISIX",i={unversionedId:"study/back/API\u7f51\u5173/APISIX",id:"study/back/API\u7f51\u5173/APISIX",title:"Apache APISIX",description:"Apache APISIX \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684\u4e91\u539f\u751f API \u7f51\u5173\uff0c\u63d0\u4f9b\u4e86\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002",source:"@site/docs/study/back/API\u7f51\u5173/APISIX.md",sourceDirName:"study/back/API\u7f51\u5173",slug:"/study/back/API\u7f51\u5173/APISIX",permalink:"/docs/study/back/API\u7f51\u5173/APISIX",draft:!1,tags:[],version:"current",lastUpdatedAt:1736407756,formattedLastUpdatedAt:"2025\u5e741\u67089\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"API \u7f51\u5173",permalink:"/docs/study/back/API\u7f51\u5173/"},next:{title:"APISIX\u9ad8\u5e76\u53d1\u4f18\u5316",permalink:"/docs/study/back/API\u7f51\u5173/APISIX\u9ad8\u5e76\u53d1\u4f18\u5316"}},l={},p=[{value:"APISIX \u6240\u5c55\u73b0\u51fa\u7684\u6027\u80fd\u5982\u4f55\uff1f",id:"apisix-\u6240\u5c55\u73b0\u51fa\u7684\u6027\u80fd\u5982\u4f55",level:3},{value:"apisix dashboard",id:"apisix-dashboard",level:3},{value:"\u5982\u4f55\u67e5\u770bapisix\u7684\u7248\u672c",id:"\u5982\u4f55\u67e5\u770bapisix\u7684\u7248\u672c",level:3},{value:"\u56db\u79cd\u90e8\u7f72\u6a21\u5f0f",id:"\u56db\u79cd\u90e8\u7f72\u6a21\u5f0f",level:3},{value:"\u5185\u5b58\u6392\u9664",id:"\u5185\u5b58\u6392\u9664",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"apache-apisix"},"Apache APISIX"),(0,r.yg)("p",null,"Apache APISIX \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684\u4e91\u539f\u751f API \u7f51\u5173\uff0c\u63d0\u4f9b\u4e86\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://apisix.apache.org/zh/"},"\u5b98\u65b9\u7f51\u7ad9")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/getting-started/README/"},"\u5b98\u65b9\u6587\u6863")),(0,r.yg)("p",null,"\u57fa\u4e8e ",(0,r.yg)("a",{parentName:"p",href:"https://openresty.org/cn/"},"OpenResty")," \u548c ",(0,r.yg)("a",{parentName:"p",href:"https://etcd.io/"},"etcd")),(0,r.yg)("h3",{id:"apisix-\u6240\u5c55\u73b0\u51fa\u7684\u6027\u80fd\u5982\u4f55"},"APISIX \u6240\u5c55\u73b0\u51fa\u7684\u6027\u80fd\u5982\u4f55\uff1f"),(0,r.yg)("p",null,"\u4e0e\u5176\u5b83 API \u7f51\u5173\u76f8\u6bd4\uff0cApache APISIX \u63d0\u4f9b\u4e86\u66f4\u597d\u7684\u6027\u80fd\uff0c\u5176\u5355\u6838 QPS \u9ad8\u8fbe 18,000\uff0c\u5e73\u5747\u5ef6\u8fdf\u4ec5\u4e3a 0.2 ms\u3002"),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u60f3\u83b7\u53d6\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5\u7684\u5177\u4f53\u7ed3\u679c\uff0c\u8bf7\u67e5\u770b ",(0,r.yg)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/benchmark/"},"benchmark"),"\u3002"),(0,r.yg)("h3",{id:"apisix-dashboard"},"apisix dashboard"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/dashboard/USER_GUIDE/"},"https://apisix.apache.org/zh/docs/dashboard/USER_GUIDE/")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#\ndocker pull apache/apisix-dashboard\n#\ndocker run -d \\\n--name dashboard \\\n-p 9000:9000        \\\n-v /root/conf.yaml:/usr/local/apisix-dashboard/conf/conf.yaml \\\napache/apisix-dashboard:24.9.26 \n")),(0,r.yg)("p",null,"conf.yaml"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'#\n# Licensed to the Apache Software Foundation (ASF) under one or more\n# contributor license agreements.  See the NOTICE file distributed with\n# this work for additional information regarding copyright ownership.\n# The ASF licenses this file to You under the Apache License, Version 2.0\n# (the "License"); you may not use this file except in compliance with\n# the License.  You may obtain a copy of the License at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an "AS IS" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License.\n#\n\n# yamllint disable rule:comments-indentation\nconf:\n  listen:\n    # host: 127.0.0.1     # the address on which the `Manager API` should listen.\n                          # The default value is 0.0.0.0, if want to specify, please enable it.\n                          # This value accepts IPv4, IPv6, and hostname.\n    port: 9000            # The port on which the `Manager API` should listen.\n\n  # ssl:\n  #   host: 127.0.0.1     # the address on which the `Manager API` should listen for HTTPS.\n                          # The default value is 0.0.0.0, if want to specify, please enable it.\n  #   port: 9001            # The port on which the `Manager API` should listen for HTTPS.\n  #   cert: "/tmp/cert/example.crt" # Path of your SSL cert.\n  #   key:  "/tmp/cert/example.key"  # Path of your SSL key.\n\n  allow_list:             # If we don\'t set any IP list, then any IP access is allowed by default.\n    #- 127.0.0.1           # The rules are checked in sequence until the first match is found.\n    #- 0.0.0.0                 # In this example, access is allowed only for IPv4 network 127.0.0.1, and for IPv6 network ::1.\n                          # It also support CIDR like 192.168.1.0/24 and 2001:0db8::/32\n  etcd:\n    endpoints:            # supports defining multiple etcd host addresses for an etcd cluster\n      - 10.0.101.150:2379\n                          # yamllint disable rule:comments-indentation\n                          # etcd basic auth info\n    # username: "root"    # ignore etcd username if not enable etcd auth\n    # password: "123456"  # ignore etcd password if not enable etcd auth\n    mtls:\n      key_file: ""          # Path of your self-signed client side key\n      cert_file: ""         # Path of your self-signed client side cert\n      ca_file: ""           # Path of your self-signed ca cert, the CA is used to sign callers\' certificates\n    # prefix: /apisix       # apisix config\'s prefix in etcd, /apisix by default\n  log:\n    error_log:\n      level: warn       # supports levels, lower to higher: debug, info, warn, error, panic, fatal\n      file_path:\n        logs/error.log  # supports relative path, absolute path, standard output\n                        # such as: logs/error.log, /tmp/logs/error.log, /dev/stdout, /dev/stderr\n                        # such as absolute path on Windows: winfile:///C:\\error.log\n    access_log:\n      file_path:\n        logs/access.log  # supports relative path, absolute path, standard output\n                         # such as: logs/access.log, /tmp/logs/access.log, /dev/stdout, /dev/stderr\n                         # such as absolute path on Windows: winfile:///C:\\access.log\n                         # log example: 2020-12-09T16:38:09.039+0800    INFO    filter/logging.go:46    /apisix/admin/routes/r1 {"status": 401, "host": "127.0.0.1:9000", "query": "asdfsafd=adf&a=a", "requestId": "3d50ecb8-758c-46d1-af5b-cd9d1c820156", "latency": 0, "remoteIP": "127.0.0.1", "method": "PUT", "errs": []}\n  max_cpu: 0             # supports tweaking with the number of OS threads are going to be used for parallelism. Default value: 0 [will use max number of available cpu cores considering hyperthreading (if any)]. If the value is negative, is will not touch the existing parallelism profile.\n  # security:\n  #   access_control_allow_origin: "http://httpbin.org"\n  #   access_control_allow_credentials: true          # support using custom cors configration\n  #   access_control_allow_headers: "Authorization"\n  #   access_control-allow_methods: "*"\n  #   x_frame_options: "deny"\n  # \u8fd9\u91cc\u9700\u8981\u4fee\u6539\n  content_security_policy: "default-src \'self\'; script-src \'self\' \'unsafe-eval\' \'unsafe-inline\'; style-src \'self\' \'unsafe-inline\'; img-src \'self\' data:; frame-src xx.xx.xx.xx:3000"  # You can set frame-src to provide content for your grafana panel.\n\nauthentication:\n  secret:\n    secret              # secret for jwt token generation.\n                        # NOTE: Highly recommended to modify this value to protect `manager api`.\n                        # if it\'s default value, when `manager api` start, it will generate a random string to replace it.\n  expire_time: 3600     # jwt token expire time, in second\n  users:                # yamllint enable rule:comments-indentation\n    - username: admin   # username and password for login `manager api`\n      password: admin\n    - username: user\n      password: user\n\noidc:\n  enabled: false\n  expire_time: 3600\n  client_id: dashboard\n  client_secret: dashboard\n  auth_url: http://172.17.0.1:8080/auth/realms/master/protocol/openid-connect/auth\n  token_url: http://172.17.0.1:8080/auth/realms/master/protocol/openid-connect/token\n  user_info_url: http://172.17.0.1:8080/auth/realms/master/protocol/openid-connect/userinfo\n  redirect_url: http://127.0.0.1:9000/apisix/admin/oidc/callback\n  scope: openid\n\nplugins:\n  - api-breaker\n  - authz-casbin\n  - authz-casdoor\n  - authz-keycloak\n  - aws-lambda\n  - azure-functions\n  - basic-auth\n  # - batch-requests\n  - clickhouse-logger\n  - client-control\n  - consumer-restriction\n  - cors\n  - csrf\n  - datadog\n  # - dubbo-proxy\n  - echo\n  - error-log-logger\n  # - example-plugin\n  - ext-plugin-post-req\n  - ext-plugin-post-resp\n  - ext-plugin-pre-req\n  - fault-injection\n  - file-logger\n  - forward-auth\n  - google-cloud-logging\n  - grpc-transcode\n  - grpc-web\n  - gzip\n  - hmac-auth\n  - http-logger\n  - ip-restriction\n  - jwt-auth\n  - kafka-logger\n  - kafka-proxy\n  - key-auth\n  - ldap-auth\n  - limit-conn\n  - limit-count\n  - limit-req\n  - loggly\n  # - log-rotate\n  - mocking\n  # - node-status\n  - opa\n  - openid-connect\n  - opentelemetry\n  - openwhisk\n  - prometheus\n  - proxy-cache\n  - proxy-control\n  - proxy-mirror\n  - proxy-rewrite\n  - public-api\n  - real-ip\n  - redirect\n  - referer-restriction\n  - request-id\n  - request-validation\n  - response-rewrite\n  - rocketmq-logger\n  - server-info\n  - serverless-post-function\n  - serverless-pre-function\n  - skywalking\n  - skywalking-logger\n  - sls-logger\n  - splunk-hec-logging\n  - syslog\n  - tcp-logger\n  - traffic-split\n  - ua-restriction\n  - udp-logger\n  - uri-blocker\n  - wolf-rbac\n  - zipkin\n  - elasticsearch-logge\n  - openfunction\n  - tencent-cloud-cls\n  - ai\n  - cas-auth\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#\ndocker pull grafana/grafana\nmkdir -p /root/grafana/conf\n#\ndocker run -d \\\n--name grafana \\\n-p 3000:3000        \\\ngrafana/grafana:24.9.27 \n-v /root/grafana/conf:/usr/share/grafana/conf \\\n#\nhttp://127.0.0.1:3000\n#\nadmin/admin\nadmin/Aa123456\n#\n[auth.anonymous]                                                                                                                           \n# enable anonymous access         \nenabled = true\nallow_embedding = true\n")),(0,r.yg)("p",null,"\u4f7f\u7528prometheus\u6536\u96c6apisix\u7684\u6307\u6807\u4fe1\u606f\uff0c\u9664\u4e86\u6536\u96c6\u4e5f\u53ef\u4ee5\u6709\u7b80\u5355\u7684web\u754c\u9762\u3001\u56fe\u8868\u5c55\u793a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#\ndocker pull prom/prometheus\n#\ndocker run -d \\\n--name prometheus \\\n-p 9090:9090        \\\n-v /etc/localtime:/etc/localtime \\\nprom/prometheus:latest \n#\nvi /etc/prometheus/prometheus.yml \n# \u8fdb\u5165\u5bb9\u5668\u589e\u52a0\n- job_name: 'apisix'\n    scrape_interval: 10s\n    metrics_path: '/apisix/prometheus/metrics'\n    static_configs:\n      - targets: ['10.0.101.150:9091']\n")),(0,r.yg)("p",null,"\u9700\u8981apisix\u6253\u5f00\u76f4\u9500\u4fe1\u606f\u6536\u96c6\u63a5\u53e3"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# \u4fee\u6539apisix\u7684\u914d\u7f6e\u6587\u4ef6 \u6253\u5f00Prometheus\nvi config-default.yaml\n#\nenable_export_server: true              # Enable the Prometheus export server.\nexport_addr:                            # Set the address for the Prometheus export server.\nip: 10.0.101.150                         # Set the IP.\nport: 9091                            # Set the port.\n#\ncurl -i http://10.0.101.150:9091/apisix/prometheus/metrics\n")),(0,r.yg)("h3",{id:"\u5982\u4f55\u67e5\u770bapisix\u7684\u7248\u672c"},"\u5982\u4f55\u67e5\u770bapisix\u7684\u7248\u672c"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"cat /opt/ccsp/apisix/apisix/core/version.lua\n/opt/ccsp/apisix/deps/bin/apisix version\n")),(0,r.yg)("h3",{id:"\u56db\u79cd\u90e8\u7f72\u6a21\u5f0f"},"\u56db\u79cd\u90e8\u7f72\u6a21\u5f0f"),(0,r.yg)("p",null,'"traditional", "control_plane", "data_plane", "standalone"'),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u4f20\u7edf\u6a21\u5f0f"),(0,r.yg)("li",{parentName:"ul"},"\u63a7\u5236\u6a21\u5f0f\uff0c\u7ba1\u7406\u63a5\u53e3"),(0,r.yg)("li",{parentName:"ul"},"\u6570\u636e\u6a21\u5f0f\uff0c\u4e1a\u52a1\u63a5\u53e3"),(0,r.yg)("li",{parentName:"ul"},"\u5355\u673a\u6a21\u5f0f")),(0,r.yg)("h3",{id:"\u5185\u5b58\u6392\u9664"},"\u5185\u5b58\u6392\u9664"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\u5148\u67e5\u5230worker\u8fdb\u7a0b\u5185\u5b58\u4fe1\u606f\nps -ef|grep `ps -ef|grep /bin/openresty |grep apisix|grep -v grep|awk '{print $2}'`|grep worker|awk '{ system(\"ps -aux| grep \" $2) }'|grep -v grep\n\n\u518d\u67e5\u627e\u5404worker\u8fdb\u7a0b\u7684\u5185\u5b58\u5206\u914d\u60c5\u51b5\uff0c\u627e\u5230\u5f02\u5e38\u7684\u5185\u5b58\u5730\u5740\u5757\uff0c\u8bb0\u5f55\u9996\u5730\u5740StartAddress\npmap -XX {PID}\n\n\u518d\u6839\u636e\u5730\u5740\u5757\u9996\u5730\u5740\u627e\u5230\u5730\u5740\u5757\u7684\u9996\u5c3e\u5730\u5740\uff1aStartAddress-EndAddress\ncat /proc/{PID}/maps\n\n\u901a\u8fc7gdb\u6293\u53d6\u8be5\u5730\u5740\u5757\u7684\u5185\u5b58\u5feb\u7167\ngdb attach {PID}\n(gdb) dump memory /root/37.211_72508c9b2000-72508e933000_20250105145100.dump 0x\u9996\u5730\u5740 0x\u5c3e\u5730\u5740\n\n\u67e5\u770b\u5feb\u7167\u5185\u5bb9\nstrings -n 12 37.211_72508c9b2000-72508e933000_20250105145100.dump\n")),(0,r.yg)("h1",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://blog.csdn.net/zcs2312852665/article/details/137352254"},"https://blog.csdn.net/zcs2312852665/article/details/137352254")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.cnblogs.com/Chary/p/18050607"},"https://www.cnblogs.com/Chary/p/18050607"))))}d.isMDXComponent=!0}}]);