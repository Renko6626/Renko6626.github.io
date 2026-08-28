import{i as De,h as We,j as je,S as oe,k as Z,l as C,d as _,o as f,c as S,m as Q,n as Ae,g as B,q as Ne,e as h,s as p,v as $,w as G,x as Ve,y as Oe,z as s,A as I,B as ie,C as re,D as Ue,E as q,G as b,H as qe,I as Ge,a as de,t as w,u as m,b as K,f as ne,_ as Ke,F as ae,r as Je}from"./index-BCSHek0W.js";import{P as Xe}from"./PageHeading-DBIwC5O-.js";import{n as z,a as x,u as ue,c as he,r as te,b as Ze,d as Qe,e as Ye,f as eo,g as le,B as oo}from"./Button-BmgbUlk3.js";import{u as ro}from"./useLocalized-CSErXAiy.js";var no="[object Symbol]";function ao(e){return typeof e=="symbol"||De(e)&&We(e)==no}function to(e,r){for(var o=-1,n=e==null?0:e.length,a=Array(n);++o<n;)a[o]=r(e[o],o,e);return a}var se=oe?oe.prototype:void 0,ce=se?se.toString:void 0;function fe(e){if(typeof e=="string")return e;if(je(e))return to(e,fe)+"";if(ao(e))return ce?ce.call(e):"";var r=e+"";return r=="0"&&1/e==-1/0?"-0":r}function lo(e){return e==null?"":fe(e)}function so(e,r,o){var n=-1,a=e.length;r<0&&(r=-r>a?0:a+r),o=o>a?a:o,o<0&&(o+=a),a=r>o?0:o-r>>>0,r>>>=0;for(var l=Array(a);++n<a;)l[n]=e[n+r];return l}function co(e,r,o){var n=e.length;return o=o===void 0?n:o,!r&&o>=n?e:so(e,r,o)}var io="\\ud800-\\udfff",uo="\\u0300-\\u036f",ho="\\ufe20-\\ufe2f",fo="\\u20d0-\\u20ff",bo=uo+ho+fo,go="\\ufe0e\\ufe0f",vo="\\u200d",Co=RegExp("["+vo+io+bo+go+"]");function be(e){return Co.test(e)}function po(e){return e.split("")}var ge="\\ud800-\\udfff",mo="\\u0300-\\u036f",ko="\\ufe20-\\ufe2f",yo="\\u20d0-\\u20ff",xo=mo+ko+yo,So="\\ufe0e\\ufe0f",wo="["+ge+"]",J="["+xo+"]",X="\\ud83c[\\udffb-\\udfff]",zo="(?:"+J+"|"+X+")",ve="[^"+ge+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",pe="[\\ud800-\\udbff][\\udc00-\\udfff]",_o="\\u200d",me=zo+"?",ke="["+So+"]?",Po="(?:"+_o+"(?:"+[ve,Ce,pe].join("|")+")"+ke+me+")*",Io=ke+me+Po,Bo="(?:"+[ve+J+"?",J,Ce,pe,wo].join("|")+")",$o=RegExp(X+"(?="+X+")|"+Bo+Io,"g");function Mo(e){return e.match($o)||[]}function Ro(e){return be(e)?Mo(e):po(e)}function To(e){return function(r){r=lo(r);var o=be(r)?Ro(r):void 0,n=o?o[0]:r.charAt(0),a=o?co(o,1).join(""):r.slice(1);return n[e]()+a}}var Ho=To("toUpperCase");function Lo(e,r){const o=e.trim().split(/\s+/g),n={top:o[0]};switch(o.length){case 1:n.right=o[0],n.bottom=o[0],n.left=o[0];break;case 2:n.right=o[1],n.left=o[1],n.bottom=o[0];break;case 3:n.right=o[1],n.bottom=o[2],n.left=o[1];break;case 4:n.right=o[1],n.bottom=o[2],n.left=o[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return n}var Fo=Z("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[C("svg",`
 height: 1em;
 width: 1em;
 `)]);const Eo=["onClick","onMousedown","onMouseup","role","aria-label","aria-hidden","aria-disabled"];var Do=_({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){ue("-base-icon",Fo,Q(e,"clsPrefix"))},render(){return f(),S("i",{class:x(`${this.clsPrefix}-base-icon`),onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},[z(()=>{var e,r;return(r=(e=this.$slots).default)==null?void 0:r.call(e)})],42,Eo)}});function Wo(e,r){const o=_({render(){return r()}});return _({name:Ho(e),setup(){var a;const n=(a=Ae(Ne,null))==null?void 0:a.mergedIconsRef;return()=>{var c;const l=(c=n==null?void 0:n.value)==null?void 0:c[e];return l?l():(f(),B(o,{key:1}))}}})}var jo=Wo("close",()=>(()=>{const e=he("6b30a2290cd08d4");return e[0]||(e[0]=h("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},[h("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[h("g",{fill:"currentColor","fill-rule":"nonzero"},[h("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"})])])],-1))})()),Ao=Z("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[p("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),C("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),$("disabled",[C("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),C("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),C("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),C("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),C("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),p("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),p("round",[C("&::before",`
 border-radius: 50%;
 `)])]),No=_({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return ue("-base-close",Ao,Q(e,"clsPrefix")),()=>{const{clsPrefix:r,disabled:o,absolute:n,round:a,isButtonTag:l}=e,c=l?"button":"div";return(()=>{const i=he("b5bdc9fe09f5ae00");return f(),B(c,{type:l?"button":void 0,tabindex:o||!e.focusable?-1:0,"aria-disabled":o,"aria-label":"close",role:l?void 0:"button",disabled:o,class:x([`${r}-base-close`,n&&`${r}-base-close--absolute`,o&&`${r}-base-close--disabled`,a&&`${r}-base-close--round`]),onMousedown:i[0]||(i[0]=u=>{e.focusable||u.preventDefault()}),onClick:e.onClick},{default:G(()=>[(f(),B(Do,{clsPrefix:r},{default:()=>(f(),B(jo))},1032,["clsPrefix"]))]),_:2},1032,["type","tabindex","aria-disabled","role","disabled","class","onClick"])})()}}});function Vo(e){const{textColor2:r,primaryColorHover:o,primaryColorPressed:n,primaryColor:a,infoColor:l,successColor:c,warningColor:i,errorColor:u,baseColor:g,borderColor:P,opacityDisabled:T,tagColor:H,closeIconColor:M,closeIconColorHover:y,closeIconColorPressed:t,borderRadiusSmall:d,fontSizeMini:k,fontSizeTiny:v,fontSizeSmall:L,fontSizeMedium:F,heightMini:E,heightTiny:D,heightSmall:W,heightMedium:j,closeColorHover:A,closeColorPressed:N,buttonColor2Hover:V,buttonColor2Pressed:O,fontWeightStrong:U}=e;return{...Oe,closeBorderRadius:d,heightTiny:E,heightSmall:D,heightMedium:W,heightLarge:j,borderRadius:d,opacityDisabled:T,fontSizeTiny:k,fontSizeSmall:v,fontSizeMedium:L,fontSizeLarge:F,fontWeightStrong:U,textColorCheckable:r,textColorHoverCheckable:r,textColorPressedCheckable:r,textColorChecked:g,colorCheckable:"#0000",colorHoverCheckable:V,colorPressedCheckable:O,colorChecked:a,colorCheckedHover:o,colorCheckedPressed:n,border:`1px solid ${P}`,textColor:r,color:H,colorBordered:"rgb(250, 250, 252)",closeIconColor:M,closeIconColorHover:y,closeIconColorPressed:t,closeColorHover:A,closeColorPressed:N,borderPrimary:`1px solid ${s(a,{alpha:.3})}`,textColorPrimary:a,colorPrimary:s(a,{alpha:.12}),colorBorderedPrimary:s(a,{alpha:.1}),closeIconColorPrimary:a,closeIconColorHoverPrimary:a,closeIconColorPressedPrimary:a,closeColorHoverPrimary:s(a,{alpha:.12}),closeColorPressedPrimary:s(a,{alpha:.18}),borderInfo:`1px solid ${s(l,{alpha:.3})}`,textColorInfo:l,colorInfo:s(l,{alpha:.12}),colorBorderedInfo:s(l,{alpha:.1}),closeIconColorInfo:l,closeIconColorHoverInfo:l,closeIconColorPressedInfo:l,closeColorHoverInfo:s(l,{alpha:.12}),closeColorPressedInfo:s(l,{alpha:.18}),borderSuccess:`1px solid ${s(c,{alpha:.3})}`,textColorSuccess:c,colorSuccess:s(c,{alpha:.12}),colorBorderedSuccess:s(c,{alpha:.1}),closeIconColorSuccess:c,closeIconColorHoverSuccess:c,closeIconColorPressedSuccess:c,closeColorHoverSuccess:s(c,{alpha:.12}),closeColorPressedSuccess:s(c,{alpha:.18}),borderWarning:`1px solid ${s(i,{alpha:.35})}`,textColorWarning:i,colorWarning:s(i,{alpha:.15}),colorBorderedWarning:s(i,{alpha:.12}),closeIconColorWarning:i,closeIconColorHoverWarning:i,closeIconColorPressedWarning:i,closeColorHoverWarning:s(i,{alpha:.12}),closeColorPressedWarning:s(i,{alpha:.18}),borderError:`1px solid ${s(u,{alpha:.23})}`,textColorError:u,colorError:s(u,{alpha:.1}),colorBorderedError:s(u,{alpha:.08}),closeIconColorError:u,closeIconColorHoverError:u,closeIconColorPressedError:u,closeColorHoverError:s(u,{alpha:.12}),closeColorPressedError:s(u,{alpha:.18})}}const Oo={common:Ve,self:Vo};var Uo={color:Object,type:{type:String,default:"default"},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},qo=Z("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[p("strong",`
 font-weight: var(--n-font-weight-strong);
 `),I("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),I("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),I("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),I("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),p("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[I("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),I("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),p("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),p("icon, avatar",[p("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),p("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),p("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[$("disabled",[C("&:hover","background-color: var(--n-color-hover-checkable);",[$("checked","color: var(--n-text-color-hover-checkable);")]),C("&:active","background-color: var(--n-color-pressed-checkable);",[$("checked","color: var(--n-text-color-pressed-checkable);")])]),p("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[$("disabled",[C("&:hover","background-color: var(--n-color-checked-hover);"),C("&:active","background-color: var(--n-color-checked-pressed);")])])])]);const Go=["onClick","onMouseenter","onMouseleave"],Ko={...ie.props,...Uo,bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function},Jo=Ge("n-tag");var Xo=_({name:"Tag",props:Ko,slots:Object,setup(e){const r=Ue(null),{mergedBorderedRef:o,mergedClsPrefixRef:n,inlineThemeDisabled:a,mergedRtlRef:l,mergedComponentPropsRef:c}=Ze(e),i=q(()=>{var t,d;return e.size||((d=(t=c==null?void 0:c.value)==null?void 0:t.Tag)==null?void 0:d.size)||"medium"}),u=ie("Tag","-tag",qo,Oo,e,n);qe(Jo,{roundRef:Q(e,"round")});function g(){if(!e.disabled&&e.checkable){const{checked:t,onCheckedChange:d,onUpdateChecked:k,"onUpdate:checked":v}=e;k&&k(!t),v&&v(!t),d&&d(!t)}}function P(t){if(e.triggerClickOnClose||t.stopPropagation(),!e.disabled){const{onClose:d}=e;d&&eo(d,t)}}const T={setTextContent(t){const{value:d}=r;d&&(d.textContent=t)}},H=Qe("Tag",l,n),M=q(()=>{const{type:t,color:{color:d,textColor:k}={}}=e,v=i.value,{common:{cubicBezierEaseInOut:L},self:{padding:F,closeMargin:E,borderRadius:D,opacityDisabled:W,textColorCheckable:j,textColorHoverCheckable:A,textColorPressedCheckable:N,textColorChecked:V,colorCheckable:O,colorHoverCheckable:U,colorPressedCheckable:ye,colorChecked:xe,colorCheckedHover:Se,colorCheckedPressed:we,closeBorderRadius:ze,fontWeightStrong:_e,[b("colorBordered",t)]:Pe,[b("closeSize",v)]:Ie,[b("closeIconSize",v)]:Be,[b("fontSize",v)]:$e,[b("height",v)]:Y,[b("color",t)]:Me,[b("textColor",t)]:Re,[b("border",t)]:Te,[b("closeIconColor",t)]:ee,[b("closeIconColorHover",t)]:He,[b("closeIconColorPressed",t)]:Le,[b("closeColorHover",t)]:Fe,[b("closeColorPressed",t)]:Ee}}=u.value,R=Lo(E);return{"--n-font-weight-strong":_e,"--n-avatar-size-override":`calc(${Y} - 8px)`,"--n-bezier":L,"--n-border-radius":D,"--n-border":Te,"--n-close-icon-size":Be,"--n-close-color-pressed":Ee,"--n-close-color-hover":Fe,"--n-close-border-radius":ze,"--n-close-icon-color":ee,"--n-close-icon-color-hover":He,"--n-close-icon-color-pressed":Le,"--n-close-icon-color-disabled":ee,"--n-close-margin-top":R.top,"--n-close-margin-right":R.right,"--n-close-margin-bottom":R.bottom,"--n-close-margin-left":R.left,"--n-close-size":Ie,"--n-color":d||(o.value?Pe:Me),"--n-color-checkable":O,"--n-color-checked":xe,"--n-color-checked-hover":Se,"--n-color-checked-pressed":we,"--n-color-hover-checkable":U,"--n-color-pressed-checkable":ye,"--n-font-size":$e,"--n-height":Y,"--n-opacity-disabled":W,"--n-padding":F,"--n-text-color":k||Re,"--n-text-color-checkable":j,"--n-text-color-checked":V,"--n-text-color-hover-checkable":A,"--n-text-color-pressed-checkable":N}}),y=a?Ye("tag",q(()=>{let t="";const{type:d,color:{color:k,textColor:v}={}}=e;return t+=d[0],t+=i.value[0],k&&(t+=`a${le(k)}`),v&&(t+=`b${le(v)}`),o.value&&(t+="c"),t}),M,e):void 0;return{...T,rtlEnabled:H,mergedClsPrefix:n,contentRef:r,mergedBordered:o,handleClick:g,handleCloseClick:P,cssVars:a?void 0:M,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender}},render(){const{mergedClsPrefix:e,rtlEnabled:r,closable:o,color:{borderColor:n}={},round:a,onRender:l,$slots:c}=this;l==null||l();const i=te(c.avatar,g=>g&&(f(),S("div",{class:x(`${e}-tag__avatar`)},[z(()=>g)],2))),u=te(c.icon,g=>g&&(f(),S("div",{class:x(`${e}-tag__icon`)},[z(()=>g)],2)));return f(),S("div",{class:x([`${e}-tag`,this.themeClass,{[`${e}-tag--rtl`]:r,[`${e}-tag--strong`]:this.strong,[`${e}-tag--disabled`]:this.disabled,[`${e}-tag--checkable`]:this.checkable,[`${e}-tag--checked`]:this.checkable&&this.checked,[`${e}-tag--round`]:a,[`${e}-tag--avatar`]:i,[`${e}-tag--icon`]:u,[`${e}-tag--closable`]:o}]),style:re(this.cssVars),onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},[z(()=>u||i),h("span",{class:x(`${e}-tag__content`),ref:"contentRef"},[z(()=>{var g,P;return(P=(g=this.$slots).default)==null?void 0:P.call(g)})],2),!this.checkable&&o?(f(),B(No,{key:0,clsPrefix:e,class:x(`${e}-tag__close`),disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:a,isButtonTag:this.internalCloseIsButtonTag,absolute:!0},null,8,["clsPrefix","class","disabled","onClick","focusable","round","isButtonTag"])):z(()=>null),!this.checkable&&this.mergedBordered?(f(),S("div",{key:2,class:x(`${e}-tag__border`),style:re({borderColor:n})},null,6)):z(()=>null)],46,Go)}});const Zo={class:"row hairline-b page-x"},Qo={class:"main"},Yo={class:"title"},er={class:"summary"},or={class:"side"},rr={class:"glyph-inline","aria-hidden":"true"},nr={class:"updated"},ar={class:"eyebrow"},tr=["datetime"],lr=_({__name:"NoteRow",props:{note:{}},setup(e){const{t:r}=de(),o=ro(),n={complete:"●","in-progress":"○",rewriting:"→"};return(a,l)=>(f(),S("li",Zo,[h("div",Qo,[h("h2",Yo,w(m(o)(e.note.title)),1),h("p",er,w(m(o)(e.note.summary)),1)]),h("div",or,[K(m(Xo),{size:"small",bordered:!0},{default:G(()=>[h("span",rr,w(n[e.note.status]),1),ne(" "+w(m(r)(`notes.status.${e.note.status}`)),1)]),_:1}),h("p",nr,[h("span",ar,w(m(r)("notes.updated")),1),h("time",{datetime:e.note.updated},w(e.note.updated),9,tr)]),K(m(oo),{tag:"a",href:e.note.file,download:"",ghost:""},{default:G(()=>[ne(w(m(r)("notes.download")),1)]),_:1},8,["href"])])]))}}),sr=Ke(lr,[["__scopeId","data-v-e2a4e901"]]),cr=[{id:"cft",title:{zh:"高维共形场论",en:"Conformal Field Theory in Higher Dimensions"},summary:{zh:"主要参考 David Simmons-Duffin 的讲义与文章，并加入了一些我自己在研究中用到的技术。还没写完，会逐渐更新。",en:"Largely following David Simmons-Duffin’s lectures and papers, with some techniques I picked up in my own work folded in. Still unfinished; updated as it goes."},status:"in-progress",file:"/notes/cftnote.pdf",updated:"2024-10-18"},{id:"hawking",title:{zh:"弯曲时空量子场论与霍金辐射",en:"QFT in Curved Spacetime and Hawking Radiation"},summary:{zh:"源自 2023 年秋季学期量子场论讨论班上讲的内容，2024 年暑期整理成讲义。当时图方便用 Markdown 而非 LaTeX 写的，排版较差；计划重写一遍并补完下半部分。",en:"Grown out of a talk I gave in the autumn 2023 QFT seminar and written up in the summer of 2024. I took the shortcut of writing it in Markdown rather than LaTeX, so the typesetting is poor; a rewrite and the second half are planned."},status:"rewriting",file:"/notes/hawkingnote.pdf",updated:"2024-10-18"}],fr=_({__name:"NotesPage",setup(e){const{t:r}=de();return(o,n)=>(f(),S(ae,null,[K(Xe,{eyebrow:m(r)("notes.eyebrow"),title:m(r)("notes.title"),lead:m(r)("notes.lead")},null,8,["eyebrow","title","lead"]),h("ul",null,[(f(!0),S(ae,null,Je(m(cr),a=>(f(),B(sr,{key:a.id,note:a},null,8,["note"]))),128))])],64))}});export{fr as default};
