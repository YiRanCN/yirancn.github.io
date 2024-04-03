### 概述

表单有一个叫 enctype 的属性, 它有两个值, application/x-www-form-urlencoded 和 multipart/form-data.

这一属性实际只对 post 方式起作用, 因为 get 方式实际只支持前一种类型, 也就是 application/x-www-form-urlencoded, 这是缺省的类型.

在使用 post 方式提交时, 缺省的编码类型也依然是这个 application/x-www-form-urlencoded.


### application/x-www-form-urlencoded

浏览器默认的编码格式，用于键值对参数，参数之间用&间隔；

### multipart/form-data

常用于文件等二进制，也可用于键值对参数，最后连接成一串字符传输

### 参考

- [Content-Type常见的两种格式：application/x-www-form-urlencoded和multipart/form-data详解](https://blog.csdn.net/qq_45796667/article/details/125239247)