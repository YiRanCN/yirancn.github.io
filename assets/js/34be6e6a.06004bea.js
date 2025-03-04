"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7005],{12998:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=a(58168),r=(a(96540),a(15680));const o={},l="centos-jdk17-app",c={unversionedId:"study/devops/centos-jdk17-app",id:"study/devops/centos-jdk17-app",title:"centos-jdk17-app",description:"\u5b89\u88c5 jdk",source:"@site/docs/study/devops/centos-jdk17-app.md",sourceDirName:"study/devops",slug:"/study/devops/centos-jdk17-app",permalink:"/docs/study/devops/centos-jdk17-app",draft:!1,tags:[],version:"current",lastUpdatedAt:1741081249,formattedLastUpdatedAt:"2025\u5e743\u67084\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"centos-nginx",permalink:"/docs/study/devops/centos-gninx-app"},next:{title:"jar\u8fd0\u7ef4-\u76d1\u63a7",permalink:"/docs/study/devops/jar\u8fd0\u7ef4-\u76d1\u63a7"}},p={},d=[{value:"\u5b89\u88c5 jdk",id:"\u5b89\u88c5-jdk",level:3},{value:"\u914d\u7f6e java",id:"\u914d\u7f6e-java",level:3},{value:"\u914d\u7f6e\u5e94\u7528\u6240\u9700\u7684\u73af\u5883\u53d8\u91cf",id:"\u914d\u7f6e\u5e94\u7528\u6240\u9700\u7684\u73af\u5883\u53d8\u91cf",level:3},{value:"\u521b\u5efa hivemq \u6587\u4ef6\u5939",id:"\u521b\u5efa-hivemq-\u6587\u4ef6\u5939",level:3},{value:"\u542f\u52a8\u5e94\u7528",id:"\u542f\u52a8\u5e94\u7528",level:3},{value:"\u542f\u52a8\u811a\u672c",id:"\u542f\u52a8\u811a\u672c",level:3},{value:"\u505c\u6b62\u811a\u672c",id:"\u505c\u6b62\u811a\u672c",level:3}],i={toc:d},s="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(s,(0,t.A)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"centos-jdk17-app"},"centos-jdk17-app"),(0,r.yg)("h3",{id:"\u5b89\u88c5-jdk"},"\u5b89\u88c5 jdk"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#\u9700\u8981\u770bcpu\u67b6\u6784 x64\nuname -a\ncd ~\nmkdir iot-cloud-backend\ncd iot-cloud-backend\nwget https://download.oracle.com/java/17/latest/jdk-17_linux-x64_bin.tar.gz\ntar -zxvf jdk-17_linux-x64_bin.tar.gz\n\n#\u9700\u8981\u770bcpu\u67b6\u6784 aarch64\nuname -a\ncd ~\nmkdir iot-cloud-backend\ncd iot-cloud-backend\nwget https://download.oracle.com/java/17/latest/jdk-17_linux-aarch64_bin.tar.gz\ntar -zxvf jdk-17_linux-aarch64_bin.tar.gz\n")),(0,r.yg)("h3",{id:"\u914d\u7f6e-java"},"\u914d\u7f6e java"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"vim /etc/profile\n\n# \u589e\u52a0\u5982\u4e0b\nexport JAVA_HOME=/root/iot-cloud-backend/jdk-17.0.8;\nexport PATH=$JAVA_HOME/bin:$PATH;\nexport CLASSPATH=.:$JAVA_HOME/lib;\n\n# \u4fdd\u5b58\u540e\nsource /etc/profile\n")),(0,r.yg)("h3",{id:"\u914d\u7f6e\u5e94\u7528\u6240\u9700\u7684\u73af\u5883\u53d8\u91cf"},"\u914d\u7f6e\u5e94\u7528\u6240\u9700\u7684\u73af\u5883\u53d8\u91cf"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"vim ~/.bash_profile\n\n# \u589e\u52a0\u5982\u4e0b\nexport IOT_MYSQL_HOST=127.0.0.1\nexport IOT_MYSQL_PORT=13306\n# HIVEMQ_HOME=/Users/weic/Documents/GITREP/GITHUB/net-cloud-backend/hivemq\nexport IOT_ALIYUN_KEY=xxx\nexport IOT_ALIYUN_SECRET=xxx\nexport IOT_SMS_REAL=0\n\n#\u4fdd\u5b58\u540e\nsource /etc/profile\n")),(0,r.yg)("h3",{id:"\u521b\u5efa-hivemq-\u6587\u4ef6\u5939"},"\u521b\u5efa hivemq \u6587\u4ef6\u5939"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir -p /root/iot-cloud-backend/hivemq/embedded-config-folder\nmkdir -p /root/iot-cloud-backend/hivemq/embedded-data-folder\nmkdir -p /root/iot-cloud-backend/hivemq/embedded-extensions-folder\n# config\u4e0b\u9762\u6709\u4e09\u4e2a\u914d\u7f6e\u6587\u4ef6\u9700\u8981\u4f20\u8fc7\u53bb\n\n")),(0,r.yg)("h3",{id:"\u542f\u52a8\u5e94\u7528"},"\u542f\u52a8\u5e94\u7528"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# \u542f\u52a8\njava -jar application-0.0.1-SNAPSHOT.jar > iot-cloud-backend.log &\n")),(0,r.yg)("h3",{id:"\u542f\u52a8\u811a\u672c"},"\u542f\u52a8\u811a\u672c"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'#!/bin/sh\n# \u67e5\u627eJava\u8fdb\u7a0b\uff0c\u5e76\u5c06\u7ed3\u679c\u4fdd\u5b58\u5230\u53d8\u91cf\u4e2d\njava_pid=$(ps aux | grep java | grep application | grep -v grep | awk \'{print $2}\')\n\nif [ -n "$java_pid" ]; then\n    echo "\u5df2\u5b58\u5728 $java_pid"\nelse\n    java -jar application-0.0.1-SNAPSHOT.jar > net-cloud-backend.log &\n    echo "\u542f\u52a8\u4e2d..."\n    tail -f net-cloud-backend.log\nfi\n')),(0,r.yg)("h3",{id:"\u505c\u6b62\u811a\u672c"},"\u505c\u6b62\u811a\u672c"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'#!/bin/sh\n\n# \u67e5\u627eJava\u8fdb\u7a0b\uff0c\u5e76\u5c06\u7ed3\u679c\u4fdd\u5b58\u5230\u53d8\u91cf\u4e2d\njava_pid=$(ps aux | grep java | grep application | grep -v grep | awk \'{print $2}\')\n\nif [ -n "$java_pid" ]; then\n    echo "\u6b63\u5728\u7ec8\u6b62Java\u8fdb\u7a0b $java_pid"\n    kill -9 $java_pid\n    echo "Java\u8fdb\u7a0b\u5df2\u7ec8\u6b62"\nelse\n    echo "\u672a\u627e\u5230Java\u8fdb\u7a0b"\nfi\n')))}u.isMDXComponent=!0},15680:(e,n,a)=>{a.d(n,{xA:()=>i,yg:()=>g});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),d=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},i=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},v=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=d(a),v=r,g=s["".concat(p,".").concat(v)]||s[v]||u[v]||o;return a?t.createElement(g,l(l({ref:n},i),{},{components:a})):t.createElement(g,l({ref:n},i))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=v;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[s]="string"==typeof e?e:r,l[1]=c;for(var d=2;d<o;d++)l[d]=a[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}v.displayName="MDXCreateElement"}}]);