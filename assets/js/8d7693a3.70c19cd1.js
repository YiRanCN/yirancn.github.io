"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4116],{15680:(e,l,t)=>{t.d(l,{xA:()=>s,yg:()=>d});var n=t(96540);function r(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function u(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?u(Object(t),!0).forEach((function(l){r(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function i(e,l){if(null==e)return{};var t,n,r=function(e,l){if(null==e)return{};var t,n,r={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],l.indexOf(t)>=0||(r[t]=e[t]);return r}(e,l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),a=function(e){var l=n.useContext(p),t=l;return e&&(t="function"==typeof e?e(l):o(o({},l),e)),t},s=function(e){var l=a(e.components);return n.createElement(p.Provider,{value:l},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},O=n.forwardRef((function(e,l){var t=e.components,r=e.mdxType,u=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=a(t),O=r,d=c["".concat(p,".").concat(O)]||c[O]||y[O]||u;return t?n.createElement(d,o(o({ref:l},s),{},{components:t})):n.createElement(d,o({ref:l},s))}));function d(e,l){var t=arguments,r=l&&l.mdxType;if("string"==typeof e||r){var u=t.length,o=new Array(u);o[0]=O;var i={};for(var p in l)hasOwnProperty.call(l,p)&&(i[p]=l[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var a=2;a<u;a++)o[a]=t[a];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}O.displayName="MDXCreateElement"},67182:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>u,metadata:()=>i,toc:()=>a});var n=t(58168),r=(t(96540),t(15680));const u={},o="\u64cd\u4f5c\u7cfb\u7edf IO \u77e5\u8bc6",i={unversionedId:"study/system/IO",id:"study/system/IO",title:"\u64cd\u4f5c\u7cfb\u7edf IO \u77e5\u8bc6",description:"I/O\uff08Input/Output\uff09\u6a21\u578b\u662f\u8ba1\u7b97\u673a\u79d1\u5b66\u4e2d\u7684\u4e00\u4e2a\u5173\u952e\u6982\u5ff5\uff0c\u5b83\u6d89\u53ca\u5230\u5982\u4f55\u8fdb\u884c\u8f93\u5165\u548c\u8f93\u51fa\u64cd\u4f5c\uff0c\u800c\u8fd9\u5728\u8ba1\u7b97\u673a\u5e94\u7528\u4e2d\u662f\u4e0d\u53ef\u6216\u7f3a\u7684\u4e00\u90e8\u5206\u3002\u5728\u4e0d\u540c\u7684\u5e94\u7528\u573a\u666f\u4e0b\uff0c\u9009\u62e9\u6b63\u786e\u7684 I/O \u6a21\u578b\u662f\u81f3\u5173\u91cd\u8981\u7684\uff0c\u56e0\u4e3a\u5b83\u4f1a\u5f71\u54cd\u5230\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u548c\u54cd\u5e94\u6027\u3002",source:"@site/docs/study/system/IO.md",sourceDirName:"study/system",slug:"/study/system/IO",permalink:"/docs/study/system/IO",draft:!1,tags:[],version:"current",lastUpdatedAt:1738461448,formattedLastUpdatedAt:"2025\u5e742\u67082\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"CPU\u7ebf\u7a0b\u5e76\u53d1",permalink:"/docs/study/system/CPU\u7ebf\u7a0b\u5e76\u53d1"},next:{title:"Open\u6b27\u62c9",permalink:"/docs/study/system/Open\u6b27\u62c9"}},p={},a=[{value:"\u963b\u585e IO",id:"\u963b\u585e-io",level:3},{value:"\u975e\u963b\u585e IO",id:"\u975e\u963b\u585e-io",level:3},{value:"\u4fe1\u53f7\u9a71\u52a8 I/O",id:"\u4fe1\u53f7\u9a71\u52a8-io",level:4},{value:"\u5f02\u6b65 I/O",id:"\u5f02\u6b65-io",level:4},{value:"IO \u591a\u8def\u590d\u7528\u51fd\u6570",id:"io-\u591a\u8def\u590d\u7528\u51fd\u6570",level:3},{value:"select",id:"select",level:4},{value:"poll",id:"poll",level:4},{value:"epoll",id:"epoll",level:4},{value:"kqueue",id:"kqueue",level:4},{value:"\u4e3a\u4ec0\u4e48 epoll,kqueue \u6bd4 select \u9ad8\u7ea7\uff1f",id:"\u4e3a\u4ec0\u4e48-epollkqueue-\u6bd4-select-\u9ad8\u7ea7",level:4}],s={toc:a},c="wrapper";function y(e){let{components:l,...t}=e;return(0,r.yg)(c,(0,n.A)({},s,t,{components:l,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u64cd\u4f5c\u7cfb\u7edf-io-\u77e5\u8bc6"},"\u64cd\u4f5c\u7cfb\u7edf IO \u77e5\u8bc6"),(0,r.yg)("p",null,"I/O\uff08Input/Output\uff09\u6a21\u578b\u662f\u8ba1\u7b97\u673a\u79d1\u5b66\u4e2d\u7684\u4e00\u4e2a\u5173\u952e\u6982\u5ff5\uff0c\u5b83\u6d89\u53ca\u5230\u5982\u4f55\u8fdb\u884c\u8f93\u5165\u548c\u8f93\u51fa\u64cd\u4f5c\uff0c\u800c\u8fd9\u5728\u8ba1\u7b97\u673a\u5e94\u7528\u4e2d\u662f\u4e0d\u53ef\u6216\u7f3a\u7684\u4e00\u90e8\u5206\u3002\u5728\u4e0d\u540c\u7684\u5e94\u7528\u573a\u666f\u4e0b\uff0c\u9009\u62e9\u6b63\u786e\u7684 I/O \u6a21\u578b\u662f\u81f3\u5173\u91cd\u8981\u7684\uff0c\u56e0\u4e3a\u5b83\u4f1a\u5f71\u54cd\u5230\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u548c\u54cd\u5e94\u6027\u3002"),(0,r.yg)("h3",{id:"\u963b\u585e-io"},"\u963b\u585e IO"),(0,r.yg)("p",null,"\u963b\u585e I/O \u6a21\u578b\u4e0e\u540c\u6b65 I/O \u6a21\u578b\u76f8\u4f3c\uff0c\u5b83\u4e5f\u9700\u8981\u5e94\u7528\u7a0b\u5e8f\u7b49\u5f85 I/O \u64cd\u4f5c\u5b8c\u6210\u3002\u963b\u585e I/O \u9002\u7528\u4e8e\u7b80\u5355\u7684\u5e94\u7528\uff0c\u4f46\u53ef\u80fd\u5bfc\u81f4\u6027\u80fd\u95ee\u9898\uff0c\u56e0\u4e3a\u5e94\u7528\u7a0b\u5e8f\u4f1a\u5728\u7b49\u5f85\u64cd\u4f5c\u5b8c\u6210\u65f6\u88ab\u963b\u585e\u3002"),(0,r.yg)("h3",{id:"\u975e\u963b\u585e-io"},"\u975e\u963b\u585e IO"),(0,r.yg)("p",null,"\u975e\u963b\u585e I/O \u6a21\u578b\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u53d1\u8d77 I/O \u64cd\u4f5c\u540e\u7ee7\u7eed\u6267\u884c\u5176\u4ed6\u4efb\u52a1\uff0c\u800c\u4e0d\u5fc5\u7b49\u5f85\u64cd\u4f5c\u5b8c\u6210\u3002\u8fd9\u79cd\u6a21\u578b\u9002\u7528\u4e8e\u9700\u8981\u540c\u65f6\u5904\u7406\u591a\u4e2a\u901a\u9053\u7684\u5e94\u7528\u3002"),(0,r.yg)("p",null,'\u53e6\u4e00\u4e2a\u91cd\u8981\u7684\u6982\u5ff5\u662f"I/O \u591a\u8def\u590d\u7528"\uff08I/O Multiplexing\uff09\u3002I/O \u591a\u8def\u590d\u7528\u662f\u4e00\u79cd\u9ad8\u6548\u5904\u7406\u591a\u4e2a I/O \u64cd\u4f5c\u7684\u6a21\u578b\uff0c\u5b83\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u540c\u65f6\u76d1\u89c6\u591a\u4e2a\u6587\u4ef6\u63cf\u8ff0\u7b26\uff08sockets\u3001\u6587\u4ef6\u3001\u7ba1\u9053\u7b49\uff09\u4ee5\u68c0\u6d4b\u5b83\u4eec\u662f\u5426\u51c6\u5907\u597d\u8fdb\u884c I/O \u64cd\u4f5c\u3002\u8fd9\u53ef\u4ee5\u6709\u6548\u5730\u51cf\u5c11\u7ebf\u7a0b\u6570\u91cf\uff0c\u4ece\u800c\u63d0\u9ad8\u6027\u80fd\u548c\u8d44\u6e90\u5229\u7528\u7387\u3002\u5728 Java \u4e2d\uff0cI/O \u591a\u8def\u590d\u7528\u901a\u5e38\u901a\u8fc7 java.nio.channels.Selector \u7c7b\u6765\u5b9e\u73b0\u3002'),(0,r.yg)("p",null,'I/O \u591a\u8def\u590d\u7528\u975e\u5e38\u9002\u5408\u9700\u8981\u540c\u65f6\u5904\u7406\u591a\u4e2a\u901a\u9053\u7684\u5e94\u7528\uff0c\u5982\u9ad8\u6027\u80fd\u7f51\u7edc\u670d\u52a1\u5668\u3002\u5b83\u53ef\u4ee5\u51cf\u5c11\u7ebf\u7a0b\u6570\u91cf\uff0c\u63d0\u9ad8\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u548c\u53ef\u4f38\u7f29\u6027\u3002\u5728\u9009\u62e9 I/O \u6a21\u578b\u65f6\uff0c\u5e94\u8be5\u8003\u8651\u5e94\u7528\u7a0b\u5e8f\u7684\u5177\u4f53\u9700\u6c42\u548c\u6027\u80fd\u8981\u6c42\uff0cI/O \u591a\u8def\u590d\u7528\u662f\u4e00\u4e2a\u91cd\u8981\u7684\u9009\u62e9\u4e4b\u4e00\u3002\u8fd8\u6709\u4e24\u4e2a\u91cd\u8981\u7684\u6982\u5ff5\u662f"\u4fe1\u53f7\u9a71\u52a8 I/O"\uff08Signal Driven I/O\uff09\u548c"\u5f02\u6b65 I/O"\u3002\u8fd9\u4e24\u79cd I/O \u6a21\u578b\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u53ef\u4ee5\u63d0\u4f9b\u66f4\u9ad8\u7684\u6027\u80fd\u548c\u6548\u7387\u3002'),(0,r.yg)("h4",{id:"\u4fe1\u53f7\u9a71\u52a8-io"},"\u4fe1\u53f7\u9a71\u52a8 I/O"),(0,r.yg)("p",null,"\u4fe1\u53f7\u9a71\u52a8 I/O \u662f\u4e00\u79cd\u975e\u963b\u585e I/O \u7684\u53d8\u4f53\uff0c\u5b83\u4f7f\u7528\u4fe1\u53f7\u901a\u77e5\u5e94\u7528\u7a0b\u5e8f\u6587\u4ef6\u63cf\u8ff0\u7b26\u5df2\u51c6\u5907\u597d\u8fdb\u884c I/O \u64cd\u4f5c\u3002\u8fd9\u79cd\u6a21\u578b\u5728\u7c7b Unix \u7cfb\u7edf\u4e2d\u975e\u5e38\u5e38\u89c1\uff0c\u901a\u5e38\u4e0e\u5f02\u6b65 I/O \u7ed3\u5408\u4f7f\u7528\u3002\u5728 Java \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 java.nio.channels.AsynchronousChannel \u6765\u5b9e\u73b0\u4fe1\u53f7\u9a71\u52a8 I/O\u3002"),(0,r.yg)("p",null,"\u56de\u8c03\uff1b"),(0,r.yg)("h4",{id:"\u5f02\u6b65-io"},"\u5f02\u6b65 I/O"),(0,r.yg)("p",null,'\u5f02\u6b65 I/O \u6a21\u578b\u4e5f\u79f0\u4e3a"\u771f\u6b63\u7684\u5f02\u6b65 I/O"\uff0c\u5b83\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u53d1\u8d77 I/O \u64cd\u4f5c\u540e\u7ee7\u7eed\u6267\u884c\u5176\u4ed6\u4efb\u52a1\uff0c\u800c\u4e0d\u9700\u8981\u7b49\u5f85\u64cd\u4f5c\u5b8c\u6210\u3002\u5f02\u6b65 I/O \u4e0e\u4fe1\u53f7\u9a71\u52a8 I/O \u4e0d\u540c\uff0c\u56e0\u4e3a\u5b83\u4e0d\u4f1a\u4f7f\u7528\u56de\u8c03\u51fd\u6570\uff0c\u800c\u662f\u4f7f\u7528\u4e8b\u4ef6\u9a71\u52a8\u7684\u65b9\u5f0f\u6765\u901a\u77e5 I/O \u64cd\u4f5c\u7684\u5b8c\u6210\u3002'),(0,r.yg)("h3",{id:"io-\u591a\u8def\u590d\u7528\u51fd\u6570"},"IO \u591a\u8def\u590d\u7528\u51fd\u6570"),(0,r.yg)("h4",{id:"select"},"select"),(0,r.yg)("p",null,"\u53ef\u5728\u4e0d\u540c\u5e73\u53f0\uff08\u5305\u62ec Unix\u3001Linux \u548c Windows\uff09\u4e0a\u4f7f\u7528\u3002\u7531\u4e8e\u5176\u53ef\u79fb\u690d\u6027\uff0cselect \u662f\u4e00\u79cd\u901a\u7528\u7684 I/O \u591a\u8def\u590d\u7528\u65b9\u6cd5\u3002"),(0,r.yg)("h4",{id:"poll"},"poll"),(0,r.yg)("p",null,"poll \u4e5f\u662f\u76f8\u5bf9\u53ef\u79fb\u690d\u7684\uff0c\u4f46\u5e76\u975e\u5728\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u90fd\u5f97\u5230\u5e7f\u6cdb\u652f\u6301\u3002\u5b83\u5728\u5927\u591a\u6570 Unix \u7cfb\u7edf\u4e0a\u53ef\u7528\uff0c\u4f46\u5728 Windows \u4e0a\u7684\u652f\u6301\u8f83\u5f31\u3002"),(0,r.yg)("p",null,"\u603b\u7684\u6765\u8bf4\uff0cpoll \u5728\u6027\u80fd\u548c\u53ef\u8bfb\u6027\u65b9\u9762\u76f8\u5bf9\u4f18\u4e8e select\uff0c\u7279\u522b\u662f\u5728\u5904\u7406\u5927\u91cf\u6587\u4ef6\u63cf\u8ff0\u7b26\u65f6\u3002\u4f46\u9009\u62e9\u4f7f\u7528\u54ea\u79cd\u65b9\u6cd5\u8fd8\u53d6\u51b3\u4e8e\u5e94\u7528\u7a0b\u5e8f\u7684\u9700\u6c42\u548c\u76ee\u6807\u5e73\u53f0\u7684\u652f\u6301\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0cepoll \u548c kqueue \u4e5f\u662f\u66f4\u9ad8\u6027\u80fd\u7684\u66ff\u4ee3\u65b9\u6848\uff0c\u7279\u522b\u9002\u7528\u4e8e\u5927\u89c4\u6a21\u5e76\u53d1\u7684\u5e94\u7528\u3002"),(0,r.yg)("p",null,"\u662f\u4e00\u79cd\u6700\u65e9\u51fa\u73b0\u5728 Unix \u7cfb\u7edf\u4e2d\u7684\u591a\u8def\u590d\u7528\u673a\u5236\u3002poll \u7b49\u5f85\u591a\u4e2a\u6587\u4ef6\u63cf\u8ff0\u7b26\u4e2d\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u53d8\u4e3a\u53ef\u8bfb\uff0c\u53ef\u5199\u6216\u5f02\u5e38\u3002\u4f46 poll \u5728\u5927\u91cf\u6587\u4ef6\u63cf\u8ff0\u7b26\u7684\u60c5\u51b5\u4e0b\u6027\u80fd\u53ef\u80fd\u4e0d\u5982 epoll \u6216 kqueue \u597d\u3002"),(0,r.yg)("h4",{id:"epoll"},"epoll"),(0,r.yg)("p",null,"\u662f\u4e00\u79cd\u4e8b\u4ef6\u901a\u77e5\u673a\u5236\uff0c\u6700\u65e9\u51fa\u73b0\u5728 Linux \u4e2d\u3002\u5b83\u5141\u8bb8\u8fdb\u7a0b\u76d1\u89c6\u5927\u91cf\u6587\u4ef6\u63cf\u8ff0\u7b26\u4e0a\u7684\u4e8b\u4ef6\u3002epoll \u901a\u5e38\u7528\u4e8e\u9ad8\u5e76\u53d1\u7684\u7f51\u7edc\u5e94\u7528\u7a0b\u5e8f\uff0c\u56e0\u4e3a\u5b83\u5728\u6587\u4ef6\u63cf\u8ff0\u7b26\u6570\u91cf\u975e\u5e38\u591a\u7684\u60c5\u51b5\u4e0b\u6027\u80fd\u8868\u73b0\u826f\u597d\u3002"),(0,r.yg)("h4",{id:"kqueue"},"kqueue"),(0,r.yg)("p",null,"\u662f BSD \u548c macOS \u7b49 Unix-like \u64cd\u4f5c\u7cfb\u7edf\u4e2d\u7684\u4e00\u79cd\u4e8b\u4ef6\u901a\u77e5\u673a\u5236\u3002\u5b83\u53ef\u4ee5\u76d1\u89c6\u6587\u4ef6\u63cf\u8ff0\u7b26\u3001\u8fdb\u7a0b\u3001\u4fe1\u53f7\u3001\u4ee5\u53ca\u5176\u4ed6\u5404\u79cd\u4e8b\u4ef6\u3002kqueue \u901a\u5e38\u88ab\u7528\u4e8e\u5f00\u53d1\u9ad8\u6027\u80fd\u7684\u670d\u52a1\u5668\u5e94\u7528\u548c\u7f51\u7edc\u5e94\u7528\u3002"),(0,r.yg)("h4",{id:"\u4e3a\u4ec0\u4e48-epollkqueue-\u6bd4-select-\u9ad8\u7ea7"},"\u4e3a\u4ec0\u4e48 epoll,kqueue \u6bd4 select \u9ad8\u7ea7\uff1f"),(0,r.yg)("p",null,"epoll \u548c kqueue \u6bd4 select \u9ad8\u7ea7\u7684\u539f\u56e0\u5728\u4e8e\u5b83\u4eec\u5728\u5904\u7406\u9ad8\u5e76\u53d1 I/O \u65f6\u5177\u6709\u66f4\u597d\u7684\u6027\u80fd\u548c\u6269\u5c55\u6027\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u4e3b\u8981\u539f\u56e0\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u9ad8\u6548\u7684\u4e8b\u4ef6\u901a\u77e5\u673a\u5236\uff1aepoll \u548c kqueue \u4f7f\u7528\u4e8b\u4ef6\u901a\u77e5\u673a\u5236\uff0c\u800c\u4e0d\u662f select \u7684\u8f6e\u8be2\u65b9\u5f0f\u3002\u8fd9\u610f\u5473\u7740\u5f53\u6709 I/O \u4e8b\u4ef6\u51c6\u5907\u597d\u65f6\uff0c\u5185\u6838\u4f1a\u4e3b\u52a8\u901a\u77e5\u5e94\u7528\u7a0b\u5e8f\uff0c\u800c\u4e0d\u9700\u8981\u5e94\u7528\u7a0b\u5e8f\u4e0d\u65ad\u67e5\u8be2\u54ea\u4e9b\u6587\u4ef6\u63cf\u8ff0\u7b26\u51c6\u5907\u597d\u3002\u8fd9\u51cf\u5c11\u4e86\u4e0d\u5fc5\u8981\u7684\u4e0a\u4e0b\u6587\u5207\u6362\uff0c\u63d0\u9ad8\u4e86\u6027\u80fd\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301\u5927\u6570\u91cf\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\uff1aselect \u5728\u5904\u7406\u5927\u91cf\u6587\u4ef6\u63cf\u8ff0\u7b26\u65f6\u6027\u80fd\u4e0b\u964d\u660e\u663e\uff0c\u56e0\u4e3a\u5b83\u4f7f\u7528\u4f4d\u56fe\u7684\u65b9\u5f0f\u6765\u8868\u793a\u6587\u4ef6\u63cf\u8ff0\u7b26\uff0c\u5f53\u6587\u4ef6\u63cf\u8ff0\u7b26\u6570\u91cf\u5f88\u5927\u65f6\uff0c\u9700\u8981\u7ef4\u62a4\u5927\u91cf\u7684\u4f4d\u56fe\uff0c\u800c\u4e14\u4f1a\u6709\u5f88\u591a\u65e0\u6548\u7684\u67e5\u8be2\u3002epoll \u548c kqueue \u4f7f\u7528\u57fa\u4e8e\u4e8b\u4ef6\u7684\u673a\u5236\uff0c\u4e0d\u4f1a\u53d7\u5230\u6587\u4ef6\u63cf\u8ff0\u7b26\u6570\u91cf\u7684\u9650\u5236\uff0c\u56e0\u6b64\u9002\u7528\u4e8e\u9ad8\u5e76\u53d1\u573a\u666f\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u66f4\u5c11\u7684\u7cfb\u7edf\u8c03\u7528\uff1aselect \u9700\u8981\u9891\u7e41\u8c03\u7528\u7cfb\u7edf\u8c03\u7528\u6765\u67e5\u8be2\u6587\u4ef6\u63cf\u8ff0\u7b26\u7684\u72b6\u6001\uff0c\u8fd9\u589e\u52a0\u4e86\u7cfb\u7edf\u8c03\u7528\u7684\u5f00\u9500\u3002epoll \u548c kqueue \u7684\u4e8b\u4ef6\u901a\u77e5\u673a\u5236\u51cf\u5c11\u4e86\u4e0d\u5fc5\u8981\u7684\u7cfb\u7edf\u8c03\u7528\uff0c\u4ece\u800c\u63d0\u9ad8\u4e86\u6027\u80fd\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301\u8fb9\u6cbf\u89e6\u53d1\uff08Edge-Triggered\uff09\uff1aepoll \u548c kqueue \u652f\u6301\u8fb9\u6cbf\u89e6\u53d1\u6a21\u5f0f\uff0c\u8fd9\u610f\u5473\u7740\u53ea\u6709\u5728\u6587\u4ef6\u63cf\u8ff0\u7b26\u72b6\u6001\u53d1\u751f\u53d8\u5316\u65f6\u624d\u4f1a\u89e6\u53d1\u4e8b\u4ef6\u901a\u77e5\uff0c\u800c\u4e0d\u662f\u5728\u6570\u636e\u53ef\u8bfb\u6216\u53ef\u5199\u65f6\u90fd\u4f1a\u89e6\u53d1\u3002\u8fd9\u4f7f\u5f97\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u66f4\u7cbe\u786e\u5730\u63a7\u5236\u4e8b\u4ef6\u5904\u7406\uff0c\u51cf\u5c11\u4e86\u4e0d\u5fc5\u8981\u7684\u5904\u7406\u5f00\u9500\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u66f4\u7075\u6d3b\u7684\u4e8b\u4ef6\u7ba1\u7406\uff1aepoll \u548c kqueue \u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u4e3a\u6bcf\u4e2a\u6587\u4ef6\u63cf\u8ff0\u7b26\u8bbe\u7f6e\u4e0d\u540c\u7684\u4e8b\u4ef6\u7c7b\u578b\uff0c\u800c select \u4e2d\u6240\u6709\u6587\u4ef6\u63cf\u8ff0\u7b26\u53ea\u80fd\u76d1\u89c6\u76f8\u540c\u7c7b\u578b\u7684\u4e8b\u4ef6\u3002\u8fd9\u4f7f\u5f97 epoll \u548c kqueue \u66f4\u7075\u6d3b\uff0c\u9002\u7528\u4e8e\u66f4\u591a\u7684\u5e94\u7528\u573a\u666f\u3002")),(0,r.yg)("p",null,"\u603b\u7684\u6765\u8bf4\uff0cepoll \u548c kqueue \u5728\u9ad8\u5e76\u53d1 I/O \u573a\u666f\u4e2d\u8868\u73b0\u66f4\u51fa\u8272\uff0c\u63d0\u4f9b\u66f4\u9ad8\u7684\u6027\u80fd\u548c\u66f4\u597d\u7684\u53ef\u6269\u5c55\u6027\uff0c\u56e0\u6b64\u88ab\u8ba4\u4e3a\u6bd4 select \u9ad8\u7ea7\u3002\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cepoll \u9002\u7528\u4e8e Linux \u7cfb\u7edf\uff0c\u800c kqueue \u9002\u7528\u4e8e BSD \u7cfb\u7edf\uff08\u5982 macOS \u548c FreeBSD\uff09\uff0c\u56e0\u6b64\u9009\u62e9\u54ea\u79cd\u53d6\u51b3\u4e8e\u5e94\u7528\u7a0b\u5e8f\u7684\u90e8\u7f72\u73af\u5883\u3002"))}y.isMDXComponent=!0}}]);