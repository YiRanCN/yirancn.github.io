"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2923],{5680:(e,t,r)=>{r.d(t,{xA:()=>y,yg:()=>m});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},y=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,m=c["".concat(u,".").concat(d)]||c[d]||s[d]||l;return r?n.createElement(m,o(o({ref:t},y),{},{components:r})):n.createElement(m,o({ref:t},y))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8263:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(8168),a=(r(6540),r(5680));const l={sidebar_position:2},o=void 0,i={unversionedId:"study/db/\u7efc\u5408",id:"study/db/\u7efc\u5408",title:"\u7efc\u5408",description:"\u8f6f\u4ef6\u7cfb\u7edf\u6839\u636e\u5b58\u50a8\u7ed3\u6784\u7684\u5206\u7c7b",source:"@site/docs/study/db/\u7efc\u5408.md",sourceDirName:"study/db",slug:"/study/db/\u7efc\u5408",permalink:"/docs/study/db/\u7efc\u5408",draft:!1,tags:[],version:"current",lastUpdatedAt:1708262155,formattedLastUpdatedAt:"2024\u5e742\u670818\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"studySidebar",previous:{title:"\u6982\u8ff0",permalink:"/docs/study/db/"},next:{title:"TiDB",permalink:"/docs/study/db/NewSQL/TiDB"}},u={},p=[{value:"\u8f6f\u4ef6\u7cfb\u7edf\u6839\u636e\u5b58\u50a8\u7ed3\u6784\u7684\u5206\u7c7b",id:"\u8f6f\u4ef6\u7cfb\u7edf\u6839\u636e\u5b58\u50a8\u7ed3\u6784\u7684\u5206\u7c7b",level:3},{value:"NOSQL\u51fa\u73b0\u7684\u5386\u53f2\u539f\u56e0",id:"nosql\u51fa\u73b0\u7684\u5386\u53f2\u539f\u56e0",level:3}],y={toc:p},c="wrapper";function s(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u8f6f\u4ef6\u7cfb\u7edf\u6839\u636e\u5b58\u50a8\u7ed3\u6784\u7684\u5206\u7c7b"},"\u8f6f\u4ef6\u7cfb\u7edf\u6839\u636e\u5b58\u50a8\u7ed3\u6784\u7684\u5206\u7c7b"),(0,a.yg)("p",null,"\u5173\u4e8eNoSQL\uff0c\u770b\u8fc7\u4e00\u5f20\u56fe\uff0c\u633a\u5f62\u8c61\uff1a\u201c1970\uff0cWe have no SQL\u201d->\u201c1980\uff0cKnow SQL\u201d->\u201c2000\uff0cNoSQL\u201d->\u201c2005\uff0cNot only SQL\u201d->\u201c2015\uff0cNo\uff0cSQL\u201d\u3002\u76ee\u524d\uff0c\u4e00\u4e9b\u65b0\u578b\u6570\u636e\u5e93\uff0c\u540c\u65f6\u5177\u5907\u4e86NoSQL\u7684\u6269\u5c55\u6027\u548c\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684\u5f88\u591a\u7279\u6027\u3002 "),(0,a.yg)("p",null,"\u5173\u7cfb\u578b\u548cNoSQL\u6570\u636e\u5e93\u7684\u9009\u578b\u3002\u8003\u8651\u51e0\u4e2a\u6307\u6807\uff0c\u6570\u636e\u91cf\u3001\u5e76\u53d1\u91cf\u3001\u5b9e\u65f6\u6027\u3001\u4e00\u81f4\u6027\u8981\u6c42\u3001\u8bfb\u5199\u5206\u5e03\u548c\u7c7b\u578b\u3001\u5b89\u5168\u6027\u3001\u8fd0\u7ef4\u6027\u7b49\u3002\u6839\u636e\u8fd9\u4e9b\u6307\u6807\uff0c\u8f6f\u4ef6\u7cfb\u7edf\u53ef\u5206\u6210\u51e0\u7c7b\u3002 "),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u7ba1\u7406\u578b\u7cfb\u7edf\uff0c\u5982\u8fd0\u8425\u7c7b\u7cfb\u7edf\uff0c\u9996\u9009\u5173\u7cfb\u578b\u3002 "),(0,a.yg)("li",{parentName:"ol"},"\u5927\u6d41\u91cf\u7cfb\u7edf\uff0c\u5982\u7535\u5546\u5355\u54c1\u9875\u7684\u67d0\u4e2a\u670d\u52a1\uff0c\u540e\u53f0\u9009\u5173\u7cfb\u578b\uff0c\u524d\u53f0\u9009\u5185\u5b58\u578b\u3002 "),(0,a.yg)("li",{parentName:"ol"},"\u65e5\u5fd7\u578b\u7cfb\u7edf\uff0c\u539f\u59cb\u6570\u636e\u9009\u5217\u5f0f\uff0c\u65e5\u5fd7\u641c\u7d22\u9009\u5012\u6392\u7d22\u5f15\u3002 "),(0,a.yg)("li",{parentName:"ol"},"\u641c\u7d22\u578b\u7cfb\u7edf\uff0c\u6307\u7ad9\u5185\u641c\u7d22\uff0c\u975e\u901a\u7528\u641c\u7d22\uff0c\u5982\u5546\u54c1\u641c\u7d22\uff0c\u540e\u53f0\u9009\u5173\u7cfb\u578b\uff0c\u524d\u53f0\u9009\u5012\u6392\u7d22\u5f15\u3002 "),(0,a.yg)("li",{parentName:"ol"},"\u4e8b\u52a1\u578b\u7cfb\u7edf\uff0c\u5982\u5e93\u5b58\u3001\u4ea4\u6613\u3001\u8bb0\u8d26\uff0c\u9009\u5173\u7cfb\u578b+\u7f13\u5b58+\u4e00\u81f4\u6027\u534f\u8bae\uff0c\u6216\u65b0\u578b\u5173\u7cfb\u6570\u636e\u5e93\u3002 "),(0,a.yg)("li",{parentName:"ol"},"\u79bb\u7ebf\u8ba1\u7b97\uff0c\u5982\u5927\u91cf\u6570\u636e\u5206\u6790\uff0c\u9996\u9009\u5217\u5f0f\uff0c\u5173\u7cfb\u578b\u4e5f\u53ef\u4ee5\u3002 "),(0,a.yg)("li",{parentName:"ol"},"\u5b9e\u65f6\u8ba1\u7b97\uff0c\u5982\u5b9e\u65f6\u76d1\u63a7\uff0c\u53ef\u4ee5\u9009\u65f6\u5e8f\u6570\u636e\u5e93\uff0c\u6216\u5217\u5f0f\u6570\u636e\u5e93\u3002")),(0,a.yg)("h3",{id:"nosql\u51fa\u73b0\u7684\u5386\u53f2\u539f\u56e0"},"NOSQL\u51fa\u73b0\u7684\u5386\u53f2\u539f\u56e0"),(0,a.yg)("p",null,"\u5173\u7cfb\u6570\u636e\u5e93\u7ecf\u8fc7\u51e0\u5341\u5e74\u7684\u53d1\u5c55\u540e\u5df2\u7ecf\u975e\u5e38\u6210\u719f\uff0c\u5f3a\u5927\u7684 SQL \u529f\u80fd\u548c ACID \u7684\u5c5e\u6027\uff0c\u4f7f\u5f97\u5173\u7cfb\u6570\u636e\u5e93\u5e7f\u6cdb\u5e94\u7528\u4e8e\u5404\u5f0f\u5404\u6837\u7684\u7cfb\u7edf\u4e2d\uff0c\u4f46\u8fd9\u5e76\u4e0d\u610f\u5473\u7740\u5173\u7cfb\u6570\u636e\u5e93\u662f\u5b8c\u7f8e\u7684\uff0c\u5173\u7cfb\u6570\u636e\u5e93\u5b58\u5728\u5982\u4e0b\u7f3a\u70b9\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5173\u7cfb\u6570\u636e\u5e93\u5b58\u50a8\u7684\u662f\u884c\u8bb0\u5f55\uff0c\u65e0\u6cd5\u5b58\u50a8\u6570\u636e\u7ed3\u6784",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u4ee5\u5fae\u535a\u7684\u5173\u6ce8\u5173\u7cfb\u4e3a\u4f8b\uff0c\u201c\u6211\u5173\u6ce8\u7684\u4eba\u201d\u662f\u4e00\u4e2a\u7528\u6237 ID \u5217\u8868\uff0c\u4f7f\u7528\u5173\u7cfb\u6570\u636e\u5e93\u5b58\u50a8\u53ea\u80fd\u5c06\u5217\u8868\u62c6\u6210\u591a\u884c\uff0c\u7136\u540e\u518d\u67e5\u8be2\u51fa\u6765\u7ec4\u88c5\uff0c\u65e0\u6cd5\u76f4\u63a5\u5b58\u50a8\u4e00\u4e2a\u5217\u8868\u3002"))),(0,a.yg)("li",{parentName:"ul"},"\u5173\u7cfb\u6570\u636e\u5e93\u7684 schema \u6269\u5c55\u5f88\u4e0d\u65b9\u4fbf",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u5173\u7cfb\u6570\u636e\u5e93\u7684\u8868\u7ed3\u6784 schema \u662f\u5f3a\u7ea6\u675f\uff0c\u64cd\u4f5c\u4e0d\u5b58\u5728\u7684\u5217\u4f1a\u62a5\u9519\uff0c\u4e1a\u52a1\u53d8\u5316\u65f6\u6269\u5145\u5217\u4e5f\u6bd4\u8f83\u9ebb\u70e6\uff0c\u9700\u8981\u6267\u884c DDL\uff08data definition language\uff0c\u5982 CREATE\u3001ALTER\u3001DROP \u7b49\uff09\u8bed\u53e5\u4fee\u6539\uff0c\u800c\u4e14\u4fee\u6539\u65f6\u53ef\u80fd\u4f1a\u957f\u65f6\u95f4\u9501\u8868\uff08\u4f8b\u5982\uff0cMySQL \u53ef\u80fd\u5c06\u8868\u9501\u4f4f 1 \u4e2a\u5c0f\u65f6\uff09\u3002"))),(0,a.yg)("li",{parentName:"ul"},"\u5173\u7cfb\u6570\u636e\u5e93\u5728\u5927\u6570\u636e\u573a\u666f\u4e0b I/O \u8f83\u9ad8",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u5982\u679c\u5bf9\u4e00\u4e9b\u5927\u91cf\u6570\u636e\u7684\u8868\u8fdb\u884c\u7edf\u8ba1\u4e4b\u7c7b\u7684\u8fd0\u7b97\uff0c\u5173\u7cfb\u6570\u636e\u5e93\u7684 I/O \u4f1a\u5f88\u9ad8\uff0c\u56e0\u4e3a\u5373\u4f7f\u53ea\u9488\u5bf9\u5176\u4e2d\u67d0\u4e00\u5217\u8fdb\u884c\u8fd0\u7b97\uff0c\u5173\u7cfb\u6570\u636e\u5e93\u4e5f\u4f1a\u5c06\u6574\u884c\u6570\u636e\u4ece\u5b58\u50a8\u8bbe\u5907\u8bfb\u5165\u5185\u5b58\u3002"))),(0,a.yg)("li",{parentName:"ul"},"\u5173\u7cfb\u6570\u636e\u5e93\u7684\u5168\u6587\u641c\u7d22\u529f\u80fd\u6bd4\u8f83\u5f31",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u5173\u7cfb\u6570\u636e\u5e93\u7684\u5168\u6587\u641c\u7d22\u53ea\u80fd\u4f7f\u7528 like \u8fdb\u884c\u6574\u8868\u626b\u63cf\u5339\u914d\uff0c\u6027\u80fd\u975e\u5e38\u4f4e\uff0c\u5728\u4e92\u8054\u7f51\u8fd9\u79cd\u641c\u7d22\u590d\u6742\u7684\u573a\u666f\u4e0b\u65e0\u6cd5\u6ee1\u8db3\u4e1a\u52a1\u8981\u6c42\u3002")))),(0,a.yg)("p",null,"\u9488\u5bf9\u4e0a\u8ff0\u95ee\u9898\uff0c\u5206\u522b\u8bde\u751f\u4e86\u4e0d\u540c\u7684 NoSQL \u89e3\u51b3\u65b9\u6848\uff0c\u8fd9\u4e9b\u65b9\u6848\u4e0e\u5173\u7cfb\u6570\u636e\u5e93\u76f8\u6bd4\uff0c\u5728\u67d0\u4e9b\u5e94\u7528\u573a\u666f\u4e0b\u8868\u73b0\u66f4\u597d\u3002\u4f46\u4e16\u4e0a\u6ca1\u6709\u514d\u8d39\u7684\u5348\u9910\uff0cNoSQL \u65b9\u6848\u5e26\u6765\u7684\u4f18\u52bf\uff0c\u672c\u8d28\u4e0a\u662f\u727a\u7272 ACID \u4e2d\u7684\u67d0\u4e2a\u6216\u8005\u67d0\u51e0\u4e2a\u7279\u6027\uff0c\u56e0\u6b64\u6211\u4eec\u4e0d\u80fd\u76f2\u76ee\u5730\u8ff7\u4fe1 NoSQL \u662f\u94f6\u5f39\uff0c\u800c\u5e94\u8be5\u5c06 NoSQL \u4f5c\u4e3a SQL \u7684\u4e00\u4e2a\u6709\u529b\u8865\u5145\uff0cNoSQL != No SQL\uff0c\u800c\u662f NoSQL = Not Only SQL\u3002"),(0,a.yg)("p",null,"\u5e38\u89c1\u7684 NoSQL \u65b9\u6848\u5206\u4e3a 4 \u7c7b\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"K-V \u5b58\u50a8\uff1a\u89e3\u51b3\u5173\u7cfb\u6570\u636e\u5e93\u65e0\u6cd5\u5b58\u50a8\u6570\u636e\u7ed3\u6784\u7684\u95ee\u9898\uff0c\u4ee5 Redis \u4e3a\u4ee3\u8868\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6587\u6863\u6570\u636e\u5e93\uff1a\u89e3\u51b3\u5173\u7cfb\u6570\u636e\u5e93\u5f3a schema \u7ea6\u675f\u7684\u95ee\u9898\uff0c\u4ee5 MongoDB \u4e3a\u4ee3\u8868\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5217\u5f0f\u6570\u636e\u5e93\uff1a\u89e3\u51b3\u5173\u7cfb\u6570\u636e\u5e93\u5927\u6570\u636e\u573a\u666f\u4e0b\u7684 I/O \u95ee\u9898\uff0c\u4ee5 HBase \u4e3a\u4ee3\u8868\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5168\u6587\u641c\u7d22\u5f15\u64ce\uff1a\u89e3\u51b3\u5173\u7cfb\u6570\u636e\u5e93\u7684\u5168\u6587\u641c\u7d22\u6027\u80fd\u95ee\u9898\uff0c\u4ee5 Elasticsearch \u4e3a\u4ee3\u8868\u3002")))}s.isMDXComponent=!0}}]);