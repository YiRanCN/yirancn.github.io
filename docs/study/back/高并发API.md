---
sidebar_position: 2
---

### 总结

1. 单机百万QPS的Nginx是没有问题的，具体能到多少，受限于：
   1. 服务器的CPU数量、内存大小、磁盘性能；
   2. 服务器Linux的配置
   3. Nginx的参数配置
   4. 网卡的配置、路由器的配置、交换机的配置
3. 单机Tomcat受限于JVM和web框架等原因，也就最多1万左右的QPS；
   1. 如果需要简单查询数据库的，也就2~3K的QPS；
   2. 如果需要数据库事务操作的，也就100~150的QPS；
4. 什么时候需要水平拓展QPS
5. HTTP压测工具之wrk；
   1. [HTTP压测工具之wrk](https://www.jianshu.com/p/ac185e01cc30)
   2. [性能测试工具wrk使用教程](https://www.cnblogs.com/quanxiaoha/p/10661650.html)
6. 一般来说，不一定很准确，参考：
   1. 2C4G机器单机一般1000QPS。
   2. 8C8G机器单机可承受7000QPS。

### wrk操作

```shell
#scripts/post.lua
vim post.lua
#
wrk.method = "POST"
wrk.body   = '{"domain":"xxx.xxx.xxx"}'
wrk.headers["Content-Type"] = "application/json"
#
./wrk -t4 -c1000 -d5s -s /root/code/wrk/scripts/post.lua  {具体的URL}
```

### Nginx统计访问量

#### 根据访问IP统计UV
```shell
# 根据访问IP统计UV
cat /mnt/docker/tomcat/logs/{具体的nginx log} \
| grep "21/May/2020" | awk '{print $1}' \
|sort | uniq -c |wc -l
```
#### 根据访问URL统计PV
```shell
# 根据访问URL统计PV
cat /mnt/docker/tomcat/logs/{具体的nginx log文件} \
| grep "21/May/2020" \
| awk '{print $7}' |wc -l
```
#### 根据访问URL统计QPS
```shell
# 根据访问URL统计QPS
cat /mnt/docker/tomcat/logs/{具体的nginx log文件} \
| grep "21/May/2020:16:39:" \
| awk '{print $7}' |wc -l
```

#### 查询访问最频繁的URL
```shell
# 查询访问最频繁的URL
cat /usr/local/nginx/logs/access.log \
| grep "29/Feb/2020" | awk '{print $7}' \
|sort | uniq -c |sort -n -k 1 -r|more
```
#### 查询访问最频繁的IP
```shell
# 查询访问最频繁的IP
cat /mnt/docker/tomcat/logs/{具体的nginx log文件} \
| grep "12/May/2020" | awk '{print $1}' \
|sort | uniq -c |sort -n -k 1 -r|more
```
#### 根据时间段统计查看日志
```shell
# 根据时间段统计查看日志
cat  /usr/local/nginx/logs/access.log \
| sed -n '/14\/Mar\/2015/,/14\/Mar\/2020/p'|more
```
#### 某个时间段访问总次数
```shell
# 某个时间段访问总次数
cat /usr/local/nginx/logs/access.log \
|  grep -E '16\/Feb\/2020:1[2-9]|29\/Feb\/2020:2[0-3]'| wc -
```
#### 查看访问最频繁的前5个IP，并列出访问次数
```shell
#查看访问最频繁的前5个IP，并列出访问次数
cat /usr/local/nginx/logs/access.log \
| grep "29/Feb/2020" | awk '{print $1}'|sort -n|uniq -c| sort -rn| head -5
```
#### 统计状态码为200次数
```shell
# 统计状态码为200次数
cat /usr/local/nginx/logs/access.log \
| grep "29/Feb/2020" | awk '{if($9 == 200) print $9}'|wc -l
```
#### 统计状态码不是200的次数
```shell
#统计状态码不是200的次数
cat /usr/local/nginx/logs/access.log \
| grep "29/Feb/2020" | awk '{if($9 != 200) print }'|less
```
#### 查看404错误码的请求
```shell
#查看404错误码的请求
cat /usr/local/nginx/logs/access.log \
| grep "29/Feb/2020" | grep "404"|less
```
#### 每隔5分钟访问次数列表
```shell
#每隔5分钟访问次数列表
cat /usr/local/nginx/logs/access.log \
| grep "29/Feb/2020" \
| awk -F: '{a[$2":"($3-$3%5)]++}END\
{for(i in a){split(i,t);print i" 至",t[1]":"t[2]+4," \
访问 "a[i] " 次" | "sort -t: -k1n -k2n"}}'
```
#### 查询某个IP的详细访问情况,按访问频率排序
```shell
#查询某个IP的详细访问情况,按访问频率排序
cat /usr/local/nginx/logs/access.log \
| grep "29/Feb/2020" | grep '122.4.22.242' \
| awk '{print $7}'|sort |uniq -c |sort -rn |head -n 100
```
#### 统计每秒的请求数,top100的时间点(精确到秒)
```shell
#统计每秒的请求数,top100的时间点(精确到秒)
cat /usr/local/nginx/logs/access.log \
| grep "29/Feb/2020" | awk '{print $4}' \
|cut -c 14-21|sort|uniq -c|sort -nr|head -n 100
```
#### 统计每分钟的请求数,top100的时间点(精确到分钟)
```shell
#统计每分钟的请求数,top100的时间点(精确到分钟)
cat /usr/local/nginx/logs/access.log \
| grep "29/Feb/2020" | awk '{print $4}' \
|cut -c 14-18|sort|uniq -c|sort -nr|head -n 100
```
#### 统计每小时的请求数,top100的时间点(精确到小时)
```shell
#统计每小时的请求数,top100的时间点(精确到小时)
cat /mnt/docker/tomcat/logs/{具体的nginx log文件} \
| grep "21/May/2020" | awk '{print $4}' \
|cut -c 14-15|sort|uniq -c|sort -nr|head -n 100
```

#### 其他，未分类

```shell

##性能分析
#在nginx log中最后一个字段加入$request_time
#列出传输时间超过 3 秒的页面，显示前20条
cat /usr/local/nginx/logs/access.log | grep "29/Feb/2020" \
| awk '($NF > 3){print $7}'|sort -n|uniq -c|sort -nr|head -20

##TCP连接统计
#查看当前TCP连接数
netstat -tan | grep "ESTABLISHED" | grep ":80" | wc -l
#用tcpdump嗅探80端口的访问看看谁最高
tcpdump -i eth0 -tnn dst port 80 -c 1000 \
| awk -F"." '{print $1"."$2"."$3"."$4}' | sort | uniq -c | sort -nr

```

### 名词解释

1. PV（Page View）访问量, 即页面浏览量或点击量，衡量网站用户访问的网页数量；在一定统计周期内用户每打开或刷新一个页面就记录1次，多次打开或刷新同一页面则浏览量累计。
2. UV（Unique Visitor）独立访客，统计1天内访问某站点的用户数(以cookie为依据);访问网站的一台电脑客户端为一个访客。可以理解成访问某网站的电脑的数量。网站判断来访电脑的身份是通过来访电脑的cookies实现的。如果更换了IP后但不清除cookies，再访问相同网站，该网站的统计中UV数是不变的。如果用户不保存cookies访问、清除了cookies或者更换设备访问，计数会加1。00:00-24:00内相同的客户端多次访问只计为1个访客。
3. IP（Internet Protocol）独立IP数，是指1天内多少个独立的IP浏览了页面，即统计不同的IP浏览用户数量。同一IP不管访问了几个页面，独立IP数均为1；不同的IP浏览页面，计数会加1。 IP是基于用户广域网IP地址来区分不同的访问者的，所以，多个用户（多个局域网IP）在同一个路由器（同一个广域网IP）内上网，可能被记录为一个独立IP访问者。如果用户不断更换IP，则有可能被多次统计。
4. 会话次数（网站访问量）Session，会话是指在指定的时间段内在您的网站上发生的一系列互动，所以会话次数是一段时间内用户向您的网站发起的会话（Session）总数量。一次会话会浏览一个或多个页面



### 参考

1. [Nginx 单机百万QPS环境搭建](https://www.cnblogs.com/wunaozai/p/6073731.html)
