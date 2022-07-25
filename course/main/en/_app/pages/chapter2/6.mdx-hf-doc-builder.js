import{S as js,i as zs,s as Ts,e as l,k as h,w as k,t as i,l as $s,M as Es,c as p,d as t,m,x as w,a as c,h as u,b as v,G as n,g as a,y as b,o as d,p as qs,q as g,B as _,v as Is,n as vs}from"../../chunks/vendor-hf-doc-builder.js";import{I as Jt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as y}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as ys}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";import{F as xs}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function Fs(j){let r,f;return r=new ys({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter2/section6_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter2/section6_tf.ipynb"}]}}),{c(){k(r.$$.fragment)},l(o){w(r.$$.fragment,o)},m(o,$){b(r,o,$),f=!0},i(o){f||(g(r.$$.fragment,o),f=!0)},o(o){d(r.$$.fragment,o),f=!1},d(o){_(r,o)}}}function Ss(j){let r,f;return r=new ys({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter2/section6_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter2/section6_pt.ipynb"}]}}),{c(){k(r.$$.fragment)},l(o){w(r.$$.fragment,o)},m(o,$){b(r,o,$),f=!0},i(o){f||(g(r.$$.fragment,o),f=!0)},o(o){d(r.$$.fragment,o),f=!1},d(o){_(r,o)}}}function Ps(j){let r,f;return r=new y({props:{code:`import tensorflow as tf
from transformers import AutoTokenizer, TFAutoModelForSequenceClassification

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint)
sequences = ["I've been waiting for a HuggingFace course my whole life.", "So have I!"]

tokens = tokenizer(sequences, padding=True, truncation=True, return_tensors="tf")
output = model(**tokens)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForSequenceClassification

checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint)
sequences = [<span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>, <span class="hljs-string">&quot;So have I!&quot;</span>]

tokens = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, truncation=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
output = model(**tokens)`}}),{c(){k(r.$$.fragment)},l(o){w(r.$$.fragment,o)},m(o,$){b(r,o,$),f=!0},i(o){f||(g(r.$$.fragment,o),f=!0)},o(o){d(r.$$.fragment,o),f=!1},d(o){_(r,o)}}}function As(j){let r,f;return r=new y({props:{code:`import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = AutoModelForSequenceClassification.from_pretrained(checkpoint)
sequences = ["I've been waiting for a HuggingFace course my whole life.", "So have I!"]

tokens = tokenizer(sequences, padding=True, truncation=True, return_tensors="pt")
output = model(**tokens)`,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSequenceClassification

checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = AutoModelForSequenceClassification.from_pretrained(checkpoint)
sequences = [<span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>, <span class="hljs-string">&quot;So have I!&quot;</span>]

tokens = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, truncation=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
output = model(**tokens)`}}),{c(){k(r.$$.fragment)},l(o){w(r.$$.fragment,o)},m(o,$){b(r,o,$),f=!0},i(o){f||(g(r.$$.fragment,o),f=!0)},o(o){d(r.$$.fragment,o),f=!1},d(o){_(r,o)}}}function Cs(j){let r,f,o,$,P,D,ge,O,it,ke,pt,Se,z,T,ne,oe,ut,Pe,H,ct,we,ht,mt,Ae,B,Ce,x,ft,be,dt,gt,_e,kt,wt,De,ae,bt,He,M,Ne,re,_t,Re,L,We,le,$t,Oe,G,Be,ie,qt,Me,J,Le,q,vt,$e,yt,jt,qe,zt,Tt,ve,Et,It,ye,xt,Ft,Ge,U,Je,A,N,je,K,St,ze,Pt,Ue,pe,At,Ke,Q,Qe,V,Ve,ue,Ct,Xe,X,Ye,Y,Ze,F,Dt,Te,Ht,Nt,Ee,Rt,Wt,et,C,R,Ie,Z,Ot,xe,Bt,tt,W,Mt,Fe,Lt,Gt,st,E,I,ce,nt;o=new xs({props:{fw:j[0]}}),O=new Jt({});const Ut=[Ss,Fs],ee=[];function Kt(e,s){return e[0]==="pt"?0:1}z=Kt(j),T=ee[z]=Ut[z](j),B=new y({props:{code:`from transformers import AutoTokenizer

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)

sequence = "I've been waiting for a HuggingFace course my whole life."

model_inputs = tokenizer(sequence)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)

sequence = <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>

model_inputs = tokenizer(sequence)`}}),M=new y({props:{code:`sequence = "I've been waiting for a HuggingFace course my whole life."

model_inputs = tokenizer(sequence)`,highlighted:`sequence = <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>

model_inputs = tokenizer(sequence)`}}),L=new y({props:{code:`sequences = ["I've been waiting for a HuggingFace course my whole life.", "So have I!"]

model_inputs = tokenizer(sequences)`,highlighted:`sequences = [<span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>, <span class="hljs-string">&quot;So have I!&quot;</span>]

model_inputs = tokenizer(sequences)`}}),G=new y({props:{code:`# Will pad the sequences up to the maximum sequence length
model_inputs = tokenizer(sequences, padding="longest")

# Will pad the sequences up to the model max length
# (512 for BERT or DistilBERT)
model_inputs = tokenizer(sequences, padding="max_length")

# Will pad the sequences up to the specified max length
model_inputs = tokenizer(sequences, padding="max_length", max_length=8)`,highlighted:`<span class="hljs-comment"># Will pad the sequences up to the maximum sequence length</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-string">&quot;longest&quot;</span>)

<span class="hljs-comment"># Will pad the sequences up to the model max length</span>
<span class="hljs-comment"># (512 for BERT or DistilBERT)</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-string">&quot;max_length&quot;</span>)

<span class="hljs-comment"># Will pad the sequences up to the specified max length</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-string">&quot;max_length&quot;</span>, max_length=<span class="hljs-number">8</span>)`}}),J=new y({props:{code:`sequences = ["I've been waiting for a HuggingFace course my whole life.", "So have I!"]

# Will truncate the sequences that are longer than the model max length
# (512 for BERT or DistilBERT)
model_inputs = tokenizer(sequences, truncation=True)

# Will truncate the sequences that are longer than the specified max length
model_inputs = tokenizer(sequences, max_length=8, truncation=True)`,highlighted:`sequences = [<span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>, <span class="hljs-string">&quot;So have I!&quot;</span>]

<span class="hljs-comment"># Will truncate the sequences that are longer than the model max length</span>
<span class="hljs-comment"># (512 for BERT or DistilBERT)</span>
model_inputs = tokenizer(sequences, truncation=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># Will truncate the sequences that are longer than the specified max length</span>
model_inputs = tokenizer(sequences, max_length=<span class="hljs-number">8</span>, truncation=<span class="hljs-literal">True</span>)`}}),U=new y({props:{code:`sequences = ["I've been waiting for a HuggingFace course my whole life.", "So have I!"]

# Returns PyTorch tensors
model_inputs = tokenizer(sequences, padding=True, return_tensors="pt")

# Returns TensorFlow tensors
model_inputs = tokenizer(sequences, padding=True, return_tensors="tf")

# Returns NumPy arrays
model_inputs = tokenizer(sequences, padding=True, return_tensors="np")`,highlighted:`sequences = [<span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>, <span class="hljs-string">&quot;So have I!&quot;</span>]

<span class="hljs-comment"># Returns PyTorch tensors</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-comment"># Returns TensorFlow tensors</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-comment"># Returns NumPy arrays</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)`}}),K=new Jt({}),Q=new y({props:{code:`sequence = "I've been waiting for a HuggingFace course my whole life."

model_inputs = tokenizer(sequence)
print(model_inputs["input_ids"])

tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)
print(ids)`,highlighted:`sequence = <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>

model_inputs = tokenizer(sequence)
<span class="hljs-built_in">print</span>(model_inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])

tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)
<span class="hljs-built_in">print</span>(ids)`}}),V=new y({props:{code:`[101, 1045, 1005, 2310, 2042, 3403, 2005, 1037, 17662, 12172, 2607, 2026, 2878, 2166, 1012, 102]
[1045, 1005, 2310, 2042, 3403, 2005, 1037, 17662, 12172, 2607, 2026, 2878, 2166, 1012]`,highlighted:`[<span class="hljs-number">101</span>, <span class="hljs-number">1045</span>, <span class="hljs-number">1005</span>, <span class="hljs-number">2310</span>, <span class="hljs-number">2042</span>, <span class="hljs-number">3403</span>, <span class="hljs-number">2005</span>, <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>, <span class="hljs-number">12172</span>, <span class="hljs-number">2607</span>, <span class="hljs-number">2026</span>, <span class="hljs-number">2878</span>, <span class="hljs-number">2166</span>, <span class="hljs-number">1012</span>, <span class="hljs-number">102</span>]
[<span class="hljs-number">1045</span>, <span class="hljs-number">1005</span>, <span class="hljs-number">2310</span>, <span class="hljs-number">2042</span>, <span class="hljs-number">3403</span>, <span class="hljs-number">2005</span>, <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>, <span class="hljs-number">12172</span>, <span class="hljs-number">2607</span>, <span class="hljs-number">2026</span>, <span class="hljs-number">2878</span>, <span class="hljs-number">2166</span>, <span class="hljs-number">1012</span>]`}}),X=new y({props:{code:`print(tokenizer.decode(model_inputs["input_ids"]))
print(tokenizer.decode(ids))`,highlighted:`<span class="hljs-built_in">print</span>(tokenizer.decode(model_inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]))
<span class="hljs-built_in">print</span>(tokenizer.decode(ids))`}}),Y=new y({props:{code:`"[CLS] i've been waiting for a huggingface course my whole life. [SEP]"
"i've been waiting for a huggingface course my whole life."`,highlighted:`<span class="hljs-string">&quot;[CLS] i&#x27;ve been waiting for a huggingface course my whole life. [SEP]&quot;</span>
<span class="hljs-string">&quot;i&#x27;ve been waiting for a huggingface course my whole life.&quot;</span>`}}),Z=new Jt({});const Qt=[As,Ps],te=[];function Vt(e,s){return e[0]==="pt"?0:1}return E=Vt(j),I=te[E]=Qt[E](j),{c(){r=l("meta"),f=h(),k(o.$$.fragment),$=h(),P=l("h1"),D=l("a"),ge=l("span"),k(O.$$.fragment),it=h(),ke=l("span"),pt=i("Putting it all together"),Se=h(),T.c(),ne=h(),oe=l("p"),ut=i("In the last few sections, we\u2019ve been trying our best to do most of the work by hand. We\u2019ve explored how tokenizers work and looked at tokenization, conversion to input IDs, padding, truncation, and attention masks."),Pe=h(),H=l("p"),ct=i("However, as we saw in section 2, the \u{1F917} Transformers API can handle all of this for us with a high-level function that we\u2019ll dive into here. When you call your "),we=l("code"),ht=i("tokenizer"),mt=i(" directly on the sentence, you get back inputs that are ready to pass through your model:"),Ae=h(),k(B.$$.fragment),Ce=h(),x=l("p"),ft=i("Here, the "),be=l("code"),dt=i("model_inputs"),gt=i(" variable contains everything that\u2019s necessary for a model to operate well. For DistilBERT, that includes the input IDs as well as the attention mask. Other models that accept additional inputs will also have those output by the "),_e=l("code"),kt=i("tokenizer"),wt=i(" object."),De=h(),ae=l("p"),bt=i("As we\u2019ll see in some examples below, this method is very powerful. First, it can tokenize a single sequence:"),He=h(),k(M.$$.fragment),Ne=h(),re=l("p"),_t=i("It also handles multiple sequences at a time, with no change in the API:"),Re=h(),k(L.$$.fragment),We=h(),le=l("p"),$t=i("It can pad according to several objectives:"),Oe=h(),k(G.$$.fragment),Be=h(),ie=l("p"),qt=i("It can also truncate sequences:"),Me=h(),k(J.$$.fragment),Le=h(),q=l("p"),vt=i("The "),$e=l("code"),yt=i("tokenizer"),jt=i(" object can handle the conversion to specific framework tensors, which can then be directly sent to the model. For example, in the following code sample we are prompting the tokenizer to return tensors from the different frameworks \u2014 "),qe=l("code"),zt=i('"pt"'),Tt=i(" returns PyTorch tensors, "),ve=l("code"),Et=i('"tf"'),It=i(" returns TensorFlow tensors, and "),ye=l("code"),xt=i('"np"'),Ft=i(" returns NumPy arrays:"),Ge=h(),k(U.$$.fragment),Je=h(),A=l("h2"),N=l("a"),je=l("span"),k(K.$$.fragment),St=h(),ze=l("span"),Pt=i("Special tokens"),Ue=h(),pe=l("p"),At=i("If we take a look at the input IDs returned by the tokenizer, we will see they are a tiny bit different from what we had earlier:"),Ke=h(),k(Q.$$.fragment),Qe=h(),k(V.$$.fragment),Ve=h(),ue=l("p"),Ct=i("One token ID was added at the beginning, and one at the end. Let\u2019s decode the two sequences of IDs above to see what this is about:"),Xe=h(),k(X.$$.fragment),Ye=h(),k(Y.$$.fragment),Ze=h(),F=l("p"),Dt=i("The tokenizer added the special word "),Te=l("code"),Ht=i("[CLS]"),Nt=i(" at the beginning and the special word "),Ee=l("code"),Rt=i("[SEP]"),Wt=i(" at the end. This is because the model was pretrained with those, so to get the same results for inference we need to add them as well. Note that some models don\u2019t add special words, or add different ones; models may also add these special words only at the beginning, or only at the end. In any case, the tokenizer knows which ones are expected and will deal with this for you."),et=h(),C=l("h2"),R=l("a"),Ie=l("span"),k(Z.$$.fragment),Ot=h(),xe=l("span"),Bt=i("Wrapping up: From tokenizer to model"),tt=h(),W=l("p"),Mt=i("Now that we\u2019ve seen all the individual steps the "),Fe=l("code"),Lt=i("tokenizer"),Gt=i(" object uses when applied on texts, let\u2019s see one final time how it can handle multiple sequences (padding!), very long sequences (truncation!), and multiple types of tensors with its main API:"),st=h(),I.c(),ce=$s(),this.h()},l(e){const s=Es('[data-svelte="svelte-1phssyn"]',document.head);r=p(s,"META",{name:!0,content:!0}),s.forEach(t),f=m(e),w(o.$$.fragment,e),$=m(e),P=p(e,"H1",{class:!0});var se=c(P);D=p(se,"A",{id:!0,class:!0,href:!0});var he=c(D);ge=p(he,"SPAN",{});var me=c(ge);w(O.$$.fragment,me),me.forEach(t),he.forEach(t),it=m(se),ke=p(se,"SPAN",{});var Xt=c(ke);pt=u(Xt,"Putting it all together"),Xt.forEach(t),se.forEach(t),Se=m(e),T.l(e),ne=m(e),oe=p(e,"P",{});var Yt=c(oe);ut=u(Yt,"In the last few sections, we\u2019ve been trying our best to do most of the work by hand. We\u2019ve explored how tokenizers work and looked at tokenization, conversion to input IDs, padding, truncation, and attention masks."),Yt.forEach(t),Pe=m(e),H=p(e,"P",{});var ot=c(H);ct=u(ot,"However, as we saw in section 2, the \u{1F917} Transformers API can handle all of this for us with a high-level function that we\u2019ll dive into here. When you call your "),we=p(ot,"CODE",{});var Zt=c(we);ht=u(Zt,"tokenizer"),Zt.forEach(t),mt=u(ot," directly on the sentence, you get back inputs that are ready to pass through your model:"),ot.forEach(t),Ae=m(e),w(B.$$.fragment,e),Ce=m(e),x=p(e,"P",{});var fe=c(x);ft=u(fe,"Here, the "),be=p(fe,"CODE",{});var es=c(be);dt=u(es,"model_inputs"),es.forEach(t),gt=u(fe," variable contains everything that\u2019s necessary for a model to operate well. For DistilBERT, that includes the input IDs as well as the attention mask. Other models that accept additional inputs will also have those output by the "),_e=p(fe,"CODE",{});var ts=c(_e);kt=u(ts,"tokenizer"),ts.forEach(t),wt=u(fe," object."),fe.forEach(t),De=m(e),ae=p(e,"P",{});var ss=c(ae);bt=u(ss,"As we\u2019ll see in some examples below, this method is very powerful. First, it can tokenize a single sequence:"),ss.forEach(t),He=m(e),w(M.$$.fragment,e),Ne=m(e),re=p(e,"P",{});var ns=c(re);_t=u(ns,"It also handles multiple sequences at a time, with no change in the API:"),ns.forEach(t),Re=m(e),w(L.$$.fragment,e),We=m(e),le=p(e,"P",{});var os=c(le);$t=u(os,"It can pad according to several objectives:"),os.forEach(t),Oe=m(e),w(G.$$.fragment,e),Be=m(e),ie=p(e,"P",{});var as=c(ie);qt=u(as,"It can also truncate sequences:"),as.forEach(t),Me=m(e),w(J.$$.fragment,e),Le=m(e),q=p(e,"P",{});var S=c(q);vt=u(S,"The "),$e=p(S,"CODE",{});var rs=c($e);yt=u(rs,"tokenizer"),rs.forEach(t),jt=u(S," object can handle the conversion to specific framework tensors, which can then be directly sent to the model. For example, in the following code sample we are prompting the tokenizer to return tensors from the different frameworks \u2014 "),qe=p(S,"CODE",{});var ls=c(qe);zt=u(ls,'"pt"'),ls.forEach(t),Tt=u(S," returns PyTorch tensors, "),ve=p(S,"CODE",{});var is=c(ve);Et=u(is,'"tf"'),is.forEach(t),It=u(S," returns TensorFlow tensors, and "),ye=p(S,"CODE",{});var ps=c(ye);xt=u(ps,'"np"'),ps.forEach(t),Ft=u(S," returns NumPy arrays:"),S.forEach(t),Ge=m(e),w(U.$$.fragment,e),Je=m(e),A=p(e,"H2",{class:!0});var at=c(A);N=p(at,"A",{id:!0,class:!0,href:!0});var us=c(N);je=p(us,"SPAN",{});var cs=c(je);w(K.$$.fragment,cs),cs.forEach(t),us.forEach(t),St=m(at),ze=p(at,"SPAN",{});var hs=c(ze);Pt=u(hs,"Special tokens"),hs.forEach(t),at.forEach(t),Ue=m(e),pe=p(e,"P",{});var ms=c(pe);At=u(ms,"If we take a look at the input IDs returned by the tokenizer, we will see they are a tiny bit different from what we had earlier:"),ms.forEach(t),Ke=m(e),w(Q.$$.fragment,e),Qe=m(e),w(V.$$.fragment,e),Ve=m(e),ue=p(e,"P",{});var fs=c(ue);Ct=u(fs,"One token ID was added at the beginning, and one at the end. Let\u2019s decode the two sequences of IDs above to see what this is about:"),fs.forEach(t),Xe=m(e),w(X.$$.fragment,e),Ye=m(e),w(Y.$$.fragment,e),Ze=m(e),F=p(e,"P",{});var de=c(F);Dt=u(de,"The tokenizer added the special word "),Te=p(de,"CODE",{});var ds=c(Te);Ht=u(ds,"[CLS]"),ds.forEach(t),Nt=u(de," at the beginning and the special word "),Ee=p(de,"CODE",{});var gs=c(Ee);Rt=u(gs,"[SEP]"),gs.forEach(t),Wt=u(de," at the end. This is because the model was pretrained with those, so to get the same results for inference we need to add them as well. Note that some models don\u2019t add special words, or add different ones; models may also add these special words only at the beginning, or only at the end. In any case, the tokenizer knows which ones are expected and will deal with this for you."),de.forEach(t),et=m(e),C=p(e,"H2",{class:!0});var rt=c(C);R=p(rt,"A",{id:!0,class:!0,href:!0});var ks=c(R);Ie=p(ks,"SPAN",{});var ws=c(Ie);w(Z.$$.fragment,ws),ws.forEach(t),ks.forEach(t),Ot=m(rt),xe=p(rt,"SPAN",{});var bs=c(xe);Bt=u(bs,"Wrapping up: From tokenizer to model"),bs.forEach(t),rt.forEach(t),tt=m(e),W=p(e,"P",{});var lt=c(W);Mt=u(lt,"Now that we\u2019ve seen all the individual steps the "),Fe=p(lt,"CODE",{});var _s=c(Fe);Lt=u(_s,"tokenizer"),_s.forEach(t),Gt=u(lt," object uses when applied on texts, let\u2019s see one final time how it can handle multiple sequences (padding!), very long sequences (truncation!), and multiple types of tensors with its main API:"),lt.forEach(t),st=m(e),I.l(e),ce=$s(),this.h()},h(){v(r,"name","hf:doc:metadata"),v(r,"content",JSON.stringify(Ds)),v(D,"id","putting-it-all-together"),v(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(D,"href","#putting-it-all-together"),v(P,"class","relative group"),v(N,"id","special-tokens"),v(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(N,"href","#special-tokens"),v(A,"class","relative group"),v(R,"id","wrapping-up-from-tokenizer-to-model"),v(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(R,"href","#wrapping-up-from-tokenizer-to-model"),v(C,"class","relative group")},m(e,s){n(document.head,r),a(e,f,s),b(o,e,s),a(e,$,s),a(e,P,s),n(P,D),n(D,ge),b(O,ge,null),n(P,it),n(P,ke),n(ke,pt),a(e,Se,s),ee[z].m(e,s),a(e,ne,s),a(e,oe,s),n(oe,ut),a(e,Pe,s),a(e,H,s),n(H,ct),n(H,we),n(we,ht),n(H,mt),a(e,Ae,s),b(B,e,s),a(e,Ce,s),a(e,x,s),n(x,ft),n(x,be),n(be,dt),n(x,gt),n(x,_e),n(_e,kt),n(x,wt),a(e,De,s),a(e,ae,s),n(ae,bt),a(e,He,s),b(M,e,s),a(e,Ne,s),a(e,re,s),n(re,_t),a(e,Re,s),b(L,e,s),a(e,We,s),a(e,le,s),n(le,$t),a(e,Oe,s),b(G,e,s),a(e,Be,s),a(e,ie,s),n(ie,qt),a(e,Me,s),b(J,e,s),a(e,Le,s),a(e,q,s),n(q,vt),n(q,$e),n($e,yt),n(q,jt),n(q,qe),n(qe,zt),n(q,Tt),n(q,ve),n(ve,Et),n(q,It),n(q,ye),n(ye,xt),n(q,Ft),a(e,Ge,s),b(U,e,s),a(e,Je,s),a(e,A,s),n(A,N),n(N,je),b(K,je,null),n(A,St),n(A,ze),n(ze,Pt),a(e,Ue,s),a(e,pe,s),n(pe,At),a(e,Ke,s),b(Q,e,s),a(e,Qe,s),b(V,e,s),a(e,Ve,s),a(e,ue,s),n(ue,Ct),a(e,Xe,s),b(X,e,s),a(e,Ye,s),b(Y,e,s),a(e,Ze,s),a(e,F,s),n(F,Dt),n(F,Te),n(Te,Ht),n(F,Nt),n(F,Ee),n(Ee,Rt),n(F,Wt),a(e,et,s),a(e,C,s),n(C,R),n(R,Ie),b(Z,Ie,null),n(C,Ot),n(C,xe),n(xe,Bt),a(e,tt,s),a(e,W,s),n(W,Mt),n(W,Fe),n(Fe,Lt),n(W,Gt),a(e,st,s),te[E].m(e,s),a(e,ce,s),nt=!0},p(e,[s]){const se={};s&1&&(se.fw=e[0]),o.$set(se);let he=z;z=Kt(e),z!==he&&(vs(),d(ee[he],1,1,()=>{ee[he]=null}),qs(),T=ee[z],T||(T=ee[z]=Ut[z](e),T.c()),g(T,1),T.m(ne.parentNode,ne));let me=E;E=Vt(e),E!==me&&(vs(),d(te[me],1,1,()=>{te[me]=null}),qs(),I=te[E],I||(I=te[E]=Qt[E](e),I.c()),g(I,1),I.m(ce.parentNode,ce))},i(e){nt||(g(o.$$.fragment,e),g(O.$$.fragment,e),g(T),g(B.$$.fragment,e),g(M.$$.fragment,e),g(L.$$.fragment,e),g(G.$$.fragment,e),g(J.$$.fragment,e),g(U.$$.fragment,e),g(K.$$.fragment,e),g(Q.$$.fragment,e),g(V.$$.fragment,e),g(X.$$.fragment,e),g(Y.$$.fragment,e),g(Z.$$.fragment,e),g(I),nt=!0)},o(e){d(o.$$.fragment,e),d(O.$$.fragment,e),d(T),d(B.$$.fragment,e),d(M.$$.fragment,e),d(L.$$.fragment,e),d(G.$$.fragment,e),d(J.$$.fragment,e),d(U.$$.fragment,e),d(K.$$.fragment,e),d(Q.$$.fragment,e),d(V.$$.fragment,e),d(X.$$.fragment,e),d(Y.$$.fragment,e),d(Z.$$.fragment,e),d(I),nt=!1},d(e){t(r),e&&t(f),_(o,e),e&&t($),e&&t(P),_(O),e&&t(Se),ee[z].d(e),e&&t(ne),e&&t(oe),e&&t(Pe),e&&t(H),e&&t(Ae),_(B,e),e&&t(Ce),e&&t(x),e&&t(De),e&&t(ae),e&&t(He),_(M,e),e&&t(Ne),e&&t(re),e&&t(Re),_(L,e),e&&t(We),e&&t(le),e&&t(Oe),_(G,e),e&&t(Be),e&&t(ie),e&&t(Me),_(J,e),e&&t(Le),e&&t(q),e&&t(Ge),_(U,e),e&&t(Je),e&&t(A),_(K),e&&t(Ue),e&&t(pe),e&&t(Ke),_(Q,e),e&&t(Qe),_(V,e),e&&t(Ve),e&&t(ue),e&&t(Xe),_(X,e),e&&t(Ye),_(Y,e),e&&t(Ze),e&&t(F),e&&t(et),e&&t(C),_(Z),e&&t(tt),e&&t(W),e&&t(st),te[E].d(e),e&&t(ce)}}}const Ds={local:"putting-it-all-together",sections:[{local:"special-tokens",title:"Special tokens"},{local:"wrapping-up-from-tokenizer-to-model",title:"Wrapping up: From tokenizer to model"}],title:"Putting it all together"};function Hs(j,r,f){let o="pt";return Is(()=>{const $=new URLSearchParams(window.location.search);f(0,o=$.get("fw")||"pt")}),[o]}class Ms extends js{constructor(r){super();zs(this,r,Hs,Cs,Ts,{})}}export{Ms as default,Ds as metadata};
