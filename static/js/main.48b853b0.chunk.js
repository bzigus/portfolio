(this["webpackJsonpjanleigh.github.io"]=this["webpackJsonpjanleigh.github.io"]||[]).push([[0],{41:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var c=s(9),a=s.n(c),n=s(10),i=s(2),r=s(4),l=s(0),j=s(5),o=s(1),b=function(){var e=Object(l.useState)(!1),t=Object(r.a)(e,2),s=t[0],c=t[1];return Object(o.jsxs)("nav",{className:"navbar",role:"navigation",children:[Object(o.jsx)("div",{className:"navbar-brand",children:Object(o.jsxs)("a",{onClick:function(){c(!s)},role:"button",className:"navbar-burger burger ".concat(s?"is-active":""),"aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",children:[Object(o.jsx)("span",{"aria-hidden":"true"}),Object(o.jsx)("span",{"aria-hidden":"true"}),Object(o.jsx)("span",{"aria-hidden":"true"})]})}),Object(o.jsx)("div",{id:"navbar-menu",className:"navbar-menu ".concat(s?"is-active":""),children:Object(o.jsxs)("div",{className:"navbar-start",children:[Object(o.jsx)(j.Link,{to:"introduction",smooth:!0,className:"navbar-item",children:"Home"}),Object(o.jsx)(j.Link,{to:"about",smooth:!0,className:"navbar-item",children:"About"}),Object(o.jsx)(j.Link,{to:"projects",smooth:!0,className:"navbar-item",children:"Projects"})]})})]})},d=s(23),h=s.n(d),m=function(){return Object(o.jsx)("section",{id:"introduction",className:"introduction section is-medium",children:Object(o.jsx)("div",{className:"introduction-container container",children:Object(o.jsx)("div",{className:"columns",children:Object(o.jsx)("div",{className:"column is-12",children:Object(o.jsx)(h.a,{animateIn:"animate__slideInUp",animateOnce:!0,children:Object(o.jsxs)("div",{className:"content",style:{textAlign:"center"},children:[Object(o.jsxs)("h1",{className:"title",children:["Hello, I'm ",Object(o.jsx)("span",{className:"blue-text",children:"Jan Leigh"}),"."]}),Object(o.jsx)("p",{className:"description",children:"An Filipino full-stack web developer."}),Object(o.jsxs)(j.Link,{to:"about",smooth:!0,className:"button",children:["View More",Object(o.jsx)("span",{children:"\u2192"})]})]})})})})})})},u=s(18),x=s.n(u),O=s(24),p=s(12),g=function(e){var t=function(e,t){var s=Object(l.useState)({}),c=Object(r.a)(s,2),a=c[0],n=c[1],i=Object(l.useState)(!1),j=Object(r.a)(i,2),o=j[0],b=j[1],d=Object(l.useState)(!0),h=Object(r.a)(d,2),m=h[0],u=h[1];return Object(l.useEffect)((function(){u(!0),fetch("https://api.github.com/repos/".concat(e,"/").concat(t),{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,t.json();case 3:e.t1=e.sent,(0,e.t0)(e.t1),u(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){b(!0),u(!1)}))}),[t]),[a,o,m]}(e.username,e.repository),s=Object(r.a)(t,3),c=s[0],a=(s[1],s[2]);if(c.name||(c.name="I'm a placeholder!"),c.description||(c.description="You are seeing this cause you are rate limited."),c.html_url||(c.html_url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"),c.language||(c.language="GitHub"),c.stargazers_count||(c.stargazers_count=69),a)return Object(o.jsx)("div",{className:"card",children:Object(o.jsx)("div",{className:"card-content",children:Object(o.jsx)("div",{className:"repo-description",children:Object(o.jsx)("p",{children:"Loading..."})})})});var n=function(e){switch(e||(e="github"),e.toLowerCase()){case"shell":e="bash";break;case"scss":e="css3"}return"devicon-".concat(e.toLowerCase(),"-plain")}(c.language);return Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("div",{className:"repo-title",children:Object(o.jsxs)("a",{href:c.html_url,target:"_blank",children:[Object(o.jsx)(p.b,{size:16})," ",c.name]})}),Object(o.jsxs)("div",{className:"repo-description",children:[Object(o.jsx)("p",{children:c.description}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{style:{display:"flex"},children:[Object(o.jsxs)("div",{style:{marginRight:"12px"},children:[Object(o.jsx)("i",{className:n}),"  ",c.language]}),Object(o.jsxs)("div",{style:{marginRight:"12px"},children:[Object(o.jsx)(p.c,{size:16})," ",c.stargazers_count]}),Object(o.jsxs)("div",{style:{marginRight:"12px"},children:[Object(o.jsx)(p.a,{size:16})," ",c.archived?"Archived":"Maintained"]})]})]})]})})},v=function(){return Object(o.jsx)("section",{id:"projects",className:"projects section is-medium",children:Object(o.jsxs)("div",{className:"projects-container",children:[Object(o.jsx)("h1",{children:"Projects"}),Object(o.jsxs)("div",{className:"columns",children:[Object(o.jsxs)("div",{className:"column is-6",children:[Object(o.jsx)(g,{username:"janleigh",repository:"dotfiles"}),Object(o.jsx)(g,{username:"janleigh",repository:"trace.moe.ts"})]}),Object(o.jsxs)("div",{className:"column is-half",children:[Object(o.jsx)(g,{username:"janleigh",repository:"janleigh.github.io"}),Object(o.jsx)(g,{username:"janleigh",repository:"mpd-discord-rpc"})]})]}),Object(o.jsx)("h1",{children:"Commissions"}),Object(o.jsx)("div",{className:"colums",children:Object(o.jsx)("div",{className:"column is-full",children:Object(o.jsxs)("p",{style:{textAlign:"center",fontSize:"1.2rem"},children:["Hm. Well, this is awkward. There seems nothing in here.",Object(o.jsx)("br",{}),"You can always commission me ",Object(o.jsx)("a",{href:"http://ko-fi.com/janleigh/commissions",children:"here"}),"."]})})})]})})},N=function(){return Object(o.jsx)("section",{id:"about",className:"about section is-medium",children:Object(o.jsxs)("div",{className:"about-container container",children:[Object(o.jsx)("h1",{className:"title",children:"About"}),Object(o.jsxs)("div",{className:"columns",children:[Object(o.jsxs)("div",{className:"column is-2",children:[Object(o.jsx)("a",{href:"https://github.com/KizuWasTaken",target:"_blank",className:"button btn-alt",children:"GitHub"}),Object(o.jsx)("a",{href:"https://twitter.com/KizuWasTaken",target:"_blank",className:"button btn-alt",children:"Twitter"}),Object(o.jsx)("a",{href:"https://discord.com/users/380307921952833537",target:"_blank",className:"button btn-alt",children:"Discord"}),Object(o.jsx)("a",{href:"mailto:therealkizu.protonmail.com",className:"button btn-alt",children:"Email Me"})]}),Object(o.jsx)("div",{className:"column is-8",children:Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("p",{children:["Hello! I am a Filipino senior high school student an a self-taught full-stack developer.",Object(o.jsx)("br",{}),"My real name is ",Object(o.jsx)("span",{className:"blue-text",children:"Jan Leigh"})," but I prefer the name ",Object(o.jsx)("span",{className:"blue-text",children:"Kizu"})," on the internet.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"I have been programming for about ",Object(o.jsx)("span",{className:"blue-text",children:"4 years"})," now.",Object(o.jsx)("br",{}),"Here is my current stack:",Object(o.jsxs)("div",{className:"columns",style:{marginTop:"1%"},children:[Object(o.jsxs)("div",{className:"column is-3",children:[Object(o.jsx)("h6",{children:"Languages"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"TypeScript"}),Object(o.jsx)("li",{children:"JavaScript"}),Object(o.jsx)("li",{children:"Lua"})]})]}),Object(o.jsxs)("div",{className:"column is-3",children:[Object(o.jsx)("h6",{children:"Frameworks"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"React.js"}),Object(o.jsx)("li",{children:"Node.js"}),Object(o.jsx)("li",{children:"Bulma"}),Object(o.jsx)("li",{children:"Sass"})]})]}),Object(o.jsxs)("div",{className:"column is-3",children:[Object(o.jsx)("h6",{children:"Databases"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"MongoDB"}),Object(o.jsx)("li",{children:"MySQL"})]})]})]})]})})})]})]})})},f=function(){return Object(o.jsx)("footer",{id:"footer",className:"footer",children:Object(o.jsx)("div",{className:"content has-text-centered",children:Object(o.jsxs)("p",{children:["Powered using ",Object(o.jsx)("a",{href:"https://bulma.io",children:"Bulma"})," and ",Object(o.jsx)("a",{href:"https://reactjs.org",children:"React"}),".",Object(o.jsx)("br",{}),"Copyright \xa9 2021 TheRealKizu. All Rights Reserved."]})})})},y=function(){return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(b,{}),Object(o.jsx)(m,{}),Object(o.jsx)(N,{}),Object(o.jsx)(v,{}),Object(o.jsx)(f,{})]})},k=function(){return Object(o.jsx)("section",{id:"not-found",className:"not-found section is-small",children:Object(o.jsxs)("div",{className:"not-found-container container",children:[Object(o.jsx)("h1",{className:"not-found-title",children:"404"}),Object(o.jsxs)("p",{className:"not-found-description",children:["The page you are looking for does not exist.",Object(o.jsx)("br",{}),"You can always go back to the homepage by clicking ",Object(o.jsx)(n.b,{to:"/",target:"_blank",className:"link",children:"me!"})]})]})})};s(40),s(41);a.a.render(Object(o.jsx)(n.a,{children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"*",element:Object(o.jsx)(k,{})}),Object(o.jsx)(i.a,{path:"/",element:Object(o.jsx)(y,{})}),Object(o.jsx)(i.a,{path:"/404",element:Object(o.jsx)(k,{})})]})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.48b853b0.chunk.js.map