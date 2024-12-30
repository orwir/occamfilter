"use strict";(self.webpackChunkoccamfilter=self.webpackChunkoccamfilter||[]).push([[413],{8530:function(e,t,l){l.r(t),l.d(t,{Head:function(){return E},default:function(){return x}});var a=l(4506),r=l(4164),n=l(6540),c=l(7986);function s(e){let{categories:t,onSelected:l,onNewCategory:a}=e;const{0:s,1:o}=(0,n.useState)(0),i=t.length-1;return n.createElement("div",{className:"flex w-[20ch] flex-col"},t.map(((e,t)=>n.createElement("div",{key:e.id,className:"flex flex-row hover:text-amber-500"},n.createElement("button",{onClick:()=>{o(t),l(e)},className:(0,r.A)("flex w-full flex-row items-center space-x-2 border-b border-r border-neutral-500 px-3 py-4 text-left text-xl",{"border-b-0 border-r-0 text-amber-600":t===s,"rounded-tr-md border-t":t===s+1,"rounded-br-md":t===s-1})},e.name)))),n.createElement("div",{className:(0,r.A)("flex w-[20ch] flex-grow border-r border-neutral-500 px-2 pt-8",{"rounded-tr-md border-t":s===i})},n.createElement(c.K0,{icon:"mingcute:file-new-line",text:"New category",onClick:a})))}function o(e){let{action:t,config:l}=e;return n.createElement("div",{className:"flex flex-row"},n.createElement("div",{style:{width:l.width+"ch"},className:"border-b border-neutral-500"},t.label),n.createElement("div",{className:"truncate border-b border-neutral-500 pe-2 ps-2"},t.value))}function i(e){let{condition:t,config:l}=e;return n.createElement("div",{className:"flex flex-row"},n.createElement("div",{style:{width:l.width+"ch"},className:"border-b border-neutral-500"},t.label),n.createElement("div",{className:"truncate border-b border-neutral-500 pe-2 ps-2"},t.value))}function m(e){let{rule:t}=e;const{0:l,1:s}=(0,n.useState)(!1),m=[].concat((0,a.A)(t.actions),(0,a.A)(t.conditions)).reduce(((e,t)=>Math.max(t.label.length,e)),0);return n.createElement("div",{className:"flex w-full flex-col rounded-md border border-neutral-500"},n.createElement("div",{className:(0,r.A)("flex w-full flex-row justify-between space-x-3 rounded-t-md bg-neutral-900 px-2 py-2",{"rounded-b-md":!l})},n.createElement(c.K0,{icon:l?"mingcute:square-arrow-up-line":"mingcute:square-arrow-down-line",onClick:()=>{s(!l)}}),n.createElement("div",{className:"flex-grow font-bold"},t.name),n.createElement(c.K0,{icon:"mingcute:edit-4-line",onClick:()=>{}}),n.createElement(c.K0,{icon:"mingcute:delete-2-line",onClick:()=>{}})),l&&n.createElement("div",{className:"w-full rounded-b-md bg-neutral-950 px-3 py-2"},n.createElement("div",{className:"mb-2 flex h-28 flex-col items-center justify-center bg-slate-800"},n.createElement("div",null,"Filter rule preview"),n.createElement("div",null,"Coming soon")),n.createElement("div",{className:"text-gray-400"},"Actions"),n.createElement("div",{className:"flex flex-col space-y-1"},t.actions.map((e=>n.createElement(o,{key:e.id,action:e,config:{width:m}})))),n.createElement("div",{className:"mt-4 text-gray-400"},"Conditions"),n.createElement("div",{className:"mb-2 flex flex-col space-y-1"},t.conditions.map((e=>n.createElement(i,{key:e.id,condition:e,config:{width:m}}))))))}var d=l(6543),u=l(1042),f=l(3112);function x(e){let{data:t,params:l}=e;const{version:r,"*":o}=l,i=t.allPoeMetadata.nodes.map((e=>({name:e.league,version:e.version}))),u=(0,f.aP)(r,o);if(!u&&o)return n.createElement(b,null);const{0:x,1:E}=(0,n.useState)(u||{game:r,gameVersion:i[0].version,id:(0,f.gZ)(),name:"",lastUpdated:new Date,description:"",categories:[]}),{0:v,1:p}=(0,n.useState)(x.categories[0]);return(0,n.useEffect)((()=>{console.log("saveFilter: ",x)}),[x]),n.createElement(d.A,null,n.createElement("div",{className:"flex h-full justify-center"},n.createElement("div",{className:"flex w-[900px] flex-col space-y-2"},n.createElement("div",{className:"flex flex-row items-center space-x-4 pe-7 pt-2"},n.createElement("div",{className:"w-44"},n.createElement(c.Fo,{className:"truncate ps-3 text-lg",text:x.name,onTextChange:e=>E(Object.assign({},x,{name:e}))})),n.createElement("div",{className:"flex-grow"}),n.createElement(c.ms,{data:i.map((e=>({text:e.name,value:e}))),onSelected:()=>{}}),n.createElement(c.K0,{icon:"mingcute:settings-6-line",onClick:()=>{}})),n.createElement("div",{className:"flex h-full flex-row rounded-md border border-neutral-500"},n.createElement(s,{categories:x.categories,onSelected:p,onNewCategory:()=>{E(Object.assign({},x,{categories:[].concat((0,a.A)(x.categories),[{id:(0,f.gZ)(),name:"new category",rules:[]}])}))}}),n.createElement("div",{className:"flex w-full"},v&&n.createElement("div",{className:"flex w-full flex-col space-y-2 px-4 py-2"},v.rules.map((e=>n.createElement(m,{rule:e,key:e.id})))))))))}const E=()=>n.createElement(u.A,{title:""});function b(){return n.createElement(d.A,null,n.createElement("div",{className:"flex flex-col items-center space-y-6 pt-24"},n.createElement("div",{className:"text-4xl"},"Exile!"),n.createElement("div",{className:"text-3xl"},"Your filter is in another browser!"),n.createElement("div",{className:"w-[38ch] whitespace-pre-wrap"},"░░░░░░░░▄▄▄▀▀▀▄▄███▄░░░░░░░░░░░░░░ ░░░░░▄▀▀░░░░░░░▐░▀██▌░░░░░░░░░░░░░ ░░░▄▀░░░░▄▄███░▌▀▀░▀█░░░░░░░░░░░░░ ░░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░░░░░░░░░░░░ ░▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄░░░░░░░░░░░ ░▌▄▄▀▀░░░░░░░░▌░░░░▄███████▄░░░░░░ ░░░░░░░░░░░░░▐░░░░▐███████████▄░░░ ░░░░░le░░░░░░░▐░░░░▐█████████████▄ ░░░░toucan░░░░░░▀▄░░░▐█████████████▄ ░░░░░░has░░░░░░░░▀▄▄███████████████ ░░░░░arrived░░░░░░░░░░░░█▀██████░░")))}}}]);
//# sourceMappingURL=component---src-pages-game-version-filter-tsx-1c1c5a5849cd7fe551ae.js.map