"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3597],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},i=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=d(t),k=a,m=u["".concat(l,".").concat(k)]||u[k]||p[k]||o;return t?r.createElement(m,s(s({ref:n},i),{},{components:t})):r.createElement(m,s({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=k;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var d=2;d<o;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3009:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const o={},s=void 0,c={unversionedId:"study/docker/Docker\u7684\u4f7f\u7528\u603b\u7ed3",id:"study/docker/Docker\u7684\u4f7f\u7528\u603b\u7ed3",title:"Docker\u7684\u4f7f\u7528\u603b\u7ed3",description:"1. Docker\u547d\u4ee4\u8be6\u89e3(run\u7bc7)\xa0\u94fe\u63a5",source:"@site/docs/study/docker/Docker\u7684\u4f7f\u7528\u603b\u7ed3.md",sourceDirName:"study/docker",slug:"/study/docker/Docker\u7684\u4f7f\u7528\u603b\u7ed3",permalink:"/docs/study/docker/Docker\u7684\u4f7f\u7528\u603b\u7ed3",draft:!1,tags:[],version:"current",lastUpdatedAt:1698832758,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Docker_Docker-compose",permalink:"/docs/study/docker/Docker_Docker-compose"},next:{title:"docker-linux",permalink:"/docs/study/docker/docker-linux"}},l={},d=[{value:"\u5e38\u7528\u547d\u4ee4\u5927\u5168",id:"\u5e38\u7528\u547d\u4ee4\u5927\u5168",level:3},{value:"\u4fee\u6539\u5bb9\u5668\u914d\u7f6e",id:"\u4fee\u6539\u5bb9\u5668\u914d\u7f6e",level:3},{value:"\u5bb9\u5668\u81ea\u52a8\u542f\u52a8",id:"\u5bb9\u5668\u81ea\u52a8\u542f\u52a8",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"jenkins",id:"jenkins",level:3},{value:"nexus",id:"nexus",level:3},{value:"\u5bb9\u5668\u65f6\u533a\u95ee\u9898",id:"\u5bb9\u5668\u65f6\u533a\u95ee\u9898",level:3},{value:"\u67e5\u770b\u548c\u6e05\u9664\u5bb9\u5668\u65e5\u5fd7",id:"\u67e5\u770b\u548c\u6e05\u9664\u5bb9\u5668\u65e5\u5fd7",level:3}],i={toc:d},u="wrapper";function p(e){let{components:n,...o}=e;return(0,a.kt)(u,(0,r.Z)({},i,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Docker\u547d\u4ee4\u8be6\u89e3(run\u7bc7)\xa0\u94fe\u63a5"),(0,a.kt)("li",{parentName:"ol"},"\u641c\u7d22\u7248\u672c\u53f7\xa0",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com"},"https://hub.docker.com")),(0,a.kt)("li",{parentName:"ol"},"\u811a\u672c\u641c\u7d22\u7248\u672c\u53f7\xa0",(0,a.kt)("a",{parentName:"li",href:"https://blog.csdn.net/CodyGuo/article/details/86515354"},"docker-tags")),(0,a.kt)("li",{parentName:"ol"},"Dcoker\u6570\u636e\u6e90\uff0c\u4fee\u6539\u6587\u4ef6\xa0/etc/docker/daemon.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'\n{ \n    "registry-mirrors": ["https://registry.docker-cn.com","http://hub-mirror.c.163.com","https://docker.mirrors.ustc.edu.cn"] \n}\n\n\n')),(0,a.kt)("h3",{id:"\u5e38\u7528\u547d\u4ee4\u5927\u5168"},"\u5e38\u7528\u547d\u4ee4\u5927\u5168"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1.png",src:t(2421).Z,width:"750",height:"538"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"#\u83b7\u53d6\u67d0\u4e2adocker\u5bb9\u5668\u7684IP\u5730\u5740\ndocker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id\n")),(0,a.kt)("h3",{id:"\u4fee\u6539\u5bb9\u5668\u914d\u7f6e"},"\u4fee\u6539\u5bb9\u5668\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"/var/lib/docker/containers/[hash_of_the_container]/hostconfig.json\nsystemctl restart docker\n#\u6b64\u79cd\u65b9\u6cd5 \u6211\u8bd5\u9a8c\u4e86\uff0c\u8c8c\u4f3c\u4e0d\u884c\uff0c\u6709\u7a7a\u518d\u5b9e\u9a8c\u4e00\u4e0b\n")),(0,a.kt)("h3",{id:"\u5bb9\u5668\u81ea\u52a8\u542f\u52a8"},"\u5bb9\u5668\u81ea\u52a8\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run  --restart=always \n#no -  \u5bb9\u5668\u9000\u51fa\u65f6\uff0c\u4e0d\u91cd\u542f\u5bb9\u5668\uff1b\n#on-failure - \u53ea\u6709\u5728\u975e0\u72b6\u6001\u9000\u51fa\u65f6\u624d\u4ece\u65b0\u542f\u52a8\u5bb9\u5668\uff1b\n#always - \u65e0\u8bba\u9000\u51fa\u72b6\u6001\u662f\u5982\u4f55\uff0c\u90fd\u91cd\u542f\u5bb9\u5668\uff1b\n#\u5982\u679c\u521b\u5efa\u65f6\u672a\u6307\u5b9a --restart=always ,\u53ef\u901a\u8fc7update \u547d\u4ee4\ndocker update --restart=always xxx\ndocker update --restart=always api\ndocker update --restart=always redis\ndocker update --restart=always es\n#\ndocker update --restart=no es-xx.2\n")),(0,a.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"#\u5b89\u88c5\u65b9\u5f0f\u4e00\nyum install docker\nsystemctl start docker\n")),(0,a.kt)("h3",{id:"jenkins"},"jenkins"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\n\ndocker pull jenkins\n\n#mkdir -p /mnt/docker/jenkins/jenkins_home\nmkdir -p ~/Documents/docker/jenkins/jenkins_home\n\ndocker run --name jenkins -p 8080:8080 -p 50000:50000 -v ~/Documents/docker/jenkins/jenkins_home:/var/jenkins_home -d jenkins:latest\n\n\n#\u67e5\u770b\u7ba1\u7406\u5458\u5bc6\u7801\ndocker logs jenkins\n\n\n")),(0,a.kt)("h3",{id:"nexus"},"nexus"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\nmkdir -p /mnt/docker/nexus/nexus-data\nmkdir -p ~/Documents/docker/nexus/nexus-data\n\ndocker pull sonatype/nexus3 \n\n\ndocker run -d --name nexus3 \\\n --restart=always \\\n-p 8081:8081 \\\n-p 8082:8082  \\\n-p 8083:8083  \\\n-p 8084:8084  \\\n-p 8085:8085   \\\n-v /mnt/docker/nexus/nexus-data:/nexus-data \\\nsonatype/nexus3\n\n\ndocker run -d --name nexus3 \\\n --restart=always \\\n-p 8081:8081 \\\n-p 8082:8082  \\\n-p 8083:8083  \\\n-p 8084:8084  \\\n-p 8085:8085   \\\n-v ~/Documents/docker/nexus/nexus-data:/nexus-data \\\nsonatype/nexus3\n\n")),(0,a.kt)("h3",{id:"\u5bb9\u5668\u65f6\u533a\u95ee\u9898"},"\u5bb9\u5668\u65f6\u533a\u95ee\u9898"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa\u5bb9\u5668\u7684\u65f6\u5019\u52a0\u4e0a\u8fd9\u4e2a\u53c2\u6570 \u4f1a\u8ba9\u5bb9\u5668\u91c7\u7528\u5bbf\u4e3b\u673a\u7684\u65f6\u533a\n-v /etc/localtime:/etc/localtime \n")),(0,a.kt)("h3",{id:"\u67e5\u770b\u548c\u6e05\u9664\u5bb9\u5668\u65e5\u5fd7"},"\u67e5\u770b\u548c\u6e05\u9664\u5bb9\u5668\u65e5\u5fd7"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"#\nls -lh $(find /var/lib/docker/containers/ -name *-json.log)\n#\ntruncate -s 0 /var/lib/docker/containers/*/*-json.log\n#\u7528\u4e8e\u67e5\u770bDocker\u7684\u78c1\u76d8\u4f7f\u7528\u60c5\u51b5\ndocker system df\n#\u7528\u4e8e\u67e5\u770bDocker\u7684\u78c1\u76d8\u4f7f\u7528\u60c5\u51b5 \u8be6\u7ec6\u60c5\u51b5\ndocker system df -v\n#\u7528\u4e8e\u6e05\u7406\u78c1\u76d8\uff0c\u5220\u9664\u5173\u95ed\u7684\u5bb9\u5668\u3001\u65e0\u7528\u7684\u6570\u636e\u5377\u548c\u7f51\u7edc\uff0c\u4ee5\u53cadangling\u955c\u50cf\uff08\u5373\u65e0tag\u7684\u955c\u50cf\uff09\ndocker system prune\n#\u6e05\u7406\u5f97\u66f4\u52a0\u5f7b\u5e95\uff0c\u53ef\u4ee5\u5c06\u6ca1\u6709\u5bb9\u5668\u4f7f\u7528Docker\u955c\u50cf\u90fd\u5220\u6389\u3002\ndocker system prune -a\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.aliyun.com/article/272173"},"\u53c2\u80031")))}p.isMDXComponent=!0},2421:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/1-b23594a1c043f6f3f2961f17d876ef47.png"}}]);