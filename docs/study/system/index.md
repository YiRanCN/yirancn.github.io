---
sidebar_position: 1
---

### 学习资料

- [骏马金龙-操作系统系列文章](https://www.junmajinlong.com/os/index/)

### mac 用久了，如何清理比较大的文件

```shell
cd ~/Library
du -s ./* | sort -rn|head
du -sh ./* | sort -rn|head
```
