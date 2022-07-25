import{S as ct,i as pt,s as mt,e as u,k as g,w as N,t as l,M as ut,c as d,d as t,m as _,x as H,a as b,h as n,b as v,N as rt,G as o,g as m,y as B,o as M,p as it,q as C,B as I,v as dt,n as lt}from"../../chunks/vendor-hf-doc-builder.js";import{T as ft}from"../../chunks/Tip-hf-doc-builder.js";import{I as ht}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as nt}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";import{F as bt}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function kt(T){let r,c;return r=new nt({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter4/section2_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter4/section2_tf.ipynb"}]}}),{c(){N(r.$$.fragment)},l(s){H(r.$$.fragment,s)},m(s,$){B(r,s,$),c=!0},i(s){c||(C(r.$$.fragment,s),c=!0)},o(s){M(r.$$.fragment,s),c=!1},d(s){I(r,s)}}}function gt(T){let r,c;return r=new nt({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter4/section2_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter4/section2_pt.ipynb"}]}}),{c(){N(r.$$.fragment)},l(s){H(r.$$.fragment,s)},m(s,$){B(r,s,$),c=!0},i(s){c||(C(r.$$.fragment,s),c=!0)},o(s){M(r.$$.fragment,s),c=!1},d(s){I(r,s)}}}function _t(T){let r,c,s,$,f,w,x,z,D,j,S,A,k,h,q;return r=new ie({props:{code:`from transformers import CamembertTokenizer, TFCamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = TFCamembertForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = TFCamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),h=new ie({props:{code:`from transformers import AutoTokenizer, TFAutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained("camembert-base")
model = TFAutoModelForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = TFAutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),{c(){N(r.$$.fragment),c=g(),s=u("p"),$=l("Tuttavia, noi consigliamo di usare le "),f=u("a"),w=l("classi "),x=u("code"),z=l("TFAuto*"),D=l(" quando possibile, poich\xE9 sono progettate per essere agnostiche rispetto al tipo di architettura del modello. Mentre il codice di esempio precedente limita gli utenti a caricare i checkpoint supportati dall\u2019architettura CamemBERT, usare le classi "),j=u("code"),S=l("TFAuto*"),A=l(" rende facile il passaggio da un checkpoint ad un altro:"),k=g(),N(h.$$.fragment),this.h()},l(a){H(r.$$.fragment,a),c=_(a),s=d(a,"P",{});var p=b(s);$=n(p,"Tuttavia, noi consigliamo di usare le "),f=d(p,"A",{href:!0,rel:!0});var L=b(f);w=n(L,"classi "),x=d(L,"CODE",{});var F=b(x);z=n(F,"TFAuto*"),F.forEach(t),L.forEach(t),D=n(p," quando possibile, poich\xE9 sono progettate per essere agnostiche rispetto al tipo di architettura del modello. Mentre il codice di esempio precedente limita gli utenti a caricare i checkpoint supportati dall\u2019architettura CamemBERT, usare le classi "),j=d(p,"CODE",{});var G=b(j);S=n(G,"TFAuto*"),G.forEach(t),A=n(p," rende facile il passaggio da un checkpoint ad un altro:"),p.forEach(t),k=_(a),H(h.$$.fragment,a),this.h()},h(){v(f,"href","https://huggingface.co/transformers/model_doc/auto.html?highlight=auto#auto-classes"),v(f,"rel","nofollow")},m(a,p){B(r,a,p),m(a,c,p),m(a,s,p),o(s,$),o(s,f),o(f,w),o(f,x),o(x,z),o(s,D),o(s,j),o(j,S),o(s,A),m(a,k,p),B(h,a,p),q=!0},i(a){q||(C(r.$$.fragment,a),C(h.$$.fragment,a),q=!0)},o(a){M(r.$$.fragment,a),M(h.$$.fragment,a),q=!1},d(a){I(r,a),a&&t(c),a&&t(s),a&&t(k),I(h,a)}}}function $t(T){let r,c,s,$,f,w,x,z,D,j,S,A,k,h,q;return r=new ie({props:{code:`from transformers import CamembertTokenizer, CamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = CamembertForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = CamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),h=new ie({props:{code:`from transformers import AutoTokenizer, AutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained("camembert-base")
model = AutoModelForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = AutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),{c(){N(r.$$.fragment),c=g(),s=u("p"),$=l("Tuttavia, noi consigliamo di usare le "),f=u("a"),w=l("classi "),x=u("code"),z=l("Auto*"),D=l(" quando possibile, poich\xE9 sono progettate per essere agnostiche rispetto al tipo di architettura del modello. Mentre il codice di esempio precedente limita gli utenti a caricare i checkpoint supportati dall\u2019architettura CamemBERT, usare le classi "),j=u("code"),S=l("Auto*"),A=l(" rende facile il passaggio da un checkpoint ad un altro:"),k=g(),N(h.$$.fragment),this.h()},l(a){H(r.$$.fragment,a),c=_(a),s=d(a,"P",{});var p=b(s);$=n(p,"Tuttavia, noi consigliamo di usare le "),f=d(p,"A",{href:!0,rel:!0});var L=b(f);w=n(L,"classi "),x=d(L,"CODE",{});var F=b(x);z=n(F,"Auto*"),F.forEach(t),L.forEach(t),D=n(p," quando possibile, poich\xE9 sono progettate per essere agnostiche rispetto al tipo di architettura del modello. Mentre il codice di esempio precedente limita gli utenti a caricare i checkpoint supportati dall\u2019architettura CamemBERT, usare le classi "),j=d(p,"CODE",{});var G=b(j);S=n(G,"Auto*"),G.forEach(t),A=n(p," rende facile il passaggio da un checkpoint ad un altro:"),p.forEach(t),k=_(a),H(h.$$.fragment,a),this.h()},h(){v(f,"href","https://huggingface.co/transformers/model_doc/auto.html?highlight=auto#auto-classes"),v(f,"rel","nofollow")},m(a,p){B(r,a,p),m(a,c,p),m(a,s,p),o(s,$),o(s,f),o(f,w),o(f,x),o(x,z),o(s,D),o(s,j),o(j,S),o(s,A),m(a,k,p),B(h,a,p),q=!0},i(a){q||(C(r.$$.fragment,a),C(h.$$.fragment,a),q=!0)},o(a){M(r.$$.fragment,a),M(h.$$.fragment,a),q=!1},d(a){I(r,a),a&&t(c),a&&t(s),a&&t(k),I(h,a)}}}function vt(T){let r;return{c(){r=l("Quando usate un modello pre-addestrato, assicuratevi di controllare come \xE8 stato addestrato, su quali dataset, i suoi limiti e i suoi bias. Tutte queste informazioni dovrebbero essere indicate sul cartellino del modello.")},l(c){r=n(c,"Quando usate un modello pre-addestrato, assicuratevi di controllare come \xE8 stato addestrato, su quali dataset, i suoi limiti e i suoi bias. Tutte queste informazioni dovrebbero essere indicate sul cartellino del modello.")},m(c,s){m(c,r,s)},d(c){c&&t(r)}}}function xt(T){let r,c,s,$,f,w,x,z,D,j,S,A,k,h,q,a,p,L,F,G,he,Q,J,Be,be,y,we,le,qe,ze,ne,Me,Ce,ce,Ee,Te,ke,K,ge,W,_e,E,Ae,pe,Le,Fe,me,ye,De,ue,Se,Pe,de,Oe,Ne,$e,X,Y,Ie,ve,se,He,xe,P,O,ae,R,je;s=new bt({props:{fw:T[0]}}),z=new ht({});const Ue=[gt,kt],Z=[];function Ge(e,i){return e[0]==="pt"?0:1}k=Ge(T),h=Z[k]=Ue[k](T),K=new ie({props:{code:`from transformers import pipeline

camembert_fill_mask = pipeline("fill-mask", model="camembert-base")
results = camembert_fill_mask("Le camembert est <mask> :)")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

camembert_fill_mask = pipeline(<span class="hljs-string">&quot;fill-mask&quot;</span>, model=<span class="hljs-string">&quot;camembert-base&quot;</span>)
results = camembert_fill_mask(<span class="hljs-string">&quot;Le camembert est &lt;mask&gt; :)&quot;</span>)`}}),W=new ie({props:{code:`[
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
]`}});const Re=[$t,_t],ee=[];function Ve(e,i){return e[0]==="pt"?0:1}return P=Ve(T),O=ee[P]=Re[P](T),R=new ft({props:{$$slots:{default:[vt]},$$scope:{ctx:T}}}),{c(){r=u("meta"),c=g(),N(s.$$.fragment),$=g(),f=u("h1"),w=u("a"),x=u("span"),N(z.$$.fragment),D=g(),j=u("span"),S=l("Usare modelli pre-addestrati"),A=g(),h.c(),q=g(),a=u("p"),p=l("Usando l\u2019Hub diventa molto facile selzionare il modello appropriato, cos\xEC da poterlo usare in qualsiasi altro framework con solo poche righe di codice. Vediamo ora come usare un di questi modelli, e come contribuire allo sviluppo della comunit\xE0."),L=g(),F=u("p"),G=l("Ad esempio assumiamo di stare cercando un modello francese sviluppato per ricostruire token mancanti (mask filling)."),he=g(),Q=u("div"),J=u("img"),be=g(),y=u("p"),we=l("Selezioniamo il checkpoint "),le=u("code"),qe=l("camembert-base"),ze=l(" per provarlo. L\u2019identificatore "),ne=u("code"),Me=l("camembert-base"),Ce=l(" \xE8 tutto quello che serve per inizializzarlo! Come si \xE8 visto in precedenti capitoli, \xE8 possibile istanziare il modello usando la funzione "),ce=u("code"),Ee=l("pipeline()"),Te=l(":"),ke=g(),N(K.$$.fragment),ge=g(),N(W.$$.fragment),_e=g(),E=u("p"),Ae=l("Come potete vedere, caricare un modello all\u2019interno di una pipeline \xE8 molto semplice. L\u2019unico elemento da tenere in considerazione \xE8 che il checkpoint scelto sia adatto all\u2019utilizzo che intendete farne. Ad esempio, noi abbiamo caricato il checkpoint "),pe=u("code"),Le=l("camembert-base"),Fe=l(" all\u2019interno del pipeline "),me=u("code"),ye=l("fill-mask"),De=l(", che \xE8 corretto. Ma se dovessimo caricare questo checkpoint in un pipeline di classificazione del testo ("),ue=u("code"),Se=l("text-classification"),Pe=l("), i risultati non avrebbero senso perch\xE9 l\u2019head di "),de=u("code"),Oe=l("camembert-base"),Ne=l(" non \xE8 adatto per questo obiettivo! Si consiglia di usare il filtro per obiettivi nell\u2019interfaccia dell\u2019Hub di Hugging Face per selezionare il checkpoint appropriato:"),$e=g(),X=u("div"),Y=u("img"),ve=g(),se=u("p"),He=l("Potete anche istanziare il checkpoint usando direttamente l\u2019architettura del modello:"),xe=g(),O.c(),ae=g(),N(R.$$.fragment),this.h()},l(e){const i=ut('[data-svelte="svelte-1phssyn"]',document.head);r=d(i,"META",{name:!0,content:!0}),i.forEach(t),c=_(e),H(s.$$.fragment,e),$=_(e),f=d(e,"H1",{class:!0});var te=b(f);w=d(te,"A",{id:!0,class:!0,href:!0});var oe=b(w);x=d(oe,"SPAN",{});var re=b(x);H(z.$$.fragment,re),re.forEach(t),oe.forEach(t),D=_(te),j=d(te,"SPAN",{});var fe=b(j);S=n(fe,"Usare modelli pre-addestrati"),fe.forEach(t),te.forEach(t),A=_(e),h.l(e),q=_(e),a=d(e,"P",{});var Qe=b(a);p=n(Qe,"Usando l\u2019Hub diventa molto facile selzionare il modello appropriato, cos\xEC da poterlo usare in qualsiasi altro framework con solo poche righe di codice. Vediamo ora come usare un di questi modelli, e come contribuire allo sviluppo della comunit\xE0."),Qe.forEach(t),L=_(e),F=d(e,"P",{});var Je=b(F);G=n(Je,"Ad esempio assumiamo di stare cercando un modello francese sviluppato per ricostruire token mancanti (mask filling)."),Je.forEach(t),he=_(e),Q=d(e,"DIV",{class:!0});var Ke=b(Q);J=d(Ke,"IMG",{src:!0,alt:!0,width:!0}),Ke.forEach(t),be=_(e),y=d(e,"P",{});var V=b(y);we=n(V,"Selezioniamo il checkpoint "),le=d(V,"CODE",{});var We=b(le);qe=n(We,"camembert-base"),We.forEach(t),ze=n(V," per provarlo. L\u2019identificatore "),ne=d(V,"CODE",{});var Xe=b(ne);Me=n(Xe,"camembert-base"),Xe.forEach(t),Ce=n(V," \xE8 tutto quello che serve per inizializzarlo! Come si \xE8 visto in precedenti capitoli, \xE8 possibile istanziare il modello usando la funzione "),ce=d(V,"CODE",{});var Ye=b(ce);Ee=n(Ye,"pipeline()"),Ye.forEach(t),Te=n(V,":"),V.forEach(t),ke=_(e),H(K.$$.fragment,e),ge=_(e),H(W.$$.fragment,e),_e=_(e),E=d(e,"P",{});var U=b(E);Ae=n(U,"Come potete vedere, caricare un modello all\u2019interno di una pipeline \xE8 molto semplice. L\u2019unico elemento da tenere in considerazione \xE8 che il checkpoint scelto sia adatto all\u2019utilizzo che intendete farne. Ad esempio, noi abbiamo caricato il checkpoint "),pe=d(U,"CODE",{});var Ze=b(pe);Le=n(Ze,"camembert-base"),Ze.forEach(t),Fe=n(U," all\u2019interno del pipeline "),me=d(U,"CODE",{});var et=b(me);ye=n(et,"fill-mask"),et.forEach(t),De=n(U,", che \xE8 corretto. Ma se dovessimo caricare questo checkpoint in un pipeline di classificazione del testo ("),ue=d(U,"CODE",{});var tt=b(ue);Se=n(tt,"text-classification"),tt.forEach(t),Pe=n(U,"), i risultati non avrebbero senso perch\xE9 l\u2019head di "),de=d(U,"CODE",{});var st=b(de);Oe=n(st,"camembert-base"),st.forEach(t),Ne=n(U," non \xE8 adatto per questo obiettivo! Si consiglia di usare il filtro per obiettivi nell\u2019interfaccia dell\u2019Hub di Hugging Face per selezionare il checkpoint appropriato:"),U.forEach(t),$e=_(e),X=d(e,"DIV",{class:!0});var at=b(X);Y=d(at,"IMG",{src:!0,alt:!0,width:!0}),at.forEach(t),ve=_(e),se=d(e,"P",{});var ot=b(se);He=n(ot,"Potete anche istanziare il checkpoint usando direttamente l\u2019architettura del modello:"),ot.forEach(t),xe=_(e),O.l(e),ae=_(e),H(R.$$.fragment,e),this.h()},h(){v(r,"name","hf:doc:metadata"),v(r,"content",JSON.stringify(jt)),v(w,"id","usare-modelli-preaddestrati"),v(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(w,"href","#usare-modelli-preaddestrati"),v(f,"class","relative group"),rt(J.src,Be="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter4/camembert.gif")||v(J,"src",Be),v(J,"alt","Selecting the Camembert model."),v(J,"width","80%"),v(Q,"class","flex justify-center"),rt(Y.src,Ie="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter4/tasks.png")||v(Y,"src",Ie),v(Y,"alt","The task selector on the web interface."),v(Y,"width","80%"),v(X,"class","flex justify-center")},m(e,i){o(document.head,r),m(e,c,i),B(s,e,i),m(e,$,i),m(e,f,i),o(f,w),o(w,x),B(z,x,null),o(f,D),o(f,j),o(j,S),m(e,A,i),Z[k].m(e,i),m(e,q,i),m(e,a,i),o(a,p),m(e,L,i),m(e,F,i),o(F,G),m(e,he,i),m(e,Q,i),o(Q,J),m(e,be,i),m(e,y,i),o(y,we),o(y,le),o(le,qe),o(y,ze),o(y,ne),o(ne,Me),o(y,Ce),o(y,ce),o(ce,Ee),o(y,Te),m(e,ke,i),B(K,e,i),m(e,ge,i),B(W,e,i),m(e,_e,i),m(e,E,i),o(E,Ae),o(E,pe),o(pe,Le),o(E,Fe),o(E,me),o(me,ye),o(E,De),o(E,ue),o(ue,Se),o(E,Pe),o(E,de),o(de,Oe),o(E,Ne),m(e,$e,i),m(e,X,i),o(X,Y),m(e,ve,i),m(e,se,i),o(se,He),m(e,xe,i),ee[P].m(e,i),m(e,ae,i),B(R,e,i),je=!0},p(e,[i]){const te={};i&1&&(te.fw=e[0]),s.$set(te);let oe=k;k=Ge(e),k!==oe&&(lt(),M(Z[oe],1,1,()=>{Z[oe]=null}),it(),h=Z[k],h||(h=Z[k]=Ue[k](e),h.c()),C(h,1),h.m(q.parentNode,q));let re=P;P=Ve(e),P!==re&&(lt(),M(ee[re],1,1,()=>{ee[re]=null}),it(),O=ee[P],O||(O=ee[P]=Re[P](e),O.c()),C(O,1),O.m(ae.parentNode,ae));const fe={};i&2&&(fe.$$scope={dirty:i,ctx:e}),R.$set(fe)},i(e){je||(C(s.$$.fragment,e),C(z.$$.fragment,e),C(h),C(K.$$.fragment,e),C(W.$$.fragment,e),C(O),C(R.$$.fragment,e),je=!0)},o(e){M(s.$$.fragment,e),M(z.$$.fragment,e),M(h),M(K.$$.fragment,e),M(W.$$.fragment,e),M(O),M(R.$$.fragment,e),je=!1},d(e){t(r),e&&t(c),I(s,e),e&&t($),e&&t(f),I(z),e&&t(A),Z[k].d(e),e&&t(q),e&&t(a),e&&t(L),e&&t(F),e&&t(he),e&&t(Q),e&&t(be),e&&t(y),e&&t(ke),I(K,e),e&&t(ge),I(W,e),e&&t(_e),e&&t(E),e&&t($e),e&&t(X),e&&t(ve),e&&t(se),e&&t(xe),ee[P].d(e),e&&t(ae),I(R,e)}}}const jt={local:"usare-modelli-preaddestrati",title:"Usare modelli pre-addestrati"};function wt(T,r,c){let s="pt";return dt(()=>{const $=new URLSearchParams(window.location.search);c(0,s=$.get("fw")||"pt")}),[s]}class At extends ct{constructor(r){super();pt(this,r,wt,xt,mt,{})}}export{At as default,jt as metadata};
