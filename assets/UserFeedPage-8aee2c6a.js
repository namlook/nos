import{d as t,u as r,i as a,j as n,l as c,o as u,c as p,e as i,f as d,b as _,_ as l}from"./index-f6fe6edb.js";import{N as m}from"./NsUserFeed-45eb7cc4.js";import"./NsEvent-58638360.js";import"./index.esm-75ec1c7e.js";import"./use-settings-ea8687c4.js";import"./inputswitch.esm-444bb04c.js";const f={class:"user-feed-page"},g=_("h1",{class:"px-2"},"Feed",-1),h=t({__name:"UserFeedPage",setup(U){const e=r(),{isLoggedIn:s,currentUser:o}=a();return n(()=>{s.value||e.push({name:c.auth.login})}),(k,F)=>(u(),p("div",f,[g,i(m,{type:"feed",pubkey:d(o).pubkey},null,8,["pubkey"])]))}}),B=l(h,[["__file","/Users/nicolasc/Documents/projects/other/tests/nosworld/src/pages/UserFeedPage/UserFeedPage.vue"]]);export{B as default};
