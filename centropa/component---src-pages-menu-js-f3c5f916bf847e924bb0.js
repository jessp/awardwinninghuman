(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{169:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"menuQuery",function(){return f});n(409),n(245),n(78),n(76),n(52),n(285);var r=n(6),a=n.n(r),i=n(49),s=n.n(i),o=n(0),c=n.n(o),u=(n(176),n(198),n(286),n(206)),l=n(411),p=n(419),d=n(421),m=n(178),h=function(t){function n(e){var n;n=t.call(this,e)||this;var r=["sandwiches","snacks","mains","desserts"];n.filterItems=n.filterItems.bind(s()(s()(n))),n.setActiveCat=n.setActiveCat.bind(s()(s()(n))),n.updateWindowDimensions=n.updateWindowDimensions.bind(s()(s()(n))),n.state={activeCat:"sandwiches",windowHeight:0};for(var a={},i=[],o=0;o<n.props.data.allContributors.edges.length;o++){a[n.props.data.allContributors.edges[o].node.acf.country_name]=n.props.data.allContributors.edges[o].node.slug;var c=new Object;c.slug=n.props.data.allContributors.edges[o].node.slug,c.author_name=n.props.data.allContributors.edges[o].node.acf.author_name,c.story_excerpt=n.props.data.allContributors.edges[o].node.acf.story_excerpt,i.push(c)}n.sandwichContribs=a,n.mediaContribs=i;for(var u=[],l=0;l<n.props.data.food.edges.length;l++){var p=n.props.data.food.edges[l].node;if(p.acf.food_photo){var d=new Object;d.title=p.title,d.img=p.acf.food_photo.source_url;for(var m="sandwiches",h=p.categories.map(function(e){return Object.values(e)[0]}),f=0;f<r.length;f++)if(void 0!==h.find(function(e){return e===r[f]})){m=r[f];break}d.category=m,u.push(d)}}return n.photos=u.sort(function(e,t){return r[t.category]-r[e.category]}).slice().reverse(),n}a()(n,t);var r=n.prototype;return r.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},r.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},r.filterItems=function(e,t){return e.filter(function(e){return e.node.categories.filter(function(e){return e.name===t}).length>0})},r.setActiveCat=function(e){this.setState({activeCat:e})},r.updateWindowDimensions=function(){this.refs&&this.refs.multiColumnWrapper&&this.setState({windowHeight:this.refs.multiColumnWrapper.scrollHeight})},r.render=function(){var t=this.props.data.food.edges;return e.createElement(u.a,{pageName:""},e.createElement("div",{className:"layoutColumns"},e.createElement("div",{className:"controlColumn layoutColumn restMenu"},e.createElement(p.a,{categories:["sandwiches","snacks","mains","desserts"],active:this.state.activeCat,setActiveCat:this.setActiveCat})),e.createElement("div",{className:"multiColumnWrapper restMenu",ref:"multiColumnWrapper"},e.createElement("div",{className:"mediaColumn restMenu",style:{height:this.state.windowHeight+"px"}},e.createElement(d.a,{photos:this.photos,excerpts:this.mediaContribs,windowHeight:this.state.windowHeight})),e.createElement("div",{className:"contentColumn restMenu"},e.createElement(l.a,{cat_name:"sandwiches",menu_items:this.filterItems(t,"sandwiches"),setActiveCat:this.setActiveCat,authors:this.sandwichContribs,description:m.b.sandwiches}),e.createElement(l.a,{cat_name:"snacks",menu_items:this.filterItems(t,"snacks"),setActiveCat:this.setActiveCat,description:m.b.snacks}),e.createElement(l.a,{cat_name:"mains",menu_items:this.filterItems(t,"mains"),setActiveCat:this.setActiveCat,description:m.b.mains}),e.createElement(l.a,{cat_name:"desserts",menu_items:this.filterItems(t,"desserts"),setActiveCat:this.setActiveCat,description:m.b.desserts})))))},n}(c.a.Component);t.default=h;var f="2725744050"}.call(this,n(48))},173:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return m});var r=n(0),a=n.n(r),i=n(4),s=n.n(i),o=n(172),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var u=n(174),l=n.n(u);n.d(t,"PageRenderer",function(){return l.a});var p=n(31);n.d(t,"parsePath",function(){return p.a});var d=a.a.createContext({}),m=function(t){return e.createElement(d.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}}.call(this,n(48))},174:function(e,t,n){var r;e.exports=(r=n(182))&&r.default||r},176:function(e,t,n){},178:function(e,t,n){"use strict";function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a});var a={sandwiches:"We consider smørbrød one of our signature offerings at Centropa. We’re inspired by the work of Norwegian authors and food culture from around the world as part of the Centropa Stories project. We recommend trying an assortment by ordering our High Tea service.",snacks:"Check out a book a Deichman and grab a coffee alongside one of our delicious café snacks. All pastries are made fresh in-house every morning by our team of dedicated bakers.",mains:"We offer an assortment of European classics as well as a seasonally rotating selection of internationally-inspired plates.",desserts:"Our desserts are inspired by the creative spirit of Centropa, as well as the homey spirit of the Norwegian countryside. Go ahead, indulge!"}},182:function(e,t,n){"use strict";n.r(t);n(50);var r=n(0),a=n.n(r),i=n(4),s=n.n(i),o=n(51),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},183:function(e,t,n){"use strict";(function(e){n(0);var r=n(184);n(186);t.a=function(t){t.siteTitle;var n=t.pageName,a=t.minimal;return e.createElement("div",{className:"underlineLink headerContainer "+(a?"minimalHeader":"")},e.createElement(r.a,{to:"/",text:"Home"}),e.createElement(r.a,{to:"/menu",text:"Menu",color:"#2A8FA3"}),e.createElement(r.a,{to:"/stories",text:"Centropa Stories",color:"#A4384D"}),e.createElement("h1",{className:"pageName"},n))}}).call(this,n(48))},184:function(e,t,n){"use strict";(function(e){var r=n(6),a=n.n(r),i=n(0),s=n.n(i),o=n(173),c=(n(185),function(t){function n(){return t.apply(this,arguments)||this}return a()(n,t),n.prototype.render=function(){var t={color:this.props.color};return e.createElement(o.Link,{to:this.props.to,activeClassName:"activeUnderlineLink",style:t},e.createElement("span",null,this.props.text))},n}(s.a.Component));t.a=c}).call(this,n(48))},185:function(e,t,n){},186:function(e,t,n){},198:function(e,t,n){},206:function(e,t,n){"use strict";(function(e){var r=n(207),a=n(0),i=n.n(a),s=n(4),o=n.n(s),c=n(244),u=n.n(c),l=n(173),p=(n(176),n(183)),d=function(t){t.home;var n=t.children,a=t.pageName;return e.createElement(l.StaticQuery,{query:"755544856",render:function(t){return e.createElement(i.a.Fragment,null,e.createElement(u.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Centropa"},{name:"keywords",content:"restaurant"}]},e.createElement("html",{lang:"en"})),e.createElement("div",{style:{margin:"0 auto",padding:"0px",marginTop:"50px",position:"relative",height:"calc(100% - 50px)",maxWidth:"1800px",width:"100%"}},n),e.createElement("div",null,e.createElement(p.a,{siteTitle:t.site.siteMetadata.title,pageName:a})))},data:r})};d.propTypes={children:o.a.node.isRequired},t.a=d}).call(this,n(48))},207:function(e){e.exports={data:{site:{siteMetadata:{title:"Centropa"}}}}},223:function(e,t,n){"use strict";(function(e){n(193);var r=n(6),a=n.n(r),i=n(49),s=n.n(i),o=n(0),c=n.n(o),u=(n(178),function(t){function n(e){var n;(n=t.call(this,e)||this).renderBgColumns=n.renderBgColumns.bind(s()(s()(n)));for(var r=n.props.numSquares,a=Array(r).fill().map(function(e,t){return Math.round(t/r*100+2*Math.random())/100}),i=Array(r).fill().map(function(){return Math.round(100*Math.random())/100}),o=Array(r).fill().map(function(){return Math.round(6*Math.random()+6)}),c=[],u=0;u<r;u++){var l=new Object;l.left=i[u],l.top=a[u],l.width=o[u],c.push(l)}return n.squares=c,n}a()(n,t);var r=n.prototype;return r.renderBgColumns=function(){var t=this.props.windowHeight;return this.squares.map(function(n,r){return e.createElement("div",{key:r+n.left,style:{right:55*n.left+"%",top:n.top*(t-200)+"px",width:n.width+"vw",height:n.width+"vw"}})})},r.render=function(){return e.createElement("div",{className:"bgLayers bgSquares",style:{height:this.props.windowHeight+"px"}},this.renderBgColumns())},n}(c.a.Component));t.a=u}).call(this,n(48))},224:function(e,t,n){"use strict";(function(e){n(193);var r=n(6),a=n.n(r),i=n(49),s=n.n(i),o=n(0),c=n.n(o),u=(n(178),n(197)),l=n.n(u),p=function(t){function n(e){var n;(n=t.call(this,e)||this).renderPhotoColumns=n.renderPhotoColumns.bind(s()(s()(n)));for(var r=n.props.numSquares,a=Array(r).fill().map(function(e,t){return Math.round(t/r*100)/100}),i=Array(r).fill().map(function(){return Math.round(100*Math.random())/100}),o=Array(r).fill().map(function(){return Math.round(10*Math.random()+15)}),c=o.map(function(e){return Math.round(e*(.5*Math.random()+.75))}),u=[],l=0;l<r;l++){var p=n.props.photos[l];p.left=i[l],p.top=a[l],p.width=o[l],p.height=c[l],u.push(p)}return n.squares=u,n}a()(n,t);var r=n.prototype;return r.renderPhotoColumns=function(){var t=this.props.windowHeight;return this.squares.map(function(n,r){var a=n.top*(t-200)/1.25;return e.createElement(l.a,{key:r+n.left,speed:-2},e.createElement("div",{style:{right:30*n.left+"%",top:a+"px",width:n.width+"vw",height:n.height+"vw",backgroundImage:"url("+n.img+")"},className:"rellax"},n.title&&e.createElement("div",null,e.createElement("h4",null,n.title))))})},r.render=function(){return e.createElement("div",{className:"bgLayers"},this.renderPhotoColumns())},n}(c.a.Component);t.a=p}).call(this,n(48))},286:function(e,t,n){},411:function(e,t,n){"use strict";(function(e){n(76),n(52),n(285);var r=n(6),a=n.n(r),i=n(0),s=n.n(i),o=n(178),c=n(412),u=n.n(c),l=n(413),p=n(287),d=n.n(p),m=function(t){function n(e){var n;return n=t.call(this,e)||this,Object(p.configureAnchors)({keepLastAnchorHash:!0}),n}return a()(n,t),n.prototype.render=function(){var t=this.props.cat_name,n=this.props.menu_items,r=this.props.authors;return e.createElement("div",{className:"menuSection",ref:"thisSection"},e.createElement(d.a,{id:t},e.createElement("h2",null,Object(o.a)(t))),e.createElement("p",{className:"menuIntro"},this.props.description),e.createElement("div",{className:"menuItemGroups"},n.map(function(t,n){var a=[];return null!==t.node.tags&&(a=t.node.tags.map(function(e){return Object.values(e)[0]})),e.createElement(l.a,{key:n,item_name:u.a.decode(t.node.title),price:t.node.acf.price,description:u.a.decode(t.node.acf.description),tags:a,accompanyingText:t.node.acf.accompanying_text,slug:t.node.acf.country?r[t.node.acf.country]:null})})))},n}(s.a.Component);t.a=m}).call(this,n(48))},413:function(e,t,n){"use strict";(function(e){var r=n(6),a=n.n(r),i=n(0),s=n.n(i),o=n(173),c=(n(286),n(414),function(t){function n(){return t.apply(this,arguments)||this}return a()(n,t),n.prototype.render=function(){var t=this.props.tags.join(", ");return e.createElement("div",{className:"menuEntry"},e.createElement("div",{className:"menuItemHeading"},e.createElement("h3",{className:"menuItemName"},this.props.item_name),e.createElement("h3",{className:"menuItemPrice"},this.props.price+"–")),e.createElement("p",{className:"menuDescription"},this.props.description),this.props.accompanyingText&&e.createElement("p",{className:"accompanyingText"},e.createElement(o.Link,{to:"/"+this.props.slug},this.props.accompanyingText)),e.createElement("p",{className:"menuTags"},t))},n}(s.a.Component));t.a=c}).call(this,n(48))},414:function(e,t,n){},419:function(e,t,n){"use strict";(function(e){var r=n(6),a=n.n(r),i=n(0),s=n.n(i),o=n(178),c=(n(420),function(t){function n(){return t.apply(this,arguments)||this}return a()(n,t),n.prototype.render=function(){var t=this.props.active,n=this.props.setActiveCat;return e.createElement("div",{className:"menuLocationPanel"},e.createElement("h2",null,"Menu"),this.props.categories.map(function(r,a){return e.createElement("a",{href:"#"+r,key:a,className:t===r?"activeMenu":"",onClick:function(){return n(r)}},Object(o.a)(r))}))},n}(s.a.Component));t.a=c}).call(this,n(48))},420:function(e,t,n){},421:function(e,t,n){"use strict";(function(e){var r=n(6),a=n.n(r),i=n(0),s=n.n(i),o=(n(178),n(223)),c=n(224),u=n(422),l=(n(423),function(t){function n(e){return t.call(this,e)||this}return a()(n,t),n.prototype.render=function(){return e.createElement("div",{className:"imageCols"},e.createElement(o.a,{numSquares:15,windowHeight:this.props.windowHeight}),e.createElement(c.a,{photos:this.props.photos,numSquares:this.props.photos.length>=8?8:this.props.photos.length,windowHeight:this.props.windowHeight}),e.createElement(u.a,{excerpts:this.props.excerpts.slice(0,6),numSquares:this.props.excerpts.length>=6?6:this.props.excerpts.length,windowHeight:this.props.windowHeight}))},n}(s.a.Component));t.a=l}).call(this,n(48))},422:function(e,t,n){"use strict";(function(e){n(193);var r=n(6),a=n.n(r),i=n(49),s=n.n(i),o=n(0),c=n.n(o),u=(n(178),n(197)),l=n.n(u),p=function(t){function n(e){var n;(n=t.call(this,e)||this).renderExcerptColumns=n.renderExcerptColumns.bind(s()(s()(n)));for(var r=n.props.numSquares,a=Array(r).fill().map(function(e,t){return Math.round(t/r*100+2*Math.random())/100}),i=Array(r).fill().map(function(){return Math.floor(100*Math.random())/100}),o=Array(r).fill().map(function(){return Math.round(3*Math.random()+17)}),c=[],u=0;u<r;u++){var l=n.props.excerpts[u];l.left=i[u],l.top=a[u],l.width=o[u],c.push(l)}return n.squares=c,n}a()(n,t);var r=n.prototype;return r.renderExcerptColumns=function(){var t=this.props.windowHeight;return this.squares.map(function(n,r){return e.createElement(l.a,{key:r+n.left,speed:2.5},e.createElement("div",{style:{right:22*n.left+"%",top:n.top*t+"px",width:n.width+"vw"}},e.createElement("p",null,"“"+n.story_excerpt+"”"),e.createElement("p",null,"–"+n.author_name)))})},r.render=function(){return e.createElement("div",{className:"bgLayers bgExcerpts",style:{height:this.props.windowHeight+"px"}},this.renderExcerptColumns())},n}(c.a.Component);t.a=p}).call(this,n(48))},423:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-menu-js-f3c5f916bf847e924bb0.js.map