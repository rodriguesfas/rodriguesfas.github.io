(window.webpackJsonp=window.webpackJsonp||[]).push([[98,101],{168:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(172),l=a(21),c=a(25),s=a(179),i=a(3),u=a(173),p=a(174),m=a(211),d=a(217),b=a(218),y=a(216),h=a(175),f=a(182),g=a(230);var v=e=>r.a.createElement("svg",Object(i.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"}))),k=a(219),j=a(86),O=a.n(j);const E=(e,t)=>"link"===e.type?Object(p.isSamePath)(e.href,t):"category"===e.type&&e.items.some((e=>E(e,t)));function N(e){let{item:t,onItemClick:a,collapsible:o,activePath:l,...c}=e;const{items:s,label:p}=t,m=E(t,l),d=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)((()=>{t.current=e}),[e]),t.current}(m),[b,y]=Object(n.useState)((()=>!!o&&(!m&&t.collapsed))),h=Object(n.useRef)(null),[f,g]=Object(n.useState)(void 0),v=function(e){var t;void 0===e&&(e=!0),g(e?`${null===(t=h.current)||void 0===t?void 0:t.scrollHeight}px`:void 0)};Object(n.useEffect)((()=>{m&&!d&&b&&y(!1)}),[m,d,b]);const k=Object(n.useCallback)((e=>{e.preventDefault(),f||v(),setTimeout((()=>y((e=>!e))),100)}),[f]);return 0===s.length?null:r.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":b}),key:p},r.a.createElement("a",Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":o,"menu__link--active":o&&m,[O.a.menuLinkText]:!o}),onClick:o?k:void 0,href:o?"#!":void 0},c),p),r.a.createElement("ul",{className:"menu__list",ref:h,style:{height:f},onTransitionEnd:()=>{b||v(!1)}},s.map((e=>r.a.createElement(x,{tabIndex:b?"-1":"0",key:e.label,item:e,onItemClick:a,collapsible:o,activePath:l})))))}function C(e){let{item:t,onItemClick:a,activePath:n,collapsible:o,...l}=e;const{href:c,label:s}=t,p=E(t,n);return r.a.createElement("li",{className:"menu__list-item",key:s},r.a.createElement(h.a,Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--active":p}),to:c},Object(f.a)(c)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},l),s))}function x(e){return"category"===e.item.type?r.a.createElement(N,e):r.a.createElement(C,e)}var w=function(e){let{path:t,sidebar:a,sidebarCollapsible:o=!0,onCollapse:l,isHidden:c}=e;const[s,i]=Object(n.useState)(!1),{navbar:{hideOnScroll:h},hideableSidebar:f}=Object(p.useThemeConfig)(),{isAnnouncementBarClosed:j}=Object(m.a)(),{scrollY:E}=Object(y.a)();Object(d.a)(s);const N=Object(b.a)();return Object(n.useEffect)((()=>{N===b.b.desktop&&i(!1)}),[N]),r.a.createElement("div",{className:Object(u.a)(O.a.sidebar,{[O.a.sidebarWithHideableNavbar]:h,[O.a.sidebarHidden]:c})},h&&r.a.createElement(g.a,{tabIndex:-1,className:O.a.sidebarLogo}),r.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",O.a.menu,{"menu--show":s,[O.a.menuWithAnnouncementBar]:!j&&0===E})},r.a.createElement("button",{"aria-label":s?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{i(!s)}},s?r.a.createElement("span",{className:Object(u.a)(O.a.sidebarMenuIcon,O.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(k.a,{className:O.a.sidebarMenuIcon,height:24,width:24})),r.a.createElement("ul",{className:"menu__list"},a.map((e=>r.a.createElement(x,{key:e.label,item:e,onItemClick:e=>{e.target.blur(),i(!1)},collapsible:o,activePath:t}))))),f&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(u.a)("button button--secondary button--outline",O.a.collapseSidebarButton),onClick:l},r.a.createElement(v,{className:O.a.collapseSidebarButtonIcon})))},P=a(208),T=a(210),S=a(177),_=a(87),D=a.n(_);function I(e){var t,a;let{currentDocRoute:c,versionMetadata:i,children:m}=e;const{siteConfig:d,isClient:b}=Object(l.default)(),{pluginId:y,permalinkToSidebar:h,docsSidebars:f,version:g}=i,k=h[c.path],j=f[k],[O,E]=Object(n.useState)(!1),[N,C]=Object(n.useState)(!1),x=Object(n.useCallback)((()=>{N&&C(!1),E(!O)}),[N]);return r.a.createElement(s.a,{key:b,searchMetadatas:{version:g,tag:Object(p.docVersionSearchTag)(y,g)}},r.a.createElement("div",{className:D.a.docPage},j&&r.a.createElement("div",{className:Object(u.a)(D.a.docSidebarContainer,{[D.a.docSidebarContainerHidden]:O}),onTransitionEnd:e=>{e.currentTarget.classList.contains(D.a.docSidebarContainer)&&O&&C(!0)},role:"complementary"},r.a.createElement(w,{key:k,sidebar:j,path:c.path,sidebarCollapsible:null===(t=null===(a=d.themeConfig)||void 0===a?void 0:a.sidebarCollapsible)||void 0===t||t,onCollapse:x,isHidden:N}),N&&r.a.createElement("div",{className:D.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:x,onClick:x},r.a.createElement(v,null))),r.a.createElement("main",{className:D.a.docMainContainer},r.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",D.a.docItemWrapper,{[D.a.docItemWrapperEnhanced]:O})},r.a.createElement(o.a,{components:P.a},m)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,o=t.find((e=>Object(S.matchPath)(n.pathname,e)));return o?r.a.createElement(I,{currentDocRoute:o,versionMetadata:a},Object(c.a)(t)):r.a.createElement(T.default,e)}},172:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return a?r.a.createElement(b,c(c({ref:t},i),{},{components:a})):r.a.createElement(b,c({ref:t},i))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},202:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(c){}return a.remove(),o&&(r.removeAllRanges(),r.addRange(o)),n&&n.focus(),l};e.exports=n,e.exports.default=n},203:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,o]=t;if(n&&o){n=parseInt(n),o=parseInt(o);const e=n<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=n;t!==o;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},208:function(e,t,a){"use strict";var n=a(3),r=a(0),o=a.n(r),l=a(175),c=a(173),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(22).a,theme:s};function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p.apply(this,arguments)}var m=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},b=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},y=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=p({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=p({},a,{backgroundColor:null}),r};function h(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var f=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?y(e.theme,e.language):void 0;return t.themeDict=a})),u(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,o=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?p({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),u(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return o[a[0]];var l=n?{display:"inline-block"}:{},c=a.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),u(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,o=e.token,l=p({},h(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?p({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),u(this,"tokenize",(function(e,t,a,n){var r={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],o=0,l=0,c=[],s=[c];l>-1;){for(;(o=n[l]++)<r[l];){var i=void 0,u=t[l],p=a[l][o];if("string"==typeof p?(u=l>0?u:["plain"],i=p):(u=b(u,p.type),p.alias&&(u=b(u,p.alias)),i=p.content),"string"==typeof i){var y=i.split(m),h=y.length;c.push({types:u,content:y[0]});for(var f=1;f<h;f++)d(c),s.push(c=[]),c.push({types:u,content:y[f]})}else l++,t.push(u),a.push(i),n.push(0),r.push(i.length)}l--,t.pop(),a.pop(),n.pop(),r.pop()}return d(c),s}(void 0!==l?this.tokenize(t,n,l,a):[n]),className:"prism-code language-"+a,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),g=f,v=a(202),k=a.n(v),j=a(203),O=a.n(j),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},N=a(189),C=a(174);var x=()=>{const{prism:e}=Object(C.useThemeConfig)(),{isDarkTheme:t}=Object(N.a)(),a=e.theme||E,n=e.darkTheme||a;return t?n:a},w=a(58),P=a.n(w);const T=/{([\d,-]+)}/,S=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},_=/(?:title=")(.*)(?:")/;var D=e=>{let{children:t,className:a,metastring:l}=e;const{prism:s}=Object(C.useThemeConfig)(),[u,p]=Object(r.useState)(!1),[m,d]=Object(r.useState)(!1);Object(r.useEffect)((()=>{d(!0)}),[]);const b=Object(r.useRef)(null);let y=[],h="";const f=x(),v=Array.isArray(t)?t.join(""):t;if(l&&T.test(l)){const e=l.match(T)[1];y=O()(e).filter((e=>e>0))}l&&_.test(l)&&(h=l.match(_)[1]);let j=a&&a.replace(/language-/,"");!j&&s.defaultLanguage&&(j=s.defaultLanguage);let E=v.replace(/\n$/,"");if(0===y.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return S(["js","jsBlock"]);case"jsx":case"tsx":return S(["js","jsBlock","jsx"]);case"html":return S(["js","jsBlock","html"]);case"python":case"py":return S(["python"]);default:return S()}})(j),a=v.replace(/\n$/,"").split("\n");let n;for(let r=0;r<a.length;){const o=r+1,l=a[r].match(t);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${o},`;break;case"highlight-start":n=o;break;case"highlight-end":e+=`${n}-${o-1},`}a.splice(r,1)}else r+=1}y=O()(e),E=a.join("\n")}const N=()=>{k()(E),p(!0),setTimeout((()=>p(!1)),2e3)};return o.a.createElement(g,Object(n.a)({},i,{key:String(m),theme:f,code:E,language:j}),(e=>{let{className:t,style:a,tokens:r,getLineProps:l,getTokenProps:s}=e;return o.a.createElement(o.a.Fragment,null,h&&o.a.createElement("div",{style:a,className:P.a.codeBlockTitle},h),o.a.createElement("div",{className:P.a.codeBlockContent},o.a.createElement("div",{tabIndex:0,className:Object(c.a)(t,P.a.codeBlock,"thin-scrollbar",{[P.a.codeBlockWithTitle]:h})},o.a.createElement("div",{className:P.a.codeBlockLines,style:a},r.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=l({line:e,key:t});return y.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),o.a.createElement("div",Object(n.a)({key:t},a),e.map(((e,t)=>o.a.createElement("span",Object(n.a)({key:t},s({token:e,key:t}))))))})))),o.a.createElement("button",{ref:b,type:"button","aria-label":"Copy code to clipboard",className:Object(c.a)(P.a.copyButton),onClick:N},u?"Copied":"Copy")))}))},I=(a(59),a(60)),L=a.n(I);var B=e=>function(t){let{id:a,...n}=t;const{navbar:{hideOnScroll:r}}=Object(C.useThemeConfig)();return a?o.a.createElement(e,n,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(c.a)("anchor",{[L.a.enhancedAnchor]:!r}),id:a}),n.children,o.a.createElement("a",{className:"hash-link",href:`#${a}`,title:"Direct link to heading"},"#")):o.a.createElement(e,n)},$=a(61),M=a.n($);const R={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?o.a.createElement(D,e):o.a.createElement("code",e):t},a:e=>o.a.createElement(l.a,e),pre:e=>o.a.createElement("div",Object(n.a)({className:M.a.mdxCodeBlock},e)),h1:B("h1"),h2:B("h2"),h3:B("h3"),h4:B("h4"),h5:B("h5"),h6:B("h6")};t.a=R},210:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(179);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);