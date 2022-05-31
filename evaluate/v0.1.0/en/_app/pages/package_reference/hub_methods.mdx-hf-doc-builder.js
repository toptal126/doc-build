import{S as it,i as lt,s as ct,e as l,k as g,w as A,t as S,M as ht,c,d as e,m as v,a as h,x as D,h as M,b as m,G as s,g as _,y as C,q as L,o as T,B,v as pt,L as mt}from"../../chunks/vendor-hf-doc-builder.js";import{D as ut}from"../../chunks/Docstring-hf-doc-builder.js";import{C as dt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as rt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as _t}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ft(G){let o,b,r,n,u;return n=new dt({props:{code:`push_to_hub(
    model_id="huggingface/gpt2-wikitext2",
    metric_value=0.5
    metric_type="bleu",
    metric_name="BLEU",
    dataset_name="WikiText",
    dataset_type="wikitext",
    dataset_split="test",
    task_type="text-generation",
    task_name="Text Generation"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>push_to_hub(
<span class="hljs-meta">... </span>    model_id=<span class="hljs-string">&quot;huggingface/gpt2-wikitext2&quot;</span>,
<span class="hljs-meta">... </span>    metric_value=<span class="hljs-number">0.5</span>
<span class="hljs-meta">... </span>    metric_type=<span class="hljs-string">&quot;bleu&quot;</span>,
<span class="hljs-meta">... </span>    metric_name=<span class="hljs-string">&quot;BLEU&quot;</span>,
<span class="hljs-meta">... </span>    dataset_name=<span class="hljs-string">&quot;WikiText&quot;</span>,
<span class="hljs-meta">... </span>    dataset_type=<span class="hljs-string">&quot;wikitext&quot;</span>,
<span class="hljs-meta">... </span>    dataset_split=<span class="hljs-string">&quot;test&quot;</span>,
<span class="hljs-meta">... </span>    task_type=<span class="hljs-string">&quot;text-generation&quot;</span>,
<span class="hljs-meta">... </span>    task_name=<span class="hljs-string">&quot;Text Generation&quot;</span>
<span class="hljs-meta">... </span>)`}}),{c(){o=l("p"),b=S("Example:"),r=g(),A(n.$$.fragment)},l(a){o=c(a,"P",{});var d=h(o);b=M(d,"Example:"),d.forEach(e),r=v(a),D(n.$$.fragment,a)},m(a,d){_(a,o,d),s(o,b),_(a,r,d),C(n,a,d),u=!0},p:mt,i(a){u||(L(n.$$.fragment,a),u=!0)},o(a){T(n.$$.fragment,a),u=!1},d(a){a&&e(o),a&&e(r),B(n,a)}}}function gt(G){let o,b,r,n,u,a,d,q,O,F,j,R,I,f,$,P,y,V,N,z,U,p,w,K,H,Q,X,x,W;return a=new rt({}),y=new rt({}),w=new ut({props:{name:"evaluate.push_to_hub",anchor:"evaluate.push_to_hub",parameters:[{name:"model_id",val:": str"},{name:"task_type",val:": str"},{name:"dataset_type",val:": str"},{name:"dataset_name",val:": str"},{name:"metric_type",val:": str"},{name:"metric_name",val:": str"},{name:"metric_value",val:": float"},{name:"task_name",val:": str = None"},{name:"dataset_config",val:": str = None"},{name:"dataset_split",val:": str = None"},{name:"dataset_revision",val:": str = None"},{name:"dataset_args",val:": typing.Dict[str, int] = None"},{name:"metric_config",val:": str = None"},{name:"metric_args",val:": typing.Dict[str, int] = None"},{name:"overwrite",val:": bool = False"}],parametersDescription:[{anchor:"evaluate.push_to_hub.model_id",description:'<strong>model_id</strong> (<code>str</code>) &#x2014; Model id from <a href="https://hf.co/models" rel="nofollow">https://hf.co/models</a>.',name:"model_id"},{anchor:"evaluate.push_to_hub.task_type",description:`<strong>task_type</strong> (<code>str</code>) &#x2014; Task id, refer to
<a href="https://github.com/huggingface/datasets/blob/master/src/datasets/utils/resources/tasks.json" rel="nofollow">https://github.com/huggingface/datasets/blob/master/src/datasets/utils/resources/tasks.json</a> for allowed values.`,name:"task_type"},{anchor:"evaluate.push_to_hub.dataset_type",description:'<strong>dataset_type</strong> (<code>str</code>) &#x2014; Dataset id from <a href="https://hf.co/datasets" rel="nofollow">https://hf.co/datasets</a>.',name:"dataset_type"},{anchor:"evaluate.push_to_hub.dataset_name",description:"<strong>dataset_name</strong> (<code>str</code>) &#x2014; Pretty name for the dataset.",name:"dataset_name"},{anchor:"evaluate.push_to_hub.metric_type",description:'<strong>metric_type</strong> (<code>str</code>) &#x2014; Metric id from <a href="https://hf.co/metrics" rel="nofollow">https://hf.co/metrics</a>.',name:"metric_type"},{anchor:"evaluate.push_to_hub.metric_name",description:"<strong>metric_name</strong> (<code>str</code>) &#x2014; Pretty name for the metric.",name:"metric_name"},{anchor:"evaluate.push_to_hub.metric_value",description:"<strong>metric_value</strong> (<code>float</code>) &#x2014; Computed metric value.",name:"metric_value"},{anchor:"evaluate.push_to_hub.task_name",description:"<strong>task_name</strong> (<code>str</code>, optional) &#x2014; Pretty name for the task.",name:"task_name"},{anchor:"evaluate.push_to_hub.dataset_config",description:`<strong>dataset_config</strong> (<code>str</code>, optional) &#x2014; Dataset configuration used in datasets.load_dataset().
See huggingface/datasets docs for more info: <a href="https://huggingface.co/docs/datasets/package_reference/loading_methods#datasets.load_dataset.name" rel="nofollow">https://huggingface.co/docs/datasets/package_reference/loading_methods#datasets.load_dataset.name</a>`,name:"dataset_config"},{anchor:"evaluate.push_to_hub.dataset_split",description:"<strong>dataset_split</strong> (<code>str</code>, optional) &#x2014; Name of split used for metric computation.",name:"dataset_split"},{anchor:"evaluate.push_to_hub.dataset_revision",description:"<strong>dataset_revision</strong> (<code>str</code>, optional) &#x2014; Git hash for the specific version of the dataset.",name:"dataset_revision"},{anchor:"evaluate.push_to_hub.dataset_args",description:"<strong>dataset_args</strong> (<code>dict[str, int]</code>, optional) &#x2014; Additional arguments passed to datasets.load_dataset().",name:"dataset_args"},{anchor:"evaluate.push_to_hub.metric_config",description:"<strong>metric_config</strong> (<code>str</code>, optional) &#x2014; Configuration for the metric (e.g. the GLUE metric has a configuration for each subset)",name:"metric_config"},{anchor:"evaluate.push_to_hub.metric_args",description:"<strong>metric_args</strong> (<code>dict[str, int]</code>, optional) &#x2014; Arguments passed during Metric.compute().",name:"metric_args"},{anchor:"evaluate.push_to_hub.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, optional, defaults to <em>False</em>) &#x2014; If set to <em>True</em> an existing metric field can be overwritten, otherwise
attempting to overwrite any existing fields will cause an error.`,name:"overwrite"}],source:"https://github.com/huggingface/evaluate/blob/v0.1.0/src/evaluate/hub.py#L18"}}),x=new _t({props:{anchor:"evaluate.push_to_hub.example",$$slots:{default:[ft]},$$scope:{ctx:G}}}),{c(){o=l("meta"),b=g(),r=l("h1"),n=l("a"),u=l("span"),A(a.$$.fragment),d=g(),q=l("span"),O=S("Hub methods"),F=g(),j=l("p"),R=S("Methods for using the Hugging Face Hub:"),I=g(),f=l("h2"),$=l("a"),P=l("span"),A(y.$$.fragment),V=g(),N=l("span"),z=S("Push to hub"),U=g(),p=l("div"),A(w.$$.fragment),K=g(),H=l("p"),Q=S("Pushes the result of a metric to the metadata of a model repository in the Hub."),X=g(),A(x.$$.fragment),this.h()},l(t){const i=ht('[data-svelte="svelte-1phssyn"]',document.head);o=c(i,"META",{name:!0,content:!0}),i.forEach(e),b=v(t),r=c(t,"H1",{class:!0});var k=h(r);n=c(k,"A",{id:!0,class:!0,href:!0});var Y=h(n);u=c(Y,"SPAN",{});var Z=h(u);D(a.$$.fragment,Z),Z.forEach(e),Y.forEach(e),d=v(k),q=c(k,"SPAN",{});var tt=h(q);O=M(tt,"Hub methods"),tt.forEach(e),k.forEach(e),F=v(t),j=c(t,"P",{});var et=h(j);R=M(et,"Methods for using the Hugging Face Hub:"),et.forEach(e),I=v(t),f=c(t,"H2",{class:!0});var J=h(f);$=c(J,"A",{id:!0,class:!0,href:!0});var at=h($);P=c(at,"SPAN",{});var st=h(P);D(y.$$.fragment,st),st.forEach(e),at.forEach(e),V=v(J),N=c(J,"SPAN",{});var ot=h(N);z=M(ot,"Push to hub"),ot.forEach(e),J.forEach(e),U=v(t),p=c(t,"DIV",{class:!0});var E=h(p);D(w.$$.fragment,E),K=v(E),H=c(E,"P",{});var nt=h(H);Q=M(nt,"Pushes the result of a metric to the metadata of a model repository in the Hub."),nt.forEach(e),X=v(E),D(x.$$.fragment,E),E.forEach(e),this.h()},h(){m(o,"name","hf:doc:metadata"),m(o,"content",JSON.stringify(vt)),m(n,"id","hub-methods"),m(n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(n,"href","#hub-methods"),m(r,"class","relative group"),m($,"id","evaluate.push_to_hub"),m($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m($,"href","#evaluate.push_to_hub"),m(f,"class","relative group"),m(p,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,i){s(document.head,o),_(t,b,i),_(t,r,i),s(r,n),s(n,u),C(a,u,null),s(r,d),s(r,q),s(q,O),_(t,F,i),_(t,j,i),s(j,R),_(t,I,i),_(t,f,i),s(f,$),s($,P),C(y,P,null),s(f,V),s(f,N),s(N,z),_(t,U,i),_(t,p,i),C(w,p,null),s(p,K),s(p,H),s(H,Q),s(p,X),C(x,p,null),W=!0},p(t,[i]){const k={};i&2&&(k.$$scope={dirty:i,ctx:t}),x.$set(k)},i(t){W||(L(a.$$.fragment,t),L(y.$$.fragment,t),L(w.$$.fragment,t),L(x.$$.fragment,t),W=!0)},o(t){T(a.$$.fragment,t),T(y.$$.fragment,t),T(w.$$.fragment,t),T(x.$$.fragment,t),W=!1},d(t){e(o),t&&e(b),t&&e(r),B(a),t&&e(F),t&&e(j),t&&e(I),t&&e(f),B(y),t&&e(U),t&&e(p),B(w),B(x)}}}const vt={local:"hub-methods",sections:[{local:"evaluate.push_to_hub",title:"Push to hub "}],title:"Hub methods"};function bt(G){return pt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class jt extends it{constructor(o){super();lt(this,o,bt,gt,ct,{})}}export{jt as default,vt as metadata};
