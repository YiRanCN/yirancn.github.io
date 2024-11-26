以下是一些常见的cgo支持的函数和类型以及查询的方法：

### 常见支持的类型：
- **数值类型**：
    - **C.char**：对应Go语言中的`byte`类型 。
    - **C.schar**：对应Go语言中的`int8`类型 。
    - **C.uchar**：对应Go语言中的`uint8`类型 。
    - **C.short**：对应Go语言中的`int16`类型 。
    - **C.ushort**：对应Go语言中的`uint16`类型 。
    - **C.int**：对应Go语言中的`int32`类型 。
    - **C.uint**：对应Go语言中的`uint32`类型 。
    - **C.long**：对应Go语言中的`int32`类型 。
    - **C.ulong**：对应Go语言中的`uint32`类型 。
    - **C.longlong**：对应Go语言中的`int64`类型 。
    - **C.ulonglong**：对应Go语言中的`uint64`类型 。
    - **C.float**：对应Go语言中的`float32`类型 。
    - **C.double**：对应Go语言中的`float64`类型 。
    - **C.size_t**：可当作Go语言中的`uint`无符号整数类型对待 。
- **字符串和切片类型**：
    - **`*C.char`**：C语言中的字符串类型，以`null`字符结尾，可与Go语言的`string`类型通过`C.CString`、`C.GoString`等函数进行转换.
    - **`[]byte`与`unsafe.Pointer`**：`[]byte`切片可通过`C.CBytes`函数转换为`unsafe.Pointer`类型的C语言字节数组，反之可通过`C.GoBytes`函数将C语言字节数组转换为`[]byte`切片.
- **结构体、联合、枚举类型**：可以在Go代码中定义和使用C结构体，通过`import "C"`导入后，可直接使用C结构体类型来声明变量和操作结构体成员.

### 常见支持的函数：
- **类型转换函数** ：
    - **`C.CString(string)`**：将Go语言的`string`转换为C语言的`*C.char`类型，返回的字符串由C语言的`malloc`函数分配内存，使用后需调用`C.free`释放。
    - **`C.CBytes([]byte)`**：将Go语言的`[]byte`切片转换为C语言的字节数组，同样由`malloc`分配内存，需手动释放。
    - **`C.GoString(*C.char)`**：将C语言的以`null`结尾的字符串转换为Go语言的`string`类型。
    - **`C.GoStringN(*C.char, C.int)`**：将C语言的具有明确长度的字符数组转换为Go语言的`string`类型。
    - **`C.GoBytes(unsafe.Pointer, C.int)`**：将C语言的具有明确长度的字节数组转换为Go语言的`[]byte`切片。
- **标准库函数**：可以直接调用C标准库中的函数，如`stdio.h`中的`puts`、`printf`，`stdlib.h`中的`malloc`、`free`，`string.h`中的`strlen`等.

### 查询方法：
- **官方文档**：Go语言的官方文档是最权威的查询资料。可以查看 [cgo command](https://pkg.go.dev/cmd/cgo) 和 [runtime/cgo](https://pkg.go.dev/runtime/cgo) 的文档，其中包含了对cgo工具以及相关函数、类型等的详细介绍.
- **Go语言的代码示例**：在Go语言的官方仓库以及一些知名的开源项目中，可以找到大量使用cgo的示例代码，通过学习这些示例，了解不同场景下cgo支持的函数和类型的使用方法。例如，Go语言标准库中的一些使用了cgo的包，如`net`包中与网络相关的底层实现可能会涉及到cgo与系统C库函数的交互等 。
- **在线教程和博客**：许多技术博客和在线教程也会对cgo的使用进行详细讲解，并列举一些常见的函数和类型的使用示例，如 [CSDN博客](https://blog.csdn.net/qq_44470091/article/details/110654875) 上的相关文章.