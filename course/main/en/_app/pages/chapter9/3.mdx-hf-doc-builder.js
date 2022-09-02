import{S as fn,i as mn,s as wn,e as l,k as c,w as D,t as o,M as vn,c as r,d as a,m as h,a as n,x as P,h as s,b as u,N as Hl,G as t,g as p,y as O,L as yn,q as T,o as S,B as N,v as bn}from"../../chunks/vendor-hf-doc-builder.js";import{I as We}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as zl}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as _n}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";function En(Yl){let G,Jt,L,W,Be,pe,oo,Me,so,Rt,ue,Kt,B,lo,Je,ro,no,Qt,F,M,Re,ce,io,Ke,po,Vt,J,uo,Qe,co,ho,Xt,$e,Ve,fo,Zt,xe,mo,ea,k,qe,Xe,wo,vo,yo,g,Ze,bo,_o,et,Eo,ko,tt,go,jo,$o,j,at,xo,qo,ot,Ao,Co,st,Io,Do,ta,R,Po,he,Oo,To,aa,m,So,Ae,No,Go,lt,Lo,Fo,rt,Ho,zo,nt,Yo,Uo,oa,K,Wo,it,Bo,Mo,sa,H,Q,pt,de,Jo,ut,Ro,la,V,Ko,ct,Qo,Vo,ra,Ce,Xo,na,d,Zo,ht,es,ts,dt,as,os,ft,ss,ls,mt,rs,ns,wt,is,ps,ia,w,us,vt,cs,hs,yt,ds,fs,bt,ms,ws,_t,vs,ys,pa,$,bs,Et,_s,Es,kt,ks,gs,ua,fe,ca,X,js,me,$s,xs,ha,v,Ul,da,Ie,qs,fa,z,Z,gt,we,As,jt,Cs,ma,De,Is,wa,Pe,Ds,va,Oe,Ps,ya,ee,$t,Os,Ts,xt,Ss,ba,te,Ns,qt,Gs,Ls,_a,ve,Ea,y,Wl,ka,Y,ae,At,ye,Fs,be,Hs,Ct,zs,Ys,ga,oe,Us,It,Ws,Bs,ja,se,Ms,Dt,Js,Rs,$a,le,Ks,Pt,Qs,Vs,xa,x,Te,Ot,Xs,Zs,el,Se,Tt,tl,al,ol,Ne,St,sl,ll,qa,re,rl,Nt,nl,il,Aa,U,ne,Gt,_e,pl,Lt,ul,Ca,q,cl,Ft,hl,dl,Ht,fl,ml,Ia,f,wl,zt,vl,yl,Ge,bl,_l,Yt,El,kl,Ut,gl,jl,Wt,$l,xl,Da,Ee,Pa,ie,ql,ke,Al,Cl,Oa,b,Bl,Ta,A,Il,Bt,Dl,Pl,Mt,Ol,Tl,Sa,Le,Sl,Na;return pe=new We({}),ue=new _n({props:{chapter:9,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter9/section3.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter9/section3.ipynb"}]}}),ce=new We({}),de=new We({}),fe=new zl({props:{code:`import numpy as np
import gradio as gr


def reverse_audio(audio):
    sr, data = audio
    reversed_audio = (sr, np.flipud(data))
    return reversed_audio


mic = gr.Audio(source="microphone", type="numpy", label="Speak here...")
gr.Interface(reverse_audio, mic, "audio").launch()`,highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr


<span class="hljs-keyword">def</span> <span class="hljs-title function_">reverse_audio</span>(<span class="hljs-params">audio</span>):
    sr, data = audio
    reversed_audio = (sr, np.flipud(data))
    <span class="hljs-keyword">return</span> reversed_audio


mic = gr.Audio(source=<span class="hljs-string">&quot;microphone&quot;</span>, <span class="hljs-built_in">type</span>=<span class="hljs-string">&quot;numpy&quot;</span>, label=<span class="hljs-string">&quot;Speak here...&quot;</span>)
gr.Interface(reverse_audio, mic, <span class="hljs-string">&quot;audio&quot;</span>).launch()`}}),we=new We({}),ve=new zl({props:{code:`import numpy as np
import gradio as gr

notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]


def generate_tone(note, octave, duration):
    sr = 48000
    a4_freq, tones_from_a4 = 440, 12 * (octave - 4) + (note - 9)
    frequency = a4_freq * 2 ** (tones_from_a4 / 12)
    duration = int(duration)
    audio = np.linspace(0, duration, duration * sr)
    audio = (20000 * np.sin(audio * (2 * np.pi * frequency))).astype(np.int16)
    return (sr, audio)


gr.Interface(
    generate_tone,
    [
        gr.Dropdown(notes, type="index"),
        gr.Slider(minimum=4, maximum=6, step=1),
        gr.Textbox(type="number", value=1, label="Duration in seconds"),
    ],
    "audio",
).launch()`,highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
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
).launch()`}}),ye=new We({}),_e=new We({}),Ee=new zl({props:{code:`from transformers import pipeline
import gradio as gr

model = pipeline("automatic-speech-recognition")


def transcribe_audio(mic=None, file=None):
    if mic is not None:
        audio = mic
    elif file is not None:
        audio = file
    else:
        return "You must either provide a mic recording or a file"
    transcription = model(audio)["text"]
    return transcription


gr.Interface(
    fn=transcribe_audio,
    inputs=[
        gr.Audio(source="microphone", type="filepath", optional=True),
        gr.Audio(source="upload", type="filepath", optional=True),
    ],
    outputs="text",
).launch()`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline
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
).launch()`}}),{c(){G=l("meta"),Jt=c(),L=l("h1"),W=l("a"),Be=l("span"),D(pe.$$.fragment),oo=c(),Me=l("span"),so=o("Understanding the Interface class"),Rt=c(),D(ue.$$.fragment),Kt=c(),B=l("p"),lo=o("In this section, we will take a closer look at the "),Je=l("code"),ro=o("Interface"),no=o(` class, and understand the
main parameters used to create one.`),Qt=c(),F=l("h2"),M=l("a"),Re=l("span"),D(ce.$$.fragment),io=c(),Ke=l("span"),po=o("How to create an Interface"),Vt=c(),J=l("p"),uo=o("You\u2019ll notice that the "),Qe=l("code"),co=o("Interface"),ho=o(" class has 3 required parameters:"),Xt=c(),$e=l("p"),Ve=l("code"),fo=o("Interface(fn, inputs, outputs, ...)"),Zt=c(),xe=l("p"),mo=o("These parameters are:"),ea=c(),k=l("ul"),qe=l("li"),Xe=l("code"),wo=o("fn"),vo=o(": the prediction function that is wrapped by the Gradio interface. This function can take one or more parameters and return one or more values"),yo=c(),g=l("li"),Ze=l("code"),bo=o("inputs"),_o=o(": the input component type(s). Gradio provides many pre-built components such as"),et=l("code"),Eo=o('"image"'),ko=o(" or "),tt=l("code"),go=o('"mic"'),jo=o("."),$o=c(),j=l("li"),at=l("code"),xo=o("outputs"),qo=o(": the output component type(s). Again, Gradio provides many pre-built components e.g. "),ot=l("code"),Ao=o('"image"'),Co=o(" or "),st=l("code"),Io=o('"label"'),Do=o("."),ta=c(),R=l("p"),Po=o("For a complete list of components, "),he=l("a"),Oo=o("see the Gradio docs "),To=o(". Each pre-built component can be customized by instantiating the class corresponding to the component."),aa=c(),m=l("p"),So=o("For example, as we saw in the "),Ae=l("a"),No=o("previous section"),Go=o(`,
instead of passing in `),lt=l("code"),Lo=o('"textbox"'),Fo=o(" to the "),rt=l("code"),Ho=o("inputs"),zo=o(" parameter, you can pass in a "),nt=l("code"),Yo=o('Textbox(lines=7, label="Prompt")'),Uo=o(" component to create a textbox with 7 lines and a label."),oa=c(),K=l("p"),Wo=o("Let\u2019s take a look at another example, this time with an "),it=l("code"),Bo=o("Audio"),Mo=o(" component."),sa=c(),H=l("h2"),Q=l("a"),pt=l("span"),D(de.$$.fragment),Jo=c(),ut=l("span"),Ro=o("A simple example with audio"),la=c(),V=l("p"),Ko=o(`As mentioned earlier, Gradio provides many different inputs and outputs.
So let\u2019s build an `),ct=l("code"),Qo=o("Interface"),Vo=o(" that works with audio."),ra=c(),Ce=l("p"),Xo=o(`In this example, we\u2019ll build an audio-to-audio function that takes an
audio file and simply reverses it.`),na=c(),d=l("p"),Zo=o("We will use for the input the "),ht=l("code"),es=o("Audio"),ts=o(" component. When using the "),dt=l("code"),as=o("Audio"),os=o(` component,
you can specify whether you want the `),ft=l("code"),ss=o("source"),ls=o(` of the audio to be a file that the user
uploads or a microphone that the user records their voice with. In this case, let\u2019s
set it to a `),mt=l("code"),rs=o('"microphone"'),ns=o(". Just for fun, we\u2019ll add a label to our "),wt=l("code"),is=o("Audio"),ps=o(` that says
\u201CSpeak here\u2026\u201C.`),ia=c(),w=l("p"),us=o(`In addition, we\u2019d like to receive the audio as a numpy array so that we can easily
\u201Creverse\u201D it. So we\u2019ll set the `),vt=l("code"),cs=o('"type"'),hs=o(" to be "),yt=l("code"),ds=o('"numpy"'),fs=o(`, which passes the input
data as a tuple of (`),bt=l("code"),ms=o("sample_rate"),ws=o(", "),_t=l("code"),vs=o("data"),ys=o(") into our function."),pa=c(),$=l("p"),bs=o("We will also use the "),Et=l("code"),_s=o("Audio"),Es=o(` output component which can automatically
render a tuple with a sample rate and numpy array of data as a playable audio file.
In this case, we do not need to do any customization, so we will use the string
shortcut `),kt=l("code"),ks=o('"audio"'),gs=o("."),ua=c(),D(fe.$$.fragment),ca=c(),X=l("p"),js=o(`The code above will produce an interface like the one below (if your browser doesn\u2019t
ask you for microphone permissions, `),me=l("a"),$s=o("open the demo in  a separate tab"),xs=o(".)"),ha=c(),v=l("iframe"),da=c(),Ie=l("p"),qs=o("You should now be able to record your voice and hear yourself speaking in reverse - spooky \u{1F47B}!"),fa=c(),z=l("h2"),Z=l("a"),gt=l("span"),D(we.$$.fragment),As=c(),jt=l("span"),Cs=o("Handling multiple inputs and outputs"),ma=c(),De=l("p"),Is=o(`Let\u2019s say we had a more complicated function, with multiple inputs and outputs.
In the example below, we have a function that takes a dropdown index, a slider value, and number,
and returns an audio sample of a musical tone.`),wa=c(),Pe=l("p"),Ds=o(`Take a look how we pass a list of input and output components,
and see if you can follow along what\u2019s happening.`),va=c(),Oe=l("p"),Ps=o("The key here is that when you pass:"),ya=c(),ee=l("ul"),$t=l("li"),Os=o("a list of input components, each component corresponds to a parameter in order."),Ts=c(),xt=l("li"),Ss=o("a list of output coponents, each component corresponds to a returned value."),ba=c(),te=l("p"),Ns=o("The code snippet below shows how three input components line up with the three arguments of the "),qt=l("code"),Gs=o("generate_tone()"),Ls=o(" function:"),_a=c(),D(ve.$$.fragment),Ea=c(),y=l("iframe"),ka=c(),Y=l("h3"),ae=l("a"),At=l("span"),D(ye.$$.fragment),Fs=c(),be=l("span"),Hs=o("The "),Ct=l("code"),zs=o("launch()"),Ys=o(" method"),ga=c(),oe=l("p"),Us=o("So far, we have used the "),It=l("code"),Ws=o("launch()"),Bs=o(` method to launch the interface, but we
haven\u2019t really discussed what it does.`),ja=c(),se=l("p"),Ms=o("By default, the "),Dt=l("code"),Js=o("launch()"),Rs=o(` method will launch the demo in a web server that
is running locally. If you are running your code in a Jupyter or Colab notebook, then
Gradio will embed the demo GUI in the notebook so you can easily use it.`),$a=c(),le=l("p"),Ks=o("You can customize the behavior of "),Pt=l("code"),Qs=o("launch()"),Vs=o(" through different parameters:"),xa=c(),x=l("ul"),Te=l("li"),Ot=l("code"),Xs=o("inline"),Zs=o(" - whether to display the interface inline on Python notebooks."),el=c(),Se=l("li"),Tt=l("code"),tl=o("inbrowser"),al=o(" - whether to automatically launch the interface in a new tab on the default browser."),ol=c(),Ne=l("li"),St=l("code"),sl=o("share"),ll=o(" - whether to create a publicly shareable link from your computer for the interface. Kind of like a Google Drive link!"),qa=c(),re=l("p"),rl=o("We\u2019ll cover the "),Nt=l("code"),nl=o("share"),il=o(" parameter in a lot more detail in the next section!"),Aa=c(),U=l("h2"),ne=l("a"),Gt=l("span"),D(_e.$$.fragment),pl=c(),Lt=l("span"),ul=o("\u270F\uFE0F Let's apply it!"),Ca=c(),q=l("p"),cl=o("Let\u2019s build an interface that allows you to demo a "),Ft=l("strong"),hl=o("speech-recognition"),dl=o(` model.
To make it interesting, we will accept `),Ht=l("em"),fl=o("either"),ml=o(" a mic input or an uploaded file."),Ia=c(),f=l("p"),wl=o("As usual, we\u2019ll load our speech recognition model using the "),zt=l("code"),vl=o("pipeline()"),yl=o(` function from \u{1F917} Transformers.
If you need a quick refresher, you can go back to `),Ge=l("a"),bl=o("that section in Chapter 1"),_l=o(".   Next, we\u2019ll implement a "),Yt=l("code"),El=o("transcribe_audio()"),kl=o(" function that processes the audio and returns the transcription. Finally, we\u2019ll wrap this function in an "),Ut=l("code"),gl=o("Interface"),jl=o(" with the "),Wt=l("code"),$l=o("Audio"),xl=o(" components for the inputs and just text for the output. Altogether, the code for this application is the following:"),Da=c(),D(Ee.$$.fragment),Pa=c(),ie=l("p"),ql=o("If your browser doesn\u2019t ask you for microphone permissions, "),ke=l("a"),Al=o("open the demo in a separate tab"),Cl=o("."),Oa=c(),b=l("iframe"),Ta=c(),A=l("p"),Il=o(`That\u2019s it! You can now use this interface to transcribe audio. Notice here that
by passing in the `),Bt=l("code"),Dl=o("optional"),Pl=o(" parameter as "),Mt=l("code"),Ol=o("True"),Tl=o(`, we allow the user to either
provide a microphone or an audio file (or neither, but that will return an error message).`),Sa=c(),Le=l("p"),Sl=o("Keep going to see how to share your interface with others!"),this.h()},l(e){const i=vn('[data-svelte="svelte-1phssyn"]',document.head);G=r(i,"META",{name:!0,content:!0}),i.forEach(a),Jt=h(e),L=r(e,"H1",{class:!0});var Ga=n(L);W=r(Ga,"A",{id:!0,class:!0,href:!0});var Ml=n(W);Be=r(Ml,"SPAN",{});var Jl=n(Be);P(pe.$$.fragment,Jl),Jl.forEach(a),Ml.forEach(a),oo=h(Ga),Me=r(Ga,"SPAN",{});var Rl=n(Me);so=s(Rl,"Understanding the Interface class"),Rl.forEach(a),Ga.forEach(a),Rt=h(e),P(ue.$$.fragment,e),Kt=h(e),B=r(e,"P",{});var La=n(B);lo=s(La,"In this section, we will take a closer look at the "),Je=r(La,"CODE",{});var Kl=n(Je);ro=s(Kl,"Interface"),Kl.forEach(a),no=s(La,` class, and understand the
main parameters used to create one.`),La.forEach(a),Qt=h(e),F=r(e,"H2",{class:!0});var Fa=n(F);M=r(Fa,"A",{id:!0,class:!0,href:!0});var Ql=n(M);Re=r(Ql,"SPAN",{});var Vl=n(Re);P(ce.$$.fragment,Vl),Vl.forEach(a),Ql.forEach(a),io=h(Fa),Ke=r(Fa,"SPAN",{});var Xl=n(Ke);po=s(Xl,"How to create an Interface"),Xl.forEach(a),Fa.forEach(a),Vt=h(e),J=r(e,"P",{});var Ha=n(J);uo=s(Ha,"You\u2019ll notice that the "),Qe=r(Ha,"CODE",{});var Zl=n(Qe);co=s(Zl,"Interface"),Zl.forEach(a),ho=s(Ha," class has 3 required parameters:"),Ha.forEach(a),Xt=h(e),$e=r(e,"P",{});var er=n($e);Ve=r(er,"CODE",{});var tr=n(Ve);fo=s(tr,"Interface(fn, inputs, outputs, ...)"),tr.forEach(a),er.forEach(a),Zt=h(e),xe=r(e,"P",{});var ar=n(xe);mo=s(ar,"These parameters are:"),ar.forEach(a),ea=h(e),k=r(e,"UL",{});var Fe=n(k);qe=r(Fe,"LI",{});var Nl=n(qe);Xe=r(Nl,"CODE",{});var or=n(Xe);wo=s(or,"fn"),or.forEach(a),vo=s(Nl,": the prediction function that is wrapped by the Gradio interface. This function can take one or more parameters and return one or more values"),Nl.forEach(a),yo=h(Fe),g=r(Fe,"LI",{});var ge=n(g);Ze=r(ge,"CODE",{});var sr=n(Ze);bo=s(sr,"inputs"),sr.forEach(a),_o=s(ge,": the input component type(s). Gradio provides many pre-built components such as"),et=r(ge,"CODE",{});var lr=n(et);Eo=s(lr,'"image"'),lr.forEach(a),ko=s(ge," or "),tt=r(ge,"CODE",{});var rr=n(tt);go=s(rr,'"mic"'),rr.forEach(a),jo=s(ge,"."),ge.forEach(a),$o=h(Fe),j=r(Fe,"LI",{});var je=n(j);at=r(je,"CODE",{});var nr=n(at);xo=s(nr,"outputs"),nr.forEach(a),qo=s(je,": the output component type(s). Again, Gradio provides many pre-built components e.g. "),ot=r(je,"CODE",{});var ir=n(ot);Ao=s(ir,'"image"'),ir.forEach(a),Co=s(je," or "),st=r(je,"CODE",{});var pr=n(st);Io=s(pr,'"label"'),pr.forEach(a),Do=s(je,"."),je.forEach(a),Fe.forEach(a),ta=h(e),R=r(e,"P",{});var za=n(R);Po=s(za,"For a complete list of components, "),he=r(za,"A",{href:!0,rel:!0});var ur=n(he);Oo=s(ur,"see the Gradio docs "),ur.forEach(a),To=s(za,". Each pre-built component can be customized by instantiating the class corresponding to the component."),za.forEach(a),aa=h(e),m=r(e,"P",{});var C=n(m);So=s(C,"For example, as we saw in the "),Ae=r(C,"A",{href:!0});var cr=n(Ae);No=s(cr,"previous section"),cr.forEach(a),Go=s(C,`,
instead of passing in `),lt=r(C,"CODE",{});var hr=n(lt);Lo=s(hr,'"textbox"'),hr.forEach(a),Fo=s(C," to the "),rt=r(C,"CODE",{});var dr=n(rt);Ho=s(dr,"inputs"),dr.forEach(a),zo=s(C," parameter, you can pass in a "),nt=r(C,"CODE",{});var fr=n(nt);Yo=s(fr,'Textbox(lines=7, label="Prompt")'),fr.forEach(a),Uo=s(C," component to create a textbox with 7 lines and a label."),C.forEach(a),oa=h(e),K=r(e,"P",{});var Ya=n(K);Wo=s(Ya,"Let\u2019s take a look at another example, this time with an "),it=r(Ya,"CODE",{});var mr=n(it);Bo=s(mr,"Audio"),mr.forEach(a),Mo=s(Ya," component."),Ya.forEach(a),sa=h(e),H=r(e,"H2",{class:!0});var Ua=n(H);Q=r(Ua,"A",{id:!0,class:!0,href:!0});var wr=n(Q);pt=r(wr,"SPAN",{});var vr=n(pt);P(de.$$.fragment,vr),vr.forEach(a),wr.forEach(a),Jo=h(Ua),ut=r(Ua,"SPAN",{});var yr=n(ut);Ro=s(yr,"A simple example with audio"),yr.forEach(a),Ua.forEach(a),la=h(e),V=r(e,"P",{});var Wa=n(V);Ko=s(Wa,`As mentioned earlier, Gradio provides many different inputs and outputs.
So let\u2019s build an `),ct=r(Wa,"CODE",{});var br=n(ct);Qo=s(br,"Interface"),br.forEach(a),Vo=s(Wa," that works with audio."),Wa.forEach(a),ra=h(e),Ce=r(e,"P",{});var _r=n(Ce);Xo=s(_r,`In this example, we\u2019ll build an audio-to-audio function that takes an
audio file and simply reverses it.`),_r.forEach(a),na=h(e),d=r(e,"P",{});var _=n(d);Zo=s(_,"We will use for the input the "),ht=r(_,"CODE",{});var Er=n(ht);es=s(Er,"Audio"),Er.forEach(a),ts=s(_," component. When using the "),dt=r(_,"CODE",{});var kr=n(dt);as=s(kr,"Audio"),kr.forEach(a),os=s(_,` component,
you can specify whether you want the `),ft=r(_,"CODE",{});var gr=n(ft);ss=s(gr,"source"),gr.forEach(a),ls=s(_,` of the audio to be a file that the user
uploads or a microphone that the user records their voice with. In this case, let\u2019s
set it to a `),mt=r(_,"CODE",{});var jr=n(mt);rs=s(jr,'"microphone"'),jr.forEach(a),ns=s(_,". Just for fun, we\u2019ll add a label to our "),wt=r(_,"CODE",{});var $r=n(wt);is=s($r,"Audio"),$r.forEach(a),ps=s(_,` that says
\u201CSpeak here\u2026\u201C.`),_.forEach(a),ia=h(e),w=r(e,"P",{});var I=n(w);us=s(I,`In addition, we\u2019d like to receive the audio as a numpy array so that we can easily
\u201Creverse\u201D it. So we\u2019ll set the `),vt=r(I,"CODE",{});var xr=n(vt);cs=s(xr,'"type"'),xr.forEach(a),hs=s(I," to be "),yt=r(I,"CODE",{});var qr=n(yt);ds=s(qr,'"numpy"'),qr.forEach(a),fs=s(I,`, which passes the input
data as a tuple of (`),bt=r(I,"CODE",{});var Ar=n(bt);ms=s(Ar,"sample_rate"),Ar.forEach(a),ws=s(I,", "),_t=r(I,"CODE",{});var Cr=n(_t);vs=s(Cr,"data"),Cr.forEach(a),ys=s(I,") into our function."),I.forEach(a),pa=h(e),$=r(e,"P",{});var He=n($);bs=s(He,"We will also use the "),Et=r(He,"CODE",{});var Ir=n(Et);_s=s(Ir,"Audio"),Ir.forEach(a),Es=s(He,` output component which can automatically
render a tuple with a sample rate and numpy array of data as a playable audio file.
In this case, we do not need to do any customization, so we will use the string
shortcut `),kt=r(He,"CODE",{});var Dr=n(kt);ks=s(Dr,'"audio"'),Dr.forEach(a),gs=s(He,"."),He.forEach(a),ua=h(e),P(fe.$$.fragment,e),ca=h(e),X=r(e,"P",{});var Ba=n(X);js=s(Ba,`The code above will produce an interface like the one below (if your browser doesn\u2019t
ask you for microphone permissions, `),me=r(Ba,"A",{href:!0,target:!0});var Pr=n(me);$s=s(Pr,"open the demo in  a separate tab"),Pr.forEach(a),xs=s(Ba,".)"),Ba.forEach(a),ha=h(e),v=r(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),n(v).forEach(a),da=h(e),Ie=r(e,"P",{});var Or=n(Ie);qs=s(Or,"You should now be able to record your voice and hear yourself speaking in reverse - spooky \u{1F47B}!"),Or.forEach(a),fa=h(e),z=r(e,"H2",{class:!0});var Ma=n(z);Z=r(Ma,"A",{id:!0,class:!0,href:!0});var Tr=n(Z);gt=r(Tr,"SPAN",{});var Sr=n(gt);P(we.$$.fragment,Sr),Sr.forEach(a),Tr.forEach(a),As=h(Ma),jt=r(Ma,"SPAN",{});var Nr=n(jt);Cs=s(Nr,"Handling multiple inputs and outputs"),Nr.forEach(a),Ma.forEach(a),ma=h(e),De=r(e,"P",{});var Gr=n(De);Is=s(Gr,`Let\u2019s say we had a more complicated function, with multiple inputs and outputs.
In the example below, we have a function that takes a dropdown index, a slider value, and number,
and returns an audio sample of a musical tone.`),Gr.forEach(a),wa=h(e),Pe=r(e,"P",{});var Lr=n(Pe);Ds=s(Lr,`Take a look how we pass a list of input and output components,
and see if you can follow along what\u2019s happening.`),Lr.forEach(a),va=h(e),Oe=r(e,"P",{});var Fr=n(Oe);Ps=s(Fr,"The key here is that when you pass:"),Fr.forEach(a),ya=h(e),ee=r(e,"UL",{});var Ja=n(ee);$t=r(Ja,"LI",{});var Hr=n($t);Os=s(Hr,"a list of input components, each component corresponds to a parameter in order."),Hr.forEach(a),Ts=h(Ja),xt=r(Ja,"LI",{});var zr=n(xt);Ss=s(zr,"a list of output coponents, each component corresponds to a returned value."),zr.forEach(a),Ja.forEach(a),ba=h(e),te=r(e,"P",{});var Ra=n(te);Ns=s(Ra,"The code snippet below shows how three input components line up with the three arguments of the "),qt=r(Ra,"CODE",{});var Yr=n(qt);Gs=s(Yr,"generate_tone()"),Yr.forEach(a),Ls=s(Ra," function:"),Ra.forEach(a),_a=h(e),P(ve.$$.fragment,e),Ea=h(e),y=r(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),n(y).forEach(a),ka=h(e),Y=r(e,"H3",{class:!0});var Ka=n(Y);ae=r(Ka,"A",{id:!0,class:!0,href:!0});var Ur=n(ae);At=r(Ur,"SPAN",{});var Wr=n(At);P(ye.$$.fragment,Wr),Wr.forEach(a),Ur.forEach(a),Fs=h(Ka),be=r(Ka,"SPAN",{});var Qa=n(be);Hs=s(Qa,"The "),Ct=r(Qa,"CODE",{});var Br=n(Ct);zs=s(Br,"launch()"),Br.forEach(a),Ys=s(Qa," method"),Qa.forEach(a),Ka.forEach(a),ga=h(e),oe=r(e,"P",{});var Va=n(oe);Us=s(Va,"So far, we have used the "),It=r(Va,"CODE",{});var Mr=n(It);Ws=s(Mr,"launch()"),Mr.forEach(a),Bs=s(Va,` method to launch the interface, but we
haven\u2019t really discussed what it does.`),Va.forEach(a),ja=h(e),se=r(e,"P",{});var Xa=n(se);Ms=s(Xa,"By default, the "),Dt=r(Xa,"CODE",{});var Jr=n(Dt);Js=s(Jr,"launch()"),Jr.forEach(a),Rs=s(Xa,` method will launch the demo in a web server that
is running locally. If you are running your code in a Jupyter or Colab notebook, then
Gradio will embed the demo GUI in the notebook so you can easily use it.`),Xa.forEach(a),$a=h(e),le=r(e,"P",{});var Za=n(le);Ks=s(Za,"You can customize the behavior of "),Pt=r(Za,"CODE",{});var Rr=n(Pt);Qs=s(Rr,"launch()"),Rr.forEach(a),Vs=s(Za," through different parameters:"),Za.forEach(a),xa=h(e),x=r(e,"UL",{});var ze=n(x);Te=r(ze,"LI",{});var Gl=n(Te);Ot=r(Gl,"CODE",{});var Kr=n(Ot);Xs=s(Kr,"inline"),Kr.forEach(a),Zs=s(Gl," - whether to display the interface inline on Python notebooks."),Gl.forEach(a),el=h(ze),Se=r(ze,"LI",{});var Ll=n(Se);Tt=r(Ll,"CODE",{});var Qr=n(Tt);tl=s(Qr,"inbrowser"),Qr.forEach(a),al=s(Ll," - whether to automatically launch the interface in a new tab on the default browser."),Ll.forEach(a),ol=h(ze),Ne=r(ze,"LI",{});var Fl=n(Ne);St=r(Fl,"CODE",{});var Vr=n(St);sl=s(Vr,"share"),Vr.forEach(a),ll=s(Fl," - whether to create a publicly shareable link from your computer for the interface. Kind of like a Google Drive link!"),Fl.forEach(a),ze.forEach(a),qa=h(e),re=r(e,"P",{});var eo=n(re);rl=s(eo,"We\u2019ll cover the "),Nt=r(eo,"CODE",{});var Xr=n(Nt);nl=s(Xr,"share"),Xr.forEach(a),il=s(eo," parameter in a lot more detail in the next section!"),eo.forEach(a),Aa=h(e),U=r(e,"H2",{class:!0});var to=n(U);ne=r(to,"A",{id:!0,class:!0,href:!0});var Zr=n(ne);Gt=r(Zr,"SPAN",{});var en=n(Gt);P(_e.$$.fragment,en),en.forEach(a),Zr.forEach(a),pl=h(to),Lt=r(to,"SPAN",{});var tn=n(Lt);ul=s(tn,"\u270F\uFE0F Let's apply it!"),tn.forEach(a),to.forEach(a),Ca=h(e),q=r(e,"P",{});var Ye=n(q);cl=s(Ye,"Let\u2019s build an interface that allows you to demo a "),Ft=r(Ye,"STRONG",{});var an=n(Ft);hl=s(an,"speech-recognition"),an.forEach(a),dl=s(Ye,` model.
To make it interesting, we will accept `),Ht=r(Ye,"EM",{});var on=n(Ht);fl=s(on,"either"),on.forEach(a),ml=s(Ye," a mic input or an uploaded file."),Ye.forEach(a),Ia=h(e),f=r(e,"P",{});var E=n(f);wl=s(E,"As usual, we\u2019ll load our speech recognition model using the "),zt=r(E,"CODE",{});var sn=n(zt);vl=s(sn,"pipeline()"),sn.forEach(a),yl=s(E,` function from \u{1F917} Transformers.
If you need a quick refresher, you can go back to `),Ge=r(E,"A",{href:!0});var ln=n(Ge);bl=s(ln,"that section in Chapter 1"),ln.forEach(a),_l=s(E,".   Next, we\u2019ll implement a "),Yt=r(E,"CODE",{});var rn=n(Yt);El=s(rn,"transcribe_audio()"),rn.forEach(a),kl=s(E," function that processes the audio and returns the transcription. Finally, we\u2019ll wrap this function in an "),Ut=r(E,"CODE",{});var nn=n(Ut);gl=s(nn,"Interface"),nn.forEach(a),jl=s(E," with the "),Wt=r(E,"CODE",{});var pn=n(Wt);$l=s(pn,"Audio"),pn.forEach(a),xl=s(E," components for the inputs and just text for the output. Altogether, the code for this application is the following:"),E.forEach(a),Da=h(e),P(Ee.$$.fragment,e),Pa=h(e),ie=r(e,"P",{});var ao=n(ie);ql=s(ao,"If your browser doesn\u2019t ask you for microphone permissions, "),ke=r(ao,"A",{href:!0,target:!0});var un=n(ke);Al=s(un,"open the demo in a separate tab"),un.forEach(a),Cl=s(ao,"."),ao.forEach(a),Oa=h(e),b=r(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),n(b).forEach(a),Ta=h(e),A=r(e,"P",{});var Ue=n(A);Il=s(Ue,`That\u2019s it! You can now use this interface to transcribe audio. Notice here that
by passing in the `),Bt=r(Ue,"CODE",{});var cn=n(Bt);Dl=s(cn,"optional"),cn.forEach(a),Pl=s(Ue," parameter as "),Mt=r(Ue,"CODE",{});var hn=n(Mt);Ol=s(hn,"True"),hn.forEach(a),Tl=s(Ue,`, we allow the user to either
provide a microphone or an audio file (or neither, but that will return an error message).`),Ue.forEach(a),Sa=h(e),Le=r(e,"P",{});var dn=n(Le);Sl=s(dn,"Keep going to see how to share your interface with others!"),dn.forEach(a),this.h()},h(){u(G,"name","hf:doc:metadata"),u(G,"content",JSON.stringify(kn)),u(W,"id","understanding-the-interface-class"),u(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(W,"href","#understanding-the-interface-class"),u(L,"class","relative group"),u(M,"id","how-to-create-an-interface"),u(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(M,"href","#how-to-create-an-interface"),u(F,"class","relative group"),u(he,"href","https://gradio.app/docs"),u(he,"rel","nofollow"),u(Ae,"href","/course/chapter9/2"),u(Q,"id","a-simple-example-with-audio"),u(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Q,"href","#a-simple-example-with-audio"),u(H,"class","relative group"),u(me,"href","https://huggingface.co/spaces/course-demos/audio-reverse"),u(me,"target","_blank"),Hl(v.src,Ul="https://hf.space/gradioiframe/course-demos/audio-reverse/+")||u(v,"src",Ul),u(v,"frameborder","0"),u(v,"height","250"),u(v,"title","Gradio app"),u(v,"class","container p-0 flex-grow space-iframe"),u(v,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),u(v,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),u(Z,"id","handling-multiple-inputs-and-outputs"),u(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Z,"href","#handling-multiple-inputs-and-outputs"),u(z,"class","relative group"),Hl(y.src,Wl="https://hf.space/gradioiframe/course-demos/generate-tone/+")||u(y,"src",Wl),u(y,"frameborder","0"),u(y,"height","450"),u(y,"title","Gradio app"),u(y,"class","container p-0 flex-grow space-iframe"),u(y,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),u(y,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),u(ae,"id","the-launch-method"),u(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ae,"href","#the-launch-method"),u(Y,"class","relative group"),u(ne,"id","lets-apply-it"),u(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ne,"href","#lets-apply-it"),u(U,"class","relative group"),u(Ge,"href","/course/chapter1/3"),u(ke,"href","https://huggingface.co/spaces/course-demos/audio-reverse"),u(ke,"target","_blank"),Hl(b.src,Bl="https://hf.space/gradioiframe/course-demos/asr/+")||u(b,"src",Bl),u(b,"frameborder","0"),u(b,"height","550"),u(b,"title","Gradio app"),u(b,"class","container p-0 flex-grow space-iframe"),u(b,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),u(b,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads")},m(e,i){t(document.head,G),p(e,Jt,i),p(e,L,i),t(L,W),t(W,Be),O(pe,Be,null),t(L,oo),t(L,Me),t(Me,so),p(e,Rt,i),O(ue,e,i),p(e,Kt,i),p(e,B,i),t(B,lo),t(B,Je),t(Je,ro),t(B,no),p(e,Qt,i),p(e,F,i),t(F,M),t(M,Re),O(ce,Re,null),t(F,io),t(F,Ke),t(Ke,po),p(e,Vt,i),p(e,J,i),t(J,uo),t(J,Qe),t(Qe,co),t(J,ho),p(e,Xt,i),p(e,$e,i),t($e,Ve),t(Ve,fo),p(e,Zt,i),p(e,xe,i),t(xe,mo),p(e,ea,i),p(e,k,i),t(k,qe),t(qe,Xe),t(Xe,wo),t(qe,vo),t(k,yo),t(k,g),t(g,Ze),t(Ze,bo),t(g,_o),t(g,et),t(et,Eo),t(g,ko),t(g,tt),t(tt,go),t(g,jo),t(k,$o),t(k,j),t(j,at),t(at,xo),t(j,qo),t(j,ot),t(ot,Ao),t(j,Co),t(j,st),t(st,Io),t(j,Do),p(e,ta,i),p(e,R,i),t(R,Po),t(R,he),t(he,Oo),t(R,To),p(e,aa,i),p(e,m,i),t(m,So),t(m,Ae),t(Ae,No),t(m,Go),t(m,lt),t(lt,Lo),t(m,Fo),t(m,rt),t(rt,Ho),t(m,zo),t(m,nt),t(nt,Yo),t(m,Uo),p(e,oa,i),p(e,K,i),t(K,Wo),t(K,it),t(it,Bo),t(K,Mo),p(e,sa,i),p(e,H,i),t(H,Q),t(Q,pt),O(de,pt,null),t(H,Jo),t(H,ut),t(ut,Ro),p(e,la,i),p(e,V,i),t(V,Ko),t(V,ct),t(ct,Qo),t(V,Vo),p(e,ra,i),p(e,Ce,i),t(Ce,Xo),p(e,na,i),p(e,d,i),t(d,Zo),t(d,ht),t(ht,es),t(d,ts),t(d,dt),t(dt,as),t(d,os),t(d,ft),t(ft,ss),t(d,ls),t(d,mt),t(mt,rs),t(d,ns),t(d,wt),t(wt,is),t(d,ps),p(e,ia,i),p(e,w,i),t(w,us),t(w,vt),t(vt,cs),t(w,hs),t(w,yt),t(yt,ds),t(w,fs),t(w,bt),t(bt,ms),t(w,ws),t(w,_t),t(_t,vs),t(w,ys),p(e,pa,i),p(e,$,i),t($,bs),t($,Et),t(Et,_s),t($,Es),t($,kt),t(kt,ks),t($,gs),p(e,ua,i),O(fe,e,i),p(e,ca,i),p(e,X,i),t(X,js),t(X,me),t(me,$s),t(X,xs),p(e,ha,i),p(e,v,i),p(e,da,i),p(e,Ie,i),t(Ie,qs),p(e,fa,i),p(e,z,i),t(z,Z),t(Z,gt),O(we,gt,null),t(z,As),t(z,jt),t(jt,Cs),p(e,ma,i),p(e,De,i),t(De,Is),p(e,wa,i),p(e,Pe,i),t(Pe,Ds),p(e,va,i),p(e,Oe,i),t(Oe,Ps),p(e,ya,i),p(e,ee,i),t(ee,$t),t($t,Os),t(ee,Ts),t(ee,xt),t(xt,Ss),p(e,ba,i),p(e,te,i),t(te,Ns),t(te,qt),t(qt,Gs),t(te,Ls),p(e,_a,i),O(ve,e,i),p(e,Ea,i),p(e,y,i),p(e,ka,i),p(e,Y,i),t(Y,ae),t(ae,At),O(ye,At,null),t(Y,Fs),t(Y,be),t(be,Hs),t(be,Ct),t(Ct,zs),t(be,Ys),p(e,ga,i),p(e,oe,i),t(oe,Us),t(oe,It),t(It,Ws),t(oe,Bs),p(e,ja,i),p(e,se,i),t(se,Ms),t(se,Dt),t(Dt,Js),t(se,Rs),p(e,$a,i),p(e,le,i),t(le,Ks),t(le,Pt),t(Pt,Qs),t(le,Vs),p(e,xa,i),p(e,x,i),t(x,Te),t(Te,Ot),t(Ot,Xs),t(Te,Zs),t(x,el),t(x,Se),t(Se,Tt),t(Tt,tl),t(Se,al),t(x,ol),t(x,Ne),t(Ne,St),t(St,sl),t(Ne,ll),p(e,qa,i),p(e,re,i),t(re,rl),t(re,Nt),t(Nt,nl),t(re,il),p(e,Aa,i),p(e,U,i),t(U,ne),t(ne,Gt),O(_e,Gt,null),t(U,pl),t(U,Lt),t(Lt,ul),p(e,Ca,i),p(e,q,i),t(q,cl),t(q,Ft),t(Ft,hl),t(q,dl),t(q,Ht),t(Ht,fl),t(q,ml),p(e,Ia,i),p(e,f,i),t(f,wl),t(f,zt),t(zt,vl),t(f,yl),t(f,Ge),t(Ge,bl),t(f,_l),t(f,Yt),t(Yt,El),t(f,kl),t(f,Ut),t(Ut,gl),t(f,jl),t(f,Wt),t(Wt,$l),t(f,xl),p(e,Da,i),O(Ee,e,i),p(e,Pa,i),p(e,ie,i),t(ie,ql),t(ie,ke),t(ke,Al),t(ie,Cl),p(e,Oa,i),p(e,b,i),p(e,Ta,i),p(e,A,i),t(A,Il),t(A,Bt),t(Bt,Dl),t(A,Pl),t(A,Mt),t(Mt,Ol),t(A,Tl),p(e,Sa,i),p(e,Le,i),t(Le,Sl),Na=!0},p:yn,i(e){Na||(T(pe.$$.fragment,e),T(ue.$$.fragment,e),T(ce.$$.fragment,e),T(de.$$.fragment,e),T(fe.$$.fragment,e),T(we.$$.fragment,e),T(ve.$$.fragment,e),T(ye.$$.fragment,e),T(_e.$$.fragment,e),T(Ee.$$.fragment,e),Na=!0)},o(e){S(pe.$$.fragment,e),S(ue.$$.fragment,e),S(ce.$$.fragment,e),S(de.$$.fragment,e),S(fe.$$.fragment,e),S(we.$$.fragment,e),S(ve.$$.fragment,e),S(ye.$$.fragment,e),S(_e.$$.fragment,e),S(Ee.$$.fragment,e),Na=!1},d(e){a(G),e&&a(Jt),e&&a(L),N(pe),e&&a(Rt),N(ue,e),e&&a(Kt),e&&a(B),e&&a(Qt),e&&a(F),N(ce),e&&a(Vt),e&&a(J),e&&a(Xt),e&&a($e),e&&a(Zt),e&&a(xe),e&&a(ea),e&&a(k),e&&a(ta),e&&a(R),e&&a(aa),e&&a(m),e&&a(oa),e&&a(K),e&&a(sa),e&&a(H),N(de),e&&a(la),e&&a(V),e&&a(ra),e&&a(Ce),e&&a(na),e&&a(d),e&&a(ia),e&&a(w),e&&a(pa),e&&a($),e&&a(ua),N(fe,e),e&&a(ca),e&&a(X),e&&a(ha),e&&a(v),e&&a(da),e&&a(Ie),e&&a(fa),e&&a(z),N(we),e&&a(ma),e&&a(De),e&&a(wa),e&&a(Pe),e&&a(va),e&&a(Oe),e&&a(ya),e&&a(ee),e&&a(ba),e&&a(te),e&&a(_a),N(ve,e),e&&a(Ea),e&&a(y),e&&a(ka),e&&a(Y),N(ye),e&&a(ga),e&&a(oe),e&&a(ja),e&&a(se),e&&a($a),e&&a(le),e&&a(xa),e&&a(x),e&&a(qa),e&&a(re),e&&a(Aa),e&&a(U),N(_e),e&&a(Ca),e&&a(q),e&&a(Ia),e&&a(f),e&&a(Da),N(Ee,e),e&&a(Pa),e&&a(ie),e&&a(Oa),e&&a(b),e&&a(Ta),e&&a(A),e&&a(Sa),e&&a(Le)}}}const kn={local:"understanding-the-interface-class",sections:[{local:"how-to-create-an-interface",title:"How to create an Interface"},{local:"a-simple-example-with-audio",title:"A simple example with audio"},{local:"handling-multiple-inputs-and-outputs",sections:[{local:"the-launch-method",title:"The `launch()` method"}],title:"Handling multiple inputs and outputs"},{local:"lets-apply-it",title:"\u270F\uFE0F Let's apply it!"}],title:"Understanding the Interface class"};function gn(Yl){return bn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class An extends fn{constructor(G){super();mn(this,G,gn,En,wn,{})}}export{An as default,kn as metadata};
