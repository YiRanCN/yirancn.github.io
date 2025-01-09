"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7055],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,d=m["".concat(u,".").concat(s)]||m[s]||y[s]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},89346:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const l={},o=void 0,i={unversionedId:"study/back/mq/MQTT broker",id:"study/back/mq/MQTT broker",title:"MQTT broker",description:"EMQ EMQX",source:"@site/docs/study/back/mq/MQTT broker.md",sourceDirName:"study/back/mq",slug:"/study/back/mq/MQTT broker",permalink:"/docs/study/back/mq/MQTT broker",draft:!1,tags:[],version:"current",lastUpdatedAt:1736407756,formattedLastUpdatedAt:"2025\u5e741\u67089\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Kafka",permalink:"/docs/study/back/mq/Kafka"},next:{title:"MQ\u5b9e\u73b0\u5bf9\u6bd4",permalink:"/docs/study/back/mq/MQ\u5b9e\u73b0\u5bf9\u6bd4"}},u={},p=[{value:"EMQ EMQX",id:"emq-emqx",level:3},{value:"BifroMQ",id:"bifromq",level:3},{value:"FluxMQ",id:"fluxmq",level:3},{value:"TBMQ",id:"tbmq",level:3},{value:"Eclipse Mosquitto",id:"eclipse-mosquitto",level:3},{value:"Moquette",id:"moquette",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3}],c={toc:p},m="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"emq-emqx"},"EMQ EMQX"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"https://www.emqx.io/cn/"},"\u5b98\u7f51")),(0,a.yg)("li",{parentName:"ol"},"\u5f00\u53d1\u8bed\u8a00\uff1aErlang/OTP\uff0c\u4e00\u4e2a\u4e0d\u5e38\u89c1\u7684\u8bed\u8a00\uff1b"),(0,a.yg)("li",{parentName:"ol"},"\u56fd\u4eba\u5f00\u53d1\uff1b\u53c8\u79f0 emqttd\uff1b"),(0,a.yg)("li",{parentName:"ol"},"\u5f00\u6e90&\u5546\u4e1a\u5316 MQTT \u9f3b\u7956")),(0,a.yg)("h3",{id:"bifromq"},"BifroMQ"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u767e\u5ea6\u5f00\u6e90\u7684\u4e00\u6b3e MQTT \u4ea7\u54c1"),(0,a.yg)("li",{parentName:"ul"},"\u5f00\u53d1\u8bed\u8a00\uff1aJDK17 Maven3.5+"),(0,a.yg)("li",{parentName:"ul"},"\u5f00\u6e90")),(0,a.yg)("h3",{id:"fluxmq"},"FluxMQ"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u53f7\u79f0\u6027\u80fd\u9886\u5148 99%\u7684\u4e00\u6b3e\u5546\u4e1a\u5316 MQTT \u4ea7\u54c1"),(0,a.yg)("li",{parentName:"ul"},"\u5f00\u53d1\u8bed\u8a00\uff1aJDK8+"),(0,a.yg)("li",{parentName:"ul"},"\u95ed\u6e90"),(0,a.yg)("li",{parentName:"ul"},"\u5b98\u7f51 ",(0,a.yg)("a",{parentName:"li",href:"https://www.fluxmq.com/"},"https://www.fluxmq.com/"))),(0,a.yg)("h3",{id:"tbmq"},"TBMQ"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Thingsboard \u5f00\u6e90\u7684\u2f00\u6b3e MQTT \u4ea7\u54c1"),(0,a.yg)("li",{parentName:"ul"},"\u5f00\u53d1\u8bed\u8a00\uff1aJDK17 Maven3.5+"),(0,a.yg)("li",{parentName:"ul"},"\u5f00\u6e90")),(0,a.yg)("h3",{id:"eclipse-mosquitto"},"Eclipse Mosquitto"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"https://mosquitto.org"},"\u5b98\u7f51")),(0,a.yg)("li",{parentName:"ol"},"\u5f00\u53d1\u8bed\u8a00\uff1aC/C++")),(0,a.yg)("h3",{id:"moquette"},"Moquette"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/moquette-io/moquette"},"\u5b98\u7f51")),(0,a.yg)("li",{parentName:"ol"},"\u5f00\u53d1\u8bed\u8a00\uff1aJava"),(0,a.yg)("li",{parentName:"ol"},"\u636e\u5927\u4f6c\u8bf4\u8fd9\u5c31\u662f\u4e00\u4e2a\u73a9\u5177\u9879\u76ee\uff0c\u4f46\u662f\u57fa\u4e8e Java \u5f00\u6e90\u7684\u5e76\u4e0d\u591a\uff0c\u4e14\u7f51\u4e0a\u5f88\u591a\u662f\u57fa\u4e8e\u4ed6\u5f00\u53d1\u51fa\u6765\u7684\uff1b"),(0,a.yg)("li",{parentName:"ol"},"0.10 \u652f\u6301\u96c6\u7fa4\uff1b0.12 \u4e0d\u652f\u6301\u96c6\u7fa4\uff1b")),(0,a.yg)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"))}y.isMDXComponent=!0}}]);