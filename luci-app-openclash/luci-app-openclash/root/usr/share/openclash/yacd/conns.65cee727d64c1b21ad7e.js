(self.webpackChunkyacd=self.webpackChunkyacd||[]).push([[170],{64997:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return de}});n(92222),n(57327),n(34553),n(26699),n(21249),n(65069),n(47042),n(5212),n(32023);var t=n(87329),o=n(34699),s=n(96156),a=n(85893),c=n(67294),i=n(45720),u=n(50794),l=n(78268),d=n(340),f=n(97750),p=n(87462),h=n(6055),j="_1L_OYNGd-Q",y="_3KG2Wl3UIL",v="_2VBzsdXyrW",m="_3jbpkYalBS",x=n(86010),b=n(70296),g=n(27434),w=n(79521),O=n(11534),C="_1jfIf4GmHx",P="_3lQG38TYko",S="_2jKsqjrYbo",Z="MuvmFG__PV",k="_3ydhc_nkf0",D="_3q0v0OLzZL",H="_1XNg9MalRS";function L(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function _(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?L(Object(n),!0).forEach((function(r){(0,s.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var N=!0,R=[{accessor:"id",show:!1},{Header:"Host",accessor:"host"},{Header:"DL",accessor:"download",sortDescFirst:N},{Header:"UL",accessor:"upload",sortDescFirst:N},{Header:"DL Speed",accessor:"downloadSpeedCurr",sortDescFirst:N},{Header:"UL Speed",accessor:"uploadSpeedCurr",sortDescFirst:N},{Header:"Chains",accessor:"chains"},{Header:"Rule",accessor:"rule"},{Header:"Time",accessor:"start",sortDescFirst:N},{Header:"Source",accessor:"source"},{Header:"Destination IP",accessor:"destinationIP"},{Header:"Type",accessor:"type"}];function I(e){switch(e.column.id){case"start":return(0,b.Z)(e.value,0);case"download":case"upload":return(0,O.Z)(e.value);case"downloadSpeedCurr":case"uploadSpeedCurr":return(0,O.Z)(e.value)+"/s";default:return e.value}}var T={sortBy:[{id:"id",desc:!0}],hiddenColumns:["id"]};var B=function(e){var r=e.data,n=(0,w.useTable)({columns:R,data:r,initialState:T,autoResetSortBy:!1},w.useSortBy),t=n.getTableProps,o=n.headerGroups,s=n.rows,c=n.prepareRow;return(0,a.jsx)("div",_(_({},t()),{},{children:o.map((function(e){return(0,a.jsxs)("div",_(_({},e.getHeaderGroupProps()),{},{className:C,children:[e.headers.map((function(e){return(0,a.jsxs)("div",_(_({},e.getHeaderProps(e.getSortByToggleProps())),{},{className:P,children:[(0,a.jsx)("span",{children:e.render("Header")}),(0,a.jsx)("span",{className:D,children:e.isSorted?(0,a.jsx)("span",{className:e.isSortedDesc?"":H,children:(0,a.jsx)(g.Z,{size:16})}):null})]}))})),s.map((function(e,r){return c(e),e.cells.map((function(e,n){return(0,a.jsx)("div",_(_({},e.getCellProps()),{},{className:(0,x.Z)(S,r%2==0&&Z,n>=1&&n<=4&&k),children:I(e)}))}))}))]}))}))}))},F=n(82569),A=n(83253),E=n.n(A),q=n(25904),$=n(93621),z="_2EXTX1C3T7",K="_3Or8nP9psK",G="cMLUu0qS4R",U="_29FK6hdfwZ",M=c.useRef,Y=c.useCallback,Q=c.useMemo;function X(e){var r=e.isOpen,n=e.onRequestClose,t=e.primaryButtonOnTap,o=M(null),s=Y((function(){o.current.focus()}),[]),c=Q((function(){return{base:(0,x.Z)($.Z.content,K),afterOpen:G,beforeClose:""}}),[]);return(0,a.jsxs)(E(),{isOpen:r,onRequestClose:n,onAfterOpen:s,className:c,overlayClassName:(0,x.Z)($.Z.overlay,z),children:[(0,a.jsx)("p",{children:"Are you sure you want to close all connections?"}),(0,a.jsxs)("div",{className:U,children:[(0,a.jsx)(q.Z,{onClick:t,ref:o,children:"I'm sure"}),(0,a.jsx)("div",{style:{width:20}}),(0,a.jsx)(q.Z,{onClick:n,children:"No"})]})]})}var W=n(51858),V=n(85295),J=n(4541);function ee(e,r){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,r){if(!e)return;if("string"==typeof e)return re(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return re(e,r)}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,s=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw s}}}}function re(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function ne(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function te(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?ne(Object(n),!0).forEach((function(r){(0,s.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var oe=c.useEffect,se=c.useState,ae=c.useRef,ce=c.useCallback;function ie(e,r){return r?e.filter((function(e){return[e.host,e.sourceIP,e.sourcePort,e.destinationIP,e.chains,e.rule,e.type,e.network].some((function(e){return n=r,e.toLowerCase().includes(n.toLowerCase());var n}))})):e}function ue(e){return e.length>0?(0,a.jsx)(B,{data:e}):(0,a.jsx)("div",{className:j,children:(0,a.jsx)(J.Z,{width:200,height:200,c1:"var(--color-text)"})})}function le(e){var r=e.qty;return r<100?""+r:"99+"}var de=(0,V.$j)((function(e){return{apiConfig:(0,h.Y$)(e)}}))((function(e){var r=e.apiConfig,n=(0,p.Z)(),s=(0,o.Z)(n,2),c=s[0],h=s[1],j=se([]),x=(0,o.Z)(j,2),b=x[0],g=x[1],w=se([]),O=(0,o.Z)(w,2),C=O[0],P=O[1],S=se(""),Z=(0,o.Z)(S,2),k=Z[0],D=Z[1],H=ie(b,k),L=ie(C,k),_=se(!1),N=(0,o.Z)(_,2),R=N[0],I=N[1],T=ce((function(){return I(!0)}),[]),B=ce((function(){return I(!1)}),[]),A=se(!1),E=(0,o.Z)(A,2),q=E[0],$=E[1],z=ce((function(){$((function(e){return!e}))}),[]),K=ce((function(){f.PI(r),B()}),[r,B]),G=ae(b),U=ce((function(e){var r,n=e.connections,o=function(e){for(var r={},n=0;n<e.length;n++){var t=e[n];r[t.id]=t}return r}(G.current),s=Date.now(),a=n.map((function(e){return function(e,r,n){var t=e.id,o=e.metadata,s=e.upload,a=e.download,c=e.start,i=e.chains,u=e.rule,l=o.host,d=o.destinationPort,f=o.destinationIP,p=o.network,h=o.type,j=o.sourceIP,y=o.sourcePort,v=l;""===v&&(v=f);var m=r[t];return te(te({id:t,upload:s,download:a,start:n-new Date(c).valueOf(),chains:i.reverse().join(" / "),rule:u},o),{},{host:`${v}:${d}`,type:`${h}(${p})`,source:`${j}:${y}`,downloadSpeedCurr:a-(m?m.download:0),uploadSpeedCurr:s-(m?m.upload:0)})}(e,o,s)})),c=[],i=ee(G.current);try{var u=function(){var e=r.value;a.findIndex((function(r){return r.id===e.id}))<0&&c.push(e)};for(i.s();!(r=i.n()).done;)u()}catch(e){i.e(e)}finally{i.f()}P((function(e){return[].concat(c,(0,t.Z)(e)).slice(0,101)})),!a||0===a.length&&0===G.current.length||q?G.current=a:(G.current=a,g(a))}),[g,q]);return oe((function(){return f.rQ(r,U)}),[r,U]),(0,a.jsxs)("div",{children:[(0,a.jsx)(F.Z,{title:"Connections"}),(0,a.jsxs)(d.mQ,{children:[(0,a.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},children:[(0,a.jsxs)(d.td,{children:[(0,a.jsxs)(d.OK,{children:[(0,a.jsx)("span",{children:"Active"}),(0,a.jsx)("span",{className:y,children:(0,a.jsx)(le,{qty:H.length})})]}),(0,a.jsxs)(d.OK,{children:[(0,a.jsx)("span",{children:"Closed"}),(0,a.jsx)("span",{className:y,children:(0,a.jsx)(le,{qty:L.length})})]})]}),(0,a.jsx)("div",{className:v,children:(0,a.jsx)("input",{type:"text",name:"filter",autoComplete:"off",className:m,placeholder:"Filter",onChange:function(e){return D(e.target.value)}})})]}),(0,a.jsx)("div",{ref:c,style:{padding:30,paddingBottom:30,paddingTop:0},children:(0,a.jsxs)("div",{style:{height:h-30,overflow:"auto"},children:[(0,a.jsxs)(d.x4,{children:[(0,a.jsx)(a.Fragment,{children:ue(H)}),(0,a.jsx)(W.Lg,{icon:q?(0,a.jsx)(i.Z,{size:16}):(0,a.jsx)(u.Z,{size:16}),mainButtonStyles:q?{background:"#e74c3c"}:{},position:W.FK,text:q?"Resume Refresh":"Pause Refresh",onClick:z,children:(0,a.jsx)(W.aU,{text:"Close All Connections",onClick:T,children:(0,a.jsx)(l.Z,{size:10})})})]}),(0,a.jsx)(d.x4,{children:ue(L)})]})}),(0,a.jsx)(X,{isOpen:R,primaryButtonOnTap:K,onRequestClose:B})]})]})}))},51858:function(e,r,n){"use strict";n.d(r,{FK:function(){return o},Lg:function(){return t.L},aU:function(){return t.a}});var t=n(34179),o={right:10,bottom:10}},87462:function(e,r,n){"use strict";n.d(r,{Z:function(){return u}});var t=n(34699),o=n(67294),s=o.useState,a=o.useRef,c=o.useCallback,i=o.useLayoutEffect;function u(){var e=a(null),r=s(200),n=(0,t.Z)(r,2),o=n[0],u=n[1],l=c((function(){var r=e.current.getBoundingClientRect().top;u(window.innerHeight-r)}),[]);return i((function(){return l(),window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}}),[l]),[e,o]}}}]);
//# sourceMappingURL=conns.65cee727d64c1b21ad7e.js.map