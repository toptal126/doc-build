import{S as da,i as ga,s as wa,e as i,k as u,w as p,t as l,M as va,c as a,d as t,m as f,a as n,x as m,h,b as c,N as Te,G as o,g as s,y as d,L as ya,q as g,o as w,B as v,v as ba}from"../../chunks/vendor-hf-doc-builder.js";import{Y as ka}from"../../chunks/Youtube-hf-doc-builder.js";import{I as Ue}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as Xr}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as _a}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";function Ea(Zr){let T,bt,$,I,Ke,J,Ao,Re,Po,kt,U,_t,K,Et,N,Mo,R,So,qo,Tt,Y,Q,ei,$t,y,Io,$e,No,Do,X,Co,Ho,xt,b,Oo,Z,Vo,Fo,ee,jo,Lo,At,D,Go,te,Bo,Wo,Pt,C,zo,oe,Jo,Uo,Mt,x,H,Ye,re,Ko,Qe,Ro,St,xe,Yo,qt,ie,It,O,Qo,ae,Xo,Zo,Nt,se,Dt,ne,Ct,V,er,Ae,tr,or,Ht,Pe,rr,Ot,le,he,ti,Vt,Me,ir,Ft,ce,ue,oi,jt,Se,ar,Lt,fe,pe,ri,Gt,qe,sr,Bt,k,Xe,nr,lr,A,hr,Ze,cr,ur,et,fr,pr,mr,tt,dr,Wt,Ie,gr,zt,P,F,ot,me,wr,rt,vr,Jt,j,yr,it,br,kr,Ut,Ne,at,_r,Kt,_,Er,st,Tr,$r,nt,xr,Ar,Rt,De,lt,Pr,Yt,Ce,Mr,Qt,M,L,ht,de,Sr,ct,qr,Xt,He,Ir,Zt,ge,we,ii,eo,G,Nr,ut,Dr,Cr,to,S,B,ft,ve,Hr,pt,Or,oo,E,Vr,mt,Fr,jr,dt,Lr,Gr,ro,ye,be,ai,io,Oe,Br,ao,Ve,gt,Wr,so,Fe,zr,no,q,W,wt,ke,Jr,vt,Ur,lo,z,Kr,yt,Rr,Yr,ho,_e,Ee,si,co,je,Qr,uo;return J=new Ue({}),U=new _a({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter8/section3.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter8/section3.ipynb"}]}}),K=new ka({props:{id:"S2EEG3JIt2A"}}),re=new Ue({}),ie=new Xr({props:{code:`from transformers import AutoTokenizer, AutoModel

model_checkpoint = "distilbert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
model = AutoModel.from_pretrained(model_checkpoint)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModel

model_checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
model = AutoModel.from_pretrained(model_checkpoint)`}}),se=new Xr({props:{code:`text = """
Generation One is a retroactive term for the Transformers characters that
appeared between 1984 and 1993. The Transformers began with the 1980s Japanese
toy lines Micro Change and Diaclone. They presented robots able to transform
into everyday vehicles, electronic items or weapons. Hasbro bought the Micro
Change and Diaclone toys, and partnered with Takara. Marvel Comics was hired by
Hasbro to create the backstory; editor-in-chief Jim Shooter wrote an overall
story, and gave the task of creating the characthers to writer Dennis O'Neil.
Unhappy with O'Neil's work (although O'Neil created the name "Optimus Prime"),
Shooter chose Bob Budiansky to create the characters.

The Transformers mecha were largely designed by Sh\u014Dji Kawamori, the creator of
the Japanese mecha anime franchise Macross (which was adapted into the Robotech
franchise in North America). Kawamori came up with the idea of transforming
mechs while working on the Diaclone and Macross franchises in the early 1980s
(such as the VF-1 Valkyrie in Macross and Robotech), with his Diaclone mechs
later providing the basis for Transformers.

The primary concept of Generation One is that the heroic Optimus Prime, the
villainous Megatron, and their finest soldiers crash land on pre-historic Earth
in the Ark and the Nemesis before awakening in 1985, Cybertron hurtling through
the Neutral zone as an effect of the war. The Marvel comic was originally part
of the main Marvel Universe, with appearances from Spider-Man and Nick Fury,
plus some cameos, as well as a visit to the Savage Land.

The Transformers TV series began around the same time. Produced by Sunbow
Productions and Marvel Productions, later Hasbro Productions, from the start it
contradicted Budiansky's backstories. The TV series shows the Autobots looking
for new energy sources, and crash landing as the Decepticons attack. Marvel
interpreted the Autobots as destroying a rogue asteroid approaching Cybertron.
Shockwave is loyal to Megatron in the TV series, keeping Cybertron in a
stalemate during his absence, but in the comic book he attempts to take command
of the Decepticons. The TV series would also differ wildly from the origins
Budiansky had created for the Dinobots, the Decepticon turned Autobot Jetfire
(known as Skyfire on TV), the Constructicons (who combine to form
Devastator),[19][20] and Omega Supreme. The Marvel comic establishes early on
that Prime wields the Creation Matrix, which gives life to machines. In the
second season, the two-part episode The Key to Vector Sigma introduced the
ancient Vector Sigma computer, which served the same original purpose as the
Creation Matrix (giving life to Transformers), and its guardian Alpha Trion.
"""

inputs = tokenizer(text, return_tensors="pt")
logits = model(**inputs).logits`,highlighted:`text = <span class="hljs-string">&quot;&quot;&quot;
Generation One is a retroactive term for the Transformers characters that
appeared between 1984 and 1993. The Transformers began with the 1980s Japanese
toy lines Micro Change and Diaclone. They presented robots able to transform
into everyday vehicles, electronic items or weapons. Hasbro bought the Micro
Change and Diaclone toys, and partnered with Takara. Marvel Comics was hired by
Hasbro to create the backstory; editor-in-chief Jim Shooter wrote an overall
story, and gave the task of creating the characthers to writer Dennis O&#x27;Neil.
Unhappy with O&#x27;Neil&#x27;s work (although O&#x27;Neil created the name &quot;Optimus Prime&quot;),
Shooter chose Bob Budiansky to create the characters.

The Transformers mecha were largely designed by Sh\u014Dji Kawamori, the creator of
the Japanese mecha anime franchise Macross (which was adapted into the Robotech
franchise in North America). Kawamori came up with the idea of transforming
mechs while working on the Diaclone and Macross franchises in the early 1980s
(such as the VF-1 Valkyrie in Macross and Robotech), with his Diaclone mechs
later providing the basis for Transformers.

The primary concept of Generation One is that the heroic Optimus Prime, the
villainous Megatron, and their finest soldiers crash land on pre-historic Earth
in the Ark and the Nemesis before awakening in 1985, Cybertron hurtling through
the Neutral zone as an effect of the war. The Marvel comic was originally part
of the main Marvel Universe, with appearances from Spider-Man and Nick Fury,
plus some cameos, as well as a visit to the Savage Land.

The Transformers TV series began around the same time. Produced by Sunbow
Productions and Marvel Productions, later Hasbro Productions, from the start it
contradicted Budiansky&#x27;s backstories. The TV series shows the Autobots looking
for new energy sources, and crash landing as the Decepticons attack. Marvel
interpreted the Autobots as destroying a rogue asteroid approaching Cybertron.
Shockwave is loyal to Megatron in the TV series, keeping Cybertron in a
stalemate during his absence, but in the comic book he attempts to take command
of the Decepticons. The TV series would also differ wildly from the origins
Budiansky had created for the Dinobots, the Decepticon turned Autobot Jetfire
(known as Skyfire on TV), the Constructicons (who combine to form
Devastator),[19][20] and Omega Supreme. The Marvel comic establishes early on
that Prime wields the Creation Matrix, which gives life to machines. In the
second season, the two-part episode The Key to Vector Sigma introduced the
ancient Vector Sigma computer, which served the same original purpose as the
Creation Matrix (giving life to Transformers), and its guardian Alpha Trion.
&quot;&quot;&quot;</span>

inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
logits = model(**inputs).logits`}}),ne=new Xr({props:{code:"IndexError: index out of range in self",highlighted:'IndexError: index out of <span class="hljs-built_in">range</span> <span class="hljs-keyword">in</span> self'}}),me=new Ue({}),de=new Ue({}),ve=new Ue({}),ke=new Ue({}),{c(){T=i("meta"),bt=u(),$=i("h1"),I=i("a"),Ke=i("span"),p(J.$$.fragment),Ao=u(),Re=i("span"),Po=l("Asking for help on the forums"),kt=u(),p(U.$$.fragment),_t=u(),p(K.$$.fragment),Et=u(),N=i("p"),Mo=l("The "),R=i("a"),So=l("Hugging Face forums"),qo=l(" are a great place to get help from the open source team and wider Hugging Face community. Here\u2019s what the main page looks like on any given day:"),Tt=u(),Y=i("div"),Q=i("img"),$t=u(),y=i("p"),Io=l("On the lefthand side you can see all the categories that the various topics are grouped into, while the righthand side shows the most recent topics. A topic is a post that contains a title, category, and description; it\u2019s quite similar to the GitHub issues format that we saw when creating our own dataset in "),$e=i("a"),No=l("Chapter 5"),Do=l(". As the name suggests, the "),X=i("a"),Co=l("Beginners"),Ho=l(" category is primarily intended for people just starting out with the Hugging Face libraries and ecosystem. Any question on any of the libraries is welcome there, be it to debug some code or to ask for help about how to do something. (That said, if your question concerns one library in particular, you should probably head to the corresponding library category on the forum.)"),xt=u(),b=i("p"),Oo=l("Similarly, the "),Z=i("a"),Vo=l("Intermediate"),Fo=l(" and "),ee=i("a"),jo=l("Research"),Lo=l(" categories are for more advanced questions, for example about the libraries or some cool new NLP research that you\u2019d like to discuss."),At=u(),D=i("p"),Go=l("And naturally, we should also mention the "),te=i("a"),Bo=l("Course"),Wo=l(" category, where you can ask any questions you have that are related to the Hugging Face course!"),Pt=u(),C=i("p"),zo=l("Once you have selected a category, you\u2019ll be ready to write your first topic. You can find some "),oe=i("a"),Jo=l("guidelines"),Uo=l(" in the forum on how to do this, and in this section we\u2019ll take a look at some features that make up a good topic."),Mt=u(),x=i("h2"),H=i("a"),Ye=i("span"),p(re.$$.fragment),Ko=u(),Qe=i("span"),Ro=l("Writing a good forum post"),St=u(),xe=i("p"),Yo=l("As a running example, let\u2019s suppose that we\u2019re trying to generate embeddings from Wikipedia articles to create a custom search engine. As usual, we load the tokenizer and model as follows:"),qt=u(),p(ie.$$.fragment),It=u(),O=i("p"),Qo=l("Now suppose we try to embed a whole section of the "),ae=i("a"),Xo=l("Wikipedia article"),Zo=l(" on Transformers (the franchise, not the library!):"),Nt=u(),p(se.$$.fragment),Dt=u(),p(ne.$$.fragment),Ct=u(),V=i("p"),er=l("Uh-oh, we\u2019ve hit a problem \u2014 and the error message is far more cryptic than the ones we saw in "),Ae=i("a"),tr=l("section 2"),or=l("! We can\u2019t make head or tails of the full traceback, so we decide to turn to the Hugging Face forums for help. How might we craft the topic?"),Ht=u(),Pe=i("p"),rr=l("To get started, we need to click the \u201CNew Topic\u201D button at the upper-right corner (note that to create a topic, we\u2019ll need to be logged in):"),Ot=u(),le=i("div"),he=i("img"),Vt=u(),Me=i("p"),ir=l("This brings up a writing interface where we can input the title of our topic, select a category, and draft the content:"),Ft=u(),ce=i("div"),ue=i("img"),jt=u(),Se=i("p"),ar=l("Since the error seems to be exclusively about \u{1F917} Transformers, we\u2019ll select this for the category. Our first attempt at explaining the problem might look something like this:"),Lt=u(),fe=i("div"),pe=i("img"),Gt=u(),qe=i("p"),sr=l("Although this topic contains the error message we need help with, there are a few problems with the way it is written:"),Bt=u(),k=i("ol"),Xe=i("li"),nr=l("The title is not very descriptive, so anyone browsing the forum won\u2019t be able to tell what the topic is about without reading the body as well."),lr=u(),A=i("li"),hr=l("The body doesn\u2019t provide enough information about "),Ze=i("em"),cr=l("where"),ur=l(" the error is coming from and "),et=i("em"),fr=l("how"),pr=l(" to reproduce it."),mr=u(),tt=i("li"),dr=l("The topic tags a few people directly with a somewhat demanding tone."),Wt=u(),Ie=i("p"),gr=l("Topics like this one are not likely to get a fast answer (if they get one at all), so let\u2019s look at how we can improve it. We\u2019ll start with the first issue of picking a good title."),zt=u(),P=i("h3"),F=i("a"),ot=i("span"),p(me.$$.fragment),wr=u(),rt=i("span"),vr=l("Choosing a descriptive title"),Jt=u(),j=i("p"),yr=l("If you\u2019re trying to get help with a bug in your code, a good rule of thumb is to include enough information in the title so that others can quickly determine whether they think they can answer your question or not. In our running example, we know the name of the exception that\u2019s being raised and have some hints that it\u2019s triggered in the forward pass of the model, where we call "),it=i("code"),br=l("model(**inputs)"),kr=l(". To communicate this, one possible title could be:"),Ut=u(),Ne=i("blockquote"),at=i("p"),_r=l("Source of IndexError in the AutoModel forward pass?"),Kt=u(),_=i("p"),Er=l("This title tells the reader "),st=i("em"),Tr=l("where"),$r=l(" you think the bug is coming from, and if they\u2019ve encountered an "),nt=i("code"),xr=l("IndexError"),Ar=l(" before, there\u2019s a good chance they\u2019ll know how to debug it. Of course, the title can be anything you want, and other variations like:"),Rt=u(),De=i("blockquote"),lt=i("p"),Pr=l("Why does my model produce an IndexError?"),Yt=u(),Ce=i("p"),Mr=l("could also be fine. Now that we\u2019ve got a descriptive title, let\u2019s take a look at improving the body."),Qt=u(),M=i("h3"),L=i("a"),ht=i("span"),p(de.$$.fragment),Sr=u(),ct=i("span"),qr=l("Formatting your code snippets"),Xt=u(),He=i("p"),Ir=l("Reading source code is hard enough in an IDE, but it\u2019s even harder when the code is copied and pasted as plain text! Fortunately, the Hugging Face forums support the use of Markdown, so you should always enclose your code blocks with three backticks (```) so it\u2019s more easily readable. Let\u2019s do this to prettify the error message \u2014 and while we\u2019re at it, let\u2019s make the body a bit more polite than our original version:"),Zt=u(),ge=i("div"),we=i("img"),eo=u(),G=i("p"),Nr=l("As you can see in the screenshot, enclosing the code blocks in backticks converts the raw text into formatted code, complete with color styling! Also note that single backticks can be used to format inline variables, like we\u2019ve done for "),ut=i("code"),Dr=l("distilbert-base-uncased"),Cr=l(". This topic is looking much better, and with a bit of luck we might find someone in the community who can guess what the error is about. However, instead of relying on luck, let\u2019s make life easier by including the traceback in its full gory detail!"),to=u(),S=i("h3"),B=i("a"),ft=i("span"),p(ve.$$.fragment),Hr=u(),pt=i("span"),Or=l("Including the full traceback"),oo=u(),E=i("p"),Vr=l("Since the last line of the traceback is often enough to debug your own code, it can be tempting to just provide that in your topic to \u201Csave space.\u201D Although well intentioned, this actually makes it "),mt=i("em"),Fr=l("harder"),jr=l(" for others to debug the problem since the information that\u2019s higher up in the traceback can be really useful too. So, a good practice is to copy and paste the "),dt=i("em"),Lr=l("whole"),Gr=l(" traceback, while making sure that it\u2019s nicely formatted. Since these tracebacks can get rather long, some people prefer to show them after they\u2019ve explained the source code. Let\u2019s do this. Now, our forum topic looks like the following:"),ro=u(),ye=i("div"),be=i("img"),io=u(),Oe=i("p"),Br=l("This is much more informative, and a careful reader might be able to point out that the problem seems to be due to passing a long input because of this line in the traceback:"),ao=u(),Ve=i("blockquote"),gt=i("p"),Wr=l("Token indices sequence length is longer than the specified maximum sequence length for this model (583 > 512)."),so=u(),Fe=i("p"),zr=l("However, we can make things even easier for them by providing the actual code that triggered the error. Let\u2019s do that now."),no=u(),q=i("h3"),W=i("a"),wt=i("span"),p(ke.$$.fragment),Jr=u(),vt=i("span"),Ur=l("Providing a reproducible example"),lo=u(),z=i("p"),Kr=l("If you\u2019ve ever tried to debug someone else\u2019s code, you\u2019ve probably first tried to recreate the problem they\u2019ve reported so you can start working your way through the traceback to pinpoint the error. It\u2019s no different when it comes to getting (or giving) assistance on the forums, so it really helps if you can provide a small example that reproduces the error. Half the time, simply walking through this exercise will help you figure out what\u2019s going wrong. In any case, the missing piece of our example is to show the "),yt=i("em"),Rr=l("inputs"),Yr=l(" that we provided to the model. Doing that gives us something like the following completed example:"),ho=u(),_e=i("div"),Ee=i("img"),co=u(),je=i("p"),Qr=l("This topic now contains quite a lot of information, and it\u2019s written in a way that is much more likely to attract the attention of the community and get a helpful answer. With these basic guidelines, you can now create great topics to find the answers to your \u{1F917} Transformers questions!"),this.h()},l(e){const r=va('[data-svelte="svelte-1phssyn"]',document.head);T=a(r,"META",{name:!0,content:!0}),r.forEach(t),bt=f(e),$=a(e,"H1",{class:!0});var fo=n($);I=a(fo,"A",{id:!0,class:!0,href:!0});var ni=n(I);Ke=a(ni,"SPAN",{});var li=n(Ke);m(J.$$.fragment,li),li.forEach(t),ni.forEach(t),Ao=f(fo),Re=a(fo,"SPAN",{});var hi=n(Re);Po=h(hi,"Asking for help on the forums"),hi.forEach(t),fo.forEach(t),kt=f(e),m(U.$$.fragment,e),_t=f(e),m(K.$$.fragment,e),Et=f(e),N=a(e,"P",{});var po=n(N);Mo=h(po,"The "),R=a(po,"A",{href:!0,rel:!0});var ci=n(R);So=h(ci,"Hugging Face forums"),ci.forEach(t),qo=h(po," are a great place to get help from the open source team and wider Hugging Face community. Here\u2019s what the main page looks like on any given day:"),po.forEach(t),Tt=f(e),Y=a(e,"DIV",{class:!0});var ui=n(Y);Q=a(ui,"IMG",{src:!0,alt:!0,width:!0}),ui.forEach(t),$t=f(e),y=a(e,"P",{});var Le=n(y);Io=h(Le,"On the lefthand side you can see all the categories that the various topics are grouped into, while the righthand side shows the most recent topics. A topic is a post that contains a title, category, and description; it\u2019s quite similar to the GitHub issues format that we saw when creating our own dataset in "),$e=a(Le,"A",{href:!0});var fi=n($e);No=h(fi,"Chapter 5"),fi.forEach(t),Do=h(Le,". As the name suggests, the "),X=a(Le,"A",{href:!0,rel:!0});var pi=n(X);Co=h(pi,"Beginners"),pi.forEach(t),Ho=h(Le," category is primarily intended for people just starting out with the Hugging Face libraries and ecosystem. Any question on any of the libraries is welcome there, be it to debug some code or to ask for help about how to do something. (That said, if your question concerns one library in particular, you should probably head to the corresponding library category on the forum.)"),Le.forEach(t),xt=f(e),b=a(e,"P",{});var Ge=n(b);Oo=h(Ge,"Similarly, the "),Z=a(Ge,"A",{href:!0,rel:!0});var mi=n(Z);Vo=h(mi,"Intermediate"),mi.forEach(t),Fo=h(Ge," and "),ee=a(Ge,"A",{href:!0,rel:!0});var di=n(ee);jo=h(di,"Research"),di.forEach(t),Lo=h(Ge," categories are for more advanced questions, for example about the libraries or some cool new NLP research that you\u2019d like to discuss."),Ge.forEach(t),At=f(e),D=a(e,"P",{});var mo=n(D);Go=h(mo,"And naturally, we should also mention the "),te=a(mo,"A",{href:!0,rel:!0});var gi=n(te);Bo=h(gi,"Course"),gi.forEach(t),Wo=h(mo," category, where you can ask any questions you have that are related to the Hugging Face course!"),mo.forEach(t),Pt=f(e),C=a(e,"P",{});var go=n(C);zo=h(go,"Once you have selected a category, you\u2019ll be ready to write your first topic. You can find some "),oe=a(go,"A",{href:!0,rel:!0});var wi=n(oe);Jo=h(wi,"guidelines"),wi.forEach(t),Uo=h(go," in the forum on how to do this, and in this section we\u2019ll take a look at some features that make up a good topic."),go.forEach(t),Mt=f(e),x=a(e,"H2",{class:!0});var wo=n(x);H=a(wo,"A",{id:!0,class:!0,href:!0});var vi=n(H);Ye=a(vi,"SPAN",{});var yi=n(Ye);m(re.$$.fragment,yi),yi.forEach(t),vi.forEach(t),Ko=f(wo),Qe=a(wo,"SPAN",{});var bi=n(Qe);Ro=h(bi,"Writing a good forum post"),bi.forEach(t),wo.forEach(t),St=f(e),xe=a(e,"P",{});var ki=n(xe);Yo=h(ki,"As a running example, let\u2019s suppose that we\u2019re trying to generate embeddings from Wikipedia articles to create a custom search engine. As usual, we load the tokenizer and model as follows:"),ki.forEach(t),qt=f(e),m(ie.$$.fragment,e),It=f(e),O=a(e,"P",{});var vo=n(O);Qo=h(vo,"Now suppose we try to embed a whole section of the "),ae=a(vo,"A",{href:!0,rel:!0});var _i=n(ae);Xo=h(_i,"Wikipedia article"),_i.forEach(t),Zo=h(vo," on Transformers (the franchise, not the library!):"),vo.forEach(t),Nt=f(e),m(se.$$.fragment,e),Dt=f(e),m(ne.$$.fragment,e),Ct=f(e),V=a(e,"P",{});var yo=n(V);er=h(yo,"Uh-oh, we\u2019ve hit a problem \u2014 and the error message is far more cryptic than the ones we saw in "),Ae=a(yo,"A",{href:!0});var Ei=n(Ae);tr=h(Ei,"section 2"),Ei.forEach(t),or=h(yo,"! We can\u2019t make head or tails of the full traceback, so we decide to turn to the Hugging Face forums for help. How might we craft the topic?"),yo.forEach(t),Ht=f(e),Pe=a(e,"P",{});var Ti=n(Pe);rr=h(Ti,"To get started, we need to click the \u201CNew Topic\u201D button at the upper-right corner (note that to create a topic, we\u2019ll need to be logged in):"),Ti.forEach(t),Ot=f(e),le=a(e,"DIV",{class:!0});var $i=n(le);he=a($i,"IMG",{src:!0,alt:!0,width:!0}),$i.forEach(t),Vt=f(e),Me=a(e,"P",{});var xi=n(Me);ir=h(xi,"This brings up a writing interface where we can input the title of our topic, select a category, and draft the content:"),xi.forEach(t),Ft=f(e),ce=a(e,"DIV",{class:!0});var Ai=n(ce);ue=a(Ai,"IMG",{src:!0,alt:!0,width:!0}),Ai.forEach(t),jt=f(e),Se=a(e,"P",{});var Pi=n(Se);ar=h(Pi,"Since the error seems to be exclusively about \u{1F917} Transformers, we\u2019ll select this for the category. Our first attempt at explaining the problem might look something like this:"),Pi.forEach(t),Lt=f(e),fe=a(e,"DIV",{class:!0});var Mi=n(fe);pe=a(Mi,"IMG",{src:!0,alt:!0,width:!0}),Mi.forEach(t),Gt=f(e),qe=a(e,"P",{});var Si=n(qe);sr=h(Si,"Although this topic contains the error message we need help with, there are a few problems with the way it is written:"),Si.forEach(t),Bt=f(e),k=a(e,"OL",{});var Be=n(k);Xe=a(Be,"LI",{});var qi=n(Xe);nr=h(qi,"The title is not very descriptive, so anyone browsing the forum won\u2019t be able to tell what the topic is about without reading the body as well."),qi.forEach(t),lr=f(Be),A=a(Be,"LI",{});var We=n(A);hr=h(We,"The body doesn\u2019t provide enough information about "),Ze=a(We,"EM",{});var Ii=n(Ze);cr=h(Ii,"where"),Ii.forEach(t),ur=h(We," the error is coming from and "),et=a(We,"EM",{});var Ni=n(et);fr=h(Ni,"how"),Ni.forEach(t),pr=h(We," to reproduce it."),We.forEach(t),mr=f(Be),tt=a(Be,"LI",{});var Di=n(tt);dr=h(Di,"The topic tags a few people directly with a somewhat demanding tone."),Di.forEach(t),Be.forEach(t),Wt=f(e),Ie=a(e,"P",{});var Ci=n(Ie);gr=h(Ci,"Topics like this one are not likely to get a fast answer (if they get one at all), so let\u2019s look at how we can improve it. We\u2019ll start with the first issue of picking a good title."),Ci.forEach(t),zt=f(e),P=a(e,"H3",{class:!0});var bo=n(P);F=a(bo,"A",{id:!0,class:!0,href:!0});var Hi=n(F);ot=a(Hi,"SPAN",{});var Oi=n(ot);m(me.$$.fragment,Oi),Oi.forEach(t),Hi.forEach(t),wr=f(bo),rt=a(bo,"SPAN",{});var Vi=n(rt);vr=h(Vi,"Choosing a descriptive title"),Vi.forEach(t),bo.forEach(t),Jt=f(e),j=a(e,"P",{});var ko=n(j);yr=h(ko,"If you\u2019re trying to get help with a bug in your code, a good rule of thumb is to include enough information in the title so that others can quickly determine whether they think they can answer your question or not. In our running example, we know the name of the exception that\u2019s being raised and have some hints that it\u2019s triggered in the forward pass of the model, where we call "),it=a(ko,"CODE",{});var Fi=n(it);br=h(Fi,"model(**inputs)"),Fi.forEach(t),kr=h(ko,". To communicate this, one possible title could be:"),ko.forEach(t),Ut=f(e),Ne=a(e,"BLOCKQUOTE",{});var ji=n(Ne);at=a(ji,"P",{});var Li=n(at);_r=h(Li,"Source of IndexError in the AutoModel forward pass?"),Li.forEach(t),ji.forEach(t),Kt=f(e),_=a(e,"P",{});var ze=n(_);Er=h(ze,"This title tells the reader "),st=a(ze,"EM",{});var Gi=n(st);Tr=h(Gi,"where"),Gi.forEach(t),$r=h(ze," you think the bug is coming from, and if they\u2019ve encountered an "),nt=a(ze,"CODE",{});var Bi=n(nt);xr=h(Bi,"IndexError"),Bi.forEach(t),Ar=h(ze," before, there\u2019s a good chance they\u2019ll know how to debug it. Of course, the title can be anything you want, and other variations like:"),ze.forEach(t),Rt=f(e),De=a(e,"BLOCKQUOTE",{});var Wi=n(De);lt=a(Wi,"P",{});var zi=n(lt);Pr=h(zi,"Why does my model produce an IndexError?"),zi.forEach(t),Wi.forEach(t),Yt=f(e),Ce=a(e,"P",{});var Ji=n(Ce);Mr=h(Ji,"could also be fine. Now that we\u2019ve got a descriptive title, let\u2019s take a look at improving the body."),Ji.forEach(t),Qt=f(e),M=a(e,"H3",{class:!0});var _o=n(M);L=a(_o,"A",{id:!0,class:!0,href:!0});var Ui=n(L);ht=a(Ui,"SPAN",{});var Ki=n(ht);m(de.$$.fragment,Ki),Ki.forEach(t),Ui.forEach(t),Sr=f(_o),ct=a(_o,"SPAN",{});var Ri=n(ct);qr=h(Ri,"Formatting your code snippets"),Ri.forEach(t),_o.forEach(t),Xt=f(e),He=a(e,"P",{});var Yi=n(He);Ir=h(Yi,"Reading source code is hard enough in an IDE, but it\u2019s even harder when the code is copied and pasted as plain text! Fortunately, the Hugging Face forums support the use of Markdown, so you should always enclose your code blocks with three backticks (```) so it\u2019s more easily readable. Let\u2019s do this to prettify the error message \u2014 and while we\u2019re at it, let\u2019s make the body a bit more polite than our original version:"),Yi.forEach(t),Zt=f(e),ge=a(e,"DIV",{class:!0});var Qi=n(ge);we=a(Qi,"IMG",{src:!0,alt:!0,width:!0}),Qi.forEach(t),eo=f(e),G=a(e,"P",{});var Eo=n(G);Nr=h(Eo,"As you can see in the screenshot, enclosing the code blocks in backticks converts the raw text into formatted code, complete with color styling! Also note that single backticks can be used to format inline variables, like we\u2019ve done for "),ut=a(Eo,"CODE",{});var Xi=n(ut);Dr=h(Xi,"distilbert-base-uncased"),Xi.forEach(t),Cr=h(Eo,". This topic is looking much better, and with a bit of luck we might find someone in the community who can guess what the error is about. However, instead of relying on luck, let\u2019s make life easier by including the traceback in its full gory detail!"),Eo.forEach(t),to=f(e),S=a(e,"H3",{class:!0});var To=n(S);B=a(To,"A",{id:!0,class:!0,href:!0});var Zi=n(B);ft=a(Zi,"SPAN",{});var ea=n(ft);m(ve.$$.fragment,ea),ea.forEach(t),Zi.forEach(t),Hr=f(To),pt=a(To,"SPAN",{});var ta=n(pt);Or=h(ta,"Including the full traceback"),ta.forEach(t),To.forEach(t),oo=f(e),E=a(e,"P",{});var Je=n(E);Vr=h(Je,"Since the last line of the traceback is often enough to debug your own code, it can be tempting to just provide that in your topic to \u201Csave space.\u201D Although well intentioned, this actually makes it "),mt=a(Je,"EM",{});var oa=n(mt);Fr=h(oa,"harder"),oa.forEach(t),jr=h(Je," for others to debug the problem since the information that\u2019s higher up in the traceback can be really useful too. So, a good practice is to copy and paste the "),dt=a(Je,"EM",{});var ra=n(dt);Lr=h(ra,"whole"),ra.forEach(t),Gr=h(Je," traceback, while making sure that it\u2019s nicely formatted. Since these tracebacks can get rather long, some people prefer to show them after they\u2019ve explained the source code. Let\u2019s do this. Now, our forum topic looks like the following:"),Je.forEach(t),ro=f(e),ye=a(e,"DIV",{class:!0});var ia=n(ye);be=a(ia,"IMG",{src:!0,alt:!0,width:!0}),ia.forEach(t),io=f(e),Oe=a(e,"P",{});var aa=n(Oe);Br=h(aa,"This is much more informative, and a careful reader might be able to point out that the problem seems to be due to passing a long input because of this line in the traceback:"),aa.forEach(t),ao=f(e),Ve=a(e,"BLOCKQUOTE",{});var sa=n(Ve);gt=a(sa,"P",{});var na=n(gt);Wr=h(na,"Token indices sequence length is longer than the specified maximum sequence length for this model (583 > 512)."),na.forEach(t),sa.forEach(t),so=f(e),Fe=a(e,"P",{});var la=n(Fe);zr=h(la,"However, we can make things even easier for them by providing the actual code that triggered the error. Let\u2019s do that now."),la.forEach(t),no=f(e),q=a(e,"H3",{class:!0});var $o=n(q);W=a($o,"A",{id:!0,class:!0,href:!0});var ha=n(W);wt=a(ha,"SPAN",{});var ca=n(wt);m(ke.$$.fragment,ca),ca.forEach(t),ha.forEach(t),Jr=f($o),vt=a($o,"SPAN",{});var ua=n(vt);Ur=h(ua,"Providing a reproducible example"),ua.forEach(t),$o.forEach(t),lo=f(e),z=a(e,"P",{});var xo=n(z);Kr=h(xo,"If you\u2019ve ever tried to debug someone else\u2019s code, you\u2019ve probably first tried to recreate the problem they\u2019ve reported so you can start working your way through the traceback to pinpoint the error. It\u2019s no different when it comes to getting (or giving) assistance on the forums, so it really helps if you can provide a small example that reproduces the error. Half the time, simply walking through this exercise will help you figure out what\u2019s going wrong. In any case, the missing piece of our example is to show the "),yt=a(xo,"EM",{});var fa=n(yt);Rr=h(fa,"inputs"),fa.forEach(t),Yr=h(xo," that we provided to the model. Doing that gives us something like the following completed example:"),xo.forEach(t),ho=f(e),_e=a(e,"DIV",{class:!0});var pa=n(_e);Ee=a(pa,"IMG",{src:!0,alt:!0,width:!0}),pa.forEach(t),co=f(e),je=a(e,"P",{});var ma=n(je);Qr=h(ma,"This topic now contains quite a lot of information, and it\u2019s written in a way that is much more likely to attract the attention of the community and get a helpful answer. With these basic guidelines, you can now create great topics to find the answers to your \u{1F917} Transformers questions!"),ma.forEach(t),this.h()},h(){c(T,"name","hf:doc:metadata"),c(T,"content",JSON.stringify(Ta)),c(I,"id","asking-for-help-on-the-forums"),c(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(I,"href","#asking-for-help-on-the-forums"),c($,"class","relative group"),c(R,"href","https://discuss.huggingface.co"),c(R,"rel","nofollow"),Te(Q.src,ei="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter8/forums.png")||c(Q,"src",ei),c(Q,"alt","The Hugging Face forums."),c(Q,"width","100%"),c(Y,"class","flex justify-center"),c($e,"href","/course/chapter5"),c(X,"href","https://discuss.huggingface.co/c/beginners/5"),c(X,"rel","nofollow"),c(Z,"href","https://discuss.huggingface.co/c/intermediate/6"),c(Z,"rel","nofollow"),c(ee,"href","https://discuss.huggingface.co/c/research/7"),c(ee,"rel","nofollow"),c(te,"href","https://discuss.huggingface.co/c/course/20"),c(te,"rel","nofollow"),c(oe,"href","https://discuss.huggingface.co/t/how-to-request-support/3128"),c(oe,"rel","nofollow"),c(H,"id","writing-a-good-forum-post"),c(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(H,"href","#writing-a-good-forum-post"),c(x,"class","relative group"),c(ae,"href","https://en.wikipedia.org/wiki/Transformers"),c(ae,"rel","nofollow"),c(Ae,"href","/course/chapter8/section2"),Te(he.src,ti="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter8/forums-new-topic.png")||c(he,"src",ti),c(he,"alt","Creating a new forum topic."),c(he,"width","100%"),c(le,"class","flex justify-center"),Te(ue.src,oi="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter8/forum-topic01.png")||c(ue,"src",oi),c(ue,"alt","The interface for creating a forum topic."),c(ue,"width","100%"),c(ce,"class","flex justify-center"),Te(pe.src,ri="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter8/forum-topic02.png")||c(pe,"src",ri),c(pe,"alt","Drafting the content for a new forum topic."),c(pe,"width","100%"),c(fe,"class","flex justify-center"),c(F,"id","choosing-a-descriptive-title"),c(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(F,"href","#choosing-a-descriptive-title"),c(P,"class","relative group"),c(L,"id","formatting-your-code-snippets"),c(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(L,"href","#formatting-your-code-snippets"),c(M,"class","relative group"),Te(we.src,ii="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter8/forum-topic03.png")||c(we,"src",ii),c(we,"alt","Our revised forum topic, with proper code formatting."),c(we,"width","100%"),c(ge,"class","flex justify-center"),c(B,"id","including-the-full-traceback"),c(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(B,"href","#including-the-full-traceback"),c(S,"class","relative group"),Te(be.src,ai="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter8/forum-topic04.png")||c(be,"src",ai),c(be,"alt","Our example forum topic, with the complete traceback."),c(be,"width","100%"),c(ye,"class","flex justify-center"),c(W,"id","providing-a-reproducible-example"),c(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(W,"href","#providing-a-reproducible-example"),c(q,"class","relative group"),Te(Ee.src,si="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter8/forum-topic05.png")||c(Ee,"src",si),c(Ee,"alt","The final version of our forum topic."),c(Ee,"width","100%"),c(_e,"class","flex justify-center")},m(e,r){o(document.head,T),s(e,bt,r),s(e,$,r),o($,I),o(I,Ke),d(J,Ke,null),o($,Ao),o($,Re),o(Re,Po),s(e,kt,r),d(U,e,r),s(e,_t,r),d(K,e,r),s(e,Et,r),s(e,N,r),o(N,Mo),o(N,R),o(R,So),o(N,qo),s(e,Tt,r),s(e,Y,r),o(Y,Q),s(e,$t,r),s(e,y,r),o(y,Io),o(y,$e),o($e,No),o(y,Do),o(y,X),o(X,Co),o(y,Ho),s(e,xt,r),s(e,b,r),o(b,Oo),o(b,Z),o(Z,Vo),o(b,Fo),o(b,ee),o(ee,jo),o(b,Lo),s(e,At,r),s(e,D,r),o(D,Go),o(D,te),o(te,Bo),o(D,Wo),s(e,Pt,r),s(e,C,r),o(C,zo),o(C,oe),o(oe,Jo),o(C,Uo),s(e,Mt,r),s(e,x,r),o(x,H),o(H,Ye),d(re,Ye,null),o(x,Ko),o(x,Qe),o(Qe,Ro),s(e,St,r),s(e,xe,r),o(xe,Yo),s(e,qt,r),d(ie,e,r),s(e,It,r),s(e,O,r),o(O,Qo),o(O,ae),o(ae,Xo),o(O,Zo),s(e,Nt,r),d(se,e,r),s(e,Dt,r),d(ne,e,r),s(e,Ct,r),s(e,V,r),o(V,er),o(V,Ae),o(Ae,tr),o(V,or),s(e,Ht,r),s(e,Pe,r),o(Pe,rr),s(e,Ot,r),s(e,le,r),o(le,he),s(e,Vt,r),s(e,Me,r),o(Me,ir),s(e,Ft,r),s(e,ce,r),o(ce,ue),s(e,jt,r),s(e,Se,r),o(Se,ar),s(e,Lt,r),s(e,fe,r),o(fe,pe),s(e,Gt,r),s(e,qe,r),o(qe,sr),s(e,Bt,r),s(e,k,r),o(k,Xe),o(Xe,nr),o(k,lr),o(k,A),o(A,hr),o(A,Ze),o(Ze,cr),o(A,ur),o(A,et),o(et,fr),o(A,pr),o(k,mr),o(k,tt),o(tt,dr),s(e,Wt,r),s(e,Ie,r),o(Ie,gr),s(e,zt,r),s(e,P,r),o(P,F),o(F,ot),d(me,ot,null),o(P,wr),o(P,rt),o(rt,vr),s(e,Jt,r),s(e,j,r),o(j,yr),o(j,it),o(it,br),o(j,kr),s(e,Ut,r),s(e,Ne,r),o(Ne,at),o(at,_r),s(e,Kt,r),s(e,_,r),o(_,Er),o(_,st),o(st,Tr),o(_,$r),o(_,nt),o(nt,xr),o(_,Ar),s(e,Rt,r),s(e,De,r),o(De,lt),o(lt,Pr),s(e,Yt,r),s(e,Ce,r),o(Ce,Mr),s(e,Qt,r),s(e,M,r),o(M,L),o(L,ht),d(de,ht,null),o(M,Sr),o(M,ct),o(ct,qr),s(e,Xt,r),s(e,He,r),o(He,Ir),s(e,Zt,r),s(e,ge,r),o(ge,we),s(e,eo,r),s(e,G,r),o(G,Nr),o(G,ut),o(ut,Dr),o(G,Cr),s(e,to,r),s(e,S,r),o(S,B),o(B,ft),d(ve,ft,null),o(S,Hr),o(S,pt),o(pt,Or),s(e,oo,r),s(e,E,r),o(E,Vr),o(E,mt),o(mt,Fr),o(E,jr),o(E,dt),o(dt,Lr),o(E,Gr),s(e,ro,r),s(e,ye,r),o(ye,be),s(e,io,r),s(e,Oe,r),o(Oe,Br),s(e,ao,r),s(e,Ve,r),o(Ve,gt),o(gt,Wr),s(e,so,r),s(e,Fe,r),o(Fe,zr),s(e,no,r),s(e,q,r),o(q,W),o(W,wt),d(ke,wt,null),o(q,Jr),o(q,vt),o(vt,Ur),s(e,lo,r),s(e,z,r),o(z,Kr),o(z,yt),o(yt,Rr),o(z,Yr),s(e,ho,r),s(e,_e,r),o(_e,Ee),s(e,co,r),s(e,je,r),o(je,Qr),uo=!0},p:ya,i(e){uo||(g(J.$$.fragment,e),g(U.$$.fragment,e),g(K.$$.fragment,e),g(re.$$.fragment,e),g(ie.$$.fragment,e),g(se.$$.fragment,e),g(ne.$$.fragment,e),g(me.$$.fragment,e),g(de.$$.fragment,e),g(ve.$$.fragment,e),g(ke.$$.fragment,e),uo=!0)},o(e){w(J.$$.fragment,e),w(U.$$.fragment,e),w(K.$$.fragment,e),w(re.$$.fragment,e),w(ie.$$.fragment,e),w(se.$$.fragment,e),w(ne.$$.fragment,e),w(me.$$.fragment,e),w(de.$$.fragment,e),w(ve.$$.fragment,e),w(ke.$$.fragment,e),uo=!1},d(e){t(T),e&&t(bt),e&&t($),v(J),e&&t(kt),v(U,e),e&&t(_t),v(K,e),e&&t(Et),e&&t(N),e&&t(Tt),e&&t(Y),e&&t($t),e&&t(y),e&&t(xt),e&&t(b),e&&t(At),e&&t(D),e&&t(Pt),e&&t(C),e&&t(Mt),e&&t(x),v(re),e&&t(St),e&&t(xe),e&&t(qt),v(ie,e),e&&t(It),e&&t(O),e&&t(Nt),v(se,e),e&&t(Dt),v(ne,e),e&&t(Ct),e&&t(V),e&&t(Ht),e&&t(Pe),e&&t(Ot),e&&t(le),e&&t(Vt),e&&t(Me),e&&t(Ft),e&&t(ce),e&&t(jt),e&&t(Se),e&&t(Lt),e&&t(fe),e&&t(Gt),e&&t(qe),e&&t(Bt),e&&t(k),e&&t(Wt),e&&t(Ie),e&&t(zt),e&&t(P),v(me),e&&t(Jt),e&&t(j),e&&t(Ut),e&&t(Ne),e&&t(Kt),e&&t(_),e&&t(Rt),e&&t(De),e&&t(Yt),e&&t(Ce),e&&t(Qt),e&&t(M),v(de),e&&t(Xt),e&&t(He),e&&t(Zt),e&&t(ge),e&&t(eo),e&&t(G),e&&t(to),e&&t(S),v(ve),e&&t(oo),e&&t(E),e&&t(ro),e&&t(ye),e&&t(io),e&&t(Oe),e&&t(ao),e&&t(Ve),e&&t(so),e&&t(Fe),e&&t(no),e&&t(q),v(ke),e&&t(lo),e&&t(z),e&&t(ho),e&&t(_e),e&&t(co),e&&t(je)}}}const Ta={local:"asking-for-help-on-the-forums",sections:[{local:"writing-a-good-forum-post",sections:[{local:"choosing-a-descriptive-title",title:"Choosing a descriptive title"},{local:"formatting-your-code-snippets",title:"Formatting your code snippets"},{local:"including-the-full-traceback",title:"Including the full traceback"},{local:"providing-a-reproducible-example",title:"Providing a reproducible example"}],title:"Writing a good forum post"}],title:"Asking for help on the forums"};function $a(Zr){return ba(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qa extends da{constructor(T){super();ga(this,T,$a,Ea,wa,{})}}export{qa as default,Ta as metadata};
