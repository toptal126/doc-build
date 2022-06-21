import{S as Bx,i as jx,s as Ex,e as a,k as p,w as y,t as i,M as Cx,c as s,d as t,m as u,a as r,x as v,h as d,b as f,G as e,g as b,y as T,q as w,o as M,B as $,v as Px,L as P}from"../../chunks/vendor-hf-doc-builder.js";import{T as at}from"../../chunks/Tip-hf-doc-builder.js";import{D as q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as B}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as U}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as C}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Sx(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartModel, MBartConfig

# Initializing a MBART facebook/mbart-large-cc25 style configuration
configuration = MBartConfig()

# Initializing a model from the facebook/mbart-large-cc25 style configuration
model = MBartModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartModel, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MBART facebook/mbart-large-cc25 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MBartConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/mbart-large-cc25 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function Ax(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")
inputs["labels"] = labels["input_ids"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function Ox(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizerFast

tokenizer = MBartTokenizerFast.from_pretrained(
    "facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO"
)
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")
inputs["labels"] = labels["input_ids"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizerFast.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function Ix(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBart50Tokenizer

tokenizer = MBart50Tokenizer.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids
# model(**model_inputs, labels=labels) should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function Nx(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBart50TokenizerFast

tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids
# model(**model_inputs, labels=labels) should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50TokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function Dx(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var F=r(m);c=d(F,"Module"),F.forEach(t),_=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(o,h){b(o,l,h),e(l,k),e(l,m),e(m,c),e(l,_)},d(o){o&&t(l)}}}function Lx(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartModel
import torch

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function Gx(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var F=r(m);c=d(F,"Module"),F.forEach(t),_=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(o,h){b(o,l,h),e(l,k),e(l,m),e(m,c),e(l,_)},d(o){o&&t(l)}}}function Wx(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-en-ro")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro")

example_english_phrase = "42 is the answer"
inputs = tokenizer(example_english_phrase, return_tensors="pt")

# Translate
generated_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
tokenizer.batch_decode(generated_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot;42 is the answer&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Translate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;42 este r\u0103spuns&#x27;</span>`}}),{c(){l=a("p"),k=i("Translation example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Translation example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function Rx(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"

input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="pt")["input_ids"]
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()
[<span class="hljs-string">&#x27;nett&#x27;</span>, <span class="hljs-string">&#x27;sehr&#x27;</span>, <span class="hljs-string">&#x27;ganz&#x27;</span>, <span class="hljs-string">&#x27;nicht&#x27;</span>, <span class="hljs-string">&#x27;so&#x27;</span>]`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Mask filling example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function Ux(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var F=r(m);c=d(F,"Module"),F.forEach(t),_=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(o,h){b(o,l,h),e(l,k),e(l,m),e(m,c),e(l,_)},d(o){o&&t(l)}}}function Xx(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForQuestionAnswering
import torch

tokenizer = MBartTokenizer.from_pretrained("hf-internal-testing/tiny-random-mbart")
model = MBartForQuestionAnswering.from_pretrained("hf-internal-testing/tiny-random-mbart")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;? Jim Henson was a&#x27;</span>`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function Qx(x){let l,k;return l=new B({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">3.55</span>`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function Hx(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var F=r(m);c=d(F,"Module"),F.forEach(t),_=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(o,h){b(o,l,h),e(l,k),e(l,m),e(m,c),e(l,_)},d(o){o&&t(l)}}}function Vx(x){let l,k,m,c,_;return c=new B({props:{code:`import torch
from transformers import MBartTokenizer, MBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("hf-internal-testing/tiny-random-mbart")
model = MBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-mbart")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=a("p"),k=i("Example of single-label classification:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Example of single-label classification:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function Jx(x){let l,k;return l=new B({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = MBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-mbart", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function Kx(x){let l,k,m,c,_;return c=new B({props:{code:`import torch
from transformers import MBartTokenizer, MBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("hf-internal-testing/tiny-random-mbart")
model = MBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-mbart", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=a("p"),k=i("Example of multi-label classification:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Example of multi-label classification:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function Zx(x){let l,k;return l=new B({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MBartForSequenceClassification.from_pretrained(
    "hf-internal-testing/tiny-random-mbart", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function Yx(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForCausalLM

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForCausalLM.from_pretrained("facebook/mbart-large-cc25", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function e1(x){let l,k,m,c,_,o,h,F,st,ze,E,Ie,he,rt,me,fe,it,Xe,Q,L,Ne,oe,S,A,dt,le,ce,lt,H,ct,pt,G,qe,ge,Qe,ae,_e,be,ut,se,ke,ye,He;return{c(){l=a("p"),k=i("TF 2.0 models accepts two formats as inputs:"),m=p(),c=a("ul"),_=a("li"),o=i("having all inputs as keyword arguments (like PyTorch models), or"),h=p(),F=a("li"),st=i("having all inputs as a list, tuple or dict in the first positional arguments."),ze=p(),E=a("p"),Ie=i("This second option is useful when using "),he=a("code"),rt=i("tf.keras.Model.fit"),me=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=a("code"),it=i("model(inputs)"),Xe=i("."),Q=p(),L=a("p"),Ne=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=p(),S=a("ul"),A=a("li"),dt=i("a single Tensor with "),le=a("code"),ce=i("input_ids"),lt=i(" only and nothing else: "),H=a("code"),ct=i("model(input_ids)"),pt=p(),G=a("li"),qe=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ge=a("code"),Qe=i("model([input_ids, attention_mask])"),ae=i(" or "),_e=a("code"),be=i("model([input_ids, attention_mask, token_type_ids])"),ut=p(),se=a("li"),ke=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),He=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){l=s(z,"P",{});var j=r(l);k=d(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=u(z),c=s(z,"UL",{});var ve=r(c);_=s(ve,"LI",{});var De=r(_);o=d(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),h=u(ve),F=s(ve,"LI",{});var jt=r(F);st=d(jt,"having all inputs as a list, tuple or dict in the first positional arguments."),jt.forEach(t),ve.forEach(t),ze=u(z),E=s(z,"P",{});var V=r(E);Ie=d(V,"This second option is useful when using "),he=s(V,"CODE",{});var Et=r(he);rt=d(Et,"tf.keras.Model.fit"),Et.forEach(t),me=d(V,` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=s(V,"CODE",{});var bt=r(fe);it=d(bt,"model(inputs)"),bt.forEach(t),Xe=d(V,"."),V.forEach(t),Q=u(z),L=s(z,"P",{});var X=r(L);Ne=d(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),oe=u(z),S=s(z,"UL",{});var re=r(S);A=s(re,"LI",{});var ie=r(A);dt=d(ie,"a single Tensor with "),le=s(ie,"CODE",{});var Ct=r(le);ce=d(Ct,"input_ids"),Ct.forEach(t),lt=d(ie," only and nothing else: "),H=s(ie,"CODE",{});var Pt=r(H);ct=d(Pt,"model(input_ids)"),Pt.forEach(t),ie.forEach(t),pt=u(re),G=s(re,"LI",{});var de=r(G);qe=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ge=s(de,"CODE",{});var St=r(ge);Qe=d(St,"model([input_ids, attention_mask])"),St.forEach(t),ae=d(de," or "),_e=s(de,"CODE",{});var At=r(_e);be=d(At,"model([input_ids, attention_mask, token_type_ids])"),At.forEach(t),de.forEach(t),ut=u(re),se=s(re,"LI",{});var Le=r(se);ke=d(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s(Le,"CODE",{});var Ot=r(ye);He=d(Ot,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ot.forEach(t),Le.forEach(t),re.forEach(t)},m(z,j){b(z,l,j),e(l,k),b(z,m,j),b(z,c,j),e(c,_),e(_,o),e(c,h),e(c,F),e(F,st),b(z,ze,j),b(z,E,j),e(E,Ie),e(E,he),e(he,rt),e(E,me),e(E,fe),e(fe,it),e(E,Xe),b(z,Q,j),b(z,L,j),e(L,Ne),b(z,oe,j),b(z,S,j),e(S,A),e(A,dt),e(A,le),e(le,ce),e(A,lt),e(A,H),e(H,ct),e(S,pt),e(S,G),e(G,qe),e(G,ge),e(ge,Qe),e(G,ae),e(G,_e),e(_e,be),e(S,ut),e(S,se),e(se,ke),e(se,ye),e(ye,He)},d(z){z&&t(l),z&&t(m),z&&t(c),z&&t(ze),z&&t(E),z&&t(Q),z&&t(L),z&&t(oe),z&&t(S)}}}function t1(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var F=r(m);c=d(F,"Module"),F.forEach(t),_=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(o,h){b(o,l,h),e(l,k),e(l,m),e(m,c),e(l,_)},d(o){o&&t(l)}}}function n1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, TFMBartModel
import tensorflow as tf

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = TFMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function o1(x){let l,k,m,c,_,o,h,F,st,ze,E,Ie,he,rt,me,fe,it,Xe,Q,L,Ne,oe,S,A,dt,le,ce,lt,H,ct,pt,G,qe,ge,Qe,ae,_e,be,ut,se,ke,ye,He;return{c(){l=a("p"),k=i("TF 2.0 models accepts two formats as inputs:"),m=p(),c=a("ul"),_=a("li"),o=i("having all inputs as keyword arguments (like PyTorch models), or"),h=p(),F=a("li"),st=i("having all inputs as a list, tuple or dict in the first positional arguments."),ze=p(),E=a("p"),Ie=i("This second option is useful when using "),he=a("code"),rt=i("tf.keras.Model.fit"),me=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=a("code"),it=i("model(inputs)"),Xe=i("."),Q=p(),L=a("p"),Ne=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=p(),S=a("ul"),A=a("li"),dt=i("a single Tensor with "),le=a("code"),ce=i("input_ids"),lt=i(" only and nothing else: "),H=a("code"),ct=i("model(input_ids)"),pt=p(),G=a("li"),qe=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ge=a("code"),Qe=i("model([input_ids, attention_mask])"),ae=i(" or "),_e=a("code"),be=i("model([input_ids, attention_mask, token_type_ids])"),ut=p(),se=a("li"),ke=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),He=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){l=s(z,"P",{});var j=r(l);k=d(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=u(z),c=s(z,"UL",{});var ve=r(c);_=s(ve,"LI",{});var De=r(_);o=d(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),h=u(ve),F=s(ve,"LI",{});var jt=r(F);st=d(jt,"having all inputs as a list, tuple or dict in the first positional arguments."),jt.forEach(t),ve.forEach(t),ze=u(z),E=s(z,"P",{});var V=r(E);Ie=d(V,"This second option is useful when using "),he=s(V,"CODE",{});var Et=r(he);rt=d(Et,"tf.keras.Model.fit"),Et.forEach(t),me=d(V,` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=s(V,"CODE",{});var bt=r(fe);it=d(bt,"model(inputs)"),bt.forEach(t),Xe=d(V,"."),V.forEach(t),Q=u(z),L=s(z,"P",{});var X=r(L);Ne=d(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),oe=u(z),S=s(z,"UL",{});var re=r(S);A=s(re,"LI",{});var ie=r(A);dt=d(ie,"a single Tensor with "),le=s(ie,"CODE",{});var Ct=r(le);ce=d(Ct,"input_ids"),Ct.forEach(t),lt=d(ie," only and nothing else: "),H=s(ie,"CODE",{});var Pt=r(H);ct=d(Pt,"model(input_ids)"),Pt.forEach(t),ie.forEach(t),pt=u(re),G=s(re,"LI",{});var de=r(G);qe=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ge=s(de,"CODE",{});var St=r(ge);Qe=d(St,"model([input_ids, attention_mask])"),St.forEach(t),ae=d(de," or "),_e=s(de,"CODE",{});var At=r(_e);be=d(At,"model([input_ids, attention_mask, token_type_ids])"),At.forEach(t),de.forEach(t),ut=u(re),se=s(re,"LI",{});var Le=r(se);ke=d(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s(Le,"CODE",{});var Ot=r(ye);He=d(Ot,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ot.forEach(t),Le.forEach(t),re.forEach(t)},m(z,j){b(z,l,j),e(l,k),b(z,m,j),b(z,c,j),e(c,_),e(_,o),e(c,h),e(c,F),e(F,st),b(z,ze,j),b(z,E,j),e(E,Ie),e(E,he),e(he,rt),e(E,me),e(E,fe),e(fe,it),e(E,Xe),b(z,Q,j),b(z,L,j),e(L,Ne),b(z,oe,j),b(z,S,j),e(S,A),e(A,dt),e(A,le),e(le,ce),e(A,lt),e(A,H),e(H,ct),e(S,pt),e(S,G),e(G,qe),e(G,ge),e(ge,Qe),e(G,ae),e(G,_e),e(_e,be),e(S,ut),e(S,se),e(se,ke),e(se,ye),e(ye,He)},d(z){z&&t(l),z&&t(m),z&&t(c),z&&t(ze),z&&t(E),z&&t(Q),z&&t(L),z&&t(oe),z&&t(S)}}}function a1(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var F=r(m);c=d(F,"Module"),F.forEach(t),_=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(o,h){b(o,l,h),e(l,k),e(l,m),e(m,c),e(l,_)},d(o){o&&t(l)}}}function s1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

model = TFMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="tf")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),k=i("Summarization example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Summarization example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function r1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="tf")["input_ids"]

logits = model(input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Mask filling example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function i1(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var F=r(m);c=d(F,"Module"),F.forEach(t),_=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(o,h){b(o,l,h),e(l,k),e(l,m),e(m,c),e(l,_)},d(o){o&&t(l)}}}function d1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartModel

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function l1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function c1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function p1(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var F=r(m);c=d(F,"Module"),F.forEach(t),_=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(o,h){b(o,l,h),e(l,k),e(l,m),e(m,c),e(l,_)},d(o){o&&t(l)}}}function u1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),k=i("Summarization example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Summarization example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function h1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="np")["input_ids"]

logits = model(input_ids).logits
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero()[0].item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero()[<span class="hljs-number">0</span>].item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Mask filling example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function m1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function f1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function g1(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var F=r(m);c=d(F,"Module"),F.forEach(t),_=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(o,h){b(o,l,h),e(l,k),e(l,m),e(m,c),e(l,_)},d(o){o&&t(l)}}}function _1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function b1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function k1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function y1(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var F=r(m);c=d(F,"Module"),F.forEach(t),_=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(o,h){b(o,l,h),e(l,k),e(l,m),e(m,c),e(l,_)},d(o){o&&t(l)}}}function v1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForQuestionAnswering

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForQuestionAnswering.from_pretrained("facebook/mbart-large-cc25")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function T1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function w1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(o){l=s(o,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(o),v(c.$$.fragment,o)},m(o,h){b(o,l,h),e(l,k),b(o,m,h),T(c,o,h),_=!0},p:P,i(o){_||(w(c.$$.fragment,o),_=!0)},o(o){M(c.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),$(c,o)}}}function M1(x){let l,k,m,c,_,o,h,F,st,ze,E,Ie,he,rt,me,fe,it,Xe,Q,L,Ne,oe,S,A,dt,le,ce,lt,H,ct,pt,G,qe,ge,Qe,ae,_e,be,ut,se,ke,ye,He,z,j,ve,De,jt,V,Et,bt,X,re,ie,Ct,Pt,de,St,At,Le,Ot,Bh,ad,jh,Eh,ip,kt,Ch,ga,sd,Ph,Sh,Ah,li,Oh,Ih,dp,ci,rd,Nh,lp,_a,cp,pi,ba,id,Dh,Lh,It,Gh,dd,Wh,Rh,ld,Uh,Xh,pp,ka,up,Nt,Mn,cd,ya,Qh,pd,Hh,hp,yt,Vh,va,Jh,Kh,ud,Zh,Yh,mp,ui,em,fp,hi,hd,tm,gp,Dt,$n,md,Ta,nm,fd,om,_p,Ve,am,gd,sm,rm,_d,im,dm,bd,lm,cm,bp,xn,pm,mi,um,hm,kp,fi,kd,mm,yp,wa,vp,gi,Ma,yd,fm,gm,Te,_m,vd,bm,km,Td,ym,vm,wd,Tm,wm,Md,Mm,$m,$d,xm,zm,Tp,$a,wp,Lt,zn,xd,xa,qm,zd,Fm,Mp,Ge,za,Bm,Gt,jm,_i,Em,Cm,qa,Pm,Sm,Am,Wt,Om,bi,Im,Nm,ki,Dm,Lm,Gm,qn,$p,Rt,Fn,qd,Fa,Wm,Fd,Rm,xp,J,Ba,Um,Bd,Xm,Qm,ht,Hm,yi,Vm,Jm,vi,Km,Zm,ja,Ym,ef,tf,Ea,nf,jd,of,af,sf,Bn,rf,jn,Ca,df,Ed,lf,cf,Je,Pa,pf,Sa,uf,Cd,hf,mf,ff,Aa,Oa,Pd,gf,_f,Sd,bf,kf,Ia,Ad,yf,vf,Od,Tf,wf,Id,Mf,zp,Ut,En,Nd,Na,$f,Dd,xf,qp,O,Da,zf,Xt,qf,Ld,Ff,Bf,La,jf,Ef,Cf,Ga,Pf,Ti,Sf,Af,Of,Wa,If,Gd,Nf,Df,Lf,Cn,Gf,Fe,Ra,Wf,Wd,Rf,Uf,Ua,Xf,Rd,Qf,Hf,Vf,Xa,Qa,Ud,Jf,Kf,Xd,Zf,Yf,Ha,Qd,eg,tg,Hd,ng,og,Vd,ag,sg,Pn,Va,rg,Jd,ig,dg,Sn,Ja,lg,Kd,cg,pg,An,Ka,ug,Zd,hg,Fp,Qt,On,Yd,Za,mg,el,fg,Bp,I,Ya,gg,es,_g,ts,bg,kg,yg,ns,vg,wi,Tg,wg,Mg,In,$g,Ke,os,xg,as,zg,tl,qg,Fg,Bg,ss,rs,nl,jg,Eg,ol,Cg,Pg,is,al,Sg,Ag,sl,Og,Ig,rl,Ng,Dg,Nn,ds,Lg,il,Gg,Wg,Dn,ls,Rg,cs,Ug,dl,Xg,Qg,Hg,Ln,ps,Vg,ll,Jg,Kg,Gn,us,Zg,cl,Yg,jp,Ht,Wn,pl,hs,e_,ul,t_,Ep,K,ms,n_,Vt,o_,hl,a_,s_,fs,r_,i_,d_,gs,l_,Mi,c_,p_,u_,Rn,h_,Be,_s,m_,ml,f_,g_,bs,__,fl,b_,k_,y_,ks,ys,gl,v_,T_,_l,w_,M_,vs,bl,$_,x_,kl,z_,q_,yl,F_,B_,Un,Ts,j_,vl,E_,C_,Xn,ws,P_,Tl,S_,Cp,Jt,Qn,wl,Ms,A_,Ml,O_,Pp,We,$s,I_,xs,N_,$i,D_,L_,G_,zs,W_,qs,R_,U_,X_,Ze,Fs,Q_,Kt,H_,xi,V_,J_,$l,K_,Z_,Y_,Hn,eb,Vn,Sp,Zt,Jn,xl,Bs,tb,zl,nb,Ap,Re,js,ob,Es,ab,zi,sb,rb,ib,Cs,db,Ps,lb,cb,pb,je,Ss,ub,Yt,hb,qi,mb,fb,ql,gb,_b,bb,Kn,kb,Zn,yb,Yn,Op,en,eo,Fl,As,vb,Bl,Tb,Ip,we,Os,wb,tn,Mb,jl,$b,xb,El,zb,qb,Fb,Is,Bb,Fi,jb,Eb,Cb,Ns,Pb,Ds,Sb,Ab,Ob,Ee,Ls,Ib,nn,Nb,Bi,Db,Lb,Cl,Gb,Wb,Rb,to,Ub,no,Xb,oo,Np,on,ao,Pl,Gs,Qb,Sl,Hb,Dp,Me,Ws,Vb,Al,Jb,Kb,Rs,Zb,ji,Yb,ek,tk,Us,nk,Xs,ok,ak,sk,Z,Qs,rk,an,ik,Ei,dk,lk,Ol,ck,pk,uk,so,hk,ro,mk,io,fk,lo,gk,co,Lp,sn,po,Il,Hs,_k,Nl,bk,Gp,rn,Vs,kk,uo,Js,yk,ho,Wp,dn,mo,Dl,Ks,vk,Ll,Tk,Rp,$e,Zs,wk,Ys,Mk,Ci,$k,xk,zk,er,qk,tr,Fk,Bk,jk,fo,Ek,Ye,nr,Ck,ln,Pk,Pi,Sk,Ak,Gl,Ok,Ik,Nk,go,Dk,_o,Up,cn,bo,Wl,or,Lk,Rl,Gk,Xp,xe,ar,Wk,sr,Rk,Si,Uk,Xk,Qk,rr,Hk,ir,Vk,Jk,Kk,ko,Zk,Ce,dr,Yk,pn,ey,Ai,ty,ny,Ul,oy,ay,sy,yo,ry,vo,iy,To,Qp,un,wo,Xl,lr,dy,Ql,ly,Hp,W,cr,cy,pr,py,Oi,uy,hy,my,ur,fy,hr,gy,_y,by,Hl,ky,yy,mt,Vl,mr,vy,Ty,Jl,fr,wy,My,Kl,gr,$y,xy,Zl,_r,zy,qy,et,br,Fy,hn,By,Yl,jy,Ey,ec,Cy,Py,Sy,Mo,Ay,$o,Oy,xo,kr,Iy,zo,Ny,qo,yr,Dy,Fo,Vp,mn,Bo,tc,vr,Ly,nc,Gy,Jp,R,Tr,Wy,wr,Ry,Ii,Uy,Xy,Qy,Mr,Hy,$r,Vy,Jy,Ky,oc,Zy,Yy,ft,ac,xr,ev,tv,sc,zr,nv,ov,rc,qr,av,sv,ic,Fr,rv,iv,Pe,Br,dv,fn,lv,dc,cv,pv,lc,uv,hv,mv,jo,fv,Eo,gv,Co,_v,Po,jr,bv,So,kv,Ao,Er,yv,Oo,Kp,gn,Io,cc,Cr,vv,pc,Tv,Zp,N,Pr,wv,uc,Mv,$v,Sr,xv,Ni,zv,qv,Fv,Ar,Bv,Or,jv,Ev,Cv,hc,Pv,Sv,gt,mc,Ir,Av,Ov,fc,Nr,Iv,Nv,gc,Dr,Dv,Lv,_c,Lr,Gv,Wv,tt,Gr,Rv,_n,Uv,bc,Xv,Qv,kc,Hv,Vv,Jv,No,Kv,Do,Zv,Lo,Wr,Yv,Go,eT,Wo,Rr,tT,Ro,Yp,bn,Uo,yc,Ur,nT,vc,oT,eu,D,Xr,aT,kn,sT,Tc,rT,iT,wc,dT,lT,cT,Qr,pT,Di,uT,hT,mT,Hr,fT,Vr,gT,_T,bT,Mc,kT,yT,_t,$c,Jr,vT,TT,xc,Kr,wT,MT,zc,Zr,$T,xT,qc,Yr,zT,qT,nt,ei,FT,yn,BT,Fc,jT,ET,Bc,CT,PT,ST,Xo,AT,Qo,OT,Ho,ti,IT,Vo,NT,Jo,ni,DT,Ko,tu;return o=new U({}),oe=new U({}),De=new U({}),_a=new B({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = "UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-en-ro")
# forward pass
model(**inputs, labels=batch["labels"])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs, labels=batch[<span class="hljs-string">&quot;labels&quot;</span>])`}}),ka=new B({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX")
article = "UN Chief Says There Is No Military Solution in Syria"
inputs = tokenizer(article, return_tensors="pt")
translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id["ro_RO"])
tokenizer.batch_decode(translated_tokens, skip_special_tokens=True)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(article, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;ro_RO&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(translated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>`}}),ya=new U({}),Ta=new U({}),wa=new B({props:{code:`


`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>)
tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)

src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

model(**model_inputs, labels=labels)  <span class="hljs-comment"># forward pass</span>`}}),$a=new B({props:{code:`


`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBart50TokenizerFast

article_hi = <span class="hljs-string">&quot;\u0938\u0902\u092F\u0941\u0915\u094D\u0924 \u0930\u093E\u0937\u094D\u091F\u094D\u0930 \u0915\u0947 \u092A\u094D\u0930\u092E\u0941\u0916 \u0915\u093E \u0915\u0939\u0928\u093E \u0939\u0948 \u0915\u093F \u0938\u0940\u0930\u093F\u092F\u093E \u092E\u0947\u0902 \u0915\u094B\u0908 \u0938\u0948\u0928\u094D\u092F \u0938\u092E\u093E\u0927\u093E\u0928 \u0928\u0939\u0940\u0902 \u0939\u0948&quot;</span>
article_ar = <span class="hljs-string">&quot;\u0627\u0644\u0623\u0645\u064A\u0646 \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u0623\u0645\u0645 \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u064A\u0642\u0648\u0644 \u0625\u0646\u0647 \u0644\u0627 \u064A\u0648\u062C\u062F \u062D\u0644 \u0639\u0633\u0643\u0631\u064A \u0641\u064A \u0633\u0648\u0631\u064A\u0627.&quot;</span>

model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50-many-to-many-mmt&quot;</span>)
tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50-many-to-many-mmt&quot;</span>)

<span class="hljs-comment"># translate Hindi to French</span>
tokenizer.src_lang = <span class="hljs-string">&quot;hi_IN&quot;</span>
encoded_hi = tokenizer(article_hi, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;fr_XX&quot;</span>])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-comment"># =&gt; &quot;Le chef de l &#x27;ONU affirme qu &#x27;il n &#x27;y a pas de solution militaire en Syria.&quot;</span>

<span class="hljs-comment"># translate Arabic to English</span>
tokenizer.src_lang = <span class="hljs-string">&quot;ar_AR&quot;</span>
encoded_ar = tokenizer(article_ar, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
generated_tokens = model.generate(**encoded_ar, forced_bos_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;en_XX&quot;</span>])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-comment"># =&gt; &quot;The Secretary-General of the United Nations says there is no military solution in Syria.&quot;</span>`}}),xa=new U({}),za=new q({props:{name:"class transformers.MBartConfig",anchor:"transformers.MBartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the MBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartModel">MBartModel</a> or <a href="/docs/transformers/main/en/model_doc/mbart#transformers.TFMBartModel">TFMBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.MBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.MBartConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.MBartConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.MBartConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.MBartConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.MBartConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.MBartConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.MBartConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.MBartConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.MBartConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.MBartConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.MBartConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.MBartConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MBartConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.MBartConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.MBartConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.MBartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/configuration_mbart.py#L34"}}),qn=new C({props:{anchor:"transformers.MBartConfig.example",$$slots:{default:[Sx]},$$scope:{ctx:x}}}),Fa=new U({}),Ba=new q({props:{name:"class transformers.MBartTokenizer",anchor:"transformers.MBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart.py#L54"}}),Bn=new C({props:{anchor:"transformers.MBartTokenizer.example",$$slots:{default:[Ax]},$$scope:{ctx:x}}}),Ca=new q({props:{name:"as_target_tokenizer",anchor:"transformers.MBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart.py#L343"}}),Pa=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart.py#L222",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Na=new U({}),Da=new q({props:{name:"class transformers.MBartTokenizerFast",anchor:"transformers.MBartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L64"}}),Cn=new C({props:{anchor:"transformers.MBartTokenizerFast.example",$$slots:{default:[Ox]},$$scope:{ctx:x}}}),Ra=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L165",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Va=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L194",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ja=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L253"}}),Ka=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L268"}}),Za=new U({}),Ya=new q({props:{name:"class transformers.MBart50Tokenizer",anchor:"transformers.MBart50Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MBart50Tokenizer.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"src_lang"},{anchor:"transformers.MBart50Tokenizer.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.MBart50Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.MBart50Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MBart50Tokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MBart50Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MBart50Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MBart50Tokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MBart50Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L50"}}),In=new C({props:{anchor:"transformers.MBart50Tokenizer.example",$$slots:{default:[Ix]},$$scope:{ctx:x}}}),os=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L289",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ds=new q({props:{name:"convert_tokens_to_string",anchor:"transformers.MBart50Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L238"}}),ls=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L259",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ps=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L350"}}),us=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L356"}}),hs=new U({}),ms=new q({props:{name:"class transformers.MBart50TokenizerFast",anchor:"transformers.MBart50TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MBart50TokenizerFast.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"src_lang"},{anchor:"transformers.MBart50TokenizerFast.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.MBart50TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.MBart50TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MBart50TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MBart50TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MBart50TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MBart50TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L60"}}),Rn=new C({props:{anchor:"transformers.MBart50TokenizerFast.example",$$slots:{default:[Nx]},$$scope:{ctx:x}}}),_s=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L173",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ts=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L224"}}),ws=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L239"}}),Ms=new U({}),$s=new q({props:{name:"class transformers.MBartModel",anchor:"transformers.MBartModel",parameters:[{name:"config",val:": MBartConfig"}],parametersDescription:[{anchor:"transformers.MBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1145"}}),Fs=new q({props:{name:"forward",anchor:"transformers.MBartModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1172",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Hn=new at({props:{$$slots:{default:[Dx]},$$scope:{ctx:x}}}),Vn=new C({props:{anchor:"transformers.MBartModel.forward.example",$$slots:{default:[Lx]},$$scope:{ctx:x}}}),Bs=new U({}),js=new q({props:{name:"class transformers.MBartForConditionalGeneration",anchor:"transformers.MBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"}],parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1262"}}),Ss=new q({props:{name:"forward",anchor:"transformers.MBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1306",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kn=new at({props:{$$slots:{default:[Gx]},$$scope:{ctx:x}}}),Zn=new C({props:{anchor:"transformers.MBartForConditionalGeneration.forward.example",$$slots:{default:[Wx]},$$scope:{ctx:x}}}),Yn=new C({props:{anchor:"transformers.MBartForConditionalGeneration.forward.example-2",$$slots:{default:[Rx]},$$scope:{ctx:x}}}),As=new U({}),Os=new q({props:{name:"class transformers.MBartForQuestionAnswering",anchor:"transformers.MBartForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1563"}}),Ls=new q({props:{name:"forward",anchor:"transformers.MBartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MBartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1575",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new at({props:{$$slots:{default:[Ux]},$$scope:{ctx:x}}}),no=new C({props:{anchor:"transformers.MBartForQuestionAnswering.forward.example",$$slots:{default:[Xx]},$$scope:{ctx:x}}}),oo=new C({props:{anchor:"transformers.MBartForQuestionAnswering.forward.example-2",$$slots:{default:[Qx]},$$scope:{ctx:x}}}),Gs=new U({}),Ws=new q({props:{name:"class transformers.MBartForSequenceClassification",anchor:"transformers.MBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1435"}}),Qs=new q({props:{name:"forward",anchor:"transformers.MBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1448",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new at({props:{$$slots:{default:[Hx]},$$scope:{ctx:x}}}),ro=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example",$$slots:{default:[Vx]},$$scope:{ctx:x}}}),io=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-2",$$slots:{default:[Jx]},$$scope:{ctx:x}}}),lo=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-3",$$slots:{default:[Kx]},$$scope:{ctx:x}}}),co=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-4",$$slots:{default:[Zx]},$$scope:{ctx:x}}}),Hs=new U({}),Vs=new q({props:{name:"class transformers.MBartForCausalLM",anchor:"transformers.MBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1696"}}),Js=new q({props:{name:"forward",anchor:"transformers.MBartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.MBartForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.MBartForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MBartForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.MBartForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.MBartForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1727",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ho=new C({props:{anchor:"transformers.MBartForCausalLM.forward.example",$$slots:{default:[Yx]},$$scope:{ctx:x}}}),Ks=new U({}),Zs=new q({props:{name:"class transformers.TFMBartModel",anchor:"transformers.TFMBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1184"}}),fo=new at({props:{$$slots:{default:[e1]},$$scope:{ctx:x}}}),nr=new q({props:{name:"call",anchor:"transformers.TFMBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFMBartModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFMBartModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMBartModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMBartModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMBartModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMBartModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMBartModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMBartModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMBartModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMBartModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1196",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),go=new at({props:{$$slots:{default:[t1]},$$scope:{ctx:x}}}),_o=new C({props:{anchor:"transformers.TFMBartModel.call.example",$$slots:{default:[n1]},$$scope:{ctx:x}}}),or=new U({}),ar=new q({props:{name:"class transformers.TFMBartForConditionalGeneration",anchor:"transformers.TFMBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1273"}}),ko=new at({props:{$$slots:{default:[o1]},$$scope:{ctx:x}}}),dr=new q({props:{name:"call",anchor:"transformers.TFMBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMBartForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMBartForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMBartForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMBartForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMBartForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1306",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),yo=new at({props:{$$slots:{default:[a1]},$$scope:{ctx:x}}}),vo=new C({props:{anchor:"transformers.TFMBartForConditionalGeneration.call.example",$$slots:{default:[s1]},$$scope:{ctx:x}}}),To=new C({props:{anchor:"transformers.TFMBartForConditionalGeneration.call.example-2",$$slots:{default:[r1]},$$scope:{ctx:x}}}),lr=new U({}),cr=new q({props:{name:"class transformers.FlaxMBartModel",anchor:"transformers.FlaxMBartModel",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1278"}}),br=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1215",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mo=new at({props:{$$slots:{default:[i1]},$$scope:{ctx:x}}}),$o=new C({props:{anchor:"transformers.FlaxMBartModel.__call__.example",$$slots:{default:[d1]},$$scope:{ctx:x}}}),kr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1039",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zo=new C({props:{anchor:"transformers.FlaxMBartModel.encode.example",$$slots:{default:[l1]},$$scope:{ctx:x}}}),yr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1102",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fo=new C({props:{anchor:"transformers.FlaxMBartModel.decode.example",$$slots:{default:[c1]},$$scope:{ctx:x}}}),vr=new U({}),Tr=new q({props:{name:"class transformers.FlaxMBartForConditionalGeneration",anchor:"transformers.FlaxMBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1365"}}),Br=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1215",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jo=new at({props:{$$slots:{default:[p1]},$$scope:{ctx:x}}}),Eo=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.example",$$slots:{default:[u1]},$$scope:{ctx:x}}}),Co=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.example-2",$$slots:{default:[h1]},$$scope:{ctx:x}}}),jr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1039",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.example",$$slots:{default:[m1]},$$scope:{ctx:x}}}),Er=new q({props:{name:"decode",anchor:"transformers.FlaxMBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1369",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.example",$$slots:{default:[f1]},$$scope:{ctx:x}}}),Cr=new U({}),Pr=new q({props:{name:"class transformers.FlaxMBartForSequenceClassification",anchor:"transformers.FlaxMBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1678"}}),Gr=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartForSequenceClassification.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1215",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new at({props:{$$slots:{default:[g1]},$$scope:{ctx:x}}}),Do=new C({props:{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.example",$$slots:{default:[_1]},$$scope:{ctx:x}}}),Wr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartForSequenceClassification.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1039",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Go=new C({props:{anchor:"transformers.FlaxMBartForSequenceClassification.encode.example",$$slots:{default:[b1]},$$scope:{ctx:x}}}),Rr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartForSequenceClassification.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1102",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new C({props:{anchor:"transformers.FlaxMBartForSequenceClassification.decode.example",$$slots:{default:[k1]},$$scope:{ctx:x}}}),Ur=new U({}),Xr=new q({props:{name:"class transformers.FlaxMBartForQuestionAnswering",anchor:"transformers.FlaxMBartForQuestionAnswering",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1766"}}),ei=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1215",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xo=new at({props:{$$slots:{default:[y1]},$$scope:{ctx:x}}}),Qo=new C({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.example",$$slots:{default:[v1]},$$scope:{ctx:x}}}),ti=new q({props:{name:"encode",anchor:"transformers.FlaxMBartForQuestionAnswering.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1039",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vo=new C({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.example",$$slots:{default:[T1]},$$scope:{ctx:x}}}),ni=new q({props:{name:"decode",anchor:"transformers.FlaxMBartForQuestionAnswering.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1102",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ko=new C({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.example",$$slots:{default:[w1]},$$scope:{ctx:x}}}),{c(){l=a("meta"),k=p(),m=a("h1"),c=a("a"),_=a("span"),y(o.$$.fragment),h=p(),F=a("span"),st=i("MBart and MBart-50"),ze=p(),E=a("p"),Ie=a("strong"),he=i("DISCLAIMER:"),rt=i(" If you see something strange, file a "),me=a("a"),fe=i("Github Issue"),it=i(` and assign
@patrickvonplaten`),Xe=p(),Q=a("h2"),L=a("a"),Ne=a("span"),y(oe.$$.fragment),S=p(),A=a("span"),dt=i("Overview of MBart"),le=p(),ce=a("p"),lt=i("The MBart model was presented in "),H=a("a"),ct=i("Multilingual Denoising Pre-training for Neural Machine Translation"),pt=i(` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),G=p(),qe=a("p"),ge=i(`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Qe=p(),ae=a("p"),_e=i("This model was contributed by "),be=a("a"),ut=i("valhalla"),se=i(". The Authors\u2019 code can be found "),ke=a("a"),ye=i("here"),He=p(),z=a("h3"),j=a("a"),ve=a("span"),y(De.$$.fragment),jt=p(),V=a("span"),Et=i("Training of MBart"),bt=p(),X=a("p"),re=i(`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),ie=a("code"),Ct=i("X [eos, src_lang_code]"),Pt=i(" where "),de=a("code"),St=i("X"),At=i(` is the source text. The
target text format is `),Le=a("code"),Ot=i("[tgt_lang_code] X [eos]"),Bh=i(". "),ad=a("code"),jh=i("bos"),Eh=i(" is never used."),ip=p(),kt=a("p"),Ch=i("The regular "),ga=a("a"),sd=a("strong"),Ph=i("call"),Sh=i("()"),Ah=i(` will encode source text format, and it should be wrapped
inside the context manager `),li=a("a"),Oh=i("as_target_tokenizer()"),Ih=i(" to encode target text format."),dp=p(),ci=a("ul"),rd=a("li"),Nh=i("Supervised training"),lp=p(),y(_a.$$.fragment),cp=p(),pi=a("ul"),ba=a("li"),id=a("p"),Dh=i("Generation"),Lh=p(),It=a("p"),Gh=i("While generating the target text set the "),dd=a("code"),Wh=i("decoder_start_token_id"),Rh=i(` to the target language id. The following
example shows how to translate English to Romanian using the `),ld=a("em"),Uh=i("facebook/mbart-large-en-ro"),Xh=i(" model."),pp=p(),y(ka.$$.fragment),up=p(),Nt=a("h2"),Mn=a("a"),cd=a("span"),y(ya.$$.fragment),Qh=p(),pd=a("span"),Hh=i("Overview of MBart-50"),hp=p(),yt=a("p"),Vh=i("MBart-50 was introduced in the "),va=a("a"),Jh=i("Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),Kh=i(` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),ud=a("em"),Zh=i("mbart-large-cc25"),Yh=i(` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),mp=p(),ui=a("p"),em=i("According to the abstract"),fp=p(),hi=a("p"),hd=a("em"),tm=i(`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),gp=p(),Dt=a("h3"),$n=a("a"),md=a("span"),y(Ta.$$.fragment),nm=p(),fd=a("span"),om=i("Training of MBart-50"),_p=p(),Ve=a("p"),am=i(`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),gd=a("code"),sm=i("[lang_code] X [eos]"),rm=i(", where "),_d=a("code"),im=i("lang_code"),dm=i(` is source
language id for source text and target language id for target text, with `),bd=a("code"),lm=i("X"),cm=i(` being the source or target text
respectively.`),bp=p(),xn=a("p"),pm=i("MBart-50 has its own tokenizer "),mi=a("a"),um=i("MBart50Tokenizer"),hm=i("."),kp=p(),fi=a("ul"),kd=a("li"),mm=i("Supervised training"),yp=p(),y(wa.$$.fragment),vp=p(),gi=a("ul"),Ma=a("li"),yd=a("p"),fm=i("Generation"),gm=p(),Te=a("p"),_m=i("To generate using the mBART-50 multilingual translation models, "),vd=a("code"),bm=i("eos_token_id"),km=i(` is used as the
`),Td=a("code"),ym=i("decoder_start_token_id"),vm=i(` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),wd=a("em"),Tm=i("forced_bos_token_id"),wm=i(" parameter to the "),Md=a("em"),Mm=i("generate"),$m=i(` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),$d=a("em"),xm=i("facebook/mbart-50-large-many-to-many"),zm=i(" checkpoint."),Tp=p(),y($a.$$.fragment),wp=p(),Lt=a("h2"),zn=a("a"),xd=a("span"),y(xa.$$.fragment),qm=p(),zd=a("span"),Fm=i("MBartConfig"),Mp=p(),Ge=a("div"),y(za.$$.fragment),Bm=p(),Gt=a("p"),jm=i("This is the configuration class to store the configuration of a "),_i=a("a"),Em=i("MBartModel"),Cm=i(`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),qa=a("a"),Pm=i("facebook/mbart-large-cc25"),Sm=i(" architecture."),Am=p(),Wt=a("p"),Om=i("Configuration objects inherit from "),bi=a("a"),Im=i("PretrainedConfig"),Nm=i(` and can be used to control the model outputs. Read the
documentation from `),ki=a("a"),Dm=i("PretrainedConfig"),Lm=i(" for more information."),Gm=p(),y(qn.$$.fragment),$p=p(),Rt=a("h2"),Fn=a("a"),qd=a("span"),y(Fa.$$.fragment),Wm=p(),Fd=a("span"),Rm=i("MBartTokenizer"),xp=p(),J=a("div"),y(Ba.$$.fragment),Um=p(),Bd=a("p"),Xm=i("Construct an MBART tokenizer."),Qm=p(),ht=a("p"),Hm=i("Adapted from "),yi=a("a"),Vm=i("RobertaTokenizer"),Jm=i(" and "),vi=a("a"),Km=i("XLNetTokenizer"),Zm=i(`. Based on
`),ja=a("a"),Ym=i("SentencePiece"),ef=i("."),tf=p(),Ea=a("p"),nf=i("The tokenization method is "),jd=a("code"),of=i("<tokens> <eos> <language code>"),af=i(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),sf=p(),y(Bn.$$.fragment),rf=p(),jn=a("div"),y(Ca.$$.fragment),df=p(),Ed=a("p"),lf=i(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),cf=p(),Je=a("div"),y(Pa.$$.fragment),pf=p(),Sa=a("p"),uf=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Cd=a("code"),hf=i("X"),mf=i(" represents the sequence:"),ff=p(),Aa=a("ul"),Oa=a("li"),Pd=a("code"),gf=i("input_ids"),_f=i(" (for encoder) "),Sd=a("code"),bf=i("X [eos, src_lang_code]"),kf=p(),Ia=a("li"),Ad=a("code"),yf=i("decoder_input_ids"),vf=i(": (for decoder) "),Od=a("code"),Tf=i("X [eos, tgt_lang_code]"),wf=p(),Id=a("p"),Mf=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),zp=p(),Ut=a("h2"),En=a("a"),Nd=a("span"),y(Na.$$.fragment),$f=p(),Dd=a("span"),xf=i("MBartTokenizerFast"),qp=p(),O=a("div"),y(Da.$$.fragment),zf=p(),Xt=a("p"),qf=i("Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Ld=a("em"),Ff=i("tokenizers"),Bf=i(` library). Based on
`),La=a("a"),jf=i("BPE"),Ef=i("."),Cf=p(),Ga=a("p"),Pf=i("This tokenizer inherits from "),Ti=a("a"),Sf=i("PreTrainedTokenizerFast"),Af=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Of=p(),Wa=a("p"),If=i("The tokenization method is "),Gd=a("code"),Nf=i("<tokens> <eos> <language code>"),Df=i(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Lf=p(),y(Cn.$$.fragment),Gf=p(),Fe=a("div"),y(Ra.$$.fragment),Wf=p(),Wd=a("p"),Rf=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Uf=p(),Ua=a("p"),Xf=i("An MBART sequence has the following format, where "),Rd=a("code"),Qf=i("X"),Hf=i(" represents the sequence:"),Vf=p(),Xa=a("ul"),Qa=a("li"),Ud=a("code"),Jf=i("input_ids"),Kf=i(" (for encoder) "),Xd=a("code"),Zf=i("X [eos, src_lang_code]"),Yf=p(),Ha=a("li"),Qd=a("code"),eg=i("decoder_input_ids"),tg=i(": (for decoder) "),Hd=a("code"),ng=i("X [eos, tgt_lang_code]"),og=p(),Vd=a("p"),ag=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),sg=p(),Pn=a("div"),y(Va.$$.fragment),rg=p(),Jd=a("p"),ig=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),dg=p(),Sn=a("div"),y(Ja.$$.fragment),lg=p(),Kd=a("p"),cg=i("Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),pg=p(),An=a("div"),y(Ka.$$.fragment),ug=p(),Zd=a("p"),hg=i("Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Fp=p(),Qt=a("h2"),On=a("a"),Yd=a("span"),y(Za.$$.fragment),mg=p(),el=a("span"),fg=i("MBart50Tokenizer"),Bp=p(),I=a("div"),y(Ya.$$.fragment),gg=p(),es=a("p"),_g=i("Construct a MBart50 tokenizer. Based on "),ts=a("a"),bg=i("SentencePiece"),kg=i("."),yg=p(),ns=a("p"),vg=i("This tokenizer inherits from "),wi=a("a"),Tg=i("PreTrainedTokenizer"),wg=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Mg=p(),y(In.$$.fragment),$g=p(),Ke=a("div"),y(os.$$.fragment),xg=p(),as=a("p"),zg=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),tl=a("code"),qg=i("X"),Fg=i(" represents the sequence:"),Bg=p(),ss=a("ul"),rs=a("li"),nl=a("code"),jg=i("input_ids"),Eg=i(" (for encoder) "),ol=a("code"),Cg=i("[src_lang_code] X [eos]"),Pg=p(),is=a("li"),al=a("code"),Sg=i("labels"),Ag=i(": (for decoder) "),sl=a("code"),Og=i("[tgt_lang_code] X [eos]"),Ig=p(),rl=a("p"),Ng=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Dg=p(),Nn=a("div"),y(ds.$$.fragment),Lg=p(),il=a("p"),Gg=i("Converts a sequence of tokens (strings for sub-words) in a single string."),Wg=p(),Dn=a("div"),y(ls.$$.fragment),Rg=p(),cs=a("p"),Ug=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),dl=a("code"),Xg=i("prepare_for_model"),Qg=i(" method."),Hg=p(),Ln=a("div"),y(ps.$$.fragment),Vg=p(),ll=a("p"),Jg=i("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Kg=p(),Gn=a("div"),y(us.$$.fragment),Zg=p(),cl=a("p"),Yg=i("Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),jp=p(),Ht=a("h2"),Wn=a("a"),pl=a("span"),y(hs.$$.fragment),e_=p(),ul=a("span"),t_=i("MBart50TokenizerFast"),Ep=p(),K=a("div"),y(ms.$$.fragment),n_=p(),Vt=a("p"),o_=i("Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),hl=a("em"),a_=i("tokenizers"),s_=i(` library). Based on
`),fs=a("a"),r_=i("BPE"),i_=i("."),d_=p(),gs=a("p"),l_=i("This tokenizer inherits from "),Mi=a("a"),c_=i("PreTrainedTokenizerFast"),p_=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),u_=p(),y(Rn.$$.fragment),h_=p(),Be=a("div"),y(_s.$$.fragment),m_=p(),ml=a("p"),f_=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),g_=p(),bs=a("p"),__=i("An MBART-50 sequence has the following format, where "),fl=a("code"),b_=i("X"),k_=i(" represents the sequence:"),y_=p(),ks=a("ul"),ys=a("li"),gl=a("code"),v_=i("input_ids"),T_=i(" (for encoder) "),_l=a("code"),w_=i("[src_lang_code] X [eos]"),M_=p(),vs=a("li"),bl=a("code"),$_=i("labels"),x_=i(": (for decoder) "),kl=a("code"),z_=i("[tgt_lang_code] X [eos]"),q_=p(),yl=a("p"),F_=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),B_=p(),Un=a("div"),y(Ts.$$.fragment),j_=p(),vl=a("p"),E_=i("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),C_=p(),Xn=a("div"),y(ws.$$.fragment),P_=p(),Tl=a("p"),S_=i("Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Cp=p(),Jt=a("h2"),Qn=a("a"),wl=a("span"),y(Ms.$$.fragment),A_=p(),Ml=a("span"),O_=i("MBartModel"),Pp=p(),We=a("div"),y($s.$$.fragment),I_=p(),xs=a("p"),N_=i(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$i=a("a"),D_=i("PreTrainedModel"),L_=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),G_=p(),zs=a("p"),W_=i("This model is also a PyTorch "),qs=a("a"),R_=i("torch.nn.Module"),U_=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),X_=p(),Ze=a("div"),y(Fs.$$.fragment),Q_=p(),Kt=a("p"),H_=i("The "),xi=a("a"),V_=i("MBartModel"),J_=i(" forward method, overrides the "),$l=a("code"),K_=i("__call__"),Z_=i(" special method."),Y_=p(),y(Hn.$$.fragment),eb=p(),y(Vn.$$.fragment),Sp=p(),Zt=a("h2"),Jn=a("a"),xl=a("span"),y(Bs.$$.fragment),tb=p(),zl=a("span"),nb=i("MBartForConditionalGeneration"),Ap=p(),Re=a("div"),y(js.$$.fragment),ob=p(),Es=a("p"),ab=i(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),zi=a("a"),sb=i("PreTrainedModel"),rb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ib=p(),Cs=a("p"),db=i("This model is also a PyTorch "),Ps=a("a"),lb=i("torch.nn.Module"),cb=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pb=p(),je=a("div"),y(Ss.$$.fragment),ub=p(),Yt=a("p"),hb=i("The "),qi=a("a"),mb=i("MBartForConditionalGeneration"),fb=i(" forward method, overrides the "),ql=a("code"),gb=i("__call__"),_b=i(" special method."),bb=p(),y(Kn.$$.fragment),kb=p(),y(Zn.$$.fragment),yb=p(),y(Yn.$$.fragment),Op=p(),en=a("h2"),eo=a("a"),Fl=a("span"),y(As.$$.fragment),vb=p(),Bl=a("span"),Tb=i("MBartForQuestionAnswering"),Ip=p(),we=a("div"),y(Os.$$.fragment),wb=p(),tn=a("p"),Mb=i(`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),jl=a("code"),$b=i("span start logits"),xb=i(" and "),El=a("code"),zb=i("span end logits"),qb=i(")."),Fb=p(),Is=a("p"),Bb=i("This model inherits from "),Fi=a("a"),jb=i("PreTrainedModel"),Eb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cb=p(),Ns=a("p"),Pb=i("This model is also a PyTorch "),Ds=a("a"),Sb=i("torch.nn.Module"),Ab=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ob=p(),Ee=a("div"),y(Ls.$$.fragment),Ib=p(),nn=a("p"),Nb=i("The "),Bi=a("a"),Db=i("MBartForQuestionAnswering"),Lb=i(" forward method, overrides the "),Cl=a("code"),Gb=i("__call__"),Wb=i(" special method."),Rb=p(),y(to.$$.fragment),Ub=p(),y(no.$$.fragment),Xb=p(),y(oo.$$.fragment),Np=p(),on=a("h2"),ao=a("a"),Pl=a("span"),y(Gs.$$.fragment),Qb=p(),Sl=a("span"),Hb=i("MBartForSequenceClassification"),Dp=p(),Me=a("div"),y(Ws.$$.fragment),Vb=p(),Al=a("p"),Jb=i(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Kb=p(),Rs=a("p"),Zb=i("This model inherits from "),ji=a("a"),Yb=i("PreTrainedModel"),ek=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tk=p(),Us=a("p"),nk=i("This model is also a PyTorch "),Xs=a("a"),ok=i("torch.nn.Module"),ak=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sk=p(),Z=a("div"),y(Qs.$$.fragment),rk=p(),an=a("p"),ik=i("The "),Ei=a("a"),dk=i("MBartForSequenceClassification"),lk=i(" forward method, overrides the "),Ol=a("code"),ck=i("__call__"),pk=i(" special method."),uk=p(),y(so.$$.fragment),hk=p(),y(ro.$$.fragment),mk=p(),y(io.$$.fragment),fk=p(),y(lo.$$.fragment),gk=p(),y(co.$$.fragment),Lp=p(),sn=a("h2"),po=a("a"),Il=a("span"),y(Hs.$$.fragment),_k=p(),Nl=a("span"),bk=i("MBartForCausalLM"),Gp=p(),rn=a("div"),y(Vs.$$.fragment),kk=p(),uo=a("div"),y(Js.$$.fragment),yk=p(),y(ho.$$.fragment),Wp=p(),dn=a("h2"),mo=a("a"),Dl=a("span"),y(Ks.$$.fragment),vk=p(),Ll=a("span"),Tk=i("TFMBartModel"),Rp=p(),$e=a("div"),y(Zs.$$.fragment),wk=p(),Ys=a("p"),Mk=i(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ci=a("a"),$k=i("TFPreTrainedModel"),xk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zk=p(),er=a("p"),qk=i("This model is also a "),tr=a("a"),Fk=i("tf.keras.Model"),Bk=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jk=p(),y(fo.$$.fragment),Ek=p(),Ye=a("div"),y(nr.$$.fragment),Ck=p(),ln=a("p"),Pk=i("The "),Pi=a("a"),Sk=i("TFMBartModel"),Ak=i(" forward method, overrides the "),Gl=a("code"),Ok=i("__call__"),Ik=i(" special method."),Nk=p(),y(go.$$.fragment),Dk=p(),y(_o.$$.fragment),Up=p(),cn=a("h2"),bo=a("a"),Wl=a("span"),y(or.$$.fragment),Lk=p(),Rl=a("span"),Gk=i("TFMBartForConditionalGeneration"),Xp=p(),xe=a("div"),y(ar.$$.fragment),Wk=p(),sr=a("p"),Rk=i(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Si=a("a"),Uk=i("TFPreTrainedModel"),Xk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qk=p(),rr=a("p"),Hk=i("This model is also a "),ir=a("a"),Vk=i("tf.keras.Model"),Jk=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kk=p(),y(ko.$$.fragment),Zk=p(),Ce=a("div"),y(dr.$$.fragment),Yk=p(),pn=a("p"),ey=i("The "),Ai=a("a"),ty=i("TFMBartForConditionalGeneration"),ny=i(" forward method, overrides the "),Ul=a("code"),oy=i("__call__"),ay=i(" special method."),sy=p(),y(yo.$$.fragment),ry=p(),y(vo.$$.fragment),iy=p(),y(To.$$.fragment),Qp=p(),un=a("h2"),wo=a("a"),Xl=a("span"),y(lr.$$.fragment),dy=p(),Ql=a("span"),ly=i("FlaxMBartModel"),Hp=p(),W=a("div"),y(cr.$$.fragment),cy=p(),pr=a("p"),py=i(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Oi=a("a"),uy=i("FlaxPreTrainedModel"),hy=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),my=p(),ur=a("p"),fy=i(`This model is also a Flax Linen
`),hr=a("a"),gy=i("flax.nn.Module"),_y=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),by=p(),Hl=a("p"),ky=i("Finally, this model supports inherent JAX features such as:"),yy=p(),mt=a("ul"),Vl=a("li"),mr=a("a"),vy=i("Just-In-Time (JIT) compilation"),Ty=p(),Jl=a("li"),fr=a("a"),wy=i("Automatic Differentiation"),My=p(),Kl=a("li"),gr=a("a"),$y=i("Vectorization"),xy=p(),Zl=a("li"),_r=a("a"),zy=i("Parallelization"),qy=p(),et=a("div"),y(br.$$.fragment),Fy=p(),hn=a("p"),By=i("The "),Yl=a("code"),jy=i("FlaxMBartPreTrainedModel"),Ey=i(" forward method, overrides the "),ec=a("code"),Cy=i("__call__"),Py=i(" special method."),Sy=p(),y(Mo.$$.fragment),Ay=p(),y($o.$$.fragment),Oy=p(),xo=a("div"),y(kr.$$.fragment),Iy=p(),y(zo.$$.fragment),Ny=p(),qo=a("div"),y(yr.$$.fragment),Dy=p(),y(Fo.$$.fragment),Vp=p(),mn=a("h2"),Bo=a("a"),tc=a("span"),y(vr.$$.fragment),Ly=p(),nc=a("span"),Gy=i("FlaxMBartForConditionalGeneration"),Jp=p(),R=a("div"),y(Tr.$$.fragment),Wy=p(),wr=a("p"),Ry=i(`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ii=a("a"),Uy=i("FlaxPreTrainedModel"),Xy=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qy=p(),Mr=a("p"),Hy=i(`This model is also a Flax Linen
`),$r=a("a"),Vy=i("flax.nn.Module"),Jy=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ky=p(),oc=a("p"),Zy=i("Finally, this model supports inherent JAX features such as:"),Yy=p(),ft=a("ul"),ac=a("li"),xr=a("a"),ev=i("Just-In-Time (JIT) compilation"),tv=p(),sc=a("li"),zr=a("a"),nv=i("Automatic Differentiation"),ov=p(),rc=a("li"),qr=a("a"),av=i("Vectorization"),sv=p(),ic=a("li"),Fr=a("a"),rv=i("Parallelization"),iv=p(),Pe=a("div"),y(Br.$$.fragment),dv=p(),fn=a("p"),lv=i("The "),dc=a("code"),cv=i("FlaxMBartPreTrainedModel"),pv=i(" forward method, overrides the "),lc=a("code"),uv=i("__call__"),hv=i(" special method."),mv=p(),y(jo.$$.fragment),fv=p(),y(Eo.$$.fragment),gv=p(),y(Co.$$.fragment),_v=p(),Po=a("div"),y(jr.$$.fragment),bv=p(),y(So.$$.fragment),kv=p(),Ao=a("div"),y(Er.$$.fragment),yv=p(),y(Oo.$$.fragment),Kp=p(),gn=a("h2"),Io=a("a"),cc=a("span"),y(Cr.$$.fragment),vv=p(),pc=a("span"),Tv=i("FlaxMBartForSequenceClassification"),Zp=p(),N=a("div"),y(Pr.$$.fragment),wv=p(),uc=a("p"),Mv=i(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),$v=p(),Sr=a("p"),xv=i("This model inherits from "),Ni=a("a"),zv=i("FlaxPreTrainedModel"),qv=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fv=p(),Ar=a("p"),Bv=i(`This model is also a Flax Linen
`),Or=a("a"),jv=i("flax.nn.Module"),Ev=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Cv=p(),hc=a("p"),Pv=i("Finally, this model supports inherent JAX features such as:"),Sv=p(),gt=a("ul"),mc=a("li"),Ir=a("a"),Av=i("Just-In-Time (JIT) compilation"),Ov=p(),fc=a("li"),Nr=a("a"),Iv=i("Automatic Differentiation"),Nv=p(),gc=a("li"),Dr=a("a"),Dv=i("Vectorization"),Lv=p(),_c=a("li"),Lr=a("a"),Gv=i("Parallelization"),Wv=p(),tt=a("div"),y(Gr.$$.fragment),Rv=p(),_n=a("p"),Uv=i("The "),bc=a("code"),Xv=i("FlaxMBartPreTrainedModel"),Qv=i(" forward method, overrides the "),kc=a("code"),Hv=i("__call__"),Vv=i(" special method."),Jv=p(),y(No.$$.fragment),Kv=p(),y(Do.$$.fragment),Zv=p(),Lo=a("div"),y(Wr.$$.fragment),Yv=p(),y(Go.$$.fragment),eT=p(),Wo=a("div"),y(Rr.$$.fragment),tT=p(),y(Ro.$$.fragment),Yp=p(),bn=a("h2"),Uo=a("a"),yc=a("span"),y(Ur.$$.fragment),nT=p(),vc=a("span"),oT=i("FlaxMBartForQuestionAnswering"),eu=p(),D=a("div"),y(Xr.$$.fragment),aT=p(),kn=a("p"),sT=i(`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Tc=a("code"),rT=i("span start logits"),iT=i(" and "),wc=a("code"),dT=i("span end logits"),lT=i(")."),cT=p(),Qr=a("p"),pT=i("This model inherits from "),Di=a("a"),uT=i("FlaxPreTrainedModel"),hT=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mT=p(),Hr=a("p"),fT=i(`This model is also a Flax Linen
`),Vr=a("a"),gT=i("flax.nn.Module"),_T=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),bT=p(),Mc=a("p"),kT=i("Finally, this model supports inherent JAX features such as:"),yT=p(),_t=a("ul"),$c=a("li"),Jr=a("a"),vT=i("Just-In-Time (JIT) compilation"),TT=p(),xc=a("li"),Kr=a("a"),wT=i("Automatic Differentiation"),MT=p(),zc=a("li"),Zr=a("a"),$T=i("Vectorization"),xT=p(),qc=a("li"),Yr=a("a"),zT=i("Parallelization"),qT=p(),nt=a("div"),y(ei.$$.fragment),FT=p(),yn=a("p"),BT=i("The "),Fc=a("code"),jT=i("FlaxMBartPreTrainedModel"),ET=i(" forward method, overrides the "),Bc=a("code"),CT=i("__call__"),PT=i(" special method."),ST=p(),y(Xo.$$.fragment),AT=p(),y(Qo.$$.fragment),OT=p(),Ho=a("div"),y(ti.$$.fragment),IT=p(),y(Vo.$$.fragment),NT=p(),Jo=a("div"),y(ni.$$.fragment),DT=p(),y(Ko.$$.fragment),this.h()},l(n){const g=Cx('[data-svelte="svelte-1phssyn"]',document.head);l=s(g,"META",{name:!0,content:!0}),g.forEach(t),k=u(n),m=s(n,"H1",{class:!0});var oi=r(m);c=s(oi,"A",{id:!0,class:!0,href:!0});var jc=r(c);_=s(jc,"SPAN",{});var Ec=r(_);v(o.$$.fragment,Ec),Ec.forEach(t),jc.forEach(t),h=u(oi),F=s(oi,"SPAN",{});var Cc=r(F);st=d(Cc,"MBart and MBart-50"),Cc.forEach(t),oi.forEach(t),ze=u(n),E=s(n,"P",{});var Zo=r(E);Ie=s(Zo,"STRONG",{});var Pc=r(Ie);he=d(Pc,"DISCLAIMER:"),Pc.forEach(t),rt=d(Zo," If you see something strange, file a "),me=s(Zo,"A",{href:!0,rel:!0});var Sc=r(me);fe=d(Sc,"Github Issue"),Sc.forEach(t),it=d(Zo,` and assign
@patrickvonplaten`),Zo.forEach(t),Xe=u(n),Q=s(n,"H2",{class:!0});var ai=r(Q);L=s(ai,"A",{id:!0,class:!0,href:!0});var Ac=r(L);Ne=s(Ac,"SPAN",{});var Oc=r(Ne);v(oe.$$.fragment,Oc),Oc.forEach(t),Ac.forEach(t),S=u(ai),A=s(ai,"SPAN",{});var Ic=r(A);dt=d(Ic,"Overview of MBart"),Ic.forEach(t),ai.forEach(t),le=u(n),ce=s(n,"P",{});var si=r(ce);lt=d(si,"The MBart model was presented in "),H=s(si,"A",{href:!0,rel:!0});var Nc=r(H);ct=d(Nc,"Multilingual Denoising Pre-training for Neural Machine Translation"),Nc.forEach(t),pt=d(si,` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),si.forEach(t),G=u(n),qe=s(n,"P",{});var Dc=r(qe);ge=d(Dc,`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Dc.forEach(t),Qe=u(n),ae=s(n,"P",{});var Yo=r(ae);_e=d(Yo,"This model was contributed by "),be=s(Yo,"A",{href:!0,rel:!0});var Lc=r(be);ut=d(Lc,"valhalla"),Lc.forEach(t),se=d(Yo,". The Authors\u2019 code can be found "),ke=s(Yo,"A",{href:!0,rel:!0});var Gc=r(ke);ye=d(Gc,"here"),Gc.forEach(t),Yo.forEach(t),He=u(n),z=s(n,"H3",{class:!0});var ri=r(z);j=s(ri,"A",{id:!0,class:!0,href:!0});var Wc=r(j);ve=s(Wc,"SPAN",{});var Rc=r(ve);v(De.$$.fragment,Rc),Rc.forEach(t),Wc.forEach(t),jt=u(ri),V=s(ri,"SPAN",{});var Uc=r(V);Et=d(Uc,"Training of MBart"),Uc.forEach(t),ri.forEach(t),bt=u(n),X=s(n,"P",{});var Ue=r(X);re=d(Ue,`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),ie=s(Ue,"CODE",{});var Xc=r(ie);Ct=d(Xc,"X [eos, src_lang_code]"),Xc.forEach(t),Pt=d(Ue," where "),de=s(Ue,"CODE",{});var Qc=r(de);St=d(Qc,"X"),Qc.forEach(t),At=d(Ue,` is the source text. The
target text format is `),Le=s(Ue,"CODE",{});var Hc=r(Le);Ot=d(Hc,"[tgt_lang_code] X [eos]"),Hc.forEach(t),Bh=d(Ue,". "),ad=s(Ue,"CODE",{});var Vc=r(ad);jh=d(Vc,"bos"),Vc.forEach(t),Eh=d(Ue," is never used."),Ue.forEach(t),ip=u(n),kt=s(n,"P",{});var vn=r(kt);Ch=d(vn,"The regular "),ga=s(vn,"A",{href:!0});var Li=r(ga);sd=s(Li,"STRONG",{});var Jc=r(sd);Ph=d(Jc,"call"),Jc.forEach(t),Sh=d(Li,"()"),Li.forEach(t),Ah=d(vn,` will encode source text format, and it should be wrapped
inside the context manager `),li=s(vn,"A",{href:!0});var Kc=r(li);Oh=d(Kc,"as_target_tokenizer()"),Kc.forEach(t),Ih=d(vn," to encode target text format."),vn.forEach(t),dp=u(n),ci=s(n,"UL",{});var Zc=r(ci);rd=s(Zc,"LI",{});var Yc=r(rd);Nh=d(Yc,"Supervised training"),Yc.forEach(t),Zc.forEach(t),lp=u(n),v(_a.$$.fragment,n),cp=u(n),pi=s(n,"UL",{});var ep=r(pi);ba=s(ep,"LI",{});var ii=r(ba);id=s(ii,"P",{});var tp=r(id);Dh=d(tp,"Generation"),tp.forEach(t),Lh=u(ii),It=s(ii,"P",{});var Tn=r(It);Gh=d(Tn,"While generating the target text set the "),dd=s(Tn,"CODE",{});var np=r(dd);Wh=d(np,"decoder_start_token_id"),np.forEach(t),Rh=d(Tn,` to the target language id. The following
example shows how to translate English to Romanian using the `),ld=s(Tn,"EM",{});var op=r(ld);Uh=d(op,"facebook/mbart-large-en-ro"),op.forEach(t),Xh=d(Tn," model."),Tn.forEach(t),ii.forEach(t),ep.forEach(t),pp=u(n),v(ka.$$.fragment,n),up=u(n),Nt=s(n,"H2",{class:!0});var di=r(Nt);Mn=s(di,"A",{id:!0,class:!0,href:!0});var ap=r(Mn);cd=s(ap,"SPAN",{});var sp=r(cd);v(ya.$$.fragment,sp),sp.forEach(t),ap.forEach(t),Qh=u(di),pd=s(di,"SPAN",{});var rp=r(pd);Hh=d(rp,"Overview of MBart-50"),rp.forEach(t),di.forEach(t),hp=u(n),yt=s(n,"P",{});var wn=r(yt);Vh=d(wn,"MBart-50 was introduced in the "),va=s(wn,"A",{href:!0,rel:!0});var LT=r(va);Jh=d(LT,"Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),LT.forEach(t),Kh=d(wn,` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),ud=s(wn,"EM",{});var GT=r(ud);Zh=d(GT,"mbart-large-cc25"),GT.forEach(t),Yh=d(wn,` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),wn.forEach(t),mp=u(n),ui=s(n,"P",{});var WT=r(ui);em=d(WT,"According to the abstract"),WT.forEach(t),fp=u(n),hi=s(n,"P",{});var RT=r(hi);hd=s(RT,"EM",{});var UT=r(hd);tm=d(UT,`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),UT.forEach(t),RT.forEach(t),gp=u(n),Dt=s(n,"H3",{class:!0});var nu=r(Dt);$n=s(nu,"A",{id:!0,class:!0,href:!0});var XT=r($n);md=s(XT,"SPAN",{});var QT=r(md);v(Ta.$$.fragment,QT),QT.forEach(t),XT.forEach(t),nm=u(nu),fd=s(nu,"SPAN",{});var HT=r(fd);om=d(HT,"Training of MBart-50"),HT.forEach(t),nu.forEach(t),_p=u(n),Ve=s(n,"P",{});var ea=r(Ve);am=d(ea,`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),gd=s(ea,"CODE",{});var VT=r(gd);sm=d(VT,"[lang_code] X [eos]"),VT.forEach(t),rm=d(ea,", where "),_d=s(ea,"CODE",{});var JT=r(_d);im=d(JT,"lang_code"),JT.forEach(t),dm=d(ea,` is source
language id for source text and target language id for target text, with `),bd=s(ea,"CODE",{});var KT=r(bd);lm=d(KT,"X"),KT.forEach(t),cm=d(ea,` being the source or target text
respectively.`),ea.forEach(t),bp=u(n),xn=s(n,"P",{});var ou=r(xn);pm=d(ou,"MBart-50 has its own tokenizer "),mi=s(ou,"A",{href:!0});var ZT=r(mi);um=d(ZT,"MBart50Tokenizer"),ZT.forEach(t),hm=d(ou,"."),ou.forEach(t),kp=u(n),fi=s(n,"UL",{});var YT=r(fi);kd=s(YT,"LI",{});var ew=r(kd);mm=d(ew,"Supervised training"),ew.forEach(t),YT.forEach(t),yp=u(n),v(wa.$$.fragment,n),vp=u(n),gi=s(n,"UL",{});var tw=r(gi);Ma=s(tw,"LI",{});var au=r(Ma);yd=s(au,"P",{});var nw=r(yd);fm=d(nw,"Generation"),nw.forEach(t),gm=u(au),Te=s(au,"P",{});var ot=r(Te);_m=d(ot,"To generate using the mBART-50 multilingual translation models, "),vd=s(ot,"CODE",{});var ow=r(vd);bm=d(ow,"eos_token_id"),ow.forEach(t),km=d(ot,` is used as the
`),Td=s(ot,"CODE",{});var aw=r(Td);ym=d(aw,"decoder_start_token_id"),aw.forEach(t),vm=d(ot,` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),wd=s(ot,"EM",{});var sw=r(wd);Tm=d(sw,"forced_bos_token_id"),sw.forEach(t),wm=d(ot," parameter to the "),Md=s(ot,"EM",{});var rw=r(Md);Mm=d(rw,"generate"),rw.forEach(t),$m=d(ot,` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),$d=s(ot,"EM",{});var iw=r($d);xm=d(iw,"facebook/mbart-50-large-many-to-many"),iw.forEach(t),zm=d(ot," checkpoint."),ot.forEach(t),au.forEach(t),tw.forEach(t),Tp=u(n),v($a.$$.fragment,n),wp=u(n),Lt=s(n,"H2",{class:!0});var su=r(Lt);zn=s(su,"A",{id:!0,class:!0,href:!0});var dw=r(zn);xd=s(dw,"SPAN",{});var lw=r(xd);v(xa.$$.fragment,lw),lw.forEach(t),dw.forEach(t),qm=u(su),zd=s(su,"SPAN",{});var cw=r(zd);Fm=d(cw,"MBartConfig"),cw.forEach(t),su.forEach(t),Mp=u(n),Ge=s(n,"DIV",{class:!0});var ta=r(Ge);v(za.$$.fragment,ta),Bm=u(ta),Gt=s(ta,"P",{});var Gi=r(Gt);jm=d(Gi,"This is the configuration class to store the configuration of a "),_i=s(Gi,"A",{href:!0});var pw=r(_i);Em=d(pw,"MBartModel"),pw.forEach(t),Cm=d(Gi,`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),qa=s(Gi,"A",{href:!0,rel:!0});var uw=r(qa);Pm=d(uw,"facebook/mbart-large-cc25"),uw.forEach(t),Sm=d(Gi," architecture."),Gi.forEach(t),Am=u(ta),Wt=s(ta,"P",{});var Wi=r(Wt);Om=d(Wi,"Configuration objects inherit from "),bi=s(Wi,"A",{href:!0});var hw=r(bi);Im=d(hw,"PretrainedConfig"),hw.forEach(t),Nm=d(Wi,` and can be used to control the model outputs. Read the
documentation from `),ki=s(Wi,"A",{href:!0});var mw=r(ki);Dm=d(mw,"PretrainedConfig"),mw.forEach(t),Lm=d(Wi," for more information."),Wi.forEach(t),Gm=u(ta),v(qn.$$.fragment,ta),ta.forEach(t),$p=u(n),Rt=s(n,"H2",{class:!0});var ru=r(Rt);Fn=s(ru,"A",{id:!0,class:!0,href:!0});var fw=r(Fn);qd=s(fw,"SPAN",{});var gw=r(qd);v(Fa.$$.fragment,gw),gw.forEach(t),fw.forEach(t),Wm=u(ru),Fd=s(ru,"SPAN",{});var _w=r(Fd);Rm=d(_w,"MBartTokenizer"),_w.forEach(t),ru.forEach(t),xp=u(n),J=s(n,"DIV",{class:!0});var Se=r(J);v(Ba.$$.fragment,Se),Um=u(Se),Bd=s(Se,"P",{});var bw=r(Bd);Xm=d(bw,"Construct an MBART tokenizer."),bw.forEach(t),Qm=u(Se),ht=s(Se,"P",{});var na=r(ht);Hm=d(na,"Adapted from "),yi=s(na,"A",{href:!0});var kw=r(yi);Vm=d(kw,"RobertaTokenizer"),kw.forEach(t),Jm=d(na," and "),vi=s(na,"A",{href:!0});var yw=r(vi);Km=d(yw,"XLNetTokenizer"),yw.forEach(t),Zm=d(na,`. Based on
`),ja=s(na,"A",{href:!0,rel:!0});var vw=r(ja);Ym=d(vw,"SentencePiece"),vw.forEach(t),ef=d(na,"."),na.forEach(t),tf=u(Se),Ea=s(Se,"P",{});var iu=r(Ea);nf=d(iu,"The tokenization method is "),jd=s(iu,"CODE",{});var Tw=r(jd);of=d(Tw,"<tokens> <eos> <language code>"),Tw.forEach(t),af=d(iu," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),iu.forEach(t),sf=u(Se),v(Bn.$$.fragment,Se),rf=u(Se),jn=s(Se,"DIV",{class:!0});var du=r(jn);v(Ca.$$.fragment,du),df=u(du),Ed=s(du,"P",{});var ww=r(Ed);lf=d(ww,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),ww.forEach(t),du.forEach(t),cf=u(Se),Je=s(Se,"DIV",{class:!0});var oa=r(Je);v(Pa.$$.fragment,oa),pf=u(oa),Sa=s(oa,"P",{});var lu=r(Sa);uf=d(lu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Cd=s(lu,"CODE",{});var Mw=r(Cd);hf=d(Mw,"X"),Mw.forEach(t),mf=d(lu," represents the sequence:"),lu.forEach(t),ff=u(oa),Aa=s(oa,"UL",{});var cu=r(Aa);Oa=s(cu,"LI",{});var pu=r(Oa);Pd=s(pu,"CODE",{});var $w=r(Pd);gf=d($w,"input_ids"),$w.forEach(t),_f=d(pu," (for encoder) "),Sd=s(pu,"CODE",{});var xw=r(Sd);bf=d(xw,"X [eos, src_lang_code]"),xw.forEach(t),pu.forEach(t),kf=u(cu),Ia=s(cu,"LI",{});var uu=r(Ia);Ad=s(uu,"CODE",{});var zw=r(Ad);yf=d(zw,"decoder_input_ids"),zw.forEach(t),vf=d(uu,": (for decoder) "),Od=s(uu,"CODE",{});var qw=r(Od);Tf=d(qw,"X [eos, tgt_lang_code]"),qw.forEach(t),uu.forEach(t),cu.forEach(t),wf=u(oa),Id=s(oa,"P",{});var Fw=r(Id);Mf=d(Fw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Fw.forEach(t),oa.forEach(t),Se.forEach(t),zp=u(n),Ut=s(n,"H2",{class:!0});var hu=r(Ut);En=s(hu,"A",{id:!0,class:!0,href:!0});var Bw=r(En);Nd=s(Bw,"SPAN",{});var jw=r(Nd);v(Na.$$.fragment,jw),jw.forEach(t),Bw.forEach(t),$f=u(hu),Dd=s(hu,"SPAN",{});var Ew=r(Dd);xf=d(Ew,"MBartTokenizerFast"),Ew.forEach(t),hu.forEach(t),qp=u(n),O=s(n,"DIV",{class:!0});var Y=r(O);v(Da.$$.fragment,Y),zf=u(Y),Xt=s(Y,"P",{});var Ri=r(Xt);qf=d(Ri,"Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Ld=s(Ri,"EM",{});var Cw=r(Ld);Ff=d(Cw,"tokenizers"),Cw.forEach(t),Bf=d(Ri,` library). Based on
`),La=s(Ri,"A",{href:!0,rel:!0});var Pw=r(La);jf=d(Pw,"BPE"),Pw.forEach(t),Ef=d(Ri,"."),Ri.forEach(t),Cf=u(Y),Ga=s(Y,"P",{});var mu=r(Ga);Pf=d(mu,"This tokenizer inherits from "),Ti=s(mu,"A",{href:!0});var Sw=r(Ti);Sf=d(Sw,"PreTrainedTokenizerFast"),Sw.forEach(t),Af=d(mu,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),mu.forEach(t),Of=u(Y),Wa=s(Y,"P",{});var fu=r(Wa);If=d(fu,"The tokenization method is "),Gd=s(fu,"CODE",{});var Aw=r(Gd);Nf=d(Aw,"<tokens> <eos> <language code>"),Aw.forEach(t),Df=d(fu," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),fu.forEach(t),Lf=u(Y),v(Cn.$$.fragment,Y),Gf=u(Y),Fe=s(Y,"DIV",{class:!0});var vt=r(Fe);v(Ra.$$.fragment,vt),Wf=u(vt),Wd=s(vt,"P",{});var Ow=r(Wd);Rf=d(Ow,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Ow.forEach(t),Uf=u(vt),Ua=s(vt,"P",{});var gu=r(Ua);Xf=d(gu,"An MBART sequence has the following format, where "),Rd=s(gu,"CODE",{});var Iw=r(Rd);Qf=d(Iw,"X"),Iw.forEach(t),Hf=d(gu," represents the sequence:"),gu.forEach(t),Vf=u(vt),Xa=s(vt,"UL",{});var _u=r(Xa);Qa=s(_u,"LI",{});var bu=r(Qa);Ud=s(bu,"CODE",{});var Nw=r(Ud);Jf=d(Nw,"input_ids"),Nw.forEach(t),Kf=d(bu," (for encoder) "),Xd=s(bu,"CODE",{});var Dw=r(Xd);Zf=d(Dw,"X [eos, src_lang_code]"),Dw.forEach(t),bu.forEach(t),Yf=u(_u),Ha=s(_u,"LI",{});var ku=r(Ha);Qd=s(ku,"CODE",{});var Lw=r(Qd);eg=d(Lw,"decoder_input_ids"),Lw.forEach(t),tg=d(ku,": (for decoder) "),Hd=s(ku,"CODE",{});var Gw=r(Hd);ng=d(Gw,"X [eos, tgt_lang_code]"),Gw.forEach(t),ku.forEach(t),_u.forEach(t),og=u(vt),Vd=s(vt,"P",{});var Ww=r(Vd);ag=d(Ww,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ww.forEach(t),vt.forEach(t),sg=u(Y),Pn=s(Y,"DIV",{class:!0});var yu=r(Pn);v(Va.$$.fragment,yu),rg=u(yu),Jd=s(yu,"P",{});var Rw=r(Jd);ig=d(Rw,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),Rw.forEach(t),yu.forEach(t),dg=u(Y),Sn=s(Y,"DIV",{class:!0});var vu=r(Sn);v(Ja.$$.fragment,vu),lg=u(vu),Kd=s(vu,"P",{});var Uw=r(Kd);cg=d(Uw,"Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),Uw.forEach(t),vu.forEach(t),pg=u(Y),An=s(Y,"DIV",{class:!0});var Tu=r(An);v(Ka.$$.fragment,Tu),ug=u(Tu),Zd=s(Tu,"P",{});var Xw=r(Zd);hg=d(Xw,"Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Xw.forEach(t),Tu.forEach(t),Y.forEach(t),Fp=u(n),Qt=s(n,"H2",{class:!0});var wu=r(Qt);On=s(wu,"A",{id:!0,class:!0,href:!0});var Qw=r(On);Yd=s(Qw,"SPAN",{});var Hw=r(Yd);v(Za.$$.fragment,Hw),Hw.forEach(t),Qw.forEach(t),mg=u(wu),el=s(wu,"SPAN",{});var Vw=r(el);fg=d(Vw,"MBart50Tokenizer"),Vw.forEach(t),wu.forEach(t),Bp=u(n),I=s(n,"DIV",{class:!0});var ee=r(I);v(Ya.$$.fragment,ee),gg=u(ee),es=s(ee,"P",{});var Mu=r(es);_g=d(Mu,"Construct a MBart50 tokenizer. Based on "),ts=s(Mu,"A",{href:!0,rel:!0});var Jw=r(ts);bg=d(Jw,"SentencePiece"),Jw.forEach(t),kg=d(Mu,"."),Mu.forEach(t),yg=u(ee),ns=s(ee,"P",{});var $u=r(ns);vg=d($u,"This tokenizer inherits from "),wi=s($u,"A",{href:!0});var Kw=r(wi);Tg=d(Kw,"PreTrainedTokenizer"),Kw.forEach(t),wg=d($u,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),$u.forEach(t),Mg=u(ee),v(In.$$.fragment,ee),$g=u(ee),Ke=s(ee,"DIV",{class:!0});var aa=r(Ke);v(os.$$.fragment,aa),xg=u(aa),as=s(aa,"P",{});var xu=r(as);zg=d(xu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),tl=s(xu,"CODE",{});var Zw=r(tl);qg=d(Zw,"X"),Zw.forEach(t),Fg=d(xu," represents the sequence:"),xu.forEach(t),Bg=u(aa),ss=s(aa,"UL",{});var zu=r(ss);rs=s(zu,"LI",{});var qu=r(rs);nl=s(qu,"CODE",{});var Yw=r(nl);jg=d(Yw,"input_ids"),Yw.forEach(t),Eg=d(qu," (for encoder) "),ol=s(qu,"CODE",{});var eM=r(ol);Cg=d(eM,"[src_lang_code] X [eos]"),eM.forEach(t),qu.forEach(t),Pg=u(zu),is=s(zu,"LI",{});var Fu=r(is);al=s(Fu,"CODE",{});var tM=r(al);Sg=d(tM,"labels"),tM.forEach(t),Ag=d(Fu,": (for decoder) "),sl=s(Fu,"CODE",{});var nM=r(sl);Og=d(nM,"[tgt_lang_code] X [eos]"),nM.forEach(t),Fu.forEach(t),zu.forEach(t),Ig=u(aa),rl=s(aa,"P",{});var oM=r(rl);Ng=d(oM,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),oM.forEach(t),aa.forEach(t),Dg=u(ee),Nn=s(ee,"DIV",{class:!0});var Bu=r(Nn);v(ds.$$.fragment,Bu),Lg=u(Bu),il=s(Bu,"P",{});var aM=r(il);Gg=d(aM,"Converts a sequence of tokens (strings for sub-words) in a single string."),aM.forEach(t),Bu.forEach(t),Wg=u(ee),Dn=s(ee,"DIV",{class:!0});var ju=r(Dn);v(ls.$$.fragment,ju),Rg=u(ju),cs=s(ju,"P",{});var Eu=r(cs);Ug=d(Eu,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),dl=s(Eu,"CODE",{});var sM=r(dl);Xg=d(sM,"prepare_for_model"),sM.forEach(t),Qg=d(Eu," method."),Eu.forEach(t),ju.forEach(t),Hg=u(ee),Ln=s(ee,"DIV",{class:!0});var Cu=r(Ln);v(ps.$$.fragment,Cu),Vg=u(Cu),ll=s(Cu,"P",{});var rM=r(ll);Jg=d(rM,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),rM.forEach(t),Cu.forEach(t),Kg=u(ee),Gn=s(ee,"DIV",{class:!0});var Pu=r(Gn);v(us.$$.fragment,Pu),Zg=u(Pu),cl=s(Pu,"P",{});var iM=r(cl);Yg=d(iM,"Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),iM.forEach(t),Pu.forEach(t),ee.forEach(t),jp=u(n),Ht=s(n,"H2",{class:!0});var Su=r(Ht);Wn=s(Su,"A",{id:!0,class:!0,href:!0});var dM=r(Wn);pl=s(dM,"SPAN",{});var lM=r(pl);v(hs.$$.fragment,lM),lM.forEach(t),dM.forEach(t),e_=u(Su),ul=s(Su,"SPAN",{});var cM=r(ul);t_=d(cM,"MBart50TokenizerFast"),cM.forEach(t),Su.forEach(t),Ep=u(n),K=s(n,"DIV",{class:!0});var Ae=r(K);v(ms.$$.fragment,Ae),n_=u(Ae),Vt=s(Ae,"P",{});var Ui=r(Vt);o_=d(Ui,"Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),hl=s(Ui,"EM",{});var pM=r(hl);a_=d(pM,"tokenizers"),pM.forEach(t),s_=d(Ui,` library). Based on
`),fs=s(Ui,"A",{href:!0,rel:!0});var uM=r(fs);r_=d(uM,"BPE"),uM.forEach(t),i_=d(Ui,"."),Ui.forEach(t),d_=u(Ae),gs=s(Ae,"P",{});var Au=r(gs);l_=d(Au,"This tokenizer inherits from "),Mi=s(Au,"A",{href:!0});var hM=r(Mi);c_=d(hM,"PreTrainedTokenizerFast"),hM.forEach(t),p_=d(Au,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Au.forEach(t),u_=u(Ae),v(Rn.$$.fragment,Ae),h_=u(Ae),Be=s(Ae,"DIV",{class:!0});var Tt=r(Be);v(_s.$$.fragment,Tt),m_=u(Tt),ml=s(Tt,"P",{});var mM=r(ml);f_=d(mM,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),mM.forEach(t),g_=u(Tt),bs=s(Tt,"P",{});var Ou=r(bs);__=d(Ou,"An MBART-50 sequence has the following format, where "),fl=s(Ou,"CODE",{});var fM=r(fl);b_=d(fM,"X"),fM.forEach(t),k_=d(Ou," represents the sequence:"),Ou.forEach(t),y_=u(Tt),ks=s(Tt,"UL",{});var Iu=r(ks);ys=s(Iu,"LI",{});var Nu=r(ys);gl=s(Nu,"CODE",{});var gM=r(gl);v_=d(gM,"input_ids"),gM.forEach(t),T_=d(Nu," (for encoder) "),_l=s(Nu,"CODE",{});var _M=r(_l);w_=d(_M,"[src_lang_code] X [eos]"),_M.forEach(t),Nu.forEach(t),M_=u(Iu),vs=s(Iu,"LI",{});var Du=r(vs);bl=s(Du,"CODE",{});var bM=r(bl);$_=d(bM,"labels"),bM.forEach(t),x_=d(Du,": (for decoder) "),kl=s(Du,"CODE",{});var kM=r(kl);z_=d(kM,"[tgt_lang_code] X [eos]"),kM.forEach(t),Du.forEach(t),Iu.forEach(t),q_=u(Tt),yl=s(Tt,"P",{});var yM=r(yl);F_=d(yM,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),yM.forEach(t),Tt.forEach(t),B_=u(Ae),Un=s(Ae,"DIV",{class:!0});var Lu=r(Un);v(Ts.$$.fragment,Lu),j_=u(Lu),vl=s(Lu,"P",{});var vM=r(vl);E_=d(vM,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),vM.forEach(t),Lu.forEach(t),C_=u(Ae),Xn=s(Ae,"DIV",{class:!0});var Gu=r(Xn);v(ws.$$.fragment,Gu),P_=u(Gu),Tl=s(Gu,"P",{});var TM=r(Tl);S_=d(TM,"Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),TM.forEach(t),Gu.forEach(t),Ae.forEach(t),Cp=u(n),Jt=s(n,"H2",{class:!0});var Wu=r(Jt);Qn=s(Wu,"A",{id:!0,class:!0,href:!0});var wM=r(Qn);wl=s(wM,"SPAN",{});var MM=r(wl);v(Ms.$$.fragment,MM),MM.forEach(t),wM.forEach(t),A_=u(Wu),Ml=s(Wu,"SPAN",{});var $M=r(Ml);O_=d($M,"MBartModel"),$M.forEach(t),Wu.forEach(t),Pp=u(n),We=s(n,"DIV",{class:!0});var sa=r(We);v($s.$$.fragment,sa),I_=u(sa),xs=s(sa,"P",{});var Ru=r(xs);N_=d(Ru,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$i=s(Ru,"A",{href:!0});var xM=r($i);D_=d(xM,"PreTrainedModel"),xM.forEach(t),L_=d(Ru,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ru.forEach(t),G_=u(sa),zs=s(sa,"P",{});var Uu=r(zs);W_=d(Uu,"This model is also a PyTorch "),qs=s(Uu,"A",{href:!0,rel:!0});var zM=r(qs);R_=d(zM,"torch.nn.Module"),zM.forEach(t),U_=d(Uu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uu.forEach(t),X_=u(sa),Ze=s(sa,"DIV",{class:!0});var ra=r(Ze);v(Fs.$$.fragment,ra),Q_=u(ra),Kt=s(ra,"P",{});var Xi=r(Kt);H_=d(Xi,"The "),xi=s(Xi,"A",{href:!0});var qM=r(xi);V_=d(qM,"MBartModel"),qM.forEach(t),J_=d(Xi," forward method, overrides the "),$l=s(Xi,"CODE",{});var FM=r($l);K_=d(FM,"__call__"),FM.forEach(t),Z_=d(Xi," special method."),Xi.forEach(t),Y_=u(ra),v(Hn.$$.fragment,ra),eb=u(ra),v(Vn.$$.fragment,ra),ra.forEach(t),sa.forEach(t),Sp=u(n),Zt=s(n,"H2",{class:!0});var Xu=r(Zt);Jn=s(Xu,"A",{id:!0,class:!0,href:!0});var BM=r(Jn);xl=s(BM,"SPAN",{});var jM=r(xl);v(Bs.$$.fragment,jM),jM.forEach(t),BM.forEach(t),tb=u(Xu),zl=s(Xu,"SPAN",{});var EM=r(zl);nb=d(EM,"MBartForConditionalGeneration"),EM.forEach(t),Xu.forEach(t),Ap=u(n),Re=s(n,"DIV",{class:!0});var ia=r(Re);v(js.$$.fragment,ia),ob=u(ia),Es=s(ia,"P",{});var Qu=r(Es);ab=d(Qu,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),zi=s(Qu,"A",{href:!0});var CM=r(zi);sb=d(CM,"PreTrainedModel"),CM.forEach(t),rb=d(Qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qu.forEach(t),ib=u(ia),Cs=s(ia,"P",{});var Hu=r(Cs);db=d(Hu,"This model is also a PyTorch "),Ps=s(Hu,"A",{href:!0,rel:!0});var PM=r(Ps);lb=d(PM,"torch.nn.Module"),PM.forEach(t),cb=d(Hu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hu.forEach(t),pb=u(ia),je=s(ia,"DIV",{class:!0});var wt=r(je);v(Ss.$$.fragment,wt),ub=u(wt),Yt=s(wt,"P",{});var Qi=r(Yt);hb=d(Qi,"The "),qi=s(Qi,"A",{href:!0});var SM=r(qi);mb=d(SM,"MBartForConditionalGeneration"),SM.forEach(t),fb=d(Qi," forward method, overrides the "),ql=s(Qi,"CODE",{});var AM=r(ql);gb=d(AM,"__call__"),AM.forEach(t),_b=d(Qi," special method."),Qi.forEach(t),bb=u(wt),v(Kn.$$.fragment,wt),kb=u(wt),v(Zn.$$.fragment,wt),yb=u(wt),v(Yn.$$.fragment,wt),wt.forEach(t),ia.forEach(t),Op=u(n),en=s(n,"H2",{class:!0});var Vu=r(en);eo=s(Vu,"A",{id:!0,class:!0,href:!0});var OM=r(eo);Fl=s(OM,"SPAN",{});var IM=r(Fl);v(As.$$.fragment,IM),IM.forEach(t),OM.forEach(t),vb=u(Vu),Bl=s(Vu,"SPAN",{});var NM=r(Bl);Tb=d(NM,"MBartForQuestionAnswering"),NM.forEach(t),Vu.forEach(t),Ip=u(n),we=s(n,"DIV",{class:!0});var Mt=r(we);v(Os.$$.fragment,Mt),wb=u(Mt),tn=s(Mt,"P",{});var Hi=r(tn);Mb=d(Hi,`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),jl=s(Hi,"CODE",{});var DM=r(jl);$b=d(DM,"span start logits"),DM.forEach(t),xb=d(Hi," and "),El=s(Hi,"CODE",{});var LM=r(El);zb=d(LM,"span end logits"),LM.forEach(t),qb=d(Hi,")."),Hi.forEach(t),Fb=u(Mt),Is=s(Mt,"P",{});var Ju=r(Is);Bb=d(Ju,"This model inherits from "),Fi=s(Ju,"A",{href:!0});var GM=r(Fi);jb=d(GM,"PreTrainedModel"),GM.forEach(t),Eb=d(Ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ju.forEach(t),Cb=u(Mt),Ns=s(Mt,"P",{});var Ku=r(Ns);Pb=d(Ku,"This model is also a PyTorch "),Ds=s(Ku,"A",{href:!0,rel:!0});var WM=r(Ds);Sb=d(WM,"torch.nn.Module"),WM.forEach(t),Ab=d(Ku,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ku.forEach(t),Ob=u(Mt),Ee=s(Mt,"DIV",{class:!0});var $t=r(Ee);v(Ls.$$.fragment,$t),Ib=u($t),nn=s($t,"P",{});var Vi=r(nn);Nb=d(Vi,"The "),Bi=s(Vi,"A",{href:!0});var RM=r(Bi);Db=d(RM,"MBartForQuestionAnswering"),RM.forEach(t),Lb=d(Vi," forward method, overrides the "),Cl=s(Vi,"CODE",{});var UM=r(Cl);Gb=d(UM,"__call__"),UM.forEach(t),Wb=d(Vi," special method."),Vi.forEach(t),Rb=u($t),v(to.$$.fragment,$t),Ub=u($t),v(no.$$.fragment,$t),Xb=u($t),v(oo.$$.fragment,$t),$t.forEach(t),Mt.forEach(t),Np=u(n),on=s(n,"H2",{class:!0});var Zu=r(on);ao=s(Zu,"A",{id:!0,class:!0,href:!0});var XM=r(ao);Pl=s(XM,"SPAN",{});var QM=r(Pl);v(Gs.$$.fragment,QM),QM.forEach(t),XM.forEach(t),Qb=u(Zu),Sl=s(Zu,"SPAN",{});var HM=r(Sl);Hb=d(HM,"MBartForSequenceClassification"),HM.forEach(t),Zu.forEach(t),Dp=u(n),Me=s(n,"DIV",{class:!0});var xt=r(Me);v(Ws.$$.fragment,xt),Vb=u(xt),Al=s(xt,"P",{});var VM=r(Al);Jb=d(VM,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),VM.forEach(t),Kb=u(xt),Rs=s(xt,"P",{});var Yu=r(Rs);Zb=d(Yu,"This model inherits from "),ji=s(Yu,"A",{href:!0});var JM=r(ji);Yb=d(JM,"PreTrainedModel"),JM.forEach(t),ek=d(Yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yu.forEach(t),tk=u(xt),Us=s(xt,"P",{});var eh=r(Us);nk=d(eh,"This model is also a PyTorch "),Xs=s(eh,"A",{href:!0,rel:!0});var KM=r(Xs);ok=d(KM,"torch.nn.Module"),KM.forEach(t),ak=d(eh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eh.forEach(t),sk=u(xt),Z=s(xt,"DIV",{class:!0});var Oe=r(Z);v(Qs.$$.fragment,Oe),rk=u(Oe),an=s(Oe,"P",{});var Ji=r(an);ik=d(Ji,"The "),Ei=s(Ji,"A",{href:!0});var ZM=r(Ei);dk=d(ZM,"MBartForSequenceClassification"),ZM.forEach(t),lk=d(Ji," forward method, overrides the "),Ol=s(Ji,"CODE",{});var YM=r(Ol);ck=d(YM,"__call__"),YM.forEach(t),pk=d(Ji," special method."),Ji.forEach(t),uk=u(Oe),v(so.$$.fragment,Oe),hk=u(Oe),v(ro.$$.fragment,Oe),mk=u(Oe),v(io.$$.fragment,Oe),fk=u(Oe),v(lo.$$.fragment,Oe),gk=u(Oe),v(co.$$.fragment,Oe),Oe.forEach(t),xt.forEach(t),Lp=u(n),sn=s(n,"H2",{class:!0});var th=r(sn);po=s(th,"A",{id:!0,class:!0,href:!0});var e$=r(po);Il=s(e$,"SPAN",{});var t$=r(Il);v(Hs.$$.fragment,t$),t$.forEach(t),e$.forEach(t),_k=u(th),Nl=s(th,"SPAN",{});var n$=r(Nl);bk=d(n$,"MBartForCausalLM"),n$.forEach(t),th.forEach(t),Gp=u(n),rn=s(n,"DIV",{class:!0});var nh=r(rn);v(Vs.$$.fragment,nh),kk=u(nh),uo=s(nh,"DIV",{class:!0});var oh=r(uo);v(Js.$$.fragment,oh),yk=u(oh),v(ho.$$.fragment,oh),oh.forEach(t),nh.forEach(t),Wp=u(n),dn=s(n,"H2",{class:!0});var ah=r(dn);mo=s(ah,"A",{id:!0,class:!0,href:!0});var o$=r(mo);Dl=s(o$,"SPAN",{});var a$=r(Dl);v(Ks.$$.fragment,a$),a$.forEach(t),o$.forEach(t),vk=u(ah),Ll=s(ah,"SPAN",{});var s$=r(Ll);Tk=d(s$,"TFMBartModel"),s$.forEach(t),ah.forEach(t),Rp=u(n),$e=s(n,"DIV",{class:!0});var zt=r($e);v(Zs.$$.fragment,zt),wk=u(zt),Ys=s(zt,"P",{});var sh=r(Ys);Mk=d(sh,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ci=s(sh,"A",{href:!0});var r$=r(Ci);$k=d(r$,"TFPreTrainedModel"),r$.forEach(t),xk=d(sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sh.forEach(t),zk=u(zt),er=s(zt,"P",{});var rh=r(er);qk=d(rh,"This model is also a "),tr=s(rh,"A",{href:!0,rel:!0});var i$=r(tr);Fk=d(i$,"tf.keras.Model"),i$.forEach(t),Bk=d(rh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rh.forEach(t),jk=u(zt),v(fo.$$.fragment,zt),Ek=u(zt),Ye=s(zt,"DIV",{class:!0});var da=r(Ye);v(nr.$$.fragment,da),Ck=u(da),ln=s(da,"P",{});var Ki=r(ln);Pk=d(Ki,"The "),Pi=s(Ki,"A",{href:!0});var d$=r(Pi);Sk=d(d$,"TFMBartModel"),d$.forEach(t),Ak=d(Ki," forward method, overrides the "),Gl=s(Ki,"CODE",{});var l$=r(Gl);Ok=d(l$,"__call__"),l$.forEach(t),Ik=d(Ki," special method."),Ki.forEach(t),Nk=u(da),v(go.$$.fragment,da),Dk=u(da),v(_o.$$.fragment,da),da.forEach(t),zt.forEach(t),Up=u(n),cn=s(n,"H2",{class:!0});var ih=r(cn);bo=s(ih,"A",{id:!0,class:!0,href:!0});var c$=r(bo);Wl=s(c$,"SPAN",{});var p$=r(Wl);v(or.$$.fragment,p$),p$.forEach(t),c$.forEach(t),Lk=u(ih),Rl=s(ih,"SPAN",{});var u$=r(Rl);Gk=d(u$,"TFMBartForConditionalGeneration"),u$.forEach(t),ih.forEach(t),Xp=u(n),xe=s(n,"DIV",{class:!0});var qt=r(xe);v(ar.$$.fragment,qt),Wk=u(qt),sr=s(qt,"P",{});var dh=r(sr);Rk=d(dh,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Si=s(dh,"A",{href:!0});var h$=r(Si);Uk=d(h$,"TFPreTrainedModel"),h$.forEach(t),Xk=d(dh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dh.forEach(t),Qk=u(qt),rr=s(qt,"P",{});var lh=r(rr);Hk=d(lh,"This model is also a "),ir=s(lh,"A",{href:!0,rel:!0});var m$=r(ir);Vk=d(m$,"tf.keras.Model"),m$.forEach(t),Jk=d(lh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lh.forEach(t),Kk=u(qt),v(ko.$$.fragment,qt),Zk=u(qt),Ce=s(qt,"DIV",{class:!0});var Ft=r(Ce);v(dr.$$.fragment,Ft),Yk=u(Ft),pn=s(Ft,"P",{});var Zi=r(pn);ey=d(Zi,"The "),Ai=s(Zi,"A",{href:!0});var f$=r(Ai);ty=d(f$,"TFMBartForConditionalGeneration"),f$.forEach(t),ny=d(Zi," forward method, overrides the "),Ul=s(Zi,"CODE",{});var g$=r(Ul);oy=d(g$,"__call__"),g$.forEach(t),ay=d(Zi," special method."),Zi.forEach(t),sy=u(Ft),v(yo.$$.fragment,Ft),ry=u(Ft),v(vo.$$.fragment,Ft),iy=u(Ft),v(To.$$.fragment,Ft),Ft.forEach(t),qt.forEach(t),Qp=u(n),un=s(n,"H2",{class:!0});var ch=r(un);wo=s(ch,"A",{id:!0,class:!0,href:!0});var _$=r(wo);Xl=s(_$,"SPAN",{});var b$=r(Xl);v(lr.$$.fragment,b$),b$.forEach(t),_$.forEach(t),dy=u(ch),Ql=s(ch,"SPAN",{});var k$=r(Ql);ly=d(k$,"FlaxMBartModel"),k$.forEach(t),ch.forEach(t),Hp=u(n),W=s(n,"DIV",{class:!0});var pe=r(W);v(cr.$$.fragment,pe),cy=u(pe),pr=s(pe,"P",{});var ph=r(pr);py=d(ph,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Oi=s(ph,"A",{href:!0});var y$=r(Oi);uy=d(y$,"FlaxPreTrainedModel"),y$.forEach(t),hy=d(ph,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ph.forEach(t),my=u(pe),ur=s(pe,"P",{});var uh=r(ur);fy=d(uh,`This model is also a Flax Linen
`),hr=s(uh,"A",{href:!0,rel:!0});var v$=r(hr);gy=d(v$,"flax.nn.Module"),v$.forEach(t),_y=d(uh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),uh.forEach(t),by=u(pe),Hl=s(pe,"P",{});var T$=r(Hl);ky=d(T$,"Finally, this model supports inherent JAX features such as:"),T$.forEach(t),yy=u(pe),mt=s(pe,"UL",{});var la=r(mt);Vl=s(la,"LI",{});var w$=r(Vl);mr=s(w$,"A",{href:!0,rel:!0});var M$=r(mr);vy=d(M$,"Just-In-Time (JIT) compilation"),M$.forEach(t),w$.forEach(t),Ty=u(la),Jl=s(la,"LI",{});var $$=r(Jl);fr=s($$,"A",{href:!0,rel:!0});var x$=r(fr);wy=d(x$,"Automatic Differentiation"),x$.forEach(t),$$.forEach(t),My=u(la),Kl=s(la,"LI",{});var z$=r(Kl);gr=s(z$,"A",{href:!0,rel:!0});var q$=r(gr);$y=d(q$,"Vectorization"),q$.forEach(t),z$.forEach(t),xy=u(la),Zl=s(la,"LI",{});var F$=r(Zl);_r=s(F$,"A",{href:!0,rel:!0});var B$=r(_r);zy=d(B$,"Parallelization"),B$.forEach(t),F$.forEach(t),la.forEach(t),qy=u(pe),et=s(pe,"DIV",{class:!0});var ca=r(et);v(br.$$.fragment,ca),Fy=u(ca),hn=s(ca,"P",{});var Yi=r(hn);By=d(Yi,"The "),Yl=s(Yi,"CODE",{});var j$=r(Yl);jy=d(j$,"FlaxMBartPreTrainedModel"),j$.forEach(t),Ey=d(Yi," forward method, overrides the "),ec=s(Yi,"CODE",{});var E$=r(ec);Cy=d(E$,"__call__"),E$.forEach(t),Py=d(Yi," special method."),Yi.forEach(t),Sy=u(ca),v(Mo.$$.fragment,ca),Ay=u(ca),v($o.$$.fragment,ca),ca.forEach(t),Oy=u(pe),xo=s(pe,"DIV",{class:!0});var hh=r(xo);v(kr.$$.fragment,hh),Iy=u(hh),v(zo.$$.fragment,hh),hh.forEach(t),Ny=u(pe),qo=s(pe,"DIV",{class:!0});var mh=r(qo);v(yr.$$.fragment,mh),Dy=u(mh),v(Fo.$$.fragment,mh),mh.forEach(t),pe.forEach(t),Vp=u(n),mn=s(n,"H2",{class:!0});var fh=r(mn);Bo=s(fh,"A",{id:!0,class:!0,href:!0});var C$=r(Bo);tc=s(C$,"SPAN",{});var P$=r(tc);v(vr.$$.fragment,P$),P$.forEach(t),C$.forEach(t),Ly=u(fh),nc=s(fh,"SPAN",{});var S$=r(nc);Gy=d(S$,"FlaxMBartForConditionalGeneration"),S$.forEach(t),fh.forEach(t),Jp=u(n),R=s(n,"DIV",{class:!0});var ue=r(R);v(Tr.$$.fragment,ue),Wy=u(ue),wr=s(ue,"P",{});var gh=r(wr);Ry=d(gh,`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ii=s(gh,"A",{href:!0});var A$=r(Ii);Uy=d(A$,"FlaxPreTrainedModel"),A$.forEach(t),Xy=d(gh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gh.forEach(t),Qy=u(ue),Mr=s(ue,"P",{});var _h=r(Mr);Hy=d(_h,`This model is also a Flax Linen
`),$r=s(_h,"A",{href:!0,rel:!0});var O$=r($r);Vy=d(O$,"flax.nn.Module"),O$.forEach(t),Jy=d(_h,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),_h.forEach(t),Ky=u(ue),oc=s(ue,"P",{});var I$=r(oc);Zy=d(I$,"Finally, this model supports inherent JAX features such as:"),I$.forEach(t),Yy=u(ue),ft=s(ue,"UL",{});var pa=r(ft);ac=s(pa,"LI",{});var N$=r(ac);xr=s(N$,"A",{href:!0,rel:!0});var D$=r(xr);ev=d(D$,"Just-In-Time (JIT) compilation"),D$.forEach(t),N$.forEach(t),tv=u(pa),sc=s(pa,"LI",{});var L$=r(sc);zr=s(L$,"A",{href:!0,rel:!0});var G$=r(zr);nv=d(G$,"Automatic Differentiation"),G$.forEach(t),L$.forEach(t),ov=u(pa),rc=s(pa,"LI",{});var W$=r(rc);qr=s(W$,"A",{href:!0,rel:!0});var R$=r(qr);av=d(R$,"Vectorization"),R$.forEach(t),W$.forEach(t),sv=u(pa),ic=s(pa,"LI",{});var U$=r(ic);Fr=s(U$,"A",{href:!0,rel:!0});var X$=r(Fr);rv=d(X$,"Parallelization"),X$.forEach(t),U$.forEach(t),pa.forEach(t),iv=u(ue),Pe=s(ue,"DIV",{class:!0});var Bt=r(Pe);v(Br.$$.fragment,Bt),dv=u(Bt),fn=s(Bt,"P",{});var ed=r(fn);lv=d(ed,"The "),dc=s(ed,"CODE",{});var Q$=r(dc);cv=d(Q$,"FlaxMBartPreTrainedModel"),Q$.forEach(t),pv=d(ed," forward method, overrides the "),lc=s(ed,"CODE",{});var H$=r(lc);uv=d(H$,"__call__"),H$.forEach(t),hv=d(ed," special method."),ed.forEach(t),mv=u(Bt),v(jo.$$.fragment,Bt),fv=u(Bt),v(Eo.$$.fragment,Bt),gv=u(Bt),v(Co.$$.fragment,Bt),Bt.forEach(t),_v=u(ue),Po=s(ue,"DIV",{class:!0});var bh=r(Po);v(jr.$$.fragment,bh),bv=u(bh),v(So.$$.fragment,bh),bh.forEach(t),kv=u(ue),Ao=s(ue,"DIV",{class:!0});var kh=r(Ao);v(Er.$$.fragment,kh),yv=u(kh),v(Oo.$$.fragment,kh),kh.forEach(t),ue.forEach(t),Kp=u(n),gn=s(n,"H2",{class:!0});var yh=r(gn);Io=s(yh,"A",{id:!0,class:!0,href:!0});var V$=r(Io);cc=s(V$,"SPAN",{});var J$=r(cc);v(Cr.$$.fragment,J$),J$.forEach(t),V$.forEach(t),vv=u(yh),pc=s(yh,"SPAN",{});var K$=r(pc);Tv=d(K$,"FlaxMBartForSequenceClassification"),K$.forEach(t),yh.forEach(t),Zp=u(n),N=s(n,"DIV",{class:!0});var te=r(N);v(Pr.$$.fragment,te),wv=u(te),uc=s(te,"P",{});var Z$=r(uc);Mv=d(Z$,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Z$.forEach(t),$v=u(te),Sr=s(te,"P",{});var vh=r(Sr);xv=d(vh,"This model inherits from "),Ni=s(vh,"A",{href:!0});var Y$=r(Ni);zv=d(Y$,"FlaxPreTrainedModel"),Y$.forEach(t),qv=d(vh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vh.forEach(t),Fv=u(te),Ar=s(te,"P",{});var Th=r(Ar);Bv=d(Th,`This model is also a Flax Linen
`),Or=s(Th,"A",{href:!0,rel:!0});var ex=r(Or);jv=d(ex,"flax.nn.Module"),ex.forEach(t),Ev=d(Th,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Th.forEach(t),Cv=u(te),hc=s(te,"P",{});var tx=r(hc);Pv=d(tx,"Finally, this model supports inherent JAX features such as:"),tx.forEach(t),Sv=u(te),gt=s(te,"UL",{});var ua=r(gt);mc=s(ua,"LI",{});var nx=r(mc);Ir=s(nx,"A",{href:!0,rel:!0});var ox=r(Ir);Av=d(ox,"Just-In-Time (JIT) compilation"),ox.forEach(t),nx.forEach(t),Ov=u(ua),fc=s(ua,"LI",{});var ax=r(fc);Nr=s(ax,"A",{href:!0,rel:!0});var sx=r(Nr);Iv=d(sx,"Automatic Differentiation"),sx.forEach(t),ax.forEach(t),Nv=u(ua),gc=s(ua,"LI",{});var rx=r(gc);Dr=s(rx,"A",{href:!0,rel:!0});var ix=r(Dr);Dv=d(ix,"Vectorization"),ix.forEach(t),rx.forEach(t),Lv=u(ua),_c=s(ua,"LI",{});var dx=r(_c);Lr=s(dx,"A",{href:!0,rel:!0});var lx=r(Lr);Gv=d(lx,"Parallelization"),lx.forEach(t),dx.forEach(t),ua.forEach(t),Wv=u(te),tt=s(te,"DIV",{class:!0});var ha=r(tt);v(Gr.$$.fragment,ha),Rv=u(ha),_n=s(ha,"P",{});var td=r(_n);Uv=d(td,"The "),bc=s(td,"CODE",{});var cx=r(bc);Xv=d(cx,"FlaxMBartPreTrainedModel"),cx.forEach(t),Qv=d(td," forward method, overrides the "),kc=s(td,"CODE",{});var px=r(kc);Hv=d(px,"__call__"),px.forEach(t),Vv=d(td," special method."),td.forEach(t),Jv=u(ha),v(No.$$.fragment,ha),Kv=u(ha),v(Do.$$.fragment,ha),ha.forEach(t),Zv=u(te),Lo=s(te,"DIV",{class:!0});var wh=r(Lo);v(Wr.$$.fragment,wh),Yv=u(wh),v(Go.$$.fragment,wh),wh.forEach(t),eT=u(te),Wo=s(te,"DIV",{class:!0});var Mh=r(Wo);v(Rr.$$.fragment,Mh),tT=u(Mh),v(Ro.$$.fragment,Mh),Mh.forEach(t),te.forEach(t),Yp=u(n),bn=s(n,"H2",{class:!0});var $h=r(bn);Uo=s($h,"A",{id:!0,class:!0,href:!0});var ux=r(Uo);yc=s(ux,"SPAN",{});var hx=r(yc);v(Ur.$$.fragment,hx),hx.forEach(t),ux.forEach(t),nT=u($h),vc=s($h,"SPAN",{});var mx=r(vc);oT=d(mx,"FlaxMBartForQuestionAnswering"),mx.forEach(t),$h.forEach(t),eu=u(n),D=s(n,"DIV",{class:!0});var ne=r(D);v(Xr.$$.fragment,ne),aT=u(ne),kn=s(ne,"P",{});var nd=r(kn);sT=d(nd,`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Tc=s(nd,"CODE",{});var fx=r(Tc);rT=d(fx,"span start logits"),fx.forEach(t),iT=d(nd," and "),wc=s(nd,"CODE",{});var gx=r(wc);dT=d(gx,"span end logits"),gx.forEach(t),lT=d(nd,")."),nd.forEach(t),cT=u(ne),Qr=s(ne,"P",{});var xh=r(Qr);pT=d(xh,"This model inherits from "),Di=s(xh,"A",{href:!0});var _x=r(Di);uT=d(_x,"FlaxPreTrainedModel"),_x.forEach(t),hT=d(xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh.forEach(t),mT=u(ne),Hr=s(ne,"P",{});var zh=r(Hr);fT=d(zh,`This model is also a Flax Linen
`),Vr=s(zh,"A",{href:!0,rel:!0});var bx=r(Vr);gT=d(bx,"flax.nn.Module"),bx.forEach(t),_T=d(zh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zh.forEach(t),bT=u(ne),Mc=s(ne,"P",{});var kx=r(Mc);kT=d(kx,"Finally, this model supports inherent JAX features such as:"),kx.forEach(t),yT=u(ne),_t=s(ne,"UL",{});var ma=r(_t);$c=s(ma,"LI",{});var yx=r($c);Jr=s(yx,"A",{href:!0,rel:!0});var vx=r(Jr);vT=d(vx,"Just-In-Time (JIT) compilation"),vx.forEach(t),yx.forEach(t),TT=u(ma),xc=s(ma,"LI",{});var Tx=r(xc);Kr=s(Tx,"A",{href:!0,rel:!0});var wx=r(Kr);wT=d(wx,"Automatic Differentiation"),wx.forEach(t),Tx.forEach(t),MT=u(ma),zc=s(ma,"LI",{});var Mx=r(zc);Zr=s(Mx,"A",{href:!0,rel:!0});var $x=r(Zr);$T=d($x,"Vectorization"),$x.forEach(t),Mx.forEach(t),xT=u(ma),qc=s(ma,"LI",{});var xx=r(qc);Yr=s(xx,"A",{href:!0,rel:!0});var zx=r(Yr);zT=d(zx,"Parallelization"),zx.forEach(t),xx.forEach(t),ma.forEach(t),qT=u(ne),nt=s(ne,"DIV",{class:!0});var fa=r(nt);v(ei.$$.fragment,fa),FT=u(fa),yn=s(fa,"P",{});var od=r(yn);BT=d(od,"The "),Fc=s(od,"CODE",{});var qx=r(Fc);jT=d(qx,"FlaxMBartPreTrainedModel"),qx.forEach(t),ET=d(od," forward method, overrides the "),Bc=s(od,"CODE",{});var Fx=r(Bc);CT=d(Fx,"__call__"),Fx.forEach(t),PT=d(od," special method."),od.forEach(t),ST=u(fa),v(Xo.$$.fragment,fa),AT=u(fa),v(Qo.$$.fragment,fa),fa.forEach(t),OT=u(ne),Ho=s(ne,"DIV",{class:!0});var qh=r(Ho);v(ti.$$.fragment,qh),IT=u(qh),v(Vo.$$.fragment,qh),qh.forEach(t),NT=u(ne),Jo=s(ne,"DIV",{class:!0});var Fh=r(Jo);v(ni.$$.fragment,Fh),DT=u(Fh),v(Ko.$$.fragment,Fh),Fh.forEach(t),ne.forEach(t),this.h()},h(){f(l,"name","hf:doc:metadata"),f(l,"content",JSON.stringify($1)),f(c,"id","mbart-and-mbart50"),f(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(c,"href","#mbart-and-mbart50"),f(m,"class","relative group"),f(me,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),f(me,"rel","nofollow"),f(L,"id","overview-of-mbart"),f(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(L,"href","#overview-of-mbart"),f(Q,"class","relative group"),f(H,"href","https://arxiv.org/abs/2001.08210"),f(H,"rel","nofollow"),f(be,"href","https://huggingface.co/valhalla"),f(be,"rel","nofollow"),f(ke,"href","https://github.com/pytorch/fairseq/tree/master/examples/mbart"),f(ke,"rel","nofollow"),f(j,"id","training-of-mbart"),f(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(j,"href","#training-of-mbart"),f(z,"class","relative group"),f(ga,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),f(li,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer.as_target_tokenizer"),f(Mn,"id","overview-of-mbart50"),f(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Mn,"href","#overview-of-mbart50"),f(Nt,"class","relative group"),f(va,"href","https://arxiv.org/abs/2008.00401"),f(va,"rel","nofollow"),f($n,"id","training-of-mbart50"),f($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($n,"href","#training-of-mbart50"),f(Dt,"class","relative group"),f(mi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBart50Tokenizer"),f(zn,"id","transformers.MBartConfig"),f(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(zn,"href","#transformers.MBartConfig"),f(Lt,"class","relative group"),f(_i,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartModel"),f(qa,"href","https://huggingface.co/facebook/mbart-large-cc25"),f(qa,"rel","nofollow"),f(bi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(ki,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fn,"id","transformers.MBartTokenizer"),f(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fn,"href","#transformers.MBartTokenizer"),f(Rt,"class","relative group"),f(yi,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),f(vi,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),f(ja,"href","https://github.com/google/sentencepiece"),f(ja,"rel","nofollow"),f(jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(En,"id","transformers.MBartTokenizerFast"),f(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(En,"href","#transformers.MBartTokenizerFast"),f(Ut,"class","relative group"),f(La,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),f(La,"rel","nofollow"),f(Ti,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(An,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(On,"id","transformers.MBart50Tokenizer"),f(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(On,"href","#transformers.MBart50Tokenizer"),f(Qt,"class","relative group"),f(ts,"href","https://github.com/google/sentencepiece"),f(ts,"rel","nofollow"),f(wi,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Gn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wn,"id","transformers.MBart50TokenizerFast"),f(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Wn,"href","#transformers.MBart50TokenizerFast"),f(Ht,"class","relative group"),f(fs,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),f(fs,"rel","nofollow"),f(Mi,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qn,"id","transformers.MBartModel"),f(Qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Qn,"href","#transformers.MBartModel"),f(Jt,"class","relative group"),f($i,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(qs,"rel","nofollow"),f(xi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartModel"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jn,"id","transformers.MBartForConditionalGeneration"),f(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jn,"href","#transformers.MBartForConditionalGeneration"),f(Zt,"class","relative group"),f(zi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ps,"rel","nofollow"),f(qi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartForConditionalGeneration"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(eo,"id","transformers.MBartForQuestionAnswering"),f(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(eo,"href","#transformers.MBartForQuestionAnswering"),f(en,"class","relative group"),f(Fi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ds,"rel","nofollow"),f(Bi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartForQuestionAnswering"),f(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ao,"id","transformers.MBartForSequenceClassification"),f(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ao,"href","#transformers.MBartForSequenceClassification"),f(on,"class","relative group"),f(ji,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Xs,"rel","nofollow"),f(Ei,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartForSequenceClassification"),f(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(po,"id","transformers.MBartForCausalLM"),f(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(po,"href","#transformers.MBartForCausalLM"),f(sn,"class","relative group"),f(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mo,"id","transformers.TFMBartModel"),f(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(mo,"href","#transformers.TFMBartModel"),f(dn,"class","relative group"),f(Ci,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(tr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(tr,"rel","nofollow"),f(Pi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.TFMBartModel"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(bo,"id","transformers.TFMBartForConditionalGeneration"),f(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(bo,"href","#transformers.TFMBartForConditionalGeneration"),f(cn,"class","relative group"),f(Si,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ir,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ir,"rel","nofollow"),f(Ai,"href","/docs/transformers/main/en/model_doc/mbart#transformers.TFMBartForConditionalGeneration"),f(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(wo,"id","transformers.FlaxMBartModel"),f(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(wo,"href","#transformers.FlaxMBartModel"),f(un,"class","relative group"),f(Oi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(hr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(hr,"rel","nofollow"),f(mr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(mr,"rel","nofollow"),f(fr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(fr,"rel","nofollow"),f(gr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(gr,"rel","nofollow"),f(_r,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(_r,"rel","nofollow"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Bo,"id","transformers.FlaxMBartForConditionalGeneration"),f(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Bo,"href","#transformers.FlaxMBartForConditionalGeneration"),f(mn,"class","relative group"),f(Ii,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f($r,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f($r,"rel","nofollow"),f(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(xr,"rel","nofollow"),f(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(zr,"rel","nofollow"),f(qr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(qr,"rel","nofollow"),f(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Fr,"rel","nofollow"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Io,"id","transformers.FlaxMBartForSequenceClassification"),f(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Io,"href","#transformers.FlaxMBartForSequenceClassification"),f(gn,"class","relative group"),f(Ni,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Or,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Or,"rel","nofollow"),f(Ir,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ir,"rel","nofollow"),f(Nr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Nr,"rel","nofollow"),f(Dr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Dr,"rel","nofollow"),f(Lr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Lr,"rel","nofollow"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Uo,"id","transformers.FlaxMBartForQuestionAnswering"),f(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Uo,"href","#transformers.FlaxMBartForQuestionAnswering"),f(bn,"class","relative group"),f(Di,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Vr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Vr,"rel","nofollow"),f(Jr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Jr,"rel","nofollow"),f(Kr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Kr,"rel","nofollow"),f(Zr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Zr,"rel","nofollow"),f(Yr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Yr,"rel","nofollow"),f(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,g){e(document.head,l),b(n,k,g),b(n,m,g),e(m,c),e(c,_),T(o,_,null),e(m,h),e(m,F),e(F,st),b(n,ze,g),b(n,E,g),e(E,Ie),e(Ie,he),e(E,rt),e(E,me),e(me,fe),e(E,it),b(n,Xe,g),b(n,Q,g),e(Q,L),e(L,Ne),T(oe,Ne,null),e(Q,S),e(Q,A),e(A,dt),b(n,le,g),b(n,ce,g),e(ce,lt),e(ce,H),e(H,ct),e(ce,pt),b(n,G,g),b(n,qe,g),e(qe,ge),b(n,Qe,g),b(n,ae,g),e(ae,_e),e(ae,be),e(be,ut),e(ae,se),e(ae,ke),e(ke,ye),b(n,He,g),b(n,z,g),e(z,j),e(j,ve),T(De,ve,null),e(z,jt),e(z,V),e(V,Et),b(n,bt,g),b(n,X,g),e(X,re),e(X,ie),e(ie,Ct),e(X,Pt),e(X,de),e(de,St),e(X,At),e(X,Le),e(Le,Ot),e(X,Bh),e(X,ad),e(ad,jh),e(X,Eh),b(n,ip,g),b(n,kt,g),e(kt,Ch),e(kt,ga),e(ga,sd),e(sd,Ph),e(ga,Sh),e(kt,Ah),e(kt,li),e(li,Oh),e(kt,Ih),b(n,dp,g),b(n,ci,g),e(ci,rd),e(rd,Nh),b(n,lp,g),T(_a,n,g),b(n,cp,g),b(n,pi,g),e(pi,ba),e(ba,id),e(id,Dh),e(ba,Lh),e(ba,It),e(It,Gh),e(It,dd),e(dd,Wh),e(It,Rh),e(It,ld),e(ld,Uh),e(It,Xh),b(n,pp,g),T(ka,n,g),b(n,up,g),b(n,Nt,g),e(Nt,Mn),e(Mn,cd),T(ya,cd,null),e(Nt,Qh),e(Nt,pd),e(pd,Hh),b(n,hp,g),b(n,yt,g),e(yt,Vh),e(yt,va),e(va,Jh),e(yt,Kh),e(yt,ud),e(ud,Zh),e(yt,Yh),b(n,mp,g),b(n,ui,g),e(ui,em),b(n,fp,g),b(n,hi,g),e(hi,hd),e(hd,tm),b(n,gp,g),b(n,Dt,g),e(Dt,$n),e($n,md),T(Ta,md,null),e(Dt,nm),e(Dt,fd),e(fd,om),b(n,_p,g),b(n,Ve,g),e(Ve,am),e(Ve,gd),e(gd,sm),e(Ve,rm),e(Ve,_d),e(_d,im),e(Ve,dm),e(Ve,bd),e(bd,lm),e(Ve,cm),b(n,bp,g),b(n,xn,g),e(xn,pm),e(xn,mi),e(mi,um),e(xn,hm),b(n,kp,g),b(n,fi,g),e(fi,kd),e(kd,mm),b(n,yp,g),T(wa,n,g),b(n,vp,g),b(n,gi,g),e(gi,Ma),e(Ma,yd),e(yd,fm),e(Ma,gm),e(Ma,Te),e(Te,_m),e(Te,vd),e(vd,bm),e(Te,km),e(Te,Td),e(Td,ym),e(Te,vm),e(Te,wd),e(wd,Tm),e(Te,wm),e(Te,Md),e(Md,Mm),e(Te,$m),e(Te,$d),e($d,xm),e(Te,zm),b(n,Tp,g),T($a,n,g),b(n,wp,g),b(n,Lt,g),e(Lt,zn),e(zn,xd),T(xa,xd,null),e(Lt,qm),e(Lt,zd),e(zd,Fm),b(n,Mp,g),b(n,Ge,g),T(za,Ge,null),e(Ge,Bm),e(Ge,Gt),e(Gt,jm),e(Gt,_i),e(_i,Em),e(Gt,Cm),e(Gt,qa),e(qa,Pm),e(Gt,Sm),e(Ge,Am),e(Ge,Wt),e(Wt,Om),e(Wt,bi),e(bi,Im),e(Wt,Nm),e(Wt,ki),e(ki,Dm),e(Wt,Lm),e(Ge,Gm),T(qn,Ge,null),b(n,$p,g),b(n,Rt,g),e(Rt,Fn),e(Fn,qd),T(Fa,qd,null),e(Rt,Wm),e(Rt,Fd),e(Fd,Rm),b(n,xp,g),b(n,J,g),T(Ba,J,null),e(J,Um),e(J,Bd),e(Bd,Xm),e(J,Qm),e(J,ht),e(ht,Hm),e(ht,yi),e(yi,Vm),e(ht,Jm),e(ht,vi),e(vi,Km),e(ht,Zm),e(ht,ja),e(ja,Ym),e(ht,ef),e(J,tf),e(J,Ea),e(Ea,nf),e(Ea,jd),e(jd,of),e(Ea,af),e(J,sf),T(Bn,J,null),e(J,rf),e(J,jn),T(Ca,jn,null),e(jn,df),e(jn,Ed),e(Ed,lf),e(J,cf),e(J,Je),T(Pa,Je,null),e(Je,pf),e(Je,Sa),e(Sa,uf),e(Sa,Cd),e(Cd,hf),e(Sa,mf),e(Je,ff),e(Je,Aa),e(Aa,Oa),e(Oa,Pd),e(Pd,gf),e(Oa,_f),e(Oa,Sd),e(Sd,bf),e(Aa,kf),e(Aa,Ia),e(Ia,Ad),e(Ad,yf),e(Ia,vf),e(Ia,Od),e(Od,Tf),e(Je,wf),e(Je,Id),e(Id,Mf),b(n,zp,g),b(n,Ut,g),e(Ut,En),e(En,Nd),T(Na,Nd,null),e(Ut,$f),e(Ut,Dd),e(Dd,xf),b(n,qp,g),b(n,O,g),T(Da,O,null),e(O,zf),e(O,Xt),e(Xt,qf),e(Xt,Ld),e(Ld,Ff),e(Xt,Bf),e(Xt,La),e(La,jf),e(Xt,Ef),e(O,Cf),e(O,Ga),e(Ga,Pf),e(Ga,Ti),e(Ti,Sf),e(Ga,Af),e(O,Of),e(O,Wa),e(Wa,If),e(Wa,Gd),e(Gd,Nf),e(Wa,Df),e(O,Lf),T(Cn,O,null),e(O,Gf),e(O,Fe),T(Ra,Fe,null),e(Fe,Wf),e(Fe,Wd),e(Wd,Rf),e(Fe,Uf),e(Fe,Ua),e(Ua,Xf),e(Ua,Rd),e(Rd,Qf),e(Ua,Hf),e(Fe,Vf),e(Fe,Xa),e(Xa,Qa),e(Qa,Ud),e(Ud,Jf),e(Qa,Kf),e(Qa,Xd),e(Xd,Zf),e(Xa,Yf),e(Xa,Ha),e(Ha,Qd),e(Qd,eg),e(Ha,tg),e(Ha,Hd),e(Hd,ng),e(Fe,og),e(Fe,Vd),e(Vd,ag),e(O,sg),e(O,Pn),T(Va,Pn,null),e(Pn,rg),e(Pn,Jd),e(Jd,ig),e(O,dg),e(O,Sn),T(Ja,Sn,null),e(Sn,lg),e(Sn,Kd),e(Kd,cg),e(O,pg),e(O,An),T(Ka,An,null),e(An,ug),e(An,Zd),e(Zd,hg),b(n,Fp,g),b(n,Qt,g),e(Qt,On),e(On,Yd),T(Za,Yd,null),e(Qt,mg),e(Qt,el),e(el,fg),b(n,Bp,g),b(n,I,g),T(Ya,I,null),e(I,gg),e(I,es),e(es,_g),e(es,ts),e(ts,bg),e(es,kg),e(I,yg),e(I,ns),e(ns,vg),e(ns,wi),e(wi,Tg),e(ns,wg),e(I,Mg),T(In,I,null),e(I,$g),e(I,Ke),T(os,Ke,null),e(Ke,xg),e(Ke,as),e(as,zg),e(as,tl),e(tl,qg),e(as,Fg),e(Ke,Bg),e(Ke,ss),e(ss,rs),e(rs,nl),e(nl,jg),e(rs,Eg),e(rs,ol),e(ol,Cg),e(ss,Pg),e(ss,is),e(is,al),e(al,Sg),e(is,Ag),e(is,sl),e(sl,Og),e(Ke,Ig),e(Ke,rl),e(rl,Ng),e(I,Dg),e(I,Nn),T(ds,Nn,null),e(Nn,Lg),e(Nn,il),e(il,Gg),e(I,Wg),e(I,Dn),T(ls,Dn,null),e(Dn,Rg),e(Dn,cs),e(cs,Ug),e(cs,dl),e(dl,Xg),e(cs,Qg),e(I,Hg),e(I,Ln),T(ps,Ln,null),e(Ln,Vg),e(Ln,ll),e(ll,Jg),e(I,Kg),e(I,Gn),T(us,Gn,null),e(Gn,Zg),e(Gn,cl),e(cl,Yg),b(n,jp,g),b(n,Ht,g),e(Ht,Wn),e(Wn,pl),T(hs,pl,null),e(Ht,e_),e(Ht,ul),e(ul,t_),b(n,Ep,g),b(n,K,g),T(ms,K,null),e(K,n_),e(K,Vt),e(Vt,o_),e(Vt,hl),e(hl,a_),e(Vt,s_),e(Vt,fs),e(fs,r_),e(Vt,i_),e(K,d_),e(K,gs),e(gs,l_),e(gs,Mi),e(Mi,c_),e(gs,p_),e(K,u_),T(Rn,K,null),e(K,h_),e(K,Be),T(_s,Be,null),e(Be,m_),e(Be,ml),e(ml,f_),e(Be,g_),e(Be,bs),e(bs,__),e(bs,fl),e(fl,b_),e(bs,k_),e(Be,y_),e(Be,ks),e(ks,ys),e(ys,gl),e(gl,v_),e(ys,T_),e(ys,_l),e(_l,w_),e(ks,M_),e(ks,vs),e(vs,bl),e(bl,$_),e(vs,x_),e(vs,kl),e(kl,z_),e(Be,q_),e(Be,yl),e(yl,F_),e(K,B_),e(K,Un),T(Ts,Un,null),e(Un,j_),e(Un,vl),e(vl,E_),e(K,C_),e(K,Xn),T(ws,Xn,null),e(Xn,P_),e(Xn,Tl),e(Tl,S_),b(n,Cp,g),b(n,Jt,g),e(Jt,Qn),e(Qn,wl),T(Ms,wl,null),e(Jt,A_),e(Jt,Ml),e(Ml,O_),b(n,Pp,g),b(n,We,g),T($s,We,null),e(We,I_),e(We,xs),e(xs,N_),e(xs,$i),e($i,D_),e(xs,L_),e(We,G_),e(We,zs),e(zs,W_),e(zs,qs),e(qs,R_),e(zs,U_),e(We,X_),e(We,Ze),T(Fs,Ze,null),e(Ze,Q_),e(Ze,Kt),e(Kt,H_),e(Kt,xi),e(xi,V_),e(Kt,J_),e(Kt,$l),e($l,K_),e(Kt,Z_),e(Ze,Y_),T(Hn,Ze,null),e(Ze,eb),T(Vn,Ze,null),b(n,Sp,g),b(n,Zt,g),e(Zt,Jn),e(Jn,xl),T(Bs,xl,null),e(Zt,tb),e(Zt,zl),e(zl,nb),b(n,Ap,g),b(n,Re,g),T(js,Re,null),e(Re,ob),e(Re,Es),e(Es,ab),e(Es,zi),e(zi,sb),e(Es,rb),e(Re,ib),e(Re,Cs),e(Cs,db),e(Cs,Ps),e(Ps,lb),e(Cs,cb),e(Re,pb),e(Re,je),T(Ss,je,null),e(je,ub),e(je,Yt),e(Yt,hb),e(Yt,qi),e(qi,mb),e(Yt,fb),e(Yt,ql),e(ql,gb),e(Yt,_b),e(je,bb),T(Kn,je,null),e(je,kb),T(Zn,je,null),e(je,yb),T(Yn,je,null),b(n,Op,g),b(n,en,g),e(en,eo),e(eo,Fl),T(As,Fl,null),e(en,vb),e(en,Bl),e(Bl,Tb),b(n,Ip,g),b(n,we,g),T(Os,we,null),e(we,wb),e(we,tn),e(tn,Mb),e(tn,jl),e(jl,$b),e(tn,xb),e(tn,El),e(El,zb),e(tn,qb),e(we,Fb),e(we,Is),e(Is,Bb),e(Is,Fi),e(Fi,jb),e(Is,Eb),e(we,Cb),e(we,Ns),e(Ns,Pb),e(Ns,Ds),e(Ds,Sb),e(Ns,Ab),e(we,Ob),e(we,Ee),T(Ls,Ee,null),e(Ee,Ib),e(Ee,nn),e(nn,Nb),e(nn,Bi),e(Bi,Db),e(nn,Lb),e(nn,Cl),e(Cl,Gb),e(nn,Wb),e(Ee,Rb),T(to,Ee,null),e(Ee,Ub),T(no,Ee,null),e(Ee,Xb),T(oo,Ee,null),b(n,Np,g),b(n,on,g),e(on,ao),e(ao,Pl),T(Gs,Pl,null),e(on,Qb),e(on,Sl),e(Sl,Hb),b(n,Dp,g),b(n,Me,g),T(Ws,Me,null),e(Me,Vb),e(Me,Al),e(Al,Jb),e(Me,Kb),e(Me,Rs),e(Rs,Zb),e(Rs,ji),e(ji,Yb),e(Rs,ek),e(Me,tk),e(Me,Us),e(Us,nk),e(Us,Xs),e(Xs,ok),e(Us,ak),e(Me,sk),e(Me,Z),T(Qs,Z,null),e(Z,rk),e(Z,an),e(an,ik),e(an,Ei),e(Ei,dk),e(an,lk),e(an,Ol),e(Ol,ck),e(an,pk),e(Z,uk),T(so,Z,null),e(Z,hk),T(ro,Z,null),e(Z,mk),T(io,Z,null),e(Z,fk),T(lo,Z,null),e(Z,gk),T(co,Z,null),b(n,Lp,g),b(n,sn,g),e(sn,po),e(po,Il),T(Hs,Il,null),e(sn,_k),e(sn,Nl),e(Nl,bk),b(n,Gp,g),b(n,rn,g),T(Vs,rn,null),e(rn,kk),e(rn,uo),T(Js,uo,null),e(uo,yk),T(ho,uo,null),b(n,Wp,g),b(n,dn,g),e(dn,mo),e(mo,Dl),T(Ks,Dl,null),e(dn,vk),e(dn,Ll),e(Ll,Tk),b(n,Rp,g),b(n,$e,g),T(Zs,$e,null),e($e,wk),e($e,Ys),e(Ys,Mk),e(Ys,Ci),e(Ci,$k),e(Ys,xk),e($e,zk),e($e,er),e(er,qk),e(er,tr),e(tr,Fk),e(er,Bk),e($e,jk),T(fo,$e,null),e($e,Ek),e($e,Ye),T(nr,Ye,null),e(Ye,Ck),e(Ye,ln),e(ln,Pk),e(ln,Pi),e(Pi,Sk),e(ln,Ak),e(ln,Gl),e(Gl,Ok),e(ln,Ik),e(Ye,Nk),T(go,Ye,null),e(Ye,Dk),T(_o,Ye,null),b(n,Up,g),b(n,cn,g),e(cn,bo),e(bo,Wl),T(or,Wl,null),e(cn,Lk),e(cn,Rl),e(Rl,Gk),b(n,Xp,g),b(n,xe,g),T(ar,xe,null),e(xe,Wk),e(xe,sr),e(sr,Rk),e(sr,Si),e(Si,Uk),e(sr,Xk),e(xe,Qk),e(xe,rr),e(rr,Hk),e(rr,ir),e(ir,Vk),e(rr,Jk),e(xe,Kk),T(ko,xe,null),e(xe,Zk),e(xe,Ce),T(dr,Ce,null),e(Ce,Yk),e(Ce,pn),e(pn,ey),e(pn,Ai),e(Ai,ty),e(pn,ny),e(pn,Ul),e(Ul,oy),e(pn,ay),e(Ce,sy),T(yo,Ce,null),e(Ce,ry),T(vo,Ce,null),e(Ce,iy),T(To,Ce,null),b(n,Qp,g),b(n,un,g),e(un,wo),e(wo,Xl),T(lr,Xl,null),e(un,dy),e(un,Ql),e(Ql,ly),b(n,Hp,g),b(n,W,g),T(cr,W,null),e(W,cy),e(W,pr),e(pr,py),e(pr,Oi),e(Oi,uy),e(pr,hy),e(W,my),e(W,ur),e(ur,fy),e(ur,hr),e(hr,gy),e(ur,_y),e(W,by),e(W,Hl),e(Hl,ky),e(W,yy),e(W,mt),e(mt,Vl),e(Vl,mr),e(mr,vy),e(mt,Ty),e(mt,Jl),e(Jl,fr),e(fr,wy),e(mt,My),e(mt,Kl),e(Kl,gr),e(gr,$y),e(mt,xy),e(mt,Zl),e(Zl,_r),e(_r,zy),e(W,qy),e(W,et),T(br,et,null),e(et,Fy),e(et,hn),e(hn,By),e(hn,Yl),e(Yl,jy),e(hn,Ey),e(hn,ec),e(ec,Cy),e(hn,Py),e(et,Sy),T(Mo,et,null),e(et,Ay),T($o,et,null),e(W,Oy),e(W,xo),T(kr,xo,null),e(xo,Iy),T(zo,xo,null),e(W,Ny),e(W,qo),T(yr,qo,null),e(qo,Dy),T(Fo,qo,null),b(n,Vp,g),b(n,mn,g),e(mn,Bo),e(Bo,tc),T(vr,tc,null),e(mn,Ly),e(mn,nc),e(nc,Gy),b(n,Jp,g),b(n,R,g),T(Tr,R,null),e(R,Wy),e(R,wr),e(wr,Ry),e(wr,Ii),e(Ii,Uy),e(wr,Xy),e(R,Qy),e(R,Mr),e(Mr,Hy),e(Mr,$r),e($r,Vy),e(Mr,Jy),e(R,Ky),e(R,oc),e(oc,Zy),e(R,Yy),e(R,ft),e(ft,ac),e(ac,xr),e(xr,ev),e(ft,tv),e(ft,sc),e(sc,zr),e(zr,nv),e(ft,ov),e(ft,rc),e(rc,qr),e(qr,av),e(ft,sv),e(ft,ic),e(ic,Fr),e(Fr,rv),e(R,iv),e(R,Pe),T(Br,Pe,null),e(Pe,dv),e(Pe,fn),e(fn,lv),e(fn,dc),e(dc,cv),e(fn,pv),e(fn,lc),e(lc,uv),e(fn,hv),e(Pe,mv),T(jo,Pe,null),e(Pe,fv),T(Eo,Pe,null),e(Pe,gv),T(Co,Pe,null),e(R,_v),e(R,Po),T(jr,Po,null),e(Po,bv),T(So,Po,null),e(R,kv),e(R,Ao),T(Er,Ao,null),e(Ao,yv),T(Oo,Ao,null),b(n,Kp,g),b(n,gn,g),e(gn,Io),e(Io,cc),T(Cr,cc,null),e(gn,vv),e(gn,pc),e(pc,Tv),b(n,Zp,g),b(n,N,g),T(Pr,N,null),e(N,wv),e(N,uc),e(uc,Mv),e(N,$v),e(N,Sr),e(Sr,xv),e(Sr,Ni),e(Ni,zv),e(Sr,qv),e(N,Fv),e(N,Ar),e(Ar,Bv),e(Ar,Or),e(Or,jv),e(Ar,Ev),e(N,Cv),e(N,hc),e(hc,Pv),e(N,Sv),e(N,gt),e(gt,mc),e(mc,Ir),e(Ir,Av),e(gt,Ov),e(gt,fc),e(fc,Nr),e(Nr,Iv),e(gt,Nv),e(gt,gc),e(gc,Dr),e(Dr,Dv),e(gt,Lv),e(gt,_c),e(_c,Lr),e(Lr,Gv),e(N,Wv),e(N,tt),T(Gr,tt,null),e(tt,Rv),e(tt,_n),e(_n,Uv),e(_n,bc),e(bc,Xv),e(_n,Qv),e(_n,kc),e(kc,Hv),e(_n,Vv),e(tt,Jv),T(No,tt,null),e(tt,Kv),T(Do,tt,null),e(N,Zv),e(N,Lo),T(Wr,Lo,null),e(Lo,Yv),T(Go,Lo,null),e(N,eT),e(N,Wo),T(Rr,Wo,null),e(Wo,tT),T(Ro,Wo,null),b(n,Yp,g),b(n,bn,g),e(bn,Uo),e(Uo,yc),T(Ur,yc,null),e(bn,nT),e(bn,vc),e(vc,oT),b(n,eu,g),b(n,D,g),T(Xr,D,null),e(D,aT),e(D,kn),e(kn,sT),e(kn,Tc),e(Tc,rT),e(kn,iT),e(kn,wc),e(wc,dT),e(kn,lT),e(D,cT),e(D,Qr),e(Qr,pT),e(Qr,Di),e(Di,uT),e(Qr,hT),e(D,mT),e(D,Hr),e(Hr,fT),e(Hr,Vr),e(Vr,gT),e(Hr,_T),e(D,bT),e(D,Mc),e(Mc,kT),e(D,yT),e(D,_t),e(_t,$c),e($c,Jr),e(Jr,vT),e(_t,TT),e(_t,xc),e(xc,Kr),e(Kr,wT),e(_t,MT),e(_t,zc),e(zc,Zr),e(Zr,$T),e(_t,xT),e(_t,qc),e(qc,Yr),e(Yr,zT),e(D,qT),e(D,nt),T(ei,nt,null),e(nt,FT),e(nt,yn),e(yn,BT),e(yn,Fc),e(Fc,jT),e(yn,ET),e(yn,Bc),e(Bc,CT),e(yn,PT),e(nt,ST),T(Xo,nt,null),e(nt,AT),T(Qo,nt,null),e(D,OT),e(D,Ho),T(ti,Ho,null),e(Ho,IT),T(Vo,Ho,null),e(D,NT),e(D,Jo),T(ni,Jo,null),e(Jo,DT),T(Ko,Jo,null),tu=!0},p(n,[g]){const oi={};g&2&&(oi.$$scope={dirty:g,ctx:n}),qn.$set(oi);const jc={};g&2&&(jc.$$scope={dirty:g,ctx:n}),Bn.$set(jc);const Ec={};g&2&&(Ec.$$scope={dirty:g,ctx:n}),Cn.$set(Ec);const Cc={};g&2&&(Cc.$$scope={dirty:g,ctx:n}),In.$set(Cc);const Zo={};g&2&&(Zo.$$scope={dirty:g,ctx:n}),Rn.$set(Zo);const Pc={};g&2&&(Pc.$$scope={dirty:g,ctx:n}),Hn.$set(Pc);const Sc={};g&2&&(Sc.$$scope={dirty:g,ctx:n}),Vn.$set(Sc);const ai={};g&2&&(ai.$$scope={dirty:g,ctx:n}),Kn.$set(ai);const Ac={};g&2&&(Ac.$$scope={dirty:g,ctx:n}),Zn.$set(Ac);const Oc={};g&2&&(Oc.$$scope={dirty:g,ctx:n}),Yn.$set(Oc);const Ic={};g&2&&(Ic.$$scope={dirty:g,ctx:n}),to.$set(Ic);const si={};g&2&&(si.$$scope={dirty:g,ctx:n}),no.$set(si);const Nc={};g&2&&(Nc.$$scope={dirty:g,ctx:n}),oo.$set(Nc);const Dc={};g&2&&(Dc.$$scope={dirty:g,ctx:n}),so.$set(Dc);const Yo={};g&2&&(Yo.$$scope={dirty:g,ctx:n}),ro.$set(Yo);const Lc={};g&2&&(Lc.$$scope={dirty:g,ctx:n}),io.$set(Lc);const Gc={};g&2&&(Gc.$$scope={dirty:g,ctx:n}),lo.$set(Gc);const ri={};g&2&&(ri.$$scope={dirty:g,ctx:n}),co.$set(ri);const Wc={};g&2&&(Wc.$$scope={dirty:g,ctx:n}),ho.$set(Wc);const Rc={};g&2&&(Rc.$$scope={dirty:g,ctx:n}),fo.$set(Rc);const Uc={};g&2&&(Uc.$$scope={dirty:g,ctx:n}),go.$set(Uc);const Ue={};g&2&&(Ue.$$scope={dirty:g,ctx:n}),_o.$set(Ue);const Xc={};g&2&&(Xc.$$scope={dirty:g,ctx:n}),ko.$set(Xc);const Qc={};g&2&&(Qc.$$scope={dirty:g,ctx:n}),yo.$set(Qc);const Hc={};g&2&&(Hc.$$scope={dirty:g,ctx:n}),vo.$set(Hc);const Vc={};g&2&&(Vc.$$scope={dirty:g,ctx:n}),To.$set(Vc);const vn={};g&2&&(vn.$$scope={dirty:g,ctx:n}),Mo.$set(vn);const Li={};g&2&&(Li.$$scope={dirty:g,ctx:n}),$o.$set(Li);const Jc={};g&2&&(Jc.$$scope={dirty:g,ctx:n}),zo.$set(Jc);const Kc={};g&2&&(Kc.$$scope={dirty:g,ctx:n}),Fo.$set(Kc);const Zc={};g&2&&(Zc.$$scope={dirty:g,ctx:n}),jo.$set(Zc);const Yc={};g&2&&(Yc.$$scope={dirty:g,ctx:n}),Eo.$set(Yc);const ep={};g&2&&(ep.$$scope={dirty:g,ctx:n}),Co.$set(ep);const ii={};g&2&&(ii.$$scope={dirty:g,ctx:n}),So.$set(ii);const tp={};g&2&&(tp.$$scope={dirty:g,ctx:n}),Oo.$set(tp);const Tn={};g&2&&(Tn.$$scope={dirty:g,ctx:n}),No.$set(Tn);const np={};g&2&&(np.$$scope={dirty:g,ctx:n}),Do.$set(np);const op={};g&2&&(op.$$scope={dirty:g,ctx:n}),Go.$set(op);const di={};g&2&&(di.$$scope={dirty:g,ctx:n}),Ro.$set(di);const ap={};g&2&&(ap.$$scope={dirty:g,ctx:n}),Xo.$set(ap);const sp={};g&2&&(sp.$$scope={dirty:g,ctx:n}),Qo.$set(sp);const rp={};g&2&&(rp.$$scope={dirty:g,ctx:n}),Vo.$set(rp);const wn={};g&2&&(wn.$$scope={dirty:g,ctx:n}),Ko.$set(wn)},i(n){tu||(w(o.$$.fragment,n),w(oe.$$.fragment,n),w(De.$$.fragment,n),w(_a.$$.fragment,n),w(ka.$$.fragment,n),w(ya.$$.fragment,n),w(Ta.$$.fragment,n),w(wa.$$.fragment,n),w($a.$$.fragment,n),w(xa.$$.fragment,n),w(za.$$.fragment,n),w(qn.$$.fragment,n),w(Fa.$$.fragment,n),w(Ba.$$.fragment,n),w(Bn.$$.fragment,n),w(Ca.$$.fragment,n),w(Pa.$$.fragment,n),w(Na.$$.fragment,n),w(Da.$$.fragment,n),w(Cn.$$.fragment,n),w(Ra.$$.fragment,n),w(Va.$$.fragment,n),w(Ja.$$.fragment,n),w(Ka.$$.fragment,n),w(Za.$$.fragment,n),w(Ya.$$.fragment,n),w(In.$$.fragment,n),w(os.$$.fragment,n),w(ds.$$.fragment,n),w(ls.$$.fragment,n),w(ps.$$.fragment,n),w(us.$$.fragment,n),w(hs.$$.fragment,n),w(ms.$$.fragment,n),w(Rn.$$.fragment,n),w(_s.$$.fragment,n),w(Ts.$$.fragment,n),w(ws.$$.fragment,n),w(Ms.$$.fragment,n),w($s.$$.fragment,n),w(Fs.$$.fragment,n),w(Hn.$$.fragment,n),w(Vn.$$.fragment,n),w(Bs.$$.fragment,n),w(js.$$.fragment,n),w(Ss.$$.fragment,n),w(Kn.$$.fragment,n),w(Zn.$$.fragment,n),w(Yn.$$.fragment,n),w(As.$$.fragment,n),w(Os.$$.fragment,n),w(Ls.$$.fragment,n),w(to.$$.fragment,n),w(no.$$.fragment,n),w(oo.$$.fragment,n),w(Gs.$$.fragment,n),w(Ws.$$.fragment,n),w(Qs.$$.fragment,n),w(so.$$.fragment,n),w(ro.$$.fragment,n),w(io.$$.fragment,n),w(lo.$$.fragment,n),w(co.$$.fragment,n),w(Hs.$$.fragment,n),w(Vs.$$.fragment,n),w(Js.$$.fragment,n),w(ho.$$.fragment,n),w(Ks.$$.fragment,n),w(Zs.$$.fragment,n),w(fo.$$.fragment,n),w(nr.$$.fragment,n),w(go.$$.fragment,n),w(_o.$$.fragment,n),w(or.$$.fragment,n),w(ar.$$.fragment,n),w(ko.$$.fragment,n),w(dr.$$.fragment,n),w(yo.$$.fragment,n),w(vo.$$.fragment,n),w(To.$$.fragment,n),w(lr.$$.fragment,n),w(cr.$$.fragment,n),w(br.$$.fragment,n),w(Mo.$$.fragment,n),w($o.$$.fragment,n),w(kr.$$.fragment,n),w(zo.$$.fragment,n),w(yr.$$.fragment,n),w(Fo.$$.fragment,n),w(vr.$$.fragment,n),w(Tr.$$.fragment,n),w(Br.$$.fragment,n),w(jo.$$.fragment,n),w(Eo.$$.fragment,n),w(Co.$$.fragment,n),w(jr.$$.fragment,n),w(So.$$.fragment,n),w(Er.$$.fragment,n),w(Oo.$$.fragment,n),w(Cr.$$.fragment,n),w(Pr.$$.fragment,n),w(Gr.$$.fragment,n),w(No.$$.fragment,n),w(Do.$$.fragment,n),w(Wr.$$.fragment,n),w(Go.$$.fragment,n),w(Rr.$$.fragment,n),w(Ro.$$.fragment,n),w(Ur.$$.fragment,n),w(Xr.$$.fragment,n),w(ei.$$.fragment,n),w(Xo.$$.fragment,n),w(Qo.$$.fragment,n),w(ti.$$.fragment,n),w(Vo.$$.fragment,n),w(ni.$$.fragment,n),w(Ko.$$.fragment,n),tu=!0)},o(n){M(o.$$.fragment,n),M(oe.$$.fragment,n),M(De.$$.fragment,n),M(_a.$$.fragment,n),M(ka.$$.fragment,n),M(ya.$$.fragment,n),M(Ta.$$.fragment,n),M(wa.$$.fragment,n),M($a.$$.fragment,n),M(xa.$$.fragment,n),M(za.$$.fragment,n),M(qn.$$.fragment,n),M(Fa.$$.fragment,n),M(Ba.$$.fragment,n),M(Bn.$$.fragment,n),M(Ca.$$.fragment,n),M(Pa.$$.fragment,n),M(Na.$$.fragment,n),M(Da.$$.fragment,n),M(Cn.$$.fragment,n),M(Ra.$$.fragment,n),M(Va.$$.fragment,n),M(Ja.$$.fragment,n),M(Ka.$$.fragment,n),M(Za.$$.fragment,n),M(Ya.$$.fragment,n),M(In.$$.fragment,n),M(os.$$.fragment,n),M(ds.$$.fragment,n),M(ls.$$.fragment,n),M(ps.$$.fragment,n),M(us.$$.fragment,n),M(hs.$$.fragment,n),M(ms.$$.fragment,n),M(Rn.$$.fragment,n),M(_s.$$.fragment,n),M(Ts.$$.fragment,n),M(ws.$$.fragment,n),M(Ms.$$.fragment,n),M($s.$$.fragment,n),M(Fs.$$.fragment,n),M(Hn.$$.fragment,n),M(Vn.$$.fragment,n),M(Bs.$$.fragment,n),M(js.$$.fragment,n),M(Ss.$$.fragment,n),M(Kn.$$.fragment,n),M(Zn.$$.fragment,n),M(Yn.$$.fragment,n),M(As.$$.fragment,n),M(Os.$$.fragment,n),M(Ls.$$.fragment,n),M(to.$$.fragment,n),M(no.$$.fragment,n),M(oo.$$.fragment,n),M(Gs.$$.fragment,n),M(Ws.$$.fragment,n),M(Qs.$$.fragment,n),M(so.$$.fragment,n),M(ro.$$.fragment,n),M(io.$$.fragment,n),M(lo.$$.fragment,n),M(co.$$.fragment,n),M(Hs.$$.fragment,n),M(Vs.$$.fragment,n),M(Js.$$.fragment,n),M(ho.$$.fragment,n),M(Ks.$$.fragment,n),M(Zs.$$.fragment,n),M(fo.$$.fragment,n),M(nr.$$.fragment,n),M(go.$$.fragment,n),M(_o.$$.fragment,n),M(or.$$.fragment,n),M(ar.$$.fragment,n),M(ko.$$.fragment,n),M(dr.$$.fragment,n),M(yo.$$.fragment,n),M(vo.$$.fragment,n),M(To.$$.fragment,n),M(lr.$$.fragment,n),M(cr.$$.fragment,n),M(br.$$.fragment,n),M(Mo.$$.fragment,n),M($o.$$.fragment,n),M(kr.$$.fragment,n),M(zo.$$.fragment,n),M(yr.$$.fragment,n),M(Fo.$$.fragment,n),M(vr.$$.fragment,n),M(Tr.$$.fragment,n),M(Br.$$.fragment,n),M(jo.$$.fragment,n),M(Eo.$$.fragment,n),M(Co.$$.fragment,n),M(jr.$$.fragment,n),M(So.$$.fragment,n),M(Er.$$.fragment,n),M(Oo.$$.fragment,n),M(Cr.$$.fragment,n),M(Pr.$$.fragment,n),M(Gr.$$.fragment,n),M(No.$$.fragment,n),M(Do.$$.fragment,n),M(Wr.$$.fragment,n),M(Go.$$.fragment,n),M(Rr.$$.fragment,n),M(Ro.$$.fragment,n),M(Ur.$$.fragment,n),M(Xr.$$.fragment,n),M(ei.$$.fragment,n),M(Xo.$$.fragment,n),M(Qo.$$.fragment,n),M(ti.$$.fragment,n),M(Vo.$$.fragment,n),M(ni.$$.fragment,n),M(Ko.$$.fragment,n),tu=!1},d(n){t(l),n&&t(k),n&&t(m),$(o),n&&t(ze),n&&t(E),n&&t(Xe),n&&t(Q),$(oe),n&&t(le),n&&t(ce),n&&t(G),n&&t(qe),n&&t(Qe),n&&t(ae),n&&t(He),n&&t(z),$(De),n&&t(bt),n&&t(X),n&&t(ip),n&&t(kt),n&&t(dp),n&&t(ci),n&&t(lp),$(_a,n),n&&t(cp),n&&t(pi),n&&t(pp),$(ka,n),n&&t(up),n&&t(Nt),$(ya),n&&t(hp),n&&t(yt),n&&t(mp),n&&t(ui),n&&t(fp),n&&t(hi),n&&t(gp),n&&t(Dt),$(Ta),n&&t(_p),n&&t(Ve),n&&t(bp),n&&t(xn),n&&t(kp),n&&t(fi),n&&t(yp),$(wa,n),n&&t(vp),n&&t(gi),n&&t(Tp),$($a,n),n&&t(wp),n&&t(Lt),$(xa),n&&t(Mp),n&&t(Ge),$(za),$(qn),n&&t($p),n&&t(Rt),$(Fa),n&&t(xp),n&&t(J),$(Ba),$(Bn),$(Ca),$(Pa),n&&t(zp),n&&t(Ut),$(Na),n&&t(qp),n&&t(O),$(Da),$(Cn),$(Ra),$(Va),$(Ja),$(Ka),n&&t(Fp),n&&t(Qt),$(Za),n&&t(Bp),n&&t(I),$(Ya),$(In),$(os),$(ds),$(ls),$(ps),$(us),n&&t(jp),n&&t(Ht),$(hs),n&&t(Ep),n&&t(K),$(ms),$(Rn),$(_s),$(Ts),$(ws),n&&t(Cp),n&&t(Jt),$(Ms),n&&t(Pp),n&&t(We),$($s),$(Fs),$(Hn),$(Vn),n&&t(Sp),n&&t(Zt),$(Bs),n&&t(Ap),n&&t(Re),$(js),$(Ss),$(Kn),$(Zn),$(Yn),n&&t(Op),n&&t(en),$(As),n&&t(Ip),n&&t(we),$(Os),$(Ls),$(to),$(no),$(oo),n&&t(Np),n&&t(on),$(Gs),n&&t(Dp),n&&t(Me),$(Ws),$(Qs),$(so),$(ro),$(io),$(lo),$(co),n&&t(Lp),n&&t(sn),$(Hs),n&&t(Gp),n&&t(rn),$(Vs),$(Js),$(ho),n&&t(Wp),n&&t(dn),$(Ks),n&&t(Rp),n&&t($e),$(Zs),$(fo),$(nr),$(go),$(_o),n&&t(Up),n&&t(cn),$(or),n&&t(Xp),n&&t(xe),$(ar),$(ko),$(dr),$(yo),$(vo),$(To),n&&t(Qp),n&&t(un),$(lr),n&&t(Hp),n&&t(W),$(cr),$(br),$(Mo),$($o),$(kr),$(zo),$(yr),$(Fo),n&&t(Vp),n&&t(mn),$(vr),n&&t(Jp),n&&t(R),$(Tr),$(Br),$(jo),$(Eo),$(Co),$(jr),$(So),$(Er),$(Oo),n&&t(Kp),n&&t(gn),$(Cr),n&&t(Zp),n&&t(N),$(Pr),$(Gr),$(No),$(Do),$(Wr),$(Go),$(Rr),$(Ro),n&&t(Yp),n&&t(bn),$(Ur),n&&t(eu),n&&t(D),$(Xr),$(ei),$(Xo),$(Qo),$(ti),$(Vo),$(ni),$(Ko)}}}const $1={local:"mbart-and-mbart50",sections:[{local:"overview-of-mbart",sections:[{local:"training-of-mbart",title:"Training of MBart"}],title:"Overview of MBart"},{local:"overview-of-mbart50",sections:[{local:"training-of-mbart50",title:"Training of MBart-50"}],title:"Overview of MBart-50"},{local:"transformers.MBartConfig",title:"MBartConfig"},{local:"transformers.MBartTokenizer",title:"MBartTokenizer"},{local:"transformers.MBartTokenizerFast",title:"MBartTokenizerFast"},{local:"transformers.MBart50Tokenizer",title:"MBart50Tokenizer"},{local:"transformers.MBart50TokenizerFast",title:"MBart50TokenizerFast"},{local:"transformers.MBartModel",title:"MBartModel"},{local:"transformers.MBartForConditionalGeneration",title:"MBartForConditionalGeneration"},{local:"transformers.MBartForQuestionAnswering",title:"MBartForQuestionAnswering"},{local:"transformers.MBartForSequenceClassification",title:"MBartForSequenceClassification"},{local:"transformers.MBartForCausalLM",title:"MBartForCausalLM"},{local:"transformers.TFMBartModel",title:"TFMBartModel"},{local:"transformers.TFMBartForConditionalGeneration",title:"TFMBartForConditionalGeneration"},{local:"transformers.FlaxMBartModel",title:"FlaxMBartModel"},{local:"transformers.FlaxMBartForConditionalGeneration",title:"FlaxMBartForConditionalGeneration"},{local:"transformers.FlaxMBartForSequenceClassification",title:"FlaxMBartForSequenceClassification"},{local:"transformers.FlaxMBartForQuestionAnswering",title:"FlaxMBartForQuestionAnswering"}],title:"MBart and MBart-50"};function x1(x){return Px(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class C1 extends Bx{constructor(l){super();jx(this,l,x1,M1,Ex,{})}}export{C1 as default,$1 as metadata};
