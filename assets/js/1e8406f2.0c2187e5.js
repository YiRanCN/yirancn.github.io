"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=o(n),v=a,c=m["".concat(u,".").concat(v)]||m[v]||d[v]||l;return n?r.createElement(c,i(i({ref:t},s),{},{components:n})):r.createElement(c,i({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=v;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},9955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const l={},i=void 0,p={unversionedId:"study/program/JAVA/Maven",id:"study/program/JAVA/Maven",title:"Maven",description:"\u7b80\u4ecb",source:"@site/docs/study/program/JAVA/Maven.md",sourceDirName:"study/program/JAVA",slug:"/study/program/JAVA/Maven",permalink:"/docs/study/program/JAVA/Maven",draft:!1,tags:[],version:"current",lastUpdatedAt:1698832758,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Guice",permalink:"/docs/study/program/JAVA/Guice"},next:{title:"RxJava",permalink:"/docs/study/program/JAVA/RxJava"}},u={},o=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",level:3},{value:"\u4e09\u79cd\u6253\u5305\u63d2\u4ef6",id:"\u4e09\u79cd\u6253\u5305\u63d2\u4ef6",level:4},{value:"maven-assembly-plugin",id:"maven-assembly-plugin",level:4},{value:"maven-enforcer-plugin",id:"maven-enforcer-plugin",level:4},{value:"maven-release-plugin",id:"maven-release-plugin",level:4},{value:"maven-resources-plugin",id:"maven-resources-plugin",level:4},{value:"build-helper-maven-plugin",id:"build-helper-maven-plugin",level:4},{value:"versions-maven-plugin",id:"versions-maven-plugin",level:4}],s={toc:o},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"\u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u63d2\u4ef6\u6846\u67b6\uff0c\u5b83\u7684\u6838\u5fc3\u5e76\u4e0d\u6267\u884c\u4efb\u4f55\u5177\u4f53\u7684\u6784\u5efa\u4efb\u52a1\uff0c\u6240\u6709\u8fd9\u4e9b\u4efb\u52a1\u90fd\u4ea4\u7ed9\u63d2\u4ef6\u6765\u5b8c\u6210\uff0c\u4f8b\u5982\u7f16\u8bd1\u6e90\u4ee3\u7801\u662f\u7531maven- compiler-plugin\u5b8c\u6210\u7684\u3002"),(0,a.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5168\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u91ca\u4e49"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-pl"),(0,a.kt)("td",{parentName:"tr",align:null},"--projects"),(0,a.kt)("td",{parentName:"tr",align:null},"Build specified reactor projects instead of all projects"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9009\u9879\u540e\u53ef\u8ddf\u968f{groupId}:{artifactId}\u6216\u8005\u6240\u9009\u6a21\u5757\u7684\u76f8\u5bf9\u8def\u5f84(\u591a\u4e2a\u6a21\u5757\u4ee5\u9017\u53f7\u5206\u9694)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-am"),(0,a.kt)("td",{parentName:"tr",align:null},"--also-make"),(0,a.kt)("td",{parentName:"tr",align:null},"If project list is specified, also build projects required by the list"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u540c\u65f6\u5904\u7406\u9009\u5b9a\u6a21\u5757\u6240\u4f9d\u8d56\u7684\u6a21\u5757")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-amd"),(0,a.kt)("td",{parentName:"tr",align:null},"--also-make-dependents"),(0,a.kt)("td",{parentName:"tr",align:null},"If project list is specified, also build projects that depend on projects on the list"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u540c\u65f6\u5904\u7406\u4f9d\u8d56\u9009\u5b9a\u6a21\u5757\u7684\u6a21\u5757")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-N"),(0,a.kt)("td",{parentName:"tr",align:null},"--Non-recursive"),(0,a.kt)("td",{parentName:"tr",align:null},"Build projects without recursive"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u4e0d\u9012\u5f52\u5b50\u6a21\u5757")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-rf"),(0,a.kt)("td",{parentName:"tr",align:null},"--resume-from"),(0,a.kt)("td",{parentName:"tr",align:null},"Resume reactor from specified project"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u4ece\u6307\u5b9a\u6a21\u5757\u5f00\u59cb\u7ee7\u7eed\u5904\u7406")))),(0,a.kt)("h3",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,a.kt)("h4",{id:"\u4e09\u79cd\u6253\u5305\u63d2\u4ef6"},"\u4e09\u79cd\u6253\u5305\u63d2\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"maven-jar-plugin\uff0c\u9ed8\u8ba4\u7684\u6253\u5305\u63d2\u4ef6\uff0c\u7528\u6765\u6253\u666e\u901a\u7684project JAR\u5305\uff1b"),(0,a.kt)("li",{parentName:"ul"},"maven-shade-plugin\uff0c\u7528\u6765\u6253\u53ef\u6267\u884cJAR\u5305\uff0c\u4e5f\u5c31\u662f\u6240\u8c13\u7684fat JAR\u5305\uff1b"),(0,a.kt)("li",{parentName:"ul"},"maven-assembly-plugin\uff0c\u652f\u6301\u81ea\u5b9a\u4e49\u7684\u6253\u5305\u7ed3\u6784\uff0c\u4e5f\u53ef\u4ee5\u5b9a\u5236\u4f9d\u8d56\u9879\u7b49\u3002")),(0,a.kt)("h4",{id:"maven-assembly-plugin"},"maven-assembly-plugin"),(0,a.kt)("p",null,"maven-assembly-plugin\u7684\u7528\u9014\u662f\u5236\u4f5c\u9879\u76ee\u5206\u53d1\u5305\uff0c\u8be5\u5206\u53d1\u5305\u53ef\u80fd\u5305\u542b\u4e86\u9879\u76ee\u7684\u53ef\u6267\u884c\u6587\u4ef6\u3001\u6e90\u4ee3\u7801\u3001readme\u3001\u5e73\u53f0\u811a\u672c\u7b49\u7b49\u3002maven-assembly-plugin\u652f\u6301\u5404\u79cd\u4e3b\u6d41\u7684\u683c\u5f0f\u5982zip\u3001tar.gz\u3001jar\u548cwar\u7b49\uff0c\u5177\u4f53\u6253\u5305\u54ea\u4e9b\u6587\u4ef6\u662f\u9ad8\u5ea6\u53ef\u63a7\u7684\uff0c\u4f8b\u5982\u7528\u6237\u53ef\u4ee5 \u6309\u6587\u4ef6\u7ea7\u522b\u7684\u7c92\u5ea6\u3001\u6587\u4ef6\u96c6\u7ea7\u522b\u7684\u7c92\u5ea6\u3001\u6a21\u5757\u7ea7\u522b\u7684\u7c92\u5ea6\u3001\u4ee5\u53ca\u4f9d\u8d56\u7ea7\u522b\u7684\u7c92\u5ea6\u63a7\u5236\u6253\u5305\uff0c\u6b64\u5916\uff0c\u5305\u542b\u548c\u6392\u9664\u914d\u7f6e\u4e5f\u662f\u652f\u6301\u7684\u3002maven-assembly- plugin\u8981\u6c42\u7528\u6237\u4f7f\u7528\u4e00\u4e2a\u540d\u4e3aassembly.xml\u7684\u5143\u6570\u636e\u6587\u4ef6\u6765\u8868\u8ff0\u6253\u5305\uff0c\u5b83\u7684single\u76ee\u6807\u53ef\u4ee5\u76f4\u63a5\u5728\u547d\u4ee4\u884c\u8c03\u7528\uff0c\u4e5f\u53ef\u4ee5\u88ab\u7ed1\u5b9a\u81f3\u751f\u547d\u5468\u671f\u3002"),(0,a.kt)("h4",{id:"maven-enforcer-plugin"},"maven-enforcer-plugin"),(0,a.kt)("p",null,"\u5728\u4e00\u4e2a\u7a0d\u5927\u4e00\u70b9\u7684\u7ec4\u7ec7\u6216\u56e2\u961f\u4e2d\uff0c\u4f60\u65e0\u6cd5\u4fdd\u8bc1\u6240\u6709\u6210\u5458\u90fd\u719f\u6089Maven\uff0c\u90a3\u4ed6\u4eec\u505a\u4e00\u4e9b\u6bd4\u8f83\u611a\u8822\u7684\u4e8b\u60c5\u5c31\u4f1a\u53d8\u5f97\u5f88\u6b63\u5e38\uff0c\u4f8b\u5982\u7ed9\u9879\u76ee\u5f15\u5165\u4e86\u5916\u90e8\u7684 SNAPSHOT\u4f9d\u8d56\u800c\u5bfc\u81f4\u6784\u5efa\u4e0d\u7a33\u5b9a\uff0c\u4f7f\u7528\u4e86\u4e00\u4e2a\u4e0e\u5927\u5bb6\u4e0d\u4e00\u81f4\u7684Maven\u7248\u672c\u800c\u7ecf\u5e38\u62b1\u6028\u6784\u5efa\u51fa\u73b0\u8be1\u5f02\u95ee\u9898\u3002maven-enforcer- plugin\u80fd\u591f\u5e2e\u52a9\u4f60\u907f\u514d\u4e4b\u7c7b\u95ee\u9898\uff0c\u5b83\u5141\u8bb8\u4f60\u521b\u5efa\u4e00\u7cfb\u5217\u89c4\u5219\u5f3a\u5236\u5927\u5bb6\u9075\u5b88\uff0c\u5305\u62ec\u8bbe\u5b9aJava\u7248\u672c\u3001\u8bbe\u5b9aMaven\u7248\u672c\u3001\u7981\u6b62\u67d0\u4e9b\u4f9d\u8d56\u3001\u7981\u6b62 SNAPSHOT\u4f9d\u8d56\u3002\u53ea\u8981\u5728\u4e00\u4e2a\u7236POM\u914d\u7f6e\u89c4\u5219\uff0c\u7136\u540e\u8ba9\u5927\u5bb6\u7ee7\u627f\uff0c\u5f53\u89c4\u5219\u906d\u5230\u7834\u574f\u7684\u65f6\u5019\uff0cMaven\u5c31\u4f1a\u62a5\u9519\u3002\u9664\u4e86\u6807\u51c6\u7684\u89c4\u5219\u4e4b\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u6269\u5c55\u8be5\u63d2 \u4ef6\uff0c\u7f16\u5199\u81ea\u5df1\u7684\u89c4\u5219\u3002maven-enforcer-plugin\u7684enforce\u76ee\u6807\u8d1f\u8d23\u68c0\u67e5\u89c4\u5219\uff0c\u5b83\u9ed8\u8ba4\u7ed1\u5b9a\u5230\u751f\u547d\u5468\u671f\u7684validate\u9636\u6bb5\u3002"),(0,a.kt)("h4",{id:"maven-release-plugin"},"maven-release-plugin"),(0,a.kt)("p",null,"maven-release-plugin\u7684\u7528\u9014\u662f\u5e2e\u52a9\u81ea\u52a8\u5316\u9879\u76ee\u7248\u672c\u53d1\u5e03\uff0c\u5b83\u4f9d\u8d56\u4e8ePOM\u4e2d\u7684SCM\u4fe1\u606f\u3002release:prepare\u7528\u6765\u51c6\u5907\u7248\u672c\u53d1\u5e03\uff0c\u5177\u4f53\u7684\u5de5\u4f5c\u5305\u62ec\u68c0\u67e5\u662f\u5426\u6709\u672a\u63d0\u4ea4\u4ee3\u7801\u3001\u68c0\u67e5\u662f\u5426\u6709SNAPSHOT\u4f9d\u8d56\u3001\u5347\u7ea7\u9879\u76ee\u7684SNAPSHOT\u7248\u672c\u81f3RELEASE\u7248\u672c\u3001\u4e3a\u9879\u76ee\u6253\u6807\u7b7e\u7b49\u7b49\u3002release:perform\u5219 \u662f\u7b7e\u51fa\u6807\u7b7e\u4e2d\u7684RELEASE\u6e90\u7801\uff0c\u6784\u5efa\u5e76\u53d1\u5e03\u3002\u7248\u672c\u53d1\u5e03\u662f\u975e\u5e38\u7410\u788e\u7684\u5de5\u4f5c\uff0c\u5b83\u6d89\u53ca\u4e86\u5404\u79cd\u68c0\u67e5\uff0c\u800c\u4e14\u7531\u4e8e\u8be5\u5de5\u4f5c\u4ec5\u4ec5\u662f\u5076\u5c14\u9700\u8981\uff0c\u56e0\u6b64\u624b\u52a8\u64cd\u4f5c\u5f88\u5bb9\u6613\u9057\u6f0f\u4e00 \u4e9b\u7ec6\u8282\uff0cmaven-release-plugin\u8ba9\u8be5\u5de5\u4f5c\u53d8\u5f97\u975e\u5e38\u5feb\u901f\u7b80\u4fbf\uff0c\u4e0d\u6613\u51fa\u9519\u3002maven-release-plugin\u7684\u5404\u79cd\u76ee\u6807\u901a\u5e38\u76f4\u63a5\u5728 \u547d\u4ee4\u884c\u8c03\u7528\uff0c\u56e0\u4e3a\u7248\u672c\u53d1\u5e03\u663e\u7136\u4e0d\u662f\u65e5\u5e38\u6784\u5efa\u751f\u547d\u5468\u671f\u7684\u4e00\u90e8\u5206\u3002"),(0,a.kt)("h4",{id:"maven-resources-plugin"},"maven-resources-plugin"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4f7f\u9879\u76ee\u7ed3\u6784\u66f4\u4e3a\u6e05\u6670\uff0cMaven\u533a\u522b\u5bf9\u5f85Java\u4ee3\u7801\u6587\u4ef6\u548c\u8d44\u6e90\u6587\u4ef6\uff0cmaven-compiler-plugin\u7528\u6765\u7f16\u8bd1Java\u4ee3\u7801\uff0cmaven-resources-plugin\u5219\u7528\u6765\u5904\u7406\u8d44\u6e90\u6587\u4ef6\u3002\u9ed8\u8ba4\u7684\u4e3b\u8d44\u6e90\u6587\u4ef6\u76ee\u5f55\u662fsrc/main/resources\uff0c\u5f88\u591a\u7528\u6237\u4f1a\u9700\u8981\u6dfb\u52a0\u989d\u5916\u7684\u8d44\u6e90\u6587\u4ef6\u76ee\u5f55\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6emaven-resources-plugin\u6765\u5b9e\u73b0\u3002\u6b64\u5916\uff0c\u8d44\u6e90\u6587\u4ef6\u8fc7\u6ee4\u4e5f\u662fMaven\u7684\u4e00\u5927\u7279\u6027\uff0c\u4f60\u53ef\u4ee5\u5728\u8d44\u6e90\u6587\u4ef6\u4e2d\u4f7f\u7528${propertyName}\u5f62\u5f0f\u7684Maven\u5c5e\u6027\uff0c\u7136\u540e\u914d\u7f6emaven-resources-plugin\u5f00\u542f\u5bf9\u8d44\u6e90\u6587\u4ef6\u7684\u8fc7\u6ee4\uff0c\u4e4b\u540e\u5c31\u53ef\u4ee5\u9488\u5bf9\u4e0d\u540c\u73af\u5883\u901a\u8fc7\u547d\u4ee4\u884c\u6216\u8005Profile\u4f20\u5165\u5c5e\u6027\u7684\u503c\uff0c\u4ee5\u5b9e\u73b0\u66f4\u4e3a\u7075\u6d3b\u7684\u6784\u5efa\u3002"),(0,a.kt)("h4",{id:"build-helper-maven-plugin"},"build-helper-maven-plugin"),(0,a.kt)("p",null,"Maven\u9ed8\u8ba4\u53ea\u5141\u8bb8\u6307\u5b9a\u4e00\u4e2a\u4e3bJava\u4ee3\u7801\u76ee\u5f55\u548c\u4e00\u4e2a\u6d4b\u8bd5Java\u4ee3\u7801\u76ee\u5f55\uff0c\u867d\u7136\u8fd9\u5176\u5b9e\u662f\u4e2a\u5e94\u5f53\u5c3d\u91cf\u9075\u5b88\u7684\u7ea6\u5b9a\uff0c\u4f46\u5076\u5c14\u4f60\u8fd8\u662f\u4f1a\u5e0c\u671b\u80fd\u591f\u6307\u5b9a\u591a\u4e2a \u6e90\u7801\u76ee\u5f55\uff08\u4f8b\u5982\u4e3a\u4e86\u5e94\u5bf9\u9057\u7559\u9879\u76ee\uff09\uff0cbuild-helper-maven-plugin\u7684add-source\u76ee\u6807\u5c31\u662f\u670d\u52a1\u4e8e\u8fd9\u4e2a\u76ee\u7684\uff0c\u901a\u5e38\u5b83\u88ab\u7ed1\u5b9a\u5230 \u9ed8\u8ba4\u751f\u547d\u5468\u671f\u7684generate-sources\u9636\u6bb5\u4ee5\u6dfb\u52a0\u989d\u5916\u7684\u6e90\u7801\u76ee\u5f55\u3002\u9700\u8981\u5f3a\u8c03\u7684\u662f\uff0c\u8fd9\u79cd\u505a\u6cd5\u8fd8\u662f\u4e0d\u63a8\u8350\u7684\uff0c\u56e0\u4e3a\u5b83\u7834\u574f\u4e86 Maven\u7684\u7ea6\u5b9a\uff0c\u800c\u4e14\u53ef\u80fd\u4f1a\u9047\u5230\u5176\u4ed6\u4e25\u683c\u9075\u5b88\u7ea6\u5b9a\u7684\u63d2\u4ef6\u5de5\u5177\u65e0\u6cd5\u6b63\u786e\u8bc6\u522b\u989d\u5916\u7684\u6e90\u7801\u76ee\u5f55\u3002\nbuild-helper-maven-plugin\u7684\u53e6\u4e00\u4e2a\u975e\u5e38\u6709\u7528\u7684\u76ee\u6807\u662fattach-artifact\uff0c\u4f7f\u7528\u8be5\u76ee\u6807\u4f60\u53ef\u4ee5\u4ee5classifier\u7684\u5f62\u5f0f\u9009\u53d6\u90e8\u5206\u9879\u76ee\u6587\u4ef6\u751f\u6210\u9644\u5c5e\u6784\u4ef6\uff0c\u5e76\u540c\u65f6install\u5230\u672c\u5730\u4ed3\u5e93\uff0c\u4e5f\u53ef\u4ee5deploy\u5230\u8fdc\u7a0b\u4ed3\u5e93\u3002"),(0,a.kt)("h4",{id:"versions-maven-plugin"},"versions-maven-plugin"),(0,a.kt)("p",null,"\u5f88\u591aMaven\u7528\u6237\u9047\u5230\u8fc7\u8fd9\u6837\u4e00\u4e2a\u95ee\u9898\uff0c\u5f53\u9879\u76ee\u5305\u542b\u5927\u91cf\u6a21\u5757\u7684\u65f6\u5019\uff0c\u4e3a\u4ed6\u4eec\u96c6\u4f53\u66f4\u65b0\u7248\u672c\u5c31\u53d8\u6210\u4e00\u4ef6\u70e6\u4eba\u7684\u4e8b\u60c5\uff0c\u5230\u5e95\u6709\u6ca1\u6709\u81ea\u52a8\u5316\u5de5\u5177\u80fd\u5e2e\u52a9\u5b8c\u6210\u8fd9\u4ef6 \u4e8b\u60c5\u5462\uff1f\uff08\u5f53\u7136\u4f60\u53ef\u4ee5\u4f7f\u7528sed\u4e4b\u7c7b\u7684\u6587\u672c\u64cd\u4f5c\u5de5\u5177\uff0c\u4e0d\u8fc7\u4e0d\u5728\u672c\u6587\u8ba8\u8bba\u8303\u56f4\uff09\u7b54\u6848\u662f\u80af\u5b9a\u7684\uff0cversions-maven- plugin\u63d0\u4f9b\u4e86\u5f88\u591a\u76ee\u6807\u5e2e\u52a9\u4f60\u7ba1\u7406Maven\u9879\u76ee\u7684\u5404\u79cd\u7248\u672c\u4fe1\u606f\u3002\u4f8b\u5982\u6700\u5e38\u7528\u7684\uff0c\u547d\u4ee4 mvn versions:set -DnewVersion=1.1-SNAPSHOT \u5c31\u80fd\u5e2e\u52a9\u4f60\u628a\u6240\u6709\u6a21\u5757\u7684\u7248\u672c\u66f4\u65b0\u52301.1-SNAPSHOT\u3002\u8be5\u63d2\u4ef6\u8fd8\u63d0\u4f9b\u4e86\u5176\u4ed6\u4e00\u4e9b\u5f88\u6709\u7528\u7684\u76ee\u6807\uff0cdisplay-dependency- updates\u80fd\u544a\u8bc9\u4f60\u9879\u76ee\u4f9d\u8d56\u6709\u54ea\u4e9b\u53ef\u7528\u7684\u66f4\u65b0\uff1b\u7c7b\u4f3c\u7684display-plugin-updates\u80fd\u544a\u8bc9\u4f60\u53ef\u7528\u7684\u63d2\u4ef6\u66f4\u65b0\uff1b\u7136\u540euse- latest-versions\u80fd\u81ea\u52a8\u5e2e\u4f60\u5c06\u6240\u6709\u4f9d\u8d56\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\u3002\u6700\u540e\uff0c\u5982\u679c\u4f60\u5bf9\u6240\u505a\u7684\u66f4\u6539\u6ee1\u610f\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 mvn versions:commit \u63d0\u4ea4\uff0c\u4e0d\u6ee1\u610f\u7684\u8bdd\u4e5f\u53ef\u4ee5\u4f7f\u7528 mvn versions:revert \u8fdb\u884c\u64a4\u9500\u3002"))}d.isMDXComponent=!0}}]);