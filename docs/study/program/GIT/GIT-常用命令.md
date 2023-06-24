### clone

```shell
#用户名如果携带@需要使用%40替换
git clone https://用户名:密码@git.coding.net/sample/HelloWorld.git
```

### 把非必要文件已经上传到 git，如何处理

先增加到.gitignore，然后删除本地缓存，再上传到远程仓库
git rm --cached .xxx
git rm-r --cached .yyy
