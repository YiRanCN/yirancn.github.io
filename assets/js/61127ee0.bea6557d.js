"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5218],{5680:(e,n,l)=>{l.d(n,{xA:()=>p,yg:()=>d});var a=l(6540);function r(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function t(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,a)}return l}function o(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?t(Object(l),!0).forEach((function(n){r(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):t(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function i(e,n){if(null==e)return{};var l,a,r=function(e,n){if(null==e)return{};var l,a,r={},t=Object.keys(e);for(a=0;a<t.length;a++)l=t[a],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)l=t[a],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=a.createContext({}),g=function(e){var n=a.useContext(s),l=n;return e&&(l="function"==typeof e?e(n):o(o({},n),e)),l},p=function(e){var n=g(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var l=e.components,r=e.mdxType,t=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=g(l),y=r,d=c["".concat(s,".").concat(y)]||c[y]||u[y]||t;return l?a.createElement(d,o(o({ref:n},p),{},{components:l})):a.createElement(d,o({ref:n},p))}));function d(e,n){var l=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=l.length,o=new Array(t);o[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var g=2;g<t;g++)o[g]=l[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,l)}y.displayName="MDXCreateElement"},5987:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>g});var a=l(8168),r=(l(6540),l(5680));const t={sidebar_position:2},o=void 0,i={unversionedId:"study/back/\u9ad8\u5e76\u53d1API",id:"study/back/\u9ad8\u5e76\u53d1API",title:"\u9ad8\u5e76\u53d1API",description:"\u603b\u7ed3",source:"@site/docs/study/back/\u9ad8\u5e76\u53d1API.md",sourceDirName:"study/back",slug:"/study/back/\u9ad8\u5e76\u53d1API",permalink:"/docs/study/back/\u9ad8\u5e76\u53d1API",draft:!1,tags:[],version:"current",lastUpdatedAt:1720705023,formattedLastUpdatedAt:"2024\u5e747\u670811\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"studySidebar",previous:{title:"Zookeeper",permalink:"/docs/study/back/Zookeeper"},next:{title:"API \u7f51\u5173",permalink:"/docs/study/back/API\u7f51\u5173/"}},s={},g=[{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3},{value:"wrk\u64cd\u4f5c",id:"wrk\u64cd\u4f5c",level:3},{value:"Nginx\u7edf\u8ba1\u8bbf\u95ee\u91cf",id:"nginx\u7edf\u8ba1\u8bbf\u95ee\u91cf",level:3},{value:"\u6839\u636e\u8bbf\u95eeIP\u7edf\u8ba1UV",id:"\u6839\u636e\u8bbf\u95eeip\u7edf\u8ba1uv",level:4},{value:"\u6839\u636e\u8bbf\u95eeURL\u7edf\u8ba1PV",id:"\u6839\u636e\u8bbf\u95eeurl\u7edf\u8ba1pv",level:4},{value:"\u6839\u636e\u8bbf\u95eeURL\u7edf\u8ba1QPS",id:"\u6839\u636e\u8bbf\u95eeurl\u7edf\u8ba1qps",level:4},{value:"\u67e5\u8be2\u8bbf\u95ee\u6700\u9891\u7e41\u7684URL",id:"\u67e5\u8be2\u8bbf\u95ee\u6700\u9891\u7e41\u7684url",level:4},{value:"\u67e5\u8be2\u8bbf\u95ee\u6700\u9891\u7e41\u7684IP",id:"\u67e5\u8be2\u8bbf\u95ee\u6700\u9891\u7e41\u7684ip",level:4},{value:"\u6839\u636e\u65f6\u95f4\u6bb5\u7edf\u8ba1\u67e5\u770b\u65e5\u5fd7",id:"\u6839\u636e\u65f6\u95f4\u6bb5\u7edf\u8ba1\u67e5\u770b\u65e5\u5fd7",level:4},{value:"\u67d0\u4e2a\u65f6\u95f4\u6bb5\u8bbf\u95ee\u603b\u6b21\u6570",id:"\u67d0\u4e2a\u65f6\u95f4\u6bb5\u8bbf\u95ee\u603b\u6b21\u6570",level:4},{value:"\u67e5\u770b\u8bbf\u95ee\u6700\u9891\u7e41\u7684\u524d5\u4e2aIP\uff0c\u5e76\u5217\u51fa\u8bbf\u95ee\u6b21\u6570",id:"\u67e5\u770b\u8bbf\u95ee\u6700\u9891\u7e41\u7684\u524d5\u4e2aip\u5e76\u5217\u51fa\u8bbf\u95ee\u6b21\u6570",level:4},{value:"\u7edf\u8ba1\u72b6\u6001\u7801\u4e3a200\u6b21\u6570",id:"\u7edf\u8ba1\u72b6\u6001\u7801\u4e3a200\u6b21\u6570",level:4},{value:"\u7edf\u8ba1\u72b6\u6001\u7801\u4e0d\u662f200\u7684\u6b21\u6570",id:"\u7edf\u8ba1\u72b6\u6001\u7801\u4e0d\u662f200\u7684\u6b21\u6570",level:4},{value:"\u67e5\u770b404\u9519\u8bef\u7801\u7684\u8bf7\u6c42",id:"\u67e5\u770b404\u9519\u8bef\u7801\u7684\u8bf7\u6c42",level:4},{value:"\u6bcf\u96945\u5206\u949f\u8bbf\u95ee\u6b21\u6570\u5217\u8868",id:"\u6bcf\u96945\u5206\u949f\u8bbf\u95ee\u6b21\u6570\u5217\u8868",level:4},{value:"\u67e5\u8be2\u67d0\u4e2aIP\u7684\u8be6\u7ec6\u8bbf\u95ee\u60c5\u51b5,\u6309\u8bbf\u95ee\u9891\u7387\u6392\u5e8f",id:"\u67e5\u8be2\u67d0\u4e2aip\u7684\u8be6\u7ec6\u8bbf\u95ee\u60c5\u51b5\u6309\u8bbf\u95ee\u9891\u7387\u6392\u5e8f",level:4},{value:"\u7edf\u8ba1\u6bcf\u79d2\u7684\u8bf7\u6c42\u6570,top100\u7684\u65f6\u95f4\u70b9(\u7cbe\u786e\u5230\u79d2)",id:"\u7edf\u8ba1\u6bcf\u79d2\u7684\u8bf7\u6c42\u6570top100\u7684\u65f6\u95f4\u70b9\u7cbe\u786e\u5230\u79d2",level:4},{value:"\u7edf\u8ba1\u6bcf\u5206\u949f\u7684\u8bf7\u6c42\u6570,top100\u7684\u65f6\u95f4\u70b9(\u7cbe\u786e\u5230\u5206\u949f)",id:"\u7edf\u8ba1\u6bcf\u5206\u949f\u7684\u8bf7\u6c42\u6570top100\u7684\u65f6\u95f4\u70b9\u7cbe\u786e\u5230\u5206\u949f",level:4},{value:"\u7edf\u8ba1\u6bcf\u5c0f\u65f6\u7684\u8bf7\u6c42\u6570,top100\u7684\u65f6\u95f4\u70b9(\u7cbe\u786e\u5230\u5c0f\u65f6)",id:"\u7edf\u8ba1\u6bcf\u5c0f\u65f6\u7684\u8bf7\u6c42\u6570top100\u7684\u65f6\u95f4\u70b9\u7cbe\u786e\u5230\u5c0f\u65f6",level:4},{value:"\u5176\u4ed6\uff0c\u672a\u5206\u7c7b",id:"\u5176\u4ed6\u672a\u5206\u7c7b",level:4},{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}],p={toc:g},c="wrapper";function u(e){let{components:n,...l}=e;return(0,r.yg)(c,(0,a.A)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5355\u673a\u767e\u4e07QPS\u7684Nginx\u662f\u6ca1\u6709\u95ee\u9898\u7684\uff0c\u5177\u4f53\u80fd\u5230\u591a\u5c11\uff0c\u53d7\u9650\u4e8e\uff1a",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u7684CPU\u6570\u91cf\u3001\u5185\u5b58\u5927\u5c0f\u3001\u78c1\u76d8\u6027\u80fd\uff1b"),(0,r.yg)("li",{parentName:"ol"},"\u670d\u52a1\u5668Linux\u7684\u914d\u7f6e"),(0,r.yg)("li",{parentName:"ol"},"Nginx\u7684\u53c2\u6570\u914d\u7f6e"),(0,r.yg)("li",{parentName:"ol"},"\u7f51\u5361\u7684\u914d\u7f6e\u3001\u8def\u7531\u5668\u7684\u914d\u7f6e\u3001\u4ea4\u6362\u673a\u7684\u914d\u7f6e"))),(0,r.yg)("li",{parentName:"ol"},"\u5355\u673aTomcat\u53d7\u9650\u4e8eJVM\u548cweb\u6846\u67b6\u7b49\u539f\u56e0\uff0c\u4e5f\u5c31\u6700\u591a1\u4e07\u5de6\u53f3\u7684QPS\uff1b",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"\u5982\u679c\u9700\u8981\u7b80\u5355\u67e5\u8be2\u6570\u636e\u5e93\u7684\uff0c\u4e5f\u5c312~3K\u7684QPS\uff1b"),(0,r.yg)("li",{parentName:"ol"},"\u5982\u679c\u9700\u8981\u6570\u636e\u5e93\u4e8b\u52a1\u64cd\u4f5c\u7684\uff0c\u4e5f\u5c31100~150\u7684QPS\uff1b"))),(0,r.yg)("li",{parentName:"ol"},"\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u6c34\u5e73\u62d3\u5c55QPS"),(0,r.yg)("li",{parentName:"ol"},"HTTP\u538b\u6d4b\u5de5\u5177\u4e4bwrk\uff1b",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://www.jianshu.com/p/ac185e01cc30"},"HTTP\u538b\u6d4b\u5de5\u5177\u4e4bwrk")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://www.cnblogs.com/quanxiaoha/p/10661650.html"},"\u6027\u80fd\u6d4b\u8bd5\u5de5\u5177wrk\u4f7f\u7528\u6559\u7a0b")))),(0,r.yg)("li",{parentName:"ol"},"\u4e00\u822c\u6765\u8bf4\uff0c\u4e0d\u4e00\u5b9a\u5f88\u51c6\u786e\uff0c\u53c2\u8003\uff1a",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"2C4G\u673a\u5668\u5355\u673a\u4e00\u822c1000QPS\u3002"),(0,r.yg)("li",{parentName:"ol"},"8C8G\u673a\u5668\u5355\u673a\u53ef\u627f\u53d77000QPS\u3002")))),(0,r.yg)("h3",{id:"wrk\u64cd\u4f5c"},"wrk\u64cd\u4f5c"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'#scripts/post.lua\nvim post.lua\n#\nwrk.method = "POST"\nwrk.body   = \'{"domain":"xxx.xxx.xxx"}\'\nwrk.headers["Content-Type"] = "application/json"\n#\n./wrk -t4 -c1000 -d5s -s /root/code/wrk/scripts/post.lua  {\u5177\u4f53\u7684URL}\n')),(0,r.yg)("h3",{id:"nginx\u7edf\u8ba1\u8bbf\u95ee\u91cf"},"Nginx\u7edf\u8ba1\u8bbf\u95ee\u91cf"),(0,r.yg)("h4",{id:"\u6839\u636e\u8bbf\u95eeip\u7edf\u8ba1uv"},"\u6839\u636e\u8bbf\u95eeIP\u7edf\u8ba1UV"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# \u6839\u636e\u8bbf\u95eeIP\u7edf\u8ba1UV\ncat /mnt/docker/tomcat/logs/{\u5177\u4f53\u7684nginx log} \\\n| grep \"21/May/2020\" | awk '{print $1}' \\\n|sort | uniq -c |wc -l\n")),(0,r.yg)("h4",{id:"\u6839\u636e\u8bbf\u95eeurl\u7edf\u8ba1pv"},"\u6839\u636e\u8bbf\u95eeURL\u7edf\u8ba1PV"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# \u6839\u636e\u8bbf\u95eeURL\u7edf\u8ba1PV\ncat /mnt/docker/tomcat/logs/{\u5177\u4f53\u7684nginx log\u6587\u4ef6} \\\n| grep \"21/May/2020\" \\\n| awk '{print $7}' |wc -l\n")),(0,r.yg)("h4",{id:"\u6839\u636e\u8bbf\u95eeurl\u7edf\u8ba1qps"},"\u6839\u636e\u8bbf\u95eeURL\u7edf\u8ba1QPS"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# \u6839\u636e\u8bbf\u95eeURL\u7edf\u8ba1QPS\ncat /mnt/docker/tomcat/logs/{\u5177\u4f53\u7684nginx log\u6587\u4ef6} \\\n| grep \"21/May/2020:16:39:\" \\\n| awk '{print $7}' |wc -l\n")),(0,r.yg)("h4",{id:"\u67e5\u8be2\u8bbf\u95ee\u6700\u9891\u7e41\u7684url"},"\u67e5\u8be2\u8bbf\u95ee\u6700\u9891\u7e41\u7684URL"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u8be2\u8bbf\u95ee\u6700\u9891\u7e41\u7684URL\ncat /usr/local/nginx/logs/access.log \\\n| grep \"29/Feb/2020\" | awk '{print $7}' \\\n|sort | uniq -c |sort -n -k 1 -r|more\n")),(0,r.yg)("h4",{id:"\u67e5\u8be2\u8bbf\u95ee\u6700\u9891\u7e41\u7684ip"},"\u67e5\u8be2\u8bbf\u95ee\u6700\u9891\u7e41\u7684IP"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u8be2\u8bbf\u95ee\u6700\u9891\u7e41\u7684IP\ncat /mnt/docker/tomcat/logs/{\u5177\u4f53\u7684nginx log\u6587\u4ef6} \\\n| grep \"12/May/2020\" | awk '{print $1}' \\\n|sort | uniq -c |sort -n -k 1 -r|more\n")),(0,r.yg)("h4",{id:"\u6839\u636e\u65f6\u95f4\u6bb5\u7edf\u8ba1\u67e5\u770b\u65e5\u5fd7"},"\u6839\u636e\u65f6\u95f4\u6bb5\u7edf\u8ba1\u67e5\u770b\u65e5\u5fd7"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# \u6839\u636e\u65f6\u95f4\u6bb5\u7edf\u8ba1\u67e5\u770b\u65e5\u5fd7\ncat  /usr/local/nginx/logs/access.log \\\n| sed -n '/14\\/Mar\\/2015/,/14\\/Mar\\/2020/p'|more\n")),(0,r.yg)("h4",{id:"\u67d0\u4e2a\u65f6\u95f4\u6bb5\u8bbf\u95ee\u603b\u6b21\u6570"},"\u67d0\u4e2a\u65f6\u95f4\u6bb5\u8bbf\u95ee\u603b\u6b21\u6570"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# \u67d0\u4e2a\u65f6\u95f4\u6bb5\u8bbf\u95ee\u603b\u6b21\u6570\ncat /usr/local/nginx/logs/access.log \\\n|  grep -E '16\\/Feb\\/2020:1[2-9]|29\\/Feb\\/2020:2[0-3]'| wc -\n")),(0,r.yg)("h4",{id:"\u67e5\u770b\u8bbf\u95ee\u6700\u9891\u7e41\u7684\u524d5\u4e2aip\u5e76\u5217\u51fa\u8bbf\u95ee\u6b21\u6570"},"\u67e5\u770b\u8bbf\u95ee\u6700\u9891\u7e41\u7684\u524d5\u4e2aIP\uff0c\u5e76\u5217\u51fa\u8bbf\u95ee\u6b21\u6570"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#\u67e5\u770b\u8bbf\u95ee\u6700\u9891\u7e41\u7684\u524d5\u4e2aIP\uff0c\u5e76\u5217\u51fa\u8bbf\u95ee\u6b21\u6570\ncat /usr/local/nginx/logs/access.log \\\n| grep \"29/Feb/2020\" | awk '{print $1}'|sort -n|uniq -c| sort -rn| head -5\n")),(0,r.yg)("h4",{id:"\u7edf\u8ba1\u72b6\u6001\u7801\u4e3a200\u6b21\u6570"},"\u7edf\u8ba1\u72b6\u6001\u7801\u4e3a200\u6b21\u6570"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# \u7edf\u8ba1\u72b6\u6001\u7801\u4e3a200\u6b21\u6570\ncat /usr/local/nginx/logs/access.log \\\n| grep \"29/Feb/2020\" | awk '{if($9 == 200) print $9}'|wc -l\n")),(0,r.yg)("h4",{id:"\u7edf\u8ba1\u72b6\u6001\u7801\u4e0d\u662f200\u7684\u6b21\u6570"},"\u7edf\u8ba1\u72b6\u6001\u7801\u4e0d\u662f200\u7684\u6b21\u6570"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#\u7edf\u8ba1\u72b6\u6001\u7801\u4e0d\u662f200\u7684\u6b21\u6570\ncat /usr/local/nginx/logs/access.log \\\n| grep \"29/Feb/2020\" | awk '{if($9 != 200) print }'|less\n")),(0,r.yg)("h4",{id:"\u67e5\u770b404\u9519\u8bef\u7801\u7684\u8bf7\u6c42"},"\u67e5\u770b404\u9519\u8bef\u7801\u7684\u8bf7\u6c42"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'#\u67e5\u770b404\u9519\u8bef\u7801\u7684\u8bf7\u6c42\ncat /usr/local/nginx/logs/access.log \\\n| grep "29/Feb/2020" | grep "404"|less\n')),(0,r.yg)("h4",{id:"\u6bcf\u96945\u5206\u949f\u8bbf\u95ee\u6b21\u6570\u5217\u8868"},"\u6bcf\u96945\u5206\u949f\u8bbf\u95ee\u6b21\u6570\u5217\u8868"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'#\u6bcf\u96945\u5206\u949f\u8bbf\u95ee\u6b21\u6570\u5217\u8868\ncat /usr/local/nginx/logs/access.log \\\n| grep "29/Feb/2020" \\\n| awk -F: \'{a[$2":"($3-$3%5)]++}END\\\n{for(i in a){split(i,t);print i" \u81f3",t[1]":"t[2]+4," \\\n\u8bbf\u95ee "a[i] " \u6b21" | "sort -t: -k1n -k2n"}}\'\n')),(0,r.yg)("h4",{id:"\u67e5\u8be2\u67d0\u4e2aip\u7684\u8be6\u7ec6\u8bbf\u95ee\u60c5\u51b5\u6309\u8bbf\u95ee\u9891\u7387\u6392\u5e8f"},"\u67e5\u8be2\u67d0\u4e2aIP\u7684\u8be6\u7ec6\u8bbf\u95ee\u60c5\u51b5,\u6309\u8bbf\u95ee\u9891\u7387\u6392\u5e8f"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#\u67e5\u8be2\u67d0\u4e2aIP\u7684\u8be6\u7ec6\u8bbf\u95ee\u60c5\u51b5,\u6309\u8bbf\u95ee\u9891\u7387\u6392\u5e8f\ncat /usr/local/nginx/logs/access.log \\\n| grep \"29/Feb/2020\" | grep '122.4.22.242' \\\n| awk '{print $7}'|sort |uniq -c |sort -rn |head -n 100\n")),(0,r.yg)("h4",{id:"\u7edf\u8ba1\u6bcf\u79d2\u7684\u8bf7\u6c42\u6570top100\u7684\u65f6\u95f4\u70b9\u7cbe\u786e\u5230\u79d2"},"\u7edf\u8ba1\u6bcf\u79d2\u7684\u8bf7\u6c42\u6570,top100\u7684\u65f6\u95f4\u70b9(\u7cbe\u786e\u5230\u79d2)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#\u7edf\u8ba1\u6bcf\u79d2\u7684\u8bf7\u6c42\u6570,top100\u7684\u65f6\u95f4\u70b9(\u7cbe\u786e\u5230\u79d2)\ncat /usr/local/nginx/logs/access.log \\\n| grep \"29/Feb/2020\" | awk '{print $4}' \\\n|cut -c 14-21|sort|uniq -c|sort -nr|head -n 100\n")),(0,r.yg)("h4",{id:"\u7edf\u8ba1\u6bcf\u5206\u949f\u7684\u8bf7\u6c42\u6570top100\u7684\u65f6\u95f4\u70b9\u7cbe\u786e\u5230\u5206\u949f"},"\u7edf\u8ba1\u6bcf\u5206\u949f\u7684\u8bf7\u6c42\u6570,top100\u7684\u65f6\u95f4\u70b9(\u7cbe\u786e\u5230\u5206\u949f)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#\u7edf\u8ba1\u6bcf\u5206\u949f\u7684\u8bf7\u6c42\u6570,top100\u7684\u65f6\u95f4\u70b9(\u7cbe\u786e\u5230\u5206\u949f)\ncat /usr/local/nginx/logs/access.log \\\n| grep \"29/Feb/2020\" | awk '{print $4}' \\\n|cut -c 14-18|sort|uniq -c|sort -nr|head -n 100\n")),(0,r.yg)("h4",{id:"\u7edf\u8ba1\u6bcf\u5c0f\u65f6\u7684\u8bf7\u6c42\u6570top100\u7684\u65f6\u95f4\u70b9\u7cbe\u786e\u5230\u5c0f\u65f6"},"\u7edf\u8ba1\u6bcf\u5c0f\u65f6\u7684\u8bf7\u6c42\u6570,top100\u7684\u65f6\u95f4\u70b9(\u7cbe\u786e\u5230\u5c0f\u65f6)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#\u7edf\u8ba1\u6bcf\u5c0f\u65f6\u7684\u8bf7\u6c42\u6570,top100\u7684\u65f6\u95f4\u70b9(\u7cbe\u786e\u5230\u5c0f\u65f6)\ncat /mnt/docker/tomcat/logs/{\u5177\u4f53\u7684nginx log\u6587\u4ef6} \\\n| grep \"21/May/2020\" | awk '{print $4}' \\\n|cut -c 14-15|sort|uniq -c|sort -nr|head -n 100\n")),(0,r.yg)("h4",{id:"\u5176\u4ed6\u672a\u5206\u7c7b"},"\u5176\u4ed6\uff0c\u672a\u5206\u7c7b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'\n##\u6027\u80fd\u5206\u6790\n#\u5728nginx log\u4e2d\u6700\u540e\u4e00\u4e2a\u5b57\u6bb5\u52a0\u5165$request_time\n#\u5217\u51fa\u4f20\u8f93\u65f6\u95f4\u8d85\u8fc7 3 \u79d2\u7684\u9875\u9762\uff0c\u663e\u793a\u524d20\u6761\ncat /usr/local/nginx/logs/access.log | grep "29/Feb/2020" \\\n| awk \'($NF > 3){print $7}\'|sort -n|uniq -c|sort -nr|head -20\n\n##TCP\u8fde\u63a5\u7edf\u8ba1\n#\u67e5\u770b\u5f53\u524dTCP\u8fde\u63a5\u6570\nnetstat -tan | grep "ESTABLISHED" | grep ":80" | wc -l\n#\u7528tcpdump\u55c5\u63a280\u7aef\u53e3\u7684\u8bbf\u95ee\u770b\u770b\u8c01\u6700\u9ad8\ntcpdump -i eth0 -tnn dst port 80 -c 1000 \\\n| awk -F"." \'{print $1"."$2"."$3"."$4}\' | sort | uniq -c | sort -nr\n\n')),(0,r.yg)("h3",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"PV\uff08Page View\uff09\u8bbf\u95ee\u91cf, \u5373\u9875\u9762\u6d4f\u89c8\u91cf\u6216\u70b9\u51fb\u91cf\uff0c\u8861\u91cf\u7f51\u7ad9\u7528\u6237\u8bbf\u95ee\u7684\u7f51\u9875\u6570\u91cf\uff1b\u5728\u4e00\u5b9a\u7edf\u8ba1\u5468\u671f\u5185\u7528\u6237\u6bcf\u6253\u5f00\u6216\u5237\u65b0\u4e00\u4e2a\u9875\u9762\u5c31\u8bb0\u5f551\u6b21\uff0c\u591a\u6b21\u6253\u5f00\u6216\u5237\u65b0\u540c\u4e00\u9875\u9762\u5219\u6d4f\u89c8\u91cf\u7d2f\u8ba1\u3002"),(0,r.yg)("li",{parentName:"ol"},"UV\uff08Unique Visitor\uff09\u72ec\u7acb\u8bbf\u5ba2\uff0c\u7edf\u8ba11\u5929\u5185\u8bbf\u95ee\u67d0\u7ad9\u70b9\u7684\u7528\u6237\u6570(\u4ee5cookie\u4e3a\u4f9d\u636e);\u8bbf\u95ee\u7f51\u7ad9\u7684\u4e00\u53f0\u7535\u8111\u5ba2\u6237\u7aef\u4e3a\u4e00\u4e2a\u8bbf\u5ba2\u3002\u53ef\u4ee5\u7406\u89e3\u6210\u8bbf\u95ee\u67d0\u7f51\u7ad9\u7684\u7535\u8111\u7684\u6570\u91cf\u3002\u7f51\u7ad9\u5224\u65ad\u6765\u8bbf\u7535\u8111\u7684\u8eab\u4efd\u662f\u901a\u8fc7\u6765\u8bbf\u7535\u8111\u7684cookies\u5b9e\u73b0\u7684\u3002\u5982\u679c\u66f4\u6362\u4e86IP\u540e\u4f46\u4e0d\u6e05\u9664cookies\uff0c\u518d\u8bbf\u95ee\u76f8\u540c\u7f51\u7ad9\uff0c\u8be5\u7f51\u7ad9\u7684\u7edf\u8ba1\u4e2dUV\u6570\u662f\u4e0d\u53d8\u7684\u3002\u5982\u679c\u7528\u6237\u4e0d\u4fdd\u5b58cookies\u8bbf\u95ee\u3001\u6e05\u9664\u4e86cookies\u6216\u8005\u66f4\u6362\u8bbe\u5907\u8bbf\u95ee\uff0c\u8ba1\u6570\u4f1a\u52a01\u300200:00-24:00\u5185\u76f8\u540c\u7684\u5ba2\u6237\u7aef\u591a\u6b21\u8bbf\u95ee\u53ea\u8ba1\u4e3a1\u4e2a\u8bbf\u5ba2\u3002"),(0,r.yg)("li",{parentName:"ol"},"IP\uff08Internet Protocol\uff09\u72ec\u7acbIP\u6570\uff0c\u662f\u63071\u5929\u5185\u591a\u5c11\u4e2a\u72ec\u7acb\u7684IP\u6d4f\u89c8\u4e86\u9875\u9762\uff0c\u5373\u7edf\u8ba1\u4e0d\u540c\u7684IP\u6d4f\u89c8\u7528\u6237\u6570\u91cf\u3002\u540c\u4e00IP\u4e0d\u7ba1\u8bbf\u95ee\u4e86\u51e0\u4e2a\u9875\u9762\uff0c\u72ec\u7acbIP\u6570\u5747\u4e3a1\uff1b\u4e0d\u540c\u7684IP\u6d4f\u89c8\u9875\u9762\uff0c\u8ba1\u6570\u4f1a\u52a01\u3002 IP\u662f\u57fa\u4e8e\u7528\u6237\u5e7f\u57df\u7f51IP\u5730\u5740\u6765\u533a\u5206\u4e0d\u540c\u7684\u8bbf\u95ee\u8005\u7684\uff0c\u6240\u4ee5\uff0c\u591a\u4e2a\u7528\u6237\uff08\u591a\u4e2a\u5c40\u57df\u7f51IP\uff09\u5728\u540c\u4e00\u4e2a\u8def\u7531\u5668\uff08\u540c\u4e00\u4e2a\u5e7f\u57df\u7f51IP\uff09\u5185\u4e0a\u7f51\uff0c\u53ef\u80fd\u88ab\u8bb0\u5f55\u4e3a\u4e00\u4e2a\u72ec\u7acbIP\u8bbf\u95ee\u8005\u3002\u5982\u679c\u7528\u6237\u4e0d\u65ad\u66f4\u6362IP\uff0c\u5219\u6709\u53ef\u80fd\u88ab\u591a\u6b21\u7edf\u8ba1\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u4f1a\u8bdd\u6b21\u6570\uff08\u7f51\u7ad9\u8bbf\u95ee\u91cf\uff09Session\uff0c\u4f1a\u8bdd\u662f\u6307\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u6bb5\u5185\u5728\u60a8\u7684\u7f51\u7ad9\u4e0a\u53d1\u751f\u7684\u4e00\u7cfb\u5217\u4e92\u52a8\uff0c\u6240\u4ee5\u4f1a\u8bdd\u6b21\u6570\u662f\u4e00\u6bb5\u65f6\u95f4\u5185\u7528\u6237\u5411\u60a8\u7684\u7f51\u7ad9\u53d1\u8d77\u7684\u4f1a\u8bdd\uff08Session\uff09\u603b\u6570\u91cf\u3002\u4e00\u6b21\u4f1a\u8bdd\u4f1a\u6d4f\u89c8\u4e00\u4e2a\u6216\u591a\u4e2a\u9875\u9762")),(0,r.yg)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://www.cnblogs.com/wunaozai/p/6073731.html"},"Nginx \u5355\u673a\u767e\u4e07QPS\u73af\u5883\u642d\u5efa"))))}u.isMDXComponent=!0}}]);