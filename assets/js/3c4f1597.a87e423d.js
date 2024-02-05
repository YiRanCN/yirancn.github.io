"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3911],{5788:(t,e,r)=>{r.d(e,{Iu:()=>c,yg:()=>y});var n=r(1504);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},s="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),s=u(r),d=i,y=s["".concat(l,".").concat(d)]||s[d]||f[d]||o;return r?n.createElement(y,p(p({ref:e},c),{},{components:r})):n.createElement(y,p({ref:e},c))}));function y(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,p=new Array(o);p[0]=d;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a[s]="string"==typeof t?t:i,p[1]=a;for(var u=2;u<o;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4404:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=r(5072),i=(r(1504),r(5788));const o={},p=void 0,a={unversionedId:"study/program/C/size_t-ptrdiff_t-intptr_t-uintptr_t",id:"study/program/C/size_t-ptrdiff_t-intptr_t-uintptr_t",title:"size_t-ptrdiff_t-intptr_t-uintptr_t",description:"- size_t",source:"@site/docs/study/program/C/size_t-ptrdiff_t-intptr_t-uintptr_t.md",sourceDirName:"study/program/C",slug:"/study/program/C/size_t-ptrdiff_t-intptr_t-uintptr_t",permalink:"/docs/study/program/C/size_t-ptrdiff_t-intptr_t-uintptr_t",draft:!1,tags:[],version:"current",lastUpdatedAt:1707122256,formattedLastUpdatedAt:"2024\u5e742\u67085\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"pragma",permalink:"/docs/study/program/C/pragma"},next:{title:"\u65b9\u6cd5\u5e93-\u9759\u6001\u5e93-\u52a8\u6001\u5e93-\u5171\u4eab\u5e93",permalink:"/docs/study/program/C/\u65b9\u6cd5\u5e93-\u9759\u6001\u5e93-\u52a8\u6001\u5e93-\u5171\u4eab\u5e93"}},l={},u=[],c={toc:u},s="wrapper";function f(t){let{components:e,...r}=t;return(0,i.yg)(s,(0,n.c)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"size_t")),(0,i.yg)("p",null,"size_t \u662f\u65e0\u7b26\u53f7\u6574\u6570\u7c7b\u578b\uff0c\u8fd9\u662f sizeof \u64cd\u4f5c\u7b26\u7ed3\u679c\u7684\u7c7b\u578b\u3002\u5982\u679c\u8bbe\u5907\u7684\u5730\u5740\u7a7a\u95f4\u4e3a 32 \u4f4d\uff0c\u8fd9\u5c31\u662f\u4e00\u4e2a 32 \u4f4d\u65e0\u7b26\u53f7\u6574\u6570\uff1b\u5982\u679c\u8bbe\u5907\u7684\u5730\u5740\u7a7a\u95f4\u662f 64 \u4f4d\uff0c\u8fd9\u5c31\u662f\u4e00\u4e2a 64 \u4f4d\u65e0\u7b26\u53f7\u6574\u6570\u3002\u6362\u800c\u8a00\u4e4b\uff0c\u4e00\u4e2a size_t \u7c7b\u578b\u7684\u53d8\u91cf\u80fd\u591f\u5b89\u5168\u4fdd\u5b58\u4e00\u4e2a\u6307\u9488\uff08\u552f\u4e00\u7684\u4f8b\u5916\u662f\u6307\u5411\u7c7b\u51fd\u6570\u7684\u6307\u9488\uff09\u3002size_t \u901a\u5e38\u7528\u4e8e loop \u8ba1\u6570\u5668\uff0c\u6570\u7ec4\u7d22\u5f15\u548c\u5730\u5740\u7b97\u6570\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ptrdiff_t")),(0,i.yg)("p",null,"ptrdiff_t \u662f\u6709\u7b26\u53f7\u6574\u6570\u7c7b\u578b\uff0c\u8fd9\u662f\u4e24\u4e2a\u6307\u9488\u76f8\u51cf\u7ed3\u679c\u7684\u7c7b\u578b\u3002\u5982\u679c\u8bbe\u5907\u7684\u5730\u5740\u7a7a\u95f4\u4e3a 32 \u4f4d\uff0c\u8fd9\u5c31\u662f\u4e00\u4e2a 32 \u4f4d\u6709\u7b26\u53f7\u6574\u6570\uff1b\u5982\u679c\u8bbe\u5907\u7684\u5730\u5740\u7a7a\u95f4\u662f 64 \u4f4d\uff0c\u8fd9\u5c31\u662f\u4e00\u4e2a 64 \u4f4d\u6709\u7b26\u53f7\u6574\u6570\u3002\u4e0e size_t \u4e00\u6837\uff0cptrdiff_t \u80fd\u5b89\u5168\u5b58\u50a8\u9664\u7c7b\u51fd\u6570\u6307\u9488\u5916\u7684\u6307\u9488\u3002"),(0,i.yg)("p",null,"size_t \u548c ptr_diff \u7684\u5927\u5c0f\u603b\u662f\u548c\u6307\u9488\u7684\u5927\u5c0f\u4e00\u81f4\uff0c\u56e0\u6b64\u9002\u5408\u7528\u6765\u7d22\u5f15\u5927\u6570\u7ec4\u3001\u5b58\u50a8\u6307\u9488\u4ee5\u53ca\u6307\u9488\u8fd0\u7b97\u7b49\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"intptr_t")),(0,i.yg)("p",null,"\u6709\u7b26\u53f7\u6574\u6570\u7c7b\u578b\uff0c\u5b83\u6709\u4e00\u4e2a\u6027\u8d28\uff0c\u4efb\u4f55\u6307\u5411 void \u7684\u5408\u6cd5\u6307\u9488\u90fd\u53ef\u4ee5\u8f6c\u5316\u4e3a\u8fd9\u4e2a\u7c7b\u578b\uff0c\u7136\u540e\u8fd8\u53ef\u4ee5\u518d\u8f6c\u6362\u56de\u6307\u5411 void \u7684\u6307\u9488\uff0c\u5176\u7ed3\u679c\u4e0e\u539f\u6307\u9488\u6bd4\u8f83\u662f\u76f8\u7b49\u7684\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"uintptr_t")),(0,i.yg)("p",null,"\u65e0\u7b26\u53f7\u6574\u6570\u7c7b\u578b\uff0c\u5b83\u6709\u4e00\u4e2a\u6027\u8d28\uff0c\u4efb\u4f55\u6307\u5411 void \u7684\u5408\u6cd5\u6307\u9488\u90fd\u53ef\u4ee5\u8f6c\u5316\u4e3a\u8fd9\u4e2a\u7c7b\u578b\uff0c\u7136\u540e\u8fd8\u53ef\u4ee5\u518d\u8f6c\u6362\u56de\u6307\u5411 void \u7684\u6307\u9488\uff0c\u5176\u7ed3\u679c\u4e0e\u539f\u6307\u9488\u6bd4\u8f83\u662f\u76f8\u7b49\u7684\u3002"))}f.isMDXComponent=!0}}]);