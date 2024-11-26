"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6349],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),y=a,d=s["".concat(l,".").concat(y)]||s[y]||m[y]||o;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},97002:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const o={},c=void 0,i={unversionedId:"study/program/C/cmake",id:"study/program/C/cmake",title:"cmake",description:"cmake \u4ecb\u7ecd",source:"@site/docs/study/program/C/cmake.md",sourceDirName:"study/program/C",slug:"/study/program/C/cmake",permalink:"/docs/study/program/C/cmake",draft:!1,tags:[],version:"current",lastUpdatedAt:1732599723,formattedLastUpdatedAt:"2024\u5e7411\u670826\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"MinGW_CygWin",permalink:"/docs/study/program/C/MinGW_CygWin"},next:{title:"extern-c",permalink:"/docs/study/program/C/extern-c"}},l={},p=[{value:"cmake \u4ecb\u7ecd",id:"cmake-\u4ecb\u7ecd",level:3}],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(s,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"cmake-\u4ecb\u7ecd"},"cmake \u4ecb\u7ecd"),(0,a.yg)("p",null,"\u4f60\u6216\u8bb8\u542c\u8fc7\u597d\u51e0\u79cd Make \u5de5\u5177\uff0c\u4f8b\u5982 GNU Make \uff0cQT \u7684 qmake \uff0c\u5fae\u8f6f\u7684 MS nmake\uff0cBSD Make\uff08pmake\uff09\uff0cMakepp\uff0c\u7b49\u7b49\u3002\u8fd9\u4e9b Make \u5de5\u5177\u9075\u5faa\u7740\u4e0d\u540c\u7684\u89c4\u8303\u548c\u6807\u51c6\uff0c\u6240\u6267\u884c\u7684 Makefile \u683c\u5f0f\u4e5f\u5343\u5dee\u4e07\u522b\u3002\u8fd9\u6837\u5c31\u5e26\u6765\u4e86\u4e00\u4e2a\u4e25\u5cfb\u7684\u95ee\u9898\uff1a\u5982\u679c\u8f6f\u4ef6\u60f3\u8de8\u5e73\u53f0\uff0c\u5fc5\u987b\u8981\u4fdd\u8bc1\u80fd\u591f\u5728\u4e0d\u540c\u5e73\u53f0\u7f16\u8bd1\u3002\u800c\u5982\u679c\u4f7f\u7528\u4e0a\u9762\u7684 Make \u5de5\u5177\uff0c\u5c31\u5f97\u4e3a\u6bcf\u4e00\u79cd\u6807\u51c6\u5199\u4e00\u6b21 Makefile \uff0c\u8fd9\u5c06\u662f\u4e00\u4ef6\u8ba9\u4eba\u6293\u72c2\u7684\u5de5\u4f5c\u3002"),(0,a.yg)("p",null,"CMake \u5c31\u662f\u9488\u5bf9\u4e0a\u9762\u95ee\u9898\u6240\u8bbe\u8ba1\u7684\u5de5\u5177\uff1a\u5b83\u9996\u5148\u5141\u8bb8\u5f00\u53d1\u8005\u7f16\u5199\u4e00\u79cd\u5e73\u53f0\u65e0\u5173\u7684 CMakeList.txt \u6587\u4ef6\u6765\u5b9a\u5236\u6574\u4e2a\u7f16\u8bd1\u6d41\u7a0b\uff0c\u7136\u540e\u518d\u6839\u636e\u76ee\u6807\u7528\u6237\u7684\u5e73\u53f0\u8fdb\u4e00\u6b65\u751f\u6210\u6240\u9700\u7684\u672c\u5730\u5316 Makefile \u548c\u5de5\u7a0b\u6587\u4ef6\uff0c\u5982 Unix \u7684 Makefile \u6216 Windows \u7684 Visual Studio \u5de5\u7a0b\u3002\u4ece\u800c\u505a\u5230\u201cWrite once, run everywhere\u201d\u3002\u663e\u7136\uff0cCMake \u662f\u4e00\u4e2a\u6bd4\u4e0a\u8ff0\u51e0\u79cd make \u66f4\u9ad8\u7ea7\u7684\u7f16\u8bd1\u914d\u7f6e\u5de5\u5177\u3002\u4e00\u4e9b\u4f7f\u7528 CMake \u4f5c\u4e3a\u9879\u76ee\u67b6\u6784\u7cfb\u7edf\u7684\u77e5\u540d\u5f00\u6e90\u9879\u76ee\u6709 VTK\u3001ITK\u3001KDE\u3001OpenCV\u3001OSG \u7b49 \u3002"),(0,a.yg)("p",null,"\u5728 linux \u5e73\u53f0\u4e0b\u4f7f\u7528 CMake \u751f\u6210 Makefile \u5e76\u7f16\u8bd1\u7684\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5199 CMake \u914d\u7f6e\u6587\u4ef6 CMakeLists.txt \u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6267\u884c\u547d\u4ee4 cmake PATH \u6216\u8005 ccmake PATH \u751f\u6210 Makefile\uff08ccmake \u548c cmake \u7684\u533a\u522b\u5728\u4e8e\u524d\u8005\u63d0\u4f9b\u4e86\u4e00\u4e2a\u4ea4\u4e92\u5f0f\u7684\u754c\u9762\uff09\u3002\u5176\u4e2d\uff0c PATH \u662f CMakeLists.txt \u6240\u5728\u7684\u76ee\u5f55\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4f7f\u7528 make \u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1\u3002")))}m.isMDXComponent=!0}}]);