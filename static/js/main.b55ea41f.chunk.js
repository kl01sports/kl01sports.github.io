(this["webpackJsonpkl01sports.github.io"]=this["webpackJsonpkl01sports.github.io"]||[]).push([[0],{92:function(e,t,n){"use strict";n.r(t);var c=n(112),a=n(0),i=n.n(a),o=n(75),s=n.n(o),r=n(58),l=n(10),j=n(115),b=n(5),d=n(105),u=n(103),h=n(102),x=n(106),m=n(116),p=n(94),O=n(114),g=n(104),f=n(3),w=function(e){return Object(f.jsx)(h.a,{w:"full",alignItems:"center",justifyContent:"center",children:Object(f.jsxs)(u.a,{bg:Object(p.c)("white","gray.800"),w:{base:"100%",md:"30vw"},borderWidth:"1px",rounded:"lg",shadow:"lg",position:"relative",children:[e.isNew&&Object(f.jsx)(u.b,{size:"10px",position:"absolute",top:2,right:2,bg:"red.200"}),Object(f.jsx)(O.a,{src:e.imageURL,alt:"Picture of ".concat(e.name),roundedTop:"lg",objectFit:"cover",w:"100%",h:"400px",fallback:Object(f.jsx)(u.a,{w:"100%",h:"400px",background:"black"})}),Object(f.jsxs)(u.a,{p:"6",children:[Object(f.jsx)(h.a,{mt:"1",justifyContent:"space-between",alignContent:"center",children:Object(f.jsx)(u.a,{fontSize:{base:"2xl",md:"2xl"},fontWeight:"bold",as:"h4",lineHeight:"tight",isTruncated:!0,children:e.name})}),Object(f.jsx)(u.a,{d:"flex",alignItems:"baseline",children:e.isNew&&Object(f.jsx)(g.a,{rounded:"full",px:"2",fontSize:"0.8em",colorScheme:"red",children:"New"})})]})]})})},v=function(){var e=Object(d.a)("(min-width:600px)"),t=Object(b.a)(e,1)[0],n=Object(a.useState)(),c=Object(b.a)(n,2),i=c[0],o=c[1];return Object(a.useEffect)((function(){fetch("https://raw.githubusercontent.com/kl01sports/data/main/data.json",{method:"GET"}).then((function(e){return e.json()})).then((function(e){o(e)}))}),[]),Object(f.jsxs)(u.a,{width:"100%",p:0,children:[Object(f.jsx)(h.a,{direction:t?"row":"column",spacing:"200px",p:{base:"3",md:"6"},alignSelf:"flex-start",children:Object(f.jsx)(u.a,{mt:{base:"1",md:"4"},align:"flex-start",children:Object(f.jsx)(x.a,{children:"Featured Categories "})})}),Object(f.jsx)(m.a,{columns:{base:1,md:3},spacing:"50px",p:{base:"2",md:"4"},children:null===i||void 0===i?void 0:i.categories.map((function(e){return Object(f.jsx)(u.a,{_hover:{cursor:"pointer"},onClick:function(){return window.location.href="#/products?category="+e.id},display:"inline-block",children:Object(f.jsx)(w,{name:e.name,imageURL:e.imageURL})})}))})]})},k=n(113),S=n(108),C=n.p+"static/media/tee.6a1151c1.jpg",y=function(){return Object(f.jsx)(h.a,{w:"full",h:{base:"300px",md:"400px"},backgroundImage:C,backgroundSize:"cover",backgroundPosition:"center center",children:Object(f.jsx)(j.b,{w:"full",justify:"center",align:"start",px:Object(k.a)({base:4,md:8}),bgGradient:"linear(to-r, blackAlpha.600, transparent)",children:Object(f.jsx)(j.a,{maxW:{base:"50%",md:"40%"},align:"flex-start",spacing:6,children:Object(f.jsxs)(S.a,{color:"white",fontWeight:700,lineHeight:1.2,fontSize:{base:"2xl",md:"4xl"},children:["Welcome to KL 01 SPORTS, ",Object(f.jsx)("br",{}),"your go to place for quality jerseys."]})})})})},R=n(109),L=n(111),T=n(39),P=function(){var e=Object(p.b)(),t=e.colorMode,n=e.toggleColorMode,c="dark"===t;return Object(f.jsxs)(h.a,{w:"100%",p:{base:2,md:5},children:[Object(f.jsx)(x.a,{ml:{base:4,md:8},size:"md",fontWeight:"bold",color:"cyan.400",alignSelf:"center",onClick:function(){return window.location.href="/"},_hover:{cursor:"pointer"},children:"KL 01 SPORTS"}),Object(f.jsx)(R.a,{}),Object(f.jsx)(L.a,{"aria-label":"",ml:{base:1,md:2},icon:Object(f.jsx)(T.a,{}),isRound:!0,onClick:function(){return window.open("https://www.instagram.com/abhiram_hari_/")}}),Object(f.jsx)(L.a,{"aria-label":"",ml:{base:1,md:2},icon:Object(f.jsx)(T.d,{}),isRound:!0,onClick:function(){return window.open("https://api.whatsapp.com/send?phone=918301049118")}}),Object(f.jsx)(L.a,{"aria-label":"",ml:{base:4,md:8},icon:c?Object(f.jsx)(T.c,{}):Object(f.jsx)(T.b,{}),isRound:!0,onClick:n})]})},z=function(){return Object(f.jsxs)(j.b,{p:0,children:[Object(f.jsx)(P,{}),Object(f.jsx)(y,{}),Object(f.jsx)(v,{})]})},F=function(){var e,t=Object(d.a)("(min-width:600px)"),n=Object(b.a)(t,1)[0],c=Object(a.useState)(),i=Object(b.a)(c,2),o=i[0],s=i[1],r=Object(l.e)();return Object(a.useEffect)((function(){var e=new URLSearchParams(r.search);if(e&&e.get("category")){var t=e.get("category");t&&function(e){fetch("https://raw.githubusercontent.com/kl01sports/data/main/data.json",{method:"GET"}).then((function(e){return e.json()})).then((function(t){var n=t.categories.find((function(t){return t.id===e}));s(n)}))}(t)}}),[r.search]),Object(f.jsxs)(j.b,{pt:0,children:[Object(f.jsx)(P,{}),Object(f.jsxs)(u.a,{width:"100%",p:0,children:[Object(f.jsx)(h.a,{direction:n?"row":"column",spacing:"200px",p:{base:"3",md:"6"},alignSelf:"flex-start",children:Object(f.jsx)(u.a,{mt:{base:"1",md:"4"},align:"flex-start",children:Object(f.jsxs)(x.a,{children:[null===o||void 0===o?void 0:o.name," "]})})}),Object(f.jsx)(m.a,{columns:{base:1,md:3},spacing:"50px",p:{base:"2",md:"4"},children:null===o||void 0===o||null===(e=o.products)||void 0===e?void 0:e.map((function(e){return Object(f.jsx)(w,{name:e.name,imageURL:e.imageURL,isNew:e.isNew})}))})]})]})};var U=function(){return Object(f.jsxs)(r.a,{basename:"/".concat(""),children:[Object(f.jsx)(l.a,{exact:!0,path:"/",component:z}),Object(f.jsx)(l.a,{exact:!0,path:"/products",component:F})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))},E=n(110),I=Object(E.a)({config:{initialColorMode:"light",useSystemColorMode:!1}});s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(c.a,{theme:I,children:Object(f.jsx)(U,{})})}),document.getElementById("root")),W()}},[[92,1,2]]]);
//# sourceMappingURL=main.b55ea41f.chunk.js.map