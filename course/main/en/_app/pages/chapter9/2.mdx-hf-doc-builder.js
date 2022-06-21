import{S as uo,i as co,s as fo,e as r,k as u,w as E,t as s,M as mo,c as i,d as t,m as c,a as p,x as j,h as l,b as f,N as ka,G as a,g as n,y as I,L as ho,q as P,o as G,B as q,v as wo}from"../../chunks/vendor-hf-doc-builder.js";import{I as po}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ce}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as yo}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";function bo(xa){let k,Ce,x,T,fe,N,wt,me,yt,Le,A,De,B,bt,He,K,he,gt,Oe,Q,vt,Se,V,kt,Ne,M,Ae,X,xt,Me,g,b,_t,de,$t,Et,we,jt,It,ye,Pt,Gt,qt,m,Tt,be,Ct,Lt,ge,Dt,Ht,ve,Ot,St,ke,Nt,At,xe,Mt,Ft,Wt,_,Yt,_e,zt,Jt,$e,Rt,Ut,Fe,C,Bt,Ee,F,Kt,Qt,We,h,_a,Ye,Z,Vt,ze,L,Xt,je,Zt,ea,Je,ee,ta,Re,W,Ue,d,$a,Be,te,aa,Ke,ae,oa,Qe,$,D,Ie,Y,sa,Pe,la,Ve,H,na,Ge,ra,ia,Xe,v,pa,qe,ua,ca,oe,fa,ma,Ze,se,ha,et,z,tt,le,da,at,J,ot,R,st,O,wa,Te,ya,ba,lt,U,nt,ne,ga,rt,w,Ea,it,re,va,pt;return N=new po({}),A=new yo({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter9/section2.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter9/section2.ipynb"}]}}),M=new ce({props:{code:`



`,highlighted:`<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr


<span class="hljs-keyword">def</span> <span class="hljs-title function_">greet</span>(<span class="hljs-params">name</span>):
    <span class="hljs-keyword">return</span> <span class="hljs-string">&quot;Hello &quot;</span> + name


demo = gr.Interface(fn=greet, inputs=<span class="hljs-string">&quot;text&quot;</span>, outputs=<span class="hljs-string">&quot;text&quot;</span>)

demo.launch()`}}),W=new ce({props:{code:`



`,highlighted:`<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr


<span class="hljs-keyword">def</span> <span class="hljs-title function_">greet</span>(<span class="hljs-params">name</span>):
    <span class="hljs-keyword">return</span> <span class="hljs-string">&quot;Hello &quot;</span> + name


<span class="hljs-comment"># We instantiate the Textbox class</span>
textbox = gr.Textbox(label=<span class="hljs-string">&quot;Type your name here:&quot;</span>, placeholder=<span class="hljs-string">&quot;John Doe&quot;</span>, lines=<span class="hljs-number">2</span>)

gr.Interface(fn=greet, inputs=textbox, outputs=<span class="hljs-string">&quot;text&quot;</span>).launch()`}}),Y=new po({}),z=new ce({props:{code:`

`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

model = pipeline(<span class="hljs-string">&quot;text-generation&quot;</span>)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">predict</span>(<span class="hljs-params">prompt</span>):
    completion = model(prompt)[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;generated_text&quot;</span>]
    <span class="hljs-keyword">return</span> completion`}}),J=new ce({props:{code:'predict("My favorite programming language is")',highlighted:'<span class="hljs-function"><span class="hljs-title">predict</span><span class="hljs-params">(<span class="hljs-string">&quot;My favorite programming language is&quot;</span>)</span></span>'}}),R=new ce({props:{code:">> My favorite programming language is Haskell. I really enjoyed the Haskell language, but it doesn't have all the features that can be applied to any other language. For example, all it does is compile to a byte array.",highlighted:'&gt;&gt; My favorite programming language <span class="hljs-keyword">is</span> Haskell. I really enjoyed <span class="hljs-keyword">the</span> Haskell language, <span class="hljs-keyword">but</span> <span class="hljs-keyword">it</span> doesn&#x27;t have all <span class="hljs-keyword">the</span> features <span class="hljs-keyword">that</span> can be applied <span class="hljs-keyword">to</span> any other language. For example, all <span class="hljs-keyword">it</span> <span class="hljs-keyword">does</span> <span class="hljs-keyword">is</span> compile <span class="hljs-keyword">to</span> a byte array.'}}),U=new ce({props:{code:"",highlighted:`<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr

gr.Interface(fn=predict, inputs=<span class="hljs-string">&quot;text&quot;</span>, outputs=<span class="hljs-string">&quot;text&quot;</span>).launch()`}}),{c(){k=r("meta"),Ce=u(),x=r("h1"),T=r("a"),fe=r("span"),E(N.$$.fragment),wt=u(),me=r("span"),yt=s("Building your first demo"),Le=u(),E(A.$$.fragment),De=u(),B=r("p"),bt=s("Let\u2019s start by installing Gradio! Since it is a Python package, simply run:"),He=u(),K=r("p"),he=r("code"),gt=s("$ pip install gradio"),Oe=u(),Q=r("p"),vt=s(`You can run Gradio anywhere, be it from your favourite Python IDE, to Jupyter notebooks or even in Google Colab \u{1F92F}!
So install Gradio wherever you run Python!`),Se=u(),V=r("p"),kt=s("Let\u2019s get started with a simple \u201CHello World\u201D example to get familiar with the Gradio syntax:"),Ne=u(),E(M.$$.fragment),Ae=u(),X=r("p"),xt=s("Let\u2019s walk through the code above:"),Me=u(),g=r("ul"),b=r("li"),_t=s("First, we define a function called "),de=r("code"),$t=s("greet()"),Et=s(". In this case, it is a simple function that adds \u201CHello\u201D before your name, but it can be "),we=r("em"),jt=s("any"),It=s(" Python function in general. For example, in machine learning applications, this function would "),ye=r("em"),Pt=s("call a model to make a prediction"),Gt=s(" on an input and return the output."),qt=u(),m=r("li"),Tt=s("Then, we create a Gradio "),be=r("code"),Ct=s("Interface"),Lt=s(" with three arguments, "),ge=r("code"),Dt=s("fn"),Ht=s(", "),ve=r("code"),Ot=s("inputs"),St=s(", and "),ke=r("code"),Nt=s("outputs"),At=s(". These arguments define the prediction function, as well as the "),xe=r("em"),Mt=s("type"),Ft=s(" of input and output components we would like. In our case, both components are simple text boxes."),Wt=u(),_=r("li"),Yt=s("We then call the "),_e=r("code"),zt=s("launch()"),Jt=s(" method on the "),$e=r("code"),Rt=s("Interface"),Ut=s(" that we created."),Fe=u(),C=r("p"),Bt=s("If you run this code, the interface below will appear automatically within a Jupyter/Colab notebook, or pop in a browser on "),Ee=r("strong"),F=r("a"),Kt=s("http://localhost:7860"),Qt=s(" if running from a script."),We=u(),h=r("iframe"),Ye=u(),Z=r("p"),Vt=s("Try using this GUI right now with your own name or some other input!"),ze=u(),L=r("p"),Xt=s("You\u2019ll notice that in this GUI, Gradio automatically inferred the name of the input parameter ("),je=r("code"),Zt=s("name"),ea=s(`)
and applied it as a label on top of the textbox. What if you\u2019d like to change that?
Or if you\u2019d like to customize the textbox in some other way? In that case, you can
instantiate a class object representing the input component.`),Je=u(),ee=r("p"),ta=s("Take a look at the example below:"),Re=u(),E(W.$$.fragment),Ue=u(),d=r("iframe"),Be=u(),te=r("p"),aa=s(`Here, we\u2019ve created an input textbox with a label, a placeholder, and a set number of lines.
You could do the same for the output textbox, but we\u2019ll leave that for now.`),Ke=u(),ae=r("p"),oa=s(`We\u2019ve seen that with just a few lines of code, Gradio lets you create a simple interface around any function
with any kind of inputs or outputs. In this section, we\u2019ve started with a
simple textbox, but in the next sections, we\u2019ll cover other kinds of inputs and outputs. Let\u2019s now take a look at including some NLP in a Gradio application.`),Qe=u(),$=r("h2"),D=r("a"),Ie=r("span"),E(Y.$$.fragment),sa=u(),Pe=r("span"),la=s("\u{1F916} Including model predictions"),Ve=u(),H=r("p"),na=s("Let\u2019s now build a simple interface that allows you to demo a "),Ge=r("strong"),ra=s("text-generation"),ia=s(" model like GPT-2."),Xe=u(),v=r("p"),pa=s("We\u2019ll load our model using the "),qe=r("code"),ua=s("pipeline()"),ca=s(` function from \u{1F917} Transformers.
If you need a quick refresher, you can go back to `),oe=r("a"),fa=s("that section in Chapter 1"),ma=s("."),Ze=u(),se=r("p"),ha=s("First, we define a prediction function that takes in a text prompt and returns the text completion:"),et=u(),E(z.$$.fragment),tt=u(),le=r("p"),da=s("This function completes prompts that you provide, and you can run it with your own input prompts to see how it works. Here is an example (you might get a different completion):"),at=u(),E(J.$$.fragment),ot=u(),E(R.$$.fragment),st=u(),O=r("p"),wa=s("Now that we have a function for generating predictions, we can create and launch an "),Te=r("code"),ya=s("Interface"),ba=s(" in the same way we did earlier:"),lt=u(),E(U.$$.fragment),nt=u(),ne=r("p"),ga=s("That\u2019s it! You can now use this interface to generate text using the GPT-2 model as shown below \u{1F92F}."),rt=u(),w=r("iframe"),it=u(),re=r("p"),va=s("Keep reading to see how to build other kinds of demos with Gradio!"),this.h()},l(e){const o=mo('[data-svelte="svelte-1phssyn"]',document.head);k=i(o,"META",{name:!0,content:!0}),o.forEach(t),Ce=c(e),x=i(e,"H1",{class:!0});var ut=p(x);T=i(ut,"A",{id:!0,class:!0,href:!0});var ja=p(T);fe=i(ja,"SPAN",{});var Ia=p(fe);j(N.$$.fragment,Ia),Ia.forEach(t),ja.forEach(t),wt=c(ut),me=i(ut,"SPAN",{});var Pa=p(me);yt=l(Pa,"Building your first demo"),Pa.forEach(t),ut.forEach(t),Le=c(e),j(A.$$.fragment,e),De=c(e),B=i(e,"P",{});var Ga=p(B);bt=l(Ga,"Let\u2019s start by installing Gradio! Since it is a Python package, simply run:"),Ga.forEach(t),He=c(e),K=i(e,"P",{});var qa=p(K);he=i(qa,"CODE",{});var Ta=p(he);gt=l(Ta,"$ pip install gradio"),Ta.forEach(t),qa.forEach(t),Oe=c(e),Q=i(e,"P",{});var Ca=p(Q);vt=l(Ca,`You can run Gradio anywhere, be it from your favourite Python IDE, to Jupyter notebooks or even in Google Colab \u{1F92F}!
So install Gradio wherever you run Python!`),Ca.forEach(t),Se=c(e),V=i(e,"P",{});var La=p(V);kt=l(La,"Let\u2019s get started with a simple \u201CHello World\u201D example to get familiar with the Gradio syntax:"),La.forEach(t),Ne=c(e),j(M.$$.fragment,e),Ae=c(e),X=i(e,"P",{});var Da=p(X);xt=l(Da,"Let\u2019s walk through the code above:"),Da.forEach(t),Me=c(e),g=i(e,"UL",{});var ie=p(g);b=i(ie,"LI",{});var S=p(b);_t=l(S,"First, we define a function called "),de=i(S,"CODE",{});var Ha=p(de);$t=l(Ha,"greet()"),Ha.forEach(t),Et=l(S,". In this case, it is a simple function that adds \u201CHello\u201D before your name, but it can be "),we=i(S,"EM",{});var Oa=p(we);jt=l(Oa,"any"),Oa.forEach(t),It=l(S," Python function in general. For example, in machine learning applications, this function would "),ye=i(S,"EM",{});var Sa=p(ye);Pt=l(Sa,"call a model to make a prediction"),Sa.forEach(t),Gt=l(S," on an input and return the output."),S.forEach(t),qt=c(ie),m=i(ie,"LI",{});var y=p(m);Tt=l(y,"Then, we create a Gradio "),be=i(y,"CODE",{});var Na=p(be);Ct=l(Na,"Interface"),Na.forEach(t),Lt=l(y," with three arguments, "),ge=i(y,"CODE",{});var Aa=p(ge);Dt=l(Aa,"fn"),Aa.forEach(t),Ht=l(y,", "),ve=i(y,"CODE",{});var Ma=p(ve);Ot=l(Ma,"inputs"),Ma.forEach(t),St=l(y,", and "),ke=i(y,"CODE",{});var Fa=p(ke);Nt=l(Fa,"outputs"),Fa.forEach(t),At=l(y,". These arguments define the prediction function, as well as the "),xe=i(y,"EM",{});var Wa=p(xe);Mt=l(Wa,"type"),Wa.forEach(t),Ft=l(y," of input and output components we would like. In our case, both components are simple text boxes."),y.forEach(t),Wt=c(ie),_=i(ie,"LI",{});var pe=p(_);Yt=l(pe,"We then call the "),_e=i(pe,"CODE",{});var Ya=p(_e);zt=l(Ya,"launch()"),Ya.forEach(t),Jt=l(pe," method on the "),$e=i(pe,"CODE",{});var za=p($e);Rt=l(za,"Interface"),za.forEach(t),Ut=l(pe," that we created."),pe.forEach(t),ie.forEach(t),Fe=c(e),C=i(e,"P",{});var ct=p(C);Bt=l(ct,"If you run this code, the interface below will appear automatically within a Jupyter/Colab notebook, or pop in a browser on "),Ee=i(ct,"STRONG",{});var Ja=p(Ee);F=i(Ja,"A",{href:!0,rel:!0});var Ra=p(F);Kt=l(Ra,"http://localhost:7860"),Ra.forEach(t),Ja.forEach(t),Qt=l(ct," if running from a script."),ct.forEach(t),We=c(e),h=i(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),p(h).forEach(t),Ye=c(e),Z=i(e,"P",{});var Ua=p(Z);Vt=l(Ua,"Try using this GUI right now with your own name or some other input!"),Ua.forEach(t),ze=c(e),L=i(e,"P",{});var ft=p(L);Xt=l(ft,"You\u2019ll notice that in this GUI, Gradio automatically inferred the name of the input parameter ("),je=i(ft,"CODE",{});var Ba=p(je);Zt=l(Ba,"name"),Ba.forEach(t),ea=l(ft,`)
and applied it as a label on top of the textbox. What if you\u2019d like to change that?
Or if you\u2019d like to customize the textbox in some other way? In that case, you can
instantiate a class object representing the input component.`),ft.forEach(t),Je=c(e),ee=i(e,"P",{});var Ka=p(ee);ta=l(Ka,"Take a look at the example below:"),Ka.forEach(t),Re=c(e),j(W.$$.fragment,e),Ue=c(e),d=i(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),p(d).forEach(t),Be=c(e),te=i(e,"P",{});var Qa=p(te);aa=l(Qa,`Here, we\u2019ve created an input textbox with a label, a placeholder, and a set number of lines.
You could do the same for the output textbox, but we\u2019ll leave that for now.`),Qa.forEach(t),Ke=c(e),ae=i(e,"P",{});var Va=p(ae);oa=l(Va,`We\u2019ve seen that with just a few lines of code, Gradio lets you create a simple interface around any function
with any kind of inputs or outputs. In this section, we\u2019ve started with a
simple textbox, but in the next sections, we\u2019ll cover other kinds of inputs and outputs. Let\u2019s now take a look at including some NLP in a Gradio application.`),Va.forEach(t),Qe=c(e),$=i(e,"H2",{class:!0});var mt=p($);D=i(mt,"A",{id:!0,class:!0,href:!0});var Xa=p(D);Ie=i(Xa,"SPAN",{});var Za=p(Ie);j(Y.$$.fragment,Za),Za.forEach(t),Xa.forEach(t),sa=c(mt),Pe=i(mt,"SPAN",{});var eo=p(Pe);la=l(eo,"\u{1F916} Including model predictions"),eo.forEach(t),mt.forEach(t),Ve=c(e),H=i(e,"P",{});var ht=p(H);na=l(ht,"Let\u2019s now build a simple interface that allows you to demo a "),Ge=i(ht,"STRONG",{});var to=p(Ge);ra=l(to,"text-generation"),to.forEach(t),ia=l(ht," model like GPT-2."),ht.forEach(t),Xe=c(e),v=i(e,"P",{});var ue=p(v);pa=l(ue,"We\u2019ll load our model using the "),qe=i(ue,"CODE",{});var ao=p(qe);ua=l(ao,"pipeline()"),ao.forEach(t),ca=l(ue,` function from \u{1F917} Transformers.
If you need a quick refresher, you can go back to `),oe=i(ue,"A",{href:!0});var oo=p(oe);fa=l(oo,"that section in Chapter 1"),oo.forEach(t),ma=l(ue,"."),ue.forEach(t),Ze=c(e),se=i(e,"P",{});var so=p(se);ha=l(so,"First, we define a prediction function that takes in a text prompt and returns the text completion:"),so.forEach(t),et=c(e),j(z.$$.fragment,e),tt=c(e),le=i(e,"P",{});var lo=p(le);da=l(lo,"This function completes prompts that you provide, and you can run it with your own input prompts to see how it works. Here is an example (you might get a different completion):"),lo.forEach(t),at=c(e),j(J.$$.fragment,e),ot=c(e),j(R.$$.fragment,e),st=c(e),O=i(e,"P",{});var dt=p(O);wa=l(dt,"Now that we have a function for generating predictions, we can create and launch an "),Te=i(dt,"CODE",{});var no=p(Te);ya=l(no,"Interface"),no.forEach(t),ba=l(dt," in the same way we did earlier:"),dt.forEach(t),lt=c(e),j(U.$$.fragment,e),nt=c(e),ne=i(e,"P",{});var ro=p(ne);ga=l(ro,"That\u2019s it! You can now use this interface to generate text using the GPT-2 model as shown below \u{1F92F}."),ro.forEach(t),rt=c(e),w=i(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),p(w).forEach(t),it=c(e),re=i(e,"P",{});var io=p(re);va=l(io,"Keep reading to see how to build other kinds of demos with Gradio!"),io.forEach(t),this.h()},h(){f(k,"name","hf:doc:metadata"),f(k,"content",JSON.stringify(go)),f(T,"id","building-your-first-demo"),f(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(T,"href","#building-your-first-demo"),f(x,"class","relative group"),f(F,"href","http://localhost:7860/"),f(F,"rel","nofollow"),ka(h.src,_a="https://hf.space/gradioiframe/course-demos/hello-world/+")||f(h,"src",_a),f(h,"frameborder","0"),f(h,"height","250"),f(h,"title","Gradio app"),f(h,"class","container p-0 flex-grow space-iframe"),f(h,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),f(h,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),ka(d.src,$a="https://hf.space/gradioiframe/course-demos/hello-world-custom/+")||f(d,"src",$a),f(d,"frameborder","0"),f(d,"height","300"),f(d,"title","Gradio app"),f(d,"class","container p-0 flex-grow space-iframe"),f(d,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),f(d,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),f(D,"id","including-model-predictions"),f(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(D,"href","#including-model-predictions"),f($,"class","relative group"),f(oe,"href","/course/chapter1/3#text-generation"),ka(w.src,Ea="https://hf.space/gradioiframe/course-demos/gpt-2/+")||f(w,"src",Ea),f(w,"frameborder","0"),f(w,"height","300"),f(w,"title","Gradio app"),f(w,"class","container p-0 flex-grow space-iframe"),f(w,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),f(w,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads")},m(e,o){a(document.head,k),n(e,Ce,o),n(e,x,o),a(x,T),a(T,fe),I(N,fe,null),a(x,wt),a(x,me),a(me,yt),n(e,Le,o),I(A,e,o),n(e,De,o),n(e,B,o),a(B,bt),n(e,He,o),n(e,K,o),a(K,he),a(he,gt),n(e,Oe,o),n(e,Q,o),a(Q,vt),n(e,Se,o),n(e,V,o),a(V,kt),n(e,Ne,o),I(M,e,o),n(e,Ae,o),n(e,X,o),a(X,xt),n(e,Me,o),n(e,g,o),a(g,b),a(b,_t),a(b,de),a(de,$t),a(b,Et),a(b,we),a(we,jt),a(b,It),a(b,ye),a(ye,Pt),a(b,Gt),a(g,qt),a(g,m),a(m,Tt),a(m,be),a(be,Ct),a(m,Lt),a(m,ge),a(ge,Dt),a(m,Ht),a(m,ve),a(ve,Ot),a(m,St),a(m,ke),a(ke,Nt),a(m,At),a(m,xe),a(xe,Mt),a(m,Ft),a(g,Wt),a(g,_),a(_,Yt),a(_,_e),a(_e,zt),a(_,Jt),a(_,$e),a($e,Rt),a(_,Ut),n(e,Fe,o),n(e,C,o),a(C,Bt),a(C,Ee),a(Ee,F),a(F,Kt),a(C,Qt),n(e,We,o),n(e,h,o),n(e,Ye,o),n(e,Z,o),a(Z,Vt),n(e,ze,o),n(e,L,o),a(L,Xt),a(L,je),a(je,Zt),a(L,ea),n(e,Je,o),n(e,ee,o),a(ee,ta),n(e,Re,o),I(W,e,o),n(e,Ue,o),n(e,d,o),n(e,Be,o),n(e,te,o),a(te,aa),n(e,Ke,o),n(e,ae,o),a(ae,oa),n(e,Qe,o),n(e,$,o),a($,D),a(D,Ie),I(Y,Ie,null),a($,sa),a($,Pe),a(Pe,la),n(e,Ve,o),n(e,H,o),a(H,na),a(H,Ge),a(Ge,ra),a(H,ia),n(e,Xe,o),n(e,v,o),a(v,pa),a(v,qe),a(qe,ua),a(v,ca),a(v,oe),a(oe,fa),a(v,ma),n(e,Ze,o),n(e,se,o),a(se,ha),n(e,et,o),I(z,e,o),n(e,tt,o),n(e,le,o),a(le,da),n(e,at,o),I(J,e,o),n(e,ot,o),I(R,e,o),n(e,st,o),n(e,O,o),a(O,wa),a(O,Te),a(Te,ya),a(O,ba),n(e,lt,o),I(U,e,o),n(e,nt,o),n(e,ne,o),a(ne,ga),n(e,rt,o),n(e,w,o),n(e,it,o),n(e,re,o),a(re,va),pt=!0},p:ho,i(e){pt||(P(N.$$.fragment,e),P(A.$$.fragment,e),P(M.$$.fragment,e),P(W.$$.fragment,e),P(Y.$$.fragment,e),P(z.$$.fragment,e),P(J.$$.fragment,e),P(R.$$.fragment,e),P(U.$$.fragment,e),pt=!0)},o(e){G(N.$$.fragment,e),G(A.$$.fragment,e),G(M.$$.fragment,e),G(W.$$.fragment,e),G(Y.$$.fragment,e),G(z.$$.fragment,e),G(J.$$.fragment,e),G(R.$$.fragment,e),G(U.$$.fragment,e),pt=!1},d(e){t(k),e&&t(Ce),e&&t(x),q(N),e&&t(Le),q(A,e),e&&t(De),e&&t(B),e&&t(He),e&&t(K),e&&t(Oe),e&&t(Q),e&&t(Se),e&&t(V),e&&t(Ne),q(M,e),e&&t(Ae),e&&t(X),e&&t(Me),e&&t(g),e&&t(Fe),e&&t(C),e&&t(We),e&&t(h),e&&t(Ye),e&&t(Z),e&&t(ze),e&&t(L),e&&t(Je),e&&t(ee),e&&t(Re),q(W,e),e&&t(Ue),e&&t(d),e&&t(Be),e&&t(te),e&&t(Ke),e&&t(ae),e&&t(Qe),e&&t($),q(Y),e&&t(Ve),e&&t(H),e&&t(Xe),e&&t(v),e&&t(Ze),e&&t(se),e&&t(et),q(z,e),e&&t(tt),e&&t(le),e&&t(at),q(J,e),e&&t(ot),q(R,e),e&&t(st),e&&t(O),e&&t(lt),q(U,e),e&&t(nt),e&&t(ne),e&&t(rt),e&&t(w),e&&t(it),e&&t(re)}}}const go={local:"building-your-first-demo",sections:[{local:"including-model-predictions",title:"\u{1F916} Including model predictions"}],title:"Building your first demo"};function vo(xa){return wo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Eo extends uo{constructor(k){super();co(this,k,vo,bo,fo,{})}}export{Eo as default,go as metadata};
