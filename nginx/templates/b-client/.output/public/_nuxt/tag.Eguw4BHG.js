import{as as m,D as l,at as g,a0 as i,au as d,av as S,aw as h,ax as k,ay as y,az as p,aA as c,aB as N}from"./entry.FjryZQzK.js";const $=["top","bottom"],P=["start","end","left","right"];function B(e,t){let[o,n]=e.split(" ");return n||(n=m($,o)?"start":m(P,o)?"top":"center"),{side:b(o,t),align:b(n,t)}}function b(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const w=l({border:[Boolean,Number,String]},"border");function D(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:g();return{borderClasses:i(()=>{const n=d(e)?e.value:e.border,a=[];if(n===!0||n==="")a.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))a.push(`border-${s}`);return a})}}function C(e){return S(()=>{const t=[],o={};if(e.value.background)if(h(e.value.background)){if(o.backgroundColor=e.value.background,!e.value.text&&k(e.value.background)){const n=y(e.value.background);if(n.a==null||n.a===1){const a=p(n);o.color=a,o.caretColor=a}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(h(e.value.text)?(o.color=e.value.text,o.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:o}})}function R(e,t){const o=i(()=>({text:d(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:a}=C(o);return{textColorClasses:n,textColorStyles:a}}function T(e,t){const o=i(()=>({background:d(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:a}=C(o);return{backgroundColorClasses:n,backgroundColorStyles:a}}const A=l({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function E(e){return{dimensionStyles:i(()=>({height:c(e.height),maxHeight:c(e.maxHeight),maxWidth:c(e.maxWidth),minHeight:c(e.minHeight),minWidth:c(e.minWidth),width:c(e.width)}))}}const F=l({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function I(e){return{elevationClasses:i(()=>{const o=d(e)?e.value:e.elevation,n=[];return o==null||n.push(`elevation-${o}`),n})}}const v={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},L=l({location:String},"location");function X(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=N();return{locationStyles:i(()=>{if(!e.location)return{};const{side:s,align:u}=B(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function f(x){return o?o(x):0}const r={};return s!=="center"&&(t?r[v[s]]=`calc(100% - ${f(s)}px)`:r[s]=0),u!=="center"?t?r[v[u]]=`calc(100% - ${f(u)}px)`:r[u]=0:(s==="center"?r.top=r.left="50%":r[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",r.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),r})}}const H=["static","relative","fixed","absolute","sticky"],Y=l({position:{type:String,validator:e=>H.includes(e)}},"position");function j(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:g();return{positionClasses:i(()=>e.position?`${t}--${e.position}`:void 0)}}const z=l({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function M(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:g();return{roundedClasses:i(()=>{const n=d(e)?e.value:e.rounded,a=d(e)?e.value:e.tile,s=[];if(n===!0||n==="")s.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const u of String(n).split(" "))s.push(`rounded-${u}`);else a&&s.push("rounded-0");return s})}}const O=l({tag:{type:String,default:"div"}},"tag");export{A as a,F as b,L as c,Y as d,z as e,O as f,D as g,E as h,I as i,X as j,j as k,M as l,w as m,C as n,R as o,b as t,T as u};
