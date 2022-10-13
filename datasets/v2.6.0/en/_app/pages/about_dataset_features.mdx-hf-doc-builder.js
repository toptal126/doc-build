import{S as bl,i as xl,s as $l,e as n,k as d,w as q,t,M as El,c as r,d as s,m as h,a as o,x as O,h as l,b as u,G as a,g as p,y as T,q as P,o as L,B as N,v as wl}from"../chunks/vendor-hf-doc-builder.js";import{T as Dt}from"../chunks/Tip-hf-doc-builder.js";import{I as jl}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as Ne}from"../chunks/CodeBlock-hf-doc-builder.js";function Al(z){let c,b,f,v,j;return{c(){c=n("p"),b=t("Refer to "),f=n("a"),v=t("Value"),j=t(" for a full list of supported data types."),this.h()},l(m){c=r(m,"P",{});var _=o(c);b=l(_,"Refer to "),f=r(_,"A",{href:!0});var $=o(f);v=l($,"Value"),$.forEach(s),j=l(_," for a full list of supported data types."),_.forEach(s),this.h()},h(){u(f,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.Value")},m(m,_){p(m,c,_),a(c,b),a(c,f),a(f,v),a(c,j)},d(m){m&&s(c)}}}function Cl(z){let c,b,f,v,j;return{c(){c=n("p"),b=t("See the "),f=n("a"),v=t("flatten"),j=t(" section to learn how you can extract the nested subfields as their own independent columns."),this.h()},l(m){c=r(m,"P",{});var _=o(c);b=l(_,"See the "),f=r(_,"A",{href:!0});var $=o(f);v=l($,"flatten"),$.forEach(s),j=l(_," section to learn how you can extract the nested subfields as their own independent columns."),_.forEach(s),this.h()},h(){u(f,"href","./process#flatten")},m(m,_){p(m,c,_),a(c,b),a(c,f),a(f,v),a(c,j)},d(m){m&&s(c)}}}function kl(z){let c,b,f,v,j,m,_,$;return{c(){c=n("p"),b=t("Index into an audio dataset using the row index first and then the "),f=n("code"),v=t("audio"),j=t(" column - "),m=n("code"),_=t('dataset[0]["audio"]'),$=t(" - to avoid decoding and resampling all the audio files in the dataset. Otherwise, this can be a slow and time-consuming process if you have a large dataset.")},l(U){c=r(U,"P",{});var A=o(c);b=l(A,"Index into an audio dataset using the row index first and then the "),f=r(A,"CODE",{});var x=o(f);v=l(x,"audio"),x.forEach(s),j=l(A," column - "),m=r(A,"CODE",{});var V=o(m);_=l(V,'dataset[0]["audio"]'),V.forEach(s),$=l(A," - to avoid decoding and resampling all the audio files in the dataset. Otherwise, this can be a slow and time-consuming process if you have a large dataset."),A.forEach(s)},m(U,A){p(U,c,A),a(c,b),a(c,f),a(f,v),a(c,j),a(c,m),a(m,_),a(c,$)},d(U){U&&s(c)}}}function Dl(z){let c,b,f,v,j,m,_,$,U,A,x,V,Ua,Va,de,Wa,Ra,he,Ma,za,fe,Ja,Ya,ia,S,Ga,ue,Ba,Ha,Se,Qa,Ka,pa,me,Xa,ca,te,da,J,Za,_e,es,as,ha,Y,W,ss,Ie,ts,ls,Fe,ns,rs,os,D,is,Ue,ps,cs,Ve,ds,hs,We,fs,us,fa,C,ms,Re,_s,vs,Me,gs,ys,ze,js,bs,ua,G,ma,g,xs,ve,$s,Es,Je,ws,As,Ye,Cs,ks,Ge,Ds,qs,ge,Os,Ts,ye,Ps,Ls,_a,B,Ns,je,Ss,Is,va,le,ga,y,Fs,Be,Us,Vs,be,Ws,Rs,He,Ms,zs,Qe,Js,Ys,Ke,Gs,Bs,Xe,Hs,Qs,ya,H,ja,I,Ks,xe,Xs,Zs,$e,et,at,ba,ne,xa,Ee,st,$a,re,Ea,R,Q,Ze,oe,tt,ea,lt,wa,K,nt,we,rt,ot,Aa,F,Ae,aa,it,pt,ct,Ce,sa,dt,ht,ft,ke,ta,ut,mt,Ca,X,_t,De,vt,gt,ka,ie,Da,Z,qa,k,yt,la,jt,bt,qe,xt,$t,na,Et,wt,Oa,pe,Ta;return m=new jl({}),te=new Ne({props:{code:`from datasets import load_dataset
dataset = load_dataset('glue', 'mrpc', split='train')
dataset.features`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>, split=<span class="hljs-string">&#x27;train&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.features
{<span class="hljs-string">&#x27;idx&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;int32&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
 <span class="hljs-string">&#x27;label&#x27;</span>: ClassLabel(num_classes=<span class="hljs-number">2</span>, names=[<span class="hljs-string">&#x27;not_equivalent&#x27;</span>, <span class="hljs-string">&#x27;equivalent&#x27;</span>], names_file=<span class="hljs-literal">None</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
 <span class="hljs-string">&#x27;sentence1&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
 <span class="hljs-string">&#x27;sentence2&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
}`}}),G=new Dt({props:{$$slots:{default:[Al]},$$scope:{ctx:z}}}),le=new Ne({props:{code:`from datasets import load_dataset
dataset = load_dataset('squad', split='train')
dataset.features`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;squad&#x27;</span>, split=<span class="hljs-string">&#x27;train&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.features
{<span class="hljs-string">&#x27;answers&#x27;</span>: <span class="hljs-type">Sequence</span>(feature={<span class="hljs-string">&#x27;text&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>), <span class="hljs-string">&#x27;answer_start&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;int32&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>)}, length=-<span class="hljs-number">1</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
<span class="hljs-string">&#x27;context&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
<span class="hljs-string">&#x27;id&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
<span class="hljs-string">&#x27;question&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
<span class="hljs-string">&#x27;title&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>)}`}}),H=new Dt({props:{$$slots:{default:[Cl]},$$scope:{ctx:z}}}),ne=new Ne({props:{code:"features = Features({'a': Array2D(shape=(1, 3), dtype='int32')})",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>features = Features({<span class="hljs-string">&#x27;a&#x27;</span>: Array2D(shape=(<span class="hljs-number">1</span>, <span class="hljs-number">3</span>), dtype=<span class="hljs-string">&#x27;int32&#x27;</span>)})'}}),re=new Ne({props:{code:"features = Features({'a': Array3D(shape=(None, 5, 2), dtype='int32')})",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>features = Features({<span class="hljs-string">&#x27;a&#x27;</span>: Array3D(shape=(<span class="hljs-literal">None</span>, <span class="hljs-number">5</span>, <span class="hljs-number">2</span>), dtype=<span class="hljs-string">&#x27;int32&#x27;</span>)})'}}),oe=new jl({}),ie=new Ne({props:{code:`from datasets import load_dataset, Audio

dataset = load_dataset("PolyAI/minds14", "en-US", split="train")
dataset[0]["audio"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, Audio

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;PolyAI/minds14&quot;</span>, <span class="hljs-string">&quot;en-US&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>]
{<span class="hljs-string">&#x27;array&#x27;</span>: array([ <span class="hljs-number">0.</span>        ,  <span class="hljs-number">0.00024414</span>, -<span class="hljs-number">0.00024414</span>, ..., -<span class="hljs-number">0.00024414</span>,
         <span class="hljs-number">0.</span>        ,  <span class="hljs-number">0.</span>        ], dtype=float32),
 <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/f14948e0e84be638dd7943ac36518a4cf3324e8b7aa331c5ab11541518e9368c/en-US~JOINT_ACCOUNT/602ba55abb1e6d0fbce92065.wav&#x27;</span>,
 <span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">8000</span>}`}}),Z=new Dt({props:{warning:!0,$$slots:{default:[kl]},$$scope:{ctx:z}}}),pe=new Ne({props:{code:`dataset = load_dataset("PolyAI/minds14", "en-US", split="train").cast_column("audio", Audio(decode=False))
dataset[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;PolyAI/minds14&quot;</span>, <span class="hljs-string">&quot;en-US&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>).cast_column(<span class="hljs-string">&quot;audio&quot;</span>, Audio(decode=<span class="hljs-literal">False</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;audio&#x27;</span>: {<span class="hljs-string">&#x27;bytes&#x27;</span>: <span class="hljs-literal">None</span>,
  <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/f14948e0e84be638dd7943ac36518a4cf3324e8b7aa331c5ab11541518e9368c/en-US~JOINT_ACCOUNT/602ba55abb1e6d0fbce92065.wav&#x27;</span>},
 <span class="hljs-string">&#x27;english_transcription&#x27;</span>: <span class="hljs-string">&#x27;I would like to set up a joint account with my partner&#x27;</span>,
 <span class="hljs-string">&#x27;intent_class&#x27;</span>: <span class="hljs-number">11</span>,
 <span class="hljs-string">&#x27;lang_id&#x27;</span>: <span class="hljs-number">4</span>,
 <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/f14948e0e84be638dd7943ac36518a4cf3324e8b7aa331c5ab11541518e9368c/en-US~JOINT_ACCOUNT/602ba55abb1e6d0fbce92065.wav&#x27;</span>,
 <span class="hljs-string">&#x27;transcription&#x27;</span>: <span class="hljs-string">&#x27;I would like to set up a joint account with my partner&#x27;</span>}`}}),{c(){c=n("meta"),b=d(),f=n("h1"),v=n("a"),j=n("span"),q(m.$$.fragment),_=d(),$=n("span"),U=t("Dataset features"),A=d(),x=n("p"),V=n("a"),Ua=t("Features"),Va=t(" defines the internal structure of a dataset. It is used to specify the underlying serialization format. What\u2019s more interesting to you though is that "),de=n("a"),Wa=t("Features"),Ra=t(" contains high-level information about everything from the column names and types, to the "),he=n("a"),Ma=t("ClassLabel"),za=t(". You can think of "),fe=n("a"),Ja=t("Features"),Ya=t(" as the backbone of a dataset."),ia=d(),S=n("p"),Ga=t("The "),ue=n("a"),Ba=t("Features"),Ha=t(" format is simple: "),Se=n("code"),Qa=t("dict[column_name, column_type]"),Ka=t(". It is a dictionary of column name and column type pairs. The column type provides a wide range of options for describing the type of data you have."),pa=d(),me=n("p"),Xa=t("Let\u2019s have a look at the features of the MRPC dataset from the GLUE benchmark:"),ca=d(),q(te.$$.fragment),da=d(),J=n("p"),Za=t("The "),_e=n("a"),es=t("Value"),as=t(" feature tells \u{1F917} Datasets:"),ha=d(),Y=n("ul"),W=n("li"),ss=t("The "),Ie=n("code"),ts=t("idx"),ls=t(" data type is "),Fe=n("code"),ns=t("int32"),rs=t("."),os=d(),D=n("li"),is=t("The "),Ue=n("code"),ps=t("sentence1"),cs=t(" and "),Ve=n("code"),ds=t("sentence2"),hs=t(" data types are "),We=n("code"),fs=t("string"),us=t("."),fa=d(),C=n("p"),ms=t("\u{1F917} Datasets supports many other data types such as "),Re=n("code"),_s=t("bool"),vs=t(", "),Me=n("code"),gs=t("float32"),ys=t(" and "),ze=n("code"),js=t("binary"),bs=t(" to name just a few."),ua=d(),q(G.$$.fragment),ma=d(),g=n("p"),xs=t("The "),ve=n("a"),$s=t("ClassLabel"),Es=t(" feature informs \u{1F917} Datasets the "),Je=n("code"),ws=t("label"),As=t(" column contains two classes. The classes are labeled "),Ye=n("code"),Cs=t("not_equivalent"),ks=t(" and "),Ge=n("code"),Ds=t("equivalent"),qs=t(". Labels are stored as integers in the dataset. When you retrieve the labels, "),ge=n("a"),Os=t("ClassLabel.int2str()"),Ts=t(" and "),ye=n("a"),Ps=t("ClassLabel.str2int()"),Ls=t(" carries out the conversion from integer value to label name, and vice versa."),_a=d(),B=n("p"),Ns=t("If your data type contains a list of objects, then you want to use the "),je=n("a"),Ss=t("Sequence"),Is=t(" feature. Remember the SQuAD dataset?"),va=d(),q(le.$$.fragment),ga=d(),y=n("p"),Fs=t("The "),Be=n("code"),Us=t("answers"),Vs=t(" field is constructed using the "),be=n("a"),Ws=t("Sequence"),Rs=t(" feature because it contains two subfields, "),He=n("code"),Ms=t("text"),zs=t(" and "),Qe=n("code"),Js=t("answer_start"),Ys=t(", which are lists of "),Ke=n("code"),Gs=t("string"),Bs=t(" and "),Xe=n("code"),Hs=t("int32"),Qs=t(", respectively."),ya=d(),q(H.$$.fragment),ja=d(),I=n("p"),Ks=t("The array feature type is useful for creating arrays of various sizes. You can create arrays with two dimensions using "),xe=n("a"),Xs=t("Array2D"),Zs=t(", and even arrays with five dimensions using "),$e=n("a"),et=t("Array5D"),at=t("."),ba=d(),q(ne.$$.fragment),xa=d(),Ee=n("p"),st=t("The array type also allows the first dimension of the array to be dynamic. This is useful for handling sequences with variable lengths such as sentences, without having to pad or truncate the input to a uniform shape."),$a=d(),q(re.$$.fragment),Ea=d(),R=n("h2"),Q=n("a"),Ze=n("span"),q(oe.$$.fragment),tt=d(),ea=n("span"),lt=t("Audio feature"),wa=d(),K=n("p"),nt=t("Audio datasets have a column with type "),we=n("a"),rt=t("Audio"),ot=t(", which contains three important fields:"),Aa=d(),F=n("ul"),Ae=n("li"),aa=n("code"),it=t("array"),pt=t(": the decoded audio data represented as a 1-dimensional array."),ct=d(),Ce=n("li"),sa=n("code"),dt=t("path"),ht=t(": the path to the downloaded audio file."),ft=d(),ke=n("li"),ta=n("code"),ut=t("sampling_rate"),mt=t(": the sampling rate of the audio data."),Ca=d(),X=n("p"),_t=t("When you load an audio dataset and call the audio column, the "),De=n("a"),vt=t("Audio"),gt=t(" feature automatically decodes and resamples the audio file:"),ka=d(),q(ie.$$.fragment),Da=d(),q(Z.$$.fragment),qa=d(),k=n("p"),yt=t("With "),la=n("code"),jt=t("decode=False"),bt=t(", the "),qe=n("a"),xt=t("Audio"),$t=t(" type simply gives you the path or the bytes of the audio file, without decoding it into an "),na=n("code"),Et=t("array"),wt=t(","),Oa=d(),q(pe.$$.fragment),this.h()},l(e){const i=El('[data-svelte="svelte-1phssyn"]',document.head);c=r(i,"META",{name:!0,content:!0}),i.forEach(s),b=h(e),f=r(e,"H1",{class:!0});var ce=o(f);v=r(ce,"A",{id:!0,class:!0,href:!0});var ra=o(v);j=r(ra,"SPAN",{});var oa=o(j);O(m.$$.fragment,oa),oa.forEach(s),ra.forEach(s),_=h(ce),$=r(ce,"SPAN",{});var qt=o($);U=l(qt,"Dataset features"),qt.forEach(s),ce.forEach(s),A=h(e),x=r(e,"P",{});var M=o(x);V=r(M,"A",{href:!0});var Ot=o(V);Ua=l(Ot,"Features"),Ot.forEach(s),Va=l(M," defines the internal structure of a dataset. It is used to specify the underlying serialization format. What\u2019s more interesting to you though is that "),de=r(M,"A",{href:!0});var Tt=o(de);Wa=l(Tt,"Features"),Tt.forEach(s),Ra=l(M," contains high-level information about everything from the column names and types, to the "),he=r(M,"A",{href:!0});var Pt=o(he);Ma=l(Pt,"ClassLabel"),Pt.forEach(s),za=l(M,". You can think of "),fe=r(M,"A",{href:!0});var Lt=o(fe);Ja=l(Lt,"Features"),Lt.forEach(s),Ya=l(M," as the backbone of a dataset."),M.forEach(s),ia=h(e),S=r(e,"P",{});var Oe=o(S);Ga=l(Oe,"The "),ue=r(Oe,"A",{href:!0});var Nt=o(ue);Ba=l(Nt,"Features"),Nt.forEach(s),Ha=l(Oe," format is simple: "),Se=r(Oe,"CODE",{});var St=o(Se);Qa=l(St,"dict[column_name, column_type]"),St.forEach(s),Ka=l(Oe,". It is a dictionary of column name and column type pairs. The column type provides a wide range of options for describing the type of data you have."),Oe.forEach(s),pa=h(e),me=r(e,"P",{});var It=o(me);Xa=l(It,"Let\u2019s have a look at the features of the MRPC dataset from the GLUE benchmark:"),It.forEach(s),ca=h(e),O(te.$$.fragment,e),da=h(e),J=r(e,"P",{});var Pa=o(J);Za=l(Pa,"The "),_e=r(Pa,"A",{href:!0});var Ft=o(_e);es=l(Ft,"Value"),Ft.forEach(s),as=l(Pa," feature tells \u{1F917} Datasets:"),Pa.forEach(s),ha=h(e),Y=r(e,"UL",{});var La=o(Y);W=r(La,"LI",{});var Te=o(W);ss=l(Te,"The "),Ie=r(Te,"CODE",{});var Ut=o(Ie);ts=l(Ut,"idx"),Ut.forEach(s),ls=l(Te," data type is "),Fe=r(Te,"CODE",{});var Vt=o(Fe);ns=l(Vt,"int32"),Vt.forEach(s),rs=l(Te,"."),Te.forEach(s),os=h(La),D=r(La,"LI",{});var ee=o(D);is=l(ee,"The "),Ue=r(ee,"CODE",{});var Wt=o(Ue);ps=l(Wt,"sentence1"),Wt.forEach(s),cs=l(ee," and "),Ve=r(ee,"CODE",{});var Rt=o(Ve);ds=l(Rt,"sentence2"),Rt.forEach(s),hs=l(ee," data types are "),We=r(ee,"CODE",{});var Mt=o(We);fs=l(Mt,"string"),Mt.forEach(s),us=l(ee,"."),ee.forEach(s),La.forEach(s),fa=h(e),C=r(e,"P",{});var ae=o(C);ms=l(ae,"\u{1F917} Datasets supports many other data types such as "),Re=r(ae,"CODE",{});var zt=o(Re);_s=l(zt,"bool"),zt.forEach(s),vs=l(ae,", "),Me=r(ae,"CODE",{});var Jt=o(Me);gs=l(Jt,"float32"),Jt.forEach(s),ys=l(ae," and "),ze=r(ae,"CODE",{});var Yt=o(ze);js=l(Yt,"binary"),Yt.forEach(s),bs=l(ae," to name just a few."),ae.forEach(s),ua=h(e),O(G.$$.fragment,e),ma=h(e),g=r(e,"P",{});var E=o(g);xs=l(E,"The "),ve=r(E,"A",{href:!0});var Gt=o(ve);$s=l(Gt,"ClassLabel"),Gt.forEach(s),Es=l(E," feature informs \u{1F917} Datasets the "),Je=r(E,"CODE",{});var Bt=o(Je);ws=l(Bt,"label"),Bt.forEach(s),As=l(E," column contains two classes. The classes are labeled "),Ye=r(E,"CODE",{});var Ht=o(Ye);Cs=l(Ht,"not_equivalent"),Ht.forEach(s),ks=l(E," and "),Ge=r(E,"CODE",{});var Qt=o(Ge);Ds=l(Qt,"equivalent"),Qt.forEach(s),qs=l(E,". Labels are stored as integers in the dataset. When you retrieve the labels, "),ge=r(E,"A",{href:!0});var Kt=o(ge);Os=l(Kt,"ClassLabel.int2str()"),Kt.forEach(s),Ts=l(E," and "),ye=r(E,"A",{href:!0});var Xt=o(ye);Ps=l(Xt,"ClassLabel.str2int()"),Xt.forEach(s),Ls=l(E," carries out the conversion from integer value to label name, and vice versa."),E.forEach(s),_a=h(e),B=r(e,"P",{});var Na=o(B);Ns=l(Na,"If your data type contains a list of objects, then you want to use the "),je=r(Na,"A",{href:!0});var Zt=o(je);Ss=l(Zt,"Sequence"),Zt.forEach(s),Is=l(Na," feature. Remember the SQuAD dataset?"),Na.forEach(s),va=h(e),O(le.$$.fragment,e),ga=h(e),y=r(e,"P",{});var w=o(y);Fs=l(w,"The "),Be=r(w,"CODE",{});var el=o(Be);Us=l(el,"answers"),el.forEach(s),Vs=l(w," field is constructed using the "),be=r(w,"A",{href:!0});var al=o(be);Ws=l(al,"Sequence"),al.forEach(s),Rs=l(w," feature because it contains two subfields, "),He=r(w,"CODE",{});var sl=o(He);Ms=l(sl,"text"),sl.forEach(s),zs=l(w," and "),Qe=r(w,"CODE",{});var tl=o(Qe);Js=l(tl,"answer_start"),tl.forEach(s),Ys=l(w,", which are lists of "),Ke=r(w,"CODE",{});var ll=o(Ke);Gs=l(ll,"string"),ll.forEach(s),Bs=l(w," and "),Xe=r(w,"CODE",{});var nl=o(Xe);Hs=l(nl,"int32"),nl.forEach(s),Qs=l(w,", respectively."),w.forEach(s),ya=h(e),O(H.$$.fragment,e),ja=h(e),I=r(e,"P",{});var Pe=o(I);Ks=l(Pe,"The array feature type is useful for creating arrays of various sizes. You can create arrays with two dimensions using "),xe=r(Pe,"A",{href:!0});var rl=o(xe);Xs=l(rl,"Array2D"),rl.forEach(s),Zs=l(Pe,", and even arrays with five dimensions using "),$e=r(Pe,"A",{href:!0});var ol=o($e);et=l(ol,"Array5D"),ol.forEach(s),at=l(Pe,"."),Pe.forEach(s),ba=h(e),O(ne.$$.fragment,e),xa=h(e),Ee=r(e,"P",{});var il=o(Ee);st=l(il,"The array type also allows the first dimension of the array to be dynamic. This is useful for handling sequences with variable lengths such as sentences, without having to pad or truncate the input to a uniform shape."),il.forEach(s),$a=h(e),O(re.$$.fragment,e),Ea=h(e),R=r(e,"H2",{class:!0});var Sa=o(R);Q=r(Sa,"A",{id:!0,class:!0,href:!0});var pl=o(Q);Ze=r(pl,"SPAN",{});var cl=o(Ze);O(oe.$$.fragment,cl),cl.forEach(s),pl.forEach(s),tt=h(Sa),ea=r(Sa,"SPAN",{});var dl=o(ea);lt=l(dl,"Audio feature"),dl.forEach(s),Sa.forEach(s),wa=h(e),K=r(e,"P",{});var Ia=o(K);nt=l(Ia,"Audio datasets have a column with type "),we=r(Ia,"A",{href:!0});var hl=o(we);rt=l(hl,"Audio"),hl.forEach(s),ot=l(Ia,", which contains three important fields:"),Ia.forEach(s),Aa=h(e),F=r(e,"UL",{});var Le=o(F);Ae=r(Le,"LI",{});var At=o(Ae);aa=r(At,"CODE",{});var fl=o(aa);it=l(fl,"array"),fl.forEach(s),pt=l(At,": the decoded audio data represented as a 1-dimensional array."),At.forEach(s),ct=h(Le),Ce=r(Le,"LI",{});var Ct=o(Ce);sa=r(Ct,"CODE",{});var ul=o(sa);dt=l(ul,"path"),ul.forEach(s),ht=l(Ct,": the path to the downloaded audio file."),Ct.forEach(s),ft=h(Le),ke=r(Le,"LI",{});var kt=o(ke);ta=r(kt,"CODE",{});var ml=o(ta);ut=l(ml,"sampling_rate"),ml.forEach(s),mt=l(kt,": the sampling rate of the audio data."),kt.forEach(s),Le.forEach(s),Ca=h(e),X=r(e,"P",{});var Fa=o(X);_t=l(Fa,"When you load an audio dataset and call the audio column, the "),De=r(Fa,"A",{href:!0});var _l=o(De);vt=l(_l,"Audio"),_l.forEach(s),gt=l(Fa," feature automatically decodes and resamples the audio file:"),Fa.forEach(s),ka=h(e),O(ie.$$.fragment,e),Da=h(e),O(Z.$$.fragment,e),qa=h(e),k=r(e,"P",{});var se=o(k);yt=l(se,"With "),la=r(se,"CODE",{});var vl=o(la);jt=l(vl,"decode=False"),vl.forEach(s),bt=l(se,", the "),qe=r(se,"A",{href:!0});var gl=o(qe);xt=l(gl,"Audio"),gl.forEach(s),$t=l(se," type simply gives you the path or the bytes of the audio file, without decoding it into an "),na=r(se,"CODE",{});var yl=o(na);Et=l(yl,"array"),yl.forEach(s),wt=l(se,","),se.forEach(s),Oa=h(e),O(pe.$$.fragment,e),this.h()},h(){u(c,"name","hf:doc:metadata"),u(c,"content",JSON.stringify(ql)),u(v,"id","dataset-features"),u(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(v,"href","#dataset-features"),u(f,"class","relative group"),u(V,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.Features"),u(de,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.Features"),u(he,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.ClassLabel"),u(fe,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.Features"),u(ue,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.Features"),u(_e,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.Value"),u(ve,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.ClassLabel"),u(ge,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.ClassLabel.int2str"),u(ye,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.ClassLabel.str2int"),u(je,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.Sequence"),u(be,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.Sequence"),u(xe,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.Array2D"),u($e,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.Array5D"),u(Q,"id","audio-feature"),u(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Q,"href","#audio-feature"),u(R,"class","relative group"),u(we,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.Audio"),u(De,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.Audio"),u(qe,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.Audio")},m(e,i){a(document.head,c),p(e,b,i),p(e,f,i),a(f,v),a(v,j),T(m,j,null),a(f,_),a(f,$),a($,U),p(e,A,i),p(e,x,i),a(x,V),a(V,Ua),a(x,Va),a(x,de),a(de,Wa),a(x,Ra),a(x,he),a(he,Ma),a(x,za),a(x,fe),a(fe,Ja),a(x,Ya),p(e,ia,i),p(e,S,i),a(S,Ga),a(S,ue),a(ue,Ba),a(S,Ha),a(S,Se),a(Se,Qa),a(S,Ka),p(e,pa,i),p(e,me,i),a(me,Xa),p(e,ca,i),T(te,e,i),p(e,da,i),p(e,J,i),a(J,Za),a(J,_e),a(_e,es),a(J,as),p(e,ha,i),p(e,Y,i),a(Y,W),a(W,ss),a(W,Ie),a(Ie,ts),a(W,ls),a(W,Fe),a(Fe,ns),a(W,rs),a(Y,os),a(Y,D),a(D,is),a(D,Ue),a(Ue,ps),a(D,cs),a(D,Ve),a(Ve,ds),a(D,hs),a(D,We),a(We,fs),a(D,us),p(e,fa,i),p(e,C,i),a(C,ms),a(C,Re),a(Re,_s),a(C,vs),a(C,Me),a(Me,gs),a(C,ys),a(C,ze),a(ze,js),a(C,bs),p(e,ua,i),T(G,e,i),p(e,ma,i),p(e,g,i),a(g,xs),a(g,ve),a(ve,$s),a(g,Es),a(g,Je),a(Je,ws),a(g,As),a(g,Ye),a(Ye,Cs),a(g,ks),a(g,Ge),a(Ge,Ds),a(g,qs),a(g,ge),a(ge,Os),a(g,Ts),a(g,ye),a(ye,Ps),a(g,Ls),p(e,_a,i),p(e,B,i),a(B,Ns),a(B,je),a(je,Ss),a(B,Is),p(e,va,i),T(le,e,i),p(e,ga,i),p(e,y,i),a(y,Fs),a(y,Be),a(Be,Us),a(y,Vs),a(y,be),a(be,Ws),a(y,Rs),a(y,He),a(He,Ms),a(y,zs),a(y,Qe),a(Qe,Js),a(y,Ys),a(y,Ke),a(Ke,Gs),a(y,Bs),a(y,Xe),a(Xe,Hs),a(y,Qs),p(e,ya,i),T(H,e,i),p(e,ja,i),p(e,I,i),a(I,Ks),a(I,xe),a(xe,Xs),a(I,Zs),a(I,$e),a($e,et),a(I,at),p(e,ba,i),T(ne,e,i),p(e,xa,i),p(e,Ee,i),a(Ee,st),p(e,$a,i),T(re,e,i),p(e,Ea,i),p(e,R,i),a(R,Q),a(Q,Ze),T(oe,Ze,null),a(R,tt),a(R,ea),a(ea,lt),p(e,wa,i),p(e,K,i),a(K,nt),a(K,we),a(we,rt),a(K,ot),p(e,Aa,i),p(e,F,i),a(F,Ae),a(Ae,aa),a(aa,it),a(Ae,pt),a(F,ct),a(F,Ce),a(Ce,sa),a(sa,dt),a(Ce,ht),a(F,ft),a(F,ke),a(ke,ta),a(ta,ut),a(ke,mt),p(e,Ca,i),p(e,X,i),a(X,_t),a(X,De),a(De,vt),a(X,gt),p(e,ka,i),T(ie,e,i),p(e,Da,i),T(Z,e,i),p(e,qa,i),p(e,k,i),a(k,yt),a(k,la),a(la,jt),a(k,bt),a(k,qe),a(qe,xt),a(k,$t),a(k,na),a(na,Et),a(k,wt),p(e,Oa,i),T(pe,e,i),Ta=!0},p(e,[i]){const ce={};i&2&&(ce.$$scope={dirty:i,ctx:e}),G.$set(ce);const ra={};i&2&&(ra.$$scope={dirty:i,ctx:e}),H.$set(ra);const oa={};i&2&&(oa.$$scope={dirty:i,ctx:e}),Z.$set(oa)},i(e){Ta||(P(m.$$.fragment,e),P(te.$$.fragment,e),P(G.$$.fragment,e),P(le.$$.fragment,e),P(H.$$.fragment,e),P(ne.$$.fragment,e),P(re.$$.fragment,e),P(oe.$$.fragment,e),P(ie.$$.fragment,e),P(Z.$$.fragment,e),P(pe.$$.fragment,e),Ta=!0)},o(e){L(m.$$.fragment,e),L(te.$$.fragment,e),L(G.$$.fragment,e),L(le.$$.fragment,e),L(H.$$.fragment,e),L(ne.$$.fragment,e),L(re.$$.fragment,e),L(oe.$$.fragment,e),L(ie.$$.fragment,e),L(Z.$$.fragment,e),L(pe.$$.fragment,e),Ta=!1},d(e){s(c),e&&s(b),e&&s(f),N(m),e&&s(A),e&&s(x),e&&s(ia),e&&s(S),e&&s(pa),e&&s(me),e&&s(ca),N(te,e),e&&s(da),e&&s(J),e&&s(ha),e&&s(Y),e&&s(fa),e&&s(C),e&&s(ua),N(G,e),e&&s(ma),e&&s(g),e&&s(_a),e&&s(B),e&&s(va),N(le,e),e&&s(ga),e&&s(y),e&&s(ya),N(H,e),e&&s(ja),e&&s(I),e&&s(ba),N(ne,e),e&&s(xa),e&&s(Ee),e&&s($a),N(re,e),e&&s(Ea),e&&s(R),N(oe),e&&s(wa),e&&s(K),e&&s(Aa),e&&s(F),e&&s(Ca),e&&s(X),e&&s(ka),N(ie,e),e&&s(Da),N(Z,e),e&&s(qa),e&&s(k),e&&s(Oa),N(pe,e)}}}const ql={local:"dataset-features",sections:[{local:"audio-feature",title:"Audio feature"}],title:"Dataset features"};function Ol(z){return wl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Sl extends bl{constructor(c){super();xl(this,c,Ol,Dl,$l,{})}}export{Sl as default,ql as metadata};
