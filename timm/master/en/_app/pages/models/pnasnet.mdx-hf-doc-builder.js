import{S as Xe,i as Ze,s as Qe,e as n,k as i,w as f,t as p,M as st,c as r,d as e,m,a as l,x as u,h,b as c,G as t,g as o,y as g,L as et,q as d,o as w,B as v,v as tt}from"../../chunks/vendor-hf-doc-builder.js";import{I as gs}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ss}from"../../chunks/CodeBlock-hf-doc-builder.js";function at(ke){let _,ds,j,E,es,H,Ds,ts,Ks,ws,$,as,Vs,Ws,ns,Xs,Zs,vs,y,P,rs,L,Qs,ls,se,_s,D,ee,js,M,$s,K,te,ys,z,bs,V,ae,ks,B,xs,W,ne,Es,Y,Ps,S,re,os,le,oe,Ss,N,ie,X,pe,me,Ns,b,A,is,G,he,ps,ce,As,Z,fe,qs,J,Is,q,ue,R,ge,de,Ts,k,I,ms,F,we,hs,ve,Cs,T,_e,Q,je,$e,Hs,x,C,cs,O,ye,fs,be,Ls,U,Ms;return H=new gs({}),L=new gs({}),M=new ss({props:{code:`import timm
model = timm.create_model('pnasnet5large', pretrained=True)
model.eval()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> timm
<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;pnasnet5large&#x27;</span>, pretrained=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">eval</span>()`}}),z=new ss({props:{code:`import urllib
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
<span class="hljs-meta">&gt;&gt;&gt; </span>tensor = transform(img).unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-comment"># transform and add batch dimension</span>`}}),B=new ss({props:{code:`import torch
with torch.no_grad():
    out = model(tensor)
probabilities = torch.nn.functional.softmax(out[0], dim=0)
print(probabilities.shape)
# prints: torch.Size([1000])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    out = model(tensor)
<span class="hljs-meta">&gt;&gt;&gt; </span>probabilities = torch.nn.functional.softmax(out[<span class="hljs-number">0</span>], dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(probabilities.shape)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prints: torch.Size([1000])</span>`}}),Y=new ss({props:{code:`# Get imagenet class mappings
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># [(&#x27;Samoyed&#x27;, 0.6425196528434753), (&#x27;Pomeranian&#x27;, 0.04062102362513542), (&#x27;keeshond&#x27;, 0.03186424449086189), (&#x27;white wolf&#x27;, 0.01739676296710968), (&#x27;Eskimo dog&#x27;, 0.011717947199940681)]</span>`}}),G=new gs({}),J=new ss({props:{code:"model = timm.create_model('pnasnet5large', pretrained=True, num_classes=NUM_FINETUNE_CLASSES)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;pnasnet5large&#x27;</span>, pretrained=<span class="hljs-literal">True</span>, num_classes=NUM_FINETUNE_CLASSES)'}}),F=new gs({}),O=new gs({}),U=new ss({props:{code:`@misc{liu2018progressive,
      title={Progressive Neural Architecture Search}, 
      author={Chenxi Liu and Barret Zoph and Maxim Neumann and Jonathon Shlens and Wei Hua and Li-Jia Li and Li Fei-Fei and Alan Yuille and Jonathan Huang and Kevin Murphy},
      year={2018},
      eprint={1712.00559},
      archivePrefix={arXiv},
      primaryClass={cs.CV}
}`,highlighted:`@misc{liu2018progressive,
      title={Progressive Neural Architecture Search}, 
      author={Chenxi Liu <span class="hljs-keyword">and </span><span class="hljs-keyword">Barret </span>Zoph <span class="hljs-keyword">and </span>Maxim Neumann <span class="hljs-keyword">and </span><span class="hljs-keyword">Jonathon </span><span class="hljs-keyword">Shlens </span><span class="hljs-keyword">and </span>Wei Hua <span class="hljs-keyword">and </span>Li-<span class="hljs-keyword">Jia </span>Li <span class="hljs-keyword">and </span>Li Fei-Fei <span class="hljs-keyword">and </span>Alan Yuille <span class="hljs-keyword">and </span><span class="hljs-keyword">Jonathan </span>Huang <span class="hljs-keyword">and </span>Kevin Murphy},
      year={<span class="hljs-number">2018</span>},
      eprint={<span class="hljs-number">1712</span>.<span class="hljs-number">00559</span>},
      archivePrefix={arXiv},
      primaryClass={cs.CV}
}`}}),{c(){_=n("meta"),ds=i(),j=n("h1"),E=n("a"),es=n("span"),f(H.$$.fragment),Ds=i(),ts=n("span"),Ks=p("PNASNet"),ws=i(),$=n("p"),as=n("strong"),Vs=p("Progressive Neural Architecture Search"),Ws=p(", or "),ns=n("strong"),Xs=p("PNAS"),Zs=p(", is a method for learning the structure of convolutional neural networks (CNNs). It uses a sequential model-based optimization (SMBO) strategy, where we search the space of cell structures, starting with simple (shallow) models and progressing to complex ones, pruning out unpromising structures as we go."),vs=i(),y=n("h2"),P=n("a"),rs=n("span"),f(L.$$.fragment),Qs=i(),ls=n("span"),se=p("How do I use this model on an image?"),_s=i(),D=n("p"),ee=p("To load a pretrained model:"),js=i(),f(M.$$.fragment),$s=i(),K=n("p"),te=p("To load and preprocess the image:"),ys=i(),f(z.$$.fragment),bs=i(),V=n("p"),ae=p("To get the model predictions:"),ks=i(),f(B.$$.fragment),xs=i(),W=n("p"),ne=p("To get the top-5 predictions class names:"),Es=i(),f(Y.$$.fragment),Ps=i(),S=n("p"),re=p("Replace the model name with the variant you want to use, e.g. "),os=n("code"),le=p("pnasnet5large"),oe=p(". You can find the IDs in the model summaries at the top of this page."),Ss=i(),N=n("p"),ie=p("To extract image features with this model, follow the "),X=n("a"),pe=p("timm feature extraction examples"),me=p(", just change the name of the model you want to use."),Ns=i(),b=n("h2"),A=n("a"),is=n("span"),f(G.$$.fragment),he=i(),ps=n("span"),ce=p("How do I finetune this model?"),As=i(),Z=n("p"),fe=p("You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),qs=i(),f(J.$$.fragment),Is=i(),q=n("p"),ue=p("To finetune on your own dataset, you have to write a training loop or adapt "),R=n("a"),ge=p(`timm\u2019s training
script`),de=p(" to use your dataset."),Ts=i(),k=n("h2"),I=n("a"),ms=n("span"),f(F.$$.fragment),we=i(),hs=n("span"),ve=p("How do I train this model?"),Cs=i(),T=n("p"),_e=p("You can follow the "),Q=n("a"),je=p("timm recipe scripts"),$e=p(" for training a new model afresh."),Hs=i(),x=n("h2"),C=n("a"),cs=n("span"),f(O.$$.fragment),ye=i(),fs=n("span"),be=p("Citation"),Ls=i(),f(U.$$.fragment),this.h()},l(s){const a=st('[data-svelte="svelte-1phssyn"]',document.head);_=r(a,"META",{name:!0,content:!0}),a.forEach(e),ds=m(s),j=r(s,"H1",{class:!0});var zs=l(j);E=r(zs,"A",{id:!0,class:!0,href:!0});var xe=l(E);es=r(xe,"SPAN",{});var Ee=l(es);u(H.$$.fragment,Ee),Ee.forEach(e),xe.forEach(e),Ds=m(zs),ts=r(zs,"SPAN",{});var Pe=l(ts);Ks=h(Pe,"PNASNet"),Pe.forEach(e),zs.forEach(e),ws=m(s),$=r(s,"P",{});var us=l($);as=r(us,"STRONG",{});var Se=l(as);Vs=h(Se,"Progressive Neural Architecture Search"),Se.forEach(e),Ws=h(us,", or "),ns=r(us,"STRONG",{});var Ne=l(ns);Xs=h(Ne,"PNAS"),Ne.forEach(e),Zs=h(us,", is a method for learning the structure of convolutional neural networks (CNNs). It uses a sequential model-based optimization (SMBO) strategy, where we search the space of cell structures, starting with simple (shallow) models and progressing to complex ones, pruning out unpromising structures as we go."),us.forEach(e),vs=m(s),y=r(s,"H2",{class:!0});var Bs=l(y);P=r(Bs,"A",{id:!0,class:!0,href:!0});var Ae=l(P);rs=r(Ae,"SPAN",{});var qe=l(rs);u(L.$$.fragment,qe),qe.forEach(e),Ae.forEach(e),Qs=m(Bs),ls=r(Bs,"SPAN",{});var Ie=l(ls);se=h(Ie,"How do I use this model on an image?"),Ie.forEach(e),Bs.forEach(e),_s=m(s),D=r(s,"P",{});var Te=l(D);ee=h(Te,"To load a pretrained model:"),Te.forEach(e),js=m(s),u(M.$$.fragment,s),$s=m(s),K=r(s,"P",{});var Ce=l(K);te=h(Ce,"To load and preprocess the image:"),Ce.forEach(e),ys=m(s),u(z.$$.fragment,s),bs=m(s),V=r(s,"P",{});var He=l(V);ae=h(He,"To get the model predictions:"),He.forEach(e),ks=m(s),u(B.$$.fragment,s),xs=m(s),W=r(s,"P",{});var Le=l(W);ne=h(Le,"To get the top-5 predictions class names:"),Le.forEach(e),Es=m(s),u(Y.$$.fragment,s),Ps=m(s),S=r(s,"P",{});var Ys=l(S);re=h(Ys,"Replace the model name with the variant you want to use, e.g. "),os=r(Ys,"CODE",{});var Me=l(os);le=h(Me,"pnasnet5large"),Me.forEach(e),oe=h(Ys,". You can find the IDs in the model summaries at the top of this page."),Ys.forEach(e),Ss=m(s),N=r(s,"P",{});var Gs=l(N);ie=h(Gs,"To extract image features with this model, follow the "),X=r(Gs,"A",{href:!0});var ze=l(X);pe=h(ze,"timm feature extraction examples"),ze.forEach(e),me=h(Gs,", just change the name of the model you want to use."),Gs.forEach(e),Ns=m(s),b=r(s,"H2",{class:!0});var Js=l(b);A=r(Js,"A",{id:!0,class:!0,href:!0});var Be=l(A);is=r(Be,"SPAN",{});var Ye=l(is);u(G.$$.fragment,Ye),Ye.forEach(e),Be.forEach(e),he=m(Js),ps=r(Js,"SPAN",{});var Ge=l(ps);ce=h(Ge,"How do I finetune this model?"),Ge.forEach(e),Js.forEach(e),As=m(s),Z=r(s,"P",{});var Je=l(Z);fe=h(Je,"You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),Je.forEach(e),qs=m(s),u(J.$$.fragment,s),Is=m(s),q=r(s,"P",{});var Rs=l(q);ue=h(Rs,"To finetune on your own dataset, you have to write a training loop or adapt "),R=r(Rs,"A",{href:!0,rel:!0});var Re=l(R);ge=h(Re,`timm\u2019s training
script`),Re.forEach(e),de=h(Rs," to use your dataset."),Rs.forEach(e),Ts=m(s),k=r(s,"H2",{class:!0});var Fs=l(k);I=r(Fs,"A",{id:!0,class:!0,href:!0});var Fe=l(I);ms=r(Fe,"SPAN",{});var Oe=l(ms);u(F.$$.fragment,Oe),Oe.forEach(e),Fe.forEach(e),we=m(Fs),hs=r(Fs,"SPAN",{});var Ue=l(hs);ve=h(Ue,"How do I train this model?"),Ue.forEach(e),Fs.forEach(e),Cs=m(s),T=r(s,"P",{});var Os=l(T);_e=h(Os,"You can follow the "),Q=r(Os,"A",{href:!0});var De=l(Q);je=h(De,"timm recipe scripts"),De.forEach(e),$e=h(Os," for training a new model afresh."),Os.forEach(e),Hs=m(s),x=r(s,"H2",{class:!0});var Us=l(x);C=r(Us,"A",{id:!0,class:!0,href:!0});var Ke=l(C);cs=r(Ke,"SPAN",{});var Ve=l(cs);u(O.$$.fragment,Ve),Ve.forEach(e),Ke.forEach(e),ye=m(Us),fs=r(Us,"SPAN",{});var We=l(fs);be=h(We,"Citation"),We.forEach(e),Us.forEach(e),Ls=m(s),u(U.$$.fragment,s),this.h()},h(){c(_,"name","hf:doc:metadata"),c(_,"content",JSON.stringify(nt)),c(E,"id","pnasnet"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#pnasnet"),c(j,"class","relative group"),c(P,"id","how-do-i-use-this-model-on-an-image"),c(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(P,"href","#how-do-i-use-this-model-on-an-image"),c(y,"class","relative group"),c(X,"href","../feature_extraction"),c(A,"id","how-do-i-finetune-this-model"),c(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(A,"href","#how-do-i-finetune-this-model"),c(b,"class","relative group"),c(R,"href","https://github.com/rwightman/pytorch-image-models/blob/master/train.py"),c(R,"rel","nofollow"),c(I,"id","how-do-i-train-this-model"),c(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(I,"href","#how-do-i-train-this-model"),c(k,"class","relative group"),c(Q,"href","../scripts"),c(C,"id","citation"),c(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(C,"href","#citation"),c(x,"class","relative group")},m(s,a){t(document.head,_),o(s,ds,a),o(s,j,a),t(j,E),t(E,es),g(H,es,null),t(j,Ds),t(j,ts),t(ts,Ks),o(s,ws,a),o(s,$,a),t($,as),t(as,Vs),t($,Ws),t($,ns),t(ns,Xs),t($,Zs),o(s,vs,a),o(s,y,a),t(y,P),t(P,rs),g(L,rs,null),t(y,Qs),t(y,ls),t(ls,se),o(s,_s,a),o(s,D,a),t(D,ee),o(s,js,a),g(M,s,a),o(s,$s,a),o(s,K,a),t(K,te),o(s,ys,a),g(z,s,a),o(s,bs,a),o(s,V,a),t(V,ae),o(s,ks,a),g(B,s,a),o(s,xs,a),o(s,W,a),t(W,ne),o(s,Es,a),g(Y,s,a),o(s,Ps,a),o(s,S,a),t(S,re),t(S,os),t(os,le),t(S,oe),o(s,Ss,a),o(s,N,a),t(N,ie),t(N,X),t(X,pe),t(N,me),o(s,Ns,a),o(s,b,a),t(b,A),t(A,is),g(G,is,null),t(b,he),t(b,ps),t(ps,ce),o(s,As,a),o(s,Z,a),t(Z,fe),o(s,qs,a),g(J,s,a),o(s,Is,a),o(s,q,a),t(q,ue),t(q,R),t(R,ge),t(q,de),o(s,Ts,a),o(s,k,a),t(k,I),t(I,ms),g(F,ms,null),t(k,we),t(k,hs),t(hs,ve),o(s,Cs,a),o(s,T,a),t(T,_e),t(T,Q),t(Q,je),t(T,$e),o(s,Hs,a),o(s,x,a),t(x,C),t(C,cs),g(O,cs,null),t(x,ye),t(x,fs),t(fs,be),o(s,Ls,a),g(U,s,a),Ms=!0},p:et,i(s){Ms||(d(H.$$.fragment,s),d(L.$$.fragment,s),d(M.$$.fragment,s),d(z.$$.fragment,s),d(B.$$.fragment,s),d(Y.$$.fragment,s),d(G.$$.fragment,s),d(J.$$.fragment,s),d(F.$$.fragment,s),d(O.$$.fragment,s),d(U.$$.fragment,s),Ms=!0)},o(s){w(H.$$.fragment,s),w(L.$$.fragment,s),w(M.$$.fragment,s),w(z.$$.fragment,s),w(B.$$.fragment,s),w(Y.$$.fragment,s),w(G.$$.fragment,s),w(J.$$.fragment,s),w(F.$$.fragment,s),w(O.$$.fragment,s),w(U.$$.fragment,s),Ms=!1},d(s){e(_),s&&e(ds),s&&e(j),v(H),s&&e(ws),s&&e($),s&&e(vs),s&&e(y),v(L),s&&e(_s),s&&e(D),s&&e(js),v(M,s),s&&e($s),s&&e(K),s&&e(ys),v(z,s),s&&e(bs),s&&e(V),s&&e(ks),v(B,s),s&&e(xs),s&&e(W),s&&e(Es),v(Y,s),s&&e(Ps),s&&e(S),s&&e(Ss),s&&e(N),s&&e(Ns),s&&e(b),v(G),s&&e(As),s&&e(Z),s&&e(qs),v(J,s),s&&e(Is),s&&e(q),s&&e(Ts),s&&e(k),v(F),s&&e(Cs),s&&e(T),s&&e(Hs),s&&e(x),v(O),s&&e(Ls),v(U,s)}}}const nt={local:"pnasnet",sections:[{local:"how-do-i-use-this-model-on-an-image",title:"How do I use this model on an image?"},{local:"how-do-i-finetune-this-model",title:"How do I finetune this model?"},{local:"how-do-i-train-this-model",title:"How do I train this model?"},{local:"citation",title:"Citation"}],title:"PNASNet"};function rt(ke){return tt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class pt extends Xe{constructor(_){super();Ze(this,_,rt,at,Qe,{})}}export{pt as default,nt as metadata};
