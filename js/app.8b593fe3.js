(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},r={app:0},i=[];function o(t){return c.p+"js/"+({Home:"Home"}[t]||t)+"."+{Home:"c1288807"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={Home:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({Home:"Home"}[t]||t)+"."+{Home:"bfd0efee"}[t]+".css",r=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){l=f[o],u=l.getAttribute("data-href");if(u===n||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete s[t],d.parentNode.removeChild(d),a(i)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){s[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",f.name="ChunkLoadError",f.type=n,f.request=s,a[1](f)}r[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/lojinea-bolos/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"194d":function(t,e,a){},"1ae4":function(t,e,a){t.exports=a.p+"img/logo.1d92cbab.svg"},"2d24":function(t,e,a){t.exports=a.p+"img/cesta.b0b08847.svg"},"31bb":function(t,e,a){"use strict";var n=a("194d"),s=a.n(n);s.a},3560:function(t,e,a){},4360:function(t,e,a){"use strict";a("c740"),a("a434");var n=a("5530"),s=a("2b0e"),r=s["a"].observable({basket:!1,notification:{visible:!1,message:""},basketList:JSON.parse(localStorage.getItem("basket::list"))||[]}),i={MutateNotification:function(t){var e=t.visible,a=t.message;r.notification.visible=e,r.notification.message=a,setTimeout((function(){r.notification.message="",r.notification.visible=!1}),4e3)},MutateBasket:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];r.basket=t},MutateInsertionBasketList:function(t){var e=r.basketList.findIndex((function(e){var a=e.id;return a===t.id}));-1!==e?r.basketList[e].quantity+=1:r.basketList.push(Object(n["a"])(Object(n["a"])({},t),{},{quantity:1})),localStorage.setItem("basket::list",JSON.stringify(r.basketList))},MutateDeletionBasketList:function(t){var e=r.basketList.findIndex((function(e){var a=e.id;return a===t.id}));-1!==e&&(r.basketList.splice(e,1),localStorage.setItem("basket::list",JSON.stringify(r.basketList)))},MutateQuantityBasketList:function(t,e){if("add"===e)return i.MutateInsertionBasketList(t);var a=r.basketList.findIndex((function(e){var a=e.id;return a===t.id}));return r.basketList[a].quantity-1===0?i.MutateDeletionBasketList(t):(r.basketList[a].quantity-=1,localStorage.setItem("basket::list",JSON.stringify(r.basketList)))}},o={state:r,mutations:i};e["a"]=o},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-navbar"),a("app-basket"),a("router-view"),a("app-notification"),a("app-footer")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar is-primary",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),a("div",{staticClass:"navbar-menu"},[a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"buttons"},[a("a",{staticClass:"button is-primary",on:{click:function(e){return t.openBasket()}}},[a("span",{staticClass:"basket-count has-background-warning has-text-black-bis"},[t._v(" "+t._s(t.basketItemsCount)+" ")]),t._m(1)])])])])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[n("img",{attrs:{src:a("1ae4"),width:"30",height:"30",alt:"logo"}}),n("span",{staticClass:" ml-2"},[t._v("Lojinea de bolos")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("img",{attrs:{src:a("2d24"),alt:"cesta"}})])}],c=(a("13d5"),a("4360")),l={name:"AppNavbar",computed:{basketItemsCount:function(){return c["a"].state.basketList.reduce((function(t,e){var a=t+e.quantity;return a}),0)}},methods:{openBasket:function(){c["a"].mutations.MutateBasket(!0)}}},u=l,f=(a("31bb"),a("2877")),d=Object(f["a"])(u,i,o,!1,null,"b8564dda",null),m=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal basket",class:{"is-active":t.active}},[a("div",{staticClass:"modal-background",on:{click:function(e){return t.hideBasket()}}}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Cesta de bolos")]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.hideBasket()}}})]),a("section",{staticClass:"modal-card-body"},[t.basketList.length?[t._l(t.basketList,(function(e){return a("div",{key:e.id,staticClass:"box"},[a("article",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image"},[a("img",{attrs:{src:e.image,alt:"Image"}})])]),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v(t._s(e.name))])]),a("div",{staticClass:"columns mb-2"},[a("div",{staticClass:"column"},[t._v(" "+t._s(t._f("totalPrice")(e))+" ")]),a("div",{staticClass:"column"},[a("div",{staticClass:"field has-addons"},[a("p",{staticClass:"control"},[a("a",{staticClass:"button is-small",on:{click:function(a){return t.changeQuantity(e,"del")}}},[t._m(0,!0)])]),a("p",{staticClass:"control"},[a("input",{staticClass:"input is-small",attrs:{readonly:"",type:"number"},domProps:{value:e.quantity}})]),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-small",on:{click:function(a){return t.changeQuantity(e,"add")}}},[t._m(1,!0)])])])]),a("div",{staticClass:"column has-text-right"},[a("button",{staticClass:"button is-small is-danger is-outlined is-rounded",on:{click:function(a){return t.removeCake(e)}}},[t._v(" Remover ")])])])])])])])})),a("div",{staticClass:"has-text-right"},[a("small",[t._v("Total:")]),a("div",{staticClass:"is-size-3"},[t._v(t._s(t.finalPrice))])])]:a("div",{staticClass:"is-size-3 has-text-centered"},[a("div",[t._v("😔")]),a("small",[t._v("a cesta está vazia")])])],2),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button is-primary",attrs:{disabled:!t.basketList.length},on:{click:function(e){return t.checkout()}}},[t._v(" Finalizar compra ")]),a("button",{staticClass:"button",on:{click:function(e){return t.hideBasket()}}},[t._v("Fechar")])])])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("span",[t._v("-")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("span",[t._v("+")])])}],b={name:"AppBasket",computed:{active:function(){return c["a"].state.basket},basketList:function(){return c["a"].state.basketList},finalPrice:function(){var t=c["a"].state.basketList.reduce((function(t,e){var a=t;return a+=e.price*e.quantity,a}),0),e={currency:"BRL",style:"currency"};return new Intl.NumberFormat("pt-br",e).format(t)}},filters:{totalPrice:function(t){var e={currency:"BRL",style:"currency"};return new Intl.NumberFormat("pt-br",e).format(t.price*t.quantity)}},methods:{hideBasket:function(){c["a"].mutations.MutateBasket(!1)},changeQuantity:function(t,e){c["a"].mutations.MutateQuantityBasketList(t,e)},removeCake:function(t){c["a"].mutations.MutateDeletionBasketList(t)},checkout:function(){this.hideBasket();var t={visible:!0,message:"<h1>Obrigado por comprar com a gente 😍😍</h1><br><p>Seus bolos chegarão em breve</p>"};c["a"].mutations.MutateNotification(t)}}},h=b,g=(a("8cd8"),Object(f["a"])(h,p,v,!1,null,"0c402acc",null)),k=g.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer pt-4 pb-4"},[a("div",{staticClass:"content has-text-centered"},[a("p",[a("strong",[t._v("Lojinea de bolos 🍰")]),t._v(" by "),a("a",{attrs:{href:"https://github.com/arthurzeras",target:"_blank",rel:"noopener noreferrer"}},[t._v("Arthur Oliveira")]),t._v(" | "),a("a",{attrs:{href:"https://github.com/arthurzeras/lojinea-bolos",target:"_blank",rel:"noopener noreferrer"}},[t._v("Source")])]),a("div",[t._v(" Ícones feitos por "),a("a",{attrs:{title:"Skyclick",target:"_blank",rel:"noopener noreferrer",href:"https://www.flaticon.com/br/icone-gratis/bolo_901688"}},[t._v(" Skyclick ")]),t._v(" e "),a("a",{attrs:{title:"Freepik",target:"_blank",rel:"noopener noreferrer",href:"http://www.freepik.com/"}},[t._v(" Freepik ")]),t._v(" do "),a("a",{attrs:{title:"Flaticon",target:"_blank",rel:"noopener noreferrer",href:"https://www.flaticon.com/br/"}},[t._v(" flaticon.com ")])]),a("div",[t._v(" Imagens retiradas da comunidade "),a("a",{attrs:{href:"https://www.reddit.com/r/cake/",rel:"noopener noreferrer",target:"_blank"}},[t._v("/r/cake")]),t._v(" no reddit ")])])])}],C={name:"AppFooter"},L=C,w=Object(f["a"])(L,_,y,!1,null,null,null),O=w.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.state.visible?a("div",{staticClass:"notification is-primary"},[a("button",{staticClass:"delete",on:{click:function(e){return t.close()}}}),a("div",{domProps:{innerHTML:t._s(t.state.message)}})]):t._e()},j=[],x={data:function(){return{visible:!1}},computed:{state:function(){return c["a"].state.notification}},methods:{close:function(){c["a"].mutations.MutateNotification({visible:!1,message:""})}}},S=x,E=(a("7e2b"),Object(f["a"])(S,B,j,!1,null,"e6a33524",null)),M=E.exports,N={name:"App",components:{AppNavbar:m,AppBasket:k,AppFooter:O,AppNotification:M}},I=N,P=Object(f["a"])(I,s,r,!1,null,null,null),A=P.exports,H=(a("d3b7"),a("8c4f"));n["a"].use(H["a"]);var T=[{path:"/",name:"Home",component:function(){return a.e("Home").then(a.bind(null,"bb51"))}}],$=new H["a"]({mode:"history",base:"/lojinea-bolos/",routes:T}),q=$;a("c1c3");n["a"].config.productionTip=!1,new n["a"]({router:q,render:function(t){return t(A)}}).$mount("#app")},"6e59":function(t,e,a){},"7e2b":function(t,e,a){"use strict";var n=a("6e59"),s=a.n(n);s.a},"8cd8":function(t,e,a){"use strict";var n=a("3560"),s=a.n(n);s.a},c1c3:function(t,e,a){}});
//# sourceMappingURL=app.8b593fe3.js.map