import{r,af as U,ag as V,h as F,S as R,d as S,q as v,o as l,c as d,b as o,e as p,f as i,s as B,F as _,g as h,H as q,_ as A}from"./index-1f7cdc4f.js";import{a as D,N as E}from"./NsEvent-ebcfa659.js";import{s as m}from"./inputswitch.esm-bc541fe4.js";const{loadUsersActivities:g,fetchUserFollowers:L}=F(),y=c=>R().events.find({selector:{"schema.author.@id":{$in:c},"schema.@type":{$in:["Article","SocialMediaPosting","Thing"]}},sort:[{created_at:"desc"}],limit:100}).exec();function $(c,a){const f=r(!0),t=r([]);return U(async()=>{const u=V(c.value);let s=[];a.value==="activity"?s=[u]:a.value==="feed"&&(s=await L(u)),t.value=await y(s),t.value.length===0?(await g(s),t.value=await y(s)):g(s),f.value=!1}),{isLoading:f,feed:t}}const j={class:"ns-user-feed-component"},C={class:"flex justify-content-between mb-4 inset-shadow-1 p-5 border-round"},H={class:"flex align-items-center gap-2"},I=o("span",null,"Reposts",-1),M={class:"flex align-items-center gap-2"},P=o("span",null,"Replies",-1),T={class:"flex align-items-center gap-2"},z=o("span",null,"Reactions",-1),G={key:0,class:"flex flex-column gap-4"},J={key:1,class:"flex flex-column gap-4"},K=S({__name:"NsUserFeed",props:{type:{type:String,required:!0},pubkey:{type:String,required:!0}},setup(c){const a=c,f=r(!1),t=r(!1),u=r(!1),s=r(!0),x=v(()=>a.pubkey),k=v(()=>a.type),{isLoading:w,feed:N}=$(x,k),b=()=>{};return(O,n)=>(l(),d("div",j,[o("div",C,[p(i(B),{loading:f.value,outlined:"",icon:"pi pi-refresh",onClick:b},null,8,["loading"]),o("div",H,[p(i(m),{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=e=>s.value=e)},null,8,["modelValue"]),I]),o("div",M,[p(i(m),{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e)},null,8,["modelValue"]),P]),o("div",T,[p(i(m),{modelValue:u.value,"onUpdate:modelValue":n[2]||(n[2]=e=>u.value=e)},null,8,["modelValue"]),z])]),i(w)?(l(),d("div",G,[(l(),d(_,null,h(5,e=>p(D,{key:e})),64))])):(l(),d("div",J,[(l(!0),d(_,null,h(i(N),e=>(l(),q(E,{key:e.id,event:e},null,8,["event"]))),128))]))]))}}),Y=A(K,[["__file","/Users/nicolasc/Documents/projects/others/nosworld/src/components/structures/NsUserFeed/NsUserFeed.vue"]]);export{Y as N};
