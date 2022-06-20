import{S as Qo,i as Wo,s as Jo,e as r,k as m,w as u,t as c,M as Ro,c as s,d as a,m as d,a as l,x as f,h as p,b as i,G as o,g as n,y as h,L as Ko,q as v,o as _,B as $,v as Vo}from"../chunks/vendor-hf-doc-builder.js";import{I as ne}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as U}from"../chunks/CodeBlock-hf-doc-builder.js";function Xo(lo){let w,Oe,k,q,he,B,ba,ve,ga,De,z,wa,M,ka,Ea,He,E,N,_e,F,Aa,$e,ja,Ge,ie,Pa,Le,I,Ue,b,ya,Q,be,Sa,qa,ge,za,Na,Be,W,Me,A,C,we,J,Ca,ke,xa,Fe,x,Ta,R,Ee,Oa,Da,Ie,K,Qe,j,T,Ae,V,Ha,je,Ga,We,g,La,Pe,Ua,Ba,X,ye,Ma,Fa,Je,Y,Re,ce,Ia,Ke,Z,Ve,P,O,Se,ee,Qa,qe,Wa,Xe,pe,Ja,Ye,y,D,ze,ae,Ra,Ne,Ka,Ze,me,Va,ea,oe,aa,de,Xa,oa,te,ta,S,H,Ce,re,Ya,xe,Za,ra,G,eo,Te,ao,oo,sa,se,la,L,to,le,ro,so,na;return B=new ne({}),F=new ne({}),I=new U({props:{code:"pip install accelerate",highlighted:"pip install accelerate"}}),W=new U({props:{code:`from accelerate import Accelerator

accelerator = Accelerator()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

<span class="hljs-meta">&gt;&gt;&gt; </span>accelerator = Accelerator()`}}),J=new ne({}),K=new U({props:{code:`train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
    train_dataloader, eval_dataloader, model, optimizer
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
<span class="hljs-meta">... </span>    train_dataloader, eval_dataloader, model, optimizer
<span class="hljs-meta">... </span>)`}}),V=new ne({}),Y=new U({props:{code:`for epoch in range(num_epochs):
    for batch in train_dataloader:
        outputs = model(**batch)
        loss = outputs.loss
        accelerator.backward(loss)

        optimizer.step()
        lr_scheduler.step()
        optimizer.zero_grad()
        progress_bar.update(1)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(num_epochs):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
<span class="hljs-meta">... </span>        outputs = model(**batch)
<span class="hljs-meta">... </span>        loss = outputs.loss
<span class="hljs-meta">... </span>        accelerator.backward(loss)

<span class="hljs-meta">... </span>        optimizer.step()
<span class="hljs-meta">... </span>        lr_scheduler.step()
<span class="hljs-meta">... </span>        optimizer.zero_grad()
<span class="hljs-meta">... </span>        progress_bar.update(<span class="hljs-number">1</span>)`}}),Z=new U({props:{code:`






`,highlighted:`<span class="hljs-addition">+ from accelerate import Accelerator</span>
  from transformers import AdamW, AutoModelForSequenceClassification, get_scheduler

<span class="hljs-addition">+ accelerator = Accelerator()</span>

  model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)
  optimizer = AdamW(model.parameters(), lr=3e-5)

<span class="hljs-deletion">- device = torch.device(&quot;cuda&quot;) if torch.cuda.is_available() else torch.device(&quot;cpu&quot;)</span>
<span class="hljs-deletion">- model.to(device)</span>

<span class="hljs-addition">+ train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(</span>
<span class="hljs-addition">+     train_dataloader, eval_dataloader, model, optimizer</span>
<span class="hljs-addition">+ )</span>

  num_epochs = 3
  num_training_steps = num_epochs * len(train_dataloader)
  lr_scheduler = get_scheduler(
      &quot;linear&quot;,
      optimizer=optimizer,
      num_warmup_steps=0,
      num_training_steps=num_training_steps
  )

  progress_bar = tqdm(range(num_training_steps))

  model.train()
  for epoch in range(num_epochs):
      for batch in train_dataloader:
<span class="hljs-deletion">-         batch = {k: v.to(device) for k, v in batch.items()}</span>
          outputs = model(**batch)
          loss = outputs.loss
<span class="hljs-deletion">-         loss.backward()</span>
<span class="hljs-addition">+         accelerator.backward(loss)</span>

          optimizer.step()
          lr_scheduler.step()
          optimizer.zero_grad()
          progress_bar.update(1)`}}),ee=new ne({}),ae=new ne({}),oe=new U({props:{code:"accelerate config",highlighted:"accelerate config"}}),te=new U({props:{code:"accelerate launch train.py",highlighted:"accelerate launch train.py"}}),re=new ne({}),se=new U({props:{code:`from accelerate import notebook_launcher

notebook_launcher(training_function)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> notebook_launcher

<span class="hljs-meta">&gt;&gt;&gt; </span>notebook_launcher(training_function)`}}),{c(){w=r("meta"),Oe=m(),k=r("h1"),q=r("a"),he=r("span"),u(B.$$.fragment),ba=m(),ve=r("span"),ga=c("Treinamento distribu\xEDdo com o \u{1F917} Accelerate"),De=m(),z=r("p"),wa=c(`O paralelismo surgiu como uma estrat\xE9gia para treinar modelos grandes em hardware limitado e aumentar a velocidade
de treinamento em v\xE1rias \xF3rdens de magnitude. Na Hugging Face criamos a biblioteca `),M=r("a"),ka=c("\u{1F917} Accelerate"),Ea=c(`
para ajudar os usu\xE1rios a treinar modelos \u{1F917} Transformers com qualquer configura\xE7\xE3o distribu\xEDda, seja em uma m\xE1quina
com m\xFAltiplos GPUs ou em m\xFAltiplos GPUs distribuidos entre muitas m\xE1quinas. Neste tutorial, voc\xEA ir\xE1 aprender como
personalizar seu la\xE7o de treinamento de PyTorch para poder treinar em ambientes distribu\xEDdos.`),He=m(),E=r("h2"),N=r("a"),_e=r("span"),u(F.$$.fragment),Aa=m(),$e=r("span"),ja=c("Configura\xE7\xE3o"),Ge=m(),ie=r("p"),Pa=c("De in\xEDcio, instale o \u{1F917} Accelerate:"),Le=m(),u(I.$$.fragment),Ue=m(),b=r("p"),ya=c("Logo, devemos importar e criar um objeto "),Q=r("a"),be=r("code"),Sa=c("Accelerator"),qa=c(`.
O `),ge=r("code"),za=c("Accelerator"),Na=c(` detectar\xE1 autom\xE1ticamente a configura\xE7\xE3o distribu\xEDda dispon\xEDvel e inicializar\xE1 todos os
componentes necess\xE1rios para o treinamento. N\xE3o h\xE1 necessidade portanto de especificar o dispositivo onde deve colocar seu modelo.`),Be=m(),u(W.$$.fragment),Me=m(),A=r("h2"),C=r("a"),we=r("span"),u(J.$$.fragment),Ca=m(),ke=r("span"),xa=c("Preparando a acelera\xE7\xE3o"),Fe=m(),x=r("p"),Ta=c("Passe todos os objetos relevantes ao treinamento para o m\xE9todo "),R=r("a"),Ee=r("code"),Oa=c("prepare"),Da=c(`.
Isto inclui os DataLoaders de treino e evalua\xE7\xE3o, um modelo e um otimizador:`),Ie=m(),u(K.$$.fragment),Qe=m(),j=r("h2"),T=r("a"),Ae=r("span"),u(V.$$.fragment),Ha=m(),je=r("span"),Ga=c("Backward"),We=m(),g=r("p"),La=c("Por \xFAltimo, substitua o "),Pe=r("code"),Ua=c("loss.backward()"),Ba=c(" padr\xE3o em seu la\xE7o de treinamento com o m\xE9todo "),X=r("a"),ye=r("code"),Ma=c("backward"),Fa=c(" do \u{1F917} Accelerate:"),Je=m(),u(Y.$$.fragment),Re=m(),ce=r("p"),Ia=c(`Como se poder ver no seguinte c\xF3digo, s\xF3 precisar\xE1 adicionar quatro linhas de c\xF3digo ao seu la\xE7o de treinamento
para habilitar o treinamento distribu\xEDdo!`),Ke=m(),u(Z.$$.fragment),Ve=m(),P=r("h2"),O=r("a"),Se=r("span"),u(ee.$$.fragment),Qa=m(),qe=r("span"),Wa=c("Treinamento"),Xe=m(),pe=r("p"),Ja=c("Quando tiver adicionado as linhas de c\xF3digo relevantes, inicie o treinamento por um script ou notebook como o Colab."),Ye=m(),y=r("h3"),D=r("a"),ze=r("span"),u(ae.$$.fragment),Ra=m(),Ne=r("span"),Ka=c("Treinamento em um Script"),Ze=m(),me=r("p"),Va=c("Se estiver rodando seu treinamento em um Script, execute o seguinte comando para criar e guardar um arquivo de configura\xE7\xE3o:"),ea=m(),u(oe.$$.fragment),aa=m(),de=r("p"),Xa=c("Comece o treinamento com:"),oa=m(),u(te.$$.fragment),ta=m(),S=r("h3"),H=r("a"),Ce=r("span"),u(re.$$.fragment),Ya=m(),xe=r("span"),Za=c("Treinamento em um Notebook"),ra=m(),G=r("p"),eo=c(`O \u{1F917} Accelerate pode rodar em um notebook, por exemplo, se estiver planejando usar as TPUs do Google Colab.
Encapsule o c\xF3digo respons\xE1vel pelo treinamento de uma fun\xE7\xE3o e passe-o ao `),Te=r("code"),ao=c("notebook_launcher"),oo=c(":"),sa=m(),u(se.$$.fragment),la=m(),L=r("p"),to=c("Para obter mais informa\xE7\xF5es sobre o \u{1F917} Accelerate e suas numerosas fun\xE7\xF5es, consulte a "),le=r("a"),ro=c("documentaci\xF3n"),so=c("."),this.h()},l(e){const t=Ro('[data-svelte="svelte-1phssyn"]',document.head);w=s(t,"META",{name:!0,content:!0}),t.forEach(a),Oe=d(e),k=s(e,"H1",{class:!0});var ia=l(k);q=s(ia,"A",{id:!0,class:!0,href:!0});var no=l(q);he=s(no,"SPAN",{});var io=l(he);f(B.$$.fragment,io),io.forEach(a),no.forEach(a),ba=d(ia),ve=s(ia,"SPAN",{});var co=l(ve);ga=p(co,"Treinamento distribu\xEDdo com o \u{1F917} Accelerate"),co.forEach(a),ia.forEach(a),De=d(e),z=s(e,"P",{});var ca=l(z);wa=p(ca,`O paralelismo surgiu como uma estrat\xE9gia para treinar modelos grandes em hardware limitado e aumentar a velocidade
de treinamento em v\xE1rias \xF3rdens de magnitude. Na Hugging Face criamos a biblioteca `),M=s(ca,"A",{href:!0,rel:!0});var po=l(M);ka=p(po,"\u{1F917} Accelerate"),po.forEach(a),Ea=p(ca,`
para ajudar os usu\xE1rios a treinar modelos \u{1F917} Transformers com qualquer configura\xE7\xE3o distribu\xEDda, seja em uma m\xE1quina
com m\xFAltiplos GPUs ou em m\xFAltiplos GPUs distribuidos entre muitas m\xE1quinas. Neste tutorial, voc\xEA ir\xE1 aprender como
personalizar seu la\xE7o de treinamento de PyTorch para poder treinar em ambientes distribu\xEDdos.`),ca.forEach(a),He=d(e),E=s(e,"H2",{class:!0});var pa=l(E);N=s(pa,"A",{id:!0,class:!0,href:!0});var mo=l(N);_e=s(mo,"SPAN",{});var uo=l(_e);f(F.$$.fragment,uo),uo.forEach(a),mo.forEach(a),Aa=d(pa),$e=s(pa,"SPAN",{});var fo=l($e);ja=p(fo,"Configura\xE7\xE3o"),fo.forEach(a),pa.forEach(a),Ge=d(e),ie=s(e,"P",{});var ho=l(ie);Pa=p(ho,"De in\xEDcio, instale o \u{1F917} Accelerate:"),ho.forEach(a),Le=d(e),f(I.$$.fragment,e),Ue=d(e),b=s(e,"P",{});var ue=l(b);ya=p(ue,"Logo, devemos importar e criar um objeto "),Q=s(ue,"A",{href:!0,rel:!0});var vo=l(Q);be=s(vo,"CODE",{});var _o=l(be);Sa=p(_o,"Accelerator"),_o.forEach(a),vo.forEach(a),qa=p(ue,`.
O `),ge=s(ue,"CODE",{});var $o=l(ge);za=p($o,"Accelerator"),$o.forEach(a),Na=p(ue,` detectar\xE1 autom\xE1ticamente a configura\xE7\xE3o distribu\xEDda dispon\xEDvel e inicializar\xE1 todos os
componentes necess\xE1rios para o treinamento. N\xE3o h\xE1 necessidade portanto de especificar o dispositivo onde deve colocar seu modelo.`),ue.forEach(a),Be=d(e),f(W.$$.fragment,e),Me=d(e),A=s(e,"H2",{class:!0});var ma=l(A);C=s(ma,"A",{id:!0,class:!0,href:!0});var bo=l(C);we=s(bo,"SPAN",{});var go=l(we);f(J.$$.fragment,go),go.forEach(a),bo.forEach(a),Ca=d(ma),ke=s(ma,"SPAN",{});var wo=l(ke);xa=p(wo,"Preparando a acelera\xE7\xE3o"),wo.forEach(a),ma.forEach(a),Fe=d(e),x=s(e,"P",{});var da=l(x);Ta=p(da,"Passe todos os objetos relevantes ao treinamento para o m\xE9todo "),R=s(da,"A",{href:!0,rel:!0});var ko=l(R);Ee=s(ko,"CODE",{});var Eo=l(Ee);Oa=p(Eo,"prepare"),Eo.forEach(a),ko.forEach(a),Da=p(da,`.
Isto inclui os DataLoaders de treino e evalua\xE7\xE3o, um modelo e um otimizador:`),da.forEach(a),Ie=d(e),f(K.$$.fragment,e),Qe=d(e),j=s(e,"H2",{class:!0});var ua=l(j);T=s(ua,"A",{id:!0,class:!0,href:!0});var Ao=l(T);Ae=s(Ao,"SPAN",{});var jo=l(Ae);f(V.$$.fragment,jo),jo.forEach(a),Ao.forEach(a),Ha=d(ua),je=s(ua,"SPAN",{});var Po=l(je);Ga=p(Po,"Backward"),Po.forEach(a),ua.forEach(a),We=d(e),g=s(e,"P",{});var fe=l(g);La=p(fe,"Por \xFAltimo, substitua o "),Pe=s(fe,"CODE",{});var yo=l(Pe);Ua=p(yo,"loss.backward()"),yo.forEach(a),Ba=p(fe," padr\xE3o em seu la\xE7o de treinamento com o m\xE9todo "),X=s(fe,"A",{href:!0,rel:!0});var So=l(X);ye=s(So,"CODE",{});var qo=l(ye);Ma=p(qo,"backward"),qo.forEach(a),So.forEach(a),Fa=p(fe," do \u{1F917} Accelerate:"),fe.forEach(a),Je=d(e),f(Y.$$.fragment,e),Re=d(e),ce=s(e,"P",{});var zo=l(ce);Ia=p(zo,`Como se poder ver no seguinte c\xF3digo, s\xF3 precisar\xE1 adicionar quatro linhas de c\xF3digo ao seu la\xE7o de treinamento
para habilitar o treinamento distribu\xEDdo!`),zo.forEach(a),Ke=d(e),f(Z.$$.fragment,e),Ve=d(e),P=s(e,"H2",{class:!0});var fa=l(P);O=s(fa,"A",{id:!0,class:!0,href:!0});var No=l(O);Se=s(No,"SPAN",{});var Co=l(Se);f(ee.$$.fragment,Co),Co.forEach(a),No.forEach(a),Qa=d(fa),qe=s(fa,"SPAN",{});var xo=l(qe);Wa=p(xo,"Treinamento"),xo.forEach(a),fa.forEach(a),Xe=d(e),pe=s(e,"P",{});var To=l(pe);Ja=p(To,"Quando tiver adicionado as linhas de c\xF3digo relevantes, inicie o treinamento por um script ou notebook como o Colab."),To.forEach(a),Ye=d(e),y=s(e,"H3",{class:!0});var ha=l(y);D=s(ha,"A",{id:!0,class:!0,href:!0});var Oo=l(D);ze=s(Oo,"SPAN",{});var Do=l(ze);f(ae.$$.fragment,Do),Do.forEach(a),Oo.forEach(a),Ra=d(ha),Ne=s(ha,"SPAN",{});var Ho=l(Ne);Ka=p(Ho,"Treinamento em um Script"),Ho.forEach(a),ha.forEach(a),Ze=d(e),me=s(e,"P",{});var Go=l(me);Va=p(Go,"Se estiver rodando seu treinamento em um Script, execute o seguinte comando para criar e guardar um arquivo de configura\xE7\xE3o:"),Go.forEach(a),ea=d(e),f(oe.$$.fragment,e),aa=d(e),de=s(e,"P",{});var Lo=l(de);Xa=p(Lo,"Comece o treinamento com:"),Lo.forEach(a),oa=d(e),f(te.$$.fragment,e),ta=d(e),S=s(e,"H3",{class:!0});var va=l(S);H=s(va,"A",{id:!0,class:!0,href:!0});var Uo=l(H);Ce=s(Uo,"SPAN",{});var Bo=l(Ce);f(re.$$.fragment,Bo),Bo.forEach(a),Uo.forEach(a),Ya=d(va),xe=s(va,"SPAN",{});var Mo=l(xe);Za=p(Mo,"Treinamento em um Notebook"),Mo.forEach(a),va.forEach(a),ra=d(e),G=s(e,"P",{});var _a=l(G);eo=p(_a,`O \u{1F917} Accelerate pode rodar em um notebook, por exemplo, se estiver planejando usar as TPUs do Google Colab.
Encapsule o c\xF3digo respons\xE1vel pelo treinamento de uma fun\xE7\xE3o e passe-o ao `),Te=s(_a,"CODE",{});var Fo=l(Te);ao=p(Fo,"notebook_launcher"),Fo.forEach(a),oo=p(_a,":"),_a.forEach(a),sa=d(e),f(se.$$.fragment,e),la=d(e),L=s(e,"P",{});var $a=l(L);to=p($a,"Para obter mais informa\xE7\xF5es sobre o \u{1F917} Accelerate e suas numerosas fun\xE7\xF5es, consulte a "),le=s($a,"A",{href:!0,rel:!0});var Io=l(le);ro=p(Io,"documentaci\xF3n"),Io.forEach(a),so=p($a,"."),$a.forEach(a),this.h()},h(){i(w,"name","hf:doc:metadata"),i(w,"content",JSON.stringify(Yo)),i(q,"id","treinamento-distribudo-com-o-accelerate"),i(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(q,"href","#treinamento-distribudo-com-o-accelerate"),i(k,"class","relative group"),i(M,"href","https://huggingface.co/docs/accelerate/index.html"),i(M,"rel","nofollow"),i(N,"id","configurao"),i(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(N,"href","#configurao"),i(E,"class","relative group"),i(Q,"href","https://huggingface.co/docs/accelerate/accelerator.html#accelerate.Accelerator"),i(Q,"rel","nofollow"),i(C,"id","preparando-a-acelerao"),i(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(C,"href","#preparando-a-acelerao"),i(A,"class","relative group"),i(R,"href","https://huggingface.co/docs/accelerate/accelerator.html#accelerate.Accelerator.prepare"),i(R,"rel","nofollow"),i(T,"id","backward"),i(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(T,"href","#backward"),i(j,"class","relative group"),i(X,"href","https://huggingface.co/docs/accelerate/accelerator.html#accelerate.Accelerator.backward"),i(X,"rel","nofollow"),i(O,"id","treinamento"),i(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(O,"href","#treinamento"),i(P,"class","relative group"),i(D,"id","treinamento-em-um-script"),i(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(D,"href","#treinamento-em-um-script"),i(y,"class","relative group"),i(H,"id","treinamento-em-um-notebook"),i(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(H,"href","#treinamento-em-um-notebook"),i(S,"class","relative group"),i(le,"href","https://huggingface.co/docs/accelerate/index.html"),i(le,"rel","nofollow")},m(e,t){o(document.head,w),n(e,Oe,t),n(e,k,t),o(k,q),o(q,he),h(B,he,null),o(k,ba),o(k,ve),o(ve,ga),n(e,De,t),n(e,z,t),o(z,wa),o(z,M),o(M,ka),o(z,Ea),n(e,He,t),n(e,E,t),o(E,N),o(N,_e),h(F,_e,null),o(E,Aa),o(E,$e),o($e,ja),n(e,Ge,t),n(e,ie,t),o(ie,Pa),n(e,Le,t),h(I,e,t),n(e,Ue,t),n(e,b,t),o(b,ya),o(b,Q),o(Q,be),o(be,Sa),o(b,qa),o(b,ge),o(ge,za),o(b,Na),n(e,Be,t),h(W,e,t),n(e,Me,t),n(e,A,t),o(A,C),o(C,we),h(J,we,null),o(A,Ca),o(A,ke),o(ke,xa),n(e,Fe,t),n(e,x,t),o(x,Ta),o(x,R),o(R,Ee),o(Ee,Oa),o(x,Da),n(e,Ie,t),h(K,e,t),n(e,Qe,t),n(e,j,t),o(j,T),o(T,Ae),h(V,Ae,null),o(j,Ha),o(j,je),o(je,Ga),n(e,We,t),n(e,g,t),o(g,La),o(g,Pe),o(Pe,Ua),o(g,Ba),o(g,X),o(X,ye),o(ye,Ma),o(g,Fa),n(e,Je,t),h(Y,e,t),n(e,Re,t),n(e,ce,t),o(ce,Ia),n(e,Ke,t),h(Z,e,t),n(e,Ve,t),n(e,P,t),o(P,O),o(O,Se),h(ee,Se,null),o(P,Qa),o(P,qe),o(qe,Wa),n(e,Xe,t),n(e,pe,t),o(pe,Ja),n(e,Ye,t),n(e,y,t),o(y,D),o(D,ze),h(ae,ze,null),o(y,Ra),o(y,Ne),o(Ne,Ka),n(e,Ze,t),n(e,me,t),o(me,Va),n(e,ea,t),h(oe,e,t),n(e,aa,t),n(e,de,t),o(de,Xa),n(e,oa,t),h(te,e,t),n(e,ta,t),n(e,S,t),o(S,H),o(H,Ce),h(re,Ce,null),o(S,Ya),o(S,xe),o(xe,Za),n(e,ra,t),n(e,G,t),o(G,eo),o(G,Te),o(Te,ao),o(G,oo),n(e,sa,t),h(se,e,t),n(e,la,t),n(e,L,t),o(L,to),o(L,le),o(le,ro),o(L,so),na=!0},p:Ko,i(e){na||(v(B.$$.fragment,e),v(F.$$.fragment,e),v(I.$$.fragment,e),v(W.$$.fragment,e),v(J.$$.fragment,e),v(K.$$.fragment,e),v(V.$$.fragment,e),v(Y.$$.fragment,e),v(Z.$$.fragment,e),v(ee.$$.fragment,e),v(ae.$$.fragment,e),v(oe.$$.fragment,e),v(te.$$.fragment,e),v(re.$$.fragment,e),v(se.$$.fragment,e),na=!0)},o(e){_(B.$$.fragment,e),_(F.$$.fragment,e),_(I.$$.fragment,e),_(W.$$.fragment,e),_(J.$$.fragment,e),_(K.$$.fragment,e),_(V.$$.fragment,e),_(Y.$$.fragment,e),_(Z.$$.fragment,e),_(ee.$$.fragment,e),_(ae.$$.fragment,e),_(oe.$$.fragment,e),_(te.$$.fragment,e),_(re.$$.fragment,e),_(se.$$.fragment,e),na=!1},d(e){a(w),e&&a(Oe),e&&a(k),$(B),e&&a(De),e&&a(z),e&&a(He),e&&a(E),$(F),e&&a(Ge),e&&a(ie),e&&a(Le),$(I,e),e&&a(Ue),e&&a(b),e&&a(Be),$(W,e),e&&a(Me),e&&a(A),$(J),e&&a(Fe),e&&a(x),e&&a(Ie),$(K,e),e&&a(Qe),e&&a(j),$(V),e&&a(We),e&&a(g),e&&a(Je),$(Y,e),e&&a(Re),e&&a(ce),e&&a(Ke),$(Z,e),e&&a(Ve),e&&a(P),$(ee),e&&a(Xe),e&&a(pe),e&&a(Ye),e&&a(y),$(ae),e&&a(Ze),e&&a(me),e&&a(ea),$(oe,e),e&&a(aa),e&&a(de),e&&a(oa),$(te,e),e&&a(ta),e&&a(S),$(re),e&&a(ra),e&&a(G),e&&a(sa),$(se,e),e&&a(la),e&&a(L)}}}const Yo={local:"treinamento-distribudo-com-o-accelerate",sections:[{local:"configurao",title:"Configura\xE7\xE3o"},{local:"preparando-a-acelerao",title:"Preparando a acelera\xE7\xE3o"},{local:"backward",title:"Backward"},{local:"treinamento",sections:[{local:"treinamento-em-um-script",title:"Treinamento em um Script"},{local:"treinamento-em-um-notebook",title:"Treinamento em um Notebook"}],title:"Treinamento"}],title:"Treinamento distribu\xEDdo com o \u{1F917} Accelerate"};function Zo(lo){return Vo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tt extends Qo{constructor(w){super();Wo(this,w,Zo,Xo,Jo,{})}}export{tt as default,Yo as metadata};
