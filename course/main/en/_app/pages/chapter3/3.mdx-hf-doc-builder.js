import{S as sn,i as rn,s as nn,e as r,k as d,w,t as a,M as ln,c as i,d as o,m as h,x as v,a as n,h as s,b as f,G as t,g as c,y as _,q as g,o as $,B as E,v as cn}from"../../chunks/vendor-hf-doc-builder.js";import{T as an}from"../../chunks/Tip-hf-doc-builder.js";import{Y as dn}from"../../chunks/Youtube-hf-doc-builder.js";import{I as Ur}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as F}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as hn}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";import{F as pn}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function un(ve){let p,P,u,x,T,y,k,A,H,te;return{c(){p=r("p"),P=a("\u{1F4A1} If you want to automatically upload your model to the Hub during training, pass along "),u=r("code"),x=a("push_to_hub=True"),T=a(" in the "),y=r("code"),k=a("TrainingArguments"),A=a(". We will learn more about this in "),H=r("a"),te=a("Chapter 4"),this.h()},l(oe){p=i(oe,"P",{});var q=n(p);P=s(q,"\u{1F4A1} If you want to automatically upload your model to the Hub during training, pass along "),u=i(q,"CODE",{});var B=n(u);x=s(B,"push_to_hub=True"),B.forEach(o),T=s(q," in the "),y=i(q,"CODE",{});var _e=n(y);k=s(_e,"TrainingArguments"),_e.forEach(o),A=s(q,". We will learn more about this in "),H=i(q,"A",{href:!0});var Y=n(H);te=s(Y,"Chapter 4"),Y.forEach(o),q.forEach(o),this.h()},h(){f(H,"href","/course/chapter4/3")},m(oe,q){c(oe,p,q),t(p,P),t(p,u),t(u,x),t(p,T),t(p,y),t(y,k),t(p,A),t(p,H),t(H,te)},d(oe){oe&&o(p)}}}function fn(ve){let p,P,u,x,T;return{c(){p=r("p"),P=a("\u270F\uFE0F "),u=r("strong"),x=a("Try it out!"),T=a(" Fine-tune a model on the GLUE SST-2 dataset, using the data processing you did in section 2.")},l(y){p=i(y,"P",{});var k=n(p);P=s(k,"\u270F\uFE0F "),u=i(k,"STRONG",{});var A=n(u);x=s(A,"Try it out!"),A.forEach(o),T=s(k," Fine-tune a model on the GLUE SST-2 dataset, using the data processing you did in section 2."),k.forEach(o)},m(y,k){c(y,p,k),t(p,P),t(p,u),t(u,x),t(p,T)},d(y){y&&o(p)}}}function mn(ve){let p,P,u,x,T,y,k,A,H,te,oe,q,B,_e,Y,so,z,Xo,Ke,Ko,Qo,Qe,Vo,Zo,Ve,ea,ta,ge,oa,aa,ro,Ie,sa,io,$e,no,ae,ie,Ze,Ee,ra,et,ia,lo,I,na,tt,la,ca,ot,da,ha,at,pa,ua,co,ye,ho,ne,po,J,fa,Ue,ma,wa,st,va,_a,uo,be,fo,le,ga,We,$a,Ea,mo,C,ya,rt,ba,Ta,it,ka,Ca,nt,ja,Da,lt,Oa,Pa,ct,xa,Aa,wo,Te,vo,j,qa,dt,za,Sa,ht,Fa,Ia,pt,Ua,Wa,ut,Ga,Na,ft,La,Ma,_o,X,Ra,mt,Ha,Ba,wt,Ya,Ja,go,ke,$o,Ge,Xa,Eo,ce,O,Ka,vt,Qa,Va,_t,Za,es,gt,ts,os,$t,as,ss,Et,rs,is,ns,se,ls,yt,cs,ds,bt,hs,ps,yo,re,de,Tt,Ce,us,kt,fs,bo,D,ms,Ct,ws,vs,jt,_s,gs,Dt,$s,Es,Ot,ys,bs,Pt,Ts,ks,To,je,ko,De,Co,m,Cs,xt,js,Ds,At,Os,Ps,qt,xs,As,zt,qs,zs,St,Ss,Fs,Ft,Is,Us,It,Ws,Gs,Ut,Ns,Ls,jo,U,Ms,Wt,Rs,Hs,Gt,Bs,Ys,Ne,Js,Xs,Do,Oe,Oo,S,Ks,Nt,Qs,Vs,Lt,Zs,er,Mt,tr,or,Rt,ar,sr,Po,Pe,xo,xe,Ao,W,rr,Ae,ir,nr,Ht,lr,cr,Bt,dr,hr,qo,he,pr,Yt,ur,fr,zo,qe,So,K,mr,Jt,wr,vr,Xt,_r,gr,Fo,ze,Io,G,$r,Kt,Er,yr,Qt,br,Tr,Vt,kr,Cr,Uo,Se,Wo,Le,jr,Go,Q,Dr,Zt,Or,Pr,eo,xr,Ar,No,V,qr,to,zr,Sr,Me,Fr,Ir,Lo,pe,Mo;return u=new pn({props:{fw:ve[0]}}),A=new Ur({}),B=new hn({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter3/section3.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter3/section3.ipynb"}]}}),Y=new dn({props:{id:"nvBXf7s7vTI"}}),$e=new F({props:{code:`



`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, DataCollatorWithPadding

raw_datasets = load_dataset(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mrpc&quot;</span>)
checkpoint = <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">tokenize_function</span>(<span class="hljs-params">example</span>):
    <span class="hljs-keyword">return</span> tokenizer(example[<span class="hljs-string">&quot;sentence1&quot;</span>], example[<span class="hljs-string">&quot;sentence2&quot;</span>], truncation=<span class="hljs-literal">True</span>)


tokenized_datasets = raw_datasets.<span class="hljs-built_in">map</span>(tokenize_function, batched=<span class="hljs-literal">True</span>)
data_collator = DataCollatorWithPadding(tokenizer=tokenizer)`}}),Ee=new Ur({}),ye=new F({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrainingArguments

training_args = TrainingArguments(<span class="hljs-string">&quot;test-trainer&quot;</span>)`}}),ne=new an({props:{$$slots:{default:[un]},$$scope:{ctx:ve}}}),be=new F({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=<span class="hljs-number">2</span>)`}}),Te=new F({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Trainer

trainer = Trainer(
    model,
    training_args,
    train_dataset=tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>],
    eval_dataset=tokenized_datasets[<span class="hljs-string">&quot;validation&quot;</span>],
    data_collator=data_collator,
    tokenizer=tokenizer,
)`}}),ke=new F({props:{code:"trainer.train()",highlighted:"trainer.train()"}}),Ce=new Ur({}),je=new F({props:{code:`predictions = trainer.predict(tokenized_datasets["validation"])
print(predictions.predictions.shape, predictions.label_ids.shape)`,highlighted:`predictions = trainer.predict(tokenized_datasets[<span class="hljs-string">&quot;validation&quot;</span>])
<span class="hljs-built_in">print</span>(predictions.predictions.shape, predictions.label_ids.shape)`}}),De=new F({props:{code:"(408, 2) (408,)",highlighted:'(<span class="hljs-number">408</span>, <span class="hljs-number">2</span>) (<span class="hljs-number">408</span>,)'}}),Oe=new F({props:{code:"",highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

preds = np.argmax(predictions.predictions, axis=-<span class="hljs-number">1</span>)`}}),Pe=new F({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric

metric = load_metric(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mrpc&quot;</span>)
metric.compute(predictions=preds, references=predictions.label_ids)`}}),xe=new F({props:{code:"{'accuracy': 0.8578431372549019, 'f1': 0.8996539792387542}",highlighted:'{<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">0.8578431372549019</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">0.8996539792387542</span>}'}}),qe=new F({props:{code:`def compute_metrics(eval_preds):
    metric = load_metric("glue", "mrpc")
    logits, labels = eval_preds
    predictions = np.argmax(logits, axis=-1)
    return metric.compute(predictions=predictions, references=labels)`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">compute_metrics</span>(<span class="hljs-params">eval_preds</span>):
    metric = load_metric(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mrpc&quot;</span>)
    logits, labels = eval_preds
    predictions = np.argmax(logits, axis=-<span class="hljs-number">1</span>)
    <span class="hljs-keyword">return</span> metric.compute(predictions=predictions, references=labels)`}}),ze=new F({props:{code:"",highlighted:`training_args = TrainingArguments(<span class="hljs-string">&quot;test-trainer&quot;</span>, evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>)
model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=<span class="hljs-number">2</span>)

trainer = Trainer(
    model,
    training_args,
    train_dataset=tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>],
    eval_dataset=tokenized_datasets[<span class="hljs-string">&quot;validation&quot;</span>],
    data_collator=data_collator,
    tokenizer=tokenizer,
    compute_metrics=compute_metrics,
)`}}),Se=new F({props:{code:"trainer.train()",highlighted:'trainer.trai<span class="hljs-meta">n</span>()'}}),pe=new an({props:{$$slots:{default:[fn]},$$scope:{ctx:ve}}}),{c(){p=r("meta"),P=d(),w(u.$$.fragment),x=d(),T=r("h1"),y=r("a"),k=r("span"),w(A.$$.fragment),H=d(),te=r("span"),oe=a("Fine-tuning a model with the Trainer API"),q=d(),w(B.$$.fragment),_e=d(),w(Y.$$.fragment),so=d(),z=r("p"),Xo=a("\u{1F917} Transformers provides a "),Ke=r("code"),Ko=a("Trainer"),Qo=a(" class to help you fine-tune any of the pretrained models it provides on your dataset. Once you\u2019ve done all the data preprocessing work in the last section, you have just a few steps left to define the "),Qe=r("code"),Vo=a("Trainer"),Zo=a(". The hardest part is likely to be preparing the environment to run "),Ve=r("code"),ea=a("Trainer.train()"),ta=a(", as it will run very slowly on a CPU. If you don\u2019t have a GPU set up, you can get access to free GPUs or TPUs on "),ge=r("a"),oa=a("Google Colab"),aa=a("."),ro=d(),Ie=r("p"),sa=a("The code examples below assume you have already executed the examples in the previous section. Here is a short summary recapping what you need:"),io=d(),w($e.$$.fragment),no=d(),ae=r("h3"),ie=r("a"),Ze=r("span"),w(Ee.$$.fragment),ra=d(),et=r("span"),ia=a("Training"),lo=d(),I=r("p"),na=a("The first step before we can define our "),tt=r("code"),la=a("Trainer"),ca=a(" is to define a "),ot=r("code"),da=a("TrainingArguments"),ha=a(" class that will contain all the hyperparameters the "),at=r("code"),pa=a("Trainer"),ua=a(" will use for training and evaluation. The only argument you have to provide is a directory where the trained model will be saved, as well as the checkpoints along the way. For all the rest, you can leave the defaults, which should work pretty well for a basic fine-tuning."),co=d(),w(ye.$$.fragment),ho=d(),w(ne.$$.fragment),po=d(),J=r("p"),fa=a("The second step is to define our model. As in the "),Ue=r("a"),ma=a("previous chapter"),wa=a(", we will use the "),st=r("code"),va=a("AutoModelForSequenceClassification"),_a=a(" class, with two labels:"),uo=d(),w(be.$$.fragment),fo=d(),le=r("p"),ga=a("You will notice that unlike in "),We=r("a"),$a=a("Chapter 2"),Ea=a(", you get a warning after instantiating this pretrained model. This is because BERT has not been pretrained on classifying pairs of sentences, so the head of the pretrained model has been discarded and a new head suitable for sequence classification has been added instead. The warnings indicate that some weights were not used (the ones corresponding to the dropped pretraining head) and that some others were randomly initialized (the ones for the new head). It concludes by encouraging you to train the model, which is exactly what we are going to do now."),mo=d(),C=r("p"),ya=a("Once we have our model, we can define a "),rt=r("code"),ba=a("Trainer"),Ta=a(" by passing it all the objects constructed up to now \u2014 the "),it=r("code"),ka=a("model"),Ca=a(", the "),nt=r("code"),ja=a("training_args"),Da=a(", the training and validation datasets, our "),lt=r("code"),Oa=a("data_collator"),Pa=a(", and our "),ct=r("code"),xa=a("tokenizer"),Aa=a(":"),wo=d(),w(Te.$$.fragment),vo=d(),j=r("p"),qa=a("Note that when you pass the "),dt=r("code"),za=a("tokenizer"),Sa=a(" as we did here, the default "),ht=r("code"),Fa=a("data_collator"),Ia=a(" used by the "),pt=r("code"),Ua=a("Trainer"),Wa=a(" will be a "),ut=r("code"),Ga=a("DataCollatorWithPadding"),Na=a(" as defined previously, so you can skip the line "),ft=r("code"),La=a("data_collator=data_collator"),Ma=a(" in this call. It was still important to show you this part of the processing in section 2!"),_o=d(),X=r("p"),Ra=a("To fine-tune the model on our dataset, we just have to call the "),mt=r("code"),Ha=a("train()"),Ba=a(" method of our "),wt=r("code"),Ya=a("Trainer"),Ja=a(":"),go=d(),w(ke.$$.fragment),$o=d(),Ge=r("p"),Xa=a("This will start the fine-tuning (which should take a couple of minutes on a GPU) and report the training loss every 500 steps. It won\u2019t, however, tell you how well (or badly) your model is performing. This is because:"),Eo=d(),ce=r("ol"),O=r("li"),Ka=a("We didn\u2019t tell the "),vt=r("code"),Qa=a("Trainer"),Va=a(" to evaluate during training by setting "),_t=r("code"),Za=a("evaluation_strategy"),es=a(" to either "),gt=r("code"),ts=a('"steps"'),os=a(" (evaluate every "),$t=r("code"),as=a("eval_steps"),ss=a(") or "),Et=r("code"),rs=a('"epoch"'),is=a(" (evaluate at the end of each epoch)."),ns=d(),se=r("li"),ls=a("We didn\u2019t provide the "),yt=r("code"),cs=a("Trainer"),ds=a(" with a "),bt=r("code"),hs=a("compute_metrics()"),ps=a(" function to calculate a metric during said evaluation (otherwise the evaluation would just have printed the loss, which is not a very intuitive number)."),yo=d(),re=r("h3"),de=r("a"),Tt=r("span"),w(Ce.$$.fragment),us=d(),kt=r("span"),fs=a("Evaluation"),bo=d(),D=r("p"),ms=a("Let\u2019s see how we can build a useful "),Ct=r("code"),ws=a("compute_metrics()"),vs=a(" function and use it the next time we train. The function must take an "),jt=r("code"),_s=a("EvalPrediction"),gs=a(" object (which is a named tuple with a "),Dt=r("code"),$s=a("predictions"),Es=a(" field and a "),Ot=r("code"),ys=a("label_ids"),bs=a(" field) and will return a dictionary mapping strings to floats (the strings being the names of the metrics returned, and the floats their values). To get some predictions from our model, we can use the "),Pt=r("code"),Ts=a("Trainer.predict()"),ks=a(" command:"),To=d(),w(je.$$.fragment),ko=d(),w(De.$$.fragment),Co=d(),m=r("p"),Cs=a("The output of the "),xt=r("code"),js=a("predict()"),Ds=a(" method is another named tuple with three fields: "),At=r("code"),Os=a("predictions"),Ps=a(", "),qt=r("code"),xs=a("label_ids"),As=a(", and "),zt=r("code"),qs=a("metrics"),zs=a(". The "),St=r("code"),Ss=a("metrics"),Fs=a(" field will just contain the loss on the dataset passed, as well as some time metrics (how long it took to predict, in total and on average). Once we complete our "),Ft=r("code"),Is=a("compute_metrics()"),Us=a(" function and pass it to the "),It=r("code"),Ws=a("Trainer"),Gs=a(", that field will also contain the metrics returned by "),Ut=r("code"),Ns=a("compute_metrics()"),Ls=a("."),jo=d(),U=r("p"),Ms=a("As you can see, "),Wt=r("code"),Rs=a("predictions"),Hs=a(" is a two-dimensional array with shape 408 x 2 (408 being the number of elements in the dataset we used). Those are the logits for each element of the dataset we passed to "),Gt=r("code"),Bs=a("predict()"),Ys=a(" (as you saw in the "),Ne=r("a"),Js=a("previous chapter"),Xs=a(", all Transformer models return logits). To transform them into predictions that we can compare to our labels, we need to take the index with the maximum value on the second axis:"),Do=d(),w(Oe.$$.fragment),Oo=d(),S=r("p"),Ks=a("We can now compare those "),Nt=r("code"),Qs=a("preds"),Vs=a(" to the labels. To build our "),Lt=r("code"),Zs=a("compute_metric()"),er=a(" function, we will rely on the metrics from the \u{1F917} Datasets library. We can load the metrics associated with the MRPC dataset as easily as we loaded the dataset, this time with the "),Mt=r("code"),tr=a("load_metric()"),or=a(" function. The object returned has a "),Rt=r("code"),ar=a("compute()"),sr=a(" method we can use to do the metric calculation:"),Po=d(),w(Pe.$$.fragment),xo=d(),w(xe.$$.fragment),Ao=d(),W=r("p"),rr=a("The exact results you get may vary, as the random initialization of the model head might change the metrics it achieved. Here, we can see our model has an accuracy of 85.78% on the validation set and an F1 score of 89.97. Those are the two metrics used to evaluate results on the MRPC dataset for the GLUE benchmark. The table in the "),Ae=r("a"),ir=a("BERT paper"),nr=a(" reported an F1 score of 88.9 for the base model. That was the "),Ht=r("code"),lr=a("uncased"),cr=a(" model while we are currently using the "),Bt=r("code"),dr=a("cased"),hr=a(" model, which explains the better result."),qo=d(),he=r("p"),pr=a("Wrapping everything together, we get our "),Yt=r("code"),ur=a("compute_metrics()"),fr=a(" function:"),zo=d(),w(qe.$$.fragment),So=d(),K=r("p"),mr=a("And to see it used in action to report metrics at the end of each epoch, here is how we define a new "),Jt=r("code"),wr=a("Trainer"),vr=a(" with this "),Xt=r("code"),_r=a("compute_metrics()"),gr=a(" function:"),Fo=d(),w(ze.$$.fragment),Io=d(),G=r("p"),$r=a("Note that we create a new "),Kt=r("code"),Er=a("TrainingArguments"),yr=a(" with its "),Qt=r("code"),br=a("evaluation_strategy"),Tr=a(" set to "),Vt=r("code"),kr=a('"epoch"'),Cr=a(" and a new model \u2014 otherwise, we would just be continuing the training of the model we have already trained. To launch a new training run, we execute:"),Uo=d(),w(Se.$$.fragment),Wo=d(),Le=r("p"),jr=a("This time, it will report the validation loss and metrics at the end of each epoch on top of the training loss. Again, the exact accuracy/F1 score you reach might be a bit different from what we found, because of the random head initialization of the model, but it should be in the same ballpark."),Go=d(),Q=r("p"),Dr=a("The "),Zt=r("code"),Or=a("Trainer"),Pr=a(" will work out of the box on multiple GPUs or TPUs and provides lots of options, like mixed-precision training (use "),eo=r("code"),xr=a("fp16 = True"),Ar=a(" in your training arguments). We will go over everything it supports in Chapter 10."),No=d(),V=r("p"),qr=a("This concludes the introduction to fine-tuning using the "),to=r("code"),zr=a("Trainer"),Sr=a(" API. An example of doing this for most common NLP tasks will be given in "),Me=r("a"),Fr=a("Chapter 7"),Ir=a(", but for now let\u2019s look at how to do the same thing in pure PyTorch."),Lo=d(),w(pe.$$.fragment),this.h()},l(e){const l=ln('[data-svelte="svelte-1phssyn"]',document.head);p=i(l,"META",{name:!0,content:!0}),l.forEach(o),P=h(e),v(u.$$.fragment,e),x=h(e),T=i(e,"H1",{class:!0});var Fe=n(T);y=i(Fe,"A",{id:!0,class:!0,href:!0});var oo=n(y);k=i(oo,"SPAN",{});var ao=n(k);v(A.$$.fragment,ao),ao.forEach(o),oo.forEach(o),H=h(Fe),te=i(Fe,"SPAN",{});var Wr=n(te);oe=s(Wr,"Fine-tuning a model with the Trainer API"),Wr.forEach(o),Fe.forEach(o),q=h(e),v(B.$$.fragment,e),_e=h(e),v(Y.$$.fragment,e),so=h(e),z=i(e,"P",{});var Z=n(z);Xo=s(Z,"\u{1F917} Transformers provides a "),Ke=i(Z,"CODE",{});var Gr=n(Ke);Ko=s(Gr,"Trainer"),Gr.forEach(o),Qo=s(Z," class to help you fine-tune any of the pretrained models it provides on your dataset. Once you\u2019ve done all the data preprocessing work in the last section, you have just a few steps left to define the "),Qe=i(Z,"CODE",{});var Nr=n(Qe);Vo=s(Nr,"Trainer"),Nr.forEach(o),Zo=s(Z,". The hardest part is likely to be preparing the environment to run "),Ve=i(Z,"CODE",{});var Lr=n(Ve);ea=s(Lr,"Trainer.train()"),Lr.forEach(o),ta=s(Z,", as it will run very slowly on a CPU. If you don\u2019t have a GPU set up, you can get access to free GPUs or TPUs on "),ge=i(Z,"A",{href:!0,rel:!0});var Mr=n(ge);oa=s(Mr,"Google Colab"),Mr.forEach(o),aa=s(Z,"."),Z.forEach(o),ro=h(e),Ie=i(e,"P",{});var Rr=n(Ie);sa=s(Rr,"The code examples below assume you have already executed the examples in the previous section. Here is a short summary recapping what you need:"),Rr.forEach(o),io=h(e),v($e.$$.fragment,e),no=h(e),ae=i(e,"H3",{class:!0});var Ro=n(ae);ie=i(Ro,"A",{id:!0,class:!0,href:!0});var Hr=n(ie);Ze=i(Hr,"SPAN",{});var Br=n(Ze);v(Ee.$$.fragment,Br),Br.forEach(o),Hr.forEach(o),ra=h(Ro),et=i(Ro,"SPAN",{});var Yr=n(et);ia=s(Yr,"Training"),Yr.forEach(o),Ro.forEach(o),lo=h(e),I=i(e,"P",{});var ue=n(I);na=s(ue,"The first step before we can define our "),tt=i(ue,"CODE",{});var Jr=n(tt);la=s(Jr,"Trainer"),Jr.forEach(o),ca=s(ue," is to define a "),ot=i(ue,"CODE",{});var Xr=n(ot);da=s(Xr,"TrainingArguments"),Xr.forEach(o),ha=s(ue," class that will contain all the hyperparameters the "),at=i(ue,"CODE",{});var Kr=n(at);pa=s(Kr,"Trainer"),Kr.forEach(o),ua=s(ue," will use for training and evaluation. The only argument you have to provide is a directory where the trained model will be saved, as well as the checkpoints along the way. For all the rest, you can leave the defaults, which should work pretty well for a basic fine-tuning."),ue.forEach(o),co=h(e),v(ye.$$.fragment,e),ho=h(e),v(ne.$$.fragment,e),po=h(e),J=i(e,"P",{});var Re=n(J);fa=s(Re,"The second step is to define our model. As in the "),Ue=i(Re,"A",{href:!0});var Qr=n(Ue);ma=s(Qr,"previous chapter"),Qr.forEach(o),wa=s(Re,", we will use the "),st=i(Re,"CODE",{});var Vr=n(st);va=s(Vr,"AutoModelForSequenceClassification"),Vr.forEach(o),_a=s(Re," class, with two labels:"),Re.forEach(o),uo=h(e),v(be.$$.fragment,e),fo=h(e),le=i(e,"P",{});var Ho=n(le);ga=s(Ho,"You will notice that unlike in "),We=i(Ho,"A",{href:!0});var Zr=n(We);$a=s(Zr,"Chapter 2"),Zr.forEach(o),Ea=s(Ho,", you get a warning after instantiating this pretrained model. This is because BERT has not been pretrained on classifying pairs of sentences, so the head of the pretrained model has been discarded and a new head suitable for sequence classification has been added instead. The warnings indicate that some weights were not used (the ones corresponding to the dropped pretraining head) and that some others were randomly initialized (the ones for the new head). It concludes by encouraging you to train the model, which is exactly what we are going to do now."),Ho.forEach(o),mo=h(e),C=i(e,"P",{});var N=n(C);ya=s(N,"Once we have our model, we can define a "),rt=i(N,"CODE",{});var ei=n(rt);ba=s(ei,"Trainer"),ei.forEach(o),Ta=s(N," by passing it all the objects constructed up to now \u2014 the "),it=i(N,"CODE",{});var ti=n(it);ka=s(ti,"model"),ti.forEach(o),Ca=s(N,", the "),nt=i(N,"CODE",{});var oi=n(nt);ja=s(oi,"training_args"),oi.forEach(o),Da=s(N,", the training and validation datasets, our "),lt=i(N,"CODE",{});var ai=n(lt);Oa=s(ai,"data_collator"),ai.forEach(o),Pa=s(N,", and our "),ct=i(N,"CODE",{});var si=n(ct);xa=s(si,"tokenizer"),si.forEach(o),Aa=s(N,":"),N.forEach(o),wo=h(e),v(Te.$$.fragment,e),vo=h(e),j=i(e,"P",{});var L=n(j);qa=s(L,"Note that when you pass the "),dt=i(L,"CODE",{});var ri=n(dt);za=s(ri,"tokenizer"),ri.forEach(o),Sa=s(L," as we did here, the default "),ht=i(L,"CODE",{});var ii=n(ht);Fa=s(ii,"data_collator"),ii.forEach(o),Ia=s(L," used by the "),pt=i(L,"CODE",{});var ni=n(pt);Ua=s(ni,"Trainer"),ni.forEach(o),Wa=s(L," will be a "),ut=i(L,"CODE",{});var li=n(ut);Ga=s(li,"DataCollatorWithPadding"),li.forEach(o),Na=s(L," as defined previously, so you can skip the line "),ft=i(L,"CODE",{});var ci=n(ft);La=s(ci,"data_collator=data_collator"),ci.forEach(o),Ma=s(L," in this call. It was still important to show you this part of the processing in section 2!"),L.forEach(o),_o=h(e),X=i(e,"P",{});var He=n(X);Ra=s(He,"To fine-tune the model on our dataset, we just have to call the "),mt=i(He,"CODE",{});var di=n(mt);Ha=s(di,"train()"),di.forEach(o),Ba=s(He," method of our "),wt=i(He,"CODE",{});var hi=n(wt);Ya=s(hi,"Trainer"),hi.forEach(o),Ja=s(He,":"),He.forEach(o),go=h(e),v(ke.$$.fragment,e),$o=h(e),Ge=i(e,"P",{});var pi=n(Ge);Xa=s(pi,"This will start the fine-tuning (which should take a couple of minutes on a GPU) and report the training loss every 500 steps. It won\u2019t, however, tell you how well (or badly) your model is performing. This is because:"),pi.forEach(o),Eo=h(e),ce=i(e,"OL",{});var Bo=n(ce);O=i(Bo,"LI",{});var M=n(O);Ka=s(M,"We didn\u2019t tell the "),vt=i(M,"CODE",{});var ui=n(vt);Qa=s(ui,"Trainer"),ui.forEach(o),Va=s(M," to evaluate during training by setting "),_t=i(M,"CODE",{});var fi=n(_t);Za=s(fi,"evaluation_strategy"),fi.forEach(o),es=s(M," to either "),gt=i(M,"CODE",{});var mi=n(gt);ts=s(mi,'"steps"'),mi.forEach(o),os=s(M," (evaluate every "),$t=i(M,"CODE",{});var wi=n($t);as=s(wi,"eval_steps"),wi.forEach(o),ss=s(M,") or "),Et=i(M,"CODE",{});var vi=n(Et);rs=s(vi,'"epoch"'),vi.forEach(o),is=s(M," (evaluate at the end of each epoch)."),M.forEach(o),ns=h(Bo),se=i(Bo,"LI",{});var Be=n(se);ls=s(Be,"We didn\u2019t provide the "),yt=i(Be,"CODE",{});var _i=n(yt);cs=s(_i,"Trainer"),_i.forEach(o),ds=s(Be," with a "),bt=i(Be,"CODE",{});var gi=n(bt);hs=s(gi,"compute_metrics()"),gi.forEach(o),ps=s(Be," function to calculate a metric during said evaluation (otherwise the evaluation would just have printed the loss, which is not a very intuitive number)."),Be.forEach(o),Bo.forEach(o),yo=h(e),re=i(e,"H3",{class:!0});var Yo=n(re);de=i(Yo,"A",{id:!0,class:!0,href:!0});var $i=n(de);Tt=i($i,"SPAN",{});var Ei=n(Tt);v(Ce.$$.fragment,Ei),Ei.forEach(o),$i.forEach(o),us=h(Yo),kt=i(Yo,"SPAN",{});var yi=n(kt);fs=s(yi,"Evaluation"),yi.forEach(o),Yo.forEach(o),bo=h(e),D=i(e,"P",{});var R=n(D);ms=s(R,"Let\u2019s see how we can build a useful "),Ct=i(R,"CODE",{});var bi=n(Ct);ws=s(bi,"compute_metrics()"),bi.forEach(o),vs=s(R," function and use it the next time we train. The function must take an "),jt=i(R,"CODE",{});var Ti=n(jt);_s=s(Ti,"EvalPrediction"),Ti.forEach(o),gs=s(R," object (which is a named tuple with a "),Dt=i(R,"CODE",{});var ki=n(Dt);$s=s(ki,"predictions"),ki.forEach(o),Es=s(R," field and a "),Ot=i(R,"CODE",{});var Ci=n(Ot);ys=s(Ci,"label_ids"),Ci.forEach(o),bs=s(R," field) and will return a dictionary mapping strings to floats (the strings being the names of the metrics returned, and the floats their values). To get some predictions from our model, we can use the "),Pt=i(R,"CODE",{});var ji=n(Pt);Ts=s(ji,"Trainer.predict()"),ji.forEach(o),ks=s(R," command:"),R.forEach(o),To=h(e),v(je.$$.fragment,e),ko=h(e),v(De.$$.fragment,e),Co=h(e),m=i(e,"P",{});var b=n(m);Cs=s(b,"The output of the "),xt=i(b,"CODE",{});var Di=n(xt);js=s(Di,"predict()"),Di.forEach(o),Ds=s(b," method is another named tuple with three fields: "),At=i(b,"CODE",{});var Oi=n(At);Os=s(Oi,"predictions"),Oi.forEach(o),Ps=s(b,", "),qt=i(b,"CODE",{});var Pi=n(qt);xs=s(Pi,"label_ids"),Pi.forEach(o),As=s(b,", and "),zt=i(b,"CODE",{});var xi=n(zt);qs=s(xi,"metrics"),xi.forEach(o),zs=s(b,". The "),St=i(b,"CODE",{});var Ai=n(St);Ss=s(Ai,"metrics"),Ai.forEach(o),Fs=s(b," field will just contain the loss on the dataset passed, as well as some time metrics (how long it took to predict, in total and on average). Once we complete our "),Ft=i(b,"CODE",{});var qi=n(Ft);Is=s(qi,"compute_metrics()"),qi.forEach(o),Us=s(b," function and pass it to the "),It=i(b,"CODE",{});var zi=n(It);Ws=s(zi,"Trainer"),zi.forEach(o),Gs=s(b,", that field will also contain the metrics returned by "),Ut=i(b,"CODE",{});var Si=n(Ut);Ns=s(Si,"compute_metrics()"),Si.forEach(o),Ls=s(b,"."),b.forEach(o),jo=h(e),U=i(e,"P",{});var fe=n(U);Ms=s(fe,"As you can see, "),Wt=i(fe,"CODE",{});var Fi=n(Wt);Rs=s(Fi,"predictions"),Fi.forEach(o),Hs=s(fe," is a two-dimensional array with shape 408 x 2 (408 being the number of elements in the dataset we used). Those are the logits for each element of the dataset we passed to "),Gt=i(fe,"CODE",{});var Ii=n(Gt);Bs=s(Ii,"predict()"),Ii.forEach(o),Ys=s(fe," (as you saw in the "),Ne=i(fe,"A",{href:!0});var Ui=n(Ne);Js=s(Ui,"previous chapter"),Ui.forEach(o),Xs=s(fe,", all Transformer models return logits). To transform them into predictions that we can compare to our labels, we need to take the index with the maximum value on the second axis:"),fe.forEach(o),Do=h(e),v(Oe.$$.fragment,e),Oo=h(e),S=i(e,"P",{});var ee=n(S);Ks=s(ee,"We can now compare those "),Nt=i(ee,"CODE",{});var Wi=n(Nt);Qs=s(Wi,"preds"),Wi.forEach(o),Vs=s(ee," to the labels. To build our "),Lt=i(ee,"CODE",{});var Gi=n(Lt);Zs=s(Gi,"compute_metric()"),Gi.forEach(o),er=s(ee," function, we will rely on the metrics from the \u{1F917} Datasets library. We can load the metrics associated with the MRPC dataset as easily as we loaded the dataset, this time with the "),Mt=i(ee,"CODE",{});var Ni=n(Mt);tr=s(Ni,"load_metric()"),Ni.forEach(o),or=s(ee," function. The object returned has a "),Rt=i(ee,"CODE",{});var Li=n(Rt);ar=s(Li,"compute()"),Li.forEach(o),sr=s(ee," method we can use to do the metric calculation:"),ee.forEach(o),Po=h(e),v(Pe.$$.fragment,e),xo=h(e),v(xe.$$.fragment,e),Ao=h(e),W=i(e,"P",{});var me=n(W);rr=s(me,"The exact results you get may vary, as the random initialization of the model head might change the metrics it achieved. Here, we can see our model has an accuracy of 85.78% on the validation set and an F1 score of 89.97. Those are the two metrics used to evaluate results on the MRPC dataset for the GLUE benchmark. The table in the "),Ae=i(me,"A",{href:!0,rel:!0});var Mi=n(Ae);ir=s(Mi,"BERT paper"),Mi.forEach(o),nr=s(me," reported an F1 score of 88.9 for the base model. That was the "),Ht=i(me,"CODE",{});var Ri=n(Ht);lr=s(Ri,"uncased"),Ri.forEach(o),cr=s(me," model while we are currently using the "),Bt=i(me,"CODE",{});var Hi=n(Bt);dr=s(Hi,"cased"),Hi.forEach(o),hr=s(me," model, which explains the better result."),me.forEach(o),qo=h(e),he=i(e,"P",{});var Jo=n(he);pr=s(Jo,"Wrapping everything together, we get our "),Yt=i(Jo,"CODE",{});var Bi=n(Yt);ur=s(Bi,"compute_metrics()"),Bi.forEach(o),fr=s(Jo," function:"),Jo.forEach(o),zo=h(e),v(qe.$$.fragment,e),So=h(e),K=i(e,"P",{});var Ye=n(K);mr=s(Ye,"And to see it used in action to report metrics at the end of each epoch, here is how we define a new "),Jt=i(Ye,"CODE",{});var Yi=n(Jt);wr=s(Yi,"Trainer"),Yi.forEach(o),vr=s(Ye," with this "),Xt=i(Ye,"CODE",{});var Ji=n(Xt);_r=s(Ji,"compute_metrics()"),Ji.forEach(o),gr=s(Ye," function:"),Ye.forEach(o),Fo=h(e),v(ze.$$.fragment,e),Io=h(e),G=i(e,"P",{});var we=n(G);$r=s(we,"Note that we create a new "),Kt=i(we,"CODE",{});var Xi=n(Kt);Er=s(Xi,"TrainingArguments"),Xi.forEach(o),yr=s(we," with its "),Qt=i(we,"CODE",{});var Ki=n(Qt);br=s(Ki,"evaluation_strategy"),Ki.forEach(o),Tr=s(we," set to "),Vt=i(we,"CODE",{});var Qi=n(Vt);kr=s(Qi,'"epoch"'),Qi.forEach(o),Cr=s(we," and a new model \u2014 otherwise, we would just be continuing the training of the model we have already trained. To launch a new training run, we execute:"),we.forEach(o),Uo=h(e),v(Se.$$.fragment,e),Wo=h(e),Le=i(e,"P",{});var Vi=n(Le);jr=s(Vi,"This time, it will report the validation loss and metrics at the end of each epoch on top of the training loss. Again, the exact accuracy/F1 score you reach might be a bit different from what we found, because of the random head initialization of the model, but it should be in the same ballpark."),Vi.forEach(o),Go=h(e),Q=i(e,"P",{});var Je=n(Q);Dr=s(Je,"The "),Zt=i(Je,"CODE",{});var Zi=n(Zt);Or=s(Zi,"Trainer"),Zi.forEach(o),Pr=s(Je," will work out of the box on multiple GPUs or TPUs and provides lots of options, like mixed-precision training (use "),eo=i(Je,"CODE",{});var en=n(eo);xr=s(en,"fp16 = True"),en.forEach(o),Ar=s(Je," in your training arguments). We will go over everything it supports in Chapter 10."),Je.forEach(o),No=h(e),V=i(e,"P",{});var Xe=n(V);qr=s(Xe,"This concludes the introduction to fine-tuning using the "),to=i(Xe,"CODE",{});var tn=n(to);zr=s(tn,"Trainer"),tn.forEach(o),Sr=s(Xe," API. An example of doing this for most common NLP tasks will be given in "),Me=i(Xe,"A",{href:!0});var on=n(Me);Fr=s(on,"Chapter 7"),on.forEach(o),Ir=s(Xe,", but for now let\u2019s look at how to do the same thing in pure PyTorch."),Xe.forEach(o),Lo=h(e),v(pe.$$.fragment,e),this.h()},h(){f(p,"name","hf:doc:metadata"),f(p,"content",JSON.stringify(wn)),f(y,"id","finetuning-a-model-with-the-trainer-api"),f(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(y,"href","#finetuning-a-model-with-the-trainer-api"),f(T,"class","relative group"),f(ge,"href","https://colab.research.google.com/"),f(ge,"rel","nofollow"),f(ie,"id","training"),f(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ie,"href","#training"),f(ae,"class","relative group"),f(Ue,"href","/course/chapter2"),f(We,"href","/course/chapter2"),f(de,"id","evaluation"),f(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(de,"href","#evaluation"),f(re,"class","relative group"),f(Ne,"href","/course/chapter2"),f(Ae,"href","https://arxiv.org/pdf/1810.04805.pdf"),f(Ae,"rel","nofollow"),f(Me,"href","/course/chapter7")},m(e,l){t(document.head,p),c(e,P,l),_(u,e,l),c(e,x,l),c(e,T,l),t(T,y),t(y,k),_(A,k,null),t(T,H),t(T,te),t(te,oe),c(e,q,l),_(B,e,l),c(e,_e,l),_(Y,e,l),c(e,so,l),c(e,z,l),t(z,Xo),t(z,Ke),t(Ke,Ko),t(z,Qo),t(z,Qe),t(Qe,Vo),t(z,Zo),t(z,Ve),t(Ve,ea),t(z,ta),t(z,ge),t(ge,oa),t(z,aa),c(e,ro,l),c(e,Ie,l),t(Ie,sa),c(e,io,l),_($e,e,l),c(e,no,l),c(e,ae,l),t(ae,ie),t(ie,Ze),_(Ee,Ze,null),t(ae,ra),t(ae,et),t(et,ia),c(e,lo,l),c(e,I,l),t(I,na),t(I,tt),t(tt,la),t(I,ca),t(I,ot),t(ot,da),t(I,ha),t(I,at),t(at,pa),t(I,ua),c(e,co,l),_(ye,e,l),c(e,ho,l),_(ne,e,l),c(e,po,l),c(e,J,l),t(J,fa),t(J,Ue),t(Ue,ma),t(J,wa),t(J,st),t(st,va),t(J,_a),c(e,uo,l),_(be,e,l),c(e,fo,l),c(e,le,l),t(le,ga),t(le,We),t(We,$a),t(le,Ea),c(e,mo,l),c(e,C,l),t(C,ya),t(C,rt),t(rt,ba),t(C,Ta),t(C,it),t(it,ka),t(C,Ca),t(C,nt),t(nt,ja),t(C,Da),t(C,lt),t(lt,Oa),t(C,Pa),t(C,ct),t(ct,xa),t(C,Aa),c(e,wo,l),_(Te,e,l),c(e,vo,l),c(e,j,l),t(j,qa),t(j,dt),t(dt,za),t(j,Sa),t(j,ht),t(ht,Fa),t(j,Ia),t(j,pt),t(pt,Ua),t(j,Wa),t(j,ut),t(ut,Ga),t(j,Na),t(j,ft),t(ft,La),t(j,Ma),c(e,_o,l),c(e,X,l),t(X,Ra),t(X,mt),t(mt,Ha),t(X,Ba),t(X,wt),t(wt,Ya),t(X,Ja),c(e,go,l),_(ke,e,l),c(e,$o,l),c(e,Ge,l),t(Ge,Xa),c(e,Eo,l),c(e,ce,l),t(ce,O),t(O,Ka),t(O,vt),t(vt,Qa),t(O,Va),t(O,_t),t(_t,Za),t(O,es),t(O,gt),t(gt,ts),t(O,os),t(O,$t),t($t,as),t(O,ss),t(O,Et),t(Et,rs),t(O,is),t(ce,ns),t(ce,se),t(se,ls),t(se,yt),t(yt,cs),t(se,ds),t(se,bt),t(bt,hs),t(se,ps),c(e,yo,l),c(e,re,l),t(re,de),t(de,Tt),_(Ce,Tt,null),t(re,us),t(re,kt),t(kt,fs),c(e,bo,l),c(e,D,l),t(D,ms),t(D,Ct),t(Ct,ws),t(D,vs),t(D,jt),t(jt,_s),t(D,gs),t(D,Dt),t(Dt,$s),t(D,Es),t(D,Ot),t(Ot,ys),t(D,bs),t(D,Pt),t(Pt,Ts),t(D,ks),c(e,To,l),_(je,e,l),c(e,ko,l),_(De,e,l),c(e,Co,l),c(e,m,l),t(m,Cs),t(m,xt),t(xt,js),t(m,Ds),t(m,At),t(At,Os),t(m,Ps),t(m,qt),t(qt,xs),t(m,As),t(m,zt),t(zt,qs),t(m,zs),t(m,St),t(St,Ss),t(m,Fs),t(m,Ft),t(Ft,Is),t(m,Us),t(m,It),t(It,Ws),t(m,Gs),t(m,Ut),t(Ut,Ns),t(m,Ls),c(e,jo,l),c(e,U,l),t(U,Ms),t(U,Wt),t(Wt,Rs),t(U,Hs),t(U,Gt),t(Gt,Bs),t(U,Ys),t(U,Ne),t(Ne,Js),t(U,Xs),c(e,Do,l),_(Oe,e,l),c(e,Oo,l),c(e,S,l),t(S,Ks),t(S,Nt),t(Nt,Qs),t(S,Vs),t(S,Lt),t(Lt,Zs),t(S,er),t(S,Mt),t(Mt,tr),t(S,or),t(S,Rt),t(Rt,ar),t(S,sr),c(e,Po,l),_(Pe,e,l),c(e,xo,l),_(xe,e,l),c(e,Ao,l),c(e,W,l),t(W,rr),t(W,Ae),t(Ae,ir),t(W,nr),t(W,Ht),t(Ht,lr),t(W,cr),t(W,Bt),t(Bt,dr),t(W,hr),c(e,qo,l),c(e,he,l),t(he,pr),t(he,Yt),t(Yt,ur),t(he,fr),c(e,zo,l),_(qe,e,l),c(e,So,l),c(e,K,l),t(K,mr),t(K,Jt),t(Jt,wr),t(K,vr),t(K,Xt),t(Xt,_r),t(K,gr),c(e,Fo,l),_(ze,e,l),c(e,Io,l),c(e,G,l),t(G,$r),t(G,Kt),t(Kt,Er),t(G,yr),t(G,Qt),t(Qt,br),t(G,Tr),t(G,Vt),t(Vt,kr),t(G,Cr),c(e,Uo,l),_(Se,e,l),c(e,Wo,l),c(e,Le,l),t(Le,jr),c(e,Go,l),c(e,Q,l),t(Q,Dr),t(Q,Zt),t(Zt,Or),t(Q,Pr),t(Q,eo),t(eo,xr),t(Q,Ar),c(e,No,l),c(e,V,l),t(V,qr),t(V,to),t(to,zr),t(V,Sr),t(V,Me),t(Me,Fr),t(V,Ir),c(e,Lo,l),_(pe,e,l),Mo=!0},p(e,[l]){const Fe={};l&1&&(Fe.fw=e[0]),u.$set(Fe);const oo={};l&2&&(oo.$$scope={dirty:l,ctx:e}),ne.$set(oo);const ao={};l&2&&(ao.$$scope={dirty:l,ctx:e}),pe.$set(ao)},i(e){Mo||(g(u.$$.fragment,e),g(A.$$.fragment,e),g(B.$$.fragment,e),g(Y.$$.fragment,e),g($e.$$.fragment,e),g(Ee.$$.fragment,e),g(ye.$$.fragment,e),g(ne.$$.fragment,e),g(be.$$.fragment,e),g(Te.$$.fragment,e),g(ke.$$.fragment,e),g(Ce.$$.fragment,e),g(je.$$.fragment,e),g(De.$$.fragment,e),g(Oe.$$.fragment,e),g(Pe.$$.fragment,e),g(xe.$$.fragment,e),g(qe.$$.fragment,e),g(ze.$$.fragment,e),g(Se.$$.fragment,e),g(pe.$$.fragment,e),Mo=!0)},o(e){$(u.$$.fragment,e),$(A.$$.fragment,e),$(B.$$.fragment,e),$(Y.$$.fragment,e),$($e.$$.fragment,e),$(Ee.$$.fragment,e),$(ye.$$.fragment,e),$(ne.$$.fragment,e),$(be.$$.fragment,e),$(Te.$$.fragment,e),$(ke.$$.fragment,e),$(Ce.$$.fragment,e),$(je.$$.fragment,e),$(De.$$.fragment,e),$(Oe.$$.fragment,e),$(Pe.$$.fragment,e),$(xe.$$.fragment,e),$(qe.$$.fragment,e),$(ze.$$.fragment,e),$(Se.$$.fragment,e),$(pe.$$.fragment,e),Mo=!1},d(e){o(p),e&&o(P),E(u,e),e&&o(x),e&&o(T),E(A),e&&o(q),E(B,e),e&&o(_e),E(Y,e),e&&o(so),e&&o(z),e&&o(ro),e&&o(Ie),e&&o(io),E($e,e),e&&o(no),e&&o(ae),E(Ee),e&&o(lo),e&&o(I),e&&o(co),E(ye,e),e&&o(ho),E(ne,e),e&&o(po),e&&o(J),e&&o(uo),E(be,e),e&&o(fo),e&&o(le),e&&o(mo),e&&o(C),e&&o(wo),E(Te,e),e&&o(vo),e&&o(j),e&&o(_o),e&&o(X),e&&o(go),E(ke,e),e&&o($o),e&&o(Ge),e&&o(Eo),e&&o(ce),e&&o(yo),e&&o(re),E(Ce),e&&o(bo),e&&o(D),e&&o(To),E(je,e),e&&o(ko),E(De,e),e&&o(Co),e&&o(m),e&&o(jo),e&&o(U),e&&o(Do),E(Oe,e),e&&o(Oo),e&&o(S),e&&o(Po),E(Pe,e),e&&o(xo),E(xe,e),e&&o(Ao),e&&o(W),e&&o(qo),e&&o(he),e&&o(zo),E(qe,e),e&&o(So),e&&o(K),e&&o(Fo),E(ze,e),e&&o(Io),e&&o(G),e&&o(Uo),E(Se,e),e&&o(Wo),e&&o(Le),e&&o(Go),e&&o(Q),e&&o(No),e&&o(V),e&&o(Lo),E(pe,e)}}}const wn={local:"finetuning-a-model-with-the-trainer-api",sections:[{local:"training",title:"Training"},{local:"evaluation",title:"Evaluation"}],title:"Fine-tuning a model with the Trainer API"};function vn(ve,p,P){let u="pt";return cn(()=>{const x=new URLSearchParams(window.location.search);P(0,u=x.get("fw")||"pt")}),[u]}class kn extends sn{constructor(p){super();rn(this,p,vn,mn,nn,{})}}export{kn as default,wn as metadata};
