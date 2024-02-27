### 构建 Java SpringBoot Docker 镜像

#### 最为原始的方式

也就是使用 Docker 的打包命令去打包

#### spring-boot-maven-plugin

SpringBoot 自己内置了一个 Docker 镜像打包工具，在 spring-boot-starter-parent 中，我们无需多余的设置。

优点：不需要写 DockerFile，Spring 建议的安全、内存、性能等问题都不需要管。

#### jib-maven-plugin

来自 Google 的一款打包插件。

优点：不需要本地安装 Docker，也不需要写 DockerFile，Jib 可以直接推送到指定的 Docker 仓库。

#### dockerfle-maven-plugin

需要写 DockerFile 也需要本地 Docker 环境，但是恰恰是最好用的，最稳定的，最自由把控的。

优点：稳定，不受网络限制，DockerFile 自己写，自由度很高，想怎么改怎么改，个人推荐这个。
