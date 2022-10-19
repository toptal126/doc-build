import{S as Ke,i as Qe,s as We,e as s,k as c,w as U,t as a,M as Xe,c as r,d as t,m as h,a as l,x as B,h as o,b as p,G as i,g as f,y as M,L as Ze,q as V,o as z,B as O,v as et}from"../../chunks/vendor-hf-doc-builder.js";import{I as tt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as le}from"../../chunks/CodeBlock-hf-doc-builder.js";function it(Se){let d,H,g,_,L,P,fe,Y,pe,J,y,ue,A,me,ce,R,u,he,C,de,ge,I,_e,ye,D,ve,we,T,$e,Pe,b,De,be,F,k,K,v,ke,G,Ee,je,Q,E,W,w,qe,N,xe,Ae,X,j,Z,$,Ce,q,Ie,Te,ee,S,Ge,te,x,ie;return P=new tt({}),k=new le({props:{code:`from diffusers import DiffusionPipeline

generator = DiffusionPipeline.from_pretrained("CompVis/ldm-text2im-large-256")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>generator = DiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;CompVis/ldm-text2im-large-256&quot;</span>)`}}),E=new le({props:{code:'generator.to("cuda")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>generator.to(<span class="hljs-string">&quot;cuda&quot;</span>)'}}),j=new le({props:{code:'image = generator("An image of a squirrel in Picasso style").images[0]',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>image = generator(<span class="hljs-string">&quot;An image of a squirrel in Picasso style&quot;</span>).images[<span class="hljs-number">0</span>]'}}),x=new le({props:{code:'image.save("image_of_squirrel_painting.png")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>image.save(<span class="hljs-string">&quot;image_of_squirrel_painting.png&quot;</span>)'}}),{c(){d=s("meta"),H=c(),g=s("h1"),_=s("a"),L=s("span"),U(P.$$.fragment),fe=c(),Y=s("span"),pe=a("Conditional Image Generation"),J=c(),y=s("p"),ue=a("The "),A=s("a"),me=a("DiffusionPipeline"),ce=a(" is the easiest way to use a pre-trained diffusion system for inference"),R=c(),u=s("p"),he=a("Start by creating an instance of "),C=s("a"),de=a("DiffusionPipeline"),ge=a(` and specify which pipeline checkpoint you would like to download.
You can use the `),I=s("a"),_e=a("DiffusionPipeline"),ye=a(" for any "),D=s("a"),ve=a("Diffusers\u2019 checkpoint"),we=a(`.
In this guide though, you\u2019ll use `),T=s("a"),$e=a("DiffusionPipeline"),Pe=a(" for text-to-image generation with "),b=s("a"),De=a("Latent Diffusion"),be=a(":"),F=c(),U(k.$$.fragment),K=c(),v=s("p"),ke=a("The "),G=s("a"),Ee=a("DiffusionPipeline"),je=a(` downloads and caches all modeling, tokenization, and scheduling components.
Because the model consists of roughly 1.4 billion parameters, we strongly recommend running it on GPU.
You can move the generator object to GPU, just like you would in PyTorch.`),Q=c(),U(E.$$.fragment),W=c(),w=s("p"),qe=a("Now you can use the "),N=s("code"),xe=a("generator"),Ae=a(" on your text prompt:"),X=c(),U(j.$$.fragment),Z=c(),$=s("p"),Ce=a("The output is by default wrapped into a "),q=s("a"),Ie=a("PIL Image object"),Te=a("."),ee=c(),S=s("p"),Ge=a("You can save the image by simply calling:"),te=c(),U(x.$$.fragment),this.h()},l(e){const n=Xe('[data-svelte="svelte-1phssyn"]',document.head);d=r(n,"META",{name:!0,content:!0}),n.forEach(t),H=h(e),g=r(e,"H1",{class:!0});var ne=l(g);_=r(ne,"A",{id:!0,class:!0,href:!0});var Le=l(_);L=r(Le,"SPAN",{});var Ye=l(L);B(P.$$.fragment,Ye),Ye.forEach(t),Le.forEach(t),fe=h(ne),Y=r(ne,"SPAN",{});var Ne=l(Y);pe=o(Ne,"Conditional Image Generation"),Ne.forEach(t),ne.forEach(t),J=h(e),y=r(e,"P",{});var ae=l(y);ue=o(ae,"The "),A=r(ae,"A",{href:!0});var Ue=l(A);me=o(Ue,"DiffusionPipeline"),Ue.forEach(t),ce=o(ae," is the easiest way to use a pre-trained diffusion system for inference"),ae.forEach(t),R=h(e),u=r(e,"P",{});var m=l(u);he=o(m,"Start by creating an instance of "),C=r(m,"A",{href:!0});var Be=l(C);de=o(Be,"DiffusionPipeline"),Be.forEach(t),ge=o(m,` and specify which pipeline checkpoint you would like to download.
You can use the `),I=r(m,"A",{href:!0});var Me=l(I);_e=o(Me,"DiffusionPipeline"),Me.forEach(t),ye=o(m," for any "),D=r(m,"A",{href:!0,rel:!0});var Ve=l(D);ve=o(Ve,"Diffusers\u2019 checkpoint"),Ve.forEach(t),we=o(m,`.
In this guide though, you\u2019ll use `),T=r(m,"A",{href:!0});var ze=l(T);$e=o(ze,"DiffusionPipeline"),ze.forEach(t),Pe=o(m," for text-to-image generation with "),b=r(m,"A",{href:!0,rel:!0});var Oe=l(b);De=o(Oe,"Latent Diffusion"),Oe.forEach(t),be=o(m,":"),m.forEach(t),F=h(e),B(k.$$.fragment,e),K=h(e),v=r(e,"P",{});var oe=l(v);ke=o(oe,"The "),G=r(oe,"A",{href:!0});var He=l(G);Ee=o(He,"DiffusionPipeline"),He.forEach(t),je=o(oe,` downloads and caches all modeling, tokenization, and scheduling components.
Because the model consists of roughly 1.4 billion parameters, we strongly recommend running it on GPU.
You can move the generator object to GPU, just like you would in PyTorch.`),oe.forEach(t),Q=h(e),B(E.$$.fragment,e),W=h(e),w=r(e,"P",{});var se=l(w);qe=o(se,"Now you can use the "),N=r(se,"CODE",{});var Je=l(N);xe=o(Je,"generator"),Je.forEach(t),Ae=o(se," on your text prompt:"),se.forEach(t),X=h(e),B(j.$$.fragment,e),Z=h(e),$=r(e,"P",{});var re=l($);Ce=o(re,"The output is by default wrapped into a "),q=r(re,"A",{href:!0,rel:!0});var Re=l(q);Ie=o(Re,"PIL Image object"),Re.forEach(t),Te=o(re,"."),re.forEach(t),ee=h(e),S=r(e,"P",{});var Fe=l(S);Ge=o(Fe,"You can save the image by simply calling:"),Fe.forEach(t),te=h(e),B(x.$$.fragment,e),this.h()},h(){p(d,"name","hf:doc:metadata"),p(d,"content",JSON.stringify(nt)),p(_,"id","conditional-image-generation"),p(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(_,"href","#conditional-image-generation"),p(g,"class","relative group"),p(A,"href","/docs/diffusers/v0.6.0/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),p(C,"href","/docs/diffusers/v0.6.0/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),p(I,"href","/docs/diffusers/v0.6.0/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),p(D,"href","https://huggingface.co/models?library=diffusers&sort=downloads"),p(D,"rel","nofollow"),p(T,"href","/docs/diffusers/v0.6.0/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),p(b,"href","https://huggingface.co/CompVis/ldm-text2im-large-256"),p(b,"rel","nofollow"),p(G,"href","/docs/diffusers/v0.6.0/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),p(q,"href","https://pillow.readthedocs.io/en/stable/reference/Image.html?highlight=image#the-image-class"),p(q,"rel","nofollow")},m(e,n){i(document.head,d),f(e,H,n),f(e,g,n),i(g,_),i(_,L),M(P,L,null),i(g,fe),i(g,Y),i(Y,pe),f(e,J,n),f(e,y,n),i(y,ue),i(y,A),i(A,me),i(y,ce),f(e,R,n),f(e,u,n),i(u,he),i(u,C),i(C,de),i(u,ge),i(u,I),i(I,_e),i(u,ye),i(u,D),i(D,ve),i(u,we),i(u,T),i(T,$e),i(u,Pe),i(u,b),i(b,De),i(u,be),f(e,F,n),M(k,e,n),f(e,K,n),f(e,v,n),i(v,ke),i(v,G),i(G,Ee),i(v,je),f(e,Q,n),M(E,e,n),f(e,W,n),f(e,w,n),i(w,qe),i(w,N),i(N,xe),i(w,Ae),f(e,X,n),M(j,e,n),f(e,Z,n),f(e,$,n),i($,Ce),i($,q),i(q,Ie),i($,Te),f(e,ee,n),f(e,S,n),i(S,Ge),f(e,te,n),M(x,e,n),ie=!0},p:Ze,i(e){ie||(V(P.$$.fragment,e),V(k.$$.fragment,e),V(E.$$.fragment,e),V(j.$$.fragment,e),V(x.$$.fragment,e),ie=!0)},o(e){z(P.$$.fragment,e),z(k.$$.fragment,e),z(E.$$.fragment,e),z(j.$$.fragment,e),z(x.$$.fragment,e),ie=!1},d(e){t(d),e&&t(H),e&&t(g),O(P),e&&t(J),e&&t(y),e&&t(R),e&&t(u),e&&t(F),O(k,e),e&&t(K),e&&t(v),e&&t(Q),O(E,e),e&&t(W),e&&t(w),e&&t(X),O(j,e),e&&t(Z),e&&t($),e&&t(ee),e&&t(S),e&&t(te),O(x,e)}}}const nt={local:"conditional-image-generation",title:"Conditional Image Generation"};function at(Se){return et(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class lt extends Ke{constructor(d){super();Qe(this,d,at,it,We,{})}}export{lt as default,nt as metadata};
