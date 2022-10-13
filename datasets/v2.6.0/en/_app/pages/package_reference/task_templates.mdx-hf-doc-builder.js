import{S as Lt,i as St,s as Ct,e as r,k as m,w as u,t as J,M as Tt,c as n,d as a,m as c,a as l,x as f,h as O,b as i,G as o,g as s,y as p,L as Vt,q as g,o as v,B as $,v as qt}from"../../chunks/vendor-hf-doc-builder.js";import{D as x}from"../../chunks/Docstring-hf-doc-builder.js";import{I as Pt}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Rt(vt){let _,F,b,y,U,w,ot,j,lt,K,d,mt,N,ct,dt,Q,ut,ft,W,D,E,X,A,I,Y,h,L,pt,B,S,Z,C,T,tt,V,q,at,P,R,et,k,M,gt,G,z,st;return w=new Pt({}),E=new x({props:{name:"class datasets.AutomaticSpeechRecognition",anchor:"datasets.AutomaticSpeechRecognition",parameters:[{name:"task",val:": str = 'automatic-speech-recognition'"},{name:"audio_column",val:": str = 'audio'"},{name:"transcription_column",val:": str = 'transcription'"}],source:"https://github.com/huggingface/datasets/blob/2.6.0/src/datasets/tasks/automatic_speech_recognition.py#L10"}}),I=new x({props:{name:"class datasets.AudioClassification",anchor:"datasets.AudioClassification",parameters:[{name:"task",val:": str = 'audio-classification'"},{name:"audio_column",val:": str = 'audio'"},{name:"label_column",val:": str = 'labels'"}],source:"https://github.com/huggingface/datasets/blob/2.6.0/src/datasets/tasks/audio_classificiation.py#L10"}}),L=new x({props:{name:"class datasets.ImageClassification",anchor:"datasets.ImageClassification",parameters:[{name:"task",val:": str = 'image-classification'"},{name:"image_column",val:": str = 'image'"},{name:"label_column",val:": str = 'labels'"}],source:"https://github.com/huggingface/datasets/blob/2.6.0/src/datasets/tasks/image_classification.py#L10"}}),S=new x({props:{name:"align_with_features",anchor:"datasets.ImageClassification.align_with_features",parameters:[{name:"features",val:""}],source:"https://github.com/huggingface/datasets/blob/2.6.0/src/datasets/tasks/image_classification.py#L17"}}),T=new x({props:{name:"class datasets.LanguageModeling",anchor:"datasets.LanguageModeling",parameters:[{name:"task",val:": str = 'language-modeling'"},{name:"text_column",val:": str = 'text'"}],source:"https://github.com/huggingface/datasets/blob/2.6.0/src/datasets/tasks/language_modeling.py#L9"}}),q=new x({props:{name:"class datasets.QuestionAnsweringExtractive",anchor:"datasets.QuestionAnsweringExtractive",parameters:[{name:"task",val:": str = 'question-answering-extractive'"},{name:"question_column",val:": str = 'question'"},{name:"context_column",val:": str = 'context'"},{name:"answers_column",val:": str = 'answers'"}],source:"https://github.com/huggingface/datasets/blob/2.6.0/src/datasets/tasks/question_answering.py#L9"}}),R=new x({props:{name:"class datasets.Summarization",anchor:"datasets.Summarization",parameters:[{name:"task",val:": str = 'summarization'"},{name:"text_column",val:": str = 'text'"},{name:"summary_column",val:": str = 'summary'"}],source:"https://github.com/huggingface/datasets/blob/2.6.0/src/datasets/tasks/summarization.py#L9"}}),M=new x({props:{name:"class datasets.TextClassification",anchor:"datasets.TextClassification",parameters:[{name:"task",val:": str = 'text-classification'"},{name:"text_column",val:": str = 'text'"},{name:"label_column",val:": str = 'labels'"}],source:"https://github.com/huggingface/datasets/blob/2.6.0/src/datasets/tasks/text_classification.py#L10"}}),z=new x({props:{name:"align_with_features",anchor:"datasets.TextClassification.align_with_features",parameters:[{name:"features",val:""}],source:"https://github.com/huggingface/datasets/blob/2.6.0/src/datasets/tasks/text_classification.py#L18"}}),{c(){_=r("meta"),F=m(),b=r("h1"),y=r("a"),U=r("span"),u(w.$$.fragment),ot=m(),j=r("span"),lt=J("Task templates"),K=m(),d=r("p"),mt=J("The tasks supported by "),N=r("a"),ct=J("Dataset.prepare_for_task()"),dt=J(" and "),Q=r("a"),ut=J("DatasetDict.prepare_for_task()"),ft=J("."),W=m(),D=r("div"),u(E.$$.fragment),X=m(),A=r("div"),u(I.$$.fragment),Y=m(),h=r("div"),u(L.$$.fragment),pt=m(),B=r("div"),u(S.$$.fragment),Z=m(),C=r("div"),u(T.$$.fragment),tt=m(),V=r("div"),u(q.$$.fragment),at=m(),P=r("div"),u(R.$$.fragment),et=m(),k=r("div"),u(M.$$.fragment),gt=m(),G=r("div"),u(z.$$.fragment),this.h()},l(t){const e=Tt('[data-svelte="svelte-1phssyn"]',document.head);_=n(e,"META",{name:!0,content:!0}),e.forEach(a),F=c(t),b=n(t,"H1",{class:!0});var rt=l(b);y=n(rt,"A",{id:!0,class:!0,href:!0});var $t=l(y);U=n($t,"SPAN",{});var _t=l(U);f(w.$$.fragment,_t),_t.forEach(a),$t.forEach(a),ot=c(rt),j=n(rt,"SPAN",{});var bt=l(j);lt=O(bt,"Task templates"),bt.forEach(a),rt.forEach(a),K=c(t),d=n(t,"P",{});var H=l(d);mt=O(H,"The tasks supported by "),N=n(H,"A",{href:!0});var ht=l(N);ct=O(ht,"Dataset.prepare_for_task()"),ht.forEach(a),dt=O(H," and "),Q=n(H,"A",{href:!0});var kt=l(Q);ut=O(kt,"DatasetDict.prepare_for_task()"),kt.forEach(a),ft=O(H,"."),H.forEach(a),W=c(t),D=n(t,"DIV",{class:!0});var xt=l(D);f(E.$$.fragment,xt),xt.forEach(a),X=c(t),A=n(t,"DIV",{class:!0});var yt=l(A);f(I.$$.fragment,yt),yt.forEach(a),Y=c(t),h=n(t,"DIV",{class:!0});var nt=l(h);f(L.$$.fragment,nt),pt=c(nt),B=n(nt,"DIV",{class:!0});var wt=l(B);f(S.$$.fragment,wt),wt.forEach(a),nt.forEach(a),Z=c(t),C=n(t,"DIV",{class:!0});var Dt=l(C);f(T.$$.fragment,Dt),Dt.forEach(a),tt=c(t),V=n(t,"DIV",{class:!0});var Et=l(V);f(q.$$.fragment,Et),Et.forEach(a),at=c(t),P=n(t,"DIV",{class:!0});var At=l(P);f(R.$$.fragment,At),At.forEach(a),et=c(t),k=n(t,"DIV",{class:!0});var it=l(k);f(M.$$.fragment,it),gt=c(it),G=n(it,"DIV",{class:!0});var It=l(G);f(z.$$.fragment,It),It.forEach(a),it.forEach(a),this.h()},h(){i(_,"name","hf:doc:metadata"),i(_,"content",JSON.stringify(Mt)),i(y,"id","datasets.AutomaticSpeechRecognition"),i(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(y,"href","#datasets.AutomaticSpeechRecognition"),i(b,"class","relative group"),i(N,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.Dataset.prepare_for_task"),i(Q,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.DatasetDict.prepare_for_task"),i(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,e){o(document.head,_),s(t,F,e),s(t,b,e),o(b,y),o(y,U),p(w,U,null),o(b,ot),o(b,j),o(j,lt),s(t,K,e),s(t,d,e),o(d,mt),o(d,N),o(N,ct),o(d,dt),o(d,Q),o(Q,ut),o(d,ft),s(t,W,e),s(t,D,e),p(E,D,null),s(t,X,e),s(t,A,e),p(I,A,null),s(t,Y,e),s(t,h,e),p(L,h,null),o(h,pt),o(h,B),p(S,B,null),s(t,Z,e),s(t,C,e),p(T,C,null),s(t,tt,e),s(t,V,e),p(q,V,null),s(t,at,e),s(t,P,e),p(R,P,null),s(t,et,e),s(t,k,e),p(M,k,null),o(k,gt),o(k,G),p(z,G,null),st=!0},p:Vt,i(t){st||(g(w.$$.fragment,t),g(E.$$.fragment,t),g(I.$$.fragment,t),g(L.$$.fragment,t),g(S.$$.fragment,t),g(T.$$.fragment,t),g(q.$$.fragment,t),g(R.$$.fragment,t),g(M.$$.fragment,t),g(z.$$.fragment,t),st=!0)},o(t){v(w.$$.fragment,t),v(E.$$.fragment,t),v(I.$$.fragment,t),v(L.$$.fragment,t),v(S.$$.fragment,t),v(T.$$.fragment,t),v(q.$$.fragment,t),v(R.$$.fragment,t),v(M.$$.fragment,t),v(z.$$.fragment,t),st=!1},d(t){a(_),t&&a(F),t&&a(b),$(w),t&&a(K),t&&a(d),t&&a(W),t&&a(D),$(E),t&&a(X),t&&a(A),$(I),t&&a(Y),t&&a(h),$(L),$(S),t&&a(Z),t&&a(C),$(T),t&&a(tt),t&&a(V),$(q),t&&a(at),t&&a(P),$(R),t&&a(et),t&&a(k),$(M),$(z)}}}const Mt={local:"datasets.AutomaticSpeechRecognition",title:"Task templates"};function zt(vt){return qt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gt extends Lt{constructor(_){super();St(this,_,zt,Rt,Ct,{})}}export{Gt as default,Mt as metadata};
