---
sidebar_position: 1
---

# mac 电脑

### mac 用久了，如何清理比较大的文件

```shell
cd ~/Library
du -s ./* | sort -rn|head
du -sh ./* | sort -rn|head
```
