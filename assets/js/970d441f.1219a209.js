"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1858],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),y=a,f=d["".concat(l,".").concat(y)]||d[y]||s[y]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const o={},c=void 0,i={unversionedId:"study/back/Keepalived",id:"study/back/Keepalived",title:"Keepalived",description:"\u6982\u8ff0",source:"@site/docs/study/back/Keepalived.md",sourceDirName:"study/back",slug:"/study/back/Keepalived",permalink:"/docs/study/back/Keepalived",draft:!1,tags:[],version:"current",lastUpdatedAt:1738461448,formattedLastUpdatedAt:"2025\u5e742\u67082\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Undertow\u4f18\u5316",permalink:"/docs/study/back/JavaWeb\u670d\u52a1\u5668/Undertow\u4f18\u5316"},next:{title:"POST\u7f16\u7801\u683c\u5f0f",permalink:"/docs/study/back/POST\u7f16\u7801\u683c\u5f0f"}},l={},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:3}],u={toc:p},d="wrapper";function s(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.yg)("p",null,"\u5b9a\u4e49\u4e0e\u529f\u80fd\uff1aKeepalived \u662f\u4e00\u4e2a\u57fa\u4e8e VRRP\uff08Virtual Router Redundancy Protocol\uff0c\u865a\u62df\u8def\u7531\u5668\u5197\u4f59\u534f\u8bae\uff09\u5b9e\u73b0\u7684\u9ad8\u53ef\u7528\u89e3\u51b3\u65b9\u6848\u3002\u5b83\u7684\u4e3b\u8981\u529f\u80fd\u662f\u901a\u8fc7\u5728\u591a\u53f0\u670d\u52a1\u5668\u4e4b\u95f4\u5171\u4eab\u4e00\u4e2a\u865a\u62df IP \u5730\u5740\uff0c\u6765\u63d0\u4f9b\u670d\u52a1\u5668\u7684\u6545\u969c\u8f6c\u79fb\u548c\u9ad8\u53ef\u7528\u6027\u3002\u5f53\u4e3b\u670d\u52a1\u5668\u51fa\u73b0\u6545\u969c\u65f6\uff0c\u5907\u4efd\u670d\u52a1\u5668\u53ef\u4ee5\u5feb\u901f\u63a5\u7ba1\u865a\u62df IP \u5730\u5740\u4ee5\u53ca\u5bf9\u5e94\u7684\u670d\u52a1\uff0c\u5bf9\u7528\u6237\u6765\u8bf4\uff0c\u51e0\u4e4e\u611f\u89c9\u4e0d\u5230\u670d\u52a1\u7684\u4e2d\u65ad\u3002\u4f8b\u5982\uff0c\u5728\u4e00\u4e2a Web \u670d\u52a1\u5668\u96c6\u7fa4\u4e2d\uff0c\u4f7f\u7528 Keepalived \u53ef\u4ee5\u786e\u4fdd\u7528\u6237\u59cb\u7ec8\u80fd\u591f\u8bbf\u95ee\u7f51\u7ad9\uff0c\u5373\u4f7f\u5176\u4e2d\u4e00\u53f0\u670d\u52a1\u5668\u51fa\u73b0\u6545\u969c\u3002"),(0,a.yg)("p",null,"\u5e94\u7528\u573a\u666f\uff1a\u5e7f\u6cdb\u5e94\u7528\u4e8e\u5404\u79cd\u9700\u8981\u9ad8\u53ef\u7528\u6027\u7684\u7f51\u7edc\u670d\u52a1\u573a\u666f\uff0c\u5982 Web \u670d\u52a1\u5668\uff08\u5982 Apache\u3001Nginx\uff09\u3001\u6570\u636e\u5e93\u670d\u52a1\u5668\uff08\u5982 MySQL\uff09\u7b49\u3002\u5728\u8d1f\u8f7d\u5747\u8861\u96c6\u7fa4\uff08\u5982 LVS\uff09\u4e2d\uff0cKeepalived \u4e5f\u5e38\u88ab\u7528\u4e8e\u63d0\u4f9b\u8d1f\u8f7d\u5747\u8861\u5668\u7684\u9ad8\u53ef\u7528\u6027\u3002\u6bd4\u5982\uff0c\u5728\u4e00\u4e2a\u7535\u5546\u7f51\u7ad9\u7684\u67b6\u6784\u4e2d\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u7528\u6237\u80fd\u591f\u6301\u7eed\u5730\u8bbf\u95ee\u5546\u54c1\u4fe1\u606f\u548c\u8fdb\u884c\u4ea4\u6613\uff0c\u524d\u7aef\u7684 Web \u670d\u52a1\u5668\u548c\u8d1f\u8f7d\u5747\u8861\u5668\u901a\u5e38\u4f1a\u4f7f\u7528 Keepalived \u6765\u9632\u6b62\u5355\u70b9\u6545\u969c\u3002"))}s.isMDXComponent=!0}}]);