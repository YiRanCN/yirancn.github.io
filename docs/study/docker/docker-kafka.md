### docker kafka

```shell
#
docker pull apache/kafka:3.7.0
#
docker run -d \
-p 9092:9092 \
--privileged=true \
-e TZ=Asia/Shanghai \
--name kafka-study \
apache/kafka:3.7.0
```