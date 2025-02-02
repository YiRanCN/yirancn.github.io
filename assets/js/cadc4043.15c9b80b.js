"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8399],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,g=c["".concat(i,".").concat(d)]||c[d]||y[d]||l;return r?n.createElement(g,u(u({ref:t},p),{},{components:r})):n.createElement(g,u({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,u=new Array(l);u[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,u[1]=o;for(var s=2;s<l;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const l={},u="Rust",o={unversionedId:"study/program/Rust/index",id:"study/program/Rust/index",title:"Rust",description:"\u4e00\u95e8\u8d4b\u4e88\u6bcf\u4e2a\u4eba\u6784\u5efa\u53ef\u9760\u4e14\u9ad8\u6548\u8f6f\u4ef6\u80fd\u529b\u7684\u8bed\u8a00\u3002",source:"@site/docs/study/program/Rust/index.md",sourceDirName:"study/program/Rust",slug:"/study/program/Rust/",permalink:"/docs/study/program/Rust/",draft:!1,tags:[],version:"current",lastUpdatedAt:1738461448,formattedLastUpdatedAt:"2025\u5e742\u67082\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Lua",permalink:"/docs/study/program/Lua/"},next:{title:"\u6280\u672f\u6587\u6863",permalink:"/docs/study/program/\u6280\u672f\u6587\u6863"}},i={},s=[{value:"\u4e3a\u4ec0\u4e48\u9009\u62e9 Rust",id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-rust",level:3},{value:"\u9ad8\u6027\u80fd",id:"\u9ad8\u6027\u80fd",level:4},{value:"\u53ef\u9760\u6027",id:"\u53ef\u9760\u6027",level:4},{value:"\u751f\u4ea7\u529b",id:"\u751f\u4ea7\u529b",level:4},{value:"\u5185\u5b58\u7ba1\u7406",id:"\u5185\u5b58\u7ba1\u7406",level:3},{value:"\u6807\u51c6\u5e93",id:"\u6807\u51c6\u5e93",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}],p={toc:s},c="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"rust"},"Rust"),(0,a.yg)("p",null,"\u4e00\u95e8\u8d4b\u4e88\u6bcf\u4e2a\u4eba\u6784\u5efa\u53ef\u9760\u4e14\u9ad8\u6548\u8f6f\u4ef6\u80fd\u529b\u7684\u8bed\u8a00\u3002"),(0,a.yg)("p",null,"\u521b\u5efa\u8fd9\u4e2a\u65b0\u8bed\u8a00\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u89e3\u51b3\u4e00\u4e2a\u987d\u75be\uff1a\u8f6f\u4ef6\u7684\u6f14\u8fdb\u901f\u5ea6\u5927\u5927\u4f4e\u4e8e\u786c\u4ef6\u7684\u6f14\u8fdb\uff0c\u8f6f\u4ef6\u5728\u8bed\u8a00\u7ea7\u522b\u4e0a\u65e0\u6cd5\u771f\u6b63\u5229\u7528\u591a\u6838\u8ba1\u7b97\u5e26\u6765\u7684\u6027\u80fd\u63d0\u5347\u3002Rust \u662f\u9488\u5bf9\u591a\u6838\u4f53\u7cfb\u63d0\u51fa\u7684\u8bed\u8a00\uff0c\u5e76\u4e14\u5438\u6536\u4e00\u4e9b\u5176\u4ed6\u52a8\u6001\u8bed\u8a00\u7684\u91cd\u8981\u7279\u6027\uff0c\u6bd4\u5982\u4e0d\u9700\u8981\u7ba1\u7406\u5185\u5b58\uff0c\u6bd4\u5982\u4e0d\u4f1a\u51fa\u73b0 Null \u6307\u9488\u7b49\u7b49\u3002"),(0,a.yg)("p",null,"Rust \u81f4\u529b\u4e8e\u6210\u4e3a\u4f18\u96c5\u89e3\u51b3\u9ad8\u5e76\u53d1\u548c\u9ad8\u5b89\u5168\u6027\u7cfb\u7edf\u95ee\u9898\u7684\u7f16\u7a0b\u8bed\u8a00 \uff0c\u9002\u7528\u4e8e\u5927\u578b\u573a\u666f\uff0c\u5373\u521b\u9020\u7ef4\u62a4\u80fd\u591f\u4fdd\u6301\u5927\u578b\u7cfb\u7edf\u5b8c\u6574\u7684\u8fb9\u754c\u3002\u8fd9\u5c31\u5bfc\u81f4\u4e86\u5b83\u5f3a\u8c03\u5b89\u5168\uff0c\u5185\u5b58\u5e03\u5c40\u63a7\u5236\u548c\u5e76\u53d1\u7684\u7279\u70b9\u3002\u6807\u51c6 Rust \u6027\u80fd\u4e0e\u6807\u51c6 C++\u6027\u80fd\u4e0d\u76f8\u4e0a\u4e0b\u3002"),(0,a.yg)("p",null,"\u636e\u8bf4\uff0c\u6b64\u7f16\u7a0b\u8bed\u8a00\uff0c\u5165\u95e8\u8f83\u96be\uff0c\u6666\u6da9\u96be\u61c2\u3002"),(0,a.yg)("h3",{id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-rust"},"\u4e3a\u4ec0\u4e48\u9009\u62e9 Rust"),(0,a.yg)("h4",{id:"\u9ad8\u6027\u80fd"},"\u9ad8\u6027\u80fd"),(0,a.yg)("p",null,"Rust \u901f\u5ea6\u60ca\u4eba\u4e14\u5185\u5b58\u5229\u7528\u7387\u6781\u9ad8\u3002\u7531\u4e8e\u6ca1\u6709\u8fd0\u884c\u65f6\u548c\u5783\u573e\u56de\u6536\uff0c\u5b83\u80fd\u591f\u80dc\u4efb\u5bf9\u6027\u80fd\u8981\u6c42\u7279\u522b\u9ad8\u7684\u670d\u52a1\uff0c\u53ef\u4ee5\u5728\u5d4c\u5165\u5f0f\u8bbe\u5907\u4e0a\u8fd0\u884c\uff0c\u8fd8\u80fd\u8f7b\u677e\u548c\u5176\u4ed6\u8bed\u8a00\u96c6\u6210\u3002"),(0,a.yg)("h4",{id:"\u53ef\u9760\u6027"},"\u53ef\u9760\u6027"),(0,a.yg)("p",null,"Rust \u4e30\u5bcc\u7684\u7c7b\u578b\u7cfb\u7edf\u548c\u6240\u6709\u6743\u6a21\u578b\u4fdd\u8bc1\u4e86\u5185\u5b58\u5b89\u5168\u548c\u7ebf\u7a0b\u5b89\u5168\uff0c\u8ba9\u60a8\u5728\u7f16\u8bd1\u671f\u5c31\u80fd\u591f\u6d88\u9664\u5404\u79cd\u5404\u6837\u7684\u9519\u8bef\u3002"),(0,a.yg)("h4",{id:"\u751f\u4ea7\u529b"},"\u751f\u4ea7\u529b"),(0,a.yg)("p",null,"Rust \u62e5\u6709\u51fa\u8272\u7684\u6587\u6863\u3001\u53cb\u597d\u7684\u7f16\u8bd1\u5668\u548c\u6e05\u6670\u7684\u9519\u8bef\u63d0\u793a\u4fe1\u606f\uff0c \u8fd8\u96c6\u6210\u4e86\u4e00\u6d41\u7684\u5de5\u5177\u2014\u2014\u5305\u7ba1\u7406\u5668\u548c\u6784\u5efa\u5de5\u5177\uff0c \u667a\u80fd\u5730\u81ea\u52a8\u8865\u5168\u548c\u7c7b\u578b\u68c0\u9a8c\u7684\u591a\u7f16\u8f91\u5668\u652f\u6301\uff0c \u4ee5\u53ca\u81ea\u52a8\u683c\u5f0f\u5316\u4ee3\u7801\u7b49\u7b49\u3002"),(0,a.yg)("h3",{id:"\u5185\u5b58\u7ba1\u7406"},"\u5185\u5b58\u7ba1\u7406"),(0,a.yg)("p",null,"Rust \u4e0d\u50cf Go,Java \u4ee5\u53ca.NET Framework \u90a3\u6837\u4f7f\u7528\u81ea\u52a8\u5783\u573e\u56de\u6536\u7cfb\u7edf\u3002\u4e0d\u540c\u7684\u662f Rust \u901a\u8fc7 RAII \u6765\u7ba1\u7406\u5185\u5b58\u548c\u8d44\u6e90\uff0c\u8fd8\u53ef\u9009\u5f15\u7528\u8ba1\u6570\u3002Rust \u4ee5\u4f4e\u5f00\u9500\u63d0\u4f9b\u8d44\u6e90\u786e\u5b9a\u6027\u7ba1\u7406\u3002Rust \u4e5f\u652f\u6301\u503c\u7684\u6808\u5206\u914d\u5e76\u4e0d\u8868\u73b0\u6697\u7bb1\u3002"),(0,a.yg)("h3",{id:"\u6807\u51c6\u5e93"},"\u6807\u51c6\u5e93"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/index.html"},"https://doc.rust-lang.org/std/index.html")),(0,a.yg)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.rust-lang.org/zh-CN"},"\u5b98\u65b9\u7f51\u7ad9")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://baike.baidu.com/item/Rust%E8%AF%AD%E8%A8%80/9502634"},"\u767e\u5ea6\u767e\u79d1-Rust \u8bed\u8a00")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://kaisery.github.io/trpl-zh-cn/title-page.html"},"Rust \u7a0b\u5e8f\u8bbe\u8ba1\u9884\u7814 \u7b80\u4f53\u4e2d\u6587\u7248 \u975e\u5b98\u65b9")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://rust-book.junmajinlong.com/"},"\u9a8f\u9a6c\u91d1\u9f99-Rust \u7684\u5165\u95e8\u4e66\u7c4d"))))}y.isMDXComponent=!0}}]);