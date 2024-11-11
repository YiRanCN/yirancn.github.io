"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9967],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=i(r),d=o,f=s["".concat(c,".").concat(d)]||s[d]||y[d]||p;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var i=2;i<p;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34557:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>y,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var n=r(58168),o=(r(96540),r(15680));const p={},a="OpenJ9",l={unversionedId:"study/program/JAVA/OepnJ9",id:"study/program/JAVA/OepnJ9",title:"OpenJ9",description:"https://eclipse.dev/openj9/",source:"@site/docs/study/program/JAVA/OepnJ9.md",sourceDirName:"study/program/JAVA",slug:"/study/program/JAVA/OepnJ9",permalink:"/docs/study/program/JAVA/OepnJ9",draft:!1,tags:[],version:"current",lastUpdatedAt:1731330337,formattedLastUpdatedAt:"2024\u5e7411\u670811\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Maven",permalink:"/docs/study/program/JAVA/Maven"},next:{title:"RxJava",permalink:"/docs/study/program/JAVA/RxJava"}},c={},i=[],u={toc:i},s="wrapper";function y(e){let{components:t,...r}=e;return(0,o.yg)(s,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"openj9"},"OpenJ9"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://eclipse.dev/openj9/"},"https://eclipse.dev/openj9/")),(0,o.yg)("p",null,"OpenJ9 \u662f\u539f\u6765\u7684 IBM J9 Java \u865a\u62df\u673a (JVM)\uff0c\u5df2\u8d21\u732e\u7ed9 Eclipse \u57fa\u91d1\u4f1a\u5f00\u6e90\u3002"),(0,o.yg)("p",null,"OpenJ9 \u662f\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684\u4f01\u4e1a\u7ea7 Java \u865a\u62df\u673a\uff0c\u65e8\u5728\u4fc3\u8fdb JVM \u5f00\u53d1\u8005\u7684\u5f00\u653e\u751f\u6001\u7cfb\u7edf\uff0c\u4ece\u800c\u53ef\u4ee5\u4e0e\u786c\u4ef6\u5e73\u53f0\u3001\u64cd\u4f5c\u7cfb\u7edf\u3001\u5de5\u5177\u548c\u6846\u67b6\u8bbe\u8ba1\u5e08\u548c\u5f00\u53d1\u8005\u8fdb\u884c\u534f\u4f5c\u548c\u521b\u65b0\u3002"),(0,o.yg)("p",null,"Java \u793e\u533a\u4ece JVM \u89c4\u8303\u7684\u591a\u4e2a\u5b9e\u73b0\u4e2d\u53d7\u76ca\u532a\u6d45\uff0c\u4e3a\u5176\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u6700\u4f73\u8fd0\u884c\u65f6\u3002\u65e0\u8bba\u662f\u6dfb\u52a0\u538b\u7f29\u5f15\u7528\u3001\u65b0\u7684\u4e91\u529f\u80fd\u3001AOT\uff08\u63d0\u524d\u7f16\u8bd1\uff09\uff0c\u8fd8\u662f\u76f4\u63a5\u63d0\u5347\u6027\u80fd\u548c\u964d\u4f4e\u5185\u5b58\u4f7f\u7528\uff0c\u751f\u6001\u7cfb\u7edf\u901a\u8fc7\u7ade\u4e89\u5f97\u5230\u6539\u5584\u3002 Eclipse OpenJ9 \u65e8\u5728\u7ee7\u7eed\u63a8\u52a8\u8fd0\u884c\u65f6\u7684\u521b\u65b0\u3002"),(0,o.yg)("p",null,"\u6839\u636e\u5b98\u7f51\u6587\u6863\u8bf4\u660e\uff0c\u4ee5 OpenJDK8 \u548c OpenJ9 \u6bd4\u8f83\u8bf4\u660e\u5176\u5e94\u7528\u5c42\u9762\u7684\u7279\u70b9\u3001\u4f18\u52bf\uff1a"),(0,o.yg)("p",null,"42% faster startup time\uff0c\u542f\u52a8\u65f6\u95f4\u5feb 42% 66% smaller footprint after startup\uff0c\u542f\u52a8\u540e\u5360\u7528\u5185\u5b58\u51cf\u5c11 66%"),(0,o.yg)("p",null,"Faster ramp-up time in the cloud\uff0c\u4e91\u7aef\u73af\u5883\u5feb\u901f\u63d0\u5347\u541e\u5410\u91cf "),(0,o.yg)("p",null,"63% smaller footprint during load\uff0c\u9ad8\u8d1f\u8f7d\u65f6\u51cf\u5c11 63%\u7684\u5360\u7528\u7a7a\u95f4"),(0,o.yg)("p",null,"\u6839\u636e cheng jin\uff08OpenJ9  VM Software Developer\uff09\u4ecb\u7ecd\uff0cDDR \u548c SCC \u662f\u5176\u4e0d\u540c\u4e8e HotSpot \u7684 2 \u4e2a\u7279\u70b9\u3002"))}y.isMDXComponent=!0}}]);