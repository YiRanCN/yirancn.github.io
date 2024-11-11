"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[927],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(r),y=o,f=s["".concat(u,".").concat(y)]||s[y]||d[y]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},75342:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(58168),o=(r(96540),r(15680));const a={},i=void 0,c={unversionedId:"study/db/\u65f6\u5e8f\u6570\u636e\u5e93/Druid",id:"study/db/\u65f6\u5e8f\u6570\u636e\u5e93/Druid",title:"Druid",description:"\u57fa\u672c\u4fe1\u606f",source:"@site/docs/study/db/\u65f6\u5e8f\u6570\u636e\u5e93/Druid.md",sourceDirName:"study/db/\u65f6\u5e8f\u6570\u636e\u5e93",slug:"/study/db/\u65f6\u5e8f\u6570\u636e\u5e93/Druid",permalink:"/docs/study/db/\u65f6\u5e8f\u6570\u636e\u5e93/Druid",draft:!1,tags:[],version:"current",lastUpdatedAt:1731330337,formattedLastUpdatedAt:"2024\u5e7411\u670811\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Apache IoTDB",permalink:"/docs/study/db/\u65f6\u5e8f\u6570\u636e\u5e93/Apache IoTDB"},next:{title:"KairosDB",permalink:"/docs/study/db/\u65f6\u5e8f\u6570\u636e\u5e93/KairosDB"}},u={},l=[],p={toc:l},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(s,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"\u57fa\u672c\u4fe1\u606f")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"\u7f16\u7a0b\u8bed\u8a00\uff1aJava"),(0,o.yg)("li",{parentName:"ol"},"\u5f00\u6e90\uff1a\u662f"),(0,o.yg)("li",{parentName:"ol"},"\u5907\u6ce8\uff1aDruid\u4e25\u683c\u4e0a\u4e0d\u80fd\u7b97\u65f6\u5e8f\u6570\u636e\u5e93\uff0c\u5e94\u8be5\u7b97\u4e00\u4e2aOLAP\u6570\u636e\u5e93\uff0c\u5b9a\u4f4d\u8fd8\u662f\u4e0d\u592a\u4e00\u6837\u7684"),(0,o.yg)("li",{parentName:"ol"},"Prometheus \u548c Druid \u4e5f\u56e0\u4e3a\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u7ba1\u7406\u800c\u95fb\u540d\uff0c\u4f46\u662f Prometheus \u805a\u7126\u5728\u6570\u636e\u91c7\u96c6\u3001\u53ef\u89c6\u5316\u548c\u62a5\u8b66\uff0cDruid \u805a\u7126\u5728 OLAP \u8d1f\u8f7d\u7684\u6570\u636e\u5206\u6790\uff0c\u56e0\u6b64\u672c\u6587\u7701\u7565\u4e86 Prometheus \u548c Druid\u3002")))}d.isMDXComponent=!0}}]);