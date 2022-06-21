import{S as tr,i as or,s as nr,e as a,k as h,w as f,t as s,M as rr,c as i,d as t,m as p,a as u,x as m,h as l,b as c,N as er,G as o,g as r,y,L as ar,q as v,o as d,B as w,v as ir}from"../../chunks/vendor-hf-doc-builder.js";import{I as zt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as g}from"../../chunks/CodeBlock-hf-doc-builder.js";function sr(un){let _,Je,P,A,Ce,H,Kt,je,Qt,Re,I,Xt,fe,Zt,eo,ze,me,to,Ke,ye,oo,Qe,ve,no,Xe,x,ro,L,ao,io,Ze,E,T,Ae,B,so,Ie,lo,et,de,uo,tt,W,ho,V,po,co,ot,we,fo,nt,J,R,hn,rt,b,mo,xe,yo,vo,Te,wo,go,at,z,it,ge,bo,st,K,lt,Q,X,pn,ut,be,$o,ht,Z,pt,$e,ko,ct,C,O,We,ee,_o,Oe,Po,ft,S,Eo,te,Co,jo,mt,F,Ao,Se,Io,xo,yt,D,To,Fe,Wo,Oo,vt,$,So,oe,De,Fo,Do,ne,Ue,Uo,No,dt,U,Yo,Ne,qo,Go,wt,re,gt,N,Mo,Ye,Ho,Lo,bt,ae,$t,Y,Bo,qe,Vo,Jo,kt,ie,_t,se,Pt,k,Ro,Ge,zo,Ko,Me,Qo,Xo,Et,le,Ct,q,Zo,He,en,tn,jt,ue,At,he,It,j,G,Le,pe,on,Be,nn,xt,M,rn,Ve,an,sn,Tt,ce,Wt,ke,ln,Ot;return H=new zt({}),B=new zt({}),z=new g({props:{code:"!pip install transformers",highlighted:'!pip <span class="hljs-keyword">install</span> transformers'}}),K=new g({props:{code:"import transformers",highlighted:'<span class="hljs-keyword">import</span> transformers'}}),Z=new g({props:{code:"!pip install transformers[sentencepiece]",highlighted:'!pip <span class="hljs-keyword">install</span> transformers[sentencepiece]'}}),ee=new zt({}),re=new g({props:{code:`mkdir ~/transformers-course
cd ~/transformers-course`,highlighted:`<span class="hljs-built_in">mkdir</span> ~/transformers-course
<span class="hljs-built_in">cd</span> ~/transformers-course`}}),ae=new g({props:{code:"python -m venv .env",highlighted:'<span class="hljs-keyword">python</span> -m venv .<span class="hljs-keyword">env</span>'}}),ie=new g({props:{code:"ls -a",highlighted:'<span class="hljs-built_in">ls</span> -a'}}),se=new g({props:{code:".      ..    .env",highlighted:'.      <span class="hljs-string">..</span>    <span class="hljs-string">.env</span>'}}),le=new g({props:{code:"",highlighted:`<span class="hljs-comment"># Activate the virtual environment</span>
<span class="hljs-built_in">source</span> .<span class="hljs-built_in">env</span>/bin/activate

<span class="hljs-comment"># Deactivate the virtual environment</span>
<span class="hljs-built_in">source</span> .<span class="hljs-built_in">env</span>/bin/deactivate`}}),ue=new g({props:{code:"which python",highlighted:'<span class="hljs-built_in">which</span> python'}}),he=new g({props:{code:"/home/<user>/transformers-course/.env/bin/python",highlighted:'<span class="hljs-regexp">/home/</span>&lt;user&gt;<span class="hljs-regexp">/transformers-course/</span>.env<span class="hljs-regexp">/bin/</span>python'}}),pe=new zt({}),ce=new g({props:{code:'pip install "transformers[sentencepiece]"',highlighted:'pip <span class="hljs-keyword">install</span> <span class="hljs-string">&quot;transformers[sentencepiece]&quot;</span>'}}),{c(){_=a("meta"),Je=h(),P=a("h1"),A=a("a"),Ce=a("span"),f(H.$$.fragment),Kt=h(),je=a("span"),Qt=s("Introduction"),Re=h(),I=a("p"),Xt=s("Welcome to the Hugging Face course! This introduction will guide you through setting up a working environment. If you\u2019re just starting the course, we recommend you first take a look at "),fe=a("a"),Zt=s("Chapter 1"),eo=s(", then come back and set up your environment so you can try the code yourself."),ze=h(),me=a("p"),to=s("All the libraries that we\u2019ll be using in this course are available as Python packages, so here we\u2019ll show you how to set up a Python environment and install the specific libraries you\u2019ll need."),Ke=h(),ye=a("p"),oo=s("We\u2019ll cover two ways of setting up your working environment, using a Colab notebook or a Python virtual environment. Feel free to choose the one that resonates with you the most. For beginners, we strongly recommend that you get started by using a Colab notebook."),Qe=h(),ve=a("p"),no=s("Note that we will not be covering the Windows system. If you\u2019re running on Windows, we recommend following along using a Colab notebook. If you\u2019re using a Linux distribution or macOS, you can use either approach described here."),Xe=h(),x=a("p"),ro=s("Most of the course relies on you having a Hugging Face account. We recommend creating one now: "),L=a("a"),ao=s("create an account"),io=s("."),Ze=h(),E=a("h2"),T=a("a"),Ae=a("span"),f(B.$$.fragment),so=h(),Ie=a("span"),lo=s("Using a Google Colab notebook"),et=h(),de=a("p"),uo=s("Using a Colab notebook is the simplest possible setup; boot up a notebook in your browser and get straight to coding!"),tt=h(),W=a("p"),ho=s("If you\u2019re not familiar with Colab, we recommend you start by following the "),V=a("a"),po=s("introduction"),co=s(". Colab allows you to use some accelerating hardware, like GPUs or TPUs, and it is free for smaller workloads."),ot=h(),we=a("p"),fo=s("Once you\u2019re comfortable moving around in Colab, create a new notebook and get started with the setup:"),nt=h(),J=a("div"),R=a("img"),rt=h(),b=a("p"),mo=s("The next step is to install the libraries that we\u2019ll be using in this course. We\u2019ll use "),xe=a("code"),yo=s("pip"),vo=s(" for the installation, which is the package manager for Python. In notebooks, you can run system commands by preceding them with the "),Te=a("code"),wo=s("!"),go=s(" character, so you can install the \u{1F917} Transformers library as follows:"),at=h(),f(z.$$.fragment),it=h(),ge=a("p"),bo=s("You can make sure the package was correctly installed by importing it within your Python runtime:"),st=h(),f(K.$$.fragment),lt=h(),Q=a("div"),X=a("img"),ut=h(),be=a("p"),$o=s("This installs a very light version of \u{1F917} Transformers. In particular, no specific machine learning frameworks (like PyTorch or TensorFlow) are installed. Since we\u2019ll be using a lot of different features of the library, we recommend installing the development version, which comes with all the required dependencies for pretty much any imaginable use case:"),ht=h(),f(Z.$$.fragment),pt=h(),$e=a("p"),ko=s("This will take a bit of time, but then you\u2019ll be ready to go for the rest of the course!"),ct=h(),C=a("h2"),O=a("a"),We=a("span"),f(ee.$$.fragment),_o=h(),Oe=a("span"),Po=s("Using a Python virtual environment"),ft=h(),S=a("p"),Eo=s("If you prefer to use a Python virtual environment, the first step is to install Python on your system. We recommend following "),te=a("a"),Co=s("this guide"),jo=s(" to get started."),mt=h(),F=a("p"),Ao=s("Once you have Python installed, you should be able to run Python commands in your terminal. You can start by running the following command to ensure that it is correctly installed before proceeding to the next steps: "),Se=a("code"),Io=s("python --version"),xo=s(". This should print out the Python version now available on your system."),yt=h(),D=a("p"),To=s("When running a Python command in your terminal, such as "),Fe=a("code"),Wo=s("python --version"),Oo=s(", you should think of the program running your command as the \u201Cmain\u201D Python on your system. We recommend keeping this main installation free of any packages, and using it to create separate environments for each application you work on \u2014 this way, each application can have its own dependencies and packages, and you won\u2019t need to worry about potential compatibility issues with other applications."),vt=h(),$=a("p"),So=s("In Python this is done with "),oe=a("a"),De=a("em"),Fo=s("virtual environments"),Do=s(", which are self-contained directory trees that each contain a Python installation with a particular Python version alongside all the packages the application needs. Creating such a virtual environment can be done with a number of different tools, but we\u2019ll use the official Python package for that purpose, which is called "),ne=a("a"),Ue=a("code"),Uo=s("venv"),No=s("."),dt=h(),U=a("p"),Yo=s("First, create the directory you\u2019d like your application to live in \u2014 for example, you might want to make a new directory called "),Ne=a("em"),qo=s("transformers-course"),Go=s(" at the root of your home directory:"),wt=h(),f(re.$$.fragment),gt=h(),N=a("p"),Mo=s("From inside this directory, create a virtual environment using the Python "),Ye=a("code"),Ho=s("venv"),Lo=s(" module:"),bt=h(),f(ae.$$.fragment),$t=h(),Y=a("p"),Bo=s("You should now have a directory called "),qe=a("em"),Vo=s(".env"),Jo=s(" in your otherwise empty folder:"),kt=h(),f(ie.$$.fragment),_t=h(),f(se.$$.fragment),Pt=h(),k=a("p"),Ro=s("You can jump in and out of your virtual environment with the "),Ge=a("code"),zo=s("activate"),Ko=s(" and "),Me=a("code"),Qo=s("deactivate"),Xo=s(" scripts:"),Et=h(),f(le.$$.fragment),Ct=h(),q=a("p"),Zo=s("You can make sure that the environment is activated by running the "),He=a("code"),en=s("which python"),tn=s(" command: if it points to the virtual environment, then you have successfully activated it!"),jt=h(),f(ue.$$.fragment),At=h(),f(he.$$.fragment),It=h(),j=a("h3"),G=a("a"),Le=a("span"),f(pe.$$.fragment),on=h(),Be=a("span"),nn=s("Installing dependencies"),xt=h(),M=a("p"),rn=s("As in the previous section on using Google Colab instances, you\u2019ll now need to install the packages required to continue. Again, you can install the development version of \u{1F917} Transformers using the "),Ve=a("code"),an=s("pip"),sn=s(" package manager:"),Tt=h(),f(ce.$$.fragment),Wt=h(),ke=a("p"),ln=s("You\u2019re now all set up and ready to go!"),this.h()},l(e){const n=rr('[data-svelte="svelte-1phssyn"]',document.head);_=i(n,"META",{name:!0,content:!0}),n.forEach(t),Je=p(e),P=i(e,"H1",{class:!0});var St=u(P);A=i(St,"A",{id:!0,class:!0,href:!0});var cn=u(A);Ce=i(cn,"SPAN",{});var fn=u(Ce);m(H.$$.fragment,fn),fn.forEach(t),cn.forEach(t),Kt=p(St),je=i(St,"SPAN",{});var mn=u(je);Qt=l(mn,"Introduction"),mn.forEach(t),St.forEach(t),Re=p(e),I=i(e,"P",{});var Ft=u(I);Xt=l(Ft,"Welcome to the Hugging Face course! This introduction will guide you through setting up a working environment. If you\u2019re just starting the course, we recommend you first take a look at "),fe=i(Ft,"A",{href:!0});var yn=u(fe);Zt=l(yn,"Chapter 1"),yn.forEach(t),eo=l(Ft,", then come back and set up your environment so you can try the code yourself."),Ft.forEach(t),ze=p(e),me=i(e,"P",{});var vn=u(me);to=l(vn,"All the libraries that we\u2019ll be using in this course are available as Python packages, so here we\u2019ll show you how to set up a Python environment and install the specific libraries you\u2019ll need."),vn.forEach(t),Ke=p(e),ye=i(e,"P",{});var dn=u(ye);oo=l(dn,"We\u2019ll cover two ways of setting up your working environment, using a Colab notebook or a Python virtual environment. Feel free to choose the one that resonates with you the most. For beginners, we strongly recommend that you get started by using a Colab notebook."),dn.forEach(t),Qe=p(e),ve=i(e,"P",{});var wn=u(ve);no=l(wn,"Note that we will not be covering the Windows system. If you\u2019re running on Windows, we recommend following along using a Colab notebook. If you\u2019re using a Linux distribution or macOS, you can use either approach described here."),wn.forEach(t),Xe=p(e),x=i(e,"P",{});var Dt=u(x);ro=l(Dt,"Most of the course relies on you having a Hugging Face account. We recommend creating one now: "),L=i(Dt,"A",{href:!0,rel:!0});var gn=u(L);ao=l(gn,"create an account"),gn.forEach(t),io=l(Dt,"."),Dt.forEach(t),Ze=p(e),E=i(e,"H2",{class:!0});var Ut=u(E);T=i(Ut,"A",{id:!0,class:!0,href:!0});var bn=u(T);Ae=i(bn,"SPAN",{});var $n=u(Ae);m(B.$$.fragment,$n),$n.forEach(t),bn.forEach(t),so=p(Ut),Ie=i(Ut,"SPAN",{});var kn=u(Ie);lo=l(kn,"Using a Google Colab notebook"),kn.forEach(t),Ut.forEach(t),et=p(e),de=i(e,"P",{});var _n=u(de);uo=l(_n,"Using a Colab notebook is the simplest possible setup; boot up a notebook in your browser and get straight to coding!"),_n.forEach(t),tt=p(e),W=i(e,"P",{});var Nt=u(W);ho=l(Nt,"If you\u2019re not familiar with Colab, we recommend you start by following the "),V=i(Nt,"A",{href:!0,rel:!0});var Pn=u(V);po=l(Pn,"introduction"),Pn.forEach(t),co=l(Nt,". Colab allows you to use some accelerating hardware, like GPUs or TPUs, and it is free for smaller workloads."),Nt.forEach(t),ot=p(e),we=i(e,"P",{});var En=u(we);fo=l(En,"Once you\u2019re comfortable moving around in Colab, create a new notebook and get started with the setup:"),En.forEach(t),nt=p(e),J=i(e,"DIV",{class:!0});var Cn=u(J);R=i(Cn,"IMG",{src:!0,alt:!0,width:!0}),Cn.forEach(t),rt=p(e),b=i(e,"P",{});var _e=u(b);mo=l(_e,"The next step is to install the libraries that we\u2019ll be using in this course. We\u2019ll use "),xe=i(_e,"CODE",{});var jn=u(xe);yo=l(jn,"pip"),jn.forEach(t),vo=l(_e," for the installation, which is the package manager for Python. In notebooks, you can run system commands by preceding them with the "),Te=i(_e,"CODE",{});var An=u(Te);wo=l(An,"!"),An.forEach(t),go=l(_e," character, so you can install the \u{1F917} Transformers library as follows:"),_e.forEach(t),at=p(e),m(z.$$.fragment,e),it=p(e),ge=i(e,"P",{});var In=u(ge);bo=l(In,"You can make sure the package was correctly installed by importing it within your Python runtime:"),In.forEach(t),st=p(e),m(K.$$.fragment,e),lt=p(e),Q=i(e,"DIV",{class:!0});var xn=u(Q);X=i(xn,"IMG",{src:!0,alt:!0,width:!0}),xn.forEach(t),ut=p(e),be=i(e,"P",{});var Tn=u(be);$o=l(Tn,"This installs a very light version of \u{1F917} Transformers. In particular, no specific machine learning frameworks (like PyTorch or TensorFlow) are installed. Since we\u2019ll be using a lot of different features of the library, we recommend installing the development version, which comes with all the required dependencies for pretty much any imaginable use case:"),Tn.forEach(t),ht=p(e),m(Z.$$.fragment,e),pt=p(e),$e=i(e,"P",{});var Wn=u($e);ko=l(Wn,"This will take a bit of time, but then you\u2019ll be ready to go for the rest of the course!"),Wn.forEach(t),ct=p(e),C=i(e,"H2",{class:!0});var Yt=u(C);O=i(Yt,"A",{id:!0,class:!0,href:!0});var On=u(O);We=i(On,"SPAN",{});var Sn=u(We);m(ee.$$.fragment,Sn),Sn.forEach(t),On.forEach(t),_o=p(Yt),Oe=i(Yt,"SPAN",{});var Fn=u(Oe);Po=l(Fn,"Using a Python virtual environment"),Fn.forEach(t),Yt.forEach(t),ft=p(e),S=i(e,"P",{});var qt=u(S);Eo=l(qt,"If you prefer to use a Python virtual environment, the first step is to install Python on your system. We recommend following "),te=i(qt,"A",{href:!0,rel:!0});var Dn=u(te);Co=l(Dn,"this guide"),Dn.forEach(t),jo=l(qt," to get started."),qt.forEach(t),mt=p(e),F=i(e,"P",{});var Gt=u(F);Ao=l(Gt,"Once you have Python installed, you should be able to run Python commands in your terminal. You can start by running the following command to ensure that it is correctly installed before proceeding to the next steps: "),Se=i(Gt,"CODE",{});var Un=u(Se);Io=l(Un,"python --version"),Un.forEach(t),xo=l(Gt,". This should print out the Python version now available on your system."),Gt.forEach(t),yt=p(e),D=i(e,"P",{});var Mt=u(D);To=l(Mt,"When running a Python command in your terminal, such as "),Fe=i(Mt,"CODE",{});var Nn=u(Fe);Wo=l(Nn,"python --version"),Nn.forEach(t),Oo=l(Mt,", you should think of the program running your command as the \u201Cmain\u201D Python on your system. We recommend keeping this main installation free of any packages, and using it to create separate environments for each application you work on \u2014 this way, each application can have its own dependencies and packages, and you won\u2019t need to worry about potential compatibility issues with other applications."),Mt.forEach(t),vt=p(e),$=i(e,"P",{});var Pe=u($);So=l(Pe,"In Python this is done with "),oe=i(Pe,"A",{href:!0,rel:!0});var Yn=u(oe);De=i(Yn,"EM",{});var qn=u(De);Fo=l(qn,"virtual environments"),qn.forEach(t),Yn.forEach(t),Do=l(Pe,", which are self-contained directory trees that each contain a Python installation with a particular Python version alongside all the packages the application needs. Creating such a virtual environment can be done with a number of different tools, but we\u2019ll use the official Python package for that purpose, which is called "),ne=i(Pe,"A",{href:!0,rel:!0});var Gn=u(ne);Ue=i(Gn,"CODE",{});var Mn=u(Ue);Uo=l(Mn,"venv"),Mn.forEach(t),Gn.forEach(t),No=l(Pe,"."),Pe.forEach(t),dt=p(e),U=i(e,"P",{});var Ht=u(U);Yo=l(Ht,"First, create the directory you\u2019d like your application to live in \u2014 for example, you might want to make a new directory called "),Ne=i(Ht,"EM",{});var Hn=u(Ne);qo=l(Hn,"transformers-course"),Hn.forEach(t),Go=l(Ht," at the root of your home directory:"),Ht.forEach(t),wt=p(e),m(re.$$.fragment,e),gt=p(e),N=i(e,"P",{});var Lt=u(N);Mo=l(Lt,"From inside this directory, create a virtual environment using the Python "),Ye=i(Lt,"CODE",{});var Ln=u(Ye);Ho=l(Ln,"venv"),Ln.forEach(t),Lo=l(Lt," module:"),Lt.forEach(t),bt=p(e),m(ae.$$.fragment,e),$t=p(e),Y=i(e,"P",{});var Bt=u(Y);Bo=l(Bt,"You should now have a directory called "),qe=i(Bt,"EM",{});var Bn=u(qe);Vo=l(Bn,".env"),Bn.forEach(t),Jo=l(Bt," in your otherwise empty folder:"),Bt.forEach(t),kt=p(e),m(ie.$$.fragment,e),_t=p(e),m(se.$$.fragment,e),Pt=p(e),k=i(e,"P",{});var Ee=u(k);Ro=l(Ee,"You can jump in and out of your virtual environment with the "),Ge=i(Ee,"CODE",{});var Vn=u(Ge);zo=l(Vn,"activate"),Vn.forEach(t),Ko=l(Ee," and "),Me=i(Ee,"CODE",{});var Jn=u(Me);Qo=l(Jn,"deactivate"),Jn.forEach(t),Xo=l(Ee," scripts:"),Ee.forEach(t),Et=p(e),m(le.$$.fragment,e),Ct=p(e),q=i(e,"P",{});var Vt=u(q);Zo=l(Vt,"You can make sure that the environment is activated by running the "),He=i(Vt,"CODE",{});var Rn=u(He);en=l(Rn,"which python"),Rn.forEach(t),tn=l(Vt," command: if it points to the virtual environment, then you have successfully activated it!"),Vt.forEach(t),jt=p(e),m(ue.$$.fragment,e),At=p(e),m(he.$$.fragment,e),It=p(e),j=i(e,"H3",{class:!0});var Jt=u(j);G=i(Jt,"A",{id:!0,class:!0,href:!0});var zn=u(G);Le=i(zn,"SPAN",{});var Kn=u(Le);m(pe.$$.fragment,Kn),Kn.forEach(t),zn.forEach(t),on=p(Jt),Be=i(Jt,"SPAN",{});var Qn=u(Be);nn=l(Qn,"Installing dependencies"),Qn.forEach(t),Jt.forEach(t),xt=p(e),M=i(e,"P",{});var Rt=u(M);rn=l(Rt,"As in the previous section on using Google Colab instances, you\u2019ll now need to install the packages required to continue. Again, you can install the development version of \u{1F917} Transformers using the "),Ve=i(Rt,"CODE",{});var Xn=u(Ve);an=l(Xn,"pip"),Xn.forEach(t),sn=l(Rt," package manager:"),Rt.forEach(t),Tt=p(e),m(ce.$$.fragment,e),Wt=p(e),ke=i(e,"P",{});var Zn=u(ke);ln=l(Zn,"You\u2019re now all set up and ready to go!"),Zn.forEach(t),this.h()},h(){c(_,"name","hf:doc:metadata"),c(_,"content",JSON.stringify(lr)),c(A,"id","introduction"),c(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(A,"href","#introduction"),c(P,"class","relative group"),c(fe,"href","/course/chapter1"),c(L,"href","https://huggingface.co/join"),c(L,"rel","nofollow"),c(T,"id","using-a-google-colab-notebook"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#using-a-google-colab-notebook"),c(E,"class","relative group"),c(V,"href","https://colab.research.google.com/notebooks/intro.ipynb"),c(V,"rel","nofollow"),er(R.src,hn="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter0/new_colab.png")||c(R,"src",hn),c(R,"alt","An empty colab notebook"),c(R,"width","80%"),c(J,"class","flex justify-center"),er(X.src,pn="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter0/install.gif")||c(X,"src",pn),c(X,"alt","A gif showing the result of the two commands above: installation and import"),c(X,"width","80%"),c(Q,"class","flex justify-center"),c(O,"id","using-a-python-virtual-environment"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#using-a-python-virtual-environment"),c(C,"class","relative group"),c(te,"href","https://realpython.com/installing-python/"),c(te,"rel","nofollow"),c(oe,"href","https://docs.python.org/3/tutorial/venv.html"),c(oe,"rel","nofollow"),c(ne,"href","https://docs.python.org/3/library/venv.html#module-venv"),c(ne,"rel","nofollow"),c(G,"id","installing-dependencies"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#installing-dependencies"),c(j,"class","relative group")},m(e,n){o(document.head,_),r(e,Je,n),r(e,P,n),o(P,A),o(A,Ce),y(H,Ce,null),o(P,Kt),o(P,je),o(je,Qt),r(e,Re,n),r(e,I,n),o(I,Xt),o(I,fe),o(fe,Zt),o(I,eo),r(e,ze,n),r(e,me,n),o(me,to),r(e,Ke,n),r(e,ye,n),o(ye,oo),r(e,Qe,n),r(e,ve,n),o(ve,no),r(e,Xe,n),r(e,x,n),o(x,ro),o(x,L),o(L,ao),o(x,io),r(e,Ze,n),r(e,E,n),o(E,T),o(T,Ae),y(B,Ae,null),o(E,so),o(E,Ie),o(Ie,lo),r(e,et,n),r(e,de,n),o(de,uo),r(e,tt,n),r(e,W,n),o(W,ho),o(W,V),o(V,po),o(W,co),r(e,ot,n),r(e,we,n),o(we,fo),r(e,nt,n),r(e,J,n),o(J,R),r(e,rt,n),r(e,b,n),o(b,mo),o(b,xe),o(xe,yo),o(b,vo),o(b,Te),o(Te,wo),o(b,go),r(e,at,n),y(z,e,n),r(e,it,n),r(e,ge,n),o(ge,bo),r(e,st,n),y(K,e,n),r(e,lt,n),r(e,Q,n),o(Q,X),r(e,ut,n),r(e,be,n),o(be,$o),r(e,ht,n),y(Z,e,n),r(e,pt,n),r(e,$e,n),o($e,ko),r(e,ct,n),r(e,C,n),o(C,O),o(O,We),y(ee,We,null),o(C,_o),o(C,Oe),o(Oe,Po),r(e,ft,n),r(e,S,n),o(S,Eo),o(S,te),o(te,Co),o(S,jo),r(e,mt,n),r(e,F,n),o(F,Ao),o(F,Se),o(Se,Io),o(F,xo),r(e,yt,n),r(e,D,n),o(D,To),o(D,Fe),o(Fe,Wo),o(D,Oo),r(e,vt,n),r(e,$,n),o($,So),o($,oe),o(oe,De),o(De,Fo),o($,Do),o($,ne),o(ne,Ue),o(Ue,Uo),o($,No),r(e,dt,n),r(e,U,n),o(U,Yo),o(U,Ne),o(Ne,qo),o(U,Go),r(e,wt,n),y(re,e,n),r(e,gt,n),r(e,N,n),o(N,Mo),o(N,Ye),o(Ye,Ho),o(N,Lo),r(e,bt,n),y(ae,e,n),r(e,$t,n),r(e,Y,n),o(Y,Bo),o(Y,qe),o(qe,Vo),o(Y,Jo),r(e,kt,n),y(ie,e,n),r(e,_t,n),y(se,e,n),r(e,Pt,n),r(e,k,n),o(k,Ro),o(k,Ge),o(Ge,zo),o(k,Ko),o(k,Me),o(Me,Qo),o(k,Xo),r(e,Et,n),y(le,e,n),r(e,Ct,n),r(e,q,n),o(q,Zo),o(q,He),o(He,en),o(q,tn),r(e,jt,n),y(ue,e,n),r(e,At,n),y(he,e,n),r(e,It,n),r(e,j,n),o(j,G),o(G,Le),y(pe,Le,null),o(j,on),o(j,Be),o(Be,nn),r(e,xt,n),r(e,M,n),o(M,rn),o(M,Ve),o(Ve,an),o(M,sn),r(e,Tt,n),y(ce,e,n),r(e,Wt,n),r(e,ke,n),o(ke,ln),Ot=!0},p:ar,i(e){Ot||(v(H.$$.fragment,e),v(B.$$.fragment,e),v(z.$$.fragment,e),v(K.$$.fragment,e),v(Z.$$.fragment,e),v(ee.$$.fragment,e),v(re.$$.fragment,e),v(ae.$$.fragment,e),v(ie.$$.fragment,e),v(se.$$.fragment,e),v(le.$$.fragment,e),v(ue.$$.fragment,e),v(he.$$.fragment,e),v(pe.$$.fragment,e),v(ce.$$.fragment,e),Ot=!0)},o(e){d(H.$$.fragment,e),d(B.$$.fragment,e),d(z.$$.fragment,e),d(K.$$.fragment,e),d(Z.$$.fragment,e),d(ee.$$.fragment,e),d(re.$$.fragment,e),d(ae.$$.fragment,e),d(ie.$$.fragment,e),d(se.$$.fragment,e),d(le.$$.fragment,e),d(ue.$$.fragment,e),d(he.$$.fragment,e),d(pe.$$.fragment,e),d(ce.$$.fragment,e),Ot=!1},d(e){t(_),e&&t(Je),e&&t(P),w(H),e&&t(Re),e&&t(I),e&&t(ze),e&&t(me),e&&t(Ke),e&&t(ye),e&&t(Qe),e&&t(ve),e&&t(Xe),e&&t(x),e&&t(Ze),e&&t(E),w(B),e&&t(et),e&&t(de),e&&t(tt),e&&t(W),e&&t(ot),e&&t(we),e&&t(nt),e&&t(J),e&&t(rt),e&&t(b),e&&t(at),w(z,e),e&&t(it),e&&t(ge),e&&t(st),w(K,e),e&&t(lt),e&&t(Q),e&&t(ut),e&&t(be),e&&t(ht),w(Z,e),e&&t(pt),e&&t($e),e&&t(ct),e&&t(C),w(ee),e&&t(ft),e&&t(S),e&&t(mt),e&&t(F),e&&t(yt),e&&t(D),e&&t(vt),e&&t($),e&&t(dt),e&&t(U),e&&t(wt),w(re,e),e&&t(gt),e&&t(N),e&&t(bt),w(ae,e),e&&t($t),e&&t(Y),e&&t(kt),w(ie,e),e&&t(_t),w(se,e),e&&t(Pt),e&&t(k),e&&t(Et),w(le,e),e&&t(Ct),e&&t(q),e&&t(jt),w(ue,e),e&&t(At),w(he,e),e&&t(It),e&&t(j),w(pe),e&&t(xt),e&&t(M),e&&t(Tt),w(ce,e),e&&t(Wt),e&&t(ke)}}}const lr={local:"introduction",sections:[{local:"using-a-google-colab-notebook",title:"Using a Google Colab notebook"},{local:"using-a-python-virtual-environment",sections:[{local:"installing-dependencies",title:"Installing dependencies"}],title:"Using a Python virtual environment"}],title:"Introduction"};function ur(un){return ir(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fr extends tr{constructor(_){super();or(this,_,ur,sr,nr,{})}}export{fr as default,lr as metadata};
