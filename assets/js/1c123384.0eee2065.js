"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6196],{5788:(e,r,t)=>{t.d(r,{Iu:()=>l,yg:()=>f});var n=t(1504);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(t),y=o,f=s["".concat(u,".").concat(y)]||s[y]||d[y]||a;return t?n.createElement(f,c(c({ref:r},l),{},{components:t})):n.createElement(f,c({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=y;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6700:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(5072),o=(t(1504),t(5788));const a={},c=void 0,i={unversionedId:"study/program/JAVA/Guice",id:"study/program/JAVA/Guice",title:"Guice",description:"\u80cc\u666f",source:"@site/docs/study/program/JAVA/Guice.md",sourceDirName:"study/program/JAVA",slug:"/study/program/JAVA/Guice",permalink:"/docs/study/program/JAVA/Guice",draft:!1,tags:[],version:"current",lastUpdatedAt:1707122256,formattedLastUpdatedAt:"2024\u5e742\u67085\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"GraalVM",permalink:"/docs/study/program/JAVA/GraalVM"},next:{title:"Maven",permalink:"/docs/study/program/JAVA/Maven"}},u={},p=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:3}],l={toc:p},s="wrapper";function d(e){let{components:r,...t}=e;return(0,o.yg)(s,(0,n.c)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,o.yg)("p",null,"Guice \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u3001\u57fa\u4e8e Java \u7684\u4f9d\u8d56\u6ce8\u5165\u6846\u67b6\u3002\u5b83\u662f\u8f7b\u91cf\u7ea7\u7684\uff0c\u7531 Google \u79ef\u6781\u5f00\u53d1/\u7ba1\u7406\u3002"),(0,o.yg)("p",null,"\u5728\u65e5\u5e38\u5199\u4e00\u4e9b\u5c0f\u5de5\u5177\u6216\u8005\u5c0f\u9879\u76ee\u7684\u65f6\u5019\uff0c\u6709\u4f9d\u8d56\u7ba1\u7406\u548c\u4f9d\u8d56\u6ce8\u5165\u7684\u9700\u6c42\uff0c\u4f46\u662fSpring(Boot)\u4f53\u7cfb\u4f5c\u4e3aDI\u6846\u67b6\u8fc7\u4e8e\u91cd\u91cf\u7ea7\uff0c\u4e8e\u662f\u9700\u8981\u8c03\u7814\u4e00\u6b3e\u5fae\u578b\u7684DI\u6846\u67b6\u3002Guice\u662fGoogle\u51fa\u54c1\u7684\u4e00\u6b3e\u8f7b\u91cf\u7ea7\u7684\u4f9d\u8d56\u6ce8\u5165\u6846\u67b6\uff0c\u4f7f\u7528\u5b83\u6709\u52a9\u4e8e\u89e3\u51b3\u9879\u76ee\u4e2d\u7684\u4f9d\u8d56\u6ce8\u5165\u95ee\u9898\uff0c\u63d0\u9ad8\u4e86\u53ef\u7ef4\u62a4\u6027\u548c\u7075\u6d3b\u6027\u3002\u76f8\u5bf9\u4e8e\u91cd\u91cf\u7ea7\u7684Spring(Boot)\u4f53\u7cfb\uff0cGuice\u9879\u76ee\u53ea\u6709\u4e00\u4e2a\u5c0f\u4e8e1MB\u7684\u6838\u5fc3\u6a21\u5757\uff0c\u5982\u679c\u6838\u5fc3\u9700\u6c42\u662fDI\uff08\u5176\u5b9eGuice\u4e5f\u63d0\u4f9b\u4e86\u5f88\u4f4e\u5c42\u6b21\u7684AOP\u5b9e\u73b0\uff09\uff0c\u90a3\u4e48Guice\u5e94\u8be5\u4f1a\u662f\u4e00\u4e2a\u5408\u9002\u7684\u5019\u9009\u65b9\u6848\u3002"))}d.isMDXComponent=!0}}]);