import{W as S,Z as $,o as t,c as s,a0 as p,ag as B,v as L,t as C,q as c,b as V,ah as f,ai as E,r as y,d as k,L as u,m as O,f as o,p as m,V as w,e as z,h as D,F as P,g as x,a3 as F,a9 as j,u as q,aa as I,l as U}from"./index-3c7146b5.js";var R=`
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
`,W={root:function(n){var a=n.instance;return["p-progressbar p-component",{"p-progressbar-determinate":a.determinate,"p-progressbar-indeterminate":a.indeterminate}]},container:"p-progressbar-indeterminate-container",value:"p-progressbar-value p-progressbar-value-animate",label:"p-progressbar-label"},Z=S(R,{name:"progressbar",manual:!0}),A=Z.load,G={name:"BaseProgressBar",extends:$,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},css:{classes:W,loadStyle:A},provide:function(){return{$parentInstance:this}}},_={name:"ProgressBar",extends:G,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},H=["aria-valuenow"];function J(e,n,a,i,l,r){return t(),s("div",p({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptm("root")),[r.determinate?(t(),s("div",p({key:0,class:e.cx("value"),style:r.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(t(),s("div",p({key:0,class:e.cx("label")},e.ptm("label")),[B(e.$slots,"default",{},function(){return[L(C(e.value+"%"),1)]})],16)):c("",!0)],16)):c("",!0),r.indeterminate?(t(),s("div",p({key:1,class:e.cx("container")},e.ptm("container")),[V("div",p({class:e.cx("value")},e.ptm("value")),null,16)],16)):c("",!0)],16,H)}_.render=J;function K(e,{enabled:n}){const{isLoading:a,event:i}=f(e,{enabled:n}),{isLoading:l,comments:r}=E(e,{enabled:y(!0)});return{isLoading:a,isCommentsLoading:l,event:i,comments:r}}const M={key:2},Q=k({__name:"NsThread",props:{event:{type:Object},id:{type:String},root:{type:Object},inThread:Boolean},setup(e){const n=e,a=u(()=>{var g;return((g=n.event)==null?void 0:g.id)??n.id}),i=u(()=>n.inThread),l=u(()=>!!n.id&&!n.event),{isLoading:r,event:d,isCommentsLoading:b,comments:N}=K(a,{enabled:l}),v=u(()=>n.event??d.value);return(g,ee)=>{const T=O("NsThread",!0);return o(r)?(t(),m(w,{key:0,"in-thread":i.value},null,8,["in-thread"])):v.value?(t(),s("div",{key:1,class:F(["ns-thread-component",{"white-box":!i.value}])},[z(D,{event:v.value,"in-thread":!!e.root},null,8,["event","in-thread"]),o(b)?(t(),m(o(_),{key:0,mode:"indeterminate",style:{height:"1px"}})):c("",!0),(t(!0),s(P,null,x(o(N),h=>(t(),m(T,{class:"ml-2 border-left-2 border-primary-100",key:h.id,event:h,root:e.root??v.value,"in-thread":""},null,8,["event","root"]))),128))],2)):(t(),s("div",M,"NOT FOUND"))}}});const X=j(Q,[["__scopeId","data-v-7555aaf5"]]),Y={key:2},te=k({__name:"EventDisplayPage",props:{id:{type:String,required:!0}},setup(e){const n=e,a=q(),i=u(()=>n.id),{isLoading:l,event:r}=f(i,{enabled:y(!0)});return I(async()=>{var d;((d=r.value)==null?void 0:d.schema["@type"])==="Person"&&a.push({name:U.profile.display,params:{pubkey:r.value.pubkey,feedType:"activity"},replace:!0})}),(d,b)=>o(l)?(t(),m(w,{key:0})):o(r)?(t(),m(X,{key:1,id:e.id,event:o(r)},null,8,["id","event"])):(t(),s("div",Y,"NOT FOUND"))}});export{te as default};
