"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[4482],{2822:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return u}});var l,r=a(3366),n=(a(7294),a(4983)),i=a(4295),o=["components"],s={},c=(l="PageDescription",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)}),m={_frontmatter:s},d=i.Z;function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,n.kt)(d,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",null,"Table utilization"),(0,n.kt)(c,{mdxType:"PageDescription"},(0,n.kt)("p",null,"Test test test")))}u.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return P}});var l=a(7294),r=a(8650),n=a.n(r),i=a(5444),o=a(6127),s=a(3321),c=a(5900),m=a.n(c),d=function(e){var t,a=e.title,r=e.theme,n=e.tabs,i=void 0===n?[]:n;return l.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},l.createElement("div",{className:"bx--grid"},l.createElement("div",{className:"bx--row"},l.createElement("div",{className:"bx--col-lg-12"},l.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||r,o=n.baseUrl,s=n.subDirectory,c=o+"/edit/"+n.branch+s+"/src/pages"+t;return o?l.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},l.createElement("div",{className:"bx--col"},l.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(4275),g=a(1721),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),s=a===o,c=new RegExp(o+"/?(#.*)?$"),d=r.replace(c,a);return l.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},l.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return l.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},l.createElement("div",{className:"bx--grid"},l.createElement("div",{className:"bx--row"},l.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},l.createElement("nav",{"aria-label":t},l.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(l.Component),E=b,v=a(2881),f=a(6958),h=a(36),x=function(e){var t=e.date,a=new Date(t);return t?l.createElement(h.X2,{className:"last-modified-date-module--row--XJoYQ"},l.createElement(h.sg,null,l.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},P=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,m=t.frontmatter,g=void 0===m?{}:m,b=t.relativePagePath,h=t.titleType,P=g.tabs,k=g.title,y=g.theme,N=g.description,w=g.keywords,T=g.date,D=(0,f.Z)().interiorTheme,C=(0,i.useStaticQuery)("2456312558").site.pathPrefix,Z=C?r.pathname.replace(C,""):r.pathname,B=P?Z.split("/").filter(Boolean).slice(-1)[0]||n()(P[0],{lower:!0}):"",H=y||D;return l.createElement(s.Z,{tabs:P,homepage:!1,theme:H,pageTitle:k,pageDescription:N,pageKeywords:w,titleType:h},l.createElement(d,{title:c?l.createElement(c,null):k,label:"label",tabs:P,theme:H}),P&&l.createElement(E,{title:k,slug:Z,tabs:P,currentTab:B}),l.createElement(v.Z,{padded:!0},a,l.createElement(u,{relativePagePath:b}),l.createElement(x,{date:T})),l.createElement(p.Z,{pageContext:t,location:r,slug:Z,tabs:P,currentTab:B}),l.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-views-storage-table-utilization-mdx-c0230179510469174688.js.map