"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7891],{15680:(e,t,r)=>{r.d(t,{xA:()=>i,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),u=s(r),y=o,f=u["".concat(l,".").concat(y)]||u[y]||d[y]||p;return r?n.createElement(f,c(c({ref:t},i),{},{components:r})):n.createElement(f,c({ref:t},i))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,c=new Array(p);c[0]=y;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<p;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>p,metadata:()=>a,toc:()=>s});var n=r(58168),o=(r(96540),r(15680));const p={},c=void 0,a={unversionedId:"study/devops/Linux\u8fd0\u7ef4-proc",id:"study/devops/Linux\u8fd0\u7ef4-proc",title:"Linux\u8fd0\u7ef4-proc",description:"/proc/",source:"@site/docs/study/devops/Linux\u8fd0\u7ef4-proc.md",sourceDirName:"study/devops",slug:"/study/devops/Linux\u8fd0\u7ef4-proc",permalink:"/docs/study/devops/Linux\u8fd0\u7ef4-proc",draft:!1,tags:[],version:"current",lastUpdatedAt:1736407756,formattedLastUpdatedAt:"2025\u5e741\u67089\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Linux\u8fd0\u7ef4-GRUB",permalink:"/docs/study/devops/Linux\u8fd0\u7ef4-GRUB"},next:{title:"Linux\u8fd0\u7ef4-systemmd",permalink:"/docs/study/devops/Linux\u8fd0\u7ef4-systemmd"}},l={},s=[{value:"/proc/",id:"proc",level:3},{value:"\u4e3b\u8981\u5185\u5bb9\u548c\u529f\u80fd",id:"\u4e3b\u8981\u5185\u5bb9\u548c\u529f\u80fd",level:3},{value:"\u8fdb\u7a0b\u76f8\u5173\u4fe1\u606f",id:"\u8fdb\u7a0b\u76f8\u5173\u4fe1\u606f",level:4},{value:"\u7cfb\u7edf\u4fe1\u606f",id:"\u7cfb\u7edf\u4fe1\u606f",level:4},{value:"\u5185\u6838\u53c2\u6570\u76f8\u5173\u4fe1\u606f",id:"\u5185\u6838\u53c2\u6570\u76f8\u5173\u4fe1\u606f",level:4},{value:"\u8bbe\u5907\u9a71\u52a8\u4fe1\u606f\uff08\u90e8\u5206\uff09",id:"\u8bbe\u5907\u9a71\u52a8\u4fe1\u606f\u90e8\u5206",level:4},{value:"\u5176\u4ed6\u7c7b\u4f3c/proc\u7684\u865a\u62df\u6587\u4ef6\u7cfb\u7edf",id:"\u5176\u4ed6\u7c7b\u4f3cproc\u7684\u865a\u62df\u6587\u4ef6\u7cfb\u7edf",level:3}],i={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"proc"},"/proc/"),(0,o.yg)("p",null,"/proc\u662f\u4e00\u4e2a\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u79cd\u673a\u5236\u6765\u8bbf\u95ee\u5185\u6838\u5185\u90e8\u6570\u636e\u7ed3\u6784\u3001\u8fdb\u7a0b\u4fe1\u606f\u4ee5\u53ca\u7cfb\u7edf\u786c\u4ef6\u4fe1\u606f\u7b49\u5185\u5bb9\u3002\u5b83\u662f Linux \u64cd\u4f5c\u7cfb\u7edf\u7279\u6709\u7684\uff0c\u5728\u5176\u4ed6\u7c7b Unix \u7cfb\u7edf\u4e2d\u4e5f\u53ef\u80fd\u6709\u7c7b\u4f3c\u7684\u5b9e\u73b0\u3002\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u548c\u5b50\u76ee\u5f55\u5e76\u4e0d\u662f\u5b58\u50a8\u5728\u78c1\u76d8\u4e0a\u7684\u771f\u5b9e\u6587\u4ef6\uff0c\u800c\u662f\u7531\u5185\u6838\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u751f\u6210\u7684\uff0c\u7528\u4e8e\u5411\u7528\u6237\u7a7a\u95f4\u63d0\u4f9b\u7cfb\u7edf\u7684\u5404\u79cd\u5b9e\u65f6\u4fe1\u606f\u3002"),(0,o.yg)("h3",{id:"\u4e3b\u8981\u5185\u5bb9\u548c\u529f\u80fd"},"\u4e3b\u8981\u5185\u5bb9\u548c\u529f\u80fd"),(0,o.yg)("h4",{id:"\u8fdb\u7a0b\u76f8\u5173\u4fe1\u606f"},"\u8fdb\u7a0b\u76f8\u5173\u4fe1\u606f"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# \u5305\u542b\u4e86\u542f\u52a8\u8be5\u8fdb\u7a0b\u7684\u5b8c\u6574\u547d\u4ee4\u884c\u53c2\u6570\u3002\ncat /proc/[PID]/cmdline\n# \u63d0\u4f9b\u4e86\u5173\u4e8e\u8be5\u8fdb\u7a0b\u7684\u72b6\u6001\u4fe1\u606f\uff0c\u5982\u8fdb\u7a0b ID\u3001\u8fdb\u7a0b\u72b6\u6001\uff08\u8fd0\u884c\u3001\u7761\u7720\u3001\u50f5\u5c38\u7b49\uff09\u3001\u7236\u8fdb\u7a0b ID\u3001\u7528\u6237 ID\u3001\u7ec4 ID\u3001\u865a\u62df\u5185\u5b58\u5927\u5c0f\u3001\u7269\u7406\u5185\u5b58\u5927\u5c0f\u7b49\u3002\u8fd9\u4e9b\u4fe1\u606f\u5bf9\u4e8e\u76d1\u63a7\u548c\u7ba1\u7406\u8fdb\u7a0b\u975e\u5e38\u6709\u7528\u3002\ncat /proc/[PID]/status\n# \u8fd9\u662f\u4e00\u4e2a\u76ee\u5f55\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u8fdb\u7a0b\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u7684\u94fe\u63a5\u3002\u6bcf\u4e2a\u6587\u4ef6\u63cf\u8ff0\u7b26\u5bf9\u5e94\u7684\u6587\u4ef6\u6216\u8bbe\u5907\u90fd\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e9b\u94fe\u63a5\u8bbf\u95ee\uff0c\u8fd9\u6709\u52a9\u4e8e\u4e86\u89e3\u8fdb\u7a0b\u6b63\u5728\u4f7f\u7528\u7684\u6587\u4ef6\u8d44\u6e90\u3002\nll /proc/[PID]/fd\n")),(0,o.yg)("h4",{id:"\u7cfb\u7edf\u4fe1\u606f"},"\u7cfb\u7edf\u4fe1\u606f"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# \u5305\u542b\u4e86\u5173\u4e8e CPU \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5982 CPU \u578b\u53f7\u3001\u6838\u5fc3\u6570\u3001\u7f13\u5b58\u5927\u5c0f\u3001CPU \u9891\u7387\u7b49\u3002\u901a\u8fc7\u67e5\u770b\u8fd9\u4e2a\u6587\u4ef6\uff0c\u53ef\u4ee5\u4e86\u89e3\u7cfb\u7edf\u7684 CPU \u6027\u80fd\u548c\u7279\u6027\u3002\u4f8b\u5982\uff0c\u5728\u591a\u6838\u5904\u7406\u5668\u7cfb\u7edf\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770b\u6bcf\u4e2a\u6838\u5fc3\u7684\u8be6\u7ec6\u53c2\u6570\u3002\ncat /proc/cpuinfo\n# \u63d0\u4f9b\u4e86\u7cfb\u7edf\u5185\u5b58\u7684\u603b\u4f53\u4fe1\u606f\uff0c\u5305\u62ec\u603b\u5185\u5b58\u3001\u5df2\u4f7f\u7528\u5185\u5b58\u3001\u7a7a\u95f2\u5185\u5b58\u3001\u7f13\u5b58\u5185\u5b58\u3001\u4ea4\u6362\u7a7a\u95f4\u5927\u5c0f\u7b49\u3002\u8fd9\u4e9b\u4fe1\u606f\u5bf9\u4e8e\u7cfb\u7edf\u6027\u80fd\u8c03\u4f18\u548c\u5185\u5b58\u7ba1\u7406\u975e\u5e38\u91cd\u8981\u3002\ncat /proc/meminfo\n# \u8bb0\u5f55\u4e86\u7cfb\u7edf\u5728\u8fc7\u53bb 1 \u5206\u949f\u30015 \u5206\u949f\u548c 15 \u5206\u949f\u5185\u7684\u5e73\u5747\u8d1f\u8f7d\u3002\u5e73\u5747\u8d1f\u8f7d\u662f\u6307\u5355\u4f4d\u65f6\u95f4\u5185\u7cfb\u7edf\u5904\u4e8e\u53ef\u8fd0\u884c\u72b6\u6001\u548c\u4e0d\u53ef\u4e2d\u65ad\u72b6\u6001\u7684\u5e73\u5747\u8fdb\u7a0b\u6570\uff0c\u5b83\u53ef\u4ee5\u5e2e\u52a9\u5224\u65ad\u7cfb\u7edf\u7684\u7e41\u5fd9\u7a0b\u5ea6\u3002\ncat /proc/loadavg\n")),(0,o.yg)("h4",{id:"\u5185\u6838\u53c2\u6570\u76f8\u5173\u4fe1\u606f"},"\u5185\u6838\u53c2\u6570\u76f8\u5173\u4fe1\u606f"),(0,o.yg)("p",null,"/proc/sys\u76ee\u5f55\u4e0b\u7684\u5185\u5bb9\u4e0e/etc/sysctl.conf\u6587\u4ef6\u76f8\u5173\u3002\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u7528\u4e8e\u67e5\u770b\u548c\u4fee\u6539\u5185\u6838\u53c2\u6570\u3002\u4f8b\u5982\uff0c/proc/sys/net/ipv4/ip_forward\u6587\u4ef6\u5bf9\u5e94net.ipv4.ip_forward\u5185\u6838\u53c2\u6570\uff0c\u901a\u8fc7\u8bfb\u53d6\u6216\u5199\u5165\u8fd9\u4e2a\u6587\u4ef6\u53ef\u4ee5\u67e5\u770b\u6216\u4fee\u6539\u8be5\u53c2\u6570\u7684\u503c\u3002"),(0,o.yg)("h4",{id:"\u8bbe\u5907\u9a71\u52a8\u4fe1\u606f\u90e8\u5206"},"\u8bbe\u5907\u9a71\u52a8\u4fe1\u606f\uff08\u90e8\u5206\uff09"),(0,o.yg)("p",null,"\u5728/proc\u76ee\u5f55\u4e0b\u8fd8\u53ef\u80fd\u5b58\u5728\u4e00\u4e9b\u4e0e\u8bbe\u5907\u9a71\u52a8\u76f8\u5173\u7684\u4fe1\u606f\uff0c\u8fd9\u4e9b\u4fe1\u606f\u7684\u5177\u4f53\u5185\u5bb9\u548c\u4f4d\u7f6e\u53ef\u80fd\u56e0\u8bbe\u5907\u548c\u9a71\u52a8\u7684\u4e0d\u540c\u800c\u6709\u6240\u5dee\u5f02\u3002\u4f8b\u5982\uff0c/proc/bus/\u76ee\u5f55\u4e0b\u53ef\u80fd\u5305\u542b\u4e86\u5173\u4e8e\u7cfb\u7edf\u603b\u7ebf\u548c\u8fde\u63a5\u5230\u603b\u7ebf\u4e0a\u7684\u8bbe\u5907\u7684\u4fe1\u606f\u3002"),(0,o.yg)("h3",{id:"\u5176\u4ed6\u7c7b\u4f3cproc\u7684\u865a\u62df\u6587\u4ef6\u7cfb\u7edf"},"\u5176\u4ed6\u7c7b\u4f3c/proc\u7684\u865a\u62df\u6587\u4ef6\u7cfb\u7edf"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"sysfs(/sys/) sysfs \u662f Linux \u5185\u6838\u63d0\u4f9b\u7684\u53e6\u4e00\u4e2a\u91cd\u8981\u7684\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\uff0c\u6302\u8f7d\u70b9\u901a\u5e38\u662f/sys\u3002\u5b83\u4e3b\u8981\u7528\u4e8e\u5c06\u5185\u6838\u4e2d\u7684\u8bbe\u5907\u9a71\u52a8\u6a21\u578b\u5bfc\u51fa\u5230\u7528\u6237\u7a7a\u95f4\uff0c\u8ba9\u7528\u6237\u80fd\u591f\u65b9\u4fbf\u5730\u8bbf\u95ee\u548c\u7ba1\u7406\u7cfb\u7edf\u4e2d\u7684\u8bbe\u5907\u76f8\u5173\u4fe1\u606f\u3002"),(0,o.yg)("li",{parentName:"ul"},"devpts\uff08/dev/pts\uff09devpts \u662f\u7528\u4e8e\u7ba1\u7406\u4f2a\u7ec8\u7aef\uff08pseudo - terminal\uff09\u7684\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\uff0c\u6302\u8f7d\u70b9\u901a\u5e38\u662f/dev/pts\u3002\u4f2a\u7ec8\u7aef\u4e3b\u8981\u7528\u4e8e\u5b9e\u73b0\u7ec8\u7aef\u6a21\u62df\uff0c\u4f8b\u5982\u5728\u8fdc\u7a0b\u767b\u5f55\u3001\u7ec8\u7aef\u590d\u7528\u5668\uff08\u5982 screen \u548c tmux\uff09\u7b49\u573a\u666f\u4e2d\u4f7f\u7528\u3002"),(0,o.yg)("li",{parentName:"ul"},"tmpfs\uff08\u6302\u8f7d\u70b9\u591a\u6837\uff09tmpfs \u662f\u4e00\u79cd\u57fa\u4e8e\u5185\u5b58\u7684\u6587\u4ef6\u7cfb\u7edf\uff0c\u5b83\u5c06\u6587\u4ef6\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\uff0c\u800c\u4e0d\u662f\u78c1\u76d8\u4e0a\u3002tmpfs \u7684\u6302\u8f7d\u70b9\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8fdb\u884c\u8bbe\u7f6e\uff0c\u5e38\u89c1\u7684\u6302\u8f7d\u70b9\u6709/dev/shm\u3002")))}d.isMDXComponent=!0}}]);