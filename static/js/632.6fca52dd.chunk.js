"use strict";(self.webpackChunkerp_product_hub=self.webpackChunkerp_product_hub||[]).push([[632],{4632:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var s=n(65043),l=n(11906),a=n(1009),r=n(93291),i=n(81e3),o=n(91048),d=(n(30588),n(70579));const c=e=>{let{speclistsArr:t,selected:n,onSelectionChange:l}=e;const[a,r]=(0,s.useState)(t||[]),c=(0,s.useRef)(null);return(0,s.useEffect)((()=>{r(t)}),[t]),(0,d.jsx)(i.A,{width:"100%",overflow:"auto",children:(0,d.jsx)(o.Ay,{idProperty:"id",showZebraRows:!1,style:{minHeight:550},columns:[{name:"obsoletePart",header:"Type",defaultFlex:1,defaultWidth:50,render:e=>{var t,n;let{data:s}=e;return(0,d.jsx)("div",{children:(null===s||void 0===s||null===(t=s.obsoletePartData)||void 0===t||null===(n=t.receivedPayload)||void 0===n?void 0:n.type)||"-"})}},{name:"name",header:"Name",defaultFlex:1,defaultWidth:50,render:e=>{var t,n;let{data:s}=e;return(0,d.jsx)("div",{children:null===s||void 0===s||null===(t=s.obsoletePartData)||void 0===t||null===(n=t.affectedItems[0])||void 0===n?void 0:n.name})}},{name:"revision",header:"Revision",defaultFlex:1,defaultWidth:50,render:e=>{var t,n;let{data:s}=e;return(0,d.jsx)("div",{children:null===s||void 0===s||null===(t=s.obsoletePartData)||void 0===t||null===(n=t.affectedItems[0])||void 0===n?void 0:n.revision})}},{name:"description",header:"Description",defaultFlex:1,defaultWidth:50,render:e=>{var t,n;let{data:s}=e;return(0,d.jsx)("div",{children:null===s||void 0===s||null===(t=s.obsoletePartData)||void 0===t||null===(n=t.affectedItems[0])||void 0===n?void 0:n.description})}},{name:"obsoleteStatus",header:"Status",defaultFlex:1,defaultWidth:50,render:e=>{let{data:t}=e;return(0,d.jsx)("div",{children:null===t||void 0===t?void 0:t.obsoleteStatus})}},{name:"obsoleteMessage",header:"Message",defaultFlex:1,defaultWidth:50,render:e=>{let{data:t}=e;return(0,d.jsx)("div",{style:{textWrap:"wrap"},children:null!==t&&void 0!==t&&t.obsoleteMessage&&""!==(null===t||void 0===t?void 0:t.obsoleteMessage)?null===t||void 0===t?void 0:t.obsoleteMessage:"-"})}}],dataSource:a,checkboxColumn:!0,selected:n,onSelectionChange:l,handle:e=>c.current=e?e.current:null,pagination:!0,defaultLimit:100,renderScroller:()=>{var e,t;return null===c||void 0===c||null===(e=c.current)||void 0===e?void 0:e.setScrollTop(0==(null===l||void 0===l?void 0:l.length)?0:null===c||void 0===c||null===(t=c.current)||void 0===t?void 0:t.getScrollTop())}})})};var u=n(66578),v=n(76987),h=n(83462),m=n(29347),p=n(35316),x=n(98533),A=n(26600),b=n(14256),g=n(57972),j=n(74605),f=n(53193),y=n(51292),S=n(68903),P=n(37576),D=n(81807);const w=e=>{const t=new P.Q,[n,r]=(0,s.useState)(!1),[o,c]=(0,s.useState)((null===e||void 0===e?void 0:e.speclistsArr)||[]),[u,v]=(0,s.useState)("allData"),[w,k]=(0,s.useState)(!1),[E,C]=(0,s.useState)(!1),[I,T]=(0,s.useState)(!1),[M,F]=(0,s.useState)(null);console.log("speclistsArr",e);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.A,{variant:"contained",onClick:()=>{r(!0)},children:"Export"}),(0,d.jsxs)(h.A,{open:n,children:[(0,d.jsx)(A.A,{style:{cursor:"move"},id:"draggable-dialog-title",children:"Export Template"}),(0,d.jsx)(p.A,{children:(0,d.jsx)(x.A,{children:(0,d.jsx)(i.A,{width:"100%",overflow:"auto",children:(0,d.jsx)(a.Tn,{children:(0,d.jsx)(S.Ay,{item:!0,md:12,sm:12,xs:12,children:(0,d.jsx)(S.Ay,{container:!0,alignItems:"center",children:(0,d.jsxs)(f.A,{children:[(0,d.jsx)(y.A,{id:"demo-controlled-radio-buttons-group",children:"Select Data to Export"}),(0,d.jsxs)(g.A,{"aria-labelledby":"demo-controlled-radio-buttons-group",name:"controlled-radio-buttons-group",value:u,onChange:t=>{v(t.target.value),"allData"===t.target.value?c(null===e||void 0===e?void 0:e.speclistsArr):c(null===e||void 0===e?void 0:e.filterTemplateData)},children:[(0,d.jsx)(j.A,{value:"allData",control:(0,d.jsx)(b.A,{}),label:"All Data"}),(0,d.jsx)(j.A,{value:"selectedData",control:(0,d.jsx)(b.A,{}),label:"Selected Data"})]})]})})})})})})}),(0,d.jsxs)(m.A,{children:[(0,d.jsx)(l.A,{autoFocus:!0,onClick:()=>{r(!1)},children:"Cancel"}),(0,d.jsx)(l.A,{onClick:()=>{r(!1);let n=("allData"!==u?null===e||void 0===e?void 0:e.filterTemplateData:null===e||void 0===e?void 0:e.speclistsArr)||[],s=null===n||void 0===n?void 0:n.map((e=>{var t,n,s,l,a,r,i,o;return{Type:null===(t=e.obsoletePartData)||void 0===t||null===(n=t.receivedPayload)||void 0===n?void 0:n.type,Name:null===(s=e.obsoletePartData)||void 0===s||null===(l=s.affectedItems[0])||void 0===l?void 0:l.name,Revision:null===(a=e.obsoletePartData)||void 0===a||null===(r=a.affectedItems[0])||void 0===r?void 0:r.revision,Description:null===(i=e.obsoletePartData)||void 0===i||null===(o=i.affectedItems[0])||void 0===o?void 0:o.description,Status:e.obsoleteStatus,Message:e.obsoleteMessage}}));t.exportTemplate({data:s,sheet_name:"Obsolete Part List"}).then((e=>{C(e),k(!0),T(!0),F({severity:null===e||void 0===e?void 0:e.status,desc:null===e||void 0===e?void 0:e.msg})}))},children:"Export"})]})]}),M?(0,d.jsx)(D.A,{openAlert:I,openDesc:M,setOpenAlert:T}):(0,d.jsx)(d.Fragment,{})]})};var k=n(34535),E=n(15795),C=n(51787);n(56659);const I=(0,k.Ay)("div")((e=>{let{theme:t}=e;return{margin:"30px",[t.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[t.breakpoints.down("sm")]:{marginBottom:"16px"}}}})),T=()=>{var e,t;const n=new r.f,[o,h]=(0,s.useState)(),[m,p]=(0,s.useState)({}),[x,A]=(0,s.useState)(!1),[b,g]=(0,s.useState)(!1),[j,f]=(0,s.useState)(null),[y,P]=(0,s.useState)([]),[D,k]=(0,s.useState)({}),[T,M]=(0,s.useState)(!0),F=(0,s.useRef)(null),L=null!==F&&void 0!==F&&null!==(e=F.current)&&void 0!==e&&e.dataMap?null===F||void 0===F||null===(t=F.current)||void 0===t?void 0:t.dataMap:null,N=e=>{try{A(!0);const t={...e,searchkey:e.searchkey+"*"};n.searchObsoletePartbyKey(t).then((e=>{e?(e.data.length?h(e.data):(g(!0),f({severity:"error",desc:"No result found!"})),A(!1)):(g(!0),f({severity:"error",desc:e}))})).catch((e=>e))}catch(t){return t}},R=(0,s.useCallback)((e=>{let{selected:t}=e;k(t),M(!1)}),[]);(0,s.useEffect)((()=>{var e;const t=!0===D?L:D,n=t&&(null===(e=Object.keys(t))||void 0===e?void 0:e.map((e=>t[e])))||[];P(n),n.forEach((e=>{"failed"===e.obsoleteStatus&&M(!0)}))}),[D,L]);return(0,d.jsxs)(I,{children:[(0,d.jsx)(i.A,{className:"breadcrumb",children:(0,d.jsx)(a.Qp,{routeSegments:[{name:"Check Part Obsolescence Progress"}]})}),(0,d.jsxs)(a.Tn,{children:[(0,d.jsxs)(S.Ay,{container:!0,spacing:1,alignItems:"center",children:[(0,d.jsx)(S.Ay,{item:!0,md:12,sm:12,xs:12,className:"font-medium",children:(0,d.jsxs)(S.Ay,{container:!0,spacing:1,alignItems:"center",children:[(0,d.jsx)(S.Ay,{item:!0,md:3,sm:6,xs:12,className:"font-medium",children:(0,d.jsx)(E.A,{type:"text",name:"search",size:"small",onChange:e=>{e.persist(),p({searchkey:e.target.value})},onKeyDown:e=>{if("Enter"===e.key){const t={...m,searchkey:e.target.value};p(t),N(t)}},value:(null===m||void 0===m?void 0:m.searchkey)||"",style:{width:"100%"},InputProps:{endAdornment:(0,d.jsx)(C.A,{position:"end",children:"*"})}})}),(0,d.jsx)(S.Ay,{item:!0,md:6,sm:6,xs:12,children:(0,d.jsx)(l.A,{variant:"contained",onClick:()=>{N(m)},children:"Search"})}),(0,d.jsxs)(S.Ay,{item:!0,md:3,sm:6,xs:12,alignItems:"right",children:[(0,d.jsx)(l.A,{variant:"contained",disabled:!(1===(null===y||void 0===y?void 0:y.length)&&T),onClick:()=>{let e={id:y[0].id};A(!0),n.resendObsoletePart(e).then((e=>{e?(e.status&&(g(!0),f({severity:"success"===e.status?"success":"error",desc:e.msg})),A(!1)):(g(!0),f({severity:"error",desc:e})),A(!1)})).catch((e=>e))},style:{margin:"0 10px 0 10px"},children:"Re-send"}),(0,d.jsx)(w,{speclistsArr:o,filterTemplateData:y})]})]})}),(0,d.jsx)(S.Ay,{item:!0,md:12,sm:12,xs:12,children:(0,d.jsx)(c,{speclistsArr:o||[],isLoading:x,selected:D,onSelectionChange:R})})]}),j?(0,d.jsx)(v.A,{openAlert:b,openDesc:j,setOpenAlert:g}):(0,d.jsx)(d.Fragment,{}),x?(0,d.jsx)("div",{style:{textAlign:"center"},children:(0,d.jsx)(u.A,{show:x})}):(0,d.jsx)(d.Fragment,{})]})]})}},51787:(e,t,n)=>{n.d(t,{A:()=>y});var s=n(98587),l=n(58168),a=n(65043),r=n(58387),i=n(98610),o=n(6803),d=n(85865),c=n(41053),u=n(85213),v=n(34535),h=n(92532),m=n(72372);function p(e){return(0,m.Ay)("MuiInputAdornment",e)}const x=(0,h.A)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var A,b=n(98206),g=n(70579);const j=["children","className","component","disablePointerEvents","disableTypography","position","variant"],f=(0,v.Ay)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${(0,o.A)(n.position)}`],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})((e=>{let{theme:t,ownerState:n}=e;return(0,l.A)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===n.variant&&{[`&.${x.positionStart}&:not(.${x.hiddenLabel})`]:{marginTop:16}},"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),y=a.forwardRef((function(e,t){const n=(0,b.b)({props:e,name:"MuiInputAdornment"}),{children:v,className:h,component:m="div",disablePointerEvents:x=!1,disableTypography:y=!1,position:S,variant:P}=n,D=(0,s.A)(n,j),w=(0,u.A)()||{};let k=P;P&&w.variant,w&&!k&&(k=w.variant);const E=(0,l.A)({},n,{hiddenLabel:w.hiddenLabel,size:w.size,disablePointerEvents:x,position:S,variant:k}),C=(e=>{const{classes:t,disablePointerEvents:n,hiddenLabel:s,position:l,size:a,variant:r}=e,d={root:["root",n&&"disablePointerEvents",l&&`position${(0,o.A)(l)}`,r,s&&"hiddenLabel",a&&`size${(0,o.A)(a)}`]};return(0,i.A)(d,p,t)})(E);return(0,g.jsx)(c.A.Provider,{value:null,children:(0,g.jsx)(f,(0,l.A)({as:m,ownerState:E,className:(0,r.A)(C.root,h),ref:t},D,{children:"string"!==typeof v||y?(0,g.jsxs)(a.Fragment,{children:["start"===S?A||(A=(0,g.jsx)("span",{className:"notranslate",children:"\u200b"})):null,v]}):(0,g.jsx)(d.A,{color:"text.secondary",children:v})}))})}))},56659:()=>{}}]);
//# sourceMappingURL=632.6fca52dd.chunk.js.map