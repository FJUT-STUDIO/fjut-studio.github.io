(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(4),a=n.n(r),l=n(208),c=(n(48),n(147),n(7)),s=n.n(c),p=(n(146),n(142)),u=n.n(p),d=n(148),f=n(144),m=n(141),g=n(143);function h(){var e=u()(["font-size: 40px;"]);return h=function(){return e},e}function b(){var e=u()(["font-size: 50px;"]);return b=function(){return e},e}function x(){var e=u()(["font-size: 60px;"]);return x=function(){return e},e}function v(){var e=u()(["font-size: 70px;"]);return v=function(){return e},e}function y(){var e=u()(["font-size: 40px;"]);return y=function(){return e},e}function w(){var e=u()(["font-size: 50px;"]);return w=function(){return e},e}function _(){var e=u()(["font-size: 60px;"]);return _=function(){return e},e}function j(){var e=u()(["font-size: 70px;"]);return j=function(){return e},e}function C(){var e=u()(["font-size: ",";"]);return C=function(){return e},e}function E(){var e=u()(["font-size: ",";"]);return E=function(){return e},e}function k(){var e=u()(["padding-top: 150px;"]);return k=function(){return e},e}var I=Object(m.c)(g.f).withConfig({displayName:"hero__HeroContainer",componentId:"sc-17z9avy-0"})(["",";flex-direction:column;align-items:flex-start;min-height:100vh;",";div{width:100%;}"],g.h.flexCenter,g.g.tablet(k())),z=m.c.h1.withConfig({displayName:"hero__Hi",componentId:"sc-17z9avy-1"})(["color:",";margin:0 0 20px 3px;font-size:",";font-family:",";font-weight:normal;",";",";"],g.i.colors.green,g.i.fontSizes.medium,g.i.fonts.SFMono,g.g.desktop(E(),g.i.fontSizes.small),g.g.tablet(C(),g.i.fontSizes.smallish)),N=m.c.h2.withConfig({displayName:"hero__Name",componentId:"sc-17z9avy-2"})(["font-size:80px;line-height:1.1;margin:0;",";",";",";",";"],g.g.desktop(j()),g.g.tablet(_()),g.g.phablet(w()),g.g.phone(y())),S=m.c.h3.withConfig({displayName:"hero__Subtitle",componentId:"sc-17z9avy-3"})(["font-size:80px;line-height:1.1;color:",";",";",";",";",";"],g.i.colors.slate,g.g.desktop(v()),g.g.tablet(x()),g.g.phablet(b()),g.g.phone(h())),T=m.c.div.withConfig({displayName:"hero__Blurb",componentId:"sc-17z9avy-4"})(["margin-top:25px;width:50%;max-width:500px;a{",";}"],g.h.inlineLink),M=m.c.a.withConfig({displayName:"hero__EmailLink",componentId:"sc-17z9avy-5"})(["",";font-size:",";margin-top:50px;"],g.h.bigButton,g.i.fontSizes.smallish),L=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))||this).state={isMounted:!1},t}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;setTimeout(function(){return e.setState({isMounted:!0})},1e3)},n.render=function(){var e=this.props.data,t=this.state.isMounted,n=e[0].node,i=n.frontmatter,r=n.html,a=[function(){return o.a.createElement(z,{style:{transitionDelay:"100ms"}},i.title)},function(){return o.a.createElement(N,{style:{transitionDelay:"200ms"}},i.name,".")},function(){return o.a.createElement(S,{style:{transitionDelay:"300ms"}},i.subtitle)},function(){return o.a.createElement(T,{style:{transitionDelay:"400ms"},dangerouslySetInnerHTML:{__html:r}})},function(){return o.a.createElement("div",{style:{transitionDelay:"500ms"}},o.a.createElement(M,{href:"mailto:"+f.email},"Get In Touch"))}];return o.a.createElement(I,null,o.a.createElement(d.TransitionGroup,null,t&&a.map(function(e,t){return o.a.createElement(d.CSSTransition,{key:t,classNames:"fadeup",timeout:3e3},e)})))},t}(i.Component);L.propTypes={data:a.a.array.isRequired};var O=L,A=n(207),R=n.n(A),P=n(150);function F(){var e=u()(["width: 70%;"]);return F=function(){return e},e}function D(){var e=u()(["margin: 60px auto 0;"]);return D=function(){return e},e}function H(){var e=u()(["width: 100%;"]);return H=function(){return e},e}function G(){var e=u()(["display: block;"]);return G=function(){return e},e}var B=Object(m.c)(g.f).withConfig({displayName:"about__AboutContainer",componentId:"sc-1wexrvx-0"})(["position:relative;"]),q=m.c.div.withConfig({displayName:"about__FlexContainer",componentId:"sc-1wexrvx-1"})(["",";align-items:flex-start;",";"],g.h.flexBetween,g.g.tablet(G())),W=m.c.div.withConfig({displayName:"about__ContentContainer",componentId:"sc-1wexrvx-2"})(["width:60%;max-width:480px;",";a{",";}"],g.g.tablet(H()),g.h.inlineLink),J=m.c.ul.withConfig({displayName:"about__SkillsContainer",componentId:"sc-1wexrvx-3"})(["display:grid;grid-template-columns:repeat(2,minmax(140px,200px));overflow:hidden;margin-top:20px;"]),Y=m.c.li.withConfig({displayName:"about__Skill",componentId:"sc-1wexrvx-4"})(["position:relative;margin-bottom:10px;padding-left:20px;font-family:",";font-size:",";color:",";&:before{content:'▹';position:absolute;left:0;color:",";font-size:",";line-height:12px;}"],g.i.fonts.SFMono,g.i.fontSizes.smallish,g.i.colors.slate,g.i.colors.green,g.i.fontSizes.small),V=m.c.div.withConfig({displayName:"about__PicContainer",componentId:"sc-1wexrvx-5"})(["position:relative;width:40%;max-width:300px;margin-left:60px;",";",";"],g.g.tablet(D()),g.g.phablet(F())),X=Object(m.c)(R.a).withConfig({displayName:"about__Avatar",componentId:"sc-1wexrvx-6"})(["position:relative;mix-blend-mode:multiply;filter:grayscale(100%) contrast(1);border-radius:",";transition:",";"],g.i.borderRadius,g.i.transition),K=m.c.div.withConfig({displayName:"about__AvatarContainer",componentId:"sc-1wexrvx-7"})(["width:100%;position:relative;border-radius:",";background-color:",";margin-left:-20px;&:hover,&:focus{background:transparent;&:after{top:15px;left:15px;}","{filter:none;mix-blend-mode:normal;}}&:before,&:after{content:'';display:block;position:absolute;width:100%;height:100%;border-radius:",";transition:",";}&:before{top:0;left:0;right:0;bottom:0;background-color:",";mix-blend-mode:screen;}&:after{border:2px solid ",";top:20px;left:20px;z-index:-1;}"],g.i.borderRadius,g.i.colors.green,X,g.i.borderRadius,g.i.transition,g.i.colors.navy,g.i.colors.green),Q=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(P.a)().reveal(this.about,Object(f.srConfig)())},n.render=function(){var e=this,t=this.props.data[0].node,n=t.frontmatter,i=t.html,r=n.title,a=n.skills,l=n.avatar;return o.a.createElement(B,{id:"about",ref:function(t){return e.about=t}},o.a.createElement(g.c,null,r),o.a.createElement(q,null,o.a.createElement(W,null,o.a.createElement("p",{dangerouslySetInnerHTML:{__html:i}}),o.a.createElement(J,null,a&&a.map(function(e,t){return o.a.createElement(Y,{key:t},e)}))),o.a.createElement(V,null,o.a.createElement(K,null,o.a.createElement(X,{fluid:l.childImageSharp.fluid,alt:"Avatar"})))))},t}(i.Component);Q.propTypes={data:a.a.array.isRequired};var U=Q;n(206);function Z(){var e=u()(["padding-left: 0;"]);return Z=function(){return e},e}function $(){var e=u()(["padding-left: 20px;"]);return $=function(){return e},e}function ee(){var e=u()(["\n    width: 100%;\n    max-width: ","px;\n    height: 2px;\n    top: auto;\n    bottom: 0;\n    transform: translateX(\n      ","px\n    );\n  "]);return ee=function(){return e},e}function te(){var e=u()(["\n    ",";\n    padding: 0 15px;\n    text-align: center;\n    border-left: 0;\n    border-bottom: 2px solid ",";\n    min-width: 120px;\n  "]);return te=function(){return e},e}function ne(){var e=u()(["padding: 0 15px 2px;"]);return ne=function(){return e},e}function ie(){var e=u()(["\n    display: flex;\n    margin-bottom: 30px;\n    width: 100%;\n    overflow-x: scroll;\n  "]);return ie=function(){return e},e}function oe(){var e=u()(["display: block;"]);return oe=function(){return e},e}var re=Object(m.c)(g.f).withConfig({displayName:"jobs__JobsContainer",componentId:"sc-13kygjg-0"})(["position:relative;max-width:700px;"]),ae=m.c.div.withConfig({displayName:"jobs__TabsContainer",componentId:"sc-13kygjg-1"})(["display:flex;align-items:flex-start;position:relative;",";"],g.g.thone(oe())),le=m.c.div.withConfig({displayName:"jobs__Tabs",componentId:"sc-13kygjg-2"})(["display:block;position:relative;width:max-content;z-index:3;",";"],g.g.thone(ie())),ce=m.c.button.withConfig({displayName:"jobs__Tab",componentId:"sc-13kygjg-3"})(["",";display:flex;align-items:center;width:100%;background-color:transparent;height:","px;padding:0 20px 2px;transition:",";border-left:2px solid ",";text-align:left;white-space:nowrap;font-family:",";font-size:",";color:",";",";",";&:hover,&:focus{background-color:",";}"],g.h.link,g.i.tabHeight,g.i.transition,g.i.colors.darkGrey,g.i.fonts.SFMono,g.i.fontSizes.smallish,function(e){return e.isActive?g.i.colors.green:g.i.colors.lightGrey},g.g.tablet(ne()),g.g.thone(te(),g.h.flexCenter,g.i.colors.darkGrey),g.i.colors.lightNavy),se=m.c.span.withConfig({displayName:"jobs__Highlighter",componentId:"sc-13kygjg-4"})(["display:block;background:",";width:2px;height:","px;border-radius:",";position:absolute;top:0;left:0;transition:",";transition-delay:0.1s;z-index:10;transform:translateY( ","px );",";"],g.i.colors.green,g.i.tabHeight,g.i.borderRadius,g.i.transition,function(e){return e.activeTabId>0?e.activeTabId*g.i.tabHeight:0},g.g.thone(ee(),g.i.tabWidth,function(e){return e.activeTabId>0?e.activeTabId*g.i.tabWidth:0})),pe=m.c.div.withConfig({displayName:"jobs__ContentContainer",componentId:"sc-13kygjg-5"})(["position:relative;padding-top:14px;padding-left:30px;flex-grow:1;",";",";"],g.g.tablet($()),g.g.thone(Z())),ue=m.c.div.withConfig({displayName:"jobs__TabContent",componentId:"sc-13kygjg-6"})(["top:0;left:0;width:100%;height:auto;opacity:",";z-index:",";position:",";visibility:",";transition:",";transition-duration:",";ul{padding:0;margin:0;list-style:none;font-size:",";li{position:relative;padding-left:30px;margin-bottom:5px;&:before{content:'▹';position:absolute;left:0;color:",";line-height:",";}}}a{",";}"],function(e){return e.isActive?1:0},function(e){return e.isActive?2:-1},function(e){return e.isActive?"relative":"absolute"},function(e){return e.isActive?"visible":"hidden"},g.i.transition,function(e){return e.isActive?"0.5s":"0s"},g.i.fontSizes.large,g.i.colors.green,g.i.fontSizes.xlarge,g.h.inlineLink),de=m.c.h4.withConfig({displayName:"jobs__JobTitle",componentId:"sc-13kygjg-7"})(["color:",";font-size:",";font-weight:500;margin-bottom:5px;"],g.i.colors.lightestSlate,g.i.fontSizes.xxlarge),fe=m.c.span.withConfig({displayName:"jobs__Company",componentId:"sc-13kygjg-8"})(["color:",";"],g.i.colors.green),me=m.c.h5.withConfig({displayName:"jobs__JobDetails",componentId:"sc-13kygjg-9"})(["font-family:",";font-size:",";font-weight:normal;letter-spacing:0.5px;color:",";margin-bottom:30px;svg{width:15px;}"],g.i.fonts.SFMono,g.i.fontSizes.smallish,g.i.colors.lightSlate),ge=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))||this).state={activeTabId:0},t.isActive=function(e){return t.state.activeTabId===e},t.setActiveTab=function(e){return t.setState({activeTabId:e})},t}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(P.a)().reveal(this.jobs,Object(f.srConfig)())},n.render=function(){var e=this,t=this.state.activeTabId,n=this.props.data;return o.a.createElement(re,{id:"jobs",ref:function(t){return e.jobs=t}},o.a.createElement(g.c,null,"Where I've Worked"),o.a.createElement(ae,null,o.a.createElement(le,{role:"tablist"},n&&n.map(function(t,n){var i=t.node.frontmatter.company;return o.a.createElement(ce,{key:n,isActive:e.isActive(n),onClick:function(t){return e.setActiveTab(n,t)},role:"tab","aria-selected":e.isActive(n)?"true":"false","aria-controls":"tab"+n,id:"tab"+n,tabIndex:e.isActive(n)?"0":"-1"},o.a.createElement("span",null,i))}),o.a.createElement(se,{activeTabId:t})),o.a.createElement(pe,null,n&&n.map(function(t,n){var i=t.node,r=i.frontmatter,a=i.html,l=r.title,c=r.url,s=r.company,p=r.range;return o.a.createElement(ue,{key:n,isActive:e.isActive(n),id:"job"+n,role:"tabpanel",tabIndex:"0","aria-labelledby":"job"+n,"aria-hidden":!e.isActive(n)},o.a.createElement(de,null,o.a.createElement("span",null,l),o.a.createElement(fe,null," @ ",o.a.createElement("a",{href:c,target:"_blank",rel:"nofollow noopener noreferrer"},s))),o.a.createElement(me,null,o.a.createElement("span",null,p)),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:a}}))}))))},t}(i.Component);ge.propTypes={data:a.a.array.isRequired};var he=ge,be=(n(75),n(76),n(149));function xe(){var e=u()(["\n        grid-column: 1 / -1;\n        opacity: 0.25;\n      "]);return xe=function(){return e},e}function ve(){var e=u()(["height: 100%;"]);return ve=function(){return e},e}function ye(){var e=u()(["padding: 30px 25px 20px;"]);return ye=function(){return e},e}function we(){var e=u()(["\n        grid-column: 1 / -1;\n        padding: 40px 40px 30px;\n      "]);return we=function(){return e},e}function _e(){var e=u()(["margin-bottom: 70px;"]);return _e=function(){return e},e}function je(){var e=u()(["\n    grid-column: 1 / -1;\n    opacity: 0.25;\n  "]);return je=function(){return e},e}function Ce(){var e=u()(["height: 100%;"]);return Ce=function(){return e},e}function Ee(){var e=u()(["\n    object-fit: cover;\n    width: auto;\n    height: 100%;\n    filter: grayscale(100%) contrast(1) brightness(80%);\n  "]);return Ee=function(){return e},e}function ke(){var e=u()(["\n      color: ",";\n      margin-right: 10px;\n    "]);return ke=function(){return e},e}function Ie(){var e=u()(["\n    background-color: transparent;\n    padding: 20px 0;\n  "]);return Ie=function(){return e},e}function ze(){var e=u()(["display: block;"]);return ze=function(){return e},e}function Ne(){var e=u()(["font-size: 24px;"]);return Ne=function(){return e},e}function Se(){var e=u()(["padding: 30px 25px 20px;"]);return Se=function(){return e},e}function Te(){var e=u()(["\n    grid-column: 1 / -1;\n    padding: 40px 40px 30px;\n  "]);return Te=function(){return e},e}var Me=Object(m.c)(g.f).withConfig({displayName:"featured__FeaturedContainer",componentId:"sc-1wogb0y-0"})(["",";flex-direction:column;align-items:flex-start;"],g.h.flexCenter),Le=m.c.div.withConfig({displayName:"featured__FeaturedGrid",componentId:"sc-1wogb0y-1"})(["position:relative;"]),Oe=m.c.div.withConfig({displayName:"featured__ContentContainer",componentId:"sc-1wogb0y-2"})(["position:relative;z-index:2;grid-column:1 / 7;grid-row:1 / -1;",";",";"],g.g.thone(Te()),g.g.phablet(Se())),Ae=m.c.h4.withConfig({displayName:"featured__FeaturedLabel",componentId:"sc-1wogb0y-3"})(["font-size:",";font-weight:normal;color:",";font-family:",";margin-top:10px;padding-top:0;"],g.i.fontSizes.smallish,g.i.colors.green,g.i.fonts.SFMono),Re=m.c.h5.withConfig({displayName:"featured__ProjectName",componentId:"sc-1wogb0y-4"})(["font-size:28px;font-weight:600;margin:0 0 20px;color:",";",";a{",";}"],g.i.colors.lightestSlate,g.g.tablet(Ne()),g.g.tablet(ze())),Pe=m.c.div.withConfig({displayName:"featured__ProjectDescription",componentId:"sc-1wogb0y-5"})(["background-color:",";color:",";padding:20px;border-radius:",";font-size:17px;line-height:1.3;",";p{margin:0;}a{",";color:",";}"],g.i.colors.lightNavy,g.i.colors.lightSlate,g.i.borderRadius,g.g.thone(Ie()),g.h.inlineLink,g.i.colors.white),Fe=m.c.ul.withConfig({displayName:"featured__TechList",componentId:"sc-1wogb0y-6"})(["display:flex;flex-wrap:wrap;margin:25px 0 10px;li{font-family:",";font-size:",";color:",";margin-right:",";margin-bottom:7px;white-space:nowrap;&:last-of-type{margin-right:0;}",";}"],g.i.fonts.SFMono,g.i.fontSizes.smallish,g.i.colors.lightSlate,g.i.margin,g.g.thone(ke(),g.i.colors.lightestSlate)),De=m.c.div.withConfig({displayName:"featured__Links",componentId:"sc-1wogb0y-7"})(["display:flex;align-items:center;position:relative;margin-top:10px;margin-left:-10px;a{padding:10px;svg{width:22px;height:22px;}}"]),He=Object(m.c)(R.a).withConfig({displayName:"featured__FeaturedImg",componentId:"sc-1wogb0y-8"})(["width:100%;max-width:100%;vertical-align:middle;border-radius:",";position:relative;mix-blend-mode:multiply;filter:grayscale(100%) contrast(1) brightness(90%);",";}"],g.i.borderRadius,g.g.tablet(Ee())),Ge=m.c.div.withConfig({displayName:"featured__ImgContainer",componentId:"sc-1wogb0y-9"})(["position:relative;z-index:1;border-radius:",";background-color:",";border-radius:2px;grid-column:6 / -1;grid-row:1 / -1;transition:",";",";",";&:hover,&:focus{background:transparent;&:before,","{background:transparent;filter:none;}}&:before{content:'';position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:3;transition:",";background-color:",";mix-blend-mode:screen;}"],g.i.borderRadius,g.i.colors.green,g.i.transition,g.g.tablet(Ce()),g.g.thone(je()),He,g.i.transition,g.i.colors.navy),Be=m.c.div.withConfig({displayName:"featured__Project",componentId:"sc-1wogb0y-10"})(["display:grid;grid-gap:10px;grid-template-columns:repeat(12,1fr);align-items:center;margin-bottom:100px;",";&:last-of-type{margin-bottom:0;}&:nth-of-type(odd){","{grid-column:7 / -1;text-align:right;",";",";}","{justify-content:flex-end;li{margin-left:",";margin-right:0;}}","{justify-content:flex-end;margin-left:0;margin-right:-10px;}","{grid-column:1 / 8;",";",";}}"],g.g.thone(_e()),Oe,g.g.thone(we()),g.g.phablet(ye()),Fe,g.i.margin,De,Ge,g.g.tablet(ve()),g.g.thone(xe())),qe=function(e){function t(t){var n;return(n=e.call(this,t)||this).revealRefs=[],n}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(P.a)().reveal(this.featured,Object(f.srConfig)()),this.revealRefs.forEach(function(e){return Object(P.a)().reveal(e,Object(f.srConfig)())})},n.render=function(){var e=this,t=this.props.data;return o.a.createElement(Me,{id:"projects"},o.a.createElement(g.c,{ref:function(t){return e.featured=t}},"Some Things I've Built"),o.a.createElement(Le,null,t&&t.map(function(t,n){var i=t.node,r=i.frontmatter,a=i.html,l=r.external,c=r.title,s=r.tech,p=r.github,u=r.cover;return o.a.createElement(Be,{key:n,ref:function(t){return e.revealRefs[n]=t}},o.a.createElement(Oe,null,o.a.createElement(Ae,null,"Featured Project"),o.a.createElement(Re,null,l?o.a.createElement("a",{href:l,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},c):c),o.a.createElement(Pe,{dangerouslySetInnerHTML:{__html:a}}),s&&o.a.createElement(Fe,null,s.map(function(e,t){return o.a.createElement("li",{key:t},e)})),o.a.createElement(De,null,p&&o.a.createElement("a",{href:p,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Github Link"},o.a.createElement(be.d,null)),l&&o.a.createElement("a",{href:l,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},o.a.createElement(be.b,null)))),o.a.createElement(Ge,null,o.a.createElement(He,{fluid:u.childImageSharp.fluid})))})))},t}(i.Component);qe.propTypes={data:a.a.array.isRequired};var We=qe;n(77);function Je(){var e=u()(["grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));"]);return Je=function(){return e},e}function Ye(){var e=u()(["font-size: 24px;"]);return Ye=function(){return e},e}var Ve=Object(m.c)(g.f).withConfig({displayName:"projects__ProjectsContainer",componentId:"sc-12h64lj-0"})(["",";flex-direction:column;align-items:flex-start;"],g.h.flexCenter),Xe=m.c.h4.withConfig({displayName:"projects__ProjectsTitle",componentId:"sc-12h64lj-1"})(["margin:0 auto 50px;font-size:",";",";a{display:block;}"],g.i.fontSizes.h3,g.g.tablet(Ye())),Ke=m.c.div.withConfig({displayName:"projects__ProjectsGrid",componentId:"sc-12h64lj-2"})([".projects{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;position:relative;",";}"],g.g.desktop(Je())),Qe=m.c.div.withConfig({displayName:"projects__ProjectInner",componentId:"sc-12h64lj-3"})(["",";flex-direction:column;align-items:flex-start;position:relative;padding:25px;height:100%;border-radius:",";transition:",";background-color:",";"],g.h.flexBetween,g.i.borderRadius,g.i.transition,g.i.colors.lightNavy),Ue=m.c.div.withConfig({displayName:"projects__Project",componentId:"sc-12h64lj-4"})(["transition:",";&:hover,&:focus{","{transform:translateY(-5px);box-shadow:0 2px 4px ",";box-shadow:0 19px 38px "," 0 15px 12px ",";}}"],g.i.transition,Qe,g.i.colors.shadowNavy,g.i.colors.darkestNavy,g.i.colors.shadowNavy),Ze=m.c.div.withConfig({displayName:"projects__ProjectTop",componentId:"sc-12h64lj-5"})([""]),$e=m.c.div.withConfig({displayName:"projects__ProjectBottom",componentId:"sc-12h64lj-6"})([""]),et=m.c.div.withConfig({displayName:"projects__ProjectHeader",componentId:"sc-12h64lj-7"})(["",";margin-bottom:30px;"],g.h.flexBetween),tt=m.c.div.withConfig({displayName:"projects__Folder",componentId:"sc-12h64lj-8"})(["color:",";svg{width:40px;height:40px;}"],g.i.colors.green),nt=m.c.div.withConfig({displayName:"projects__Links",componentId:"sc-12h64lj-9"})(["margin-right:-10px;color:",";"],g.i.colors.lightSlate),it=m.c.a.withConfig({displayName:"projects__IconLink",componentId:"sc-12h64lj-10"})(["padding:10px;svg{width:22px;height:22px;}"]),ot=m.c.h5.withConfig({displayName:"projects__ProjectName",componentId:"sc-12h64lj-11"})(["margin:0 0 10px;font-size:",";color:",";"],g.i.fontSizes.xxlarge,g.i.colors.lightestSlate),rt=m.c.a.withConfig({displayName:"projects__ProjectLink",componentId:"sc-12h64lj-12"})([""]),at=m.c.div.withConfig({displayName:"projects__ProjectDescription",componentId:"sc-12h64lj-13"})(["font-size:17px;line-height:1.25;a{",";}"],g.h.inlineLink),lt=m.c.ul.withConfig({displayName:"projects__TechList",componentId:"sc-12h64lj-14"})(["flex-grow:1;display:flex;align-items:flex-end;flex-wrap:wrap;margin-top:20px;li{font-family:",";font-size:",";color:",";line-height:2;margin-right:15px;&:last-of-type{margin-right:0;}}"],g.i.fonts.SFMono,g.i.fontSizes.xsmall,g.i.colors.lightSlate),ct=Object(m.c)(g.a).withConfig({displayName:"projects__ShowMoreButton",componentId:"sc-12h64lj-15"})(["margin:100px auto 0;"]),st=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showMore:!1},n.showMoreToggle=function(){return n.setState({showMore:!n.state.showMore})},n.revealRefs=[],n.restRefs=[],n}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(P.a)().reveal(this.projects,Object(f.srConfig)()),this.revealRefs.forEach(function(e,t){return Object(P.a)().reveal(e,Object(f.srConfig)(100*t))})},n.render=function(){var e=this,t=this.state.showMore,n=this.props.data.filter(function(e){return"true"===e.node.frontmatter.show}),i=n.slice(0,6),r=t?n:i;return o.a.createElement(Ve,null,o.a.createElement(Xe,{ref:function(t){return e.projects=t}},"Other Projects"),o.a.createElement(Ke,null,o.a.createElement(d.TransitionGroup,{className:"projects"},r&&r.map(function(t,n){var i=t.node,r=i.frontmatter,a=i.html,l=r.github,c=r.external,s=r.title,p=r.tech;return o.a.createElement(d.CSSTransition,{key:n,classNames:"fadeup",timeout:n>=6?300*(n-6):300,exit:!1},o.a.createElement(Ue,{key:n,ref:function(t){return e.revealRefs[n]=t},style:{transitionDelay:(n>=6?100*(n-6):0)+"ms"}},o.a.createElement(Qe,null,o.a.createElement(Ze,null,o.a.createElement(et,null,o.a.createElement(tt,null,o.a.createElement(be.c,null)),o.a.createElement(nt,null,l&&o.a.createElement(it,{href:l,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Github Link"},o.a.createElement(be.d,null)),c&&o.a.createElement(it,{href:c,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},o.a.createElement(be.b,null)))),o.a.createElement(ot,null,c?o.a.createElement(rt,{href:c,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Visit Website"},s):s),o.a.createElement(at,{dangerouslySetInnerHTML:{__html:a}})),o.a.createElement($e,null,o.a.createElement(lt,null,p.map(function(e,t){return o.a.createElement("li",{key:t},e)}))))))}))),o.a.createElement(ct,{onClick:this.showMoreToggle},t?"Fewer":"More"," Projects"))},t}(i.Component);st.propTypes={data:a.a.array.isRequired};var pt=st;function ut(){var e=u()(["font-size: 40px;"]);return ut=function(){return e},e}function dt(){var e=u()(["font-size: 50px;"]);return dt=function(){return e},e}function ft(){var e=u()(["font-size: ",";"]);return ft=function(){return e},e}function mt(){var e=u()(["font-size: ",";"]);return mt=function(){return e},e}var gt=Object(m.c)(g.f).withConfig({displayName:"contact__ContactContainer",componentId:"sc-6cd4xi-0"})(["text-align:center;max-width:600px;margin:0 auto 100px;a{",";}"],g.h.inlineLink),ht=Object(m.c)(g.c).withConfig({displayName:"contact__GreenHeading",componentId:"sc-6cd4xi-1"})(["display:block;color:",";font-size:",";font-family:",";font-weight:normal;margin-bottom:20px;justify-content:center;",";&:before{bottom:0;font-size:",";",";}&:after{display:none;}"],g.i.colors.green,g.i.fontSizes.medium,g.i.fonts.SFMono,g.g.desktop(mt(),g.i.fontSizes.small),g.i.fontSizes.small,g.g.desktop(ft(),g.i.fontSizes.smallish)),bt=m.c.h4.withConfig({displayName:"contact__Title",componentId:"sc-6cd4xi-2"})(["margin:0 0 20px;font-size:60px;",";",";"],g.g.desktop(dt()),g.g.tablet(ut())),xt=m.c.a.withConfig({displayName:"contact__EmailLink",componentId:"sc-6cd4xi-3"})(["",";margin-top:50px;"],g.h.bigButton),vt=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(P.a)().reveal(this.contact,Object(f.srConfig)())},n.render=function(){var e=this,t=this.props.data[0].node,n=t.frontmatter,i=t.html,r=n.title;return o.a.createElement(gt,{id:"contact",ref:function(t){return e.contact=t}},o.a.createElement(ht,null,"What's Next?"),o.a.createElement(bt,null,r),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:i}}),o.a.createElement(xt,{href:"mailto:"+f.email,target:"_blank",rel:"nofollow noopener noreferrer"},"Say Hello"))},t}(i.Component);vt.propTypes={data:a.a.array.isRequired};var yt=vt;n.d(t,"query",function(){return jt});var wt=Object(m.c)(g.d).withConfig({displayName:"pages__MainContainer",componentId:"sc-1tzx2o8-0"})(["",";counter-reset:section;"],g.h.sidePadding),_t=function(e){var t=e.data,n=e.location;return o.a.createElement(l.a,{location:n},o.a.createElement(wt,{id:"content"},o.a.createElement(O,{data:t.hero.edges}),o.a.createElement(U,{data:t.about.edges}),o.a.createElement(he,{data:t.jobs.edges}),o.a.createElement(We,{data:t.featured.edges}),o.a.createElement(pt,{data:t.projects.edges}),o.a.createElement(yt,{data:t.contact.edges})))};_t.propTypes={data:a.a.object.isRequired,location:a.a.object};t.default=_t;var jt="1973967208"}}]);
//# sourceMappingURL=component---src-pages-index-js-eced7ba4221f946d60e2.js.map