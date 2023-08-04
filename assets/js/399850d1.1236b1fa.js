"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=l,g=u["".concat(d,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:2},i=void 0,o={unversionedId:"study/db/\u65f6\u5e8f\u6570\u636e\u5e93/TDengine",id:"study/db/\u65f6\u5e8f\u6570\u636e\u5e93/TDengine",title:"TDengine",description:"\u5b98\u7f51",source:"@site/docs/study/db/\u65f6\u5e8f\u6570\u636e\u5e93/TDengine.md",sourceDirName:"study/db/\u65f6\u5e8f\u6570\u636e\u5e93",slug:"/study/db/\u65f6\u5e8f\u6570\u636e\u5e93/TDengine",permalink:"/docs/study/db/\u65f6\u5e8f\u6570\u636e\u5e93/TDengine",draft:!1,tags:[],version:"current",lastUpdatedAt:1691111432,formattedLastUpdatedAt:"2023\u5e748\u67084\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"studySidebar",previous:{title:"InfluxDB",permalink:"/docs/study/db/\u65f6\u5e8f\u6570\u636e\u5e93/InfluxDB"},next:{title:"Apache IoTDB",permalink:"/docs/study/db/\u65f6\u5e8f\u6570\u636e\u5e93/Apache IoTDB"}},d={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u8bc4\u4ef7",id:"\u8bc4\u4ef7",level:3},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:3},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:4},{value:"\u6784\u5efa&amp;\u5b89\u88c5\u3010\u6e90\u7801\u3011",id:"\u6784\u5efa\u5b89\u88c5\u6e90\u7801",level:4},{value:"\u6784\u4ef6\u5b89\u88c5\u3010\u5b89\u88c5\u5305\u3011",id:"\u6784\u4ef6\u5b89\u88c5\u5b89\u88c5\u5305",level:4},{value:"\u4f53\u9a8c SQL",id:"\u4f53\u9a8c-sql",level:4},{value:"\u96c6\u7fa4\u90e8\u7f72",id:"\u96c6\u7fa4\u90e8\u7f72",level:4},{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:3},{value:"\u91c7\u96c6\u91cf (Metric)",id:"\u91c7\u96c6\u91cf-metric",level:4},{value:"\u6807\u7b7e (Label/Tag)",id:"\u6807\u7b7e-labeltag",level:4},{value:"\u6570\u636e\u91c7\u96c6\u70b9 (Data Collection Point)",id:"\u6570\u636e\u91c7\u96c6\u70b9-data-collection-point",level:4},{value:"\u8868 (Table)",id:"\u8868-table",level:4},{value:"\u8d85\u7ea7\u8868 (STable)",id:"\u8d85\u7ea7\u8868-stable",level:4},{value:"\u5b50\u8868 (Subtable)",id:"\u5b50\u8868-subtable",level:4},{value:"\u5e93 (database)",id:"\u5e93-database",level:4},{value:"\u51c6\u5907\u6570\u636e",id:"\u51c6\u5907\u6570\u636e",level:3},{value:"\u538b\u6d4b",id:"\u538b\u6d4b",level:3},{value:"\u5751\u70b9\u6c47\u603b",id:"\u5751\u70b9\u6c47\u603b",level:3},{value:"\u9644\u5f55",id:"\u9644\u5f55",level:3},{value:"\u5f00\u6e90\u534f\u8bae\u8bf4\u660e",id:"\u5f00\u6e90\u534f\u8bae\u8bf4\u660e",level:4}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.taosdata.com/"},"\u5b98\u7f51"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/taosdata/TDengine"},"GitHub \u94fe\u63a5\u5730\u5740")),(0,l.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"\u5f00\u6e90\u534f\u8bae\uff1aAGPL V3\n\u5f00\u53d1\u8bed\u8a00\uff1aC\n\u5546\u4e1a\u516c\u53f8\uff1a\u5317\u4eac\u6d9b\u601d\u6570\u636e\u79d1\u6280\u6709\u9650\u516c\u53f8(TAOS Data) \uff1b\u6d9b\u601d\u6570\u636e\u91c7\u7528 AGPL \u8bb8\u53ef\u8bc1\uff0c\u5df2\u7ecf\u5c06 TDengine \u7684\u5185\u6838(\u5b58\u50a8\u3001\u8ba1\u7b97\u5f15\u64ce\u548c\u96c6\u7fa4\uff09100%\u5f00\u6e90\u3002\u6d9b\u601d\u6570\u636e\u5c06\u5c3d\u6700\u5927\u52aa\u529b\u6253\u9020\u5f00\u53d1\u8005\u793e\u533a\uff0c\u7ef4\u62a4\u8fd9\u4e2a\u5f00\u6e90\u7684\u5546\u4e1a\u6a21\u5f0f\uff0c\u76f8\u4fe1\u4e0d\u5c06\u6700\u6838\u5fc3\u7684\u4ee3\u7801\u5f00\u6e90\uff0c\u4efb\u4f55\u57fa\u7840\u8f6f\u4ef6\u90fd\u5c06\u65e0\u6cd5\u8d62\u5f97\u5e02\u573a\u3002\u6d9b\u601d\u6570\u636e\u5e0c\u671b\u901a\u8fc7\u5f00\u6e90\uff0c\u5feb\u901f\u83b7\u5f97\u5e02\u573a\u53cd\u9988\uff0c\u5b8c\u5584\u4ea7\u54c1\uff0c\u5b8c\u5584\u751f\u6001\uff0c\u800c\u4e14\u5438\u5f15\u66f4\u591a\u7684\u5f00\u53d1\u8005\u52a0\u5165\u5230\u8fd9\u4e2a\u9879\u76ee\u4e2d\u3002\n\u652f\u6301\u96c6\u7fa4\uff1a\u5f00\u6e90\u7248\u672c\u652f\u6301\u96c6\u7fa4"),(0,l.kt)("h3",{id:"\u8bc4\u4ef7"},"\u8bc4\u4ef7"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u56fd\u5185\u516c\u53f8\u4f17\u591a\u9879\u76ee\u4f7f\u7528\uff0c\u4f7f\u7528\u91cf\u8fd8\u662f\u5f88\u9ad8\u7684\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u5f00\u6e90\u65e2\u652f\u6301\u96c6\u7fa4\uff0c\u5927\u6570\u636e\u91cf\u7684\u62d3\u5c55\u662f\u6ca1\u95ee\u9898\u7684\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u6587\u6863\u76f8\u5bf9\u6765\u8bf4\u662f\u975e\u5e38\u53cb\u597d\u7684\uff0c\u65b9\u65b9\u9762\u9762\u4ff1\u5230\uff1b")),(0,l.kt)("h3",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,l.kt)("h4",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,l.kt)("p",null,"\u6587\u6863\u662f\u4e2d\u6587\u7684\uff0c\u8fd8\u662f\u4e0d\u9519\u7684\u3002",(0,l.kt)("a",{parentName:"p",href:"https://github.com/taosdata/TDengine/blob/develop/README-CN.md"},"\u5b89\u88c5\u6587\u6863")),(0,l.kt)("p",null,"\u95ee\u8fd0\u7ef4\u7ae5\u978b\u8981\u4e86\u9884\u7814\u4f7f\u7528\u7684\u670d\u52a1\u5668\uff0c\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"hostname"),(0,l.kt)("th",{parentName:"tr",align:null},"ip"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node57"),(0,l.kt)("td",{parentName:"tr",align:null},"192.168.0.57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node54"),(0,l.kt)("td",{parentName:"tr",align:null},"192.168.0.54")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node53"),(0,l.kt)("td",{parentName:"tr",align:null},"192.168.0.53")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node55"),(0,l.kt)("td",{parentName:"tr",align:null},"192.168.0.55")))),(0,l.kt)("p",null,"\u770b\u4e86\u4e00\u4e0b\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\u4e3a Centos 7\uff0c\u5927\u5bb6\u6839\u636e\u81ea\u5df1\u670d\u52a1\u5668\u7684\u64cd\u4f5c\u7cfb\u7edf\u5b89\u88c5\u4e0d\u540c\u547d\u4ee4\uff0c\u4ee5\u4e0b\u90fd\u662f\u57fa\u4e8e Centos7 \u7684"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"[root@centos ~]# cat /etc/redhat-release\nCentOS Linux release 7.9.2009 (Core)\n")),(0,l.kt)("p",null,"\u6839\u636e\u6587\u6863\u4f9d\u6b21\u6267\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install -y gcc gcc-c++ make cmake git\n\nsudo yum install -y java-1.8.0-openjdk\n\n#maven\u4e0d\u8981\u8fd9\u4e48\u5b89\u88c5\uff0c\u6709\u53ef\u80fd\u7248\u672c\u6bd4\u8f83\u4f4e \u53ea\u80fd\u8bf4\u6709\u53ef\u80fd\nsudo yum install -y maven\n\nsudo yum install zlib-devel xz-devel snappy-devel jansson jansson-devel pkgconfig libatomic libstdc++-static\n\ngit clone https://github.com/taosdata/TDengine.git\ncd TDengine\n\n#Go \u8fde\u63a5\u5668\u548c Grafana \u63d2\u4ef6\u5728\u5176\u4ed6\u72ec\u7acb\u4ed3\u5e93\uff0c\u5982\u679c\u5b89\u88c5\u5b83\u4eec\u7684\u8bdd\uff0c\u9700\u8981\u5728 TDengine \u76ee\u5f55\u4e0b\u901a\u8fc7\u6b64\u547d\u4ee4\u5b89\u88c5\uff1a\ngit submodule update --init --recursive\n")),(0,l.kt)("p",null,"\u6267\u884c\u6700\u540e\u7684\u547d\u4ee4\u7684\u65f6\u5019\uff0c\u4f1a\u62a5\u9519\uff0c\u9700\u8981\u914d\u7f6e git\uff0c\u3010YiRanCN\u3011\u548c\u3010",(0,l.kt)("a",{parentName:"p",href:"mailto:weic059@163.com"},"weic059@163.com"),"\u3011\u90fd\u662f\u6211\u7684 git \u8d26\u53f7\uff0c\u9700\u8981\u6839\u636e\u81ea\u5df1\u7684\u8d26\u53f7\u81ea\u884c\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'git config --global http.sslVerify false\ngit config --global user.name "YiRanCN"\ngit config --global user.email "xxx@163.com"\n\nssh-keygen -t rsa -C "YiRanCN"\n\n#\u83b7\u53d6 \u4e4b\u540e \u4e0d\u8981\u540e\u9762\u7684\u8d26\u53f7 \u590d\u5236\u4e0b\u6765\ncat /root/.ssh/id_rsa.pub\n')),(0,l.kt)("p",null,"\u6839\u636e\u3010cat /root/.ssh/id_rsa.pub\u3011\u8fd9\u4e2a\u5f97\u7ed3\u679c\uff0c\u653e\u5230 github \u8d26\u53f7\u7684\u3010SSH and GPG keys\u3011\u529f\u80fd\u4e0b\u9762\n",(0,l.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/276833/1654587900708-8145fd94-a69e-492a-bf83-41ddd0a2e789.png#averageHue=%23fefefe&clientId=u7121fde3-9777-4&from=paste&height=1174&id=ua6a234e7&name=image.png&originHeight=1174&originWidth=2428&originalType=binary&ratio=1&rotation=0&showTitle=false&size=317728&status=done&style=none&taskId=u1b8b6bce-4d72-4ca1-b2c2-48963f55d0b&title=&width=2428",alt:"image.png"})),(0,l.kt)("h4",{id:"\u6784\u5efa\u5b89\u88c5\u6e90\u7801"},"\u6784\u5efa&\u5b89\u88c5\u3010\u6e90\u7801\u3011"),(0,l.kt)("p",null,"\u6784\u5efa\u5f88\u7b80\u5355\uff0c\u81ea\u5e26\u6784\u5efa\u811a\u672c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./build.sh\n")),(0,l.kt)("h4",{id:"\u6784\u4ef6\u5b89\u88c5\u5b89\u88c5\u5305"},"\u6784\u4ef6\u5b89\u88c5\u3010\u5b89\u88c5\u5305\u3011"),(0,l.kt)("p",null,"\u4e0b\u8f7d\u5730\u5740\uff1a\u3010",(0,l.kt)("a",{parentName:"p",href:"https://docs.tdengine.com/get-started/#!"},"https://docs.tdengine.com/get-started/#!"),"\u3011\n\u6267\u884c\u3010rpm -i TDengine-server-2.6.0.1-Linux-x64.rpm\u3011\uff0c\u5982\u679c\u53ea\u662f\u5b89\u88c5\u975e\u96c6\u7fa4\u7248\u672c\u76f4\u63a5\u56de\u8f66\u5373\u53ef\u3002\n\u3010sudo systemctl start taosd\u3011\u542f\u52a8\uff1b\n\u6267\u884c\u3010sudo systemctl status taosd\u3011\u68c0\u67e5\u8fd0\u884c\u72b6\u6001"),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u5378\u8f7d\uff1a\n\u3010sudo rpm -qa|grep tdengine\u3011\n\u3010sudo rpm -e tdengine\u3011\n\u3010sudo rm -rf /var/lib/taos/","*","\u3011\u614e\u7528"),(0,l.kt)("h4",{id:"\u4f53\u9a8c-sql"},"\u4f53\u9a8c SQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"CREATE DATABASE demo;\nUSE demo;\nCREATE TABLE t (ts TIMESTAMP, speed INT);\nINSERT INTO t VALUES('2019-07-15 00:00:00', 10);\nINSERT INTO t VALUES('2019-07-15 01:00:00', 20);\nSELECT * FROM t;\n")),(0,l.kt)("p",null,"\u4e3a\u964d\u4f4e\u5b66\u4e60\u95e8\u69db\uff0cTDengine \u91c7\u7528\u4f20\u7edf\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u6a21\u578b\u7ba1\u7406\u6570\u636e\uff0c\u548c MySQL \u6ca1\u5565\u592a\u5927\u533a\u522b\u3002"),(0,l.kt)("h4",{id:"\u96c6\u7fa4\u90e8\u7f72"},"\u96c6\u7fa4\u90e8\u7f72"),(0,l.kt)("p",null,"\u56e0\u4e3a\u6211\u7684\u76ee\u6807\u662f\u96c6\u7fa4\uff0c\u6240\u4ee5\uff0c\u4e0a\u9762\u7684\u90fd\u662f\u5f00\u80c3\u5c0f\u83dc\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"hostname"),(0,l.kt)("th",{parentName:"tr",align:null},"ip"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node57"),(0,l.kt)("td",{parentName:"tr",align:null},"192.168.0.57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node54"),(0,l.kt)("td",{parentName:"tr",align:null},"192.168.0.54")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node53"),(0,l.kt)("td",{parentName:"tr",align:null},"192.168.0.53")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node55"),(0,l.kt)("td",{parentName:"tr",align:null},"192.168.0.55")))),(0,l.kt)("p",null,"\u4f7f\u7528\n\u3010hostnamectl set-hostname node57\u3011\n\u3010hostnamectl set-hostname node54\u3011\n\u3010hostnamectl set-hostname node53\u3011\n\u3010hostnamectl set-hostname node55\u3011\n\u547d\u4ee4\u4fee\u6539 hostname.\n\u5c06\u5982\u4e0b\u914d\u7f6e\u653e\u5230\u3010vim /etc/hosts\u3011\u6587\u4ef6\u5185"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"192.168.0.57 node57\n192.168.0.54 node54\n192.168.0.53 node53\n192.168.0.55 node55\n")),(0,l.kt)("p",null,"\u6240\u6709\u7684\u8282\u70b9\u5b89\u88c5\u4e00\u904d\u3002\n\u96c6\u7fa4\u642d\u5efa\u5b8c\u6210\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a\n",(0,l.kt)("img",{alt:"image.png",src:n(1388).Z,width:"1087",height:"153"})),(0,l.kt)("h3",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,l.kt)("h4",{id:"\u91c7\u96c6\u91cf-metric"},"\u91c7\u96c6\u91cf (Metric)"),(0,l.kt)("p",null,"\u91c7\u96c6\u91cf\u662f\u6307\u4f20\u611f\u5668\u3001\u8bbe\u5907\u6216\u5176\u4ed6\u7c7b\u578b\u91c7\u96c6\u70b9\u91c7\u96c6\u7684\u7269\u7406\u91cf\uff0c\u6bd4\u5982\u7535\u6d41\u3001\u7535\u538b\u3001\u6e29\u5ea6\u3001\u538b\u529b\u3001GPS \u4f4d\u7f6e\u7b49\uff0c\u662f\u968f\u65f6\u95f4\u53d8\u5316\u7684\uff0c\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u662f\u6574\u578b\u3001\u6d6e\u70b9\u578b\u3001\u5e03\u5c14\u578b\uff0c\u4e5f\u53ef\u662f\u5b57\u7b26\u4e32\u3002\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u5b58\u50a8\u7684\u91c7\u96c6\u91cf\u7684\u6570\u636e\u91cf\u8d8a\u6765\u8d8a\u5927\u3002"),(0,l.kt)("h4",{id:"\u6807\u7b7e-labeltag"},"\u6807\u7b7e (Label/Tag)"),(0,l.kt)("p",null,"\u6807\u7b7e\u662f\u6307\u4f20\u611f\u5668\u3001\u8bbe\u5907\u6216\u5176\u4ed6\u7c7b\u578b\u91c7\u96c6\u70b9\u7684\u9759\u6001\u5c5e\u6027\uff0c\u4e0d\u662f\u968f\u65f6\u95f4\u53d8\u5316\u7684\uff0c\u6bd4\u5982\u8bbe\u5907\u578b\u53f7\u3001\u989c\u8272\u3001\u8bbe\u5907\u7684\u6240\u5728\u5730\u7b49\uff0c\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\u3002\u867d\u7136\u662f\u9759\u6001\u7684\uff0c\u4f46 TDengine \u5bb9\u8bb8\u7528\u6237\u4fee\u6539\u3001\u5220\u9664\u6216\u589e\u52a0\u6807\u7b7e\u503c\u3002\u4e0e\u91c7\u96c6\u91cf\u4e0d\u4e00\u6837\u7684\u662f\uff0c\u968f\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u5b58\u50a8\u7684\u6807\u7b7e\u7684\u6570\u636e\u91cf\u4e0d\u4f1a\u6709\u4ec0\u4e48\u53d8\u5316\u3002"),(0,l.kt)("h4",{id:"\u6570\u636e\u91c7\u96c6\u70b9-data-collection-point"},"\u6570\u636e\u91c7\u96c6\u70b9 (Data Collection Point)"),(0,l.kt)("p",null,"\u6570\u636e\u91c7\u96c6\u70b9\u662f\u6307\u6309\u7167\u9884\u8bbe\u65f6\u95f4\u5468\u671f\u6216\u53d7\u4e8b\u4ef6\u89e6\u53d1\u91c7\u96c6\u7269\u7406\u91cf\u7684\u786c\u4ef6\u6216\u8f6f\u4ef6\u3002\u4e00\u4e2a\u6570\u636e\u91c7\u96c6\u70b9\u53ef\u4ee5\u91c7\u96c6\u4e00\u4e2a\u6216\u591a\u4e2a\u91c7\u96c6\u91cf\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u4f46\u8fd9\u4e9b\u91c7\u96c6\u91cf\u90fd\u662f\u540c\u4e00\u65f6\u523b\u91c7\u96c6\u7684\uff0c\u5177\u6709\u76f8\u540c\u7684\u65f6\u95f4\u6233"),"\u3002\u5bf9\u4e8e\u590d\u6742\u7684\u8bbe\u5907\uff0c\u5f80\u5f80\u6709\u591a\u4e2a\u6570\u636e\u91c7\u96c6\u70b9\uff0c\u6bcf\u4e2a\u6570\u636e\u91c7\u96c6\u70b9\u91c7\u96c6\u7684\u5468\u671f\u90fd\u53ef\u80fd\u4e0d\u4e00\u6837\uff0c\u800c\u4e14\u5b8c\u5168\u72ec\u7acb\uff0c\u4e0d\u540c\u6b65\u3002\u6bd4\u5982\u5bf9\u4e8e\u4e00\u53f0\u6c7d\u8f66\uff0c\u6709\u6570\u636e\u91c7\u96c6\u70b9\u4e13\u95e8\u91c7\u96c6 GPS \u4f4d\u7f6e\uff0c\u6709\u6570\u636e\u91c7\u96c6\u70b9\u4e13\u95e8\u91c7\u96c6\u53d1\u52a8\u673a\u72b6\u6001\uff0c\u6709\u6570\u636e\u91c7\u96c6\u70b9\u4e13\u95e8\u91c7\u96c6\u8f66\u5185\u7684\u73af\u5883\uff0c\u8fd9\u6837\u4e00\u53f0\u6c7d\u8f66\u5c31\u6709\u4e09\u4e2a\u6570\u636e\u91c7\u96c6\u70b9\u3002"),(0,l.kt)("h4",{id:"\u8868-table"},"\u8868 (Table)"),(0,l.kt)("p",null,"\u56e0\u4e3a\u91c7\u96c6\u91cf\u4e00\u822c\u662f\u7ed3\u6784\u5316\u6570\u636e\uff0c\u540c\u65f6\u4e3a\u964d\u4f4e\u5b66\u4e60\u95e8\u69db\uff0cTDengine \u91c7\u7528\u4f20\u7edf\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u6a21\u578b\u7ba1\u7406\u6570\u636e\u3002\u7528\u6237\u9700\u8981\u5148\u521b\u5efa\u5e93\uff0c\u7136\u540e\u521b\u5efa\u8868\uff0c\u4e4b\u540e\u624d\u80fd\u63d2\u5165\u6216\u67e5\u8be2\u6570\u636e\u3002\n\u4e3a\u5145\u5206\u5229\u7528\u5176\u6570\u636e\u7684\u65f6\u5e8f\u6027\u548c\u5176\u4ed6\u6570\u636e\u7279\u70b9\uff0cTDengine \u91c7\u53d6",(0,l.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u6570\u636e\u91c7\u96c6\u70b9\u4e00\u5f20\u8868"),"\u7684\u7b56\u7565\uff0c\u8981\u6c42\u5bf9\u6bcf\u4e2a\u6570\u636e\u91c7\u96c6\u70b9\u5355\u72ec\u5efa\u8868\uff08\u6bd4\u5982\u6709\u4e00\u5343\u4e07\u4e2a\u667a\u80fd\u7535\u8868\uff0c\u5c31\u9700\u521b\u5efa\u4e00\u5343\u4e07\u5f20\u8868\uff0c\u4e0a\u8ff0\u8868\u683c\u4e2d\u7684 d1001\uff0cd1002\uff0cd1003\uff0cd1004 \u90fd\u9700\u5355\u72ec\u5efa\u8868\uff09\uff0c\u7528\u6765\u5b58\u50a8\u8fd9\u4e2a\u6570\u636e\u91c7\u96c6\u70b9\u6240\u91c7\u96c6\u7684\u65f6\u5e8f\u6570\u636e\u3002\u8fd9\u79cd\u8bbe\u8ba1\u6709\u51e0\u5927\u4f18\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7531\u4e8e\u4e0d\u540c\u6570\u636e\u91c7\u96c6\u70b9\u4ea7\u751f\u6570\u636e\u7684\u8fc7\u7a0b\u5b8c\u5168\u72ec\u7acb\uff0c\u6bcf\u4e2a\u6570\u636e\u91c7\u96c6\u70b9\u7684\u6570\u636e\u6e90\u662f\u552f\u4e00\u7684\uff0c\u4e00\u5f20\u8868\u4e5f\u5c31\u53ea\u6709\u4e00\u4e2a\u5199\u5165\u8005\uff0c\u8fd9\u6837\u5c31\u53ef\u91c7\u7528\u65e0\u9501\u65b9\u5f0f\u6765\u5199\uff0c\u5199\u5165\u901f\u5ea6\u5c31\u80fd\u5927\u5e45\u63d0\u5347\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u4e00\u4e2a\u6570\u636e\u91c7\u96c6\u70b9\u800c\u8a00\uff0c\u5176\u4ea7\u751f\u7684\u6570\u636e\u662f\u6309\u7167\u65f6\u95f4\u6392\u5e8f\u7684\uff0c\u56e0\u6b64\u5199\u7684\u64cd\u4f5c\u53ef\u7528\u8ffd\u52a0\u7684\u65b9\u5f0f\u5b9e\u73b0\uff0c\u8fdb\u4e00\u6b65\u5927\u5e45\u63d0\u9ad8\u6570\u636e\u5199\u5165\u901f\u5ea6\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u6570\u636e\u91c7\u96c6\u70b9\u7684\u6570\u636e\u662f\u4ee5\u5757\u4e3a\u5355\u4f4d\u8fde\u7eed\u5b58\u50a8\u7684\u3002\u5982\u679c\u8bfb\u53d6\u4e00\u4e2a\u65f6\u95f4\u6bb5\u7684\u6570\u636e\uff0c\u5b83\u80fd\u5927\u5e45\u51cf\u5c11\u968f\u673a\u8bfb\u53d6\u64cd\u4f5c\uff0c\u6210\u6570\u91cf\u7ea7\u7684\u63d0\u5347\u8bfb\u53d6\u548c\u67e5\u8be2\u901f\u5ea6\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u6570\u636e\u5757\u5185\u90e8\uff0c\u91c7\u7528\u5217\u5f0f\u5b58\u50a8\uff0c\u5bf9\u4e8e\u4e0d\u540c\u6570\u636e\u7c7b\u578b\uff0c\u91c7\u7528\u4e0d\u540c\u538b\u7f29\u7b97\u6cd5\uff0c\u800c\u4e14\u7531\u4e8e\u4e00\u4e2a\u6570\u636e\u91c7\u96c6\u70b9\u7684\u91c7\u96c6\u91cf\u7684\u53d8\u5316\u662f\u7f13\u6162\u7684\uff0c\u538b\u7f29\u7387\u66f4\u9ad8\u3002")),(0,l.kt)("p",null,"\u5982\u679c\u91c7\u7528\u4f20\u7edf\u7684\u65b9\u5f0f\uff0c\u5c06\u591a\u4e2a\u6570\u636e\u91c7\u96c6\u70b9\u7684\u6570\u636e\u5199\u5165\u4e00\u5f20\u8868\uff0c\u7531\u4e8e\u7f51\u7edc\u5ef6\u65f6\u4e0d\u53ef\u63a7\uff0c\u4e0d\u540c\u6570\u636e\u91c7\u96c6\u70b9\u7684\u6570\u636e\u5230\u8fbe\u670d\u52a1\u5668\u7684\u65f6\u5e8f\u662f\u65e0\u6cd5\u4fdd\u8bc1\u7684\uff0c\u5199\u5165\u64cd\u4f5c\u662f\u8981\u6709\u9501\u4fdd\u62a4\u7684\uff0c\u800c\u4e14\u4e00\u4e2a\u6570\u636e\u91c7\u96c6\u70b9\u7684\u6570\u636e\u662f\u96be\u4ee5\u4fdd\u8bc1\u8fde\u7eed\u5b58\u50a8\u5728\u4e00\u8d77\u7684\u3002",(0,l.kt)("strong",{parentName:"p"},"\u91c7\u7528\u4e00\u4e2a\u6570\u636e\u91c7\u96c6\u70b9\u4e00\u5f20\u8868\u7684\u65b9\u5f0f\uff0c\u80fd\u6700\u5927\u7a0b\u5ea6\u7684\u4fdd\u8bc1\u5355\u4e2a\u6570\u636e\u91c7\u96c6\u70b9\u7684\u63d2\u5165\u548c\u67e5\u8be2\u7684\u6027\u80fd\u662f\u6700\u4f18\u7684\u3002"),"\nTDengine \u5efa\u8bae\u7528\u6570\u636e\u91c7\u96c6\u70b9\u7684\u540d\u5b57\uff08\u5982\u4e0a\u8868\u4e2d\u7684 D1001\uff09\u6765\u505a\u8868\u540d\u3002\u6bcf\u4e2a\u6570\u636e\u91c7\u96c6\u70b9\u53ef\u80fd\u540c\u65f6\u91c7\u96c6\u591a\u4e2a\u91c7\u96c6\u91cf\uff08\u5982\u4e0a\u8868\u4e2d\u7684 current\uff0cvoltage\uff0cphase\uff09\uff0c\u6bcf\u4e2a\u91c7\u96c6\u91cf\u5bf9\u5e94\u4e00\u5f20\u8868\u4e2d\u7684\u4e00\u5217\uff0c\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u662f\u6574\u578b\u3001\u6d6e\u70b9\u578b\u3001\u5b57\u7b26\u4e32\u7b49\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u8868\u7684\u7b2c\u4e00\u5217\u5fc5\u987b\u662f\u65f6\u95f4\u6233\uff0c\u5373\u6570\u636e\u7c7b\u578b\u4e3a timestamp\u3002\u5bf9\u91c7\u96c6\u91cf\uff0cTDengine \u5c06\u81ea\u52a8\u6309\u7167\u65f6\u95f4\u6233\u5efa\u7acb\u7d22\u5f15\uff0c\u4f46\u5bf9\u91c7\u96c6\u91cf\u672c\u8eab\u4e0d\u5efa\u4efb\u4f55\u7d22\u5f15\u3002\u6570\u636e\u7528\u5217\u5f0f\u5b58\u50a8\u65b9\u5f0f\u4fdd\u5b58\u3002\n\u5bf9\u4e8e\u590d\u6742\u7684\u8bbe\u5907\uff0c\u6bd4\u5982\u6c7d\u8f66\uff0c\u5b83\u6709\u591a\u4e2a\u6570\u636e\u91c7\u96c6\u70b9\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u4e3a\u4e00\u53f0\u6c7d\u8f66\u5efa\u7acb\u591a\u5f20\u8868\u3002"),(0,l.kt)("h4",{id:"\u8d85\u7ea7\u8868-stable"},"\u8d85\u7ea7\u8868 (STable)"),(0,l.kt)("p",null,"\u7531\u4e8e\u4e00\u4e2a\u6570\u636e\u91c7\u96c6\u70b9\u4e00\u5f20\u8868\uff0c\u5bfc\u81f4\u8868\u7684\u6570\u91cf\u5de8\u589e\uff0c\u96be\u4ee5\u7ba1\u7406\uff0c\u800c\u4e14\u5e94\u7528\u7ecf\u5e38\u9700\u8981\u505a\u91c7\u96c6\u70b9\u4e4b\u95f4\u7684\u805a\u5408\u64cd\u4f5c\uff0c\u805a\u5408\u7684\u64cd\u4f5c\u4e5f\u53d8\u5f97\u590d\u6742\u8d77\u6765\u3002\u4e3a\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cTDengine \u5f15\u5165\u8d85\u7ea7\u8868\uff08Super Table\uff0c\u7b80\u79f0\u4e3a STable\uff09\u7684\u6982\u5ff5\u3002\n\u8d85\u7ea7\u8868\u662f\u6307\u67d0\u4e00\u7279\u5b9a\u7c7b\u578b\u7684\u6570\u636e\u91c7\u96c6\u70b9\u7684\u96c6\u5408\u3002\u540c\u4e00\u7c7b\u578b\u7684\u6570\u636e\u91c7\u96c6\u70b9\uff0c\u5176\u8868\u7684\u7ed3\u6784\u662f\u5b8c\u5168\u4e00\u6837\u7684\uff0c\u4f46\u6bcf\u4e2a\u8868\uff08\u6570\u636e\u91c7\u96c6\u70b9\uff09\u7684\u9759\u6001\u5c5e\u6027\uff08\u6807\u7b7e\uff09\u662f\u4e0d\u4e00\u6837\u7684\u3002\u63cf\u8ff0\u4e00\u4e2a\u8d85\u7ea7\u8868\uff08\u67d0\u4e00\u7279\u5b9a\u7c7b\u578b\u7684\u6570\u636e\u91c7\u96c6\u70b9\u7684\u96c6\u5408\uff09\uff0c\u9664\u9700\u8981\u5b9a\u4e49\u91c7\u96c6\u91cf\u7684\u8868\u7ed3\u6784\u4e4b\u5916\uff0c\u8fd8\u9700\u8981\u5b9a\u4e49\u5176\u6807\u7b7e\u7684 schema\uff0c\u6807\u7b7e\u7684\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u662f\u6574\u6570\u3001\u6d6e\u70b9\u6570\u3001\u5b57\u7b26\u4e32\uff0c\u6807\u7b7e\u53ef\u4ee5\u6709\u591a\u4e2a\uff0c\u53ef\u4ee5\u4e8b\u540e\u589e\u52a0\u3001\u5220\u9664\u6216\u4fee\u6539\u3002\u5982\u679c\u6574\u4e2a\u7cfb\u7edf\u6709 N \u4e2a\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\u91c7\u96c6\u70b9\uff0c\u5c31\u9700\u8981\u5efa\u7acb N \u4e2a\u8d85\u7ea7\u8868\u3002\n\u5728 TDengine \u7684\u8bbe\u8ba1\u91cc\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u8868\u7528\u6765\u4ee3\u8868\u4e00\u4e2a\u5177\u4f53\u7684\u6570\u636e\u91c7\u96c6\u70b9\uff0c\u8d85\u7ea7\u8868\u7528\u6765\u4ee3\u8868\u4e00\u7ec4\u76f8\u540c\u7c7b\u578b\u7684\u6570\u636e\u91c7\u96c6\u70b9\u96c6\u5408"),"\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684\u8d85\u7ea7\u8868\u3001\u5b50\u8868\u7684\u8bbe\u8ba1\u5f88\u6709\u610f\u601d\uff0c\u5b50\u8868\u5c31\u662f\u67d0\u4e2a\u8bbe\u5907\uff08\u865a\u62df\u7684\uff0c\u5176\u4ed6\u4e5f\u884c\uff09\uff0c\u8fd9\u4e2a\u662f\u6570\u636e\u653e\u5230\u4e00\u5757\u7684\u6700\u5c0f\u5355\u4f4d\uff0c\u8fd9\u91cc\u548c\u5176\u4ed6\u65f6\u5e8f\u6570\u636e\u5e93\u7684\u5f88\u5927\u533a\u522b\uff0c\u53ef\u6709\u6709\u6548\u5904\u7406\u201c\u8bbe\u5907\u5220\u4e86\uff0c\u6570\u636e\u8fd8\u5b58\u5728\u7684\u95ee\u9898\u201d\u3002"),(0,l.kt)("h4",{id:"\u5b50\u8868-subtable"},"\u5b50\u8868 (Subtable)"),(0,l.kt)("p",null,"\u5f53\u4e3a\u67d0\u4e2a\u5177\u4f53\u6570\u636e\u91c7\u96c6\u70b9\u521b\u5efa\u8868\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u8d85\u7ea7\u8868\u7684\u5b9a\u4e49\u505a\u6a21\u677f\uff0c\u540c\u65f6\u6307\u5b9a\u8be5\u5177\u4f53\u91c7\u96c6\u70b9\uff08\u8868\uff09\u7684\u5177\u4f53\u6807\u7b7e\u503c\u6765\u521b\u5efa\u8be5\u8868\u3002",(0,l.kt)("strong",{parentName:"p"},"\u901a\u8fc7\u8d85\u7ea7\u8868\u521b\u5efa\u7684\u8868\u79f0\u4e4b\u4e3a\u5b50\u8868"),"\u3002\u6b63\u5e38\u7684\u8868\u4e0e\u5b50\u8868\u7684\u5dee\u5f02\u5728\u4e8e\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b50\u8868\u5c31\u662f\u8868\uff0c\u56e0\u6b64\u6240\u6709\u6b63\u5e38\u8868\u7684 SQL \u64cd\u4f5c\u90fd\u53ef\u4ee5\u5728\u5b50\u8868\u4e0a\u6267\u884c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5b50\u8868\u5728\u6b63\u5e38\u8868\u7684\u57fa\u7840\u4e0a\u6709\u6269\u5c55\uff0c\u5b83\u662f\u5e26\u6709\u9759\u6001\u6807\u7b7e\u7684\uff0c\u800c\u4e14\u8fd9\u4e9b\u6807\u7b7e\u53ef\u4ee5\u4e8b\u540e\u589e\u52a0\u3001\u5220\u9664\u3001\u4fee\u6539\uff0c\u800c\u6b63\u5e38\u7684\u8868\u6ca1\u6709\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5b50\u8868\u4e00\u5b9a\u5c5e\u4e8e\u4e00\u5f20\u8d85\u7ea7\u8868\uff0c\u4f46\u666e\u901a\u8868\u4e0d\u5c5e\u4e8e\u4efb\u4f55\u8d85\u7ea7\u8868"),(0,l.kt)("li",{parentName:"ol"},"\u666e\u901a\u8868\u65e0\u6cd5\u8f6c\u4e3a\u5b50\u8868\uff0c\u5b50\u8868\u4e5f\u65e0\u6cd5\u8f6c\u4e3a\u666e\u901a\u8868\u3002")),(0,l.kt)("p",null,"\u8d85\u7ea7\u8868\u4e0e\u4e0e\u57fa\u4e8e\u8d85\u7ea7\u8868\u5efa\u7acb\u7684\u5b50\u8868\u4e4b\u95f4\u7684\u5173\u7cfb\u8868\u73b0\u5728\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e00\u5f20\u8d85\u7ea7\u8868\u5305\u542b\u6709\u591a\u5f20\u5b50\u8868\uff0c\u8fd9\u4e9b\u5b50\u8868\u5177\u6709\u76f8\u540c\u7684\u91c7\u96c6\u91cf schema\uff0c\u4f46\u5e26\u6709\u4e0d\u540c\u7684\u6807\u7b7e\u503c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u80fd\u901a\u8fc7\u5b50\u8868\u8c03\u6574\u6570\u636e\u6216\u6807\u7b7e\u7684\u6a21\u5f0f\uff0c\u5bf9\u4e8e\u8d85\u7ea7\u8868\u7684\u6570\u636e\u6a21\u5f0f\u4fee\u6539\u7acb\u5373\u5bf9\u6240\u6709\u7684\u5b50\u8868\u751f\u6548\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8d85\u7ea7\u8868\u53ea\u5b9a\u4e49\u4e00\u4e2a\u6a21\u677f\uff0c\u81ea\u8eab\u4e0d\u5b58\u50a8\u4efb\u4f55\u6570\u636e\u6216\u6807\u7b7e\u4fe1\u606f\u3002\u56e0\u6b64\uff0c\u4e0d\u80fd\u5411\u4e00\u4e2a\u8d85\u7ea7\u8868\u5199\u5165\u6570\u636e\uff0c\u53ea\u80fd\u5c06\u6570\u636e\u5199\u5165\u5b50\u8868\u4e2d\u3002")),(0,l.kt)("p",null,"\u67e5\u8be2\u65e2\u53ef\u4ee5\u5728\u8868\u4e0a\u8fdb\u884c\uff0c\u4e5f\u53ef\u4ee5\u5728\u8d85\u7ea7\u8868\u4e0a\u8fdb\u884c\u3002\u9488\u5bf9\u8d85\u7ea7\u8868\u7684\u67e5\u8be2\uff0cTDengine \u5c06\u628a\u6240\u6709\u5b50\u8868\u4e2d\u7684\u6570\u636e\u89c6\u4e3a\u4e00\u4e2a\u6574\u4f53\u6570\u636e\u96c6\u8fdb\u884c\u5904\u7406\uff0c\u4f1a\u5148\u628a\u6ee1\u8db3\u6807\u7b7e\u8fc7\u6ee4\u6761\u4ef6\u7684\u8868\u4ece\u8d85\u7ea7\u8868\u4e2d\u627e\u51fa\u6765\uff0c\u7136\u540e\u518d\u626b\u63cf\u8fd9\u4e9b\u8868\u7684\u65f6\u5e8f\u6570\u636e\uff0c\u8fdb\u884c\u805a\u5408\u64cd\u4f5c\uff0c\u8fd9\u6837\u9700\u8981\u626b\u63cf\u7684\u6570\u636e\u96c6\u4f1a\u5927\u5e45\u51cf\u5c11\uff0c\u4ece\u800c\u663e\u8457\u63d0\u9ad8\u67e5\u8be2\u7684\u6027\u80fd\u3002\u672c\u8d28\u4e0a\uff0cTDengine \u901a\u8fc7\u5bf9\u8d85\u7ea7\u8868\u67e5\u8be2\u7684\u652f\u6301\uff0c\u5b9e\u73b0\u4e86\u591a\u4e2a\u540c\u7c7b\u6570\u636e\u91c7\u96c6\u70b9\u7684\u9ad8\u6548\u805a\u5408\u3002\nTDengine \u7cfb\u7edf\u5efa\u8bae\u7ed9\u4e00\u4e2a\u6570\u636e\u91c7\u96c6\u70b9\u5efa\u8868\uff0c\u9700\u8981\u901a\u8fc7\u8d85\u7ea7\u8868\u5efa\u8868\uff0c\u800c\u4e0d\u662f\u5efa\u666e\u901a\u8868\u3002"),(0,l.kt)("h4",{id:"\u5e93-database"},"\u5e93 (database)"),(0,l.kt)("p",null,"\u5e93\u662f\u6307\u4e00\u7ec4\u8868\u7684\u96c6\u5408\u3002TDengine \u5bb9\u8bb8\u4e00\u4e2a\u8fd0\u884c\u5b9e\u4f8b\u6709\u591a\u4e2a\u5e93\uff0c\u800c\u4e14\u6bcf\u4e2a\u5e93\u53ef\u4ee5\u914d\u7f6e\u4e0d\u540c\u7684\u5b58\u50a8\u7b56\u7565\u3002\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\u91c7\u96c6\u70b9\u5f80\u5f80\u5177\u6709\u4e0d\u540c\u7684\u6570\u636e\u7279\u5f81\uff0c\u5305\u62ec\u6570\u636e\u91c7\u96c6\u9891\u7387\u7684\u9ad8\u4f4e\uff0c\u6570\u636e\u4fdd\u7559\u65f6\u95f4\u7684\u957f\u77ed\uff0c\u526f\u672c\u7684\u6570\u76ee\uff0c\u6570\u636e\u5757\u7684\u5927\u5c0f\uff0c\u662f\u5426\u5141\u8bb8\u66f4\u65b0\u6570\u636e\u7b49\u7b49\u3002\u4e3a\u4e86\u5728\u5404\u79cd\u573a\u666f\u4e0b TDengine \u90fd\u80fd\u6700\u5927\u6548\u7387\u7684\u5de5\u4f5c\uff0cTDengine \u5efa\u8bae\u5c06\u4e0d\u540c\u6570\u636e\u7279\u5f81\u7684\u8d85\u7ea7\u8868\u521b\u5efa\u5728\u4e0d\u540c\u7684\u5e93\u91cc\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u5e93\u91cc\uff0c\u53ef\u4ee5\u6709\u4e00\u5230\u591a\u4e2a\u8d85\u7ea7\u8868\uff0c\u4f46\u4e00\u4e2a\u8d85\u7ea7\u8868\u53ea\u5c5e\u4e8e\u4e00\u4e2a\u5e93\u3002\u4e00\u4e2a\u8d85\u7ea7\u8868\u6240\u62e5\u6709\u7684\u5b50\u8868\u5168\u90e8\u5b58\u5728\u4e00\u4e2a\u5e93\u91cc\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u4e00\u5b9a\u8981\u6ce8\u610f\uff0c\u6211\u4eec\u5728\u8bbe\u8ba1\u5e93\u7684\u65f6\u5019\uff0c\u4e00\u5b9a\u8981\u6839\u636e\u6570\u636e\u7684\u60c5\u51b5\u6765\uff0c\u4f8b\u5982\u4e0a\u4e0b\u7ebf\u6d88\u606f\u548c\u8bbe\u5907\u5386\u53f2\u6570\u636e\u5e94\u8be5\u5206\u4e24\u4e2a\u5e93\uff0c\u56e0\u4e3a\u4ed6\u4eec\u7684\u6570\u636e\u4fdd\u7559\u65f6\u95f4\u4e0d\u540c\uff0c\u8bbe\u5907\u4e0a\u4e0b\u7ebf\u6d88\u606f\u5b58 1 \u5e74\u5c31\u5f88\u591a\u4e86\uff0c\u8bbe\u5907\u5386\u53f2\u6570\u636e\u53ef\u80fd\u9700\u8981\u5b58 5 \u5e74\u4ee5\u4e0a\u3002"),(0,l.kt)("h3",{id:"\u51c6\u5907\u6570\u636e"},"\u51c6\u5907\u6570\u636e"),(0,l.kt)("p",null,"\u7ed3\u5408\u4e0a\u9762\u7684\u6982\u5ff5\u4ee5\u53ca SQL \u8bed\u6cd5\u53ef\u4ee5\u521b\u5efa\u8868\u505a\u538b\u6d4b\u4e86\uff0cSQL \u662f\u53c2\u8003\u76ee\u524d influxdb \u5b58\u50a8\u7684\u5386\u53f2\u6570\u636e\u6765\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'# \u4fdd\u5b5810\u5e74 1\u4e2a\u526f\u672c\ncreate database ucloud keep 3650 REPLICA 2;\nuse ucloud;\n\n#\u521b\u5efa\u8d85\u7ea7\u8868\ncreate stable datapoint_record(ts timestamp,value double,StringValue NCHAR(128),DataType NCHAR(10),StorageFlag int)\n tags(DeviceId NCHAR(32),DataPointId int,SlaveIndex int);\n#\u63d2\u5165\u6d4b\u8bd5\u6570\u636e\ninsert into D00500221122700004100_1_1 using datapoint_record\ntags(00500221122700004100,1,1)\nvalues(now(),1,"1","ushort",1);\ninsert into D00500221122700004100_1_2 using datapoint_record\ntags(00500221122700004100,1,2)\nvalues(now(),1,"1","ushort",1);\n#\u67e5\u8be2\nselect * from datapoint_record;\n\n')),(0,l.kt)("p",null,"\u6700\u91cd\u70b9\u7684\u5176\u5b9e\u662f\u8868\u7ed3\u6784\u7684\u8bbe\u8ba1\u4e86\uff0c\u7ed3\u5408\u6211\u4eec\u7684\u4e1a\u52a1\uff0c\u6211\u4eec\u5e73\u53f0\u7684\u201c\u91c7\u96c6\u91cf\u201d\u662f\u914d\u7f6e\u51fa\u6765\uff0c\u6240\u4ee5\u91c7\u96c6\u91cf\u662f\u4e0d\u56fa\u5b9a\u7684\uff0c\u7528\u6237\u4f1a\u6839\u636e\u81ea\u5df1\u7684\u4e8b\u60c5\u60c5\u51b5\u52a8\u6001\u7684\u589e\u5220\u3002\u6240\u4ee5\u6211\u4eec\u7684\u5b50\u8868\u53ea\u80fd\u6709\u4e00\u4e2a\u91c7\u96c6\u91cf\uff0c\u8fd9\u4e2a\u662f\u5173\u952e\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u76ee\u524d\u7528\u7684\u65f6\u5e8f\u6570\u636e\u5e93\u662f InfluxDB\uff0c\u6240\u4ee5\u9700\u8981\u6709\u4e2a\u4e2d\u95f4\u4ef6\uff0c\u8f6f\u5b9e\u65f6\u540c\u6b65\u5230 TDengine\u3002\u5b9e\u73b0\u601d\u8def\u4e3a\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b9a\u65f6\u6bcf\u5206\u949f\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u5bfc\u51fa InfluxDB \u6570\u636e\uff0c\u4e00\u5206\u949f\u7684\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u8bfb\u53d6\u8fd9\u4e2a\u5bfc\u51fa\u6587\u4ef6\uff0c\u5e76\u63d2\u5165\u5230 TDengine \u4e2d\uff1b")),(0,l.kt)("h3",{id:"\u538b\u6d4b"},"\u538b\u6d4b"),(0,l.kt)("p",null,"\u81ea\u5e26 taosBenchmark \u6027\u80fd\u6d4b\u8bd5\u5de5\u5177\uff0c\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u65e0\u547d\u4ee4\u884c\u53c2\u6570\u76f4\u63a5\u8fd0\u884c taosBenchmark\uff0c\u56de\u8f66\u76f4\u63a5\u6267\u884c\uff0c\u9ed8\u8ba4\u5728 TDengine \u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a test \u7684\u6570\u636e\u5e93\uff0ctest \u6570\u636e\u5e93\u4e0b\u521b\u5efa\u540d\u4e3a meters \u7684\u4e00\u5f20\u8d85\u7ea7\u8868\uff0c\u8d85\u7ea7\u8868\u4e0b\u521b\u5efa 10000 \u5f20\u8868\uff0c\u6bcf\u5f20\u8868\u4e2d\u5199\u5165 10000 \u6761\u8bb0\u5f55\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(5017).Z,width:"1435",height:"48"}),"\n1w \u5f20\u8868\u7528\u4e86\u63a5\u8fd1 4 \u5206\u949f\u521b\u5efa\u5b8c\u6210\uff0c\u5f53\u7136\u4e86\u548c\u6d4b\u8bd5\u670d\u52a1\u5668\u7684\u673a\u68b0\u786c\u76d8\u5e94\u8be5\u6709\u5f88\u5927\u5173\u7cfb\uff1b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(3849).Z,width:"1237",height:"58"}),"\n\u63d2\u5165 1 \u4ebf\u8c03\u6570\u636e\u7528\u4e86 18 \u79d2\uff0c\u5f53\u7136\u4e86\u548c\u6d4b\u8bd5\u670d\u52a1\u5668\u7684\u673a\u68b0\u786c\u76d8\u5e94\u8be5\u6709\u5f88\u5927\u5173\u7cfb\uff1b"),(0,l.kt)("h3",{id:"\u5751\u70b9\u6c47\u603b"},"\u5751\u70b9\u6c47\u603b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u793e\u533a\u7248\u672c\u4e0d\u652f\u6301\u201c\u5220\u9664\u6307\u5b9a\u65f6\u95f4\u8303\u56f4\u7684\u6570\u636e\u201d\u7684\u529f\u80fd\uff0c\u4f01\u4e1a\u7248\u624d\u652f\u6301\uff0c\u4f46\u662f\u6709\u4e9b\u7279\u6b8a\u60c5\u51b5\u8fd8\u662f\u9700\u8981\u5220\u9664\u6570\u636e\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7\u589e\u52a0\u201c\u5220\u9664\u6807\u8bb0\u5b57\u6bb5\u201d\u6765\u8fc2\u56de\u5904\u7406\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u793e\u533a\u7248\u672c\u4e0d\u652f\u6301\u201cUAF\u201d\uff0c\u4e5f\u5c31\u662f\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\uff0c\u67d0\u4e9b\u7279\u6b8a\u805a\u5408\u6216\u8ba1\u7b97\u7b97\u6cd5\u65e0\u6cd5\u505a\u5230\uff0c\u4e0d\u8fc7\u793e\u533a\u7248\u672c\u63d0\u4f9b\u7684\u5df2\u7ecf\u662f\u7edd\u5bf9\u90e8\u5206\u4e86\u3002")),(0,l.kt)("h3",{id:"\u9644\u5f55"},"\u9644\u5f55"),(0,l.kt)("h4",{id:"\u5f00\u6e90\u534f\u8bae\u8bf4\u660e"},"\u5f00\u6e90\u534f\u8bae\u8bf4\u660e"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(4945).Z,width:"750",height:"454"})))}m.isMDXComponent=!0},1388:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-86f297ccfad12004e3b4a982a06dbdb1.png"},5017:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-c10305180fd1dff6eef758f70d21f175.png"},3849:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-e91119dc93e175c318646768f42457a1.png"},4945:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4-708f8212de488f91684592cc80775af3.png"}}]);