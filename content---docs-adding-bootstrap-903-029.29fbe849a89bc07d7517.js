(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return c}));a(58),a(31),a(22),a(23),a(59),a(0);var n=a(230);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={id:"adding-bootstrap",title:"Adding Bootstrap"},s=[{value:"Using a Custom Theme",id:"using-a-custom-theme",children:[]}],i={rightToc:s},p="wrapper";function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(p,r({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"While you don\u2019t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. ",Object(n.b)("a",r({parentName:"p"},{href:"https://react-bootstrap.netlify.com/"}),"React Bootstrap")," is the most popular option that strives for complete parity with Bootstrap. ",Object(n.b)("a",r({parentName:"p"},{href:"https://reactstrap.github.io/"}),"reactstrap")," is also a good choice for projects looking for smaller builds at the expense of some features."),Object(n.b)("p",null,"Each project's respective documentation site has detailed instructions for installing and using them. Both depend on the Bootstrap css file so install that as well:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-sh"}),"npm install --save bootstrap\n")),Object(n.b)("p",null,"Alternatively you may use ",Object(n.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-sh"}),"yarn add bootstrap\n")),Object(n.b)("p",null,"Import Bootstrap CSS and optionally Bootstrap theme CSS in the beginning of your ",Object(n.b)("inlineCode",{parentName:"p"},"src/index.js")," file:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"import 'bootstrap/dist/css/bootstrap.css';\n// Put any other imports below so that CSS from your\n// components takes precedence over default styles.\n")),Object(n.b)("h2",{id:"using-a-custom-theme"},"Using a Custom Theme"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(n.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher.")),Object(n.b)("p",null,"Sometimes you might need to tweak the visual styles of Bootstrap (or equivalent package)."),Object(n.b)("p",null,"As of ",Object(n.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," you can import ",Object(n.b)("inlineCode",{parentName:"p"},".scss")," files. This makes it possible to use a package's built-in Sass variables for global style preferences."),Object(n.b)("p",null,"To enable ",Object(n.b)("inlineCode",{parentName:"p"},"scss")," in Create React App you will need to install ",Object(n.b)("inlineCode",{parentName:"p"},"node-sass"),"."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-sh"}),"npm install --save node-sass\n")),Object(n.b)("p",null,"Alternatively you may use ",Object(n.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-sh"}),"yarn add node-sass\n")),Object(n.b)("p",null,"To customize Bootstrap, create a file called ",Object(n.b)("inlineCode",{parentName:"p"},"src/custom.scss")," (or similar) and import the Bootstrap source stylesheet. Add any overrides ",Object(n.b)("em",{parentName:"p"},"before")," the imported file(s). You can reference ",Object(n.b)("a",r({parentName:"p"},{href:"https://getbootstrap.com/docs/4.1/getting-started/theming/#css-variables"}),"Bootstrap's documentation")," for the names of the available variables."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-scss"}),"// Override default variables before the import\n$body-bg: #000;\n\n// Import Bootstrap and its default variables\n@import '~bootstrap/scss/bootstrap.scss';\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," You must prefix imports from ",Object(n.b)("inlineCode",{parentName:"p"},"node_modules")," with ",Object(n.b)("inlineCode",{parentName:"p"},"~")," as displayed above.")),Object(n.b)("p",null,"Finally, import the newly created ",Object(n.b)("inlineCode",{parentName:"p"},".scss")," file instead of the default Bootstrap ",Object(n.b)("inlineCode",{parentName:"p"},".css")," in the beginning of your ",Object(n.b)("inlineCode",{parentName:"p"},"src/index.js")," file, for example:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import './custom.scss';\n")))}c.isMDXComponent=!0},230:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n),o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},i=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},l=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),l=s(a),b=n,u=l[i+"."+b]||l[b]||c[b]||o;return a?r.a.createElement(u,Object.assign({},{ref:t},p,{components:a})):r.a.createElement(u,Object.assign({},{ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var b=2;b<o;b++)s[b]=a[b];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}l.displayName="MDXCreateElement"}}]);