(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,c,s){},23:function(e,c,s){},30:function(e,c,s){},31:function(e,c,s){},32:function(e,c,s){},33:function(e,c,s){},34:function(e,c,s){"use strict";s.r(c);var t=s(1),a=s(16),i=s.n(a),n=(s(22),s(2)),l=s(3),r=(s(23),s(0)),j=function(e){var c=e.src,s=e.text,t=e.label,a=e.path;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("li",{className:"cards__item",children:Object(r.jsxs)(n.b,{className:"cards__item__link",to:a,children:[Object(r.jsx)("figure",{className:"cards__item__pic-wrap","data-category":t,children:Object(r.jsx)("img",{className:"cards__item__img",alt:"Travel Image",src:c})}),Object(r.jsx)("div",{className:"cards__item__info",children:Object(r.jsx)("h5",{className:"cards__item__text",children:s})})]})})})},b=(s(30),s.p+"static/media/beef-noodle.60c8e7b6.jpg"),o=s.p+"static/media/pepper-bun.9a2e2d03.jpg",d=s.p+"static/media/braised-pork.b070732d.jpg",m=s.p+"static/media/soup-dumpling.c0ee7201.jpg",h=s.p+"static/media/street-food.a1b6cb92.jpg",x=function(){return Object(r.jsxs)("div",{className:"cards",children:[Object(r.jsx)("h1",{children:"Check out our year!"}),Object(r.jsx)("div",{className:"cards__container",children:Object(r.jsxs)("div",{className:"cards__wrapper",children:[Object(r.jsxs)("ul",{className:"cards__items",children:[Object(r.jsx)(j,{src:h,text:"We did a super awesome thing!",label:"Adventure",path:"/vacations"}),Object(r.jsx)(j,{src:b,text:"We did a super awesome thing",label:"Vacation",path:"/vacations"})]}),Object(r.jsxs)("ul",{className:"cards__items",children:[Object(r.jsx)(j,{src:o,text:"We did a super awesome things",label:"Event",path:"/events"}),Object(r.jsx)(j,{src:d,text:"We did a super awesome thing",label:"Food",path:"/events"}),Object(r.jsx)(j,{src:m,text:"We did a super awesome thing",label:"Wedding",path:"/weddings"})]})]})})]})},O=(s(31),function(){return Object(r.jsxs)("div",{className:"footer-container",children:[Object(r.jsxs)("div",{className:"footer-links",children:[Object(r.jsxs)("div",{className:"footer-link-wrapper",children:[Object(r.jsxs)("div",{className:"footer-link-items",children:[Object(r.jsx)("h2",{children:"About Us"}),Object(r.jsx)(n.b,{to:"/sign-up",children:"How it works"}),Object(r.jsx)(n.b,{to:"/",children:"Testimonials"}),Object(r.jsx)(n.b,{to:"/",children:"Careers"}),Object(r.jsx)(n.b,{to:"/",children:"Investors"}),Object(r.jsx)(n.b,{to:"/",children:"Terms of Service"})]}),Object(r.jsxs)("div",{className:"footer-link-items",children:[Object(r.jsx)("h2",{children:"Contact Us"}),Object(r.jsx)(n.b,{to:"/",children:"Contact"}),Object(r.jsx)(n.b,{to:"/",children:"Support"}),Object(r.jsx)(n.b,{to:"/",children:"Destinations"}),Object(r.jsx)(n.b,{to:"/",children:"Sponsorships"})]})]}),Object(r.jsx)("div",{className:"footer-link-wrapper",children:Object(r.jsxs)("div",{className:"footer-link-items",children:[Object(r.jsx)("h2",{children:"Social Media"}),Object(r.jsx)(n.b,{to:"/",children:"Instagram"}),Object(r.jsx)(n.b,{to:"/",children:"Facebook"}),Object(r.jsx)(n.b,{to:"/",children:"Youtube"}),Object(r.jsx)(n.b,{to:"/",children:"Twitter"})]})})]}),Object(r.jsx)("section",{className:"social-media",children:Object(r.jsxs)("div",{className:"social-media-wrap",children:[Object(r.jsx)("div",{className:"footer-logo",children:Object(r.jsx)(n.b,{to:"/",className:"social-logo",children:"Burbidge"})}),Object(r.jsx)("small",{className:"website-rights",children:"Burbidge \xa9 2021"}),Object(r.jsxs)("div",{className:"social-icons",children:[Object(r.jsx)(n.b,{className:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook",children:Object(r.jsx)("i",{className:"fab fa-facebook-f"})}),Object(r.jsx)(n.b,{className:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(r.jsx)("i",{className:"fab fa-instagram"})}),Object(r.jsx)(n.b,{className:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube",children:Object(r.jsx)("i",{className:"fab fa-youtube"})}),Object(r.jsx)(n.b,{className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(r.jsx)("i",{className:"fab fa-twitter"})}),Object(r.jsx)(n.b,{className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(r.jsx)("i",{className:"fab fa-linkedin"})})]})]})})]})}),u=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"home"}),Object(r.jsx)(x,{}),Object(r.jsx)(O,{})]})};var p=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(u,{})})},v=s(14),f=(s(32),["btn--primary","btn--outline"]),N=["btn--medium","btn--large"],g=function(e){var c=e.children,s=e.onClick,t=e.buttonStyle,a=e.buttonSize,i=f.includes(t)?t:f[0],n=N.includes(a)?a:N[0];return Object(r.jsx)("button",{className:"btn ".concat(i," ").concat(n),onClick:s,children:c})},k=(s(33),function(){var e=t.useState(!1),c=Object(v.a)(e,2),s=c[0],a=c[1],i=function(){return a(!1)},l=t.useState(!0),j=Object(v.a)(l,2),b=j[0],o=j[1],d=function(){window.innerWidth<=960?o(!1):o(!0)};return t.useEffect((function(){d()}),[]),window.addEventListener("resize",d),Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{className:"navbar-container",children:[Object(r.jsx)(n.b,{to:"/",className:"navbar-logo",onClick:i,children:"Burbidge"}),Object(r.jsx)("div",{className:"menu-icon",onClick:function(){return a(!s)},children:Object(r.jsx)("i",{className:s?"fas fa-times":"fas fa-bars"})}),Object(r.jsxs)("ul",{className:s?"nav-menu active":"nav-menu",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(n.b,{to:"/",className:"nav-links",onClick:i,children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(n.b,{to:"/events",className:"nav-links",onClick:i,children:"Events"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(n.b,{to:"/vacations",className:"nav-links",onClick:i,children:"Vacations"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(n.b,{to:"/weddings",className:"nav-links",onClick:i,children:"Weddings"})})]}),b&&Object(r.jsx)(g,{buttonSize:"btn--medium",buttonStyle:"btn--outline",children:"REGISTER FOR RAFFLE"})]})})}),_=function(){return Object(r.jsx)("div",{className:"events",children:Object(r.jsx)("h2",{children:"Events"})})},w=function(){return Object(r.jsx)("div",{className:"sign-up",children:Object(r.jsx)("h2",{children:"Signup"})})},C=function(){return Object(r.jsx)("div",{className:"vacations",children:Object(r.jsx)("h2",{children:"Vacations"})})},S=function(){return Object(r.jsx)("div",{className:"weddings",children:Object(r.jsx)("h2",{children:"Weddings"})})},y=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(n.a,{children:[Object(r.jsx)(k,{}),Object(r.jsx)("main",{children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:"/",component:p}),Object(r.jsx)(l.a,{path:"/events",component:_}),Object(r.jsx)(l.a,{path:"/vacations",component:C}),Object(r.jsx)(l.a,{path:"/weddings",component:S}),Object(r.jsx)(l.a,{path:"/signup",component:w})]})})]})})};i.a.render(Object(r.jsx)(y,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.cd10dff6.chunk.js.map