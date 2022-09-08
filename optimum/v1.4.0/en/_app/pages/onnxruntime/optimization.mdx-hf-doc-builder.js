import{S as jo,i as Ro,s as ko,e as i,k as l,w as u,t as s,M as qo,c as n,d as o,m as d,a,x as g,h as m,b as p,G as t,g as h,y as _,L as Eo,q as z,o as O,B as v,v as Lo}from"../../chunks/vendor-hf-doc-builder.js";import{D as pe}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ot}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as it}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Po(Qt){let b,Re,y,R,le,X,nt,de,at,ke,x,rt,he,st,mt,D,pt,lt,qe,T,k,ce,F,dt,ne,ht,fe,ct,Ee,$,ft,ue,ut,gt,ge,_t,zt,Le,ae,A,Ot,_e,vt,xt,Pe,U,Ce,I,ze,$t,Ne,H,Se,w,q,Oe,B,bt,ve,yt,Me,E,Tt,V,wt,jt,Xe,G,De,L,Rt,J,kt,qt,Fe,W,Ae,j,P,xe,K,Et,$e,Lt,Ue,c,Q,Pt,be,Ct,Nt,re,Y,St,C,Z,Mt,ye,Xt,Dt,N,ee,Ft,Te,At,Ut,S,te,It,we,Ht,Bt,M,oe,Vt,ie,Gt,je,Jt,Wt,Ie;return X=new it({}),F=new it({}),U=new ot({props:{code:`from optimum.onnxruntime import ORTOptimizer, ORTModelForSequenceClassification

model = ORTModelForSequenceClassification.from_pretrained("optimum/distilbert-base-uncased-finetuned-sst-2-english")

optimizer = ORTOptimizer.from_pretrained(model)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTOptimizer, ORTModelForSequenceClassification

<span class="hljs-comment"># Loading ONNX Model from the Hub</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;optimum/distilbert-base-uncased-finetuned-sst-2-english&quot;</span>)

<span class="hljs-comment"># Create an optimizer from an ORTModelForXXX</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = ORTOptimizer.from_pretrained(model)`}}),H=new ot({props:{code:`from optimum.onnxruntime import ORTOptimizer

optimizer = ORTOptimizer.from_pretrained("path/to/model")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTOptimizer

<span class="hljs-comment"># This assumes a model.onnx exists in path/to/model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = ORTOptimizer.from_pretrained(<span class="hljs-string">&quot;path/to/model&quot;</span>)`}}),B=new it({}),G=new ot({props:{code:`from optimum.onnxruntime import ORTOptimizer, ORTModelForSequenceClassification
from optimum.onnxruntime.configuration import OptimizationConfig

model_id = "distilbert-base-uncased-finetuned-sst-2-english"
save_dir = "/tmp/outputs"

model = ORTModelForSequenceClassification.from_pretrained(model_id, from_transformers=True)

optimizer = ORTOptimizer.from_pretrained(model)

optimization_config = OptimizationConfig(

optimizer.optimize(save_dir=save_dir, optimization_config=optimization_config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTOptimizer, ORTModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> OptimizationConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model_id = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>save_dir = <span class="hljs-string">&quot;/tmp/outputs&quot;</span>

<span class="hljs-comment"># Load a PyTorch model and export it to the ONNX format</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSequenceClassification.from_pretrained(model_id, from_transformers=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># Create the optimizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = ORTOptimizer.from_pretrained(model)

<span class="hljs-comment"># Define the optimization strategy by creating the appropriate configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimization_config = OptimizationConfig(
    optimization_level=<span class="hljs-number">2</span>,
    optimize_with_onnxruntime_only=<span class="hljs-literal">False</span>,
    optimize_for_gpu=<span class="hljs-literal">False</span>,
)

<span class="hljs-comment"># Optimize the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer.optimize(save_dir=save_dir, optimization_config=optimization_config)`}}),W=new ot({props:{code:`from optimum.onnxruntime import ORTOptimizer, ORTModelForSeq2SeqLM
from optimum.onnxruntime.configuration import OptimizationConfig
from transformers import AutoTokenizer

model_id = "sshleifer/distilbart-cnn-12-6"
save_dir = "/tmp/outputs"

model = ORTModelForSeq2SeqLM.from_pretrained(model_id, from_transformers=True)

optimizer = ORTOptimizer.from_pretrained(model)

optimization_config = OptimizationConfig(

optimizer.optimize(save_dir=save_dir, optimization_config=optimization_config)

optimized_model = ORTModelForSeq2SeqLM.from_pretrained(
tokenizer = AutoTokenizer.from_pretrained(model_id)
tokens = tokenizer("This is a sample input", return_tensors="pt")
outputs = optimized_model.generate(**tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTOptimizer, ORTModelForSeq2SeqLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> OptimizationConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model_id = <span class="hljs-string">&quot;sshleifer/distilbart-cnn-12-6&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>save_dir = <span class="hljs-string">&quot;/tmp/outputs&quot;</span>

<span class="hljs-comment"># Load a PyTorch model and export it to the ONNX format</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSeq2SeqLM.from_pretrained(model_id, from_transformers=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># Create the optimizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = ORTOptimizer.from_pretrained(model)

<span class="hljs-comment"># Define the optimization strategy by creating the appropriate configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimization_config = OptimizationConfig(
    optimization_level=<span class="hljs-number">2</span>,
    optimize_with_onnxruntime_only=<span class="hljs-literal">False</span>,
    optimize_for_gpu=<span class="hljs-literal">False</span>,
)

<span class="hljs-comment"># Optimize the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer.optimize(save_dir=save_dir, optimization_config=optimization_config)

<span class="hljs-comment"># Load the resulting optimized model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimized_model = ORTModelForSeq2SeqLM.from_pretrained(
    save_dir,
    encoder_file_name=<span class="hljs-string">&quot;encoder_model_optimized.onnx&quot;</span>,
    decoder_file_name=<span class="hljs-string">&quot;decoder_model_optimized.onnx&quot;</span>,
    decoder_file_with_past_name=<span class="hljs-string">&quot;decoder_with_past_model_optimized.onnx&quot;</span>,
)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(model_id)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokens = tokenizer(<span class="hljs-string">&quot;This is a sample input&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = optimized_model.generate(**tokens)`}}),K=new it({}),Q=new pe({props:{name:"class optimum.onnxruntime.ORTOptimizer",anchor:"optimum.onnxruntime.ORTOptimizer",parameters:[{name:"onnx_model_path",val:": typing.List[os.PathLike]"},{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/onnxruntime/optimization.py#L37"}}),Y=new pe({props:{name:"from_pretrained",anchor:"optimum.onnxruntime.ORTOptimizer.from_pretrained",parameters:[{name:"model_or_path",val:": typing.Union[str, os.PathLike, optimum.onnxruntime.modeling_ort.ORTModel]"},{name:"file_names",val:": typing.Optional[typing.List[str]] = None"}],parametersDescription:[{anchor:"optimum.onnxruntime.ORTOptimizer.from_pretrained.model_or_path",description:`<strong>model_or_path</strong> (<code>Union[str, os.PathLike, ORTModel]</code>) &#x2014;
The path to a local directory hosting the model to optimize or an instance of an <code>ORTModel</code> to quantize.
Can be either:<ul>
<li>A path to a local <em>directory</em> containing the model to optimize.</li>
<li>An instance of ORTModel.</li>
</ul>`,name:"model_or_path"},{anchor:"optimum.onnxruntime.ORTOptimizer.from_pretrained.file_names(List[str],",description:`<strong>file_names(<code>List[str]</code>,</strong> <em>optional</em>) &#x2014;
The list of file names of the models to optimize.`,name:"file_names(List[str],"}],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/onnxruntime/optimization.py#L54"}}),Z=new pe({props:{name:"get_fused_operators",anchor:"optimum.onnxruntime.ORTOptimizer.get_fused_operators",parameters:[{name:"onnx_model_path",val:": typing.Union[str, os.PathLike]"}],parametersDescription:[{anchor:"optimum.onnxruntime.ORTOptimizer.get_fused_operators.onnx_model_path",description:`<strong>onnx_model_path</strong> (<code>Union[str, os.PathLike]</code>) &#x2014;
Path of the ONNX model.`,name:"onnx_model_path"}],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/onnxruntime/optimization.py#L155",returnDescription:`
<p>The dictionary mapping the name of the fused operators to their number of apparition in the model.</p>
`}}),ee=new pe({props:{name:"get_nodes_number_difference",anchor:"optimum.onnxruntime.ORTOptimizer.get_nodes_number_difference",parameters:[{name:"onnx_model_path",val:": typing.Union[str, os.PathLike]"},{name:"onnx_optimized_model_path",val:": typing.Union[str, os.PathLike]"}],parametersDescription:[{anchor:"optimum.onnxruntime.ORTOptimizer.get_nodes_number_difference.onnx_model_path",description:`<strong>onnx_model_path</strong> (<code>Union[str, os.PathLike]</code>) &#x2014;
Path of the ONNX model.`,name:"onnx_model_path"},{anchor:"optimum.onnxruntime.ORTOptimizer.get_nodes_number_difference.onnx_optimized_model_path",description:`<strong>onnx_optimized_model_path</strong> (<code>Union[str, os.PathLike]</code>) &#x2014;
Path of the optimized ONNX model.`,name:"onnx_optimized_model_path"}],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/onnxruntime/optimization.py#L174",returnDescription:`
<p>The difference in the number of nodes between the original and the optimized model.</p>
`}}),te=new pe({props:{name:"get_operators_difference",anchor:"optimum.onnxruntime.ORTOptimizer.get_operators_difference",parameters:[{name:"onnx_model_path",val:": typing.Union[str, os.PathLike]"},{name:"onnx_optimized_model_path",val:": typing.Union[str, os.PathLike]"}],parametersDescription:[{anchor:"optimum.onnxruntime.ORTOptimizer.get_operators_difference.onnx_model_path",description:`<strong>onnx_model_path</strong> (<code>Union[str, os.PathLike]</code>) &#x2014;
Path of the ONNX model.`,name:"onnx_model_path"},{anchor:"optimum.onnxruntime.ORTOptimizer.get_operators_difference.onnx_optimized_model_path",description:`<strong>onnx_optimized_model_path</strong> (<code>Union[str, os.PathLike]</code>) &#x2014;
Path of the optimized ONNX model.`,name:"onnx_optimized_model_path"}],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/onnxruntime/optimization.py#L203",returnDescription:`
<p>The dictionary mapping the operators name to the difference in the number of corresponding nodes between the
original and the optimized model.</p>
`}}),oe=new pe({props:{name:"optimize",anchor:"optimum.onnxruntime.ORTOptimizer.optimize",parameters:[{name:"optimization_config",val:": OptimizationConfig"},{name:"save_dir",val:": typing.Union[str, os.PathLike]"},{name:"file_suffix",val:": typing.Optional[str] = 'optimized'"},{name:"use_external_data_format",val:": bool = False"}],parametersDescription:[{anchor:"optimum.onnxruntime.ORTOptimizer.optimize.optimization_config",description:`<strong>optimization_config</strong> (<code>OptimizationConfig</code>) &#x2014;
The configuration containing the parameters related to optimization.`,name:"optimization_config"},{anchor:"optimum.onnxruntime.ORTOptimizer.optimize.save_dir",description:`<strong>save_dir</strong> (<code>Union[str, os.PathLike]</code>) &#x2014;
The path used to save the optimized model.`,name:"save_dir"},{anchor:"optimum.onnxruntime.ORTOptimizer.optimize.file_suffix",description:`<strong>file_suffix</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;optimized&quot;</code>) &#x2014;
The file suffix used to save the optimized model.`,name:"file_suffix"},{anchor:"optimum.onnxruntime.ORTOptimizer.optimize.use_external_data_format",description:`<strong>use_external_data_format</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use external data format to store model of size &gt;= 2Gb.`,name:"use_external_data_format"}],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/onnxruntime/optimization.py#L92"}}),{c(){b=i("meta"),Re=l(),y=i("h1"),R=i("a"),le=i("span"),u(X.$$.fragment),nt=l(),de=i("span"),at=s("Optimization"),ke=l(),x=i("p"),rt=s("\u{1F917} Optimum provides an "),he=i("code"),st=s("optimum.onnxruntime"),mt=s(" package that enables you to apply graph optimization on many model hosted on the \u{1F917} hub using the "),D=i("a"),pt=s("ONNX Runtime"),lt=s(" model optimization tool."),qe=l(),T=i("h2"),k=i("a"),ce=i("span"),u(F.$$.fragment),dt=l(),ne=i("span"),ht=s("Creating an "),fe=i("code"),ct=s("ORTOptimizer"),Ee=l(),$=i("p"),ft=s("The "),ue=i("code"),ut=s("ORTOptimizer"),gt=s(" class is used to optimize your ONNX model. The class can be initialized using the "),ge=i("code"),_t=s("from_pretrained()"),zt=s(" method, which supports different checkpoint formats."),Le=l(),ae=i("ol"),A=i("li"),Ot=s("Using an already initialized "),_e=i("code"),vt=s("ORTModelForXXX"),xt=s(" class."),Pe=l(),u(U.$$.fragment),Ce=l(),I=i("ol"),ze=i("li"),$t=s("Using a local ONNX model from a directory."),Ne=l(),u(H.$$.fragment),Se=l(),w=i("h2"),q=i("a"),Oe=i("span"),u(B.$$.fragment),bt=l(),ve=i("span"),yt=s("Optimization examples"),Me=l(),E=i("p"),Tt=s("Below you will find an easy end-to-end example on how to optimize "),V=i("a"),wt=s("distilbert-base-uncased-finetuned-sst-2-english"),jt=s("."),Xe=l(),u(G.$$.fragment),De=l(),L=i("p"),Rt=s("Below you will find an easy end-to-end example on how to optimize a Seq2Seq model "),J=i("a"),kt=s("sshleifer/distilbart-cnn-12-6\u201D"),qt=s("."),Fe=l(),u(W.$$.fragment),Ae=l(),j=i("h2"),P=i("a"),xe=i("span"),u(K.$$.fragment),Et=l(),$e=i("span"),Lt=s("ORTOptimizer"),Ue=l(),c=i("div"),u(Q.$$.fragment),Pt=l(),be=i("p"),Ct=s("Handles the ONNX Runtime optimization process for models shared on huggingface.co/models."),Nt=l(),re=i("div"),u(Y.$$.fragment),St=l(),C=i("div"),u(Z.$$.fragment),Mt=l(),ye=i("p"),Xt=s("Compute the dictionary mapping the name of the fused operators to their number of apparition in the model."),Dt=l(),N=i("div"),u(ee.$$.fragment),Ft=l(),Te=i("p"),At=s("Compute the difference in the number of nodes between the original and the optimized model."),Ut=l(),S=i("div"),u(te.$$.fragment),It=l(),we=i("p"),Ht=s(`Compute the dictionary mapping the operators name to the difference in the number of corresponding nodes between
the original and the optimized model.`),Bt=l(),M=i("div"),u(oe.$$.fragment),Vt=l(),ie=i("p"),Gt=s("Optimize a model given the optimization specifications defined in "),je=i("code"),Jt=s("optimization_config"),Wt=s("."),this.h()},l(e){const r=qo('[data-svelte="svelte-1phssyn"]',document.head);b=n(r,"META",{name:!0,content:!0}),r.forEach(o),Re=d(e),y=n(e,"H1",{class:!0});var He=a(y);R=n(He,"A",{id:!0,class:!0,href:!0});var Yt=a(R);le=n(Yt,"SPAN",{});var Zt=a(le);g(X.$$.fragment,Zt),Zt.forEach(o),Yt.forEach(o),nt=d(He),de=n(He,"SPAN",{});var eo=a(de);at=m(eo,"Optimization"),eo.forEach(o),He.forEach(o),ke=d(e),x=n(e,"P",{});var se=a(x);rt=m(se,"\u{1F917} Optimum provides an "),he=n(se,"CODE",{});var to=a(he);st=m(to,"optimum.onnxruntime"),to.forEach(o),mt=m(se," package that enables you to apply graph optimization on many model hosted on the \u{1F917} hub using the "),D=n(se,"A",{href:!0,rel:!0});var oo=a(D);pt=m(oo,"ONNX Runtime"),oo.forEach(o),lt=m(se," model optimization tool."),se.forEach(o),qe=d(e),T=n(e,"H2",{class:!0});var Be=a(T);k=n(Be,"A",{id:!0,class:!0,href:!0});var io=a(k);ce=n(io,"SPAN",{});var no=a(ce);g(F.$$.fragment,no),no.forEach(o),io.forEach(o),dt=d(Be),ne=n(Be,"SPAN",{});var Kt=a(ne);ht=m(Kt,"Creating an "),fe=n(Kt,"CODE",{});var ao=a(fe);ct=m(ao,"ORTOptimizer"),ao.forEach(o),Kt.forEach(o),Be.forEach(o),Ee=d(e),$=n(e,"P",{});var me=a($);ft=m(me,"The "),ue=n(me,"CODE",{});var ro=a(ue);ut=m(ro,"ORTOptimizer"),ro.forEach(o),gt=m(me," class is used to optimize your ONNX model. The class can be initialized using the "),ge=n(me,"CODE",{});var so=a(ge);_t=m(so,"from_pretrained()"),so.forEach(o),zt=m(me," method, which supports different checkpoint formats."),me.forEach(o),Le=d(e),ae=n(e,"OL",{});var mo=a(ae);A=n(mo,"LI",{});var Ve=a(A);Ot=m(Ve,"Using an already initialized "),_e=n(Ve,"CODE",{});var po=a(_e);vt=m(po,"ORTModelForXXX"),po.forEach(o),xt=m(Ve," class."),Ve.forEach(o),mo.forEach(o),Pe=d(e),g(U.$$.fragment,e),Ce=d(e),I=n(e,"OL",{start:!0});var lo=a(I);ze=n(lo,"LI",{});var ho=a(ze);$t=m(ho,"Using a local ONNX model from a directory."),ho.forEach(o),lo.forEach(o),Ne=d(e),g(H.$$.fragment,e),Se=d(e),w=n(e,"H2",{class:!0});var Ge=a(w);q=n(Ge,"A",{id:!0,class:!0,href:!0});var co=a(q);Oe=n(co,"SPAN",{});var fo=a(Oe);g(B.$$.fragment,fo),fo.forEach(o),co.forEach(o),bt=d(Ge),ve=n(Ge,"SPAN",{});var uo=a(ve);yt=m(uo,"Optimization examples"),uo.forEach(o),Ge.forEach(o),Me=d(e),E=n(e,"P",{});var Je=a(E);Tt=m(Je,"Below you will find an easy end-to-end example on how to optimize "),V=n(Je,"A",{href:!0,rel:!0});var go=a(V);wt=m(go,"distilbert-base-uncased-finetuned-sst-2-english"),go.forEach(o),jt=m(Je,"."),Je.forEach(o),Xe=d(e),g(G.$$.fragment,e),De=d(e),L=n(e,"P",{});var We=a(L);Rt=m(We,"Below you will find an easy end-to-end example on how to optimize a Seq2Seq model "),J=n(We,"A",{href:!0,rel:!0});var _o=a(J);kt=m(_o,"sshleifer/distilbart-cnn-12-6\u201D"),_o.forEach(o),qt=m(We,"."),We.forEach(o),Fe=d(e),g(W.$$.fragment,e),Ae=d(e),j=n(e,"H2",{class:!0});var Ke=a(j);P=n(Ke,"A",{id:!0,class:!0,href:!0});var zo=a(P);xe=n(zo,"SPAN",{});var Oo=a(xe);g(K.$$.fragment,Oo),Oo.forEach(o),zo.forEach(o),Et=d(Ke),$e=n(Ke,"SPAN",{});var vo=a($e);Lt=m(vo,"ORTOptimizer"),vo.forEach(o),Ke.forEach(o),Ue=d(e),c=n(e,"DIV",{class:!0});var f=a(c);g(Q.$$.fragment,f),Pt=d(f),be=n(f,"P",{});var xo=a(be);Ct=m(xo,"Handles the ONNX Runtime optimization process for models shared on huggingface.co/models."),xo.forEach(o),Nt=d(f),re=n(f,"DIV",{class:!0});var $o=a(re);g(Y.$$.fragment,$o),$o.forEach(o),St=d(f),C=n(f,"DIV",{class:!0});var Qe=a(C);g(Z.$$.fragment,Qe),Mt=d(Qe),ye=n(Qe,"P",{});var bo=a(ye);Xt=m(bo,"Compute the dictionary mapping the name of the fused operators to their number of apparition in the model."),bo.forEach(o),Qe.forEach(o),Dt=d(f),N=n(f,"DIV",{class:!0});var Ye=a(N);g(ee.$$.fragment,Ye),Ft=d(Ye),Te=n(Ye,"P",{});var yo=a(Te);At=m(yo,"Compute the difference in the number of nodes between the original and the optimized model."),yo.forEach(o),Ye.forEach(o),Ut=d(f),S=n(f,"DIV",{class:!0});var Ze=a(S);g(te.$$.fragment,Ze),It=d(Ze),we=n(Ze,"P",{});var To=a(we);Ht=m(To,`Compute the dictionary mapping the operators name to the difference in the number of corresponding nodes between
the original and the optimized model.`),To.forEach(o),Ze.forEach(o),Bt=d(f),M=n(f,"DIV",{class:!0});var et=a(M);g(oe.$$.fragment,et),Vt=d(et),ie=n(et,"P",{});var tt=a(ie);Gt=m(tt,"Optimize a model given the optimization specifications defined in "),je=n(tt,"CODE",{});var wo=a(je);Jt=m(wo,"optimization_config"),wo.forEach(o),Wt=m(tt,"."),tt.forEach(o),et.forEach(o),f.forEach(o),this.h()},h(){p(b,"name","hf:doc:metadata"),p(b,"content",JSON.stringify(Co)),p(R,"id","optimization"),p(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(R,"href","#optimization"),p(y,"class","relative group"),p(D,"href","https://github.com/microsoft/onnxruntime/tree/master/onnxruntime/python/tools/transformers"),p(D,"rel","nofollow"),p(k,"id","creating-an-ortoptimizer"),p(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(k,"href","#creating-an-ortoptimizer"),p(T,"class","relative group"),p(I,"start","2"),p(q,"id","optimization-examples"),p(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(q,"href","#optimization-examples"),p(w,"class","relative group"),p(V,"href","https://huggingface.co/distilbert-base-uncased-finetuned-sst-2-english"),p(V,"rel","nofollow"),p(J,"href","https://huggingface.co/sshleifer/distilbart-cnn-12-6"),p(J,"rel","nofollow"),p(P,"id","optimum.onnxruntime.ORTOptimizer"),p(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(P,"href","#optimum.onnxruntime.ORTOptimizer"),p(j,"class","relative group"),p(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(c,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,r){t(document.head,b),h(e,Re,r),h(e,y,r),t(y,R),t(R,le),_(X,le,null),t(y,nt),t(y,de),t(de,at),h(e,ke,r),h(e,x,r),t(x,rt),t(x,he),t(he,st),t(x,mt),t(x,D),t(D,pt),t(x,lt),h(e,qe,r),h(e,T,r),t(T,k),t(k,ce),_(F,ce,null),t(T,dt),t(T,ne),t(ne,ht),t(ne,fe),t(fe,ct),h(e,Ee,r),h(e,$,r),t($,ft),t($,ue),t(ue,ut),t($,gt),t($,ge),t(ge,_t),t($,zt),h(e,Le,r),h(e,ae,r),t(ae,A),t(A,Ot),t(A,_e),t(_e,vt),t(A,xt),h(e,Pe,r),_(U,e,r),h(e,Ce,r),h(e,I,r),t(I,ze),t(ze,$t),h(e,Ne,r),_(H,e,r),h(e,Se,r),h(e,w,r),t(w,q),t(q,Oe),_(B,Oe,null),t(w,bt),t(w,ve),t(ve,yt),h(e,Me,r),h(e,E,r),t(E,Tt),t(E,V),t(V,wt),t(E,jt),h(e,Xe,r),_(G,e,r),h(e,De,r),h(e,L,r),t(L,Rt),t(L,J),t(J,kt),t(L,qt),h(e,Fe,r),_(W,e,r),h(e,Ae,r),h(e,j,r),t(j,P),t(P,xe),_(K,xe,null),t(j,Et),t(j,$e),t($e,Lt),h(e,Ue,r),h(e,c,r),_(Q,c,null),t(c,Pt),t(c,be),t(be,Ct),t(c,Nt),t(c,re),_(Y,re,null),t(c,St),t(c,C),_(Z,C,null),t(C,Mt),t(C,ye),t(ye,Xt),t(c,Dt),t(c,N),_(ee,N,null),t(N,Ft),t(N,Te),t(Te,At),t(c,Ut),t(c,S),_(te,S,null),t(S,It),t(S,we),t(we,Ht),t(c,Bt),t(c,M),_(oe,M,null),t(M,Vt),t(M,ie),t(ie,Gt),t(ie,je),t(je,Jt),t(ie,Wt),Ie=!0},p:Eo,i(e){Ie||(z(X.$$.fragment,e),z(F.$$.fragment,e),z(U.$$.fragment,e),z(H.$$.fragment,e),z(B.$$.fragment,e),z(G.$$.fragment,e),z(W.$$.fragment,e),z(K.$$.fragment,e),z(Q.$$.fragment,e),z(Y.$$.fragment,e),z(Z.$$.fragment,e),z(ee.$$.fragment,e),z(te.$$.fragment,e),z(oe.$$.fragment,e),Ie=!0)},o(e){O(X.$$.fragment,e),O(F.$$.fragment,e),O(U.$$.fragment,e),O(H.$$.fragment,e),O(B.$$.fragment,e),O(G.$$.fragment,e),O(W.$$.fragment,e),O(K.$$.fragment,e),O(Q.$$.fragment,e),O(Y.$$.fragment,e),O(Z.$$.fragment,e),O(ee.$$.fragment,e),O(te.$$.fragment,e),O(oe.$$.fragment,e),Ie=!1},d(e){o(b),e&&o(Re),e&&o(y),v(X),e&&o(ke),e&&o(x),e&&o(qe),e&&o(T),v(F),e&&o(Ee),e&&o($),e&&o(Le),e&&o(ae),e&&o(Pe),v(U,e),e&&o(Ce),e&&o(I),e&&o(Ne),v(H,e),e&&o(Se),e&&o(w),v(B),e&&o(Me),e&&o(E),e&&o(Xe),v(G,e),e&&o(De),e&&o(L),e&&o(Fe),v(W,e),e&&o(Ae),e&&o(j),v(K),e&&o(Ue),e&&o(c),v(Q),v(Y),v(Z),v(ee),v(te),v(oe)}}}const Co={local:"optimization",sections:[{local:"creating-an-ortoptimizer",title:"Creating an `ORTOptimizer`"},{local:"optimization-examples",title:"Optimization examples"},{local:"optimum.onnxruntime.ORTOptimizer",title:"ORTOptimizer"}],title:"Optimization"};function No(Qt){return Lo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Fo extends jo{constructor(b){super();Ro(this,b,No,Po,ko,{})}}export{Fo as default,Co as metadata};
