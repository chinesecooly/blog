import{d as i,a0 as n,ar as c,Q as h,m as o,al as l,b as d,c as u,M as f}from"./entry.FjryZQzK.js";const g=["src","alt","width","height"],p=i({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,r=n(()=>{var a;if((a=t.src)!=null&&a.startsWith("/")&&!t.src.startsWith("//")){const s=c(h(o().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return l(s,t.src)}return t.src});return(a,s)=>(d(),u("img",{src:f(r),alt:e.alt,width:e.width,height:e.height},null,8,g))}});export{p as default};
