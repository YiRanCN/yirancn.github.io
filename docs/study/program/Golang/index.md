# Golang

### Go 语言设计初衷

为了解决当时 Google 开发遇到的问题：

1. 编译慢；
2. 大量的 C++代码，同时又引入了 Java 和 Python；
3. 更新的花费越来越长；
4. 分布式的编译系统；
5. 数百万的服务器；

### Go 语言的特色

1. 高效的并发编程（[基于 CSP](https://zh.wikipedia.org/wiki/%E9%80%9A%E4%BF%A1%E9%A1%BA%E5%BA%8F%E8%BF%9B%E7%A8%8B)）；
2. 内存回收(GC)；
3. 编译速度快；
4. 函数多返回值；
5. 语言交互性；
6. 没有异常处理(Error is value)；

### Go 语言的优势

1. 学习曲线容易；
2. 效率：快速的编译时间，开发效率和运行效率高；
3. 出身名门，血统纯正；
4. 并行和异步编程几乎没有痛点；
5. 自由高效：组合的思想、无侵入式的接口、强大的标准库、部署方便、稳定性；

### 我们为什么选择 Go 语言

1. 执行性能
2. 开发效率

### Go 语言能做什么

1. 服务器编程；
2. 分布式系统、数据库代理器、中间件等；
3. 网络编程；
4. 数据库操作；
5. 开发云平台；

### 信息

- 官网:https://golang.google.cn/
- API 文档:https://golang.google.cn/doc/
- 教程:http://www.w3cschool.cn/go/go-tutorial.html
- 下载:https://golang.google.cn/dl/
- 标准库：https://pkg.go.dev/std
- [Go 语言设计与实现](https://draveness.me/golang/)
  - 重点是设计原理 挺底层的
- [李文周-Go 语言学习之路/Go 语言教程](https://www.liwenzhou.com/posts/Go/golang-menu/)
  - [fmt 格式化语法](https://www.liwenzhou.com/posts/Go/fmt/)
- Go语言中文文档 ：https://www.topgoer.com/
  - 必看，非常全
- GO语言设计模式 ：https://www.topgoer.cn/docs/golang-design-pattern/golang-design-pattern-1cbgha2ltg796
- GO语言标准库文档：https://topgoer.cn/docs/golangstandard/golangstandard-1cmks9a4kaj3c
- 地鼠文档，学习GO的好地方：https://www.topgoer.cn/
  - 必看

### GC

- [知乎-Golang 内存管理之 GC](https://zhuanlan.zhihu.com/p/593008674?utm_id=0)

### 安全编译

在Go语言中，“安全编译”可能指的是使用安全的编译参数，以确保代码的安全性和性能最优。这通常涉及到使用编译器的各种安全和性能参数，比如：

使用 -s 或 -w 参数来减少编译后的二进制文件大小，去掉调试信息和符号信息。

使用 -ldflags 来设置链接器的标志，比如 -s -w 来进一步优化编译结果。

使用 -buildmode 参数来指定编译模式，比如 pie 来生成位置无关的可执行文件，增加安全性。

下面是一个简单的例子，演示如何使用 -ldflags 来优化编译结果：

go build -ldflags "-s -w" -o myapp .

这条命令会编译当前目录下的Go代码，并输出一个没有调试信息、符号和优化过的、体积更小的可执行文件 myapp。

如果你想进一步确保安全性，可以使用Go的安全性标志，比如 -tags safe，这取决于你使用的第三方库是否支持这个tag。

go build -tags safe -o myapp .

请注意，每个项目可能有特定的安全和性能要求，因此编译参数应根据具体情况选择和调整。

```shell
#
go build -ldflags "-s -w -buildmode=pie -linkmode external -extldflags=-Wl,-z,relro,-z,now" -o CcspUtilRemote-`uname -m`
#
go build -tags safe -o myapp .
# 使用此命令查看
go tool link --help
```

实际问题例子：

```shell
# 安全编译检查 出现两个问题 [STACK CANARY/FORTIFY]
checksec --file=./xxx-x86_64
# 处理[STACK CANARY/FORTIFY] 增加CGO 以及CGO代码文件cgo_safe.go
CGO_ENABLED=1 CGO_CFLAGS="-fstack-protector-all -D_FORTIFY_SOURCE=2 -O"  go build -ldflags "-s -w -buildmode=pie -linkmode external -extldflags=-Wl,-z,relro,-z,now"   -o xxx-`uname -m`
```

cgo_safe.go

```go
package main

/*

#include <stdio.h>
#include <stdlib.h>

*/

import "C"
import "fmt"

func init() {
	s := C.CString("hello")
	fmt.Println(s)

	//   C.puts(s)
	// C.free(unsafe.Pointer(s))
}

```

### 跨平台编译

具体操作

编译跨平台的只需要修改GOOS、GOARCH、CGO_ENABLED三个环境变量即可

- GOOS：目标平台的操作系统(darwin、freebsd、linux、windows)
- GOARCH：目标平台的体系架构32位还是64位(386、amd64、arm)
- 交叉编译不支持 CGO 所以要禁用它

### CGO

- [CGO:让Go程序调用C函数的神器](https://blog.csdn.net/qq_42538588/article/details/131167683)
- [go语言调用c语言动态库及交叉编译](https://blog.csdn.net/weixin_43128854/article/details/122956384)

### go mod 依赖问题

- go mod init：初始化go mod， 生成go.mod文件，后可接参数指定 module 名，上面已经演示过。
- go mod download：手动触发下载依赖包到本地cache（默认为$GOPATH/pkg/mod目录）
- go mod graph： 打印项目的模块依赖结构
- go mod tidy ：添加缺少的包，且删除无用的包
- go mod verify ：校验模块是否被篡改过
- go mod why： 查看为什么需要依赖
- go mod vendor ：导出项目所有依赖到vendor下
- go mod edit ：编辑go.mod文件，接 -fmt 参数格式化 go.mod 文件，接 -require=golang.org/x/text 添加依赖，接 -droprequire=golang.org/x/text 删除依赖，详情可参考 go help mod edit
- go list -m -json all：以 json 的方式打印依赖详情- 
- [Golang中GoPath和GoModule模式的区别](https://blog.csdn.net/kenkao/article/details/124550249)

### 代理

```shell
#
go env
# 原代理
# GOPROXY='https://proxy.golang.org,direct'
# go模块（七牛云）代理
go env -w GOPROXY=https://goproxy.cn,direct
```