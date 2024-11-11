"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2243],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,g=u["".concat(i,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},56466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={},l=void 0,c={unversionedId:"study/devops/jar\u8fd0\u7ef4-\u76d1\u63a7",id:"study/devops/jar\u8fd0\u7ef4-\u76d1\u63a7",title:"jar\u8fd0\u7ef4-\u76d1\u63a7",description:"jstat",source:"@site/docs/study/devops/jar\u8fd0\u7ef4-\u76d1\u63a7.md",sourceDirName:"study/devops",slug:"/study/devops/jar\u8fd0\u7ef4-\u76d1\u63a7",permalink:"/docs/study/devops/jar\u8fd0\u7ef4-\u76d1\u63a7",draft:!1,tags:[],version:"current",lastUpdatedAt:1731330337,formattedLastUpdatedAt:"2024\u5e7411\u670811\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"centos-jdk17-app",permalink:"/docs/study/devops/centos-jdk17-app"},next:{title:"ssh",permalink:"/docs/study/devops/ssh"}},i={},p=[{value:"jstat",id:"jstat",level:3},{value:"about",id:"about",level:4},{value:"options",id:"options",level:4},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"jstat"},"jstat"),(0,a.yg)("h4",{id:"about"},"about"),(0,a.yg)("p",null,"jstat ","[Options]"," pid ","[interval][count]","\npid\uff0c\u5f53\u524d\u8fd0\u884c\u7684 java\u8fdb\u7a0b\u53f7 "),(0,a.yg)("p",null,"interval\uff0c\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\u6216\u8005\u6beb\u79d2 "),(0,a.yg)("p",null,"count\uff0c\u6253\u5370\u6b21\u6570\uff0c\u5982\u679c\u7f3a\u7701\u5219\u6253\u5370\u65e0\u6570\u6b21"),(0,a.yg)("h4",{id:"options"},"options"),(0,a.yg)("p",null,"l  class (\u7c7b\u52a0\u8f7d\u5668)\nl  compiler (JIT)\nl  gc (GC\u5806\u72b6\u6001)\nl  gccapacity (\u5404\u533a\u5927\u5c0f)\nl  gccause (\u6700\u8fd1\u4e00\u6b21GC\u7edf\u8ba1\u548c\u539f\u56e0)\nl  gcnew (\u65b0\u533a\u7edf\u8ba1)\nl  gcnewcapacity (\u65b0\u533a\u5927\u5c0f)\nl  gcold (\u8001\u533a\u7edf\u8ba1)\nl  gcoldcapacity (\u8001\u533a\u5927\u5c0f)\nl  gcpermcapacity (\u6c38\u4e45\u533a\u5927\u5c0f)\nl  gcutil (GC\u7edf\u8ba1\u6c47\u603b)\nl  printcompilation (HotSpot\u7f16\u8bd1\u7edf\u8ba1)"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"#\njstat -gcutil 22573 5000\n")),(0,a.yg)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"https://blog.csdn.net/zhaozheng7758/article/details/8623549"},"jstat\u547d\u4ee4\u8be6\u89e3"))))}d.isMDXComponent=!0}}]);