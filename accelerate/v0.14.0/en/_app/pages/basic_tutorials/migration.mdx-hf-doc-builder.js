import{S as Br,i as qr,s as Ir,e as o,k as d,w as $,t as l,M as Lr,c as i,d as t,m as f,a as s,x as w,h as n,b as p,G as r,g as c,y as _,q as y,o as b,B as A,v as Wr}from"../../chunks/vendor-hf-doc-builder.js";import{T as Hr}from"../../chunks/Tip-hf-doc-builder.js";import{I as $e}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as xe}from"../../chunks/CodeBlock-hf-doc-builder.js";function Fr(we){let h,T,u,g,P,v,E,z,O,Y,N,D,G,j,k,M,x;return{c(){h=o("p"),T=l("We are under the presumption that "),u=o("code"),g=l("training_dataloader"),P=l(", "),v=o("code"),E=l("model"),z=l(", "),O=o("code"),Y=l("optimizer"),N=l(", "),D=o("code"),G=l("scheduler"),j=l(", and "),k=o("code"),M=l("loss_function"),x=l(" have been defined beforehand.")},l(H){h=i(H,"P",{});var m=s(h);T=n(m,"We are under the presumption that "),u=i(m,"CODE",{});var _e=s(u);g=n(_e,"training_dataloader"),_e.forEach(t),P=n(m,", "),v=i(m,"CODE",{});var ae=s(v);E=n(ae,"model"),ae.forEach(t),z=n(m,", "),O=i(m,"CODE",{});var B=s(O);Y=n(B,"optimizer"),B.forEach(t),N=n(m,", "),D=i(m,"CODE",{});var ye=s(D);G=n(ye,"scheduler"),ye.forEach(t),j=n(m,", and "),k=i(m,"CODE",{});var oe=s(k);M=n(oe,"loss_function"),oe.forEach(t),x=n(m," have been defined beforehand."),m.forEach(t)},m(H,m){c(H,h,m),r(h,T),r(h,u),r(u,g),r(h,P),r(h,v),r(v,E),r(h,z),r(h,O),r(O,Y),r(h,N),r(h,D),r(D,G),r(h,j),r(h,k),r(k,M),r(h,x)},d(H){H&&t(h)}}}function Yr(we){let h,T,u,g,P;return{c(){h=o("p"),T=l("Accelerate will only prepare objects that inherit from their respective PyTorch classes (such as "),u=o("code"),g=l("torch.optim.Optimizer"),P=l(").")},l(v){h=i(v,"P",{});var E=s(h);T=n(E,"Accelerate will only prepare objects that inherit from their respective PyTorch classes (such as "),u=i(E,"CODE",{});var z=s(u);g=n(z,"torch.optim.Optimizer"),z.forEach(t),P=n(E,")."),E.forEach(t)},m(v,E){c(v,h,E),r(h,T),r(h,u),r(u,g),r(h,P)},d(v){v&&t(h)}}}function Gr(we){let h,T,u,g,P,v,E,z,O,Y,N,D,G,j,k,M,x,H,m,_e,ae,B,ye,oe,J,Je,ie,Re,q,R,Ne,se,bt,Ce,At,Ue,U,Et,be,kt,Pt,Ke,le,Qe,ne,Ae,jt,Tt,Ve,I,K,Oe,ce,zt,De,St,Xe,S,xt,Ee,Nt,Ct,Me,Ot,Dt,ke,Mt,Ht,Ze,pe,et,L,Q,He,he,Bt,Be,qt,tt,V,It,Pe,Lt,Wt,rt,de,at,C,Ft,qe,Yt,Gt,Ie,Jt,Rt,ot,X,it,W,Z,Le,fe,Ut,We,Kt,st,ee,Qt,je,Vt,Xt,lt,ue,nt,Te,Zt,ct,F,te,Fe,me,er,Ye,tr,pt,ze,rr,ht,ve,dt;return v=new $e({}),x=new $e({}),J=new Hr({props:{$$slots:{default:[Fr]},$$scope:{ctx:we}}}),ie=new xe({props:{code:`device = "cuda"
model.to(device)

for batch in training_dataloader:
    optimizer.zero_grad()
    inputs, targets = batch
    inputs = inputs.to(device)
    targets = targets.to(device)
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    loss.backward()
    optimizer.step()
    scheduler.step()`,highlighted:`device = <span class="hljs-string">&quot;cuda&quot;</span>
model.to(device)

<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> training_dataloader:
    optimizer.zero_grad()
    inputs, targets = batch
    inputs = inputs.to(device)
    targets = targets.to(device)
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    loss.backward()
    optimizer.step()
    scheduler.step()`}}),se=new $e({}),le=new xe({props:{code:`from accelerate import Accelerator

accelerator = Accelerator()`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

accelerator = Accelerator()`}}),ce=new $e({}),pe=new xe({props:{code:`- device = 'cuda'
+ device = accelerator.device
  model.to(device)`,highlighted:`<span class="hljs-deletion">- device = &#x27;cuda&#x27;</span>
<span class="hljs-addition">+ device = accelerator.device</span>
  model.to(device)`}}),he=new $e({}),de=new xe({props:{code:`model, optimizer, training_dataloader, scheduler = accelerator.prepare(
    model, optimizer, training_dataloader, scheduler
)`,highlighted:`<span class="hljs-built_in">model,</span> optimizer, training_dataloader, scheduler = accelerator.prepare(
<span class="hljs-built_in">    model,</span> optimizer, training_dataloader, scheduler
)`}}),X=new Hr({props:{warning:!0,$$slots:{default:[Yr]},$$scope:{ctx:we}}}),fe=new $e({}),ue=new xe({props:{code:`-   inputs = inputs.to(device)
-   targets = targets.to(device)
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
-   loss.backward()
+   accelerator.backward(loss)`,highlighted:`<span class="hljs-deletion">-   inputs = inputs.to(device)</span>
<span class="hljs-deletion">-   targets = targets.to(device)</span>
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
<span class="hljs-deletion">-   loss.backward()</span>
<span class="hljs-addition">+   accelerator.backward(loss)</span>`}}),me=new $e({}),ve=new xe({props:{code:`from accelerate import Accelerator

accelerator = Accelerator()

model, optimizer, training_dataloader, scheduler = accelerator.prepare(
    model, optimizer, training_dataloader, scheduler
)

for batch in training_dataloader:
    optimizer.zero_grad()
    inputs, targets = batch
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    accelerator.backward(loss)
    optimizer.step()
    scheduler.step()`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

accelerator = Accelerator()

model, optimizer, training_dataloader, scheduler = accelerator.prepare(
    model, optimizer, training_dataloader, scheduler
)

<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> training_dataloader:
    optimizer.zero_grad()
    inputs, targets = batch
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    accelerator.backward(loss)
    optimizer.step()
    scheduler.step()`}}),{c(){h=o("meta"),T=d(),u=o("h1"),g=o("a"),P=o("span"),$(v.$$.fragment),E=d(),z=o("span"),O=l("Migrating your code to \u{1F917} Accelerate"),Y=d(),N=o("p"),D=l(`This tutorial will detail how to easily convert existing PyTorch code to use \u{1F917} Accelerate!
You\u2019ll see that by just changing a few lines of code, \u{1F917} Accelerate can perform its magic and get you on
your way towards running your code on distributed systems with ease!`),G=d(),j=o("h2"),k=o("a"),M=o("span"),$(x.$$.fragment),H=d(),m=o("span"),_e=l("The base training loop"),ae=d(),B=o("p"),ye=l("To begin, write out a very basic PyTorch training loop."),oe=d(),$(J.$$.fragment),Je=d(),$(ie.$$.fragment),Re=d(),q=o("h2"),R=o("a"),Ne=o("span"),$(se.$$.fragment),bt=d(),Ce=o("span"),At=l("Add in \u{1F917} Accelerate"),Ue=d(),U=o("p"),Et=l("To start using \u{1F917} Accelerate, first import and create an "),be=o("a"),kt=l("Accelerator"),Pt=l(" instance:"),Ke=d(),$(le.$$.fragment),Qe=d(),ne=o("p"),Ae=o("a"),jt=l("Accelerator"),Tt=l(" is the main force behind utilizing all the possible options for distributed training!"),Ve=d(),I=o("h3"),K=o("a"),Oe=o("span"),$(ce.$$.fragment),zt=d(),De=o("span"),St=l("Setting the right device"),Xe=d(),S=o("p"),xt=l("The "),Ee=o("a"),Nt=l("Accelerator"),Ct=l(` class knows the right device to move any PyTorch object to at any time, so you should
change the definition of `),Me=o("code"),Ot=l("device"),Dt=l(" to come from "),ke=o("a"),Mt=l("Accelerator"),Ht=l(":"),Ze=d(),$(pe.$$.fragment),et=d(),L=o("h3"),Q=o("a"),He=o("span"),$(he.$$.fragment),Bt=d(),Be=o("span"),qt=l("Preparing your objects"),tt=d(),V=o("p"),It=l("Next you need to pass all of the important objects related to training into "),Pe=o("a"),Lt=l("prepare()"),Wt=l(`. \u{1F917} Accelerate will
make sure everything is setup in the current environment for you to start training:`),rt=d(),$(de.$$.fragment),at=d(),C=o("p"),Ft=l("These objects are returned in the same order they were sent in with. By default when using "),qe=o("code"),Yt=l("device_placement=True"),Gt=l(`, all of the objects that can be sent to the right device will be.
If you need to work with data that isn\u2019t passed to [~Accelerator.prepare] but should be on the active device, you should pass in the `),Ie=o("code"),Jt=l("device"),Rt=l(" you made earlier."),ot=d(),$(X.$$.fragment),it=d(),W=o("h3"),Z=o("a"),Le=o("span"),$(fe.$$.fragment),Ut=d(),We=o("span"),Kt=l("Modifying the training loop"),st=d(),ee=o("p"),Qt=l(`Finally, three lines of code need to be changed in the training loop. \u{1F917} Accelerate\u2019s DataLoader classes will automatically handle the device placement by default,
and `),je=o("a"),Vt=l("backward()"),Xt=l(" should be used for performing the backward pass:"),lt=d(),$(ue.$$.fragment),nt=d(),Te=o("p"),Zt=l("With that, your training loop is now ready to use \u{1F917} Accelerate!"),ct=d(),F=o("h2"),te=o("a"),Fe=o("span"),$(me.$$.fragment),er=d(),Ye=o("span"),tr=l("The finished code"),pt=d(),ze=o("p"),rr=l("Below is the final version of the converted code:"),ht=d(),$(ve.$$.fragment),this.h()},l(e){const a=Lr('[data-svelte="svelte-1phssyn"]',document.head);h=i(a,"META",{name:!0,content:!0}),a.forEach(t),T=f(e),u=i(e,"H1",{class:!0});var ge=s(u);g=i(ge,"A",{id:!0,class:!0,href:!0});var Ge=s(g);P=i(Ge,"SPAN",{});var or=s(P);w(v.$$.fragment,or),or.forEach(t),Ge.forEach(t),E=f(ge),z=i(ge,"SPAN",{});var ir=s(z);O=n(ir,"Migrating your code to \u{1F917} Accelerate"),ir.forEach(t),ge.forEach(t),Y=f(e),N=i(e,"P",{});var sr=s(N);D=n(sr,`This tutorial will detail how to easily convert existing PyTorch code to use \u{1F917} Accelerate!
You\u2019ll see that by just changing a few lines of code, \u{1F917} Accelerate can perform its magic and get you on
your way towards running your code on distributed systems with ease!`),sr.forEach(t),G=f(e),j=i(e,"H2",{class:!0});var ft=s(j);k=i(ft,"A",{id:!0,class:!0,href:!0});var lr=s(k);M=i(lr,"SPAN",{});var nr=s(M);w(x.$$.fragment,nr),nr.forEach(t),lr.forEach(t),H=f(ft),m=i(ft,"SPAN",{});var cr=s(m);_e=n(cr,"The base training loop"),cr.forEach(t),ft.forEach(t),ae=f(e),B=i(e,"P",{});var pr=s(B);ye=n(pr,"To begin, write out a very basic PyTorch training loop."),pr.forEach(t),oe=f(e),w(J.$$.fragment,e),Je=f(e),w(ie.$$.fragment,e),Re=f(e),q=i(e,"H2",{class:!0});var ut=s(q);R=i(ut,"A",{id:!0,class:!0,href:!0});var hr=s(R);Ne=i(hr,"SPAN",{});var dr=s(Ne);w(se.$$.fragment,dr),dr.forEach(t),hr.forEach(t),bt=f(ut),Ce=i(ut,"SPAN",{});var fr=s(Ce);At=n(fr,"Add in \u{1F917} Accelerate"),fr.forEach(t),ut.forEach(t),Ue=f(e),U=i(e,"P",{});var mt=s(U);Et=n(mt,"To start using \u{1F917} Accelerate, first import and create an "),be=i(mt,"A",{href:!0});var ur=s(be);kt=n(ur,"Accelerator"),ur.forEach(t),Pt=n(mt," instance:"),mt.forEach(t),Ke=f(e),w(le.$$.fragment,e),Qe=f(e),ne=i(e,"P",{});var ar=s(ne);Ae=i(ar,"A",{href:!0});var mr=s(Ae);jt=n(mr,"Accelerator"),mr.forEach(t),Tt=n(ar," is the main force behind utilizing all the possible options for distributed training!"),ar.forEach(t),Ve=f(e),I=i(e,"H3",{class:!0});var vt=s(I);K=i(vt,"A",{id:!0,class:!0,href:!0});var vr=s(K);Oe=i(vr,"SPAN",{});var gr=s(Oe);w(ce.$$.fragment,gr),gr.forEach(t),vr.forEach(t),zt=f(vt),De=i(vt,"SPAN",{});var $r=s(De);St=n($r,"Setting the right device"),$r.forEach(t),vt.forEach(t),Xe=f(e),S=i(e,"P",{});var re=s(S);xt=n(re,"The "),Ee=i(re,"A",{href:!0});var wr=s(Ee);Nt=n(wr,"Accelerator"),wr.forEach(t),Ct=n(re,` class knows the right device to move any PyTorch object to at any time, so you should
change the definition of `),Me=i(re,"CODE",{});var _r=s(Me);Ot=n(_r,"device"),_r.forEach(t),Dt=n(re," to come from "),ke=i(re,"A",{href:!0});var yr=s(ke);Mt=n(yr,"Accelerator"),yr.forEach(t),Ht=n(re,":"),re.forEach(t),Ze=f(e),w(pe.$$.fragment,e),et=f(e),L=i(e,"H3",{class:!0});var gt=s(L);Q=i(gt,"A",{id:!0,class:!0,href:!0});var br=s(Q);He=i(br,"SPAN",{});var Ar=s(He);w(he.$$.fragment,Ar),Ar.forEach(t),br.forEach(t),Bt=f(gt),Be=i(gt,"SPAN",{});var Er=s(Be);qt=n(Er,"Preparing your objects"),Er.forEach(t),gt.forEach(t),tt=f(e),V=i(e,"P",{});var $t=s(V);It=n($t,"Next you need to pass all of the important objects related to training into "),Pe=i($t,"A",{href:!0});var kr=s(Pe);Lt=n(kr,"prepare()"),kr.forEach(t),Wt=n($t,`. \u{1F917} Accelerate will
make sure everything is setup in the current environment for you to start training:`),$t.forEach(t),rt=f(e),w(de.$$.fragment,e),at=f(e),C=i(e,"P",{});var Se=s(C);Ft=n(Se,"These objects are returned in the same order they were sent in with. By default when using "),qe=i(Se,"CODE",{});var Pr=s(qe);Yt=n(Pr,"device_placement=True"),Pr.forEach(t),Gt=n(Se,`, all of the objects that can be sent to the right device will be.
If you need to work with data that isn\u2019t passed to [~Accelerator.prepare] but should be on the active device, you should pass in the `),Ie=i(Se,"CODE",{});var jr=s(Ie);Jt=n(jr,"device"),jr.forEach(t),Rt=n(Se," you made earlier."),Se.forEach(t),ot=f(e),w(X.$$.fragment,e),it=f(e),W=i(e,"H3",{class:!0});var wt=s(W);Z=i(wt,"A",{id:!0,class:!0,href:!0});var Tr=s(Z);Le=i(Tr,"SPAN",{});var zr=s(Le);w(fe.$$.fragment,zr),zr.forEach(t),Tr.forEach(t),Ut=f(wt),We=i(wt,"SPAN",{});var Sr=s(We);Kt=n(Sr,"Modifying the training loop"),Sr.forEach(t),wt.forEach(t),st=f(e),ee=i(e,"P",{});var _t=s(ee);Qt=n(_t,`Finally, three lines of code need to be changed in the training loop. \u{1F917} Accelerate\u2019s DataLoader classes will automatically handle the device placement by default,
and `),je=i(_t,"A",{href:!0});var xr=s(je);Vt=n(xr,"backward()"),xr.forEach(t),Xt=n(_t," should be used for performing the backward pass:"),_t.forEach(t),lt=f(e),w(ue.$$.fragment,e),nt=f(e),Te=i(e,"P",{});var Nr=s(Te);Zt=n(Nr,"With that, your training loop is now ready to use \u{1F917} Accelerate!"),Nr.forEach(t),ct=f(e),F=i(e,"H2",{class:!0});var yt=s(F);te=i(yt,"A",{id:!0,class:!0,href:!0});var Cr=s(te);Fe=i(Cr,"SPAN",{});var Or=s(Fe);w(me.$$.fragment,Or),Or.forEach(t),Cr.forEach(t),er=f(yt),Ye=i(yt,"SPAN",{});var Dr=s(Ye);tr=n(Dr,"The finished code"),Dr.forEach(t),yt.forEach(t),pt=f(e),ze=i(e,"P",{});var Mr=s(ze);rr=n(Mr,"Below is the final version of the converted code:"),Mr.forEach(t),ht=f(e),w(ve.$$.fragment,e),this.h()},h(){p(h,"name","hf:doc:metadata"),p(h,"content",JSON.stringify(Jr)),p(g,"id","migrating-your-code-to-accelerate"),p(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(g,"href","#migrating-your-code-to-accelerate"),p(u,"class","relative group"),p(k,"id","the-base-training-loop"),p(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(k,"href","#the-base-training-loop"),p(j,"class","relative group"),p(R,"id","add-in-accelerate"),p(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(R,"href","#add-in-accelerate"),p(q,"class","relative group"),p(be,"href","/docs/accelerate/v0.14.0/en/package_reference/accelerator#accelerate.Accelerator"),p(Ae,"href","/docs/accelerate/v0.14.0/en/package_reference/accelerator#accelerate.Accelerator"),p(K,"id","setting-the-right-device"),p(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(K,"href","#setting-the-right-device"),p(I,"class","relative group"),p(Ee,"href","/docs/accelerate/v0.14.0/en/package_reference/accelerator#accelerate.Accelerator"),p(ke,"href","/docs/accelerate/v0.14.0/en/package_reference/accelerator#accelerate.Accelerator"),p(Q,"id","preparing-your-objects"),p(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Q,"href","#preparing-your-objects"),p(L,"class","relative group"),p(Pe,"href","/docs/accelerate/v0.14.0/en/package_reference/accelerator#accelerate.Accelerator.prepare"),p(Z,"id","modifying-the-training-loop"),p(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Z,"href","#modifying-the-training-loop"),p(W,"class","relative group"),p(je,"href","/docs/accelerate/v0.14.0/en/package_reference/accelerator#accelerate.Accelerator.backward"),p(te,"id","the-finished-code"),p(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(te,"href","#the-finished-code"),p(F,"class","relative group")},m(e,a){r(document.head,h),c(e,T,a),c(e,u,a),r(u,g),r(g,P),_(v,P,null),r(u,E),r(u,z),r(z,O),c(e,Y,a),c(e,N,a),r(N,D),c(e,G,a),c(e,j,a),r(j,k),r(k,M),_(x,M,null),r(j,H),r(j,m),r(m,_e),c(e,ae,a),c(e,B,a),r(B,ye),c(e,oe,a),_(J,e,a),c(e,Je,a),_(ie,e,a),c(e,Re,a),c(e,q,a),r(q,R),r(R,Ne),_(se,Ne,null),r(q,bt),r(q,Ce),r(Ce,At),c(e,Ue,a),c(e,U,a),r(U,Et),r(U,be),r(be,kt),r(U,Pt),c(e,Ke,a),_(le,e,a),c(e,Qe,a),c(e,ne,a),r(ne,Ae),r(Ae,jt),r(ne,Tt),c(e,Ve,a),c(e,I,a),r(I,K),r(K,Oe),_(ce,Oe,null),r(I,zt),r(I,De),r(De,St),c(e,Xe,a),c(e,S,a),r(S,xt),r(S,Ee),r(Ee,Nt),r(S,Ct),r(S,Me),r(Me,Ot),r(S,Dt),r(S,ke),r(ke,Mt),r(S,Ht),c(e,Ze,a),_(pe,e,a),c(e,et,a),c(e,L,a),r(L,Q),r(Q,He),_(he,He,null),r(L,Bt),r(L,Be),r(Be,qt),c(e,tt,a),c(e,V,a),r(V,It),r(V,Pe),r(Pe,Lt),r(V,Wt),c(e,rt,a),_(de,e,a),c(e,at,a),c(e,C,a),r(C,Ft),r(C,qe),r(qe,Yt),r(C,Gt),r(C,Ie),r(Ie,Jt),r(C,Rt),c(e,ot,a),_(X,e,a),c(e,it,a),c(e,W,a),r(W,Z),r(Z,Le),_(fe,Le,null),r(W,Ut),r(W,We),r(We,Kt),c(e,st,a),c(e,ee,a),r(ee,Qt),r(ee,je),r(je,Vt),r(ee,Xt),c(e,lt,a),_(ue,e,a),c(e,nt,a),c(e,Te,a),r(Te,Zt),c(e,ct,a),c(e,F,a),r(F,te),r(te,Fe),_(me,Fe,null),r(F,er),r(F,Ye),r(Ye,tr),c(e,pt,a),c(e,ze,a),r(ze,rr),c(e,ht,a),_(ve,e,a),dt=!0},p(e,[a]){const ge={};a&2&&(ge.$$scope={dirty:a,ctx:e}),J.$set(ge);const Ge={};a&2&&(Ge.$$scope={dirty:a,ctx:e}),X.$set(Ge)},i(e){dt||(y(v.$$.fragment,e),y(x.$$.fragment,e),y(J.$$.fragment,e),y(ie.$$.fragment,e),y(se.$$.fragment,e),y(le.$$.fragment,e),y(ce.$$.fragment,e),y(pe.$$.fragment,e),y(he.$$.fragment,e),y(de.$$.fragment,e),y(X.$$.fragment,e),y(fe.$$.fragment,e),y(ue.$$.fragment,e),y(me.$$.fragment,e),y(ve.$$.fragment,e),dt=!0)},o(e){b(v.$$.fragment,e),b(x.$$.fragment,e),b(J.$$.fragment,e),b(ie.$$.fragment,e),b(se.$$.fragment,e),b(le.$$.fragment,e),b(ce.$$.fragment,e),b(pe.$$.fragment,e),b(he.$$.fragment,e),b(de.$$.fragment,e),b(X.$$.fragment,e),b(fe.$$.fragment,e),b(ue.$$.fragment,e),b(me.$$.fragment,e),b(ve.$$.fragment,e),dt=!1},d(e){t(h),e&&t(T),e&&t(u),A(v),e&&t(Y),e&&t(N),e&&t(G),e&&t(j),A(x),e&&t(ae),e&&t(B),e&&t(oe),A(J,e),e&&t(Je),A(ie,e),e&&t(Re),e&&t(q),A(se),e&&t(Ue),e&&t(U),e&&t(Ke),A(le,e),e&&t(Qe),e&&t(ne),e&&t(Ve),e&&t(I),A(ce),e&&t(Xe),e&&t(S),e&&t(Ze),A(pe,e),e&&t(et),e&&t(L),A(he),e&&t(tt),e&&t(V),e&&t(rt),A(de,e),e&&t(at),e&&t(C),e&&t(ot),A(X,e),e&&t(it),e&&t(W),A(fe),e&&t(st),e&&t(ee),e&&t(lt),A(ue,e),e&&t(nt),e&&t(Te),e&&t(ct),e&&t(F),A(me),e&&t(pt),e&&t(ze),e&&t(ht),A(ve,e)}}}const Jr={local:"migrating-your-code-to-accelerate",sections:[{local:"the-base-training-loop",title:"The base training loop"},{local:"add-in-accelerate",sections:[{local:"setting-the-right-device",title:"Setting the right device"},{local:"preparing-your-objects",title:"Preparing your objects"},{local:"modifying-the-training-loop",title:"Modifying the training loop"}],title:"Add in \u{1F917} Accelerate"},{local:"the-finished-code",title:"The finished code"}],title:"Migrating your code to \u{1F917} Accelerate"};function Rr(we){return Wr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Xr extends Br{constructor(h){super();qr(this,h,Rr,Gr,Ir,{})}}export{Xr as default,Jr as metadata};
