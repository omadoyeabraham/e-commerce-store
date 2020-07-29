(this["webpackJsonpe-commerce-store"]=this["webpackJsonpe-commerce-store"]||[]).push([[0],{32:function(e,t,a){e.exports=a(52)},37:function(e,t,a){},39:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(30),c=a.n(i),l=a(9),s=(a(37),a(3)),o=a.n(s),m=a(20),p=a(8),u=a(7),d=a(10),b=a(12),h=a(11),g=a(1),f=(a(39),a(15)),v=Object(g.f)((function(e){var t=e.title,a=e.imageUrl,n=e.history,i=e.linkUrl,c=e.match;return r.a.createElement("div",{onClick:function(){return n.push("".concat(c.url).concat(i))},className:"store-section group border border-gray-700 flex flex-col justify-center items-center text-center cursor-pointer overflow-hidden"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(a,")")},className:"store-section--image transform hover:scale-110 transition duration-1000 ease-in-out"}),r.a.createElement("div",{className:"store-section--content border border-gray-200 py-6 px-8 bg-white opacity-75 group-hover:opacity-100 absolute"},r.a.createElement("h1",{className:"store-section--title text-4xl font-bold uppercase"},t),r.a.createElement("span",{className:"store-section--subtitle block uppercase"},"SHOP NOW")))})),w=(a(44),function(e){return r.a.createElement("div",{className:"store-sections-list"},[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}].map((function(e){var t=e.id,a=Object(f.a)(e,["id"]);return r.a.createElement(v,Object.assign({key:t},a))})))}),y=function(e){return r.a.createElement("div",{className:"py-10"},r.a.createElement(w,null))},E=(a(45),function(e){var t=e.item,a=(t.id,t.imageUrl),n=t.name,i=t.price;return r.a.createElement("div",{className:"group shop-item relative mb-20 sm:mb-15 cursor-pointer"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(a,")")},className:"w-full h-full bg-center bg-cover group-hover:opacity-75"}),r.a.createElement("div",{className:"flex justify-between text-xl mt-1"},r.a.createElement("h4",null,n),r.a.createElement("h4",null,"$",i)),r.a.createElement("div",{className:"absolute bg-white p-4 text-center font-bold bottom-0 mb-5 mx-auto hover:bg-black hover:text-gray-100 w-9/12 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"},"ADD TO CART"))}),k=function(e){var t=e.collection,a=(t.id,t.title),n=(t.routeName,t.items),i=n.length>=4?n.slice(0,4):n;return r.a.createElement("div",null,r.a.createElement("h2",{className:"text-3xl text-gray-700 mb-2"},a),r.a.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-4 gap-2 mb-4"},i.map((function(e){return r.a.createElement(E,{key:e.id,item:e})}))))},x=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={collections:[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:1,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:2,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:3,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:4,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:5,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:6,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:7,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:8,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:1,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:2,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:3,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:4,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:5,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:1,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:2,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:3,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:4,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:5,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:6,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:7,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:1,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:2,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:3,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:4,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:5,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:6,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}]},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.collections;return r.a.createElement("div",{className:"py-10"},r.a.createElement("h1",{className:"text-5xl font-extrabold mb-4"},"Collections"),e.map((function(e){return r.a.createElement(k,{key:e.id,collection:e})})))}}]),a}(n.Component),U=a(14),N=function(e){var t=e.handleChange,a=e.label,n=Object(f.a)(e,["handleChange","label"]);return r.a.createElement("div",null,a?r.a.createElement("label",{htmlFor:n.name,className:"block text-gray-700 text-lg font-bold mb-2"},a):null,r.a.createElement("input",Object.assign({onChange:t},n,{className:"shadow appearance-none border w-full py-3 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline max-w-screen-sm"})))},j=function(e){var t=e.children,a=Object(f.a)(e,["children"]),n=a.color&&["blue","gray","red"].includes(a.color)?a.color:"gray",i={blue:[500,700],gray:[800,900]}[n];return r.a.createElement("button",Object.assign({},a,{className:"text-white font-bold py-4 px-8 focus:outline-none focus:shadow-outline text-xl uppercase "+"border bg-".concat(n,"-").concat(i[0]," hover:text-").concat(n,"-").concat(i[0]," hover:bg-white hover:border-").concat(n,"-").concat(i[0])}),t)},O=a(16),S=a.n(O);a(46),a(50);S.a.initializeApp({apiKey:"AIzaSyAKltqfhJ2B6UJFx7qq11g39122QN_KoEc",authDomain:"e-commerce-app-da83b.firebaseapp.com",databaseURL:"https://e-commerce-app-da83b.firebaseio.com",projectId:"e-commerce-app-da83b",storageBucket:"e-commerce-app-da83b.appspot.com",messagingSenderId:"779204615598",appId:"1:779204615598:web:9e4ec69abd2cdabd913c3f",measurementId:"G-9NH6M6R0D9"});var C=S.a.auth(),B=S.a.firestore(),P=new S.a.auth.GoogleAuthProvider;P.setCustomParameters({prompt:"select_account"});var A=function(){return C.signInWithPopup(P)},W=(S.a,function e(){Object(u.a)(this,e)});W.createAuthenticatedUserProfile=function(){var e=Object(p.a)(o.a.mark((function e(t){var a,n,r,i,c,l=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=l.length>1&&void 0!==l[1]?l[1]:{},t){e.next=3;break}return e.abrupt("return");case 3:return n=B.doc("users/".concat(t.uid)),e.next=6,n.get();case 6:if(e.sent.exists){e.next=18;break}return r=t.displayName,i=t.email,c=new Date,e.prev=10,e.next=13,n.set(Object(m.a)({displayName:r,email:i,createdAt:c},a));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),console.error(e.t0);case 18:return e.abrupt("return",n);case 19:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(t){return e.apply(this,arguments)}}(),W.signUpWithEmailAndPassword=function(){var e=Object(p.a)(o.a.mark((function e(t,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C.createUserWithEmailAndPassword(t,a));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),W.signInWithEmailAndPassword=function(){var e=Object(p.a)(o.a.mark((function e(t,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C.signInWithEmailAndPassword(t,a));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var T=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleSignIn=function(){var e=Object(p.a)(o.a.mark((function e(t){var a,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,i=a.password,e.prev=2,e.next=5,W.signInWithEmailAndPassword(r,i);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(U.a)({},r,a))},n.state={email:"",password:""},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"font-bold text-3xl"},"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSignIn},r.a.createElement("div",{className:"mt-8 mb-8"},r.a.createElement(N,{name:"email",label:"Email",value:this.state.email,type:"email",handleChange:this.handleChange,required:!0})),r.a.createElement("div",null,r.a.createElement(N,{name:"password",label:"Password",value:this.state.password,type:"password",handleChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"mt-10 flex justify-between"},r.a.createElement(j,{type:"submit",onSubmit:this.handleSignIn,color:"gray"},"Sign in"),r.a.createElement(j,{type:"submit",color:"blue",onClick:A},"Sign in with google"))))}}]),a}(r.a.Component),I=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleSignUp=function(){var e=Object(p.a)(o.a.mark((function e(t){var a,r,i,c,l,s,m;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=n.state,r=a.displayName,i=a.email,c=a.password,l=a.confirmPassword,c===l){e.next=5;break}return alert("Passwords do not match"),e.abrupt("return");case 5:return e.prev=5,e.next=8,W.signUpWithEmailAndPassword(i,c);case 8:return s=e.sent,m=s.user,e.next=12,W.createAuthenticatedUserProfile(m,{displayName:r});case 12:n.setState({displayName:"",email:"",password:"",confirmPassword:""}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(U.a)({},r,a))},n.state={displayName:"",email:"",password:"",confirmPassword:""},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,i=e.confirmPassword;return r.a.createElement("div",null,r.a.createElement("h2",{className:"font-bold text-3xl"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{onSubmit:this.handleSignUp},r.a.createElement("div",{className:"mt-8 mb-8"},r.a.createElement(N,{name:"displayName",label:"Display Name",value:t,type:"text",handleChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"mb-8"},r.a.createElement(N,{name:"email",label:"Email",value:a,type:"email",handleChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"mb-8"},r.a.createElement(N,{name:"password",label:"Password",value:n,type:"password",handleChange:this.handleChange,required:!0})),r.a.createElement("div",null,r.a.createElement(N,{name:"confirmPassword",label:"Confirm Password",value:i,type:"password",handleChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"mt-10 flex justify-between"},r.a.createElement(j,{type:"submit",onSubmit:this.handleSignUp,color:"gray"},"Sign Up"))))}}]),a}(r.a.Component),J=function(e){return r.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-16"},r.a.createElement(T,null),r.a.createElement(I,null))};function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var M=r.a.createElement("title",null,"Group"),F=r.a.createElement("desc",null,"Created with Sketch."),q=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),G=function(e){var t=e.svgRef,a=e.title,n=R(e,["svgRef","title"]);return r.a.createElement("svg",D({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?M:a?r.a.createElement("title",null,a):null,F,q)},z=r.a.forwardRef((function(e,t){return r.a.createElement(G,D({svgRef:t},e))})),L=(a.p,function(e){var t=e.currentUser;return r.a.createElement("nav",{className:" flex justify-between items-end h-16 px-10 mb-10"},r.a.createElement(l.b,{to:"/"},r.a.createElement(z,null)),r.a.createElement("div",{className:"text-gray-900 text-2xl font-extrabold"},r.a.createElement(l.b,{to:"/shop",className:"px-4"},"SHOP"),r.a.createElement(l.b,{to:"/contact",className:"px-4"},"CONTACT"),t?r.a.createElement("div",{className:"px-2 inline-block cursor-pointer",onClick:function(){return C.signOut()}},"SIGN OUT"):r.a.createElement(l.b,{to:"/auth",className:"px-2"},"SIGN IN")))}),H=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).unsubscribeFromAuth=null,n.state={currentUser:null},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=C.onAuthStateChanged(function(){var t=Object(p.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return t.next=3,W.createAuthenticatedUserProfile(a);case 3:t.sent.onSnapshot((function(t){e.setState({currentUser:Object(m.a)({id:t.id},t.data())})})),t.next=8;break;case 7:e.setState({currentUser:null});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){return r.a.createElement("div",{className:"bg-gray-200 min-h-screen"},r.a.createElement(L,{currentUser:this.state.currentUser}),r.a.createElement("div",{style:{maxWidth:"1400px"},className:"mx-auto px-10"},r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:y}),r.a.createElement(g.a,{exact:!0,path:"/shop",component:x}),r.a.createElement(g.a,{exact:!0,path:"/auth",component:J}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.9606864d.chunk.js.map