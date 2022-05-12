import{S as fa,i as ca,s as ga,e as n,k as h,w as I,t as m,M as da,c as r,d as a,m as p,a as o,x as J,h as u,b as i,F as t,g as l,y as F,L as va,q as Y,o as D,B as q,v as wa}from"../../chunks/vendor-6b77c823.js";import{D as ua}from"../../chunks/Docstring-1088f2fb.js";import{I as Ce}from"../../chunks/IconCopyLink-7a11ce68.js";function Pa(Re){let f,te,c,C,R,T,ye,W,ke,ne,g,y,X,z,$e,B,_e,re,k,Te,E,ze,Ee,oe,N,Me,ie,H,O,Le,se,d,xe,M,Ge,Ae,L,Se,le,Z,Ne,he,v,$,Q,x,He,j,Ze,pe,w,G,Ie,K,Je,me,P,_,V,A,Fe,U,Ye,ue,b,S,De,ee,qe,fe;return T=new Ce({}),z=new Ce({}),x=new Ce({}),G=new ua({props:{name:"class transformers.CpmTokenizer",anchor:"transformers.CpmTokenizer",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.19.0/src/transformers/models/cpm/tokenization_cpm.py#L31"}}),A=new Ce({}),S=new ua({props:{name:"class transformers.CpmTokenizerFast",anchor:"transformers.CpmTokenizerFast",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.19.0/src/transformers/models/cpm/tokenization_cpm_fast.py#L34"}}),{c(){f=n("meta"),te=h(),c=n("h1"),C=n("a"),R=n("span"),I(T.$$.fragment),ye=h(),W=n("span"),ke=m("CPM"),ne=h(),g=n("h2"),y=n("a"),X=n("span"),I(z.$$.fragment),$e=h(),B=n("span"),_e=m("Overview"),re=h(),k=n("p"),Te=m("The CPM model was proposed in "),E=n("a"),ze=m("CPM: A Large-scale Generative Chinese Pre-trained Language Model"),Ee=m(` by Zhengyan Zhang, Xu Han, Hao Zhou, Pei Ke, Yuxian Gu, Deming Ye, Yujia Qin,
Yusheng Su, Haozhe Ji, Jian Guan, Fanchao Qi, Xiaozhi Wang, Yanan Zheng, Guoyang Zeng, Huanqi Cao, Shengqi Chen,
Daixuan Li, Zhenbo Sun, Zhiyuan Liu, Minlie Huang, Wentao Han, Jie Tang, Juanzi Li, Xiaoyan Zhu, Maosong Sun.`),oe=h(),N=n("p"),Me=m("The abstract from the paper is the following:"),ie=h(),H=n("p"),O=n("em"),Le=m(`Pre-trained Language Models (PLMs) have proven to be beneficial for various downstream NLP tasks. Recently, GPT-3,
with 175 billion parameters and 570GB training data, drew a lot of attention due to the capacity of few-shot (even
zero-shot) learning. However, applying GPT-3 to address Chinese NLP tasks is still challenging, as the training corpus
of GPT-3 is primarily English, and the parameters are not publicly available. In this technical report, we release the
Chinese Pre-trained Language Model (CPM) with generative pre-training on large-scale Chinese training data. To the best
of our knowledge, CPM, with 2.6 billion parameters and 100GB Chinese training data, is the largest Chinese pre-trained
language model, which could facilitate several downstream Chinese NLP tasks, such as conversation, essay generation,
cloze test, and language understanding. Extensive experiments demonstrate that CPM achieves strong performance on many
NLP tasks in the settings of few-shot (even zero-shot) learning.`),se=h(),d=n("p"),xe=m("This model was contributed by "),M=n("a"),Ge=m("canwenxu"),Ae=m(`. The original implementation can be found
here: `),L=n("a"),Se=m("https://github.com/TsinghuaAI/CPM-Generate"),le=h(),Z=n("p"),Ne=m("Note: We only have a tokenizer here, since the model architecture is the same as GPT-2."),he=h(),v=n("h2"),$=n("a"),Q=n("span"),I(x.$$.fragment),He=h(),j=n("span"),Ze=m("CpmTokenizer"),pe=h(),w=n("div"),I(G.$$.fragment),Ie=h(),K=n("p"),Je=m("Runs pre-tokenization with Jieba segmentation tool. It is used in CPM models."),me=h(),P=n("h2"),_=n("a"),V=n("span"),I(A.$$.fragment),Fe=h(),U=n("span"),Ye=m("CpmTokenizerFast"),ue=h(),b=n("div"),I(S.$$.fragment),De=h(),ee=n("p"),qe=m("Runs pre-tokenization with Jieba segmentation tool. It is used in CPM models."),this.h()},l(e){const s=da('[data-svelte="svelte-1phssyn"]',document.head);f=r(s,"META",{name:!0,content:!0}),s.forEach(a),te=p(e),c=r(e,"H1",{class:!0});var ce=o(c);C=r(ce,"A",{id:!0,class:!0,href:!0});var We=o(C);R=r(We,"SPAN",{});var Xe=o(R);J(T.$$.fragment,Xe),Xe.forEach(a),We.forEach(a),ye=p(ce),W=r(ce,"SPAN",{});var Be=o(W);ke=u(Be,"CPM"),Be.forEach(a),ce.forEach(a),ne=p(e),g=r(e,"H2",{class:!0});var ge=o(g);y=r(ge,"A",{id:!0,class:!0,href:!0});var Oe=o(y);X=r(Oe,"SPAN",{});var Qe=o(X);J(z.$$.fragment,Qe),Qe.forEach(a),Oe.forEach(a),$e=p(ge),B=r(ge,"SPAN",{});var je=o(B);_e=u(je,"Overview"),je.forEach(a),ge.forEach(a),re=p(e),k=r(e,"P",{});var de=o(k);Te=u(de,"The CPM model was proposed in "),E=r(de,"A",{href:!0,rel:!0});var Ke=o(E);ze=u(Ke,"CPM: A Large-scale Generative Chinese Pre-trained Language Model"),Ke.forEach(a),Ee=u(de,` by Zhengyan Zhang, Xu Han, Hao Zhou, Pei Ke, Yuxian Gu, Deming Ye, Yujia Qin,
Yusheng Su, Haozhe Ji, Jian Guan, Fanchao Qi, Xiaozhi Wang, Yanan Zheng, Guoyang Zeng, Huanqi Cao, Shengqi Chen,
Daixuan Li, Zhenbo Sun, Zhiyuan Liu, Minlie Huang, Wentao Han, Jie Tang, Juanzi Li, Xiaoyan Zhu, Maosong Sun.`),de.forEach(a),oe=p(e),N=r(e,"P",{});var Ve=o(N);Me=u(Ve,"The abstract from the paper is the following:"),Ve.forEach(a),ie=p(e),H=r(e,"P",{});var Ue=o(H);O=r(Ue,"EM",{});var ea=o(O);Le=u(ea,`Pre-trained Language Models (PLMs) have proven to be beneficial for various downstream NLP tasks. Recently, GPT-3,
with 175 billion parameters and 570GB training data, drew a lot of attention due to the capacity of few-shot (even
zero-shot) learning. However, applying GPT-3 to address Chinese NLP tasks is still challenging, as the training corpus
of GPT-3 is primarily English, and the parameters are not publicly available. In this technical report, we release the
Chinese Pre-trained Language Model (CPM) with generative pre-training on large-scale Chinese training data. To the best
of our knowledge, CPM, with 2.6 billion parameters and 100GB Chinese training data, is the largest Chinese pre-trained
language model, which could facilitate several downstream Chinese NLP tasks, such as conversation, essay generation,
cloze test, and language understanding. Extensive experiments demonstrate that CPM achieves strong performance on many
NLP tasks in the settings of few-shot (even zero-shot) learning.`),ea.forEach(a),Ue.forEach(a),se=p(e),d=r(e,"P",{});var ae=o(d);xe=u(ae,"This model was contributed by "),M=r(ae,"A",{href:!0,rel:!0});var aa=o(M);Ge=u(aa,"canwenxu"),aa.forEach(a),Ae=u(ae,`. The original implementation can be found
here: `),L=r(ae,"A",{href:!0,rel:!0});var ta=o(L);Se=u(ta,"https://github.com/TsinghuaAI/CPM-Generate"),ta.forEach(a),ae.forEach(a),le=p(e),Z=r(e,"P",{});var na=o(Z);Ne=u(na,"Note: We only have a tokenizer here, since the model architecture is the same as GPT-2."),na.forEach(a),he=p(e),v=r(e,"H2",{class:!0});var ve=o(v);$=r(ve,"A",{id:!0,class:!0,href:!0});var ra=o($);Q=r(ra,"SPAN",{});var oa=o(Q);J(x.$$.fragment,oa),oa.forEach(a),ra.forEach(a),He=p(ve),j=r(ve,"SPAN",{});var ia=o(j);Ze=u(ia,"CpmTokenizer"),ia.forEach(a),ve.forEach(a),pe=p(e),w=r(e,"DIV",{class:!0});var we=o(w);J(G.$$.fragment,we),Ie=p(we),K=r(we,"P",{});var sa=o(K);Je=u(sa,"Runs pre-tokenization with Jieba segmentation tool. It is used in CPM models."),sa.forEach(a),we.forEach(a),me=p(e),P=r(e,"H2",{class:!0});var Pe=o(P);_=r(Pe,"A",{id:!0,class:!0,href:!0});var la=o(_);V=r(la,"SPAN",{});var ha=o(V);J(A.$$.fragment,ha),ha.forEach(a),la.forEach(a),Fe=p(Pe),U=r(Pe,"SPAN",{});var pa=o(U);Ye=u(pa,"CpmTokenizerFast"),pa.forEach(a),Pe.forEach(a),ue=p(e),b=r(e,"DIV",{class:!0});var be=o(b);J(S.$$.fragment,be),De=p(be),ee=r(be,"P",{});var ma=o(ee);qe=u(ma,"Runs pre-tokenization with Jieba segmentation tool. It is used in CPM models."),ma.forEach(a),be.forEach(a),this.h()},h(){i(f,"name","hf:doc:metadata"),i(f,"content",JSON.stringify(ba)),i(C,"id","cpm"),i(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(C,"href","#cpm"),i(c,"class","relative group"),i(y,"id","overview"),i(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(y,"href","#overview"),i(g,"class","relative group"),i(E,"href","https://arxiv.org/abs/2012.00413"),i(E,"rel","nofollow"),i(M,"href","https://huggingface.co/canwenxu"),i(M,"rel","nofollow"),i(L,"href","https://github.com/TsinghuaAI/CPM-Generate"),i(L,"rel","nofollow"),i($,"id","transformers.CpmTokenizer"),i($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i($,"href","#transformers.CpmTokenizer"),i(v,"class","relative group"),i(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(_,"id","transformers.CpmTokenizerFast"),i(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(_,"href","#transformers.CpmTokenizerFast"),i(P,"class","relative group"),i(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,s){t(document.head,f),l(e,te,s),l(e,c,s),t(c,C),t(C,R),F(T,R,null),t(c,ye),t(c,W),t(W,ke),l(e,ne,s),l(e,g,s),t(g,y),t(y,X),F(z,X,null),t(g,$e),t(g,B),t(B,_e),l(e,re,s),l(e,k,s),t(k,Te),t(k,E),t(E,ze),t(k,Ee),l(e,oe,s),l(e,N,s),t(N,Me),l(e,ie,s),l(e,H,s),t(H,O),t(O,Le),l(e,se,s),l(e,d,s),t(d,xe),t(d,M),t(M,Ge),t(d,Ae),t(d,L),t(L,Se),l(e,le,s),l(e,Z,s),t(Z,Ne),l(e,he,s),l(e,v,s),t(v,$),t($,Q),F(x,Q,null),t(v,He),t(v,j),t(j,Ze),l(e,pe,s),l(e,w,s),F(G,w,null),t(w,Ie),t(w,K),t(K,Je),l(e,me,s),l(e,P,s),t(P,_),t(_,V),F(A,V,null),t(P,Fe),t(P,U),t(U,Ye),l(e,ue,s),l(e,b,s),F(S,b,null),t(b,De),t(b,ee),t(ee,qe),fe=!0},p:va,i(e){fe||(Y(T.$$.fragment,e),Y(z.$$.fragment,e),Y(x.$$.fragment,e),Y(G.$$.fragment,e),Y(A.$$.fragment,e),Y(S.$$.fragment,e),fe=!0)},o(e){D(T.$$.fragment,e),D(z.$$.fragment,e),D(x.$$.fragment,e),D(G.$$.fragment,e),D(A.$$.fragment,e),D(S.$$.fragment,e),fe=!1},d(e){a(f),e&&a(te),e&&a(c),q(T),e&&a(ne),e&&a(g),q(z),e&&a(re),e&&a(k),e&&a(oe),e&&a(N),e&&a(ie),e&&a(H),e&&a(se),e&&a(d),e&&a(le),e&&a(Z),e&&a(he),e&&a(v),q(x),e&&a(pe),e&&a(w),q(G),e&&a(me),e&&a(P),q(A),e&&a(ue),e&&a(b),q(S)}}}const ba={local:"cpm",sections:[{local:"overview",title:"Overview"},{local:"transformers.CpmTokenizer",title:"CpmTokenizer"},{local:"transformers.CpmTokenizerFast",title:"CpmTokenizerFast"}],title:"CPM"};function Ca(Re){return wa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _a extends fa{constructor(f){super();ca(this,f,Ca,Pa,ga,{})}}export{_a as default,ba as metadata};
