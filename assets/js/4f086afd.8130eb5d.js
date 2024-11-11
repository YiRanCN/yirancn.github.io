"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5452],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(96540);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),d=l,f=s["".concat(u,".").concat(d)]||s[d]||y[d]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30035:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(58168),l=(r(96540),r(15680));const a={},o=void 0,i={unversionedId:"study/net/VLAN-VXLAN",id:"study/net/VLAN-VXLAN",title:"VLAN-VXLAN",description:"VLAN",source:"@site/docs/study/net/VLAN-VXLAN.md",sourceDirName:"study/net",slug:"/study/net/VLAN-VXLAN",permalink:"/docs/study/net/VLAN-VXLAN",draft:!1,tags:[],version:"current",lastUpdatedAt:1731330337,formattedLastUpdatedAt:"2024\u5e7411\u670811\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"UDP",permalink:"/docs/study/net/UDP"},next:{title:"Linux ip \u547d\u4ee4",permalink:"/docs/study/net/ip"}},u={},c=[{value:"VLAN",id:"vlan",level:3},{value:"VXLAN",id:"vxlan",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}],p={toc:c},s="wrapper";function y(e){let{components:t,...r}=e;return(0,l.yg)(s,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h3",{id:"vlan"},"VLAN"),(0,l.yg)("p",null,"VLAN(Virtual LAN)\uff0c\u7ffb\u8bd1\u6210\u4e2d\u6587\u662f\u201c\u865a\u62df\u5c40\u57df\u7f51\u201d\u3002LAN\u53ef\u4ee5\u662f\u7531\u5c11\u6570\u51e0\u53f0\u5bb6\u7528\u8ba1\u7b97\u673a\u6784\u6210\u7684\u7f51\u7edc\uff0c\u4e5f\u53ef\u4ee5\u662f\u6570\u4ee5\u767e\u8ba1\u7684\u8ba1\u7b97\u673a\u6784\u6210\u7684\u4f01\u4e1a\u7f51\u7edc\u3002VLAN\u6240\u6307\u7684LAN\u7279\u6307\u4f7f\u7528\u8def\u7531\u5668\u5206\u5272\u7684\u7f51\u7edc(\u4e5f\u5c31\u662f\u5e7f\u64ad\u57df)\u3002\u5176\u5b9e\u5c31\u662f\u5728\u7269\u7406\u5c40\u57df\u7f51\u7684\u57fa\u7840\u4e0a\u518d\u5212\u5206\u51fa\u591a\u4e2a\u865a\u62df\u5c40\u57df\u7f51\u3002"),(0,l.yg)("p",null,"VLAN\u4f5c\u4e3a\u4f20\u7edf\u7684\u7f51\u7edc\u9694\u79bb\u6280\u672f\uff0c\u5728\u6807\u51c6\u5b9a\u4e49\u4e2dVLAN\u7684\u6570\u91cf\u53ea\u67094000\u4e2a\u5de6\u53f3(VLAN ID\u7684\u53d6\u503c\u8303\u56f4\u53ea\u652f\u63011-4094)\uff0c\u65e0\u6cd5\u6ee1\u8db3\u5927\u578b\u6570\u636e\u4e2d\u5fc3\u7684\u79df\u6237\u95f4\u9694\u79bb\u9700\u6c42\u3002\u53e6\u5916\uff0cVLAN\u7684\u4e8c\u5c42\u8303\u56f4\u4e00\u822c\u8f83\u5c0f\u4e14\u56fa\u5b9a\uff0c\u65e0\u6cd5\u652f\u6301\u865a\u62df\u673a\u5927\u8303\u56f4\u7684\u52a8\u6001\u8fc1\u79fb."),(0,l.yg)("h3",{id:"vxlan"},"VXLAN"),(0,l.yg)("p",null,"VXLAN\uff08Virtual eXtensible Local Area Network\uff0c\u865a\u62df\u6269\u5c55\u5c40\u57df\u7f51\uff09\uff0c\u662f\u7531IETF\u5b9a\u4e49\u7684NVO3\uff08Network Virtualization over Layer 3\uff09\u6807\u51c6\u6280\u672f\u4e4b\u4e00\uff0c\u662f\u5bf9\u4f20\u7edfVLAN\u534f\u8bae\u7684\u4e00\u79cd\u6269\u5c55\u3002VXLAN\u7684\u7279\u70b9\u662f\u5c06L2\u7684\u4ee5\u592a\u5e27\u5c01\u88c5\u5230UDP\u6d88\u606f\uff08\u5373L2 over L4\uff09\u4e2d\uff0c\u5e76\u5728L3\u7f51\u7edc\u4e2d\u4f20\u8f93\u3002\u662foverlay\u7f51\u7edc\u7684\u5b9e\u73b0\u6280\u672f\u4e4b\u4e00\u3002"),(0,l.yg)("p",null,"vxlan\u89e3\u51b3\u4e86\u4ec0\u4e48\u5173\u952e\u95ee\u9898"),(0,l.yg)("p",null,"\u865a\u62df\u5316\u670d\u52a1\u5668\u52a8\u6001\u8fc1\u79fb"),(0,l.yg)("p",null,"\u670d\u52a1\u5668\u4ece\u8be5\u4e8c\u5c42\u4ea4\u6362\u673a\u7684\u4e00\u4e2a\u7aef\u53e3\u8fc1\u79fb\u5230\u53e6\u4e00\u4e2a\u7aef\u53e3\u65f6\uff0cIP\u5730\u5740\u662f\u53ef\u4ee5\u4fdd\u6301\u4e0d\u53d8\u7684\uff0cVXLAN\u5229\u7528\u6b64\u8bbe\u8ba1\u7406\u5ff5\uff0c\u5728\u6570\u636e\u4e2d\u5fc3IP\u7f51\u7edc\u57fa\u7840\u4e0a\uff0c\u6784\u5efa\u4e00\u5f20\u5168\u4e92\u8054\u7684\u4e8c\u5c42\u96a7\u9053\u865a\u62df\u7f51\u7edc\uff0c\u4fdd\u8bc1\u4efb\u610f\u4e24\u70b9\u4e4b\u95f4\u90fd\u80fd\u901a\u8fc7VXLAN\u96a7\u9053\u6765\u901a\u4fe1\uff0c\u5e76\u5ffd\u7565\u5e95\u5c42\u7f51\u7edc\u7684\u7ed3\u6784\u548c\u7ec6\u8282\uff0cVXLAN\u4e3a\u5b83\u4eec\u5c06\u6574\u4e2a\u6570\u636e\u4e2d\u5fc3\u57fa\u7840\u7f51\u7edc\u865a\u62df\u6210\u4e86\u4e00\u53f0\u5de8\u5927\u7684\u201c\u4e8c\u5c42\u4ea4\u6362\u673a\uff08\u5927\u4e8c\u5c42\uff09\u201d\uff0c\u6240\u6709\u670d\u52a1\u5668\u90fd\u8fde\u63a5\u5728\u8fd9\u53f0\u865a\u62df\u4e8c\u5c42\u4ea4\u6362\u673a\u4e0a\u3002"),(0,l.yg)("p",null,"\u5927\u89c4\u6a21\u6570\u636e\u4e2d\u5fc3\uff0c\u6d77\u91cf\u79df\u6237\u9694\u79bb\u80fd\u529b"),(0,l.yg)("p",null,"\u5728\u6807\u51c6\u5b9a\u4e49\u4e2dVLAN\u7684\u6570\u91cf\u53ea\u67094000\u4e2a\u5de6\u53f3\uff0c\u65e0\u6cd5\u6ee1\u8db3\u5927\u578b\u6570\u636e\u4e2d\u5fc3\u7684\u79df\u6237\u95f4\u9694\u79bb\u9700\u6c42\u3002 VXLAN\u5b8c\u7f8e\u5730\u5f25\u8865\u4e86VLAN\u7684\u4e0a\u8ff0\u4e0d\u8db3\uff0c\u4e00\u65b9\u9762\u901a\u8fc7VXLAN\u4e2d\u768424\u6bd4\u7279VNI\u5b57\u6bb5\u3002\u63d0\u4f9b\u591a\u8fbe16M\u79df\u6237\u7684\u6807\u8bc6\u80fd\u529b"),(0,l.yg)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://blog.csdn.net/ecloud_developer/article/details/120526041"},"csdn-vlan\u548cvxlan"))))}y.isMDXComponent=!0}}]);