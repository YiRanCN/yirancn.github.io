"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4963],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>h});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),i=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=i(e.components);return a.createElement(o.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(t),y=r,h=d["".concat(o,".").concat(y)]||d[y]||u[y]||l;return t?a.createElement(h,s(s({ref:n},c),{},{components:t})):a.createElement(h,s({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=y;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[d]="string"==typeof e?e:r,s[1]=p;for(var i=2;i<l;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},31191:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=t(58168),r=(t(96540),t(15680));const l={},s=void 0,p={unversionedId:"study/db/\u5168\u6587\u641c\u7d22\u5f15\u64ce/Elasticsearch",id:"study/db/\u5168\u6587\u641c\u7d22\u5f15\u64ce/Elasticsearch",title:"Elasticsearch",description:"ES\u7248\u672c",source:"@site/docs/study/db/\u5168\u6587\u641c\u7d22\u5f15\u64ce/Elasticsearch.md",sourceDirName:"study/db/\u5168\u6587\u641c\u7d22\u5f15\u64ce",slug:"/study/db/\u5168\u6587\u641c\u7d22\u5f15\u64ce/Elasticsearch",permalink:"/docs/study/db/\u5168\u6587\u641c\u7d22\u5f15\u64ce/Elasticsearch",draft:!1,tags:[],version:"current",lastUpdatedAt:1738461448,formattedLastUpdatedAt:"2025\u5e742\u67082\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"\u7efc\u5408\u6982\u8ff0",permalink:"/docs/study/db/\u5168\u6587\u641c\u7d22\u5f15\u64ce/\u7efc\u5408\u6982\u8ff0"},next:{title:"InfluxDB",permalink:"/docs/study/db/\u65f6\u5e8f\u6570\u636e\u5e93/InfluxDB"}},o={},i=[{value:"ES\u7248\u672c",id:"es\u7248\u672c",level:2},{value:"ES\u57fa\u7840\u6982\u5ff5",id:"es\u57fa\u7840\u6982\u5ff5",level:2},{value:"\u5206\u9875",id:"\u5206\u9875",level:2},{value:"\u5206\u7247\u548c\u526f\u672c",id:"\u5206\u7247\u548c\u526f\u672c",level:2},{value:"\u5e38\u7528\u67e5\u8be2(curl)",id:"\u5e38\u7528\u67e5\u8be2curl",level:2},{value:"\u57fa\u7840\u6982\u5ff5",id:"\u57fa\u7840\u6982\u5ff5",level:3},{value:"\u67e5\u770b\u6240\u6709\u7d22\u5f15\u5e93",id:"\u67e5\u770b\u6240\u6709\u7d22\u5f15\u5e93",level:3},{value:"\u67e5\u770b\u67d0\u4e2a\u7d22\u5f15\u5e93\u4fe1\u606f",id:"\u67e5\u770b\u67d0\u4e2a\u7d22\u5f15\u5e93\u4fe1\u606f",level:3},{value:"\u8bbe\u7f6e\u67d0\u4e2a\u7d22\u5f15\u5e93\u4fe1\u606f",id:"\u8bbe\u7f6e\u67d0\u4e2a\u7d22\u5f15\u5e93\u4fe1\u606f",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u5220\u9664\u6307\u5b9a\u7d22\u5f15\u5e93",id:"\u5220\u9664\u6307\u5b9a\u7d22\u5f15\u5e93",level:3},{value:"\u6df1\u5165\u641c\u7d22",id:"\u6df1\u5165\u641c\u7d22",level:3},{value:"\u65b0\u589e\u6570\u636e",id:"\u65b0\u589e\u6570\u636e",level:3},{value:"\u62f7\u8d1d\u7d22\u5f15\u5e93",id:"\u62f7\u8d1d\u7d22\u5f15\u5e93",level:3},{value:"\u540c\u4e00\u4e2a\u96c6\u7fa4\u62f7\u8d1d",id:"\u540c\u4e00\u4e2a\u96c6\u7fa4\u62f7\u8d1d",level:4},{value:"\u4e0d\u540c\u7684\u96c6\u7fa4\u62f7\u8d1d",id:"\u4e0d\u540c\u7684\u96c6\u7fa4\u62f7\u8d1d",level:4},{value:"\u62a5\u9519\u5904\u7406",id:"\u62a5\u9519\u5904\u7406",level:3},{value:"\u67e5\u8be2\u5206\u7247\u4fe1\u606f/\u6587\u6863\u603b\u6570/\u4e3b\u8282\u70b9",id:"\u67e5\u8be2\u5206\u7247\u4fe1\u606f\u6587\u6863\u603b\u6570\u4e3b\u8282\u70b9",level:3},{value:"\u9700\u8981\u5bc6\u7801\u65f6(nginx)",id:"\u9700\u8981\u5bc6\u7801\u65f6nginx",level:3},{value:"\u6a21\u677f",id:"\u6a21\u677f",level:3},{value:"\u521b\u5efa\u7d22\u5f15\u5e93",id:"\u521b\u5efa\u7d22\u5f15\u5e93",level:3},{value:"\u96c6\u7fa4\u72b6\u6001\u67e5\u770b",id:"\u96c6\u7fa4\u72b6\u6001\u67e5\u770b",level:3},{value:"\u5feb\u7167",id:"\u5feb\u7167",level:3},{value:"\u5220\u9664\u6570\u636e",id:"\u5220\u9664\u6570\u636e",level:3},{value:"es\u8bbf\u95ee\u6743\u9650",id:"es\u8bbf\u95ee\u6743\u9650",level:2},{value:"GEOIP",id:"geoip",level:2},{value:"\u76f8\u5173\u8d44\u6599",id:"\u76f8\u5173\u8d44\u6599",level:2}],c={toc:i},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"es\u7248\u672c"},"ES\u7248\u672c"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u76ee\u524d\u4f7f\u7528\u7684\u7248\u672c\u662f6.3.2\uff0c\u76f8\u5bf9\u5e94\u7684logstash/kibana/filebeat\u4e5f\u4f7f\u7528\u7684\u662f6.3.2\uff0cjava\u5bf9\u5e94\u7684jar\u5305client\u4e5f\u662f\u7528\u76846.3.2\uff1b")),(0,r.yg)("h2",{id:"es\u57fa\u7840\u6982\u5ff5"},"ES\u57fa\u7840\u6982\u5ff5"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Index\uff08\u7d22\u5f15-\u6570\u636e\u5e93\uff09\uff0c\u7d22\u5f15\u5305\u542b\u4e00\u5806\u6709\u76f8\u4f3c\u7ed3\u6784\u7684\u6587\u6863\u6570\u636e\uff0c\uff0c\u6bd4\u5982\u53ef\u4ee5\u6709\u4e00\u4e2a\u5ba2\u6237\u7d22\u5f15\uff0c\u5546\u54c1\u5206\u7c7b\u7d22\u5f15\uff0c\u8ba2\u5355\u7d22\u5f15\uff0c\u7d22\u5f15\u6709\u4e00\u4e2a\u540d\u79f0\u3002\u4e00\u4e2aindex\u5305\u542b\u5f88\u591adocument\uff0c\u4e00\u4e2aindex\u5c31\u4ee3\u8868\u4e86\u4e00\u7c7b\u7c7b\u4f3c\u7684\u6216\u8005\u76f8\u540c\u7684document\u3002\u6bd4\u5982\u8bf4\u5efa\u7acb\u4e00\u4e2aproduct index\uff0c\u5546\u54c1\u7d22\u5f15\uff0c\u91cc\u9762\u53ef\u80fd\u5c31\u5b58\u653e\u4e86\u6240\u6709\u7684\u5546\u54c1\u6570\u636e\uff0c\u6240\u6709\u7684\u5546\u54c1document\u3002\u5fc5\u987b\u662f\u82f1\u6587\u5c0f\u5199\u547d\u540d\u3002"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("del",{parentName:"li"},"Type\uff08\u7c7b\u578b-\u8868\uff09\uff0c\u6bcf\u4e2a\u7d22\u5f15\u91cc\u90fd\u53ef\u4ee5\u6709\u4e00\u4e2a\u6216\u591a\u4e2atype\uff0ctype\u662findex\u4e2d\u7684\u4e00\u4e2a\u903b\u8f91\u6570\u636e\u5206\u7c7b\uff0c\u4e00\u4e2atype\u4e0b\u7684document\uff0c\u90fd\u6709\u76f8\u540c\u7684field\u3002")),(0,r.yg)("li",{parentName:"ol"},"Document\uff08\u6587\u6863-\u884c\uff09\uff0c\u6587\u6863\u662fes\u4e2d\u7684\u6700\u5c0f\u6570\u636e\u5355\u5143\uff0c\u4e00\u4e2adocument\u53ef\u4ee5\u662f\u4e00\u6761\u5ba2\u6237\u6570\u636e\uff0c\u4e00\u6761\u5546\u54c1\u5206\u7c7b\u6570\u636e\uff0c\u4e00\u6761\u8ba2\u5355\u6570\u636e\uff0c\u901a\u5e38\u7528JSON\u6570\u636e\u7ed3\u6784\u8868\u793a\uff0c\u6bcf\u4e2aindex\u4e0b\u7684type\u4e2d\uff0c\u90fd\u53ef\u4ee5\u53bb\u5b58\u50a8\u591a\u4e2adocument\u3002"),(0,r.yg)("li",{parentName:"ol"},"Field\uff08\u5b57\u6bb5-\u5217\uff09\uff0cField\u662fElasticsearch\u7684\u6700\u5c0f\u5355\u4f4d\u3002\u4e00\u4e2adocument\u91cc\u9762\u6709\u591a\u4e2afield\uff0c\u6bcf\u4e2afield\u5c31\u662f\u4e00\u4e2a\u6570\u636e\u5b57\u6bb5\u3002"),(0,r.yg)("li",{parentName:"ol"},"mapping\uff08\u6620\u5c04-\u7ea6\u675f\uff09\uff0c\u6570\u636e\u5982\u4f55\u5b58\u653e\u5230\u7d22\u5f15\u5bf9\u8c61\u4e0a\uff0c\u9700\u8981\u6709\u4e00\u4e2a\u6620\u5c04\u914d\u7f6e\uff0c\u5305\u62ec\uff1a\u6570\u636e\u7c7b\u578b\u3001\u662f\u5426\u5b58\u50a8\u3001\u662f\u5426\u5206\u8bcd\u7b49\u3002\u8fd9\u6837\u5c31\u521b\u5efa\u4e86\u4e00\u4e2a\u540d\u4e3ablog\u7684Index\u3002Type\u4e0d\u7528\u5355\u72ec\u521b\u5efa\uff0c\u5728\u521b\u5efaMapping \u65f6\u6307\u5b9a\u5c31\u53ef\u4ee5\u3002Mapping\u7528\u6765\u5b9a\u4e49Document\u4e2d\u6bcf\u4e2a\u5b57\u6bb5\u7684\u7c7b\u578b\uff0c\u5373\u6240\u4f7f\u7528\u7684 analyzer\u3001\u662f\u5426\u7d22\u5f15\u7b49\u5c5e\u6027\uff0c\u975e\u5e38\u5173\u952e\u7b49\u3002")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6ce8\u610f\u4e8b\u9879\uff1a")),(0,r.yg)("p",null,"\u4eceES6.0\u5f00\u59cb\uff0c\u5b98\u65b9\u4fbf\u4e0d\u5efa\u8bae\u4e00\u4e2a\u7d22\u5f15\u4e2d\u521b\u5efa\u591a\u4e2a\u7c7b\u578b\uff1b\u5728ES7.0\u4e2d\uff0c\u66f4\u662f\u79fb\u9664\u4e86\u7c7b\u578b(Type)\u8fd9\u4e2a\u6982\u5ff5\u3002\u4e3a\u4ec0\u4e48\u5462\uff1f\n\u5728Elasticsearch\u7d22\u5f15\u4e2d\uff0c\u4e0d\u540c\u7c7b\u578b(Type)\u4e2d\u5177\u6709\u76f8\u540c\u540d\u79f0\u7684\u5b57\u6bb5\u5728\u5185\u90e8\u7531\u76f8\u540c\u7684Lucene\u5b57\u6bb5\u652f\u6301\u3002\u4e00\u4e2aindex\u4e2d\u591a\u4e2aType\u5728Lucene\u4e2d\u4f1a\u6709\u8bb8\u591a\u95ee\u9898\u3002\u5177\u4f53\u7684\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9\u8bf4\u660e\u3002"),(0,r.yg)("h2",{id:"\u5206\u9875"},"\u5206\u9875"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u6df1\u5ea6\u5206\u9875\uff0c\u7406\u89e3\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u6df1\u5ea6\u5206\u9875\u662f\u6709\u95ee\u9898\u7684\uff0c\u6240\u4ee5\u4f7f\u7528\u6b64\u5206\u9875\u5728\u5bf9\u9700\u8981\u9650\u5236\u5206\u9875\u6570\u91cf\uff1b"),(0,r.yg)("li",{parentName:"ol"},"\u5feb\u7167\u5206\u9875(scroll)"),(0,r.yg)("li",{parentName:"ol"},"search_after\u5206\u9875")),(0,r.yg)("h2",{id:"\u5206\u7247\u548c\u526f\u672c"},"\u5206\u7247\u548c\u526f\u672c"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'//\u65b0\u589e\u7d22\u5f15\u7684\u540c\u65f6\u6dfb\u52a0\u5206\u7247\uff0c\u4e0d\u4f7f\u7528\u9ed8\u8ba4\u5206\u7247\uff0c\u5206\u7247\u7684\u6570\u91cf\n//\u4e00\u822c\u4ee5\uff08\u8282\u70b9\u6570*1.5\u62163\u500d\uff09\u6765\u8ba1\u7b97\uff0c\u6bd4\u5982\u67094\u4e2a\u8282\u70b9\uff0c\u5206\u7247\u6570\u91cf\u4e00\u822c\u662f6\u4e2a\u523012\u4e2a\uff0c\u6bcf\u4e2a\u5206\u7247\u4e00\u822c\u5206\u914d\u4e00\u4e2a\u526f\u672c\nPUT /testindex\n{\n   "settings" : {\n      "number_of_shards" : 5,\n      "number_of_replicas" : 1\n   }\n}\n')),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u4e00\u4e2a \u5206\u7247 \u662f\u4e00\u4e2a\u5e95\u5c42\u7684 \u5de5\u4f5c\u5355\u5143 \uff0c\u5b83\u4ec5\u4fdd\u5b58\u4e86\u5168\u90e8\u6570\u636e\u4e2d\u7684\u4e00\u90e8\u5206\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u4e00\u4e2a\u5206\u7247\u662f\u4e00\u4e2a Lucene \u7684\u5b9e\u4f8b\uff0c\u4ee5\u53ca\u5b83\u672c\u8eab\u5c31\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u641c\u7d22\u5f15\u64ce\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u4e00\u4e2a\u5206\u7247\u53ef\u4ee5\u662f \u4e3b \u5206\u7247\u6216\u8005 \u526f\u672c \u5206\u7247\u3002 \u7d22\u5f15\u5185\u4efb\u610f\u4e00\u4e2a\u6587\u6863\u90fd\u5f52\u5c5e\u4e8e\u4e00\u4e2a\u4e3b\u5206\u7247\uff0c\u6240\u4ee5\u4e3b\u5206\u7247\u7684\u6570\u76ee\u51b3\u5b9a\u7740\u7d22\u5f15\u80fd\u591f\u4fdd\u5b58\u7684\u6700\u5927\u6570\u636e\u91cf\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u6280\u672f\u4e0a\u6765\u8bf4\uff0c\u4e00\u4e2a\u4e3b\u5206\u7247\u6700\u5927\u80fd\u591f\u5b58\u50a8 Integer.MAX_VALUE - 128 \u4e2a\u6587\u6863 ~= 21\u4ebf\u6761"),(0,r.yg)("li",{parentName:"ol"},"\u4e00\u4e2a\u526f\u672c\u5206\u7247\u53ea\u662f\u4e00\u4e2a\u4e3b\u5206\u7247\u7684\u62f7\u8d1d\u3002\u526f\u672c\u5206\u7247\u4f5c\u4e3a\u786c\u4ef6\u6545\u969c\u65f6\u4fdd\u62a4\u6570\u636e\u4e0d\u4e22\u5931\u7684\u5197\u4f59\u5907\u4efd\uff0c\u5e76\u4e3a\u641c\u7d22\u548c\u8fd4\u56de\u6587\u6863\u7b49\u8bfb\u64cd\u4f5c\u63d0\u4f9b\u670d\u52a1\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5728\u7d22\u5f15\u5efa\u7acb\u7684\u65f6\u5019\u5c31\u5df2\u7ecf\u786e\u5b9a\u4e86\u4e3b\u5206\u7247\u6570\uff0c\u4f46\u662f\u526f\u672c\u5206\u7247\u6570\u53ef\u4ee5\u968f\u65f6\u4fee\u6539\u3002\u8bfb\u64cd\u4f5c\u2014\u2014\u641c\u7d22\u548c\u8fd4\u56de\u6570\u636e\u2014\u2014\u53ef\u4ee5\u540c\u65f6\u88ab\u4e3b\u5206\u7247\xa0",(0,r.yg)("em",{parentName:"li"},"\u6216"),"\xa0\u526f\u672c\u5206\u7247\u6240\u5904\u7406\uff0c\u6240\u4ee5\u5f53\u4f60\u62e5\u6709\u8d8a\u591a\u7684\u526f\u672c\u5206\u7247\u65f6\uff0c\u4e5f\u5c06\u62e5\u6709\u8d8a\u9ad8\u7684\u541e\u5410\u91cf\u3002")),(0,r.yg)("h2",{id:"\u5e38\u7528\u67e5\u8be2curl"},"\u5e38\u7528\u67e5\u8be2(curl)"),(0,r.yg)("h3",{id:"\u57fa\u7840\u6982\u5ff5"},"\u57fa\u7840\u6982\u5ff5"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#\nurl\u4e2d\u643a\u5e26?v\u8868\u793a\u5c55\u793a\u8868\u5934\nurl\u4e2d\u643a\u5e26?pretty\u8868\u793a\u5c55\u793a\u683c\u5f0f\u5316\nurl\u4e2d\u5e26\u7740?help\u67e5\u770b\u5217\u7684\u5b9a\u4e49\nurl\u4e2d\u5e26\u7740?h=a,b\u6307\u5b9a\u67e5\u770b\u67d0\u4e9b\u5217\n\n#\u6d4f\u89c8es\u670d\u52a1\u4fe1\u606f\ncurl -XGET http://127.0.0.1:9200\n")),(0,r.yg)("h3",{id:"\u67e5\u770b\u6240\u6709\u7d22\u5f15\u5e93"},"\u67e5\u770b\u6240\u6709\u7d22\u5f15\u5e93"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#\u6839\u636e\u7d22\u5f15\u5e93\u540d\u79f0\u6392\u5e8f\ncurl -XGET 'http://127.0.0.1:9200/_cat/indices?v&s=index'\n#\u6839\u636e\u6587\u6863\u6570\u91cf\u6392\u5e8f\ncurl -XGET 'http://127.0.0.1:9200/_cat/indices?v&s=docs.count'\n#\u6839\u636e\u6587\u6863\u78c1\u76d8\u5b58\u50a8\u5927\u5c0f\u6392\u5e8f\ncurl -XGET 'http://127.0.0.1:9200/_cat/indices?v&s=store.size'\n#\u67e5\u770b\u6240\u6709\u7d22\u5f15\u5e93\u7684\u8bbe\u7f6e\u4fe1\u606f\ncurl -XGET 'http://127.0.0.1:9200/_all/_settings?pretty'\n#\u67d0\u4e2a\u7d22\u5f15\ncurl -XGET 'http://127.0.0.1:9200/_cat/indices/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}?v'\n")),(0,r.yg)("h3",{id:"\u67e5\u770b\u67d0\u4e2a\u7d22\u5f15\u5e93\u4fe1\u606f"},"\u67e5\u770b\u67d0\u4e2a\u7d22\u5f15\u5e93\u4fe1\u606f"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#\u67e5\u770b\u67d0\u4e2a\u7d22\u5f15\u5e93\u7684aliases/mappings/settings\ncurl -XGET 'http://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}?pretty'\n#\u67e5\u770b\u67d0\u4e2a\u7d22\u5f15\u5e93\u7684settings\ncurl -XGET 'http://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}/_settings?pretty'\n#\u67e5\u770b\u67d0\u4e2a\u7d22\u5f15\u5e93\u7684mappings\ncurl -XGET 'http://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}/_mappings?pretty'\n")),(0,r.yg)("h3",{id:"\u8bbe\u7f6e\u67d0\u4e2a\u7d22\u5f15\u5e93\u4fe1\u606f"},"\u8bbe\u7f6e\u67d0\u4e2a\u7d22\u5f15\u5e93\u4fe1\u606f"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'#\u8bbe\u7f6e\u67d0\u4e2a\u7d22\u5f15\u5e93\u7684settings \u526f\u672c\u6570\u91cf\uff0c\u526f\u672c\u6570\u91cf\u8d8a\u5408\u7406\u7684\u8d8a\u591a\uff0c\u4f1a\u63d0\u9ad8\u67e5\u8be2\u901f\u5ea6\ncurl -XPUT \'http://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}/_settings\' \\\n-H "Content-Type: application/json" \\\n-d \'{"index":{"number_of_replicas":"1"}}\'\n#\u8bbe\u7f6e\u67d0\u4e2a\u7d22\u5f15\u5e93\u7684\u67d0\u4e2a\u5b57\u6bb5\u652f\u6301aggs\u5206\u6790 \u5982\u679c\u67d0\u4e2a\u5b57\u6bb5\u7684\u7c7b\u578b\u662f\u5bf9\u8c61\uff0c\u652f\u6301\u7528.\u8fd0\u7b97\u7b26\ncurl -XPUT \'http://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}/_mappings/doc?pretty\' \\\n-H "Content-Type: application/json" \\\n-d \'{"properties" : {"url" : {"type" : "text", "fielddata" : true }}}\'\n')),(0,r.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'#\u6839\u636e\u67d0\u4e2a\u5b57\u6bb5\u5206\u6790\u6587\u6863\u6570\u91cf \u5982\u679c\u67d0\u4e2a\u5b57\u6bb5\u7684\u7c7b\u578b\u662f\u5bf9\u8c61\uff0c\u652f\u6301\u7528.\u8fd0\u7b97\u7b26 \n#\u8fd9\u4e2a\u5b57\u6bb5\u9700\u8981\u652f\u6301fielddata=true\ncurl -XGET \'http://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}/_search?pretty\' \\\n-H "Content-Type: application/json" \\\n-d \'{"size" : 0 ,"aggs": {"all_interests": {"terms": { "field": "url" }}}}\'\n#\u6839\u636e\u67d0\u4e2a\u5b57\u6bb5\u5148\u67e5\u8be2\u518d\u5206\u6790\u6587\u6863\u6570\u91cf\ncurl -XGET \'http://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}/_search?pretty\' \\\n-H "Content-Type: application/json" \\\n-d \'{\n"query":{"match":{"method":"POST"}},\n"size" : 0 ,"aggs": {"all_interests": {"terms": { "field": "uaj.name" }}}}\'\n')),(0,r.yg)("h3",{id:"\u5220\u9664\u6307\u5b9a\u7d22\u5f15\u5e93"},"\u5220\u9664\u6307\u5b9a\u7d22\u5f15\u5e93"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#\ncurl -XDELETE 'http://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}?pretty'\n")),(0,r.yg)("h3",{id:"\u6df1\u5165\u641c\u7d22"},"\u6df1\u5165\u641c\u7d22"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'##############################################\u7ed3\u6784\u5316\u641c\u7d22\n# \u7ed3\u6784\u5316\u641c\u7d22-\u7cbe\u786e\u503c\u67e5\u627e\ncurl -XPOST \\\nhttp://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}/_search?pretty \\\n-H "Content-Type: application/json" \\\n-d \'{ "sort": [{"@timestamp": {"order": "asc"}}], \n"from":0,"size": 10,"query":{"term":{"code":"200"}}}\'\n\ncurl -XPOST \\\nhttp://127.0.0.1:9400/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}/_search?pretty \\\n-H "Content-Type: application/json" \\\n-d \'{ \n"from":0,"size": 10,"query":{"term":{"_id":"uNp30XIB0LLx2kagtfJo"}}}\'\n# \u7ed3\u6784\u5316\u641c\u7d22-\u7cbe\u786e\u503c\u67e5\u627e\n# \u901a\u5e38\u5f53\u67e5\u627e\u4e00\u4e2a\u7cbe\u786e\u503c\u7684\u65f6\u5019\uff0c\u6211\u4eec\u4e0d\u5e0c\u671b\u5bf9\u67e5\u8be2\u8fdb\u884c\u8bc4\u5206\u8ba1\u7b97\u3002\u53ea\u5e0c\u671b\u5bf9\u6587\u6863\u8fdb\u884c\u5305\u62ec\u6216\u6392\u9664\u7684\u8ba1\u7b97\uff0c\n# \u6240\u4ee5\u6211\u4eec\u4f1a\u4f7f\u7528 constant_score \u67e5\u8be2\u4ee5\u975e\u8bc4\u5206\u6a21\u5f0f\u6765\u6267\u884c term \u67e5\u8be2\u5e76\u4ee5\u4e00\u4f5c\u4e3a\u7edf\u4e00\u8bc4\u5206\u3002\ncurl -XPOST \\\nhttp://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}/_search?pretty \\\n-H "Content-Type: application/json" \\\n-d \'{ "sort": [{"@timestamp": {"order": "desc"}}], \n"from":0,"size": 10,"query":{\n"constant_score":{\n  "filter":{\n    "term":{"code":"200"}\n  }\n}\n}}\'\n#\ncurl -XPOST \\\nhttp://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}/_search?pretty \\\n-H "Content-Type: application/json" \\\n-d \'{ "sort": [{"@timestamp": {"order": "desc"}}], \n"from":0,"size": 10,"query":{\n"constant_score":{\n  "filter":{\n    "range":{"code":{\n        "lte": "now"\n    }}\n  }\n}\n}}\'\n\n\n\n##############################################\u5168\u6587\u641c\u7d22\n# \u5168\u6587\u641c\u7d22-\u67e5\u8be2\u6240\u6709-\u6392\u5e8f\ncurl -XPOST \\\nhttp://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}/_search?pretty \\\n-H "Content-Type: application/json" \\\n-d \'{ "sort": [{"@timestamp": {"order": "desc"}}], \n"from":0,"size": 10,"query":{"match_all":{}}}\'\n# \u5168\u6587\u641c\u7d22-\u67d0\u4e2a\u5b57\u6bb5\u67e5\u8be2\ncurl -XPOST \\\nhttp://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}.20.6.11/_search?pretty \\\n-H "Content-Type: application/json" \\\n-d \'{ "from":0,"size": 10,"query":{"match":{"site":"m"}}}\'\n# \u6a21\u7cca\u67e5\u8be2\ncurl -XPOST \\\nhttp://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}/_search?pretty \\\n-H "Content-Type: application/json" \\\n-d \'{ "from":0,"size": 10,"query": {\n"wildcard": {\n    "site": "*show.html*"\n}\n}}\'\ncurl -XPOST \\\nhttp://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}/_search?pretty \\\n-H "Content-Type: application/json" \\\n-d \'{ "from":0,"size": 10,"query": {\n"bool":{\n  "must_not":[\n    {"term":{"market.keyword":"\u79d1\u521b\u677f"}}\n    ,{"wildcard": {"name": "*ST*"}}\n  ]\n}\n}}\'\n\n\n')),(0,r.yg)("h3",{id:"\u65b0\u589e\u6570\u636e"},"\u65b0\u589e\u6570\u636e"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'#POST\u63d0\u4ea4 \u81ea\u52a8\u751f\u6210_id\ncurl -XPOST \\\nhttp://127.0.0.1:9200/stock/test \\\n-H "Content-Type: application/json" \\\n-d \'{"author" : "Doug Cutting"}\' \n#PUT\u63d0\u4ea4 \u6307\u5b9a_id\ncurl -XPOST \\\nhttp://127.0.0.1:9200/stock/test/1 \\\n-H "Content-Type: application/json" \\\n-d \'{"author" : "Doug Cutting"}\' \n')),(0,r.yg)("h3",{id:"\u62f7\u8d1d\u7d22\u5f15\u5e93"},"\u62f7\u8d1d\u7d22\u5f15\u5e93"),(0,r.yg)("h4",{id:"\u540c\u4e00\u4e2a\u96c6\u7fa4\u62f7\u8d1d"},"\u540c\u4e00\u4e2a\u96c6\u7fa4\u62f7\u8d1d"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'# x > .temp\n....\n#reindex one > bak\ncurl -XPOST \'http://127.0.0.1:9200/_reindex\' \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "source": {"index": "{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}.temp"},\n  "dest": {"index": "{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}"}}\'\n#\n#curl -XDELETE \'http://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}?pretty\'\n#reindex bak > one\ncurl -XPOST \'http://127.0.0.1:9200/_reindex\' \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "source": {"index": "{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}"},\n  "dest": {"index": "{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}"}}\'\n# restart logstash-xxx\n...\n#reindex temp > one\ncurl -XPOST \'http://127.0.0.1:9200/_reindex\' \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "source": {"index": "{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}.temp"},\n  "dest": {"index": "{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}"}}\'\n#\n#curl -XDELETE \'http://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}.bak?pretty\'\n#curl -XDELETE \'http://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}.temp?pretty\'\n')),(0,r.yg)("h4",{id:"\u4e0d\u540c\u7684\u96c6\u7fa4\u62f7\u8d1d"},"\u4e0d\u540c\u7684\u96c6\u7fa4\u62f7\u8d1d"),(0,r.yg)("p",null,"\u6ce8\u610f\uff1a\n\u5fc5\u987b\u914d\u7f6ereindex.remote.whitelist=172.19.184.169:9200"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'#reindex one > bak --{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}\ncurl -XPOST \'http://127.0.0.1:9200/_reindex\' \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "source": {"index": "prod_device_active","remote":{"host":"http://172.19.184.169:9200"}},\n  "dest": {"index": "prod_device_active"}}\'\n#reindex one > bak --prod_device_address_statistics\ncurl -XPOST \'http://127.0.0.1:9200/_reindex\' \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "source": {"index": "prod_device_address_statistics","remote":{"host":"http://172.19.184.169:9200"}},\n  "dest": {"index": "prod_device_address_statistics"}}\'\n#reindex one > bak --prod_device_product_model_statistics\ncurl -XPOST \'http://127.0.0.1:9200/_reindex\' \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "source": {"index": "prod_device_product_model_statistics","remote":{"host":"http://172.19.184.169:9200"}},\n  "dest": {"index": "prod_device_product_model_statistics"}}\'\n#reindex one > bak --prod_ranking\ncurl -XPOST \'http://127.0.0.1:9200/_reindex\' \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "source": {"index": "prod_ranking","remote":{"host":"http://172.19.184.169:9200"}},\n  "dest": {"index": "prod_ranking.bak"}}\'\n#reindex one > bak --prod_user_func_flow_for_user_op_for_res\ncurl -XPOST \'http://127.0.0.1:9200/_reindex\' \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "source": {"index": "prod_user_func_flow_for_user_op_for_res","remote":{"host":"http://192.168.0.33:9200"}},\n  "dest": {"index": "prod_user_func_flow_for_user_op_for_res"}}\'\n')),(0,r.yg)("h3",{id:"\u62a5\u9519\u5904\u7406"},"\u62a5\u9519\u5904\u7406"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'#\u5982\u679c\u62a5\u9519\u5982\u4e0b \u9700\u8981\u6267\u884c\n#Fielddata is disabled on text fields by default. Set fielddata=true on [ipo_date] in order to load fielddata in memory by uninverting the inverted index. Note that this can however use significant memory. Alternatively use a keyword field instead.\ncurl -i -H "Content-Type:application/json" \\\n-XPUT http://127.0.0.1:9200/daily/_mapping/doc/?pretty \\\n-d \'{"doc":{"properties":{"trade_date":{"type":"text","fielddata":true}}}}\'\n\n#\u89e3\u51b3\u9519\u8bef retrying failed action with response code: 403 ({"type"=>"cluster_block_exception", "reason"=>"block\ncurl -XPUT -H \'Content-Type: application/json\' \\\nhttp://127.0.0.1:9200/_all/_settings \\\n-d \'{"index.blocks.read_only_allow_delete": null}\'\n')),(0,r.yg)("h3",{id:"\u67e5\u8be2\u5206\u7247\u4fe1\u606f\u6587\u6863\u603b\u6570\u4e3b\u8282\u70b9"},"\u67e5\u8be2\u5206\u7247\u4fe1\u606f/\u6587\u6863\u603b\u6570/\u4e3b\u8282\u70b9"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#\u67e5\u8be2\u67d0\u4e2a\u7d22\u5f15\u5e93\u7684\u5206\u7247\u4fe1\u606f\ncurl -XGET 'http://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}/_search_shards?pretty'\n#\u67e5\u8be2\u67d0\u4e2a\u7d22\u5f15\u5e93\u7684\u6587\u6863\u603b\u6570\u91cf\ncurl -XGET 'http://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}/doc/_count?pretty'\n#\u67e5\u8be2\u4e3b\u8282\u70b9\ncurl -XGET 'http://127.0.0.1:9200/_cat/master?v'\n")),(0,r.yg)("h3",{id:"\u9700\u8981\u5bc6\u7801\u65f6nginx"},"\u9700\u8981\u5bc6\u7801\u65f6(nginx)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'#\u9700\u8981\u5bc6\u7801\u65f6 \u4e3e\u4f8b\ncurl -XGET  \\\n--user admin:Aa0123 \\\n#\u67e5\u770b\u67d0\u4e2a\u7d22\u5f15\u5e93\u4e0b\u7684\u524d1000\u6761\u6570\u636e\ncurl -XGET  --user admin:Aa0123 \\\n\'http://47.103.38.240:8443/rc_ranking/_search\' \\\n-H "Content-Type: application/json" \\\n-d \'{ "sort": [{"@timestamp": {"order": "desc"}}],\\\n"from":0,"size": 1000,"query":{"match_all":{}}}\'\n')),(0,r.yg)("h3",{id:"\u6a21\u677f"},"\u6a21\u677f"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#\u67e5\u8be2\u6240\u6709\u6a21\u677f\ncurl -XGET 'http://127.0.0.1:9200/_template?pretty'\ncurl -XGET 'http://127.0.0.1:9200/_template?pretty' > t.json\n#\u65b0\u589e\u67d0\u4e2a\u6a21\u677f--logstash-index-template-nginx-api\ncurl -XPUT http://127.0.0.1:9200/_template/logstash-index-template-nginx-api?pretty \\\n-H \"Content-Type: application/json\" \\\n-d @logstash-index-template-nginx-api.json\n\n#\u65b0\u589e\u67d0\u4e2a\u6a21\u677f--logstash-index-template-userop\ncurl -XPUT http://127.0.0.1:9200/_template/logstash-index-template-userop?pretty \\\n-H \"Content-Type: application/json\" \\\n-d @logstash-index-template-userop.json\n\n#\u65b0\u589e\u67d0\u4e2a\u6a21\u677f--logstash-index-template-alarm-data-history.json\ncurl -XPUT http://127.0.0.1:9200/_template/logstash-index-template-alarm-data-history?pretty \\\n-H \"Content-Type: application/json\" \\\n-d @logstash-index-template-alarm-data-history.json\n\n\n#\u5220\u9664\u67d0\u4e2a\u6a21\u677f\ncurl -XDELETE 'http://127.0.0.1:9200/_template/logstash-index-template-nginx-api?pretty'\n")),(0,r.yg)("h3",{id:"\u521b\u5efa\u7d22\u5f15\u5e93"},"\u521b\u5efa\u7d22\u5f15\u5e93"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa\u7d22\u5f15\u5e93\ncurl -XPUT 'http://127.0.0.1:9200/stock?pretty' \\\n-H 'Content-Type: application/json' \\\n-d '{\n   \"settings\" : {\n      \"number_of_shards\" : 5,\n      \"number_of_replicas\" : 1\n   }\n}'\n")),(0,r.yg)("h3",{id:"\u96c6\u7fa4\u72b6\u6001\u67e5\u770b"},"\u96c6\u7fa4\u72b6\u6001\u67e5\u770b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# \u670d\u52a1\u68c0\u6d4b\ncurl -XGET 'http://127.0.0.1:9200/_cat/health?v'\n# \u67e5\u770b\u6240\u6709\u96c6\u7fa4\u8282\u70b9\ncurl -XGET 'http://127.0.0.1:9200/_cat/allocation?v'\n# \u67e5\u770b\u96c6\u7fa4\u6240\u6709\u5206\u7247\u5206\u5e03\u60c5\u51b5\ncurl -XGET 'http://127.0.0.1:9200/_cat/shards?v'\n# \u67e5\u770b\u96c6\u7fa4\u67d0\u4e2a\u7d22\u5f15\u7684\u5206\u7247\u5206\u5e03\u60c5\u51b5\ncurl -XGET 'http://127.0.0.1:9200/_cat/shards/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}?v'\n# \u67e5\u770b\u96c6\u7fa4\u7684\u4e3b\u8282\u70b9\ncurl -XGET 'http://127.0.0.1:9200/_cat/master?v'\n# \u67e5\u770b\u96c6\u7fa4\u7684\u6240\u6709\u6570\u636e\u8282\u70b9\ncurl -XGET 'http://127.0.0.1:9200/_cat/nodes?v'\n# \u67e5\u770b\u96c6\u7fa4\u7684\u6240\u6709\u6bb5(\u6570\u636e\u96c6)\ncurl -XGET 'http://127.0.0.1:9200/_cat/segments?v'\n# \u67e5\u770b\u96c6\u7fa4\u67d0\u4e2a\u7d22\u5f15\u7684\u6bb5\u5206\u5e03\u60c5\u51b5\ncurl -XGET 'http://127.0.0.1:9200/_cat/segments/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}?v'\n# \u67e5\u770b\u96c6\u7fa4\u7684\u6240\u6709\u6587\u6863\u6570\u91cf\ncurl -XGET 'http://127.0.0.1:9200/_cat/count?v'\n# \u67e5\u770b\u96c6\u7fa4\u67d0\u4e2a\u7d22\u5f15\u7684\u6587\u6863\u6570\u91cf\ncurl -XGET 'http://127.0.0.1:9200/_cat/count/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}?v'\n# \u67e5\u770b\u96c6\u7fa4\u7684\u6240\u6709\u53d1\u73b0\u673a\u5236\ncurl -XGET 'http://127.0.0.1:9200/_cat/recovery?v'\n# \u67e5\u770b\u96c6\u7fa4\u67d0\u4e2a\u7d22\u5f15\u7684\u53d1\u73b0\u673a\u5236\ncurl -XGET 'http://127.0.0.1:9200/_cat/recovery/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}?v'\n# \u67e5\u770b\u96c6\u7fa4\u7684\u6240\u6709\u963b\u585e\u4efb\u52a1\uff1f\ncurl -XGET 'http://127.0.0.1:9200/_cat/pending_tasks?v'\n# \u67e5\u770b\u96c6\u7fa4\u7684\u6240\u6709\u522b\u540d\ncurl -XGET 'http://127.0.0.1:9200/_cat/aliases?v'\n# \u67e5\u770b\u96c6\u7fa4\u67d0\u4e2a\u7d22\u5f15\u7684\u522b\u540d\ncurl -XGET 'http://127.0.0.1:9200/_cat/aliases/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}?v'\n# \u67e5\u770b\u96c6\u7fa4\u7684\u6240\u6709\u7ebf\u7a0b\u6c60\ncurl -XGET 'http://127.0.0.1:9200/_cat/thread_pool?v'\n# \u67e5\u770b\u96c6\u7fa4\u7684\u6240\u6709\u63d2\u4ef6\u5217\u8868\ncurl -XGET 'http://127.0.0.1:9200/_cat/plugins?v'\n# \u67e5\u770b\u96c6\u7fa4\u7684\u6240\u6709fielddata\ncurl -XGET 'http://127.0.0.1:9200/_cat/fielddata?v'\ncurl -XGET 'http://127.0.0.1:9200/_cat/fielddata/{fields}?v'\n# \u67e5\u770b\u96c6\u7fa4\u7684\u6240\u6709\u8282\u70b9\u7684\u8282\u70b9\u5c5e\u6027\ncurl -XGET 'http://127.0.0.1:9200/_cat/nodeattrs?v'\n")),(0,r.yg)("h3",{id:"\u5feb\u7167"},"\u5feb\u7167"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'#\u67e5\u770b\u5feb\u7167\u5b58\u50a8\u4ed3\u5e93\u5217\u8868\ncurl -X ET "127.0.0.1:9200/_cat/repositories?v"\n#\u67e5\u770b\u67d0\u4e2a\u5feb\u7167\u5b58\u50a8\u4ed3\u5e93\u7684\u5feb\u7167\u5217\u8868\ncurl -XGET "127.0.0.1:9200/_snapshot/snapshots/_all?pretty"\n#\u6ce8\u518c\u5feb\u7167\u5b58\u50a8\u5e93\ncurl -XPUT \\\nhttp://127.0.0.1:9200/_snapshot/snapshots?pretty \\\n-H "Content-Type: application/json" \\\n-d \'{ "type":"fs","settings":{"location":"/usr/share/elasticsearch/snapshots"}}\'\n#\u67e5\u770b\u5feb\u7167\u5b58\u50a8\u5e93\ncurl -XGET \\\nhttp://127.0.0.1:9200/_snapshot?pretty\n#\u6267\u884c\u5feb\u7167\u5b58\u50a8\u5e93\ncurl -XPUT \\\n\'http://127.0.0.1:9200/_snapshot/snapshots/snapshot_02?wait_for_completion=true\'\n#\u67e5\u770b\u6267\u884c\u5feb\u7167\u5b58\u50a8\u5e93\u7684\u7ed3\u679c\ncurl -XGET \\\nhttp://127.0.0.1:9200/_snapshot/snapshots/snapshot_02?pretty\n#\u5220\u9664\u5feb\u7167\u5b58\u50a8\u5e93\ncurl -XDELETE "127.0.0.1:9200/_snapshot/snapshots?pretty"\n#\u5220\u9664\u5feb\u7167\ncurl -XDELETE "127.0.0.1:9200/_snapshot/snapshots/snapshot_02?pretty"\n#\u6253\u5305\ncd /mnt/docker/es.1\ntar czvf snapshots.tar.gz ./snapshots/*\n#############\u76ee\u7684\u5730\ncd /mnt/docker/es.1\n#upload an tar\ntar xzvf snapshots.tar.gz \n#\u6ce8\u518c\u5feb\u7167\u5b58\u50a8\u5e93\ncurl -XPUT \\\nhttp://127.0.0.1:9200/_snapshot/snapshots?pretty \\\n-H "Content-Type: application/json" \\\n-d \'{ "type":"fs","settings":{"location":"/usr/share/elasticsearch/snapshots"}}\'\n#\u8fd8\u539f\u5feb\u7167\u5b58\u50a8\u5e93\ncurl -XPOST \\\n\'http://127.0.0.1:9200/_snapshot/snapshots/snapshot_02/_restore?wait_for_completion=true\'\n')),(0,r.yg)("h3",{id:"\u5220\u9664\u6570\u636e"},"\u5220\u9664\u6570\u636e"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'#\u6839\u636e\u65f6\u95f4\u5220\u9664\u90e8\u5206\u6570\u636e\ncurl -XPOST \\\nhttp://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}/_delete_by_query?pretty \\\n-H "Content-Type: application/json" \\\n-d \'{ "query": {\n    "range": {\n      "@timestamp": {\n        "lt": "2022-10-01T00:00:00Z"\n      }\n    }\n  } }\'\n#\u5237\u65b0\u7d22\u5f15 \u5220\u9664 Elasticsearch \u7d22\u5f15\u4e2d\u7684\u90e8\u5206\u6570\u636e\u540e\uff0c\u78c1\u76d8\u4e0a\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e0d\u5fc5\u8981\u7684\u788e\u7247\u3002\u4e3a\u4e86\u56de\u6536\u8fd9\u4e9b\u78c1\u76d8\u7a7a\u95f4\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c\u4e00\u6b21\u7d22\u5f15\u5237\u65b0\u64cd\u4f5c\uff0c\u8fd9\u5c06\u5220\u9664\u5df2\u6807\u8bb0\u4e3a\u5220\u9664\u4f46\u672a\u5b9e\u9645\u5220\u9664\u7684\u6587\u6863\uff0c\u5e76\u91cd\u65b0\u7ec4\u7ec7\u5269\u4f59\u6587\u6863\u4ee5\u51cf\u5c11\u788e\u7247\u3002\ncurl -XPOST \\\nhttp://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}/_refresh?pretty \\\n-H "Content-Type: application/json" \\\n-d \'{}\'\n')),(0,r.yg)("p",null,"#\u5f3a\u5236\u5408\u5e76\ncurl -XPOST \\\n",(0,r.yg)("a",{parentName:"p",href:"http://127.0.0.1:9200/%7B%E5%85%B7%E4%BD%93%E7%9A%84%E7%B4%A2%E5%BC%95%E5%BA%93%7D/_forcemerge?only_expunge_deletes=true"},"http://127.0.0.1:9200/{\u5177\u4f53\u7684\u7d22\u5f15\u5e93}/_forcemerge?only_expunge_deletes=true")," \\\n-H \"Content-Type: application/json\" \\\n-d '{}'"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\n## \u8fd1\u5b9e\u65f6\u641c\u7d22/refresh\n\n\u5728 Elasticsearch \u4e2d\uff0c\u5199\u5165\u548c\u6253\u5f00\u4e00\u4e2a\u65b0\u6bb5\u7684\u8f7b\u91cf\u7684\u8fc7\u7a0b\u53eb\u505a refresh \u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6bcf\u4e2a\u5206\u7247\u4f1a\u6bcf\u79d2\u81ea\u52a8\u5237\u65b0\u4e00\u6b21\u3002\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u6211\u4eec\u8bf4 Elasticsearch \u662f \u8fd1 \u5b9e\u65f6\u641c\u7d22: \u6587\u6863\u7684\u53d8\u5316\u5e76\u4e0d\u662f\u7acb\u5373\u5bf9\u641c\u7d22\u53ef\u89c1\uff0c\u4f46\u4f1a\u5728\u4e00\u79d2\u4e4b\u5185\u53d8\u4e3a\u53ef\u89c1\u3002\n\n\u8fd9\u4e9b\u884c\u4e3a\u53ef\u80fd\u4f1a\u5bf9\u65b0\u7528\u6237\u9020\u6210\u56f0\u60d1: \u4ed6\u4eec\u7d22\u5f15\u4e86\u4e00\u4e2a\u6587\u6863\u7136\u540e\u5c1d\u8bd5\u641c\u7d22\u5b83\uff0c\u4f46\u5374\u6ca1\u6709\u641c\u5230\u3002\u8fd9\u4e2a\u95ee\u9898\u7684\u89e3\u51b3\u529e\u6cd5\u662f\u7528 refresh API \u6267\u884c\u4e00\u6b21\u624b\u52a8\u5237\u65b0:\n```shell\nPOST /_refresh \nPOST /blogs/_refresh \n")),(0,r.yg)("h2",{id:"es\u8bbf\u95ee\u6743\u9650"},"es\u8bbf\u95ee\u6743\u9650"),(0,r.yg)("p",null,"\u56e0\u4e3a\u5f00\u6e90\u7684es\u662f\u4e0d\u5e26\u8bbf\u95ee\u6743\u9650\u63a7\u5236\u7684\uff0c\u5e76\u4e0d\u80fd\u7528\u4e8e\u751f\u4ea7\u73af\u5883\uff1b\u5546\u4e1a\u7248\u63d2\u4ef6x-pack\u662f\u652f\u6301\u7528\u6237\u6743\u9650\u7684\uff0c\u4f46\u662f\u6536\u8d39\u3002\n\u53ef\u4ee5\u4f7f\u7528nginx\u589e\u52a0\u8bbf\u95ee\u6743\u9650\u6765\u65b9\u5411\u4ee3\u7406es\uff0c\u4f46\u662fes\u76849200/9300\u7aef\u53e3\u4e0d\u80fd\u5916\u7f51\u5f00\u653e\uff1b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'#\u5b89\u88c5httpd-tools\nyum install httpd-tools\nmkdir /usr/local/nginx/conf/passwd\nhtpasswd -c /usr/local/nginx/conf/passwd/es admin\n#nginx\u914d\u7f6e\u53cd\u5411\u4ee3\u7406\u589e\u52a0\nserver\n{\n    listen 8443;\n    location / {\n      proxy_set_header Host $host;\n      proxy_set_header X-Forwarded-For $remote_addr;\n      proxy_pass http://172.17.0.1:9200;\n      proxy_connect_timeout 18000;\n      proxy_send_timeout 18000;\n      proxy_read_timeout 18000;\n      #\n      auth_basic "Please input password";\n      auth_basic_user_file /usr/local/nginx/conf/passwd/es;\n   } \n}\n')),(0,r.yg)("h2",{id:"geoip"},"GEOIP"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#\nyum install GeoIP-data -y\n")),(0,r.yg)("h2",{id:"\u76f8\u5173\u8d44\u6599"},"\u76f8\u5173\u8d44\u6599"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://blog.csdn.net/qq_31871785/article/details/86138291"},"\u4ece\u96f6\u5b66Elasticsearch\u7cfb\u5217\u2014\u2014JAVA API\u64cd\u4f5c")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://yqh.aliyun.com/detail/9912"},"\u5982\u4f55\u628aElasticsearch\u53d1\u6325\u5230\u6781\u81f4\uff1f")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://gitee.com/ymm-tech/ebatis"},"ebatis\u3010ebatis \u662f\u4e00\u4e2a\u7b80\u5355\u65b9\u4fbf\u4e0a\u624b\u7684 Elasticsearch ORM \u6846\u67b6\u3011"))))}u.isMDXComponent=!0}}]);