(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(4),a=n.n(r),l=n(206),c=(n(48),n(146),n(7)),s=n.n(c),d=n(141),p=n.n(d),u=n(147),f=n(140),m=n(142);function g(){var e=p()(["padding-top: 150px;"]);return g=function(){return e},e}var h=Object(f.c)(m.f).withConfig({displayName:"hero__HeroContainer",componentId:"sc-17z9avy-0"})(["",";flex-direction:column;align-items:flex-start;min-height:100vh;",";div{width:100%;}"],m.h.flexCenter,m.g.tablet(g())),b=f.c.h1.withConfig({displayName:"hero__Hi",componentId:"sc-17z9avy-1"})(["color:",";margin:0 0 20px 3px;font-size:2em;font-family:",";font-weight:normal;"],m.i.colors.green,m.i.fonts.SFMono),x=f.c.h2.withConfig({displayName:"hero__Name",componentId:"sc-17z9avy-2"})(["font-size:3.8em;line-height:1.1;margin:0;"]),y=f.c.h3.withConfig({displayName:"hero__Subtitle",componentId:"sc-17z9avy-3"})(["font-size:2.8em;line-height:1.1;color:",";"],m.i.colors.slate),v=f.c.div.withConfig({displayName:"hero__Blurb",componentId:"sc-17z9avy-4"})(["margin-top:25px;width:50%;max-width:500px;a{",";}"],m.h.inlineLink),w=f.c.a.withConfig({displayName:"hero__EmailLink",componentId:"sc-17z9avy-5"})(["",";font-size:1em;margin-top:50px;"],m.h.bigButton),_=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))||this).state={isMounted:!1},t}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;setTimeout(function(){return e.setState({isMounted:!0})},1e3)},n.componentWillUnmount=function(){this.setState({isMounted:!1})},n.render=function(){var e=this.props.data,t=this.state.isMounted,n=e[0].node,i=n.frontmatter,r=n.html,a=[function(){return o.a.createElement(b,{style:{transitionDelay:"100ms"}},i.title)},function(){return o.a.createElement(x,{style:{transitionDelay:"200ms"}},i.name,".")},function(){return o.a.createElement(y,{style:{transitionDelay:"300ms"}},i.subtitle)},function(){return o.a.createElement(v,{style:{transitionDelay:"400ms"},dangerouslySetInnerHTML:{__html:r}})},function(){return o.a.createElement("div",{style:{transitionDelay:"500ms"}},o.a.createElement(w,{href:"#contact",role:"img"},"👫 Join Us(you FJUTer)"))}];return o.a.createElement(h,null,o.a.createElement(u.TransitionGroup,null,t&&a.map(function(e,t){return o.a.createElement(u.CSSTransition,{key:t,classNames:"fadeup",timeout:3e3},e)})))},t}(i.Component);_.propTypes={data:a.a.array.isRequired};var j=_,C=n(205),E=n.n(C),k=n(143),I=n(148);function N(){var e=p()(["width: 70%;"]);return N=function(){return e},e}function z(){var e=p()(["margin: 60px auto 0;"]);return z=function(){return e},e}function S(){var e=p()(["width: 100%;"]);return S=function(){return e},e}function T(){var e=p()(["display: block;"]);return T=function(){return e},e}var M=Object(f.c)(m.f).withConfig({displayName:"about__AboutContainer",componentId:"sc-1wexrvx-0"})(["position:relative;"]),L=f.c.div.withConfig({displayName:"about__FlexContainer",componentId:"sc-1wexrvx-1"})(["",";align-items:flex-start;",";"],m.h.flexBetween,m.g.tablet(T())),O=f.c.div.withConfig({displayName:"about__ContentContainer",componentId:"sc-1wexrvx-2"})(["width:60%;max-width:480px;",";a{",";}"],m.g.tablet(S()),m.h.inlineLink),A=f.c.ul.withConfig({displayName:"about__SkillsContainer",componentId:"sc-1wexrvx-3"})(["display:grid;grid-template-columns:repeat(2,minmax(140px,200px));overflow:hidden;margin-top:20px;"]),R=f.c.li.withConfig({displayName:"about__Skill",componentId:"sc-1wexrvx-4"})(["position:relative;margin-bottom:10px;padding-left:20px;font-family:",";font-size:.8em;color:white;&:before{content:'▹';position:absolute;left:0;color:",";font-size:.8em;line-height:1em;}"],m.i.fonts.SFMono,m.i.colors.green),P=f.c.div.withConfig({displayName:"about__PicContainer",componentId:"sc-1wexrvx-5"})(["position:relative;width:40%;max-width:300px;margin-left:60px;",";",";"],m.g.tablet(z()),m.g.phablet(N())),F=Object(f.c)(E.a).withConfig({displayName:"about__Avatar",componentId:"sc-1wexrvx-6"})(["position:relative;mix-blend-mode:multiply;filter:grayscale(100%) contrast(1);border-radius:",";transition:",";"],m.i.borderRadius,m.i.transition),D=f.c.div.withConfig({displayName:"about__AvatarContainer",componentId:"sc-1wexrvx-7"})(["width:100%;position:relative;border-radius:",";background-color:",";margin-left:-20px;&:hover,&:focus{background:transparent;&:after{top:15px;left:15px;}","{filter:none;mix-blend-mode:normal;}}&:before,&:after{content:'';display:block;position:absolute;width:100%;height:100%;border-radius:",";transition:",";}&:before{top:0;left:0;right:0;bottom:0;background-color:",";mix-blend-mode:screen;}&:after{border:2px solid ",";top:20px;left:20px;z-index:-1;}"],m.i.borderRadius,m.i.colors.green,F,m.i.borderRadius,m.i.transition,m.i.colors.navy,m.i.colors.green),H=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(I.a)().reveal(this.about,Object(k.srConfig)())},n.render=function(){var e=this,t=this.props.data[0].node,n=t.frontmatter,i=t.html,r=n.title,a=n.skills,l=n.avatar;return o.a.createElement(M,{id:"about",ref:function(t){return e.about=t}},o.a.createElement(m.c,null,r),o.a.createElement(L,null,o.a.createElement(O,null,o.a.createElement("p",{dangerouslySetInnerHTML:{__html:i}}),o.a.createElement(A,null,a&&a.map(function(e,t){return o.a.createElement(R,{key:t},e)}))),o.a.createElement(P,null,o.a.createElement(D,null,o.a.createElement(F,{fluid:l.childImageSharp.fluid,alt:"Avatar"})))))},t}(i.Component);H.propTypes={data:a.a.array.isRequired};var G=H;n(204);function q(){var e=p()(["padding-left: 0;"]);return q=function(){return e},e}function B(){var e=p()(["padding-left: 20px;"]);return B=function(){return e},e}function J(){var e=p()(["\n    width: 100%;\n    max-width: ","px;\n    height: 2px;\n    top: auto;\n    bottom: 0;\n    transform: translateX(\n      ","px\n    );\n  "]);return J=function(){return e},e}function W(){var e=p()(["\n    ",";\n    padding: 0 15px;\n    text-align: center;\n    border-left: 0;\n    border-bottom: 2px solid ",";\n    min-width: 120px;\n  "]);return W=function(){return e},e}function U(){var e=p()(["padding: 0 15px 2px;"]);return U=function(){return e},e}function Y(){var e=p()(["\n    display: flex;\n    margin-bottom: 30px;\n    width: 100%;\n    overflow-x: scroll;\n  "]);return Y=function(){return e},e}function V(){var e=p()(["display: block;"]);return V=function(){return e},e}var X=Object(f.c)(m.f).withConfig({displayName:"jobs__JobsContainer",componentId:"sc-13kygjg-0"})(["position:relative;max-width:700px;"]),K=f.c.div.withConfig({displayName:"jobs__TabsContainer",componentId:"sc-13kygjg-1"})(["display:flex;align-items:flex-start;position:relative;",";"],m.g.thone(V())),Q=f.c.div.withConfig({displayName:"jobs__Tabs",componentId:"sc-13kygjg-2"})(["display:block;position:relative;width:max-content;z-index:3;",";"],m.g.thone(Y())),Z=f.c.button.withConfig({displayName:"jobs__Tab",componentId:"sc-13kygjg-3"})(["",";display:flex;align-items:center;width:100%;background-color:transparent;height:","px;padding:0 20px 2px;transition:",";border-left:2px solid ",";text-align:left;white-space:nowrap;font-family:",";font-size:",";color:",";",";",";&:hover,&:focus{background-color:",";}"],m.h.link,m.i.tabHeight,m.i.transition,m.i.colors.darkGrey,m.i.fonts.SFMono,m.i.fontSizes.smallish,function(e){return e.isActive?m.i.colors.green:m.i.colors.lightGrey},m.g.tablet(U()),m.g.thone(W(),m.h.flexCenter,m.i.colors.darkGrey),m.i.colors.lightNavy),$=f.c.span.withConfig({displayName:"jobs__Highlighter",componentId:"sc-13kygjg-4"})(["display:block;background:",";width:2px;height:","px;border-radius:",";position:absolute;top:0;left:0;transition:",";transition-delay:0.1s;z-index:10;transform:translateY( ","px );",";"],m.i.colors.green,m.i.tabHeight,m.i.borderRadius,m.i.transition,function(e){return e.activeTabId>0?e.activeTabId*m.i.tabHeight:0},m.g.thone(J(),m.i.tabWidth,function(e){return e.activeTabId>0?e.activeTabId*m.i.tabWidth:0})),ee=f.c.div.withConfig({displayName:"jobs__ContentContainer",componentId:"sc-13kygjg-5"})(["position:relative;padding-top:14px;padding-left:30px;flex-grow:1;",";",";"],m.g.tablet(B()),m.g.thone(q())),te=f.c.div.withConfig({displayName:"jobs__TabContent",componentId:"sc-13kygjg-6"})(["top:0;left:0;width:100%;height:auto;opacity:",";z-index:",";position:",";visibility:",";transition:",";transition-duration:",";ul{padding:0;margin:0;list-style:none;font-size:",";li{position:relative;padding-left:30px;margin-bottom:5px;&:before{content:'▹';position:absolute;left:0;color:",";line-height:",";}}}a{",";}"],function(e){return e.isActive?1:0},function(e){return e.isActive?2:-1},function(e){return e.isActive?"relative":"absolute"},function(e){return e.isActive?"visible":"hidden"},m.i.transition,function(e){return e.isActive?"0.5s":"0s"},m.i.fontSizes.large,m.i.colors.green,m.i.fontSizes.xlarge,m.h.inlineLink),ne=f.c.h4.withConfig({displayName:"jobs__JobTitle",componentId:"sc-13kygjg-7"})(["color:",";font-size:",";font-weight:500;margin-bottom:5px;"],m.i.colors.lightestSlate,m.i.fontSizes.xxlarge),ie=f.c.span.withConfig({displayName:"jobs__Company",componentId:"sc-13kygjg-8"})(["color:",";"],m.i.colors.green),oe=f.c.h5.withConfig({displayName:"jobs__JobDetails",componentId:"sc-13kygjg-9"})(["font-family:",";font-size:",";font-weight:normal;letter-spacing:0.5px;color:",";margin-bottom:30px;svg{width:15px;}"],m.i.fonts.SFMono,m.i.fontSizes.smallish,m.i.colors.lightSlate),re=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))||this).state={activeTabId:0},t.isActive=function(e){return t.state.activeTabId===e},t.setActiveTab=function(e){return t.setState({activeTabId:e})},t}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(I.a)().reveal(this.jobs,Object(k.srConfig)())},n.render=function(){var e=this,t=this.state.activeTabId,n=this.props.data;return o.a.createElement(X,{id:"jobs",ref:function(t){return e.jobs=t}},o.a.createElement(m.c,null,"📋 工作日志 ▹ logs"),o.a.createElement(K,null,o.a.createElement(Q,{role:"tablist"},n&&n.map(function(t,n){var i=t.node.frontmatter.company;return o.a.createElement(Z,{key:n,isActive:e.isActive(n),onClick:function(t){return e.setActiveTab(n,t)},role:"tab","aria-selected":e.isActive(n)?"true":"false","aria-controls":"tab"+n,id:"tab"+n,tabIndex:e.isActive(n)?"0":"-1"},o.a.createElement("span",null,i))}),o.a.createElement($,{activeTabId:t})),o.a.createElement(ee,null,n&&n.map(function(t,n){var i=t.node,r=i.frontmatter,a=i.html,l=r.title,c=r.url,s=r.company,d=r.range;return o.a.createElement(te,{key:n,isActive:e.isActive(n),id:"job"+n,role:"tabpanel",tabIndex:"0","aria-labelledby":"job"+n,"aria-hidden":!e.isActive(n)},o.a.createElement(ne,null,o.a.createElement("span",null,l),o.a.createElement(ie,null," @ ",o.a.createElement("a",{href:c,target:"_blank",rel:"nofollow noopener noreferrer"},s))),o.a.createElement(oe,null,o.a.createElement("span",null,d)),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:a}}))}))))},t}(i.Component);re.propTypes={data:a.a.array.isRequired};var ae=re,le=(n(75),n(76),n(145));function ce(){var e=p()(["\n        grid-column: 1 / -1;\n        opacity: 0.25;\n      "]);return ce=function(){return e},e}function se(){var e=p()(["height: 100%;"]);return se=function(){return e},e}function de(){var e=p()(["padding: 30px 25px 20px;"]);return de=function(){return e},e}function pe(){var e=p()(["\n        grid-column: 1 / -1;\n        padding: 40px 40px 30px;\n      "]);return pe=function(){return e},e}function ue(){var e=p()(["margin-bottom: 70px;"]);return ue=function(){return e},e}function fe(){var e=p()(["\n    grid-column: 1 / -1;\n    opacity: 0.25;\n  "]);return fe=function(){return e},e}function me(){var e=p()(["height: 100%;"]);return me=function(){return e},e}function ge(){var e=p()(["\n    object-fit: cover;\n    width: auto;\n    height: 100%;\n    filter: grayscale(100%) contrast(1) brightness(80%);\n  "]);return ge=function(){return e},e}function he(){var e=p()(["\n      color: ",";\n      margin-right: 10px;\n    "]);return he=function(){return e},e}function be(){var e=p()(["\n    background-color: transparent;\n    padding: 20px 0;\n  "]);return be=function(){return e},e}function xe(){var e=p()(["display: block;"]);return xe=function(){return e},e}function ye(){var e=p()(["font-size: 24px;"]);return ye=function(){return e},e}function ve(){var e=p()(["padding: 30px 25px 20px;"]);return ve=function(){return e},e}function we(){var e=p()(["\n    grid-column: 1 / -1;\n    padding: 40px 40px 30px;\n  "]);return we=function(){return e},e}var _e=Object(f.c)(m.f).withConfig({displayName:"featured__FeaturedContainer",componentId:"sc-1wogb0y-0"})(["",";flex-direction:column;align-items:flex-start;"],m.h.flexCenter),je=f.c.div.withConfig({displayName:"featured__FeaturedGrid",componentId:"sc-1wogb0y-1"})(["position:relative;"]),Ce=f.c.div.withConfig({displayName:"featured__ContentContainer",componentId:"sc-1wogb0y-2"})(["position:relative;z-index:2;grid-column:1 / 7;grid-row:1 / -1;",";",";"],m.g.thone(we()),m.g.phablet(ve())),Ee=f.c.h4.withConfig({displayName:"featured__FeaturedLabel",componentId:"sc-1wogb0y-3"})(["font-size:",";font-weight:normal;color:",";font-family:",";margin-top:10px;padding-top:0;"],m.i.fontSizes.smallish,m.i.colors.green,m.i.fonts.SFMono),ke=f.c.h5.withConfig({displayName:"featured__ProjectName",componentId:"sc-1wogb0y-4"})(["font-size:28px;font-weight:600;margin:0 0 20px;color:",";",";a{",";}"],m.i.colors.lightestSlate,m.g.tablet(ye()),m.g.tablet(xe())),Ie=f.c.div.withConfig({displayName:"featured__ProjectDescription",componentId:"sc-1wogb0y-5"})(["background-color:",";color:",";padding:20px;border-radius:",";font-size:17px;line-height:1.3;",";p{margin:0;}a{",";color:",";}"],m.i.colors.lightNavy,m.i.colors.lightSlate,m.i.borderRadius,m.g.thone(be()),m.h.inlineLink,m.i.colors.white),Ne=f.c.ul.withConfig({displayName:"featured__TechList",componentId:"sc-1wogb0y-6"})(["display:flex;flex-wrap:wrap;margin:25px 0 10px;li{font-family:",";font-size:",";color:",";margin-right:",";margin-bottom:7px;white-space:nowrap;&:last-of-type{margin-right:0;}",";}"],m.i.fonts.SFMono,m.i.fontSizes.smallish,m.i.colors.lightSlate,m.i.margin,m.g.thone(he(),m.i.colors.lightestSlate)),ze=f.c.div.withConfig({displayName:"featured__Links",componentId:"sc-1wogb0y-7"})(["display:flex;align-items:center;position:relative;margin-top:10px;margin-left:-10px;a{padding:10px;svg{width:22px;height:22px;}}"]),Se=Object(f.c)(E.a).withConfig({displayName:"featured__FeaturedImg",componentId:"sc-1wogb0y-8"})(["width:100%;max-width:100%;vertical-align:middle;border-radius:",";position:relative;mix-blend-mode:multiply;filter:grayscale(100%) contrast(1) brightness(90%);",";"],m.i.borderRadius,m.g.tablet(ge())),Te=f.c.div.withConfig({displayName:"featured__ImgContainer",componentId:"sc-1wogb0y-9"})(["position:relative;z-index:1;border-radius:",";background-color:",";border-radius:2px;grid-column:6 / -1;grid-row:1 / -1;transition:",";",";",";&:hover,&:focus{background:transparent;&:before,","{background:transparent;filter:none;}}&:before{content:'';position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:3;transition:",";background-color:",";mix-blend-mode:screen;}"],m.i.borderRadius,m.i.colors.green,m.i.transition,m.g.tablet(me()),m.g.thone(fe()),Se,m.i.transition,m.i.colors.navy),Me=f.c.div.withConfig({displayName:"featured__Project",componentId:"sc-1wogb0y-10"})(["display:grid;grid-gap:10px;grid-template-columns:repeat(12,1fr);align-items:center;margin-bottom:100px;",";&:last-of-type{margin-bottom:0;}&:nth-of-type(odd){","{grid-column:7 / -1;text-align:right;",";",";}","{justify-content:flex-end;li{margin-left:",";margin-right:0;}}","{justify-content:flex-end;margin-left:0;margin-right:-10px;}","{grid-column:1 / 8;",";",";}}"],m.g.thone(ue()),Ce,m.g.thone(pe()),m.g.phablet(de()),Ne,m.i.margin,ze,Te,m.g.tablet(se()),m.g.thone(ce())),Le=function(e){function t(t){var n;return(n=e.call(this,t)||this).revealRefs=[],n}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(I.a)().reveal(this.featured,Object(k.srConfig)()),this.revealRefs.forEach(function(e){return Object(I.a)().reveal(e,Object(k.srConfig)())})},n.render=function(){var e=this,t=this.props.data;return o.a.createElement(_e,{id:"projects"},o.a.createElement(m.c,{ref:function(t){return e.featured=t}},"⌨️ ShowCase ▹ 项目展"),o.a.createElement(je,null,t&&t.map(function(t,n){var i=t.node,r=i.frontmatter,a=i.html,l=r.external,c=r.title,s=r.tech,d=r.github,p=r.cover;return o.a.createElement(Me,{key:n,ref:function(t){return e.revealRefs[n]=t}},o.a.createElement(Ce,null,o.a.createElement(Ee,null,"Featured Project"),o.a.createElement(ke,null,l?o.a.createElement("a",{href:l,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},c):c),o.a.createElement(Ie,{dangerouslySetInnerHTML:{__html:a}}),s&&o.a.createElement(Ne,null,s.map(function(e,t){return o.a.createElement("li",{key:t},e)})),o.a.createElement(ze,null,d&&o.a.createElement("a",{href:d,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Github Link"},o.a.createElement(le.d,null)),l&&o.a.createElement("a",{href:l,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},o.a.createElement(le.b,null)))),o.a.createElement(Te,null,o.a.createElement(Se,{fluid:p.childImageSharp.fluid})))})))},t}(i.Component);Le.propTypes={data:a.a.array.isRequired};var Oe=Le;n(77);function Ae(){var e=p()(["grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));"]);return Ae=function(){return e},e}function Re(){var e=p()(["font-size: 24px;"]);return Re=function(){return e},e}var Pe=Object(f.c)(m.f).withConfig({displayName:"projects__ProjectsContainer",componentId:"sc-12h64lj-0"})(["",";flex-direction:column;align-items:flex-start;"],m.h.flexCenter),Fe=f.c.h4.withConfig({displayName:"projects__ProjectsTitle",componentId:"sc-12h64lj-1"})(["margin:0 auto 50px;font-size:",";",";a{display:block;}"],m.i.fontSizes.h3,m.g.tablet(Re())),De=f.c.div.withConfig({displayName:"projects__ProjectsGrid",componentId:"sc-12h64lj-2"})([".projects{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;position:relative;",";}"],m.g.desktop(Ae())),He=f.c.div.withConfig({displayName:"projects__ProjectInner",componentId:"sc-12h64lj-3"})(["",";flex-direction:column;align-items:flex-start;position:relative;padding:25px;height:100%;border-radius:",";transition:",";background-color:",";"],m.h.flexBetween,m.i.borderRadius,m.i.transition,m.i.colors.lightNavy),Ge=f.c.div.withConfig({displayName:"projects__Project",componentId:"sc-12h64lj-4"})(["transition:",";&:hover,&:focus{","{transform:translateY(-5px);box-shadow:0 2px 4px ",";box-shadow:0 19px 38px "," 0 15px 12px ",";}}"],m.i.transition,He,m.i.colors.shadowNavy,m.i.colors.darkestNavy,m.i.colors.shadowNavy),qe=f.c.div.withConfig({displayName:"projects__ProjectTop",componentId:"sc-12h64lj-5"})([""]),Be=f.c.div.withConfig({displayName:"projects__ProjectBottom",componentId:"sc-12h64lj-6"})([""]),Je=f.c.div.withConfig({displayName:"projects__ProjectHeader",componentId:"sc-12h64lj-7"})(["",";margin-bottom:30px;"],m.h.flexBetween),We=f.c.div.withConfig({displayName:"projects__Folder",componentId:"sc-12h64lj-8"})(["color:",";svg{width:40px;height:40px;}"],m.i.colors.green),Ue=f.c.div.withConfig({displayName:"projects__Links",componentId:"sc-12h64lj-9"})(["margin-right:-10px;color:",";"],m.i.colors.lightSlate),Ye=f.c.a.withConfig({displayName:"projects__IconLink",componentId:"sc-12h64lj-10"})(["padding:10px;svg{width:22px;height:22px;}"]),Ve=f.c.h5.withConfig({displayName:"projects__ProjectName",componentId:"sc-12h64lj-11"})(["margin:0 0 10px;font-size:",";color:",";"],m.i.fontSizes.xxlarge,m.i.colors.lightestSlate),Xe=f.c.a.withConfig({displayName:"projects__ProjectLink",componentId:"sc-12h64lj-12"})([""]),Ke=f.c.div.withConfig({displayName:"projects__ProjectDescription",componentId:"sc-12h64lj-13"})(["font-size:17px;line-height:1.25;a{",";}"],m.h.inlineLink),Qe=f.c.ul.withConfig({displayName:"projects__TechList",componentId:"sc-12h64lj-14"})(["flex-grow:1;display:flex;align-items:flex-end;flex-wrap:wrap;margin-top:20px;li{font-family:",";font-size:",";color:",";line-height:2;margin-right:15px;&:last-of-type{margin-right:0;}}"],m.i.fonts.SFMono,m.i.fontSizes.xsmall,m.i.colors.lightSlate),Ze=Object(f.c)(m.a).withConfig({displayName:"projects__ShowMoreButton",componentId:"sc-12h64lj-15"})(["margin:100px auto 0;"]),$e=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showMore:!1},n.showMoreToggle=function(){return n.setState({showMore:!n.state.showMore})},n.revealRefs=[],n.restRefs=[],n}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(I.a)().reveal(this.projects,Object(k.srConfig)()),this.revealRefs.forEach(function(e,t){return Object(I.a)().reveal(e,Object(k.srConfig)(100*t))})},n.render=function(){var e=this,t=this.state.showMore,n=this.props.data.filter(function(e){return"true"===e.node.frontmatter.show}),i=n.slice(0,6),r=t?n:i;return o.a.createElement(Pe,null,o.a.createElement(Fe,{ref:function(t){return e.projects=t}},"Other Projects"),o.a.createElement(De,null,o.a.createElement(u.TransitionGroup,{className:"projects"},r&&r.map(function(t,n){var i=t.node,r=i.frontmatter,a=i.html,l=r.github,c=r.external,s=r.title,d=r.tech;return o.a.createElement(u.CSSTransition,{key:n,classNames:"fadeup",timeout:n>=6?300*(n-6):300,exit:!1},o.a.createElement(Ge,{key:n,ref:function(t){return e.revealRefs[n]=t},style:{transitionDelay:(n>=6?100*(n-6):0)+"ms"}},o.a.createElement(He,null,o.a.createElement(qe,null,o.a.createElement(Je,null,o.a.createElement(We,null,o.a.createElement(le.c,null)),o.a.createElement(Ue,null,l&&o.a.createElement(Ye,{href:l,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Github Link"},o.a.createElement(le.d,null)),c&&o.a.createElement(Ye,{href:c,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},o.a.createElement(le.b,null)))),o.a.createElement(Ve,null,c?o.a.createElement(Xe,{href:c,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Visit Website"},s):s),o.a.createElement(Ke,{dangerouslySetInnerHTML:{__html:a}})),o.a.createElement(Be,null,o.a.createElement(Qe,null,d.map(function(e,t){return o.a.createElement("li",{key:t},e)}))))))}))),o.a.createElement(Ze,{onClick:this.showMoreToggle},t?"Fewer":"More"," Projects"))},t}(i.Component);$e.propTypes={data:a.a.array.isRequired};var et=$e;n(150);function tt(){var e=p()(["font-size: 40px;"]);return tt=function(){return e},e}function nt(){var e=p()(["font-size: 50px;"]);return nt=function(){return e},e}function it(){var e=p()(["font-size: ",";"]);return it=function(){return e},e}function ot(){var e=p()(["font-size: ",";"]);return ot=function(){return e},e}var rt=Object(f.c)(m.f).withConfig({displayName:"contact__ContactContainer",componentId:"sc-6cd4xi-0"})(["text-align:center;max-width:600px;margin:0 auto 100px;a{",";}"],m.h.inlineLink),at=Object(f.c)(m.c).withConfig({displayName:"contact__GreenHeading",componentId:"sc-6cd4xi-1"})(["display:block;color:",";font-size:",";font-family:",";font-weight:normal;margin-bottom:20px;justify-content:center;",";&:before{bottom:0;font-size:",";",";}&:after{display:none;}"],m.i.colors.green,m.i.fontSizes.medium,m.i.fonts.SFMono,m.g.desktop(ot(),m.i.fontSizes.small),m.i.fontSizes.small,m.g.desktop(it(),m.i.fontSizes.smallish)),lt=f.c.h4.withConfig({displayName:"contact__Title",componentId:"sc-6cd4xi-2"})(["margin:0 0 20px;font-size:60px;",";",";"],m.g.desktop(nt()),m.g.tablet(tt())),ct=f.c.a.withConfig({displayName:"contact__EmailLink",componentId:"sc-6cd4xi-3"})(["",";margin-top:50px;"],m.h.bigButton),st=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(I.a)().reveal(this.contact,Object(k.srConfig)())},n.render=function(){var e=this,t=this.props.data[0].node,n=t.frontmatter,i=t.html,r=n.title;return o.a.createElement(rt,{id:"contact",ref:function(t){return e.contact=t}},o.a.createElement(at,null,"What's Next?"),o.a.createElement(lt,null,r),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:i}}),o.a.createElement(ct,{href:"mailto:"+k.email,target:"_blank",rel:"nofollow noopener noreferrer"},"Say Hello"))},t}(i.Component);st.propTypes={data:a.a.array.isRequired};var dt=st;n.d(t,"query",function(){return ft});var pt=Object(f.c)(m.d).withConfig({displayName:"pages__MainContainer",componentId:"sc-1tzx2o8-0"})(["",";counter-reset:section;"],m.h.sidePadding),ut=function(e){var t=e.data,n=e.location;return o.a.createElement(l.a,{location:n},o.a.createElement(pt,{id:"content"},o.a.createElement(j,{data:t.hero.edges}),o.a.createElement(G,{data:t.about.edges}),o.a.createElement(ae,{data:t.jobs.edges}),o.a.createElement(Oe,{data:t.featured.edges}),o.a.createElement(et,{data:t.projects.edges}),o.a.createElement(dt,{data:t.contact.edges})))};ut.propTypes={data:a.a.object.isRequired,location:a.a.object};t.default=ut;var ft="1973967208"}}]);
//# sourceMappingURL=component---src-pages-index-js-ebf2a7221918a79b4d4a.js.map