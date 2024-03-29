### 概述

WebGL（全写 Web Graphics Library）是一种 3D 绘图协议，这种绘图技术标准允许把 JavaScript 和 OpenGL ES 2.0 结合在一起，通过增加 OpenGL ES 2.0 的一个 JavaScript 绑定，WebGL 可以为 HTML5 Canvas 提供硬件 3D 加速渲染，这样 Web 开发人员就可以借助系统显卡来在浏览器里更流畅地展示 3D 场景和模型了，还能创建复杂的导航和数据视觉化。显然，WebGL 技术标准免去了开发网页专用渲染插件的麻烦，可被用于创建具有复杂 3D 结构的网站页面，甚至可以用来设计 3D 网页游戏等等。

WebGL1.0 基于 OpenGL ES 2.0，并提供了 3D 图形的 API。它使用 HTML5Canvas 并允许利用文档对象模型接口。WebGL 2.0 基于 OpenGL ES 3.0，确保了提供许多选择性的 WebGL 1.0 扩展，并引入新的 API。可利用部分 Javascript 实现自动存储器管理。

### webgl 和 threejs 区别

WebGL 和 Three.js 都是用于在浏览器中进行 3D 图形渲染的技术，但它们的用途和实现方式有所不同。

WebGL 是一个 JavaScript API，它允许开发者在不依赖外部插件的情况下，利用浏览器的 GPU 能力，实现在线交互式 2D 和 3D 网页效果。WebGL 的工作原理是在 GPU 上执行着色器语言（GLSL），这是一种强类型的编程语言，与 C/C++类似。WebGL 的核心功能包括顶点和片元的着色器，分别负责计算顶点和像素的颜色值。它的工作流程主要包括将顶点从模型空间转换到裁剪空间，然后基于这些信息绘制像素点。

Three.js 则是一个开源的 JavaScript 库，它提供了许多预制的对象和函数，以简化 3D 开发的复杂性。Three.js 封装了 WebGL 的功能，并提供了一系列方便的工具和方法，如摄像机、灯光、几何形状等。它可以单独使用也可以与其他库结合使用。Three.js 的设计目的是让开发者能够快速地构建三维场景和应用，而无需手动编写大量的 WebGL 代码。

总结来说，WebGL 是浏览器内置的标准 API，主要用于实现 3D 图形的基本操作；而 Three.js 是一个更高级别的库，它包含了 WebGL 的功能和一些额外的工具和算法，旨在简化 3D 开发的任务。

### 学习、个人发展

学习他需要计算机图形学知识、扎实的数学功底、丰富的空间想象力。你需要面对很多问题，比如中文文档不丰富、低封装度的引擎和框架、全新的上下游工具链、难以理解的数学、古怪和难以调试的 gl 语言、奇奇怪怪专业文件格式、各种各样的专业领域知识，等等等等……

除了可以使用 js 编程以外，跟传统的 web 前端开发几乎毫无关系。
