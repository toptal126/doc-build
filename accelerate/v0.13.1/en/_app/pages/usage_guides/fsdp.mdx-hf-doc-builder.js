import{S as yt,i as bt,s as vt,e as r,k as d,w as u,t as n,M as Pt,c as o,d as a,m as c,a as l,x as w,h as i,b as h,G as t,g as p,y as g,L as At,q as y,o as b,B as v,v as St}from"../../chunks/vendor-hf-doc-builder.js";import{I as Ia}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as Z}from"../../chunks/CodeBlock-hf-doc-builder.js";function Et(Ha){let P,Se,A,$,re,O,Qe,oe,Ve,Ee,T,Xe,x,Ye,ea,De,S,F,le,B,aa,se,ta,$e,J,ra,Te,N,Fe,Q,oa,Re,I,ke,V,la,Ce,H,Le,j,ze,R,sa,ne,na,ia,We,M,Oe,E,k,ie,U,pa,pe,da,xe,X,C,ca,de,ha,ma,ce,he,fa,Be,Y,_a,Ne,q,Ie,ee,m,me,ua,wa,fe,_e,ga,ya,ue,ba,va,G,He,L,D,Pa,we,Aa,Sa,ge,Ea,Da,$a,f,Ta,ye,Fa,Ra,be,ka,Ca,ve,La,za,je,_,Wa,Pe,Oa,xa,K,Ba,Na,Me;return O=new Ia({}),B=new Ia({}),N=new Z({props:{code:"accelerate config",highlighted:"accelerate config"}}),I=new Z({props:{code:"accelerate launch my_script.py --args_to_my_script",highlighted:"accelerate launch my_script.py --args_to_my_script"}}),H=new Z({props:{code:`compute_environment: LOCAL_MACHINE
deepspeed_config: {}
distributed_type: FSDP
downcast_bf16: 'no'
fsdp_config:
  fsdp_auto_wrap_policy: TRANSFORMER_BASED_WRAP
  fsdp_backward_prefetch_policy: BACKWARD_PRE
  fsdp_offload_params: false
  fsdp_sharding_strategy: 1
  fsdp_state_dict_type: FULL_STATE_DICT
  fsdp_transformer_layer_cls_to_wrap: GPT2Block
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: 'no'
num_machines: 1
num_processes: 2
use_cpu: false`,highlighted:`compute_environment: LOCAL_MACHINE
deepspeed_config: {}
distributed_type: FSDP
downcast_bf16: <span class="hljs-string">&#x27;no&#x27;</span>
fsdp_config:
  fsdp_auto_wrap_policy: TRANSFORMER_BASED_WRAP
  fsdp_backward_prefetch_policy: BACKWARD_PRE
  fsdp_offload_params: <span class="hljs-literal">false</span>
  fsdp_sharding_strategy: 1
  fsdp_state_dict_type: FULL_STATE_DICT
  fsdp_transformer_layer_cls_to_wrap: GPT2Block
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: <span class="hljs-string">&#x27;no&#x27;</span>
num_machines: 1
num_processes: 2
use_cpu: <span class="hljs-literal">false</span>`}}),j=new Z({props:{code:"accelerate launch examples/nlp_example.py",highlighted:"accelerate launch examples/nlp_example.py"}}),M=new Z({props:{code:"`Sharding Strategy`: [1] FULL_SHARD (shards optimizer states, gradients and parameters), [2] SHARD_GRAD_OP (shards optimizer states and gradients), [3] NO_SHARD\n`Offload Params`: Decides Whether to offload parameters and gradients to CPU\n`Auto Wrap Policy`: [1] TRANSFORMER_BASED_WRAP, [2] SIZE_BASED_WRAP, [3] NO_WRAP \n`Transformer Layer Class to Wrap`: When using `TRANSFORMER_BASED_WRAP`, user specifies transformer layer class name (case-sensitive) to wrap ,e.g, `BertLayer`, `GPTJBlock`, `T5Block`...\n`Min Num Params`: minimum number of parameters when using `SIZE_BASED_WRAP`\n`Backward Prefetch`: [1] BACKWARD_PRE, [2] BACKWARD_POST, [3] NO_PREFETCH\n`State Dict Type`: [1] FULL_STATE_DICT, [2] LOCAL_STATE_DICT, [3] SHARDED_STATE_DICT  ",highlighted:"`Sharding Strategy`: [1] FULL_SHARD (shards optimizer states, gradients and parameters), [2] SHARD_GRAD_OP (shards optimizer states and gradients), [3] NO_SHARD\n`Offload Params`: Decides Whether to offload parameters and gradients to CPU\n`Auto Wrap Policy`: [1] TRANSFORMER_BASED_WRAP, [2] SIZE_BASED_WRAP, [3] NO_WRAP \n`Transformer Layer Class to Wrap`: When using `TRANSFORMER_BASED_WRAP`, user specifies transformer layer class name (case-sensitive) to wrap ,e.g, `BertLayer`, `GPTJBlock`, `T5Block`...\n`Min Num Params`: minimum number of parameters when using `SIZE_BASED_WRAP`\n`Backward Prefetch`: [1] BACKWARD_PRE, [2] BACKWARD_POST, [3] NO_PREFETCH\n`State Dict Type`: [1] FULL_STATE_DICT, [2] LOCAL_STATE_DICT, [3] SHARDED_STATE_DICT  "}}),U=new Ia({}),q=new Z({props:{code:`  model = AutoModelForSequenceClassification.from_pretrained("bert-base-cased", return_dict=True)
+ model = accelerator.prepare(model)

  optimizer = torch.optim.AdamW(params=model.parameters(), lr=lr)

- model, optimizer, train_dataloader, eval_dataloader, lr_scheduler = accelerator.prepare(
-        model, optimizer, train_dataloader, eval_dataloader, lr_scheduler
-    )

+ optimizer, train_dataloader, eval_dataloader, lr_scheduler = accelerator.prepare(
+         optimizer, train_dataloader, eval_dataloader, lr_scheduler
+    )`,highlighted:`  model = AutoModelForSequenceClassification.from_pretrained(&quot;bert-base-cased&quot;, return_dict=True)
<span class="hljs-addition">+ model = accelerator.prepare(model)</span>

  optimizer = torch.optim.AdamW(params=model.parameters(), lr=lr)

<span class="hljs-deletion">- model, optimizer, train_dataloader, eval_dataloader, lr_scheduler = accelerator.prepare(</span>
<span class="hljs-deletion">-        model, optimizer, train_dataloader, eval_dataloader, lr_scheduler</span>
<span class="hljs-deletion">-    )</span>

<span class="hljs-addition">+ optimizer, train_dataloader, eval_dataloader, lr_scheduler = accelerator.prepare(</span>
<span class="hljs-addition">+         optimizer, train_dataloader, eval_dataloader, lr_scheduler</span>
<span class="hljs-addition">+    )</span>`}}),G=new Z({props:{code:`{
  '_fsdp_wrapped_module.flat_param': torch.Size([494209]), 
  '_fsdp_wrapped_module._fpw_module.bert.embeddings.word_embeddings._fsdp_wrapped_module.flat_param': torch.Size([11720448]), 
  '_fsdp_wrapped_module._fpw_module.bert.encoder._fsdp_wrapped_module.flat_param': torch.Size([42527232])
}`,highlighted:`{
  <span class="hljs-string">&#x27;_fsdp_wrapped_module.flat_param&#x27;</span>: torch<span class="hljs-selector-class">.Size</span>(<span class="hljs-selector-attr">[494209]</span>), 
  <span class="hljs-string">&#x27;_fsdp_wrapped_module._fpw_module.bert.embeddings.word_embeddings._fsdp_wrapped_module.flat_param&#x27;</span>: torch<span class="hljs-selector-class">.Size</span>(<span class="hljs-selector-attr">[11720448]</span>), 
  <span class="hljs-string">&#x27;_fsdp_wrapped_module._fpw_module.bert.encoder._fsdp_wrapped_module.flat_param&#x27;</span>: torch<span class="hljs-selector-class">.Size</span>(<span class="hljs-selector-attr">[42527232]</span>)
}`}}),{c(){P=r("meta"),Se=d(),A=r("h1"),$=r("a"),re=r("span"),u(O.$$.fragment),Qe=d(),oe=r("span"),Ve=n("Fully Sharded Data Parallel"),Ee=d(),T=r("p"),Xe=n(`To accelerate training huge models on larger batch sizes, we can use a fully sharded data parallel model.
This type of data parallel paradigm enables fitting more data and larger models by sharding the optimizer states, gradients and parameters.
To read more about it and the benefits, check out the `),x=r("a"),Ye=n("Fully Sharded Data Parallel blog"),ea=n(`.
We have integrated the latest PyTorch\u2019s Fully Sharded Data Parallel (FSDP) training feature.
All you need to do is enable it through the config.`),De=d(),S=r("h2"),F=r("a"),le=r("span"),u(B.$$.fragment),aa=d(),se=r("span"),ta=n("How it works out of the box"),$e=d(),J=r("p"),ra=n("On your machine(s) just run:"),Te=d(),u(N.$$.fragment),Fe=d(),Q=r("p"),oa=n(`and answer the questions asked. This will generate a config file that will be used automatically to properly set the
default options when doing`),Re=d(),u(I.$$.fragment),ke=d(),V=r("p"),la=n("For instance, here is how you would run the NLP example (from the root of the repo) with FSDP enabled:"),Ce=d(),u(H.$$.fragment),Le=d(),u(j.$$.fragment),ze=d(),R=r("p"),sa=n("Currently, "),ne=r("code"),na=n("Accelerate"),ia=n(" supports the following config through the CLI:"),We=d(),u(M.$$.fragment),Oe=d(),E=r("h2"),k=r("a"),ie=r("span"),u(U.$$.fragment),pa=d(),pe=r("span"),da=n("A few caveats to be aware of"),xe=d(),X=r("ul"),C=r("li"),ca=n(`PyTorch FSDP auto wraps sub-modules, flattens the parameters and shards the parameters in place.
Due to this, any optimizer created before model wrapping gets broken and occupies more memory.
Hence, it is highly recommended and efficient to prepare the model before creating the optimizer.
`),de=r("code"),ha=n("Accelerate"),ma=n(" will automatically wrap the model and create an optimizer for you in case of single model with a warning message."),ce=r("blockquote"),he=r("p"),fa=n("FSDP Warning: When using FSDP, it is efficient and recommended to call prepare for the model before creating the optimizer"),Be=d(),Y=r("p"),_a=n("However, below is the recommended way to prepare model and optimizer while using FSDP:"),Ne=d(),u(q.$$.fragment),Ie=d(),ee=r("ul"),m=r("li"),me=r("p"),ua=n(`In case of a single model, if you have created the optimizer with multiple parameter groups and called prepare with them together,
then the parameter groups will be lost and the following warning is displayed:`),wa=d(),fe=r("blockquote"),_e=r("p"),ga=n(`FSDP Warning: When using FSDP, several parameter groups will be conflated into
a single one due to nested module wrapping and parameter flattening.`),ya=d(),ue=r("p"),ba=n(`This is because parameter groups created before wrapping will have no meaning post wrapping due to parameter flattening of nested FSDP modules into 1D arrays (which can consume many layers).
For instance, below are the named parameters of an FSDP model on GPU 0 (When using 2 GPUs. Around 55M (110M/2) params in 1D arrays as this will have the 1st shard of the parameters).
Here, if one has applied no weight decay for [bias, LayerNorm.weight] the named parameters of an unwrapped BERT model,
it can\u2019t be applied to the below FSDP wrapped model as there are no named parameters with either of those strings and
the parameters of those layers are concatenated with parameters of various other layers.`),va=d(),u(G.$$.fragment),He=d(),L=r("ul"),D=r("li"),Pa=n(`In case of multiple models, it is necessary to prepare the models before creating optimizers or else it will throw an error.
Then pass the optimizers to the prepare call in the same order as corresponding models else `),we=r("code"),Aa=n("accelerator.save_state()"),Sa=n(" and "),ge=r("code"),Ea=n("accelerator.load_state()"),Da=n(" will result in wrong/unexpected behaviour."),$a=d(),f=r("li"),Ta=n("This feature is incompatible with "),ye=r("code"),Fa=n("--predict_with_generate"),Ra=n(" in the "),be=r("code"),ka=n("run_translation.py"),Ca=n(" script of \u{1F917} "),ve=r("code"),La=n("Transformers"),za=n(" library."),je=d(),_=r("p"),Wa=n("For more control, users can leverage the "),Pe=r("code"),Oa=n("FullyShardedDataParallelPlugin"),xa=n(`. After creating an instance of this class, users can pass it to the Accelerator class instantiation.
For more information on these options, please refer to the PyTorch `),K=r("a"),Ba=n("FullyShardedDataParallel"),Na=n(" code."),this.h()},l(e){const s=Pt('[data-svelte="svelte-1phssyn"]',document.head);P=o(s,"META",{name:!0,content:!0}),s.forEach(a),Se=c(e),A=o(e,"H1",{class:!0});var Ue=l(A);$=o(Ue,"A",{id:!0,class:!0,href:!0});var ja=l($);re=o(ja,"SPAN",{});var Ma=l(re);w(O.$$.fragment,Ma),Ma.forEach(a),ja.forEach(a),Qe=c(Ue),oe=o(Ue,"SPAN",{});var Ua=l(oe);Ve=i(Ua,"Fully Sharded Data Parallel"),Ua.forEach(a),Ue.forEach(a),Ee=c(e),T=o(e,"P",{});var qe=l(T);Xe=i(qe,`To accelerate training huge models on larger batch sizes, we can use a fully sharded data parallel model.
This type of data parallel paradigm enables fitting more data and larger models by sharding the optimizer states, gradients and parameters.
To read more about it and the benefits, check out the `),x=o(qe,"A",{href:!0,rel:!0});var qa=l(x);Ye=i(qa,"Fully Sharded Data Parallel blog"),qa.forEach(a),ea=i(qe,`.
We have integrated the latest PyTorch\u2019s Fully Sharded Data Parallel (FSDP) training feature.
All you need to do is enable it through the config.`),qe.forEach(a),De=c(e),S=o(e,"H2",{class:!0});var Ge=l(S);F=o(Ge,"A",{id:!0,class:!0,href:!0});var Ga=l(F);le=o(Ga,"SPAN",{});var Ka=l(le);w(B.$$.fragment,Ka),Ka.forEach(a),Ga.forEach(a),aa=c(Ge),se=o(Ge,"SPAN",{});var Za=l(se);ta=i(Za,"How it works out of the box"),Za.forEach(a),Ge.forEach(a),$e=c(e),J=o(e,"P",{});var Ja=l(J);ra=i(Ja,"On your machine(s) just run:"),Ja.forEach(a),Te=c(e),w(N.$$.fragment,e),Fe=c(e),Q=o(e,"P",{});var Qa=l(Q);oa=i(Qa,`and answer the questions asked. This will generate a config file that will be used automatically to properly set the
default options when doing`),Qa.forEach(a),Re=c(e),w(I.$$.fragment,e),ke=c(e),V=o(e,"P",{});var Va=l(V);la=i(Va,"For instance, here is how you would run the NLP example (from the root of the repo) with FSDP enabled:"),Va.forEach(a),Ce=c(e),w(H.$$.fragment,e),Le=c(e),w(j.$$.fragment,e),ze=c(e),R=o(e,"P",{});var Ke=l(R);sa=i(Ke,"Currently, "),ne=o(Ke,"CODE",{});var Xa=l(ne);na=i(Xa,"Accelerate"),Xa.forEach(a),ia=i(Ke," supports the following config through the CLI:"),Ke.forEach(a),We=c(e),w(M.$$.fragment,e),Oe=c(e),E=o(e,"H2",{class:!0});var Ze=l(E);k=o(Ze,"A",{id:!0,class:!0,href:!0});var Ya=l(k);ie=o(Ya,"SPAN",{});var et=l(ie);w(U.$$.fragment,et),et.forEach(a),Ya.forEach(a),pa=c(Ze),pe=o(Ze,"SPAN",{});var at=l(pe);da=i(at,"A few caveats to be aware of"),at.forEach(a),Ze.forEach(a),xe=c(e),X=o(e,"UL",{});var tt=l(X);C=o(tt,"LI",{});var Ae=l(C);ca=i(Ae,`PyTorch FSDP auto wraps sub-modules, flattens the parameters and shards the parameters in place.
Due to this, any optimizer created before model wrapping gets broken and occupies more memory.
Hence, it is highly recommended and efficient to prepare the model before creating the optimizer.
`),de=o(Ae,"CODE",{});var rt=l(de);ha=i(rt,"Accelerate"),rt.forEach(a),ma=i(Ae," will automatically wrap the model and create an optimizer for you in case of single model with a warning message."),ce=o(Ae,"BLOCKQUOTE",{});var ot=l(ce);he=o(ot,"P",{});var lt=l(he);fa=i(lt,"FSDP Warning: When using FSDP, it is efficient and recommended to call prepare for the model before creating the optimizer"),lt.forEach(a),ot.forEach(a),Ae.forEach(a),tt.forEach(a),Be=c(e),Y=o(e,"P",{});var st=l(Y);_a=i(st,"However, below is the recommended way to prepare model and optimizer while using FSDP:"),st.forEach(a),Ne=c(e),w(q.$$.fragment,e),Ie=c(e),ee=o(e,"UL",{});var nt=l(ee);m=o(nt,"LI",{});var z=l(m);me=o(z,"P",{});var it=l(me);ua=i(it,`In case of a single model, if you have created the optimizer with multiple parameter groups and called prepare with them together,
then the parameter groups will be lost and the following warning is displayed:`),it.forEach(a),wa=c(z),fe=o(z,"BLOCKQUOTE",{});var pt=l(fe);_e=o(pt,"P",{});var dt=l(_e);ga=i(dt,`FSDP Warning: When using FSDP, several parameter groups will be conflated into
a single one due to nested module wrapping and parameter flattening.`),dt.forEach(a),pt.forEach(a),ya=c(z),ue=o(z,"P",{});var ct=l(ue);ba=i(ct,`This is because parameter groups created before wrapping will have no meaning post wrapping due to parameter flattening of nested FSDP modules into 1D arrays (which can consume many layers).
For instance, below are the named parameters of an FSDP model on GPU 0 (When using 2 GPUs. Around 55M (110M/2) params in 1D arrays as this will have the 1st shard of the parameters).
Here, if one has applied no weight decay for [bias, LayerNorm.weight] the named parameters of an unwrapped BERT model,
it can\u2019t be applied to the below FSDP wrapped model as there are no named parameters with either of those strings and
the parameters of those layers are concatenated with parameters of various other layers.`),ct.forEach(a),va=c(z),w(G.$$.fragment,z),z.forEach(a),nt.forEach(a),He=c(e),L=o(e,"UL",{});var Je=l(L);D=o(Je,"LI",{});var ae=l(D);Pa=i(ae,`In case of multiple models, it is necessary to prepare the models before creating optimizers or else it will throw an error.
Then pass the optimizers to the prepare call in the same order as corresponding models else `),we=o(ae,"CODE",{});var ht=l(we);Aa=i(ht,"accelerator.save_state()"),ht.forEach(a),Sa=i(ae," and "),ge=o(ae,"CODE",{});var mt=l(ge);Ea=i(mt,"accelerator.load_state()"),mt.forEach(a),Da=i(ae," will result in wrong/unexpected behaviour."),ae.forEach(a),$a=c(Je),f=o(Je,"LI",{});var W=l(f);Ta=i(W,"This feature is incompatible with "),ye=o(W,"CODE",{});var ft=l(ye);Fa=i(ft,"--predict_with_generate"),ft.forEach(a),Ra=i(W," in the "),be=o(W,"CODE",{});var _t=l(be);ka=i(_t,"run_translation.py"),_t.forEach(a),Ca=i(W," script of \u{1F917} "),ve=o(W,"CODE",{});var ut=l(ve);La=i(ut,"Transformers"),ut.forEach(a),za=i(W," library."),W.forEach(a),Je.forEach(a),je=c(e),_=o(e,"P",{});var te=l(_);Wa=i(te,"For more control, users can leverage the "),Pe=o(te,"CODE",{});var wt=l(Pe);Oa=i(wt,"FullyShardedDataParallelPlugin"),wt.forEach(a),xa=i(te,`. After creating an instance of this class, users can pass it to the Accelerator class instantiation.
For more information on these options, please refer to the PyTorch `),K=o(te,"A",{href:!0,rel:!0});var gt=l(K);Ba=i(gt,"FullyShardedDataParallel"),gt.forEach(a),Na=i(te," code."),te.forEach(a),this.h()},h(){h(P,"name","hf:doc:metadata"),h(P,"content",JSON.stringify(Dt)),h($,"id","fully-sharded-data-parallel"),h($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($,"href","#fully-sharded-data-parallel"),h(A,"class","relative group"),h(x,"href","https://pytorch.org/blog/introducing-pytorch-fully-sharded-data-parallel-api/"),h(x,"rel","nofollow"),h(F,"id","how-it-works-out-of-the-box"),h(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(F,"href","#how-it-works-out-of-the-box"),h(S,"class","relative group"),h(k,"id","a-few-caveats-to-be-aware-of"),h(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(k,"href","#a-few-caveats-to-be-aware-of"),h(E,"class","relative group"),h(K,"href","https://github.com/pytorch/pytorch/blob/0df2e863fbd5993a7b9e652910792bd21a516ff3/torch/distributed/fsdp/fully_sharded_data_parallel.py#L236"),h(K,"rel","nofollow")},m(e,s){t(document.head,P),p(e,Se,s),p(e,A,s),t(A,$),t($,re),g(O,re,null),t(A,Qe),t(A,oe),t(oe,Ve),p(e,Ee,s),p(e,T,s),t(T,Xe),t(T,x),t(x,Ye),t(T,ea),p(e,De,s),p(e,S,s),t(S,F),t(F,le),g(B,le,null),t(S,aa),t(S,se),t(se,ta),p(e,$e,s),p(e,J,s),t(J,ra),p(e,Te,s),g(N,e,s),p(e,Fe,s),p(e,Q,s),t(Q,oa),p(e,Re,s),g(I,e,s),p(e,ke,s),p(e,V,s),t(V,la),p(e,Ce,s),g(H,e,s),p(e,Le,s),g(j,e,s),p(e,ze,s),p(e,R,s),t(R,sa),t(R,ne),t(ne,na),t(R,ia),p(e,We,s),g(M,e,s),p(e,Oe,s),p(e,E,s),t(E,k),t(k,ie),g(U,ie,null),t(E,pa),t(E,pe),t(pe,da),p(e,xe,s),p(e,X,s),t(X,C),t(C,ca),t(C,de),t(de,ha),t(C,ma),t(C,ce),t(ce,he),t(he,fa),p(e,Be,s),p(e,Y,s),t(Y,_a),p(e,Ne,s),g(q,e,s),p(e,Ie,s),p(e,ee,s),t(ee,m),t(m,me),t(me,ua),t(m,wa),t(m,fe),t(fe,_e),t(_e,ga),t(m,ya),t(m,ue),t(ue,ba),t(m,va),g(G,m,null),p(e,He,s),p(e,L,s),t(L,D),t(D,Pa),t(D,we),t(we,Aa),t(D,Sa),t(D,ge),t(ge,Ea),t(D,Da),t(L,$a),t(L,f),t(f,Ta),t(f,ye),t(ye,Fa),t(f,Ra),t(f,be),t(be,ka),t(f,Ca),t(f,ve),t(ve,La),t(f,za),p(e,je,s),p(e,_,s),t(_,Wa),t(_,Pe),t(Pe,Oa),t(_,xa),t(_,K),t(K,Ba),t(_,Na),Me=!0},p:At,i(e){Me||(y(O.$$.fragment,e),y(B.$$.fragment,e),y(N.$$.fragment,e),y(I.$$.fragment,e),y(H.$$.fragment,e),y(j.$$.fragment,e),y(M.$$.fragment,e),y(U.$$.fragment,e),y(q.$$.fragment,e),y(G.$$.fragment,e),Me=!0)},o(e){b(O.$$.fragment,e),b(B.$$.fragment,e),b(N.$$.fragment,e),b(I.$$.fragment,e),b(H.$$.fragment,e),b(j.$$.fragment,e),b(M.$$.fragment,e),b(U.$$.fragment,e),b(q.$$.fragment,e),b(G.$$.fragment,e),Me=!1},d(e){a(P),e&&a(Se),e&&a(A),v(O),e&&a(Ee),e&&a(T),e&&a(De),e&&a(S),v(B),e&&a($e),e&&a(J),e&&a(Te),v(N,e),e&&a(Fe),e&&a(Q),e&&a(Re),v(I,e),e&&a(ke),e&&a(V),e&&a(Ce),v(H,e),e&&a(Le),v(j,e),e&&a(ze),e&&a(R),e&&a(We),v(M,e),e&&a(Oe),e&&a(E),v(U),e&&a(xe),e&&a(X),e&&a(Be),e&&a(Y),e&&a(Ne),v(q,e),e&&a(Ie),e&&a(ee),v(G),e&&a(He),e&&a(L),e&&a(je),e&&a(_)}}}const Dt={local:"fully-sharded-data-parallel",sections:[{local:"how-it-works-out-of-the-box",title:"How it works out of the box"},{local:"a-few-caveats-to-be-aware-of",title:"A few caveats to be aware of"}],title:"Fully Sharded Data Parallel"};function $t(Ha){return St(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class kt extends yt{constructor(P){super();bt(this,P,$t,Et,vt,{})}}export{kt as default,Dt as metadata};
