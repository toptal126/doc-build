function h(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function M(){return Object.create(null)}function b(t){t.forEach(B)}function G(t){return typeof t=="function"}function J(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function lt(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function K(t){return Object.keys(t).length===0}function Q(t,...n){if(t==null)return h;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(Q(n,e))}function at(t,n,e,i){if(t){const c=L(t,n,e,i);return t[0](c)}}function L(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],o=Math.max(n.dirty.length,c.length);for(let u=0;u<o;u+=1)l[u]=n.dirty[u]|c[u];return l}return n.dirty|c}return n.dirty}function dt(t,n,e,i,c,l){if(c){const o=L(n,e,i,l);t.p(o,c)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function mt(t,n,e){return t.set(e),n}let S=!1;function R(){S=!0}function U(){S=!1}function V(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const s=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=s?c+1:V(1,c,g=>n[e[g]].claim_order,s))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const l=[],o=[];let u=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(l.push(n[r-1]);u>=r;u--)o.push(n[u]);u--}for(;u>=0;u--)o.push(n[u]);l.reverse(),o.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<o.length;r++){for(;s<l.length&&o[r].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(o[r],a)}}function X(t,n){if(S){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function pt(t,n,e){S&&!e?X(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Y(t){t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Z(t){return document.createElement(t)}function tt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function bt(){return v(" ")}function gt(){return v("")}function xt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function $t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function nt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,c=!1){et(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(n(u)){const r=e(u);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(n(u)){const r=e(u);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function P(t,n,e,i){return O(t,c=>c.nodeName===n,c=>{const l=[];for(let o=0;o<c.attributes.length;o++){const u=c.attributes[o];e[u.name]||l.push(u.name)}l.forEach(o=>c.removeAttribute(o))},()=>i(n))}function wt(t,n,e){return P(t,n,e,Z)}function Et(t,n,e){return P(t,n,e,tt)}function it(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function St(t){return it(t," ")}function kt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function At(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Nt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let y;function p(t){y=t}function k(){if(!y)throw new Error("Function called outside component initialization");return y}function jt(t){k().$$.on_mount.push(t)}function vt(t){k().$$.after_update.push(t)}function qt(t){k().$$.on_destroy.push(t)}function Ct(t,n){k().$$.context.set(t,n)}const m=[],T=[],w=[],z=[],D=Promise.resolve();let N=!1;function F(){N||(N=!0,D.then(H))}function Mt(){return F(),D}function j(t){w.push(t)}const A=new Set;let $=0;function H(){const t=y;do{for(;$<m.length;){const n=m[$];$++,p(n),rt(n.$$)}for(p(null),m.length=0,$=0;T.length;)T.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];A.has(e)||(A.add(e),e())}w.length=0}while(m.length);for(;z.length;)z.pop()();N=!1,A.clear(),p(t)}function rt(t){if(t.fragment!==null){t.update(),b(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const E=new Set;let _;function Tt(){_={r:0,c:[],p:_}}function zt(){_.r||b(_.c),_=_.p}function ct(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Bt(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Lt(t,n){const e={},i={},c={$$scope:1};let l=t.length;for(;l--;){const o=t[l],u=n[l];if(u){for(const r in o)r in u||(i[r]=1);for(const r in u)c[r]||(e[r]=u[r],c[r]=1);t[l]=u}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Ot(t){return typeof t=="object"&&t!==null?t:{}}function Pt(t){t&&t.c()}function Dt(t,n){t&&t.l(n)}function ot(t,n,e,i){const{fragment:c,on_mount:l,on_destroy:o,after_update:u}=t.$$;c&&c.m(n,e),i||j(()=>{const r=l.map(B).filter(G);o?o.push(...r):b(r),t.$$.on_mount=[]}),u.forEach(j)}function ut(t,n){const e=t.$$;e.fragment!==null&&(b(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function st(t,n){t.$$.dirty[0]===-1&&(m.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ft(t,n,e,i,c,l,o,u=[-1]){const r=y;p(t);const s=t.$$={fragment:null,ctx:null,props:l,update:h,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:n.target||r.$$.root};o&&o(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,g,...q)=>{const C=q.length?q[0]:g;return s.ctx&&c(s.ctx[f],s.ctx[f]=C)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](C),a&&st(t,f)),g}):[],s.update(),a=!0,b(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){R();const f=nt(n.target);s.fragment&&s.fragment.l(f),f.forEach(Y)}else s.fragment&&s.fragment.c();n.intro&&ct(t.$$.fragment),ot(t,n.target,n.anchor,n.customElement),U(),H()}p(r)}class Ht{$destroy(){ut(this,1),this.$destroy=h}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!K(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const d=[];function It(t,n=h){let e;const i=new Set;function c(u){if(J(t,u)&&(t=u,e)){const r=!d.length;for(const s of i)s[1](),d.push(s,t);if(r){for(let s=0;s<d.length;s+=2)d[s][0](d[s+1]);d.length=0}}}function l(u){c(u(t))}function o(u,r=h){const s=[u,r];return i.add(s),i.size===1&&(e=n(c)||h),u(t),()=>{i.delete(s),i.size===0&&(e(),e=null)}}return{set:c,update:l,subscribe:o}}export{Ot as A,ut as B,I as C,It as D,Mt as E,at as F,X as G,dt as H,ht as I,_t as J,yt as K,h as L,Nt as M,tt as N,Et as O,lt as P,xt as Q,ft as R,Ht as S,mt as T,qt as U,b as V,nt as a,$t as b,wt as c,Y as d,Z as e,At as f,pt as g,it as h,Ft as i,kt as j,bt as k,gt as l,St as m,Tt as n,Bt as o,zt as p,ct as q,Ct as r,J as s,v as t,vt as u,jt as v,Pt as w,Dt as x,ot as y,Lt as z};
