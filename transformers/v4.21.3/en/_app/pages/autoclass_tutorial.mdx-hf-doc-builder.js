import{S as ma,i as da,s as $a,e as n,k as $,w as B,t as r,M as va,c as l,d as a,m as v,a as i,x as V,h as s,b as m,G as t,g as f,y as U,q as W,o as J,B as K,v as _a,L as ka}from"../chunks/vendor-hf-doc-builder.js";import{T as ua}from"../chunks/Tip-hf-doc-builder.js";import{I as Ue}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as be}from"../chunks/CodeBlock-hf-doc-builder.js";import{F as wa,M as ha}from"../chunks/Markdown-hf-doc-builder.js";function ba(oe){let o,y,p,w,E,g,D,L;return{c(){o=n("p"),y=r("Remember, architecture refers to the skeleton of the model and checkpoints are the weights for a given architecture. For example, "),p=n("a"),w=r("BERT"),E=r(" is an architecture, while "),g=n("code"),D=r("bert-base-uncased"),L=r(" is a checkpoint. Model is a general term that can mean either architecture or checkpoint."),this.h()},l(A){o=l(A,"P",{});var x=i(o);y=s(x,"Remember, architecture refers to the skeleton of the model and checkpoints are the weights for a given architecture. For example, "),p=l(x,"A",{href:!0,rel:!0});var T=i(p);w=s(T,"BERT"),T.forEach(a),E=s(x," is an architecture, while "),g=l(x,"CODE",{});var C=i(g);D=s(C,"bert-base-uncased"),C.forEach(a),L=s(x," is a checkpoint. Model is a general term that can mean either architecture or checkpoint."),x.forEach(a),this.h()},h(){m(p,"href","https://huggingface.co/bert-base-uncased"),m(p,"rel","nofollow")},m(A,x){f(A,o,x),t(o,y),t(o,p),t(p,w),t(o,E),t(o,g),t(g,D),t(o,L)},d(A){A&&a(o)}}}function ga(oe){let o,y,p,w,E,g,D,L,A,x,T,C,P,Q,q,X,Y,j,H,b,G,_,re,S,F,Z,N,R,ee,I,ae,h;return{c(){o=n("p"),y=r("For PyTorch models, the "),p=n("code"),w=r("from_pretrained()"),E=r(" method uses "),g=n("code"),D=r("torch.load()"),L=r(" which internally uses "),A=n("code"),x=r("pickle"),T=r(" and is known to be insecure. In general, never load a model that could have come from an untrusted source, or that could have been tampered with. This security risk is partially mitigated for public models hosted on the Hugging Face Hub, which are "),C=n("a"),P=r("scanned for malware"),Q=r(" at each commit. See the "),q=n("a"),X=r("Hub documentation"),Y=r(" for best practices like "),j=n("a"),H=r("signed commit verification"),b=r(" with GPG."),G=$(),_=n("p"),re=r("TensorFlow and Flax checkpoints are not affected, and can be loaded within PyTorch architectures using the "),S=n("code"),F=r("from_tf"),Z=r(" and "),N=n("code"),R=r("from_flax"),ee=r(" kwargs for the "),I=n("code"),ae=r("from_pretrained"),h=r(" method to circumvent this issue."),this.h()},l(d){o=l(d,"P",{});var c=i(o);y=s(c,"For PyTorch models, the "),p=l(c,"CODE",{});var k=i(p);w=s(k,"from_pretrained()"),k.forEach(a),E=s(c," method uses "),g=l(c,"CODE",{});var se=i(g);D=s(se,"torch.load()"),se.forEach(a),L=s(c," which internally uses "),A=l(c,"CODE",{});var ne=i(A);x=s(ne,"pickle"),ne.forEach(a),T=s(c," and is known to be insecure. In general, never load a model that could have come from an untrusted source, or that could have been tampered with. This security risk is partially mitigated for public models hosted on the Hugging Face Hub, which are "),C=l(c,"A",{href:!0,rel:!0});var M=i(C);P=s(M,"scanned for malware"),M.forEach(a),Q=s(c," at each commit. See the "),q=l(c,"A",{href:!0,rel:!0});var te=i(q);X=s(te,"Hub documentation"),te.forEach(a),Y=s(c," for best practices like "),j=l(c,"A",{href:!0,rel:!0});var O=i(j);H=s(O,"signed commit verification"),O.forEach(a),b=s(c," with GPG."),c.forEach(a),G=v(d),_=l(d,"P",{});var z=i(_);re=s(z,"TensorFlow and Flax checkpoints are not affected, and can be loaded within PyTorch architectures using the "),S=l(z,"CODE",{});var ie=i(S);F=s(ie,"from_tf"),ie.forEach(a),Z=s(z," and "),N=l(z,"CODE",{});var le=i(N);R=s(le,"from_flax"),le.forEach(a),ee=s(z," kwargs for the "),I=l(z,"CODE",{});var Pe=i(I);ae=s(Pe,"from_pretrained"),Pe.forEach(a),h=s(z," method to circumvent this issue."),z.forEach(a),this.h()},h(){m(C,"href","https://huggingface.co/docs/hub/security-malware"),m(C,"rel","nofollow"),m(q,"href","https://huggingface.co/docs/hub/security"),m(q,"rel","nofollow"),m(j,"href","https://huggingface.co/docs/hub/security-gpg#signing-commits-with-gpg"),m(j,"rel","nofollow")},m(d,c){f(d,o,c),t(o,y),t(o,p),t(p,w),t(o,E),t(o,g),t(g,D),t(o,L),t(o,A),t(A,x),t(o,T),t(o,C),t(C,P),t(o,Q),t(o,q),t(q,X),t(o,Y),t(o,j),t(j,H),t(o,b),f(d,G,c),f(d,_,c),t(_,re),t(_,S),t(S,F),t(_,Z),t(_,N),t(N,R),t(_,ee),t(_,I),t(I,ae),t(_,h)},d(d){d&&a(o),d&&a(G),d&&a(_)}}}function ya(oe){let o,y,p,w,E,g,D,L,A,x,T,C,P,Q,q,X,Y,j,H,b,G,_,re,S,F,Z,N,R,ee,I,ae,h,d;return P=new be({props:{code:`from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),j=new be({props:{code:`from transformers import AutoModelForTokenClassification

model = AutoModelForTokenClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),b=new ua({props:{warning:!0,$$slots:{default:[ga]},$$scope:{ctx:oe}}}),{c(){o=n("p"),y=r("Finally, the "),p=n("code"),w=r("AutoModelFor"),E=r(" classes let you load a pretrained model for a given task (see "),g=n("a"),D=r("here"),L=r(" for a complete list of available tasks). For example, load a model for sequence classification with "),A=n("a"),x=r("AutoModelForSequenceClassification.from_pretrained()"),T=r(":"),C=$(),B(P.$$.fragment),Q=$(),q=n("p"),X=r("Easily reuse the same checkpoint to load an architecture for a different task:"),Y=$(),B(j.$$.fragment),H=$(),B(b.$$.fragment),G=$(),_=n("p"),re=r("Generally, we recommend using the "),S=n("code"),F=r("AutoTokenizer"),Z=r(" class and the "),N=n("code"),R=r("AutoModelFor"),ee=r(" class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),I=n("a"),ae=r("tutorial"),h=r(", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),this.h()},l(c){o=l(c,"P",{});var k=i(o);y=s(k,"Finally, the "),p=l(k,"CODE",{});var se=i(p);w=s(se,"AutoModelFor"),se.forEach(a),E=s(k," classes let you load a pretrained model for a given task (see "),g=l(k,"A",{href:!0});var ne=i(g);D=s(ne,"here"),ne.forEach(a),L=s(k," for a complete list of available tasks). For example, load a model for sequence classification with "),A=l(k,"A",{href:!0});var M=i(A);x=s(M,"AutoModelForSequenceClassification.from_pretrained()"),M.forEach(a),T=s(k,":"),k.forEach(a),C=v(c),V(P.$$.fragment,c),Q=v(c),q=l(c,"P",{});var te=i(q);X=s(te,"Easily reuse the same checkpoint to load an architecture for a different task:"),te.forEach(a),Y=v(c),V(j.$$.fragment,c),H=v(c),V(b.$$.fragment,c),G=v(c),_=l(c,"P",{});var O=i(_);re=s(O,"Generally, we recommend using the "),S=l(O,"CODE",{});var z=i(S);F=s(z,"AutoTokenizer"),z.forEach(a),Z=s(O," class and the "),N=l(O,"CODE",{});var ie=i(N);R=s(ie,"AutoModelFor"),ie.forEach(a),ee=s(O," class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),I=l(O,"A",{href:!0});var le=i(I);ae=s(le,"tutorial"),le.forEach(a),h=s(O,", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),O.forEach(a),this.h()},h(){m(g,"href","model_doc/auto"),m(A,"href","/docs/transformers/v4.21.3/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),m(I,"href","preprocessing")},m(c,k){f(c,o,k),t(o,y),t(o,p),t(p,w),t(o,E),t(o,g),t(g,D),t(o,L),t(o,A),t(A,x),t(o,T),f(c,C,k),U(P,c,k),f(c,Q,k),f(c,q,k),t(q,X),f(c,Y,k),U(j,c,k),f(c,H,k),U(b,c,k),f(c,G,k),f(c,_,k),t(_,re),t(_,S),t(S,F),t(_,Z),t(_,N),t(N,R),t(_,ee),t(_,I),t(I,ae),t(_,h),d=!0},p(c,k){const se={};k&2&&(se.$$scope={dirty:k,ctx:c}),b.$set(se)},i(c){d||(W(P.$$.fragment,c),W(j.$$.fragment,c),W(b.$$.fragment,c),d=!0)},o(c){J(P.$$.fragment,c),J(j.$$.fragment,c),J(b.$$.fragment,c),d=!1},d(c){c&&a(o),c&&a(C),K(P,c),c&&a(Q),c&&a(q),c&&a(Y),K(j,c),c&&a(H),K(b,c),c&&a(G),c&&a(_)}}}function Aa(oe){let o,y;return o=new ha({props:{$$slots:{default:[ya]},$$scope:{ctx:oe}}}),{c(){B(o.$$.fragment)},l(p){V(o.$$.fragment,p)},m(p,w){U(o,p,w),y=!0},p(p,w){const E={};w&2&&(E.$$scope={dirty:w,ctx:p}),o.$set(E)},i(p){y||(W(o.$$.fragment,p),y=!0)},o(p){J(o.$$.fragment,p),y=!1},d(p){K(o,p)}}}function Ea(oe){let o,y,p,w,E,g,D,L,A,x,T,C,P,Q,q,X,Y,j,H,b,G,_,re,S,F,Z,N,R,ee,I,ae;return P=new be({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),j=new be({props:{code:`from transformers import TFAutoModelForTokenClassification

model = TFAutoModelForTokenClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),{c(){o=n("p"),y=r("Finally, the "),p=n("code"),w=r("TFAutoModelFor"),E=r(" classes let you load a pretrained model for a given task (see "),g=n("a"),D=r("here"),L=r(" for a complete list of available tasks). For example, load a model for sequence classification with "),A=n("a"),x=r("TFAutoModelForSequenceClassification.from_pretrained()"),T=r(":"),C=$(),B(P.$$.fragment),Q=$(),q=n("p"),X=r("Easily reuse the same checkpoint to load an architecture for a different task:"),Y=$(),B(j.$$.fragment),H=$(),b=n("p"),G=r("Generally, we recommend using the "),_=n("code"),re=r("AutoTokenizer"),S=r(" class and the "),F=n("code"),Z=r("TFAutoModelFor"),N=r(" class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),R=n("a"),ee=r("tutorial"),I=r(", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),this.h()},l(h){o=l(h,"P",{});var d=i(o);y=s(d,"Finally, the "),p=l(d,"CODE",{});var c=i(p);w=s(c,"TFAutoModelFor"),c.forEach(a),E=s(d," classes let you load a pretrained model for a given task (see "),g=l(d,"A",{href:!0});var k=i(g);D=s(k,"here"),k.forEach(a),L=s(d," for a complete list of available tasks). For example, load a model for sequence classification with "),A=l(d,"A",{href:!0});var se=i(A);x=s(se,"TFAutoModelForSequenceClassification.from_pretrained()"),se.forEach(a),T=s(d,":"),d.forEach(a),C=v(h),V(P.$$.fragment,h),Q=v(h),q=l(h,"P",{});var ne=i(q);X=s(ne,"Easily reuse the same checkpoint to load an architecture for a different task:"),ne.forEach(a),Y=v(h),V(j.$$.fragment,h),H=v(h),b=l(h,"P",{});var M=i(b);G=s(M,"Generally, we recommend using the "),_=l(M,"CODE",{});var te=i(_);re=s(te,"AutoTokenizer"),te.forEach(a),S=s(M," class and the "),F=l(M,"CODE",{});var O=i(F);Z=s(O,"TFAutoModelFor"),O.forEach(a),N=s(M," class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),R=l(M,"A",{href:!0});var z=i(R);ee=s(z,"tutorial"),z.forEach(a),I=s(M,", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),M.forEach(a),this.h()},h(){m(g,"href","model_doc/auto"),m(A,"href","/docs/transformers/v4.21.3/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),m(R,"href","preprocessing")},m(h,d){f(h,o,d),t(o,y),t(o,p),t(p,w),t(o,E),t(o,g),t(g,D),t(o,L),t(o,A),t(A,x),t(o,T),f(h,C,d),U(P,h,d),f(h,Q,d),f(h,q,d),t(q,X),f(h,Y,d),U(j,h,d),f(h,H,d),f(h,b,d),t(b,G),t(b,_),t(_,re),t(b,S),t(b,F),t(F,Z),t(b,N),t(b,R),t(R,ee),t(b,I),ae=!0},p:ka,i(h){ae||(W(P.$$.fragment,h),W(j.$$.fragment,h),ae=!0)},o(h){J(P.$$.fragment,h),J(j.$$.fragment,h),ae=!1},d(h){h&&a(o),h&&a(C),K(P,h),h&&a(Q),h&&a(q),h&&a(Y),K(j,h),h&&a(H),h&&a(b)}}}function ja(oe){let o,y;return o=new ha({props:{$$slots:{default:[Ea]},$$scope:{ctx:oe}}}),{c(){B(o.$$.fragment)},l(p){V(o.$$.fragment,p)},m(p,w){U(o,p,w),y=!0},p(p,w){const E={};w&2&&(E.$$scope={dirty:w,ctx:p}),o.$set(E)},i(p){y||(W(o.$$.fragment,p),y=!0)},o(p){J(o.$$.fragment,p),y=!1},d(p){K(o,p)}}}function Fa(oe){let o,y,p,w,E,g,D,L,A,x,T,C,P,Q,q,X,Y,j,H,b,G,_,re,S,F,Z,N,R,ee,I,ae,h,d,c,k,se,ne,M,te,O,z,ie,le,Pe,We,qe,vt,Je,ue,_t,Ce,kt,wt,Ke,ge,Qe,Me,bt,Xe,ye,Ye,ce,he,De,Ae,gt,Ne,yt,Ze,ze,At,et,me,Et,Le,jt,Ft,tt,Ee,at,pe,de,He,je,xt,Ge,Tt,rt,$e,Pt,Se,qt,Ct,st,ve,Mt,Ie,zt,Lt,ot,Fe,nt,fe,_e,Re,xe,St,Be,It,lt,ke,it;return g=new Ue({}),b=new ua({props:{$$slots:{default:[ba]},$$scope:{ctx:oe}}}),z=new Ue({}),ge=new be({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),ye=new be({props:{code:`sequence = "In a hole in the ground there lived a hobbit."
print(tokenizer(sequence))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = <span class="hljs-string">&quot;In a hole in the ground there lived a hobbit.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer(sequence))
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: [<span class="hljs-number">101</span>, <span class="hljs-number">1999</span>, <span class="hljs-number">1037</span>, <span class="hljs-number">4920</span>, <span class="hljs-number">1999</span>, <span class="hljs-number">1996</span>, <span class="hljs-number">2598</span>, <span class="hljs-number">2045</span>, <span class="hljs-number">2973</span>, <span class="hljs-number">1037</span>, <span class="hljs-number">7570</span>, <span class="hljs-number">10322</span>, <span class="hljs-number">4183</span>, <span class="hljs-number">1012</span>, <span class="hljs-number">102</span>], 
 <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>], 
 <span class="hljs-string">&#x27;attention_mask&#x27;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]}`}}),Ae=new Ue({}),Ee=new be({props:{code:`from transformers import AutoFeatureExtractor

feature_extractor = AutoFeatureExtractor.from_pretrained(
    "ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition&quot;</span>
<span class="hljs-meta">... </span>)`}}),je=new Ue({}),Fe=new be({props:{code:`from transformers import AutoProcessor

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv2-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)`}}),xe=new Ue({}),ke=new wa({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ja],pytorch:[Aa]},$$scope:{ctx:oe}}}),{c(){o=n("meta"),y=$(),p=n("h1"),w=n("a"),E=n("span"),B(g.$$.fragment),D=$(),L=n("span"),A=r("Load pretrained instances with an AutoClass"),x=$(),T=n("p"),C=r("With so many different Transformer architectures, it can be challenging to create one for your checkpoint. As a part of \u{1F917} Transformers core philosophy to make the library easy, simple and flexible to use, an "),P=n("code"),Q=r("AutoClass"),q=r(" automatically infer and load the correct architecture from a given checkpoint. The "),X=n("code"),Y=r("from_pretrained()"),j=r(" method lets you quickly load a pretrained model for any architecture so you don\u2019t have to devote time and resources to train a model from scratch. Producing this type of checkpoint-agnostic code means if your code works for one checkpoint, it will work with another checkpoint - as long as it was trained for a similar task - even if the architecture is different."),H=$(),B(b.$$.fragment),G=$(),_=n("p"),re=r("In this tutorial, learn to:"),S=$(),F=n("ul"),Z=n("li"),N=r("Load a pretrained tokenizer."),R=$(),ee=n("li"),I=r("Load a pretrained feature extractor."),ae=$(),h=n("li"),d=r("Load a pretrained processor."),c=$(),k=n("li"),se=r("Load a pretrained model."),ne=$(),M=n("h2"),te=n("a"),O=n("span"),B(z.$$.fragment),ie=$(),le=n("span"),Pe=r("AutoTokenizer"),We=$(),qe=n("p"),vt=r("Nearly every NLP task begins with a tokenizer. A tokenizer converts your input into a format that can be processed by the model."),Je=$(),ue=n("p"),_t=r("Load a tokenizer with "),Ce=n("a"),kt=r("AutoTokenizer.from_pretrained()"),wt=r(":"),Ke=$(),B(ge.$$.fragment),Qe=$(),Me=n("p"),bt=r("Then tokenize your input as shown below:"),Xe=$(),B(ye.$$.fragment),Ye=$(),ce=n("h2"),he=n("a"),De=n("span"),B(Ae.$$.fragment),gt=$(),Ne=n("span"),yt=r("AutoFeatureExtractor"),Ze=$(),ze=n("p"),At=r("For audio and vision tasks, a feature extractor processes the audio signal or image into the correct input format."),et=$(),me=n("p"),Et=r("Load a feature extractor with "),Le=n("a"),jt=r("AutoFeatureExtractor.from_pretrained()"),Ft=r(":"),tt=$(),B(Ee.$$.fragment),at=$(),pe=n("h2"),de=n("a"),He=n("span"),B(je.$$.fragment),xt=$(),Ge=n("span"),Tt=r("AutoProcessor"),rt=$(),$e=n("p"),Pt=r("Multimodal tasks require a processor that combines two types of preprocessing tools. For example, the "),Se=n("a"),qt=r("LayoutLMV2"),Ct=r(" model requires a feature extractor to handle images and a tokenizer to handle text; a processor combines both of them."),st=$(),ve=n("p"),Mt=r("Load a processor with "),Ie=n("a"),zt=r("AutoProcessor.from_pretrained()"),Lt=r(":"),ot=$(),B(Fe.$$.fragment),nt=$(),fe=n("h2"),_e=n("a"),Re=n("span"),B(xe.$$.fragment),St=$(),Be=n("span"),It=r("AutoModel"),lt=$(),B(ke.$$.fragment),this.h()},l(e){const u=va('[data-svelte="svelte-1phssyn"]',document.head);o=l(u,"META",{name:!0,content:!0}),u.forEach(a),y=v(e),p=l(e,"H1",{class:!0});var Te=i(p);w=l(Te,"A",{id:!0,class:!0,href:!0});var Ve=i(w);E=l(Ve,"SPAN",{});var Ot=i(E);V(g.$$.fragment,Ot),Ot.forEach(a),Ve.forEach(a),D=v(Te),L=l(Te,"SPAN",{});var Dt=i(L);A=s(Dt,"Load pretrained instances with an AutoClass"),Dt.forEach(a),Te.forEach(a),x=v(e),T=l(e,"P",{});var Oe=i(T);C=s(Oe,"With so many different Transformer architectures, it can be challenging to create one for your checkpoint. As a part of \u{1F917} Transformers core philosophy to make the library easy, simple and flexible to use, an "),P=l(Oe,"CODE",{});var Nt=i(P);Q=s(Nt,"AutoClass"),Nt.forEach(a),q=s(Oe," automatically infer and load the correct architecture from a given checkpoint. The "),X=l(Oe,"CODE",{});var Ht=i(X);Y=s(Ht,"from_pretrained()"),Ht.forEach(a),j=s(Oe," method lets you quickly load a pretrained model for any architecture so you don\u2019t have to devote time and resources to train a model from scratch. Producing this type of checkpoint-agnostic code means if your code works for one checkpoint, it will work with another checkpoint - as long as it was trained for a similar task - even if the architecture is different."),Oe.forEach(a),H=v(e),V(b.$$.fragment,e),G=v(e),_=l(e,"P",{});var Gt=i(_);re=s(Gt,"In this tutorial, learn to:"),Gt.forEach(a),S=v(e),F=l(e,"UL",{});var we=i(F);Z=l(we,"LI",{});var Rt=i(Z);N=s(Rt,"Load a pretrained tokenizer."),Rt.forEach(a),R=v(we),ee=l(we,"LI",{});var Bt=i(ee);I=s(Bt,"Load a pretrained feature extractor."),Bt.forEach(a),ae=v(we),h=l(we,"LI",{});var Vt=i(h);d=s(Vt,"Load a pretrained processor."),Vt.forEach(a),c=v(we),k=l(we,"LI",{});var Ut=i(k);se=s(Ut,"Load a pretrained model."),Ut.forEach(a),we.forEach(a),ne=v(e),M=l(e,"H2",{class:!0});var ct=i(M);te=l(ct,"A",{id:!0,class:!0,href:!0});var Wt=i(te);O=l(Wt,"SPAN",{});var Jt=i(O);V(z.$$.fragment,Jt),Jt.forEach(a),Wt.forEach(a),ie=v(ct),le=l(ct,"SPAN",{});var Kt=i(le);Pe=s(Kt,"AutoTokenizer"),Kt.forEach(a),ct.forEach(a),We=v(e),qe=l(e,"P",{});var Qt=i(qe);vt=s(Qt,"Nearly every NLP task begins with a tokenizer. A tokenizer converts your input into a format that can be processed by the model."),Qt.forEach(a),Je=v(e),ue=l(e,"P",{});var pt=i(ue);_t=s(pt,"Load a tokenizer with "),Ce=l(pt,"A",{href:!0});var Xt=i(Ce);kt=s(Xt,"AutoTokenizer.from_pretrained()"),Xt.forEach(a),wt=s(pt,":"),pt.forEach(a),Ke=v(e),V(ge.$$.fragment,e),Qe=v(e),Me=l(e,"P",{});var Yt=i(Me);bt=s(Yt,"Then tokenize your input as shown below:"),Yt.forEach(a),Xe=v(e),V(ye.$$.fragment,e),Ye=v(e),ce=l(e,"H2",{class:!0});var ft=i(ce);he=l(ft,"A",{id:!0,class:!0,href:!0});var Zt=i(he);De=l(Zt,"SPAN",{});var ea=i(De);V(Ae.$$.fragment,ea),ea.forEach(a),Zt.forEach(a),gt=v(ft),Ne=l(ft,"SPAN",{});var ta=i(Ne);yt=s(ta,"AutoFeatureExtractor"),ta.forEach(a),ft.forEach(a),Ze=v(e),ze=l(e,"P",{});var aa=i(ze);At=s(aa,"For audio and vision tasks, a feature extractor processes the audio signal or image into the correct input format."),aa.forEach(a),et=v(e),me=l(e,"P",{});var ut=i(me);Et=s(ut,"Load a feature extractor with "),Le=l(ut,"A",{href:!0});var ra=i(Le);jt=s(ra,"AutoFeatureExtractor.from_pretrained()"),ra.forEach(a),Ft=s(ut,":"),ut.forEach(a),tt=v(e),V(Ee.$$.fragment,e),at=v(e),pe=l(e,"H2",{class:!0});var ht=i(pe);de=l(ht,"A",{id:!0,class:!0,href:!0});var sa=i(de);He=l(sa,"SPAN",{});var oa=i(He);V(je.$$.fragment,oa),oa.forEach(a),sa.forEach(a),xt=v(ht),Ge=l(ht,"SPAN",{});var na=i(Ge);Tt=s(na,"AutoProcessor"),na.forEach(a),ht.forEach(a),rt=v(e),$e=l(e,"P",{});var mt=i($e);Pt=s(mt,"Multimodal tasks require a processor that combines two types of preprocessing tools. For example, the "),Se=l(mt,"A",{href:!0});var la=i(Se);qt=s(la,"LayoutLMV2"),la.forEach(a),Ct=s(mt," model requires a feature extractor to handle images and a tokenizer to handle text; a processor combines both of them."),mt.forEach(a),st=v(e),ve=l(e,"P",{});var dt=i(ve);Mt=s(dt,"Load a processor with "),Ie=l(dt,"A",{href:!0});var ia=i(Ie);zt=s(ia,"AutoProcessor.from_pretrained()"),ia.forEach(a),Lt=s(dt,":"),dt.forEach(a),ot=v(e),V(Fe.$$.fragment,e),nt=v(e),fe=l(e,"H2",{class:!0});var $t=i(fe);_e=l($t,"A",{id:!0,class:!0,href:!0});var ca=i(_e);Re=l(ca,"SPAN",{});var pa=i(Re);V(xe.$$.fragment,pa),pa.forEach(a),ca.forEach(a),St=v($t),Be=l($t,"SPAN",{});var fa=i(Be);It=s(fa,"AutoModel"),fa.forEach(a),$t.forEach(a),lt=v(e),V(ke.$$.fragment,e),this.h()},h(){m(o,"name","hf:doc:metadata"),m(o,"content",JSON.stringify(xa)),m(w,"id","load-pretrained-instances-with-an-autoclass"),m(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(w,"href","#load-pretrained-instances-with-an-autoclass"),m(p,"class","relative group"),m(te,"id","autotokenizer"),m(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(te,"href","#autotokenizer"),m(M,"class","relative group"),m(Ce,"href","/docs/transformers/v4.21.3/en/model_doc/auto#transformers.AutoTokenizer.from_pretrained"),m(he,"id","autofeatureextractor"),m(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(he,"href","#autofeatureextractor"),m(ce,"class","relative group"),m(Le,"href","/docs/transformers/v4.21.3/en/model_doc/auto#transformers.AutoFeatureExtractor.from_pretrained"),m(de,"id","autoprocessor"),m(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(de,"href","#autoprocessor"),m(pe,"class","relative group"),m(Se,"href","model_doc/layoutlmv2"),m(Ie,"href","/docs/transformers/v4.21.3/en/model_doc/auto#transformers.AutoProcessor.from_pretrained"),m(_e,"id","automodel"),m(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(_e,"href","#automodel"),m(fe,"class","relative group")},m(e,u){t(document.head,o),f(e,y,u),f(e,p,u),t(p,w),t(w,E),U(g,E,null),t(p,D),t(p,L),t(L,A),f(e,x,u),f(e,T,u),t(T,C),t(T,P),t(P,Q),t(T,q),t(T,X),t(X,Y),t(T,j),f(e,H,u),U(b,e,u),f(e,G,u),f(e,_,u),t(_,re),f(e,S,u),f(e,F,u),t(F,Z),t(Z,N),t(F,R),t(F,ee),t(ee,I),t(F,ae),t(F,h),t(h,d),t(F,c),t(F,k),t(k,se),f(e,ne,u),f(e,M,u),t(M,te),t(te,O),U(z,O,null),t(M,ie),t(M,le),t(le,Pe),f(e,We,u),f(e,qe,u),t(qe,vt),f(e,Je,u),f(e,ue,u),t(ue,_t),t(ue,Ce),t(Ce,kt),t(ue,wt),f(e,Ke,u),U(ge,e,u),f(e,Qe,u),f(e,Me,u),t(Me,bt),f(e,Xe,u),U(ye,e,u),f(e,Ye,u),f(e,ce,u),t(ce,he),t(he,De),U(Ae,De,null),t(ce,gt),t(ce,Ne),t(Ne,yt),f(e,Ze,u),f(e,ze,u),t(ze,At),f(e,et,u),f(e,me,u),t(me,Et),t(me,Le),t(Le,jt),t(me,Ft),f(e,tt,u),U(Ee,e,u),f(e,at,u),f(e,pe,u),t(pe,de),t(de,He),U(je,He,null),t(pe,xt),t(pe,Ge),t(Ge,Tt),f(e,rt,u),f(e,$e,u),t($e,Pt),t($e,Se),t(Se,qt),t($e,Ct),f(e,st,u),f(e,ve,u),t(ve,Mt),t(ve,Ie),t(Ie,zt),t(ve,Lt),f(e,ot,u),U(Fe,e,u),f(e,nt,u),f(e,fe,u),t(fe,_e),t(_e,Re),U(xe,Re,null),t(fe,St),t(fe,Be),t(Be,It),f(e,lt,u),U(ke,e,u),it=!0},p(e,[u]){const Te={};u&2&&(Te.$$scope={dirty:u,ctx:e}),b.$set(Te);const Ve={};u&2&&(Ve.$$scope={dirty:u,ctx:e}),ke.$set(Ve)},i(e){it||(W(g.$$.fragment,e),W(b.$$.fragment,e),W(z.$$.fragment,e),W(ge.$$.fragment,e),W(ye.$$.fragment,e),W(Ae.$$.fragment,e),W(Ee.$$.fragment,e),W(je.$$.fragment,e),W(Fe.$$.fragment,e),W(xe.$$.fragment,e),W(ke.$$.fragment,e),it=!0)},o(e){J(g.$$.fragment,e),J(b.$$.fragment,e),J(z.$$.fragment,e),J(ge.$$.fragment,e),J(ye.$$.fragment,e),J(Ae.$$.fragment,e),J(Ee.$$.fragment,e),J(je.$$.fragment,e),J(Fe.$$.fragment,e),J(xe.$$.fragment,e),J(ke.$$.fragment,e),it=!1},d(e){a(o),e&&a(y),e&&a(p),K(g),e&&a(x),e&&a(T),e&&a(H),K(b,e),e&&a(G),e&&a(_),e&&a(S),e&&a(F),e&&a(ne),e&&a(M),K(z),e&&a(We),e&&a(qe),e&&a(Je),e&&a(ue),e&&a(Ke),K(ge,e),e&&a(Qe),e&&a(Me),e&&a(Xe),K(ye,e),e&&a(Ye),e&&a(ce),K(Ae),e&&a(Ze),e&&a(ze),e&&a(et),e&&a(me),e&&a(tt),K(Ee,e),e&&a(at),e&&a(pe),K(je),e&&a(rt),e&&a($e),e&&a(st),e&&a(ve),e&&a(ot),K(Fe,e),e&&a(nt),e&&a(fe),K(xe),e&&a(lt),K(ke,e)}}}const xa={local:"load-pretrained-instances-with-an-autoclass",sections:[{local:"autotokenizer",title:"AutoTokenizer"},{local:"autofeatureextractor",title:"AutoFeatureExtractor"},{local:"autoprocessor",title:"AutoProcessor"},{local:"automodel",title:"AutoModel"}],title:"Load pretrained instances with an AutoClass"};function Ta(oe){return _a(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class La extends ma{constructor(o){super();da(this,o,Ta,Fa,$a,{})}}export{La as default,xa as metadata};
