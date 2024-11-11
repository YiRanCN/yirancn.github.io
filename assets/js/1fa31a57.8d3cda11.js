"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4152],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>k});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,k=p["".concat(i,".").concat(f)]||p[f]||s[f]||o;return t?n.createElement(k,c(c({ref:r},u),{},{components:t})):n.createElement(k,c({ref:r},u))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var d={};for(var i in r)hasOwnProperty.call(r,i)&&(d[i]=r[i]);d.originalType=e,d[p]="string"==typeof e?e:a,c[1]=d;for(var l=2;l<o;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},37954:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=t(58168),a=(t(96540),t(15680));const o={},c=void 0,d={unversionedId:"study/docker/docker-kafka",id:"study/docker/docker-kafka",title:"docker-kafka",description:"docker kafka",source:"@site/docs/study/docker/docker-kafka.md",sourceDirName:"study/docker",slug:"/study/docker/docker-kafka",permalink:"/docs/study/docker/docker-kafka",draft:!1,tags:[],version:"current",lastUpdatedAt:1731330337,formattedLastUpdatedAt:"2024\u5e7411\u670811\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Docker\u7684\u4f7f\u7528\u603b\u7ed3",permalink:"/docs/study/docker/Docker\u7684\u4f7f\u7528\u603b\u7ed3"},next:{title:"docker-linux",permalink:"/docs/study/docker/docker-linux"}},i={},l=[{value:"docker kafka",id:"docker-kafka",level:3}],u={toc:l},p="wrapper";function s(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"docker-kafka"},"docker kafka"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"#\ndocker pull apache/kafka:3.7.0\n#\ndocker run -d \\\n-p 9092:9092 \\\n--privileged=true \\\n-e TZ=Asia/Shanghai \\\n--name kafka-study \\\napache/kafka:3.7.0\n")))}s.isMDXComponent=!0}}]);