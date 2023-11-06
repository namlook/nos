import{B as D,z as E,o as a,c as o,x as v,v as $,V as x,K as C,J as g,b as L,r as h,af as k,ag as P,q as u,h as I,S as V,d as w,G as z,f as d,H as f,e as O,F as j,g as F,M as U,_ as N,u as q,l as H}from"./index-f6fe6edb.js";import{c as _,a as T,N as A}from"./NsEvent-58638360.js";import"./index.esm-75ec1c7e.js";import"./use-settings-ea8687c4.js";var G=`
.p-progressbar {
    position: relative;
    overflow: hidden;
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    border: 0 none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-determinate .p-progressbar-value-animate {
    transition: width 1s ease-in-out;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    -webkit-animation-delay: 1.15s;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}

@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}
`,J={root:function(t){var r=t.instance;return["p-progressbar p-component",{"p-progressbar-determinate":r.determinate,"p-progressbar-indeterminate":r.indeterminate}]},container:"p-progressbar-indeterminate-container",value:"p-progressbar-value p-progressbar-value-animate",label:"p-progressbar-label"},K=D(G,{name:"progressbar",manual:!0}),M=K.load,R={name:"BaseProgressBar",extends:E,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},css:{classes:J,loadStyle:M},provide:function(){return{$parentInstance:this}}},S={name:"ProgressBar",extends:R,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},Q=["aria-valuenow"];function W(e,t,r,i,p,n){return a(),o("div",v({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptm("root")),[n.determinate?(a(),o("div",v({key:0,class:e.cx("value"),style:n.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(a(),o("div",v({key:0,class:e.cx("label")},e.ptm("label")),[$(e.$slots,"default",{},function(){return[x(C(e.value+"%"),1)]})],16)):g("",!0)],16)):g("",!0),n.indeterminate?(a(),o("div",v({key:1,class:e.cx("container")},e.ptm("container")),[L("div",v({class:e.cx("value")},e.ptm("value")),null,16)],16)):g("",!0)],16,Q)}S.render=W;const{loadThread:X}=I();function Y(e,t,{enabled:r}){const{isLoading:i,event:p}=_(e,{enabled:r}),n=h(!1),s=h(!0),c=h([]);k(async()=>{const l=P(e.value);t.value===!1&&(n.value=!0,await X(l),n.value=!1);const m=V();c.value=await m.events.find({selector:{$or:[{"schema.@type":"Comment","schema.parentItem.@id":l},{"schema.@type":"Comment","schema.parentItem.@id":{$exists:!1},"schema.mainEntity.@id":l}]}}).exec(),s.value=!1});const b=u(()=>n.value===!0||s.value===!0);return{isLoading:i,isCommentsLoading:b,isThreadLoading:n,_isCommentsLoading:s,event:p,comments:c}}const Z={key:2},ee=w({__name:"NsThread",props:{event:{type:Object},relays:{type:Array,default:()=>[]},id:{type:String},root:{type:Object},inline:Boolean,inThread:Boolean},setup(e){const t=e,r=u(()=>{var m;return((m=t.event)==null?void 0:m.id)??t.id}),i=u(()=>t.inThread),p=u(()=>!!t.id&&!t.event),{isLoading:n,event:s,isCommentsLoading:c,comments:b}=Y(r,i,{enabled:p}),l=u(()=>t.event??s.value);return(m,re)=>{const B=z("NsThread",!0);return d(n)?(a(),f(T,{key:0,"in-thread":i.value},null,8,["in-thread"])):l.value?(a(),o("div",{key:1,class:U(["ns-thread-component",{"white-box":!i.value}])},[O(A,{event:l.value,"in-thread":!!e.root},null,8,["event","in-thread"]),d(c)?(a(),f(d(S),{key:0,mode:"indeterminate",style:{height:"1px"}})):g("v-if",!0),(a(!0),o(j,null,F(d(b),y=>(a(),f(B,{class:"ml-2 border-left-2 border-primary-100",key:y.id,event:y,root:e.root??l.value,"in-thread":""},null,8,["event","root"]))),128))],2)):(a(),o("div",Z,"NOT FOUND"))}}});const ne=N(ee,[["__scopeId","data-v-5be3ffdd"],["__file","/Users/nicolasc/Documents/projects/other/tests/nosworld/src/components/structures/NsThread/NsThread.vue"]]),te={key:2},ae=w({__name:"EventDisplayPage",props:{id:{type:String,required:!0}},setup(e){const t=e,r=q(),i=u(()=>t.id),{isLoading:p,event:n}=_(i,{enabled:h(!0)});return k(async()=>{var s;((s=n.value)==null?void 0:s.schema["@type"])==="Person"&&r.push({name:H.profile.display,params:{pubkey:n.value.pubkey,feedType:"activity"},replace:!0})}),(s,c)=>d(p)?(a(),f(T,{key:0})):d(n)?(a(),f(ne,{key:1,id:e.id,event:d(n)},null,8,["id","event"])):(a(),o("div",te,"NOT FOUND"))}}),de=N(ae,[["__file","/Users/nicolasc/Documents/projects/other/tests/nosworld/src/pages/EventDisplayPage/EventDisplayPage.vue"]]);export{de as default};
