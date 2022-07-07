import{S as Bs,i as Ss,s as Is,e as i,k as d,w,t as l,M as Ds,c as r,d as t,m as h,a as n,x as g,h as p,b as m,G as s,g as o,y,q as v,o as $,B as k,v as Ls}from"../chunks/vendor-hf-doc-builder.js";import{T as Ns}from"../chunks/Tip-hf-doc-builder.js";import{I as ss}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as L}from"../chunks/CodeBlock-hf-doc-builder.js";function Cs(Ee){let f,P;return{c(){f=i("p"),P=l("Note that the randomly created model is initialized with \u201Cempty\u201D tensors, which take the space in memory without filling it (thus the random values are whatever was in this chunk of memory at a given time). The random initialization following the appropriate distribution for the kind of model/parameters instatiated (like a normal distribution for instance) is only performed after step 3 on the non-initialized weights, to be as fast as possible!")},l(c){f=r(c,"P",{});var u=n(f);P=p(u,"Note that the randomly created model is initialized with \u201Cempty\u201D tensors, which take the space in memory without filling it (thus the random values are whatever was in this chunk of memory at a given time). The random initialization following the appropriate distribution for the kind of model/parameters instatiated (like a normal distribution for instance) is only performed after step 3 on the non-initialized weights, to be as fast as possible!"),u.forEach(t)},m(c,u){o(c,f,u),s(f,P)},d(c){c&&t(f)}}}function Rs(Ee){let f,P,c,u,he,N,nt,me,pt,Pe,V,dt,Ae,j,fe,ht,mt,ce,ft,ct,ue,ut,ze,A,_t,_e,wt,gt,Te,z,Me,X,yt,qe,x,T,we,C,vt,ge,$t,Be,M,kt,ye,jt,bt,Se,q,xt,ve,Et,Pt,Ie,R,De,B,At,Z,zt,Tt,Le,O,Ne,ee,Mt,Ce,G,Re,b,qt,$e,Bt,St,te,It,Dt,Oe,W,Ge,se,Lt,We,ae,Nt,He,H,Ye,oe,Ct,Je,Y,Ue,S,Rt,ke,Ot,Gt,Fe,J,Ke,_,Wt,ie,Ht,Yt,je,Jt,Ut,re,Ft,Kt,Qe,U,Ve,E,I,be,F,Qt,xe,Vt,Xe,le,Xt,Ze,K,Zt,ne,es,et;return N=new ss({}),z=new Ns({props:{$$slots:{default:[Cs]},$$scope:{ctx:Ee}}}),C=new ss({}),R=new L({props:{code:`from transformers import AutoModel

model = AutoModel.from_pretrained("bert-base-cased")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel

model = AutoModel.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)`}}),O=new L({props:{code:`import os
import tempfile

with tempfile.TemporaryDirectory() as tmp_dir:
    model.save_pretrained(tmp_dir)
    print(sorted(os.listdir(tmp_dir)))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> os
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tempfile

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tempfile.TemporaryDirectory() <span class="hljs-keyword">as</span> tmp_dir:
<span class="hljs-meta">... </span>    model.save_pretrained(tmp_dir)
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-built_in">sorted</span>(os.listdir(tmp_dir)))
[<span class="hljs-string">&#x27;config.json&#x27;</span>, <span class="hljs-string">&#x27;pytorch_model.bin&#x27;</span>]`}}),G=new L({props:{code:`with tempfile.TemporaryDirectory() as tmp_dir:
    model.save_pretrained(tmp_dir, max_shard_size="200MB")
    print(sorted(os.listdir(tmp_dir)))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tempfile.TemporaryDirectory() <span class="hljs-keyword">as</span> tmp_dir:
<span class="hljs-meta">... </span>    model.save_pretrained(tmp_dir, max_shard_size=<span class="hljs-string">&quot;200MB&quot;</span>)
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-built_in">sorted</span>(os.listdir(tmp_dir)))
[<span class="hljs-string">&#x27;config.json&#x27;</span>, <span class="hljs-string">&#x27;pytorch_model-00001-of-00003.bin&#x27;</span>, <span class="hljs-string">&#x27;pytorch_model-00002-of-00003.bin&#x27;</span>, <span class="hljs-string">&#x27;pytorch_model-00003-of-00003.bin&#x27;</span>, <span class="hljs-string">&#x27;pytorch_model.bin.index.json&#x27;</span>]`}}),W=new L({props:{code:`with tempfile.TemporaryDirectory() as tmp_dir:
    model.save_pretrained(tmp_dir, max_shard_size="200MB")
    new_model = AutoModel.from_pretrained(tmp_dir)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tempfile.TemporaryDirectory() <span class="hljs-keyword">as</span> tmp_dir:
<span class="hljs-meta">... </span>    model.save_pretrained(tmp_dir, max_shard_size=<span class="hljs-string">&quot;200MB&quot;</span>)
<span class="hljs-meta">... </span>    new_model = AutoModel.from_pretrained(tmp_dir)`}}),H=new L({props:{code:`import json

with tempfile.TemporaryDirectory() as tmp_dir:
    model.save_pretrained(tmp_dir, max_shard_size="200MB")
    with open(os.path.join(tmp_dir, "pytorch_model.bin.index.json"), "r") as f:
        index = json.load(f)

print(index.keys())`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> json

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tempfile.TemporaryDirectory() <span class="hljs-keyword">as</span> tmp_dir:
<span class="hljs-meta">... </span>    model.save_pretrained(tmp_dir, max_shard_size=<span class="hljs-string">&quot;200MB&quot;</span>)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">with</span> <span class="hljs-built_in">open</span>(os.path.join(tmp_dir, <span class="hljs-string">&quot;pytorch_model.bin.index.json&quot;</span>), <span class="hljs-string">&quot;r&quot;</span>) <span class="hljs-keyword">as</span> f:
<span class="hljs-meta">... </span>        index = json.load(f)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(index.keys())
dict_keys([<span class="hljs-string">&#x27;metadata&#x27;</span>, <span class="hljs-string">&#x27;weight_map&#x27;</span>])`}}),Y=new L({props:{code:'index["metadata"]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>index[<span class="hljs-string">&quot;metadata&quot;</span>]
{<span class="hljs-string">&#x27;total_size&#x27;</span>: <span class="hljs-number">433245184</span>}`}}),J=new L({props:{code:'index["weight_map"]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>index[<span class="hljs-string">&quot;weight_map&quot;</span>]
{<span class="hljs-string">&#x27;embeddings.LayerNorm.bias&#x27;</span>: <span class="hljs-string">&#x27;pytorch_model-00001-of-00003.bin&#x27;</span>,
 <span class="hljs-string">&#x27;embeddings.LayerNorm.weight&#x27;</span>: <span class="hljs-string">&#x27;pytorch_model-00001-of-00003.bin&#x27;</span>,
 ...`}}),U=new L({props:{code:`from transformers.modeling_utils import load_sharded_checkpoint

with tempfile.TemporaryDirectory() as tmp_dir:
    model.save_pretrained(tmp_dir, max_shard_size="200MB")
    load_sharded_checkpoint(model, tmp_dir)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.modeling_utils <span class="hljs-keyword">import</span> load_sharded_checkpoint

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tempfile.TemporaryDirectory() <span class="hljs-keyword">as</span> tmp_dir:
<span class="hljs-meta">... </span>    model.save_pretrained(tmp_dir, max_shard_size=<span class="hljs-string">&quot;200MB&quot;</span>)
<span class="hljs-meta">... </span>    load_sharded_checkpoint(model, tmp_dir)`}}),F=new ss({}),{c(){f=i("meta"),P=d(),c=i("h1"),u=i("a"),he=i("span"),w(N.$$.fragment),nt=d(),me=i("span"),pt=l("Instantiating a big model"),Pe=d(),V=i("p"),dt=l(`When you want to use a very big pretrained model, one challenge is to minimize the use of the RAM. The usual workflow
from PyTorch is:`),Ae=d(),j=i("ol"),fe=i("li"),ht=l("Create your model with random weights."),mt=d(),ce=i("li"),ft=l("Load your pretrained weights."),ct=d(),ue=i("li"),ut=l("Put those pretrained weights in your random model."),ze=d(),A=i("p"),_t=l("Step 1 and 2 both require a full version of the model in memory, which is not a problem in most cases, but if your model starts weighing several GigaBytes, those two copies can make you got our of RAM. Even worse, if you are using "),_e=i("code"),wt=l("torch.distributed"),gt=l(" to launch a distributed training, each process will load the pretrained model and store these two copies in RAM."),Te=d(),w(z.$$.fragment),Me=d(),X=i("p"),yt=l("In this guide, we explore the solutions Transformers offer to deal with this issue. Note that this is an area of active development, so the APIs explained here may change slightly in the future."),qe=d(),x=i("h2"),T=i("a"),we=i("span"),w(C.$$.fragment),vt=d(),ge=i("span"),$t=l("Sharded checkpoints"),Be=d(),M=i("p"),kt=l("Since version 4.18.0, model checkpoints that end up taking more than 10GB of space are automatically sharded in smaller pieces. In terms of having one single checkpoint when you do "),ye=i("code"),jt=l("model.save_pretrained(save_dir)"),bt=l(", you will end up with several partial checkpoints (each of which being of size < 10GB) and an index that maps parameter names to the files they are stored in."),Se=d(),q=i("p"),xt=l("You can control the maximum size before sharding with the "),ve=i("code"),Et=l("max_shard_size"),Pt=l(" parameter, so for the sake of an example, we\u2019ll use a normal-size models with a small shard size: let\u2019s take a traditional BERT model."),Ie=d(),w(R.$$.fragment),De=d(),B=i("p"),At=l("If you save it using "),Z=i("a"),zt=l("save_pretrained()"),Tt=l(", you will get a new folder with two files: the config of the model and its weights:"),Le=d(),w(O.$$.fragment),Ne=d(),ee=i("p"),Mt=l("Now let\u2019s use a maximum shard size of 200MB:"),Ce=d(),w(G.$$.fragment),Re=d(),b=i("p"),qt=l("On top of the configuration of the model, we see three different weights files, and an "),$e=i("code"),Bt=l("index.json"),St=l(" file which is our index. A checkpoint like this can be fully reloaded using the "),te=i("a"),It=l("from_pretrained()"),Dt=l(" method:"),Oe=d(),w(W.$$.fragment),Ge=d(),se=i("p"),Lt=l("The main advantage of doing this for big models is that during step 2 of the workflow shown above, each shard of the checkpoint is loaded after the previous one, capping the memory usage in RAM to the model size plus the size of the biggest shard."),We=d(),ae=i("p"),Nt=l("Beind the scenes, the index file is used to determine which keys are in the checkpoint, and where the corresponding weights are stored. We can load that index like any json and get a dictionary:"),He=d(),w(H.$$.fragment),Ye=d(),oe=i("p"),Ct=l("The metadata just consists of the total size of the model for now. We plan to add several other informations in the future:"),Je=d(),w(Y.$$.fragment),Ue=d(),S=i("p"),Rt=l("The weights map is the main part of this index, which maps each parameter name (as usually found in a PyTorch model "),ke=i("code"),Ot=l("state_dict"),Gt=l(") to the file it\u2019s stored in:"),Fe=d(),w(J.$$.fragment),Ke=d(),_=i("p"),Wt=l("If you want to directly load such a sharded checkpoint inside a model without using "),ie=i("a"),Ht=l("from_pretrained()"),Yt=l(" (like you would do "),je=i("code"),Jt=l("model.load_state_dict()"),Ut=l(" for a full checkpoint) you should use "),re=i("a"),Ft=l("load_sharded_checkpoint()"),Kt=l(":"),Qe=d(),w(U.$$.fragment),Ve=d(),E=i("h2"),I=i("a"),be=i("span"),w(F.$$.fragment),Qt=d(),xe=i("span"),Vt=l("Low memory loading"),Xe=d(),le=i("p"),Xt=l("Sharded checkpoints reduce the memory usage during step 2 of the workflow mentioned above, but in order to use that model in a low memory setting, we recommend leveraging our tools based on the Accelerate library."),Ze=d(),K=i("p"),Zt=l("Please read the following guide for more information: "),ne=i("a"),es=l("Large model loading using Accelerate"),this.h()},l(e){const a=Ds('[data-svelte="svelte-1phssyn"]',document.head);f=r(a,"META",{name:!0,content:!0}),a.forEach(t),P=h(e),c=r(e,"H1",{class:!0});var Q=n(c);u=r(Q,"A",{id:!0,class:!0,href:!0});var as=n(u);he=r(as,"SPAN",{});var os=n(he);g(N.$$.fragment,os),os.forEach(t),as.forEach(t),nt=h(Q),me=r(Q,"SPAN",{});var is=n(me);pt=p(is,"Instantiating a big model"),is.forEach(t),Q.forEach(t),Pe=h(e),V=r(e,"P",{});var rs=n(V);dt=p(rs,`When you want to use a very big pretrained model, one challenge is to minimize the use of the RAM. The usual workflow
from PyTorch is:`),rs.forEach(t),Ae=h(e),j=r(e,"OL",{});var pe=n(j);fe=r(pe,"LI",{});var ls=n(fe);ht=p(ls,"Create your model with random weights."),ls.forEach(t),mt=h(pe),ce=r(pe,"LI",{});var ns=n(ce);ft=p(ns,"Load your pretrained weights."),ns.forEach(t),ct=h(pe),ue=r(pe,"LI",{});var ps=n(ue);ut=p(ps,"Put those pretrained weights in your random model."),ps.forEach(t),pe.forEach(t),ze=h(e),A=r(e,"P",{});var tt=n(A);_t=p(tt,"Step 1 and 2 both require a full version of the model in memory, which is not a problem in most cases, but if your model starts weighing several GigaBytes, those two copies can make you got our of RAM. Even worse, if you are using "),_e=r(tt,"CODE",{});var ds=n(_e);wt=p(ds,"torch.distributed"),ds.forEach(t),gt=p(tt," to launch a distributed training, each process will load the pretrained model and store these two copies in RAM."),tt.forEach(t),Te=h(e),g(z.$$.fragment,e),Me=h(e),X=r(e,"P",{});var hs=n(X);yt=p(hs,"In this guide, we explore the solutions Transformers offer to deal with this issue. Note that this is an area of active development, so the APIs explained here may change slightly in the future."),hs.forEach(t),qe=h(e),x=r(e,"H2",{class:!0});var st=n(x);T=r(st,"A",{id:!0,class:!0,href:!0});var ms=n(T);we=r(ms,"SPAN",{});var fs=n(we);g(C.$$.fragment,fs),fs.forEach(t),ms.forEach(t),vt=h(st),ge=r(st,"SPAN",{});var cs=n(ge);$t=p(cs,"Sharded checkpoints"),cs.forEach(t),st.forEach(t),Be=h(e),M=r(e,"P",{});var at=n(M);kt=p(at,"Since version 4.18.0, model checkpoints that end up taking more than 10GB of space are automatically sharded in smaller pieces. In terms of having one single checkpoint when you do "),ye=r(at,"CODE",{});var us=n(ye);jt=p(us,"model.save_pretrained(save_dir)"),us.forEach(t),bt=p(at,", you will end up with several partial checkpoints (each of which being of size < 10GB) and an index that maps parameter names to the files they are stored in."),at.forEach(t),Se=h(e),q=r(e,"P",{});var ot=n(q);xt=p(ot,"You can control the maximum size before sharding with the "),ve=r(ot,"CODE",{});var _s=n(ve);Et=p(_s,"max_shard_size"),_s.forEach(t),Pt=p(ot," parameter, so for the sake of an example, we\u2019ll use a normal-size models with a small shard size: let\u2019s take a traditional BERT model."),ot.forEach(t),Ie=h(e),g(R.$$.fragment,e),De=h(e),B=r(e,"P",{});var it=n(B);At=p(it,"If you save it using "),Z=r(it,"A",{href:!0});var ws=n(Z);zt=p(ws,"save_pretrained()"),ws.forEach(t),Tt=p(it,", you will get a new folder with two files: the config of the model and its weights:"),it.forEach(t),Le=h(e),g(O.$$.fragment,e),Ne=h(e),ee=r(e,"P",{});var gs=n(ee);Mt=p(gs,"Now let\u2019s use a maximum shard size of 200MB:"),gs.forEach(t),Ce=h(e),g(G.$$.fragment,e),Re=h(e),b=r(e,"P",{});var de=n(b);qt=p(de,"On top of the configuration of the model, we see three different weights files, and an "),$e=r(de,"CODE",{});var ys=n($e);Bt=p(ys,"index.json"),ys.forEach(t),St=p(de," file which is our index. A checkpoint like this can be fully reloaded using the "),te=r(de,"A",{href:!0});var vs=n(te);It=p(vs,"from_pretrained()"),vs.forEach(t),Dt=p(de," method:"),de.forEach(t),Oe=h(e),g(W.$$.fragment,e),Ge=h(e),se=r(e,"P",{});var $s=n(se);Lt=p($s,"The main advantage of doing this for big models is that during step 2 of the workflow shown above, each shard of the checkpoint is loaded after the previous one, capping the memory usage in RAM to the model size plus the size of the biggest shard."),$s.forEach(t),We=h(e),ae=r(e,"P",{});var ks=n(ae);Nt=p(ks,"Beind the scenes, the index file is used to determine which keys are in the checkpoint, and where the corresponding weights are stored. We can load that index like any json and get a dictionary:"),ks.forEach(t),He=h(e),g(H.$$.fragment,e),Ye=h(e),oe=r(e,"P",{});var js=n(oe);Ct=p(js,"The metadata just consists of the total size of the model for now. We plan to add several other informations in the future:"),js.forEach(t),Je=h(e),g(Y.$$.fragment,e),Ue=h(e),S=r(e,"P",{});var rt=n(S);Rt=p(rt,"The weights map is the main part of this index, which maps each parameter name (as usually found in a PyTorch model "),ke=r(rt,"CODE",{});var bs=n(ke);Ot=p(bs,"state_dict"),bs.forEach(t),Gt=p(rt,") to the file it\u2019s stored in:"),rt.forEach(t),Fe=h(e),g(J.$$.fragment,e),Ke=h(e),_=r(e,"P",{});var D=n(_);Wt=p(D,"If you want to directly load such a sharded checkpoint inside a model without using "),ie=r(D,"A",{href:!0});var xs=n(ie);Ht=p(xs,"from_pretrained()"),xs.forEach(t),Yt=p(D," (like you would do "),je=r(D,"CODE",{});var Es=n(je);Jt=p(Es,"model.load_state_dict()"),Es.forEach(t),Ut=p(D," for a full checkpoint) you should use "),re=r(D,"A",{href:!0});var Ps=n(re);Ft=p(Ps,"load_sharded_checkpoint()"),Ps.forEach(t),Kt=p(D,":"),D.forEach(t),Qe=h(e),g(U.$$.fragment,e),Ve=h(e),E=r(e,"H2",{class:!0});var lt=n(E);I=r(lt,"A",{id:!0,class:!0,href:!0});var As=n(I);be=r(As,"SPAN",{});var zs=n(be);g(F.$$.fragment,zs),zs.forEach(t),As.forEach(t),Qt=h(lt),xe=r(lt,"SPAN",{});var Ts=n(xe);Vt=p(Ts,"Low memory loading"),Ts.forEach(t),lt.forEach(t),Xe=h(e),le=r(e,"P",{});var Ms=n(le);Xt=p(Ms,"Sharded checkpoints reduce the memory usage during step 2 of the workflow mentioned above, but in order to use that model in a low memory setting, we recommend leveraging our tools based on the Accelerate library."),Ms.forEach(t),Ze=h(e),K=r(e,"P",{});var ts=n(K);Zt=p(ts,"Please read the following guide for more information: "),ne=r(ts,"A",{href:!0});var qs=n(ne);es=p(qs,"Large model loading using Accelerate"),qs.forEach(t),ts.forEach(t),this.h()},h(){m(f,"name","hf:doc:metadata"),m(f,"content",JSON.stringify(Os)),m(u,"id","instantiating-a-big-model"),m(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(u,"href","#instantiating-a-big-model"),m(c,"class","relative group"),m(T,"id","sharded-checkpoints"),m(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(T,"href","#sharded-checkpoints"),m(x,"class","relative group"),m(Z,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained"),m(te,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained"),m(ie,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained"),m(re,"href","/docs/transformers/main/en/main_classes/model#transformers.modeling_utils.load_sharded_checkpoint"),m(I,"id","low-memory-loading"),m(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(I,"href","#low-memory-loading"),m(E,"class","relative group"),m(ne,"href","./main_classes/model#large-model-loading")},m(e,a){s(document.head,f),o(e,P,a),o(e,c,a),s(c,u),s(u,he),y(N,he,null),s(c,nt),s(c,me),s(me,pt),o(e,Pe,a),o(e,V,a),s(V,dt),o(e,Ae,a),o(e,j,a),s(j,fe),s(fe,ht),s(j,mt),s(j,ce),s(ce,ft),s(j,ct),s(j,ue),s(ue,ut),o(e,ze,a),o(e,A,a),s(A,_t),s(A,_e),s(_e,wt),s(A,gt),o(e,Te,a),y(z,e,a),o(e,Me,a),o(e,X,a),s(X,yt),o(e,qe,a),o(e,x,a),s(x,T),s(T,we),y(C,we,null),s(x,vt),s(x,ge),s(ge,$t),o(e,Be,a),o(e,M,a),s(M,kt),s(M,ye),s(ye,jt),s(M,bt),o(e,Se,a),o(e,q,a),s(q,xt),s(q,ve),s(ve,Et),s(q,Pt),o(e,Ie,a),y(R,e,a),o(e,De,a),o(e,B,a),s(B,At),s(B,Z),s(Z,zt),s(B,Tt),o(e,Le,a),y(O,e,a),o(e,Ne,a),o(e,ee,a),s(ee,Mt),o(e,Ce,a),y(G,e,a),o(e,Re,a),o(e,b,a),s(b,qt),s(b,$e),s($e,Bt),s(b,St),s(b,te),s(te,It),s(b,Dt),o(e,Oe,a),y(W,e,a),o(e,Ge,a),o(e,se,a),s(se,Lt),o(e,We,a),o(e,ae,a),s(ae,Nt),o(e,He,a),y(H,e,a),o(e,Ye,a),o(e,oe,a),s(oe,Ct),o(e,Je,a),y(Y,e,a),o(e,Ue,a),o(e,S,a),s(S,Rt),s(S,ke),s(ke,Ot),s(S,Gt),o(e,Fe,a),y(J,e,a),o(e,Ke,a),o(e,_,a),s(_,Wt),s(_,ie),s(ie,Ht),s(_,Yt),s(_,je),s(je,Jt),s(_,Ut),s(_,re),s(re,Ft),s(_,Kt),o(e,Qe,a),y(U,e,a),o(e,Ve,a),o(e,E,a),s(E,I),s(I,be),y(F,be,null),s(E,Qt),s(E,xe),s(xe,Vt),o(e,Xe,a),o(e,le,a),s(le,Xt),o(e,Ze,a),o(e,K,a),s(K,Zt),s(K,ne),s(ne,es),et=!0},p(e,[a]){const Q={};a&2&&(Q.$$scope={dirty:a,ctx:e}),z.$set(Q)},i(e){et||(v(N.$$.fragment,e),v(z.$$.fragment,e),v(C.$$.fragment,e),v(R.$$.fragment,e),v(O.$$.fragment,e),v(G.$$.fragment,e),v(W.$$.fragment,e),v(H.$$.fragment,e),v(Y.$$.fragment,e),v(J.$$.fragment,e),v(U.$$.fragment,e),v(F.$$.fragment,e),et=!0)},o(e){$(N.$$.fragment,e),$(z.$$.fragment,e),$(C.$$.fragment,e),$(R.$$.fragment,e),$(O.$$.fragment,e),$(G.$$.fragment,e),$(W.$$.fragment,e),$(H.$$.fragment,e),$(Y.$$.fragment,e),$(J.$$.fragment,e),$(U.$$.fragment,e),$(F.$$.fragment,e),et=!1},d(e){t(f),e&&t(P),e&&t(c),k(N),e&&t(Pe),e&&t(V),e&&t(Ae),e&&t(j),e&&t(ze),e&&t(A),e&&t(Te),k(z,e),e&&t(Me),e&&t(X),e&&t(qe),e&&t(x),k(C),e&&t(Be),e&&t(M),e&&t(Se),e&&t(q),e&&t(Ie),k(R,e),e&&t(De),e&&t(B),e&&t(Le),k(O,e),e&&t(Ne),e&&t(ee),e&&t(Ce),k(G,e),e&&t(Re),e&&t(b),e&&t(Oe),k(W,e),e&&t(Ge),e&&t(se),e&&t(We),e&&t(ae),e&&t(He),k(H,e),e&&t(Ye),e&&t(oe),e&&t(Je),k(Y,e),e&&t(Ue),e&&t(S),e&&t(Fe),k(J,e),e&&t(Ke),e&&t(_),e&&t(Qe),k(U,e),e&&t(Ve),e&&t(E),k(F),e&&t(Xe),e&&t(le),e&&t(Ze),e&&t(K)}}}const Os={local:"instantiating-a-big-model",sections:[{local:"sharded-checkpoints",title:"Sharded checkpoints"},{local:"low-memory-loading",title:"Low memory loading"}],title:"Instantiating a big model"};function Gs(Ee){return Ls(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Us extends Bs{constructor(f){super();Ss(this,f,Gs,Rs,Is,{})}}export{Us as default,Os as metadata};
