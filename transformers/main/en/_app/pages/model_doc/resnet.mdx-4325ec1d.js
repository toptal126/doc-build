import{S as sa,i as oa,s as aa,e as o,k as d,w as b,t as n,M as ra,c as a,d as s,m as h,a as r,x as y,h as i,b as l,N as na,F as e,g as f,y as $,q as N,o as R,B as C}from"../../chunks/vendor-6b77c823.js";import{T as ta}from"../../chunks/Tip-39098574.js";import{D as lt}from"../../chunks/Docstring-abef54e3.js";import{C as co}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ct}from"../../chunks/IconCopyLink-7a11ce68.js";function ia(ee){let p,E,m,u,j;return{c(){p=o("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=o("code"),u=n("Module"),j=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=a(g,"P",{});var _=r(p);E=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var F=r(m);u=i(F,"Module"),F.forEach(s),j=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(g,_){f(g,p,_),e(p,E),e(p,m),e(m,u),e(p,j)},d(g){g&&s(p)}}}function la(ee){let p,E,m,u,j;return{c(){p=o("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=o("code"),u=n("Module"),j=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=a(g,"P",{});var _=r(p);E=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var F=r(m);u=i(F,"Module"),F.forEach(s),j=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(g,_){f(g,p,_),e(p,E),e(p,m),e(m,u),e(p,j)},d(g){g&&s(p)}}}function ca(ee){let p,E,m,u,j,g,_,F,Pt,dt,z,U,We,te,qt,He,Ot,ht,v,zt,se,St,Dt,oe,Lt,Vt,Ge,Wt,Ht,Ue,Gt,Ut,Je,Jt,Kt,ft,Ee,Bt,pt,xe,Xt,mt,Te,Ke,Zt,ut,je,Qt,gt,ke,ae,Yt,Ie,es,ts,_t,J,ss,re,os,as,vt,ne,ho,wt,M,rs,ie,ns,is,le,ls,cs,bt,S,K,Be,ce,ds,Xe,hs,yt,w,de,fs,D,ps,Fe,ms,us,he,gs,_s,vs,L,ws,Ae,bs,ys,Me,$s,Ns,Rs,Ze,Cs,Es,fe,$t,V,B,Qe,pe,xs,Ye,Ts,Nt,A,me,js,ue,ks,ge,Is,Fs,As,x,_e,Ms,W,Ps,Pe,qs,Os,et,zs,Ss,Ds,X,Ls,tt,Vs,Ws,ve,Rt,H,Z,st,we,Hs,ot,Gs,Ct,k,be,Us,at,Js,Ks,ye,Bs,$e,Xs,Zs,Qs,T,Ne,Ys,G,eo,qe,to,so,rt,oo,ao,ro,Q,no,nt,io,lo,Re,Et;return g=new ct({}),te=new ct({}),ce=new ct({}),de=new lt({props:{name:"class transformers.ResNetConfig",anchor:"transformers.ResNetConfig",parameters:[{name:"num_channels",val:" = 3"},{name:"embedding_size",val:" = 64"},{name:"hidden_sizes",val:" = [256, 512, 1024, 2048]"},{name:"depths",val:" = [3, 4, 6, 3]"},{name:"layer_type",val:" = 'bottleneck'"},{name:"hidden_act",val:" = 'relu'"},{name:"downsample_in_first_stage",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/resnet/configuration_resnet.py#L28",parametersDescription:[{anchor:"transformers.ResNetConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.ResNetConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Dimensionality (hidden size) for the embedding layer.`,name:"embedding_size"},{anchor:"transformers.ResNetConfig.hidden_sizes",description:`<strong>hidden_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[256, 512, 1024, 2048]</code>) &#x2014;
Dimensionality (hidden size) at each stage.`,name:"hidden_sizes"},{anchor:"transformers.ResNetConfig.depths",description:`<strong>depths</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 4, 6, 3]</code>) &#x2014;
Depth (number of layers) for each stage.`,name:"depths"},{anchor:"transformers.ResNetConfig.layer_type",description:`<strong>layer_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;bottleneck&quot;</code>) &#x2014;
The layer to use, it can be either <code>&quot;basic&quot;</code> (used for smaller models, like resnet-18 or resnet-34) or
<code>&quot;bottleneck&quot;</code> (used for larger models like resnet-50 and above).`,name:"layer_type"},{anchor:"transformers.ResNetConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function in each block. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.ResNetConfig.downsample_in_first_stage",description:`<strong>downsample_in_first_stage</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, the first stage will downsample the inputs using a <code>stride</code> of 2.`,name:"downsample_in_first_stage"}]}}),fe=new co({props:{code:`from transformers import ResNetConfig, ResNetModel

# Initializing a ResNet resnet-50 style configuration
configuration = ResNetConfig()
# Initializing a model from the resnet-50 style configuration
model = ResNetModel(configuration)
# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ResNetConfig, ResNetModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ResNet resnet-50 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ResNetConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the resnet-50 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ResNetModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),pe=new ct({}),me=new lt({props:{name:"class transformers.ResNetModel",anchor:"transformers.ResNetModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/resnet/modeling_resnet.py#L305",parametersDescription:[{anchor:"transformers.ResNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/resnet#transformers.ResNetConfig">ResNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_e=new lt({props:{name:"forward",anchor:"transformers.ResNetModel.forward",parameters:[{name:"pixel_values",val:": Tensor"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/resnet/modeling_resnet.py#L315",parametersDescription:[{anchor:"transformers.ResNetModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.ResNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ResNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.resnet.modeling_resnet.ResNetModelOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/resnet#transformers.ResNetConfig"
>ResNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.hidden_sizes[-1])</code>) \u2014 The pooled last hidden state.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, num_channels, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.resnet.modeling_resnet.ResNetModelOutput</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),X=new ta({props:{$$slots:{default:[ia]},$$scope:{ctx:ee}}}),ve=new co({props:{code:`from transformers import AutoFeatureExtractor, ResNetModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/resnet-50")
model = ResNetModel.from_pretrained("microsoft/resnet-50")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, ResNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/resnet-50&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ResNetModel.from_pretrained(<span class="hljs-string">&quot;microsoft/resnet-50&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2048</span>, <span class="hljs-number">7</span>, <span class="hljs-number">7</span>]`}}),we=new ct({}),be=new lt({props:{name:"class transformers.ResNetForImageClassification",anchor:"transformers.ResNetForImageClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/resnet/modeling_resnet.py#L359",parametersDescription:[{anchor:"transformers.ResNetForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/resnet#transformers.ResNetConfig">ResNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ne=new lt({props:{name:"forward",anchor:"transformers.ResNetForImageClassification.forward",parameters:[{name:"pixel_values",val:": Tensor = None"},{name:"labels",val:": Tensor = None"},{name:"output_hidden_states",val:": bool = None"},{name:"return_dict",val:": bool = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/resnet/modeling_resnet.py#L372",parametersDescription:[{anchor:"transformers.ResNetForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.ResNetForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ResNetForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ResNetForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <code>transformers.modeling_outputs.ImageClassifierOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/resnet#transformers.ResNetConfig"
>ResNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, num_channels, height, width)</code>. Hidden-states (also called feature maps) of the model at
the output of each stage.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_outputs.ImageClassifierOutput</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),Q=new ta({props:{$$slots:{default:[la]},$$scope:{ctx:ee}}}),Re=new co({props:{code:`from transformers import AutoFeatureExtractor, ResNetForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/resnet-50")
model = ResNetForImageClassification.from_pretrained("microsoft/resnet-50")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, ResNetForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/resnet-50&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ResNetForImageClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/resnet-50&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tiger cat`}}),{c(){p=o("meta"),E=d(),m=o("h1"),u=o("a"),j=o("span"),b(g.$$.fragment),_=d(),F=o("span"),Pt=n("ResNet"),dt=d(),z=o("h2"),U=o("a"),We=o("span"),b(te.$$.fragment),qt=d(),He=o("span"),Ot=n("Overview"),ht=d(),v=o("p"),zt=n("The ResNet model was proposed in "),se=o("a"),St=n("Deep Residual Learning for Image Recognition"),Dt=n(" by Kaiming He, Xiangyu Zhang, Shaoqing Ren and Jian Sun. Our implementation follows the small changes made by "),oe=o("a"),Lt=n("Nvidia"),Vt=n(", we apply the "),Ge=o("code"),Wt=n("stride=2"),Ht=n(" for downsampling in bottleneck\u2019s "),Ue=o("code"),Gt=n("3x3"),Ut=n(" conv and not in the first "),Je=o("code"),Jt=n("1x1"),Kt=n(". This is generally known as \u201CResNet v1.5\u201D."),ft=d(),Ee=o("p"),Bt=n("ResNet introduced residual connections, they allow to train networks with an unseen number of layers (up to 1000). ResNet won the 2015 ILSVRC & COCO competition, one important milestone in deep computer vision."),pt=d(),xe=o("p"),Xt=n("The abstract from the paper is the following:"),mt=d(),Te=o("p"),Ke=o("em"),Zt=n(`Deeper neural networks are more difficult to train. We present a residual learning framework to ease the training of networks that are substantially deeper than those used previously. We explicitly reformulate the layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions. We provide comprehensive empirical evidence showing that these residual networks are easier to optimize, and can gain accuracy from considerably increased depth. On the ImageNet dataset we evaluate residual nets with a depth of up to 152 layers---8x deeper than VGG nets but still having lower complexity. An ensemble of these residual nets achieves 3.57% error on the ImageNet test set. This result won the 1st place on the ILSVRC 2015 classification task. We also present analysis on CIFAR-10 with 100 and 1000 layers.
The depth of representations is of central importance for many visual recognition tasks. Solely due to our extremely deep representations, we obtain a 28% relative improvement on the COCO object detection dataset. Deep residual nets are foundations of our submissions to ILSVRC & COCO 2015 competitions, where we also won the 1st places on the tasks of ImageNet detection, ImageNet localization, COCO detection, and COCO segmentation.`),ut=d(),je=o("p"),Qt=n("Tips:"),gt=d(),ke=o("ul"),ae=o("li"),Yt=n("One can use "),Ie=o("a"),es=n("AutoFeatureExtractor"),ts=n(" to prepare images for the model."),_t=d(),J=o("p"),ss=n("The figure below illustrates the architecture of ResNet. Taken from the "),re=o("a"),os=n("original paper"),as=n("."),vt=d(),ne=o("img"),wt=d(),M=o("p"),rs=n("This model was contributed by "),ie=o("a"),ns=n("Francesco"),is=n(". The original code can be found "),le=o("a"),ls=n("here"),cs=n("."),bt=d(),S=o("h2"),K=o("a"),Be=o("span"),b(ce.$$.fragment),ds=d(),Xe=o("span"),hs=n("ResNetConfig"),yt=d(),w=o("div"),b(de.$$.fragment),fs=d(),D=o("p"),ps=n("This is the configuration class to store the configuration of a "),Fe=o("a"),ms=n("ResNetModel"),us=n(`. It is used to instantiate an
ResNet model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the
`),he=o("a"),gs=n("resnet-50"),_s=n(" architecture."),vs=d(),L=o("p"),ws=n("Configuration objects inherit from "),Ae=o("a"),bs=n("PretrainedConfig"),ys=n(` and can be used to control the model outputs. Read the
documentation from `),Me=o("a"),$s=n("PretrainedConfig"),Ns=n(" for more information."),Rs=d(),Ze=o("p"),Cs=n("Example:"),Es=d(),b(fe.$$.fragment),$t=d(),V=o("h2"),B=o("a"),Qe=o("span"),b(pe.$$.fragment),xs=d(),Ye=o("span"),Ts=n("ResNetModel"),Nt=d(),A=o("div"),b(me.$$.fragment),js=d(),ue=o("p"),ks=n(`The bare ResNet model outputting raw features without any specific head on top.
This model is a PyTorch `),ge=o("a"),Is=n("torch.nn.Module"),Fs=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),As=d(),x=o("div"),b(_e.$$.fragment),Ms=d(),W=o("p"),Ps=n("The "),Pe=o("a"),qs=n("ResNetModel"),Os=n(" forward method, overrides the "),et=o("code"),zs=n("__call__"),Ss=n(" special method."),Ds=d(),b(X.$$.fragment),Ls=d(),tt=o("p"),Vs=n("Example:"),Ws=d(),b(ve.$$.fragment),Rt=d(),H=o("h2"),Z=o("a"),st=o("span"),b(we.$$.fragment),Hs=d(),ot=o("span"),Gs=n("ResNetForImageClassification"),Ct=d(),k=o("div"),b(be.$$.fragment),Us=d(),at=o("p"),Js=n(`ResNet Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),Ks=d(),ye=o("p"),Bs=n("This model is a PyTorch "),$e=o("a"),Xs=n("torch.nn.Module"),Zs=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qs=d(),T=o("div"),b(Ne.$$.fragment),Ys=d(),G=o("p"),eo=n("The "),qe=o("a"),to=n("ResNetForImageClassification"),so=n(" forward method, overrides the "),rt=o("code"),oo=n("__call__"),ao=n(" special method."),ro=d(),b(Q.$$.fragment),no=d(),nt=o("p"),io=n("Example:"),lo=d(),b(Re.$$.fragment),this.h()},l(t){const c=ra('[data-svelte="svelte-1phssyn"]',document.head);p=a(c,"META",{name:!0,content:!0}),c.forEach(s),E=h(t),m=a(t,"H1",{class:!0});var Ce=r(m);u=a(Ce,"A",{id:!0,class:!0,href:!0});var it=r(u);j=a(it,"SPAN",{});var fo=r(j);y(g.$$.fragment,fo),fo.forEach(s),it.forEach(s),_=h(Ce),F=a(Ce,"SPAN",{});var po=r(F);Pt=i(po,"ResNet"),po.forEach(s),Ce.forEach(s),dt=h(t),z=a(t,"H2",{class:!0});var xt=r(z);U=a(xt,"A",{id:!0,class:!0,href:!0});var mo=r(U);We=a(mo,"SPAN",{});var uo=r(We);y(te.$$.fragment,uo),uo.forEach(s),mo.forEach(s),qt=h(xt),He=a(xt,"SPAN",{});var go=r(He);Ot=i(go,"Overview"),go.forEach(s),xt.forEach(s),ht=h(t),v=a(t,"P",{});var I=r(v);zt=i(I,"The ResNet model was proposed in "),se=a(I,"A",{href:!0,rel:!0});var _o=r(se);St=i(_o,"Deep Residual Learning for Image Recognition"),_o.forEach(s),Dt=i(I," by Kaiming He, Xiangyu Zhang, Shaoqing Ren and Jian Sun. Our implementation follows the small changes made by "),oe=a(I,"A",{href:!0,rel:!0});var vo=r(oe);Lt=i(vo,"Nvidia"),vo.forEach(s),Vt=i(I,", we apply the "),Ge=a(I,"CODE",{});var wo=r(Ge);Wt=i(wo,"stride=2"),wo.forEach(s),Ht=i(I," for downsampling in bottleneck\u2019s "),Ue=a(I,"CODE",{});var bo=r(Ue);Gt=i(bo,"3x3"),bo.forEach(s),Ut=i(I," conv and not in the first "),Je=a(I,"CODE",{});var yo=r(Je);Jt=i(yo,"1x1"),yo.forEach(s),Kt=i(I,". This is generally known as \u201CResNet v1.5\u201D."),I.forEach(s),ft=h(t),Ee=a(t,"P",{});var $o=r(Ee);Bt=i($o,"ResNet introduced residual connections, they allow to train networks with an unseen number of layers (up to 1000). ResNet won the 2015 ILSVRC & COCO competition, one important milestone in deep computer vision."),$o.forEach(s),pt=h(t),xe=a(t,"P",{});var No=r(xe);Xt=i(No,"The abstract from the paper is the following:"),No.forEach(s),mt=h(t),Te=a(t,"P",{});var Ro=r(Te);Ke=a(Ro,"EM",{});var Co=r(Ke);Zt=i(Co,`Deeper neural networks are more difficult to train. We present a residual learning framework to ease the training of networks that are substantially deeper than those used previously. We explicitly reformulate the layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions. We provide comprehensive empirical evidence showing that these residual networks are easier to optimize, and can gain accuracy from considerably increased depth. On the ImageNet dataset we evaluate residual nets with a depth of up to 152 layers---8x deeper than VGG nets but still having lower complexity. An ensemble of these residual nets achieves 3.57% error on the ImageNet test set. This result won the 1st place on the ILSVRC 2015 classification task. We also present analysis on CIFAR-10 with 100 and 1000 layers.
The depth of representations is of central importance for many visual recognition tasks. Solely due to our extremely deep representations, we obtain a 28% relative improvement on the COCO object detection dataset. Deep residual nets are foundations of our submissions to ILSVRC & COCO 2015 competitions, where we also won the 1st places on the tasks of ImageNet detection, ImageNet localization, COCO detection, and COCO segmentation.`),Co.forEach(s),Ro.forEach(s),ut=h(t),je=a(t,"P",{});var Eo=r(je);Qt=i(Eo,"Tips:"),Eo.forEach(s),gt=h(t),ke=a(t,"UL",{});var xo=r(ke);ae=a(xo,"LI",{});var Tt=r(ae);Yt=i(Tt,"One can use "),Ie=a(Tt,"A",{href:!0});var To=r(Ie);es=i(To,"AutoFeatureExtractor"),To.forEach(s),ts=i(Tt," to prepare images for the model."),Tt.forEach(s),xo.forEach(s),_t=h(t),J=a(t,"P",{});var jt=r(J);ss=i(jt,"The figure below illustrates the architecture of ResNet. Taken from the "),re=a(jt,"A",{href:!0,rel:!0});var jo=r(re);os=i(jo,"original paper"),jo.forEach(s),as=i(jt,"."),jt.forEach(s),vt=h(t),ne=a(t,"IMG",{width:!0,src:!0}),wt=h(t),M=a(t,"P",{});var Oe=r(M);rs=i(Oe,"This model was contributed by "),ie=a(Oe,"A",{href:!0,rel:!0});var ko=r(ie);ns=i(ko,"Francesco"),ko.forEach(s),is=i(Oe,". The original code can be found "),le=a(Oe,"A",{href:!0,rel:!0});var Io=r(le);ls=i(Io,"here"),Io.forEach(s),cs=i(Oe,"."),Oe.forEach(s),bt=h(t),S=a(t,"H2",{class:!0});var kt=r(S);K=a(kt,"A",{id:!0,class:!0,href:!0});var Fo=r(K);Be=a(Fo,"SPAN",{});var Ao=r(Be);y(ce.$$.fragment,Ao),Ao.forEach(s),Fo.forEach(s),ds=h(kt),Xe=a(kt,"SPAN",{});var Mo=r(Xe);hs=i(Mo,"ResNetConfig"),Mo.forEach(s),kt.forEach(s),yt=h(t),w=a(t,"DIV",{class:!0});var P=r(w);y(de.$$.fragment,P),fs=h(P),D=a(P,"P",{});var ze=r(D);ps=i(ze,"This is the configuration class to store the configuration of a "),Fe=a(ze,"A",{href:!0});var Po=r(Fe);ms=i(Po,"ResNetModel"),Po.forEach(s),us=i(ze,`. It is used to instantiate an
ResNet model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the
`),he=a(ze,"A",{href:!0,rel:!0});var qo=r(he);gs=i(qo,"resnet-50"),qo.forEach(s),_s=i(ze," architecture."),ze.forEach(s),vs=h(P),L=a(P,"P",{});var Se=r(L);ws=i(Se,"Configuration objects inherit from "),Ae=a(Se,"A",{href:!0});var Oo=r(Ae);bs=i(Oo,"PretrainedConfig"),Oo.forEach(s),ys=i(Se,` and can be used to control the model outputs. Read the
documentation from `),Me=a(Se,"A",{href:!0});var zo=r(Me);$s=i(zo,"PretrainedConfig"),zo.forEach(s),Ns=i(Se," for more information."),Se.forEach(s),Rs=h(P),Ze=a(P,"P",{});var So=r(Ze);Cs=i(So,"Example:"),So.forEach(s),Es=h(P),y(fe.$$.fragment,P),P.forEach(s),$t=h(t),V=a(t,"H2",{class:!0});var It=r(V);B=a(It,"A",{id:!0,class:!0,href:!0});var Do=r(B);Qe=a(Do,"SPAN",{});var Lo=r(Qe);y(pe.$$.fragment,Lo),Lo.forEach(s),Do.forEach(s),xs=h(It),Ye=a(It,"SPAN",{});var Vo=r(Ye);Ts=i(Vo,"ResNetModel"),Vo.forEach(s),It.forEach(s),Nt=h(t),A=a(t,"DIV",{class:!0});var De=r(A);y(me.$$.fragment,De),js=h(De),ue=a(De,"P",{});var Ft=r(ue);ks=i(Ft,`The bare ResNet model outputting raw features without any specific head on top.
This model is a PyTorch `),ge=a(Ft,"A",{href:!0,rel:!0});var Wo=r(ge);Is=i(Wo,"torch.nn.Module"),Wo.forEach(s),Fs=i(Ft,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ft.forEach(s),As=h(De),x=a(De,"DIV",{class:!0});var q=r(x);y(_e.$$.fragment,q),Ms=h(q),W=a(q,"P",{});var Le=r(W);Ps=i(Le,"The "),Pe=a(Le,"A",{href:!0});var Ho=r(Pe);qs=i(Ho,"ResNetModel"),Ho.forEach(s),Os=i(Le," forward method, overrides the "),et=a(Le,"CODE",{});var Go=r(et);zs=i(Go,"__call__"),Go.forEach(s),Ss=i(Le," special method."),Le.forEach(s),Ds=h(q),y(X.$$.fragment,q),Ls=h(q),tt=a(q,"P",{});var Uo=r(tt);Vs=i(Uo,"Example:"),Uo.forEach(s),Ws=h(q),y(ve.$$.fragment,q),q.forEach(s),De.forEach(s),Rt=h(t),H=a(t,"H2",{class:!0});var At=r(H);Z=a(At,"A",{id:!0,class:!0,href:!0});var Jo=r(Z);st=a(Jo,"SPAN",{});var Ko=r(st);y(we.$$.fragment,Ko),Ko.forEach(s),Jo.forEach(s),Hs=h(At),ot=a(At,"SPAN",{});var Bo=r(ot);Gs=i(Bo,"ResNetForImageClassification"),Bo.forEach(s),At.forEach(s),Ct=h(t),k=a(t,"DIV",{class:!0});var Y=r(k);y(be.$$.fragment,Y),Us=h(Y),at=a(Y,"P",{});var Xo=r(at);Js=i(Xo,`ResNet Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),Xo.forEach(s),Ks=h(Y),ye=a(Y,"P",{});var Mt=r(ye);Bs=i(Mt,"This model is a PyTorch "),$e=a(Mt,"A",{href:!0,rel:!0});var Zo=r($e);Xs=i(Zo,"torch.nn.Module"),Zo.forEach(s),Zs=i(Mt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Mt.forEach(s),Qs=h(Y),T=a(Y,"DIV",{class:!0});var O=r(T);y(Ne.$$.fragment,O),Ys=h(O),G=a(O,"P",{});var Ve=r(G);eo=i(Ve,"The "),qe=a(Ve,"A",{href:!0});var Qo=r(qe);to=i(Qo,"ResNetForImageClassification"),Qo.forEach(s),so=i(Ve," forward method, overrides the "),rt=a(Ve,"CODE",{});var Yo=r(rt);oo=i(Yo,"__call__"),Yo.forEach(s),ao=i(Ve," special method."),Ve.forEach(s),ro=h(O),y(Q.$$.fragment,O),no=h(O),nt=a(O,"P",{});var ea=r(nt);io=i(ea,"Example:"),ea.forEach(s),lo=h(O),y(Re.$$.fragment,O),O.forEach(s),Y.forEach(s),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(da)),l(u,"id","resnet"),l(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(u,"href","#resnet"),l(m,"class","relative group"),l(U,"id","overview"),l(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(U,"href","#overview"),l(z,"class","relative group"),l(se,"href","https://arxiv.org/abs/1512.03385"),l(se,"rel","nofollow"),l(oe,"href","https://catalog.ngc.nvidia.com/orgs/nvidia/resources/resnet_50_v1_5_for_pytorch"),l(oe,"rel","nofollow"),l(Ie,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor"),l(re,"href","https://arxiv.org/abs/1512.03385"),l(re,"rel","nofollow"),l(ne,"width","600"),na(ne.src,ho="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/resnet_architecture.png")||l(ne,"src",ho),l(ie,"href","https://huggingface.co/Francesco"),l(ie,"rel","nofollow"),l(le,"href","https://github.com/KaimingHe/deep-residual-networks"),l(le,"rel","nofollow"),l(K,"id","transformers.ResNetConfig"),l(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(K,"href","#transformers.ResNetConfig"),l(S,"class","relative group"),l(Fe,"href","/docs/transformers/main/en/model_doc/resnet#transformers.ResNetModel"),l(he,"href","https://huggingface.co/microsoft/resnet-50"),l(he,"rel","nofollow"),l(Ae,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(Me,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(w,"class","docstring"),l(B,"id","transformers.ResNetModel"),l(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(B,"href","#transformers.ResNetModel"),l(V,"class","relative group"),l(ge,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ge,"rel","nofollow"),l(Pe,"href","/docs/transformers/main/en/model_doc/resnet#transformers.ResNetModel"),l(x,"class","docstring"),l(A,"class","docstring"),l(Z,"id","transformers.ResNetForImageClassification"),l(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Z,"href","#transformers.ResNetForImageClassification"),l(H,"class","relative group"),l($e,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l($e,"rel","nofollow"),l(qe,"href","/docs/transformers/main/en/model_doc/resnet#transformers.ResNetForImageClassification"),l(T,"class","docstring"),l(k,"class","docstring")},m(t,c){e(document.head,p),f(t,E,c),f(t,m,c),e(m,u),e(u,j),$(g,j,null),e(m,_),e(m,F),e(F,Pt),f(t,dt,c),f(t,z,c),e(z,U),e(U,We),$(te,We,null),e(z,qt),e(z,He),e(He,Ot),f(t,ht,c),f(t,v,c),e(v,zt),e(v,se),e(se,St),e(v,Dt),e(v,oe),e(oe,Lt),e(v,Vt),e(v,Ge),e(Ge,Wt),e(v,Ht),e(v,Ue),e(Ue,Gt),e(v,Ut),e(v,Je),e(Je,Jt),e(v,Kt),f(t,ft,c),f(t,Ee,c),e(Ee,Bt),f(t,pt,c),f(t,xe,c),e(xe,Xt),f(t,mt,c),f(t,Te,c),e(Te,Ke),e(Ke,Zt),f(t,ut,c),f(t,je,c),e(je,Qt),f(t,gt,c),f(t,ke,c),e(ke,ae),e(ae,Yt),e(ae,Ie),e(Ie,es),e(ae,ts),f(t,_t,c),f(t,J,c),e(J,ss),e(J,re),e(re,os),e(J,as),f(t,vt,c),f(t,ne,c),f(t,wt,c),f(t,M,c),e(M,rs),e(M,ie),e(ie,ns),e(M,is),e(M,le),e(le,ls),e(M,cs),f(t,bt,c),f(t,S,c),e(S,K),e(K,Be),$(ce,Be,null),e(S,ds),e(S,Xe),e(Xe,hs),f(t,yt,c),f(t,w,c),$(de,w,null),e(w,fs),e(w,D),e(D,ps),e(D,Fe),e(Fe,ms),e(D,us),e(D,he),e(he,gs),e(D,_s),e(w,vs),e(w,L),e(L,ws),e(L,Ae),e(Ae,bs),e(L,ys),e(L,Me),e(Me,$s),e(L,Ns),e(w,Rs),e(w,Ze),e(Ze,Cs),e(w,Es),$(fe,w,null),f(t,$t,c),f(t,V,c),e(V,B),e(B,Qe),$(pe,Qe,null),e(V,xs),e(V,Ye),e(Ye,Ts),f(t,Nt,c),f(t,A,c),$(me,A,null),e(A,js),e(A,ue),e(ue,ks),e(ue,ge),e(ge,Is),e(ue,Fs),e(A,As),e(A,x),$(_e,x,null),e(x,Ms),e(x,W),e(W,Ps),e(W,Pe),e(Pe,qs),e(W,Os),e(W,et),e(et,zs),e(W,Ss),e(x,Ds),$(X,x,null),e(x,Ls),e(x,tt),e(tt,Vs),e(x,Ws),$(ve,x,null),f(t,Rt,c),f(t,H,c),e(H,Z),e(Z,st),$(we,st,null),e(H,Hs),e(H,ot),e(ot,Gs),f(t,Ct,c),f(t,k,c),$(be,k,null),e(k,Us),e(k,at),e(at,Js),e(k,Ks),e(k,ye),e(ye,Bs),e(ye,$e),e($e,Xs),e(ye,Zs),e(k,Qs),e(k,T),$(Ne,T,null),e(T,Ys),e(T,G),e(G,eo),e(G,qe),e(qe,to),e(G,so),e(G,rt),e(rt,oo),e(G,ao),e(T,ro),$(Q,T,null),e(T,no),e(T,nt),e(nt,io),e(T,lo),$(Re,T,null),Et=!0},p(t,[c]){const Ce={};c&2&&(Ce.$$scope={dirty:c,ctx:t}),X.$set(Ce);const it={};c&2&&(it.$$scope={dirty:c,ctx:t}),Q.$set(it)},i(t){Et||(N(g.$$.fragment,t),N(te.$$.fragment,t),N(ce.$$.fragment,t),N(de.$$.fragment,t),N(fe.$$.fragment,t),N(pe.$$.fragment,t),N(me.$$.fragment,t),N(_e.$$.fragment,t),N(X.$$.fragment,t),N(ve.$$.fragment,t),N(we.$$.fragment,t),N(be.$$.fragment,t),N(Ne.$$.fragment,t),N(Q.$$.fragment,t),N(Re.$$.fragment,t),Et=!0)},o(t){R(g.$$.fragment,t),R(te.$$.fragment,t),R(ce.$$.fragment,t),R(de.$$.fragment,t),R(fe.$$.fragment,t),R(pe.$$.fragment,t),R(me.$$.fragment,t),R(_e.$$.fragment,t),R(X.$$.fragment,t),R(ve.$$.fragment,t),R(we.$$.fragment,t),R(be.$$.fragment,t),R(Ne.$$.fragment,t),R(Q.$$.fragment,t),R(Re.$$.fragment,t),Et=!1},d(t){s(p),t&&s(E),t&&s(m),C(g),t&&s(dt),t&&s(z),C(te),t&&s(ht),t&&s(v),t&&s(ft),t&&s(Ee),t&&s(pt),t&&s(xe),t&&s(mt),t&&s(Te),t&&s(ut),t&&s(je),t&&s(gt),t&&s(ke),t&&s(_t),t&&s(J),t&&s(vt),t&&s(ne),t&&s(wt),t&&s(M),t&&s(bt),t&&s(S),C(ce),t&&s(yt),t&&s(w),C(de),C(fe),t&&s($t),t&&s(V),C(pe),t&&s(Nt),t&&s(A),C(me),C(_e),C(X),C(ve),t&&s(Rt),t&&s(H),C(we),t&&s(Ct),t&&s(k),C(be),C(Ne),C(Q),C(Re)}}}const da={local:"resnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.ResNetConfig",title:"ResNetConfig"},{local:"transformers.ResNetModel",title:"ResNetModel"},{local:"transformers.ResNetForImageClassification",title:"ResNetForImageClassification"}],title:"ResNet"};function ha(ee,p,E){let{fw:m}=p;return ee.$$set=u=>{"fw"in u&&E(0,m=u.fw)},[m]}class _a extends sa{constructor(p){super();oa(this,p,ha,ca,aa,{fw:0})}}export{_a as default,da as metadata};
