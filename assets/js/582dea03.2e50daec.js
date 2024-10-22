"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5979],{5680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>m});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(n),y=i,m=d["".concat(u,".").concat(y)]||d[y]||p[y]||o;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=y;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(8168),i=(n(6540),n(5680));const o={},s="Linux\u8fd0\u7ef4-\u81ea\u542f",a={unversionedId:"study/devops/Linux\u8fd0\u7ef4-\u81ea\u542f",id:"study/devops/Linux\u8fd0\u7ef4-\u81ea\u542f",title:"Linux\u8fd0\u7ef4-\u81ea\u542f",description:"systemd\u548cinit\u662fLinux\u7cfb\u7edf\u4e2d\u7528\u4e8e\u542f\u52a8\u548c\u7ba1\u7406\u7cfb\u7edf\u7684\u4e24\u4e2a\u4e0d\u540c\u5de5\u5177\u3002",source:"@site/docs/study/devops/Linux\u8fd0\u7ef4-\u81ea\u542f.md",sourceDirName:"study/devops",slug:"/study/devops/Linux\u8fd0\u7ef4-\u81ea\u542f",permalink:"/docs/study/devops/Linux\u8fd0\u7ef4-\u81ea\u542f",draft:!1,tags:[],version:"current",lastUpdatedAt:1729585121,formattedLastUpdatedAt:"2024\u5e7410\u670822\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Linux\u8fd0\u7ef4-\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6",permalink:"/docs/study/devops/Linux\u8fd0\u7ef4-\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6"},next:{title:"Linux\u8fd0\u7ef4-\u9ad8\u5e76\u53d1",permalink:"/docs/study/devops/Linux\u8fd0\u7ef4-\u9ad8\u5e76\u53d1"}},u={},c=[{value:"init",id:"init",level:3},{value:"systemd",id:"systemd",level:3},{value:"Docker systemd",id:"docker-systemd",level:3}],l={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"linux\u8fd0\u7ef4-\u81ea\u542f"},"Linux\u8fd0\u7ef4-\u81ea\u542f"),(0,i.yg)("p",null,"systemd\u548cinit\u662fLinux\u7cfb\u7edf\u4e2d\u7528\u4e8e\u542f\u52a8\u548c\u7ba1\u7406\u7cfb\u7edf\u7684\u4e24\u4e2a\u4e0d\u540c\u5de5\u5177\u3002"),(0,i.yg)("h3",{id:"init"},"init"),(0,i.yg)("p",null,"\u5b83\u662fLinux\u5185\u6838\u542f\u52a8\u540e\u7684\u7b2c\u4e00\u4e2a\u7528\u6237\u8fdb\u7a0b\uff0c\u7528\u4e8e\u521d\u59cb\u5316\u548c\u7ba1\u7406\u7cfb\u7edf\u670d\u52a1\u548c\u5b88\u62a4\u8fdb\u7a0b\u3002init\u4f7f\u7528service\u547d\u4ee4\u6765\u7ba1\u7406\u670d\u52a1\uff0c\u5982\u542f\u52a8\u3001\u505c\u6b62\u548c\u91cd\u542f\u670d\u52a1\u3002init\u7684\u4e3b\u8981\u7f3a\u70b9\u662f\u542f\u52a8\u65f6\u95f4\u957f\uff0c\u56e0\u4e3a\u5b83\u5728\u542f\u52a8\u8fc7\u7a0b\u4e2d\u662f\u4e32\u884c\u7684\uff0c\u8fd9\u610f\u5473\u7740\u5fc5\u987b\u4f9d\u6b21\u542f\u52a8\u6bcf\u4e2a\u670d\u52a1\u3002\u6b64\u5916\uff0cinit\u7684\u914d\u7f6e\u811a\u672c\u8f83\u4e3a\u590d\u6742\uff0c\u9700\u8981\u81ea\u884c\u5904\u7406\u5404\u79cd\u60c5\u51b5\uff0c\u8fd9\u53ef\u80fd\u5bfc\u81f4\u811a\u672c\u53d8\u5f97\u5f88\u957f\u3002"),(0,i.yg)("h3",{id:"systemd"},"systemd"),(0,i.yg)("p",null,"\u5b83\u662f\u8f83\u65b0\u7684Linux\u7cfb\u7edf\u5b88\u62a4\u8fdb\u7a0b\u7ba1\u7406\u5de5\u5177\uff0c\u5728CentOS 7\u53ca\u66f4\u9ad8\u7248\u672c\u4e2d\uff0csystemd\u53d6\u4ee3\u4e86init\u4f5c\u4e3a\u7cfb\u7edf\u7684\u9ed8\u8ba4\u8fdb\u7a0b\u7ba1\u7406\u5668\u3002systemd\u63d0\u4f9b\u4e86\u5e76\u884c\u542f\u52a8\u670d\u52a1\u7684\u80fd\u529b\uff0c\u4f7f\u7528socket\u548cD-Bus\u6fc0\u6d3b\u673a\u5236\uff0c\u8fd9\u663e\u8457\u63d0\u9ad8\u4e86\u7cfb\u7edf\u7684\u542f\u52a8\u901f\u5ea6\u3002systemd\u8fd8\u652f\u6301SysV\u548cLSB\u521d\u59cb\u5316\u811a\u672c\uff0c\u5e76\u80fd\u591f\u7ba1\u7406\u7cfb\u7edf\u7684\u5404\u9879\u529f\u80fd\uff0c\u5982\u65e5\u5fd7\u8bb0\u5f55\u3001\u7f51\u7edc\u914d\u7f6e\u3001\u7535\u6e90\u7ba1\u7406\u7b49\u3002systemd\u7684\u6838\u5fc3\u6982\u5ff5\u5305\u62ec\u57fa\u4e8e\u4f9d\u8d56\u5173\u7cfb\u7684\u670d\u52a1\u63a7\u5236\u548c\u7edf\u4e00\u4efb\u52a1\u5b9a\u4e49\uff0c\u8fd9\u4f7f\u5f97\u7ba1\u7406\u66f4\u52a0\u9ad8\u6548\u548c\u7b80\u5316\u3002"),(0,i.yg)("h3",{id:"docker-systemd"},"Docker systemd"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://blog.csdn.net/qq_46207024/article/details/134006150"},"Docker\u670d\u52a1systemd\u914d\u7f6e\u6587\u4ef6\u8be6\u89e3")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/633832183"},"\u914d\u7f6e Docker \u7684 cgroup driver \u4e3a systemd"))))}p.isMDXComponent=!0}}]);