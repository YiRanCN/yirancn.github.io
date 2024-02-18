"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1956],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(r),y=o,f=d["".concat(l,".").concat(y)]||d[y]||s[y]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[d]="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5027:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var n=r(8168),o=(r(6540),r(5680));const a={},i=void 0,u={unversionedId:"study/net/UDP",id:"study/net/UDP",title:"UDP",description:"UDP",source:"@site/docs/study/net/UDP.md",sourceDirName:"study/net",slug:"/study/net/UDP",permalink:"/docs/study/net/UDP",draft:!1,tags:[],version:"current",lastUpdatedAt:1708262155,formattedLastUpdatedAt:"2024\u5e742\u670818\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"TCP",permalink:"/docs/study/net/TCP"},next:{title:"Linux ip \u547d\u4ee4",permalink:"/docs/study/net/ip"}},l={},c=[{value:"UDP",id:"udp",level:3},{value:"\u57fa\u4e8e UDP \u7684\u53ef\u9760\u6027\u534f\u8bae",id:"\u57fa\u4e8e-udp-\u7684\u53ef\u9760\u6027\u534f\u8bae",level:3},{value:"QUIC",id:"quic",level:4},{value:"RUDP",id:"rudp",level:4},{value:"RTP",id:"rtp",level:4},{value:"UDT",id:"udt",level:4}],p={toc:c},d="wrapper";function s(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"udp"},"UDP"),(0,o.yg)("p",null,"UDP (User Datagram Protocol) \u662f\u4e00\u79cd\u65e0\u8fde\u63a5\u7684\u7f51\u7edc\u4f20\u8f93\u534f\u8bae\uff0c\u5b83\u4e0d\u4fdd\u8bc1\u6570\u636e\u4f20\u8f93\u7684\u53ef\u9760\u6027\u548c\u987a\u5e8f\uff0c\u4f46\u5177\u6709\u9ad8\u6548\u3001\u4f4e\u5ef6\u8fdf\u548c\u7075\u6d3b\u7684\u7279\u70b9\u3002UDP \u5e38\u7528\u4e8e\u5b9e\u65f6\u901a\u4fe1\u5e94\u7528\u7a0b\u5e8f\uff0c\u4f8b\u5982\u97f3\u9891\u3001\u89c6\u9891\u548c\u5728\u7ebf\u6e38\u620f\u7b49\u3002\u7531\u4e8e UDP \u5c06\u6570\u636e\u5305\u53d1\u9001\u5230\u76ee\u6807\u5730\u5740\uff0c\u800c\u4e0d\u9700\u8981\u5efa\u7acb\u8fde\u63a5\uff0c\u56e0\u6b64\u5b83\u6bd4 TCP \u66f4\u52a0\u7b80\u5355\u3001\u8f7b\u91cf\u7ea7\u548c\u5feb\u901f\u3002\u4f46\u662f\uff0c\u7531\u4e8e\u5b83\u4e0d\u63d0\u4f9b\u6570\u636e\u5b8c\u6574\u6027\u68c0\u67e5\u548c\u91cd\u4f20\u673a\u5236\uff0c\u56e0\u6b64\u5728\u4e00\u4e9b\u5e94\u7528\u573a\u666f\u4e0b\u53ef\u80fd\u4f1a\u51fa\u73b0\u6570\u636e\u4e22\u5931\u6216\u9519\u8bef\u7684\u95ee\u9898\u3002"),(0,o.yg)("h3",{id:"\u57fa\u4e8e-udp-\u7684\u53ef\u9760\u6027\u534f\u8bae"},"\u57fa\u4e8e UDP \u7684\u53ef\u9760\u6027\u534f\u8bae"),(0,o.yg)("h4",{id:"quic"},"QUIC"),(0,o.yg)("h4",{id:"rudp"},"RUDP"),(0,o.yg)("h4",{id:"rtp"},"RTP"),(0,o.yg)("h4",{id:"udt"},"UDT"))}s.isMDXComponent=!0}}]);