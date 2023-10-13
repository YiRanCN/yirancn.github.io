"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9704],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),y=a,m=p["".concat(i,".").concat(y)]||p[y]||d[y]||l;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8389:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={},o="MySQL \u7b14\u8bb0",c={unversionedId:"study/db/SQL/MySQL-\u7b14\u8bb0",id:"study/db/SQL/MySQL-\u7b14\u8bb0",title:"MySQL \u7b14\u8bb0",description:"WITH \u67e5\u8be2",source:"@site/docs/study/db/SQL/MySQL-\u7b14\u8bb0.md",sourceDirName:"study/db/SQL",slug:"/study/db/SQL/MySQL-\u7b14\u8bb0",permalink:"/docs/study/db/SQL/MySQL-\u7b14\u8bb0",draft:!1,tags:[],version:"current",lastUpdatedAt:1697182763,formattedLastUpdatedAt:"2023\u5e7410\u670813\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"MariaDB",permalink:"/docs/study/db/SQL/MariaDB"},next:{title:"MySQL",permalink:"/docs/study/db/SQL/MySQL"}},i={},u=[{value:"WITH \u67e5\u8be2",id:"with-\u67e5\u8be2",level:3},{value:"\u9012\u5f52\u5171\u7528\u8868\u8fbe\u5f0f with recursive",id:"\u9012\u5f52\u5171\u7528\u8868\u8fbe\u5f0f-with-recursive",level:3},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:3}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql-\u7b14\u8bb0"},"MySQL \u7b14\u8bb0"),(0,a.kt)("h3",{id:"with-\u67e5\u8be2"},"WITH \u67e5\u8be2"),(0,a.kt)("p",null,"MySQL \u8bed\u53e5 WITH \u662f MySQL 8.0 \u4e2d\u7684\u4e00\u4e2a\u65b0\u7279\u6027\uff0c\u7528\u4e8e\u5e2e\u52a9\u7b80\u5316\u590d\u6742\u67e5\u8be2\u4ee5\u53ca\u63d0\u9ad8\u67e5\u8be2\u6548\u7387\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u67e5\u8be2\u90fd\u9700\u8981\u591a\u6b21\u5d4c\u5957\u4f7f\u7528\uff0c\u8fd9\u5bfc\u81f4\u67e5\u8be2\u8bed\u53e5\u5199\u5f97\u5f88\u957f\u4e14\u96be\u4ee5\u7ef4\u62a4\u3002WITH \u8bed\u53e5\u5c31\u662f\u7528\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\uff0c\u5b83\u662f\u4e00\u79cd\u4e34\u65f6\u8868\u7684\u65b9\u5f0f\uff0c\u5f97\u5230\u7684\u7ed3\u679c\u96c6\u53ef\u4ee5\u4f5c\u4e3a\u67e5\u8be2\u7684\u7ed3\u679c\u96c6\u3002\u5728 WITH \u8bed\u53e5\u4e2d\uff0c\u53ef\u4ee5\u5b9a\u4e49\u591a\u4e2a\u522b\u540d\uff0c\u7136\u540e\u5d4c\u5957\u4f7f\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"WITH t1 AS (\n    SELECT col1 FROM table1\n),\nt2 as (\n    SELECT col1 FROM table2\n)\n--\u4f7f\u7528\nSELECT * FROM t1 INNER JOIN t2 ON t1.col1 = t2.col1;\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u4e24\u5f20\u8868\uff0ct1 \u548c t2\uff0c\u7136\u540e\u4f7f\u7528\u4e86\u8fd9\u4e24\u5f20\u8868\u6765\u8fdb\u884c\u67e5\u8be2\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u907f\u514d\u5728\u67e5\u8be2\u8bed\u53e5\u4e2d\u591a\u6b21\u5d4c\u5957\u4f7f\u7528\u76f8\u540c\u7684\u5b50\u67e5\u8be2\uff0c\u5e76\u4e14\u4e5f\u4e0d\u9700\u8981\u4e3a\u6bcf\u4e2a\u67e5\u8be2\u5b9a\u4e49\u4e00\u4e2a\u4e34\u65f6\u8868\u3002"),(0,a.kt)("p",null,"with \u7279\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"with \u5176\u5b9e\u5c31\u662f\u4e00\u4e2a\u5b50\u67e5\u8be2\u62bd\u53d6\u51fa\u6765\uff0c\u6362\u4e86\u4e00\u4e2a\u522b\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u548c\u89c6\u56fe\u7684\u533a\u522b\uff1awith as \u7b49\u540c\u4e8e\u4e00\u6b21\u6027\u89c6\u56fe\uff0c\u53ea\u4f1a\u6301\u7eed\u5230\u4e0b\u4e00\u4e2a\u67e5\u8be2\u3002\u5728\u4e4b\u540e\u5c31\u4e0d\u80fd\u518d\u88ab\u5f15\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u7b80\u5316\u590d\u6742\u7684 \u6570\u636e\u96c6 \u548c \u9012\u5f52")),(0,a.kt)("p",null,"\u5176\u5b9e WITH \u8868\u8fbe\u5f0f\u9664\u4e86\u548c SELECT \u4e00\u8d77\u7528\uff0c \u8fd8\u53ef\u4ee5\u6709\u4e0b\u9762\u7684\u7ec4\u5408\uff1a"),(0,a.kt)("p",null,"insert with \u3001with update\u3001with delete\u3001with with\u3001with recursive(\u53ef\u4ee5\u6a21\u62df\u6570\u5b57\u3001\u65e5\u671f\u7b49\u5e8f\u5217)\u3001WITH \u53ef\u4ee5\u5b9a\u4e49\u591a\u5f20\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"with_clause:\n    WITH [RECURSIVE]\n        cte_name [(col_name [, col_name] ...)] AS (subquery)\n        [, cte_name [(col_name [, col_name] ...)] AS (subquery)] ...\n")),(0,a.kt)("h3",{id:"\u9012\u5f52\u5171\u7528\u8868\u8fbe\u5f0f-with-recursive"},"\u9012\u5f52\u5171\u7528\u8868\u8fbe\u5f0f with recursive"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"WITH RECURSIVE cte (n) AS\n(\n  SELECT 1\n  UNION ALL\n  SELECT n + 1 FROM cte WHERE n < 5\n)\nSELECT * FROM cte;\n")),(0,a.kt)("h3",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://halo.sherlocky.com/archives/mysql-8-cte"},"MySQL 8.0 with \u8bed\u6cd5(cte)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/preface.html"},"MySQL 8.0 \u5b98\u65b9\u6587\u6863"))))}d.isMDXComponent=!0}}]);