import{S as Do,i as Mo,s as qo,e as n,k as s,w as c,t as f,M as Ao,c as o,d as t,m as i,a,x as h,h as m,b as l,G as r,g as p,y as g,L as Io,q as u,o as v,B as _,v as Lo}from"../../chunks/vendor-hf-doc-builder.js";import{D as b}from"../../chunks/Docstring-hf-doc-builder.js";import{I as Te}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Wo(Wn){let C,br,P,A,ze,oe,it,He,lt,yr,I,ft,Ge,mt,dt,wr,L,pt,Fe,ct,ht,Er,N,W,Ue,ae,gt,Be,ut,kr,Se,vt,Or,O,De,_t,Me,xt,$t,qe,bt,Ae,yt,wt,Ie,Et,Le,kt,Cr,T,X,Re,se,Ot,je,Ct,Pr,$,ie,Pt,Je,Nt,Tt,V,le,Ft,Ke,St,Dt,z,fe,Mt,Qe,qt,At,H,me,It,Ye,Lt,Wt,G,de,Xt,Ze,Vt,Nr,F,U,er,pe,zt,rr,Ht,Tr,k,ce,Gt,B,he,Ut,tr,Bt,Rt,R,ge,jt,ue,Jt,nr,Kt,Qt,Fr,S,j,or,ve,Yt,ar,Zt,Sr,_e,xe,Dr,D,J,sr,$e,en,ir,rn,Mr,K,tn,lr,nn,on,qr,M,Q,fr,be,an,mr,sn,Ar,x,ye,ln,Y,we,fn,dr,mn,dn,w,Ee,pn,pr,cn,hn,cr,gn,un,q,ke,vn,hr,_n,xn,$n,gr,bn,yn,ur,wn,En,Z,Oe,kn,vr,On,Cn,ee,Ce,Pn,_r,Nn,Tn,re,Pe,Fn,xr,Sn,Dn,te,Ne,Mn,$r,qn,Ir;return oe=new Te({}),ae=new Te({}),se=new Te({}),ie=new b({props:{name:"class transformers.onnx.OnnxConfig",anchor:"transformers.onnx.OnnxConfig",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/onnx/config.py#L67"}}),le=new b({props:{name:"flatten_output_collection_property",anchor:"transformers.onnx.OnnxConfig.flatten_output_collection_property",parameters:[{name:"name",val:": str"},{name:"field",val:": typing.Iterable[typing.Any]"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/onnx/config.py#L363",returnDescription:`
<p>Outputs with flattened structure and key mapping this new structure.</p>
`,returnType:`
<p>(Dict[str, Any])</p>
`}}),fe=new b({props:{name:"from_model_config",anchor:"transformers.onnx.OnnxConfig.from_model_config",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/onnx/config.py#L125",returnDescription:`
<p>OnnxConfig for this model</p>
`}}),me=new b({props:{name:"generate_dummy_inputs",anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs",parameters:[{name:"preprocessor",val:": typing.Union[ForwardRef('PreTrainedTokenizerBase'), ForwardRef('FeatureExtractionMixin')]"},{name:"batch_size",val:": int = -1"},{name:"seq_length",val:": int = -1"},{name:"num_choices",val:": int = -1"},{name:"is_pair",val:": bool = False"},{name:"framework",val:": typing.Optional[transformers.utils.generic.TensorType] = None"},{name:"num_channels",val:": int = 3"},{name:"image_width",val:": int = 40"},{name:"image_height",val:": int = 40"},{name:"tokenizer",val:": PreTrainedTokenizerBase = None"}],parametersDescription:[{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The batch size to export the model for (-1 means dynamic axis).`,name:"batch_size"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.num_choices",description:`<strong>num_choices</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The number of candidate answers provided for multiple choice task (-1 means dynamic axis).`,name:"num_choices"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.seq_length",description:`<strong>seq_length</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The sequence length to export the model for (-1 means dynamic axis).`,name:"seq_length"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.is_pair",description:`<strong>is_pair</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Indicate if the input is a pair (sentence 1, sentence 2)`,name:"is_pair"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.framework",description:`<strong>framework</strong> (<code>TensorType</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The framework (PyTorch or TensorFlow) that the tokenizer will generate tensors for.`,name:"framework"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of channels of the generated images.`,name:"num_channels"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.image_width",description:`<strong>image_width</strong> (<code>int</code>, <em>optional</em>, defaults to 40) &#x2014;
The width of the generated images.`,name:"image_width"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.image_height",description:`<strong>image_height</strong> (<code>int</code>, <em>optional</em>, defaults to 40) &#x2014;
The height of the generated images.`,name:"image_height"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/onnx/config.py#L265",returnDescription:`
<p>Mapping[str, Tensor] holding the kwargs to provide to the model\u2019s forward function</p>
`}}),de=new b({props:{name:"use_external_data_format",anchor:"transformers.onnx.OnnxConfig.use_external_data_format",parameters:[{name:"num_parameters",val:": int"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/onnx/config.py#L239",returnDescription:`
<p>True if model.num_parameters() * size_of(float32) >= 2Gb False otherwise</p>
`}}),pe=new Te({}),ce=new b({props:{name:"class transformers.onnx.OnnxConfigWithPast",anchor:"transformers.onnx.OnnxConfigWithPast",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"},{name:"use_past",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/onnx/config.py#L382"}}),he=new b({props:{name:"fill_with_past_key_values_",anchor:"transformers.onnx.OnnxConfigWithPast.fill_with_past_key_values_",parameters:[{name:"inputs_or_outputs",val:": typing.Mapping[str, typing.Mapping[int, str]]"},{name:"direction",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/onnx/config.py#L489"}}),ge=new b({props:{name:"with_past",anchor:"transformers.onnx.OnnxConfigWithPast.with_past",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/onnx/config.py#L393",returnDescription:`
<p>OnnxConfig with <code>.use_past = True</code></p>
`}}),ve=new Te({}),xe=new b({props:{name:"class transformers.onnx.OnnxSeq2SeqConfigWithPast",anchor:"transformers.onnx.OnnxSeq2SeqConfigWithPast",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"},{name:"use_past",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/onnx/config.py#L522"}}),$e=new Te({}),be=new Te({}),ye=new b({props:{name:"class transformers.onnx.FeaturesManager",anchor:"transformers.onnx.FeaturesManager",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/onnx/features.py#L84"}}),we=new b({props:{name:"check_supported_model_or_raise",anchor:"transformers.onnx.FeaturesManager.check_supported_model_or_raise",parameters:[{name:"model",val:": typing.Union[ForwardRef('PreTrainedModel'), ForwardRef('TFPreTrainedModel')]"},{name:"feature",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/onnx/features.py#L676",returnDescription:`
<p>(str) The type of the model (OnnxConfig) The OnnxConfig instance holding the model export properties.</p>
`}}),Ee=new b({props:{name:"determine_framework",anchor:"transformers.onnx.FeaturesManager.determine_framework",parameters:[{name:"model",val:": str"},{name:"framework",val:": str = None"}],parametersDescription:[{anchor:"transformers.onnx.FeaturesManager.determine_framework.model",description:`<strong>model</strong> (<code>str</code>) &#x2014;
The name of the model to export.`,name:"model"},{anchor:"transformers.onnx.FeaturesManager.determine_framework.framework",description:`<strong>framework</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The framework to use for the export. See above for priority if none provided.`,name:"framework"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/onnx/features.py#L593",returnDescription:`
<p>The framework to use for the export.</p>
`}}),Oe=new b({props:{name:"get_config",anchor:"transformers.onnx.FeaturesManager.get_config",parameters:[{name:"model_type",val:": str"},{name:"feature",val:": str"}],parametersDescription:[{anchor:"transformers.onnx.FeaturesManager.get_config.model_type",description:`<strong>model_type</strong> (<code>str</code>) &#x2014;
The model type to retrieve the config for.`,name:"model_type"},{anchor:"transformers.onnx.FeaturesManager.get_config.feature",description:`<strong>feature</strong> (<code>str</code>) &#x2014;
The feature to retrieve the config for.`,name:"feature"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/onnx/features.py#L701",returnDescription:`
<p>config for the combination</p>
`,returnType:`
<p><code>OnnxConfig</code></p>
`}}),Ce=new b({props:{name:"get_model_class_for_feature",anchor:"transformers.onnx.FeaturesManager.get_model_class_for_feature",parameters:[{name:"feature",val:": str"},{name:"framework",val:": str = 'pt'"}],parametersDescription:[{anchor:"transformers.onnx.FeaturesManager.get_model_class_for_feature.feature",description:`<strong>feature</strong> (<code>str</code>) &#x2014;
The feature required.`,name:"feature"},{anchor:"transformers.onnx.FeaturesManager.get_model_class_for_feature.framework",description:`<strong>framework</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pt&quot;</code>) &#x2014;
The framework to use for the export.`,name:"framework"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/onnx/features.py#L566",returnDescription:`
<p>The AutoModel class corresponding to the feature.</p>
`}}),Pe=new b({props:{name:"get_model_from_feature",anchor:"transformers.onnx.FeaturesManager.get_model_from_feature",parameters:[{name:"feature",val:": str"},{name:"model",val:": str"},{name:"framework",val:": str = None"},{name:"cache_dir",val:": str = None"}],parametersDescription:[{anchor:"transformers.onnx.FeaturesManager.get_model_from_feature.feature",description:`<strong>feature</strong> (<code>str</code>) &#x2014;
The feature required.`,name:"feature"},{anchor:"transformers.onnx.FeaturesManager.get_model_from_feature.model",description:`<strong>model</strong> (<code>str</code>) &#x2014;
The name of the model to export.`,name:"model"},{anchor:"transformers.onnx.FeaturesManager.get_model_from_feature.framework",description:`<strong>framework</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The framework to use for the export. See <code>FeaturesManager.determine_framework</code> for the priority should
none be provided.`,name:"framework"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/onnx/features.py#L643",returnDescription:`
<p>The instance of the model.</p>
`}}),Ne=new b({props:{name:"get_supported_features_for_model_type",anchor:"transformers.onnx.FeaturesManager.get_supported_features_for_model_type",parameters:[{name:"model_type",val:": str"},{name:"model_name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"transformers.onnx.FeaturesManager.get_supported_features_for_model_type.model_type",description:`<strong>model_type</strong> (<code>str</code>) &#x2014;
The model type to retrieve the supported features for.`,name:"model_type"},{anchor:"transformers.onnx.FeaturesManager.get_supported_features_for_model_type.model_name",description:`<strong>model_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The name attribute of the model object, only used for the exception message.`,name:"model_name"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/onnx/features.py#L521",returnDescription:`
<p>The dictionary mapping each feature to a corresponding OnnxConfig constructor.</p>
`}}),{c(){C=n("meta"),br=s(),P=n("h1"),A=n("a"),ze=n("span"),c(oe.$$.fragment),it=s(),He=n("span"),lt=f("Exporting \u{1F917} Transformers models to ONNX"),yr=s(),I=n("p"),ft=f("\u{1F917} Transformers provides a "),Ge=n("code"),mt=f("transformers.onnx"),dt=f(` package that enables you to
convert model checkpoints to an ONNX graph by leveraging configuration objects.`),wr=s(),L=n("p"),pt=f("See the "),Fe=n("a"),ct=f("guide"),ht=f(` on exporting \u{1F917} Transformers models for more
details.`),Er=s(),N=n("h2"),W=n("a"),Ue=n("span"),c(ae.$$.fragment),gt=s(),Be=n("span"),ut=f("ONNX Configurations"),kr=s(),Se=n("p"),vt=f(`We provide three abstract classes that you should inherit from, depending on the
type of model architecture you wish to export:`),Or=s(),O=n("ul"),De=n("li"),_t=f("Encoder-based models inherit from "),Me=n("a"),xt=f("OnnxConfig"),$t=s(),qe=n("li"),bt=f("Decoder-based models inherit from "),Ae=n("a"),yt=f("OnnxConfigWithPast"),wt=s(),Ie=n("li"),Et=f("Encoder-decoder models inherit from "),Le=n("a"),kt=f("OnnxSeq2SeqConfigWithPast"),Cr=s(),T=n("h3"),X=n("a"),Re=n("span"),c(se.$$.fragment),Ot=s(),je=n("span"),Ct=f("OnnxConfig"),Pr=s(),$=n("div"),c(ie.$$.fragment),Pt=s(),Je=n("p"),Nt=f("Base class for ONNX exportable model describing metadata on how to export the model through the ONNX format."),Tt=s(),V=n("div"),c(le.$$.fragment),Ft=s(),Ke=n("p"),St=f(`Flatten any potential nested structure expanding the name of the field with the index of the element within the
structure.`),Dt=s(),z=n("div"),c(fe.$$.fragment),Mt=s(),Qe=n("p"),qt=f("Instantiate a OnnxConfig for a specific model"),At=s(),H=n("div"),c(me.$$.fragment),It=s(),Ye=n("p"),Lt=f("Generate inputs to provide to the ONNX exporter for the specific framework"),Wt=s(),G=n("div"),c(de.$$.fragment),Xt=s(),Ze=n("p"),Vt=f("Flag indicating if the model requires using external data format"),Nr=s(),F=n("h3"),U=n("a"),er=n("span"),c(pe.$$.fragment),zt=s(),rr=n("span"),Ht=f("OnnxConfigWithPast"),Tr=s(),k=n("div"),c(ce.$$.fragment),Gt=s(),B=n("div"),c(he.$$.fragment),Ut=s(),tr=n("p"),Bt=f("Fill the input_or_outputs mapping with past_key_values dynamic axes considering."),Rt=s(),R=n("div"),c(ge.$$.fragment),jt=s(),ue=n("p"),Jt=f("Instantiate a OnnxConfig with "),nr=n("code"),Kt=f("use_past"),Qt=f(" attribute set to True"),Fr=s(),S=n("h3"),j=n("a"),or=n("span"),c(ve.$$.fragment),Yt=s(),ar=n("span"),Zt=f("OnnxSeq2SeqConfigWithPast"),Sr=s(),_e=n("div"),c(xe.$$.fragment),Dr=s(),D=n("h2"),J=n("a"),sr=n("span"),c($e.$$.fragment),en=s(),ir=n("span"),rn=f("ONNX Features"),Mr=s(),K=n("p"),tn=f("Each ONNX configuration is associated with a set of "),lr=n("em"),nn=f("features"),on=f(` that enable you
to export models for different types of topologies or tasks.`),qr=s(),M=n("h3"),Q=n("a"),fr=n("span"),c(be.$$.fragment),an=s(),mr=n("span"),sn=f("FeaturesManager"),Ar=s(),x=n("div"),c(ye.$$.fragment),ln=s(),Y=n("div"),c(we.$$.fragment),fn=s(),dr=n("p"),mn=f("Check whether or not the model has the requested features."),dn=s(),w=n("div"),c(Ee.$$.fragment),pn=s(),pr=n("p"),cn=f("Determines the framework to use for the export."),hn=s(),cr=n("p"),gn=f("The priority is in the following order:"),un=s(),q=n("ol"),ke=n("li"),vn=f("User input via "),hr=n("code"),_n=f("framework"),xn=f("."),$n=s(),gr=n("li"),bn=f("If local checkpoint is provided, use the same framework as the checkpoint."),yn=s(),ur=n("li"),wn=f("Available framework in environment, with priority given to PyTorch"),En=s(),Z=n("div"),c(Oe.$$.fragment),kn=s(),vr=n("p"),On=f("Gets the OnnxConfig for a model_type and feature combination."),Cn=s(),ee=n("div"),c(Ce.$$.fragment),Pn=s(),_r=n("p"),Nn=f("Attempts to retrieve an AutoModel class from a feature name."),Tn=s(),re=n("div"),c(Pe.$$.fragment),Fn=s(),xr=n("p"),Sn=f("Attempts to retrieve a model from a model\u2019s name and the feature to be enabled."),Dn=s(),te=n("div"),c(Ne.$$.fragment),Mn=s(),$r=n("p"),qn=f("Tries to retrieve the feature -> OnnxConfig constructor map from the model type."),this.h()},l(e){const d=Ao('[data-svelte="svelte-1phssyn"]',document.head);C=o(d,"META",{name:!0,content:!0}),d.forEach(t),br=i(e),P=o(e,"H1",{class:!0});var Lr=a(P);A=o(Lr,"A",{id:!0,class:!0,href:!0});var Xn=a(A);ze=o(Xn,"SPAN",{});var Vn=a(ze);h(oe.$$.fragment,Vn),Vn.forEach(t),Xn.forEach(t),it=i(Lr),He=o(Lr,"SPAN",{});var zn=a(He);lt=m(zn,"Exporting \u{1F917} Transformers models to ONNX"),zn.forEach(t),Lr.forEach(t),yr=i(e),I=o(e,"P",{});var Wr=a(I);ft=m(Wr,"\u{1F917} Transformers provides a "),Ge=o(Wr,"CODE",{});var Hn=a(Ge);mt=m(Hn,"transformers.onnx"),Hn.forEach(t),dt=m(Wr,` package that enables you to
convert model checkpoints to an ONNX graph by leveraging configuration objects.`),Wr.forEach(t),wr=i(e),L=o(e,"P",{});var Xr=a(L);pt=m(Xr,"See the "),Fe=o(Xr,"A",{href:!0});var Gn=a(Fe);ct=m(Gn,"guide"),Gn.forEach(t),ht=m(Xr,` on exporting \u{1F917} Transformers models for more
details.`),Xr.forEach(t),Er=i(e),N=o(e,"H2",{class:!0});var Vr=a(N);W=o(Vr,"A",{id:!0,class:!0,href:!0});var Un=a(W);Ue=o(Un,"SPAN",{});var Bn=a(Ue);h(ae.$$.fragment,Bn),Bn.forEach(t),Un.forEach(t),gt=i(Vr),Be=o(Vr,"SPAN",{});var Rn=a(Be);ut=m(Rn,"ONNX Configurations"),Rn.forEach(t),Vr.forEach(t),kr=i(e),Se=o(e,"P",{});var jn=a(Se);vt=m(jn,`We provide three abstract classes that you should inherit from, depending on the
type of model architecture you wish to export:`),jn.forEach(t),Or=i(e),O=o(e,"UL",{});var We=a(O);De=o(We,"LI",{});var An=a(De);_t=m(An,"Encoder-based models inherit from "),Me=o(An,"A",{href:!0});var Jn=a(Me);xt=m(Jn,"OnnxConfig"),Jn.forEach(t),An.forEach(t),$t=i(We),qe=o(We,"LI",{});var In=a(qe);bt=m(In,"Decoder-based models inherit from "),Ae=o(In,"A",{href:!0});var Kn=a(Ae);yt=m(Kn,"OnnxConfigWithPast"),Kn.forEach(t),In.forEach(t),wt=i(We),Ie=o(We,"LI",{});var Ln=a(Ie);Et=m(Ln,"Encoder-decoder models inherit from "),Le=o(Ln,"A",{href:!0});var Qn=a(Le);kt=m(Qn,"OnnxSeq2SeqConfigWithPast"),Qn.forEach(t),Ln.forEach(t),We.forEach(t),Cr=i(e),T=o(e,"H3",{class:!0});var zr=a(T);X=o(zr,"A",{id:!0,class:!0,href:!0});var Yn=a(X);Re=o(Yn,"SPAN",{});var Zn=a(Re);h(se.$$.fragment,Zn),Zn.forEach(t),Yn.forEach(t),Ot=i(zr),je=o(zr,"SPAN",{});var eo=a(je);Ct=m(eo,"OnnxConfig"),eo.forEach(t),zr.forEach(t),Pr=i(e),$=o(e,"DIV",{class:!0});var E=a($);h(ie.$$.fragment,E),Pt=i(E),Je=o(E,"P",{});var ro=a(Je);Nt=m(ro,"Base class for ONNX exportable model describing metadata on how to export the model through the ONNX format."),ro.forEach(t),Tt=i(E),V=o(E,"DIV",{class:!0});var Hr=a(V);h(le.$$.fragment,Hr),Ft=i(Hr),Ke=o(Hr,"P",{});var to=a(Ke);St=m(to,`Flatten any potential nested structure expanding the name of the field with the index of the element within the
structure.`),to.forEach(t),Hr.forEach(t),Dt=i(E),z=o(E,"DIV",{class:!0});var Gr=a(z);h(fe.$$.fragment,Gr),Mt=i(Gr),Qe=o(Gr,"P",{});var no=a(Qe);qt=m(no,"Instantiate a OnnxConfig for a specific model"),no.forEach(t),Gr.forEach(t),At=i(E),H=o(E,"DIV",{class:!0});var Ur=a(H);h(me.$$.fragment,Ur),It=i(Ur),Ye=o(Ur,"P",{});var oo=a(Ye);Lt=m(oo,"Generate inputs to provide to the ONNX exporter for the specific framework"),oo.forEach(t),Ur.forEach(t),Wt=i(E),G=o(E,"DIV",{class:!0});var Br=a(G);h(de.$$.fragment,Br),Xt=i(Br),Ze=o(Br,"P",{});var ao=a(Ze);Vt=m(ao,"Flag indicating if the model requires using external data format"),ao.forEach(t),Br.forEach(t),E.forEach(t),Nr=i(e),F=o(e,"H3",{class:!0});var Rr=a(F);U=o(Rr,"A",{id:!0,class:!0,href:!0});var so=a(U);er=o(so,"SPAN",{});var io=a(er);h(pe.$$.fragment,io),io.forEach(t),so.forEach(t),zt=i(Rr),rr=o(Rr,"SPAN",{});var lo=a(rr);Ht=m(lo,"OnnxConfigWithPast"),lo.forEach(t),Rr.forEach(t),Tr=i(e),k=o(e,"DIV",{class:!0});var Xe=a(k);h(ce.$$.fragment,Xe),Gt=i(Xe),B=o(Xe,"DIV",{class:!0});var jr=a(B);h(he.$$.fragment,jr),Ut=i(jr),tr=o(jr,"P",{});var fo=a(tr);Bt=m(fo,"Fill the input_or_outputs mapping with past_key_values dynamic axes considering."),fo.forEach(t),jr.forEach(t),Rt=i(Xe),R=o(Xe,"DIV",{class:!0});var Jr=a(R);h(ge.$$.fragment,Jr),jt=i(Jr),ue=o(Jr,"P",{});var Kr=a(ue);Jt=m(Kr,"Instantiate a OnnxConfig with "),nr=o(Kr,"CODE",{});var mo=a(nr);Kt=m(mo,"use_past"),mo.forEach(t),Qt=m(Kr," attribute set to True"),Kr.forEach(t),Jr.forEach(t),Xe.forEach(t),Fr=i(e),S=o(e,"H3",{class:!0});var Qr=a(S);j=o(Qr,"A",{id:!0,class:!0,href:!0});var po=a(j);or=o(po,"SPAN",{});var co=a(or);h(ve.$$.fragment,co),co.forEach(t),po.forEach(t),Yt=i(Qr),ar=o(Qr,"SPAN",{});var ho=a(ar);Zt=m(ho,"OnnxSeq2SeqConfigWithPast"),ho.forEach(t),Qr.forEach(t),Sr=i(e),_e=o(e,"DIV",{class:!0});var go=a(_e);h(xe.$$.fragment,go),go.forEach(t),Dr=i(e),D=o(e,"H2",{class:!0});var Yr=a(D);J=o(Yr,"A",{id:!0,class:!0,href:!0});var uo=a(J);sr=o(uo,"SPAN",{});var vo=a(sr);h($e.$$.fragment,vo),vo.forEach(t),uo.forEach(t),en=i(Yr),ir=o(Yr,"SPAN",{});var _o=a(ir);rn=m(_o,"ONNX Features"),_o.forEach(t),Yr.forEach(t),Mr=i(e),K=o(e,"P",{});var Zr=a(K);tn=m(Zr,"Each ONNX configuration is associated with a set of "),lr=o(Zr,"EM",{});var xo=a(lr);nn=m(xo,"features"),xo.forEach(t),on=m(Zr,` that enable you
to export models for different types of topologies or tasks.`),Zr.forEach(t),qr=i(e),M=o(e,"H3",{class:!0});var et=a(M);Q=o(et,"A",{id:!0,class:!0,href:!0});var $o=a(Q);fr=o($o,"SPAN",{});var bo=a(fr);h(be.$$.fragment,bo),bo.forEach(t),$o.forEach(t),an=i(et),mr=o(et,"SPAN",{});var yo=a(mr);sn=m(yo,"FeaturesManager"),yo.forEach(t),et.forEach(t),Ar=i(e),x=o(e,"DIV",{class:!0});var y=a(x);h(ye.$$.fragment,y),ln=i(y),Y=o(y,"DIV",{class:!0});var rt=a(Y);h(we.$$.fragment,rt),fn=i(rt),dr=o(rt,"P",{});var wo=a(dr);mn=m(wo,"Check whether or not the model has the requested features."),wo.forEach(t),rt.forEach(t),dn=i(y),w=o(y,"DIV",{class:!0});var ne=a(w);h(Ee.$$.fragment,ne),pn=i(ne),pr=o(ne,"P",{});var Eo=a(pr);cn=m(Eo,"Determines the framework to use for the export."),Eo.forEach(t),hn=i(ne),cr=o(ne,"P",{});var ko=a(cr);gn=m(ko,"The priority is in the following order:"),ko.forEach(t),un=i(ne),q=o(ne,"OL",{});var Ve=a(q);ke=o(Ve,"LI",{});var tt=a(ke);vn=m(tt,"User input via "),hr=o(tt,"CODE",{});var Oo=a(hr);_n=m(Oo,"framework"),Oo.forEach(t),xn=m(tt,"."),tt.forEach(t),$n=i(Ve),gr=o(Ve,"LI",{});var Co=a(gr);bn=m(Co,"If local checkpoint is provided, use the same framework as the checkpoint."),Co.forEach(t),yn=i(Ve),ur=o(Ve,"LI",{});var Po=a(ur);wn=m(Po,"Available framework in environment, with priority given to PyTorch"),Po.forEach(t),Ve.forEach(t),ne.forEach(t),En=i(y),Z=o(y,"DIV",{class:!0});var nt=a(Z);h(Oe.$$.fragment,nt),kn=i(nt),vr=o(nt,"P",{});var No=a(vr);On=m(No,"Gets the OnnxConfig for a model_type and feature combination."),No.forEach(t),nt.forEach(t),Cn=i(y),ee=o(y,"DIV",{class:!0});var ot=a(ee);h(Ce.$$.fragment,ot),Pn=i(ot),_r=o(ot,"P",{});var To=a(_r);Nn=m(To,"Attempts to retrieve an AutoModel class from a feature name."),To.forEach(t),ot.forEach(t),Tn=i(y),re=o(y,"DIV",{class:!0});var at=a(re);h(Pe.$$.fragment,at),Fn=i(at),xr=o(at,"P",{});var Fo=a(xr);Sn=m(Fo,"Attempts to retrieve a model from a model\u2019s name and the feature to be enabled."),Fo.forEach(t),at.forEach(t),Dn=i(y),te=o(y,"DIV",{class:!0});var st=a(te);h(Ne.$$.fragment,st),Mn=i(st),$r=o(st,"P",{});var So=a($r);qn=m(So,"Tries to retrieve the feature -> OnnxConfig constructor map from the model type."),So.forEach(t),st.forEach(t),y.forEach(t),this.h()},h(){l(C,"name","hf:doc:metadata"),l(C,"content",JSON.stringify(Xo)),l(A,"id","exporting-transformers-models-to-onnx"),l(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(A,"href","#exporting-transformers-models-to-onnx"),l(P,"class","relative group"),l(Fe,"href","../serialization"),l(W,"id","onnx-configurations"),l(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(W,"href","#onnx-configurations"),l(N,"class","relative group"),l(Me,"href","/docs/transformers/v4.23.0/en/main_classes/onnx#transformers.onnx.OnnxConfig"),l(Ae,"href","/docs/transformers/v4.23.0/en/main_classes/onnx#transformers.onnx.OnnxConfigWithPast"),l(Le,"href","/docs/transformers/v4.23.0/en/main_classes/onnx#transformers.onnx.OnnxSeq2SeqConfigWithPast"),l(X,"id","transformers.onnx.OnnxConfig"),l(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(X,"href","#transformers.onnx.OnnxConfig"),l(T,"class","relative group"),l(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(U,"id","transformers.onnx.OnnxConfigWithPast"),l(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(U,"href","#transformers.onnx.OnnxConfigWithPast"),l(F,"class","relative group"),l(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(j,"id","transformers.onnx.OnnxSeq2SeqConfigWithPast"),l(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(j,"href","#transformers.onnx.OnnxSeq2SeqConfigWithPast"),l(S,"class","relative group"),l(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(J,"id","onnx-features"),l(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(J,"href","#onnx-features"),l(D,"class","relative group"),l(Q,"id","transformers.onnx.FeaturesManager"),l(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Q,"href","#transformers.onnx.FeaturesManager"),l(M,"class","relative group"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,d){r(document.head,C),p(e,br,d),p(e,P,d),r(P,A),r(A,ze),g(oe,ze,null),r(P,it),r(P,He),r(He,lt),p(e,yr,d),p(e,I,d),r(I,ft),r(I,Ge),r(Ge,mt),r(I,dt),p(e,wr,d),p(e,L,d),r(L,pt),r(L,Fe),r(Fe,ct),r(L,ht),p(e,Er,d),p(e,N,d),r(N,W),r(W,Ue),g(ae,Ue,null),r(N,gt),r(N,Be),r(Be,ut),p(e,kr,d),p(e,Se,d),r(Se,vt),p(e,Or,d),p(e,O,d),r(O,De),r(De,_t),r(De,Me),r(Me,xt),r(O,$t),r(O,qe),r(qe,bt),r(qe,Ae),r(Ae,yt),r(O,wt),r(O,Ie),r(Ie,Et),r(Ie,Le),r(Le,kt),p(e,Cr,d),p(e,T,d),r(T,X),r(X,Re),g(se,Re,null),r(T,Ot),r(T,je),r(je,Ct),p(e,Pr,d),p(e,$,d),g(ie,$,null),r($,Pt),r($,Je),r(Je,Nt),r($,Tt),r($,V),g(le,V,null),r(V,Ft),r(V,Ke),r(Ke,St),r($,Dt),r($,z),g(fe,z,null),r(z,Mt),r(z,Qe),r(Qe,qt),r($,At),r($,H),g(me,H,null),r(H,It),r(H,Ye),r(Ye,Lt),r($,Wt),r($,G),g(de,G,null),r(G,Xt),r(G,Ze),r(Ze,Vt),p(e,Nr,d),p(e,F,d),r(F,U),r(U,er),g(pe,er,null),r(F,zt),r(F,rr),r(rr,Ht),p(e,Tr,d),p(e,k,d),g(ce,k,null),r(k,Gt),r(k,B),g(he,B,null),r(B,Ut),r(B,tr),r(tr,Bt),r(k,Rt),r(k,R),g(ge,R,null),r(R,jt),r(R,ue),r(ue,Jt),r(ue,nr),r(nr,Kt),r(ue,Qt),p(e,Fr,d),p(e,S,d),r(S,j),r(j,or),g(ve,or,null),r(S,Yt),r(S,ar),r(ar,Zt),p(e,Sr,d),p(e,_e,d),g(xe,_e,null),p(e,Dr,d),p(e,D,d),r(D,J),r(J,sr),g($e,sr,null),r(D,en),r(D,ir),r(ir,rn),p(e,Mr,d),p(e,K,d),r(K,tn),r(K,lr),r(lr,nn),r(K,on),p(e,qr,d),p(e,M,d),r(M,Q),r(Q,fr),g(be,fr,null),r(M,an),r(M,mr),r(mr,sn),p(e,Ar,d),p(e,x,d),g(ye,x,null),r(x,ln),r(x,Y),g(we,Y,null),r(Y,fn),r(Y,dr),r(dr,mn),r(x,dn),r(x,w),g(Ee,w,null),r(w,pn),r(w,pr),r(pr,cn),r(w,hn),r(w,cr),r(cr,gn),r(w,un),r(w,q),r(q,ke),r(ke,vn),r(ke,hr),r(hr,_n),r(ke,xn),r(q,$n),r(q,gr),r(gr,bn),r(q,yn),r(q,ur),r(ur,wn),r(x,En),r(x,Z),g(Oe,Z,null),r(Z,kn),r(Z,vr),r(vr,On),r(x,Cn),r(x,ee),g(Ce,ee,null),r(ee,Pn),r(ee,_r),r(_r,Nn),r(x,Tn),r(x,re),g(Pe,re,null),r(re,Fn),r(re,xr),r(xr,Sn),r(x,Dn),r(x,te),g(Ne,te,null),r(te,Mn),r(te,$r),r($r,qn),Ir=!0},p:Io,i(e){Ir||(u(oe.$$.fragment,e),u(ae.$$.fragment,e),u(se.$$.fragment,e),u(ie.$$.fragment,e),u(le.$$.fragment,e),u(fe.$$.fragment,e),u(me.$$.fragment,e),u(de.$$.fragment,e),u(pe.$$.fragment,e),u(ce.$$.fragment,e),u(he.$$.fragment,e),u(ge.$$.fragment,e),u(ve.$$.fragment,e),u(xe.$$.fragment,e),u($e.$$.fragment,e),u(be.$$.fragment,e),u(ye.$$.fragment,e),u(we.$$.fragment,e),u(Ee.$$.fragment,e),u(Oe.$$.fragment,e),u(Ce.$$.fragment,e),u(Pe.$$.fragment,e),u(Ne.$$.fragment,e),Ir=!0)},o(e){v(oe.$$.fragment,e),v(ae.$$.fragment,e),v(se.$$.fragment,e),v(ie.$$.fragment,e),v(le.$$.fragment,e),v(fe.$$.fragment,e),v(me.$$.fragment,e),v(de.$$.fragment,e),v(pe.$$.fragment,e),v(ce.$$.fragment,e),v(he.$$.fragment,e),v(ge.$$.fragment,e),v(ve.$$.fragment,e),v(xe.$$.fragment,e),v($e.$$.fragment,e),v(be.$$.fragment,e),v(ye.$$.fragment,e),v(we.$$.fragment,e),v(Ee.$$.fragment,e),v(Oe.$$.fragment,e),v(Ce.$$.fragment,e),v(Pe.$$.fragment,e),v(Ne.$$.fragment,e),Ir=!1},d(e){t(C),e&&t(br),e&&t(P),_(oe),e&&t(yr),e&&t(I),e&&t(wr),e&&t(L),e&&t(Er),e&&t(N),_(ae),e&&t(kr),e&&t(Se),e&&t(Or),e&&t(O),e&&t(Cr),e&&t(T),_(se),e&&t(Pr),e&&t($),_(ie),_(le),_(fe),_(me),_(de),e&&t(Nr),e&&t(F),_(pe),e&&t(Tr),e&&t(k),_(ce),_(he),_(ge),e&&t(Fr),e&&t(S),_(ve),e&&t(Sr),e&&t(_e),_(xe),e&&t(Dr),e&&t(D),_($e),e&&t(Mr),e&&t(K),e&&t(qr),e&&t(M),_(be),e&&t(Ar),e&&t(x),_(ye),_(we),_(Ee),_(Oe),_(Ce),_(Pe),_(Ne)}}}const Xo={local:"exporting-transformers-models-to-onnx",sections:[{local:"onnx-configurations",sections:[{local:"transformers.onnx.OnnxConfig",title:"OnnxConfig"},{local:"transformers.onnx.OnnxConfigWithPast",title:"OnnxConfigWithPast"},{local:"transformers.onnx.OnnxSeq2SeqConfigWithPast",title:"OnnxSeq2SeqConfigWithPast"}],title:"ONNX Configurations"},{local:"onnx-features",sections:[{local:"transformers.onnx.FeaturesManager",title:"FeaturesManager"}],title:"ONNX Features"}],title:"Exporting \u{1F917} Transformers models to ONNX"};function Vo(Wn){return Lo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Uo extends Do{constructor(C){super();Mo(this,C,Vo,Wo,qo,{})}}export{Uo as default,Xo as metadata};
