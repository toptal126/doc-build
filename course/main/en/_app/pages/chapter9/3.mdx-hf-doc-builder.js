import{S as fr,i as mr,s as wr,e as l,k as u,w as D,t as o,M as vr,c as n,d as a,m as h,a as r,x as P,h as s,b as c,N as Fl,G as t,g as p,y as O,L as yr,q as T,o as S,B as N,v as br}from"../../chunks/vendor-hf-doc-builder.js";import{I as We}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as zl}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as _r}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";function Er(Ul){let G,Jt,L,W,Me,pe,oo,Be,so,Rt,ce,Kt,M,lo,Je,no,ro,Qt,H,B,Re,ue,io,Ke,po,Vt,J,co,Qe,uo,ho,Xt,$e,Ve,fo,Zt,xe,mo,ea,k,qe,Xe,wo,vo,yo,g,Ze,bo,_o,et,Eo,ko,tt,go,jo,$o,j,at,xo,qo,ot,Ao,Co,st,Io,Do,ta,R,Po,he,Oo,To,aa,m,So,Ae,No,Go,lt,Lo,Ho,nt,Fo,zo,rt,Uo,Yo,oa,K,Wo,it,Mo,Bo,sa,F,Q,pt,de,Jo,ct,Ro,la,V,Ko,ut,Qo,Vo,na,Ce,Xo,ra,d,Zo,ht,es,ts,dt,as,os,ft,ss,ls,mt,ns,rs,wt,is,ps,ia,w,cs,vt,us,hs,yt,ds,fs,bt,ms,ws,_t,vs,ys,pa,$,bs,Et,_s,Es,kt,ks,gs,ca,fe,ua,X,js,me,$s,xs,ha,v,Yl,da,Ie,qs,fa,z,Z,gt,we,As,jt,Cs,ma,De,Is,wa,Pe,Ds,va,Oe,Ps,ya,ee,$t,Os,Ts,xt,Ss,ba,te,Ns,qt,Gs,Ls,_a,ve,Ea,y,Wl,ka,U,ae,At,ye,Hs,be,Fs,Ct,zs,Us,ga,oe,Ys,It,Ws,Ms,ja,se,Bs,Dt,Js,Rs,$a,le,Ks,Pt,Qs,Vs,xa,x,Te,Ot,Xs,Zs,el,Se,Tt,tl,al,ol,Ne,St,sl,ll,qa,ne,nl,Nt,rl,il,Aa,Y,re,Gt,_e,pl,Lt,cl,Ca,q,ul,Ht,hl,dl,Ft,fl,ml,Ia,f,wl,zt,vl,yl,Ge,bl,_l,Ut,El,kl,Yt,gl,jl,Wt,$l,xl,Da,Ee,Pa,ie,ql,ke,Al,Cl,Oa,b,Ml,Ta,A,Il,Mt,Dl,Pl,Bt,Ol,Tl,Sa,Le,Sl,Na;return pe=new We({}),ce=new _r({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter9/section3.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter9/section3.ipynb"}]}}),ue=new We({}),de=new We({}),fe=new zl({props:{code:`


`,highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr


<span class="hljs-keyword">def</span> <span class="hljs-title function_">reverse_audio</span>(<span class="hljs-params">audio</span>):
    sr, data = audio
    reversed_audio = (sr, np.flipud(data))
    <span class="hljs-keyword">return</span> reversed_audio


mic = gr.Audio(source=<span class="hljs-string">&quot;microphone&quot;</span>, <span class="hljs-built_in">type</span>=<span class="hljs-string">&quot;numpy&quot;</span>, label=<span class="hljs-string">&quot;Speak here...&quot;</span>)
gr.Interface(reverse_audio, mic, <span class="hljs-string">&quot;audio&quot;</span>).launch()`}}),we=new We({}),ve=new zl({props:{code:`



`,highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr

notes = [<span class="hljs-string">&quot;C&quot;</span>, <span class="hljs-string">&quot;C#&quot;</span>, <span class="hljs-string">&quot;D&quot;</span>, <span class="hljs-string">&quot;D#&quot;</span>, <span class="hljs-string">&quot;E&quot;</span>, <span class="hljs-string">&quot;F&quot;</span>, <span class="hljs-string">&quot;F#&quot;</span>, <span class="hljs-string">&quot;G&quot;</span>, <span class="hljs-string">&quot;G#&quot;</span>, <span class="hljs-string">&quot;A&quot;</span>, <span class="hljs-string">&quot;A#&quot;</span>, <span class="hljs-string">&quot;B&quot;</span>]


<span class="hljs-keyword">def</span> <span class="hljs-title function_">generate_tone</span>(<span class="hljs-params">note, octave, duration</span>):
    sr = <span class="hljs-number">48000</span>
    a4_freq, tones_from_a4 = <span class="hljs-number">440</span>, <span class="hljs-number">12</span> * (octave - <span class="hljs-number">4</span>) + (note - <span class="hljs-number">9</span>)
    frequency = a4_freq * <span class="hljs-number">2</span> ** (tones_from_a4 / <span class="hljs-number">12</span>)
    duration = <span class="hljs-built_in">int</span>(duration)
    audio = np.linspace(<span class="hljs-number">0</span>, duration, duration * sr)
    audio = (<span class="hljs-number">20000</span> * np.sin(audio * (<span class="hljs-number">2</span> * np.pi * frequency))).astype(np.int16)
    <span class="hljs-keyword">return</span> (sr, audio)


gr.Interface(
    generate_tone,
    [
        gr.Dropdown(notes, <span class="hljs-built_in">type</span>=<span class="hljs-string">&quot;index&quot;</span>),
        gr.Slider(minimum=<span class="hljs-number">4</span>, maximum=<span class="hljs-number">6</span>, step=<span class="hljs-number">1</span>),
        gr.Textbox(<span class="hljs-built_in">type</span>=<span class="hljs-string">&quot;number&quot;</span>, value=<span class="hljs-number">1</span>, label=<span class="hljs-string">&quot;Duration in seconds&quot;</span>),
    ],
    <span class="hljs-string">&quot;audio&quot;</span>,
).launch()`}}),ye=new We({}),_e=new We({}),Ee=new zl({props:{code:`



`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline
<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr

model = pipeline(<span class="hljs-string">&quot;automatic-speech-recognition&quot;</span>)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">transcribe_audio</span>(<span class="hljs-params">mic=<span class="hljs-literal">None</span>, file=<span class="hljs-literal">None</span></span>):
    <span class="hljs-keyword">if</span> mic <span class="hljs-keyword">is</span> <span class="hljs-keyword">not</span> <span class="hljs-literal">None</span>:
        audio = mic
    <span class="hljs-keyword">elif</span> file <span class="hljs-keyword">is</span> <span class="hljs-keyword">not</span> <span class="hljs-literal">None</span>:
        audio = file
    <span class="hljs-keyword">else</span>:
        <span class="hljs-keyword">return</span> <span class="hljs-string">&quot;You must either provide a mic recording or a file&quot;</span>
    transcription = model(audio)[<span class="hljs-string">&quot;text&quot;</span>]
    <span class="hljs-keyword">return</span> transcription


gr.Interface(
    fn=transcribe_audio,
    inputs=[
        gr.Audio(source=<span class="hljs-string">&quot;microphone&quot;</span>, <span class="hljs-built_in">type</span>=<span class="hljs-string">&quot;filepath&quot;</span>, optional=<span class="hljs-literal">True</span>),
        gr.Audio(source=<span class="hljs-string">&quot;upload&quot;</span>, <span class="hljs-built_in">type</span>=<span class="hljs-string">&quot;filepath&quot;</span>, optional=<span class="hljs-literal">True</span>),
    ],
    outputs=<span class="hljs-string">&quot;text&quot;</span>,
).launch()`}}),{c(){G=l("meta"),Jt=u(),L=l("h1"),W=l("a"),Me=l("span"),D(pe.$$.fragment),oo=u(),Be=l("span"),so=o("Understanding the Interface class"),Rt=u(),D(ce.$$.fragment),Kt=u(),M=l("p"),lo=o("In this section, we will take a closer look at the "),Je=l("code"),no=o("Interface"),ro=o(` class, and understand the
main parameters used to create one.`),Qt=u(),H=l("h2"),B=l("a"),Re=l("span"),D(ue.$$.fragment),io=u(),Ke=l("span"),po=o("How to create an Interface"),Vt=u(),J=l("p"),co=o("You\u2019ll notice that the "),Qe=l("code"),uo=o("Interface"),ho=o(" class has 3 required parameters:"),Xt=u(),$e=l("p"),Ve=l("code"),fo=o("Interface(fn, inputs, outputs, ...)"),Zt=u(),xe=l("p"),mo=o("These parameters are:"),ea=u(),k=l("ul"),qe=l("li"),Xe=l("code"),wo=o("fn"),vo=o(": the prediction function that is wrapped by the Gradio interface. This function can take one or more parameters and return one or more values"),yo=u(),g=l("li"),Ze=l("code"),bo=o("inputs"),_o=o(": the input component type(s). Gradio provides many pre-built components such as"),et=l("code"),Eo=o('"image"'),ko=o(" or "),tt=l("code"),go=o('"mic"'),jo=o("."),$o=u(),j=l("li"),at=l("code"),xo=o("outputs"),qo=o(": the output component type(s). Again, Gradio provides many pre-built components e.g. "),ot=l("code"),Ao=o('"image"'),Co=o(" or "),st=l("code"),Io=o('"label"'),Do=o("."),ta=u(),R=l("p"),Po=o("For a complete list of components, "),he=l("a"),Oo=o("see the Gradio docs "),To=o(". Each pre-built component can be customized by instantiating the class corresponding to the component."),aa=u(),m=l("p"),So=o("For example, as we saw in the "),Ae=l("a"),No=o("previous section"),Go=o(`,
instead of passing in `),lt=l("code"),Lo=o('"textbox"'),Ho=o(" to the "),nt=l("code"),Fo=o("inputs"),zo=o(" parameter, you can pass in a "),rt=l("code"),Uo=o('Textbox(lines=7, label="Prompt")'),Yo=o(" component to create a textbox with 7 lines and a label."),oa=u(),K=l("p"),Wo=o("Let\u2019s take a look at another example, this time with an "),it=l("code"),Mo=o("Audio"),Bo=o(" component."),sa=u(),F=l("h2"),Q=l("a"),pt=l("span"),D(de.$$.fragment),Jo=u(),ct=l("span"),Ro=o("A simple example with audio"),la=u(),V=l("p"),Ko=o(`As mentioned earlier, Gradio provides many different inputs and outputs.
So let\u2019s build an `),ut=l("code"),Qo=o("Interface"),Vo=o(" that works with audio."),na=u(),Ce=l("p"),Xo=o(`In this example, we\u2019ll build an audio-to-audio function that takes an
audio file and simply reverses it.`),ra=u(),d=l("p"),Zo=o("We will use for the input the "),ht=l("code"),es=o("Audio"),ts=o(" component. When using the "),dt=l("code"),as=o("Audio"),os=o(` component,
you can specify whether you want the `),ft=l("code"),ss=o("source"),ls=o(` of the audio to be a file that the user
uploads or a microphone that the user records their voice with. In this case, let\u2019s
set it to a `),mt=l("code"),ns=o('"microphone"'),rs=o(". Just for fun, we\u2019ll add a label to our "),wt=l("code"),is=o("Audio"),ps=o(` that says
\u201CSpeak here\u2026\u201C.`),ia=u(),w=l("p"),cs=o(`In addition, we\u2019d like to receive the audio as a numpy array so that we can easily
\u201Creverse\u201D it. So we\u2019ll set the `),vt=l("code"),us=o('"type"'),hs=o(" to be "),yt=l("code"),ds=o('"numpy"'),fs=o(`, which passes the input
data as a tuple of (`),bt=l("code"),ms=o("sample_rate"),ws=o(", "),_t=l("code"),vs=o("data"),ys=o(") into our function."),pa=u(),$=l("p"),bs=o("We will also use the "),Et=l("code"),_s=o("Audio"),Es=o(` output component which can automatically
render a tuple with a sample rate and numpy array of data as a playable audio file.
In this case, we do not need to do any customization, so we will use the string
shortcut `),kt=l("code"),ks=o('"audio"'),gs=o("."),ca=u(),D(fe.$$.fragment),ua=u(),X=l("p"),js=o(`The code above will produce an interface like the one below (if your browser doesn\u2019t
ask you for microphone permissions, `),me=l("a"),$s=o("open the demo in  a separate tab"),xs=o(".)"),ha=u(),v=l("iframe"),da=u(),Ie=l("p"),qs=o("You should now be able to record your voice and hear yourself speaking in reverse - spooky \u{1F47B}!"),fa=u(),z=l("h2"),Z=l("a"),gt=l("span"),D(we.$$.fragment),As=u(),jt=l("span"),Cs=o("Handling multiple inputs and outputs"),ma=u(),De=l("p"),Is=o(`Let\u2019s say we had a more complicated function, with multiple inputs and outputs.
In the example below, we have a function that takes a dropdown index, a slider value, and number,
and returns an audio sample of a musical tone.`),wa=u(),Pe=l("p"),Ds=o(`Take a look how we pass a list of input and output components,
and see if you can follow along what\u2019s happening.`),va=u(),Oe=l("p"),Ps=o("The key here is that when you pass:"),ya=u(),ee=l("ul"),$t=l("li"),Os=o("a list of input components, each component corresponds to a parameter in order."),Ts=u(),xt=l("li"),Ss=o("a list of output coponents, each component corresponds to a returned value."),ba=u(),te=l("p"),Ns=o("The code snippet below shows how three input components line up with the three arguments of the "),qt=l("code"),Gs=o("generate_tone()"),Ls=o(" function:"),_a=u(),D(ve.$$.fragment),Ea=u(),y=l("iframe"),ka=u(),U=l("h3"),ae=l("a"),At=l("span"),D(ye.$$.fragment),Hs=u(),be=l("span"),Fs=o("The "),Ct=l("code"),zs=o("launch()"),Us=o(" method"),ga=u(),oe=l("p"),Ys=o("So far, we have used the "),It=l("code"),Ws=o("launch()"),Ms=o(` method to launch the interface, but we
haven\u2019t really discussed what it does.`),ja=u(),se=l("p"),Bs=o("By default, the "),Dt=l("code"),Js=o("launch()"),Rs=o(` method will launch the demo in a web server that
is running locally. If you are running your code in a Jupyter or Colab notebook, then
Gradio will embed the demo GUI in the notebook so you can easily use it.`),$a=u(),le=l("p"),Ks=o("You can customize the behavior of "),Pt=l("code"),Qs=o("launch()"),Vs=o(" through different parameters:"),xa=u(),x=l("ul"),Te=l("li"),Ot=l("code"),Xs=o("inline"),Zs=o(" - whether to display the interface inline on Python notebooks."),el=u(),Se=l("li"),Tt=l("code"),tl=o("inbrowser"),al=o(" - whether to automatically launch the interface in a new tab on the default browser."),ol=u(),Ne=l("li"),St=l("code"),sl=o("share"),ll=o(" - whether to create a publicly shareable link from your computer for the interface. Kind of like a Google Drive link!"),qa=u(),ne=l("p"),nl=o("We\u2019ll cover the "),Nt=l("code"),rl=o("share"),il=o(" parameter in a lot more detail in the next section!"),Aa=u(),Y=l("h2"),re=l("a"),Gt=l("span"),D(_e.$$.fragment),pl=u(),Lt=l("span"),cl=o("\u270F\uFE0F Let's apply it!"),Ca=u(),q=l("p"),ul=o("Let\u2019s build an interface that allows you to demo a "),Ht=l("strong"),hl=o("speech-recognition"),dl=o(` model.
To make it interesting, we will accept `),Ft=l("em"),fl=o("either"),ml=o(" a mic input or an uploaded file."),Ia=u(),f=l("p"),wl=o("As usual, we\u2019ll load our speech recognition model using the "),zt=l("code"),vl=o("pipeline()"),yl=o(` function from \u{1F917} Transformers.
If you need a quick refresher, you can go back to `),Ge=l("a"),bl=o("that section in Chapter 1"),_l=o(".   Next, we\u2019ll implement a "),Ut=l("code"),El=o("transcribe_audio()"),kl=o(" function that processes the audio and returns the transcription. Finally, we\u2019ll wrap this function in an "),Yt=l("code"),gl=o("Interface"),jl=o(" with the "),Wt=l("code"),$l=o("Audio"),xl=o(" components for the inputs and just text for the output. Altogether, the code for this application is the following:"),Da=u(),D(Ee.$$.fragment),Pa=u(),ie=l("p"),ql=o("If your browser doesn\u2019t ask you for microphone permissions, "),ke=l("a"),Al=o("open the demo in a separate tab"),Cl=o("."),Oa=u(),b=l("iframe"),Ta=u(),A=l("p"),Il=o(`That\u2019s it! You can now use this interface to transcribe audio. Notice here that
by passing in the `),Mt=l("code"),Dl=o("optional"),Pl=o(" parameter as "),Bt=l("code"),Ol=o("True"),Tl=o(`, we allow the user to either
provide a microphone or an audio file (or neither, but that will return an error message).`),Sa=u(),Le=l("p"),Sl=o("Keep going to see how to share your interface with others!"),this.h()},l(e){const i=vr('[data-svelte="svelte-1phssyn"]',document.head);G=n(i,"META",{name:!0,content:!0}),i.forEach(a),Jt=h(e),L=n(e,"H1",{class:!0});var Ga=r(L);W=n(Ga,"A",{id:!0,class:!0,href:!0});var Bl=r(W);Me=n(Bl,"SPAN",{});var Jl=r(Me);P(pe.$$.fragment,Jl),Jl.forEach(a),Bl.forEach(a),oo=h(Ga),Be=n(Ga,"SPAN",{});var Rl=r(Be);so=s(Rl,"Understanding the Interface class"),Rl.forEach(a),Ga.forEach(a),Rt=h(e),P(ce.$$.fragment,e),Kt=h(e),M=n(e,"P",{});var La=r(M);lo=s(La,"In this section, we will take a closer look at the "),Je=n(La,"CODE",{});var Kl=r(Je);no=s(Kl,"Interface"),Kl.forEach(a),ro=s(La,` class, and understand the
main parameters used to create one.`),La.forEach(a),Qt=h(e),H=n(e,"H2",{class:!0});var Ha=r(H);B=n(Ha,"A",{id:!0,class:!0,href:!0});var Ql=r(B);Re=n(Ql,"SPAN",{});var Vl=r(Re);P(ue.$$.fragment,Vl),Vl.forEach(a),Ql.forEach(a),io=h(Ha),Ke=n(Ha,"SPAN",{});var Xl=r(Ke);po=s(Xl,"How to create an Interface"),Xl.forEach(a),Ha.forEach(a),Vt=h(e),J=n(e,"P",{});var Fa=r(J);co=s(Fa,"You\u2019ll notice that the "),Qe=n(Fa,"CODE",{});var Zl=r(Qe);uo=s(Zl,"Interface"),Zl.forEach(a),ho=s(Fa," class has 3 required parameters:"),Fa.forEach(a),Xt=h(e),$e=n(e,"P",{});var en=r($e);Ve=n(en,"CODE",{});var tn=r(Ve);fo=s(tn,"Interface(fn, inputs, outputs, ...)"),tn.forEach(a),en.forEach(a),Zt=h(e),xe=n(e,"P",{});var an=r(xe);mo=s(an,"These parameters are:"),an.forEach(a),ea=h(e),k=n(e,"UL",{});var He=r(k);qe=n(He,"LI",{});var Nl=r(qe);Xe=n(Nl,"CODE",{});var on=r(Xe);wo=s(on,"fn"),on.forEach(a),vo=s(Nl,": the prediction function that is wrapped by the Gradio interface. This function can take one or more parameters and return one or more values"),Nl.forEach(a),yo=h(He),g=n(He,"LI",{});var ge=r(g);Ze=n(ge,"CODE",{});var sn=r(Ze);bo=s(sn,"inputs"),sn.forEach(a),_o=s(ge,": the input component type(s). Gradio provides many pre-built components such as"),et=n(ge,"CODE",{});var ln=r(et);Eo=s(ln,'"image"'),ln.forEach(a),ko=s(ge," or "),tt=n(ge,"CODE",{});var nn=r(tt);go=s(nn,'"mic"'),nn.forEach(a),jo=s(ge,"."),ge.forEach(a),$o=h(He),j=n(He,"LI",{});var je=r(j);at=n(je,"CODE",{});var rn=r(at);xo=s(rn,"outputs"),rn.forEach(a),qo=s(je,": the output component type(s). Again, Gradio provides many pre-built components e.g. "),ot=n(je,"CODE",{});var pn=r(ot);Ao=s(pn,'"image"'),pn.forEach(a),Co=s(je," or "),st=n(je,"CODE",{});var cn=r(st);Io=s(cn,'"label"'),cn.forEach(a),Do=s(je,"."),je.forEach(a),He.forEach(a),ta=h(e),R=n(e,"P",{});var za=r(R);Po=s(za,"For a complete list of components, "),he=n(za,"A",{href:!0,rel:!0});var un=r(he);Oo=s(un,"see the Gradio docs "),un.forEach(a),To=s(za,". Each pre-built component can be customized by instantiating the class corresponding to the component."),za.forEach(a),aa=h(e),m=n(e,"P",{});var C=r(m);So=s(C,"For example, as we saw in the "),Ae=n(C,"A",{href:!0});var hn=r(Ae);No=s(hn,"previous section"),hn.forEach(a),Go=s(C,`,
instead of passing in `),lt=n(C,"CODE",{});var dn=r(lt);Lo=s(dn,'"textbox"'),dn.forEach(a),Ho=s(C," to the "),nt=n(C,"CODE",{});var fn=r(nt);Fo=s(fn,"inputs"),fn.forEach(a),zo=s(C," parameter, you can pass in a "),rt=n(C,"CODE",{});var mn=r(rt);Uo=s(mn,'Textbox(lines=7, label="Prompt")'),mn.forEach(a),Yo=s(C," component to create a textbox with 7 lines and a label."),C.forEach(a),oa=h(e),K=n(e,"P",{});var Ua=r(K);Wo=s(Ua,"Let\u2019s take a look at another example, this time with an "),it=n(Ua,"CODE",{});var wn=r(it);Mo=s(wn,"Audio"),wn.forEach(a),Bo=s(Ua," component."),Ua.forEach(a),sa=h(e),F=n(e,"H2",{class:!0});var Ya=r(F);Q=n(Ya,"A",{id:!0,class:!0,href:!0});var vn=r(Q);pt=n(vn,"SPAN",{});var yn=r(pt);P(de.$$.fragment,yn),yn.forEach(a),vn.forEach(a),Jo=h(Ya),ct=n(Ya,"SPAN",{});var bn=r(ct);Ro=s(bn,"A simple example with audio"),bn.forEach(a),Ya.forEach(a),la=h(e),V=n(e,"P",{});var Wa=r(V);Ko=s(Wa,`As mentioned earlier, Gradio provides many different inputs and outputs.
So let\u2019s build an `),ut=n(Wa,"CODE",{});var _n=r(ut);Qo=s(_n,"Interface"),_n.forEach(a),Vo=s(Wa," that works with audio."),Wa.forEach(a),na=h(e),Ce=n(e,"P",{});var En=r(Ce);Xo=s(En,`In this example, we\u2019ll build an audio-to-audio function that takes an
audio file and simply reverses it.`),En.forEach(a),ra=h(e),d=n(e,"P",{});var _=r(d);Zo=s(_,"We will use for the input the "),ht=n(_,"CODE",{});var kn=r(ht);es=s(kn,"Audio"),kn.forEach(a),ts=s(_," component. When using the "),dt=n(_,"CODE",{});var gn=r(dt);as=s(gn,"Audio"),gn.forEach(a),os=s(_,` component,
you can specify whether you want the `),ft=n(_,"CODE",{});var jn=r(ft);ss=s(jn,"source"),jn.forEach(a),ls=s(_,` of the audio to be a file that the user
uploads or a microphone that the user records their voice with. In this case, let\u2019s
set it to a `),mt=n(_,"CODE",{});var $n=r(mt);ns=s($n,'"microphone"'),$n.forEach(a),rs=s(_,". Just for fun, we\u2019ll add a label to our "),wt=n(_,"CODE",{});var xn=r(wt);is=s(xn,"Audio"),xn.forEach(a),ps=s(_,` that says
\u201CSpeak here\u2026\u201C.`),_.forEach(a),ia=h(e),w=n(e,"P",{});var I=r(w);cs=s(I,`In addition, we\u2019d like to receive the audio as a numpy array so that we can easily
\u201Creverse\u201D it. So we\u2019ll set the `),vt=n(I,"CODE",{});var qn=r(vt);us=s(qn,'"type"'),qn.forEach(a),hs=s(I," to be "),yt=n(I,"CODE",{});var An=r(yt);ds=s(An,'"numpy"'),An.forEach(a),fs=s(I,`, which passes the input
data as a tuple of (`),bt=n(I,"CODE",{});var Cn=r(bt);ms=s(Cn,"sample_rate"),Cn.forEach(a),ws=s(I,", "),_t=n(I,"CODE",{});var In=r(_t);vs=s(In,"data"),In.forEach(a),ys=s(I,") into our function."),I.forEach(a),pa=h(e),$=n(e,"P",{});var Fe=r($);bs=s(Fe,"We will also use the "),Et=n(Fe,"CODE",{});var Dn=r(Et);_s=s(Dn,"Audio"),Dn.forEach(a),Es=s(Fe,` output component which can automatically
render a tuple with a sample rate and numpy array of data as a playable audio file.
In this case, we do not need to do any customization, so we will use the string
shortcut `),kt=n(Fe,"CODE",{});var Pn=r(kt);ks=s(Pn,'"audio"'),Pn.forEach(a),gs=s(Fe,"."),Fe.forEach(a),ca=h(e),P(fe.$$.fragment,e),ua=h(e),X=n(e,"P",{});var Ma=r(X);js=s(Ma,`The code above will produce an interface like the one below (if your browser doesn\u2019t
ask you for microphone permissions, `),me=n(Ma,"A",{href:!0,target:!0});var On=r(me);$s=s(On,"open the demo in  a separate tab"),On.forEach(a),xs=s(Ma,".)"),Ma.forEach(a),ha=h(e),v=n(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),r(v).forEach(a),da=h(e),Ie=n(e,"P",{});var Tn=r(Ie);qs=s(Tn,"You should now be able to record your voice and hear yourself speaking in reverse - spooky \u{1F47B}!"),Tn.forEach(a),fa=h(e),z=n(e,"H2",{class:!0});var Ba=r(z);Z=n(Ba,"A",{id:!0,class:!0,href:!0});var Sn=r(Z);gt=n(Sn,"SPAN",{});var Nn=r(gt);P(we.$$.fragment,Nn),Nn.forEach(a),Sn.forEach(a),As=h(Ba),jt=n(Ba,"SPAN",{});var Gn=r(jt);Cs=s(Gn,"Handling multiple inputs and outputs"),Gn.forEach(a),Ba.forEach(a),ma=h(e),De=n(e,"P",{});var Ln=r(De);Is=s(Ln,`Let\u2019s say we had a more complicated function, with multiple inputs and outputs.
In the example below, we have a function that takes a dropdown index, a slider value, and number,
and returns an audio sample of a musical tone.`),Ln.forEach(a),wa=h(e),Pe=n(e,"P",{});var Hn=r(Pe);Ds=s(Hn,`Take a look how we pass a list of input and output components,
and see if you can follow along what\u2019s happening.`),Hn.forEach(a),va=h(e),Oe=n(e,"P",{});var Fn=r(Oe);Ps=s(Fn,"The key here is that when you pass:"),Fn.forEach(a),ya=h(e),ee=n(e,"UL",{});var Ja=r(ee);$t=n(Ja,"LI",{});var zn=r($t);Os=s(zn,"a list of input components, each component corresponds to a parameter in order."),zn.forEach(a),Ts=h(Ja),xt=n(Ja,"LI",{});var Un=r(xt);Ss=s(Un,"a list of output coponents, each component corresponds to a returned value."),Un.forEach(a),Ja.forEach(a),ba=h(e),te=n(e,"P",{});var Ra=r(te);Ns=s(Ra,"The code snippet below shows how three input components line up with the three arguments of the "),qt=n(Ra,"CODE",{});var Yn=r(qt);Gs=s(Yn,"generate_tone()"),Yn.forEach(a),Ls=s(Ra," function:"),Ra.forEach(a),_a=h(e),P(ve.$$.fragment,e),Ea=h(e),y=n(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),r(y).forEach(a),ka=h(e),U=n(e,"H3",{class:!0});var Ka=r(U);ae=n(Ka,"A",{id:!0,class:!0,href:!0});var Wn=r(ae);At=n(Wn,"SPAN",{});var Mn=r(At);P(ye.$$.fragment,Mn),Mn.forEach(a),Wn.forEach(a),Hs=h(Ka),be=n(Ka,"SPAN",{});var Qa=r(be);Fs=s(Qa,"The "),Ct=n(Qa,"CODE",{});var Bn=r(Ct);zs=s(Bn,"launch()"),Bn.forEach(a),Us=s(Qa," method"),Qa.forEach(a),Ka.forEach(a),ga=h(e),oe=n(e,"P",{});var Va=r(oe);Ys=s(Va,"So far, we have used the "),It=n(Va,"CODE",{});var Jn=r(It);Ws=s(Jn,"launch()"),Jn.forEach(a),Ms=s(Va,` method to launch the interface, but we
haven\u2019t really discussed what it does.`),Va.forEach(a),ja=h(e),se=n(e,"P",{});var Xa=r(se);Bs=s(Xa,"By default, the "),Dt=n(Xa,"CODE",{});var Rn=r(Dt);Js=s(Rn,"launch()"),Rn.forEach(a),Rs=s(Xa,` method will launch the demo in a web server that
is running locally. If you are running your code in a Jupyter or Colab notebook, then
Gradio will embed the demo GUI in the notebook so you can easily use it.`),Xa.forEach(a),$a=h(e),le=n(e,"P",{});var Za=r(le);Ks=s(Za,"You can customize the behavior of "),Pt=n(Za,"CODE",{});var Kn=r(Pt);Qs=s(Kn,"launch()"),Kn.forEach(a),Vs=s(Za," through different parameters:"),Za.forEach(a),xa=h(e),x=n(e,"UL",{});var ze=r(x);Te=n(ze,"LI",{});var Gl=r(Te);Ot=n(Gl,"CODE",{});var Qn=r(Ot);Xs=s(Qn,"inline"),Qn.forEach(a),Zs=s(Gl," - whether to display the interface inline on Python notebooks."),Gl.forEach(a),el=h(ze),Se=n(ze,"LI",{});var Ll=r(Se);Tt=n(Ll,"CODE",{});var Vn=r(Tt);tl=s(Vn,"inbrowser"),Vn.forEach(a),al=s(Ll," - whether to automatically launch the interface in a new tab on the default browser."),Ll.forEach(a),ol=h(ze),Ne=n(ze,"LI",{});var Hl=r(Ne);St=n(Hl,"CODE",{});var Xn=r(St);sl=s(Xn,"share"),Xn.forEach(a),ll=s(Hl," - whether to create a publicly shareable link from your computer for the interface. Kind of like a Google Drive link!"),Hl.forEach(a),ze.forEach(a),qa=h(e),ne=n(e,"P",{});var eo=r(ne);nl=s(eo,"We\u2019ll cover the "),Nt=n(eo,"CODE",{});var Zn=r(Nt);rl=s(Zn,"share"),Zn.forEach(a),il=s(eo," parameter in a lot more detail in the next section!"),eo.forEach(a),Aa=h(e),Y=n(e,"H2",{class:!0});var to=r(Y);re=n(to,"A",{id:!0,class:!0,href:!0});var er=r(re);Gt=n(er,"SPAN",{});var tr=r(Gt);P(_e.$$.fragment,tr),tr.forEach(a),er.forEach(a),pl=h(to),Lt=n(to,"SPAN",{});var ar=r(Lt);cl=s(ar,"\u270F\uFE0F Let's apply it!"),ar.forEach(a),to.forEach(a),Ca=h(e),q=n(e,"P",{});var Ue=r(q);ul=s(Ue,"Let\u2019s build an interface that allows you to demo a "),Ht=n(Ue,"STRONG",{});var or=r(Ht);hl=s(or,"speech-recognition"),or.forEach(a),dl=s(Ue,` model.
To make it interesting, we will accept `),Ft=n(Ue,"EM",{});var sr=r(Ft);fl=s(sr,"either"),sr.forEach(a),ml=s(Ue," a mic input or an uploaded file."),Ue.forEach(a),Ia=h(e),f=n(e,"P",{});var E=r(f);wl=s(E,"As usual, we\u2019ll load our speech recognition model using the "),zt=n(E,"CODE",{});var lr=r(zt);vl=s(lr,"pipeline()"),lr.forEach(a),yl=s(E,` function from \u{1F917} Transformers.
If you need a quick refresher, you can go back to `),Ge=n(E,"A",{href:!0});var nr=r(Ge);bl=s(nr,"that section in Chapter 1"),nr.forEach(a),_l=s(E,".   Next, we\u2019ll implement a "),Ut=n(E,"CODE",{});var rr=r(Ut);El=s(rr,"transcribe_audio()"),rr.forEach(a),kl=s(E," function that processes the audio and returns the transcription. Finally, we\u2019ll wrap this function in an "),Yt=n(E,"CODE",{});var ir=r(Yt);gl=s(ir,"Interface"),ir.forEach(a),jl=s(E," with the "),Wt=n(E,"CODE",{});var pr=r(Wt);$l=s(pr,"Audio"),pr.forEach(a),xl=s(E," components for the inputs and just text for the output. Altogether, the code for this application is the following:"),E.forEach(a),Da=h(e),P(Ee.$$.fragment,e),Pa=h(e),ie=n(e,"P",{});var ao=r(ie);ql=s(ao,"If your browser doesn\u2019t ask you for microphone permissions, "),ke=n(ao,"A",{href:!0,target:!0});var cr=r(ke);Al=s(cr,"open the demo in a separate tab"),cr.forEach(a),Cl=s(ao,"."),ao.forEach(a),Oa=h(e),b=n(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),r(b).forEach(a),Ta=h(e),A=n(e,"P",{});var Ye=r(A);Il=s(Ye,`That\u2019s it! You can now use this interface to transcribe audio. Notice here that
by passing in the `),Mt=n(Ye,"CODE",{});var ur=r(Mt);Dl=s(ur,"optional"),ur.forEach(a),Pl=s(Ye," parameter as "),Bt=n(Ye,"CODE",{});var hr=r(Bt);Ol=s(hr,"True"),hr.forEach(a),Tl=s(Ye,`, we allow the user to either
provide a microphone or an audio file (or neither, but that will return an error message).`),Ye.forEach(a),Sa=h(e),Le=n(e,"P",{});var dr=r(Le);Sl=s(dr,"Keep going to see how to share your interface with others!"),dr.forEach(a),this.h()},h(){c(G,"name","hf:doc:metadata"),c(G,"content",JSON.stringify(kr)),c(W,"id","understanding-the-interface-class"),c(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(W,"href","#understanding-the-interface-class"),c(L,"class","relative group"),c(B,"id","how-to-create-an-interface"),c(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(B,"href","#how-to-create-an-interface"),c(H,"class","relative group"),c(he,"href","https://gradio.app/docs"),c(he,"rel","nofollow"),c(Ae,"href","/course/chapter9/2"),c(Q,"id","a-simple-example-with-audio"),c(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Q,"href","#a-simple-example-with-audio"),c(F,"class","relative group"),c(me,"href","https://huggingface.co/spaces/course-demos/audio-reverse"),c(me,"target","_blank"),Fl(v.src,Yl="https://hf.space/gradioiframe/course-demos/audio-reverse/+")||c(v,"src",Yl),c(v,"frameborder","0"),c(v,"height","250"),c(v,"title","Gradio app"),c(v,"class","container p-0 flex-grow space-iframe"),c(v,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(v,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(Z,"id","handling-multiple-inputs-and-outputs"),c(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Z,"href","#handling-multiple-inputs-and-outputs"),c(z,"class","relative group"),Fl(y.src,Wl="https://hf.space/gradioiframe/course-demos/generate-tone/+")||c(y,"src",Wl),c(y,"frameborder","0"),c(y,"height","450"),c(y,"title","Gradio app"),c(y,"class","container p-0 flex-grow space-iframe"),c(y,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(y,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(ae,"id","the-launch-method"),c(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ae,"href","#the-launch-method"),c(U,"class","relative group"),c(re,"id","lets-apply-it"),c(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(re,"href","#lets-apply-it"),c(Y,"class","relative group"),c(Ge,"href","/course/chapter1/3"),c(ke,"href","https://huggingface.co/spaces/course-demos/audio-reverse"),c(ke,"target","_blank"),Fl(b.src,Ml="https://hf.space/gradioiframe/course-demos/asr/+")||c(b,"src",Ml),c(b,"frameborder","0"),c(b,"height","550"),c(b,"title","Gradio app"),c(b,"class","container p-0 flex-grow space-iframe"),c(b,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(b,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads")},m(e,i){t(document.head,G),p(e,Jt,i),p(e,L,i),t(L,W),t(W,Me),O(pe,Me,null),t(L,oo),t(L,Be),t(Be,so),p(e,Rt,i),O(ce,e,i),p(e,Kt,i),p(e,M,i),t(M,lo),t(M,Je),t(Je,no),t(M,ro),p(e,Qt,i),p(e,H,i),t(H,B),t(B,Re),O(ue,Re,null),t(H,io),t(H,Ke),t(Ke,po),p(e,Vt,i),p(e,J,i),t(J,co),t(J,Qe),t(Qe,uo),t(J,ho),p(e,Xt,i),p(e,$e,i),t($e,Ve),t(Ve,fo),p(e,Zt,i),p(e,xe,i),t(xe,mo),p(e,ea,i),p(e,k,i),t(k,qe),t(qe,Xe),t(Xe,wo),t(qe,vo),t(k,yo),t(k,g),t(g,Ze),t(Ze,bo),t(g,_o),t(g,et),t(et,Eo),t(g,ko),t(g,tt),t(tt,go),t(g,jo),t(k,$o),t(k,j),t(j,at),t(at,xo),t(j,qo),t(j,ot),t(ot,Ao),t(j,Co),t(j,st),t(st,Io),t(j,Do),p(e,ta,i),p(e,R,i),t(R,Po),t(R,he),t(he,Oo),t(R,To),p(e,aa,i),p(e,m,i),t(m,So),t(m,Ae),t(Ae,No),t(m,Go),t(m,lt),t(lt,Lo),t(m,Ho),t(m,nt),t(nt,Fo),t(m,zo),t(m,rt),t(rt,Uo),t(m,Yo),p(e,oa,i),p(e,K,i),t(K,Wo),t(K,it),t(it,Mo),t(K,Bo),p(e,sa,i),p(e,F,i),t(F,Q),t(Q,pt),O(de,pt,null),t(F,Jo),t(F,ct),t(ct,Ro),p(e,la,i),p(e,V,i),t(V,Ko),t(V,ut),t(ut,Qo),t(V,Vo),p(e,na,i),p(e,Ce,i),t(Ce,Xo),p(e,ra,i),p(e,d,i),t(d,Zo),t(d,ht),t(ht,es),t(d,ts),t(d,dt),t(dt,as),t(d,os),t(d,ft),t(ft,ss),t(d,ls),t(d,mt),t(mt,ns),t(d,rs),t(d,wt),t(wt,is),t(d,ps),p(e,ia,i),p(e,w,i),t(w,cs),t(w,vt),t(vt,us),t(w,hs),t(w,yt),t(yt,ds),t(w,fs),t(w,bt),t(bt,ms),t(w,ws),t(w,_t),t(_t,vs),t(w,ys),p(e,pa,i),p(e,$,i),t($,bs),t($,Et),t(Et,_s),t($,Es),t($,kt),t(kt,ks),t($,gs),p(e,ca,i),O(fe,e,i),p(e,ua,i),p(e,X,i),t(X,js),t(X,me),t(me,$s),t(X,xs),p(e,ha,i),p(e,v,i),p(e,da,i),p(e,Ie,i),t(Ie,qs),p(e,fa,i),p(e,z,i),t(z,Z),t(Z,gt),O(we,gt,null),t(z,As),t(z,jt),t(jt,Cs),p(e,ma,i),p(e,De,i),t(De,Is),p(e,wa,i),p(e,Pe,i),t(Pe,Ds),p(e,va,i),p(e,Oe,i),t(Oe,Ps),p(e,ya,i),p(e,ee,i),t(ee,$t),t($t,Os),t(ee,Ts),t(ee,xt),t(xt,Ss),p(e,ba,i),p(e,te,i),t(te,Ns),t(te,qt),t(qt,Gs),t(te,Ls),p(e,_a,i),O(ve,e,i),p(e,Ea,i),p(e,y,i),p(e,ka,i),p(e,U,i),t(U,ae),t(ae,At),O(ye,At,null),t(U,Hs),t(U,be),t(be,Fs),t(be,Ct),t(Ct,zs),t(be,Us),p(e,ga,i),p(e,oe,i),t(oe,Ys),t(oe,It),t(It,Ws),t(oe,Ms),p(e,ja,i),p(e,se,i),t(se,Bs),t(se,Dt),t(Dt,Js),t(se,Rs),p(e,$a,i),p(e,le,i),t(le,Ks),t(le,Pt),t(Pt,Qs),t(le,Vs),p(e,xa,i),p(e,x,i),t(x,Te),t(Te,Ot),t(Ot,Xs),t(Te,Zs),t(x,el),t(x,Se),t(Se,Tt),t(Tt,tl),t(Se,al),t(x,ol),t(x,Ne),t(Ne,St),t(St,sl),t(Ne,ll),p(e,qa,i),p(e,ne,i),t(ne,nl),t(ne,Nt),t(Nt,rl),t(ne,il),p(e,Aa,i),p(e,Y,i),t(Y,re),t(re,Gt),O(_e,Gt,null),t(Y,pl),t(Y,Lt),t(Lt,cl),p(e,Ca,i),p(e,q,i),t(q,ul),t(q,Ht),t(Ht,hl),t(q,dl),t(q,Ft),t(Ft,fl),t(q,ml),p(e,Ia,i),p(e,f,i),t(f,wl),t(f,zt),t(zt,vl),t(f,yl),t(f,Ge),t(Ge,bl),t(f,_l),t(f,Ut),t(Ut,El),t(f,kl),t(f,Yt),t(Yt,gl),t(f,jl),t(f,Wt),t(Wt,$l),t(f,xl),p(e,Da,i),O(Ee,e,i),p(e,Pa,i),p(e,ie,i),t(ie,ql),t(ie,ke),t(ke,Al),t(ie,Cl),p(e,Oa,i),p(e,b,i),p(e,Ta,i),p(e,A,i),t(A,Il),t(A,Mt),t(Mt,Dl),t(A,Pl),t(A,Bt),t(Bt,Ol),t(A,Tl),p(e,Sa,i),p(e,Le,i),t(Le,Sl),Na=!0},p:yr,i(e){Na||(T(pe.$$.fragment,e),T(ce.$$.fragment,e),T(ue.$$.fragment,e),T(de.$$.fragment,e),T(fe.$$.fragment,e),T(we.$$.fragment,e),T(ve.$$.fragment,e),T(ye.$$.fragment,e),T(_e.$$.fragment,e),T(Ee.$$.fragment,e),Na=!0)},o(e){S(pe.$$.fragment,e),S(ce.$$.fragment,e),S(ue.$$.fragment,e),S(de.$$.fragment,e),S(fe.$$.fragment,e),S(we.$$.fragment,e),S(ve.$$.fragment,e),S(ye.$$.fragment,e),S(_e.$$.fragment,e),S(Ee.$$.fragment,e),Na=!1},d(e){a(G),e&&a(Jt),e&&a(L),N(pe),e&&a(Rt),N(ce,e),e&&a(Kt),e&&a(M),e&&a(Qt),e&&a(H),N(ue),e&&a(Vt),e&&a(J),e&&a(Xt),e&&a($e),e&&a(Zt),e&&a(xe),e&&a(ea),e&&a(k),e&&a(ta),e&&a(R),e&&a(aa),e&&a(m),e&&a(oa),e&&a(K),e&&a(sa),e&&a(F),N(de),e&&a(la),e&&a(V),e&&a(na),e&&a(Ce),e&&a(ra),e&&a(d),e&&a(ia),e&&a(w),e&&a(pa),e&&a($),e&&a(ca),N(fe,e),e&&a(ua),e&&a(X),e&&a(ha),e&&a(v),e&&a(da),e&&a(Ie),e&&a(fa),e&&a(z),N(we),e&&a(ma),e&&a(De),e&&a(wa),e&&a(Pe),e&&a(va),e&&a(Oe),e&&a(ya),e&&a(ee),e&&a(ba),e&&a(te),e&&a(_a),N(ve,e),e&&a(Ea),e&&a(y),e&&a(ka),e&&a(U),N(ye),e&&a(ga),e&&a(oe),e&&a(ja),e&&a(se),e&&a($a),e&&a(le),e&&a(xa),e&&a(x),e&&a(qa),e&&a(ne),e&&a(Aa),e&&a(Y),N(_e),e&&a(Ca),e&&a(q),e&&a(Ia),e&&a(f),e&&a(Da),N(Ee,e),e&&a(Pa),e&&a(ie),e&&a(Oa),e&&a(b),e&&a(Ta),e&&a(A),e&&a(Sa),e&&a(Le)}}}const kr={local:"understanding-the-interface-class",sections:[{local:"how-to-create-an-interface",title:"How to create an Interface"},{local:"a-simple-example-with-audio",title:"A simple example with audio"},{local:"handling-multiple-inputs-and-outputs",sections:[{local:"the-launch-method",title:"The `launch()` method"}],title:"Handling multiple inputs and outputs"},{local:"lets-apply-it",title:"\u270F\uFE0F Let's apply it!"}],title:"Understanding the Interface class"};function gr(Ul){return br(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ar extends fr{constructor(G){super();mr(this,G,gr,Er,wr,{})}}export{Ar as default,kr as metadata};
