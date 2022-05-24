import{S as Bo,i as Yo,s as Ko,e as n,k as p,w as b,t,M as Qo,c as l,d as r,m,a as i,x as h,h as o,b as c,G as s,g as u,y as g,q,o as z,B as $,v as Wo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Xo}from"../../chunks/Tip-hf-doc-builder.js";import{Y as Zo}from"../../chunks/Youtube-hf-doc-builder.js";import{I as ie}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as Jt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as en}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";function sn(fs){let v,D,d,_,C;return{c(){v=n("p"),D=t("\u{1F6A8} De nombreux probl\xE8mes dans le d\xE9p\xF4t \u{1F917} "),d=n("em"),_=t("Transformers"),C=t(" ne sont pas r\xE9solus car les donn\xE9es utilis\xE9es pour les reproduire ne sont pas accessibles.")},l(E){v=l(E,"P",{});var k=i(v);D=o(k,"\u{1F6A8} De nombreux probl\xE8mes dans le d\xE9p\xF4t \u{1F917} "),d=l(k,"EM",{});var N=i(d);_=o(N,"Transformers"),N.forEach(r),C=o(k," ne sont pas r\xE9solus car les donn\xE9es utilis\xE9es pour les reproduire ne sont pas accessibles."),k.forEach(r)},m(E,k){u(E,v,k),s(v,D),s(v,d),s(d,_),s(v,C)},d(E){E&&r(v)}}}function rn(fs){let v,D,d,_,C,E,k,N,ur,Ae,pr,bs,ae,hs,w,mr,cr,vr,Ce,dr,fr,ue,br,hr,gs,pe,qs,O,gr,Ne,qr,zr,zs,T,F,Te,me,$r,Me,Er,$s,V,_r,Ue,wr,yr,Es,J,_s,R,xr,He,kr,Pr,ws,P,jr,Le,Sr,Ar,Ie,Cr,Nr,ys,M,B,Ge,ce,Tr,De,Mr,xs,j,Ur,Oe,Hr,Lr,Y,Ir,Fe,Gr,Dr,ks,S,Or,Ve,Fr,Vr,ve,Jr,Rr,Ps,U,K,Je,de,Br,Re,Yr,js,Q,Kr,Be,Qr,Wr,Ss,fe,As,_e,Xr,Cs,be,Ns,f,Zr,Ye,et,st,Ke,rt,tt,Qe,ot,nt,We,lt,it,Ts,H,W,Xe,he,at,Ze,ut,Ms,y,pt,es,mt,ct,ss,vt,dt,rs,ft,bt,Us,we,ht,Hs,L,X,ts,ge,gt,os,qt,Ls,x,zt,ns,$t,Et,ls,_t,wt,is,yt,xt,Is,qe,Gs,Z,kt,as,Pt,jt,Ds,ee,St,us,At,Ct,Os,se,Nt,ps,Tt,Mt,Fs,I,re,ms,ze,Ut,cs,Ht,Vs,ye,Lt,Js,G,te,vs,$e,It,ds,Gt,Rs,xe,Dt,Bs,ke,Ot,Ys;return E=new ie({}),ae=new en({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter8/section5.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter8/section5.ipynb"}]}}),pe=new Zo({props:{id:"_PAli-V4wj0"}}),me=new ie({}),J=new Xo({props:{$$slots:{default:[sn]},$$scope:{ctx:fs}}}),ce=new ie({}),de=new ie({}),fe=new Jt({props:{code:"transformers-cli env",highlighted:'transformers-<span class="hljs-keyword">cli</span> env'}}),be=new Jt({props:{code:`Copy-and-paste the text below in your GitHub issue and FILL OUT the two last points.

- \`transformers\` version: 4.12.0.dev0
- Platform: Linux-5.10.61-1-MANJARO-x86_64-with-arch-Manjaro-Linux
- Python version: 3.7.9
- PyTorch version (GPU?): 1.8.1+cu111 (True)
- Tensorflow version (GPU?): 2.5.0 (True)
- Flax version (CPU?/GPU?/TPU?): 0.3.4 (cpu)
- Jax version: 0.2.13
- JaxLib version: 0.1.65
- Using GPU in script?: <fill in>
- Using distributed or parallel set-up in script?: <fill in>`,highlighted:`<span class="hljs-keyword">Copy</span>-<span class="hljs-keyword">and</span>-paste the <span class="hljs-type">text</span> below <span class="hljs-keyword">in</span> your GitHub issue <span class="hljs-keyword">and</span> FILL <span class="hljs-keyword">OUT</span> the two last points.

- \`transformers\` <span class="hljs-keyword">version</span>: <span class="hljs-number">4.12</span><span class="hljs-number">.0</span>.dev0
- Platform: Linux<span class="hljs-number">-5.10</span><span class="hljs-number">.61</span><span class="hljs-number">-1</span>-MANJARO-x86_64-<span class="hljs-keyword">with</span>-arch-Manjaro-Linux
- Python <span class="hljs-keyword">version</span>: <span class="hljs-number">3.7</span><span class="hljs-number">.9</span>
- PyTorch version (GPU?): <span class="hljs-number">1.8</span><span class="hljs-number">.1</span>+cu111 (<span class="hljs-keyword">True</span>)
- Tensorflow version (GPU?): <span class="hljs-number">2.5</span><span class="hljs-number">.0</span> (<span class="hljs-keyword">True</span>)
- Flax version (CPU?/GPU?/TPU?): <span class="hljs-number">0.3</span><span class="hljs-number">.4</span> (cpu)
- Jax <span class="hljs-keyword">version</span>: <span class="hljs-number">0.2</span><span class="hljs-number">.13</span>
- JaxLib <span class="hljs-keyword">version</span>: <span class="hljs-number">0.1</span><span class="hljs-number">.65</span>
- <span class="hljs-keyword">Using</span> GPU <span class="hljs-keyword">in</span> script?: &lt;fill <span class="hljs-keyword">in</span>&gt;
- <span class="hljs-keyword">Using</span> distributed <span class="hljs-keyword">or</span> parallel <span class="hljs-keyword">set</span>-up <span class="hljs-keyword">in</span> script?: &lt;fill <span class="hljs-keyword">in</span>&gt;`}}),he=new ie({}),ge=new ie({}),qe=new Jt({props:{code:"```python",highlighted:"```python"}}),ze=new ie({}),$e=new ie({}),{c(){v=n("meta"),D=p(),d=n("h1"),_=n("a"),C=n("span"),b(E.$$.fragment),k=p(),N=n("span"),ur=t("Comment r\xE9diger une bonne "),Ae=n("i"),pr=t("issue"),bs=p(),b(ae.$$.fragment),hs=p(),w=n("p"),mr=t("Lorsque vous rencontrez un probl\xE8me avec l\u2019une des biblioth\xE8ques d\u2019Hugging Face, faites le nous savoir afin que nous puissions le corriger (il en va de m\xEAme pour toute biblioth\xE8que open source)."),cr=n("br"),vr=t(`
Si vous n\u2019\xEAtes pas compl\xE8tement certain que le `),Ce=n("em"),dr=t("bug"),fr=t(" se trouve dans votre propre code ou dans l\u2019une de nos biblioth\xE8ques, le premier endroit \xE0 v\xE9rifier est le "),ue=n("a"),br=t("forum"),hr=t(". La communaut\xE9 vous aidera \xE0 r\xE9soudre votre probl\xE8me et l\u2019\xE9quipe d\u2019Hugging Face y suit de pr\xE8s les discussions qui s\u2019y d\xE9roulent."),gs=p(),b(pe.$$.fragment),qs=p(),O=n("p"),gr=t("Lorsque vous \xEAtes s\xFBr d\u2019avoir identifier un "),Ne=n("em"),qr=t("bug"),zr=t(", la premi\xE8re \xE9tape consiste \xE0 construire un exemple minimal qui soit reproductible."),zs=p(),T=n("h2"),F=n("a"),Te=n("span"),b(me.$$.fragment),$r=p(),Me=n("span"),Er=t("Cr\xE9er un exemple minimal reproductible"),$s=p(),V=n("p"),_r=t("Il est tr\xE8s important d\u2019isoler le morceau de code qui produit le "),Ue=n("em"),wr=t("bug"),yr=t(" car personne dans l\u2019\xE9quipe d\u2019Hugging Face n\u2019est (encore) un magicien et on ne peut pas r\xE9parer ce qu\u2019on ne peut pas voir. Un exemple minimal reproductible doit, comme son nom l\u2019indique, \xEAtre reproductible. Cela signifie qu\u2019il ne doit pas d\xE9pendre de fichiers ou de donn\xE9es externes que vous pourriez avoir. Essayez de remplacer les donn\xE9es que vous utilisez par des valeurs fictives qui ressemblent \xE0 vos valeurs r\xE9elles et qui produisent toujours la m\xEAme erreur."),Es=p(),b(J.$$.fragment),_s=p(),R=n("p"),xr=t("Une fois que vous avez quelque chose d\u2019autonome, essayez de le r\xE9duire au moins de lignes de code possible, en construisant ce que nous appelons un "),He=n("em"),kr=t("exemple reproductible minimal"),Pr=t(". Bien que cela n\xE9cessite un peu plus de travail de votre part, vous serez presque assur\xE9 d\u2019obtenir de l\u2019aide et une correction si vous fournissez un exemple reproductible court et agr\xE9able."),ws=p(),P=n("p"),jr=t("Si vous vous sentez suffisamment \xE0 l\u2019aise, allez inspecter le code source o\xF9 se trouve votre "),Le=n("em"),Sr=t("bug"),Ar=t(". Vous trouverez peut-\xEAtre une solution \xE0 votre probl\xE8me (dans ce cas, vous pouvez m\xEAme sugg\xE9rer une "),Ie=n("em"),Cr=t("pull request"),Nr=t(" pour le corriger), mais plus g\xE9n\xE9ralement, cela peut aider les mainteneurs \xE0 mieux comprendre le code source lorsqu\u2019ils lisent votre message."),ys=p(),M=n("h2"),B=n("a"),Ge=n("span"),b(ce.$$.fragment),Tr=p(),De=n("span"),Mr=t("Remplir le gabarit de probl\xE8me"),xs=p(),j=n("p"),Ur=t("Lorsque vous ouvrerez votre "),Oe=n("em"),Hr=t("issue"),Lr=t(" vous remarquerez qu\u2019il y a un gabarit \xE0 remplir. Nous suivrons ici celui pour la biblioth\xE8que "),Y=n("a"),Ir=t("\u{1F917} "),Fe=n("em"),Gr=t("Transformers"),Dr=t(" mais le m\xEAme type d\u2019information sera requis dans un autre d\xE9p\xF4t. Ne laissez pas le gabarit vide : prendre le temps de le remplir maximisera vos chances d\u2019obtenir une r\xE9ponse et de r\xE9soudre votre probl\xE8me."),ks=p(),S=n("p"),Or=t("En g\xE9n\xE9ral, lorsque vous signalez un probl\xE8me, restez toujours courtois. Il s\u2019agit d\u2019un projet open source, vous utilisez donc un logiciel libre, et personne n\u2019est oblig\xE9 de vous aider. Vous pouvez inclure dans votre "),Ve=n("em"),Fr=t("issue"),Vr=t(" des critiques qui vous semblent justifi\xE9es mais les mainteneurs pourraient tr\xE8s bien les prendre mal et ne pas \xEAtre press\xE9s de vous aider. Assurez-vous de lire le "),ve=n("a"),Jr=t("code de conduite"),Rr=t(" du projet."),Ps=p(),U=n("h3"),K=n("a"),Je=n("span"),b(de.$$.fragment),Br=p(),Re=n("span"),Yr=t("Inclure les informations sur votre environnement"),js=p(),Q=n("p"),Kr=t("\u{1F917} "),Be=n("em"),Qr=t("Transformers"),Wr=t(" fournit un utilitaire pour obtenir toutes les informations n\xE9cessaire concernant votre environnement. Il suffit de taper ce qui suit dans votre terminal :"),Ss=p(),b(fe.$$.fragment),As=p(),_e=n("p"),Xr=t("et vous devriez obtenir quelque chose comme :"),Cs=p(),b(be.$$.fragment),Ns=p(),f=n("p"),Zr=t("Vous pouvez \xE9galement ajouter un "),Ye=n("code"),et=t("!"),st=t(" au d\xE9but de la commande "),Ke=n("code"),rt=t("transformers-cli env"),tt=t(" pour l\u2019ex\xE9cuter depuis une cellule de "),Qe=n("em"),ot=t("notebook"),nt=t(" puis copier et coller le r\xE9sultat au d\xE9but de votre "),We=n("em"),lt=t("issue"),it=t("."),Ts=p(),H=n("h3"),W=n("a"),Xe=n("span"),b(he.$$.fragment),at=p(),Ze=n("span"),ut=t("Taguer des personnes"),Ms=p(),y=n("p"),pt=t("Taguer des personnes en tapant un "),es=n("code"),mt=t("@"),ct=t(" suivi de leur identifiant GitHub leur enverra une notification afin qu\u2019elles voient votre probl\xE8me et puissent r\xE9pondre plus rapidement. N\xE9anmoins utilisez cette fonction avec mod\xE9ration car les personnes que vous taguez peuvent ne pas appr\xE9cier d\u2019\xEAtre notifi\xE9es si elles n\u2019ont pas de lien direct avec le probl\xE8me. Si vous avez regard\xE9 les fichiers sources li\xE9s \xE0 votre "),ss=n("em"),vt=t("bug"),dt=t(", vous devriez taguer la derni\xE8re personne qui a fait des changements \xE0 la ligne que vous pensez \xEAtre responsable de votre probl\xE8me (vous pouvez trouver cette information en regardant ladite ligne sur GitHub, en la s\xE9lectionnant, puis en cliquant sur \xAB "),rs=n("em"),ft=t("View git blame"),bt=t(" \xBB)."),Us=p(),we=n("p"),ht=t("Sinon, le gabarit propose des suggestions de personnes \xE0 taguer. En g\xE9n\xE9ral, ne marquez jamais plus de trois personnes !"),Hs=p(),L=n("h3"),X=n("a"),ts=n("span"),b(ge.$$.fragment),gt=p(),os=n("span"),qt=t("Inclure un exemple reproductible"),Ls=p(),x=n("p"),zt=t("Si vous avez r\xE9ussi \xE0 cr\xE9er un exemple autonome qui produit le "),ns=n("em"),$t=t("bug"),Et=t(", il est temps de l\u2019inclure ! Tapez une ligne avec trois "),ls=n("em"),_t=t("backticks"),wt=t(" suivis de "),is=n("code"),yt=t("python"),xt=t(", comme ceci :"),Is=p(),b(qe.$$.fragment),Gs=p(),Z=n("p"),kt=t("puis collez votre exemple minimal reproductible et tapez une nouvelle ligne avec trois "),as=n("em"),Pt=t("backticks"),jt=t(". Cela permettra de s\u2019assurer que votre code est correctement format\xE9."),Ds=p(),ee=n("p"),St=t("Si vous n\u2019avez pas r\xE9ussi \xE0 cr\xE9er un exemple reproductible, expliquez en des \xE9tapes claires comment vous \xEAtes arriv\xE9 \xE0 votre probl\xE8me. Si vous le pouvez, incluez un lien vers un "),us=n("em"),At=t("notebook"),Ct=t(" d\u2019un Google Colab o\xF9 vous avez trouv\xE9 l\u2019erreur. Plus vous partagerez d\u2019informations, plus les mainteneurs seront en mesure de vous r\xE9pondre."),Os=p(),se=n("p"),Nt=t("Dans tous les cas, vous devez copier et coller l\u2019int\xE9gralit\xE9 du message d\u2019erreur que vous obtenez. Si vous travaillez dans Colab, n\u2019oubliez pas que certaines cellules peuvent \xEAtre automatiquement r\xE9duites dans la trace de la pile et veillez donc \xE0 les afficher avant de les copier. Comme pour l\u2019exemple de code, placez le message d\u2019erreur entre deux lignes avec trois "),ps=n("em"),Tt=t("backticks"),Mt=t(" afin qu\u2019il soit correctement format\xE9."),Fs=p(),I=n("h3"),re=n("a"),ms=n("span"),b(ze.$$.fragment),Ut=p(),cs=n("span"),Ht=t("D\xE9crire le comportement attendu"),Vs=p(),ye=n("p"),Lt=t("Expliquez en quelques lignes ce que vous vous attendiez \xE0 obtenir afin que les mainteneurs comprennent bien le probl\xE8me. Cette partie est g\xE9n\xE9ralement assez \xE9vidente, elle devrait donc tenir en une seule phrase mais dans certains cas vous pouvez avoir beaucoup \xE0 dire."),Js=p(),G=n("h2"),te=n("a"),vs=n("span"),b($e.$$.fragment),It=p(),ds=n("span"),Gt=t("Et ensuite ?"),Rs=p(),xe=n("p"),Dt=t("Une fois que votre probl\xE8me est class\xE9, v\xE9rifiez rapidement que tout est en ordre. Vous pouvez modifier le probl\xE8me si vous avez fait une erreur ou m\xEAme changer son titre si vous vous rendez compte que le probl\xE8me est diff\xE9rent de ce que vous pensiez initialement."),Bs=p(),ke=n("p"),Ot=t("Il est inutile d\u2019envoyer des messages aux personnes concern\xE9es si vous n\u2019obtenez pas de r\xE9ponse. Si personne ne vous aide au bout de quelques jours, il est probable que personne n\u2019a pu donner un sens \xE0 votre probl\xE8me. N\u2019h\xE9sitez pas \xE0 revenir \xE0 l\u2019exemple reproductible. Pouvez-vous le rendre plus court et plus concis ? Si vous n\u2019obtenez pas de r\xE9ponse au bout d\u2019une semaine, vous pouvez laisser un message demandant gentiment de l\u2019aide, surtout si vous avez modifi\xE9 votre question pour inclure plus d\u2019informations sur le probl\xE8me."),this.h()},l(e){const a=Qo('[data-svelte="svelte-1phssyn"]',document.head);v=l(a,"META",{name:!0,content:!0}),a.forEach(r),D=m(e),d=l(e,"H1",{class:!0});var Ee=i(d);_=l(Ee,"A",{id:!0,class:!0,href:!0});var Rt=i(_);C=l(Rt,"SPAN",{});var Bt=i(C);h(E.$$.fragment,Bt),Bt.forEach(r),Rt.forEach(r),k=m(Ee),N=l(Ee,"SPAN",{});var Ft=i(N);ur=o(Ft,"Comment r\xE9diger une bonne "),Ae=l(Ft,"I",{});var Yt=i(Ae);pr=o(Yt,"issue"),Yt.forEach(r),Ft.forEach(r),Ee.forEach(r),bs=m(e),h(ae.$$.fragment,e),hs=m(e),w=l(e,"P",{});var oe=i(w);mr=o(oe,"Lorsque vous rencontrez un probl\xE8me avec l\u2019une des biblioth\xE8ques d\u2019Hugging Face, faites le nous savoir afin que nous puissions le corriger (il en va de m\xEAme pour toute biblioth\xE8que open source)."),cr=l(oe,"BR",{}),vr=o(oe,`
Si vous n\u2019\xEAtes pas compl\xE8tement certain que le `),Ce=l(oe,"EM",{});var Kt=i(Ce);dr=o(Kt,"bug"),Kt.forEach(r),fr=o(oe," se trouve dans votre propre code ou dans l\u2019une de nos biblioth\xE8ques, le premier endroit \xE0 v\xE9rifier est le "),ue=l(oe,"A",{href:!0,rel:!0});var Qt=i(ue);br=o(Qt,"forum"),Qt.forEach(r),hr=o(oe,". La communaut\xE9 vous aidera \xE0 r\xE9soudre votre probl\xE8me et l\u2019\xE9quipe d\u2019Hugging Face y suit de pr\xE8s les discussions qui s\u2019y d\xE9roulent."),oe.forEach(r),gs=m(e),h(pe.$$.fragment,e),qs=m(e),O=l(e,"P",{});var Ks=i(O);gr=o(Ks,"Lorsque vous \xEAtes s\xFBr d\u2019avoir identifier un "),Ne=l(Ks,"EM",{});var Wt=i(Ne);qr=o(Wt,"bug"),Wt.forEach(r),zr=o(Ks,", la premi\xE8re \xE9tape consiste \xE0 construire un exemple minimal qui soit reproductible."),Ks.forEach(r),zs=m(e),T=l(e,"H2",{class:!0});var Qs=i(T);F=l(Qs,"A",{id:!0,class:!0,href:!0});var Xt=i(F);Te=l(Xt,"SPAN",{});var Zt=i(Te);h(me.$$.fragment,Zt),Zt.forEach(r),Xt.forEach(r),$r=m(Qs),Me=l(Qs,"SPAN",{});var eo=i(Me);Er=o(eo,"Cr\xE9er un exemple minimal reproductible"),eo.forEach(r),Qs.forEach(r),$s=m(e),V=l(e,"P",{});var Ws=i(V);_r=o(Ws,"Il est tr\xE8s important d\u2019isoler le morceau de code qui produit le "),Ue=l(Ws,"EM",{});var so=i(Ue);wr=o(so,"bug"),so.forEach(r),yr=o(Ws," car personne dans l\u2019\xE9quipe d\u2019Hugging Face n\u2019est (encore) un magicien et on ne peut pas r\xE9parer ce qu\u2019on ne peut pas voir. Un exemple minimal reproductible doit, comme son nom l\u2019indique, \xEAtre reproductible. Cela signifie qu\u2019il ne doit pas d\xE9pendre de fichiers ou de donn\xE9es externes que vous pourriez avoir. Essayez de remplacer les donn\xE9es que vous utilisez par des valeurs fictives qui ressemblent \xE0 vos valeurs r\xE9elles et qui produisent toujours la m\xEAme erreur."),Ws.forEach(r),Es=m(e),h(J.$$.fragment,e),_s=m(e),R=l(e,"P",{});var Xs=i(R);xr=o(Xs,"Une fois que vous avez quelque chose d\u2019autonome, essayez de le r\xE9duire au moins de lignes de code possible, en construisant ce que nous appelons un "),He=l(Xs,"EM",{});var ro=i(He);kr=o(ro,"exemple reproductible minimal"),ro.forEach(r),Pr=o(Xs,". Bien que cela n\xE9cessite un peu plus de travail de votre part, vous serez presque assur\xE9 d\u2019obtenir de l\u2019aide et une correction si vous fournissez un exemple reproductible court et agr\xE9able."),Xs.forEach(r),ws=m(e),P=l(e,"P",{});var Pe=i(P);jr=o(Pe,"Si vous vous sentez suffisamment \xE0 l\u2019aise, allez inspecter le code source o\xF9 se trouve votre "),Le=l(Pe,"EM",{});var to=i(Le);Sr=o(to,"bug"),to.forEach(r),Ar=o(Pe,". Vous trouverez peut-\xEAtre une solution \xE0 votre probl\xE8me (dans ce cas, vous pouvez m\xEAme sugg\xE9rer une "),Ie=l(Pe,"EM",{});var oo=i(Ie);Cr=o(oo,"pull request"),oo.forEach(r),Nr=o(Pe," pour le corriger), mais plus g\xE9n\xE9ralement, cela peut aider les mainteneurs \xE0 mieux comprendre le code source lorsqu\u2019ils lisent votre message."),Pe.forEach(r),ys=m(e),M=l(e,"H2",{class:!0});var Zs=i(M);B=l(Zs,"A",{id:!0,class:!0,href:!0});var no=i(B);Ge=l(no,"SPAN",{});var lo=i(Ge);h(ce.$$.fragment,lo),lo.forEach(r),no.forEach(r),Tr=m(Zs),De=l(Zs,"SPAN",{});var io=i(De);Mr=o(io,"Remplir le gabarit de probl\xE8me"),io.forEach(r),Zs.forEach(r),xs=m(e),j=l(e,"P",{});var je=i(j);Ur=o(je,"Lorsque vous ouvrerez votre "),Oe=l(je,"EM",{});var ao=i(Oe);Hr=o(ao,"issue"),ao.forEach(r),Lr=o(je," vous remarquerez qu\u2019il y a un gabarit \xE0 remplir. Nous suivrons ici celui pour la biblioth\xE8que "),Y=l(je,"A",{href:!0,rel:!0});var Vt=i(Y);Ir=o(Vt,"\u{1F917} "),Fe=l(Vt,"EM",{});var uo=i(Fe);Gr=o(uo,"Transformers"),uo.forEach(r),Vt.forEach(r),Dr=o(je," mais le m\xEAme type d\u2019information sera requis dans un autre d\xE9p\xF4t. Ne laissez pas le gabarit vide : prendre le temps de le remplir maximisera vos chances d\u2019obtenir une r\xE9ponse et de r\xE9soudre votre probl\xE8me."),je.forEach(r),ks=m(e),S=l(e,"P",{});var Se=i(S);Or=o(Se,"En g\xE9n\xE9ral, lorsque vous signalez un probl\xE8me, restez toujours courtois. Il s\u2019agit d\u2019un projet open source, vous utilisez donc un logiciel libre, et personne n\u2019est oblig\xE9 de vous aider. Vous pouvez inclure dans votre "),Ve=l(Se,"EM",{});var po=i(Ve);Fr=o(po,"issue"),po.forEach(r),Vr=o(Se," des critiques qui vous semblent justifi\xE9es mais les mainteneurs pourraient tr\xE8s bien les prendre mal et ne pas \xEAtre press\xE9s de vous aider. Assurez-vous de lire le "),ve=l(Se,"A",{href:!0,rel:!0});var mo=i(ve);Jr=o(mo,"code de conduite"),mo.forEach(r),Rr=o(Se," du projet."),Se.forEach(r),Ps=m(e),U=l(e,"H3",{class:!0});var er=i(U);K=l(er,"A",{id:!0,class:!0,href:!0});var co=i(K);Je=l(co,"SPAN",{});var vo=i(Je);h(de.$$.fragment,vo),vo.forEach(r),co.forEach(r),Br=m(er),Re=l(er,"SPAN",{});var fo=i(Re);Yr=o(fo,"Inclure les informations sur votre environnement"),fo.forEach(r),er.forEach(r),js=m(e),Q=l(e,"P",{});var sr=i(Q);Kr=o(sr,"\u{1F917} "),Be=l(sr,"EM",{});var bo=i(Be);Qr=o(bo,"Transformers"),bo.forEach(r),Wr=o(sr," fournit un utilitaire pour obtenir toutes les informations n\xE9cessaire concernant votre environnement. Il suffit de taper ce qui suit dans votre terminal :"),sr.forEach(r),Ss=m(e),h(fe.$$.fragment,e),As=m(e),_e=l(e,"P",{});var ho=i(_e);Xr=o(ho,"et vous devriez obtenir quelque chose comme :"),ho.forEach(r),Cs=m(e),h(be.$$.fragment,e),Ns=m(e),f=l(e,"P",{});var A=i(f);Zr=o(A,"Vous pouvez \xE9galement ajouter un "),Ye=l(A,"CODE",{});var go=i(Ye);et=o(go,"!"),go.forEach(r),st=o(A," au d\xE9but de la commande "),Ke=l(A,"CODE",{});var qo=i(Ke);rt=o(qo,"transformers-cli env"),qo.forEach(r),tt=o(A," pour l\u2019ex\xE9cuter depuis une cellule de "),Qe=l(A,"EM",{});var zo=i(Qe);ot=o(zo,"notebook"),zo.forEach(r),nt=o(A," puis copier et coller le r\xE9sultat au d\xE9but de votre "),We=l(A,"EM",{});var $o=i(We);lt=o($o,"issue"),$o.forEach(r),it=o(A,"."),A.forEach(r),Ts=m(e),H=l(e,"H3",{class:!0});var rr=i(H);W=l(rr,"A",{id:!0,class:!0,href:!0});var Eo=i(W);Xe=l(Eo,"SPAN",{});var _o=i(Xe);h(he.$$.fragment,_o),_o.forEach(r),Eo.forEach(r),at=m(rr),Ze=l(rr,"SPAN",{});var wo=i(Ze);ut=o(wo,"Taguer des personnes"),wo.forEach(r),rr.forEach(r),Ms=m(e),y=l(e,"P",{});var ne=i(y);pt=o(ne,"Taguer des personnes en tapant un "),es=l(ne,"CODE",{});var yo=i(es);mt=o(yo,"@"),yo.forEach(r),ct=o(ne," suivi de leur identifiant GitHub leur enverra une notification afin qu\u2019elles voient votre probl\xE8me et puissent r\xE9pondre plus rapidement. N\xE9anmoins utilisez cette fonction avec mod\xE9ration car les personnes que vous taguez peuvent ne pas appr\xE9cier d\u2019\xEAtre notifi\xE9es si elles n\u2019ont pas de lien direct avec le probl\xE8me. Si vous avez regard\xE9 les fichiers sources li\xE9s \xE0 votre "),ss=l(ne,"EM",{});var xo=i(ss);vt=o(xo,"bug"),xo.forEach(r),dt=o(ne,", vous devriez taguer la derni\xE8re personne qui a fait des changements \xE0 la ligne que vous pensez \xEAtre responsable de votre probl\xE8me (vous pouvez trouver cette information en regardant ladite ligne sur GitHub, en la s\xE9lectionnant, puis en cliquant sur \xAB "),rs=l(ne,"EM",{});var ko=i(rs);ft=o(ko,"View git blame"),ko.forEach(r),bt=o(ne," \xBB)."),ne.forEach(r),Us=m(e),we=l(e,"P",{});var Po=i(we);ht=o(Po,"Sinon, le gabarit propose des suggestions de personnes \xE0 taguer. En g\xE9n\xE9ral, ne marquez jamais plus de trois personnes !"),Po.forEach(r),Hs=m(e),L=l(e,"H3",{class:!0});var tr=i(L);X=l(tr,"A",{id:!0,class:!0,href:!0});var jo=i(X);ts=l(jo,"SPAN",{});var So=i(ts);h(ge.$$.fragment,So),So.forEach(r),jo.forEach(r),gt=m(tr),os=l(tr,"SPAN",{});var Ao=i(os);qt=o(Ao,"Inclure un exemple reproductible"),Ao.forEach(r),tr.forEach(r),Ls=m(e),x=l(e,"P",{});var le=i(x);zt=o(le,"Si vous avez r\xE9ussi \xE0 cr\xE9er un exemple autonome qui produit le "),ns=l(le,"EM",{});var Co=i(ns);$t=o(Co,"bug"),Co.forEach(r),Et=o(le,", il est temps de l\u2019inclure ! Tapez une ligne avec trois "),ls=l(le,"EM",{});var No=i(ls);_t=o(No,"backticks"),No.forEach(r),wt=o(le," suivis de "),is=l(le,"CODE",{});var To=i(is);yt=o(To,"python"),To.forEach(r),xt=o(le,", comme ceci :"),le.forEach(r),Is=m(e),h(qe.$$.fragment,e),Gs=m(e),Z=l(e,"P",{});var or=i(Z);kt=o(or,"puis collez votre exemple minimal reproductible et tapez une nouvelle ligne avec trois "),as=l(or,"EM",{});var Mo=i(as);Pt=o(Mo,"backticks"),Mo.forEach(r),jt=o(or,". Cela permettra de s\u2019assurer que votre code est correctement format\xE9."),or.forEach(r),Ds=m(e),ee=l(e,"P",{});var nr=i(ee);St=o(nr,"Si vous n\u2019avez pas r\xE9ussi \xE0 cr\xE9er un exemple reproductible, expliquez en des \xE9tapes claires comment vous \xEAtes arriv\xE9 \xE0 votre probl\xE8me. Si vous le pouvez, incluez un lien vers un "),us=l(nr,"EM",{});var Uo=i(us);At=o(Uo,"notebook"),Uo.forEach(r),Ct=o(nr," d\u2019un Google Colab o\xF9 vous avez trouv\xE9 l\u2019erreur. Plus vous partagerez d\u2019informations, plus les mainteneurs seront en mesure de vous r\xE9pondre."),nr.forEach(r),Os=m(e),se=l(e,"P",{});var lr=i(se);Nt=o(lr,"Dans tous les cas, vous devez copier et coller l\u2019int\xE9gralit\xE9 du message d\u2019erreur que vous obtenez. Si vous travaillez dans Colab, n\u2019oubliez pas que certaines cellules peuvent \xEAtre automatiquement r\xE9duites dans la trace de la pile et veillez donc \xE0 les afficher avant de les copier. Comme pour l\u2019exemple de code, placez le message d\u2019erreur entre deux lignes avec trois "),ps=l(lr,"EM",{});var Ho=i(ps);Tt=o(Ho,"backticks"),Ho.forEach(r),Mt=o(lr," afin qu\u2019il soit correctement format\xE9."),lr.forEach(r),Fs=m(e),I=l(e,"H3",{class:!0});var ir=i(I);re=l(ir,"A",{id:!0,class:!0,href:!0});var Lo=i(re);ms=l(Lo,"SPAN",{});var Io=i(ms);h(ze.$$.fragment,Io),Io.forEach(r),Lo.forEach(r),Ut=m(ir),cs=l(ir,"SPAN",{});var Go=i(cs);Ht=o(Go,"D\xE9crire le comportement attendu"),Go.forEach(r),ir.forEach(r),Vs=m(e),ye=l(e,"P",{});var Do=i(ye);Lt=o(Do,"Expliquez en quelques lignes ce que vous vous attendiez \xE0 obtenir afin que les mainteneurs comprennent bien le probl\xE8me. Cette partie est g\xE9n\xE9ralement assez \xE9vidente, elle devrait donc tenir en une seule phrase mais dans certains cas vous pouvez avoir beaucoup \xE0 dire."),Do.forEach(r),Js=m(e),G=l(e,"H2",{class:!0});var ar=i(G);te=l(ar,"A",{id:!0,class:!0,href:!0});var Oo=i(te);vs=l(Oo,"SPAN",{});var Fo=i(vs);h($e.$$.fragment,Fo),Fo.forEach(r),Oo.forEach(r),It=m(ar),ds=l(ar,"SPAN",{});var Vo=i(ds);Gt=o(Vo,"Et ensuite ?"),Vo.forEach(r),ar.forEach(r),Rs=m(e),xe=l(e,"P",{});var Jo=i(xe);Dt=o(Jo,"Une fois que votre probl\xE8me est class\xE9, v\xE9rifiez rapidement que tout est en ordre. Vous pouvez modifier le probl\xE8me si vous avez fait une erreur ou m\xEAme changer son titre si vous vous rendez compte que le probl\xE8me est diff\xE9rent de ce que vous pensiez initialement."),Jo.forEach(r),Bs=m(e),ke=l(e,"P",{});var Ro=i(ke);Ot=o(Ro,"Il est inutile d\u2019envoyer des messages aux personnes concern\xE9es si vous n\u2019obtenez pas de r\xE9ponse. Si personne ne vous aide au bout de quelques jours, il est probable que personne n\u2019a pu donner un sens \xE0 votre probl\xE8me. N\u2019h\xE9sitez pas \xE0 revenir \xE0 l\u2019exemple reproductible. Pouvez-vous le rendre plus court et plus concis ? Si vous n\u2019obtenez pas de r\xE9ponse au bout d\u2019une semaine, vous pouvez laisser un message demandant gentiment de l\u2019aide, surtout si vous avez modifi\xE9 votre question pour inclure plus d\u2019informations sur le probl\xE8me."),Ro.forEach(r),this.h()},h(){c(v,"name","hf:doc:metadata"),c(v,"content",JSON.stringify(tn)),c(_,"id","comment-rdiger-une-bonne-iissuei"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#comment-rdiger-une-bonne-iissuei"),c(d,"class","relative group"),c(ue,"href","https://discuss.huggingface.co/"),c(ue,"rel","nofollow"),c(F,"id","crer-un-exemple-minimal-reproductible"),c(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(F,"href","#crer-un-exemple-minimal-reproductible"),c(T,"class","relative group"),c(B,"id","remplir-le-gabarit-de-problme"),c(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(B,"href","#remplir-le-gabarit-de-problme"),c(M,"class","relative group"),c(Y,"href","https://github.com/huggingface/transformers/issues/new/choose"),c(Y,"rel","nofollow"),c(ve,"href","https://github.com/huggingface/transformers/blob/master/CODE_OF_CONDUCT.md"),c(ve,"rel","nofollow"),c(K,"id","inclure-les-informations-sur-votre-environnement"),c(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(K,"href","#inclure-les-informations-sur-votre-environnement"),c(U,"class","relative group"),c(W,"id","taguer-des-personnes"),c(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(W,"href","#taguer-des-personnes"),c(H,"class","relative group"),c(X,"id","inclure-un-exemple-reproductible"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#inclure-un-exemple-reproductible"),c(L,"class","relative group"),c(re,"id","d\xE9crire-le-comportement-attendu"),c(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(re,"href","#d\xE9crire-le-comportement-attendu"),c(I,"class","relative group"),c(te,"id","et-ensuite-?"),c(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(te,"href","#et-ensuite-?"),c(G,"class","relative group")},m(e,a){s(document.head,v),u(e,D,a),u(e,d,a),s(d,_),s(_,C),g(E,C,null),s(d,k),s(d,N),s(N,ur),s(N,Ae),s(Ae,pr),u(e,bs,a),g(ae,e,a),u(e,hs,a),u(e,w,a),s(w,mr),s(w,cr),s(w,vr),s(w,Ce),s(Ce,dr),s(w,fr),s(w,ue),s(ue,br),s(w,hr),u(e,gs,a),g(pe,e,a),u(e,qs,a),u(e,O,a),s(O,gr),s(O,Ne),s(Ne,qr),s(O,zr),u(e,zs,a),u(e,T,a),s(T,F),s(F,Te),g(me,Te,null),s(T,$r),s(T,Me),s(Me,Er),u(e,$s,a),u(e,V,a),s(V,_r),s(V,Ue),s(Ue,wr),s(V,yr),u(e,Es,a),g(J,e,a),u(e,_s,a),u(e,R,a),s(R,xr),s(R,He),s(He,kr),s(R,Pr),u(e,ws,a),u(e,P,a),s(P,jr),s(P,Le),s(Le,Sr),s(P,Ar),s(P,Ie),s(Ie,Cr),s(P,Nr),u(e,ys,a),u(e,M,a),s(M,B),s(B,Ge),g(ce,Ge,null),s(M,Tr),s(M,De),s(De,Mr),u(e,xs,a),u(e,j,a),s(j,Ur),s(j,Oe),s(Oe,Hr),s(j,Lr),s(j,Y),s(Y,Ir),s(Y,Fe),s(Fe,Gr),s(j,Dr),u(e,ks,a),u(e,S,a),s(S,Or),s(S,Ve),s(Ve,Fr),s(S,Vr),s(S,ve),s(ve,Jr),s(S,Rr),u(e,Ps,a),u(e,U,a),s(U,K),s(K,Je),g(de,Je,null),s(U,Br),s(U,Re),s(Re,Yr),u(e,js,a),u(e,Q,a),s(Q,Kr),s(Q,Be),s(Be,Qr),s(Q,Wr),u(e,Ss,a),g(fe,e,a),u(e,As,a),u(e,_e,a),s(_e,Xr),u(e,Cs,a),g(be,e,a),u(e,Ns,a),u(e,f,a),s(f,Zr),s(f,Ye),s(Ye,et),s(f,st),s(f,Ke),s(Ke,rt),s(f,tt),s(f,Qe),s(Qe,ot),s(f,nt),s(f,We),s(We,lt),s(f,it),u(e,Ts,a),u(e,H,a),s(H,W),s(W,Xe),g(he,Xe,null),s(H,at),s(H,Ze),s(Ze,ut),u(e,Ms,a),u(e,y,a),s(y,pt),s(y,es),s(es,mt),s(y,ct),s(y,ss),s(ss,vt),s(y,dt),s(y,rs),s(rs,ft),s(y,bt),u(e,Us,a),u(e,we,a),s(we,ht),u(e,Hs,a),u(e,L,a),s(L,X),s(X,ts),g(ge,ts,null),s(L,gt),s(L,os),s(os,qt),u(e,Ls,a),u(e,x,a),s(x,zt),s(x,ns),s(ns,$t),s(x,Et),s(x,ls),s(ls,_t),s(x,wt),s(x,is),s(is,yt),s(x,xt),u(e,Is,a),g(qe,e,a),u(e,Gs,a),u(e,Z,a),s(Z,kt),s(Z,as),s(as,Pt),s(Z,jt),u(e,Ds,a),u(e,ee,a),s(ee,St),s(ee,us),s(us,At),s(ee,Ct),u(e,Os,a),u(e,se,a),s(se,Nt),s(se,ps),s(ps,Tt),s(se,Mt),u(e,Fs,a),u(e,I,a),s(I,re),s(re,ms),g(ze,ms,null),s(I,Ut),s(I,cs),s(cs,Ht),u(e,Vs,a),u(e,ye,a),s(ye,Lt),u(e,Js,a),u(e,G,a),s(G,te),s(te,vs),g($e,vs,null),s(G,It),s(G,ds),s(ds,Gt),u(e,Rs,a),u(e,xe,a),s(xe,Dt),u(e,Bs,a),u(e,ke,a),s(ke,Ot),Ys=!0},p(e,[a]){const Ee={};a&2&&(Ee.$$scope={dirty:a,ctx:e}),J.$set(Ee)},i(e){Ys||(q(E.$$.fragment,e),q(ae.$$.fragment,e),q(pe.$$.fragment,e),q(me.$$.fragment,e),q(J.$$.fragment,e),q(ce.$$.fragment,e),q(de.$$.fragment,e),q(fe.$$.fragment,e),q(be.$$.fragment,e),q(he.$$.fragment,e),q(ge.$$.fragment,e),q(qe.$$.fragment,e),q(ze.$$.fragment,e),q($e.$$.fragment,e),Ys=!0)},o(e){z(E.$$.fragment,e),z(ae.$$.fragment,e),z(pe.$$.fragment,e),z(me.$$.fragment,e),z(J.$$.fragment,e),z(ce.$$.fragment,e),z(de.$$.fragment,e),z(fe.$$.fragment,e),z(be.$$.fragment,e),z(he.$$.fragment,e),z(ge.$$.fragment,e),z(qe.$$.fragment,e),z(ze.$$.fragment,e),z($e.$$.fragment,e),Ys=!1},d(e){r(v),e&&r(D),e&&r(d),$(E),e&&r(bs),$(ae,e),e&&r(hs),e&&r(w),e&&r(gs),$(pe,e),e&&r(qs),e&&r(O),e&&r(zs),e&&r(T),$(me),e&&r($s),e&&r(V),e&&r(Es),$(J,e),e&&r(_s),e&&r(R),e&&r(ws),e&&r(P),e&&r(ys),e&&r(M),$(ce),e&&r(xs),e&&r(j),e&&r(ks),e&&r(S),e&&r(Ps),e&&r(U),$(de),e&&r(js),e&&r(Q),e&&r(Ss),$(fe,e),e&&r(As),e&&r(_e),e&&r(Cs),$(be,e),e&&r(Ns),e&&r(f),e&&r(Ts),e&&r(H),$(he),e&&r(Ms),e&&r(y),e&&r(Us),e&&r(we),e&&r(Hs),e&&r(L),$(ge),e&&r(Ls),e&&r(x),e&&r(Is),$(qe,e),e&&r(Gs),e&&r(Z),e&&r(Ds),e&&r(ee),e&&r(Os),e&&r(se),e&&r(Fs),e&&r(I),$(ze),e&&r(Vs),e&&r(ye),e&&r(Js),e&&r(G),$($e),e&&r(Rs),e&&r(xe),e&&r(Bs),e&&r(ke)}}}const tn={local:"comment-rdiger-une-bonne-iissuei",sections:[{local:"crer-un-exemple-minimal-reproductible",title:"Cr\xE9er un exemple minimal reproductible"},{local:"remplir-le-gabarit-de-problme",sections:[{local:"inclure-les-informations-sur-votre-environnement",title:"Inclure les informations sur votre environnement"},{local:"taguer-des-personnes",title:"Taguer des personnes "},{local:"inclure-un-exemple-reproductible",title:"Inclure un exemple reproductible"}],title:"Remplir le gabarit de probl\xE8me"}],title:"Comment r\xE9diger une bonne <i>issue</i>"};function on(fs){return Wo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cn extends Bo{constructor(v){super();Yo(this,v,on,rn,Ko,{})}}export{cn as default,tn as metadata};
