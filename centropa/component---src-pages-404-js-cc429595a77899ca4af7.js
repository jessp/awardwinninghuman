(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{167:function(e,t,n){"use strict";n.r(t),function(e){n(0);var a=n(207);t.default=function(){return e.createElement(a.a,null,e.createElement("h1",null,"NOT FOUND"),e.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}}.call(this,n(48))},173:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(172),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var s=n(174),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var p=n(31);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),f=function(t){return e.createElement(d.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}}.call(this,n(48))},174:function(e,t,n){var a;e.exports=(a=n(182))&&a.default||a},175:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);n(50);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(51),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},183:function(e,t,n){"use strict";(function(e){var a=n(6),r=n.n(a),i=n(0),o=n.n(i),u=n(184),c=(n(186),function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){return e.createElement("div",{className:"underlineLink headerContainer"},e.createElement(u.a,{to:"/",pageName:this.props.page,text:"Home"}),e.createElement(u.a,{to:"/menu",pageName:this.props.page,text:"Menu",color:"#2A8FA3"}),e.createElement(u.a,{to:"/stories",pageName:this.props.page,text:"Centropa Stories",color:"#A4384D"}))},n}(o.a.Component));t.a=c}).call(this,n(48))},184:function(e,t,n){"use strict";(function(e){var a=n(6),r=n.n(a),i=n(0),o=n.n(i),u=n(173),c=(n(185),function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){var t={color:this.props.color};return e.createElement(u.Link,{to:this.props.to,activeClassName:"activeUnderlineLink",style:t,className:this.props.pageName===this.props.text?"activeUnderlineLink":""},e.createElement("span",null,this.props.text))},n}(o.a.Component));t.a=c}).call(this,n(48))},185:function(e,t,n){},186:function(e,t,n){},207:function(e,t,n){"use strict";(function(e){var a=n(208),r=n(0),i=n.n(r),o=n(4),u=n.n(o),c=n(245),s=n.n(c),l=n(173),p=(n(175),n(183)),d=function(t){t.home;var n=t.children,r=t.pageName;return e.createElement(l.StaticQuery,{query:"755544856",render:function(t){return e.createElement(i.a.Fragment,null,e.createElement(s.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Centropa"},{name:"keywords",content:"restaurant"}]},e.createElement("html",{lang:"en"})),e.createElement("div",{style:{margin:"0 auto",padding:"0px",marginTop:"50px",position:"relative",height:"calc(100% - 50px)",maxWidth:"1800px",width:"100%"}},n),e.createElement("div",null,e.createElement(p.a,{page:r})))},data:a})};d.propTypes={children:u.a.node.isRequired},t.a=d}).call(this,n(48))},208:function(e){e.exports={data:{site:{siteMetadata:{title:"Centropa"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-cc429595a77899ca4af7.js.map