(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==i[o]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},i={app:0},r=[];function o(t){return c.p+"js/"+({Home:"Home"}[t]||t)+"."+{Home:"e277e380"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={Home:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({Home:"Home"}[t]||t)+"."+{Home:"293ea78b"}[t]+".css",i=c.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===n||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete s[t],f.parentNode.removeChild(f),a(r)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){s[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}i[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/lojinea-bolos/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"194d":function(t,e,a){},"1ae4":function(t,e,a){t.exports=a.p+"img/logo.1d92cbab.svg"},"2d24":function(t,e,a){t.exports=a.p+"img/cesta.b0b08847.svg"},"31bb":function(t,e,a){"use strict";var n=a("194d"),s=a.n(n);s.a},3560:function(t,e,a){},4360:function(t,e,a){"use strict";a("c740"),a("a434");var n=a("5530"),s=a("2b0e"),i=s["a"].observable({basket:!1,notification:{visible:!1,message:""},basketList:JSON.parse(localStorage.getItem("basket::list"))||[]}),r={MutateNotification:function(t){var e=t.visible,a=t.message;i.notification.visible=e,i.notification.message=a,setTimeout((function(){i.notification.message="",i.notification.visible=!1}),4e3)},MutateBasket:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];i.basket=t},MutateInsertionBasketList:function(t){var e=i.basketList.findIndex((function(e){var a=e.id;return a===t.id}));-1!==e?i.basketList[e].quantity+=1:i.basketList.push(Object(n["a"])(Object(n["a"])({},t),{},{quantity:1})),localStorage.setItem("basket::list",JSON.stringify(i.basketList))},MutateDeletionBasketList:function(t){var e=i.basketList.findIndex((function(e){var a=e.id;return a===t.id}));-1!==e&&(i.basketList.splice(e,1),localStorage.setItem("basket::list",JSON.stringify(i.basketList)))},MutateQuantityBasketList:function(t,e){if("add"===e)return r.MutateInsertionBasketList(t);var a=i.basketList.findIndex((function(e){var a=e.id;return a===t.id}));return i.basketList[a].quantity-1===0?r.MutateDeletionBasketList(t):(i.basketList[a].quantity-=1,localStorage.setItem("basket::list",JSON.stringify(i.basketList)))}},o={state:i,mutations:r};e["a"]=o},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-navbar"),a("app-basket"),a("router-view"),a("app-notification"),a("app-footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar is-primary",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),a("div",{staticClass:"navbar-menu"},[a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"buttons"},[a("a",{staticClass:"button is-primary",on:{click:function(e){return t.openBasket()}}},[a("span",{staticClass:"basket-count has-background-warning has-text-black-bis"},[t._v(" "+t._s(t.basketItemsCount)+" ")]),t._m(1)])])])])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[n("img",{attrs:{src:a("1ae4"),width:"30",height:"30",alt:"logo"}}),n("span",{staticClass:" ml-2"},[t._v("Lojinea de bolos")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("img",{attrs:{src:a("2d24"),alt:"cesta"}})])}],c=(a("13d5"),a("4360")),l={name:"AppNavbar",computed:{basketItemsCount:function(){return c["a"].state.basketList.reduce((function(t,e){var a=t+e.quantity;return a}),0)}},methods:{openBasket:function(){c["a"].mutations.MutateBasket(!0)}}},u=l,d=(a("31bb"),a("2877")),f=Object(d["a"])(u,r,o,!1,null,"b8564dda",null),m=f.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal basket",class:{"is-active":t.active}},[a("div",{staticClass:"modal-background",on:{click:function(e){return t.hideBasket()}}}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Cesta de bolos")]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.hideBasket()}}})]),a("section",{staticClass:"modal-card-body"},[t.basketList.length?[t._l(t.basketList,(function(e){return a("div",{key:e.id,staticClass:"box"},[a("article",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image"},[a("img",{attrs:{src:e.image,alt:"Image"}})])]),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v(t._s(e.name))])]),a("div",{staticClass:"columns mb-2"},[a("div",{staticClass:"column"},[t._v(" "+t._s(t._f("totalPrice")(e))+" ")]),a("div",{staticClass:"column"},[a("div",{staticClass:"field has-addons"},[a("p",{staticClass:"control"},[a("a",{staticClass:"button is-small",on:{click:function(a){return t.changeQuantity(e,"del")}}},[t._m(0,!0)])]),a("p",{staticClass:"control"},[a("input",{staticClass:"input is-small",attrs:{readonly:"",type:"number"},domProps:{value:e.quantity}})]),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-small",on:{click:function(a){return t.changeQuantity(e,"add")}}},[t._m(1,!0)])])])]),a("div",{staticClass:"column has-text-right"},[a("button",{staticClass:"button is-small is-danger is-outlined is-rounded",on:{click:function(a){return t.removeCake(e)}}},[t._v(" Remover ")])])])])])])])})),a("div",{staticClass:"has-text-right"},[a("small",[t._v("Total:")]),a("div",{staticClass:"is-size-3"},[t._v(t._s(t.finalPrice))])])]:a("div",{staticClass:"is-size-3 has-text-centered"},[a("div",[t._v("😔")]),a("small",[t._v("a cesta está vazia")])])],2),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button is-primary",attrs:{disabled:!t.basketList.length},on:{click:function(e){return t.checkout()}}},[t._v(" Finalizar compra ")]),a("button",{staticClass:"button",on:{click:function(e){return t.hideBasket()}}},[t._v("Fechar")])])])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("span",[t._v("-")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("span",[t._v("+")])])}],b={name:"AppBasket",computed:{active:function(){return c["a"].state.basket},basketList:function(){return c["a"].state.basketList},finalPrice:function(){var t=c["a"].state.basketList.reduce((function(t,e){var a=t;return a+=e.price*e.quantity,a}),0),e={currency:"BRL",style:"currency"};return new Intl.NumberFormat("pt-br",e).format(t)}},filters:{totalPrice:function(t){var e={currency:"BRL",style:"currency"};return new Intl.NumberFormat("pt-br",e).format(t.price*t.quantity)}},methods:{hideBasket:function(){c["a"].mutations.MutateBasket(!1)},changeQuantity:function(t,e){c["a"].mutations.MutateQuantityBasketList(t,e)},removeCake:function(t){c["a"].mutations.MutateDeletionBasketList(t)},checkout:function(){this.hideBasket();var t={visible:!0,message:"<h1>Obrigado por comprar com a gente 😍😍</h1><br><p>Seus bolos chegarão em breve</p>"};c["a"].mutations.MutateNotification(t)}}},h=b,k=(a("8cd8"),Object(d["a"])(h,p,v,!1,null,"0c402acc",null)),g=k.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer pt-4 pb-4"},[a("div",{staticClass:"content has-text-centered"},[a("p",[a("strong",[t._v("Lojinea de bolos 🍰")]),t._v(" by "),a("a",{attrs:{href:"https://github.com/arthurzeras",target:"_blank",rel:"noopener noreferrer"}},[t._v("Arthur Oliveira")])]),a("div",[t._v(" Ícones feitos por "),a("a",{attrs:{title:"Skyclick",target:"_blank",rel:"noopener noreferrer",href:"https://www.flaticon.com/br/icone-gratis/bolo_901688"}},[t._v(" Skyclick ")]),t._v(" e "),a("a",{attrs:{title:"Freepik",target:"_blank",rel:"noopener noreferrer",href:"http://www.freepik.com/"}},[t._v(" Freepik ")]),t._v(" do "),a("a",{attrs:{title:"Flaticon",target:"_blank",rel:"noopener noreferrer",href:"https://www.flaticon.com/br/"}},[t._v(" flaticon.com ")])]),a("div",[t._v(" Imagens retiradas da comunidade "),a("a",{attrs:{href:"https://www.reddit.com/r/cake/",rel:"noopener noreferrer",target:"_blank"}},[t._v("/r/cake")]),t._v(" no reddit ")])])])}],C={name:"AppFooter"},L=C,w=Object(d["a"])(L,_,y,!1,null,null,null),O=w.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.state.visible?a("div",{staticClass:"notification is-primary"},[a("button",{staticClass:"delete",on:{click:function(e){return t.close()}}}),a("div",{domProps:{innerHTML:t._s(t.state.message)}})]):t._e()},x=[],j={data:function(){return{visible:!1}},computed:{state:function(){return c["a"].state.notification}},methods:{close:function(){c["a"].mutations.MutateNotification({visible:!1,message:""})}}},S=j,E=(a("7e2b"),Object(d["a"])(S,B,x,!1,null,"e6a33524",null)),M=E.exports,N={name:"App",components:{AppNavbar:m,AppBasket:g,AppFooter:O,AppNotification:M}},I=N,P=Object(d["a"])(I,s,i,!1,null,null,null),A=P.exports,H=(a("d3b7"),a("8c4f"));n["a"].use(H["a"]);var T=[{path:"/",name:"Home",component:function(){return a.e("Home").then(a.bind(null,"bb51"))}}],$=new H["a"]({mode:"history",base:"/lojinea-bolos/",routes:T}),q=$;a("c1c3");n["a"].config.productionTip=!1,new n["a"]({router:q,render:function(t){return t(A)}}).$mount("#app")},"6e59":function(t,e,a){},"7e2b":function(t,e,a){"use strict";var n=a("6e59"),s=a.n(n);s.a},"8cd8":function(t,e,a){"use strict";var n=a("3560"),s=a.n(n);s.a},c1c3:function(t,e,a){}});
//# sourceMappingURL=app.cd833cad.js.map