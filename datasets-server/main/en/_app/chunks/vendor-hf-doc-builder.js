function h(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function q(){return Object.create(null)}function b(t){t.forEach(z)}function I(t){return typeof t=="function"}function G(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function J(t){return Object.keys(t).length===0}function K(t,...n){if(t==null)return h;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function st(t,n,e){t.$$.on_destroy.push(K(n,e))}function lt(t,n,e,i){if(t){const c=B(t,n,e,i);return t[0](c)}}function B(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],o=Math.max(n.dirty.length,c.length);for(let u=0;u<o;u+=1)l[u]=n.dirty[u]|c[u];return l}return n.dirty|c}return n.dirty}function at(t,n,e,i,c,l){if(c){const o=B(n,e,i,l);t.p(o,c)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function _t(t,n,e){return t.set(e),n}let E=!1;function Q(){E=!0}function R(){E=!1}function U(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const s=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=s?c+1:U(1,c,g=>n[e[g]].claim_order,s))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const l=[],o=[];let u=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(l.push(n[r-1]);u>=r;u--)o.push(n[u]);u--}for(;u>=0;u--)o.push(n[u]);l.reverse(),o.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<o.length;r++){for(;s<l.length&&o[r].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(o[r],a)}}function V(t,n){if(E){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ht(t,n,e){E&&!e?V(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function X(t){t.parentNode.removeChild(t)}function mt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function pt(){return j(" ")}function yt(){return j("")}function bt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function gt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,n,e,i,c=!1){nt(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(n(u)){const r=e(u);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(n(u)){const r=e(u);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function O(t,n,e,i){return L(t,c=>c.nodeName===n,c=>{const l=[];for(let o=0;o<c.attributes.length;o++){const u=c.attributes[o];e[u.name]||l.push(u.name)}l.forEach(o=>c.removeAttribute(o))},()=>i(n))}function xt(t,n,e){return O(t,n,e,Y)}function $t(t,n,e){return O(t,n,e,Z)}function et(t,n){return L(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function wt(t){return et(t," ")}function Et(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function St(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function kt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let y;function p(t){y=t}function S(){if(!y)throw new Error("Function called outside component initialization");return y}function At(t){S().$$.on_mount.push(t)}function Nt(t){S().$$.after_update.push(t)}function jt(t){S().$$.on_destroy.push(t)}function vt(t,n){S().$$.context.set(t,n)}const m=[],M=[],$=[],T=[],P=Promise.resolve();let A=!1;function D(){A||(A=!0,P.then(F))}function Ct(){return D(),P}function N(t){$.push(t)}const k=new Set;let x=0;function F(){const t=y;do{for(;x<m.length;){const n=m[x];x++,p(n),it(n.$$)}for(p(null),m.length=0,x=0;M.length;)M.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];k.has(e)||(k.add(e),e())}$.length=0}while(m.length);for(;T.length;)T.pop()();A=!1,k.clear(),p(t)}function it(t){if(t.fragment!==null){t.update(),b(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const w=new Set;let d;function qt(){d={r:0,c:[],p:d}}function Mt(){d.r||b(d.c),d=d.p}function rt(t,n){t&&t.i&&(w.delete(t),t.i(n))}function Tt(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function zt(t,n){const e={},i={},c={$$scope:1};let l=t.length;for(;l--;){const o=t[l],u=n[l];if(u){for(const r in o)r in u||(i[r]=1);for(const r in u)c[r]||(e[r]=u[r],c[r]=1);t[l]=u}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Bt(t){return typeof t=="object"&&t!==null?t:{}}function Lt(t){t&&t.c()}function Ot(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:c,on_mount:l,on_destroy:o,after_update:u}=t.$$;c&&c.m(n,e),i||N(()=>{const r=l.map(z).filter(I);o?o.push(...r):b(r),t.$$.on_mount=[]}),u.forEach(N)}function ot(t,n){const e=t.$$;e.fragment!==null&&(b(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(m.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Pt(t,n,e,i,c,l,o,u=[-1]){const r=y;p(t);const s=t.$$={fragment:null,ctx:null,props:l,update:h,not_equal:c,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:q(),dirty:u,skip_bound:!1,root:n.target||r.$$.root};o&&o(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,g,...v)=>{const C=v.length?v[0]:g;return s.ctx&&c(s.ctx[f],s.ctx[f]=C)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](C),a&&ut(t,f)),g}):[],s.update(),a=!0,b(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){Q();const f=tt(n.target);s.fragment&&s.fragment.l(f),f.forEach(X)}else s.fragment&&s.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),R(),F()}p(r)}class Dt{$destroy(){ot(this,1),this.$destroy=h}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!J(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const _=[];function Ft(t,n=h){let e;const i=new Set;function c(u){if(G(t,u)&&(t=u,e)){const r=!_.length;for(const s of i)s[1](),_.push(s,t);if(r){for(let s=0;s<_.length;s+=2)_[s][0](_[s+1]);_.length=0}}}function l(u){c(u(t))}function o(u,r=h){const s=[u,r];return i.add(s),i.size===1&&(e=n(c)||h),u(t),()=>{i.delete(s),i.size===0&&(e(),e=null)}}return{set:c,update:l,subscribe:o}}export{Bt as A,ot as B,H as C,Ft as D,Ct as E,lt as F,V as G,at as H,dt as I,ft as J,mt as K,h as L,kt as M,Z as N,$t as O,bt as P,jt as Q,b as R,Dt as S,st as T,_t as U,tt as a,gt as b,xt as c,X as d,Y as e,St as f,ht as g,et as h,Pt as i,Et as j,pt as k,yt as l,wt as m,qt as n,Tt as o,Mt as p,rt as q,vt as r,G as s,j as t,Nt as u,At as v,Lt as w,Ot as x,ct as y,zt as z};
