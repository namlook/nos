import{r as c,af as F,ag as V,h as b,S as R,d as S,q as v,o as i,c as d,b as o,e as p,f as r,s as B,F as _,g as h,H as q,_ as A}from"./index-8ef7e3aa.js";import{a as D,N as E}from"./NsEvent-4d3945b7.js";import{s as m}from"./inputswitch.esm-c7e4efe3.js";const{loadUsersActivities:g,fetchUserFollowers:L}=b(),y=a=>R().events.find({selector:{"schema.author.@id":{$in:a},"schema.@type":{$in:["Article","SocialMediaPosting","Thing"]}},sort:[{created_at:"desc"}],limit:100}).exec();function $(a,n){console.log("useUserFeed",a.value);const f=c(!0),t=c([]);return F(async()=>{const u=V(a.value);let s=[];n.value==="activity"?s=[u]:n.value==="feed"&&(s=await L(u)),t.value=await y(s),t.value.length===0?(await g(s),t.value=await y(s)):g(s),f.value=!1}),{isLoading:f,feed:t}}const j={class:"ns-user-feed-component"},C={class:"flex justify-content-between mb-4 inset-shadow-1 p-5 border-round"},H={class:"flex align-items-center gap-2"},I=o("span",null,"Reposts",-1),M={class:"flex align-items-center gap-2"},P=o("span",null,"Replies",-1),T={class:"flex align-items-center gap-2"},z=o("span",null,"Reactions",-1),G={key:0,class:"flex flex-column gap-4"},J={key:1,class:"flex flex-column gap-4"},K=S({__name:"NsUserFeed",props:{type:{type:String,required:!0},pubkey:{type:String,required:!0}},setup(a){const n=a,f=c(!1),t=c(!1),u=c(!1),s=c(!0),x=v(()=>n.pubkey),w=v(()=>n.type),{isLoading:N,feed:U}=$(x,w),k=()=>{};return(O,l)=>(i(),d("div",j,[o("div",C,[p(r(B),{loading:f.value,outlined:"",icon:"pi pi-refresh",onClick:k},null,8,["loading"]),o("div",H,[p(r(m),{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=e=>s.value=e)},null,8,["modelValue"]),I]),o("div",M,[p(r(m),{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=e=>t.value=e)},null,8,["modelValue"]),P]),o("div",T,[p(r(m),{modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=e=>u.value=e)},null,8,["modelValue"]),z])]),r(N)?(i(),d("div",G,[(i(),d(_,null,h(5,e=>p(D,{key:e})),64))])):(i(),d("div",J,[(i(!0),d(_,null,h(r(U),e=>(i(),q(E,{key:e.id,event:e},null,8,["event"]))),128))]))]))}}),Y=A(K,[["__file","/Users/nicolasc/Documents/projects/others/nosworld/src/components/structures/NsUserFeed/NsUserFeed.vue"]]);export{Y as N};