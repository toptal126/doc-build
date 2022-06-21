import{S as kr,i as qr,s as wr,e as l,k as p,w as d,t as s,M as zr,c as i,d as o,m,a,x as f,h as n,b as c,N as Pr,G as t,g as u,y as h,L as gr,q as b,o as $,B as E,v as Cr}from"../../chunks/vendor-hf-doc-builder.js";import{I as Po}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as q}from"../../chunks/CodeBlock-hf-doc-builder.js";function xr(En){let M,bt,S,D,je,Z,ko,Ae,qo,$t,G,wo,qe,zo,go,Et,T,Co,Ne,xo,Mo,_t,w,So,De,jo,Ao,Ge,No,Do,yt,V,Go,Te,To,Vo,Pt,L,Lo,ee,Uo,Io,kt,j,U,Ve,te,Oo,oe,Ho,Le,Fo,Bo,qt,z,Wo,Ue,Jo,Ro,Ie,Ko,Qo,wt,I,Xo,se,Yo,Zo,zt,O,es,Oe,ts,os,gt,ne,re,_n,Ct,v,ss,He,ns,rs,Fe,ls,is,Be,as,us,We,ps,ms,Je,cs,vs,xt,le,Mt,we,ds,St,ie,jt,ae,ue,yn,At,g,fs,Re,hs,bs,Ke,$s,Es,Nt,pe,Dt,ze,_s,Gt,A,H,Qe,me,ys,Xe,Ps,Tt,F,ks,ce,qs,ws,Vt,B,zs,Ye,gs,Cs,Lt,y,xs,Ze,Ms,Ss,et,js,As,tt,Ns,Ds,Ut,_,Gs,ve,ot,Ts,Vs,st,Ls,Us,nt,Is,Os,de,rt,Hs,Fs,It,W,Bs,lt,Ws,Js,Ot,fe,Ht,J,Rs,it,Ks,Qs,Ft,he,Bt,R,Xs,at,Ys,Zs,Wt,be,Jt,$e,Rt,C,en,ut,tn,on,pt,sn,nn,Kt,Ee,Qt,K,rn,mt,ln,an,Xt,_e,Yt,ye,Zt,N,Q,ct,Pe,un,vt,pn,eo,P,mn,dt,cn,vn,ft,dn,fn,ht,hn,bn,to,ke,oo,ge,$n,so;return Z=new Po({}),te=new Po({}),le=new q({props:{code:"!pip install transformers",highlighted:'!pip <span class="hljs-keyword">install</span> transformers'}}),ie=new q({props:{code:"import transformers",highlighted:'<span class="hljs-keyword">import</span> transformers'}}),pe=new q({props:{code:"!pip install transformers[sentencepiece]",highlighted:'!pip <span class="hljs-keyword">install</span> transformers[sentencepiece]'}}),me=new Po({}),fe=new q({props:{code:`mkdir ~/transformers-course
cd ~/transformers-course`,highlighted:`<span class="hljs-built_in">mkdir</span> ~/transformers-course
<span class="hljs-built_in">cd</span> ~/transformers-course`}}),he=new q({props:{code:"python -m venv .env",highlighted:'<span class="hljs-keyword">python</span> -m venv .<span class="hljs-keyword">env</span>'}}),be=new q({props:{code:"ls -a",highlighted:'<span class="hljs-built_in">ls</span> -a'}}),$e=new q({props:{code:".      ..    .env",highlighted:'.      <span class="hljs-string">..</span>    <span class="hljs-string">.env</span>'}}),Ee=new q({props:{code:"",highlighted:`<span class="hljs-comment"># Activate the virtual environment</span>
<span class="hljs-built_in">source</span> .<span class="hljs-built_in">env</span>/bin/activate

<span class="hljs-comment"># Deactivate the virtual environment</span>
<span class="hljs-built_in">source</span> .<span class="hljs-built_in">env</span>/bin/deactivate`}}),_e=new q({props:{code:"which python",highlighted:'<span class="hljs-built_in">which</span> python'}}),ye=new q({props:{code:"/home/<user>/transformers-course/.env/bin/python",highlighted:'<span class="hljs-regexp">/home/</span>&lt;user&gt;<span class="hljs-regexp">/transformers-course/</span>.env<span class="hljs-regexp">/bin/</span>python'}}),Pe=new Po({}),ke=new q({props:{code:'pip install "transformers[sentencepiece]"',highlighted:'pip <span class="hljs-keyword">install</span> <span class="hljs-string">&quot;transformers[sentencepiece]&quot;</span>'}}),{c(){M=l("meta"),bt=p(),S=l("h1"),D=l("a"),je=l("span"),d(Z.$$.fragment),ko=p(),Ae=l("span"),qo=s("Introduction"),$t=p(),G=l("p"),wo=s("Bienvenue au cours d\u2019Hugging Face ! Cette introduction est l\xE0 pour vous guider dans la mise en place d\u2019un environnement de travail. Si vous venez de commencer le cours, nous vous recommandons de consulter d\u2019abord le "),qe=l("a"),zo=s("chapitre 1"),go=s(" puis de revenir et de configurer votre environnement afin de pouvoir essayer le code vous-m\xEAme."),Et=p(),T=l("p"),Co=s("Toutes les biblioth\xE8ques que nous utiliserons dans ce cours sont disponibles sous forme de "),Ne=l("em"),xo=s("packages"),Mo=s(" Python. Nous allons donc vous montrer comment configurer un environnement Python et installer les biblioth\xE8ques sp\xE9cifiques dont vous aurez besoin."),_t=p(),w=l("p"),So=s("Nous aborderons deux fa\xE7ons de configurer votre environnement de travail : soit en utilisant un "),De=l("em"),jo=s("notebook"),Ao=s(" Google Colab, soit en utilisant un environnement virtuel Python. N\u2019h\xE9sitez pas \xE0 choisir celle qui vous convient le mieux. Pour les d\xE9butants, nous vous recommandons vivement de commencer en utilisant un "),Ge=l("em"),No=s("notebook"),Do=s(" Google Colab."),yt=p(),V=l("p"),Go=s("Notez que nous ne couvrirons pas le syst\xE8me Windows. Si vous travaillez sous Windows, nous vous recommandons de suivre le cours en utilisant un "),Te=l("em"),To=s("notebook"),Vo=s(" Google Colab. Si vous utilisez une distribution Linux ou macOS, vous pouvez utiliser l\u2019une des deux approches d\xE9crites ci-dessous."),Pt=p(),L=l("p"),Lo=s("La plupart du cours repose sur le fait que vous ayez un compte Hugging Face. Si vous n\u2019en disposez pas d\u2019un, nous vous recommandons d\u2019en cr\xE9er un d\xE8s maintenant : "),ee=l("a"),Uo=s("cr\xE9er un compte"),Io=s("."),kt=p(),j=l("h2"),U=l("a"),Ve=l("span"),d(te.$$.fragment),Oo=p(),oe=l("span"),Ho=s("Utilisation d'un "),Le=l("i"),Fo=s("notebook"),Bo=s(" Google Colab"),qt=p(),z=l("p"),Wo=s("L\u2019utilisation d\u2019un "),Ue=l("em"),Jo=s("notebook"),Ro=s(" Google Colab est la configuration la plus simple possible. D\xE9marrez un "),Ie=l("em"),Ko=s("notebook"),Qo=s(" dans votre navigateur et passez directement au codage !"),wt=p(),I=l("p"),Xo=s("Si vous n\u2019\xEAtes pas familier avec Colab, nous vous recommandons de commencer par suivre l\u2019"),se=l("a"),Yo=s("introduction"),Zo=s(". Colab vous permet d\u2019utiliser du mat\xE9riel comme les GPUs ou les TPUs et est gratuit pour les petites charges de travail."),zt=p(),O=l("p"),es=s("Une fois que vous vous sentez suffisamment \xE0 l\u2019aise avec Colab, cr\xE9ez un nouveau "),Oe=l("em"),ts=s("notebook"),os=s(" et commencez \xE0 le configurer :"),gt=p(),ne=l("div"),re=l("img"),Ct=p(),v=l("p"),ss=s("L\u2019\xE9tape suivante consiste \xE0 installer les biblioth\xE8ques que nous allons utiliser dans ce cours. Nous utiliserons "),He=l("code"),ns=s("pip"),rs=s(" pour l\u2019installation qui est le gestionnaire de "),Fe=l("em"),ls=s("packages"),is=s(" pour Python. Dans les "),Be=l("em"),as=s("notebooks"),us=s(", vous pouvez ex\xE9cuter des commandes syst\xE8me en les faisant pr\xE9c\xE9der du caract\xE8re "),We=l("code"),ps=s("!"),ms=s(". Vous pouvez donc installer la biblioth\xE8que \u{1F917} "),Je=l("em"),cs=s("Transformers"),vs=s(" comme suit :"),xt=p(),d(le.$$.fragment),Mt=p(),we=l("p"),ds=s("Vous pouvez vous assurer que le paquet a \xE9t\xE9 correctement install\xE9 en l\u2019important dans votre runtime Python :"),St=p(),d(ie.$$.fragment),jt=p(),ae=l("div"),ue=l("img"),At=p(),g=l("p"),fs=s("Cela installe une version tr\xE8s l\xE9g\xE8re de \u{1F917} "),Re=l("em"),hs=s("Transformers"),bs=s(". En particulier, aucun "),Ke=l("em"),$s=s("framework"),Es=s(" d\u2019apprentissage automatique sp\xE9cifique (comme PyTorch ou TensorFlow) n\u2019est install\xE9. Comme nous utiliserons de nombreuses fonctionnalit\xE9s diff\xE9rentes de la biblioth\xE8que, nous recommandons d\u2019installer la version de d\xE9veloppement qui est livr\xE9e avec toutes les d\xE9pendances requises pour \xE0 peu pr\xE8s tous les cas d\u2019utilisation imaginables :"),Nt=p(),d(pe.$$.fragment),Dt=p(),ze=l("p"),_s=s("Cela prendra un peu de temps, mais vous serez alors pr\xEAt pour le reste du cours !"),Gt=p(),A=l("h2"),H=l("a"),Qe=l("span"),d(me.$$.fragment),ys=p(),Xe=l("span"),Ps=s("Utilisation d'un environnement virtuel Python"),Tt=p(),F=l("p"),ks=s("Si vous pr\xE9f\xE9rez utiliser un environnement virtuel Python, la premi\xE8re \xE9tape consiste \xE0 installer Python sur votre syst\xE8me. Nous vous recommandons de suivre "),ce=l("a"),qs=s("ce guide"),ws=s(" pour commencer."),Vt=p(),B=l("p"),zs=s("Une fois Python install\xE9, vous devriez \xEAtre en mesure d\u2019ex\xE9cuter des commandes Python dans votre terminal. Vous pouvez commencer par ex\xE9cuter la commande suivante pour vous assurer qu\u2019il est correctement install\xE9 avant de passer aux \xE9tapes suivantes : "),Ye=l("code"),gs=s("python --version"),Cs=s(". Cette commande devrait vous indiquer la version de Python disponible sur votre syst\xE8me."),Lt=p(),y=l("p"),xs=s("Lorsque vous ex\xE9cutez une commande Python dans votre terminal, comme "),Ze=l("code"),Ms=s("python --version"),Ss=s(", vous devez consid\xE9rer le programme qui ex\xE9cute votre commande comme la fonction \xAB main \xBB Python sur votre syst\xE8me. Nous vous recommandons de garder cette installation principale libre de tout "),et=l("em"),js=s("package"),As=s(" et de l\u2019utiliser pour cr\xE9er des environnements s\xE9par\xE9s pour chaque application sur laquelle vous travaillez. De cette fa\xE7on, chaque application peut avoir ses propres d\xE9pendances et "),tt=l("em"),Ns=s("packages"),Ds=s(", et vous n\u2019aurez pas \xE0 vous soucier de probl\xE8mes potentiels de compatibilit\xE9 avec d\u2019autres applications."),Ut=p(),_=l("p"),Gs=s("En Python, cela se fait avec les "),ve=l("a"),ot=l("em"),Ts=s("environnements virtuels"),Vs=s(", qui sont des arbres de r\xE9pertoires autonomes contenant chacun une installation Python avec une version particuli\xE8re de Python ainsi que tous les "),st=l("em"),Ls=s("packages"),Us=s(" dont l\u2019application a besoin. La cr\xE9ation d\u2019un tel environnement virtuel peut se faire \xE0 l\u2019aide d\u2019un certain nombre d\u2019outils diff\xE9rents, mais nous utiliserons le "),nt=l("em"),Is=s("package"),Os=s(" officiel de Python : "),de=l("a"),rt=l("code"),Hs=s("venv"),Fs=s("."),It=p(),W=l("p"),Bs=s("Tout d\u2019abord, cr\xE9ez le r\xE9pertoire dans lequel vous souhaitez que votre application se trouve. Par exemple, vous pouvez cr\xE9er un nouveau r\xE9pertoire appel\xE9 "),lt=l("em"),Ws=s("transformers-course"),Js=s(" \xE0 la racine de votre r\xE9pertoire personnel :"),Ot=p(),d(fe.$$.fragment),Ht=p(),J=l("p"),Rs=s("A l\u2019int\xE9rieur de ce r\xE9pertoire, cr\xE9ez un environnement virtuel en utilisant le module Python "),it=l("code"),Ks=s("venv"),Qs=s(" :"),Ft=p(),d(he.$$.fragment),Bt=p(),R=l("p"),Xs=s("Vous devriez maintenant avoir un r\xE9pertoire appel\xE9 "),at=l("em"),Ys=s(".env"),Zs=s(" dans votre dossier autrement vide :"),Wt=p(),d(be.$$.fragment),Jt=p(),d($e.$$.fragment),Rt=p(),C=l("p"),en=s("Vous pouvez entrer et sortir de votre environnement virtuel avec les scripts "),ut=l("code"),tn=s("activate"),on=s(" et "),pt=l("code"),sn=s("deactivate"),nn=s(" :"),Kt=p(),d(Ee.$$.fragment),Qt=p(),K=l("p"),rn=s("Vous pouvez vous assurer que l\u2019environnement est activ\xE9 en ex\xE9cutant la commande "),mt=l("code"),ln=s("which python"),an=s(" : si elle pointe vers l\u2019environnement virtuel, alors vous l\u2019avez activ\xE9 avec succ\xE8s !"),Xt=p(),d(_e.$$.fragment),Yt=p(),d(ye.$$.fragment),Zt=p(),N=l("h3"),Q=l("a"),ct=l("span"),d(Pe.$$.fragment),un=p(),vt=l("span"),pn=s("Installation des d\xE9pendances"),eo=p(),P=l("p"),mn=s("Comme dans la section pr\xE9c\xE9dente sur l\u2019utilisation des instances Google Colab, vous devez maintenant installer les "),dt=l("em"),cn=s("packages"),vn=s(" requis pour continuer. Encore une fois, vous pouvez installer la version de d\xE9veloppement de \u{1F917} "),ft=l("em"),dn=s("Transformers"),fn=s(" \xE0 l\u2019aide du gestionnaire de packages "),ht=l("code"),hn=s("pip"),bn=s(" :"),to=p(),d(ke.$$.fragment),oo=p(),ge=l("p"),$n=s("Vous \xEAtes maintenant pr\xEAt !"),this.h()},l(e){const r=zr('[data-svelte="svelte-1phssyn"]',document.head);M=i(r,"META",{name:!0,content:!0}),r.forEach(o),bt=m(e),S=i(e,"H1",{class:!0});var no=a(S);D=i(no,"A",{id:!0,class:!0,href:!0});var Pn=a(D);je=i(Pn,"SPAN",{});var kn=a(je);f(Z.$$.fragment,kn),kn.forEach(o),Pn.forEach(o),ko=m(no),Ae=i(no,"SPAN",{});var qn=a(Ae);qo=n(qn,"Introduction"),qn.forEach(o),no.forEach(o),$t=m(e),G=i(e,"P",{});var ro=a(G);wo=n(ro,"Bienvenue au cours d\u2019Hugging Face ! Cette introduction est l\xE0 pour vous guider dans la mise en place d\u2019un environnement de travail. Si vous venez de commencer le cours, nous vous recommandons de consulter d\u2019abord le "),qe=i(ro,"A",{href:!0});var wn=a(qe);zo=n(wn,"chapitre 1"),wn.forEach(o),go=n(ro," puis de revenir et de configurer votre environnement afin de pouvoir essayer le code vous-m\xEAme."),ro.forEach(o),Et=m(e),T=i(e,"P",{});var lo=a(T);Co=n(lo,"Toutes les biblioth\xE8ques que nous utiliserons dans ce cours sont disponibles sous forme de "),Ne=i(lo,"EM",{});var zn=a(Ne);xo=n(zn,"packages"),zn.forEach(o),Mo=n(lo," Python. Nous allons donc vous montrer comment configurer un environnement Python et installer les biblioth\xE8ques sp\xE9cifiques dont vous aurez besoin."),lo.forEach(o),_t=m(e),w=i(e,"P",{});var Ce=a(w);So=n(Ce,"Nous aborderons deux fa\xE7ons de configurer votre environnement de travail : soit en utilisant un "),De=i(Ce,"EM",{});var gn=a(De);jo=n(gn,"notebook"),gn.forEach(o),Ao=n(Ce," Google Colab, soit en utilisant un environnement virtuel Python. N\u2019h\xE9sitez pas \xE0 choisir celle qui vous convient le mieux. Pour les d\xE9butants, nous vous recommandons vivement de commencer en utilisant un "),Ge=i(Ce,"EM",{});var Cn=a(Ge);No=n(Cn,"notebook"),Cn.forEach(o),Do=n(Ce," Google Colab."),Ce.forEach(o),yt=m(e),V=i(e,"P",{});var io=a(V);Go=n(io,"Notez que nous ne couvrirons pas le syst\xE8me Windows. Si vous travaillez sous Windows, nous vous recommandons de suivre le cours en utilisant un "),Te=i(io,"EM",{});var xn=a(Te);To=n(xn,"notebook"),xn.forEach(o),Vo=n(io," Google Colab. Si vous utilisez une distribution Linux ou macOS, vous pouvez utiliser l\u2019une des deux approches d\xE9crites ci-dessous."),io.forEach(o),Pt=m(e),L=i(e,"P",{});var ao=a(L);Lo=n(ao,"La plupart du cours repose sur le fait que vous ayez un compte Hugging Face. Si vous n\u2019en disposez pas d\u2019un, nous vous recommandons d\u2019en cr\xE9er un d\xE8s maintenant : "),ee=i(ao,"A",{href:!0,rel:!0});var Mn=a(ee);Uo=n(Mn,"cr\xE9er un compte"),Mn.forEach(o),Io=n(ao,"."),ao.forEach(o),kt=m(e),j=i(e,"H2",{class:!0});var uo=a(j);U=i(uo,"A",{id:!0,class:!0,href:!0});var Sn=a(U);Ve=i(Sn,"SPAN",{});var jn=a(Ve);f(te.$$.fragment,jn),jn.forEach(o),Sn.forEach(o),Oo=m(uo),oe=i(uo,"SPAN",{});var po=a(oe);Ho=n(po,"Utilisation d'un "),Le=i(po,"I",{});var An=a(Le);Fo=n(An,"notebook"),An.forEach(o),Bo=n(po," Google Colab"),po.forEach(o),uo.forEach(o),qt=m(e),z=i(e,"P",{});var xe=a(z);Wo=n(xe,"L\u2019utilisation d\u2019un "),Ue=i(xe,"EM",{});var Nn=a(Ue);Jo=n(Nn,"notebook"),Nn.forEach(o),Ro=n(xe," Google Colab est la configuration la plus simple possible. D\xE9marrez un "),Ie=i(xe,"EM",{});var Dn=a(Ie);Ko=n(Dn,"notebook"),Dn.forEach(o),Qo=n(xe," dans votre navigateur et passez directement au codage !"),xe.forEach(o),wt=m(e),I=i(e,"P",{});var mo=a(I);Xo=n(mo,"Si vous n\u2019\xEAtes pas familier avec Colab, nous vous recommandons de commencer par suivre l\u2019"),se=i(mo,"A",{href:!0,rel:!0});var Gn=a(se);Yo=n(Gn,"introduction"),Gn.forEach(o),Zo=n(mo,". Colab vous permet d\u2019utiliser du mat\xE9riel comme les GPUs ou les TPUs et est gratuit pour les petites charges de travail."),mo.forEach(o),zt=m(e),O=i(e,"P",{});var co=a(O);es=n(co,"Une fois que vous vous sentez suffisamment \xE0 l\u2019aise avec Colab, cr\xE9ez un nouveau "),Oe=i(co,"EM",{});var Tn=a(Oe);ts=n(Tn,"notebook"),Tn.forEach(o),os=n(co," et commencez \xE0 le configurer :"),co.forEach(o),gt=m(e),ne=i(e,"DIV",{class:!0});var Vn=a(ne);re=i(Vn,"IMG",{src:!0,alt:!0,width:!0}),Vn.forEach(o),Ct=m(e),v=i(e,"P",{});var k=a(v);ss=n(k,"L\u2019\xE9tape suivante consiste \xE0 installer les biblioth\xE8ques que nous allons utiliser dans ce cours. Nous utiliserons "),He=i(k,"CODE",{});var Ln=a(He);ns=n(Ln,"pip"),Ln.forEach(o),rs=n(k," pour l\u2019installation qui est le gestionnaire de "),Fe=i(k,"EM",{});var Un=a(Fe);ls=n(Un,"packages"),Un.forEach(o),is=n(k," pour Python. Dans les "),Be=i(k,"EM",{});var In=a(Be);as=n(In,"notebooks"),In.forEach(o),us=n(k,", vous pouvez ex\xE9cuter des commandes syst\xE8me en les faisant pr\xE9c\xE9der du caract\xE8re "),We=i(k,"CODE",{});var On=a(We);ps=n(On,"!"),On.forEach(o),ms=n(k,". Vous pouvez donc installer la biblioth\xE8que \u{1F917} "),Je=i(k,"EM",{});var Hn=a(Je);cs=n(Hn,"Transformers"),Hn.forEach(o),vs=n(k," comme suit :"),k.forEach(o),xt=m(e),f(le.$$.fragment,e),Mt=m(e),we=i(e,"P",{});var Fn=a(we);ds=n(Fn,"Vous pouvez vous assurer que le paquet a \xE9t\xE9 correctement install\xE9 en l\u2019important dans votre runtime Python :"),Fn.forEach(o),St=m(e),f(ie.$$.fragment,e),jt=m(e),ae=i(e,"DIV",{class:!0});var Bn=a(ae);ue=i(Bn,"IMG",{src:!0,alt:!0,width:!0}),Bn.forEach(o),At=m(e),g=i(e,"P",{});var Me=a(g);fs=n(Me,"Cela installe une version tr\xE8s l\xE9g\xE8re de \u{1F917} "),Re=i(Me,"EM",{});var Wn=a(Re);hs=n(Wn,"Transformers"),Wn.forEach(o),bs=n(Me,". En particulier, aucun "),Ke=i(Me,"EM",{});var Jn=a(Ke);$s=n(Jn,"framework"),Jn.forEach(o),Es=n(Me," d\u2019apprentissage automatique sp\xE9cifique (comme PyTorch ou TensorFlow) n\u2019est install\xE9. Comme nous utiliserons de nombreuses fonctionnalit\xE9s diff\xE9rentes de la biblioth\xE8que, nous recommandons d\u2019installer la version de d\xE9veloppement qui est livr\xE9e avec toutes les d\xE9pendances requises pour \xE0 peu pr\xE8s tous les cas d\u2019utilisation imaginables :"),Me.forEach(o),Nt=m(e),f(pe.$$.fragment,e),Dt=m(e),ze=i(e,"P",{});var Rn=a(ze);_s=n(Rn,"Cela prendra un peu de temps, mais vous serez alors pr\xEAt pour le reste du cours !"),Rn.forEach(o),Gt=m(e),A=i(e,"H2",{class:!0});var vo=a(A);H=i(vo,"A",{id:!0,class:!0,href:!0});var Kn=a(H);Qe=i(Kn,"SPAN",{});var Qn=a(Qe);f(me.$$.fragment,Qn),Qn.forEach(o),Kn.forEach(o),ys=m(vo),Xe=i(vo,"SPAN",{});var Xn=a(Xe);Ps=n(Xn,"Utilisation d'un environnement virtuel Python"),Xn.forEach(o),vo.forEach(o),Tt=m(e),F=i(e,"P",{});var fo=a(F);ks=n(fo,"Si vous pr\xE9f\xE9rez utiliser un environnement virtuel Python, la premi\xE8re \xE9tape consiste \xE0 installer Python sur votre syst\xE8me. Nous vous recommandons de suivre "),ce=i(fo,"A",{href:!0,rel:!0});var Yn=a(ce);qs=n(Yn,"ce guide"),Yn.forEach(o),ws=n(fo," pour commencer."),fo.forEach(o),Vt=m(e),B=i(e,"P",{});var ho=a(B);zs=n(ho,"Une fois Python install\xE9, vous devriez \xEAtre en mesure d\u2019ex\xE9cuter des commandes Python dans votre terminal. Vous pouvez commencer par ex\xE9cuter la commande suivante pour vous assurer qu\u2019il est correctement install\xE9 avant de passer aux \xE9tapes suivantes : "),Ye=i(ho,"CODE",{});var Zn=a(Ye);gs=n(Zn,"python --version"),Zn.forEach(o),Cs=n(ho,". Cette commande devrait vous indiquer la version de Python disponible sur votre syst\xE8me."),ho.forEach(o),Lt=m(e),y=i(e,"P",{});var X=a(y);xs=n(X,"Lorsque vous ex\xE9cutez une commande Python dans votre terminal, comme "),Ze=i(X,"CODE",{});var er=a(Ze);Ms=n(er,"python --version"),er.forEach(o),Ss=n(X,", vous devez consid\xE9rer le programme qui ex\xE9cute votre commande comme la fonction \xAB main \xBB Python sur votre syst\xE8me. Nous vous recommandons de garder cette installation principale libre de tout "),et=i(X,"EM",{});var tr=a(et);js=n(tr,"package"),tr.forEach(o),As=n(X," et de l\u2019utiliser pour cr\xE9er des environnements s\xE9par\xE9s pour chaque application sur laquelle vous travaillez. De cette fa\xE7on, chaque application peut avoir ses propres d\xE9pendances et "),tt=i(X,"EM",{});var or=a(tt);Ns=n(or,"packages"),or.forEach(o),Ds=n(X,", et vous n\u2019aurez pas \xE0 vous soucier de probl\xE8mes potentiels de compatibilit\xE9 avec d\u2019autres applications."),X.forEach(o),Ut=m(e),_=i(e,"P",{});var x=a(_);Gs=n(x,"En Python, cela se fait avec les "),ve=i(x,"A",{href:!0,rel:!0});var sr=a(ve);ot=i(sr,"EM",{});var nr=a(ot);Ts=n(nr,"environnements virtuels"),nr.forEach(o),sr.forEach(o),Vs=n(x,", qui sont des arbres de r\xE9pertoires autonomes contenant chacun une installation Python avec une version particuli\xE8re de Python ainsi que tous les "),st=i(x,"EM",{});var rr=a(st);Ls=n(rr,"packages"),rr.forEach(o),Us=n(x," dont l\u2019application a besoin. La cr\xE9ation d\u2019un tel environnement virtuel peut se faire \xE0 l\u2019aide d\u2019un certain nombre d\u2019outils diff\xE9rents, mais nous utiliserons le "),nt=i(x,"EM",{});var lr=a(nt);Is=n(lr,"package"),lr.forEach(o),Os=n(x," officiel de Python : "),de=i(x,"A",{href:!0,rel:!0});var ir=a(de);rt=i(ir,"CODE",{});var ar=a(rt);Hs=n(ar,"venv"),ar.forEach(o),ir.forEach(o),Fs=n(x,"."),x.forEach(o),It=m(e),W=i(e,"P",{});var bo=a(W);Bs=n(bo,"Tout d\u2019abord, cr\xE9ez le r\xE9pertoire dans lequel vous souhaitez que votre application se trouve. Par exemple, vous pouvez cr\xE9er un nouveau r\xE9pertoire appel\xE9 "),lt=i(bo,"EM",{});var ur=a(lt);Ws=n(ur,"transformers-course"),ur.forEach(o),Js=n(bo," \xE0 la racine de votre r\xE9pertoire personnel :"),bo.forEach(o),Ot=m(e),f(fe.$$.fragment,e),Ht=m(e),J=i(e,"P",{});var $o=a(J);Rs=n($o,"A l\u2019int\xE9rieur de ce r\xE9pertoire, cr\xE9ez un environnement virtuel en utilisant le module Python "),it=i($o,"CODE",{});var pr=a(it);Ks=n(pr,"venv"),pr.forEach(o),Qs=n($o," :"),$o.forEach(o),Ft=m(e),f(he.$$.fragment,e),Bt=m(e),R=i(e,"P",{});var Eo=a(R);Xs=n(Eo,"Vous devriez maintenant avoir un r\xE9pertoire appel\xE9 "),at=i(Eo,"EM",{});var mr=a(at);Ys=n(mr,".env"),mr.forEach(o),Zs=n(Eo," dans votre dossier autrement vide :"),Eo.forEach(o),Wt=m(e),f(be.$$.fragment,e),Jt=m(e),f($e.$$.fragment,e),Rt=m(e),C=i(e,"P",{});var Se=a(C);en=n(Se,"Vous pouvez entrer et sortir de votre environnement virtuel avec les scripts "),ut=i(Se,"CODE",{});var cr=a(ut);tn=n(cr,"activate"),cr.forEach(o),on=n(Se," et "),pt=i(Se,"CODE",{});var vr=a(pt);sn=n(vr,"deactivate"),vr.forEach(o),nn=n(Se," :"),Se.forEach(o),Kt=m(e),f(Ee.$$.fragment,e),Qt=m(e),K=i(e,"P",{});var _o=a(K);rn=n(_o,"Vous pouvez vous assurer que l\u2019environnement est activ\xE9 en ex\xE9cutant la commande "),mt=i(_o,"CODE",{});var dr=a(mt);ln=n(dr,"which python"),dr.forEach(o),an=n(_o," : si elle pointe vers l\u2019environnement virtuel, alors vous l\u2019avez activ\xE9 avec succ\xE8s !"),_o.forEach(o),Xt=m(e),f(_e.$$.fragment,e),Yt=m(e),f(ye.$$.fragment,e),Zt=m(e),N=i(e,"H3",{class:!0});var yo=a(N);Q=i(yo,"A",{id:!0,class:!0,href:!0});var fr=a(Q);ct=i(fr,"SPAN",{});var hr=a(ct);f(Pe.$$.fragment,hr),hr.forEach(o),fr.forEach(o),un=m(yo),vt=i(yo,"SPAN",{});var br=a(vt);pn=n(br,"Installation des d\xE9pendances"),br.forEach(o),yo.forEach(o),eo=m(e),P=i(e,"P",{});var Y=a(P);mn=n(Y,"Comme dans la section pr\xE9c\xE9dente sur l\u2019utilisation des instances Google Colab, vous devez maintenant installer les "),dt=i(Y,"EM",{});var $r=a(dt);cn=n($r,"packages"),$r.forEach(o),vn=n(Y," requis pour continuer. Encore une fois, vous pouvez installer la version de d\xE9veloppement de \u{1F917} "),ft=i(Y,"EM",{});var Er=a(ft);dn=n(Er,"Transformers"),Er.forEach(o),fn=n(Y," \xE0 l\u2019aide du gestionnaire de packages "),ht=i(Y,"CODE",{});var _r=a(ht);hn=n(_r,"pip"),_r.forEach(o),bn=n(Y," :"),Y.forEach(o),to=m(e),f(ke.$$.fragment,e),oo=m(e),ge=i(e,"P",{});var yr=a(ge);$n=n(yr,"Vous \xEAtes maintenant pr\xEAt !"),yr.forEach(o),this.h()},h(){c(M,"name","hf:doc:metadata"),c(M,"content",JSON.stringify(Mr)),c(D,"id","introduction"),c(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(D,"href","#introduction"),c(S,"class","relative group"),c(qe,"href","/course/fr/chapter1"),c(ee,"href","https://huggingface.co/join"),c(ee,"rel","nofollow"),c(U,"id","utilisation-dun-inotebooki-google-colab"),c(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(U,"href","#utilisation-dun-inotebooki-google-colab"),c(j,"class","relative group"),c(se,"href","https://colab.research.google.com/notebooks/intro.ipynb"),c(se,"rel","nofollow"),Pr(re.src,_n="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter0/new_colab.png")||c(re,"src",_n),c(re,"alt","An empty colab notebook"),c(re,"width","80%"),c(ne,"class","flex justify-center"),Pr(ue.src,yn="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter0/install.gif")||c(ue,"src",yn),c(ue,"alt","A gif showing the result of the two commands above: installation and import"),c(ue,"width","80%"),c(ae,"class","flex justify-center"),c(H,"id","utilisation-dun-environnement-virtuel-python"),c(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(H,"href","#utilisation-dun-environnement-virtuel-python"),c(A,"class","relative group"),c(ce,"href","https://realpython.com/installing-python/"),c(ce,"rel","nofollow"),c(ve,"href","https://docs.python.org/3/tutorial/venv.html"),c(ve,"rel","nofollow"),c(de,"href","https://docs.python.org/3/library/venv.html#module-venv"),c(de,"rel","nofollow"),c(Q,"id","installation-des-dpendances"),c(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Q,"href","#installation-des-dpendances"),c(N,"class","relative group")},m(e,r){t(document.head,M),u(e,bt,r),u(e,S,r),t(S,D),t(D,je),h(Z,je,null),t(S,ko),t(S,Ae),t(Ae,qo),u(e,$t,r),u(e,G,r),t(G,wo),t(G,qe),t(qe,zo),t(G,go),u(e,Et,r),u(e,T,r),t(T,Co),t(T,Ne),t(Ne,xo),t(T,Mo),u(e,_t,r),u(e,w,r),t(w,So),t(w,De),t(De,jo),t(w,Ao),t(w,Ge),t(Ge,No),t(w,Do),u(e,yt,r),u(e,V,r),t(V,Go),t(V,Te),t(Te,To),t(V,Vo),u(e,Pt,r),u(e,L,r),t(L,Lo),t(L,ee),t(ee,Uo),t(L,Io),u(e,kt,r),u(e,j,r),t(j,U),t(U,Ve),h(te,Ve,null),t(j,Oo),t(j,oe),t(oe,Ho),t(oe,Le),t(Le,Fo),t(oe,Bo),u(e,qt,r),u(e,z,r),t(z,Wo),t(z,Ue),t(Ue,Jo),t(z,Ro),t(z,Ie),t(Ie,Ko),t(z,Qo),u(e,wt,r),u(e,I,r),t(I,Xo),t(I,se),t(se,Yo),t(I,Zo),u(e,zt,r),u(e,O,r),t(O,es),t(O,Oe),t(Oe,ts),t(O,os),u(e,gt,r),u(e,ne,r),t(ne,re),u(e,Ct,r),u(e,v,r),t(v,ss),t(v,He),t(He,ns),t(v,rs),t(v,Fe),t(Fe,ls),t(v,is),t(v,Be),t(Be,as),t(v,us),t(v,We),t(We,ps),t(v,ms),t(v,Je),t(Je,cs),t(v,vs),u(e,xt,r),h(le,e,r),u(e,Mt,r),u(e,we,r),t(we,ds),u(e,St,r),h(ie,e,r),u(e,jt,r),u(e,ae,r),t(ae,ue),u(e,At,r),u(e,g,r),t(g,fs),t(g,Re),t(Re,hs),t(g,bs),t(g,Ke),t(Ke,$s),t(g,Es),u(e,Nt,r),h(pe,e,r),u(e,Dt,r),u(e,ze,r),t(ze,_s),u(e,Gt,r),u(e,A,r),t(A,H),t(H,Qe),h(me,Qe,null),t(A,ys),t(A,Xe),t(Xe,Ps),u(e,Tt,r),u(e,F,r),t(F,ks),t(F,ce),t(ce,qs),t(F,ws),u(e,Vt,r),u(e,B,r),t(B,zs),t(B,Ye),t(Ye,gs),t(B,Cs),u(e,Lt,r),u(e,y,r),t(y,xs),t(y,Ze),t(Ze,Ms),t(y,Ss),t(y,et),t(et,js),t(y,As),t(y,tt),t(tt,Ns),t(y,Ds),u(e,Ut,r),u(e,_,r),t(_,Gs),t(_,ve),t(ve,ot),t(ot,Ts),t(_,Vs),t(_,st),t(st,Ls),t(_,Us),t(_,nt),t(nt,Is),t(_,Os),t(_,de),t(de,rt),t(rt,Hs),t(_,Fs),u(e,It,r),u(e,W,r),t(W,Bs),t(W,lt),t(lt,Ws),t(W,Js),u(e,Ot,r),h(fe,e,r),u(e,Ht,r),u(e,J,r),t(J,Rs),t(J,it),t(it,Ks),t(J,Qs),u(e,Ft,r),h(he,e,r),u(e,Bt,r),u(e,R,r),t(R,Xs),t(R,at),t(at,Ys),t(R,Zs),u(e,Wt,r),h(be,e,r),u(e,Jt,r),h($e,e,r),u(e,Rt,r),u(e,C,r),t(C,en),t(C,ut),t(ut,tn),t(C,on),t(C,pt),t(pt,sn),t(C,nn),u(e,Kt,r),h(Ee,e,r),u(e,Qt,r),u(e,K,r),t(K,rn),t(K,mt),t(mt,ln),t(K,an),u(e,Xt,r),h(_e,e,r),u(e,Yt,r),h(ye,e,r),u(e,Zt,r),u(e,N,r),t(N,Q),t(Q,ct),h(Pe,ct,null),t(N,un),t(N,vt),t(vt,pn),u(e,eo,r),u(e,P,r),t(P,mn),t(P,dt),t(dt,cn),t(P,vn),t(P,ft),t(ft,dn),t(P,fn),t(P,ht),t(ht,hn),t(P,bn),u(e,to,r),h(ke,e,r),u(e,oo,r),u(e,ge,r),t(ge,$n),so=!0},p:gr,i(e){so||(b(Z.$$.fragment,e),b(te.$$.fragment,e),b(le.$$.fragment,e),b(ie.$$.fragment,e),b(pe.$$.fragment,e),b(me.$$.fragment,e),b(fe.$$.fragment,e),b(he.$$.fragment,e),b(be.$$.fragment,e),b($e.$$.fragment,e),b(Ee.$$.fragment,e),b(_e.$$.fragment,e),b(ye.$$.fragment,e),b(Pe.$$.fragment,e),b(ke.$$.fragment,e),so=!0)},o(e){$(Z.$$.fragment,e),$(te.$$.fragment,e),$(le.$$.fragment,e),$(ie.$$.fragment,e),$(pe.$$.fragment,e),$(me.$$.fragment,e),$(fe.$$.fragment,e),$(he.$$.fragment,e),$(be.$$.fragment,e),$($e.$$.fragment,e),$(Ee.$$.fragment,e),$(_e.$$.fragment,e),$(ye.$$.fragment,e),$(Pe.$$.fragment,e),$(ke.$$.fragment,e),so=!1},d(e){o(M),e&&o(bt),e&&o(S),E(Z),e&&o($t),e&&o(G),e&&o(Et),e&&o(T),e&&o(_t),e&&o(w),e&&o(yt),e&&o(V),e&&o(Pt),e&&o(L),e&&o(kt),e&&o(j),E(te),e&&o(qt),e&&o(z),e&&o(wt),e&&o(I),e&&o(zt),e&&o(O),e&&o(gt),e&&o(ne),e&&o(Ct),e&&o(v),e&&o(xt),E(le,e),e&&o(Mt),e&&o(we),e&&o(St),E(ie,e),e&&o(jt),e&&o(ae),e&&o(At),e&&o(g),e&&o(Nt),E(pe,e),e&&o(Dt),e&&o(ze),e&&o(Gt),e&&o(A),E(me),e&&o(Tt),e&&o(F),e&&o(Vt),e&&o(B),e&&o(Lt),e&&o(y),e&&o(Ut),e&&o(_),e&&o(It),e&&o(W),e&&o(Ot),E(fe,e),e&&o(Ht),e&&o(J),e&&o(Ft),E(he,e),e&&o(Bt),e&&o(R),e&&o(Wt),E(be,e),e&&o(Jt),E($e,e),e&&o(Rt),e&&o(C),e&&o(Kt),E(Ee,e),e&&o(Qt),e&&o(K),e&&o(Xt),E(_e,e),e&&o(Yt),E(ye,e),e&&o(Zt),e&&o(N),E(Pe),e&&o(eo),e&&o(P),e&&o(to),E(ke,e),e&&o(oo),e&&o(ge)}}}const Mr={local:"introduction",sections:[{local:"utilisation-dun-inotebooki-google-colab",title:"Utilisation d'un <i>notebook</i> Google Colab"},{local:"utilisation-dun-environnement-virtuel-python",sections:[{local:"installation-des-dpendances",title:"Installation des d\xE9pendances"}],title:"Utilisation d'un environnement virtuel Python"}],title:"Introduction"};function Sr(En){return Cr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Dr extends kr{constructor(M){super();qr(this,M,Sr,xr,wr,{})}}export{Dr as default,Mr as metadata};
