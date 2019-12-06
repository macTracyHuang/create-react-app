(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return o}));n(58),n(31),n(22),n(23),n(59),n(0);var a=n(230);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p={id:"custom-templates",title:"Custom Templates"},l=[{value:"npm",id:"npm",children:[]},{value:"Yarn",id:"yarn",children:[]},{value:"Finding custom templates",id:"finding-custom-templates",children:[]},{value:"Building a template",id:"building-a-template",children:[{value:"The template folder",id:"the-template-folder",children:[]},{value:"The template.json file",id:"the-templatejson-file",children:[]}]}],i={rightToc:l},c="wrapper";function o(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(c,r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts@3.3.0")," and higher.")),Object(a.b)("p",null,"Custom Templates enable you to select a template to create your project from, while still retaining all of the features of Create React App."),Object(a.b)("p",null,"You'll notice that Custom Templates are always named in the format ",Object(a.b)("inlineCode",{parentName:"p"},"cra-template-[template-name]"),", however you only need to provide the ",Object(a.b)("inlineCode",{parentName:"p"},"[template-name]")," to the creation command."),Object(a.b)("h3",{id:"npm"},"npm"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-sh"}),"npm init react-app my-app --template [template-name]\n")),Object(a.b)("h3",{id:"yarn"},"Yarn"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-sh"}),"yarn create react-app my-app --template [template-name]\n")),Object(a.b)("h2",{id:"finding-custom-templates"},"Finding custom templates"),Object(a.b)("p",null,"We ship two templates by default:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/facebook/create-react-app/tree/master/packages/cra-template"}),Object(a.b)("inlineCode",{parentName:"a"},"cra-template"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript"}),Object(a.b)("inlineCode",{parentName:"a"},"cra-template-typescript")))),Object(a.b)("p",null,"However, you can find many great community templates by searching for ",Object(a.b)("a",r({parentName:"p"},{href:"https://www.npmjs.com/search?q=cra-template-*"}),'"cra-template-',"*",'"')," on npm."),Object(a.b)("h2",{id:"building-a-template"},"Building a template"),Object(a.b)("p",null,"If you're interested in building a custom template, first take a look at how we've built ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/facebook/create-react-app/tree/master/packages/cra-template"}),Object(a.b)("inlineCode",{parentName:"a"},"cra-template")),"."),Object(a.b)("p",null,"A template must have the following structure:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"my-app/\n  README.md (for npm)\n  template.json\n  package.json\n  template/\n    README.md (for projects created from this template)\n    gitignore\n    public/\n      index.html\n    src/\n      index.js (or index.tsx)\n")),Object(a.b)("h3",{id:"the-template-folder"},"The ",Object(a.b)("inlineCode",{parentName:"h3"},"template")," folder"),Object(a.b)("p",null,"This folder is copied to the user's app directory as Create React App installs. During this process, the file ",Object(a.b)("inlineCode",{parentName:"p"},"gitignore")," is renamed to ",Object(a.b)("inlineCode",{parentName:"p"},".gitignore"),"."),Object(a.b)("p",null,"You can add whatever files you want in here, but you must have at least the files specified above."),Object(a.b)("h3",{id:"the-templatejson-file"},"The ",Object(a.b)("inlineCode",{parentName:"h3"},"template.json")," file"),Object(a.b)("p",null,"This is where you can define dependencies (only dependencies are supported for now), as well as any custom scripts that your template relies on."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "dependencies": {\n    "serve": "^11.2.0"\n  },\n  "scripts": {\n    "serve": "serve -s build",\n    "build-and-serve": "npm run build && npm run serve"\n  }\n}\n')),Object(a.b)("p",null,"For convenience, we always replace ",Object(a.b)("inlineCode",{parentName:"p"},"npm run")," with ",Object(a.b)("inlineCode",{parentName:"p"},"yarn")," in your custom ",Object(a.b)("inlineCode",{parentName:"p"},'"scripts"'),", as well as in your ",Object(a.b)("inlineCode",{parentName:"p"},"README")," when projects are initialized with yarn."))}o.isMDXComponent=!0},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a),p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)};var c="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),m=l(n),s=a,b=m[i+"."+s]||m[s]||o[s]||p;return n?r.a.createElement(b,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(b,Object.assign({},{ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<p;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);