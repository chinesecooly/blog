import{p as S,m as P,a as te,g as N,u as ne,b as V,c as s,d as h,e as f,i as q,f as re,h as U,j as ae,k as se,l as ie,n as oe,o as le,q as A,T as ue,S as L,t as ce,r as de,s as k,v as ge,w as z,x as ve,y as me,z as fe,A as D,B as he,F as _e,C as be,D as M,E as G,G as E,H as Y}from"./index-XcvmlV1r.js";const Se="/assets/logo-sCBY-VIx.svg",ye=S({fluid:{type:Boolean,default:!1},...P(),...te()},"VContainer"),Ce=N()({name:"VContainer",props:ye(),setup(e,r){let{slots:n}=r;const{rtlClasses:t}=ne();return V(()=>s(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},t.value,e.class],style:e.style},n)),{}}}),ke=S({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function xe(e){return{dimensionStyles:h(()=>({height:f(e.height),maxHeight:f(e.maxHeight),maxWidth:f(e.maxWidth),minHeight:f(e.minHeight),minWidth:f(e.minWidth),width:f(e.width)}))}}function Re(e){return{aspectStyles:h(()=>{const r=Number(e.aspectRatio);return r?{paddingBottom:String(1/r*100)+"%"}:void 0})}}const J=S({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...P(),...ke()},"VResponsive"),I=N()({name:"VResponsive",props:J(),setup(e,r){let{slots:n}=r;const{aspectStyles:t}=Re(e),{dimensionStyles:i}=xe(e);return V(()=>{var d;return s("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[s("div",{class:"v-responsive__sizer",style:t.value},null),(d=n.additional)==null?void 0:d.call(n),n.default&&s("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function we(e){return re(()=>{const r=[],n={};if(e.value.background)if(U(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&ae(e.value.background)){const t=se(e.value.background);if(t.a==null||t.a===1){const i=ie(t);n.color=i,n.caretColor=i}}}else r.push(`bg-${e.value.background}`);return e.value.text&&(U(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):r.push(`text-${e.value.text}`)),{colorClasses:r,colorStyles:n}})}function Be(e,r){const n=h(()=>({background:q(e)?e.value:r?e[r]:null})),{colorClasses:t,colorStyles:i}=we(n);return{backgroundColorClasses:t,backgroundColorStyles:i}}const ze=S({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ie(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:oe();return{roundedClasses:h(()=>{const t=q(e)?e.value:e.rounded,i=[];if(t===!0||t==="")i.push(`${r}--rounded`);else if(typeof t=="string"||t===0)for(const d of String(t).split(" "))i.push(`rounded-${d}`);return i})}}const Pe=S({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),R=(e,r)=>{let{slots:n}=r;const{transition:t,disabled:i,...d}=e,{component:_=ue,...g}=typeof t=="object"?t:{};return le(_,A(typeof t=="string"?{name:i?"":t}:g,d,{disabled:i}),n)};function Ne(e,r){if(!L)return;const n=r.modifiers||{},t=r.value,{handler:i,options:d}=typeof t=="object"?t:{handler:t,options:{}},_=new IntersectionObserver(function(){var v;let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],x=arguments.length>1?arguments[1]:void 0;const o=(v=e._observe)==null?void 0:v[r.instance.$.uid];if(!o)return;const l=g.some(b=>b.isIntersecting);i&&(!n.quiet||o.init)&&(!n.once||l||o.init)&&i(l,g,x),l&&n.once?K(e,r):o.init=!0},d);e._observe=Object(e._observe),e._observe[r.instance.$.uid]={init:!1,observer:_},_.observe(e)}function K(e,r){var t;const n=(t=e._observe)==null?void 0:t[r.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[r.instance.$.uid])}const Ve={mounted:Ne,unmounted:K},We=Ve,Te=S({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...J(),...P(),...ze(),...Pe()},"VImg"),He=N()({name:"VImg",directives:{intersect:We},props:Te(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,r){let{emit:n,slots:t}=r;const{backgroundColorClasses:i,backgroundColorStyles:d}=Be(ce(e,"color")),{roundedClasses:_}=Ie(e),g=de("VImg"),x=k(""),o=ge(),l=k(e.eager?"loading":"idle"),v=k(),b=k(),c=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),y=h(()=>c.value.aspect||v.value/b.value||0);z(()=>e.src,()=>{w(l.value!=="idle")}),z(y,(a,u)=>{!a&&u&&o.value&&C(o.value)}),ve(()=>w());function w(a){if(!(e.eager&&a)&&!(L&&!a&&!e.eager)){if(l.value="loading",c.value.lazySrc){const u=new Image;u.src=c.value.lazySrc,C(u,null)}c.value.src&&me(()=>{var u;n("loadstart",((u=o.value)==null?void 0:u.currentSrc)||c.value.src),setTimeout(()=>{var m;if(!g.isUnmounted)if((m=o.value)!=null&&m.complete){if(o.value.naturalWidth||T(),l.value==="error")return;y.value||C(o.value,null),l.value==="loading"&&W()}else y.value||C(o.value),H()})})}}function W(){var a;g.isUnmounted||(H(),C(o.value),l.value="loaded",n("load",((a=o.value)==null?void 0:a.currentSrc)||c.value.src))}function T(){var a;g.isUnmounted||(l.value="error",n("error",((a=o.value)==null?void 0:a.currentSrc)||c.value.src))}function H(){const a=o.value;a&&(x.value=a.currentSrc||a.src)}let B=-1;fe(()=>{clearTimeout(B)});function C(a){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{if(clearTimeout(B),g.isUnmounted)return;const{naturalHeight:F,naturalWidth:O}=a;F||O?(v.value=O,b.value=F):!a.complete&&l.value==="loading"&&u!=null?B=window.setTimeout(m,u):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,b.value=1)};m()}const j=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),Q=()=>{var m;if(!c.value.src||l.value==="idle")return null;const a=s("img",{class:["v-img__img",j.value],style:{objectPosition:e.position},src:c.value.src,srcset:c.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:o,onLoad:W,onError:T},null),u=(m=t.sources)==null?void 0:m.call(t);return s(R,{transition:e.transition,appear:!0},{default:()=>[D(u?s("picture",{class:"v-img__picture"},[u,a]):a,[[be,l.value==="loaded"]])]})},X=()=>s(R,{transition:e.transition},{default:()=>[c.value.lazySrc&&l.value!=="loaded"&&s("img",{class:["v-img__img","v-img__img--preload",j.value],style:{objectPosition:e.position},src:c.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),Z=()=>t.placeholder?s(R,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!t.error)&&s("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,p=()=>t.error?s(R,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&s("div",{class:"v-img__error"},[t.error()])]}):null,ee=()=>e.gradient?s("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,$=k(!1);{const a=z(y,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{$.value=!0})}),a())})}return V(()=>{const a=I.filterProps(e);return D(s(I,A({class:["v-img",{"v-img--booting":!$.value},i.value,_.value,e.class],style:[{width:f(e.width==="auto"?v.value:e.width)},d.value,e.style]},a,{aspectRatio:y.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>s(_e,null,[s(Q,null,null),s(X,null,null),s(ee,null,null),s(Z,null,null),s(p,null,null)]),default:t.default}),[[he("intersect"),{handler:w,options:e.options},null,{once:!0}]])}),{currentSrc:x,image:o,state:l,naturalWidth:v,naturalHeight:b}}}),je=Y("div",{class:"text-body-2 font-weight-light mb-n1"},"Welcome to",-1),$e=Y("h1",{class:"text-h2 font-weight-bold"},"BitLoom",-1),Fe={__name:"HelloWorld",setup(e){return(r,n)=>(M(),G(Ce,{class:"fill-height"},{default:E(()=>[s(I,{class:"align-center text-center fill-height"},{default:E(()=>[s(He,{height:"300",src:Se}),je,$e]),_:1})]),_:1}))}},Ue={__name:"index",setup(e){return(r,n)=>{const t=Fe;return M(),G(t)}}};export{Ue as default};
