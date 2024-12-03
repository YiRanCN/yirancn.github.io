"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8194],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>g});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},y=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,g=u["".concat(p,".").concat(d)]||u[d]||s[d]||a;return n?r.createElement(g,l(l({ref:t},y),{},{components:n})):r.createElement(g,l({ref:t},y))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(58168),i=(n(96540),n(15680));const a={},l=void 0,o={unversionedId:"study/db/NewSQL/TiDB",id:"study/db/NewSQL/TiDB",title:"TiDB",description:"\u80cc\u666f",source:"@site/docs/study/db/NewSQL/TiDB.md",sourceDirName:"study/db/NewSQL",slug:"/study/db/NewSQL/TiDB",permalink:"/docs/study/db/NewSQL/TiDB",draft:!1,tags:[],version:"current",lastUpdatedAt:1733196184,formattedLastUpdatedAt:"2024\u5e7412\u67083\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"\u7efc\u5408",permalink:"/docs/study/db/\u7efc\u5408"},next:{title:"Cassandra",permalink:"/docs/study/db/NoSQL/Cassandra"}},p={},c=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:3},{value:"\u66ff\u6362 MySQL Sharding(\u5206\u7247) \u4f5c\u4e3a\u4e3b\u751f\u4ea7\u6570\u636e\u5e93",id:"\u66ff\u6362-mysql-sharding\u5206\u7247-\u4f5c\u4e3a\u4e3b\u751f\u4ea7\u6570\u636e\u5e93",level:4},{value:"\u66ff\u6362 HBase/C*/ES \u7b49 NoSQL \u6570\u636e\u5e93",id:"\u66ff\u6362-hbaseces-\u7b49-nosql-\u6570\u636e\u5e93",level:4},{value:"\u4f7f\u7528 TiDB \u4f5c\u4e3a HTAP \u6570\u636e\u5e93\uff08\u5b9e\u65f6\u4e8b\u52a1+\u5b9e\u65f6\u5206\u6790\uff09",id:"\u4f7f\u7528-tidb-\u4f5c\u4e3a-htap-\u6570\u636e\u5e93\u5b9e\u65f6\u4e8b\u52a1\u5b9e\u65f6\u5206\u6790",level:4},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u76ee\u524d\u72b6\u51b5(V3.0)",id:"\u76ee\u524d\u72b6\u51b5v30",level:3}],y={toc:c},u="wrapper";function s(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h3",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,i.yg)("h4",{id:"\u66ff\u6362-mysql-sharding\u5206\u7247-\u4f5c\u4e3a\u4e3b\u751f\u4ea7\u6570\u636e\u5e93"},"\u66ff\u6362 MySQL Sharding(\u5206\u7247) \u4f5c\u4e3a\u4e3b\u751f\u4ea7\u6570\u636e\u5e93"),(0,i.yg)("p",null,"\u8fd9\u4e2a\u573a\u666f\u5176\u5b9e\u662f TiDB \u8bbe\u8ba1\u7684\u521d\u8877\uff0c\u5728\u5355\u673a MySQL \u6570\u636e\u91cf\u592a\u5927\u540e\uff0c\u8fc7\u53bb\u80fd\u9009\u7684\u57fa\u672c\u5c31\u662f\u5206\u5e93\u5206\u8868\uff0c\u518d\u5206\u4e0d\u5f00\u7684\u8bdd\u5c31\u53ea\u80fd Sharding\uff0c\u4f46\u662f\u5206\u5e93\u5206\u8868\u3001Sharding\uff0c\u5176\u5b9e\u4e0d\u7ba1\u662f\u7ef4\u62a4\u6210\u672c\u548c\u5f00\u53d1\u6539\u9020\u6210\u672c\u90fd\u5f88\u9ad8\uff0c\u6240\u4ee5 TiDB \u7ed9\u8fd9\u4e9b\u7528\u6237\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u4ee5\u5f39\u6027\u6269\u5c55\u7684\uff0c\u7528\u8d77\u6765\u5c31\u50cf\u5355\u673a MySQL \u4e00\u6837\u7684\uff0c\u652f\u6301\u4e8b\u52a1\u548c\u590d\u6742\u67e5\u8be2\u7684\u5206\u5e03\u5f0f\u6570\u636e\u5e93\uff0c\u540c\u65f6\u8fd8\u652f\u6301\u591a\u526f\u672c\u81ea\u52a8\u7684\u9ad8\u53ef\u7528\uff0c\u5f53\u7136\u5f88\u723d\u3002"),(0,i.yg)("p",null,"\u8fd9\u90e8\u5206\u7528\u6237\u4e00\u822c\u4e00\u5f00\u59cb\u4e0a\u7ebf\u524d\u90fd\u4f1a\u7528 TiDB \u7684 ",(0,i.yg)("a",{parentName:"p",href:"https://link.zhihu.com/?target=https%3A//github.com/pingcap/docs-cn/blob/master/tools/syncer.md"},"Syncer"),"\uff0c \u5c06 TiDB \u96c6\u7fa4\u4f5c\u4e3a\u7ebf\u4e0a MySQL \u7684\u4ece\u5e93\uff0c\u5b9e\u65f6\u540c\u6b65\u7ebf\u4e0a\u7684 MySQL \u4e3b\u5e93\uff0c\u89c2\u5bdf\u4e00\u6bb5\u65f6\u95f4\u7a33\u5b9a\u6027\u517c\u5bb9\u6027\u3001\u8fdb\u884c\u538b\u529b\u6d4b\u8bd5\u540e\uff0c\u76f4\u63a5\u5c06\u7ebf\u4e0a\u5e93\u6307\u5411 TiDB\uff0c\u4e0d\u7528\u4fee\u6539\u4e00\u884c\u4ee3\u7801\u3002"),(0,i.yg)("h4",{id:"\u66ff\u6362-hbaseces-\u7b49-nosql-\u6570\u636e\u5e93"},"\u66ff\u6362 HBase/C*/ES \u7b49 NoSQL \u6570\u636e\u5e93"),(0,i.yg)("p",null,"\u8fd9\u7c7b\u7528\u6237\u4e3b\u8981\u662f\u8fc7\u53bb\u7528\u7740 NoSQL\uff0c\u5e0c\u671b\u5728\u62e5\u6709\u5f39\u6027\u4f38\u7f29\u80fd\u529b\uff0c\u53ef\u4ee5\u7ebf\u6027\u6269\u5c55\u7684\u5b9e\u65f6\u5e76\u53d1\u5199\u5165\u80fd\u529b\uff0c\u518d\u80fd\u62e5\u6709\u66f4\u5f3a\u5927\u7684\u67e5\u8be2\u80fd\u529b\uff0c\u6bd4\u5982\u4e8c\u7ea7\u7d22\u5f15\u70b9\u67e5\uff0c\u6bd4\u5982\u590d\u6742\u7684 Join \u652f\u6301\u3002\u5178\u578b\u7684\u5e94\u7528\u573a\u666f\u662f\u5ba2\u670d\u67e5\u8be2\uff0cUser profile \u7cfb\u7edf\u7b49\u7b49\u3002\n\u901a\u5e38\u8fd9\u7c7b\u7528\u6237\u7684\u6570\u636e\u91cf\u5de8\u5927\uff0c\u53ef\u80fd\u5355\u5e93\u90fd\u6709\u4e0a\u767e T\uff0cTiDB \u80fd\u5f88\u597d\u7684\u6ee1\u8db3\uff1a"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"\u5927\u6d77\u635e\u9488\u5f0f\u7684\u7cbe\u51c6\u67e5\u8be2"),(0,i.yg)("li",{parentName:"ol"},"Ad-hoc \u5206\u6790")),(0,i.yg)("p",null,"\u8fd9\u4e00\u5207\u90fd\u662f\u5728\u4e0d\u727a\u7272\u5b9e\u65f6\u5199\u5165\u80fd\u529b\u7684\u540c\u65f6\u62e5\u6709\u7684\u3002"),(0,i.yg)("h4",{id:"\u4f7f\u7528-tidb-\u4f5c\u4e3a-htap-\u6570\u636e\u5e93\u5b9e\u65f6\u4e8b\u52a1\u5b9e\u65f6\u5206\u6790"},"\u4f7f\u7528 TiDB \u4f5c\u4e3a HTAP \u6570\u636e\u5e93\uff08\u5b9e\u65f6\u4e8b\u52a1+\u5b9e\u65f6\u5206\u6790\uff09"),(0,i.yg)("p",null,"\u8fd9\u7c7b\u7528\u6237\u662f\u5728\u521a\u5f00\u59cb\u505a TiDB \u7684\u65f6\u5019\u5b8c\u5168\u6ca1\u60f3\u5230\u7684\uff0c\u968f\u7740 TiDB \u7684 SQL \u80fd\u529b\u8d8a\u6765\u8d8a\u5f3a\uff0c\u5e76\u4e14\u968f\u7740 TiDB \u7684\u5b50\u9879\u76ee TiSpark \u7684\u53d1\u5e03\uff0c\u8ba9\u7528\u6237\u5728\u62e5\u6709\u5173\u7cfb\u6570\u636e\u5e93\u7684\u4e8b\u52a1\u5199\u5165\u80fd\u529b\u540c\u65f6\u53ef\u4ee5\u5728\u540c\u4e00\u4efd\u6570\u636e\u4e0a\u8fdb\u884c\u590d\u6742\u7684\u5206\u6790\uff1b\u8fd9\u7c7b\u7528\u6237\u4e00\u822c\u7528 Syncer \u5c06\u6240\u6709\u7ebf\u4e0a\u751f\u4ea7\u6570\u636e\u5e93\u540c\u6b65\u5230\u4e00\u4e2a\u5927\u7684 TiDB \u96c6\u7fa4\u4e0a\uff08Syncer \u652f\u6301\u591a\u6e90\u540c\u6b65\uff0c\u5408\u5e76\u5206\u5e93\u5206\u8868\u7b49\u529f\u80fd\uff09\uff0c\u7136\u540e\u76f4\u63a5\u5728\u8fd9\u4e2a TiDB Cluster \u4e0a\u901a\u8fc7 TiDB \u6216\u8005 TiSpark \u8fdb\u884c\u5206\u6790\u3002"),(0,i.yg)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,i.yg)("p",null,"TiDB \u662f PingCAP \u516c\u53f8\u8bbe\u8ba1\u7684\u5f00\u6e90\u5206\u5e03\u5f0f HTAP (Hybrid Transactional and Analytical Processing) \u6570\u636e\u5e93\uff0c\u7ed3\u5408\u4e86\u4f20\u7edf\u7684 RDBMS \u548c NoSQL \u7684\u6700\u4f73\u7279\u6027\u3002TiDB \u517c\u5bb9 MySQL\uff0c\u652f\u6301\u65e0\u9650\u7684\u6c34\u5e73\u6269\u5c55\uff0c\u5177\u5907\u5f3a\u4e00\u81f4\u6027\u548c\u9ad8\u53ef\u7528\u6027\u3002TiDB \u7684\u76ee\u6807\u662f\u4e3a OLTP (Online Transactional Processing) \u548c OLAP (Online Analytical Processing) \u573a\u666f\u63d0\u4f9b\u4e00\u7ad9\u5f0f\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,i.yg)("p",null,"TiDB \u5177\u5907\u5982\u4e0b\u7279\u6027\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u9ad8\u5ea6\u517c\u5bb9 MySQL\n\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u65e0\u9700\u4fee\u6539\u4ee3\u7801\u5373\u53ef\u4ece MySQL \u8f7b\u677e\u8fc1\u79fb\u81f3 TiDB\uff0c\u5206\u5e93\u5206\u8868\u540e\u7684 MySQL \u96c6\u7fa4\u4ea6\u53ef\u901a\u8fc7 TiDB \u5de5\u5177\u8fdb\u884c\u5b9e\u65f6\u8fc1\u79fb\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u6c34\u5e73\u5f39\u6027\u6269\u5c55\n\u901a\u8fc7\u7b80\u5355\u5730\u589e\u52a0\u65b0\u8282\u70b9\u5373\u53ef\u5b9e\u73b0 TiDB \u7684\u6c34\u5e73\u6269\u5c55\uff0c\u6309\u9700\u6269\u5c55\u541e\u5410\u6216\u5b58\u50a8\uff0c\u8f7b\u677e\u5e94\u5bf9\u9ad8\u5e76\u53d1\u3001\u6d77\u91cf\u6570\u636e\u573a\u666f\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u4e8b\u52a1\nTiDB 100% \u652f\u6301\u6807\u51c6\u7684 ACID \u4e8b\u52a1\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u771f\u6b63\u91d1\u878d\u7ea7\u9ad8\u53ef\u7528\n\u76f8\u6bd4\u4e8e\u4f20\u7edf\u4e3b\u4ece (M-S) \u590d\u5236\u65b9\u6848\uff0c\u57fa\u4e8e Raft \u7684\u591a\u6570\u6d3e\u9009\u4e3e\u534f\u8bae\u53ef\u4ee5\u63d0\u4f9b\u91d1\u878d\u7ea7\u7684 100% \u6570\u636e\u5f3a\u4e00\u81f4\u6027\u4fdd\u8bc1\uff0c\u4e14\u5728\u4e0d\u4e22\u5931\u5927\u591a\u6570\u526f\u672c\u7684\u524d\u63d0\u4e0b\uff0c\u53ef\u4ee5\u5b9e\u73b0\u6545\u969c\u7684\u81ea\u52a8\u6062\u590d (auto-failover)\uff0c\u65e0\u9700\u4eba\u5de5\u4ecb\u5165\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u4e00\u7ad9\u5f0f HTAP \u89e3\u51b3\u65b9\u6848\nTiDB \u4f5c\u4e3a\u5178\u578b\u7684 OLTP \u884c\u5b58\u6570\u636e\u5e93\uff0c\u540c\u65f6\u517c\u5177\u5f3a\u5927\u7684 OLAP \u6027\u80fd\uff0c\u914d\u5408 TiSpark\uff0c\u53ef\u63d0\u4f9b\u4e00\u7ad9\u5f0f HTAP \u89e3\u51b3\u65b9\u6848\uff0c\u4e00\u4efd\u5b58\u50a8\u540c\u65f6\u5904\u7406 OLTP & OLAP\uff0c\u65e0\u9700\u4f20\u7edf\u7e41\u7410\u7684 ETL \u8fc7\u7a0b\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u4e91\u539f\u751f SQL \u6570\u636e\u5e93\nTiDB \u662f\u4e3a\u4e91\u800c\u8bbe\u8ba1\u7684\u6570\u636e\u5e93\uff0c\u652f\u6301\u516c\u6709\u4e91\u3001\u79c1\u6709\u4e91\u548c\u6df7\u5408\u4e91\uff0c\u4f7f\u90e8\u7f72\u3001\u914d\u7f6e\u548c\u7ef4\u62a4\u53d8\u5f97\u5341\u5206\u7b80\u5355\u3002")),(0,i.yg)("p",null,"TiDB \u7684\u8bbe\u8ba1\u76ee\u6807\u662f 100% \u7684 OLTP \u573a\u666f\u548c 80% \u7684 OLAP \u573a\u666f\uff0c\u66f4\u590d\u6742\u7684 OLAP \u5206\u6790\u53ef\u4ee5\u901a\u8fc7 TiSpark \u9879\u76ee\u6765\u5b8c\u6210\u3002"),(0,i.yg)("p",null,"TiDB \u5bf9\u4e1a\u52a1\u6ca1\u6709\u4efb\u4f55\u4fb5\u5165\u6027\uff0c\u80fd\u4f18\u96c5\u7684\u66ff\u6362\u4f20\u7edf\u7684\u6570\u636e\u5e93\u4e2d\u95f4\u4ef6\u3001\u6570\u636e\u5e93\u5206\u5e93\u5206\u8868\u7b49 Sharding \u65b9\u6848\u3002\u540c\u65f6\u5b83\u4e5f\u8ba9\u5f00\u53d1\u8fd0\u7ef4\u4eba\u5458\u4e0d\u7528\u5173\u6ce8\u6570\u636e\u5e93 Scale \u7684\u7ec6\u8282\u95ee\u9898\uff0c\u4e13\u6ce8\u4e8e\u4e1a\u52a1\u5f00\u53d1\uff0c\u6781\u5927\u7684\u63d0\u5347\u7814\u53d1\u7684\u751f\u4ea7\u529b\u3002"),(0,i.yg)("p",null,"\u4e09\u7bc7\u6587\u7ae0\u4e86\u89e3 TiDB \u6280\u672f\u5185\u5e55\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://pingcap.com/blog-cn/tidb-internal-1/"},"\u8bf4\u5b58\u50a8")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://pingcap.com/blog-cn/tidb-internal-2/"},"\u8bf4\u8ba1\u7b97")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://pingcap.com/blog-cn/tidb-internal-3/"},"\u8c08\u8c03\u5ea6"))),(0,i.yg)("h3",{id:"\u76ee\u524d\u72b6\u51b5v30"},"\u76ee\u524d\u72b6\u51b5(V3.0)"),(0,i.yg)("p",null,"TiDB \u76ee\u524d\u8fd8\u4e0d\u652f\u6301\u89e6\u53d1\u5668\u3001\u5b58\u50a8\u8fc7\u7a0b\u3001\u81ea\u5b9a\u4e49\u51fd\u6570\u3001\u5916\u952e\uff0c\u9664\u6b64\u4e4b\u5916\uff0cTiDB \u652f\u6301\u7edd\u5927\u90e8\u5206 MySQL 5.7 \u7684\u8bed\u6cd5\u3002"))}s.isMDXComponent=!0}}]);