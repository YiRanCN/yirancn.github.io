"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9033],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>y});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",O={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(t),g=a,y=s["".concat(l,".").concat(g)]||s[g]||O[g]||i;return t?n.createElement(y,o(o({ref:r},u),{},{components:t})):n.createElement(y,o({ref:r},u))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6001:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>O,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=t(8168),a=(t(6540),t(5680));const i={},o="Spring AOP",p={unversionedId:"study/back/spring/SpringAOP",id:"study/back/spring/SpringAOP",title:"Spring AOP",description:"\u7b80\u4ecb",source:"@site/docs/study/back/spring/SpringAOP.md",sourceDirName:"study/back/spring",slug:"/study/back/spring/SpringAOP",permalink:"/docs/study/back/spring/SpringAOP",draft:!1,tags:[],version:"current",lastUpdatedAt:1709283407,formattedLastUpdatedAt:"2024\u5e743\u67081\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"@Resource@Autowired",permalink:"/docs/study/back/spring/@Resource@Autowired"},next:{title:"Spring Boot",permalink:"/docs/study/back/spring/SpringBoot"}},l={},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"AOP \u7684\u5b58\u5728\u4ef7\u503c",id:"aop-\u7684\u5b58\u5728\u4ef7\u503c",level:3},{value:"AOP \u7684\u5206\u7c7b",id:"aop-\u7684\u5206\u7c7b",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3}],u={toc:c},s="wrapper";function O(e){let{components:r,...t}=e;return(0,a.yg)(s,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"spring-aop"},"Spring AOP"),(0,a.yg)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.yg)("p",null,"AOP\uff08Aspect-Oriented Programming\uff0c\u9762\u5411\u5207\u9762\u7f16\u7a0b\uff09\u662f\u4e00\u79cd\u7f16\u7a0b\u8303\u5f0f\uff0c\u65e8\u5728\u5c06\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u5404\u79cd\u529f\u80fd\u5206\u79bb\u51fa\u6765\uff0c\u4ee5\u63d0\u9ad8\u4ee3\u7801\u7684\u53ef\u91cd\u7528\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002AOP \u901a\u8fc7\u5c06\u4ea4\u53c9\u4e1a\u52a1\u903b\u8f91\u5c01\u88c5\u5230\u5207\u9762\u4e2d\uff0c\u53ef\u4ee5\u5728\u4e0d\u4fee\u6539\u539f\u6709\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\u5bf9\u5176\u8fdb\u884c\u6269\u5c55\u548c\u7ef4\u62a4\u3002"),(0,a.yg)("h3",{id:"aop-\u7684\u5b58\u5728\u4ef7\u503c"},"AOP \u7684\u5b58\u5728\u4ef7\u503c"),(0,a.yg)("p",null,"\u5728\u4f20\u7edf OOP \u7f16\u7a0b\u91cc\u4ee5\u5bf9\u8c61\u4e3a\u6838\u5fc3\uff0c\u6574\u4e2a\u8f6f\u4ef6\u7cfb\u7edf\u7531\u7cfb\u5217\u76f8\u4e92\u4f9d\u8d56\u7684\u5bf9\u8c61\u6240\u7ec4\u6210\uff0c\u800c\u8fd9\u4e9b\u5bf9\u8c61\u5c06\u88ab\u62bd\u8c61\u6210\u4e00\u4e2a\u4e00\u4e2a\u7684\u7c7b\uff0c\u5e76\u5141\u8bb8\u4f7f\u7528\u7c7b\u7ee7\u627f\u6765\u7ba1\u7406\u7c7b\u4e0e\u7c7b\u4e4b\u95f4\u4e00\u822c\u5230\u7279\u6b8a\u7684\u5173\u7cfb\u3002\u968f\u7740\u8f6f\u4ef6\u89c4\u6a21\u7684\u589e\u5927\uff0c\u5e94\u7528\u7684\u9010\u6e10\u5347\u7ea7\uff0c\u6162\u6162\u51fa\u73b0\u4e86\u4e00\u4e9b OOP \u5f88\u96be\u89e3\u51b3\u7684\u95ee\u9898\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u4ee3\u7801\u590d\u7528\u6027\u5dee"),"\uff1a\u7531\u4e8e\u9762\u5411\u5bf9\u8c61\u7684\u8bbe\u8ba1\u601d\u60f3\uff0c\u5bfc\u81f4\u4ee3\u7801\u590d\u7528\u6027\u5dee\u3002\u6bd4\u5982\uff0c\u5728\u4e24\u4e2a\u7c7b\u4e2d\uff0c\u6709\u5f88\u591a\u76f8\u4f3c\u7684\u4ee3\u7801\uff0c\u5982\u679c\u4f7f\u7528 OOP \u601d\u60f3\uff0c\u9700\u8981\u5c06\u76f8\u4f3c\u7684\u4ee3\u7801\u590d\u5236\u5230\u4e24\u4e2a\u7c7b\u4e2d\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u4ee3\u7801\u7684\u91cd\u590d\u6027\u5f88\u9ad8\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u4ee3\u7801\u53ef\u7ef4\u62a4\u6027\u5dee"),"\uff1a\u7531\u4e8e OOP \u601d\u60f3\u5c06\u4ee3\u7801\u5c01\u88c5\u5230\u7c7b\u4e2d\uff0c\u5bfc\u81f4\u4ee3\u7801\u7684\u53ef\u7ef4\u62a4\u6027\u5dee\u3002\u5982\u679c\u9700\u8981\u4fee\u6539\u67d0\u4e2a\u529f\u80fd\uff0c\u9700\u8981\u4fee\u6539\u6574\u4e2a\u7c7b\u7684\u4ee3\u7801\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u4ee3\u7801\u7684\u7ef4\u62a4\u6027\u5f88\u4f4e\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u4ee3\u7801\u53ef\u6269\u5c55\u6027\u5dee"),"\uff1a\u7531\u4e8e OOP \u601d\u60f3\u5c06\u4ee3\u7801\u5c01\u88c5\u5230\u7c7b\u4e2d\uff0c\u5bfc\u81f4\u4ee3\u7801\u7684\u53ef\u6269\u5c55\u6027\u5dee\u3002\u5982\u679c\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u529f\u80fd\uff0c\u9700\u8981\u4fee\u6539\u6574\u4e2a\u7c7b\u7684\u4ee3\u7801\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u4ee3\u7801\u7684\u6269\u5c55\u6027\u5f88\u4f4e\u3002")),(0,a.yg)("p",null,"AOP \u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u800c\u51fa\u73b0\u7684\u3002AOP \u53ef\u4ee5\u5c06\u4ea4\u53c9\u4e1a\u52a1\u903b\u8f91\u5c01\u88c5\u5230\u5207\u9762\u4e2d\uff0c\u5728\u8fd0\u884c\u65f6\u5c06\u5207\u9762\u4e0e\u4e1a\u52a1\u903b\u8f91\u7f16\u7ec7\u5728\u4e00\u8d77\uff0c\u4ece\u800c\u5b9e\u73b0\u4ee3\u7801\u7684\u590d\u7528\u3001\u53ef\u7ef4\u62a4\u6027\u548c\u53ef\u6269\u5c55\u6027\u3002"),(0,a.yg)("h3",{id:"aop-\u7684\u5206\u7c7b"},"AOP \u7684\u5206\u7c7b"),(0,a.yg)("p",null,"AOP \u5b9e\u73b0\u7684\u5173\u952e\u5c31\u5728\u4e8e AOP \u6846\u67b6\u81ea\u52a8\u521b\u5efa\u7684 AOP \u4ee3\u7406\uff0cAOP \u4ee3\u7406\u4e3b\u8981\u5206\u4e3a\u9759\u6001\u4ee3\u7406\u548c\u52a8\u6001\u4ee3\u7406\u4e24\u5927\u7c7b\uff0c\u9759\u6001\u4ee3\u7406\u4ee5 AspectJ \u4e3a\u4ee3\u8868\uff1b\u800c\u52a8\u6001\u4ee3\u7406\u5219\u4ee5 Spring AOP \u4e3a\u4ee3\u8868\u3002"),(0,a.yg)("p",null,"\u5176\u4e2d\u9759\u6001\u4ee3\u7406\u662f\u6307\u4f7f\u7528 AOP \u6846\u67b6\u63d0\u4f9b\u7684\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1\uff0c\u4ece\u800c\u5728\u7f16\u8bd1\u9636\u6bb5\u5c31\u53ef\u751f\u6210 AOP \u4ee3\u7406\u7c7b\uff0c\u56e0\u6b64\u4e5f\u79f0\u4e3a\u7f16\u8bd1\u65f6\u589e\u5f3a\uff1b\u800c\u52a8\u6001\u4ee3\u7406\u5219\u5728\u8fd0\u884c\u65f6\u501f\u52a9\u4e8e JDK \u52a8\u6001\u4ee3\u7406\u3001CGLIB \u7b49\u5728\u5185\u5b58\u4e2d\u201c\u4e34\u65f6\u201d\u751f\u6210 AOP \u52a8\u6001\u4ee3\u7406\u7c7b\uff0c\u56e0\u6b64\u4e5f\u88ab\u79f0\u4e3a\u8fd0\u884c\u65f6\u589e\u5f3a\u3002"),(0,a.yg)("p",null,"Spring AOP \u65e2\u652f\u6301\u9759\u6001\u4ee3\u7406\u4e5f\u652f\u6301\u52a8\u6001\u4ee3\u7406\u3002"),(0,a.yg)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.yg)("p",null,"AOP \u5e7f\u6cdb\u5e94\u7528\u4e8e\u5904\u7406\u4e00\u4e9b\u5177\u6709\u6a2a\u5207\u6027\u8d28\u7684\u7cfb\u7edf\u7ea7\u670d\u52a1\uff0cAOP \u7684\u51fa\u73b0\u662f\u5bf9 OOP \u7684\u826f\u597d\u8865\u5145\uff0c\u5b83\u4f7f\u5f97\u5f00\u53d1\u8005\u80fd\u7528\u66f4\u4f18\u96c5\u7684\u65b9\u5f0f\u5904\u7406\u5177\u6709\u6a2a\u5207\u6027\u8d28\u7684\u670d\u52a1\u3002\u4e0d\u7ba1\u662f\u90a3\u79cd AOP \u5b9e\u73b0\uff0c\u4e0d\u8bba\u662f AspectJ\u3001\u8fd8\u662f Spring AOP\uff0c\u5b83\u4eec\u90fd\u9700\u8981\u52a8\u6001\u5730\u751f\u6210\u4e00\u4e2a AOP \u4ee3\u7406\u7c7b\uff0c\u533a\u522b\u53ea\u662f\u751f\u6210 AOP \u4ee3\u7406\u7c7b\u7684\u65f6\u673a\u4e0d\u540c\uff1aAspectJ \u91c7\u7528\u7f16\u8bd1\u65f6\u751f\u6210 AOP \u4ee3\u7406\u7c7b\uff0c\u56e0\u6b64\u5177\u6709\u66f4\u597d\u7684\u6027\u80fd\uff0c\u4f46\u9700\u8981\u4f7f\u7528\u7279\u5b9a\u7684\u7f16\u8bd1\u5668\u8fdb\u884c\u5904\u7406\uff1b\u800c Spring AOP \u5219\u91c7\u7528\u8fd0\u884c\u65f6\u751f\u6210 AOP \u4ee3\u7406\u7c7b\uff0c\u56e0\u6b64\u65e0\u9700\u4f7f\u7528\u7279\u5b9a\u7f16\u8bd1\u5668\u8fdb\u884c\u5904\u7406\u3002\u7531\u4e8e Spring AOP \u9700\u8981\u5728\u6bcf\u6b21\u8fd0\u884c\u65f6\u751f\u6210 AOP \u4ee3\u7406\uff0c\u56e0\u6b64\u6027\u80fd\u7565\u5dee\u4e00\u4e9b\u3002"))}O.isMDXComponent=!0}}]);