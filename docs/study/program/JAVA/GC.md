### JVM 中常见的垃圾收集算法

- 标记-清除（Mark-Sweep）: 这是最基本的垃圾收集算法，它分为两个阶段，标记和清除。首先标记出所有需要回收的对象，然后进行清除。缺点是效率不高，并且会产生大量不连续的内存碎片。
- （Copying）: 为了解决标记-清除算法的内存碎片问题，出现了复制算法。它将可用内存分为两个区域，每次只使用其中一个区域。当这个区域满时，它会把存活的对象复制到另一个区域，然后清除正在使用的那个区域的所有对象。这种算法实现简单，运行高效，但是需要两倍的内存空间。
- 标记-整理（Mark-Compact）: 结合了标记-清除和复制的优点，它先标记需要回收的对象，然后把所有存活的对象都向一端移动，接着清除掉端边界以外的内存。
- 分代收集（Generational Collector）: 基于对象生命周期的不同，它将堆分为新生代和老年代。新生代中，大部分对象是朝生夕死的，所以可以使用复制算法；老年代中对象存活率高，一般使用标记-整理或标记-清除算法。
- 增量收集（Incremental Collector）: 这种算法允许垃圾收集在应用进行的同时进行，减少应用的暂停时间。
- 并发标记-清除（Concurrent Mark-Sweep, CMS）: 为了减少垃圾收集对应用的影响，出现了并发收集算法，它尝试让垃圾收集的过程并发进行。CMS 算法分为四个阶段，并发标记、并发预清理、重新标记、并发清除，尽量减少对应用的影响。
- 改进的并发标记-清除（G1）: 为了进一步减少暂停时间和提高吞吐量，JVM 在 Java 7 Update 4 中引入了 G1 垃圾收集器。G1 尝试把堆空间划分为多个大小相等的区域，并且可以并发处理这些区域。

### 查看各个版本的 GC

```shell
java -XX:+PrintCommandLineFlags -version
java -XX:+PrintGCDetails -version
```

```shell
java8 -XX:+PrintCommandLineFlags -version
-XX:InitialHeapSize=268435456
-XX:MaxHeapSize=4294967296
-XX:+PrintCommandLineFlags
-XX:+UseCompressedClassPointers
-XX:+UseCompressedOops
-XX:+UseParallelGC
java version "1.8.0_181"
Java(TM) SE Runtime Environment (build 1.8.0_181-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.181-b13, mixed mode)
```

```shell
java17 -XX:+PrintCommandLineFlags -version
-XX:ConcGCThreads=2 
-XX:G1ConcRefinementThreads=8 
-XX:GCDrainStackTargetSize=64 
-XX:InitialHeapSize=268435456 
-XX:MarkStackSize=4194304 
-XX:MaxHeapSize=4294967296 
-XX:MinHeapSize=6815736 
-XX:+PrintCommandLineFlags 
-XX:ReservedCodeCacheSize=251658240 
-XX:+SegmentedCodeCache 
-XX:+UseCompressedClassPointers 
-XX:+UseCompressedOops 
-XX:+UseG1GC
java version "17.0.6" 2023-01-17 LTS
Java(TM) SE Runtime Environment (build 17.0.6+9-LTS-190)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.6+9-LTS-190, mixed mode, sharing)
```
