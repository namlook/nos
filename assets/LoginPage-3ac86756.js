import{d as m,u as f,i as d,r as g,a as _,o as b,c as h,b as n,e as o,w as k,f as t,l as y,s as x,_ as v}from"./index-4ab972bd.js";import{z as l,N as L,a as F}from"./NsFormField-3f6e72b6.js";import"./index.esm-75728879.js";import"./textarea.esm-7e77e2b8.js";const N={class:"login-page"},P=n("h1",{class:"px-2"},"Login",-1),V={class:"white-box p-4"},w=m({__name:"LoginPage",setup(B){const r=f(),{loginWithPubkey:i}=d(),s=g(!1),u=l.object({pubkey:l.string().min(32)}),e=_({pubkey:""}),c=async()=>{s.value=!0,i(e.pubkey),r.push({name:y.user.feed})};return(j,a)=>(b(),h("div",N,[P,n("div",V,[o(L,{form:e,rules:t(u),onSubmit:c,class:"flex flex-column gap-4"},{default:k(()=>[o(F,{name:"value",modelValue:e.pubkey,"onUpdate:modelValue":a[0]||(a[0]=p=>e.pubkey=p),modelModifiers:{trim:!0},placeholder:"Enter your pubkey",autocomplete:"off",spellcheck:!1,autocapitalize:"off",autocorrect:"off"},null,8,["modelValue"]),o(t(x),{type:"submit",label:"Login",loading:s.value},null,8,["loading"])]),_:1},8,["form","rules"])])]))}}),U=v(w,[["__file","/Users/nicolasc/Documents/projects/others/nosworld/src/pages/LoginPage/LoginPage.vue"]]);export{U as default};
