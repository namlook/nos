import{d as f,r,o as n,b as c,h as t,t as u,g as d,G as v,H as g,_ as h}from"./index-5f1452c8.js";import{b as y,N as x,u as N}from"./NsEvent-2e58eb47.js";import{s as Q}from"./textarea.esm-9e53d3c6.js";const b={class:"query-page"},k={class:"mb-5 p-4 white-box"},w=t("h1",null,"Query",-1),V={class:"flex flex-column gap-4"},P={class:"flex flex-column gap-4"},B=f({__name:"QueryPage",setup(q){const{fetch:_}=N(),o=r(!1),i=r([]),l=r(`{
  "kinds": [1],
  "limit": 10
}`),p=async()=>{o.value=!0;try{let s=JSON.parse(l.value);const a=await _([s]);i.value=a.sort((e,m)=>m.created_at-e.created_at)}catch(s){console.error(s)}o.value=!1};return(s,a)=>(n(),c("div",b,[t("div",k,[w,t("div",V,[u(d(Q),{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),rows:"15",style:{width:"100%"}},null,8,["modelValue"]),u(d(y),{onClick:p,label:"Search",loading:o.value},null,8,["loading"])])]),t("div",P,[(n(!0),c(v,null,g(i.value,e=>(n(),c("div",{key:e.id},[u(x,{event:e},null,8,["event"])]))),128))])]))}}),S=h(B,[["__file","/Users/nicolasc/Documents/projects/others/nosworld/src/pages/QueryPage/QueryPage.vue"]]);export{S as default};