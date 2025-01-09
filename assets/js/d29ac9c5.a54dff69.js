"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1648],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,f=s["".concat(i,".").concat(m)]||s[m]||y[m]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53879:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const o={},c=void 0,l={unversionedId:"study/back/mq/RocketMQ",id:"study/back/mq/RocketMQ",title:"RocketMQ",description:"RocketMQ \u548c Kafka \u6709\u4ec0\u4e48\u533a\u522b\uff1f",source:"@site/docs/study/back/mq/RocketMQ.md",sourceDirName:"study/back/mq",slug:"/study/back/mq/RocketMQ",permalink:"/docs/study/back/mq/RocketMQ",draft:!1,tags:[],version:"current",lastUpdatedAt:1736407756,formattedLastUpdatedAt:"2025\u5e741\u67089\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"MQ\u5b9e\u73b0\u5bf9\u6bd4",permalink:"/docs/study/back/mq/MQ\u5b9e\u73b0\u5bf9\u6bd4"},next:{title:"@Configuration",permalink:"/docs/study/back/spring/@Configuration"}},i={},p=[{value:"RocketMQ \u548c Kafka \u6709\u4ec0\u4e48\u533a\u522b\uff1f",id:"rocketmq-\u548c-kafka-\u6709\u4ec0\u4e48\u533a\u522b",level:3},{value:"\u4e3a\u4ec0\u4e48\u963f\u91cc\u4f1a\u81ea\u7814RocketMQ\uff1f",id:"\u4e3a\u4ec0\u4e48\u963f\u91cc\u4f1a\u81ea\u7814rocketmq",level:3}],u={toc:p},s="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(s,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"rocketmq-\u548c-kafka-\u6709\u4ec0\u4e48\u533a\u522b"},"RocketMQ \u548c Kafka \u6709\u4ec0\u4e48\u533a\u522b\uff1f"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u9002\u7528\u573a\u666f"),"\uff1aKafka\u9002\u5408\u65e5\u5fd7\u5904\u7406\uff1bRocketMQ\u9002\u5408\u4e1a\u52a1\u5904\u7406\u3002 "),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u6027\u80fd"),"\uff1aKafka\u5355\u673a\u5199\u5165TPS\u53f7\u79f0\u5728\u767e\u4e07\u6761/\u79d2\uff1bRocketMQ\u5927\u7ea6\u572810\u4e07\u6761/\u79d2\u3002Kafka\u5355\u673a\u6027\u80fd\u66f4\u9ad8\u3002 "),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u53ef\u9760\u6027"),"\uff1aRocketMQ\u652f\u6301\u5f02\u6b65/\u540c\u6b65\u5237\u76d8;\u5f02\u6b65/\u540c\u6b65Replication\uff1bKafka\u4f7f\u7528\u5f02\u6b65\u5237\u76d8\u65b9\u5f0f\uff0c\u5f02\u6b65Replication\u3002RocketMQ\u6240\u652f\u6301\u7684\u540c\u6b65\u65b9\u5f0f\u63d0\u5347\u4e86\u6570\u636e\u7684\u53ef\u9760\u6027\u3002 "),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u5b9e\u65f6\u6027"),"\uff1a\u5747\u652f\u6301pull\u957f\u8f6e\u8be2\uff0cRocketMQ\u6d88\u606f\u5b9e\u65f6\u6027\u66f4\u597d "),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u652f\u6301\u7684\u961f\u5217\u6570"),"\uff1aKafka\u5355\u673a\u8d85\u8fc764\u4e2a\u961f\u5217/\u5206\u533a\uff0c\u6d88\u606f\u53d1\u9001\u6027\u80fd\u964d\u4f4e\u4e25\u91cd\uff1bRocketMQ\u5355\u673a\u652f\u6301\u6700\u9ad85\u4e07\u4e2a\u961f\u5217\uff0c\u6027\u80fd\u7a33\u5b9a\uff08\u8fd9\u4e5f\u662f\u9002\u5408\u4e1a\u52a1\u5904\u7406\u7684\u539f\u56e0\u4e4b\u4e00\uff09")),(0,a.yg)("h3",{id:"\u4e3a\u4ec0\u4e48\u963f\u91cc\u4f1a\u81ea\u7814rocketmq"},"\u4e3a\u4ec0\u4e48\u963f\u91cc\u4f1a\u81ea\u7814RocketMQ\uff1f"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Kafka\u7684\u4e1a\u52a1\u5e94\u7528\u573a\u666f\u4e3b\u8981\u5b9a\u4f4d\u4e8e\u65e5\u5fd7\u4f20\u8f93\uff1b\u5bf9\u4e8e\u590d\u6742\u4e1a\u52a1\u652f\u6301\u4e0d\u591f "),(0,a.yg)("li",{parentName:"ol"},"\u963f\u91cc\u5f88\u591a\u4e1a\u52a1\u573a\u666f\u5bf9\u6570\u636e\u53ef\u9760\u6027\u3001\u6570\u636e\u5b9e\u65f6\u6027\u3001\u6d88\u606f\u961f\u5217\u7684\u4e2a\u6570\u7b49\u65b9\u9762\u7684\u8981\u6c42\u5f88\u9ad8 "),(0,a.yg)("li",{parentName:"ol"},"\u5f53\u4e1a\u52a1\u6210\u957f\u5230\u4e00\u5b9a\u89c4\u6a21\uff0c\u91c7\u7528\u5f00\u6e90\u65b9\u6848\u7684\u6280\u672f\u6210\u672c\u4f1a\u53d8\u9ad8\uff08\u5f00\u6e90\u65b9\u6848\u65e0\u6cd5\u6ee1\u8db3\u4e1a\u52a1\u7684\u9700\u8981\uff1b\u65e7\u7248\u672c\u3001\u81ea\u5f00\u53d1\u4ee3\u7801\u4e0e\u65b0\u7248\u672c\u7684\u517c\u5bb9\u7b49\uff09 "),(0,a.yg)("li",{parentName:"ol"},"\u963f\u91cc\u5728\u56e2\u961f\u3001\u6210\u672c\u3001\u8d44\u6e90\u6295\u5165\u7b49\u65b9\u9762\u7ea6\u675f\u6027\u6761\u4ef6\u51e0\u4e4e\u6ca1\u6709")))}y.isMDXComponent=!0}}]);