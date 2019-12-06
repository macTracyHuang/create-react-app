(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{170:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));r(58),r(31),r(22),r(23),r(59),r(0);var n=r(230);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var o={id:"can-i-use-decorators",title:"Can I Use Decorators?"},c=[],i={rightToc:c},l="wrapper";function p(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(n.b)(l,a({},i,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Some popular libraries use ",Object(n.b)("a",a({parentName:"p"},{href:"https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841"}),"decorators")," in their documentation."),Object(n.b)("p",null,"Create React App intentionally doesn\u2019t support decorator syntax at the moment because:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"It is an experimental proposal and is subject to change (in fact, it has already changed once, and will change again)."),Object(n.b)("li",{parentName:"ul"},"Most libraries currently support only the old version of the proposal \u2014 which will never be a standard.")),Object(n.b)("p",null,"However in many cases you can rewrite decorator-based code without decorators and achieve the same result."),Object(n.b)("p",null,"Please refer to these two threads for reference:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",a({parentName:"li"},{href:"https://github.com/facebook/create-react-app/issues/214"}),"#214")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",a({parentName:"li"},{href:"https://github.com/facebook/create-react-app/issues/411"}),"#411"))),Object(n.b)("p",null,"Create React App will add decorator support when the specification advances to a stable stage."))}p.isMDXComponent=!0},230:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n),o=a.a.createContext({}),c=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},i=function(e){var t=c(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),s=c(r),u=n,b=s[i+"."+u]||s[u]||p[u]||o;return r?a.a.createElement(b,Object.assign({},{ref:t},l,{components:r})):a.a.createElement(b,Object.assign({},{ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);