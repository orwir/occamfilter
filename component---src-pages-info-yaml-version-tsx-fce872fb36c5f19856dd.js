"use strict";(self.webpackChunklootvision=self.webpackChunklootvision||[]).push([[990],{6543:function(e,t,n){n.d(t,{A:function(){return a}});var i=n(4810),r=n(6540),o=n(6462);function a(e){let{children:t}=e;(0,o.useLocation)();const n=(0,i.GR)("3489734958"),{0:a,1:l}=(0,r.useState)("");return(0,r.useEffect)((()=>{l(window.location.pathname)}),[]),r.createElement("div",null,r.createElement("div",{className:"flex flex-row space-x-2 px-2 py-3"},n.allInfoYaml.nodes.map((e=>r.createElement(i.N_,{key:e.version,to:{}.GATSBY_BASE_PATH+"/"+e.version},e.label))),r.createElement("div",null,"| ",a," |")),r.createElement("div",{className:"px-2"},t))}},1042:function(e,t,n){n.d(t,{A:function(){return o}});var i=n(4810),r=n(6540);function o(e){let{title:t}=e;const n=(0,i.GR)("3159585216");return r.createElement("title",null,t," | ",n.site.siteMetadata.title)}},1284:function(e,t,n){n.r(t),n.d(t,{Head:function(){return Ke},default:function(){return Xe}});var i=n(6540);const r=Object.freeze({left:0,top:0,width:16,height:16}),o=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),a=Object.freeze({...r,...o}),l=Object.freeze({...a,body:"",hidden:!1});function c(e,t){const n=function(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const i=((e.rotate||0)+(t.rotate||0))%4;return i&&(n.rotate=i),n}(e,t);for(const i in l)i in o?i in e&&!(i in n)&&(n[i]=o[i]):i in t?n[i]=t[i]:i in e&&(n[i]=e[i]);return n}function s(e,t,n){const i=e.icons,r=e.aliases||Object.create(null);let o={};function a(e){o=c(i[e]||r[e],o)}return a(t),n.forEach(a),c(e,o)}function u(e,t){const n=[];if("object"!=typeof e||"object"!=typeof e.icons)return n;e.not_found instanceof Array&&e.not_found.forEach((e=>{t(e,null),n.push(e)}));const i=function(e){const t=e.icons,n=e.aliases||Object.create(null),i=Object.create(null);return Object.keys(t).concat(Object.keys(n)).forEach((function e(r){if(t[r])return i[r]=[];if(!(r in i)){i[r]=null;const t=n[r]&&n[r].parent,o=t&&e(t);o&&(i[r]=[t].concat(o))}return i[r]})),i}(e);for(const r in i){const o=i[r];o&&(t(r,s(e,r,o)),n.push(r))}return n}const f={provider:"",aliases:{},not_found:{},...r};function d(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function p(e){if("object"!=typeof e||null===e)return null;const t=e;if("string"!=typeof t.prefix||!e.icons||"object"!=typeof e.icons)return null;if(!d(e,f))return null;const n=t.icons;for(const r in n){const e=n[r];if(!r||"string"!=typeof e.body||!d(e,l))return null}const i=t.aliases||Object.create(null);for(const r in i){const e=i[r],t=e.parent;if(!r||"string"!=typeof t||!n[t]&&!i[t]||!d(e,l))return null}return t}const h=/^[a-z0-9]+(-[a-z0-9]+)*$/,m=(e,t,n,i="")=>{const r=e.split(":");if("@"===e.slice(0,1)){if(r.length<2||r.length>3)return null;i=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const e=r.pop(),n=r.pop(),o={provider:r.length>0?r[0]:i,prefix:n,name:e};return t&&!b(o)?null:o}const o=r[0],a=o.split("-");if(a.length>1){const e={provider:i,prefix:a.shift(),name:a.join("-")};return t&&!b(e)?null:e}if(n&&""===i){const e={provider:i,prefix:"",name:o};return t&&!b(e,n)?null:e}return null},b=(e,t)=>!!e&&!(!(t&&""===e.prefix||e.prefix)||!e.name),g=Object.create(null);function v(e,t){const n=g[e]||(g[e]=Object.create(null));return n[t]||(n[t]=function(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}(e,t))}function y(e,t){return p(t)?u(t,((t,n)=>{n?e.icons[t]=n:e.missing.add(t)})):[]}let x=!1;function w(e){return"boolean"==typeof e&&(x=e),x}function E(e){const t="string"==typeof e?m(e,!0,x):e;if(t){const e=v(t.provider,t.prefix),n=t.name;return e.icons[n]||(e.missing.has(n)?null:void 0)}}function S(e,t){if("object"!=typeof e)return!1;if("string"!=typeof t&&(t=e.provider||""),x&&!t&&!e.prefix){let t=!1;return p(e)&&(e.prefix="",u(e,((e,n)=>{(function(e,t){const n=m(e,!0,x);if(!n)return!1;const i=v(n.provider,n.prefix);return t?function(e,t,n){try{if("string"==typeof n.body)return e.icons[t]={...n},!0}catch(i){}return!1}(i,n.name,t):(i.missing.add(n.name),!0)})(e,n)&&(t=!0)}))),t}const n=e.prefix;if(!b({provider:t,prefix:n,name:"a"}))return!1;return!!y(v(t,n),e)}const k=Object.freeze({width:null,height:null}),C=Object.freeze({...k,...o}),j=/(-?[0-9.]*[0-9]+[0-9.]*)/g,T=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function O(e,t,n){if(1===t)return e;if(n=n||100,"number"==typeof e)return Math.ceil(e*t*n)/n;if("string"!=typeof e)return e;const i=e.split(j);if(null===i||!i.length)return e;const r=[];let o=i.shift(),a=T.test(o);for(;;){if(a){const e=parseFloat(o);isNaN(e)?r.push(o):r.push(Math.ceil(e*t*n)/n)}else r.push(o);if(o=i.shift(),void 0===o)return r.join("");a=!a}}const F=/\sid="(\S+)"/g,N="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let M=0;function I(e,t=N){const n=[];let i;for(;i=F.exec(e);)n.push(i[1]);if(!n.length)return e;const r="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const i="function"==typeof t?t(n):t+(M++).toString(),o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+o+')([")]|\\.[a-z])',"g"),"$1"+i+r+"$3")})),e=e.replace(new RegExp(r,"g"),"")}const A=Object.create(null);function B(e,t){A[e]=t}function P(e){return A[e]||A[""]}function R(e){let t;if("string"==typeof e.resources)t=[e.resources];else if(t=e.resources,!(t instanceof Array&&t.length))return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:!0===e.random,index:e.index||0,dataAfterTimeout:!1!==e.dataAfterTimeout}}const z=Object.create(null),L=["https://api.simplesvg.com","https://api.unisvg.com"],D=[];for(;L.length>0;)1===L.length||Math.random()>.5?D.push(L.shift()):D.push(L.pop());function _(e,t){const n=R(t);return null!==n&&(z[e]=n,!0)}function H(e){return z[e]}z[""]=R({resources:["https://api.iconify.design"].concat(D)});let J=(()=>{let e;try{if(e=fetch,"function"==typeof e)return e}catch(t){}})();const $={prepare:(e,t,n)=>{const i=[],r=function(e,t){const n=H(e);if(!n)return 0;let i;if(n.maxURL){let e=0;n.resources.forEach((t=>{const n=t;e=Math.max(e,n.length)}));const r=t+".json?icons=";i=n.maxURL-e-n.path.length-r.length}else i=0;return i}(e,t),o="icons";let a={type:o,provider:e,prefix:t,icons:[]},l=0;return n.forEach(((n,c)=>{l+=n.length+1,l>=r&&c>0&&(i.push(a),a={type:o,provider:e,prefix:t,icons:[]},l=n.length),a.icons.push(n)})),i.push(a),i},send:(e,t,n)=>{if(!J)return void n("abort",424);let i=function(e){if("string"==typeof e){const t=H(e);if(t)return t.path}return"/"}(t.provider);switch(t.type){case"icons":{const e=t.prefix,n=t.icons.join(",");i+=e+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const e=t.uri;i+="/"===e.slice(0,1)?e.slice(1):e;break}default:return void n("abort",400)}let r=503;J(e+i).then((e=>{const t=e.status;if(200===t)return r=501,e.json();setTimeout((()=>{n(function(e){return 404===e}(t)?"abort":"next",t)}))})).then((e=>{"object"==typeof e&&null!==e?setTimeout((()=>{n("success",e)})):setTimeout((()=>{404===e?n("abort",e):n("next",r)}))})).catch((()=>{n("next",r)}))}};function q(e,t){e.forEach((e=>{const n=e.loaderCallbacks;n&&(e.loaderCallbacks=n.filter((e=>e.id!==t)))}))}let U=0;var G={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function W(e,t,n,i){const r=e.resources.length,o=e.random?Math.floor(Math.random()*r):e.index;let a;if(e.random){let t=e.resources.slice(0);for(a=[];t.length>1;){const e=Math.floor(Math.random()*t.length);a.push(t[e]),t=t.slice(0,e).concat(t.slice(e+1))}a=a.concat(t)}else a=e.resources.slice(o).concat(e.resources.slice(0,o));const l=Date.now();let c,s="pending",u=0,f=null,d=[],p=[];function h(){f&&(clearTimeout(f),f=null)}function m(){"pending"===s&&(s="aborted"),h(),d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}function b(e,t){t&&(p=[]),"function"==typeof e&&p.push(e)}function g(){s="failed",p.forEach((e=>{e(void 0,c)}))}function v(){d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}function y(){if("pending"!==s)return;h();const i=a.shift();if(void 0===i)return d.length?void(f=setTimeout((()=>{h(),"pending"===s&&(v(),g())}),e.timeout)):void g();const r={status:"pending",resource:i,callback:(t,n)=>{!function(t,n,i){const r="success"!==n;switch(d=d.filter((e=>e!==t)),s){case"pending":break;case"failed":if(r||!e.dataAfterTimeout)return;break;default:return}if("abort"===n)return c=i,void g();if(r)return c=i,void(d.length||(a.length?y():g()));if(h(),v(),!e.random){const n=e.resources.indexOf(t.resource);-1!==n&&n!==e.index&&(e.index=n)}s="completed",p.forEach((e=>{e(i)}))}(r,t,n)}};d.push(r),u++,f=setTimeout(y,e.rotate),n(i,t,r.callback)}return"function"==typeof i&&p.push(i),setTimeout(y),function(){return{startTime:l,payload:t,status:s,queriesSent:u,queriesPending:d.length,subscribe:b,abort:m}}}function Q(e){const t={...G,...e};let n=[];function i(){n=n.filter((e=>"pending"===e().status))}return{query:function(e,r,o){const a=W(t,e,r,((e,t)=>{i(),o&&o(e,t)}));return n.push(a),a},find:function(e){return n.find((t=>e(t)))||null},setIndex:e=>{t.index=e},getIndex:()=>t.index,cleanup:i}}function Y(){}const X=Object.create(null);function K(e,t,n){let i,r;if("string"==typeof e){const t=P(e);if(!t)return n(void 0,424),Y;r=t.send;const o=function(e){if(!X[e]){const t=H(e);if(!t)return;const n={config:t,redundancy:Q(t)};X[e]=n}return X[e]}(e);o&&(i=o.redundancy)}else{const t=R(e);if(t){i=Q(t);const n=P(e.resources?e.resources[0]:"");n&&(r=n.send)}}return i&&r?i.query(t,r,n)().abort:(n(void 0,424),Y)}const V="iconify2",Z="iconify",ee=Z+"-count",te=Z+"-version",ne=36e5;function ie(e,t){try{return e.getItem(t)}catch(n){}}function re(e,t,n){try{return e.setItem(t,n),!0}catch(i){}}function oe(e,t){try{e.removeItem(t)}catch(n){}}function ae(e,t){return re(e,ee,t.toString())}function le(e){return parseInt(ie(e,ee))||0}const ce={local:!0,session:!0},se={local:new Set,session:new Set};let ue=!1;let fe="undefined"==typeof window?{}:window;function de(e){const t=e+"Storage";try{if(fe&&fe[t]&&"number"==typeof fe[t].length)return fe[t]}catch(n){}ce[e]=!1}function pe(e,t){const n=de(e);if(!n)return;const i=ie(n,te);if(i!==V){if(i){const e=le(n);for(let t=0;t<e;t++)oe(n,Z+t.toString())}return re(n,te,V),void ae(n,0)}const r=Math.floor(Date.now()/ne)-168,o=e=>{const i=Z+e.toString(),o=ie(n,i);if("string"==typeof o){try{const n=JSON.parse(o);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>r&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&t(n,e))return!0}catch(a){}oe(n,i)}};let a=le(n);for(let l=a-1;l>=0;l--)o(l)||(l===a-1?(a--,ae(n,a)):se[e].add(l))}function he(){if(!ue){ue=!0;for(const e in ce)pe(e,(e=>{const t=e.data,n=v(e.provider,t.prefix);if(!y(n,t).length)return!1;const i=t.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,i):i,!0}))}}function me(e,t){function n(n){let i;if(!ce[n]||!(i=de(n)))return;const r=se[n];let o;if(r.size)r.delete(o=Array.from(r).shift());else if(o=le(i),o>=50||!ae(i,o+1))return;const a={cached:Math.floor(Date.now()/ne),provider:e.provider,data:t};return re(i,Z+o.toString(),JSON.stringify(a))}ue||he(),t.lastModified&&!function(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const i in ce)pe(i,(n=>{const i=n.data;return n.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t}));return!0}(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&delete(t=Object.assign({},t)).not_found,n("local")||n("session"))}function be(){}function ge(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout((()=>{e.iconsLoaderFlag=!1,function(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout((()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const i=e.provider,r=e.prefix;t.forEach((t=>{const o=t.icons,a=o.pending.length;o.pending=o.pending.filter((t=>{if(t.prefix!==r)return!0;const a=t.name;if(e.icons[a])o.loaded.push({provider:i,prefix:r,name:a});else{if(!e.missing.has(a))return n=!0,!0;o.missing.push({provider:i,prefix:r,name:a})}return!1})),o.pending.length!==a&&(n||q([e],t.id),t.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),t.abort))}))})))}(e)})))}function ve(e,t,n,i){function r(){const n=e.pendingIcons;t.forEach((t=>{n&&n.delete(t),e.icons[t]||e.missing.add(t)}))}if(n&&"object"==typeof n)try{if(!y(e,n).length)return void r();i&&me(e,n)}catch(o){console.error(o)}r(),ge(e)}function ye(e,t){e instanceof Promise?e.then((e=>{t(e)})).catch((()=>{t(null)})):t(e)}function xe(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout((()=>{e.iconsQueueFlag=!1;const{provider:t,prefix:n}=e,i=e.iconsToLoad;if(delete e.iconsToLoad,!i||!i.length)return;const r=e.loadIcon;if(e.loadIcons&&(i.length>1||!r))return void ye(e.loadIcons(i,n,t),(t=>{ve(e,i,t,!1)}));if(r)return void i.forEach((i=>{ye(r(i,n,t),(t=>{ve(e,[i],t?{prefix:n,icons:{[i]:t}}:null,!1)}))}));const{valid:o,invalid:a}=function(e){const t=[],n=[];return e.forEach((e=>{(e.match(h)?t:n).push(e)})),{valid:t,invalid:n}}(i);if(a.length&&ve(e,a,null,!1),!o.length)return;const l=n.match(h)?P(t):null;if(!l)return void ve(e,o,null,!1);l.prepare(t,n,o).forEach((n=>{K(t,n,(t=>{ve(e,n.icons,t,!0)}))}))})))}const we=(e,t)=>{const n=function(e,t=!0,n=!1){const i=[];return e.forEach((e=>{const r="string"==typeof e?m(e,t,n):e;r&&i.push(r)})),i}(e,!0,w()),i=function(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort(((e,t)=>e.provider!==t.provider?e.provider.localeCompare(t.provider):e.prefix!==t.prefix?e.prefix.localeCompare(t.prefix):e.name.localeCompare(t.name)));let i={provider:"",prefix:"",name:""};return e.forEach((e=>{if(i.name===e.name&&i.prefix===e.prefix&&i.provider===e.provider)return;i=e;const r=e.provider,o=e.prefix,a=e.name,l=n[r]||(n[r]=Object.create(null)),c=l[o]||(l[o]=v(r,o));let s;s=a in c.icons?t.loaded:""===o||c.missing.has(a)?t.missing:t.pending;const u={provider:r,prefix:o,name:a};s.push(u)})),t}(n);if(!i.pending.length){let e=!0;return t&&setTimeout((()=>{e&&t(i.loaded,i.missing,i.pending,be)})),()=>{e=!1}}const r=Object.create(null),o=[];let a,l;return i.pending.forEach((e=>{const{provider:t,prefix:n}=e;if(n===l&&t===a)return;a=t,l=n,o.push(v(t,n));const i=r[t]||(r[t]=Object.create(null));i[n]||(i[n]=[])})),i.pending.forEach((e=>{const{provider:t,prefix:n,name:i}=e,o=v(t,n),a=o.pendingIcons||(o.pendingIcons=new Set);a.has(i)||(a.add(i),r[t][n].push(i))})),o.forEach((e=>{const t=r[e.provider][e.prefix];t.length&&xe(e,t)})),t?function(e,t,n){const i=U++,r=q.bind(null,n,i);if(!t.pending.length)return r;const o={id:i,icons:t,callback:e,abort:r};return n.forEach((e=>{(e.loaderCallbacks||(e.loaderCallbacks=[])).push(o)})),r}(t,i,o):be};const Ee=/[\s,]+/;function Se(e,t){t.split(Ee).forEach((t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}}))}function ke(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function i(e){for(;e<0;)e+=4;return e%4}if(""===n){const t=parseInt(e);return isNaN(t)?0:i(t)}if(n!==e){let t=0;switch(n){case"%":t=25;break;case"deg":t=90}if(t){let r=parseFloat(e.slice(0,e.length-n.length));return isNaN(r)?0:(r/=t,r%1==0?i(r):0)}}return t}let Ce;function je(e){return void 0===Ce&&function(){try{Ce=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch(e){Ce=null}}(),Ce?Ce.createHTML(e):e}const Te={...C,inline:!1},Oe={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Fe={display:"inline-block"},Ne={backgroundColor:"currentColor"},Me={backgroundColor:"transparent"},Ie={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Ae={WebkitMask:Ne,mask:Ne,background:Me};for(const et in Ae){const e=Ae[et];for(const t in Ie)e[et+t]=Ie[t]}const Be={...Te,inline:!0};function Pe(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const Re=(e,t,n)=>{const r=t.inline?Be:Te,o=function(e,t){const n={...e};for(const i in t){const e=t[i],r=typeof e;i in k?(null===e||e&&("string"===r||"number"===r))&&(n[i]=e):r===typeof n[i]&&(n[i]="rotate"===i?e%4:e)}return n}(r,t),l=t.mode||"svg",c={},s=t.style||{},u={..."svg"===l?Oe:{}};if(n){const e=m(n,!1,!0);if(e){const t=["iconify"],n=["provider","prefix"];for(const i of n)e[i]&&t.push("iconify--"+e[i]);u.className=t.join(" ")}}for(let i in t){const e=t[i];if(void 0!==e)switch(i){case"icon":case"style":case"children":case"onLoad":case"mode":case"ssr":break;case"_ref":u.ref=e;break;case"className":u[i]=(u[i]?u[i]+" ":"")+e;break;case"inline":case"hFlip":case"vFlip":o[i]=!0===e||"true"===e||1===e;break;case"flip":"string"==typeof e&&Se(o,e);break;case"color":c.color=e;break;case"rotate":"string"==typeof e?o[i]=ke(e):"number"==typeof e&&(o[i]=e);break;case"ariaHidden":case"aria-hidden":!0!==e&&"true"!==e&&delete u["aria-hidden"];break;default:void 0===r[i]&&(u[i]=e)}}const f=function(e,t){const n={...a,...e},i={...C,...t},r={left:n.left,top:n.top,width:n.width,height:n.height};let o=n.body;[n,i].forEach((e=>{const t=[],n=e.hFlip,i=e.vFlip;let a,l=e.rotate;switch(n?i?l+=2:(t.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),t.push("scale(-1 1)"),r.top=r.left=0):i&&(t.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),t.push("scale(1 -1)"),r.top=r.left=0),l<0&&(l-=4*Math.floor(l/4)),l%=4,l){case 1:a=r.height/2+r.top,t.unshift("rotate(90 "+a.toString()+" "+a.toString()+")");break;case 2:t.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:a=r.width/2+r.left,t.unshift("rotate(-90 "+a.toString()+" "+a.toString()+")")}l%2==1&&(r.left!==r.top&&(a=r.left,r.left=r.top,r.top=a),r.width!==r.height&&(a=r.width,r.width=r.height,r.height=a)),t.length&&(o=function(e,t,n){const i=function(e,t="defs"){let n="";const i=e.indexOf("<"+t);for(;i>=0;){const r=e.indexOf(">",i),o=e.indexOf("</"+t);if(-1===r||-1===o)break;const a=e.indexOf(">",o);if(-1===a)break;n+=e.slice(r+1,o).trim(),e=e.slice(0,i).trim()+e.slice(a+1)}return{defs:n,content:e}}(e);return r=i.defs,o=t+i.content+n,r?"<defs>"+r+"</defs>"+o:o;var r,o}(o,'<g transform="'+t.join(" ")+'">',"</g>"))}));const l=i.width,c=i.height,s=r.width,u=r.height;let f,d;null===l?(d=null===c?"1em":"auto"===c?u:c,f=O(d,s/u)):(f="auto"===l?s:l,d=null===c?O(f,u/s):"auto"===c?u:c);const p={},h=(e,t)=>{(e=>"unset"===e||"undefined"===e||"none"===e)(t)||(p[e]=t.toString())};h("width",f),h("height",d);const m=[r.left,r.top,s,u];return p.viewBox=m.join(" "),{attributes:p,viewBox:m,body:o}}(e,o),d=f.attributes;if(o.inline&&(c.verticalAlign="-0.125em"),"svg"===l){u.style={...c,...s},Object.assign(u,d);let e=0,n=t.id;return"string"==typeof n&&(n=n.replace(/-/g,"_")),u.dangerouslySetInnerHTML={__html:je(I(f.body,n?()=>n+"ID"+e++:"iconifyReact"))},(0,i.createElement)("svg",u)}const{body:p,width:h,height:b}=e,g="mask"===l||"bg"!==l&&-1!==p.indexOf("currentColor"),v=function(e,t){let n=-1===e.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in t)n+=" "+i+'="'+t[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}(p,{...d,width:h+"",height:b+""});var y;return u.style={...c,"--svg":(y=v,'url("'+function(e){return"data:image/svg+xml,"+function(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(e)}(y)+'")'),width:Pe(d.width),height:Pe(d.height),...Fe,...g?Ne:Me,...s},(0,i.createElement)("span",u)};if(w(!0),B("",$),"undefined"!=typeof document&&"undefined"!=typeof window){he();const e=window;if(void 0!==e.IconifyPreload){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof t&&null!==t&&(t instanceof Array?t:[t]).forEach((e=>{try{("object"!=typeof e||null===e||e instanceof Array||"object"!=typeof e.icons||"string"!=typeof e.prefix||!S(e))&&console.error(n)}catch(t){console.error(n)}}))}if(void 0!==e.IconifyProviders){const t=e.IconifyProviders;if("object"==typeof t&&null!==t)for(let e in t){const n="IconifyProviders["+e+"] is invalid.";try{const i=t[e];if("object"!=typeof i||!i||void 0===i.resources)continue;_(e,i)||console.error(n)}catch(Ze){console.error(n)}}}}function ze(e){const[t,n]=(0,i.useState)(!!e.ssr),[r,o]=(0,i.useState)({});const[l,c]=(0,i.useState)(function(t){if(t){const t=e.icon;if("object"==typeof t)return{name:"",data:t};const n=E(t);if(n)return{name:t,data:n}}return{name:""}}(!!e.ssr));function s(){const e=r.callback;e&&(e(),o({}))}function u(e){if(JSON.stringify(l)!==JSON.stringify(e))return s(),c(e),!0}function f(){var t;const n=e.icon;if("object"==typeof n)return void u({name:"",data:n});const i=E(n);if(u({name:n,data:i}))if(void 0===i){const e=we([n],f);o({callback:e})}else i&&(null===(t=e.onLoad)||void 0===t||t.call(e,n))}(0,i.useEffect)((()=>(n(!0),s)),[]),(0,i.useEffect)((()=>{t&&f()}),[e.icon,t]);const{name:d,data:p}=l;return p?Re({...a,...p},e,d):e.children?e.children:(0,i.createElement)("span",{})}const Le=(0,i.forwardRef)(((e,t)=>ze({...e,_ref:t})));(0,i.forwardRef)(((e,t)=>ze({inline:!0,...e,_ref:t})));function De(e){let{icon:t,onClick:n}=e;return i.createElement("button",{onClick:n},i.createElement(Le,{icon:t,className:"h-6 w-6"}))}function _e(e){let{action:t,config:n}=e;return i.createElement("div",{className:"flex flex-row space-x-2 border"},i.createElement("div",{style:{width:n.width+"ch"},className:"border"},t.label),i.createElement("div",{className:"w-[32ch] truncate border pe-2 ps-2"},t.value))}function He(e){let{condition:t,config:n}=e;return i.createElement("div",{className:"flex flex-row space-x-2 border"},i.createElement("div",{style:{width:n.width+"ch"},className:"border"},t.label),i.createElement("div",{className:"w-[32ch] truncate border pe-2 ps-2"},t.value))}function Je(e){let{rule:t}=e;const{0:n,1:r}=(0,i.useState)(!0),{0:o,1:a}=(0,i.useState)(!1),l=e=>e.reduce(((e,t)=>Math.max(t.label.length,e)),0);return i.createElement("div",{className:"border pe-2 ps-2"},i.createElement("div",{className:"flex flex-row items-center space-x-3 border-b pb-2 pt-2"},i.createElement("div",{className:"flex-grow"},t.label),i.createElement(De,{icon:o?"mingcute:save-line":"mingcute:edit-4-line",onClick:()=>{a(!o)}}),i.createElement(De,{icon:"mingcute:delete-2-line",onClick:()=>{}}),i.createElement(De,{icon:n?"mingcute:square-arrow-up-line":"mingcute:square-arrow-down-line",onClick:()=>{r(!n)}})),n&&i.createElement("div",{className:"flex flex-col space-y-2"},i.createElement("div",{className:"text-sm"},t.description),i.createElement("div",{className:"h-24 bg-black"}),i.createElement("div",{className:"flex flex-row border"},i.createElement("div",{className:"flex w-1/2 flex-col space-y-2 border"},i.createElement("div",null,"Actions:"),t.actions.map((e=>i.createElement(_e,{key:e.id,action:e,config:{width:l(t.actions),editable:o}})))),i.createElement("div",{className:"flex w-1/2 flex-col space-y-2 border"},i.createElement("div",null,"Conditions:"),t.conditions.map((e=>i.createElement(He,{key:e.id,condition:e,config:{width:l(t.conditions),editable:o}})))))))}function $e(e){let{category:t}=e;return i.createElement("div",{className:"flex flex-col"},t.rules.map((e=>i.createElement(Je,{rule:e,key:e.id}))))}function qe(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=qe(e[t]))&&(i&&(i+=" "),i+=n)}else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}var Ue=function(){for(var e,t,n=0,i="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=qe(e))&&(i&&(i+=" "),i+=t);return i};function Ge(e){let{filter:t}=e;const{0:n,1:r}=(0,i.useState)(t.categories[0]);return i.createElement("div",{className:"flex flex-row"},i.createElement("div",{className:"flex w-44 flex-col"},t.categories.map((e=>i.createElement("div",{key:e.id,className:"flex flex-row"},i.createElement("button",{onClick:()=>r(e),className:Ue("w-full truncate border p-2 text-left text-xl",{"font-bold":n===e})},e.label))))),i.createElement("div",{className:"h-full w-full"},i.createElement($e,{category:n})))}function We(e){let{filters:t}=e;const{0:n,1:r}=(0,i.useState)(t[0]);return i.createElement("div",{className:"flex flex-col"},i.createElement(Ge,{filter:n}))}var Qe=n(6543),Ye=n(1042);function Xe(e){let{data:t,children:n}=e;return i.createElement(Qe.A,null,i.createElement(We,{filters:Ve}))}const Ke=e=>{let{data:t}=e;return i.createElement(Ye.A,{title:t.infoYaml.label})},Ve=[{id:"1",label:"Filter #1",categories:[{id:"1",label:"Currency",rules:[{id:"1",label:"Currency: Tier 0",description:"Highlight highly valuable currency such as divines and mirrors",actions:[{id:"1",label:"Font size",description:"Sets the font size of the item label.",name:"SetFontSize",value:"45"},{id:"2",label:"Text color",description:"Sets the text colour of the item label. Ruthless filters must have an alpha value of 80 or above",name:"SetTextColor",value:"255 0 0 255"},{id:"3",label:"Border color",description:"Sets the border colour of the item label.",name:"SetBorderColor",value:"255 0 0 255"},{id:"4",label:"Background color",description:"Sets the background colour of the item label.",name:"SetBackgroundColor",value:"255 255 255 255"},{id:"5",label:"Alert sound",description:'Plays a built-in alert sound when the item appears. Can be disabled by specifying "None".',name:"PlayAlertSound",value:"6 300"},{id:"6",label:"Effect",description:"Displays a coloured beam of light above an item highlighted by an item filter. When the value is Temp, the beam only appears as the item drops, Otherwise the beam will be permanently visible.",name:"PlayEffect",value:"Red"},{id:"7",label:"Minimap icon",description:"Displays an icon on your minimap.",name:"MinimapIcon",value:"0 Red Star"}],conditions:[{id:"1",label:"Class",description:"Filter by item class name.",name:"Class",value:"Currency"},{id:"2",label:"BaseType",description:"Filter by base type name.",name:"BaseType",value:'"Mirror" "Divine" "Perfect Jeweller\'s Orb"'}]},{id:"2",label:"Currency: Tier 1",description:"Highlight valuable currency such as exalted orbs, chaos orbs, etc",actions:[{id:"1",label:"Font size",description:"Sets the font size of the item label.",name:"SetFontSize",value:"45"},{id:"2",label:"Text color",description:"Sets the text colour of the item label. Ruthless filters must have an alpha value of 80 or above",name:"SetTextColor",value:"255 0 0 255"},{id:"3",label:"Border color",description:"Sets the border colour of the item label.",name:"SetBorderColor",value:"255 0 0 255"},{id:"4",label:"Background color",description:"Sets the background colour of the item label.",name:"SetBackgroundColor",value:"255 255 255 255"},{id:"5",label:"Alert sound",description:'Plays a built-in alert sound when the item appears. Can be disabled by specifying "None".',name:"PlayAlertSound",value:"6 300"},{id:"6",label:"Effect",description:"Displays a coloured beam of light above an item highlighted by an item filter. When the value is Temp, the beam only appears as the item drops, Otherwise the beam will be permanently visible.",name:"PlayEffect",value:"Red"},{id:"7",label:"Minimap icon",description:"Displays an icon on your minimap.",name:"MinimapIcon",value:"0 Red Star"}],conditions:[{id:"1",label:"Class",description:"Filter by item class name.",name:"Class",value:"Currency"},{id:"2",label:"BaseType",description:"Filter by base type name.",name:"BaseType",value:'"Mirror" "Divine" "Perfect Jeweller\'s Orb"'}]},{id:"3",label:"Currency: Tier 3",description:"Highlight currency such as regal orbs, transmutation orbs",actions:[{id:"1",label:"Font size",description:"Sets the font size of the item label.",name:"SetFontSize",value:"45"},{id:"2",label:"Text color",description:"Sets the text colour of the item label. Ruthless filters must have an alpha value of 80 or above",name:"SetTextColor",value:"255 0 0 255"},{id:"3",label:"Border color",description:"Sets the border colour of the item label.",name:"SetBorderColor",value:"255 0 0 255"},{id:"4",label:"Background color",description:"Sets the background colour of the item label.",name:"SetBackgroundColor",value:"255 255 255 255"},{id:"5",label:"Alert sound",description:'Plays a built-in alert sound when the item appears. Can be disabled by specifying "None".',name:"PlayAlertSound",value:"6 300"},{id:"6",label:"Effect",description:"Displays a coloured beam of light above an item highlighted by an item filter. When the value is Temp, the beam only appears as the item drops, Otherwise the beam will be permanently visible.",name:"PlayEffect",value:"Red"},{id:"7",label:"Minimap icon",description:"Displays an icon on your minimap.",name:"MinimapIcon",value:"0 Red Star"}],conditions:[{id:"1",label:"Class",description:"Filter by item class name.",name:"Class",value:"Currency"},{id:"2",label:"BaseType",description:"Filter by base type name.",name:"BaseType",value:'"Mirror" "Divine" "Perfect Jeweller\'s Orb"'}]}]},{id:"2",label:"Delirium",rules:[]},{id:"3",label:"Breach",rules:[]},{id:"4",label:"Fragments",rules:[]},{id:"5",label:"Expedition",rules:[]},{id:"6",label:"Essences",rules:[]},{id:"7",label:"Runes",rules:[]},{id:"8",label:"Omens",rules:[]},{id:"9",label:"Gems (Skill, Spirit, Support)",rules:[]}]},{id:"2",label:"Filter #2",categories:[]},{id:"3",label:"Filter #3",categories:[]},{id:"4",label:"Filter #4",categories:[]}]}}]);
//# sourceMappingURL=component---src-pages-info-yaml-version-tsx-fce872fb36c5f19856dd.js.map