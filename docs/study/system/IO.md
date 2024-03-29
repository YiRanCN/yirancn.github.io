# 操作系统 IO 知识

I/O（Input/Output）模型是计算机科学中的一个关键概念，它涉及到如何进行输入和输出操作，而这在计算机应用中是不可或缺的一部分。在不同的应用场景下，选择正确的 I/O 模型是至关重要的，因为它会影响到应用程序的性能和响应性。

### 阻塞 IO

阻塞 I/O 模型与同步 I/O 模型相似，它也需要应用程序等待 I/O 操作完成。阻塞 I/O 适用于简单的应用，但可能导致性能问题，因为应用程序会在等待操作完成时被阻塞。

### 非阻塞 IO

非阻塞 I/O 模型允许应用程序发起 I/O 操作后继续执行其他任务，而不必等待操作完成。这种模型适用于需要同时处理多个通道的应用。

另一个重要的概念是"I/O 多路复用"（I/O Multiplexing）。I/O 多路复用是一种高效处理多个 I/O 操作的模型，它允许应用程序同时监视多个文件描述符（sockets、文件、管道等）以检测它们是否准备好进行 I/O 操作。这可以有效地减少线程数量，从而提高性能和资源利用率。在 Java 中，I/O 多路复用通常通过 java.nio.channels.Selector 类来实现。

I/O 多路复用非常适合需要同时处理多个通道的应用，如高性能网络服务器。它可以减少线程数量，提高应用程序的性能和可伸缩性。在选择 I/O 模型时，应该考虑应用程序的具体需求和性能要求，I/O 多路复用是一个重要的选择之一。还有两个重要的概念是"信号驱动 I/O"（Signal Driven I/O）和"异步 I/O"。这两种 I/O 模型在某些情况下可以提供更高的性能和效率。

#### 信号驱动 I/O

信号驱动 I/O 是一种非阻塞 I/O 的变体，它使用信号通知应用程序文件描述符已准备好进行 I/O 操作。这种模型在类 Unix 系统中非常常见，通常与异步 I/O 结合使用。在 Java 中，我们可以使用 java.nio.channels.AsynchronousChannel 来实现信号驱动 I/O。

回调；

#### 异步 I/O

异步 I/O 模型也称为"真正的异步 I/O"，它允许应用程序发起 I/O 操作后继续执行其他任务，而不需要等待操作完成。异步 I/O 与信号驱动 I/O 不同，因为它不会使用回调函数，而是使用事件驱动的方式来通知 I/O 操作的完成。

### IO 多路复用函数

#### select

可在不同平台（包括 Unix、Linux 和 Windows）上使用。由于其可移植性，select 是一种通用的 I/O 多路复用方法。

#### poll

poll 也是相对可移植的，但并非在所有操作系统上都得到广泛支持。它在大多数 Unix 系统上可用，但在 Windows 上的支持较弱。

总的来说，poll 在性能和可读性方面相对优于 select，特别是在处理大量文件描述符时。但选择使用哪种方法还取决于应用程序的需求和目标平台的支持。在大多数情况下，epoll 和 kqueue 也是更高性能的替代方案，特别适用于大规模并发的应用。

是一种最早出现在 Unix 系统中的多路复用机制。poll 等待多个文件描述符中的一个或多个变为可读，可写或异常。但 poll 在大量文件描述符的情况下性能可能不如 epoll 或 kqueue 好。

#### epoll

是一种事件通知机制，最早出现在 Linux 中。它允许进程监视大量文件描述符上的事件。epoll 通常用于高并发的网络应用程序，因为它在文件描述符数量非常多的情况下性能表现良好。

#### kqueue

是 BSD 和 macOS 等 Unix-like 操作系统中的一种事件通知机制。它可以监视文件描述符、进程、信号、以及其他各种事件。kqueue 通常被用于开发高性能的服务器应用和网络应用。

#### 为什么 epoll,kqueue 比 select 高级？

epoll 和 kqueue 比 select 高级的原因在于它们在处理高并发 I/O 时具有更好的性能和扩展性。以下是一些主要原因：

- 高效的事件通知机制：epoll 和 kqueue 使用事件通知机制，而不是 select 的轮询方式。这意味着当有 I/O 事件准备好时，内核会主动通知应用程序，而不需要应用程序不断查询哪些文件描述符准备好。这减少了不必要的上下文切换，提高了性能。
- 支持大数量的文件描述符：select 在处理大量文件描述符时性能下降明显，因为它使用位图的方式来表示文件描述符，当文件描述符数量很大时，需要维护大量的位图，而且会有很多无效的查询。epoll 和 kqueue 使用基于事件的机制，不会受到文件描述符数量的限制，因此适用于高并发场景。
- 更少的系统调用：select 需要频繁调用系统调用来查询文件描述符的状态，这增加了系统调用的开销。epoll 和 kqueue 的事件通知机制减少了不必要的系统调用，从而提高了性能。
- 支持边沿触发（Edge-Triggered）：epoll 和 kqueue 支持边沿触发模式，这意味着只有在文件描述符状态发生变化时才会触发事件通知，而不是在数据可读或可写时都会触发。这使得应用程序可以更精确地控制事件处理，减少了不必要的处理开销。
- 更灵活的事件管理：epoll 和 kqueue 允许应用程序为每个文件描述符设置不同的事件类型，而 select 中所有文件描述符只能监视相同类型的事件。这使得 epoll 和 kqueue 更灵活，适用于更多的应用场景。

总的来说，epoll 和 kqueue 在高并发 I/O 场景中表现更出色，提供更高的性能和更好的可扩展性，因此被认为比 select 高级。但需要注意的是，epoll 适用于 Linux 系统，而 kqueue 适用于 BSD 系统（如 macOS 和 FreeBSD），因此选择哪种取决于应用程序的部署环境。
