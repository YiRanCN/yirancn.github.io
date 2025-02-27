"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7823],{15680:(n,e,t)=>{t.d(e,{xA:()=>c,yg:()=>p});var d=t(96540);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);e&&(d=d.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,d)}return t}function m(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,d,a=function(n,e){if(null==n)return{};var t,d,a={},r=Object.keys(n);for(d=0;d<r.length;d++)t=r[d],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(d=0;d<r.length;d++)t=r[d],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var i=d.createContext({}),s=function(n){var e=d.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):m(m({},e),n)),t},c=function(n){var e=s(n.components);return d.createElement(i.Provider,{value:e},n.children)},l="mdxType",b={inlineCode:"code",wrapper:function(n){var e=n.children;return d.createElement(d.Fragment,{},e)}},u=d.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,i=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),l=s(t),u=a,p=l["".concat(i,".").concat(u)]||l[u]||b[u]||r;return t?d.createElement(p,m(m({ref:e},c),{},{components:t})):d.createElement(p,m({ref:e},c))}));function p(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,m=new Array(r);m[0]=u;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=n,o[l]="string"==typeof n?n:a,m[1]=o;for(var s=2;s<r;s++)m[s]=t[s];return d.createElement.apply(null,m)}return d.createElement.apply(null,t)}u.displayName="MDXCreateElement"},89666:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>m,default:()=>b,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var d=t(58168),a=(t(96540),t(15680));const r={},m=void 0,o={unversionedId:"study/db/SQL/\u8fbe\u68a6-\u5355\u673a\u90e8\u7f72",id:"study/db/SQL/\u8fbe\u68a6-\u5355\u673a\u90e8\u7f72",title:"\u8fbe\u68a6-\u5355\u673a\u90e8\u7f72",description:"\u5b89\u88c5\u5e26\u6388\u6743\uff08\u4e3b\u5907\uff09",source:"@site/docs/study/db/SQL/\u8fbe\u68a6-\u5355\u673a\u90e8\u7f72.md",sourceDirName:"study/db/SQL",slug:"/study/db/SQL/\u8fbe\u68a6-\u5355\u673a\u90e8\u7f72",permalink:"/docs/study/db/SQL/\u8fbe\u68a6-\u5355\u673a\u90e8\u7f72",draft:!1,tags:[],version:"current",lastUpdatedAt:1740636295,formattedLastUpdatedAt:"2025\u5e742\u670827\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"\u8fbe\u68a6-\u4e3b\u5907\u90e8\u7f72",permalink:"/docs/study/db/SQL/\u8fbe\u68a6-\u4e3b\u5907\u90e8\u7f72"},next:{title:"\u8fbe\u68a6\u6570\u636e\u5e93",permalink:"/docs/study/db/SQL/\u8fbe\u68a6"}},i={},s=[{value:"\u5b89\u88c5\u5e26\u6388\u6743\uff08\u4e3b\u5907\uff09",id:"\u5b89\u88c5\u5e26\u6388\u6743\u4e3b\u5907",level:3}],c={toc:s},l="wrapper";function b(n){let{components:e,...t}=n;return(0,a.yg)(l,(0,d.A)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u5b89\u88c5\u5e26\u6388\u6743\u4e3b\u5907"},"\u5b89\u88c5\u5e26\u6388\u6743\uff08\u4e3b\u5907\uff09"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"#######################################################################################################################################\n######################\u73af\u5883\u51c6\u5907\n# \u770b\u4e0b\u65f6\u95f4\u662f\u5426\u6b63\u786e\ndate\nntpdate time.nist.gov\n# \u4fee\u6539\u4e3b\u673a\u540d\u79f0\nhostnamectl\nhostnamectl set-hostname node3\n# \u7528\u6237\u7ec4 \u7528\u6237\nsu root\ngroupadd dinstall -g 2001\nuseradd  -G dinstall -m -d /home/dmdba -s /bin/bash -u 2001 dmdba\npasswd dmdba\n#### \u4fee\u6539\u7cfb\u7edf\u53c2\u6570\nvi /etc/security/limits.conf\n# \u5185\u5bb9\u5982\u4e0b\n# dm\ndmdba  soft      nice       0\ndmdba  hard      nice       0\ndmdba  soft      as         unlimited\ndmdba  hard      as         unlimited\ndmdba  soft      fsize      unlimited\ndmdba  hard      fsize      unlimited\ndmdba  soft      nproc      65536\ndmdba  hard      nproc      65536\ndmdba  soft      nofile     65536\ndmdba  hard      nofile     65536\ndmdba  soft      core       unlimited\ndmdba  hard      core       unlimited\ndmdba  soft      data       unlimited\ndmdba  hard      data       unlimited\n# \u91cd\u542f\nreboot\n# \u68c0\u67e5\u53c2\u6570\u4fee\u6539\u662f\u5426OK\nsu - dmdba\nulimit -a\n# \u5982\u679c\u4e0d\u65b9\u4fbf\u91cd\u542f \u4e34\u65f6\u63aa\u65bd\nsu - dmdba\nulimit -n 65536\nulimit -u 65536\n\n\n############## \u76ee\u5f55\u89c4\u5212\nexit\n##\u5b9e\u4f8b\u4fdd\u5b58\u76ee\u5f55\nmkdir -p /dmdata/data \n##\u5f52\u6863\u4fdd\u5b58\u76ee\u5f55\nmkdir -p /dmdata/arch\n##\u5907\u4efd\u4fdd\u5b58\u76ee\u5f55\nmkdir -p /dmdata/dmbak\n# \u76f8\u5173\u76ee\u5f55\u6743\u9650\nchown -R dmdba:dinstall /dmdata/data\nchown -R dmdba:dinstall /dmdata/arch\nchown -R dmdba:dinstall /dmdata/dmbak\nchmod -R 755 /dmdata/data\nchmod -R 755 /dmdata/arch\nchmod -R 755 /dmdata/dmbak\n#\nll /dmdata/\n#######################################################################################################################################\n\n\n#######################################################################################################################################\n################## \u5f00\u59cb\u5b89\u88c5\n#root\n# \u4e0a\u4f20dm8\u6587\u4ef6\u5939\u5230/root/\u76ee\u5f55\u4e0b\u9762\n# \u6839\u636e\u81ea\u5df1\u7684\u5b89\u88c5\u5305\u8def\u5f84\u6765\ncd  /root/dm8/install\nmount -o loop dm8_20240408_x86_rh6_64.iso /mnt\n# \u6ce8\u610fkey\u6587\u4ef6\u7684\u8def\u5f84\u53ca\u6743\u9650 \u6700\u597d\u653e\u5230/home/dmdba/\u4e0b\ncp /root/dm8/key/dm3001108295.key /home/dmdba/dm.key\nsu - dmdba\ncd /mnt\n# \u9700\u8981\u8f93\u5165key\u6587\u4ef6\u65f6\u5019\uff0c\u8f93\u5165/home/dmdba/dm.key\n./DMInstall.bin -i\n# \u5207\u6362\u5230root\u7528\u6237\uff0c\u521b\u5efa DmAPService\uff0c\u5426\u5219\u4f1a\u5f71\u54cd\u6570\u636e\u5e93\u5907\u4efd\nexit\nsh /home/dmdba/dmdbms/script/root/root_installer.sh\n\n\n####### !!!!!!!!!!!!!!\u521d\u59cb\u5316\u5b9e\u4f8b\nsu - dmdba\ncd /home/dmdba/dmdbms/bin\n./dminit help\n# \u521d\u59cb\u5316\u5b9e\u4f8b \u6ce8\u610f\u76ee\u5f55\n./dminit path=/dmdata/data\n\n######## \u6ce8\u518c\u670d\u52a1\nexit\ncd /home/dmdba/dmdbms/script/root/\n./dm_service_installer.sh -t dmserver -dm_ini /dmdata/data/DAMENG/dm.ini -p DAMENG\ncd /home/dmdba/dmdbms/bin\nls | grep DAMENG\n\n### \u542f\u52a8 \u505c\u6b62 \u6570\u636e\u5e93\nsu - dmdba\ncd /home/dmdba/dmdbms/bin\n./DmServiceDAMENG start\n./DmServiceDAMENG stop\n./DmServiceDAMENG restart\n./DmServiceDAMENG status\n## \u6ce8\u610f\u9632\u706b\u5899\u662f\u5426\u6253\u5f00 \u5426\u5219\u8fde\u63a5\u4e0d\u4e865236\nexit\n# \u4e24\u79cd\u65b9\u5f0f \nsystemctl stop iptables\nsystemctl disable iptables\n# \u4e24\u79cd\u65b9\u5f0f \nsystemctl stop firewalld\nsystemctl disable firewalld\n# \u4fee\u6539ENABLE_ENCRYPT=0 \u5426\u5219\u62a5\u9519SSL\nsu - dmdba\nvi /dmdata/data/DAMENG/dm.ini\nENABLE_ENCRYPT = 0\ncd /home/dmdba/dmdbms/bin && ./DmServiceDAMENG restart\n\n# dm\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\n#dmdba\ncd \nvi .bashrc\nexport PATH=/home/dmdba/dmdbms/bin:$PATH\nexport LD_LIBRARY_PATH=/home/dmdba/dmdbms/bin:$LD_LIBRARY_PATH\n#\nsource .bashrc\n# \u5982\u679c\u9700\u8981\u9000\u51fa \u8f93\u5165exit\ndisql SYSDBA/SYSDBA\n#######################################################################################################################################\n\n\n\n#######################################################################################################################################\n# \u53c2\u6570\u4f18\u5316\u8c03\u8bd5\nvi /dmdata/data/DAMENG/dm.ini\n# \u8c03\u6574\u8fd9\u4e2a\u51e0\u4e2a\u53c2\u6570 \u8981\u4e0d\u7136\u62a5\u9519 Out of sort buf space, try to adjust SORT_BUF_GLOBAL_SIZE, SORT_BUF_SIZE, SORT\n# SORT_FLAG\uff1a\u9ed8\u8ba4\u4e3a0\uff0c\u53c2\u6570\u542b\u4e49\uff1a0\uff1a\u539f\u6392\u5e8f\u673a\u5236\uff1b1\uff1a\u65b0\u6392\u5e8f\u673a\u5236\u3002 \u5728\u5185\u5b58\u5927\u4e8e64G\u65f6\u5efa\u8bae\u4f7f\u7528\u65b0\u6392\u5e8f\u673a\u5236\uff0c\u5176\u4ed6\u60c5\u51b5\u4f7f\u7528\u539f\u6392\u5e8f\u673a\u5236\u3002\n# SORT_BUF_SIZE\uff1a\u9ed8\u8ba4\u4e3a2\u3002\u5728\u5185\u5b58\u5c0f\u4e8e64G\u65f6\u5efa\u8bae\u8bbe\u7f6e\u4e3a10M\uff0c\u5927\u4e8e64G\u65f6\u5efa\u8bae\u8bbe\u7f6e\u4e3a512M\u3002\n# SORT_BUF_GLOBAL_SIZE\uff0c\u9ed8\u8ba4\u4e3a1000M\u3002\u5f53\u5185\u5b58\u5c0f\u4e8e16G\u65f6\uff0c\u5efa\u8bae\u8bbe\u7f6e\u4e3a500M\uff0c\u5927\u4e8e16G\u5c0f\u4e8e64G\u65f6\u5efa\u8bae\u8bbe\u7f6e\u4e3a2000\uff0c\u5f53\u5185\u5b58\u5927\u4e8e64G\u65f6\uff0c\u5efa\u8bae\u8bbe\u7f6e\u4e3a5120M\u3002\n# SORT_BLK_SIZE\uff1a\u9ed8\u8ba4\u4e3a 1M\uff0c\u65b0\u6392\u5e8f\u673a\u5236\u4e0b\uff0c\u6bcf\u4e2a\u6392\u5e8f\u5206\u7247\u7a7a\u95f4\u7684\u5927\u5c0f\uff0c\u5fc5\u987b\u5c0f\u4e8e SORT_BUF_GLOBAL_SIZE\u3002\nSORT_BUF_SIZE                   = 512                    #maximum sort buffer size in Megabytes\nSORT_BLK_SIZE                   = 2                     #maximum sort blk size in Megabytes\nSORT_BUF_GLOBAL_SIZE            = 5120                  #maximum global sort buffer size in Megabytes\n#######################################################################################################################################\n\n\n\n")))}b.isMDXComponent=!0}}]);