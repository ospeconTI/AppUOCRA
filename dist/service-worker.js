if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const c={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return c;default:return e(r)}})).then(e=>{const r=n(...e);return i.default||(i.default=r),i})}))}}define("./service-worker.js",["./workbox-2952c233"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"./3ed9575dcc488c3e3a5bd66620bdf5a4.ttf",revision:"3ed9575dcc488c3e3a5bd66620bdf5a4"},{url:"./app.bundle.js",revision:"b275d1a613a95a54c835d45c68bdf016"},{url:"./app.bundle.js.LICENSE.txt",revision:"0d6a49dfebafa933dc75ea59dcef39c4"},{url:"./favicon.ico",revision:"822908ccb4d46fba56ad2ffc1bc1d6b3"},{url:"./icon_192x192.png",revision:"6539501e3a9773eb0126de1f55fb3df9"},{url:"./icon_512x512.png",revision:"76021ad14f2936344a80d197a9fe397d"},{url:"./index.html",revision:"8a14515af6ad8a5a02e76d7e4d1b5c1d"},{url:"./manifest.json",revision:"fa1a707ca20a0413af24f1fab4f6736c"}],{})}));
