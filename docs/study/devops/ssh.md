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

### 配置ssh免密登录
配置SSH免密登录的步骤如下：

生成SSH密钥对。在本地计算机的终端或命令提示符中执行以下命令来生成SSH密钥对：ssh-keygen -t rsa，这将创建一个私钥（id_rsa）和一个公钥（id_rsa.pub）。

将公钥复制到目标服务器。使用ssh-copy-id命令将公钥复制到远程服务器上，例如ssh-copy-id username@remote_host，其中username是远程服务器的用户名，remote_host是远程服务器的地址或域名。

测试免密登录。在本地计算机上执行ssh命令，无需输入密码，例如ssh username@remote_host，如果一切正常，则表示SSH免密登录已成功配置。

此外，在目标服务器上，可能需要配置SSH服务以允许免密登录，这通常涉及编辑/etc/ssh/sshd_config文件，并添加RSAAuthentication和PubkeyAuthentication选项，并重启SSH服务。