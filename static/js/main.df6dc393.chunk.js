(this["webpackJsonpe-commerce-store"]=this["webpackJsonpe-commerce-store"]||[]).push([[0],{38:function(e,t,a){e.exports=a(59)},43:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),c=a.n(i),l=a(15),o=(a(43),a(4)),s=a.n(o),m=a(3),u=a(14),p=a(8),d=a(10),b=a(13),h=a(12),g=a(2),f=a(11),v=(a(49),a(20)),E=Object(g.g)((function(e){var t=e.title,a=e.imageUrl,n=e.history,i=e.linkUrl,c=e.match;return r.a.createElement("div",{onClick:function(){return n.push("".concat(c.url).concat(i))},className:"store-section group border border-gray-700 flex flex-col justify-center items-center text-center cursor-pointer overflow-hidden"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(a,")")},className:"store-section--image transform hover:scale-110 transition duration-1000 ease-in-out"}),r.a.createElement("div",{className:"store-section--content border border-gray-200 py-6 px-8 bg-white opacity-75 group-hover:opacity-100 absolute"},r.a.createElement("h1",{className:"store-section--title text-4xl font-bold uppercase"},t),r.a.createElement("span",{className:"store-section--subtitle block uppercase"},"SHOP NOW")))})),y=(a(51),function(e){return r.a.createElement("div",{className:"store-sections-list"},[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}].map((function(e){var t=e.id,a=Object(v.a)(e,["id"]);return r.a.createElement(E,Object.assign({key:t},a))})))}),w=function(e){return r.a.createElement("div",{className:"py-10"},r.a.createElement(y,null))},x=(a(52),"ADD_ITEM_TO_CART"),k="TOGGLE_CART_HIDDEN",O=Object(f.b)(null,(function(e){return{addToCart:function(t){return e(function(e){return{type:x,payload:e}}(t))}}}))((function(e){var t=e.item,a=e.addToCart;return r.a.createElement("div",{className:"group shop-item relative mb-20 sm:mb-15 cursor-pointer"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(t.imageUrl,")")},className:"w-full h-full bg-center bg-cover group-hover:opacity-75"}),r.a.createElement("div",{className:"flex justify-between text-xl mt-1"},r.a.createElement("h4",null,t.name),r.a.createElement("h4",null,"$",t.price)),r.a.createElement("div",{className:"absolute bg-white p-4 text-center font-bold bottom-0 mb-5 mx-auto hover:bg-black hover:text-gray-100 w-9/12 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out",onClick:function(){return a(t)}},"ADD TO CART"))})),j=function(e){var t=e.collection,a=(t.id,t.title),n=(t.routeName,t.items),i=n.length>=4?n.slice(0,4):n;return r.a.createElement("div",null,r.a.createElement("h2",{className:"text-3xl text-gray-700 mb-2"},a),r.a.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-4 gap-2 mb-4"},i.map((function(e){return r.a.createElement(O,{key:e.id,item:e})}))))},N=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={collections:[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}]},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.collections;return r.a.createElement("div",{className:"py-10"},r.a.createElement("h1",{className:"text-5xl font-extrabold mb-4"},"Collections"),e.map((function(e){return r.a.createElement(j,{key:e.id,collection:e})})))}}]),a}(n.Component),U=a(19),C=function(e){var t=e.handleChange,a=e.label,n=Object(v.a)(e,["handleChange","label"]);return r.a.createElement("div",null,a?r.a.createElement("label",{htmlFor:n.name,className:"block text-gray-700 text-lg font-bold mb-2"},a):null,r.a.createElement("input",Object.assign({onChange:t},n,{className:"shadow appearance-none border w-full py-3 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline max-w-screen-sm"})))},S=function(e){var t=e.children,a=Object(v.a)(e,["children"]),n=a.color&&["blue","gray","red"].includes(a.color)?a.color:"gray",i={blue:[500,700],gray:[800,900]}[n];return r.a.createElement("button",Object.assign({},a,{className:"text-white font-bold py-4 px-8 focus:outline-none focus:shadow-outline text-xl uppercase "+"border bg-".concat(n,"-").concat(i[0]," hover:text-").concat(n,"-").concat(i[0]," hover:bg-white hover:border-").concat(n,"-").concat(i[0])}),t)},T=a(21),P=a.n(T);a(53),a(57);P.a.initializeApp({apiKey:"AIzaSyAKltqfhJ2B6UJFx7qq11g39122QN_KoEc",authDomain:"e-commerce-app-da83b.firebaseapp.com",databaseURL:"https://e-commerce-app-da83b.firebaseio.com",projectId:"e-commerce-app-da83b",storageBucket:"e-commerce-app-da83b.appspot.com",messagingSenderId:"779204615598",appId:"1:779204615598:web:9e4ec69abd2cdabd913c3f",measurementId:"G-9NH6M6R0D9"});var B=P.a.auth(),R=P.a.firestore(),A=new P.a.auth.GoogleAuthProvider;A.setCustomParameters({prompt:"select_account"});var D=function(){return B.signInWithPopup(A)},I=(P.a,function e(){Object(p.a)(this,e)});I.createAuthenticatedUserProfile=function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n,r,i,c,l=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=l.length>1&&void 0!==l[1]?l[1]:{},t){e.next=3;break}return e.abrupt("return");case 3:return n=R.doc("users/".concat(t.uid)),e.next=6,n.get();case 6:if(e.sent.exists){e.next=18;break}return r=t.displayName,i=t.email,c=new Date,e.prev=10,e.next=13,n.set(Object(m.a)({displayName:r,email:i,createdAt:c},a));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),console.error(e.t0);case 18:return e.abrupt("return",n);case 19:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(t){return e.apply(this,arguments)}}(),I.signUpWithEmailAndPassword=function(){var e=Object(u.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",B.createUserWithEmailAndPassword(t,a));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),I.signInWithEmailAndPassword=function(){var e=Object(u.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",B.signInWithEmailAndPassword(t,a));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var W=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleSignIn=function(){var e=Object(u.a)(s.a.mark((function e(t){var a,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,i=a.password,e.prev=2,e.next=5,I.signInWithEmailAndPassword(r,i);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(U.a)({},r,a))},n.state={email:"",password:""},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"font-bold text-3xl"},"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSignIn},r.a.createElement("div",{className:"mt-8 mb-8"},r.a.createElement(C,{name:"email",label:"Email",value:this.state.email,type:"email",handleChange:this.handleChange,required:!0})),r.a.createElement("div",null,r.a.createElement(C,{name:"password",label:"Password",value:this.state.password,type:"password",handleChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"mt-10 flex justify-between"},r.a.createElement(S,{type:"submit",onSubmit:this.handleSignIn,color:"gray"},"Sign in"),r.a.createElement(S,{type:"submit",color:"blue",onClick:D},"Sign in with google"))))}}]),a}(r.a.Component),_=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleSignUp=function(){var e=Object(u.a)(s.a.mark((function e(t){var a,r,i,c,l,o,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=n.state,r=a.displayName,i=a.email,c=a.password,l=a.confirmPassword,c===l){e.next=5;break}return alert("Passwords do not match"),e.abrupt("return");case 5:return e.prev=5,e.next=8,I.signUpWithEmailAndPassword(i,c);case 8:return o=e.sent,m=o.user,e.next=12,I.createAuthenticatedUserProfile(m,{displayName:r});case 12:n.setState({displayName:"",email:"",password:"",confirmPassword:""}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(U.a)({},r,a))},n.state={displayName:"",email:"",password:"",confirmPassword:""},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,i=e.confirmPassword;return r.a.createElement("div",null,r.a.createElement("h2",{className:"font-bold text-3xl"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{onSubmit:this.handleSignUp},r.a.createElement("div",{className:"mt-8 mb-8"},r.a.createElement(C,{name:"displayName",label:"Display Name",value:t,type:"text",handleChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"mb-8"},r.a.createElement(C,{name:"email",label:"Email",value:a,type:"email",handleChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"mb-8"},r.a.createElement(C,{name:"password",label:"Password",value:n,type:"password",handleChange:this.handleChange,required:!0})),r.a.createElement("div",null,r.a.createElement(C,{name:"confirmPassword",label:"Confirm Password",value:i,type:"password",handleChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"mt-10 flex justify-between"},r.a.createElement(S,{type:"submit",onSubmit:this.handleSignUp,color:"gray"},"Sign Up"))))}}]),a}(r.a.Component),M=function(e){return r.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-16"},r.a.createElement(W,null),r.a.createElement(_,null))};function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var H=r.a.createElement("title",null,"Group"),z=r.a.createElement("desc",null,"Created with Sketch."),G=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),V=function(e){var t=e.svgRef,a=e.title,n=q(e,["svgRef","title"]);return r.a.createElement("svg",J({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?H:a?r.a.createElement("title",null,a):null,z,G)},F=r.a.forwardRef((function(e,t){return r.a.createElement(V,J({svgRef:t},e))}));a.p;function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Q=r.a.createElement("g",null),X=r.a.createElement("g",null),Y=r.a.createElement("g",null),Z=r.a.createElement("g",null),$=r.a.createElement("g",null),ee=r.a.createElement("g",null),te=r.a.createElement("g",null),ae=r.a.createElement("g",null),ne=r.a.createElement("g",null),re=r.a.createElement("g",null),ie=r.a.createElement("g",null),ce=r.a.createElement("g",null),le=r.a.createElement("g",null),oe=r.a.createElement("g",null),se=r.a.createElement("g",null),me=function(e){var t=e.svgRef,a=e.title,n=K(e,["svgRef","title"]);return r.a.createElement("svg",L({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Q,X,Y,Z,$,ee,te,ae,ne,re,ie,ce,le,oe,se)},ue=r.a.forwardRef((function(e,t){return r.a.createElement(me,L({svgRef:t},e))})),pe=(a.p,function(e){var t=e.numberOfCartItems,a=e.handleClick;return r.a.createElement("div",{style:{width:"45px",height:"45px"},className:"ml-4 relative flex justify-center items-center cursor-pointer",onClick:a},r.a.createElement(ue,{style:{width:"25px",height:"25px"}}),r.a.createElement("div",{style:{bottom:"10px"},className:"absolute text-sm"},t))}),de=function(e){var t=e.cartItems;return r.a.createElement("div",{style:{width:"300px",height:"450px",bottom:"-460px",right:"10px"},className:"absolute bg-gray-200 z-10 border border-gray-800 p-4 overflow-y-scroll"},r.a.createElement("div",{className:""},t.map((function(e){return r.a.createElement("div",{key:e.id,className:"flex items-center"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")"),width:"100px",height:"130px"},className:"bg-cover bg-center my-3"}),r.a.createElement("div",{className:"ml-8"},r.a.createElement("h3",null,e.title),r.a.createElement("h3",null,e.quantity," x $",e.price)))}))),r.a.createElement("div",{className:"w-full"},r.a.createElement("button",{className:"w-full mt-4 bg-transparent hover:bg-gray-900 text-gray-900  font-bold uppercase hover:text-white py-4 px-4 border border-gray-900 hover:border-transparent"},"Go to Checkout")))},be=a(37),he=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(m.a)(Object(m.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(be.a)(e),[Object(m.a)(Object(m.a)({},t),{},{quantity:1})])},ge=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={showCartDropDown:!1},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.cartItems,a=e.cartDropDownHidden,n=e.toggleCartDropDown,i=function(e){return e.reduce((function(e,t){return t.quantity+e}),0)}(t);return r.a.createElement("div",{className:"relative"},r.a.createElement(pe,{numberOfCartItems:i,handleClick:n}),a?null:r.a.createElement(de,{cartItems:t}))}}]),a}(r.a.Component),fe=Object(f.b)((function(e){var t=e.cart;return{cartItems:t.items,cartDropDownHidden:t.hidden}}),(function(e){return{toggleCartDropDown:function(){return e({type:k})}}}))(ge),ve=Object(f.b)((function(e){return{currentUser:e.user.currentUser}}))((function(e){var t=e.currentUser;return r.a.createElement("nav",{className:" flex justify-between items-end h-16 px-10 mb-10"},r.a.createElement(l.b,{to:"/"},r.a.createElement(F,null)),r.a.createElement("div",{className:"text-gray-900 text-2xl font-extrabold flex justify-center items-center"},r.a.createElement(l.b,{to:"/shop",className:"px-4"},"SHOP"),r.a.createElement(l.b,{to:"/contact",className:"px-4"},"CONTACT"),t?r.a.createElement("div",{className:"px-2 inline-block cursor-pointer",onClick:function(){return B.signOut()}},"SIGN OUT"):r.a.createElement(l.b,{to:"/auth",className:"px-2"},"SIGN IN"),r.a.createElement(fe,null)))})),Ee={SET_CURRENT_USER:"SET_CURRENT_USER"},ye=Ee,we=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=B.onAuthStateChanged(function(){var t=Object(u.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return t.next=3,I.createAuthenticatedUserProfile(a);case 3:t.sent.onSnapshot((function(t){e(Object(m.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e(null);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"bg-gray-200 min-h-screen"},r.a.createElement(ve,null),r.a.createElement("div",{style:{maxWidth:"1400px"},className:"mx-auto px-10"},r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",component:w}),r.a.createElement(g.b,{exact:!0,path:"/shop",component:N}),r.a.createElement(g.b,{exact:!0,path:"/auth",render:function(){return e.props.currentUser?r.a.createElement(g.a,{to:"/"}):r.a.createElement(M,null)}}))))}}]),a}(r.a.Component),xe=Object(f.b)((function(e){return{currentUser:e.user.currentUser}}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:Ee.SET_CURRENT_USER,payload:e}}(t))}}}))(we);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=a(16),Oe=a(36),je=a.n(Oe),Ne={currentUser:null},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye.SET_CURRENT_USER:return Object(m.a)(Object(m.a)({},e),{},{currentUser:t.payload});default:return e}},Ce={hidden:!0,items:[]},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(m.a)(Object(m.a)({},e),{},{items:he(e.items,t.payload)});case k:return Object(m.a)(Object(m.a)({},e),{},{hidden:!e.hidden});default:return e}},Te=Object(ke.c)({user:Ue,cart:Se}),Pe=[je.a],Be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ke.d,Re=Object(ke.e)(Te,Be(ke.a.apply(void 0,Pe)));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{store:Re},r.a.createElement(l.a,null,r.a.createElement(xe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.df6dc393.chunk.js.map