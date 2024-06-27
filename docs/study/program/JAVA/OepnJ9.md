# OpenJ9

https://eclipse.dev/openj9/

OpenJ9 是原来的 IBM J9 Java 虚拟机 (JVM)，已贡献给 Eclipse 基金会开源。

OpenJ9 是一个高性能的企业级 Java 虚拟机，旨在促进 JVM 开发者的开放生态系统，从而可以与硬件平台、操作系统、工具和框架设计师和开发者进行协作和创新。

Java 社区从 JVM 规范的多个实现中受益匪浅，为其应用程序提供最佳运行时。无论是添加压缩引用、新的云功能、AOT（提前编译），还是直接提升性能和降低内存使用，生态系统通过竞争得到改善。 Eclipse OpenJ9 旨在继续推动运行时的创新。

根据官网文档说明，以 OpenJDK8 和 OpenJ9 比较说明其应用层面的特点、优势：

42% faster startup time，启动时间快 42% 66% smaller footprint after startup，启动后占用内存减少 66%

Faster ramp-up time in the cloud，云端环境快速提升吞吐量 

63% smaller footprint during load，高负载时减少 63%的占用空间

根据 cheng jin（OpenJ9  VM Software Developer）介绍，DDR 和 SCC 是其不同于 HotSpot 的 2 个特点。