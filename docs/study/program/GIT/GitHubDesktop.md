# GitHub Desktop

我一般是使用这个工具，但是有一次更新之后，报错如下

```shell
ERROR: Couldn't connect to 127.0.0.1:49196 - Please make sure you don't have an antivirus or firewall blocking this connection. (10013): fatal: could not read Username for 'http://10.0.8.45': terminal prompts disabled
```

解决方式：

找到.git文件夹，下面有个config文件，找到如下，增加用户名和密码

```shell
[remote "origin"]
	url = http://{用户名}:{增加}@10.0.8.45/ccsp/vuemanagementplatform.git
	fetch = +refs/heads/*:refs/remotes/origin/*
```