var rt=Object.defineProperty,st=Object.defineProperties;var nt=Object.getOwnPropertyDescriptors;var be=Object.getOwnPropertySymbols;var it=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable;var ke=(a,e,t)=>e in a?rt(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,we=(a,e)=>{for(var t in e||(e={}))it.call(e,t)&&ke(a,t,e[t]);if(be)for(var t of be(e))ot.call(e,t)&&ke(a,t,e[t]);return a},Ee=(a,e)=>st(a,nt(e));import{S as Re,i as Ye,s as je,e as v,c as b,a as k,d as h,b as m,f as se,g as S,l as J,K as ye,t as z,h as B,J as d,Y as qe,P as he,j as ne,Z as Ue,Q as Xe,k as L,m as C,_ as Ze,$ as Oe,q as X,w as We,x as Fe,y as Je,o as F,B as Ke,n as Qe,p as $e,V as de,T as et,U as tt,v as ft,E as ct,a0 as ut}from"./vendor-e859c359.js";import{I as lt}from"./IconCopyLink-5fae3b20.js";function Pe(a){let e,t;return{c(){e=v("div"),this.h()},l(l){e=b(l,"DIV",{class:!0,style:!0,id:!0});var s=k(e);s.forEach(h),this.h()},h(){m(e,"class",t="absolute text-base py-1.5 p-2 break-words bg-white border-2 border-black dark:border-gray-500 rounded shadow-alternate-xl z-50 "+(a[0].length>1e3?"max-w-lg":"max-w-xs")),se(e,"top",a[2]+15+"px"),se(e,"left",a[1]+15+"px"),m(e,"id",a[3])},m(l,s){S(l,e,s),e.innerHTML=a[0]},p(l,s){s&1&&(e.innerHTML=l[0]),s&1&&t!==(t="absolute text-base py-1.5 p-2 break-words bg-white border-2 border-black dark:border-gray-500 rounded shadow-alternate-xl z-50 "+(l[0].length>1e3?"max-w-lg":"max-w-xs"))&&m(e,"class",t),s&4&&se(e,"top",l[2]+15+"px"),s&2&&se(e,"left",l[1]+15+"px"),s&8&&m(e,"id",l[3])},d(l){l&&h(e)}}}function ht(a){let e,t=a[0]&&Pe(a);return{c(){t&&t.c(),e=J()},l(l){t&&t.l(l),e=J()},m(l,s){t&&t.m(l,s),S(l,e,s)},p(l,[s]){l[0]?t?t.p(l,s):(t=Pe(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:ye,o:ye,d(l){t&&t.d(l),l&&h(e)}}}function dt(a,e,t){let{txt:l}=e,{x:s}=e,{y:f}=e,{id:n}=e;return a.$$set=o=>{"txt"in o&&t(0,l=o.txt),"x"in o&&t(1,s=o.x),"y"in o&&t(2,f=o.y),"id"in o&&t(3,n=o.id)},[l,s,f,n]}class pt extends Re{constructor(e){super();Ye(this,e,dt,ht,je,{txt:0,x:1,y:2,id:3})}}const Le="docstring-tooltip";function at(a,e){let t;function l(o){n(),t=new pt({props:{txt:e,x:o.pageX,y:o.pageY,id:Le},target:document.body})}function s(o){t.$set({x:o.pageX,y:o.pageY})}function f(){t.$destroy()}function n(){var u;const o=document.getElementById(Le);o&&((u=o.parentNode)==null||u.removeChild(o))}return a.addEventListener("mouseover",l),a.addEventListener("mouseleave",f),a.addEventListener("mousemove",s),{destroy(){a.removeEventListener("mouseover",l),a.removeEventListener("mouseleave",f),a.removeEventListener("mousemove",s)}}}function Ce(a,e,t){const l=a.slice();return l[16]=e[t].title,l[7]=e[t].parametersDescription,l}function Ae(a,e,t){const l=a.slice();return l[5]=e[t].anchor,l[19]=e[t].description,l}function Ne(a,e,t){const l=a.slice();return l[6]=e[t].name,l[22]=e[t].val,l}function Se(a){let e,t,l=a[6]+"",s,f,n=a[22]+"",o,u,p,r,i;function c(){return a[12](a[6])}return{c(){e=v("span"),t=v("span"),s=z(l),f=v("span"),o=z(n),this.h()},l(g){e=b(g,"SPAN",{class:!0});var E=k(e);t=b(E,"SPAN",{class:!0});var I=k(t);s=B(I,l),f=b(I,"SPAN",{class:!0});var G=k(f);o=B(G,n),G.forEach(h),I.forEach(h),E.forEach(h),this.h()},h(){m(f,"class","opacity-60"),m(t,"class","rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"),m(e,"class",u="comma "+(a[10][a[6]]?"cursor-pointer":"cursor-default"))},m(g,E){S(g,e,E),d(e,t),d(t,s),d(t,f),d(f,o),r||(i=[qe(p=at.call(null,e,a[10][a[6]]||"")),he(e,"click",Ze(Oe(c)))],r=!0)},p(g,E){a=g,E&1&&l!==(l=a[6]+"")&&ne(s,l),E&1&&n!==(n=a[22]+"")&&ne(o,n),E&1&&u!==(u="comma "+(a[10][a[6]]?"cursor-pointer":"cursor-default"))&&m(e,"class",u),p&&Ue(p.update)&&E&1&&p.update.call(null,a[10][a[6]]||"")},d(g){g&&h(e),r=!1,Xe(i)}}}function Me(a){let e,t,l,s,f=Ge(a[3])+"",n,o,u,p;return{c(){e=v("span"),t=z("\u2192"),l=L(),s=v("span"),this.h()},l(r){e=b(r,"SPAN",{class:!0});var i=k(e);t=B(i,"\u2192"),i.forEach(h),l=C(r),s=b(r,"SPAN",{class:!0});var c=k(s);c.forEach(h),this.h()},h(){m(e,"class","font-bold"),m(s,"class",n="rounded hover:bg-gray-400 "+(a[2]?"cursor-pointer":"cursor-default"))},m(r,i){S(r,e,i),d(e,t),S(r,l,i),S(r,s,i),s.innerHTML=f,u||(p=[qe(o=at.call(null,s,a[2]||"")),he(s,"click",Ze(Oe(a[13])))],u=!0)},p(r,i){i&8&&f!==(f=Ge(r[3])+"")&&(s.innerHTML=f),i&4&&n!==(n="rounded hover:bg-gray-400 "+(r[2]?"cursor-pointer":"cursor-default"))&&m(s,"class",n),o&&Ue(o.update)&&i&4&&o.update.call(null,r[2]||"")},d(r){r&&h(e),r&&h(l),r&&h(s),u=!1,Xe(p)}}}function Te(a){var p;let e,t,l,s=((p=a[7])==null?void 0:p.length)+"",f,n,o,u;return{c(){e=v("div"),t=v("button"),l=z("Expand "),f=z(s),n=z(" parameters"),this.h()},l(r){e=b(r,"DIV",{class:!0});var i=k(e);t=b(i,"BUTTON",{class:!0});var c=k(t);l=B(c,"Expand "),f=B(c,s),n=B(c," parameters"),c.forEach(h),i.forEach(h),this.h()},h(){m(t,"class","absolute leading-tight px-3 py-1.5 dark:bg-gray-900 bg-black text-gray-200 hover:text-white rounded-xl bottom-12 ring-offset-2 hover:ring-black hover:ring-2"),m(e,"class","absolute inset-0 bg-gradient-to-t from-white to-white/0 dark:from-gray-950 dark:to-gray-950/0 z-10 flex justify-center")},m(r,i){S(r,e,i),d(e,t),d(t,l),d(t,f),d(t,n),o||(u=he(t,"click",a[14]),o=!0)},p(r,i){var c;i&128&&s!==(s=((c=r[7])==null?void 0:c.length)+"")&&ne(f,s)},d(r){r&&h(e),o=!1,u()}}}function He(a){let e,t,l,s,f,n,o=a[7],u=[];for(let r=0;r<o.length;r+=1)u[r]=Ve(Ae(a,o,r));const p=r=>F(u[r],1,1,()=>{u[r]=null});return{c(){e=v("p"),t=z("Parameters "),l=v("span"),s=L(),f=v("ul");for(let r=0;r<u.length;r+=1)u[r].c();this.h()},l(r){e=b(r,"P",{class:!0});var i=k(e);t=B(i,"Parameters "),l=b(i,"SPAN",{class:!0}),k(l).forEach(h),i.forEach(h),s=C(r),f=b(r,"UL",{class:!0});var c=k(f);for(let g=0;g<u.length;g+=1)u[g].l(c);c.forEach(h),this.h()},h(){m(l,"class","flex-auto border-t-2 border-gray-100 dark:border-gray-700 ml-3"),m(e,"class","flex items-center font-semibold !mt-2 !mb-2 text-gray-800"),m(f,"class","px-2")},m(r,i){S(r,e,i),d(e,t),d(e,l),S(r,s,i),S(r,f,i);for(let c=0;c<u.length;c+=1)u[c].m(f,null);n=!0},p(r,i){if(i&128){o=r[7];let c;for(c=0;c<o.length;c+=1){const g=Ae(r,o,c);u[c]?(u[c].p(g,i),X(u[c],1)):(u[c]=Ve(g),u[c].c(),X(u[c],1),u[c].m(f,null))}for(Qe(),c=o.length;c<u.length;c+=1)p(c);$e()}},i(r){if(!n){for(let i=0;i<o.length;i+=1)X(u[i]);n=!0}},o(r){u=u.filter(Boolean);for(let i=0;i<u.length;i+=1)F(u[i]);n=!1},d(r){r&&h(e),r&&h(s),r&&h(f),de(u,r)}}}function Ve(a){let e,t,l,s,f,n,o,u,p,r=a[19]+"",i,c;return f=new lt({props:{classNames:"text-smd"}}),{c(){e=v("li"),t=v("span"),l=v("a"),s=v("span"),We(f.$$.fragment),u=L(),p=v("span"),i=L(),this.h()},l(g){e=b(g,"LI",{class:!0});var E=k(e);t=b(E,"SPAN",{class:!0});var I=k(t);l=b(I,"A",{id:!0,class:!0,href:!0});var G=k(l);s=b(G,"SPAN",{});var R=k(s);Fe(f.$$.fragment,R),R.forEach(h),G.forEach(h),u=C(I),p=b(I,"SPAN",{});var Z=k(p);Z.forEach(h),I.forEach(h),i=C(E),E.forEach(h),this.h()},h(){m(l,"id",n=a[5]),m(l,"class","header-link block pr-0.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(l,"href",o=`#${a[5]}`),m(t,"class","group flex space-x-1.5 items-start"),m(e,"class","text-base !pl-4")},m(g,E){S(g,e,E),d(e,t),d(t,l),d(l,s),Je(f,s,null),d(t,u),d(t,p),p.innerHTML=r,d(e,i),c=!0},p(g,E){(!c||E&128&&n!==(n=g[5]))&&m(l,"id",n),(!c||E&128&&o!==(o=`#${g[5]}`))&&m(l,"href",o),(!c||E&128)&&r!==(r=g[19]+"")&&(p.innerHTML=r)},i(g){c||(X(f.$$.fragment,g),c=!0)},o(g){F(f.$$.fragment,g),c=!1},d(g){g&&h(e),Ke(f)}}}function xe(a){let e,t=a[1],l=[];for(let s=0;s<t.length;s+=1)l[s]=De(Ce(a,t,s));return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=J()},l(s){for(let f=0;f<l.length;f+=1)l[f].l(s);e=J()},m(s,f){for(let n=0;n<l.length;n+=1)l[n].m(s,f);S(s,e,f)},p(s,f){if(f&2){t=s[1];let n;for(n=0;n<t.length;n+=1){const o=Ce(s,t,n);l[n]?l[n].p(o,f):(l[n]=De(o),l[n].c(),l[n].m(e.parentNode,e))}for(;n<l.length;n+=1)l[n].d(1);l.length=t.length}},d(s){de(l,s),s&&h(e)}}}function De(a){let e,t=a[16]+"",l,s,f,n,o,u=a[7]+"";return{c(){e=v("p"),l=z(t),s=L(),f=v("span"),n=L(),o=v("p"),this.h()},l(p){e=b(p,"P",{class:!0});var r=k(e);l=B(r,t),s=C(r),f=b(r,"SPAN",{class:!0}),k(f).forEach(h),r.forEach(h),n=C(p),o=b(p,"P",{});var i=k(o);i.forEach(h),this.h()},h(){m(f,"class","flex-auto border-t-2 ml-3"),m(e,"class","flex items-center font-semibold")},m(p,r){S(p,e,r),d(e,l),d(e,s),d(e,f),S(p,n,r),S(p,o,r),o.innerHTML=u},p(p,r){r&2&&t!==(t=p[16]+"")&&ne(l,t),r&2&&u!==(u=p[7]+"")&&(o.innerHTML=u)},d(p){p&&h(e),p&&h(n),p&&h(o)}}}function Ie(a){let e,t,l,s,f,n,o,u,p,r=!!a[3]&&ze(a);return{c(){e=v("div"),t=v("p"),l=z("Returns"),s=L(),r&&r.c(),f=L(),n=v("span"),u=L(),p=v("p"),this.h()},l(i){e=b(i,"DIV",{class:!0,id:!0});var c=k(e);t=b(c,"P",{class:!0});var g=k(t);l=B(g,"Returns"),g.forEach(h),s=C(c),r&&r.l(c),f=C(c),n=b(c,"SPAN",{class:!0}),k(n).forEach(h),c.forEach(h),u=C(i),p=b(i,"P",{class:!0});var E=k(p);E.forEach(h),this.h()},h(){m(t,"class","text-base"),m(n,"class","flex-auto border-t-2 border-gray-100 dark:border-gray-700"),m(e,"class","flex items-center font-semibold space-x-3 text-base !mt-0 !mb-0 text-gray-800"),m(e,"id",o=`${a[5]}.returns`),m(p,"class","text-base")},m(i,c){S(i,e,c),d(e,t),d(t,l),d(e,s),r&&r.m(e,null),d(e,f),d(e,n),S(i,u,c),S(i,p,c),p.innerHTML=a[2]},p(i,c){i[3]?r?r.p(i,c):(r=ze(i),r.c(),r.m(e,f)):r&&(r.d(1),r=null),c&32&&o!==(o=`${i[5]}.returns`)&&m(e,"id",o),c&4&&(p.innerHTML=i[2])},d(i){i&&h(e),r&&r.d(),i&&h(u),i&&h(p)}}}function ze(a){let e,t;return{c(){e=new et,t=J(),this.h()},l(l){e=tt(l),t=J(),this.h()},h(){e.a=t},m(l,s){e.m(a[3],l,s),S(l,t,s)},p(l,s){s&8&&e.p(l[3])},d(l){l&&h(t),l&&e.d()}}}function mt(a){let e,t,l,s=Be(a[6])+"",f,n,o,u,p,r,i,c,g,E,I,G,R,Z,w,A,j,K,ie,ee,Q,oe,fe,ce,M,te,le,ae,re,Y;o=new lt({});let O=a[0],T=[];for(let _=0;_<O.length;_+=1)T[_]=Se(Ne(a,O,_));let H=a[3]&&Me(a),V=a[9]&&Te(a),N=!!a[7]&&He(a),x=a[1]&&xe(a),D=!!a[2]&&Ie(a);return{c(){e=v("div"),t=v("span"),l=new et,f=L(),n=v("a"),We(o.$$.fragment),p=L(),r=v("a"),i=v("span"),c=z("<"),g=L(),E=v("span"),I=z("source"),G=L(),R=v("span"),Z=z(">"),w=L(),A=v("p"),j=v("span"),K=z("("),ie=L();for(let _=0;_<T.length;_+=1)T[_].c();ee=L(),Q=v("span"),oe=z(")"),fe=L(),H&&H.c(),ce=L(),M=v("div"),V&&V.c(),te=L(),N&&N.c(),le=L(),x&&x.c(),ae=L(),D&&D.c(),this.h()},l(_){e=b(_,"DIV",{});var y=k(e);t=b(y,"SPAN",{class:!0,id:!0});var P=k(t);l=tt(P),f=C(P),n=b(P,"A",{id:!0,class:!0,href:!0});var $=k(n);Fe(o.$$.fragment,$),$.forEach(h),p=C(P),r=b(P,"A",{class:!0,href:!0,target:!0});var W=k(r);i=b(W,"SPAN",{});var pe=k(i);c=B(pe,"<"),pe.forEach(h),g=C(W),E=b(W,"SPAN",{class:!0});var me=k(E);I=B(me,"source"),me.forEach(h),G=C(W),R=b(W,"SPAN",{});var _e=k(R);Z=B(_e,">"),_e.forEach(h),W.forEach(h),P.forEach(h),w=C(y),A=b(y,"P",{class:!0});var q=k(A);j=b(q,"SPAN",{});var ge=k(j);K=B(ge,"("),ge.forEach(h),ie=C(q);for(let ue=0;ue<T.length;ue+=1)T[ue].l(q);ee=C(q),Q=b(q,"SPAN",{});var ve=k(Q);oe=B(ve,")"),ve.forEach(h),fe=C(q),H&&H.l(q),q.forEach(h),ce=C(y),M=b(y,"DIV",{class:!0});var U=k(M);V&&V.l(U),te=C(U),N&&N.l(U),le=C(U),x&&x.l(U),ae=C(U),D&&D.l(U),U.forEach(h),y.forEach(h),this.h()},h(){l.a=f,m(n,"id",a[5]),m(n,"class","header-link invisible with-hover:group-hover:visible pr-2"),m(n,"href",u="#"+a[5]),m(E,"class","hidden md:block mx-0.5 hover:!underline"),m(r,"class","!ml-auto !text-gray-400 !no-underline text-sm flex items-center"),m(r,"href",a[4]),m(r,"target","_blank"),m(t,"class","group flex space-x-1.5 items-center text-gray-800 bg-gradient-to-r rounded-tr-lg -mt-4 -ml-4 pt-3 px-2.5"),m(t,"id",a[5]),m(A,"class","font-mono text-xs md:text-sm !leading-relaxed !my-6"),m(M,"class",re="!mb-10 relative docstring-details "+(a[9]?"max-h-96 overflow-hidden":""))},m(_,y){S(_,e,y),d(e,t),l.m(s,t),d(t,f),d(t,n),Je(o,n,null),d(t,p),d(t,r),d(r,i),d(i,c),d(r,g),d(r,E),d(E,I),d(r,G),d(r,R),d(R,Z),d(e,w),d(e,A),d(A,j),d(j,K),d(A,ie);for(let P=0;P<T.length;P+=1)T[P].m(A,null);d(A,ee),d(A,Q),d(Q,oe),d(A,fe),H&&H.m(A,null),d(e,ce),d(e,M),V&&V.m(M,null),d(M,te),N&&N.m(M,null),d(M,le),x&&x.m(M,null),d(M,ae),D&&D.m(M,null),a[15](M),Y=!0},p(_,[y]){if((!Y||y&64)&&s!==(s=Be(_[6])+"")&&l.p(s),(!Y||y&32)&&m(n,"id",_[5]),(!Y||y&32&&u!==(u="#"+_[5]))&&m(n,"href",u),(!Y||y&16)&&m(r,"href",_[4]),(!Y||y&32)&&m(t,"id",_[5]),y&3105){O=_[0];let P;for(P=0;P<O.length;P+=1){const $=Ne(_,O,P);T[P]?T[P].p($,y):(T[P]=Se($),T[P].c(),T[P].m(A,ee))}for(;P<T.length;P+=1)T[P].d(1);T.length=O.length}_[3]?H?H.p(_,y):(H=Me(_),H.c(),H.m(A,null)):H&&(H.d(1),H=null),_[9]?V?V.p(_,y):(V=Te(_),V.c(),V.m(M,te)):V&&(V.d(1),V=null),_[7]?N?(N.p(_,y),y&128&&X(N,1)):(N=He(_),N.c(),X(N,1),N.m(M,le)):N&&(Qe(),F(N,1,1,()=>{N=null}),$e()),_[1]?x?x.p(_,y):(x=xe(_),x.c(),x.m(M,ae)):x&&(x.d(1),x=null),_[2]?D?D.p(_,y):(D=Ie(_),D.c(),D.m(M,null)):D&&(D.d(1),D=null),(!Y||y&512&&re!==(re="!mb-10 relative docstring-details "+(_[9]?"max-h-96 overflow-hidden":"")))&&m(M,"class",re)},i(_){Y||(X(o.$$.fragment,_),X(N),Y=!0)},o(_){F(o.$$.fragment,_),F(N),Y=!1},d(_){_&&h(e),Ke(o),de(T,_),H&&H.d(),V&&V.d(),N&&N.d(),x&&x.d(),D&&D.d(),a[15](null)}}}function Be(a){if(a.startsWith("class ")){const e=a.substring(6).split("."),t=e.pop();return`<span class="flex-1 break-all md:text-lg bg-gradient-to-r px-2.5 py-1.5 rounded-xl from-indigo-50/70 to-white dark:from-gray-900 dark:to-gray-950 dark:text-indigo-300 text-indigo-700"><svg class="mr-1.5 text-indigo-500 inline-block -mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width=".8em" height=".8em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path class="uim-quaternary" d="M20.23 7.24L12 12L3.77 7.24a1.98 1.98 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71z" opacity=".25" fill="currentColor"></path><path class="uim-tertiary" d="M12 12v9.5a2.09 2.09 0 0 1-.91-.21L4.5 17.48a2.003 2.003 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01L12 12z" opacity=".5" fill="currentColor"></path><path class="uim-primary" d="M20.5 8.25v7.5a2.003 2.003 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01z" fill="currentColor"></path></svg><span class="font-light">class</span> <span class="font-medium">${e.join(".")}.</span><span class="font-semibold">${t}</span></span>`}else return`<span class="flex-1 rounded-xl py-0.5 break-all bg-gradient-to-r from-blue-50/60 to-white dark:from-gray-900 dark:to-gray-950 text-blue-700 dark:text-blue-300 font-medium px-2"><svg width="1em" height="1em" viewBox="0 0 32 33" class="mr-1 inline-block -mt-0.5"  xmlns="http://www.w3.org/2000/svg"><path d="M5.80566 18.3545C4.90766 17.4565 4.90766 16.0005 5.80566 15.1025L14.3768 6.53142C15.2748 5.63342 16.7307 5.63342 17.6287 6.53142L26.1999 15.1025C27.0979 16.0005 27.0979 17.4565 26.1999 18.3545L17.6287 26.9256C16.7307 27.8236 15.2748 27.8236 14.3768 26.9256L5.80566 18.3545Z" fill="currentColor" fill-opacity="0.25"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.4801 13.9619C16.4801 12.9761 16.7467 12.5436 16.9443 12.3296C17.1764 12.078 17.5731 11.8517 18.2275 11.707C18.8821 11.5623 19.638 11.5342 20.4038 11.5582C20.7804 11.57 21.1341 11.5932 21.4719 11.6156L21.5263 11.6193C21.8195 11.6389 22.1626 11.6618 22.4429 11.6618V7.40825C22.3209 7.40825 22.1219 7.39596 21.7544 7.37149C21.4202 7.34925 20.9976 7.32115 20.5371 7.30672C19.6286 7.27824 18.4672 7.29779 17.3093 7.55377C16.1512 7.8098 14.8404 8.33724 13.8181 9.4452C12.7612 10.5907 12.2266 12.1236 12.2266 13.9619V15.0127H10.6836V19.2662H12.2266V26.6332H16.4801V19.2662H20.3394V15.0127H16.4801V13.9619Z" fill="currentColor"/></svg>${a}</span>`}function Ge(a){const e=/\s*<p>(((?!<p>).)*)<\/p>\s*/gms;return a.replace(e,(t,l)=>`<span>${l}</span>`)}function _t(a,e,t){let{anchor:l}=e,{name:s}=e,{parameters:f=[]}=e,{parametersDescription:n}=e,{parameterGroups:o}=e,{returnDescription:u}=e,{returnType:p}=e,{source:r}=e,i,c=!1;const g=(n==null?void 0:n.reduce((w,A)=>{const{name:j,description:K}=A;return Ee(we({},w),{[j]:K})},{}))||{};ft(()=>{const{hash:w}=window.location,A=!!w&&(n==null?void 0:n.some(({anchor:j})=>j===w.substring(1)));t(9,c=!A&&i.clientHeight>500)});async function E(w,A){A&&(t(9,c=!1),await ct(),window.location.hash=w)}const I=w=>E(`${l}.${w}`,!!g[w]),G=()=>E(`${l}.returns`,!!u),R=()=>t(9,c=!1);function Z(w){ut[w?"unshift":"push"](()=>{i=w,t(8,i)})}return a.$$set=w=>{"anchor"in w&&t(5,l=w.anchor),"name"in w&&t(6,s=w.name),"parameters"in w&&t(0,f=w.parameters),"parametersDescription"in w&&t(7,n=w.parametersDescription),"parameterGroups"in w&&t(1,o=w.parameterGroups),"returnDescription"in w&&t(2,u=w.returnDescription),"returnType"in w&&t(3,p=w.returnType),"source"in w&&t(4,r=w.source)},[f,o,u,p,r,l,s,n,i,c,g,E,I,G,R,Z]}class kt extends Re{constructor(e){super();Ye(this,e,_t,mt,je,{anchor:5,name:6,parameters:0,parametersDescription:7,parameterGroups:1,returnDescription:2,returnType:3,source:4})}}export{kt as D};
