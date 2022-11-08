import{S as Yt,i as Zt,s as ei,e as r,k as s,w as h,t as f,M as ti,c as n,d as t,m as c,a as l,x as m,h as u,b as p,G as a,g as o,y as d,L as ii,q as v,o as $,B as _,v as ai}from"../../chunks/vendor-hf-doc-builder.js";import{I as oe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as G}from"../../chunks/CodeBlock-hf-doc-builder.js";function oi(bt){let g,_e,w,E,re,U,Xe,ne,Ye,ge,x,Ze,le,et,tt,we,y,N,se,H,it,ce,at,ye,Q,ot,be,b,S,pe,L,rt,fe,nt,Ae,V,lt,Pe,q,ke,A,T,ue,M,st,he,ct,Ee,W,pt,xe,j,Ne,P,I,me,B,ft,de,ut,Se,X,ht,Te,D,Ie,Y,mt,Ce,O,Ge,k,C,ve,z,dt,$e,vt,Ue,Z,$t,He,F,Le,ee,_t,qe,R,Me,te,gt,je,ie,wt,Be,J,De,ae,yt,Oe,K,ze;return U=new oe({}),H=new oe({}),L=new oe({}),q=new G({props:{code:"pip install accelerate",highlighted:"pip install accelerate"}}),M=new oe({}),j=new G({props:{code:"conda install -c conda-forge accelerate",highlighted:"conda install -c conda-forge accelerate"}}),B=new oe({}),D=new G({props:{code:"pip install git+https://github.com/huggingface/accelerate",highlighted:"pip install git+https://github.com/huggingface/accelerate"}}),O=new G({props:{code:`git clone https://github.com/huggingface/accelerate
cd accelerate
pip install -e .`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/huggingface/accelerate
<span class="hljs-built_in">cd</span> accelerate
pip install -e .`}}),z=new oe({}),F=new G({props:{code:"accelerate config",highlighted:"accelerate config"}}),R=new G({props:{code:`python -c "from accelerate.utils import write_basic_config; write_basic_config(mixed_precision='fp16')"`,highlighted:'python -c <span class="hljs-string">&quot;from accelerate.utils import write_basic_config; write_basic_config(mixed_precision=&#x27;fp16&#x27;)&quot;</span>'}}),J=new G({props:{code:"accelerate env",highlighted:'accelerate <span class="hljs-built_in">env</span>'}}),K=new G({props:{code:`- \`Accelerate\` version: 0.11.0.dev0
- Platform: Linux-5.10.0-15-cloud-amd64-x86_64-with-debian-11.3
- Python version: 3.7.12
- Numpy version: 1.19.5
- PyTorch version (GPU?): 1.12.0+cu102 (True)
- \`Accelerate\` default config:
        - compute_environment: LOCAL_MACHINE
        - distributed_type: MULTI_GPU
        - mixed_precision: no
        - use_cpu: False
        - num_processes: 2
        - machine_rank: 0
        - num_machines: 1
        - main_process_ip: None
        - main_process_port: None
        - main_training_function: main
        - deepspeed_config: {}
        - fsdp_config: {}`,highlighted:`- \`Accelerate\` version: 0.11.0.dev0
- Platform: Linux-5.10.0-15-cloud-amd64-x86_64-with-debian-11.3
- Python version: 3.7.12
- Numpy version: 1.19.5
- PyTorch version (GPU?): 1.12.0+cu102 (True)
- \`Accelerate\` default config:
        - compute_environment: LOCAL_MACHINE
        - distributed_type: MULTI_GPU
        - mixed_precision: no
        - use_cpu: False
        - num_processes: 2
        - machine_rank: 0
        - num_machines: 1
        - main_process_ip: None
        - main_process_port: None
        - main_training_function: main
        - deepspeed_config: {}
        - fsdp_config: {}`}}),{c(){g=r("meta"),_e=s(),w=r("h1"),E=r("a"),re=r("span"),h(U.$$.fragment),Xe=s(),ne=r("span"),Ye=f("Installation and Configuration"),ge=s(),x=r("p"),Ze=f("Before you start, you will need to setup your environment, install the appropriate packages, and configure \u{1F917} Accelerate. \u{1F917} Accelerate is tested on "),le=r("strong"),et=f("Python 3.7+"),tt=f("."),we=s(),y=r("h2"),N=r("a"),se=r("span"),h(H.$$.fragment),it=s(),ce=r("span"),at=f("Installing \u{1F917} Accelerate"),ye=s(),Q=r("p"),ot=f("\u{1F917} Accelerate is available on pypi and conda, as well as on GitHub. Details to install from each are below:"),be=s(),b=r("h3"),S=r("a"),pe=r("span"),h(L.$$.fragment),rt=s(),fe=r("span"),nt=f("pip"),Ae=s(),V=r("p"),lt=f("To install \u{1F917} Accelerate from pypi, perform:"),Pe=s(),h(q.$$.fragment),ke=s(),A=r("h3"),T=r("a"),ue=r("span"),h(M.$$.fragment),st=s(),he=r("span"),ct=f("conda"),Ee=s(),W=r("p"),pt=f("\u{1F917} Accelerate can also be installed with conda with:"),xe=s(),h(j.$$.fragment),Ne=s(),P=r("h3"),I=r("a"),me=r("span"),h(B.$$.fragment),ft=s(),de=r("span"),ut=f("Source"),Se=s(),X=r("p"),ht=f(`New features are added every day that haven\u2019t been released yet. To try them out yourself, install
from the GitHub repository:`),Te=s(),h(D.$$.fragment),Ie=s(),Y=r("p"),mt=f(`If you\u2019re working on contributing to the library or wish to play with the source code and see live
results as you run the code, an editable version can be installed from a locally-cloned version of the
repository:`),Ce=s(),h(O.$$.fragment),Ge=s(),k=r("h2"),C=r("a"),ve=r("span"),h(z.$$.fragment),dt=s(),$e=r("span"),vt=f("Configuring \u{1F917} Accelerate"),Ue=s(),Z=r("p"),$t=f(`After installing, you need to configure \u{1F917} Accelerate for how the current system is setup for training.
To do so run the following and answer the questions prompted to you:`),He=s(),h(F.$$.fragment),Le=s(),ee=r("p"),_t=f("To write a barebones configuration that doesn\u2019t include options such as DeepSpeed configuration or running on TPUs, you can quickly run:"),qe=s(),h(R.$$.fragment),Me=s(),te=r("p"),gt=f("\u{1F917} Accelerate will automatically utilize the maximum number of GPUs available and set the mixed precision mode."),je=s(),ie=r("p"),wt=f("To check that your configuration looks fine, run:"),Be=s(),h(J.$$.fragment),De=s(),ae=r("p"),yt=f("An example output is shown below, which describes two GPUs on a single machine with no mixed precision being used:"),Oe=s(),h(K.$$.fragment),this.h()},l(e){const i=ti('[data-svelte="svelte-1phssyn"]',document.head);g=n(i,"META",{name:!0,content:!0}),i.forEach(t),_e=c(e),w=n(e,"H1",{class:!0});var Fe=l(w);E=n(Fe,"A",{id:!0,class:!0,href:!0});var At=l(E);re=n(At,"SPAN",{});var Pt=l(re);m(U.$$.fragment,Pt),Pt.forEach(t),At.forEach(t),Xe=c(Fe),ne=n(Fe,"SPAN",{});var kt=l(ne);Ye=u(kt,"Installation and Configuration"),kt.forEach(t),Fe.forEach(t),ge=c(e),x=n(e,"P",{});var Re=l(x);Ze=u(Re,"Before you start, you will need to setup your environment, install the appropriate packages, and configure \u{1F917} Accelerate. \u{1F917} Accelerate is tested on "),le=n(Re,"STRONG",{});var Et=l(le);et=u(Et,"Python 3.7+"),Et.forEach(t),tt=u(Re,"."),Re.forEach(t),we=c(e),y=n(e,"H2",{class:!0});var Je=l(y);N=n(Je,"A",{id:!0,class:!0,href:!0});var xt=l(N);se=n(xt,"SPAN",{});var Nt=l(se);m(H.$$.fragment,Nt),Nt.forEach(t),xt.forEach(t),it=c(Je),ce=n(Je,"SPAN",{});var St=l(ce);at=u(St,"Installing \u{1F917} Accelerate"),St.forEach(t),Je.forEach(t),ye=c(e),Q=n(e,"P",{});var Tt=l(Q);ot=u(Tt,"\u{1F917} Accelerate is available on pypi and conda, as well as on GitHub. Details to install from each are below:"),Tt.forEach(t),be=c(e),b=n(e,"H3",{class:!0});var Ke=l(b);S=n(Ke,"A",{id:!0,class:!0,href:!0});var It=l(S);pe=n(It,"SPAN",{});var Ct=l(pe);m(L.$$.fragment,Ct),Ct.forEach(t),It.forEach(t),rt=c(Ke),fe=n(Ke,"SPAN",{});var Gt=l(fe);nt=u(Gt,"pip"),Gt.forEach(t),Ke.forEach(t),Ae=c(e),V=n(e,"P",{});var Ut=l(V);lt=u(Ut,"To install \u{1F917} Accelerate from pypi, perform:"),Ut.forEach(t),Pe=c(e),m(q.$$.fragment,e),ke=c(e),A=n(e,"H3",{class:!0});var Qe=l(A);T=n(Qe,"A",{id:!0,class:!0,href:!0});var Ht=l(T);ue=n(Ht,"SPAN",{});var Lt=l(ue);m(M.$$.fragment,Lt),Lt.forEach(t),Ht.forEach(t),st=c(Qe),he=n(Qe,"SPAN",{});var qt=l(he);ct=u(qt,"conda"),qt.forEach(t),Qe.forEach(t),Ee=c(e),W=n(e,"P",{});var Mt=l(W);pt=u(Mt,"\u{1F917} Accelerate can also be installed with conda with:"),Mt.forEach(t),xe=c(e),m(j.$$.fragment,e),Ne=c(e),P=n(e,"H3",{class:!0});var Ve=l(P);I=n(Ve,"A",{id:!0,class:!0,href:!0});var jt=l(I);me=n(jt,"SPAN",{});var Bt=l(me);m(B.$$.fragment,Bt),Bt.forEach(t),jt.forEach(t),ft=c(Ve),de=n(Ve,"SPAN",{});var Dt=l(de);ut=u(Dt,"Source"),Dt.forEach(t),Ve.forEach(t),Se=c(e),X=n(e,"P",{});var Ot=l(X);ht=u(Ot,`New features are added every day that haven\u2019t been released yet. To try them out yourself, install
from the GitHub repository:`),Ot.forEach(t),Te=c(e),m(D.$$.fragment,e),Ie=c(e),Y=n(e,"P",{});var zt=l(Y);mt=u(zt,`If you\u2019re working on contributing to the library or wish to play with the source code and see live
results as you run the code, an editable version can be installed from a locally-cloned version of the
repository:`),zt.forEach(t),Ce=c(e),m(O.$$.fragment,e),Ge=c(e),k=n(e,"H2",{class:!0});var We=l(k);C=n(We,"A",{id:!0,class:!0,href:!0});var Ft=l(C);ve=n(Ft,"SPAN",{});var Rt=l(ve);m(z.$$.fragment,Rt),Rt.forEach(t),Ft.forEach(t),dt=c(We),$e=n(We,"SPAN",{});var Jt=l($e);vt=u(Jt,"Configuring \u{1F917} Accelerate"),Jt.forEach(t),We.forEach(t),Ue=c(e),Z=n(e,"P",{});var Kt=l(Z);$t=u(Kt,`After installing, you need to configure \u{1F917} Accelerate for how the current system is setup for training.
To do so run the following and answer the questions prompted to you:`),Kt.forEach(t),He=c(e),m(F.$$.fragment,e),Le=c(e),ee=n(e,"P",{});var Qt=l(ee);_t=u(Qt,"To write a barebones configuration that doesn\u2019t include options such as DeepSpeed configuration or running on TPUs, you can quickly run:"),Qt.forEach(t),qe=c(e),m(R.$$.fragment,e),Me=c(e),te=n(e,"P",{});var Vt=l(te);gt=u(Vt,"\u{1F917} Accelerate will automatically utilize the maximum number of GPUs available and set the mixed precision mode."),Vt.forEach(t),je=c(e),ie=n(e,"P",{});var Wt=l(ie);wt=u(Wt,"To check that your configuration looks fine, run:"),Wt.forEach(t),Be=c(e),m(J.$$.fragment,e),De=c(e),ae=n(e,"P",{});var Xt=l(ae);yt=u(Xt,"An example output is shown below, which describes two GPUs on a single machine with no mixed precision being used:"),Xt.forEach(t),Oe=c(e),m(K.$$.fragment,e),this.h()},h(){p(g,"name","hf:doc:metadata"),p(g,"content",JSON.stringify(ri)),p(E,"id","installation-and-configuration"),p(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(E,"href","#installation-and-configuration"),p(w,"class","relative group"),p(N,"id","installing-accelerate"),p(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(N,"href","#installing-accelerate"),p(y,"class","relative group"),p(S,"id","pip"),p(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(S,"href","#pip"),p(b,"class","relative group"),p(T,"id","conda"),p(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(T,"href","#conda"),p(A,"class","relative group"),p(I,"id","source"),p(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(I,"href","#source"),p(P,"class","relative group"),p(C,"id","configuring-accelerate"),p(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(C,"href","#configuring-accelerate"),p(k,"class","relative group")},m(e,i){a(document.head,g),o(e,_e,i),o(e,w,i),a(w,E),a(E,re),d(U,re,null),a(w,Xe),a(w,ne),a(ne,Ye),o(e,ge,i),o(e,x,i),a(x,Ze),a(x,le),a(le,et),a(x,tt),o(e,we,i),o(e,y,i),a(y,N),a(N,se),d(H,se,null),a(y,it),a(y,ce),a(ce,at),o(e,ye,i),o(e,Q,i),a(Q,ot),o(e,be,i),o(e,b,i),a(b,S),a(S,pe),d(L,pe,null),a(b,rt),a(b,fe),a(fe,nt),o(e,Ae,i),o(e,V,i),a(V,lt),o(e,Pe,i),d(q,e,i),o(e,ke,i),o(e,A,i),a(A,T),a(T,ue),d(M,ue,null),a(A,st),a(A,he),a(he,ct),o(e,Ee,i),o(e,W,i),a(W,pt),o(e,xe,i),d(j,e,i),o(e,Ne,i),o(e,P,i),a(P,I),a(I,me),d(B,me,null),a(P,ft),a(P,de),a(de,ut),o(e,Se,i),o(e,X,i),a(X,ht),o(e,Te,i),d(D,e,i),o(e,Ie,i),o(e,Y,i),a(Y,mt),o(e,Ce,i),d(O,e,i),o(e,Ge,i),o(e,k,i),a(k,C),a(C,ve),d(z,ve,null),a(k,dt),a(k,$e),a($e,vt),o(e,Ue,i),o(e,Z,i),a(Z,$t),o(e,He,i),d(F,e,i),o(e,Le,i),o(e,ee,i),a(ee,_t),o(e,qe,i),d(R,e,i),o(e,Me,i),o(e,te,i),a(te,gt),o(e,je,i),o(e,ie,i),a(ie,wt),o(e,Be,i),d(J,e,i),o(e,De,i),o(e,ae,i),a(ae,yt),o(e,Oe,i),d(K,e,i),ze=!0},p:ii,i(e){ze||(v(U.$$.fragment,e),v(H.$$.fragment,e),v(L.$$.fragment,e),v(q.$$.fragment,e),v(M.$$.fragment,e),v(j.$$.fragment,e),v(B.$$.fragment,e),v(D.$$.fragment,e),v(O.$$.fragment,e),v(z.$$.fragment,e),v(F.$$.fragment,e),v(R.$$.fragment,e),v(J.$$.fragment,e),v(K.$$.fragment,e),ze=!0)},o(e){$(U.$$.fragment,e),$(H.$$.fragment,e),$(L.$$.fragment,e),$(q.$$.fragment,e),$(M.$$.fragment,e),$(j.$$.fragment,e),$(B.$$.fragment,e),$(D.$$.fragment,e),$(O.$$.fragment,e),$(z.$$.fragment,e),$(F.$$.fragment,e),$(R.$$.fragment,e),$(J.$$.fragment,e),$(K.$$.fragment,e),ze=!1},d(e){t(g),e&&t(_e),e&&t(w),_(U),e&&t(ge),e&&t(x),e&&t(we),e&&t(y),_(H),e&&t(ye),e&&t(Q),e&&t(be),e&&t(b),_(L),e&&t(Ae),e&&t(V),e&&t(Pe),_(q,e),e&&t(ke),e&&t(A),_(M),e&&t(Ee),e&&t(W),e&&t(xe),_(j,e),e&&t(Ne),e&&t(P),_(B),e&&t(Se),e&&t(X),e&&t(Te),_(D,e),e&&t(Ie),e&&t(Y),e&&t(Ce),_(O,e),e&&t(Ge),e&&t(k),_(z),e&&t(Ue),e&&t(Z),e&&t(He),_(F,e),e&&t(Le),e&&t(ee),e&&t(qe),_(R,e),e&&t(Me),e&&t(te),e&&t(je),e&&t(ie),e&&t(Be),_(J,e),e&&t(De),e&&t(ae),e&&t(Oe),_(K,e)}}}const ri={local:"installation-and-configuration",sections:[{local:"installing-accelerate",sections:[{local:"pip",title:"pip "},{local:"conda",title:"conda"},{local:"source",title:"Source"}],title:"Installing \u{1F917} Accelerate"},{local:"configuring-accelerate",title:"Configuring \u{1F917} Accelerate"}],title:"Installation and Configuration"};function ni(bt){return ai(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class pi extends Yt{constructor(g){super();Zt(this,g,ni,oi,ei,{})}}export{pi as default,ri as metadata};
