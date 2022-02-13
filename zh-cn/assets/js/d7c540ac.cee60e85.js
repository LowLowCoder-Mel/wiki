"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7068],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6800:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:2,sidebar_label:"\u72b6\u6001\u8f6c\u79fb"},s="\u72b6\u6001\u8f6c\u79fb",c={unversionedId:"gear/gear-state/state-transition",id:"gear/gear-state/state-transition",title:"\u72b6\u6001\u8f6c\u79fb",description:"\u6bcf\u4e2a\u7cfb\u7edf\u90fd\u9075\u5faa\u7cfb\u7edf\u72b6\u6001\u6f14\u53d8\u6240\u4f9d\u636e\u7684\u89c4\u5219\u3002 \u5f53\u7f51\u7edc\u5904\u7406\u65b0\u7684\u8f93\u5165\u6570\u636e\u65f6\uff0c\u72b6\u6001\u4f1a\u6839\u636e\u72b6\u6001\u8f6c\u6362\u89c4\u5219\u524d\u8fdb\u3002 \u8fd9\u4e9b\u8f93\u5165\u6570\u636e\u88ab\u6253\u5305\u5728\u88ab\u79f0\u4e3a\u4ea4\u6613(transactions)\u7684\u7ec6\u7c92\u5ea6\u4fe1\u606f\u4e2d\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/gear/gear-state/state-transition.md",sourceDirName:"gear/gear-state",slug:"/gear/gear-state/state-transition",permalink:"/zh-cn/gear/gear-state/state-transition",editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/gear/gear-state/state-transition.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u72b6\u6001\u8f6c\u79fb"},sidebar:"tutorialSidebar",previous:{title:"\u72b6\u6001\u7ec4\u4ef6",permalink:"/zh-cn/gear/gear-state/state"},next:{title:"\u5185\u5b58\u5e76\u884c",permalink:"/zh-cn/gear/memory-parallelism"}},p=[{value:"\u521b\u5efa\u7a0b\u5e8f",id:"\u521b\u5efa\u7a0b\u5e8f",children:[],level:3},{value:"\u53d1\u9001\u6d88\u606f",id:"\u53d1\u9001\u6d88\u606f",children:[],level:3},{value:"\u6d88\u606f\u51fa\u5217",id:"\u6d88\u606f\u51fa\u5217",children:[],level:3},{value:"\u4f59\u989d\u4ea4\u6613",id:"\u4f59\u989d\u4ea4\u6613",children:[],level:3},{value:"\u6d88\u606f\u3001\u533a\u5757\u548c\u4e8b\u4ef6\u7684\u751f\u547d\u5468\u671f",id:"\u6d88\u606f\u533a\u5757\u548c\u4e8b\u4ef6\u7684\u751f\u547d\u5468\u671f",children:[],level:3}],u={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u72b6\u6001\u8f6c\u79fb"},"\u72b6\u6001\u8f6c\u79fb"),(0,i.kt)("p",null,"\u6bcf\u4e2a\u7cfb\u7edf\u90fd\u9075\u5faa\u7cfb\u7edf\u72b6\u6001\u6f14\u53d8\u6240\u4f9d\u636e\u7684\u89c4\u5219\u3002 \u5f53\u7f51\u7edc\u5904\u7406\u65b0\u7684\u8f93\u5165\u6570\u636e\u65f6\uff0c\u72b6\u6001\u4f1a\u6839\u636e\u72b6\u6001\u8f6c\u6362\u89c4\u5219\u524d\u8fdb\u3002 \u8fd9\u4e9b\u8f93\u5165\u6570\u636e\u88ab\u6253\u5305\u5728\u88ab\u79f0\u4e3a\u4ea4\u6613(transactions)\u7684\u7ec6\u7c92\u5ea6\u4fe1\u606f\u4e2d\u3002"),(0,i.kt)("p",null,"Gear \u8282\u70b9\u7ef4\u62a4\u548c\u540c\u6b65\u4e00\u4e2a\u4ea4\u6613\u6c60\uff0c\u5176\u4e2d\u5305\u542b\u6240\u6709\u65b0\u4ea4\u6613\u3002\u5f53\u4efb\u4f55\u8282\u70b9\uff08\u65e0\u8bba\u662f\u5426\u4e3a\u9a8c\u8bc1\u8005\uff09\u6536\u5230\u4e00\u4e2a\u4ea4\u6613\u65f6\uff0c\u8be5\u8282\u70b9\u4f1a\u5c06\u8fd9\u4e2a\u4ea4\u4f20\u64ad\u7ed9\u6240\u6709\u8fde\u63a5\u7684\u8282\u70b9\u3002\u5173\u4e8e\u4ea4\u6613\u6c60\u5982\u4f55\u8fd0\u4f5c\u7684\u66f4\u9ad8\u7ea7\u5185\u5bb9\uff0c\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/learn-substrate/tx-pool"},"Substrate \u6587\u6863")," \u3002 \u94fe\u63a5\u66ff\u6362\u4e3a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/concepts/tx-pool/"},"https://docs.substrate.io/v3/concepts/tx-pool/")),(0,i.kt)("p",null,"\u5f53 Gear \u9a8c\u8bc1\u8282\u70b9\u751f\u6210\u65b0\u5757\u65f6\uff0c\u6c60\u4e2d\u7684\u4e00\u4e9b\uff08\u6216\u6240\u6709\uff09\u4ea4\u6613\u5c06\u5408\u5e76\u5230\u4e00\u4e2a\u533a\u5757\u4e2d\uff0c\u7f51\u7edc\u5c06\u901a\u8fc7\u8be5\u5757\u8fdb\u884c\u72b6\u6001\u8f6c\u6362\u3002\u5728\u751f\u6210\u4e0b\u4e00\u4e2a\u5757\u4e4b\u524d\uff0c\u4e0a\u4e00\u4e2a\u5757\u4e2d\u672a\u6253\u5305\u7684\u4ea4\u6613\u5c06\u4fdd\u7559\u5728\u6c60\u5b50\u4e2d\uff0c\u76f4\u5230\u4e0b\u4e00\u4e2a\u533a\u5757\u4ea7\u751f\u3002"),(0,i.kt)("p",null,"Gear \u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\u7684\u4ea4\u6613\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa\u7a0b\u5e8f(program)")," : \u7528\u6237\u4e0a\u4f20\u65b0\u7684\u7a0b\u5e8f\uff08\u667a\u80fd\u5408\u7ea6\uff09"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u53d1\u9001\u6d88\u606f")," : \u7a0b\u5e8f\u6216\u7528\u6237\u5c06\u65b0\u6d88\u606f\u653e\u5165\u6d88\u606f\u961f\u5217"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u53d6\u51fa\u6d88\u606f")," : \u9a8c\u8bc1\u8005\uff08\u5757\u751f\u4ea7\u8005\uff09\u4ece\u6d88\u606f\u961f\u5217\u53d6\u51fa\u591a\u6761\u6d88\u606f\uff0c\u8fd0\u884c\u5176\u5bf9\u5e94\u7684\u7a0b\u5e8f"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u4f59\u989d\u4ea4\u6613"),' : Gear \u5f15\u64ce\u6267\u884c"\u7528\u6237<\u2014>\u7a0b\u5e8f<\u2014>\u9a8c\u8bc1\u8005"\u4e4b\u95f4\u7684\u4f59\u989d\u4ea4\u6613')),(0,i.kt)("p",null,"\u6d88\u606f\u5904\u7406\u662f\u5728\u533a\u5757\u7684\u6784\u5efa/\u5bfc\u5165\u65f6\u4fdd\u7559\u7684\u65f6\u95f4\u7a97\u53e3\u5185\u8fdb\u884c\u7684\u3002\u5b83\u4fdd\u8bc1\u6d88\u606f\u5904\u7406\u5c06\u5728\u6bcf\u4e2a\u5757\u4e2d\u6267\u884c\uff0c\u5e76\u4e14\u81f3\u5c11\u4ee5\u57fa\u4e8e\u5f53\u524d\u5b9e\u4f8b\u8bbe\u7f6e\u7684\u67d0\u4e00\u786e\u5b9a\u901f\u7387\u6267\u884c\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u7684",(0,i.kt)("strong",{parentName:"p"},"\u901f\u7387"),"\u6307\u7684\u662f\u5728\u6784\u5efa\u533a\u5757\u65f6, \u7531\u4e8e\u533a\u5757\u7684gas limit\u662f\u6709\u9650\u7684, \u6240\u4ee5\u4e0d\u4e00\u5b9a\u4f1a\u5728\u4e00\u4e2a\u5757\u4e2d\u6267\u884c\u6240\u6709\u961f\u5217\u4e2d\u7684\u6d88\u606f, \u4f46\u662fGear\u4f1a\u57fa\u4e8egas limit\u662f\u5426\u8fbe\u5230\u6765\u5c3d\u53ef\u80fd\u5904\u7406\u6d88\u606f, \u5373\u5904\u7406\u6d88\u606f\u7684\u901f\u7387\u81f3\u5c11\u4f1a\u57fa\u4e8e\u5f53\u524d\u5b9e\u4f8b\u7684\u8bbe\u7f6e\u6765\u4fdd\u8bc1"))),(0,i.kt)("h3",{id:"\u521b\u5efa\u7a0b\u5e8f"},"\u521b\u5efa\u7a0b\u5e8f"),(0,i.kt)("p",null,"Gear \u7f51\u7edc\u4e2d\u7684\u6307\u5b9a\u673a\u6784\uff08\u6216\u4efb\u4f55\u516c\u5f00\u5b9e\u73b0\u7528\u6237\uff09\u53ef\u4ee5\u63d0\u4ea4\u65b0\u7684\u7a0b\u5e8f(program)\u6765\u5b58\u5165Gear\u7f51\u7edc\u7684\u4e16\u754c\u72b6\u6001\u3002\u5bf9\u4e8e\u7f51\u7edc\u516c\u5f00\u90e8\u5206\uff0c\u540c\u65f6\u63d0\u4f9b\u4e86\u4e00\u4e2a\u4e0e\u7a0b\u5e8f\u5173\u8054\u7684\u4f59\u989d\u53c2\u6570, \u8fd9\u4e2a\u65b0\u7684\u4f59\u989d\u5c06\u4f1a\u8bbe\u7f6e\u4e3a\u521d\u59cb\u4f59\u989d\uff08\u5b58\u5728\u62b5\u62bc\uff09\u3002( \u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gear-tech/gear/blob/master/pallets/gear/src/lib.rs#L736"},(0,i.kt)("inlineCode",{parentName:"a"},"submit_program"))," )"),(0,i.kt)("h3",{id:"\u53d1\u9001\u6d88\u606f"},"\u53d1\u9001\u6d88\u606f"),(0,i.kt)("p",null,"\u7ec8\u7aef\u7528\u6237\u4e0e\u7a0b\u5e8f\u8fdb\u884c\u7684\u4e92\u52a8, \u4ece\u7ed3\u679c\u6765\u770b\u5c31\u662f\u5411 Gear \u7f51\u7edc\u53d1\u9001\u6d88\u606f\u3002\u53d1\u9001\u5230 Gear \u7f51\u7edc\u7684\u6d88\u606f\u5c06\u4f1a\u8fdb\u5165\u5168\u5c40\u6d88\u606f\u961f\u5217\u3002\u8fd9\u4e2a\u961f\u5217\u53ef\u4ee5\u88ab\u770b\u4f5c\u662f\u4e00\u4e2a\u7531\u8fd0\u884c\u65f6(runtime)\u9a71\u52a8\u7684\u4ea4\u6613\u961f\u5217\uff0c\u5b83\u4fdd\u8bc1\u4efb\u4f55\u88ab\u5176\u63a5\u53d7\u5e76\u5b58\u5165\u7684\u6d88\u606f\u6700\u7ec8\u90fd\u4f1a\u88ab\u5904\u7406\u3002 \u5c06\u6d88\u606f\u653e\u5165\u961f\u5217\u7684\u8fc7\u7a0b\u5e76\u975e\u5b8c\u5168\u81ea\u7531\u7684, \u56e0\u4e3a\u8981\u4fdd\u8bc1\u6d88\u606f\u53ef\u4ee5\u88ab\u6b63\u786e\u5206\u53d1\u3002"),(0,i.kt)("h3",{id:"\u6d88\u606f\u51fa\u5217"},"\u6d88\u606f\u51fa\u5217"),(0,i.kt)("p",null,"\u5f53\u8f6e\u5230\u9a8c\u8bc1\u8005\u4ea7\u751f\u4e0b\u4e00\u4e2a\u533a\u5757\u65f6\uff0c\u9a8c\u8bc1\u8005\u53ef\u4ee5\u9009\u62e9\u8ba9\u54ea\u4e9b\u6d88\u606f\u51fa\u5217\u3002\u5b83\u6d88\u9664\u4e86\u6bcf\u4e2a\u7279\u5b9a\u9a8c\u8bc1\u5668\u7ef4\u62a4\u5b8c\u6574\u5185\u5b58\u72b6\u6001\u7684\u9700\u8981\u3002 \u51fa\u5217\u4ec5\u53d1\u751f\u5728\u6bcf\u4e2a\u51fa\u5757\u8fc7\u7a0b\u7684\u672b\u5c3e\u3002 \u5728\u5904\u7406\u961f\u5217\u7684\u671f\u95f4\uff0c\u4e5f\u53ef\u4ee5\u751f\u6210\u65b0\u7684\u6d88\u606f\u3002\u8fd9\u4e9b\u65b0\u6d88\u606f\u65e2\u53ef\u4ee5\u5728\u8fd9\u4e2a\u9636\u6bb5\u5c31\u88ab\u5904\u7406\uff0c\u4e5f\u53ef\u4ee5\u7559\u5728\u961f\u5217\u4e2d\u7b49\u5f85\u4e0b\u4e00\u4e2a\u5757\uff08\u548c\u53e6\u4e00\u4e2a\u9a8c\u8bc1\u5668\uff09\u6765\u5904\u7406\u3002( \u53ef\u4ee5\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gear-tech/gear/blob/master/pallets/gear/src/lib.rs#L278"},(0,i.kt)("inlineCode",{parentName:"a"},"process_queue")),"\u6765\u7406\u89e3 )"),(0,i.kt)("h3",{id:"\u4f59\u989d\u4ea4\u6613"},"\u4f59\u989d\u4ea4\u6613"),(0,i.kt)("p",null,"\u5e38\u89c4\u4f59\u989d\u4ea4\u6613\u662f\u5728 Substrate \u7684 Balance \u6a21\u5757\u4e2d\u8fdb\u884c\u7684\u3002"),(0,i.kt)("h3",{id:"\u6d88\u606f\u533a\u5757\u548c\u4e8b\u4ef6\u7684\u751f\u547d\u5468\u671f"},"\u6d88\u606f\u3001\u533a\u5757\u548c\u4e8b\u4ef6\u7684\u751f\u547d\u5468\u671f"),(0,i.kt)("p",null,'\u4e0b\u56fe\u8bf4\u660e\u4e86 Gear \u7684\u5168\u751f\u547d\u5468\u671f\u3002\u6b63\u5982\u9762\u5411\u901a\u4fe1\u9886\u57df\u7684 actor \u6a21\u578b\u6240\u89c4\u5b9a\u7684\uff0c\u9664\u4e86\u6d88\u606f\u53ef\u4ee5\u5171\u4eab\uff0c\u518d\u6ca1\u6709\u4efb\u4f55\u4e1c\u897f\u662f\u53ef\u4ee5\u5171\u4eab\u7684\u4e86\u3002\u4ee5 "\u7cfb\u7edf" \u4e3a\u76ee\u7684\u5730\u7684\u6d88\u606f\u6700\u7ec8\u4f1a\u51fa\u73b0\u5728\u4e8b\u4ef6\u65e5\u5fd7\u4e2d\uff0c\u4ee5\u4fbf\u5728\u7528\u6237\u7a7a\u95f4\u8fdb\u884c\u68c0\u67e5\u3002'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt text",src:r(7217).Z,width:"1400",height:"1400"})))}m.isMDXComponent=!0},7217:function(e,t,r){t.Z=r.p+"assets/images/mq-df2e074d5eb9243488edd7b3b907cefa.jpg"}}]);