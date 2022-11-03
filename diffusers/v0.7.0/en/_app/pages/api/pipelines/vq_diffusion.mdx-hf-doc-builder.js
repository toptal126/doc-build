import{S as Yt,i as Zt,s as jt,e as o,k as l,w as U,t as d,M as Kt,c as n,d as i,m as f,a,x as J,h as c,b as r,G as t,g as p,y as Y,L as Xt,q as Z,o as j,B as K,v as ei}from"../../../chunks/vendor-hf-doc-builder.js";import{D as Jt}from"../../../chunks/Docstring-hf-doc-builder.js";import{I as ze}from"../../../chunks/IconCopyLink-hf-doc-builder.js";function ti(_t){let h,ge,m,y,X,$,Me,ee,Le,ve,g,D,te,k,Se,ie,Oe,_e,A,q,Ne,Ge,be,N,Fe,we,G,We,ye,P,Be,C,Re,He,De,v,x,oe,I,Ue,ne,Je,Pe,V,ae,_,re,Ye,Ze,se,je,Ke,F,Xe,et,le,b,fe,z,tt,it,de,ce,ot,nt,W,at,xe,w,T,pe,M,rt,ue,st,Ve,u,L,lt,he,ft,dt,S,ct,B,pt,ut,ht,Q,O,mt,me,gt,Te;return $=new ze({}),k=new ze({}),I=new ze({}),M=new ze({}),L=new Jt({props:{name:"class diffusers.VQDiffusionPipeline",anchor:"diffusers.VQDiffusionPipeline",parameters:[{name:"vqvae",val:": VQModel"},{name:"text_encoder",val:": CLIPTextModel"},{name:"tokenizer",val:": CLIPTokenizer"},{name:"transformer",val:": Transformer2DModel"},{name:"scheduler",val:": VQDiffusionScheduler"}],parametersDescription:[{anchor:"diffusers.VQDiffusionPipeline.vqvae",description:`<strong>vqvae</strong> (<a href="/docs/diffusers/v0.7.0/en/api/models#diffusers.VQModel">VQModel</a>) &#x2014;
Vector Quantized Variational Auto-Encoder (VAE) Model to encode and decode images to and from latent
representations.`,name:"vqvae"},{anchor:"diffusers.VQDiffusionPipeline.text_encoder",description:`<strong>text_encoder</strong> (<code>CLIPTextModel</code>) &#x2014;
Frozen text-encoder. VQ Diffusion uses the text portion of
<a href="https://huggingface.co/docs/transformers/model_doc/clip#transformers.CLIPTextModel" rel="nofollow">CLIP</a>, specifically
the <a href="https://huggingface.co/openai/clip-vit-base-patch32" rel="nofollow">clip-vit-base-patch32</a> variant.`,name:"text_encoder"},{anchor:"diffusers.VQDiffusionPipeline.tokenizer",description:`<strong>tokenizer</strong> (<code>CLIPTokenizer</code>) &#x2014;
Tokenizer of class
<a href="https://huggingface.co/docs/transformers/v4.21.0/en/model_doc/clip#transformers.CLIPTokenizer" rel="nofollow">CLIPTokenizer</a>.`,name:"tokenizer"},{anchor:"diffusers.VQDiffusionPipeline.transformer",description:`<strong>transformer</strong> (<a href="/docs/diffusers/v0.7.0/en/api/models#diffusers.Transformer2DModel">Transformer2DModel</a>) &#x2014;
Conditional transformer to denoise the encoded image latents.`,name:"transformer"},{anchor:"diffusers.VQDiffusionPipeline.scheduler",description:`<strong>scheduler</strong> (<a href="/docs/diffusers/v0.7.0/en/api/schedulers#diffusers.VQDiffusionScheduler">VQDiffusionScheduler</a>) &#x2014;
A scheduler to be used in combination with <code>transformer</code> to denoise the encoded image latents.`,name:"scheduler"}],source:"https://github.com/huggingface/diffusers/blob/v0.7.0/src/diffusers/pipelines/vq_diffusion/pipeline_vq_diffusion.py#L30"}}),O=new Jt({props:{name:"__call__",anchor:"diffusers.VQDiffusionPipeline.__call__",parameters:[{name:"prompt",val:": typing.Union[str, typing.List[str]]"},{name:"num_inference_steps",val:": int = 100"},{name:"truncation_rate",val:": float = 1.0"},{name:"num_images_per_prompt",val:": int = 1"},{name:"generator",val:": typing.Optional[torch._C.Generator] = None"},{name:"latents",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_type",val:": typing.Optional[str] = 'pil'"},{name:"return_dict",val:": bool = True"},{name:"callback",val:": typing.Union[typing.Callable[[int, int, torch.FloatTensor], NoneType], NoneType] = None"},{name:"callback_steps",val:": typing.Optional[int] = 1"}],parametersDescription:[{anchor:"diffusers.VQDiffusionPipeline.__call__.prompt",description:`<strong>prompt</strong> (<code>str</code> or <code>List[str]</code>) &#x2014;
The prompt or prompts to guide the image generation.`,name:"prompt"},{anchor:"diffusers.VQDiffusionPipeline.__call__.num_inference_steps",description:`<strong>num_inference_steps</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
The number of denoising steps. More denoising steps usually lead to a higher quality image at the
expense of slower inference.`,name:"num_inference_steps"},{anchor:"diffusers.VQDiffusionPipeline.__call__.truncation_rate",description:`<strong>truncation_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0 (equivalent to no truncation)) &#x2014;
Used to &#x201C;truncate&#x201D; the predicted classes for x_0 such that the cumulative probability for a pixel is at
most <code>truncation_rate</code>. The lowest probabilities that would increase the cumulative probability above
<code>truncation_rate</code> are set to zero.`,name:"truncation_rate"},{anchor:"diffusers.VQDiffusionPipeline.__call__.num_images_per_prompt",description:`<strong>num_images_per_prompt</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of images to generate per prompt.`,name:"num_images_per_prompt"},{anchor:"diffusers.VQDiffusionPipeline.__call__.generator",description:`<strong>generator</strong> (<code>torch.Generator</code>, <em>optional</em>) &#x2014;
A <a href="https://pytorch.org/docs/stable/generated/torch.Generator.html" rel="nofollow">torch generator</a> to make generation
deterministic.`,name:"generator"},{anchor:"diffusers.VQDiffusionPipeline.__call__.latents",description:`<strong>latents</strong> (<code>torch.FloatTensor</code> of shape (batch), <em>optional</em>) &#x2014;
Pre-generated noisy latents to be used as inputs for image generation. Must be valid embedding indices.
Can be used to tweak the same generation with different prompts. If not provided, a latents tensor will
be generated of completely masked latent pixels.`,name:"latents"},{anchor:"diffusers.VQDiffusionPipeline.__call__.output_type",description:`<strong>output_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pil&quot;</code>) &#x2014;
The output format of the generated image. Choose between
<a href="https://pillow.readthedocs.io/en/stable/" rel="nofollow">PIL</a>: <code>PIL.Image.Image</code> or <code>np.array</code>.`,name:"output_type"},{anchor:"diffusers.VQDiffusionPipeline.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to return a <a href="/docs/diffusers/v0.7.0/en/api/diffusion_pipeline#diffusers.pipeline_utils.ImagePipelineOutput">ImagePipelineOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"diffusers.VQDiffusionPipeline.__call__.callback",description:`<strong>callback</strong> (<code>Callable</code>, <em>optional</em>) &#x2014;
A function that will be called every <code>callback_steps</code> steps during inference. The function will be
called with the following arguments: <code>callback(step: int, timestep: int, latents: torch.FloatTensor)</code>.`,name:"callback"},{anchor:"diffusers.VQDiffusionPipeline.__call__.callback_steps",description:`<strong>callback_steps</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The frequency at which the <code>callback</code> function will be called. If not specified, the callback will be
called at every step.`,name:"callback_steps"}],source:"https://github.com/huggingface/diffusers/blob/v0.7.0/src/diffusers/pipelines/vq_diffusion/pipeline_vq_diffusion.py#L78",returnDescription:`
<p><code>~ pipeline_utils.ImagePipelineOutput </code> if
<code>return_dict</code> is True, otherwise a \`tuple. When returning a tuple, the first element is a list with the
generated images.</p>
`,returnType:`
<p><a
  href="/docs/diffusers/v0.7.0/en/api/diffusion_pipeline#diffusers.pipeline_utils.ImagePipelineOutput"
>ImagePipelineOutput</a> or <code>tuple</code></p>
`}}),{c(){h=o("meta"),ge=l(),m=o("h1"),y=o("a"),X=o("span"),U($.$$.fragment),Me=l(),ee=o("span"),Le=d("VQDiffusion"),ve=l(),g=o("h2"),D=o("a"),te=o("span"),U(k.$$.fragment),Se=l(),ie=o("span"),Oe=d("Overview"),_e=l(),A=o("p"),q=o("a"),Ne=d("Vector Quantized Diffusion Model for Text-to-Image Synthesis"),Ge=d(" by Shuyang Gu, Dong Chen, Jianmin Bao, Fang Wen, Bo Zhang, Dongdong Chen, Lu Yuan, Baining Guo"),be=l(),N=o("p"),Fe=d("The abstract of the paper is the following:"),we=l(),G=o("p"),We=d("We present the vector quantized diffusion (VQ-Diffusion) model for text-to-image generation. This method is based on a vector quantized variational autoencoder (VQ-VAE) whose latent space is modeled by a conditional variant of the recently developed Denoising Diffusion Probabilistic Model (DDPM). We find that this latent-space method is well-suited for text-to-image generation tasks because it not only eliminates the unidirectional bias with existing methods but also allows us to incorporate a mask-and-replace diffusion strategy to avoid the accumulation of errors, which is a serious problem with existing methods. Our experiments show that the VQ-Diffusion produces significantly better text-to-image generation results when compared with conventional autoregressive (AR) models with similar numbers of parameters. Compared with previous GAN-based text-to-image methods, our VQ-Diffusion can handle more complex scenes and improve the synthesized image quality by a large margin. Finally, we show that the image generation computation in our method can be made highly efficient by reparameterization. With traditional AR methods, the text-to-image generation time increases linearly with the output image resolution and hence is quite time consuming even for normal size images. The VQ-Diffusion allows us to achieve a better trade-off between quality and speed. Our experiments indicate that the VQ-Diffusion model with the reparameterization is fifteen times faster than traditional AR methods while achieving a better image quality."),ye=l(),P=o("p"),Be=d("The original codebase can be found "),C=o("a"),Re=d("here"),He=d("."),De=l(),v=o("h2"),x=o("a"),oe=o("span"),U(I.$$.fragment),Ue=l(),ne=o("span"),Je=d("Available Pipelines:"),Pe=l(),V=o("table"),ae=o("thead"),_=o("tr"),re=o("th"),Ye=d("Pipeline"),Ze=l(),se=o("th"),je=d("Tasks"),Ke=l(),F=o("th"),Xe=d("Colab"),et=l(),le=o("tbody"),b=o("tr"),fe=o("td"),z=o("a"),tt=d("pipeline_vq_diffusion.py"),it=l(),de=o("td"),ce=o("em"),ot=d("Text-to-Image Generation"),nt=l(),W=o("td"),at=d("-"),xe=l(),w=o("h2"),T=o("a"),pe=o("span"),U(M.$$.fragment),rt=l(),ue=o("span"),st=d("VQDiffusionPipeline"),Ve=l(),u=o("div"),U(L.$$.fragment),lt=l(),he=o("p"),ft=d("Pipeline for text-to-image generation using VQ Diffusion"),dt=l(),S=o("p"),ct=d("This model inherits from "),B=o("a"),pt=d("DiffusionPipeline"),ut=d(`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),ht=l(),Q=o("div"),U(O.$$.fragment),mt=l(),me=o("p"),gt=d("Function invoked when calling the pipeline for generation."),this.h()},l(e){const s=Kt('[data-svelte="svelte-1phssyn"]',document.head);h=n(s,"META",{name:!0,content:!0}),s.forEach(i),ge=f(e),m=n(e,"H1",{class:!0});var Qe=a(m);y=n(Qe,"A",{id:!0,class:!0,href:!0});var bt=a(y);X=n(bt,"SPAN",{});var wt=a(X);J($.$$.fragment,wt),wt.forEach(i),bt.forEach(i),Me=f(Qe),ee=n(Qe,"SPAN",{});var yt=a(ee);Le=c(yt,"VQDiffusion"),yt.forEach(i),Qe.forEach(i),ve=f(e),g=n(e,"H2",{class:!0});var Ee=a(g);D=n(Ee,"A",{id:!0,class:!0,href:!0});var Dt=a(D);te=n(Dt,"SPAN",{});var Pt=a(te);J(k.$$.fragment,Pt),Pt.forEach(i),Dt.forEach(i),Se=f(Ee),ie=n(Ee,"SPAN",{});var xt=a(ie);Oe=c(xt,"Overview"),xt.forEach(i),Ee.forEach(i),_e=f(e),A=n(e,"P",{});var vt=a(A);q=n(vt,"A",{href:!0,rel:!0});var Vt=a(q);Ne=c(Vt,"Vector Quantized Diffusion Model for Text-to-Image Synthesis"),Vt.forEach(i),Ge=c(vt," by Shuyang Gu, Dong Chen, Jianmin Bao, Fang Wen, Bo Zhang, Dongdong Chen, Lu Yuan, Baining Guo"),vt.forEach(i),be=f(e),N=n(e,"P",{});var Tt=a(N);Fe=c(Tt,"The abstract of the paper is the following:"),Tt.forEach(i),we=f(e),G=n(e,"P",{});var Qt=a(G);We=c(Qt,"We present the vector quantized diffusion (VQ-Diffusion) model for text-to-image generation. This method is based on a vector quantized variational autoencoder (VQ-VAE) whose latent space is modeled by a conditional variant of the recently developed Denoising Diffusion Probabilistic Model (DDPM). We find that this latent-space method is well-suited for text-to-image generation tasks because it not only eliminates the unidirectional bias with existing methods but also allows us to incorporate a mask-and-replace diffusion strategy to avoid the accumulation of errors, which is a serious problem with existing methods. Our experiments show that the VQ-Diffusion produces significantly better text-to-image generation results when compared with conventional autoregressive (AR) models with similar numbers of parameters. Compared with previous GAN-based text-to-image methods, our VQ-Diffusion can handle more complex scenes and improve the synthesized image quality by a large margin. Finally, we show that the image generation computation in our method can be made highly efficient by reparameterization. With traditional AR methods, the text-to-image generation time increases linearly with the output image resolution and hence is quite time consuming even for normal size images. The VQ-Diffusion allows us to achieve a better trade-off between quality and speed. Our experiments indicate that the VQ-Diffusion model with the reparameterization is fifteen times faster than traditional AR methods while achieving a better image quality."),Qt.forEach(i),ye=f(e),P=n(e,"P",{});var $e=a(P);Be=c($e,"The original codebase can be found "),C=n($e,"A",{href:!0,rel:!0});var Et=a(C);Re=c(Et,"here"),Et.forEach(i),He=c($e,"."),$e.forEach(i),De=f(e),v=n(e,"H2",{class:!0});var ke=a(v);x=n(ke,"A",{id:!0,class:!0,href:!0});var $t=a(x);oe=n($t,"SPAN",{});var kt=a(oe);J(I.$$.fragment,kt),kt.forEach(i),$t.forEach(i),Ue=f(ke),ne=n(ke,"SPAN",{});var At=a(ne);Je=c(At,"Available Pipelines:"),At.forEach(i),ke.forEach(i),Pe=f(e),V=n(e,"TABLE",{});var Ae=a(V);ae=n(Ae,"THEAD",{});var qt=a(ae);_=n(qt,"TR",{});var R=a(_);re=n(R,"TH",{});var Ct=a(re);Ye=c(Ct,"Pipeline"),Ct.forEach(i),Ze=f(R),se=n(R,"TH",{});var It=a(se);je=c(It,"Tasks"),It.forEach(i),Ke=f(R),F=n(R,"TH",{align:!0});var zt=a(F);Xe=c(zt,"Colab"),zt.forEach(i),R.forEach(i),qt.forEach(i),et=f(Ae),le=n(Ae,"TBODY",{});var Mt=a(le);b=n(Mt,"TR",{});var H=a(b);fe=n(H,"TD",{});var Lt=a(fe);z=n(Lt,"A",{href:!0,rel:!0});var St=a(z);tt=c(St,"pipeline_vq_diffusion.py"),St.forEach(i),Lt.forEach(i),it=f(H),de=n(H,"TD",{});var Ot=a(de);ce=n(Ot,"EM",{});var Nt=a(ce);ot=c(Nt,"Text-to-Image Generation"),Nt.forEach(i),Ot.forEach(i),nt=f(H),W=n(H,"TD",{align:!0});var Gt=a(W);at=c(Gt,"-"),Gt.forEach(i),H.forEach(i),Mt.forEach(i),Ae.forEach(i),xe=f(e),w=n(e,"H2",{class:!0});var qe=a(w);T=n(qe,"A",{id:!0,class:!0,href:!0});var Ft=a(T);pe=n(Ft,"SPAN",{});var Wt=a(pe);J(M.$$.fragment,Wt),Wt.forEach(i),Ft.forEach(i),rt=f(qe),ue=n(qe,"SPAN",{});var Bt=a(ue);st=c(Bt,"VQDiffusionPipeline"),Bt.forEach(i),qe.forEach(i),Ve=f(e),u=n(e,"DIV",{class:!0});var E=a(u);J(L.$$.fragment,E),lt=f(E),he=n(E,"P",{});var Rt=a(he);ft=c(Rt,"Pipeline for text-to-image generation using VQ Diffusion"),Rt.forEach(i),dt=f(E),S=n(E,"P",{});var Ce=a(S);ct=c(Ce,"This model inherits from "),B=n(Ce,"A",{href:!0});var Ht=a(B);pt=c(Ht,"DiffusionPipeline"),Ht.forEach(i),ut=c(Ce,`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),Ce.forEach(i),ht=f(E),Q=n(E,"DIV",{class:!0});var Ie=a(Q);J(O.$$.fragment,Ie),mt=f(Ie),me=n(Ie,"P",{});var Ut=a(me);gt=c(Ut,"Function invoked when calling the pipeline for generation."),Ut.forEach(i),Ie.forEach(i),E.forEach(i),this.h()},h(){r(h,"name","hf:doc:metadata"),r(h,"content",JSON.stringify(ii)),r(y,"id","vqdiffusion"),r(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(y,"href","#vqdiffusion"),r(m,"class","relative group"),r(D,"id","overview"),r(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(D,"href","#overview"),r(g,"class","relative group"),r(q,"href","https://arxiv.org/abs/2111.14822"),r(q,"rel","nofollow"),r(C,"href","https://github.com/microsoft/VQ-Diffusion"),r(C,"rel","nofollow"),r(x,"id","available-pipelines"),r(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(x,"href","#available-pipelines"),r(v,"class","relative group"),r(F,"align","center"),r(z,"href","https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/vq_diffusion/pipeline_vq_diffusion.py"),r(z,"rel","nofollow"),r(W,"align","center"),r(T,"id","diffusers.VQDiffusionPipeline"),r(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(T,"href","#diffusers.VQDiffusionPipeline"),r(w,"class","relative group"),r(B,"href","/docs/diffusers/v0.7.0/en/using-diffusers/loading#diffusers.DiffusionPipeline"),r(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),r(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,s){t(document.head,h),p(e,ge,s),p(e,m,s),t(m,y),t(y,X),Y($,X,null),t(m,Me),t(m,ee),t(ee,Le),p(e,ve,s),p(e,g,s),t(g,D),t(D,te),Y(k,te,null),t(g,Se),t(g,ie),t(ie,Oe),p(e,_e,s),p(e,A,s),t(A,q),t(q,Ne),t(A,Ge),p(e,be,s),p(e,N,s),t(N,Fe),p(e,we,s),p(e,G,s),t(G,We),p(e,ye,s),p(e,P,s),t(P,Be),t(P,C),t(C,Re),t(P,He),p(e,De,s),p(e,v,s),t(v,x),t(x,oe),Y(I,oe,null),t(v,Ue),t(v,ne),t(ne,Je),p(e,Pe,s),p(e,V,s),t(V,ae),t(ae,_),t(_,re),t(re,Ye),t(_,Ze),t(_,se),t(se,je),t(_,Ke),t(_,F),t(F,Xe),t(V,et),t(V,le),t(le,b),t(b,fe),t(fe,z),t(z,tt),t(b,it),t(b,de),t(de,ce),t(ce,ot),t(b,nt),t(b,W),t(W,at),p(e,xe,s),p(e,w,s),t(w,T),t(T,pe),Y(M,pe,null),t(w,rt),t(w,ue),t(ue,st),p(e,Ve,s),p(e,u,s),Y(L,u,null),t(u,lt),t(u,he),t(he,ft),t(u,dt),t(u,S),t(S,ct),t(S,B),t(B,pt),t(S,ut),t(u,ht),t(u,Q),Y(O,Q,null),t(Q,mt),t(Q,me),t(me,gt),Te=!0},p:Xt,i(e){Te||(Z($.$$.fragment,e),Z(k.$$.fragment,e),Z(I.$$.fragment,e),Z(M.$$.fragment,e),Z(L.$$.fragment,e),Z(O.$$.fragment,e),Te=!0)},o(e){j($.$$.fragment,e),j(k.$$.fragment,e),j(I.$$.fragment,e),j(M.$$.fragment,e),j(L.$$.fragment,e),j(O.$$.fragment,e),Te=!1},d(e){i(h),e&&i(ge),e&&i(m),K($),e&&i(ve),e&&i(g),K(k),e&&i(_e),e&&i(A),e&&i(be),e&&i(N),e&&i(we),e&&i(G),e&&i(ye),e&&i(P),e&&i(De),e&&i(v),K(I),e&&i(Pe),e&&i(V),e&&i(xe),e&&i(w),K(M),e&&i(Ve),e&&i(u),K(L),K(O)}}}const ii={local:"vqdiffusion",sections:[{local:"overview",title:"Overview"},{local:"available-pipelines",title:"Available Pipelines:"},{local:"diffusers.VQDiffusionPipeline",title:"VQDiffusionPipeline"}],title:"VQDiffusion"};function oi(_t){return ei(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class si extends Yt{constructor(h){super();Zt(this,h,oi,ti,jt,{})}}export{si as default,ii as metadata};
