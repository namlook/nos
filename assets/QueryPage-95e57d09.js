import{d as f,r,o as n,b as c,h as t,t as u,g as d,G as v,H as g,I as h,_ as y}from"./index-92a64d0e.js";import{s as x}from"./textarea.esm-be156289.js";import{N,u as Q}from"./NsEvent-b591ab94.js";const k={class:"query-page"},w={class:"mb-5 p-4 white-box"},V=t("h1",null,"Query",-1),b={class:"flex flex-column gap-4"},P={class:"flex flex-column gap-4"},B=f({__name:"QueryPage",setup(q){const{fetch:_}=Q(),o=r(!1),i=r([]),l=r(`{
  "kinds": [1],
  "limit": 10
}`),p=async()=>{o.value=!0;try{let s=JSON.parse(l.value);const a=await _([s]);i.value=a.sort((e,m)=>m.created_at-e.created_at)}catch(s){console.error(s)}o.value=!1};return(s,a)=>(n(),c("div",k,[t("div",w,[V,t("div",b,[u(d(x),{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),rows:"15",style:{width:"100%"}},null,8,["modelValue"]),u(d(v),{onClick:p,label:"Search",loading:o.value},null,8,["loading"])])]),t("div",P,[(n(!0),c(g,null,h(i.value,e=>(n(),c("div",{key:e.id},[u(N,{event:e},null,8,["event"])]))),128))])]))}}),S=y(B,[["__file","/Users/nicolasc/Documents/projects/others/nosworld/src/pages/QueryPage/QueryPage.vue"]]);export{S as default};