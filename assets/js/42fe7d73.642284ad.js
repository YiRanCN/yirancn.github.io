"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2325],{8432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={},l="ansible",s={unversionedId:"study/devops/ansible",id:"study/devops/ansible",title:"ansible",description:"https://www.ansible.com/",source:"@site/docs/study/devops/ansible.md",sourceDirName:"study/devops",slug:"/study/devops/ansible",permalink:"/docs/study/devops/ansible",draft:!1,tags:[],version:"current",lastUpdatedAt:1740636295,formattedLastUpdatedAt:"2025\u5e742\u670827\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Telegraf",permalink:"/docs/study/devops/Telegraf"},next:{title:"centos-nginx",permalink:"/docs/study/devops/centos-gninx-app"}},i={},p=[{value:"\u5e38\u7528",id:"\u5e38\u7528",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"ansible"},"ansible"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.ansible.com/"},"https://www.ansible.com/")),(0,a.yg)("h3",{id:"\u5e38\u7528"},"\u5e38\u7528"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# \u83b7\u53d6\u6700\u65b0\u65f6\u95f4 \u770b\u65f6\u95f4\u662f\u5426\u540c\u6b65\nansible ssh_host -o -m shell -a 'date'\nansible ssh_host -b -o -m shell -a 'sudo ntpdate 10.0.8.18'\n# \u83b7\u53d6\u67d0\u4e2a\u53d8\u91cf\ncat /opt/ansible/ansible-2.9.9/hosts\ncat /opt/ansible/var_file.yaml\nansible pt_host -o -e @/opt/ansible/var_file.yaml -m shell -a 'echo {{odbc_type}}'\n# \u83b7\u53d6\u7248\u672c\nansible --version\n")),(0,a.yg)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.cnblogs.com/keerya/p/7987886.html"},"cnblogs-\u8be6\u89e3\u4e00")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.cnblogs.com/keerya/p/8004566.html"},"cnblogs-\u8be6\u89e3\u4e8c"))))}d.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,m=u["".concat(i,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);