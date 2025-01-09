"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9403],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>c});var r=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var y=r.createContext({}),o=function(e){var t=r.useContext(y),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(y.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,y=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(n),d=l,c=u["".concat(y,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(c,a(a({ref:t},p),{},{components:n})):r.createElement(c,a({ref:t},p))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var y in t)hasOwnProperty.call(t,y)&&(s[y]=t[y]);s.originalType=e,s[u]="string"==typeof e?e:l,a[1]=s;for(var o=2;o<i;o++)a[o]=n[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=n(58168),l=(n(96540),n(15680));const i={},a=void 0,s={unversionedId:"study/devops/Linux\u8fd0\u7ef4-systemmd",id:"study/devops/Linux\u8fd0\u7ef4-systemmd",title:"Linux\u8fd0\u7ef4-systemmd",description:"1. \u6982\u8ff0",source:"@site/docs/study/devops/Linux\u8fd0\u7ef4-systemmd.md",sourceDirName:"study/devops",slug:"/study/devops/Linux\u8fd0\u7ef4-systemmd",permalink:"/docs/study/devops/Linux\u8fd0\u7ef4-systemmd",draft:!1,tags:[],version:"current",lastUpdatedAt:1736407756,formattedLastUpdatedAt:"2025\u5e741\u67089\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Linux\u8fd0\u7ef4-proc",permalink:"/docs/study/devops/Linux\u8fd0\u7ef4-proc"},next:{title:"Linux\u8fd0\u7ef4-\u5e38\u7528",permalink:"/docs/study/devops/Linux\u8fd0\u7ef4-\u5e38\u7528"}},y={},o=[{value:"1. \u6982\u8ff0",id:"1-\u6982\u8ff0",level:3},{value:"2. \u4e3b\u8981\u529f\u80fd\u53ca\u7279\u70b9",id:"2-\u4e3b\u8981\u529f\u80fd\u53ca\u7279\u70b9",level:3},{value:"\u5e76\u884c\u542f\u52a8",id:"\u5e76\u884c\u542f\u52a8",level:4},{value:"\u57fa\u4e8e\u5355\u5143\uff08Unit\uff09\u7684\u7ba1\u7406",id:"\u57fa\u4e8e\u5355\u5143unit\u7684\u7ba1\u7406",level:4},{value:"\u7edf\u4e00\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff08systemctl\uff09",id:"\u7edf\u4e00\u7684\u547d\u4ee4\u884c\u5de5\u5177systemctl",level:4},{value:"\u65e5\u5fd7\u7ba1\u7406",id:"\u65e5\u5fd7\u7ba1\u7406",level:4},{value:"3. \u914d\u7f6e\u6587\u4ef6",id:"3-\u914d\u7f6e\u6587\u4ef6",level:3}],p={toc:o},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h3",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,l.yg)("p",null,"systemd\u662f\u4e00\u4e2aLinux\u64cd\u4f5c\u7cfb\u7edf\u4e0b\u7684\u7cfb\u7edf\u548c\u670d\u52a1\u7ba1\u7406\u5668\uff0c\u5b83\u88ab\u5e7f\u6cdb\u5e94\u7528\u5728\u4f17\u591a\u73b0\u4ee3Linux\u53d1\u884c\u7248\u4e2d\uff0c\u7528\u6765\u66ff\u4ee3\u4f20\u7edf\u7684SysV init\u7cfb\u7edf\uff0c\u627f\u62c5\u7740\u542f\u52a8\u3001\u505c\u6b62\u3001\u7ba1\u7406\u7cfb\u7edf\u670d\u52a1\u4ee5\u53ca\u534f\u8c03\u5404\u7cfb\u7edf\u8d44\u6e90\u7b49\u91cd\u8981\u4efb\u52a1\u3002"),(0,l.yg)("h3",{id:"2-\u4e3b\u8981\u529f\u80fd\u53ca\u7279\u70b9"},"2. \u4e3b\u8981\u529f\u80fd\u53ca\u7279\u70b9"),(0,l.yg)("h4",{id:"\u5e76\u884c\u542f\u52a8"},"\u5e76\u884c\u542f\u52a8"),(0,l.yg)("p",null,"\u4e0e\u4f20\u7edf\u7684SysV init\u6309\u987a\u5e8f\u4f9d\u6b21\u542f\u52a8\u670d\u52a1\u4e0d\u540c\uff0csystemd\u80fd\u591f\u5e76\u884c\u5730\u542f\u52a8\u591a\u4e2a\u7cfb\u7edf\u670d\u52a1\uff0c\u6781\u5927\u5730\u7f29\u77ed\u4e86\u7cfb\u7edf\u7684\u542f\u52a8\u65f6\u95f4\u3002\u5b83\u53ef\u4ee5\u5206\u6790\u5404\u670d\u52a1\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u5728\u786e\u4fdd\u4f9d\u8d56\u7684\u670d\u52a1\u5df2\u51c6\u5907\u597d\u7684\u524d\u63d0\u4e0b\uff0c\u540c\u65f6\u542f\u52a8\u591a\u4e2a\u6ca1\u6709\u4f9d\u8d56\u5173\u8054\u6216\u8005\u76f8\u4e92\u4e0d\u51b2\u7a81\u7684\u670d\u52a1\uff0c\u63d0\u9ad8\u4e86\u542f\u52a8\u6548\u7387\u3002"),(0,l.yg)("h4",{id:"\u57fa\u4e8e\u5355\u5143unit\u7684\u7ba1\u7406"},"\u57fa\u4e8e\u5355\u5143\uff08Unit\uff09\u7684\u7ba1\u7406"),(0,l.yg)("p",null,"systemd\u91c7\u7528\u5355\u5143\u7684\u6982\u5ff5\u6765\u7ba1\u7406\u5404\u79cd\u7cfb\u7edf\u8d44\u6e90\uff0c\u5e38\u89c1\u7684\u5355\u5143\u7c7b\u578b\u6709\u4ee5\u4e0b\u51e0\u79cd\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u670d\u52a1\u5355\u5143\uff08.service\uff09"),"\uff1a\u7528\u4e8e\u5b9a\u4e49\u7cfb\u7edf\u670d\u52a1\u76f8\u5173\u7684\u914d\u7f6e\uff0c\u50cf\u542f\u52a8\u547d\u4ee4\u3001\u8fd0\u884c\u73af\u5883\u3001\u4f9d\u8d56\u5173\u7cfb\u7b49\uff0c\u4f8b\u5982 ",(0,l.yg)("inlineCode",{parentName:"li"},"httpd.service")," \u7528\u6765\u914d\u7f6eApache\u670d\u52a1\u5668\u670d\u52a1\u76f8\u5173\u7684\u542f\u52a8\u53ca\u8fd0\u884c\u8981\u6c42\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u5957\u63a5\u5b57\u5355\u5143\uff08.socket\uff09"),"\uff1a\u53ef\u7528\u6765\u76d1\u542c\u7279\u5b9a\u7684\u7f51\u7edc\u5957\u63a5\u5b57\u6216\u8005Unix\u57df\u5957\u63a5\u5b57\uff0c\u5f53\u6709\u76f8\u5e94\u7684\u8fde\u63a5\u8bf7\u6c42\u65f6\uff0c\u89e6\u53d1\u5173\u8054\u7684\u670d\u52a1\u542f\u52a8\uff0c\u6bd4\u5982 ",(0,l.yg)("inlineCode",{parentName:"li"},"sshd.socket")," \u53ef\u4ee5\u76d1\u542cSSH\u8fde\u63a5\u8bf7\u6c42\uff0c\u8fdb\u800c\u542f\u52a8 ",(0,l.yg)("inlineCode",{parentName:"li"},"sshd")," \u670d\u52a1\u6765\u5904\u7406\u767b\u5f55\u7b49\u4e8b\u5b9c\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bbe\u5907\u5355\u5143\uff08.device\uff09"),"\uff1a\u9488\u5bf9\u7cfb\u7edf\u7684\u786c\u4ef6\u8bbe\u5907\u8fdb\u884c\u7ba1\u7406\uff0c\u5bf9\u8bbe\u5907\u7684\u8bc6\u522b\u3001\u52a0\u8f7d\u7b49\u8fc7\u7a0b\u8fdb\u884c\u914d\u7f6e\u548c\u63a7\u5236\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u6302\u8f7d\u5355\u5143\uff08.mount\uff09"),"\uff1a\u8d1f\u8d23\u7ba1\u7406\u6587\u4ef6\u7cfb\u7edf\u7684\u6302\u8f7d\u64cd\u4f5c\uff0c\u660e\u786e\u6307\u5b9a\u6302\u8f7d\u70b9\u3001\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\u7b49\u6302\u8f7d\u76f8\u5173\u7ec6\u8282\u3002")),(0,l.yg)("h4",{id:"\u7edf\u4e00\u7684\u547d\u4ee4\u884c\u5de5\u5177systemctl"},"\u7edf\u4e00\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff08systemctl\uff09"),(0,l.yg)("p",null,"systemd\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u547d\u4ee4\u884c\u5de5\u5177 ",(0,l.yg)("inlineCode",{parentName:"p"},"systemctl")," \u6765\u64cd\u4f5c\u5404\u7c7b\u5355\u5143\uff0c\u4e00\u4e9b\u5e38\u89c1\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u542f\u52a8\u3001\u505c\u6b62\u3001\u91cd\u542f\u670d\u52a1"),"\uff1a",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u542f\u52a8\u670d\u52a1\u53ef\u4ee5\u7528 ",(0,l.yg)("inlineCode",{parentName:"li"},"systemctl start [\u670d\u52a1\u540d]"),"\uff0c\u6bd4\u5982 ",(0,l.yg)("inlineCode",{parentName:"li"},"systemctl start mysqld")," \u80fd\u542f\u52a8MySQL\u6570\u636e\u5e93\u670d\u52a1\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u505c\u6b62\u670d\u52a1\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"li"},"systemctl stop [\u670d\u52a1\u540d]")," \u547d\u4ee4\u5b9e\u73b0\uff0c\u4f8b\u5982 ",(0,l.yg)("inlineCode",{parentName:"li"},"systemctl stop httpd")," \u4f1a\u8ba9\u6b63\u5728\u8fd0\u884c\u7684Apache\u670d\u52a1\u5668\u505c\u6b62\u8fd0\u884c\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u91cd\u542f\u670d\u52a1\u5219\u662f ",(0,l.yg)("inlineCode",{parentName:"li"},"systemctl restart [\u670d\u52a1\u540d]"),"\uff0c\u50cf ",(0,l.yg)("inlineCode",{parentName:"li"},"systemctl restart sshd")," \u5c31\u4f1a\u91cd\u542fSSH\u670d\u52a1\u3002"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u67e5\u770b\u670d\u52a1\u72b6\u6001"),"\uff1a",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"li"},"systemctl status [\u670d\u52a1\u540d]"),"\uff0c\u53ef\u4ee5\u67e5\u770b\u67d0\u4e2a\u670d\u52a1\u5f53\u524d\u662f\u5904\u4e8e\u8fd0\u884c\u4e2d\u3001\u505c\u6b62\u8fd8\u662f\u5176\u4ed6\u72b6\u6001\uff0c\u5e76\u4e14\u4f1a\u663e\u793a\u670d\u52a1\u76f8\u5173\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u6bd4\u5982\u6700\u8fd1\u7684\u542f\u52a8\u3001\u505c\u6b62\u65f6\u95f4\uff0c\u662f\u5426\u51fa\u73b0\u9519\u8bef\u7b49\u60c5\u51b5\uff0c\u4f8b\u5982 ",(0,l.yg)("inlineCode",{parentName:"li"},"systemctl status nginx")," \u80fd\u67e5\u770bNginx\u670d\u52a1\u7684\u72b6\u6001\u8be6\u60c5\u3002"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bbe\u7f6e\u670d\u52a1\u5f00\u673a\u542f\u52a8\u6216\u7981\u7528\u5f00\u673a\u542f\u52a8"),"\uff1a",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u82e5\u60f3\u8ba9\u67d0\u4e2a\u670d\u52a1\u5728\u7cfb\u7edf\u5f00\u673a\u65f6\u81ea\u52a8\u542f\u52a8\uff0c\u53ef\u6267\u884c ",(0,l.yg)("inlineCode",{parentName:"li"},"systemctl enable [\u670d\u52a1\u540d]"),"\uff0c\u4f8b\u5982 ",(0,l.yg)("inlineCode",{parentName:"li"},"systemctl enable docker")," \u4f1a\u5c06Docker\u670d\u52a1\u8bbe\u7f6e\u4e3a\u5f00\u673a\u81ea\u542f\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u53cd\u4e4b\uff0c\u8981\u7981\u7528\u670d\u52a1\u5f00\u673a\u542f\u52a8\u5219\u7528 ",(0,l.yg)("inlineCode",{parentName:"li"},"systemctl disable [\u670d\u52a1\u540d]")," \u547d\u4ee4\uff0c\u50cf ",(0,l.yg)("inlineCode",{parentName:"li"},"systemctl disable postfix")," \u4f1a\u8ba9Postfix\u670d\u52a1\u4e0d\u4f1a\u5728\u5f00\u673a\u65f6\u81ea\u52a8\u542f\u52a8\u3002")))),(0,l.yg)("h4",{id:"\u65e5\u5fd7\u7ba1\u7406"},"\u65e5\u5fd7\u7ba1\u7406"),(0,l.yg)("p",null,"systemd\u96c6\u6210\u4e86\u65e5\u5fd7\u529f\u80fd\uff0c\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"journalctl")," \u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u7cfb\u7edf\u548c\u5404\u670d\u52a1\u7684\u65e5\u5fd7\u4fe1\u606f\u3002\u6bd4\u5982 ",(0,l.yg)("inlineCode",{parentName:"p"},"journalctl -u [\u670d\u52a1\u540d]")," \u53ef\u67e5\u770b\u7279\u5b9a\u670d\u52a1\u7684\u65e5\u5fd7\uff0c\u50cf ",(0,l.yg)("inlineCode",{parentName:"p"},"journalctl -u sshd")," \u80fd\u67e5\u770bSSH\u670d\u52a1\u76f8\u5173\u7684\u65e5\u5fd7\u8bb0\u5f55\uff0c\u65b9\u4fbf\u6392\u67e5\u670d\u52a1\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u7684\u95ee\u9898\u3002"),(0,l.yg)("h3",{id:"3-\u914d\u7f6e\u6587\u4ef6"},"3. \u914d\u7f6e\u6587\u4ef6"),(0,l.yg)("p",null,"systemd\u7684\u914d\u7f6e\u6587\u4ef6\u901a\u5e38\u5b58\u653e\u5728\u51e0\u4e2a\u4e0d\u540c\u7684\u76ee\u5f55\u4e0b\uff0c\u5404\u6709\u4e0d\u540c\u7528\u9014\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"/lib/systemd/system/"),"\uff1a\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u5b58\u653e\u7740\u7cfb\u7edf\u9ed8\u8ba4\u5b89\u88c5\u7684\u5404\u7c7b\u5355\u5143\u6587\u4ef6\uff0c\u4e00\u822c\u662f\u8f6f\u4ef6\u5305\u5b89\u88c5\u65f6\u81ea\u5e26\u7684\uff0c\u4e0d\u5efa\u8bae\u76f4\u63a5\u4fee\u6539\u8fd9\u91cc\u7684\u6587\u4ef6\uff0c\u4ee5\u514d\u5728\u8f6f\u4ef6\u5305\u66f4\u65b0\u65f6\u88ab\u8986\u76d6\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"/etc/systemd/system/"),"\uff1a\u7528\u4e8e\u5b58\u653e\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u5355\u5143\u6587\u4ef6\u6216\u8005\u5bf9\u7cfb\u7edf\u9ed8\u8ba4\u5355\u5143\u6587\u4ef6\u8fdb\u884c\u8986\u76d6\u4fee\u6539\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5f53\u7cfb\u7edf\u542f\u52a8\u6216\u8005\u6267\u884c\u76f8\u5173\u64cd\u4f5c\u65f6\uff0c\u4f1a\u4f18\u5148\u8bfb\u53d6\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u5bf9\u5e94\u7684\u5355\u5143\u6587\u4ef6\u5185\u5bb9\uff0c\u65b9\u4fbf\u7ba1\u7406\u5458\u6839\u636e\u5b9e\u9645\u9700\u6c42\u5bf9\u670d\u52a1\u7b49\u5355\u5143\u8fdb\u884c\u4e2a\u6027\u5316\u914d\u7f6e\u3002")),(0,l.yg)("p",null,"\u603b\u4e4b\uff0csystemd\u5728\u73b0\u4ee3Linux\u7cfb\u7edf\u7684\u8fd0\u884c\u7ba1\u7406\u4e2d\u8d77\u7740\u81f3\u5173\u91cd\u8981\u7684\u4f5c\u7528\uff0c\u638c\u63e1\u5b83\u7684\u57fa\u672c\u539f\u7406\u3001\u529f\u80fd\u548c\u76f8\u5173\u64cd\u4f5c\u5bf9\u4e8eLinux\u7cfb\u7edf\u7684\u8fd0\u7ef4\u7b49\u5de5\u4f5c\u5341\u5206\u5173\u952e\u3002"))}m.isMDXComponent=!0}}]);