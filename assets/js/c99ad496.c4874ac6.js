"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3088],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(n),d=a,y=g["".concat(s,".").concat(d)]||g[d]||u[d]||o;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const o={},l="JDK17",i={unversionedId:"study/program/JAVA/JDK17",id:"study/program/JAVA/JDK17",title:"JDK17",description:"\u9650\u5236\u7c7b\u7ee7\u627f sealed \u7c7b",source:"@site/docs/study/program/JAVA/JDK17.md",sourceDirName:"study/program/JAVA",slug:"/study/program/JAVA/JDK17",permalink:"/docs/study/program/JAVA/JDK17",draft:!1,tags:[],version:"current",lastUpdatedAt:1725590261,formattedLastUpdatedAt:"2024\u5e749\u67086\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"JDK17-bin",permalink:"/docs/study/program/JAVA/JDK17-bin"},next:{title:"JDK21",permalink:"/docs/study/program/JAVA/JDK21"}},s={},c=[{value:"\u9650\u5236\u7c7b\u7ee7\u627f sealed \u7c7b",id:"\u9650\u5236\u7c7b\u7ee7\u627f-sealed-\u7c7b",level:3},{value:"Pattern Matching for Switch \u8bed\u6cd5",id:"pattern-matching-for-switch-\u8bed\u6cd5",level:3},{value:"Record \u7c7b",id:"record-\u7c7b",level:3},{value:"\u589e\u5f3a\u7684 Java \u96c6\u5408\u5e93",id:"\u589e\u5f3a\u7684-java-\u96c6\u5408\u5e93",level:3},{value:"of() \u65b9\u6cd5\uff1a\u521b\u5efa\u4e00\u4e2a\u4e0d\u53ef\u53d8\u7684\u96c6\u5408",id:"of-\u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a\u4e0d\u53ef\u53d8\u7684\u96c6\u5408",level:4},{value:"forEach() \u65b9\u6cd5\uff1a\u904d\u5386\u96c6\u5408",id:"foreach-\u65b9\u6cd5\u904d\u5386\u96c6\u5408",level:4},{value:"Collectors \u7c7b\uff1a\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u5f52\u7ea6\u64cd\u4f5c",id:"collectors-\u7c7b\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u5f52\u7ea6\u64cd\u4f5c",level:4},{value:"takeWhile() \u65b9\u6cd5\u548c dropWhile() \u65b9\u6cd5\uff1a\u6839\u636e\u6761\u4ef6\u622a\u53d6\u96c6\u5408",id:"takewhile-\u65b9\u6cd5\u548c-dropwhile-\u65b9\u6cd5\u6839\u636e\u6761\u4ef6\u622a\u53d6\u96c6\u5408",level:4},{value:"toArray(IntFunction&lt;T[]&gt;) \u65b9\u6cd5\uff1a\u8fd4\u56de\u96c6\u5408\u4e2d\u7684\u6240\u6709\u5143\u7d20\u5230\u4e00\u4e2a\u65b0\u6570\u7ec4\u4e2d",id:"toarrayintfunctiont-\u65b9\u6cd5\u8fd4\u56de\u96c6\u5408\u4e2d\u7684\u6240\u6709\u5143\u7d20\u5230\u4e00\u4e2a\u65b0\u6570\u7ec4\u4e2d",level:4}],p={toc:c},g="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"jdk17"},"JDK17"),(0,a.yg)("h3",{id:"\u9650\u5236\u7c7b\u7ee7\u627f-sealed-\u7c7b"},"\u9650\u5236\u7c7b\u7ee7\u627f sealed \u7c7b"),(0,a.yg)("p",null,"Sealed \u7c7b\u662f\u4e00\u79cd\u65b0\u7684\u7c7b\u4fee\u9970\u7b26\uff0c\u7528\u4e8e\u9650\u5236\u7c7b\u7684\u7ee7\u627f\u3002Sealed \u7c7b\u53ef\u4ee5\u63a7\u5236\u54ea\u4e9b\u7c7b\u53ef\u4ee5\u7ee7\u627f\u81ea\u5b83\uff0c\u8fd9\u6837\u53ef\u4ee5\u4f7f\u5f97\u4ee3\u7801\u66f4\u52a0\u5b89\u5168\u3001\u53ef\u7ef4\u62a4\u3002Sealed \u7c7b\u7684\u4f7f\u7528\u53ef\u4ee5\u5728\u7f16\u8bd1\u65f6\u5f3a\u5236\u6267\u884c\u4e00\u4e9b\u89c4\u5219\uff0c\u4ece\u800c\u907f\u514d\u8fd0\u884c\u65f6\u9519\u8bef\u3002"),(0,a.yg)("h3",{id:"pattern-matching-for-switch-\u8bed\u6cd5"},"Pattern Matching for Switch \u8bed\u6cd5"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Java"},'public static void main(String[] args) {\n    Object obj = "hello";\n\n    switch (obj) {\n        case String s && s.length() > 5 -> System.out.println("\u957f\u5b57\u7b26\u4e32");\n        case String s -> System.out.println("\u77ed\u5b57\u7b26\u4e32");\n        case Integer i -> System.out.println("\u6574\u578b\u6570");\n        default -> System.out.println("\u4e0d\u652f\u6301\u7684\u7c7b\u578b");\n    }\n}\n')),(0,a.yg)("h3",{id:"record-\u7c7b"},"Record \u7c7b"),(0,a.yg)("p",null,"Record \u7c7b\u662f\u4e00\u79cd\u65b0\u7684\u6570\u636e\u7c7b\uff0c\u53ef\u4ee5\u7528\u4e8e\u5b9a\u4e49\u53ea\u6709\u5c5e\u6027\u548c\u8bbf\u95ee\u5668\u7684\u7b80\u5355\u6570\u636e\u5bf9\u8c61\u3002Record \u7c7b\u53ef\u4ee5\u7b80\u5316\u4ee3\u7801\uff0c\u4f7f\u5f97\u4ee3\u7801\u66f4\u52a0\u6613\u8bfb\u3001\u6613\u7ef4\u62a4\u3002Record \u7c7b\u7684\u4f7f\u7528\u53ef\u4ee5\u51cf\u5c11\u4ee3\u7801\u91cf\uff0c\u907f\u514d\u51fa\u73b0\u5927\u91cf\u7684 getter \u548c setter \u65b9\u6cd5\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Java"},'public record Person(String name, int age) {}\n\npublic class RecordExample {\n    public static void main(String[] args) {\n        Person person = new Person("John", 30);\n\n        System.out.println("Name: " + person.name());\n        System.out.println("Age: " + person.age());\n    }\n}\n')),(0,a.yg)("p",null,"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a Person \u7684 Record \u7c7b\uff0c\u5b83\u6709\u4e24\u4e2a\u5b57\u6bb5\uff1aname \u548c age\u3002Record \u7c7b\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u5e26\u6709\u8fd9\u4e9b\u5b57\u6bb5\u7684\u6784\u9020\u51fd\u6570\u3001getter \u65b9\u6cd5\u548c equals\u3001hashCode \u548c toString \u65b9\u6cd5\u3002"),(0,a.yg)("h3",{id:"\u589e\u5f3a\u7684-java-\u96c6\u5408\u5e93"},"\u589e\u5f3a\u7684 Java \u96c6\u5408\u5e93"),(0,a.yg)("h4",{id:"of-\u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a\u4e0d\u53ef\u53d8\u7684\u96c6\u5408"},"of() \u65b9\u6cd5\uff1a\u521b\u5efa\u4e00\u4e2a\u4e0d\u53ef\u53d8\u7684\u96c6\u5408"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Java"},'List<String> list = List.of("apple", "banana", "orange");\nSet<Integer> set = Set.of(1, 2, 3, 4);\nMap<String, Integer> map = Map.of("apple", 1, "banana", 2, "orange", 3);\n')),(0,a.yg)("h4",{id:"foreach-\u65b9\u6cd5\u904d\u5386\u96c6\u5408"},"forEach() \u65b9\u6cd5\uff1a\u904d\u5386\u96c6\u5408"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Java"},'List<String> list = List.of("apple", "banana", "orange");\nlist.forEach(name -> System.out.println(name));\nSet<Integer> set = Set.of(1, 2, 3, 4);\nset.forEach(number -> System.out.println(number));\n')),(0,a.yg)("h4",{id:"collectors-\u7c7b\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u5f52\u7ea6\u64cd\u4f5c"},"Collectors \u7c7b\uff1a\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u5f52\u7ea6\u64cd\u4f5c"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Java"},'List<String> list = List.of("apple", "banana", "orange");\nString joinedString = list.stream().collect(Collectors.joining("-", "[", "]"));\nSystem.out.println(joinedString);\n\nMap<String, Integer> map = Map.of("apple", 1, "banana", 2, "orange", 3);\nMap<Integer, String> reversedMap = map.entrySet().stream().collect(Collectors.toMap(Map.Entry::getValue, Map.Entry::getKey));\nSystem.out.println(reversedMap);\n')),(0,a.yg)("h4",{id:"takewhile-\u65b9\u6cd5\u548c-dropwhile-\u65b9\u6cd5\u6839\u636e\u6761\u4ef6\u622a\u53d6\u96c6\u5408"},"takeWhile() \u65b9\u6cd5\u548c dropWhile() \u65b9\u6cd5\uff1a\u6839\u636e\u6761\u4ef6\u622a\u53d6\u96c6\u5408"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Java"},"List<Integer> list = List.of(1, 2, 3, 4, 5, 6, 7);\nList<Integer> takenList = list.stream().takeWhile(number -> number < 5).collect(Collectors.toList());\nSystem.out.println(takenList);\n\nList<Integer> dropedList = list.stream().dropWhile(number -> number < 5).collect(Collectors.toList());\nSystem.out.println(dropedList);\n")),(0,a.yg)("h4",{id:"toarrayintfunctiont-\u65b9\u6cd5\u8fd4\u56de\u96c6\u5408\u4e2d\u7684\u6240\u6709\u5143\u7d20\u5230\u4e00\u4e2a\u65b0\u6570\u7ec4\u4e2d"},"toArray(IntFunction<T[]>) \u65b9\u6cd5\uff1a\u8fd4\u56de\u96c6\u5408\u4e2d\u7684\u6240\u6709\u5143\u7d20\u5230\u4e00\u4e2a\u65b0\u6570\u7ec4\u4e2d"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Java"},'List<String> list = List.of("apple", "banana", "orange");\nString[] array = list.toArray(String[]::new);\nSystem.out.println(Arrays.toString(array));\n')))}u.isMDXComponent=!0}}]);