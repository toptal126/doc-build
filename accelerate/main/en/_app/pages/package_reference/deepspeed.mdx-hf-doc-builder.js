import{S as Ae,i as Ue,s as qe,e as a,k as o,w,t as D,M as Me,c as n,d as r,m as p,a as s,x as y,h as S,b as c,G as t,g as l,y as z,L as Ce,q as x,o as E,B as P,v as Re}from"../../chunks/vendor-hf-doc-builder.js";import{D as A}from"../../chunks/Docstring-hf-doc-builder.js";import{I as Be}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Ge(xe){let d,F,u,$,q,I,le,M,ce,K,m,N,me,C,de,ue,b,O,ge,R,fe,Q,g,L,he,B,ve,X,f,k,_e,G,$e,Y,h,T,be,H,we,Z,v,W,De,J,ye,ee,_,V,Se,j,ze,re;return I=new Be({}),N=new A({props:{name:"class accelerate.DeepSpeedPlugin",anchor:"accelerate.DeepSpeedPlugin",parameters:[{name:"hf_ds_config",val:": typing.Any = None"},{name:"gradient_accumulation_steps",val:": int = None"},{name:"gradient_clipping",val:": float = None"},{name:"zero_stage",val:": int = None"},{name:"is_train_batch_min",val:": str = True"},{name:"offload_optimizer_device",val:": bool = None"},{name:"offload_param_device",val:": bool = None"},{name:"zero3_init_flag",val:": bool = None"},{name:"zero3_save_16bit_model",val:": bool = None"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/utils/dataclasses.py#L285"}}),O=new A({props:{name:"deepspeed_config_process",anchor:"accelerate.DeepSpeedPlugin.deepspeed_config_process",parameters:[{name:"prefix",val:" = ''"},{name:"mismatches",val:" = None"},{name:"config",val:" = None"},{name:"must_match",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/utils/dataclasses.py#L417"}}),L=new A({props:{name:"class accelerate.utils.DummyOptim",anchor:"accelerate.utils.DummyOptim",parameters:[{name:"params",val:""},{name:"lr",val:" = 0.001"},{name:"weight_decay",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"accelerate.utils.DummyOptim.lr",description:`<strong>lr</strong> (float) &#x2014;
Learning rate.`,name:"lr"},{anchor:"accelerate.utils.DummyOptim.params",description:`<strong>params</strong> (iterable) &#x2014; iterable of parameters to optimize or dicts defining
parameter groups`,name:"params"},{anchor:"accelerate.utils.DummyOptim.weight_decay",description:`<strong>weight_decay</strong> (float) &#x2014;
Weight decay.
**kwargs &#x2014;
Other arguments.`,name:"weight_decay"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/utils/deepspeed.py#L209"}}),k=new A({props:{name:"class accelerate.utils.DummyScheduler",anchor:"accelerate.utils.DummyScheduler",parameters:[{name:"optimizer",val:""},{name:"total_num_steps",val:" = None"},{name:"warmup_num_steps",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"accelerate.utils.DummyScheduler.optimizer",description:`<strong>optimizer</strong> (<code>torch.optim.optimizer.Optimizer</code>) &#x2014;
The optimizer to wrap.`,name:"optimizer"},{anchor:"accelerate.utils.DummyScheduler.total_num_steps",description:`<strong>total_num_steps</strong> (int) &#x2014;
Total number of steps.`,name:"total_num_steps"},{anchor:"accelerate.utils.DummyScheduler.warmup_num_steps",description:`<strong>warmup_num_steps</strong> (int) &#x2014;
Number of steps for warmup.
**kwargs &#x2014;
Other arguments.`,name:"warmup_num_steps"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/utils/deepspeed.py#L232"}}),T=new A({props:{name:"class accelerate.utils.DeepSpeedEngineWrapper",anchor:"accelerate.utils.DeepSpeedEngineWrapper",parameters:[{name:"engine",val:""}],parametersDescription:[{anchor:"accelerate.utils.DeepSpeedEngineWrapper.engine",description:"<strong>engine</strong> (deepspeed.runtime.engine.DeepSpeedEngine) &#x2014; deepspeed engine to wrap",name:"engine"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/utils/deepspeed.py#L143"}}),W=new A({props:{name:"class accelerate.utils.DeepSpeedOptimizerWrapper",anchor:"accelerate.utils.DeepSpeedOptimizerWrapper",parameters:[{name:"optimizer",val:""}],parametersDescription:[{anchor:"accelerate.utils.DeepSpeedOptimizerWrapper.optimizer",description:`<strong>optimizer</strong> (<code>torch.optim.optimizer.Optimizer</code>) &#x2014;
The optimizer to wrap.`,name:"optimizer"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/utils/deepspeed.py#L168"}}),V=new A({props:{name:"class accelerate.utils.DeepSpeedSchedulerWrapper",anchor:"accelerate.utils.DeepSpeedSchedulerWrapper",parameters:[{name:"scheduler",val:""},{name:"optimizers",val:""}],parametersDescription:[{anchor:"accelerate.utils.DeepSpeedSchedulerWrapper.scheduler",description:`<strong>scheduler</strong> (<code>torch.optim.lr_scheduler.LambdaLR</code>) &#x2014;
The scheduler to wrap.`,name:"scheduler"},{anchor:"accelerate.utils.DeepSpeedSchedulerWrapper.optimizers",description:"<strong>optimizers</strong> (one or a list of <code>torch.optim.Optimizer</code>) &#x2014;",name:"optimizers"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/utils/deepspeed.py#L192"}}),{c(){d=a("meta"),F=o(),u=a("h1"),$=a("a"),q=a("span"),w(I.$$.fragment),le=o(),M=a("span"),ce=D("Utilities for DeepSpeed"),K=o(),m=a("div"),w(N.$$.fragment),me=o(),C=a("p"),de=D("This plugin is used to integrate DeepSpeed."),ue=o(),b=a("div"),w(O.$$.fragment),ge=o(),R=a("p"),fe=D("Process the DeepSpeed config with the values from the kwargs."),Q=o(),g=a("div"),w(L.$$.fragment),he=o(),B=a("p"),ve=D(`Dummy optimizer presents model parameters or param groups, this is primarily used to follow conventional training
loop when optimizer config is specified in the deepspeed config file.`),X=o(),f=a("div"),w(k.$$.fragment),_e=o(),G=a("p"),$e=D(`Dummy scheduler presents model parameters or param groups, this is primarily used to follow conventional training
loop when scheduler config is specified in the deepspeed config file.`),Y=o(),h=a("div"),w(T.$$.fragment),be=o(),H=a("p"),we=D("Internal wrapper for deepspeed.runtime.engine.DeepSpeedEngine. This is used to follow conventional training loop."),Z=o(),v=a("div"),w(W.$$.fragment),De=o(),J=a("p"),ye=D("Internal wrapper around a deepspeed optimizer."),ee=o(),_=a("div"),w(V.$$.fragment),Se=o(),j=a("p"),ze=D("Internal wrapper around a deepspeed scheduler."),this.h()},l(e){const i=Me('[data-svelte="svelte-1phssyn"]',document.head);d=n(i,"META",{name:!0,content:!0}),i.forEach(r),F=p(e),u=n(e,"H1",{class:!0});var te=s(u);$=n(te,"A",{id:!0,class:!0,href:!0});var Ee=s($);q=n(Ee,"SPAN",{});var Pe=s(q);y(I.$$.fragment,Pe),Pe.forEach(r),Ee.forEach(r),le=p(te),M=n(te,"SPAN",{});var Ie=s(M);ce=S(Ie,"Utilities for DeepSpeed"),Ie.forEach(r),te.forEach(r),K=p(e),m=n(e,"DIV",{class:!0});var U=s(m);y(N.$$.fragment,U),me=p(U),C=n(U,"P",{});var Ne=s(C);de=S(Ne,"This plugin is used to integrate DeepSpeed."),Ne.forEach(r),ue=p(U),b=n(U,"DIV",{class:!0});var ae=s(b);y(O.$$.fragment,ae),ge=p(ae),R=n(ae,"P",{});var Oe=s(R);fe=S(Oe,"Process the DeepSpeed config with the values from the kwargs."),Oe.forEach(r),ae.forEach(r),U.forEach(r),Q=p(e),g=n(e,"DIV",{class:!0});var ne=s(g);y(L.$$.fragment,ne),he=p(ne),B=n(ne,"P",{});var Le=s(B);ve=S(Le,`Dummy optimizer presents model parameters or param groups, this is primarily used to follow conventional training
loop when optimizer config is specified in the deepspeed config file.`),Le.forEach(r),ne.forEach(r),X=p(e),f=n(e,"DIV",{class:!0});var se=s(f);y(k.$$.fragment,se),_e=p(se),G=n(se,"P",{});var ke=s(G);$e=S(ke,`Dummy scheduler presents model parameters or param groups, this is primarily used to follow conventional training
loop when scheduler config is specified in the deepspeed config file.`),ke.forEach(r),se.forEach(r),Y=p(e),h=n(e,"DIV",{class:!0});var ie=s(h);y(T.$$.fragment,ie),be=p(ie),H=n(ie,"P",{});var Te=s(H);we=S(Te,"Internal wrapper for deepspeed.runtime.engine.DeepSpeedEngine. This is used to follow conventional training loop."),Te.forEach(r),ie.forEach(r),Z=p(e),v=n(e,"DIV",{class:!0});var oe=s(v);y(W.$$.fragment,oe),De=p(oe),J=n(oe,"P",{});var We=s(J);ye=S(We,"Internal wrapper around a deepspeed optimizer."),We.forEach(r),oe.forEach(r),ee=p(e),_=n(e,"DIV",{class:!0});var pe=s(_);y(V.$$.fragment,pe),Se=p(pe),j=n(pe,"P",{});var Ve=s(j);ze=S(Ve,"Internal wrapper around a deepspeed scheduler."),Ve.forEach(r),pe.forEach(r),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(He)),c($,"id","accelerate.DeepSpeedPlugin"),c($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($,"href","#accelerate.DeepSpeedPlugin"),c(u,"class","relative group"),c(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(m,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(g,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(f,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(_,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,i){t(document.head,d),l(e,F,i),l(e,u,i),t(u,$),t($,q),z(I,q,null),t(u,le),t(u,M),t(M,ce),l(e,K,i),l(e,m,i),z(N,m,null),t(m,me),t(m,C),t(C,de),t(m,ue),t(m,b),z(O,b,null),t(b,ge),t(b,R),t(R,fe),l(e,Q,i),l(e,g,i),z(L,g,null),t(g,he),t(g,B),t(B,ve),l(e,X,i),l(e,f,i),z(k,f,null),t(f,_e),t(f,G),t(G,$e),l(e,Y,i),l(e,h,i),z(T,h,null),t(h,be),t(h,H),t(H,we),l(e,Z,i),l(e,v,i),z(W,v,null),t(v,De),t(v,J),t(J,ye),l(e,ee,i),l(e,_,i),z(V,_,null),t(_,Se),t(_,j),t(j,ze),re=!0},p:Ce,i(e){re||(x(I.$$.fragment,e),x(N.$$.fragment,e),x(O.$$.fragment,e),x(L.$$.fragment,e),x(k.$$.fragment,e),x(T.$$.fragment,e),x(W.$$.fragment,e),x(V.$$.fragment,e),re=!0)},o(e){E(I.$$.fragment,e),E(N.$$.fragment,e),E(O.$$.fragment,e),E(L.$$.fragment,e),E(k.$$.fragment,e),E(T.$$.fragment,e),E(W.$$.fragment,e),E(V.$$.fragment,e),re=!1},d(e){r(d),e&&r(F),e&&r(u),P(I),e&&r(K),e&&r(m),P(N),P(O),e&&r(Q),e&&r(g),P(L),e&&r(X),e&&r(f),P(k),e&&r(Y),e&&r(h),P(T),e&&r(Z),e&&r(v),P(W),e&&r(ee),e&&r(_),P(V)}}}const He={local:"accelerate.DeepSpeedPlugin",title:"Utilities for DeepSpeed"};function Je(xe){return Re(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Qe extends Ae{constructor(d){super();Ue(this,d,Je,Ge,qe,{})}}export{Qe as default,He as metadata};
