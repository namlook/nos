import{B,D as m,R as L,z as $,G as M,O as j,o as s,c as d,b as u,F as S,g as q,H as k,w as z,x as v,P as C,I as P,M as N,J as b,K as A,f,h as U,d as H,u as R,r as V,j as J,l as F,n as Q,q as x,e as D,_ as G}from"./index-19122a9a.js";import{a as E}from"./index.esm-3a2274d2.js";import{N as W}from"./NsUserFeed-dcb46828.js";import{u as X,s as Y,b as K}from"./NsEvent-7338338a.js";import"./inputswitch.esm-02e8aac7.js";import"./use-settings-031653a3.js";var Z=`
.p-tabmenu {
    overflow-x: auto;
}

.p-tabmenu-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex-wrap: nowrap;
}

.p-tabmenu-nav a {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    text-decoration: none;
    overflow: hidden;
}

.p-tabmenu-nav a:focus {
    z-index: 1;
}

.p-tabmenu-nav .p-menuitem-text {
    line-height: 1;
}

.p-tabmenu-ink-bar {
    display: none;
    z-index: 1;
}

.p-tabmenu::-webkit-scrollbar {
    display: none;
}
`,ee={root:"p-tabmenu p-component",menu:"p-tabmenu-nav p-reset",menuitem:function(e){var n=e.instance,l=e.props,c=e.index,i=e.item,p=e.isActive,h=e.isExactActive;return["p-tabmenuitem",{"p-highlight":(l.exact?h:p)||n.d_activeIndex===c,"p-disabled":n.disabled(i)}]},action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text",inkbar:"p-tabmenu-ink-bar"},te=B(Z,{name:"tabmenu",manual:!0}),ne=te.load,ae={name:"BaseTabMenu",extends:$,props:{model:{type:Array,default:null},exact:{type:Boolean,default:!0},activeIndex:{type:Number,default:0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},css:{classes:ee,loadStyle:ne},provide:function(){return{$parentInstance:this}}},O={name:"TabMenu",extends:ae,emits:["update:activeIndex","tab-change"],timeout:null,data:function(){return{d_activeIndex:this.activeIndex}},watch:{$route:function(){var e=this;this.timeout=setTimeout(function(){return e.updateInkBar()},50)},activeIndex:function(e){this.d_activeIndex=e}},mounted:function(){this.updateInkBar();var e=this.findActiveItem();e&&(e.tabIndex="0")},updated:function(){this.updateInkBar()},beforeUnmount:function(){clearTimeout(this.timeout)},methods:{getPTOptions:function(e,n,l){return this.ptm(e,{context:{item:n,index:l}})},onItemClick:function(e,n,l,c){if(this.disabled(n)){e.preventDefault();return}n.command&&n.command({originalEvent:e,item:n}),n.to&&c&&c(e),l!==this.d_activeIndex&&(this.d_activeIndex=l,this.$emit("update:activeIndex",this.d_activeIndex)),this.$emit("tab-change",{originalEvent:e,index:l})},onKeydownItem:function(e,n,l,c){switch(e.code){case"ArrowRight":{this.navigateToNextItem(e.target),e.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(e.target),e.preventDefault();break}case"Home":{this.navigateToFirstItem(e.target),e.preventDefault();break}case"End":{this.navigateToLastItem(e.target),e.preventDefault();break}case"Space":case"Enter":{this.onItemClick(e,n,l,c),e.preventDefault();break}case"Tab":{this.onTabKey();break}}},navigateToNextItem:function(e){var n=this.findNextItem(e);n&&this.setFocusToMenuitem(e,n)},navigateToPrevItem:function(e){var n=this.findPrevItem(e);n&&this.setFocusToMenuitem(e,n)},navigateToFirstItem:function(e){var n=this.findFirstItem(e);n&&this.setFocusToMenuitem(e,n)},navigateToLastItem:function(e){var n=this.findLastItem(e);n&&this.setFocusToMenuitem(e,n)},findNextItem:function(e){var n=e.parentElement.nextElementSibling;return n?m.getAttribute(n,"data-p-disabled")===!0?this.findNextItem(n.children[0]):n.children[0]:null},findPrevItem:function(e){var n=e.parentElement.previousElementSibling;return n?m.getAttribute(n,"data-p-disabled")===!0?this.findPrevItem(n.children[0]):n.children[0]:null},findFirstItem:function(){var e=m.findSingle(this.$refs.nav,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e.children[0]:null},findLastItem:function(){var e=m.find(this.$refs.nav,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e[e.length-1].children[0]:null},findActiveItem:function(){var e=m.findSingle(this.$refs.nav,'[data-pc-section="menuitem"][data-p-disabled="false"][data-p-highlight="true"]');return e?e.children[0]:null},setFocusToMenuitem:function(e,n){e.tabIndex="-1",n.tabIndex="0",n.focus()},onTabKey:function(){var e=m.findSingle(this.$refs.nav,'[data-pc-section="menuitem"][data-p-disabled="false"][data-p-highlight="true"]'),n=m.findSingle(this.$refs.nav,'[data-pc-section="action"][tabindex="0"]');n!==e.children[0]&&(e&&(e.children[0].tabIndex="0"),n.tabIndex="-1")},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled===!0},label:function(e){return typeof e.label=="function"?e.label():e.label},updateInkBar:function(){for(var e=this.$refs.nav.children,n=!1,l=0;l<e.length;l++){var c=e[l];m.getAttribute(c,"data-p-highlight")&&(this.$refs.inkbar.style.width=m.getWidth(c)+"px",this.$refs.inkbar.style.left=m.getOffset(c).left-m.getOffset(this.$refs.nav).left+"px",n=!0)}n||(this.$refs.inkbar.style.width="0px",this.$refs.inkbar.style.left="0px")}},directives:{ripple:L}},ie=["aria-labelledby","aria-label"],se=["data-p-highlight","data-p-disabled"],le=["href","aria-label","aria-disabled","onClick","onKeydown"],re=["onClick","onKeydown","data-p-highlight","data-p-disabled"],oe=["href","target","aria-label","aria-disabled"];function de(t,e,n,l,c,i){var p=M("router-link"),h=j("ripple");return s(),d("div",v({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"tabmenu"}),[u("ul",v({ref:"nav",class:t.cx("menu"),role:"menubar","aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptm("menu")),[(s(!0),d(S,null,q(t.model,function(a,r){return s(),d(S,{key:i.label(a)+"_"+r.toString()},[a.to&&!i.disabled(a)?(s(),k(p,{key:0,to:a.to,custom:""},{default:z(function(y){var g=y.navigate,T=y.href,o=y.isActive,I=y.isExactActive;return[i.visible(a)?(s(),d("li",v({key:0,ref_for:!0,ref:"tab",class:[t.cx("menuitem",{item:a,isActive:o,isExactActive:I}),a.class],style:a.style,role:"presentation"},i.getPTOptions("menuitem",a,r),{"data-p-highlight":t.exact?I:o,"data-p-disabled":i.disabled(a)}),[t.$slots.item?(s(),k(P(t.$slots.item),{key:1,item:a,index:r},null,8,["item","index"])):C((s(),d("a",v({key:0,ref_for:!0,ref:"tabLink",role:"menuitem",href:T,class:t.cx("action"),"aria-label":i.label(a),"aria-disabled":i.disabled(a),tabindex:-1,onClick:function(_){return i.onItemClick(_,a,r,g)},onKeydown:function(_){return i.onKeydownItem(_,a,r,g)}},i.getPTOptions("action",a,r)),[t.$slots.itemicon?(s(),k(P(t.$slots.itemicon),{key:0,item:a,class:N([t.cx("icon"),a.icon])},null,8,["item","class"])):a.icon?(s(),d("span",v({key:1,class:[t.cx("icon"),a.icon]},i.getPTOptions("icon",a,r)),null,16)):b("",!0),u("span",v({class:t.cx("label")},i.getPTOptions("label",a,r)),A(i.label(a)),17)],16,le)),[[h]])],16,se)):b("",!0)]}),_:2},1032,["to"])):i.visible(a)?(s(),d("li",v({key:1,ref_for:!0,ref:"tab",class:[t.cx("menuitem",{item:a,index:r}),a.class],role:"presentation",onClick:function(g){return i.onItemClick(g,a,r)},onKeydown:function(g){return i.onKeydownItem(g,a,r)}},i.getPTOptions("menuitem",a,r),{"data-p-highlight":c.d_activeIndex===r,"data-p-disabled":i.disabled(a)}),[t.$slots.item?(s(),k(P(t.$slots.item),{key:1,item:a,index:r},null,8,["item","index"])):C((s(),d("a",v({key:0,ref_for:!0,ref:"tabLink",role:"menuitem",href:a.url,class:t.cx("action"),target:a.target,"aria-label":i.label(a),"aria-disabled":i.disabled(a),tabindex:-1},i.getPTOptions("action",a,r)),[t.$slots.itemicon?(s(),k(P(t.$slots.itemicon),{key:0,item:a,class:N([t.cx("icon"),a.icon])},null,8,["item","class"])):a.icon?(s(),d("span",v({key:1,class:[t.cx("icon"),a.icon]},i.getPTOptions("icon",a,r)),null,16)):b("",!0),u("span",v({class:t.cx("label")},i.getPTOptions("label",a,r)),A(i.label(a)),17)],16,oe)),[[h]])],16,re)):b("",!0)],64)}),128)),u("li",v({ref:"inkbar",role:"none",class:t.cx("inkbar")},t.ptm("inkbar")),null,16)],16,ie)],16)}O.render=de;const{fetchAuthor:ce}=U();function ue(t){return X({queryKey:["profile-display-page",t],queryFn(){return ce(f(t))}})}const pe={class:"ns-profile-component"},fe={key:0},me={key:1},ve={class:"white-box mb-4"},be={key:0,class:"banner-div"},he=["src"],ye={key:1,class:"banner-div bg-blue-500"},ge={class:"p-4 pt-0 relative"},Ie={class:"flex justify-content-between"},ke={class:"mt-7"},xe={class:"text-700 mb-4"},Te={key:0},_e={class:"text-700 mt-2"},we={key:1,class:"description"},Pe={class:"feed-content"},Ae=H({__name:"ProfileDisplayPage",props:{pubkey:{type:String,required:!0},feedType:{type:String,required:!0}},setup(t){const e=t,n=R(),l=V(0);J(()=>{["feed","activity"].includes(e.feedType)?l.value=T.value.findIndex(o=>o.feedType===e.feedType):n.push({name:F.profile.display,params:{pubkey:e.pubkey,feedType:"feed"}})}),Q(l,()=>{n.push({name:F.profile.display,params:{pubkey:e.pubkey,feedType:T.value[l.value].feedType}})});const c=x(()=>e.pubkey),{isLoading:i,data:p}=ue(c),h=x(()=>{var o;try{return JSON.parse(((o=p.value)==null?void 0:o.content)??"{}")}catch{return}}),a=x(()=>{var o,I;return((o=p.value)==null?void 0:o.schema.name)??((I=p.value)==null?void 0:I.pubkey.slice(0,10))??""}),r=x(()=>{var o;return(o=h.value)==null?void 0:o.banner}),y=x(()=>{var o;return(o=h.value)==null?void 0:o.picture}),g=x(()=>{var o;return(o=p.value)==null?void 0:o.schema.description}),T=x(()=>[{feedType:"activity",label:"Activity",icon:"pi pi-fw pi-home"},{feedType:"feed",label:"Feed",icon:"pi pi-fw pi-home"}]);return(o,I)=>{var w;return s(),d("div",pe,[f(i)?(s(),d("div",fe,[f(i)?(s(),k(f(E),{key:0,shape:"circle",size:"70px",class:"mr-3"})):b("v-if",!0),f(i)?(s(),k(f(E),{key:1,width:"10rem",class:"mb-1"})):b("v-if",!0)])):f(p)&&h.value?(s(),d("div",me,[u("div",ve,[u("div",null,[r.value?(s(),d("div",be,[u("img",{src:r.value,alt:"Banner Image"},null,8,he)])):(s(),d("div",ye))]),u("div",ge,[y.value?(s(),k(f(Y),{key:0,style:{top:"-3.7rem"},class:"absolute",src:y.value,"image-class":"border-circle w-7rem h-7rem border-white border-3 border-round",preview:""},null,8,["src"])):b("v-if",!0),u("div",Ie,[u("div",ke,[b(' <span class="text-900 font-medium block text-3xl mb-2" v-html="emojify(displayName, event.tags)" /> '),D(K,{class:"text-900 font-medium block text-3xl mb-2",content:a.value,tags:f(p).tags},null,8,["content","tags"]),u("div",xe,[(w=h.value)!=null&&w.nip05?(s(),d("span",Te,A(h.value.nip05),1)):b("v-if",!0)])]),u("div",_e,A(f(p).pubkey.slice(0,10))+"...",1)]),g.value?(s(),d("div",we,[D(K,{content:g.value,tags:f(p).tags},null,8,["content","tags"])])):b("v-if",!0)])]),u("div",Pe,[D(f(O),{activeIndex:l.value,"onUpdate:activeIndex":I[0]||(I[0]=_=>l.value=_),model:T.value,class:"mb-4"},null,8,["activeIndex","model"]),(s(),k(W,{key:t.feedType,type:t.feedType,pubkey:c.value},null,8,["type","pubkey"]))])])):b("v-if",!0)])}}});const Ke=G(Ae,[["__scopeId","data-v-c1dd4fe2"],["__file","/Users/nicolasc/Documents/projects/others/nosworld/src/pages/ProfileDisplayPage/ProfileDisplayPage.vue"]]);export{Ke as default};
