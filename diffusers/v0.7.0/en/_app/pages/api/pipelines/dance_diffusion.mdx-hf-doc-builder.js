import{S as qt,i as Bt,s as Rt,e as i,k as c,w as Z,t as l,M as Ft,c as o,d as n,m as d,a as r,x as J,h as f,b as a,G as t,g as u,y as Y,L as Vt,q as j,o as K,B as Q,v as Wt}from"../../../chunks/vendor-hf-doc-builder.js";import{D as Ut}from"../../../chunks/Docstring-hf-doc-builder.js";import{I as He}from"../../../chunks/IconCopyLink-hf-doc-builder.js";function Zt(ut){let p,pe,m,$,X,x,Me,ee,Oe,me,_,w,te,k,Ce,ne,ze,_e,N,S,Ge,Ie,ve,E,Le,H,Ue,qe,ge,P,Be,M,Re,Fe,be,v,y,ie,O,Ve,oe,We,De,A,re,g,ae,Ze,Je,se,Ye,je,U,Ke,Qe,le,b,fe,C,Xe,et,ce,de,tt,nt,q,it,$e,D,T,ue,z,ot,he,rt,we,h,G,at,I,st,B,lt,ft,ct,R,L,Ee;return x=new He({}),k=new He({}),O=new He({}),z=new He({}),G=new Ut({props:{name:"class diffusers.DanceDiffusionPipeline",anchor:"diffusers.DanceDiffusionPipeline",parameters:[{name:"unet",val:""},{name:"scheduler",val:""}],parametersDescription:[{anchor:"diffusers.DanceDiffusionPipeline.unet",description:'<strong>unet</strong> (<a href="/docs/diffusers/v0.7.0/en/api/models#diffusers.UNet1DModel">UNet1DModel</a>) &#x2014; U-Net architecture to denoise the encoded image.',name:"unet"},{anchor:"diffusers.DanceDiffusionPipeline.scheduler",description:`<strong>scheduler</strong> (<a href="/docs/diffusers/v0.7.0/en/api/schedulers#diffusers.SchedulerMixin">SchedulerMixin</a>) &#x2014;
A scheduler to be used in combination with <code>unet</code> to denoise the encoded image. Can be one of
<a href="/docs/diffusers/v0.7.0/en/api/schedulers#diffusers.IPNDMScheduler">IPNDMScheduler</a>.`,name:"scheduler"}],source:"https://github.com/huggingface/diffusers/blob/v0.7.0/src/diffusers/pipelines/dance_diffusion/pipeline_dance_diffusion.py#L28"}}),L=new Ut({props:{name:"__call__",anchor:"diffusers.DanceDiffusionPipeline.__call__",parameters:[{name:"batch_size",val:": int = 1"},{name:"num_inference_steps",val:": int = 100"},{name:"generator",val:": typing.Optional[torch._C.Generator] = None"},{name:"audio_length_in_s",val:": typing.Optional[float] = None"},{name:"return_dict",val:": bool = True"}],parametersDescription:[{anchor:"diffusers.DanceDiffusionPipeline.__call__.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of audio samples to generate.`,name:"batch_size"},{anchor:"diffusers.DanceDiffusionPipeline.__call__.num_inference_steps",description:`<strong>num_inference_steps</strong> (<code>int</code>, <em>optional</em>, defaults to 50) &#x2014;
The number of denoising steps. More denoising steps usually lead to a higher quality audio sample at
the expense of slower inference.`,name:"num_inference_steps"},{anchor:"diffusers.DanceDiffusionPipeline.__call__.generator",description:`<strong>generator</strong> (<code>torch.Generator</code>, <em>optional</em>) &#x2014;
A <a href="https://pytorch.org/docs/stable/generated/torch.Generator.html" rel="nofollow">torch generator</a> to make generation
deterministic.`,name:"generator"},{anchor:"diffusers.DanceDiffusionPipeline.__call__.audio_length_in_s",description:`<strong>audio_length_in_s</strong> (<code>float</code>, <em>optional</em>, defaults to <code>self.unet.config.sample_size/self.unet.config.sample_rate</code>) &#x2014;
The length of the generated audio sample in seconds. Note that the output of the pipeline, <em>i.e.</em>
<code>sample_size</code>, will be <code>audio_length_in_s</code> * <code>self.unet.sample_rate</code>.`,name:"audio_length_in_s"},{anchor:"diffusers.DanceDiffusionPipeline.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to return a <code>AudioPipelineOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/diffusers/blob/v0.7.0/src/diffusers/pipelines/dance_diffusion/pipeline_dance_diffusion.py#L44",returnDescription:`
<p><code>~pipelines.utils.AudioPipelineOutput</code> if
<code>return_dict</code> is True, otherwise a \`tuple. When returning a tuple, the first element is a list with the
generated images.</p>
`,returnType:`
<p><code>AudioPipelineOutput</code> or <code>tuple</code></p>
`}}),{c(){p=i("meta"),pe=c(),m=i("h1"),$=i("a"),X=i("span"),Z(x.$$.fragment),Me=c(),ee=i("span"),Oe=l("Dance Diffusion"),me=c(),_=i("h2"),w=i("a"),te=i("span"),Z(k.$$.fragment),Ce=c(),ne=i("span"),ze=l("Overview"),_e=c(),N=i("p"),S=i("a"),Ge=l("Dance Diffusion"),Ie=l(" by Zach Evans."),ve=c(),E=i("p"),Le=l(`Dance Diffusion is the first in a suite of generative audio tools for producers and musicians to be released by Harmonai.
For more info or to get involved in the development of these tools, please visit `),H=i("a"),Ue=l("https://harmonai.org"),qe=l(" and fill out the form on the front page."),ge=c(),P=i("p"),Be=l("The original codebase of this implementation can be found "),M=i("a"),Re=l("here"),Fe=l("."),be=c(),v=i("h2"),y=i("a"),ie=i("span"),Z(O.$$.fragment),Ve=c(),oe=i("span"),We=l("Available Pipelines:"),De=c(),A=i("table"),re=i("thead"),g=i("tr"),ae=i("th"),Ze=l("Pipeline"),Je=c(),se=i("th"),Ye=l("Tasks"),je=c(),U=i("th"),Ke=l("Colab"),Qe=c(),le=i("tbody"),b=i("tr"),fe=i("td"),C=i("a"),Xe=l("pipeline_dance_diffusion.py"),et=c(),ce=i("td"),de=i("em"),tt=l("Unconditional Audio Generation"),nt=c(),q=i("td"),it=l("-"),$e=c(),D=i("h2"),T=i("a"),ue=i("span"),Z(z.$$.fragment),ot=c(),he=i("span"),rt=l("DanceDiffusionPipeline"),we=c(),h=i("div"),Z(G.$$.fragment),at=c(),I=i("p"),st=l("This model inherits from "),B=i("a"),lt=l("DiffusionPipeline"),ft=l(`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),ct=c(),R=i("div"),Z(L.$$.fragment),this.h()},l(e){const s=Ft('[data-svelte="svelte-1phssyn"]',document.head);p=o(s,"META",{name:!0,content:!0}),s.forEach(n),pe=d(e),m=o(e,"H1",{class:!0});var Pe=r(m);$=o(Pe,"A",{id:!0,class:!0,href:!0});var ht=r($);X=o(ht,"SPAN",{});var pt=r(X);J(x.$$.fragment,pt),pt.forEach(n),ht.forEach(n),Me=d(Pe),ee=o(Pe,"SPAN",{});var mt=r(ee);Oe=f(mt,"Dance Diffusion"),mt.forEach(n),Pe.forEach(n),me=d(e),_=o(e,"H2",{class:!0});var ye=r(_);w=o(ye,"A",{id:!0,class:!0,href:!0});var _t=r(w);te=o(_t,"SPAN",{});var vt=r(te);J(k.$$.fragment,vt),vt.forEach(n),_t.forEach(n),Ce=d(ye),ne=o(ye,"SPAN",{});var gt=r(ne);ze=f(gt,"Overview"),gt.forEach(n),ye.forEach(n),_e=d(e),N=o(e,"P",{});var dt=r(N);S=o(dt,"A",{href:!0,rel:!0});var bt=r(S);Ge=f(bt,"Dance Diffusion"),bt.forEach(n),Ie=f(dt," by Zach Evans."),dt.forEach(n),ve=d(e),E=o(e,"P",{});var Ae=r(E);Le=f(Ae,`Dance Diffusion is the first in a suite of generative audio tools for producers and musicians to be released by Harmonai.
For more info or to get involved in the development of these tools, please visit `),H=o(Ae,"A",{href:!0,rel:!0});var Dt=r(H);Ue=f(Dt,"https://harmonai.org"),Dt.forEach(n),qe=f(Ae," and fill out the form on the front page."),Ae.forEach(n),ge=d(e),P=o(e,"P",{});var Te=r(P);Be=f(Te,"The original codebase of this implementation can be found "),M=o(Te,"A",{href:!0,rel:!0});var $t=r(M);Re=f($t,"here"),$t.forEach(n),Fe=f(Te,"."),Te.forEach(n),be=d(e),v=o(e,"H2",{class:!0});var xe=r(v);y=o(xe,"A",{id:!0,class:!0,href:!0});var wt=r(y);ie=o(wt,"SPAN",{});var Et=r(ie);J(O.$$.fragment,Et),Et.forEach(n),wt.forEach(n),Ve=d(xe),oe=o(xe,"SPAN",{});var Pt=r(oe);We=f(Pt,"Available Pipelines:"),Pt.forEach(n),xe.forEach(n),De=d(e),A=o(e,"TABLE",{});var ke=r(A);re=o(ke,"THEAD",{});var yt=r(re);g=o(yt,"TR",{});var F=r(g);ae=o(F,"TH",{});var At=r(ae);Ze=f(At,"Pipeline"),At.forEach(n),Je=d(F),se=o(F,"TH",{});var Tt=r(se);Ye=f(Tt,"Tasks"),Tt.forEach(n),je=d(F),U=o(F,"TH",{align:!0});var xt=r(U);Ke=f(xt,"Colab"),xt.forEach(n),F.forEach(n),yt.forEach(n),Qe=d(ke),le=o(ke,"TBODY",{});var kt=r(le);b=o(kt,"TR",{});var V=r(b);fe=o(V,"TD",{});var Nt=r(fe);C=o(Nt,"A",{href:!0,rel:!0});var St=r(C);Xe=f(St,"pipeline_dance_diffusion.py"),St.forEach(n),Nt.forEach(n),et=d(V),ce=o(V,"TD",{});var Ht=r(ce);de=o(Ht,"EM",{});var Mt=r(de);tt=f(Mt,"Unconditional Audio Generation"),Mt.forEach(n),Ht.forEach(n),nt=d(V),q=o(V,"TD",{align:!0});var Ot=r(q);it=f(Ot,"-"),Ot.forEach(n),V.forEach(n),kt.forEach(n),ke.forEach(n),$e=d(e),D=o(e,"H2",{class:!0});var Ne=r(D);T=o(Ne,"A",{id:!0,class:!0,href:!0});var Ct=r(T);ue=o(Ct,"SPAN",{});var zt=r(ue);J(z.$$.fragment,zt),zt.forEach(n),Ct.forEach(n),ot=d(Ne),he=o(Ne,"SPAN",{});var Gt=r(he);rt=f(Gt,"DanceDiffusionPipeline"),Gt.forEach(n),Ne.forEach(n),we=d(e),h=o(e,"DIV",{class:!0});var W=r(h);J(G.$$.fragment,W),at=d(W),I=o(W,"P",{});var Se=r(I);st=f(Se,"This model inherits from "),B=o(Se,"A",{href:!0});var It=r(B);lt=f(It,"DiffusionPipeline"),It.forEach(n),ft=f(Se,`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),Se.forEach(n),ct=d(W),R=o(W,"DIV",{class:!0});var Lt=r(R);J(L.$$.fragment,Lt),Lt.forEach(n),W.forEach(n),this.h()},h(){a(p,"name","hf:doc:metadata"),a(p,"content",JSON.stringify(Jt)),a($,"id","dance-diffusion"),a($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a($,"href","#dance-diffusion"),a(m,"class","relative group"),a(w,"id","overview"),a(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(w,"href","#overview"),a(_,"class","relative group"),a(S,"href","https://github.com/Harmonai-org/sample-generator"),a(S,"rel","nofollow"),a(H,"href","https://harmonai.org"),a(H,"rel","nofollow"),a(M,"href","https://github.com/Harmonai-org/sample-generator"),a(M,"rel","nofollow"),a(y,"id","available-pipelines"),a(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(y,"href","#available-pipelines"),a(v,"class","relative group"),a(U,"align","center"),a(C,"href","https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/dance_diffusion/pipeline_dance_diffusion.py"),a(C,"rel","nofollow"),a(q,"align","center"),a(T,"id","diffusers.DanceDiffusionPipeline"),a(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(T,"href","#diffusers.DanceDiffusionPipeline"),a(D,"class","relative group"),a(B,"href","/docs/diffusers/v0.7.0/en/using-diffusers/loading#diffusers.DiffusionPipeline"),a(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),a(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,s){t(document.head,p),u(e,pe,s),u(e,m,s),t(m,$),t($,X),Y(x,X,null),t(m,Me),t(m,ee),t(ee,Oe),u(e,me,s),u(e,_,s),t(_,w),t(w,te),Y(k,te,null),t(_,Ce),t(_,ne),t(ne,ze),u(e,_e,s),u(e,N,s),t(N,S),t(S,Ge),t(N,Ie),u(e,ve,s),u(e,E,s),t(E,Le),t(E,H),t(H,Ue),t(E,qe),u(e,ge,s),u(e,P,s),t(P,Be),t(P,M),t(M,Re),t(P,Fe),u(e,be,s),u(e,v,s),t(v,y),t(y,ie),Y(O,ie,null),t(v,Ve),t(v,oe),t(oe,We),u(e,De,s),u(e,A,s),t(A,re),t(re,g),t(g,ae),t(ae,Ze),t(g,Je),t(g,se),t(se,Ye),t(g,je),t(g,U),t(U,Ke),t(A,Qe),t(A,le),t(le,b),t(b,fe),t(fe,C),t(C,Xe),t(b,et),t(b,ce),t(ce,de),t(de,tt),t(b,nt),t(b,q),t(q,it),u(e,$e,s),u(e,D,s),t(D,T),t(T,ue),Y(z,ue,null),t(D,ot),t(D,he),t(he,rt),u(e,we,s),u(e,h,s),Y(G,h,null),t(h,at),t(h,I),t(I,st),t(I,B),t(B,lt),t(I,ft),t(h,ct),t(h,R),Y(L,R,null),Ee=!0},p:Vt,i(e){Ee||(j(x.$$.fragment,e),j(k.$$.fragment,e),j(O.$$.fragment,e),j(z.$$.fragment,e),j(G.$$.fragment,e),j(L.$$.fragment,e),Ee=!0)},o(e){K(x.$$.fragment,e),K(k.$$.fragment,e),K(O.$$.fragment,e),K(z.$$.fragment,e),K(G.$$.fragment,e),K(L.$$.fragment,e),Ee=!1},d(e){n(p),e&&n(pe),e&&n(m),Q(x),e&&n(me),e&&n(_),Q(k),e&&n(_e),e&&n(N),e&&n(ve),e&&n(E),e&&n(ge),e&&n(P),e&&n(be),e&&n(v),Q(O),e&&n(De),e&&n(A),e&&n($e),e&&n(D),Q(z),e&&n(we),e&&n(h),Q(G),Q(L)}}}const Jt={local:"dance-diffusion",sections:[{local:"overview",title:"Overview"},{local:"available-pipelines",title:"Available Pipelines:"},{local:"diffusers.DanceDiffusionPipeline",title:"DanceDiffusionPipeline"}],title:"Dance Diffusion"};function Yt(ut){return Wt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Xt extends qt{constructor(p){super();Bt(this,p,Yt,Zt,Rt,{})}}export{Xt as default,Jt as metadata};
