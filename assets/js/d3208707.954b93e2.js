"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9942],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),y=c(r),d=a,m=y["".concat(s,".").concat(d)]||y[d]||p[d]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[y]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5934:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(8168),a=(r(6540),r(5680));const i={},l=void 0,o={unversionedId:"study/back/\u6570\u636e\u5e93\u76f8\u5173/MyBatis",id:"study/back/\u6570\u636e\u5e93\u76f8\u5173/MyBatis",title:"MyBatis",description:"\u4e00\u4e9b\u7ecf\u5e38\u8bfb\u7684\u5b98\u65b9\u6587\u6863",source:"@site/docs/study/back/\u6570\u636e\u5e93\u76f8\u5173/MyBatis.md",sourceDirName:"study/back/\u6570\u636e\u5e93\u76f8\u5173",slug:"/study/back/\u6570\u636e\u5e93\u76f8\u5173/MyBatis",permalink:"/docs/study/back/\u6570\u636e\u5e93\u76f8\u5173/MyBatis",draft:!1,tags:[],version:"current",lastUpdatedAt:1730734841,formattedLastUpdatedAt:"2024\u5e7411\u67084\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Java\u6570\u636e\u5e93\u8fde\u63a5\u6c60",permalink:"/docs/study/back/\u6570\u636e\u5e93\u76f8\u5173/Java\u6570\u636e\u5e93\u8fde\u63a5\u6c60"},next:{title:"log4jdbc",permalink:"/docs/study/back/\u6570\u636e\u5e93\u76f8\u5173/log4jdbc"}},s={},c=[{value:"\u4e00\u4e9b\u7ecf\u5e38\u8bfb\u7684\u5b98\u65b9\u6587\u6863",id:"\u4e00\u4e9b\u7ecf\u5e38\u8bfb\u7684\u5b98\u65b9\u6587\u6863",level:3},{value:"MyBatis \u7f13\u5b58",id:"mybatis-\u7f13\u5b58",level:3},{value:"\u4f5c\u7528\u8303\u56f4",id:"\u4f5c\u7528\u8303\u56f4",level:4},{value:"\u7f13\u5b58\u4f4d\u7f6e",id:"\u7f13\u5b58\u4f4d\u7f6e",level:4},{value:"\u7f13\u5b58\u8fc7\u671f",id:"\u7f13\u5b58\u8fc7\u671f",level:4}],u={toc:c},y="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(y,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u4e00\u4e9b\u7ecf\u5e38\u8bfb\u7684\u5b98\u65b9\u6587\u6863"},"\u4e00\u4e9b\u7ecf\u5e38\u8bfb\u7684\u5b98\u65b9\u6587\u6863"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://mybatis.org/mybatis-3/zh_CN/index.html"},"MyBatis \u5b98\u65b9\u53c2\u8003\u6587\u6863")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/mybatis"},"GitHub-MyBatis")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/mybatis/spring-boot-starter"},"MyBatis integration with Spring Boot"))),(0,a.yg)("h3",{id:"mybatis-\u7f13\u5b58"},"MyBatis \u7f13\u5b58"),(0,a.yg)("p",null,"myabtis \u7684\u7f13\u5b58\u5206\u4e3a\u4e00\u7ea7\u7f13\u5b58\u548c\u4e8c\u7ea7\u7f13\u5b58\uff0c\u9ed8\u8ba4\u5f00\u542f\u4e00\u7ea7\u7f13\u5b58\uff0c\u5173\u95ed\u4e8c\u7ea7\u7f13\u5b58\uff0c\u4e00\u7ea7\u7f13\u5b58\u65f6 sqlSession \u7ea7\u522b\uff0c\u4e8c\u7ea7\u7f13\u5b58\u662f namespace \u7ea7\u522b\u3002"),(0,a.yg)("h4",{id:"\u4f5c\u7528\u8303\u56f4"},"\u4f5c\u7528\u8303\u56f4"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4e00\u7ea7\u7f13\u5b58\u662f\u4f1a\u8bdd\u7ea7\u522b\u7684\u7f13\u5b58\uff0c\u5373 sqlSession \u7ea7\u522b\uff0c\u4f1a\u8bdd\u7ed3\u675f\uff0c\u6e05\u9664\u4f1a\u8bdd\u4e2d\u7684\u7f13\u5b58\u6570\u636e\uff0c\u5b9e\u9645\u4ee3\u7801\u4e2d\u901a\u8fc7\u901a\u8fc7\u5f00\u542f\u4e8b\u52a1\u8ba9\u591a\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u5171\u4eab\u4e00\u4e2a sqlSession\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4e8c\u7ea7\u7f13\u5b58: \u5168\u5c40\u7ea7\u522b\uff0c\u4e5f\u53eb namespace \u7ea7\u522b\uff0c\u4f1a\u8bdd\u7ed3\u675f\uff0c\u7f13\u5b58\u4f9d\u7136\u5b58\u5728\uff0c\u591a\u4e2a\u8bf7\u6c42\u53ef\u4ee5\u5171\u4eab\u7f13\u5b58\u6570\u636e\u3002")),(0,a.yg)("h4",{id:"\u7f13\u5b58\u4f4d\u7f6e"},"\u7f13\u5b58\u4f4d\u7f6e"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4e00\u7ea7\u7f13\u5b58\u7531\u4e8e\u662f sqlSession \u7ea7\u522b\uff0c\u672c\u8d28\u4e0a\u662f\u5728 JVM \u4e2d\u521b\u5efa\u4e00\u4e2a Map \u96c6\u5408\u5bf9\u8c61\u4fdd\u5b58\u7f13\u5b58\u6570\u636e\uff0c\u6240\u4ee5\u7f13\u5b58\u6570\u636e\u4fdd\u7559\u7684\u5730\u65b9\u662f\u672c\u5730 JVM \u5185\u5b58\u4e2d\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4e8c\u7ea7\u7f13\u5b58\u9ed8\u8ba4\u4e5f\u662f\u4fdd\u5b58\u5728 JVM \u4e2d\uff0c\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u5c06\u7f13\u5b58\u6570\u636e\u4fdd\u5b58\u5230\u7b2c\u4e09\u65b9\u7f13\u5b58\u4e2d\uff0c\u6bd4\u5982 ehcache\u3001redis\u3002\u4fdd\u5b58\u5728 redis \u8fd9\u4e9b\u7684\u5206\u5e03\u5f0f\u7f13\u5b58\u4e2d\uff0c\u80fd\u63d0\u4f9b\u66f4\u597d\u7684\u5206\u5e03\u5f0f\u573a\u666f\u7684\u652f\u6301\u3002")),(0,a.yg)("h4",{id:"\u7f13\u5b58\u8fc7\u671f"},"\u7f13\u5b58\u8fc7\u671f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4e00\u7ea7\u7f13\u5b58\u65e0\u8fc7\u671f\u65f6\u95f4\uff0c\u53ea\u6709\u751f\u547d\u5468\u671f\uff0c\u7f13\u5b58\u4f1a\u5148\u653e\u5728\u4e00\u7ea7\u7f13\u5b58\u4e2d\uff0c\u5f53 sqlSession \u4f1a\u8bdd\u63d0\u4ea4\u6216\u8005\u5173\u95ed\u65f6\u624d\u4f1a\u5c06\u4e00\u7ea7\u7f13\u5b58\u5237\u65b0\u5230\u4e8c\u7ea7\u7f13\u5b58\u4e2d\uff1b\u5f00\u542f\u4e8c\u7ea7\u7f13\u5b58\u540e\uff0c\u7528\u6237\u67e5\u8be2\u65f6\uff0c\u4f1a\u5148\u53bb\u4e8c\u7ea7\u7f13\u5b58\u4e2d\u627e\uff0c\u627e\u4e0d\u5230\u5728\u53bb\u4e00\u7ea7\u7f13\u5b58\u4e2d\u627e\uff0c\u7136\u540e\u624d\u53bb\u6570\u636e\u5e93\u67e5\u8be2\uff1b"),(0,a.yg)("li",{parentName:"ul"},"\u4e8c\u7ea7\u7f13\u5b58\u7684\u8fc7\u671f\u65f6\u95f4\u9ed8\u8ba4\u662f 1 \u5c0f\u65f6\uff0c\u5982\u679c\u8fd9\u4e2a cache \u5b58\u6d3b\u4e86\u4e00\u4e2a\u5c0f\u65f6\uff0c\u90a3\u4e48\u5c06\u6574\u4e2a\u6e05\u7a7a\u4e00\u4e0b\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5e76\u4e0d\u662f key-value \u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u800c\u662f\u8fd9\u4e2a cache \u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u662f flushInterval\uff0c\u610f\u5473\u7740\u6574\u4e2a\u6e05\u7a7a\u7f13\u5b58 cache\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u540e\u53f0\u7ebf\u7a0b\u53bb\u5b9a\u65f6\u68c0\u6d4b\uff0c\u6bcf\u5f53\u5b58\u53d6\u6570\u636e\u7684\u65f6\u5019\uff0c\u90fd\u6709\u68c0\u6d4b\u4e00\u4e0b cache \u7684\u751f\u547d\u65f6\u95f4\u3002")))}p.isMDXComponent=!0}}]);