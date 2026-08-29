import{i as Ae,j as De,k as We,S as oe,l as Z,m as C,d as w,o as f,c as S,n as Q,q as je,h as B,s as Ne,e as h,v as p,x as $,w as J,y as Ve,z as Oe,A as s,B as I,C as ie,D as re,E as Ue,G as q,H as b,I as qe,J as Je,a as de,t as z,u as m,b as K,f as ae,_ as Ke,F as ne,r as Ge}from"./index-CGV1yru1.js";import{P as Xe}from"./PageHeading-BW0Ul3MK.js";import{n as _,a as x,u as ue,c as he,r as te,b as Ze,d as Qe,e as Ye,f as eo,g as le,B as oo}from"./Button-Dkv3qk6I.js";import{u as ro}from"./useLocalized-CSygoqxR.js";var ao="[object Symbol]";function no(e){return typeof e=="symbol"||Ae(e)&&De(e)==ao}function to(e,r){for(var o=-1,a=e==null?0:e.length,n=Array(a);++o<a;)n[o]=r(e[o],o,e);return n}var se=oe?oe.prototype:void 0,ce=se?se.toString:void 0;function fe(e){if(typeof e=="string")return e;if(We(e))return to(e,fe)+"";if(no(e))return ce?ce.call(e):"";var r=e+"";return r=="0"&&1/e==-1/0?"-0":r}function lo(e){return e==null?"":fe(e)}function so(e,r,o){var a=-1,n=e.length;r<0&&(r=-r>n?0:n+r),o=o>n?n:o,o<0&&(o+=n),n=r>o?0:o-r>>>0,r>>>=0;for(var l=Array(n);++a<n;)l[a]=e[a+r];return l}function co(e,r,o){var a=e.length;return o=o===void 0?a:o,!r&&o>=a?e:so(e,r,o)}var io="\\ud800-\\udfff",uo="\\u0300-\\u036f",ho="\\ufe20-\\ufe2f",fo="\\u20d0-\\u20ff",bo=uo+ho+fo,go="\\ufe0e\\ufe0f",vo="\\u200d",Co=RegExp("["+vo+io+bo+go+"]");function be(e){return Co.test(e)}function po(e){return e.split("")}var ge="\\ud800-\\udfff",mo="\\u0300-\\u036f",ko="\\ufe20-\\ufe2f",yo="\\u20d0-\\u20ff",xo=mo+ko+yo,So="\\ufe0e\\ufe0f",zo="["+ge+"]",G="["+xo+"]",X="\\ud83c[\\udffb-\\udfff]",_o="(?:"+G+"|"+X+")",ve="[^"+ge+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",pe="[\\ud800-\\udbff][\\udc00-\\udfff]",wo="\\u200d",me=_o+"?",ke="["+So+"]?",Po="(?:"+wo+"(?:"+[ve,Ce,pe].join("|")+")"+ke+me+")*",Io=ke+me+Po,Bo="(?:"+[ve+G+"?",G,Ce,pe,zo].join("|")+")",$o=RegExp(X+"(?="+X+")|"+Bo+Io,"g");function Mo(e){return e.match($o)||[]}function Ro(e){return be(e)?Mo(e):po(e)}function To(e){return function(r){r=lo(r);var o=be(r)?Ro(r):void 0,a=o?o[0]:r.charAt(0),n=o?co(o,1).join(""):r.slice(1);return a[e]()+n}}var Ho=To("toUpperCase");function Lo(e,r){const o=e.trim().split(/\s+/g),a={top:o[0]};switch(o.length){case 1:a.right=o[0],a.bottom=o[0],a.left=o[0];break;case 2:a.right=o[1],a.left=o[1],a.bottom=o[0];break;case 3:a.right=o[1],a.bottom=o[2],a.left=o[1];break;case 4:a.right=o[1],a.bottom=o[2],a.left=o[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return a}var Fo=Z("base-icon",`
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
 `)]);const Eo=["onClick","onMousedown","onMouseup","role","aria-label","aria-hidden","aria-disabled"];var Ao=w({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){ue("-base-icon",Fo,Q(e,"clsPrefix"))},render(){return f(),S("i",{class:x(`${this.clsPrefix}-base-icon`),onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},[_(()=>{var e,r;return(r=(e=this.$slots).default)==null?void 0:r.call(e)})],42,Eo)}});function Do(e,r){const o=w({render(){return r()}});return w({name:Ho(e),setup(){var n;const a=(n=je(Ne,null))==null?void 0:n.mergedIconsRef;return()=>{var c;const l=(c=a==null?void 0:a.value)==null?void 0:c[e];return l?l():(f(),B(o,{key:1}))}}})}var Wo=Do("close",()=>(()=>{const e=he("6b30a2290cd08d4");return e[0]||(e[0]=h("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},[h("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[h("g",{fill:"currentColor","fill-rule":"nonzero"},[h("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"})])])],-1))})()),jo=Z("base-close",`
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
 `)])]),No=w({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return ue("-base-close",jo,Q(e,"clsPrefix")),()=>{const{clsPrefix:r,disabled:o,absolute:a,round:n,isButtonTag:l}=e,c=l?"button":"div";return(()=>{const i=he("b5bdc9fe09f5ae00");return f(),B(c,{type:l?"button":void 0,tabindex:o||!e.focusable?-1:0,"aria-disabled":o,"aria-label":"close",role:l?void 0:"button",disabled:o,class:x([`${r}-base-close`,a&&`${r}-base-close--absolute`,o&&`${r}-base-close--disabled`,n&&`${r}-base-close--round`]),onMousedown:i[0]||(i[0]=u=>{e.focusable||u.preventDefault()}),onClick:e.onClick},{default:J(()=>[(f(),B(Ao,{clsPrefix:r},{default:()=>(f(),B(Wo))},1032,["clsPrefix"]))]),_:2},1032,["type","tabindex","aria-disabled","role","disabled","class","onClick"])})()}}});function Vo(e){const{textColor2:r,primaryColorHover:o,primaryColorPressed:a,primaryColor:n,infoColor:l,successColor:c,warningColor:i,errorColor:u,baseColor:g,borderColor:P,opacityDisabled:T,tagColor:H,closeIconColor:M,closeIconColorHover:y,closeIconColorPressed:t,borderRadiusSmall:d,fontSizeMini:k,fontSizeTiny:v,fontSizeSmall:L,fontSizeMedium:F,heightMini:E,heightTiny:A,heightSmall:D,heightMedium:W,closeColorHover:j,closeColorPressed:N,buttonColor2Hover:V,buttonColor2Pressed:O,fontWeightStrong:U}=e;return{...Oe,closeBorderRadius:d,heightTiny:E,heightSmall:A,heightMedium:D,heightLarge:W,borderRadius:d,opacityDisabled:T,fontSizeTiny:k,fontSizeSmall:v,fontSizeMedium:L,fontSizeLarge:F,fontWeightStrong:U,textColorCheckable:r,textColorHoverCheckable:r,textColorPressedCheckable:r,textColorChecked:g,colorCheckable:"#0000",colorHoverCheckable:V,colorPressedCheckable:O,colorChecked:n,colorCheckedHover:o,colorCheckedPressed:a,border:`1px solid ${P}`,textColor:r,color:H,colorBordered:"rgb(250, 250, 252)",closeIconColor:M,closeIconColorHover:y,closeIconColorPressed:t,closeColorHover:j,closeColorPressed:N,borderPrimary:`1px solid ${s(n,{alpha:.3})}`,textColorPrimary:n,colorPrimary:s(n,{alpha:.12}),colorBorderedPrimary:s(n,{alpha:.1}),closeIconColorPrimary:n,closeIconColorHoverPrimary:n,closeIconColorPressedPrimary:n,closeColorHoverPrimary:s(n,{alpha:.12}),closeColorPressedPrimary:s(n,{alpha:.18}),borderInfo:`1px solid ${s(l,{alpha:.3})}`,textColorInfo:l,colorInfo:s(l,{alpha:.12}),colorBorderedInfo:s(l,{alpha:.1}),closeIconColorInfo:l,closeIconColorHoverInfo:l,closeIconColorPressedInfo:l,closeColorHoverInfo:s(l,{alpha:.12}),closeColorPressedInfo:s(l,{alpha:.18}),borderSuccess:`1px solid ${s(c,{alpha:.3})}`,textColorSuccess:c,colorSuccess:s(c,{alpha:.12}),colorBorderedSuccess:s(c,{alpha:.1}),closeIconColorSuccess:c,closeIconColorHoverSuccess:c,closeIconColorPressedSuccess:c,closeColorHoverSuccess:s(c,{alpha:.12}),closeColorPressedSuccess:s(c,{alpha:.18}),borderWarning:`1px solid ${s(i,{alpha:.35})}`,textColorWarning:i,colorWarning:s(i,{alpha:.15}),colorBorderedWarning:s(i,{alpha:.12}),closeIconColorWarning:i,closeIconColorHoverWarning:i,closeIconColorPressedWarning:i,closeColorHoverWarning:s(i,{alpha:.12}),closeColorPressedWarning:s(i,{alpha:.18}),borderError:`1px solid ${s(u,{alpha:.23})}`,textColorError:u,colorError:s(u,{alpha:.1}),colorBorderedError:s(u,{alpha:.08}),closeIconColorError:u,closeIconColorHoverError:u,closeIconColorPressedError:u,closeColorHoverError:s(u,{alpha:.12}),closeColorPressedError:s(u,{alpha:.18})}}const Oo={common:Ve,self:Vo};var Uo={color:Object,type:{type:String,default:"default"},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},qo=Z("tag",`
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
 `,[$("disabled",[C("&:hover","background-color: var(--n-color-checked-hover);"),C("&:active","background-color: var(--n-color-checked-pressed);")])])])]);const Jo=["onClick","onMouseenter","onMouseleave"],Ko={...ie.props,...Uo,bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function},Go=Je("n-tag");var Xo=w({name:"Tag",props:Ko,slots:Object,setup(e){const r=Ue(null),{mergedBorderedRef:o,mergedClsPrefixRef:a,inlineThemeDisabled:n,mergedRtlRef:l,mergedComponentPropsRef:c}=Ze(e),i=q(()=>{var t,d;return e.size||((d=(t=c==null?void 0:c.value)==null?void 0:t.Tag)==null?void 0:d.size)||"medium"}),u=ie("Tag","-tag",qo,Oo,e,a);qe(Go,{roundRef:Q(e,"round")});function g(){if(!e.disabled&&e.checkable){const{checked:t,onCheckedChange:d,onUpdateChecked:k,"onUpdate:checked":v}=e;k&&k(!t),v&&v(!t),d&&d(!t)}}function P(t){if(e.triggerClickOnClose||t.stopPropagation(),!e.disabled){const{onClose:d}=e;d&&eo(d,t)}}const T={setTextContent(t){const{value:d}=r;d&&(d.textContent=t)}},H=Qe("Tag",l,a),M=q(()=>{const{type:t,color:{color:d,textColor:k}={}}=e,v=i.value,{common:{cubicBezierEaseInOut:L},self:{padding:F,closeMargin:E,borderRadius:A,opacityDisabled:D,textColorCheckable:W,textColorHoverCheckable:j,textColorPressedCheckable:N,textColorChecked:V,colorCheckable:O,colorHoverCheckable:U,colorPressedCheckable:ye,colorChecked:xe,colorCheckedHover:Se,colorCheckedPressed:ze,closeBorderRadius:_e,fontWeightStrong:we,[b("colorBordered",t)]:Pe,[b("closeSize",v)]:Ie,[b("closeIconSize",v)]:Be,[b("fontSize",v)]:$e,[b("height",v)]:Y,[b("color",t)]:Me,[b("textColor",t)]:Re,[b("border",t)]:Te,[b("closeIconColor",t)]:ee,[b("closeIconColorHover",t)]:He,[b("closeIconColorPressed",t)]:Le,[b("closeColorHover",t)]:Fe,[b("closeColorPressed",t)]:Ee}}=u.value,R=Lo(E);return{"--n-font-weight-strong":we,"--n-avatar-size-override":`calc(${Y} - 8px)`,"--n-bezier":L,"--n-border-radius":A,"--n-border":Te,"--n-close-icon-size":Be,"--n-close-color-pressed":Ee,"--n-close-color-hover":Fe,"--n-close-border-radius":_e,"--n-close-icon-color":ee,"--n-close-icon-color-hover":He,"--n-close-icon-color-pressed":Le,"--n-close-icon-color-disabled":ee,"--n-close-margin-top":R.top,"--n-close-margin-right":R.right,"--n-close-margin-bottom":R.bottom,"--n-close-margin-left":R.left,"--n-close-size":Ie,"--n-color":d||(o.value?Pe:Me),"--n-color-checkable":O,"--n-color-checked":xe,"--n-color-checked-hover":Se,"--n-color-checked-pressed":ze,"--n-color-hover-checkable":U,"--n-color-pressed-checkable":ye,"--n-font-size":$e,"--n-height":Y,"--n-opacity-disabled":D,"--n-padding":F,"--n-text-color":k||Re,"--n-text-color-checkable":W,"--n-text-color-checked":V,"--n-text-color-hover-checkable":j,"--n-text-color-pressed-checkable":N}}),y=n?Ye("tag",q(()=>{let t="";const{type:d,color:{color:k,textColor:v}={}}=e;return t+=d[0],t+=i.value[0],k&&(t+=`a${le(k)}`),v&&(t+=`b${le(v)}`),o.value&&(t+="c"),t}),M,e):void 0;return{...T,rtlEnabled:H,mergedClsPrefix:a,contentRef:r,mergedBordered:o,handleClick:g,handleCloseClick:P,cssVars:n?void 0:M,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender}},render(){const{mergedClsPrefix:e,rtlEnabled:r,closable:o,color:{borderColor:a}={},round:n,onRender:l,$slots:c}=this;l==null||l();const i=te(c.avatar,g=>g&&(f(),S("div",{class:x(`${e}-tag__avatar`)},[_(()=>g)],2))),u=te(c.icon,g=>g&&(f(),S("div",{class:x(`${e}-tag__icon`)},[_(()=>g)],2)));return f(),S("div",{class:x([`${e}-tag`,this.themeClass,{[`${e}-tag--rtl`]:r,[`${e}-tag--strong`]:this.strong,[`${e}-tag--disabled`]:this.disabled,[`${e}-tag--checkable`]:this.checkable,[`${e}-tag--checked`]:this.checkable&&this.checked,[`${e}-tag--round`]:n,[`${e}-tag--avatar`]:i,[`${e}-tag--icon`]:u,[`${e}-tag--closable`]:o}]),style:re(this.cssVars),onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},[_(()=>u||i),h("span",{class:x(`${e}-tag__content`),ref:"contentRef"},[_(()=>{var g,P;return(P=(g=this.$slots).default)==null?void 0:P.call(g)})],2),!this.checkable&&o?(f(),B(No,{key:0,clsPrefix:e,class:x(`${e}-tag__close`),disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:n,isButtonTag:this.internalCloseIsButtonTag,absolute:!0},null,8,["clsPrefix","class","disabled","onClick","focusable","round","isButtonTag"])):_(()=>null),!this.checkable&&this.mergedBordered?(f(),S("div",{key:2,class:x(`${e}-tag__border`),style:re({borderColor:a})},null,6)):_(()=>null)],46,Jo)}});const Zo={class:"row hairline-b page-x"},Qo={class:"main"},Yo={class:"title"},er={class:"summary"},or={class:"side"},rr={class:"glyph-inline","aria-hidden":"true"},ar={class:"updated"},nr={class:"eyebrow"},tr=["datetime"],lr=w({__name:"NoteRow",props:{note:{}},setup(e){const{t:r}=de(),o=ro(),a={complete:"●","in-progress":"○",rewriting:"→"};return(n,l)=>(f(),S("li",Zo,[h("div",Qo,[h("h2",Yo,z(m(o)(e.note.title)),1),h("p",er,z(m(o)(e.note.summary)),1)]),h("div",or,[K(m(Xo),{size:"small",bordered:!0},{default:J(()=>[h("span",rr,z(a[e.note.status]),1),ae(" "+z(m(r)(`notes.status.${e.note.status}`)),1)]),_:1}),h("p",ar,[h("span",nr,z(m(r)("notes.updated")),1),h("time",{datetime:e.note.updated},z(e.note.updated),9,tr)]),K(m(oo),{tag:"a",href:e.note.file,download:"",ghost:""},{default:J(()=>[ae(z(m(r)("notes.download")),1)]),_:1},8,["href"])])]))}}),sr=Ke(lr,[["__scopeId","data-v-e2a4e901"]]),cr=[{id:"cft",title:{zh:"高维共形场论",en:"Conformal Field Theory in Higher Dimensions"},summary:{zh:"主要参考 David Simmons-Duffin 的讲义和文章，他大概是现存的共形场论大王。也掺了些我自己研究时用到的技术。还没写完，会接着更新。",en:"Mostly follows David Simmons-Duffin's lectures and papers; he is probably the reigning king of CFT. Some techniques from my own work are folded in. Still unfinished, still growing."},status:"in-progress",file:"/notes/cftnote.pdf",updated:"2024-10-18"},{id:"hawking",title:{zh:"弯曲时空量子场论与霍金辐射",en:"QFT in Curved Spacetime and Hawking Radiation"},summary:{zh:"2023 年秋季学期在量子场论讨论班上讲过，2024 年暑假整理成了讲义。当时图省事，没用 LaTeX，直接拿 Markdown 写的，排版因此有点糙。打算重写一遍，把下半部分补完。",en:"This started as a talk in the autumn 2023 QFT seminar and got written up over the summer of 2024. I took the lazy route and used Markdown instead of LaTeX, so the typesetting is rough. A rewrite and the second half are on the list."},status:"rewriting",file:"/notes/hawkingnote.pdf",updated:"2024-10-18"}],fr=w({__name:"NotesPage",setup(e){const{t:r}=de();return(o,a)=>(f(),S(ne,null,[K(Xe,{eyebrow:m(r)("notes.eyebrow"),title:m(r)("notes.title"),lead:m(r)("notes.lead")},null,8,["eyebrow","title","lead"]),h("ul",null,[(f(!0),S(ne,null,Ge(m(cr),n=>(f(),B(sr,{key:n.id,note:n},null,8,["note"]))),128))])],64))}});export{fr as default};
