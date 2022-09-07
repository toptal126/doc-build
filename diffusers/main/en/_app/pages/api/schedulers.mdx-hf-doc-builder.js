import{S as lt,i as st,s as nt,e as o,k as p,w as ke,t as s,M as it,c as r,d as a,m as c,a as l,x as Le,h as n,b as i,G as e,g as f,y as Oe,L as ht,q as Ie,o as Ge,B as He,v as dt}from"../../chunks/vendor-hf-doc-builder.js";import{I as Ce}from"../../chunks/IconCopyLink-hf-doc-builder.js";function ft(qe){let _,R,E,w,I,y,re,G,le,j,u,se,H,ne,ie,C,he,de,K,b,x,q,A,fe,z,pe,Q,$,ce,F,ue,me,W,g,M,V,N,ve,B,_e,X,m,T,Ee,S,be,ge,we,d,xe,D,$e,Me,P,ye,Ae,U,Ne,Te,k,Se,De,Pe,J,Ue,Y;return y=new Ce({}),A=new Ce({}),N=new Ce({}),{c(){_=o("meta"),R=p(),E=o("h1"),w=o("a"),I=o("span"),ke(y.$$.fragment),re=p(),G=o("span"),le=s("Models"),j=p(),u=o("p"),se=s(`Diffusers contains pretrained models for popular algorithms and modules for creating the next set of diffusion models.
The primary function of these models is to denoise an input sample, by modeling the distribution $p`),H=o("em"),ne=s("\\theta(\\mathbf{x}"),ie=s(`{t-1}|\\mathbf{x}_t)$.
The models are built on the base class [\u2018ModelMixin\u2019] that is a `),C=o("code"),he=s("torch.nn.module"),de=s(" with basic functionality for saving and loading models both locally and from the HuggingFace hub."),K=p(),b=o("h2"),x=o("a"),q=o("span"),ke(A.$$.fragment),fe=p(),z=o("span"),pe=s("API"),Q=p(),$=o("p"),ce=s("Models should provide the "),F=o("code"),ue=s("def forward"),me=s(` function and initialization of the model.
All saving, loading, and utilities should be in the base [\u2018ModelMixin\u2019] class.`),W=p(),g=o("h2"),M=o("a"),V=o("span"),ke(N.$$.fragment),ve=p(),B=o("span"),_e=s("Examples"),X=p(),m=o("ul"),T=o("li"),Ee=s("The [\u2018UNetModel\u2019] was proposed in "),S=o("a"),be=s("TODO"),ge=s(" and has been used in paper1, paper2, paper3."),we=p(),d=o("li"),xe=s("Extensions of the [\u2018UNetModel\u2019] include the [\u2018UNetGlideModel\u2019] that uses attention and timestep embeddings for the "),D=o("a"),$e=s("GLIDE"),Me=s(" paper, the [\u2018UNetGradTTS\u2019] model from this "),P=o("a"),ye=s("paper"),Ae=s(" for text-to-speech, [\u2018UNetLDMModel\u2019] for latent-diffusion models in this "),U=o("a"),Ne=s("paper"),Te=s(", and the [\u2018TemporalUNet\u2019] used for time-series prediciton in this reinforcement learning "),k=o("a"),Se=s("paper"),De=s("."),Pe=p(),J=o("li"),Ue=s("TODO: mention VAE / SDE score estimation"),this.h()},l(t){const h=it('[data-svelte="svelte-1phssyn"]',document.head);_=r(h,"META",{name:!0,content:!0}),h.forEach(a),R=c(t),E=r(t,"H1",{class:!0});var Z=l(E);w=r(Z,"A",{id:!0,class:!0,href:!0});var ze=l(w);I=r(ze,"SPAN",{});var Fe=l(I);Le(y.$$.fragment,Fe),Fe.forEach(a),ze.forEach(a),re=c(Z),G=r(Z,"SPAN",{});var Ve=l(G);le=n(Ve,"Models"),Ve.forEach(a),Z.forEach(a),j=c(t),u=r(t,"P",{});var L=l(u);se=n(L,`Diffusers contains pretrained models for popular algorithms and modules for creating the next set of diffusion models.
The primary function of these models is to denoise an input sample, by modeling the distribution $p`),H=r(L,"EM",{});var Be=l(H);ne=n(Be,"\\theta(\\mathbf{x}"),Be.forEach(a),ie=n(L,`{t-1}|\\mathbf{x}_t)$.
The models are built on the base class [\u2018ModelMixin\u2019] that is a `),C=r(L,"CODE",{});var Je=l(C);he=n(Je,"torch.nn.module"),Je.forEach(a),de=n(L," with basic functionality for saving and loading models both locally and from the HuggingFace hub."),L.forEach(a),K=c(t),b=r(t,"H2",{class:!0});var ee=l(b);x=r(ee,"A",{id:!0,class:!0,href:!0});var Re=l(x);q=r(Re,"SPAN",{});var je=l(q);Le(A.$$.fragment,je),je.forEach(a),Re.forEach(a),fe=c(ee),z=r(ee,"SPAN",{});var Ke=l(z);pe=n(Ke,"API"),Ke.forEach(a),ee.forEach(a),Q=c(t),$=r(t,"P",{});var te=l($);ce=n(te,"Models should provide the "),F=r(te,"CODE",{});var Qe=l(F);ue=n(Qe,"def forward"),Qe.forEach(a),me=n(te,` function and initialization of the model.
All saving, loading, and utilities should be in the base [\u2018ModelMixin\u2019] class.`),te.forEach(a),W=c(t),g=r(t,"H2",{class:!0});var ae=l(g);M=r(ae,"A",{id:!0,class:!0,href:!0});var We=l(M);V=r(We,"SPAN",{});var Xe=l(V);Le(N.$$.fragment,Xe),Xe.forEach(a),We.forEach(a),ve=c(ae),B=r(ae,"SPAN",{});var Ye=l(B);_e=n(Ye,"Examples"),Ye.forEach(a),ae.forEach(a),X=c(t),m=r(t,"UL",{});var O=l(m);T=r(O,"LI",{});var oe=l(T);Ee=n(oe,"The [\u2018UNetModel\u2019] was proposed in "),S=r(oe,"A",{href:!0,rel:!0});var Ze=l(S);be=n(Ze,"TODO"),Ze.forEach(a),ge=n(oe," and has been used in paper1, paper2, paper3."),oe.forEach(a),we=c(O),d=r(O,"LI",{});var v=l(d);xe=n(v,"Extensions of the [\u2018UNetModel\u2019] include the [\u2018UNetGlideModel\u2019] that uses attention and timestep embeddings for the "),D=r(v,"A",{href:!0,rel:!0});var et=l(D);$e=n(et,"GLIDE"),et.forEach(a),Me=n(v," paper, the [\u2018UNetGradTTS\u2019] model from this "),P=r(v,"A",{href:!0,rel:!0});var tt=l(P);ye=n(tt,"paper"),tt.forEach(a),Ae=n(v," for text-to-speech, [\u2018UNetLDMModel\u2019] for latent-diffusion models in this "),U=r(v,"A",{href:!0,rel:!0});var at=l(U);Ne=n(at,"paper"),at.forEach(a),Te=n(v,", and the [\u2018TemporalUNet\u2019] used for time-series prediciton in this reinforcement learning "),k=r(v,"A",{href:!0,rel:!0});var ot=l(k);Se=n(ot,"paper"),ot.forEach(a),De=n(v,"."),v.forEach(a),Pe=c(O),J=r(O,"LI",{});var rt=l(J);Ue=n(rt,"TODO: mention VAE / SDE score estimation"),rt.forEach(a),O.forEach(a),this.h()},h(){i(_,"name","hf:doc:metadata"),i(_,"content",JSON.stringify(pt)),i(w,"id","models"),i(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(w,"href","#models"),i(E,"class","relative group"),i(x,"id","api"),i(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(x,"href","#api"),i(b,"class","relative group"),i(M,"id","examples"),i(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(M,"href","#examples"),i(g,"class","relative group"),i(S,"href","https://arxiv.org/"),i(S,"rel","nofollow"),i(D,"href","https://arxiv.org/abs/2112.10741"),i(D,"rel","nofollow"),i(P,"href","https://arxiv.org/abs/2105.06337"),i(P,"rel","nofollow"),i(U,"href","https://arxiv.org/abs/2112.10752"),i(U,"rel","nofollow"),i(k,"href","https://arxiv.org/abs/2205.09991"),i(k,"rel","nofollow")},m(t,h){e(document.head,_),f(t,R,h),f(t,E,h),e(E,w),e(w,I),Oe(y,I,null),e(E,re),e(E,G),e(G,le),f(t,j,h),f(t,u,h),e(u,se),e(u,H),e(H,ne),e(u,ie),e(u,C),e(C,he),e(u,de),f(t,K,h),f(t,b,h),e(b,x),e(x,q),Oe(A,q,null),e(b,fe),e(b,z),e(z,pe),f(t,Q,h),f(t,$,h),e($,ce),e($,F),e(F,ue),e($,me),f(t,W,h),f(t,g,h),e(g,M),e(M,V),Oe(N,V,null),e(g,ve),e(g,B),e(B,_e),f(t,X,h),f(t,m,h),e(m,T),e(T,Ee),e(T,S),e(S,be),e(T,ge),e(m,we),e(m,d),e(d,xe),e(d,D),e(D,$e),e(d,Me),e(d,P),e(P,ye),e(d,Ae),e(d,U),e(U,Ne),e(d,Te),e(d,k),e(k,Se),e(d,De),e(m,Pe),e(m,J),e(J,Ue),Y=!0},p:ht,i(t){Y||(Ie(y.$$.fragment,t),Ie(A.$$.fragment,t),Ie(N.$$.fragment,t),Y=!0)},o(t){Ge(y.$$.fragment,t),Ge(A.$$.fragment,t),Ge(N.$$.fragment,t),Y=!1},d(t){a(_),t&&a(R),t&&a(E),He(y),t&&a(j),t&&a(u),t&&a(K),t&&a(b),He(A),t&&a(Q),t&&a($),t&&a(W),t&&a(g),He(N),t&&a(X),t&&a(m)}}}const pt={local:"models",sections:[{local:"api",title:"API"},{local:"examples",title:"Examples"}],title:"Models"};function ct(qe){return dt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vt extends lt{constructor(_){super();st(this,_,ct,ft,nt,{})}}export{vt as default,pt as metadata};
