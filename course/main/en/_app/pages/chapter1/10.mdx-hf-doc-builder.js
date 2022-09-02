import{S as Ur,i as Yr,s as Vr,e as o,k as h,w as f,t as $,M as Xr,c as a,d as t,m as p,a as i,x as u,h as g,b as n,G as r,g as l,y as c,L as Zr,q as m,o as d,B as w,v as es}from"../../chunks/vendor-hf-doc-builder.js";import{I as v}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as hr}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as ts}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";import{Q as y}from"../../chunks/Question-hf-doc-builder.js";function rs(pr){let b,Re,x,H,xe,R,jt,ke,Ft,Ge,G,Je,ye,Ct,Ue,be,It,Ye,k,j,_e,J,Mt,U,Dt,Ee,Lt,Bt,Ve,Y,Xe,_,F,Ae,V,Kt,qe,Ot,Ze,X,et,Z,tt,E,C,Te,ee,Qt,Se,Rt,rt,te,st,re,ot,A,I,Pe,se,Gt,Ne,Jt,at,oe,it,ae,nt,q,M,ze,ie,Ut,We,Yt,lt,ne,ht,T,D,He,le,Vt,je,Xt,pt,he,ft,S,L,Fe,pe,Zt,Ce,er,ut,fe,ct,P,B,Ie,ue,tr,Me,rr,mt,ce,dt,N,K,De,me,sr,Le,or,wt,de,$t,z,O,Be,we,ar,Ke,ir,gt,$e,vt,W,Q,Oe,ge,nr,Qe,lr,yt,ve,bt;return R=new v({}),G=new ts({props:{chapter:1,classNames:"absolute z-10 right-0 top-0"}}),J=new v({}),Y=new y({props:{choices:[{text:"Summarization",explain:'Look again on the <a href="https://huggingface.co/roberta-large-mnli">roberta-large-mnli page</a>.'},{text:"Text classification",explain:"More precisely, it classifies if two sentences are logically linked across three labels (contradiction, neutral, entailment) \u2014 a task also called <em>natural language inference</em>.",correct:!0},{text:"Text generation",explain:'Look again on the <a href="https://huggingface.co/roberta-large-mnli">roberta-large-mnli page</a>.'}]}}),V=new v({}),X=new hr({props:{code:`from transformers import pipeline

ner = pipeline("ner", grouped_entities=True)
ner("My name is Sylvain and I work at Hugging Face in Brooklyn.")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

ner = pipeline(<span class="hljs-string">&quot;ner&quot;</span>, grouped_entities=<span class="hljs-literal">True</span>)
ner(<span class="hljs-string">&quot;My name is Sylvain and I work at Hugging Face in Brooklyn.&quot;</span>)`}}),Z=new y({props:{choices:[{text:'It will return classification scores for this sentence, with labels "positive" or "negative".',explain:"This is incorrect \u2014 this would be a <code>sentiment-analysis</code> pipeline."},{text:"It will return a generated text completing this sentence.",explain:"This is incorrect \u2014 it would be a <code>text-generation</code> pipeline."},{text:"It will return the words representing persons, organizations or locations.",explain:'Furthermore, with <code>grouped_entities=True</code>, it will group together the words belonging to the same entity, like "Hugging Face".',correct:!0}]}}),ee=new v({}),te=new hr({props:{code:`from transformers import pipeline

filler = pipeline("fill-mask", model="bert-base-cased")
result = filler("...")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

