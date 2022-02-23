import{S as Un,i as Kn,s as Mn,e as r,k as c,w as d,t as a,L as Yn,c as n,d as t,m as h,a as l,x as u,h as s,b as f,J as o,g as p,y as T,q as v,o as E,B as $}from"../chunks/vendor-e859c359.js";import{T as jn}from"../chunks/Tip-edc75249.js";import{I as Y}from"../chunks/IconCopyLink-5fae3b20.js";import{C as he}from"../chunks/CodeBlock-ce4317c2.js";import"../chunks/CopyButton-77addb3d.js";function qn(qe){let _,I,m,A,L,k,O,x,S,j,N;return{c(){_=r("p"),I=a("Since 2.3.0 the conversion script is now part of the transformers CLI ("),m=r("strong"),A=a("transformers-cli"),L=a(`) available in any
transformers >= 2.3.0 installation.`),k=c(),O=r("p"),x=a("The documentation below reflects the "),S=r("strong"),j=a("transformers-cli convert"),N=a(" command format.")},l(y){_=n(y,"P",{});var g=l(_);I=s(g,"Since 2.3.0 the conversion script is now part of the transformers CLI ("),m=n(g,"STRONG",{});var Ge=l(m);A=s(Ge,"transformers-cli"),Ge.forEach(t),L=s(g,`) available in any
transformers >= 2.3.0 installation.`),g.forEach(t),k=h(y),O=n(y,"P",{});var q=l(O);x=s(q,"The documentation below reflects the "),S=n(q,"STRONG",{});var _e=l(S);j=s(_e,"transformers-cli convert"),_e.forEach(t),N=s(q," command format."),q.forEach(t)},m(y,g){p(y,_,g),o(_,I),o(_,m),o(m,A),o(_,L),p(y,k,g),p(y,O,g),o(O,x),o(O,S),o(S,j),o(O,N)},d(y){y&&t(_),y&&t(k),y&&t(O)}}}function Jn(qe){let _,I,m,A,L,k,O,x,S,j,N,y,g,Ge,q,_e,J,At,F,z,Je,me,$o,ze,Po,yt,C,Ao,de,yo,go,ue,wo,ko,gt,P,Oo,Qe,No,bo,Ve,Io,Co,We,Ho,Ro,Xe,Lo,xo,Te,So,Fo,wt,w,Do,Ze,Bo,Go,et,Xo,Uo,tt,Ko,Mo,ot,Yo,jo,kt,Q,qo,rt,Jo,zo,Ot,V,Qo,nt,Vo,Wo,Nt,ve,bt,W,Zo,Ee,er,tr,It,D,Z,lt,$e,or,at,rr,Ct,ee,nr,Pe,lr,ar,Ht,H,sr,st,ir,pr,it,fr,cr,Rt,te,hr,pt,_r,mr,Lt,Ae,xt,oe,dr,ye,ur,Tr,St,B,re,ft,ge,vr,ct,Er,Ft,ne,$r,we,Pr,Ar,Dt,ke,Bt,G,le,ht,Oe,yr,_t,gr,Gt,ae,wr,Ne,kr,Or,Xt,be,Ut,X,se,mt,Ie,Nr,dt,br,Kt,ie,Ir,Ce,Cr,Hr,Mt,He,Yt,U,pe,ut,Re,Rr,Tt,Lr,jt,Ue,xr,qt,Le,Jt,K,fe,vt,xe,Sr,Et,Fr,zt,Ke,Dr,Qt,Se,Vt,M,ce,$t,Fe,Br,Pt,Gr,Wt,Me,Xr,Zt,De,eo;return k=new Y({}),J=new jn({props:{$$slots:{default:[qn]},$$scope:{ctx:qe}}}),me=new Y({}),ve=new he({props:{code:`export BERT_BASE_DIR=/path/to/bert/uncased_L-12_H-768_A-12

transformers-cli convert --model_type bert \\
  --tf_checkpoint $BERT_BASE_DIR/bert_model.ckpt \\
  --config $BERT_BASE_DIR/bert_config.json \\
  --pytorch_dump_output $BERT_BASE_DIR/pytorch_model.bin,`,highlighted:`export BERT_BASE_DIR=/path/to/bert/uncased_L-12_H-768_A-12

transformers-cli convert --model_type bert \\
  --tf_checkpoint $BERT_BASE_DIR/bert_model.ckpt \\
  --config $BERT_BASE_DIR/bert_config.json \\
  --pytorch_dump_output $BERT_BASE_DIR/pytorch_model.bin`}}),$e=new Y({}),Ae=new he({props:{code:`export ALBERT_BASE_DIR=/path/to/albert/albert_base

transformers-cli convert --model_type albert \\
  --tf_checkpoint $ALBERT_BASE_DIR/model.ckpt-best \\
  --config $ALBERT_BASE_DIR/albert_config.json \\
  --pytorch_dump_output $ALBERT_BASE_DIR/pytorch_model.bin,`,highlighted:`export ALBERT_BASE_DIR=/path/to/albert/albert_base

transformers-cli convert --model_type albert \\
  --tf_checkpoint $ALBERT_BASE_DIR/model.ckpt-best \\
  --config $ALBERT_BASE_DIR/albert_config.json \\
  --pytorch_dump_output $ALBERT_BASE_DIR/pytorch_model.bin`}}),ge=new Y({}),ke=new he({props:{code:`export OPENAI_GPT_CHECKPOINT_FOLDER_PATH=/path/to/openai/pretrained/numpy/weights

transformers-cli convert --model_type gpt \\
  --tf_checkpoint $OPENAI_GPT_CHECKPOINT_FOLDER_PATH \\
  --pytorch_dump_output $PYTORCH_DUMP_OUTPUT \\
  [--config OPENAI_GPT_CONFIG] \\
  [--finetuning_task_name OPENAI_GPT_FINETUNED_TASK] \\,`,highlighted:`export OPENAI_GPT_CHECKPOINT_FOLDER_PATH=/path/to/openai/pretrained/numpy/weights

transformers-cli convert --model_type gpt \\
  --tf_checkpoint $OPENAI_GPT_CHECKPOINT_FOLDER_PATH \\
  --pytorch_dump_output $PYTORCH_DUMP_OUTPUT \\
  [--config OPENAI_GPT_CONFIG] \\
  [--finetuning_task_name OPENAI_GPT_FINETUNED_TASK] \\`}}),Oe=new Y({}),be=new he({props:{code:`export OPENAI_GPT2_CHECKPOINT_PATH=/path/to/gpt2/pretrained/weights

transformers-cli convert --model_type gpt2 \\
  --tf_checkpoint $OPENAI_GPT2_CHECKPOINT_PATH \\
  --pytorch_dump_output $PYTORCH_DUMP_OUTPUT \\
  [--config OPENAI_GPT2_CONFIG] \\
  [--finetuning_task_name OPENAI_GPT2_FINETUNED_TASK],`,highlighted:`export OPENAI_GPT2_CHECKPOINT_PATH=/path/to/gpt2/pretrained/weights

transformers-cli convert --model_type gpt2 \\
  --tf_checkpoint $OPENAI_GPT2_CHECKPOINT_PATH \\
  --pytorch_dump_output $PYTORCH_DUMP_OUTPUT \\
  [--config OPENAI_GPT2_CONFIG] \\
  [--finetuning_task_name OPENAI_GPT2_FINETUNED_TASK]`}}),Ie=new Y({}),He=new he({props:{code:`export TRANSFO_XL_CHECKPOINT_FOLDER_PATH=/path/to/transfo/xl/checkpoint

transformers-cli convert --model_type transfo_xl \\
  --tf_checkpoint $TRANSFO_XL_CHECKPOINT_FOLDER_PATH \\
  --pytorch_dump_output $PYTORCH_DUMP_OUTPUT \\
  [--config TRANSFO_XL_CONFIG] \\
  [--finetuning_task_name TRANSFO_XL_FINETUNED_TASK],`,highlighted:`export TRANSFO_XL_CHECKPOINT_FOLDER_PATH=/path/to/transfo/xl/checkpoint

transformers-cli convert --model_type transfo_xl \\
  --tf_checkpoint $TRANSFO_XL_CHECKPOINT_FOLDER_PATH \\
  --pytorch_dump_output $PYTORCH_DUMP_OUTPUT \\
  [--config TRANSFO_XL_CONFIG] \\
  [--finetuning_task_name TRANSFO_XL_FINETUNED_TASK]`}}),Re=new Y({}),Le=new he({props:{code:`export TRANSFO_XL_CHECKPOINT_PATH=/path/to/xlnet/checkpoint
export TRANSFO_XL_CONFIG_PATH=/path/to/xlnet/config

transformers-cli convert --model_type xlnet \\
  --tf_checkpoint $TRANSFO_XL_CHECKPOINT_PATH \\
  --config $TRANSFO_XL_CONFIG_PATH \\
  --pytorch_dump_output $PYTORCH_DUMP_OUTPUT \\
  [--finetuning_task_name XLNET_FINETUNED_TASK] \\,`,highlighted:`export TRANSFO_XL_CHECKPOINT_PATH=/path/to/xlnet/checkpoint
export TRANSFO_XL_CONFIG_PATH=/path/to/xlnet/config

transformers-cli convert --model_type xlnet \\
  --tf_checkpoint $TRANSFO_XL_CHECKPOINT_PATH \\
  --config $TRANSFO_XL_CONFIG_PATH \\
  --pytorch_dump_output $PYTORCH_DUMP_OUTPUT \\
  [--finetuning_task_name XLNET_FINETUNED_TASK] \\`}}),xe=new Y({}),Se=new he({props:{code:`export XLM_CHECKPOINT_PATH=/path/to/xlm/checkpoint

transformers-cli convert --model_type xlm \\
  --tf_checkpoint $XLM_CHECKPOINT_PATH \\
  --pytorch_dump_output $PYTORCH_DUMP_OUTPUT
 [--config XML_CONFIG] \\
 [--finetuning_task_name XML_FINETUNED_TASK],`,highlighted:`export XLM_CHECKPOINT_PATH=/path/to/xlm/checkpoint

transformers-cli convert --model_type xlm \\
  --tf_checkpoint $XLM_CHECKPOINT_PATH \\
  --pytorch_dump_output $PYTORCH_DUMP_OUTPUT
 [--config XML_CONFIG] \\
 [--finetuning_task_name XML_FINETUNED_TASK]`}}),Fe=new Y({}),De=new he({props:{code:`export T5=/path/to/t5/uncased_L-12_H-768_A-12

transformers-cli convert --model_type t5 \\
  --tf_checkpoint $T5/t5_model.ckpt \\
  --config $T5/t5_config.json \\
  --pytorch_dump_output $T5/pytorch_model.bin,`,highlighted:`export T5=/path/to/t5/uncased_L-12_H-768_A-12

transformers-cli convert --model_type t5 \\
  --tf_checkpoint $T5/t5_model.ckpt \\
  --config $T5/t5_config.json \\
  --pytorch_dump_output $T5/pytorch_model.bin`}}),{c(){_=r("meta"),I=c(),m=r("h1"),A=r("a"),L=r("span"),d(k.$$.fragment),O=c(),x=r("span"),S=a("Converting Tensorflow Checkpoints"),j=c(),N=r("p"),y=a(`A command-line interface is provided to convert original Bert/GPT/GPT-2/Transformer-XL/XLNet/XLM checkpoints to models
that can be loaded using the `),g=r("code"),Ge=a("from_pretrained"),q=a(" methods of the library."),_e=c(),d(J.$$.fragment),At=c(),F=r("h2"),z=r("a"),Je=r("span"),d(me.$$.fragment),$o=c(),ze=r("span"),Po=a("BERT"),yt=c(),C=r("p"),Ao=a("You can convert any TensorFlow checkpoint for BERT (in particular "),de=r("a"),yo=a("the pre-trained models released by Google"),go=a(`) in a PyTorch save file by using the
`),ue=r("a"),wo=a("convert_bert_original_tf_checkpoint_to_pytorch.py"),ko=a(" script."),gt=c(),P=r("p"),Oo=a("This CLI takes as input a TensorFlow checkpoint (three files starting with "),Qe=r("code"),No=a("bert_model.ckpt"),bo=a(`) and the associated
configuration file (`),Ve=r("code"),Io=a("bert_config.json"),Co=a(`), and creates a PyTorch model for this configuration, loads the weights from
the TensorFlow checkpoint in the PyTorch model and saves the resulting model in a standard PyTorch save file that can
be imported using `),We=r("code"),Ho=a("from_pretrained()"),Ro=a(" (see example in "),Xe=r("a"),Lo=a("quicktour"),xo=a(" , "),Te=r("a"),So=a("run_glue.py"),Fo=a(" )."),wt=c(),w=r("p"),Do=a("You only need to run this conversion script "),Ze=r("strong"),Bo=a("once"),Go=a(` to get a PyTorch model. You can then disregard the TensorFlow
checkpoint (the three files starting with `),et=r("code"),Xo=a("bert_model.ckpt"),Uo=a(`) but be sure to keep the configuration file (\\
`),tt=r("code"),Ko=a("bert_config.json"),Mo=a(") and the vocabulary file ("),ot=r("code"),Yo=a("vocab.txt"),jo=a(") as these are needed for the PyTorch model too."),kt=c(),Q=r("p"),qo=a("To run this specific conversion script you will need to have TensorFlow and PyTorch installed ("),rt=r("code"),Jo=a("pip install tensorflow"),zo=a("). The rest of the repository only requires PyTorch."),Ot=c(),V=r("p"),Qo=a("Here is an example of the conversion process for a pre-trained "),nt=r("code"),Vo=a("BERT-Base Uncased"),Wo=a(" model:"),Nt=c(),d(ve.$$.fragment),bt=c(),W=r("p"),Zo=a("You can download Google\u2019s pre-trained models for the conversion "),Ee=r("a"),er=a("here"),tr=a("."),It=c(),D=r("h2"),Z=r("a"),lt=r("span"),d($e.$$.fragment),or=c(),at=r("span"),rr=a("ALBERT"),Ct=c(),ee=r("p"),nr=a(`Convert TensorFlow model checkpoints of ALBERT to PyTorch using the
`),Pe=r("a"),lr=a("convert_albert_original_tf_checkpoint_to_pytorch.py"),ar=a(" script."),Ht=c(),H=r("p"),sr=a("The CLI takes as input a TensorFlow checkpoint (three files starting with "),st=r("code"),ir=a("model.ckpt-best"),pr=a(`) and the accompanying
configuration file (`),it=r("code"),fr=a("albert_config.json"),cr=a(`), then creates and saves a PyTorch model. To run this conversion you will
need to have TensorFlow and PyTorch installed.`),Rt=c(),te=r("p"),hr=a("Here is an example of the conversion process for the pre-trained "),pt=r("code"),_r=a("ALBERT Base"),mr=a(" model:"),Lt=c(),d(Ae.$$.fragment),xt=c(),oe=r("p"),dr=a("You can download Google\u2019s pre-trained models for the conversion "),ye=r("a"),ur=a("here"),Tr=a("."),St=c(),B=r("h2"),re=r("a"),ft=r("span"),d(ge.$$.fragment),vr=c(),ct=r("span"),Er=a("OpenAI GPT"),Ft=c(),ne=r("p"),$r=a(`Here is an example of the conversion process for a pre-trained OpenAI GPT model, assuming that your NumPy checkpoint
save as the same format than OpenAI pretrained model (see `),we=r("a"),Pr=a("here"),Ar=a(`\\
)`),Dt=c(),d(ke.$$.fragment),Bt=c(),G=r("h2"),le=r("a"),ht=r("span"),d(Oe.$$.fragment),yr=c(),_t=r("span"),gr=a("OpenAI GPT-2"),Gt=c(),ae=r("p"),wr=a("Here is an example of the conversion process for a pre-trained OpenAI GPT-2 model (see "),Ne=r("a"),kr=a("here"),Or=a(")"),Xt=c(),d(be.$$.fragment),Ut=c(),X=r("h2"),se=r("a"),mt=r("span"),d(Ie.$$.fragment),Nr=c(),dt=r("span"),br=a("Transformer-XL"),Kt=c(),ie=r("p"),Ir=a("Here is an example of the conversion process for a pre-trained Transformer-XL model (see "),Ce=r("a"),Cr=a("here"),Hr=a(")"),Mt=c(),d(He.$$.fragment),Yt=c(),U=r("h2"),pe=r("a"),ut=r("span"),d(Re.$$.fragment),Rr=c(),Tt=r("span"),Lr=a("XLNet"),jt=c(),Ue=r("p"),xr=a("Here is an example of the conversion process for a pre-trained XLNet model:"),qt=c(),d(Le.$$.fragment),Jt=c(),K=r("h2"),fe=r("a"),vt=r("span"),d(xe.$$.fragment),Sr=c(),Et=r("span"),Fr=a("XLM"),zt=c(),Ke=r("p"),Dr=a("Here is an example of the conversion process for a pre-trained XLM model:"),Qt=c(),d(Se.$$.fragment),Vt=c(),M=r("h2"),ce=r("a"),$t=r("span"),d(Fe.$$.fragment),Br=c(),Pt=r("span"),Gr=a("T5"),Wt=c(),Me=r("p"),Xr=a("Here is an example of the conversion process for a pre-trained T5 model:"),Zt=c(),d(De.$$.fragment),this.h()},l(e){const i=Yn('[data-svelte="svelte-1phssyn"]',document.head);_=n(i,"META",{name:!0,content:!0}),i.forEach(t),I=h(e),m=n(e,"H1",{class:!0});var Be=l(m);A=n(Be,"A",{id:!0,class:!0,href:!0});var Ur=l(A);L=n(Ur,"SPAN",{});var Kr=l(L);u(k.$$.fragment,Kr),Kr.forEach(t),Ur.forEach(t),O=h(Be),x=n(Be,"SPAN",{});var Mr=l(x);S=s(Mr,"Converting Tensorflow Checkpoints"),Mr.forEach(t),Be.forEach(t),j=h(e),N=n(e,"P",{});var to=l(N);y=s(to,`A command-line interface is provided to convert original Bert/GPT/GPT-2/Transformer-XL/XLNet/XLM checkpoints to models
that can be loaded using the `),g=n(to,"CODE",{});var Yr=l(g);Ge=s(Yr,"from_pretrained"),Yr.forEach(t),q=s(to," methods of the library."),to.forEach(t),_e=h(e),u(J.$$.fragment,e),At=h(e),F=n(e,"H2",{class:!0});var oo=l(F);z=n(oo,"A",{id:!0,class:!0,href:!0});var jr=l(z);Je=n(jr,"SPAN",{});var qr=l(Je);u(me.$$.fragment,qr),qr.forEach(t),jr.forEach(t),$o=h(oo),ze=n(oo,"SPAN",{});var Jr=l(ze);Po=s(Jr,"BERT"),Jr.forEach(t),oo.forEach(t),yt=h(e),C=n(e,"P",{});var Ye=l(C);Ao=s(Ye,"You can convert any TensorFlow checkpoint for BERT (in particular "),de=n(Ye,"A",{href:!0,rel:!0});var zr=l(de);yo=s(zr,"the pre-trained models released by Google"),zr.forEach(t),go=s(Ye,`) in a PyTorch save file by using the
`),ue=n(Ye,"A",{href:!0,rel:!0});var Qr=l(ue);wo=s(Qr,"convert_bert_original_tf_checkpoint_to_pytorch.py"),Qr.forEach(t),ko=s(Ye," script."),Ye.forEach(t),gt=h(e),P=n(e,"P",{});var b=l(P);Oo=s(b,"This CLI takes as input a TensorFlow checkpoint (three files starting with "),Qe=n(b,"CODE",{});var Vr=l(Qe);No=s(Vr,"bert_model.ckpt"),Vr.forEach(t),bo=s(b,`) and the associated
configuration file (`),Ve=n(b,"CODE",{});var Wr=l(Ve);Io=s(Wr,"bert_config.json"),Wr.forEach(t),Co=s(b,`), and creates a PyTorch model for this configuration, loads the weights from
the TensorFlow checkpoint in the PyTorch model and saves the resulting model in a standard PyTorch save file that can
be imported using `),We=n(b,"CODE",{});var Zr=l(We);Ho=s(Zr,"from_pretrained()"),Zr.forEach(t),Ro=s(b," (see example in "),Xe=n(b,"A",{href:!0});var en=l(Xe);Lo=s(en,"quicktour"),en.forEach(t),xo=s(b," , "),Te=n(b,"A",{href:!0,rel:!0});var tn=l(Te);So=s(tn,"run_glue.py"),tn.forEach(t),Fo=s(b," )."),b.forEach(t),wt=h(e),w=n(e,"P",{});var R=l(w);Do=s(R,"You only need to run this conversion script "),Ze=n(R,"STRONG",{});var on=l(Ze);Bo=s(on,"once"),on.forEach(t),Go=s(R,` to get a PyTorch model. You can then disregard the TensorFlow
checkpoint (the three files starting with `),et=n(R,"CODE",{});var rn=l(et);Xo=s(rn,"bert_model.ckpt"),rn.forEach(t),Uo=s(R,`) but be sure to keep the configuration file (\\
`),tt=n(R,"CODE",{});var nn=l(tt);Ko=s(nn,"bert_config.json"),nn.forEach(t),Mo=s(R,") and the vocabulary file ("),ot=n(R,"CODE",{});var ln=l(ot);Yo=s(ln,"vocab.txt"),ln.forEach(t),jo=s(R,") as these are needed for the PyTorch model too."),R.forEach(t),kt=h(e),Q=n(e,"P",{});var ro=l(Q);qo=s(ro,"To run this specific conversion script you will need to have TensorFlow and PyTorch installed ("),rt=n(ro,"CODE",{});var an=l(rt);Jo=s(an,"pip install tensorflow"),an.forEach(t),zo=s(ro,"). The rest of the repository only requires PyTorch."),ro.forEach(t),Ot=h(e),V=n(e,"P",{});var no=l(V);Qo=s(no,"Here is an example of the conversion process for a pre-trained "),nt=n(no,"CODE",{});var sn=l(nt);Vo=s(sn,"BERT-Base Uncased"),sn.forEach(t),Wo=s(no," model:"),no.forEach(t),Nt=h(e),u(ve.$$.fragment,e),bt=h(e),W=n(e,"P",{});var lo=l(W);Zo=s(lo,"You can download Google\u2019s pre-trained models for the conversion "),Ee=n(lo,"A",{href:!0,rel:!0});var pn=l(Ee);er=s(pn,"here"),pn.forEach(t),tr=s(lo,"."),lo.forEach(t),It=h(e),D=n(e,"H2",{class:!0});var ao=l(D);Z=n(ao,"A",{id:!0,class:!0,href:!0});var fn=l(Z);lt=n(fn,"SPAN",{});var cn=l(lt);u($e.$$.fragment,cn),cn.forEach(t),fn.forEach(t),or=h(ao),at=n(ao,"SPAN",{});var hn=l(at);rr=s(hn,"ALBERT"),hn.forEach(t),ao.forEach(t),Ct=h(e),ee=n(e,"P",{});var so=l(ee);nr=s(so,`Convert TensorFlow model checkpoints of ALBERT to PyTorch using the
`),Pe=n(so,"A",{href:!0,rel:!0});var _n=l(Pe);lr=s(_n,"convert_albert_original_tf_checkpoint_to_pytorch.py"),_n.forEach(t),ar=s(so," script."),so.forEach(t),Ht=h(e),H=n(e,"P",{});var je=l(H);sr=s(je,"The CLI takes as input a TensorFlow checkpoint (three files starting with "),st=n(je,"CODE",{});var mn=l(st);ir=s(mn,"model.ckpt-best"),mn.forEach(t),pr=s(je,`) and the accompanying
configuration file (`),it=n(je,"CODE",{});var dn=l(it);fr=s(dn,"albert_config.json"),dn.forEach(t),cr=s(je,`), then creates and saves a PyTorch model. To run this conversion you will
need to have TensorFlow and PyTorch installed.`),je.forEach(t),Rt=h(e),te=n(e,"P",{});var io=l(te);hr=s(io,"Here is an example of the conversion process for the pre-trained "),pt=n(io,"CODE",{});var un=l(pt);_r=s(un,"ALBERT Base"),un.forEach(t),mr=s(io," model:"),io.forEach(t),Lt=h(e),u(Ae.$$.fragment,e),xt=h(e),oe=n(e,"P",{});var po=l(oe);dr=s(po,"You can download Google\u2019s pre-trained models for the conversion "),ye=n(po,"A",{href:!0,rel:!0});var Tn=l(ye);ur=s(Tn,"here"),Tn.forEach(t),Tr=s(po,"."),po.forEach(t),St=h(e),B=n(e,"H2",{class:!0});var fo=l(B);re=n(fo,"A",{id:!0,class:!0,href:!0});var vn=l(re);ft=n(vn,"SPAN",{});var En=l(ft);u(ge.$$.fragment,En),En.forEach(t),vn.forEach(t),vr=h(fo),ct=n(fo,"SPAN",{});var $n=l(ct);Er=s($n,"OpenAI GPT"),$n.forEach(t),fo.forEach(t),Ft=h(e),ne=n(e,"P",{});var co=l(ne);$r=s(co,`Here is an example of the conversion process for a pre-trained OpenAI GPT model, assuming that your NumPy checkpoint
save as the same format than OpenAI pretrained model (see `),we=n(co,"A",{href:!0,rel:!0});var Pn=l(we);Pr=s(Pn,"here"),Pn.forEach(t),Ar=s(co,`\\
)`),co.forEach(t),Dt=h(e),u(ke.$$.fragment,e),Bt=h(e),G=n(e,"H2",{class:!0});var ho=l(G);le=n(ho,"A",{id:!0,class:!0,href:!0});var An=l(le);ht=n(An,"SPAN",{});var yn=l(ht);u(Oe.$$.fragment,yn),yn.forEach(t),An.forEach(t),yr=h(ho),_t=n(ho,"SPAN",{});var gn=l(_t);gr=s(gn,"OpenAI GPT-2"),gn.forEach(t),ho.forEach(t),Gt=h(e),ae=n(e,"P",{});var _o=l(ae);wr=s(_o,"Here is an example of the conversion process for a pre-trained OpenAI GPT-2 model (see "),Ne=n(_o,"A",{href:!0,rel:!0});var wn=l(Ne);kr=s(wn,"here"),wn.forEach(t),Or=s(_o,")"),_o.forEach(t),Xt=h(e),u(be.$$.fragment,e),Ut=h(e),X=n(e,"H2",{class:!0});var mo=l(X);se=n(mo,"A",{id:!0,class:!0,href:!0});var kn=l(se);mt=n(kn,"SPAN",{});var On=l(mt);u(Ie.$$.fragment,On),On.forEach(t),kn.forEach(t),Nr=h(mo),dt=n(mo,"SPAN",{});var Nn=l(dt);br=s(Nn,"Transformer-XL"),Nn.forEach(t),mo.forEach(t),Kt=h(e),ie=n(e,"P",{});var uo=l(ie);Ir=s(uo,"Here is an example of the conversion process for a pre-trained Transformer-XL model (see "),Ce=n(uo,"A",{href:!0,rel:!0});var bn=l(Ce);Cr=s(bn,"here"),bn.forEach(t),Hr=s(uo,")"),uo.forEach(t),Mt=h(e),u(He.$$.fragment,e),Yt=h(e),U=n(e,"H2",{class:!0});var To=l(U);pe=n(To,"A",{id:!0,class:!0,href:!0});var In=l(pe);ut=n(In,"SPAN",{});var Cn=l(ut);u(Re.$$.fragment,Cn),Cn.forEach(t),In.forEach(t),Rr=h(To),Tt=n(To,"SPAN",{});var Hn=l(Tt);Lr=s(Hn,"XLNet"),Hn.forEach(t),To.forEach(t),jt=h(e),Ue=n(e,"P",{});var Rn=l(Ue);xr=s(Rn,"Here is an example of the conversion process for a pre-trained XLNet model:"),Rn.forEach(t),qt=h(e),u(Le.$$.fragment,e),Jt=h(e),K=n(e,"H2",{class:!0});var vo=l(K);fe=n(vo,"A",{id:!0,class:!0,href:!0});var Ln=l(fe);vt=n(Ln,"SPAN",{});var xn=l(vt);u(xe.$$.fragment,xn),xn.forEach(t),Ln.forEach(t),Sr=h(vo),Et=n(vo,"SPAN",{});var Sn=l(Et);Fr=s(Sn,"XLM"),Sn.forEach(t),vo.forEach(t),zt=h(e),Ke=n(e,"P",{});var Fn=l(Ke);Dr=s(Fn,"Here is an example of the conversion process for a pre-trained XLM model:"),Fn.forEach(t),Qt=h(e),u(Se.$$.fragment,e),Vt=h(e),M=n(e,"H2",{class:!0});var Eo=l(M);ce=n(Eo,"A",{id:!0,class:!0,href:!0});var Dn=l(ce);$t=n(Dn,"SPAN",{});var Bn=l($t);u(Fe.$$.fragment,Bn),Bn.forEach(t),Dn.forEach(t),Br=h(Eo),Pt=n(Eo,"SPAN",{});var Gn=l(Pt);Gr=s(Gn,"T5"),Gn.forEach(t),Eo.forEach(t),Wt=h(e),Me=n(e,"P",{});var Xn=l(Me);Xr=s(Xn,"Here is an example of the conversion process for a pre-trained T5 model:"),Xn.forEach(t),Zt=h(e),u(De.$$.fragment,e),this.h()},h(){f(_,"name","hf:doc:metadata"),f(_,"content",JSON.stringify(zn)),f(A,"id","converting-tensorflow-checkpoints"),f(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(A,"href","#converting-tensorflow-checkpoints"),f(m,"class","relative group"),f(z,"id","bert"),f(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(z,"href","#bert"),f(F,"class","relative group"),f(de,"href","https://github.com/google-research/bert#pre-trained-models"),f(de,"rel","nofollow"),f(ue,"href","https://github.com/huggingface/transformers/tree/master/src/transformers/models/bert/convert_bert_original_tf_checkpoint_to_pytorch.py"),f(ue,"rel","nofollow"),f(Xe,"href","/docs/transformers/master/en/quicktour"),f(Te,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/text-classification/run_glue.py"),f(Te,"rel","nofollow"),f(Ee,"href","https://github.com/google-research/bert#pre-trained-models"),f(Ee,"rel","nofollow"),f(Z,"id","albert"),f(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Z,"href","#albert"),f(D,"class","relative group"),f(Pe,"href","https://github.com/huggingface/transformers/tree/master/src/transformers/models/albert/convert_albert_original_tf_checkpoint_to_pytorch.py"),f(Pe,"rel","nofollow"),f(ye,"href","https://github.com/google-research/albert#pre-trained-models"),f(ye,"rel","nofollow"),f(re,"id","openai-gpt"),f(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(re,"href","#openai-gpt"),f(B,"class","relative group"),f(we,"href","https://github.com/openai/finetune-transformer-lm"),f(we,"rel","nofollow"),f(le,"id","openai-gpt2"),f(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(le,"href","#openai-gpt2"),f(G,"class","relative group"),f(Ne,"href","https://github.com/openai/gpt-2"),f(Ne,"rel","nofollow"),f(se,"id","transformerxl"),f(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(se,"href","#transformerxl"),f(X,"class","relative group"),f(Ce,"href","https://github.com/kimiyoung/transformer-xl/tree/master/tf#obtain-and-evaluate-pretrained-sota-models"),f(Ce,"rel","nofollow"),f(pe,"id","xlnet"),f(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pe,"href","#xlnet"),f(U,"class","relative group"),f(fe,"id","xlm"),f(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fe,"href","#xlm"),f(K,"class","relative group"),f(ce,"id","t5"),f(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ce,"href","#t5"),f(M,"class","relative group")},m(e,i){o(document.head,_),p(e,I,i),p(e,m,i),o(m,A),o(A,L),T(k,L,null),o(m,O),o(m,x),o(x,S),p(e,j,i),p(e,N,i),o(N,y),o(N,g),o(g,Ge),o(N,q),p(e,_e,i),T(J,e,i),p(e,At,i),p(e,F,i),o(F,z),o(z,Je),T(me,Je,null),o(F,$o),o(F,ze),o(ze,Po),p(e,yt,i),p(e,C,i),o(C,Ao),o(C,de),o(de,yo),o(C,go),o(C,ue),o(ue,wo),o(C,ko),p(e,gt,i),p(e,P,i),o(P,Oo),o(P,Qe),o(Qe,No),o(P,bo),o(P,Ve),o(Ve,Io),o(P,Co),o(P,We),o(We,Ho),o(P,Ro),o(P,Xe),o(Xe,Lo),o(P,xo),o(P,Te),o(Te,So),o(P,Fo),p(e,wt,i),p(e,w,i),o(w,Do),o(w,Ze),o(Ze,Bo),o(w,Go),o(w,et),o(et,Xo),o(w,Uo),o(w,tt),o(tt,Ko),o(w,Mo),o(w,ot),o(ot,Yo),o(w,jo),p(e,kt,i),p(e,Q,i),o(Q,qo),o(Q,rt),o(rt,Jo),o(Q,zo),p(e,Ot,i),p(e,V,i),o(V,Qo),o(V,nt),o(nt,Vo),o(V,Wo),p(e,Nt,i),T(ve,e,i),p(e,bt,i),p(e,W,i),o(W,Zo),o(W,Ee),o(Ee,er),o(W,tr),p(e,It,i),p(e,D,i),o(D,Z),o(Z,lt),T($e,lt,null),o(D,or),o(D,at),o(at,rr),p(e,Ct,i),p(e,ee,i),o(ee,nr),o(ee,Pe),o(Pe,lr),o(ee,ar),p(e,Ht,i),p(e,H,i),o(H,sr),o(H,st),o(st,ir),o(H,pr),o(H,it),o(it,fr),o(H,cr),p(e,Rt,i),p(e,te,i),o(te,hr),o(te,pt),o(pt,_r),o(te,mr),p(e,Lt,i),T(Ae,e,i),p(e,xt,i),p(e,oe,i),o(oe,dr),o(oe,ye),o(ye,ur),o(oe,Tr),p(e,St,i),p(e,B,i),o(B,re),o(re,ft),T(ge,ft,null),o(B,vr),o(B,ct),o(ct,Er),p(e,Ft,i),p(e,ne,i),o(ne,$r),o(ne,we),o(we,Pr),o(ne,Ar),p(e,Dt,i),T(ke,e,i),p(e,Bt,i),p(e,G,i),o(G,le),o(le,ht),T(Oe,ht,null),o(G,yr),o(G,_t),o(_t,gr),p(e,Gt,i),p(e,ae,i),o(ae,wr),o(ae,Ne),o(Ne,kr),o(ae,Or),p(e,Xt,i),T(be,e,i),p(e,Ut,i),p(e,X,i),o(X,se),o(se,mt),T(Ie,mt,null),o(X,Nr),o(X,dt),o(dt,br),p(e,Kt,i),p(e,ie,i),o(ie,Ir),o(ie,Ce),o(Ce,Cr),o(ie,Hr),p(e,Mt,i),T(He,e,i),p(e,Yt,i),p(e,U,i),o(U,pe),o(pe,ut),T(Re,ut,null),o(U,Rr),o(U,Tt),o(Tt,Lr),p(e,jt,i),p(e,Ue,i),o(Ue,xr),p(e,qt,i),T(Le,e,i),p(e,Jt,i),p(e,K,i),o(K,fe),o(fe,vt),T(xe,vt,null),o(K,Sr),o(K,Et),o(Et,Fr),p(e,zt,i),p(e,Ke,i),o(Ke,Dr),p(e,Qt,i),T(Se,e,i),p(e,Vt,i),p(e,M,i),o(M,ce),o(ce,$t),T(Fe,$t,null),o(M,Br),o(M,Pt),o(Pt,Gr),p(e,Wt,i),p(e,Me,i),o(Me,Xr),p(e,Zt,i),T(De,e,i),eo=!0},p(e,[i]){const Be={};i&2&&(Be.$$scope={dirty:i,ctx:e}),J.$set(Be)},i(e){eo||(v(k.$$.fragment,e),v(J.$$.fragment,e),v(me.$$.fragment,e),v(ve.$$.fragment,e),v($e.$$.fragment,e),v(Ae.$$.fragment,e),v(ge.$$.fragment,e),v(ke.$$.fragment,e),v(Oe.$$.fragment,e),v(be.$$.fragment,e),v(Ie.$$.fragment,e),v(He.$$.fragment,e),v(Re.$$.fragment,e),v(Le.$$.fragment,e),v(xe.$$.fragment,e),v(Se.$$.fragment,e),v(Fe.$$.fragment,e),v(De.$$.fragment,e),eo=!0)},o(e){E(k.$$.fragment,e),E(J.$$.fragment,e),E(me.$$.fragment,e),E(ve.$$.fragment,e),E($e.$$.fragment,e),E(Ae.$$.fragment,e),E(ge.$$.fragment,e),E(ke.$$.fragment,e),E(Oe.$$.fragment,e),E(be.$$.fragment,e),E(Ie.$$.fragment,e),E(He.$$.fragment,e),E(Re.$$.fragment,e),E(Le.$$.fragment,e),E(xe.$$.fragment,e),E(Se.$$.fragment,e),E(Fe.$$.fragment,e),E(De.$$.fragment,e),eo=!1},d(e){t(_),e&&t(I),e&&t(m),$(k),e&&t(j),e&&t(N),e&&t(_e),$(J,e),e&&t(At),e&&t(F),$(me),e&&t(yt),e&&t(C),e&&t(gt),e&&t(P),e&&t(wt),e&&t(w),e&&t(kt),e&&t(Q),e&&t(Ot),e&&t(V),e&&t(Nt),$(ve,e),e&&t(bt),e&&t(W),e&&t(It),e&&t(D),$($e),e&&t(Ct),e&&t(ee),e&&t(Ht),e&&t(H),e&&t(Rt),e&&t(te),e&&t(Lt),$(Ae,e),e&&t(xt),e&&t(oe),e&&t(St),e&&t(B),$(ge),e&&t(Ft),e&&t(ne),e&&t(Dt),$(ke,e),e&&t(Bt),e&&t(G),$(Oe),e&&t(Gt),e&&t(ae),e&&t(Xt),$(be,e),e&&t(Ut),e&&t(X),$(Ie),e&&t(Kt),e&&t(ie),e&&t(Mt),$(He,e),e&&t(Yt),e&&t(U),$(Re),e&&t(jt),e&&t(Ue),e&&t(qt),$(Le,e),e&&t(Jt),e&&t(K),$(xe),e&&t(zt),e&&t(Ke),e&&t(Qt),$(Se,e),e&&t(Vt),e&&t(M),$(Fe),e&&t(Wt),e&&t(Me),e&&t(Zt),$(De,e)}}}const zn={local:"converting-tensorflow-checkpoints",sections:[{local:"bert",title:"BERT"},{local:"albert",title:"ALBERT"},{local:"openai-gpt",title:"OpenAI GPT"},{local:"openai-gpt2",title:"OpenAI GPT-2"},{local:"transformerxl",title:"Transformer-XL"},{local:"xlnet",title:"XLNet"},{local:"xlm",title:"XLM"},{local:"t5",title:"T5"}],title:"Converting Tensorflow Checkpoints"};function Qn(qe,_,I){let{fw:m}=_;return qe.$$set=A=>{"fw"in A&&I(0,m=A.fw)},[m]}class ol extends Un{constructor(_){super();Kn(this,_,Qn,Jn,Mn,{fw:0})}}export{ol as default,zn as metadata};
