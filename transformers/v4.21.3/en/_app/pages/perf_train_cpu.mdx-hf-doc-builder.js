import{S as Ut,i as kt,s as Mt,e as o,k as h,w as H,t as l,M as Ft,c as a,d as t,m as c,a as r,x as G,h as p,b as f,G as n,g as s,y as D,L as St,q as R,o as J,B as O,v as Bt}from"../chunks/vendor-hf-doc-builder.js";import{I as Ce}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as Tt}from"../chunks/CodeBlock-hf-doc-builder.js";function qt(at){let u,re,m,v,K,g,Te,Q,Ue,se,S,ke,le,d,w,W,A,Me,Y,Fe,pe,B,Se,fe,q,Be,he,b,qe,X,Ve,Le,ce,_,x,Z,I,Ne,ee,je,ue,V,ze,me,L,He,de,C,_e,N,Ge,Pe,T,ve,E,De,U,Re,Je,we,P,y,te,k,Oe,ne,Ke,be,M,Qe,F,We,xe,j,z,Ye,$,Ze,ie,et,tt,oe,nt,Ee;return g=new Ce({}),A=new Ce({}),I=new Ce({}),C=new Tt({props:{code:"pip install intel_extension_for_pytorch==1.10.100+cpu -f https://software.intel.com/ipex-whl-stable",highlighted:'<span class="hljs-attribute">pip</span> install intel_extension_for_pytorch==<span class="hljs-number">1</span>.<span class="hljs-number">10</span>.<span class="hljs-number">100</span>+cpu -f https://software.intel.com/ipex-whl-stable'}}),T=new Tt({props:{code:"pip install intel_extension_for_pytorch==1.11.200+cpu -f https://software.intel.com/ipex-whl-stable",highlighted:'<span class="hljs-attribute">pip</span> install intel_extension_for_pytorch==<span class="hljs-number">1</span>.<span class="hljs-number">11</span>.<span class="hljs-number">200</span>+cpu -f https://software.intel.com/ipex-whl-stable'}}),k=new Ce({}),{c(){u=o("meta"),re=h(),m=o("h1"),v=o("a"),K=o("span"),H(g.$$.fragment),Te=h(),Q=o("span"),Ue=l("Efficient Training on CPU"),se=h(),S=o("p"),ke=l("This guide focuses on training large models efficiently on CPU."),le=h(),d=o("h2"),w=o("a"),W=o("span"),H(A.$$.fragment),Me=h(),Y=o("span"),Fe=l("Mixed precision with IPEX"),pe=h(),B=o("p"),Se=l("IPEX is optimized for CPUs with AVX-512 or above, and functionally works for CPUs with only AVX2. So, it is expected to bring performance benefit for Intel CPU generations with AVX-512 or above while CPUs with only AVX2 (e.g., AMD CPUs or older Intel CPUs) might result in a better performance under IPEX, but not guaranteed. IPEX provides performance optimizations for CPU training with both Float32 and BFloat16. The usage of BFloat16 is the main focus of the following sections."),fe=h(),q=o("p"),Be=l("Low precision data type BFloat16 has been natively supported on the 3rd Generation Xeon\xAE Scalable Processors (aka Cooper Lake) with AVX512 instruction set and will be supported on the next generation of Intel\xAE Xeon\xAE Scalable Processors with Intel\xAE Advanced Matrix Extensions (Intel\xAE AMX) instruction set with further boosted performance. The Auto Mixed Precision for CPU backend has been enabled since PyTorch-1.10. At the same time, the support of Auto Mixed Precision with BFloat16 for CPU and BFloat16 optimization of operators has been massively enabled in Intel\xAE Extension for PyTorch, and partially upstreamed to PyTorch master branch. Users can get better performance and user experience with IPEX Auto Mixed Precision."),he=h(),b=o("p"),qe=l("Check more detailed information for "),X=o("a"),Ve=l("Auto Mixed Precision"),Le=l("."),ce=h(),_=o("h3"),x=o("a"),Z=o("span"),H(I.$$.fragment),Ne=h(),ee=o("span"),je=l("IPEX installation:"),ue=h(),V=o("p"),ze=l("IPEX release is following PyTorch, to install via pip:"),me=h(),L=o("p"),He=l("For PyTorch-1.10:"),de=h(),H(C.$$.fragment),_e=h(),N=o("p"),Ge=l("For PyTorch-1.11:"),Pe=h(),H(T.$$.fragment),ve=h(),E=o("p"),De=l("Check more approaches for "),U=o("a"),Re=l("IPEX installation"),Je=l("."),we=h(),P=o("h3"),y=o("a"),te=o("span"),H(k.$$.fragment),Oe=h(),ne=o("span"),Ke=l("Usage in Trainer"),be=l("\n\nTo enable auto mixed precision with IPEX in Trainer, users should add `use_ipex`, `bf16` and `no_cuda` in training command arguments.\n"),M=o("p"),Qe=l("Take an example of the use cases on "),F=o("a"),We=l("Transformers question-answering"),xe=h(),j=o("ul"),z=o("li"),Ye=l("Training with IPEX using BF16 auto mixed precision on CPU:"),$=o("pre"),Ze=l(` python run_qa.py \\
--model_name_or_path bert-base-uncased \\
--dataset_name squad \\
--do_train \\
--do_eval \\
--per_device_train_batch_size 12 \\
--learning_rate 3e-5 \\
--num_train_epochs 2 \\
--max_seq_length 384 \\
--doc_stride 128 \\
--output_dir /tmp/debug_squad/ \\
`),ie=o("b"),et=l("--use_ipex \\"),tt=l(`
`),oe=o("b"),nt=l("--bf16 --no_cuda"),this.h()},l(e){const i=Ft('[data-svelte="svelte-1phssyn"]',document.head);u=a(i,"META",{name:!0,content:!0}),i.forEach(t),re=c(e),m=a(e,"H1",{class:!0});var ye=r(m);v=a(ye,"A",{id:!0,class:!0,href:!0});var rt=r(v);K=a(rt,"SPAN",{});var st=r(K);G(g.$$.fragment,st),st.forEach(t),rt.forEach(t),Te=c(ye),Q=a(ye,"SPAN",{});var lt=r(Q);Ue=p(lt,"Efficient Training on CPU"),lt.forEach(t),ye.forEach(t),se=c(e),S=a(e,"P",{});var pt=r(S);ke=p(pt,"This guide focuses on training large models efficiently on CPU."),pt.forEach(t),le=c(e),d=a(e,"H2",{class:!0});var $e=r(d);w=a($e,"A",{id:!0,class:!0,href:!0});var ft=r(w);W=a(ft,"SPAN",{});var ht=r(W);G(A.$$.fragment,ht),ht.forEach(t),ft.forEach(t),Me=c($e),Y=a($e,"SPAN",{});var ct=r(Y);Fe=p(ct,"Mixed precision with IPEX"),ct.forEach(t),$e.forEach(t),pe=c(e),B=a(e,"P",{});var ut=r(B);Se=p(ut,"IPEX is optimized for CPUs with AVX-512 or above, and functionally works for CPUs with only AVX2. So, it is expected to bring performance benefit for Intel CPU generations with AVX-512 or above while CPUs with only AVX2 (e.g., AMD CPUs or older Intel CPUs) might result in a better performance under IPEX, but not guaranteed. IPEX provides performance optimizations for CPU training with both Float32 and BFloat16. The usage of BFloat16 is the main focus of the following sections."),ut.forEach(t),fe=c(e),q=a(e,"P",{});var mt=r(q);Be=p(mt,"Low precision data type BFloat16 has been natively supported on the 3rd Generation Xeon\xAE Scalable Processors (aka Cooper Lake) with AVX512 instruction set and will be supported on the next generation of Intel\xAE Xeon\xAE Scalable Processors with Intel\xAE Advanced Matrix Extensions (Intel\xAE AMX) instruction set with further boosted performance. The Auto Mixed Precision for CPU backend has been enabled since PyTorch-1.10. At the same time, the support of Auto Mixed Precision with BFloat16 for CPU and BFloat16 optimization of operators has been massively enabled in Intel\xAE Extension for PyTorch, and partially upstreamed to PyTorch master branch. Users can get better performance and user experience with IPEX Auto Mixed Precision."),mt.forEach(t),he=c(e),b=a(e,"P",{});var ge=r(b);qe=p(ge,"Check more detailed information for "),X=a(ge,"A",{href:!0,rel:!0});var dt=r(X);Ve=p(dt,"Auto Mixed Precision"),dt.forEach(t),Le=p(ge,"."),ge.forEach(t),ce=c(e),_=a(e,"H3",{class:!0});var Ae=r(_);x=a(Ae,"A",{id:!0,class:!0,href:!0});var _t=r(x);Z=a(_t,"SPAN",{});var Pt=r(Z);G(I.$$.fragment,Pt),Pt.forEach(t),_t.forEach(t),Ne=c(Ae),ee=a(Ae,"SPAN",{});var vt=r(ee);je=p(vt,"IPEX installation:"),vt.forEach(t),Ae.forEach(t),ue=c(e),V=a(e,"P",{});var wt=r(V);ze=p(wt,"IPEX release is following PyTorch, to install via pip:"),wt.forEach(t),me=c(e),L=a(e,"P",{});var bt=r(L);He=p(bt,"For PyTorch-1.10:"),bt.forEach(t),de=c(e),G(C.$$.fragment,e),_e=c(e),N=a(e,"P",{});var xt=r(N);Ge=p(xt,"For PyTorch-1.11:"),xt.forEach(t),Pe=c(e),G(T.$$.fragment,e),ve=c(e),E=a(e,"P",{});var Xe=r(E);De=p(Xe,"Check more approaches for "),U=a(Xe,"A",{href:!0,rel:!0});var Et=r(U);Re=p(Et,"IPEX installation"),Et.forEach(t),Je=p(Xe,"."),Xe.forEach(t),we=c(e),P=a(e,"H3",{class:!0});var Ie=r(P);y=a(Ie,"A",{id:!0,class:!0,href:!0});var yt=r(y);te=a(yt,"SPAN",{});var $t=r(te);G(k.$$.fragment,$t),$t.forEach(t),yt.forEach(t),Oe=c(Ie),ne=a(Ie,"SPAN",{});var gt=r(ne);Ke=p(gt,"Usage in Trainer"),gt.forEach(t),Ie.forEach(t),be=p(e,"\n\nTo enable auto mixed precision with IPEX in Trainer, users should add `use_ipex`, `bf16` and `no_cuda` in training command arguments.\n"),M=a(e,"P",{});var it=r(M);Qe=p(it,"Take an example of the use cases on "),F=a(it,"A",{href:!0,rel:!0});var At=r(F);We=p(At,"Transformers question-answering"),At.forEach(t),it.forEach(t),xe=c(e),j=a(e,"UL",{});var Xt=r(j);z=a(Xt,"LI",{});var ot=r(z);Ye=p(ot,"Training with IPEX using BF16 auto mixed precision on CPU:"),$=a(ot,"PRE",{});var ae=r($);Ze=p(ae,` python run_qa.py \\
--model_name_or_path bert-base-uncased \\
--dataset_name squad \\
--do_train \\
--do_eval \\
--per_device_train_batch_size 12 \\
--learning_rate 3e-5 \\
--num_train_epochs 2 \\
--max_seq_length 384 \\
--doc_stride 128 \\
--output_dir /tmp/debug_squad/ \\
`),ie=a(ae,"B",{});var It=r(ie);et=p(It,"--use_ipex \\"),It.forEach(t),tt=p(ae,`
`),oe=a(ae,"B",{});var Ct=r(oe);nt=p(Ct,"--bf16 --no_cuda"),Ct.forEach(t),ae.forEach(t),ot.forEach(t),Xt.forEach(t),this.h()},h(){f(u,"name","hf:doc:metadata"),f(u,"content",JSON.stringify(Vt)),f(v,"id","efficient-training-on-cpu"),f(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(v,"href","#efficient-training-on-cpu"),f(m,"class","relative group"),f(w,"id","mixed-precision-with-ipex"),f(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(w,"href","#mixed-precision-with-ipex"),f(d,"class","relative group"),f(X,"href","https://intel.github.io/intel-extension-for-pytorch/1.11.200/tutorials/features/amp.html"),f(X,"rel","nofollow"),f(x,"id","ipex-installation"),f(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(x,"href","#ipex-installation"),f(_,"class","relative group"),f(U,"href","https://intel.github.io/intel-extension-for-pytorch/1.11.200/tutorials/installation.html"),f(U,"rel","nofollow"),f(y,"id","usage-in-trainer"),f(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(y,"href","#usage-in-trainer"),f(P,"class","relative group"),f(F,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/question-answering"),f(F,"rel","nofollow")},m(e,i){n(document.head,u),s(e,re,i),s(e,m,i),n(m,v),n(v,K),D(g,K,null),n(m,Te),n(m,Q),n(Q,Ue),s(e,se,i),s(e,S,i),n(S,ke),s(e,le,i),s(e,d,i),n(d,w),n(w,W),D(A,W,null),n(d,Me),n(d,Y),n(Y,Fe),s(e,pe,i),s(e,B,i),n(B,Se),s(e,fe,i),s(e,q,i),n(q,Be),s(e,he,i),s(e,b,i),n(b,qe),n(b,X),n(X,Ve),n(b,Le),s(e,ce,i),s(e,_,i),n(_,x),n(x,Z),D(I,Z,null),n(_,Ne),n(_,ee),n(ee,je),s(e,ue,i),s(e,V,i),n(V,ze),s(e,me,i),s(e,L,i),n(L,He),s(e,de,i),D(C,e,i),s(e,_e,i),s(e,N,i),n(N,Ge),s(e,Pe,i),D(T,e,i),s(e,ve,i),s(e,E,i),n(E,De),n(E,U),n(U,Re),n(E,Je),s(e,we,i),s(e,P,i),n(P,y),n(y,te),D(k,te,null),n(P,Oe),n(P,ne),n(ne,Ke),s(e,be,i),s(e,M,i),n(M,Qe),n(M,F),n(F,We),s(e,xe,i),s(e,j,i),n(j,z),n(z,Ye),n(z,$),n($,Ze),n($,ie),n(ie,et),n($,tt),n($,oe),n(oe,nt),Ee=!0},p:St,i(e){Ee||(R(g.$$.fragment,e),R(A.$$.fragment,e),R(I.$$.fragment,e),R(C.$$.fragment,e),R(T.$$.fragment,e),R(k.$$.fragment,e),Ee=!0)},o(e){J(g.$$.fragment,e),J(A.$$.fragment,e),J(I.$$.fragment,e),J(C.$$.fragment,e),J(T.$$.fragment,e),J(k.$$.fragment,e),Ee=!1},d(e){t(u),e&&t(re),e&&t(m),O(g),e&&t(se),e&&t(S),e&&t(le),e&&t(d),O(A),e&&t(pe),e&&t(B),e&&t(fe),e&&t(q),e&&t(he),e&&t(b),e&&t(ce),e&&t(_),O(I),e&&t(ue),e&&t(V),e&&t(me),e&&t(L),e&&t(de),O(C,e),e&&t(_e),e&&t(N),e&&t(Pe),O(T,e),e&&t(ve),e&&t(E),e&&t(we),e&&t(P),O(k),e&&t(be),e&&t(M),e&&t(xe),e&&t(j)}}}const Vt={local:"efficient-training-on-cpu",sections:[{local:"mixed-precision-with-ipex",sections:[{local:"ipex-installation",title:"IPEX installation:"},{local:"usage-in-trainer",title:"Usage in Trainer"}],title:"Mixed precision with IPEX"}],title:"Efficient Training on CPU"};function Lt(at){return Bt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ht extends Ut{constructor(u){super();kt(this,u,Lt,qt,Mt,{})}}export{Ht as default,Vt as metadata};
