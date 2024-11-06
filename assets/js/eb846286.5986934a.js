"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7368],{5680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>f});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),y=o,f=u["".concat(i,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(8168),o=(n(6540),n(5680));const a={},c="centos-nginx",s={unversionedId:"study/devops/centos-gninx-app",id:"study/devops/centos-gninx-app",title:"centos-nginx",description:"",source:"@site/docs/study/devops/centos-gninx-app.md",sourceDirName:"study/devops",slug:"/study/devops/centos-gninx-app",permalink:"/docs/study/devops/centos-gninx-app",draft:!1,tags:[],version:"current",lastUpdatedAt:1730905578,formattedLastUpdatedAt:"2024\u5e7411\u67086\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"ansible",permalink:"/docs/study/devops/ansible"},next:{title:"centos-jdk17-app",permalink:"/docs/study/devops/centos-jdk17-app"}},i={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"centos-nginx"},"centos-nginx"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"\nmkdir -p /root/iot-cloud-frontend/html\n\nyum install nginx\nsystemctl start nginx\n# \u914d\u7f6e\u6587\u4ef6\u76ee\u5f55 /etc/nginx\n# \u9ed8\u8ba4 root         /usr/share/nginx/html;\n# \u4fee\u6539\u6210 root         /root/iot-cloud-frontend/html;\nnginx -s reload\n\n# \u5982\u679c\u62a5\u9519403 \u8bf4\u660e\u542f\u52a8nginx\u7684\u7528\u6237\u548c\u6587\u4ef6\u4e0d\u4e00\u81f4 \u9700\u8981\u4fee\u6539\n")))}d.isMDXComponent=!0}}]);