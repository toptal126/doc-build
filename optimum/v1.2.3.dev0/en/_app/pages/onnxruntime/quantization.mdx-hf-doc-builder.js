import{S as _e,i as fe,s as xe,e as o,k as u,w as x,t as s,M as be,c as a,d as n,m as p,a as r,x as b,h as m,b as c,G as t,g as E,y as z,L as ze,q as v,o as T,B as y,v as ve}from"../../chunks/vendor-hf-doc-builder.js";import{D as V}from"../../chunks/Docstring-hf-doc-builder.js";import{I as ge}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Te(Zt){let g,rt,_,O,B,N,zt,J,vt,it,h,Tt,j,yt,Ot,D,$t,qt,st,f,$,K,k,Rt,Y,Qt,mt,i,L,wt,Z,Pt,Et,G,C,Nt,q,I,Dt,F,kt,tt,Lt,Ct,It,R,U,Ft,et,Ut,At,Q,A,Wt,W,Xt,nt,Ht,St,Vt,w,X,Gt,H,Mt,ot,Bt,Jt,jt,P,S,Kt,at,Yt,ct;return N=new ge({}),k=new ge({}),L=new V({props:{name:"class optimum.onnxruntime.ORTQuantizer",anchor:"optimum.onnxruntime.ORTQuantizer",parameters:[{name:"preprocessor",val:": typing.Union[transformers.models.auto.tokenization_auto.AutoTokenizer, transformers.models.auto.feature_extraction_auto.AutoFeatureExtractor]"},{name:"model",val:": PreTrainedModel"},{name:"feature",val:": str = 'default'"},{name:"opset",val:": typing.Optional[int] = None"}],source:"https://github.com/huggingface/optimum/blob/v1.2.3.dev0/src/optimum/onnxruntime/quantization.py#L79"}}),C=new V({props:{name:"compute_ranges",anchor:"optimum.onnxruntime.ORTQuantizer.compute_ranges",parameters:[],source:"https://github.com/huggingface/optimum/blob/v1.2.3.dev0/src/optimum/onnxruntime/quantization.py#L262",returnDescription:`
<p>The dictionary mapping the nodes name to their quantization ranges.</p>
`}}),I=new V({props:{name:"export",anchor:"optimum.onnxruntime.ORTQuantizer.export",parameters:[{name:"onnx_model_path",val:": typing.Union[str, os.PathLike]"},{name:"onnx_quantized_model_output_path",val:": typing.Union[str, os.PathLike]"},{name:"quantization_config",val:": QuantizationConfig"},{name:"calibration_tensors_range",val:": typing.Union[typing.Dict[str, typing.Tuple[float, float]], NoneType] = None"},{name:"use_external_data_format",val:": bool = False"},{name:"preprocessor",val:": typing.Optional[optimum.onnxruntime.preprocessors.quantization.QuantizationPreprocessor] = None"}],parametersDescription:[{anchor:"optimum.onnxruntime.ORTQuantizer.export.onnx_model_path",description:`<strong>onnx_model_path</strong> (<code>Union[str, os.PathLike]</code>) &#x2014;
The path used to save the model exported to an ONNX Intermediate Representation (IR).`,name:"onnx_model_path"},{anchor:"optimum.onnxruntime.ORTQuantizer.export.onnx_quantized_model_output_path",description:`<strong>onnx_quantized_model_output_path</strong> (<code>Union[str, os.PathLike]</code>) &#x2014;
The path used to save the quantized model exported to an ONNX Intermediate Representation (IR).`,name:"onnx_quantized_model_output_path"},{anchor:"optimum.onnxruntime.ORTQuantizer.export.quantization_config",description:`<strong>quantization_config</strong> (<code>QuantizationConfig</code>) &#x2014;
The configuration containing the parameters related to quantization.`,name:"quantization_config"},{anchor:"optimum.onnxruntime.ORTQuantizer.export.calibration_tensors_range",description:`<strong>calibration_tensors_range</strong> (<code>Dict[NodeName, Tuple[float, float]]</code>, <em>optional</em>) &#x2014;
The dictionary mapping the nodes name to their quantization ranges, used and required only when applying
static quantization.`,name:"calibration_tensors_range"},{anchor:"optimum.onnxruntime.ORTQuantizer.export.use_external_data_format",description:`<strong>use_external_data_format</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to use external data format to store model which size is &gt;= 2Gb.`,name:"use_external_data_format"},{anchor:"optimum.onnxruntime.ORTQuantizer.export.preprocessor",description:`<strong>preprocessor</strong> (<code>QuantizationPreprocessor</code>, <em>optional</em>) &#x2014;
The preprocessor to use to collect the nodes to include or exclude from quantization.`,name:"preprocessor"}],source:"https://github.com/huggingface/optimum/blob/v1.2.3.dev0/src/optimum/onnxruntime/quantization.py#L275",returnDescription:`
<p>The path of the resulting quantized model.</p>
`}}),U=new V({props:{name:"fit",anchor:"optimum.onnxruntime.ORTQuantizer.fit",parameters:[{name:"dataset",val:": Dataset"},{name:"calibration_config",val:": CalibrationConfig"},{name:"onnx_model_path",val:": typing.Union[str, os.PathLike, pathlib.Path]"},{name:"onnx_augmented_model_name",val:": str = 'augmented_model.onnx'"},{name:"operators_to_quantize",val:": typing.Optional[typing.List[str]] = None"},{name:"batch_size",val:": int = 1"},{name:"use_external_data_format",val:": bool = False"},{name:"use_gpu",val:": bool = False"},{name:"force_symmetric_range",val:": bool = False"}],parametersDescription:[{anchor:"optimum.onnxruntime.ORTQuantizer.fit.dataset",description:`<strong>dataset</strong> (<code>Dataset</code>) &#x2014;
The dataset to use when performing the calibration step.`,name:"dataset"},{anchor:"optimum.onnxruntime.ORTQuantizer.fit.calibration_config",description:`<strong>calibration_config</strong> (<code>CalibrationConfig</code>) &#x2014;
The configuration containing the parameters related to the calibration step.`,name:"calibration_config"},{anchor:"optimum.onnxruntime.ORTQuantizer.fit.onnx_model_path",description:`<strong>onnx_model_path</strong> (<code>Union[str, os.PathLike]</code>) &#x2014;
The path used to save the model exported to an ONNX Intermediate Representation (IR).`,name:"onnx_model_path"},{anchor:"optimum.onnxruntime.ORTQuantizer.fit.onnx_augmented_model_name",description:`<strong>onnx_augmented_model_name</strong> (<code>Union[str, os.PathLike]</code>) &#x2014;
The path used to save the augmented model used to collect the quantization ranges.`,name:"onnx_augmented_model_name"},{anchor:"optimum.onnxruntime.ORTQuantizer.fit.operators_to_quantize",description:`<strong>operators_to_quantize</strong> (<code>list</code>, <em>optional</em>) &#x2014;
List of the operators types to quantize.`,name:"operators_to_quantize"},{anchor:"optimum.onnxruntime.ORTQuantizer.fit.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, defaults to 1) &#x2014;
The batch size to use when collecting the quantization ranges values.`,name:"batch_size"},{anchor:"optimum.onnxruntime.ORTQuantizer.fit.use_external_data_format",description:`<strong>use_external_data_format</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether uto se external data format to store model which size is &gt;= 2Gb.`,name:"use_external_data_format"},{anchor:"optimum.onnxruntime.ORTQuantizer.fit.use_gpu",description:`<strong>use_gpu</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to use the GPU when collecting the quantization ranges values.`,name:"use_gpu"},{anchor:"optimum.onnxruntime.ORTQuantizer.fit.force_symmetric_range",description:`<strong>force_symmetric_range</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to make the quantization ranges symmetric.`,name:"force_symmetric_range"}],source:"https://github.com/huggingface/optimum/blob/v1.2.3.dev0/src/optimum/onnxruntime/quantization.py#L139",returnDescription:`
<p>The dictionary mapping the nodes name to their quantization ranges.</p>
`}}),A=new V({props:{name:"from_pretrained",anchor:"optimum.onnxruntime.ORTQuantizer.from_pretrained",parameters:[{name:"model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"feature",val:": str"},{name:"opset",val:": typing.Optional[int] = None"}],parametersDescription:[{anchor:"optimum.onnxruntime.ORTQuantizer.from_pretrained.model_name_or_path",description:`<strong>model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>) &#x2014;
Repository name in the Hugging Face Hub or path to a local directory hosting the model.`,name:"model_name_or_path"},{anchor:"optimum.onnxruntime.ORTQuantizer.from_pretrained.feature",description:`<strong>feature</strong> (<code>str</code>) &#x2014;
Feature to use when exporting the model.`,name:"feature"},{anchor:"optimum.onnxruntime.ORTQuantizer.from_pretrained.opset",description:`<strong>opset</strong> (<code>int</code>, <em>optional</em>) &#x2014;
ONNX opset version to export the model with.`,name:"opset"}],source:"https://github.com/huggingface/optimum/blob/v1.2.3.dev0/src/optimum/onnxruntime/quantization.py#L84",returnDescription:`
<p>An instance of <code>ORTQuantizer</code>.</p>
`}}),X=new V({props:{name:"get_calibration_dataset",anchor:"optimum.onnxruntime.ORTQuantizer.get_calibration_dataset",parameters:[{name:"dataset_name",val:": str"},{name:"num_samples",val:": int = 100"},{name:"dataset_config_name",val:": typing.Optional[str] = None"},{name:"dataset_split",val:": typing.Optional[str] = None"},{name:"preprocess_function",val:": typing.Optional[typing.Callable] = None"},{name:"preprocess_batch",val:": bool = True"},{name:"seed",val:": int = 2016"}],parametersDescription:[{anchor:"optimum.onnxruntime.ORTQuantizer.get_calibration_dataset.dataset_name",description:`<strong>dataset_name</strong> (<code>str</code>) &#x2014;
The dataset repository name on the Hugging Face Hub or path to a local directory containing data files
to load to use for the calibration step.`,name:"dataset_name"},{anchor:"optimum.onnxruntime.ORTQuantizer.get_calibration_dataset.num_samples",description:`<strong>num_samples</strong> (<code>int</code>, defaults to 100) &#x2014;
The maximum number of samples composing the calibration dataset.`,name:"num_samples"},{anchor:"optimum.onnxruntime.ORTQuantizer.get_calibration_dataset.dataset_config_name",description:`<strong>dataset_config_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The name of the dataset configuration.`,name:"dataset_config_name"},{anchor:"optimum.onnxruntime.ORTQuantizer.get_calibration_dataset.dataset_split",description:`<strong>dataset_split</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Which split of the dataset to use to perform the calibration step.`,name:"dataset_split"},{anchor:"optimum.onnxruntime.ORTQuantizer.get_calibration_dataset.preprocess_function",description:`<strong>preprocess_function</strong> (<code>Callable</code>, <em>optional</em>) &#x2014;
Processing function to apply to each example after loading dataset.`,name:"preprocess_function"},{anchor:"optimum.onnxruntime.ORTQuantizer.get_calibration_dataset.preprocess_batch",description:`<strong>preprocess_batch</strong> (<code>int</code>, defaults to <code>True</code>) &#x2014;
Whether the <code>preprocess_function</code> should be batched.`,name:"preprocess_batch"},{anchor:"optimum.onnxruntime.ORTQuantizer.get_calibration_dataset.seed",description:`<strong>seed</strong> (<code>int</code>, defaults to 2016) &#x2014;
The random seed to use when shuffling the calibration dataset.`,name:"seed"}],source:"https://github.com/huggingface/optimum/blob/v1.2.3.dev0/src/optimum/onnxruntime/quantization.py#L376",returnDescription:`
<p>The calibration <code>datasets.Dataset</code> to use for the post-training static quantization calibration
step.</p>
`}}),S=new V({props:{name:"partial_fit",anchor:"optimum.onnxruntime.ORTQuantizer.partial_fit",parameters:[{name:"dataset",val:": Dataset"},{name:"calibration_config",val:": CalibrationConfig"},{name:"onnx_model_path",val:": typing.Union[str, os.PathLike]"},{name:"onnx_augmented_model_name",val:": str = 'augmented_model.onnx'"},{name:"operators_to_quantize",val:": typing.Optional[typing.List[str]] = None"},{name:"batch_size",val:": int = 1"},{name:"use_external_data_format",val:": bool = False"},{name:"use_gpu",val:": bool = False"},{name:"force_symmetric_range",val:": bool = False"}],parametersDescription:[{anchor:"optimum.onnxruntime.ORTQuantizer.partial_fit.dataset",description:`<strong>dataset</strong> (<code>Dataset</code>) &#x2014;
The dataset to use when performing the calibration step.`,name:"dataset"},{anchor:"optimum.onnxruntime.ORTQuantizer.partial_fit.calibration_config",description:`<strong>calibration_config</strong> (<code>CalibrationConfig</code>) &#x2014;
The configuration containing the parameters related to the calibration step.`,name:"calibration_config"},{anchor:"optimum.onnxruntime.ORTQuantizer.partial_fit.onnx_model_path",description:`<strong>onnx_model_path</strong> (<code>Union[str, os.PathLike]</code>) &#x2014;
The path used to save the model exported to an ONNX Intermediate Representation (IR).`,name:"onnx_model_path"},{anchor:"optimum.onnxruntime.ORTQuantizer.partial_fit.onnx_augmented_model_name",description:`<strong>onnx_augmented_model_name</strong> (<code>Union[str, os.PathLike]</code>) &#x2014;
The path used to save the augmented model used to collect the quantization ranges.`,name:"onnx_augmented_model_name"},{anchor:"optimum.onnxruntime.ORTQuantizer.partial_fit.operators_to_quantize",description:`<strong>operators_to_quantize</strong> (<code>list</code>, <em>optional</em>) &#x2014;
List of the operators types to quantize.`,name:"operators_to_quantize"},{anchor:"optimum.onnxruntime.ORTQuantizer.partial_fit.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, defaults to 1) &#x2014;
The batch size to use when collecting the quantization ranges values.`,name:"batch_size"},{anchor:"optimum.onnxruntime.ORTQuantizer.partial_fit.use_external_data_format",description:`<strong>use_external_data_format</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether uto se external data format to store model which size is &gt;= 2Gb.`,name:"use_external_data_format"},{anchor:"optimum.onnxruntime.ORTQuantizer.partial_fit.use_gpu",description:`<strong>use_gpu</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to use the GPU when collecting the quantization ranges values.`,name:"use_gpu"},{anchor:"optimum.onnxruntime.ORTQuantizer.partial_fit.force_symmetric_range",description:`<strong>force_symmetric_range</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to make the quantization ranges symmetric.`,name:"force_symmetric_range"}],source:"https://github.com/huggingface/optimum/blob/v1.2.3.dev0/src/optimum/onnxruntime/quantization.py#L197",returnDescription:`
<p>The dictionary mapping the nodes name to their quantization ranges.</p>
`}}),{c(){g=o("meta"),rt=u(),_=o("h1"),O=o("a"),B=o("span"),x(N.$$.fragment),zt=u(),J=o("span"),vt=s("Quantization"),it=u(),h=o("p"),Tt=s("\u{1F917} Optimum provides an "),j=o("code"),yt=s("optimum.onnxruntime"),Ot=s(" package that enables you to apply quantization on many model hosted on the \u{1F917} hub using the "),D=o("a"),$t=s("ONNX Runtime"),qt=s(" quantization tool."),st=u(),f=o("h2"),$=o("a"),K=o("span"),x(k.$$.fragment),Rt=u(),Y=o("span"),Qt=s("ORTQuantizer"),mt=u(),i=o("div"),x(L.$$.fragment),wt=u(),Z=o("p"),Pt=s("Handles the ONNX Runtime quantization process for models shared on huggingface.co/models."),Et=u(),G=o("div"),x(C.$$.fragment),Nt=u(),q=o("div"),x(I.$$.fragment),Dt=u(),F=o("p"),kt=s("Quantize a model given the optimization specifications defined in "),tt=o("code"),Lt=s("quantization_config"),Ct=s("."),It=u(),R=o("div"),x(U.$$.fragment),Ft=u(),et=o("p"),Ut=s("Perform the calibration step and collect the quantization ranges."),At=u(),Q=o("div"),x(A.$$.fragment),Wt=u(),W=o("p"),Xt=s("Instantiate a "),nt=o("code"),Ht=s("ORTQuantizer"),St=s(" from a pretrained pytorch model and preprocessor."),Vt=u(),w=o("div"),x(X.$$.fragment),Gt=u(),H=o("p"),Mt=s("Create the calibration "),ot=o("code"),Bt=s("datasets.Dataset"),Jt=s(" to use for the post-training static quantization calibration step"),jt=u(),P=o("div"),x(S.$$.fragment),Kt=u(),at=o("p"),Yt=s("Perform the calibration step and collect the quantization ranges."),this.h()},l(e){const l=be('[data-svelte="svelte-1phssyn"]',document.head);g=a(l,"META",{name:!0,content:!0}),l.forEach(n),rt=p(e),_=a(e,"H1",{class:!0});var ut=r(_);O=a(ut,"A",{id:!0,class:!0,href:!0});var te=r(O);B=a(te,"SPAN",{});var ee=r(B);b(N.$$.fragment,ee),ee.forEach(n),te.forEach(n),zt=p(ut),J=a(ut,"SPAN",{});var ne=r(J);vt=m(ne,"Quantization"),ne.forEach(n),ut.forEach(n),it=p(e),h=a(e,"P",{});var M=r(h);Tt=m(M,"\u{1F917} Optimum provides an "),j=a(M,"CODE",{});var oe=r(j);yt=m(oe,"optimum.onnxruntime"),oe.forEach(n),Ot=m(M," package that enables you to apply quantization on many model hosted on the \u{1F917} hub using the "),D=a(M,"A",{href:!0,rel:!0});var ae=r(D);$t=m(ae,"ONNX Runtime"),ae.forEach(n),qt=m(M," quantization tool."),M.forEach(n),st=p(e),f=a(e,"H2",{class:!0});var pt=r(f);$=a(pt,"A",{id:!0,class:!0,href:!0});var re=r($);K=a(re,"SPAN",{});var ie=r(K);b(k.$$.fragment,ie),ie.forEach(n),re.forEach(n),Rt=p(pt),Y=a(pt,"SPAN",{});var se=r(Y);Qt=m(se,"ORTQuantizer"),se.forEach(n),pt.forEach(n),mt=p(e),i=a(e,"DIV",{class:!0});var d=r(i);b(L.$$.fragment,d),wt=p(d),Z=a(d,"P",{});var me=r(Z);Pt=m(me,"Handles the ONNX Runtime quantization process for models shared on huggingface.co/models."),me.forEach(n),Et=p(d),G=a(d,"DIV",{class:!0});var ce=r(G);b(C.$$.fragment,ce),ce.forEach(n),Nt=p(d),q=a(d,"DIV",{class:!0});var dt=r(q);b(I.$$.fragment,dt),Dt=p(dt),F=a(dt,"P",{});var lt=r(F);kt=m(lt,"Quantize a model given the optimization specifications defined in "),tt=a(lt,"CODE",{});var ue=r(tt);Lt=m(ue,"quantization_config"),ue.forEach(n),Ct=m(lt,"."),lt.forEach(n),dt.forEach(n),It=p(d),R=a(d,"DIV",{class:!0});var ht=r(R);b(U.$$.fragment,ht),Ft=p(ht),et=a(ht,"P",{});var pe=r(et);Ut=m(pe,"Perform the calibration step and collect the quantization ranges."),pe.forEach(n),ht.forEach(n),At=p(d),Q=a(d,"DIV",{class:!0});var gt=r(Q);b(A.$$.fragment,gt),Wt=p(gt),W=a(gt,"P",{});var _t=r(W);Xt=m(_t,"Instantiate a "),nt=a(_t,"CODE",{});var de=r(nt);Ht=m(de,"ORTQuantizer"),de.forEach(n),St=m(_t," from a pretrained pytorch model and preprocessor."),_t.forEach(n),gt.forEach(n),Vt=p(d),w=a(d,"DIV",{class:!0});var ft=r(w);b(X.$$.fragment,ft),Gt=p(ft),H=a(ft,"P",{});var xt=r(H);Mt=m(xt,"Create the calibration "),ot=a(xt,"CODE",{});var le=r(ot);Bt=m(le,"datasets.Dataset"),le.forEach(n),Jt=m(xt," to use for the post-training static quantization calibration step"),xt.forEach(n),ft.forEach(n),jt=p(d),P=a(d,"DIV",{class:!0});var bt=r(P);b(S.$$.fragment,bt),Kt=p(bt),at=a(bt,"P",{});var he=r(at);Yt=m(he,"Perform the calibration step and collect the quantization ranges."),he.forEach(n),bt.forEach(n),d.forEach(n),this.h()},h(){c(g,"name","hf:doc:metadata"),c(g,"content",JSON.stringify(ye)),c(O,"id","quantization"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#quantization"),c(_,"class","relative group"),c(D,"href","https://github.com/microsoft/onnxruntime/blob/master/onnxruntime/python/tools/quantization/README.md"),c(D,"rel","nofollow"),c($,"id","optimum.onnxruntime.ORTQuantizer"),c($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($,"href","#optimum.onnxruntime.ORTQuantizer"),c(f,"class","relative group"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(i,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,l){t(document.head,g),E(e,rt,l),E(e,_,l),t(_,O),t(O,B),z(N,B,null),t(_,zt),t(_,J),t(J,vt),E(e,it,l),E(e,h,l),t(h,Tt),t(h,j),t(j,yt),t(h,Ot),t(h,D),t(D,$t),t(h,qt),E(e,st,l),E(e,f,l),t(f,$),t($,K),z(k,K,null),t(f,Rt),t(f,Y),t(Y,Qt),E(e,mt,l),E(e,i,l),z(L,i,null),t(i,wt),t(i,Z),t(Z,Pt),t(i,Et),t(i,G),z(C,G,null),t(i,Nt),t(i,q),z(I,q,null),t(q,Dt),t(q,F),t(F,kt),t(F,tt),t(tt,Lt),t(F,Ct),t(i,It),t(i,R),z(U,R,null),t(R,Ft),t(R,et),t(et,Ut),t(i,At),t(i,Q),z(A,Q,null),t(Q,Wt),t(Q,W),t(W,Xt),t(W,nt),t(nt,Ht),t(W,St),t(i,Vt),t(i,w),z(X,w,null),t(w,Gt),t(w,H),t(H,Mt),t(H,ot),t(ot,Bt),t(H,Jt),t(i,jt),t(i,P),z(S,P,null),t(P,Kt),t(P,at),t(at,Yt),ct=!0},p:ze,i(e){ct||(v(N.$$.fragment,e),v(k.$$.fragment,e),v(L.$$.fragment,e),v(C.$$.fragment,e),v(I.$$.fragment,e),v(U.$$.fragment,e),v(A.$$.fragment,e),v(X.$$.fragment,e),v(S.$$.fragment,e),ct=!0)},o(e){T(N.$$.fragment,e),T(k.$$.fragment,e),T(L.$$.fragment,e),T(C.$$.fragment,e),T(I.$$.fragment,e),T(U.$$.fragment,e),T(A.$$.fragment,e),T(X.$$.fragment,e),T(S.$$.fragment,e),ct=!1},d(e){n(g),e&&n(rt),e&&n(_),y(N),e&&n(it),e&&n(h),e&&n(st),e&&n(f),y(k),e&&n(mt),e&&n(i),y(L),y(C),y(I),y(U),y(A),y(X),y(S)}}}const ye={local:"quantization",sections:[{local:"optimum.onnxruntime.ORTQuantizer",title:"ORTQuantizer"}],title:"Quantization"};function Oe(Zt){return ve(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Qe extends _e{constructor(g){super();fe(this,g,Oe,Te,xe,{})}}export{Qe as default,ye as metadata};
