import{d as t,u as r,i as a,j as n,l as c,o as u,c as p,e as i,f as d,b as _,_ as l}from"./index-8ef7e3aa.js";import{N as m}from"./NsUserFeed-6608daca.js";import"./NsEvent-4d3945b7.js";import"./index.esm-65b333c4.js";import"./use-settings-11c74249.js";import"./inputswitch.esm-c7e4efe3.js";const f={class:"user-feed-page"},g=_("h1",{class:"px-2"},"Feed",-1),h=t({__name:"UserFeedPage",setup(U){const e=r(),{isLoggedIn:s,currentUser:o}=a();return n(()=>{s.value||e.push({name:c.auth.login})}),(k,F)=>(u(),p("div",f,[g,i(m,{type:"feed",pubkey:d(o).pubkey},null,8,["pubkey"])]))}}),B=l(h,[["__file","/Users/nicolasc/Documents/projects/others/nosworld/src/pages/UserFeedPage/UserFeedPage.vue"]]);export{B as default};
