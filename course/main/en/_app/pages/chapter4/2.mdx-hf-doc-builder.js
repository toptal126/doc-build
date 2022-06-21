import{S as cs,i as ps,s as ms,e as u,k as _,w as S,t as l,M as us,c as h,d as s,m as w,x as W,a as b,h as i,b as x,N as ns,G as o,g as m,y as N,o as E,p as rs,q,B,v as hs,n as ls}from"../../chunks/vendor-hf-doc-builder.js";import{T as fs}from"../../chunks/Tip-hf-doc-builder.js";import{I as ds}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as re}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as is}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";import{F as bs}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function gs(A){let n,c;return n=new is({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter4/section2_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter4/section2_tf.ipynb"}]}}),{c(){S(n.$$.fragment)},l(t){W(n.$$.fragment,t)},m(t,$){N(n,t,$),c=!0},i(t){c||(q(n.$$.fragment,t),c=!0)},o(t){E(n.$$.fragment,t),c=!1},d(t){B(n,t)}}}function ks(A){let n,c;return n=new is({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter4/section2_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter4/section2_pt.ipynb"}]}}),{c(){S(n.$$.fragment)},l(t){W(n.$$.fragment,t)},m(t,$){N(n,t,$),c=!0},i(t){c||(q(n.$$.fragment,t),c=!0)},o(t){E(n.$$.fragment,t),c=!1},d(t){B(n,t)}}}function _s(A){let n,c,t,$,f,k,T,y,z,v,O,M,g,d,j;return n=new re({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = TFCamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),d=new re({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = TFAutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),{c(){S(n.$$.fragment),c=_(),t=u("p"),$=l("However, we recommend using the "),f=u("a"),k=u("code"),T=l("TFAuto*"),y=l(" classes"),z=l(" instead, as these are by design architecture-agnostic. While the previous code sample limits users to checkpoints loadable in the CamemBERT architecture, using the "),v=u("code"),O=l("TFAuto*"),M=l(" classes makes switching checkpoints simple:"),g=_(),S(d.$$.fragment),this.h()},l(a){W(n.$$.fragment,a),c=w(a),t=h(a,"P",{});var p=b(t);$=i(p,"However, we recommend using the "),f=h(p,"A",{href:!0,rel:!0});var L=b(f);k=h(L,"CODE",{});var F=b(k);T=i(F,"TFAuto*"),F.forEach(s),y=i(L," classes"),L.forEach(s),z=i(p," instead, as these are by design architecture-agnostic. While the previous code sample limits users to checkpoints loadable in the CamemBERT architecture, using the "),v=h(p,"CODE",{});var G=b(v);O=i(G,"TFAuto*"),G.forEach(s),M=i(p," classes makes switching checkpoints simple:"),p.forEach(s),g=w(a),W(d.$$.fragment,a),this.h()},h(){x(f,"href","https://huggingface.co/transformers/model_doc/auto.html?highlight=auto#auto-classes"),x(f,"rel","nofollow")},m(a,p){N(n,a,p),m(a,c,p),m(a,t,p),o(t,$),o(t,f),o(f,k),o(k,T),o(f,y),o(t,z),o(t,v),o(v,O),o(t,M),m(a,g,p),N(d,a,p),j=!0},i(a){j||(q(n.$$.fragment,a),q(d.$$.fragment,a),j=!0)},o(a){E(n.$$.fragment,a),E(d.$$.fragment,a),j=!1},d(a){B(n,a),a&&s(c),a&&s(t),a&&s(g),B(d,a)}}}function ws(A){let n,c,t,$,f,k,T,y,z,v,O,M,g,d,j;return n=new re({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = CamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),d=new re({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = AutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),{c(){S(n.$$.fragment),c=_(),t=u("p"),$=l("However, we recommend using the "),f=u("a"),k=u("code"),T=l("Auto*"),y=l(" classes"),z=l(" instead, as these are by design architecture-agnostic. While the previous code sample limits users to checkpoints loadable in the CamemBERT architecture, using the "),v=u("code"),O=l("Auto*"),M=l(" classes makes switching checkpoints simple:"),g=_(),S(d.$$.fragment),this.h()},l(a){W(n.$$.fragment,a),c=w(a),t=h(a,"P",{});var p=b(t);$=i(p,"However, we recommend using the "),f=h(p,"A",{href:!0,rel:!0});var L=b(f);k=h(L,"CODE",{});var F=b(k);T=i(F,"Auto*"),F.forEach(s),y=i(L," classes"),L.forEach(s),z=i(p," instead, as these are by design architecture-agnostic. While the previous code sample limits users to checkpoints loadable in the CamemBERT architecture, using the "),v=h(p,"CODE",{});var G=b(v);O=i(G,"Auto*"),G.forEach(s),M=i(p," classes makes switching checkpoints simple:"),p.forEach(s),g=w(a),W(d.$$.fragment,a),this.h()},h(){x(f,"href","https://huggingface.co/transformers/model_doc/auto.html?highlight=auto#auto-classes"),x(f,"rel","nofollow")},m(a,p){N(n,a,p),m(a,c,p),m(a,t,p),o(t,$),o(t,f),o(f,k),o(k,T),o(f,y),o(t,z),o(t,v),o(v,O),o(t,M),m(a,g,p),N(d,a,p),j=!0},i(a){j||(q(n.$$.fragment,a),q(d.$$.fragment,a),j=!0)},o(a){E(n.$$.fragment,a),E(d.$$.fragment,a),j=!1},d(a){B(n,a),a&&s(c),a&&s(t),a&&s(g),B(d,a)}}}function $s(A){let n;return{c(){n=l("When using a pretrained model, make sure to check how it was trained, on which datasets, its limits, and its biases. All of this information should be indicated on its model card.")},l(c){n=i(c,"When using a pretrained model, make sure to check how it was trained, on which datasets, its limits, and its biases. All of this information should be indicated on its model card.")},m(c,t){m(c,n,t)},d(c){c&&s(n)}}}function xs(A){let n,c,t,$,f,k,T,y,z,v,O,M,g,d,j,a,p,L,F,G,de,V,Y,Ne,be,D,je,le,ye,Ee,ie,qe,Ce,ce,Ae,Te,ge,J,ke,K,_e,C,Me,pe,Le,Fe,me,De,ze,ue,Oe,He,he,Pe,Se,we,Q,X,Be,$e,te,We,xe,H,P,ae,R,ve;t=new bs({props:{fw:A[0]}}),y=new ds({});const Ie=[ks,gs],Z=[];function Ge(e,r){return e[0]==="pt"?0:1}g=Ge(A),d=Z[g]=Ie[g](A),J=new re({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

camembert_fill_mask = pipeline(<span class="hljs-string">&quot;fill-mask&quot;</span>, model=<span class="hljs-string">&quot;camembert-base&quot;</span>)
results = camembert_fill_mask(<span class="hljs-string">&quot;Le camembert est &lt;mask&gt; :)&quot;</span>)`}}),K=new re({props:{code:`[
  {'sequence': 'Le camembert est d\xE9licieux :)', 'score': 0.49091005325317383, 'token': 7200, 'token_str': 'd\xE9licieux'}, 
  {'sequence': 'Le camembert est excellent :)', 'score': 0.1055697426199913, 'token': 2183, 'token_str': 'excellent'}, 
  {'sequence': 'Le camembert est succulent :)', 'score': 0.03453313186764717, 'token': 26202, 'token_str': 'succulent'}, 
  {'sequence': 'Le camembert est meilleur :)', 'score': 0.0330314114689827, 'token': 528, 'token_str': 'meilleur'}, 
  {'sequence': 'Le camembert est parfait :)', 'score': 0.03007650189101696, 'token': 1654, 'token_str': 'parfait'}
]`,highlighted:`[
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est d\xE9licieux :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.49091005325317383</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">7200</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;d\xE9licieux&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est excellent :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.1055697426199913</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">2183</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;excellent&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est succulent :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.03453313186764717</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">26202</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;succulent&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est meilleur :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.0330314114689827</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">528</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;meilleur&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est parfait :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.03007650189101696</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">1654</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;parfait&#x27;</span>}
]`}});const Re=[ws,_s],ee=[];function Ue(e,r){return e[0]==="pt"?0:1}return H=Ue(A),P=ee[H]=Re[H](A),R=new fs({props:{$$slots:{default:[$s]},$$scope:{ctx:A}}}),{c(){n=u("meta"),c=_(),S(t.$$.fragment),$=_(),f=u("h1"),k=u("a"),T=u("span"),S(y.$$.fragment),z=_(),v=u("span"),O=l("Using pretrained models"),M=_(),d.c(),j=_(),a=u("p"),p=l("The Model Hub makes selecting the appropriate model simple, so that using it in any downstream library can be done in a few lines of code. Let\u2019s take a look at how to actually use one of these models, and how to contribute back to the community."),L=_(),F=u("p"),G=l("Let\u2019s say we\u2019re looking for a French-based model that can perform mask filling."),de=_(),V=u("div"),Y=u("img"),be=_(),D=u("p"),je=l("We select the "),le=u("code"),ye=l("camembert-base"),Ee=l(" checkpoint to try it out. The identifier "),ie=u("code"),qe=l("camembert-base"),Ce=l(" is all we need to start using it! As you\u2019ve seen in previous chapters, we can instantiate it using the "),ce=u("code"),Ae=l("pipeline()"),Te=l(" function:"),ge=_(),S(J.$$.fragment),ke=_(),S(K.$$.fragment),_e=_(),C=u("p"),Me=l("As you can see, loading a model within a pipeline is extremely simple. The only thing you need to watch out for is that the chosen checkpoint is suitable for the task it\u2019s going to be used for. For example, here we are loading the "),pe=u("code"),Le=l("camembert-base"),Fe=l(" checkpoint in the "),me=u("code"),De=l("fill-mask"),ze=l(" pipeline, which is completely fine. But if we were to load this checkpoint in the "),ue=u("code"),Oe=l("text-classification"),He=l(" pipeline, the results would not make any sense because the head of "),he=u("code"),Pe=l("camembert-base"),Se=l(" is not suitable for this task! We recommend using the task selector in the Hugging Face Hub interface in order to select the appropriate checkpoints:"),we=_(),Q=u("div"),X=u("img"),$e=_(),te=u("p"),We=l("You can also instantiate the checkpoint using the model architecture directly:"),xe=_(),P.c(),ae=_(),S(R.$$.fragment),this.h()},l(e){const r=us('[data-svelte="svelte-1phssyn"]',document.head);n=h(r,"META",{name:!0,content:!0}),r.forEach(s),c=w(e),W(t.$$.fragment,e),$=w(e),f=h(e,"H1",{class:!0});var se=b(f);k=h(se,"A",{id:!0,class:!0,href:!0});var oe=b(k);T=h(oe,"SPAN",{});var ne=b(T);W(y.$$.fragment,ne),ne.forEach(s),oe.forEach(s),z=w(se),v=h(se,"SPAN",{});var fe=b(v);O=i(fe,"Using pretrained models"),fe.forEach(s),se.forEach(s),M=w(e),d.l(e),j=w(e),a=h(e,"P",{});var Ve=b(a);p=i(Ve,"The Model Hub makes selecting the appropriate model simple, so that using it in any downstream library can be done in a few lines of code. Let\u2019s take a look at how to actually use one of these models, and how to contribute back to the community."),Ve.forEach(s),L=w(e),F=h(e,"P",{});var Ye=b(F);G=i(Ye,"Let\u2019s say we\u2019re looking for a French-based model that can perform mask filling."),Ye.forEach(s),de=w(e),V=h(e,"DIV",{class:!0});var Je=b(V);Y=h(Je,"IMG",{src:!0,alt:!0,width:!0}),Je.forEach(s),be=w(e),D=h(e,"P",{});var U=b(D);je=i(U,"We select the "),le=h(U,"CODE",{});var Ke=b(le);ye=i(Ke,"camembert-base"),Ke.forEach(s),Ee=i(U," checkpoint to try it out. The identifier "),ie=h(U,"CODE",{});var Qe=b(ie);qe=i(Qe,"camembert-base"),Qe.forEach(s),Ce=i(U," is all we need to start using it! As you\u2019ve seen in previous chapters, we can instantiate it using the "),ce=h(U,"CODE",{});var Xe=b(ce);Ae=i(Xe,"pipeline()"),Xe.forEach(s),Te=i(U," function:"),U.forEach(s),ge=w(e),W(J.$$.fragment,e),ke=w(e),W(K.$$.fragment,e),_e=w(e),C=h(e,"P",{});var I=b(C);Me=i(I,"As you can see, loading a model within a pipeline is extremely simple. The only thing you need to watch out for is that the chosen checkpoint is suitable for the task it\u2019s going to be used for. For example, here we are loading the "),pe=h(I,"CODE",{});var Ze=b(pe);Le=i(Ze,"camembert-base"),Ze.forEach(s),Fe=i(I," checkpoint in the "),me=h(I,"CODE",{});var es=b(me);De=i(es,"fill-mask"),es.forEach(s),ze=i(I," pipeline, which is completely fine. But if we were to load this checkpoint in the "),ue=h(I,"CODE",{});var ss=b(ue);Oe=i(ss,"text-classification"),ss.forEach(s),He=i(I," pipeline, the results would not make any sense because the head of "),he=h(I,"CODE",{});var ts=b(he);Pe=i(ts,"camembert-base"),ts.forEach(s),Se=i(I," is not suitable for this task! We recommend using the task selector in the Hugging Face Hub interface in order to select the appropriate checkpoints:"),I.forEach(s),we=w(e),Q=h(e,"DIV",{class:!0});var as=b(Q);X=h(as,"IMG",{src:!0,alt:!0,width:!0}),as.forEach(s),$e=w(e),te=h(e,"P",{});var os=b(te);We=i(os,"You can also instantiate the checkpoint using the model architecture directly:"),os.forEach(s),xe=w(e),P.l(e),ae=w(e),W(R.$$.fragment,e),this.h()},h(){x(n,"name","hf:doc:metadata"),x(n,"content",JSON.stringify(vs)),x(k,"id","using-pretrained-models"),x(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),x(k,"href","#using-pretrained-models"),x(f,"class","relative group"),ns(Y.src,Ne="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter4/camembert.gif")||x(Y,"src",Ne),x(Y,"alt","Selecting the Camembert model."),x(Y,"width","80%"),x(V,"class","flex justify-center"),ns(X.src,Be="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter4/tasks.png")||x(X,"src",Be),x(X,"alt","The task selector on the web interface."),x(X,"width","80%"),x(Q,"class","flex justify-center")},m(e,r){o(document.head,n),m(e,c,r),N(t,e,r),m(e,$,r),m(e,f,r),o(f,k),o(k,T),N(y,T,null),o(f,z),o(f,v),o(v,O),m(e,M,r),Z[g].m(e,r),m(e,j,r),m(e,a,r),o(a,p),m(e,L,r),m(e,F,r),o(F,G),m(e,de,r),m(e,V,r),o(V,Y),m(e,be,r),m(e,D,r),o(D,je),o(D,le),o(le,ye),o(D,Ee),o(D,ie),o(ie,qe),o(D,Ce),o(D,ce),o(ce,Ae),o(D,Te),m(e,ge,r),N(J,e,r),m(e,ke,r),N(K,e,r),m(e,_e,r),m(e,C,r),o(C,Me),o(C,pe),o(pe,Le),o(C,Fe),o(C,me),o(me,De),o(C,ze),o(C,ue),o(ue,Oe),o(C,He),o(C,he),o(he,Pe),o(C,Se),m(e,we,r),m(e,Q,r),o(Q,X),m(e,$e,r),m(e,te,r),o(te,We),m(e,xe,r),ee[H].m(e,r),m(e,ae,r),N(R,e,r),ve=!0},p(e,[r]){const se={};r&1&&(se.fw=e[0]),t.$set(se);let oe=g;g=Ge(e),g!==oe&&(ls(),E(Z[oe],1,1,()=>{Z[oe]=null}),rs(),d=Z[g],d||(d=Z[g]=Ie[g](e),d.c()),q(d,1),d.m(j.parentNode,j));let ne=H;H=Ue(e),H!==ne&&(ls(),E(ee[ne],1,1,()=>{ee[ne]=null}),rs(),P=ee[H],P||(P=ee[H]=Re[H](e),P.c()),q(P,1),P.m(ae.parentNode,ae));const fe={};r&2&&(fe.$$scope={dirty:r,ctx:e}),R.$set(fe)},i(e){ve||(q(t.$$.fragment,e),q(y.$$.fragment,e),q(d),q(J.$$.fragment,e),q(K.$$.fragment,e),q(P),q(R.$$.fragment,e),ve=!0)},o(e){E(t.$$.fragment,e),E(y.$$.fragment,e),E(d),E(J.$$.fragment,e),E(K.$$.fragment,e),E(P),E(R.$$.fragment,e),ve=!1},d(e){s(n),e&&s(c),B(t,e),e&&s($),e&&s(f),B(y),e&&s(M),Z[g].d(e),e&&s(j),e&&s(a),e&&s(L),e&&s(F),e&&s(de),e&&s(V),e&&s(be),e&&s(D),e&&s(ge),B(J,e),e&&s(ke),B(K,e),e&&s(_e),e&&s(C),e&&s(we),e&&s(Q),e&&s($e),e&&s(te),e&&s(xe),ee[H].d(e),e&&s(ae),B(R,e)}}}const vs={local:"using-pretrained-models",title:"Using pretrained models"};function js(A,n,c){let t="pt";return hs(()=>{const $=new URLSearchParams(window.location.search);c(0,t=$.get("fw")||"pt")}),[t]}class Ms extends cs{constructor(n){super();ps(this,n,js,xs,ms,{})}}export{Ms as default,vs as metadata};
