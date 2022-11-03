import{S as dn,i as hn,s as pn,e as o,k as u,w as g,t as n,M as cn,c as i,d as a,m as d,a as s,x as v,h as r,b as h,G as t,g as f,y,L as mn,q as _,o as w,B as b,v as gn}from"../chunks/vendor-hf-doc-builder.js";import{I as un}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as D}from"../chunks/CodeBlock-hf-doc-builder.js";function vn(Ri){let q,Lt,S,L,tt,X,Sa,at,xa,Ut,U,Ia,Ee,Na,Oa,Rt,ke,Ga,Ct,J,Yt,x,R,ot,Z,Ma,it,Ha,zt,T,La,$e,Ua,Ra,Pe,Ca,Ya,Bt,C,st,I,nt,rt,za,Ba,lt,ft,Fa,Ka,ut,dt,Va,Qa,P,N,ht,Wa,Xa,pt,Ja,Za,ct,De,eo,to,O,mt,ao,oo,gt,io,so,vt,Te,no,ro,G,yt,lo,fo,_t,uo,ho,wt,Ae,po,co,M,bt,mo,go,Et,vo,yo,kt,je,_o,Ft,Y,wo,qe,$t,bo,Eo,Kt,p,ko,Se,$o,Po,xe,Do,To,ee,Ao,jo,Ie,qo,So,te,xo,Io,Vt,ae,Qt,z,No,Ne,Oo,Go,Wt,oe,Xt,B,Mo,Pt,Ho,Lo,Jt,ie,Zt,F,Uo,se,Ro,Co,ea,Oe,Yo,ta,ne,aa,c,zo,re,Bo,Fo,le,Ko,Vo,Dt,Qo,Wo,fe,Tt,Xo,Jo,ue,Zo,ei,oa,de,ia,A,ti,he,At,ai,oi,jt,ii,si,sa,pe,na,Ge,ni,ra,ce,qt,ri,li,la,me,fa,K,fi,St,ui,di,ua,ge,da,Me,hi,ha,ve,pa,m,pi,He,ci,mi,Le,gi,vi,xt,yi,_i,Ue,wi,bi,ca,ye,ma,H,_e,Ei,ki,Re,$i,Pi,ga,V,Di,we,Ti,Ai,va,E,It,Ce,ji,qi,Nt,Ye,Si,xi,Ot,ze,Ii,Ni,Gt,Be,Oi,ya,be,Gi,Fe,Mt,Mi,_a,Ke,Hi,wa;return X=new un({}),J=new D({props:{code:"pip install --upgrade diffusers",highlighted:"pip install --upgrade diffusers"}}),Z=new un({}),ae=new D({props:{code:`from diffusers import DiffusionPipeline

generator = DiffusionPipeline.from_pretrained("CompVis/ldm-text2im-large-256")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>generator = DiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;CompVis/ldm-text2im-large-256&quot;</span>)`}}),oe=new D({props:{code:'generator.to("cuda")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>generator.to(<span class="hljs-string">&quot;cuda&quot;</span>)'}}),ie=new D({props:{code:'image = generator("An image of a squirrel in Picasso style").images[0]',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>image = generator(<span class="hljs-string">&quot;An image of a squirrel in Picasso style&quot;</span>).images[<span class="hljs-number">0</span>]'}}),ne=new D({props:{code:'image.save("image_of_squirrel_painting.png")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>image.save(<span class="hljs-string">&quot;image_of_squirrel_painting.png&quot;</span>)'}}),de=new D({props:{code:'AUTH_TOKEN = "<please-fill-with-your-token>"',highlighted:'AUTH_TOKEN = <span class="hljs-string">&quot;&lt;please-fill-with-your-token&gt;&quot;</span>'}}),pe=new D({props:{code:`from diffusers import DiffusionPipeline

generator = DiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5", use_auth_token=AUTH_TOKEN)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>generator = DiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;runwayml/stable-diffusion-v1-5&quot;</span>, use_auth_token=AUTH_TOKEN)`}}),me=new D({props:{code:`git lfs install
git clone https://huggingface.co/runwayml/stable-diffusion-v1-5`,highlighted:`git lfs install
git clone https:<span class="hljs-regexp">//</span>huggingface.co<span class="hljs-regexp">/runwayml/</span>stable-diffusion-v1-<span class="hljs-number">5</span>`}}),ge=new D({props:{code:'generator = DiffusionPipeline.from_pretrained("./stable-diffusion-v1-5")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>generator = DiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;./stable-diffusion-v1-5&quot;</span>)'}}),ve=new D({props:{code:`generator.to("cuda")
image = generator("An image of a squirrel in Picasso style").images[0]
image.save("image_of_squirrel_painting.png")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator.to(<span class="hljs-string">&quot;cuda&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = generator(<span class="hljs-string">&quot;An image of a squirrel in Picasso style&quot;</span>).images[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image.save(<span class="hljs-string">&quot;image_of_squirrel_painting.png&quot;</span>)`}}),ye=new D({props:{code:`from diffusers import LMSDiscreteScheduler

scheduler = LMSDiscreteScheduler.from_config("runwayml/stable-diffusion-v1-5", subfolder="scheduler")

generator = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5", scheduler=scheduler, use_auth_token=AUTH_TOKEN
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> LMSDiscreteScheduler

<span class="hljs-meta">&gt;&gt;&gt; </span>scheduler = LMSDiscreteScheduler.from_config(<span class="hljs-string">&quot;runwayml/stable-diffusion-v1-5&quot;</span>, subfolder=<span class="hljs-string">&quot;scheduler&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>generator = StableDiffusionPipeline.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;runwayml/stable-diffusion-v1-5&quot;</span>, scheduler=scheduler, use_auth_token=AUTH_TOKEN
<span class="hljs-meta">... </span>)`}}),{c(){q=o("meta"),Lt=u(),S=o("h1"),L=o("a"),tt=o("span"),g(X.$$.fragment),Sa=u(),at=o("span"),xa=n("Quicktour"),Ut=u(),U=o("p"),Ia=n(`Get up and running with \u{1F9E8} Diffusers quickly!
Whether you\u2019re a developer or an everyday user, this quick tour will help you get started and show you how to use `),Ee=o("a"),Na=n("DiffusionPipeline"),Oa=n(" for inference."),Rt=u(),ke=o("p"),Ga=n("Before you begin, make sure you have all the necessary libraries installed:"),Ct=u(),g(J.$$.fragment),Yt=u(),x=o("h2"),R=o("a"),ot=o("span"),g(Z.$$.fragment),Ma=u(),it=o("span"),Ha=n("DiffusionPipeline"),zt=u(),T=o("p"),La=n("The "),$e=o("a"),Ua=n("DiffusionPipeline"),Ra=n(" is the easiest way to use a pre-trained diffusion system for inference. You can use the "),Pe=o("a"),Ca=n("DiffusionPipeline"),Ya=n(" out-of-the-box for many tasks across different modalities. Take a look at the table below for some supported tasks:"),Bt=u(),C=o("table"),st=o("thead"),I=o("tr"),nt=o("th"),rt=o("strong"),za=n("Task"),Ba=u(),lt=o("th"),ft=o("strong"),Fa=n("Description"),Ka=u(),ut=o("th"),dt=o("strong"),Va=n("Pipeline"),Qa=u(),P=o("tbody"),N=o("tr"),ht=o("td"),Wa=n("Unconditional Image Generation"),Xa=u(),pt=o("td"),Ja=n("generate an image from gaussian noise"),Za=u(),ct=o("td"),De=o("a"),eo=n("unconditional_image_generation"),to=u(),O=o("tr"),mt=o("td"),ao=n("Text-Guided Image Generation"),oo=u(),gt=o("td"),io=n("generate an image given a text prompt"),so=u(),vt=o("td"),Te=o("a"),no=n("conditional_image_generation"),ro=u(),G=o("tr"),yt=o("td"),lo=n("Text-Guided Image-to-Image Translation"),fo=u(),_t=o("td"),uo=n("generate an image given an original image and a text prompt"),ho=u(),wt=o("td"),Ae=o("a"),po=n("img2img"),co=u(),M=o("tr"),bt=o("td"),mo=n("Text-Guided Image-Inpainting"),go=u(),Et=o("td"),vo=n("fill the masked part of an image given the image, the mask and a text prompt"),yo=u(),kt=o("td"),je=o("a"),_o=n("inpaint"),Ft=u(),Y=o("p"),wo=n("For more in-detail information on how diffusion pipelines function for the different tasks, please have a look at the "),qe=o("a"),$t=o("strong"),bo=n("Using Diffusers"),Eo=n(" section."),Kt=u(),p=o("p"),ko=n("As an example, start by creating an instance of "),Se=o("a"),$o=n("DiffusionPipeline"),Po=n(` and specify which pipeline checkpoint you would like to download.
You can use the `),xe=o("a"),Do=n("DiffusionPipeline"),To=n(" for any "),ee=o("a"),Ao=n("Diffusers\u2019 checkpoint"),jo=n(`.
In this guide though, you\u2019ll use `),Ie=o("a"),qo=n("DiffusionPipeline"),So=n(" for text-to-image generation with "),te=o("a"),xo=n("Latent Diffusion"),Io=n(":"),Vt=u(),g(ae.$$.fragment),Qt=u(),z=o("p"),No=n("The "),Ne=o("a"),Oo=n("DiffusionPipeline"),Go=n(` downloads and caches all modeling, tokenization, and scheduling components.
Because the model consists of roughly 1.4 billion parameters, we strongly recommend running it on GPU.
You can move the generator object to GPU, just like you would in PyTorch.`),Wt=u(),g(oe.$$.fragment),Xt=u(),B=o("p"),Mo=n("Now you can use the "),Pt=o("code"),Ho=n("generator"),Lo=n(" on your text prompt:"),Jt=u(),g(ie.$$.fragment),Zt=u(),F=o("p"),Uo=n("The output is by default wrapped into a "),se=o("a"),Ro=n("PIL Image object"),Co=n("."),ea=u(),Oe=o("p"),Yo=n("You can save the image by simply calling:"),ta=u(),g(ne.$$.fragment),aa=u(),c=o("p"),zo=n("More advanced models, like "),re=o("a"),Bo=n("Stable Diffusion"),Fo=n(" require you to accept a "),le=o("a"),Ko=n("license"),Vo=n(` before running the model.
This is due to the improved image generation capabilities of the model and the potentially harmful content that could be produced with it.
Please, head over to your stable diffusion model of choice, `),Dt=o("em"),Qo=n("e.g."),Wo=u(),fe=o("a"),Tt=o("code"),Xo=n("runwayml/stable-diffusion-v1-5"),Jo=n(`, read the license carefully and tick the checkbox if you agree.
You have to be a registered user in \u{1F917} Hugging Face Hub, and you\u2019ll also need to use an access token for the code to work. For more information on access tokens, please refer to `),ue=o("a"),Zo=n("this section of the documentation"),ei=n(`.
Having \u201Cclick-accepted\u201D the license, you can save your token:`),oa=u(),g(de.$$.fragment),ia=u(),A=o("p"),ti=n("You can then load "),he=o("a"),At=o("code"),ai=n("runwayml/stable-diffusion-v1-5"),oi=n(`
just like we did before only that now you need to pass your `),jt=o("code"),ii=n("AUTH_TOKEN"),si=n(":"),sa=u(),g(pe.$$.fragment),na=u(),Ge=o("p"),ni=n(`If you do not pass your authentication token you will see that the diffusion system will not be correctly
downloaded. Forcing the user to pass an authentication token ensures that it can be verified that the
user has indeed read and accepted the license, which also means that an internet connection is required.`),ra=u(),ce=o("p"),qt=o("strong"),ri=n("Note"),li=n(`: If you do not want to be forced to pass an authentication token, you can also simply download
the weights locally via:`),la=u(),g(me.$$.fragment),fa=u(),K=o("p"),fi=n(`and then load locally saved weights into the pipeline. This way, you do not need to pass an authentication
token. Assuming that `),St=o("code"),ui=n('"./stable-diffusion-v1-5"'),di=n(` is the local path to the cloned stable-diffusion-v1-5 repo,
you can also load the pipeline as follows:`),ua=u(),g(ge.$$.fragment),da=u(),Me=o("p"),hi=n("Running the pipeline is then identical to the code above as it\u2019s the same model architecture."),ha=u(),g(ve.$$.fragment),pa=u(),m=o("p"),pi=n("Diffusion systems can be used with multiple different "),He=o("a"),ci=n("schedulers"),mi=n(` each with their
pros and cons. By default, Stable Diffusion runs with `),Le=o("a"),gi=n("PNDMScheduler"),vi=n(`, but it\u2019s very simple to
use a different scheduler. `),xt=o("em"),yi=n("E.g."),_i=n(" if you would instead like to use the "),Ue=o("a"),wi=n("LMSDiscreteScheduler"),bi=n(` scheduler,
you could use it as follows:`),ca=u(),g(ye.$$.fragment),ma=u(),H=o("p"),_e=o("a"),Ei=n("Stability AI\u2019s"),ki=n(` Stable Diffusion model is an impressive image generation model
and can do much more than just generating images from text. We have dedicated a whole documentation page,
just for Stable Diffusion `),Re=o("a"),$i=n("here"),Pi=n("."),ga=u(),V=o("p"),Di=n("If you want to know how to optimize Stable Diffusion to run on less memory, higher inference speeds, on specific hardware, such as Mac, or with "),we=o("a"),Ti=n("ONNX Runtime"),Ai=n(`, please have a look at our
optimization pages:`),va=u(),E=o("ul"),It=o("li"),Ce=o("a"),ji=n("Optimized PyTorch on GPU"),qi=u(),Nt=o("li"),Ye=o("a"),Si=n("Mac OS with PyTorch"),xi=u(),Ot=o("li"),ze=o("a"),Ii=n("ONNX"),Ni=u(),Gt=o("li"),Be=o("a"),Oi=n("OpenVINO"),ya=u(),be=o("p"),Gi=n("If you want to fine-tune or train your diffusion model, please have a look at the "),Fe=o("a"),Mt=o("strong"),Mi=n("training section"),_a=u(),Ke=o("p"),Hi=n("Finally, please be considerate when distributing generated images publicly \u{1F917}."),this.h()},l(e){const l=cn('[data-svelte="svelte-1phssyn"]',document.head);q=i(l,"META",{name:!0,content:!0}),l.forEach(a),Lt=d(e),S=i(e,"H1",{class:!0});var ba=s(S);L=i(ba,"A",{id:!0,class:!0,href:!0});var Ci=s(L);tt=i(Ci,"SPAN",{});var Yi=s(tt);v(X.$$.fragment,Yi),Yi.forEach(a),Ci.forEach(a),Sa=d(ba),at=i(ba,"SPAN",{});var zi=s(at);xa=r(zi,"Quicktour"),zi.forEach(a),ba.forEach(a),Ut=d(e),U=i(e,"P",{});var Ea=s(U);Ia=r(Ea,`Get up and running with \u{1F9E8} Diffusers quickly!
Whether you\u2019re a developer or an everyday user, this quick tour will help you get started and show you how to use `),Ee=i(Ea,"A",{href:!0});var Bi=s(Ee);Na=r(Bi,"DiffusionPipeline"),Bi.forEach(a),Oa=r(Ea," for inference."),Ea.forEach(a),Rt=d(e),ke=i(e,"P",{});var Fi=s(ke);Ga=r(Fi,"Before you begin, make sure you have all the necessary libraries installed:"),Fi.forEach(a),Ct=d(e),v(J.$$.fragment,e),Yt=d(e),x=i(e,"H2",{class:!0});var ka=s(x);R=i(ka,"A",{id:!0,class:!0,href:!0});var Ki=s(R);ot=i(Ki,"SPAN",{});var Vi=s(ot);v(Z.$$.fragment,Vi),Vi.forEach(a),Ki.forEach(a),Ma=d(ka),it=i(ka,"SPAN",{});var Qi=s(it);Ha=r(Qi,"DiffusionPipeline"),Qi.forEach(a),ka.forEach(a),zt=d(e),T=i(e,"P",{});var Ve=s(T);La=r(Ve,"The "),$e=i(Ve,"A",{href:!0});var Wi=s($e);Ua=r(Wi,"DiffusionPipeline"),Wi.forEach(a),Ra=r(Ve," is the easiest way to use a pre-trained diffusion system for inference. You can use the "),Pe=i(Ve,"A",{href:!0});var Xi=s(Pe);Ca=r(Xi,"DiffusionPipeline"),Xi.forEach(a),Ya=r(Ve," out-of-the-box for many tasks across different modalities. Take a look at the table below for some supported tasks:"),Ve.forEach(a),Bt=d(e),C=i(e,"TABLE",{});var $a=s(C);st=i($a,"THEAD",{});var Ji=s(st);I=i(Ji,"TR",{});var Qe=s(I);nt=i(Qe,"TH",{});var Zi=s(nt);rt=i(Zi,"STRONG",{});var es=s(rt);za=r(es,"Task"),es.forEach(a),Zi.forEach(a),Ba=d(Qe),lt=i(Qe,"TH",{});var ts=s(lt);ft=i(ts,"STRONG",{});var as=s(ft);Fa=r(as,"Description"),as.forEach(a),ts.forEach(a),Ka=d(Qe),ut=i(Qe,"TH",{});var os=s(ut);dt=i(os,"STRONG",{});var is=s(dt);Va=r(is,"Pipeline"),is.forEach(a),os.forEach(a),Qe.forEach(a),Ji.forEach(a),Qa=d($a),P=i($a,"TBODY",{});var Q=s(P);N=i(Q,"TR",{});var We=s(N);ht=i(We,"TD",{});var ss=s(ht);Wa=r(ss,"Unconditional Image Generation"),ss.forEach(a),Xa=d(We),pt=i(We,"TD",{});var ns=s(pt);Ja=r(ns,"generate an image from gaussian noise"),ns.forEach(a),Za=d(We),ct=i(We,"TD",{});var rs=s(ct);De=i(rs,"A",{href:!0});var ls=s(De);eo=r(ls,"unconditional_image_generation"),ls.forEach(a),rs.forEach(a),We.forEach(a),to=d(Q),O=i(Q,"TR",{});var Xe=s(O);mt=i(Xe,"TD",{});var fs=s(mt);ao=r(fs,"Text-Guided Image Generation"),fs.forEach(a),oo=d(Xe),gt=i(Xe,"TD",{});var us=s(gt);io=r(us,"generate an image given a text prompt"),us.forEach(a),so=d(Xe),vt=i(Xe,"TD",{});var ds=s(vt);Te=i(ds,"A",{href:!0});var hs=s(Te);no=r(hs,"conditional_image_generation"),hs.forEach(a),ds.forEach(a),Xe.forEach(a),ro=d(Q),G=i(Q,"TR",{});var Je=s(G);yt=i(Je,"TD",{});var ps=s(yt);lo=r(ps,"Text-Guided Image-to-Image Translation"),ps.forEach(a),fo=d(Je),_t=i(Je,"TD",{});var cs=s(_t);uo=r(cs,"generate an image given an original image and a text prompt"),cs.forEach(a),ho=d(Je),wt=i(Je,"TD",{});var ms=s(wt);Ae=i(ms,"A",{href:!0});var gs=s(Ae);po=r(gs,"img2img"),gs.forEach(a),ms.forEach(a),Je.forEach(a),co=d(Q),M=i(Q,"TR",{});var Ze=s(M);bt=i(Ze,"TD",{});var vs=s(bt);mo=r(vs,"Text-Guided Image-Inpainting"),vs.forEach(a),go=d(Ze),Et=i(Ze,"TD",{});var ys=s(Et);vo=r(ys,"fill the masked part of an image given the image, the mask and a text prompt"),ys.forEach(a),yo=d(Ze),kt=i(Ze,"TD",{});var _s=s(kt);je=i(_s,"A",{href:!0});var ws=s(je);_o=r(ws,"inpaint"),ws.forEach(a),_s.forEach(a),Ze.forEach(a),Q.forEach(a),$a.forEach(a),Ft=d(e),Y=i(e,"P",{});var Pa=s(Y);wo=r(Pa,"For more in-detail information on how diffusion pipelines function for the different tasks, please have a look at the "),qe=i(Pa,"A",{href:!0});var bs=s(qe);$t=i(bs,"STRONG",{});var Es=s($t);bo=r(Es,"Using Diffusers"),Es.forEach(a),bs.forEach(a),Eo=r(Pa," section."),Pa.forEach(a),Kt=d(e),p=i(e,"P",{});var k=s(p);ko=r(k,"As an example, start by creating an instance of "),Se=i(k,"A",{href:!0});var ks=s(Se);$o=r(ks,"DiffusionPipeline"),ks.forEach(a),Po=r(k,` and specify which pipeline checkpoint you would like to download.
You can use the `),xe=i(k,"A",{href:!0});var $s=s(xe);Do=r($s,"DiffusionPipeline"),$s.forEach(a),To=r(k," for any "),ee=i(k,"A",{href:!0,rel:!0});var Ps=s(ee);Ao=r(Ps,"Diffusers\u2019 checkpoint"),Ps.forEach(a),jo=r(k,`.
In this guide though, you\u2019ll use `),Ie=i(k,"A",{href:!0});var Ds=s(Ie);qo=r(Ds,"DiffusionPipeline"),Ds.forEach(a),So=r(k," for text-to-image generation with "),te=i(k,"A",{href:!0,rel:!0});var Ts=s(te);xo=r(Ts,"Latent Diffusion"),Ts.forEach(a),Io=r(k,":"),k.forEach(a),Vt=d(e),v(ae.$$.fragment,e),Qt=d(e),z=i(e,"P",{});var Da=s(z);No=r(Da,"The "),Ne=i(Da,"A",{href:!0});var As=s(Ne);Oo=r(As,"DiffusionPipeline"),As.forEach(a),Go=r(Da,` downloads and caches all modeling, tokenization, and scheduling components.
Because the model consists of roughly 1.4 billion parameters, we strongly recommend running it on GPU.
You can move the generator object to GPU, just like you would in PyTorch.`),Da.forEach(a),Wt=d(e),v(oe.$$.fragment,e),Xt=d(e),B=i(e,"P",{});var Ta=s(B);Mo=r(Ta,"Now you can use the "),Pt=i(Ta,"CODE",{});var js=s(Pt);Ho=r(js,"generator"),js.forEach(a),Lo=r(Ta," on your text prompt:"),Ta.forEach(a),Jt=d(e),v(ie.$$.fragment,e),Zt=d(e),F=i(e,"P",{});var Aa=s(F);Uo=r(Aa,"The output is by default wrapped into a "),se=i(Aa,"A",{href:!0,rel:!0});var qs=s(se);Ro=r(qs,"PIL Image object"),qs.forEach(a),Co=r(Aa,"."),Aa.forEach(a),ea=d(e),Oe=i(e,"P",{});var Ss=s(Oe);Yo=r(Ss,"You can save the image by simply calling:"),Ss.forEach(a),ta=d(e),v(ne.$$.fragment,e),aa=d(e),c=i(e,"P",{});var $=s(c);zo=r($,"More advanced models, like "),re=i($,"A",{href:!0,rel:!0});var xs=s(re);Bo=r(xs,"Stable Diffusion"),xs.forEach(a),Fo=r($," require you to accept a "),le=i($,"A",{href:!0,rel:!0});var Is=s(le);Ko=r(Is,"license"),Is.forEach(a),Vo=r($,` before running the model.
This is due to the improved image generation capabilities of the model and the potentially harmful content that could be produced with it.
Please, head over to your stable diffusion model of choice, `),Dt=i($,"EM",{});var Ns=s(Dt);Qo=r(Ns,"e.g."),Ns.forEach(a),Wo=d($),fe=i($,"A",{href:!0,rel:!0});var Os=s(fe);Tt=i(Os,"CODE",{});var Gs=s(Tt);Xo=r(Gs,"runwayml/stable-diffusion-v1-5"),Gs.forEach(a),Os.forEach(a),Jo=r($,`, read the license carefully and tick the checkbox if you agree.
You have to be a registered user in \u{1F917} Hugging Face Hub, and you\u2019ll also need to use an access token for the code to work. For more information on access tokens, please refer to `),ue=i($,"A",{href:!0,rel:!0});var Ms=s(ue);Zo=r(Ms,"this section of the documentation"),Ms.forEach(a),ei=r($,`.
Having \u201Cclick-accepted\u201D the license, you can save your token:`),$.forEach(a),oa=d(e),v(de.$$.fragment,e),ia=d(e),A=i(e,"P",{});var et=s(A);ti=r(et,"You can then load "),he=i(et,"A",{href:!0,rel:!0});var Hs=s(he);At=i(Hs,"CODE",{});var Ls=s(At);ai=r(Ls,"runwayml/stable-diffusion-v1-5"),Ls.forEach(a),Hs.forEach(a),oi=r(et,`
just like we did before only that now you need to pass your `),jt=i(et,"CODE",{});var Us=s(jt);ii=r(Us,"AUTH_TOKEN"),Us.forEach(a),si=r(et,":"),et.forEach(a),sa=d(e),v(pe.$$.fragment,e),na=d(e),Ge=i(e,"P",{});var Rs=s(Ge);ni=r(Rs,`If you do not pass your authentication token you will see that the diffusion system will not be correctly
downloaded. Forcing the user to pass an authentication token ensures that it can be verified that the
user has indeed read and accepted the license, which also means that an internet connection is required.`),Rs.forEach(a),ra=d(e),ce=i(e,"P",{});var Li=s(ce);qt=i(Li,"STRONG",{});var Cs=s(qt);ri=r(Cs,"Note"),Cs.forEach(a),li=r(Li,`: If you do not want to be forced to pass an authentication token, you can also simply download
the weights locally via:`),Li.forEach(a),la=d(e),v(me.$$.fragment,e),fa=d(e),K=i(e,"P",{});var ja=s(K);fi=r(ja,`and then load locally saved weights into the pipeline. This way, you do not need to pass an authentication
token. Assuming that `),St=i(ja,"CODE",{});var Ys=s(St);ui=r(Ys,'"./stable-diffusion-v1-5"'),Ys.forEach(a),di=r(ja,` is the local path to the cloned stable-diffusion-v1-5 repo,
you can also load the pipeline as follows:`),ja.forEach(a),ua=d(e),v(ge.$$.fragment,e),da=d(e),Me=i(e,"P",{});var zs=s(Me);hi=r(zs,"Running the pipeline is then identical to the code above as it\u2019s the same model architecture."),zs.forEach(a),ha=d(e),v(ve.$$.fragment,e),pa=d(e),m=i(e,"P",{});var j=s(m);pi=r(j,"Diffusion systems can be used with multiple different "),He=i(j,"A",{href:!0});var Bs=s(He);ci=r(Bs,"schedulers"),Bs.forEach(a),mi=r(j,` each with their
pros and cons. By default, Stable Diffusion runs with `),Le=i(j,"A",{href:!0});var Fs=s(Le);gi=r(Fs,"PNDMScheduler"),Fs.forEach(a),vi=r(j,`, but it\u2019s very simple to
use a different scheduler. `),xt=i(j,"EM",{});var Ks=s(xt);yi=r(Ks,"E.g."),Ks.forEach(a),_i=r(j," if you would instead like to use the "),Ue=i(j,"A",{href:!0});var Vs=s(Ue);wi=r(Vs,"LMSDiscreteScheduler"),Vs.forEach(a),bi=r(j,` scheduler,
you could use it as follows:`),j.forEach(a),ca=d(e),v(ye.$$.fragment,e),ma=d(e),H=i(e,"P",{});var Ht=s(H);_e=i(Ht,"A",{href:!0,rel:!0});var Qs=s(_e);Ei=r(Qs,"Stability AI\u2019s"),Qs.forEach(a),ki=r(Ht,` Stable Diffusion model is an impressive image generation model
and can do much more than just generating images from text. We have dedicated a whole documentation page,
just for Stable Diffusion `),Re=i(Ht,"A",{href:!0});var Ws=s(Re);$i=r(Ws,"here"),Ws.forEach(a),Pi=r(Ht,"."),Ht.forEach(a),ga=d(e),V=i(e,"P",{});var qa=s(V);Di=r(qa,"If you want to know how to optimize Stable Diffusion to run on less memory, higher inference speeds, on specific hardware, such as Mac, or with "),we=i(qa,"A",{href:!0,rel:!0});var Xs=s(we);Ti=r(Xs,"ONNX Runtime"),Xs.forEach(a),Ai=r(qa,`, please have a look at our
optimization pages:`),qa.forEach(a),va=d(e),E=i(e,"UL",{});var W=s(E);It=i(W,"LI",{});var Js=s(It);Ce=i(Js,"A",{href:!0});var Zs=s(Ce);ji=r(Zs,"Optimized PyTorch on GPU"),Zs.forEach(a),Js.forEach(a),qi=d(W),Nt=i(W,"LI",{});var en=s(Nt);Ye=i(en,"A",{href:!0});var tn=s(Ye);Si=r(tn,"Mac OS with PyTorch"),tn.forEach(a),en.forEach(a),xi=d(W),Ot=i(W,"LI",{});var an=s(Ot);ze=i(an,"A",{href:!0});var on=s(ze);Ii=r(on,"ONNX"),on.forEach(a),an.forEach(a),Ni=d(W),Gt=i(W,"LI",{});var sn=s(Gt);Be=i(sn,"A",{href:!0});var nn=s(Be);Oi=r(nn,"OpenVINO"),nn.forEach(a),sn.forEach(a),W.forEach(a),ya=d(e),be=i(e,"P",{});var Ui=s(be);Gi=r(Ui,"If you want to fine-tune or train your diffusion model, please have a look at the "),Fe=i(Ui,"A",{href:!0});var rn=s(Fe);Mt=i(rn,"STRONG",{});var ln=s(Mt);Mi=r(ln,"training section"),ln.forEach(a),rn.forEach(a),Ui.forEach(a),_a=d(e),Ke=i(e,"P",{});var fn=s(Ke);Hi=r(fn,"Finally, please be considerate when distributing generated images publicly \u{1F917}."),fn.forEach(a),this.h()},h(){h(q,"name","hf:doc:metadata"),h(q,"content",JSON.stringify(yn)),h(L,"id","quicktour"),h(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(L,"href","#quicktour"),h(S,"class","relative group"),h(Ee,"href","/docs/diffusers/v0.7.0/en/using-diffusers/loading#diffusers.DiffusionPipeline"),h(R,"id","diffusionpipeline"),h(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(R,"href","#diffusionpipeline"),h(x,"class","relative group"),h($e,"href","/docs/diffusers/v0.7.0/en/using-diffusers/loading#diffusers.DiffusionPipeline"),h(Pe,"href","/docs/diffusers/v0.7.0/en/using-diffusers/loading#diffusers.DiffusionPipeline"),h(De,"href","./using-diffusers/unconditional_image_generation%60"),h(Te,"href","./using-diffusers/conditional_image_generation"),h(Ae,"href","./using-diffusers/img2img"),h(je,"href","./using-diffusers/inpaint"),h(qe,"href","./using-diffusers/overview"),h(Se,"href","/docs/diffusers/v0.7.0/en/using-diffusers/loading#diffusers.DiffusionPipeline"),h(xe,"href","/docs/diffusers/v0.7.0/en/using-diffusers/loading#diffusers.DiffusionPipeline"),h(ee,"href","https://huggingface.co/models?library=diffusers&sort=downloads"),h(ee,"rel","nofollow"),h(Ie,"href","/docs/diffusers/v0.7.0/en/using-diffusers/loading#diffusers.DiffusionPipeline"),h(te,"href","https://huggingface.co/CompVis/ldm-text2im-large-256"),h(te,"rel","nofollow"),h(Ne,"href","/docs/diffusers/v0.7.0/en/using-diffusers/loading#diffusers.DiffusionPipeline"),h(se,"href","https://pillow.readthedocs.io/en/stable/reference/Image.html?highlight=image#the-image-class"),h(se,"rel","nofollow"),h(re,"href","https://huggingface.co/CompVis/stable-diffusion"),h(re,"rel","nofollow"),h(le,"href","https://huggingface.co/spaces/CompVis/stable-diffusion-license"),h(le,"rel","nofollow"),h(fe,"href","https://huggingface.co/runwayml/stable-diffusion-v1-5"),h(fe,"rel","nofollow"),h(ue,"href","https://huggingface.co/docs/hub/security-tokens"),h(ue,"rel","nofollow"),h(he,"href","https://huggingface.co/runwayml/stable-diffusion-v1-5"),h(he,"rel","nofollow"),h(He,"href","./api/schedulers"),h(Le,"href","/docs/diffusers/v0.7.0/en/api/schedulers#diffusers.PNDMScheduler"),h(Ue,"href","/docs/diffusers/v0.7.0/en/api/schedulers#diffusers.LMSDiscreteScheduler"),h(_e,"href","https://stability.ai/"),h(_e,"rel","nofollow"),h(Re,"href","./conceptual/stable_diffusion"),h(we,"href","https://onnxruntime.ai/"),h(we,"rel","nofollow"),h(Ce,"href","./optimization/fp16"),h(Ye,"href","./optimization/mps"),h(ze,"href","./optimization/onnx"),h(Be,"href","./optimization/open_vino"),h(Fe,"href","./training/overview")},m(e,l){t(document.head,q),f(e,Lt,l),f(e,S,l),t(S,L),t(L,tt),y(X,tt,null),t(S,Sa),t(S,at),t(at,xa),f(e,Ut,l),f(e,U,l),t(U,Ia),t(U,Ee),t(Ee,Na),t(U,Oa),f(e,Rt,l),f(e,ke,l),t(ke,Ga),f(e,Ct,l),y(J,e,l),f(e,Yt,l),f(e,x,l),t(x,R),t(R,ot),y(Z,ot,null),t(x,Ma),t(x,it),t(it,Ha),f(e,zt,l),f(e,T,l),t(T,La),t(T,$e),t($e,Ua),t(T,Ra),t(T,Pe),t(Pe,Ca),t(T,Ya),f(e,Bt,l),f(e,C,l),t(C,st),t(st,I),t(I,nt),t(nt,rt),t(rt,za),t(I,Ba),t(I,lt),t(lt,ft),t(ft,Fa),t(I,Ka),t(I,ut),t(ut,dt),t(dt,Va),t(C,Qa),t(C,P),t(P,N),t(N,ht),t(ht,Wa),t(N,Xa),t(N,pt),t(pt,Ja),t(N,Za),t(N,ct),t(ct,De),t(De,eo),t(P,to),t(P,O),t(O,mt),t(mt,ao),t(O,oo),t(O,gt),t(gt,io),t(O,so),t(O,vt),t(vt,Te),t(Te,no),t(P,ro),t(P,G),t(G,yt),t(yt,lo),t(G,fo),t(G,_t),t(_t,uo),t(G,ho),t(G,wt),t(wt,Ae),t(Ae,po),t(P,co),t(P,M),t(M,bt),t(bt,mo),t(M,go),t(M,Et),t(Et,vo),t(M,yo),t(M,kt),t(kt,je),t(je,_o),f(e,Ft,l),f(e,Y,l),t(Y,wo),t(Y,qe),t(qe,$t),t($t,bo),t(Y,Eo),f(e,Kt,l),f(e,p,l),t(p,ko),t(p,Se),t(Se,$o),t(p,Po),t(p,xe),t(xe,Do),t(p,To),t(p,ee),t(ee,Ao),t(p,jo),t(p,Ie),t(Ie,qo),t(p,So),t(p,te),t(te,xo),t(p,Io),f(e,Vt,l),y(ae,e,l),f(e,Qt,l),f(e,z,l),t(z,No),t(z,Ne),t(Ne,Oo),t(z,Go),f(e,Wt,l),y(oe,e,l),f(e,Xt,l),f(e,B,l),t(B,Mo),t(B,Pt),t(Pt,Ho),t(B,Lo),f(e,Jt,l),y(ie,e,l),f(e,Zt,l),f(e,F,l),t(F,Uo),t(F,se),t(se,Ro),t(F,Co),f(e,ea,l),f(e,Oe,l),t(Oe,Yo),f(e,ta,l),y(ne,e,l),f(e,aa,l),f(e,c,l),t(c,zo),t(c,re),t(re,Bo),t(c,Fo),t(c,le),t(le,Ko),t(c,Vo),t(c,Dt),t(Dt,Qo),t(c,Wo),t(c,fe),t(fe,Tt),t(Tt,Xo),t(c,Jo),t(c,ue),t(ue,Zo),t(c,ei),f(e,oa,l),y(de,e,l),f(e,ia,l),f(e,A,l),t(A,ti),t(A,he),t(he,At),t(At,ai),t(A,oi),t(A,jt),t(jt,ii),t(A,si),f(e,sa,l),y(pe,e,l),f(e,na,l),f(e,Ge,l),t(Ge,ni),f(e,ra,l),f(e,ce,l),t(ce,qt),t(qt,ri),t(ce,li),f(e,la,l),y(me,e,l),f(e,fa,l),f(e,K,l),t(K,fi),t(K,St),t(St,ui),t(K,di),f(e,ua,l),y(ge,e,l),f(e,da,l),f(e,Me,l),t(Me,hi),f(e,ha,l),y(ve,e,l),f(e,pa,l),f(e,m,l),t(m,pi),t(m,He),t(He,ci),t(m,mi),t(m,Le),t(Le,gi),t(m,vi),t(m,xt),t(xt,yi),t(m,_i),t(m,Ue),t(Ue,wi),t(m,bi),f(e,ca,l),y(ye,e,l),f(e,ma,l),f(e,H,l),t(H,_e),t(_e,Ei),t(H,ki),t(H,Re),t(Re,$i),t(H,Pi),f(e,ga,l),f(e,V,l),t(V,Di),t(V,we),t(we,Ti),t(V,Ai),f(e,va,l),f(e,E,l),t(E,It),t(It,Ce),t(Ce,ji),t(E,qi),t(E,Nt),t(Nt,Ye),t(Ye,Si),t(E,xi),t(E,Ot),t(Ot,ze),t(ze,Ii),t(E,Ni),t(E,Gt),t(Gt,Be),t(Be,Oi),f(e,ya,l),f(e,be,l),t(be,Gi),t(be,Fe),t(Fe,Mt),t(Mt,Mi),f(e,_a,l),f(e,Ke,l),t(Ke,Hi),wa=!0},p:mn,i(e){wa||(_(X.$$.fragment,e),_(J.$$.fragment,e),_(Z.$$.fragment,e),_(ae.$$.fragment,e),_(oe.$$.fragment,e),_(ie.$$.fragment,e),_(ne.$$.fragment,e),_(de.$$.fragment,e),_(pe.$$.fragment,e),_(me.$$.fragment,e),_(ge.$$.fragment,e),_(ve.$$.fragment,e),_(ye.$$.fragment,e),wa=!0)},o(e){w(X.$$.fragment,e),w(J.$$.fragment,e),w(Z.$$.fragment,e),w(ae.$$.fragment,e),w(oe.$$.fragment,e),w(ie.$$.fragment,e),w(ne.$$.fragment,e),w(de.$$.fragment,e),w(pe.$$.fragment,e),w(me.$$.fragment,e),w(ge.$$.fragment,e),w(ve.$$.fragment,e),w(ye.$$.fragment,e),wa=!1},d(e){a(q),e&&a(Lt),e&&a(S),b(X),e&&a(Ut),e&&a(U),e&&a(Rt),e&&a(ke),e&&a(Ct),b(J,e),e&&a(Yt),e&&a(x),b(Z),e&&a(zt),e&&a(T),e&&a(Bt),e&&a(C),e&&a(Ft),e&&a(Y),e&&a(Kt),e&&a(p),e&&a(Vt),b(ae,e),e&&a(Qt),e&&a(z),e&&a(Wt),b(oe,e),e&&a(Xt),e&&a(B),e&&a(Jt),b(ie,e),e&&a(Zt),e&&a(F),e&&a(ea),e&&a(Oe),e&&a(ta),b(ne,e),e&&a(aa),e&&a(c),e&&a(oa),b(de,e),e&&a(ia),e&&a(A),e&&a(sa),b(pe,e),e&&a(na),e&&a(Ge),e&&a(ra),e&&a(ce),e&&a(la),b(me,e),e&&a(fa),e&&a(K),e&&a(ua),b(ge,e),e&&a(da),e&&a(Me),e&&a(ha),b(ve,e),e&&a(pa),e&&a(m),e&&a(ca),b(ye,e),e&&a(ma),e&&a(H),e&&a(ga),e&&a(V),e&&a(va),e&&a(E),e&&a(ya),e&&a(be),e&&a(_a),e&&a(Ke)}}}const yn={local:"quicktour",sections:[{local:"diffusionpipeline",title:"DiffusionPipeline"}],title:"Quicktour"};function _n(Ri){return gn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class kn extends dn{constructor(q){super();hn(this,q,_n,vn,pn,{})}}export{kn as default,yn as metadata};
