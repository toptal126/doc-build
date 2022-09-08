import{S as en,i as tn,s as an,e as n,k as o,w as d,t as l,M as nn,c as r,d as a,m as i,a as s,x as u,h as m,b as p,G as t,g,y as h,L as rn,q as _,o as f,B as v,v as sn}from"../chunks/vendor-hf-doc-builder.js";import{D as y}from"../chunks/Docstring-hf-doc-builder.js";import{I as vt}from"../chunks/IconCopyLink-hf-doc-builder.js";function on(ka){let T,He,E,I,ye,Q,bt,xe,$t,We,z,S,ke,J,yt,De,xt,Qe,b,j,kt,D,K,Dt,we,wt,Pt,Pe,Ct,Tt,w,X,Et,Ce,zt,Nt,Te,Rt,Lt,V,Y,At,Ee,qt,Ot,M,Z,It,ee,St,he,Vt,Mt,Ut,U,te,Bt,ae,Ft,_e,Gt,Ht,Je,N,B,ze,ne,Wt,Ne,Qt,je,R,re,Jt,Re,jt,Ke,L,se,Kt,Le,Xt,Xe,A,oe,Yt,Ae,Zt,Ye,q,ie,ea,qe,ta,Ze,O,F,Oe,pe,aa,Ie,na,et,$,le,ra,P,me,sa,Se,oa,ia,Ve,pa,la,C,ce,ma,Me,ca,da,Ue,ua,ga,G,de,ha,Be,_a,fa,H,ue,va,Fe,ba,$a,W,ge,ya,Ge,xa,tt;return Q=new vt({}),J=new vt({}),j=new y({props:{name:"class optimum.runs_base.Run",anchor:"optimum.runs_base.Run",parameters:[{name:"run_config",val:": dict"}],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/runs_base.py#L51"}}),K=new y({props:{name:"__init__",anchor:"optimum.runs_base.Run.__init__",parameters:[{name:"run_config",val:": dict"}],parametersDescription:[{anchor:"optimum.runs_base.Run.__init__.run_config",description:'<strong>run_config</strong> (dict) &#x2014; Parameters to use for the run. See <a href="/docs/optimum/v1.4.0/en/benchmark#optimum.utils.runs.RunConfig">RunConfig</a> for the expected keys.',name:"run_config"}],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/runs_base.py#L52"}}),X=new y({props:{name:"launch",anchor:"optimum.runs_base.Run.launch",parameters:[],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/runs_base.py#L112",returnDescription:`
<p>Finalized run data with metrics stored in the \u201Cevaluation\u201D key.</p>
`,returnType:`
<p><code>dict</code></p>
`}}),Y=new y({props:{name:"load_datasets",anchor:"optimum.runs_base.Run.load_datasets",parameters:[],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/runs_base.py#L147"}}),Z=new y({props:{name:"get_calibration_dataset",anchor:"optimum.runs_base.Run.get_calibration_dataset",parameters:[],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/runs_base.py#L155",returnDescription:`
<p>Calibration dataset.</p>
`,returnType:`
<p><code>datasets.Dataset</code></p>
`}}),te=new y({props:{name:"get_eval_dataset",anchor:"optimum.runs_base.Run.get_eval_dataset",parameters:[],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/runs_base.py#L165",returnDescription:`
<p>Evaluation dataset.</p>
`,returnType:`
<p><code>datasets.Dataset</code></p>
`}}),ne=new vt({}),re=new y({props:{name:"class optimum.utils.runs.RunConfig",anchor:"optimum.utils.runs.RunConfig",parameters:[{name:"metrics",val:": typing.List[str]"},{name:"model_name_or_path",val:": str"},{name:"task",val:": str"},{name:"quantization_approach",val:": QuantizationApproach"},{name:"dataset",val:": DatasetArgs"},{name:"framework",val:": Frameworks"},{name:"framework_args",val:": FrameworkArgs"},{name:"operators_to_quantize",val:": typing.Optional[typing.List[str]] = <factory>"},{name:"node_exclusion",val:": typing.Optional[typing.List[str]] = <factory>"},{name:"per_channel",val:": typing.Optional[bool] = False"},{name:"calibration",val:": typing.Optional[optimum.utils.runs.Calibration] = None"},{name:"task_args",val:": typing.Optional[optimum.utils.runs.TaskArgs] = None"},{name:"aware_training",val:": typing.Optional[bool] = False"},{name:"max_eval_samples",val:": typing.Optional[int] = None"},{name:"time_benchmark_args",val:": typing.Optional[optimum.utils.runs.BenchmarkTimeArgs] = BenchmarkTimeArgs(duration=30, warmup_runs=10)"},{name:"batch_sizes",val:": typing.Optional[typing.List[int]] = <factory>"},{name:"input_lengths",val:": typing.Optional[typing.List[int]] = <factory>"}],parametersDescription:[{anchor:"optimum.utils.runs.RunConfig.metrics",description:"<strong>metrics</strong> (<code>List[str]</code>) &#x2014; List of metrics to evaluate on.",name:"metrics"},{anchor:"optimum.utils.runs.RunConfig.model_name_or_path",description:"<strong>model_name_or_path</strong> (<code>str</code>) &#x2014; Name of the model hosted on the Hub to use for the run.",name:"model_name_or_path"},{anchor:"optimum.utils.runs.RunConfig.task",description:"<strong>task</strong> (<code>str</code>) &#x2014; Task performed by the model.",name:"task"},{anchor:"optimum.utils.runs.RunConfig.quantization_approach",description:"<strong>quantization_approach</strong> (<code>QuantizationApproach</code>) &#x2014; Whether to use dynamic or static quantization.",name:"quantization_approach"},{anchor:"optimum.utils.runs.RunConfig.dataset",description:"<strong>dataset</strong> (<code>DatasetArgs</code>) &#x2014; Dataset to use. Several keys must be set on top of the dataset name.",name:"dataset"},{anchor:"optimum.utils.runs.RunConfig.framework",description:"<strong>framework</strong> (<code>Frameworks</code>) &#x2014; Name of the framework used (e.g. &#x201C;onnxruntime&#x201D;).",name:"framework"},{anchor:"optimum.utils.runs.RunConfig.framework_args",description:"<strong>framework_args</strong> (<code>FrameworkArgs</code>) &#x2014; Framework-specific arguments.",name:"framework_args"},{anchor:"optimum.utils.runs.RunConfig.operators_to_quantize",description:"<strong>operators_to_quantize</strong> (<code>List[str], NoneType]</code>) &#x2014; Operators to quantize, doing no modifications to others (default: <code>[&quot;Add&quot;, &quot;MatMul&quot;]</code>).",name:"operators_to_quantize"},{anchor:"optimum.utils.runs.RunConfig.node_exclusion",description:"<strong>node_exclusion</strong> (<code>List[str], NoneType]</code>) &#x2014; Specific nodes to exclude from being quantized (default: <code>[&apos;layernorm&apos;, &apos;gelu&apos;, &apos;residual&apos;, &apos;gather&apos;, &apos;softmax&apos;]</code>).",name:"node_exclusion"},{anchor:"optimum.utils.runs.RunConfig.per_channel",description:"<strong>per_channel</strong> (<code>Union[bool, NoneType]</code>) &#x2014; Whether to quantize per channel (default: <code>False</code>).",name:"per_channel"},{anchor:"optimum.utils.runs.RunConfig.calibration",description:"<strong>calibration</strong> (<code>Calibration, NoneType]</code>) &#x2014; Calibration parameters, in case static quantization is used.",name:"calibration"},{anchor:"optimum.utils.runs.RunConfig.task_args",description:"<strong>task_args</strong> (<code>TaskArgs, NoneType]</code>) &#x2014; Task-specific arguments (default: <code>None</code>).",name:"task_args"},{anchor:"optimum.utils.runs.RunConfig.aware_training",description:"<strong>aware_training</strong> (<code>Union[bool, NoneType]</code>) &#x2014; Whether the quantization is to be done with Quantization-Aware Training (not supported).",name:"aware_training"},{anchor:"optimum.utils.runs.RunConfig.max_eval_samples",description:"<strong>max_eval_samples</strong> (<code>Union[int, NoneType]</code>) &#x2014; Maximum number of samples to use from the evaluation dataset for evaluation.",name:"max_eval_samples"},{anchor:"optimum.utils.runs.RunConfig.time_benchmark_args",description:"<strong>time_benchmark_args</strong> (<code>BenchmarkTimeArgs, NoneType]</code>) &#x2014; Parameters related to time benchmark.",name:"time_benchmark_args"},{anchor:"optimum.utils.runs.RunConfig.batch_sizes",description:"<strong>batch_sizes</strong> (<code>List[int], NoneType]</code>) &#x2014; Batch sizes to include in the run to measure time metrics.",name:"batch_sizes"},{anchor:"optimum.utils.runs.RunConfig.input_lengths",description:"<strong>input_lengths</strong> (<code>List[int], NoneType]</code>) &#x2014; Input lengths to include in the run to measure time metrics.",name:"input_lengths"}],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/utils/runs.py#L268"}}),se=new y({props:{name:"class optimum.utils.runs.Calibration",anchor:"optimum.utils.runs.Calibration",parameters:[{name:"method",val:": CalibrationMethods"},{name:"num_calibration_samples",val:": int"},{name:"calibration_histogram_percentile",val:": typing.Optional[float] = None"},{name:"calibration_moving_average",val:": typing.Optional[bool] = None"},{name:"calibration_moving_average_constant",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"optimum.utils.runs.Calibration.method",description:"<strong>method</strong> (<code>CalibrationMethods</code>) &#x2014; Calibration method used, either &#x201C;minmax&#x201D;, &#x201C;entropy&#x201D; or &#x201C;percentile&#x201D;.",name:"method"},{anchor:"optimum.utils.runs.Calibration.num_calibration_samples",description:"<strong>num_calibration_samples</strong> (<code>int</code>) &#x2014; Number of examples to use for the calibration step resulting from static quantization.",name:"num_calibration_samples"},{anchor:"optimum.utils.runs.Calibration.calibration_histogram_percentile",description:"<strong>calibration_histogram_percentile</strong> (<code>Union[float, NoneType]</code>) &#x2014; The percentile used for the percentile calibration method.",name:"calibration_histogram_percentile"},{anchor:"optimum.utils.runs.Calibration.calibration_moving_average",description:"<strong>calibration_moving_average</strong> (<code>Union[bool, NoneType]</code>) &#x2014; Whether to compute the moving average of the minimum and maximum values for the minmax calibration method.",name:"calibration_moving_average"},{anchor:"optimum.utils.runs.Calibration.calibration_moving_average_constant",description:"<strong>calibration_moving_average_constant</strong> (<code>Union[float, NoneType]</code>) &#x2014; Constant smoothing factor to use when computing the moving average of the minimum and maximum values. Effective only when the selected calibration method is minmax and <code>calibration_moving_average</code> is set to True.",name:"calibration_moving_average_constant"}],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/utils/runs.py#L71"}}),oe=new y({props:{name:"class optimum.utils.runs.DatasetArgs",anchor:"optimum.utils.runs.DatasetArgs",parameters:[{name:"path",val:": str"},{name:"eval_split",val:": str"},{name:"data_keys",val:": typing.Dict[str, typing.Union[NoneType, str]]"},{name:"ref_keys",val:": typing.List[str]"},{name:"name",val:": typing.Optional[str] = None"},{name:"calibration_split",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"optimum.utils.runs.DatasetArgs.path",description:"<strong>path</strong> (<code>str</code>) &#x2014; Path to the dataset, as in <code>datasets.load_dataset(path)</code>.",name:"path"},{anchor:"optimum.utils.runs.DatasetArgs.eval_split",description:"<strong>eval_split</strong> (<code>str</code>) &#x2014; Dataset split used for evaluation (e.g. &#x201C;test&#x201D;).",name:"eval_split"},{anchor:"optimum.utils.runs.DatasetArgs.data_keys",description:"<strong>data_keys</strong> (<code>Union[NoneType, str]]</code>) &#x2014; Dataset columns used as input data. At most two, indicated with &#x201C;primary&#x201D; and &#x201C;secondary&#x201D;.",name:"data_keys"},{anchor:"optimum.utils.runs.DatasetArgs.ref_keys",description:"<strong>ref_keys</strong> (<code>List[str]</code>) &#x2014; Dataset column used for references during evaluation.",name:"ref_keys"},{anchor:"optimum.utils.runs.DatasetArgs.name",description:"<strong>name</strong> (<code>Union[str, NoneType]</code>) &#x2014; Name of the dataset, as in <code>datasets.load_dataset(path, name)</code>.",name:"name"},{anchor:"optimum.utils.runs.DatasetArgs.calibration_split",description:"<strong>calibration_split</strong> (<code>Union[str, NoneType]</code>) &#x2014; Dataset split used for calibration (e.g. &#x201C;train&#x201D;).",name:"calibration_split"}],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/utils/runs.py#L120"}}),ie=new y({props:{name:"class optimum.utils.runs.TaskArgs",anchor:"optimum.utils.runs.TaskArgs",parameters:[{name:"is_regression",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"optimum.utils.runs.TaskArgs.is_regression",description:"<strong>is_regression</strong> (<code>Union[bool, NoneType]</code>) &#x2014; Text classification specific. Set whether the task is regression (output = one float).",name:"is_regression"}],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/utils/runs.py#L141"}}),pe=new vt({}),le=new y({props:{name:"class optimum.utils.preprocessing.base.DatasetProcessing",anchor:"optimum.utils.preprocessing.base.DatasetProcessing",parameters:[{name:"dataset_path",val:": str"},{name:"dataset_name",val:": str"},{name:"preprocessor",val:": typing.Union[transformers.feature_extraction_utils.FeatureExtractionMixin, transformers.tokenization_utils_base.PreTrainedTokenizerBase]"},{name:"eval_split",val:": str"},{name:"static_quantization",val:": bool"},{name:"data_keys",val:": typing.Dict[str, str]"},{name:"ref_keys",val:": typing.List[str]"},{name:"config",val:": PretrainedConfig"},{name:"task_args",val:": typing.Optional[typing.Dict] = None"},{name:"num_calibration_samples",val:": typing.Optional[int] = None"},{name:"calibration_split",val:": typing.Optional[str] = None"},{name:"max_eval_samples",val:": typing.Optional[int] = None"}],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/utils/preprocessing/base.py#L7"}}),me=new y({props:{name:"__init__",anchor:"optimum.utils.preprocessing.base.DatasetProcessing.__init__",parameters:[{name:"dataset_path",val:": str"},{name:"dataset_name",val:": str"},{name:"preprocessor",val:": typing.Union[transformers.feature_extraction_utils.FeatureExtractionMixin, transformers.tokenization_utils_base.PreTrainedTokenizerBase]"},{name:"eval_split",val:": str"},{name:"static_quantization",val:": bool"},{name:"data_keys",val:": typing.Dict[str, str]"},{name:"ref_keys",val:": typing.List[str]"},{name:"config",val:": PretrainedConfig"},{name:"task_args",val:": typing.Optional[typing.Dict] = None"},{name:"num_calibration_samples",val:": typing.Optional[int] = None"},{name:"calibration_split",val:": typing.Optional[str] = None"},{name:"max_eval_samples",val:": typing.Optional[int] = None"}],parametersDescription:[{anchor:"optimum.utils.preprocessing.base.DatasetProcessing.__init__.dataset_path",description:'<strong>dataset_path</strong> (<code>str</code>) &#x2014; Dataset path (<a href="https://huggingface.co/docs/datasets/v2.2.1/en/package_reference/loading_methods#datasets.load_dataset.path" rel="nofollow">https://huggingface.co/docs/datasets/v2.2.1/en/package_reference/loading_methods#datasets.load_dataset.path</a>)',name:"dataset_path"},{anchor:"optimum.utils.preprocessing.base.DatasetProcessing.__init__.dataset_name",description:'<strong>dataset_name</strong> (<code>str</code>) &#x2014; Dataset name (<a href="https://huggingface.co/docs/datasets/v2.2.1/en/package_reference/loading_methods#datasets.load_dataset.name" rel="nofollow">https://huggingface.co/docs/datasets/v2.2.1/en/package_reference/loading_methods#datasets.load_dataset.name</a>)',name:"dataset_name"},{anchor:"optimum.utils.preprocessing.base.DatasetProcessing.__init__.preprocessor",description:"<strong>preprocessor</strong> (<code>Union[FeatureExtractionMixin, PreTrainedTokenizerBase]</code>) &#x2014; Preprocessor used for evaluation.",name:"preprocessor"},{anchor:"optimum.utils.preprocessing.base.DatasetProcessing.__init__.eval_split",description:"<strong>eval_split</strong> (<code>str</code>) &#x2014; Dataset split used for evaluation (e.g. &#x201C;test&#x201D;).",name:"eval_split"},{anchor:"optimum.utils.preprocessing.base.DatasetProcessing.__init__.static_quantization",description:"<strong>static_quantization</strong> (<code>bool</code>) &#x2014; Static quantization is used.",name:"static_quantization"},{anchor:"optimum.utils.preprocessing.base.DatasetProcessing.__init__.data_keys",description:"<strong>data_keys</strong> (<code>Dict[str, str]</code>) &#x2014; Map &#x201C;primary&#x201D; and &#x201C;secondary&#x201D; to data column names.",name:"data_keys"},{anchor:"optimum.utils.preprocessing.base.DatasetProcessing.__init__.ref_keys",description:"<strong>ref_keys</strong> (<code>List[str]</code>) &#x2014; References column names.",name:"ref_keys"},{anchor:"optimum.utils.preprocessing.base.DatasetProcessing.__init__.config",description:"<strong>config</strong> (<code>PretrainedConfig</code>) &#x2014; Model configuration, useful for some tasks.",name:"config"},{anchor:"optimum.utils.preprocessing.base.DatasetProcessing.__init__.task_args(Dict,",description:"<strong>task_args(<code>Dict</code>,</strong> <em>optional</em>) &#x2014; Task-specific arguments.",name:"task_args(Dict,"},{anchor:"optimum.utils.preprocessing.base.DatasetProcessing.__init__.num_calibration_samples",description:"<strong>num_calibration_samples</strong> (<code>int</code>, <em>optional</em>) &#x2014; Number of calibration samples for static quantization. Defaults to None.",name:"num_calibration_samples"},{anchor:"optimum.utils.preprocessing.base.DatasetProcessing.__init__.calibration_split",description:"<strong>calibration_split</strong> (<code>str</code>, <em>optional</em>) &#x2014; Calibration split (e.g. &#x201C;train&#x201D;) for static quantization. Defaults to None.",name:"calibration_split"},{anchor:"optimum.utils.preprocessing.base.DatasetProcessing.__init__.max_eval_samples",description:"<strong>max_eval_samples</strong> (<code>int</code>; <em>optional</em>) &#x2014; Maximum number of samples to use from the evaluation dataset for evaluation.",name:"max_eval_samples"}],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/utils/preprocessing/base.py#L8"}}),ce=new y({props:{name:"load_datasets",anchor:"optimum.utils.preprocessing.base.DatasetProcessing.load_datasets",parameters:[],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/utils/preprocessing/base.py#L58",returnDescription:`
<p>Dictionary holding the datasets.</p>
`,returnType:`
<p><code>Dict</code></p>
`}}),de=new y({props:{name:"run_inference",anchor:"optimum.utils.preprocessing.base.DatasetProcessing.run_inference",parameters:[{name:"eval_dataset",val:": Dataset"},{name:"pipeline",val:": Pipeline"}],parametersDescription:[{anchor:"optimum.utils.preprocessing.base.DatasetProcessing.run_inference.eval_dataset",description:"<strong>eval_dataset</strong> (<code>Dataset</code>) &#x2014; Raw dataset to run inference on.",name:"eval_dataset"},{anchor:"optimum.utils.preprocessing.base.DatasetProcessing.run_inference.pipeline",description:"<strong>pipeline</strong> (<code>Pipeline</code>) &#x2014; Pipeline used for inference. Should be initialized beforehand.",name:"pipeline"}],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/utils/preprocessing/base.py#L68",returnDescription:`
<ul>
<li><strong>labels</strong> are the references for evaluation.</li>
<li><strong>predictions</strong> are the predictions on the dataset using the pipeline.</li>
</ul>
`,returnType:`
<p><code>tuple(List)</code> comprising labels and predictions</p>
`}}),ue=new y({props:{name:"get_metrics",anchor:"optimum.utils.preprocessing.base.DatasetProcessing.get_metrics",parameters:[{name:"predictions",val:""},{name:"references",val:""},{name:"metric",val:""}],parametersDescription:[{anchor:"optimum.utils.preprocessing.base.DatasetProcessing.get_metrics.predictions",description:"<strong>predictions</strong> (<code>List</code>) &#x2014; Predictions.",name:"predictions"},{anchor:"optimum.utils.preprocessing.base.DatasetProcessing.get_metrics.references",description:"<strong>references</strong> (<code>List</code>) &#x2014; References.",name:"references"},{anchor:"optimum.utils.preprocessing.base.DatasetProcessing.get_metrics.metric",description:"<strong>metric</strong> (<code>Metric</code>) &#x2014; Pre-loaded metric to run evaluation on.",name:"metric"}],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/utils/preprocessing/base.py#L82",returnDescription:`
<p>Computed metrics.</p>
`,returnType:`
<p><code>Dict</code></p>
`}}),ge=new y({props:{name:"get_pipeline_kwargs",anchor:"optimum.utils.preprocessing.base.DatasetProcessing.get_pipeline_kwargs",parameters:[],source:"https://github.com/huggingface/optimum/blob/v1.4.0/src/optimum/utils/preprocessing/base.py#L95",returnDescription:`
<p>Task-specific kwargs to initialize the pipeline.</p>
`,returnType:`
<p><code>Dict</code></p>
`}}),{c(){T=n("meta"),He=o(),E=n("h1"),I=n("a"),ye=n("span"),d(Q.$$.fragment),bt=o(),xe=n("span"),$t=l("Benchmarking"),We=o(),z=n("h2"),S=n("a"),ke=n("span"),d(J.$$.fragment),yt=o(),De=n("span"),xt=l("Run"),Qe=o(),b=n("div"),d(j.$$.fragment),kt=o(),D=n("div"),d(K.$$.fragment),Dt=o(),we=n("p"),wt=l("Initialize the Run class holding methods to perform inference and evaluation given a config."),Pt=o(),Pe=n("p"),Ct=l("A run compares a transformers model and an optimized model on latency/throughput, model size, and provided metrics."),Tt=o(),w=n("div"),d(X.$$.fragment),Et=o(),Ce=n("p"),zt=l("Launch inference to compare metrics between the original and optimized model."),Nt=o(),Te=n("p"),Rt=l("These metrics are latency, throughput, model size, and user provided metrics."),Lt=o(),V=n("div"),d(Y.$$.fragment),At=o(),Ee=n("p"),qt=l("Load evaluation dataset, and if needed, calibration dataset for static quantization."),Ot=o(),M=n("div"),d(Z.$$.fragment),It=o(),ee=n("p"),St=l("Get calibration dataset. The dataset needs to be loaded first with "),he=n("a"),Vt=l("load_datasets()"),Mt=l("."),Ut=o(),U=n("div"),d(te.$$.fragment),Bt=o(),ae=n("p"),Ft=l("Get evaluation dataset.  The dataset needs to be loaded first with "),_e=n("a"),Gt=l("load_datasets()"),Ht=l("."),Je=o(),N=n("h2"),B=n("a"),ze=n("span"),d(ne.$$.fragment),Wt=o(),Ne=n("span"),Qt=l("RunConfig"),je=o(),R=n("div"),d(re.$$.fragment),Jt=o(),Re=n("p"),jt=l("Class holding the parameters to launch a run."),Ke=o(),L=n("div"),d(se.$$.fragment),Kt=o(),Le=n("p"),Xt=l("Parameters for post-training calibration with static quantization."),Xe=o(),A=n("div"),d(oe.$$.fragment),Yt=o(),Ae=n("p"),Zt=l("Parameters related to the dataset."),Ye=o(),q=n("div"),d(ie.$$.fragment),ea=o(),qe=n("p"),ta=l("Task-specific parameters."),Ze=o(),O=n("h2"),F=n("a"),Oe=n("span"),d(pe.$$.fragment),aa=o(),Ie=n("span"),na=l("Processing utility methods"),et=o(),$=n("div"),d(le.$$.fragment),ra=o(),P=n("div"),d(me.$$.fragment),sa=o(),Se=n("p"),oa=l("Initialize the class in charge of loading datasets, running inference and evaluation."),ia=o(),Ve=n("p"),pa=l("This class should be task-dependent, backend independent."),la=o(),C=n("div"),d(ce.$$.fragment),ma=o(),Me=n("p"),ca=l("Load calibration dataset if needed, and evaluation dataset."),da=o(),Ue=n("p"),ua=l("The evaluation dataset is meant to be used by a pipeline and is therefore not preprocessed. The calibration dataset is preprocessed."),ga=o(),G=n("div"),d(de.$$.fragment),ha=o(),Be=n("p"),_a=l("Run inference on the provided dataset using a pipeline, and return all labels, predictions."),fa=o(),H=n("div"),d(ue.$$.fragment),va=o(),Fe=n("p"),ba=l("Compute a metric given pre-formatted predictions and references."),$a=o(),W=n("div"),d(ge.$$.fragment),ya=o(),Ge=n("p"),xa=l("Get task-specific kwargs to initialize the pipeline."),this.h()},l(e){const c=nn('[data-svelte="svelte-1phssyn"]',document.head);T=r(c,"META",{name:!0,content:!0}),c.forEach(a),He=i(e),E=r(e,"H1",{class:!0});var at=s(E);I=r(at,"A",{id:!0,class:!0,href:!0});var Da=s(I);ye=r(Da,"SPAN",{});var wa=s(ye);u(Q.$$.fragment,wa),wa.forEach(a),Da.forEach(a),bt=i(at),xe=r(at,"SPAN",{});var Pa=s(xe);$t=m(Pa,"Benchmarking"),Pa.forEach(a),at.forEach(a),We=i(e),z=r(e,"H2",{class:!0});var nt=s(z);S=r(nt,"A",{id:!0,class:!0,href:!0});var Ca=s(S);ke=r(Ca,"SPAN",{});var Ta=s(ke);u(J.$$.fragment,Ta),Ta.forEach(a),Ca.forEach(a),yt=i(nt),De=r(nt,"SPAN",{});var Ea=s(De);xt=m(Ea,"Run"),Ea.forEach(a),nt.forEach(a),Qe=i(e),b=r(e,"DIV",{class:!0});var x=s(b);u(j.$$.fragment,x),kt=i(x),D=r(x,"DIV",{class:!0});var fe=s(D);u(K.$$.fragment,fe),Dt=i(fe),we=r(fe,"P",{});var za=s(we);wt=m(za,"Initialize the Run class holding methods to perform inference and evaluation given a config."),za.forEach(a),Pt=i(fe),Pe=r(fe,"P",{});var Na=s(Pe);Ct=m(Na,"A run compares a transformers model and an optimized model on latency/throughput, model size, and provided metrics."),Na.forEach(a),fe.forEach(a),Tt=i(x),w=r(x,"DIV",{class:!0});var ve=s(w);u(X.$$.fragment,ve),Et=i(ve),Ce=r(ve,"P",{});var Ra=s(Ce);zt=m(Ra,"Launch inference to compare metrics between the original and optimized model."),Ra.forEach(a),Nt=i(ve),Te=r(ve,"P",{});var La=s(Te);Rt=m(La,"These metrics are latency, throughput, model size, and user provided metrics."),La.forEach(a),ve.forEach(a),Lt=i(x),V=r(x,"DIV",{class:!0});var rt=s(V);u(Y.$$.fragment,rt),At=i(rt),Ee=r(rt,"P",{});var Aa=s(Ee);qt=m(Aa,"Load evaluation dataset, and if needed, calibration dataset for static quantization."),Aa.forEach(a),rt.forEach(a),Ot=i(x),M=r(x,"DIV",{class:!0});var st=s(M);u(Z.$$.fragment,st),It=i(st),ee=r(st,"P",{});var ot=s(ee);St=m(ot,"Get calibration dataset. The dataset needs to be loaded first with "),he=r(ot,"A",{href:!0});var qa=s(he);Vt=m(qa,"load_datasets()"),qa.forEach(a),Mt=m(ot,"."),ot.forEach(a),st.forEach(a),Ut=i(x),U=r(x,"DIV",{class:!0});var it=s(U);u(te.$$.fragment,it),Bt=i(it),ae=r(it,"P",{});var pt=s(ae);Ft=m(pt,"Get evaluation dataset.  The dataset needs to be loaded first with "),_e=r(pt,"A",{href:!0});var Oa=s(_e);Gt=m(Oa,"load_datasets()"),Oa.forEach(a),Ht=m(pt,"."),pt.forEach(a),it.forEach(a),x.forEach(a),Je=i(e),N=r(e,"H2",{class:!0});var lt=s(N);B=r(lt,"A",{id:!0,class:!0,href:!0});var Ia=s(B);ze=r(Ia,"SPAN",{});var Sa=s(ze);u(ne.$$.fragment,Sa),Sa.forEach(a),Ia.forEach(a),Wt=i(lt),Ne=r(lt,"SPAN",{});var Va=s(Ne);Qt=m(Va,"RunConfig"),Va.forEach(a),lt.forEach(a),je=i(e),R=r(e,"DIV",{class:!0});var mt=s(R);u(re.$$.fragment,mt),Jt=i(mt),Re=r(mt,"P",{});var Ma=s(Re);jt=m(Ma,"Class holding the parameters to launch a run."),Ma.forEach(a),mt.forEach(a),Ke=i(e),L=r(e,"DIV",{class:!0});var ct=s(L);u(se.$$.fragment,ct),Kt=i(ct),Le=r(ct,"P",{});var Ua=s(Le);Xt=m(Ua,"Parameters for post-training calibration with static quantization."),Ua.forEach(a),ct.forEach(a),Xe=i(e),A=r(e,"DIV",{class:!0});var dt=s(A);u(oe.$$.fragment,dt),Yt=i(dt),Ae=r(dt,"P",{});var Ba=s(Ae);Zt=m(Ba,"Parameters related to the dataset."),Ba.forEach(a),dt.forEach(a),Ye=i(e),q=r(e,"DIV",{class:!0});var ut=s(q);u(ie.$$.fragment,ut),ea=i(ut),qe=r(ut,"P",{});var Fa=s(qe);ta=m(Fa,"Task-specific parameters."),Fa.forEach(a),ut.forEach(a),Ze=i(e),O=r(e,"H2",{class:!0});var gt=s(O);F=r(gt,"A",{id:!0,class:!0,href:!0});var Ga=s(F);Oe=r(Ga,"SPAN",{});var Ha=s(Oe);u(pe.$$.fragment,Ha),Ha.forEach(a),Ga.forEach(a),aa=i(gt),Ie=r(gt,"SPAN",{});var Wa=s(Ie);na=m(Wa,"Processing utility methods"),Wa.forEach(a),gt.forEach(a),et=i(e),$=r(e,"DIV",{class:!0});var k=s($);u(le.$$.fragment,k),ra=i(k),P=r(k,"DIV",{class:!0});var be=s(P);u(me.$$.fragment,be),sa=i(be),Se=r(be,"P",{});var Qa=s(Se);oa=m(Qa,"Initialize the class in charge of loading datasets, running inference and evaluation."),Qa.forEach(a),ia=i(be),Ve=r(be,"P",{});var Ja=s(Ve);pa=m(Ja,"This class should be task-dependent, backend independent."),Ja.forEach(a),be.forEach(a),la=i(k),C=r(k,"DIV",{class:!0});var $e=s(C);u(ce.$$.fragment,$e),ma=i($e),Me=r($e,"P",{});var ja=s(Me);ca=m(ja,"Load calibration dataset if needed, and evaluation dataset."),ja.forEach(a),da=i($e),Ue=r($e,"P",{});var Ka=s(Ue);ua=m(Ka,"The evaluation dataset is meant to be used by a pipeline and is therefore not preprocessed. The calibration dataset is preprocessed."),Ka.forEach(a),$e.forEach(a),ga=i(k),G=r(k,"DIV",{class:!0});var ht=s(G);u(de.$$.fragment,ht),ha=i(ht),Be=r(ht,"P",{});var Xa=s(Be);_a=m(Xa,"Run inference on the provided dataset using a pipeline, and return all labels, predictions."),Xa.forEach(a),ht.forEach(a),fa=i(k),H=r(k,"DIV",{class:!0});var _t=s(H);u(ue.$$.fragment,_t),va=i(_t),Fe=r(_t,"P",{});var Ya=s(Fe);ba=m(Ya,"Compute a metric given pre-formatted predictions and references."),Ya.forEach(a),_t.forEach(a),$a=i(k),W=r(k,"DIV",{class:!0});var ft=s(W);u(ge.$$.fragment,ft),ya=i(ft),Ge=r(ft,"P",{});var Za=s(Ge);xa=m(Za,"Get task-specific kwargs to initialize the pipeline."),Za.forEach(a),ft.forEach(a),k.forEach(a),this.h()},h(){p(T,"name","hf:doc:metadata"),p(T,"content",JSON.stringify(pn)),p(I,"id","benchmarking"),p(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(I,"href","#benchmarking"),p(E,"class","relative group"),p(S,"id","optimum.runs_base.Run"),p(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(S,"href","#optimum.runs_base.Run"),p(z,"class","relative group"),p(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(he,"href","/docs/optimum/v1.4.0/en/benchmark#optimum.runs_base.Run.load_datasets"),p(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(_e,"href","/docs/optimum/v1.4.0/en/benchmark#optimum.runs_base.Run.load_datasets"),p(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(B,"id","optimum.utils.runs.RunConfig"),p(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(B,"href","#optimum.utils.runs.RunConfig"),p(N,"class","relative group"),p(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(F,"id","optimum.utils.preprocessing.base.DatasetProcessing"),p(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(F,"href","#optimum.utils.preprocessing.base.DatasetProcessing"),p(O,"class","relative group"),p(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,c){t(document.head,T),g(e,He,c),g(e,E,c),t(E,I),t(I,ye),h(Q,ye,null),t(E,bt),t(E,xe),t(xe,$t),g(e,We,c),g(e,z,c),t(z,S),t(S,ke),h(J,ke,null),t(z,yt),t(z,De),t(De,xt),g(e,Qe,c),g(e,b,c),h(j,b,null),t(b,kt),t(b,D),h(K,D,null),t(D,Dt),t(D,we),t(we,wt),t(D,Pt),t(D,Pe),t(Pe,Ct),t(b,Tt),t(b,w),h(X,w,null),t(w,Et),t(w,Ce),t(Ce,zt),t(w,Nt),t(w,Te),t(Te,Rt),t(b,Lt),t(b,V),h(Y,V,null),t(V,At),t(V,Ee),t(Ee,qt),t(b,Ot),t(b,M),h(Z,M,null),t(M,It),t(M,ee),t(ee,St),t(ee,he),t(he,Vt),t(ee,Mt),t(b,Ut),t(b,U),h(te,U,null),t(U,Bt),t(U,ae),t(ae,Ft),t(ae,_e),t(_e,Gt),t(ae,Ht),g(e,Je,c),g(e,N,c),t(N,B),t(B,ze),h(ne,ze,null),t(N,Wt),t(N,Ne),t(Ne,Qt),g(e,je,c),g(e,R,c),h(re,R,null),t(R,Jt),t(R,Re),t(Re,jt),g(e,Ke,c),g(e,L,c),h(se,L,null),t(L,Kt),t(L,Le),t(Le,Xt),g(e,Xe,c),g(e,A,c),h(oe,A,null),t(A,Yt),t(A,Ae),t(Ae,Zt),g(e,Ye,c),g(e,q,c),h(ie,q,null),t(q,ea),t(q,qe),t(qe,ta),g(e,Ze,c),g(e,O,c),t(O,F),t(F,Oe),h(pe,Oe,null),t(O,aa),t(O,Ie),t(Ie,na),g(e,et,c),g(e,$,c),h(le,$,null),t($,ra),t($,P),h(me,P,null),t(P,sa),t(P,Se),t(Se,oa),t(P,ia),t(P,Ve),t(Ve,pa),t($,la),t($,C),h(ce,C,null),t(C,ma),t(C,Me),t(Me,ca),t(C,da),t(C,Ue),t(Ue,ua),t($,ga),t($,G),h(de,G,null),t(G,ha),t(G,Be),t(Be,_a),t($,fa),t($,H),h(ue,H,null),t(H,va),t(H,Fe),t(Fe,ba),t($,$a),t($,W),h(ge,W,null),t(W,ya),t(W,Ge),t(Ge,xa),tt=!0},p:rn,i(e){tt||(_(Q.$$.fragment,e),_(J.$$.fragment,e),_(j.$$.fragment,e),_(K.$$.fragment,e),_(X.$$.fragment,e),_(Y.$$.fragment,e),_(Z.$$.fragment,e),_(te.$$.fragment,e),_(ne.$$.fragment,e),_(re.$$.fragment,e),_(se.$$.fragment,e),_(oe.$$.fragment,e),_(ie.$$.fragment,e),_(pe.$$.fragment,e),_(le.$$.fragment,e),_(me.$$.fragment,e),_(ce.$$.fragment,e),_(de.$$.fragment,e),_(ue.$$.fragment,e),_(ge.$$.fragment,e),tt=!0)},o(e){f(Q.$$.fragment,e),f(J.$$.fragment,e),f(j.$$.fragment,e),f(K.$$.fragment,e),f(X.$$.fragment,e),f(Y.$$.fragment,e),f(Z.$$.fragment,e),f(te.$$.fragment,e),f(ne.$$.fragment,e),f(re.$$.fragment,e),f(se.$$.fragment,e),f(oe.$$.fragment,e),f(ie.$$.fragment,e),f(pe.$$.fragment,e),f(le.$$.fragment,e),f(me.$$.fragment,e),f(ce.$$.fragment,e),f(de.$$.fragment,e),f(ue.$$.fragment,e),f(ge.$$.fragment,e),tt=!1},d(e){a(T),e&&a(He),e&&a(E),v(Q),e&&a(We),e&&a(z),v(J),e&&a(Qe),e&&a(b),v(j),v(K),v(X),v(Y),v(Z),v(te),e&&a(Je),e&&a(N),v(ne),e&&a(je),e&&a(R),v(re),e&&a(Ke),e&&a(L),v(se),e&&a(Xe),e&&a(A),v(oe),e&&a(Ye),e&&a(q),v(ie),e&&a(Ze),e&&a(O),v(pe),e&&a(et),e&&a($),v(le),v(me),v(ce),v(de),v(ue),v(ge)}}}const pn={local:"benchmarking",sections:[{local:"optimum.runs_base.Run",title:"Run"},{local:"optimum.utils.runs.RunConfig",title:"RunConfig"},{local:"optimum.utils.preprocessing.base.DatasetProcessing",title:"Processing utility methods"}],title:"Benchmarking"};function ln(ka){return sn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class un extends en{constructor(T){super();tn(this,T,ln,on,an,{})}}export{un as default,pn as metadata};
