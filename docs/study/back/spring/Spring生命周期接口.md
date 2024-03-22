### InitializingBean

需要实现 afterPropertiesSet接口方法

参考 [https://blog.csdn.net/qq_37705525/article/details/124808168](https://blog.csdn.net/qq_37705525/article/details/124808168)

### DisposableBean

需要实现 destroy接口方法

参考 [https://blog.csdn.net/zhangduilei/article/details/78606636](https://blog.csdn.net/zhangduilei/article/details/78606636)

### ApplicationContextInitializer 

ApplicationContextInitializer 接口用于在 Spring 容器刷新之前执行的一个回调函数，通常用于向 SpringBoot 容器中注入属性。

参考 [https://zhuanlan.zhihu.com/p/509824476](https://zhuanlan.zhihu.com/p/509824476)

### ApplicationListener

监听事件，可以包含部分生命周期类型的事件，例如ApplicationEnvironmentPreparedEvent

[https://blog.csdn.net/qq_21484747/article/details/124855050](https://blog.csdn.net/qq_21484747/article/details/124855050)

### EnvironmentPostProcessor

一般用于读取环境变量达到多个微服务共同配置的修改与维护。当我们有多套环境(开发、测试、生产等等)时，每套环境都有专属的配置文件存放于配置中心(以nacos为例)，可能存放于不同的配置中心(每个环境有专属的配置中心，服务地址不同)，也可能存放于同一nacos的不同命名空间，也或者同一命名空间的不同分组等等。同一套代码在不同环境运行需要不同的配置文件，这时，我们就可以在项目启动时，实现EnvironmentPostProcessor接口，在postProcessEnvironment方法中读取环境变量或者启动命令参数，从而获取本环境下nacos的服务地址，或命名空间名称、分组名称等等，然后就可以根据获取的配置参数或环境变量来读取不同的配置文件，从而实现不同环境使用不同的配置文件，不用修改代码或者本地配置文件。

[https://blog.csdn.net/qq_40756113/article/details/123074848](https://blog.csdn.net/qq_40756113/article/details/123074848)