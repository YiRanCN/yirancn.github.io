# ssh

### ssh连接不上

现场描述：

使用ssh ccsp@10.0.120.44 命令后，过了很久才返回
```shell
Connection closed by 10.0.120.44 port 22
```

有的服务器是可以，当时连接不上的这个服务器是Ubuntu，10.0.120.44所在操作系统是欧拉。

解决方案：

我一度怀疑是ssh的问题，因为有的服务器能够正常的连接，而且用自己的windows客户端都是可以正常连接的。

使用命令 
```shell
ssh -v  ccsp@10.0.120.44
```
输出打印日志，发现了一点踪迹，
```shell
debug1: Unspecified GSS failure.  Minor code may provide more information
No Kerberos credentials available (default cache: FILE:/tmp/krb5cc_994)
```

***解决方案***

```shell
ssh -v -o GSSAPIAuthentication=no ccsp@10.0.120.44
```
增加参数 禁用GSSAPIAuthentication

原因是client和server的ssh版本是不一致的，client的版本有点低。