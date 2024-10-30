"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5074],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),y=o,d=s["".concat(c,".").concat(y)]||s[y]||f[y]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3970:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(8168),o=(r(6540),r(5680));const a={},i=void 0,l={unversionedId:"study/think/\u5206\u5e03\u5f0f\u4e00\u81f4\u6027\u7b97\u6cd5",id:"study/think/\u5206\u5e03\u5f0f\u4e00\u81f4\u6027\u7b97\u6cd5",title:"\u5206\u5e03\u5f0f\u4e00\u81f4\u6027\u7b97\u6cd5",description:"Raft",source:"@site/docs/study/think/\u5206\u5e03\u5f0f\u4e00\u81f4\u6027\u7b97\u6cd5.md",sourceDirName:"study/think",slug:"/study/think/\u5206\u5e03\u5f0f\u4e00\u81f4\u6027\u7b97\u6cd5",permalink:"/docs/study/think/\u5206\u5e03\u5f0f\u4e00\u81f4\u6027\u7b97\u6cd5",draft:!1,tags:[],version:"current",lastUpdatedAt:1730268988,formattedLastUpdatedAt:"2024\u5e7410\u670830\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"\u4ee3\u7801\u5ba1\u67e5\u95ee\u9898\u624b\u518c",permalink:"/docs/study/think/\u4ee3\u7801\u8bc4\u5ba1/\u4ee3\u7801\u5ba1\u67e5\u95ee\u9898\u624b\u518c"},next:{title:"\u5b9e\u65f6\u8ba1\u7b97Storm+Flink",permalink:"/docs/study/think/\u5b9e\u65f6\u8ba1\u7b97Storm+Flink"}},c={},u=[{value:"Raft",id:"raft",level:3},{value:"Paxos",id:"paxos",level:3}],p={toc:u},s="wrapper";function f(e){let{components:t,...r}=e;return(0,o.yg)(s,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"raft"},"Raft"),(0,o.yg)("p",null,"Raft \u7b97\u6cd5\u6709\u660e\u786e\u7684\u9886\u5bfc\u8005\u9009\u4e3e\u673a\u5236\u3002\u5f53\u8ddf\u968f\u8005\u4e00\u6bb5\u65f6\u95f4\u6ca1\u6709\u6536\u5230\u9886\u5bfc\u8005\u7684\u5fc3\u8df3\u6d88\u606f\u65f6\uff0c\u5c31\u4f1a\u89e6\u53d1\u9009\u4e3e\u8fc7\u7a0b\u3002\u8282\u70b9\u4ece\u8ddf\u968f\u8005\u72b6\u6001\u8f6c\u6362\u4e3a\u5019\u9009\u4eba\u72b6\u6001\uff0c\u5411\u5176\u4ed6\u8282\u70b9\u53d1\u9001\u8bf7\u6c42\u6295\u7968\u6d88\u606f\u6765\u7ade\u4e89\u9886\u5bfc\u8005\u89d2\u8272\u3002"),(0,o.yg)("p",null,"\u53ea\u6709\u83b7\u5f97\u591a\u6570\u8282\u70b9\u6295\u7968\u7684\u5019\u9009\u4eba\u624d\u4f1a\u6210\u4e3a\u9886\u5bfc\u8005\uff0c\u5e76\u4e14\u9886\u5bfc\u8005\u5728\u96c6\u7fa4\u4e2d\u627f\u62c5\u4e3b\u8981\u7684\u534f\u8c03\u548c\u7ba1\u7406\u5de5\u4f5c\uff0c\u5982\u63a5\u6536\u5ba2\u6237\u7aef\u8bf7\u6c42\u3001\u590d\u5236\u65e5\u5fd7\u5230\u8ddf\u968f\u8005\u7b49\u3002\u8fd9\u79cd\u660e\u786e\u7684\u9009\u4e3e\u8fc7\u7a0b\u4f7f\u5f97\u96c6\u7fa4\u5728\u9886\u5bfc\u8005\u51fa\u73b0\u6545\u969c\u65f6\u80fd\u591f\u5feb\u901f\u9009\u51fa\u65b0\u7684\u9886\u5bfc\u8005\uff0c\u4fdd\u8bc1\u7cfb\u7edf\u7684\u53ef\u7528\u6027\u3002"),(0,o.yg)("p",null,"\u601d\u60f3\u3001\u5b9e\u73b0\u4e0a\u662f\u6bd4\u8f83\u7b80\u5355\uff0c\u5bb9\u6613\u7406\u89e3\u7684\u3002"),(0,o.yg)("h3",{id:"paxos"},"Paxos"),(0,o.yg)("p",null,"Paxos \u7b97\u6cd5\u6ca1\u6709\u50cf Raft \u7b97\u6cd5\u90a3\u6837\u660e\u786e\u7684\u9886\u5bfc\u8005\u9009\u4e3e\u9636\u6bb5\u3002\u5728 Paxos \u4e2d\uff0c\u63d0\u8bae\u8005\u548c\u63a5\u53d7\u8005\u7684\u89d2\u8272\u76f8\u5bf9\u5e73\u7b49\uff0c\u901a\u8fc7\u4e00\u7cfb\u5217\u7684\u6d88\u606f\u4ea4\u4e92\u6765\u8fbe\u6210\u5171\u8bc6\u3002\u867d\u7136\u5728\u67d0\u4e9b\u5b9e\u73b0\u4e2d\u53ef\u80fd\u4f1a\u6709\u4e00\u4e2a\u4e8b\u5b9e\u4e0a\u7684 \u201c\u9886\u5bfc\u8005\u201d \u89d2\u8272\uff08\u4f8b\u5982\u7ecf\u5e38\u6210\u529f\u63d0\u51fa\u63d0\u8bae\u7684\u63d0\u8bae\u8005\uff09\uff0c\u4f46\u8fd9\u4e2a\u89d2\u8272\u4e0d\u662f\u901a\u8fc7\u50cf Raft \u90a3\u6837\u660e\u786e\u7684\u9009\u4e3e\u673a\u5236\u4ea7\u751f\u7684\u3002"),(0,o.yg)("p",null,"\u4f8b\u5982\uff0c\u5728 Paxos \u7684 Prepare \u9636\u6bb5\uff0c\u63d0\u8bae\u8005\u7ade\u4e89\u6210\u4e3a\u63d0\u51fa\u6709\u6548\u63d0\u8bae\u7684\u8282\u70b9\uff0c\u4f46\u8fd9\u79cd\u7ade\u4e89\u4e0d\u50cf Raft \u9009\u4e3e\u90a3\u6837\u6709\u4e00\u4e2a\u660e\u786e\u7684\u3001\u9488\u5bf9\u9886\u5bfc\u8005\u89d2\u8272\u7684\u9009\u4e3e\u8fc7\u7a0b\u3002"),(0,o.yg)("p",null,"\u601d\u60f3\u3001\u5b9e\u73b0\u4e0a\u76f8\u5bf9\u4e8eRaft\u662f\u6bd4\u8f83\u590d\u6742\u548c\u96be\u4ee5\u7406\u89e3\u7684\u3002"))}f.isMDXComponent=!0}}]);