(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{31:function(e,a,t){},32:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var c=t(1),r=t(2),s=t.n(r),i=t(23),n=t.n(i),o=t(10),l=Object(r.createContext)(),j=t(5),u="[auth] login",d="[auth] logout",m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case u:return Object(j.a)(Object(j.a)({},a.payload),{},{logged:!0});case d:return{logged:!1};default:return e}},h=t(6),b=t(3),p=(t(31),function(e){var a=e.history,t=Object(r.useContext)(l).dispatch;return Object(c.jsx)(r.Fragment,{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("main",{children:[Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:" Log in "})}),Object(c.jsx)("hr",{}),Object(c.jsx)("button",{onClick:function(){var e=localStorage.getItem("lastPath")||"/";t({type:u,payload:{name:"Erik A"}}),a.push(e)},className:"btn-logout",children:"Log In"})]})})})}),O=t(20),x=t(0),v=(t(32),function(){var e=Object(b.g)(),a=Object(r.useState)(!1),t=Object(o.a)(a,2),s=t[0],i=t[1],n=function(){var e=Object(r.useState)(window.innerWidth),a=Object(o.a)(e,2),t=a[0],c=a[1];return Object(r.useEffect)((function(){window.addEventListener("resize",(function(){return c(window.innerWidth)}))}),[t]),{width:t}}().width,j=Object(r.useContext)(l),u=j.user,m=j.dispatch;return Object(r.useEffect)((function(){i(n>768)}),[n]),Object(c.jsxs)("nav",{children:[Object(c.jsx)("div",{className:"navbar__header",children:Object(c.jsx)("header",{children:Object(c.jsxs)(h.b,{to:"/",className:"icon__link",children:[" ",Object(c.jsx)("h1",{children:" HeroesApp "})," "]})})}),Object(c.jsx)("div",{className:s?"nav-menu-active ":"nav-menu-desactive",children:Object(c.jsxs)("ul",{className:"navbar",children:[Object(c.jsx)("li",{className:"nav__item",children:Object(c.jsx)(h.c,{activeClassName:"active",exact:!0,className:"nav__link",to:"/",children:"Home"})}),Object(c.jsx)("li",{className:"nav__item",children:Object(c.jsx)(h.c,{activeClassName:"active",exact:!0,className:"nav__link",to:"/about",children:"About"})}),Object(c.jsx)("li",{className:"nav__item",children:Object(c.jsx)(h.c,{activeClassName:"active",exact:!0,className:"nav__link",to:"/marvel",children:"Marvel"})}),Object(c.jsx)("li",{className:"nav__item",children:Object(c.jsx)(h.c,{activeClassName:"active",exact:!0,className:"nav__link",to:"/dc",children:"DC"})}),Object(c.jsx)("li",{className:"nav__item",children:Object(c.jsx)(h.c,{activeClassName:"active",exact:!0,className:"nav__link",to:"/search",children:"Search"})})]})}),Object(c.jsx)("div",{className:"btn__toggle",children:Object(c.jsx)(x.b.Provider,{value:{className:"react-icons"},children:Object(c.jsx)("button",{onClick:function(){return i(!s)},children:s?Object(c.jsx)(O.b,{}):Object(c.jsx)(O.a,{})})})}),Object(c.jsxs)("div",{className:"user",children:[Object(c.jsx)("span",{children:null===u||void 0===u?void 0:u.name}),Object(c.jsx)("button",{onClick:function(){e.replace("/login"),m({type:d}),console.log("Click")},className:"logout__btn",children:"Log out"})]})]})}),g=t.p+"static/media/banner-img-1.fd5233da.jpeg",f=t.p+"static/media/banner-img-2.24cfc423.jpg",_=t.p+"static/media/banner-img-3.4ac934c5.jpeg",N=t.p+"static/media/banner-img-4.4dda4a43.jpg",C=t.p+"static/media/banner-img-5.ade1e8a8.jpg",y=t.p+"static/media/banner-img-6.6f3a4670.jpg",M=(t(38),function(){var e=[g,f,_,N,C,y];return Object(c.jsx)("div",{className:"banner__content",children:Object(c.jsx)("ul",{className:"banner__list",children:e.map((function(e,a){return Object(c.jsx)("li",{className:"banner__item",children:Object(c.jsx)("img",{src:e,alt:"banner img",className:"banner__img"})},a)}))})})}),k=t.p+"static/media/marvel-logo.85be4808.png",S=t.p+"static/media/dc-logo.4bc7875d.png",D=(t(39),function(){return Object(c.jsx)(r.Fragment,{children:Object(c.jsxs)("main",{className:"main",children:[Object(c.jsx)("section",{className:"banner",children:Object(c.jsx)(M,{})}),Object(c.jsx)("section",{className:"story",children:Object(c.jsxs)("div",{className:"story__content",children:[Object(c.jsx)("div",{className:"story__marvel",children:Object(c.jsxs)("article",{className:"story___article-marvel",children:[Object(c.jsx)("header",{className:"story__header",children:Object(c.jsx)("h3",{children:" Marvel "})}),Object(c.jsx)("p",{className:"story__paragraph",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facilis incidunt fugit, odit veniam possimus minima velit quo cum autem! Laboriosam autem esse at ex quod nostrum dolorem modi quisquam!. Ipsum dolor sit amet consectetur adipisicing elit. Veniam aut dolore iusto minus fuga. Beatae eveniet corporis consequatur eum ratione, culpa alias quidem sunt eos, id esse rem minima laborum."}),Object(c.jsx)("figure",{children:Object(c.jsx)("img",{src:k,alt:"Marvel Logo",className:"story__img"})})]})}),Object(c.jsx)("div",{className:"story__dc",children:Object(c.jsxs)("article",{className:"story__article-dc",children:[Object(c.jsx)("header",{className:"story__header",children:Object(c.jsx)("h3",{children:" DC "})}),Object(c.jsx)("p",{className:"story__paragraph",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facilis incidunt fugit, odit veniam possimus minima velit quo cum autem! Laboriosam autem esse at ex quod nostrum dolorem modi quisquam!. Ipsum dolor sit amet consectetur adipisicing elit. Veniam aut dolore iusto minus fuga. Beatae eveniet corporis consequatur eum ratione, culpa alias quidem sunt eos, id esse rem minima laborum."}),Object(c.jsx)("figure",{children:Object(c.jsx)("img",{src:S,alt:"DC logo",className:"story__img"})})]})})]})})]})})}),w=function(e){var a=e.title;return Object(c.jsx)(r.Fragment,{children:Object(c.jsx)("header",{className:"HeaderPage",children:Object(c.jsxs)("h1",{className:"header-page__content",children:[" ",a," "]})})})},A=(t(40),function(){return Object(c.jsx)("main",{className:"main",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(w,{title:"About"}),Object(c.jsx)("section",{className:"about",children:Object(c.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem incidunt corrupti expedita, necessitatibus nulla, officia eaque vitae sapiente odit facere et. Illo debitis cupiditate quas obcaecati sed eum quia laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ex ut tempora cupiditate ratione. Architecto possimus accusamus adipisci, ullam aliquid exercitationem natus dicta et iure ipsa, minus quos eos voluptas? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum excepturi nulla nobis minima facere obcaecati aut non, magni enim dolores voluptas totam odio possimus iste illo, iure quae harum nemo."})})]})})}),F=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],q=(t(41),function(e){var a=e.id,t=e.superhero,r=e.alter_ego,s=e.first_appearance;return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"column-img column",children:Object(c.jsx)("img",{src:"./assets/heroes/".concat(a,".jpg"),className:"card-img",alt:t})}),Object(c.jsxs)("div",{className:"column-body column",children:[Object(c.jsx)("header",{className:"header-card",children:Object(c.jsxs)("h3",{children:[" ",t," "]})}),Object(c.jsxs)("div",{className:"card-text",children:[Object(c.jsxs)("p",{className:"paragraph-card",children:[" ",r," "]}),Object(c.jsxs)("p",{className:"paragraph-card",children:[" ",Object(c.jsxs)("small",{children:[" ",s," "]})," "]})]}),Object(c.jsx)(h.b,{to:"/heroe/".concat(a),className:"card-link",children:"See More"})]})]})}),B=(t(42),function(e){var a=e.publisher,t=Object(r.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw Error("El publisher ".concat(e," no existe"));return F.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"card-container",children:t.map((function(e){return Object(c.jsx)(q,Object(j.a)({},e),e.id)}))})})})}),L=function(){return Object(c.jsx)(r.Fragment,{children:Object(c.jsxs)("main",{className:"main container",children:[Object(c.jsx)(w,{title:"Marvel Heroes"}),Object(c.jsx)(B,{publisher:"Marvel Comics"})]})})},J=function(){return Object(c.jsx)(r.Fragment,{children:Object(c.jsxs)("main",{className:"main container",children:[Object(c.jsx)(w,{title:"DC Heroes"}),Object(c.jsx)(B,{publisher:"DC Comics"})]})})},T=t(13),I=t(25),E=t.n(I),H=(t(55),function(e){var a=e.history,t=Object(b.h)(),s=E.a.parse(t.search).q,i=void 0===s?"":s,n=function(){var e=Object(r.useState)({searchText:""}),a=Object(o.a)(e,2),t=a[0],c=a[1];return[t,function(e){c(Object(j.a)(Object(j.a)({},t),{},Object(T.a)({},e.target.name,e.target.value)))}]}(),l=Object(o.a)(n,2),u=l[0],d=l[1],m=u.searchText,h=Object(r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),F.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(i)}),[i]);return Object(c.jsx)(r.Fragment,{children:Object(c.jsxs)("main",{className:"container",children:[Object(c.jsx)(w,{title:"Search"}),Object(c.jsxs)("section",{className:"search",children:[Object(c.jsx)("div",{className:"search__form",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(m))},children:[Object(c.jsx)("input",{type:"text",name:"searchText",placeholder:"Search a hero",vakue:m,onChange:d}),Object(c.jsx)("button",{type:"submit",className:"btn__search",children:"Search"})]})}),Object(c.jsxs)("div",{className:"search__results",children:[Object(c.jsx)("h4",{children:" Results "}),Object(c.jsx)("hr",{}),""===i&&Object(c.jsx)("div",{className:"alert__info alert",children:"You most search a heroe"}),""!==i&&0===h.length&&Object(c.jsxs)("div",{className:"alert__error alert",children:["The heroe ",Object(c.jsxs)("strong",{children:[" ",i," "]})," do not exist"]}),h.map((function(e){return Object(c.jsx)(q,Object(j.a)({},e),e.id)}))]})]})]})})}),P=(t(56),function(e){var a=e.history,t=Object(b.i)().heroeId,s=Object(r.useMemo)((function(){return e=t,F.find((function(a){return a.id===e}));var e}),[t]);if(!s)return Object(c.jsx)(b.a,{to:"/"});var i=s.superhero,n=s.publisher,o=s.alter_ego,l=s.first_appearance,j=s.characters;return Object(c.jsx)(r.Fragment,{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(w,{title:i}),Object(c.jsxs)("div",{className:"heroContainer",children:[Object(c.jsx)("div",{className:"hero-img",children:Object(c.jsx)("img",{src:"../assets/heroes/".concat(t,".jpg"),alt:""})}),Object(c.jsxs)("div",{className:"hero-description",children:[Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("strong",{children:"Alter Ego:"})," ",o," "]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("strong",{children:"First Appearance:"})," ",l," "]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("strong",{children:"Characters:"})," ",j," "]}),Object(c.jsx)("li",{children:"Marvel Comics"===n?Object(c.jsx)("img",{src:k,alt:"Marvel logo",className:"img-publisher"}):Object(c.jsx)("img",{src:S,alt:"Marvel logo",className:"img-publisher"})})]}),Object(c.jsx)("button",{onClick:function(){a.length<=2?a.push("/"):a.goBack()},className:"btn-hero",children:"Return"})]})]})]})})}),G=(t(57),function(){var e=(new Date).getFullYear();return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsxs)("div",{className:"footer__content",children:[Object(c.jsx)("p",{children:" Designed and developed by Erik Carcel\xe9n "}),Object(c.jsxs)("p",{children:[" All rights reserved \xa9 ",e," "]})]})})}),R=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v,{}),Object(c.jsxs)(b.d,{children:[Object(c.jsx)(b.b,{exact:!0,path:"/",component:D}),Object(c.jsx)(b.b,{exact:!0,path:"/about",component:A}),Object(c.jsx)(b.b,{exact:!0,path:"/marvel",component:L}),Object(c.jsx)(b.b,{exact:!0,path:"/dc",component:J}),Object(c.jsx)(b.b,{exact:!0,path:"/heroe/:heroeId",component:P}),Object(c.jsx)(b.b,{exact:!0,path:"/search",component:H})]}),Object(c.jsx)(G,{})]})},W=t(14),z=function(e){var a=e.component,t=e.isAuthenticated,r=Object(W.a)(e,["component","isAuthenticated"]);return localStorage.setItem("lastPath",r.location.pathname),Object(c.jsx)(b.b,Object(j.a)(Object(j.a)({},r),{},{component:function(e){return t?Object(c.jsx)(a,Object(j.a)({},e)):Object(c.jsx)(b.a,{to:"/login"})}}))},K=function(e){var a=e.component,t=e.isAuthenticated,r=Object(W.a)(e,["component","isAuthenticated"]);return Object(c.jsx)(b.b,Object(j.a)(Object(j.a)({},r),{},{component:function(e){return t?Object(c.jsx)(b.a,{to:"/"}):Object(c.jsx)(a,Object(j.a)({},e))}}))},Q=function(){var e=Object(r.useContext)(l).user;return Object(c.jsx)(h.a,{children:Object(c.jsxs)(b.d,{children:[Object(c.jsx)(K,{exact:!0,path:"/login",component:p,isAuthenticated:null===e||void 0===e?void 0:e.logged}),Object(c.jsx)(z,{path:"/",component:R,isAuthenticated:null===e||void 0===e?void 0:e.logged})]})})};var V=function(){var e=Object(r.useReducer)(m,{},(function(){return JSON.parse(localStorage.getItem("user"))||""})),a=Object(o.a)(e,2),t=a[0],s=a[1];return Object(r.useEffect)((function(){localStorage.setItem("user",JSON.stringify(t))}),[t]),Object(c.jsx)(r.Fragment,{children:Object(c.jsx)(l.Provider,{value:{user:t,dispatch:s},children:Object(c.jsx)(Q,{})})})};t(58);n.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(V,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.49ececb9.chunk.js.map