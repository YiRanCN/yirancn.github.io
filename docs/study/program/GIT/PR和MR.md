### 简介

我们知道Git协作中最重要的一个步骤是Pull Requests（简称PR,Gitlab中也叫Merge requests，MR）,PR和MR这两个操作的目的是一个意思，只不过PR是GitHub的使用方法，MR是Gitlab的的使用方法。

### GitHub的Fork-PR模式

1. 首先fork一个工程
2. 修改代码并提交PR请求
3. 开源作者review代码，并根据情况PR请求

### Gitlab的MR模式

1. 一般MR到的分支都是master，master是受保护的，普通开发者是没有权限push的；
2. 普通开发者提交MR请求；
3. 主开发人员review代码，并根据情况同意合并请求
