"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8391],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),y=o,f=u["".concat(c,".").concat(y)]||u[y]||d[y]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},99702:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(58168),o=(r(96540),r(15680));const a={sidebar_position:1},i=void 0,l={unversionedId:"study/db/OLAP/\u7efc\u5408\u6982\u8ff0",id:"study/db/OLAP/\u7efc\u5408\u6982\u8ff0",title:"\u7efc\u5408\u6982\u8ff0",description:"1. OLAP\u4e0eOLTP\u7684\u533a\u522b\uff1f",source:"@site/docs/study/db/OLAP/\u7efc\u5408\u6982\u8ff0.md",sourceDirName:"study/db/OLAP",slug:"/study/db/OLAP/\u7efc\u5408\u6982\u8ff0",permalink:"/docs/study/db/OLAP/\u7efc\u5408\u6982\u8ff0",draft:!1,tags:[],version:"current",lastUpdatedAt:1731330337,formattedLastUpdatedAt:"2024\u5e7411\u670811\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"studySidebar",previous:{title:"Redis",permalink:"/docs/study/db/NoSQL/Redis"},next:{title:"ClickHouse",permalink:"/docs/study/db/OLAP/ClickHouse"}},c={},s=[{value:"1. OLAP\u4e0eOLTP\u7684\u533a\u522b\uff1f",id:"1-olap\u4e0eoltp\u7684\u533a\u522b",level:4},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:4}],p={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.yg)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h4",{id:"1-olap\u4e0eoltp\u7684\u533a\u522b"},"1. OLAP\u4e0eOLTP\u7684\u533a\u522b\uff1f"),(0,o.yg)("p",null,"OLTP(Online transaction processing):\u5728\u7ebf/\u8054\u673a\u4e8b\u52a1\u5904\u7406\u3002\u5178\u578b\u7684OLTP\u7c7b\u64cd\u4f5c\u90fd\u6bd4\u8f83\u7b80\u5355\uff0c\u4e3b\u8981\u662f\u5bf9\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u589e\u5220\u6539\u67e5\uff0c\u64cd\u4f5c\u4e3b\u4f53\u4e00\u822c\u662f\u4ea7\u54c1\u7684\u7528\u6237\u3002"),(0,o.yg)("p",null,"OLAP(Online analytical processing):\u6307\u8054\u673a\u5206\u6790\u5904\u7406\u3002\u901a\u8fc7\u5206\u6790\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\u6765\u5f97\u51fa\u4e00\u4e9b\u7ed3\u8bba\u6027\u7684\u4e1c\u897f\u3002\u6bd4\u5982\u7ed9\u8001\u603b\u4eec\u770b\u7684\u62a5\u8868\uff0c\u7528\u4e8e\u8fdb\u884c\u5e02\u573a\u5f00\u62d3\u7684\u7528\u6237\u884c\u4e3a\u7edf\u8ba1\uff0c\u4e0d\u540c\u7ef4\u5ea6\u7684\u6c47\u603b\u5206\u6790\u7ed3\u679c\u7b49\u7b49\u3002\u64cd\u4f5c\u4e3b\u4f53\u4e00\u822c\u662f\u8fd0\u8425\u3001\u9500\u552e\u548c\u5e02\u573a\u7b49\u56e2\u961f\u4eba\u5458\u3002"),(0,o.yg)("p",null,"\u5355\u6b21OLTP\u5904\u7406\u7684\u6570\u636e\u91cf\u6bd4\u8f83\u5c0f\uff0c\u6240\u6d89\u53ca\u7684\u8868\u975e\u5e38\u6709\u9650\uff0c\u4e00\u822c\u4ec5\u4e00\u4e24\u5f20\u8868\u3002\u800cOLAP\u662f\u4e3a\u4e86\u4ece\u5927\u91cf\u7684\u6570\u636e\u4e2d\u627e\u51fa\u67d0\u79cd\u89c4\u5f8b\u6027\u7684\u4e1c\u897f\uff0c\u7ecf\u5e38\u7528\u5230count()\u3001sum()\u548cavg()\u7b49\u805a\u5408\u65b9\u6cd5\uff0c\u7528\u4e8e\u4e86\u89e3\u73b0\u72b6\u5e76\u4e3a\u5c06\u6765\u7684\u8ba1\u5212/\u51b3\u7b56\u63d0\u4f9b\u6570\u636e\u652f\u6491\uff0c\u6240\u4ee5\u5bf9\u591a\u5f20\u8868\u7684\u6570\u636e\u8fdb\u884c\u8fde\u63a5\u6c47\u603b\u975e\u5e38\u666e\u904d\u3002"),(0,o.yg)("p",null,"\u4e3a\u4e86\u8868\u793a\u8ddfOLTP\u7684\u6570\u636e\u5e93\uff08database\uff09\u5728\u6570\u636e\u91cf\u548c\u590d\u6742\u5ea6\u4e0a\u7684\u4e0d\u540c\uff0c\u4e00\u822c\u79f0OLAP\u7684\u64cd\u4f5c\u5bf9\u8c61\u4e3a\u6570\u636e\u4ed3\u5e93\uff08data warehouse\uff09\uff0c\u7b80\u79f0\u6570\u4ed3\u3002\u6570\u636e\u5e93\u4ed3\u5e93\u4e2d\u7684\u6570\u636e\uff0c\u5f80\u5f80\u6765\u6e90\u4e8e\u591a\u4e2a\u6570\u636e\u5e93\uff0c\u4ee5\u53ca\u76f8\u5e94\u7684\u4e1a\u52a1\u65e5\u5fd7\u3002"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"image.png",src:r(45978).A,width:"720",height:"504"})),(0,o.yg)("h4",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_44087159/article/details/124477313"},"OLAP\u4e0eOLTP\u7684\u533a\u522b"))))}d.isMDXComponent=!0},45978:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/image-9929ccd934ed6146e051f490f500d91a.png"}}]);