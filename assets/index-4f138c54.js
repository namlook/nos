var lg=Object.defineProperty;var cg=(e,t,n)=>t in e?lg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var mt=(e,t,n)=>(cg(e,typeof t!="symbol"?t+"":t,n),n),la=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var L=(e,t,n)=>(la(e,t,"read from private field"),n?n.call(e):t.get(e)),ge=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},ie=(e,t,n,r)=>(la(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);var Pi=(e,t,n,r)=>({set _(o){ie(e,t,o,n)},get _(){return L(e,t,r)}}),Ke=(e,t,n)=>(la(e,t,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function Xn(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const $e=Object.freeze({}),Kr=Object.freeze([]),pt=()=>{},zf=()=>!1,ug=/^on[^a-z]/,mi=e=>ug.test(e),as=e=>e.startsWith("onUpdate:"),Ie=Object.assign,Fl=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},fg=Object.prototype.hasOwnProperty,he=(e,t)=>fg.call(e,t),X=Array.isArray,xr=e=>Os(e)==="[object Map]",Wf=e=>Os(e)==="[object Set]",oe=e=>typeof e=="function",Te=e=>typeof e=="string",Dl=e=>typeof e=="symbol",Ee=e=>e!==null&&typeof e=="object",jl=e=>Ee(e)&&oe(e.then)&&oe(e.catch),Qf=Object.prototype.toString,Os=e=>Qf.call(e),Vl=e=>Os(e).slice(8,-1),Gf=e=>Os(e)==="[object Object]",Kl=e=>Te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Yi=Xn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dg=Xn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Ts=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},hg=/-(\w)/g,tn=Ts(e=>e.replace(hg,(t,n)=>n?n.toUpperCase():"")),pg=/\B([A-Z])/g,Qn=Ts(e=>e.replace(pg,"-$1").toLowerCase()),Ir=Ts(e=>e.charAt(0).toUpperCase()+e.slice(1)),ar=Ts(e=>e?`on${Ir(e)}`:""),jo=(e,t)=>!Object.is(e,t),xo=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ls=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},gg=e=>{const t=parseFloat(e);return isNaN(t)?e:t},mg=e=>{const t=Te(e)?Number(e):NaN;return isNaN(t)?e:t};let Kc;const cs=()=>Kc||(Kc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ps(e){if(X(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=Te(r)?wg(r):Ps(r);if(o)for(const i in o)t[i]=o[i]}return t}else{if(Te(e))return e;if(Ee(e))return e}}const yg=/;(?![^(]*\))/g,bg=/:([^]+)/,vg=/\/\*[^]*?\*\//g;function wg(e){const t={};return e.replace(vg,"").split(yg).forEach(n=>{if(n){const r=n.split(bg);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Gn(e){let t="";if(Te(e))t=e;else if(X(e))for(let n=0;n<e.length;n++){const r=Gn(e[n]);r&&(t+=r+" ")}else if(Ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function KS(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Te(t)&&(e.class=Gn(t)),n&&(e.style=Ps(n)),e}const xg="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Eg="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",_g=Xn(xg),Sg=Xn(Eg),Cg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ag=Xn(Cg);function Zf(e){return!!e||e===""}const us=e=>Te(e)?e:e==null?"":X(e)||Ee(e)&&(e.toString===Qf||!oe(e.toString))?JSON.stringify(e,Yf,2):String(e),Yf=(e,t)=>t&&t.__v_isRef?Yf(e,t.value):xr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o])=>(n[`${r} =>`]=o,n),{})}:Wf(t)?{[`Set(${t.size})`]:[...t.values()]}:Ee(t)&&!X(t)&&!Gf(t)?String(t):t;function fs(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let vt;class $g{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=vt,!t&&vt&&(this.index=(vt.scopes||(vt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=vt;try{return vt=this,t()}finally{vt=n}}else fs("cannot run an inactive effect scope.")}on(){vt=this}off(){vt=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function kg(e,t=vt){t&&t.active&&t.effects.push(e)}function Jf(){return vt}function Ig(e){vt?vt.cleanups.push(e):fs("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ql=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Xf=e=>(e.w&Zn)>0,ed=e=>(e.n&Zn)>0,Og=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Zn},Tg=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];Xf(o)&&!ed(o)?o.delete(e):t[n++]=o,o.w&=~Zn,o.n&=~Zn}t.length=n}},ds=new WeakMap;let Io=0,Zn=1;const ja=30;let lt;const Er=Symbol("iterate"),Va=Symbol("Map key iterate");class zl{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kg(this,r)}run(){if(!this.active)return this.fn();let t=lt,n=qn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=lt,lt=this,qn=!0,Zn=1<<++Io,Io<=ja?Og(this):qc(this),this.fn()}finally{Io<=ja&&Tg(this),Zn=1<<--Io,lt=this.parent,qn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){lt===this?this.deferStop=!0:this.active&&(qc(this),this.onStop&&this.onStop(),this.active=!1)}}function qc(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let qn=!0;const td=[];function Pr(){td.push(qn),qn=!1}function Lr(){const e=td.pop();qn=e===void 0?!0:e}function ot(e,t,n){if(qn&&lt){let r=ds.get(e);r||ds.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=ql()),nd(o,{effect:lt,target:e,type:t,key:n})}}function nd(e,t){let n=!1;Io<=ja?ed(e)||(e.n|=Zn,n=!Xf(e)):n=!e.has(lt),n&&(e.add(lt),lt.deps.push(e),lt.onTrack&&lt.onTrack(Ie({effect:lt},t)))}function nn(e,t,n,r,o,i){const s=ds.get(e);if(!s)return;let a=[];if(t==="clear")a=[...s.values()];else if(n==="length"&&X(e)){const c=Number(r);s.forEach((f,u)=>{(u==="length"||u>=c)&&a.push(f)})}else switch(n!==void 0&&a.push(s.get(n)),t){case"add":X(e)?Kl(n)&&a.push(s.get("length")):(a.push(s.get(Er)),xr(e)&&a.push(s.get(Va)));break;case"delete":X(e)||(a.push(s.get(Er)),xr(e)&&a.push(s.get(Va)));break;case"set":xr(e)&&a.push(s.get(Er));break}const l={target:e,type:t,key:n,newValue:r,oldValue:o,oldTarget:i};if(a.length===1)a[0]&&Ka(a[0],l);else{const c=[];for(const f of a)f&&c.push(...f);Ka(ql(c),l)}}function Ka(e,t){const n=X(e)?e:[...e];for(const r of n)r.computed&&zc(r,t);for(const r of n)r.computed||zc(r,t)}function zc(e,t){(e!==lt||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Ie({effect:e},t)),e.scheduler?e.scheduler():e.run())}function Pg(e,t){var n;return(n=ds.get(e))==null?void 0:n.get(t)}const Lg=Xn("__proto__,__v_isRef,__isVue"),rd=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Dl)),Rg=Ls(),Bg=Ls(!1,!0),Ng=Ls(!0),Ug=Ls(!0,!0),Wc=Mg();function Mg(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=ce(this);for(let i=0,s=this.length;i<s;i++)ot(r,"get",i+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(ce)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Pr();const r=ce(this)[t].apply(this,n);return Lr(),r}}),e}function Hg(e){const t=ce(this);return ot(t,"has",e),t.hasOwnProperty(e)}function Ls(e=!1,t=!1){return function(r,o,i){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&i===(e?t?fd:ud:t?cd:ld).get(r))return r;const s=X(r);if(!e){if(s&&he(Wc,o))return Reflect.get(Wc,o,i);if(o==="hasOwnProperty")return Hg}const a=Reflect.get(r,o,i);return(Dl(o)?rd.has(o):Lg(o))||(e||ot(r,"get",o),t)?a:Ne(a)?s&&Kl(o)?a:a.value:Ee(a)?e?Ns(a):yi(a):a}}const Fg=od(),Dg=od(!0);function od(e=!1){return function(n,r,o,i){let s=n[r];if(Yn(s)&&Ne(s)&&!Ne(o))return!1;if(!e&&(!hs(o)&&!Yn(o)&&(s=ce(s),o=ce(o)),!X(n)&&Ne(s)&&!Ne(o)))return s.value=o,!0;const a=X(n)&&Kl(r)?Number(r)<n.length:he(n,r),l=Reflect.set(n,r,o,i);return n===ce(i)&&(a?jo(o,s)&&nn(n,"set",r,o,s):nn(n,"add",r,o)),l}}function jg(e,t){const n=he(e,t),r=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&nn(e,"delete",t,void 0,r),o}function Vg(e,t){const n=Reflect.has(e,t);return(!Dl(t)||!rd.has(t))&&ot(e,"has",t),n}function Kg(e){return ot(e,"iterate",X(e)?"length":Er),Reflect.ownKeys(e)}const id={get:Rg,set:Fg,deleteProperty:jg,has:Vg,ownKeys:Kg},sd={get:Ng,set(e,t){return fs(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return fs(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},qg=Ie({},id,{get:Bg,set:Dg}),zg=Ie({},sd,{get:Ug}),Wl=e=>e,Rs=e=>Reflect.getPrototypeOf(e);function Li(e,t,n=!1,r=!1){e=e.__v_raw;const o=ce(e),i=ce(t);n||(t!==i&&ot(o,"get",t),ot(o,"get",i));const{has:s}=Rs(o),a=r?Wl:n?Ql:Vo;if(s.call(o,t))return a(e.get(t));if(s.call(o,i))return a(e.get(i));e!==o&&e.get(t)}function Ri(e,t=!1){const n=this.__v_raw,r=ce(n),o=ce(e);return t||(e!==o&&ot(r,"has",e),ot(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Bi(e,t=!1){return e=e.__v_raw,!t&&ot(ce(e),"iterate",Er),Reflect.get(e,"size",e)}function Qc(e){e=ce(e);const t=ce(this);return Rs(t).has.call(t,e)||(t.add(e),nn(t,"add",e,e)),this}function Gc(e,t){t=ce(t);const n=ce(this),{has:r,get:o}=Rs(n);let i=r.call(n,e);i?ad(n,r,e):(e=ce(e),i=r.call(n,e));const s=o.call(n,e);return n.set(e,t),i?jo(t,s)&&nn(n,"set",e,t,s):nn(n,"add",e,t),this}function Zc(e){const t=ce(this),{has:n,get:r}=Rs(t);let o=n.call(t,e);o?ad(t,n,e):(e=ce(e),o=n.call(t,e));const i=r?r.call(t,e):void 0,s=t.delete(e);return o&&nn(t,"delete",e,void 0,i),s}function Yc(){const e=ce(this),t=e.size!==0,n=xr(e)?new Map(e):new Set(e),r=e.clear();return t&&nn(e,"clear",void 0,void 0,n),r}function Ni(e,t){return function(r,o){const i=this,s=i.__v_raw,a=ce(s),l=t?Wl:e?Ql:Vo;return!e&&ot(a,"iterate",Er),s.forEach((c,f)=>r.call(o,l(c),l(f),i))}}function Ui(e,t,n){return function(...r){const o=this.__v_raw,i=ce(o),s=xr(i),a=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=o[e](...r),f=n?Wl:t?Ql:Vo;return!t&&ot(i,"iterate",l?Va:Er),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:a?[f(u[0]),f(u[1])]:f(u),done:d}},[Symbol.iterator](){return this}}}}function bn(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${Ir(e)} operation ${n}failed: target is readonly.`,ce(this))}return e==="delete"?!1:this}}function Wg(){const e={get(i){return Li(this,i)},get size(){return Bi(this)},has:Ri,add:Qc,set:Gc,delete:Zc,clear:Yc,forEach:Ni(!1,!1)},t={get(i){return Li(this,i,!1,!0)},get size(){return Bi(this)},has:Ri,add:Qc,set:Gc,delete:Zc,clear:Yc,forEach:Ni(!1,!0)},n={get(i){return Li(this,i,!0)},get size(){return Bi(this,!0)},has(i){return Ri.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Ni(!0,!1)},r={get(i){return Li(this,i,!0,!0)},get size(){return Bi(this,!0)},has(i){return Ri.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Ni(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ui(i,!1,!1),n[i]=Ui(i,!0,!1),t[i]=Ui(i,!1,!0),r[i]=Ui(i,!0,!0)}),[e,n,t,r]}const[Qg,Gg,Zg,Yg]=Wg();function Bs(e,t){const n=t?e?Yg:Zg:e?Gg:Qg;return(r,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(he(n,o)&&o in r?n:r,o,i)}const Jg={get:Bs(!1,!1)},Xg={get:Bs(!1,!0)},em={get:Bs(!0,!1)},tm={get:Bs(!0,!0)};function ad(e,t,n){const r=ce(n);if(r!==n&&t.call(e,r)){const o=Vl(e);console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const ld=new WeakMap,cd=new WeakMap,ud=new WeakMap,fd=new WeakMap;function nm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rm(e){return e.__v_skip||!Object.isExtensible(e)?0:nm(Vl(e))}function yi(e){return Yn(e)?e:Us(e,!1,id,Jg,ld)}function dd(e){return Us(e,!1,qg,Xg,cd)}function Ns(e){return Us(e,!0,sd,em,ud)}function Oo(e){return Us(e,!0,zg,tm,fd)}function Us(e,t,n,r,o){if(!Ee(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=o.get(e);if(i)return i;const s=rm(e);if(s===0)return e;const a=new Proxy(e,s===2?r:n);return o.set(e,a),a}function _r(e){return Yn(e)?_r(e.__v_raw):!!(e&&e.__v_isReactive)}function Yn(e){return!!(e&&e.__v_isReadonly)}function hs(e){return!!(e&&e.__v_isShallow)}function ps(e){return _r(e)||Yn(e)}function ce(e){const t=e&&e.__v_raw;return t?ce(t):e}function hd(e){return ls(e,"__v_skip",!0),e}const Vo=e=>Ee(e)?yi(e):e,Ql=e=>Ee(e)?Ns(e):e;function pd(e){qn&&lt&&(e=ce(e),nd(e.dep||(e.dep=ql()),{target:e,type:"get",key:"value"}))}function gd(e,t){e=ce(e);const n=e.dep;n&&Ka(n,{target:e,type:"set",key:"value",newValue:t})}function Ne(e){return!!(e&&e.__v_isRef===!0)}function Re(e){return yd(e,!1)}function md(e){return yd(e,!0)}function yd(e,t){return Ne(e)?e:new om(e,t)}class om{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ce(t),this._value=n?t:Vo(t)}get value(){return pd(this),this._value}set value(t){const n=this.__v_isShallow||hs(t)||Yn(t);t=n?t:ce(t),jo(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Vo(t),gd(this,t))}}function Me(e){return Ne(e)?e.value:e}const im={get:(e,t,n)=>Me(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Ne(o)&&!Ne(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function bd(e){return _r(e)?e:new Proxy(e,im)}function qS(e){ps(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=X(e)?new Array(e.length):{};for(const n in e)t[n]=am(e,n);return t}class sm{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Pg(ce(this._object),this._key)}}function am(e,t,n){const r=e[t];return Ne(r)?r:new sm(e,t,n)}class lm{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new zl(t,()=>{this._dirty||(this._dirty=!0,gd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=ce(this);return pd(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function cm(e,t,n=!1){let r,o;const i=oe(e);i?(r=e,o=()=>{console.warn("Write operation failed: computed value is readonly")}):(r=e.get,o=e.set);const s=new lm(r,o,i||!o,n);return t&&!n&&(s.effect.onTrack=t.onTrack,s.effect.onTrigger=t.onTrigger),s}const Sr=[];function Ji(e){Sr.push(e)}function Xi(){Sr.pop()}function H(e,...t){Pr();const n=Sr.length?Sr[Sr.length-1].component:null,r=n&&n.appContext.config.warnHandler,o=um();if(r)dn(r,n,11,[e+t.join(""),n&&n.proxy,o.map(({vnode:i})=>`at <${Ks(n,i.type)}>`).join(`
`),o]);else{const i=[`[Vue warn]: ${e}`,...t];o.length&&i.push(`
`,...fm(o)),console.warn(...i)}Lr()}function um(){let e=Sr[Sr.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function fm(e){const t=[];return e.forEach((n,r)=>{t.push(...r===0?[]:[`
`],...dm(n))}),t}function dm({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=e.component?e.component.parent==null:!1,o=` at <${Ks(e.component,e.type,r)}`,i=">"+n;return e.props?[o,...hm(e.props),i]:[o+i]}function hm(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(r=>{t.push(...vd(r,e[r]))}),n.length>3&&t.push(" ..."),t}function vd(e,t,n){return Te(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Ne(t)?(t=vd(e,ce(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):oe(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=ce(t),n?t:[`${e}=`,t])}function pm(e,t){e!==void 0&&(typeof e!="number"?H(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&H(`${t} is NaN - the duration expression might be incorrect.`))}const Gl={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function dn(e,t,n,r){let o;try{o=r?e(...r):e()}catch(i){bi(i,t,n)}return o}function Ot(e,t,n,r){if(oe(e)){const i=dn(e,t,n,r);return i&&jl(i)&&i.catch(s=>{bi(s,t,n)}),i}const o=[];for(let i=0;i<e.length;i++)o.push(Ot(e[i],t,n,r));return o}function bi(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,a=Gl[n];for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,s,a)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){dn(l,null,10,[e,s,a]);return}}gm(e,n,o,r)}function gm(e,t,n,r=!0){{const o=Gl[t];if(n&&Ji(n),H(`Unhandled error${o?` during execution of ${o}`:""}`),n&&Xi(),r)throw e;console.error(e)}}let Ko=!1,qa=!1;const rt=[];let Zt=0;const qr=[];let zt=null,Rn=0;const wd=Promise.resolve();let Zl=null;const mm=100;function Ms(e){const t=Zl||wd;return e?t.then(this?e.bind(this):e):t}function ym(e){let t=Zt+1,n=rt.length;for(;t<n;){const r=t+n>>>1;qo(rt[r])<e?t=r+1:n=r}return t}function vi(e){(!rt.length||!rt.includes(e,Ko&&e.allowRecurse?Zt+1:Zt))&&(e.id==null?rt.push(e):rt.splice(ym(e.id),0,e),xd())}function xd(){!Ko&&!qa&&(qa=!0,Zl=wd.then(Sd))}function bm(e){const t=rt.indexOf(e);t>Zt&&rt.splice(t,1)}function Ed(e){X(e)?qr.push(...e):(!zt||!zt.includes(e,e.allowRecurse?Rn+1:Rn))&&qr.push(e),xd()}function Jc(e,t=Ko?Zt+1:0){for(e=e||new Map;t<rt.length;t++){const n=rt[t];if(n&&n.pre){if(Yl(e,n))continue;rt.splice(t,1),t--,n()}}}function _d(e){if(qr.length){const t=[...new Set(qr)];if(qr.length=0,zt){zt.push(...t);return}for(zt=t,e=e||new Map,zt.sort((n,r)=>qo(n)-qo(r)),Rn=0;Rn<zt.length;Rn++)Yl(e,zt[Rn])||zt[Rn]();zt=null,Rn=0}}const qo=e=>e.id==null?1/0:e.id,vm=(e,t)=>{const n=qo(e)-qo(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Sd(e){qa=!1,Ko=!0,e=e||new Map,rt.sort(vm);const t=n=>Yl(e,n);try{for(Zt=0;Zt<rt.length;Zt++){const n=rt[Zt];if(n&&n.active!==!1){if(t(n))continue;dn(n,null,14)}}}finally{Zt=0,rt.length=0,_d(e),Ko=!1,Zl=null,(rt.length||qr.length)&&Sd(e)}}function Yl(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>mm){const r=t.ownerInstance,o=r&&sc(r.type);return H(`Maximum recursive updates exceeded${o?` in component <${o}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let zn=!1;const Dr=new Set;cs().__VUE_HMR_RUNTIME__={createRecord:ca(Cd),rerender:ca(Em),reload:ca(_m)};const Or=new Map;function wm(e){const t=e.type.__hmrId;let n=Or.get(t);n||(Cd(t,e.type),n=Or.get(t)),n.instances.add(e)}function xm(e){Or.get(e.type.__hmrId).instances.delete(e)}function Cd(e,t){return Or.has(e)?!1:(Or.set(e,{initialDef:Ro(t),instances:new Set}),!0)}function Ro(e){return rh(e)?e.__vccOpts:e}function Em(e,t){const n=Or.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(r=>{t&&(r.render=t,Ro(r.type).render=t),r.renderCache=[],zn=!0,r.update(),zn=!1}))}function _m(e,t){const n=Or.get(e);if(!n)return;t=Ro(t),Xc(n.initialDef,t);const r=[...n.instances];for(const o of r){const i=Ro(o.type);Dr.has(i)||(i!==n.initialDef&&Xc(i,t),Dr.add(i)),o.appContext.propsCache.delete(o.type),o.appContext.emitsCache.delete(o.type),o.appContext.optionsCache.delete(o.type),o.ceReload?(Dr.add(i),o.ceReload(t.styles),Dr.delete(i)):o.parent?vi(o.parent.update):o.appContext.reload?o.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Ed(()=>{for(const o of r)Dr.delete(Ro(o.type))})}function Xc(e,t){Ie(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function ca(e){return(t,n)=>{try{return e(t,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Yt,To=[],za=!1;function wi(e,...t){Yt?Yt.emit(e,...t):za||To.push({event:e,args:t})}function Ad(e,t){var n,r;Yt=e,Yt?(Yt.enabled=!0,To.forEach(({event:o,args:i})=>Yt.emit(o,...i)),To=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Ad(i,t)}),setTimeout(()=>{Yt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,za=!0,To=[])},3e3)):(za=!0,To=[])}function Sm(e,t){wi("app:init",e,t,{Fragment:xt,Text:Ei,Comment:Ye,Static:ns})}function Cm(e){wi("app:unmount",e)}const Am=Jl("component:added"),$d=Jl("component:updated"),$m=Jl("component:removed"),km=e=>{Yt&&typeof Yt.cleanupBuffer=="function"&&!Yt.cleanupBuffer(e)&&$m(e)};function Jl(e){return t=>{wi(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const Im=kd("perf:start"),Om=kd("perf:end");function kd(e){return(t,n,r)=>{wi(e,t.appContext.app,t.uid,t,n,r)}}function Tm(e,t,n){wi("component:emit",e.appContext.app,e,t,n)}function Pm(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||$e;{const{emitsOptions:f,propsOptions:[u]}=e;if(f)if(!(t in f))(!u||!(ar(t)in u))&&H(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ar(t)}" prop.`);else{const d=f[t];oe(d)&&(d(...n)||H(`Invalid event arguments: event validation failed for event "${t}".`))}}let o=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const f=`${s==="modelValue"?"model":s}Modifiers`,{number:u,trim:d}=r[f]||$e;d&&(o=n.map(h=>Te(h)?h.trim():h)),u&&(o=n.map(gg))}Tm(e,t,o);{const f=t.toLowerCase();f!==t&&r[ar(f)]&&H(`Event "${f}" is emitted in component ${Ks(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Qn(t)}" instead of "${t}".`)}let a,l=r[a=ar(t)]||r[a=ar(tn(t))];!l&&i&&(l=r[a=ar(Qn(t))]),l&&Ot(l,e,6,o);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ot(c,e,6,o)}}function Id(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const i=e.emits;let s={},a=!1;if(!oe(e)){const l=c=>{const f=Id(c,t,!0);f&&(a=!0,Ie(s,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(Ee(e)&&r.set(e,null),null):(X(i)?i.forEach(l=>s[l]=null):Ie(s,i),Ee(e)&&r.set(e,s),s)}function Hs(e,t){return!e||!mi(t)?!1:(t=t.slice(2).replace(/Once$/,""),he(e,t[0].toLowerCase()+t.slice(1))||he(e,Qn(t))||he(e,t))}let je=null,Fs=null;function gs(e){const t=je;return je=e,Fs=e&&e.type.__scopeId||null,t}function zS(e){Fs=e}function WS(){Fs=null}function Nt(e,t=je,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&pu(-1);const i=gs(t);let s;try{s=e(...o)}finally{gs(i),r._d&&pu(1)}return $d(t),s};return r._n=!0,r._c=!0,r._d=!0,r}let Wa=!1;function ms(){Wa=!0}function ua(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:i,propsOptions:[s],slots:a,attrs:l,emit:c,render:f,renderCache:u,data:d,setupState:h,ctx:p,inheritAttrs:g}=e;let m,y;const x=gs(e);Wa=!1;try{if(n.shapeFlag&4){const _=o||r;m=Ut(f.call(_,_,u,i,h,d,p)),y=l}else{const _=t;l===i&&ms(),m=Ut(_.length>1?_(i,{get attrs(){return ms(),l},slots:a,emit:c}):_(i,null)),y=t.props?l:Rm(l)}}catch(_){No.length=0,bi(_,e,1),m=Se(Ye)}let w=m,A;if(m.patchFlag>0&&m.patchFlag&2048&&([w,A]=Lm(m)),y&&g!==!1){const _=Object.keys(y),{shapeFlag:S}=w;if(_.length){if(S&7)s&&_.some(as)&&(y=Bm(y,s)),w=rn(w,y);else if(!Wa&&w.type!==Ye){const R=Object.keys(l),E=[],k=[];for(let U=0,N=R.length;U<N;U++){const O=R[U];mi(O)?as(O)||E.push(O[2].toLowerCase()+O.slice(3)):k.push(O)}k.length&&H(`Extraneous non-props attributes (${k.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),E.length&&H(`Extraneous non-emits event listeners (${E.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(eu(w)||H("Runtime directive used on component with non-element root node. The directives will not function as intended."),w=rn(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(eu(w)||H("Component inside <Transition> renders non-element root node that cannot be animated."),w.transition=n.transition),A?A(w):m=w,gs(x),m}const Lm=e=>{const t=e.children,n=e.dynamicChildren,r=Od(t);if(!r)return[e,void 0];const o=t.indexOf(r),i=n?n.indexOf(r):-1,s=a=>{t[o]=a,n&&(i>-1?n[i]=a:a.patchFlag>0&&(e.dynamicChildren=[...n,a]))};return[Ut(r),s]};function Od(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(ao(r)){if(r.type!==Ye||r.children==="v-if"){if(t)return;t=r}}else return}return t}const Rm=e=>{let t;for(const n in e)(n==="class"||n==="style"||mi(n))&&((t||(t={}))[n]=e[n]);return t},Bm=(e,t)=>{const n={};for(const r in e)(!as(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n},eu=e=>e.shapeFlag&7||e.type===Ye;function Nm(e,t,n){const{props:r,children:o,component:i}=e,{props:s,children:a,patchFlag:l}=t,c=i.emitsOptions;if((o||a)&&zn||t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?tu(r,s,c):!!s;if(l&8){const f=t.dynamicProps;for(let u=0;u<f.length;u++){const d=f[u];if(s[d]!==r[d]&&!Hs(c,d))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?tu(r,s,c):!0:!!s;return!1}function tu(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!Hs(n,i))return!0}return!1}function Um({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Mm=e=>e.__isSuspense;function Hm(e,t){t&&t.pendingBranch?X(e)?t.effects.push(...e):t.effects.push(e):Ed(e)}function Fm(e,t){return Xl(e,null,t)}const Mi={};function Ht(e,t,n){return oe(t)||H("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Xl(e,t,n)}function Xl(e,t,{immediate:n,deep:r,flush:o,onTrack:i,onTrigger:s}=$e){var a;t||(n!==void 0&&H('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&H('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const l=_=>{H("Invalid watch source: ",_,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=Jf()===((a=Fe)==null?void 0:a.scope)?Fe:null;let f,u=!1,d=!1;if(Ne(e)?(f=()=>e.value,u=hs(e)):_r(e)?(f=()=>e,r=!0):X(e)?(d=!0,u=e.some(_=>_r(_)||hs(_)),f=()=>e.map(_=>{if(Ne(_))return _.value;if(_r(_))return hr(_);if(oe(_))return dn(_,c,2);l(_)})):oe(e)?t?f=()=>dn(e,c,2):f=()=>{if(!(c&&c.isUnmounted))return h&&h(),Ot(e,c,3,[p])}:(f=pt,l(e)),t&&r){const _=f;f=()=>hr(_())}let h,p=_=>{h=w.onStop=()=>{dn(_,c,4)}},g;if(co)if(p=pt,t?n&&Ot(t,c,3,[f(),d?[]:void 0,p]):f(),o==="sync"){const _=Gy();g=_.__watcherHandles||(_.__watcherHandles=[])}else return pt;let m=d?new Array(e.length).fill(Mi):Mi;const y=()=>{if(w.active)if(t){const _=w.run();(r||u||(d?_.some((S,R)=>jo(S,m[R])):jo(_,m)))&&(h&&h(),Ot(t,c,3,[_,m===Mi?void 0:d&&m[0]===Mi?[]:m,p]),m=_)}else w.run()};y.allowRecurse=!!t;let x;o==="sync"?x=y:o==="post"?x=()=>ft(y,c&&c.suspense):(y.pre=!0,c&&(y.id=c.uid),x=()=>vi(y));const w=new zl(f,x);w.onTrack=i,w.onTrigger=s,t?n?y():m=w.run():o==="post"?ft(w.run.bind(w),c&&c.suspense):w.run();const A=()=>{w.stop(),c&&c.scope&&Fl(c.scope.effects,w)};return g&&g.push(A),A}function Dm(e,t,n){const r=this.proxy,o=Te(e)?e.includes(".")?Td(r,e):()=>r[e]:e.bind(r,r);let i;oe(t)?i=t:(i=t.handler,n=t);const s=Fe;lo(this);const a=Xl(o,i.bind(r),n);return s?lo(s):Ar(),a}function Td(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function hr(e,t){if(!Ee(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ne(e))hr(e.value,t);else if(X(e))for(let n=0;n<e.length;n++)hr(e[n],t);else if(Wf(e)||xr(e))e.forEach(n=>{hr(n,t)});else if(Gf(e))for(const n in e)hr(e[n],t);return e}function Pd(e){dg(e)&&H("Do not use built-in directive ids as custom directive id: "+e)}function es(e,t){const n=je;if(n===null)return H("withDirectives can only be used inside render functions."),e;const r=Vs(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,l,c=$e]=t[i];s&&(oe(s)&&(s={mounted:s,updated:s}),s.deep&&hr(a),o.push({dir:s,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function rr(e,t,n,r){const o=e.dirs,i=t&&t.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);let l=a.dir[r];l&&(Pr(),Ot(l,n,8,[e.el,a,e,t]),Lr())}}function jm(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xi(()=>{e.isMounted=!0}),Ud(()=>{e.isUnmounting=!0}),e}const _t=[Function,Array],Ld={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_t,onEnter:_t,onAfterEnter:_t,onEnterCancelled:_t,onBeforeLeave:_t,onLeave:_t,onAfterLeave:_t,onLeaveCancelled:_t,onBeforeAppear:_t,onAppear:_t,onAfterAppear:_t,onAppearCancelled:_t},Vm={name:"BaseTransition",props:Ld,setup(e,{slots:t}){const n=Rr(),r=jm();let o;return()=>{const i=t.default&&Bd(t.default(),!0);if(!i||!i.length)return;let s=i[0];if(i.length>1){let g=!1;for(const m of i)if(m.type!==Ye){if(g){H("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}s=m,g=!0}}const a=ce(e),{mode:l}=a;if(l&&l!=="in-out"&&l!=="out-in"&&l!=="default"&&H(`invalid <transition> mode: ${l}`),r.isLeaving)return fa(s);const c=nu(s);if(!c)return fa(s);const f=Qa(c,a,r,n);Ga(c,f);const u=n.subTree,d=u&&nu(u);let h=!1;const{getTransitionKey:p}=c.type;if(p){const g=p();o===void 0?o=g:g!==o&&(o=g,h=!0)}if(d&&d.type!==Ye&&(!lr(c,d)||h)){const g=Qa(d,a,r,n);if(Ga(d,g),l==="out-in")return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},fa(s);l==="in-out"&&c.type!==Ye&&(g.delayLeave=(m,y,x)=>{const w=Rd(r,d);w[String(d.key)]=d,m._leaveCb=()=>{y(),m._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=x})}return s}}},Km=Vm;function Rd(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Qa(e,t,n,r){const{appear:o,mode:i,persisted:s=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:u,onLeave:d,onAfterLeave:h,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:y,onAppearCancelled:x}=t,w=String(e.key),A=Rd(n,e),_=(E,k)=>{E&&Ot(E,r,9,k)},S=(E,k)=>{const U=k[1];_(E,k),X(E)?E.every(N=>N.length<=1)&&U():E.length<=1&&U()},R={mode:i,persisted:s,beforeEnter(E){let k=a;if(!n.isMounted)if(o)k=g||a;else return;E._leaveCb&&E._leaveCb(!0);const U=A[w];U&&lr(e,U)&&U.el._leaveCb&&U.el._leaveCb(),_(k,[E])},enter(E){let k=l,U=c,N=f;if(!n.isMounted)if(o)k=m||l,U=y||c,N=x||f;else return;let O=!1;const Q=E._enterCb=te=>{O||(O=!0,te?_(N,[E]):_(U,[E]),R.delayedLeave&&R.delayedLeave(),E._enterCb=void 0)};k?S(k,[E,Q]):Q()},leave(E,k){const U=String(e.key);if(E._enterCb&&E._enterCb(!0),n.isUnmounting)return k();_(u,[E]);let N=!1;const O=E._leaveCb=Q=>{N||(N=!0,k(),Q?_(p,[E]):_(h,[E]),E._leaveCb=void 0,A[U]===e&&delete A[U])};A[U]=e,d?S(d,[E,O]):O()},clone(E){return Qa(E,t,n,r)}};return R}function fa(e){if(yo(e))return e=rn(e),e.children=null,e}function nu(e){return yo(e)?e.children?e.children[0]:void 0:e}function Ga(e,t){e.shapeFlag&6&&e.component?Ga(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Bd(e,t=!1,n){let r=[],o=0;for(let i=0;i<e.length;i++){let s=e[i];const a=n==null?s.key:String(n)+String(s.key!=null?s.key:i);s.type===xt?(s.patchFlag&128&&o++,r=r.concat(Bd(s.children,t,a))):(t||s.type!==Ye)&&r.push(a!=null?rn(s,{key:a}):s)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function mo(e,t){return oe(e)?(()=>Ie({name:e.name},t,{setup:e}))():e}const Bo=e=>!!e.type.__asyncLoader;function QS(e){oe(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:o=200,timeout:i,suspensible:s=!0,onError:a}=e;let l=null,c,f=0;const u=()=>(f++,l=null,d()),d=()=>{let h;return l||(h=l=t().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((g,m)=>{a(p,()=>g(u()),()=>m(p),f+1)});throw p}).then(p=>{if(h!==l&&l)return l;if(p||H("Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."),p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),p&&!Ee(p)&&!oe(p))throw new Error(`Invalid async component load result: ${p}`);return c=p,p}))};return mo({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return c},setup(){const h=Fe;if(c)return()=>da(c,h);const p=x=>{l=null,bi(x,h,13,!r)};if(s&&h.suspense||co)return d().then(x=>()=>da(x,h)).catch(x=>(p(x),()=>r?Se(r,{error:x}):null));const g=Re(!1),m=Re(),y=Re(!!o);return o&&setTimeout(()=>{y.value=!1},o),i!=null&&setTimeout(()=>{if(!g.value&&!m.value){const x=new Error(`Async component timed out after ${i}ms.`);p(x),m.value=x}},i),d().then(()=>{g.value=!0,h.parent&&yo(h.parent.vnode)&&vi(h.parent.update)}).catch(x=>{p(x),m.value=x}),()=>{if(g.value&&c)return da(c,h);if(m.value&&r)return Se(r,{error:m.value});if(n&&!y.value)return Se(n)}}})}function da(e,t){const{ref:n,props:r,children:o,ce:i}=t.vnode,s=Se(e,r,o);return s.ref=n,s.ce=i,delete t.vnode.ce,s}const yo=e=>e.type.__isKeepAlive;function qm(e,t){Nd(e,"a",t)}function zm(e,t){Nd(e,"da",t)}function Nd(e,t,n=Fe){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Ds(t,r,n),n){let o=n.parent;for(;o&&o.parent;)yo(o.parent.vnode)&&Wm(r,t,n,o),o=o.parent}}function Wm(e,t,n,r){const o=Ds(t,e,r,!0);Md(()=>{Fl(r[t],o)},n)}function Ds(e,t,n=Fe,r=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;Pr(),lo(n);const a=Ot(t,n,e,s);return Ar(),Lr(),a});return r?o.unshift(i):o.push(i),i}else{const o=ar(Gl[e].replace(/ hook$/,""));H(`${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const pn=e=>(t,n=Fe)=>(!co||e==="sp")&&Ds(e,(...r)=>t(...r),n),Qm=pn("bm"),xi=pn("m"),Gm=pn("bu"),Zm=pn("u"),Ud=pn("bum"),Md=pn("um"),Ym=pn("sp"),Jm=pn("rtg"),Xm=pn("rtc");function ey(e,t=Fe){Ds("ec",e,t)}const ys="components",ty="directives";function so(e,t){return ec(ys,e,!0,t)||e}const Hd=Symbol.for("v-ndc");function ru(e){return Te(e)?ec(ys,e,!1)||e:e||Hd}function Za(e){return ec(ty,e)}function ec(e,t,n=!0,r=!1){const o=je||Fe;if(o){const i=o.type;if(e===ys){const a=sc(i,!1);if(a&&(a===t||a===tn(t)||a===Ir(tn(t))))return i}const s=ou(o[e]||i[e],t)||ou(o.appContext[e],t);if(!s&&r)return i;if(n&&!s){const a=e===ys?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";H(`Failed to resolve ${e.slice(0,-1)}: ${t}${a}`)}return s}else H(`resolve${Ir(e.slice(0,-1))} can only be used in render() or setup().`)}function ou(e,t){return e&&(e[t]||e[tn(t)]||e[Ir(tn(t))])}function GS(e,t,n,r){let o;const i=n&&n[r];if(X(e)||Te(e)){o=new Array(e.length);for(let s=0,a=e.length;s<a;s++)o[s]=t(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){Number.isInteger(e)||H(`The v-for range expect an integer value but got ${e}.`),o=new Array(e);for(let s=0;s<e;s++)o[s]=t(s+1,s,void 0,i&&i[s])}else if(Ee(e))if(e[Symbol.iterator])o=Array.from(e,(s,a)=>t(s,a,void 0,i&&i[a]));else{const s=Object.keys(e);o=new Array(s.length);for(let a=0,l=s.length;a<l;a++){const c=s[a];o[a]=t(e[c],c,a,i&&i[a])}}else o=[];return n&&(n[r]=o),o}function ht(e,t,n={},r,o){if(je.isCE||je.parent&&Bo(je.parent)&&je.parent.isCE)return t!=="default"&&(n.name=t),Se("slot",n,r&&r());let i=e[t];i&&i.length>1&&(H("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),i=()=>[]),i&&i._c&&(i._d=!1),Ce();const s=i&&Fd(i(n)),a=Ft(xt,{key:n.key||s&&s.key||`_${t}`},s||(r?r():[]),s&&e._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Fd(e){return e.some(t=>ao(t)?!(t.type===Ye||t.type===xt&&!Fd(t.children)):!0)?e:null}const Ya=e=>e?eh(e)?Vs(e)||e.proxy:Ya(e.parent):null,Cr=Ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>Oo(e.props),$attrs:e=>Oo(e.attrs),$slots:e=>Oo(e.slots),$refs:e=>Oo(e.refs),$parent:e=>Ya(e.parent),$root:e=>Ya(e.root),$emit:e=>e.emit,$options:e=>nc(e),$forceUpdate:e=>e.f||(e.f=()=>vi(e.update)),$nextTick:e=>e.n||(e.n=Ms.bind(e.proxy)),$watch:e=>Dm.bind(e)}),tc=e=>e==="_"||e==="$",ha=(e,t)=>e!==$e&&!e.__isScriptSetup&&he(e,t),Dd={get({_:e},t){const{ctx:n,setupState:r,data:o,props:i,accessCache:s,type:a,appContext:l}=e;if(t==="__isVue")return!0;let c;if(t[0]!=="$"){const h=s[t];if(h!==void 0)switch(h){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return i[t]}else{if(ha(r,t))return s[t]=1,r[t];if(o!==$e&&he(o,t))return s[t]=2,o[t];if((c=e.propsOptions[0])&&he(c,t))return s[t]=3,i[t];if(n!==$e&&he(n,t))return s[t]=4,n[t];Ja&&(s[t]=0)}}const f=Cr[t];let u,d;if(f)return t==="$attrs"?(ot(e,"get",t),ms()):t==="$slots"&&ot(e,"get",t),f(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==$e&&he(n,t))return s[t]=4,n[t];if(d=l.config.globalProperties,he(d,t))return d[t];je&&(!Te(t)||t.indexOf("__v")!==0)&&(o!==$e&&tc(t[0])&&he(o,t)?H(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===je&&H(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:r,setupState:o,ctx:i}=e;return ha(o,t)?(o[t]=n,!0):o.__isScriptSetup&&he(o,t)?(H(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):r!==$e&&he(r,t)?(r[t]=n,!0):he(e.props,t)?(H(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(H(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(i,t,{enumerable:!0,configurable:!0,value:n}):i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:i}},s){let a;return!!n[s]||e!==$e&&he(e,s)||ha(t,s)||(a=i[0])&&he(a,s)||he(r,s)||he(Cr,s)||he(o.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:he(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};Dd.ownKeys=e=>(H("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function ny(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(Cr).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>Cr[n](e),set:pt})}),t}function ry(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(r=>{Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>e.props[r],set:pt})})}function oy(e){const{ctx:t,setupState:n}=e;Object.keys(ce(n)).forEach(r=>{if(!n.__isScriptSetup){if(tc(r[0])){H(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>n[r],set:pt})}})}function ZS(){return iy().attrs}function YS(e,t,n){const r=Rr();if(!r)return H("useModel() called without active instance."),Re();if(!r.propsOptions[0][t])return H(`useModel() called with prop "${t}" which is not declared.`),Re();if(n&&n.local){const o=Re(e[t]);return Ht(()=>e[t],i=>o.value=i),Ht(o,i=>{i!==e[t]&&r.emit(`update:${t}`,i)}),o}else return{__v_isRef:!0,get value(){return e[t]},set value(o){r.emit(`update:${t}`,o)}}}function iy(){const e=Rr();return e||H("useContext() called without active instance."),e.setupContext||(e.setupContext=nh(e))}function bs(e){return X(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function JS(e,t){return!e||!t?e||t:X(e)&&X(t)?e.concat(t):Ie({},bs(e),bs(t))}function sy(){const e=Object.create(null);return(t,n)=>{e[n]?H(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let Ja=!0;function ay(e){const t=nc(e),n=e.proxy,r=e.ctx;Ja=!1,t.beforeCreate&&iu(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:s,watch:a,provide:l,inject:c,created:f,beforeMount:u,mounted:d,beforeUpdate:h,updated:p,activated:g,deactivated:m,beforeDestroy:y,beforeUnmount:x,destroyed:w,unmounted:A,render:_,renderTracked:S,renderTriggered:R,errorCaptured:E,serverPrefetch:k,expose:U,inheritAttrs:N,components:O,directives:Q,filters:te}=t,I=sy();{const[M]=e.propsOptions;if(M)for(const j in M)I("Props",j)}if(c&&ly(c,r,I),s)for(const M in s){const j=s[M];oe(j)?(Object.defineProperty(r,M,{value:j.bind(n),configurable:!0,enumerable:!0,writable:!0}),I("Methods",M)):H(`Method "${M}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`)}if(o){oe(o)||H("The data option must be a function. Plain object usage is no longer supported.");const M=o.call(n,n);if(jl(M)&&H("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Ee(M))H("data() should return an object.");else{e.data=yi(M);for(const j in M)I("Data",j),tc(j[0])||Object.defineProperty(r,j,{configurable:!0,enumerable:!0,get:()=>M[j],set:pt})}}if(Ja=!0,i)for(const M in i){const j=i[M],D=oe(j)?j.bind(n,n):oe(j.get)?j.get.bind(n,n):pt;D===pt&&H(`Computed property "${M}" has no getter.`);const ne=!oe(j)&&oe(j.set)?j.set.bind(n):()=>{H(`Write operation failed: computed property "${M}" is readonly.`)},ae=ut({get:D,set:ne});Object.defineProperty(r,M,{enumerable:!0,configurable:!0,get:()=>ae.value,set:re=>ae.value=re}),I("Computed",M)}if(a)for(const M in a)jd(a[M],r,n,M);if(l){const M=oe(l)?l.call(n):l;Reflect.ownKeys(M).forEach(j=>{ts(j,M[j])})}f&&iu(f,e,"c");function T(M,j){X(j)?j.forEach(D=>M(D.bind(n))):j&&M(j.bind(n))}if(T(Qm,u),T(xi,d),T(Gm,h),T(Zm,p),T(qm,g),T(zm,m),T(ey,E),T(Xm,S),T(Jm,R),T(Ud,x),T(Md,A),T(Ym,k),X(U))if(U.length){const M=e.exposed||(e.exposed={});U.forEach(j=>{Object.defineProperty(M,j,{get:()=>n[j],set:D=>n[j]=D})})}else e.exposed||(e.exposed={});_&&e.render===pt&&(e.render=_),N!=null&&(e.inheritAttrs=N),O&&(e.components=O),Q&&(e.directives=Q)}function ly(e,t,n=pt){X(e)&&(e=Xa(e));for(const r in e){const o=e[r];let i;Ee(o)?"default"in o?i=en(o.from||r,o.default,!0):i=en(o.from||r):i=en(o),Ne(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i,n("Inject",r)}}function iu(e,t,n){Ot(X(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function jd(e,t,n,r){const o=r.includes(".")?Td(n,r):()=>n[r];if(Te(e)){const i=t[e];oe(i)?Ht(o,i):H(`Invalid watch handler specified by key "${e}"`,i)}else if(oe(e))Ht(o,e.bind(n));else if(Ee(e))if(X(e))e.forEach(i=>jd(i,t,n,r));else{const i=oe(e.handler)?e.handler.bind(n):t[e.handler];oe(i)?Ht(o,i,e):H(`Invalid watch handler specified by key "${e.handler}"`,i)}else H(`Invalid watch option: "${r}"`,e)}function nc(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,a=i.get(t);let l;return a?l=a:!o.length&&!n&&!r?l=t:(l={},o.length&&o.forEach(c=>vs(l,c,s,!0)),vs(l,t,s)),Ee(t)&&i.set(t,l),l}function vs(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&vs(e,i,n,!0),o&&o.forEach(s=>vs(e,s,n,!0));for(const s in t)if(r&&s==="expose")H('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=cy[s]||n&&n[s];e[s]=a?a(e[s],t[s]):t[s]}return e}const cy={data:su,props:au,emits:au,methods:Po,computed:Po,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:Po,directives:Po,watch:fy,provide:su,inject:uy};function su(e,t){return t?e?function(){return Ie(oe(e)?e.call(this,this):e,oe(t)?t.call(this,this):t)}:t:e}function uy(e,t){return Po(Xa(e),Xa(t))}function Xa(e){if(X(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function st(e,t){return e?[...new Set([].concat(e,t))]:t}function Po(e,t){return e?Ie(Object.create(null),e,t):t}function au(e,t){return e?X(e)&&X(t)?[...new Set([...e,...t])]:Ie(Object.create(null),bs(e),bs(t??{})):t}function fy(e,t){if(!e)return t;if(!t)return e;const n=Ie(Object.create(null),e);for(const r in t)n[r]=st(e[r],t[r]);return n}function Vd(){return{app:null,config:{isNativeTag:zf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dy=0;function hy(e,t){return function(r,o=null){oe(r)||(r=Ie({},r)),o!=null&&!Ee(o)&&(H("root props passed to app.mount() must be an object."),o=null);const i=Vd();Object.defineProperty(i.config,"unwrapInjectedRef",{get(){return!0},set(){H("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const s=new Set;let a=!1;const l=i.app={_uid:dy++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:yu,get config(){return i.config},set config(c){H("app.config cannot be replaced. Modify individual options instead.")},use(c,...f){return s.has(c)?H("Plugin has already been applied to target app."):c&&oe(c.install)?(s.add(c),c.install(l,...f)):oe(c)?(s.add(c),c(l,...f)):H('A plugin must either be a function or an object with an "install" function.'),l},mixin(c){return i.mixins.includes(c)?H("Mixin has already been applied to target app"+(c.name?`: ${c.name}`:"")):i.mixins.push(c),l},component(c,f){return ol(c,i.config),f?(i.components[c]&&H(`Component "${c}" has already been registered in target app.`),i.components[c]=f,l):i.components[c]},directive(c,f){return Pd(c),f?(i.directives[c]&&H(`Directive "${c}" has already been registered in target app.`),i.directives[c]=f,l):i.directives[c]},mount(c,f,u){if(a)H("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{c.__vue_app__&&H("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=Se(r,o);return d.appContext=i,i.reload=()=>{e(rn(d),c,u)},f&&t?t(d,c):e(d,c,u),a=!0,l._container=c,c.__vue_app__=l,l._instance=d.component,Sm(l,yu),Vs(d.component)||d.component.proxy}},unmount(){a?(e(null,l._container),l._instance=null,Cm(l),delete l._container.__vue_app__):H("Cannot unmount an app that is not mounted.")},provide(c,f){return c in i.provides&&H(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`),i.provides[c]=f,l},runWithContext(c){zo=l;try{return c()}finally{zo=null}}};return l}}let zo=null;function ts(e,t){if(!Fe)H("provide() can only be used inside setup().");else{let n=Fe.provides;const r=Fe.parent&&Fe.parent.provides;r===n&&(n=Fe.provides=Object.create(r)),n[e]=t}}function en(e,t,n=!1){const r=Fe||je;if(r||zo){const o=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:zo._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&oe(t)?t.call(r&&r.proxy):t;H(`injection "${String(e)}" not found.`)}else H("inject() can only be used inside setup() or functional components.")}function XS(){return!!(Fe||je||zo)}function py(e,t,n,r=!1){const o={},i={};ls(i,js,1),e.propsDefaults=Object.create(null),Kd(e,t,o,i);for(const s in e.propsOptions[0])s in o||(o[s]=void 0);zd(t||{},o,e),n?e.props=r?o:dd(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function gy(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function my(e,t,n,r){const{props:o,attrs:i,vnode:{patchFlag:s}}=e,a=ce(o),[l]=e.propsOptions;let c=!1;if(!gy(e)&&(r||s>0)&&!(s&16)){if(s&8){const f=e.vnode.dynamicProps;for(let u=0;u<f.length;u++){let d=f[u];if(Hs(e.emitsOptions,d))continue;const h=t[d];if(l)if(he(i,d))h!==i[d]&&(i[d]=h,c=!0);else{const p=tn(d);o[p]=el(l,a,p,h,e,!1)}else h!==i[d]&&(i[d]=h,c=!0)}}}else{Kd(e,t,o,i)&&(c=!0);let f;for(const u in a)(!t||!he(t,u)&&((f=Qn(u))===u||!he(t,f)))&&(l?n&&(n[u]!==void 0||n[f]!==void 0)&&(o[u]=el(l,a,u,void 0,e,!0)):delete o[u]);if(i!==a)for(const u in i)(!t||!he(t,u))&&(delete i[u],c=!0)}c&&nn(e,"set","$attrs"),zd(t||{},o,e)}function Kd(e,t,n,r){const[o,i]=e.propsOptions;let s=!1,a;if(t)for(let l in t){if(Yi(l))continue;const c=t[l];let f;o&&he(o,f=tn(l))?!i||!i.includes(f)?n[f]=c:(a||(a={}))[f]=c:Hs(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(i){const l=ce(n),c=a||$e;for(let f=0;f<i.length;f++){const u=i[f];n[u]=el(o,l,u,c[u],e,!he(c,u))}}return s}function el(e,t,n,r,o,i){const s=e[n];if(s!=null){const a=he(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&oe(l)){const{propsDefaults:c}=o;n in c?r=c[n]:(lo(o),r=c[n]=l.call(null,t),Ar())}else r=l}s[0]&&(i&&!a?r=!1:s[1]&&(r===""||r===Qn(n))&&(r=!0))}return r}function qd(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const i=e.props,s={},a=[];let l=!1;if(!oe(e)){const f=u=>{l=!0;const[d,h]=qd(u,t,!0);Ie(s,d),h&&a.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return Ee(e)&&r.set(e,Kr),Kr;if(X(i))for(let f=0;f<i.length;f++){Te(i[f])||H("props must be strings when using array syntax.",i[f]);const u=tn(i[f]);lu(u)&&(s[u]=$e)}else if(i){Ee(i)||H("invalid props options",i);for(const f in i){const u=tn(f);if(lu(u)){const d=i[f],h=s[u]=X(d)||oe(d)?{type:d}:Ie({},d);if(h){const p=uu(Boolean,h.type),g=uu(String,h.type);h[0]=p>-1,h[1]=g<0||p<g,(p>-1||he(h,"default"))&&a.push(u)}}}}const c=[s,a];return Ee(e)&&r.set(e,c),c}function lu(e){return e[0]!=="$"?!0:(H(`Invalid prop name: "${e}" is a reserved property.`),!1)}function tl(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function cu(e,t){return tl(e)===tl(t)}function uu(e,t){return X(t)?t.findIndex(n=>cu(n,e)):oe(t)&&cu(t,e)?0:-1}function zd(e,t,n){const r=ce(t),o=n.propsOptions[0];for(const i in o){let s=o[i];s!=null&&yy(i,r[i],s,!he(e,i)&&!he(e,Qn(i)))}}function yy(e,t,n,r){const{type:o,required:i,validator:s,skipCheck:a}=n;if(i&&r){H('Missing required prop: "'+e+'"');return}if(!(t==null&&!i)){if(o!=null&&o!==!0&&!a){let l=!1;const c=X(o)?o:[o],f=[];for(let u=0;u<c.length&&!l;u++){const{valid:d,expectedType:h}=vy(t,c[u]);f.push(h||""),l=d}if(!l){H(wy(e,t,f));return}}s&&!s(t)&&H('Invalid prop: custom validator check failed for prop "'+e+'".')}}const by=Xn("String,Number,Boolean,Function,Symbol,BigInt");function vy(e,t){let n;const r=tl(t);if(by(r)){const o=typeof e;n=o===r.toLowerCase(),!n&&o==="object"&&(n=e instanceof t)}else r==="Object"?n=Ee(e):r==="Array"?n=X(e):r==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:r}}function wy(e,t,n){let r=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(Ir).join(" | ")}`;const o=n[0],i=Vl(t),s=fu(t,o),a=fu(t,i);return n.length===1&&du(o)&&!xy(o,i)&&(r+=` with value ${s}`),r+=`, got ${i} `,du(i)&&(r+=`with value ${a}.`),r}function fu(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function du(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function xy(...e){return e.some(t=>t.toLowerCase()==="boolean")}const Wd=e=>e[0]==="_"||e==="$stable",rc=e=>X(e)?e.map(Ut):[Ut(e)],Ey=(e,t,n)=>{if(t._n)return t;const r=Nt((...o)=>(Fe&&H(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),rc(t(...o))),n);return r._c=!1,r},Qd=(e,t,n)=>{const r=e._ctx;for(const o in e){if(Wd(o))continue;const i=e[o];if(oe(i))t[o]=Ey(o,i,r);else if(i!=null){H(`Non-function value encountered for slot "${o}". Prefer function slots for better performance.`);const s=rc(i);t[o]=()=>s}}},Gd=(e,t)=>{yo(e.vnode)||H("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=rc(t);e.slots.default=()=>n},_y=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ce(t),ls(t,"_",n)):Qd(t,e.slots={})}else e.slots={},t&&Gd(e,t);ls(e.slots,js,1)},Sy=(e,t,n)=>{const{vnode:r,slots:o}=e;let i=!0,s=$e;if(r.shapeFlag&32){const a=t._;a?zn?(Ie(o,t),nn(e,"set","$slots")):n&&a===1?i=!1:(Ie(o,t),!n&&a===1&&delete o._):(i=!t.$stable,Qd(t,o)),s=t}else t&&(Gd(e,t),s={default:1});if(i)for(const a in o)!Wd(a)&&!(a in s)&&delete o[a]};function nl(e,t,n,r,o=!1){if(X(e)){e.forEach((d,h)=>nl(d,t&&(X(t)?t[h]:t),n,r,o));return}if(Bo(r)&&!o)return;const i=r.shapeFlag&4?Vs(r.component)||r.component.proxy:r.el,s=o?null:i,{i:a,r:l}=e;if(!a){H("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const c=t&&t.r,f=a.refs===$e?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(Te(c)?(f[c]=null,he(u,c)&&(u[c]=null)):Ne(c)&&(c.value=null)),oe(l))dn(l,a,12,[s,f]);else{const d=Te(l),h=Ne(l);if(d||h){const p=()=>{if(e.f){const g=d?he(u,l)?u[l]:f[l]:l.value;o?X(g)&&Fl(g,i):X(g)?g.includes(i)||g.push(i):d?(f[l]=[i],he(u,l)&&(u[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else d?(f[l]=s,he(u,l)&&(u[l]=s)):h?(l.value=s,e.k&&(f[e.k]=s)):H("Invalid template ref type:",l,`(${typeof l})`)};s?(p.id=-1,ft(p,n)):p()}else H("Invalid template ref type:",l,`(${typeof l})`)}}let Eo,Un;function an(e,t){e.appContext.config.performance&&ws()&&Un.mark(`vue-${t}-${e.uid}`),Im(e,t,ws()?Un.now():Date.now())}function ln(e,t){if(e.appContext.config.performance&&ws()){const n=`vue-${t}-${e.uid}`,r=n+":end";Un.mark(r),Un.measure(`<${Ks(e,e.type)}> ${t}`,n,r),Un.clearMarks(n),Un.clearMarks(r)}Om(e,t,ws()?Un.now():Date.now())}function ws(){return Eo!==void 0||(typeof window<"u"&&window.performance?(Eo=!0,Un=window.performance):Eo=!1),Eo}function Cy(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const ft=Hm;function Ay(e){return $y(e)}function $y(e,t){Cy();const n=cs();n.__VUE__=!0,Ad(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:o,patchProp:i,createElement:s,createText:a,createComment:l,setText:c,setElementText:f,parentNode:u,nextSibling:d,setScopeId:h=pt,insertStaticContent:p}=e,g=(b,v,C,B=null,P=null,q=null,G=!1,V=null,W=zn?!1:!!v.dynamicChildren)=>{if(b===v)return;b&&!lr(b,v)&&(B=z(b),we(b,P,q,!0),b=null),v.patchFlag===-2&&(W=!1,v.dynamicChildren=null);const{type:F,ref:J,shapeFlag:Y}=v;switch(F){case Ei:m(b,v,C,B);break;case Ye:y(b,v,C,B);break;case ns:b==null?x(v,C,B,G):w(b,v,C,G);break;case xt:Q(b,v,C,B,P,q,G,V,W);break;default:Y&1?S(b,v,C,B,P,q,G,V,W):Y&6?te(b,v,C,B,P,q,G,V,W):Y&64||Y&128?F.process(b,v,C,B,P,q,G,V,W,Z):H("Invalid VNode type:",F,`(${typeof F})`)}J!=null&&P&&nl(J,b&&b.ref,q,v||b,!v)},m=(b,v,C,B)=>{if(b==null)r(v.el=a(v.children),C,B);else{const P=v.el=b.el;v.children!==b.children&&c(P,v.children)}},y=(b,v,C,B)=>{b==null?r(v.el=l(v.children||""),C,B):v.el=b.el},x=(b,v,C,B)=>{[b.el,b.anchor]=p(b.children,v,C,B,b.el,b.anchor)},w=(b,v,C,B)=>{if(v.children!==b.children){const P=d(b.anchor);_(b),[v.el,v.anchor]=p(v.children,C,P,B)}else v.el=b.el,v.anchor=b.anchor},A=({el:b,anchor:v},C,B)=>{let P;for(;b&&b!==v;)P=d(b),r(b,C,B),b=P;r(v,C,B)},_=({el:b,anchor:v})=>{let C;for(;b&&b!==v;)C=d(b),o(b),b=C;o(v)},S=(b,v,C,B,P,q,G,V,W)=>{G=G||v.type==="svg",b==null?R(v,C,B,P,q,G,V,W):U(b,v,P,q,G,V,W)},R=(b,v,C,B,P,q,G,V)=>{let W,F;const{type:J,props:Y,shapeFlag:ee,transition:le,dirs:pe}=b;if(W=b.el=s(b.type,q,Y&&Y.is,Y),ee&8?f(W,b.children):ee&16&&k(b.children,W,null,B,P,q&&J!=="foreignObject",G,V),pe&&rr(b,null,B,"created"),E(W,b,b.scopeId,G,B),Y){for(const Ae in Y)Ae!=="value"&&!Yi(Ae)&&i(W,Ae,null,Y[Ae],q,b.children,B,P,$);"value"in Y&&i(W,"value",null,Y.value),(F=Y.onVnodeBeforeMount)&&jt(F,B,b)}Object.defineProperty(W,"__vnode",{value:b,enumerable:!1}),Object.defineProperty(W,"__vueParentComponent",{value:B,enumerable:!1}),pe&&rr(b,null,B,"beforeMount");const ke=(!P||P&&!P.pendingBranch)&&le&&!le.persisted;ke&&le.beforeEnter(W),r(W,v,C),((F=Y&&Y.onVnodeMounted)||ke||pe)&&ft(()=>{F&&jt(F,B,b),ke&&le.enter(W),pe&&rr(b,null,B,"mounted")},P)},E=(b,v,C,B,P)=>{if(C&&h(b,C),B)for(let q=0;q<B.length;q++)h(b,B[q]);if(P){let q=P.subTree;if(q.patchFlag>0&&q.patchFlag&2048&&(q=Od(q.children)||q),v===q){const G=P.vnode;E(b,G,G.scopeId,G.slotScopeIds,P.parent)}}},k=(b,v,C,B,P,q,G,V,W=0)=>{for(let F=W;F<b.length;F++){const J=b[F]=V?Bn(b[F]):Ut(b[F]);g(null,J,v,C,B,P,q,G,V)}},U=(b,v,C,B,P,q,G)=>{const V=v.el=b.el;let{patchFlag:W,dynamicChildren:F,dirs:J}=v;W|=b.patchFlag&16;const Y=b.props||$e,ee=v.props||$e;let le;C&&or(C,!1),(le=ee.onVnodeBeforeUpdate)&&jt(le,C,v,b),J&&rr(v,b,C,"beforeUpdate"),C&&or(C,!0),zn&&(W=0,G=!1,F=null);const pe=P&&v.type!=="foreignObject";if(F?(N(b.dynamicChildren,F,V,C,B,pe,q),xs(b,v)):G||D(b,v,V,null,C,B,pe,q,!1),W>0){if(W&16)O(V,v,Y,ee,C,B,P);else if(W&2&&Y.class!==ee.class&&i(V,"class",null,ee.class,P),W&4&&i(V,"style",Y.style,ee.style,P),W&8){const ke=v.dynamicProps;for(let Ae=0;Ae<ke.length;Ae++){const De=ke[Ae],Pt=Y[De],Br=ee[De];(Br!==Pt||De==="value")&&i(V,De,Pt,Br,P,b.children,C,B,$)}}W&1&&b.children!==v.children&&f(V,v.children)}else!G&&F==null&&O(V,v,Y,ee,C,B,P);((le=ee.onVnodeUpdated)||J)&&ft(()=>{le&&jt(le,C,v,b),J&&rr(v,b,C,"updated")},B)},N=(b,v,C,B,P,q,G)=>{for(let V=0;V<v.length;V++){const W=b[V],F=v[V],J=W.el&&(W.type===xt||!lr(W,F)||W.shapeFlag&70)?u(W.el):C;g(W,F,J,null,B,P,q,G,!0)}},O=(b,v,C,B,P,q,G)=>{if(C!==B){if(C!==$e)for(const V in C)!Yi(V)&&!(V in B)&&i(b,V,C[V],null,G,v.children,P,q,$);for(const V in B){if(Yi(V))continue;const W=B[V],F=C[V];W!==F&&V!=="value"&&i(b,V,F,W,G,v.children,P,q,$)}"value"in B&&i(b,"value",C.value,B.value)}},Q=(b,v,C,B,P,q,G,V,W)=>{const F=v.el=b?b.el:a(""),J=v.anchor=b?b.anchor:a("");let{patchFlag:Y,dynamicChildren:ee,slotScopeIds:le}=v;(zn||Y&2048)&&(Y=0,W=!1,ee=null),le&&(V=V?V.concat(le):le),b==null?(r(F,C,B),r(J,C,B),k(v.children,C,J,P,q,G,V,W)):Y>0&&Y&64&&ee&&b.dynamicChildren?(N(b.dynamicChildren,ee,C,P,q,G,V),xs(b,v)):D(b,v,C,J,P,q,G,V,W)},te=(b,v,C,B,P,q,G,V,W)=>{v.slotScopeIds=V,b==null?v.shapeFlag&512?P.ctx.activate(v,C,B,G,W):I(v,C,B,P,q,G,W):T(b,v,W)},I=(b,v,C,B,P,q,G)=>{const V=b.component=Hy(b,B,P);if(V.type.__hmrId&&wm(V),Ji(b),an(V,"mount"),yo(b)&&(V.ctx.renderer=Z),an(V,"init"),Dy(V),ln(V,"init"),V.asyncDep){if(P&&P.registerDep(V,M),!b.el){const W=V.subTree=Se(Ye);y(null,W,v,C)}return}M(V,b,v,C,P,q,G),Xi(),ln(V,"mount")},T=(b,v,C)=>{const B=v.component=b.component;if(Nm(b,v,C))if(B.asyncDep&&!B.asyncResolved){Ji(v),j(B,v,C),Xi();return}else B.next=v,bm(B.update),B.update();else v.el=b.el,B.vnode=v},M=(b,v,C,B,P,q,G)=>{const V=()=>{if(b.isMounted){let{next:J,bu:Y,u:ee,parent:le,vnode:pe}=b,ke=J,Ae;Ji(J||b.vnode),or(b,!1),J?(J.el=pe.el,j(b,J,G)):J=pe,Y&&xo(Y),(Ae=J.props&&J.props.onVnodeBeforeUpdate)&&jt(Ae,le,J,pe),or(b,!0),an(b,"render");const De=ua(b);ln(b,"render");const Pt=b.subTree;b.subTree=De,an(b,"patch"),g(Pt,De,u(Pt.el),z(Pt),b,P,q),ln(b,"patch"),J.el=De.el,ke===null&&Um(b,De.el),ee&&ft(ee,P),(Ae=J.props&&J.props.onVnodeUpdated)&&ft(()=>jt(Ae,le,J,pe),P),$d(b),Xi()}else{let J;const{el:Y,props:ee}=v,{bm:le,m:pe,parent:ke}=b,Ae=Bo(v);if(or(b,!1),le&&xo(le),!Ae&&(J=ee&&ee.onVnodeBeforeMount)&&jt(J,ke,v),or(b,!0),Y&&xe){const De=()=>{an(b,"render"),b.subTree=ua(b),ln(b,"render"),an(b,"hydrate"),xe(Y,b.subTree,b,P,null),ln(b,"hydrate")};Ae?v.type.__asyncLoader().then(()=>!b.isUnmounted&&De()):De()}else{an(b,"render");const De=b.subTree=ua(b);ln(b,"render"),an(b,"patch"),g(null,De,C,B,b,P,q),ln(b,"patch"),v.el=De.el}if(pe&&ft(pe,P),!Ae&&(J=ee&&ee.onVnodeMounted)){const De=v;ft(()=>jt(J,ke,De),P)}(v.shapeFlag&256||ke&&Bo(ke.vnode)&&ke.vnode.shapeFlag&256)&&b.a&&ft(b.a,P),b.isMounted=!0,Am(b),v=C=B=null}},W=b.effect=new zl(V,()=>vi(F),b.scope),F=b.update=()=>W.run();F.id=b.uid,or(b,!0),W.onTrack=b.rtc?J=>xo(b.rtc,J):void 0,W.onTrigger=b.rtg?J=>xo(b.rtg,J):void 0,F.ownerInstance=b,F()},j=(b,v,C)=>{v.component=b;const B=b.vnode.props;b.vnode=v,b.next=null,my(b,v.props,B,C),Sy(b,v.children,C),Pr(),Jc(),Lr()},D=(b,v,C,B,P,q,G,V,W=!1)=>{const F=b&&b.children,J=b?b.shapeFlag:0,Y=v.children,{patchFlag:ee,shapeFlag:le}=v;if(ee>0){if(ee&128){ae(F,Y,C,B,P,q,G,V,W);return}else if(ee&256){ne(F,Y,C,B,P,q,G,V,W);return}}le&8?(J&16&&$(F,P,q),Y!==F&&f(C,Y)):J&16?le&16?ae(F,Y,C,B,P,q,G,V,W):$(F,P,q,!0):(J&8&&f(C,""),le&16&&k(Y,C,B,P,q,G,V,W))},ne=(b,v,C,B,P,q,G,V,W)=>{b=b||Kr,v=v||Kr;const F=b.length,J=v.length,Y=Math.min(F,J);let ee;for(ee=0;ee<Y;ee++){const le=v[ee]=W?Bn(v[ee]):Ut(v[ee]);g(b[ee],le,C,null,P,q,G,V,W)}F>J?$(b,P,q,!0,!1,Y):k(v,C,B,P,q,G,V,W,Y)},ae=(b,v,C,B,P,q,G,V,W)=>{let F=0;const J=v.length;let Y=b.length-1,ee=J-1;for(;F<=Y&&F<=ee;){const le=b[F],pe=v[F]=W?Bn(v[F]):Ut(v[F]);if(lr(le,pe))g(le,pe,C,null,P,q,G,V,W);else break;F++}for(;F<=Y&&F<=ee;){const le=b[Y],pe=v[ee]=W?Bn(v[ee]):Ut(v[ee]);if(lr(le,pe))g(le,pe,C,null,P,q,G,V,W);else break;Y--,ee--}if(F>Y){if(F<=ee){const le=ee+1,pe=le<J?v[le].el:B;for(;F<=ee;)g(null,v[F]=W?Bn(v[F]):Ut(v[F]),C,pe,P,q,G,V,W),F++}}else if(F>ee)for(;F<=Y;)we(b[F],P,q,!0),F++;else{const le=F,pe=F,ke=new Map;for(F=pe;F<=ee;F++){const it=v[F]=W?Bn(v[F]):Ut(v[F]);it.key!=null&&(ke.has(it.key)&&H("Duplicate keys found during update:",JSON.stringify(it.key),"Make sure keys are unique."),ke.set(it.key,F))}let Ae,De=0;const Pt=ee-pe+1;let Br=!1,Dc=0;const wo=new Array(Pt);for(F=0;F<Pt;F++)wo[F]=0;for(F=le;F<=Y;F++){const it=b[F];if(De>=Pt){we(it,P,q,!0);continue}let Dt;if(it.key!=null)Dt=ke.get(it.key);else for(Ae=pe;Ae<=ee;Ae++)if(wo[Ae-pe]===0&&lr(it,v[Ae])){Dt=Ae;break}Dt===void 0?we(it,P,q,!0):(wo[Dt-pe]=F+1,Dt>=Dc?Dc=Dt:Br=!0,g(it,v[Dt],C,null,P,q,G,V,W),De++)}const jc=Br?ky(wo):Kr;for(Ae=jc.length-1,F=Pt-1;F>=0;F--){const it=pe+F,Dt=v[it],Vc=it+1<J?v[it+1].el:B;wo[F]===0?g(null,Dt,C,Vc,P,q,G,V,W):Br&&(Ae<0||F!==jc[Ae]?re(Dt,C,Vc,2):Ae--)}}},re=(b,v,C,B,P=null)=>{const{el:q,type:G,transition:V,children:W,shapeFlag:F}=b;if(F&6){re(b.component.subTree,v,C,B);return}if(F&128){b.suspense.move(v,C,B);return}if(F&64){G.move(b,v,C,Z);return}if(G===xt){r(q,v,C);for(let Y=0;Y<W.length;Y++)re(W[Y],v,C,B);r(b.anchor,v,C);return}if(G===ns){A(b,v,C);return}if(B!==2&&F&1&&V)if(B===0)V.beforeEnter(q),r(q,v,C),ft(()=>V.enter(q),P);else{const{leave:Y,delayLeave:ee,afterLeave:le}=V,pe=()=>r(q,v,C),ke=()=>{Y(q,()=>{pe(),le&&le()})};ee?ee(q,pe,ke):ke()}else r(q,v,C)},we=(b,v,C,B=!1,P=!1)=>{const{type:q,props:G,ref:V,children:W,dynamicChildren:F,shapeFlag:J,patchFlag:Y,dirs:ee}=b;if(V!=null&&nl(V,null,C,b,!0),J&256){v.ctx.deactivate(b);return}const le=J&1&&ee,pe=!Bo(b);let ke;if(pe&&(ke=G&&G.onVnodeBeforeUnmount)&&jt(ke,v,b),J&6)Ue(b.component,C,B);else{if(J&128){b.suspense.unmount(C,B);return}le&&rr(b,null,v,"beforeUnmount"),J&64?b.type.remove(b,v,C,P,Z,B):F&&(q!==xt||Y>0&&Y&64)?$(F,v,C,!1,!0):(q===xt&&Y&384||!P&&J&16)&&$(W,v,C),B&&Le(b)}(pe&&(ke=G&&G.onVnodeUnmounted)||le)&&ft(()=>{ke&&jt(ke,v,b),le&&rr(b,null,v,"unmounted")},C)},Le=b=>{const{type:v,el:C,anchor:B,transition:P}=b;if(v===xt){b.patchFlag>0&&b.patchFlag&2048&&P&&!P.persisted?b.children.forEach(G=>{G.type===Ye?o(G.el):Le(G)}):ze(C,B);return}if(v===ns){_(b);return}const q=()=>{o(C),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(b.shapeFlag&1&&P&&!P.persisted){const{leave:G,delayLeave:V}=P,W=()=>G(C,q);V?V(b.el,q,W):W()}else q()},ze=(b,v)=>{let C;for(;b!==v;)C=d(b),o(b),b=C;o(v)},Ue=(b,v,C)=>{b.type.__hmrId&&xm(b);const{bum:B,scope:P,update:q,subTree:G,um:V}=b;B&&xo(B),P.stop(),q&&(q.active=!1,we(G,b,v,C)),V&&ft(V,v),ft(()=>{b.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve()),km(b)},$=(b,v,C,B=!1,P=!1,q=0)=>{for(let G=q;G<b.length;G++)we(b[G],v,C,B,P)},z=b=>b.shapeFlag&6?z(b.component.subTree):b.shapeFlag&128?b.suspense.next():d(b.anchor||b.el),K=(b,v,C)=>{b==null?v._vnode&&we(v._vnode,null,null,!0):g(v._vnode||null,b,v,null,null,null,C),Jc(),_d(),v._vnode=b},Z={p:g,um:we,m:re,r:Le,mt:I,mc:k,pc:D,pbc:N,n:z,o:e};let fe,xe;return t&&([fe,xe]=t(Z)),{render:K,hydrate:fe,createApp:hy(K,fe)}}function or({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function xs(e,t,n=!1){const r=e.children,o=t.children;if(X(r)&&X(o))for(let i=0;i<r.length;i++){const s=r[i];let a=o[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[i]=Bn(o[i]),a.el=s.el),n||xs(s,a)),a.type===Ei&&(a.el=s.el),a.type===Ye&&!a.el&&(a.el=s.el)}}function ky(e){const t=e.slice(),n=[0];let r,o,i,s,a;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(o=n[n.length-1],e[o]<c){t[r]=o,n.push(r);continue}for(i=0,s=n.length-1;i<s;)a=i+s>>1,e[n[a]]<c?i=a+1:s=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const Iy=e=>e.__isTeleport,zr=e=>e&&(e.disabled||e.disabled===""),hu=e=>typeof SVGElement<"u"&&e instanceof SVGElement,rl=(e,t)=>{const n=e&&e.to;if(Te(n))if(t){const r=t(n);return r||H(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),r}else return H("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!zr(e)&&H(`Invalid Teleport target: ${n}`),n},Oy={__isTeleport:!0,process(e,t,n,r,o,i,s,a,l,c){const{mc:f,pc:u,pbc:d,o:{insert:h,querySelector:p,createText:g,createComment:m}}=c,y=zr(t.props);let{shapeFlag:x,children:w,dynamicChildren:A}=t;if(zn&&(l=!1,A=null),e==null){const _=t.el=m("teleport start"),S=t.anchor=m("teleport end");h(_,n,r),h(S,n,r);const R=t.target=rl(t.props,p),E=t.targetAnchor=g("");R?(h(E,R),s=s||hu(R)):y||H("Invalid Teleport target on mount:",R,`(${typeof R})`);const k=(U,N)=>{x&16&&f(w,U,N,o,i,s,a,l)};y?k(n,S):R&&k(R,E)}else{t.el=e.el;const _=t.anchor=e.anchor,S=t.target=e.target,R=t.targetAnchor=e.targetAnchor,E=zr(e.props),k=E?n:S,U=E?_:R;if(s=s||hu(S),A?(d(e.dynamicChildren,A,k,o,i,s,a),xs(e,t,!0)):l||u(e,t,k,U,o,i,s,a,!1),y)E||Hi(t,n,_,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const N=t.target=rl(t.props,p);N?Hi(t,N,null,c,0):H("Invalid Teleport target on update:",S,`(${typeof S})`)}else E&&Hi(t,S,R,c,1)}Zd(t)},remove(e,t,n,r,{um:o,o:{remove:i}},s){const{shapeFlag:a,children:l,anchor:c,targetAnchor:f,target:u,props:d}=e;if(u&&i(f),(s||!zr(d))&&(i(c),a&16))for(let h=0;h<l.length;h++){const p=l[h];o(p,t,n,!0,!!p.dynamicChildren)}},move:Hi,hydrate:Ty};function Hi(e,t,n,{o:{insert:r},m:o},i=2){i===0&&r(e.targetAnchor,t,n);const{el:s,anchor:a,shapeFlag:l,children:c,props:f}=e,u=i===2;if(u&&r(s,t,n),(!u||zr(f))&&l&16)for(let d=0;d<c.length;d++)o(c[d],t,n,2);u&&r(a,t,n)}function Ty(e,t,n,r,o,i,{o:{nextSibling:s,parentNode:a,querySelector:l}},c){const f=t.target=rl(t.props,l);if(f){const u=f._lpa||f.firstChild;if(t.shapeFlag&16)if(zr(t.props))t.anchor=c(s(e),t,a(e),n,r,o,i),t.targetAnchor=u;else{t.anchor=s(e);let d=u;for(;d;)if(d=s(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,f._lpa=t.targetAnchor&&s(t.targetAnchor);break}c(u,t,f,n,r,o,i)}Zd(t)}return t.anchor&&s(t.anchor)}const Py=Oy;function Zd(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const xt=Symbol.for("v-fgt"),Ei=Symbol.for("v-txt"),Ye=Symbol.for("v-cmt"),ns=Symbol.for("v-stc"),No=[];let Mt=null;function Ce(e=!1){No.push(Mt=e?null:[])}function Ly(){No.pop(),Mt=No[No.length-1]||null}let Wo=1;function pu(e){Wo+=e}function Yd(e){return e.dynamicChildren=Wo>0?Mt||Kr:null,Ly(),Wo>0&&Mt&&Mt.push(e),e}function Qe(e,t,n,r,o,i){return Yd(Pe(e,t,n,r,o,i,!0))}function Ft(e,t,n,r,o){return Yd(Se(e,t,n,r,o,!0))}function ao(e){return e?e.__v_isVNode===!0:!1}function lr(e,t){return t.shapeFlag&6&&Dr.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const Ry=(...e)=>By(...e),js="__vInternal",Jd=({key:e})=>e??null,rs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Te(e)||Ne(e)||oe(e)?{i:je,r:e,k:t,f:!!n}:e:null);function Pe(e,t=null,n=null,r=0,o=null,i=e===xt?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Jd(t),ref:t&&rs(t),scopeId:Fs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:je};return a?(oc(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Te(n)?8:16),l.key!==l.key&&H("VNode created with invalid key (NaN). VNode type:",l.type),Wo>0&&!s&&Mt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Mt.push(l),l}const Se=Ry;function By(e,t=null,n=null,r=0,o=null,i=!1){if((!e||e===Hd)&&(e||H(`Invalid vnode type when creating vnode: ${e}.`),e=Ye),ao(e)){const a=rn(e,t,!0);return n&&oc(a,n),Wo>0&&!i&&Mt&&(a.shapeFlag&6?Mt[Mt.indexOf(e)]=a:Mt.push(a)),a.patchFlag|=-2,a}if(rh(e)&&(e=e.__vccOpts),t){t=Ny(t);let{class:a,style:l}=t;a&&!Te(a)&&(t.class=Gn(a)),Ee(l)&&(ps(l)&&!X(l)&&(l=Ie({},l)),t.style=Ps(l))}const s=Te(e)?1:Mm(e)?128:Iy(e)?64:Ee(e)?4:oe(e)?2:0;return s&4&&ps(e)&&(e=ce(e),H("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),Pe(e,t,n,r,o,s,i,!0)}function Ny(e){return e?ps(e)||js in e?Ie({},e):e:null}function rn(e,t,n=!1){const{props:r,ref:o,patchFlag:i,children:s}=e,a=t?ve(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Jd(a),ref:t&&t.ref?n&&o?X(o)?o.concat(rs(t)):[o,rs(t)]:rs(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i===-1&&X(s)?s.map(Xd):s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xt?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&rn(e.ssContent),ssFallback:e.ssFallback&&rn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Xd(e){const t=rn(e);return X(e.children)&&(t.children=e.children.map(Xd)),t}function _i(e=" ",t=0){return Se(Ei,null,e,t)}function Bt(e="",t=!1){return t?(Ce(),Ft(Ye,null,e)):Se(Ye,null,e)}function Ut(e){return e==null||typeof e=="boolean"?Se(Ye):X(e)?Se(xt,null,e.slice()):typeof e=="object"?Bn(e):Se(Ei,null,String(e))}function Bn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:rn(e)}function oc(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(X(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),oc(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(js in t)?t._ctx=je:o===3&&je&&(je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else oe(t)?(t={default:t,_ctx:je},n=32):(t=String(t),r&64?(n=16,t=[_i(t)]):n=8);e.children=t,e.shapeFlag|=n}function ve(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=Gn([t.class,r.class]));else if(o==="style")t.style=Ps([t.style,r.style]);else if(mi(o)){const i=t[o],s=r[o];s&&i!==s&&!(X(i)&&i.includes(s))&&(t[o]=i?[].concat(i,s):s)}else o!==""&&(t[o]=r[o])}return t}function jt(e,t,n,r=null){Ot(e,t,7,[n,r])}const Uy=Vd();let My=0;function Hy(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||Uy,i={uid:My++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new $g(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qd(r,o),emitsOptions:Id(r,o),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:r.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=ny(i),i.root=t?t.root:i,i.emit=Pm.bind(null,i),e.ce&&e.ce(i),i}let Fe=null;const Rr=()=>Fe||je;let ic,Nr,gu="__VUE_INSTANCE_SETTERS__";(Nr=cs()[gu])||(Nr=cs()[gu]=[]),Nr.push(e=>Fe=e),ic=e=>{Nr.length>1?Nr.forEach(t=>t(e)):Nr[0](e)};const lo=e=>{ic(e),e.scope.on()},Ar=()=>{Fe&&Fe.scope.off(),ic(null)},Fy=Xn("slot,component");function ol(e,t){const n=t.isNativeTag||zf;(Fy(e)||n(e))&&H("Do not use built-in or reserved HTML elements as component id: "+e)}function eh(e){return e.vnode.shapeFlag&4}let co=!1;function Dy(e,t=!1){co=t;const{props:n,children:r}=e.vnode,o=eh(e);py(e,n,o,t),_y(e,r);const i=o?jy(e,t):void 0;return co=!1,i}function jy(e,t){var n;const r=e.type;{if(r.name&&ol(r.name,e.appContext.config),r.components){const i=Object.keys(r.components);for(let s=0;s<i.length;s++)ol(i[s],e.appContext.config)}if(r.directives){const i=Object.keys(r.directives);for(let s=0;s<i.length;s++)Pd(i[s])}r.compilerOptions&&Vy()&&H('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=hd(new Proxy(e.ctx,Dd)),ry(e);const{setup:o}=r;if(o){const i=e.setupContext=o.length>1?nh(e):null;lo(e),Pr();const s=dn(o,e,0,[Oo(e.props),i]);if(Lr(),Ar(),jl(s)){if(s.then(Ar,Ar),t)return s.then(a=>{mu(e,a,t)}).catch(a=>{bi(a,e,0)});if(e.asyncDep=s,!e.suspense){const a=(n=r.name)!=null?n:"Anonymous";H(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else mu(e,s,t)}else th(e,t)}function mu(e,t,n){oe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ee(t)?(ao(t)&&H("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=bd(t),oy(e)):t!==void 0&&H(`setup() should return an object. Received: ${t===null?"null":typeof t}`),th(e,n)}let il;const Vy=()=>!il;function th(e,t,n){const r=e.type;if(!e.render){if(!t&&il&&!r.render){const o=r.template||nc(e).template;if(o){an(e,"compile");const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Ie(Ie({isCustomElement:i,delimiters:a},s),l);r.render=il(o,c),ln(e,"compile")}}e.render=r.render||pt}lo(e),Pr(),ay(e),Lr(),Ar(),!r.render&&e.render===pt&&!t&&(r.template?H('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):H("Component is missing template or render function."))}function Ky(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ms(),ot(e,"get","$attrs"),t[n]},set(){return H("setupContext.attrs is readonly."),!1},deleteProperty(){return H("setupContext.attrs is readonly."),!1}}))}function qy(e){return e.slotsProxy||(e.slotsProxy=new Proxy(e.slots,{get(t,n){return ot(e,"get","$slots"),t[n]}}))}function nh(e){return Object.freeze({get attrs(){return Ky(e)},get slots(){return qy(e)},get emit(){return(n,...r)=>e.emit(n,...r)},expose:n=>{if(e.exposed&&H("expose() should be called only once per setup()."),n!=null){let r=typeof n;r==="object"&&(X(n)?r="array":Ne(n)&&(r="ref")),r!=="object"&&H(`expose() should be passed a plain object, received ${r}.`)}e.exposed=n||{}}})}function Vs(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(bd(hd(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Cr)return Cr[n](e)},has(t,n){return n in t||n in Cr}}))}const zy=/(?:^|[-_])(\w)/g,Wy=e=>e.replace(zy,t=>t.toUpperCase()).replace(/[-_]/g,"");function sc(e,t=!0){return oe(e)?e.displayName||e.name:e.name||t&&e.__name}function Ks(e,t,n=!1){let r=sc(t);if(!r&&t.__file){const o=t.__file.match(/([^/\\]+)\.\w+$/);o&&(r=o[1])}if(!r&&e&&e.parent){const o=i=>{for(const s in i)if(i[s]===t)return s};r=o(e.components||e.parent.type.components)||o(e.appContext.components)}return r?Wy(r):n?"App":"Anonymous"}function rh(e){return oe(e)&&"__vccOpts"in e}const ut=(e,t)=>cm(e,t,co);function ac(e,t,n){const r=arguments.length;return r===2?Ee(t)&&!X(t)?ao(t)?Se(e,null,[t]):Se(e,t):Se(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ao(n)&&(n=[n]),Se(e,t,n))}const Qy=Symbol.for("v-scx"),Gy=()=>{{const e=en(Qy);return e||H("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function pa(e){return!!(e&&e.__v_isShallow)}function Zy(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},r={style:"color:#9d288c"},o={header(u){return Ee(u)?u.__isVue?["div",e,"VueInstance"]:Ne(u)?["div",{},["span",e,f(u)],"<",a(u.value),">"]:_r(u)?["div",{},["span",e,pa(u)?"ShallowReactive":"Reactive"],"<",a(u),`>${Yn(u)?" (readonly)":""}`]:Yn(u)?["div",{},["span",e,pa(u)?"ShallowReadonly":"Readonly"],"<",a(u),">"]:null:null},hasBody(u){return u&&u.__isVue},body(u){if(u&&u.__isVue)return["div",{},...i(u.$)]}};function i(u){const d=[];u.type.props&&u.props&&d.push(s("props",ce(u.props))),u.setupState!==$e&&d.push(s("setup",u.setupState)),u.data!==$e&&d.push(s("data",ce(u.data)));const h=l(u,"computed");h&&d.push(s("computed",h));const p=l(u,"inject");return p&&d.push(s("injected",p)),d.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:u}]]),d}function s(u,d){return d=Ie({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},u],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(h=>["div",{},["span",r,h+": "],a(d[h],!1)])]]:["span",{}]}function a(u,d=!0){return typeof u=="number"?["span",t,u]:typeof u=="string"?["span",n,JSON.stringify(u)]:typeof u=="boolean"?["span",r,u]:Ee(u)?["object",{object:d?ce(u):u}]:["span",n,String(u)]}function l(u,d){const h=u.type;if(oe(h))return;const p={};for(const g in u.ctx)c(h,g,d)&&(p[g]=u.ctx[g]);return p}function c(u,d,h){const p=u[h];if(X(p)&&p.includes(d)||Ee(p)&&d in p||u.extends&&c(u.extends,d,h)||u.mixins&&u.mixins.some(g=>c(g,d,h)))return!0}function f(u){return pa(u)?"ShallowRef":u.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(o):window.devtoolsFormatters=[o]}const yu="3.3.4",Yy="http://www.w3.org/2000/svg",cr=typeof document<"u"?document:null,bu=cr&&cr.createElement("template"),Jy={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?cr.createElementNS(Yy,e):cr.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>cr.createTextNode(e),createComment:e=>cr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>cr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,i){const s=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{bu.innerHTML=r?`<svg>${e}</svg>`:e;const a=bu.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Xy(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function e0(e,t,n){const r=e.style,o=Te(n);if(n&&!o){if(t&&!Te(t))for(const i in t)n[i]==null&&sl(r,i,"");for(const i in n)sl(r,i,n[i])}else{const i=r.display;o?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const t0=/[^\\];\s*$/,vu=/\s*!important$/;function sl(e,t,n){if(X(n))n.forEach(r=>sl(e,t,r));else if(n==null&&(n=""),t0.test(n)&&H(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),t.startsWith("--"))e.setProperty(t,n);else{const r=n0(e,t);vu.test(n)?e.setProperty(Qn(r),n.replace(vu,""),"important"):e[r]=n}}const wu=["Webkit","Moz","ms"],ga={};function n0(e,t){const n=ga[t];if(n)return n;let r=tn(t);if(r!=="filter"&&r in e)return ga[t]=r;r=Ir(r);for(let o=0;o<wu.length;o++){const i=wu[o]+r;if(i in e)return ga[t]=i}return t}const xu="http://www.w3.org/1999/xlink";function r0(e,t,n,r,o){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(xu,t.slice(6,t.length)):e.setAttributeNS(xu,t,n);else{const i=Ag(t);n==null||i&&!Zf(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function o0(e,t,n,r,o,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,o,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const c=a==="OPTION"?e.getAttribute("value"):e.value,f=n??"";c!==f&&(e.value=f),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Zf(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch(c){l||H(`Failed setting prop "${t}" on <${a.toLowerCase()}>: value ${n} is invalid.`,c)}l&&e.removeAttribute(t)}function i0(e,t,n,r){e.addEventListener(t,n,r)}function s0(e,t,n,r){e.removeEventListener(t,n,r)}function a0(e,t,n,r,o=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[a,l]=l0(t);if(r){const c=i[t]=f0(r,o);i0(e,a,c,l)}else s&&(s0(e,a,s,l),i[t]=void 0)}}const Eu=/(?:Once|Passive|Capture)$/;function l0(e){let t;if(Eu.test(e)){t={};let r;for(;r=e.match(Eu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Qn(e.slice(2)),t]}let ma=0;const c0=Promise.resolve(),u0=()=>ma||(c0.then(()=>ma=0),ma=Date.now());function f0(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ot(d0(r,n.value),t,5,[r])};return n.value=e,n.attached=u0(),n}function d0(e,t){if(X(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const _u=/^on[a-z]/,h0=(e,t,n,r,o=!1,i,s,a,l)=>{t==="class"?Xy(e,r,o):t==="style"?e0(e,n,r):mi(t)?as(t)||a0(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):p0(e,t,r,o))?o0(e,t,r,i,s,a,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),r0(e,t,r,o))};function p0(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&_u.test(t)&&oe(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||_u.test(t)&&Te(n)?!1:t in e}const vn="transition",_o="animation",lc=(e,{slots:t})=>ac(Km,g0(e),t);lc.displayName="Transition";const oh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};lc.props=Ie({},Ld,oh);const ir=(e,t=[])=>{X(e)?e.forEach(n=>n(...t)):e&&e(...t)},Su=e=>e?X(e)?e.some(t=>t.length>1):e.length>1:!1;function g0(e){const t={};for(const O in e)O in oh||(t[O]=e[O]);if(e.css===!1)return t;const{name:n="v",type:r,duration:o,enterFromClass:i=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=s,appearToClass:f=a,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,p=m0(o),g=p&&p[0],m=p&&p[1],{onBeforeEnter:y,onEnter:x,onEnterCancelled:w,onLeave:A,onLeaveCancelled:_,onBeforeAppear:S=y,onAppear:R=x,onAppearCancelled:E=w}=t,k=(O,Q,te)=>{sr(O,Q?f:a),sr(O,Q?c:s),te&&te()},U=(O,Q)=>{O._isLeaving=!1,sr(O,u),sr(O,h),sr(O,d),Q&&Q()},N=O=>(Q,te)=>{const I=O?R:x,T=()=>k(Q,O,te);ir(I,[Q,T]),Cu(()=>{sr(Q,O?l:i),wn(Q,O?f:a),Su(I)||Au(Q,r,g,T)})};return Ie(t,{onBeforeEnter(O){ir(y,[O]),wn(O,i),wn(O,s)},onBeforeAppear(O){ir(S,[O]),wn(O,l),wn(O,c)},onEnter:N(!1),onAppear:N(!0),onLeave(O,Q){O._isLeaving=!0;const te=()=>U(O,Q);wn(O,u),v0(),wn(O,d),Cu(()=>{O._isLeaving&&(sr(O,u),wn(O,h),Su(A)||Au(O,r,m,te))}),ir(A,[O,te])},onEnterCancelled(O){k(O,!1),ir(w,[O])},onAppearCancelled(O){k(O,!0),ir(E,[O])},onLeaveCancelled(O){U(O),ir(_,[O])}})}function m0(e){if(e==null)return null;if(Ee(e))return[ya(e.enter),ya(e.leave)];{const t=ya(e);return[t,t]}}function ya(e){const t=mg(e);return pm(t,"<transition> explicit duration"),t}function wn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function sr(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Cu(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let y0=0;function Au(e,t,n,r){const o=e._endId=++y0,i=()=>{o===e._endId&&r()};if(n)return setTimeout(i,n);const{type:s,timeout:a,propCount:l}=b0(e,t);if(!s)return r();const c=s+"end";let f=0;const u=()=>{e.removeEventListener(c,d),i()},d=h=>{h.target===e&&++f>=l&&u()};setTimeout(()=>{f<l&&u()},a+1),e.addEventListener(c,d)}function b0(e,t){const n=window.getComputedStyle(e),r=p=>(n[p]||"").split(", "),o=r(`${vn}Delay`),i=r(`${vn}Duration`),s=$u(o,i),a=r(`${_o}Delay`),l=r(`${_o}Duration`),c=$u(a,l);let f=null,u=0,d=0;t===vn?s>0&&(f=vn,u=s,d=i.length):t===_o?c>0&&(f=_o,u=c,d=l.length):(u=Math.max(s,c),f=u>0?s>c?vn:_o:null,d=f?f===vn?i.length:l.length:0);const h=f===vn&&/\b(transform|all)(,|$)/.test(r(`${vn}Property`).toString());return{type:f,timeout:u,propCount:d,hasTransform:h}}function $u(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>ku(n)+ku(e[r])))}function ku(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function v0(){return document.body.offsetHeight}const w0=["ctrl","shift","alt","meta"],x0={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>w0.some(n=>e[`${n}Key`]&&!t.includes(n))},e8=(e,t)=>(n,...r)=>{for(let o=0;o<t.length;o++){const i=x0[t[o]];if(i&&i(n,t))return}return e(n,...r)},t8={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):So(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),So(e,!0),r.enter(e)):r.leave(e,()=>{So(e,!1)}):So(e,t))},beforeUnmount(e,{value:t}){So(e,t)}};function So(e,t){e.style.display=t?e._vod:"none"}const E0=Ie({patchProp:h0},Jy);let Iu;function _0(){return Iu||(Iu=Ay(E0))}const S0=(...e)=>{const t=_0().createApp(...e);C0(t),A0(t);const{mount:n}=t;return t.mount=r=>{const o=$0(r);if(!o)return;const i=t._component;!oe(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.innerHTML="";const s=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t};function C0(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>_g(t)||Sg(t),writable:!1})}function A0(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){H("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,r='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(e.config,"compilerOptions",{get(){return H(r),n},set(){H(r)}})}}function $0(e){if(Te(e)){const t=document.querySelector(e);return t||H(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&H('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function k0(){Zy()}k0();var qs=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Si=typeof window>"u"||"Deno"in window;function Lt(){}function I0(e,t){return typeof e=="function"?e(t):e}function O0(e){return typeof e=="number"&&e>=0&&e!==1/0}function T0(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Ou(e,t){const{type:n="all",exact:r,fetchStatus:o,predicate:i,queryKey:s,stale:a}=e;if(s){if(r){if(t.queryHash!==cc(s,t.options))return!1}else if(!Go(t.queryKey,s))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&t.isStale()!==a||typeof o<"u"&&o!==t.state.fetchStatus||i&&!i(t))}function Tu(e,t){const{exact:n,status:r,predicate:o,mutationKey:i}=e;if(i){if(!t.options.mutationKey)return!1;if(n){if(Qo(t.options.mutationKey)!==Qo(i))return!1}else if(!Go(t.options.mutationKey,i))return!1}return!(r&&t.state.status!==r||o&&!o(t))}function cc(e,t){return((t==null?void 0:t.queryKeyHashFn)||Qo)(e)}function Qo(e){return JSON.stringify(e,(t,n)=>al(n)?Object.keys(n).sort().reduce((r,o)=>(r[o]=n[o],r),{}):n)}function Go(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!Go(e[n],t[n])):!1}function ih(e,t){if(e===t)return e;const n=Pu(e)&&Pu(t);if(n||al(e)&&al(t)){const r=n?e.length:Object.keys(e).length,o=n?t:Object.keys(t),i=o.length,s=n?[]:{};let a=0;for(let l=0;l<i;l++){const c=n?l:o[l];s[c]=ih(e[c],t[c]),s[c]===e[c]&&a++}return r===i&&a===r?e:s}return t}function n8(e,t){if(e&&!t||t&&!e)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function Pu(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function al(e){if(!Lu(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!Lu(n)||!n.hasOwnProperty("isPrototypeOf"))}function Lu(e){return Object.prototype.toString.call(e)==="[object Object]"}function sh(e){return new Promise(t=>{setTimeout(t,e)})}function Ru(e){sh(0).then(e)}function P0(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?ih(e,t):t}function L0(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function R0(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var yr,Hn,Gr,Mf,B0=(Mf=class extends qs{constructor(){super();ge(this,yr,void 0);ge(this,Hn,void 0);ge(this,Gr,void 0);ie(this,Gr,t=>{if(!Si&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){L(this,Hn)||this.setEventListener(L(this,Gr))}onUnsubscribe(){var t;this.hasListeners()||((t=L(this,Hn))==null||t.call(this),ie(this,Hn,void 0))}setEventListener(t){var n;ie(this,Gr,t),(n=L(this,Hn))==null||n.call(this),ie(this,Hn,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){L(this,yr)!==t&&(ie(this,yr,t),this.onFocus())}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){var t;return typeof L(this,yr)=="boolean"?L(this,yr):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},yr=new WeakMap,Hn=new WeakMap,Gr=new WeakMap,Mf),ll=new B0,Zr,Fn,Yr,Hf,N0=(Hf=class extends qs{constructor(){super();ge(this,Zr,!0);ge(this,Fn,void 0);ge(this,Yr,void 0);ie(this,Yr,t=>{if(!Si&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){L(this,Fn)||this.setEventListener(L(this,Yr))}onUnsubscribe(){var t;this.hasListeners()||((t=L(this,Fn))==null||t.call(this),ie(this,Fn,void 0))}setEventListener(t){var n;ie(this,Yr,t),(n=L(this,Fn))==null||n.call(this),ie(this,Fn,t(this.setOnline.bind(this)))}setOnline(t){L(this,Zr)!==t&&(ie(this,Zr,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return L(this,Zr)}},Zr=new WeakMap,Fn=new WeakMap,Yr=new WeakMap,Hf),uo=new N0;function U0(e){return Math.min(1e3*2**e,3e4)}function uc(e){return(e??"online")==="online"?uo.isOnline():!0}var ah=class{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function ba(e){return e instanceof ah}function lh(e){let t=!1,n=0,r=!1,o,i,s;const a=new Promise((m,y)=>{i=m,s=y}),l=m=>{var y;r||(h(new ah(m)),(y=e.abort)==null||y.call(e))},c=()=>{t=!0},f=()=>{t=!1},u=()=>!ll.isFocused()||e.networkMode!=="always"&&!uo.isOnline(),d=m=>{var y;r||(r=!0,(y=e.onSuccess)==null||y.call(e,m),o==null||o(),i(m))},h=m=>{var y;r||(r=!0,(y=e.onError)==null||y.call(e,m),o==null||o(),s(m))},p=()=>new Promise(m=>{var y;o=x=>{const w=r||!u();return w&&m(x),w},(y=e.onPause)==null||y.call(e)}).then(()=>{var m;o=void 0,r||(m=e.onContinue)==null||m.call(e)}),g=()=>{if(r)return;let m;try{m=e.fn()}catch(y){m=Promise.reject(y)}Promise.resolve(m).then(d).catch(y=>{var S;if(r)return;const x=e.retry??(Si?0:3),w=e.retryDelay??U0,A=typeof w=="function"?w(n,y):w,_=x===!0||typeof x=="number"&&n<x||typeof x=="function"&&x(n,y);if(t||!_){h(y);return}n++,(S=e.onFail)==null||S.call(e,n,y),sh(A).then(()=>{if(u())return p()}).then(()=>{t?h(y):g()})})};return uc(e.networkMode)?g():p().then(g),{promise:a,cancel:l,continue:()=>(o==null?void 0:o())?a:Promise.resolve(),cancelRetry:c,continueRetry:f}}function M0(){let e=[],t=0,n=f=>{f()},r=f=>{f()};const o=f=>{let u;t++;try{u=f()}finally{t--,t||a()}return u},i=f=>{t?e.push(f):Ru(()=>{n(f)})},s=f=>(...u)=>{i(()=>{f(...u)})},a=()=>{const f=e;e=[],f.length&&Ru(()=>{r(()=>{f.forEach(u=>{n(u)})})})};return{batch:o,batchCalls:s,schedule:i,setNotifyFunction:f=>{n=f},setBatchNotifyFunction:f=>{r=f}}}var ct=M0(),br,Ff,ch=(Ff=class{constructor(){ge(this,br,void 0)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),O0(this.gcTime)&&ie(this,br,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Si?1/0:5*60*1e3))}clearGcTimeout(){L(this,br)&&(clearTimeout(L(this,br)),ie(this,br,void 0))}},br=new WeakMap,Ff),Jr,Xr,Ct,Dn,At,We,hi,vr,eo,os,Rt,cn,Df,H0=(Df=class extends ch{constructor(t){super();ge(this,eo);ge(this,Rt);ge(this,Jr,void 0);ge(this,Xr,void 0);ge(this,Ct,void 0);ge(this,Dn,void 0);ge(this,At,void 0);ge(this,We,void 0);ge(this,hi,void 0);ge(this,vr,void 0);ie(this,vr,!1),ie(this,hi,t.defaultOptions),Ke(this,eo,os).call(this,t.options),ie(this,We,[]),ie(this,Ct,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,ie(this,Jr,t.state||F0(this.options)),this.state=L(this,Jr),this.scheduleGc()}get meta(){return this.options.meta}optionalRemove(){!L(this,We).length&&this.state.fetchStatus==="idle"&&L(this,Ct).remove(this)}setData(t,n){const r=P0(this.state.data,t,this.options);return Ke(this,Rt,cn).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Ke(this,Rt,cn).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r;const n=L(this,Dn);return(r=L(this,At))==null||r.cancel(t),n?n.then(Lt).catch(Lt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(L(this,Jr))}isActive(){return L(this,We).some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||L(this,We).some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!T0(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=L(this,We).find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=L(this,At))==null||n.continue()}onOnline(){var n;const t=L(this,We).find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=L(this,At))==null||n.continue()}addObserver(t){L(this,We).includes(t)||(L(this,We).push(t),this.clearGcTimeout(),L(this,Ct).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){L(this,We).includes(t)&&(ie(this,We,L(this,We).filter(n=>n!==t)),L(this,We).length||(L(this,At)&&(L(this,vr)?L(this,At).cancel({revert:!0}):L(this,At).cancelRetry()),this.scheduleGc()),L(this,Ct).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return L(this,We).length}invalidate(){this.state.isInvalidated||Ke(this,Rt,cn).call(this,{type:"invalidate"})}fetch(t,n){var c,f,u,d;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(L(this,Dn))return(c=L(this,At))==null||c.continueRetry(),L(this,Dn)}if(t&&Ke(this,eo,os).call(this,t),!this.options.queryFn){const h=L(this,We).find(p=>p.options.queryFn);h&&Ke(this,eo,os).call(this,h.options)}Array.isArray(this.options.queryKey)||console.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']");const r=new AbortController,o={queryKey:this.queryKey,meta:this.meta},i=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(ie(this,vr,!0),r.signal)})};i(o);const s=()=>this.options.queryFn?(ie(this,vr,!1),this.options.persister?this.options.persister(this.options.queryFn,o,this):this.options.queryFn(o)):Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`)),a={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:s};i(a),(f=this.options.behavior)==null||f.onFetch(a,this),ie(this,Xr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=a.fetchOptions)==null?void 0:u.meta))&&Ke(this,Rt,cn).call(this,{type:"fetch",meta:(d=a.fetchOptions)==null?void 0:d.meta});const l=h=>{var p,g,m,y;ba(h)&&h.silent||Ke(this,Rt,cn).call(this,{type:"error",error:h}),ba(h)||((g=(p=L(this,Ct).config).onError)==null||g.call(p,h,this),(y=(m=L(this,Ct).config).onSettled)==null||y.call(m,this.state.data,h,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return ie(this,At,lh({fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:h=>{var p,g,m,y;if(typeof h>"u"){console.error(`Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`),l(new Error(`${this.queryHash} data is undefined`));return}this.setData(h),(g=(p=L(this,Ct).config).onSuccess)==null||g.call(p,h,this),(y=(m=L(this,Ct).config).onSettled)==null||y.call(m,h,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:l,onFail:(h,p)=>{Ke(this,Rt,cn).call(this,{type:"failed",failureCount:h,error:p})},onPause:()=>{Ke(this,Rt,cn).call(this,{type:"pause"})},onContinue:()=>{Ke(this,Rt,cn).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode})),ie(this,Dn,L(this,At).promise),L(this,Dn)}},Jr=new WeakMap,Xr=new WeakMap,Ct=new WeakMap,Dn=new WeakMap,At=new WeakMap,We=new WeakMap,hi=new WeakMap,vr=new WeakMap,eo=new WeakSet,os=function(t){this.options={...L(this,hi),...t},this.updateGcTime(this.options.gcTime)},Rt=new WeakSet,cn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:t.meta??null,fetchStatus:uc(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"pending"}};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=t.error;return ba(o)&&o.revert&&L(this,Xr)?{...L(this,Xr),fetchStatus:"idle"}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),ct.batch(()=>{L(this,We).forEach(r=>{r.onQueryUpdate()}),L(this,Ct).notify({query:this,type:"updated",action:t})})},Df);function F0(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=typeof t<"u",r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Wt,jf,uh=(jf=class extends qs{constructor(n={}){super();ge(this,Wt,void 0);this.config=n,ie(this,Wt,new Map)}build(n,r,o){const i=r.queryKey,s=r.queryHash??cc(i,r);let a=this.get(s);return a||(a=new H0({cache:this,queryKey:i,queryHash:s,options:n.defaultQueryOptions(r),state:o,defaultOptions:n.getQueryDefaults(i)}),this.add(a)),a}add(n){L(this,Wt).has(n.queryHash)||(L(this,Wt).set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const r=L(this,Wt).get(n.queryHash);r&&(n.destroy(),r===n&&L(this,Wt).delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){ct.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return L(this,Wt).get(n)}getAll(){return[...L(this,Wt).values()]}find(n){const r={exact:!0,...n};return this.getAll().find(o=>Ou(r,o))}findAll(n={}){const r=this.getAll();return Object.keys(n).length>0?r.filter(o=>Ou(n,o)):r}notify(n){ct.batch(()=>{this.listeners.forEach(r=>{r(n)})})}onFocus(){ct.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){ct.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},Wt=new WeakMap,jf),Qt,pi,bt,to,Gt,Ln,Vf,D0=(Vf=class extends ch{constructor(t){super();ge(this,Gt);ge(this,Qt,void 0);ge(this,pi,void 0);ge(this,bt,void 0);ge(this,to,void 0);this.mutationId=t.mutationId,ie(this,pi,t.defaultOptions),ie(this,bt,t.mutationCache),ie(this,Qt,[]),this.state=t.state||j0(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...L(this,pi),...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){L(this,Qt).includes(t)||(L(this,Qt).push(t),this.clearGcTimeout(),L(this,bt).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){ie(this,Qt,L(this,Qt).filter(n=>n!==t)),this.scheduleGc(),L(this,bt).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){L(this,Qt).length||(this.state.status==="pending"?this.scheduleGc():L(this,bt).remove(this))}continue(){var t;return((t=L(this,to))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,i,s,a,l,c,f,u,d,h,p,g,m,y,x,w,A,_,S,R;const n=()=>(ie(this,to,lh({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(E,k)=>{Ke(this,Gt,Ln).call(this,{type:"failed",failureCount:E,error:k})},onPause:()=>{Ke(this,Gt,Ln).call(this,{type:"pause"})},onContinue:()=>{Ke(this,Gt,Ln).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode})),L(this,to).promise),r=this.state.status==="pending";try{if(!r){Ke(this,Gt,Ln).call(this,{type:"pending",variables:t}),await((i=(o=L(this,bt).config).onMutate)==null?void 0:i.call(o,t,this));const k=await((a=(s=this.options).onMutate)==null?void 0:a.call(s,t));k!==this.state.context&&Ke(this,Gt,Ln).call(this,{type:"pending",context:k,variables:t})}const E=await n();return await((c=(l=L(this,bt).config).onSuccess)==null?void 0:c.call(l,E,t,this.state.context,this)),await((u=(f=this.options).onSuccess)==null?void 0:u.call(f,E,t,this.state.context)),await((h=(d=L(this,bt).config).onSettled)==null?void 0:h.call(d,E,null,this.state.variables,this.state.context,this)),await((g=(p=this.options).onSettled)==null?void 0:g.call(p,E,null,t,this.state.context)),Ke(this,Gt,Ln).call(this,{type:"success",data:E}),E}catch(E){try{throw await((y=(m=L(this,bt).config).onError)==null?void 0:y.call(m,E,t,this.state.context,this)),await((w=(x=this.options).onError)==null?void 0:w.call(x,E,t,this.state.context)),await((_=(A=L(this,bt).config).onSettled)==null?void 0:_.call(A,void 0,E,this.state.variables,this.state.context,this)),await((R=(S=this.options).onSettled)==null?void 0:R.call(S,void 0,E,t,this.state.context)),E}finally{Ke(this,Gt,Ln).call(this,{type:"error",error:E})}}}},Qt=new WeakMap,pi=new WeakMap,bt=new WeakMap,to=new WeakMap,Gt=new WeakSet,Ln=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!uc(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),ct.batch(()=>{L(this,Qt).forEach(r=>{r.onMutationUpdate(t)}),L(this,bt).notify({mutation:this,type:"updated",action:t})})},Vf);function j0(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var $t,gi,wr,Kf,fh=(Kf=class extends qs{constructor(n={}){super();ge(this,$t,void 0);ge(this,gi,void 0);ge(this,wr,void 0);this.config=n,ie(this,$t,[]),ie(this,gi,0)}build(n,r,o){const i=new D0({mutationCache:this,mutationId:++Pi(this,gi)._,options:n.defaultMutationOptions(r),state:o});return this.add(i),i}add(n){L(this,$t).push(n),this.notify({type:"added",mutation:n})}remove(n){ie(this,$t,L(this,$t).filter(r=>r!==n)),this.notify({type:"removed",mutation:n})}clear(){ct.batch(()=>{L(this,$t).forEach(n=>{this.remove(n)})})}getAll(){return L(this,$t)}find(n){const r={exact:!0,...n};return L(this,$t).find(o=>Tu(r,o))}findAll(n={}){return L(this,$t).filter(r=>Tu(n,r))}notify(n){ct.batch(()=>{this.listeners.forEach(r=>{r(n)})})}resumePausedMutations(){return ie(this,wr,(L(this,wr)??Promise.resolve()).then(()=>{const n=L(this,$t).filter(r=>r.state.isPaused);return ct.batch(()=>n.reduce((r,o)=>r.then(()=>o.continue().catch(Lt)),Promise.resolve()))}).then(()=>{ie(this,wr,void 0)})),L(this,wr)}},$t=new WeakMap,gi=new WeakMap,wr=new WeakMap,Kf);function V0(e){return{onFetch:(t,n)=>{const r=async()=>{var p,g,m,y,x;const o=t.options,i=(m=(g=(p=t.fetchOptions)==null?void 0:p.meta)==null?void 0:g.fetchMore)==null?void 0:m.direction,s=((y=t.state.data)==null?void 0:y.pages)||[],a=((x=t.state.data)==null?void 0:x.pageParams)||[],l={pages:[],pageParams:[]};let c=!1;const f=w=>{Object.defineProperty(w,"signal",{enumerable:!0,get:()=>(t.signal.aborted?c=!0:t.signal.addEventListener("abort",()=>{c=!0}),t.signal)})},u=t.options.queryFn||(()=>Promise.reject(new Error(`Missing queryFn: '${t.options.queryHash}'`))),d=async(w,A,_)=>{if(c)return Promise.reject();if(A==null&&w.pages.length)return Promise.resolve(w);const S={queryKey:t.queryKey,pageParam:A,direction:_?"backward":"forward",meta:t.options.meta};f(S);const R=await u(S),{maxPages:E}=t.options,k=_?R0:L0;return{pages:k(w.pages,R,E),pageParams:k(w.pageParams,A,E)}};let h;if(i&&s.length){const w=i==="backward",A=w?K0:Bu,_={pages:s,pageParams:a},S=A(o,_);h=await d(_,S,w)}else{h=await d(l,a[0]??o.initialPageParam);const w=e??s.length;for(let A=1;A<w;A++){const _=Bu(o,h);h=await d(h,_)}}return h};t.options.persister?t.fetchFn=()=>{var o,i;return(i=(o=t.options).persister)==null?void 0:i.call(o,r,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=r}}}function Bu(e,{pages:t,pageParams:n}){const r=t.length-1;return e.getNextPageParam(t[r],t,n[r],n)}function K0(e,{pages:t,pageParams:n}){var r;return(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n)}var qe,jn,Vn,no,ro,Kn,oo,io,qf,q0=(qf=class{constructor(t={}){ge(this,qe,void 0);ge(this,jn,void 0);ge(this,Vn,void 0);ge(this,no,void 0);ge(this,ro,void 0);ge(this,Kn,void 0);ge(this,oo,void 0);ge(this,io,void 0);ie(this,qe,t.queryCache||new uh),ie(this,jn,t.mutationCache||new fh),ie(this,Vn,t.defaultOptions||{}),ie(this,no,new Map),ie(this,ro,new Map),ie(this,Kn,0)}mount(){Pi(this,Kn)._++,L(this,Kn)===1&&(ie(this,oo,ll.subscribe(()=>{ll.isFocused()&&(this.resumePausedMutations(),L(this,qe).onFocus())})),ie(this,io,uo.subscribe(()=>{uo.isOnline()&&(this.resumePausedMutations(),L(this,qe).onOnline())})))}unmount(){var t,n;Pi(this,Kn)._--,L(this,Kn)===0&&((t=L(this,oo))==null||t.call(this),ie(this,oo,void 0),(n=L(this,io))==null||n.call(this),ie(this,io,void 0))}isFetching(t){return L(this,qe).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return L(this,jn).findAll({...t,status:"pending"}).length}getQueryData(t){var n;return(n=L(this,qe).find({queryKey:t}))==null?void 0:n.state.data}ensureQueryData(t){const n=this.getQueryData(t.queryKey);return n?Promise.resolve(n):this.fetchQuery(t)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:n,state:r})=>{const o=r.data;return[n,o]})}setQueryData(t,n,r){const o=L(this,qe).find({queryKey:t}),i=o==null?void 0:o.state.data,s=I0(n,i);if(typeof s>"u")return;const a=this.defaultQueryOptions({queryKey:t});return L(this,qe).build(this,a).setData(s,{...r,manual:!0})}setQueriesData(t,n,r){return ct.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:o})=>[o,this.setQueryData(o,n,r)]))}getQueryState(t){var n;return(n=L(this,qe).find({queryKey:t}))==null?void 0:n.state}removeQueries(t){const n=L(this,qe);ct.batch(()=>{n.findAll(t).forEach(r=>{n.remove(r)})})}resetQueries(t,n){const r=L(this,qe),o={type:"active",...t};return ct.batch(()=>(r.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries(o,n)))}cancelQueries(t={},n={}){const r={revert:!0,...n},o=ct.batch(()=>L(this,qe).findAll(t).map(i=>i.cancel(r)));return Promise.all(o).then(Lt).catch(Lt)}invalidateQueries(t={},n={}){return ct.batch(()=>{if(L(this,qe).findAll(t).forEach(o=>{o.invalidate()}),t.refetchType==="none")return Promise.resolve();const r={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(r,n)})}refetchQueries(t={},n){const r={...n,cancelRefetch:(n==null?void 0:n.cancelRefetch)??!0},o=ct.batch(()=>L(this,qe).findAll(t).filter(i=>!i.isDisabled()).map(i=>{let s=i.fetch(void 0,r);return r.throwOnError||(s=s.catch(Lt)),i.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(o).then(Lt)}fetchQuery(t){const n=this.defaultQueryOptions(t);typeof n.retry>"u"&&(n.retry=!1);const r=L(this,qe).build(this,n);return r.isStaleByTime(n.staleTime)?r.fetch(n):Promise.resolve(r.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(Lt).catch(Lt)}fetchInfiniteQuery(t){return t.behavior=V0(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(Lt).catch(Lt)}resumePausedMutations(){return L(this,jn).resumePausedMutations()}getQueryCache(){return L(this,qe)}getMutationCache(){return L(this,jn)}getDefaultOptions(){return L(this,Vn)}setDefaultOptions(t){ie(this,Vn,t)}setQueryDefaults(t,n){L(this,no).set(Qo(t),{queryKey:t,defaultOptions:n})}getQueryDefaults(t){const n=[...L(this,no).values()];let r={};return n.forEach(o=>{Go(t,o.queryKey)&&(r={...r,...o.defaultOptions})}),r}setMutationDefaults(t,n){L(this,ro).set(Qo(t),{mutationKey:t,defaultOptions:n})}getMutationDefaults(t){const n=[...L(this,ro).values()];let r={};return n.forEach(o=>{Go(t,o.mutationKey)&&(r={...r,...o.defaultOptions})}),r}defaultQueryOptions(t){if(t!=null&&t._defaulted)return t;const n={...L(this,Vn).queries,...(t==null?void 0:t.queryKey)&&this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return n.queryHash||(n.queryHash=cc(n.queryKey,n)),typeof n.refetchOnReconnect>"u"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.throwOnError>"u"&&(n.throwOnError=!!n.suspense),typeof n.networkMode>"u"&&n.persister&&(n.networkMode="offlineFirst"),n}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...L(this,Vn).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){L(this,qe).clear(),L(this,jn).clear()}},qe=new WeakMap,jn=new WeakMap,Vn=new WeakMap,no=new WeakMap,ro=new WeakMap,Kn=new WeakMap,oo=new WeakMap,io=new WeakMap,qf),z0="VUE_QUERY_CLIENT";function W0(e){const t=e?`:${e}`:"";return`${z0}${t}`}function s8(e,t){Object.keys(e).forEach(n=>{e[n]=t[n]})}function cl(e,t){if(t){const n=t(e);if(n===void 0&&Ne(e)||n!==void 0)return n}if(Array.isArray(e))return e.map(n=>cl(n,t));if(typeof e=="object"&&Q0(e)){const n=Object.entries(e).map(([r,o])=>[r,cl(o,t)]);return Object.fromEntries(n)}return e}function ye(e){return cl(e,t=>{if(Ne(t))return ye(Me(t))})}function Q0(e){if(Object.prototype.toString.call(e)!=="[object Object]")return!1;const t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function a8(e,t){return typeof e=="function"?e(...t):!!e}var G0=class extends uh{find(e){return super.find(ye(e))}findAll(e={}){return super.findAll(ye(e))}},Z0=class extends fh{find(e){return super.find(ye(e))}findAll(e={}){return super.findAll(ye(e))}},Y0=class extends q0{constructor(e={}){const t={defaultOptions:e.defaultOptions,queryCache:e.queryCache||new G0,mutationCache:e.mutationCache||new Z0};super(t),this.isRestoring=Re(!1)}isFetching(e={}){return super.isFetching(ye(e))}isMutating(e={}){return super.isMutating(ye(e))}getQueryData(e){return super.getQueryData(ye(e))}getQueriesData(e){return super.getQueriesData(ye(e))}setQueryData(e,t,n={}){return super.setQueryData(ye(e),t,ye(n))}setQueriesData(e,t,n={}){return super.setQueriesData(ye(e),t,ye(n))}getQueryState(e){return super.getQueryState(ye(e))}removeQueries(e={}){return super.removeQueries(ye(e))}resetQueries(e={},t={}){return super.resetQueries(ye(e),ye(t))}cancelQueries(e={},t={}){return super.cancelQueries(ye(e),ye(t))}invalidateQueries(e={},t={}){return super.invalidateQueries(ye(e),ye(t))}refetchQueries(e={},t={}){return super.refetchQueries(ye(e),ye(t))}fetchQuery(e){return super.fetchQuery(ye(e))}prefetchQuery(e){return super.prefetchQuery(ye(e))}fetchInfiniteQuery(e){return super.fetchInfiniteQuery(ye(e))}prefetchInfiniteQuery(e){return super.prefetchInfiniteQuery(ye(e))}setDefaultOptions(e){super.setDefaultOptions(ye(e))}setQueryDefaults(e,t){super.setQueryDefaults(ye(e),ye(t))}getQueryDefaults(e){return super.getQueryDefaults(ye(e))}setMutationDefaults(e,t){super.setMutationDefaults(ye(e),ye(t))}getMutationDefaults(e){return super.getMutationDefaults(ye(e))}};function J0(){return dh().__VUE_DEVTOOLS_GLOBAL_HOOK__}function dh(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const X0=typeof Proxy=="function",eb="devtools-plugin:setup",tb="plugin:settings:set";let Ur,ul;function nb(){var e;return Ur!==void 0||(typeof window<"u"&&window.performance?(Ur=!0,ul=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(Ur=!0,ul=global.perf_hooks.performance):Ur=!1),Ur}function rb(){return nb()?ul.now():Date.now()}class ob{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const r={};if(t.settings)for(const s in t.settings){const a=t.settings[s];r[s]=a.defaultValue}const o=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},r);try{const s=localStorage.getItem(o),a=JSON.parse(s);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(s){try{localStorage.setItem(o,JSON.stringify(s))}catch{}i=s},now(){return rb()}},n&&n.on(tb,(s,a)=>{s===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(s,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(s,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function hh(e,t){const n=e,r=dh(),o=J0(),i=X0&&n.enableEarlyProxy;if(o&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))o.emit(eb,e,t);else{const s=i?new ob(n,o):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:s}),s&&t(s.proxiedTarget)}}/**
 * match-sorter-utils
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const ph={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},ib=Object.keys(ph).join("|"),sb=new RegExp(ib,"g");function ab(e){return e.replace(sb,t=>ph[t])}/**
 * @name match-sorter
 * @license MIT license.
 * @copyright (c) 2099 Kent C. Dodds
 * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
 */const dt={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};function lb(e,t,n){var r;if(n=n||{},n.threshold=(r=n.threshold)!=null?r:dt.MATCHES,!n.accessors){const s=Nu(e,t,n);return{rankedValue:e,rank:s,accessorIndex:-1,accessorThreshold:n.threshold,passed:s>=n.threshold}}const o=db(e,n.accessors),i={rankedValue:e,rank:dt.NO_MATCH,accessorIndex:-1,accessorThreshold:n.threshold,passed:!1};for(let s=0;s<o.length;s++){const a=o[s];let l=Nu(a.itemValue,t,n);const{minRanking:c,maxRanking:f,threshold:u=n.threshold}=a.attributes;l<c&&l>=dt.MATCHES?l=c:l>f&&(l=f),l=Math.min(l,f),l>=u&&l>i.rank&&(i.rank=l,i.passed=!0,i.accessorIndex=s,i.accessorThreshold=u,i.rankedValue=a.itemValue)}return i}function Nu(e,t,n){return e=Uu(e,n),t=Uu(t,n),t.length>e.length?dt.NO_MATCH:e===t?dt.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase(),t=t.toLowerCase(),e===t?dt.EQUAL:e.startsWith(t)?dt.STARTS_WITH:e.includes(` ${t}`)?dt.WORD_STARTS_WITH:e.includes(t)?dt.CONTAINS:t.length===1?dt.NO_MATCH:cb(e).includes(t)?dt.ACRONYM:ub(e,t))}function cb(e){let t="";return e.split(" ").forEach(r=>{r.split("-").forEach(i=>{t+=i.substr(0,1)})}),t}function ub(e,t){let n=0,r=0;function o(l,c,f){for(let u=f,d=c.length;u<d;u++)if(c[u]===l)return n+=1,u+1;return-1}function i(l){const c=1/l,f=n/t.length;return dt.MATCHES+f*c}const s=o(t[0],e,0);if(s<0)return dt.NO_MATCH;r=s;for(let l=1,c=t.length;l<c;l++){const f=t[l];if(r=o(f,e,r),!(r>-1))return dt.NO_MATCH}const a=r-s;return i(a)}function Uu(e,t){let{keepDiacritics:n}=t;return e=`${e}`,n||(e=ab(e)),e}function fb(e,t){let n=t;typeof t=="object"&&(n=t.accessor);const r=n(e);return r==null?[]:Array.isArray(r)?r:[String(r)]}function db(e,t){const n=[];for(let r=0,o=t.length;r<o;r++){const i=t[r],s=hb(i),a=fb(e,i);for(let l=0,c=a.length;l<c;l++)n.push({itemValue:a[l],attributes:s})}return n}const Mu={maxRanking:1/0,minRanking:-1/0};function hb(e){return typeof e=="function"?Mu:{...Mu,...e}}function pr(e){return e.state.fetchStatus==="fetching"?0:e.state.fetchStatus==="paused"?4:e.getObserversCount()?e.isStale()?2:1:3}function Hu(e){const t=pr(e);return t===0?"fetching":t===4?"paused":t===2?"stale":t===3?"inactive":"fresh"}function pb(e){return pr(e)===2?0:16777215}function gb(e){const t=pr(e);return t===0?27647:t===4?9193963:t===2?16757248:t===3?4148832:33575}var mb=(e,t)=>e.queryHash.localeCompare(t.queryHash),gh=(e,t)=>e.state.dataUpdatedAt<t.state.dataUpdatedAt?1:-1,yb=(e,t)=>pr(e)===pr(t)?gh(e,t):pr(e)>pr(t)?1:-1,va={"Status > Last Updated":yb,"Query Hash":mb,"Last Updated":gh},xn="vue-query",wa="Vue Query";function bb(e,t){hh({id:xn,label:wa,packageName:"vue-query",homepage:"https://tanstack.com/query/latest",logo:"https://raw.githubusercontent.com/TanStack/query/main/packages/vue-query/media/vue-query.svg",app:e,settings:{baseSort:{type:"choice",component:"button-group",label:"Sort Cache Entries",options:[{label:"ASC",value:1},{label:"DESC",value:-1}],defaultValue:1},sortFn:{type:"choice",label:"Sort Function",options:Object.keys(va).map(n=>({label:n,value:n})),defaultValue:Object.keys(va)[0]},onlineMode:{type:"choice",component:"button-group",label:"Online mode",options:[{label:"Online",value:1},{label:"Offline",value:0}],defaultValue:1}}},n=>{const r=n.getSettings();uo.setOnline(!!r.onlineMode.valueOf());const o=t.getQueryCache();n.addInspector({id:xn,label:wa,icon:"api",nodeActions:[{icon:"file_download",tooltip:"Refetch",action:i=>{var s;(s=o.get(i))==null||s.fetch()}},{icon:"alarm",tooltip:"Invalidate",action:i=>{const s=o.get(i);t.invalidateQueries(s)}},{icon:"settings_backup_restore",tooltip:"Reset",action:i=>{var s;(s=o.get(i))==null||s.reset()}},{icon:"delete",tooltip:"Remove",action:i=>{const s=o.get(i);o.remove(s)}},{icon:"hourglass_empty",tooltip:"Force loading",action:i=>{o.get(i).setState({data:void 0,status:"pending"})}},{icon:"error_outline",tooltip:"Force error",action:i=>{o.get(i).setState({data:void 0,status:"error",error:new Error("Unknown error from devtools")})}}]}),n.addTimelineLayer({id:xn,label:wa,color:16767308}),o.subscribe(i=>{n.sendInspectorTree(xn),n.sendInspectorState(xn),["added","removed","updated"].includes(i.type)&&n.addTimelineEvent({layerId:xn,event:{title:i.type,subtitle:i.query.queryHash,time:n.now(),data:{queryHash:i.query.queryHash,...i}}})}),n.on.setPluginSettings(i=>{i.key==="onlineMode"&&uo.setOnline(!!i.newValue)}),n.on.getInspectorTree(i=>{if(i.inspectorId===xn){const s=o.getAll(),a=n.getSettings(),f=(i.filter?s.filter(u=>lb(u.queryHash,i.filter).passed):[...s]).sort((u,d)=>va[a.sortFn](u,d)*a.baseSort).map(u=>{const d=Hu(u);return{id:u.queryHash,label:u.queryHash,tags:[{label:`${d} [${u.getObserversCount()}]`,textColor:pb(u),backgroundColor:gb(u)}]}});i.rootNodes=f}}),n.on.getInspectorState(i=>{if(i.inspectorId===xn){const s=o.get(i.nodeId);if(!s)return;i.state={" Query Details":[{key:"Query key",value:s.queryHash},{key:"Query status",value:Hu(s)},{key:"Observers",value:s.getObserversCount()},{key:"Last Updated",value:new Date(s.state.dataUpdatedAt).toLocaleTimeString()}],"Data Explorer":[{key:"Data",value:s.state.data}],"Query Explorer":[{key:"Query",value:s}]}}})})}var vb={install:(e,t={})=>{const n=W0(t.queryClientKey);let r;if("queryClient"in t&&t.queryClient)r=t.queryClient;else{const s="queryClientConfig"in t?t.queryClientConfig:void 0;r=new Y0(s)}Si||r.mount();let o=()=>{};if(t.clientPersister){r.isRestoring.value=!0;const[s,a]=t.clientPersister(r);o=s,a.then(()=>{var l;r.isRestoring.value=!1,(l=t.clientPersisterOnSuccess)==null||l.call(t,r)})}const i=()=>{r.unmount(),o()};if(e.onUnmount)e.onUnmount(i);else{const s=e.unmount;e.unmount=function(){i(),s()}}e.provide(n,r),bb(e,r)}};function xa(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=fc(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(c){throw c},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,s=!1,a;return{s:function(){n=n.call(e)},n:function(){var c=n.next();return i=c.done,c},e:function(c){s=!0,a=c},f:function(){try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}}}function wb(e){return _b(e)||Eb(e)||fc(e)||xb()}function xb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Eb(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _b(e){if(Array.isArray(e))return fl(e)}function Uo(e){"@babel/helpers - typeof";return Uo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Uo(e)}function Ea(e,t){return Ab(e)||Cb(e,t)||fc(e,t)||Sb()}function Sb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fc(e,t){if(e){if(typeof e=="string")return fl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fl(e,t)}}function fl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Cb(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,s,a=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(f){c=!0,o=f}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw o}}return a}}function Ab(e){if(Array.isArray(e))return e}var se={innerWidth:function(t){if(t){var n=t.offsetWidth,r=getComputedStyle(t);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}return 0},width:function(t){if(t){var n=t.offsetWidth,r=getComputedStyle(t);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}return 0},getWindowScrollTop:function(){var t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)},getWindowScrollLeft:function(){var t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)},getOuterWidth:function(t,n){if(t){var r=t.offsetWidth;if(n){var o=getComputedStyle(t);r+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return r}return 0},getOuterHeight:function(t,n){if(t){var r=t.offsetHeight;if(n){var o=getComputedStyle(t);r+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return r}return 0},getClientHeight:function(t,n){if(t){var r=t.clientHeight;if(n){var o=getComputedStyle(t);r+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return r}return 0},getViewport:function(){var t=window,n=document,r=n.documentElement,o=n.getElementsByTagName("body")[0],i=t.innerWidth||r.clientWidth||o.clientWidth,s=t.innerHeight||r.clientHeight||o.clientHeight;return{width:i,height:s}},getOffset:function(t){if(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}},index:function(t){if(t)for(var n=t.parentNode.childNodes,r=0,o=0;o<n.length;o++){if(n[o]===t)return r;n[o].nodeType===1&&r++}return-1},addMultipleClasses:function(t,n){var r=this;t&&n&&n.split(" ").forEach(function(o){return r.addClass(t,o)})},addClass:function(t,n){t&&n&&!this.hasClass(t,n)&&(t.classList?t.classList.add(n):t.className+=" "+n)},removeClass:function(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function(t,n){return t?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1},addStyles:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};t&&Object.entries(n).forEach(function(r){var o=Ea(r,2),i=o[0],s=o[1];return t.style[i]=s})},find:function(t,n){return this.isElement(t)?t.querySelectorAll(n):[]},findSingle:function(t,n){return this.isElement(t)?t.querySelector(n):null},createElement:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t){var r=document.createElement(t);this.setAttributes(r,n);for(var o=arguments.length,i=new Array(o>2?o-2:0),s=2;s<o;s++)i[s-2]=arguments[s];return r.append.apply(r,i),r}},setAttribute:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0;t&&r!==null&&r!==void 0&&t.setAttribute(n,r)},setAttributes:function(t){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t){var o=function i(s,a){var l,c,f=t!=null&&(l=t.$attrs)!==null&&l!==void 0&&l[s]?[t==null||(c=t.$attrs)===null||c===void 0?void 0:c[s]]:[];return[a].flat().reduce(function(u,d){if(d!=null){var h=Uo(d);if(h==="string"||h==="number")u.push(d);else if(h==="object"){var p=Array.isArray(d)?i(s,d):Object.entries(d).map(function(g){var m=Ea(g,2),y=m[0],x=m[1];return s==="style"&&(x||x===0)?"".concat(y.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),":").concat(x):x?y:void 0});u=p.length?u.concat(p.filter(function(g){return!!g})):u}}return u},f)};Object.entries(r).forEach(function(i){var s=Ea(i,2),a=s[0],l=s[1];if(l!=null){var c=a.match(/^on(.+)/);c?t.addEventListener(c[1].toLowerCase(),l):a==="p-bind"?n.setAttributes(t,l):(l=a==="class"?wb(new Set(o("class",l))).join(" ").trim():a==="style"?o("style",l).join(";").trim():l,(t.$attrs=t.$attrs||{})&&(t.$attrs[a]=l),t.setAttribute(a,l))}})}},getAttribute:function(t,n){if(t){var r=t.getAttribute(n);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}},isAttributeEquals:function(t,n,r){return t?this.getAttribute(t,n)===r:!1},isAttributeNotEquals:function(t,n,r){return!this.isAttributeEquals(t,n,r)},getHeight:function(t){if(t){var n=t.offsetHeight,r=getComputedStyle(t);return n-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),n}return 0},getWidth:function(t){if(t){var n=t.offsetWidth,r=getComputedStyle(t);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),n}return 0},absolutePosition:function(t,n){if(t){var r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),o=r.height,i=r.width,s=n.offsetHeight,a=n.offsetWidth,l=n.getBoundingClientRect(),c=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),u=this.getViewport(),d,h;l.top+s+o>u.height?(d=l.top+c-o,t.style.transformOrigin="bottom",d<0&&(d=c)):(d=s+l.top+c,t.style.transformOrigin="top"),l.left+i>u.width?h=Math.max(0,l.left+f+a-i):h=l.left+f,t.style.top=d+"px",t.style.left=h+"px"}},relativePosition:function(t,n){if(t){var r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),o=n.offsetHeight,i=n.getBoundingClientRect(),s=this.getViewport(),a,l;i.top+o+r.height>s.height?(a=-1*r.height,t.style.transformOrigin="bottom",i.top+a<0&&(a=-1*i.top)):(a=o,t.style.transformOrigin="top"),r.width>s.width?l=i.left*-1:i.left+r.width>s.width?l=(i.left+r.width-s.width)*-1:l=0,t.style.top=a+"px",t.style.left=l+"px"}},getParents:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))},getScrollableParents:function(t){var n=[];if(t){var r=this.getParents(t),o=/(auto|scroll)/,i=function(m){try{var y=window.getComputedStyle(m,null);return o.test(y.getPropertyValue("overflow"))||o.test(y.getPropertyValue("overflowX"))||o.test(y.getPropertyValue("overflowY"))}catch{return!1}},s=xa(r),a;try{for(s.s();!(a=s.n()).done;){var l=a.value,c=l.nodeType===1&&l.dataset.scrollselectors;if(c){var f=c.split(","),u=xa(f),d;try{for(u.s();!(d=u.n()).done;){var h=d.value,p=this.findSingle(l,h);p&&i(p)&&n.push(p)}}catch(g){u.e(g)}finally{u.f()}}l.nodeType!==9&&i(l)&&n.push(l)}}catch(g){s.e(g)}finally{s.f()}}return n},getHiddenElementOuterHeight:function(t){if(t){t.style.visibility="hidden",t.style.display="block";var n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}return 0},getHiddenElementOuterWidth:function(t){if(t){t.style.visibility="hidden",t.style.display="block";var n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}return 0},getHiddenElementDimensions:function(t){if(t){var n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}return 0},fadeIn:function(t,n){if(t){t.style.opacity=0;var r=+new Date,o=0,i=function s(){o=+t.style.opacity+(new Date().getTime()-r)/n,t.style.opacity=o,r=+new Date,+o<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};i()}},fadeOut:function(t,n){if(t)var r=1,o=50,i=n,s=o/i,a=setInterval(function(){r-=s,r<=0&&(r=0,clearInterval(a)),t.style.opacity=r},o)},getUserAgent:function(){return navigator.userAgent},appendChild:function(t,n){if(this.isElement(n))n.appendChild(t);else if(n.el&&n.elElement)n.elElement.appendChild(t);else throw new Error("Cannot append "+n+" to "+t)},isElement:function(t){return(typeof HTMLElement>"u"?"undefined":Uo(HTMLElement))==="object"?t instanceof HTMLElement:t&&Uo(t)==="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"},scrollInView:function(t,n){var r=getComputedStyle(t).getPropertyValue("borderTopWidth"),o=r?parseFloat(r):0,i=getComputedStyle(t).getPropertyValue("paddingTop"),s=i?parseFloat(i):0,a=t.getBoundingClientRect(),l=n.getBoundingClientRect(),c=l.top+document.body.scrollTop-(a.top+document.body.scrollTop)-o-s,f=t.scrollTop,u=t.clientHeight,d=this.getOuterHeight(n);c<0?t.scrollTop=f+c:c+d>u&&(t.scrollTop=f+c-u+d)},clearSelection:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}},getSelection:function(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null},calculateScrollbarWidth:function(){if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var t=document.createElement("div");this.addStyles(t,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(t);var n=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n},getBrowser:function(){if(!this.browser){var t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser},resolveUserAgent:function(){var t=navigator.userAgent.toLowerCase(),n=/(chrome)[ ]([\w.]+)/.exec(t)||/(webkit)[ ]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}},isVisible:function(t){return t&&t.offsetParent!=null},invokeElementMethod:function(t,n,r){t[n].apply(t,r)},isExist:function(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode)},isClient:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},focus:function(t,n){t&&document.activeElement!==t&&t.focus(n)},isFocusableElement:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.isElement(t)?t.matches('button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(n,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n)):!1},getFocusableElements:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=this.find(t,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(n,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n)),o=[],i=xa(r),s;try{for(i.s();!(s=i.n()).done;){var a=s.value;getComputedStyle(a).display!="none"&&getComputedStyle(a).visibility!="hidden"&&o.push(a)}}catch(l){i.e(l)}finally{i.f()}return o},getFirstFocusableElement:function(t,n){var r=this.getFocusableElements(t,n);return r.length>0?r[0]:null},getLastFocusableElement:function(t,n){var r=this.getFocusableElements(t,n);return r.length>0?r[r.length-1]:null},getNextFocusableElement:function(t,n,r){var o=this.getFocusableElements(t,r),i=o.length>0?o.findIndex(function(a){return a===n}):-1,s=i>-1&&o.length>=i+1?i+1:-1;return s>-1?o[s]:null},isClickable:function(t){if(t){var n=t.nodeName,r=t.parentElement&&t.parentElement.nodeName;return n==="INPUT"||n==="TEXTAREA"||n==="BUTTON"||n==="A"||r==="INPUT"||r==="TEXTAREA"||r==="BUTTON"||r==="A"||!!t.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1},applyStyle:function(t,n){if(typeof n=="string")t.style.cssText=n;else for(var r in n)t.style[r]=n[r]},isIOS:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},isAndroid:function(){return/(android)/i.test(navigator.userAgent)},isTouchDevice:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},hasCSSAnimation:function(t){if(t){var n=getComputedStyle(t),r=parseFloat(n.getPropertyValue("animation-duration")||"0");return r>0}return!1},hasCSSTransition:function(t){if(t){var n=getComputedStyle(t),r=parseFloat(n.getPropertyValue("transition-duration")||"0");return r>0}return!1},exportCSV:function(t,n){var r=new Blob([t],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(r,n+".csv");else{var o=document.createElement("a");o.download!==void 0?(o.setAttribute("href",URL.createObjectURL(r)),o.setAttribute("download",n+".csv"),o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)):(t="data:text/csv;charset=utf-8,"+t,window.open(encodeURI(t)))}}};function Zo(e){"@babel/helpers - typeof";return Zo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zo(e)}function $b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ib(r.key),r)}}function kb(e,t,n){return t&&Fu(e.prototype,t),n&&Fu(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ib(e){var t=Ob(e,"string");return Zo(t)==="symbol"?t:String(t)}function Ob(e,t){if(Zo(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Zo(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var l8=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};$b(this,e),this.element=t,this.listener=n}return kb(e,[{key:"bindScrollListener",value:function(){this.scrollableParents=se.getScrollableParents(this.element);for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}]),e}();function c8(){var e=new Map;return{on:function(n,r){var o=e.get(n);o?o.push(r):o=[r],e.set(n,o)},off:function(n,r){var o=e.get(n);o&&o.splice(o.indexOf(r)>>>0,1)},emit:function(n,r){var o=e.get(n);o&&o.slice().map(function(i){i(r)})}}}function Tb(e,t){return Rb(e)||Lb(e,t)||dc(e,t)||Pb()}function Pb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lb(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,s,a=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(f){c=!0,o=f}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw o}}return a}}function Rb(e){if(Array.isArray(e))return e}function Du(e){return Ub(e)||Nb(e)||dc(e)||Bb()}function Bb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nb(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ub(e){if(Array.isArray(e))return dl(e)}function _a(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=dc(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(c){throw c},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,s=!1,a;return{s:function(){n=n.call(e)},n:function(){var c=n.next();return i=c.done,c},e:function(c){s=!0,a=c},f:function(){try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}}}function dc(e,t){if(e){if(typeof e=="string")return dl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return dl(e,t)}}function dl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Mo(e){"@babel/helpers - typeof";return Mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mo(e)}var de={equals:function(t,n,r){return r?this.resolveFieldData(t,r)===this.resolveFieldData(n,r):this.deepEquals(t,n)},deepEquals:function(t,n){if(t===n)return!0;if(t&&n&&Mo(t)=="object"&&Mo(n)=="object"){var r=Array.isArray(t),o=Array.isArray(n),i,s,a;if(r&&o){if(s=t.length,s!=n.length)return!1;for(i=s;i--!==0;)if(!this.deepEquals(t[i],n[i]))return!1;return!0}if(r!=o)return!1;var l=t instanceof Date,c=n instanceof Date;if(l!=c)return!1;if(l&&c)return t.getTime()==n.getTime();var f=t instanceof RegExp,u=n instanceof RegExp;if(f!=u)return!1;if(f&&u)return t.toString()==n.toString();var d=Object.keys(t);if(s=d.length,s!==Object.keys(n).length)return!1;for(i=s;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,d[i]))return!1;for(i=s;i--!==0;)if(a=d[i],!this.deepEquals(t[a],n[a]))return!1;return!0}return t!==t&&n!==n},resolveFieldData:function(t,n){if(t&&Object.keys(t).length&&n){if(this.isFunction(n))return n(t);if(n.indexOf(".")===-1)return t[n];for(var r=n.split("."),o=t,i=0,s=r.length;i<s;++i){if(o==null)return null;o=o[r[i]]}return o}else return null},getItemValue:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return this.isFunction(t)?t.apply(void 0,r):t},filter:function(t,n,r){var o=[];if(t){var i=_a(t),s;try{for(i.s();!(s=i.n()).done;){var a=s.value,l=_a(n),c;try{for(l.s();!(c=l.n()).done;){var f=c.value;if(String(this.resolveFieldData(a,f)).toLowerCase().indexOf(r.toLowerCase())>-1){o.push(a);break}}}catch(u){l.e(u)}finally{l.f()}}}catch(u){i.e(u)}finally{i.f()}}return o},reorderArray:function(t,n,r){t&&n!==r&&(r>=t.length&&(r%=t.length,n%=t.length),t.splice(r,0,t.splice(n,1)[0]))},findIndexInList:function(t,n){var r=-1;if(n){for(var o=0;o<n.length;o++)if(n[o]===t){r=o;break}}return r},contains:function(t,n){if(t!=null&&n&&n.length){var r=_a(n),o;try{for(r.s();!(o=r.n()).done;){var i=o.value;if(this.equals(t,i))return!0}}catch(s){r.e(s)}finally{r.f()}}return!1},insertIntoOrderedArray:function(t,n,r,o){if(r.length>0){for(var i=!1,s=0;s<r.length;s++){var a=this.findIndexInList(r[s],o);if(a>n){r.splice(s,0,t),i=!0;break}}i||r.push(t)}else r.push(t)},removeAccents:function(t){return t&&t.search(/[\xC0-\xFF]/g)>-1&&(t=t.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),t},getVNodeProp:function(t,n){var r=t.props;if(r){var o=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=Object.prototype.hasOwnProperty.call(r,o)?o:n;return t.type.extends.props[n].type===Boolean&&r[i]===""?!0:r[i]}return null},toFlatCase:function(t){return this.isString(t)?t.replace(/(-|_)/g,"").toLowerCase():t},toKebabCase:function(t){return this.isString(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,function(n,r){return r===0?n:"-"+n.toLowerCase()}).toLowerCase():t},toCapitalCase:function(t){return this.isString(t,{empty:!1})?t[0].toUpperCase()+t.slice(1):t},isEmpty:function(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&Mo(t)==="object"&&Object.keys(t).length===0},isNotEmpty:function(t){return!this.isEmpty(t)},isFunction:function(t){return!!(t&&t.constructor&&t.call&&t.apply)},isObject:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t instanceof Object&&t.constructor===Object&&(n||Object.keys(t).length!==0)},isDate:function(t){return t instanceof Date&&t.constructor===Date},isArray:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Array.isArray(t)&&(n||t.length!==0)},isString:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return typeof t=="string"&&(n||t!=="")},isPrintableCharacter:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)},findLast:function(t,n){var r;if(this.isNotEmpty(t))try{r=t.findLast(n)}catch{r=Du(t).reverse().find(n)}return r},findLastIndex:function(t,n){var r=-1;if(this.isNotEmpty(t))try{r=t.findLastIndex(n)}catch{r=t.lastIndexOf(Du(t).reverse().find(n))}return r},nestedKeys:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return Object.entries(n).reduce(function(o,i){var s=Tb(i,2),a=s[0],l=s[1],c=r?"".concat(r,".").concat(a):a;return t.isObject(l)?o=o.concat(t.nestedKeys(l,c)):o.push(c),o},[])}},ju=0;function Yo(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return ju++,"".concat(e).concat(ju)}function Mb(e){return jb(e)||Db(e)||Fb(e)||Hb()}function Hb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fb(e,t){if(e){if(typeof e=="string")return hl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hl(e,t)}}function Db(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function jb(e){if(Array.isArray(e))return hl(e)}function hl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Vb(){var e=[],t=function(a,l){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:999,f=o(a,l,c),u=f.value+(f.key===a?0:c)+1;return e.push({key:a,value:u}),u},n=function(a){e=e.filter(function(l){return l.value!==a})},r=function(a,l){return o(a,l).value},o=function(a,l){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;return Mb(e).reverse().find(function(f){return l?!0:f.key===a})||{key:a,value:c}},i=function(a){return a&&parseInt(a.style.zIndex,10)||0};return{get:i,set:function(a,l,c){l&&(l.style.zIndex=String(t(a,!0,c)))},clear:function(a){a&&(n(i(a)),a.style.zIndex="")},getCurrent:function(a){return r(a,!0)}}}var Sa=Vb();function Kb(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;Rr()?xi(e):t?e():Ms(e)}var qb=0;function er(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Re(!1),r=Re(e),o=Re(null),i=se.isClient()?window.document:void 0,s=t.document,a=s===void 0?i:s,l=t.immediate,c=l===void 0?!0:l,f=t.manual,u=f===void 0?!1:f,d=t.name,h=d===void 0?"style_".concat(++qb):d,p=t.id,g=p===void 0?void 0:p,m=t.media,y=m===void 0?void 0:m,x=t.nonce,w=x===void 0?void 0:x,A=function(){},_=function(E){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var U=k.name||h,N=k.id||g,O=k.nonce||w;o.value=a.querySelector('style[data-primevue-style-id="'.concat(U,'"]'))||a.getElementById(N)||a.createElement("style"),o.value.isConnected||(r.value=E||e,se.setAttributes(o.value,{type:"text/css",id:N,media:y,nonce:O}),a.head.appendChild(o.value),se.setAttribute(o.value,"data-primevue-style-id",h),se.setAttributes(o.value,k)),!n.value&&(A=Ht(r,function(Q){o.value.textContent=Q},{immediate:!0}),n.value=!0)}},S=function(){!a||!n.value||(A(),se.isExist(o.value)&&a.head.removeChild(o.value),n.value=!1)};return c&&!u&&Kb(_),{id:g,name:h,css:r,unload:S,load:_,isLoaded:Ns(n)}}var zb=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
}
`,Wb=er(zb,{name:"base",manual:!0}),mh=Wb.load;function Jo(e){"@babel/helpers - typeof";return Jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jo(e)}function Vu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vu(Object(n),!0).forEach(function(r){pl(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pl(e,t,n){return t=Qb(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qb(e){var t=Gb(e,"string");return Jo(t)==="symbol"?t:String(t)}function Gb(e,t){if(Jo(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Jo(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Zb={},Yb=`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-buttonset .p-button {
    margin: 0;
}

.p-buttonset .p-button:not(:last-child), .p-buttonset .p-button:not(:last-child):hover {
    border-right: 0 none;
}

.p-buttonset .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttonset .p-button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-buttonset .p-button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-buttonset .p-button:focus {
    position: relative;
    z-index: 1;
}
`,Jb=`
.p-checkbox {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    vertical-align: bottom;
    position: relative;
}

.p-checkbox.p-checkbox-disabled {
    cursor: default;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
}
`,Xb=`
.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label {
    top: -.75rem;
    font-size: 12px;
}

.p-float-label .input:-webkit-autofill ~ label {
    top: -20px;
    font-size: 12px;
}

.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-left > svg,
.p-input-icon-right > i,
.p-input-icon-right > svg {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
`,ev=`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    vertical-align: bottom;
}

.p-radiobutton.p-radiobutton-disabled {
    cursor: default;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.p-radiobutton-icon {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0) scale(.1);
    border-radius: 50%;
    visibility: hidden;
}

.p-radiobutton-box.p-highlight .p-radiobutton-icon {
    transform: translateZ(0) scale(1.0, 1.0);
    visibility: visible;
}
`,tv=`
.p-component, .p-component * {
    box-sizing: border-box;
}

.p-hidden-space {
    visibility: hidden;
}

.p-reset {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-decoration: none;
    font-size: 100%;
    list-style: none;
}

.p-disabled, .p-disabled * {
    cursor: default !important;
    pointer-events: none;
    user-select: none;
}

.p-component-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-unselectable-text {
    user-select: none;
}

.p-sr-only {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal !important;
}

.p-link {
	text-align: left;
	background-color: transparent;
	margin: 0;
	padding: 0;
	border: none;
    cursor: pointer;
    user-select: none;
}

.p-link:disabled {
	cursor: default;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity .1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity .1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}
`.concat(Yb,`
`).concat(Jb,`
`).concat(Xb,`
`).concat(ev,`
`),nv=er(tv,{name:"common",manual:!0}),rv=nv.load,ov=er("",{name:"global",manual:!0}),iv=ov.load,zs={name:"BaseComponent",props:{pt:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(t){if(!t){var n,r;rv(void 0,{nonce:(n=this.$config)===null||n===void 0||(n=n.csp)===null||n===void 0?void 0:n.nonce}),this.$options.css&&this.$css.loadStyle(void 0,{nonce:(r=this.$config)===null||r===void 0||(r=r.csp)===null||r===void 0?void 0:r.nonce})}}}},beforeCreate:function(){var t,n,r,o,i,s,a,l,c,f,u,d=(t=this.pt)===null||t===void 0?void 0:t._usept,h=d?(n=this.pt)===null||n===void 0||(n=n.originalValue)===null||n===void 0?void 0:n[this.$.type.name]:void 0,p=d?(r=this.pt)===null||r===void 0||(r=r.value)===null||r===void 0?void 0:r[this.$.type.name]:this.pt;(o=p||h)===null||o===void 0||(o=o.hooks)===null||o===void 0||(i=o.onBeforeCreate)===null||i===void 0||i.call(o);var g=(s=this.$config)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s._usept,m=g?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.originalValue:void 0,y=g?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0?void 0:c.pt;(f=y||m)===null||f===void 0||(f=f[this.$.type.name])===null||f===void 0||(f=f.hooks)===null||f===void 0||(u=f.onBeforeCreate)===null||u===void 0||u.call(f)},created:function(){this._hook("onCreated")},beforeMount:function(){var t;mh(void 0,{nonce:(t=this.$config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce}),this._loadGlobalStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._hook("onUnmounted")},methods:{_hook:function(t){if(!this.$options.hostName){var n=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(t)),r=this._useDefaultPT(this._getOptionValue,"hooks.".concat(t));n==null||n(),r==null||r()}},_loadGlobalStyles:function(){var t,n=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);de.isNotEmpty(n)&&iv(n,{nonce:(t=this.$config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce})},_getHostInstance:function(t){return t?this.$options.hostName?t.$.type.name===this.$options.hostName?t:this._getHostInstance(t.$parentInstance):t.$parentInstance:void 0},_getOptionValue:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=de.toFlatCase(n).split("."),i=o.shift();return i?de.isObject(t)?this._getOptionValue(de.getItemValue(t[Object.keys(t).find(function(s){return de.toFlatCase(s)===i})||""],r),o.join("."),r):void 0:de.getItemValue(t,r)},_getPTValue:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,i="data-pc-",s=/./g.test(n)&&!!r[n.split(".")[0]],a=s?void 0:this._usePT(this._getPT(t,this.$name),this._getPTClassValue,n,r),l=o?s?this._useGlobalPT(this._getPTClassValue,n,r):this._useDefaultPT(this._getPTClassValue,n,r):void 0,c=ve(a,l,n!=="transition"&&Je(Je({},n==="root"&&pl({},"".concat(i,"name"),de.toFlatCase(this.$.type.name))),{},pl({},"".concat(i,"section"),de.toFlatCase(n))));return c},_getPTClassValue:function(){var t=this._getOptionValue.apply(this,arguments);return de.isString(t)||de.isArray(t)?{class:t}:t},_getPT:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,o=t==null?void 0:t._usept,i=function(a){var l,c=r?r(a):a;return(l=c==null?void 0:c[de.toFlatCase(n)])!==null&&l!==void 0?l:c};return de.isNotEmpty(o)?{_usept:o,originalValue:i(t.originalValue),value:i(t.value)}:i(t)},_usePT:function(t,n,r,o){var i=function(d){return n(d,r,o)};if(t!=null&&t.hasOwnProperty("_usept")){var s=t._usept,a=s.merge,l=s.useMergeProps,c=i(t.originalValue),f=i(t.value);return c===void 0&&f===void 0?void 0:de.isString(f)?f:de.isString(c)?c:a?l?ve(c,f):Je(Je({},c),f):f}return i(t)},_useGlobalPT:function(t,n,r){return this._usePT(this.globalPT,t,n,r)},_useDefaultPT:function(t,n,r){return this._usePT(this.defaultPT,t,n,r)},ptm:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,t,Je(Je({},this.$params),n))},ptmo:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(t,n,Je({instance:this},r),!1)},cx:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$css.classes,t,Je(Je({},this.$params),n))},sx:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(n){var o=this._getOptionValue(this.$css.inlineStyles,t,Je(Je({},this.$params),r)),i=this._getOptionValue(Zb,t,Je(Je({},this.$params),r));return[i,o]}}},computed:{globalPT:function(){var t,n=this;return this._getPT((t=this.$config)===null||t===void 0?void 0:t.pt,void 0,function(r){return de.getItemValue(r,{instance:n})})},defaultPT:function(){var t,n=this;return this._getPT((t=this.$config)===null||t===void 0?void 0:t.pt,void 0,function(r){return n._getOptionValue(r,n.$name,Je({},n.$params))||de.getItemValue(r,Je({},n.$params))})},isUnstyled:function(){return this.unstyled!==void 0?this.unstyled:this.$config.unstyled},$params:function(){return{instance:this,props:this.$props,state:this.$data,parentInstance:this.$parentInstance}},$css:function(){return Je(Je({classes:void 0,inlineStyles:void 0,loadStyle:function(){},loadCustomStyle:function(){}},(this._getHostInstance(this)||{}).$css),this.$options.css)},$config:function(){var t;return(t=this.$primevue)===null||t===void 0?void 0:t.config},$name:function(){return this.$options.hostName||this.$.type.name}}},sv=`
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.p-toolbar-group-start,
.p-toolbar-group-center,
.p-toolbar-group-end {
    display: flex;
    align-items: center;
}

.p-toolbar-group-left,
.p-toolbar-group-right {
    display: flex;
    align-items: center;
}
`,av={root:"p-toolbar p-component",start:"p-toolbar-group-start p-toolbar-group-left",center:"p-toolbar-group-center",end:"p-toolbar-group-end p-toolbar-group-right"},lv=er(sv,{name:"toolbar",manual:!0}),cv=lv.load,uv={name:"BaseToolbar",extends:zs,props:{"aria-labelledby":{type:String,default:null}},css:{classes:av,loadStyle:cv},provide:function(){return{$parentInstance:this}}},yh={name:"Toolbar",extends:uv},fv=["aria-labelledby"];function dv(e,t,n,r,o,i){return Ce(),Qe("div",ve({class:e.cx("root"),role:"toolbar","aria-labelledby":e.ariaLabelledby},e.ptm("root"),{"data-pc-name":"toolbar"}),[Pe("div",ve({class:e.cx("start")},e.ptm("start")),[ht(e.$slots,"start")],16),Pe("div",ve({class:e.cx("center")},e.ptm("center")),[ht(e.$slots,"center")],16),Pe("div",ve({class:e.cx("end")},e.ptm("end")),[ht(e.$slots,"end")],16)],16,fv)}yh.render=dv;var hv=`
.p-badge {
    display: inline-block;
    border-radius: 10px;
    text-align: center;
    padding: 0 .5rem;
}

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%,-50%);
    transform-origin: 100% 0;
    margin: 0;
}

.p-badge-dot {
    width: .5rem;
    min-width: .5rem;
    height: .5rem;
    border-radius: 50%;
    padding: 0;
}

.p-badge-no-gutter {
    padding: 0;
    border-radius: 50%;
}
`,pv={root:function(t){var n=t.props,r=t.instance;return["p-badge p-component",{"p-badge-no-gutter":de.isNotEmpty(n.value)&&String(n.value).length===1,"p-badge-dot":de.isEmpty(n.value)&&!r.$slots.default,"p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge","p-badge-info":n.severity==="info","p-badge-success":n.severity==="success","p-badge-warning":n.severity==="warning","p-badge-danger":n.severity==="danger"}]}},gv=er(hv,{name:"badge",manual:!0}),mv=gv.load,yv={name:"BaseBadge",extends:zs,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},css:{classes:pv,loadStyle:mv},provide:function(){return{$parentInstance:this}}},bh={name:"Badge",extends:yv};function bv(e,t,n,r,o,i){return Ce(),Qe("span",ve({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"badge"}),[ht(e.$slots,"default",{},function(){return[_i(us(e.value),1)]})],16)}bh.render=bv;var vv=`
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,wv=er(vv,{name:"baseicon",manual:!0}),xv=wv.load,Ws={name:"BaseIcon",props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},beforeMount:function(){var t;xv(void 0,{nonce:(t=this.$config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce})},methods:{pti:function(){var t=de.isEmpty(this.label);return{class:["p-icon",{"p-icon-spin":this.spin}],role:t?void 0:"img","aria-label":t?void 0:this.label,"aria-hidden":t}}},computed:{$config:function(){var t;return(t=this.$primevue)===null||t===void 0?void 0:t.config}}},vh={name:"SpinnerIcon",extends:Ws,computed:{pathId:function(){return"pv_icon_clip_".concat(Yo())}}},Ev=["clipPath"],_v=Pe("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1),Sv=[_v],Cv=["id"],Av=Pe("rect",{width:"14",height:"14",fill:"white"},null,-1),$v=[Av];function kv(e,t,n,r,o,i){return Ce(),Qe("svg",ve({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),[Pe("g",{clipPath:"url(#".concat(i.pathId,")")},Sv,8,Ev),Pe("defs",null,[Pe("clipPath",{id:"".concat(i.pathId)},$v,8,Cv)])],16)}vh.render=kv;function Xo(e){"@babel/helpers - typeof";return Xo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xo(e)}function Ku(e,t){return Pv(e)||Tv(e,t)||Ov(e,t)||Iv()}function Iv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ov(e,t){if(e){if(typeof e=="string")return qu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qu(e,t)}}function qu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Tv(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,s,a=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(f){c=!0,o=f}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw o}}return a}}function Pv(e){if(Array.isArray(e))return e}function zu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function tt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zu(Object(n),!0).forEach(function(r){gl(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gl(e,t,n){return t=Lv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Lv(e){var t=Rv(e,"string");return Xo(t)==="symbol"?t:String(t)}function Rv(e,t){if(Xo(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Xo(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Oe={_getMeta:function(){return[de.isObject(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],de.getItemValue(de.isObject(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getOptionValue:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=de.toFlatCase(n).split("."),i=o.shift();return i?de.isObject(t)?Oe._getOptionValue(de.getItemValue(t[Object.keys(t).find(function(s){return de.toFlatCase(s)===i})||""],r),o.join("."),r):void 0:de.getItemValue(t,r)},_getPTValue:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,s=function(){var d=Oe._getOptionValue.apply(Oe,arguments);return de.isString(d)||de.isArray(d)?{class:d}:d},a="data-pc-",l=Oe._usePT(Oe._getPT(n,t.$name),s,r,o),c=i?Oe._useDefaultPT(t.defaultPT,s,r,o):void 0,f=ve(l,c,tt(tt({},r==="root"&&gl({},"".concat(a,"name"),de.toFlatCase(t.$name))),{},gl({},"".concat(a,"section"),de.toFlatCase(r))));return f},_getPT:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,o=t==null?void 0:t._usept,i=function(a){var l,c=r?r(a):a;return(l=c==null?void 0:c[de.toFlatCase(n)])!==null&&l!==void 0?l:c};return de.isNotEmpty(o)?{_usept:o,originalValue:i(t.originalValue),value:i(t.value)}:i(t)},_usePT:function(t,n,r,o){var i=function(d){return n(d,r,o)};if(t!=null&&t.hasOwnProperty("_usept")){var s=t._usept,a=s.merge,l=s.useMergeProps,c=i(t.originalValue),f=i(t.value);return c===void 0&&f===void 0?void 0:de.isString(f)?f:de.isString(c)?c:a?l?ve(c,f):tt(tt({},c),f):f}return i(t)},_useDefaultPT:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;return Oe._usePT(t,n,r,o)},_hook:function(t,n,r,o,i,s){var a,l,c,f="on".concat(de.toCapitalCase(n)),u=o==null||(a=o.instance)===null||a===void 0||(a=a.$primevue)===null||a===void 0?void 0:a.config,d=Oe._usePT(Oe._getPT(o==null||(l=o.value)===null||l===void 0?void 0:l.pt,t),Oe._getOptionValue,"hooks.".concat(f)),h=Oe._useDefaultPT(u==null||(c=u.pt)===null||c===void 0||(c=c.directives)===null||c===void 0?void 0:c[t],Oe._getOptionValue,"hooks.".concat(f)),p={el:r,binding:o,vnode:i,prevVnode:s};d==null||d(r==null?void 0:r.$instance,p),h==null||h(r==null?void 0:r.$instance,p)},_extend:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=function(i,s,a,l,c){var f,u,d;s._$instances=s._$instances||{};var h=a==null||(f=a.instance)===null||f===void 0||(f=f.$primevue)===null||f===void 0?void 0:f.config,p=s._$instances[t]||{},g=de.isEmpty(p)?tt(tt({},n),n==null?void 0:n.methods):{};s._$instances[t]=tt(tt({},p),{},{$name:t,$host:s,$binding:a,$el:p.$el||void 0,$css:tt({classes:void 0,inlineStyles:void 0,loadStyle:function(){}},n==null?void 0:n.css),$config:h,defaultPT:Oe._getPT(h==null?void 0:h.pt,void 0,function(m){var y;return m==null||(y=m.directives)===null||y===void 0?void 0:y[t]}),isUnstyled:s.unstyled!==void 0?s.unstyled:h==null?void 0:h.unstyled,ptm:function(){var y,x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Oe._getPTValue(s.$instance,(y=s.$instance)===null||y===void 0||(y=y.$binding)===null||y===void 0||(y=y.value)===null||y===void 0?void 0:y.pt,x,tt({},w))},ptmo:function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Oe._getPTValue(s.$instance,y,x,w,!1)},cx:function(){var y,x,w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(y=s.$instance)!==null&&y!==void 0&&y.isUnstyled?void 0:Oe._getOptionValue((x=s.$instance)===null||x===void 0||(x=x.$css)===null||x===void 0?void 0:x.classes,w,tt({},A))},sx:function(){var y,x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return w?Oe._getOptionValue((y=s.$instance)===null||y===void 0||(y=y.$css)===null||y===void 0?void 0:y.inlineStyles,x,tt({},A)):void 0}},g),s.$instance=s._$instances[t],(u=(d=s.$instance)[i])===null||u===void 0||u.call(d,s,a,l,c),Oe._hook(t,i,s,a,l,c)};return{created:function(i,s,a,l){r("created",i,s,a,l)},beforeMount:function(i,s,a,l){var c,f,u,d,h,p=s==null||(c=s.instance)===null||c===void 0||(c=c.$primevue)===null||c===void 0?void 0:c.config;mh(void 0,{nonce:p==null||(f=p.csp)===null||f===void 0?void 0:f.nonce}),!((u=i.$instance)!==null&&u!==void 0&&u.isUnstyled)&&((d=i.$instance)===null||d===void 0||(d=d.$css)===null||d===void 0||d.loadStyle(void 0,{nonce:p==null||(h=p.csp)===null||h===void 0?void 0:h.nonce})),r("beforeMount",i,s,a,l)},mounted:function(i,s,a,l){r("mounted",i,s,a,l)},beforeUpdate:function(i,s,a,l){r("beforeUpdate",i,s,a,l)},updated:function(i,s,a,l){r("updated",i,s,a,l)},beforeUnmount:function(i,s,a,l){r("beforeUnmount",i,s,a,l)},unmounted:function(i,s,a,l){r("unmounted",i,s,a,l)}}},extend:function(){var t=Oe._getMeta.apply(Oe,arguments),n=Ku(t,2),r=n[0],o=n[1];return tt({extend:function(){var s=Oe._getMeta.apply(Oe,arguments),a=Ku(s,2),l=a[0],c=a[1];return Oe.extend(l,tt(tt(tt({},o),o==null?void 0:o.methods),c))}},Oe._extend(r,o))}},Bv=`
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Nv={root:"p-ink"},Uv=er(Bv,{name:"ripple",manual:!0}),Mv=Uv.load,Hv=Oe.extend({css:{classes:Nv,loadStyle:Mv}});function Fv(e){return Kv(e)||Vv(e)||jv(e)||Dv()}function Dv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jv(e,t){if(e){if(typeof e=="string")return ml(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ml(e,t)}}function Vv(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Kv(e){if(Array.isArray(e))return ml(e)}function ml(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var wh=Hv.extend("ripple",{mounted:function(t,n){var r=n.instance.$primevue;if(r&&r.config&&r.config.ripple){var o;t.unstyled=r.config.unstyled||((o=n.value)===null||o===void 0?void 0:o.unstyled)||!1,this.create(t),this.bindEvents(t)}t.setAttribute("data-pd-ripple",!0)},unmounted:function(t){this.remove(t)},timeout:void 0,methods:{bindEvents:function(t){t.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(t){t.removeEventListener("mousedown",this.onMouseDown.bind(this))},create:function(t){var n=se.createElement("span",{role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!t.unstyled&&this.cx("root"),onAnimationEnd:this.onAnimationEnd,"p-bind":this.ptm("root")});t.appendChild(n),this.$el=n},remove:function(t){var n=this.getInk(t);n&&(this.unbindEvents(t),n.removeEventListener("animationend",this.onAnimationEnd),n.remove())},onMouseDown:function(t){var n=t.currentTarget,r=this.getInk(n);if(!(!r||getComputedStyle(r,null).display==="none")){if(!n.unstyled&&se.removeClass(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"),!se.getHeight(r)&&!se.getWidth(r)){var o=Math.max(se.getOuterWidth(n),se.getOuterHeight(n));r.style.height=o+"px",r.style.width=o+"px"}var i=se.getOffset(n),s=t.pageX-i.left+document.body.scrollTop-se.getWidth(r)/2,a=t.pageY-i.top+document.body.scrollLeft-se.getHeight(r)/2;r.style.top=a+"px",r.style.left=s+"px",!n.unstyled&&se.addClass(r,"p-ink-active"),r.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){r&&(!n.unstyled&&se.removeClass(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(t){this.timeout&&clearTimeout(this.timeout),!t.currentTarget.unstyled&&se.removeClass(t.currentTarget,"p-ink-active"),t.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(t){return t&&t.children?Fv(t.children).find(function(n){return se.getAttribute(n,"data-pc-name")==="ripple"}):void 0}}});function ei(e){"@babel/helpers - typeof";return ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ei(e)}function En(e,t,n){return t=qv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qv(e){var t=zv(e,"string");return ei(t)==="symbol"?t:String(t)}function zv(e,t){if(ei(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ei(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Wv={root:function(t){var n,r=t.instance,o=t.props;return["p-button p-component",(n={"p-button-icon-only":r.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-disabled":r.$attrs.disabled||r.$attrs.disabled===""||o.loading,"p-button-loading":o.loading,"p-button-loading-label-only":o.loading&&!r.hasIcon&&o.label,"p-button-link":o.link},En(n,"p-button-".concat(o.severity),o.severity),En(n,"p-button-raised",o.raised),En(n,"p-button-rounded",o.rounded),En(n,"p-button-text",o.text),En(n,"p-button-outlined",o.outlined),En(n,"p-button-sm",o.size==="small"),En(n,"p-button-lg",o.size==="large"),En(n,"p-button-plain",o.plain),n)]},loadingIcon:"p-button-loading-icon pi-spin",icon:function(t){var n=t.props;return["p-button-icon",{"p-button-icon-left":n.iconPos==="left"&&n.label,"p-button-icon-right":n.iconPos==="right"&&n.label,"p-button-icon-top":n.iconPos==="top"&&n.label,"p-button-icon-bottom":n.iconPos==="bottom"&&n.label}]},label:"p-button-label"},Qv={name:"BaseButton",extends:zs,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},css:{classes:Wv},provide:function(){return{$parentInstance:this}}},Lo={name:"Button",extends:Qv,methods:{getPTOptions:function(t){var n,r;return this.ptm(t,{parent:{props:(n=this.$parent)===null||n===void 0?void 0:n.$props,state:(r=this.$parent)===null||r===void 0?void 0:r.$data},context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs["aria-label"]},hasIcon:function(){return this.icon||this.$slots.icon}},components:{SpinnerIcon:vh,Badge:bh},directives:{ripple:wh}},Gv=["aria-label","disabled","data-pc-severity"];function Zv(e,t,n,r,o,i){var s=so("SpinnerIcon"),a=so("Badge"),l=Za("ripple");return es((Ce(),Qe("button",ve({class:e.cx("root"),type:"button","aria-label":i.defaultAriaLabel,disabled:i.disabled},i.getPTOptions("root"),{"data-pc-name":"button","data-pc-severity":e.severity}),[ht(e.$slots,"default",{},function(){return[e.loading?ht(e.$slots,"loadingicon",{key:0,class:Gn([e.cx("loadingIcon"),e.cx("icon")])},function(){return[e.loadingIcon?(Ce(),Qe("span",ve({key:0,class:[e.cx("loadingIcon"),e.cx("icon"),e.loadingIcon]},e.ptm("loadingIcon")),null,16)):(Ce(),Ft(s,ve({key:1,class:[e.cx("loadingIcon"),e.cx("icon")],spin:""},e.ptm("loadingIcon")),null,16,["class"]))]}):ht(e.$slots,"icon",{key:1,class:Gn([e.cx("icon")])},function(){return[e.icon?(Ce(),Qe("span",ve({key:0,class:[e.cx("icon"),e.icon,e.iconClass]},e.ptm("icon")),null,16)):Bt("",!0)]}),Pe("span",ve({class:e.cx("label")},e.ptm("label")),us(e.label||" "),17),e.badge?(Ce(),Ft(a,ve({key:2,value:e.badge,class:e.badgeClass,unstyled:e.unstyled},e.ptm("badge")),null,16,["value","class","unstyled"])):Bt("",!0)]})],16,Gv)),[[l]])}Lo.render=Zv;const wt={auth:{login:"login"},home:"home",user:{feed:"userFeed"},search:"search",query:"query",settings:"settings",tags:{display:"tagDisplay"},events:{display:"displayEvent"},profile:{display:"displayProfile"}};function xh(e){return Jf()?(Ig(e),!0):!1}function hc(e){return typeof e=="function"?e():Me(e)}const Yv=typeof window<"u"&&typeof document<"u",Jv=Object.prototype.toString,Xv=e=>Jv.call(e)==="[object Object]",e1=()=>{};function t1(e,t){function n(...r){return new Promise((o,i)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(o).catch(i)})}return n}const Eh=e=>e();function n1(e=Eh){const t=Re(!0);function n(){t.value=!1}function r(){t.value=!0}const o=(...i)=>{t.value&&e(...i)};return{isActive:Ns(t),pause:n,resume:r,eventFilter:o}}function r1(e,t,n={}){const{eventFilter:r=Eh,...o}=n;return Ht(e,t1(r,t),o)}function o1(e,t,n={}){const{eventFilter:r,...o}=n,{eventFilter:i,pause:s,resume:a,isActive:l}=n1(r);return{stop:r1(e,t,{...o,eventFilter:i}),pause:s,resume:a,isActive:l}}function yl(e){var t;const n=hc(e);return(t=n==null?void 0:n.$el)!=null?t:n}const ti=Yv?window:void 0;function Ho(...e){let t,n,r,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,o]=e,t=ti):[t,n,r,o]=e,!t)return e1;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],s=()=>{i.forEach(f=>f()),i.length=0},a=(f,u,d,h)=>(f.addEventListener(u,d,h),()=>f.removeEventListener(u,d,h)),l=Ht(()=>[yl(t),hc(o)],([f,u])=>{if(s(),!f)return;const d=Xv(u)?{...u}:u;i.push(...n.flatMap(h=>r.map(p=>a(f,h,p,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),s()};return xh(c),c}function i1(){const e=Re(!1);return Rr()&&xi(()=>{e.value=!0}),e}function _h(e){const t=i1();return ut(()=>(t.value,!!e()))}const Fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Di="__vueuse_ssr_handlers__",s1=a1();function a1(){return Di in Fi||(Fi[Di]=Fi[Di]||{}),Fi[Di]}function l1(e,t){return s1[e]||t}function c1(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const u1={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Wu="vueuse-storage";function f1(e,t,n,r={}){var o;const{flush:i="pre",deep:s=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:f,window:u=ti,eventFilter:d,onError:h=E=>{console.error(E)}}=r,p=(f?md:Re)(t);if(!n)try{n=l1("getDefaultStorage",()=>{var E;return(E=ti)==null?void 0:E.localStorage})()}catch(E){h(E)}if(!n)return p;const g=hc(t),m=c1(g),y=(o=r.serializer)!=null?o:u1[m],{pause:x,resume:w}=o1(p,()=>A(p.value),{flush:i,deep:s,eventFilter:d});return u&&a&&(Ho(u,"storage",R),Ho(u,Wu,S)),R(),p;function A(E){try{if(E==null)n.removeItem(e);else{const k=y.write(E),U=n.getItem(e);U!==k&&(n.setItem(e,k),u&&u.dispatchEvent(new CustomEvent(Wu,{detail:{key:e,oldValue:U,newValue:k,storageArea:n}})))}}catch(k){h(k)}}function _(E){const k=E?E.newValue:n.getItem(e);if(k==null)return l&&g!==null&&n.setItem(e,y.write(g)),g;if(!E&&c){const U=y.read(k);return typeof c=="function"?c(U,g):m==="object"&&!Array.isArray(U)?{...g,...U}:U}else return typeof k!="string"?k:y.read(k)}function S(E){R(E.detail)}function R(E){if(!(E&&E.storageArea!==n)){if(E&&E.key==null){p.value=g;return}if(!(E&&E.key!==e)){x();try{(E==null?void 0:E.newValue)!==y.write(p.value)&&(p.value=_(E))}catch(k){h(k)}finally{E?Ms(w):w()}}}}}function u8(e,t,n={}){const{window:r=ti,...o}=n;let i;const s=_h(()=>r&&"ResizeObserver"in r),a=()=>{i&&(i.disconnect(),i=void 0)},l=ut(()=>Array.isArray(e)?e.map(u=>yl(u)):[yl(e)]),c=Ht(l,u=>{if(a(),s.value&&r){i=new ResizeObserver(t);for(const d of u)d&&i.observe(d,o)}},{immediate:!0,flush:"post",deep:!0}),f=()=>{a(),c()};return xh(f),{isSupported:s,stop:f}}function d1(e={}){const{window:t=ti}=e,n=t==null?void 0:t.navigator,r=_h(()=>n&&"connection"in n),o=Re(!0),i=Re(!1),s=Re(void 0),a=Re(void 0),l=Re(void 0),c=Re(void 0),f=Re(void 0),u=Re(void 0),d=Re("unknown"),h=r.value&&n.connection;function p(){n&&(o.value=n.onLine,s.value=o.value?void 0:Date.now(),a.value=o.value?Date.now():void 0,h&&(l.value=h.downlink,c.value=h.downlinkMax,u.value=h.effectiveType,f.value=h.rtt,i.value=h.saveData,d.value=h.type))}return t&&(Ho(t,"offline",()=>{o.value=!1,s.value=Date.now()}),Ho(t,"online",()=>{o.value=!0,a.value=Date.now()})),h&&Ho(h,"change",p,!1),p(),{isSupported:r,isOnline:o,saveData:i,offlineAt:s,onlineAt:a,downlink:l,downlinkMax:c,effectiveType:u,rtt:f,type:d}}function h1(e={}){const{isOnline:t}=d1(e);return t}var ni={};Object.defineProperty(ni,"__esModule",{value:!0});ni.bech32m=bl=ni.bech32=void 0;const Es="qpzry9x8gf2tvdw0s3jn54khce6mua7l",Sh={};for(let e=0;e<Es.length;e++){const t=Es.charAt(e);Sh[t]=e}function Wr(e){const t=e>>25;return(e&33554431)<<5^-(t>>0&1)&996825010^-(t>>1&1)&642813549^-(t>>2&1)&513874426^-(t>>3&1)&1027748829^-(t>>4&1)&705979059}function Qu(e){let t=1;for(let n=0;n<e.length;++n){const r=e.charCodeAt(n);if(r<33||r>126)return"Invalid prefix ("+e+")";t=Wr(t)^r>>5}t=Wr(t);for(let n=0;n<e.length;++n){const r=e.charCodeAt(n);t=Wr(t)^r&31}return t}function pc(e,t,n,r){let o=0,i=0;const s=(1<<n)-1,a=[];for(let l=0;l<e.length;++l)for(o=o<<t|e[l],i+=t;i>=n;)i-=n,a.push(o>>i&s);if(r)i>0&&a.push(o<<n-i&s);else{if(i>=t)return"Excess padding";if(o<<n-i&s)return"Non-zero padding"}return a}function p1(e){return pc(e,8,5,!0)}function g1(e){const t=pc(e,5,8,!1);if(Array.isArray(t))return t}function m1(e){const t=pc(e,5,8,!1);if(Array.isArray(t))return t;throw new Error(t)}function Ch(e){let t;e==="bech32"?t=1:t=734539939;function n(s,a,l){if(l=l||90,s.length+7+a.length>l)throw new TypeError("Exceeds length limit");s=s.toLowerCase();let c=Qu(s);if(typeof c=="string")throw new Error(c);let f=s+"1";for(let u=0;u<a.length;++u){const d=a[u];if(d>>5)throw new Error("Non 5-bit word");c=Wr(c)^d,f+=Es.charAt(d)}for(let u=0;u<6;++u)c=Wr(c);c^=t;for(let u=0;u<6;++u){const d=c>>(5-u)*5&31;f+=Es.charAt(d)}return f}function r(s,a){if(a=a||90,s.length<8)return s+" too short";if(s.length>a)return"Exceeds length limit";const l=s.toLowerCase(),c=s.toUpperCase();if(s!==l&&s!==c)return"Mixed-case string "+s;s=l;const f=s.lastIndexOf("1");if(f===-1)return"No separator character for "+s;if(f===0)return"Missing prefix for "+s;const u=s.slice(0,f),d=s.slice(f+1);if(d.length<6)return"Data too short";let h=Qu(u);if(typeof h=="string")return h;const p=[];for(let g=0;g<d.length;++g){const m=d.charAt(g),y=Sh[m];if(y===void 0)return"Unknown character "+m;h=Wr(h)^y,!(g+6>=d.length)&&p.push(y)}return h!==t?"Invalid checksum for "+s:{prefix:u,words:p}}function o(s,a){const l=r(s,a);if(typeof l=="object")return l}function i(s,a){const l=r(s,a);if(typeof l=="object")return l;throw new Error(l)}return{decodeUnsafe:o,decode:i,encode:n,toWords:p1,fromWordsUnsafe:g1,fromWords:m1}}var bl=ni.bech32=Ch("bech32");ni.bech32m=Ch("bech32m");const Ca=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const gc=e=>e instanceof Uint8Array,$r=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),Vt=(e,t)=>e<<32-t|e>>>t,y1=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!y1)throw new Error("Non little-endian hardware is not supported");const b1=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function v1(e){if(!gc(e))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=b1[e[n]];return t}function w1(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);const t=e.length;if(t%2)throw new Error("padded hex string expected, got unpadded hex of length "+t);const n=new Uint8Array(t/2);for(let r=0;r<n.length;r++){const o=r*2,i=e.slice(o,o+2),s=Number.parseInt(i,16);if(Number.isNaN(s)||s<0)throw new Error("Invalid byte sequence");n[r]=s}return n}function Ah(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function ri(e){if(typeof e=="string"&&(e=Ah(e)),!gc(e))throw new Error(`expected Uint8Array, got ${typeof e}`);return e}function ji(...e){const t=new Uint8Array(e.reduce((r,o)=>r+o.length,0));let n=0;return e.forEach(r=>{if(!gc(r))throw new Error("Uint8Array expected");t.set(r,n),n+=r.length}),t}let $h=class{clone(){return this._cloneInto()}};const x1={}.toString;function E1(e,t){if(t!==void 0&&x1.call(t)!=="[object Object]")throw new Error("Options should be object or undefined");return Object.assign(e,t)}function mc(e){const t=r=>e().update(ri(r)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function _1(e=32){if(Ca&&typeof Ca.getRandomValues=="function")return Ca.getRandomValues(new Uint8Array(e));throw new Error("crypto.getRandomValues must be defined")}function vl(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function S1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function kh(e,...t){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function C1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");vl(e.outputLen),vl(e.blockLen)}function A1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function $1(e,t){kh(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const gr={number:vl,bool:S1,bytes:kh,hash:C1,exists:A1,output:$1},Aa=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Ih=e=>e instanceof Uint8Array,$a=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),Kt=(e,t)=>e<<32-t|e>>>t,k1=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!k1)throw new Error("Non little-endian hardware is not supported");Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function I1(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function yc(e){if(typeof e=="string"&&(e=I1(e)),!Ih(e))throw new Error(`expected Uint8Array, got ${typeof e}`);return e}function O1(...e){const t=new Uint8Array(e.reduce((r,o)=>r+o.length,0));let n=0;return e.forEach(r=>{if(!Ih(r))throw new Error("Uint8Array expected");t.set(r,n),n+=r.length}),t}let Oh=class{clone(){return this._cloneInto()}};function Th(e){const t=r=>e().update(yc(r)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function Ph(e=32){if(Aa&&typeof Aa.getRandomValues=="function")return Aa.getRandomValues(new Uint8Array(e));throw new Error("crypto.getRandomValues must be defined")}function T1(e,t,n,r){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,r);const o=BigInt(32),i=BigInt(4294967295),s=Number(n>>o&i),a=Number(n&i),l=r?4:0,c=r?0:4;e.setUint32(t+l,s,r),e.setUint32(t+c,a,r)}let P1=class extends Oh{constructor(t,n,r,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=$a(this.buffer)}update(t){gr.exists(this);const{view:n,buffer:r,blockLen:o}=this;t=yc(t);const i=t.length;for(let s=0;s<i;){const a=Math.min(o-this.pos,i-s);if(a===o){const l=$a(t);for(;o<=i-s;s+=o)this.process(l,s);continue}r.set(t.subarray(s,s+a),this.pos),this.pos+=a,s+=a,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){gr.exists(this),gr.output(t,this),this.finished=!0;const{buffer:n,view:r,blockLen:o,isLE:i}=this;let{pos:s}=this;n[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>o-s&&(this.process(r,0),s=0);for(let u=s;u<o;u++)n[u]=0;T1(r,o-8,BigInt(this.length*8),i),this.process(r,0);const a=$a(t),l=this.outputLen;if(l%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const c=l/4,f=this.get();if(c>f.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<c;u++)a.setUint32(4*u,f[u],i)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const r=t.slice(0,n);return this.destroy(),r}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:r,length:o,finished:i,destroyed:s,pos:a}=this;return t.length=o,t.pos=a,t.finished=i,t.destroyed=s,o%n&&t.buffer.set(r),t}};const L1=(e,t,n)=>e&t^~e&n,R1=(e,t,n)=>e&t^e&n^t&n,B1=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),_n=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Sn=new Uint32Array(64);let Lh=class extends P1{constructor(){super(64,32,8,!1),this.A=_n[0]|0,this.B=_n[1]|0,this.C=_n[2]|0,this.D=_n[3]|0,this.E=_n[4]|0,this.F=_n[5]|0,this.G=_n[6]|0,this.H=_n[7]|0}get(){const{A:t,B:n,C:r,D:o,E:i,F:s,G:a,H:l}=this;return[t,n,r,o,i,s,a,l]}set(t,n,r,o,i,s,a,l){this.A=t|0,this.B=n|0,this.C=r|0,this.D=o|0,this.E=i|0,this.F=s|0,this.G=a|0,this.H=l|0}process(t,n){for(let u=0;u<16;u++,n+=4)Sn[u]=t.getUint32(n,!1);for(let u=16;u<64;u++){const d=Sn[u-15],h=Sn[u-2],p=Kt(d,7)^Kt(d,18)^d>>>3,g=Kt(h,17)^Kt(h,19)^h>>>10;Sn[u]=g+Sn[u-7]+p+Sn[u-16]|0}let{A:r,B:o,C:i,D:s,E:a,F:l,G:c,H:f}=this;for(let u=0;u<64;u++){const d=Kt(a,6)^Kt(a,11)^Kt(a,25),h=f+d+L1(a,l,c)+B1[u]+Sn[u]|0,g=(Kt(r,2)^Kt(r,13)^Kt(r,22))+R1(r,o,i)|0;f=c,c=l,l=a,a=s+h|0,s=i,i=o,o=r,r=h+g|0}r=r+this.A|0,o=o+this.B|0,i=i+this.C|0,s=s+this.D|0,a=a+this.E|0,l=l+this.F|0,c=c+this.G|0,f=f+this.H|0,this.set(r,o,i,s,a,l,c,f)}roundClean(){Sn.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},N1=class extends Lh{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}};const wl=Th(()=>new Lh);Th(()=>new N1);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Rh=BigInt(0),Qs=BigInt(1),U1=BigInt(2),Gs=e=>e instanceof Uint8Array,M1=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function fo(e){if(!Gs(e))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=M1[e[n]];return t}function Bh(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function bc(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return BigInt(e===""?"0":`0x${e}`)}function ho(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);const t=e.length;if(t%2)throw new Error("padded hex string expected, got unpadded hex of length "+t);const n=new Uint8Array(t/2);for(let r=0;r<n.length;r++){const o=r*2,i=e.slice(o,o+2),s=Number.parseInt(i,16);if(Number.isNaN(s)||s<0)throw new Error("Invalid byte sequence");n[r]=s}return n}function gt(e){return bc(fo(e))}function vc(e){if(!Gs(e))throw new Error("Uint8Array expected");return bc(fo(Uint8Array.from(e).reverse()))}function Wn(e,t){return ho(e.toString(16).padStart(t*2,"0"))}function Nh(e,t){return Wn(e,t).reverse()}function H1(e){return ho(Bh(e))}function et(e,t,n){let r;if(typeof t=="string")try{r=ho(t)}catch(i){throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${i}`)}else if(Gs(t))r=Uint8Array.from(t);else throw new Error(`${e} must be hex string or Uint8Array`);const o=r.length;if(typeof n=="number"&&o!==n)throw new Error(`${e} expected ${n} bytes, got ${o}`);return r}function Tr(...e){const t=new Uint8Array(e.reduce((r,o)=>r+o.length,0));let n=0;return e.forEach(r=>{if(!Gs(r))throw new Error("Uint8Array expected");t.set(r,n),n+=r.length}),t}function F1(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function D1(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function j1(e){let t;for(t=0;e>Rh;e>>=Qs,t+=1);return t}function V1(e,t){return e>>BigInt(t)&Qs}const K1=(e,t,n)=>e|(n?Qs:Rh)<<BigInt(t),wc=e=>(U1<<BigInt(e-1))-Qs,ka=e=>new Uint8Array(e),Gu=e=>Uint8Array.from(e);function Uh(e,t,n){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let r=ka(e),o=ka(e),i=0;const s=()=>{r.fill(1),o.fill(0),i=0},a=(...u)=>n(o,r,...u),l=(u=ka())=>{o=a(Gu([0]),u),r=a(),u.length!==0&&(o=a(Gu([1]),u),r=a())},c=()=>{if(i++>=1e3)throw new Error("drbg: tried 1000 values");let u=0;const d=[];for(;u<t;){r=a();const h=r.slice();d.push(h),u+=r.length}return Tr(...d)};return(u,d)=>{s(),l(u);let h;for(;!(h=d(c()));)l();return s(),h}}const q1={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function Ci(e,t,n={}){const r=(o,i,s)=>{const a=q1[i];if(typeof a!="function")throw new Error(`Invalid validator "${i}", expected function`);const l=e[o];if(!(s&&l===void 0)&&!a(l,e))throw new Error(`Invalid param ${String(o)}=${l} (${typeof l}), expected ${i}`)};for(const[o,i]of Object.entries(t))r(o,i,!1);for(const[o,i]of Object.entries(n))r(o,i,!0);return e}const z1=Object.freeze(Object.defineProperty({__proto__:null,bitGet:V1,bitLen:j1,bitMask:wc,bitSet:K1,bytesToHex:fo,bytesToNumberBE:gt,bytesToNumberLE:vc,concatBytes:Tr,createHmacDrbg:Uh,ensureBytes:et,equalBytes:F1,hexToBytes:ho,hexToNumber:bc,numberToBytesBE:Wn,numberToBytesLE:Nh,numberToHexUnpadded:Bh,numberToVarBytesBE:H1,utf8ToBytes:D1,validateObject:Ci},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Ze=BigInt(0),He=BigInt(1),ur=BigInt(2),W1=BigInt(3),xl=BigInt(4),Zu=BigInt(5),Yu=BigInt(8);BigInt(9);BigInt(16);function Ge(e,t){const n=e%t;return n>=Ze?n:t+n}function Q1(e,t,n){if(n<=Ze||t<Ze)throw new Error("Expected power/modulo > 0");if(n===He)return Ze;let r=He;for(;t>Ze;)t&He&&(r=r*e%n),e=e*e%n,t>>=He;return r}function St(e,t,n){let r=e;for(;t-- >Ze;)r*=r,r%=n;return r}function El(e,t){if(e===Ze||t<=Ze)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=Ge(e,t),r=t,o=Ze,i=He;for(;n!==Ze;){const a=r/n,l=r%n,c=o-i*a;r=n,n=l,o=i,i=c}if(r!==He)throw new Error("invert: does not exist");return Ge(o,t)}function G1(e){const t=(e-He)/ur;let n,r,o;for(n=e-He,r=0;n%ur===Ze;n/=ur,r++);for(o=ur;o<e&&Q1(o,t,e)!==e-He;o++);if(r===1){const s=(e+He)/xl;return function(l,c){const f=l.pow(c,s);if(!l.eql(l.sqr(f),c))throw new Error("Cannot find square root");return f}}const i=(n+He)/ur;return function(a,l){if(a.pow(l,t)===a.neg(a.ONE))throw new Error("Cannot find square root");let c=r,f=a.pow(a.mul(a.ONE,o),n),u=a.pow(l,i),d=a.pow(l,n);for(;!a.eql(d,a.ONE);){if(a.eql(d,a.ZERO))return a.ZERO;let h=1;for(let g=a.sqr(d);h<c&&!a.eql(g,a.ONE);h++)g=a.sqr(g);const p=a.pow(f,He<<BigInt(c-h-1));f=a.sqr(p),u=a.mul(u,p),d=a.mul(d,f),c=h}return u}}function Z1(e){if(e%xl===W1){const t=(e+He)/xl;return function(r,o){const i=r.pow(o,t);if(!r.eql(r.sqr(i),o))throw new Error("Cannot find square root");return i}}if(e%Yu===Zu){const t=(e-Zu)/Yu;return function(r,o){const i=r.mul(o,ur),s=r.pow(i,t),a=r.mul(o,s),l=r.mul(r.mul(a,ur),s),c=r.mul(a,r.sub(l,r.ONE));if(!r.eql(r.sqr(c),o))throw new Error("Cannot find square root");return c}}return G1(e)}const Y1=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function J1(e){const t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=Y1.reduce((r,o)=>(r[o]="function",r),t);return Ci(e,n)}function X1(e,t,n){if(n<Ze)throw new Error("Expected power > 0");if(n===Ze)return e.ONE;if(n===He)return t;let r=e.ONE,o=t;for(;n>Ze;)n&He&&(r=e.mul(r,o)),o=e.sqr(o),n>>=He;return r}function ew(e,t){const n=new Array(t.length),r=t.reduce((i,s,a)=>e.is0(s)?i:(n[a]=i,e.mul(i,s)),e.ONE),o=e.inv(r);return t.reduceRight((i,s,a)=>e.is0(s)?i:(n[a]=e.mul(i,n[a]),e.mul(i,s)),o),n}function xc(e,t){const n=t!==void 0?t:e.toString(2).length,r=Math.ceil(n/8);return{nBitLength:n,nByteLength:r}}function tw(e,t,n=!1,r={}){if(e<=Ze)throw new Error(`Expected Fp ORDER > 0, got ${e}`);const{nBitLength:o,nByteLength:i}=xc(e,t);if(i>2048)throw new Error("Field lengths over 2048 bytes are not supported");const s=Z1(e),a=Object.freeze({ORDER:e,BITS:o,BYTES:i,MASK:wc(o),ZERO:Ze,ONE:He,create:l=>Ge(l,e),isValid:l=>{if(typeof l!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof l}`);return Ze<=l&&l<e},is0:l=>l===Ze,isOdd:l=>(l&He)===He,neg:l=>Ge(-l,e),eql:(l,c)=>l===c,sqr:l=>Ge(l*l,e),add:(l,c)=>Ge(l+c,e),sub:(l,c)=>Ge(l-c,e),mul:(l,c)=>Ge(l*c,e),pow:(l,c)=>X1(a,l,c),div:(l,c)=>Ge(l*El(c,e),e),sqrN:l=>l*l,addN:(l,c)=>l+c,subN:(l,c)=>l-c,mulN:(l,c)=>l*c,inv:l=>El(l,e),sqrt:r.sqrt||(l=>s(a,l)),invertBatch:l=>ew(a,l),cmov:(l,c,f)=>f?c:l,toBytes:l=>n?Nh(l,i):Wn(l,i),fromBytes:l=>{if(l.length!==i)throw new Error(`Fp.fromBytes: expected ${i}, got ${l.length}`);return n?vc(l):gt(l)}});return Object.freeze(a)}function nw(e,t,n=!1){e=et("privateHash",e);const r=e.length,o=xc(t).nByteLength+8;if(o<24||r<o||r>1024)throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${r}`);const i=n?vc(e):gt(e);return Ge(i,t-He)+He}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const rw=BigInt(0),Ia=BigInt(1);function ow(e,t){const n=(o,i)=>{const s=i.negate();return o?s:i},r=o=>{const i=Math.ceil(t/o)+1,s=2**(o-1);return{windows:i,windowSize:s}};return{constTimeNegate:n,unsafeLadder(o,i){let s=e.ZERO,a=o;for(;i>rw;)i&Ia&&(s=s.add(a)),a=a.double(),i>>=Ia;return s},precomputeWindow(o,i){const{windows:s,windowSize:a}=r(i),l=[];let c=o,f=c;for(let u=0;u<s;u++){f=c,l.push(f);for(let d=1;d<a;d++)f=f.add(c),l.push(f);c=f.double()}return l},wNAF(o,i,s){const{windows:a,windowSize:l}=r(o);let c=e.ZERO,f=e.BASE;const u=BigInt(2**o-1),d=2**o,h=BigInt(o);for(let p=0;p<a;p++){const g=p*l;let m=Number(s&u);s>>=h,m>l&&(m-=d,s+=Ia);const y=g,x=g+Math.abs(m)-1,w=p%2!==0,A=m<0;m===0?f=f.add(n(w,i[y])):c=c.add(n(A,i[x]))}return{p:c,f}},wNAFCached(o,i,s,a){const l=o._WINDOW_SIZE||1;let c=i.get(o);return c||(c=this.precomputeWindow(o,l),l!==1&&i.set(o,a(c))),this.wNAF(l,c,s)}}}function Mh(e){return J1(e.Fp),Ci(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...xc(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function iw(e){const t=Mh(e);Ci(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:r,a:o}=t;if(n){if(!r.eql(o,r.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}const{bytesToNumberBE:sw,hexToBytes:aw}=z1,mr={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(e){const{Err:t}=mr;if(e.length<2||e[0]!==2)throw new t("Invalid signature integer tag");const n=e[1],r=e.subarray(2,n+2);if(!n||r.length!==n)throw new t("Invalid signature integer: wrong length");if(r[0]&128)throw new t("Invalid signature integer: negative");if(r[0]===0&&!(r[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:sw(r),l:e.subarray(n+2)}},toSig(e){const{Err:t}=mr,n=typeof e=="string"?aw(e):e;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let r=n.length;if(r<2||n[0]!=48)throw new t("Invalid signature tag");if(n[1]!==r-2)throw new t("Invalid signature: incorrect length");const{d:o,l:i}=mr._parseInt(n.subarray(2)),{d:s,l:a}=mr._parseInt(i);if(a.length)throw new t("Invalid signature: left bytes after parsing");return{r:o,s}},hexFromSig(e){const t=c=>Number.parseInt(c[0],16)&8?"00"+c:c,n=c=>{const f=c.toString(16);return f.length&1?`0${f}`:f},r=t(n(e.s)),o=t(n(e.r)),i=r.length/2,s=o.length/2,a=n(i),l=n(s);return`30${n(s+i+4)}02${l}${o}02${a}${r}`}},fn=BigInt(0),kt=BigInt(1);BigInt(2);const Ju=BigInt(3);BigInt(4);function lw(e){const t=iw(e),{Fp:n}=t,r=t.toBytes||((p,g,m)=>{const y=g.toAffine();return Tr(Uint8Array.from([4]),n.toBytes(y.x),n.toBytes(y.y))}),o=t.fromBytes||(p=>{const g=p.subarray(1),m=n.fromBytes(g.subarray(0,n.BYTES)),y=n.fromBytes(g.subarray(n.BYTES,2*n.BYTES));return{x:m,y}});function i(p){const{a:g,b:m}=t,y=n.sqr(p),x=n.mul(y,p);return n.add(n.add(x,n.mul(p,g)),m)}if(!n.eql(n.sqr(t.Gy),i(t.Gx)))throw new Error("bad generator point: equation left != right");function s(p){return typeof p=="bigint"&&fn<p&&p<t.n}function a(p){if(!s(p))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function l(p){const{allowedPrivateKeyLengths:g,nByteLength:m,wrapPrivateKey:y,n:x}=t;if(g&&typeof p!="bigint"){if(p instanceof Uint8Array&&(p=fo(p)),typeof p!="string"||!g.includes(p.length))throw new Error("Invalid key");p=p.padStart(m*2,"0")}let w;try{w=typeof p=="bigint"?p:gt(et("private key",p,m))}catch{throw new Error(`private key must be ${m} bytes, hex or bigint, not ${typeof p}`)}return y&&(w=Ge(w,x)),a(w),w}const c=new Map;function f(p){if(!(p instanceof u))throw new Error("ProjectivePoint expected")}class u{constructor(g,m,y){if(this.px=g,this.py=m,this.pz=y,g==null||!n.isValid(g))throw new Error("x required");if(m==null||!n.isValid(m))throw new Error("y required");if(y==null||!n.isValid(y))throw new Error("z required")}static fromAffine(g){const{x:m,y}=g||{};if(!g||!n.isValid(m)||!n.isValid(y))throw new Error("invalid affine point");if(g instanceof u)throw new Error("projective point not allowed");const x=w=>n.eql(w,n.ZERO);return x(m)&&x(y)?u.ZERO:new u(m,y,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(g){const m=n.invertBatch(g.map(y=>y.pz));return g.map((y,x)=>y.toAffine(m[x])).map(u.fromAffine)}static fromHex(g){const m=u.fromAffine(o(et("pointHex",g)));return m.assertValidity(),m}static fromPrivateKey(g){return u.BASE.multiply(l(g))}_setWindowSize(g){this._WINDOW_SIZE=g,c.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x:g,y:m}=this.toAffine();if(!n.isValid(g)||!n.isValid(m))throw new Error("bad point: x or y not FE");const y=n.sqr(m),x=i(g);if(!n.eql(y,x))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:g}=this.toAffine();if(n.isOdd)return!n.isOdd(g);throw new Error("Field doesn't support isOdd")}equals(g){f(g);const{px:m,py:y,pz:x}=this,{px:w,py:A,pz:_}=g,S=n.eql(n.mul(m,_),n.mul(w,x)),R=n.eql(n.mul(y,_),n.mul(A,x));return S&&R}negate(){return new u(this.px,n.neg(this.py),this.pz)}double(){const{a:g,b:m}=t,y=n.mul(m,Ju),{px:x,py:w,pz:A}=this;let _=n.ZERO,S=n.ZERO,R=n.ZERO,E=n.mul(x,x),k=n.mul(w,w),U=n.mul(A,A),N=n.mul(x,w);return N=n.add(N,N),R=n.mul(x,A),R=n.add(R,R),_=n.mul(g,R),S=n.mul(y,U),S=n.add(_,S),_=n.sub(k,S),S=n.add(k,S),S=n.mul(_,S),_=n.mul(N,_),R=n.mul(y,R),U=n.mul(g,U),N=n.sub(E,U),N=n.mul(g,N),N=n.add(N,R),R=n.add(E,E),E=n.add(R,E),E=n.add(E,U),E=n.mul(E,N),S=n.add(S,E),U=n.mul(w,A),U=n.add(U,U),E=n.mul(U,N),_=n.sub(_,E),R=n.mul(U,k),R=n.add(R,R),R=n.add(R,R),new u(_,S,R)}add(g){f(g);const{px:m,py:y,pz:x}=this,{px:w,py:A,pz:_}=g;let S=n.ZERO,R=n.ZERO,E=n.ZERO;const k=t.a,U=n.mul(t.b,Ju);let N=n.mul(m,w),O=n.mul(y,A),Q=n.mul(x,_),te=n.add(m,y),I=n.add(w,A);te=n.mul(te,I),I=n.add(N,O),te=n.sub(te,I),I=n.add(m,x);let T=n.add(w,_);return I=n.mul(I,T),T=n.add(N,Q),I=n.sub(I,T),T=n.add(y,x),S=n.add(A,_),T=n.mul(T,S),S=n.add(O,Q),T=n.sub(T,S),E=n.mul(k,I),S=n.mul(U,Q),E=n.add(S,E),S=n.sub(O,E),E=n.add(O,E),R=n.mul(S,E),O=n.add(N,N),O=n.add(O,N),Q=n.mul(k,Q),I=n.mul(U,I),O=n.add(O,Q),Q=n.sub(N,Q),Q=n.mul(k,Q),I=n.add(I,Q),N=n.mul(O,I),R=n.add(R,N),N=n.mul(T,I),S=n.mul(te,S),S=n.sub(S,N),N=n.mul(te,O),E=n.mul(T,E),E=n.add(E,N),new u(S,R,E)}subtract(g){return this.add(g.negate())}is0(){return this.equals(u.ZERO)}wNAF(g){return h.wNAFCached(this,c,g,m=>{const y=n.invertBatch(m.map(x=>x.pz));return m.map((x,w)=>x.toAffine(y[w])).map(u.fromAffine)})}multiplyUnsafe(g){const m=u.ZERO;if(g===fn)return m;if(a(g),g===kt)return this;const{endo:y}=t;if(!y)return h.unsafeLadder(this,g);let{k1neg:x,k1:w,k2neg:A,k2:_}=y.splitScalar(g),S=m,R=m,E=this;for(;w>fn||_>fn;)w&kt&&(S=S.add(E)),_&kt&&(R=R.add(E)),E=E.double(),w>>=kt,_>>=kt;return x&&(S=S.negate()),A&&(R=R.negate()),R=new u(n.mul(R.px,y.beta),R.py,R.pz),S.add(R)}multiply(g){a(g);let m=g,y,x;const{endo:w}=t;if(w){const{k1neg:A,k1:_,k2neg:S,k2:R}=w.splitScalar(m);let{p:E,f:k}=this.wNAF(_),{p:U,f:N}=this.wNAF(R);E=h.constTimeNegate(A,E),U=h.constTimeNegate(S,U),U=new u(n.mul(U.px,w.beta),U.py,U.pz),y=E.add(U),x=k.add(N)}else{const{p:A,f:_}=this.wNAF(m);y=A,x=_}return u.normalizeZ([y,x])[0]}multiplyAndAddUnsafe(g,m,y){const x=u.BASE,w=(_,S)=>S===fn||S===kt||!_.equals(x)?_.multiplyUnsafe(S):_.multiply(S),A=w(this,m).add(w(g,y));return A.is0()?void 0:A}toAffine(g){const{px:m,py:y,pz:x}=this,w=this.is0();g==null&&(g=w?n.ONE:n.inv(x));const A=n.mul(m,g),_=n.mul(y,g),S=n.mul(x,g);if(w)return{x:n.ZERO,y:n.ZERO};if(!n.eql(S,n.ONE))throw new Error("invZ was invalid");return{x:A,y:_}}isTorsionFree(){const{h:g,isTorsionFree:m}=t;if(g===kt)return!0;if(m)return m(u,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:g,clearCofactor:m}=t;return g===kt?this:m?m(u,this):this.multiplyUnsafe(t.h)}toRawBytes(g=!0){return this.assertValidity(),r(u,this,g)}toHex(g=!0){return fo(this.toRawBytes(g))}}u.BASE=new u(t.Gx,t.Gy,n.ONE),u.ZERO=new u(n.ZERO,n.ONE,n.ZERO);const d=t.nBitLength,h=ow(u,t.endo?Math.ceil(d/2):d);return{CURVE:t,ProjectivePoint:u,normPrivateKeyToScalar:l,weierstrassEquation:i,isWithinCurveOrder:s}}function cw(e){const t=Mh(e);return Ci(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function uw(e){const t=cw(e),{Fp:n,n:r}=t,o=n.BYTES+1,i=2*n.BYTES+1;function s(I){return fn<I&&I<n.ORDER}function a(I){return Ge(I,r)}function l(I){return El(I,r)}const{ProjectivePoint:c,normPrivateKeyToScalar:f,weierstrassEquation:u,isWithinCurveOrder:d}=lw({...t,toBytes(I,T,M){const j=T.toAffine(),D=n.toBytes(j.x),ne=Tr;return M?ne(Uint8Array.from([T.hasEvenY()?2:3]),D):ne(Uint8Array.from([4]),D,n.toBytes(j.y))},fromBytes(I){const T=I.length,M=I[0],j=I.subarray(1);if(T===o&&(M===2||M===3)){const D=gt(j);if(!s(D))throw new Error("Point is not on curve");const ne=u(D);let ae=n.sqrt(ne);const re=(ae&kt)===kt;return(M&1)===1!==re&&(ae=n.neg(ae)),{x:D,y:ae}}else if(T===i&&M===4){const D=n.fromBytes(j.subarray(0,n.BYTES)),ne=n.fromBytes(j.subarray(n.BYTES,2*n.BYTES));return{x:D,y:ne}}else throw new Error(`Point of length ${T} was invalid. Expected ${o} compressed bytes or ${i} uncompressed bytes`)}}),h=I=>fo(Wn(I,t.nByteLength));function p(I){const T=r>>kt;return I>T}function g(I){return p(I)?a(-I):I}const m=(I,T,M)=>gt(I.slice(T,M));class y{constructor(T,M,j){this.r=T,this.s=M,this.recovery=j,this.assertValidity()}static fromCompact(T){const M=t.nByteLength;return T=et("compactSignature",T,M*2),new y(m(T,0,M),m(T,M,2*M))}static fromDER(T){const{r:M,s:j}=mr.toSig(et("DER",T));return new y(M,j)}assertValidity(){if(!d(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!d(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(T){return new y(this.r,this.s,T)}recoverPublicKey(T){const{r:M,s:j,recovery:D}=this,ne=R(et("msgHash",T));if(D==null||![0,1,2,3].includes(D))throw new Error("recovery id invalid");const ae=D===2||D===3?M+t.n:M;if(ae>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const re=D&1?"03":"02",we=c.fromHex(re+h(ae)),Le=l(ae),ze=a(-ne*Le),Ue=a(j*Le),$=c.BASE.multiplyAndAddUnsafe(we,ze,Ue);if(!$)throw new Error("point at infinify");return $.assertValidity(),$}hasHighS(){return p(this.s)}normalizeS(){return this.hasHighS()?new y(this.r,a(-this.s),this.recovery):this}toDERRawBytes(){return ho(this.toDERHex())}toDERHex(){return mr.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return ho(this.toCompactHex())}toCompactHex(){return h(this.r)+h(this.s)}}const x={isValidPrivateKey(I){try{return f(I),!0}catch{return!1}},normPrivateKeyToScalar:f,randomPrivateKey:()=>{const I=t.randomBytes(n.BYTES+8),T=nw(I,r);return Wn(T,t.nByteLength)},precompute(I=8,T=c.BASE){return T._setWindowSize(I),T.multiply(BigInt(3)),T}};function w(I,T=!0){return c.fromPrivateKey(I).toRawBytes(T)}function A(I){const T=I instanceof Uint8Array,M=typeof I=="string",j=(T||M)&&I.length;return T?j===o||j===i:M?j===2*o||j===2*i:I instanceof c}function _(I,T,M=!0){if(A(I))throw new Error("first arg must be private key");if(!A(T))throw new Error("second arg must be public key");return c.fromHex(T).multiply(f(I)).toRawBytes(M)}const S=t.bits2int||function(I){const T=gt(I),M=I.length*8-t.nBitLength;return M>0?T>>BigInt(M):T},R=t.bits2int_modN||function(I){return a(S(I))},E=wc(t.nBitLength);function k(I){if(typeof I!="bigint")throw new Error("bigint expected");if(!(fn<=I&&I<E))throw new Error(`bigint expected < 2^${t.nBitLength}`);return Wn(I,t.nByteLength)}function U(I,T,M=N){if(["recovered","canonical"].some(K=>K in M))throw new Error("sign() legacy options not supported");const{hash:j,randomBytes:D}=t;let{lowS:ne,prehash:ae,extraEntropy:re}=M;ne==null&&(ne=!0),I=et("msgHash",I),ae&&(I=et("prehashed msgHash",j(I)));const we=R(I),Le=f(T),ze=[k(Le),k(we)];if(re!=null){const K=re===!0?D(n.BYTES):re;ze.push(et("extraEntropy",K,n.BYTES))}const Ue=Tr(...ze),$=we;function z(K){const Z=S(K);if(!d(Z))return;const fe=l(Z),xe=c.BASE.multiply(Z).toAffine(),b=a(xe.x);if(b===fn)return;const v=a(fe*a($+b*Le));if(v===fn)return;let C=(xe.x===b?0:2)|Number(xe.y&kt),B=v;return ne&&p(v)&&(B=g(v),C^=1),new y(b,B,C)}return{seed:Ue,k2sig:z}}const N={lowS:t.lowS,prehash:!1},O={lowS:t.lowS,prehash:!1};function Q(I,T,M=N){const{seed:j,k2sig:D}=U(I,T,M),ne=t;return Uh(ne.hash.outputLen,ne.nByteLength,ne.hmac)(j,D)}c.BASE._setWindowSize(8);function te(I,T,M,j=O){var xe;const D=I;if(T=et("msgHash",T),M=et("publicKey",M),"strict"in j)throw new Error("options.strict was renamed to lowS");const{lowS:ne,prehash:ae}=j;let re,we;try{if(typeof D=="string"||D instanceof Uint8Array)try{re=y.fromDER(D)}catch(b){if(!(b instanceof mr.Err))throw b;re=y.fromCompact(D)}else if(typeof D=="object"&&typeof D.r=="bigint"&&typeof D.s=="bigint"){const{r:b,s:v}=D;re=new y(b,v)}else throw new Error("PARSE");we=c.fromHex(M)}catch(b){if(b.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(ne&&re.hasHighS())return!1;ae&&(T=t.hash(T));const{r:Le,s:ze}=re,Ue=R(T),$=l(ze),z=a(Ue*$),K=a(Le*$),Z=(xe=c.BASE.multiplyAndAddUnsafe(we,z,K))==null?void 0:xe.toAffine();return Z?a(Z.x)===Le:!1}return{CURVE:t,getPublicKey:w,getSharedSecret:_,sign:Q,verify:te,ProjectivePoint:c,Signature:y,utils:x}}let Hh=class extends Oh{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,gr.hash(t);const r=yc(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,i=new Uint8Array(o);i.set(r.length>o?t.create().update(r).digest():r);for(let s=0;s<i.length;s++)i[s]^=54;this.iHash.update(i),this.oHash=t.create();for(let s=0;s<i.length;s++)i[s]^=106;this.oHash.update(i),i.fill(0)}update(t){return gr.exists(this),this.iHash.update(t),this}digestInto(t){gr.exists(this),gr.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:r,finished:o,destroyed:i,blockLen:s,outputLen:a}=this;return t=t,t.finished=o,t.destroyed=i,t.blockLen=s,t.outputLen=a,t.oHash=n._cloneInto(t.oHash),t.iHash=r._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}};const Fh=(e,t,n)=>new Hh(e,t).update(n).digest();Fh.create=(e,t)=>new Hh(e,t);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function fw(e){return{hash:e,hmac:(t,...n)=>Fh(e,t,O1(...n)),randomBytes:Ph}}function dw(e,t){const n=r=>uw({...e,...fw(r)});return Object.freeze({...n(t),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Zs=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),_s=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Dh=BigInt(1),Ss=BigInt(2),Xu=(e,t)=>(e+t/Ss)/t;function jh(e){const t=Zs,n=BigInt(3),r=BigInt(6),o=BigInt(11),i=BigInt(22),s=BigInt(23),a=BigInt(44),l=BigInt(88),c=e*e*e%t,f=c*c*e%t,u=St(f,n,t)*f%t,d=St(u,n,t)*f%t,h=St(d,Ss,t)*c%t,p=St(h,o,t)*h%t,g=St(p,i,t)*p%t,m=St(g,a,t)*g%t,y=St(m,l,t)*m%t,x=St(y,a,t)*g%t,w=St(x,n,t)*f%t,A=St(w,s,t)*p%t,_=St(A,r,t)*c%t,S=St(_,Ss,t);if(!_l.eql(_l.sqr(S),e))throw new Error("Cannot find square root");return S}const _l=tw(Zs,void 0,void 0,{sqrt:jh}),at=dw({a:BigInt(0),b:BigInt(7),Fp:_l,n:_s,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const t=_s,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-Dh*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=n,s=BigInt("0x100000000000000000000000000000000"),a=Xu(i*e,t),l=Xu(-r*e,t);let c=Ge(e-a*n-l*o,t),f=Ge(-a*r-l*i,t);const u=c>s,d=f>s;if(u&&(c=t-c),d&&(f=t-f),c>s||f>s)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:u,k1:c,k2neg:d,k2:f}}}},wl),Ys=BigInt(0),Vh=e=>typeof e=="bigint"&&Ys<e&&e<Zs,hw=e=>typeof e=="bigint"&&Ys<e&&e<_s,ef={};function Cs(e,...t){let n=ef[e];if(n===void 0){const r=wl(Uint8Array.from(e,o=>o.charCodeAt(0)));n=Tr(r,r),ef[e]=n}return wl(Tr(n,...t))}const Ec=e=>e.toRawBytes(!0).slice(1),Sl=e=>Wn(e,32),Oa=e=>Ge(e,Zs),oi=e=>Ge(e,_s),_c=at.ProjectivePoint,pw=(e,t,n)=>_c.BASE.multiplyAndAddUnsafe(e,t,n);function Cl(e){let t=at.utils.normPrivateKeyToScalar(e),n=_c.fromPrivateKey(t);return{scalar:n.hasEvenY()?t:oi(-t),bytes:Ec(n)}}function Kh(e){if(!Vh(e))throw new Error("bad x: need 0 < x < p");const t=Oa(e*e),n=Oa(t*e+BigInt(7));let r=jh(n);r%Ss!==Ys&&(r=Oa(-r));const o=new _c(e,r,Dh);return o.assertValidity(),o}function qh(...e){return oi(gt(Cs("BIP0340/challenge",...e)))}function gw(e){return Cl(e).bytes}function mw(e,t,n=Ph(32)){const r=et("message",e),{bytes:o,scalar:i}=Cl(t),s=et("auxRand",n,32),a=Sl(i^gt(Cs("BIP0340/aux",s))),l=Cs("BIP0340/nonce",a,o,r),c=oi(gt(l));if(c===Ys)throw new Error("sign failed: k is zero");const{bytes:f,scalar:u}=Cl(c),d=qh(f,o,r),h=new Uint8Array(64);if(h.set(f,0),h.set(Sl(oi(u+d*i)),32),!zh(h,r,o))throw new Error("sign: Invalid signature produced");return h}function zh(e,t,n){const r=et("signature",e,64),o=et("message",t),i=et("publicKey",n,32);try{const s=Kh(gt(i)),a=gt(r.subarray(0,32));if(!Vh(a))return!1;const l=gt(r.subarray(32,64));if(!hw(l))return!1;const c=qh(Sl(a),Ec(s),o),f=pw(s,l,oi(-c));return!(!f||!f.hasEvenY()||f.toAffine().x!==a)}catch{return!1}}const Ai=(()=>({getPublicKey:gw,sign:mw,verify:zh,utils:{randomPrivateKey:at.utils.randomPrivateKey,lift_x:Kh,pointToBytes:Ec,numberToBytesBE:Wn,bytesToNumberBE:gt,taggedHash:Cs,mod:Ge}}))(),Ta=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Sc=e=>e instanceof Uint8Array,Pa=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),qt=(e,t)=>e<<32-t|e>>>t,yw=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!yw)throw new Error("Non little-endian hardware is not supported");const bw=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function It(e){if(!Sc(e))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=bw[e[n]];return t}function ii(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);const t=e.length;if(t%2)throw new Error("padded hex string expected, got unpadded hex of length "+t);const n=new Uint8Array(t/2);for(let r=0;r<n.length;r++){const o=r*2,i=e.slice(o,o+2),s=Number.parseInt(i,16);if(Number.isNaN(s)||s<0)throw new Error("Invalid byte sequence");n[r]=s}return n}function vw(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function si(e){if(typeof e=="string"&&(e=vw(e)),!Sc(e))throw new Error(`expected Uint8Array, got ${typeof e}`);return e}function Cc(...e){const t=new Uint8Array(e.reduce((r,o)=>r+o.length,0));let n=0;return e.forEach(r=>{if(!Sc(r))throw new Error("Uint8Array expected");t.set(r,n),n+=r.length}),t}class Wh{clone(){return this._cloneInto()}}function Qh(e){const t=r=>e().update(si(r)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function Gh(e=32){if(Ta&&typeof Ta.getRandomValues=="function")return Ta.getRandomValues(new Uint8Array(e));throw new Error("crypto.getRandomValues must be defined")}function Al(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function ww(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function Zh(e,...t){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function xw(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Al(e.outputLen),Al(e.blockLen)}function Ew(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function _w(e,t){Zh(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const Xt={number:Al,bool:ww,bytes:Zh,hash:xw,exists:Ew,output:_w};function Sw(e,t,n,r){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,r);const o=BigInt(32),i=BigInt(4294967295),s=Number(n>>o&i),a=Number(n&i),l=r?4:0,c=r?0:4;e.setUint32(t+l,s,r),e.setUint32(t+c,a,r)}let Cw=class extends Wh{constructor(t,n,r,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=Pa(this.buffer)}update(t){Xt.exists(this);const{view:n,buffer:r,blockLen:o}=this;t=si(t);const i=t.length;for(let s=0;s<i;){const a=Math.min(o-this.pos,i-s);if(a===o){const l=Pa(t);for(;o<=i-s;s+=o)this.process(l,s);continue}r.set(t.subarray(s,s+a),this.pos),this.pos+=a,s+=a,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Xt.exists(this),Xt.output(t,this),this.finished=!0;const{buffer:n,view:r,blockLen:o,isLE:i}=this;let{pos:s}=this;n[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>o-s&&(this.process(r,0),s=0);for(let u=s;u<o;u++)n[u]=0;Sw(r,o-8,BigInt(this.length*8),i),this.process(r,0);const a=Pa(t),l=this.outputLen;if(l%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const c=l/4,f=this.get();if(c>f.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<c;u++)a.setUint32(4*u,f[u],i)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const r=t.slice(0,n);return this.destroy(),r}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:r,length:o,finished:i,destroyed:s,pos:a}=this;return t.length=o,t.pos=a,t.finished=i,t.destroyed=s,o%n&&t.buffer.set(r),t}};const Aw=(e,t,n)=>e&t^~e&n,$w=(e,t,n)=>e&t^e&n^t&n,kw=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Cn=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),An=new Uint32Array(64);let Yh=class extends Cw{constructor(){super(64,32,8,!1),this.A=Cn[0]|0,this.B=Cn[1]|0,this.C=Cn[2]|0,this.D=Cn[3]|0,this.E=Cn[4]|0,this.F=Cn[5]|0,this.G=Cn[6]|0,this.H=Cn[7]|0}get(){const{A:t,B:n,C:r,D:o,E:i,F:s,G:a,H:l}=this;return[t,n,r,o,i,s,a,l]}set(t,n,r,o,i,s,a,l){this.A=t|0,this.B=n|0,this.C=r|0,this.D=o|0,this.E=i|0,this.F=s|0,this.G=a|0,this.H=l|0}process(t,n){for(let u=0;u<16;u++,n+=4)An[u]=t.getUint32(n,!1);for(let u=16;u<64;u++){const d=An[u-15],h=An[u-2],p=qt(d,7)^qt(d,18)^d>>>3,g=qt(h,17)^qt(h,19)^h>>>10;An[u]=g+An[u-7]+p+An[u-16]|0}let{A:r,B:o,C:i,D:s,E:a,F:l,G:c,H:f}=this;for(let u=0;u<64;u++){const d=qt(a,6)^qt(a,11)^qt(a,25),h=f+d+Aw(a,l,c)+kw[u]+An[u]|0,g=(qt(r,2)^qt(r,13)^qt(r,22))+$w(r,o,i)|0;f=c,c=l,l=a,a=s+h|0,s=i,i=o,o=r,r=h+g|0}r=r+this.A|0,o=o+this.B|0,i=i+this.C|0,s=s+this.D|0,a=a+this.E|0,l=l+this.F|0,c=c+this.G|0,f=f+this.H|0,this.set(r,o,i,s,a,l,c,f)}roundClean(){An.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}};class Iw extends Yh{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const bo=Qh(()=>new Yh);Qh(()=>new Iw);/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function vo(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function gn(...e){const t=(o,i)=>s=>o(i(s)),n=Array.from(e).reverse().reduce((o,i)=>o?t(o,i.encode):i.encode,void 0),r=e.reduce((o,i)=>o?t(o,i.decode):i.decode,void 0);return{encode:n,decode:r}}function mn(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(vo(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const r=e.indexOf(n);if(r===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return r})}}}function yn(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function Js(e,t="="){if(vo(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let r of n)if(typeof r!="string")throw new Error(`padding.encode: non-string input=${r}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let r=n.length;if(r*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;r>0&&n[r-1]===t;r--)if(!((r-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,r)}}}function Jh(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function tf(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let r=0;const o=[],i=Array.from(e);for(i.forEach(s=>{if(vo(s),s<0||s>=t)throw new Error(`Wrong integer: ${s}`)});;){let s=0,a=!0;for(let l=r;l<i.length;l++){const c=i[l],f=t*s+c;if(!Number.isSafeInteger(f)||t*s/t!==s||f-c!==t*s)throw new Error("convertRadix: carry overflow");if(s=f%n,i[l]=Math.floor(f/n),!Number.isSafeInteger(i[l])||i[l]*n+s!==f)throw new Error("convertRadix: carry overflow");if(a)i[l]?a=!1:r=l;else continue}if(o.push(s),a)break}for(let s=0;s<e.length-1&&e[s]===0;s++)o.push(0);return o.reverse()}const Xh=(e,t)=>t?Xh(t,e%t):e,As=(e,t)=>e+(t-Xh(e,t));function $l(e,t,n,r){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(As(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${As(t,n)}`);let o=0,i=0;const s=2**n-1,a=[];for(const l of e){if(vo(l),l>=2**t)throw new Error(`convertRadix2: invalid data word=${l} from=${t}`);if(o=o<<t|l,i+t>32)throw new Error(`convertRadix2: carry overflow pos=${i} from=${t}`);for(i+=t;i>=n;i-=n)a.push((o>>i-n&s)>>>0);o&=2**i-1}if(o=o<<n-i&s,!r&&i>=t)throw new Error("Excess padding");if(!r&&o)throw new Error(`Non-zero padding: ${o}`);return r&&i>0&&a.push(o>>>0),a}function Ow(e){return vo(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return tf(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(tf(t,e,2**8))}}}function tr(e,t=!1){if(vo(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(As(8,e)>32||As(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return $l(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from($l(n,e,8,t))}}}function nf(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}const Tw=gn(tr(4),mn("0123456789ABCDEF"),yn("")),Pw=gn(tr(5),mn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),Js(5),yn(""));gn(tr(5),mn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),Js(5),yn(""));gn(tr(5),mn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),yn(""),Jh(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1")));const hn=gn(tr(6),mn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),Js(6),yn("")),Lw=gn(tr(6),mn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),Js(6),yn("")),Ac=e=>gn(Ow(58),mn(e),yn("")),kl=Ac("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");Ac("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");Ac("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");const rf=[0,2,3,5,6,7,9,10,11],Rw={encode(e){let t="";for(let n=0;n<e.length;n+=8){const r=e.subarray(n,n+8);t+=kl.encode(r).padStart(rf[r.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const r=e.slice(n,n+11),o=rf.indexOf(r.length),i=kl.decode(r);for(let s=0;s<i.length-o;s++)if(i[s]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(i.slice(i.length-o)))}return Uint8Array.from(t)}},Il=gn(mn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),yn("")),of=[996825010,642813549,513874426,1027748829,705979059];function Co(e){const t=e>>25;let n=(e&33554431)<<5;for(let r=0;r<of.length;r++)(t>>r&1)===1&&(n^=of[r]);return n}function sf(e,t,n=1){const r=e.length;let o=1;for(let i=0;i<r;i++){const s=e.charCodeAt(i);if(s<33||s>126)throw new Error(`Invalid prefix (${e})`);o=Co(o)^s>>5}o=Co(o);for(let i=0;i<r;i++)o=Co(o)^e.charCodeAt(i)&31;for(let i of t)o=Co(o)^i;for(let i=0;i<6;i++)o=Co(o);return o^=n,Il.encode($l([o%2**30],30,5,!1))}function ep(e){const t=e==="bech32"?1:734539939,n=tr(5),r=n.decode,o=n.encode,i=nf(r);function s(f,u,d=90){if(typeof f!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof f}`);if(!Array.isArray(u)||u.length&&typeof u[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof u}`);const h=f.length+7+u.length;if(d!==!1&&h>d)throw new TypeError(`Length ${h} exceeds limit ${d}`);return f=f.toLowerCase(),`${f}1${Il.encode(u)}${sf(f,u,t)}`}function a(f,u=90){if(typeof f!="string")throw new Error(`bech32.decode input should be string, not ${typeof f}`);if(f.length<8||u!==!1&&f.length>u)throw new TypeError(`Wrong string length: ${f.length} (${f}). Expected (8..${u})`);const d=f.toLowerCase();if(f!==d&&f!==f.toUpperCase())throw new Error("String must be lowercase or uppercase");f=d;const h=f.lastIndexOf("1");if(h===0||h===-1)throw new Error('Letter "1" must be present between prefix and data only');const p=f.slice(0,h),g=f.slice(h+1);if(g.length<6)throw new Error("Data must be at least 6 characters long");const m=Il.decode(g).slice(0,-6),y=sf(p,m,t);if(!g.endsWith(y))throw new Error(`Invalid checksum in ${f}: expected "${y}"`);return{prefix:p,words:m}}const l=nf(a);function c(f){const{prefix:u,words:d}=a(f,!1);return{prefix:u,words:d,bytes:r(d)}}return{encode:s,decode:a,decodeToBytes:c,decodeUnsafe:l,fromWords:r,fromWordsUnsafe:i,toWords:o}}const po=ep("bech32");ep("bech32m");const Bw={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},Nw=gn(tr(4),mn("0123456789abcdef"),yn(""),Jh(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),Uw={utf8:Bw,hex:Nw,base16:Tw,base32:Pw,base64:hn,base64url:Lw,base58:kl,base58xmr:Rw};`${Object.keys(Uw).join(", ")}`;const tp=`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`);function Qr(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function Mw(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function Mn(e,...t){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function $c(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Qr(e.outputLen),Qr(e.blockLen)}function ai(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function np(e,t){Mn(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const Hw={number:Qr,bool:Mw,bytes:Mn,hash:$c,exists:ai,output:np},rp=Hw;let op=class extends $h{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,$c(t);const r=ri(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,i=new Uint8Array(o);i.set(r.length>o?t.create().update(r).digest():r);for(let s=0;s<i.length;s++)i[s]^=54;this.iHash.update(i),this.oHash=t.create();for(let s=0;s<i.length;s++)i[s]^=106;this.oHash.update(i),i.fill(0)}update(t){return ai(this),this.iHash.update(t),this}digestInto(t){ai(this),Mn(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:r,finished:o,destroyed:i,blockLen:s,outputLen:a}=this;return t=t,t.finished=o,t.destroyed=i,t.blockLen=s,t.outputLen=a,t.oHash=n._cloneInto(t.oHash),t.iHash=r._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}};const $s=(e,t,n)=>new op(e,t).update(n).digest();$s.create=(e,t)=>new op(e,t);function Fw(e,t,n,r){$c(e);const o=E1({dkLen:32,asyncTick:10},r),{c:i,dkLen:s,asyncTick:a}=o;if(Qr(i),Qr(s),Qr(a),i<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const l=ri(t),c=ri(n),f=new Uint8Array(s),u=$s.create(e,l),d=u._cloneInto().update(c);return{c:i,dkLen:s,asyncTick:a,DK:f,PRF:u,PRFSalt:d}}function Dw(e,t,n,r,o){return e.destroy(),t.destroy(),r&&r.destroy(),o.fill(0),n}function jw(e,t,n,r){const{c:o,dkLen:i,DK:s,PRF:a,PRFSalt:l}=Fw(e,t,n,r);let c;const f=new Uint8Array(4),u=$r(f),d=new Uint8Array(a.outputLen);for(let h=1,p=0;p<i;h++,p+=a.outputLen){const g=s.subarray(p,p+a.outputLen);u.setInt32(0,h,!1),(c=l._cloneInto(c)).update(f).digestInto(d),g.set(d.subarray(0,g.length));for(let m=1;m<o;m++){a._cloneInto(c).update(d).digestInto(d);for(let y=0;y<g.length;y++)g[y]^=d[y]}}return Dw(a,l,s,c,d)}function Vw(e,t,n,r){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,r);const o=BigInt(32),i=BigInt(4294967295),s=Number(n>>o&i),a=Number(n&i),l=r?4:0,c=r?0:4;e.setUint32(t+l,s,r),e.setUint32(t+c,a,r)}class kc extends $h{constructor(t,n,r,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=$r(this.buffer)}update(t){ai(this);const{view:n,buffer:r,blockLen:o}=this;t=ri(t);const i=t.length;for(let s=0;s<i;){const a=Math.min(o-this.pos,i-s);if(a===o){const l=$r(t);for(;o<=i-s;s+=o)this.process(l,s);continue}r.set(t.subarray(s,s+a),this.pos),this.pos+=a,s+=a,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){ai(this),np(t,this),this.finished=!0;const{buffer:n,view:r,blockLen:o,isLE:i}=this;let{pos:s}=this;n[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>o-s&&(this.process(r,0),s=0);for(let u=s;u<o;u++)n[u]=0;Vw(r,o-8,BigInt(this.length*8),i),this.process(r,0);const a=$r(t),l=this.outputLen;if(l%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const c=l/4,f=this.get();if(c>f.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<c;u++)a.setUint32(4*u,f[u],i)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const r=t.slice(0,n);return this.destroy(),r}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:r,length:o,finished:i,destroyed:s,pos:a}=this;return t.length=o,t.pos=a,t.finished=i,t.destroyed=s,o%n&&t.buffer.set(r),t}}const Kw=(e,t,n)=>e&t^~e&n,qw=(e,t,n)=>e&t^e&n^t&n,zw=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),$n=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),kn=new Uint32Array(64);class Ww extends kc{constructor(){super(64,32,8,!1),this.A=$n[0]|0,this.B=$n[1]|0,this.C=$n[2]|0,this.D=$n[3]|0,this.E=$n[4]|0,this.F=$n[5]|0,this.G=$n[6]|0,this.H=$n[7]|0}get(){const{A:t,B:n,C:r,D:o,E:i,F:s,G:a,H:l}=this;return[t,n,r,o,i,s,a,l]}set(t,n,r,o,i,s,a,l){this.A=t|0,this.B=n|0,this.C=r|0,this.D=o|0,this.E=i|0,this.F=s|0,this.G=a|0,this.H=l|0}process(t,n){for(let u=0;u<16;u++,n+=4)kn[u]=t.getUint32(n,!1);for(let u=16;u<64;u++){const d=kn[u-15],h=kn[u-2],p=Vt(d,7)^Vt(d,18)^d>>>3,g=Vt(h,17)^Vt(h,19)^h>>>10;kn[u]=g+kn[u-7]+p+kn[u-16]|0}let{A:r,B:o,C:i,D:s,E:a,F:l,G:c,H:f}=this;for(let u=0;u<64;u++){const d=Vt(a,6)^Vt(a,11)^Vt(a,25),h=f+d+Kw(a,l,c)+zw[u]+kn[u]|0,g=(Vt(r,2)^Vt(r,13)^Vt(r,22))+qw(r,o,i)|0;f=c,c=l,l=a,a=s+h|0,s=i,i=o,o=r,r=h+g|0}r=r+this.A|0,o=o+this.B|0,i=i+this.C|0,s=s+this.D|0,a=a+this.E|0,l=l+this.F|0,c=c+this.G|0,f=f+this.H|0,this.set(r,o,i,s,a,l,c,f)}roundClean(){kn.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const Ic=mc(()=>new Ww),Vi=BigInt(2**32-1),Ol=BigInt(32);function ip(e,t=!1){return t?{h:Number(e&Vi),l:Number(e>>Ol&Vi)}:{h:Number(e>>Ol&Vi)|0,l:Number(e&Vi)|0}}function Qw(e,t=!1){let n=new Uint32Array(e.length),r=new Uint32Array(e.length);for(let o=0;o<e.length;o++){const{h:i,l:s}=ip(e[o],t);[n[o],r[o]]=[i,s]}return[n,r]}const Gw=(e,t)=>BigInt(e>>>0)<<Ol|BigInt(t>>>0),Zw=(e,t,n)=>e>>>n,Yw=(e,t,n)=>e<<32-n|t>>>n,Jw=(e,t,n)=>e>>>n|t<<32-n,Xw=(e,t,n)=>e<<32-n|t>>>n,e2=(e,t,n)=>e<<64-n|t>>>n-32,t2=(e,t,n)=>e>>>n-32|t<<64-n,n2=(e,t)=>t,r2=(e,t)=>e,o2=(e,t,n)=>e<<n|t>>>32-n,i2=(e,t,n)=>t<<n|e>>>32-n,s2=(e,t,n)=>t<<n-32|e>>>64-n,a2=(e,t,n)=>e<<n-32|t>>>64-n;function l2(e,t,n,r){const o=(t>>>0)+(r>>>0);return{h:e+n+(o/2**32|0)|0,l:o|0}}const c2=(e,t,n)=>(e>>>0)+(t>>>0)+(n>>>0),u2=(e,t,n,r)=>t+n+r+(e/2**32|0)|0,f2=(e,t,n,r)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0),d2=(e,t,n,r,o)=>t+n+r+o+(e/2**32|0)|0,h2=(e,t,n,r,o)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0)+(o>>>0),p2=(e,t,n,r,o,i)=>t+n+r+o+i+(e/2**32|0)|0,g2={fromBig:ip,split:Qw,toBig:Gw,shrSH:Zw,shrSL:Yw,rotrSH:Jw,rotrSL:Xw,rotrBH:e2,rotrBL:t2,rotr32H:n2,rotr32L:r2,rotlSH:o2,rotlSL:i2,rotlBH:s2,rotlBL:a2,add:l2,add3L:c2,add3H:u2,add4L:f2,add4H:d2,add5H:p2,add5L:h2},ue=g2,[m2,y2]=(()=>ue.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))))(),In=new Uint32Array(80),On=new Uint32Array(80);class b2 extends kc{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:r,Bl:o,Ch:i,Cl:s,Dh:a,Dl:l,Eh:c,El:f,Fh:u,Fl:d,Gh:h,Gl:p,Hh:g,Hl:m}=this;return[t,n,r,o,i,s,a,l,c,f,u,d,h,p,g,m]}set(t,n,r,o,i,s,a,l,c,f,u,d,h,p,g,m){this.Ah=t|0,this.Al=n|0,this.Bh=r|0,this.Bl=o|0,this.Ch=i|0,this.Cl=s|0,this.Dh=a|0,this.Dl=l|0,this.Eh=c|0,this.El=f|0,this.Fh=u|0,this.Fl=d|0,this.Gh=h|0,this.Gl=p|0,this.Hh=g|0,this.Hl=m|0}process(t,n){for(let w=0;w<16;w++,n+=4)In[w]=t.getUint32(n),On[w]=t.getUint32(n+=4);for(let w=16;w<80;w++){const A=In[w-15]|0,_=On[w-15]|0,S=ue.rotrSH(A,_,1)^ue.rotrSH(A,_,8)^ue.shrSH(A,_,7),R=ue.rotrSL(A,_,1)^ue.rotrSL(A,_,8)^ue.shrSL(A,_,7),E=In[w-2]|0,k=On[w-2]|0,U=ue.rotrSH(E,k,19)^ue.rotrBH(E,k,61)^ue.shrSH(E,k,6),N=ue.rotrSL(E,k,19)^ue.rotrBL(E,k,61)^ue.shrSL(E,k,6),O=ue.add4L(R,N,On[w-7],On[w-16]),Q=ue.add4H(O,S,U,In[w-7],In[w-16]);In[w]=Q|0,On[w]=O|0}let{Ah:r,Al:o,Bh:i,Bl:s,Ch:a,Cl:l,Dh:c,Dl:f,Eh:u,El:d,Fh:h,Fl:p,Gh:g,Gl:m,Hh:y,Hl:x}=this;for(let w=0;w<80;w++){const A=ue.rotrSH(u,d,14)^ue.rotrSH(u,d,18)^ue.rotrBH(u,d,41),_=ue.rotrSL(u,d,14)^ue.rotrSL(u,d,18)^ue.rotrBL(u,d,41),S=u&h^~u&g,R=d&p^~d&m,E=ue.add5L(x,_,R,y2[w],On[w]),k=ue.add5H(E,y,A,S,m2[w],In[w]),U=E|0,N=ue.rotrSH(r,o,28)^ue.rotrBH(r,o,34)^ue.rotrBH(r,o,39),O=ue.rotrSL(r,o,28)^ue.rotrBL(r,o,34)^ue.rotrBL(r,o,39),Q=r&i^r&a^i&a,te=o&s^o&l^s&l;y=g|0,x=m|0,g=h|0,m=p|0,h=u|0,p=d|0,{h:u,l:d}=ue.add(c|0,f|0,k|0,U|0),c=a|0,f=l|0,a=i|0,l=s|0,i=r|0,s=o|0;const I=ue.add3L(U,O,te);r=ue.add3H(I,k,N,Q),o=I|0}({h:r,l:o}=ue.add(this.Ah|0,this.Al|0,r|0,o|0)),{h:i,l:s}=ue.add(this.Bh|0,this.Bl|0,i|0,s|0),{h:a,l}=ue.add(this.Ch|0,this.Cl|0,a|0,l|0),{h:c,l:f}=ue.add(this.Dh|0,this.Dl|0,c|0,f|0),{h:u,l:d}=ue.add(this.Eh|0,this.El|0,u|0,d|0),{h,l:p}=ue.add(this.Fh|0,this.Fl|0,h|0,p|0),{h:g,l:m}=ue.add(this.Gh|0,this.Gl|0,g|0,m|0),{h:y,l:x}=ue.add(this.Hh|0,this.Hl|0,y|0,x|0),this.set(r,o,i,s,a,l,c,f,u,d,h,p,g,m,y,x)}roundClean(){In.fill(0),On.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}const Tl=mc(()=>new b2);/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function v2(...e){const t=(o,i)=>s=>o(i(s)),n=Array.from(e).reverse().reduce((o,i)=>o?t(o,i.encode):i.encode,void 0),r=e.reduce((o,i)=>o?t(o,i.decode):i.decode,void 0);return{encode:n,decode:r}}function w2(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const r=e.indexOf(n);if(r===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return r})}}}function x2(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function E2(e,t="="){if(typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let r of n)if(typeof r!="string")throw new Error(`padding.encode: non-string input=${r}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let r=n.length;if(r*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;r>0&&n[r-1]===t;r--)if(!((r-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,r)}}}function af(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let r=0;const o=[],i=Array.from(e);for(i.forEach(s=>{if(s<0||s>=t)throw new Error(`Wrong integer: ${s}`)});;){let s=0,a=!0;for(let l=r;l<i.length;l++){const c=i[l],f=t*s+c;if(!Number.isSafeInteger(f)||t*s/t!==s||f-c!==t*s)throw new Error("convertRadix: carry overflow");s=f%n;const u=Math.floor(f/n);if(i[l]=u,!Number.isSafeInteger(u)||u*n+s!==f)throw new Error("convertRadix: carry overflow");if(a)u?a=!1:r=l;else continue}if(o.push(s),a)break}for(let s=0;s<e.length-1&&e[s]===0;s++)o.push(0);return o.reverse()}const sp=(e,t)=>t?sp(t,e%t):e,ks=(e,t)=>e+(t-sp(e,t));function lf(e,t,n,r){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(ks(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${ks(t,n)}`);let o=0,i=0;const s=2**n-1,a=[];for(const l of e){if(l>=2**t)throw new Error(`convertRadix2: invalid data word=${l} from=${t}`);if(o=o<<t|l,i+t>32)throw new Error(`convertRadix2: carry overflow pos=${i} from=${t}`);for(i+=t;i>=n;i-=n)a.push((o>>i-n&s)>>>0);o&=2**i-1}if(o=o<<n-i&s,!r&&i>=t)throw new Error("Excess padding");if(!r&&o)throw new Error(`Non-zero padding: ${o}`);return r&&i>0&&a.push(o>>>0),a}function _2(e){return{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return af(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(af(t,e,2**8))}}}function S2(e,t=!1){if(e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(ks(8,e)>32||ks(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return lf(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(lf(n,e,8,t))}}}function C2(e,t){if(typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const r=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(r,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const r=n.slice(0,-e),o=t(r).slice(0,e),i=n.slice(-e);for(let s=0;s<e;s++)if(o[s]!==i[s])throw new Error("Invalid checksum");return r}}}const Ki={alphabet:w2,chain:v2,checksum:C2,radix:_2,radix2:S2,join:x2,padding:E2},A2=e=>e[0]==="あいこくしん";function ap(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function lp(e){const t=ap(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function cp(e){rp.bytes(e,16,20,24,28,32)}function $2(e,t=128){if(rp.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return O2(_1(t/8),e)}const k2=e=>{const t=8-e.length/4;return new Uint8Array([Ic(e)[0]>>t<<t])};function up(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),Ki.chain(Ki.checksum(1,k2),Ki.radix2(11,!0),Ki.alphabet(e))}function I2(e,t){const{words:n}=lp(e),r=up(t).decode(n);return cp(r),r}function O2(e,t){return cp(e),up(t).encode(e).join(A2(t)?"　":" ")}function T2(e,t){try{I2(e,t)}catch{return!1}return!0}const P2=e=>ap(`mnemonic${e}`);function L2(e,t=""){return jw(Tl,lp(e).nfkd,P2(t),{c:2048,dkLen:64})}const R2=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),fp=Uint8Array.from({length:16},(e,t)=>t),B2=fp.map(e=>(9*e+5)%16);let Oc=[fp],Tc=[B2];for(let e=0;e<4;e++)for(let t of[Oc,Tc])t.push(t[e].map(n=>R2[n]));const dp=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),N2=Oc.map((e,t)=>e.map(n=>dp[t][n])),U2=Tc.map((e,t)=>e.map(n=>dp[t][n])),M2=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),H2=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),qi=(e,t)=>e<<t|e>>>32-t;function cf(e,t,n,r){return e===0?t^n^r:e===1?t&n|~t&r:e===2?(t|~n)^r:e===3?t&r|n&~r:t^(n|~r)}const zi=new Uint32Array(16);class F2 extends kc{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:r,h3:o,h4:i}=this;return[t,n,r,o,i]}set(t,n,r,o,i){this.h0=t|0,this.h1=n|0,this.h2=r|0,this.h3=o|0,this.h4=i|0}process(t,n){for(let h=0;h<16;h++,n+=4)zi[h]=t.getUint32(n,!0);let r=this.h0|0,o=r,i=this.h1|0,s=i,a=this.h2|0,l=a,c=this.h3|0,f=c,u=this.h4|0,d=u;for(let h=0;h<5;h++){const p=4-h,g=M2[h],m=H2[h],y=Oc[h],x=Tc[h],w=N2[h],A=U2[h];for(let _=0;_<16;_++){const S=qi(r+cf(h,i,a,c)+zi[y[_]]+g,w[_])+u|0;r=u,u=c,c=qi(a,10)|0,a=i,i=S}for(let _=0;_<16;_++){const S=qi(o+cf(p,s,l,f)+zi[x[_]]+m,A[_])+d|0;o=d,d=f,f=qi(l,10)|0,l=s,s=S}}this.set(this.h1+a+f|0,this.h2+c+d|0,this.h3+u+o|0,this.h4+r+s|0,this.h0+i+l|0)}roundClean(){zi.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const D2=mc(()=>new F2);/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function hp(...e){const t=(o,i)=>s=>o(i(s)),n=Array.from(e).reverse().reduce((o,i)=>o?t(o,i.encode):i.encode,void 0),r=e.reduce((o,i)=>o?t(o,i.decode):i.decode,void 0);return{encode:n,decode:r}}function j2(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const r=e.indexOf(n);if(r===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return r})}}}function V2(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function uf(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let r=0;const o=[],i=Array.from(e);for(i.forEach(s=>{if(s<0||s>=t)throw new Error(`Wrong integer: ${s}`)});;){let s=0,a=!0;for(let l=r;l<i.length;l++){const c=i[l],f=t*s+c;if(!Number.isSafeInteger(f)||t*s/t!==s||f-c!==t*s)throw new Error("convertRadix: carry overflow");s=f%n;const u=Math.floor(f/n);if(i[l]=u,!Number.isSafeInteger(u)||u*n+s!==f)throw new Error("convertRadix: carry overflow");if(a)u?a=!1:r=l;else continue}if(o.push(s),a)break}for(let s=0;s<e.length-1&&e[s]===0;s++)o.push(0);return o.reverse()}function K2(e){return{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return uf(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(uf(t,e,2**8))}}}function q2(e,t){if(typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const r=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(r,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const r=n.slice(0,-e),o=t(r).slice(0,e),i=n.slice(-e);for(let s=0;s<e;s++)if(o[s]!==i[s])throw new Error("Invalid checksum");return r}}}const z2=e=>hp(K2(58),j2(e),V2("")),W2=z2("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),Q2=e=>hp(q2(4,t=>e(e(t))),W2),Wi=at.ProjectivePoint,La=Q2(Ic);function ff(e){return BigInt(`0x${v1(e)}`)}function G2(e){return w1(e.toString(16).padStart(64,"0"))}const Z2=Ah("Bitcoin seed"),Ra={private:76066276,public:76067358},Ba=2147483648,Y2=e=>D2(Ic(e)),J2=e=>$r(e).getUint32(0,!1),Qi=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return $r(t).setUint32(0,e,!1),t};class fr{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return J2(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return La.encode(this.serialize(this.versions.private,ji(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return La.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=Ra){if(Mn(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const r=$s(Tl,Z2,t);return new fr({versions:n,chainCode:r.slice(32),privateKey:r.slice(0,32)})}static fromExtendedKey(t,n=Ra){const r=La.decode(t),o=$r(r),i=o.getUint32(0,!1),s={versions:n,depth:r[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:r.slice(13,45)},a=r.slice(45),l=a[0]===0;if(i!==n[l?"private":"public"])throw new Error("Version mismatch");return l?new fr({...s,privateKey:a.slice(1)}):new fr({...s,publicKey:a})}static fromJSON(t){return fr.fromExtendedKey(t.xpriv)}constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||Ra,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!at.utils.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:ff(t.privateKey),this.privKeyBytes=G2(this.privKey),this.pubKey=at.getPublicKey(t.privateKey,!0)}else if(t.publicKey)this.pubKey=Wi.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=Y2(this.pubKey)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let r=this;for(const o of n){const i=/^(\d+)('?)$/.exec(o);if(!i||i.length!==3)throw new Error(`Invalid child index: ${o}`);let s=+i[1];if(!Number.isSafeInteger(s)||s>=Ba)throw new Error("Invalid index");i[2]==="'"&&(s+=Ba),r=r.deriveChild(s)}return r}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=Qi(t);if(t>=Ba){const a=this.privateKey;if(!a)throw new Error("Could not derive hardened child key");n=ji(new Uint8Array([0]),a,n)}else n=ji(this.pubKey,n);const r=$s(Tl,this.chainCode,n),o=ff(r.slice(0,32)),i=r.slice(32);if(!at.utils.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const s={versions:this.versions,chainCode:i,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const a=Ge(this.privKey+o,at.CURVE.n);if(!at.utils.isValidPrivateKey(a))throw new Error("The tweak was out of range or the resulted private key is invalid");s.privateKey=a}else{const a=Wi.fromHex(this.pubKey).add(Wi.fromPrivateKey(o));if(a.equals(Wi.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");s.publicKey=a.toRawBytes(!0)}return new fr(s)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return Mn(t,32),at.sign(t,this.privKey).toCompactRawBytes()}verify(t,n){if(Mn(t,32),Mn(n,64),!this.publicKey)throw new Error("No publicKey set!");let r;try{r=at.Signature.fromCompact(n)}catch{return!1}return at.verify(r,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return Mn(n,33),ji(Qi(t),new Uint8Array([this.depth]),Qi(this.parentFingerprint),Qi(this.index),this.chainCode,n)}}/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */const X2=e=>e instanceof Uint8Array,dr=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),ex=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!ex)throw new Error("Non little-endian hardware is not supported");function Pc(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function Pl(e){if(typeof e=="string"&&(e=Pc(e)),!X2(e))throw new Error(`expected Uint8Array, got ${typeof e}`);return e}const tx=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function nx(e,t){if(t!==void 0&&(typeof t!="object"||!tx(t)))throw new Error("options must be object or undefined");return Object.assign(e,t)}function Lc(e,t){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");if(typeof t=="number"&&e.length!==t)throw new Error(`Uint8Array length ${t} expected`)}function rx(e,t){if(e.length!==t.length)throw new Error("equalBytes: Different size of Uint8Arrays");let n=!0;for(let r=0;r<e.length;r++)n&&(n=e[r]===t[r]);return n}function Ll(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function ox(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function pp(e,...t){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function ix(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("hash must be wrapped by utils.wrapConstructor");Ll(e.outputLen),Ll(e.blockLen)}function sx(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function ax(e,t){pp(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const yt={number:Ll,bool:ox,bytes:pp,hash:ix,exists:sx,output:ax},Xe=(e,t)=>e[t++]&255|(e[t++]&255)<<8;class lx{constructor(t){this.blockLen=16,this.outputLen=16,this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.pos=0,this.finished=!1,t=Pl(t),Lc(t,32);const n=Xe(t,0),r=Xe(t,2),o=Xe(t,4),i=Xe(t,6),s=Xe(t,8),a=Xe(t,10),l=Xe(t,12),c=Xe(t,14);this.r[0]=n&8191,this.r[1]=(n>>>13|r<<3)&8191,this.r[2]=(r>>>10|o<<6)&7939,this.r[3]=(o>>>7|i<<9)&8191,this.r[4]=(i>>>4|s<<12)&255,this.r[5]=s>>>1&8190,this.r[6]=(s>>>14|a<<2)&8191,this.r[7]=(a>>>11|l<<5)&8065,this.r[8]=(l>>>8|c<<8)&8191,this.r[9]=c>>>5&127;for(let f=0;f<8;f++)this.pad[f]=Xe(t,16+2*f)}process(t,n,r=!1){const o=r?0:2048,{h:i,r:s}=this,a=s[0],l=s[1],c=s[2],f=s[3],u=s[4],d=s[5],h=s[6],p=s[7],g=s[8],m=s[9],y=Xe(t,n+0),x=Xe(t,n+2),w=Xe(t,n+4),A=Xe(t,n+6),_=Xe(t,n+8),S=Xe(t,n+10),R=Xe(t,n+12),E=Xe(t,n+14);let k=i[0]+(y&8191),U=i[1]+((y>>>13|x<<3)&8191),N=i[2]+((x>>>10|w<<6)&8191),O=i[3]+((w>>>7|A<<9)&8191),Q=i[4]+((A>>>4|_<<12)&8191),te=i[5]+(_>>>1&8191),I=i[6]+((_>>>14|S<<2)&8191),T=i[7]+((S>>>11|R<<5)&8191),M=i[8]+((R>>>8|E<<8)&8191),j=i[9]+(E>>>5|o),D=0,ne=D+k*a+U*(5*m)+N*(5*g)+O*(5*p)+Q*(5*h);D=ne>>>13,ne&=8191,ne+=te*(5*d)+I*(5*u)+T*(5*f)+M*(5*c)+j*(5*l),D+=ne>>>13,ne&=8191;let ae=D+k*l+U*a+N*(5*m)+O*(5*g)+Q*(5*p);D=ae>>>13,ae&=8191,ae+=te*(5*h)+I*(5*d)+T*(5*u)+M*(5*f)+j*(5*c),D+=ae>>>13,ae&=8191;let re=D+k*c+U*l+N*a+O*(5*m)+Q*(5*g);D=re>>>13,re&=8191,re+=te*(5*p)+I*(5*h)+T*(5*d)+M*(5*u)+j*(5*f),D+=re>>>13,re&=8191;let we=D+k*f+U*c+N*l+O*a+Q*(5*m);D=we>>>13,we&=8191,we+=te*(5*g)+I*(5*p)+T*(5*h)+M*(5*d)+j*(5*u),D+=we>>>13,we&=8191;let Le=D+k*u+U*f+N*c+O*l+Q*a;D=Le>>>13,Le&=8191,Le+=te*(5*m)+I*(5*g)+T*(5*p)+M*(5*h)+j*(5*d),D+=Le>>>13,Le&=8191;let ze=D+k*d+U*u+N*f+O*c+Q*l;D=ze>>>13,ze&=8191,ze+=te*a+I*(5*m)+T*(5*g)+M*(5*p)+j*(5*h),D+=ze>>>13,ze&=8191;let Ue=D+k*h+U*d+N*u+O*f+Q*c;D=Ue>>>13,Ue&=8191,Ue+=te*l+I*a+T*(5*m)+M*(5*g)+j*(5*p),D+=Ue>>>13,Ue&=8191;let $=D+k*p+U*h+N*d+O*u+Q*f;D=$>>>13,$&=8191,$+=te*c+I*l+T*a+M*(5*m)+j*(5*g),D+=$>>>13,$&=8191;let z=D+k*g+U*p+N*h+O*d+Q*u;D=z>>>13,z&=8191,z+=te*f+I*c+T*l+M*a+j*(5*m),D+=z>>>13,z&=8191;let K=D+k*m+U*g+N*p+O*h+Q*d;D=K>>>13,K&=8191,K+=te*u+I*f+T*c+M*l+j*a,D+=K>>>13,K&=8191,D=(D<<2)+D|0,D=D+ne|0,ne=D&8191,D=D>>>13,ae+=D,i[0]=ne,i[1]=ae,i[2]=re,i[3]=we,i[4]=Le,i[5]=ze,i[6]=Ue,i[7]=$,i[8]=z,i[9]=K}finalize(){const{h:t,pad:n}=this,r=new Uint16Array(10);let o=t[1]>>>13;t[1]&=8191;for(let a=2;a<10;a++)t[a]+=o,o=t[a]>>>13,t[a]&=8191;t[0]+=o*5,o=t[0]>>>13,t[0]&=8191,t[1]+=o,o=t[1]>>>13,t[1]&=8191,t[2]+=o,r[0]=t[0]+5,o=r[0]>>>13,r[0]&=8191;for(let a=1;a<10;a++)r[a]=t[a]+o,o=r[a]>>>13,r[a]&=8191;r[9]-=8192;let i=(o^1)-1;for(let a=0;a<10;a++)r[a]&=i;i=~i;for(let a=0;a<10;a++)t[a]=t[a]&i|r[a];t[0]=(t[0]|t[1]<<13)&65535,t[1]=(t[1]>>>3|t[2]<<10)&65535,t[2]=(t[2]>>>6|t[3]<<7)&65535,t[3]=(t[3]>>>9|t[4]<<4)&65535,t[4]=(t[4]>>>12|t[5]<<1|t[6]<<14)&65535,t[5]=(t[6]>>>2|t[7]<<11)&65535,t[6]=(t[7]>>>5|t[8]<<8)&65535,t[7]=(t[8]>>>8|t[9]<<5)&65535;let s=t[0]+n[0];t[0]=s&65535;for(let a=1;a<8;a++)s=(t[a]+n[a]|0)+(s>>>16)|0,t[a]=s&65535}update(t){yt.exists(this);const{buffer:n,blockLen:r}=this;t=Pl(t);const o=t.length;for(let i=0;i<o;){const s=Math.min(r-this.pos,o-i);if(s===r){for(;r<=o-i;i+=r)this.process(t,i);continue}n.set(t.subarray(i,i+s),this.pos),this.pos+=s,i+=s,this.pos===r&&(this.process(n,0,!1),this.pos=0)}return this}destroy(){this.h.fill(0),this.r.fill(0),this.buffer.fill(0),this.pad.fill(0)}digestInto(t){yt.exists(this),yt.output(t,this),this.finished=!0;const{buffer:n,h:r}=this;let{pos:o}=this;if(o){for(n[o++]=1;o<16;o++)n[o]=0;this.process(n,0,!0)}this.finalize();let i=0;for(let s=0;s<8;s++)t[i++]=r[s]>>>0,t[i++]=r[s]>>>8;return t}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const r=t.slice(0,n);return this.destroy(),r}}function cx(e){const t=(r,o)=>e(o).update(Pl(r)).digest(),n=e(new Uint8Array(32));return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=r=>e(r),t}cx(e=>new lx(e));const ux=Pc("expand 16-byte k"),fx=Pc("expand 32-byte k"),dx=dr(ux),hx=dr(fx),df=e=>!(e.byteOffset%4),px=e=>{const{core:t,rounds:n,counterRight:r,counterLen:o,allow128bitKeys:i,extendNonceFn:s,blockLen:a}=nx({rounds:20,counterRight:!1,counterLen:8,allow128bitKeys:!0,blockLen:64},e);yt.number(o),yt.number(n),yt.number(a),yt.bool(r),yt.bool(i);const l=a/4;if(a%4!==0)throw new Error("Salsa/ChaCha: blockLen must be aligned to 4 bytes");return(c,f,u,d,h=0)=>{if(yt.bytes(c),yt.bytes(f),yt.bytes(u),d||(d=new Uint8Array(u.length)),yt.bytes(d),yt.number(h),h<0||h>=2**32-1)throw new Error("Salsa/ChaCha: counter overflow");if(d.length<u.length)throw new Error(`Salsa/ChaCha: output (${d.length}) is shorter than data (${u.length})`);const p=[];let g,m;if(c.length===32)g=c,m=hx;else if(c.length===16&&i)g=new Uint8Array(32),g.set(c),g.set(c,16),m=dx,p.push(g);else throw new Error(`Salsa/ChaCha: invalid 32-byte key, got length=${c.length}`);if(s){if(f.length<=16)throw new Error("Salsa/ChaCha: extended nonce must be bigger than 16 bytes");g=s(m,g,f.subarray(0,16),new Uint8Array(32)),p.push(g),f=f.subarray(16)}const y=16-o;if(f.length!==y)throw new Error(`Salsa/ChaCha: nonce must be ${y} or 16 bytes`);if(y!==12){const k=new Uint8Array(12);k.set(f,r?0:12-f.length),p.push(f=k)}const x=new Uint8Array(a),w=dr(x),A=dr(g),_=dr(f),S=df(u)&&dr(u),R=df(d)&&dr(d);p.push(w);const E=u.length;for(let k=0,U=h;k<E;U++){if(t(m,A,_,w,U,n),U>=2**32-1)throw new Error("Salsa/ChaCha: counter overflow");const N=Math.min(a,E-k);if(N===a&&R&&S){const O=k/4;if(k%4!==0)throw new Error("Salsa/ChaCha: invalid block position");for(let Q=0;Q<l;Q++)R[O+Q]=S[O+Q]^w[Q];k+=a;continue}for(let O=0;O<N;O++)d[k+O]=u[k+O]^x[O];k+=N}for(let k=0;k<p.length;k++)p[k].fill(0);return d}},be=(e,t)=>e<<t|e>>>32-t;function gx(e,t,n,r,o,i=20){let s=e[0],a=e[1],l=e[2],c=e[3],f=t[0],u=t[1],d=t[2],h=t[3],p=t[4],g=t[5],m=t[6],y=t[7],x=o,w=n[0],A=n[1],_=n[2],S=s,R=a,E=l,k=c,U=f,N=u,O=d,Q=h,te=p,I=g,T=m,M=y,j=x,D=w,ne=A,ae=_;for(let we=0;we<i;we+=2)S=S+U|0,j=be(j^S,16),te=te+j|0,U=be(U^te,12),S=S+U|0,j=be(j^S,8),te=te+j|0,U=be(U^te,7),R=R+N|0,D=be(D^R,16),I=I+D|0,N=be(N^I,12),R=R+N|0,D=be(D^R,8),I=I+D|0,N=be(N^I,7),E=E+O|0,ne=be(ne^E,16),T=T+ne|0,O=be(O^T,12),E=E+O|0,ne=be(ne^E,8),T=T+ne|0,O=be(O^T,7),k=k+Q|0,ae=be(ae^k,16),M=M+ae|0,Q=be(Q^M,12),k=k+Q|0,ae=be(ae^k,8),M=M+ae|0,Q=be(Q^M,7),S=S+N|0,ae=be(ae^S,16),T=T+ae|0,N=be(N^T,12),S=S+N|0,ae=be(ae^S,8),T=T+ae|0,N=be(N^T,7),R=R+O|0,j=be(j^R,16),M=M+j|0,O=be(O^M,12),R=R+O|0,j=be(j^R,8),M=M+j|0,O=be(O^M,7),E=E+Q|0,D=be(D^E,16),te=te+D|0,Q=be(Q^te,12),E=E+Q|0,D=be(D^E,8),te=te+D|0,Q=be(Q^te,7),k=k+U|0,ne=be(ne^k,16),I=I+ne|0,U=be(U^I,12),k=k+U|0,ne=be(ne^k,8),I=I+ne|0,U=be(U^I,7);let re=0;r[re++]=s+S|0,r[re++]=a+R|0,r[re++]=l+E|0,r[re++]=c+k|0,r[re++]=f+U|0,r[re++]=u+N|0,r[re++]=d+O|0,r[re++]=h+Q|0,r[re++]=p+te|0,r[re++]=g+I|0,r[re++]=m+T|0,r[re++]=y+M|0,r[re++]=x+j|0,r[re++]=w+D|0,r[re++]=A+ne|0,r[re++]=_+ae|0}const gp=px({core:gx,counterRight:!1,counterLen:4,allow128bitKeys:!1});class mp extends Wh{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,Xt.hash(t);const r=si(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,i=new Uint8Array(o);i.set(r.length>o?t.create().update(r).digest():r);for(let s=0;s<i.length;s++)i[s]^=54;this.iHash.update(i),this.oHash=t.create();for(let s=0;s<i.length;s++)i[s]^=106;this.oHash.update(i),i.fill(0)}update(t){return Xt.exists(this),this.iHash.update(t),this}digestInto(t){Xt.exists(this),Xt.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:r,finished:o,destroyed:i,blockLen:s,outputLen:a}=this;return t=t,t.finished=o,t.destroyed=i,t.blockLen=s,t.outputLen=a,t.oHash=n._cloneInto(t.oHash),t.iHash=r._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const $i=(e,t,n)=>new mp(e,t).update(n).digest();$i.create=(e,t)=>new mp(e,t);function mx(e,t,n){return Xt.hash(e),n===void 0&&(n=new Uint8Array(e.outputLen)),$i(e,si(n),si(t))}const Na=new Uint8Array([0]),hf=new Uint8Array;function yx(e,t,n,r=32){if(Xt.hash(e),Xt.number(r),r>255*e.outputLen)throw new Error("Length should be <= 255*HashLen");const o=Math.ceil(r/e.outputLen);n===void 0&&(n=hf);const i=new Uint8Array(o*e.outputLen),s=$i.create(e,t),a=s._cloneInto(),l=new Uint8Array(s.outputLen);for(let c=0;c<o;c++)Na[0]=c+1,a.update(c===0?hf:l).update(n).update(Na).digestInto(l),i.set(l,e.outputLen*c),s._cloneInto(a);return s.destroy(),a.destroy(),l.fill(0),Na.fill(0),i.slice(0,r)}const bx=(e,t,n,r,o)=>yx(e,mx(e,t,n),r,o);var vx=Object.defineProperty,Ve=(e,t)=>{for(var n in t)vx(e,n,{get:t[n],enumerable:!0})};function yp(e){return It(Ai.getPublicKey(e))}var wx={};Ve(wx,{MessageNode:()=>bp,MessageQueue:()=>vp,insertEventIntoAscendingList:()=>Ex,insertEventIntoDescendingList:()=>xx,normalizeURL:()=>Rl,utf8Decoder:()=>Jt,utf8Encoder:()=>Tt});var Jt=new TextDecoder("utf-8"),Tt=new TextEncoder;function Rl(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function xx(e,t){var s;let n=0,r=e.length-1,o,i=n;if(r<0)i=0;else if(t.created_at<e[r].created_at)i=r+1;else if(t.created_at>=e[n].created_at)i=n;else for(;;){if(r<=n+1){i=r;break}if(o=Math.floor(n+(r-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)r=o;else{i=o;break}}return((s=e[i])==null?void 0:s.id)!==t.id?[...e.slice(0,i),t,...e.slice(i)]:e}function Ex(e,t){var s;let n=0,r=e.length-1,o,i=n;if(r<0)i=0;else if(t.created_at>e[r].created_at)i=r+1;else if(t.created_at<=e[n].created_at)i=n;else for(;;){if(r<=n+1){i=r;break}if(o=Math.floor(n+(r-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)r=o;else{i=o;break}}return((s=e[i])==null?void 0:s.id)!==t.id?[...e.slice(0,i),t,...e.slice(i)]:e}var bp=class{constructor(e){mt(this,"_value");mt(this,"_next");this._value=e,this._next=null}get value(){return this._value}set value(e){this._value=e}get next(){return this._next}set next(e){this._next=e}},vp=class{constructor(){mt(this,"_first");mt(this,"_last");mt(this,"_size");this._first=null,this._last=null,this._size=0}get first(){return this._first}set first(e){this._first=e}get last(){return this._last}set last(e){this._last=e}get size(){return this._size}set size(e){this._size=e}enqueue(e){const t=new bp(e);return this._size===0||!this._last?(this._first=t,this._last=t):(this._last.next=t,this._last=t),this._size++,!0}dequeue(){if(this._size===0||!this._first)return null;let e=this._first;return this._first=e.next,e.next=null,this._size--,e.value}},jr=Symbol("verified");function _x(e=255){return{kind:e,content:"",tags:[],created_at:0}}function nr(e,t){const n=e;return n.pubkey=yp(t),n.id=Xs(n),n.sig=Ax(n,t),n[jr]=!0,n}function Sx(e){if(!Rc(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function Xs(e){let t=bo(Tt.encode(Sx(e)));return It(t)}var Cx=e=>e instanceof Object;function Rc(e){if(!Cx(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let r=0;r<n.length;r++)if(typeof n[r]=="object")return!1}return!0}function ea(e){if(typeof e[jr]=="boolean")return e[jr];const t=Xs(e);if(t!==e.id)return e[jr]=!1;try{return e[jr]=Ai.verify(e.sig,t,e.pubkey)}catch{return e[jr]=!1}}function Ax(e,t){return It(Ai.sign(Xs(e),t))}function $x(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(n=>t.id.startsWith(n))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(n=>t.pubkey.startsWith(n)))return!1;for(let n in e)if(n[0]==="#"){let r=n.slice(1),o=e[`#${r}`];if(o&&!t.tags.find(([i,s])=>i===n.slice(1)&&o.indexOf(s)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>e.until)}function wp(e,t){for(let n=0;n<e.length;n++)if($x(e[n],t))return!0;return!1}function kx(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];Object.entries(r).forEach(([o,i])=>{if(o==="kinds"||o==="ids"||o==="authors"||o[0]==="#"){t[o]=t[o]||[];for(let s=0;s<i.length;s++){let a=i[s];t[o].includes(a)||t[o].push(a)}}}),r.limit&&(!t.limit||r.limit>t.limit)&&(t.limit=r.limit),r.until&&(!t.until||r.until>t.until)&&(t.until=r.until),r.since&&(!t.since||r.since<t.since)&&(t.since=r.since)}return t}var Ix={};Ve(Ix,{getHex64:()=>ta,getInt:()=>xp,getSubscriptionId:()=>Ep,matchEventId:()=>Ox,matchEventKind:()=>Px,matchEventPubkey:()=>Tx});function ta(e,t){let n=t.length+3,r=e.indexOf(`"${t}":`)+n,o=e.slice(r).indexOf('"')+r+1;return e.slice(o,o+64)}function xp(e,t){let n=t.length,r=e.indexOf(`"${t}":`)+n+3,o=e.slice(r),i=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,i),10)}function Ep(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let r=t+7+1+n,o=e.slice(r+1,80).indexOf('"');if(o===-1)return null;let i=r+1+o;return e.slice(r+1,i)}function Ox(e,t){return t===ta(e,"id")}function Tx(e,t){return t===ta(e,"pubkey")}function Px(e,t){return t===xp(e,"kind")}var pf=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function Lx(e,t={}){let{listTimeout:n=3e3,getTimeout:r=3e3,countTimeout:o=3e3}=t;var i,s={},a=pf(),l={},c={},f;async function u(){return f||(f=new Promise((y,x)=>{try{i=new WebSocket(e)}catch(S){x(S)}i.onopen=()=>{a.connect.forEach(S=>S()),y()},i.onerror=()=>{f=void 0,a.error.forEach(S=>S()),x()},i.onclose=async()=>{f=void 0,a.disconnect.forEach(S=>S())};let w=new vp,A;i.onmessage=S=>{w.enqueue(S.data),A||(A=setInterval(_,0))};function _(){var E,k,U;if(w.size===0){clearInterval(A),A=null;return}var S=w.dequeue();if(!S)return;let R=Ep(S);if(R){let N=s[R];if(N&&N.alreadyHaveEvent&&N.alreadyHaveEvent(ta(S,"id"),e))return}try{let N=JSON.parse(S);switch(N[0]){case"EVENT":{let I=N[1],T=N[2];Rc(T)&&s[I]&&(s[I].skipVerification||ea(T))&&wp(s[I].filters,T)&&(s[I],(((E=l[I])==null?void 0:E.event)||[]).forEach(M=>M(T)));return}case"COUNT":let O=N[1],Q=N[2];s[O]&&(((k=l[O])==null?void 0:k.count)||[]).forEach(I=>I(Q));return;case"EOSE":{let I=N[1];I in l&&(l[I].eose.forEach(T=>T()),l[I].eose=[]);return}case"OK":{let I=N[1],T=N[2],M=N[3]||"";if(I in c){let{resolve:j,reject:D}=c[I];T?j(null):D(new Error(M))}return}case"NOTICE":let te=N[1];a.notice.forEach(I=>I(te));return;case"AUTH":{let I=N[1];(U=a.auth)==null||U.forEach(T=>T(I));return}}}catch{return}}}),f)}function d(){return(i==null?void 0:i.readyState)===1}async function h(){d()||await u()}async function p(y){let x=JSON.stringify(y);if(!(!d()&&(await new Promise(w=>setTimeout(w,1e3)),!d())))try{i.send(x)}catch(w){console.log(w)}}const g=(y,{verb:x="REQ",skipVerification:w=!1,alreadyHaveEvent:A=null,id:_=Math.random().toString().slice(2)}={})=>{let S=_;s[S]={id:S,filters:y,skipVerification:w,alreadyHaveEvent:A},p([x,S,...y]);let R={sub:(E,k={})=>g(E||y,{skipVerification:k.skipVerification||w,alreadyHaveEvent:k.alreadyHaveEvent||A,id:S}),unsub:()=>{delete s[S],delete l[S],p(["CLOSE",S])},on:(E,k)=>{l[S]=l[S]||{event:[],count:[],eose:[]},l[S][E].push(k)},off:(E,k)=>{let U=l[S],N=U[E].indexOf(k);N>=0&&U[E].splice(N,1)},get events(){return _p(R)}};return R};function m(y,x){return new Promise((w,A)=>{if(!y.id){A(new Error(`event ${y} has no id`));return}let _=y.id;p([x,y]),c[_]={resolve:w,reject:A}})}return{url:e,sub:g,on:(y,x)=>{a[y].push(x),y==="connect"&&(i==null?void 0:i.readyState)===1&&x()},off:(y,x)=>{let w=a[y].indexOf(x);w!==-1&&a[y].splice(w,1)},list:(y,x)=>new Promise(w=>{let A=g(y,x),_=[],S=setTimeout(()=>{A.unsub(),w(_)},n);A.on("eose",()=>{A.unsub(),clearTimeout(S),w(_)}),A.on("event",R=>{_.push(R)})}),get:(y,x)=>new Promise(w=>{let A=g([y],x),_=setTimeout(()=>{A.unsub(),w(null)},r);A.on("event",S=>{A.unsub(),clearTimeout(_),w(S)})}),count:y=>new Promise(x=>{let w=g(y,{...g,verb:"COUNT"}),A=setTimeout(()=>{w.unsub(),x(null)},o);w.on("count",_=>{w.unsub(),clearTimeout(A),x(_)})}),async publish(y){await m(y,"EVENT")},async auth(y){await m(y,"AUTH")},connect:h,close(){a=pf(),l={},c={},(i==null?void 0:i.readyState)===WebSocket.OPEN&&i.close()},get status(){return(i==null?void 0:i.readyState)??3}}}async function*_p(e){let t;const n=[],r=o=>{t?(t(o),t=void 0):n.push(o)};e.on("event",r);try{for(;;)n.length>0?yield n.shift():yield await new Promise(i=>{t=i})}finally{e.off("event",r)}}var Rx=class{constructor(e={}){mt(this,"_conn");mt(this,"_seenOn",{});mt(this,"batchedByKey",{});mt(this,"eoseSubTimeout");mt(this,"getTimeout");mt(this,"seenOnEnabled",!0);mt(this,"batchInterval",100);this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400,this.seenOnEnabled=e.seenOnEnabled!==!1,this.batchInterval=e.batchInterval||100}close(e){e.forEach(t=>{let n=this._conn[Rl(t)];n&&n.close()})}async ensureRelay(e){const t=Rl(e);this._conn[t]||(this._conn[t]=Lx(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[t];return await n.connect(),n}sub(e,t,n){let r=new Set,o={...n||{}};o.alreadyHaveEvent=(d,h)=>{var p;if((p=n==null?void 0:n.alreadyHaveEvent)!=null&&p.call(n,d,h))return!0;if(this.seenOnEnabled){let g=this._seenOn[d]||new Set;g.add(h),this._seenOn[d]=g}return r.has(d)};let i=[],s=new Set,a=new Set,l=e.length,c=!1,f=setTimeout(()=>{c=!0;for(let d of a.values())d()},(n==null?void 0:n.eoseSubTimeout)||this.eoseSubTimeout);e.filter((d,h,p)=>p.indexOf(d)===h).forEach(async d=>{let h;try{h=await this.ensureRelay(d)}catch{g();return}if(!h)return;let p=h.sub(t,o);p.on("event",m=>{r.add(m.id);for(let y of s.values())y(m)}),p.on("eose",()=>{c||g()}),i.push(p);function g(){if(l--,l===0){clearTimeout(f);for(let m of a.values())m()}}});let u={sub(d,h){return i.forEach(p=>p.sub(d,h)),u},unsub(){i.forEach(d=>d.unsub())},on(d,h){d==="event"?s.add(h):d==="eose"&&a.add(h)},off(d,h){d==="event"?s.delete(h):d==="eose"&&a.delete(h)},get events(){return _p(u)}};return u}get(e,t,n){return new Promise(r=>{let o=this.sub(e,[t],n),i=setTimeout(()=>{o.unsub(),r(null)},this.getTimeout);o.on("event",s=>{r(s),clearTimeout(i),o.unsub()})})}list(e,t,n){return new Promise(r=>{let o=[],i=this.sub(e,t,n);i.on("event",s=>{o.push(s)}),i.on("eose",()=>{i.unsub(),r(o)})})}batchedList(e,t,n){return new Promise(r=>{this.batchedByKey[e]?this.batchedByKey[e].push({filters:n,relays:t,resolve:r,events:[]}):(this.batchedByKey[e]=[{filters:n,relays:t,resolve:r,events:[]}],setTimeout(()=>{Object.keys(this.batchedByKey).forEach(async o=>{const i=this.batchedByKey[o],s=[],a=[];i.forEach(c=>{s.push(...c.filters),a.push(...c.relays)});const l=this.sub(a,[kx(...s)]);l.on("event",c=>{i.forEach(f=>wp(f.filters,c)&&f.events.push(c))}),l.on("eose",()=>{l.unsub(),i.forEach(c=>c.resolve(c.events))}),delete this.batchedByKey[o]})},this.batchInterval))})}publish(e,t){return e.map(async n=>(await this.ensureRelay(n)).publish(t))}seenOn(e){var t,n;return Array.from(((n=(t=this._seenOn[e])==null?void 0:t.values)==null?void 0:n.call(t))||[])}},Be={};Ve(Be,{BECH32_REGEX:()=>Cp,decode:()=>ki,naddrEncode:()=>Dx,neventEncode:()=>Fx,noteEncode:()=>Mx,nprofileEncode:()=>Hx,npubEncode:()=>Ux,nrelayEncode:()=>jx,nsecEncode:()=>Nx});var Sp=5e3,Cp=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function Bx(e){const t=new Uint8Array(4);return t[0]=e>>24&255,t[1]=e>>16&255,t[2]=e>>8&255,t[3]=e&255,t}function ki(e){var o,i,s,a,l,c,f,u;let{prefix:t,words:n}=po.decode(e,Sp),r=new Uint8Array(po.fromWords(n));switch(t){case"nprofile":{let d=Gi(r);if(!((o=d[0])!=null&&o[0]))throw new Error("missing TLV 0 for nprofile");if(d[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:It(d[0][0]),relays:d[1]?d[1].map(h=>Jt.decode(h)):[]}}}case"nevent":{let d=Gi(r);if(!((i=d[0])!=null&&i[0]))throw new Error("missing TLV 0 for nevent");if(d[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(d[2]&&d[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(d[3]&&d[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"nevent",data:{id:It(d[0][0]),relays:d[1]?d[1].map(h=>Jt.decode(h)):[],author:(s=d[2])!=null&&s[0]?It(d[2][0]):void 0,kind:(a=d[3])!=null&&a[0]?parseInt(It(d[3][0]),16):void 0}}}case"naddr":{let d=Gi(r);if(!((l=d[0])!=null&&l[0]))throw new Error("missing TLV 0 for naddr");if(!((c=d[2])!=null&&c[0]))throw new Error("missing TLV 2 for naddr");if(d[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!((f=d[3])!=null&&f[0]))throw new Error("missing TLV 3 for naddr");if(d[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Jt.decode(d[0][0]),pubkey:It(d[2][0]),kind:parseInt(It(d[3][0]),16),relays:d[1]?d[1].map(h=>Jt.decode(h)):[]}}}case"nrelay":{let d=Gi(r);if(!((u=d[0])!=null&&u[0]))throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:Jt.decode(d[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:It(r)};default:throw new Error(`unknown prefix ${t}`)}}function Gi(e){let t={},n=e;for(;n.length>0;){let r=n[0],o=n[1];if(!o)throw new Error(`malformed TLV ${r}`);let i=n.slice(2,2+o);if(n=n.slice(2+o),i.length<o)throw new Error(`not enough data to read on TLV ${r}`);t[r]=t[r]||[],t[r].push(i)}return t}function Nx(e){return Bc("nsec",e)}function Ux(e){return Bc("npub",e)}function Mx(e){return Bc("note",e)}function Ii(e,t){let n=po.toWords(t);return po.encode(e,n,Sp)}function Bc(e,t){let n=ii(t);return Ii(e,n)}function Hx(e){let t=na({0:[ii(e.pubkey)],1:(e.relays||[]).map(n=>Tt.encode(n))});return Ii("nprofile",t)}function Fx(e){let t;e.kind!=null&&(t=Bx(e.kind));let n=na({0:[ii(e.id)],1:(e.relays||[]).map(r=>Tt.encode(r)),2:e.author?[ii(e.author)]:[],3:t?[new Uint8Array(t)]:[]});return Ii("nevent",n)}function Dx(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let n=na({0:[Tt.encode(e.identifier)],1:(e.relays||[]).map(r=>Tt.encode(r)),2:[ii(e.pubkey)],3:[new Uint8Array(t)]});return Ii("naddr",n)}function jx(e){let t=na({0:[Tt.encode(e)]});return Ii("nrelay",t)}function na(e){let t=[];return Object.entries(e).forEach(([n,r])=>{r.forEach(o=>{let i=new Uint8Array(o.length+2);i.set([parseInt(n)],0),i.set([o.length],1),i.set(o,2),t.push(i)})}),Cc(...t)}var Vx=/\bnostr:((note|npub|naddr|nevent|nprofile)1\w+)\b|#\[(\d+)\]/g;function Kx(e){let t=[];for(let n of e.content.matchAll(Vx))if(n[2])try{let{type:r,data:o}=ki(n[1]);switch(r){case"npub":{t.push({text:n[0],profile:{pubkey:o,relays:[]}});break}case"nprofile":{t.push({text:n[0],profile:o});break}case"note":{t.push({text:n[0],event:{id:o,relays:[]}});break}case"nevent":{t.push({text:n[0],event:o});break}case"naddr":{t.push({text:n[0],address:o});break}}}catch{}else if(n[3]){let r=parseInt(n[3],10),o=e.tags[r];if(!o)continue;switch(o[0]){case"p":{t.push({text:n[0],profile:{pubkey:o[1],relays:o[2]?[o[2]]:[]}});break}case"e":{t.push({text:n[0],event:{id:o[1],relays:o[2]?[o[2]]:[]}});break}case"a":{try{let[i,s,a]=o[1].split(":");t.push({text:n[0],address:{identifier:a,pubkey:s,kind:parseInt(i,10),relays:o[2]?[o[2]]:[]}})}catch{}break}}}return t}var qx={};Ve(qx,{decrypt:()=>zx,encrypt:()=>Ap});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function Ap(e,t,n){const r=at.getSharedSecret(e,"02"+t),o=$p(r);let i=Uint8Array.from(Gh(16)),s=Tt.encode(n),a=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),l=await crypto.subtle.encrypt({name:"AES-CBC",iv:i},a,s),c=hn.encode(new Uint8Array(l)),f=hn.encode(new Uint8Array(i.buffer));return`${c}?iv=${f}`}async function zx(e,t,n){let[r,o]=n.split("?iv="),i=at.getSharedSecret(e,"02"+t),s=$p(i),a=await crypto.subtle.importKey("raw",s,{name:"AES-CBC"},!1,["decrypt"]),l=hn.decode(r),c=hn.decode(o),f=await crypto.subtle.decrypt({name:"AES-CBC",iv:c},a,l);return Jt.decode(f)}function $p(e){return e.slice(1,33)}var Wx={};Ve(Wx,{NIP05_REGEX:()=>kp,queryProfile:()=>Zx,searchDomain:()=>Gx,useFetchImplementation:()=>Qx});var kp=/^(?:([\w.+-]+)@)?([\w.-]+)$/,ra;try{ra=fetch}catch{}function Qx(e){ra=e}async function Gx(e,t=""){try{return(await(await ra(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function Zx(e){const t=e.match(kp);if(!t)return null;const[n,r="_",o]=t;try{const i=await ra(`https://${o}/.well-known/nostr.json?name=${r}`),{names:s,relays:a}=Yx(await i.json()),l=s[r];return l?{pubkey:l,relays:a==null?void 0:a[l]}:null}catch{return null}}function Yx(e){const t={names:{}};for(const[n,r]of Object.entries(e.names))typeof n=="string"&&typeof r=="string"&&(t.names[n]=r);if(e.relays){t.relays={};for(const[n,r]of Object.entries(e.relays))typeof n=="string"&&Array.isArray(r)&&(t.relays[n]=r.filter(o=>typeof o=="string"))}return t}var Jx={};Ve(Jx,{generateSeedWords:()=>eE,privateKeyFromSeedWords:()=>Xx,validateWords:()=>tE});function Xx(e,t){let r=fr.fromMasterSeed(L2(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!r)throw new Error("could not derive private key");return It(r)}function eE(){return $2(tp)}function tE(e){return T2(e,tp)}var Ip={};Ve(Ip,{parse:()=>nE});function nE(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const r of e.tags)r[0]==="e"&&r[1]&&n.push(r),r[0]==="p"&&r[1]&&t.profiles.push({pubkey:r[1],relays:r[2]?[r[2]]:[]});for(let r=0;r<n.length;r++){const o=n[r],[i,s,a,l]=o,c={id:s,relays:a?[a]:[]},f=r===0,u=r===n.length-1;if(l==="root"){t.root=c;continue}if(l==="reply"){t.reply=c;continue}if(l==="mention"){t.mentions.push(c);continue}if(f){t.root=c;continue}if(u){t.reply=c;continue}t.mentions.push(c)}return t}var rE={};Ve(rE,{getPow:()=>Op,minePow:()=>oE});function Op(e){let t=0;for(let n=0;n<e.length;n++){const r=parseInt(e[n],16);if(r===0)t+=4;else{t+=Math.clz32(r)-28;break}}return t}function oE(e,t){let n=0;const r=e,o=["nonce",n.toString(),t.toString()];for(r.tags.push(o);;){const i=Math.floor(new Date().getTime()/1e3);if(i!==r.created_at&&(n=0,r.created_at=i),o[1]=(++n).toString(),r.id=Xs(r),Op(r.id)>=t)break}return r}var iE={};Ve(iE,{finishRepostEvent:()=>sE,getRepostedEvent:()=>aE,getRepostedEventPointer:()=>Tp});function sE(e,t,n,r){return nr({kind:6,tags:[...e.tags??[],["e",t.id,n],["p",t.pubkey]],content:e.content===""?"":JSON.stringify(t),created_at:e.created_at},r)}function Tp(e){if(e.kind!==6)return;let t,n;for(let r=e.tags.length-1;r>=0&&(t===void 0||n===void 0);r--){const o=e.tags[r];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(t!==void 0)return{id:t[1],relays:[t[2],n==null?void 0:n[2]].filter(r=>typeof r=="string"),author:n==null?void 0:n[1]}}function aE(e,{skipVerification:t}={}){const n=Tp(e);if(n===void 0||e.content==="")return;let r;try{r=JSON.parse(e.content)}catch{return}if(r.id===n.id&&!(!t&&!ea(r)))return r}var Pp={};Ve(Pp,{NOSTR_URI_REGEX:()=>oa,parse:()=>cE,test:()=>lE});var oa=new RegExp(`nostr:(${Cp.source})`);function lE(e){return typeof e=="string"&&new RegExp(`^${oa.source}$`).test(e)}function cE(e){const t=e.match(new RegExp(`^${oa.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:ki(t[1])}}var uE={};Ve(uE,{finishReactionEvent:()=>fE,getReactedEventPointer:()=>dE});function fE(e,t,n){const r=t.tags.filter(o=>o.length>=2&&(o[0]==="e"||o[0]==="p"));return nr({...e,kind:7,tags:[...e.tags??[],...r,["e",t.id],["p",t.pubkey]],content:e.content??"+"},n)}function dE(e){if(e.kind!==7)return;let t,n;for(let r=e.tags.length-1;r>=0&&(t===void 0||n===void 0);r--){const o=e.tags[r];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(!(t===void 0||n===void 0))return{id:t[1],relays:[t[2],n[2]].filter(r=>r!==void 0),author:n[1]}}var hE={};Ve(hE,{createDelegation:()=>pE,getDelegator:()=>gE});function pE(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let r=n.join("&");if(r==="")throw new Error("refusing to create a delegation without any conditions");let o=bo(Tt.encode(`nostr:delegation:${t.pubkey}:${r}`)),i=It(Ai.sign(o,e));return{from:yp(e),to:t.pubkey,cond:r,sig:i}}function gE(e){let t=e.tags.find(a=>a[0]==="delegation"&&a.length>=4);if(!t)return null;let n=t[1],r=t[2],o=t[3],i=r.split("&");for(let a=0;a<i.length;a++){let[l,c,f]=i[a].split(/\b/);if(!(l==="kind"&&c==="="&&e.kind===parseInt(f))){if(l==="created_at"&&c==="<"&&e.created_at<parseInt(f))continue;if(l==="created_at"&&c===">"&&e.created_at>parseInt(f))continue;return null}}let s=bo(Tt.encode(`nostr:delegation:${e.pubkey}:${r}`));return Ai.verify(o,s,n)?n:null}var mE={};Ve(mE,{matchAll:()=>yE,regex:()=>Nc,replaceAll:()=>bE});var Nc=()=>new RegExp(`\\b${oa.source}\\b`,"g");function*yE(e){const t=e.matchAll(Nc());for(const n of t)try{const[r,o]=n;yield{uri:r,value:o,decoded:ki(o),start:n.index,end:n.index+r.length}}catch{}}function bE(e,t){return e.replaceAll(Nc(),(n,r)=>t({uri:n,value:r,decoded:ki(r)}))}var vE={};Ve(vE,{channelCreateEvent:()=>wE,channelHideMessageEvent:()=>_E,channelMessageEvent:()=>EE,channelMetadataEvent:()=>xE,channelMuteUserEvent:()=>SE});var wE=(e,t)=>{let n;if(typeof e.content=="object")n=JSON.stringify(e.content);else if(typeof e.content=="string")n=e.content;else return;return nr({kind:40,tags:[...e.tags??[]],content:n,created_at:e.created_at},t)},xE=(e,t)=>{let n;if(typeof e.content=="object")n=JSON.stringify(e.content);else if(typeof e.content=="string")n=e.content;else return;return nr({kind:41,tags:[["e",e.channel_create_event_id],...e.tags??[]],content:n,created_at:e.created_at},t)},EE=(e,t)=>{const n=[["e",e.channel_create_event_id,e.relay_url,"root"]];return e.reply_to_channel_message_event_id&&n.push(["e",e.reply_to_channel_message_event_id,e.relay_url,"reply"]),nr({kind:42,tags:[...n,...e.tags??[]],content:e.content,created_at:e.created_at},t)},_E=(e,t)=>{let n;if(typeof e.content=="object")n=JSON.stringify(e.content);else if(typeof e.content=="string")n=e.content;else return;return nr({kind:43,tags:[["e",e.channel_message_event_id],...e.tags??[]],content:n,created_at:e.created_at},t)},SE=(e,t)=>{let n;if(typeof e.content=="object")n=JSON.stringify(e.content);else if(typeof e.content=="string")n=e.content;else return;return nr({kind:44,tags:[["p",e.pubkey_to_mute],...e.tags??[]],content:n,created_at:e.created_at},t)},CE={};Ve(CE,{useFetchImplementation:()=>AE,validateGithub:()=>$E});var Uc;try{Uc=fetch}catch{}function AE(e){Uc=e}async function $E(e,t,n){try{return await(await Uc(`https://gist.github.com/${t}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var kE={};Ve(kE,{authenticate:()=>IE});var IE=async({challenge:e,relay:t,sign:n})=>{const r={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""};return t.auth(await n(r))},OE={};Ve(OE,{decrypt:()=>PE,encrypt:()=>TE,utils:()=>kr});var kr={v2:{maxPlaintextSize:65536-128,minCiphertextSize:100,maxCiphertextSize:102400,getConversationKey(e,t){return at.getSharedSecret(e,"02"+t).subarray(1,33)},getMessageKeys(e,t){const n=bx(bo,e,t,"nip44-v2",76);return{encryption:n.subarray(0,32),nonce:n.subarray(32,44),auth:n.subarray(44,76)}},calcPadding(e){if(!Number.isSafeInteger(e)||e<0)throw new Error("expected positive integer");if(e<=32)return 32;const t=1<<Math.floor(Math.log2(e-1))+1,n=t<=256?32:t/8;return n*(Math.floor((e-1)/n)+1)},pad(e){const t=Tt.encode(e),n=t.length;if(n<1||n>=kr.v2.maxPlaintextSize)throw new Error("invalid plaintext length: must be between 1b and 64KB");const r=kr.v2.calcPadding(n),o=new Uint8Array(r-n),i=new Uint8Array(2);return new DataView(i.buffer).setUint16(0,n),Cc(i,t,o)},unpad(e){const t=new DataView(e.buffer).getUint16(0),n=e.subarray(2,2+t);if(t===0||n.length!==t||e.length!==2+kr.v2.calcPadding(t))throw new Error("invalid padding");return Jt.decode(n)}}};function TE(e,t,n={}){const r=n.version??2;if(r!==2)throw new Error("unknown encryption version "+r);const o=n.salt??Gh(32);Lc(o,32);const i=kr.v2.getMessageKeys(e,o),s=kr.v2.pad(t),a=gp(i.encryption,i.nonce,s),l=$i(bo,i.auth,a);return hn.encode(Cc(new Uint8Array([r]),o,a,l))}function PE(e,t){const n=kr.v2;Lc(e,32);const r=t.length;if(r<n.minCiphertextSize||r>=n.maxCiphertextSize)throw new Error("invalid ciphertext length: "+r);if(t[0]==="#")throw new Error("unknown encryption version");let o;try{o=hn.decode(t)}catch(d){throw new Error("invalid base64: "+d.message)}const i=o.subarray(0,1)[0];if(i!==2)throw new Error("unknown encryption version "+i);const s=o.subarray(1,33),a=o.subarray(33,-32),l=o.subarray(-32),c=n.getMessageKeys(e,s),f=$i(bo,c.auth,a);if(!rx(f,l))throw new Error("invalid MAC");const u=gp(c.encryption,c.nonce,a);return n.unpad(u)}var LE={};Ve(LE,{makeNwcRequestEvent:()=>BE,parseConnectionString:()=>RE});function RE(e){const{pathname:t,searchParams:n}=new URL(e),r=t,o=n.get("relay"),i=n.get("secret");if(!r||!o||!i)throw new Error("invalid connection string");return{pubkey:r,relay:o,secret:i}}async function BE({pubkey:e,secret:t,invoice:n}){const o=await Ap(t,e,JSON.stringify({method:"pay_invoice",params:{invoice:n}})),i={kind:23194,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e]]};return nr(i,t)}var NE={};Ve(NE,{getZapEndpoint:()=>ME,makeZapReceipt:()=>DE,makeZapRequest:()=>HE,useFetchImplementation:()=>UE,validateZapRequest:()=>FE});var Mc;try{Mc=fetch}catch{}function UE(e){Mc=e}async function ME(e){try{let t="",{lud06:n,lud16:r}=JSON.parse(e.content);if(n){let{words:s}=po.decode(n,1e3),a=po.fromWords(s);t=Jt.decode(a)}else if(r){let[s,a]=r.split("@");t=`https://${a}/.well-known/lnurlp/${s}`}else return null;let i=await(await Mc(t)).json();if(i.allowsNostr&&i.nostrPubkey)return i.callback}catch{}return null}function HE({profile:e,event:t,amount:n,relays:r,comment:o=""}){if(!n)throw new Error("amount not given");if(!e)throw new Error("profile not given");let i={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",n.toString()],["relays",...r]]};return t&&i.tags.push(["e",t]),i}function FE(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!Rc(t))return"Zap request is not a valid Nostr event.";if(!ea(t))return"Invalid signature on zap request.";let n=t.tags.find(([i,s])=>i==="p"&&s);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let r=t.tags.find(([i,s])=>i==="e"&&s);return r&&!r[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([i,s])=>i==="relays"&&s)?null:"Zap request doesn't have a 'relays' tag."}function DE({zapRequest:e,preimage:t,bolt11:n,paidAt:r}){let i=JSON.parse(e).tags.filter(([a])=>a==="e"||a==="p"||a==="a"),s={kind:9735,created_at:Math.round(r.getTime()/1e3),content:"",tags:[...i,["bolt11",n],["description",e]]};return t&&s.tags.push(["preimage",t]),s}var jE={};Ve(jE,{getToken:()=>VE,unpackEventFromToken:()=>Rp,validateEvent:()=>Bp,validateToken:()=>KE});var Lp="Nostr ";async function VE(e,t,n,r=!1){if(!e||!t)throw new Error("Missing loginUrl or httpMethod");const o=_x(27235);o.tags=[["u",e],["method",t]],o.created_at=Math.round(new Date().getTime()/1e3);const i=await n(o);return(r?Lp:"")+hn.encode(Tt.encode(JSON.stringify(i)))}async function KE(e,t,n){const r=await Rp(e).catch(i=>{throw i});return await Bp(r,t,n).catch(i=>{throw i})}async function Rp(e){if(!e)throw new Error("Missing token");e=e.replace(Lp,"");const t=Jt.decode(hn.decode(e));if(!t||t.length===0||!t.startsWith("{"))throw new Error("Invalid token");return JSON.parse(t)}async function Bp(e,t,n){if(!e)throw new Error("Invalid nostr event");if(!ea(e))throw new Error("Invalid nostr event, signature invalid");if(e.kind!==27235)throw new Error("Invalid nostr event, kind invalid");if(!e.created_at)throw new Error("Invalid nostr event, created_at invalid");if(Math.round(new Date().getTime()/1e3)-e.created_at>60)throw new Error("Invalid nostr event, expired");const r=e.tags.find(i=>i[0]==="u");if((r==null?void 0:r.length)!==1&&(r==null?void 0:r[1])!==t)throw new Error("Invalid nostr event, url tag invalid");const o=e.tags.find(i=>i[0]==="method");if((o==null?void 0:o.length)!==1&&(o==null?void 0:o[1].toLowerCase())!==n.toLowerCase())throw new Error("Invalid nostr event, method tag invalid");return!0}const Is=e=>{const t=Be.decode(e);switch(t.type){case"nprofile":return t.data.pubkey;case"nevent":return t.data.id;case"nrelay":return t.data;case"naddr":return t.data.identifier;case"nsec":return t.data;case"npub":return t.data;case"note":return t.data}};function qE(e){return Array.from(e,t=>("0"+(t&255).toString(16)).slice(-2)).join("")}function gf(e){try{const{words:t}=bl.decode(e),n=new Uint8Array(bl.fromWords(t));return qE(n)}catch{throw new Error("The provided string is not a valid bech32 address: "+e)}}function Vr(e){return e!=null&&typeof e=="object"&&e["@@functional/placeholder"]===!0}function is(e){return function t(n){return arguments.length===0||Vr(n)?t:e.apply(this,arguments)}}function zE(e){return function t(n,r){switch(arguments.length){case 0:return t;case 1:return Vr(n)?t:is(function(o){return e(n,o)});default:return Vr(n)&&Vr(r)?t:Vr(n)?is(function(o){return e(o,r)}):Vr(r)?is(function(o){return e(n,o)}):e(n,r)}}}function WE(e){return Object.prototype.toString.call(e)==="[object String]"}var QE=zE(function(t,n){var r=t<0?n.length+t:t;return WE(n)?n.charAt(r):n[r]});const GE=QE;function ZE(e){return e}var YE=is(ZE);const JE=YE;var XE=GE(-1);const Np=XE,e_="newline",mf="text",t_="topic",n_="emoji",r_="link",o_="html",i_="invoice",Tn=e=>e?e[0]:void 0,s_=e=>e.replace(/^[\w+]+:\/?\/?/,""),a_=e=>{var t;return!e.match(/\.(apk|docx|xlsx|csv|dmg)/)&&((t=Np(e.split("://")))==null?void 0:t.includes("/"))},l_=({content:e,tags:t=[],html:n=!1})=>{const r=[];let o=e.trim(),i="";const s=()=>{if(n)return;const p=Tn(o.match(/^\n+/));if(p)return[e_,p,p]},a=()=>{const p=o.match(/^#\[(\d+)\]/i);if(p){const g=parseInt(p[1]);if(t[g]){const[m,y,x]=t[g],w=[x].filter(JE);let A,_,S;return m==="p"?(A="nprofile",_={pubkey:y,relays:w},S=Be.nprofileEncode(_)):m==="e"&&(A="nevent",_={id:y,relays:w},S=Be.neventEncode(_)),[`nostr:${A}`,p[0],{..._,entity:S}]}}},l=()=>{const p=Tn(o.match(/^#\w+/i));if(p&&!p.match(/^#\d+$/))return[t_,p,p.slice(1)]},c=()=>{const p=Tn(o.match(/^:[\w_]+:/i));if(p){const g=p.slice(1).slice(0,-1),m=t.find(y=>y[0]==="emoji"&&y[1]===g);if(m)return[n_,p,{name:g,url:m[2]}]}},f=()=>{const p=Tn(o.match(/^(web\+)?(nostr:)?\/?\/?n(event|ote|profile|pub|addr)1[\d\w]+/i));if(p)try{const g=s_(p),{type:m,data:y}=Be.decode(g);let x=y;return m==="note"?x={id:y}:m==="npub"&&(x={pubkey:y}),[`nostr:${m}`,p,{...x,entity:g}]}catch(g){console.log(g)}},u=()=>{const p=Tn(o.match(/^ln(bc|url)[\d\w]{50,1000}/i));if(p)return[i_,p,p]},d=()=>{if(n)return;const p=Tn(o.match(/^([a-z+:]{2,30}:\/\/)?[^\s]+\.[a-z]{2,6}[^\s]*[^.!?,:\s]/gi));if(p){const g=Np(r);if((g==null?void 0:g.type)==="text"&&g.value.endsWith("/"))return;let m=p;if(m.match(/\.\./))return;m.match("://")||(m="https://"+m);const y=m.match(/\.(jpg|jpeg|png|webp|gif|avif|svg)([/?]|$)/gi),x=m.match(/\.(mov|mkv|avi|m4v|webm|mp4)([/?]|$)/gi)||m.match(/^https:\/\/youtube\.com\/watch\?v=/gi),w=m.match(/\.(ogg|mp3|wav)([/?]|$)/gi);return[r_,p,{url:m,isMedia:a_(m),type:y?"image":x?"video":w?"audio":"link"}]}},h=()=>{const p=Tn(o.match(/^<(pre|code)>.*?<\/\1>/gis));if(p)return[o_,p,p]};for(;o;){const p=h()||s()||a()||l()||c()||f()||d()||u();if(p){i&&(r.push({type:mf,value:i,raw:i}),i="");const[g,m,y]=p;r.push({type:g,value:y,raw:m}),o=o.slice(m.length)}else{const g=Tn(o.match(/^[\w\d]+ ?/i))||o[0];i+=g,o=o.slice(g.length)}}return i&&r.push({type:mf,value:i,raw:i}),r},c_=["nsfw","nfsw","boostr","nudestr","nude","erostr","pornstr","naked","boobs","porn"],u_=e=>{var g;const t=[...new Set(e.tags.filter(m=>m[0]==="t").map(m=>m[1]))],n=!!e.tags.find(m=>m[0]==="content-warning"||m[0]==="t"&&c_.includes(m[1].toLowerCase())),r=(g=e.tags.find(m=>m[0]==="d"))==null?void 0:g[1];let o=e.tags.filter(m=>!["content-warning","t","d"].includes(m[0]));const i=[],s=[];let a="",l="",c=[];const u=l_({content:e.content||""}).filter(m=>m.type==="link"&&["audio","video","image"].includes(m.value.type)).map(m=>{if(m.value.type==="image")return{"@type":"ImageObject",contentUrl:m.value.url};if(m.value.type==="video")return{"@type":"VideoObject",contentUrl:m.value.url};if(m.value.type==="audio")return{"@type":"AudioObject",contentUrl:m.value.url}}).filter(Boolean),d=Kx(e);if(d.length){const m=[];d.forEach(y=>{let x;if(y.text.match(/^#\[\d+\]$/gi))try{const w=parseInt(y.text.slice(2).slice(0,-1)),A=e.tags[w][1];s.push(Be.npubEncode(A)),m.push(A)}catch(w){console.log(w,e)}else{x=Pp.parse(y.text);const w=Is(x.value);x.decoded.type==="npub"?(i.push(x.value),m.push(w)):["note","naddr","nevent"].includes(x.decoded.type)&&(x.decoded.type==="nevent"&&x.decoded.data.kind===1063?u.push(x.value):s.push(x.value),m.push(w))}}),o=o.filter(y=>!m.includes(y[1]))}const h=o.filter(m=>m[0]==="p").map(m=>{try{return Be.npubEncode(m[1])}catch(y){console.log(y,m,e)}}).filter(Boolean);o=o.filter(m=>m[0]!=="p");const p=Ip.parse({tags:o});if(p.root&&(a=Be.noteEncode(p.root.id)),p.reply&&(l=Be.noteEncode(p.reply.id)),p.mentions.length&&(c=[...c,...p.mentions.map(m=>Be.noteEncode(m.id))]),o=o.filter(m=>!["e","a"].includes(m[0])),e.kind===1063){const m=o.reduce((y,x)=>{const[w,A]=x;if(w==="url")return{...y,contentUrl:A};if(w==="m"){const _=A.includes("video")?"VideoObject":A.includes("image")?"ImageObject":A.includes("audio")?"AudioObject":"MediaObject";return _==="MediaObject"?(console.warn("Unknown media type",A),y):{...y,"@type":_}}return w=="size"?{...y,contentSize:A}:y},{});m.contentUrl&&m["@type"]&&u.push(m)}return{identifier:r,strippedTags:o,mentions:i,citations:s,keywords:t,recipients:h,media:u,rootMessage:a,isPartOf:c,parentMessage:l,isSensitiveContent:n}},Oi=e=>({"@type":"Thing","@id":e.id,sameAs:Be.noteEncode(e.id)}),Ti=(e,t)=>{const n=Oi(e),{mentions:r,citations:o,keywords:i,isSensitiveContent:s}=t;return{...n,"@type":"CreativeWork",author:Be.npubEncode(e.pubkey),dateCreated:new Date(e.created_at).toISOString(),keywords:i.length?i:void 0,citation:o.length?o:void 0,mentions:r.length?r:void 0,contentRating:s?"sensitive":void 0}},f_=(e,t)=>{const n=Ti(e,t),{parentMessage:r,rootMessage:o,isPartOf:i}=t;let s;r&&(s=li(r)?{"@id":gf(r),sameAs:r}:{"@id":r,sameAs:Be.noteEncode(r)});let a;return o&&(a=li(o)?{"@id":gf(o),sameAs:o}:{"@id":o,sameAs:Be.noteEncode(o)}),{...n,"@type":"Comment",parentItem:s,mainEntity:a,isPartOf:i.length?i:void 0}},d_=e=>{const t=Oi(e);let n="ReactAction";!e.content||e.content==="+"?n="LikeAction":e.content==="-"&&(n="DislikeAction");const r=e.tags.find(o=>o[0]==="e");return{...t,"@type":n,agent:Be.npubEncode(e.pubkey),object:r?Be.noteEncode(r[1]):void 0}},h_=e=>{const t=Oi(e);let n={};try{n=JSON.parse(e.content||"{}")}catch(r){console.error(r)}return{...t,"@type":"Person",sameAs:Be.npubEncode(e.pubkey),name:n.name||n.username||n.display_name||n.displayName,alternateName:n.display_name||n.displayName,image:n.picture,description:n.about,url:n.website}},p_=(e,t)=>{const n=Ti(e,t),{media:r}=t;return{...n,"@type":"SocialMediaPosting",sharedContent:r.length?r:void 0}},g_=(e,t)=>{const n=Ti(e,t),{media:r}=t,o=r[0];return{...n,"@type":o==null?void 0:o["@type"],contentUrl:o==null?void 0:o.contentUrl,contentSize:o==null?void 0:o.contentSize}},m_=e=>{const t=Oi(e),n="ShareAction",r=e.tags.find(o=>o[0]==="e");return{...t,"@type":n,agent:Be.npubEncode(e.pubkey),object:r?Be.noteEncode(r[1]):void 0}},y_=(e,t)=>{var u,d,h,p;const n=Ti(e,t),{identifier:r,strippedTags:o}=t,i=(u=o.find(g=>g[0]==="title"))==null?void 0:u[1],s=(d=o.find(g=>g[0]==="summary"))==null?void 0:d[1],a=(h=o.find(g=>g[0]==="published_at"))==null?void 0:h[1],l=(p=o.find(g=>g[0]==="image"))==null?void 0:p[1],c=l?{"@type":"ImageObject",contentUrl:l}:void 0,f=Be.naddrEncode({identifier:r,kind:e.kind,pubkey:e.pubkey});return{...n,"@type":"BlogPosting",sameAs:f,author:Be.npubEncode(e.pubkey),identifier:r,image:c,name:i,description:s,datePublished:a,creativeWorkStatus:e.kind===30024?"draft":"published"}},Up=e=>{const{rootMessage:t,parentMessage:n,isPartOf:r}=e;return!!t||!!n||r.length},b_=e=>e.media.length||!Up(e),v_=e=>{if(e.kind===0)return h_(e);if(e.kind===6||e.kind===16)return m_(e);if(e.kind===7)return d_(e);const t=u_(e);return e.kind===1063?g_(e,t):e.kind===30023||e.kind===30024?y_(e,t):e.kind===1?Up(t)?f_(e,t):b_(t)?p_(e,t):Ti(e,t):Oi(e)},w_=e=>e&&e.schema["@type"]==="Comment"||!1,x_=e=>e&&e.schema["@type"]==="ShareAction"||!1,x8=e=>e&&e.schema["@type"]==="ReactAction"||!1,E8=e=>e&&e.schema["@type"]==="BlogPosting"||!1,Ua=new Rx,Mr=Re(["wss://nostr.wine","wss://relay.nostr.band","wss://nos.lol","wss://relay.mostr.pub"]),li=e=>e.match(/^n(event|ote|pub|profile|addr)1/),Ao=e=>({...e,schema:v_(e)}),ss=e=>li(e)?Is(e):e;function E_(){const e=u=>Ua.seenOn(u),t=u=>{Mr.value=[...Mr.value,u]},n=u=>{Mr.value=Mr.value.filter(d=>d!==u)},r=async(u,{batchId:d,relays:h}={})=>(await Ua.batchedList(d??`${Math.round(Date.now()/1e3)}`,[...Mr.value,...h??[]],u)).map(Ao),o=async(u,{batchId:d,relays:h}={})=>{const p=await Ua.batchedList(d??`${Math.round(Date.now()/1e3)}`,[...Mr.value,...h??[]],[u]);return p[0]?Ao(p[0]):null},i=async u=>{},s=async u=>{const d=ss(u),h=await o({kinds:[0],authors:[d]},{batchId:"authors"});return h?Ao(h):null};return{seenOn:e,addRelay:t,removeRelay:n,fetch:r,count:i,fetchEvent:async u=>{const d=ss(u);let h;if(u.match(/^npub1/))h=await s(u);else if(u.startsWith("naddr1")){const p=Be.decode(u);h=await o({kinds:[p.data.kind],authors:[p.data.pubkey],"#d":[p.data.identifier]},{relays:[...p.data.relays]})}else h=await o({ids:[d]},{batchId:"fetchEvent"}),h==null&&(h=await s(u));return h?Ao(h):null},fetchAuthor:s,fetchContacts:async u=>{const d=ss(u),h=await o({kinds:[3],authors:[d]},{batchId:"fetchContacts"});return h?Ao(h):null},fetchEventComments:async u=>{const d=li(u)?Is(u):u;return(await r([{kinds:[1],"#e":[d]}],{batchId:"fetchEventComments"})).filter(w_).filter(p=>{var g,m,y;return((g=p.schema.parentItem)==null?void 0:g["@id"])===d||!((m=p.schema.parentItem)!=null&&m["@id"])&&((y=p.schema.mainEntity)==null?void 0:y["@id"])===d}).sort((p,g)=>p.created_at-g.created_at)},fetchEventReposts:async u=>{const d=li(u)?Is(u):u;return(await r([{kinds:[6,16],"#e":[d]}],{batchId:"fetchEventReposts"})).filter(x_).sort((p,g)=>p.created_at-g.created_at)}}}const Mp={pubkey:"",nsec:"",displayName:""},Hr=f1("currentUser",Mp),{fetchAuthor:__}=E_();function S_(){const e=async o=>{const i=await __(o);let s;if(i)try{s=JSON.parse(i.content)}catch(l){console.error(l)}const a=(i==null?void 0:i.schema.name)??o.slice(0,10);Hr.value={...Hr.value,displayName:a,event:i??void 0,profile:s}},t=o=>{const i=ss(o);Hr.value.pubkey=i,e(i)},n=ut(()=>!!Hr.value.pubkey);return{updateUserInfo:e,loginWithPubkey:t,currentUser:Hr,isLoggedIn:n,logout:()=>{Hr.value={...Mp}}}}const C_={class:"ns-app-layout-component"},A_={class:"app-content md:p-5"},$_=mo({__name:"NsAppLayout",setup(e){const{isLoggedIn:t,currentUser:n,logout:r,updateUserInfo:o}=S_(),i=()=>{r()};return xi(()=>{t.value&&o(n.value.pubkey)}),(s,a)=>{const l=so("router-link"),c=so("router-view");return Ce(),Qe("div",C_,[Se(Me(yh),null,{start:Nt(()=>[Se(l,{to:{name:Me(wt).home},class:"text-color text-xl font-bold mr-4"},{default:Nt(()=>[_i(" Nos ")]),_:1},8,["to"]),Se(l,{to:{name:Me(wt).user.feed}},{default:Nt(()=>[Se(Me(Lo),{text:"",label:"Feed",icon:"pi pi-list",class:"mr-2"})]),_:1},8,["to"]),Se(l,{to:{name:Me(wt).search}},{default:Nt(()=>[Se(Me(Lo),{text:"",label:"Search",icon:"pi pi-search",class:"mr-2"})]),_:1},8,["to"]),Bt(' <i class="pi pi-bars p-toolbar-separator mr-2" /> ')]),end:Nt(()=>[Me(t)?(Ce(),Ft(Me(Lo),{key:0,outlined:"",label:Me(n).displayName,class:"p-button-secondary",onClick:i},null,8,["label"])):(Ce(),Ft(l,{key:1,to:{name:Me(wt).auth.login}},{default:Nt(()=>[Se(Me(Lo),{outlined:"",label:"Login",class:"p-button-secondary"})]),_:1},8,["to"]))]),_:1}),Pe("div",A_,[Se(c)])])}}});const Hc=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},k_=Hc($_,[["__scopeId","data-v-8dd5f1cb"],["__file","/Users/nicolasc/Documents/projects/others/nosworld/src/components/structures/NsAppLayout/NsAppLayout.vue"]]);var I_=Oe.extend({}),O_=I_.extend("focustrap",{mounted:function(t,n){var r=n.value||{},o=r.disabled;o||(this.createHiddenFocusableElements(t,n),this.bind(t,n),this.autoFocus(t,n)),t.setAttribute("data-pd-focustrap",!0),this.$el=t},updated:function(t,n){var r=n.value||{},o=r.disabled;o&&this.unbind(t)},unmounted:function(t){this.unbind(t)},methods:{getComputedSelector:function(t){return':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(t??"")},bind:function(t,n){var r=this,o=n.value||{},i=o.onFocusIn,s=o.onFocusOut;t.$_pfocustrap_mutationobserver=new MutationObserver(function(a){a.forEach(function(l){if(l.type==="childList"&&!t.contains(document.activeElement)){var c=function f(u){var d=se.isFocusableElement(u)?se.isFocusableElement(u,r.getComputedSelector(t.$_pfocustrap_focusableselector))?u:se.getFirstFocusableElement(t,r.getComputedSelector(t.$_pfocustrap_focusableselector)):se.getFirstFocusableElement(u);return de.isNotEmpty(d)?d:f(u.nextSibling)};se.focus(c(l.nextSibling))}})}),t.$_pfocustrap_mutationobserver.disconnect(),t.$_pfocustrap_mutationobserver.observe(t,{childList:!0}),t.$_pfocustrap_focusinlistener=function(a){return i&&i(a)},t.$_pfocustrap_focusoutlistener=function(a){return s&&s(a)},t.addEventListener("focusin",t.$_pfocustrap_focusinlistener),t.addEventListener("focusout",t.$_pfocustrap_focusoutlistener)},unbind:function(t){t.$_pfocustrap_mutationobserver&&t.$_pfocustrap_mutationobserver.disconnect(),t.$_pfocustrap_focusinlistener&&t.removeEventListener("focusin",t.$_pfocustrap_focusinlistener)&&(t.$_pfocustrap_focusinlistener=null),t.$_pfocustrap_focusoutlistener&&t.removeEventListener("focusout",t.$_pfocustrap_focusoutlistener)&&(t.$_pfocustrap_focusoutlistener=null)},autoFocus:function(t,n){var r=n.value||{},o=r.autoFocusSelector,i=o===void 0?"":o,s=r.firstFocusableSelector,a=s===void 0?"":s,l=r.autoFocus,c=l===void 0?!1:l,f=se.getFirstFocusableElement(t,"[autofocus]".concat(this.getComputedSelector(i)));c&&!f&&(f=se.getFirstFocusableElement(t,this.getComputedSelector(a))),se.focus(f)},onFirstHiddenElementFocus:function(t){var n,r=t.currentTarget,o=t.relatedTarget,i=o===r.$_pfocustrap_lasthiddenfocusableelement||!((n=this.$el)!==null&&n!==void 0&&n.contains(o))?se.getFirstFocusableElement(r.parentElement,this.getComputedSelector(r.$_pfocustrap_focusableselector)):r.$_pfocustrap_lasthiddenfocusableelement;se.focus(i)},onLastHiddenElementFocus:function(t){var n,r=t.currentTarget,o=t.relatedTarget,i=o===r.$_pfocustrap_firsthiddenfocusableelement||!((n=this.$el)!==null&&n!==void 0&&n.contains(o))?se.getLastFocusableElement(r.parentElement,this.getComputedSelector(r.$_pfocustrap_focusableselector)):r.$_pfocustrap_firsthiddenfocusableelement;se.focus(i)},createHiddenFocusableElements:function(t,n){var r=this,o=n.value||{},i=o.tabIndex,s=i===void 0?0:i,a=o.firstFocusableSelector,l=a===void 0?"":a,c=o.lastFocusableSelector,f=c===void 0?"":c,u=function(g){return se.createElement("span",{class:"p-hidden-accessible p-hidden-focusable",tabIndex:s,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:g==null?void 0:g.bind(r)})},d=u(this.onFirstHiddenElementFocus),h=u(this.onLastHiddenElementFocus);d.$_pfocustrap_lasthiddenfocusableelement=h,d.$_pfocustrap_focusableselector=l,d.setAttribute("data-pc-section","firstfocusableelement"),h.$_pfocustrap_firsthiddenfocusableelement=d,h.$_pfocustrap_focusableselector=f,h.setAttribute("data-pc-section","lastfocusableelement"),t.prepend(d),t.append(h)}}}),Hp={name:"TimesIcon",extends:Ws},T_=Pe("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1),P_=[T_];function L_(e,t,n,r,o,i){return Ce(),Qe("svg",ve({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),P_,16)}Hp.render=L_;var Fp={name:"WindowMaximizeIcon",extends:Ws,computed:{pathId:function(){return"pv_icon_clip_".concat(Yo())}}},R_=["clipPath"],B_=Pe("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"},null,-1),N_=[B_],U_=["id"],M_=Pe("rect",{width:"14",height:"14",fill:"white"},null,-1),H_=[M_];function F_(e,t,n,r,o,i){return Ce(),Qe("svg",ve({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),[Pe("g",{clipPath:"url(#".concat(i.pathId,")")},N_,8,R_),Pe("defs",null,[Pe("clipPath",{id:"".concat(i.pathId)},H_,8,U_)])],16)}Fp.render=F_;var Dp={name:"WindowMinimizeIcon",extends:Ws,computed:{pathId:function(){return"pv_icon_clip_".concat(Yo())}}},D_=["clipPath"],j_=Pe("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"},null,-1),V_=[j_],K_=["id"],q_=Pe("rect",{width:"14",height:"14",fill:"white"},null,-1),z_=[q_];function W_(e,t,n,r,o,i){return Ce(),Qe("svg",ve({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),[Pe("g",{clipPath:"url(#".concat(i.pathId,")")},V_,8,D_),Pe("defs",null,[Pe("clipPath",{id:"".concat(i.pathId)},z_,8,K_)])],16)}Dp.render=W_;var jp={name:"Portal",props:{appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=se.isClient()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function Q_(e,t,n,r,o,i){return i.inline?ht(e.$slots,"default",{key:0}):o.mounted?(Ce(),Ft(Py,{key:1,to:n.appendTo},[ht(e.$slots,"default")],8,["to"])):Bt("",!0)}jp.render=Q_;var G_=`
.p-dialog-mask.p-component-overlay {
    pointer-events: auto;
}

.p-dialog {
    max-height: 90%;
    transform: scale(1);
}

.p-dialog-content {
    overflow-y: auto;
}

.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
}

.p-dialog-footer {
    flex-shrink: 0;
}

.p-dialog .p-dialog-header-icons {
    display: flex;
    align-items: center;
}

.p-dialog .p-dialog-header-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Fluid */
.p-fluid .p-dialog-footer .p-button {
    width: auto;
}

/* Animation */
/* Center */
.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

/* Top, Bottom, Left, Right, Top* and Bottom* */
.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}
.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}
.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}
.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}
.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}
.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

/* Maximize */
.p-dialog-maximized {
    -webkit-transition: none;
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
}
.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}

.p-confirm-dialog .p-dialog-content {
    display: flex;
    align-items: center;
}
`,Z_={mask:function(t){var n=t.position,r=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"||n==="topleft"||n==="bottomleft"?"flex-start":n==="right"||n==="topright"||n==="bottomright"?"flex-end":"center",alignItems:n==="top"||n==="topleft"||n==="topright"?"flex-start":n==="bottom"||n==="bottomleft"||n==="bottomright"?"flex-end":"center",pointerEvents:r?"auto":"none"}},root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},Y_={mask:function(t){var n=t.props,r=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"],o=r.find(function(i){return i===n.position});return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":n.modal},o?"p-dialog-".concat(o):""]},root:function(t){var n=t.props,r=t.instance;return["p-dialog p-component",{"p-dialog-rtl":n.rtl,"p-dialog-maximized":n.maximizable&&r.maximized,"p-input-filled":r.$primevue.config.inputStyle==="filled","p-ripple-disabled":r.$primevue.config.ripple===!1}]},header:"p-dialog-header",headerTitle:"p-dialog-title",headerIcons:"p-dialog-header-icons",maximizableButton:"p-dialog-header-icon p-dialog-header-maximize p-link",maximizableIcon:"p-dialog-header-maximize-icon",closeButton:"p-dialog-header-icon p-dialog-header-close p-link",closeButtonIcon:"p-dialog-header-close-icon",content:"p-dialog-content",footer:"p-dialog-footer"},J_=er(G_,{name:"dialog",manual:!0}),X_=J_.load,e3={name:"BaseDialog",extends:zs,props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},rtl:{type:Boolean,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},_instance:null},css:{classes:Y_,inlineStyles:Z_,loadStyle:X_},provide:function(){return{$parentInstance:this}}},Vp={name:"Dialog",extends:e3,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragend"],provide:function(){var t=this;return{dialogRef:ut(function(){return t._instance})}},data:function(){return{containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&Sa.clear(this.mask),this.container=null,this.mask=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{close:function(){this.$emit("update:visible",!1)},onBeforeEnter:function(t){t.setAttribute(this.attributeSelector,"")},onEnter:function(){this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&Sa.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&se.addClass(this.mask,"p-component-overlay-leave")},onLeave:function(){this.$emit("hide"),this.focusableClose=null,this.focusableMax=null},onAfterLeave:function(){this.autoZIndex&&Sa.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissableMask&&this.modal&&this.mask===t.target&&this.close()},focus:function(){var t=function(o){return o&&o.querySelector("[autofocus]")},n=this.$slots.footer&&t(this.footerContainer);n||(n=this.$slots.header&&t(this.headerContainer),n||(n=this.$slots.default&&t(this.content),n||(this.maximizable?(this.focusableMax=!0,n=this.maximizableButton):(this.focusableClose=!0,n=this.closeButton)))),n&&se.focus(n)},maximize:function(t){this.maximized?(this.maximized=!1,this.$emit("unmaximize",t)):(this.maximized=!0,this.$emit("maximize",t)),this.modal||(this.maximized?se.addClass(document.body,"p-overflow-hidden"):se.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings:function(){(this.modal||this.maximizable&&this.maximized)&&se.addClass(document.body,"p-overflow-hidden")},unbindDocumentState:function(){(this.modal||this.maximizable&&this.maximized)&&se.removeClass(document.body,"p-overflow-hidden")},onKeyDown:function(t){t.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},maximizableRef:function(t){this.maximizableButton=t},closeButtonRef:function(t){this.closeButton=t},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var t;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",se.setAttribute(this.styleElement,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.head.appendChild(this.styleElement);var n="";for(var r in this.breakpoints)n+=`
                        @media screen and (max-width: `.concat(r,`) {
                            .p-dialog[`).concat(this.attributeSelector,`] {
                                width: `).concat(this.breakpoints[r],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag:function(t){se.findSingle(t.target,'[data-pc-section="headeraction"]')||se.findSingle(t.target.parentElement,'[data-pc-section="headeraction"]')||this.draggable&&(this.dragging=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,this.container.style.margin="0",!this.isUnstyled&&se.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners:function(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener:function(){var t=this;this.documentDragListener=function(n){if(t.dragging){var r=se.getOuterWidth(t.container),o=se.getOuterHeight(t.container),i=n.pageX-t.lastPageX,s=n.pageY-t.lastPageY,a=t.container.getBoundingClientRect(),l=a.left+i,c=a.top+s,f=se.getViewport(),u=getComputedStyle(t.container),d=parseFloat(u.marginLeft),h=parseFloat(u.marginTop);t.container.style.position="fixed",t.keepInViewport?(l>=t.minX&&l+r<f.width&&(t.lastPageX=n.pageX,t.container.style.left=l-d+"px"),c>=t.minY&&c+o<f.height&&(t.lastPageY=n.pageY,t.container.style.top=c-h+"px")):(t.lastPageX=n.pageX,t.container.style.left=l-d+"px",t.lastPageY=n.pageY,t.container.style.top=c-h+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener:function(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener:function(){var t=this;this.documentDragEndListener=function(n){t.dragging&&(t.dragging=!1,!t.isUnstyled&&se.removeClass(document.body,"p-unselectable-text"),t.$emit("dragend",n))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener:function(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maximizeIconComponent:function(){return this.maximized?this.minimizeIcon?"span":"WindowMinimizeIcon":this.maximizeIcon?"span":"WindowMaximizeIcon"},ariaId:function(){return Yo()},ariaLabelledById:function(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.ariaId+"_header":null},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},attributeSelector:function(){return Yo()},contentStyleClass:function(){return["p-dialog-content",this.contentClass]}},directives:{ripple:wh,focustrap:O_},components:{Portal:jp,WindowMinimizeIcon:Dp,WindowMaximizeIcon:Fp,TimesIcon:Hp}};function ci(e){"@babel/helpers - typeof";return ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ci(e)}function yf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Fr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yf(Object(n),!0).forEach(function(r){t3(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function t3(e,t,n){return t=n3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n3(e){var t=r3(e,"string");return ci(t)==="symbol"?t:String(t)}function r3(e,t){if(ci(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ci(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var o3=["aria-labelledby","aria-modal"],i3=["id"],s3=["autofocus","tabindex"],a3=["autofocus","aria-label"];function l3(e,t,n,r,o,i){var s=so("Portal"),a=Za("ripple"),l=Za("focustrap");return Ce(),Ft(s,{appendTo:e.appendTo},{default:Nt(function(){return[o.containerVisible?(Ce(),Qe("div",ve({key:0,ref:i.maskRef,class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),onClick:t[3]||(t[3]=function(){return i.onMaskClick&&i.onMaskClick.apply(i,arguments)})},e.ptm("mask")),[Se(lc,ve({name:"p-dialog",onBeforeEnter:i.onBeforeEnter,onEnter:i.onEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},e.ptm("transition")),{default:Nt(function(){return[e.visible?es((Ce(),Qe("div",ve({key:0,ref:i.containerRef,class:e.cx("root"),style:e.sx("root"),role:"dialog","aria-labelledby":i.ariaLabelledById,"aria-modal":e.modal},Fr(Fr({},e.$attrs),e.ptm("root"))),[e.showHeader?(Ce(),Qe("div",ve({key:0,ref:i.headerContainerRef,class:e.cx("header"),onMousedown:t[2]||(t[2]=function(){return i.initDrag&&i.initDrag.apply(i,arguments)})},e.ptm("header")),[ht(e.$slots,"header",{},function(){return[e.header?(Ce(),Qe("span",ve({key:0,id:i.ariaLabelledById,class:e.cx("headerTitle")},e.ptm("headerTitle")),us(e.header),17,i3)):Bt("",!0)]}),Pe("div",ve({class:e.cx("headerIcons")},e.ptm("headerIcons")),[e.maximizable?es((Ce(),Qe("button",ve({key:0,ref:i.maximizableRef,autofocus:o.focusableMax,class:e.cx("maximizableButton"),onClick:t[0]||(t[0]=function(){return i.maximize&&i.maximize.apply(i,arguments)}),type:"button",tabindex:e.maximizable?"0":"-1"},e.ptm("maximizableButton"),{"data-pc-group-section":"headericon"}),[ht(e.$slots,"maximizeicon",{maximized:o.maximized,class:Gn(e.cx("maximizableIcon"))},function(){return[(Ce(),Ft(ru(i.maximizeIconComponent),ve({class:[e.cx("maximizableIcon"),o.maximized?e.minimizeIcon:e.maximizeIcon]},e.ptm("maximizableIcon")),null,16,["class"]))]})],16,s3)),[[a]]):Bt("",!0),e.closable?es((Ce(),Qe("button",ve({key:1,ref:i.closeButtonRef,autofocus:o.focusableClose,class:e.cx("closeButton"),onClick:t[1]||(t[1]=function(){return i.close&&i.close.apply(i,arguments)}),"aria-label":i.closeAriaLabel,type:"button"},Fr(Fr({},e.closeButtonProps),e.ptm("closeButton")),{"data-pc-group-section":"headericon"}),[ht(e.$slots,"closeicon",{class:Gn(e.cx("closeButtonIcon"))},function(){return[(Ce(),Ft(ru(e.closeIcon?"span":"TimesIcon"),ve({class:[e.cx("closeButtonIcon"),e.closeIcon]},e.ptm("closeButtonIcon")),null,16,["class"]))]})],16,a3)),[[a]]):Bt("",!0)],16)],16)):Bt("",!0),Pe("div",ve({ref:i.contentRef,class:[e.cx("content"),e.contentClass],style:e.contentStyle},Fr(Fr({},e.contentProps),e.ptm("content"))),[ht(e.$slots,"default")],16),e.footer||e.$slots.footer?(Ce(),Qe("div",ve({key:1,ref:i.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[ht(e.$slots,"footer",{},function(){return[_i(us(e.footer),1)]})],16)):Bt("",!0)],16,o3)),[[l,{disabled:!e.modal}]]):Bt("",!0)]}),_:3},16,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):Bt("",!0)]}),_:3},8,["appendTo"])}Vp.render=l3;const c3=mo({__name:"NsOnlineChecker",setup(e){const t=h1();return(n,r)=>(Ce(),Ft(Me(Vp),{class:"vd-online-checker",visible:!Me(t),modal:"",closable:!1,position:"bottom",header:"Internet lost"},{default:Nt(()=>[_i(" Please check your connection... ")]),_:1},8,["visible"]))}}),u3=Hc(c3,[["__file","/Users/nicolasc/Documents/projects/others/nosworld/src/components/structures/NsOnlineChecker/NsOnlineChecker.vue"]]),f3={class:"nosword-application"},d3=mo({__name:"App",setup(e){return(t,n)=>{const r=so("RouterView");return Ce(),Qe("div",f3,[Se(k_,null,{default:Nt(()=>[Se(r)]),_:1}),Se(u3)])}}}),h3=Hc(d3,[["__file","/Users/nicolasc/Documents/projects/others/nosworld/src/App.vue"]]);var nt={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function ui(e){"@babel/helpers - typeof";return ui=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ui(e)}function bf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ma(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bf(Object(n),!0).forEach(function(r){p3(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function p3(e,t,n){return t=g3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g3(e){var t=m3(e,"string");return ui(t)==="symbol"?t:String(t)}function m3(e,t){if(ui(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ui(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var vf={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left"}},filterMatchModeOptions:{text:[nt.STARTS_WITH,nt.CONTAINS,nt.NOT_CONTAINS,nt.ENDS_WITH,nt.EQUALS,nt.NOT_EQUALS],numeric:[nt.EQUALS,nt.NOT_EQUALS,nt.LESS_THAN,nt.LESS_THAN_OR_EQUAL_TO,nt.GREATER_THAN,nt.GREATER_THAN_OR_EQUAL_TO],date:[nt.DATE_IS,nt.DATE_IS_NOT,nt.DATE_BEFORE,nt.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},pt:void 0,unstyled:!1,csp:{nonce:void 0}},y3=Symbol();function b3(e,t,n,r){var o=document.getElementById(n),i=o.cloneNode(!0),s=o.getAttribute("href").replace(e,t);i.setAttribute("id",n+"-clone"),i.setAttribute("href",s),i.addEventListener("load",function(){o.remove(),i.setAttribute("id",n),r&&r()}),o.parentNode&&o.parentNode.insertBefore(i,o.nextSibling)}var v3={install:function(t,n){var r=n?Ma(Ma({},vf),n):Ma({},vf),o={config:yi(r),changeTheme:b3};t.config.globalProperties.$primevue=o,t.provide(y3,o)}};const w3="modulepreload",x3=function(e){return"/"+e},wf={},on=function(e,t,n){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(o=>{if(o=x3(o),o in wf)return;wf[o]=!0;const i=o.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(n)for(let l=r.length-1;l>=0;l--){const c=r[l];if(c.href===o&&(!i||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${s}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":w3,!i&&(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),i)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const un=typeof window<"u";function E3(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const _e=Object.assign;function Ha(e,t){const n={};for(const r in t){const o=t[r];n[r]=Et(o)?o.map(e):e(o)}return n}const Fo=()=>{},Et=Array.isArray;function me(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const _3=/\/$/,S3=e=>e.replace(_3,"");function Fa(e,t,n="/"){let r,o={},i="",s="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,a>-1?a:t.length),o=e(i)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=$3(r??t,n),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:s}}function C3(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function xf(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ef(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Jn(t.matched[r],n.matched[o])&&Kp(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Jn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Kp(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!A3(e[n],t[n]))return!1;return!0}function A3(e,t){return Et(e)?_f(e,t):Et(t)?_f(t,e):e===t}function _f(e,t){return Et(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function $3(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return me(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let i=n.length-1,s,a;for(s=0;s<r.length;s++)if(a=r[s],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var fi;(function(e){e.pop="pop",e.push="push"})(fi||(fi={}));var Do;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Do||(Do={}));function k3(e){if(!e)if(un){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),S3(e)}const I3=/^[^#]+#/;function O3(e,t){return e.replace(I3,"#")+t}function T3(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ia=()=>({left:window.pageXOffset,top:window.pageYOffset});function P3(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!r||!document.getElementById(e.el.slice(1))))try{const i=document.querySelector(e.el);if(r&&i){me(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{me(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o){me(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=T3(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Sf(e,t){return(history.state?history.state.position-t:-1)+e}const Bl=new Map;function L3(e,t){Bl.set(e,t)}function R3(e){const t=Bl.get(e);return Bl.delete(e),t}let B3=()=>location.protocol+"//"+location.host;function qp(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let a=o.includes(e.slice(i))?e.slice(i).length:1,l=o.slice(a);return l[0]!=="/"&&(l="/"+l),xf(l,"")}return xf(n,e)+r+o}function N3(e,t,n,r){let o=[],i=[],s=null;const a=({state:d})=>{const h=qp(e,location),p=n.value,g=t.value;let m=0;if(d){if(n.value=h,t.value=d,s&&s===p){s=null;return}m=g?d.position-g.position:0}else r(h);o.forEach(y=>{y(n.value,p,{delta:m,type:fi.pop,direction:m?m>0?Do.forward:Do.back:Do.unknown})})};function l(){s=n.value}function c(d){o.push(d);const h=()=>{const p=o.indexOf(d);p>-1&&o.splice(p,1)};return i.push(h),h}function f(){const{history:d}=window;d.state&&d.replaceState(_e({},d.state,{scroll:ia()}),"")}function u(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function Cf(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?ia():null}}function U3(e){const{history:t,location:n}=window,r={value:qp(e,n)},o={value:t.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const u=e.indexOf("#"),d=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+l:B3()+e+l;try{t[f?"replaceState":"pushState"](c,"",d),o.value=c}catch(h){me("Error with push/replace State",h),n[f?"replace":"assign"](d)}}function s(l,c){const f=_e({},t.state,Cf(o.value.back,l,o.value.forward,!0),c,{position:o.value.position});i(l,f,!0),r.value=l}function a(l,c){const f=_e({},o.value,t.state,{forward:l,scroll:ia()});t.state||me(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(f.current,f,!0);const u=_e({},Cf(r.value,l,null),{position:f.position+1},c);i(l,u,!1),r.value=l}return{location:r,state:o,push:a,replace:s}}function M3(e){e=k3(e);const t=U3(e),n=N3(e,t.state,t.location,t.replace);function r(i,s=!0){s||n.pauseListeners(),history.go(i)}const o=_e({location:"",base:e,go:r,createHref:O3.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function H3(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),!e.endsWith("#/")&&!e.endsWith("#")&&me(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/,"#")}".`),M3(e)}function F3(e){return typeof e=="string"||e&&typeof e=="object"}function zp(e){return typeof e=="string"||typeof e=="symbol"}const Pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wp=Symbol("navigation failure");var Af;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Af||(Af={}));const D3={1({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},2({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${V3(t)}" via a navigation guard.`},4({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},8({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},16({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function go(e,t){return _e(new Error(D3[e](t)),{type:e,[Wp]:!0},t)}function sn(e,t){return e instanceof Error&&Wp in e&&(t==null||!!(e.type&t))}const j3=["params","query","hash"];function V3(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of j3)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const $f="[^/]+?",K3={sensitive:!1,strict:!1,start:!0,end:!0},q3=/[.+*?^${}()[\]/\\]/g;function z3(e,t){const n=_e({},K3,t),r=[];let o=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(o+="/");for(let u=0;u<c.length;u++){const d=c[u];let h=40+(n.sensitive?.25:0);if(d.type===0)u||(o+="/"),o+=d.value.replace(q3,"\\$&"),h+=40;else if(d.type===1){const{value:p,repeatable:g,optional:m,regexp:y}=d;i.push({name:p,repeatable:g,optional:m});const x=y||$f;if(x!==$f){h+=10;try{new RegExp(`(${x})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${p}" (${x}): `+A.message)}}let w=g?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;u||(w=m&&c.length<2?`(?:/${w})`:"/"+w),m&&(w+="?"),o+=w,h+=20,m&&(h+=-8),g&&(h+=-20),x===".*"&&(h+=-50)}f.push(h)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function a(c){const f=c.match(s),u={};if(!f)return null;for(let d=1;d<f.length;d++){const h=f[d]||"",p=i[d-1];u[p.name]=h&&p.repeatable?h.split("/"):h}return u}function l(c){let f="",u=!1;for(const d of e){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const h of d)if(h.type===0)f+=h.value;else if(h.type===1){const{value:p,repeatable:g,optional:m}=h,y=p in c?c[p]:"";if(Et(y)&&!g)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const x=Et(y)?y.join("/"):y;if(!x)if(m)d.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${p}"`);f+=x}}return f||"/"}return{re:s,score:r,keys:i,parse:a,stringify:l}}function W3(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Q3(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const i=W3(r[n],o[n]);if(i)return i;n++}if(Math.abs(o.length-r.length)===1){if(kf(r))return 1;if(kf(o))return-1}return o.length-r.length}function kf(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const G3={type:0,value:""},Z3=/[a-zA-Z0-9_]/;function Y3(e){if(!e)return[[]];if(e==="/")return[[G3]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,r=n;const o=[];let i;function s(){i&&o.push(i),i=[]}let a=0,l,c="",f="";function u(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&u(),s()):l===":"?(u(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:Z3.test(l)?d():(u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),u(),s(),o}function J3(e,t,n){const r=z3(Y3(e.path),n);{const i=new Set;for(const s of r.keys)i.has(s.name)&&me(`Found duplicated params with name "${s.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),i.add(s.name)}const o=_e(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function X3(e,t){const n=[],r=new Map;t=Tf({strict:!1,end:!0,sensitive:!1},t);function o(f){return r.get(f)}function i(f,u,d){const h=!d,p=eS(f);oS(p,u),p.aliasOf=d&&d.record;const g=Tf(t,f),m=[p];if("alias"in f){const w=typeof f.alias=="string"?[f.alias]:f.alias;for(const A of w)m.push(_e({},p,{components:d?d.record.components:p.components,path:A,aliasOf:d?d.record:p}))}let y,x;for(const w of m){const{path:A}=w;if(u&&A[0]!=="/"){const _=u.record.path,S=_[_.length-1]==="/"?"":"/";w.path=u.record.path+(A&&S+A)}if(w.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(y=J3(w,u,g),u&&A[0]==="/"&&iS(y,u),d?(d.alias.push(y),rS(d,y)):(x=x||y,x!==y&&x.alias.push(y),h&&f.name&&!Of(y)&&s(f.name)),p.children){const _=p.children;for(let S=0;S<_.length;S++)i(_[S],y,d&&d.children[S])}d=d||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return x?()=>{s(x)}:Fo}function s(f){if(zp(f)){const u=r.get(f);u&&(r.delete(f),n.splice(n.indexOf(u),1),u.children.forEach(s),u.alias.forEach(s))}else{const u=n.indexOf(f);u>-1&&(n.splice(u,1),f.record.name&&r.delete(f.record.name),f.children.forEach(s),f.alias.forEach(s))}}function a(){return n}function l(f){let u=0;for(;u<n.length&&Q3(f,n[u])>=0&&(f.record.path!==n[u].record.path||!Qp(f,n[u]));)u++;n.splice(u,0,f),f.record.name&&!Of(f)&&r.set(f.record.name,f)}function c(f,u){let d,h={},p,g;if("name"in f&&f.name){if(d=r.get(f.name),!d)throw go(1,{location:f});{const x=Object.keys(f.params||{}).filter(w=>!d.keys.find(A=>A.name===w));x.length&&me(`Discarded invalid param(s) "${x.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}g=d.record.name,h=_e(If(u.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),f.params&&If(f.params,d.keys.map(x=>x.name))),p=d.stringify(h)}else if("path"in f)p=f.path,p.startsWith("/")||me(`The Matcher cannot resolve relative paths but received "${p}". Unless you directly called \`matcher.resolve("${p}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),d=n.find(x=>x.re.test(p)),d&&(h=d.parse(p),g=d.record.name);else{if(d=u.name?r.get(u.name):n.find(x=>x.re.test(u.path)),!d)throw go(1,{location:f,currentLocation:u});g=d.record.name,h=_e({},u.params,f.params),p=d.stringify(h)}const m=[];let y=d;for(;y;)m.unshift(y.record),y=y.parent;return{name:g,path:p,params:h,matched:m,meta:nS(m)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:s,getRoutes:a,getRecordMatcher:o}}function If(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function eS(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:tS(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function tS(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Of(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function nS(e){return e.reduce((t,n)=>_e(t,n.meta),{})}function Tf(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Nl(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function rS(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(Nl.bind(null,n)))return me(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(Nl.bind(null,n)))return me(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function oS(e,t){t&&t.record.name&&!e.name&&!e.path&&me(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function iS(e,t){for(const n of t.keys)if(!e.keys.find(Nl.bind(null,n)))return me(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function Qp(e,t){return t.children.some(n=>n===e||Qp(e,n))}const Gp=/#/g,sS=/&/g,aS=/\//g,lS=/=/g,cS=/\?/g,Zp=/\+/g,uS=/%5B/g,fS=/%5D/g,Yp=/%5E/g,dS=/%60/g,Jp=/%7B/g,hS=/%7C/g,Xp=/%7D/g,pS=/%20/g;function Fc(e){return encodeURI(""+e).replace(hS,"|").replace(uS,"[").replace(fS,"]")}function gS(e){return Fc(e).replace(Jp,"{").replace(Xp,"}").replace(Yp,"^")}function Ul(e){return Fc(e).replace(Zp,"%2B").replace(pS,"+").replace(Gp,"%23").replace(sS,"%26").replace(dS,"`").replace(Jp,"{").replace(Xp,"}").replace(Yp,"^")}function mS(e){return Ul(e).replace(lS,"%3D")}function yS(e){return Fc(e).replace(Gp,"%23").replace(cS,"%3F")}function bS(e){return e==null?"":yS(e).replace(aS,"%2F")}function di(e){try{return decodeURIComponent(""+e)}catch{me(`Error decoding "${e}". Using original value`)}return""+e}function vS(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const i=r[o].replace(Zp," "),s=i.indexOf("="),a=di(s<0?i:i.slice(0,s)),l=s<0?null:di(i.slice(s+1));if(a in t){let c=t[a];Et(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function Pf(e){let t="";for(let n in e){const r=e[n];if(n=mS(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Et(r)?r.map(i=>i&&Ul(i)):[r&&Ul(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function wS(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Et(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const xS=Symbol("router view location matched"),Lf=Symbol("router view depth"),sa=Symbol("router"),eg=Symbol("route location"),Ml=Symbol("router view location");function $o(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Nn(e,t,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((s,a)=>{const l=u=>{u===!1?a(go(4,{from:n,to:t})):u instanceof Error?a(u):F3(u)?a(go(2,{from:t,to:u})):(i&&r.enterCallbacks[o]===i&&typeof u=="function"&&i.push(u),s())},c=e.call(r&&r.instances[o],t,n,ES(l,t,n));let f=Promise.resolve(c);if(e.length<3&&(f=f.then(l)),e.length>2){const u=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof c=="object"&&"then"in c)f=f.then(d=>l._called?d:(me(u),Promise.reject(new Error("Invalid navigation guard"))));else if(c!==void 0&&!l._called){me(u),a(new Error("Invalid navigation guard"));return}}f.catch(u=>a(u))})}function ES(e,t,n){let r=0;return function(){r++===1&&me(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,r===1&&e.apply(null,arguments)}}function Da(e,t,n,r){const o=[];for(const i of e){!i.components&&!i.children.length&&me(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const s in i.components){let a=i.components[s];{if(!a||typeof a!="object"&&typeof a!="function")throw me(`Component "${s}" in record with path "${i.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){me(`Component "${s}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const l=a;a=()=>l}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,me(`Component "${s}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!i.instances[s]))if(_S(a)){const c=(a.__vccOpts||a)[t];c&&o.push(Nn(c,n,r,i,s))}else{let l=a();"catch"in l||(me(`Component "${s}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),l=Promise.resolve(l)),o.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${i.path}"`));const f=E3(c)?c.default:c;i.components[s]=f;const d=(f.__vccOpts||f)[t];return d&&Nn(d,n,r,i,s)()}))}}}return o}function _S(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Rf(e){const t=en(sa),n=en(eg),r=ut(()=>t.resolve(Me(e.to))),o=ut(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],u=n.matched;if(!f||!u.length)return-1;const d=u.findIndex(Jn.bind(null,f));if(d>-1)return d;const h=Bf(l[c-2]);return c>1&&Bf(f)===h&&u[u.length-1].path!==h?u.findIndex(Jn.bind(null,l[c-2])):d}),i=ut(()=>o.value>-1&&$S(n.params,r.value.params)),s=ut(()=>o.value>-1&&o.value===n.matched.length-1&&Kp(n.params,r.value.params));function a(l={}){return AS(l)?t[Me(e.replace)?"replace":"push"](Me(e.to)).catch(Fo):Promise.resolve()}if(un){const l=Rr();if(l){const c={route:r.value,isActive:i.value,isExactActive:s.value};l.__vrl_devtools=l.__vrl_devtools||[],l.__vrl_devtools.push(c),Fm(()=>{c.route=r.value,c.isActive=i.value,c.isExactActive=s.value},{flush:"post"})}}return{route:r,href:ut(()=>r.value.href),isActive:i,isExactActive:s,navigate:a}}const SS=mo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rf,setup(e,{slots:t}){const n=yi(Rf(e)),{options:r}=en(sa),o=ut(()=>({[Nf(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Nf(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:ac("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),CS=SS;function AS(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function $S(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!Et(o)||o.length!==r.length||r.some((i,s)=>i!==o[s]))return!1}return!0}function Bf(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Nf=(e,t,n)=>e??t??n,kS=mo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){OS();const r=en(Ml),o=ut(()=>e.route||r.value),i=en(Lf,0),s=ut(()=>{let c=Me(i);const{matched:f}=o.value;let u;for(;(u=f[c])&&!u.components;)c++;return c}),a=ut(()=>o.value.matched[s.value]);ts(Lf,ut(()=>s.value+1)),ts(xS,a),ts(Ml,o);const l=Re();return Ht(()=>[l.value,a.value,e.name],([c,f,u],[d,h,p])=>{f&&(f.instances[u]=c,h&&h!==f&&c&&c===d&&(f.leaveGuards.size||(f.leaveGuards=h.leaveGuards),f.updateGuards.size||(f.updateGuards=h.updateGuards))),c&&f&&(!h||!Jn(f,h)||!d)&&(f.enterCallbacks[u]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=o.value,f=e.name,u=a.value,d=u&&u.components[f];if(!d)return Uf(n.default,{Component:d,route:c});const h=u.props[f],p=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=ac(d,_e({},p,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(u.instances[f]=null)},ref:l}));if(un&&m.ref){const y={depth:s.value,name:u.name,path:u.path,meta:u.meta};(Et(m.ref)?m.ref.map(w=>w.i):[m.ref.i]).forEach(w=>{w.__vrv_devtools=y})}return Uf(n.default,{Component:m,route:c})||m}}});function Uf(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const IS=kS;function OS(){const e=Rr(),t=e.parent&&e.parent.type.name,n=e.parent&&e.parent.subTree&&e.parent.subTree.type;if(t&&(t==="KeepAlive"||t.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const r=t==="KeepAlive"?"keep-alive":"transition";me(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`)}}function ko(e,t){const n=_e({},e,{matched:e.matched.map(r=>HS(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function Zi(e){return{_custom:{display:e}}}let TS=0;function PS(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const r=TS++;hh({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},o=>{typeof o.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),o.on.inspectComponent((f,u)=>{f.instanceData&&f.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:ko(t.currentRoute.value,"Current Route")})}),o.on.visitComponentTree(({treeNode:f,componentInstance:u})=>{if(u.__vrv_devtools){const d=u.__vrv_devtools;f.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:tg})}Et(u.__vrl_devtools)&&(u.__devtoolsApi=o,u.__vrl_devtools.forEach(d=>{let h=og,p="";d.isExactActive?(h=rg,p="This is exactly active"):d.isActive&&(h=ng,p="This link is active"),f.tags.push({label:d.route.path,textColor:0,tooltip:p,backgroundColor:h})}))}),Ht(t.currentRoute,()=>{l(),o.notifyComponentUpdate(),o.sendInspectorTree(a),o.sendInspectorState(a)});const i="router:navigations:"+r;o.addTimelineLayer({id:i,label:`Router${r?" "+r:""} Navigations`,color:4237508}),t.onError((f,u)=>{o.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:u.fullPath,logType:"error",time:o.now(),data:{error:f},groupId:u.meta.__navigationId}})});let s=0;t.beforeEach((f,u)=>{const d={guard:Zi("beforeEach"),from:ko(u,"Current Location during this navigation"),to:ko(f,"Target location")};Object.defineProperty(f.meta,"__navigationId",{value:s++}),o.addTimelineEvent({layerId:i,event:{time:o.now(),title:"Start of navigation",subtitle:f.fullPath,data:d,groupId:f.meta.__navigationId}})}),t.afterEach((f,u,d)=>{const h={guard:Zi("afterEach")};d?(h.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},h.status=Zi("❌")):h.status=Zi("✅"),h.from=ko(u,"Current Location during this navigation"),h.to=ko(f,"Target location"),o.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:f.fullPath,time:o.now(),data:h,logType:d?"warning":"default",groupId:f.meta.__navigationId}})});const a="router-inspector:"+r;o.addInspector({id:a,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function l(){if(!c)return;const f=c;let u=n.getRoutes().filter(d=>!d.parent||!d.parent.record.components);u.forEach(ag),f.filter&&(u=u.filter(d=>Hl(d,f.filter.toLowerCase()))),u.forEach(d=>sg(d,t.currentRoute.value)),f.rootNodes=u.map(ig)}let c;o.on.getInspectorTree(f=>{c=f,f.app===e&&f.inspectorId===a&&l()}),o.on.getInspectorState(f=>{if(f.app===e&&f.inspectorId===a){const d=n.getRoutes().find(h=>h.record.__vd_id===f.nodeId);d&&(f.state={options:RS(d)})}}),o.sendInspectorTree(a),o.sendInspectorState(a)})}function LS(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function RS(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(r=>`${r.name}${LS(r)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(r=>r.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const tg=15485081,ng=2450411,rg=8702998,BS=2282478,og=16486972,NS=6710886;function ig(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:BS}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:og}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:tg}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:rg}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:ng}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:NS});let r=n.__vd_id;return r==null&&(r=String(US++),n.__vd_id=r),{id:r,label:n.path,tags:t,children:e.children.map(ig)}}let US=0;const MS=/^\/(.*)\/([a-z]*)$/;function sg(e,t){const n=t.matched.length&&Jn(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(r=>Jn(r,e.record))),e.children.forEach(r=>sg(r,t))}function ag(e){e.__vd_match=!1,e.children.forEach(ag)}function Hl(e,t){const n=String(e.re).match(MS);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(s=>Hl(s,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const o=e.record.path.toLowerCase(),i=di(o);return!t.startsWith("/")&&(i.includes(t)||o.includes(t))||i.startsWith(t)||o.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(s=>Hl(s,t))}function HS(e,t){const n={};for(const r in e)t.includes(r)||(n[r]=e[r]);return n}function FS(e){const t=X3(e.routes,e),n=e.parseQuery||vS,r=e.stringifyQuery||Pf,o=e.history;if(!o)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=$o(),s=$o(),a=$o(),l=md(Pn);let c=Pn;un&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ha.bind(null,$=>""+$),u=Ha.bind(null,bS),d=Ha.bind(null,di);function h($,z){let K,Z;return zp($)?(K=t.getRecordMatcher($),Z=z):Z=$,t.addRoute(Z,K)}function p($){const z=t.getRecordMatcher($);z?t.removeRoute(z):me(`Cannot remove non-existent route "${String($)}"`)}function g(){return t.getRoutes().map($=>$.record)}function m($){return!!t.getRecordMatcher($)}function y($,z){if(z=_e({},z||l.value),typeof $=="string"){const v=Fa(n,$,z.path),C=t.resolve({path:v.path},z),B=o.createHref(v.fullPath);return B.startsWith("//")?me(`Location "${$}" resolved to "${B}". A resolved location cannot start with multiple slashes.`):C.matched.length||me(`No match found for location with path "${$}"`),_e(v,C,{params:d(C.params),hash:di(v.hash),redirectedFrom:void 0,href:B})}let K;if("path"in $)"params"in $&&!("name"in $)&&Object.keys($.params).length&&me(`Path "${$.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),K=_e({},$,{path:Fa(n,$.path,z.path).path});else{const v=_e({},$.params);for(const C in v)v[C]==null&&delete v[C];K=_e({},$,{params:u(v)}),z.params=u(z.params)}const Z=t.resolve(K,z),fe=$.hash||"";fe&&!fe.startsWith("#")&&me(`A \`hash\` should always start with the character "#". Replace "${fe}" with "#${fe}".`),Z.params=f(d(Z.params));const xe=C3(r,_e({},$,{hash:gS(fe),path:Z.path})),b=o.createHref(xe);return b.startsWith("//")?me(`Location "${$}" resolved to "${b}". A resolved location cannot start with multiple slashes.`):Z.matched.length||me(`No match found for location with path "${"path"in $?$.path:$}"`),_e({fullPath:xe,hash:fe,query:r===Pf?wS($.query):$.query||{}},Z,{redirectedFrom:void 0,href:b})}function x($){return typeof $=="string"?Fa(n,$,l.value.path):_e({},$)}function w($,z){if(c!==$)return go(8,{from:z,to:$})}function A($){return R($)}function _($){return A(_e(x($),{replace:!0}))}function S($){const z=$.matched[$.matched.length-1];if(z&&z.redirect){const{redirect:K}=z;let Z=typeof K=="function"?K($):K;if(typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=x(Z):{path:Z},Z.params={}),!("path"in Z)&&!("name"in Z))throw me(`Invalid redirect found:
${JSON.stringify(Z,null,2)}
 when navigating to "${$.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return _e({query:$.query,hash:$.hash,params:"path"in Z?{}:$.params},Z)}}function R($,z){const K=c=y($),Z=l.value,fe=$.state,xe=$.force,b=$.replace===!0,v=S(K);if(v)return R(_e(x(v),{state:typeof v=="object"?_e({},fe,v.state):fe,force:xe,replace:b}),z||K);const C=K;C.redirectedFrom=z;let B;return!xe&&Ef(r,Z,K)&&(B=go(16,{to:C,from:Z}),ae(Z,Z,!0,!1)),(B?Promise.resolve(B):U(C,Z)).catch(P=>sn(P)?sn(P,2)?P:ne(P):j(P,C,Z)).then(P=>{if(P){if(sn(P,2))return Ef(r,y(P.to),C)&&z&&(z._count=z._count?z._count+1:1)>30?(me(`Detected a possibly infinite redirection in a navigation guard when going from "${Z.fullPath}" to "${C.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):R(_e({replace:b},x(P.to),{state:typeof P.to=="object"?_e({},fe,P.to.state):fe,force:xe}),z||C)}else P=O(C,Z,!0,b,fe);return N(C,Z,P),P})}function E($,z){const K=w($,z);return K?Promise.reject(K):Promise.resolve()}function k($){const z=Le.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext($):$()}function U($,z){let K;const[Z,fe,xe]=DS($,z);K=Da(Z.reverse(),"beforeRouteLeave",$,z);for(const v of Z)v.leaveGuards.forEach(C=>{K.push(Nn(C,$,z))});const b=E.bind(null,$,z);return K.push(b),Ue(K).then(()=>{K=[];for(const v of i.list())K.push(Nn(v,$,z));return K.push(b),Ue(K)}).then(()=>{K=Da(fe,"beforeRouteUpdate",$,z);for(const v of fe)v.updateGuards.forEach(C=>{K.push(Nn(C,$,z))});return K.push(b),Ue(K)}).then(()=>{K=[];for(const v of xe)if(v.beforeEnter)if(Et(v.beforeEnter))for(const C of v.beforeEnter)K.push(Nn(C,$,z));else K.push(Nn(v.beforeEnter,$,z));return K.push(b),Ue(K)}).then(()=>($.matched.forEach(v=>v.enterCallbacks={}),K=Da(xe,"beforeRouteEnter",$,z),K.push(b),Ue(K))).then(()=>{K=[];for(const v of s.list())K.push(Nn(v,$,z));return K.push(b),Ue(K)}).catch(v=>sn(v,8)?v:Promise.reject(v))}function N($,z,K){a.list().forEach(Z=>k(()=>Z($,z,K)))}function O($,z,K,Z,fe){const xe=w($,z);if(xe)return xe;const b=z===Pn,v=un?history.state:{};K&&(Z||b?o.replace($.fullPath,_e({scroll:b&&v&&v.scroll},fe)):o.push($.fullPath,fe)),l.value=$,ae($,z,K,b),ne()}let Q;function te(){Q||(Q=o.listen(($,z,K)=>{if(!ze.listening)return;const Z=y($),fe=S(Z);if(fe){R(_e(fe,{replace:!0}),Z).catch(Fo);return}c=Z;const xe=l.value;un&&L3(Sf(xe.fullPath,K.delta),ia()),U(Z,xe).catch(b=>sn(b,12)?b:sn(b,2)?(R(b.to,Z).then(v=>{sn(v,20)&&!K.delta&&K.type===fi.pop&&o.go(-1,!1)}).catch(Fo),Promise.reject()):(K.delta&&o.go(-K.delta,!1),j(b,Z,xe))).then(b=>{b=b||O(Z,xe,!1),b&&(K.delta&&!sn(b,8)?o.go(-K.delta,!1):K.type===fi.pop&&sn(b,20)&&o.go(-1,!1)),N(Z,xe,b)}).catch(Fo)}))}let I=$o(),T=$o(),M;function j($,z,K){ne($);const Z=T.list();return Z.length?Z.forEach(fe=>fe($,z,K)):(me("uncaught error during route navigation:"),console.error($)),Promise.reject($)}function D(){return M&&l.value!==Pn?Promise.resolve():new Promise(($,z)=>{I.add([$,z])})}function ne($){return M||(M=!$,te(),I.list().forEach(([z,K])=>$?K($):z()),I.reset()),$}function ae($,z,K,Z){const{scrollBehavior:fe}=e;if(!un||!fe)return Promise.resolve();const xe=!K&&R3(Sf($.fullPath,0))||(Z||!K)&&history.state&&history.state.scroll||null;return Ms().then(()=>fe($,z,xe)).then(b=>b&&P3(b)).catch(b=>j(b,$,z))}const re=$=>o.go($);let we;const Le=new Set,ze={currentRoute:l,listening:!0,addRoute:h,removeRoute:p,hasRoute:m,getRoutes:g,resolve:y,options:e,push:A,replace:_,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:i.add,beforeResolve:s.add,afterEach:a.add,onError:T.add,isReady:D,install($){const z=this;$.component("RouterLink",CS),$.component("RouterView",IS),$.config.globalProperties.$router=z,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>Me(l)}),un&&!we&&l.value===Pn&&(we=!0,A(o.location).catch(fe=>{me("Unexpected error when starting the router:",fe)}));const K={};for(const fe in Pn)Object.defineProperty(K,fe,{get:()=>l.value[fe],enumerable:!0});$.provide(sa,z),$.provide(eg,dd(K)),$.provide(Ml,l);const Z=$.unmount;Le.add($),$.unmount=function(){Le.delete($),Le.size<1&&(c=Pn,Q&&Q(),Q=null,l.value=Pn,we=!1,M=!1),Z()},un&&PS($,z,t)}};function Ue($){return $.reduce((z,K)=>z.then(()=>k(K)),Promise.resolve())}return ze}function DS(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const a=t.matched[s];a&&(e.matched.find(c=>Jn(c,a))?r.push(a):n.push(a));const l=e.matched[s];l&&(t.matched.find(c=>Jn(c,l))||o.push(l))}return[n,r,o]}function _8(){return en(sa)}const jS=FS({history:H3("/"),routes:[{path:"/",name:wt.home,props:!0,component:()=>on(()=>import("./SearchPage-e0f56ed2.js"),["assets/SearchPage-e0f56ed2.js","assets/NsFormField-fef59d9c.js","assets/index.esm-3f7fdff6.js","assets/textarea.esm-2b47caf2.js","assets/NsFormField-e7c90937.css","assets/NsEvent-bd421c86.js","assets/use-settings-48c8f733.js","assets/NsEvent-2d983ebb.css"])},{path:"/settings",name:wt.settings,props:!0,component:()=>on(()=>import("./SettingsPage-ac9ecc92.js"),["assets/SettingsPage-ac9ecc92.js","assets/use-settings-48c8f733.js","assets/inputswitch.esm-1185adb2.js"])},{path:"/feed",name:wt.user.feed,props:!0,component:()=>on(()=>import("./UserFeedPage-09fc36de.js"),["assets/UserFeedPage-09fc36de.js","assets/NsUserFeed-6e9aa9ed.js","assets/NsEvent-bd421c86.js","assets/index.esm-3f7fdff6.js","assets/use-settings-48c8f733.js","assets/NsEvent-2d983ebb.css","assets/inputswitch.esm-1185adb2.js"])},{path:"/search",name:wt.search,props:!0,component:()=>on(()=>import("./SearchPage-e0f56ed2.js"),["assets/SearchPage-e0f56ed2.js","assets/NsFormField-fef59d9c.js","assets/index.esm-3f7fdff6.js","assets/textarea.esm-2b47caf2.js","assets/NsFormField-e7c90937.css","assets/NsEvent-bd421c86.js","assets/use-settings-48c8f733.js","assets/NsEvent-2d983ebb.css"])},{path:"/login",name:wt.auth.login,props:!0,component:()=>on(()=>import("./LoginPage-67f49baf.js"),["assets/LoginPage-67f49baf.js","assets/NsFormField-fef59d9c.js","assets/index.esm-3f7fdff6.js","assets/textarea.esm-2b47caf2.js","assets/NsFormField-e7c90937.css"])},{path:"/query",name:wt.query,props:!0,component:()=>on(()=>import("./QueryPage-46351fc4.js"),["assets/QueryPage-46351fc4.js","assets/textarea.esm-2b47caf2.js","assets/NsEvent-bd421c86.js","assets/index.esm-3f7fdff6.js","assets/use-settings-48c8f733.js","assets/NsEvent-2d983ebb.css"])},{path:"/t/:tag",name:wt.tags.display,props:!0,component:()=>on(()=>import("./TagDisplayPage-f1899faa.js"),["assets/TagDisplayPage-f1899faa.js","assets/NsEvent-bd421c86.js","assets/index.esm-3f7fdff6.js","assets/use-settings-48c8f733.js","assets/NsEvent-2d983ebb.css"])},{path:"/p/:pubkey/:feedType?",name:wt.profile.display,props:!0,component:()=>on(()=>import("./ProfileDisplayPage-0241f41f.js"),["assets/ProfileDisplayPage-0241f41f.js","assets/index.esm-3f7fdff6.js","assets/NsUserFeed-6e9aa9ed.js","assets/NsEvent-bd421c86.js","assets/use-settings-48c8f733.js","assets/NsEvent-2d983ebb.css","assets/inputswitch.esm-1185adb2.js","assets/ProfileDisplayPage-e0c883ac.css"])},{path:"/:id",name:wt.events.display,props:!0,component:()=>on(()=>import("./EventDisplayPage-e5f3455f.js"),["assets/EventDisplayPage-e5f3455f.js","assets/NsEvent-bd421c86.js","assets/index.esm-3f7fdff6.js","assets/use-settings-48c8f733.js","assets/NsEvent-2d983ebb.css","assets/EventDisplayPage-69b05b67.css"])}]}),aa=S0(h3);aa.use(v3);aa.use(jS);aa.use(vb);aa.mount("#app");export{n8 as $,Ws as A,er as B,l8 as C,se as D,jp as E,xt as F,so as G,Ft as H,ru as I,Bt as J,us as K,en as L,Gn as M,Hp as N,Za as O,es as P,t8 as Q,wh as R,_i as S,lc as T,Yo as U,ss as V,w_ as W,Fm as X,qs as Y,Sa as Z,Hc as _,yi as a,Lt as a0,Si as a1,O0 as a2,T0 as a3,ll as a4,uc as a5,P0 as a6,ct as a7,XS as a8,W0 as a9,ye as aa,s8 as ab,Ig as ac,a8 as ad,qS as ae,Ns as af,Jf as ag,l_ as ah,u8 as ai,Ps as aj,zS as ak,WS as al,de as am,O_ as an,KS as ao,Ny as ap,Ao as aq,Be as ar,x_ as as,x8 as at,E8 as au,QS as av,on as aw,f1 as ax,c8 as ay,Pe as b,Qe as c,mo as d,Se as e,Me as f,GS as g,E_ as h,S_ as i,xi as j,YS as k,wt as l,JS as m,Ht as n,Ce as o,ts as p,ut as q,Re as r,Lo as s,ZS as t,_8 as u,ht as v,Nt as w,ve as x,e8 as y,zs as z};
