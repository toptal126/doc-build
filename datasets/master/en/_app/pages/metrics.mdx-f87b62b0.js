import{S as Yt,i as Jt,s as Kt,e as r,k as m,w as f,t as c,M as Qt,c as n,d as t,m as u,a as i,x as d,h as p,b as o,F as e,g as l,y as g,L as Vt,q as _,o as v,B as x,v as Wt}from"../chunks/vendor-aa873a46.js";import{I as us}from"../chunks/IconCopyLink-d0ca3106.js";import{C as hs}from"../chunks/CodeBlock-1f14baf3.js";function Xt($t){let j,fs,$,k,ss,H,zs,ts,Bs,ds,q,Ts,D,Ys,Js,gs,P,Ks,J,Qs,Vs,_s,F,vs,w,A,es,R,Ws,as,Xs,xs,M,Zs,K,st,tt,js,U,$s,Q,et,ws,b,S,rs,G,at,ns,rt,bs,V,nt,ys,O,Es,y,C,is,z,it,ls,lt,ks,h,ot,W,ct,pt,os,mt,ut,qs,B,Ps,L,ht,X,ft,dt,As,E,N,cs,T,gt,ps,_t,Ms,I,vt,ms,xt,jt,Ss,Y,Cs;return H=new us({}),F=new hs({props:{code:`from datasets import list_metrics
metrics_list = list_metrics()
len(metrics_list)
print(metrics_list)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> list_metrics
<span class="hljs-meta">&gt;&gt;&gt; </span>metrics_list = list_metrics()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">len</span>(metrics_list)
<span class="hljs-number">28</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(metrics_list)
[<span class="hljs-string">&#x27;accuracy&#x27;</span>, <span class="hljs-string">&#x27;bertscore&#x27;</span>, <span class="hljs-string">&#x27;bleu&#x27;</span>, <span class="hljs-string">&#x27;bleurt&#x27;</span>, <span class="hljs-string">&#x27;cer&#x27;</span>, <span class="hljs-string">&#x27;comet&#x27;</span>, <span class="hljs-string">&#x27;coval&#x27;</span>, <span class="hljs-string">&#x27;cuad&#x27;</span>, <span class="hljs-string">&#x27;f1&#x27;</span>, <span class="hljs-string">&#x27;gleu&#x27;</span>, <span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;indic_glue&#x27;</span>, <span class="hljs-string">&#x27;matthews_correlation&#x27;</span>, <span class="hljs-string">&#x27;meteor&#x27;</span>, <span class="hljs-string">&#x27;pearsonr&#x27;</span>, <span class="hljs-string">&#x27;precision&#x27;</span>, <span class="hljs-string">&#x27;recall&#x27;</span>, <span class="hljs-string">&#x27;rouge&#x27;</span>, <span class="hljs-string">&#x27;sacrebleu&#x27;</span>, <span class="hljs-string">&#x27;sari&#x27;</span>, <span class="hljs-string">&#x27;seqeval&#x27;</span>, <span class="hljs-string">&#x27;spearmanr&#x27;</span>, <span class="hljs-string">&#x27;squad&#x27;</span>, <span class="hljs-string">&#x27;squad_v2&#x27;</span>, <span class="hljs-string">&#x27;super_glue&#x27;</span>, <span class="hljs-string">&#x27;wer&#x27;</span>, <span class="hljs-string">&#x27;wiki_split&#x27;</span>, <span class="hljs-string">&#x27;xnli&#x27;</span>]`}}),R=new us({}),U=new hs({props:{code:`from datasets import load_metric
metric = load_metric('glue', 'mrpc')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric
<span class="hljs-meta">&gt;&gt;&gt; </span>metric = load_metric(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>)`}}),G=new us({}),O=new hs({props:{code:"metric = load_metric('glue', 'mrpc')",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>metric = load_metric(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>)'}}),z=new us({}),B=new hs({props:{code:"print(metric.inputs_description)",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(metric.inputs_description)
Compute GLUE evaluation metric associated to each GLUE dataset.
Args:
    predictions: <span class="hljs-built_in">list</span> of predictions to score.
        Each translation should be tokenized into a <span class="hljs-built_in">list</span> of tokens.
    references: <span class="hljs-built_in">list</span> of lists of references <span class="hljs-keyword">for</span> each translation.
        Each reference should be tokenized into a <span class="hljs-built_in">list</span> of tokens.
Returns: depending on the GLUE subset, one <span class="hljs-keyword">or</span> several of:
    <span class="hljs-string">&quot;accuracy&quot;</span>: Accuracy
    <span class="hljs-string">&quot;f1&quot;</span>: F1 score
    <span class="hljs-string">&quot;pearson&quot;</span>: Pearson Correlation
    <span class="hljs-string">&quot;spearmanr&quot;</span>: Spearman Correlation
    <span class="hljs-string">&quot;matthews_correlation&quot;</span>: Matthew Correlation
Examples:
    &gt;&gt;&gt; glue_metric = datasets.load_metric(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;sst2&#x27;</span>)  <span class="hljs-comment"># &#x27;sst2&#x27; or any of [&quot;mnli&quot;, &quot;mnli_mismatched&quot;, &quot;mnli_matched&quot;, &quot;qnli&quot;, &quot;rte&quot;, &quot;wnli&quot;, &quot;hans&quot;]</span>
    &gt;&gt;&gt; references = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]
    &gt;&gt;&gt; predictions = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]
    &gt;&gt;&gt; results = glue_metric.compute(predictions=predictions, references=references)
    &gt;&gt;&gt; <span class="hljs-built_in">print</span>(results)
    {<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">1.0</span>}
    ...
    &gt;&gt;&gt; glue_metric = datasets.load_metric(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>)  <span class="hljs-comment"># &#x27;mrpc&#x27; or &#x27;qqp&#x27;</span>
    &gt;&gt;&gt; references = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]
    &gt;&gt;&gt; predictions = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]
    &gt;&gt;&gt; results = glue_metric.compute(predictions=predictions, references=references)
    &gt;&gt;&gt; <span class="hljs-built_in">print</span>(results)
    {<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">1.0</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">1.0</span>}
    ...`}}),T=new us({}),Y=new hs({props:{code:`model_predictions = model(model_inputs)
final_score = metric.compute(predictions=model_predictions, references=gold_references)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>model_predictions = model(model_inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>final_score = metric.compute(predictions=model_predictions, references=gold_references)`}}),{c(){j=r("meta"),fs=m(),$=r("h1"),k=r("a"),ss=r("span"),f(H.$$.fragment),zs=m(),ts=r("span"),Bs=c("Evaluate predictions"),ds=m(),q=r("p"),Ts=c("\u{1F917} Datasets provides various common and NLP-specific "),D=r("a"),Ys=c("metrics"),Js=c(" for you to measure your models performance. In this section of the tutorials, you will load a metric and use it to evaluate your models predictions."),gs=m(),P=r("p"),Ks=c("You can see what metrics are available with "),J=r("a"),Qs=c("list_metrics()"),Vs=c(":"),_s=m(),f(F.$$.fragment),vs=m(),w=r("h2"),A=r("a"),es=r("span"),f(R.$$.fragment),Ws=m(),as=r("span"),Xs=c("Load metric"),xs=m(),M=r("p"),Zs=c("It is very easy to load a metric with \u{1F917} Datasets. In fact, you will notice that it is very similar to loading a dataset! Load a metric from the Hub with "),K=r("a"),st=c("load_metric()"),tt=c(":"),js=m(),f(U.$$.fragment),$s=m(),Q=r("p"),et=c("This will load the metric associated with the MRPC dataset from the GLUE benchmark."),ws=m(),b=r("h2"),S=r("a"),rs=r("span"),f(G.$$.fragment),at=m(),ns=r("span"),rt=c("Select a configuration"),bs=m(),V=r("p"),nt=c("If you are using a benchmark dataset, you need to select a metric that is associated with the configuration you are using. Select a metric configuration by providing the configuration name:"),ys=m(),f(O.$$.fragment),Es=m(),y=r("h2"),C=r("a"),is=r("span"),f(z.$$.fragment),it=m(),ls=r("span"),lt=c("Metrics object"),ks=m(),h=r("p"),ot=c("Before you begin using a "),W=r("a"),ct=c("Metric"),pt=c(" object, you should get to know it a little better. As with a dataset, you can return some basic information about a metric. For example, use "),os=r("code"),mt=c("Metric.inputs_descriptions"),ut=c(" to get more information about a metrics expected input format and some usage examples:"),qs=m(),f(B.$$.fragment),Ps=m(),L=r("p"),ht=c("Notice for the MRPC configuration, the metric expects the input format to be zero or one. For a complete list of attributes you can return with your metric, take a look at "),X=r("a"),ft=c("MetricInfo"),dt=c("."),As=m(),E=r("h2"),N=r("a"),cs=r("span"),f(T.$$.fragment),gt=m(),ps=r("span"),_t=c("Compute metric"),Ms=m(),I=r("p"),vt=c("Once you have loaded a metric, you are ready to use it to evaluate a models predictions. Provide the model predictions and references to "),ms=r("code"),xt=c("Metric.compute"),jt=c(":"),Ss=m(),f(Y.$$.fragment),this.h()},l(s){const a=Qt('[data-svelte="svelte-1phssyn"]',document.head);j=n(a,"META",{name:!0,content:!0}),a.forEach(t),fs=u(s),$=n(s,"H1",{class:!0});var Ls=i($);k=n(Ls,"A",{id:!0,class:!0,href:!0});var wt=i(k);ss=n(wt,"SPAN",{});var bt=i(ss);d(H.$$.fragment,bt),bt.forEach(t),wt.forEach(t),zs=u(Ls),ts=n(Ls,"SPAN",{});var yt=i(ts);Bs=p(yt,"Evaluate predictions"),yt.forEach(t),Ls.forEach(t),ds=u(s),q=n(s,"P",{});var Ns=i(q);Ts=p(Ns,"\u{1F917} Datasets provides various common and NLP-specific "),D=n(Ns,"A",{href:!0,rel:!0});var Et=i(D);Ys=p(Et,"metrics"),Et.forEach(t),Js=p(Ns," for you to measure your models performance. In this section of the tutorials, you will load a metric and use it to evaluate your models predictions."),Ns.forEach(t),gs=u(s),P=n(s,"P",{});var Is=i(P);Ks=p(Is,"You can see what metrics are available with "),J=n(Is,"A",{href:!0});var kt=i(J);Qs=p(kt,"list_metrics()"),kt.forEach(t),Vs=p(Is,":"),Is.forEach(t),_s=u(s),d(F.$$.fragment,s),vs=u(s),w=n(s,"H2",{class:!0});var Hs=i(w);A=n(Hs,"A",{id:!0,class:!0,href:!0});var qt=i(A);es=n(qt,"SPAN",{});var Pt=i(es);d(R.$$.fragment,Pt),Pt.forEach(t),qt.forEach(t),Ws=u(Hs),as=n(Hs,"SPAN",{});var At=i(as);Xs=p(At,"Load metric"),At.forEach(t),Hs.forEach(t),xs=u(s),M=n(s,"P",{});var Ds=i(M);Zs=p(Ds,"It is very easy to load a metric with \u{1F917} Datasets. In fact, you will notice that it is very similar to loading a dataset! Load a metric from the Hub with "),K=n(Ds,"A",{href:!0});var Mt=i(K);st=p(Mt,"load_metric()"),Mt.forEach(t),tt=p(Ds,":"),Ds.forEach(t),js=u(s),d(U.$$.fragment,s),$s=u(s),Q=n(s,"P",{});var St=i(Q);et=p(St,"This will load the metric associated with the MRPC dataset from the GLUE benchmark."),St.forEach(t),ws=u(s),b=n(s,"H2",{class:!0});var Fs=i(b);S=n(Fs,"A",{id:!0,class:!0,href:!0});var Ct=i(S);rs=n(Ct,"SPAN",{});var Lt=i(rs);d(G.$$.fragment,Lt),Lt.forEach(t),Ct.forEach(t),at=u(Fs),ns=n(Fs,"SPAN",{});var Nt=i(ns);rt=p(Nt,"Select a configuration"),Nt.forEach(t),Fs.forEach(t),bs=u(s),V=n(s,"P",{});var It=i(V);nt=p(It,"If you are using a benchmark dataset, you need to select a metric that is associated with the configuration you are using. Select a metric configuration by providing the configuration name:"),It.forEach(t),ys=u(s),d(O.$$.fragment,s),Es=u(s),y=n(s,"H2",{class:!0});var Rs=i(y);C=n(Rs,"A",{id:!0,class:!0,href:!0});var Ht=i(C);is=n(Ht,"SPAN",{});var Dt=i(is);d(z.$$.fragment,Dt),Dt.forEach(t),Ht.forEach(t),it=u(Rs),ls=n(Rs,"SPAN",{});var Ft=i(ls);lt=p(Ft,"Metrics object"),Ft.forEach(t),Rs.forEach(t),ks=u(s),h=n(s,"P",{});var Z=i(h);ot=p(Z,"Before you begin using a "),W=n(Z,"A",{href:!0});var Rt=i(W);ct=p(Rt,"Metric"),Rt.forEach(t),pt=p(Z," object, you should get to know it a little better. As with a dataset, you can return some basic information about a metric. For example, use "),os=n(Z,"CODE",{});var Ut=i(os);mt=p(Ut,"Metric.inputs_descriptions"),Ut.forEach(t),ut=p(Z," to get more information about a metrics expected input format and some usage examples:"),Z.forEach(t),qs=u(s),d(B.$$.fragment,s),Ps=u(s),L=n(s,"P",{});var Us=i(L);ht=p(Us,"Notice for the MRPC configuration, the metric expects the input format to be zero or one. For a complete list of attributes you can return with your metric, take a look at "),X=n(Us,"A",{href:!0});var Gt=i(X);ft=p(Gt,"MetricInfo"),Gt.forEach(t),dt=p(Us,"."),Us.forEach(t),As=u(s),E=n(s,"H2",{class:!0});var Gs=i(E);N=n(Gs,"A",{id:!0,class:!0,href:!0});var Ot=i(N);cs=n(Ot,"SPAN",{});var zt=i(cs);d(T.$$.fragment,zt),zt.forEach(t),Ot.forEach(t),gt=u(Gs),ps=n(Gs,"SPAN",{});var Bt=i(ps);_t=p(Bt,"Compute metric"),Bt.forEach(t),Gs.forEach(t),Ms=u(s),I=n(s,"P",{});var Os=i(I);vt=p(Os,"Once you have loaded a metric, you are ready to use it to evaluate a models predictions. Provide the model predictions and references to "),ms=n(Os,"CODE",{});var Tt=i(ms);xt=p(Tt,"Metric.compute"),Tt.forEach(t),jt=p(Os,":"),Os.forEach(t),Ss=u(s),d(Y.$$.fragment,s),this.h()},h(){o(j,"name","hf:doc:metadata"),o(j,"content",JSON.stringify(Zt)),o(k,"id","evaluate-predictions"),o(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(k,"href","#evaluate-predictions"),o($,"class","relative group"),o(D,"href","https://huggingface.co/metrics"),o(D,"rel","nofollow"),o(J,"href","/docs/datasets/master/en/package_reference/loading_methods#datasets.list_metrics"),o(A,"id","load-metric"),o(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(A,"href","#load-metric"),o(w,"class","relative group"),o(K,"href","/docs/datasets/master/en/package_reference/loading_methods#datasets.load_metric"),o(S,"id","select-a-configuration"),o(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(S,"href","#select-a-configuration"),o(b,"class","relative group"),o(C,"id","metrics-object"),o(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(C,"href","#metrics-object"),o(y,"class","relative group"),o(W,"href","/docs/datasets/master/en/package_reference/main_classes#datasets.Metric"),o(X,"href","/docs/datasets/master/en/package_reference/main_classes#datasets.MetricInfo"),o(N,"id","compute-metric"),o(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(N,"href","#compute-metric"),o(E,"class","relative group")},m(s,a){e(document.head,j),l(s,fs,a),l(s,$,a),e($,k),e(k,ss),g(H,ss,null),e($,zs),e($,ts),e(ts,Bs),l(s,ds,a),l(s,q,a),e(q,Ts),e(q,D),e(D,Ys),e(q,Js),l(s,gs,a),l(s,P,a),e(P,Ks),e(P,J),e(J,Qs),e(P,Vs),l(s,_s,a),g(F,s,a),l(s,vs,a),l(s,w,a),e(w,A),e(A,es),g(R,es,null),e(w,Ws),e(w,as),e(as,Xs),l(s,xs,a),l(s,M,a),e(M,Zs),e(M,K),e(K,st),e(M,tt),l(s,js,a),g(U,s,a),l(s,$s,a),l(s,Q,a),e(Q,et),l(s,ws,a),l(s,b,a),e(b,S),e(S,rs),g(G,rs,null),e(b,at),e(b,ns),e(ns,rt),l(s,bs,a),l(s,V,a),e(V,nt),l(s,ys,a),g(O,s,a),l(s,Es,a),l(s,y,a),e(y,C),e(C,is),g(z,is,null),e(y,it),e(y,ls),e(ls,lt),l(s,ks,a),l(s,h,a),e(h,ot),e(h,W),e(W,ct),e(h,pt),e(h,os),e(os,mt),e(h,ut),l(s,qs,a),g(B,s,a),l(s,Ps,a),l(s,L,a),e(L,ht),e(L,X),e(X,ft),e(L,dt),l(s,As,a),l(s,E,a),e(E,N),e(N,cs),g(T,cs,null),e(E,gt),e(E,ps),e(ps,_t),l(s,Ms,a),l(s,I,a),e(I,vt),e(I,ms),e(ms,xt),e(I,jt),l(s,Ss,a),g(Y,s,a),Cs=!0},p:Vt,i(s){Cs||(_(H.$$.fragment,s),_(F.$$.fragment,s),_(R.$$.fragment,s),_(U.$$.fragment,s),_(G.$$.fragment,s),_(O.$$.fragment,s),_(z.$$.fragment,s),_(B.$$.fragment,s),_(T.$$.fragment,s),_(Y.$$.fragment,s),Cs=!0)},o(s){v(H.$$.fragment,s),v(F.$$.fragment,s),v(R.$$.fragment,s),v(U.$$.fragment,s),v(G.$$.fragment,s),v(O.$$.fragment,s),v(z.$$.fragment,s),v(B.$$.fragment,s),v(T.$$.fragment,s),v(Y.$$.fragment,s),Cs=!1},d(s){t(j),s&&t(fs),s&&t($),x(H),s&&t(ds),s&&t(q),s&&t(gs),s&&t(P),s&&t(_s),x(F,s),s&&t(vs),s&&t(w),x(R),s&&t(xs),s&&t(M),s&&t(js),x(U,s),s&&t($s),s&&t(Q),s&&t(ws),s&&t(b),x(G),s&&t(bs),s&&t(V),s&&t(ys),x(O,s),s&&t(Es),s&&t(y),x(z),s&&t(ks),s&&t(h),s&&t(qs),x(B,s),s&&t(Ps),s&&t(L),s&&t(As),s&&t(E),x(T),s&&t(Ms),s&&t(I),s&&t(Ss),x(Y,s)}}}const Zt={local:"evaluate-predictions",sections:[{local:"load-metric",title:"Load metric"},{local:"select-a-configuration",title:"Select a configuration"},{local:"metrics-object",title:"Metrics object"},{local:"compute-metric",title:"Compute metric"}],title:"Evaluate predictions"};function se($t){return Wt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class re extends Yt{constructor(j){super();Jt(this,j,se,Xt,Kt,{})}}export{re as default,Zt as metadata};
