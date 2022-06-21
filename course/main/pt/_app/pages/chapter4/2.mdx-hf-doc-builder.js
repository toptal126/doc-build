import{S as cs,i as ms,s as ps,e as u,k,w as N,t as c,M as us,c as d,d as s,m as $,x as P,a as h,h as m,b as q,N as rs,G as o,g as p,y as S,o as w,p as ns,q as E,B as R,v as ds,n as ls}from"../../chunks/vendor-hf-doc-builder.js";import{T as fs}from"../../chunks/Tip-hf-doc-builder.js";import{I as hs}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as re}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as is}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";import{F as bs}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function gs(y){let r,l;return r=new is({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter4/section2_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter4/section2_tf.ipynb"}]}}),{c(){N(r.$$.fragment)},l(a){P(r.$$.fragment,a)},m(a,x){S(r,a,x),l=!0},i(a){l||(E(r.$$.fragment,a),l=!0)},o(a){w(r.$$.fragment,a),l=!1},d(a){R(r,a)}}}function _s(y){let r,l;return r=new is({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter4/section2_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter4/section2_pt.ipynb"}]}}),{c(){N(r.$$.fragment)},l(a){P(r.$$.fragment,a)},m(a,x){S(r,a,x),l=!0},i(a){l||(E(r.$$.fragment,a),l=!0)},o(a){w(r.$$.fragment,a),l=!1},d(a){R(r,a)}}}function ks(y){let r,l,a,x,b,_,M,v,j,A,D,C,f,g;return r=new re({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = TFCamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),f=new re({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = TFAutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),{c(){N(r.$$.fragment),l=k(),a=u("p"),x=c("No entanto, recomendamos a utiliza\xE7\xE3o das classes "),b=u("a"),_=u("code"),M=c("TFAuto*"),v=c(", pois estas s\xE3o por arquitetura de projeto - agn\xF3stica. Enquanto a amostra de c\xF3digo anterior limita os usu\xE1rios a checkpoint carreg\xE1veis na arquitetura CamemBERT, a utiliza\xE7\xE3o das classes "),j=u("code"),A=c("TFAuto*"),D=c(" torna a troca de checkpoint simples:"),C=k(),N(f.$$.fragment),this.h()},l(t){P(r.$$.fragment,t),l=$(t),a=d(t,"P",{});var i=h(a);x=m(i,"No entanto, recomendamos a utiliza\xE7\xE3o das classes "),b=d(i,"A",{href:!0,rel:!0});var V=h(b);_=d(V,"CODE",{});var B=h(_);M=m(B,"TFAuto*"),B.forEach(s),V.forEach(s),v=m(i,", pois estas s\xE3o por arquitetura de projeto - agn\xF3stica. Enquanto a amostra de c\xF3digo anterior limita os usu\xE1rios a checkpoint carreg\xE1veis na arquitetura CamemBERT, a utiliza\xE7\xE3o das classes "),j=d(i,"CODE",{});var T=h(j);A=m(T,"TFAuto*"),T.forEach(s),D=m(i," torna a troca de checkpoint simples:"),i.forEach(s),C=$(t),P(f.$$.fragment,t),this.h()},h(){q(b,"href","https://huggingface.co/transformers/model_doc/auto.html?highlight=auto#auto-classes"),q(b,"rel","nofollow")},m(t,i){S(r,t,i),p(t,l,i),p(t,a,i),o(a,x),o(a,b),o(b,_),o(_,M),o(a,v),o(a,j),o(j,A),o(a,D),p(t,C,i),S(f,t,i),g=!0},i(t){g||(E(r.$$.fragment,t),E(f.$$.fragment,t),g=!0)},o(t){w(r.$$.fragment,t),w(f.$$.fragment,t),g=!1},d(t){R(r,t),t&&s(l),t&&s(a),t&&s(C),R(f,t)}}}function $s(y){let r,l,a,x,b,_,M,v,j,A,D,C,f,g;return r=new re({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = CamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),f=new re({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = AutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),{c(){N(r.$$.fragment),l=k(),a=u("p"),x=c("No entanto, recomendamos a utiliza\xE7\xE3o das classes "),b=u("a"),_=u("code"),M=c("Auto*"),v=c(", pois estas s\xE3o por arquitetura de projeto - agn\xF3stica. Enquanto a amostra de c\xF3digo anterior limita os usu\xE1rios a checkpoint carreg\xE1veis na arquitetura CamemBERT, a utiliza\xE7\xE3o das classes "),j=u("code"),A=c("Auto*"),D=c(" torna a troca de checkpoint simples:"),C=k(),N(f.$$.fragment),this.h()},l(t){P(r.$$.fragment,t),l=$(t),a=d(t,"P",{});var i=h(a);x=m(i,"No entanto, recomendamos a utiliza\xE7\xE3o das classes "),b=d(i,"A",{href:!0,rel:!0});var V=h(b);_=d(V,"CODE",{});var B=h(_);M=m(B,"Auto*"),B.forEach(s),V.forEach(s),v=m(i,", pois estas s\xE3o por arquitetura de projeto - agn\xF3stica. Enquanto a amostra de c\xF3digo anterior limita os usu\xE1rios a checkpoint carreg\xE1veis na arquitetura CamemBERT, a utiliza\xE7\xE3o das classes "),j=d(i,"CODE",{});var T=h(j);A=m(T,"Auto*"),T.forEach(s),D=m(i," torna a troca de checkpoint simples:"),i.forEach(s),C=$(t),P(f.$$.fragment,t),this.h()},h(){q(b,"href","https://huggingface.co/transformers/model_doc/auto.html?highlight=auto#auto-classes"),q(b,"rel","nofollow")},m(t,i){S(r,t,i),p(t,l,i),p(t,a,i),o(a,x),o(a,b),o(b,_),o(_,M),o(a,v),o(a,j),o(j,A),o(a,D),p(t,C,i),S(f,t,i),g=!0},i(t){g||(E(r.$$.fragment,t),E(f.$$.fragment,t),g=!0)},o(t){w(r.$$.fragment,t),w(f.$$.fragment,t),g=!1},d(t){R(r,t),t&&s(l),t&&s(a),t&&s(C),R(f,t)}}}function xs(y){let r;return{c(){r=c("Ao utilizar um modelo pr\xE9-treinado, certifique-se de verificar como ele foi treinado, em quais datasets, seus limites e seus enviesamentos. Todas estas informa\xE7\xF5es devem ser indicadas em seu modelo de cart\xE3o.")},l(l){r=m(l,"Ao utilizar um modelo pr\xE9-treinado, certifique-se de verificar como ele foi treinado, em quais datasets, seus limites e seus enviesamentos. Todas estas informa\xE7\xF5es devem ser indicadas em seu modelo de cart\xE3o.")},m(l,a){p(l,r,a)},d(l){l&&s(r)}}}function qs(y){let r,l,a,x,b,_,M,v,j,A,D,C,f,g,t,i,V,B,T,ve,fe,U,J,Be,he,L,je,ne,we,Ee,le,Ce,ze,ie,ye,Me,be,K,ge,Q,_e,z,Ae,ce,Te,Le,me,De,Fe,pe,Oe,Ne,ue,Pe,Se,ke,W,X,Ie,$e,se,Re,xe,F,O,ae,G,qe;a=new bs({props:{fw:y[0]}}),v=new hs({});const Ve=[_s,gs],Y=[];function Ge(e,n){return e[0]==="pt"?0:1}f=Ge(y),g=Y[f]=Ve[f](y),K=new re({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

camembert_fill_mask = pipeline(<span class="hljs-string">&quot;fill-mask&quot;</span>, model=<span class="hljs-string">&quot;camembert-base&quot;</span>)
results = camembert_fill_mask(<span class="hljs-string">&quot;Le camembert est &lt;mask&gt; :)&quot;</span>)`}}),Q=new re({props:{code:`[
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
]`}});const He=[$s,ks],Z=[];function Ue(e,n){return e[0]==="pt"?0:1}return F=Ue(y),O=Z[F]=He[F](y),G=new fs({props:{$$slots:{default:[xs]},$$scope:{ctx:y}}}),{c(){r=u("meta"),l=k(),N(a.$$.fragment),x=k(),b=u("h1"),_=u("a"),M=u("span"),N(v.$$.fragment),j=k(),A=u("span"),D=c("Usando modelos pr\xE9-treinados"),C=k(),g.c(),t=k(),i=u("p"),V=c("O Model Hub torna simples a sele\xE7\xE3o do modelo apropriado, de modo que o uso em qualquer biblioteca pode ser feito em algumas linhas de c\xF3digo. Vamos dar uma olhada em como realmente usar um desses modelos, e como contribuir de volta \xE0 comunidade."),B=k(),T=u("p"),ve=c("Digamos que estamos \xE0 procura de um modelo baseado na l\xEDngua francesa que possa realizar o enchimento de m\xE1scara."),fe=k(),U=u("div"),J=u("img"),he=k(),L=u("p"),je=c("Selecionamos o checkpoint "),ne=u("code"),we=c("camembert-base"),Ee=c(" para experiment\xE1-lo. O identificador "),le=u("code"),Ce=c("camembert-base"),ze=c(" \xE9 tudo o que precisamos para come\xE7ar a utiliz\xE1-lo! Como voc\xEA j\xE1 viu nos cap\xEDtulos anteriores, podemos instanci\xE1-lo utilizando a fun\xE7\xE3o "),ie=u("code"),ye=c("pipeline()"),Me=c(":"),be=k(),N(K.$$.fragment),ge=k(),N(Q.$$.fragment),_e=k(),z=u("p"),Ae=c("Como voc\xEA pode ver, carregar um modelo dentro de um pipeline \xE9 extremamente simples. A \xFAnica coisa que voc\xEA precisa estar atento \xE9 que o checkpoint escolhido \xE9 adequado para a tarefa para a qual ele ser\xE1 utilizado. Por exemplo, aqui estamos carregando o checkpoint "),ce=u("code"),Te=c("camembert-base"),Le=c(" no pipeline "),me=u("code"),De=c("fill-mask"),Fe=c(", o que \xE9 completamente bom. Mas se carreg\xE1ssemos este checkpoint no pipeline de "),pe=u("code"),Oe=c("text-classification"),Ne=c(", os resultados n\xE3o fariam sentido porque a head da "),ue=u("code"),Pe=c("camembert-base"),Se=c(" n\xE3o \xE9 adequado para esta tarefa! Recomendamos a utiliza\xE7\xE3o do seletor de tarefas na interface do Hub de abra\xE7o facial a fim de selecionar os checkpoints apropriados:"),ke=k(),W=u("div"),X=u("img"),$e=k(),se=u("p"),Re=c("Voc\xEA tamb\xE9m pode instanciar o checkpoint usando diretamente a arquitetura modelo:"),xe=k(),O.c(),ae=k(),N(G.$$.fragment),this.h()},l(e){const n=us('[data-svelte="svelte-1phssyn"]',document.head);r=d(n,"META",{name:!0,content:!0}),n.forEach(s),l=$(e),P(a.$$.fragment,e),x=$(e),b=d(e,"H1",{class:!0});var ee=h(b);_=d(ee,"A",{id:!0,class:!0,href:!0});var te=h(_);M=d(te,"SPAN",{});var oe=h(M);P(v.$$.fragment,oe),oe.forEach(s),te.forEach(s),j=$(ee),A=d(ee,"SPAN",{});var de=h(A);D=m(de,"Usando modelos pr\xE9-treinados"),de.forEach(s),ee.forEach(s),C=$(e),g.l(e),t=$(e),i=d(e,"P",{});var Je=h(i);V=m(Je,"O Model Hub torna simples a sele\xE7\xE3o do modelo apropriado, de modo que o uso em qualquer biblioteca pode ser feito em algumas linhas de c\xF3digo. Vamos dar uma olhada em como realmente usar um desses modelos, e como contribuir de volta \xE0 comunidade."),Je.forEach(s),B=$(e),T=d(e,"P",{});var Ke=h(T);ve=m(Ke,"Digamos que estamos \xE0 procura de um modelo baseado na l\xEDngua francesa que possa realizar o enchimento de m\xE1scara."),Ke.forEach(s),fe=$(e),U=d(e,"DIV",{class:!0});var Qe=h(U);J=d(Qe,"IMG",{src:!0,alt:!0,width:!0}),Qe.forEach(s),he=$(e),L=d(e,"P",{});var H=h(L);je=m(H,"Selecionamos o checkpoint "),ne=d(H,"CODE",{});var We=h(ne);we=m(We,"camembert-base"),We.forEach(s),Ee=m(H," para experiment\xE1-lo. O identificador "),le=d(H,"CODE",{});var Xe=h(le);Ce=m(Xe,"camembert-base"),Xe.forEach(s),ze=m(H," \xE9 tudo o que precisamos para come\xE7ar a utiliz\xE1-lo! Como voc\xEA j\xE1 viu nos cap\xEDtulos anteriores, podemos instanci\xE1-lo utilizando a fun\xE7\xE3o "),ie=d(H,"CODE",{});var Ye=h(ie);ye=m(Ye,"pipeline()"),Ye.forEach(s),Me=m(H,":"),H.forEach(s),be=$(e),P(K.$$.fragment,e),ge=$(e),P(Q.$$.fragment,e),_e=$(e),z=d(e,"P",{});var I=h(z);Ae=m(I,"Como voc\xEA pode ver, carregar um modelo dentro de um pipeline \xE9 extremamente simples. A \xFAnica coisa que voc\xEA precisa estar atento \xE9 que o checkpoint escolhido \xE9 adequado para a tarefa para a qual ele ser\xE1 utilizado. Por exemplo, aqui estamos carregando o checkpoint "),ce=d(I,"CODE",{});var Ze=h(ce);Te=m(Ze,"camembert-base"),Ze.forEach(s),Le=m(I," no pipeline "),me=d(I,"CODE",{});var es=h(me);De=m(es,"fill-mask"),es.forEach(s),Fe=m(I,", o que \xE9 completamente bom. Mas se carreg\xE1ssemos este checkpoint no pipeline de "),pe=d(I,"CODE",{});var ss=h(pe);Oe=m(ss,"text-classification"),ss.forEach(s),Ne=m(I,", os resultados n\xE3o fariam sentido porque a head da "),ue=d(I,"CODE",{});var as=h(ue);Pe=m(as,"camembert-base"),as.forEach(s),Se=m(I," n\xE3o \xE9 adequado para esta tarefa! Recomendamos a utiliza\xE7\xE3o do seletor de tarefas na interface do Hub de abra\xE7o facial a fim de selecionar os checkpoints apropriados:"),I.forEach(s),ke=$(e),W=d(e,"DIV",{class:!0});var ts=h(W);X=d(ts,"IMG",{src:!0,alt:!0,width:!0}),ts.forEach(s),$e=$(e),se=d(e,"P",{});var os=h(se);Re=m(os,"Voc\xEA tamb\xE9m pode instanciar o checkpoint usando diretamente a arquitetura modelo:"),os.forEach(s),xe=$(e),O.l(e),ae=$(e),P(G.$$.fragment,e),this.h()},h(){q(r,"name","hf:doc:metadata"),q(r,"content",JSON.stringify(vs)),q(_,"id","usando-modelos-prtreinados"),q(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),q(_,"href","#usando-modelos-prtreinados"),q(b,"class","relative group"),rs(J.src,Be="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter4/camembert.gif")||q(J,"src",Be),q(J,"alt","Selecting the Camembert model."),q(J,"width","80%"),q(U,"class","flex justify-center"),rs(X.src,Ie="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter4/tasks.png")||q(X,"src",Ie),q(X,"alt","The task selector on the web interface."),q(X,"width","80%"),q(W,"class","flex justify-center")},m(e,n){o(document.head,r),p(e,l,n),S(a,e,n),p(e,x,n),p(e,b,n),o(b,_),o(_,M),S(v,M,null),o(b,j),o(b,A),o(A,D),p(e,C,n),Y[f].m(e,n),p(e,t,n),p(e,i,n),o(i,V),p(e,B,n),p(e,T,n),o(T,ve),p(e,fe,n),p(e,U,n),o(U,J),p(e,he,n),p(e,L,n),o(L,je),o(L,ne),o(ne,we),o(L,Ee),o(L,le),o(le,Ce),o(L,ze),o(L,ie),o(ie,ye),o(L,Me),p(e,be,n),S(K,e,n),p(e,ge,n),S(Q,e,n),p(e,_e,n),p(e,z,n),o(z,Ae),o(z,ce),o(ce,Te),o(z,Le),o(z,me),o(me,De),o(z,Fe),o(z,pe),o(pe,Oe),o(z,Ne),o(z,ue),o(ue,Pe),o(z,Se),p(e,ke,n),p(e,W,n),o(W,X),p(e,$e,n),p(e,se,n),o(se,Re),p(e,xe,n),Z[F].m(e,n),p(e,ae,n),S(G,e,n),qe=!0},p(e,[n]){const ee={};n&1&&(ee.fw=e[0]),a.$set(ee);let te=f;f=Ge(e),f!==te&&(ls(),w(Y[te],1,1,()=>{Y[te]=null}),ns(),g=Y[f],g||(g=Y[f]=Ve[f](e),g.c()),E(g,1),g.m(t.parentNode,t));let oe=F;F=Ue(e),F!==oe&&(ls(),w(Z[oe],1,1,()=>{Z[oe]=null}),ns(),O=Z[F],O||(O=Z[F]=He[F](e),O.c()),E(O,1),O.m(ae.parentNode,ae));const de={};n&2&&(de.$$scope={dirty:n,ctx:e}),G.$set(de)},i(e){qe||(E(a.$$.fragment,e),E(v.$$.fragment,e),E(g),E(K.$$.fragment,e),E(Q.$$.fragment,e),E(O),E(G.$$.fragment,e),qe=!0)},o(e){w(a.$$.fragment,e),w(v.$$.fragment,e),w(g),w(K.$$.fragment,e),w(Q.$$.fragment,e),w(O),w(G.$$.fragment,e),qe=!1},d(e){s(r),e&&s(l),R(a,e),e&&s(x),e&&s(b),R(v),e&&s(C),Y[f].d(e),e&&s(t),e&&s(i),e&&s(B),e&&s(T),e&&s(fe),e&&s(U),e&&s(he),e&&s(L),e&&s(be),R(K,e),e&&s(ge),R(Q,e),e&&s(_e),e&&s(z),e&&s(ke),e&&s(W),e&&s($e),e&&s(se),e&&s(xe),Z[F].d(e),e&&s(ae),R(G,e)}}}const vs={local:"usando-modelos-prtreinados",title:"Usando modelos pr\xE9-treinados"};function js(y,r,l){let a="pt";return ds(()=>{const x=new URLSearchParams(window.location.search);l(0,a=x.get("fw")||"pt")}),[a]}class As extends cs{constructor(r){super();ms(this,r,js,qs,ps,{})}}export{As as default,vs as metadata};
