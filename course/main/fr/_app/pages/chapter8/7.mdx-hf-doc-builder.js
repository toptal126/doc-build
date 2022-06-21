import{S as dt,i as mt,s as ft,e as n,k as l,w as m,t as c,M as vt,c as a,d as r,m as p,a as o,x as f,h as d,b as u,G as t,g as i,y as v,L as ht,q as h,o as $,B as q,v as $t}from"../../chunks/vendor-hf-doc-builder.js";import{I as S}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as qt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{Q as I}from"../../chunks/Question-hf-doc-builder.js";function gt(Nr){let g,Ae,x,C,pe,H,ur,ce,ir,Se,ue,lr,Ce,b,j,de,B,pr,F,cr,me,dr,mr,je,M,Le,y,L,fe,O,fr,ve,vr,Ue,R,Ne,_,U,he,J,hr,$e,$r,Te,V,Ge,ie,qr,Qe,W,De,w,N,qe,K,gr,X,xr,ge,br,yr,Ie,Y,He,z,T,xe,Z,_r,be,wr,Be,ee,Fe,E,G,ye,re,zr,_e,Er,Me,te,Oe,P,Q,we,se,Pr,ze,kr,Re,ne,Je,k,D,Ee,ae,Ar,A,Sr,Pe,Cr,jr,ke,Lr,Ur,Ve,oe,We;return H=new S({}),B=new S({}),M=new I({props:{choices:[{text:"De haut en bas",explain:"Essayez \xE0 nouveau. Bien que la plupart des autres langages de programmation impriment l'exception en haut de la page, Python est sp\xE9cial \xE0 cet \xE9gard."},{text:"De bas en haut",explain:"L'avantage d'un <i>traceback</i> de Python montrant l'exception en bas est qu'il est plus facile de d\xE9boguer lorsque vous travaillez dans le terminal et que c'est la derni\xE8re ligne que vous voyez.",correct:!0}]}}),O=new S({}),R=new I({props:{choices:[{text:"Une impl\xE9mentation simmple d'un <i>transformer</i> \xE0 partir d'un article de recherche.",explain:"Bien qu'il soit tr\xE8s \xE9ducatif d'impl\xE9menter vos propres mod\xE8les de <i>transformers</i> \xE0 partir de z\xE9ro, ce n'est pas ce dont nous parlons ici."},{text:"Un bloc de code compact et autonome qui peut \xEAtre ex\xE9cut\xE9 sans aucune d\xE9pendance externe sur des fichiers ou des donn\xE9es priv\xE9es.",explain:"Des exemples minimaux reproductibles aident les mainteneurs de la biblioth\xE8que \xE0 reproduire le probl\xE8me que vous rencontrez, afin qu'ils puissent trouver des solutions plus rapidement.",correct:!0},{text:"Une capture d'\xE9cran de la traceback Python",explain:"Essayez \xE0 nouveau. Bien qu'il soit tentant d'inclure une capture d'\xE9cran de l'erreur \xE0 laquelle vous \xEAtes confront\xE9 lorsque vous soumettez un probl\xE8me, cela rend tr\xE8s difficile pour les autres de reproduire l'erreur."},{text:"Un <i>notebook</i> qui contient toute votre analyse, y compris les parties sans rapport avec l'erreur.",explain:"Pas tout \xE0 fait. Bien qu'il puisse \xEAtre utile de partager un <i>notebook</i> Google Colab qui montre l'erreur, assurez-vous qu'il est court et ne contient que le code pertinent."}]}}),J=new S({}),V=new qt({props:{code:`
`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT3ForSequenceClassification

<span class="hljs-comment"># ImportError: cannot import name &#x27;GPT3ForSequenceClassification&#x27; from &#x27;transformers&#x27; (/Users/lewtun/miniconda3/envs/huggingface/lib/python3.8/site-packages/transformers/__init__.py)</span>
<span class="hljs-comment"># ---------------------------------------------------------------------------</span>
<span class="hljs-comment"># ImportError                               Traceback (most recent call last)</span>
<span class="hljs-comment"># /var/folders/28/k4cy5q7s2hs92xq7_h89_vgm0000gn/T/ipykernel_30848/333858878.py in &lt;module&gt;</span>
<span class="hljs-comment"># ----&gt; 1 from transformers import GPT3ForSequenceClassification</span>

<span class="hljs-comment"># ImportError: cannot import name &#x27;GPT3ForSequenceClassification&#x27; from &#x27;transformers&#x27; (/Users/lewtun/miniconda3/envs/huggingface/lib/python3.8/site-packages/transformers/__init__.py)</span>`}}),W=new I({props:{choices:[{text:"<code>ImportError: cannot import name 'GPT3ForSequenceClassification' from 'transformers' (/Users/lewtun/miniconda3/envs/huggingface/lib/python3.8/site-packages/transformers/__init__.py)</code>",explain:"Inclure la derni\xE8re ligne de la <i>traceback</i> peut \xEAtre descriptif, mais il est pr\xE9f\xE9rable de le r\xE9server au corps principal du sujet. Essayez \xE0 nouveau !"},{text:"Probl\xE8me avec <code>from transformers import GPT3ForSequenceClassification</code>",explain:"Essayez \xE0 nouveau. Bien que cette information soit utile, il est probablement pr\xE9f\xE9rable de la r\xE9server au corps du texte."},{text:"Pourquoi je ne peux pas importer <code>GPT3ForSequenceClassification</code>?",explain:"Ce titre est concis et donne au lecteur un indice sur ce qui pourrait \xEAtre erron\xE9 (par exemple, que GPT-3 n'est pas pris en charge dans \u{1F917} <i>Transformers</i>).",correct:!0},{text:"Le GPT-3 est-il pris en charge dans \u{1F917} <i>Transformers</i> ?",explain:"Utiliser des questions comme titres de sujets est un excellent moyen de communiquer le probl\xE8me \xE0 la communaut\xE9.",correct:!0}]}}),K=new S({}),Y=new I({props:{choices:[{text:"L'\xE9tape d'optimisation o\xF9 nous calculons les gradients et effectuons la r\xE9tropropagation.",explain:"Bien qu'il puisse y avoir des <i>bugs</i> dans votre optimiseur, cela se produit g\xE9n\xE9ralement \xE0 plusieurs \xE9tapes du pipeline d'entra\xEEnement, il y a donc d'autres choses \xE0 v\xE9rifier d'abord. Essayez \xE0 nouveau !"},{text:"L'\xE9tape d'\xE9valuation o\xF9 nous calculons les m\xE9triques",explain:"L'\xE9valuation est g\xE9n\xE9ralement ce que vous faites apr\xE8s l'entra\xEEnement pour une \xE9poque compl\xE8te, donc vous devriez d'abord v\xE9rifier quelque part plus t\xF4t dans le pipeline d'entra\xEEnement."},{text:"Les jeux de donn\xE9es",explain:"C'est exact ! L'examen de vos donn\xE9es est presque toujours la premi\xE8re chose \xE0 faire, pour vous assurer que le texte est cod\xE9 de mani\xE8re appropri\xE9e, qu'il pr\xE9sente les caract\xE9ristiques attendues, etc.",correct:!0},{text:"Les chargeurs de donn\xE9es",explain:"Essayez \xE0 nouveau. C'est tr\xE8s proche de la premi\xE8re chose que vous devriez v\xE9rifier. Vous souvenez-vous de l'objet que nous passons aux <i>dataloaders</i> ?"}]}}),Z=new S({}),ee=new I({props:{choices:[{text:"Postez le message d'erreur sur les forums ou sur GitHub.",explain:"Cela n'aidera personne car les messages d'erreur CUDA sont g\xE9n\xE9ralement tr\xE8s peu informatifs."},{text:"Ex\xE9cutez le m\xEAme code sur le CPU.",explain:"Exactement, cela devrait vous donner un meilleur message d'erreur !",correct:!0},{text:"Lisez la <i>traceback</i> pour d\xE9couvrir ce qui a caus\xE9 l'erreur.",explain:"C'est ce que vous feriez pour toute autre erreur, mais les erreurs CUDA ne sont g\xE9n\xE9ralement pas signal\xE9es l\xE0 o\xF9 elles se sont produites, car la plupart des op\xE9rations CUDA sont asynchrones."},{text:"R\xE9duisez la taille du <i>batch</i>.",explain:"La r\xE9duction de la taille du batch est g\xE9n\xE9ralement une bonne strat\xE9gie pour g\xE9rer les erreurs CUDA hors m\xE9moire, mais pas pour ce probl\xE8me particulier. Essayez \xE0 nouveau !"},{text:"Red\xE9marrez le noyau Jupyter.",explain:"Essayez \xE0 nouveau. Le red\xE9marrage du noyau ne fera pas dispara\xEEtre l'erreur comme par magie !"}]}}),re=new S({}),te=new I({props:{choices:[{text:"Postez un exemple complet et reproductible du <i>bug</i>.",explain:"C'est la meilleure fa\xE7on d'aider les mainteneurs \xE0 trouver votre bogue. Que devez-vous faire d'autre ?",correct:!0},{text:"Demandez chaque jour une mise \xE0 jour.",explain:"Il est peu probable que cela vous apporte de l'aide. Les gens vous ignoreront probablement davantage."},{text:"Inspectez le code source autour du bogue et essayez de trouver la raison pour laquelle il se produit. Postez les r\xE9sultats dans le probl\xE8me.",explain:"Cela aidera certainement les mainteneurs ! Et si vous trouvez la source du bogue et un correctif, vous pouvez m\xEAme ouvrir une demande de modification. Que devez-vous faire d'autre ?",correct:!0}]}}),se=new S({}),ne=new I({props:{choices:[{text:"Ce n'est pas le cas. Le surapprentissage est toujours mauvais et doit \xEAtre \xE9vit\xE9.",explain:"Lors de l'entra\xEEnement sur le jeu de donn\xE9es, le surapprentissage peut en effet \xEAtre un signe que votre mod\xE8le ne g\xE9n\xE9ralisera pas bien aux nouveaux exemples. Pour le d\xE9bogage, cependant, nous n'avons pas l'habitude de nous entra\xEEner sur l'ensemble des donn\xE9es. Essayez \xE0 nouveau !"},{text:"Elle nous permet de v\xE9rifier que le mod\xE8le est capable de r\xE9duire la perte \xE0 z\xE9ro.",explain:"Avec un petit batch d'\xE0 peine deux exemples, nous pouvons rapidement v\xE9rifier si le mod\xE8le est capable d'apprendre.",correct:!0},{text:"Il nous permet de v\xE9rifier que les formes tensorielles de nos entr\xE9es et de nos \xE9tiquettes sont correctes.",explain:"Essayez \xE0 nouveau. Si vos formes tensorielles sont mal align\xE9es, vous ne pourrez certainement pas vous entra\xEEner, m\xEAme sur un seul batch."}]}}),ae=new S({}),oe=new I({props:{choices:[{text:"Cela permet aux mainteneurs de comprendre quelle version de la biblioth\xE8que vous utilisez.",explain:"Comme chaque version majeure de la biblioth\xE8que peut comporter des modifications de l'API, le fait de conna\xEEtre la version sp\xE9cifique que vous utilisez peut vous aider \xE0 circonscrire le probl\xE8me. Quels sont les autres avantages ?",correct:!0},{text:"Il permet aux mainteneurs de savoir si vous ex\xE9cutez le code sous Windows, macOS ou Linux.",explain:"Les erreurs peuvent parfois \xEAtre caus\xE9es par le syst\xE8me d'exploitation sp\xE9cifique que vous utilisez, et le fait de le savoir aide les mainteneurs \xE0 les reproduire localement. Mais ce n'est pas la seule raison.",correct:!0},{text:"Il permet aux mainteneurs de savoir si le code est ex\xE9cut\xE9 sur un GPU ou un CPU.",explain:"Comme nous l'avons vu dans ce chapitre, les erreurs sur les GPU et les CPU peuvent avoir une saveur tr\xE8s diff\xE9rente, et savoir quel mat\xE9riel vous utilisez peut aider \xE0 focaliser l'attention des mainteneurs. Mais ce n'est pas le seul avantage...",correct:!0}]}}),{c(){g=n("meta"),Ae=l(),x=n("h1"),C=n("a"),pe=n("span"),m(H.$$.fragment),ur=l(),ce=n("span"),ir=c("Quiz de fin de chapitre"),Se=l(),ue=n("p"),lr=c("Testons ce que vous avez appris dans ce chapitre !"),Ce=l(),b=n("h3"),j=n("a"),de=n("span"),m(B.$$.fragment),pr=l(),F=n("span"),cr=c("1. Dans quel ordre devez-vous lire un "),me=n("i"),dr=c("traceback"),mr=c(" Python ?"),je=l(),m(M.$$.fragment),Le=l(),y=n("h3"),L=n("a"),fe=n("span"),m(O.$$.fragment),fr=l(),ve=n("span"),vr=c("2. Qu\u2019est-ce qu\u2019un exemple minimal reproductible ?"),Ue=l(),m(R.$$.fragment),Ne=l(),_=n("h3"),U=n("a"),he=n("span"),m(J.$$.fragment),hr=l(),$e=n("span"),$r=c("3. Supposons que vous essayez d\u2019ex\xE9cuter le code suivant, qui g\xE9n\xE8re une erreur :"),Te=l(),m(V.$$.fragment),Ge=l(),ie=n("p"),qr=c("Lequel des \xE9l\xE9ments suivants pourrait \xEAtre un bon choix pour le titre d\u2019un sujet de forum pour demander de l\u2019aide ?"),Qe=l(),m(W.$$.fragment),De=l(),w=n("h3"),N=n("a"),qe=n("span"),m(K.$$.fragment),gr=l(),X=n("span"),xr=c("4. Supposons que vous ayez essay\xE9 d\u2019ex\xE9cuter "),ge=n("code"),br=c("trainer.train()"),yr=c(" et que vous soyez confront\xE9 \xE0 une erreur \xE9nigmatique qui ne vous dit pas exactement d\u2019o\xF9 vient l\u2019erreur. Quel est le premier endroit o\xF9 vous devez chercher les erreurs dans votre pipeline d\u2019entra\xEEnement ?"),Ie=l(),m(Y.$$.fragment),He=l(),z=n("h3"),T=n("a"),xe=n("span"),m(Z.$$.fragment),_r=l(),be=n("span"),wr=c("5. Quelle est la meilleure fa\xE7on de d\xE9boguer une erreur CUDA ?"),Be=l(),m(ee.$$.fragment),Fe=l(),E=n("h3"),G=n("a"),ye=n("span"),m(re.$$.fragment),zr=l(),_e=n("span"),Er=c("6. Quelle est la meilleure fa\xE7on de faire corriger un probl\xE8me sur GitHub ?"),Me=l(),m(te.$$.fragment),Oe=l(),P=n("h3"),Q=n("a"),we=n("span"),m(se.$$.fragment),Pr=l(),ze=n("span"),kr=c("7. Pourquoi le surapprentissage \xE0 un batch est-il g\xE9n\xE9ralement une bonne technique de d\xE9bogage ?"),Re=l(),m(ne.$$.fragment),Je=l(),k=n("h3"),D=n("a"),Ee=n("span"),m(ae.$$.fragment),Ar=l(),A=n("span"),Sr=c("8. Pourquoi est-ce une bonne id\xE9e d\u2019inclure des d\xE9tails sur votre environnement de calcul avec "),Pe=n("code"),Cr=c("transformers-cli env"),jr=c(" lorsque vous cr\xE9ez une nouvelle question dans le d\xE9p\xF4t \u{1F917} "),ke=n("em"),Lr=c("Transformers"),Ur=c(" ?"),Ve=l(),m(oe.$$.fragment),this.h()},l(e){const s=vt('[data-svelte="svelte-1phssyn"]',document.head);g=a(s,"META",{name:!0,content:!0}),s.forEach(r),Ae=p(e),x=a(e,"H1",{class:!0});var Ke=o(x);C=a(Ke,"A",{id:!0,class:!0,href:!0});var Tr=o(C);pe=a(Tr,"SPAN",{});var Gr=o(pe);f(H.$$.fragment,Gr),Gr.forEach(r),Tr.forEach(r),ur=p(Ke),ce=a(Ke,"SPAN",{});var Qr=o(ce);ir=d(Qr,"Quiz de fin de chapitre"),Qr.forEach(r),Ke.forEach(r),Se=p(e),ue=a(e,"P",{});var Dr=o(ue);lr=d(Dr,"Testons ce que vous avez appris dans ce chapitre !"),Dr.forEach(r),Ce=p(e),b=a(e,"H3",{class:!0});var Xe=o(b);j=a(Xe,"A",{id:!0,class:!0,href:!0});var Ir=o(j);de=a(Ir,"SPAN",{});var Hr=o(de);f(B.$$.fragment,Hr),Hr.forEach(r),Ir.forEach(r),pr=p(Xe),F=a(Xe,"SPAN",{});var Ye=o(F);cr=d(Ye,"1. Dans quel ordre devez-vous lire un "),me=a(Ye,"I",{});var Br=o(me);dr=d(Br,"traceback"),Br.forEach(r),mr=d(Ye," Python ?"),Ye.forEach(r),Xe.forEach(r),je=p(e),f(M.$$.fragment,e),Le=p(e),y=a(e,"H3",{class:!0});var Ze=o(y);L=a(Ze,"A",{id:!0,class:!0,href:!0});var Fr=o(L);fe=a(Fr,"SPAN",{});var Mr=o(fe);f(O.$$.fragment,Mr),Mr.forEach(r),Fr.forEach(r),fr=p(Ze),ve=a(Ze,"SPAN",{});var Or=o(ve);vr=d(Or,"2. Qu\u2019est-ce qu\u2019un exemple minimal reproductible ?"),Or.forEach(r),Ze.forEach(r),Ue=p(e),f(R.$$.fragment,e),Ne=p(e),_=a(e,"H3",{class:!0});var er=o(_);U=a(er,"A",{id:!0,class:!0,href:!0});var Rr=o(U);he=a(Rr,"SPAN",{});var Jr=o(he);f(J.$$.fragment,Jr),Jr.forEach(r),Rr.forEach(r),hr=p(er),$e=a(er,"SPAN",{});var Vr=o($e);$r=d(Vr,"3. Supposons que vous essayez d\u2019ex\xE9cuter le code suivant, qui g\xE9n\xE8re une erreur :"),Vr.forEach(r),er.forEach(r),Te=p(e),f(V.$$.fragment,e),Ge=p(e),ie=a(e,"P",{});var Wr=o(ie);qr=d(Wr,"Lequel des \xE9l\xE9ments suivants pourrait \xEAtre un bon choix pour le titre d\u2019un sujet de forum pour demander de l\u2019aide ?"),Wr.forEach(r),Qe=p(e),f(W.$$.fragment,e),De=p(e),w=a(e,"H3",{class:!0});var rr=o(w);N=a(rr,"A",{id:!0,class:!0,href:!0});var Kr=o(N);qe=a(Kr,"SPAN",{});var Xr=o(qe);f(K.$$.fragment,Xr),Xr.forEach(r),Kr.forEach(r),gr=p(rr),X=a(rr,"SPAN",{});var tr=o(X);xr=d(tr,"4. Supposons que vous ayez essay\xE9 d\u2019ex\xE9cuter "),ge=a(tr,"CODE",{});var Yr=o(ge);br=d(Yr,"trainer.train()"),Yr.forEach(r),yr=d(tr," et que vous soyez confront\xE9 \xE0 une erreur \xE9nigmatique qui ne vous dit pas exactement d\u2019o\xF9 vient l\u2019erreur. Quel est le premier endroit o\xF9 vous devez chercher les erreurs dans votre pipeline d\u2019entra\xEEnement ?"),tr.forEach(r),rr.forEach(r),Ie=p(e),f(Y.$$.fragment,e),He=p(e),z=a(e,"H3",{class:!0});var sr=o(z);T=a(sr,"A",{id:!0,class:!0,href:!0});var Zr=o(T);xe=a(Zr,"SPAN",{});var et=o(xe);f(Z.$$.fragment,et),et.forEach(r),Zr.forEach(r),_r=p(sr),be=a(sr,"SPAN",{});var rt=o(be);wr=d(rt,"5. Quelle est la meilleure fa\xE7on de d\xE9boguer une erreur CUDA ?"),rt.forEach(r),sr.forEach(r),Be=p(e),f(ee.$$.fragment,e),Fe=p(e),E=a(e,"H3",{class:!0});var nr=o(E);G=a(nr,"A",{id:!0,class:!0,href:!0});var tt=o(G);ye=a(tt,"SPAN",{});var st=o(ye);f(re.$$.fragment,st),st.forEach(r),tt.forEach(r),zr=p(nr),_e=a(nr,"SPAN",{});var nt=o(_e);Er=d(nt,"6. Quelle est la meilleure fa\xE7on de faire corriger un probl\xE8me sur GitHub ?"),nt.forEach(r),nr.forEach(r),Me=p(e),f(te.$$.fragment,e),Oe=p(e),P=a(e,"H3",{class:!0});var ar=o(P);Q=a(ar,"A",{id:!0,class:!0,href:!0});var at=o(Q);we=a(at,"SPAN",{});var ot=o(we);f(se.$$.fragment,ot),ot.forEach(r),at.forEach(r),Pr=p(ar),ze=a(ar,"SPAN",{});var ut=o(ze);kr=d(ut,"7. Pourquoi le surapprentissage \xE0 un batch est-il g\xE9n\xE9ralement une bonne technique de d\xE9bogage ?"),ut.forEach(r),ar.forEach(r),Re=p(e),f(ne.$$.fragment,e),Je=p(e),k=a(e,"H3",{class:!0});var or=o(k);D=a(or,"A",{id:!0,class:!0,href:!0});var it=o(D);Ee=a(it,"SPAN",{});var lt=o(Ee);f(ae.$$.fragment,lt),lt.forEach(r),it.forEach(r),Ar=p(or),A=a(or,"SPAN",{});var le=o(A);Sr=d(le,"8. Pourquoi est-ce une bonne id\xE9e d\u2019inclure des d\xE9tails sur votre environnement de calcul avec "),Pe=a(le,"CODE",{});var pt=o(Pe);Cr=d(pt,"transformers-cli env"),pt.forEach(r),jr=d(le," lorsque vous cr\xE9ez une nouvelle question dans le d\xE9p\xF4t \u{1F917} "),ke=a(le,"EM",{});var ct=o(ke);Lr=d(ct,"Transformers"),ct.forEach(r),Ur=d(le," ?"),le.forEach(r),or.forEach(r),Ve=p(e),f(oe.$$.fragment,e),this.h()},h(){u(g,"name","hf:doc:metadata"),u(g,"content",JSON.stringify(xt)),u(C,"id","quiz-de-fin-de-chapitre"),u(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(C,"href","#quiz-de-fin-de-chapitre"),u(x,"class","relative group"),u(j,"id","1.-dans-quel-ordre-devez-vous-lire-un-<i>traceback</i>-python-?"),u(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(j,"href","#1.-dans-quel-ordre-devez-vous-lire-un-<i>traceback</i>-python-?"),u(b,"class","relative group"),u(L,"id","2.-qu\u2019est-ce-qu\u2019un-exemple-minimal-reproductible-?"),u(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(L,"href","#2.-qu\u2019est-ce-qu\u2019un-exemple-minimal-reproductible-?"),u(y,"class","relative group"),u(U,"id","3.-supposons-que-vous-essayez-d\u2019ex\xE9cuter-le-code-suivant,-qui-g\xE9n\xE8re-une-erreur-:"),u(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(U,"href","#3.-supposons-que-vous-essayez-d\u2019ex\xE9cuter-le-code-suivant,-qui-g\xE9n\xE8re-une-erreur-:"),u(_,"class","relative group"),u(N,"id","4.-supposons-que-vous-ayez-essay\xE9-d\u2019ex\xE9cuter-<code>trainer.train()</code>-et-que-vous-soyez-confront\xE9-\xE0-une-erreur-\xE9nigmatique-qui-ne-vous-dit-pas-exactement-d\u2019o\xF9-vient-l\u2019erreur.-quel-est-le-premier-endroit-o\xF9-vous-devez-chercher-les-erreurs-dans-votre-pipeline-d\u2019entra\xEEnement-?"),u(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(N,"href","#4.-supposons-que-vous-ayez-essay\xE9-d\u2019ex\xE9cuter-<code>trainer.train()</code>-et-que-vous-soyez-confront\xE9-\xE0-une-erreur-\xE9nigmatique-qui-ne-vous-dit-pas-exactement-d\u2019o\xF9-vient-l\u2019erreur.-quel-est-le-premier-endroit-o\xF9-vous-devez-chercher-les-erreurs-dans-votre-pipeline-d\u2019entra\xEEnement-?"),u(w,"class","relative group"),u(T,"id","5.-quelle-est-la-meilleure-fa\xE7on-de-d\xE9boguer-une-erreur-cuda-?"),u(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(T,"href","#5.-quelle-est-la-meilleure-fa\xE7on-de-d\xE9boguer-une-erreur-cuda-?"),u(z,"class","relative group"),u(G,"id","6.-quelle-est-la-meilleure-fa\xE7on-de-faire-corriger-un-probl\xE8me-sur-github-?"),u(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(G,"href","#6.-quelle-est-la-meilleure-fa\xE7on-de-faire-corriger-un-probl\xE8me-sur-github-?"),u(E,"class","relative group"),u(Q,"id","7.-pourquoi-le-surapprentissage-\xE0-un-batch-est-il-g\xE9n\xE9ralement-une-bonne-technique-de-d\xE9bogage-?"),u(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Q,"href","#7.-pourquoi-le-surapprentissage-\xE0-un-batch-est-il-g\xE9n\xE9ralement-une-bonne-technique-de-d\xE9bogage-?"),u(P,"class","relative group"),u(D,"id","8.-pourquoi-est-ce-une-bonne-id\xE9e-d\u2019inclure-des-d\xE9tails-sur-votre-environnement-de-calcul-avec-<code>transformers-cli-env</code>-lorsque-vous-cr\xE9ez-une-nouvelle-question-dans-le-d\xE9p\xF4t-\u{1F917}-<em>transformers</em>-?"),u(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(D,"href","#8.-pourquoi-est-ce-une-bonne-id\xE9e-d\u2019inclure-des-d\xE9tails-sur-votre-environnement-de-calcul-avec-<code>transformers-cli-env</code>-lorsque-vous-cr\xE9ez-une-nouvelle-question-dans-le-d\xE9p\xF4t-\u{1F917}-<em>transformers</em>-?"),u(k,"class","relative group")},m(e,s){t(document.head,g),i(e,Ae,s),i(e,x,s),t(x,C),t(C,pe),v(H,pe,null),t(x,ur),t(x,ce),t(ce,ir),i(e,Se,s),i(e,ue,s),t(ue,lr),i(e,Ce,s),i(e,b,s),t(b,j),t(j,de),v(B,de,null),t(b,pr),t(b,F),t(F,cr),t(F,me),t(me,dr),t(F,mr),i(e,je,s),v(M,e,s),i(e,Le,s),i(e,y,s),t(y,L),t(L,fe),v(O,fe,null),t(y,fr),t(y,ve),t(ve,vr),i(e,Ue,s),v(R,e,s),i(e,Ne,s),i(e,_,s),t(_,U),t(U,he),v(J,he,null),t(_,hr),t(_,$e),t($e,$r),i(e,Te,s),v(V,e,s),i(e,Ge,s),i(e,ie,s),t(ie,qr),i(e,Qe,s),v(W,e,s),i(e,De,s),i(e,w,s),t(w,N),t(N,qe),v(K,qe,null),t(w,gr),t(w,X),t(X,xr),t(X,ge),t(ge,br),t(X,yr),i(e,Ie,s),v(Y,e,s),i(e,He,s),i(e,z,s),t(z,T),t(T,xe),v(Z,xe,null),t(z,_r),t(z,be),t(be,wr),i(e,Be,s),v(ee,e,s),i(e,Fe,s),i(e,E,s),t(E,G),t(G,ye),v(re,ye,null),t(E,zr),t(E,_e),t(_e,Er),i(e,Me,s),v(te,e,s),i(e,Oe,s),i(e,P,s),t(P,Q),t(Q,we),v(se,we,null),t(P,Pr),t(P,ze),t(ze,kr),i(e,Re,s),v(ne,e,s),i(e,Je,s),i(e,k,s),t(k,D),t(D,Ee),v(ae,Ee,null),t(k,Ar),t(k,A),t(A,Sr),t(A,Pe),t(Pe,Cr),t(A,jr),t(A,ke),t(ke,Lr),t(A,Ur),i(e,Ve,s),v(oe,e,s),We=!0},p:ht,i(e){We||(h(H.$$.fragment,e),h(B.$$.fragment,e),h(M.$$.fragment,e),h(O.$$.fragment,e),h(R.$$.fragment,e),h(J.$$.fragment,e),h(V.$$.fragment,e),h(W.$$.fragment,e),h(K.$$.fragment,e),h(Y.$$.fragment,e),h(Z.$$.fragment,e),h(ee.$$.fragment,e),h(re.$$.fragment,e),h(te.$$.fragment,e),h(se.$$.fragment,e),h(ne.$$.fragment,e),h(ae.$$.fragment,e),h(oe.$$.fragment,e),We=!0)},o(e){$(H.$$.fragment,e),$(B.$$.fragment,e),$(M.$$.fragment,e),$(O.$$.fragment,e),$(R.$$.fragment,e),$(J.$$.fragment,e),$(V.$$.fragment,e),$(W.$$.fragment,e),$(K.$$.fragment,e),$(Y.$$.fragment,e),$(Z.$$.fragment,e),$(ee.$$.fragment,e),$(re.$$.fragment,e),$(te.$$.fragment,e),$(se.$$.fragment,e),$(ne.$$.fragment,e),$(ae.$$.fragment,e),$(oe.$$.fragment,e),We=!1},d(e){r(g),e&&r(Ae),e&&r(x),q(H),e&&r(Se),e&&r(ue),e&&r(Ce),e&&r(b),q(B),e&&r(je),q(M,e),e&&r(Le),e&&r(y),q(O),e&&r(Ue),q(R,e),e&&r(Ne),e&&r(_),q(J),e&&r(Te),q(V,e),e&&r(Ge),e&&r(ie),e&&r(Qe),q(W,e),e&&r(De),e&&r(w),q(K),e&&r(Ie),q(Y,e),e&&r(He),e&&r(z),q(Z),e&&r(Be),q(ee,e),e&&r(Fe),e&&r(E),q(re),e&&r(Me),q(te,e),e&&r(Oe),e&&r(P),q(se),e&&r(Re),q(ne,e),e&&r(Je),e&&r(k),q(ae),e&&r(Ve),q(oe,e)}}}const xt={local:"quiz-de-fin-de-chapitre",title:"Quiz de fin de chapitre"};function bt(Nr){return $t(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Et extends dt{constructor(g){super();mt(this,g,bt,gt,ft,{})}}export{Et as default,xt as metadata};
