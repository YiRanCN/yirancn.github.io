"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4761],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=i(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||y[d]||c;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,s=new Array(c);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var i=2;i<c;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>c,metadata:()=>a,toc:()=>i});var r=n(8168),o=(n(6540),n(5680));const c={},s=void 0,a={unversionedId:"study/devops/Linux\u8fd0\u7ef4-\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6",id:"study/devops/Linux\u8fd0\u7ef4-\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6",title:"Linux\u8fd0\u7ef4-\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6",description:"/etc/sysctl.conf",source:"@site/docs/study/devops/Linux\u8fd0\u7ef4-\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6.md",sourceDirName:"study/devops",slug:"/study/devops/Linux\u8fd0\u7ef4-\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6",permalink:"/docs/study/devops/Linux\u8fd0\u7ef4-\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6",draft:!1,tags:[],version:"current",lastUpdatedAt:1729585121,formattedLastUpdatedAt:"2024\u5e7410\u670822\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Linux\u8fd0\u7ef4-\u76d1\u63a7\u6570\u636e",permalink:"/docs/study/devops/Linux\u8fd0\u7ef4-\u76d1\u63a7\u6570\u636e"},next:{title:"Linux\u8fd0\u7ef4-\u81ea\u542f",permalink:"/docs/study/devops/Linux\u8fd0\u7ef4-\u81ea\u542f"}},l={},i=[{value:"/etc/sysctl.conf",id:"etcsysctlconf",level:3}],u={toc:i},p="wrapper";function y(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"etcsysctlconf"},"/etc/sysctl.conf"),(0,o.yg)("p",null,"/etc/sysctl.conf\u662f\u4e00\u4e2a\u91cd\u8981\u7684 Linux \u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6\u3002"),(0,o.yg)("p",null,"\u8fd9\u4e2a\u6587\u4ef6\u7528\u4e8e\u8bbe\u7f6e\u548c\u8c03\u6574 Linux \u5185\u6838\u7684\u5404\u79cd\u53c2\u6570\u3002\u8fd9\u4e9b\u53c2\u6570\u63a7\u5236\u7740\u7cfb\u7edf\u7684\u884c\u4e3a\u3001\u6027\u80fd\u548c\u8d44\u6e90\u5206\u914d\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# \u4fee\u6539\nvi /etc/sysctl.conf\n# \u4fee\u6539\u5b8c\u6587\u4ef6\u4e4b\u540e\uff0c\u6267\u884c\u6b64\u547d\u4ee4\uff0c\u7acb\u5373\u751f\u6548\nsysctl -p\n# \u67e5\u8be2\nsysctl -a\n# \u4e34\u65f6\u4fee\u6539\uff0c\u5e76\u6ca1\u6709\u843d\u76d8\u5230/etc/sysctl.conf\u6587\u4ef6\uff0c\u91cd\u542f\u540e\u5931\u6548\nsysctl -w xxxxx=yyy\n")),(0,o.yg)("p",null,"\u5e38\u7528\u7684\u5185\u6838\u53c2\u6570"))}y.isMDXComponent=!0}}]);