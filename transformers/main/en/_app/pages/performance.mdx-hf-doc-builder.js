import{S as yi,i as Ei,s as bi,e as a,k as h,w as c,t as p,M as ki,c as i,d as t,m as f,a as o,x as v,h as u,b as s,N as Ui,G as r,g as l,y as m,L as Ai,q as d,o as w,B as g,v as Gi}from"../chunks/vendor-hf-doc-builder.js";import{I as _}from"../chunks/IconCopyLink-hf-doc-builder.js";function Si(ra){let P,vt,$,I,Ie,Q,hr,Me,fr,mt,he,pr,dt,fe,pe,aa,wt,ue,ur,gt,y,M,ze,V,cr,qe,vr,_t,ce,mr,Pt,E,z,We,X,dr,Be,wr,$t,ve,gr,yt,me,de,_r,Et,b,q,Le,Y,Pr,Re,$r,bt,we,yr,kt,ge,_e,Er,Ut,k,W,De,Z,br,Je,kr,At,Pe,$e,Ur,Gt,U,B,Oe,ee,Ar,je,Gr,St,ye,Fe,Sr,Nt,A,L,Ke,te,Nr,Qe,Cr,Ct,Ee,Ve,Tr,Tt,G,R,Xe,re,xr,Ye,Hr,xt,be,Ir,Ht,S,D,Ze,ae,Mr,et,zr,It,ke,Ue,qr,Mt,N,J,tt,ie,Wr,rt,Br,zt,Ae,at,Lr,qt,C,O,it,oe,Rr,ot,Dr,Wt,Ge,nt,Jr,Bt,T,j,lt,ne,Or,st,jr,Lt,Se,ht,Fr,Rt,x,F,ft,le,Kr,pt,Qr,Dt,Ne,Vr,Jt,Ce,Te,Xr,Ot,H,K,ut,se,Yr,ct,Zr,jt,xe,ea,Ft,He,ta,Kt;return Q=new _({}),V=new _({}),X=new _({}),Y=new _({}),Z=new _({}),ee=new _({}),te=new _({}),re=new _({}),ae=new _({}),ie=new _({}),oe=new _({}),ne=new _({}),le=new _({}),se=new _({}),{c(){P=a("meta"),vt=h(),$=a("h1"),I=a("a"),Ie=a("span"),c(Q.$$.fragment),hr=h(),Me=a("span"),fr=p("Performance and Scalability"),mt=h(),he=a("p"),pr=p("Training larger and larger transformer models and deploying them to production comes with a range of challenges. During training your model can require more GPU memory than is available or be very slow to train and when you deploy it for inference it can be overwhelmed with the throughput that is required in the production environment. This documentation is designed to help you navigate these challenges and find the best setting for your use-case. We split the guides into training and inference as they come with different challenges and solutions. Then within each of them we have separate guides for different kinds of hardware setting (e.g. single vs. multi-GPU for training or CPU vs. GPU for infrence)."),dt=h(),fe=a("p"),pe=a("img"),wt=h(),ue=a("p"),ur=p("This document serves as an overview and entry point for the methods that could be useful for your scenario."),gt=h(),y=a("h2"),M=a("a"),ze=a("span"),c(V.$$.fragment),cr=h(),qe=a("span"),vr=p("Training"),_t=h(),ce=a("p"),mr=p("Training transformer models efficiently requires an accelerator such as a GPU or TPU. The most common case is where you only have a single GPU."),Pt=h(),E=a("h3"),z=a("a"),We=a("span"),c(X.$$.fragment),dr=h(),Be=a("span"),wr=p("Single GPU"),$t=h(),ve=a("p"),gr=p("Training large models on a single GPU can be challenging but there are a number of tools and methods that make it feasible. In this section methods such as mixed precision training, gradient accumulation and checkpointing, efficient optimizers, as well as strategies to determine the best batch size are discussed."),yt=h(),me=a("p"),de=a("a"),_r=p("Go to single GPU training section"),Et=h(),b=a("h3"),q=a("a"),Le=a("span"),c(Y.$$.fragment),Pr=h(),Re=a("span"),$r=p("Multi-GPU"),bt=h(),we=a("p"),yr=p("In some cases training on a single GPU is still too slow or won\u2019t fit the large model. Moving to a mutli-GPU setup is the logical step, but training on multiple GPUs at once comes with new decisions: does each GPU have a full copy of the model or is the model itself also distributed? In this section we look at data, tensor, and pipeline parallism."),kt=h(),ge=a("p"),_e=a("a"),Er=p("Go to multi-GPU training section"),Ut=h(),k=a("h3"),W=a("a"),De=a("span"),c(Z.$$.fragment),br=h(),Je=a("span"),kr=p("CPU"),At=h(),Pe=a("p"),$e=a("a"),Ur=p("Go to CPU training section"),Gt=h(),U=a("h3"),B=a("a"),Oe=a("span"),c(ee.$$.fragment),Ar=h(),je=a("span"),Gr=p("TPU"),St=h(),ye=a("p"),Fe=a("em"),Sr=p("Coming soon"),Nt=h(),A=a("h3"),L=a("a"),Ke=a("span"),c(te.$$.fragment),Nr=h(),Qe=a("span"),Cr=p("Specialized Hardware"),Ct=h(),Ee=a("p"),Ve=a("em"),Tr=p("Coming soon"),Tt=h(),G=a("h2"),R=a("a"),Xe=a("span"),c(re.$$.fragment),xr=h(),Ye=a("span"),Hr=p("Inference"),xt=h(),be=a("p"),Ir=p("Efficient inference with large models in a production environment can be as challenging as training them. In the following sections we go through the steps to run inference on CPU and single/multi-GPU setups."),Ht=h(),S=a("h3"),D=a("a"),Ze=a("span"),c(ae.$$.fragment),Mr=h(),et=a("span"),zr=p("CPU"),It=h(),ke=a("p"),Ue=a("a"),qr=p("Go to CPU inference section"),Mt=h(),N=a("h3"),J=a("a"),tt=a("span"),c(ie.$$.fragment),Wr=h(),rt=a("span"),Br=p("Single GPU"),zt=h(),Ae=a("p"),at=a("em"),Lr=p("Coming soon"),qt=h(),C=a("h3"),O=a("a"),it=a("span"),c(oe.$$.fragment),Rr=h(),ot=a("span"),Dr=p("Multi-GPU"),Wt=h(),Ge=a("p"),nt=a("em"),Jr=p("Coming soon"),Bt=h(),T=a("h3"),j=a("a"),lt=a("span"),c(ne.$$.fragment),Or=h(),st=a("span"),jr=p("Specialized Hardware"),Lt=h(),Se=a("p"),ht=a("em"),Fr=p("Coming soon"),Rt=h(),x=a("h2"),F=a("a"),ft=a("span"),c(le.$$.fragment),Kr=h(),pt=a("span"),Qr=p("Hardware"),Dt=h(),Ne=a("p"),Vr=p("In the hardware section you can find tips and tricks when building your own deep learning rig."),Jt=h(),Ce=a("p"),Te=a("a"),Xr=p("Go to hardware section"),Ot=h(),H=a("h2"),K=a("a"),ut=a("span"),c(se.$$.fragment),Yr=h(),ct=a("span"),Zr=p("Contribute"),jt=h(),xe=a("p"),ea=p("This document is far from being complete and a lot more needs to be added, so if you have additions or corrections to make please don\u2019t hesitate to open a PR or if you aren\u2019t sure start an Issue and we can discuss the details there."),Ft=h(),He=a("p"),ta=p("When making contributions that A is better than B, please try to include a reproducible benchmark and/or a link to the source of that information (unless it comes directly from you)."),this.h()},l(e){const n=ki('[data-svelte="svelte-1phssyn"]',document.head);P=i(n,"META",{name:!0,content:!0}),n.forEach(t),vt=f(e),$=i(e,"H1",{class:!0});var Qt=o($);I=i(Qt,"A",{id:!0,class:!0,href:!0});var ia=o(I);Ie=i(ia,"SPAN",{});var oa=o(Ie);v(Q.$$.fragment,oa),oa.forEach(t),ia.forEach(t),hr=f(Qt),Me=i(Qt,"SPAN",{});var na=o(Me);fr=u(na,"Performance and Scalability"),na.forEach(t),Qt.forEach(t),mt=f(e),he=i(e,"P",{});var la=o(he);pr=u(la,"Training larger and larger transformer models and deploying them to production comes with a range of challenges. During training your model can require more GPU memory than is available or be very slow to train and when you deploy it for inference it can be overwhelmed with the throughput that is required in the production environment. This documentation is designed to help you navigate these challenges and find the best setting for your use-case. We split the guides into training and inference as they come with different challenges and solutions. Then within each of them we have separate guides for different kinds of hardware setting (e.g. single vs. multi-GPU for training or CPU vs. GPU for infrence)."),la.forEach(t),dt=f(e),fe=i(e,"P",{});var sa=o(fe);pe=i(sa,"IMG",{src:!0,alt:!0}),sa.forEach(t),wt=f(e),ue=i(e,"P",{});var ha=o(ue);ur=u(ha,"This document serves as an overview and entry point for the methods that could be useful for your scenario."),ha.forEach(t),gt=f(e),y=i(e,"H2",{class:!0});var Vt=o(y);M=i(Vt,"A",{id:!0,class:!0,href:!0});var fa=o(M);ze=i(fa,"SPAN",{});var pa=o(ze);v(V.$$.fragment,pa),pa.forEach(t),fa.forEach(t),cr=f(Vt),qe=i(Vt,"SPAN",{});var ua=o(qe);vr=u(ua,"Training"),ua.forEach(t),Vt.forEach(t),_t=f(e),ce=i(e,"P",{});var ca=o(ce);mr=u(ca,"Training transformer models efficiently requires an accelerator such as a GPU or TPU. The most common case is where you only have a single GPU."),ca.forEach(t),Pt=f(e),E=i(e,"H3",{class:!0});var Xt=o(E);z=i(Xt,"A",{id:!0,class:!0,href:!0});var va=o(z);We=i(va,"SPAN",{});var ma=o(We);v(X.$$.fragment,ma),ma.forEach(t),va.forEach(t),dr=f(Xt),Be=i(Xt,"SPAN",{});var da=o(Be);wr=u(da,"Single GPU"),da.forEach(t),Xt.forEach(t),$t=f(e),ve=i(e,"P",{});var wa=o(ve);gr=u(wa,"Training large models on a single GPU can be challenging but there are a number of tools and methods that make it feasible. In this section methods such as mixed precision training, gradient accumulation and checkpointing, efficient optimizers, as well as strategies to determine the best batch size are discussed."),wa.forEach(t),yt=f(e),me=i(e,"P",{});var ga=o(me);de=i(ga,"A",{href:!0});var _a=o(de);_r=u(_a,"Go to single GPU training section"),_a.forEach(t),ga.forEach(t),Et=f(e),b=i(e,"H3",{class:!0});var Yt=o(b);q=i(Yt,"A",{id:!0,class:!0,href:!0});var Pa=o(q);Le=i(Pa,"SPAN",{});var $a=o(Le);v(Y.$$.fragment,$a),$a.forEach(t),Pa.forEach(t),Pr=f(Yt),Re=i(Yt,"SPAN",{});var ya=o(Re);$r=u(ya,"Multi-GPU"),ya.forEach(t),Yt.forEach(t),bt=f(e),we=i(e,"P",{});var Ea=o(we);yr=u(Ea,"In some cases training on a single GPU is still too slow or won\u2019t fit the large model. Moving to a mutli-GPU setup is the logical step, but training on multiple GPUs at once comes with new decisions: does each GPU have a full copy of the model or is the model itself also distributed? In this section we look at data, tensor, and pipeline parallism."),Ea.forEach(t),kt=f(e),ge=i(e,"P",{});var ba=o(ge);_e=i(ba,"A",{href:!0});var ka=o(_e);Er=u(ka,"Go to multi-GPU training section"),ka.forEach(t),ba.forEach(t),Ut=f(e),k=i(e,"H3",{class:!0});var Zt=o(k);W=i(Zt,"A",{id:!0,class:!0,href:!0});var Ua=o(W);De=i(Ua,"SPAN",{});var Aa=o(De);v(Z.$$.fragment,Aa),Aa.forEach(t),Ua.forEach(t),br=f(Zt),Je=i(Zt,"SPAN",{});var Ga=o(Je);kr=u(Ga,"CPU"),Ga.forEach(t),Zt.forEach(t),At=f(e),Pe=i(e,"P",{});var Sa=o(Pe);$e=i(Sa,"A",{href:!0});var Na=o($e);Ur=u(Na,"Go to CPU training section"),Na.forEach(t),Sa.forEach(t),Gt=f(e),U=i(e,"H3",{class:!0});var er=o(U);B=i(er,"A",{id:!0,class:!0,href:!0});var Ca=o(B);Oe=i(Ca,"SPAN",{});var Ta=o(Oe);v(ee.$$.fragment,Ta),Ta.forEach(t),Ca.forEach(t),Ar=f(er),je=i(er,"SPAN",{});var xa=o(je);Gr=u(xa,"TPU"),xa.forEach(t),er.forEach(t),St=f(e),ye=i(e,"P",{});var Ha=o(ye);Fe=i(Ha,"EM",{});var Ia=o(Fe);Sr=u(Ia,"Coming soon"),Ia.forEach(t),Ha.forEach(t),Nt=f(e),A=i(e,"H3",{class:!0});var tr=o(A);L=i(tr,"A",{id:!0,class:!0,href:!0});var Ma=o(L);Ke=i(Ma,"SPAN",{});var za=o(Ke);v(te.$$.fragment,za),za.forEach(t),Ma.forEach(t),Nr=f(tr),Qe=i(tr,"SPAN",{});var qa=o(Qe);Cr=u(qa,"Specialized Hardware"),qa.forEach(t),tr.forEach(t),Ct=f(e),Ee=i(e,"P",{});var Wa=o(Ee);Ve=i(Wa,"EM",{});var Ba=o(Ve);Tr=u(Ba,"Coming soon"),Ba.forEach(t),Wa.forEach(t),Tt=f(e),G=i(e,"H2",{class:!0});var rr=o(G);R=i(rr,"A",{id:!0,class:!0,href:!0});var La=o(R);Xe=i(La,"SPAN",{});var Ra=o(Xe);v(re.$$.fragment,Ra),Ra.forEach(t),La.forEach(t),xr=f(rr),Ye=i(rr,"SPAN",{});var Da=o(Ye);Hr=u(Da,"Inference"),Da.forEach(t),rr.forEach(t),xt=f(e),be=i(e,"P",{});var Ja=o(be);Ir=u(Ja,"Efficient inference with large models in a production environment can be as challenging as training them. In the following sections we go through the steps to run inference on CPU and single/multi-GPU setups."),Ja.forEach(t),Ht=f(e),S=i(e,"H3",{class:!0});var ar=o(S);D=i(ar,"A",{id:!0,class:!0,href:!0});var Oa=o(D);Ze=i(Oa,"SPAN",{});var ja=o(Ze);v(ae.$$.fragment,ja),ja.forEach(t),Oa.forEach(t),Mr=f(ar),et=i(ar,"SPAN",{});var Fa=o(et);zr=u(Fa,"CPU"),Fa.forEach(t),ar.forEach(t),It=f(e),ke=i(e,"P",{});var Ka=o(ke);Ue=i(Ka,"A",{href:!0});var Qa=o(Ue);qr=u(Qa,"Go to CPU inference section"),Qa.forEach(t),Ka.forEach(t),Mt=f(e),N=i(e,"H3",{class:!0});var ir=o(N);J=i(ir,"A",{id:!0,class:!0,href:!0});var Va=o(J);tt=i(Va,"SPAN",{});var Xa=o(tt);v(ie.$$.fragment,Xa),Xa.forEach(t),Va.forEach(t),Wr=f(ir),rt=i(ir,"SPAN",{});var Ya=o(rt);Br=u(Ya,"Single GPU"),Ya.forEach(t),ir.forEach(t),zt=f(e),Ae=i(e,"P",{});var Za=o(Ae);at=i(Za,"EM",{});var ei=o(at);Lr=u(ei,"Coming soon"),ei.forEach(t),Za.forEach(t),qt=f(e),C=i(e,"H3",{class:!0});var or=o(C);O=i(or,"A",{id:!0,class:!0,href:!0});var ti=o(O);it=i(ti,"SPAN",{});var ri=o(it);v(oe.$$.fragment,ri),ri.forEach(t),ti.forEach(t),Rr=f(or),ot=i(or,"SPAN",{});var ai=o(ot);Dr=u(ai,"Multi-GPU"),ai.forEach(t),or.forEach(t),Wt=f(e),Ge=i(e,"P",{});var ii=o(Ge);nt=i(ii,"EM",{});var oi=o(nt);Jr=u(oi,"Coming soon"),oi.forEach(t),ii.forEach(t),Bt=f(e),T=i(e,"H3",{class:!0});var nr=o(T);j=i(nr,"A",{id:!0,class:!0,href:!0});var ni=o(j);lt=i(ni,"SPAN",{});var li=o(lt);v(ne.$$.fragment,li),li.forEach(t),ni.forEach(t),Or=f(nr),st=i(nr,"SPAN",{});var si=o(st);jr=u(si,"Specialized Hardware"),si.forEach(t),nr.forEach(t),Lt=f(e),Se=i(e,"P",{});var hi=o(Se);ht=i(hi,"EM",{});var fi=o(ht);Fr=u(fi,"Coming soon"),fi.forEach(t),hi.forEach(t),Rt=f(e),x=i(e,"H2",{class:!0});var lr=o(x);F=i(lr,"A",{id:!0,class:!0,href:!0});var pi=o(F);ft=i(pi,"SPAN",{});var ui=o(ft);v(le.$$.fragment,ui),ui.forEach(t),pi.forEach(t),Kr=f(lr),pt=i(lr,"SPAN",{});var ci=o(pt);Qr=u(ci,"Hardware"),ci.forEach(t),lr.forEach(t),Dt=f(e),Ne=i(e,"P",{});var vi=o(Ne);Vr=u(vi,"In the hardware section you can find tips and tricks when building your own deep learning rig."),vi.forEach(t),Jt=f(e),Ce=i(e,"P",{});var mi=o(Ce);Te=i(mi,"A",{href:!0});var di=o(Te);Xr=u(di,"Go to hardware section"),di.forEach(t),mi.forEach(t),Ot=f(e),H=i(e,"H2",{class:!0});var sr=o(H);K=i(sr,"A",{id:!0,class:!0,href:!0});var wi=o(K);ut=i(wi,"SPAN",{});var gi=o(ut);v(se.$$.fragment,gi),gi.forEach(t),wi.forEach(t),Yr=f(sr),ct=i(sr,"SPAN",{});var _i=o(ct);Zr=u(_i,"Contribute"),_i.forEach(t),sr.forEach(t),jt=f(e),xe=i(e,"P",{});var Pi=o(xe);ea=u(Pi,"This document is far from being complete and a lot more needs to be added, so if you have additions or corrections to make please don\u2019t hesitate to open a PR or if you aren\u2019t sure start an Issue and we can discuss the details there."),Pi.forEach(t),Ft=f(e),He=i(e,"P",{});var $i=o(He);ta=u($i,"When making contributions that A is better than B, please try to include a reproducible benchmark and/or a link to the source of that information (unless it comes directly from you)."),$i.forEach(t),this.h()},h(){s(P,"name","hf:doc:metadata"),s(P,"content",JSON.stringify(Ni)),s(I,"id","performance-and-scalability"),s(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(I,"href","#performance-and-scalability"),s($,"class","relative group"),Ui(pe.src,aa="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/perf_overview.png")||s(pe,"src",aa),s(pe,"alt","perf_overview"),s(M,"id","training"),s(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(M,"href","#training"),s(y,"class","relative group"),s(z,"id","single-gpu"),s(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(z,"href","#single-gpu"),s(E,"class","relative group"),s(de,"href","perf_train_gpu_one"),s(q,"id","multigpu"),s(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(q,"href","#multigpu"),s(b,"class","relative group"),s(_e,"href","perf_train_gpu_many"),s(W,"id","cpu"),s(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(W,"href","#cpu"),s(k,"class","relative group"),s($e,"href","perf_train_cpu"),s(B,"id","tpu"),s(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(B,"href","#tpu"),s(U,"class","relative group"),s(L,"id","specialized-hardware"),s(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(L,"href","#specialized-hardware"),s(A,"class","relative group"),s(R,"id","inference"),s(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(R,"href","#inference"),s(G,"class","relative group"),s(D,"id","cpu"),s(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(D,"href","#cpu"),s(S,"class","relative group"),s(Ue,"href","perf_infer_cpu.mdx"),s(J,"id","single-gpu"),s(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(J,"href","#single-gpu"),s(N,"class","relative group"),s(O,"id","multigpu"),s(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(O,"href","#multigpu"),s(C,"class","relative group"),s(j,"id","specialized-hardware"),s(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(j,"href","#specialized-hardware"),s(T,"class","relative group"),s(F,"id","hardware"),s(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(F,"href","#hardware"),s(x,"class","relative group"),s(Te,"href","perf_hardware"),s(K,"id","contribute"),s(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(K,"href","#contribute"),s(H,"class","relative group")},m(e,n){r(document.head,P),l(e,vt,n),l(e,$,n),r($,I),r(I,Ie),m(Q,Ie,null),r($,hr),r($,Me),r(Me,fr),l(e,mt,n),l(e,he,n),r(he,pr),l(e,dt,n),l(e,fe,n),r(fe,pe),l(e,wt,n),l(e,ue,n),r(ue,ur),l(e,gt,n),l(e,y,n),r(y,M),r(M,ze),m(V,ze,null),r(y,cr),r(y,qe),r(qe,vr),l(e,_t,n),l(e,ce,n),r(ce,mr),l(e,Pt,n),l(e,E,n),r(E,z),r(z,We),m(X,We,null),r(E,dr),r(E,Be),r(Be,wr),l(e,$t,n),l(e,ve,n),r(ve,gr),l(e,yt,n),l(e,me,n),r(me,de),r(de,_r),l(e,Et,n),l(e,b,n),r(b,q),r(q,Le),m(Y,Le,null),r(b,Pr),r(b,Re),r(Re,$r),l(e,bt,n),l(e,we,n),r(we,yr),l(e,kt,n),l(e,ge,n),r(ge,_e),r(_e,Er),l(e,Ut,n),l(e,k,n),r(k,W),r(W,De),m(Z,De,null),r(k,br),r(k,Je),r(Je,kr),l(e,At,n),l(e,Pe,n),r(Pe,$e),r($e,Ur),l(e,Gt,n),l(e,U,n),r(U,B),r(B,Oe),m(ee,Oe,null),r(U,Ar),r(U,je),r(je,Gr),l(e,St,n),l(e,ye,n),r(ye,Fe),r(Fe,Sr),l(e,Nt,n),l(e,A,n),r(A,L),r(L,Ke),m(te,Ke,null),r(A,Nr),r(A,Qe),r(Qe,Cr),l(e,Ct,n),l(e,Ee,n),r(Ee,Ve),r(Ve,Tr),l(e,Tt,n),l(e,G,n),r(G,R),r(R,Xe),m(re,Xe,null),r(G,xr),r(G,Ye),r(Ye,Hr),l(e,xt,n),l(e,be,n),r(be,Ir),l(e,Ht,n),l(e,S,n),r(S,D),r(D,Ze),m(ae,Ze,null),r(S,Mr),r(S,et),r(et,zr),l(e,It,n),l(e,ke,n),r(ke,Ue),r(Ue,qr),l(e,Mt,n),l(e,N,n),r(N,J),r(J,tt),m(ie,tt,null),r(N,Wr),r(N,rt),r(rt,Br),l(e,zt,n),l(e,Ae,n),r(Ae,at),r(at,Lr),l(e,qt,n),l(e,C,n),r(C,O),r(O,it),m(oe,it,null),r(C,Rr),r(C,ot),r(ot,Dr),l(e,Wt,n),l(e,Ge,n),r(Ge,nt),r(nt,Jr),l(e,Bt,n),l(e,T,n),r(T,j),r(j,lt),m(ne,lt,null),r(T,Or),r(T,st),r(st,jr),l(e,Lt,n),l(e,Se,n),r(Se,ht),r(ht,Fr),l(e,Rt,n),l(e,x,n),r(x,F),r(F,ft),m(le,ft,null),r(x,Kr),r(x,pt),r(pt,Qr),l(e,Dt,n),l(e,Ne,n),r(Ne,Vr),l(e,Jt,n),l(e,Ce,n),r(Ce,Te),r(Te,Xr),l(e,Ot,n),l(e,H,n),r(H,K),r(K,ut),m(se,ut,null),r(H,Yr),r(H,ct),r(ct,Zr),l(e,jt,n),l(e,xe,n),r(xe,ea),l(e,Ft,n),l(e,He,n),r(He,ta),Kt=!0},p:Ai,i(e){Kt||(d(Q.$$.fragment,e),d(V.$$.fragment,e),d(X.$$.fragment,e),d(Y.$$.fragment,e),d(Z.$$.fragment,e),d(ee.$$.fragment,e),d(te.$$.fragment,e),d(re.$$.fragment,e),d(ae.$$.fragment,e),d(ie.$$.fragment,e),d(oe.$$.fragment,e),d(ne.$$.fragment,e),d(le.$$.fragment,e),d(se.$$.fragment,e),Kt=!0)},o(e){w(Q.$$.fragment,e),w(V.$$.fragment,e),w(X.$$.fragment,e),w(Y.$$.fragment,e),w(Z.$$.fragment,e),w(ee.$$.fragment,e),w(te.$$.fragment,e),w(re.$$.fragment,e),w(ae.$$.fragment,e),w(ie.$$.fragment,e),w(oe.$$.fragment,e),w(ne.$$.fragment,e),w(le.$$.fragment,e),w(se.$$.fragment,e),Kt=!1},d(e){t(P),e&&t(vt),e&&t($),g(Q),e&&t(mt),e&&t(he),e&&t(dt),e&&t(fe),e&&t(wt),e&&t(ue),e&&t(gt),e&&t(y),g(V),e&&t(_t),e&&t(ce),e&&t(Pt),e&&t(E),g(X),e&&t($t),e&&t(ve),e&&t(yt),e&&t(me),e&&t(Et),e&&t(b),g(Y),e&&t(bt),e&&t(we),e&&t(kt),e&&t(ge),e&&t(Ut),e&&t(k),g(Z),e&&t(At),e&&t(Pe),e&&t(Gt),e&&t(U),g(ee),e&&t(St),e&&t(ye),e&&t(Nt),e&&t(A),g(te),e&&t(Ct),e&&t(Ee),e&&t(Tt),e&&t(G),g(re),e&&t(xt),e&&t(be),e&&t(Ht),e&&t(S),g(ae),e&&t(It),e&&t(ke),e&&t(Mt),e&&t(N),g(ie),e&&t(zt),e&&t(Ae),e&&t(qt),e&&t(C),g(oe),e&&t(Wt),e&&t(Ge),e&&t(Bt),e&&t(T),g(ne),e&&t(Lt),e&&t(Se),e&&t(Rt),e&&t(x),g(le),e&&t(Dt),e&&t(Ne),e&&t(Jt),e&&t(Ce),e&&t(Ot),e&&t(H),g(se),e&&t(jt),e&&t(xe),e&&t(Ft),e&&t(He)}}}const Ni={local:"performance-and-scalability",sections:[{local:"training",sections:[{local:"single-gpu",title:"Single GPU"},{local:"multigpu",title:"Multi-GPU"},{local:"cpu",title:"CPU"},{local:"tpu",title:"TPU"},{local:"specialized-hardware",title:"Specialized Hardware"}],title:"Training"},{local:"inference",sections:[{local:"cpu",title:"CPU"},{local:"single-gpu",title:"Single GPU"},{local:"multigpu",title:"Multi-GPU"},{local:"specialized-hardware",title:"Specialized Hardware"}],title:"Inference"},{local:"hardware",title:"Hardware"},{local:"contribute",title:"Contribute"}],title:"Performance and Scalability"};function Ci(ra){return Gi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Hi extends yi{constructor(P){super();Ei(this,P,Ci,Si,bi,{})}}export{Hi as default,Ni as metadata};
