"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5953],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=c,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function f(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var o=t.length,a=new Array(o);a[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:c,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9688:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(7462),c=(t(7294),t(3905));const o={},a=void 0,i={unversionedId:"study/devops/Linux\u8fd0\u7ef4-\u9ad8\u5e76\u53d1",id:"study/devops/Linux\u8fd0\u7ef4-\u9ad8\u5e76\u53d1",title:"Linux\u8fd0\u7ef4-\u9ad8\u5e76\u53d1",description:"\u6700\u5927\u6587\u4ef6\u63cf\u8ff0\u7b26",source:"@site/docs/study/devops/Linux\u8fd0\u7ef4-\u9ad8\u5e76\u53d1.md",sourceDirName:"study/devops",slug:"/study/devops/Linux\u8fd0\u7ef4-\u9ad8\u5e76\u53d1",permalink:"/docs/study/devops/Linux\u8fd0\u7ef4-\u9ad8\u5e76\u53d1",draft:!1,tags:[],version:"current",lastUpdatedAt:1683275346,formattedLastUpdatedAt:"2023\u5e745\u67085\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Linux\u8fd0\u7ef4-\u76d1\u63a7\u6570\u636e",permalink:"/docs/study/devops/Linux\u8fd0\u7ef4-\u76d1\u63a7\u6570\u636e"},next:{title:"jar\u8fd0\u7ef4-\u76d1\u63a7",permalink:"/docs/study/devops/jar\u8fd0\u7ef4-\u76d1\u63a7"}},p={},l=[{value:"\u6700\u5927\u6587\u4ef6\u63cf\u8ff0\u7b26",id:"\u6700\u5927\u6587\u4ef6\u63cf\u8ff0\u7b26",level:3},{value:"max-file",id:"max-file",level:3},{value:"\u5185\u6838\u53c2\u6570\u4f18\u5316/etc/sysctl.conf",id:"\u5185\u6838\u53c2\u6570\u4f18\u5316etcsysctlconf",level:3}],s={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,c.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h3",{id:"\u6700\u5927\u6587\u4ef6\u63cf\u8ff0\u7b26"},"\u6700\u5927\u6587\u4ef6\u63cf\u8ff0\u7b26"),(0,c.kt)("p",null,"ulimit -n \u63a7\u5236\u8fdb\u7a0b\u7ea7\u522b\u80fd\u591f\u6253\u5f00\u7684\u6587\u4ef6\u53e5\u67c4\u7684\u6570\u91cf\u3002\u63d0\u4f9b\u5bf9shell\u53ca\u5176\u542f\u52a8\u7684\u8fdb\u7a0b\u7684\u53ef\u7528\u6587\u4ef6\u53e5\u67c4\u7684\u63a7\u5236\u3002\u8fd9\u662f\u8fdb\u7a0b\u7ea7\u522b\u7684\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},'#\u6700\u5927\u6587\u4ef6\u63cf\u8ff0\u7b26 100W\nulimit -SHn 1000000 \necho "ulimit -SHn 1000000" >> /etc/rc.d/rc.local \nsource /etc/rc.d/rc.local\nulimit -n\n\n')),(0,c.kt)("h3",{id:"max-file"},"max-file"),(0,c.kt)("h3",{id:""}),(0,c.kt)("p",null,"\u8868\u793a\u7cfb\u7edf\u7ea7\u522b\u7684\u80fd\u591f\u6253\u5f00\u7684\u6587\u4ef6\u53e5\u67c4\u7684\u6570\u91cf\u3002\u662f\u5bf9\u6574\u4e2a\u7cfb\u7edf\u7684\u9650\u5236\uff0c\u5e76\u4e0d\u662f\u9488\u5bf9\u7528\u6237\u7684\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"#\u67e5\u770b\u7cfb\u7edf\u7ea7\u522b\u7684\u80fd\u591f\u6253\u5f00\u7684\u6587\u4ef6\u53e5\u67c4\u7684\u6570\u91cf\uff0cCentos7\u9ed8\u8ba4\u662f794168\ncat /proc/sys/fs/file-max\n#\nvim /etc/sysctl.conf\n#\nfs.file-max = 1000000\n#\u7136\u540e\u6267\u884c\u547d\u4ee4\uff0c\u4f7f\u4fee\u6539\u914d\u7f6e\u7acb\u5373\u751f\u6548\uff1a\nsysctl -p\n")),(0,c.kt)("h3",{id:"\u5185\u6838\u53c2\u6570\u4f18\u5316etcsysctlconf"},"\u5185\u6838\u53c2\u6570\u4f18\u5316/etc/sysctl.conf"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"#\u5173\u95edipv6\nnet.ipv6.conf.all.disable_ipv6 = 1\nnet.ipv6.conf.default.disable_ipv6 = 1\n\n#\u51b3\u5b9a\u68c0\u67e5\u8fc7\u671f\u591a\u4e45\u90bb\u5c45\u6761\u76ee\nnet.ipv4.neigh.default.gc_stale_time=120\n\n#\u4f7f\u7528arp_announce / arp_ignore\u89e3\u51b3ARP\u6620\u5c04\u95ee\u9898\nnet.ipv4.conf.default.arp_announce = 2\nnet.ipv4.conf.all.arp_announce=2\nnet.ipv4.conf.lo.arp_announce=2 # \u907f\u514d\u653e\u5927\u653b\u51fb\nnet.ipv4.icmp_echo_ignore_broadcasts = 1 # \u5f00\u542f\u6076\u610ficmp\u9519\u8bef\u6d88\u606f\u4fdd\u62a4\nnet.ipv4.icmp_ignore_bogus_error_responses = 1\n\n#\u5904\u7406\u65e0\u6e90\u8def\u7531\u7684\u5305\nnet.ipv4.conf.all.accept_source_route = 0\nnet.ipv4.conf.default.accept_source_route = 0\n\n#core\u6587\u4ef6\u540d\u4e2d\u6dfb\u52a0pid\u4f5c\u4e3a\u6269\u5c55\u540d\nkernel.core_uses_pid = 1 # \u5f00\u542fSYN\u6d2a\u6c34\u653b\u51fb\u4fdd\u62a4\nnet.ipv4.tcp_syncookies = 1\n\n#\u4fee\u6539\u6d88\u606f\u961f\u5217\u957f\u5ea6\nkernel.msgmnb = 65536\nkernel.msgmax = 65536\n\n#timewait\u7684\u6570\u91cf\uff0c\u9ed8\u8ba4180000\nnet.ipv4.tcp_max_tw_buckets = 6000\nnet.ipv4.tcp_sack = 1\nnet.ipv4.tcp_window_scaling = 1\nnet.ipv4.tcp_rmem = 4096 87380 4194304\nnet.ipv4.tcp_wmem = 4096 16384 4194304\nnet.core.wmem_default = 8388608\nnet.core.rmem_default = 8388608\nnet.core.rmem_max = 16777216\nnet.core.wmem_max = 16777216\n\n#\u9650\u5236\u4ec5\u4ec5\u662f\u4e3a\u4e86\u9632\u6b62\u7b80\u5355\u7684DoS \u653b\u51fb\nnet.ipv4.tcp_max_orphans = 3276800\n\n#\u672a\u6536\u5230\u5ba2\u6237\u7aef\u786e\u8ba4\u4fe1\u606f\u7684\u8fde\u63a5\u8bf7\u6c42\u7684\u6700\u5927\u503c\nnet.ipv4.tcp_max_syn_backlog = 262144\nnet.ipv4.tcp_timestamps = 0\n\n#\u5185\u6838\u653e\u5f03\u5efa\u7acb\u8fde\u63a5\u4e4b\u524d\u53d1\u9001SYNACK \u5305\u7684\u6570\u91cf\nnet.ipv4.tcp_synack_retries = 1\n\n#\u5185\u6838\u653e\u5f03\u5efa\u7acb\u8fde\u63a5\u4e4b\u524d\u53d1\u9001SYN \u5305\u7684\u6570\u91cf\nnet.ipv4.tcp_syn_retries = 1\n\n#\u542f\u7528timewait \u5feb\u901f\u56de\u6536\nnet.ipv4.tcp_tw_recycle = 1\n\n#\u5f00\u542f\u91cd\u7528\u3002\u5141\u8bb8\u5c06TIME-WAIT sockets \u91cd\u65b0\u7528\u4e8e\u65b0\u7684TCP \u8fde\u63a5\nnet.ipv4.tcp_tw_reuse = 1\nnet.ipv4.tcp_mem = 94500000 915000000 927000000\nnet.ipv4.tcp_fin_timeout = 1\n\n#\u7136\u540e\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u91cd\u8f7d\u914d\u7f6e\nsysctl -p\n")))}m.isMDXComponent=!0}}]);