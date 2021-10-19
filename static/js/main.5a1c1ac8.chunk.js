(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(9),s=n(2),c=n(1),i=n(0),o=Object(c.createContext)(),r=function(e){var t=e.children,n=Object(c.useState)("dark"),a=Object(s.a)(n,2),r=a[0],l=a[1];Object(c.useEffect)((function(){"dark"===localStorage.getItem("themeName")&&l("dark")}),[]);return Object(i.jsx)(o.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},l="https://www.joris-lefait.com",m="JL",d={name:"Joris Lefait",role:"FullStack developper",description:"I'm Joris. I started my career in programming in 2019 after some years working in chemistry. I was first a front-end developer and then I started learning back-end development with Node.js, Express.js and PostgreSQL. I also work with some Raspberry Pi and am learning basics of cybersecurity.",social:{linkedin:"https://www.linkedin.com/in/joris-lefait-79b7646b/",github:"https://github.com/midayex"}},j=[{name:"SNCF",description:"Rework of the front-end of all ter.sncf.fr websites, in React + Next.js with accessibility constraints, and regions specifiations themes. In a team of 10 peoples sometimes in customer's office, most remotly.",stack:["TypeScript","React","NextJS","MaterialUI","Storybook","Gitlab","JIRA"]},{name:"POC Svelte x Algolia x TailwindCSS",description:"Self training in order to learn some basics of Svelte.js. Development of a quick and basic search engine based on an Algolia sample dataset with TailwindCSS for style.",stack:["Svelte","Algolia","Tailwind"]},{name:"Cevoo",description:"Mobile application entirely dedicated to veterinary auxiliaries. Addition of new features, code update, performance optimization. Implementation of a points system per user according to the actions performed, addition of a duel functionality between users.",stack:["React Native","Node.JS","PostgreSQL","Gitlab","Heroku"]},{name:"POC Shopify webhooks - headless commerce",description:"Catch part of Shopify requests via webhooks on a webservice in Node.js and Prisma in order to have a database of products, categories and customers. The purpose is to have more freedom than with classic Shopify APIs in a context of Headless project creation on the front-end.",stack:["Node.JS","Gitlab"]},{name:"Unsold",description:"Update back-end and API's. Migration of some PostgreSQL requests to Prisma requests for performance improvement.",stack:["Node.JS","Express","Prisma","PostgreSQL","Gitlab","Heroku"]},{name:"RapidFlyer",description:"Redesign of the front-end for the V4 of the Website in Next.js in headless commerce. In a team of 10 people directly at the customer. Development of screens and deployment of revenue phases in direct contact with the customer.",stack:["React","NextJS","Azure","Redux","Redux Saga","StyledComponent"],livePreview:"https://www.rapid-flyer.com/"},{name:"Experiencis",description:"Development of a platform aimed at connecting buyers and individuals in order to carry out remote visits to goods (real estate, automobile, high-tech). In tandem with a technical lead, reinforcement on the Front development part of a Web App in ReactJS.",stack:["React","Material Design"]},{name:"Leroy Merlin",description:"Intervention as a techOps. Management of the fleet of terminals deployed in France in stores and warehouses via an MDM. Deployment of updates and fixes to terminals. Implementation of analytics feedback to monitor the status of deployments and the status of terminals. Development of a monitoring platform for the solutions deployed by the squad. Deployment of solutions via Docker and Kubernetes. Participation in the Google Cloud Challenge for 3 days in partnership with ADEO, project to port a legacy application to a cloud infrastructure. Benchmark of the various MDMs on the market, consultation with terminal manufacturers for fleet renewal.",stack:["Javascript","Python","Shell","Docker","Kubernetes","GCP","Openshift"]},{name:"SuperCollab",description:"As part of the creation of a Start-Up, creation of a Web App allowing the connection between different law firms / notaries.",stack:["React","Docker"],livePreview:"https://supercollab.fr"},{name:"NewDeal",description:"During a partnership between NewDeal and La Mobilery, realization of a mobile application in React Native of an HR management solution (establishment of pay slips, leave requests ...).",stack:["React Native","Typescript"]}],h=[{name:"HTML",source:"https://developer.mozilla.org/en-US/docs/Web/HTML"},{name:"CSS",source:"https://developer.mozilla.org/en-US/docs/Web/CSS"},{name:"JavaScript",source:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{name:"TypeScript",source:"https://www.typescriptlang.org/"},{name:"React",source:"https://reactjs.org/"},{name:"Redux",source:"https://redux.js.org/"},{name:"NextJS",source:"https://nextjs.org/"},{name:"Storybook",source:"https://storybook.js.org/"},{name:"SASS",source:"https://sass-lang.com/"},{name:"MaterialUI",source:"https://mui.com/"},{name:"StyledComponents",source:"https://styled-components.com/"},{name:"Git",source:"https://git-scm.com/"},{name:"CI/CD",source:"https://docs.gitlab.com/ee/ci/"},{name:"Jest",source:"https://jestjs.io/"}],p="contact@joris-lefait.com",u=[{name:"Migrate Node x PostgreSQL to Prisma",path:"assets/migrate-node-postgresql-to-prisma.pdf"},{name:"Add TailwindCSS to Svelte project",path:"assets/add-tailwindcss-to-svelte-project.pdf"},{name:"Homemade npm package",path:"assets/homemade-npm-package.pdf"},{name:"Use private npm package",path:"assets/use-private-npm-package.pdf"},{name:"Implement Algolia Search",path:"assets/implement-algolia-search.pdf"},{name:"Init Node x Express x Prisma project",path:"assets/init-node-express-prisma-project.pdf"}],b=n(14),f=n.n(b),x=n(12),O=n.n(x),g=n(16),k=n.n(g),v=n(15),N=n.n(v),y=Object(c.createContext)(),S=function(e){var t=e.children,n=Object(c.useState)(!1),a=Object(s.a)(n,2),o=a[0],r=a[1];Object(c.useEffect)((function(){!1===localStorage.getItem("displayDocumentation")&&r(!1)}),[]);return Object(i.jsx)(y.Provider,{value:[{displayDocumentation:o,toggleDocumentation:function(e){localStorage.setItem("displayDocumentation",e),r(e)}}],children:t})},w=(n(26),function(){var e=Object(c.useContext)(o),t=Object(s.a)(e,1)[0],n=t.themeName,a=t.toggleTheme,r=Object(c.useContext)(y),l=Object(s.a)(r,1)[0],m=l.displayDocumentation,d=l.toggleDocumentation,u=Object(c.useState)(!1),b=Object(s.a)(u,2),x=b[0],g=b[1],v=function(){return g(!x)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:x?"flex":null},className:"nav__list",children:[m?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"/",onClick:function(){v()},className:"link link--nav cursor",children:"home"})}):Object(i.jsxs)(i.Fragment,{children:[j.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:function(){d(!1),v()},className:"link link--nav",children:"Projects"})}):null,h.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:function(){d(!1),v()},className:"link link--nav",children:"Skills"})}):null,p?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:function(){d(!1),v()},className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("span",{href:"",onClick:function(){d(!0),window.history.pushState("","Documentation","/doc"),v()},className:"link link--nav cursor",children:"Documentation"})})]}),Object(i.jsx)("button",{type:"button",onClick:a,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(i.jsx)(O.a,{}):Object(i.jsx)(f.a,{})}),Object(i.jsx)("button",{type:"button",onClick:v,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:x?Object(i.jsx)(N.a,{}):Object(i.jsx)(k.a,{})})]})}),_=(n(32),function(){var e=l,t=m;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(w,{})]})}),C=n(10),D=n.n(C),I=n(17),P=n.n(I),R=(n(33),function(){var e=d.name,t=d.role,n=d.description,a=d.resume,s=d.social;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsx)("h1",{children:Object(i.jsx)("span",{className:"about__name",children:e})}),t&&Object(i.jsx)("h2",{className:"about__role",children:t}),Object(i.jsx)("p",{className:"about__desc",children:n&&n}),Object(i.jsxs)("div",{className:"about__contact center",children:[a&&Object(i.jsx)("a",{href:a,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(i.jsxs)(i.Fragment,{children:[s.github&&Object(i.jsx)("a",{href:s.github,target:"_blank","aria-label":"github",className:"link link--icon",children:Object(i.jsx)(D.a,{})}),s.linkedin&&Object(i.jsx)("a",{href:s.linkedin,target:"_blank","aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(P.a,{})})]})]})]})}),J=n(7),A=n.n(J),M=n(18),L=n.n(M),T=(n(35),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},A()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(D.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(L.a,{})})]})}),E=(n(36),function(){return j.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:j.map((function(e){return Object(i.jsx)(T,{project:e},A()())}))})]}):null}),U=(n(37),function(){return h.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:h.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:Object(i.jsx)("a",{href:e.source,target:"_blank",children:e.name})},A()())}))})]}):null}),z=n(19),F=n.n(z),H=(n(38),function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=function(){return window.pageYOffset>500?a(!0):a(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(F.a,{fontSize:"large"})})}):null}),q=(n(39),function(){return p?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(p),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),G=(n(40),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsxs)("p",{className:"footer__link",children:["Template created By"," ",Object(i.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link",children:"Raj Shekhar"})," ","and customized by myself."]})})}),W=(n(41),function(){return Object(i.jsxs)("div",{className:"section documentation",id:"documentation",children:[Object(i.jsx)("h2",{className:"section__title",children:"Documentation"}),Object(i.jsx)("p",{className:"documentation__desc",children:"Here are some docs I wrote during projects or proof of concept. You can download them in pdf, I hope they will help you !"}),Object(i.jsx)("ul",{className:"documentation__list",children:u.map((function(e,t){return Object(i.jsx)("li",{className:"documentation__list__item",children:Object(i.jsxs)("a",{href:e.path,target:"_blank",children:[">"," ",e.name]})},e.name+t)}))})]})}),Q=(n(42),function(){var e=Object(c.useContext)(o),t=Object(s.a)(e,1)[0].themeName,n=Object(c.useContext)(y),a=Object(s.a)(n,1)[0].displayDocumentation;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(_,{}),a?Object(i.jsx)(W,{}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(R,{}),Object(i.jsx)(U,{}),Object(i.jsx)(E,{}),Object(i.jsx)(q,{})]}),Object(i.jsx)(H,{}),Object(i.jsx)(G,{})]})});n(43);Object(a.render)(Object(i.jsx)(r,{children:Object(i.jsx)(S,{children:Object(i.jsx)(Q,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.5a1c1ac8.chunk.js.map