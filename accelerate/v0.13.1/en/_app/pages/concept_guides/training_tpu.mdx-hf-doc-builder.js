import{S as yr,i as vr,s as $r,e as s,k as p,w as y,t as o,M as Er,c as i,d as a,m as f,a as l,x as v,h as r,b as m,G as t,g as c,y as $,q as E,o as k,B as T,v as kr}from"../../chunks/vendor-hf-doc-builder.js";import{T as Xt}from"../../chunks/Tip-hf-doc-builder.js";import{I as Yt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as oe}from"../../chunks/CodeBlock-hf-doc-builder.js";function Tr(O){let h,b,d,u,x,_,P,U;return{c(){h=s("p"),b=o("This code snippet is based off the one from the "),d=s("code"),u=o("simple_nlp_example"),x=o(" notebook found "),_=s("a"),P=o("here"),U=o(` with slight
modifications for the sake of simplicity`),this.h()},l(B){h=i(B,"P",{});var j=l(h);b=r(j,"This code snippet is based off the one from the "),d=i(j,"CODE",{});var F=l(d);u=r(F,"simple_nlp_example"),F.forEach(a),x=r(j," notebook found "),_=i(j,"A",{href:!0,rel:!0});var _e=l(_);P=r(_e,"here"),_e.forEach(a),U=r(j,` with slight
modifications for the sake of simplicity`),j.forEach(a),this.h()},h(){m(_,"href","https://github.com/huggingface/notebooks/blob/main/examples/accelerate/simple_nlp_example.ipynb"),m(_,"rel","nofollow")},m(B,j){c(B,h,j),t(h,b),t(h,d),t(d,u),t(h,x),t(h,_),t(_,P),t(h,U)},d(B){B&&a(h)}}}function Pr(O){let h,b,d,u,x;return{c(){h=s("p"),b=o("The "),d=s("code"),u=o("notebook_launcher"),x=o(" will default to 8 processes if \u{1F917} Accelerate has been configured for a TPU")},l(_){h=i(_,"P",{});var P=l(h);b=r(P,"The "),d=i(P,"CODE",{});var U=l(d);u=r(U,"notebook_launcher"),U.forEach(a),x=r(P," will default to 8 processes if \u{1F917} Accelerate has been configured for a TPU"),P.forEach(a)},m(_,P){c(_,h,P),t(h,b),t(h,d),t(d,u),t(h,x)},d(_){_&&a(h)}}}function Ar(O){let h,b;return{c(){h=s("p"),b=o(`The above workaround is only needed when launching a TPU instance from a Jupyter Notebook on a low-resource server such as Google Colaboratory or Kaggle. If
using a script or launching on a much beefier server declaring the model beforehand is not needed.`)},l(d){h=i(d,"P",{});var u=l(h);b=r(u,`The above workaround is only needed when launching a TPU instance from a Jupyter Notebook on a low-resource server such as Google Colaboratory or Kaggle. If
using a script or launching on a much beefier server declaring the model beforehand is not needed.`),u.forEach(a)},m(d,u){c(d,h,u),t(h,b)},d(d){d&&a(h)}}}function zr(O){let h,b;return{c(){h=s("p"),b=o("Just because the memory is allocated does not mean it will be used or that the batch size will increase when going back to your training dataloader.")},l(d){h=i(d,"P",{});var u=l(h);b=r(u,"Just because the memory is allocated does not mean it will be used or that the batch size will increase when going back to your training dataloader."),u.forEach(a)},m(d,u){c(d,h,u),t(h,b)},d(d){d&&a(h)}}}function xr(O){let h,b,d,u,x,_,P,U,B,j,F,_e,ft,W,R,Ue,re,Qt,Ce,Zt,dt,C,ea,be,ta,aa,ge,oa,ra,we,na,sa,ut,A,ia,qe,la,ca,Oe,ha,pa,Se,fa,da,De,ua,ma,mt,S,_a,Ie,ba,ga,Ge,wa,ya,_t,V,va,ye,$a,Ea,bt,H,gt,ne,wt,se,yt,K,vt,X,ka,Ne,Ta,Pa,$t,ie,Et,D,Aa,Me,za,xa,Be,ja,Ua,kt,le,Tt,ce,Pt,ve,Ca,At,he,zt,Y,xt,J,Q,Fe,pe,qa,We,Oa,jt,I,Sa,$e,Da,Ia,Je,Ga,Na,Ut,Z,Ma,Le,Ba,Fa,Ct,G,Wa,Re,Ja,La,Ve,Ra,Va,qt,fe,Ot,w,Ha,He,Ka,Xa,Ke,Ya,Qa,Xe,Za,eo,Ye,to,ao,Qe,oo,ro,St,g,no,Ze,so,io,et,lo,co,tt,ho,po,at,fo,uo,ot,mo,_o,rt,bo,go,Dt,N,wo,nt,yo,vo,st,$o,Eo,It,de,Gt,Ee,ko,Nt,L,ee,it,ue,To,lt,Po,Mt,ke,Ao,Bt,Te,zo,Ft,te,Wt;return _=new Yt({}),re=new Yt({}),H=new Xt({props:{$$slots:{default:[Tr]},$$scope:{ctx:O}}}),ne=new oe({props:{code:`def training_function():
    # Initialize accelerator
    accelerator = Accelerator()
    model = AutoModelForSequenceClassification.from_pretrained("bert-base-cased", num_labels=2)
    train_dataloader, eval_dataloader = create_dataloaders(
        train_batch_size=hyperparameters["train_batch_size"], eval_batch_size=hyperparameters["eval_batch_size"]
    )

    # Instantiate optimizer
    optimizer = AdamW(params=model.parameters(), lr=hyperparameters["learning_rate"])

    # Prepare everything
    # There is no specific order to remember, we just need to unpack the objects in the same order we gave them to the
    # prepare method.
    model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
        model, optimizer, train_dataloader, eval_dataloader
    )

    num_epochs = hyperparameters["num_epochs"]
    # Now we train the model
    for epoch in range(num_epochs):
        model.train()
        for step, batch in enumerate(train_dataloader):
            outputs = model(**batch)
            loss = outputs.loss
            accelerator.backward(loss)

            optimizer.step()
            optimizer.zero_grad()`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">training_function</span>():
    <span class="hljs-comment"># Initialize accelerator</span>
    accelerator = Accelerator()
    model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, num_labels=<span class="hljs-number">2</span>)
    train_dataloader, eval_dataloader = create_dataloaders(
        train_batch_size=hyperparameters[<span class="hljs-string">&quot;train_batch_size&quot;</span>], eval_batch_size=hyperparameters[<span class="hljs-string">&quot;eval_batch_size&quot;</span>]
    )

    <span class="hljs-comment"># Instantiate optimizer</span>
    optimizer = AdamW(params=model.parameters(), lr=hyperparameters[<span class="hljs-string">&quot;learning_rate&quot;</span>])

    <span class="hljs-comment"># Prepare everything</span>
    <span class="hljs-comment"># There is no specific order to remember, we just need to unpack the objects in the same order we gave them to the</span>
    <span class="hljs-comment"># prepare method.</span>
    model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
        model, optimizer, train_dataloader, eval_dataloader
    )

    num_epochs = hyperparameters[<span class="hljs-string">&quot;num_epochs&quot;</span>]
    <span class="hljs-comment"># Now we train the model</span>
    <span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(num_epochs):
        model.train()
        <span class="hljs-keyword">for</span> step, batch <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(train_dataloader):
            outputs = model(**batch)
            loss = outputs.loss
            accelerator.backward(loss)

            optimizer.step()
            optimizer.zero_grad()`}}),se=new oe({props:{code:`from accelerate import notebook_launcher

notebook_launcher(training_function)`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> notebook_launcher

notebook_launcher(training_function)`}}),K=new Xt({props:{$$slots:{default:[Pr]},$$scope:{ctx:O}}}),ie=new oe({props:{code:"ProcessExitedException: process 0 terminated with signal SIGSEGV",highlighted:'<span class="hljs-attribute">ProcessExitedException</span>: process <span class="hljs-number">0</span> terminated <span class="hljs-keyword">with</span> <span class="hljs-keyword">signal</span><span class="hljs-string"> SIGSEGV</span>'}}),le=new oe({props:{code:`# In another Jupyter cell
model = AutoModelForSequenceClassification.from_pretrained("bert-base-cased", num_labels=2)`,highlighted:`<span class="hljs-comment"># In another Jupyter cell</span>
model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),ce=new oe({props:{code:`+ def training_function(model):
      # Initialize accelerator
      accelerator = Accelerator()
-     model = AutoModelForSequenceClassification.from_pretrained("bert-base-cased", num_labels=2)
      train_dataloader, eval_dataloader = create_dataloaders(
          train_batch_size=hyperparameters["train_batch_size"], eval_batch_size=hyperparameters["eval_batch_size"]
      )
  ...`,highlighted:`<span class="hljs-addition">+ def training_function(model):</span>
      # Initialize accelerator
      accelerator = Accelerator()
<span class="hljs-deletion">-     model = AutoModelForSequenceClassification.from_pretrained(&quot;bert-base-cased&quot;, num_labels=2)</span>
      train_dataloader, eval_dataloader = create_dataloaders(
          train_batch_size=hyperparameters[&quot;train_batch_size&quot;], eval_batch_size=hyperparameters[&quot;eval_batch_size&quot;]
      )
  ...`}}),he=new oe({props:{code:`  from accelerate import notebook_launcher
- notebook_launcher(training_function)
+ notebook_launcher(training_function, (model,))`,highlighted:`  from accelerate import notebook_launcher
<span class="hljs-deletion">- notebook_launcher(training_function)</span>
<span class="hljs-addition">+ notebook_launcher(training_function, (model,))</span>`}}),Y=new Xt({props:{$$slots:{default:[Ar]},$$scope:{ctx:O}}}),pe=new Yt({}),fe=new oe({props:{code:'accelerator = Accelerator(mixed_precision="bf16")',highlighted:'accelerator = Accelerator(mixed_precision=<span class="hljs-string">&quot;bf16&quot;</span>)'}}),de=new oe({props:{code:'accelerator = Accelerator(mixed_precision="bf16", downcast_bf16=True)',highlighted:'accelerator = Accelerator(mixed_precision=<span class="hljs-string">&quot;bf16&quot;</span>, downcast_bf16=<span class="hljs-literal">True</span>)'}}),ue=new Yt({}),te=new Xt({props:{$$slots:{default:[zr]},$$scope:{ctx:O}}}),{c(){h=s("meta"),b=p(),d=s("h1"),u=s("a"),x=s("span"),y(_.$$.fragment),P=p(),U=s("span"),B=o("Training on TPUs with \u{1F917} Accelerate"),j=p(),F=s("p"),_e=o(`Training on TPUs can be slightly different than training on multi-gpu, even with \u{1F917} Accelerate. This guide aims to show you
where you should be careful and why, as well as the best practices in general.`),ft=p(),W=s("h2"),R=s("a"),Ue=s("span"),y(re.$$.fragment),Qt=p(),Ce=s("span"),Zt=o("Training in a Notebook"),dt=p(),C=s("p"),ea=o("The main carepoint when training on TPUs comes from the "),be=s("a"),ta=o("notebook_launcher()"),aa=o(". As mentioned in the "),ge=s("a"),oa=o("notebook tutorial"),ra=o(`, you need to
restructure your training code into a function that can get passed to the `),we=s("a"),na=o("notebook_launcher()"),sa=o(" function and be careful about not declaring any tensors on the GPU."),ut=p(),A=s("p"),ia=o("While on a TPU that last part is not as important, a critical part to understand is that when you launch code from a notebook you do so through a process called "),qe=s("strong"),la=o("forking"),ca=o(`.
When launching from the command-line, you perform `),Oe=s("strong"),ha=o("spawning"),pa=o(", where a python process is not currently running and you "),Se=s("em"),fa=o("spawn"),da=o(` a new process in. Since your Jupyter notebook is already
utilizing a python process, you need to `),De=s("em"),ua=o("fork"),ma=o(" a new process from it to launch your code."),mt=p(),S=s("p"),_a=o("Where this becomes important is in regards to declaring your model. On forked TPU processes, it is recommended that you instantiate your model "),Ie=s("em"),ba=o("once"),ga=o(` and pass this into your
training function. This is different than training on GPUs where you create `),Ge=s("code"),wa=o("n"),ya=o(` models that have their gradients synced and back-propagated at certain moments. Instead one
model instance is shared between all the nodes and it is passed back and forth. This is important especially when training on low-resource TPUs such as those provided in Kaggle kernels or
on Google Colaboratory.`),_t=p(),V=s("p"),va=o("Below is an example of a training function passed to the "),ye=s("a"),$a=o("notebook_launcher()"),Ea=o(" if training on CPUs or GPUs:"),bt=p(),y(H.$$.fragment),gt=p(),y(ne.$$.fragment),wt=p(),y(se.$$.fragment),yt=p(),y(K.$$.fragment),vt=p(),X=s("p"),ka=o("If you use this example and declare the model "),Ne=s("em"),Ta=o("inside"),Pa=o(` the training loop, then on a low-resource system you will potentially see an error
like:`),$t=p(),y(ie.$$.fragment),Et=p(),D=s("p"),Aa=o("This error is "),Me=s("em"),za=o("extremely"),xa=o(` cryptic but the basic explanation is you ran out of system RAM. You can avoid this entirely by reconfiguring the training function to
accept a single `),Be=s("code"),ja=o("model"),Ua=o(" argument, and declare it in an outside cell:"),kt=p(),y(le.$$.fragment),Tt=p(),y(ce.$$.fragment),Pt=p(),ve=s("p"),Ca=o("And finally calling the training function with:"),At=p(),y(he.$$.fragment),zt=p(),y(Y.$$.fragment),xt=p(),J=s("h2"),Q=s("a"),Fe=s("span"),y(pe.$$.fragment),qa=p(),We=s("span"),Oa=o("Mixed Precision and Global Variables"),jt=p(),I=s("p"),Sa=o("As mentioned in the "),$e=s("a"),Da=o("mixed precision tutorial"),Ia=o(`, \u{1F917} Accelerate supports fp16 and bf16, both of which can be used on TPUs.
That being said, ideally `),Je=s("code"),Ga=o("bf16"),Na=o(" should be utilized as it is extremely efficient to use."),Ut=p(),Z=s("p"),Ma=o("There are two \u201Clayers\u201D when using "),Le=s("code"),Ba=o("bf16"),Fa=o(" and \u{1F917} Accelerate on TPUs, at the base level and at the operation level."),Ct=p(),G=s("p"),Wa=o("At the base level, this is enabled when passing "),Re=s("code"),Ja=o('mixed_precision="bf16"'),La=o(" to "),Ve=s("code"),Ra=o("Accelerator"),Va=o(", such as:"),qt=p(),y(fe.$$.fragment),Ot=p(),w=s("p"),Ha=o("By default this will cast "),He=s("code"),Ka=o("torch.float"),Xa=o(" and "),Ke=s("code"),Ya=o("torch.double"),Qa=o(" to "),Xe=s("code"),Za=o("bfloat16"),eo=o(` on TPUs.
The specific configuration being set is an environmental variable of `),Ye=s("code"),to=o("XLA_USE_BF16"),ao=o(" is set to "),Qe=s("code"),oo=o("1"),ro=o("."),St=p(),g=s("p"),no=o("There is a further configuration you can perform which is setting the "),Ze=s("code"),so=o("XLA_DOWNCAST_BF16"),io=o(" environmental variable. If set to "),et=s("code"),lo=o("1"),co=o(`, then
`),tt=s("code"),ho=o("torch.float"),po=o(" is "),at=s("code"),fo=o("bfloat16"),uo=o(" and "),ot=s("code"),mo=o("torch.double"),_o=o(" is "),rt=s("code"),bo=o("float32"),go=o("."),Dt=p(),N=s("p"),wo=o("This is performed in the "),nt=s("code"),yo=o("Accelerator"),vo=o(" object when passing "),st=s("code"),$o=o("downcast_bf16=True"),Eo=o(":"),It=p(),y(de.$$.fragment),Gt=p(),Ee=s("p"),ko=o("Using downcasting instead of bf16 everywhere is good for when you are trying to calculate metrics, log values, and more where raw bf16 tensors would be unusable."),Nt=p(),L=s("h2"),ee=s("a"),it=s("span"),y(ue.$$.fragment),To=p(),lt=s("span"),Po=o("Training Times on TPUs"),Mt=p(),ke=s("p"),Ao=o(`As you launch your script, you may notice that training seems exceptionally slow at first. This is because TPUs
first run through a few batches of data to see how much memory to allocate before finally utilizing this configured
memory allocation extremely efficiently.`),Bt=p(),Te=s("p"),zo=o(`If you notice that your evaluation code to calculate the metrics of your model takes longer due to a larger batch size being used,
it is recommended to keep the batch size the same as the training data if it is too slow. Otherwise the memory will reallocate to this
new batch size after the first few iterations.`),Ft=p(),y(te.$$.fragment),this.h()},l(e){const n=Er('[data-svelte="svelte-1phssyn"]',document.head);h=i(n,"META",{name:!0,content:!0}),n.forEach(a),b=f(e),d=i(e,"H1",{class:!0});var me=l(d);u=i(me,"A",{id:!0,class:!0,href:!0});var ct=l(u);x=i(ct,"SPAN",{});var ht=l(x);v(_.$$.fragment,ht),ht.forEach(a),ct.forEach(a),P=f(me),U=i(me,"SPAN",{});var pt=l(U);B=r(pt,"Training on TPUs with \u{1F917} Accelerate"),pt.forEach(a),me.forEach(a),j=f(e),F=i(e,"P",{});var xo=l(F);_e=r(xo,`Training on TPUs can be slightly different than training on multi-gpu, even with \u{1F917} Accelerate. This guide aims to show you
where you should be careful and why, as well as the best practices in general.`),xo.forEach(a),ft=f(e),W=i(e,"H2",{class:!0});var Jt=l(W);R=i(Jt,"A",{id:!0,class:!0,href:!0});var jo=l(R);Ue=i(jo,"SPAN",{});var Uo=l(Ue);v(re.$$.fragment,Uo),Uo.forEach(a),jo.forEach(a),Qt=f(Jt),Ce=i(Jt,"SPAN",{});var Co=l(Ce);Zt=r(Co,"Training in a Notebook"),Co.forEach(a),Jt.forEach(a),dt=f(e),C=i(e,"P",{});var ae=l(C);ea=r(ae,"The main carepoint when training on TPUs comes from the "),be=i(ae,"A",{href:!0});var qo=l(be);ta=r(qo,"notebook_launcher()"),qo.forEach(a),aa=r(ae,". As mentioned in the "),ge=i(ae,"A",{href:!0});var Oo=l(ge);oa=r(Oo,"notebook tutorial"),Oo.forEach(a),ra=r(ae,`, you need to
restructure your training code into a function that can get passed to the `),we=i(ae,"A",{href:!0});var So=l(we);na=r(So,"notebook_launcher()"),So.forEach(a),sa=r(ae," function and be careful about not declaring any tensors on the GPU."),ae.forEach(a),ut=f(e),A=i(e,"P",{});var M=l(A);ia=r(M,"While on a TPU that last part is not as important, a critical part to understand is that when you launch code from a notebook you do so through a process called "),qe=i(M,"STRONG",{});var Do=l(qe);la=r(Do,"forking"),Do.forEach(a),ca=r(M,`.
When launching from the command-line, you perform `),Oe=i(M,"STRONG",{});var Io=l(Oe);ha=r(Io,"spawning"),Io.forEach(a),pa=r(M,", where a python process is not currently running and you "),Se=i(M,"EM",{});var Go=l(Se);fa=r(Go,"spawn"),Go.forEach(a),da=r(M,` a new process in. Since your Jupyter notebook is already
utilizing a python process, you need to `),De=i(M,"EM",{});var No=l(De);ua=r(No,"fork"),No.forEach(a),ma=r(M," a new process from it to launch your code."),M.forEach(a),mt=f(e),S=i(e,"P",{});var Pe=l(S);_a=r(Pe,"Where this becomes important is in regards to declaring your model. On forked TPU processes, it is recommended that you instantiate your model "),Ie=i(Pe,"EM",{});var Mo=l(Ie);ba=r(Mo,"once"),Mo.forEach(a),ga=r(Pe,` and pass this into your
training function. This is different than training on GPUs where you create `),Ge=i(Pe,"CODE",{});var Bo=l(Ge);wa=r(Bo,"n"),Bo.forEach(a),ya=r(Pe,` models that have their gradients synced and back-propagated at certain moments. Instead one
model instance is shared between all the nodes and it is passed back and forth. This is important especially when training on low-resource TPUs such as those provided in Kaggle kernels or
on Google Colaboratory.`),Pe.forEach(a),_t=f(e),V=i(e,"P",{});var Lt=l(V);va=r(Lt,"Below is an example of a training function passed to the "),ye=i(Lt,"A",{href:!0});var Fo=l(ye);$a=r(Fo,"notebook_launcher()"),Fo.forEach(a),Ea=r(Lt," if training on CPUs or GPUs:"),Lt.forEach(a),bt=f(e),v(H.$$.fragment,e),gt=f(e),v(ne.$$.fragment,e),wt=f(e),v(se.$$.fragment,e),yt=f(e),v(K.$$.fragment,e),vt=f(e),X=i(e,"P",{});var Rt=l(X);ka=r(Rt,"If you use this example and declare the model "),Ne=i(Rt,"EM",{});var Wo=l(Ne);Ta=r(Wo,"inside"),Wo.forEach(a),Pa=r(Rt,` the training loop, then on a low-resource system you will potentially see an error
like:`),Rt.forEach(a),$t=f(e),v(ie.$$.fragment,e),Et=f(e),D=i(e,"P",{});var Ae=l(D);Aa=r(Ae,"This error is "),Me=i(Ae,"EM",{});var Jo=l(Me);za=r(Jo,"extremely"),Jo.forEach(a),xa=r(Ae,` cryptic but the basic explanation is you ran out of system RAM. You can avoid this entirely by reconfiguring the training function to
accept a single `),Be=i(Ae,"CODE",{});var Lo=l(Be);ja=r(Lo,"model"),Lo.forEach(a),Ua=r(Ae," argument, and declare it in an outside cell:"),Ae.forEach(a),kt=f(e),v(le.$$.fragment,e),Tt=f(e),v(ce.$$.fragment,e),Pt=f(e),ve=i(e,"P",{});var Ro=l(ve);Ca=r(Ro,"And finally calling the training function with:"),Ro.forEach(a),At=f(e),v(he.$$.fragment,e),zt=f(e),v(Y.$$.fragment,e),xt=f(e),J=i(e,"H2",{class:!0});var Vt=l(J);Q=i(Vt,"A",{id:!0,class:!0,href:!0});var Vo=l(Q);Fe=i(Vo,"SPAN",{});var Ho=l(Fe);v(pe.$$.fragment,Ho),Ho.forEach(a),Vo.forEach(a),qa=f(Vt),We=i(Vt,"SPAN",{});var Ko=l(We);Oa=r(Ko,"Mixed Precision and Global Variables"),Ko.forEach(a),Vt.forEach(a),jt=f(e),I=i(e,"P",{});var ze=l(I);Sa=r(ze,"As mentioned in the "),$e=i(ze,"A",{href:!0});var Xo=l($e);Da=r(Xo,"mixed precision tutorial"),Xo.forEach(a),Ia=r(ze,`, \u{1F917} Accelerate supports fp16 and bf16, both of which can be used on TPUs.
That being said, ideally `),Je=i(ze,"CODE",{});var Yo=l(Je);Ga=r(Yo,"bf16"),Yo.forEach(a),Na=r(ze," should be utilized as it is extremely efficient to use."),ze.forEach(a),Ut=f(e),Z=i(e,"P",{});var Ht=l(Z);Ma=r(Ht,"There are two \u201Clayers\u201D when using "),Le=i(Ht,"CODE",{});var Qo=l(Le);Ba=r(Qo,"bf16"),Qo.forEach(a),Fa=r(Ht," and \u{1F917} Accelerate on TPUs, at the base level and at the operation level."),Ht.forEach(a),Ct=f(e),G=i(e,"P",{});var xe=l(G);Wa=r(xe,"At the base level, this is enabled when passing "),Re=i(xe,"CODE",{});var Zo=l(Re);Ja=r(Zo,'mixed_precision="bf16"'),Zo.forEach(a),La=r(xe," to "),Ve=i(xe,"CODE",{});var er=l(Ve);Ra=r(er,"Accelerator"),er.forEach(a),Va=r(xe,", such as:"),xe.forEach(a),qt=f(e),v(fe.$$.fragment,e),Ot=f(e),w=i(e,"P",{});var q=l(w);Ha=r(q,"By default this will cast "),He=i(q,"CODE",{});var tr=l(He);Ka=r(tr,"torch.float"),tr.forEach(a),Xa=r(q," and "),Ke=i(q,"CODE",{});var ar=l(Ke);Ya=r(ar,"torch.double"),ar.forEach(a),Qa=r(q," to "),Xe=i(q,"CODE",{});var or=l(Xe);Za=r(or,"bfloat16"),or.forEach(a),eo=r(q,` on TPUs.
The specific configuration being set is an environmental variable of `),Ye=i(q,"CODE",{});var rr=l(Ye);to=r(rr,"XLA_USE_BF16"),rr.forEach(a),ao=r(q," is set to "),Qe=i(q,"CODE",{});var nr=l(Qe);oo=r(nr,"1"),nr.forEach(a),ro=r(q,"."),q.forEach(a),St=f(e),g=i(e,"P",{});var z=l(g);no=r(z,"There is a further configuration you can perform which is setting the "),Ze=i(z,"CODE",{});var sr=l(Ze);so=r(sr,"XLA_DOWNCAST_BF16"),sr.forEach(a),io=r(z," environmental variable. If set to "),et=i(z,"CODE",{});var ir=l(et);lo=r(ir,"1"),ir.forEach(a),co=r(z,`, then
`),tt=i(z,"CODE",{});var lr=l(tt);ho=r(lr,"torch.float"),lr.forEach(a),po=r(z," is "),at=i(z,"CODE",{});var cr=l(at);fo=r(cr,"bfloat16"),cr.forEach(a),uo=r(z," and "),ot=i(z,"CODE",{});var hr=l(ot);mo=r(hr,"torch.double"),hr.forEach(a),_o=r(z," is "),rt=i(z,"CODE",{});var pr=l(rt);bo=r(pr,"float32"),pr.forEach(a),go=r(z,"."),z.forEach(a),Dt=f(e),N=i(e,"P",{});var je=l(N);wo=r(je,"This is performed in the "),nt=i(je,"CODE",{});var fr=l(nt);yo=r(fr,"Accelerator"),fr.forEach(a),vo=r(je," object when passing "),st=i(je,"CODE",{});var dr=l(st);$o=r(dr,"downcast_bf16=True"),dr.forEach(a),Eo=r(je,":"),je.forEach(a),It=f(e),v(de.$$.fragment,e),Gt=f(e),Ee=i(e,"P",{});var ur=l(Ee);ko=r(ur,"Using downcasting instead of bf16 everywhere is good for when you are trying to calculate metrics, log values, and more where raw bf16 tensors would be unusable."),ur.forEach(a),Nt=f(e),L=i(e,"H2",{class:!0});var Kt=l(L);ee=i(Kt,"A",{id:!0,class:!0,href:!0});var mr=l(ee);it=i(mr,"SPAN",{});var _r=l(it);v(ue.$$.fragment,_r),_r.forEach(a),mr.forEach(a),To=f(Kt),lt=i(Kt,"SPAN",{});var br=l(lt);Po=r(br,"Training Times on TPUs"),br.forEach(a),Kt.forEach(a),Mt=f(e),ke=i(e,"P",{});var gr=l(ke);Ao=r(gr,`As you launch your script, you may notice that training seems exceptionally slow at first. This is because TPUs
first run through a few batches of data to see how much memory to allocate before finally utilizing this configured
memory allocation extremely efficiently.`),gr.forEach(a),Bt=f(e),Te=i(e,"P",{});var wr=l(Te);zo=r(wr,`If you notice that your evaluation code to calculate the metrics of your model takes longer due to a larger batch size being used,
it is recommended to keep the batch size the same as the training data if it is too slow. Otherwise the memory will reallocate to this
new batch size after the first few iterations.`),wr.forEach(a),Ft=f(e),v(te.$$.fragment,e),this.h()},h(){m(h,"name","hf:doc:metadata"),m(h,"content",JSON.stringify(jr)),m(u,"id","training-on-tpus-with-accelerate"),m(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(u,"href","#training-on-tpus-with-accelerate"),m(d,"class","relative group"),m(R,"id","training-in-a-notebook"),m(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(R,"href","#training-in-a-notebook"),m(W,"class","relative group"),m(be,"href","/docs/accelerate/v0.13.1/en/package_reference/launchers#accelerate.notebook_launcher"),m(ge,"href","../usage_guides/notebook"),m(we,"href","/docs/accelerate/v0.13.1/en/package_reference/launchers#accelerate.notebook_launcher"),m(ye,"href","/docs/accelerate/v0.13.1/en/package_reference/launchers#accelerate.notebook_launcher"),m(Q,"id","mixed-precision-and-global-variables"),m(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Q,"href","#mixed-precision-and-global-variables"),m(J,"class","relative group"),m($e,"href","../usage_guides/mixed_precision"),m(ee,"id","training-times-on-tpus"),m(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ee,"href","#training-times-on-tpus"),m(L,"class","relative group")},m(e,n){t(document.head,h),c(e,b,n),c(e,d,n),t(d,u),t(u,x),$(_,x,null),t(d,P),t(d,U),t(U,B),c(e,j,n),c(e,F,n),t(F,_e),c(e,ft,n),c(e,W,n),t(W,R),t(R,Ue),$(re,Ue,null),t(W,Qt),t(W,Ce),t(Ce,Zt),c(e,dt,n),c(e,C,n),t(C,ea),t(C,be),t(be,ta),t(C,aa),t(C,ge),t(ge,oa),t(C,ra),t(C,we),t(we,na),t(C,sa),c(e,ut,n),c(e,A,n),t(A,ia),t(A,qe),t(qe,la),t(A,ca),t(A,Oe),t(Oe,ha),t(A,pa),t(A,Se),t(Se,fa),t(A,da),t(A,De),t(De,ua),t(A,ma),c(e,mt,n),c(e,S,n),t(S,_a),t(S,Ie),t(Ie,ba),t(S,ga),t(S,Ge),t(Ge,wa),t(S,ya),c(e,_t,n),c(e,V,n),t(V,va),t(V,ye),t(ye,$a),t(V,Ea),c(e,bt,n),$(H,e,n),c(e,gt,n),$(ne,e,n),c(e,wt,n),$(se,e,n),c(e,yt,n),$(K,e,n),c(e,vt,n),c(e,X,n),t(X,ka),t(X,Ne),t(Ne,Ta),t(X,Pa),c(e,$t,n),$(ie,e,n),c(e,Et,n),c(e,D,n),t(D,Aa),t(D,Me),t(Me,za),t(D,xa),t(D,Be),t(Be,ja),t(D,Ua),c(e,kt,n),$(le,e,n),c(e,Tt,n),$(ce,e,n),c(e,Pt,n),c(e,ve,n),t(ve,Ca),c(e,At,n),$(he,e,n),c(e,zt,n),$(Y,e,n),c(e,xt,n),c(e,J,n),t(J,Q),t(Q,Fe),$(pe,Fe,null),t(J,qa),t(J,We),t(We,Oa),c(e,jt,n),c(e,I,n),t(I,Sa),t(I,$e),t($e,Da),t(I,Ia),t(I,Je),t(Je,Ga),t(I,Na),c(e,Ut,n),c(e,Z,n),t(Z,Ma),t(Z,Le),t(Le,Ba),t(Z,Fa),c(e,Ct,n),c(e,G,n),t(G,Wa),t(G,Re),t(Re,Ja),t(G,La),t(G,Ve),t(Ve,Ra),t(G,Va),c(e,qt,n),$(fe,e,n),c(e,Ot,n),c(e,w,n),t(w,Ha),t(w,He),t(He,Ka),t(w,Xa),t(w,Ke),t(Ke,Ya),t(w,Qa),t(w,Xe),t(Xe,Za),t(w,eo),t(w,Ye),t(Ye,to),t(w,ao),t(w,Qe),t(Qe,oo),t(w,ro),c(e,St,n),c(e,g,n),t(g,no),t(g,Ze),t(Ze,so),t(g,io),t(g,et),t(et,lo),t(g,co),t(g,tt),t(tt,ho),t(g,po),t(g,at),t(at,fo),t(g,uo),t(g,ot),t(ot,mo),t(g,_o),t(g,rt),t(rt,bo),t(g,go),c(e,Dt,n),c(e,N,n),t(N,wo),t(N,nt),t(nt,yo),t(N,vo),t(N,st),t(st,$o),t(N,Eo),c(e,It,n),$(de,e,n),c(e,Gt,n),c(e,Ee,n),t(Ee,ko),c(e,Nt,n),c(e,L,n),t(L,ee),t(ee,it),$(ue,it,null),t(L,To),t(L,lt),t(lt,Po),c(e,Mt,n),c(e,ke,n),t(ke,Ao),c(e,Bt,n),c(e,Te,n),t(Te,zo),c(e,Ft,n),$(te,e,n),Wt=!0},p(e,[n]){const me={};n&2&&(me.$$scope={dirty:n,ctx:e}),H.$set(me);const ct={};n&2&&(ct.$$scope={dirty:n,ctx:e}),K.$set(ct);const ht={};n&2&&(ht.$$scope={dirty:n,ctx:e}),Y.$set(ht);const pt={};n&2&&(pt.$$scope={dirty:n,ctx:e}),te.$set(pt)},i(e){Wt||(E(_.$$.fragment,e),E(re.$$.fragment,e),E(H.$$.fragment,e),E(ne.$$.fragment,e),E(se.$$.fragment,e),E(K.$$.fragment,e),E(ie.$$.fragment,e),E(le.$$.fragment,e),E(ce.$$.fragment,e),E(he.$$.fragment,e),E(Y.$$.fragment,e),E(pe.$$.fragment,e),E(fe.$$.fragment,e),E(de.$$.fragment,e),E(ue.$$.fragment,e),E(te.$$.fragment,e),Wt=!0)},o(e){k(_.$$.fragment,e),k(re.$$.fragment,e),k(H.$$.fragment,e),k(ne.$$.fragment,e),k(se.$$.fragment,e),k(K.$$.fragment,e),k(ie.$$.fragment,e),k(le.$$.fragment,e),k(ce.$$.fragment,e),k(he.$$.fragment,e),k(Y.$$.fragment,e),k(pe.$$.fragment,e),k(fe.$$.fragment,e),k(de.$$.fragment,e),k(ue.$$.fragment,e),k(te.$$.fragment,e),Wt=!1},d(e){a(h),e&&a(b),e&&a(d),T(_),e&&a(j),e&&a(F),e&&a(ft),e&&a(W),T(re),e&&a(dt),e&&a(C),e&&a(ut),e&&a(A),e&&a(mt),e&&a(S),e&&a(_t),e&&a(V),e&&a(bt),T(H,e),e&&a(gt),T(ne,e),e&&a(wt),T(se,e),e&&a(yt),T(K,e),e&&a(vt),e&&a(X),e&&a($t),T(ie,e),e&&a(Et),e&&a(D),e&&a(kt),T(le,e),e&&a(Tt),T(ce,e),e&&a(Pt),e&&a(ve),e&&a(At),T(he,e),e&&a(zt),T(Y,e),e&&a(xt),e&&a(J),T(pe),e&&a(jt),e&&a(I),e&&a(Ut),e&&a(Z),e&&a(Ct),e&&a(G),e&&a(qt),T(fe,e),e&&a(Ot),e&&a(w),e&&a(St),e&&a(g),e&&a(Dt),e&&a(N),e&&a(It),T(de,e),e&&a(Gt),e&&a(Ee),e&&a(Nt),e&&a(L),T(ue),e&&a(Mt),e&&a(ke),e&&a(Bt),e&&a(Te),e&&a(Ft),T(te,e)}}}const jr={local:"training-on-tpus-with-accelerate",sections:[{local:"training-in-a-notebook",title:"Training in a Notebook"},{local:"mixed-precision-and-global-variables",title:"Mixed Precision and Global Variables "},{local:"training-times-on-tpus",title:"Training Times on TPUs"}],title:"Training on TPUs with \u{1F917} Accelerate"};function Ur(O){return kr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Dr extends yr{constructor(h){super();vr(this,h,Ur,xr,$r,{})}}export{Dr as default,jr as metadata};
