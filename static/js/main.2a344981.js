(()=>{"use strict";var e={},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var i=Object.create(null);r.r(i);var d={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>d[e]=()=>n[e]));return d.default=()=>n,r.d(i,d),i}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>"static/js/"+e+"."+{1:"0aaf3333",6:"7097bfd3",138:"79f44e5a",205:"12331090",320:"1b6d2f0b",339:"143adfe2",422:"584285d5",445:"0545a32f",446:"a1786891",479:"14b4bea5",612:"0158c8df",632:"6fca52dd",677:"357e065c",720:"8f74f6c3",767:"740ec446",842:"ee472892",858:"43c93007",868:"7c352f7c",977:"f1af56f7"}[e]+".chunk.js",r.miniCssF=e=>"static/css/"+e+"."+{6:"1026aea0",205:"1378650e",320:"24fe8f8a",339:"1378650e",479:"29df0e59",632:"1378650e",767:"1378650e",842:"27c8277d",858:"e4db09fe"}[e]+".chunk.css",r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="erp_product_hub:";r.l=(n,o,i,d)=>{if(e[n])e[n].push(o);else{var a,l;if(void 0!==i)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var u=s[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+i){a=u;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",t+i),a.src=n),e[n]=[o];var f=(t,r)=>{a.onerror=a.onload=null,clearTimeout(g);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(r))),t)return t(r)},g=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),l&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/",(()=>{if("undefined"!==typeof document){var e=e=>new Promise(((t,n)=>{var o=r.miniCssF(e),i=r.p+o;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(d=r[n]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(o===e||o===t))return d}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var d;if((o=(d=i[n]).getAttribute("data-href"))===e||o===t)return d}})(o,i))return t();((e,t,n,o,i)=>{var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",r.nc&&(d.nonce=r.nc),d.onerror=d.onload=r=>{if(d.onerror=d.onload=null,"load"===r.type)o();else{var n=r&&r.type,a=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+a+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=a,d.parentNode&&d.parentNode.removeChild(d),i(l)}},d.href=t,n?n.parentNode.insertBefore(d,n.nextSibling):document.head.appendChild(d)})(e,i,null,t,n)})),t={792:0};r.f.miniCss=(r,n)=>{t[r]?n.push(t[r]):0!==t[r]&&{6:1,205:1,320:1,339:1,479:1,632:1,767:1,842:1,858:1}[r]&&n.push(t[r]=e(r).then((()=>{t[r]=0}),(e=>{throw delete t[r],e})))}}})(),(()=>{var e={792:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=i);var d=r.p+r.u(t),a=new Error;r.l(d,(n=>{if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),d=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+d+")",a.name="ChunkLoadError",a.type=i,a.request=d,o[1](a)}}),"chunk-"+t,t)}};var t=(t,n)=>{var o,i,d=n[0],a=n[1],l=n[2],s=0;if(d.some((t=>0!==e[t]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(l)l(r)}for(t&&t(n);s<d.length;s++)i=d[s],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunkerp_product_hub=self.webpackChunkerp_product_hub||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();const n=function(){const e={};let t="";const r=window.location.href,n=(()=>{let e=localStorage.getItem("_prefs_4_Widget_");if(e)try{e=JSON.parse(e)}catch{e={},localStorage.setItem("_prefs_4_Widget_",JSON.stringify(e))}else e={},localStorage.setItem("_prefs_4_Widget_",JSON.stringify(e));return e})(),o=()=>{localStorage.setItem("_prefs_4_Widget_",JSON.stringify(n))};this.addEvent=(t,r)=>{e[t]=r,"onLoad"===t&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",r):r())},this.addPreference=e=>{e.value=e.defaultValue,n[e.name]=e,o()},this.getPreference=e=>n[e],this.getUrl=()=>r,this.getValue=e=>void 0===n[e]?void 0:n[e].value,this.setValue=(e,t)=>{n[e].value=t,o()},this.setIcon=e=>{},this.setTitle=e=>{t=e,document.title=t},this.dispatchEvent=function(){}},o=function(){this.log=e=>{}};!function(e,t){const i=function(e,t,r){if("undefined"!==typeof window[e])r();else{if(0===t)throw document.body.innerHTML="Error while trying to load widget. See console for details",console.error(`[initWidget] ${e} didn't load after maximum tries.`),new Error(`${e} didn't load`);setTimeout(i,200,e,--t,r)}},d=()=>{r.p=widget.uwaUrl.substring(0,widget.uwaUrl.lastIndexOf("/")+1)};if(window.widget)d(),e(widget);else if(window.UWA)try{i("widget",10,(()=>{d(),e(widget)}))}catch(a){console.error(a),t(a)}else window.widget=new n,window.UWA=new o,new Promise(((e,t)=>{const r=new XMLHttpRequest;r.addEventListener("load",(t=>{const r=document.createElement("script");r.innerHTML=t.target.response,document.head.appendChild(r),e()}));try{r.open("GET","/src/lib/require.js"),r.send()}catch(n){console.error("[initWidget] Error sending XMLHttpRequest for require.js",n),t(n)}})).then((()=>{define("DS/TagNavigatorProxy/TagNavigatorProxy",[],(()=>new function(){this.createProxy=()=>({addEvent:()=>{},setSubjectsTags:()=>{}})})),define("DS/PlatformAPI/PlatformAPI",[],(()=>new function(){this.getUser=()=>({}),this.subscribe=(e,t)=>({topic:e,callback:t})}))})),i("requirejs",10,(()=>{e(window.widget)}))}((e=>{Promise.all([r.e(445),r.e(868)]).then(r.bind(r,27868)).then((e=>{console.log("Init Widget is called"),e.default()})).catch((t=>{console.error("Error dynamically importing ../index:",t),e.body.innerHTML="<div style='color: red;'>Error loading widget content.</div>"}))}),(e=>{console.error("Widget initialization failed:",e),document.body.innerHTML="<div style='color: red;'>Widget failed to initialize.</div>"}))})();
//# sourceMappingURL=main.2a344981.js.map