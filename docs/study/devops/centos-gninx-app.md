# centos()

```shell

mkdir -p /root/iot-cloud-frontend/html

yum install nginx
systemctl start nginx
# 配置文件目录 /etc/nginx
# 默认 root         /usr/share/nginx/html;
# 修改成 root         /root/iot-cloud-frontend/html;
nginx -s reload

# 如果报错403 说明启动nginx的用户和文件不一致 需要修改
```
