import{S as Ks,i as Qs,s as Ws,e as n,k as p,w as f,t as h,M as et,c as l,d as s,m,a as o,x as u,h as c,b as i,G as t,g as r,y as d,L as st,q as g,o as b,B as w,v as tt}from"../../chunks/vendor-hf-doc-builder.js";import{I as de}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as se}from"../../chunks/CodeBlock-hf-doc-builder.js";function at(ks){let v,ge,j,E,te,C,Je,ae,Oe,be,_,ne,Fe,Xe,H,Ke,Qe,we,$,P,le,L,We,oe,es,ve,O,ss,je,R,_e,F,ts,$e,B,ye,X,as,ke,G,xe,K,ns,Ee,D,Pe,S,ls,re,os,rs,Se,A,is,Q,ps,hs,Ae,y,N,ie,z,ms,pe,cs,Ne,W,fs,Ie,Y,Te,I,us,U,ds,gs,qe,k,T,he,V,bs,me,ws,Me,q,vs,ee,js,_s,Ce,x,M,ce,Z,$s,fe,ys,He,J,Le;return C=new de({}),L=new de({}),R=new se({props:{code:`import timm
model = timm.create_model('mobilenetv2_100', pretrained=True)
model.eval()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> timm
<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;mobilenetv2_100&#x27;</span>, pretrained=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">eval</span>()`}}),B=new se({props:{code:`import urllib
from PIL import Image
from timm.data import resolve_data_config
from timm.data.transforms_factory import create_transform

config = resolve_data_config({}, model=model)
transform = create_transform(**config)

url, filename = ("https://github.com/pytorch/hub/raw/master/images/dog.jpg", "dog.jpg")
urllib.request.urlretrieve(url, filename)
img = Image.open(filename).convert('RGB')
tensor = transform(img).unsqueeze(0) # transform and add batch dimension`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> urllib
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> timm.data <span class="hljs-keyword">import</span> resolve_data_config
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> timm.data.transforms_factory <span class="hljs-keyword">import</span> create_transform

<span class="hljs-meta">&gt;&gt;&gt; </span>config = resolve_data_config({}, model=model)
<span class="hljs-meta">&gt;&gt;&gt; </span>transform = create_transform(**config)

<span class="hljs-meta">&gt;&gt;&gt; </span>url, filename = (<span class="hljs-string">&quot;https://github.com/pytorch/hub/raw/master/images/dog.jpg&quot;</span>, <span class="hljs-string">&quot;dog.jpg&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>urllib.request.urlretrieve(url, filename)
<span class="hljs-meta">&gt;&gt;&gt; </span>img = Image.<span class="hljs-built_in">open</span>(filename).convert(<span class="hljs-string">&#x27;RGB&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tensor = transform(img).unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-comment"># transform and add batch dimension</span>`}}),G=new se({props:{code:`import torch
with torch.no_grad():
    out = model(tensor)
probabilities = torch.nn.functional.softmax(out[0], dim=0)
print(probabilities.shape)
# prints: torch.Size([1000])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    out = model(tensor)
<span class="hljs-meta">&gt;&gt;&gt; </span>probabilities = torch.nn.functional.softmax(out[<span class="hljs-number">0</span>], dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(probabilities.shape)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prints: torch.Size([1000])</span>`}}),D=new se({props:{code:`# Get imagenet class mappings
url, filename = ("https://raw.githubusercontent.com/pytorch/hub/master/imagenet_classes.txt", "imagenet_classes.txt")
urllib.request.urlretrieve(url, filename) 
with open("imagenet_classes.txt", "r") as f:
    categories = [s.strip() for s in f.readlines()]

# Print top categories per image
top5_prob, top5_catid = torch.topk(probabilities, 5)
for i in range(top5_prob.size(0)):
    print(categories[top5_catid[i]], top5_prob[i].item())
# prints class names and probabilities like:
# [('Samoyed', 0.6425196528434753), ('Pomeranian', 0.04062102362513542), ('keeshond', 0.03186424449086189), ('white wolf', 0.01739676296710968), ('Eskimo dog', 0.011717947199940681)]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Get imagenet class mappings</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url, filename = (<span class="hljs-string">&quot;https://raw.githubusercontent.com/pytorch/hub/master/imagenet_classes.txt&quot;</span>, <span class="hljs-string">&quot;imagenet_classes.txt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>urllib.request.urlretrieve(url, filename) 
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> <span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;imagenet_classes.txt&quot;</span>, <span class="hljs-string">&quot;r&quot;</span>) <span class="hljs-keyword">as</span> f:
<span class="hljs-meta">... </span>    categories = [s.strip() <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> f.readlines()]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Print top categories per image</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>top5_prob, top5_catid = torch.topk(probabilities, <span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(top5_prob.size(<span class="hljs-number">0</span>)):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(categories[top5_catid[i]], top5_prob[i].item())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prints class names and probabilities like:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># [(&#x27;Samoyed&#x27;, 0.6425196528434753), (&#x27;Pomeranian&#x27;, 0.04062102362513542), (&#x27;keeshond&#x27;, 0.03186424449086189), (&#x27;white wolf&#x27;, 0.01739676296710968), (&#x27;Eskimo dog&#x27;, 0.011717947199940681)]</span>`}}),z=new de({}),Y=new se({props:{code:"model = timm.create_model('mobilenetv2_100', pretrained=True, num_classes=NUM_FINETUNE_CLASSES)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;mobilenetv2_100&#x27;</span>, pretrained=<span class="hljs-literal">True</span>, num_classes=NUM_FINETUNE_CLASSES)'}}),V=new de({}),Z=new de({}),J=new se({props:{code:`@article{DBLP:journals/corr/abs-1801-04381,
  author    = {Mark Sandler and
               Andrew G. Howard and
               Menglong Zhu and
               Andrey Zhmoginov and
               Liang{-}Chieh Chen},
  title     = {Inverted Residuals and Linear Bottlenecks: Mobile Networks for Classification,
               Detection and Segmentation},
  journal   = {CoRR},
  volume    = {abs/1801.04381},
  year      = {2018},
  url       = {http://arxiv.org/abs/1801.04381},
  archivePrefix = {arXiv},
  eprint    = {1801.04381},
  timestamp = {Tue, 12 Jan 2021 15:30:06 +0100},
  biburl    = {https://dblp.org/rec/journals/corr/abs-1801-04381.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}`,highlighted:`@article{DBLP:journals<span class="hljs-regexp">/corr/</span>abs-<span class="hljs-number">1801</span>-<span class="hljs-number">04381</span>,
  author    = {Mark Sandler and
               Andrew G. Howard and
               Menglong Zhu and
               Andrey Zhmoginov and
               Liang{-}Chieh Chen},
  title     = {Inverted Residuals and Linear Bottlenecks: Mobile Networks <span class="hljs-keyword">for</span> Classification,
               Detection and Segmentation},
  journal   = {CoRR},
  volume    = {abs/<span class="hljs-number">1801.04381</span>},
  year      = {<span class="hljs-number">2018</span>},
  url       = {http:<span class="hljs-regexp">//</span>arxiv.org<span class="hljs-regexp">/abs/</span><span class="hljs-number">1801.04381</span>},
  archivePrefix = {arXiv},
  eprint    = {<span class="hljs-number">1801.04381</span>},
  timestamp = {Tue, <span class="hljs-number">12</span> Jan <span class="hljs-number">2021</span> <span class="hljs-number">15</span>:<span class="hljs-number">30</span>:<span class="hljs-number">06</span> +<span class="hljs-number">0100</span>},
  biburl    = {https:<span class="hljs-regexp">//</span>dblp.org<span class="hljs-regexp">/rec/</span>journals<span class="hljs-regexp">/corr/</span>abs-<span class="hljs-number">1801</span>-<span class="hljs-number">04381</span>.bib},
  bibsource = {dblp computer science bibliography, https:<span class="hljs-regexp">//</span>dblp.org}
}`}}),{c(){v=n("meta"),ge=p(),j=n("h1"),E=n("a"),te=n("span"),f(C.$$.fragment),Je=p(),ae=n("span"),Oe=h("MobileNet v2"),be=p(),_=n("p"),ne=n("strong"),Fe=h("MobileNetV2"),Xe=h(" is a convolutional neural network architecture that seeks to perform well on mobile devices. It is based on an "),H=n("a"),Ke=h("inverted residual structure"),Qe=h(" where the residual connections are between the bottleneck layers.  The intermediate expansion layer uses lightweight depthwise convolutions to filter features as a source of non-linearity. As a whole, the architecture of MobileNetV2 contains the initial fully convolution layer with 32 filters, followed by 19 residual bottleneck layers."),we=p(),$=n("h2"),P=n("a"),le=n("span"),f(L.$$.fragment),We=p(),oe=n("span"),es=h("How do I use this model on an image?"),ve=p(),O=n("p"),ss=h("To load a pretrained model:"),je=p(),f(R.$$.fragment),_e=p(),F=n("p"),ts=h("To load and preprocess the image:"),$e=p(),f(B.$$.fragment),ye=p(),X=n("p"),as=h("To get the model predictions:"),ke=p(),f(G.$$.fragment),xe=p(),K=n("p"),ns=h("To get the top-5 predictions class names:"),Ee=p(),f(D.$$.fragment),Pe=p(),S=n("p"),ls=h("Replace the model name with the variant you want to use, e.g. "),re=n("code"),os=h("mobilenetv2_100"),rs=h(". You can find the IDs in the model summaries at the top of this page."),Se=p(),A=n("p"),is=h("To extract image features with this model, follow the "),Q=n("a"),ps=h("timm feature extraction examples"),hs=h(", just change the name of the model you want to use."),Ae=p(),y=n("h2"),N=n("a"),ie=n("span"),f(z.$$.fragment),ms=p(),pe=n("span"),cs=h("How do I finetune this model?"),Ne=p(),W=n("p"),fs=h("You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),Ie=p(),f(Y.$$.fragment),Te=p(),I=n("p"),us=h("To finetune on your own dataset, you have to write a training loop or adapt "),U=n("a"),ds=h(`timm\u2019s training
script`),gs=h(" to use your dataset."),qe=p(),k=n("h2"),T=n("a"),he=n("span"),f(V.$$.fragment),bs=p(),me=n("span"),ws=h("How do I train this model?"),Me=p(),q=n("p"),vs=h("You can follow the "),ee=n("a"),js=h("timm recipe scripts"),_s=h(" for training a new model afresh."),Ce=p(),x=n("h2"),M=n("a"),ce=n("span"),f(Z.$$.fragment),$s=p(),fe=n("span"),ys=h("Citation"),He=p(),f(J.$$.fragment),this.h()},l(e){const a=et('[data-svelte="svelte-1phssyn"]',document.head);v=l(a,"META",{name:!0,content:!0}),a.forEach(s),ge=m(e),j=l(e,"H1",{class:!0});var Re=o(j);E=l(Re,"A",{id:!0,class:!0,href:!0});var xs=o(E);te=l(xs,"SPAN",{});var Es=o(te);u(C.$$.fragment,Es),Es.forEach(s),xs.forEach(s),Je=m(Re),ae=l(Re,"SPAN",{});var Ps=o(ae);Oe=c(Ps,"MobileNet v2"),Ps.forEach(s),Re.forEach(s),be=m(e),_=l(e,"P",{});var ue=o(_);ne=l(ue,"STRONG",{});var Ss=o(ne);Fe=c(Ss,"MobileNetV2"),Ss.forEach(s),Xe=c(ue," is a convolutional neural network architecture that seeks to perform well on mobile devices. It is based on an "),H=l(ue,"A",{href:!0,rel:!0});var As=o(H);Ke=c(As,"inverted residual structure"),As.forEach(s),Qe=c(ue," where the residual connections are between the bottleneck layers.  The intermediate expansion layer uses lightweight depthwise convolutions to filter features as a source of non-linearity. As a whole, the architecture of MobileNetV2 contains the initial fully convolution layer with 32 filters, followed by 19 residual bottleneck layers."),ue.forEach(s),we=m(e),$=l(e,"H2",{class:!0});var Be=o($);P=l(Be,"A",{id:!0,class:!0,href:!0});var Ns=o(P);le=l(Ns,"SPAN",{});var Is=o(le);u(L.$$.fragment,Is),Is.forEach(s),Ns.forEach(s),We=m(Be),oe=l(Be,"SPAN",{});var Ts=o(oe);es=c(Ts,"How do I use this model on an image?"),Ts.forEach(s),Be.forEach(s),ve=m(e),O=l(e,"P",{});var qs=o(O);ss=c(qs,"To load a pretrained model:"),qs.forEach(s),je=m(e),u(R.$$.fragment,e),_e=m(e),F=l(e,"P",{});var Ms=o(F);ts=c(Ms,"To load and preprocess the image:"),Ms.forEach(s),$e=m(e),u(B.$$.fragment,e),ye=m(e),X=l(e,"P",{});var Cs=o(X);as=c(Cs,"To get the model predictions:"),Cs.forEach(s),ke=m(e),u(G.$$.fragment,e),xe=m(e),K=l(e,"P",{});var Hs=o(K);ns=c(Hs,"To get the top-5 predictions class names:"),Hs.forEach(s),Ee=m(e),u(D.$$.fragment,e),Pe=m(e),S=l(e,"P",{});var Ge=o(S);ls=c(Ge,"Replace the model name with the variant you want to use, e.g. "),re=l(Ge,"CODE",{});var Ls=o(re);os=c(Ls,"mobilenetv2_100"),Ls.forEach(s),rs=c(Ge,". You can find the IDs in the model summaries at the top of this page."),Ge.forEach(s),Se=m(e),A=l(e,"P",{});var De=o(A);is=c(De,"To extract image features with this model, follow the "),Q=l(De,"A",{href:!0});var Rs=o(Q);ps=c(Rs,"timm feature extraction examples"),Rs.forEach(s),hs=c(De,", just change the name of the model you want to use."),De.forEach(s),Ae=m(e),y=l(e,"H2",{class:!0});var ze=o(y);N=l(ze,"A",{id:!0,class:!0,href:!0});var Bs=o(N);ie=l(Bs,"SPAN",{});var Gs=o(ie);u(z.$$.fragment,Gs),Gs.forEach(s),Bs.forEach(s),ms=m(ze),pe=l(ze,"SPAN",{});var Ds=o(pe);cs=c(Ds,"How do I finetune this model?"),Ds.forEach(s),ze.forEach(s),Ne=m(e),W=l(e,"P",{});var zs=o(W);fs=c(zs,"You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),zs.forEach(s),Ie=m(e),u(Y.$$.fragment,e),Te=m(e),I=l(e,"P",{});var Ye=o(I);us=c(Ye,"To finetune on your own dataset, you have to write a training loop or adapt "),U=l(Ye,"A",{href:!0,rel:!0});var Ys=o(U);ds=c(Ys,`timm\u2019s training
script`),Ys.forEach(s),gs=c(Ye," to use your dataset."),Ye.forEach(s),qe=m(e),k=l(e,"H2",{class:!0});var Ue=o(k);T=l(Ue,"A",{id:!0,class:!0,href:!0});var Us=o(T);he=l(Us,"SPAN",{});var Vs=o(he);u(V.$$.fragment,Vs),Vs.forEach(s),Us.forEach(s),bs=m(Ue),me=l(Ue,"SPAN",{});var Zs=o(me);ws=c(Zs,"How do I train this model?"),Zs.forEach(s),Ue.forEach(s),Me=m(e),q=l(e,"P",{});var Ve=o(q);vs=c(Ve,"You can follow the "),ee=l(Ve,"A",{href:!0});var Js=o(ee);js=c(Js,"timm recipe scripts"),Js.forEach(s),_s=c(Ve," for training a new model afresh."),Ve.forEach(s),Ce=m(e),x=l(e,"H2",{class:!0});var Ze=o(x);M=l(Ze,"A",{id:!0,class:!0,href:!0});var Os=o(M);ce=l(Os,"SPAN",{});var Fs=o(ce);u(Z.$$.fragment,Fs),Fs.forEach(s),Os.forEach(s),$s=m(Ze),fe=l(Ze,"SPAN",{});var Xs=o(fe);ys=c(Xs,"Citation"),Xs.forEach(s),Ze.forEach(s),He=m(e),u(J.$$.fragment,e),this.h()},h(){i(v,"name","hf:doc:metadata"),i(v,"content",JSON.stringify(nt)),i(E,"id","mobilenet-v2"),i(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(E,"href","#mobilenet-v2"),i(j,"class","relative group"),i(H,"href","https://paperswithcode.com/method/inverted-residual-block"),i(H,"rel","nofollow"),i(P,"id","how-do-i-use-this-model-on-an-image"),i(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(P,"href","#how-do-i-use-this-model-on-an-image"),i($,"class","relative group"),i(Q,"href","../feature_extraction"),i(N,"id","how-do-i-finetune-this-model"),i(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(N,"href","#how-do-i-finetune-this-model"),i(y,"class","relative group"),i(U,"href","https://github.com/rwightman/pytorch-image-models/blob/master/train.py"),i(U,"rel","nofollow"),i(T,"id","how-do-i-train-this-model"),i(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(T,"href","#how-do-i-train-this-model"),i(k,"class","relative group"),i(ee,"href","../scripts"),i(M,"id","citation"),i(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(M,"href","#citation"),i(x,"class","relative group")},m(e,a){t(document.head,v),r(e,ge,a),r(e,j,a),t(j,E),t(E,te),d(C,te,null),t(j,Je),t(j,ae),t(ae,Oe),r(e,be,a),r(e,_,a),t(_,ne),t(ne,Fe),t(_,Xe),t(_,H),t(H,Ke),t(_,Qe),r(e,we,a),r(e,$,a),t($,P),t(P,le),d(L,le,null),t($,We),t($,oe),t(oe,es),r(e,ve,a),r(e,O,a),t(O,ss),r(e,je,a),d(R,e,a),r(e,_e,a),r(e,F,a),t(F,ts),r(e,$e,a),d(B,e,a),r(e,ye,a),r(e,X,a),t(X,as),r(e,ke,a),d(G,e,a),r(e,xe,a),r(e,K,a),t(K,ns),r(e,Ee,a),d(D,e,a),r(e,Pe,a),r(e,S,a),t(S,ls),t(S,re),t(re,os),t(S,rs),r(e,Se,a),r(e,A,a),t(A,is),t(A,Q),t(Q,ps),t(A,hs),r(e,Ae,a),r(e,y,a),t(y,N),t(N,ie),d(z,ie,null),t(y,ms),t(y,pe),t(pe,cs),r(e,Ne,a),r(e,W,a),t(W,fs),r(e,Ie,a),d(Y,e,a),r(e,Te,a),r(e,I,a),t(I,us),t(I,U),t(U,ds),t(I,gs),r(e,qe,a),r(e,k,a),t(k,T),t(T,he),d(V,he,null),t(k,bs),t(k,me),t(me,ws),r(e,Me,a),r(e,q,a),t(q,vs),t(q,ee),t(ee,js),t(q,_s),r(e,Ce,a),r(e,x,a),t(x,M),t(M,ce),d(Z,ce,null),t(x,$s),t(x,fe),t(fe,ys),r(e,He,a),d(J,e,a),Le=!0},p:st,i(e){Le||(g(C.$$.fragment,e),g(L.$$.fragment,e),g(R.$$.fragment,e),g(B.$$.fragment,e),g(G.$$.fragment,e),g(D.$$.fragment,e),g(z.$$.fragment,e),g(Y.$$.fragment,e),g(V.$$.fragment,e),g(Z.$$.fragment,e),g(J.$$.fragment,e),Le=!0)},o(e){b(C.$$.fragment,e),b(L.$$.fragment,e),b(R.$$.fragment,e),b(B.$$.fragment,e),b(G.$$.fragment,e),b(D.$$.fragment,e),b(z.$$.fragment,e),b(Y.$$.fragment,e),b(V.$$.fragment,e),b(Z.$$.fragment,e),b(J.$$.fragment,e),Le=!1},d(e){s(v),e&&s(ge),e&&s(j),w(C),e&&s(be),e&&s(_),e&&s(we),e&&s($),w(L),e&&s(ve),e&&s(O),e&&s(je),w(R,e),e&&s(_e),e&&s(F),e&&s($e),w(B,e),e&&s(ye),e&&s(X),e&&s(ke),w(G,e),e&&s(xe),e&&s(K),e&&s(Ee),w(D,e),e&&s(Pe),e&&s(S),e&&s(Se),e&&s(A),e&&s(Ae),e&&s(y),w(z),e&&s(Ne),e&&s(W),e&&s(Ie),w(Y,e),e&&s(Te),e&&s(I),e&&s(qe),e&&s(k),w(V),e&&s(Me),e&&s(q),e&&s(Ce),e&&s(x),w(Z),e&&s(He),w(J,e)}}}const nt={local:"mobilenet-v2",sections:[{local:"how-do-i-use-this-model-on-an-image",title:"How do I use this model on an image?"},{local:"how-do-i-finetune-this-model",title:"How do I finetune this model?"},{local:"how-do-i-train-this-model",title:"How do I train this model?"},{local:"citation",title:"Citation"}],title:"MobileNet v2"};function lt(ks){return tt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class pt extends Ks{constructor(v){super();Qs(this,v,lt,at,Ws,{})}}export{pt as default,nt as metadata};