filler = pipeline(<span class="hljs-string">&quot;fill-mask&quot;</span>, model=<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
result = filler(<span class="hljs-string">&quot;...&quot;</span>)`}}),re=new y({props:{choices:[{text:"This &#60;mask> has been waiting for you.",explain:"This is incorrect. Check out the <code>bert-base-cased</code> model card and try to spot your mistake."},{text:"This [MASK] has been waiting for you.",explain:"Correct! This model's mask token is [MASK].",correct:!0},{text:"This man has been waiting for you.",explain:"This is incorrect. This pipeline fills in masked words, so it needs a mask token somewhere."}]}}),se=new v({}),oe=new hr({props:{code:`from transformers import pipeline

classifier = pipeline("zero-shot-classification")
result = classifier("This is a course about the Transformers library")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

classifier = pipeline(<span class="hljs-string">&quot;zero-shot-classification&quot;</span>)
result = classifier(<span class="hljs-string">&quot;This is a course about the Transformers library&quot;</span>)`}}),ae=new y({props:{choices:[{text:"This pipeline requires that labels be given to classify this text.",explain:"Right \u2014 the correct code needs to include <code>candidate_labels=[...]</code>.",correct:!0},{text:"This pipeline requires several sentences, not just one.",explain:"This is incorrect, though when properly used, this pipeline can take a list of sentences to process (like all other pipelines)."},{text:"The \u{1F917} Transformers library is broken, as usual.",explain:"We won't dignify this answer with a comment!"},{text:"This pipeline requires longer inputs; this one is too short.",explain:"This is incorrect. Note that a very long text will be truncated when processed by this pipeline."}]}}),ie=new v({}),ne=new y({props:{choices:[{text:"Transferring the knowledge of a pretrained model to a new model by training it on the same dataset.",explain:"No, that would be two versions of the same model."},{text:"Transferring the knowledge of a pretrained model to a new model by initializing the second model with the first model's weights.",explain:"Correct: when the second model is trained on a new task, it *transfers* the knowledge of the first model.",correct:!0},{text:"Transferring the knowledge of a pretrained model to a new model by building the second model with the same architecture as the first model.",explain:"The architecture is just the way the model is built; there is no knowledge shared or transferred in this case."}]}}),le=new v({}),he=new y({props:{choices:[{text:"True",explain:"The pretraining is usually <em>self-supervised</em>, which means the labels are created automatically from the inputs (like predicting the next word or filling in some masked words).",correct:!0},{text:"False",explain:"This is not the correct answer."}]}}),pe=new v({}),fe=new y({props:{choices:[{text:"If a model is a building, its architecture is the blueprint and the weights are the people living inside.",explain:"Following this metaphor, the weights would be the bricks and other materials used to construct the building."},{text:"An architecture is a map to build a model and its weights are the cities represented on the map.",explain:"The problem with this metaphor is that a map usually represents one existing reality (there is only one city in France named Paris). For a given architecture, multiple weights are possible."},{text:"An architecture is a succession of mathematical functions to build a model and its weights are those functions parameters.",explain:"The same set of mathematical functions (architecture) can be used to build different models by using different parameters (weights).",correct:!0}]}}),ue=new v({}),ce=new y({props:{choices:[{text:"An encoder model",explain:"An encoder model generates a representation of the whole sentence that is better suited for tasks like classification."},{text:"A decoder model",explain:"Decoder models are perfectly suited for text generation from a prompt.",correct:!0},{text:"A sequence-to-sequence model",explain:"Sequence-to-sequence models are better suited for tasks where you want to generate sentences in relation to the input sentences, not a given prompt."}]}}),me=new v({}),de=new y({props:{choices:[{text:"An encoder model",explain:"An encoder model generates a representation of the whole sentence that is better suited for tasks like classification."},{text:"A decoder model",explain:"Decoder models are good for generating output text (like summaries), but they don't have the ability to exploit a context like the whole text to summarize."},{text:"A sequence-to-sequence model",explain:"Sequence-to-sequence models are perfectly suited for a summarization task.",correct:!0}]}}),we=new v({}),$e=new y({props:{choices:[{text:"An encoder model",explain:"An encoder model generates a representation of the whole sentence which is perfectly suited for a task like classification.",correct:!0},{text:"A decoder model",explain:"Decoder models are good for generating output texts, not extracting a label out of a sentence."},{text:"A sequence-to-sequence model",explain:"Sequence-to-sequence models are better suited for tasks where you want to generate text based on an input sentence, not a label."}]}}),ge=new v({}),ve=new y({props:{choices:[{text:"The model is a fine-tuned version of a pretrained model and it picked up its bias from it.",explain:"When applying Transfer Learning, the bias in the pretrained model used perspires in the fine-tuned model.",correct:!0},{text:"The data the model was trained on is biased.",explain:"This is the most obvious source of bias, but not the only one.",correct:!0},{text:"The metric the model was optimizing for is biased.",explain:"A less obvious source of bias is the way the model is trained. Your model will blindly optimize for whatever metric you chose, without any second thoughts.",correct:!0}]}}),{c(){b=o("meta"),Re=h(),x=o("h1"),H=o("a"),xe=o("span"),f(R.$$.fragment),jt=h(),ke=o("span"),Ft=$("End-of-chapter quiz"),Ge=h(),f(G.$$.fragment),Je=h(),ye=o("p"),Ct=$("This chapter covered a lot of ground! Don\u2019t worry if you didn\u2019t grasp all the details; the next chapters will help you understand how things work under the hood."),Ue=h(),be=o("p"),It=$("First, though, let\u2019s test what you learned in this chapter!"),Ye=h(),k=o("h3"),j=o("a"),_e=o("span"),f(J.$$.fragment),Mt=h(),U=o("span"),Dt=$("1. Explore the Hub and look for the "),Ee=o("code"),Lt=$("roberta-large-mnli"),Bt=$(" checkpoint. What task does it perform?"),Ve=h(),f(Y.$$.fragment),Xe=h(),_=o("h3"),F=o("a"),Ae=o("span"),f(V.$$.fragment),Kt=h(),qe=o("span"),Ot=$("2. What will the following code return?"),Ze=h(),f(X.$$.fragment),et=h(),f(Z.$$.fragment),tt=h(),E=o("h3"),C=o("a"),Te=o("span"),f(ee.$$.fragment),Qt=h(),Se=o("span"),Rt=$("3. What should replace \u2026 in this code sample?"),rt=h(),f(te.$$.fragment),st=h(),f(re.$$.fragment),ot=h(),A=o("h3"),I=o("a"),Pe=o("span"),f(se.$$.fragment),Gt=h(),Ne=o("span"),Jt=$("4. Why will this code fail?"),at=h(),f(oe.$$.fragment),it=h(),f(ae.$$.fragment),nt=h(),q=o("h3"),M=o("a"),ze=o("span"),f(ie.$$.fragment),Ut=h(),We=o("span"),Yt=$("5. What does \u201Ctransfer learning\u201D mean?"),lt=h(),f(ne.$$.fragment),ht=h(),T=o("h3"),D=o("a"),He=o("span"),f(le.$$.fragment),Vt=h(),je=o("span"),Xt=$("6. True or false? A language model usually does not need labels for its pretraining."),pt=h(),f(he.$$.fragment),ft=h(),S=o("h3"),L=o("a"),Fe=o("span"),f(pe.$$.fragment),Zt=h(),Ce=o("span"),er=$("7. Select the sentence that best describes the terms \u201Cmodel,\u201D \u201Carchitecture,\u201D and \u201Cweights.\u201D"),ut=h(),f(fe.$$.fragment),ct=h(),P=o("h3"),B=o("a"),Ie=o("span"),f(ue.$$.fragment),tr=h(),Me=o("span"),rr=$("8. Which of these types of models would you use for completing prompts with generated text?"),mt=h(),f(ce.$$.fragment),dt=h(),N=o("h3"),K=o("a"),De=o("span"),f(me.$$.fragment),sr=h(),Le=o("span"),or=$("9. Which of those types of models would you use for summarizing texts?"),wt=h(),f(de.$$.fragment),$t=h(),z=o("h3"),O=o("a"),Be=o("span"),f(we.$$.fragment),ar=h(),Ke=o("span"),ir=$("10. Which of these types of models would you use for classifying text inputs according to certain labels?"),gt=h(),f($e.$$.fragment),vt=h(),W=o("h3"),Q=o("a"),Oe=o("span"),f(ge.$$.fragment),nr=h(),Qe=o("span"),lr=$("11. What possible source can the bias observed in a model have?"),yt=h(),f(ve.$$.fragment),this.h()},l(e){const s=Xr('[data-svelte="svelte-1phssyn"]',document.head);b=a(s,"META",{name:!0,content:!0}),s.forEach(t),Re=p(e),x=a(e,"H1",{class:!0});var xt=i(x);H=a(xt,"A",{id:!0,class:!0,href:!0});var fr=i(H);xe=a(fr,"SPAN",{});var ur=i(xe);u(R.$$.fragment,ur),ur.forEach(t),fr.forEach(t),jt=p(xt),ke=a(xt,"SPAN",{});var cr=i(ke);Ft=g(cr,"End-of-chapter quiz"),cr.forEach(t),xt.forEach(t),Ge=p(e),u(G.$$.fragment,e),Je=p(e),ye=a(e,"P",{});var mr=i(ye);Ct=g(mr,"This chapter covered a lot of ground! Don\u2019t worry if you didn\u2019t grasp all the details; the next chapters will help you understand how things work under the hood."),mr.forEach(t),Ue=p(e),be=a(e,"P",{});var dr=i(be);It=g(dr,"First, though, let\u2019s test what you learned in this chapter!"),dr.forEach(t),Ye=p(e),k=a(e,"H3",{class:!0});var kt=i(k);j=a(kt,"A",{id:!0,class:!0,href:!0});var wr=i(j);_e=a(wr,"SPAN",{});var $r=i(_e);u(J.$$.fragment,$r),$r.forEach(t),wr.forEach(t),Mt=p(kt),U=a(kt,"SPAN",{});var _t=i(U);Dt=g(_t,"1. Explore the Hub and look for the "),Ee=a(_t,"CODE",{});var gr=i(Ee);Lt=g(gr,"roberta-large-mnli"),gr.forEach(t),Bt=g(_t," checkpoint. What task does it perform?"),_t.forEach(t),kt.forEach(t),Ve=p(e),u(Y.$$.fragment,e),Xe=p(e),_=a(e,"H3",{class:!0});var Et=i(_);F=a(Et,"A",{id:!0,class:!0,href:!0});var vr=i(F);Ae=a(vr,"SPAN",{});var yr=i(Ae);u(V.$$.fragment,yr),yr.forEach(t),vr.forEach(t),Kt=p(Et),qe=a(Et,"SPAN",{});var br=i(qe);Ot=g(br,"2. What will the following code return?"),br.forEach(t),Et.forEach(t),Ze=p(e),u(X.$$.fragment,e),et=p(e),u(Z.$$.fragment,e),tt=p(e),E=a(e,"H3",{class:!0});var At=i(E);C=a(At,"A",{id:!0,class:!0,href:!0});var xr=i(C);Te=a(xr,"SPAN",{});var kr=i(Te);u(ee.$$.fragment,kr),kr.forEach(t),xr.forEach(t),Qt=p(At),Se=a(At,"SPAN",{});var _r=i(Se);Rt=g(_r,"3. What should replace \u2026 in this code sample?"),_r.forEach(t),At.forEach(t),rt=p(e),u(te.$$.fragment,e),st=p(e),u(re.$$.fragment,e),ot=p(e),A=a(e,"H3",{class:!0});var qt=i(A);I=a(qt,"A",{id:!0,class:!0,href:!0});var Er=i(I);Pe=a(Er,"SPAN",{});var Ar=i(Pe);u(se.$$.fragment,Ar),Ar.forEach(t),Er.forEach(t),Gt=p(qt),Ne=a(qt,"SPAN",{});var qr=i(Ne);Jt=g(qr,"4. Why will this code fail?"),qr.forEach(t),qt.forEach(t),at=p(e),u(oe.$$.fragment,e),it=p(e),u(ae.$$.fragment,e),nt=p(e),q=a(e,"H3",{class:!0});var Tt=i(q);M=a(Tt,"A",{id:!0,class:!0,href:!0});var Tr=i(M);ze=a(Tr,"SPAN",{});var Sr=i(ze);u(ie.$$.fragment,Sr),Sr.forEach(t),Tr.forEach(t),Ut=p(Tt),We=a(Tt,"SPAN",{});var Pr=i(We);Yt=g(Pr,"5. What does \u201Ctransfer learning\u201D mean?"),Pr.forEach(t),Tt.forEach(t),lt=p(e),u(ne.$$.fragment,e),ht=p(e),T=a(e,"H3",{class:!0});var St=i(T);D=a(St,"A",{id:!0,class:!0,href:!0});var Nr=i(D);He=a(Nr,"SPAN",{});var zr=i(He);u(le.$$.fragment,zr),zr.forEach(t),Nr.forEach(t),Vt=p(St),je=a(St,"SPAN",{});var Wr=i(je);Xt=g(Wr,"6. True or false? A language model usually does not need labels for its pretraining."),Wr.forEach(t),St.forEach(t),pt=p(e),u(he.$$.fragment,e),ft=p(e),S=a(e,"H3",{class:!0});var Pt=i(S);L=a(Pt,"A",{id:!0,class:!0,href:!0});var Hr=i(L);Fe=a(Hr,"SPAN",{});var jr=i(Fe);u(pe.$$.fragment,jr),jr.forEach(t),Hr.forEach(t),Zt=p(Pt),Ce=a(Pt,"SPAN",{});var Fr=i(Ce);er=g(Fr,"7. Select the sentence that best describes the terms \u201Cmodel,\u201D \u201Carchitecture,\u201D and \u201Cweights.\u201D"),Fr.forEach(t),Pt.forEach(t),ut=p(e),u(fe.$$.fragment,e),ct=p(e),P=a(e,"H3",{class:!0});var Nt=i(P);B=a(Nt,"A",{id:!0,class:!0,href:!0});var Cr=i(B);Ie=a(Cr,"SPAN",{});var Ir=i(Ie);u(ue.$$.fragment,Ir),Ir.forEach(t),Cr.forEach(t),tr=p(Nt),Me=a(Nt,"SPAN",{});var Mr=i(Me);rr=g(Mr,"8. Which of these types of models would you use for completing prompts with generated text?"),Mr.forEach(t),Nt.forEach(t),mt=p(e),u(ce.$$.fragment,e),dt=p(e),N=a(e,"H3",{class:!0});var zt=i(N);K=a(zt,"A",{id:!0,class:!0,href:!0});var Dr=i(K);De=a(Dr,"SPAN",{});var Lr=i(De);u(me.$$.fragment,Lr),Lr.forEach(t),Dr.forEach(t),sr=p(zt),Le=a(zt,"SPAN",{});var Br=i(Le);or=g(Br,"9. Which of those types of models would you use for summarizing texts?"),Br.forEach(t),zt.forEach(t),wt=p(e),u(de.$$.fragment,e),$t=p(e),z=a(e,"H3",{class:!0});var Wt=i(z);O=a(Wt,"A",{id:!0,class:!0,href:!0});var Kr=i(O);Be=a(Kr,"SPAN",{});var Or=i(Be);u(we.$$.fragment,Or),Or.forEach(t),Kr.forEach(t),ar=p(Wt),Ke=a(Wt,"SPAN",{});var Qr=i(Ke);ir=g(Qr,"10. Which of these types of models would you use for classifying text inputs according to certain labels?"),Qr.forEach(t),Wt.forEach(t),gt=p(e),u($e.$$.fragment,e),vt=p(e),W=a(e,"H3",{class:!0});var Ht=i(W);Q=a(Ht,"A",{id:!0,class:!0,href:!0});var Rr=i(Q);Oe=a(Rr,"SPAN",{});var Gr=i(Oe);u(ge.$$.fragment,Gr),Gr.forEach(t),Rr.forEach(t),nr=p(Ht),Qe=a(Ht,"SPAN",{});var Jr=i(Qe);lr=g(Jr,"11. What possible source can the bias observed in a model have?"),Jr.forEach(t),Ht.forEach(t),yt=p(e),u(ve.$$.fragment,e),this.h()},h(){n(b,"name","hf:doc:metadata"),n(b,"content",JSON.stringify(ss)),n(H,"id","endofchapter-quiz"),n(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(H,"href","#endofchapter-quiz"),n(x,"class","relative group"),n(j,"id","1.-explore-the-hub-and-look-for-the-<code>roberta-large-mnli</code>-checkpoint.-what-task-does-it-perform?"),n(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(j,"href","#1.-explore-the-hub-and-look-for-the-<code>roberta-large-mnli</code>-checkpoint.-what-task-does-it-perform?"),n(k,"class","relative group"),n(F,"id","2.-what-will-the-following-code-return?"),n(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(F,"href","#2.-what-will-the-following-code-return?"),n(_,"class","relative group"),n(C,"id","3.-what-should-replace-\u2026-in-this-code-sample?"),n(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(C,"href","#3.-what-should-replace-\u2026-in-this-code-sample?"),n(E,"class","relative group"),n(I,"id","4.-why-will-this-code-fail?"),n(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(I,"href","#4.-why-will-this-code-fail?"),n(A,"class","relative group"),n(M,"id","5.-what-does-\u201Ctransfer-learning\u201D-mean?"),n(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(M,"href","#5.-what-does-\u201Ctransfer-learning\u201D-mean?"),n(q,"class","relative group"),n(D,"id","6.-true-or-false?-a-language-model-usually-does-not-need-labels-for-its-pretraining."),n(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(D,"href","#6.-true-or-false?-a-language-model-usually-does-not-need-labels-for-its-pretraining."),n(T,"class","relative group"),n(L,"id","7.-select-the-sentence-that-best-describes-the-terms-\u201Cmodel,\u201D-\u201Carchitecture,\u201D-and-\u201Cweights.\u201D"),n(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(L,"href","#7.-select-the-sentence-that-best-describes-the-terms-\u201Cmodel,\u201D-\u201Carchitecture,\u201D-and-\u201Cweights.\u201D"),n(S,"class","relative group"),n(B,"id","8.-which-of-these-types-of-models-would-you-use-for-completing-prompts-with-generated-text?"),n(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(B,"href","#8.-which-of-these-types-of-models-would-you-use-for-completing-prompts-with-generated-text?"),n(P,"class","relative group"),n(K,"id","9.-which-of-those-types-of-models-would-you-use-for-summarizing-texts?"),n(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(K,"href","#9.-which-of-those-types-of-models-would-you-use-for-summarizing-texts?"),n(N,"class","relative group"),n(O,"id","10.-which-of-these-types-of-models-would-you-use-for-classifying-text-inputs-according-to-certain-labels?"),n(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(O,"href","#10.-which-of-these-types-of-models-would-you-use-for-classifying-text-inputs-according-to-certain-labels?"),n(z,"class","relative group"),n(Q,"id","11.-what-possible-source-can-the-bias-observed-in-a-model-have?"),n(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(Q,"href","#11.-what-possible-source-can-the-bias-observed-in-a-model-have?"),n(W,"class","relative group")},m(e,s){r(document.head,b),l(e,Re,s),l(e,x,s),r(x,H),r(H,xe),c(R,xe,null),r(x,jt),r(x,ke),r(ke,Ft),l(e,Ge,s),c(G,e,s),l(e,Je,s),l(e,ye,s),r(ye,Ct),l(e,Ue,s),l(e,be,s),r(be,It),l(e,Ye,s),l(e,k,s),r(k,j),r(j,_e),c(J,_e,null),r(k,Mt),r(k,U),r(U,Dt),r(U,Ee),r(Ee,Lt),r(U,Bt),l(e,Ve,s),c(Y,e,s),l(e,Xe,s),l(e,_,s),r(_,F),r(F,Ae),c(V,Ae,null),r(_,Kt),r(_,qe),r(qe,Ot),l(e,Ze,s),c(X,e,s),l(e,et,s),c(Z,e,s),l(e,tt,s),l(e,E,s),r(E,C),r(C,Te),c(ee,Te,null),r(E,Qt),r(E,Se),r(Se,Rt),l(e,rt,s),c(te,e,s),l(e,st,s),c(re,e,s),l(e,ot,s),l(e,A,s),r(A,I),r(I,Pe),c(se,Pe,null),r(A,Gt),r(A,Ne),r(Ne,Jt),l(e,at,s),c(oe,e,s),l(e,it,s),c(ae,e,s),l(e,nt,s),l(e,q,s),r(q,M),r(M,ze),c(ie,ze,null),r(q,Ut),r(q,We),r(We,Yt),l(e,lt,s),c(ne,e,s),l(e,ht,s),l(e,T,s),r(T,D),r(D,He),c(le,He,null),r(T,Vt),r(T,je),r(je,Xt),l(e,pt,s),c(he,e,s),l(e,ft,s),l(e,S,s),r(S,L),r(L,Fe),c(pe,Fe,null),r(S,Zt),r(S,Ce),r(Ce,er),l(e,ut,s),c(fe,e,s),l(e,ct,s),l(e,P,s),r(P,B),r(B,Ie),c(ue,Ie,null),r(P,tr),r(P,Me),r(Me,rr),l(e,mt,s),c(ce,e,s),l(e,dt,s),l(e,N,s),r(N,K),r(K,De),c(me,De,null),r(N,sr),r(N,Le),r(Le,or),l(e,wt,s),c(de,e,s),l(e,$t,s),l(e,z,s),r(z,O),r(O,Be),c(we,Be,null),r(z,ar),r(z,Ke),r(Ke,ir),l(e,gt,s),c($e,e,s),l(e,vt,s),l(e,W,s),r(W,Q),r(Q,Oe),c(ge,Oe,null),r(W,nr),r(W,Qe),r(Qe,lr),l(e,yt,s),c(ve,e,s),bt=!0},p:Zr,i(e){bt||(m(R.$$.fragment,e),m(G.$$.fragment,e),m(J.$$.fragment,e),m(Y.$$.fragment,e),m(V.$$.fragment,e),m(X.$$.fragment,e),m(Z.$$.fragment,e),m(ee.$$.fragment,e),m(te.$$.fragment,e),m(re.$$.fragment,e),m(se.$$.fragment,e),m(oe.$$.fragment,e),m(ae.$$.fragment,e),m(ie.$$.fragment,e),m(ne.$$.fragment,e),m(le.$$.fragment,e),m(he.$$.fragment,e),m(pe.$$.fragment,e),m(fe.$$.fragment,e),m(ue.$$.fragment,e),m(ce.$$.fragment,e),m(me.$$.fragment,e),m(de.$$.fragment,e),m(we.$$.fragment,e),m($e.$$.fragment,e),m(ge.$$.fragment,e),m(ve.$$.fragment,e),bt=!0)},o(e){d(R.$$.fragment,e),d(G.$$.fragment,e),d(J.$$.fragment,e),d(Y.$$.fragment,e),d(V.$$.fragment,e),d(X.$$.fragment,e),d(Z.$$.fragment,e),d(ee.$$.fragment,e),d(te.$$.fragment,e),d(re.$$.fragment,e),d(se.$$.fragment,e),d(oe.$$.fragment,e),d(ae.$$.fragment,e),d(ie.$$.fragment,e),d(ne.$$.fragment,e),d(le.$$.fragment,e),d(he.$$.fragment,e),d(pe.$$.fragment,e),d(fe.$$.fragment,e),d(ue.$$.fragment,e),d(ce.$$.fragment,e),d(me.$$.fragment,e),d(de.$$.fragment,e),d(we.$$.fragment,e),d($e.$$.fragment,e),d(ge.$$.fragment,e),d(ve.$$.fragment,e),bt=!1},d(e){t(b),e&&t(Re),e&&t(x),w(R),e&&t(Ge),w(G,e),e&&t(Je),e&&t(ye),e&&t(Ue),e&&t(be),e&&t(Ye),e&&t(k),w(J),e&&t(Ve),w(Y,e),e&&t(Xe),e&&t(_),w(V),e&&t(Ze),w(X,e),e&&t(et),w(Z,e),e&&t(tt),e&&t(E),w(ee),e&&t(rt),w(te,e),e&&t(st),w(re,e),e&&t(ot),e&&t(A),w(se),e&&t(at),w(oe,e),e&&t(it),w(ae,e),e&&t(nt),e&&t(q),w(ie),e&&t(lt),w(ne,e),e&&t(ht),e&&t(T),w(le),e&&t(pt),w(he,e),e&&t(ft),e&&t(S),w(pe),e&&t(ut),w(fe,e),e&&t(ct),e&&t(P),w(ue),e&&t(mt),w(ce,e),e&&t(dt),e&&t(N),w(me),e&&t(wt),w(de,e),e&&t($t),e&&t(z),w(we),e&&t(gt),w($e,e),e&&t(vt),e&&t(W),w(ge),e&&t(yt),w(ve,e)}}}const ss={local:"endofchapter-quiz",title:"End-of-chapter quiz"};function os(pr){return es(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ps extends Ur{constructor(b){super();Yr(this,b,os,rs,Vr,{})}}export{ps as default,ss as metadata};
