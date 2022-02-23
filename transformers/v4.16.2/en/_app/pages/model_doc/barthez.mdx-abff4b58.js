import{S as ls,i as cs,s as ds,e as o,k as c,w as g,t as a,L as hs,c as s,d as n,m as d,a as r,x as k,h as i,b as l,J as e,g as m,y as _,K as ms,q as v,o as b,B as z}from"../../chunks/vendor-b1433968.js";import{D as K}from"../../chunks/Docstring-ff504c58.js";import{I as at}from"../../chunks/IconCopyLink-7029626d.js";function ps(Ft){let B,ve,T,w,Se,X,It,Ce,St,it,L,I,Ne,j,Ct,Oe,Nt,lt,S,Ot,G,Ut,Mt,ct,be,Vt,dt,ze,Ue,Wt,ht,E,Ht,Q,Jt,Kt,Y,Xt,jt,mt,P,C,Me,Z,Gt,Ve,Qt,pt,Te,ee,Yt,te,Zt,en,ft,R,N,We,ne,tn,He,nn,ut,p,oe,on,q,sn,we,rn,an,qe,ln,cn,se,dn,hn,mn,re,pn,ye,fn,un,gn,D,kn,Je,_n,vn,Ke,bn,zn,Tn,$,ae,wn,Xe,qn,yn,ie,Be,Bn,je,En,$n,Ee,An,Ge,xn,Ln,O,le,Pn,Qe,Rn,Dn,U,ce,Fn,Ye,In,Sn,M,de,Cn,he,Nn,Ze,On,Un,gt,F,V,et,me,Mn,tt,Vn,kt,u,pe,Wn,y,Hn,$e,Jn,Kn,Ae,Xn,jn,fe,Gn,Qn,Yn,ue,Zn,xe,eo,to,no,A,ge,oo,nt,so,ro,ke,Le,ao,ot,io,lo,Pe,co,st,ho,mo,W,_e,po,rt,fo,_t;return X=new at({}),j=new at({}),Z=new at({}),ne=new at({}),oe=new K({props:{name:"class transformers.BarthezTokenizer",anchor:"transformers.BarthezTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/barthez/tokenization_barthez.py#L49",parametersDescription:[{anchor:"transformers.BarthezTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BarthezTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BarthezTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BarthezTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BarthezTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BarthezTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BarthezTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BarthezTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BarthezTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.BarthezTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"}]}}),ae=new K({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BarthezTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/barthez/tokenization_barthez.py#L163",parametersDescription:[{anchor:"transformers.BarthezTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),le=new K({props:{name:"convert_tokens_to_string",anchor:"transformers.BarthezTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/barthez/tokenization_barthez.py#L279"}}),ce=new K({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BarthezTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/barthez/tokenization_barthez.py#L216",parametersDescription:[{anchor:"transformers.BarthezTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),de=new K({props:{name:"get_special_tokens_mask",anchor:"transformers.BarthezTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/barthez/tokenization_barthez.py#L189",parametersDescription:[{anchor:"transformers.BarthezTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BarthezTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),me=new at({}),pe=new K({props:{name:"class transformers.BarthezTokenizerFast",anchor:"transformers.BarthezTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/barthez/tokenization_barthez_fast.py#L59",parametersDescription:[{anchor:"transformers.BarthezTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BarthezTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BarthezTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BarthezTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BarthezTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BarthezTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BarthezTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BarthezTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BarthezTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}]}}),ge=new K({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BarthezTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/barthez/tokenization_barthez_fast.py#L148",parametersDescription:[{anchor:"transformers.BarthezTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),_e=new K({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BarthezTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/barthez/tokenization_barthez_fast.py#L174",parametersDescription:[{anchor:"transformers.BarthezTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){B=o("meta"),ve=c(),T=o("h1"),w=o("a"),Se=o("span"),g(X.$$.fragment),It=c(),Ce=o("span"),St=a("BARThez"),it=c(),L=o("h2"),I=o("a"),Ne=o("span"),g(j.$$.fragment),Ct=c(),Oe=o("span"),Nt=a("Overview"),lt=c(),S=o("p"),Ot=a("The BARThez model was proposed in "),G=o("a"),Ut=a("BARThez: a Skilled Pretrained French Sequence-to-Sequence Model"),Mt=a(` by Moussa Kamal Eddine, Antoine J.-P. Tixier, Michalis Vazirgiannis on 23 Oct,
2020.`),ct=c(),be=o("p"),Vt=a("The abstract of the paper:"),dt=c(),ze=o("p"),Ue=o("em"),Wt=a(`Inductive transfer learning, enabled by self-supervised learning, have taken the entire Natural Language Processing
(NLP) field by storm, with models such as BERT and BART setting new state of the art on countless natural language
understanding tasks. While there are some notable exceptions, most of the available models and research have been
conducted for the English language. In this work, we introduce BARThez, the first BART model for the French language
(to the best of our knowledge). BARThez was pretrained on a very large monolingual French corpus from past research
that we adapted to suit BART\u2019s perturbation schemes. Unlike already existing BERT-based French language models such as
CamemBERT and FlauBERT, BARThez is particularly well-suited for generative tasks, since not only its encoder but also
its decoder is pretrained. In addition to discriminative tasks from the FLUE benchmark, we evaluate BARThez on a novel
summarization dataset, OrangeSum, that we release with this paper. We also continue the pretraining of an already
pretrained multilingual BART on BARThez\u2019s corpus, and we show that the resulting model, which we call mBARTHez,
provides a significant boost over vanilla BARThez, and is on par with or outperforms CamemBERT and FlauBERT.`),ht=c(),E=o("p"),Ht=a("This model was contributed by "),Q=o("a"),Jt=a("moussakam"),Kt=a(". The Authors\u2019 code can be found "),Y=o("a"),Xt=a("here"),jt=a("."),mt=c(),P=o("h3"),C=o("a"),Me=o("span"),g(Z.$$.fragment),Gt=c(),Ve=o("span"),Qt=a("Examples"),pt=c(),Te=o("ul"),ee=o("li"),Yt=a(`BARThez can be fine-tuned on sequence-to-sequence tasks in a similar way as BART, check:
`),te=o("a"),Zt=a("examples/pytorch/summarization/"),en=a("."),ft=c(),R=o("h2"),N=o("a"),We=o("span"),g(ne.$$.fragment),tn=c(),He=o("span"),nn=a("BarthezTokenizer"),ut=c(),p=o("div"),g(oe.$$.fragment),on=c(),q=o("p"),sn=a("Adapted from "),we=o("a"),rn=a("CamembertTokenizer"),an=a(" and "),qe=o("a"),ln=a("BartTokenizer"),cn=a(`. Construct a BARThez tokenizer. Based on
`),se=o("a"),dn=a("SentencePiece"),hn=a("."),mn=c(),re=o("p"),pn=a("This tokenizer inherits from "),ye=o("a"),fn=a("PreTrainedTokenizer"),un=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),gn=c(),D=o("p"),kn=a(`Attributes:
sp_model (`),Je=o("code"),_n=a("SentencePieceProcessor"),vn=a(`):
The `),Ke=o("em"),bn=a("SentencePiece"),zn=a(" processor that is used for every conversion (string, tokens and IDs)."),Tn=c(),$=o("div"),g(ae.$$.fragment),wn=c(),Xe=o("p"),qn=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`),yn=c(),ie=o("ul"),Be=o("li"),Bn=a("single sequence: "),je=o("code"),En=a("<s> X </s>"),$n=c(),Ee=o("li"),An=a("pair of sequences: "),Ge=o("code"),xn=a("<s> A </s></s> B </s>"),Ln=c(),O=o("div"),g(le.$$.fragment),Pn=c(),Qe=o("p"),Rn=a("Converts a sequence of tokens (strings for sub-words) in a single string."),Dn=c(),U=o("div"),g(ce.$$.fragment),Fn=c(),Ye=o("p"),In=a("Create a mask from the two sequences passed to be used in a sequence-pair classification task."),Sn=c(),M=o("div"),g(de.$$.fragment),Cn=c(),he=o("p"),Nn=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ze=o("code"),On=a("prepare_for_model"),Un=a(" method."),gt=c(),F=o("h2"),V=o("a"),et=o("span"),g(me.$$.fragment),Mn=c(),tt=o("span"),Vn=a("BarthezTokenizerFast"),kt=c(),u=o("div"),g(pe.$$.fragment),Wn=c(),y=o("p"),Hn=a("Adapted from "),$e=o("a"),Jn=a("CamembertTokenizer"),Kn=a(" and "),Ae=o("a"),Xn=a("BartTokenizer"),jn=a(`. Construct a \u201Cfast\u201D BARThez tokenizer. Based on
`),fe=o("a"),Gn=a("SentencePiece"),Qn=a("."),Yn=c(),ue=o("p"),Zn=a("This tokenizer inherits from "),xe=o("a"),eo=a("PreTrainedTokenizerFast"),to=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),no=c(),A=o("div"),g(ge.$$.fragment),oo=c(),nt=o("p"),so=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`),ro=c(),ke=o("ul"),Le=o("li"),ao=a("single sequence: "),ot=o("code"),io=a("<s> X </s>"),lo=c(),Pe=o("li"),co=a("pair of sequences: "),st=o("code"),ho=a("<s> A </s></s> B </s>"),mo=c(),W=o("div"),g(_e.$$.fragment),po=c(),rt=o("p"),fo=a("Create a mask from the two sequences passed to be used in a sequence-pair classification task."),this.h()},l(t){const h=hs('[data-svelte="svelte-1phssyn"]',document.head);B=s(h,"META",{name:!0,content:!0}),h.forEach(n),ve=d(t),T=s(t,"H1",{class:!0});var vt=r(T);w=s(vt,"A",{id:!0,class:!0,href:!0});var vo=r(w);Se=s(vo,"SPAN",{});var bo=r(Se);k(X.$$.fragment,bo),bo.forEach(n),vo.forEach(n),It=d(vt),Ce=s(vt,"SPAN",{});var zo=r(Ce);St=i(zo,"BARThez"),zo.forEach(n),vt.forEach(n),it=d(t),L=s(t,"H2",{class:!0});var bt=r(L);I=s(bt,"A",{id:!0,class:!0,href:!0});var To=r(I);Ne=s(To,"SPAN",{});var wo=r(Ne);k(j.$$.fragment,wo),wo.forEach(n),To.forEach(n),Ct=d(bt),Oe=s(bt,"SPAN",{});var qo=r(Oe);Nt=i(qo,"Overview"),qo.forEach(n),bt.forEach(n),lt=d(t),S=s(t,"P",{});var zt=r(S);Ot=i(zt,"The BARThez model was proposed in "),G=s(zt,"A",{href:!0,rel:!0});var yo=r(G);Ut=i(yo,"BARThez: a Skilled Pretrained French Sequence-to-Sequence Model"),yo.forEach(n),Mt=i(zt,` by Moussa Kamal Eddine, Antoine J.-P. Tixier, Michalis Vazirgiannis on 23 Oct,
2020.`),zt.forEach(n),ct=d(t),be=s(t,"P",{});var Bo=r(be);Vt=i(Bo,"The abstract of the paper:"),Bo.forEach(n),dt=d(t),ze=s(t,"P",{});var Eo=r(ze);Ue=s(Eo,"EM",{});var $o=r(Ue);Wt=i($o,`Inductive transfer learning, enabled by self-supervised learning, have taken the entire Natural Language Processing
(NLP) field by storm, with models such as BERT and BART setting new state of the art on countless natural language
understanding tasks. While there are some notable exceptions, most of the available models and research have been
conducted for the English language. In this work, we introduce BARThez, the first BART model for the French language
(to the best of our knowledge). BARThez was pretrained on a very large monolingual French corpus from past research
that we adapted to suit BART\u2019s perturbation schemes. Unlike already existing BERT-based French language models such as
CamemBERT and FlauBERT, BARThez is particularly well-suited for generative tasks, since not only its encoder but also
its decoder is pretrained. In addition to discriminative tasks from the FLUE benchmark, we evaluate BARThez on a novel
summarization dataset, OrangeSum, that we release with this paper. We also continue the pretraining of an already
pretrained multilingual BART on BARThez\u2019s corpus, and we show that the resulting model, which we call mBARTHez,
provides a significant boost over vanilla BARThez, and is on par with or outperforms CamemBERT and FlauBERT.`),$o.forEach(n),Eo.forEach(n),ht=d(t),E=s(t,"P",{});var Re=r(E);Ht=i(Re,"This model was contributed by "),Q=s(Re,"A",{href:!0,rel:!0});var Ao=r(Q);Jt=i(Ao,"moussakam"),Ao.forEach(n),Kt=i(Re,". The Authors\u2019 code can be found "),Y=s(Re,"A",{href:!0,rel:!0});var xo=r(Y);Xt=i(xo,"here"),xo.forEach(n),jt=i(Re,"."),Re.forEach(n),mt=d(t),P=s(t,"H3",{class:!0});var Tt=r(P);C=s(Tt,"A",{id:!0,class:!0,href:!0});var Lo=r(C);Me=s(Lo,"SPAN",{});var Po=r(Me);k(Z.$$.fragment,Po),Po.forEach(n),Lo.forEach(n),Gt=d(Tt),Ve=s(Tt,"SPAN",{});var Ro=r(Ve);Qt=i(Ro,"Examples"),Ro.forEach(n),Tt.forEach(n),pt=d(t),Te=s(t,"UL",{});var Do=r(Te);ee=s(Do,"LI",{});var wt=r(ee);Yt=i(wt,`BARThez can be fine-tuned on sequence-to-sequence tasks in a similar way as BART, check:
`),te=s(wt,"A",{href:!0,rel:!0});var Fo=r(te);Zt=i(Fo,"examples/pytorch/summarization/"),Fo.forEach(n),en=i(wt,"."),wt.forEach(n),Do.forEach(n),ft=d(t),R=s(t,"H2",{class:!0});var qt=r(R);N=s(qt,"A",{id:!0,class:!0,href:!0});var Io=r(N);We=s(Io,"SPAN",{});var So=r(We);k(ne.$$.fragment,So),So.forEach(n),Io.forEach(n),tn=d(qt),He=s(qt,"SPAN",{});var Co=r(He);nn=i(Co,"BarthezTokenizer"),Co.forEach(n),qt.forEach(n),ut=d(t),p=s(t,"DIV",{class:!0});var f=r(p);k(oe.$$.fragment,f),on=d(f),q=s(f,"P",{});var H=r(q);sn=i(H,"Adapted from "),we=s(H,"A",{href:!0});var No=r(we);rn=i(No,"CamembertTokenizer"),No.forEach(n),an=i(H," and "),qe=s(H,"A",{href:!0});var Oo=r(qe);ln=i(Oo,"BartTokenizer"),Oo.forEach(n),cn=i(H,`. Construct a BARThez tokenizer. Based on
`),se=s(H,"A",{href:!0,rel:!0});var Uo=r(se);dn=i(Uo,"SentencePiece"),Uo.forEach(n),hn=i(H,"."),H.forEach(n),mn=d(f),re=s(f,"P",{});var yt=r(re);pn=i(yt,"This tokenizer inherits from "),ye=s(yt,"A",{href:!0});var Mo=r(ye);fn=i(Mo,"PreTrainedTokenizer"),Mo.forEach(n),un=i(yt,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),yt.forEach(n),gn=d(f),D=s(f,"P",{});var De=r(D);kn=i(De,`Attributes:
sp_model (`),Je=s(De,"CODE",{});var Vo=r(Je);_n=i(Vo,"SentencePieceProcessor"),Vo.forEach(n),vn=i(De,`):
The `),Ke=s(De,"EM",{});var Wo=r(Ke);bn=i(Wo,"SentencePiece"),Wo.forEach(n),zn=i(De," processor that is used for every conversion (string, tokens and IDs)."),De.forEach(n),Tn=d(f),$=s(f,"DIV",{class:!0});var Fe=r($);k(ae.$$.fragment,Fe),wn=d(Fe),Xe=s(Fe,"P",{});var Ho=r(Xe);qn=i(Ho,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`),Ho.forEach(n),yn=d(Fe),ie=s(Fe,"UL",{});var Bt=r(ie);Be=s(Bt,"LI",{});var uo=r(Be);Bn=i(uo,"single sequence: "),je=s(uo,"CODE",{});var Jo=r(je);En=i(Jo,"<s> X </s>"),Jo.forEach(n),uo.forEach(n),$n=d(Bt),Ee=s(Bt,"LI",{});var go=r(Ee);An=i(go,"pair of sequences: "),Ge=s(go,"CODE",{});var Ko=r(Ge);xn=i(Ko,"<s> A </s></s> B </s>"),Ko.forEach(n),go.forEach(n),Bt.forEach(n),Fe.forEach(n),Ln=d(f),O=s(f,"DIV",{class:!0});var Et=r(O);k(le.$$.fragment,Et),Pn=d(Et),Qe=s(Et,"P",{});var Xo=r(Qe);Rn=i(Xo,"Converts a sequence of tokens (strings for sub-words) in a single string."),Xo.forEach(n),Et.forEach(n),Dn=d(f),U=s(f,"DIV",{class:!0});var $t=r(U);k(ce.$$.fragment,$t),Fn=d($t),Ye=s($t,"P",{});var jo=r(Ye);In=i(jo,"Create a mask from the two sequences passed to be used in a sequence-pair classification task."),jo.forEach(n),$t.forEach(n),Sn=d(f),M=s(f,"DIV",{class:!0});var At=r(M);k(de.$$.fragment,At),Cn=d(At),he=s(At,"P",{});var xt=r(he);Nn=i(xt,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ze=s(xt,"CODE",{});var Go=r(Ze);On=i(Go,"prepare_for_model"),Go.forEach(n),Un=i(xt," method."),xt.forEach(n),At.forEach(n),f.forEach(n),gt=d(t),F=s(t,"H2",{class:!0});var Lt=r(F);V=s(Lt,"A",{id:!0,class:!0,href:!0});var Qo=r(V);et=s(Qo,"SPAN",{});var Yo=r(et);k(me.$$.fragment,Yo),Yo.forEach(n),Qo.forEach(n),Mn=d(Lt),tt=s(Lt,"SPAN",{});var Zo=r(tt);Vn=i(Zo,"BarthezTokenizerFast"),Zo.forEach(n),Lt.forEach(n),kt=d(t),u=s(t,"DIV",{class:!0});var x=r(u);k(pe.$$.fragment,x),Wn=d(x),y=s(x,"P",{});var J=r(y);Hn=i(J,"Adapted from "),$e=s(J,"A",{href:!0});var es=r($e);Jn=i(es,"CamembertTokenizer"),es.forEach(n),Kn=i(J," and "),Ae=s(J,"A",{href:!0});var ts=r(Ae);Xn=i(ts,"BartTokenizer"),ts.forEach(n),jn=i(J,`. Construct a \u201Cfast\u201D BARThez tokenizer. Based on
`),fe=s(J,"A",{href:!0,rel:!0});var ns=r(fe);Gn=i(ns,"SentencePiece"),ns.forEach(n),Qn=i(J,"."),J.forEach(n),Yn=d(x),ue=s(x,"P",{});var Pt=r(ue);Zn=i(Pt,"This tokenizer inherits from "),xe=s(Pt,"A",{href:!0});var os=r(xe);eo=i(os,"PreTrainedTokenizerFast"),os.forEach(n),to=i(Pt,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Pt.forEach(n),no=d(x),A=s(x,"DIV",{class:!0});var Ie=r(A);k(ge.$$.fragment,Ie),oo=d(Ie),nt=s(Ie,"P",{});var ss=r(nt);so=i(ss,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`),ss.forEach(n),ro=d(Ie),ke=s(Ie,"UL",{});var Rt=r(ke);Le=s(Rt,"LI",{});var ko=r(Le);ao=i(ko,"single sequence: "),ot=s(ko,"CODE",{});var rs=r(ot);io=i(rs,"<s> X </s>"),rs.forEach(n),ko.forEach(n),lo=d(Rt),Pe=s(Rt,"LI",{});var _o=r(Pe);co=i(_o,"pair of sequences: "),st=s(_o,"CODE",{});var as=r(st);ho=i(as,"<s> A </s></s> B </s>"),as.forEach(n),_o.forEach(n),Rt.forEach(n),Ie.forEach(n),mo=d(x),W=s(x,"DIV",{class:!0});var Dt=r(W);k(_e.$$.fragment,Dt),po=d(Dt),rt=s(Dt,"P",{});var is=r(rt);fo=i(is,"Create a mask from the two sequences passed to be used in a sequence-pair classification task."),is.forEach(n),Dt.forEach(n),x.forEach(n),this.h()},h(){l(B,"name","hf:doc:metadata"),l(B,"content",JSON.stringify(fs)),l(w,"id","barthez"),l(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(w,"href","#barthez"),l(T,"class","relative group"),l(I,"id","overview"),l(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(I,"href","#overview"),l(L,"class","relative group"),l(G,"href","https://arxiv.org/abs/2010.12321"),l(G,"rel","nofollow"),l(Q,"href","https://huggingface.co/moussakam"),l(Q,"rel","nofollow"),l(Y,"href","https://github.com/moussaKam/BARThez"),l(Y,"rel","nofollow"),l(C,"id","examples"),l(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(C,"href","#examples"),l(P,"class","relative group"),l(te,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization/README.md"),l(te,"rel","nofollow"),l(N,"id","transformers.BarthezTokenizer"),l(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(N,"href","#transformers.BarthezTokenizer"),l(R,"class","relative group"),l(we,"href","/docs/transformers/v4.16.2/en/model_doc/camembert#transformers.CamembertTokenizer"),l(qe,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer"),l(se,"href","https://github.com/google/sentencepiece"),l(se,"rel","nofollow"),l(ye,"href","/docs/transformers/v4.16.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l($,"class","docstring"),l(O,"class","docstring"),l(U,"class","docstring"),l(M,"class","docstring"),l(p,"class","docstring"),l(V,"id","transformers.BarthezTokenizerFast"),l(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(V,"href","#transformers.BarthezTokenizerFast"),l(F,"class","relative group"),l($e,"href","/docs/transformers/v4.16.2/en/model_doc/camembert#transformers.CamembertTokenizer"),l(Ae,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer"),l(fe,"href","https://github.com/google/sentencepiece"),l(fe,"rel","nofollow"),l(xe,"href","/docs/transformers/v4.16.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(A,"class","docstring"),l(W,"class","docstring"),l(u,"class","docstring")},m(t,h){e(document.head,B),m(t,ve,h),m(t,T,h),e(T,w),e(w,Se),_(X,Se,null),e(T,It),e(T,Ce),e(Ce,St),m(t,it,h),m(t,L,h),e(L,I),e(I,Ne),_(j,Ne,null),e(L,Ct),e(L,Oe),e(Oe,Nt),m(t,lt,h),m(t,S,h),e(S,Ot),e(S,G),e(G,Ut),e(S,Mt),m(t,ct,h),m(t,be,h),e(be,Vt),m(t,dt,h),m(t,ze,h),e(ze,Ue),e(Ue,Wt),m(t,ht,h),m(t,E,h),e(E,Ht),e(E,Q),e(Q,Jt),e(E,Kt),e(E,Y),e(Y,Xt),e(E,jt),m(t,mt,h),m(t,P,h),e(P,C),e(C,Me),_(Z,Me,null),e(P,Gt),e(P,Ve),e(Ve,Qt),m(t,pt,h),m(t,Te,h),e(Te,ee),e(ee,Yt),e(ee,te),e(te,Zt),e(ee,en),m(t,ft,h),m(t,R,h),e(R,N),e(N,We),_(ne,We,null),e(R,tn),e(R,He),e(He,nn),m(t,ut,h),m(t,p,h),_(oe,p,null),e(p,on),e(p,q),e(q,sn),e(q,we),e(we,rn),e(q,an),e(q,qe),e(qe,ln),e(q,cn),e(q,se),e(se,dn),e(q,hn),e(p,mn),e(p,re),e(re,pn),e(re,ye),e(ye,fn),e(re,un),e(p,gn),e(p,D),e(D,kn),e(D,Je),e(Je,_n),e(D,vn),e(D,Ke),e(Ke,bn),e(D,zn),e(p,Tn),e(p,$),_(ae,$,null),e($,wn),e($,Xe),e(Xe,qn),e($,yn),e($,ie),e(ie,Be),e(Be,Bn),e(Be,je),e(je,En),e(ie,$n),e(ie,Ee),e(Ee,An),e(Ee,Ge),e(Ge,xn),e(p,Ln),e(p,O),_(le,O,null),e(O,Pn),e(O,Qe),e(Qe,Rn),e(p,Dn),e(p,U),_(ce,U,null),e(U,Fn),e(U,Ye),e(Ye,In),e(p,Sn),e(p,M),_(de,M,null),e(M,Cn),e(M,he),e(he,Nn),e(he,Ze),e(Ze,On),e(he,Un),m(t,gt,h),m(t,F,h),e(F,V),e(V,et),_(me,et,null),e(F,Mn),e(F,tt),e(tt,Vn),m(t,kt,h),m(t,u,h),_(pe,u,null),e(u,Wn),e(u,y),e(y,Hn),e(y,$e),e($e,Jn),e(y,Kn),e(y,Ae),e(Ae,Xn),e(y,jn),e(y,fe),e(fe,Gn),e(y,Qn),e(u,Yn),e(u,ue),e(ue,Zn),e(ue,xe),e(xe,eo),e(ue,to),e(u,no),e(u,A),_(ge,A,null),e(A,oo),e(A,nt),e(nt,so),e(A,ro),e(A,ke),e(ke,Le),e(Le,ao),e(Le,ot),e(ot,io),e(ke,lo),e(ke,Pe),e(Pe,co),e(Pe,st),e(st,ho),e(u,mo),e(u,W),_(_e,W,null),e(W,po),e(W,rt),e(rt,fo),_t=!0},p:ms,i(t){_t||(v(X.$$.fragment,t),v(j.$$.fragment,t),v(Z.$$.fragment,t),v(ne.$$.fragment,t),v(oe.$$.fragment,t),v(ae.$$.fragment,t),v(le.$$.fragment,t),v(ce.$$.fragment,t),v(de.$$.fragment,t),v(me.$$.fragment,t),v(pe.$$.fragment,t),v(ge.$$.fragment,t),v(_e.$$.fragment,t),_t=!0)},o(t){b(X.$$.fragment,t),b(j.$$.fragment,t),b(Z.$$.fragment,t),b(ne.$$.fragment,t),b(oe.$$.fragment,t),b(ae.$$.fragment,t),b(le.$$.fragment,t),b(ce.$$.fragment,t),b(de.$$.fragment,t),b(me.$$.fragment,t),b(pe.$$.fragment,t),b(ge.$$.fragment,t),b(_e.$$.fragment,t),_t=!1},d(t){n(B),t&&n(ve),t&&n(T),z(X),t&&n(it),t&&n(L),z(j),t&&n(lt),t&&n(S),t&&n(ct),t&&n(be),t&&n(dt),t&&n(ze),t&&n(ht),t&&n(E),t&&n(mt),t&&n(P),z(Z),t&&n(pt),t&&n(Te),t&&n(ft),t&&n(R),z(ne),t&&n(ut),t&&n(p),z(oe),z(ae),z(le),z(ce),z(de),t&&n(gt),t&&n(F),z(me),t&&n(kt),t&&n(u),z(pe),z(ge),z(_e)}}}const fs={local:"barthez",sections:[{local:"overview",sections:[{local:"examples",title:"Examples"}],title:"Overview"},{local:"transformers.BarthezTokenizer",title:"BarthezTokenizer"},{local:"transformers.BarthezTokenizerFast",title:"BarthezTokenizerFast"}],title:"BARThez"};function us(Ft,B,ve){let{fw:T}=B;return Ft.$$set=w=>{"fw"in w&&ve(0,T=w.fw)},[T]}class vs extends ls{constructor(B){super();cs(this,B,us,ps,ds,{fw:0})}}export{vs as default,fs as metadata};
