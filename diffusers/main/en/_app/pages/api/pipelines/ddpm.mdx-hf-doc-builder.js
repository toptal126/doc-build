import{S as zt,i as Jt,s as Rt,e as r,k as l,w as B,t as p,M as Ft,c as a,d as t,m as d,a as n,x as V,h as f,b as o,G as i,g as h,y as Y,L as Wt,q as K,o as Q,B as X,v as jt}from"../../../chunks/vendor-hf-doc-builder.js";import{D as Ut}from"../../../chunks/Docstring-hf-doc-builder.js";import{I as Se}from"../../../chunks/IconCopyLink-hf-doc-builder.js";function Bt(ft){let u,ue,m,P,Z,A,Ne,ee,Oe,me,g,y,te,x,qe,ie,Le,ge,T,I,Ce,He,ve,H,Ge,_e,G,Ue,be,w,ze,k,Je,Re,De,v,$,re,S,Fe,ae,We,Pe,E,ne,_,oe,je,Be,se,Ve,Ye,U,Ke,Qe,le,b,de,N,Xe,Ze,pe,fe,et,tt,z,it,ye,D,M,he,O,rt,ce,at,we,c,q,nt,L,ot,J,st,lt,dt,R,C,$e;return A=new Se({}),x=new Se({}),S=new Se({}),O=new Se({}),q=new Ut({props:{name:"class diffusers.DDPMPipeline",anchor:"diffusers.DDPMPipeline",parameters:[{name:"unet",val:""},{name:"scheduler",val:""}],parametersDescription:[{anchor:"diffusers.DDPMPipeline.unet",description:'<strong>unet</strong> (<a href="/docs/diffusers/main/en/api/models#diffusers.UNet2DModel">UNet2DModel</a>) &#x2014; U-Net architecture to denoise the encoded image.',name:"unet"},{anchor:"diffusers.DDPMPipeline.scheduler",description:`<strong>scheduler</strong> (<a href="/docs/diffusers/main/en/api/schedulers#diffusers.SchedulerMixin">SchedulerMixin</a>) &#x2014;
A scheduler to be used in combination with <code>unet</code> to denoise the encoded image. Can be one of
<a href="/docs/diffusers/main/en/api/schedulers#diffusers.DDPMScheduler">DDPMScheduler</a>, or <a href="/docs/diffusers/main/en/api/schedulers#diffusers.DDIMScheduler">DDIMScheduler</a>.`,name:"scheduler"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/ddpm/pipeline_ddpm.py#L24"}}),C=new Ut({props:{name:"__call__",anchor:"diffusers.DDPMPipeline.__call__",parameters:[{name:"batch_size",val:": int = 1"},{name:"generator",val:": typing.Optional[torch._C.Generator] = None"},{name:"num_inference_steps",val:": int = 1000"},{name:"output_type",val:": typing.Optional[str] = 'pil'"},{name:"return_dict",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"diffusers.DDPMPipeline.__call__.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of images to generate.`,name:"batch_size"},{anchor:"diffusers.DDPMPipeline.__call__.generator",description:`<strong>generator</strong> (<code>torch.Generator</code>, <em>optional</em>) &#x2014;
A <a href="https://pytorch.org/docs/stable/generated/torch.Generator.html" rel="nofollow">torch generator</a> to make generation
deterministic.`,name:"generator"},{anchor:"diffusers.DDPMPipeline.__call__.num_inference_steps",description:`<strong>num_inference_steps</strong> (<code>int</code>, <em>optional</em>, defaults to 1000) &#x2014;
The number of denoising steps. More denoising steps usually lead to a higher quality image at the
expense of slower inference.`,name:"num_inference_steps"},{anchor:"diffusers.DDPMPipeline.__call__.output_type",description:`<strong>output_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pil&quot;</code>) &#x2014;
The output format of the generate image. Choose between
<a href="https://pillow.readthedocs.io/en/stable/" rel="nofollow">PIL</a>: <code>PIL.Image.Image</code> or <code>np.array</code>.`,name:"output_type"},{anchor:"diffusers.DDPMPipeline.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to return a <a href="/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.pipeline_utils.ImagePipelineOutput">ImagePipelineOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/ddpm/pipeline_ddpm.py#L40",returnDescription:`
<p><code>~pipelines.utils.ImagePipelineOutput</code> if
<code>return_dict</code> is True, otherwise a \`tuple. When returning a tuple, the first element is a list with the
generated images.</p>
`,returnType:`
<p><a
  href="/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.pipeline_utils.ImagePipelineOutput"
>ImagePipelineOutput</a> or <code>tuple</code></p>
`}}),{c(){u=r("meta"),ue=l(),m=r("h1"),P=r("a"),Z=r("span"),B(A.$$.fragment),Ne=l(),ee=r("span"),Oe=p("DDPM"),me=l(),g=r("h2"),y=r("a"),te=r("span"),B(x.$$.fragment),qe=l(),ie=r("span"),Le=p("Overview"),ge=l(),T=r("p"),I=r("a"),Ce=p("Denoising Diffusion Probabilistic Models"),He=p(`
(DDPM) by Jonathan Ho, Ajay Jain and Pieter Abbeel proposes the diffusion based model of the same name, but in the context of the \u{1F917} Diffusers library, DDPM refers to the discrete denoising scheduler from the paper as well as the pipeline.`),ve=l(),H=r("p"),Ge=p("The abstract of the paper is the following:"),_e=l(),G=r("p"),Ue=p("We present high quality image synthesis results using diffusion probabilistic models, a class of latent variable models inspired by considerations from nonequilibrium thermodynamics. Our best results are obtained by training on a weighted variational bound designed according to a novel connection between diffusion probabilistic models and denoising score matching with Langevin dynamics, and our models naturally admit a progressive lossy decompression scheme that can be interpreted as a generalization of autoregressive decoding. On the unconditional CIFAR10 dataset, we obtain an Inception score of 9.46 and a state-of-the-art FID score of 3.17. On 256x256 LSUN, we obtain sample quality similar to ProgressiveGAN."),be=l(),w=r("p"),ze=p("The original codebase of this paper can be found "),k=r("a"),Je=p("here"),Re=p("."),De=l(),v=r("h2"),$=r("a"),re=r("span"),B(S.$$.fragment),Fe=l(),ae=r("span"),We=p("Available Pipelines:"),Pe=l(),E=r("table"),ne=r("thead"),_=r("tr"),oe=r("th"),je=p("Pipeline"),Be=l(),se=r("th"),Ve=p("Tasks"),Ye=l(),U=r("th"),Ke=p("Colab"),Qe=l(),le=r("tbody"),b=r("tr"),de=r("td"),N=r("a"),Xe=p("pipeline_ddpm.py"),Ze=l(),pe=r("td"),fe=r("em"),et=p("Unconditional Image Generation"),tt=l(),z=r("td"),it=p("-"),ye=l(),D=r("h1"),M=r("a"),he=r("span"),B(O.$$.fragment),rt=l(),ce=r("span"),at=p("DDPMPipeline"),we=l(),c=r("div"),B(q.$$.fragment),nt=l(),L=r("p"),ot=p("This model inherits from "),J=r("a"),st=p("DiffusionPipeline"),lt=p(`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),dt=l(),R=r("div"),B(C.$$.fragment),this.h()},l(e){const s=Ft('[data-svelte="svelte-1phssyn"]',document.head);u=a(s,"META",{name:!0,content:!0}),s.forEach(t),ue=d(e),m=a(e,"H1",{class:!0});var Ee=n(m);P=a(Ee,"A",{id:!0,class:!0,href:!0});var ht=n(P);Z=a(ht,"SPAN",{});var ct=n(Z);V(A.$$.fragment,ct),ct.forEach(t),ht.forEach(t),Ne=d(Ee),ee=a(Ee,"SPAN",{});var ut=n(ee);Oe=f(ut,"DDPM"),ut.forEach(t),Ee.forEach(t),me=d(e),g=a(e,"H2",{class:!0});var Me=n(g);y=a(Me,"A",{id:!0,class:!0,href:!0});var mt=n(y);te=a(mt,"SPAN",{});var gt=n(te);V(x.$$.fragment,gt),gt.forEach(t),mt.forEach(t),qe=d(Me),ie=a(Me,"SPAN",{});var vt=n(ie);Le=f(vt,"Overview"),vt.forEach(t),Me.forEach(t),ge=d(e),T=a(e,"P",{});var pt=n(T);I=a(pt,"A",{href:!0,rel:!0});var _t=n(I);Ce=f(_t,"Denoising Diffusion Probabilistic Models"),_t.forEach(t),He=f(pt,`
(DDPM) by Jonathan Ho, Ajay Jain and Pieter Abbeel proposes the diffusion based model of the same name, but in the context of the \u{1F917} Diffusers library, DDPM refers to the discrete denoising scheduler from the paper as well as the pipeline.`),pt.forEach(t),ve=d(e),H=a(e,"P",{});var bt=n(H);Ge=f(bt,"The abstract of the paper is the following:"),bt.forEach(t),_e=d(e),G=a(e,"P",{});var Dt=n(G);Ue=f(Dt,"We present high quality image synthesis results using diffusion probabilistic models, a class of latent variable models inspired by considerations from nonequilibrium thermodynamics. Our best results are obtained by training on a weighted variational bound designed according to a novel connection between diffusion probabilistic models and denoising score matching with Langevin dynamics, and our models naturally admit a progressive lossy decompression scheme that can be interpreted as a generalization of autoregressive decoding. On the unconditional CIFAR10 dataset, we obtain an Inception score of 9.46 and a state-of-the-art FID score of 3.17. On 256x256 LSUN, we obtain sample quality similar to ProgressiveGAN."),Dt.forEach(t),be=d(e),w=a(e,"P",{});var Ae=n(w);ze=f(Ae,"The original codebase of this paper can be found "),k=a(Ae,"A",{href:!0,rel:!0});var Pt=n(k);Je=f(Pt,"here"),Pt.forEach(t),Re=f(Ae,"."),Ae.forEach(t),De=d(e),v=a(e,"H2",{class:!0});var xe=n(v);$=a(xe,"A",{id:!0,class:!0,href:!0});var yt=n($);re=a(yt,"SPAN",{});var wt=n(re);V(S.$$.fragment,wt),wt.forEach(t),yt.forEach(t),Fe=d(xe),ae=a(xe,"SPAN",{});var $t=n(ae);We=f($t,"Available Pipelines:"),$t.forEach(t),xe.forEach(t),Pe=d(e),E=a(e,"TABLE",{});var Te=n(E);ne=a(Te,"THEAD",{});var Et=n(ne);_=a(Et,"TR",{});var F=n(_);oe=a(F,"TH",{});var Mt=n(oe);je=f(Mt,"Pipeline"),Mt.forEach(t),Be=d(F),se=a(F,"TH",{});var At=n(se);Ve=f(At,"Tasks"),At.forEach(t),Ye=d(F),U=a(F,"TH",{align:!0});var xt=n(U);Ke=f(xt,"Colab"),xt.forEach(t),F.forEach(t),Et.forEach(t),Qe=d(Te),le=a(Te,"TBODY",{});var Tt=n(le);b=a(Tt,"TR",{});var W=n(b);de=a(W,"TD",{});var It=n(de);N=a(It,"A",{href:!0,rel:!0});var kt=n(N);Xe=f(kt,"pipeline_ddpm.py"),kt.forEach(t),It.forEach(t),Ze=d(W),pe=a(W,"TD",{});var St=n(pe);fe=a(St,"EM",{});var Nt=n(fe);et=f(Nt,"Unconditional Image Generation"),Nt.forEach(t),St.forEach(t),tt=d(W),z=a(W,"TD",{align:!0});var Ot=n(z);it=f(Ot,"-"),Ot.forEach(t),W.forEach(t),Tt.forEach(t),Te.forEach(t),ye=d(e),D=a(e,"H1",{class:!0});var Ie=n(D);M=a(Ie,"A",{id:!0,class:!0,href:!0});var qt=n(M);he=a(qt,"SPAN",{});var Lt=n(he);V(O.$$.fragment,Lt),Lt.forEach(t),qt.forEach(t),rt=d(Ie),ce=a(Ie,"SPAN",{});var Ct=n(ce);at=f(Ct,"DDPMPipeline"),Ct.forEach(t),Ie.forEach(t),we=d(e),c=a(e,"DIV",{class:!0});var j=n(c);V(q.$$.fragment,j),nt=d(j),L=a(j,"P",{});var ke=n(L);ot=f(ke,"This model inherits from "),J=a(ke,"A",{href:!0});var Ht=n(J);st=f(Ht,"DiffusionPipeline"),Ht.forEach(t),lt=f(ke,`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),ke.forEach(t),dt=d(j),R=a(j,"DIV",{class:!0});var Gt=n(R);V(C.$$.fragment,Gt),Gt.forEach(t),j.forEach(t),this.h()},h(){o(u,"name","hf:doc:metadata"),o(u,"content",JSON.stringify(Vt)),o(P,"id","ddpm"),o(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(P,"href","#ddpm"),o(m,"class","relative group"),o(y,"id","overview"),o(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(y,"href","#overview"),o(g,"class","relative group"),o(I,"href","https://arxiv.org/abs/2006.11239"),o(I,"rel","nofollow"),o(k,"href","https://github.com/hojonathanho/diffusion"),o(k,"rel","nofollow"),o($,"id","available-pipelines"),o($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o($,"href","#available-pipelines"),o(v,"class","relative group"),o(U,"align","center"),o(N,"href","https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/ddpm/pipeline_ddpm.py"),o(N,"rel","nofollow"),o(z,"align","center"),o(M,"id","diffusers.DDPMPipeline"),o(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(M,"href","#diffusers.DDPMPipeline"),o(D,"class","relative group"),o(J,"href","/docs/diffusers/main/en/using-diffusers/loading#diffusers.DiffusionPipeline"),o(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),o(c,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,s){i(document.head,u),h(e,ue,s),h(e,m,s),i(m,P),i(P,Z),Y(A,Z,null),i(m,Ne),i(m,ee),i(ee,Oe),h(e,me,s),h(e,g,s),i(g,y),i(y,te),Y(x,te,null),i(g,qe),i(g,ie),i(ie,Le),h(e,ge,s),h(e,T,s),i(T,I),i(I,Ce),i(T,He),h(e,ve,s),h(e,H,s),i(H,Ge),h(e,_e,s),h(e,G,s),i(G,Ue),h(e,be,s),h(e,w,s),i(w,ze),i(w,k),i(k,Je),i(w,Re),h(e,De,s),h(e,v,s),i(v,$),i($,re),Y(S,re,null),i(v,Fe),i(v,ae),i(ae,We),h(e,Pe,s),h(e,E,s),i(E,ne),i(ne,_),i(_,oe),i(oe,je),i(_,Be),i(_,se),i(se,Ve),i(_,Ye),i(_,U),i(U,Ke),i(E,Qe),i(E,le),i(le,b),i(b,de),i(de,N),i(N,Xe),i(b,Ze),i(b,pe),i(pe,fe),i(fe,et),i(b,tt),i(b,z),i(z,it),h(e,ye,s),h(e,D,s),i(D,M),i(M,he),Y(O,he,null),i(D,rt),i(D,ce),i(ce,at),h(e,we,s),h(e,c,s),Y(q,c,null),i(c,nt),i(c,L),i(L,ot),i(L,J),i(J,st),i(L,lt),i(c,dt),i(c,R),Y(C,R,null),$e=!0},p:Wt,i(e){$e||(K(A.$$.fragment,e),K(x.$$.fragment,e),K(S.$$.fragment,e),K(O.$$.fragment,e),K(q.$$.fragment,e),K(C.$$.fragment,e),$e=!0)},o(e){Q(A.$$.fragment,e),Q(x.$$.fragment,e),Q(S.$$.fragment,e),Q(O.$$.fragment,e),Q(q.$$.fragment,e),Q(C.$$.fragment,e),$e=!1},d(e){t(u),e&&t(ue),e&&t(m),X(A),e&&t(me),e&&t(g),X(x),e&&t(ge),e&&t(T),e&&t(ve),e&&t(H),e&&t(_e),e&&t(G),e&&t(be),e&&t(w),e&&t(De),e&&t(v),X(S),e&&t(Pe),e&&t(E),e&&t(ye),e&&t(D),X(O),e&&t(we),e&&t(c),X(q),X(C)}}}const Vt={local:"diffusers.DDPMPipeline",title:"DDPMPipeline"};function Yt(ft){return jt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Zt extends zt{constructor(u){super();Jt(this,u,Yt,Bt,Rt,{})}}export{Zt as default,Vt as metadata};
