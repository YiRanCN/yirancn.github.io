记录 Flutter 开发的一些问题、经验

### Mac 如何安装老版本的 Android 模拟器

因为特殊原因，我的老 Mac 电脑无法升级，最新的安卓模拟器启动不起来，可以到这里下载老的模拟器，并手动安装[模拟器下载归档](https://developer.android.com/studio/emulator_archive?hl=zh-cn)

### flutter windows

[基于 Flutter 实现 Windows 平台离线大模型对话应用实战](https://xie.infoq.cn/article/a0b086b20aabd229e57a9811f)

### ffi插件

flutter create -t plugin_ffi --platforms macos,windows,android,ios p2psdk

android使用gradle构建
ios和macos使用xcode通过CocoaPods构建
linux和windows通过cmake构建

绑定本地原生代码
