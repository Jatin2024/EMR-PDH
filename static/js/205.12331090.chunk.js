(self.webpackChunkerp_product_hub=self.webpackChunkerp_product_hub||[]).push([[205],{4871:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>I});var r=n(65043),i=n(5137),s=n(11906),a=n(1009),o=n(93291),l=n(26814),c=n(34535),u=n(71806),d=n(81e3),h=n(84882),f=n(28076),p=n(10039),m=n(73460),g=n(19090),v=n(35475),x=n(21803),y=n.n(x),$=n(17392),A=n(47260),w=n(72819),S=n(78231),j=n(70579);const b=(0,c.Ay)(u.A)((()=>({whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0}}},"& tbody":{"& tr":{"& td":{paddingLeft:0,textTransform:"capitalize"}}}}))),M=e=>{var t;return e&&"object"===typeof e&&null!==(t=null===e||void 0===e?void 0:e.ERPstatus)&&void 0!==t?t:"-"},D=e=>{const{mcoSearchLists:t}=(0,i.d4)((e=>({mcoSearchLists:e.mcoDetails.mcoSearchLists||{}})),i.bN);let{mcolistsArr:n}=e;const s=localStorage.getItem("instance"),[a,o]=(0,r.useState)(0),[l,c]=(0,r.useState)(500),[u,x]=(0,r.useState)(n||[]),[D,k]=(0,r.useState)(!1),[P,O]=(0,r.useState)(null);return(0,r.useEffect)((()=>{const e=null!==n&&void 0!==n&&n.length?n.slice(a*l,a*l+l):[];x(e)}),[a,l,n]),(0,j.jsxs)(d.A,{width:"100%",overflow:"auto",children:[(0,j.jsxs)(b,{children:[(0,j.jsx)(h.A,{children:(0,j.jsxs)(f.A,{children:[(0,j.jsx)(p.A,{align:"left",style:{width:"10%",wordWrap:"word-break"},children:"MCO Name"}),(0,j.jsx)(p.A,{align:"left",style:{width:"10%",wordWrap:"word-break"},children:"RDO"}),(0,j.jsx)(p.A,{align:"left",style:{width:"5%",wordWrap:"word-break"},children:"State"}),(0,j.jsx)(p.A,{align:"left",style:{width:"5%",wordWrap:"word-break"},children:"Plant"}),(0,j.jsx)(p.A,{align:"left",style:{wordWrap:"word-break"},children:"Start Date"}),(0,j.jsx)(p.A,{align:"center",style:{width:"10%",wordWrap:"word-break"},children:"Export Status"}),(0,j.jsx)(p.A,{align:"center",style:{wordWrap:"word-break"},children:"Failed Integration Step"}),(0,j.jsx)(p.A,{align:"left",style:{width:"10%",wordWrap:"word-break"},children:"Resp. Mfg Eng."}),(0,j.jsx)(p.A,{align:"left",style:{wordWrap:"word-break"},children:"Resp. Senior Mfg Eng."})]})}),(0,j.jsx)(m.A,{children:null!==u&&void 0!==u&&u.length?u.filter((e=>{var n;const r=null===e||void 0===e||null===(n=e.title)||void 0===n?void 0:n.trim().toUpperCase();if(!r)return!1;return Object.keys(t||{}).map((e=>e.trim().toUpperCase())).includes(r)})).map((e=>{var n;const r=null===e||void 0===e||null===(n=e.title)||void 0===n?void 0:n.trim().toUpperCase(),i=Object.keys(t||{}).find((e=>e.trim().toUpperCase()===r)),a=i?t[i]:{};return(0,j.jsxs)(f.A,{className:"dataTableMCO",children:[(0,j.jsx)(p.A,{align:"left",children:(0,j.jsx)(v.Link,{to:"/mcodetail/"+("SaaS"===s?null===e||void 0===e?void 0:e.id:i),style:{color:"#1976d2"},children:i})}),(0,j.jsx)(p.A,{align:"left",children:(null===e||void 0===e?void 0:e.businessUnit)||"-"}),(0,j.jsx)(p.A,{align:"left",children:(null===e||void 0===e?void 0:e.mcostate)||"-"}),(0,j.jsx)(p.A,{align:"left",children:(null===e||void 0===e?void 0:e.plantName)||"-"}),(0,j.jsx)(p.A,{align:"left",children:(null===e||void 0===e?void 0:e.startdate)||"-"}),(0,j.jsx)(p.A,{align:"center",children:M(a)}),(0,j.jsx)(p.A,{align:"center",children:null!==a&&void 0!==a&&a.ERPstatus?(0,j.jsx)($.A,{"aria-label":"close",onClick:e=>{e.stopPropagation(),O(a),k(!0)},sx:e=>{var t,n;return{position:"relative",right:0,top:0,color:null!==(t="success"===(null===a||void 0===a||null===(n=a.ERPstatus)||void 0===n?void 0:n.toLowerCase())?"limegreen":"red")&&void 0!==t?t:"#1976d2"}},children:(0,j.jsx)(A.A,{})}):(0,j.jsx)($.A,{"aria-label":"close",onClick:e=>{e.stopPropagation()},sx:e=>({position:"relative",right:0,top:0,color:e.palette.grey[500]}),children:(0,j.jsx)(w.A,{})})}),(0,j.jsx)(p.A,{align:"left",children:null===e||void 0===e?void 0:e.originator}),(0,j.jsx)(p.A,{align:"left",children:null===e||void 0===e?void 0:e.originator})]},y().generate())})):(0,j.jsx)(f.A,{children:(0,j.jsx)(p.A,{align:"left",colSpan:9,style:{textAlign:"center"},children:"No result found!"})},y().generate())})]}),null!==n&&void 0!==n&&n.length?(0,j.jsx)(g.A,{sx:{px:2},page:a,component:"div",rowsPerPage:l,count:null===n||void 0===n?void 0:n.length,onPageChange:(e,t)=>{o(t)},rowsPerPageOptions:[100,200,300,400,500],onRowsPerPageChange:e=>{c(+e.target.value),o(0)},nextIconButtonProps:{"aria-label":"Next Page"},backIconButtonProps:{"aria-label":"Previous Page"}}):(0,j.jsx)(j.Fragment,{}),D?(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(S.A,{erpStatusReasonDialogBox:D,updateERPStatusReason:()=>{k(!1)},selectedMCO:P,setSelectedMCO:O})}):null]})};var k=n(66578),P=n(76987),O=n(89454),C=n(68903),L=n(15795),_=n(51787),E=n(67254),N=n(88911),W=(n(56659),n(50778));const T=(0,c.Ay)("div")((e=>{let{theme:t}=e;return{margin:"30px",[t.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[t.breakpoints.down("sm")]:{marginBottom:"16px"}}}})),I=()=>{const e=(0,i.wA)(),{mcolist:t}=(0,i.d4)((e=>e.mcoDetails)),[n,c]=(0,r.useState)({type:"MCO",limit:"500"}),[u,h]=(0,r.useState)(!1),[f,p]=(0,r.useState)(!1),[m,g]=(0,r.useState)(null),[v,x]=(0,r.useState)(!1),[y,$]=(0,r.useState)(null),A=new o.f,w=async t=>{try{x(!1),h(!0),g(null);const n={...t,searchPattern:t.searchPattern+""};await A.searchMCO(n).then((async n=>{if(Array.isArray(n))if(n.length){e((0,l.FY)({mcolist:n}));const r=n.map((e=>null===e||void 0===e?void 0:e.title)).filter((e=>e)),i=t.searchPattern,s=r.filter((e=>e.startsWith(i)));await A.getMcoDetailsByName(s).then((t=>{Object.keys(t).length&&e((0,l.RY)({mcoSearchLists:t}))})),n.length>=500&&g("Please refine your search criteria, as the maximum limit of 500 search results has been exceeded.")}else e((0,l.FY)({mcolist:[]})),x(!0),$({severity:"error",desc:"No result found!"});else x(!0),$({severity:"error",desc:n});h(!1)})).catch((e=>(h(!1),x(!0),$({severity:"error",desc:"Something went wrong!"}),e)))}catch(n){p(!0)}};return(0,j.jsx)(T,{children:f?(0,j.jsx)(O.A,{}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(d.A,{className:"breadcrumb",children:(0,j.jsx)(a.Qp,{routeSegments:[{name:"Search MCO"}]})}),(0,j.jsxs)(a.Tn,{children:[m&&(0,j.jsx)(N.A,{sx:{width:"100%",marginBottom:"25px"},spacing:2,children:(0,j.jsx)(E.A,{severity:"info",onClose:()=>{g(null)},children:m})}),(0,j.jsxs)(C.Ay,{container:!0,spacing:1,alignItems:"center",children:[(0,j.jsx)(C.Ay,{item:!0,md:3,sm:6,xs:12,className:"font-medium",children:(0,j.jsx)(L.A,{type:"text",name:"search",size:"small",onChange:e=>{e.persist();const t={...n,searchPattern:e.target.value};c(t)},onKeyDown:e=>{if("Enter"===e.key){const t={...n,searchPattern:e.target.value};c(t),w(t)}},value:(null===n||void 0===n?void 0:n.searchPattern)||"",style:{width:"100%"},InputProps:{endAdornment:(0,j.jsx)(_.A,{position:"end",children:"*"})}})}),(0,j.jsxs)(C.Ay,{item:!0,md:9,sm:6,xs:12,children:[(0,j.jsx)(s.A,{variant:"contained",onClick:()=>{w(n)},children:"Search"}),(0,j.jsx)(s.A,{variant:"contained",onClick:()=>{(0,W.ZY)(t,"searchMCO")},style:{float:"right",marginRight:"15px"},children:"Export"})]}),(0,j.jsx)(C.Ay,{item:!0,md:12,sm:12,xs:12,children:(0,j.jsx)(D,{mcolistsArr:t||[]})})]}),y?(0,j.jsx)(P.A,{openAlert:v,openDesc:y,setOpenAlert:x}):(0,j.jsx)(j.Fragment,{}),u?(0,j.jsx)("div",{style:{textAlign:"center"},children:(0,j.jsx)(k.A,{show:u})}):(0,j.jsx)(j.Fragment,{})]})]})})}},51787:(e,t,n)=>{"use strict";n.d(t,{A:()=>w});var r=n(98587),i=n(58168),s=n(65043),a=n(58387),o=n(98610),l=n(6803),c=n(85865),u=n(41053),d=n(85213),h=n(34535),f=n(92532),p=n(72372);function m(e){return(0,p.Ay)("MuiInputAdornment",e)}const g=(0,f.A)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var v,x=n(98206),y=n(70579);const $=["children","className","component","disablePointerEvents","disableTypography","position","variant"],A=(0,h.Ay)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${(0,l.A)(n.position)}`],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})((e=>{let{theme:t,ownerState:n}=e;return(0,i.A)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===n.variant&&{[`&.${g.positionStart}&:not(.${g.hiddenLabel})`]:{marginTop:16}},"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),w=s.forwardRef((function(e,t){const n=(0,x.b)({props:e,name:"MuiInputAdornment"}),{children:h,className:f,component:p="div",disablePointerEvents:g=!1,disableTypography:w=!1,position:S,variant:j}=n,b=(0,r.A)(n,$),M=(0,d.A)()||{};let D=j;j&&M.variant,M&&!D&&(D=M.variant);const k=(0,i.A)({},n,{hiddenLabel:M.hiddenLabel,size:M.size,disablePointerEvents:g,position:S,variant:D}),P=(e=>{const{classes:t,disablePointerEvents:n,hiddenLabel:r,position:i,size:s,variant:a}=e,c={root:["root",n&&"disablePointerEvents",i&&`position${(0,l.A)(i)}`,a,r&&"hiddenLabel",s&&`size${(0,l.A)(s)}`]};return(0,o.A)(c,m,t)})(k);return(0,y.jsx)(u.A.Provider,{value:null,children:(0,y.jsx)(A,(0,i.A)({as:p,ownerState:k,className:(0,a.A)(P.root,f),ref:t},b,{children:"string"!==typeof h||w?(0,y.jsxs)(s.Fragment,{children:["start"===S?v||(v=(0,y.jsx)("span",{className:"notranslate",children:"\u200b"})):null,h]}):(0,y.jsx)(c.A,{color:"text.secondary",children:h})}))})}))},60446:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",o="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},x={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),s=n-i<0,a=t.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:o,D:h,h:a,m:s,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",$={};$[y]=g;var A="$isDayjsObject",w=function(e){return e instanceof M||!(!e||!e[A])},S=function e(t,n,r){var i;if(!t)return y;if("string"==typeof t){var s=t.toLowerCase();$[s]&&(i=s),n&&($[s]=n,i=s);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var o=t.name;$[o]=t,i=o}return!r&&i&&(y=i),i||!r&&y},j=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},b=x;b.l=S,b.i=w,b.w=function(e,t){return j(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[A]=!0}var v=g.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return b},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(e,t){var n=j(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return j(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<j(e)},v.$g=function(e,t,n){return b.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!b.u(t)||t,u=b.p(e),f=function(e,t){var i=b.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(o)},p=function(e,t){return b.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,v=this.$D,x="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,g):f(0,g+1);case l:var y=this.$locale().weekStart||0,$=(m<y?m+7:m)-y;return f(r?v-$:v+(6-$),g);case o:case h:return p(x+"Hours",0);case a:return p(x+"Minutes",1);case s:return p(x+"Seconds",2);case i:return p(x+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,l=b.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[o]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[s]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===o?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[b.p(e)]()},v.add=function(r,u){var h,f=this;r=Number(r);var p=b.p(u),m=function(e){var t=j(f);return b.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===o)return m(1);if(p===l)return m(7);var g=(h={},h[s]=t,h[a]=n,h[i]=e,h)[p]||1,v=this.$d.getTime()+r*g;return b.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,i,s){return e&&(e[n]||e(t,r))||i[n].slice(0,s)},h=function(e){return b.s(s%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return b.s(t.$y,4,"0");case"M":return o+1;case"MM":return b.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,c,3);case"MMMM":return d(c,o);case"D":return t.$D;case"DD":return b.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(s,a,!0);case"A":return p(s,a,!1);case"m":return String(a);case"mm":return b.s(a,2,"0");case"s":return String(t.$s);case"ss":return b.s(t.$s,2,"0");case"SSS":return b.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,h,f){var p,m=this,g=b.p(h),v=j(r),x=(v.utcOffset()-this.utcOffset())*t,y=this-v,$=function(){return b.m(m,v)};switch(g){case d:p=$()/12;break;case c:p=$();break;case u:p=$()/3;break;case l:p=(y-x)/6048e5;break;case o:p=(y-x)/864e5;break;case a:p=y/n;break;case s:p=y/t;break;case i:p=y/e;break;default:p=y}return f?p:b.a(p)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return $[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return b.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),D=M.prototype;return j.prototype=D,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",o],["$M",c],["$y",d],["$D",h]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),j.extend=function(e,t){return e.$i||(e(t,M,j),e.$i=!0),j},j.locale=S,j.isDayjs=w,j.unix=function(e){return j(1e3*e)},j.en=$[y],j.Ls=$,j.p={},j}()}}]);
//# sourceMappingURL=205.12331090.chunk.js.map