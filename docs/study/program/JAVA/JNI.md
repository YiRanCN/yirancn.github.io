# JNI

Java Native Interface，Java 本地接口

Java 开发过程中，有时候会需要和 C，C++等交互，这时候我们就想起了经典技术 JNI，但是 JNI 的使用过程十分繁琐，而且容易出现各种问题，还得**_封装_**而且问题不好定位。假如我们有一个.so 文件，如果使用 JNI 去调用，我们需要另外用 C 语音写一个.so 的共享文件，并且得使用 SUN 规定的数据结构去替代 C 语言的数据结构，至此才能调用 so 文件里面公布的函数。作为 JAVA 的程序员这个过程是令人头疼的。

相比之下，使用 **_JNA_** 就简单多了，只需要依赖一个 jar 包，就像调用一个 java 方法一样简单。JNA 全称 Java Native Access，是一个建立在 JNI 技术之上的 Java 开源框架。JNA 提供一组 Java 工具类用于在运行期动态访问系统本地库（native library：如 Window 的 dll，Linux 的 so）而不需要编写任何 Native/JNI 代码。开发人员只要在一个 java 接口中描述目标 native library 的函数与结构，JNA 将自动实现 Java 接口到 native function 的映射。

[GitHub-jna](https://github.com/java-native-access/jna)

### 参考

- [知乎-JNI 详解](https://zhuanlan.zhihu.com/p/650000825)
- [CSDN-JNA](https://blog.csdn.net/cold___play/article/details/135026322)
- [CSDN-开源框架 JNA 的使用](https://blog.csdn.net/qingzhuyuxian/article/details/122997670)
- [51cto-jna](https://blog.51cto.com/u_16213641/7413134)
