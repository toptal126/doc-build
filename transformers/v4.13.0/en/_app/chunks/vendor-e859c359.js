function d(){}function Q(t,n){for(const e in n)t[e]=n[e];return t}function P(t){return t()}function C(){return Object.create(null)}function g(t){t.forEach(P)}function z(t){return typeof t=="function"}function U(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function ht(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function V(t){return Object.keys(t).length===0}function X(t,...n){if(t==null)return d;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function mt(t,n,e){t.$$.on_destroy.push(X(n,e))}function pt(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?Q(e.ctx.slice(),t[1](i(n))):e.ctx}function yt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(n.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=n.dirty[o]|r[o];return u}return n.dirty|r}return n.dirty}function gt(t,n,e,i,r,u){if(r){const s=O(n,e,i,u);t.p(s,r)}}function bt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function xt(t,n,e){return t.set(e),n}function $t(t){return t&&z(t.destroy)?t.destroy:d}let T=!1;function Y(){T=!0}function Z(){T=!1}function tt(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const l=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=l?r+1:tt(1,r,b=>n[e[b]].claim_order,l))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const u=[],s=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(u.push(n[c-1]);o>=c;o--)s.push(n[o]);o--}for(;o>=0;o--)s.push(n[o]);u.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<u.length&&s[c].claim_order>=u[l].claim_order;)l++;const a=l<u.length?u[l]:null;t.insertBefore(s[c],a)}}function et(t,n){if(T){for(nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function it(t,n,e){t.insertBefore(n,e||null)}function rt(t,n,e){T&&!e?et(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function A(t){t.parentNode.removeChild(t)}function wt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function G(t){return document.createElement(t)}function ct(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function Et(){return v(" ")}function At(){return v("")}function Tt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Nt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function St(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function kt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function st(t){return Array.from(t.childNodes)}function F(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,n,e,i,r=!1){F(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(n(o)){const c=e(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(n(o)){const c=e(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function R(t,n,e,i){return I(t,r=>r.nodeName===n,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];e[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(n))}function jt(t,n,e){return R(t,n,e,G)}function vt(t,n,e){return R(t,n,e,ct)}function ot(t,n){return I(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function Mt(t){return ot(t," ")}function H(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function qt(t){const n=H(t,"HTML_TAG_START",0),e=H(t,"HTML_TAG_END",n);if(n===e)return new L;F(t);const i=t.splice(n,e-n+1);A(i[0]),A(i[i.length-1]);const r=i.slice(1,i.length-1);for(const u of r)u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new L(r)}function Ct(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Ht(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Lt(t,n=document.body){return Array.from(n.querySelectorAll(t))}class lt{constructor(){this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.e=G(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)it(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(A)}}class L extends lt{constructor(n){super();this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)rt(this.t,this.n[e],n)}}let y;function p(t){y=t}function N(){if(!y)throw new Error("Function called outside component initialization");return y}function Bt(t){N().$$.on_mount.push(t)}function Dt(t){N().$$.after_update.push(t)}function Pt(t){N().$$.on_destroy.push(t)}function zt(t,n){N().$$.context.set(t,n)}const m=[],B=[],w=[],D=[],W=Promise.resolve();let k=!1;function J(){k||(k=!0,W.then(K))}function Ot(){return J(),W}function j(t){w.push(t)}const S=new Set;let $=0;function K(){const t=y;do{for(;$<m.length;){const n=m[$];$++,p(n),ut(n.$$)}for(p(null),m.length=0,$=0;B.length;)B.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];S.has(e)||(S.add(e),e())}w.length=0}while(m.length);for(;D.length;)D.pop()();k=!1,S.clear(),p(t)}function ut(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const E=new Set;let _;function Gt(){_={r:0,c:[],p:_}}function Ft(){_.r||g(_.c),_=_.p}function ft(t,n){t&&t.i&&(E.delete(t),t.i(n))}function It(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Rt(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const s=t[u],o=n[u];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(e[c]=o[c],r[c]=1);t[u]=o}else for(const c in s)r[c]=1}for(const s in i)s in e||(e[s]=void 0);return e}function Wt(t){return typeof t=="object"&&t!==null?t:{}}function Jt(t){t&&t.c()}function Kt(t,n){t&&t.l(n)}function at(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:s,after_update:o}=t.$$;r&&r.m(n,e),i||j(()=>{const c=u.map(P).filter(z);s?s.push(...c):g(c),t.$$.on_mount=[]}),o.forEach(j)}function _t(t,n){const e=t.$$;e.fragment!==null&&(g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function dt(t,n){t.$$.dirty[0]===-1&&(m.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Qt(t,n,e,i,r,u,s,o=[-1]){const c=y;p(t);const l=t.$$={fragment:null,ctx:null,props:u,update:d,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};s&&s(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,b,...M)=>{const q=M.length?M[0]:b;return l.ctx&&r(l.ctx[f],l.ctx[f]=q)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](q),a&&dt(t,f)),b}):[],l.update(),a=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){Y();const f=st(n.target);l.fragment&&l.fragment.l(f),f.forEach(A)}else l.fragment&&l.fragment.c();n.intro&&ft(t.$$.fragment),at(t,n.target,n.anchor,n.customElement),Z(),K()}p(c)}class Ut{$destroy(){_t(this,1),this.$destroy=d}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!V(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const h=[];function Vt(t,n=d){let e;const i=new Set;function r(o){if(U(t,o)&&(t=o,e)){const c=!h.length;for(const l of i)l[1](),h.push(l,t);if(c){for(let l=0;l<h.length;l+=2)h[l][0](h[l+1]);h.length=0}}}function u(o){r(o(t))}function s(o,c=d){const l=[o,c];return i.add(l),i.size===1&&(e=n(r)||d),o(t),()=>{i.delete(l),i.size===0&&(e(),e=null)}}return{set:r,update:u,subscribe:s}}export{Nt as $,Wt as A,_t as B,Q as C,Vt as D,Ot as E,pt as F,gt as G,bt as H,yt as I,et as J,d as K,Lt as L,ht as M,ct as N,vt as O,Tt as P,g as Q,Pt as R,Ut as S,L as T,qt as U,wt as V,mt as W,xt as X,$t as Y,z as Z,St as _,st as a,B as a0,kt as b,jt as c,A as d,G as e,Ht as f,rt as g,ot as h,Qt as i,Ct as j,Et as k,At as l,Mt as m,Gt as n,It as o,Ft as p,ft as q,zt as r,U as s,v as t,Dt as u,Bt as v,Jt as w,Kt as x,at as y,Rt as z};
