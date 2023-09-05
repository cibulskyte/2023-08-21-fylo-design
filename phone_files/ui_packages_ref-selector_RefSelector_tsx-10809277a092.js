"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_ref-selector_RefSelector_tsx"],{70567:(e,t,r)=>{r.d(t,{W:()=>SearchIndex,r:()=>n});var n,a=r(44544),i=r(71643);let{getItem:s,setItem:c,removeItem:l}=(0,a.Z)("localStorage",{throwQuotaErrorsOnSet:!0});!function(e){e.Branch="branch",e.Tag="tag"}(n||(n={}));let SearchIndex=class SearchIndex{render(){this.selector.render()}async fetchData(){try{if(!this.isLoading||this.fetchInProgress)return;if(!this.bootstrapFromLocalStorage()){this.fetchInProgress=!0,this.fetchFailed=!1;let e=await fetch(`${this.refEndpoint}?type=${this.refType}`,{headers:{Accept:"application/json"}});await this.processResponse(e)}this.isLoading=!1,this.fetchInProgress=!1,this.render()}catch(e){this.fetchInProgress=!1,this.fetchFailed=!0}}async processResponse(e){if(this.emitStats(e),!e.ok){this.fetchFailed=!0;return}let t=e.clone(),r=await e.json();this.knownItems=r.refs,this.cacheKey=r.cacheKey,this.flushToLocalStorage(await t.text())}emitStats(e){if(!e.ok){(0,i.b)({incrementKey:"REF_SELECTOR_BOOT_FAILED"},!0);return}switch(e.status){case 200:(0,i.b)({incrementKey:"REF_SELECTOR_BOOTED_FROM_UNCACHED_HTTP"});break;case 304:(0,i.b)({incrementKey:"REF_SELECTOR_BOOTED_FROM_HTTP_CACHE"});break;default:(0,i.b)({incrementKey:"REF_SELECTOR_UNEXPECTED_RESPONSE"})}}search(e){let t;if(this.searchTerm=e,""===e){this.currentSearchResult=this.knownItems;return}let r=[],n=[];for(let a of(this.exactMatchFound=!1,this.knownItems))if(!((t=a.indexOf(e))<0)){if(0===t){e===a?(n.unshift(a),this.exactMatchFound=!0):n.push(a);continue}r.push(a)}this.currentSearchResult=[...n,...r]}bootstrapFromLocalStorage(){let e=s(this.localStorageKey);if(!e)return!1;let t=JSON.parse(e);return t.cacheKey===this.cacheKey&&"refs"in t?(this.knownItems=t.refs,this.isLoading=!1,(0,i.b)({incrementKey:"REF_SELECTOR_BOOTED_FROM_LOCALSTORAGE"}),!0):(l(this.localStorageKey),!1)}async flushToLocalStorage(e){try{c(this.localStorageKey,e)}catch(t){if(t.message.toLowerCase().includes("quota")){this.clearSiblingLocalStorage(),(0,i.b)({incrementKey:"REF_SELECTOR_LOCALSTORAGE_OVERFLOWED"});try{c(this.localStorageKey,e)}catch(e){e.message.toLowerCase().includes("quota")&&(0,i.b)({incrementKey:"REF_SELECTOR_LOCALSTORAGE_GAVE_UP"})}}else throw t}}clearSiblingLocalStorage(){for(let e of Object.keys(localStorage))e.startsWith(SearchIndex.LocalStoragePrefix)&&l(e)}clearLocalStorage(){l(this.localStorageKey)}get localStorageKey(){return`${SearchIndex.LocalStoragePrefix}:${this.nameWithOwner}:${this.refType}`}constructor(e,t,r,n,a){this.knownItems=[],this.currentSearchResult=[],this.exactMatchFound=!1,this.searchTerm="",this.isLoading=!0,this.fetchInProgress=!1,this.fetchFailed=!1,this.refType=e,this.selector=t,this.refEndpoint=r,this.cacheKey=n,this.nameWithOwner=a}};SearchIndex.LocalStoragePrefix="ref-selector"},62073:(e,t,r)=>{r.d(t,{D:()=>c});var n=r(67294),a=r(78249),i=r(98224);function s(){let e=(0,n.useContext)(i.kb);return e}function c(e,t,r=[]){let c=(0,n.useCallback)(e,r),l=s(),o=(0,n.useRef)(l===i.i$.ClientRender),[h,d]=(0,n.useState)(()=>l===i.i$.ClientRender?c():t),u=(0,n.useCallback)(()=>{d(c)},[c]);return(0,a.g)(()=>{o.current||d(c),o.current=!1},[c,...r]),[h,u]}},89445:(e,t,r)=>{function n(e,t={}){if(e.match(/^https?:/))throw Error("Can not make cross-origin requests from verifiedFetch");let r={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:r})}function a(e,t){let r=t?.headers??{},a={...r,Accept:"application/json","Content-Type":"application/json"},i=t?.body?JSON.stringify(t.body):void 0;return n(e,{...t,body:i,headers:a})}r.d(t,{Q:()=>n,v:()=>a})},79431:(e,t,r)=>{r.d(t,{H:()=>h});var n,a,i,s=r(85893),c=r(42483),l=r(67294),o=r(78720);function h({items:e,itemHeight:t,sx:r,renderItem:n,makeKey:a}){let i=(0,l.useRef)(null),c=(0,l.useCallback)(()=>t,[t]),h=(0,o.o)({parentRef:i,size:e.length,estimateSize:c});return(0,s.jsx)(d,{ref:i,sx:r,virtualizer:h,children:h.virtualItems.map(t=>(0,s.jsx)(u,{virtualRow:t,children:n(e[t.index])},a(e[t.index])))})}let d=l.forwardRef(function({children:e,sx:t,virtualizer:r},n){return(0,s.jsx)(c.Z,{ref:n,sx:t,children:(0,s.jsx)(c.Z,{sx:{height:r.totalSize,width:"100%",position:"relative"},children:e})})});function u({children:e,virtualRow:t}){return(0,s.jsx)(c.Z,{sx:{position:"absolute",top:0,left:0,width:"100%",height:`${t.size}px`,transform:`translateY(${t.start}px)`},children:e})}try{(n=h).displayName||(n.displayName="FixedSizeVirtualList")}catch{}try{(a=VirtualListContainerInner).displayName||(a.displayName="VirtualListContainerInner")}catch{}try{(i=u).displayName||(i.displayName="ItemContainer")}catch{}},79515:(e,t,r)=>{r.d(t,{h:()=>c});var n,a=r(85893),i=r(42483);function s(e,t){if(!t)return[e];let r=e.toLowerCase().split(t.toLowerCase());if(r.length<2)return[e];let n=0,a=[];for(let i of r)a.push(e.substring(n,n+i.length)),n+=i.length,a.push(e.substring(n,n+t.length)),n+=t.length;return a}function c({text:e,search:t,hideOverflow:r=!1,overflowWidth:n=0}){let c=s(e,t),l=c.map((e,t)=>t%2==1?(0,a.jsx)("strong",{className:"color-fg-default",children:e},t):e),o=n?`${n}px`:void 0;return(0,a.jsx)(i.Z,{sx:{maxWidth:o,overflow:r?"hidden":"visible",textOverflow:"ellipsis",whiteSpace:"nowrap",color:t.length?"fg.muted":"fg.default"},children:l})}try{(n=c).displayName||(n.displayName="HighlightedText")}catch{}},80490:(e,t,r)=>{r.d(t,{ox:()=>eS,cq:()=>eg,li:()=>eb,Z7:()=>ey});var n,a,i,s,c,l,o,h,d,u,f,x,m,p,y,g,b,S,j,C=r(85893),R=r(31147),w=r(78912),T=r(51461),k=r(78212),L=r(85529),N=r(50901),E=r(42483),O=r(75308),v=r(50919),F=r(51526),Z=r(74121),I=r(98833),_=r(97011),A=r(67294),D=r(86283),z=r(62073),W=r(12470),P=r(73935);function K({isOpen:e,onDismiss:t,onConfirm:r}){let[n]=(0,z.D)(()=>document.body,null,[D.n4?.body]);return n?(0,P.createPortal)((0,C.jsxs)(W.Z,{isOpen:e,onDismiss:t,children:[(0,C.jsx)(W.Z.Header,{children:"Create branch"}),(0,C.jsxs)(E.Z,{sx:{p:3},children:[(0,C.jsx)(_.Z,{children:"A tag already exists with the provided branch name. Many Git commands accept both tag and branch names, so creating this branch may cause unexpected behavior. Are you sure you want to create this branch?"}),(0,C.jsxs)(E.Z,{sx:{display:"flex",justifyContent:"flex-end",mt:3},children:[(0,C.jsx)(w.z,{onClick:t,children:"Cancel"}),(0,C.jsx)(w.z,{variant:"danger",onClick:r,sx:{ml:2},children:"Create"})]})]})]}),document.body):null}try{(n=K).displayName||(n.displayName="CheckTagNameDialog")}catch{}var B=r(89445);async function $(e,t){let r=new FormData;r.set("value",t);let n=await (0,B.Q)(e,{method:"POST",body:r,headers:{Accept:"application/json"}});return!!n.ok&&!!await n.text()}async function H(e,t,r){let n=new FormData;n.set("name",t),n.set("branch",r);let a=await (0,B.Q)(e,{method:"POST",body:n,headers:{Accept:"application/json"}});if(a.ok)return{success:!0,name:(await a.json()).name};try{let{error:e}=await a.json();if(e)return{success:!1,error:e};throw Error("Unknown response from create branch API")}catch{return{success:!1,error:"Something went wrong."}}}var M=r(2708),V=r(22114);function Q(e){let{hotKey:t,onOpenChange:r,size:n,currentCommitish:a,refType:i,children:s,preventClosing:c,inputRef:l,overlayOpen:o,onOverlayChange:h,focusTrapEnabled:d=!0,buttonClassName:u,allowResizing:f,useFocusZone:x}=e,m=e.idEnding?`-${e.idEnding}`:`-${Date.now()}`,p=(0,A.useRef)(`branch-picker${m}}`),y=(0,A.useCallback)(e=>{h(e),r?.(e)},[r,h]),g=(0,A.useMemo)(()=>d?{initialFocusRef:l}:{initialFocusRef:l,disabled:!0},[d,l]);return(0,C.jsx)(M.w,{open:o,overlayProps:{role:"dialog",width:"medium"},onOpen:()=>y(!0),onClose:()=>!c&&y(!1),renderAnchor:e=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(w.z,{...e,"data-hotkey":t,size:n,sx:{svg:{color:"fg.muted"},display:"flex",minWidth:f?0:void 0,"> span":{width:"inherit"}},trailingIcon:L.AS7,"aria-label":`${a} ${i}`,"data-testid":"anchor-button",id:p.current,className:u,children:(0,C.jsxs)(E.Z,{sx:{display:"flex",width:"100%"},children:[(0,C.jsx)(E.Z,{sx:{mr:1,color:"fg.muted"},children:"tag"===i?(0,C.jsx)(L.lO_,{size:"small"}):(0,C.jsx)(L.fnQ,{size:"small"})}),(0,C.jsx)(E.Z,{sx:{fontSize:1,minWidth:0,maxWidth:f?void 0:125,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:(0,C.jsxs)(_.Z,{sx:{minWidth:0},children:["\xa0",a]})})]})}),(0,C.jsx)("button",{hidden:!0,"data-hotkey":t,onClick:()=>y(!0),"data-hotkey-scope":"read-only-cursor-text-area"})]}),focusTrapSettings:g,focusZoneSettings:x?{bindKeys:V.Qw.ArrowAll|V.Qw.Tab}:{disabled:!0},children:(0,C.jsx)(E.Z,{"data-testid":"overlay-content","aria-labelledby":p.current,id:"selectPanel",children:s})})}try{(a=Q).displayName||(a.displayName="RefSelectorAnchoredOverlay")}catch{}function G({text:e,onClick:t,href:r,sx:n}){let a=(0,C.jsx)(E.Z,{sx:{...n},children:e}),i={sx:{minWidth:0}};return r?(0,C.jsx)(N.S.LinkItem,{role:"link",href:r,onClick:()=>t?.(),...i,children:a}):(0,C.jsx)(N.S.Item,{role:"button",onSelect:()=>t?.(),...i,children:a})}try{(i=G).displayName||(i.displayName="RefSelectorFooter")}catch{}var q=r(79431),U=r(63309),X=r(79515);let Y=A.memo(function({isCurrent:e,isDefault:t,href:r,gitRef:n,filterText:a,ariaPosInSet:i,ariaSetSize:s,onSelect:c,onClick:l}){let o=(0,C.jsx)(J,{gitRef:n,isDefault:t,isCurrent:e,filterText:a}),h={"aria-checked":e,"aria-posinset":i,"aria-setsize":s,sx:{minWidth:0},onSelect:()=>c?.(n),onClick:()=>l?.(n)};return r?(0,C.jsx)(N.S.LinkItem,{href:r,role:"menuitemradio",...h,children:o}):(0,C.jsx)(N.S.Item,{...h,children:o})}),J=A.memo(function({isCurrent:e,isDefault:t,gitRef:r,filterText:n,showLeadingVisual:a=!0}){return(0,C.jsxs)(E.Z,{style:{display:"flex",justifyContent:"space-between"},children:[(0,C.jsxs)(E.Z,{style:{display:"flex",minWidth:0,alignItems:"flex-end"},children:[a&&(0,C.jsx)(I.Z,{icon:L.nQG,"aria-hidden":!0,sx:{pr:1,visibility:e?void 0:"hidden"}}),(0,C.jsx)(X.h,{hideOverflow:!0,search:n,text:r},r)]}),t&&(0,C.jsx)(U.Z,{children:"default"})]})});try{(s=Y).displayName||(s.displayName="RefItem")}catch{}try{(c=J).displayName||(c.displayName="RefItemContent")}catch{}function ee(e){return e.refs.length>20?(0,C.jsx)(er,{...e}):(0,C.jsx)(et,{...e})}function et({refs:e,defaultBranch:t,currentCommitish:r,getHref:n,filterText:a,onSelectItem:i}){return(0,C.jsx)(E.Z,{sx:{maxHeight:330,overflowY:"auto"},children:e.map(s=>(0,C.jsx)(Y,{href:n?.(s),isCurrent:r===s,isDefault:t===s,filterText:a,gitRef:s,onSelect:i,onClick:i,ariaPosInSet:e.indexOf(s)+1,ariaSetSize:e.length},s))})}function er({refs:e,defaultBranch:t,currentCommitish:r,getHref:n,filterText:a,onSelectItem:i}){return(0,C.jsx)(q.H,{items:e,itemHeight:32,sx:{maxHeight:330,overflowY:"auto"},makeKey:e=>e,renderItem:s=>(0,C.jsx)(Y,{href:n?.(s),isCurrent:r===s,isDefault:t===s,filterText:a,gitRef:s,onSelect:i,onClick:i,ariaPosInSet:e.indexOf(s)+1,ariaSetSize:e.length},s)})}try{(l=ee).displayName||(l.displayName="RefsList")}catch{}try{(o=et).displayName||(o.displayName="FullRefsList")}catch{}try{(h=er).displayName||(h.displayName="VirtualRefsList")}catch{}var en=r(70567);function ea(e,t,r,n,a,i){let[s,c]=(0,A.useState)({status:"uninitialized",refs:[],showCreateAction:!1,searchIndex:null}),l=(0,A.useRef)({render:()=>{c(es(h.current,i))}}),o=(0,A.useRef)({render:()=>{c(es(d.current,i))}}),h=ec(()=>ei(e,t,r,"branch",l.current)),d=ec(()=>ei(e,t,r,"tag",o.current));return(0,A.useEffect)(()=>{let a=`${t}/${r}`;h.current.nameWithOwner!==a&&(h.current=ei(e,t,r,"branch",l.current)),d.current.nameWithOwner!==a&&(d.current=ei(e,t,r,"tag",o.current)),async function(){let e="branch"===n?h.current:d.current;e.render(),await e.fetchData(),e.search(""),e.render()}()},[e,t,r,n,h,d]),(0,A.useEffect)(()=>{let e="branch"===n?h.current:d.current;e.search(a),e.render()},[a,n,h,d]),s}function ei(e,t,r,n,a){return new en.W("branch"===n?en.r.Branch:en.r.Tag,a,(0,k.FL)({owner:t,repo:r,action:"refs"}),e,`${t}/${r}`)}function es(e,t){let r=e.fetchFailed?"failed":e.isLoading?"loading":"loaded",n=e.currentSearchResult,a=e.refType===en.r.Branch&&t&&e.searchTerm.length>0&&!e.exactMatchFound;return{status:r,refs:n,showCreateAction:a,searchIndex:e}}function ec(e){let t=(0,A.useRef)();return t.current||(t.current=e()),t}function el(e){let{cacheKey:t,owner:r,repo:n,canCreate:a,types:i,hotKey:s,onOpenChange:c,size:l,getHref:o,onBeforeCreate:h,onRefTypeChanged:d,currentCommitish:u,onCreateError:f,onSelectItem:x,closeOnSelect:m,selectedRefType:p,customFooterItemProps:y,buttonClassName:g,allowResizing:b,idEnding:S,useFocusZone:j}=e,[R,w]=(0,A.useState)(""),T=(0,A.useRef)(null),L=(0,A.useRef)(null),[N,E]=(0,A.useState)(!1),[O,v]=(0,A.useState)(!0),[F,Z]=(0,A.useState)(!1),[I,_]=(0,A.useState)(p??(i??ey)[0]),D=ea(t,r,n,I,R,a),z=(0,k.FL)({owner:r,repo:n,action:"branches"}),W=(0,k.dQ)({owner:r,repo:n}),P=(0,A.useCallback)(async()=>{h?.(R);let e=await H(z,R,u);e.success?o&&(D.searchIndex?.clearLocalStorage(),window.location.href=o(e.name)):f?.(e.error)},[h,R,z,u,o,f,D.searchIndex]),B=(0,A.useCallback)(async()=>{if(await $(W,R)){Z(!0),v(!1);return}Z(!1),v(!1),P()},[W,R,P,Z]),M=(0,A.useCallback)(e=>{_(e),d?.(e)},[_,d]);function V(){E(!1)}let G=(0,A.useCallback)((e,t)=>{x?.(e,t),V()},[x]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Q,{refType:I,currentCommitish:u,focusTrapEnabled:O,preventClosing:F,size:l,onOpenChange:c,hotKey:s,inputRef:T,overlayOpen:N,onOverlayChange:E,buttonClassName:g,allowResizing:b,idEnding:S,useFocusZone:j,children:(0,C.jsx)(eo,{filterText:R,onFilterChange:w,refType:I,selectedRefType:I,onRefTypeChange:M,refsState:D,onCreateError:e.onCreateError,showTagWarningDialog:F,setShowTagWarningDialog:Z,onCreateBranch:B,inputRef:T,createButtonRef:L,onSelectItem:G,closeOnSelect:m,closeRefSelector:V,customFooterItemProps:y,...e})}),(0,C.jsx)(K,{isOpen:F,onDismiss:()=>{Z(!1),L.current?.focus()},onConfirm:P})]})}function eo({canCreate:e,currentCommitish:t,defaultBranch:r,filterText:n,getHref:a,hideShowAll:i,onSelectItem:s,closeOnSelect:c,closeRefSelector:l,onFilterChange:o,onRefTypeChange:h,owner:d,selectedRefType:u,refsState:f,refType:x,repo:m,types:p,onCreateBranch:y,inputRef:g,createButtonRef:b,customFooterItemProps:S,viewAllJustify:j}){let{refs:R,showCreateAction:w,status:T}=f;return(0,C.jsxs)(N.S,{showDividers:!0,children:[(0,C.jsxs)(E.Z,{sx:{borderBottom:"1px solid",borderColor:"border.subtle",pb:2},children:[(0,C.jsxs)(E.Z,{sx:{display:"flex",pb:2,px:2,justifyContent:"space-between",alignItems:"center"},children:[(0,C.jsx)(O.Z,{as:"h5",sx:{pl:2,fontSize:"inherit"},children:eu(p??ey)}),(0,C.jsx)(v.h,{"aria-label":"Cancel",variant:"invisible",icon:L.b0D,sx:{color:"fg.muted"},onClick:l})]}),(0,C.jsx)(eh,{defaultText:n,refType:x,canCreate:e,onFilterChange:o,ref:g})]}),(0,C.jsxs)(E.Z,{sx:{pt:2,pb:w&&0===R.length?0:2},children:[(p??ey).length>1&&(0,C.jsx)(E.Z,{sx:{px:2,pb:2},children:(0,C.jsx)(eb,{refType:x,onRefTypeChanged:h,sx:{mx:-2,borderBottom:"1px solid",borderColor:"border.muted","> nav":{borderBottom:"none"}}})}),"loading"===T||"uninitialized"===T?(0,C.jsx)(ef,{refType:x}):"failed"===T?(0,C.jsx)(eS,{refType:x}):0!==R.length||w?(0,C.jsx)(ee,{filterText:n,refs:R,defaultBranch:"branch"===x?r:"",currentCommitish:x===u?t:"",getHref:a,onSelectItem:e=>{s?.(e,x),c&&l()}}):(0,C.jsx)(ex,{})]}),w&&(0,C.jsxs)(C.Fragment,{children:[R.length>0&&(0,C.jsx)(N.S.Divider,{sx:{marginTop:0,backgroundColor:"border.subtle"}}),(0,C.jsx)(ep,{currentCommitish:t,newRefName:n,onCreateBranch:y,createButtonRef:b})]}),(!i||S)&&(0,C.jsx)(N.S.Divider,{sx:{marginTop:w?2:0,backgroundColor:"border.subtle"}}),!i&&(0,C.jsx)(em,{justify:j,refType:x,owner:d,repo:m,onClick:l}),S&&(0,C.jsx)(G,{...S,onClick:function(){S?.onClick?.(),l()}})]})}let eh=(0,A.forwardRef)(ed);function ed({refType:e,canCreate:t,onFilterChange:r,defaultText:n},a){return(0,C.jsx)(E.Z,{sx:{px:2},children:(0,C.jsx)(F.Z,{leadingVisual:L.W1M,value:n,sx:{width:"100%"},placeholder:"tag"===e?"Find a tag...":t?"Find or create a branch...":"Find a branch...",ref:a,onInput:e=>{let t=e.target;t instanceof HTMLInputElement&&r(t.value)}})})}function eu(e){return e.includes("branch")&&e.includes("tag")?"Switch branches/tags":e.includes("branch")?"Switch branches":e.includes("tag")?"Switch tags":void 0}function ef({refType:e}){return(0,C.jsx)(E.Z,{sx:{display:"flex",justifyContent:"center",p:2},children:(0,C.jsx)(Z.Z,{size:"medium","aria-label":`Loading ${"branch"===e?"branches":"tags"}...`})})}function ex(){return(0,C.jsx)(E.Z,{sx:{p:3,display:"flex",justifyContent:"center"},children:"Nothing to show"})}function em({refType:e,owner:t,repo:r,onClick:n,justify:a="start"}){let i="branch"===e?"branches":"tags";return(0,C.jsx)(N.S.LinkItem,{role:"link",href:(0,k.FL)({owner:t,repo:r,action:i}),onClick:n,sx:{display:"flex",justifyContent:"center"},children:(0,C.jsxs)(E.Z,{sx:{display:"flex",justifyContent:a},children:["View all ",i]})})}function ep({currentCommitish:e,newRefName:t,onCreateBranch:r,createButtonRef:n}){return(0,C.jsxs)(N.S.Item,{role:"button",onSelect:r,ref:n,children:[(0,C.jsx)(I.Z,{icon:L.fnQ,sx:{mr:2,color:"fg.muted"}}),(0,C.jsx)(_.Z,{children:"Create branch\xa0"}),(0,C.jsx)(_.Z,{sx:{fontWeight:600,fontFamily:"monospace"},children:t}),(0,C.jsx)(_.Z,{children:"\xa0from\xa0"}),(0,C.jsx)(_.Z,{sx:{fontWeight:600,fontFamily:"monospace"},children:e})]})}try{(d=el).displayName||(d.displayName="RefSelectorV1")}catch{}try{(u=eo).displayName||(u.displayName="RefSelectorActionList")}catch{}try{(f=eh).displayName||(f.displayName="RefTextFilter")}catch{}try{(x=ed).displayName||(x.displayName="RefTextFilterWithRef")}catch{}try{(m=ef).displayName||(m.displayName="Loading")}catch{}try{(p=ex).displayName||(p.displayName="RefsZeroState")}catch{}try{(y=em).displayName||(y.displayName="ViewAllRefsAction")}catch{}try{(g=ep).displayName||(g.displayName="CreateRefAction")}catch{}let ey=["branch","tag"];function eg(e){return(0,C.jsx)(el,{...e})}function eb({refType:e,onRefTypeChanged:t,sx:r}){return(0,C.jsxs)(R.Z,{sx:{pl:2,...r},"aria-label":"Ref type",children:[(0,C.jsx)(R.Z.Link,{as:w.z,id:"branch-button","aria-controls":"branches",selected:"branch"===e,onClick:()=>t("branch"),sx:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:"Branches"}),(0,C.jsx)(R.Z.Link,{as:w.z,id:"tag-button","aria-controls":"tags",selected:"tag"===e,onClick:()=>t("tag"),sx:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:"Tags"})]})}function eS({refType:e}){return(0,C.jsxs)(T.Z,{variant:"danger",children:["Could not load ","branch"===e?"branches":"tags"]})}try{(b=eg).displayName||(b.displayName="RefSelector")}catch{}try{(S=eb).displayName||(S.displayName="RefTypeTabs")}catch{}try{(j=eS).displayName||(j.displayName="LoadingFailed")}catch{}}}]);
//# sourceMappingURL=ui_packages_ref-selector_RefSelector_tsx-8f194f9fccef.js.map