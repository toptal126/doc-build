import{S as Gt,i as Zt,s as Rt,e as a,k as l,w as Y,t as p,M as jt,c as o,d as t,m as d,a as n,x as F,h as c,b as r,G as i,g as h,y as V,L as Wt,q as J,o as K,B as Q,v as Bt}from"../../../chunks/vendor-hf-doc-builder.js";import{D as zt}from"../../../chunks/Docstring-hf-doc-builder.js";import{I as ke}from"../../../chunks/IconCopyLink-hf-doc-builder.js";function Yt(ct){let f,fe,m,b,X,E,qe,ee,Se,me,g,w,te,T,Le,ie,Ce,ge,I,x,He,Oe,ve,O,Ue,_e,U,ze,De,y,Ge,A,Ze,Re,Pe,v,M,ae,k,je,oe,We,be,$,ne,_,re,Be,Ye,se,Fe,Ve,z,Je,Ke,le,D,de,q,Qe,Xe,pe,ce,et,tt,G,it,we,P,N,he,S,at,ue,ot,ye,u,L,nt,C,rt,Z,st,lt,dt,R,H,Me;return E=new ke({}),T=new ke({}),k=new ke({}),S=new ke({}),L=new zt({props:{name:"class diffusers.PNDMPipeline",anchor:"diffusers.PNDMPipeline",parameters:[{name:"unet",val:": UNet2DModel"},{name:"scheduler",val:": PNDMScheduler"}],parametersDescription:[{anchor:"diffusers.PNDMPipeline.unet",description:"<strong>unet</strong> (<code>UNet2DModel</code>) &#x2014; U-Net architecture to denoise the encoded image latents.",name:"unet"},{anchor:"diffusers.PNDMPipeline.scheduler",description:`<strong>scheduler</strong> (<a href="/docs/diffusers/main/en/api/schedulers#diffusers.SchedulerMixin">SchedulerMixin</a>) &#x2014;
The <code>PNDMScheduler</code> to be used in combination with <code>unet</code> to denoise the encoded image.`,name:"scheduler"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/pndm/pipeline_pndm.py#L26"}}),H=new zt({props:{name:"__call__",anchor:"diffusers.PNDMPipeline.__call__",parameters:[{name:"batch_size",val:": int = 1"},{name:"num_inference_steps",val:": int = 50"},{name:"generator",val:": typing.Optional[torch._C.Generator] = None"},{name:"output_type",val:": typing.Optional[str] = 'pil'"},{name:"return_dict",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"diffusers.PNDMPipeline.__call__.batch_size",description:"<strong>batch_size</strong> (<code>int</code>, <code>optional</code>, defaults to 1) &#x2014; The number of images to generate.",name:"batch_size"},{anchor:"diffusers.PNDMPipeline.__call__.num_inference_steps",description:`<strong>num_inference_steps</strong> (<code>int</code>, <code>optional</code>, defaults to 50) &#x2014;
The number of denoising steps. More denoising steps usually lead to a higher quality image at the
expense of slower inference.`,name:"num_inference_steps"},{anchor:"diffusers.PNDMPipeline.__call__.generator",description:`<strong>generator</strong> (<code>torch.Generator</code>, <code>optional</code>) &#x2014; A <a href="https://pytorch.org/docs/stable/generated/torch.Generator.html" rel="nofollow">torch
generator</a> to make generation
deterministic.`,name:"generator"},{anchor:"diffusers.PNDMPipeline.__call__.output_type",description:`<strong>output_type</strong> (<code>str</code>, <code>optional</code>, defaults to <code>&quot;pil&quot;</code>) &#x2014; The output format of the generate image. Choose
between <a href="https://pillow.readthedocs.io/en/stable/" rel="nofollow">PIL</a>: <code>PIL.Image.Image</code> or <code>np.array</code>.`,name:"output_type"},{anchor:"diffusers.PNDMPipeline.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <code>optional</code>, defaults to <code>True</code>) &#x2014; Whether or not to return a
<a href="/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.pipeline_utils.ImagePipelineOutput">ImagePipelineOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/pndm/pipeline_pndm.py#L44",returnDescription:`
<p><code>ImagePipelineOutput</code> if
<code>return_dict</code> is True, otherwise a \`tuple. When returning a tuple, the first element is a list with the
generated images.</p>
`,returnType:`
<p><a
  href="/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.pipeline_utils.ImagePipelineOutput"
>ImagePipelineOutput</a> or <code>tuple</code></p>
`}}),{c(){f=a("meta"),fe=l(),m=a("h1"),b=a("a"),X=a("span"),Y(E.$$.fragment),qe=l(),ee=a("span"),Se=p("PNDM"),me=l(),g=a("h2"),w=a("a"),te=a("span"),Y(T.$$.fragment),Le=l(),ie=a("span"),Ce=p("Overview"),ge=l(),I=a("p"),x=a("a"),He=p("Pseudo Numerical methods for Diffusion Models on manifolds"),Oe=p(" (PNDM) by  Luping Liu, Yi Ren, Zhijie Lin and Zhou Zhao."),ve=l(),O=a("p"),Ue=p("The abstract of the paper is the following:"),_e=l(),U=a("p"),ze=p("Denoising Diffusion Probabilistic Models (DDPMs) can generate high-quality samples such as image and audio samples. However, DDPMs require hundreds to thousands of iterations to produce final samples. Several prior works have successfully accelerated DDPMs through adjusting the variance schedule (e.g., Improved Denoising Diffusion Probabilistic Models) or the denoising equation (e.g., Denoising Diffusion Implicit Models (DDIMs)). However, these acceleration methods cannot maintain the quality of samples and even introduce new noise at a high speedup rate, which limit their practicability. To accelerate the inference process while keeping the sample quality, we provide a fresh perspective that DDPMs should be treated as solving differential equations on manifolds. Under such a perspective, we propose pseudo numerical methods for diffusion models (PNDMs). Specifically, we figure out how to solve differential equations on manifolds and show that DDIMs are simple cases of pseudo numerical methods. We change several classical numerical methods to corresponding pseudo numerical methods and find that the pseudo linear multi-step method is the best in most situations. According to our experiments, by directly using pre-trained models on Cifar10, CelebA and LSUN, PNDMs can generate higher quality synthetic images with only 50 steps compared with 1000-step DDIMs (20x speedup), significantly outperform DDIMs with 250 steps (by around 0.4 in FID) and have good generalization on different variance schedules."),De=l(),y=a("p"),Ge=p("The original codebase can be found "),A=a("a"),Ze=p("here"),Re=p("."),Pe=l(),v=a("h2"),M=a("a"),ae=a("span"),Y(k.$$.fragment),je=l(),oe=a("span"),We=p("Available Pipelines:"),be=l(),$=a("table"),ne=a("thead"),_=a("tr"),re=a("th"),Be=p("Pipeline"),Ye=l(),se=a("th"),Fe=p("Tasks"),Ve=l(),z=a("th"),Je=p("Colab"),Ke=l(),le=a("tbody"),D=a("tr"),de=a("td"),q=a("a"),Qe=p("pipeline_pndm.py"),Xe=l(),pe=a("td"),ce=a("em"),et=p("Unconditional Image Generation"),tt=l(),G=a("td"),it=p("-"),we=l(),P=a("h2"),N=a("a"),he=a("span"),Y(S.$$.fragment),at=l(),ue=a("span"),ot=p("PNDMPipeline"),ye=l(),u=a("div"),Y(L.$$.fragment),nt=l(),C=a("p"),rt=p("This model inherits from "),Z=a("a"),st=p("DiffusionPipeline"),lt=p(`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),dt=l(),R=a("div"),Y(H.$$.fragment),this.h()},l(e){const s=jt('[data-svelte="svelte-1phssyn"]',document.head);f=o(s,"META",{name:!0,content:!0}),s.forEach(t),fe=d(e),m=o(e,"H1",{class:!0});var $e=n(m);b=o($e,"A",{id:!0,class:!0,href:!0});var ht=n(b);X=o(ht,"SPAN",{});var ut=n(X);F(E.$$.fragment,ut),ut.forEach(t),ht.forEach(t),qe=d($e),ee=o($e,"SPAN",{});var ft=n(ee);Se=c(ft,"PNDM"),ft.forEach(t),$e.forEach(t),me=d(e),g=o(e,"H2",{class:!0});var Ne=n(g);w=o(Ne,"A",{id:!0,class:!0,href:!0});var mt=n(w);te=o(mt,"SPAN",{});var gt=n(te);F(T.$$.fragment,gt),gt.forEach(t),mt.forEach(t),Le=d(Ne),ie=o(Ne,"SPAN",{});var vt=n(ie);Ce=c(vt,"Overview"),vt.forEach(t),Ne.forEach(t),ge=d(e),I=o(e,"P",{});var pt=n(I);x=o(pt,"A",{href:!0,rel:!0});var _t=n(x);He=c(_t,"Pseudo Numerical methods for Diffusion Models on manifolds"),_t.forEach(t),Oe=c(pt," (PNDM) by  Luping Liu, Yi Ren, Zhijie Lin and Zhou Zhao."),pt.forEach(t),ve=d(e),O=o(e,"P",{});var Dt=n(O);Ue=c(Dt,"The abstract of the paper is the following:"),Dt.forEach(t),_e=d(e),U=o(e,"P",{});var Pt=n(U);ze=c(Pt,"Denoising Diffusion Probabilistic Models (DDPMs) can generate high-quality samples such as image and audio samples. However, DDPMs require hundreds to thousands of iterations to produce final samples. Several prior works have successfully accelerated DDPMs through adjusting the variance schedule (e.g., Improved Denoising Diffusion Probabilistic Models) or the denoising equation (e.g., Denoising Diffusion Implicit Models (DDIMs)). However, these acceleration methods cannot maintain the quality of samples and even introduce new noise at a high speedup rate, which limit their practicability. To accelerate the inference process while keeping the sample quality, we provide a fresh perspective that DDPMs should be treated as solving differential equations on manifolds. Under such a perspective, we propose pseudo numerical methods for diffusion models (PNDMs). Specifically, we figure out how to solve differential equations on manifolds and show that DDIMs are simple cases of pseudo numerical methods. We change several classical numerical methods to corresponding pseudo numerical methods and find that the pseudo linear multi-step method is the best in most situations. According to our experiments, by directly using pre-trained models on Cifar10, CelebA and LSUN, PNDMs can generate higher quality synthetic images with only 50 steps compared with 1000-step DDIMs (20x speedup), significantly outperform DDIMs with 250 steps (by around 0.4 in FID) and have good generalization on different variance schedules."),Pt.forEach(t),De=d(e),y=o(e,"P",{});var Ee=n(y);Ge=c(Ee,"The original codebase can be found "),A=o(Ee,"A",{href:!0,rel:!0});var bt=n(A);Ze=c(bt,"here"),bt.forEach(t),Re=c(Ee,"."),Ee.forEach(t),Pe=d(e),v=o(e,"H2",{class:!0});var Te=n(v);M=o(Te,"A",{id:!0,class:!0,href:!0});var wt=n(M);ae=o(wt,"SPAN",{});var yt=n(ae);F(k.$$.fragment,yt),yt.forEach(t),wt.forEach(t),je=d(Te),oe=o(Te,"SPAN",{});var Mt=n(oe);We=c(Mt,"Available Pipelines:"),Mt.forEach(t),Te.forEach(t),be=d(e),$=o(e,"TABLE",{});var Ie=n($);ne=o(Ie,"THEAD",{});var $t=n(ne);_=o($t,"TR",{});var j=n(_);re=o(j,"TH",{});var Nt=n(re);Be=c(Nt,"Pipeline"),Nt.forEach(t),Ye=d(j),se=o(j,"TH",{});var Et=n(se);Fe=c(Et,"Tasks"),Et.forEach(t),Ve=d(j),z=o(j,"TH",{align:!0});var Tt=n(z);Je=c(Tt,"Colab"),Tt.forEach(t),j.forEach(t),$t.forEach(t),Ke=d(Ie),le=o(Ie,"TBODY",{});var It=n(le);D=o(It,"TR",{});var W=n(D);de=o(W,"TD",{});var xt=n(de);q=o(xt,"A",{href:!0,rel:!0});var At=n(q);Qe=c(At,"pipeline_pndm.py"),At.forEach(t),xt.forEach(t),Xe=d(W),pe=o(W,"TD",{});var kt=n(pe);ce=o(kt,"EM",{});var qt=n(ce);et=c(qt,"Unconditional Image Generation"),qt.forEach(t),kt.forEach(t),tt=d(W),G=o(W,"TD",{align:!0});var St=n(G);it=c(St,"-"),St.forEach(t),W.forEach(t),It.forEach(t),Ie.forEach(t),we=d(e),P=o(e,"H2",{class:!0});var xe=n(P);N=o(xe,"A",{id:!0,class:!0,href:!0});var Lt=n(N);he=o(Lt,"SPAN",{});var Ct=n(he);F(S.$$.fragment,Ct),Ct.forEach(t),Lt.forEach(t),at=d(xe),ue=o(xe,"SPAN",{});var Ht=n(ue);ot=c(Ht,"PNDMPipeline"),Ht.forEach(t),xe.forEach(t),ye=d(e),u=o(e,"DIV",{class:!0});var B=n(u);F(L.$$.fragment,B),nt=d(B),C=o(B,"P",{});var Ae=n(C);rt=c(Ae,"This model inherits from "),Z=o(Ae,"A",{href:!0});var Ot=n(Z);st=c(Ot,"DiffusionPipeline"),Ot.forEach(t),lt=c(Ae,`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),Ae.forEach(t),dt=d(B),R=o(B,"DIV",{class:!0});var Ut=n(R);F(H.$$.fragment,Ut),Ut.forEach(t),B.forEach(t),this.h()},h(){r(f,"name","hf:doc:metadata"),r(f,"content",JSON.stringify(Ft)),r(b,"id","pndm"),r(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(b,"href","#pndm"),r(m,"class","relative group"),r(w,"id","overview"),r(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(w,"href","#overview"),r(g,"class","relative group"),r(x,"href","https://arxiv.org/abs/2202.09778"),r(x,"rel","nofollow"),r(A,"href","https://github.com/luping-liu/PNDM"),r(A,"rel","nofollow"),r(M,"id","available-pipelines"),r(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(M,"href","#available-pipelines"),r(v,"class","relative group"),r(z,"align","center"),r(q,"href","https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/pndm/pipeline_pndm.py"),r(q,"rel","nofollow"),r(G,"align","center"),r(N,"id","diffusers.PNDMPipeline"),r(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(N,"href","#diffusers.PNDMPipeline"),r(P,"class","relative group"),r(Z,"href","/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),r(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),r(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,s){i(document.head,f),h(e,fe,s),h(e,m,s),i(m,b),i(b,X),V(E,X,null),i(m,qe),i(m,ee),i(ee,Se),h(e,me,s),h(e,g,s),i(g,w),i(w,te),V(T,te,null),i(g,Le),i(g,ie),i(ie,Ce),h(e,ge,s),h(e,I,s),i(I,x),i(x,He),i(I,Oe),h(e,ve,s),h(e,O,s),i(O,Ue),h(e,_e,s),h(e,U,s),i(U,ze),h(e,De,s),h(e,y,s),i(y,Ge),i(y,A),i(A,Ze),i(y,Re),h(e,Pe,s),h(e,v,s),i(v,M),i(M,ae),V(k,ae,null),i(v,je),i(v,oe),i(oe,We),h(e,be,s),h(e,$,s),i($,ne),i(ne,_),i(_,re),i(re,Be),i(_,Ye),i(_,se),i(se,Fe),i(_,Ve),i(_,z),i(z,Je),i($,Ke),i($,le),i(le,D),i(D,de),i(de,q),i(q,Qe),i(D,Xe),i(D,pe),i(pe,ce),i(ce,et),i(D,tt),i(D,G),i(G,it),h(e,we,s),h(e,P,s),i(P,N),i(N,he),V(S,he,null),i(P,at),i(P,ue),i(ue,ot),h(e,ye,s),h(e,u,s),V(L,u,null),i(u,nt),i(u,C),i(C,rt),i(C,Z),i(Z,st),i(C,lt),i(u,dt),i(u,R),V(H,R,null),Me=!0},p:Wt,i(e){Me||(J(E.$$.fragment,e),J(T.$$.fragment,e),J(k.$$.fragment,e),J(S.$$.fragment,e),J(L.$$.fragment,e),J(H.$$.fragment,e),Me=!0)},o(e){K(E.$$.fragment,e),K(T.$$.fragment,e),K(k.$$.fragment,e),K(S.$$.fragment,e),K(L.$$.fragment,e),K(H.$$.fragment,e),Me=!1},d(e){t(f),e&&t(fe),e&&t(m),Q(E),e&&t(me),e&&t(g),Q(T),e&&t(ge),e&&t(I),e&&t(ve),e&&t(O),e&&t(_e),e&&t(U),e&&t(De),e&&t(y),e&&t(Pe),e&&t(v),Q(k),e&&t(be),e&&t($),e&&t(we),e&&t(P),Q(S),e&&t(ye),e&&t(u),Q(L),Q(H)}}}const Ft={local:"pndm",sections:[{local:"overview",title:"Overview"},{local:"available-pipelines",title:"Available Pipelines:"},{local:"diffusers.PNDMPipeline",title:"PNDMPipeline"}],title:"PNDM"};function Vt(ct){return Bt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Xt extends Gt{constructor(f){super();Zt(this,f,Vt,Yt,Rt,{})}}export{Xt as default,Ft as metadata};
