(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{168:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"featuredQuery",function(){return p});var a=n(6),r=n.n(a),i=n(49),o=n.n(i),l=n(0),c=n.n(l),s=(n(287),n(408),n(175),n(409),n(410)),u=n(183),d=n(412),m=(n(414),function(t){function n(e){var n;return(n=t.call(this,e)||this).state={animationCompleted:!1,contributorIndex:0,lat:59.909272,lng:10.753171,zoom:14},n.completeAnimation=n.completeAnimation.bind(o()(o()(n))),n}r()(n,t);var a=n.prototype;return a.componentWillUnmount=function(){this.setState({animationCompleted:!0})},a.completeAnimation=function(){this.setState({animationCompleted:!0})},a.render=function(){var t=this;this.state.lat,this.state.lng;return e.createElement("div",{style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"}},e.createElement("div",{className:"mondrianHolder "+(this.state.animationCompleted?"afterIntroTransformed":""),ref:function(e){return t.scene=e}},e.createElement("div",{className:"left1",style:{backgroundColor:"#DA852D"}}),e.createElement("div",{className:"left2",style:{backgroundColor:"#A4384D"}},e.createElement("svg",{viewBox:"0 0 310 300",style:{width:"100%",height:"100%"}},e.createElement("text",{y:"45",fontSize:"40",fontWeight:"bold"},"Hours"),e.createElement("text",{y:"105",fontSize:"35",fontWeight:"bold"},"Monday - Friday"),e.createElement("text",{y:"145",fontSize:"30"},"9 - 22"),e.createElement("text",{y:"195",fontSize:"35",fontWeight:"bold"},"Saturday - Sunday"),e.createElement("text",{y:"235",fontSize:"30"},"12 - 22"))),e.createElement("div",{className:"left3",style:{backgroundColor:"#2A8FA3"}}),e.createElement("div",{className:"left4",style:{backgroundImage:"url("+this.props.data.about.acf.photo_4.source_url+")"}}),e.createElement("div",{className:"left5",style:{backgroundImage:"url("+this.props.data.about.acf.photo_3.source_url+")"}}),e.createElement("div",{className:"left6"}),e.createElement("div",{className:"left7",style:{backgroundColor:"#EFC835"}}),e.createElement("div",{className:"right1",style:{backgroundColor:"#2A8FA3"}}),e.createElement("div",{className:"right2",style:{backgroundImage:"url("+this.props.data.about.acf.photo_2.source_url+")"}}),e.createElement("div",{className:"right3",style:{backgroundImage:"url("+this.props.data.about.acf.photo_1.source_url+")"}}),e.createElement("div",{className:"right4",style:{backgroundImage:"url("+this.props.data.about.acf.photo_5.source_url+")"}}),e.createElement("div",{className:"right5",style:{backgroundColor:"#EFC835"}}),e.createElement("div",{className:"right6",style:{backgroundColor:"#DA852D"}}),e.createElement("div",{className:"right7",style:{backgroundColor:"#2A8FA3"}})),e.createElement("div",{className:"svgGroup"},e.createElement("div",{className:"logoHolder"},e.createElement(s.a,{completeAnimation:this.completeAnimation}),e.createElement("div",{className:"underlineLink"},e.createElement("p",null,this.props.data.about.acf.homepage_text),e.createElement("p",{className:"hideExceptMobile"},"Monday - Friday: 9 - 22"),e.createElement("p",{className:"hideExceptMobile"},"Saturday - Sunday: 12 - 22"),e.createElement("p",null,e.createElement("a",{href:"/"},e.createElement("span",null,"Book a table now")))))),e.createElement(u.a,{page:"Home"}),e.createElement(d.a,null))},n}(c.a.Component));t.default=m;var p="2754362812"}.call(this,n(48))},173:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(172),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(174),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(31);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(t){return e.createElement(m.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}}.call(this,n(48))},174:function(e,t,n){var a;e.exports=(a=n(182))&&a.default||a},175:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);n(50);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(51),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},183:function(e,t,n){"use strict";(function(e){var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(184),c=(n(186),function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){return e.createElement("div",{className:"underlineLink headerContainer"},e.createElement(l.a,{to:"/",pageName:this.props.page,text:"Home"}),e.createElement(l.a,{to:"/menu",pageName:this.props.page,text:"Menu",color:"#2A8FA3"}),e.createElement(l.a,{to:"/stories",pageName:this.props.page,text:"Centropa Stories",color:"#A4384D"}))},n}(o.a.Component));t.a=c}).call(this,n(48))},184:function(e,t,n){"use strict";(function(e){var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(173),c=(n(185),function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){var t={color:this.props.color};return e.createElement(l.Link,{to:this.props.to,activeClassName:"activeUnderlineLink",style:t,className:this.props.pageName===this.props.text?"activeUnderlineLink":""},e.createElement("span",null,this.props.text))},n}(o.a.Component));t.a=c}).call(this,n(48))},185:function(e,t,n){},186:function(e,t,n){},288:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJtYXAtbWFya2VyLWFsdCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtbWFwLW1hcmtlci1hbHQgZmEtdy0xMiBmYS0zeCI+PHBhdGggZmlsbD0iIzBkM2UzMiIgZD0iTTE3Mi4yNjggNTAxLjY3QzI2Ljk3IDI5MS4wMzEgMCAyNjkuNDEzIDAgMTkyIDAgODUuOTYxIDg1Ljk2MSAwIDE5MiAwczE5MiA4NS45NjEgMTkyIDE5MmMwIDc3LjQxMy0yNi45NyA5OS4wMzEtMTcyLjI2OCAzMDkuNjctOS41MzUgMTMuNzc0LTI5LjkzIDEzLjc3My0zOS40NjQgMHpNMTkyIDI3MmM0NC4xODMgMCA4MC0zNS44MTcgODAtODBzLTM1LjgxNy04MC04MC04MC04MCAzNS44MTctODAgODAgMzUuODE3IDgwIDgwIDgweiIgY2xhc3M9IiI+PC9wYXRoPjwvc3ZnPg=="},409:function(e,t,n){},410:function(e,t,n){"use strict";(function(e){n(77);var a=n(6),r=n.n(a),i=n(49),o=n.n(i),l=n(0),c=n(181),s=(n(436),n(249)),u=n(411),d=n.n(u),m=function(t){function n(e){var n;return(n=t.call(this,e)||this).createLogoAnimation=n.createLogoAnimation.bind(o()(o()(n))),n.getStartingPath=n.getStartingPath.bind(o()(o()(n))),n}r()(n,t);var a=n.prototype;return a.componentDidMount=function(){this.createLogoAnimation()},a.createLogoAnimation=function(){var e=" FOOD inspired by STORIES inspired by TRAVEL inspired by FOOD inspired by STORIES inspired by TRAVEL inspired by ".split(""),t=Object(c.c)(this.refs.svgNode);t.select("text").select("textPath").selectAll("tspan").data(e,function(e){return e}).enter().append("tspan").style("font-weight",function(e){return e===e.toUpperCase()?"bold":"normal"}).style("opacity",0).text(function(e){return e}).transition().delay(function(e,t){return 25*t}).duration(100).style("opacity",1);var n=t.select("#globeCirc"),a=n.node().getTotalLength();n.attr("stroke-dasharray",a+" "+a).attr("stroke-dashoffset",a).transition().ease(s.easeLinear).duration(25*e.length).attr("stroke-dashoffset",0),Object(c.c)(".innerLogo").transition().delay(25*e.length+2250).duration(2e3).style("opacity",1),t.select("text").select("textPath").selectAll("tspan").transition().delay(25*e.length+2200).duration(1750).style("opacity",0).remove();var r=this.props.completeAnimation;t.select("image").transition().delay(25*e.length+2200+1750).duration(1750).style("opacity",1).on("end",function(){r()})},a.getStartingPath=function(e,t,n){return"M "+e+" "+t+" m -"+n+", 0 a "+n+","+n+" 0 1,0 "+2*n+",0 a "+n+","+n+" 0 1,0 -"+2*n+",0"},a.render=function(){return e.createElement("svg",{ref:"svgNode",viewBox:"0 0 325 400"},e.createElement("defs",null,e.createElement("path",{id:"textPath",d:this.getStartingPath(162.5,175,151)})),e.createElement("path",{d:this.getStartingPath(162.5,175,151),fill:"none",stroke:"none"}),e.createElement("path",{id:"globeCirc",d:this.getStartingPath(162.5,175,125),stroke:"#0d3e32",strokeWidth:9,fill:"none"}),e.createElement("text",{style:{fontFamily:"Lato"},fill:"#0d3e32"},e.createElement("textPath",{href:"#textPath"})),e.createElement("g",{className:"innerLogo",fill:"none",stroke:"#0d3e32",strokeWidth:9,style:{opacity:0}},e.createElement("ellipse",{cx:"162.5",cy:"175",rx:"62.5",ry:"125"}),e.createElement("line",{x1:"162.5",y1:"50",x2:"162.5",y2:"300"}),e.createElement("line",{x1:"37.5",y1:"175",x2:"287.5",y2:"175"}),e.createElement("path",{d:"M60 105 Q 160 135 270 105"}),e.createElement("path",{d:"M60 245 Q 160 215 270 245"})),e.createElement("image",{href:d.a,height:"140",width:"290",transform:"translate(15,280)",style:{opacity:0}}))},n}(l.Component);t.a=m}).call(this,n(48))},411:function(e,t,n){e.exports=n.p+"static/logo_text-13-c43d2f21248867452e35ea558dd403f1.png"},412:function(e,t,n){"use strict";(function(e){var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=(n(413),n(294)),c=function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){return e.createElement("div",{className:"footer"},e.createElement("div",{className:"floatLeft contact"},e.createElement("p",null,"+47 111 11 111"),e.createElement("p",null,"Dronning Eufemias gate 4, 0154 Oslo")),e.createElement("div",{className:"floatRight social"},e.createElement(l.a,null),e.createElement(l.b,null)),e.createElement("div",{className:"clearer"}))},n}(o.a.Component);t.a=c}).call(this,n(48))},413:function(e,t,n){},414:function(e,t,n){"use strict";var a=n(287),r=n.n(a);new r.a.Icon({iconUrl:n(288),iconRetinaUrl:n(288),iconSize:new r.a.Point(30,37),className:"l"})}}]);
//# sourceMappingURL=component---src-pages-index-js-765ad41c81b5472680aa.js.map