"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1005],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},S=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),S=o,b=u["".concat(s,".").concat(S)]||u[S]||d[S]||a;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=S;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}S.displayName="MDXCreateElement"},808:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},l=void 0,i={unversionedId:"study/db/SQL/\u7efc\u5408\u6982\u8ff0",id:"study/db/SQL/\u7efc\u5408\u6982\u8ff0",title:"\u7efc\u5408\u6982\u8ff0",description:"\u80cc\u666f",source:"@site/docs/study/db/SQL/\u7efc\u5408\u6982\u8ff0.md",sourceDirName:"study/db/SQL",slug:"/study/db/SQL/\u7efc\u5408\u6982\u8ff0",permalink:"/docs/study/db/SQL/\u7efc\u5408\u6982\u8ff0",draft:!1,tags:[],version:"current",lastUpdatedAt:1701410582,formattedLastUpdatedAt:"2023\u5e7412\u67081\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"studySidebar",previous:{title:"StarRocks",permalink:"/docs/study/db/OLAP/StarRocks"},next:{title:"MariaDB",permalink:"/docs/study/db/SQL/MariaDB"}},s={},p=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:3},{value:"\u5206\u5e03\u5f0f\u6570\u636e\u5e93",id:"\u5206\u5e03\u5f0f\u6570\u636e\u5e93",level:3},{value:"NoSQL\u7684\u8fdb\u51fb",id:"nosql\u7684\u8fdb\u51fb",level:4},{value:"RDMS \u7684\u6551\u8d4e",id:"rdms-\u7684\u6551\u8d4e",level:4},{value:"\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\u95f4\u4ef6",id:"\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\u95f4\u4ef6",level:3},{value:"NewSQL\u7684\u53d1\u5c55",id:"newsql\u7684\u53d1\u5c55",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,o.kt)("p",null,"\u968f\u7740\u4e92\u8054\u7f51\u7684\u4e0d\u65ad\u666e\u53ca\u7279\u522b\u662f\u79fb\u52a8\u4e92\u8054\u7f51\u7684\u5174\u8d77\uff0c\u6570\u636e\u89c4\u6a21\u7206\u70b8\u5f0f\u589e\u957f\uff0c\u800c\u786c\u4ef6\u8fd9\u4e9b\u5e74\u7684\u8fdb\u6b65\u901f\u5ea6\u5374\u5728\u9010\u6e10\u51cf\u6162\uff0c\u4eba\u4eec\u4e5f\u5728\u62c5\u5fc3\u6469\u5c14\u5b9a\u5f8b\u4f1a\u5931\u6548\u3002\u5728\u6b64\u6d88\u5f7c\u957f\u7684\u60c5\u51b5\u4e0b\uff0c\u5355\u673a\u6570\u636e\u5e93\u8d8a\u6765\u8d8a\u96be\u4ee5\u6ee1\u8db3\u7528\u6237\u9700\u6c42\uff0c\u5373\u4f7f\u662f\u5c06\u6570\u636e\u4fdd\u5b58\u4e0b\u6765\u8fd9\u4e2a\u6700\u57fa\u672c\u7684\u9700\u6c42\u3002"),(0,o.kt)("h3",{id:"\u5206\u5e03\u5f0f\u6570\u636e\u5e93"},"\u5206\u5e03\u5f0f\u6570\u636e\u5e93"),(0,o.kt)("p",null,"\u6240\u4ee5 2005 \u5e74\u5de6\u53f3\uff0c\u4eba\u4eec\u5f00\u59cb\u63a2\u7d22\u5206\u5e03\u5f0f\u6570\u636e\u5e93\uff0c\u5e26\u8d77\u4e86 NoSQL \u8fd9\u6ce2\u6d6a\u6f6e\u3002\u8fd9\u4e9b\u6570\u636e\u5e93\u89e3\u51b3\u7684\u9996\u8981\u95ee\u9898\u662f\u5355\u673a\u4e0a\u65e0\u6cd5\u4fdd\u5b58\u5168\u90e8\u6570\u636e\uff0c\u5176\u4e2d\u4ee5 HBase/Cassadra/MongoDB \u4e3a\u4ee3\u8868\u3002\u4e3a\u4e86\u5b9e\u73b0\u5bb9\u91cf\u7684\u6c34\u5e73\u6269\u5c55\uff0c\u8fd9\u4e9b\u6570\u636e\u5e93\u5f80\u5f80\u8981\u653e\u5f03\u4e8b\u52a1\uff0c\u6216\u8005\u662f\u53ea\u63d0\u4f9b\u7b80\u5355\u7684 KV \u63a5\u53e3\u3002\u5b58\u50a8\u6a21\u578b\u7684\u7b80\u5316\u4e3a\u5b58\u50a8\u7cfb\u7edf\u7684\u5f00\u53d1\u5e26\u6765\u4e86\u4fbf\u5229\uff0c\u4f46\u662f\u964d\u4f4e\u4e86\u5bf9\u4e1a\u52a1\u7684\u652f\u6491\u3002"),(0,o.kt)("h4",{id:"nosql\u7684\u8fdb\u51fb"},"NoSQL\u7684\u8fdb\u51fb"),(0,o.kt)("p",null,"HBase \u662f\u5176\u4e2d\u7684\u5178\u578b\u4ee3\u8868\u3002 HBase \u662f Hadoop \u751f\u6001\u4e2d\u7684\u91cd\u8981\u4ea7\u54c1\uff0cGoogle BigTable \u7684\u5f00\u6e90\u5b9e\u73b0\uff0c\u6240\u4ee5\u8fd9\u91cc\u5148\u8bf4\u4e00\u4e0b BigTable \u3002"),(0,o.kt)("p",null,"BigTable \u662f Google \u5185\u90e8\u4f7f\u7528\u7684\u5206\u5e03\u5f0f\u6570\u636e\u5e93\uff0c\u6784\u5efa\u5728 GFS \u7684\u57fa\u7840\u4e0a\uff0c\u5f25\u8865\u4e86\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u5bf9\u4e8e\u5c0f\u5bf9\u8c61\u7684\u63d2\u5165\u3001\u66f4\u65b0\u3001\u968f\u673a\u8bfb\u8bf7\u6c42\u7684\u7f3a\u9677\u3002HBase \u4e5f\u6309\u7167\u8fd9\u4e2a\u67b6\u6784\u5b9e\u73b0\uff0c\u5e95\u5c42\u57fa\u4e8eHDFS \u3002 HBase \u672c\u8eab\u5e76\u4e0d\u5b9e\u9645\u5b58\u50a8\u6570\u636e\uff0c\u6301\u4e45\u5316\u7684\u65e5\u5fd7\u548c SST file \u5b58\u50a8\u5728 HDFS \u4e0a\uff0cRegion Server \u901a\u8fc7 MemTable \u63d0\u4f9b\u5feb\u901f\u7684\u67e5\u8be2\uff0c\u5199\u5165\u90fd\u662f\u5148\u5199\u65e5\u5fd7\uff0c\u540e\u53f0\u8fdb\u884cCompact \uff0c\u5c06\u968f\u673a\u5199\u8f6c\u6362\u4e3a\u987a\u5e8f\u5199\u3002\u6570\u636e\u901a\u8fc7 Region \u5728\u903b\u8f91\u4e0a\u8fdb\u884c\u5206\u5272\uff0c\u8d1f\u8f7d\u5747\u8861\u901a\u8fc7\u8c03\u8282\u5404\u4e2a Region Server \u8d1f\u8d23\u7684Region\u533a\u95f4\u5b9e\u73b0\uff0cRegion\u5728 \u6301\u7eed\u5199\u5165\u540e\uff0c\u4f1a\u8fdb\u884c\u5206\u88c2\uff0c\u7136\u540e\u88ab\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u8c03\u5ea6\u5230\u591a\u4e2a Region Server \u4e0a\u3002"),(0,o.kt)("p",null,"\u524d\u9762\u63d0\u5230\u4e86\uff0c HBase \u672c\u8eab\u5e76\u4e0d\u5b58\u50a8\u6570\u636e\uff0c\u8fd9\u91cc\u7684 Region \u4ec5\u662f\u903b\u8f91\u4e0a\u7684\u6982\u5ff5\uff0c\u6570\u636e\u8fd8\u662f\u4ee5\u6587\u4ef6\u7684\u5f62\u5f0f\u5b58\u50a8\u5728 HDFS \u4e0a\uff0cHBase \u5e76\u4e0d\u5173\u5fc3\u526f\u672c\u4e2a\u6570\u3001\u4f4d\u7f6e\u4ee5\u53ca\u6c34\u5e73\u6269\u5c55\u95ee\u9898\uff0c\u8fd9\u4e9b\u90fd\u4f9d\u8d56\u4e8e HDFS \u5b9e\u73b0\u3002\u548c BigTable \u4e00\u6837\uff0c HBase \u63d0\u4f9b\u884c\u7ea7\u7684\u4e00\u81f4\u6027\uff0c\u4ece CAP \u7406\u8bba\u7684\u89d2\u5ea6\u6765\u770b\uff0c\u5b83\u662f\u4e00\u4e2a CP \u7684\u7cfb\u7edf\uff0c\u5e76\u4e14\u6ca1\u6709\u66f4\u8fdb\u4e00\u6b65\u63d0\u4f9b ACID \u7684\u8de8\u884c\u4e8b\u52a1\uff0c\u4e5f\u662f\u5f88\u9057\u61be\u3002"),(0,o.kt)("p",null,"HBase \u7684\u4f18\u52bf\u5728\u4e8e\u901a\u8fc7\u6269\u5c55 Region Server \u53ef\u4ee5\u51e0\u4e4e\u7ebf\u6027\u63d0\u5347\u7cfb\u7edf\u7684\u541e\u5410\uff0c\u53ca HDFS \u672c\u8eab\u5c31\u5177\u6709\u7684\u6c34\u5e73\u6269\u5c55\u80fd\u529b\uff0c\u4e14\u6574\u4e2a\u7cfb\u7edf\u6210\u719f\u7a33\u5b9a\u3002\u4f46 HBase \u4f9d\u7136\u6709\u4e00\u4e9b\u4e0d\u8db3\u3002\u9996\u5148\uff0c Hadoop \u4f7f\u7528 Java \u5f00\u53d1\uff0c GC \u5ef6\u8fdf\u662f\u4e00\u4e2a\u65e0\u6cd5\u907f\u514d\u95ee\u9898\uff0c\u8fd9\u5bf9\u7cfb\u7edf\u7684\u5ef6\u8fdf\u9020\u6210\u4e00\u4e9b\u5f71\u54cd\u3002\u53e6\u5916\uff0c\u7531\u4e8eHBase \u672c\u8eab\u5e76\u4e0d\u5b58\u50a8\u6570\u636e\uff0c\u548c HDFS \u4e4b\u95f4\u7684\u4ea4\u4e92\u4f1a\u591a\u4e00\u5c42\u6027\u80fd\u635f\u8017\u3002\u7b2c\u4e09\uff0c HBase \u548cBigTable \u4e00\u6837\uff0c\u5e76\u4e0d\u652f\u6301\u8de8\u884c\u4e8b\u52a1\uff0c\u6240\u4ee5\u5728 Google \u5185\u90e8\u6709\u56e2\u961f\u5f00\u53d1\u4e86 MegaStore \u3001 Percolator \u8fd9\u4e9b\u57fa\u4e8e BigTable \u7684\u4e8b\u52a1\u5c42\u3002 Jeff Dean \u627f\u8ba4\u5f88\u540e\u6094\u6ca1\u6709\u5728 BigTable \u4e2d\u52a0\u5165\u8de8\u884c\u4e8b\u52a1\uff0c\u8fd9\u4e5f\u662f Spanner \u51fa\u73b0\u7684\u4e00\u4e2a\u539f\u56e0\u3002"),(0,o.kt)("h4",{id:"rdms-\u7684\u6551\u8d4e"},"RDMS \u7684\u6551\u8d4e"),(0,o.kt)("p",null,"\u9664\u4e86 NoSQL \u4e4b\u5916\uff0c RDMS \u7cfb\u7edf\u4e5f\u505a\u4e86\u4e0d\u5c11\u52aa\u529b\u6765\u9002\u5e94\u4e1a\u52a1\u7684\u53d8\u5316\uff0c\u4e5f\u5c31\u662f\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684\u4e2d\u95f4\u4ef6\u548c\u5206\u5e93\u5206\u8868\u65b9\u6848\u3002\u505a\u4e00\u6b3e\u4e2d\u95f4\u4ef6\u9700\u8981\u8003\u8651\u5f88\u591a\uff0c\u6bd4\u5982\u89e3\u6790 SQL \uff0c\u89e3\u6790\u51fa ShardKey \uff0c\u7136\u540e\u6839\u636e ShardKey \u5206\u53d1\u8bf7\u6c42\uff0c\u518d\u5408\u5e76\u7ed3\u679c\u3002\u53e6\u5916\u5728\u4e2d\u95f4\u4ef6\u8fd9\u5c42\u8fd8\u9700\u8981\u7ef4\u62a4 Session \u53ca\u4e8b\u52a1\u72b6\u6001\uff0c\u800c\u4e14\u5927\u591a\u6570\u65b9\u6848\u5e76\u4e0d\u652f\u6301\u8de8 shard \u7684\u4e8b\u52a1\uff0c\u8fd9\u5c31\u4e0d\u53ef\u907f\u514d\u5730\u5bfc\u81f4\u4e86\u4e1a\u52a1\u4f7f\u7528\u8d77\u6765\u4f1a\u6bd4\u8f83\u9ebb\u70e6\uff0c\u9700\u8981\u81ea\u5df1\u7ef4\u62a4\u4e8b\u52a1\u72b6\u6001\u3002\u6b64\u5916\uff0c\u8fd8\u6709\u52a8\u6001\u7684\u6269\u5bb9\u7f29\u5bb9\u548c\u81ea\u52a8\u7684\u6545\u969c\u6062\u590d\uff0c\u5728\u96c6\u7fa4\u89c4\u6a21\u8d8a\u6765\u8d8a\u5927\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd0\u7ef4\u548c DDL \u7684\u590d\u6742\u5ea6\u662f\u6307\u6570\u7ea7\u4e0a\u5347\u3002"),(0,o.kt)("p",null,"\u56fd\u5185\u5f00\u53d1\u8005\u5728\u8fd9\u4e2a\u9886\u57df\u6709\u8fc7\u5f88\u591a\u7684\u8457\u540d\u7684\u9879\u76ee\uff0c\u6bd4\u5982\u963f\u91cc\u7684 Cobar \u3001 TDDL \uff0c\u540e\u6765\u793e\u533a\u57fa\u4e8eCobar \u6539\u8fdb\u7684 MyCAT \uff0c 360 \u5f00\u6e90\u7684 Atlas \u7b49\uff0c\u90fd\u5c5e\u4e8e\u8fd9\u4e00\u7c7b\u4e2d\u95f4\u4ef6\u4ea7\u54c1\u3002\u5728\u4e2d\u95f4\u4ef6\u8fd9\u4e2a\u65b9\u6848\u4e0a\u6709\u4e00\u4e2a\u77e5\u540d\u7684\u5f00\u6e90\u9879\u76ee\u662f Youtube \u7684 Vitess \uff0c\u8fd9\u662f\u4e00\u4e2a\u96c6\u5927\u6210\u7684\u4e2d\u95f4\u4ef6\u4ea7\u54c1\uff0c\u5185\u7f6e\u4e86\u70ed\u6570\u636e\u7f13\u5b58\u3001\u6c34\u5e73\u52a8\u6001\u5206\u7247\u3001\u8bfb\u5199\u5206\u79bb\u7b49\uff0c\u4f46\u8fd9\u4e5f\u9020\u6210\u4e86\u6574\u4e2a\u9879\u76ee\u975e\u5e38\u590d\u6742\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\u4e00\u4e2a\u503c\u5f97\u4e00\u63d0\u7684\u662f PostgreSQL XC \u8fd9\u4e2a\u9879\u76ee\uff0c\u5176\u6574\u4f53\u7684\u67b6\u6784\u6709\u70b9\u50cf\u65e9\u671f\u7248\u672c\u7684OceanBase \uff0c\u7531\u4e00\u4e2a\u4e2d\u592e\u8282\u70b9\u6765\u5904\u7406\u534f\u8c03\u5206\u5e03\u5f0f\u4e8b\u52a1\uff0c\u6570\u636e\u5206\u6563\u5728\u5404\u4e2a\u5b58\u50a8\u8282\u70b9\u4e0a\uff0c\u5e94\u8be5\u662f\u76ee\u524d PG \u793e\u533a\u6700\u597d\u7684\u5206\u5e03\u5f0f\u6269\u5c55\u65b9\u6848\uff0c\u4e0d\u5c11\u4eba\u5728\u57fa\u4e8e\u8fd9\u4e2a\u9879\u76ee\u505a\u81ea\u5df1\u7684\u7cfb\u7edf\u3002"),(0,o.kt)("h3",{id:"\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\u95f4\u4ef6"},"\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\u95f4\u4ef6"),(0,o.kt)("p",null,"RDMS\u7684\u6551\u8d4e\u5c31\u662f\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\u95f4\u4ef6\u4ea7\u751f\u7684\u539f\u56e0\u3002"),(0,o.kt)("h3",{id:"newsql\u7684\u53d1\u5c55"},"NewSQL\u7684\u53d1\u5c55"),(0,o.kt)("p",null,"2012 ~ 2013 \u5e74 Google \u76f8\u7ee7\u53d1\u8868\u4e86 Spanner \u548c F1 \u4e24\u5957\u7cfb\u7edf\u7684\u8bba\u6587\uff0c\u8ba9\u4e1a\u754c\u7b2c\u4e00\u6b21\u770b\u5230\u4e86\u5173\u7cfb\u6a21\u578b\u548c NoSQL \u7684\u6269\u5c55\u6027\u5728\u4e00\u4e2a\u5927\u89c4\u6a21\u751f\u4ea7\u7cfb\u7edf\u4e0a\u878d\u5408\u7684\u53ef\u80fd\u6027\u3002 Spanner \u901a\u8fc7\u4f7f\u7528\u786c\u4ef6\u8bbe\u5907\uff08 GPS \u65f6\u949f+\u539f\u5b50\u949f\uff09\u5de7\u5999\u5730\u89e3\u51b3\u65f6\u949f\u540c\u6b65\u7684\u95ee\u9898\uff0c\u800c\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u91cc\uff0c\u65f6\u949f\u6b63\u662f\u6700\u8ba9\u4eba\u5934\u75db\u7684\u95ee\u9898\u3002Spanner \u7684\u5f3a\u5927\u4e4b\u5904\u5728\u4e8e\u5373\u4f7f\u4e24\u4e2a\u6570\u636e\u4e2d\u5fc3\u9694\u5f97\u975e\u5e38\u8fdc\uff0c\u4e5f\u80fd\u4fdd\u8bc1\u901a\u8fc7TrueTime API \u83b7\u53d6\u7684\u65f6\u95f4\u8bef\u5dee\u5728\u4e00\u4e2a\u5f88\u5c0f\u7684\u8303\u56f4\u5185\uff08 10ms \uff09\uff0c\u5e76\u4e14\u4e0d\u9700\u8981\u901a\u8baf\u3002 Spanner \u7684\u5e95\u5c42\u4ecd\u7136\u57fa\u4e8e\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\uff0c\u4e0d\u8fc7\u8bba\u6587\u91cc\u4e5f\u8bf4\u662f\u53ef\u4ee5\u672a\u6765\u4f18\u5316\u7684\u70b9\u3002"),(0,o.kt)("p",null,"Google \u7684\u5185\u90e8\u7684\u6570\u636e\u5e93\u5b58\u50a8\u4e1a\u52a1\uff0c\u5927\u591a\u662f 3 ~ 5 \u526f\u672c\uff0c\u91cd\u8981\u7684\u6570\u636e\u9700\u8981 7 \u526f\u672c\uff0c\u4e14\u8fd9\u4e9b\u526f\u672c\u904d\u5e03\u5168\u7403\u5404\u5927\u6d32\u7684\u6570\u636e\u4e2d\u5fc3\uff0c\u7531\u4e8e\u666e\u904d\u4f7f\u7528\u4e86Paxos \uff0c\u5ef6\u8fdf\u662f\u53ef\u4ee5\u7f29\u77ed\u5230\u4e00\u4e2a\u53ef\u4ee5\u63a5\u53d7\u7684\u8303\u56f4(\u5199\u5165\u5ef6\u8fdf 100 ms\u4ee5\u4e0a)\uff0c\u53e6\u5916\u7531 Paxos \u5e26\u6765\u7684 Auto-Failover \u80fd\u529b\uff0c\u66f4\u662f\u8ba9\u6574\u4e2a\u96c6\u7fa4\u5373\u4f7f\u6570\u636e\u4e2d\u5fc3\u762b\u75ea\uff0c\u4e1a\u52a1\u5c42\u90fd\u662f\u900f\u660e\u65e0\u611f\u77e5\u7684\u3002 F1 \u662f\u6784\u5efa\u5728 Spanner \u4e4b\u4e0a\uff0c\u5bf9\u5916\u63d0\u4f9b\u4e86 SQL \u63a5\u53e3\uff0c F1 \u662f\u4e00\u4e2a\u5206\u5e03\u5f0f MPP SQL \u5c42\uff0c\u5176\u672c\u8eab\u5e76\u4e0d\u5b58\u50a8\u6570\u636e\uff0c\u800c\u662f\u5c06\u5ba2\u6237\u7aef\u7684 SQL \u7ffb\u8bd1\u6210\u5bf9KV \u7684\u64cd\u4f5c\uff0c\u8c03\u7528 Spanner \u6765\u5b8c\u6210\u8bf7\u6c42\u3002"),(0,o.kt)("p",null,"Spanner \u548c F1 \u7684\u51fa\u73b0\u6807\u5fd7\u7740\u7b2c\u4e00\u4e2a NewSQL \u5728\u751f\u4ea7\u73af\u5883\u4e2d\u63d0\u4f9b\u670d\u52a1\uff0c\u5c06\u4e0b\u9762\u51e0\u4e2a\u529f\u80fd\u5728\u4e00\u5957\u7cfb\u7edf\u4e2d\u63d0\u4f9b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"SQL \u652f\u6301"),(0,o.kt)("li",{parentName:"ol"},"ACID \u4e8b\u52a1"),(0,o.kt)("li",{parentName:"ol"},"\u6c34\u5e73\u6269\u5c55"),(0,o.kt)("li",{parentName:"ol"},"Auto Failover"),(0,o.kt)("li",{parentName:"ol"},"\u591a\u673a\u623f\u5f02\u5730\u5bb9\u707e")),(0,o.kt)("p",null,"\u6b63\u56e0\u4e3a\u5177\u5907\u5982\u6b64\u591a\u7684\u8bf1\u4eba\u7279\u6027\uff0c\u5728 Google \u5185\u90e8\uff0c\u5927\u91cf\u7684\u4e1a\u52a1\u5df2\u7ecf\u4ece\u539f\u6765\u7684 BigTable \u5207\u6362\u5230Spanner \u4e4b\u4e0a\u3002\u76f8\u4fe1\u8fd9\u5bf9\u4e1a\u754c\u7684\u601d\u8def\u4f1a\u6709\u5de8\u5927\u7684\u5f71\u54cd\uff0c\u5c31\u50cf\u5f53\u5e74\u7684 Hadoop \u4e00\u6837\uff0c Google \u7684\u57fa\u7840\u8f6f\u4ef6\u7684\u6280\u672f\u8d8b\u52bf\u662f\u8d70\u5728\u793e\u533a\u524d\u9762\u7684\u3002\nSpanner/F1 \u8bba\u6587\u5f15\u8d77\u4e86\u793e\u533a\u7684\u5e7f\u6cdb\u7684\u5173\u6ce8\uff0c\u5f88\u5feb\u5f00\u59cb\u51fa\u73b0\u4e86\u8ffd\u968f\u8005\u3002\u7b2c\u4e00\u4e2a\u56e2\u961f\u662fCockroachLabs \u505a\u7684 CockroachDB \u3002 CockroachDB \u7684\u8bbe\u8ba1\u548c Spanner \u5f88\u50cf\uff0c\u4f46\u662f\u6ca1\u6709\u9009\u62e9 TrueTime API \uff0c\u800c\u662f\u4f7f\u7528 HLC\uff08 Hybrid logical clock \uff09\uff0c\u4e5f\u5c31\u662f NTP +\u903b\u8f91\u65f6\u949f\u6765\u4ee3\u66ff TrueTime \u65f6\u95f4\u6233\uff0c\u53e6\u5916 CockroachDB \u9009\u7528 Raft \u505a\u6570\u636e\u590d\u5236\u534f\u8bae\uff0c\u5e95\u5c42\u5b58\u50a8\u843d\u5730\u5728RocksDB \u4e2d\uff0c\u5bf9\u5916\u7684\u63a5\u53e3\u9009\u62e9\u4e86 PG \u534f\u8bae\u3002"),(0,o.kt)("p",null,"CockroachDB \u7684\u6280\u672f\u9009\u578b\u6bd4\u8f83\u6fc0\u8fdb\uff0c\u6bd4\u5982\u4f9d\u8d56\u4e86 HLC \u6765\u505a\u4e8b\u52a1\uff0c\u65f6\u95f4\u6233\u7684\u7cbe\u786e\u5ea6\u5e76\u6ca1\u6709\u529e\u6cd5\u505a\u5230 10 ms\u5185\u7684\u5ef6\u8fdf\uff0c\u6240\u4ee5 Commit Wait \u9700\u8981\u7528\u6237\u81ea\u5df1\u6307\u5b9a\uff0c\u5176\u9009\u62e9\u53d6\u51b3\u4e8e\u7528\u6237\u7684 NTP \u670d\u52a1\u65f6\u949f\u8bef\u5dee\uff0c\u8fd9\u70b9\u5bf9\u4e8e\u7528\u6237\u6765\u8bf4\u975e\u5e38\u4e0d\u53cb\u597d\u3002\u5f53\u7136 CockroachDB \u7684\u8fd9\u4e9b\u6280\u672f\u9009\u62e9\u4e5f\u5e26\u6765\u4e86\u5f88\u597d\u7684\u6613\u7528\u6027\uff0c\u6240\u6709\u903b\u8f91\u90fd\u5728\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\uff0c\u90e8\u7f72\u975e\u5e38\u7b80\u5355\uff0c\u8fd9\u4e2a\u662f\u975e\u5e38\u5927\u7684\u4f18\u70b9\u3002"))}d.isMDXComponent=!0}}]);