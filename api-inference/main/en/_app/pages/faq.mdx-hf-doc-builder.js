import{S as Wt,i as Yt,s as Bt,e as n,k as u,w as B,t as h,M as Lt,c as a,d as t,m as c,a as o,x as L,h as f,b as i,G as r,g as l,y as G,L as Gt,q as O,o as J,B as U,v as Ot}from"../chunks/vendor-hf-doc-builder.js";import{I as j}from"../chunks/IconCopyLink-hf-doc-builder.js";function Jt(ut){let m,pe,d,_,X,N,Fe,Z,Me,me,v,k,ee,R,Ce,te,We,de,z,Ye,ve,y,E,re,q,Be,ne,Le,ye,A,Ge,H,Oe,Je,ge,g,P,ae,T,Ue,oe,je,we,D,ze,$e,w,I,ie,F,De,se,Ke,be,M,Qe,C,Ve,_e,$,S,le,W,Xe,ue,Ze,ke,K,et,Ee,b,x,he,Y,tt,ce,rt,Ae,p,nt,fe,at,ot,Q,it,st,Pe;return N=new j({}),R=new j({}),q=new j({}),T=new j({}),F=new j({}),W=new j({}),Y=new j({}),{c(){m=n("meta"),pe=u(),d=n("h1"),_=n("a"),X=n("span"),B(N.$$.fragment),Fe=u(),Z=n("span"),Me=h("More information about the API"),me=u(),v=n("h2"),k=n("a"),ee=n("span"),B(R.$$.fragment),Ce=u(),te=n("span"),We=h("Rate limits"),de=u(),z=n("p"),Ye=h(`The current API does not enforce strict rate limitations. Instead we
simply balance the loads evenly between all our available resources,
and favoring steady flows of requests. If your account suddenly sends
10k requests then you\u2019re likely to receive 503 errors saying models are
loading. In order to prevent that, you should instead try to start
running queries smoothly from 0 to 10k over the course of a few minutes.`),ve=u(),y=n("h2"),E=n("a"),re=n("span"),B(q.$$.fragment),Be=u(),ne=n("span"),Le=h("Running private models"),ye=u(),A=n("p"),Ge=h(`You can run private models by default ! If you don\u2019t see them on your
`),H=n("a"),Oe=h("Hugging Face"),Je=h(` page please make sure you are
logged in. Within the API make sure you include your token, otherwise
your model will be declared as non existent.`),ge=u(),g=n("h2"),P=n("a"),ae=n("span"),B(T.$$.fragment),Ue=u(),oe=n("span"),je=h("Running a public model that I do not own"),we=u(),D=n("p"),ze=h(`You can. Please check the model card for any licensing issue that might
arise, but most public models are delivered by researchers and are
usable within commercial products. But please double check.`),$e=u(),w=n("h2"),I=n("a"),ie=n("span"),B(F.$$.fragment),De=u(),se=n("span"),Ke=h("Finetuning a public model"),be=u(),M=n("p"),Qe=h(`We currently don\u2019t provide finetuning automatically for any model on
your data, but we announced a product in that sense:
`),C=n("a"),Ve=h("https://twitter.com/huggingface/status/1341435640458702849"),_e=u(),$=n("h2"),S=n("a"),le=n("span"),B(W.$$.fragment),Xe=u(),ue=n("span"),Ze=h("Tracking metrics"),ke=u(),K=n("p"),et=h(`This is an area of active improvement. Stay tuned as we release more
features to track your API usage!`),Ee=u(),b=n("h2"),x=n("a"),he=n("span"),B(Y.$$.fragment),tt=u(),ce=n("span"),rt=h("Running the inference on my infrastructure"),Ae=u(),p=n("p"),nt=h("Currently we do not provide "),fe=n("strong"),at=h("on premises"),ot=h(` inference out of the box. If
you want to use our Accelerated Inference on your infrastructure please contact us at `),Q=n("a"),it=h("api-enterprise@huggingface.co"),st=h("."),this.h()},l(e){const s=Lt('[data-svelte="svelte-1phssyn"]',document.head);m=a(s,"META",{name:!0,content:!0}),s.forEach(t),pe=c(e),d=a(e,"H1",{class:!0});var Ie=o(d);_=a(Ie,"A",{id:!0,class:!0,href:!0});var ht=o(_);X=a(ht,"SPAN",{});var ct=o(X);L(N.$$.fragment,ct),ct.forEach(t),ht.forEach(t),Fe=c(Ie),Z=a(Ie,"SPAN",{});var ft=o(Z);Me=f(ft,"More information about the API"),ft.forEach(t),Ie.forEach(t),me=c(e),v=a(e,"H2",{class:!0});var Se=o(v);k=a(Se,"A",{id:!0,class:!0,href:!0});var pt=o(k);ee=a(pt,"SPAN",{});var mt=o(ee);L(R.$$.fragment,mt),mt.forEach(t),pt.forEach(t),Ce=c(Se),te=a(Se,"SPAN",{});var dt=o(te);We=f(dt,"Rate limits"),dt.forEach(t),Se.forEach(t),de=c(e),z=a(e,"P",{});var vt=o(z);Ye=f(vt,`The current API does not enforce strict rate limitations. Instead we
simply balance the loads evenly between all our available resources,
and favoring steady flows of requests. If your account suddenly sends
10k requests then you\u2019re likely to receive 503 errors saying models are
loading. In order to prevent that, you should instead try to start
running queries smoothly from 0 to 10k over the course of a few minutes.`),vt.forEach(t),ve=c(e),y=a(e,"H2",{class:!0});var xe=o(y);E=a(xe,"A",{id:!0,class:!0,href:!0});var yt=o(E);re=a(yt,"SPAN",{});var gt=o(re);L(q.$$.fragment,gt),gt.forEach(t),yt.forEach(t),Be=c(xe),ne=a(xe,"SPAN",{});var wt=o(ne);Le=f(wt,"Running private models"),wt.forEach(t),xe.forEach(t),ye=c(e),A=a(e,"P",{});var Ne=o(A);Ge=f(Ne,`You can run private models by default ! If you don\u2019t see them on your
`),H=a(Ne,"A",{href:!0,rel:!0});var $t=o(H);Oe=f($t,"Hugging Face"),$t.forEach(t),Je=f(Ne,` page please make sure you are
logged in. Within the API make sure you include your token, otherwise
your model will be declared as non existent.`),Ne.forEach(t),ge=c(e),g=a(e,"H2",{class:!0});var Re=o(g);P=a(Re,"A",{id:!0,class:!0,href:!0});var bt=o(P);ae=a(bt,"SPAN",{});var _t=o(ae);L(T.$$.fragment,_t),_t.forEach(t),bt.forEach(t),Ue=c(Re),oe=a(Re,"SPAN",{});var kt=o(oe);je=f(kt,"Running a public model that I do not own"),kt.forEach(t),Re.forEach(t),we=c(e),D=a(e,"P",{});var Et=o(D);ze=f(Et,`You can. Please check the model card for any licensing issue that might
arise, but most public models are delivered by researchers and are
usable within commercial products. But please double check.`),Et.forEach(t),$e=c(e),w=a(e,"H2",{class:!0});var qe=o(w);I=a(qe,"A",{id:!0,class:!0,href:!0});var At=o(I);ie=a(At,"SPAN",{});var Pt=o(ie);L(F.$$.fragment,Pt),Pt.forEach(t),At.forEach(t),De=c(qe),se=a(qe,"SPAN",{});var It=o(se);Ke=f(It,"Finetuning a public model"),It.forEach(t),qe.forEach(t),be=c(e),M=a(e,"P",{});var lt=o(M);Qe=f(lt,`We currently don\u2019t provide finetuning automatically for any model on
your data, but we announced a product in that sense:
`),C=a(lt,"A",{href:!0,rel:!0});var St=o(C);Ve=f(St,"https://twitter.com/huggingface/status/1341435640458702849"),St.forEach(t),lt.forEach(t),_e=c(e),$=a(e,"H2",{class:!0});var He=o($);S=a(He,"A",{id:!0,class:!0,href:!0});var xt=o(S);le=a(xt,"SPAN",{});var Nt=o(le);L(W.$$.fragment,Nt),Nt.forEach(t),xt.forEach(t),Xe=c(He),ue=a(He,"SPAN",{});var Rt=o(ue);Ze=f(Rt,"Tracking metrics"),Rt.forEach(t),He.forEach(t),ke=c(e),K=a(e,"P",{});var qt=o(K);et=f(qt,`This is an area of active improvement. Stay tuned as we release more
features to track your API usage!`),qt.forEach(t),Ee=c(e),b=a(e,"H2",{class:!0});var Te=o(b);x=a(Te,"A",{id:!0,class:!0,href:!0});var Ht=o(x);he=a(Ht,"SPAN",{});var Tt=o(he);L(Y.$$.fragment,Tt),Tt.forEach(t),Ht.forEach(t),tt=c(Te),ce=a(Te,"SPAN",{});var Ft=o(ce);rt=f(Ft,"Running the inference on my infrastructure"),Ft.forEach(t),Te.forEach(t),Ae=c(e),p=a(e,"P",{});var V=o(p);nt=f(V,"Currently we do not provide "),fe=a(V,"STRONG",{});var Mt=o(fe);at=f(Mt,"on premises"),Mt.forEach(t),ot=f(V,` inference out of the box. If
you want to use our Accelerated Inference on your infrastructure please contact us at `),Q=a(V,"A",{href:!0});var Ct=o(Q);it=f(Ct,"api-enterprise@huggingface.co"),Ct.forEach(t),st=f(V,"."),V.forEach(t),this.h()},h(){i(m,"name","hf:doc:metadata"),i(m,"content",JSON.stringify(Ut)),i(_,"id","more-information-about-the-api"),i(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(_,"href","#more-information-about-the-api"),i(d,"class","relative group"),i(k,"id","rate-limits"),i(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(k,"href","#rate-limits"),i(v,"class","relative group"),i(E,"id","running-private-models"),i(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(E,"href","#running-private-models"),i(y,"class","relative group"),i(H,"href","https://huggingface.co"),i(H,"rel","nofollow"),i(P,"id","running-a-public-model-that-i-do-not-own"),i(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(P,"href","#running-a-public-model-that-i-do-not-own"),i(g,"class","relative group"),i(I,"id","finetuning-a-public-model"),i(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(I,"href","#finetuning-a-public-model"),i(w,"class","relative group"),i(C,"href","https://twitter.com/huggingface/status/1341435640458702849"),i(C,"rel","nofollow"),i(S,"id","tracking-metrics"),i(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(S,"href","#tracking-metrics"),i($,"class","relative group"),i(x,"id","running-the-inference-on-my-infrastructure"),i(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(x,"href","#running-the-inference-on-my-infrastructure"),i(b,"class","relative group"),i(Q,"href","mailto:api-enterprise@huggingface.co")},m(e,s){r(document.head,m),l(e,pe,s),l(e,d,s),r(d,_),r(_,X),G(N,X,null),r(d,Fe),r(d,Z),r(Z,Me),l(e,me,s),l(e,v,s),r(v,k),r(k,ee),G(R,ee,null),r(v,Ce),r(v,te),r(te,We),l(e,de,s),l(e,z,s),r(z,Ye),l(e,ve,s),l(e,y,s),r(y,E),r(E,re),G(q,re,null),r(y,Be),r(y,ne),r(ne,Le),l(e,ye,s),l(e,A,s),r(A,Ge),r(A,H),r(H,Oe),r(A,Je),l(e,ge,s),l(e,g,s),r(g,P),r(P,ae),G(T,ae,null),r(g,Ue),r(g,oe),r(oe,je),l(e,we,s),l(e,D,s),r(D,ze),l(e,$e,s),l(e,w,s),r(w,I),r(I,ie),G(F,ie,null),r(w,De),r(w,se),r(se,Ke),l(e,be,s),l(e,M,s),r(M,Qe),r(M,C),r(C,Ve),l(e,_e,s),l(e,$,s),r($,S),r(S,le),G(W,le,null),r($,Xe),r($,ue),r(ue,Ze),l(e,ke,s),l(e,K,s),r(K,et),l(e,Ee,s),l(e,b,s),r(b,x),r(x,he),G(Y,he,null),r(b,tt),r(b,ce),r(ce,rt),l(e,Ae,s),l(e,p,s),r(p,nt),r(p,fe),r(fe,at),r(p,ot),r(p,Q),r(Q,it),r(p,st),Pe=!0},p:Gt,i(e){Pe||(O(N.$$.fragment,e),O(R.$$.fragment,e),O(q.$$.fragment,e),O(T.$$.fragment,e),O(F.$$.fragment,e),O(W.$$.fragment,e),O(Y.$$.fragment,e),Pe=!0)},o(e){J(N.$$.fragment,e),J(R.$$.fragment,e),J(q.$$.fragment,e),J(T.$$.fragment,e),J(F.$$.fragment,e),J(W.$$.fragment,e),J(Y.$$.fragment,e),Pe=!1},d(e){t(m),e&&t(pe),e&&t(d),U(N),e&&t(me),e&&t(v),U(R),e&&t(de),e&&t(z),e&&t(ve),e&&t(y),U(q),e&&t(ye),e&&t(A),e&&t(ge),e&&t(g),U(T),e&&t(we),e&&t(D),e&&t($e),e&&t(w),U(F),e&&t(be),e&&t(M),e&&t(_e),e&&t($),U(W),e&&t(ke),e&&t(K),e&&t(Ee),e&&t(b),U(Y),e&&t(Ae),e&&t(p)}}}const Ut={local:"more-information-about-the-api",sections:[{local:"rate-limits",title:"Rate limits"},{local:"running-private-models",title:"Running private models"},{local:"running-a-public-model-that-i-do-not-own",title:"Running a public model that I do not own"},{local:"finetuning-a-public-model",title:"Finetuning a public model"},{local:"tracking-metrics",title:"Tracking metrics"},{local:"running-the-inference-on-my-infrastructure",title:"Running the inference on my infrastructure"}],title:"More information about the API"};function jt(ut){return Ot(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Kt extends Wt{constructor(m){super();Yt(this,m,jt,Jt,Bt,{})}}export{Kt as default,Ut as metadata};
