(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{170:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"contributorQuery",function(){return h});n(78);var r=n(6),a=n.n(r),o=n(49),i=n.n(o),l=n(0),c=n.n(l),u=n(173),s=n(205),d=n(423),p=n(425),m=n(429),f=(n(189),n(207),n(174),n(221),n(430),n(431),function(t){function n(e){var n;return(n=t.call(this,e)||this).state={featuredAuthor:n.props.data.featured.edges[0].node,origFeature:n.props.data.featured.edges[0].node},n.setActiveAuthor=n.setActiveAuthor.bind(i()(i()(n))),n}a()(n,t);var r=n.prototype;return r.setActiveAuthor=function(e){this.setState({featuredAuthor:e})},r.render=function(){var t=this.state.featuredAuthor,n=[this.props.data.featured.edges[0]].concat(this.props.data.nonFeatured.edges),r=this.props.data.food.edges.find(function(e){return e.node.title===t.title}),a=r.node.acf.food_photo;return e.createElement(s.a,{pageName:"",style:{height:"100%"}},e.createElement("div",{className:"menuColumns twelveXWrapper"},e.createElement("div",{className:"controlColumn menuColumn storiesCol"},e.createElement("h2",null,"This Issue"),e.createElement(d.a,{authors:n,setAuthor:this.setActiveAuthor,featuredAuthor:t.acf.author_name,origFeature:this.state.origFeature})),e.createElement("div",{className:"menuWrapper storiesCol",style:{height:"100%"}},e.createElement("div",{className:"mediaColumn storiesCol",style:{height:"100%"}},e.createElement(m.a,{featuredAuthor:t,featuredSandwich:r,featuredSandwichImage:a})),e.createElement("div",{className:"foodColumn storiesCol",style:{display:"flex",flexDirection:"column",height:"100%"}},e.createElement("div",null,e.createElement("h2",null,"Centropa Stories"),e.createElement("p",{className:"introPara"},e.createElement("span",null,"In Centropa stories, we bring together some of Norway’s brightest writers and invite them to write about food culture around the world. You can experience their work here online, pick up a copy of Centropa magazine at Deichman, or order something off our "),e.createElement(u.Link,{to:"/menu#sandwiches"},e.createElement("span",null,"sandwich menu")),e.createElement("span",null," to see how they’ve inspired us.")),e.createElement("div",{className:"midReadNow"},e.createElement("img",{src:t.acf.author_photo.source_url}),e.createElement("div",{className:"redRect",style:{top:"75%",left:"21%",width:"4vw",height:"4.2vw"}}),e.createElement("div",{className:"redRect",style:{top:"12.5%",left:"40%",width:"9vw",height:"8.7vw"}}),e.createElement("div",{className:"redRect",style:{top:"55%",left:"65%",width:"10vw",height:"10.8vw"}}),e.createElement("div",{className:"redRect",style:{top:"2%",left:"83%",width:"3.4vw",height:"3.2vw"}}),e.createElement("div",{className:"readNow underlineLink"},e.createElement("p",{style:{fontSize:"0.85em"}},"Read "+t.acf.author_name+"'s"),e.createElement(u.Link,{to:"/"+t.slug},e.createElement("span",null,t.title))))),e.createElement("div",null,e.createElement("h2",null,"Archive"),e.createElement(p.a,{allAuthors:this.props.data.allContributors.edges,setAuthor:this.setActiveAuthor,featuredAuthor:t.acf.author_name}))))))},n}(c.a.Component));t.default=f;var h="1706992721"}.call(this,n(48))},173:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(172),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(175),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(31);n.d(t,"parsePath",function(){return d.a});var p=a.a.createContext({}),m=function(t){return e.createElement(p.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}}.call(this,n(48))},174:function(e,t,n){},175:function(e,t,n){var r;e.exports=(r=n(182))&&r.default||r},182:function(e,t,n){"use strict";n.r(t);n(50);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(51),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},183:function(e,t,n){"use strict";(function(e){n(0);var r=n(184);n(174);t.a=function(t){t.siteTitle;var n=t.pageName,a=t.minimal;return e.createElement("div",{className:"underlineLink headerContainer "+(a?"minimalHeader":"")},e.createElement(r.a,{to:"/",text:"Home"}),e.createElement(r.a,{to:"/menu",text:"Menu",color:"#2A8FA3"}),e.createElement(r.a,{to:"/stories",text:"Centropa Stories",color:"#A4384D"}),e.createElement("h1",{className:"pageName"},n))}}).call(this,n(48))},184:function(e,t,n){"use strict";(function(e){var r=n(6),a=n.n(r),o=n(0),i=n.n(o),l=n(173),c=(n(185),function(t){function n(){return t.apply(this,arguments)||this}return a()(n,t),n.prototype.render=function(){var t={color:this.props.color};return e.createElement(l.Link,{to:this.props.to,activeClassName:"activeUnderlineLink",style:t},e.createElement("span",null,this.props.text))},n}(i.a.Component));t.a=c}).call(this,n(48))},185:function(e,t,n){},189:function(e,t,n){},197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=i(n(4)),o=i(n(198));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,p(t).apply(this,arguments))}var n,a,i;return n=t,(a=[{key:"componentDidMount",value:function(){if(this.el){var e=this.props,t=e.centered,n=e.horizontal,r=e.onMove,a={};t&&(a.centered=!0),n&&(a.horizontal=!0),"function"==typeof r&&(a.callback=r.bind(this)),this.rellax=new o.default(this.el,a)}}},{key:"componentWillUnmount",value:function(){this.rellax&&this.rellax.destroy()}},{key:"render",value:function(){var e=this,t=this.props,n=t.as,a=(t.centered,t.horizontal,t.onMove,t.percentage),o=t.speed,i=t.zIndex,l=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(t,["as","centered","horizontal","onMove","percentage","speed","zIndex"]),u=n;return r.default.createElement(u,c({ref:function(t){e.el=t},"data-rellax-percentage":a,"data-rellax-speed":o,"data-rellax-zindex":i},l))}}])&&s(n.prototype,a),i&&s(n,i),function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");u(e.prototype,t&&t.prototype),t&&u(e,t)}(t,e),t}(r.PureComponent);t.default=m,m.propTypes={as:a.default.string,centered:a.default.bool,horizontal:a.default.bool,onMove:a.default.func,percentage:a.default.number,speed:a.default.number,zIndex:a.default.number},m.defaultProps={as:"div"}},198:function(e,t,n){var r,a,o;a=[],void 0===(o="function"==typeof(r=function(){var e=function(t,n){"use strict";var r=Object.create(e.prototype),a=0,o=0,i=0,l=0,c=[],u=!0,s=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},d=null,p=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,m=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t=["Webkit","Moz","ms"];for(var n in t)if(void 0!==e.style[t[n]+"Transform"])return t[n]+"Transform"}return"transform"}();r.options={speed:-2,center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,callback:function(){}},n&&Object.keys(n).forEach(function(e){r.options[e]=n[e]}),t||(t=".rellax");var f="string"==typeof t?document.querySelectorAll(t):[t];if(!(f.length>0))throw new Error("The elements you're trying to select don't exist.");if(r.elems=f,r.options.wrapper&&!r.options.wrapper.nodeType){var h=document.querySelector(r.options.wrapper);if(!h)throw new Error("The wrapper you're trying to use don't exist.");r.options.wrapper=h}var v=function(){for(var e=0;e<c.length;e++)r.elems[e].style.cssText=c[e].style;c=[],o=window.innerHeight,l=window.innerWidth,w(),function(){for(var e=0;e<r.elems.length;e++){var t=y(r.elems[e]);c.push(t)}}(),u&&(window.addEventListener("resize",v),u=!1),b()},y=function(e){var t=e.getAttribute("data-rellax-percentage"),n=e.getAttribute("data-rellax-speed"),a=e.getAttribute("data-rellax-zindex")||0,i=r.options.wrapper?r.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(r.options.relativeToWrapper){var c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;i=c-r.options.wrapper.offsetTop}var u=r.options.vertical&&(t||r.options.center)?i:0,s=r.options.horizontal&&(t||r.options.center)?window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,d=u+e.getBoundingClientRect().top,p=e.clientHeight||e.offsetHeight||e.scrollHeight,m=s+e.getBoundingClientRect().left,f=e.clientWidth||e.offsetWidth||e.scrollWidth,h=t||(u-d+o)/(p+o),v=t||(s-m+l)/(f+l);r.options.center&&(v=.5,h=.5);var y=n||r.options.speed,w=g(v,h,y),E=e.style.cssText,b="";if(E.indexOf("transform")>=0){var x=E.indexOf("transform"),A=E.slice(x),k=A.indexOf(";");b=k?" "+A.slice(11,k).replace(/\s/g,""):" "+A.slice(11).replace(/\s/g,"")}return{baseX:w.x,baseY:w.y,top:d,left:m,height:p,width:f,speed:y,style:E,transform:b,zindex:a}},w=function(){var e=a,t=i;if(a=r.options.wrapper?r.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,i=r.options.wrapper?r.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,r.options.relativeToWrapper){var n=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;a=n-r.options.wrapper.offsetTop}return!(e==a||!r.options.vertical)||!(t==i||!r.options.horizontal)},g=function(e,t,n){var a={},o=n*(100*(1-e)),i=n*(100*(1-t));return a.x=r.options.round?Math.round(o):Math.round(100*o)/100,a.y=r.options.round?Math.round(i):Math.round(100*i)/100,a},E=function(){w()&&!1===u&&b(),d=s(E)},b=function(){for(var e,t=0;t<r.elems.length;t++){var n=(a-c[t].top+o)/(c[t].height+o),u=(i-c[t].left+l)/(c[t].width+l),s=(e=g(u,n,c[t].speed)).y-c[t].baseY,d=e.x-c[t].baseX,p=c[t].zindex,f="translate3d("+(r.options.horizontal?d:"0")+"px,"+(r.options.vertical?s:"0")+"px,"+p+"px) "+c[t].transform;r.elems[t].style[m]=f}r.options.callback(e)};return r.destroy=function(){for(var e=0;e<r.elems.length;e++)r.elems[e].style.cssText=c[e].style;u||(window.removeEventListener("resize",v),u=!0),p(d),d=null},v(),E(),r.refresh=v,r};return e})?r.apply(t,a):r)||(e.exports=o)},205:function(e,t,n){"use strict";(function(e){var r=n(206),a=n(0),o=n.n(a),i=n(4),l=n.n(i),c=n(245),u=n.n(c),s=n(173),d=n(183),p=(n(189),n(174),function(t){t.home;var n=t.children,a=t.pageName;return e.createElement(s.StaticQuery,{query:"755544856",render:function(t){return e.createElement(o.a.Fragment,null,e.createElement(u.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Centropa"},{name:"keywords",content:"restaurant"}]},e.createElement("html",{lang:"en"})),e.createElement("div",{style:{margin:"0 auto",padding:"0px",marginTop:"50px",position:"relative",height:"calc(100% - 50px)",maxWidth:"1800px",width:"100%"}},n),e.createElement("div",null,e.createElement(d.a,{siteTitle:t.site.siteMetadata.title,pageName:a})))},data:r})});p.propTypes={children:l.a.node.isRequired},t.a=p}).call(this,n(48))},206:function(e){e.exports={data:{site:{siteMetadata:{title:"Centropa"}}}}},207:function(e,t,n){},221:function(e,t,n){},246:function(e,t,n){"use strict";var r=n(23),a=n(25),o=n(32),i=n(24),l=[].sort,c=[1,2,3];r(r.P+r.F*(i(function(){c.sort(void 0)})||!i(function(){c.sort(null)})||!n(247)(l)),"Array",{sort:function(e){return void 0===e?l.call(o(this)):l.call(o(this),a(e))}})},247:function(e,t,n){"use strict";var r=n(24);e.exports=function(e,t){return!!e&&r(function(){t?e.call(null,function(){},1):e.call(null)})}},423:function(e,t,n){"use strict";(function(e){var r=n(6),a=n.n(r),o=n(0),i=n.n(o),l=(n(424),function(t){function n(){return t.apply(this,arguments)||this}return a()(n,t),n.prototype.render=function(){var t=this.props.setAuthor,n=this.props.featuredAuthor,r=this.props.origFeature;return e.createElement("div",{className:"authorGridContainer menuLocationPanel"},this.props.authors.map(function(a,o){var i=!1;return r.acf.author_name===a.node.acf.author_name&&(i=!0),e.createElement("div",{key:o,className:"authorButton "+(a.node.acf.author_name===n?"activeMenu ":" ")+(i?"isFeaturedAuthor":" "),onClick:function(){return t(a.node)}},e.createElement("p",null,a.node.acf.author_name),e.createElement("p",null,e.createElement("span",null,a.node.acf.country_name),i&&e.createElement("span",null," (featured)")))}))},n}(i.a.Component));t.a=l}).call(this,n(48))},424:function(e,t,n){},425:function(e,t,n){"use strict";(function(e){n(76),n(52),n(426),n(246),n(77);var r=n(6),a=n.n(r),o=n(49),i=n.n(o),l=n(0),c=n.n(l),u=(n(428),n(173)),s=function(t){function n(e){var n;return(n=t.call(this,e)||this).state={activeSort:"Alphabetical"},n.setActive=n.setActive.bind(i()(i()(n))),n}a()(n,t);var r=n.prototype;return r.setActive=function(e){this.setState({activeSort:e})},r.render=function(){var t,n=this.state.activeSort,r=this.setActive,a=this.props.setAuthor,o=this.props.featuredAuthor;"Alphabetical"===n?t=this.props.allAuthors.reduce(function(e,t){var n=t.node.acf.author_name.split(" ")[t.node.acf.author_name.split(" ").length-1][0];return n in e?e[n].push(t):e[n]=[t],e},{}):"Country"===n?t=this.props.allAuthors.reduce(function(e,t){var n=t.node.acf.country_name;return n in e?e[n].push(t):e[n]=[t],e},{}):"Date"===n&&(t=this.props.allAuthors.reduce(function(e,t){var n=new Date(new Date(t.node.date).getFullYear(),new Date(t.node.date).getMonth());return n in e?e[n].push(t):e[n]=[t],e},{}));var i=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];return e.createElement("div",{className:"authorListHolder"},e.createElement("div",{className:"authorSorting underlineLink",style:{position:"relative",width:"100%"}},e.createElement("p",null,e.createElement("span",{style:{float:"left",paddingTop:"5px",display:"inline-block"}},"Sort by: "),["Alphabetical","Country","Date"].map(function(t,a){return e.createElement("a",{key:a,className:t===n?"activeUnderlineLink":"",style:{cursor:"pointer"},onClick:function(){return r(t)}},e.createElement("span",null,t))}))),e.createElement("div",{className:"authorColumns"},e.createElement("div",null,"Date"===n&&Object.keys(t).sort().map(function(n){return e.createElement("div",{key:n},e.createElement("h3",null,i[new Date(n).getMonth()]+" "+new Date(n).getFullYear()),e.createElement("ul",null,t[n].sort(function(e,t){return new Date(t.node.date)-new Date(e.node.date)}).map(function(t,n){return e.createElement("li",{key:t.node.acf.author_name,onClick:function(){return a(t.node)}},e.createElement("span",{className:t.node.acf.author_name===o?"activeAuthorSpan":""},t.node.acf.author_name))})))}),"Date"!==n&&Object.keys(t).sort().map(function(n){return e.createElement("div",{key:n},e.createElement("h3",null,n),e.createElement("ul",null,t[n].sort().map(function(t,n){return e.createElement("li",{key:t.node.acf.author_name,onClick:function(){return a(t.node)}},e.createElement("span",{className:t.node.acf.author_name===o?"activeAuthorSpan":""},t.node.acf.author_name))})))}))),e.createElement("div",{className:"authorColumns showOnSmall"},e.createElement("div",null,"Date"===n&&Object.keys(t).sort().map(function(n){return e.createElement("div",{key:n},e.createElement("h3",null,i[new Date(n).getMonth()]+" "+new Date(n).getFullYear()),e.createElement("ul",null,t[n].sort(function(e,t){return new Date(t.node.date)-new Date(e.node.date)}).map(function(t,n){return e.createElement("li",{key:t.node.acf.author_name},e.createElement(u.Link,{to:"/"+t.node.slug},e.createElement("span",{className:t.node.acf.author_name===o?"activeAuthorSpan":""},t.node.acf.author_name)))})))}),"Date"!==n&&Object.keys(t).sort().map(function(n){return e.createElement("div",{key:n},e.createElement("h3",null,n),e.createElement("ul",null,t[n].sort().map(function(t,n){return e.createElement("li",{key:t.node.acf.author_name},e.createElement(u.Link,{to:"/"+t.node.slug},e.createElement("span",{className:t.node.acf.author_name===o?"activeAuthorSpan":""},t.node.acf.author_name)))})))}))))},n}(c.a.Component);t.a=s}).call(this,n(48))},426:function(e,t,n){var r=n(32),a=n(34);n(427)("keys",function(){return function(e){return a(r(e))}})},427:function(e,t,n){var r=n(23),a=n(16),o=n(24);e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],i={};i[e]=t(n),r(r.S+r.F*o(function(){n(1)}),"Object",i)}},428:function(e,t,n){},429:function(e,t,n){"use strict";(function(e){var r=n(6),a=n.n(r),o=n(0),i=n.n(o),l=n(173),c=n(197),u=n.n(c),s=function(t){function n(){return t.apply(this,arguments)||this}return a()(n,t),n.prototype.render=function(){return e.createElement("div",{className:"bgLayers",style:{height:"calc(100% + 50px)",position:"relative",overflowX:"hidden",overflowY:"visible",marginTop:"-50px"}},e.createElement(u.a,null,e.createElement("div",{className:"redRect",style:{left:"2vw",top:"1.2vw",width:"4.3vw",height:"4.2vw"}})),e.createElement(u.a,null,e.createElement("div",{className:"redRect",style:{left:"12.4vw",top:"6.5vw",width:"2.3vw",height:"2.2vw"}})),e.createElement(u.a,null,e.createElement("div",{className:"redRect",style:{left:"1vw",top:"9vw",width:"7.3vw",height:"7.2vw"}})),e.createElement(u.a,null,e.createElement("div",{className:"redRect",style:{left:"20vw",top:"11vw",width:"6vw",height:"6vw"}}),e.createElement(u.a,null,e.createElement("div",{className:"redRect",style:{left:"25.5vw",top:"31vw",width:"4.5vw",height:"4.6vw"}}))),e.createElement("div",{style:{width:"16vw",height:"22vw",left:"calc(50% - 15vw)",top:"calc(35% + 4vw)",backgroundImage:"url("+this.props.featuredAuthor.acf.location_photo.source_url+")"}}),this.props.featuredSandwichImage&&e.createElement("div",{style:{width:"16vw",height:"20vw",left:"calc(50% - 1vw)",top:"calc(35% + 10vw)",backgroundImage:"url("+this.props.featuredSandwichImage.source_url+")"}}),e.createElement("div",{style:{width:"16vw",height:"19vw",left:"calc(50% - 2vw)",top:"calc(35% - 16vw)",backgroundImage:"url("+this.props.featuredAuthor.acf.author_photo.source_url+")"}}),e.createElement("div",{style:{minWidth:"20vw",minHeight:"110px",left:"calc(50% - 10vw)",top:"35%"},className:"underlineLink readNow"},e.createElement("div",{style:{top:"50%",transform:"translateY(-50%)"}},e.createElement("p",{style:{fontSize:"0.85em"}},"Read "+this.props.featuredAuthor.acf.author_name+"'s"),e.createElement(l.Link,{to:"/"+this.props.featuredAuthor.slug},e.createElement("span",null,this.props.featuredAuthor.title)))),e.createElement("div",{className:"bgExcerpts",style:{width:"20vw",right:"0px",top:"calc(35% + 16vw)"}},e.createElement("div",{style:{width:"100%"}},e.createElement("div",null,e.createElement("p",null,"“"+this.props.featuredAuthor.acf.story_excerpt+"”")))))},n}(i.a.Component);t.a=s}).call(this,n(48))},430:function(e,t,n){},431:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDguNzQgMjEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjEwcHg7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5sb2dvPC90aXRsZT48ZyBpZD0iY2lyY2xlcyI+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyMDMuNCAxMDIuOCAxMDQuMTcgMjAyLjAzIDQuOTQgMTAyLjgiLz48L2c+PC9zdmc+"}}]);
//# sourceMappingURL=component---src-pages-stories-js-42869013947f9fccaffe.js.map