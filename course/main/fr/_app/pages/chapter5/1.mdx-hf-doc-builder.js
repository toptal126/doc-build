import{S as xt,i as Dt,s as jt,e as s,k as c,w as Mt,t as a,M as Pt,c as n,d as r,m as p,a as l,x as At,h as o,b as q,G as e,g as m,y as Lt,L as gt,q as wt,o as yt,B as It,v as Ht}from"../../chunks/vendor-hf-doc-builder.js";import{I as kt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as St}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";function zt(at){let _,W,E,b,z,L,me,C,de,X,w,Y,d,fe,g,he,ve,N,_e,Ee,F,qe,be,Z,h,y,$e,O,Me,Ae,Le,I,we,R,ye,Ie,xe,B,De,ee,$,je,U,Pe,ge,te,i,x,He,G,ke,Se,ze,D,Ce,J,Ne,Fe,Oe,T,Re,Be,j,Ue,K,Ge,Je,Te,P,Ke,Q,Qe,Ve,re,f,We,H,Xe,Ye,V,Ze,et,k,tt,rt,ae;return L=new kt({}),w=new St({props:{chapter:5,classNames:"absolute z-10 right-0 top-0"}}),{c(){_=s("meta"),W=c(),E=s("h1"),b=s("a"),z=s("span"),Mt(L.$$.fragment),me=c(),C=s("span"),de=a("Introduction"),X=c(),Mt(w.$$.fragment),Y=c(),d=s("p"),fe=a("Dans le "),g=s("a"),he=a("chapitre 3"),ve=a(" vous avez eu un premier aper\xE7u de la biblioth\xE8que \u{1F917} "),N=s("em"),_e=a("Datasets"),Ee=a(" et des trois \xE9tapes principales pour "),F=s("em"),qe=a("finetuner"),be=a(" un mod\xE8le :"),Z=c(),h=s("ol"),y=s("li"),$e=a("chargement d\u2019un jeu de donn\xE9es \xE0 partir du "),O=s("em"),Me=a("Hub"),Ae=a(" d\u2019Hugging Face,"),Le=c(),I=s("li"),we=a("pr\xE9traitement des donn\xE9es avec "),R=s("code"),ye=a("Dataset.map()"),Ie=a(","),xe=c(),B=s("li"),De=a("chargement et calcul des m\xE9triques."),ee=c(),$=s("p"),je=a("Mais ce n\u2019est qu\u2019effleurer la surface de ce que \u{1F917} "),U=s("em"),Pe=a("Datasets"),ge=a(" peut faire ! Dans ce chapitre, nous allons plonger profond\xE9ment dans cette biblioth\xE8que. En cours de route, nous trouverons des r\xE9ponses aux questions suivantes :"),te=c(),i=s("ul"),x=s("li"),He=a("que faire lorsque votre jeu de donn\xE9es n\u2019est pas sur le "),G=s("em"),ke=a("Hub"),Se=a(" ?"),ze=c(),D=s("li"),Ce=a("comment d\xE9couper et trancher un jeu de donn\xE9es ? (Et si on a "),J=s("em"),Ne=a("vraiment"),Fe=a(" besoin d\u2019utiliser Pandas ?)"),Oe=c(),T=s("li"),Re=a("que faire lorsque votre jeu de donn\xE9es est \xE9norme et va monopoliser la RAM de votre ordinateur portable ?"),Be=c(),j=s("li"),Ue=a("qu\u2019est-ce que c\u2019est que le \xAB "),K=s("em"),Ge=a("memory mapping"),Je=a(" \xBB et Apache Arrow ?"),Te=c(),P=s("li"),Ke=a("comment cr\xE9er votre propre jeu de donn\xE9es et le pousser sur le "),Q=s("em"),Qe=a("Hub"),Ve=a(" ?"),re=c(),f=s("p"),We=a("Les techniques apprises dans ce chapitre vous pr\xE9pareront aux t\xE2ches avanc\xE9es de tokenisation du "),H=s("a"),Xe=a("chapitre 6"),Ye=a(" et de "),V=s("em"),Ze=a("finetuning"),et=a(" du "),k=s("a"),tt=a("chapitre 7"),rt=a(". Alors prenez un caf\xE9 et commen\xE7ons !"),this.h()},l(t){const u=Pt('[data-svelte="svelte-1phssyn"]',document.head);_=n(u,"META",{name:!0,content:!0}),u.forEach(r),W=p(t),E=n(t,"H1",{class:!0});var oe=l(E);b=n(oe,"A",{id:!0,class:!0,href:!0});var ot=l(b);z=n(ot,"SPAN",{});var st=l(z);At(L.$$.fragment,st),st.forEach(r),ot.forEach(r),me=p(oe),C=n(oe,"SPAN",{});var nt=l(C);de=o(nt,"Introduction"),nt.forEach(r),oe.forEach(r),X=p(t),At(w.$$.fragment,t),Y=p(t),d=n(t,"P",{});var M=l(d);fe=o(M,"Dans le "),g=n(M,"A",{href:!0});var lt=l(g);he=o(lt,"chapitre 3"),lt.forEach(r),ve=o(M," vous avez eu un premier aper\xE7u de la biblioth\xE8que \u{1F917} "),N=n(M,"EM",{});var ut=l(N);_e=o(ut,"Datasets"),ut.forEach(r),Ee=o(M," et des trois \xE9tapes principales pour "),F=n(M,"EM",{});var it=l(F);qe=o(it,"finetuner"),it.forEach(r),be=o(M," un mod\xE8le :"),M.forEach(r),Z=p(t),h=n(t,"OL",{});var S=l(h);y=n(S,"LI",{});var se=l(y);$e=o(se,"chargement d\u2019un jeu de donn\xE9es \xE0 partir du "),O=n(se,"EM",{});var ct=l(O);Me=o(ct,"Hub"),ct.forEach(r),Ae=o(se," d\u2019Hugging Face,"),se.forEach(r),Le=p(S),I=n(S,"LI",{});var ne=l(I);we=o(ne,"pr\xE9traitement des donn\xE9es avec "),R=n(ne,"CODE",{});var pt=l(R);ye=o(pt,"Dataset.map()"),pt.forEach(r),Ie=o(ne,","),ne.forEach(r),xe=p(S),B=n(S,"LI",{});var mt=l(B);De=o(mt,"chargement et calcul des m\xE9triques."),mt.forEach(r),S.forEach(r),ee=p(t),$=n(t,"P",{});var le=l($);je=o(le,"Mais ce n\u2019est qu\u2019effleurer la surface de ce que \u{1F917} "),U=n(le,"EM",{});var dt=l(U);Pe=o(dt,"Datasets"),dt.forEach(r),ge=o(le," peut faire ! Dans ce chapitre, nous allons plonger profond\xE9ment dans cette biblioth\xE8que. En cours de route, nous trouverons des r\xE9ponses aux questions suivantes :"),le.forEach(r),te=p(t),i=n(t,"UL",{});var v=l(i);x=n(v,"LI",{});var ue=l(x);He=o(ue,"que faire lorsque votre jeu de donn\xE9es n\u2019est pas sur le "),G=n(ue,"EM",{});var ft=l(G);ke=o(ft,"Hub"),ft.forEach(r),Se=o(ue," ?"),ue.forEach(r),ze=p(v),D=n(v,"LI",{});var ie=l(D);Ce=o(ie,"comment d\xE9couper et trancher un jeu de donn\xE9es ? (Et si on a "),J=n(ie,"EM",{});var ht=l(J);Ne=o(ht,"vraiment"),ht.forEach(r),Fe=o(ie," besoin d\u2019utiliser Pandas ?)"),ie.forEach(r),Oe=p(v),T=n(v,"LI",{});var vt=l(T);Re=o(vt,"que faire lorsque votre jeu de donn\xE9es est \xE9norme et va monopoliser la RAM de votre ordinateur portable ?"),vt.forEach(r),Be=p(v),j=n(v,"LI",{});var ce=l(j);Ue=o(ce,"qu\u2019est-ce que c\u2019est que le \xAB "),K=n(ce,"EM",{});var _t=l(K);Ge=o(_t,"memory mapping"),_t.forEach(r),Je=o(ce," \xBB et Apache Arrow ?"),ce.forEach(r),Te=p(v),P=n(v,"LI",{});var pe=l(P);Ke=o(pe,"comment cr\xE9er votre propre jeu de donn\xE9es et le pousser sur le "),Q=n(pe,"EM",{});var Et=l(Q);Qe=o(Et,"Hub"),Et.forEach(r),Ve=o(pe," ?"),pe.forEach(r),v.forEach(r),re=p(t),f=n(t,"P",{});var A=l(f);We=o(A,"Les techniques apprises dans ce chapitre vous pr\xE9pareront aux t\xE2ches avanc\xE9es de tokenisation du "),H=n(A,"A",{href:!0});var qt=l(H);Xe=o(qt,"chapitre 6"),qt.forEach(r),Ye=o(A," et de "),V=n(A,"EM",{});var bt=l(V);Ze=o(bt,"finetuning"),bt.forEach(r),et=o(A," du "),k=n(A,"A",{href:!0});var $t=l(k);tt=o($t,"chapitre 7"),$t.forEach(r),rt=o(A,". Alors prenez un caf\xE9 et commen\xE7ons !"),A.forEach(r),this.h()},h(){q(_,"name","hf:doc:metadata"),q(_,"content",JSON.stringify(Ct)),q(b,"id","introduction"),q(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),q(b,"href","#introduction"),q(E,"class","relative group"),q(g,"href","/course/fr/chapter3"),q(H,"href","/course/fr/chapter6"),q(k,"href","/course/fr/chapter7")},m(t,u){e(document.head,_),m(t,W,u),m(t,E,u),e(E,b),e(b,z),Lt(L,z,null),e(E,me),e(E,C),e(C,de),m(t,X,u),Lt(w,t,u),m(t,Y,u),m(t,d,u),e(d,fe),e(d,g),e(g,he),e(d,ve),e(d,N),e(N,_e),e(d,Ee),e(d,F),e(F,qe),e(d,be),m(t,Z,u),m(t,h,u),e(h,y),e(y,$e),e(y,O),e(O,Me),e(y,Ae),e(h,Le),e(h,I),e(I,we),e(I,R),e(R,ye),e(I,Ie),e(h,xe),e(h,B),e(B,De),m(t,ee,u),m(t,$,u),e($,je),e($,U),e(U,Pe),e($,ge),m(t,te,u),m(t,i,u),e(i,x),e(x,He),e(x,G),e(G,ke),e(x,Se),e(i,ze),e(i,D),e(D,Ce),e(D,J),e(J,Ne),e(D,Fe),e(i,Oe),e(i,T),e(T,Re),e(i,Be),e(i,j),e(j,Ue),e(j,K),e(K,Ge),e(j,Je),e(i,Te),e(i,P),e(P,Ke),e(P,Q),e(Q,Qe),e(P,Ve),m(t,re,u),m(t,f,u),e(f,We),e(f,H),e(H,Xe),e(f,Ye),e(f,V),e(V,Ze),e(f,et),e(f,k),e(k,tt),e(f,rt),ae=!0},p:gt,i(t){ae||(wt(L.$$.fragment,t),wt(w.$$.fragment,t),ae=!0)},o(t){yt(L.$$.fragment,t),yt(w.$$.fragment,t),ae=!1},d(t){r(_),t&&r(W),t&&r(E),It(L),t&&r(X),It(w,t),t&&r(Y),t&&r(d),t&&r(Z),t&&r(h),t&&r(ee),t&&r($),t&&r(te),t&&r(i),t&&r(re),t&&r(f)}}}const Ct={local:"introduction",title:"Introduction"};function Nt(at){return Ht(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Bt extends xt{constructor(_){super();Dt(this,_,Nt,zt,jt,{})}}export{Bt as default,Ct as metadata};
