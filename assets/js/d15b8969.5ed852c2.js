"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4367],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),i=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=i(t.components);return r.createElement(l.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,u=t.originalType,l=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),s=i(n),f=a,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||u;return n?r.createElement(m,o(o({ref:e},c),{},{components:n})):r.createElement(m,o({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var u=n.length,o=new Array(u);o[0]=f;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[s]="string"==typeof t?t:a,o[1]=p;for(var i=2;i<u;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1398:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>u,metadata:()=>p,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const u={},o=void 0,p={unversionedId:"study/net/tun_tap",id:"study/net/tun_tap",title:"tun_tap",description:"Tun/Tap",source:"@site/docs/study/net/tun_tap.md",sourceDirName:"study/net",slug:"/study/net/tun_tap",permalink:"/docs/study/net/tun_tap",draft:!1,tags:[],version:"current",lastUpdatedAt:1699836016,formattedLastUpdatedAt:"2023\u5e7411\u670813\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"P2P \u7f51\u7edc NAT \u7a7f\u900f\u539f\u7406(\u6253\u6d1e\u65b9\u6848)",permalink:"/docs/study/net/p2p"},next:{title:"vpn",permalink:"/docs/study/net/vpn"}},l={},i=[{value:"Tun/Tap",id:"tuntap",level:3}],c={toc:i},s="wrapper";function d(t){let{components:e,...u}=t;return(0,a.kt)(s,(0,r.Z)({},c,u,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"tuntap"},"Tun/Tap"),(0,a.kt)("p",null,"\u5728\u8ba1\u7b97\u673a\u7f51\u7edc\u4e2d\uff0cTUN \u4e0e TAP \u662f\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u4e2d\u7684\u865a\u62df\u7f51\u7edc\u8bbe\u5907\u3002\u4e0d\u540c\u4e8e\u666e\u901a\u9760\u786c\u4ef6\u7f51\u8def\u677f\u5361\u5b9e\u73b0\u7684\u8bbe\u5907\uff0c\u8fd9\u4e9b\u865a\u62df\u7684\u7f51\u7edc\u8bbe\u5907\u5168\u90e8\u7528\u8f6f\u4ef6\u5b9e\u73b0\uff0c\u5e76\u5411\u8fd0\u884c\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u7684\u8f6f\u4ef6\u63d0\u4f9b\u4e0e\u786c\u4ef6\u7684\u7f51\u7edc\u8bbe\u5907\u5b8c\u5168\u76f8\u540c\u7684\u529f\u80fd\u3002"),(0,a.kt)("p",null,"TAP \u7b49\u540c\u4e8e\u4e00\u4e2a\u4ee5\u592a\u7f51\u8bbe\u5907\uff0c\u5b83\u64cd\u4f5c\u7b2c\u4e8c\u5c42\u6570\u636e\u5305\u5982\u4ee5\u592a\u7f51\u6570\u636e\u5e27\u3002TUN \u6a21\u62df\u4e86\u7f51\u7edc\u5c42\u8bbe\u5907\uff0c\u64cd\u4f5c\u7b2c\u4e09\u5c42\u6570\u636e\u5305\u6bd4\u5982 IP \u6570\u636e\u5c01\u5305\u3002"),(0,a.kt)("p",null,"\u64cd\u4f5c\u7cfb\u7edf\u901a\u8fc7 TUN/TAP \u8bbe\u5907\u5411\u7ed1\u5b9a\u8be5\u8bbe\u5907\u7684\u7528\u6237\u7a7a\u95f4\u7684\u7a0b\u5e8f\u53d1\u9001\u6570\u636e\uff0c\u53cd\u4e4b\uff0c\u7528\u6237\u7a7a\u95f4\u7684\u7a0b\u5e8f\u4e5f\u53ef\u4ee5\u50cf\u64cd\u4f5c\u786c\u4ef6\u7f51\u7edc\u8bbe\u5907\u90a3\u6837\uff0c\u901a\u8fc7 TUN/TAP \u8bbe\u5907\u53d1\u9001\u6570\u636e\u3002\u5728\u540e\u79cd\u60c5\u51b5\u4e0b\uff0cTUN/TAP \u8bbe\u5907\u5411\u64cd\u4f5c\u7cfb\u7edf\u7684\u7f51\u7edc\u6808\u6295\u9012\uff08\u6216\u201c\u6ce8\u5165\u201d\uff09\u6570\u636e\u5305\uff0c\u4ece\u800c\u6a21\u62df\u4ece\u5916\u90e8\u63a5\u53d7\u6570\u636e\u7684\u8fc7\u7a0b\u3002"),(0,a.kt)("p",null,"Tun \u865a\u62df\u8bbe\u5907\u548c\u7269\u7406\u7f51\u5361\u7684\u533a\u522b\u662f Tun \u865a\u62df\u8bbe\u5907\u662f IP \u5c42\u8bbe\u5907\uff0c\u4ece/dev/net/tun \u5b57\u7b26\u8bbe\u5907\u4e0a\u8bfb\u53d6\u7684\u662f IP \u6570\u636e\u5305\uff0c\u5199\u5165\u7684\u4e5f\u53ea\u80fd\u662f IP \u6570\u636e\u5305\uff0c\u56e0\u6b64\u4e0d\u80fd\u8fdb\u884c\u4e8c\u5c42\u64cd\u4f5c\uff0c\u5982\u53d1\u9001 ARP \u8bf7\u6c42\u548c\u4ee5\u592a\u7f51\u5e7f\u64ad\u3002\u4e0e\u4e4b\u76f8\u5bf9\u7684\u662f\uff0cTap \u865a\u62df\u8bbe\u5907\u662f\u4ee5\u592a\u7f51\u8bbe\u5907\uff0c\u5904\u7406\u7684\u662f\u4e8c\u5c42\u4ee5\u592a\u7f51\u6570\u636e\u5e27\uff0c\u4ece/dev/net/tun \u5b57\u7b26\u8bbe\u5907\u4e0a\u8bfb\u53d6\u7684\u662f\u4ee5\u592a\u7f51\u6570\u636e\u5e27\uff0c\u5199\u5165\u7684\u4e5f\u53ea\u80fd\u662f\u4ee5\u592a\u7f51\u6570\u636e\u5e27\u3002\u4ece\u8fd9\u70b9\u6765\u770b\uff0cTap \u865a\u62df\u8bbe\u5907\u548c\u771f\u5b9e\u7684\u7269\u7406\u7f51\u5361\u7684\u80fd\u529b\u66f4\u63a5\u8fd1\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(7825).Z},"\u539f\u7406\u56fe")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.lxlinux.net/12108.html"},"\u4ecb\u7ecd Linux \u4e0b\u7684 Tun/Tap"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5199\u7684\u771f\u4e0d\u9519\uff0c\u4e86\u89e3 tun\u3001tap \u4ee5\u53ca vpn \u7684\u539f\u7406\u56fe"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.junmajinlong.com/virtual/network/all_about_tun_tap/index.html"},"\u7406\u89e3 Linux \u865a\u62df\u7f51\u5361\u8bbe\u5907 tun/tap \u7684\u4e00\u5207"))))}d.isMDXComponent=!0},7825:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/files/vpn-yuanlitu-0ce325275673446da8a9cf4e89759ca3.jpg"}}]);