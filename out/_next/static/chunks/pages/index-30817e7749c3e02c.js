(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8696)}])},8045:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,a=void 0!==r&&r,s=e.priority,l=void 0!==s&&s,u=e.loading,h=e.lazyRoot,b=void 0===h?null:h,v=e.lazyBoundary,w=void 0===v?"200px":v,j=e.className,x=e.quality,_=e.width,k=e.height,S=e.objectFit,P=e.objectPosition,E=e.onLoadingComplete,z=e.loader,N=void 0===z?I:z,T=e.placeholder,R=void 0===T?"empty":T,C=e.blurDataURL,H=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),L=c.useRef(null),M=H,D=n?"responsive":"intrinsic";"layout"in M&&(M.layout&&(D=M.layout),delete M.layout);var q="";if(function(e){return"object"===typeof e&&(y(e)||function(e){return void 0!==e.src}(e))}(t)){var G=y(t)?t.default:t;if(!G.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(G)));if(C=C||G.blurDataURL,q=G.src,(!D||"fill"!==D)&&(k=k||G.height,_=_||G.width,!G.height||!G.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(G)))}t="string"===typeof t?t:q;var B=O(_),U=O(k),F=O(x),W=!l&&("lazy"===u||"undefined"===typeof u);(t.startsWith("data:")||t.startsWith("blob:"))&&(a=!0,W=!1);g.has(t)&&(W=!1);0;var Y,V=o(f.useIntersection({rootRef:b,rootMargin:w,disabled:!W}),2),J=V[0],X=V[1],K=!W||X,Q={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},$={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Z=!1,ee={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:S,objectPosition:P},te="blur"===R?{filter:"blur(20px)",backgroundSize:S||"cover",backgroundImage:'url("'.concat(C,'")'),backgroundPosition:P||"0% 0%"}:{};if("fill"===D)Q.display="block",Q.position="absolute",Q.top=0,Q.left=0,Q.bottom=0,Q.right=0;else if("undefined"!==typeof B&&"undefined"!==typeof U){var ne=U/B,re=isNaN(ne)?"100%":"".concat(100*ne,"%");"responsive"===D?(Q.display="block",Q.position="relative",Z=!0,$.paddingTop=re):"intrinsic"===D?(Q.display="inline-block",Q.position="relative",Q.maxWidth="100%",Z=!0,$.maxWidth="100%",Y="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(B,"%27%20height=%27").concat(U,"%27/%3e")):"fixed"===D&&(Q.display="inline-block",Q.position="relative",Q.width=B,Q.height=U)}else 0;var ie={src:m,srcSet:void 0,sizes:void 0};K&&(ie=A({src:t,unoptimized:a,layout:D,width:B,quality:F,sizes:n,loader:N}));var oe=t;0;var ae;0;var se=(i(ae={},"imagesrcset",ie.srcSet),i(ae,"imagesizes",ie.sizes),ae),le=c.default.useLayoutEffect,ce=c.useRef(E);return c.useEffect((function(){ce.current=E}),[E]),le((function(){J(L.current)}),[J]),c.useEffect((function(){!function(e,t,n,r,i){var o=function(){var n=e.current;n&&(n.src!==m&&("decode"in n?n.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(g.add(t),"blur"===r&&(n.style.filter="",n.style.backgroundSize="",n.style.backgroundImage="",n.style.backgroundPosition=""),i.current)){var o=n.naturalWidth,a=n.naturalHeight;i.current({naturalWidth:o,naturalHeight:a})}})))};e.current&&(e.current.complete?o():e.current.onload=o)}(L,oe,0,R,ce)}),[oe,D,R,K]),c.default.createElement("span",{style:Q},Z?c.default.createElement("span",{style:$},Y?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Y}):null):null,c.default.createElement("img",Object.assign({},M,ie,{decoding:"async","data-nimg":D,className:j,ref:L,style:p({},ee,te)})),W&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},M,A({src:t,unoptimized:a,layout:D,width:B,quality:F,sizes:n,loader:N}),{decoding:"async","data-nimg":D,style:ee,className:j,loading:u||"lazy"}))),l?c.default.createElement(d.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+ie.src+ie.srcSet+ie.sizes,rel:"preload",as:"image",href:ie.srcSet?void 0:ie.src},se))):null)};var l,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),d=(l=n(5443))&&l.__esModule?l:{default:l},u=n(5809),f=n(7190);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){h(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var g=new Set,m=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var b=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t).concat(S(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(S(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(S(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function y(e){return void 0!==e.default}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://awardwinninghuman.com/",loader:"imgix"}||u.imageConfigDefault,w=v.deviceSizes,j=v.imageSizes,x=v.loader,_=v.path,k=(v.domains,a(w).concat(a(j)));function A(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,o=e.quality,s=e.sizes,l=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var c=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,o=[];r=i.exec(n);r)o.push(parseInt(r[2]));if(o.length){var s,l=.01*(s=Math).min.apply(s,a(o));return{widths:k.filter((function(e){return e>=w[0]*l})),kind:"w"}}return{widths:k,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:w,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return k.find((function(t){return t>=e}))||k[k.length-1]})))),kind:"x"}}(i,r,s),d=c.widths,u=c.kind,f=d.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:d.map((function(e,n){return"".concat(l({src:t,quality:o,width:e})," ").concat("w"===u?e:n+1).concat(u)})).join(", "),src:l({src:t,quality:o,width:d[f]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function I(e){var t=b.get(x);if(t)return t(p({root:_},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(x))}function S(e){return"/"===e[0]?e.slice(1):e}w.sort((function(e,t){return e-t})),k.sort((function(e,t){return e-t}))},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!s,c=o.useRef(),d=i(o.useState(!1),2),u=d[0],f=d[1],h=i(o.useState(t?t.current:null),2),p=h[0],g=h[1],m=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||u||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),l.delete(i))}}(e,(function(e){return e&&f(e)}),{root:p,rootMargin:n}))}),[r,p,n,u]);return o.useEffect((function(){if(!s&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),o.useEffect((function(){t&&g(t.current)}),[t]),[m,u]};var o=n(7294),a=n(9311),s="undefined"!==typeof IntersectionObserver;var l=new Map},8696:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),i=n(9008),o=n(1673),a=n.n(o),s=n(5675),l=n(4411),c=n.n(l),d=function(e){var t=e.org,n=e.title,i=e.info,o=e.responsibilities,a=e.image,l=e.years,d=e.link,u=e.alt;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:c().projectGrid,children:[(0,r.jsx)("div",{className:c().projectYear,children:(0,r.jsxs)("h2",{className:"grad",children:[l[0],(0,r.jsx)("br",{}),1===l.length||"- ".concat(l[1])]})}),(0,r.jsxs)("div",{className:c().projectHeader,children:[(0,r.jsx)("h3",{children:n}),(0,r.jsx)("h4",{children:t}),(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:d.address,rel:"noreferrer",target:"_blank",children:d.display})})]}),(0,r.jsx)("div",{className:c().imgHolder,children:(0,r.jsx)(s.default,{src:a,alt:u,layout:"fill",objectFit:"cover"})}),(0,r.jsx)("div",{className:c().description,children:(0,r.jsx)("p",{children:i})}),(0,r.jsx)("div",{className:c().label,children:(0,r.jsx)("p",{className:c().responsibilities,children:"I did:"})}),(0,r.jsx)("div",{className:c().resp,children:(0,r.jsxs)("p",{className:c().responsibilities,children:[(0,r.jsx)("span",{className:c().responsibilities+" "+c().hideOnBig,style:{fontWeight:"bold"},children:"I did: "}),o]})})]})})},u=function(){return(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:a().containerOuter+" "+a().real,children:(0,r.jsxs)("div",{className:a().containerInner,children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Jess Peter | Designer"}),(0,r.jsx)("meta",{name:"description",content:"Award-winning Human Jess Peter"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/assets/favicon-01.png"})]}),(0,r.jsxs)("main",{className:a().main,children:[(0,r.jsx)("div",{className:a().splash,children:(0,r.jsxs)("div",{className:a().inner,children:[(0,r.jsx)("h1",{className:"grad",children:"Jess Peter is an interaction designer and creative coder living in London."}),(0,r.jsxs)("ul",{className:a().links,children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://github.com/jessp",target:"_blank",rel:"noreferrer",children:"Github"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"mailto:jess@awardwinninghuman.com",target:"_blank",rel:"noreferrer",children:"Email"})})]})]})}),(0,r.jsxs)("div",{className:a().projectList,children:[(0,r.jsx)(d,{org:"Personal Project",title:"deepwork",info:"I wrote and coded this satirical interactive essay about technology and corporate culture for The Pudding. It was featured on Fast Company.",responsibilities:"Coding, writing, front-end development.",alt:"Illustration showing glowing hands reaching up to alter a girl's appearance.",image:"/assets/deepwork.jpeg",years:[2022],link:{display:"pudding.cool/2022/01/deepwork",address:"https://pudding.cool/2022/01/deepwork/"}}),(0,r.jsx)(d,{org:"Thomson Reuters Labs",title:"Senior Designer",info:"Thomson Reuters Labs are the \u201cglobal reaching innovation arm\u201d of Thomson Reuters. I worked alongside multi-disciplinary teams on creating new features and powering up existing products with state-of-the-art data science techniques.",responsibilities:"Product design, user research, user experience design, data analysis, front-end development.",alt:"Thomson Reuters logo",image:"/assets/tr-logo.png",years:[2019,2021],link:{display:"innovation.thomsonreuters.com",address:"https://innovation.thomsonreuters.com"}}),(0,r.jsx)(d,{org:"Personal Project",title:"Goodwill Hunting",info:"I do a lot of personal projects to keep my skills sharp and investigate things that interest me. For Goodwill Hunting, I wanted to know what types of clothes are donated to Goodwill charity shops across the USA, and make some beautiful charts about my findings. This project made #1 on Hacker News. It's my nerdiest claim to fame.",responsibilities:"Visual design, data analysis, front-end development.",alt:"Chart showing fashion trends over time",image:"/assets/goodwill.png",years:[2020],link:{display:"goodwill.awardwinninghuman.com",address:"https://goodwill.awardwinninghuman.com/"}}),(0,r.jsx)(d,{org:"The Pudding",title:"11 Years of Top-Selling Book Covers",info:"I created this interactive piece for The Pudding while completing my Master's. On this site, you can explore the covers of more than a decade of New York Times best-sellers (approximately 5,000 books!) and judge your heart out. You can also filter by metadata from the Goodreads and The New York Times APIs, and by visual features detected by the Google Cloud Vision API.",responsibilities:"Coding, visual design, data analysis, front-end development.",alt:"A grid of book covers",image:"/assets/covers.jpg",years:[2019],link:{display:"pudding.cool/2019/07/book-covers",address:"https://pudding.cool/2019/07/book-covers/"}}),(0,r.jsx)(d,{org:"Oslo School of Architecture and Design",title:"Hack 1 Knit 2",info:"The software needed to use whole-garment knitting machines is incredibly complex, with users needing years of dedicated training to master. For my Master's Thesis, I developed open-source code that can be used to replicate many different knitting techniques that can be used by a wide range of makers for a wide range of projects on whole-garment knitting machines. This built off of work by the Carnegie Mellon Textiles Lab.",responsibilities:"Coding, research, writing, front-end development, knitting.",alt:"An assortment of small knitted objects",image:"/assets/knit.jpg",years:[2017,2019],link:{display:"jessp.github.io/kcodeblog",address:"https://jessp.github.io/kcodeblog/"}}),(0,r.jsx)(d,{org:"The Globe and Mail (Sophi)",title:"Design and Front-end Dev Lead",info:"I worked with The Globe and Mail's data science team to create Sophi: an in-house analytics systems to help editors understand how news stories are performing. I designed and developed both the front-end web experience, as well as a Chrome extension.",responsibilities:"Product design, user research, user experience design, front-end development.",alt:"The Globe and Mail logo",image:"/assets/globe.jpeg",years:[2016,2017],link:{display:"sophi.io",address:"https://www.sophi.io/"}})]})]})]})})})}},4411:function(e){e.exports={projectGrid:"project_projectGrid__UBVSg",imgHolder:"project_imgHolder__PeO_w",projectYear:"project_projectYear__crFA6",projectHeader:"project_projectHeader__qan5z",description:"project_description__TVOhz",responsibilities:"project_responsibilities___OOEm",hideOnBig:"project_hideOnBig__8KYoG",label:"project_label__XeMGb",resp:"project_resp__0ybYr"}},1673:function(e){e.exports={title:"Home_title__q0Qg4",containerOuter:"Home_containerOuter__5n8IM",containerInner:"Home_containerInner__eEgHw",main:"Home_main__OVLM4",splash:"Home_splash__IqZ8X",titleInfo:"Home_titleInfo__u0or9",detailInfo:"Home_detailInfo__k5XKC",projectList:"Home_projectList__CUOe6"}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);