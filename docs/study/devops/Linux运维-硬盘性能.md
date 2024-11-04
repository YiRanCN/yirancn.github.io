### fio

```shell
# 顺序读取测试
# --name参数用于指定测试名称，
# --filename指定要测试的设备（这里是/dev/sda，表示系统中的第一块磁盘），
# --direct=1表示使用直接 I/O 模式，跳过操作系统的缓存，
# --rw=read表示测试读取模式，
# --bs=1M表示块大小为 1MB，
# --size=1G表示测试数据大小为 1GB，
# --numjobs=1表示使用 1 个线程，
# --iodepth=1表示 I/O 队列深度为 1。
fio --name=seq-read --filename=/dev/sda --direct=1 --rw=read --bs=1M --size=1G --numjobs=1 --iodepth=1
# 随机写入测试
# 与顺序读取测试类似，但这里
# --rw = write表示测试写入模式，
# --bs = 4k表示块大小为 4KB，
# --numjobs = 4表示使用 4 个线程，
# --iodepth = 16表示 I/O 队列深度为 16，这种配置更适合模拟多用户同时写入小文件的场景，如数据库事务写入。
fio --name=rand-write --filename=/dev/sda --direct=1 --rw=write --bs=4k --size=512M --numjobs=4 --iodepth=16
# 
# 测试结果解读
# 带宽（Bandwidth）：
# 单位通常是 MB/s 或 GB/s，表示每秒读写的数据量。例如，测试结果显示顺序读取带宽为 100MB/s，意味着每秒可以从存储设备读取 100MB 的数据。带宽越高，说明存储设备在该模式下的数据传输速度越快。
# IOPS（Input/Output Operations Per Second）：
# 即每秒 I/O 操作次数。在随机读写测试中，IOPS 是一个重要的指标。例如，测试结果显示随机写入 IOPS 为 10000，说明每秒可以进行 10000 次写入操作。对于数据库等对小文件频繁读写的应用，高 IOPS 意味着更好的性能。
# 延迟（Latency）：
# 以纳秒（ns）、微秒（μs）或毫秒（ms）为单位，代表每个 I/O 操作从发起请求到完成的时间。例如，平均写入延迟为 100μs，表示每个写入请求平均需要 100 微秒才能完成。较低的延迟表示存储设备能够更快地响应 I/O 请求。

```