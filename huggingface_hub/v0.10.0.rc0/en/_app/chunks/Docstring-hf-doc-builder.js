var qe=Object.defineProperty,Ue=Object.defineProperties;var Xe=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable;var oe=(s,e,l)=>e in s?qe(s,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[e]=l,fe=(s,e)=>{for(var l in e||(e={}))je.call(e,l)&&oe(s,l,e[l]);if(ne)for(var l of ne(e))We.call(e,l)&&oe(s,l,e[l]);return s},ce=(s,e)=>Ue(s,Xe(e));import{S as De,i as Ve,s as Ie,e as k,c as C,a as w,d as p,b as g,f as K,g as A,l as U,L as ue,t as R,k as L,h as z,m as P,G as b,U as Be,P as Q,j as J,V as Ge,R as Ye,W as xe,X as Re,K as $,q as B,w as ee,x as le,y as te,o as Z,B as se,n as O,p as F,Y as ae,Z as re,v as Oe,_ as Fe,E as Ke,$ as Je}from"./vendor-hf-doc-builder.js";import{I as ie}from"./IconCopyLink-hf-doc-builder.js";function he(s){let e,l;return{c(){e=k("div"),this.h()},l(t){e=C(t,"DIV",{class:!0,style:!0,id:!0});var n=w(e);n.forEach(p),this.h()},h(){g(e,"class",l="absolute text-base py-1.5 p-2 break-words bg-white border-2 border-black dark:border-gray-500 rounded shadow-alternate-xl z-50 "+(s[0].length>1e3?"max-w-lg":"max-w-xs")),K(e,"top",s[2]+15+"px"),K(e,"left",s[1]+15+"px"),g(e,"id",s[3])},m(t,n){A(t,e,n),e.innerHTML=s[0]},p(t,n){n&1&&(e.innerHTML=t[0]),n&1&&l!==(l="absolute text-base py-1.5 p-2 break-words bg-white border-2 border-black dark:border-gray-500 rounded shadow-alternate-xl z-50 "+(t[0].length>1e3?"max-w-lg":"max-w-xs"))&&g(e,"class",l),n&4&&K(e,"top",t[2]+15+"px"),n&2&&K(e,"left",t[1]+15+"px"),n&8&&g(e,"id",t[3])},d(t){t&&p(e)}}}function Qe(s){let e,l=s[0]&&he(s);return{c(){l&&l.c(),e=U()},l(t){l&&l.l(t),e=U()},m(t,n){l&&l.m(t,n),A(t,e,n)},p(t,[n]){t[0]?l?l.p(t,n):(l=he(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:ue,o:ue,d(t){l&&l.d(t),t&&p(e)}}}function $e(s,e,l){let{txt:t}=e,{x:n}=e,{y:d}=e,{id:u}=e;return s.$$set=c=>{"txt"in c&&l(0,t=c.txt),"x"in c&&l(1,n=c.x),"y"in c&&l(2,d=c.y),"id"in c&&l(3,u=c.id)},[t,n,d,u]}class e1 extends De{constructor(e){super();Ve(this,e,$e,Qe,Ie,{txt:0,x:1,y:2,id:3})}}const de="docstring-tooltip";function ze(s,e){let l;function t(c){u(),l=new e1({props:{txt:e,x:c.pageX,y:c.pageY,id:de},target:document.body})}function n(c){l.$set({x:c.pageX,y:c.pageY})}function d(){l.$destroy()}function u(){var h;const c=document.getElementById(de);c&&((h=c.parentNode)==null||h.removeChild(c))}return s.addEventListener("mouseover",t),s.addEventListener("mouseleave",d),s.addEventListener("mousemove",n),{destroy(){s.removeEventListener("mouseover",t),s.removeEventListener("mouseleave",d),s.removeEventListener("mousemove",n)}}}const{window:l1}=Fe;function pe(s,e,l){const t=s.slice();return t[26]=e[l].title,t[11]=e[l].parametersDescription,t}function me(s,e,l){const t=s.slice();return t[9]=e[l].anchor,t[29]=e[l].description,t}function _e(s,e,l){const t=s.slice();return t[9]=e[l].anchor,t[29]=e[l].description,t}function ge(s,e,l){const t=s.slice();return t[10]=e[l].name,t[34]=e[l].val,t}function ve(s){let e,l,t,n,d,u,c,h,_;return{c(){e=k("a"),l=k("span"),t=R("<"),n=L(),d=k("span"),u=R("source"),c=L(),h=k("span"),_=R(">"),this.h()},l(o){e=C(o,"A",{class:!0,href:!0,target:!0});var i=w(e);l=C(i,"SPAN",{});var a=w(l);t=z(a,"<"),a.forEach(p),n=P(i),d=C(i,"SPAN",{class:!0});var r=w(d);u=z(r,"source"),r.forEach(p),c=P(i),h=C(i,"SPAN",{});var f=w(h);_=z(f,">"),f.forEach(p),i.forEach(p),this.h()},h(){g(d,"class","hidden md:block mx-0.5 hover:!underline"),g(e,"class","!ml-auto !text-gray-400 !no-underline text-sm flex items-center"),g(e,"href",s[7]),g(e,"target","_blank")},m(o,i){A(o,e,i),b(e,l),b(l,t),b(e,n),b(e,d),b(d,u),b(e,c),b(e,h),b(h,_)},p(o,i){i[0]&128&&g(e,"href",o[7])},d(o){o&&p(e)}}}function be(s){let e,l,t,n,d,u,c,h,_=s[1],o=[];for(let a=0;a<_.length;a+=1)o[a]=ke(ge(s,_,a));let i=s[4]&&Ce(s);return{c(){e=k("p"),l=k("span"),t=R("("),n=L();for(let a=0;a<o.length;a+=1)o[a].c();d=L(),u=k("span"),c=R(")"),h=L(),i&&i.c(),this.h()},l(a){e=C(a,"P",{class:!0});var r=w(e);l=C(r,"SPAN",{});var f=w(l);t=z(f,"("),f.forEach(p),n=P(r);for(let y=0;y<o.length;y+=1)o[y].l(r);d=P(r),u=C(r,"SPAN",{});var v=w(u);c=z(v,")"),v.forEach(p),h=P(r),i&&i.l(r),r.forEach(p),this.h()},h(){g(e,"class","font-mono text-xs md:text-sm !leading-relaxed !my-6")},m(a,r){A(a,e,r),b(e,l),b(l,t),b(e,n);for(let f=0;f<o.length;f+=1)o[f].m(e,null);b(e,d),b(e,u),b(u,c),b(e,h),i&&i.m(e,null)},p(a,r){if(r[0]&147970){_=a[1];let f;for(f=0;f<_.length;f+=1){const v=ge(a,_,f);o[f]?o[f].p(v,r):(o[f]=ke(v),o[f].c(),o[f].m(e,d))}for(;f<o.length;f+=1)o[f].d(1);o.length=_.length}a[4]?i?i.p(a,r):(i=Ce(a),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(a){a&&p(e),$(o,a),i&&i.d()}}}function ke(s){let e,l,t=s[10]+"",n,d,u=s[34]+"",c,h,_,o,i;function a(){return s[21](s[10])}return{c(){e=k("span"),l=k("span"),n=R(t),d=k("span"),c=R(u),this.h()},l(r){e=C(r,"SPAN",{class:!0});var f=w(e);l=C(f,"SPAN",{class:!0});var v=w(l);n=z(v,t),d=C(v,"SPAN",{class:!0});var y=w(d);c=z(y,u),y.forEach(p),v.forEach(p),f.forEach(p),this.h()},h(){g(d,"class","opacity-60"),g(l,"class","rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"),g(e,"class",h="comma "+(s[14][s[10]]?"cursor-pointer":"cursor-default"))},m(r,f){A(r,e,f),b(e,l),b(l,n),b(l,d),b(d,c),o||(i=[Be(_=ze.call(null,e,s[14][s[10]]||"")),Q(e,"click",xe(Re(a)))],o=!0)},p(r,f){s=r,f[0]&2&&t!==(t=s[10]+"")&&J(n,t),f[0]&2&&u!==(u=s[34]+"")&&J(c,u),f[0]&2&&h!==(h="comma "+(s[14][s[10]]?"cursor-pointer":"cursor-default"))&&g(e,"class",h),_&&Ge(_.update)&&f[0]&2&&_.update.call(null,s[14][s[10]]||"")},d(r){r&&p(e),o=!1,Ye(i)}}}function Ce(s){let e,l,t,n,d=Te(s[4])+"",u,c,h,_;return{c(){e=k("span"),l=R("\u2192"),t=L(),n=k("span"),this.h()},l(o){e=C(o,"SPAN",{class:!0});var i=w(e);l=z(i,"\u2192"),i.forEach(p),t=P(o),n=C(o,"SPAN",{class:!0});var a=w(n);a.forEach(p),this.h()},h(){g(e,"class","font-bold"),g(n,"class",u="rounded hover:bg-gray-400 "+(s[3]?"cursor-pointer":"cursor-default"))},m(o,i){A(o,e,i),b(e,l),A(o,t,i),A(o,n,i),n.innerHTML=d,h||(_=[Be(c=ze.call(null,n,s[3]||"")),Q(n,"click",xe(Re(s[22])))],h=!0)},p(o,i){i[0]&16&&d!==(d=Te(o[4])+"")&&(n.innerHTML=d),i[0]&8&&u!==(u="rounded hover:bg-gray-400 "+(o[3]?"cursor-pointer":"cursor-default"))&&g(n,"class",u),c&&Ge(c.update)&&i[0]&8&&c.update.call(null,o[3]||"")},d(o){o&&p(e),o&&p(t),o&&p(n),h=!1,Ye(_)}}}function we(s){var _;let e,l,t,n=((_=s[11])==null?void 0:_.length)+"",d,u,c,h;return{c(){e=k("div"),l=k("button"),t=R("Expand "),d=R(n),u=R(" parameters"),this.h()},l(o){e=C(o,"DIV",{class:!0});var i=w(e);l=C(i,"BUTTON",{class:!0});var a=w(l);t=z(a,"Expand "),d=z(a,n),u=z(a," parameters"),a.forEach(p),i.forEach(p),this.h()},h(){g(l,"class","absolute leading-tight px-3 py-1.5 dark:bg-gray-900 bg-black text-gray-200 hover:text-white rounded-xl bottom-12 ring-offset-2 hover:ring-black hover:ring-2"),g(e,"class","absolute inset-0 bg-gradient-to-t from-white to-white/0 dark:from-gray-950 dark:to-gray-950/0 z-10 flex justify-center")},m(o,i){A(o,e,i),b(e,l),b(l,t),b(l,d),b(l,u),c||(h=Q(l,"click",s[23]),c=!0)},p(o,i){var a;i[0]&2048&&n!==(n=((a=o[11])==null?void 0:a.length)+"")&&J(d,n)},d(o){o&&p(e),c=!1,h()}}}function Ee(s){let e,l,t,n,d,u,c=s[11],h=[];for(let o=0;o<c.length;o+=1)h[o]=ye(_e(s,c,o));const _=o=>Z(h[o],1,1,()=>{h[o]=null});return{c(){e=k("p"),l=R("Parameters "),t=k("span"),n=L(),d=k("ul");for(let o=0;o<h.length;o+=1)h[o].c();this.h()},l(o){e=C(o,"P",{class:!0});var i=w(e);l=z(i,"Parameters "),t=C(i,"SPAN",{class:!0}),w(t).forEach(p),i.forEach(p),n=P(o),d=C(o,"UL",{class:!0});var a=w(d);for(let r=0;r<h.length;r+=1)h[r].l(a);a.forEach(p),this.h()},h(){g(t,"class","flex-auto border-t-2 border-gray-100 dark:border-gray-700 ml-3"),g(e,"class","flex items-center font-semibold !mt-2 !mb-2 text-gray-800"),g(d,"class","px-2")},m(o,i){A(o,e,i),b(e,l),b(e,t),A(o,n,i),A(o,d,i);for(let a=0;a<h.length;a+=1)h[a].m(d,null);u=!0},p(o,i){if(i[0]&2049){c=o[11];let a;for(a=0;a<c.length;a+=1){const r=_e(o,c,a);h[a]?(h[a].p(r,i),B(h[a],1)):(h[a]=ye(r),h[a].c(),B(h[a],1),h[a].m(d,null))}for(O(),a=c.length;a<h.length;a+=1)_(a);F()}},i(o){if(!u){for(let i=0;i<c.length;i+=1)B(h[i]);u=!0}},o(o){h=h.filter(Boolean);for(let i=0;i<h.length;i+=1)Z(h[i]);u=!1},d(o){o&&p(e),o&&p(n),o&&p(d),$(h,o)}}}function ye(s){let e,l,t,n,d,u,c,h,_,o=s[29]+"",i,a,r;return d=new ie({props:{classNames:"text-smd"}}),{c(){e=k("li"),l=k("span"),t=k("a"),n=k("span"),ee(d.$$.fragment),h=L(),_=k("span"),i=L(),this.h()},l(f){e=C(f,"LI",{class:!0});var v=w(e);l=C(v,"SPAN",{class:!0});var y=w(l);t=C(y,"A",{id:!0,class:!0,href:!0});var Y=w(t);n=C(Y,"SPAN",{});var H=w(n);le(d.$$.fragment,H),H.forEach(p),Y.forEach(p),h=P(y),_=C(y,"SPAN",{});var q=w(_);q.forEach(p),y.forEach(p),i=P(v),v.forEach(p),this.h()},h(){g(t,"id",u=s[9]),g(t,"class","header-link block pr-0.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(t,"href",c=`#${s[9]}`),g(l,"class","group flex space-x-1.5 items-start"),g(e,"class",a="text-base !pl-4 my-3 rounded "+(s[0]===s[9]?X:""))},m(f,v){A(f,e,v),b(e,l),b(l,t),b(t,n),te(d,n,null),b(l,h),b(l,_),_.innerHTML=o,b(e,i),r=!0},p(f,v){(!r||v[0]&2048&&u!==(u=f[9]))&&g(t,"id",u),(!r||v[0]&2048&&c!==(c=`#${f[9]}`))&&g(t,"href",c),(!r||v[0]&2048)&&o!==(o=f[29]+"")&&(_.innerHTML=o),(!r||v[0]&2049&&a!==(a="text-base !pl-4 my-3 rounded "+(f[0]===f[9]?X:"")))&&g(e,"class",a)},i(f){r||(B(d.$$.fragment,f),r=!0)},o(f){Z(d.$$.fragment,f),r=!1},d(f){f&&p(e),se(d)}}}function Le(s){let e,l,t=s[2],n=[];for(let u=0;u<t.length;u+=1)n[u]=Ae(pe(s,t,u));const d=u=>Z(n[u],1,1,()=>{n[u]=null});return{c(){for(let u=0;u<n.length;u+=1)n[u].c();e=U()},l(u){for(let c=0;c<n.length;c+=1)n[c].l(u);e=U()},m(u,c){for(let h=0;h<n.length;h+=1)n[h].m(u,c);A(u,e,c),l=!0},p(u,c){if(c[0]&5){t=u[2];let h;for(h=0;h<t.length;h+=1){const _=pe(u,t,h);n[h]?(n[h].p(_,c),B(n[h],1)):(n[h]=Ae(_),n[h].c(),B(n[h],1),n[h].m(e.parentNode,e))}for(O(),h=t.length;h<n.length;h+=1)d(h);F()}},i(u){if(!l){for(let c=0;c<t.length;c+=1)B(n[c]);l=!0}},o(u){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)Z(n[c]);l=!1},d(u){$(n,u),u&&p(e)}}}function Pe(s){let e,l,t,n,d,u,c,h,_,o=s[29]+"",i,a;return d=new ie({props:{classNames:"text-smd"}}),{c(){e=k("li"),l=k("span"),t=k("a"),n=k("span"),ee(d.$$.fragment),h=L(),_=k("span"),this.h()},l(r){e=C(r,"LI",{class:!0});var f=w(e);l=C(f,"SPAN",{class:!0});var v=w(l);t=C(v,"A",{id:!0,class:!0,href:!0});var y=w(t);n=C(y,"SPAN",{});var Y=w(n);le(d.$$.fragment,Y),Y.forEach(p),y.forEach(p),h=P(v),_=C(v,"SPAN",{});var H=w(_);H.forEach(p),v.forEach(p),f.forEach(p),this.h()},h(){g(t,"id",u=s[9]),g(t,"class","header-link block pr-0.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(t,"href",c=`#${s[9]}`),g(l,"class","group flex space-x-1.5 items-start"),g(e,"class",i="text-base !pl-4 my-3 rounded "+(s[0]===s[9]?X:""))},m(r,f){A(r,e,f),b(e,l),b(l,t),b(t,n),te(d,n,null),b(l,h),b(l,_),_.innerHTML=o,a=!0},p(r,f){(!a||f[0]&4&&u!==(u=r[9]))&&g(t,"id",u),(!a||f[0]&4&&c!==(c=`#${r[9]}`))&&g(t,"href",c),(!a||f[0]&4)&&o!==(o=r[29]+"")&&(_.innerHTML=o),(!a||f[0]&5&&i!==(i="text-base !pl-4 my-3 rounded "+(r[0]===r[9]?X:"")))&&g(e,"class",i)},i(r){a||(B(d.$$.fragment,r),a=!0)},o(r){Z(d.$$.fragment,r),a=!1},d(r){r&&p(e),se(d)}}}function Ae(s){let e,l=s[26]+"",t,n,d,u,c,h,_,o=s[11],i=[];for(let r=0;r<o.length;r+=1)i[r]=Pe(me(s,o,r));const a=r=>Z(i[r],1,1,()=>{i[r]=null});return{c(){e=k("p"),t=R(l),n=L(),d=k("span"),u=L(),c=k("ul");for(let r=0;r<i.length;r+=1)i[r].c();h=L(),this.h()},l(r){e=C(r,"P",{class:!0});var f=w(e);t=z(f,l),n=P(f),d=C(f,"SPAN",{class:!0}),w(d).forEach(p),f.forEach(p),u=P(r),c=C(r,"UL",{class:!0});var v=w(c);for(let y=0;y<i.length;y+=1)i[y].l(v);h=P(v),v.forEach(p),this.h()},h(){g(d,"class","flex-auto border-t-2 ml-3"),g(e,"class","flex items-center font-semibold"),g(c,"class","px-2")},m(r,f){A(r,e,f),b(e,t),b(e,n),b(e,d),A(r,u,f),A(r,c,f);for(let v=0;v<i.length;v+=1)i[v].m(c,null);b(c,h),_=!0},p(r,f){if((!_||f[0]&4)&&l!==(l=r[26]+"")&&J(t,l),f[0]&5){o=r[11];let v;for(v=0;v<o.length;v+=1){const y=me(r,o,v);i[v]?(i[v].p(y,f),B(i[v],1)):(i[v]=Pe(y),i[v].c(),B(i[v],1),i[v].m(c,h))}for(O(),v=o.length;v<i.length;v+=1)a(v);F()}},i(r){if(!_){for(let f=0;f<o.length;f+=1)B(i[f]);_=!0}},o(r){i=i.filter(Boolean);for(let f=0;f<i.length;f+=1)Z(i[f]);_=!1},d(r){r&&p(e),r&&p(u),r&&p(c),$(i,r)}}}function Se(s){let e,l,t,n,d,u,c,h,_,o,i=(s[3]||"")+"",a=!!s[4]&&Ne(s);return{c(){e=k("div"),l=k("p"),t=R(s[15]),n=L(),a&&a.c(),d=L(),u=k("span"),_=L(),o=k("p"),this.h()},l(r){e=C(r,"DIV",{id:!0,class:!0});var f=w(e);l=C(f,"P",{class:!0});var v=w(l);t=z(v,s[15]),v.forEach(p),n=P(f),a&&a.l(f),d=P(f),u=C(f,"SPAN",{class:!0}),w(u).forEach(p),f.forEach(p),_=P(r),o=C(r,"P",{class:!0});var y=w(o);y.forEach(p),this.h()},h(){g(l,"class","text-base"),g(u,"class","flex-auto border-t-2 border-gray-100 dark:border-gray-700"),g(e,"id",c=`${s[9]}.${s[16]}`),g(e,"class",h="flex items-center font-semibold space-x-3 text-base !mt-0 !mb-0 text-gray-800 rounded "+(s[0]===s[9]?X:"")),g(o,"class","text-base")},m(r,f){A(r,e,f),b(e,l),b(l,t),b(e,n),a&&a.m(e,null),b(e,d),b(e,u),A(r,_,f),A(r,o,f),o.innerHTML=i},p(r,f){r[4]?a?a.p(r,f):(a=Ne(r),a.c(),a.m(e,d)):a&&(a.d(1),a=null),f[0]&512&&c!==(c=`${r[9]}.${r[16]}`)&&g(e,"id",c),f[0]&513&&h!==(h="flex items-center font-semibold space-x-3 text-base !mt-0 !mb-0 text-gray-800 rounded "+(r[0]===r[9]?X:""))&&g(e,"class",h),f[0]&8&&i!==(i=(r[3]||"")+"")&&(o.innerHTML=i)},d(r){r&&p(e),a&&a.d(),r&&p(_),r&&p(o)}}}function Ne(s){let e,l;return{c(){e=new ae,l=U(),this.h()},l(t){e=re(t),l=U(),this.h()},h(){e.a=l},m(t,n){e.m(s[4],t,n),A(t,l,n)},p(t,n){n[0]&16&&e.p(t[4])},d(t){t&&p(l),t&&e.d()}}}function Me(s){let e,l,t,n,d,u,c,h,_,o=(s[5]||"")+"",i=!!s[6]&&He(s);return{c(){e=k("div"),l=k("p"),t=R("Raises"),n=L(),i&&i.c(),d=L(),u=k("span"),h=L(),_=k("p"),this.h()},l(a){e=C(a,"DIV",{class:!0,id:!0});var r=w(e);l=C(r,"P",{class:!0});var f=w(l);t=z(f,"Raises"),f.forEach(p),n=P(r),i&&i.l(r),d=P(r),u=C(r,"SPAN",{class:!0}),w(u).forEach(p),r.forEach(p),h=P(a),_=C(a,"P",{class:!0});var v=w(_);v.forEach(p),this.h()},h(){g(l,"class","text-base"),g(u,"class","flex-auto border-t-2 border-gray-100 dark:border-gray-700"),g(e,"class","flex items-center font-semibold space-x-3 text-base !mt-0 !mb-0 text-gray-800"),g(e,"id",c=`${s[9]}.raises`),g(_,"class","text-base")},m(a,r){A(a,e,r),b(e,l),b(l,t),b(e,n),i&&i.m(e,null),b(e,d),b(e,u),A(a,h,r),A(a,_,r),_.innerHTML=o},p(a,r){a[6]?i?i.p(a,r):(i=He(a),i.c(),i.m(e,d)):i&&(i.d(1),i=null),r[0]&512&&c!==(c=`${a[9]}.raises`)&&g(e,"id",c),r[0]&32&&o!==(o=(a[5]||"")+"")&&(_.innerHTML=o)},d(a){a&&p(e),i&&i.d(),a&&p(h),a&&p(_)}}}function He(s){let e,l;return{c(){e=new ae,l=U(),this.h()},l(t){e=re(t),l=U(),this.h()},h(){e.a=l},m(t,n){e.m(s[6],t,n),A(t,l,n)},p(t,n){n[0]&64&&e.p(t[6])},d(t){t&&p(l),t&&e.d()}}}function t1(s){let e,l,t,n=s[18](s[10])+"",d,u,c,h,_,o,i,a,r,f,v,y,Y,H,q,W;c=new ie({});let T=s[7]&&ve(s),M=!s[8]&&be(s),D=s[13]&&we(s),S=!!s[11]&&Ee(s),N=s[2]&&Le(s),V=!!s[4]&&Se(s),I=!!s[6]&&Me(s);return{c(){e=k("div"),l=k("span"),t=new ae,d=L(),u=k("a"),ee(c.$$.fragment),_=L(),T&&T.c(),o=L(),M&&M.c(),i=L(),a=k("div"),D&&D.c(),r=L(),S&&S.c(),f=L(),N&&N.c(),v=L(),V&&V.c(),y=L(),I&&I.c(),this.h()},l(E){e=C(E,"DIV",{});var m=w(e);l=C(m,"SPAN",{class:!0,id:!0});var G=w(l);t=re(G),d=P(G),u=C(G,"A",{id:!0,class:!0,href:!0});var j=w(u);le(c.$$.fragment,j),j.forEach(p),_=P(G),T&&T.l(G),G.forEach(p),o=P(m),M&&M.l(m),i=P(m),a=C(m,"DIV",{class:!0});var x=w(a);D&&D.l(x),r=P(x),S&&S.l(x),f=P(x),N&&N.l(x),v=P(x),V&&V.l(x),y=P(x),I&&I.l(x),x.forEach(p),m.forEach(p),this.h()},h(){t.a=d,g(u,"id",s[9]),g(u,"class","header-link invisible with-hover:group-hover:visible pr-2"),g(u,"href",h="#"+s[9]),g(l,"class","group flex space-x-1.5 items-center text-gray-800 bg-gradient-to-r rounded-tr-lg -mt-4 -ml-4 pt-3 px-2.5"),g(l,"id",s[9]),g(a,"class",Y="!mb-10 relative docstring-details "+(s[13]?"max-h-96 overflow-hidden":""))},m(E,m){A(E,e,m),b(e,l),t.m(n,l),b(l,d),b(l,u),te(c,u,null),b(l,_),T&&T.m(l,null),b(e,o),M&&M.m(e,null),b(e,i),b(e,a),D&&D.m(a,null),b(a,r),S&&S.m(a,null),b(a,f),N&&N.m(a,null),b(a,v),V&&V.m(a,null),b(a,y),I&&I.m(a,null),s[24](a),H=!0,q||(W=Q(l1,"hashchange",s[19]),q=!0)},p(E,m){(!H||m[0]&1024)&&n!==(n=E[18](E[10])+"")&&t.p(n),(!H||m[0]&512)&&g(u,"id",E[9]),(!H||m[0]&512&&h!==(h="#"+E[9]))&&g(u,"href",h),E[7]?T?T.p(E,m):(T=ve(E),T.c(),T.m(l,null)):T&&(T.d(1),T=null),(!H||m[0]&512)&&g(l,"id",E[9]),E[8]?M&&(M.d(1),M=null):M?M.p(E,m):(M=be(E),M.c(),M.m(e,i)),E[13]?D?D.p(E,m):(D=we(E),D.c(),D.m(a,r)):D&&(D.d(1),D=null),E[11]?S?(S.p(E,m),m[0]&2048&&B(S,1)):(S=Ee(E),S.c(),B(S,1),S.m(a,f)):S&&(O(),Z(S,1,1,()=>{S=null}),F()),E[2]?N?(N.p(E,m),m[0]&4&&B(N,1)):(N=Le(E),N.c(),B(N,1),N.m(a,v)):N&&(O(),Z(N,1,1,()=>{N=null}),F()),E[4]?V?V.p(E,m):(V=Se(E),V.c(),V.m(a,y)):V&&(V.d(1),V=null),E[6]?I?I.p(E,m):(I=Me(E),I.c(),I.m(a,null)):I&&(I.d(1),I=null),(!H||m[0]&8192&&Y!==(Y="!mb-10 relative docstring-details "+(E[13]?"max-h-96 overflow-hidden":"")))&&g(a,"class",Y)},i(E){H||(B(c.$$.fragment,E),B(S),B(N),H=!0)},o(E){Z(c.$$.fragment,E),Z(S),Z(N),H=!1},d(E){E&&p(e),se(c),T&&T.d(),M&&M.d(),D&&D.d(),S&&S.d(),N&&N.d(),V&&V.d(),I&&I.d(),s[24](null),q=!1,W()}}}const X="bg-yellow-50 dark:bg-[#494a3d]";function Te(s){const e=/\s*<p>(((?!<p>).)*)<\/p>\s*/gms;return s.replace(e,(l,t)=>`<span>${t}</span>`)}function s1(s,e,l){let{anchor:t}=e,{name:n}=e,{parameters:d=[]}=e,{parametersDescription:u}=e,{parameterGroups:c}=e,{returnDescription:h}=e,{returnType:_}=e,{isYield:o=!1}=e,{raiseDescription:i}=e,{raiseType:a}=e,{source:r=void 0}=e,{hashlink:f}=e,{isGetSetDescriptor:v=!1}=e,y,Y,H=!1;const q=(u==null?void 0:u.reduce((m,G)=>{const{name:j,description:x}=G;return ce(fe({},m),{[j]:x})},{}))||{},W=o?"Yields":"Returns",T=W.toLowerCase();Oe(()=>{const{hash:m}=window.location;l(0,f=m.substring(1));const x=[...y.querySelectorAll('[href^="#"]')].map(Ze=>Ze.id).includes(f);l(13,H=!x&&y.clientHeight>500),S()});async function M(m,G){G&&(l(13,H=!1),await Ke(),window.location.hash=m)}function D(m){if(m.startsWith("class ")){const G=m.substring(6).split("."),j=G.pop();return`<h3 class="!m-0"><span class="flex-1 break-all md:text-lg bg-gradient-to-r px-2.5 py-1.5 rounded-xl from-indigo-50/70 to-white dark:from-gray-900 dark:to-gray-950 dark:text-indigo-300 text-indigo-700"><svg class="mr-1.5 text-indigo-500 inline-block -mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width=".8em" height=".8em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path class="uim-quaternary" d="M20.23 7.24L12 12L3.77 7.24a1.98 1.98 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71z" opacity=".25" fill="currentColor"></path><path class="uim-tertiary" d="M12 12v9.5a2.09 2.09 0 0 1-.91-.21L4.5 17.48a2.003 2.003 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01L12 12z" opacity=".5" fill="currentColor"></path><path class="uim-primary" d="M20.5 8.25v7.5a2.003 2.003 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01z" fill="currentColor"></path></svg><span class="font-light">class</span> <span class="font-medium">${G.join(".")}.</span><span class="font-semibold">${j}</span></span></h3>`}else return v?`<div class="flex items-center rounded-xl py-0.5 break-all bg-gradient-to-r from-green-50/60 to-white dark:from-gray-900 dark:to-gray-950 text-green-700 dark:text-green-300 font-medium px-2"><svg class="fill-current text-2xl text-green-500 inline-block" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><circle cx="12.5" cy="12.5" r="7.5" fill-opacity="0.2"></circle><path d="M12.8454 17.4994C12.077 17.4994 11.3929 17.3946 10.7931 17.185C10.1933 16.9779 9.68621 16.6731 9.27188 16.2709C8.85756 15.871 8.542 15.382 8.3252 14.8039C8.1084 14.2257 8 13.5681 8 12.831C8 12.1035 8.1084 11.4435 8.3252 10.8509C8.54441 10.2583 8.86358 9.75005 9.28272 9.32608C9.70187 8.89971 10.2138 8.57211 10.8184 8.34326C11.4254 8.11442 12.1168 8 12.8924 8C13.6103 8 14.251 8.10479 14.8147 8.31436C15.3808 8.52393 15.8602 8.82263 16.2528 9.21046C16.6479 9.59588 16.9478 10.0548 17.1525 10.5871C17.3597 11.1171 17.4621 11.7036 17.4596 12.3468C17.4621 12.79 17.4235 13.1971 17.344 13.5681C17.2645 13.9391 17.1393 14.2631 16.9682 14.5401C16.7996 14.8147 16.578 15.0327 16.3034 15.1941C16.0288 15.3531 15.6963 15.4434 15.3061 15.4651C15.0267 15.4868 14.8002 15.4663 14.6268 15.4037C14.4534 15.341 14.3209 15.2483 14.2293 15.1254C14.1402 15.0002 14.0824 14.8544 14.0559 14.6882H14.0125C13.9547 14.8328 13.8415 14.9641 13.6729 15.0821C13.5043 15.1977 13.2983 15.288 13.055 15.3531C12.8141 15.4157 12.5576 15.4386 12.2854 15.4217C12.0011 15.4049 11.7313 15.3386 11.476 15.223C11.2231 15.1074 10.9978 14.94 10.8003 14.7208C10.6052 14.5015 10.451 14.2305 10.3378 13.9078C10.227 13.585 10.1704 13.2116 10.168 12.7876C10.1704 12.3685 10.2294 12.0035 10.345 11.6928C10.4631 11.3821 10.6184 11.1207 10.8112 10.9087C11.0063 10.6967 11.2231 10.5305 11.4616 10.4101C11.7 10.2896 11.9397 10.2125 12.1806 10.1788C12.4528 10.1379 12.7106 10.1379 12.9538 10.1788C13.1971 10.2198 13.4019 10.286 13.5681 10.3776C13.7367 10.4691 13.8415 10.5679 13.8825 10.6738H13.9331V10.2692H15.064V13.7957C15.0664 13.962 15.1038 14.0908 15.176 14.1824C15.2483 14.2739 15.3459 14.3197 15.4687 14.3197C15.6349 14.3197 15.7734 14.2462 15.8842 14.0993C15.9975 13.9523 16.0818 13.7271 16.1372 13.4236C16.195 13.1201 16.2239 12.7334 16.2239 12.2637C16.2239 11.8108 16.1637 11.4134 16.0432 11.0713C15.9252 10.7268 15.759 10.4342 15.5446 10.1933C15.3326 9.94998 15.0857 9.75246 14.8039 9.6007C14.522 9.44894 14.2161 9.33813 13.8861 9.26827C13.5585 9.19841 13.2212 9.16349 12.8744 9.16349C12.2745 9.16349 11.7506 9.25502 11.3026 9.4381C10.8545 9.61876 10.4811 9.8729 10.1824 10.2005C9.88374 10.5281 9.65971 10.9123 9.51036 11.3532C9.36342 11.7916 9.28875 12.2697 9.28634 12.7876C9.28875 13.3585 9.36824 13.8644 9.52482 14.3052C9.6838 14.7436 9.91746 15.1122 10.2258 15.4109C10.5341 15.7096 10.9147 15.936 11.3676 16.0902C11.8205 16.2444 12.3408 16.3215 12.9286 16.3215C13.2056 16.3215 13.4766 16.301 13.7415 16.26C14.0065 16.2215 14.2462 16.1733 14.4606 16.1155C14.675 16.0601 14.8472 16.0059 14.9773 15.9529L15.335 17.0008C15.1833 17.0875 14.9773 17.1682 14.7171 17.2428C14.4594 17.3199 14.1679 17.3814 13.8427 17.4271C13.5199 17.4753 13.1875 17.4994 12.8454 17.4994ZM12.6792 14.233C12.9731 14.233 13.2068 14.1764 13.3802 14.0631C13.5561 13.9499 13.6813 13.7825 13.756 13.5609C13.8331 13.3369 13.8692 13.061 13.8644 12.7334C13.862 12.4444 13.8247 12.1999 13.7524 11.9999C13.6825 11.7976 13.5609 11.6446 13.3874 11.541C13.2164 11.4351 12.9779 11.3821 12.672 11.3821C12.4046 11.3821 12.177 11.4387 11.9891 11.5519C11.8036 11.6651 11.6615 11.8241 11.5627 12.0288C11.4664 12.2312 11.417 12.4697 11.4146 12.7443C11.417 12.9996 11.4579 13.2417 11.5374 13.4706C11.6169 13.697 11.7482 13.8813 11.9313 14.0234C12.1144 14.1631 12.3637 14.233 12.6792 14.233Z"></path></svg><span class="text-sm text-green-500 mr-1">property</span><span> ${m}</span></div>`:`<h4 class="!m-0"><span class="flex-1 rounded-xl py-0.5 break-all bg-gradient-to-r from-blue-50/60 to-white dark:from-gray-900 dark:to-gray-950 text-blue-700 dark:text-blue-300 font-medium px-2"><svg width="1em" height="1em" viewBox="0 0 32 33" class="mr-1 inline-block -mt-0.5"  xmlns="http://www.w3.org/2000/svg"><path d="M5.80566 18.3545C4.90766 17.4565 4.90766 16.0005 5.80566 15.1025L14.3768 6.53142C15.2748 5.63342 16.7307 5.63342 17.6287 6.53142L26.1999 15.1025C27.0979 16.0005 27.0979 17.4565 26.1999 18.3545L17.6287 26.9256C16.7307 27.8236 15.2748 27.8236 14.3768 26.9256L5.80566 18.3545Z" fill="currentColor" fill-opacity="0.25"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.4801 13.9619C16.4801 12.9761 16.7467 12.5436 16.9443 12.3296C17.1764 12.078 17.5731 11.8517 18.2275 11.707C18.8821 11.5623 19.638 11.5342 20.4038 11.5582C20.7804 11.57 21.1341 11.5932 21.4719 11.6156L21.5263 11.6193C21.8195 11.6389 22.1626 11.6618 22.4429 11.6618V7.40825C22.3209 7.40825 22.1219 7.39596 21.7544 7.37149C21.4202 7.34925 20.9976 7.32115 20.5371 7.30672C19.6286 7.27824 18.4672 7.29779 17.3093 7.55377C16.1512 7.8098 14.8404 8.33724 13.8181 9.4452C12.7612 10.5907 12.2266 12.1236 12.2266 13.9619V15.0127H10.6836V19.2662H12.2266V26.6332H16.4801V19.2662H20.3394V15.0127H16.4801V13.9619Z" fill="currentColor"/></svg>${m}</span></h4>`}function S(){var G;const{hash:m}=window.location;l(0,f=m.substring(1)),Y&&Y.classList.remove(...X.split(" ")),f===t&&(Y=(G=document.getElementById(f))==null?void 0:G.closest(".docstring"),Y&&Y.classList.add(...X.split(" ")))}const N=m=>M(`${t}.${m}`,!!q[m]),V=()=>M(`${t}.${T}`,!!h),I=()=>l(13,H=!1);function E(m){Je[m?"unshift":"push"](()=>{y=m,l(12,y)})}return s.$$set=m=>{"anchor"in m&&l(9,t=m.anchor),"name"in m&&l(10,n=m.name),"parameters"in m&&l(1,d=m.parameters),"parametersDescription"in m&&l(11,u=m.parametersDescription),"parameterGroups"in m&&l(2,c=m.parameterGroups),"returnDescription"in m&&l(3,h=m.returnDescription),"returnType"in m&&l(4,_=m.returnType),"isYield"in m&&l(20,o=m.isYield),"raiseDescription"in m&&l(5,i=m.raiseDescription),"raiseType"in m&&l(6,a=m.raiseType),"source"in m&&l(7,r=m.source),"hashlink"in m&&l(0,f=m.hashlink),"isGetSetDescriptor"in m&&l(8,v=m.isGetSetDescriptor)},[f,d,c,h,_,i,a,r,v,t,n,u,y,H,q,W,T,M,D,S,o,N,V,I,E]}class n1 extends De{constructor(e){super();Ve(this,e,s1,t1,Ie,{anchor:9,name:10,parameters:1,parametersDescription:11,parameterGroups:2,returnDescription:3,returnType:4,isYield:20,raiseDescription:5,raiseType:6,source:7,hashlink:0,isGetSetDescriptor:8},null,[-1,-1])}}export{n1 as D};
