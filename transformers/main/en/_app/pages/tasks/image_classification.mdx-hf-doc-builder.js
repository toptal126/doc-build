import{S as Ct,i as qt,s as Pt,e as o,k as c,w,t as l,M as zt,c as n,d as a,m as u,a as i,x as y,h as r,b as d,G as t,g as p,y as k,q as E,o as x,B as T,v as Dt}from"../../chunks/vendor-hf-doc-builder.js";import{T as tt}from"../../chunks/Tip-hf-doc-builder.js";import{Y as Ft}from"../../chunks/Youtube-hf-doc-builder.js";import{I as Fa}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as H}from"../../chunks/CodeBlock-hf-doc-builder.js";import{F as It,M as St}from"../../chunks/Markdown-hf-doc-builder.js";function Lt(O){let m,b,f,_,j;return{c(){m=o("p"),b=l("See the image classification "),f=o("a"),_=l("task page"),j=l(" for more information about its associated models, datasets, and metrics."),this.h()},l(g){m=n(g,"P",{});var $=i(m);b=r($,"See the image classification "),f=n($,"A",{href:!0,rel:!0});var A=i(f);_=r(A,"task page"),A.forEach(a),j=r($," for more information about its associated models, datasets, and metrics."),$.forEach(a),this.h()},h(){d(f,"href","https://huggingface.co/tasks/image-classification"),d(f,"rel","nofollow")},m(g,$){p(g,m,$),t(m,b),t(m,f),t(f,_),t(m,j)},d(g){g&&a(m)}}}function Nt(O){let m,b,f,_,j,g,$,A;return{c(){m=o("p"),b=l("If you aren\u2019t familiar with fine-tuning a model with the "),f=o("a"),_=l("Trainer"),j=l(", take a look at the basic tutorial "),g=o("a"),$=l("here"),A=l("!"),this.h()},l(q){m=n(q,"P",{});var P=i(m);b=r(P,"If you aren\u2019t familiar with fine-tuning a model with the "),f=n(P,"A",{href:!0});var D=i(f);_=r(D,"Trainer"),D.forEach(a),j=r(P,", take a look at the basic tutorial "),g=n(P,"A",{href:!0});var V=i(g);$=r(V,"here"),V.forEach(a),A=r(P,"!"),P.forEach(a),this.h()},h(){d(f,"href","/docs/transformers/main/en/main_classes/trainer#transformers.Trainer"),d(g,"href","../training#finetune-with-trainer")},m(q,P){p(q,m,P),t(m,b),t(m,f),t(f,_),t(m,j),t(m,g),t(g,$),t(m,A)},d(q){q&&a(m)}}}function Mt(O){let m,b,f,_,j,g,$,A,q,P,D,V,G,F,C,I,ee,J,Pe,ne,Y,ze,ie,ge,R,ae,L,U,W,K,De,pe,Q,_e,N,Fe,$e,X,B,te,se,ve,Z,me,S,be;return $=new H({props:{code:`from transformers import AutoModelForImageClassification, TrainingArguments, Trainer

model = AutoModelForImageClassification.from_pretrained(
    "google/vit-base-patch16-224-in21k",
    num_labels=len(labels),
    id2label=id2label,
    label2id=label2id,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForImageClassification, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForImageClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>,
<span class="hljs-meta">... </span>    num_labels=<span class="hljs-built_in">len</span>(labels),
<span class="hljs-meta">... </span>    id2label=id2label,
<span class="hljs-meta">... </span>    label2id=label2id,
<span class="hljs-meta">... </span>)`}}),q=new tt({props:{$$slots:{default:[Nt]},$$scope:{ctx:O}}}),S=new H({props:{code:`training_args = TrainingArguments(
    output_dir="./results",
    per_device_train_batch_size=16,
    evaluation_strategy="steps",
    num_train_epochs=4,
    fp16=True,
    save_steps=100,
    eval_steps=100,
    logging_steps=10,
    learning_rate=2e-4,
    save_total_limit=2,
    remove_unused_columns=False,
)

trainer = Trainer(
    model=model,
    args=training_args,
    data_collator=data_collator,
    train_dataset=food["train"],
    eval_dataset=food["test"],
    tokenizer=feature_extractor,
)

trainer.train()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = TrainingArguments(
<span class="hljs-meta">... </span>    output_dir=<span class="hljs-string">&quot;./results&quot;</span>,
<span class="hljs-meta">... </span>    per_device_train_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    evaluation_strategy=<span class="hljs-string">&quot;steps&quot;</span>,
<span class="hljs-meta">... </span>    num_train_epochs=<span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>    fp16=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    save_steps=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>    eval_steps=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>    logging_steps=<span class="hljs-number">10</span>,
<span class="hljs-meta">... </span>    learning_rate=<span class="hljs-number">2e-4</span>,
<span class="hljs-meta">... </span>    save_total_limit=<span class="hljs-number">2</span>,
<span class="hljs-meta">... </span>    remove_unused_columns=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Trainer(
<span class="hljs-meta">... </span>    model=model,
<span class="hljs-meta">... </span>    args=training_args,
<span class="hljs-meta">... </span>    data_collator=data_collator,
<span class="hljs-meta">... </span>    train_dataset=food[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    eval_dataset=food[<span class="hljs-string">&quot;test&quot;</span>],
<span class="hljs-meta">... </span>    tokenizer=feature_extractor,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),{c(){m=o("p"),b=l("Load ViT with "),f=o("a"),_=l("AutoModelForImageClassification"),j=l(". Specify the number of labels, and pass the model the mapping between label number and label class:"),g=c(),w($.$$.fragment),A=c(),w(q.$$.fragment),P=c(),D=o("p"),V=l("At this point, only three steps remain:"),G=c(),F=o("ol"),C=o("li"),I=l("Define your training hyperparameters in "),ee=o("a"),J=l("TrainingArguments"),Pe=l(". It is important you don\u2019t remove unused columns because this will drop the "),ne=o("code"),Y=l("image"),ze=l(" column. Without the "),ie=o("code"),ge=l("image"),R=l(" column, you can\u2019t create "),ae=o("code"),L=l("pixel_values"),U=l(". Set "),W=o("code"),K=l("remove_unused_columns=False"),De=l(" to prevent this behavior!"),pe=c(),Q=o("li"),_e=l("Pass the training arguments to "),N=o("a"),Fe=l("Trainer"),$e=l(" along with the model, datasets, tokenizer, and data collator."),X=c(),B=o("li"),te=l("Call "),se=o("a"),ve=l("train()"),Z=l(" to fine-tune your model."),me=c(),w(S.$$.fragment),this.h()},l(h){m=n(h,"P",{});var v=i(m);b=r(v,"Load ViT with "),f=n(v,"A",{href:!0});var le=i(f);_=r(le,"AutoModelForImageClassification"),le.forEach(a),j=r(v,". Specify the number of labels, and pass the model the mapping between label number and label class:"),v.forEach(a),g=u(h),y($.$$.fragment,h),A=u(h),y(q.$$.fragment,h),P=u(h),D=n(h,"P",{});var M=i(D);V=r(M,"At this point, only three steps remain:"),M.forEach(a),G=u(h),F=n(h,"OL",{});var re=i(F);C=n(re,"LI",{});var z=i(C);I=r(z,"Define your training hyperparameters in "),ee=n(z,"A",{href:!0});var Ge=i(ee);J=r(Ge,"TrainingArguments"),Ge.forEach(a),Pe=r(z,". It is important you don\u2019t remove unused columns because this will drop the "),ne=n(z,"CODE",{});var Je=i(ne);Y=r(Je,"image"),Je.forEach(a),ze=r(z," column. Without the "),ie=n(z,"CODE",{});var je=i(ie);ge=r(je,"image"),je.forEach(a),R=r(z," column, you can\u2019t create "),ae=n(z,"CODE",{});var Ye=i(ae);L=r(Ye,"pixel_values"),Ye.forEach(a),U=r(z,". Set "),W=n(z,"CODE",{});var We=i(W);K=r(We,"remove_unused_columns=False"),We.forEach(a),De=r(z," to prevent this behavior!"),z.forEach(a),pe=u(re),Q=n(re,"LI",{});var fe=i(Q);_e=r(fe,"Pass the training arguments to "),N=n(fe,"A",{href:!0});var oe=i(N);Fe=r(oe,"Trainer"),oe.forEach(a),$e=r(fe," along with the model, datasets, tokenizer, and data collator."),fe.forEach(a),X=u(re),B=n(re,"LI",{});var he=i(B);te=r(he,"Call "),se=n(he,"A",{href:!0});var ce=i(se);ve=r(ce,"train()"),ce.forEach(a),Z=r(he," to fine-tune your model."),he.forEach(a),re.forEach(a),me=u(h),y(S.$$.fragment,h),this.h()},h(){d(f,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoModelForImageClassification"),d(ee,"href","/docs/transformers/main/en/main_classes/trainer#transformers.TrainingArguments"),d(N,"href","/docs/transformers/main/en/main_classes/trainer#transformers.Trainer"),d(se,"href","/docs/transformers/main/en/main_classes/trainer#transformers.Trainer.train")},m(h,v){p(h,m,v),t(m,b),t(m,f),t(f,_),t(m,j),p(h,g,v),k($,h,v),p(h,A,v),k(q,h,v),p(h,P,v),p(h,D,v),t(D,V),p(h,G,v),p(h,F,v),t(F,C),t(C,I),t(C,ee),t(ee,J),t(C,Pe),t(C,ne),t(ne,Y),t(C,ze),t(C,ie),t(ie,ge),t(C,R),t(C,ae),t(ae,L),t(C,U),t(C,W),t(W,K),t(C,De),t(F,pe),t(F,Q),t(Q,_e),t(Q,N),t(N,Fe),t(Q,$e),t(F,X),t(F,B),t(B,te),t(B,se),t(se,ve),t(B,Z),p(h,me,v),k(S,h,v),be=!0},p(h,v){const le={};v&2&&(le.$$scope={dirty:v,ctx:h}),q.$set(le)},i(h){be||(E($.$$.fragment,h),E(q.$$.fragment,h),E(S.$$.fragment,h),be=!0)},o(h){x($.$$.fragment,h),x(q.$$.fragment,h),x(S.$$.fragment,h),be=!1},d(h){h&&a(m),h&&a(g),T($,h),h&&a(A),T(q,h),h&&a(P),h&&a(D),h&&a(G),h&&a(F),h&&a(me),T(S,h)}}}function Ot(O){let m,b;return m=new St({props:{$$slots:{default:[Mt]},$$scope:{ctx:O}}}),{c(){w(m.$$.fragment)},l(f){y(m.$$.fragment,f)},m(f,_){k(m,f,_),b=!0},p(f,_){const j={};_&2&&(j.$$scope={dirty:_,ctx:f}),m.$set(j)},i(f){b||(E(m.$$.fragment,f),b=!0)},o(f){x(m.$$.fragment,f),b=!1},d(f){T(m,f)}}}function Rt(O){let m,b,f,_,j;return{c(){m=o("p"),b=l("For a more in-depth example of how to fine-tune a model for image classification, take a look at the corresponding "),f=o("a"),_=l("PyTorch notebook"),j=l("."),this.h()},l(g){m=n(g,"P",{});var $=i(m);b=r($,"For a more in-depth example of how to fine-tune a model for image classification, take a look at the corresponding "),f=n($,"A",{href:!0,rel:!0});var A=i(f);_=r(A,"PyTorch notebook"),A.forEach(a),j=r($,"."),$.forEach(a),this.h()},h(){d(f,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/image_classification.ipynb"),d(f,"rel","nofollow")},m(g,$){p(g,m,$),t(m,b),t(m,f),t(f,_),t(m,j)},d(g){g&&a(m)}}}function Ut(O){let m,b,f,_,j,g,$,A,q,P,D,V,G,F,C,I,ee,J,Pe,ne,Y,ze,ie,ge,R,ae,L,U,W,K,De,pe,Q,_e,N,Fe,$e,X,B,te,se,ve,Z,me,S,be,h,v,le,M,re,z,Ge,Je,je,Ye,We,fe,oe,he,ce,Ia,pa,Ie,ma,we,Sa,ea,La,Na,fa,ue,ye,aa,Se,Ma,ta,Oa,ha,Ke,Ra,ca,Le,ua,ke,Ua,Ne,sa,Ba,Ha,da,Me,ga,Ee,Va,la,Ga,Ja,_a,Oe,$a,xe,Ya,Re,Wa,Ka,va,Ue,ba,Te,Qa,Qe,Xa,Za,ja,Be,wa,de,Ae,ra,He,et,oa,at,ya,Ce,ka,qe,Ea;return g=new Fa({}),D=new Ft({props:{id:"tjAIM7BOYhw"}}),R=new tt({props:{$$slots:{default:[Lt]},$$scope:{ctx:O}}}),K=new Fa({}),X=new H({props:{code:`from datasets import load_dataset

food = load_dataset("food101", split="train[:5000]")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>food = load_dataset(<span class="hljs-string">&quot;food101&quot;</span>, split=<span class="hljs-string">&quot;train[:5000]&quot;</span>)`}}),Z=new H({props:{code:"food = food.train_test_split(test_size=0.2)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>food = food.train_test_split(test_size=<span class="hljs-number">0.2</span>)'}}),v=new H({props:{code:'food["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>food[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;image&#x27;</span>: &lt;PIL.JpegImagePlugin.JpegImageFile image mode=RGB size=512x512 at <span class="hljs-number">0x7F52AFC8AC50</span>&gt;,
 <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-number">79</span>}`}}),oe=new H({props:{code:`labels = food["train"].features["label"].names
label2id, id2label = dict(), dict()
for i, label in enumerate(labels):
    label2id[label] = str(i)
    id2label[str(i)] = label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = food[<span class="hljs-string">&quot;train&quot;</span>].features[<span class="hljs-string">&quot;label&quot;</span>].names
<span class="hljs-meta">&gt;&gt;&gt; </span>label2id, id2label = <span class="hljs-built_in">dict</span>(), <span class="hljs-built_in">dict</span>()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i, label <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(labels):
<span class="hljs-meta">... </span>    label2id[label] = <span class="hljs-built_in">str</span>(i)
<span class="hljs-meta">... </span>    id2label[<span class="hljs-built_in">str</span>(i)] = label`}}),Ie=new H({props:{code:"id2label[str(79)]",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>id2label[<span class="hljs-built_in">str</span>(<span class="hljs-number">79</span>)]
<span class="hljs-string">&#x27;prime_rib&#x27;</span>`}}),Se=new Fa({}),Le=new H({props:{code:`from transformers import AutoFeatureExtractor

feature_extractor = AutoFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)`}}),Me=new H({props:{code:`from torchvision.transforms import RandomResizedCrop, Compose, Normalize, ToTensor

normalize = Normalize(mean=feature_extractor.image_mean, std=feature_extractor.image_std)
size = (
    feature_extractor.size["shortest_edge"]
    if "shortest_edge" in feature_extractor.size
    else (feature_extractor.size["height"], feature_extractor.size["width"])
)
_transforms = Compose([RandomResizedCrop(size), ToTensor(), normalize])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> torchvision.transforms <span class="hljs-keyword">import</span> RandomResizedCrop, Compose, Normalize, ToTensor

<span class="hljs-meta">&gt;&gt;&gt; </span>normalize = Normalize(mean=feature_extractor.image_mean, std=feature_extractor.image_std)
<span class="hljs-meta">&gt;&gt;&gt; </span>size = (
<span class="hljs-meta">... </span>    feature_extractor.size[<span class="hljs-string">&quot;shortest_edge&quot;</span>]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;shortest_edge&quot;</span> <span class="hljs-keyword">in</span> feature_extractor.size
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span> (feature_extractor.size[<span class="hljs-string">&quot;height&quot;</span>], feature_extractor.size[<span class="hljs-string">&quot;width&quot;</span>])
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>_transforms = Compose([RandomResizedCrop(size), ToTensor(), normalize])`}}),Oe=new H({props:{code:`def transforms(examples):
    examples["pixel_values"] = [_transforms(img.convert("RGB")) for img in examples["image"]]
    del examples["image"]
    return examples`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">transforms</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    examples[<span class="hljs-string">&quot;pixel_values&quot;</span>] = [_transforms(img.convert(<span class="hljs-string">&quot;RGB&quot;</span>)) <span class="hljs-keyword">for</span> img <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;image&quot;</span>]]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">del</span> examples[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> examples`}}),Ue=new H({props:{code:"food = food.with_transform(transforms)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>food = food.with_transform(transforms)'}}),Be=new H({props:{code:`from transformers import DefaultDataCollator

data_collator = DefaultDataCollator()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DefaultDataCollator

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DefaultDataCollator()`}}),He=new Fa({}),Ce=new It({props:{pytorch:!0,tensorflow:!1,jax:!1,$$slots:{pytorch:[Ot]},$$scope:{ctx:O}}}),qe=new tt({props:{$$slots:{default:[Rt]},$$scope:{ctx:O}}}),{c(){m=o("meta"),b=c(),f=o("h1"),_=o("a"),j=o("span"),w(g.$$.fragment),$=c(),A=o("span"),q=l("Image classification"),P=c(),w(D.$$.fragment),V=c(),G=o("p"),F=l("Image classification assigns a label or class to an image. Unlike text or audio classification, the inputs are the pixel values that represent an image. There are many uses for image classification, like detecting damage after a disaster, monitoring crop health, or helping screen medical images for signs of disease."),C=c(),I=o("p"),ee=l("This guide will show you how to fine-tune "),J=o("a"),Pe=l("ViT"),ne=l(" on the "),Y=o("a"),ze=l("Food-101"),ie=l(" dataset to classify a food item in an image."),ge=c(),w(R.$$.fragment),ae=c(),L=o("h2"),U=o("a"),W=o("span"),w(K.$$.fragment),De=c(),pe=o("span"),Q=l("Load Food-101 dataset"),_e=c(),N=o("p"),Fe=l("Load only the first 5000 images of the Food-101 dataset from the \u{1F917} Datasets library since it is pretty large:"),$e=c(),w(X.$$.fragment),B=c(),te=o("p"),se=l("Split this dataset into a train and test set:"),ve=c(),w(Z.$$.fragment),me=c(),S=o("p"),be=l("Then take a look at an example:"),h=c(),w(v.$$.fragment),le=c(),M=o("p"),re=l("The "),z=o("code"),Ge=l("image"),Je=l(" field contains a PIL image, and each "),je=o("code"),Ye=l("label"),We=l(" is an integer that represents a class. Create a dictionary that maps a label name to an integer and vice versa. The mapping will help the model recover the label name from the label number:"),fe=c(),w(oe.$$.fragment),he=c(),ce=o("p"),Ia=l("Now you can convert the label number to a label name for more information:"),pa=c(),w(Ie.$$.fragment),ma=c(),we=o("p"),Sa=l("Each food class - or label - corresponds to a number; "),ea=o("code"),La=l("79"),Na=l(" indicates a prime rib in the example above."),fa=c(),ue=o("h2"),ye=o("a"),aa=o("span"),w(Se.$$.fragment),Ma=c(),ta=o("span"),Oa=l("Preprocess"),ha=c(),Ke=o("p"),Ra=l("Load the ViT feature extractor to process the image into a tensor:"),ca=c(),w(Le.$$.fragment),ua=c(),ke=o("p"),Ua=l("Apply several image transformations to the dataset to make the model more robust against overfitting. Here you\u2019ll use torchvision\u2019s "),Ne=o("a"),sa=o("code"),Ba=l("transforms"),Ha=l(" module. Crop a random part of the image, resize it, and normalize it with the image mean and standard deviation:"),da=c(),w(Me.$$.fragment),ga=c(),Ee=o("p"),Va=l("Create a preprocessing function that will apply the transforms and return the "),la=o("code"),Ga=l("pixel_values"),Ja=l(" - the inputs to the model - of the image:"),_a=c(),w(Oe.$$.fragment),$a=c(),xe=o("p"),Ya=l("Use \u{1F917} Dataset\u2019s "),Re=o("a"),Wa=l("with_transform"),Ka=l(" method to apply the transforms over the entire dataset. The transforms are applied on-the-fly when you load an element of the dataset:"),va=c(),w(Ue.$$.fragment),ba=c(),Te=o("p"),Qa=l("Use "),Qe=o("a"),Xa=l("DefaultDataCollator"),Za=l(" to create a batch of examples. Unlike other data collators in \u{1F917} Transformers, the DefaultDataCollator does not apply additional preprocessing such as padding."),ja=c(),w(Be.$$.fragment),wa=c(),de=o("h2"),Ae=o("a"),ra=o("span"),w(He.$$.fragment),et=c(),oa=o("span"),at=l("Train"),ya=c(),w(Ce.$$.fragment),ka=c(),w(qe.$$.fragment),this.h()},l(e){const s=zt('[data-svelte="svelte-1phssyn"]',document.head);m=n(s,"META",{name:!0,content:!0}),s.forEach(a),b=u(e),f=n(e,"H1",{class:!0});var Ve=i(f);_=n(Ve,"A",{id:!0,class:!0,href:!0});var na=i(_);j=n(na,"SPAN",{});var ia=i(j);y(g.$$.fragment,ia),ia.forEach(a),na.forEach(a),$=u(Ve),A=n(Ve,"SPAN",{});var st=i(A);q=r(st,"Image classification"),st.forEach(a),Ve.forEach(a),P=u(e),y(D.$$.fragment,e),V=u(e),G=n(e,"P",{});var lt=i(G);F=r(lt,"Image classification assigns a label or class to an image. Unlike text or audio classification, the inputs are the pixel values that represent an image. There are many uses for image classification, like detecting damage after a disaster, monitoring crop health, or helping screen medical images for signs of disease."),lt.forEach(a),C=u(e),I=n(e,"P",{});var Xe=i(I);ee=r(Xe,"This guide will show you how to fine-tune "),J=n(Xe,"A",{href:!0,rel:!0});var rt=i(J);Pe=r(rt,"ViT"),rt.forEach(a),ne=r(Xe," on the "),Y=n(Xe,"A",{href:!0,rel:!0});var ot=i(Y);ze=r(ot,"Food-101"),ot.forEach(a),ie=r(Xe," dataset to classify a food item in an image."),Xe.forEach(a),ge=u(e),y(R.$$.fragment,e),ae=u(e),L=n(e,"H2",{class:!0});var xa=i(L);U=n(xa,"A",{id:!0,class:!0,href:!0});var nt=i(U);W=n(nt,"SPAN",{});var it=i(W);y(K.$$.fragment,it),it.forEach(a),nt.forEach(a),De=u(xa),pe=n(xa,"SPAN",{});var pt=i(pe);Q=r(pt,"Load Food-101 dataset"),pt.forEach(a),xa.forEach(a),_e=u(e),N=n(e,"P",{});var mt=i(N);Fe=r(mt,"Load only the first 5000 images of the Food-101 dataset from the \u{1F917} Datasets library since it is pretty large:"),mt.forEach(a),$e=u(e),y(X.$$.fragment,e),B=u(e),te=n(e,"P",{});var ft=i(te);se=r(ft,"Split this dataset into a train and test set:"),ft.forEach(a),ve=u(e),y(Z.$$.fragment,e),me=u(e),S=n(e,"P",{});var ht=i(S);be=r(ht,"Then take a look at an example:"),ht.forEach(a),h=u(e),y(v.$$.fragment,e),le=u(e),M=n(e,"P",{});var Ze=i(M);re=r(Ze,"The "),z=n(Ze,"CODE",{});var ct=i(z);Ge=r(ct,"image"),ct.forEach(a),Je=r(Ze," field contains a PIL image, and each "),je=n(Ze,"CODE",{});var ut=i(je);Ye=r(ut,"label"),ut.forEach(a),We=r(Ze," is an integer that represents a class. Create a dictionary that maps a label name to an integer and vice versa. The mapping will help the model recover the label name from the label number:"),Ze.forEach(a),fe=u(e),y(oe.$$.fragment,e),he=u(e),ce=n(e,"P",{});var dt=i(ce);Ia=r(dt,"Now you can convert the label number to a label name for more information:"),dt.forEach(a),pa=u(e),y(Ie.$$.fragment,e),ma=u(e),we=n(e,"P",{});var Ta=i(we);Sa=r(Ta,"Each food class - or label - corresponds to a number; "),ea=n(Ta,"CODE",{});var gt=i(ea);La=r(gt,"79"),gt.forEach(a),Na=r(Ta," indicates a prime rib in the example above."),Ta.forEach(a),fa=u(e),ue=n(e,"H2",{class:!0});var Aa=i(ue);ye=n(Aa,"A",{id:!0,class:!0,href:!0});var _t=i(ye);aa=n(_t,"SPAN",{});var $t=i(aa);y(Se.$$.fragment,$t),$t.forEach(a),_t.forEach(a),Ma=u(Aa),ta=n(Aa,"SPAN",{});var vt=i(ta);Oa=r(vt,"Preprocess"),vt.forEach(a),Aa.forEach(a),ha=u(e),Ke=n(e,"P",{});var bt=i(Ke);Ra=r(bt,"Load the ViT feature extractor to process the image into a tensor:"),bt.forEach(a),ca=u(e),y(Le.$$.fragment,e),ua=u(e),ke=n(e,"P",{});var Ca=i(ke);Ua=r(Ca,"Apply several image transformations to the dataset to make the model more robust against overfitting. Here you\u2019ll use torchvision\u2019s "),Ne=n(Ca,"A",{href:!0,rel:!0});var jt=i(Ne);sa=n(jt,"CODE",{});var wt=i(sa);Ba=r(wt,"transforms"),wt.forEach(a),jt.forEach(a),Ha=r(Ca," module. Crop a random part of the image, resize it, and normalize it with the image mean and standard deviation:"),Ca.forEach(a),da=u(e),y(Me.$$.fragment,e),ga=u(e),Ee=n(e,"P",{});var qa=i(Ee);Va=r(qa,"Create a preprocessing function that will apply the transforms and return the "),la=n(qa,"CODE",{});var yt=i(la);Ga=r(yt,"pixel_values"),yt.forEach(a),Ja=r(qa," - the inputs to the model - of the image:"),qa.forEach(a),_a=u(e),y(Oe.$$.fragment,e),$a=u(e),xe=n(e,"P",{});var Pa=i(xe);Ya=r(Pa,"Use \u{1F917} Dataset\u2019s "),Re=n(Pa,"A",{href:!0,rel:!0});var kt=i(Re);Wa=r(kt,"with_transform"),kt.forEach(a),Ka=r(Pa," method to apply the transforms over the entire dataset. The transforms are applied on-the-fly when you load an element of the dataset:"),Pa.forEach(a),va=u(e),y(Ue.$$.fragment,e),ba=u(e),Te=n(e,"P",{});var za=i(Te);Qa=r(za,"Use "),Qe=n(za,"A",{href:!0});var Et=i(Qe);Xa=r(Et,"DefaultDataCollator"),Et.forEach(a),Za=r(za," to create a batch of examples. Unlike other data collators in \u{1F917} Transformers, the DefaultDataCollator does not apply additional preprocessing such as padding."),za.forEach(a),ja=u(e),y(Be.$$.fragment,e),wa=u(e),de=n(e,"H2",{class:!0});var Da=i(de);Ae=n(Da,"A",{id:!0,class:!0,href:!0});var xt=i(Ae);ra=n(xt,"SPAN",{});var Tt=i(ra);y(He.$$.fragment,Tt),Tt.forEach(a),xt.forEach(a),et=u(Da),oa=n(Da,"SPAN",{});var At=i(oa);at=r(At,"Train"),At.forEach(a),Da.forEach(a),ya=u(e),y(Ce.$$.fragment,e),ka=u(e),y(qe.$$.fragment,e),this.h()},h(){d(m,"name","hf:doc:metadata"),d(m,"content",JSON.stringify(Bt)),d(_,"id","image-classification"),d(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_,"href","#image-classification"),d(f,"class","relative group"),d(J,"href","https://huggingface.co/docs/transformers/v4.16.2/en/model_doc/vit"),d(J,"rel","nofollow"),d(Y,"href","https://huggingface.co/datasets/food101"),d(Y,"rel","nofollow"),d(U,"id","load-food101-dataset"),d(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(U,"href","#load-food101-dataset"),d(L,"class","relative group"),d(ye,"id","preprocess"),d(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ye,"href","#preprocess"),d(ue,"class","relative group"),d(Ne,"href","https://pytorch.org/vision/stable/transforms.html"),d(Ne,"rel","nofollow"),d(Re,"href","https://huggingface.co/docs/datasets/main/en/package_reference/main_classes#datasets.Dataset.with_transform"),d(Re,"rel","nofollow"),d(Qe,"href","/docs/transformers/main/en/main_classes/data_collator#transformers.DefaultDataCollator"),d(Ae,"id","train"),d(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ae,"href","#train"),d(de,"class","relative group")},m(e,s){t(document.head,m),p(e,b,s),p(e,f,s),t(f,_),t(_,j),k(g,j,null),t(f,$),t(f,A),t(A,q),p(e,P,s),k(D,e,s),p(e,V,s),p(e,G,s),t(G,F),p(e,C,s),p(e,I,s),t(I,ee),t(I,J),t(J,Pe),t(I,ne),t(I,Y),t(Y,ze),t(I,ie),p(e,ge,s),k(R,e,s),p(e,ae,s),p(e,L,s),t(L,U),t(U,W),k(K,W,null),t(L,De),t(L,pe),t(pe,Q),p(e,_e,s),p(e,N,s),t(N,Fe),p(e,$e,s),k(X,e,s),p(e,B,s),p(e,te,s),t(te,se),p(e,ve,s),k(Z,e,s),p(e,me,s),p(e,S,s),t(S,be),p(e,h,s),k(v,e,s),p(e,le,s),p(e,M,s),t(M,re),t(M,z),t(z,Ge),t(M,Je),t(M,je),t(je,Ye),t(M,We),p(e,fe,s),k(oe,e,s),p(e,he,s),p(e,ce,s),t(ce,Ia),p(e,pa,s),k(Ie,e,s),p(e,ma,s),p(e,we,s),t(we,Sa),t(we,ea),t(ea,La),t(we,Na),p(e,fa,s),p(e,ue,s),t(ue,ye),t(ye,aa),k(Se,aa,null),t(ue,Ma),t(ue,ta),t(ta,Oa),p(e,ha,s),p(e,Ke,s),t(Ke,Ra),p(e,ca,s),k(Le,e,s),p(e,ua,s),p(e,ke,s),t(ke,Ua),t(ke,Ne),t(Ne,sa),t(sa,Ba),t(ke,Ha),p(e,da,s),k(Me,e,s),p(e,ga,s),p(e,Ee,s),t(Ee,Va),t(Ee,la),t(la,Ga),t(Ee,Ja),p(e,_a,s),k(Oe,e,s),p(e,$a,s),p(e,xe,s),t(xe,Ya),t(xe,Re),t(Re,Wa),t(xe,Ka),p(e,va,s),k(Ue,e,s),p(e,ba,s),p(e,Te,s),t(Te,Qa),t(Te,Qe),t(Qe,Xa),t(Te,Za),p(e,ja,s),k(Be,e,s),p(e,wa,s),p(e,de,s),t(de,Ae),t(Ae,ra),k(He,ra,null),t(de,et),t(de,oa),t(oa,at),p(e,ya,s),k(Ce,e,s),p(e,ka,s),k(qe,e,s),Ea=!0},p(e,[s]){const Ve={};s&2&&(Ve.$$scope={dirty:s,ctx:e}),R.$set(Ve);const na={};s&2&&(na.$$scope={dirty:s,ctx:e}),Ce.$set(na);const ia={};s&2&&(ia.$$scope={dirty:s,ctx:e}),qe.$set(ia)},i(e){Ea||(E(g.$$.fragment,e),E(D.$$.fragment,e),E(R.$$.fragment,e),E(K.$$.fragment,e),E(X.$$.fragment,e),E(Z.$$.fragment,e),E(v.$$.fragment,e),E(oe.$$.fragment,e),E(Ie.$$.fragment,e),E(Se.$$.fragment,e),E(Le.$$.fragment,e),E(Me.$$.fragment,e),E(Oe.$$.fragment,e),E(Ue.$$.fragment,e),E(Be.$$.fragment,e),E(He.$$.fragment,e),E(Ce.$$.fragment,e),E(qe.$$.fragment,e),Ea=!0)},o(e){x(g.$$.fragment,e),x(D.$$.fragment,e),x(R.$$.fragment,e),x(K.$$.fragment,e),x(X.$$.fragment,e),x(Z.$$.fragment,e),x(v.$$.fragment,e),x(oe.$$.fragment,e),x(Ie.$$.fragment,e),x(Se.$$.fragment,e),x(Le.$$.fragment,e),x(Me.$$.fragment,e),x(Oe.$$.fragment,e),x(Ue.$$.fragment,e),x(Be.$$.fragment,e),x(He.$$.fragment,e),x(Ce.$$.fragment,e),x(qe.$$.fragment,e),Ea=!1},d(e){a(m),e&&a(b),e&&a(f),T(g),e&&a(P),T(D,e),e&&a(V),e&&a(G),e&&a(C),e&&a(I),e&&a(ge),T(R,e),e&&a(ae),e&&a(L),T(K),e&&a(_e),e&&a(N),e&&a($e),T(X,e),e&&a(B),e&&a(te),e&&a(ve),T(Z,e),e&&a(me),e&&a(S),e&&a(h),T(v,e),e&&a(le),e&&a(M),e&&a(fe),T(oe,e),e&&a(he),e&&a(ce),e&&a(pa),T(Ie,e),e&&a(ma),e&&a(we),e&&a(fa),e&&a(ue),T(Se),e&&a(ha),e&&a(Ke),e&&a(ca),T(Le,e),e&&a(ua),e&&a(ke),e&&a(da),T(Me,e),e&&a(ga),e&&a(Ee),e&&a(_a),T(Oe,e),e&&a($a),e&&a(xe),e&&a(va),T(Ue,e),e&&a(ba),e&&a(Te),e&&a(ja),T(Be,e),e&&a(wa),e&&a(de),T(He),e&&a(ya),T(Ce,e),e&&a(ka),T(qe,e)}}}const Bt={local:"image-classification",sections:[{local:"load-food101-dataset",title:"Load Food-101 dataset"},{local:"preprocess",title:"Preprocess"},{local:"train",title:"Train"}],title:"Image classification"};function Ht(O){return Dt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Qt extends Ct{constructor(m){super();qt(this,m,Ht,Ut,Pt,{})}}export{Qt as default,Bt as metadata};
