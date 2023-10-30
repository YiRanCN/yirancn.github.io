### C 语言标准库

C 语言标准库是一组预定义函数、宏和文件的集合，这些函数和文件提供了一些基本的功能和操作，可供 C 语言程序使用。C 语言标准库由 C 语言的制定者定义，并包含在 C 语言的编译器中。

C 语言没有官方网站，ISO 的官方网站和 ANSI 的网站，提供了 C 语言标准的相关信息。

不同编译器对 C 语言标准的支持程度是不同，在进行开发的时候，不仅要选择适当的编译器，可能还需要手动指定 C 语言标准。

### C 语言有多少个标准头文件呢呢？

不确定：这和编译器、编译器的版本和配置有关。

常用的 C 语言标准库有：

- stdio.h：提供输入输出函数，如 printf()和 scanf()等。
- stdlib.h：提供通用工具函数，如 malloc()和 free()等。
- string.h：提供字符串处理函数，如 strcpy()和 strcat()等。
- math.h：提供数学函数，如 sin()和 cos()等。
- time.h：提供时间处理函数，如 time()和 clock()等。
- ctype.h：提供字符处理函数，如 isalpha()和 isdigit()等。
- assert.h：提供断言宏，用于调试程序。
- stdarg.h：提供可变参数列表的函数，如 printf()和 scanf()等。
- errno.h：提供错误码宏，用于标识错误类型。
- setjmp.h：提供非局部跳转函数，如 setjmp()和 longjmp()等。
- signal.h：提供信号处理函数，如 signal()和 raise()等。
- locale.h：提供本地化处理函数，如 setlocale()和 localeconv()等。
- float.h：提供浮点数处理宏，如 FLT_DIG 和 DBL_MAX 等。
- limits.h：提供整数处理宏，如 INT_MAX 和 LONG_MAX 等。
- stddef.h：提供基本类型定义，如 size_t 和 ptrdiff_t 等。

### 参考

- [CSDN-C 语言标准库、Windows 与 Linux 平台下常用的 C 语言标准库](https://blog.csdn.net/weixin_43764974/article/details/130892554)
