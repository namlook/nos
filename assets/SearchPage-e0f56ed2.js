import{d as U,u as M,r as f,a as b,o as r,c as n,b as u,e as t,w as V,f as d,s as p,F as w,g as j,l as k,h as I,_ as P}from"./index-4f138c54.js";import{z as o,N as _,a as s}from"./NsFormField-fef59d9c.js";import{N as A}from"./NsEvent-bd421c86.js";import"./index.esm-3f7fdff6.js";import"./textarea.esm-2b47caf2.js";import"./use-settings-48c8f733.js";const B={class:"search-page"},C={class:"mb-5 p-4 white-box"},D=u("h1",null,"Search",-1),E={key:0},L={class:"flex gap-4"},R={class:"flex gap-4"},T={key:1},$={class:"text-center mt-4"},q={class:"flex flex-column gap-4"},K=U({__name:"SearchPage",setup(W){const v=M(),{fetch:y}=I(),m=f(!1),x=o.object({value:o.string().default("")}),i=b({value:""}),S=async()=>{i.value.startsWith("#")?v.push({name:k.tags.display,params:{tag:i.value.slice(1)}}):v.push({name:k.events.display,params:{id:i.value}})},g=f([]),c=f(!1),F=o.object({kind:o.string().default("1"),id:o.string().default(""),author:o.string().default(""),tag:o.object({type:o.string(),value:o.string()}),limit:o.string().default("10")}),e=b({kind:"1",id:"",author:"",tag:{type:"",value:""},limit:"10"}),z=async()=>{m.value=!0;const h={...e.kind?{kinds:[parseInt(e.kind,10)]}:{},...e.author?{authors:[e.author]}:{},...e.id?{ids:[e.id]}:{},...e.tag.type?{[`#${e.tag.type}`]:[e.tag.value]}:{},limit:e.limit?parseInt(e.limit,10):10},l=await y([h]);g.value=l.sort((a,N)=>N.created_at-a.created_at),m.value=!1};return(h,l)=>(r(),n("div",B,[u("div",C,[D,c.value?(r(),n("div",E,[t(_,{form:e,rules:d(F),onSubmit:z,class:"flex flex-column gap-4"},{default:V(()=>[u("div",L,[t(s,{name:"kind",label:"Kind",modelValue:e.kind,"onUpdate:modelValue":l[0]||(l[0]=a=>e.kind=a),modelModifiers:{trim:!0},autocomplete:"off",spellcheck:!1,autocapitalize:"off",autocorrect:"off"},null,8,["modelValue"]),t(s,{name:"limit",label:"Limit",modelValue:e.limit,"onUpdate:modelValue":l[1]||(l[1]=a=>e.limit=a),modelModifiers:{trim:!0},autocomplete:"off",spellcheck:!1,autocapitalize:"off",autocorrect:"off"},null,8,["modelValue"])]),t(s,{name:"author",label:"Author",modelValue:e.author,"onUpdate:modelValue":l[2]||(l[2]=a=>e.author=a),modelModifiers:{trim:!0},autocomplete:"off",spellcheck:!1,autocapitalize:"off",autocorrect:"off"},null,8,["modelValue"]),t(s,{name:"id",label:"ID",modelValue:e.id,"onUpdate:modelValue":l[3]||(l[3]=a=>e.id=a),modelModifiers:{trim:!0},autocomplete:"off",spellcheck:!1,autocapitalize:"off",autocorrect:"off"},null,8,["modelValue"]),u("div",R,[t(s,{name:"tag.type",label:"Tag",modelValue:e.tag.type,"onUpdate:modelValue":l[4]||(l[4]=a=>e.tag.type=a),modelModifiers:{trim:!0},autocomplete:"off",spellcheck:!1,autocapitalize:"off",autocorrect:"off"},null,8,["modelValue"]),t(s,{name:"tag.value",label:"Tag value",modelValue:e.tag.value,"onUpdate:modelValue":l[5]||(l[5]=a=>e.tag.value=a),modelModifiers:{trim:!0},autocomplete:"off",spellcheck:!1,autocapitalize:"off",autocorrect:"off"},null,8,["modelValue"])]),t(d(p),{type:"submit",label:"Search",loading:m.value},null,8,["loading"])]),_:1},8,["form","rules"])])):(r(),n("div",T,[t(_,{form:i,rules:d(x),onSubmit:S,class:"flex flex-column gap-4"},{default:V(()=>[t(s,{name:"value",modelValue:i.value,"onUpdate:modelValue":l[6]||(l[6]=a=>i.value=a),modelModifiers:{trim:!0},placeholder:"Enter an ID, npub, nevent, naddr...",autocomplete:"off",spellcheck:!1,autocapitalize:"off",autocorrect:"off"},null,8,["modelValue"]),t(d(p),{type:"submit",label:"Search",loading:m.value},null,8,["loading"])]),_:1},8,["form","rules"])])),u("div",$,[t(d(p),{label:c.value?"simpler search":"advanced",onClick:l[7]||(l[7]=a=>c.value=!c.value),text:""},null,8,["label"])])]),u("div",q,[(r(!0),n(w,null,j(g.value,a=>(r(),n("div",{key:a.id},[t(A,{event:a},null,8,["event"])]))),128))])]))}}),Y=P(K,[["__file","/Users/nicolasc/Documents/projects/others/nosworld/src/pages/SearchPage/SearchPage.vue"]]);export{Y as default};
