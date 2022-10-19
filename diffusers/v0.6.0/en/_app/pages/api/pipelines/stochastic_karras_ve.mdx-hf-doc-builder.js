import{S as Ft,i as Rt,s as zt,e as r,k as l,w as W,t as h,M as Wt,c as i,d as a,m as c,a as s,x as Y,h as p,b as o,G as t,g as f,y as J,L as Yt,q as j,o as Q,B as X,v as Jt}from"../../../chunks/vendor-hf-doc-builder.js";import{D as Bt}from"../../../chunks/Docstring-hf-doc-builder.js";import{I as De}from"../../../chunks/IconCopyLink-hf-doc-builder.js";function jt(ft){let u,ge,m,y,Z,V,Ie,ee,Ne,ve,g,E,te,x,Me,ae,Oe,_e,A,K,qe,Ge,be,L,Le,we,U,Ue,ye,C,Ce,Ee,v,$,re,D,He,ie,Be,$e,P,se,_,oe,Fe,Re,ne,ze,We,H,Ye,Je,le,b,ce,I,je,Qe,he,pe,Xe,Ze,B,et,Pe,w,k,fe,N,tt,de,at,ke,d,M,rt,ue,it,st,T,ot,O,nt,lt,q,ct,ht,F,G,Te;return V=new De({}),x=new De({}),D=new De({}),N=new De({}),M=new Bt({props:{name:"class diffusers.KarrasVePipeline",anchor:"diffusers.KarrasVePipeline",parameters:[{name:"unet",val:": UNet2DModel"},{name:"scheduler",val:": KarrasVeScheduler"}],parametersDescription:[{anchor:"diffusers.KarrasVePipeline.unet",description:'<strong>unet</strong> (<a href="/docs/diffusers/v0.6.0/en/api/models#diffusers.UNet2DModel">UNet2DModel</a>) &#x2014; U-Net architecture to denoise the encoded image.',name:"unet"},{anchor:"diffusers.KarrasVePipeline.scheduler",description:`<strong>scheduler</strong> (<a href="/docs/diffusers/v0.6.0/en/api/schedulers#diffusers.KarrasVeScheduler">KarrasVeScheduler</a>) &#x2014;
Scheduler for the diffusion process to be used in combination with <code>unet</code> to denoise the encoded image.`,name:"scheduler"}],source:"https://github.com/huggingface/diffusers/blob/v0.6.0/src/diffusers/pipelines/stochastic_karras_ve/pipeline_stochastic_karras_ve.py#L11"}}),G=new Bt({props:{name:"__call__",anchor:"diffusers.KarrasVePipeline.__call__",parameters:[{name:"batch_size",val:": int = 1"},{name:"num_inference_steps",val:": int = 50"},{name:"generator",val:": typing.Optional[torch._C.Generator] = None"},{name:"output_type",val:": typing.Optional[str] = 'pil'"},{name:"return_dict",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"diffusers.KarrasVePipeline.__call__.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of images to generate.`,name:"batch_size"},{anchor:"diffusers.KarrasVePipeline.__call__.generator",description:`<strong>generator</strong> (<code>torch.Generator</code>, <em>optional</em>) &#x2014;
A <a href="https://pytorch.org/docs/stable/generated/torch.Generator.html" rel="nofollow">torch generator</a> to make generation
deterministic.`,name:"generator"},{anchor:"diffusers.KarrasVePipeline.__call__.num_inference_steps",description:`<strong>num_inference_steps</strong> (<code>int</code>, <em>optional</em>, defaults to 50) &#x2014;
The number of denoising steps. More denoising steps usually lead to a higher quality image at the
expense of slower inference.`,name:"num_inference_steps"},{anchor:"diffusers.KarrasVePipeline.__call__.output_type",description:`<strong>output_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pil&quot;</code>) &#x2014;
The output format of the generate image. Choose between
<a href="https://pillow.readthedocs.io/en/stable/" rel="nofollow">PIL</a>: <code>PIL.Image.Image</code> or <code>np.array</code>.`,name:"output_type"},{anchor:"diffusers.KarrasVePipeline.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to return a <a href="/docs/diffusers/v0.6.0/en/api/diffusion_pipeline#diffusers.pipeline_utils.ImagePipelineOutput">ImagePipelineOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/diffusers/blob/v0.6.0/src/diffusers/pipelines/stochastic_karras_ve/pipeline_stochastic_karras_ve.py#L34",returnDescription:`
<p><code>~pipelines.utils.ImagePipelineOutput</code> if
<code>return_dict</code> is True, otherwise a \`tuple. When returning a tuple, the first element is a list with the
generated images.</p>
`,returnType:`
<p><a
  href="/docs/diffusers/v0.6.0/en/api/diffusion_pipeline#diffusers.pipeline_utils.ImagePipelineOutput"
>ImagePipelineOutput</a> or <code>tuple</code></p>
`}}),{c(){u=r("meta"),ge=l(),m=r("h1"),y=r("a"),Z=r("span"),W(V.$$.fragment),Ie=l(),ee=r("span"),Ne=h("Stochastic Karras VE"),ve=l(),g=r("h2"),E=r("a"),te=r("span"),W(x.$$.fragment),Me=l(),ae=r("span"),Oe=h("Overview"),_e=l(),A=r("p"),K=r("a"),qe=h("Elucidating the Design Space of Diffusion-Based Generative Models"),Ge=h(" by Tero Karras, Miika Aittala, Timo Aila and Samuli Laine."),be=l(),L=r("p"),Le=h("The abstract of the paper is the following:"),we=l(),U=r("p"),Ue=h("We argue that the theory and practice of diffusion-based generative models are currently unnecessarily convoluted and seek to remedy the situation by presenting a design space that clearly separates the concrete design choices. This lets us identify several changes to both the sampling and training processes, as well as preconditioning of the score networks. Together, our improvements yield new state-of-the-art FID of 1.79 for CIFAR-10 in a class-conditional setting and 1.97 in an unconditional setting, with much faster sampling (35 network evaluations per image) than prior designs. To further demonstrate their modular nature, we show that our design changes dramatically improve both the efficiency and quality obtainable with pre-trained score networks from previous work, including improving the FID of an existing ImageNet-64 model from 2.07 to near-SOTA 1.55."),ye=l(),C=r("p"),Ce=h("This pipeline implements the Stochastic sampling tailored to the Variance-Expanding (VE) models."),Ee=l(),v=r("h2"),$=r("a"),re=r("span"),W(D.$$.fragment),He=l(),ie=r("span"),Be=h("Available Pipelines:"),$e=l(),P=r("table"),se=r("thead"),_=r("tr"),oe=r("th"),Fe=h("Pipeline"),Re=l(),ne=r("th"),ze=h("Tasks"),We=l(),H=r("th"),Ye=h("Colab"),Je=l(),le=r("tbody"),b=r("tr"),ce=r("td"),I=r("a"),je=h("pipeline_stochastic_karras_ve.py"),Qe=l(),he=r("td"),pe=r("em"),Xe=h("Unconditional Image Generation"),Ze=l(),B=r("td"),et=h("-"),Pe=l(),w=r("h2"),k=r("a"),fe=r("span"),W(N.$$.fragment),tt=l(),de=r("span"),at=h("KarrasVePipeline"),ke=l(),d=r("div"),W(M.$$.fragment),rt=l(),ue=r("p"),it=h(`Stochastic sampling from Karras et al. [1] tailored to the Variance-Expanding (VE) models [2]. Use Algorithm 2 and
the VE column of Table 1 from [1] for reference.`),st=l(),T=r("p"),ot=h(`[1] Karras, Tero, et al. \u201CElucidating the Design Space of Diffusion-Based Generative Models.\u201D
`),O=r("a"),nt=h("https://arxiv.org/abs/2206.00364"),lt=h(` [2] Song, Yang, et al. \u201CScore-based generative modeling through stochastic
differential equations.\u201D `),q=r("a"),ct=h("https://arxiv.org/abs/2011.13456"),ht=l(),F=r("div"),W(G.$$.fragment),this.h()},l(e){const n=Wt('[data-svelte="svelte-1phssyn"]',document.head);u=i(n,"META",{name:!0,content:!0}),n.forEach(a),ge=c(e),m=i(e,"H1",{class:!0});var Se=s(m);y=i(Se,"A",{id:!0,class:!0,href:!0});var dt=s(y);Z=i(dt,"SPAN",{});var ut=s(Z);Y(V.$$.fragment,ut),ut.forEach(a),dt.forEach(a),Ie=c(Se),ee=i(Se,"SPAN",{});var mt=s(ee);Ne=p(mt,"Stochastic Karras VE"),mt.forEach(a),Se.forEach(a),ve=c(e),g=i(e,"H2",{class:!0});var Ve=s(g);E=i(Ve,"A",{id:!0,class:!0,href:!0});var gt=s(E);te=i(gt,"SPAN",{});var vt=s(te);Y(x.$$.fragment,vt),vt.forEach(a),gt.forEach(a),Me=c(Ve),ae=i(Ve,"SPAN",{});var _t=s(ae);Oe=p(_t,"Overview"),_t.forEach(a),Ve.forEach(a),_e=c(e),A=i(e,"P",{});var pt=s(A);K=i(pt,"A",{href:!0,rel:!0});var bt=s(K);qe=p(bt,"Elucidating the Design Space of Diffusion-Based Generative Models"),bt.forEach(a),Ge=p(pt," by Tero Karras, Miika Aittala, Timo Aila and Samuli Laine."),pt.forEach(a),be=c(e),L=i(e,"P",{});var wt=s(L);Le=p(wt,"The abstract of the paper is the following:"),wt.forEach(a),we=c(e),U=i(e,"P",{});var yt=s(U);Ue=p(yt,"We argue that the theory and practice of diffusion-based generative models are currently unnecessarily convoluted and seek to remedy the situation by presenting a design space that clearly separates the concrete design choices. This lets us identify several changes to both the sampling and training processes, as well as preconditioning of the score networks. Together, our improvements yield new state-of-the-art FID of 1.79 for CIFAR-10 in a class-conditional setting and 1.97 in an unconditional setting, with much faster sampling (35 network evaluations per image) than prior designs. To further demonstrate their modular nature, we show that our design changes dramatically improve both the efficiency and quality obtainable with pre-trained score networks from previous work, including improving the FID of an existing ImageNet-64 model from 2.07 to near-SOTA 1.55."),yt.forEach(a),ye=c(e),C=i(e,"P",{});var Et=s(C);Ce=p(Et,"This pipeline implements the Stochastic sampling tailored to the Variance-Expanding (VE) models."),Et.forEach(a),Ee=c(e),v=i(e,"H2",{class:!0});var xe=s(v);$=i(xe,"A",{id:!0,class:!0,href:!0});var $t=s($);re=i($t,"SPAN",{});var Pt=s(re);Y(D.$$.fragment,Pt),Pt.forEach(a),$t.forEach(a),He=c(xe),ie=i(xe,"SPAN",{});var kt=s(ie);Be=p(kt,"Available Pipelines:"),kt.forEach(a),xe.forEach(a),$e=c(e),P=i(e,"TABLE",{});var Ae=s(P);se=i(Ae,"THEAD",{});var Tt=s(se);_=i(Tt,"TR",{});var R=s(_);oe=i(R,"TH",{});var St=s(oe);Fe=p(St,"Pipeline"),St.forEach(a),Re=c(R),ne=i(R,"TH",{});var Vt=s(ne);ze=p(Vt,"Tasks"),Vt.forEach(a),We=c(R),H=i(R,"TH",{align:!0});var xt=s(H);Ye=p(xt,"Colab"),xt.forEach(a),R.forEach(a),Tt.forEach(a),Je=c(Ae),le=i(Ae,"TBODY",{});var At=s(le);b=i(At,"TR",{});var z=s(b);ce=i(z,"TD",{});var Kt=s(ce);I=i(Kt,"A",{href:!0,rel:!0});var Dt=s(I);je=p(Dt,"pipeline_stochastic_karras_ve.py"),Dt.forEach(a),Kt.forEach(a),Qe=c(z),he=i(z,"TD",{});var It=s(he);pe=i(It,"EM",{});var Nt=s(pe);Xe=p(Nt,"Unconditional Image Generation"),Nt.forEach(a),It.forEach(a),Ze=c(z),B=i(z,"TD",{align:!0});var Mt=s(B);et=p(Mt,"-"),Mt.forEach(a),z.forEach(a),At.forEach(a),Ae.forEach(a),Pe=c(e),w=i(e,"H2",{class:!0});var Ke=s(w);k=i(Ke,"A",{id:!0,class:!0,href:!0});var Ot=s(k);fe=i(Ot,"SPAN",{});var qt=s(fe);Y(N.$$.fragment,qt),qt.forEach(a),Ot.forEach(a),tt=c(Ke),de=i(Ke,"SPAN",{});var Gt=s(de);at=p(Gt,"KarrasVePipeline"),Gt.forEach(a),Ke.forEach(a),ke=c(e),d=i(e,"DIV",{class:!0});var S=s(d);Y(M.$$.fragment,S),rt=c(S),ue=i(S,"P",{});var Lt=s(ue);it=p(Lt,`Stochastic sampling from Karras et al. [1] tailored to the Variance-Expanding (VE) models [2]. Use Algorithm 2 and
the VE column of Table 1 from [1] for reference.`),Lt.forEach(a),st=c(S),T=i(S,"P",{});var me=s(T);ot=p(me,`[1] Karras, Tero, et al. \u201CElucidating the Design Space of Diffusion-Based Generative Models.\u201D
`),O=i(me,"A",{href:!0,rel:!0});var Ut=s(O);nt=p(Ut,"https://arxiv.org/abs/2206.00364"),Ut.forEach(a),lt=p(me,` [2] Song, Yang, et al. \u201CScore-based generative modeling through stochastic
differential equations.\u201D `),q=i(me,"A",{href:!0,rel:!0});var Ct=s(q);ct=p(Ct,"https://arxiv.org/abs/2011.13456"),Ct.forEach(a),me.forEach(a),ht=c(S),F=i(S,"DIV",{class:!0});var Ht=s(F);Y(G.$$.fragment,Ht),Ht.forEach(a),S.forEach(a),this.h()},h(){o(u,"name","hf:doc:metadata"),o(u,"content",JSON.stringify(Qt)),o(y,"id","stochastic-karras-ve"),o(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(y,"href","#stochastic-karras-ve"),o(m,"class","relative group"),o(E,"id","overview"),o(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(E,"href","#overview"),o(g,"class","relative group"),o(K,"href","https://arxiv.org/abs/2206.00364"),o(K,"rel","nofollow"),o($,"id","available-pipelines"),o($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o($,"href","#available-pipelines"),o(v,"class","relative group"),o(H,"align","center"),o(I,"href","https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/stochastic_karras_ve/pipeline_stochastic_karras_ve.py"),o(I,"rel","nofollow"),o(B,"align","center"),o(k,"id","diffusers.KarrasVePipeline"),o(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(k,"href","#diffusers.KarrasVePipeline"),o(w,"class","relative group"),o(O,"href","https://arxiv.org/abs/2206.00364"),o(O,"rel","nofollow"),o(q,"href","https://arxiv.org/abs/2011.13456"),o(q,"rel","nofollow"),o(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),o(d,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,n){t(document.head,u),f(e,ge,n),f(e,m,n),t(m,y),t(y,Z),J(V,Z,null),t(m,Ie),t(m,ee),t(ee,Ne),f(e,ve,n),f(e,g,n),t(g,E),t(E,te),J(x,te,null),t(g,Me),t(g,ae),t(ae,Oe),f(e,_e,n),f(e,A,n),t(A,K),t(K,qe),t(A,Ge),f(e,be,n),f(e,L,n),t(L,Le),f(e,we,n),f(e,U,n),t(U,Ue),f(e,ye,n),f(e,C,n),t(C,Ce),f(e,Ee,n),f(e,v,n),t(v,$),t($,re),J(D,re,null),t(v,He),t(v,ie),t(ie,Be),f(e,$e,n),f(e,P,n),t(P,se),t(se,_),t(_,oe),t(oe,Fe),t(_,Re),t(_,ne),t(ne,ze),t(_,We),t(_,H),t(H,Ye),t(P,Je),t(P,le),t(le,b),t(b,ce),t(ce,I),t(I,je),t(b,Qe),t(b,he),t(he,pe),t(pe,Xe),t(b,Ze),t(b,B),t(B,et),f(e,Pe,n),f(e,w,n),t(w,k),t(k,fe),J(N,fe,null),t(w,tt),t(w,de),t(de,at),f(e,ke,n),f(e,d,n),J(M,d,null),t(d,rt),t(d,ue),t(ue,it),t(d,st),t(d,T),t(T,ot),t(T,O),t(O,nt),t(T,lt),t(T,q),t(q,ct),t(d,ht),t(d,F),J(G,F,null),Te=!0},p:Yt,i(e){Te||(j(V.$$.fragment,e),j(x.$$.fragment,e),j(D.$$.fragment,e),j(N.$$.fragment,e),j(M.$$.fragment,e),j(G.$$.fragment,e),Te=!0)},o(e){Q(V.$$.fragment,e),Q(x.$$.fragment,e),Q(D.$$.fragment,e),Q(N.$$.fragment,e),Q(M.$$.fragment,e),Q(G.$$.fragment,e),Te=!1},d(e){a(u),e&&a(ge),e&&a(m),X(V),e&&a(ve),e&&a(g),X(x),e&&a(_e),e&&a(A),e&&a(be),e&&a(L),e&&a(we),e&&a(U),e&&a(ye),e&&a(C),e&&a(Ee),e&&a(v),X(D),e&&a($e),e&&a(P),e&&a(Pe),e&&a(w),X(N),e&&a(ke),e&&a(d),X(M),X(G)}}}const Qt={local:"stochastic-karras-ve",sections:[{local:"overview",title:"Overview"},{local:"available-pipelines",title:"Available Pipelines:"},{local:"diffusers.KarrasVePipeline",title:"KarrasVePipeline"}],title:"Stochastic Karras VE"};function Xt(ft){return Jt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class aa extends Ft{constructor(u){super();Rt(this,u,Xt,jt,zt,{})}}export{aa as default,Qt as metadata};
