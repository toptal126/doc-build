import{S as G,i as T,s as j,F as O,e as B,c as I,a as S,d as N,b as u,g as E,H as R,I as U,J as W,q as m,o as b,G as z,Q,U as me,v as he,V as Y,O as Z,P as x,f as De,L as q,w as L,x as F,y,B as M,k as K,m as P,n as A,p as J,W as ge,l as V,t as be,h as we,j as ke,X as Ee,N as X,K as ve}from"./vendor-hf-doc-builder.js";function Be(s){let e,n;const l=s[3].default,t=O(l,s,s[2],null);return{c(){e=B("div"),t&&t.c(),this.h()},l(a){e=I(a,"DIV",{class:!0});var o=S(e);t&&t.l(o),o.forEach(N),this.h()},h(){u(e,"class","course-tip "+(s[0]==="orange"?"course-tip-orange":"")+" bg-gradient-to-br dark:bg-gradient-to-r before:border-"+s[0]+"-500 dark:before:border-"+s[0]+"-800 from-"+s[0]+"-50 dark:from-gray-900 to-white dark:to-gray-950 border border-"+s[0]+"-50 text-"+s[0]+"-700 dark:text-gray-400")},m(a,o){E(a,e,o),t&&t.m(e,null),n=!0},p(a,[o]){t&&t.p&&(!n||o&4)&&R(t,l,a,a[2],n?W(l,a[2],o,null):U(a[2]),null)},i(a){n||(m(t,a),n=!0)},o(a){b(t,a),n=!1},d(a){a&&N(e),t&&t.d(a)}}}function Ie(s,e,n){let{$$slots:l={},$$scope:t}=e,{warning:a=!1}=e;const o=a?"orange":"green";return s.$$set=i=>{"warning"in i&&n(1,a=i.warning),"$$scope"in i&&n(2,t=i.$$scope)},[o,a,t,l]}class ct extends G{constructor(e){super();T(this,e,Ie,Be,j,{warning:1})}}function Se(s){let e,n,l,t,a,o;const i=s[7].default,r=O(i,s,s[6],null);return{c(){e=B("div"),n=B("ul"),r&&r.c(),this.h()},l(f){e=I(f,"DIV",{class:!0});var w=S(e);n=I(w,"UL",{class:!0});var D=S(n);r&&r.l(D),D.forEach(N),w.forEach(N),this.h()},h(){u(n,"class","min-w-full w-auto"),u(e,"class",l="absolute top-full mt-1 min-w-full w-auto bg-white rounded-xl overflow-hidden shadow-lg z-10 border border-gray-100 "+(s[2]==="right"?"right-0":"left-0")+" "+s[0])},m(f,w){E(f,e,w),z(e,n),r&&r.m(n,null),s[8](e),t=!0,a||(o=Q(e,"click",function(){me(s[1])&&s[1].apply(this,arguments)}),a=!0)},p(f,[w]){s=f,r&&r.p&&(!t||w&64)&&R(r,i,s,s[6],t?W(i,s[6],w,null):U(s[6]),null),(!t||w&5&&l!==(l="absolute top-full mt-1 min-w-full w-auto bg-white rounded-xl overflow-hidden shadow-lg z-10 border border-gray-100 "+(s[2]==="right"?"right-0":"left-0")+" "+s[0]))&&u(e,"class",l)},i(f){t||(m(r,f),t=!0)},o(f){b(r,f),t=!1},d(f){f&&N(e),r&&r.d(f),s[8](null),a=!1,o()}}}function Le(s,e,n){let{$$slots:l={},$$scope:t}=e,{classNames:a=""}=e,{dropdownElement:o=void 0}=e,{forceAlignement:i=void 0}=e,{onClose:r}=e,f=i!=null?i:"left",w;he(()=>{var g,_;if(document.addEventListener("click",D),!i){const c=document.documentElement.clientWidth,d=(w==null?void 0:w.getBoundingClientRect())||{},h=(g=d.left)!=null?g:0,k=(_=d.width)!=null?_:0;n(2,f=h+k>c?"right":"left")}return()=>{document.removeEventListener("click",D)}});function D(g){const _=g.target;_!==o&&!(o==null?void 0:o.contains(_))&&r()}function p(g){Y[g?"unshift":"push"](()=>{w=g,n(3,w)})}return s.$$set=g=>{"classNames"in g&&n(0,a=g.classNames),"dropdownElement"in g&&n(4,o=g.dropdownElement),"forceAlignement"in g&&n(5,i=g.forceAlignement),"onClose"in g&&n(1,r=g.onClose),"$$scope"in g&&n(6,t=g.$$scope)},[a,r,f,w,o,i,t,l,p]}class ye extends G{constructor(e){super();T(this,e,Le,Se,j,{classNames:0,dropdownElement:4,forceAlignement:5,onClose:1})}}function Me(s){let e,n;return{c(){e=Z("svg"),n=Z("path"),this.h()},l(l){e=x(l,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0,style:!0});var t=S(e);n=x(t,"path",{d:!0,fill:!0}),S(n).forEach(N),t.forEach(N),this.h()},h(){u(n,"d","M7 10l5 5l5-5z"),u(n,"fill","currentColor"),u(e,"class",s[0]),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),u(e,"aria-hidden","true"),u(e,"focusable","false"),u(e,"role","img"),u(e,"width","1em"),u(e,"height","1em"),u(e,"preserveAspectRatio","xMidYMid meet"),u(e,"viewBox","0 0 24 24"),De(e,"transform","rotate(360deg)")},m(l,t){E(l,e,t),z(e,n)},p(l,[t]){t&1&&u(e,"class",l[0])},i:q,o:q,d(l){l&&N(e)}}}function Ae(s,e,n){let{classNames:l=""}=e;return s.$$set=t=>{"classNames"in t&&n(0,l=t.classNames)},[l]}class Je extends G{constructor(e){super();T(this,e,Ae,Me,j,{classNames:0})}}const Ve=s=>({}),$=s=>({}),Oe=s=>({}),ee=s=>({});function Re(s){let e,n,l,t,a,o=s[2]&&te(s),i=s[10]&&le();return{c(){o&&o.c(),e=K(),n=be(s[4]),l=K(),i&&i.c(),t=V()},l(r){o&&o.l(r),e=P(r),n=we(r,s[4]),l=P(r),i&&i.l(r),t=V()},m(r,f){o&&o.m(r,f),E(r,e,f),E(r,n,f),E(r,l,f),i&&i.m(r,f),E(r,t,f),a=!0},p(r,f){r[2]?o?(o.p(r,f),f&4&&m(o,1)):(o=te(r),o.c(),m(o,1),o.m(e.parentNode,e)):o&&(A(),b(o,1,1,()=>{o=null}),J()),(!a||f&16)&&ke(n,r[4]),r[10]?i?f&1024&&m(i,1):(i=le(),i.c(),m(i,1),i.m(t.parentNode,t)):i&&(A(),b(i,1,1,()=>{i=null}),J())},i(r){a||(m(o),m(i),a=!0)},o(r){b(o),b(i),a=!1},d(r){o&&o.d(r),r&&N(e),r&&N(n),r&&N(l),i&&i.d(r),r&&N(t)}}}function Ue(s){let e;const n=s[14].button,l=O(n,s,s[18],ee);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&262144)&&R(l,n,t,t[18],e?W(n,t[18],a,Oe):U(t[18]),ee)},i(t){e||(m(l,t),e=!0)},o(t){b(l,t),e=!1},d(t){l&&l.d(t)}}}function te(s){let e,n,l;var t=s[2];function a(o){return{props:{classNames:"mr-1.5 "+o[3]}}}return t&&(e=new t(a(s))),{c(){e&&L(e.$$.fragment),n=V()},l(o){e&&F(e.$$.fragment,o),n=V()},m(o,i){e&&y(e,o,i),E(o,n,i),l=!0},p(o,i){const r={};if(i&8&&(r.classNames="mr-1.5 "+o[3]),t!==(t=o[2])){if(e){A();const f=e;b(f.$$.fragment,1,0,()=>{M(f,1)}),J()}t?(e=new t(a(o)),L(e.$$.fragment),m(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else t&&e.$set(r)},i(o){l||(e&&m(e.$$.fragment,o),l=!0)},o(o){e&&b(e.$$.fragment,o),l=!1},d(o){o&&N(n),e&&M(e,o)}}}function le(s){let e,n;return e=new Je({props:{classNames:"-mr-1 text-gray-500"}}),{c(){L(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,t){y(e,l,t),n=!0},i(l){n||(m(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){M(e,l)}}}function ne(s){let e,n;return e=new ye({props:{classNames:s[6]+" "+(s[9]?"v2-dropdown-menu hidden":""),dropdownElement:s[11],forceAlignement:s[5],onClose:s[16],$$slots:{default:[We]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,t){y(e,l,t),n=!0},p(l,t){const a={};t&576&&(a.classNames=l[6]+" "+(l[9]?"v2-dropdown-menu hidden":"")),t&2048&&(a.dropdownElement=l[11]),t&32&&(a.forceAlignement=l[5]),t&4096&&(a.onClose=l[16]),t&262144&&(a.$$scope={dirty:t,ctx:l}),e.$set(a)},i(l){n||(m(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){M(e,l)}}}function We(s){let e;const n=s[14].menu,l=O(n,s,s[18],$);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&262144)&&R(l,n,t,t[18],e?W(n,t[18],a,Ve):U(t[18]),$)},i(t){e||(m(l,t),e=!0)},o(t){b(l,t),e=!1},d(t){l&&l.d(t)}}}function qe(s){let e,n,l,t,a,o,i,r,f,w,D;const p=[Ue,Re],g=[];function _(d,h){return d[13].button?0:1}l=_(s),t=g[l]=p[l](s);let c=(s[12]||s[9])&&ne(s);return{c(){e=B("div"),n=B("button"),t.c(),o=K(),c&&c.c(),this.h()},l(d){e=I(d,"DIV",{class:!0,"selected-value":!0});var h=S(e);n=I(h,"BUTTON",{class:!0,type:!0});var k=S(n);t.l(k),k.forEach(N),o=P(h),c&&c.l(h),h.forEach(N),this.h()},h(){u(n,"class",a=""+s[1]+" "+(s[7]?"":"cursor-pointer w-full btn text-sm")+" "+(s[9]?"v2-dropdown-button":"")),u(n,"type","button"),u(e,"class",i="relative "+s[0]+" "+(s[9]?"v2-dropdown":"")),u(e,"selected-value",r=s[8]||void 0)},m(d,h){E(d,e,h),z(e,n),g[l].m(n,null),z(e,o),c&&c.m(e,null),s[17](e),f=!0,w||(D=Q(n,"click",s[15]),w=!0)},p(d,[h]){let k=l;l=_(d),l===k?g[l].p(d,h):(A(),b(g[k],1,1,()=>{g[k]=null}),J(),t=g[l],t?t.p(d,h):(t=g[l]=p[l](d),t.c()),m(t,1),t.m(n,null)),(!f||h&642&&a!==(a=""+d[1]+" "+(d[7]?"":"cursor-pointer w-full btn text-sm")+" "+(d[9]?"v2-dropdown-button":"")))&&u(n,"class",a),d[12]||d[9]?c?(c.p(d,h),h&4608&&m(c,1)):(c=ne(d),c.c(),m(c,1),c.m(e,null)):c&&(A(),b(c,1,1,()=>{c=null}),J()),(!f||h&513&&i!==(i="relative "+d[0]+" "+(d[9]?"v2-dropdown":"")))&&u(e,"class",i),(!f||h&256&&r!==(r=d[8]||void 0))&&u(e,"selected-value",r)},i(d){f||(m(t),m(c),f=!0)},o(d){b(t),b(c),f=!1},d(d){d&&N(e),g[l].d(),c&&c.d(),s[17](null),w=!1,D()}}}function ze(s,e,n){let{$$slots:l={},$$scope:t}=e;const a=ge(l);let{classNames:o=""}=e,{btnClassNames:i=""}=e,{btnIcon:r=void 0}=e,{btnIconClassNames:f=""}=e,{btnLabel:w=""}=e,{forceMenuAlignement:D=void 0}=e,{menuClassNames:p=""}=e,{noBtnClass:g=void 0}=e,{selectedValue:_=void 0}=e,{useDeprecatedJS:c=!0}=e,{withBtnCaret:d=!1}=e,h,k=!1;const v=()=>n(12,k=!k),H=()=>n(12,k=!1);function pe(C){Y[C?"unshift":"push"](()=>{h=C,n(11,h)})}return s.$$set=C=>{"classNames"in C&&n(0,o=C.classNames),"btnClassNames"in C&&n(1,i=C.btnClassNames),"btnIcon"in C&&n(2,r=C.btnIcon),"btnIconClassNames"in C&&n(3,f=C.btnIconClassNames),"btnLabel"in C&&n(4,w=C.btnLabel),"forceMenuAlignement"in C&&n(5,D=C.forceMenuAlignement),"menuClassNames"in C&&n(6,p=C.menuClassNames),"noBtnClass"in C&&n(7,g=C.noBtnClass),"selectedValue"in C&&n(8,_=C.selectedValue),"useDeprecatedJS"in C&&n(9,c=C.useDeprecatedJS),"withBtnCaret"in C&&n(10,d=C.withBtnCaret),"$$scope"in C&&n(18,t=C.$$scope)},[o,i,r,f,w,D,p,g,_,c,d,h,k,a,l,v,H,pe,t]}class Ne extends G{constructor(e){super();T(this,e,ze,qe,j,{classNames:0,btnClassNames:1,btnIcon:2,btnIconClassNames:3,btnLabel:4,forceMenuAlignement:5,menuClassNames:6,noBtnClass:7,selectedValue:8,useDeprecatedJS:9,withBtnCaret:10})}}function Fe(s){let e,n,l,t=s[5]&&se(s);return{c(){t&&t.c(),e=K(),n=be(s[7])},l(a){t&&t.l(a),e=P(a),n=we(a,s[7])},m(a,o){t&&t.m(a,o),E(a,e,o),E(a,n,o),l=!0},p(a,o){a[5]?t?(t.p(a,o),o&32&&m(t,1)):(t=se(a),t.c(),m(t,1),t.m(e.parentNode,e)):t&&(A(),b(t,1,1,()=>{t=null}),J()),(!l||o&128)&&ke(n,a[7])},i(a){l||(m(t),l=!0)},o(a){b(t),l=!1},d(a){t&&t.d(a),a&&N(e),a&&N(n)}}}function Ge(s){let e;const n=s[15].default,l=O(n,s,s[14],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&16384)&&R(l,n,t,t[14],e?W(n,t[14],a,null):U(t[14]),null)},i(t){e||(m(l,t),e=!0)},o(t){b(l,t),e=!1},d(t){l&&l.d(t)}}}function se(s){let e,n,l;var t=s[5];function a(o){return{props:{classNames:"mr-1.5 "+o[6]}}}return t&&(e=new t(a(s))),{c(){e&&L(e.$$.fragment),n=V()},l(o){e&&F(e.$$.fragment,o),n=V()},m(o,i){e&&y(e,o,i),E(o,n,i),l=!0},p(o,i){const r={};if(i&64&&(r.classNames="mr-1.5 "+o[6]),t!==(t=o[5])){if(e){A();const f=e;b(f.$$.fragment,1,0,()=>{M(f,1)}),J()}t?(e=new t(a(o)),L(e.$$.fragment),m(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else t&&e.$set(r)},i(o){l||(e&&m(e.$$.fragment,o),l=!0)},o(o){e&&b(e.$$.fragment,o),l=!1},d(o){o&&N(n),e&&M(e,o)}}}function Te(s){let e,n,l,t,a,o,i,r,f,w;const D=[Ge,Fe],p=[];function g(_,c){return _[13].default?0:1}return l=g(s),t=p[l]=D[l](s),{c(){e=B("li"),n=B("a"),t.c(),this.h()},l(_){e=I(_,"LI",{});var c=S(e);n=I(c,"A",{class:!0,"data-label":!0,"data-url":!0,"data-value":!0,href:!0,rel:!0,target:!0});var d=S(n);t.l(d),d.forEach(N),c.forEach(N),this.h()},h(){u(n,"class",a="flex items-center hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer px-3 py-1.5 whitespace-nowrap "+s[0]+" "+(s[9]?"hover:underline":"")+" "+(s[12]?"v2-dropdown-entry":"")),u(n,"data-label",s[1]),u(n,"data-url",s[2]),u(n,"data-value",s[3]),u(n,"href",s[4]),u(n,"rel",o=s[8]?"nofollow":void 0),u(n,"target",i=s[11]?"_blank":void 0)},m(_,c){E(_,e,c),z(e,n),p[l].m(n,null),r=!0,f||(w=Q(n,"click",function(){me(s[10])&&s[10].apply(this,arguments)}),f=!0)},p(_,[c]){s=_;let d=l;l=g(s),l===d?p[l].p(s,c):(A(),b(p[d],1,1,()=>{p[d]=null}),J(),t=p[l],t?t.p(s,c):(t=p[l]=D[l](s),t.c()),m(t,1),t.m(n,null)),(!r||c&4609&&a!==(a="flex items-center hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer px-3 py-1.5 whitespace-nowrap "+s[0]+" "+(s[9]?"hover:underline":"")+" "+(s[12]?"v2-dropdown-entry":"")))&&u(n,"class",a),(!r||c&2)&&u(n,"data-label",s[1]),(!r||c&4)&&u(n,"data-url",s[2]),(!r||c&8)&&u(n,"data-value",s[3]),(!r||c&16)&&u(n,"href",s[4]),(!r||c&256&&o!==(o=s[8]?"nofollow":void 0))&&u(n,"rel",o),(!r||c&2048&&i!==(i=s[11]?"_blank":void 0))&&u(n,"target",i)},i(_){r||(m(t),r=!0)},o(_){b(t),r=!1},d(_){_&&N(e),p[l].d(),f=!1,w()}}}function je(s,e,n){let{$$slots:l={},$$scope:t}=e;const a=ge(l);let{classNames:o=""}=e,{dataLabel:i=void 0}=e,{dataUrl:r=void 0}=e,{dataValue:f=void 0}=e,{href:w=void 0}=e,{icon:D=void 0}=e,{iconClassNames:p=""}=e,{label:g=""}=e,{noFollow:_=!1}=e,{underline:c=!1}=e,{onClick:d=()=>{}}=e,{targetBlank:h=!1}=e,{useDeprecatedJS:k=!0}=e;return s.$$set=v=>{"classNames"in v&&n(0,o=v.classNames),"dataLabel"in v&&n(1,i=v.dataLabel),"dataUrl"in v&&n(2,r=v.dataUrl),"dataValue"in v&&n(3,f=v.dataValue),"href"in v&&n(4,w=v.href),"icon"in v&&n(5,D=v.icon),"iconClassNames"in v&&n(6,p=v.iconClassNames),"label"in v&&n(7,g=v.label),"noFollow"in v&&n(8,_=v.noFollow),"underline"in v&&n(9,c=v.underline),"onClick"in v&&n(10,d=v.onClick),"targetBlank"in v&&n(11,h=v.targetBlank),"useDeprecatedJS"in v&&n(12,k=v.useDeprecatedJS),"$$scope"in v&&n(14,t=v.$$scope)},[o,i,r,f,w,D,p,g,_,c,d,h,k,a,t,l]}class Ce extends G{constructor(e){super();T(this,e,je,Te,j,{classNames:0,dataLabel:1,dataUrl:2,dataValue:3,href:4,icon:5,iconClassNames:6,label:7,noFollow:8,underline:9,onClick:10,targetBlank:11,useDeprecatedJS:12})}}const{window:He}=Ee,Ke=s=>({}),ae=s=>({slot:"button"});function oe(s,e,n){const l=s.slice();return l[11]=e[n].label,l[12]=e[n].value,l}const Pe=s=>({}),re=s=>({slot:"menu"}),Qe=s=>({}),ie=s=>({slot:"button"});function fe(s,e,n){const l=s.slice();return l[11]=e[n].label,l[12]=e[n].value,l}const Xe=s=>({}),ue=s=>({slot:"menu"});function Ye(s){let e,n;return e=new Ne({props:{btnLabel:"",classNames:"colab-dropdown",noBtnClass:!0,useDeprecatedJS:!1,$$slots:{menu:[tt],button:[$e]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,t){y(e,l,t),n=!0},p(l,t){const a={};t&1024&&(a.$$scope={dirty:t,ctx:l}),e.$set(a)},i(l){n||(m(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){M(e,l)}}}function Ze(s){let e,n,l;return{c(){e=B("a"),n=B("img"),this.h()},l(t){e=I(t,"A",{href:!0,target:!0});var a=S(e);n=I(a,"IMG",{alt:!0,class:!0,src:!0}),a.forEach(N),this.h()},h(){u(n,"alt","Open In Colab"),u(n,"class","!m-0"),X(n.src,l="https://colab.research.google.com/assets/colab-badge.svg")||u(n,"src",l),u(e,"href",s[2][0].value),u(e,"target","_blank")},m(t,a){E(t,e,a),z(e,n)},p:q,i:q,o:q,d(t){t&&N(e)}}}function xe(s){let e,n;return{c(){e=B("img"),this.h()},l(l){e=I(l,"IMG",{alt:!0,class:!0,src:!0}),this.h()},h(){u(e,"alt","Open In Colab"),u(e,"class","!m-0"),X(e.src,n="https://colab.research.google.com/assets/colab-badge.svg")||u(e,"src",n)},m(l,t){E(l,e,t)},d(l){l&&N(e)}}}function $e(s){let e;const n=s[6].default,l=O(n,s,s[10],ie),t=l||xe();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,o){t&&t.m(a,o),e=!0},p(a,o){l&&l.p&&(!e||o&1024)&&R(l,n,a,a[10],e?W(n,a[10],o,Qe):U(a[10]),ie)},i(a){e||(m(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function ce(s){let e,n;function l(){return s[7](s[12])}return e=new Ce({props:{classNames:"text-sm !no-underline",iconClassNames:"text-gray-500",label:s[11],onClick:l,useDeprecatedJS:!1}}),{c(){L(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,a){y(e,t,a),n=!0},p(t,a){s=t},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function et(s){let e,n,l=s[2],t=[];for(let o=0;o<l.length;o+=1)t[o]=ce(fe(s,l,o));const a=o=>b(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=V()},l(o){for(let i=0;i<t.length;i+=1)t[i].l(o);e=V()},m(o,i){for(let r=0;r<t.length;r+=1)t[r].m(o,i);E(o,e,i),n=!0},p(o,i){if(i&4){l=o[2];let r;for(r=0;r<l.length;r+=1){const f=fe(o,l,r);t[r]?(t[r].p(f,i),m(t[r],1)):(t[r]=ce(f),t[r].c(),m(t[r],1),t[r].m(e.parentNode,e))}for(A(),r=l.length;r<t.length;r+=1)a(r);J()}},i(o){if(!n){for(let i=0;i<l.length;i+=1)m(t[i]);n=!0}},o(o){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)b(t[i]);n=!1},d(o){ve(t,o),o&&N(e)}}}function tt(s){let e;const n=s[6].default,l=O(n,s,s[10],ue),t=l||et(s);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,o){t&&t.m(a,o),e=!0},p(a,o){l&&l.p&&(!e||o&1024)&&R(l,n,a,a[10],e?W(n,a[10],o,Xe):U(a[10]),ue)},i(a){e||(m(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function lt(s){let e,n;return e=new Ne({props:{btnLabel:"",classNames:"colab-dropdown",noBtnClass:!0,useDeprecatedJS:!1,$$slots:{menu:[rt],button:[at]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,t){y(e,l,t),n=!0},p(l,t){const a={};t&1024&&(a.$$scope={dirty:t,ctx:l}),e.$set(a)},i(l){n||(m(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){M(e,l)}}}function nt(s){let e,n,l;return{c(){e=B("a"),n=B("img"),this.h()},l(t){e=I(t,"A",{href:!0,target:!0});var a=S(e);n=I(a,"IMG",{alt:!0,class:!0,src:!0}),a.forEach(N),this.h()},h(){u(n,"alt","Open In Studio Lab"),u(n,"class","!m-0"),X(n.src,l="https://studiolab.sagemaker.aws/studiolab.svg")||u(n,"src",l),u(e,"href",s[3][0].value),u(e,"target","_blank")},m(t,a){E(t,e,a),z(e,n)},p:q,i:q,o:q,d(t){t&&N(e)}}}function st(s){let e,n;return{c(){e=B("img"),this.h()},l(l){e=I(l,"IMG",{alt:!0,class:!0,src:!0}),this.h()},h(){u(e,"alt","Open In Studio Lab"),u(e,"class","!m-0"),X(e.src,n="https://studiolab.sagemaker.aws/studiolab.svg")||u(e,"src",n)},m(l,t){E(l,e,t)},d(l){l&&N(e)}}}function at(s){let e;const n=s[6].default,l=O(n,s,s[10],ae),t=l||st();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,o){t&&t.m(a,o),e=!0},p(a,o){l&&l.p&&(!e||o&1024)&&R(l,n,a,a[10],e?W(n,a[10],o,Ke):U(a[10]),ae)},i(a){e||(m(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function _e(s){let e,n;function l(){return s[8](s[12])}return e=new Ce({props:{classNames:"text-sm !no-underline",iconClassNames:"text-gray-500",label:s[11],onClick:l,useDeprecatedJS:!1}}),{c(){L(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,a){y(e,t,a),n=!0},p(t,a){s=t},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function ot(s){let e,n,l=s[3],t=[];for(let o=0;o<l.length;o+=1)t[o]=_e(oe(s,l,o));const a=o=>b(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=V()},l(o){for(let i=0;i<t.length;i+=1)t[i].l(o);e=V()},m(o,i){for(let r=0;r<t.length;r+=1)t[r].m(o,i);E(o,e,i),n=!0},p(o,i){if(i&8){l=o[3];let r;for(r=0;r<l.length;r+=1){const f=oe(o,l,r);t[r]?(t[r].p(f,i),m(t[r],1)):(t[r]=_e(f),t[r].c(),m(t[r],1),t[r].m(e.parentNode,e))}for(A(),r=l.length;r<t.length;r+=1)a(r);J()}},i(o){if(!n){for(let i=0;i<l.length;i+=1)m(t[i]);n=!0}},o(o){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)b(t[i]);n=!1},d(o){ve(t,o),o&&N(e)}}}function rt(s){let e;const n=s[6].default,l=O(n,s,s[10],re),t=l||ot(s);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,o){t&&t.m(a,o),e=!0},p(a,o){l&&l.p&&(!e||o&1024)&&R(l,n,a,a[10],e?W(n,a[10],o,Pe):U(a[10]),re)},i(a){e||(m(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function it(s){let e,n,l,t,a,o,i,r,f,w;const D=[Ze,Ye],p=[];function g(h,k){return h[2].length===1?0:1}n=g(s),l=p[n]=D[n](s);const _=[nt,lt],c=[];function d(h,k){return h[3].length===1?0:1}return a=d(s),o=c[a]=_[a](s),{c(){e=B("div"),l.c(),t=K(),o.c(),this.h()},l(h){e=I(h,"DIV",{class:!0});var k=S(e);l.l(k),t=P(k),o.l(k),k.forEach(N),this.h()},h(){u(e,"class",i="flex space-x-1 "+s[0])},m(h,k){E(h,e,k),p[n].m(e,null),z(e,t),c[a].m(e,null),s[9](e),r=!0,f||(w=Q(He,"resize",s[4]),f=!0)},p(h,[k]){l.p(h,k),o.p(h,k),(!r||k&1&&i!==(i="flex space-x-1 "+h[0]))&&u(e,"class",i)},i(h){r||(m(l),m(o),r=!0)},o(h){b(l),b(o),r=!1},d(h){h&&N(e),p[n].d(),c[a].d(),s[9](null),f=!1,w()}}}function de(s){window.open(s)}function ft(s,e,n){let{$$slots:l={},$$scope:t}=e,{options:a=[]}=e,{classNames:o=""}=e,i;const r=a.filter(_=>_.value.includes("colab.research.google.com")),f=a.filter(_=>_.value.includes("studiolab.sagemaker.aws"));function w(){const _=document.querySelector(".prose-doc h1"),c=document.querySelector(".prose-doc h1 > span");if(_&&c){const{width:d}=_.getBoundingClientRect(),{width:h}=c.getBoundingClientRect();let k=0;for(let H=0;H<i.children.length;H++)k+=i.children.item(H).clientWidth;const v=20;d-h<k+v?i.classList.remove("absolute"):i.classList.add("absolute")}}he(()=>{w()});const D=_=>de(_),p=_=>de(_);function g(_){Y[_?"unshift":"push"](()=>{i=_,n(1,i)})}return s.$$set=_=>{"options"in _&&n(5,a=_.options),"classNames"in _&&n(0,o=_.classNames),"$$scope"in _&&n(10,t=_.$$scope)},[o,i,r,f,w,a,l,D,p,g,t]}class _t extends G{constructor(e){super();T(this,e,ft,it,j,{options:5,classNames:0})}}export{_t as D,ct as T};
