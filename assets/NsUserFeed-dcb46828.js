import{f as e,V,W as k,h as U,d as F,r as N,q as y,o as p,c as f,b as l,e as _,F as h,g as x,H as I,_ as E}from"./index-19122a9a.js";import{u as R,a as T,N as q}from"./NsEvent-7338338a.js";import{s as g}from"./inputswitch.esm-02e8aac7.js";const C=[6,16],D=7,K=1,S=30023,{fetch:b,fetchContacts:w}=U();function B(m,a,{showReplies:r,showReactions:u,showReposts:i}){return R({queryKey:["ns-user-feed",m,a,r,u,i],async queryFn(){let c=[];if(e(m)==="activity")console.log("activity"),c=[V(e(a))];else{console.log("feed");const o=await w(e(a)),n=o==null?void 0:o.tags.filter(s=>s[0]==="p");c=(n==null?void 0:n.map(s=>s[1]).filter(s=>s!==e(a)))??[]}if(c.length){const o=[K,S];e(u)===!0&&o.push(D),e(i)===!0&&o.push(...C);let n=await b([{kinds:o,authors:c,limit:150}]);return e(r)===!1&&(n=n.filter(s=>!k(s))),n.sort((s,v)=>v.created_at-s.created_at)}return[]}})}const L={class:"ns-user-feed-component"},j={class:"flex justify-content-between mb-4 inset-shadow-1 p-5 border-round"},A={class:"flex align-items-center gap-2"},H=l("span",null,"Reposts",-1),O={class:"flex align-items-center gap-2"},Q=l("span",null,"Replies",-1),P={class:"flex align-items-center gap-2"},W=l("span",null,"Reactions",-1),X={key:0,class:"flex flex-column gap-4"},z={key:1,class:"flex flex-column gap-4"},G=F({__name:"NsUserFeed",props:{type:{type:String,required:!0},pubkey:{type:String,required:!0}},setup(m){const a=m,r=N(!1),u=N(!1),i=N(!0),c=y(()=>a.pubkey),o=y(()=>a.type),{isLoading:n,data:s}=B(o,c,{showReactions:u,showReplies:r,showReposts:i});return(v,d)=>(p(),f("div",L,[l("div",j,[l("div",A,[_(e(g),{modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=t=>i.value=t)},null,8,["modelValue"]),H]),l("div",O,[_(e(g),{modelValue:r.value,"onUpdate:modelValue":d[1]||(d[1]=t=>r.value=t)},null,8,["modelValue"]),Q]),l("div",P,[_(e(g),{modelValue:u.value,"onUpdate:modelValue":d[2]||(d[2]=t=>u.value=t)},null,8,["modelValue"]),W])]),e(n)?(p(),f("div",X,[(p(),f(h,null,x(5,t=>_(T,{key:t})),64))])):(p(),f("div",z,[(p(!0),f(h,null,x(e(s),t=>(p(),I(q,{key:t.id,event:t},null,8,["event"]))),128))]))]))}}),Z=E(G,[["__file","/Users/nicolasc/Documents/projects/others/nosworld/src/components/structures/NsUserFeed/NsUserFeed.vue"]]);export{Z as N};
