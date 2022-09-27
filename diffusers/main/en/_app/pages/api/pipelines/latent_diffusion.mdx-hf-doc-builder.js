import{S as Ti,i as xi,s as Di,e as n,k as l,w as S,t as p,M as Pi,c as o,d as t,m as d,a,x as N,h as c,b as r,G as i,g as f,y as q,L as $i,q as O,o as B,B as C,v as Ei}from"../../../chunks/vendor-hf-doc-builder.js";import{D as bi}from"../../../chunks/Docstring-hf-doc-builder.js";import{I as se}from"../../../chunks/IconCopyLink-hf-doc-builder.js";function Mi(Ht){let m,Me,g,D,le,H,tt,de,it,Le,v,P,fe,z,nt,pe,ot,Ie,$,at,U,rt,st,ke,Y,lt,Ae,X,ce,dt,Se,E,ft,G,pt,ct,Ne,_,M,ue,R,ut,he,ht,qe,h,Oe,mt,Be,gt,Ce,He,w,L,me,V,vt,ge,_t,ze,I,ve,y,_e,wt,yt,we,bt,Tt,Z,xt,Dt,ye,b,be,Q,Pt,$t,Te,xe,Et,Mt,ee,Lt,Ue,T,k,De,j,It,Pe,kt,Ge,x,A,$e,W,At,Ee,St,Re,u,F,Nt,J,qt,te,Ot,Bt,Ct,ie,K,Ve;return H=new se({}),z=new se({}),R=new se({}),V=new se({}),j=new se({}),W=new se({}),F=new bi({props:{name:"class diffusers.LDMTextToImagePipeline",anchor:"diffusers.LDMTextToImagePipeline",parameters:[{name:"vqvae",val:": typing.Union[diffusers.models.vae.VQModel, diffusers.models.vae.AutoencoderKL]"},{name:"bert",val:": PreTrainedModel"},{name:"tokenizer",val:": PreTrainedTokenizer"},{name:"unet",val:": typing.Union[diffusers.models.unet_2d.UNet2DModel, diffusers.models.unet_2d_condition.UNet2DConditionModel]"},{name:"scheduler",val:": typing.Union[diffusers.schedulers.scheduling_ddim.DDIMScheduler, diffusers.schedulers.scheduling_pndm.PNDMScheduler, diffusers.schedulers.scheduling_lms_discrete.LMSDiscreteScheduler]"}],parametersDescription:[{anchor:"diffusers.LDMTextToImagePipeline.vqvae",description:`<strong>vqvae</strong> (<a href="/docs/diffusers/main/en/api/models#diffusers.VQModel">VQModel</a>) &#x2014;
Vector-quantized (VQ) Model to encode and decode images to and from latent representations.`,name:"vqvae"},{anchor:"diffusers.LDMTextToImagePipeline.bert",description:`<strong>bert</strong> (<code>LDMBertModel</code>) &#x2014;
Text-encoder model based on <a href="https://huggingface.co/docs/transformers/model_doc/bert" rel="nofollow">BERT</a> architecture.`,name:"bert"},{anchor:"diffusers.LDMTextToImagePipeline.tokenizer",description:`<strong>tokenizer</strong> (<code>transformers.BertTokenizer</code>) &#x2014;
Tokenizer of class
<a href="https://huggingface.co/docs/transformers/model_doc/bert#transformers.BertTokenizer" rel="nofollow">BertTokenizer</a>.`,name:"tokenizer"},{anchor:"diffusers.LDMTextToImagePipeline.unet",description:'<strong>unet</strong> (<a href="/docs/diffusers/main/en/api/models#diffusers.UNet2DConditionModel">UNet2DConditionModel</a>) &#x2014; Conditional U-Net architecture to denoise the encoded image latents.',name:"unet"},{anchor:"diffusers.LDMTextToImagePipeline.scheduler",description:`<strong>scheduler</strong> (<a href="/docs/diffusers/main/en/api/schedulers#diffusers.SchedulerMixin">SchedulerMixin</a>) &#x2014;
A scheduler to be used in combination with <code>unet</code> to denoise the encoded image latens. Can be one of
<a href="/docs/diffusers/main/en/api/schedulers#diffusers.DDIMScheduler">DDIMScheduler</a>, <a href="/docs/diffusers/main/en/api/schedulers#diffusers.LMSDiscreteScheduler">LMSDiscreteScheduler</a>, or <a href="/docs/diffusers/main/en/api/schedulers#diffusers.PNDMScheduler">PNDMScheduler</a>.`,name:"scheduler"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/latent_diffusion/pipeline_latent_diffusion.py#L20"}}),K=new bi({props:{name:"__call__",anchor:"diffusers.LDMTextToImagePipeline.__call__",parameters:[{name:"prompt",val:": typing.Union[str, typing.List[str]]"},{name:"height",val:": typing.Optional[int] = 256"},{name:"width",val:": typing.Optional[int] = 256"},{name:"num_inference_steps",val:": typing.Optional[int] = 50"},{name:"guidance_scale",val:": typing.Optional[float] = 1.0"},{name:"eta",val:": typing.Optional[float] = 0.0"},{name:"generator",val:": typing.Optional[torch._C.Generator] = None"},{name:"output_type",val:": typing.Optional[str] = 'pil'"},{name:"return_dict",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"diffusers.LDMTextToImagePipeline.__call__.prompt",description:`<strong>prompt</strong> (<code>str</code> or <code>List[str]</code>) &#x2014;
The prompt or prompts to guide the image generation.`,name:"prompt"},{anchor:"diffusers.LDMTextToImagePipeline.__call__.height",description:`<strong>height</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The height in pixels of the generated image.`,name:"height"},{anchor:"diffusers.LDMTextToImagePipeline.__call__.width",description:`<strong>width</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The width in pixels of the generated image.`,name:"width"},{anchor:"diffusers.LDMTextToImagePipeline.__call__.num_inference_steps",description:`<strong>num_inference_steps</strong> (<code>int</code>, <em>optional</em>, defaults to 50) &#x2014;
The number of denoising steps. More denoising steps usually lead to a higher quality image at the
expense of slower inference.`,name:"num_inference_steps"},{anchor:"diffusers.LDMTextToImagePipeline.__call__.guidance_scale",description:`<strong>guidance_scale</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Guidance scale as defined in <a href="https://arxiv.org/abs/2207.12598" rel="nofollow">Classifier-Free Diffusion Guidance</a>.
<code>guidance_scale</code> is defined as <code>w</code> of equation 2. of <a href="https://arxiv.org/pdf/2205.11487.pdf" rel="nofollow">Imagen
Paper</a>. Guidance scale is enabled by setting <code>guidance_scale &gt; 1</code>. Higher guidance scale encourages to generate images that are closely linked to the text <code>prompt</code> at
the, usually at the expense of lower image quality.`,name:"guidance_scale"},{anchor:"diffusers.LDMTextToImagePipeline.__call__.generator",description:`<strong>generator</strong> (<code>torch.Generator</code>, <em>optional</em>) &#x2014;
A <a href="https://pytorch.org/docs/stable/generated/torch.Generator.html" rel="nofollow">torch generator</a> to make generation
deterministic.`,name:"generator"},{anchor:"diffusers.LDMTextToImagePipeline.__call__.output_type",description:`<strong>output_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pil&quot;</code>) &#x2014;
The output format of the generate image. Choose between
<a href="https://pillow.readthedocs.io/en/stable/" rel="nofollow">PIL</a>: <code>PIL.Image.Image</code> or <code>np.array</code>.`,name:"output_type"},{anchor:"diffusers.LDMTextToImagePipeline.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.pipeline_utils.ImagePipelineOutput">ImagePipelineOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/latent_diffusion/pipeline_latent_diffusion.py#L50",returnDescription:`
<p><code>ImagePipelineOutput</code> if
<code>return_dict</code> is True, otherwise a \`tuple. When returning a tuple, the first element is a list with the
generated images.</p>
`,returnType:`
<p><a
  href="/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.pipeline_utils.ImagePipelineOutput"
>ImagePipelineOutput</a> or <code>tuple</code></p>
`}}),{c(){m=n("meta"),Me=l(),g=n("h1"),D=n("a"),le=n("span"),S(H.$$.fragment),tt=l(),de=n("span"),it=p("Latent Diffusion"),Le=l(),v=n("h2"),P=n("a"),fe=n("span"),S(z.$$.fragment),nt=l(),pe=n("span"),ot=p("Overview"),Ie=l(),$=n("p"),at=p("Latent Diffusion was proposed in "),U=n("a"),rt=p("High-Resolution Image Synthesis with Latent Diffusion Models"),st=p(" by Robin Rombach, Andreas Blattmann, Dominik Lorenz, Patrick Esser, Bj\xF6rn Ommer."),ke=l(),Y=n("p"),lt=p("The abstract of the paper is the following:"),Ae=l(),X=n("p"),ce=n("em"),dt=p("By decomposing the image formation process into a sequential application of denoising autoencoders, diffusion models (DMs) achieve state-of-the-art synthesis results on image data and beyond. Additionally, their formulation allows for a guiding mechanism to control the image generation process without retraining. However, since these models typically operate directly in pixel space, optimization of powerful DMs often consumes hundreds of GPU days and inference is expensive due to sequential evaluations. To enable DM training on limited computational resources while retaining their quality and flexibility, we apply them in the latent space of powerful pretrained autoencoders. In contrast to previous work, training diffusion models on such a representation allows for the first time to reach a near-optimal point between complexity reduction and detail preservation, greatly boosting visual fidelity. By introducing cross-attention layers into the model architecture, we turn diffusion models into powerful and flexible generators for general conditioning inputs such as text or bounding boxes and high-resolution synthesis becomes possible in a convolutional manner. Our latent diffusion models (LDMs) achieve a new state of the art for image inpainting and highly competitive performance on various tasks, including unconditional image generation, semantic scene synthesis, and super-resolution, while significantly reducing computational requirements compared to pixel-based DMs."),Se=l(),E=n("p"),ft=p("The original codebase can be found "),G=n("a"),pt=p("here"),ct=p("."),Ne=l(),_=n("h2"),M=n("a"),ue=n("span"),S(R.$$.fragment),ut=l(),he=n("span"),ht=p("Tips:"),qe=l(),h=n("ul"),Oe=n("li"),mt=l(),Be=n("li"),gt=l(),Ce=n("li"),He=l(),w=n("h2"),L=n("a"),me=n("span"),S(V.$$.fragment),vt=l(),ge=n("span"),_t=p("Available Pipelines:"),ze=l(),I=n("table"),ve=n("thead"),y=n("tr"),_e=n("th"),wt=p("Pipeline"),yt=l(),we=n("th"),bt=p("Tasks"),Tt=l(),Z=n("th"),xt=p("Colab"),Dt=l(),ye=n("tbody"),b=n("tr"),be=n("td"),Q=n("a"),Pt=p("pipeline_latent_diffusion.py"),$t=l(),Te=n("td"),xe=n("em"),Et=p("Text-to-Image Generation"),Mt=l(),ee=n("td"),Lt=p("-"),Ue=l(),T=n("h2"),k=n("a"),De=n("span"),S(j.$$.fragment),It=l(),Pe=n("span"),kt=p("Examples:"),Ge=l(),x=n("h2"),A=n("a"),$e=n("span"),S(W.$$.fragment),At=l(),Ee=n("span"),St=p("LDMTextToImagePipeline"),Re=l(),u=n("div"),S(F.$$.fragment),Nt=l(),J=n("p"),qt=p("This model inherits from "),te=n("a"),Ot=p("DiffusionPipeline"),Bt=p(`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),Ct=l(),ie=n("div"),S(K.$$.fragment),this.h()},l(e){const s=Pi('[data-svelte="svelte-1phssyn"]',document.head);m=o(s,"META",{name:!0,content:!0}),s.forEach(t),Me=d(e),g=o(e,"H1",{class:!0});var Qe=a(g);D=o(Qe,"A",{id:!0,class:!0,href:!0});var zt=a(D);le=o(zt,"SPAN",{});var Ut=a(le);N(H.$$.fragment,Ut),Ut.forEach(t),zt.forEach(t),tt=d(Qe),de=o(Qe,"SPAN",{});var Gt=a(de);it=c(Gt,"Latent Diffusion"),Gt.forEach(t),Qe.forEach(t),Le=d(e),v=o(e,"H2",{class:!0});var je=a(v);P=o(je,"A",{id:!0,class:!0,href:!0});var Rt=a(P);fe=o(Rt,"SPAN",{});var Vt=a(fe);N(z.$$.fragment,Vt),Vt.forEach(t),Rt.forEach(t),nt=d(je),pe=o(je,"SPAN",{});var Qt=a(pe);ot=c(Qt,"Overview"),Qt.forEach(t),je.forEach(t),Ie=d(e),$=o(e,"P",{});var We=a($);at=c(We,"Latent Diffusion was proposed in "),U=o(We,"A",{href:!0,rel:!0});var jt=a(U);rt=c(jt,"High-Resolution Image Synthesis with Latent Diffusion Models"),jt.forEach(t),st=c(We," by Robin Rombach, Andreas Blattmann, Dominik Lorenz, Patrick Esser, Bj\xF6rn Ommer."),We.forEach(t),ke=d(e),Y=o(e,"P",{});var Wt=a(Y);lt=c(Wt,"The abstract of the paper is the following:"),Wt.forEach(t),Ae=d(e),X=o(e,"P",{});var Ft=a(X);ce=o(Ft,"EM",{});var Jt=a(ce);dt=c(Jt,"By decomposing the image formation process into a sequential application of denoising autoencoders, diffusion models (DMs) achieve state-of-the-art synthesis results on image data and beyond. Additionally, their formulation allows for a guiding mechanism to control the image generation process without retraining. However, since these models typically operate directly in pixel space, optimization of powerful DMs often consumes hundreds of GPU days and inference is expensive due to sequential evaluations. To enable DM training on limited computational resources while retaining their quality and flexibility, we apply them in the latent space of powerful pretrained autoencoders. In contrast to previous work, training diffusion models on such a representation allows for the first time to reach a near-optimal point between complexity reduction and detail preservation, greatly boosting visual fidelity. By introducing cross-attention layers into the model architecture, we turn diffusion models into powerful and flexible generators for general conditioning inputs such as text or bounding boxes and high-resolution synthesis becomes possible in a convolutional manner. Our latent diffusion models (LDMs) achieve a new state of the art for image inpainting and highly competitive performance on various tasks, including unconditional image generation, semantic scene synthesis, and super-resolution, while significantly reducing computational requirements compared to pixel-based DMs."),Jt.forEach(t),Ft.forEach(t),Se=d(e),E=o(e,"P",{});var Fe=a(E);ft=c(Fe,"The original codebase can be found "),G=o(Fe,"A",{href:!0,rel:!0});var Kt=a(G);pt=c(Kt,"here"),Kt.forEach(t),ct=c(Fe,"."),Fe.forEach(t),Ne=d(e),_=o(e,"H2",{class:!0});var Je=a(_);M=o(Je,"A",{id:!0,class:!0,href:!0});var Yt=a(M);ue=o(Yt,"SPAN",{});var Xt=a(ue);N(R.$$.fragment,Xt),Xt.forEach(t),Yt.forEach(t),ut=d(Je),he=o(Je,"SPAN",{});var Zt=a(he);ht=c(Zt,"Tips:"),Zt.forEach(t),Je.forEach(t),qe=d(e),h=o(e,"UL",{});var ne=a(h);Oe=o(ne,"LI",{}),a(Oe).forEach(t),mt=d(ne),Be=o(ne,"LI",{}),a(Be).forEach(t),gt=d(ne),Ce=o(ne,"LI",{}),a(Ce).forEach(t),ne.forEach(t),He=d(e),w=o(e,"H2",{class:!0});var Ke=a(w);L=o(Ke,"A",{id:!0,class:!0,href:!0});var ei=a(L);me=o(ei,"SPAN",{});var ti=a(me);N(V.$$.fragment,ti),ti.forEach(t),ei.forEach(t),vt=d(Ke),ge=o(Ke,"SPAN",{});var ii=a(ge);_t=c(ii,"Available Pipelines:"),ii.forEach(t),Ke.forEach(t),ze=d(e),I=o(e,"TABLE",{});var Ye=a(I);ve=o(Ye,"THEAD",{});var ni=a(ve);y=o(ni,"TR",{});var oe=a(y);_e=o(oe,"TH",{});var oi=a(_e);wt=c(oi,"Pipeline"),oi.forEach(t),yt=d(oe),we=o(oe,"TH",{});var ai=a(we);bt=c(ai,"Tasks"),ai.forEach(t),Tt=d(oe),Z=o(oe,"TH",{align:!0});var ri=a(Z);xt=c(ri,"Colab"),ri.forEach(t),oe.forEach(t),ni.forEach(t),Dt=d(Ye),ye=o(Ye,"TBODY",{});var si=a(ye);b=o(si,"TR",{});var ae=a(b);be=o(ae,"TD",{});var li=a(be);Q=o(li,"A",{href:!0,rel:!0});var di=a(Q);Pt=c(di,"pipeline_latent_diffusion.py"),di.forEach(t),li.forEach(t),$t=d(ae),Te=o(ae,"TD",{});var fi=a(Te);xe=o(fi,"EM",{});var pi=a(xe);Et=c(pi,"Text-to-Image Generation"),pi.forEach(t),fi.forEach(t),Mt=d(ae),ee=o(ae,"TD",{align:!0});var ci=a(ee);Lt=c(ci,"-"),ci.forEach(t),ae.forEach(t),si.forEach(t),Ye.forEach(t),Ue=d(e),T=o(e,"H2",{class:!0});var Xe=a(T);k=o(Xe,"A",{id:!0,class:!0,href:!0});var ui=a(k);De=o(ui,"SPAN",{});var hi=a(De);N(j.$$.fragment,hi),hi.forEach(t),ui.forEach(t),It=d(Xe),Pe=o(Xe,"SPAN",{});var mi=a(Pe);kt=c(mi,"Examples:"),mi.forEach(t),Xe.forEach(t),Ge=d(e),x=o(e,"H2",{class:!0});var Ze=a(x);A=o(Ze,"A",{id:!0,class:!0,href:!0});var gi=a(A);$e=o(gi,"SPAN",{});var vi=a($e);N(W.$$.fragment,vi),vi.forEach(t),gi.forEach(t),At=d(Ze),Ee=o(Ze,"SPAN",{});var _i=a(Ee);St=c(_i,"LDMTextToImagePipeline"),_i.forEach(t),Ze.forEach(t),Re=d(e),u=o(e,"DIV",{class:!0});var re=a(u);N(F.$$.fragment,re),Nt=d(re),J=o(re,"P",{});var et=a(J);qt=c(et,"This model inherits from "),te=o(et,"A",{href:!0});var wi=a(te);Ot=c(wi,"DiffusionPipeline"),wi.forEach(t),Bt=c(et,`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),et.forEach(t),Ct=d(re),ie=o(re,"DIV",{class:!0});var yi=a(ie);N(K.$$.fragment,yi),yi.forEach(t),re.forEach(t),this.h()},h(){r(m,"name","hf:doc:metadata"),r(m,"content",JSON.stringify(Li)),r(D,"id","latent-diffusion"),r(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(D,"href","#latent-diffusion"),r(g,"class","relative group"),r(P,"id","overview"),r(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(P,"href","#overview"),r(v,"class","relative group"),r(U,"href","https://arxiv.org/abs/2112.10752"),r(U,"rel","nofollow"),r(G,"href","https://github.com/CompVis/latent-diffusion"),r(G,"rel","nofollow"),r(M,"id","tips"),r(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(M,"href","#tips"),r(_,"class","relative group"),r(L,"id","available-pipelines"),r(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(L,"href","#available-pipelines"),r(w,"class","relative group"),r(Z,"align","center"),r(Q,"href","https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/latent_diffusion/pipeline_latent_diffusion.py"),r(Q,"rel","nofollow"),r(ee,"align","center"),r(k,"id","examples"),r(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(k,"href","#examples"),r(T,"class","relative group"),r(A,"id","diffusers.LDMTextToImagePipeline"),r(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(A,"href","#diffusers.LDMTextToImagePipeline"),r(x,"class","relative group"),r(te,"href","/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),r(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),r(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,s){i(document.head,m),f(e,Me,s),f(e,g,s),i(g,D),i(D,le),q(H,le,null),i(g,tt),i(g,de),i(de,it),f(e,Le,s),f(e,v,s),i(v,P),i(P,fe),q(z,fe,null),i(v,nt),i(v,pe),i(pe,ot),f(e,Ie,s),f(e,$,s),i($,at),i($,U),i(U,rt),i($,st),f(e,ke,s),f(e,Y,s),i(Y,lt),f(e,Ae,s),f(e,X,s),i(X,ce),i(ce,dt),f(e,Se,s),f(e,E,s),i(E,ft),i(E,G),i(G,pt),i(E,ct),f(e,Ne,s),f(e,_,s),i(_,M),i(M,ue),q(R,ue,null),i(_,ut),i(_,he),i(he,ht),f(e,qe,s),f(e,h,s),i(h,Oe),i(h,mt),i(h,Be),i(h,gt),i(h,Ce),f(e,He,s),f(e,w,s),i(w,L),i(L,me),q(V,me,null),i(w,vt),i(w,ge),i(ge,_t),f(e,ze,s),f(e,I,s),i(I,ve),i(ve,y),i(y,_e),i(_e,wt),i(y,yt),i(y,we),i(we,bt),i(y,Tt),i(y,Z),i(Z,xt),i(I,Dt),i(I,ye),i(ye,b),i(b,be),i(be,Q),i(Q,Pt),i(b,$t),i(b,Te),i(Te,xe),i(xe,Et),i(b,Mt),i(b,ee),i(ee,Lt),f(e,Ue,s),f(e,T,s),i(T,k),i(k,De),q(j,De,null),i(T,It),i(T,Pe),i(Pe,kt),f(e,Ge,s),f(e,x,s),i(x,A),i(A,$e),q(W,$e,null),i(x,At),i(x,Ee),i(Ee,St),f(e,Re,s),f(e,u,s),q(F,u,null),i(u,Nt),i(u,J),i(J,qt),i(J,te),i(te,Ot),i(J,Bt),i(u,Ct),i(u,ie),q(K,ie,null),Ve=!0},p:$i,i(e){Ve||(O(H.$$.fragment,e),O(z.$$.fragment,e),O(R.$$.fragment,e),O(V.$$.fragment,e),O(j.$$.fragment,e),O(W.$$.fragment,e),O(F.$$.fragment,e),O(K.$$.fragment,e),Ve=!0)},o(e){B(H.$$.fragment,e),B(z.$$.fragment,e),B(R.$$.fragment,e),B(V.$$.fragment,e),B(j.$$.fragment,e),B(W.$$.fragment,e),B(F.$$.fragment,e),B(K.$$.fragment,e),Ve=!1},d(e){t(m),e&&t(Me),e&&t(g),C(H),e&&t(Le),e&&t(v),C(z),e&&t(Ie),e&&t($),e&&t(ke),e&&t(Y),e&&t(Ae),e&&t(X),e&&t(Se),e&&t(E),e&&t(Ne),e&&t(_),C(R),e&&t(qe),e&&t(h),e&&t(He),e&&t(w),C(V),e&&t(ze),e&&t(I),e&&t(Ue),e&&t(T),C(j),e&&t(Ge),e&&t(x),C(W),e&&t(Re),e&&t(u),C(F),C(K)}}}const Li={local:"latent-diffusion",sections:[{local:"overview",title:"Overview"},{local:"tips",title:"Tips:"},{local:"available-pipelines",title:"Available Pipelines:"},{local:"examples",title:"Examples:"},{local:"diffusers.LDMTextToImagePipeline",title:"LDMTextToImagePipeline"}],title:"Latent Diffusion"};function Ii(Ht){return Ei(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ni extends Ti{constructor(m){super();xi(this,m,Ii,Mi,Di,{})}}export{Ni as default,Li as metadata};
