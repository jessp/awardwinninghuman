(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{166:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"pageQuery",function(){return g});n(192),n(76),n(77);var r=n(6),a=n.n(r),i=n(49),o=n.n(i),s=n(0),l=n(173),c=n(4),u=n.n(c),d=n(183),m=(n(290),n(434)),h=n(222),p=n(223),f=function(t){function n(e){var n;(n=t.call(this,e)||this).state={scrollPercent:0,totalRead:n.props.data.wordpressPost.content.split(" ").length/225,remainingRead:Math.round(n.props.data.wordpressPost.content.split(" ").length/225*2)/2},n.handleScroll=n.handleScroll.bind(o()(o()(n))),n.updateWindowDimensions=n.updateWindowDimensions.bind(o()(o()(n))),n.images=[];var r=n.images,a=n.props.data.wordpressPost.acf;n.checkForImages;return[a.image_one,a.image_two,a.image_three,a.image_four,a.image_five].forEach(function(e){e&&e.source_url&&r.push({img:e.source_url})}),n}a()(n,t);var r=n.prototype;return r.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),window.addEventListener("scroll",this.handleScroll)},r.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions),window.removeEventListener("scroll",this.handleScroll)},r.updateWindowDimensions=function(){this.refs&&this.refs.menuWrapper&&this.setState({windowHeight:this.refs.menuWrapper.scrollHeight})},r.handleScroll=function(e){var t=(window.scrollY-window.innerHeight)/(document.documentElement.scrollHeight-2*window.innerHeight)*100;t<0?t=0:t>100&&(t=100);var n=Math.round(this.state.totalRead*(100-this.state.scrollPercent)/100*2)/2;this.setState({scrollPercent:t,remainingRead:n})},r.render=function(){var t=this.props.data.wordpressPost;return e.createElement("div",{style:{width:"100%",height:"100%",position:"relative"},ref:"menuWrapper"},e.createElement("div",{className:"storyHeaderHolder"},e.createElement("div",{className:"storyLocationImageHolder",style:{backgroundImage:"url("+t.acf.location_photo.source_url+")"}}),e.createElement("div",{className:"storyNameHolder"},e.createElement("div",{className:"storyMetaText"},e.createElement("h1",null,t.title),e.createElement("h2",null,"Inspired by "+t.acf.country_name),e.createElement("p",null,"“"+t.acf.story_excerpt+"”"))),e.createElement("div",{className:"authorBio"},e.createElement("h1",null,t.acf.author_name),e.createElement("p",null,t.acf.author_bio),e.createElement("p",{className:"commissionText"},"This piece was commissioned as part of ",e.createElement(l.Link,{to:"/stories"},"Centropa Stories"),". We recommend accompanying it with the ",e.createElement(l.Link,{to:"/menu#sandwiches"},"smørbrod we created")," inspired by it."))),e.createElement("div",{className:"menuColumns storyHolder"},e.createElement("div",{className:"pieHolder"},e.createElement("div",{style:{width:"80%",marginLeft:"10%"}},e.createElement(m.a,{animate:!0,data:[{x:"",y:this.state.scrollPercent,fill:"#0d3e32",opacity:0},{x:"",y:100-this.state.scrollPercent,fill:"#0d3e32"}],style:{data:{fill:function(e){return e.fill},opacity:function(e){return e.opacity}}},labels:function(){return null}})),e.createElement("p",null,this.state.remainingRead+" mins left to read")),e.createElement("div",{className:"menuWrapper"},e.createElement("div",{className:"foodColumn storyColumn",dangerouslySetInnerHTML:{__html:t.content}}),e.createElement("div",{className:"mediaColumn",style:{height:this.state.windowHeight-200+"px",marginTop:"-100%"}},e.createElement("div",{className:"imageCols redSquares",style:{height:"calc("+this.state.windowHeight+" - 100% - 200px)"}},e.createElement(h.a,{numSquares:Math.floor(this.state.remainingRead)+10,windowHeight:this.state.windowHeight}))),this.images.length>0&&e.createElement("div",{className:"storyPhotoColumn",style:{height:"calc("+this.state.windowHeight+" - 100%)"}},e.createElement(p.a,{photos:this.images,numSquares:this.images.length,windowHeight:this.state.windowHeight}))),e.createElement("div",{className:"clearer"})),e.createElement("div",{className:"storyAuthorImageHolder",style:{backgroundImage:"url("+t.acf.author_photo.source_url+")"}}),e.createElement(d.a,null))},n}(s.Component);f.propTypes={data:u.a.object.isRequired,edges:u.a.array},t.default=f;var g="1776814460"}.call(this,n(48))},173:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return h});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),s=n(172),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(174),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var d=n(31);n.d(t,"parsePath",function(){return d.a});var m=a.a.createContext({}),h=function(t){return e.createElement(m.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}}.call(this,n(48))},174:function(e,t,n){var r;e.exports=(r=n(182))&&r.default||r},175:function(e,t,n){},176:function(e,t,n){"use strict";function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}function a(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e}n.d(t,"a",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return i});var i={sandwiches:"We consider smørbrød one of our signature offerings at Centropa. We’re inspired by the work of Norwegian authors and food culture from around the world as part of the Centropa Stories project. We recommend trying an assortment by ordering our High Tea service.",snacks:"Check out a book a Deichman and grab a coffee alongside one of our delicious café snacks. All pastries are made fresh in-house every morning by our team of dedicated bakers.",mains:"We offer an assortment of European classics as well as a seasonally rotating selection of internationally-inspired plates.",desserts:"Our desserts are inspired by the creative spirit of Centropa, as well as the homey spirit of the Norwegian countryside. Go ahead, indulge!"}},182:function(e,t,n){"use strict";n.r(t);n(50);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),s=n(51),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},183:function(e,t,n){"use strict";(function(e){n(0);var r=n(184);n(175);t.a=function(t){t.siteTitle;var n=t.pageName,a=t.minimal;return e.createElement("div",{className:"underlineLink headerContainer "+(a?"minimalHeader":"")},e.createElement(r.a,{to:"/",text:"Home"}),e.createElement(r.a,{to:"/menu",text:"Menu",color:"#2A8FA3"}),e.createElement(r.a,{to:"/stories",text:"Centropa Stories",color:"#A4384D"}),e.createElement("h1",{className:"pageName"},n))}}).call(this,n(48))},184:function(e,t,n){"use strict";(function(e){var r=n(6),a=n.n(r),i=n(0),o=n.n(i),s=n(173),l=(n(185),function(t){function n(){return t.apply(this,arguments)||this}return a()(n,t),n.prototype.render=function(){var t={color:this.props.color};return e.createElement(s.Link,{to:this.props.to,activeClassName:"activeUnderlineLink",style:t},e.createElement("span",null,this.props.text))},n}(o.a.Component));t.a=l}).call(this,n(48))},185:function(e,t,n){},222:function(e,t,n){"use strict";(function(e){n(192);var r=n(6),a=n.n(r),i=n(49),o=n.n(i),s=n(0),l=n.n(s),c=(n(176),function(t){function n(e){var n;(n=t.call(this,e)||this).renderBgColumns=n.renderBgColumns.bind(o()(o()(n)));for(var r=n.props.numSquares,a=Array(r).fill().map(function(e,t){return Math.round(t/r*100+2*Math.random())/100}),i=Array(r).fill().map(function(){return Math.round(100*Math.random())/100}),s=Array(r).fill().map(function(){return Math.round(6*Math.random()+6)}),l=[],c=0;c<r;c++){var u=new Object;u.left=i[c],u.top=a[c],u.width=s[c],l.push(u)}return n.squares=l,n}a()(n,t);var r=n.prototype;return r.renderBgColumns=function(){var t=this.props.windowHeight;return this.squares.map(function(n,r){return e.createElement("div",{key:r+n.left,style:{right:55*n.left+"%",top:n.top*(t-200)+"px",width:n.width+"vw",height:n.width+"vw"}})})},r.render=function(){return e.createElement("div",{className:"bgLayers bgSquares",style:{height:this.props.windowHeight+"px"}},this.renderBgColumns())},n}(l.a.Component));t.a=c}).call(this,n(48))},223:function(e,t,n){"use strict";(function(e){n(192);var r=n(6),a=n.n(r),i=n(49),o=n.n(i),s=n(0),l=n.n(s),c=(n(176),n(197)),u=n.n(c),d=function(t){function n(e){var n;(n=t.call(this,e)||this).renderPhotoColumns=n.renderPhotoColumns.bind(o()(o()(n)));for(var r=n.props.numSquares,a=Array(r).fill().map(function(e,t){return Math.round(t/r*100)/100}),i=Array(r).fill().map(function(){return Math.round(100*Math.random())/100}),s=Array(r).fill().map(function(){return Math.round(10*Math.random()+15)}),l=s.map(function(e){return Math.round(e*(.5*Math.random()+.75))}),c=[],u=0;u<r;u++){var d=n.props.photos[u];d.left=i[u],d.top=a[u],d.width=s[u],d.height=l[u],c.push(d)}return n.squares=c,n}a()(n,t);var r=n.prototype;return r.renderPhotoColumns=function(){var t=this.props.windowHeight;return this.squares.map(function(n,r){var a=n.top*(t-200)/1.25;return e.createElement(u.a,{key:r+n.left,speed:-2},e.createElement("div",{style:{right:30*n.left+"%",top:a+"px",width:n.width+"vw",height:n.height+"vw",backgroundImage:"url("+n.img+")"},className:"rellax"},n.title&&e.createElement("div",null,e.createElement("h4",null,n.title))))})},r.render=function(){return e.createElement("div",{className:"bgLayers"},this.renderPhotoColumns())},n}(l.a.Component);t.a=d}).call(this,n(48))},290:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-book-js-e3cee635ed075835e60e.js.map