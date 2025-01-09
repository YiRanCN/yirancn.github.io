### expect

expect 是一个免费的编程工具，用来实现自动的交互式任务，而无需人为干预。

这个工具在处理调用其他工具，输入密码之类的交互，非常有用。

```shell
expect -c "
set timeout 10;
spawn ssh -p $port $user@$ip;
expect {
    \"password:\" {send \"$pwd\r\";}
    \"yes/no\" {send \"yes\r\"; exp_continue;}
};
expect \"$\";
send \"$remote_command\r\";
expect \"$\";
send \"exit\r\";
" >> node${ind}_${ip}.log
```

- [CSDN-shell 编程之 expect](https://blog.csdn.net/givenchy_yzl/article/details/118079170)
