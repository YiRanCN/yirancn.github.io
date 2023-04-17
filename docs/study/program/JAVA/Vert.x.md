### 简介

[GitHub地址](https://github.com/eclipse-vertx/vert.x) 
  [官网](https://vertx.io)
[Vert.x 官方文档中文翻译](http://vertxchina.github.io/vertx-translation-chinese/)

Vert.x is a tool-kit for building reactive applications on the JVM.
Vert.x是建立在JVM上用于构建“异步非阻塞应用”的一套工具集合。
注意：他不是java框架，它是一套工具集，或者说叫类库。

### Vert.x Core

Vert.x 的核心 Java API 被我们称为 Vert.x Core。
Vert.x Core 提供了下列功能:

- 编写 TCP 客户端和服务端
- 编写支持 WebSocket 的 HTTP 客户端和服务端
- 事件总线
- 共享数据 —— 本地的Map和分布式集群Map
- 周期性、延迟性动作
- 部署和撤销 Verticle 实例
- 数据报套接字
- DNS客户端
- 文件系统访问
- 高可用性
- 集群

### 流式代码风格

一个流式的API表示将多个方法的调用链在一起。例如：
```shell
request.response().putHeader("Content-Type", "text/plain").write("some text").end();
```
这是贯穿 Vert.x API 中的一个通用模式，所以请适应这种代码风格。

### Don’t call us, we’ll call you

Vert.x 的 API 大部分都是事件驱动的。这意味着当您感兴趣的事情发生时，它会以事件的形式发送给您。

除了很少的特例（如以 "Sync" 结尾的某些文件系统操作），Vert.x中的所有API都不会阻塞调用线程。

我们前边提过 Vert.x 的 API 都是事件驱动的，当有事件时 Vert.x 会将事件传给处理器来处理。在多数情况下，Vert.x使用被称为 Event Loop 的线程来调用您的处理器。我们称之为 Reactor 模式（译者注：Reactor Pattern 翻译成了反应器模式）。您之前也许听说过它，例如 Node.js 实现了这种模式。
在一个标准的反应器实现中，有 一个独立的 Event Loop 会循环执行，处理所有到达的事件并传递给处理器处理。
单一线程的问题在于它在任意时刻只能运行在一个核上。如果您希望单线程反应器应用（如您的 Node.js 应用）扩展到多核服务器上，则需要启动并且管理多个不同的进程。
Vert.x的工作方式有所不同。每个 Vertx 实例维护的是 多个Event Loop 线程。默认情况下，我们会根据机器上可用的核数量来设置 Event Loop 的数量，您亦可自行设置。
这意味着 Vertx 进程能够在您的服务器上扩展，与 Node.js 不同。
我们将这种模式称为 Multi-Reactor 模式（多反应器模式），区别于单线程的 Reactor 模式（反应器模式）。

Vert.x 中的 [Future](http://vertx.io/docs/apidocs/io/vertx/core/Future.html) 可以用来协调多个异步操作的结果。它支持并发组合（并行执行多个异步调用）和顺序组合（依次执行异步调用）。

### Verticle

Verticle 是由 Vert.x 部署和运行的代码块。默认情况一个 Vert.x 实例维护了N（默认情况下N = CPU核数 x 2）个 Event Loop 线程。Verticle 实例可使用任意 Vert.x 支持的编程语言编写，而且一个简单的应用程序也可以包含多种语言编写的 Verticle。您可以将 Verticle 想成 Actor Model 中的 Actor。

一个应用程序通常是由在同一个 Vert.x 实例中同时运行的许多 Verticle 实例组合而成。不同的 Verticle 实例通过向 Event Bus 上发送消息来相互通信。

这儿有三种不同类型的 Verticle：

- Stardand Verticle：这是最常用的一类 Verticle —— 它们永远运行在 Event Loop 线程上。稍后的章节我们会讨论更多。
- Worker Verticle：这类 Verticle 会运行在 Worker Pool 中的线程上。一个实例绝对不会被多个线程同时执行。
- Multi-Threaded Worker Verticle：这类 Verticle 也会运行在 Worker Pool 中的线程上。一个实例可以由多个线程同时执行（译者注：因此需要开发者自己确保线程安全）。

### Event Bus

Event Bus 是 Vert.x 的神经系统。
每一个 Vert.x 实例都有一个单独的 Event Bus 实例。您可以通过 Vertx 实例的 [eventBus](http://vertx.io/docs/apidocs/io/vertx/core/Vertx.html#eventBus--) 方法来获得对应的 EventBus 实例。
Vert.x会尽它最大努力去传递消息，并且不会主动丢弃消息。这种方式称为 尽力传输(Best-effort delivery)。
但是，当 Event Bus 中的全部或部分发生故障时，则可能会丢失消息。
若您的应用关心丢失的消息，您应该编写具有幂等性的处理器，并且您的发送者可以在恢复后重试。

Event Bus 不仅仅存在于单个 Vert.x 实例中。通过您在网络上将不同的 Vert.x 实例集群在一起，它可以形成一个单一的、分布式的Event Bus。

