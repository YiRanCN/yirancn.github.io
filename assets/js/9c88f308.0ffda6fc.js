"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5034],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>g});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(p,".").concat(m)]||u[m]||y[m]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6503:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(8168),a=(r(6540),r(5680));const o={},i="JNI",l={unversionedId:"study/program/JAVA/JNI",id:"study/program/JAVA/JNI",title:"JNI",description:"Java Native Interface\uff0cJava \u672c\u5730\u63a5\u53e3",source:"@site/docs/study/program/JAVA/JNI.md",sourceDirName:"study/program/JAVA",slug:"/study/program/JAVA/JNI",permalink:"/docs/study/program/JAVA/JNI",draft:!1,tags:[],version:"current",lastUpdatedAt:1725590261,formattedLastUpdatedAt:"2024\u5e749\u67086\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"JDK8",permalink:"/docs/study/program/JAVA/JDK8"},next:{title:"Maven",permalink:"/docs/study/program/JAVA/Maven"}},p={},c=[{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}],s={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"jni"},"JNI"),(0,a.yg)("p",null,"Java Native Interface\uff0cJava \u672c\u5730\u63a5\u53e3"),(0,a.yg)("p",null,"Java \u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u6709\u65f6\u5019\u4f1a\u9700\u8981\u548c C\uff0cC++\u7b49\u4ea4\u4e92\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u5c31\u60f3\u8d77\u4e86\u7ecf\u5178\u6280\u672f JNI\uff0c\u4f46\u662f JNI \u7684\u4f7f\u7528\u8fc7\u7a0b\u5341\u5206\u7e41\u7410\uff0c\u800c\u4e14\u5bb9\u6613\u51fa\u73b0\u5404\u79cd\u95ee\u9898\uff0c\u8fd8\u5f97",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"\u5c01\u88c5")),"\u800c\u4e14\u95ee\u9898\u4e0d\u597d\u5b9a\u4f4d\u3002\u5047\u5982\u6211\u4eec\u6709\u4e00\u4e2a.so \u6587\u4ef6\uff0c\u5982\u679c\u4f7f\u7528 JNI \u53bb\u8c03\u7528\uff0c\u6211\u4eec\u9700\u8981\u53e6\u5916\u7528 C \u8bed\u97f3\u5199\u4e00\u4e2a.so \u7684\u5171\u4eab\u6587\u4ef6\uff0c\u5e76\u4e14\u5f97\u4f7f\u7528 SUN \u89c4\u5b9a\u7684\u6570\u636e\u7ed3\u6784\u53bb\u66ff\u4ee3 C \u8bed\u8a00\u7684\u6570\u636e\u7ed3\u6784\uff0c\u81f3\u6b64\u624d\u80fd\u8c03\u7528 so \u6587\u4ef6\u91cc\u9762\u516c\u5e03\u7684\u51fd\u6570\u3002\u4f5c\u4e3a JAVA \u7684\u7a0b\u5e8f\u5458\u8fd9\u4e2a\u8fc7\u7a0b\u662f\u4ee4\u4eba\u5934\u75bc\u7684\u3002"),(0,a.yg)("p",null,"\u76f8\u6bd4\u4e4b\u4e0b\uff0c\u4f7f\u7528 ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"JNA"))," \u5c31\u7b80\u5355\u591a\u4e86\uff0c\u53ea\u9700\u8981\u4f9d\u8d56\u4e00\u4e2a jar \u5305\uff0c\u5c31\u50cf\u8c03\u7528\u4e00\u4e2a java \u65b9\u6cd5\u4e00\u6837\u7b80\u5355\u3002JNA \u5168\u79f0 Java Native Access\uff0c\u662f\u4e00\u4e2a\u5efa\u7acb\u5728 JNI \u6280\u672f\u4e4b\u4e0a\u7684 Java \u5f00\u6e90\u6846\u67b6\u3002JNA \u63d0\u4f9b\u4e00\u7ec4 Java \u5de5\u5177\u7c7b\u7528\u4e8e\u5728\u8fd0\u884c\u671f\u52a8\u6001\u8bbf\u95ee\u7cfb\u7edf\u672c\u5730\u5e93\uff08native library\uff1a\u5982 Window \u7684 dll\uff0cLinux \u7684 so\uff09\u800c\u4e0d\u9700\u8981\u7f16\u5199\u4efb\u4f55 Native/JNI \u4ee3\u7801\u3002\u5f00\u53d1\u4eba\u5458\u53ea\u8981\u5728\u4e00\u4e2a java \u63a5\u53e3\u4e2d\u63cf\u8ff0\u76ee\u6807 native library \u7684\u51fd\u6570\u4e0e\u7ed3\u6784\uff0cJNA \u5c06\u81ea\u52a8\u5b9e\u73b0 Java \u63a5\u53e3\u5230 native function \u7684\u6620\u5c04\u3002"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/java-native-access/jna"},"GitHub-jna")),(0,a.yg)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/650000825"},"\u77e5\u4e4e-JNI \u8be6\u89e3")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://blog.csdn.net/cold___play/article/details/135026322"},"CSDN-JNA")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://blog.csdn.net/qingzhuyuxian/article/details/122997670"},"CSDN-\u5f00\u6e90\u6846\u67b6 JNA \u7684\u4f7f\u7528")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://blog.51cto.com/u_16213641/7413134"},"51cto-jna"))))}y.isMDXComponent=!0}}]);