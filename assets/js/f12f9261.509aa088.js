"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30],{5680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>g});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?t.createElement(g,l(l({ref:n},c),{},{components:r})):t.createElement(g,l({ref:n},c))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7512:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=r(8168),a=(r(6540),r(5680));const o={},l=void 0,i={unversionedId:"study/program/JAVA/GC",id:"study/program/JAVA/GC",title:"GC",description:"JVM \u4e2d\u5e38\u89c1\u7684\u5783\u573e\u6536\u96c6\u7b97\u6cd5",source:"@site/docs/study/program/JAVA/GC.md",sourceDirName:"study/program/JAVA",slug:"/study/program/JAVA/GC",permalink:"/docs/study/program/JAVA/GC",draft:!1,tags:[],version:"current",lastUpdatedAt:1720705023,formattedLastUpdatedAt:"2024\u5e747\u670811\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Java",permalink:"/docs/study/program/JAVA/"},next:{title:"GraalVM",permalink:"/docs/study/program/JAVA/GraalVM"}},s={},p=[{value:"JVM \u4e2d\u5e38\u89c1\u7684\u5783\u573e\u6536\u96c6\u7b97\u6cd5",id:"jvm-\u4e2d\u5e38\u89c1\u7684\u5783\u573e\u6536\u96c6\u7b97\u6cd5",level:3},{value:"\u67e5\u770b\u5404\u4e2a\u7248\u672c\u7684 GC",id:"\u67e5\u770b\u5404\u4e2a\u7248\u672c\u7684-gc",level:3},{value:"JVM \u5185\u5b58\u95ee\u9898\u6392\u67e5",id:"jvm-\u5185\u5b58\u95ee\u9898\u6392\u67e5",level:3}],c={toc:p},u="wrapper";function m(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"jvm-\u4e2d\u5e38\u89c1\u7684\u5783\u573e\u6536\u96c6\u7b97\u6cd5"},"JVM \u4e2d\u5e38\u89c1\u7684\u5783\u573e\u6536\u96c6\u7b97\u6cd5"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6807\u8bb0-\u6e05\u9664\uff08Mark-Sweep\uff09: \u8fd9\u662f\u6700\u57fa\u672c\u7684\u5783\u573e\u6536\u96c6\u7b97\u6cd5\uff0c\u5b83\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\uff0c\u6807\u8bb0\u548c\u6e05\u9664\u3002\u9996\u5148\u6807\u8bb0\u51fa\u6240\u6709\u9700\u8981\u56de\u6536\u7684\u5bf9\u8c61\uff0c\u7136\u540e\u8fdb\u884c\u6e05\u9664\u3002\u7f3a\u70b9\u662f\u6548\u7387\u4e0d\u9ad8\uff0c\u5e76\u4e14\u4f1a\u4ea7\u751f\u5927\u91cf\u4e0d\u8fde\u7eed\u7684\u5185\u5b58\u788e\u7247\u3002"),(0,a.yg)("li",{parentName:"ul"},"\uff08Copying\uff09: \u4e3a\u4e86\u89e3\u51b3\u6807\u8bb0-\u6e05\u9664\u7b97\u6cd5\u7684\u5185\u5b58\u788e\u7247\u95ee\u9898\uff0c\u51fa\u73b0\u4e86\u590d\u5236\u7b97\u6cd5\u3002\u5b83\u5c06\u53ef\u7528\u5185\u5b58\u5206\u4e3a\u4e24\u4e2a\u533a\u57df\uff0c\u6bcf\u6b21\u53ea\u4f7f\u7528\u5176\u4e2d\u4e00\u4e2a\u533a\u57df\u3002\u5f53\u8fd9\u4e2a\u533a\u57df\u6ee1\u65f6\uff0c\u5b83\u4f1a\u628a\u5b58\u6d3b\u7684\u5bf9\u8c61\u590d\u5236\u5230\u53e6\u4e00\u4e2a\u533a\u57df\uff0c\u7136\u540e\u6e05\u9664\u6b63\u5728\u4f7f\u7528\u7684\u90a3\u4e2a\u533a\u57df\u7684\u6240\u6709\u5bf9\u8c61\u3002\u8fd9\u79cd\u7b97\u6cd5\u5b9e\u73b0\u7b80\u5355\uff0c\u8fd0\u884c\u9ad8\u6548\uff0c\u4f46\u662f\u9700\u8981\u4e24\u500d\u7684\u5185\u5b58\u7a7a\u95f4\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6807\u8bb0-\u6574\u7406\uff08Mark-Compact\uff09: \u7ed3\u5408\u4e86\u6807\u8bb0-\u6e05\u9664\u548c\u590d\u5236\u7684\u4f18\u70b9\uff0c\u5b83\u5148\u6807\u8bb0\u9700\u8981\u56de\u6536\u7684\u5bf9\u8c61\uff0c\u7136\u540e\u628a\u6240\u6709\u5b58\u6d3b\u7684\u5bf9\u8c61\u90fd\u5411\u4e00\u7aef\u79fb\u52a8\uff0c\u63a5\u7740\u6e05\u9664\u6389\u7aef\u8fb9\u754c\u4ee5\u5916\u7684\u5185\u5b58\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5206\u4ee3\u6536\u96c6\uff08Generational Collector\uff09: \u57fa\u4e8e\u5bf9\u8c61\u751f\u547d\u5468\u671f\u7684\u4e0d\u540c\uff0c\u5b83\u5c06\u5806\u5206\u4e3a\u65b0\u751f\u4ee3\u548c\u8001\u5e74\u4ee3\u3002\u65b0\u751f\u4ee3\u4e2d\uff0c\u5927\u90e8\u5206\u5bf9\u8c61\u662f\u671d\u751f\u5915\u6b7b\u7684\uff0c\u6240\u4ee5\u53ef\u4ee5\u4f7f\u7528\u590d\u5236\u7b97\u6cd5\uff1b\u8001\u5e74\u4ee3\u4e2d\u5bf9\u8c61\u5b58\u6d3b\u7387\u9ad8\uff0c\u4e00\u822c\u4f7f\u7528\u6807\u8bb0-\u6574\u7406\u6216\u6807\u8bb0-\u6e05\u9664\u7b97\u6cd5\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u589e\u91cf\u6536\u96c6\uff08Incremental Collector\uff09: \u8fd9\u79cd\u7b97\u6cd5\u5141\u8bb8\u5783\u573e\u6536\u96c6\u5728\u5e94\u7528\u8fdb\u884c\u7684\u540c\u65f6\u8fdb\u884c\uff0c\u51cf\u5c11\u5e94\u7528\u7684\u6682\u505c\u65f6\u95f4\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5e76\u53d1\u6807\u8bb0-\u6e05\u9664\uff08Concurrent Mark-Sweep, CMS\uff09: \u4e3a\u4e86\u51cf\u5c11\u5783\u573e\u6536\u96c6\u5bf9\u5e94\u7528\u7684\u5f71\u54cd\uff0c\u51fa\u73b0\u4e86\u5e76\u53d1\u6536\u96c6\u7b97\u6cd5\uff0c\u5b83\u5c1d\u8bd5\u8ba9\u5783\u573e\u6536\u96c6\u7684\u8fc7\u7a0b\u5e76\u53d1\u8fdb\u884c\u3002CMS \u7b97\u6cd5\u5206\u4e3a\u56db\u4e2a\u9636\u6bb5\uff0c\u5e76\u53d1\u6807\u8bb0\u3001\u5e76\u53d1\u9884\u6e05\u7406\u3001\u91cd\u65b0\u6807\u8bb0\u3001\u5e76\u53d1\u6e05\u9664\uff0c\u5c3d\u91cf\u51cf\u5c11\u5bf9\u5e94\u7528\u7684\u5f71\u54cd\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6539\u8fdb\u7684\u5e76\u53d1\u6807\u8bb0-\u6e05\u9664\uff08G1\uff09: \u4e3a\u4e86\u8fdb\u4e00\u6b65\u51cf\u5c11\u6682\u505c\u65f6\u95f4\u548c\u63d0\u9ad8\u541e\u5410\u91cf\uff0cJVM \u5728 Java 7 Update 4 \u4e2d\u5f15\u5165\u4e86 G1 \u5783\u573e\u6536\u96c6\u5668\u3002G1 \u5c1d\u8bd5\u628a\u5806\u7a7a\u95f4\u5212\u5206\u4e3a\u591a\u4e2a\u5927\u5c0f\u76f8\u7b49\u7684\u533a\u57df\uff0c\u5e76\u4e14\u53ef\u4ee5\u5e76\u53d1\u5904\u7406\u8fd9\u4e9b\u533a\u57df\u3002")),(0,a.yg)("h3",{id:"\u67e5\u770b\u5404\u4e2a\u7248\u672c\u7684-gc"},"\u67e5\u770b\u5404\u4e2a\u7248\u672c\u7684 GC"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"java -XX:+PrintCommandLineFlags -version\njava -XX:+PrintGCDetails -version\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'java8 -XX:+PrintCommandLineFlags -version\n-XX:InitialHeapSize=268435456\n-XX:MaxHeapSize=4294967296\n-XX:+PrintCommandLineFlags\n-XX:+UseCompressedClassPointers\n-XX:+UseCompressedOops\n-XX:+UseParallelGC\njava version "1.8.0_181"\nJava(TM) SE Runtime Environment (build 1.8.0_181-b13)\nJava HotSpot(TM) 64-Bit Server VM (build 25.181-b13, mixed mode)\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'java17 -XX:+PrintCommandLineFlags -version\n-XX:ConcGCThreads=2\n-XX:G1ConcRefinementThreads=8\n-XX:GCDrainStackTargetSize=64\n-XX:InitialHeapSize=268435456\n-XX:MarkStackSize=4194304\n-XX:MaxHeapSize=4294967296\n-XX:MinHeapSize=6815736\n-XX:+PrintCommandLineFlags\n-XX:ReservedCodeCacheSize=251658240\n-XX:+SegmentedCodeCache\n-XX:+UseCompressedClassPointers\n-XX:+UseCompressedOops\n-XX:+UseG1GC\njava version "17.0.6" 2023-01-17 LTS\nJava(TM) SE Runtime Environment (build 17.0.6+9-LTS-190)\nJava HotSpot(TM) 64-Bit Server VM (build 17.0.6+9-LTS-190, mixed mode, sharing)\n')),(0,a.yg)("h3",{id:"jvm-\u5185\u5b58\u95ee\u9898\u6392\u67e5"},"JVM \u5185\u5b58\u95ee\u9898\u6392\u67e5"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u53c2\u8003 ",(0,a.yg)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/679783776"},"\u77e5\u4e4e-\u4e09\u4e07\u5b57\u957f\u6587\uff1aJVM \u5185\u5b58\u95ee\u9898\u6392\u67e5 Cookbook"))))}m.isMDXComponent=!0}}]);