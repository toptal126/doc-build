import{S as le,i as ie,s as me,e as i,k as g,w as N,t as C,M as pe,c as m,d as t,m as $,a as p,x as M,h as D,b as c,G as s,g as v,y as I,q as L,o as B,B as H,v as ue,L as ce}from"../../chunks/vendor-hf-doc-builder.js";import{D as he}from"../../chunks/Docstring-hf-doc-builder.js";import{C as fe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ne}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ve}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function de(J){let r,_,n,o,h;return o=new fe({props:{code:`import evaluate
result = {"bleu": 0.7}
params = {"model": "gpt-2"}
evaluate.save("./results/", **result, **params)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> evaluate
<span class="hljs-meta">&gt;&gt;&gt; </span>result = {<span class="hljs-string">&quot;bleu&quot;</span>: <span class="hljs-number">0.7</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>params = {<span class="hljs-string">&quot;model&quot;</span>: <span class="hljs-string">&quot;gpt-2&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>evaluate.save(<span class="hljs-string">&quot;./results/&quot;</span>, **result, **params)`}}),{c(){r=i("p"),_=C("Example:"),n=g(),N(o.$$.fragment)},l(a){r=m(a,"P",{});var f=p(r);_=D(f,"Example:"),f.forEach(t),n=$(a),M(o.$$.fragment,a)},m(a,f){v(a,r,f),s(r,_),v(a,n,f),I(o,a,f),h=!0},p:ce,i(a){h||(L(o.$$.fragment,a),h=!0)},o(a){B(o.$$.fragment,a),h=!1},d(a){a&&t(r),a&&t(n),H(o,a)}}}function ge(J){let r,_,n,o,h,a,f,P,V,O,E,Y,G,d,y,j,S,z,q,F,R,u,b,K,A,Q,W,w,T;return a=new ne({}),S=new ne({}),b=new he({props:{name:"evaluate.save",anchor:"evaluate.save",parameters:[{name:"path_or_file",val:""},{name:"**data",val:""}],parametersDescription:[{anchor:"evaluate.save.path_or_file",description:`<strong>path_or_file</strong> (<code>str</code>) &#x2014; Path or file to store the file. If only a folder is provided
the results file will be saved in the format <em>&#x201C;result-%Y<em>%m</em>%d-%H<em>%M</em>%S.json&#x201D;</em>.`,name:"path_or_file"}],source:"https://github.com/huggingface/evaluate/blob/v0.2.1/src/evaluate/saving.py#L13"}}),w=new ve({props:{anchor:"evaluate.save.example",$$slots:{default:[de]},$$scope:{ctx:J}}}),{c(){r=i("meta"),_=g(),n=i("h1"),o=i("a"),h=i("span"),N(a.$$.fragment),f=g(),P=i("span"),V=C("Saving methods"),O=g(),E=i("p"),Y=C("Methods for saving evaluations results:"),G=g(),d=i("h2"),y=i("a"),j=i("span"),N(S.$$.fragment),z=g(),q=i("span"),F=C("Save"),R=g(),u=i("div"),N(b.$$.fragment),K=g(),A=i("p"),Q=C(`Saves results to a JSON file. Also saves system information such as current time, current commit
hash if inside a repository, and Python system information.`),W=g(),N(w.$$.fragment),this.h()},l(e){const l=pe('[data-svelte="svelte-1phssyn"]',document.head);r=m(l,"META",{name:!0,content:!0}),l.forEach(t),_=$(e),n=m(e,"H1",{class:!0});var x=p(n);o=m(x,"A",{id:!0,class:!0,href:!0});var X=p(o);h=m(X,"SPAN",{});var Z=p(h);M(a.$$.fragment,Z),Z.forEach(t),X.forEach(t),f=$(x),P=m(x,"SPAN",{});var ee=p(P);V=D(ee,"Saving methods"),ee.forEach(t),x.forEach(t),O=$(e),E=m(e,"P",{});var te=p(E);Y=D(te,"Methods for saving evaluations results:"),te.forEach(t),G=$(e),d=m(e,"H2",{class:!0});var U=p(d);y=m(U,"A",{id:!0,class:!0,href:!0});var ae=p(y);j=m(ae,"SPAN",{});var se=p(j);M(S.$$.fragment,se),se.forEach(t),ae.forEach(t),z=$(U),q=m(U,"SPAN",{});var re=p(q);F=D(re,"Save"),re.forEach(t),U.forEach(t),R=$(e),u=m(e,"DIV",{class:!0});var k=p(u);M(b.$$.fragment,k),K=$(k),A=m(k,"P",{});var oe=p(A);Q=D(oe,`Saves results to a JSON file. Also saves system information such as current time, current commit
hash if inside a repository, and Python system information.`),oe.forEach(t),W=$(k),M(w.$$.fragment,k),k.forEach(t),this.h()},h(){c(r,"name","hf:doc:metadata"),c(r,"content",JSON.stringify($e)),c(o,"id","saving-methods"),c(o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(o,"href","#saving-methods"),c(n,"class","relative group"),c(y,"id","evaluate.save"),c(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(y,"href","#evaluate.save"),c(d,"class","relative group"),c(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,l){s(document.head,r),v(e,_,l),v(e,n,l),s(n,o),s(o,h),I(a,h,null),s(n,f),s(n,P),s(P,V),v(e,O,l),v(e,E,l),s(E,Y),v(e,G,l),v(e,d,l),s(d,y),s(y,j),I(S,j,null),s(d,z),s(d,q),s(q,F),v(e,R,l),v(e,u,l),I(b,u,null),s(u,K),s(u,A),s(A,Q),s(u,W),I(w,u,null),T=!0},p(e,[l]){const x={};l&2&&(x.$$scope={dirty:l,ctx:e}),w.$set(x)},i(e){T||(L(a.$$.fragment,e),L(S.$$.fragment,e),L(b.$$.fragment,e),L(w.$$.fragment,e),T=!0)},o(e){B(a.$$.fragment,e),B(S.$$.fragment,e),B(b.$$.fragment,e),B(w.$$.fragment,e),T=!1},d(e){t(r),e&&t(_),e&&t(n),H(a),e&&t(O),e&&t(E),e&&t(G),e&&t(d),H(S),e&&t(R),e&&t(u),H(b),H(w)}}}const $e={local:"saving-methods",sections:[{local:"evaluate.save",title:"Save"}],title:"Saving methods"};function _e(J){return ue(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ee extends le{constructor(r){super();ie(this,r,_e,ge,me,{})}}export{Ee as default,$e as metadata};
