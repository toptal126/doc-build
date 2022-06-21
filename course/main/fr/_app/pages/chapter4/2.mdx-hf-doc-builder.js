import{S as Is,i as Vs,s as Gs,e as i,k as _,w as R,t as l,M as Hs,c,d as t,m as k,x as U,a as u,h as n,b as w,N as Ps,G as s,g as f,y as J,o as z,p as Os,q as T,B as K,v as Rs,n as Ss}from"../../chunks/vendor-hf-doc-builder.js";import{T as Us}from"../../chunks/Tip-hf-doc-builder.js";import{I as Js}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ue}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as Bs}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";import{F as Ks}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function Qs(D){let o,d;return o=new Bs({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter4/section2_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter4/section2_tf.ipynb"}]}}),{c(){R(o.$$.fragment)},l(a){U(o.$$.fragment,a)},m(a,q){J(o,a,q),d=!0},i(a){d||(T(o.$$.fragment,a),d=!0)},o(a){z(o.$$.fragment,a),d=!1},d(a){K(o,a)}}}function Ws(D){let o,d;return o=new Bs({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter4/section2_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter4/section2_pt.ipynb"}]}}),{c(){R(o.$$.fragment)},l(a){U(o.$$.fragment,a)},m(a,q){J(o,a,q),d=!0},i(a){d||(T(o.$$.fragment,a),d=!0)},o(a){z(o.$$.fragment,a),d=!1},d(a){K(o,a)}}}function Xs(D){let o,d,a,q,h,g,N,y,L,P,I,C,$,x,j,M,V,A,E,O;return o=new ue({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = TFCamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),E=new ue({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = TFAutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),{c(){R(o.$$.fragment),d=_(),a=i("p"),q=l("Cependant, nous recommandons d\u2019utiliser les classes "),h=i("a"),g=i("code"),N=l("TFAuto*"),y=l(" \xE0 la place, car elles sont par conception ind\xE9pendantes de l\u2019architecture. Alors que l\u2019exemple de code pr\xE9c\xE9dent limite les utilisateurs aux "),L=i("em"),P=l("checkpoints"),I=l(" chargeables dans l\u2019architecture CamemBERT, l\u2019utilisation des classes "),C=i("code"),$=l("TFAuto*"),x=l(" facilite le changement de "),j=i("em"),M=l("checkpoint"),V=l(" :"),A=_(),R(E.$$.fragment),this.h()},l(r){U(o.$$.fragment,r),d=k(r),a=c(r,"P",{});var m=u(a);q=n(m,"Cependant, nous recommandons d\u2019utiliser les classes "),h=c(m,"A",{href:!0,rel:!0});var X=u(h);g=c(X,"CODE",{});var Q=u(g);N=n(Q,"TFAuto*"),Q.forEach(t),X.forEach(t),y=n(m," \xE0 la place, car elles sont par conception ind\xE9pendantes de l\u2019architecture. Alors que l\u2019exemple de code pr\xE9c\xE9dent limite les utilisateurs aux "),L=c(m,"EM",{});var S=u(L);P=n(S,"checkpoints"),S.forEach(t),I=n(m," chargeables dans l\u2019architecture CamemBERT, l\u2019utilisation des classes "),C=c(m,"CODE",{});var B=u(C);$=n(B,"TFAuto*"),B.forEach(t),x=n(m," facilite le changement de "),j=c(m,"EM",{});var Y=u(j);M=n(Y,"checkpoint"),Y.forEach(t),V=n(m," :"),m.forEach(t),A=k(r),U(E.$$.fragment,r),this.h()},h(){w(h,"href","https://huggingface.co/transformers/model_doc/auto.html?highlight=auto#auto-classes"),w(h,"rel","nofollow")},m(r,m){J(o,r,m),f(r,d,m),f(r,a,m),s(a,q),s(a,h),s(h,g),s(g,N),s(a,y),s(a,L),s(L,P),s(a,I),s(a,C),s(C,$),s(a,x),s(a,j),s(j,M),s(a,V),f(r,A,m),J(E,r,m),O=!0},i(r){O||(T(o.$$.fragment,r),T(E.$$.fragment,r),O=!0)},o(r){z(o.$$.fragment,r),z(E.$$.fragment,r),O=!1},d(r){K(o,r),r&&t(d),r&&t(a),r&&t(A),K(E,r)}}}function Ys(D){let o,d,a,q,h,g,N,y,L,P,I,C,$,x,j,M,V,A,E,O;return o=new ue({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = CamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),E=new ue({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = AutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),{c(){R(o.$$.fragment),d=_(),a=i("p"),q=l("Cependant, nous recommandons d\u2019utiliser les classes "),h=i("a"),g=i("code"),N=l("Auto*"),y=l(" \xE0 la place, car elles sont par conception ind\xE9pendantes de l\u2019architecture. Alors que l\u2019exemple de code pr\xE9c\xE9dent limite les utilisateurs aux "),L=i("em"),P=l("checkpoints"),I=l(" chargeables dans l\u2019architecture CamemBERT, l\u2019utilisation des classes "),C=i("code"),$=l("Auto*"),x=l(" facilite le changement de "),j=i("em"),M=l("checkpoint"),V=l(" :"),A=_(),R(E.$$.fragment),this.h()},l(r){U(o.$$.fragment,r),d=k(r),a=c(r,"P",{});var m=u(a);q=n(m,"Cependant, nous recommandons d\u2019utiliser les classes "),h=c(m,"A",{href:!0,rel:!0});var X=u(h);g=c(X,"CODE",{});var Q=u(g);N=n(Q,"Auto*"),Q.forEach(t),X.forEach(t),y=n(m," \xE0 la place, car elles sont par conception ind\xE9pendantes de l\u2019architecture. Alors que l\u2019exemple de code pr\xE9c\xE9dent limite les utilisateurs aux "),L=c(m,"EM",{});var S=u(L);P=n(S,"checkpoints"),S.forEach(t),I=n(m," chargeables dans l\u2019architecture CamemBERT, l\u2019utilisation des classes "),C=c(m,"CODE",{});var B=u(C);$=n(B,"Auto*"),B.forEach(t),x=n(m," facilite le changement de "),j=c(m,"EM",{});var Y=u(j);M=n(Y,"checkpoint"),Y.forEach(t),V=n(m," :"),m.forEach(t),A=k(r),U(E.$$.fragment,r),this.h()},h(){w(h,"href","https://huggingface.co/transformers/model_doc/auto.html?highlight=auto#auto-classes"),w(h,"rel","nofollow")},m(r,m){J(o,r,m),f(r,d,m),f(r,a,m),s(a,q),s(a,h),s(h,g),s(g,N),s(a,y),s(a,L),s(L,P),s(a,I),s(a,C),s(C,$),s(a,x),s(a,j),s(j,M),s(a,V),f(r,A,m),J(E,r,m),O=!0},i(r){O||(T(o.$$.fragment,r),T(E.$$.fragment,r),O=!0)},o(r){z(o.$$.fragment,r),z(E.$$.fragment,r),O=!1},d(r){K(o,r),r&&t(d),r&&t(a),r&&t(A),K(E,r)}}}function Zs(D){let o;return{c(){o=l("Lorsque vous utilisez un mod\xE8le pr\xE9-entra\xEEn\xE9, assurez-vous de v\xE9rifier comment il a \xE9t\xE9 entra\xEEn\xE9, sur quels jeux de donn\xE9es, ses limites et ses biais. Toutes ces informations doivent \xEAtre indiqu\xE9es dans sa carte.")},l(d){o=n(d,"Lorsque vous utilisez un mod\xE8le pr\xE9-entra\xEEn\xE9, assurez-vous de v\xE9rifier comment il a \xE9t\xE9 entra\xEEn\xE9, sur quels jeux de donn\xE9es, ses limites et ses biais. Toutes ces informations doivent \xEAtre indiqu\xE9es dans sa carte.")},m(d,a){f(d,o,a)},d(d){d&&t(o)}}}function et(D){let o,d,a,q,h,g,N,y,L,P,I,C,$,x,j,M,V,A,E,O,r,m,X,Q,S,B,Y,Ce,F,Pe,pe,Oe,Se,de,Be,Ie,fe,Ve,Ge,he,He,Re,Me,se,ye,te,Le,b,Ue,be,Je,Ke,_e,Qe,We,ke,Xe,Ye,ge,Ze,es,ve,ss,ts,$e,as,ls,xe,ns,rs,Ee,os,is,qe,cs,ms,Ae,ae,le,fs,ze,Z,us,je,ps,ds,Te,G,H,ie,ee,Fe;a=new Ks({props:{fw:D[0]}}),y=new Js({});const hs=[Ws,Qs],ne=[];function bs(e,p){return e[0]==="pt"?0:1}$=bs(D),x=ne[$]=hs[$](D),se=new ue({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

camembert_fill_mask = pipeline(<span class="hljs-string">&quot;fill-mask&quot;</span>, model=<span class="hljs-string">&quot;camembert-base&quot;</span>)
results = camembert_fill_mask(<span class="hljs-string">&quot;Le camembert est &lt;mask&gt; :)&quot;</span>)`}}),te=new ue({props:{code:`[
  {'sequence': 'Le camembert est d\xE9licieux :)', 'score': 0.49091005325317383, 'token': 7200, 'token_str': 'd\xE9licieux'}, 
  {'sequence': 'Le camembert est excellent :)', 'score': 0.1055697426199913, 'token': 2183, 'token_str': 'excellent'}, 
  {'sequence': 'Le camembert est succulent :)', 'score': 0.03453313186764717, 'token': 26202, 'token_str': 'succulent'}, 
  {'sequence': 'Le camembert est meilleur :)', 'score': 0.0330314114689827, 'token': 528, 'token_str': 'meilleur'}, 
  {'sequence': 'Le camembert est parfait :)', 'score': 0.03007650189101696, 'token': 1654, 'token_str': 'parfait'}
]`,highlighted:`[
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est d\xE9licieux :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.49091005325317383</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">7200</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;d\xE9licieux&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est excellent :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.1055697426199913</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">2183</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;excellent&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est succulent :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.03453313186764717</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">26202</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;succulent&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est meilleur :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.0330314114689827</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">528</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;meilleur&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est parfait :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.03007650189101696</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">1654</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;parfait&#x27;</span>}
]`}});const _s=[Ys,Xs],re=[];function ks(e,p){return e[0]==="pt"?0:1}return G=ks(D),H=re[G]=_s[G](D),ee=new Us({props:{$$slots:{default:[Zs]},$$scope:{ctx:D}}}),{c(){o=i("meta"),d=_(),R(a.$$.fragment),q=_(),h=i("h1"),g=i("a"),N=i("span"),R(y.$$.fragment),L=_(),P=i("span"),I=l("Utilisation de mod\xE8les pr\xE9-entra\xEEn\xE9s"),C=_(),x.c(),j=_(),M=i("p"),V=l("Le "),A=i("em"),E=l("Hub"),O=l(" rend simple la s\xE9lection d\u2019un mod\xE8le et permet alors que celui-ci puisse \xEAtre utilis\xE9 dans toute biblioth\xE8que en aval en seulement quelques lignes de code. Voyons comment utiliser concr\xE8tement l\u2019un de ces mod\xE8les et comment contribuer au d\xE9veloppement de la communaut\xE9."),r=_(),m=i("p"),X=l("Supposons que nous recherchions un mod\xE8le bas\xE9 sur le fran\xE7ais, capable de remplir des masques."),Q=_(),S=i("div"),B=i("img"),Ce=_(),F=i("p"),Pe=l("Nous choisissons le "),pe=i("em"),Oe=l("checkpoint"),Se=_(),de=i("code"),Be=l("camembert-base"),Ie=l(" pour essayer. L\u2019identifiant "),fe=i("code"),Ve=l("camembert-base"),Ge=l(" est tout ce dont nous avons besoin pour commencer \xE0 utiliser le mod\xE8le ! Comme vous l\u2019avez vu dans les chapitres pr\xE9c\xE9dents, nous pouvons l\u2019instancier en utilisant la fonction "),he=i("code"),He=l("pipeline()"),Re=l(" :"),Me=_(),R(se.$$.fragment),ye=_(),R(te.$$.fragment),Le=_(),b=i("p"),Ue=l("Comme vous pouvez le constater, le chargement d\u2019un mod\xE8le dans un pipeline est extr\xEAmement simple. La seule chose \xE0 laquelle vous devez faire attention est que le "),be=i("em"),Je=l("checkpoint"),Ke=l(" choisi soit adapt\xE9 \xE0 la t\xE2che pour laquelle il va \xEAtre utilis\xE9. Par exemple, ici nous chargeons le "),_e=i("em"),Qe=l("checkpoint"),We=_(),ke=i("code"),Xe=l("camembert-base"),Ye=l(" dans le pipeline "),ge=i("code"),Ze=l("fill-mask"),es=l(", ce qui est tout \xE0 fait correct. Mais si nous chargerions ce "),ve=i("em"),ss=l("checkpoint"),ts=l(" dans le pipeline "),$e=i("code"),as=l("text-classification"),ls=l(", les r\xE9sultats n\u2019auraient aucun sens car la t\xEAte de "),xe=i("code"),ns=l("camembert-base"),rs=l(" n\u2019est pas adapt\xE9e \xE0 cette t\xE2che ! Nous recommandons d\u2019utiliser le s\xE9lecteur de t\xE2che dans l\u2019interface du "),Ee=i("em"),os=l("Hub"),is=l(" afin de s\xE9lectionner les "),qe=i("em"),cs=l("checkpoints"),ms=l(" appropri\xE9s :"),Ae=_(),ae=i("div"),le=i("img"),ze=_(),Z=i("p"),us=l("Vous pouvez \xE9galement instancier le "),je=i("em"),ps=l("checkpoint"),ds=l(" en utilisant directement l\u2019architecture du mod\xE8le :"),Te=_(),H.c(),ie=_(),R(ee.$$.fragment),this.h()},l(e){const p=Hs('[data-svelte="svelte-1phssyn"]',document.head);o=c(p,"META",{name:!0,content:!0}),p.forEach(t),d=k(e),U(a.$$.fragment,e),q=k(e),h=c(e,"H1",{class:!0});var oe=u(h);g=c(oe,"A",{id:!0,class:!0,href:!0});var ce=u(g);N=c(ce,"SPAN",{});var me=u(N);U(y.$$.fragment,me),me.forEach(t),ce.forEach(t),L=k(oe),P=c(oe,"SPAN",{});var we=u(P);I=n(we,"Utilisation de mod\xE8les pr\xE9-entra\xEEn\xE9s"),we.forEach(t),oe.forEach(t),C=k(e),x.l(e),j=k(e),M=c(e,"P",{});var De=u(M);V=n(De,"Le "),A=c(De,"EM",{});var gs=u(A);E=n(gs,"Hub"),gs.forEach(t),O=n(De," rend simple la s\xE9lection d\u2019un mod\xE8le et permet alors que celui-ci puisse \xEAtre utilis\xE9 dans toute biblioth\xE8que en aval en seulement quelques lignes de code. Voyons comment utiliser concr\xE8tement l\u2019un de ces mod\xE8les et comment contribuer au d\xE9veloppement de la communaut\xE9."),De.forEach(t),r=k(e),m=c(e,"P",{});var vs=u(m);X=n(vs,"Supposons que nous recherchions un mod\xE8le bas\xE9 sur le fran\xE7ais, capable de remplir des masques."),vs.forEach(t),Q=k(e),S=c(e,"DIV",{class:!0});var $s=u(S);B=c($s,"IMG",{src:!0,alt:!0,width:!0}),$s.forEach(t),Ce=k(e),F=c(e,"P",{});var W=u(F);Pe=n(W,"Nous choisissons le "),pe=c(W,"EM",{});var xs=u(pe);Oe=n(xs,"checkpoint"),xs.forEach(t),Se=k(W),de=c(W,"CODE",{});var Es=u(de);Be=n(Es,"camembert-base"),Es.forEach(t),Ie=n(W," pour essayer. L\u2019identifiant "),fe=c(W,"CODE",{});var qs=u(fe);Ve=n(qs,"camembert-base"),qs.forEach(t),Ge=n(W," est tout ce dont nous avons besoin pour commencer \xE0 utiliser le mod\xE8le ! Comme vous l\u2019avez vu dans les chapitres pr\xE9c\xE9dents, nous pouvons l\u2019instancier en utilisant la fonction "),he=c(W,"CODE",{});var js=u(he);He=n(js,"pipeline()"),js.forEach(t),Re=n(W," :"),W.forEach(t),Me=k(e),U(se.$$.fragment,e),ye=k(e),U(te.$$.fragment,e),Le=k(e),b=c(e,"P",{});var v=u(b);Ue=n(v,"Comme vous pouvez le constater, le chargement d\u2019un mod\xE8le dans un pipeline est extr\xEAmement simple. La seule chose \xE0 laquelle vous devez faire attention est que le "),be=c(v,"EM",{});var ws=u(be);Je=n(ws,"checkpoint"),ws.forEach(t),Ke=n(v," choisi soit adapt\xE9 \xE0 la t\xE2che pour laquelle il va \xEAtre utilis\xE9. Par exemple, ici nous chargeons le "),_e=c(v,"EM",{});var Cs=u(_e);Qe=n(Cs,"checkpoint"),Cs.forEach(t),We=k(v),ke=c(v,"CODE",{});var Ms=u(ke);Xe=n(Ms,"camembert-base"),Ms.forEach(t),Ye=n(v," dans le pipeline "),ge=c(v,"CODE",{});var ys=u(ge);Ze=n(ys,"fill-mask"),ys.forEach(t),es=n(v,", ce qui est tout \xE0 fait correct. Mais si nous chargerions ce "),ve=c(v,"EM",{});var Ls=u(ve);ss=n(Ls,"checkpoint"),Ls.forEach(t),ts=n(v," dans le pipeline "),$e=c(v,"CODE",{});var As=u($e);as=n(As,"text-classification"),As.forEach(t),ls=n(v,", les r\xE9sultats n\u2019auraient aucun sens car la t\xEAte de "),xe=c(v,"CODE",{});var zs=u(xe);ns=n(zs,"camembert-base"),zs.forEach(t),rs=n(v," n\u2019est pas adapt\xE9e \xE0 cette t\xE2che ! Nous recommandons d\u2019utiliser le s\xE9lecteur de t\xE2che dans l\u2019interface du "),Ee=c(v,"EM",{});var Ts=u(Ee);os=n(Ts,"Hub"),Ts.forEach(t),is=n(v," afin de s\xE9lectionner les "),qe=c(v,"EM",{});var Fs=u(qe);cs=n(Fs,"checkpoints"),Fs.forEach(t),ms=n(v," appropri\xE9s :"),v.forEach(t),Ae=k(e),ae=c(e,"DIV",{class:!0});var Ds=u(ae);le=c(Ds,"IMG",{src:!0,alt:!0,width:!0}),Ds.forEach(t),ze=k(e),Z=c(e,"P",{});var Ne=u(Z);us=n(Ne,"Vous pouvez \xE9galement instancier le "),je=c(Ne,"EM",{});var Ns=u(je);ps=n(Ns,"checkpoint"),Ns.forEach(t),ds=n(Ne," en utilisant directement l\u2019architecture du mod\xE8le :"),Ne.forEach(t),Te=k(e),H.l(e),ie=k(e),U(ee.$$.fragment,e),this.h()},h(){w(o,"name","hf:doc:metadata"),w(o,"content",JSON.stringify(st)),w(g,"id","utilisation-de-modles-prentrans"),w(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(g,"href","#utilisation-de-modles-prentrans"),w(h,"class","relative group"),Ps(B.src,Y="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter4/camembert.gif")||w(B,"src",Y),w(B,"alt","Selecting the Camembert model."),w(B,"width","80%"),w(S,"class","flex justify-center"),Ps(le.src,fs="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter4/tasks.png")||w(le,"src",fs),w(le,"alt","The task selector on the web interface."),w(le,"width","80%"),w(ae,"class","flex justify-center")},m(e,p){s(document.head,o),f(e,d,p),J(a,e,p),f(e,q,p),f(e,h,p),s(h,g),s(g,N),J(y,N,null),s(h,L),s(h,P),s(P,I),f(e,C,p),ne[$].m(e,p),f(e,j,p),f(e,M,p),s(M,V),s(M,A),s(A,E),s(M,O),f(e,r,p),f(e,m,p),s(m,X),f(e,Q,p),f(e,S,p),s(S,B),f(e,Ce,p),f(e,F,p),s(F,Pe),s(F,pe),s(pe,Oe),s(F,Se),s(F,de),s(de,Be),s(F,Ie),s(F,fe),s(fe,Ve),s(F,Ge),s(F,he),s(he,He),s(F,Re),f(e,Me,p),J(se,e,p),f(e,ye,p),J(te,e,p),f(e,Le,p),f(e,b,p),s(b,Ue),s(b,be),s(be,Je),s(b,Ke),s(b,_e),s(_e,Qe),s(b,We),s(b,ke),s(ke,Xe),s(b,Ye),s(b,ge),s(ge,Ze),s(b,es),s(b,ve),s(ve,ss),s(b,ts),s(b,$e),s($e,as),s(b,ls),s(b,xe),s(xe,ns),s(b,rs),s(b,Ee),s(Ee,os),s(b,is),s(b,qe),s(qe,cs),s(b,ms),f(e,Ae,p),f(e,ae,p),s(ae,le),f(e,ze,p),f(e,Z,p),s(Z,us),s(Z,je),s(je,ps),s(Z,ds),f(e,Te,p),re[G].m(e,p),f(e,ie,p),J(ee,e,p),Fe=!0},p(e,[p]){const oe={};p&1&&(oe.fw=e[0]),a.$set(oe);let ce=$;$=bs(e),$!==ce&&(Ss(),z(ne[ce],1,1,()=>{ne[ce]=null}),Os(),x=ne[$],x||(x=ne[$]=hs[$](e),x.c()),T(x,1),x.m(j.parentNode,j));let me=G;G=ks(e),G!==me&&(Ss(),z(re[me],1,1,()=>{re[me]=null}),Os(),H=re[G],H||(H=re[G]=_s[G](e),H.c()),T(H,1),H.m(ie.parentNode,ie));const we={};p&2&&(we.$$scope={dirty:p,ctx:e}),ee.$set(we)},i(e){Fe||(T(a.$$.fragment,e),T(y.$$.fragment,e),T(x),T(se.$$.fragment,e),T(te.$$.fragment,e),T(H),T(ee.$$.fragment,e),Fe=!0)},o(e){z(a.$$.fragment,e),z(y.$$.fragment,e),z(x),z(se.$$.fragment,e),z(te.$$.fragment,e),z(H),z(ee.$$.fragment,e),Fe=!1},d(e){t(o),e&&t(d),K(a,e),e&&t(q),e&&t(h),K(y),e&&t(C),ne[$].d(e),e&&t(j),e&&t(M),e&&t(r),e&&t(m),e&&t(Q),e&&t(S),e&&t(Ce),e&&t(F),e&&t(Me),K(se,e),e&&t(ye),K(te,e),e&&t(Le),e&&t(b),e&&t(Ae),e&&t(ae),e&&t(ze),e&&t(Z),e&&t(Te),re[G].d(e),e&&t(ie),K(ee,e)}}}const st={local:"utilisation-de-modles-prentrans",title:"Utilisation de mod\xE8les pr\xE9-entra\xEEn\xE9s"};function tt(D,o,d){let a="pt";return Rs(()=>{const q=new URLSearchParams(window.location.search);d(0,a=q.get("fw")||"pt")}),[a]}class ct extends Is{constructor(o){super();Vs(this,o,tt,et,Gs,{})}}export{ct as default,st as metadata};
