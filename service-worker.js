if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>n(e,o),t={module:{uri:o},exports:l,require:c};s[o]=Promise.all(r.map((e=>t[e]||c(e)))).then((e=>(i(...e),l)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"gt-employee"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/about.51708b97.css",revision:null},{url:"/css/app.3a40ab29.css",revision:null},{url:"/css/chunk-vendors.2c7f7323.css",revision:null},{url:"/index.html",revision:"39d8aa92c1cf50dbfc0d124bd5940ec4"},{url:"/js/about.3e6ab5d3.js",revision:null},{url:"/js/app.fdfc9e4f.js",revision:null},{url:"/js/chunk-vendors.7ff57d33.js",revision:null},{url:"/manifest.json",revision:"70b7176ec6ea22cdaaa3056aedda7d99"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
