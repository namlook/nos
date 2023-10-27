var Z=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var s=(i,t,e)=>(Z(i,t,"read from private field"),e?e.call(i):t.get(i)),h=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},n=(i,t,e,a)=>(Z(i,t,"write to private field"),a?a.call(i,e):t.set(i,e),e);var f=(i,t,e)=>(Z(i,t,"access private method"),e);import{W as _t,X as tt,Y as Qt,$ as ft,a0 as pt,a1 as Dt,a2 as Ft,a3 as Et,a4 as yt,a5 as It,a6 as Tt,L as kt,a7 as Pt,q as wt,a8 as xt,a as Lt,n as $,a9 as gt,aa as At,ab as Mt,ac as Nt,ad as jt,ae as qt,f as et,h as Bt,d as Kt,o as I,c as A,b as bt,K as Vt,F as mt,g as vt,e as Wt,H as zt,_ as $t}from"./index-4ab972bd.js";import{a as Ht,N as Xt}from"./NsEvent-d89ae273.js";import"./index.esm-75728879.js";import"./use-settings-7f0949c9.js";var g,o,T,y,S,k,O,N,P,x,U,_,w,Q,D,M,j,st,q,it,B,at,K,rt,V,nt,W,ot,z,ht,H,St,Ct,Yt=(Ct=class extends _t{constructor(t,e){super();h(this,D);h(this,j);h(this,q);h(this,B);h(this,K);h(this,V);h(this,W);h(this,z);h(this,H);h(this,g,void 0);h(this,o,void 0);h(this,T,void 0);h(this,y,void 0);h(this,S,void 0);h(this,k,void 0);h(this,O,void 0);h(this,N,void 0);h(this,P,void 0);h(this,x,void 0);h(this,U,void 0);h(this,_,void 0);h(this,w,void 0);h(this,Q,void 0);n(this,o,void 0),n(this,T,void 0),n(this,y,void 0),n(this,Q,new Set),n(this,g,t),this.options=e,n(this,O,null),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(s(this,o).addObserver(this),Rt(s(this,o),this.options)&&f(this,D,M).call(this),f(this,K,rt).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ut(s(this,o),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ut(s(this,o),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,f(this,V,nt).call(this),f(this,W,ot).call(this),s(this,o).removeObserver(this)}setOptions(t,e){const a=this.options,d=s(this,o);if(this.options=s(this,g).defaultQueryOptions(t),tt(a,this.options)||s(this,g).getQueryCache().notify({type:"observerOptionsUpdated",query:s(this,o),observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=a.queryKey),f(this,z,ht).call(this);const r=this.hasListeners();r&&Ot(s(this,o),d,this.options,a)&&f(this,D,M).call(this),this.updateResult(e),r&&(s(this,o)!==d||this.options.enabled!==a.enabled||this.options.staleTime!==a.staleTime)&&f(this,j,st).call(this);const u=f(this,q,it).call(this);r&&(s(this,o)!==d||this.options.enabled!==a.enabled||u!==s(this,w))&&f(this,B,at).call(this,u)}getOptimisticResult(t){const e=s(this,g).getQueryCache().build(s(this,g),t),a=this.createResult(e,t);return Jt(this,a)&&(n(this,y,a),n(this,k,this.options),n(this,S,s(this,o).state)),a}getCurrentResult(){return s(this,y)}trackResult(t){const e={};return Object.keys(t).forEach(a=>{Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:()=>(s(this,Q).add(a),t[a])})}),e}getCurrentQuery(){return s(this,o)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=s(this,g).defaultQueryOptions(t),a=s(this,g).getQueryCache().build(s(this,g),e);return a.isFetchingOptimistic=!0,a.fetch().then(()=>this.createResult(a,e))}fetch(t){return f(this,D,M).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),s(this,y)))}createResult(t,e){var dt;const a=s(this,o),d=this.options,r=s(this,y),u=s(this,S),p=s(this,k),E=t!==a?t.state:s(this,T),{state:c}=t;let{error:C,errorUpdatedAt:l,fetchStatus:m,status:v}=c,L=!1,b;if(e._optimisticResults){const R=this.hasListeners(),J=!R&&Rt(t,e),Ut=R&&Ot(t,a,e,d);(J||Ut)&&(m=Et(t.options.networkMode)?"fetching":"paused",c.dataUpdatedAt||(v="pending")),e._optimisticResults==="isRestoring"&&(m="idle")}if(e.select&&typeof c.data<"u")if(r&&c.data===(u==null?void 0:u.data)&&e.select===s(this,N))b=s(this,P);else try{n(this,N,e.select),b=e.select(c.data),b=yt(r==null?void 0:r.data,b,e),n(this,P,b),n(this,O,null)}catch(R){n(this,O,R)}else b=c.data;if(typeof e.placeholderData<"u"&&typeof b>"u"&&v==="pending"){let R;if(r!=null&&r.isPlaceholderData&&e.placeholderData===(p==null?void 0:p.placeholderData))R=r.data;else if(R=typeof e.placeholderData=="function"?e.placeholderData((dt=s(this,x))==null?void 0:dt.state.data,s(this,x)):e.placeholderData,e.select&&typeof R<"u")try{R=e.select(R),n(this,O,null)}catch(J){n(this,O,J)}typeof R<"u"&&(v="success",b=yt(r==null?void 0:r.data,R,e),L=!0)}s(this,O)&&(C=s(this,O),b=s(this,P),l=Date.now(),v="error");const X=m==="fetching",Y=v==="pending",G=v==="error",lt=Y&&X;return{status:v,fetchStatus:m,isPending:Y,isSuccess:v==="success",isError:G,isInitialLoading:lt,isLoading:lt,data:b,dataUpdatedAt:c.dataUpdatedAt,error:C,errorUpdatedAt:l,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>E.dataUpdateCount||c.errorUpdateCount>E.errorUpdateCount,isFetching:X,isRefetching:X&&!Y,isLoadingError:G&&c.dataUpdatedAt===0,isPaused:m==="paused",isPlaceholderData:L,isRefetchError:G&&c.dataUpdatedAt!==0,isStale:ct(t,e),refetch:this.refetch}}updateResult(t){const e=s(this,y),a=this.createResult(s(this,o),this.options);if(n(this,S,s(this,o).state),n(this,k,this.options),tt(a,e))return;s(this,S).data!==void 0&&n(this,x,s(this,o)),n(this,y,a);const d={},r=()=>{if(!e)return!0;const{notifyOnChangeProps:u}=this.options,p=typeof u=="function"?u():u;if(p==="all"||!p&&!s(this,Q).size)return!0;const F=new Set(p??s(this,Q));return this.options.throwOnError&&F.add("error"),Object.keys(s(this,y)).some(E=>{const c=E;return s(this,y)[c]!==e[c]&&F.has(c)})};(t==null?void 0:t.listeners)!==!1&&r()&&(d.listeners=!0),f(this,H,St).call(this,{...d,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&f(this,K,rt).call(this)}},g=new WeakMap,o=new WeakMap,T=new WeakMap,y=new WeakMap,S=new WeakMap,k=new WeakMap,O=new WeakMap,N=new WeakMap,P=new WeakMap,x=new WeakMap,U=new WeakMap,_=new WeakMap,w=new WeakMap,Q=new WeakMap,D=new WeakSet,M=function(t){f(this,z,ht).call(this);let e=s(this,o).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(Qt)),e},j=new WeakSet,st=function(){if(f(this,V,nt).call(this),ft||s(this,y).isStale||!pt(this.options.staleTime))return;const e=Dt(s(this,y).dataUpdatedAt,this.options.staleTime)+1;n(this,U,setTimeout(()=>{s(this,y).isStale||this.updateResult()},e))},q=new WeakSet,it=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(s(this,o)):this.options.refetchInterval)??!1},B=new WeakSet,at=function(t){f(this,W,ot).call(this),n(this,w,t),!(ft||this.options.enabled===!1||!pt(s(this,w))||s(this,w)===0)&&n(this,_,setInterval(()=>{(this.options.refetchIntervalInBackground||Ft.isFocused())&&f(this,D,M).call(this)},s(this,w)))},K=new WeakSet,rt=function(){f(this,j,st).call(this),f(this,B,at).call(this,f(this,q,it).call(this))},V=new WeakSet,nt=function(){s(this,U)&&(clearTimeout(s(this,U)),n(this,U,void 0))},W=new WeakSet,ot=function(){s(this,_)&&(clearInterval(s(this,_)),n(this,_,void 0))},z=new WeakSet,ht=function(){const t=s(this,g).getQueryCache().build(s(this,g),this.options);if(t===s(this,o))return;const e=s(this,o);n(this,o,t),n(this,T,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},H=new WeakSet,St=function(t){It.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(s(this,y))}),s(this,g).getQueryCache().notify({query:s(this,o),type:"observerResultsUpdated"})})},Ct);function Gt(i,t){return t.enabled!==!1&&!i.state.dataUpdatedAt&&!(i.state.status==="error"&&t.retryOnMount===!1)}function Rt(i,t){return Gt(i,t)||i.state.dataUpdatedAt>0&&ut(i,t,t.refetchOnMount)}function ut(i,t,e){if(t.enabled!==!1){const a=typeof e=="function"?e(i):e;return a==="always"||a!==!1&&ct(i,t)}return!1}function Ot(i,t,e,a){return e.enabled!==!1&&(i!==t||a.enabled===!1)&&(!e.suspense||i.state.status!=="error")&&ct(i,e)}function ct(i,t){return i.isStaleByTime(t.staleTime)}function Jt(i,t){return!tt(i.getCurrentResult(),t)}function Zt(i=""){if(!Tt())throw new Error("vue-query hooks can only be used inside setup() function or functions that support injection context.");const t=Pt(i),e=kt(t);if(!e)throw new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library.");return e}function te(i,t,e){qt()||console.warn('vue-query composables like "useQuery()" should only be used inside a "setup()" function or a running effect scope. They might otherwise lead to memory leaks.');const a=e||Zt(),d=wt(()=>{const l=xt(t);typeof l.enabled=="function"&&(l.enabled=l.enabled());const m=a.defaultQueryOptions(l);return m._optimisticResults=a.isRestoring.value?"isRestoring":"optimistic",m}),r=new i(a,d.value),u=Lt(r.getCurrentResult());let p=()=>{};$(a.isRestoring,l=>{l||(p(),p=r.subscribe(m=>{gt(u,m)}))},{immediate:!0});const F=()=>{r.setOptions(d.value),gt(u,r.getCurrentResult())};$(d,F),At(()=>{p()});const E=(...l)=>(F(),u.refetch(...l)),c=()=>new Promise((l,m)=>{let v=()=>{};const L=()=>{if(d.value.enabled!==!1){r.setOptions(d.value);const b=r.getOptimisticResult(d.value);b.isStale?(v(),r.fetchOptimistic(d.value).then(l,m)):(v(),l(b))}};L(),v=$(d,L)});$(()=>u.error,l=>{if(u.isError&&!u.isFetching&&Mt(d.value.throwOnError,[l,r.getCurrentQuery()]))throw l});const C=Nt(jt(u));for(const l in u)typeof u[l]=="function"&&(C[l]=u[l]);return C.suspense=c,C.refetch=E,C}function ee(i,t){return te(Yt,i,t)}const{fetch:se}=Bt();function ie(i){return ee({queryKey:["tag-display-page",i],async queryFn(){return(await se([{"#t":[et(i)],limit:100}],{batchId:"tags"})).sort((e,a)=>a.created_at-e.created_at)}})}const ae={class:"tag-display-page"},re={class:"white-box p-4 mb-4"},ne={key:0,class:"flex flex-column gap-4"},oe={key:1,class:"flex flex-column gap-4"},he=Kt({__name:"TagDisplayPage",props:{tag:{type:String,required:!0}},setup(i){const t=i,e=wt(()=>t.tag),{isLoading:a,data:d}=ie(e);return(r,u)=>(I(),A("div",ae,[bt("div",re,[bt("h1",null,"#"+Vt(e.value),1)]),et(a)?(I(),A("div",ne,[(I(),A(mt,null,vt(5,p=>Wt(Ht,{key:p})),64))])):(I(),A("div",oe,[(I(!0),A(mt,null,vt(et(d),p=>(I(),zt(Xt,{key:`tag-event-${p.id}`,event:p},null,8,["event"]))),128))]))]))}}),ye=$t(he,[["__file","/Users/nicolasc/Documents/projects/others/nosworld/src/pages/TagDisplayPage/TagDisplayPage.vue"]]);export{ye as default};
