"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8302],{5680:(e,r,n)=>{n.d(r,{xA:()=>d,yg:()=>y});var t=n(6540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,y=u["".concat(c,".").concat(f)]||u[f]||s[f]||a;return n?t.createElement(y,i(i({ref:r},d),{},{components:n})):t.createElement(y,i({ref:r},d))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2359:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var t=n(8168),o=(n(6540),n(5680));const a={},i=void 0,l={unversionedId:"study/docker/Dockerfile\u4f7f\u7528\u8be6\u89e3",id:"study/docker/Dockerfile\u4f7f\u7528\u8be6\u89e3",title:"Dockerfile\u4f7f\u7528\u8be6\u89e3",description:"\u5b98\u65b9\u53c2\u8003\u6587\u6863",source:"@site/docs/study/docker/Dockerfile\u4f7f\u7528\u8be6\u89e3.md",sourceDirName:"study/docker",slug:"/study/docker/Dockerfile\u4f7f\u7528\u8be6\u89e3",permalink:"/docs/study/docker/Dockerfile\u4f7f\u7528\u8be6\u89e3",draft:!1,tags:[],version:"current",lastUpdatedAt:1715158344,formattedLastUpdatedAt:"2024\u5e745\u67088\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Docker Swarm",permalink:"/docs/study/docker/Docker-swarm"},next:{title:"Docker\u7684\u4f7f\u7528\u603b\u7ed3",permalink:"/docs/study/docker/Docker\u7684\u4f7f\u7528\u603b\u7ed3"}},c={},p=[{value:"\u5b98\u65b9\u53c2\u8003\u6587\u6863",id:"\u5b98\u65b9\u53c2\u8003\u6587\u6863",level:3},{value:"SpringBoot Dockerfile \u793a\u4f8b",id:"springboot-dockerfile-\u793a\u4f8b",level:3},{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",level:4},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",level:4},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:3}],d={toc:p},u="wrapper";function s(e){let{components:r,...n}=e;return(0,o.yg)(u,(0,t.A)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"\u5b98\u65b9\u53c2\u8003\u6587\u6863"},"\u5b98\u65b9\u53c2\u8003\u6587\u6863"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.docker.com/reference/dockerfile/"},"\u5b98\u65b9\u53c2\u8003\u6587\u6863-\u82f1\u6587\u7248\u672c"))),(0,o.yg)("h3",{id:"springboot-dockerfile-\u793a\u4f8b"},"SpringBoot Dockerfile \u793a\u4f8b"),(0,o.yg)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b 1"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# JDK17\u73af\u5883\nFROM ubuntu:23.10 as ujdk17\nWORKDIR /root/jdk\nADD jdk-17_linux-x64_bin.tar.gz  ./\nENV JAVA_HOME=/root/jdk/jdk-17.0.8\nENV PATH=$JAVA_HOME/bin:$PATH\nRUN java --version\n# \u76f4\u63a5\u8fd0\u884cSpringBoot Jar\u5305\u6a21\u5f0f\nFROM ujdk17 as xxx\nWORKDIR /root/application\nARG JAR_FILE=target/*.jar\nCOPY ${JAR_FILE} application.jar\nEXPOSE 8080\nENTRYPOINT java -jar application.jarca\n")),(0,o.yg)("h4",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b 2"),(0,o.yg)("p",null,"\u6ca1\u6709\u6210\u529f\uff01\uff01(\u539f\u56e0\u662f SpringBoot \u7684\u7248\u672c\u7528\u7684\u662f 3.0.3)"),(0,o.yg)("p",null,"\u6210\u529f\uff01\uff01(\u539f\u56e0\u662f SpringBoot \u7684\u7248\u672c\u7528\u7684\u662f 3.2.3)"),(0,o.yg)("p",null,"\u4e00\u5b9a\u8981\u770b\u6e05 SpringBoot \u7684\u7248\u672c\u53f7\uff0c\u5dee\u5f02\u8fd8\u662f\u5f88\u5927\u7684"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'# JDK17\u73af\u5883\nFROM ubuntu:23.10 as ujdk17\nWORKDIR /root/jdk\nADD jdk-17_linux-x64_bin.tar.gz  ./\nENV JAVA_HOME=/root/jdk/jdk-17.0.8\nENV PATH=$JAVA_HOME/bin:$PATH\nRUN java --version\n# \u6784\u5efa\u73af\u5883 \u4e3b\u8981\u662f\u60f3\u5229\u7528Docker\u7684\u5206\u5c42\u7f13\u5b58\u6982\u5ff5\u8fbe\u5230\u5feb\u901f\u6784\u5efa\u7684\u76ee\u7684 jarmode\u6a21\u5f0f\nFROM ujdk17 as builder\nWORKDIR /root/application\nARG JAR_FILE=target/*.jar\nCOPY ${JAR_FILE} application.jar\nRUN java -Djarmode=layertools -jar application.jar extract\n# jarmode\u6a21\u5f0f\u542f\u52a8\nFROM ujdk17 as xxx\nWORKDIR /root/application\nCOPY --from=builder /root/application/dependencies/ ./\nCOPY --from=builder /root/application/spring-boot-loader/ ./\nCOPY --from=builder /root/application/snapshot-dependencies/ ./\nCOPY --from=builder /root/application/application/ ./\nEXPOSE 8080\nENTRYPOINT ["java", "org.springframework.boot.loader.launch.JarLauncher"]\n')),(0,o.yg)("h3",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.jianshu.com/p/4508784f6ddc"},"\u7b80\u4e66-Dockerfile \u8be6\u89e3\uff08\u8d85\u8be6\u7ec6\uff09"))))}s.isMDXComponent=!0}}]);