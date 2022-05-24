import{S as H,i as K,s as P,F as U,e as E,c as I,a as S,d as N,b as u,g as D,G as R,Q,U as me,H as W,I as q,J as z,q as h,o as b,v as he,V as Y,O as Z,P as x,f as Be,L as O,w as L,x as F,y as M,B as A,k as T,m as j,n as J,p as y,W as ge,l as V,t as be,h as we,j as ke,X as De,N as X,K as ve}from"./vendor-hf-doc-builder.js";function Ee(s){let e,n,l,t,a,o;const r=s[7].default,i=U(r,s,s[6],null);return{c(){e=E("div"),n=E("ul"),i&&i.c(),this.h()},l(f){e=I(f,"DIV",{class:!0});var w=S(e);n=I(w,"UL",{class:!0});var B=S(n);i&&i.l(B),B.forEach(N),w.forEach(N),this.h()},h(){u(n,"class","min-w-full w-auto"),u(e,"class",l="absolute top-full mt-1 min-w-full w-auto bg-white rounded-xl overflow-hidden shadow-lg z-10 border border-gray-100 "+(s[2]==="right"?"right-0":"left-0")+" "+s[0])},m(f,w){D(f,e,w),R(e,n),i&&i.m(n,null),s[8](e),t=!0,a||(o=Q(e,"click",function(){me(s[1])&&s[1].apply(this,arguments)}),a=!0)},p(f,[w]){s=f,i&&i.p&&(!t||w&64)&&W(i,r,s,s[6],t?z(r,s[6],w,null):q(s[6]),null),(!t||w&5&&l!==(l="absolute top-full mt-1 min-w-full w-auto bg-white rounded-xl overflow-hidden shadow-lg z-10 border border-gray-100 "+(s[2]==="right"?"right-0":"left-0")+" "+s[0]))&&u(e,"class",l)},i(f){t||(h(i,f),t=!0)},o(f){b(i,f),t=!1},d(f){f&&N(e),i&&i.d(f),s[8](null),a=!1,o()}}}function Ie(s,e,n){let{$$slots:l={},$$scope:t}=e,{classNames:a=""}=e,{dropdownElement:o=void 0}=e,{forceAlignement:r=void 0}=e,{onClose:i}=e,f=r!=null?r:"left",w;he(()=>{var g,_;if(document.addEventListener("click",B),!r){const c=document.documentElement.clientWidth,d=(w==null?void 0:w.getBoundingClientRect())||{},m=(g=d.left)!=null?g:0,k=(_=d.width)!=null?_:0;n(2,f=m+k>c?"right":"left")}return()=>{document.removeEventListener("click",B)}});function B(g){const _=g.target;_!==o&&!(o==null?void 0:o.contains(_))&&i()}function p(g){Y[g?"unshift":"push"](()=>{w=g,n(3,w)})}return s.$$set=g=>{"classNames"in g&&n(0,a=g.classNames),"dropdownElement"in g&&n(4,o=g.dropdownElement),"forceAlignement"in g&&n(5,r=g.forceAlignement),"onClose"in g&&n(1,i=g.onClose),"$$scope"in g&&n(6,t=g.$$scope)},[a,i,f,w,o,r,t,l,p]}class Se extends H{constructor(e){super();K(this,e,Ie,Ee,P,{classNames:0,dropdownElement:4,forceAlignement:5,onClose:1})}}function Le(s){let e,n;return{c(){e=Z("svg"),n=Z("path"),this.h()},l(l){e=x(l,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0,style:!0});var t=S(e);n=x(t,"path",{d:!0,fill:!0}),S(n).forEach(N),t.forEach(N),this.h()},h(){u(n,"d","M7 10l5 5l5-5z"),u(n,"fill","currentColor"),u(e,"class",s[0]),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),u(e,"aria-hidden","true"),u(e,"focusable","false"),u(e,"role","img"),u(e,"width","1em"),u(e,"height","1em"),u(e,"preserveAspectRatio","xMidYMid meet"),u(e,"viewBox","0 0 24 24"),Be(e,"transform","rotate(360deg)")},m(l,t){D(l,e,t),R(e,n)},p(l,[t]){t&1&&u(e,"class",l[0])},i:O,o:O,d(l){l&&N(e)}}}function Me(s,e,n){let{classNames:l=""}=e;return s.$$set=t=>{"classNames"in t&&n(0,l=t.classNames)},[l]}class Ae extends H{constructor(e){super();K(this,e,Me,Le,P,{classNames:0})}}const Je=s=>({}),$=s=>({}),ye=s=>({}),ee=s=>({});function Ve(s){let e,n,l,t,a,o=s[2]&&te(s),r=s[10]&&le();return{c(){o&&o.c(),e=T(),n=be(s[4]),l=T(),r&&r.c(),t=V()},l(i){o&&o.l(i),e=j(i),n=we(i,s[4]),l=j(i),r&&r.l(i),t=V()},m(i,f){o&&o.m(i,f),D(i,e,f),D(i,n,f),D(i,l,f),r&&r.m(i,f),D(i,t,f),a=!0},p(i,f){i[2]?o?(o.p(i,f),f&4&&h(o,1)):(o=te(i),o.c(),h(o,1),o.m(e.parentNode,e)):o&&(J(),b(o,1,1,()=>{o=null}),y()),(!a||f&16)&&ke(n,i[4]),i[10]?r?f&1024&&h(r,1):(r=le(),r.c(),h(r,1),r.m(t.parentNode,t)):r&&(J(),b(r,1,1,()=>{r=null}),y())},i(i){a||(h(o),h(r),a=!0)},o(i){b(o),b(r),a=!1},d(i){o&&o.d(i),i&&N(e),i&&N(n),i&&N(l),r&&r.d(i),i&&N(t)}}}function Oe(s){let e;const n=s[14].button,l=U(n,s,s[18],ee);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&262144)&&W(l,n,t,t[18],e?z(n,t[18],a,ye):q(t[18]),ee)},i(t){e||(h(l,t),e=!0)},o(t){b(l,t),e=!1},d(t){l&&l.d(t)}}}function te(s){let e,n,l;var t=s[2];function a(o){return{props:{classNames:"mr-1.5 "+o[3]}}}return t&&(e=new t(a(s))),{c(){e&&L(e.$$.fragment),n=V()},l(o){e&&F(e.$$.fragment,o),n=V()},m(o,r){e&&M(e,o,r),D(o,n,r),l=!0},p(o,r){const i={};if(r&8&&(i.classNames="mr-1.5 "+o[3]),t!==(t=o[2])){if(e){J();const f=e;b(f.$$.fragment,1,0,()=>{A(f,1)}),y()}t?(e=new t(a(o)),L(e.$$.fragment),h(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else t&&e.$set(i)},i(o){l||(e&&h(e.$$.fragment,o),l=!0)},o(o){e&&b(e.$$.fragment,o),l=!1},d(o){o&&N(n),e&&A(e,o)}}}function le(s){let e,n;return e=new Ae({props:{classNames:"-mr-1 text-gray-500"}}),{c(){L(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,t){M(e,l,t),n=!0},i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){A(e,l)}}}function ne(s){let e,n;return e=new Se({props:{classNames:s[6]+" "+(s[9]?"v2-dropdown-menu hidden":""),dropdownElement:s[11],forceAlignement:s[5],onClose:s[16],$$slots:{default:[Re]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,t){M(e,l,t),n=!0},p(l,t){const a={};t&576&&(a.classNames=l[6]+" "+(l[9]?"v2-dropdown-menu hidden":"")),t&2048&&(a.dropdownElement=l[11]),t&32&&(a.forceAlignement=l[5]),t&4096&&(a.onClose=l[16]),t&262144&&(a.$$scope={dirty:t,ctx:l}),e.$set(a)},i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){A(e,l)}}}function Re(s){let e;const n=s[14].menu,l=U(n,s,s[18],$);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&262144)&&W(l,n,t,t[18],e?z(n,t[18],a,Je):q(t[18]),$)},i(t){e||(h(l,t),e=!0)},o(t){b(l,t),e=!1},d(t){l&&l.d(t)}}}function Ue(s){let e,n,l,t,a,o,r,i,f,w,B;const p=[Oe,Ve],g=[];function _(d,m){return d[13].button?0:1}l=_(s),t=g[l]=p[l](s);let c=(s[12]||s[9])&&ne(s);return{c(){e=E("div"),n=E("button"),t.c(),o=T(),c&&c.c(),this.h()},l(d){e=I(d,"DIV",{class:!0,"selected-value":!0});var m=S(e);n=I(m,"BUTTON",{class:!0,type:!0});var k=S(n);t.l(k),k.forEach(N),o=j(m),c&&c.l(m),m.forEach(N),this.h()},h(){u(n,"class",a=""+s[1]+" "+(s[7]?"":"cursor-pointer w-full btn text-sm")+" "+(s[9]?"v2-dropdown-button":"")),u(n,"type","button"),u(e,"class",r="relative "+s[0]+" "+(s[9]?"v2-dropdown":"")),u(e,"selected-value",i=s[8]||void 0)},m(d,m){D(d,e,m),R(e,n),g[l].m(n,null),R(e,o),c&&c.m(e,null),s[17](e),f=!0,w||(B=Q(n,"click",s[15]),w=!0)},p(d,[m]){let k=l;l=_(d),l===k?g[l].p(d,m):(J(),b(g[k],1,1,()=>{g[k]=null}),y(),t=g[l],t?t.p(d,m):(t=g[l]=p[l](d),t.c()),h(t,1),t.m(n,null)),(!f||m&642&&a!==(a=""+d[1]+" "+(d[7]?"":"cursor-pointer w-full btn text-sm")+" "+(d[9]?"v2-dropdown-button":"")))&&u(n,"class",a),d[12]||d[9]?c?(c.p(d,m),m&4608&&h(c,1)):(c=ne(d),c.c(),h(c,1),c.m(e,null)):c&&(J(),b(c,1,1,()=>{c=null}),y()),(!f||m&513&&r!==(r="relative "+d[0]+" "+(d[9]?"v2-dropdown":"")))&&u(e,"class",r),(!f||m&256&&i!==(i=d[8]||void 0))&&u(e,"selected-value",i)},i(d){f||(h(t),h(c),f=!0)},o(d){b(t),b(c),f=!1},d(d){d&&N(e),g[l].d(),c&&c.d(),s[17](null),w=!1,B()}}}function We(s,e,n){let{$$slots:l={},$$scope:t}=e;const a=ge(l);let{classNames:o=""}=e,{btnClassNames:r=""}=e,{btnIcon:i=void 0}=e,{btnIconClassNames:f=""}=e,{btnLabel:w=""}=e,{forceMenuAlignement:B=void 0}=e,{menuClassNames:p=""}=e,{noBtnClass:g=void 0}=e,{selectedValue:_=void 0}=e,{useDeprecatedJS:c=!0}=e,{withBtnCaret:d=!1}=e,m,k=!1;const v=()=>n(12,k=!k),G=()=>n(12,k=!1);function pe(C){Y[C?"unshift":"push"](()=>{m=C,n(11,m)})}return s.$$set=C=>{"classNames"in C&&n(0,o=C.classNames),"btnClassNames"in C&&n(1,r=C.btnClassNames),"btnIcon"in C&&n(2,i=C.btnIcon),"btnIconClassNames"in C&&n(3,f=C.btnIconClassNames),"btnLabel"in C&&n(4,w=C.btnLabel),"forceMenuAlignement"in C&&n(5,B=C.forceMenuAlignement),"menuClassNames"in C&&n(6,p=C.menuClassNames),"noBtnClass"in C&&n(7,g=C.noBtnClass),"selectedValue"in C&&n(8,_=C.selectedValue),"useDeprecatedJS"in C&&n(9,c=C.useDeprecatedJS),"withBtnCaret"in C&&n(10,d=C.withBtnCaret),"$$scope"in C&&n(18,t=C.$$scope)},[o,r,i,f,w,B,p,g,_,c,d,m,k,a,l,v,G,pe,t]}class Ne extends H{constructor(e){super();K(this,e,We,Ue,P,{classNames:0,btnClassNames:1,btnIcon:2,btnIconClassNames:3,btnLabel:4,forceMenuAlignement:5,menuClassNames:6,noBtnClass:7,selectedValue:8,useDeprecatedJS:9,withBtnCaret:10})}}function qe(s){let e,n,l,t=s[5]&&se(s);return{c(){t&&t.c(),e=T(),n=be(s[7])},l(a){t&&t.l(a),e=j(a),n=we(a,s[7])},m(a,o){t&&t.m(a,o),D(a,e,o),D(a,n,o),l=!0},p(a,o){a[5]?t?(t.p(a,o),o&32&&h(t,1)):(t=se(a),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(J(),b(t,1,1,()=>{t=null}),y()),(!l||o&128)&&ke(n,a[7])},i(a){l||(h(t),l=!0)},o(a){b(t),l=!1},d(a){t&&t.d(a),a&&N(e),a&&N(n)}}}function ze(s){let e;const n=s[15].default,l=U(n,s,s[14],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&16384)&&W(l,n,t,t[14],e?z(n,t[14],a,null):q(t[14]),null)},i(t){e||(h(l,t),e=!0)},o(t){b(l,t),e=!1},d(t){l&&l.d(t)}}}function se(s){let e,n,l;var t=s[5];function a(o){return{props:{classNames:"mr-1.5 "+o[6]}}}return t&&(e=new t(a(s))),{c(){e&&L(e.$$.fragment),n=V()},l(o){e&&F(e.$$.fragment,o),n=V()},m(o,r){e&&M(e,o,r),D(o,n,r),l=!0},p(o,r){const i={};if(r&64&&(i.classNames="mr-1.5 "+o[6]),t!==(t=o[5])){if(e){J();const f=e;b(f.$$.fragment,1,0,()=>{A(f,1)}),y()}t?(e=new t(a(o)),L(e.$$.fragment),h(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else t&&e.$set(i)},i(o){l||(e&&h(e.$$.fragment,o),l=!0)},o(o){e&&b(e.$$.fragment,o),l=!1},d(o){o&&N(n),e&&A(e,o)}}}function Fe(s){let e,n,l,t,a,o,r,i,f,w;const B=[ze,qe],p=[];function g(_,c){return _[13].default?0:1}return l=g(s),t=p[l]=B[l](s),{c(){e=E("li"),n=E("a"),t.c(),this.h()},l(_){e=I(_,"LI",{});var c=S(e);n=I(c,"A",{class:!0,"data-label":!0,"data-url":!0,"data-value":!0,href:!0,rel:!0,target:!0});var d=S(n);t.l(d),d.forEach(N),c.forEach(N),this.h()},h(){u(n,"class",a="flex items-center hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer px-3 py-1.5 whitespace-nowrap "+s[0]+" "+(s[9]?"hover:underline":"")+" "+(s[12]?"v2-dropdown-entry":"")),u(n,"data-label",s[1]),u(n,"data-url",s[2]),u(n,"data-value",s[3]),u(n,"href",s[4]),u(n,"rel",o=s[8]?"nofollow":void 0),u(n,"target",r=s[11]?"_blank":void 0)},m(_,c){D(_,e,c),R(e,n),p[l].m(n,null),i=!0,f||(w=Q(n,"click",function(){me(s[10])&&s[10].apply(this,arguments)}),f=!0)},p(_,[c]){s=_;let d=l;l=g(s),l===d?p[l].p(s,c):(J(),b(p[d],1,1,()=>{p[d]=null}),y(),t=p[l],t?t.p(s,c):(t=p[l]=B[l](s),t.c()),h(t,1),t.m(n,null)),(!i||c&4609&&a!==(a="flex items-center hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer px-3 py-1.5 whitespace-nowrap "+s[0]+" "+(s[9]?"hover:underline":"")+" "+(s[12]?"v2-dropdown-entry":"")))&&u(n,"class",a),(!i||c&2)&&u(n,"data-label",s[1]),(!i||c&4)&&u(n,"data-url",s[2]),(!i||c&8)&&u(n,"data-value",s[3]),(!i||c&16)&&u(n,"href",s[4]),(!i||c&256&&o!==(o=s[8]?"nofollow":void 0))&&u(n,"rel",o),(!i||c&2048&&r!==(r=s[11]?"_blank":void 0))&&u(n,"target",r)},i(_){i||(h(t),i=!0)},o(_){b(t),i=!1},d(_){_&&N(e),p[l].d(),f=!1,w()}}}function Ge(s,e,n){let{$$slots:l={},$$scope:t}=e;const a=ge(l);let{classNames:o=""}=e,{dataLabel:r=void 0}=e,{dataUrl:i=void 0}=e,{dataValue:f=void 0}=e,{href:w=void 0}=e,{icon:B=void 0}=e,{iconClassNames:p=""}=e,{label:g=""}=e,{noFollow:_=!1}=e,{underline:c=!1}=e,{onClick:d=()=>{}}=e,{targetBlank:m=!1}=e,{useDeprecatedJS:k=!0}=e;return s.$$set=v=>{"classNames"in v&&n(0,o=v.classNames),"dataLabel"in v&&n(1,r=v.dataLabel),"dataUrl"in v&&n(2,i=v.dataUrl),"dataValue"in v&&n(3,f=v.dataValue),"href"in v&&n(4,w=v.href),"icon"in v&&n(5,B=v.icon),"iconClassNames"in v&&n(6,p=v.iconClassNames),"label"in v&&n(7,g=v.label),"noFollow"in v&&n(8,_=v.noFollow),"underline"in v&&n(9,c=v.underline),"onClick"in v&&n(10,d=v.onClick),"targetBlank"in v&&n(11,m=v.targetBlank),"useDeprecatedJS"in v&&n(12,k=v.useDeprecatedJS),"$$scope"in v&&n(14,t=v.$$scope)},[o,r,i,f,w,B,p,g,_,c,d,m,k,a,t,l]}class Ce extends H{constructor(e){super();K(this,e,Ge,Fe,P,{classNames:0,dataLabel:1,dataUrl:2,dataValue:3,href:4,icon:5,iconClassNames:6,label:7,noFollow:8,underline:9,onClick:10,targetBlank:11,useDeprecatedJS:12})}}const{window:Te}=De,je=s=>({}),ae=s=>({slot:"button"});function oe(s,e,n){const l=s.slice();return l[11]=e[n].label,l[12]=e[n].value,l}const He=s=>({}),ie=s=>({slot:"menu"}),Ke=s=>({}),re=s=>({slot:"button"});function fe(s,e,n){const l=s.slice();return l[11]=e[n].label,l[12]=e[n].value,l}const Pe=s=>({}),ue=s=>({slot:"menu"});function Qe(s){let e,n;return e=new Ne({props:{btnLabel:"",classNames:"colab-dropdown",noBtnClass:!0,useDeprecatedJS:!1,$$slots:{menu:[$e],button:[Ze]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,t){M(e,l,t),n=!0},p(l,t){const a={};t&1024&&(a.$$scope={dirty:t,ctx:l}),e.$set(a)},i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){A(e,l)}}}function Xe(s){let e,n,l;return{c(){e=E("a"),n=E("img"),this.h()},l(t){e=I(t,"A",{href:!0,target:!0});var a=S(e);n=I(a,"IMG",{alt:!0,class:!0,src:!0}),a.forEach(N),this.h()},h(){u(n,"alt","Open In Colab"),u(n,"class","!m-0"),X(n.src,l="https://colab.research.google.com/assets/colab-badge.svg")||u(n,"src",l),u(e,"href",s[2][0].value),u(e,"target","_blank")},m(t,a){D(t,e,a),R(e,n)},p:O,i:O,o:O,d(t){t&&N(e)}}}function Ye(s){let e,n;return{c(){e=E("img"),this.h()},l(l){e=I(l,"IMG",{alt:!0,class:!0,src:!0}),this.h()},h(){u(e,"alt","Open In Colab"),u(e,"class","!m-0"),X(e.src,n="https://colab.research.google.com/assets/colab-badge.svg")||u(e,"src",n)},m(l,t){D(l,e,t)},d(l){l&&N(e)}}}function Ze(s){let e;const n=s[6].default,l=U(n,s,s[10],re),t=l||Ye();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,o){t&&t.m(a,o),e=!0},p(a,o){l&&l.p&&(!e||o&1024)&&W(l,n,a,a[10],e?z(n,a[10],o,Ke):q(a[10]),re)},i(a){e||(h(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function ce(s){let e,n;function l(){return s[7](s[12])}return e=new Ce({props:{classNames:"text-sm !no-underline",iconClassNames:"text-gray-500",label:s[11],onClick:l,useDeprecatedJS:!1}}),{c(){L(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,a){M(e,t,a),n=!0},p(t,a){s=t},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function xe(s){let e,n,l=s[2],t=[];for(let o=0;o<l.length;o+=1)t[o]=ce(fe(s,l,o));const a=o=>b(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=V()},l(o){for(let r=0;r<t.length;r+=1)t[r].l(o);e=V()},m(o,r){for(let i=0;i<t.length;i+=1)t[i].m(o,r);D(o,e,r),n=!0},p(o,r){if(r&4){l=o[2];let i;for(i=0;i<l.length;i+=1){const f=fe(o,l,i);t[i]?(t[i].p(f,r),h(t[i],1)):(t[i]=ce(f),t[i].c(),h(t[i],1),t[i].m(e.parentNode,e))}for(J(),i=l.length;i<t.length;i+=1)a(i);y()}},i(o){if(!n){for(let r=0;r<l.length;r+=1)h(t[r]);n=!0}},o(o){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)b(t[r]);n=!1},d(o){ve(t,o),o&&N(e)}}}function $e(s){let e;const n=s[6].default,l=U(n,s,s[10],ue),t=l||xe(s);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,o){t&&t.m(a,o),e=!0},p(a,o){l&&l.p&&(!e||o&1024)&&W(l,n,a,a[10],e?z(n,a[10],o,Pe):q(a[10]),ue)},i(a){e||(h(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function et(s){let e,n;return e=new Ne({props:{btnLabel:"",classNames:"colab-dropdown",noBtnClass:!0,useDeprecatedJS:!1,$$slots:{menu:[at],button:[nt]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,t){M(e,l,t),n=!0},p(l,t){const a={};t&1024&&(a.$$scope={dirty:t,ctx:l}),e.$set(a)},i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){A(e,l)}}}function tt(s){let e,n,l;return{c(){e=E("a"),n=E("img"),this.h()},l(t){e=I(t,"A",{href:!0,target:!0});var a=S(e);n=I(a,"IMG",{alt:!0,class:!0,src:!0}),a.forEach(N),this.h()},h(){u(n,"alt","Open In Studio Lab"),u(n,"class","!m-0"),X(n.src,l="https://studiolab.sagemaker.aws/studiolab.svg")||u(n,"src",l),u(e,"href",s[3][0].value),u(e,"target","_blank")},m(t,a){D(t,e,a),R(e,n)},p:O,i:O,o:O,d(t){t&&N(e)}}}function lt(s){let e,n;return{c(){e=E("img"),this.h()},l(l){e=I(l,"IMG",{alt:!0,class:!0,src:!0}),this.h()},h(){u(e,"alt","Open In Studio Lab"),u(e,"class","!m-0"),X(e.src,n="https://studiolab.sagemaker.aws/studiolab.svg")||u(e,"src",n)},m(l,t){D(l,e,t)},d(l){l&&N(e)}}}function nt(s){let e;const n=s[6].default,l=U(n,s,s[10],ae),t=l||lt();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,o){t&&t.m(a,o),e=!0},p(a,o){l&&l.p&&(!e||o&1024)&&W(l,n,a,a[10],e?z(n,a[10],o,je):q(a[10]),ae)},i(a){e||(h(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function _e(s){let e,n;function l(){return s[8](s[12])}return e=new Ce({props:{classNames:"text-sm !no-underline",iconClassNames:"text-gray-500",label:s[11],onClick:l,useDeprecatedJS:!1}}),{c(){L(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,a){M(e,t,a),n=!0},p(t,a){s=t},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function st(s){let e,n,l=s[3],t=[];for(let o=0;o<l.length;o+=1)t[o]=_e(oe(s,l,o));const a=o=>b(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=V()},l(o){for(let r=0;r<t.length;r+=1)t[r].l(o);e=V()},m(o,r){for(let i=0;i<t.length;i+=1)t[i].m(o,r);D(o,e,r),n=!0},p(o,r){if(r&8){l=o[3];let i;for(i=0;i<l.length;i+=1){const f=oe(o,l,i);t[i]?(t[i].p(f,r),h(t[i],1)):(t[i]=_e(f),t[i].c(),h(t[i],1),t[i].m(e.parentNode,e))}for(J(),i=l.length;i<t.length;i+=1)a(i);y()}},i(o){if(!n){for(let r=0;r<l.length;r+=1)h(t[r]);n=!0}},o(o){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)b(t[r]);n=!1},d(o){ve(t,o),o&&N(e)}}}function at(s){let e;const n=s[6].default,l=U(n,s,s[10],ie),t=l||st(s);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,o){t&&t.m(a,o),e=!0},p(a,o){l&&l.p&&(!e||o&1024)&&W(l,n,a,a[10],e?z(n,a[10],o,He):q(a[10]),ie)},i(a){e||(h(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function ot(s){let e,n,l,t,a,o,r,i,f,w;const B=[Xe,Qe],p=[];function g(m,k){return m[2].length===1?0:1}n=g(s),l=p[n]=B[n](s);const _=[tt,et],c=[];function d(m,k){return m[3].length===1?0:1}return a=d(s),o=c[a]=_[a](s),{c(){e=E("div"),l.c(),t=T(),o.c(),this.h()},l(m){e=I(m,"DIV",{class:!0});var k=S(e);l.l(k),t=j(k),o.l(k),k.forEach(N),this.h()},h(){u(e,"class",r="flex space-x-1 "+s[0])},m(m,k){D(m,e,k),p[n].m(e,null),R(e,t),c[a].m(e,null),s[9](e),i=!0,f||(w=Q(Te,"resize",s[4]),f=!0)},p(m,[k]){l.p(m,k),o.p(m,k),(!i||k&1&&r!==(r="flex space-x-1 "+m[0]))&&u(e,"class",r)},i(m){i||(h(l),h(o),i=!0)},o(m){b(l),b(o),i=!1},d(m){m&&N(e),p[n].d(),c[a].d(),s[9](null),f=!1,w()}}}function de(s){window.open(s)}function it(s,e,n){let{$$slots:l={},$$scope:t}=e,{options:a=[]}=e,{classNames:o=""}=e,r;const i=a.filter(_=>_.value.includes("colab.research.google.com")),f=a.filter(_=>_.value.includes("studiolab.sagemaker.aws"));function w(){const _=document.querySelector(".prose-doc h1"),c=document.querySelector(".prose-doc h1 > span");if(_&&c){const{width:d}=_.getBoundingClientRect(),{width:m}=c.getBoundingClientRect();let k=0;for(let G=0;G<r.children.length;G++)k+=r.children.item(G).clientWidth;const v=20;d-m<k+v?r.classList.remove("absolute"):r.classList.add("absolute")}}he(()=>{w()});const B=_=>de(_),p=_=>de(_);function g(_){Y[_?"unshift":"push"](()=>{r=_,n(1,r)})}return s.$$set=_=>{"options"in _&&n(5,a=_.options),"classNames"in _&&n(0,o=_.classNames),"$$scope"in _&&n(10,t=_.$$scope)},[o,r,i,f,w,a,l,B,p,g,t]}class ft extends H{constructor(e){super();K(this,e,it,ot,P,{options:5,classNames:0})}}export{ft as D};
