import{g as s,d as f,r as h,c as m,q as E,o as n,v as o,b as i,t as T,y as b,H as D,I as q,E as C,_,O as P,P as x,Q as w}from"./index-58de9373.js";import{b as y,u as N,c as l,N as B}from"./NsEvent-4eb0a509.js";const{fetchEvent:F,fetchEventComments:L}=N();function O(e,{enabled:t}={enabled:!0}){return y({queryKey:["ns-thread",e],queryFn(){return F(s(e))},enabled:t})}function Q(e){return y({queryKey:["event-comments",e],async queryFn(){return await L(s(e))},retry:!1})}const j={key:2},K=f({__name:"NsThread",props:{event:{type:Object},relays:{type:Array,default:()=>[]},id:{type:String},root:{type:Object},inline:Boolean,inThread:Boolean},setup(e){const t=e;h([]),h([]);const c=m(()=>{var d;return((d=t.event)==null?void 0:d.id)??t.id}),{isLoading:u,data:a}=O(c,{enabled:!t.event}),r=m(()=>t.event??a.value),{isLoading:v,data:g}=Q(c);return(d,$)=>{const k=E("NsThread",!0);return s(u)?(n(),o(l,{key:0,"in-thread":e.inThread},null,8,["in-thread"])):r.value?(n(),i("div",{key:1,class:C(["ns-thread-component",{"white-box":!e.inThread}])},[T(B,{event:r.value,"in-thread":!!e.root},null,8,["event","in-thread"]),s(v)?(n(),o(l,{key:0,"in-thread":e.inThread},null,8,["in-thread"])):b("v-if",!0),(n(!0),i(D,null,q(s(g),p=>(n(),o(k,{class:"ml-2 border-left-2 border-primary-100",key:p.id,event:p,root:e.root??r.value,"in-thread":""},null,8,["event","root"]))),128))],2)):(n(),i("div",j,"NOT FOUND"))}}});const S=_(K,[["__scopeId","data-v-5be3ffdd"],["__file","/Users/nicolasc/Documents/projects/others/nosworld/src/components/structures/NsThread/NsThread.vue"]]),{fetchEvent:U}=N();function I(e){return y({queryKey:["event-display-page",e],queryFn(){return U(s(e))}})}const V=f({__name:"EventDisplayPage",props:{id:{type:String,required:!0}},setup(e){const t=e,c=P(),{isLoading:u,data:a}=I(t.id);return x(async()=>{var r;((r=a.value)==null?void 0:r.schema["@type"])==="Person"&&c.push({name:w.profile.display,params:{pubkey:a.value.pubkey},replace:!0})}),(r,v)=>s(u)?(n(),o(l,{key:0})):(n(),o(S,{key:1,id:e.id,event:s(a)},null,8,["id","event"]))}}),H=_(V,[["__file","/Users/nicolasc/Documents/projects/others/nosworld/src/pages/EventDisplayPage/EventDisplayPage.vue"]]);export{H as default};
