(this["webpackJsonpe-commerce-store"]=this["webpackJsonpe-commerce-store"]||[]).push([[0],{43:function(e,t,a){e.exports=a(67)},52:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},64:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),i=a(8),o=a(3),s=a(38),m=(a(52),a(6)),u=a.n(m),p=a(2),d=a(17),b=a(11),h=a(14),g=a(16),f=a(15),v=a(4),E=(a(54),a(21)),y=Object(v.g)((function(e){var t=e.title,a=e.imageUrl,n=e.history,c=e.linkUrl,l=e.match;return r.a.createElement("div",{onClick:function(){return n.push("".concat(l.url).concat(c))},className:"store-section group border border-gray-700 flex flex-col justify-center items-center text-center cursor-pointer overflow-hidden"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(a,")")},className:"store-section--image transform hover:scale-110 transition duration-1000 ease-in-out"}),r.a.createElement("div",{className:"store-section--content border border-gray-200 py-6 px-8 bg-white opacity-75 group-hover:opacity-100 absolute"},r.a.createElement("h1",{className:"store-section--title text-4xl font-bold uppercase"},t),r.a.createElement("span",{className:"store-section--subtitle block uppercase"},"SHOP NOW")))})),x=(a(56),a(5)),w=function(e){return e.products},O=Object(x.a)([w],(function(e){return e.sections})),k=Object(x.a)([w],(function(e){return e.collections})),j=Object(x.a)([k],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),N=Object(x.b)({sections:O}),C=Object(o.b)(N)((function(e){var t=e.sections;return r.a.createElement("div",{className:"store-sections-list"},t.map((function(e){var t=e.id,a=Object(E.a)(e,["id"]);return r.a.createElement(y,Object.assign({key:t},a))})))})),U=function(e){return r.a.createElement("div",{className:"py-10"},r.a.createElement(C,null))},S=(a(57),"ADD_ITEM_TO_CART"),T="REMOVE_ITEM_FROM_CART",I="DELETE_ITEM_FROM_CART",A="TOGGLE_CART_HIDDEN",P=function(e){return{type:S,payload:e}},R=function(){return{type:A}},D=Object(o.b)(null,(function(e){return{addToCart:function(t){return e(P(t))}}}))((function(e){var t=e.item,a=e.addToCart;return r.a.createElement("div",{className:"shop-item group shop-item relative mb-20 sm:mb-15 cursor-pointer"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(t.imageUrl,")")},className:"shop-item--image-background w-full h-full bg-center bg-cover group-hover:opacity-75"}),r.a.createElement("div",{className:"shop-item--name-and-price flex justify-between text-xl mt-1"},r.a.createElement("h4",null,t.name),r.a.createElement("h4",null,"$",t.price)),r.a.createElement("div",{className:"shop-item--button absolute bg-white p-4 text-center font-bold bottom-0 mb-5 mx-auto  w-9/12 left-0 right-0 opacity-0  transition-opacity duration-500 ease-in-out hover:bg-black hover:text-gray-100 group-hover:opacity-100",onClick:function(){return a(t)}},"ADD TO CART"))})),B=function(e){var t=e.collection,a=(t.id,t.title),n=(t.routeName,t.items),c=n.length>=4?n.slice(0,4):n;return r.a.createElement("div",null,r.a.createElement(i.b,{to:"shop/".concat(a.toLowerCase()),className:"text-3xl text-gray-700 mb-2 font-bold cursor-pointer"},a),r.a.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-4 gap-2 mb-4"},c.map((function(e){return r.a.createElement(D,{key:e.id,item:e})}))))},_=Object(x.b)({collections:j}),W=Object(o.b)(_)((function(e){var t=e.collections;return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-5xl font-extrabold mb-4"},"Collections"),t.map((function(e){return r.a.createElement(B,{key:e.id,collection:e})})))})),M=Object(o.b)((function(e,t){return{collection:(a=t.match.params.collectionId,Object(x.a)([k],(function(e){return e[a]})))(e)};var a}))((function(e){var t,a=e.collection;return r.a.createElement("div",null,r.a.createElement("h2",{className:"text-5xl text-center font-bold mb-8"},a.title),r.a.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-4 gap-2 mb-4"},(null===a||void 0===a||null===(t=a.items)||void 0===t?void 0:t.length)?a.items.map((function(e){return r.a.createElement(D,{key:e.id,item:e})})):null))})),q=function(e){var t=e.match;return console.log(t),r.a.createElement("div",{className:"py-10"},r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:"".concat(t.path),component:W}),r.a.createElement(v.b,{exact:!0,path:"".concat(t.path,"/:collectionId"),component:M})))},F=a(20),J=function(e){var t=e.handleChange,a=e.label,n=Object(E.a)(e,["handleChange","label"]);return r.a.createElement("div",null,a?r.a.createElement("label",{htmlFor:n.name,className:"block text-gray-700 text-lg font-bold mb-2"},a):null,r.a.createElement("input",Object.assign({onChange:t},n,{className:"shadow appearance-none border w-full py-3 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline max-w-screen-sm"})))},V=function(e){var t=e.children,a=Object(E.a)(e,["children"]),n=a.color&&["blue","gray","red"].includes(a.color)?a.color:"gray",c={blue:[500,700],gray:[800,900]}[n];return r.a.createElement("button",Object.assign({},a,{className:"text-white font-bold py-4 px-8 focus:outline-none focus:shadow-outline text-xl uppercase "+"border bg-".concat(n,"-").concat(c[0]," hover:text-").concat(n,"-").concat(c[0]," hover:bg-white hover:border-").concat(n,"-").concat(c[0])}),t)},z=a(22),H=a.n(z);a(58),a(62);H.a.initializeApp({apiKey:"AIzaSyAKltqfhJ2B6UJFx7qq11g39122QN_KoEc",authDomain:"e-commerce-app-da83b.firebaseapp.com",databaseURL:"https://e-commerce-app-da83b.firebaseio.com",projectId:"e-commerce-app-da83b",storageBucket:"e-commerce-app-da83b.appspot.com",messagingSenderId:"779204615598",appId:"1:779204615598:web:9e4ec69abd2cdabd913c3f",measurementId:"G-9NH6M6R0D9"});var L=H.a.auth(),G=H.a.firestore(),Q=new H.a.auth.GoogleAuthProvider;Q.setCustomParameters({prompt:"select_account"});var X=function(){return L.signInWithPopup(Q)},K=(H.a,function e(){Object(b.a)(this,e)});K.createAuthenticatedUserProfile=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,r,c,l,i=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=i.length>1&&void 0!==i[1]?i[1]:{},t){e.next=3;break}return e.abrupt("return");case 3:return n=G.doc("users/".concat(t.uid)),e.next=6,n.get();case 6:if(e.sent.exists){e.next=18;break}return r=t.displayName,c=t.email,l=new Date,e.prev=10,e.next=13,n.set(Object(p.a)({displayName:r,email:c,createdAt:l},a));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),console.error(e.t0);case 18:return e.abrupt("return",n);case 19:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(t){return e.apply(this,arguments)}}(),K.signUpWithEmailAndPassword=function(){var e=Object(d.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L.createUserWithEmailAndPassword(t,a));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),K.signInWithEmailAndPassword=function(){var e=Object(d.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L.signInWithEmailAndPassword(t,a));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var Y=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).handleSignIn=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,c=a.password,e.prev=2,e.next=5,K.signInWithEmailAndPassword(r,c);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(F.a)({},r,a))},n.state={email:"",password:""},n}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"font-bold text-3xl"},"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSignIn},r.a.createElement("div",{className:"mt-8 mb-8"},r.a.createElement(J,{name:"email",label:"Email",value:this.state.email,type:"email",handleChange:this.handleChange,required:!0})),r.a.createElement("div",null,r.a.createElement(J,{name:"password",label:"Password",value:this.state.password,type:"password",handleChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"mt-10 flex justify-between"},r.a.createElement(V,{type:"submit",onSubmit:this.handleSignIn,color:"gray"},"Sign in"),r.a.createElement(V,{type:"submit",color:"blue",onClick:X},"Sign in with google"))))}}]),a}(r.a.Component),$=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).handleSignUp=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,r,c,l,i,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=n.state,r=a.displayName,c=a.email,l=a.password,i=a.confirmPassword,l===i){e.next=5;break}return alert("Passwords do not match"),e.abrupt("return");case 5:return e.prev=5,e.next=8,K.signUpWithEmailAndPassword(c,l);case 8:return o=e.sent,s=o.user,e.next=12,K.createAuthenticatedUserProfile(s,{displayName:r});case 12:n.setState({displayName:"",email:"",password:"",confirmPassword:""}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(F.a)({},r,a))},n.state={displayName:"",email:"",password:"",confirmPassword:""},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword;return r.a.createElement("div",null,r.a.createElement("h2",{className:"font-bold text-3xl"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{onSubmit:this.handleSignUp},r.a.createElement("div",{className:"mt-8 mb-8"},r.a.createElement(J,{name:"displayName",label:"Display Name",value:t,type:"text",handleChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"mb-8"},r.a.createElement(J,{name:"email",label:"Email",value:a,type:"email",handleChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"mb-8"},r.a.createElement(J,{name:"password",label:"Password",value:n,type:"password",handleChange:this.handleChange,required:!0})),r.a.createElement("div",null,r.a.createElement(J,{name:"confirmPassword",label:"Confirm Password",value:c,type:"password",handleChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"mt-10 flex justify-between"},r.a.createElement(V,{type:"submit",onSubmit:this.handleSignUp,color:"gray"},"Sign Up"))))}}]),a}(r.a.Component),Z=function(e){return r.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-16"},r.a.createElement(Y,null),r.a.createElement($,null))},ee=(a(64),function(e){return e.cart}),te=Object(x.a)([ee],(function(e){return e.items})),ae=Object(x.a)([te],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ne=Object(x.a)([te],(function(e){return e.reduce((function(e,t){return e+t.price*t.quantity}),0)})),re=Object(o.b)(null,(function(e){return{removeFromCart:function(t){return e(function(e){return{type:T,payload:e}}(t))},deleteFromCart:function(t){return e(function(e){return{type:I,payload:e}}(t))},addToCart:function(t){return e(P(t))}}}))((function(e){var t=e.item,a=e.addToCart,n=e.removeFromCart,c=e.deleteFromCart;return r.a.createElement("tr",{key:t.id,className:"text-2xl border-b-2 border-gray-400"},r.a.createElement("td",null,r.a.createElement("img",{src:t.imageUrl,alt:"Item",className:"checkout-page--item-image bg-cover bg-center my-4"})),r.a.createElement("td",null,t.name),r.a.createElement("td",null,r.a.createElement("span",{className:"font-extrabold text-3xl cursor-pointer",onClick:function(){return a(t)}},"\u276e"),r.a.createElement("span",{className:"mx-4"},t.quantity),r.a.createElement("span",{className:"font-extrabold text-3xl cursor-pointer",onClick:function(){return n(t)}},"\u276f")),r.a.createElement("td",null,"$",t.price),r.a.createElement("td",{className:"text-center font-extrabold text-3xl cursor-pointer"},r.a.createElement("span",{onClick:function(){return c(t)}},"\u2613")))})),ce=a(39),le=a.n(ce),ie=function(e){console.log(e),alert("Payment Successful")},oe=function(e){var t=e.price,a=100*t;return r.a.createElement(le.a,{name:"The Shop LTD",description:"Your total price is $".concat(t),billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",ComponentClass:"div",label:"Pay Now",panelLabel:"Buy",amount:a,stripeKey:"pk_test_51HDzRhLE3y3AC5cjTn0zIZixX13FXX7mn1u8Sm7AQokDo2nrbbASrmtaJAmkoCVpRh5B3Wz1LlCUmxPIWvVYyo3e00VM7D9alV",email:"contact@test.com",token:ie})},se=Object(x.b)({cartItems:te,cartTotalAmount:ne}),me=Object(o.b)(se)((function(e){var t=e.cartItems,a=e.cartTotalAmount;e.removeFromCart,e.deleteFromCart,e.addToCart;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("table",{className:"checkout-page--table w-full"},r.a.createElement("thead",{className:"text-2xl border-b-2 border-gray-400 pb-10"},r.a.createElement("tr",null,r.a.createElement("th",{className:"text-left py-4"},"Product"),r.a.createElement("th",{className:"text-left"},"Description"),r.a.createElement("th",{className:"text-left"}," Quantity"),r.a.createElement("th",{className:"text-left"},"Price"),r.a.createElement("th",{className:"text-center"},"Remove"))),r.a.createElement("tbody",null,t.length?t.map((function(e){return r.a.createElement(re,{key:e.id,item:e})})):r.a.createElement("tr",{className:"border-b-2 border-gray-400"},r.a.createElement("td",{className:"text-center text-3xl font-bold h-56",colSpan:"5"},"No Items in your cart")))),t.length?r.a.createElement("div",null,r.a.createElement("div",{className:"mt-8 text-right text-5xl font-bold"},"Total: $",a),r.a.createElement(oe,{price:a}),r.a.createElement("div",{className:"bg-red-300 font-semibold mt-8 p-8 text-4xl rounded-lg"},"*Please use the following test credit card for payment*",r.a.createElement("ul",{className:"mt-4 text-3xl"},r.a.createElement("li",null,"Card Number: 4242 4242 4242 4242"),r.a.createElement("li",null,"Expiry Date: 01/21"),r.a.createElement("li",null,"CVV: 123")))):null)}));function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var de=r.a.createElement("title",null,"Group"),be=r.a.createElement("desc",null,"Created with Sketch."),he=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),ge=function(e){var t=e.svgRef,a=e.title,n=pe(e,["svgRef","title"]);return r.a.createElement("svg",ue({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?de:a?r.a.createElement("title",null,a):null,be,he)},fe=r.a.forwardRef((function(e,t){return r.a.createElement(ge,ue({svgRef:t},e))}));a.p;function ve(){return(ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Ee(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ye=r.a.createElement("g",null),xe=r.a.createElement("g",null),we=r.a.createElement("g",null),Oe=r.a.createElement("g",null),ke=r.a.createElement("g",null),je=r.a.createElement("g",null),Ne=r.a.createElement("g",null),Ce=r.a.createElement("g",null),Ue=r.a.createElement("g",null),Se=r.a.createElement("g",null),Te=r.a.createElement("g",null),Ie=r.a.createElement("g",null),Ae=r.a.createElement("g",null),Pe=r.a.createElement("g",null),Re=r.a.createElement("g",null),De=function(e){var t=e.svgRef,a=e.title,n=Ee(e,["svgRef","title"]);return r.a.createElement("svg",ve({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),ye,xe,we,Oe,ke,je,Ne,Ce,Ue,Se,Te,Ie,Ae,Pe,Re)},Be=r.a.forwardRef((function(e,t){return r.a.createElement(De,ve({svgRef:t},e))})),_e=(a.p,function(e){var t=e.numberOfCartItems,a=e.handleClick;return r.a.createElement("div",{style:{width:"45px",height:"45px"},className:"ml-4 relative flex justify-center items-center cursor-pointer",onClick:a},r.a.createElement(Be,{style:{width:"25px",height:"25px"}}),r.a.createElement("div",{style:{bottom:"10px"},className:"absolute text-sm"},t))}),We=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleGoToCheckout=function(){var t=e.props,a=t.history;(0,t.closeCartDropdown)(),a.push("/checkout")},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.cartItems;return r.a.createElement("div",{style:{width:"300px",height:"450px",bottom:"-460px",right:"10px"},className:"absolute bg-gray-200 z-10 border border-gray-800 p-4"},r.a.createElement("div",{className:"relative flex flex-col justify-between w-full h-full"},r.a.createElement("div",{className:"cart-items overflow-y-scroll"},e.map((function(e){return r.a.createElement("div",{key:e.id,className:"flex items-center"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")"),width:"100px",height:"130px"},className:"bg-cover bg-center my-3"}),r.a.createElement("div",{className:"ml-8"},r.a.createElement("h3",null,e.title),r.a.createElement("h3",null,r.a.createElement("span",{className:"mx-4"},e.quantity)," x",r.a.createElement("span",{className:"mx-4"},"$",e.price))))}))),0===e.length?r.a.createElement("div",{className:"mt-10 text-center text-semibold"},"NO ITEMS IN CART"):null,r.a.createElement("div",{className:"w-full"},r.a.createElement("button",{className:"w-full mt-4 bg-transparent hover:bg-gray-900 text-gray-900  font-bold uppercase hover:text-white py-4 px-4 border border-gray-900 hover:border-transparent",onClick:this.handleGoToCheckout},"Go to Checkout"))))}}]),a}(r.a.Component),Me=Object(v.g)(Object(o.b)(null,(function(e){return{closeCartDropdown:function(){return e(R())}}}))(We)),qe=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={showCartDropDown:!1},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.cartItems,a=e.cartDropDownHidden,n=e.toggleCartDropDown,c=e.totalQuantityOfItemsInCart;return r.a.createElement("div",{className:"relative"},r.a.createElement(_e,{numberOfCartItems:c,handleClick:n}),a?null:r.a.createElement(Me,{cartItems:t}))}}]),a}(r.a.Component),Fe=Object(o.b)((function(e){return{cartItems:te(e),cartDropDownHidden:ee(e).hidden,totalQuantityOfItemsInCart:ae(e)}}),(function(e){return{toggleCartDropDown:function(){return e(R())}}}))(qe),Je=Object(x.a)([function(e){return e.user}],(function(e){return e.currentUser})),Ve=Object(x.b)({currentUser:Je}),ze=Object(o.b)(Ve)((function(e){var t=e.currentUser;return r.a.createElement("nav",{className:" flex justify-between items-end h-16 px-10 mb-10"},r.a.createElement(i.b,{to:"/"},r.a.createElement(fe,null)),r.a.createElement("div",{className:"text-gray-900 text-2xl font-extrabold flex justify-center items-center"},r.a.createElement(i.b,{to:"/shop",className:"px-4"},"SHOP"),r.a.createElement(i.b,{to:"/contact",className:"px-4"},"CONTACT"),t?r.a.createElement("div",{className:"px-2 inline-block cursor-pointer",onClick:function(){return L.signOut()}},"SIGN OUT"):r.a.createElement(i.b,{to:"/auth",className:"px-2"},"SIGN IN"),r.a.createElement(Fe,null)))})),He={SET_CURRENT_USER:"SET_CURRENT_USER"},Le=He,Ge=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=L.onAuthStateChanged(function(){var t=Object(d.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return t.next=3,K.createAuthenticatedUserProfile(a);case 3:t.sent.onSnapshot((function(t){e(Object(p.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e(null);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"bg-gray-200 min-h-screen"},r.a.createElement(ze,null),r.a.createElement("div",{style:{maxWidth:"1400px"},className:"mx-auto px-10"},r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:"/",component:U}),r.a.createElement(v.b,{path:"/shop",component:q}),r.a.createElement(v.b,{exact:!0,path:"/checkout",component:me}),r.a.createElement(v.b,{exact:!0,path:"/auth",render:function(){return e.props.currentUser?r.a.createElement(v.a,{to:"/"}):r.a.createElement(Z,null)}}))))}}]),a}(r.a.Component),Qe=Object(o.b)((function(e){return{currentUser:Je(e)}}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:He.SET_CURRENT_USER,payload:e}}(t))}}}))(Ge);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Xe=a(12),Ke=a(40),Ye=a.n(Ke),$e=a(27),Ze=a(41),et=a.n(Ze),tt={currentUser:null},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Le.SET_CURRENT_USER:return Object(p.a)(Object(p.a)({},e),{},{currentUser:t.payload});default:return e}},nt=a(42),rt=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(nt.a)(e),[Object(p.a)(Object(p.a)({},t),{},{quantity:1})])},ct=function(e,t){return e.filter((function(e){return e.id!==t.id}))},lt=function(e,t){return t.quantity-1<=0?ct(e,t):e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity-1}):e}))},it={hidden:!0,items:[]},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(p.a)(Object(p.a)({},e),{},{items:rt(e.items,t.payload)});case A:return Object(p.a)(Object(p.a)({},e),{},{hidden:!e.hidden});case T:return Object(p.a)(Object(p.a)({},e),{},{items:lt(e.items,t.payload)});case I:return Object(p.a)(Object(p.a)({},e),{},{items:ct(e.items,t.payload)});default:return e}},st={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}],collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;return t.type,e},ut={key:"root",storage:et.a,whitelist:["cart"]},pt=Object(Xe.c)({user:at,cart:ot,products:mt}),dt=Object($e.a)(ut,pt),bt=[Ye.a],ht=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Xe.d,gt=Object(Xe.e)(dt,ht(Xe.a.apply(void 0,bt))),ft=Object($e.b)(gt);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:gt},r.a.createElement(i.a,null,r.a.createElement(s.a,{persistor:ft},r.a.createElement(Qe,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.e0449447.chunk.js.map