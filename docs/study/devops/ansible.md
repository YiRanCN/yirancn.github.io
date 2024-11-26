# ansible

https://www.ansible.com/



### 常用

```shell
# 获取最新时间 看时间是否同步
ansible ssh_host -o -m shell -a 'date'
ansible ssh_host -b -o -m shell -a 'sudo ntpdate 10.0.8.18'
# 获取某个变量
cat /opt/ansible/ansible-2.9.9/hosts
cat /opt/ansible/var_file.yaml
ansible pt_host -o -e @/opt/ansible/var_file.yaml -m shell -a 'echo {{odbc_type}}'
# 获取版本
ansible --version
```

### 参考

- [cnblogs-详解一](https://www.cnblogs.com/keerya/p/7987886.html)
- [cnblogs-详解二](https://www.cnblogs.com/keerya/p/8004566.html)