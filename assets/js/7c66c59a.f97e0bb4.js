"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5599],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(6540);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),i=p(r),y=s,g=i["".concat(c,".").concat(y)]||i[y]||d[y]||a;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[i]="string"==typeof e?e:s,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7366:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(8168),s=(r(6540),r(5680));const a={},o="ssh",l={unversionedId:"study/devops/ssh",id:"study/devops/ssh",title:"ssh",description:"ssh\u8fde\u63a5\u4e0d\u4e0a",source:"@site/docs/study/devops/ssh.md",sourceDirName:"study/devops",slug:"/study/devops/ssh",permalink:"/docs/study/devops/ssh",draft:!1,tags:[],version:"current",lastUpdatedAt:1710914815,formattedLastUpdatedAt:"2024\u5e743\u670820\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"jar\u8fd0\u7ef4-\u76d1\u63a7",permalink:"/docs/study/devops/jar\u8fd0\u7ef4-\u76d1\u63a7"},next:{title:"\u94fe\u8def\u8ffd\u8e2a\u76d1\u63a7",permalink:"/docs/study/devops/\u94fe\u8def\u8ffd\u8e2a\u76d1\u63a7"}},c={},p=[{value:"ssh\u8fde\u63a5\u4e0d\u4e0a",id:"ssh\u8fde\u63a5\u4e0d\u4e0a",level:3}],u={toc:p},i="wrapper";function d(e){let{components:t,...r}=e;return(0,s.yg)(i,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"ssh"},"ssh"),(0,s.yg)("h3",{id:"ssh\u8fde\u63a5\u4e0d\u4e0a"},"ssh\u8fde\u63a5\u4e0d\u4e0a"),(0,s.yg)("p",null,"\u73b0\u573a\u63cf\u8ff0\uff1a"),(0,s.yg)("p",null,"\u4f7f\u7528ssh ",(0,s.yg)("a",{parentName:"p",href:"mailto:ccsp@10.0.120.44"},"ccsp@10.0.120.44")," \u547d\u4ee4\u540e\uff0c\u8fc7\u4e86\u5f88\u4e45\u624d\u8fd4\u56de"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},"Connection closed by 10.0.120.44 port 22\n")),(0,s.yg)("p",null,"\u6709\u7684\u670d\u52a1\u5668\u662f\u53ef\u4ee5\uff0c\u5f53\u65f6\u8fde\u63a5\u4e0d\u4e0a\u7684\u8fd9\u4e2a\u670d\u52a1\u5668\u662fUbuntu\uff0c10.0.120.44\u6240\u5728\u64cd\u4f5c\u7cfb\u7edf\u662f\u6b27\u62c9\u3002"),(0,s.yg)("p",null,"\u89e3\u51b3\u65b9\u6848\uff1a"),(0,s.yg)("p",null,"\u6211\u4e00\u5ea6\u6000\u7591\u662fssh\u7684\u95ee\u9898\uff0c\u56e0\u4e3a\u6709\u7684\u670d\u52a1\u5668\u80fd\u591f\u6b63\u5e38\u7684\u8fde\u63a5\uff0c\u800c\u4e14\u7528\u81ea\u5df1\u7684windows\u5ba2\u6237\u7aef\u90fd\u662f\u53ef\u4ee5\u6b63\u5e38\u8fde\u63a5\u7684\u3002"),(0,s.yg)("p",null,"\u4f7f\u7528\u547d\u4ee4 "),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},"ssh -v  ccsp@10.0.120.44\n")),(0,s.yg)("p",null,"\u8f93\u51fa\u6253\u5370\u65e5\u5fd7\uff0c\u53d1\u73b0\u4e86\u4e00\u70b9\u8e2a\u8ff9\uff0c"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},"debug1: Unspecified GSS failure.  Minor code may provide more information\nNo Kerberos credentials available (default cache: FILE:/tmp/krb5cc_994)\n")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},(0,s.yg)("em",{parentName:"strong"},"\u89e3\u51b3\u65b9\u6848"))),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},"ssh -v -o GSSAPIAuthentication=no ccsp@10.0.120.44\n")),(0,s.yg)("p",null,"\u589e\u52a0\u53c2\u6570 \u7981\u7528GSSAPIAuthentication"),(0,s.yg)("p",null,"\u539f\u56e0\u662fclient\u548cserver\u7684ssh\u7248\u672c\u662f\u4e0d\u4e00\u81f4\u7684\uff0cclient\u7684\u7248\u672c\u6709\u70b9\u4f4e\u3002"))}d.isMDXComponent=!0}}]);