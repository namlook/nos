import{d as u,r as c,I as d,o as e,b as s,h as t,z as p,G as g,H as _,t as f,_ as m}from"./index-be4e65b1.js";import{N as v,u as h}from"./NsEvent-29604372.js";const y={key:0},x={key:1},D={class:"white-box p-4 mb-4"},k={class:"flex flex-column gap-4"},N=u({__name:"TagDisplayPage",props:{tag:{type:String,required:!0}},setup(o){const i=o,n=c(),{fetch:l}=h(),a=c(!1);return d(async()=>{a.value=!0,n.value=await l([{"#t":[i.tag],limit:100}],{batchId:"tags"}),a.value=!1}),(b,w)=>a.value?(e(),s("div",y,"...")):(e(),s("div",x,[t("div",D,[t("h1",null,"#"+p(o.tag),1)]),t("div",k,[(e(!0),s(g,null,_(n.value,r=>(e(),s("div",{key:r.id},[f(v,{event:r},null,8,["event"])]))),128))])]))}}),B=m(N,[["__file","/Users/nicolasc/Documents/projects/others/nosworld/src/pages/TagDisplayPage/TagDisplayPage.vue"]]);export{B as default};