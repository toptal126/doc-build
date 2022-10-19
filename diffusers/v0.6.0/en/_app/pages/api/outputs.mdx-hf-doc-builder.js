import{S as St,i as qt,s as Mt,e as l,k as f,w as B,t as a,M as Tt,c as i,d as s,m as c,a as u,x as D,h as o,b as h,G as t,g as n,y as x,q as C,o as N,B as A,v as Ht}from"../../chunks/vendor-hf-doc-builder.js";import{T as Lt}from"../../chunks/Tip-hf-doc-builder.js";import{D as It}from"../../chunks/Docstring-hf-doc-builder.js";import{C as je}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as jt}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Yt(he){let p,I,d,_,y,m,L,E;return{c(){p=l("p"),I=a("You can\u2019t unpack a "),d=l("code"),_=a("BaseOutput"),y=a(" directly. Use the "),m=l("a"),L=a("to_tuple()"),E=a(` method to convert it to a tuple
before.`),this.h()},l(O){p=i(O,"P",{});var v=u(p);I=o(v,"You can\u2019t unpack a "),d=i(v,"CODE",{});var b=u(d);_=o(b,"BaseOutput"),b.forEach(s),y=o(v," directly. Use the "),m=i(v,"A",{href:!0});var K=u(m);L=o(K,"to_tuple()"),K.forEach(s),E=o(v,` method to convert it to a tuple
before.`),v.forEach(s),this.h()},h(){h(m,"href","/docs/diffusers/v0.6.0/en/api/outputs#diffusers.utils.BaseOutput.to_tuple")},m(O,v){n(O,p,v),t(p,I),t(p,d),t(d,_),t(p,y),t(p,m),t(m,L),t(p,E)},d(O){O&&s(p)}}}function Ut(he){let p,I,d,_,y,m,L,E,O,v,b,K,Q,Se,qe,me,X,Me,ve,Y,$e,g,Te,oe,He,Le,Z,Ye,Ue,_e,j,Ve,re,We,Ge,be,U,ge,ee,Je,we,V,ye,w,Re,le,ze,Fe,ie,Ke,Qe,Ee,W,Oe,S,Xe,ue,Ze,et,ke,k,q,ne,G,tt,pe,st,Pe,$,J,at,P,ot,fe,rt,lt,ce,it,ut,nt,M,pt,T,R,ft,z,ct,de,dt,ht,Be;return m=new jt({}),Y=new je({props:{code:`from diffusers import DDIMPipeline

pipeline = DDIMPipeline.from_pretrained("google/ddpm-cifar10-32")
outputs = pipeline()`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DDIMPipeline

pipeline = DDIMPipeline.from_pretrained(<span class="hljs-string">&quot;google/ddpm-cifar10-32&quot;</span>)
outputs = pipeline()`}}),U=new je({props:{code:"outputs.images",highlighted:"outputs.images"}}),V=new je({props:{code:'outputs["images"]',highlighted:'outputs[<span class="hljs-string">&quot;images&quot;</span>]'}}),W=new je({props:{code:"outputs[:1]",highlighted:'outputs[:<span class="hljs-number">1</span>]'}}),G=new jt({}),J=new It({props:{name:"class diffusers.utils.BaseOutput",anchor:"diffusers.utils.BaseOutput",parameters:"",source:"https://github.com/huggingface/diffusers/blob/v0.6.0/src/diffusers/utils/outputs.py#L40"}}),M=new Lt({props:{warning:!0,$$slots:{default:[Yt]},$$scope:{ctx:he}}}),R=new It({props:{name:"to_tuple",anchor:"diffusers.utils.BaseOutput.to_tuple",parameters:[],source:"https://github.com/huggingface/diffusers/blob/v0.6.0/src/diffusers/utils/outputs.py#L104"}}),{c(){p=l("meta"),I=f(),d=l("h1"),_=l("a"),y=l("span"),B(m.$$.fragment),L=f(),E=l("span"),O=a("BaseOutputs"),v=f(),b=l("p"),K=a("All models have outputs that are instances of subclasses of "),Q=l("a"),Se=a("BaseOutput"),qe=a(`. Those are
data structures containing all the information returned by the model, but that can also be used as tuples or
dictionaries.`),me=f(),X=l("p"),Me=a("Let\u2019s see how this looks in an example:"),ve=f(),B(Y.$$.fragment),$e=f(),g=l("p"),Te=a("The "),oe=l("code"),He=a("outputs"),Le=a(" object is a "),Z=l("a"),Ye=a("ImagePipelineOutput"),Ue=a(`, as we can see in the
documentation of that class below, it means it has an image attribute.`),_e=f(),j=l("p"),Ve=a("You can access each attribute as you would usually do, and if that attribute has not been returned by the model, you will get "),re=l("code"),We=a("None"),Ge=a(":"),be=f(),B(U.$$.fragment),ge=f(),ee=l("p"),Je=a("or via keyword lookup"),we=f(),B(V.$$.fragment),ye=f(),w=l("p"),Re=a("When considering our "),le=l("code"),ze=a("outputs"),Fe=a(" object as tuple, it only considers the attributes that don\u2019t have "),ie=l("code"),Ke=a("None"),Qe=a(` values.
Here for instance, we could retrieve images via indexing:`),Ee=f(),B(W.$$.fragment),Oe=f(),S=l("p"),Xe=a("which will return the tuple "),ue=l("code"),Ze=a("(outputs.images)"),et=a(" for instance."),ke=f(),k=l("h2"),q=l("a"),ne=l("span"),B(G.$$.fragment),tt=f(),pe=l("span"),st=a("BaseOutput"),Pe=f(),$=l("div"),B(J.$$.fragment),at=f(),P=l("p"),ot=a("Base class for all model outputs as dataclass. Has a "),fe=l("code"),rt=a("__getitem__"),lt=a(` that allows indexing by integer or slice (like a
tuple) or strings (like a dictionary) that will ignore the `),ce=l("code"),it=a("None"),ut=a(` attributes. Otherwise behaves like a regular
python dictionary.`),nt=f(),B(M.$$.fragment),pt=f(),T=l("div"),B(R.$$.fragment),ft=f(),z=l("p"),ct=a("Convert self to a tuple containing all the attributes/keys that are not "),de=l("code"),dt=a("None"),ht=a("."),this.h()},l(e){const r=Tt('[data-svelte="svelte-1phssyn"]',document.head);p=i(r,"META",{name:!0,content:!0}),r.forEach(s),I=c(e),d=i(e,"H1",{class:!0});var F=u(d);_=i(F,"A",{id:!0,class:!0,href:!0});var mt=u(_);y=i(mt,"SPAN",{});var vt=u(y);D(m.$$.fragment,vt),vt.forEach(s),mt.forEach(s),L=c(F),E=i(F,"SPAN",{});var $t=u(E);O=o($t,"BaseOutputs"),$t.forEach(s),F.forEach(s),v=c(e),b=i(e,"P",{});var De=u(b);K=o(De,"All models have outputs that are instances of subclasses of "),Q=i(De,"A",{href:!0});var _t=u(Q);Se=o(_t,"BaseOutput"),_t.forEach(s),qe=o(De,`. Those are
data structures containing all the information returned by the model, but that can also be used as tuples or
dictionaries.`),De.forEach(s),me=c(e),X=i(e,"P",{});var bt=u(X);Me=o(bt,"Let\u2019s see how this looks in an example:"),bt.forEach(s),ve=c(e),D(Y.$$.fragment,e),$e=c(e),g=i(e,"P",{});var te=u(g);Te=o(te,"The "),oe=i(te,"CODE",{});var gt=u(oe);He=o(gt,"outputs"),gt.forEach(s),Le=o(te," object is a "),Z=i(te,"A",{href:!0});var wt=u(Z);Ye=o(wt,"ImagePipelineOutput"),wt.forEach(s),Ue=o(te,`, as we can see in the
documentation of that class below, it means it has an image attribute.`),te.forEach(s),_e=c(e),j=i(e,"P",{});var xe=u(j);Ve=o(xe,"You can access each attribute as you would usually do, and if that attribute has not been returned by the model, you will get "),re=i(xe,"CODE",{});var yt=u(re);We=o(yt,"None"),yt.forEach(s),Ge=o(xe,":"),xe.forEach(s),be=c(e),D(U.$$.fragment,e),ge=c(e),ee=i(e,"P",{});var Et=u(ee);Je=o(Et,"or via keyword lookup"),Et.forEach(s),we=c(e),D(V.$$.fragment,e),ye=c(e),w=i(e,"P",{});var se=u(w);Re=o(se,"When considering our "),le=i(se,"CODE",{});var Ot=u(le);ze=o(Ot,"outputs"),Ot.forEach(s),Fe=o(se," object as tuple, it only considers the attributes that don\u2019t have "),ie=i(se,"CODE",{});var kt=u(ie);Ke=o(kt,"None"),kt.forEach(s),Qe=o(se,` values.
Here for instance, we could retrieve images via indexing:`),se.forEach(s),Ee=c(e),D(W.$$.fragment,e),Oe=c(e),S=i(e,"P",{});var Ce=u(S);Xe=o(Ce,"which will return the tuple "),ue=i(Ce,"CODE",{});var Pt=u(ue);Ze=o(Pt,"(outputs.images)"),Pt.forEach(s),et=o(Ce," for instance."),Ce.forEach(s),ke=c(e),k=i(e,"H2",{class:!0});var Ne=u(k);q=i(Ne,"A",{id:!0,class:!0,href:!0});var Bt=u(q);ne=i(Bt,"SPAN",{});var Dt=u(ne);D(G.$$.fragment,Dt),Dt.forEach(s),Bt.forEach(s),tt=c(Ne),pe=i(Ne,"SPAN",{});var xt=u(pe);st=o(xt,"BaseOutput"),xt.forEach(s),Ne.forEach(s),Pe=c(e),$=i(e,"DIV",{class:!0});var H=u($);D(J.$$.fragment,H),at=c(H),P=i(H,"P",{});var ae=u(P);ot=o(ae,"Base class for all model outputs as dataclass. Has a "),fe=i(ae,"CODE",{});var Ct=u(fe);rt=o(Ct,"__getitem__"),Ct.forEach(s),lt=o(ae,` that allows indexing by integer or slice (like a
tuple) or strings (like a dictionary) that will ignore the `),ce=i(ae,"CODE",{});var Nt=u(ce);it=o(Nt,"None"),Nt.forEach(s),ut=o(ae,` attributes. Otherwise behaves like a regular
python dictionary.`),ae.forEach(s),nt=c(H),D(M.$$.fragment,H),pt=c(H),T=i(H,"DIV",{class:!0});var Ae=u(T);D(R.$$.fragment,Ae),ft=c(Ae),z=i(Ae,"P",{});var Ie=u(z);ct=o(Ie,"Convert self to a tuple containing all the attributes/keys that are not "),de=i(Ie,"CODE",{});var At=u(de);dt=o(At,"None"),At.forEach(s),ht=o(Ie,"."),Ie.forEach(s),Ae.forEach(s),H.forEach(s),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(Vt)),h(_,"id","baseoutputs"),h(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_,"href","#baseoutputs"),h(d,"class","relative group"),h(Q,"href","/docs/diffusers/v0.6.0/en/api/outputs#diffusers.utils.BaseOutput"),h(Z,"href","/docs/diffusers/v0.6.0/en/api/diffusion_pipeline#diffusers.pipeline_utils.ImagePipelineOutput"),h(q,"id","diffusers.utils.BaseOutput"),h(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(q,"href","#diffusers.utils.BaseOutput"),h(k,"class","relative group"),h(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,r){t(document.head,p),n(e,I,r),n(e,d,r),t(d,_),t(_,y),x(m,y,null),t(d,L),t(d,E),t(E,O),n(e,v,r),n(e,b,r),t(b,K),t(b,Q),t(Q,Se),t(b,qe),n(e,me,r),n(e,X,r),t(X,Me),n(e,ve,r),x(Y,e,r),n(e,$e,r),n(e,g,r),t(g,Te),t(g,oe),t(oe,He),t(g,Le),t(g,Z),t(Z,Ye),t(g,Ue),n(e,_e,r),n(e,j,r),t(j,Ve),t(j,re),t(re,We),t(j,Ge),n(e,be,r),x(U,e,r),n(e,ge,r),n(e,ee,r),t(ee,Je),n(e,we,r),x(V,e,r),n(e,ye,r),n(e,w,r),t(w,Re),t(w,le),t(le,ze),t(w,Fe),t(w,ie),t(ie,Ke),t(w,Qe),n(e,Ee,r),x(W,e,r),n(e,Oe,r),n(e,S,r),t(S,Xe),t(S,ue),t(ue,Ze),t(S,et),n(e,ke,r),n(e,k,r),t(k,q),t(q,ne),x(G,ne,null),t(k,tt),t(k,pe),t(pe,st),n(e,Pe,r),n(e,$,r),x(J,$,null),t($,at),t($,P),t(P,ot),t(P,fe),t(fe,rt),t(P,lt),t(P,ce),t(ce,it),t(P,ut),t($,nt),x(M,$,null),t($,pt),t($,T),x(R,T,null),t(T,ft),t(T,z),t(z,ct),t(z,de),t(de,dt),t(z,ht),Be=!0},p(e,[r]){const F={};r&2&&(F.$$scope={dirty:r,ctx:e}),M.$set(F)},i(e){Be||(C(m.$$.fragment,e),C(Y.$$.fragment,e),C(U.$$.fragment,e),C(V.$$.fragment,e),C(W.$$.fragment,e),C(G.$$.fragment,e),C(J.$$.fragment,e),C(M.$$.fragment,e),C(R.$$.fragment,e),Be=!0)},o(e){N(m.$$.fragment,e),N(Y.$$.fragment,e),N(U.$$.fragment,e),N(V.$$.fragment,e),N(W.$$.fragment,e),N(G.$$.fragment,e),N(J.$$.fragment,e),N(M.$$.fragment,e),N(R.$$.fragment,e),Be=!1},d(e){s(p),e&&s(I),e&&s(d),A(m),e&&s(v),e&&s(b),e&&s(me),e&&s(X),e&&s(ve),A(Y,e),e&&s($e),e&&s(g),e&&s(_e),e&&s(j),e&&s(be),A(U,e),e&&s(ge),e&&s(ee),e&&s(we),A(V,e),e&&s(ye),e&&s(w),e&&s(Ee),A(W,e),e&&s(Oe),e&&s(S),e&&s(ke),e&&s(k),A(G),e&&s(Pe),e&&s($),A(J),A(M),A(R)}}}const Vt={local:"baseoutputs",sections:[{local:"diffusers.utils.BaseOutput",title:"BaseOutput"}],title:"BaseOutputs"};function Wt(he){return Ht(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Kt extends St{constructor(p){super();qt(this,p,Wt,Ut,Mt,{})}}export{Kt as default,Vt as metadata};
