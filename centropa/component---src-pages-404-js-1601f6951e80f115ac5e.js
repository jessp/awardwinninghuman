(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{167:function(e,t,n){"use strict";n.r(t),function(e){n(0);var a=n(207);t.default=function(){return e.createElement(a.a,null,e.createElement("h1",null,"NOT FOUND"),e.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}}.call(this,n(48))},173:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(172),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(174),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(31);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return e.createElement(p.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}}.call(this,n(48))},174:function(e,t,n){var a;e.exports=(a=n(182))&&a.default||a},176:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);n(50);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(51),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},183:function(e,t,n){"use strict";(function(e){n(0);var a=n(184);n(186);t.a=function(t){t.siteTitle;var n=t.pageName,r=t.minimal;return e.createElement("div",{className:"underlineLink headerContainer "+(r?"minimalHeader":"")},e.createElement(a.a,{to:"/",text:"Home"}),e.createElement(a.a,{to:"/menu",text:"Menu",color:"#2A8FA3"}),e.createElement(a.a,{to:"/stories",text:"Centropa Stories",color:"#A4384D"}),e.createElement("h1",{className:"pageName"},n))}}).call(this,n(48))},184:function(e,t,n){"use strict";(function(e){var a=n(6),r=n.n(a),i=n(0),o=n.n(i),u=n(173),c=(n(185),function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){var t={color:this.props.color};return e.createElement(u.Link,{to:this.props.to,activeClassName:"activeUnderlineLink",style:t},e.createElement("span",null,this.props.text))},n}(o.a.Component));t.a=c}).call(this,n(48))},185:function(e,t,n){},186:function(e,t,n){},207:function(e,t,n){"use strict";(function(e){var a=n(208),r=n(0),i=n.n(r),o=n(4),u=n.n(o),c=n(245),l=n.n(c),s=n(173),d=(n(176),n(183)),p=function(t){t.home;var n=t.children,r=t.pageName;return e.createElement(s.StaticQuery,{query:"755544856",render:function(t){return e.createElement(i.a.Fragment,null,e.createElement(l.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Centropa"},{name:"keywords",content:"restaurant"}]},e.createElement("html",{lang:"en"})),e.createElement("div",{style:{margin:"0 auto",padding:"0px",marginTop:"50px",position:"relative",height:"calc(100% - 50px)",maxWidth:"1800px",width:"100%"}},n),e.createElement("div",null,e.createElement(d.a,{siteTitle:t.site.siteMetadata.title,pageName:r})))},data:a})};p.propTypes={children:u.a.node.isRequired},t.a=p}).call(this,n(48))},208:function(e){e.exports={data:{site:{siteMetadata:{title:"Centropa"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-1601f6951e80f115ac5e.js.map