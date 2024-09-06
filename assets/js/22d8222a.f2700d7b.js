"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4504],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>g});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),d=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(a.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),y=o,g=p["".concat(a,".").concat(y)]||p[y]||s[y]||i;return t?n.createElement(g,c(c({ref:r},u),{},{components:t})):n.createElement(g,c({ref:r},u))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=y;var l={};for(var a in r)hasOwnProperty.call(r,a)&&(l[a]=r[a]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var d=2;d<i;d++)c[d]=t[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2065:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(8168),o=(t(6540),t(5680));const i={sidebar_position:1},c="\u6982\u8ff0",l={unversionedId:"study/docker/index",id:"study/docker/index",title:"\u6982\u8ff0",description:"\u4e00\u79cd\u865a\u62df\u6280\u672f\u3002",source:"@site/docs/study/docker/index.md",sourceDirName:"study/docker",slug:"/study/docker/",permalink:"/docs/study/docker/",draft:!1,tags:[],version:"current",lastUpdatedAt:1725590261,formattedLastUpdatedAt:"2024\u5e749\u67086\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"studySidebar",previous:{title:"\u9886\u57df\u9a71\u52a8\u8bbe\u8ba1DDD",permalink:"/docs/study/think/\u9886\u57df\u9a71\u52a8\u8bbe\u8ba1DDD"},next:{title:"Docker Compose",permalink:"/docs/study/docker/Docker-compose"}},a={},d=[{value:"windows/linux docker",id:"windowslinux-docker",level:3},{value:"\u5b98\u65b9\u53c2\u8003\u6587\u6863",id:"\u5b98\u65b9\u53c2\u8003\u6587\u6863",level:3},{value:"docker cli",id:"docker-cli",level:3},{value:"docker engine api",id:"docker-engine-api",level:3},{value:"docker \u5b98\u65b9\u955c\u50cf\u5e93 docker hub",id:"docker-\u5b98\u65b9\u955c\u50cf\u5e93-docker-hub",level:3},{value:"docker \u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u8f6f\u4ef6",id:"docker-\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u8f6f\u4ef6",level:3}],u={toc:d},p="wrapper";function s(e){let{components:r,...t}=e;return(0,o.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,o.yg)("p",null,"\u4e00\u79cd\u865a\u62df\u6280\u672f\u3002"),(0,o.yg)("h3",{id:"windowslinux-docker"},"windows/linux docker"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"windows docker \u5bbf\u4e3b\u673a \u53ef\u4ee5\u8fd0\u884c windows \u548c linux \u5bb9\u5668;"),(0,o.yg)("li",{parentName:"ul"},"linux docker \u5bbf\u4e3b\u673a\u53ea\u80fd\u8fd0\u884c linux \u5bb9\u5668;"),(0,o.yg)("li",{parentName:"ul"},"windows \u5bbf\u4e3b\u673a\u53ef\u4ee5\u8fd0\u884c linux \u5bb9\u5668\u7684\u539f\u56e0\u662f\uff1a windows \u5728\u540e\u53f0\u521b\u5efa\u4e86\u4e00\u4e2a Linux \u5b50\u7cfb\u7edf(WSL)\uff0c\u56e0\u6b64 Linux \u5bb9\u5668\u4ecd\u5728 Linux \u4e0a\u8fd0\u884c;")),(0,o.yg)("h3",{id:"\u5b98\u65b9\u53c2\u8003\u6587\u6863"},"\u5b98\u65b9\u53c2\u8003\u6587\u6863"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.docker.com/reference/"},"\u5b98\u65b9\u53c2\u8003\u6587\u6863"))),(0,o.yg)("p",null,"\u6ca1\u4ec0\u4e48\u597d\u7684\u529e\u6cd5\u3002\u628a\u8fd9\u4e2a\u6587\u6863\u591a\u8bfb\u591a\u5b9e\u8df5\uff0c\u57fa\u672c\u4e0a\u4e5f\u7b97\u534a\u4e2a\u4e13\u5bb6\u4e86\u3002"),(0,o.yg)("p",null,"\u6ca1\u4e8b\u591a\u770b\u770b\uff0c\ndocker --help\ndockerd --hlep"),(0,o.yg)("h3",{id:"docker-cli"},"docker cli"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.docker.com/reference/cli/docker/"},"docker cli \u5b98\u65b9\u53c2\u8003\u6587\u6863"))),(0,o.yg)("h3",{id:"docker-engine-api"},"docker engine api"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.docker.com/engine/api/v1.45/"},"docker engine api v1.45 \u5b98\u65b9\u53c2\u8003\u6587\u6863"))),(0,o.yg)("h3",{id:"docker-\u5b98\u65b9\u955c\u50cf\u5e93-docker-hub"},"docker \u5b98\u65b9\u955c\u50cf\u5e93 docker hub"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://hub.docker.com/"},"docker hub")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://hub-stage.docker.com/"},"docker hub-stage"))),(0,o.yg)("h3",{id:"docker-\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u8f6f\u4ef6"},"docker \u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u8f6f\u4ef6"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/goharbor/harbor"},"harbor")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://hub.docker.com/_/registry"},"docker\u5b98\u65b9\u79c1\u6709registry"))))}s.isMDXComponent=!0}}]);