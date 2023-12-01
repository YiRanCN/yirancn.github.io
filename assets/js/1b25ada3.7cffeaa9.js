"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5970],{3905:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>m});var n=l(7294);function u(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){u(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function a(e,t){if(null==e)return{};var l,n,u=function(e,t){if(null==e)return{};var l,n,u={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(u[l]=e[l]);return u}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(u[l]=e[l])}return u}var c=n.createContext({}),o=function(e){var t=n.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},d=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var l=e.components,u=e.mdxType,r=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=o(l),s=u,m=p["".concat(c,".").concat(s)]||p[s]||k[s]||r;return l?n.createElement(m,i(i({ref:t},d),{},{components:l})):n.createElement(m,i({ref:t},d))}));function m(e,t){var l=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var r=l.length,i=new Array(r);i[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:u,i[1]=a;for(var o=2;o<r;o++)i[o]=l[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}s.displayName="MDXCreateElement"},3563:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var n=l(7462),u=(l(7294),l(3905));const r={sidebar_position:3},i="MQTT \u8bbe\u5907\u63a5\u5165",a={unversionedId:"iotcloud/connect/mqtt",id:"iotcloud/connect/mqtt",title:"MQTT \u8bbe\u5907\u63a5\u5165",description:"\u6211\u89c9\u5f97\u5927\u6982\u5206\u4e24\u79cd\u6a21\u5f0f\uff1a",source:"@site/docs/iotcloud/connect/mqtt.md",sourceDirName:"iotcloud/connect",slug:"/iotcloud/connect/mqtt",permalink:"/docs/iotcloud/connect/mqtt",draft:!1,tags:[],version:"current",lastUpdatedAt:1701410582,formattedLastUpdatedAt:"2023\u5e7412\u67081\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"iotCloudSidebar",previous:{title:"\u6982\u8ff0",permalink:"/docs/iotcloud/connect/"},next:{title:"TCP \u8bbe\u5907\u63a5\u5165",permalink:"/docs/iotcloud/connect/tcp"}},c={},o=[{value:"\u8bbe\u5907 connect",id:"\u8bbe\u5907-connect",level:3},{value:"\u8bbe\u5907\u5bf9\u63a5\u672c\u5e73\u53f0\u7684\u5c5e\u6027\u534f\u8bae",id:"\u8bbe\u5907\u5bf9\u63a5\u672c\u5e73\u53f0\u7684\u5c5e\u6027\u534f\u8bae",level:3},{value:"\u8bbe\u5907\u4e0a\u62a5\u5c5e\u6027",id:"\u8bbe\u5907\u4e0a\u62a5\u5c5e\u6027",level:4},{value:"\u7528\u6237\u5199\u5165\u5c5e\u6027",id:"\u7528\u6237\u5199\u5165\u5c5e\u6027",level:4},{value:"\u8bbe\u5907\u5bf9\u63a5\u672c\u5e73\u53f0\u7684\u900f\u4f20\u534f\u8bae",id:"\u8bbe\u5907\u5bf9\u63a5\u672c\u5e73\u53f0\u7684\u900f\u4f20\u534f\u8bae",level:3},{value:"\u8bbe\u5907\u4e0a\u62a5\u900f\u4f20\u6570\u636e",id:"\u8bbe\u5907\u4e0a\u62a5\u900f\u4f20\u6570\u636e",level:4},{value:"\u7528\u6237\u5199\u5165\u5c5e\u6027",id:"\u7528\u6237\u5199\u5165\u5c5e\u6027-1",level:4},{value:"\u4e3e\u4f8b\u8bf4\u660e",id:"\u4e3e\u4f8b\u8bf4\u660e",level:3},{value:"\u81ea\u884c\u5b9e\u73b0",id:"\u81ea\u884c\u5b9e\u73b0",level:4},{value:"\u5854\u77f3 DTU",id:"\u5854\u77f3-dtu",level:4},{value:"\u6709\u4eba DTU",id:"\u6709\u4eba-dtu",level:4},{value:"\u56db\u4fe1 DTU",id:"\u56db\u4fe1-dtu",level:4}],d={toc:o},p="wrapper";function k(e){let{components:t,...l}=e;return(0,u.kt)(p,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"mqtt-\u8bbe\u5907\u63a5\u5165"},"MQTT \u8bbe\u5907\u63a5\u5165"),(0,u.kt)("p",null,"\u6211\u89c9\u5f97\u5927\u6982\u5206\u4e24\u79cd\u6a21\u5f0f\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u5bf9\u63a5\u672c\u5e73\u53f0\u7684\u5c5e\u6027\u534f\u8bae"),(0,u.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u5bf9\u63a5\u672c\u5e73\u53f0\u7684\u900f\u4f20\u534f\u8bae")),(0,u.kt)("p",null,"\u4e24\u79cd\u6a21\u5f0f\u7684\u8bbe\u5907 connect \u662f\u4e00\u6837\u7684\u3002"),(0,u.kt)("h3",{id:"\u8bbe\u5907-connect"},"\u8bbe\u5907 connect"),(0,u.kt)("hr",null),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"ClientID device:{deviceCode} \u4e3e\u4f8b\uff1adevice:XoVnVQ2"),(0,u.kt)("li",{parentName:"ul"},"Username {deviceCode} \u4e3e\u4f8b\uff1aXoVnVQ2"),(0,u.kt)("li",{parentName:"ul"},"Password {devicePwd} \u4e3e\u4f8b\uff1aYXOsHbV")),(0,u.kt)("p",null,"\u8fde\u63a5\u6210\u529f\u540e\uff0c\u9ed8\u8ba4\u8ba2\u9605"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"/device/${device.code}/attributes/d")),(0,u.kt)("p",null,"\u53ef\u6839\u636e\u5177\u4f53\u5e94\u7528\u573a\u666f\uff0c\u53d1\u5e03"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"/device/${device.code}/attributes/u"),(0,u.kt)("li",{parentName:"ul"},"/device/${device.code}/attributes/req/u")),(0,u.kt)("p",null,"\u53ef\u6839\u636e\u5177\u4f53\u5e94\u7528\u573a\u666f\uff0c\u8ba2\u9605"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"/device/${device.code}/attributes/res/d")),(0,u.kt)("h3",{id:"\u8bbe\u5907\u5bf9\u63a5\u672c\u5e73\u53f0\u7684\u5c5e\u6027\u534f\u8bae"},"\u8bbe\u5907\u5bf9\u63a5\u672c\u5e73\u53f0\u7684\u5c5e\u6027\u534f\u8bae"),(0,u.kt)("h4",{id:"\u8bbe\u5907\u4e0a\u62a5\u5c5e\u6027"},"\u8bbe\u5907\u4e0a\u62a5\u5c5e\u6027"),(0,u.kt)("hr",null),(0,u.kt)("p",null,"\u6570\u636e\u6d41\u5411"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u8bbe\u5907 >> \u4e91\u7aef >> \u7528\u6237")),(0,u.kt)("p",null,"\u5141\u8bb8\u5c5e\u6027\u7c7b\u578b"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u4e0a\u62a5"),(0,u.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u4e91\u7aef\u5171\u4eab")),(0,u.kt)("p",null,"topic"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"/device/${device.code}/attributes/u"),(0,u.kt)("li",{parentName:"ul"},"/account/${user.account}/${device.code}/attributes/d")),(0,u.kt)("p",null,"plyload"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"[attributeCode:string]"," : ","[value:number|string]")),(0,u.kt)("h4",{id:"\u7528\u6237\u5199\u5165\u5c5e\u6027"},"\u7528\u6237\u5199\u5165\u5c5e\u6027"),(0,u.kt)("hr",null),(0,u.kt)("p",null,"\u6570\u636e\u6d41\u5411"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u7528\u6237 >> \u4e91\u7aef >> \u8bbe\u5907")),(0,u.kt)("p",null,"\u5141\u8bb8\u5c5e\u6027\u7c7b\u578b"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u4e91\u7aef\u4e0b\u53d1"),(0,u.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u4e91\u7aef\u5171\u4eab \u6ce8\uff1a\u4e91\u7aef\u6536\u5230\u6b64\u5c5e\u6027\u540e\uff0c\u4f1a\u7acb\u5373\u5b58\u50a8\uff1b\u8bbe\u5907\u6536\u5230\u6b64\u5c5e\u6027\u540e\uff0c\u5e94\u8be5\u7acb\u5373\u4e0a\u62a5\uff1b"),(0,u.kt)("li",{parentName:"ul"},"\u4e91\u7aef\u79c1\u6709 \u6ce8\uff1a\u6b64\u7c7b\u5c5e\u6027\u53ea\u4f1a\u5230\u4e91\u7aef\uff0c\u4e0d\u4f1a\u4e0b\u53d1\u7ed9\u8bbe\u5907")),(0,u.kt)("p",null,"topic"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"/account/${user.account}/${device.code}/attributes/u"),(0,u.kt)("li",{parentName:"ul"},"/device/${device.code}/attributes/d")),(0,u.kt)("p",null,"plyload"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"[attributeCode:string]"," : ","[value:number|string]")),(0,u.kt)("h3",{id:"\u8bbe\u5907\u5bf9\u63a5\u672c\u5e73\u53f0\u7684\u900f\u4f20\u534f\u8bae"},"\u8bbe\u5907\u5bf9\u63a5\u672c\u5e73\u53f0\u7684\u900f\u4f20\u534f\u8bae"),(0,u.kt)("h4",{id:"\u8bbe\u5907\u4e0a\u62a5\u900f\u4f20\u6570\u636e"},"\u8bbe\u5907\u4e0a\u62a5\u900f\u4f20\u6570\u636e"),(0,u.kt)("hr",null),(0,u.kt)("p",null,"\u6570\u636e\u6d41\u5411"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u8bbe\u5907 >> \u4e91\u7aef >> \u7528\u6237")),(0,u.kt)("p",null,"\u5141\u8bb8\u5c5e\u6027\u7c7b\u578b"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u4e0a\u62a5"),(0,u.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u4e91\u7aef\u5171\u4eab")),(0,u.kt)("p",null,"topic"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"/device/${device.code}/t/u"),(0,u.kt)("li",{parentName:"ul"},"\u534f\u8bae\u89e3\u6790\u540e\u6a21\u62df /device/${device.code}/attributes/u"),(0,u.kt)("li",{parentName:"ul"},"/account/${user.account}/${device.code}/attributes/d")),(0,u.kt)("p",null,"plyload"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"[attributeCode:string]"," : ","[value:number|string]")),(0,u.kt)("h4",{id:"\u7528\u6237\u5199\u5165\u5c5e\u6027-1"},"\u7528\u6237\u5199\u5165\u5c5e\u6027"),(0,u.kt)("hr",null),(0,u.kt)("p",null,"\u6570\u636e\u6d41\u5411"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u7528\u6237 >> \u4e91\u7aef >> \u8bbe\u5907")),(0,u.kt)("p",null,"\u5141\u8bb8\u5c5e\u6027\u7c7b\u578b"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u4e91\u7aef\u4e0b\u53d1"),(0,u.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u4e91\u7aef\u5171\u4eab \u6ce8\uff1a\u4e91\u7aef\u6536\u5230\u6b64\u5c5e\u6027\u540e\uff0c\u4f1a\u7acb\u5373\u5b58\u50a8\uff1b\u8bbe\u5907\u6536\u5230\u6b64\u5c5e\u6027\u540e\uff0c\u5e94\u8be5\u7acb\u5373\u4e0a\u62a5\uff1b"),(0,u.kt)("li",{parentName:"ul"},"\u4e91\u7aef\u79c1\u6709 \u6ce8\uff1a\u6b64\u7c7b\u5c5e\u6027\u53ea\u4f1a\u5230\u4e91\u7aef\uff0c\u4e0d\u4f1a\u4e0b\u53d1\u7ed9\u8bbe\u5907")),(0,u.kt)("p",null,"topic"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"/account/${user.account}/${device.code}/attributes/u"),(0,u.kt)("li",{parentName:"ul"},"\u534f\u8bae\u89e3\u6790\u540e\u6a21\u62df /device/${device.code}/t/d")),(0,u.kt)("p",null,"plyload"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"[attributeCode:string]"," : ","[value:number|string]")),(0,u.kt)("h3",{id:"\u4e3e\u4f8b\u8bf4\u660e"},"\u4e3e\u4f8b\u8bf4\u660e"),(0,u.kt)("h4",{id:"\u81ea\u884c\u5b9e\u73b0"},"\u81ea\u884c\u5b9e\u73b0"),(0,u.kt)("p",null,"\u6709\u8bbe\u5907\u7aef\u7814\u53d1\u80fd\u529b\u7684\u53ef\u4ee5\u6839\u636e\u4e0a\u9762\u7684\u534f\u8bae\u81ea\u884c\u7814\u53d1\u5b9e\u73b0\u3002"),(0,u.kt)("p",null,"\u6216\u8005\u8bbe\u5907\u91cf\u5927\u7684\uff0c\u53ef\u4ee5\u8ba9 DTU \u6216\u6a21\u7ec4\u5382\u5546\u6839\u636e\u4e0a\u9762\u7684\u534f\u8bae\u5b9e\u73b0\u3002"),(0,u.kt)("p",null,"\u76ee\u524d\uff0c\u672c\u5e73\u53f0\u8fd8\u65e0\u6cd5\u505a\u5230\u8ba9\u4e0b\u9762\u7684 DTU \u5382\u5546\u5b9e\u73b0\u5c5e\u6027\u4ea4\u4e92\u534f\u8bae\uff0c\u4e0b\u9762\u4e3e\u4f8b\uff0c\u53ea\u4e3e\u4f8b\u900f\u4f20\u534f\u8bae\u65b9\u5f0f\u3002\n\u76f8\u5bf9\u4e8e MQTT \u900f\u4f20\uff0c100%\u7684 DTU \u5382\u5546\u90fd\u5b9e\u73b0\u4e86 TCP \u534f\u8bae\u63a5\u5165\uff0c\u5927\u5bb6\u8d2d\u4e70 DTU \u7684\u65f6\u5019\u8bf7\u4ed4\u7ec6\u8fa8\u522b\uff0c\u5e76\u975e\u6240\u6709\u7684 DTU \u90fd\u652f\u6301 MQTT \u900f\u4f20\u3002"),(0,u.kt)("h4",{id:"\u5854\u77f3-dtu"},"\u5854\u77f3 DTU"),(0,u.kt)("h4",{id:"\u6709\u4eba-dtu"},"\u6709\u4eba DTU"),(0,u.kt)("h4",{id:"\u56db\u4fe1-dtu"},"\u56db\u4fe1 DTU"))}k.isMDXComponent=!0}}]);