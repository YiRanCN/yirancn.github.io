```shell
#
docker pull mysql:8.0.33
# 纯粹学习使用
docker run -d \
-p 13306:3306 \
--privileged=true \
-e TZ=Asia/Shanghai \
-e MYSQL_ROOT_PASSWORD=Aa0123 \
--name mysql-study \
mysql:8.0.33


docker exec -it mysql-study bash

mysql -u root -p

use mysql
update user set authentication_string ='' where user = 'root';
flush privileges;
ALTER user 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'Aa0123';
ALTER user 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Aa0123';
flush privileges;


docker stop mysql-study
docker rm mysql-study
```