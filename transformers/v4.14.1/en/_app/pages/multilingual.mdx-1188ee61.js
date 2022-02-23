import{S as ks,i as ws,s as $s,e as t,k as m,w as c,t as o,L as xs,c as s,d as l,m as d,a as n,x as v,h as r,b as h,J as a,g,y as b,K as Ms,q as E,o as _,B as k}from"../chunks/vendor-b1433968.js";import{I as ye}from"../chunks/IconCopyLink-7029626d.js";import{C as tl}from"../chunks/CodeBlock-a320dbd7.js";import{C as Ls}from"../chunks/ColabDropdown-727dc22f.js";import"../chunks/CopyButton-f65cb278.js";function ys(Jl){let $,ee,f,w,Te,O,Yl,Ce,Kl,sl,S,nl,le,Ql,il,M,X,Xe,H,Vl,je,Zl,ol,ae,ea,rl,L,j,Pe,W,la,ze,aa,gl,te,ta,ml,u,se,qe,sa,na,ia,ne,Re,oa,ra,ga,ie,Ae,ma,da,ha,oe,Ne,ua,pa,fa,re,Ie,ca,va,ba,ge,Be,Ea,_a,ka,me,De,wa,$a,dl,x,xa,Oe,Ma,La,Se,ya,Ta,hl,P,Ca,He,Xa,ja,ul,F,pl,z,Pa,We,za,qa,fl,G,cl,de,Ra,vl,U,bl,he,Aa,El,J,_l,ue,Na,kl,Y,wl,q,Ia,K,Ba,Da,$l,y,R,Fe,Q,Oa,Ge,Sa,xl,pe,Ha,Ml,A,fe,Ue,Wa,Fa,Ga,ce,Je,Ua,Ja,Ll,ve,Ya,yl,T,N,Ye,V,Ka,Ke,Qa,Tl,be,Va,Cl,I,Ee,Qe,Za,et,lt,_e,Ve,at,tt,Xl,ke,st,jl,C,B,Ze,Z,nt,el,it,Pl,we,ot,zl,$e,rt,ql,D,xe,ll,gt,mt,dt,Me,al,ht,ut,Rl;return O=new ye({}),S=new Ls({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Mixed",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/multilingual.ipynb"},{label:"PyTorch",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/pytorch/multilingual.ipynb"},{label:"TensorFlow",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/tensorflow/multilingual.ipynb"}]}}),H=new ye({}),W=new ye({}),F=new tl({props:{code:`import torch
from transformers import XLMTokenizer, XLMWithLMHeadModel

tokenizer = XLMTokenizer.from_pretrained("xlm-clm-enfr-1024")
model = XLMWithLMHeadModel.from_pretrained("xlm-clm-enfr-1024"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMWithLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-clm-enfr-1024&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMWithLMHeadModel.from_pretrained(<span class="hljs-string">&quot;xlm-clm-enfr-1024&quot;</span>)`}}),G=new tl({props:{code:"print(tokenizer.lang2id),",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.lang2id)
{<span class="hljs-string">&#x27;en&#x27;</span>: <span class="hljs-number">0</span>, <span class="hljs-string">&#x27;fr&#x27;</span>: <span class="hljs-number">1</span>}`}}),U=new tl({props:{code:'input_ids = torch.tensor([tokenizer.encode("Wikipedia was used to")]) # batch size of 1,',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([tokenizer.encode(<span class="hljs-string">&quot;Wikipedia was used to&quot;</span>)]) <span class="hljs-comment"># batch size of 1</span>'}}),J=new tl({props:{code:`language_id = tokenizer.lang2id['en']  # 0
langs = torch.tensor([language_id] * input_ids.shape[1])  # torch.tensor([0, 0, 0, ..., 0])

# We reshape it to be of size (batch_size, sequence_length)
langs = langs.view(1, -1) # is now of shape [1, sequence_length] (we have a batch size of 1),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>language_id = tokenizer.lang2id[<span class="hljs-string">&#x27;en&#x27;</span>]  <span class="hljs-comment"># 0</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>langs = torch.tensor([language_id] * input_ids.shape[<span class="hljs-number">1</span>])  <span class="hljs-comment"># torch.tensor([0, 0, 0, ..., 0])</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># We reshape it to be of size (batch_size, sequence_length)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>langs = langs.view(<span class="hljs-number">1</span>, -<span class="hljs-number">1</span>) <span class="hljs-comment"># is now of shape [1, sequence_length] (we have a batch size of 1)</span>`}}),Y=new tl({props:{code:"outputs = model(input_ids, langs=langs),",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, langs=langs)'}}),Q=new ye({}),V=new ye({}),Z=new ye({}),{c(){$=t("meta"),ee=m(),f=t("h1"),w=t("a"),Te=t("span"),c(O.$$.fragment),Yl=m(),Ce=t("span"),Kl=o("Multi-lingual models"),sl=m(),c(S.$$.fragment),nl=m(),le=t("p"),Ql=o(`Most of the models available in this library are mono-lingual models (English, Chinese and German). A few multi-lingual
models are available and have a different mechanisms than mono-lingual models. This page details the usage of these
models.`),il=m(),M=t("h2"),X=t("a"),Xe=t("span"),c(H.$$.fragment),Vl=m(),je=t("span"),Zl=o("XLM"),ol=m(),ae=t("p"),ea=o(`XLM has a total of 10 different checkpoints, only one of which is mono-lingual. The 9 remaining model checkpoints can
be split in two categories: the checkpoints that make use of language embeddings, and those that don\u2019t`),rl=m(),L=t("h3"),j=t("a"),Pe=t("span"),c(W.$$.fragment),la=m(),ze=t("span"),aa=o("XLM & Language Embeddings"),gl=m(),te=t("p"),ta=o("This section concerns the following checkpoints:"),ml=m(),u=t("ul"),se=t("li"),qe=t("code"),sa=o("xlm-mlm-ende-1024"),na=o(" (Masked language modeling, English-German)"),ia=m(),ne=t("li"),Re=t("code"),oa=o("xlm-mlm-enfr-1024"),ra=o(" (Masked language modeling, English-French)"),ga=m(),ie=t("li"),Ae=t("code"),ma=o("xlm-mlm-enro-1024"),da=o(" (Masked language modeling, English-Romanian)"),ha=m(),oe=t("li"),Ne=t("code"),ua=o("xlm-mlm-xnli15-1024"),pa=o(" (Masked language modeling, XNLI languages)"),fa=m(),re=t("li"),Ie=t("code"),ca=o("xlm-mlm-tlm-xnli15-1024"),va=o(" (Masked language modeling + Translation, XNLI languages)"),ba=m(),ge=t("li"),Be=t("code"),Ea=o("xlm-clm-enfr-1024"),_a=o(" (Causal language modeling, English-French)"),ka=m(),me=t("li"),De=t("code"),wa=o("xlm-clm-ende-1024"),$a=o(" (Causal language modeling, English-German)"),dl=m(),x=t("p"),xa=o(`These checkpoints require language embeddings that will specify the language used at inference time. These language
embeddings are represented as a tensor that is of the same shape as the input ids passed to the model. The values in
these tensors depend on the language used and are identifiable using the `),Oe=t("code"),Ma=o("lang2id"),La=o(" and "),Se=t("code"),ya=o("id2lang"),Ta=o(` attributes from
the tokenizer.`),hl=m(),P=t("p"),Ca=o("Here is an example using the "),He=t("code"),Xa=o("xlm-clm-enfr-1024"),ja=o(" checkpoint (Causal language modeling, English-French):"),ul=m(),c(F.$$.fragment),pl=m(),z=t("p"),Pa=o(`The different languages this model/tokenizer handles, as well as the ids of these languages are visible using the
`),We=t("code"),za=o("lang2id"),qa=o(" attribute:"),fl=m(),c(G.$$.fragment),cl=m(),de=t("p"),Ra=o("These ids should be used when passing a language parameter during a model pass. Let\u2019s define our inputs:"),vl=m(),c(U.$$.fragment),bl=m(),he=t("p"),Aa=o(`We should now define the language embedding by using the previously defined language id. We want to create a tensor
filled with the appropriate language ids, of the same size as input_ids. For english, the id is 0:`),El=m(),c(J.$$.fragment),_l=m(),ue=t("p"),Na=o("You can then feed it all as input to your model:"),kl=m(),c(Y.$$.fragment),wl=m(),q=t("p"),Ia=o("The example "),K=t("a"),Ba=o("run_generation.py"),Da=o(` can generate text
using the CLM checkpoints from XLM, using the language embeddings.`),$l=m(),y=t("h3"),R=t("a"),Fe=t("span"),c(Q.$$.fragment),Oa=m(),Ge=t("span"),Sa=o("XLM without Language Embeddings"),xl=m(),pe=t("p"),Ha=o("This section concerns the following checkpoints:"),Ml=m(),A=t("ul"),fe=t("li"),Ue=t("code"),Wa=o("xlm-mlm-17-1280"),Fa=o(" (Masked language modeling, 17 languages)"),Ga=m(),ce=t("li"),Je=t("code"),Ua=o("xlm-mlm-100-1280"),Ja=o(" (Masked language modeling, 100 languages)"),Ll=m(),ve=t("p"),Ya=o(`These checkpoints do not require language embeddings at inference time. These models are used to have generic sentence
representations, differently from previously-mentioned XLM checkpoints.`),yl=m(),T=t("h2"),N=t("a"),Ye=t("span"),c(V.$$.fragment),Ka=m(),Ke=t("span"),Qa=o("BERT"),Tl=m(),be=t("p"),Va=o("BERT has two checkpoints that can be used for multi-lingual tasks:"),Cl=m(),I=t("ul"),Ee=t("li"),Qe=t("code"),Za=o("bert-base-multilingual-uncased"),et=o(" (Masked language modeling + Next sentence prediction, 102 languages)"),lt=m(),_e=t("li"),Ve=t("code"),at=o("bert-base-multilingual-cased"),tt=o(" (Masked language modeling + Next sentence prediction, 104 languages)"),Xl=m(),ke=t("p"),st=o(`These checkpoints do not require language embeddings at inference time. They should identify the language used in the
context and infer accordingly.`),jl=m(),C=t("h2"),B=t("a"),Ze=t("span"),c(Z.$$.fragment),nt=m(),el=t("span"),it=o("XLM-RoBERTa"),Pl=m(),we=t("p"),ot=o(`XLM-RoBERTa was trained on 2.5TB of newly created clean CommonCrawl data in 100 languages. It provides strong gains
over previously released multi-lingual models like mBERT or XLM on downstream tasks like classification, sequence
labeling and question answering.`),zl=m(),$e=t("p"),rt=o("Two XLM-RoBERTa checkpoints can be used for multi-lingual tasks:"),ql=m(),D=t("ul"),xe=t("li"),ll=t("code"),gt=o("xlm-roberta-base"),mt=o(" (Masked language modeling, 100 languages)"),dt=m(),Me=t("li"),al=t("code"),ht=o("xlm-roberta-large"),ut=o(" (Masked language modeling, 100 languages)"),this.h()},l(e){const i=xs('[data-svelte="svelte-1phssyn"]',document.head);$=s(i,"META",{name:!0,content:!0}),i.forEach(l),ee=d(e),f=s(e,"H1",{class:!0});var Al=n(f);w=s(Al,"A",{id:!0,class:!0,href:!0});var yt=n(w);Te=s(yt,"SPAN",{});var Tt=n(Te);v(O.$$.fragment,Tt),Tt.forEach(l),yt.forEach(l),Yl=d(Al),Ce=s(Al,"SPAN",{});var Ct=n(Ce);Kl=r(Ct,"Multi-lingual models"),Ct.forEach(l),Al.forEach(l),sl=d(e),v(S.$$.fragment,e),nl=d(e),le=s(e,"P",{});var Xt=n(le);Ql=r(Xt,`Most of the models available in this library are mono-lingual models (English, Chinese and German). A few multi-lingual
models are available and have a different mechanisms than mono-lingual models. This page details the usage of these
models.`),Xt.forEach(l),il=d(e),M=s(e,"H2",{class:!0});var Nl=n(M);X=s(Nl,"A",{id:!0,class:!0,href:!0});var jt=n(X);Xe=s(jt,"SPAN",{});var Pt=n(Xe);v(H.$$.fragment,Pt),Pt.forEach(l),jt.forEach(l),Vl=d(Nl),je=s(Nl,"SPAN",{});var zt=n(je);Zl=r(zt,"XLM"),zt.forEach(l),Nl.forEach(l),ol=d(e),ae=s(e,"P",{});var qt=n(ae);ea=r(qt,`XLM has a total of 10 different checkpoints, only one of which is mono-lingual. The 9 remaining model checkpoints can
be split in two categories: the checkpoints that make use of language embeddings, and those that don\u2019t`),qt.forEach(l),rl=d(e),L=s(e,"H3",{class:!0});var Il=n(L);j=s(Il,"A",{id:!0,class:!0,href:!0});var Rt=n(j);Pe=s(Rt,"SPAN",{});var At=n(Pe);v(W.$$.fragment,At),At.forEach(l),Rt.forEach(l),la=d(Il),ze=s(Il,"SPAN",{});var Nt=n(ze);aa=r(Nt,"XLM & Language Embeddings"),Nt.forEach(l),Il.forEach(l),gl=d(e),te=s(e,"P",{});var It=n(te);ta=r(It,"This section concerns the following checkpoints:"),It.forEach(l),ml=d(e),u=s(e,"UL",{});var p=n(u);se=s(p,"LI",{});var pt=n(se);qe=s(pt,"CODE",{});var Bt=n(qe);sa=r(Bt,"xlm-mlm-ende-1024"),Bt.forEach(l),na=r(pt," (Masked language modeling, English-German)"),pt.forEach(l),ia=d(p),ne=s(p,"LI",{});var ft=n(ne);Re=s(ft,"CODE",{});var Dt=n(Re);oa=r(Dt,"xlm-mlm-enfr-1024"),Dt.forEach(l),ra=r(ft," (Masked language modeling, English-French)"),ft.forEach(l),ga=d(p),ie=s(p,"LI",{});var ct=n(ie);Ae=s(ct,"CODE",{});var Ot=n(Ae);ma=r(Ot,"xlm-mlm-enro-1024"),Ot.forEach(l),da=r(ct," (Masked language modeling, English-Romanian)"),ct.forEach(l),ha=d(p),oe=s(p,"LI",{});var vt=n(oe);Ne=s(vt,"CODE",{});var St=n(Ne);ua=r(St,"xlm-mlm-xnli15-1024"),St.forEach(l),pa=r(vt," (Masked language modeling, XNLI languages)"),vt.forEach(l),fa=d(p),re=s(p,"LI",{});var bt=n(re);Ie=s(bt,"CODE",{});var Ht=n(Ie);ca=r(Ht,"xlm-mlm-tlm-xnli15-1024"),Ht.forEach(l),va=r(bt," (Masked language modeling + Translation, XNLI languages)"),bt.forEach(l),ba=d(p),ge=s(p,"LI",{});var Et=n(ge);Be=s(Et,"CODE",{});var Wt=n(Be);Ea=r(Wt,"xlm-clm-enfr-1024"),Wt.forEach(l),_a=r(Et," (Causal language modeling, English-French)"),Et.forEach(l),ka=d(p),me=s(p,"LI",{});var _t=n(me);De=s(_t,"CODE",{});var Ft=n(De);wa=r(Ft,"xlm-clm-ende-1024"),Ft.forEach(l),$a=r(_t," (Causal language modeling, English-German)"),_t.forEach(l),p.forEach(l),dl=d(e),x=s(e,"P",{});var Le=n(x);xa=r(Le,`These checkpoints require language embeddings that will specify the language used at inference time. These language
embeddings are represented as a tensor that is of the same shape as the input ids passed to the model. The values in
these tensors depend on the language used and are identifiable using the `),Oe=s(Le,"CODE",{});var Gt=n(Oe);Ma=r(Gt,"lang2id"),Gt.forEach(l),La=r(Le," and "),Se=s(Le,"CODE",{});var Ut=n(Se);ya=r(Ut,"id2lang"),Ut.forEach(l),Ta=r(Le,` attributes from
the tokenizer.`),Le.forEach(l),hl=d(e),P=s(e,"P",{});var Bl=n(P);Ca=r(Bl,"Here is an example using the "),He=s(Bl,"CODE",{});var Jt=n(He);Xa=r(Jt,"xlm-clm-enfr-1024"),Jt.forEach(l),ja=r(Bl," checkpoint (Causal language modeling, English-French):"),Bl.forEach(l),ul=d(e),v(F.$$.fragment,e),pl=d(e),z=s(e,"P",{});var Dl=n(z);Pa=r(Dl,`The different languages this model/tokenizer handles, as well as the ids of these languages are visible using the
`),We=s(Dl,"CODE",{});var Yt=n(We);za=r(Yt,"lang2id"),Yt.forEach(l),qa=r(Dl," attribute:"),Dl.forEach(l),fl=d(e),v(G.$$.fragment,e),cl=d(e),de=s(e,"P",{});var Kt=n(de);Ra=r(Kt,"These ids should be used when passing a language parameter during a model pass. Let\u2019s define our inputs:"),Kt.forEach(l),vl=d(e),v(U.$$.fragment,e),bl=d(e),he=s(e,"P",{});var Qt=n(he);Aa=r(Qt,`We should now define the language embedding by using the previously defined language id. We want to create a tensor
filled with the appropriate language ids, of the same size as input_ids. For english, the id is 0:`),Qt.forEach(l),El=d(e),v(J.$$.fragment,e),_l=d(e),ue=s(e,"P",{});var Vt=n(ue);Na=r(Vt,"You can then feed it all as input to your model:"),Vt.forEach(l),kl=d(e),v(Y.$$.fragment,e),wl=d(e),q=s(e,"P",{});var Ol=n(q);Ia=r(Ol,"The example "),K=s(Ol,"A",{href:!0,rel:!0});var Zt=n(K);Ba=r(Zt,"run_generation.py"),Zt.forEach(l),Da=r(Ol,` can generate text
using the CLM checkpoints from XLM, using the language embeddings.`),Ol.forEach(l),$l=d(e),y=s(e,"H3",{class:!0});var Sl=n(y);R=s(Sl,"A",{id:!0,class:!0,href:!0});var es=n(R);Fe=s(es,"SPAN",{});var ls=n(Fe);v(Q.$$.fragment,ls),ls.forEach(l),es.forEach(l),Oa=d(Sl),Ge=s(Sl,"SPAN",{});var as=n(Ge);Sa=r(as,"XLM without Language Embeddings"),as.forEach(l),Sl.forEach(l),xl=d(e),pe=s(e,"P",{});var ts=n(pe);Ha=r(ts,"This section concerns the following checkpoints:"),ts.forEach(l),Ml=d(e),A=s(e,"UL",{});var Hl=n(A);fe=s(Hl,"LI",{});var kt=n(fe);Ue=s(kt,"CODE",{});var ss=n(Ue);Wa=r(ss,"xlm-mlm-17-1280"),ss.forEach(l),Fa=r(kt," (Masked language modeling, 17 languages)"),kt.forEach(l),Ga=d(Hl),ce=s(Hl,"LI",{});var wt=n(ce);Je=s(wt,"CODE",{});var ns=n(Je);Ua=r(ns,"xlm-mlm-100-1280"),ns.forEach(l),Ja=r(wt," (Masked language modeling, 100 languages)"),wt.forEach(l),Hl.forEach(l),Ll=d(e),ve=s(e,"P",{});var is=n(ve);Ya=r(is,`These checkpoints do not require language embeddings at inference time. These models are used to have generic sentence
representations, differently from previously-mentioned XLM checkpoints.`),is.forEach(l),yl=d(e),T=s(e,"H2",{class:!0});var Wl=n(T);N=s(Wl,"A",{id:!0,class:!0,href:!0});var os=n(N);Ye=s(os,"SPAN",{});var rs=n(Ye);v(V.$$.fragment,rs),rs.forEach(l),os.forEach(l),Ka=d(Wl),Ke=s(Wl,"SPAN",{});var gs=n(Ke);Qa=r(gs,"BERT"),gs.forEach(l),Wl.forEach(l),Tl=d(e),be=s(e,"P",{});var ms=n(be);Va=r(ms,"BERT has two checkpoints that can be used for multi-lingual tasks:"),ms.forEach(l),Cl=d(e),I=s(e,"UL",{});var Fl=n(I);Ee=s(Fl,"LI",{});var $t=n(Ee);Qe=s($t,"CODE",{});var ds=n(Qe);Za=r(ds,"bert-base-multilingual-uncased"),ds.forEach(l),et=r($t," (Masked language modeling + Next sentence prediction, 102 languages)"),$t.forEach(l),lt=d(Fl),_e=s(Fl,"LI",{});var xt=n(_e);Ve=s(xt,"CODE",{});var hs=n(Ve);at=r(hs,"bert-base-multilingual-cased"),hs.forEach(l),tt=r(xt," (Masked language modeling + Next sentence prediction, 104 languages)"),xt.forEach(l),Fl.forEach(l),Xl=d(e),ke=s(e,"P",{});var us=n(ke);st=r(us,`These checkpoints do not require language embeddings at inference time. They should identify the language used in the
context and infer accordingly.`),us.forEach(l),jl=d(e),C=s(e,"H2",{class:!0});var Gl=n(C);B=s(Gl,"A",{id:!0,class:!0,href:!0});var ps=n(B);Ze=s(ps,"SPAN",{});var fs=n(Ze);v(Z.$$.fragment,fs),fs.forEach(l),ps.forEach(l),nt=d(Gl),el=s(Gl,"SPAN",{});var cs=n(el);it=r(cs,"XLM-RoBERTa"),cs.forEach(l),Gl.forEach(l),Pl=d(e),we=s(e,"P",{});var vs=n(we);ot=r(vs,`XLM-RoBERTa was trained on 2.5TB of newly created clean CommonCrawl data in 100 languages. It provides strong gains
over previously released multi-lingual models like mBERT or XLM on downstream tasks like classification, sequence
labeling and question answering.`),vs.forEach(l),zl=d(e),$e=s(e,"P",{});var bs=n($e);rt=r(bs,"Two XLM-RoBERTa checkpoints can be used for multi-lingual tasks:"),bs.forEach(l),ql=d(e),D=s(e,"UL",{});var Ul=n(D);xe=s(Ul,"LI",{});var Mt=n(xe);ll=s(Mt,"CODE",{});var Es=n(ll);gt=r(Es,"xlm-roberta-base"),Es.forEach(l),mt=r(Mt," (Masked language modeling, 100 languages)"),Mt.forEach(l),dt=d(Ul),Me=s(Ul,"LI",{});var Lt=n(Me);al=s(Lt,"CODE",{});var _s=n(al);ht=r(_s,"xlm-roberta-large"),_s.forEach(l),ut=r(Lt," (Masked language modeling, 100 languages)"),Lt.forEach(l),Ul.forEach(l),this.h()},h(){h($,"name","hf:doc:metadata"),h($,"content",JSON.stringify(Ts)),h(w,"id","multilingual-models"),h(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(w,"href","#multilingual-models"),h(f,"class","relative group"),h(X,"id","xlm"),h(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(X,"href","#xlm"),h(M,"class","relative group"),h(j,"id","xlm-language-embeddings"),h(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(j,"href","#xlm-language-embeddings"),h(L,"class","relative group"),h(K,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/text-generation/run_generation.py"),h(K,"rel","nofollow"),h(R,"id","xlm-without-language-embeddings"),h(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(R,"href","#xlm-without-language-embeddings"),h(y,"class","relative group"),h(N,"id","bert"),h(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(N,"href","#bert"),h(T,"class","relative group"),h(B,"id","xlmroberta"),h(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(B,"href","#xlmroberta"),h(C,"class","relative group")},m(e,i){a(document.head,$),g(e,ee,i),g(e,f,i),a(f,w),a(w,Te),b(O,Te,null),a(f,Yl),a(f,Ce),a(Ce,Kl),g(e,sl,i),b(S,e,i),g(e,nl,i),g(e,le,i),a(le,Ql),g(e,il,i),g(e,M,i),a(M,X),a(X,Xe),b(H,Xe,null),a(M,Vl),a(M,je),a(je,Zl),g(e,ol,i),g(e,ae,i),a(ae,ea),g(e,rl,i),g(e,L,i),a(L,j),a(j,Pe),b(W,Pe,null),a(L,la),a(L,ze),a(ze,aa),g(e,gl,i),g(e,te,i),a(te,ta),g(e,ml,i),g(e,u,i),a(u,se),a(se,qe),a(qe,sa),a(se,na),a(u,ia),a(u,ne),a(ne,Re),a(Re,oa),a(ne,ra),a(u,ga),a(u,ie),a(ie,Ae),a(Ae,ma),a(ie,da),a(u,ha),a(u,oe),a(oe,Ne),a(Ne,ua),a(oe,pa),a(u,fa),a(u,re),a(re,Ie),a(Ie,ca),a(re,va),a(u,ba),a(u,ge),a(ge,Be),a(Be,Ea),a(ge,_a),a(u,ka),a(u,me),a(me,De),a(De,wa),a(me,$a),g(e,dl,i),g(e,x,i),a(x,xa),a(x,Oe),a(Oe,Ma),a(x,La),a(x,Se),a(Se,ya),a(x,Ta),g(e,hl,i),g(e,P,i),a(P,Ca),a(P,He),a(He,Xa),a(P,ja),g(e,ul,i),b(F,e,i),g(e,pl,i),g(e,z,i),a(z,Pa),a(z,We),a(We,za),a(z,qa),g(e,fl,i),b(G,e,i),g(e,cl,i),g(e,de,i),a(de,Ra),g(e,vl,i),b(U,e,i),g(e,bl,i),g(e,he,i),a(he,Aa),g(e,El,i),b(J,e,i),g(e,_l,i),g(e,ue,i),a(ue,Na),g(e,kl,i),b(Y,e,i),g(e,wl,i),g(e,q,i),a(q,Ia),a(q,K),a(K,Ba),a(q,Da),g(e,$l,i),g(e,y,i),a(y,R),a(R,Fe),b(Q,Fe,null),a(y,Oa),a(y,Ge),a(Ge,Sa),g(e,xl,i),g(e,pe,i),a(pe,Ha),g(e,Ml,i),g(e,A,i),a(A,fe),a(fe,Ue),a(Ue,Wa),a(fe,Fa),a(A,Ga),a(A,ce),a(ce,Je),a(Je,Ua),a(ce,Ja),g(e,Ll,i),g(e,ve,i),a(ve,Ya),g(e,yl,i),g(e,T,i),a(T,N),a(N,Ye),b(V,Ye,null),a(T,Ka),a(T,Ke),a(Ke,Qa),g(e,Tl,i),g(e,be,i),a(be,Va),g(e,Cl,i),g(e,I,i),a(I,Ee),a(Ee,Qe),a(Qe,Za),a(Ee,et),a(I,lt),a(I,_e),a(_e,Ve),a(Ve,at),a(_e,tt),g(e,Xl,i),g(e,ke,i),a(ke,st),g(e,jl,i),g(e,C,i),a(C,B),a(B,Ze),b(Z,Ze,null),a(C,nt),a(C,el),a(el,it),g(e,Pl,i),g(e,we,i),a(we,ot),g(e,zl,i),g(e,$e,i),a($e,rt),g(e,ql,i),g(e,D,i),a(D,xe),a(xe,ll),a(ll,gt),a(xe,mt),a(D,dt),a(D,Me),a(Me,al),a(al,ht),a(Me,ut),Rl=!0},p:Ms,i(e){Rl||(E(O.$$.fragment,e),E(S.$$.fragment,e),E(H.$$.fragment,e),E(W.$$.fragment,e),E(F.$$.fragment,e),E(G.$$.fragment,e),E(U.$$.fragment,e),E(J.$$.fragment,e),E(Y.$$.fragment,e),E(Q.$$.fragment,e),E(V.$$.fragment,e),E(Z.$$.fragment,e),Rl=!0)},o(e){_(O.$$.fragment,e),_(S.$$.fragment,e),_(H.$$.fragment,e),_(W.$$.fragment,e),_(F.$$.fragment,e),_(G.$$.fragment,e),_(U.$$.fragment,e),_(J.$$.fragment,e),_(Y.$$.fragment,e),_(Q.$$.fragment,e),_(V.$$.fragment,e),_(Z.$$.fragment,e),Rl=!1},d(e){l($),e&&l(ee),e&&l(f),k(O),e&&l(sl),k(S,e),e&&l(nl),e&&l(le),e&&l(il),e&&l(M),k(H),e&&l(ol),e&&l(ae),e&&l(rl),e&&l(L),k(W),e&&l(gl),e&&l(te),e&&l(ml),e&&l(u),e&&l(dl),e&&l(x),e&&l(hl),e&&l(P),e&&l(ul),k(F,e),e&&l(pl),e&&l(z),e&&l(fl),k(G,e),e&&l(cl),e&&l(de),e&&l(vl),k(U,e),e&&l(bl),e&&l(he),e&&l(El),k(J,e),e&&l(_l),e&&l(ue),e&&l(kl),k(Y,e),e&&l(wl),e&&l(q),e&&l($l),e&&l(y),k(Q),e&&l(xl),e&&l(pe),e&&l(Ml),e&&l(A),e&&l(Ll),e&&l(ve),e&&l(yl),e&&l(T),k(V),e&&l(Tl),e&&l(be),e&&l(Cl),e&&l(I),e&&l(Xl),e&&l(ke),e&&l(jl),e&&l(C),k(Z),e&&l(Pl),e&&l(we),e&&l(zl),e&&l($e),e&&l(ql),e&&l(D)}}}const Ts={local:"multilingual-models",sections:[{local:"xlm",sections:[{local:"xlm-language-embeddings",title:"XLM & Language Embeddings"},{local:"xlm-without-language-embeddings",title:"XLM without Language Embeddings"}],title:"XLM"},{local:"bert",title:"BERT"},{local:"xlmroberta",title:"XLM-RoBERTa"}],title:"Multi-lingual models"};function Cs(Jl,$,ee){let{fw:f}=$;return Jl.$$set=w=>{"fw"in w&&ee(0,f=w.fw)},[f]}class Rs extends ks{constructor($){super();ws(this,$,Cs,ys,$s,{fw:0})}}export{Rs as default,Ts as metadata};
