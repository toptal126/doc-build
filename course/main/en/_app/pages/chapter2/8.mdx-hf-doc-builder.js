import{S as uo,i as fo,s as po,e as a,k as p,w as _,t as P,l as ho,M as mo,c as s,d as t,m as d,x,a as h,h as N,b as i,G as o,g as f,y as A,o as v,p as lo,q as k,B as q,v as wo,n as co}from"../../chunks/vendor-hf-doc-builder.js";import{I as H}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as Pt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{Q as j}from"../../chunks/Question-hf-doc-builder.js";import{F as go}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function $o(M){let c,u,g,m,E,b,S,z,$,T;return m=new H({}),$=new j({props:{choices:[{text:"A model that automatically trains on your data",explain:"Incorrect. Are you mistaking this with our <a href='https://huggingface.co/autotrain'>AutoTrain</a> product?"},{text:"An object that returns the correct architecture based on the checkpoint",explain:"Exactly: the <code>TFAutoModel</code> only needs to know the checkpoint from which to initialize to return the correct architecture.",correct:!0},{text:"A model that automatically detects the language used for its inputs to load the correct weights",explain:"Incorrect; while some checkpoints and models are capable of handling multiple languages, there are no built-in tools for automatic checkpoint selection according to language. You should head over to the <a href='https://huggingface.co/models'>Model Hub</a> to find the best checkpoint for your task!"}]}}),{c(){c=a("h3"),u=a("a"),g=a("span"),_(m.$$.fragment),E=p(),b=a("span"),S=P("5. What is an TFAutoModel?"),z=p(),_($.$$.fragment),this.h()},l(r){c=s(r,"H3",{class:!0});var y=h(c);u=s(y,"A",{id:!0,class:!0,href:!0});var n=h(u);g=s(n,"SPAN",{});var w=h(g);x(m.$$.fragment,w),w.forEach(t),n.forEach(t),E=d(y),b=s(y,"SPAN",{});var I=h(b);S=N(I,"5. What is an TFAutoModel?"),I.forEach(t),y.forEach(t),z=d(r),x($.$$.fragment,r),this.h()},h(){i(u,"id","5.-what-is-an-tfautomodel?"),i(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(u,"href","#5.-what-is-an-tfautomodel?"),i(c,"class","relative group")},m(r,y){f(r,c,y),o(c,u),o(u,g),A(m,g,null),o(c,E),o(c,b),o(b,S),f(r,z,y),A($,r,y),T=!0},i(r){T||(k(m.$$.fragment,r),k($.$$.fragment,r),T=!0)},o(r){v(m.$$.fragment,r),v($.$$.fragment,r),T=!1},d(r){r&&t(c),q(m),r&&t(z),q($,r)}}}function vo(M){let c,u,g,m,E,b,S,z,$,T;return m=new H({}),$=new j({props:{choices:[{text:"A model that automatically trains on your data",explain:"Incorrect. Are you mistaking this with our <a href='https://huggingface.co/autotrain'>AutoTrain</a> product?"},{text:"An object that returns the correct architecture based on the checkpoint",explain:"Exactly: the <code>AutoModel</code> only needs to know the checkpoint from which to initialize to return the correct architecture.",correct:!0},{text:"A model that automatically detects the language used for its inputs to load the correct weights",explain:"Incorrect; while some checkpoints and models are capable of handling multiple languages, there are no built-in tools for automatic checkpoint selection according to language. You should head over to the <a href='https://huggingface.co/models'>Model Hub</a> to find the best checkpoint for your task!"}]}}),{c(){c=a("h3"),u=a("a"),g=a("span"),_(m.$$.fragment),E=p(),b=a("span"),S=P("5. What is an AutoModel?"),z=p(),_($.$$.fragment),this.h()},l(r){c=s(r,"H3",{class:!0});var y=h(c);u=s(y,"A",{id:!0,class:!0,href:!0});var n=h(u);g=s(n,"SPAN",{});var w=h(g);x(m.$$.fragment,w),w.forEach(t),n.forEach(t),E=d(y),b=s(y,"SPAN",{});var I=h(b);S=N(I,"5. What is an AutoModel?"),I.forEach(t),y.forEach(t),z=d(r),x($.$$.fragment,r),this.h()},h(){i(u,"id","5.-what-is-an-automodel?"),i(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(u,"href","#5.-what-is-an-automodel?"),i(c,"class","relative group")},m(r,y){f(r,c,y),o(c,u),o(u,g),A(m,g,null),o(c,E),o(c,b),o(b,S),f(r,z,y),A($,r,y),T=!0},i(r){T||(k(m.$$.fragment,r),k($.$$.fragment,r),T=!0)},o(r){v(m.$$.fragment,r),v($.$$.fragment,r),T=!1},d(r){r&&t(c),q(m),r&&t(z),q($,r)}}}function ko(M){let c,u,g,m,E,b,S,z,$,T,r,y;return m=new H({}),$=new Pt({props:{code:`
`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModel

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
model = TFAutoModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

encoded = tokenizer(<span class="hljs-string">&quot;Hey!&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
result = model(**encoded)`}}),r=new j({props:{choices:[{text:"No, it seems correct.",explain:"Unfortunately, coupling a model with a tokenizer that was trained with a different checkpoint is rarely a good idea. The model was not trained to make sense out of this tokenizer's output, so the model output (if it can even run!) will not make any sense."},{text:"The tokenizer and model should always be from the same checkpoint.",explain:"Right!",correct:!0},{text:"It's good practice to pad and truncate with the tokenizer as every input is a batch.",explain:"It's true that every model input needs to be a batch. However, truncating or padding this sequence wouldn't necessarily make sense as there is only one of it, and those are techniques to batch together a list of sentences."}]}}),{c(){c=a("h3"),u=a("a"),g=a("span"),_(m.$$.fragment),E=p(),b=a("span"),S=P("10. Is there something wrong with the following code?"),z=p(),_($.$$.fragment),T=p(),_(r.$$.fragment),this.h()},l(n){c=s(n,"H3",{class:!0});var w=h(c);u=s(w,"A",{id:!0,class:!0,href:!0});var I=h(u);g=s(I,"SPAN",{});var W=h(g);x(m.$$.fragment,W),W.forEach(t),I.forEach(t),E=d(w),b=s(w,"SPAN",{});var R=h(b);S=N(R,"10. Is there something wrong with the following code?"),R.forEach(t),w.forEach(t),z=d(n),x($.$$.fragment,n),T=d(n),x(r.$$.fragment,n),this.h()},h(){i(u,"id","10.-is-there-something-wrong-with-the-following-code?"),i(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(u,"href","#10.-is-there-something-wrong-with-the-following-code?"),i(c,"class","relative group")},m(n,w){f(n,c,w),o(c,u),o(u,g),A(m,g,null),o(c,E),o(c,b),o(b,S),f(n,z,w),A($,n,w),f(n,T,w),A(r,n,w),y=!0},i(n){y||(k(m.$$.fragment,n),k($.$$.fragment,n),k(r.$$.fragment,n),y=!0)},o(n){v(m.$$.fragment,n),v($.$$.fragment,n),v(r.$$.fragment,n),y=!1},d(n){n&&t(c),q(m),n&&t(z),q($,n),n&&t(T),q(r,n)}}}function bo(M){let c,u,g,m,E,b,S,z,$,T,r,y;return m=new H({}),$=new Pt({props:{code:`
`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModel

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

encoded = tokenizer(<span class="hljs-string">&quot;Hey!&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
result = model(**encoded)`}}),r=new j({props:{choices:[{text:"No, it seems correct.",explain:"Unfortunately, coupling a model with a tokenizer that was trained with a different checkpoint is rarely a good idea. The model was not trained to make sense out of this tokenizer's output, so the model output (if it can even run!) will not make any sense."},{text:"The tokenizer and model should always be from the same checkpoint.",explain:"Right!",correct:!0},{text:"It's good practice to pad and truncate with the tokenizer as every input is a batch.",explain:"It's true that every model input needs to be a batch. However, truncating or padding this sequence wouldn't necessarily make sense as there is only one of it, and those are techniques to batch together a list of sentences."}]}}),{c(){c=a("h3"),u=a("a"),g=a("span"),_(m.$$.fragment),E=p(),b=a("span"),S=P("10. Is there something wrong with the following code?"),z=p(),_($.$$.fragment),T=p(),_(r.$$.fragment),this.h()},l(n){c=s(n,"H3",{class:!0});var w=h(c);u=s(w,"A",{id:!0,class:!0,href:!0});var I=h(u);g=s(I,"SPAN",{});var W=h(g);x(m.$$.fragment,W),W.forEach(t),I.forEach(t),E=d(w),b=s(w,"SPAN",{});var R=h(b);S=N(R,"10. Is there something wrong with the following code?"),R.forEach(t),w.forEach(t),z=d(n),x($.$$.fragment,n),T=d(n),x(r.$$.fragment,n),this.h()},h(){i(u,"id","10.-is-there-something-wrong-with-the-following-code?"),i(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(u,"href","#10.-is-there-something-wrong-with-the-following-code?"),i(c,"class","relative group")},m(n,w){f(n,c,w),o(c,u),o(u,g),A(m,g,null),o(c,E),o(c,b),o(b,S),f(n,z,w),A($,n,w),f(n,T,w),A(r,n,w),y=!0},i(n){y||(k(m.$$.fragment,n),k($.$$.fragment,n),k(r.$$.fragment,n),y=!0)},o(n){v(m.$$.fragment,n),v($.$$.fragment,n),v(r.$$.fragment,n),y=!1},d(n){n&&t(c),q(m),n&&t(z),q($,n),n&&t(T),q(r,n)}}}function yo(M){let c,u,g,m,E,b,S,z,$,T,r,y,n,w,I,W,R,ze,mt,Re,ne,Ue,U,K,Ee,re,wt,Te,gt,Be,ae,Le,B,V,Se,se,$t,Ie,vt,Oe,ie,Qe,L,X,Pe,he,kt,Ne,bt,Ge,le,Je,C,F,_e,O,Z,We,ce,yt,He,_t,Ke,ue,Ve,Q,ee,je,fe,xt,Me,At,Xe,pe,Ze,G,te,Ce,de,qt,Fe,zt,et,me,tt,J,oe,De,we,Et,ge,Tt,Ye,St,It,ot,$e,nt,ve,rt,D,Y,xe,at;g=new go({props:{fw:M[0]}}),z=new H({}),W=new H({}),ne=new j({props:{choices:[{text:"First, the model, which handles text and returns raw predictions. The tokenizer then makes sense of these predictions and converts them back to text when needed.",explain:"The model cannot understand text! The tokenizer must first tokenize the text and convert it to IDs so that it is understandable by the model."},{text:"First, the tokenizer, which handles text and returns IDs. The model handles these IDs and outputs a prediction, which can be some text.",explain:"The model's prediction cannot be text straight away. The tokenizer has to be used in order to convert the prediction back to text!"},{text:"The tokenizer handles text and returns IDs. The model handles these IDs and outputs a prediction. The tokenizer can then be used once again to convert these predictions back to some text.",explain:"Correct! The tokenizer can be used for both tokenizing and de-tokenizing.",correct:!0}]}}),re=new H({}),ae=new j({props:{choices:[{text:"2: The sequence length and the batch size",explain:"False! The tensor output by the model has a third dimension: hidden size."},{text:"2: The sequence length and the hidden size",explain:"False! All Transformer models handle batches, even with a single sequence; that would be a batch size of 1!"},{text:"3: The sequence length, the batch size, and the hidden size",explain:"Correct!",correct:!0}]}}),se=new H({}),ie=new j({props:{choices:[{text:"WordPiece",explain:"Yes, that's one example of subword tokenization!",correct:!0},{text:"Character-based tokenization",explain:"Character-based tokenization is not a type of subword tokenization."},{text:"Splitting on whitespace and punctuation",explain:"That's a word-based tokenization scheme!"},{text:"BPE",explain:"Yes, that's one example of subword tokenization!",correct:!0},{text:"Unigram",explain:"Yes, that's one example of subword tokenization!",correct:!0},{text:"None of the above",explain:"Incorrect!"}]}}),he=new H({}),le=new j({props:{choices:[{text:"A component of the base Transformer network that redirects tensors to their correct layers",explain:"Incorrect! There's no such component."},{text:"Also known as the self-attention mechanism, it adapts the representation of a token according to the other tokens of the sequence",explain:'Incorrect! The self-attention layer does contain attention "heads," but these are not adaptation heads.'},{text:"An additional component, usually made up of one or a few layers, to convert the transformer predictions to a task-specific output",explain:"That's right. Adaptation heads, also known simply as heads, come up in different forms: language modeling heads, question answering heads, sequence classification heads... ",correct:!0}]}});const Nt=[vo,$o],ke=[];function Wt(e,l){return e[0]==="pt"?0:1}C=Wt(M),F=ke[C]=Nt[C](M),ce=new H({}),ue=new j({props:{choices:[{text:"Truncating",explain:"Yes, truncation is a correct way of evening out sequences so that they fit in a rectangular shape. Is it the only one, though?",correct:!0},{text:"Returning tensors",explain:"While the other techniques allow you to return rectangular tensors, returning tensors isn't helpful when batching sequences together."},{text:"Padding",explain:"Yes, padding is a correct way of evening out sequences so that they fit in a rectangular shape. Is it the only one, though?",correct:!0},{text:"Attention masking",explain:"Absolutely! Attention masks are of prime importance when handling sequences of different lengths. That's not the only technique to be aware of, however.",correct:!0}]}}),fe=new H({}),pe=new j({props:{choices:[{text:"It softens the logits so that they're more reliable.",explain:"No, the SoftMax function does not affect the reliability of results."},{text:"It applies a lower and upper bound so that they're understandable.",explain:"Correct! The resulting values are bound between 0 and 1. That's not the only reason we use a SoftMax function, though.",correct:!0},{text:"The total sum of the output is then 1, resulting in a possible probabilistic interpretation.",explain:"Correct! That's not the only reason we use a SoftMax function, though.",correct:!0}]}}),de=new H({}),me=new j({props:{choices:[{text:"<code>encode</code>, as it can encode text into IDs and IDs into predictions",explain:"Wrong! While the <code>encode</code> method does exist on tokenizers, it does not exist on models."},{text:"Calling the tokenizer object directly.",explain:"Exactly! The <code>__call__</code> method of the tokenizer is a very powerful method which can handle pretty much anything. It is also the method used to retrieve predictions from a model.",correct:!0},{text:"<code>pad</code>",explain:"Wrong! Padding is very useful, but it's just one part of the tokenizer API."},{text:"<code>tokenize</code>",explain:"The <code>tokenize</code> method is arguably one of the most useful methods, but it isn't the core of the tokenizer API."}]}}),we=new H({}),$e=new Pt({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
result = tokenizer.tokenize(<span class="hljs-string">&quot;Hello!&quot;</span>)`}}),ve=new j({props:{choices:[{text:"A list of strings, each string being a token",explain:"Absolutely! Convert this to IDs, and send them to a model!",correct:!0},{text:"A list of IDs",explain:"Incorrect; that's what the <code>__call__</code> or <code>convert_tokens_to_ids</code> method is for!"},{text:"A string containing all of the tokens",explain:"This would be suboptimal, as the goal is to split the string into multiple tokens."}]}});const Ht=[bo,ko],be=[];function jt(e,l){return e[0]==="pt"?0:1}return D=jt(M),Y=be[D]=Ht[D](M),{c(){c=a("meta"),u=p(),_(g.$$.fragment),m=p(),E=a("h1"),b=a("a"),S=a("span"),_(z.$$.fragment),$=p(),T=a("span"),r=P("End-of-chapter quiz"),y=p(),n=a("h3"),w=a("a"),I=a("span"),_(W.$$.fragment),R=p(),ze=a("span"),mt=P("1. What is the order of the language modeling pipeline?"),Re=p(),_(ne.$$.fragment),Ue=p(),U=a("h3"),K=a("a"),Ee=a("span"),_(re.$$.fragment),wt=p(),Te=a("span"),gt=P("2. How many dimensions does the tensor output by the base Transformer model have, and what are they?"),Be=p(),_(ae.$$.fragment),Le=p(),B=a("h3"),V=a("a"),Se=a("span"),_(se.$$.fragment),$t=p(),Ie=a("span"),vt=P("3. Which of the following is an example of subword tokenization?"),Oe=p(),_(ie.$$.fragment),Qe=p(),L=a("h3"),X=a("a"),Pe=a("span"),_(he.$$.fragment),kt=p(),Ne=a("span"),bt=P("4. What is a model head?"),Ge=p(),_(le.$$.fragment),Je=p(),F.c(),_e=p(),O=a("h3"),Z=a("a"),We=a("span"),_(ce.$$.fragment),yt=p(),He=a("span"),_t=P("6. What are the techniques to be aware of when batching sequences of different lengths together?"),Ke=p(),_(ue.$$.fragment),Ve=p(),Q=a("h3"),ee=a("a"),je=a("span"),_(fe.$$.fragment),xt=p(),Me=a("span"),At=P("7. What is the point of applying a SoftMax function to the logits output by a sequence classification model?"),Xe=p(),_(pe.$$.fragment),Ze=p(),G=a("h3"),te=a("a"),Ce=a("span"),_(de.$$.fragment),qt=p(),Fe=a("span"),zt=P("8. What method is most of the tokenizer API centered around?"),et=p(),_(me.$$.fragment),tt=p(),J=a("h3"),oe=a("a"),De=a("span"),_(we.$$.fragment),Et=p(),ge=a("span"),Tt=P("9. What does the "),Ye=a("code"),St=P("result"),It=P(" variable contain in this code sample?"),ot=p(),_($e.$$.fragment),nt=p(),_(ve.$$.fragment),rt=p(),Y.c(),xe=ho(),this.h()},l(e){const l=mo('[data-svelte="svelte-1phssyn"]',document.head);c=s(l,"META",{name:!0,content:!0}),l.forEach(t),u=d(e),x(g.$$.fragment,e),m=d(e),E=s(e,"H1",{class:!0});var ye=h(E);b=s(ye,"A",{id:!0,class:!0,href:!0});var Ae=h(b);S=s(Ae,"SPAN",{});var qe=h(S);x(z.$$.fragment,qe),qe.forEach(t),Ae.forEach(t),$=d(ye),T=s(ye,"SPAN",{});var Mt=h(T);r=N(Mt,"End-of-chapter quiz"),Mt.forEach(t),ye.forEach(t),y=d(e),n=s(e,"H3",{class:!0});var st=h(n);w=s(st,"A",{id:!0,class:!0,href:!0});var Ct=h(w);I=s(Ct,"SPAN",{});var Ft=h(I);x(W.$$.fragment,Ft),Ft.forEach(t),Ct.forEach(t),R=d(st),ze=s(st,"SPAN",{});var Dt=h(ze);mt=N(Dt,"1. What is the order of the language modeling pipeline?"),Dt.forEach(t),st.forEach(t),Re=d(e),x(ne.$$.fragment,e),Ue=d(e),U=s(e,"H3",{class:!0});var it=h(U);K=s(it,"A",{id:!0,class:!0,href:!0});var Yt=h(K);Ee=s(Yt,"SPAN",{});var Rt=h(Ee);x(re.$$.fragment,Rt),Rt.forEach(t),Yt.forEach(t),wt=d(it),Te=s(it,"SPAN",{});var Ut=h(Te);gt=N(Ut,"2. How many dimensions does the tensor output by the base Transformer model have, and what are they?"),Ut.forEach(t),it.forEach(t),Be=d(e),x(ae.$$.fragment,e),Le=d(e),B=s(e,"H3",{class:!0});var ht=h(B);V=s(ht,"A",{id:!0,class:!0,href:!0});var Bt=h(V);Se=s(Bt,"SPAN",{});var Lt=h(Se);x(se.$$.fragment,Lt),Lt.forEach(t),Bt.forEach(t),$t=d(ht),Ie=s(ht,"SPAN",{});var Ot=h(Ie);vt=N(Ot,"3. Which of the following is an example of subword tokenization?"),Ot.forEach(t),ht.forEach(t),Oe=d(e),x(ie.$$.fragment,e),Qe=d(e),L=s(e,"H3",{class:!0});var lt=h(L);X=s(lt,"A",{id:!0,class:!0,href:!0});var Qt=h(X);Pe=s(Qt,"SPAN",{});var Gt=h(Pe);x(he.$$.fragment,Gt),Gt.forEach(t),Qt.forEach(t),kt=d(lt),Ne=s(lt,"SPAN",{});var Jt=h(Ne);bt=N(Jt,"4. What is a model head?"),Jt.forEach(t),lt.forEach(t),Ge=d(e),x(le.$$.fragment,e),Je=d(e),F.l(e),_e=d(e),O=s(e,"H3",{class:!0});var ct=h(O);Z=s(ct,"A",{id:!0,class:!0,href:!0});var Kt=h(Z);We=s(Kt,"SPAN",{});var Vt=h(We);x(ce.$$.fragment,Vt),Vt.forEach(t),Kt.forEach(t),yt=d(ct),He=s(ct,"SPAN",{});var Xt=h(He);_t=N(Xt,"6. What are the techniques to be aware of when batching sequences of different lengths together?"),Xt.forEach(t),ct.forEach(t),Ke=d(e),x(ue.$$.fragment,e),Ve=d(e),Q=s(e,"H3",{class:!0});var ut=h(Q);ee=s(ut,"A",{id:!0,class:!0,href:!0});var Zt=h(ee);je=s(Zt,"SPAN",{});var eo=h(je);x(fe.$$.fragment,eo),eo.forEach(t),Zt.forEach(t),xt=d(ut),Me=s(ut,"SPAN",{});var to=h(Me);At=N(to,"7. What is the point of applying a SoftMax function to the logits output by a sequence classification model?"),to.forEach(t),ut.forEach(t),Xe=d(e),x(pe.$$.fragment,e),Ze=d(e),G=s(e,"H3",{class:!0});var ft=h(G);te=s(ft,"A",{id:!0,class:!0,href:!0});var oo=h(te);Ce=s(oo,"SPAN",{});var no=h(Ce);x(de.$$.fragment,no),no.forEach(t),oo.forEach(t),qt=d(ft),Fe=s(ft,"SPAN",{});var ro=h(Fe);zt=N(ro,"8. What method is most of the tokenizer API centered around?"),ro.forEach(t),ft.forEach(t),et=d(e),x(me.$$.fragment,e),tt=d(e),J=s(e,"H3",{class:!0});var pt=h(J);oe=s(pt,"A",{id:!0,class:!0,href:!0});var ao=h(oe);De=s(ao,"SPAN",{});var so=h(De);x(we.$$.fragment,so),so.forEach(t),ao.forEach(t),Et=d(pt),ge=s(pt,"SPAN",{});var dt=h(ge);Tt=N(dt,"9. What does the "),Ye=s(dt,"CODE",{});var io=h(Ye);St=N(io,"result"),io.forEach(t),It=N(dt," variable contain in this code sample?"),dt.forEach(t),pt.forEach(t),ot=d(e),x($e.$$.fragment,e),nt=d(e),x(ve.$$.fragment,e),rt=d(e),Y.l(e),xe=ho(),this.h()},h(){i(c,"name","hf:doc:metadata"),i(c,"content",JSON.stringify(_o)),i(b,"id","endofchapter-quiz"),i(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(b,"href","#endofchapter-quiz"),i(E,"class","relative group"),i(w,"id","1.-what-is-the-order-of-the-language-modeling-pipeline?"),i(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(w,"href","#1.-what-is-the-order-of-the-language-modeling-pipeline?"),i(n,"class","relative group"),i(K,"id","2.-how-many-dimensions-does-the-tensor-output-by-the-base-transformer-model-have,-and-what-are-they?"),i(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(K,"href","#2.-how-many-dimensions-does-the-tensor-output-by-the-base-transformer-model-have,-and-what-are-they?"),i(U,"class","relative group"),i(V,"id","3.-which-of-the-following-is-an-example-of-subword-tokenization?"),i(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(V,"href","#3.-which-of-the-following-is-an-example-of-subword-tokenization?"),i(B,"class","relative group"),i(X,"id","4.-what-is-a-model-head?"),i(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(X,"href","#4.-what-is-a-model-head?"),i(L,"class","relative group"),i(Z,"id","6.-what-are-the-techniques-to-be-aware-of-when-batching-sequences-of-different-lengths-together?"),i(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(Z,"href","#6.-what-are-the-techniques-to-be-aware-of-when-batching-sequences-of-different-lengths-together?"),i(O,"class","relative group"),i(ee,"id","7.-what-is-the-point-of-applying-a-softmax-function-to-the-logits-output-by-a-sequence-classification-model?"),i(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(ee,"href","#7.-what-is-the-point-of-applying-a-softmax-function-to-the-logits-output-by-a-sequence-classification-model?"),i(Q,"class","relative group"),i(te,"id","8.-what-method-is-most-of-the-tokenizer-api-centered-around?"),i(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(te,"href","#8.-what-method-is-most-of-the-tokenizer-api-centered-around?"),i(G,"class","relative group"),i(oe,"id","9.-what-does-the-<code>result</code>-variable-contain-in-this-code-sample?"),i(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(oe,"href","#9.-what-does-the-<code>result</code>-variable-contain-in-this-code-sample?"),i(J,"class","relative group")},m(e,l){o(document.head,c),f(e,u,l),A(g,e,l),f(e,m,l),f(e,E,l),o(E,b),o(b,S),A(z,S,null),o(E,$),o(E,T),o(T,r),f(e,y,l),f(e,n,l),o(n,w),o(w,I),A(W,I,null),o(n,R),o(n,ze),o(ze,mt),f(e,Re,l),A(ne,e,l),f(e,Ue,l),f(e,U,l),o(U,K),o(K,Ee),A(re,Ee,null),o(U,wt),o(U,Te),o(Te,gt),f(e,Be,l),A(ae,e,l),f(e,Le,l),f(e,B,l),o(B,V),o(V,Se),A(se,Se,null),o(B,$t),o(B,Ie),o(Ie,vt),f(e,Oe,l),A(ie,e,l),f(e,Qe,l),f(e,L,l),o(L,X),o(X,Pe),A(he,Pe,null),o(L,kt),o(L,Ne),o(Ne,bt),f(e,Ge,l),A(le,e,l),f(e,Je,l),ke[C].m(e,l),f(e,_e,l),f(e,O,l),o(O,Z),o(Z,We),A(ce,We,null),o(O,yt),o(O,He),o(He,_t),f(e,Ke,l),A(ue,e,l),f(e,Ve,l),f(e,Q,l),o(Q,ee),o(ee,je),A(fe,je,null),o(Q,xt),o(Q,Me),o(Me,At),f(e,Xe,l),A(pe,e,l),f(e,Ze,l),f(e,G,l),o(G,te),o(te,Ce),A(de,Ce,null),o(G,qt),o(G,Fe),o(Fe,zt),f(e,et,l),A(me,e,l),f(e,tt,l),f(e,J,l),o(J,oe),o(oe,De),A(we,De,null),o(J,Et),o(J,ge),o(ge,Tt),o(ge,Ye),o(Ye,St),o(ge,It),f(e,ot,l),A($e,e,l),f(e,nt,l),A(ve,e,l),f(e,rt,l),be[D].m(e,l),f(e,xe,l),at=!0},p(e,[l]){const ye={};l&1&&(ye.fw=e[0]),g.$set(ye);let Ae=C;C=Wt(e),C!==Ae&&(co(),v(ke[Ae],1,1,()=>{ke[Ae]=null}),lo(),F=ke[C],F||(F=ke[C]=Nt[C](e),F.c()),k(F,1),F.m(_e.parentNode,_e));let qe=D;D=jt(e),D!==qe&&(co(),v(be[qe],1,1,()=>{be[qe]=null}),lo(),Y=be[D],Y||(Y=be[D]=Ht[D](e),Y.c()),k(Y,1),Y.m(xe.parentNode,xe))},i(e){at||(k(g.$$.fragment,e),k(z.$$.fragment,e),k(W.$$.fragment,e),k(ne.$$.fragment,e),k(re.$$.fragment,e),k(ae.$$.fragment,e),k(se.$$.fragment,e),k(ie.$$.fragment,e),k(he.$$.fragment,e),k(le.$$.fragment,e),k(F),k(ce.$$.fragment,e),k(ue.$$.fragment,e),k(fe.$$.fragment,e),k(pe.$$.fragment,e),k(de.$$.fragment,e),k(me.$$.fragment,e),k(we.$$.fragment,e),k($e.$$.fragment,e),k(ve.$$.fragment,e),k(Y),at=!0)},o(e){v(g.$$.fragment,e),v(z.$$.fragment,e),v(W.$$.fragment,e),v(ne.$$.fragment,e),v(re.$$.fragment,e),v(ae.$$.fragment,e),v(se.$$.fragment,e),v(ie.$$.fragment,e),v(he.$$.fragment,e),v(le.$$.fragment,e),v(F),v(ce.$$.fragment,e),v(ue.$$.fragment,e),v(fe.$$.fragment,e),v(pe.$$.fragment,e),v(de.$$.fragment,e),v(me.$$.fragment,e),v(we.$$.fragment,e),v($e.$$.fragment,e),v(ve.$$.fragment,e),v(Y),at=!1},d(e){t(c),e&&t(u),q(g,e),e&&t(m),e&&t(E),q(z),e&&t(y),e&&t(n),q(W),e&&t(Re),q(ne,e),e&&t(Ue),e&&t(U),q(re),e&&t(Be),q(ae,e),e&&t(Le),e&&t(B),q(se),e&&t(Oe),q(ie,e),e&&t(Qe),e&&t(L),q(he),e&&t(Ge),q(le,e),e&&t(Je),ke[C].d(e),e&&t(_e),e&&t(O),q(ce),e&&t(Ke),q(ue,e),e&&t(Ve),e&&t(Q),q(fe),e&&t(Xe),q(pe,e),e&&t(Ze),e&&t(G),q(de),e&&t(et),q(me,e),e&&t(tt),e&&t(J),q(we),e&&t(ot),q($e,e),e&&t(nt),q(ve,e),e&&t(rt),be[D].d(e),e&&t(xe)}}}const _o={local:"endofchapter-quiz",title:"End-of-chapter quiz"};function xo(M,c,u){let g="pt";return wo(()=>{const m=new URLSearchParams(window.location.search);u(0,g=m.get("fw")||"pt")}),[g]}class So extends uo{constructor(c){super();fo(this,c,xo,yo,po,{})}}export{So as default,_o as metadata};
