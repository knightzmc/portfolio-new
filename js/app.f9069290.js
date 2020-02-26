(function(e){function t(t){for(var a,r,s=t[0],l=t[1],c=t[2],u=0,m=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"39e6":function(e,t,n){},4114:function(e,t,n){"use strict";var a=n("71f3"),i=n.n(a);i.a},"5e20":function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},arguments:[{kind:"Argument",name:{kind:"Name",value:"login"},value:{kind:"StringValue",value:"knightzmc",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pinnedItems"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"IntValue",value:"6"}},{kind:"Argument",name:{kind:"Name",value:"types"},value:{kind:"ListValue",values:[{kind:"EnumValue",value:"REPOSITORY"}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Repository"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"stargazers"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"forkCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"primaryLanguage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"color"},arguments:[],directives:[]}]}}]}}]}}]}}]}}]}}],loc:{start:0,end:816}};n.loc.source={body:'query {\n    user(login: "knightzmc") {\n        pinnedItems(first: 6, types: [REPOSITORY]) {\n            nodes{\n                ... on Repository{\n                    name\n                    url\n                    description\n                    stargazers {\n                        totalCount\n                    }\n                    forkCount\n                    primaryLanguage {\n                        name\n                        color\n                    }\n#                    languages(first: 5) {\n#                        totalSize\n#                        edges {\n#                            node {\n#                                name\n#                            }\n#                            size\n#                        }\n#                    }\n                }\n            }\n        }\n    }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,t)})),e.definitions&&e.definitions.forEach((function(e){a(e,t)}))}var i={};(function(){n.definitions.forEach((function(e){if(e.name){var t=new Set;a(e,t),i[e.name.value]=t}}))})(),e.exports=n},"71f3":function(e,t,n){},7496:function(e,t,n){"use strict";var a=n("39e6"),i=n.n(a);i.a},"7e0d":function(e,t,n){"use strict";var a=n("8b78"),i=n.n(a);i.a},"85ec":function(e,t,n){},"8b78":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center",attrs:{id:"main"}},[n("HelloWorld",{attrs:{msg:"Alexander Wood"}}),n("Separator",{attrs:{color:"#324A5F"}}),n("AboutMe"),n("Separator",{attrs:{color:"#324A5F"}}),n("Projects"),n("Separator",{attrs:{color:"#324A5F"}}),n("Contact")],1)},o=[],r=n("d4ec"),s=n("99de"),l=n("7e84"),c=n("262e"),d=n("9ab4"),u=n("60a3"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"important",rawName:"v-important"}],staticClass:"text-center box",attrs:{id:"hello"}},[n("h1",[e._v(e._s(e.msg))]),n("h2",[e._v("I'm a Professional Java and Kotlin developer who specialises in Spigot Plugins")]),n("div",{staticClass:"bottom"},[n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#about"}},[n("h3",[e._v("Find out about me")])]),n("svg",{staticStyle:{"max-width":"1.5%"},attrs:{"aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 320 512"}},[n("path",{attrs:{d:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z","data-v-469af010":"",fill:"currentColor"}})])])])},v=[],f=function(e){function t(){return Object(r["a"])(this,t),Object(s["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),t}(u["c"]);Object(d["__decorate"])([Object(u["b"])()],f.prototype,"msg",void 0),f=Object(d["__decorate"])([u["a"]],f);var p=f,h=p,b=(n("7496"),n("2877")),g=Object(b["a"])(h,m,v,!1,null,"2fdadc1e",null),w=g.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("hr",{style:{"background-color":e.color}})])},k=[],_=function(e){function t(){return Object(r["a"])(this,t),Object(s["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),t}(u["c"]);Object(d["__decorate"])([Object(u["b"])()],_.prototype,"color",void 0),_=Object(d["__decorate"])([u["a"]],_);var O=_,S=O,j=(n("7e0d"),Object(b["a"])(S,y,k,!1,null,"4e4bd1a5",null)),C=j.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"important",rawName:"v-important"}],staticClass:"box container-fluid",attrs:{id:"about"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-5 text-left"},[n("h1",{staticClass:"display-3"},[e._v("Hey")]),n("p",[e._v(" My name is Alex Wood and I'm 16 years old and from the UK, but online I often go by the name "),n("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"#",title:"It's an inside joke!"}},[e._v("BristerMitten")]),e._v(' online. I developed an interest in Minecraft a few years later when I was 11. I started a modest server, but decided I would learn how to make plugins in order to make it stand out. I downloaded a "Learn Java" app on my phone, and used it on the bus to and from school, then set out to make plugins. ')]),n("p",[e._v(" As you might expect, it didn't begin well. I encountered the learning curve that Java is known for, and found myself frequently visiting various forums for help. ")]),n("p",[e._v(" But I kept going. Within 2 years, I'd become familiar with OOP concepts, Java syntax, and the Spigot API. In the Winter of 2017, I was lucky enough to get an hourly paying job developing a Server Core, which taught me a lot about Collaborative Coding, BungeeCord, and Git. I eventually had to leave the project due to still having school, but it was a fantastic experience. ")]),n("p",[e._v(" And I kept learning. I'm now familiar with Java, Kotlin, Spigot, BungeeCord, Spring Boot, Hibernate, JPA, Gradle, Maven, MySQL, MongoDB, YAML, JSON, and probably some more acronyms! ")])]),n("div",{staticClass:"col-6 text-right"},[n("i",[e._v("Since 2017...")]),n("h1",{staticClass:"display-6"},[e._v(">30")]),n("p",[e._v("Commissions Taken")]),n("h1",{staticClass:"display-6"},[e._v(">50")]),n("p",[e._v("GitHub and GitLab projects I've been involved in")]),n("h1",{staticClass:"display-6"},[e._v(">5")]),n("p",[e._v("Public Testimonials about my services")]),n("h1",{staticClass:"display-6"},[e._v(">100")]),n("p",[e._v("Fellow developers helped in ")]),n("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"https://helpch.at/discord",title:"I'm also almost in the top 20 users!"}},[e._v(" HelpChat ")])])])])},I=[],N={name:"AboutMe"},A=N,F=Object(b["a"])(A,x,I,!1,null,"4b2251d4",null),M=F.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"important",rawName:"v-important"}],staticClass:"box container-fluid"},[a("h1",{staticClass:"display-1"},[e._v("So what have I made?")]),a("ApolloQuery",{attrs:{query:n("5e20")},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.result,i=n.loading,o=n.error,r=n.data;return[i?a("div",[e._v(" Loading... ")]):o?a("h1",[e._v(" Error, please check the console "+e._s(o)+" ")]):e._e(),r?a("b-card-group",{staticStyle:{"justify-content":"center"},attrs:{deck:""}},e._l(r.user.pinnedItems.nodes,(function(t){return a("b-card",{directives:[{name:"card-hover",rawName:"v-card-hover"}],key:t.name,staticStyle:{"min-width":"20%","max-width":"30%","margin-top":"2rem"},attrs:{title:t.name,url:t.url},scopedSlots:e._u([{key:"footer",fn:function(){return[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[e._v(" "+e._s(t.forkCount)+" "),a("svg",{attrs:{height:"5mm",viewBox:"0 0 10 16",width:"5mm",xmlns:"http://www.w3.org/2000/svg"}},[a("title",[e._v("Forks")]),a("path",{staticStyle:{fill:"#586069"},attrs:{d:"M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z","fill-rule":"evenodd"}})])]),a("div",{staticClass:"col"},[a("a",{style:{color:t.primaryLanguage.color}},[e._v(" "+e._s(t.primaryLanguage.name))])]),a("div",{staticClass:"col"},[e._v(" "+e._s(t.stargazers.totalCount)+" "),a("svg",{attrs:{height:"5mm",viewBox:"0 0 14 16",width:"5mm",xmlns:"http://www.w3.org/2000/svg"}},[a("title",[e._v("Stars")]),a("path",{staticStyle:{fill:"#586069"},attrs:{d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z","fill-rule":"evenodd"}})])])])]},proxy:!0}],null,!0)},[a("b-card-text",[e._v(" "+e._s(t.description)+" ")])],1)})),1):e._e()]}}])})],1)},E=[],L={name:"Projects"};u["c"].directive("card-hover",{bind:function(e){e.onmouseover=function(){e.classList.add("shadow-lg")},e.onmouseleave=function(){e.classList.remove("shadow-lg")},e.onclick=function(){window.open(e.attributes["url"].value,"_blank"),window.focus()}}});var z=L,B=(n("4114"),Object(b["a"])(z,P,E,!1,null,"f38e57ac",null)),H=B.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"important",rawName:"v-important"}],staticClass:"box container-fluid",attrs:{id:"contact"}},[n("h1",{staticClass:"display-1"},[e._v("Get in touch")]),n("h3",[e._v("The best way to contact me is with Discord")]),n("p",[e._v(" Drop me a message and I'll get back to you as soon as possible with anything you might need. Usually, I am open for commissions, but I'll let you know if not. ")]),n("p",[e._v("Here are my links:")]),n("a",{attrs:{href:"https://github.com/knightzmc"}},[e._v("GitHub: knightzmc")]),n("br"),n("a",[e._v("Discord: Brister Mitten#1024")])])},D=[],V={name:"Contact"},q=V,J=Object(b["a"])(q,T,D,!1,null,null,null),$=J.exports,G=[],R=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(s["a"])(this,Object(l["a"])(t).call(this)),u["c"].directive("important",{bind:function(e){G.push(e)}}),e}return Object(c["a"])(t,e),t}(u["c"]);R=Object(d["__decorate"])([Object(u["a"])({components:{Contact:$,Projects:H,AboutMe:M,HelloWorld:w,Separator:C}})],R);var Y=R,W=window.pageYOffset||document.documentElement.scrollTop,K=!1,Q=0;function U(e){return window.pageYOffset+e.getBoundingClientRect().top}function X(e,t){var n,a=window.pageYOffset,i=U(e),o=document.body.scrollHeight-i<window.innerHeight?document.body.scrollHeight-window.innerHeight:i,r=o-a,s=function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1};r&&window.requestAnimationFrame((function e(i){n||(n=i);var o=i-n,l=Math.min(o/t,1);l=s(l),window.scrollTo(0,a+r*l),o<t&&window.requestAnimationFrame(e)}))}var Z=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(Z=!0),Z||(document.onscroll=function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=e>W;if(W=e<=0?0:e,!K){if(t){if(Q==G.length)return;Q++}else{if(0==Q)return;Q--}var n=G[Q];n&&(K=!0,X(n,1e3),setTimeout((function(){return K=!1}),1050))}});var ee=Y,te=(n("034f"),Object(b["a"])(ee,i,o,!1,null,null,null)),ne=te.exports,ae=n("5f5b"),ie=n("b1e0"),oe=(n("f9e3"),n("2dd8"),n("5a58")),re=n.n(oe),se=(n("96cf"),n("1da1"),n("5530")),le=n("522d"),ce=n("efe7");a["default"].use(le["a"]);var de="apollo-token",ue="https://api.github.com/graphql",me={httpEndpoint:ue,wsEndpoint:null,tokenName:de,persisting:!1,websocketsOnly:!1,ssr:!1,getAuth:function(){return"Bearer f76270ef84d494b606b50e63f10f109c819bc3b5"}};function ve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(ce["createApolloClient"])(Object(se["a"])({},me,{},e)),n=t.apolloClient,a=t.wsClient;n.wsClient=a;var i=new le["a"]({defaultClient:n,defaultOptions:{$query:{}},errorHandler:function(e){console.log("%cError","background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",e.message)}});return i}var fe=n("0284"),pe=n.n(fe),he=n("8c4f");a["default"].use(he["a"]);var be=[{path:"/",name:"Home",component:ne}],ge=new he["a"]({mode:"history",base:"/",routes:be}),we=ge;a["default"].config.productionTip=!1,a["default"].use(ae["a"]),a["default"].use(ie["a"]),a["default"].use(re.a),a["default"].use(pe.a,{id:"UA-100011338-2"}),new a["default"]({apolloProvider:ve(),router:we,render:function(e){return e(ne)}}).$mount("#main")}});
//# sourceMappingURL=app.f9069290.js.map