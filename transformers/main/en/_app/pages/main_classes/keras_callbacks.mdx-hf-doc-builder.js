import{S as ct,i as dt,s as pt,e as s,k as f,w as $,t as p,M as mt,c as n,d as a,m as b,a as l,x as w,h as m,b as h,G as t,g as _,y,q as x,o as C,B as T,v as ut,L as We}from"../../chunks/vendor-hf-doc-builder.js";import{D as it}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ge}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Be}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Fe}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ht(M){let r,u;return r=new Ge({props:{code:`from datasets import load_metric

rouge_metric = load_metric("rouge")


def rouge_fn(predictions, labels):
    decoded_predictions = tokenizer.batch_decode(predictions, skip_special_tokens=True)
    decoded_labels = tokenizer.batch_decode(labels, skip_special_tokens=True)
    result = rouge_metric.compute(predictions=decoded_predictions, references=decoded_labels)
    return {key: value.mid.fmeasure * 100 for key, value in result.items()}`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric

rouge_metric = load_metric(<span class="hljs-string">&quot;rouge&quot;</span>)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">rouge_fn</span>(<span class="hljs-params">predictions, labels</span>):
    decoded_predictions = tokenizer.batch_decode(predictions, skip_special_tokens=<span class="hljs-literal">True</span>)
    decoded_labels = tokenizer.batch_decode(labels, skip_special_tokens=<span class="hljs-literal">True</span>)
    result = rouge_metric.compute(predictions=decoded_predictions, references=decoded_labels)
    <span class="hljs-keyword">return</span> {key: value.mid.fmeasure * <span class="hljs-number">100</span> <span class="hljs-keyword">for</span> key, value <span class="hljs-keyword">in</span> result.items()}`}}),{c(){$(r.$$.fragment)},l(o){w(r.$$.fragment,o)},m(o,d){y(r,o,d),u=!0},p:We,i(o){u||(x(r.$$.fragment,o),u=!0)},o(o){C(r.$$.fragment,o),u=!1},d(o){T(r,o)}}}function ft(M){let r,u,o,d,P;return d=new Ge({props:{code:"{'rouge1': 37.4199, 'rouge2': 13.9768, 'rougeL': 34.361, 'rougeLsum': 35.0781",highlighted:'{&#x27;rouge1&#x27;: <span class="hljs-number">37.4199</span>, &#x27;rouge2&#x27;: <span class="hljs-number">13.9768</span>, &#x27;rougeL&#x27;: <span class="hljs-number">34.361</span>, &#x27;rougeLsum&#x27;: <span class="hljs-number">35.0781</span>'}}),{c(){r=s("p"),u=p("The above function will return a dict containing values which will be logged like any other Keras metric:"),o=f(),$(d.$$.fragment)},l(i){r=n(i,"P",{});var E=l(r);u=m(E,"The above function will return a dict containing values which will be logged like any other Keras metric:"),E.forEach(a),o=b(i),w(d.$$.fragment,i)},m(i,E){_(i,r,E),t(r,u),_(i,o,E),y(d,i,E),P=!0},p:We,i(i){P||(x(d.$$.fragment,i),P=!0)},o(i){C(d.$$.fragment,i),P=!1},d(i){i&&a(r),i&&a(o),T(d,i)}}}function bt(M){let r,u;return r=new Ge({props:{code:`from transformers.keras_callbacks import PushToHubCallback

push_to_hub_callback = PushToHubCallback(
    output_dir="./model_save",
    tokenizer=tokenizer,
    hub_model_id="gpt5-7xlarge",
)

model.fit(train_dataset, callbacks=[push_to_hub_callback])`,highlighted:`<span class="hljs-keyword">from</span> transformers.keras_callbacks <span class="hljs-keyword">import</span> PushToHubCallback

push_to_hub_callback = PushToHubCallback(
    output_dir=<span class="hljs-string">&quot;./model_save&quot;</span>,
    tokenizer=tokenizer,
    hub_model_id=<span class="hljs-string">&quot;gpt5-7xlarge&quot;</span>,
)

model.fit(train_dataset, callbacks=[push_to_hub_callback])`}}),{c(){$(r.$$.fragment)},l(o){w(r.$$.fragment,o)},m(o,d){y(r,o,d),u=!0},p:We,i(o){u||(x(r.$$.fragment,o),u=!0)},o(o){C(r.$$.fragment,o),u=!1},d(o){T(r,o)}}}function gt(M){let r,u,o,d,P,i,E,V,be,ie,W,ge,ce,H,j,X,A,_e,J,ke,de,g,I,ve,k,$e,Q,we,ye,Y,xe,Ce,Z,Te,Pe,ee,Ee,Ke,ze,te,He,qe,L,Oe,D,pe,q,N,ae,U,Me,oe,je,me,v,B,Le,O,De,re,Ne,Se,se,Ae,Ie,Ue,S,ue;return i=new Be({}),A=new Be({}),I=new it({props:{name:"class transformers.KerasMetricCallback",anchor:"transformers.KerasMetricCallback",parameters:[{name:"metric_fn",val:": typing.Callable"},{name:"eval_dataset",val:": typing.Union[tensorflow.python.data.ops.dataset_ops.DatasetV2, numpy.ndarray, tensorflow.python.framework.ops.Tensor, tuple, dict]"},{name:"output_cols",val:": typing.Optional[typing.List[str]] = None"},{name:"label_cols",val:": typing.Optional[typing.List[str]] = None"},{name:"batch_size",val:": typing.Optional[int] = None"},{name:"predict_with_generate",val:": typing.Optional[bool] = False"},{name:"use_xla_generation",val:": typing.Optional[bool] = False"},{name:"generate_kwargs",val:": typing.Optional[dict] = None"}],parametersDescription:[{anchor:"transformers.KerasMetricCallback.metric_fn",description:`<strong>metric_fn</strong> (<code>Callable</code>) &#x2014;
Metric function provided by the user. It will be called with two arguments - <code>predictions</code> and <code>labels</code>.
These contain the model&#x2019;s outputs and matching labels from the dataset. It should return a dict mapping
metric names to numerical values.`,name:"metric_fn"},{anchor:"transformers.KerasMetricCallback.eval_dataset",description:`<strong>eval_dataset</strong> (<code>tf.data.Dataset</code> or <code>dict</code> or <code>tuple</code> or <code>np.ndarray</code> or <code>tf.Tensor</code>) &#x2014;
Validation data to be used to generate predictions for the <code>metric_fn</code>.`,name:"eval_dataset"},{anchor:"transformers.KerasMetricCallback.output_cols",description:"<strong>output_cols</strong> (`List[str], <em>optional</em>) &#x2014;\nA list of columns to be retained from the model output as the predictions. Defaults to all.",name:"output_cols"},{anchor:"transformers.KerasMetricCallback.label_cols",description:`<strong>label_cols</strong> (&#x2019;<code>List[str]</code>, <em>optional</em>&#x2019;) &#x2014;
A list of columns to be retained from the input dataset as the labels. Will be autodetected if this is not
supplied.`,name:"label_cols"},{anchor:"transformers.KerasMetricCallback.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Batch size. Only used when the data is not a pre-batched <code>tf.data.Dataset</code>.`,name:"batch_size"},{anchor:"transformers.KerasMetricCallback.predict_with_generate",description:`<strong>predict_with_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether we should use <code>model.generate()</code> to get outputs for the model.`,name:"predict_with_generate"},{anchor:"transformers.KerasMetricCallback.use_xla_generation",description:`<strong>use_xla_generation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If we&#x2019;re generating, whether to compile model generation with XLA. This can massively increase the speed of
generation (up to 100X speedup) but will require a new XLA compilation for each input shape. When using XLA
generation, it&#x2019;s a good idea to pad your inputs to the same size, or to use the <code>pad_to_multiple_of</code>
argument in your <code>tokenizer</code> or <code>DataCollator</code>, which will reduce the number of unique input shapes and
save a lot of compilation time. This option has no effect is <code>predict_with_generate</code> is <code>False</code>.`,name:"use_xla_generation"},{anchor:"transformers.KerasMetricCallback.generate_kwargs",description:`<strong>generate_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Keyword arguments to pass to <code>model.generate()</code> when generating. Has no effect if <code>predict_with_generate</code>
is <code>False</code>.`,name:"generate_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/keras_callbacks.py#L22"}}),L=new Fe({props:{anchor:"transformers.KerasMetricCallback.example",$$slots:{default:[ht]},$$scope:{ctx:M}}}),D=new Fe({props:{anchor:"transformers.KerasMetricCallback.example-2",$$slots:{default:[ft]},$$scope:{ctx:M}}}),U=new Be({}),B=new it({props:{name:"class transformers.PushToHubCallback",anchor:"transformers.PushToHubCallback",parameters:[{name:"output_dir",val:": typing.Union[str, pathlib.Path]"},{name:"save_strategy",val:": typing.Union[str, transformers.trainer_utils.IntervalStrategy] = 'epoch'"},{name:"save_steps",val:": typing.Optional[int] = None"},{name:"tokenizer",val:": typing.Optional[transformers.tokenization_utils_base.PreTrainedTokenizerBase] = None"},{name:"hub_model_id",val:": typing.Optional[str] = None"},{name:"hub_token",val:": typing.Optional[str] = None"},{name:"checkpoint",val:": bool = False"},{name:"**model_card_args",val:""}],parametersDescription:[{anchor:"transformers.PushToHubCallback.output_dir",description:`<strong>output_dir</strong> (<code>str</code>) &#x2014;
The output directory where the model predictions and checkpoints will be written and synced with the
repository on the Hub.`,name:"output_dir"},{anchor:"transformers.PushToHubCallback.save_strategy",description:`<strong>save_strategy</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/trainer_utils#transformers.IntervalStrategy">IntervalStrategy</a>, <em>optional</em>, defaults to <code>&quot;epoch&quot;</code>) &#x2014;
The checkpoint save strategy to adopt during training. Possible values are:</p>
<ul>
<li><code>&quot;no&quot;</code>: Save is done at the end of training.</li>
<li><code>&quot;epoch&quot;</code>: Save is done at the end of each epoch.</li>
<li><code>&quot;steps&quot;</code>: Save is done every <code>save_steps</code></li>
</ul>`,name:"save_strategy"},{anchor:"transformers.PushToHubCallback.save_steps",description:`<strong>save_steps</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The number of steps between saves when using the &#x201C;steps&#x201D; <code>save_strategy</code>.`,name:"save_steps"},{anchor:"transformers.PushToHubCallback.tokenizer",description:`<strong>tokenizer</strong> (<code>PreTrainedTokenizerBase</code>, <em>optional</em>) &#x2014;
The tokenizer used by the model. If supplied, will be uploaded to the repo alongside the weights.`,name:"tokenizer"},{anchor:"transformers.PushToHubCallback.hub_model_id",description:`<strong>hub_model_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The name of the repository to keep in sync with the local <code>output_dir</code>. It can be a simple model ID in
which case the model will be pushed in your namespace. Otherwise it should be the whole repository name,
for instance <code>&quot;user_name/model&quot;</code>, which allows you to push to an organization you are a member of with
<code>&quot;organization_name/model&quot;</code>.</p>
<p>Will default to the name of <code>output_dir</code>.`,name:"hub_model_id"},{anchor:"transformers.PushToHubCallback.hub_token",description:`<strong>hub_token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The token to use to push the model to the Hub. Will default to the token in the cache folder obtained with
<code>huggingface-cli login</code>.`,name:"hub_token"},{anchor:"transformers.PushToHubCallback.checkpoint",description:`<strong>checkpoint</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to save full training checkpoints (including epoch and optimizer state) to allow training to be
resumed. Only usable when <code>save_strategy</code> is <code>&quot;epoch&quot;</code>.`,name:"checkpoint"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/keras_callbacks.py#L271"}}),S=new Fe({props:{anchor:"transformers.PushToHubCallback.example",$$slots:{default:[bt]},$$scope:{ctx:M}}}),{c(){r=s("meta"),u=f(),o=s("h1"),d=s("a"),P=s("span"),$(i.$$.fragment),E=f(),V=s("span"),be=p("Keras callbacks"),ie=f(),W=s("p"),ge=p(`When training a Transformers model with Keras, there are some library-specific callbacks available to automate common
tasks:`),ce=f(),H=s("h2"),j=s("a"),X=s("span"),$(A.$$.fragment),_e=f(),J=s("span"),ke=p("KerasMetricCallback"),de=f(),g=s("div"),$(I.$$.fragment),ve=f(),k=s("p"),$e=p(`Callback to compute metrics at the end of every epoch. Unlike normal Keras metrics, these do not need to be
compilable by TF. It is particularly useful for common NLP metrics like BLEU and ROUGE that require string
operations or generation loops that cannot be compiled. Predictions (or generations) will be computed on the
`),Q=s("code"),we=p("eval_dataset"),ye=p(" before being passed to the "),Y=s("code"),xe=p("metric_fn"),Ce=p(" in "),Z=s("code"),Te=p("np.ndarray"),Pe=p(" format. The "),ee=s("code"),Ee=p("metric_fn"),Ke=p(` should compute
metrics and return a dict mapping metric names to metric values.`),ze=f(),te=s("p"),He=p(`We provide an example of a suitable metric_fn that computes ROUGE scores for a summarization model below. Note that
this example skips some post-processing for readability and simplicity, and should probably not be used as-is!`),qe=f(),$(L.$$.fragment),Oe=f(),$(D.$$.fragment),pe=f(),q=s("h2"),N=s("a"),ae=s("span"),$(U.$$.fragment),Me=f(),oe=s("span"),je=p("PushToHubCallback"),me=f(),v=s("div"),$(B.$$.fragment),Le=f(),O=s("p"),De=p(`Callback that will save and push the model to the Hub regularly. By default, it pushes once per epoch, but this can
be changed with the `),re=s("code"),Ne=p("save_strategy"),Se=p(` argument. Pushed models can be accessed like any other model on the hub, such
as with the `),se=s("code"),Ae=p("from_pretrained"),Ie=p(" method."),Ue=f(),$(S.$$.fragment),this.h()},l(e){const c=mt('[data-svelte="svelte-1phssyn"]',document.head);r=n(c,"META",{name:!0,content:!0}),c.forEach(a),u=b(e),o=n(e,"H1",{class:!0});var F=l(o);d=n(F,"A",{id:!0,class:!0,href:!0});var ne=l(d);P=n(ne,"SPAN",{});var le=l(P);w(i.$$.fragment,le),le.forEach(a),ne.forEach(a),E=b(F),V=n(F,"SPAN",{});var Re=l(V);be=m(Re,"Keras callbacks"),Re.forEach(a),F.forEach(a),ie=b(e),W=n(e,"P",{});var Ve=l(W);ge=m(Ve,`When training a Transformers model with Keras, there are some library-specific callbacks available to automate common
tasks:`),Ve.forEach(a),ce=b(e),H=n(e,"H2",{class:!0});var he=l(H);j=n(he,"A",{id:!0,class:!0,href:!0});var Xe=l(j);X=n(Xe,"SPAN",{});var Je=l(X);w(A.$$.fragment,Je),Je.forEach(a),Xe.forEach(a),_e=b(he),J=n(he,"SPAN",{});var Qe=l(J);ke=m(Qe,"KerasMetricCallback"),Qe.forEach(a),he.forEach(a),de=b(e),g=n(e,"DIV",{class:!0});var K=l(g);w(I.$$.fragment,K),ve=b(K),k=n(K,"P",{});var z=l(k);$e=m(z,`Callback to compute metrics at the end of every epoch. Unlike normal Keras metrics, these do not need to be
compilable by TF. It is particularly useful for common NLP metrics like BLEU and ROUGE that require string
operations or generation loops that cannot be compiled. Predictions (or generations) will be computed on the
`),Q=n(z,"CODE",{});var Ye=l(Q);we=m(Ye,"eval_dataset"),Ye.forEach(a),ye=m(z," before being passed to the "),Y=n(z,"CODE",{});var Ze=l(Y);xe=m(Ze,"metric_fn"),Ze.forEach(a),Ce=m(z," in "),Z=n(z,"CODE",{});var et=l(Z);Te=m(et,"np.ndarray"),et.forEach(a),Pe=m(z," format. The "),ee=n(z,"CODE",{});var tt=l(ee);Ee=m(tt,"metric_fn"),tt.forEach(a),Ke=m(z,` should compute
metrics and return a dict mapping metric names to metric values.`),z.forEach(a),ze=b(K),te=n(K,"P",{});var at=l(te);He=m(at,`We provide an example of a suitable metric_fn that computes ROUGE scores for a summarization model below. Note that
this example skips some post-processing for readability and simplicity, and should probably not be used as-is!`),at.forEach(a),qe=b(K),w(L.$$.fragment,K),Oe=b(K),w(D.$$.fragment,K),K.forEach(a),pe=b(e),q=n(e,"H2",{class:!0});var fe=l(q);N=n(fe,"A",{id:!0,class:!0,href:!0});var ot=l(N);ae=n(ot,"SPAN",{});var rt=l(ae);w(U.$$.fragment,rt),rt.forEach(a),ot.forEach(a),Me=b(fe),oe=n(fe,"SPAN",{});var st=l(oe);je=m(st,"PushToHubCallback"),st.forEach(a),fe.forEach(a),me=b(e),v=n(e,"DIV",{class:!0});var G=l(v);w(B.$$.fragment,G),Le=b(G),O=n(G,"P",{});var R=l(O);De=m(R,`Callback that will save and push the model to the Hub regularly. By default, it pushes once per epoch, but this can
be changed with the `),re=n(R,"CODE",{});var nt=l(re);Ne=m(nt,"save_strategy"),nt.forEach(a),Se=m(R,` argument. Pushed models can be accessed like any other model on the hub, such
as with the `),se=n(R,"CODE",{});var lt=l(se);Ae=m(lt,"from_pretrained"),lt.forEach(a),Ie=m(R," method."),R.forEach(a),Ue=b(G),w(S.$$.fragment,G),G.forEach(a),this.h()},h(){h(r,"name","hf:doc:metadata"),h(r,"content",JSON.stringify(_t)),h(d,"id","keras-callbacks"),h(d,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(d,"href","#keras-callbacks"),h(o,"class","relative group"),h(j,"id","transformers.KerasMetricCallback"),h(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(j,"href","#transformers.KerasMetricCallback"),h(H,"class","relative group"),h(g,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(N,"id","transformers.PushToHubCallback"),h(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(N,"href","#transformers.PushToHubCallback"),h(q,"class","relative group"),h(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,c){t(document.head,r),_(e,u,c),_(e,o,c),t(o,d),t(d,P),y(i,P,null),t(o,E),t(o,V),t(V,be),_(e,ie,c),_(e,W,c),t(W,ge),_(e,ce,c),_(e,H,c),t(H,j),t(j,X),y(A,X,null),t(H,_e),t(H,J),t(J,ke),_(e,de,c),_(e,g,c),y(I,g,null),t(g,ve),t(g,k),t(k,$e),t(k,Q),t(Q,we),t(k,ye),t(k,Y),t(Y,xe),t(k,Ce),t(k,Z),t(Z,Te),t(k,Pe),t(k,ee),t(ee,Ee),t(k,Ke),t(g,ze),t(g,te),t(te,He),t(g,qe),y(L,g,null),t(g,Oe),y(D,g,null),_(e,pe,c),_(e,q,c),t(q,N),t(N,ae),y(U,ae,null),t(q,Me),t(q,oe),t(oe,je),_(e,me,c),_(e,v,c),y(B,v,null),t(v,Le),t(v,O),t(O,De),t(O,re),t(re,Ne),t(O,Se),t(O,se),t(se,Ae),t(O,Ie),t(v,Ue),y(S,v,null),ue=!0},p(e,[c]){const F={};c&2&&(F.$$scope={dirty:c,ctx:e}),L.$set(F);const ne={};c&2&&(ne.$$scope={dirty:c,ctx:e}),D.$set(ne);const le={};c&2&&(le.$$scope={dirty:c,ctx:e}),S.$set(le)},i(e){ue||(x(i.$$.fragment,e),x(A.$$.fragment,e),x(I.$$.fragment,e),x(L.$$.fragment,e),x(D.$$.fragment,e),x(U.$$.fragment,e),x(B.$$.fragment,e),x(S.$$.fragment,e),ue=!0)},o(e){C(i.$$.fragment,e),C(A.$$.fragment,e),C(I.$$.fragment,e),C(L.$$.fragment,e),C(D.$$.fragment,e),C(U.$$.fragment,e),C(B.$$.fragment,e),C(S.$$.fragment,e),ue=!1},d(e){a(r),e&&a(u),e&&a(o),T(i),e&&a(ie),e&&a(W),e&&a(ce),e&&a(H),T(A),e&&a(de),e&&a(g),T(I),T(L),T(D),e&&a(pe),e&&a(q),T(U),e&&a(me),e&&a(v),T(B),T(S)}}}const _t={local:"keras-callbacks",sections:[{local:"transformers.KerasMetricCallback",title:"KerasMetricCallback"},{local:"transformers.PushToHubCallback",title:"PushToHubCallback"}],title:"Keras callbacks"};function kt(M){return ut(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ct extends ct{constructor(r){super();dt(this,r,kt,gt,pt,{})}}export{Ct as default,_t as metadata};
