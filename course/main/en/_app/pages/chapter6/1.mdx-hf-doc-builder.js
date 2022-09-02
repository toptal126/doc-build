import{S as Ce,i as Ne,s as Se,e as o,k as u,w as xe,t as i,M as qe,c as r,d as a,m as p,a as s,x as Te,h as l,b as c,G as t,g as h,y as Ie,L as He,q as Pe,o as Le,B as Ae,v as We}from"../../chunks/vendor-hf-doc-builder.js";import{I as Fe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as Je}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";function Me(pe){let m,q,w,k,P,_,j,L,D,H,g,W,v,K,$,Q,V,F,d,X,z,Y,Z,E,ee,te,J,x,ae,M,f,A,oe,re,C,ne,ie,N,se,le,S,he,B,y,fe,T,ce,ue,U;return _=new Fe({}),g=new Je({props:{chapter:6,classNames:"absolute z-10 right-0 top-0"}}),{c(){m=o("meta"),q=u(),w=o("h1"),k=o("a"),P=o("span"),xe(_.$$.fragment),j=u(),L=o("span"),D=i("Introduction"),H=u(),xe(g.$$.fragment),W=u(),v=o("p"),K=i("In "),$=o("a"),Q=i("Chapter 3"),V=i(", we looked at how to fine-tune a model on a given task. When we do that, we use the same tokenizer that the model was pretrained with \u2014 but what do we do when we want to train a model from scratch? In these cases, using a tokenizer that was pretrained on a corpus from another domain or language is typically suboptimal. For example, a tokenizer that\u2019s trained on an English corpus will perform poorly on a corpus of Japanese texts because the use of spaces and punctuation is very different in the two languages."),F=u(),d=o("p"),X=i("In this chapter, you will learn how to train a brand new tokenizer on a corpus of texts, so it can then be used to pretrain a language model. This will all be done with the help of the "),z=o("a"),Y=i("\u{1F917} Tokenizers"),Z=i(" library, which provides the \u201Cfast\u201D tokenizers in the "),E=o("a"),ee=i("\u{1F917} Transformers"),te=i(" library. We\u2019ll take a close look at the features that this library provides, and explore how the fast tokenizers differ from the \u201Cslow\u201D versions."),J=u(),x=o("p"),ae=i("Topics we will cover include:"),M=u(),f=o("ul"),A=o("li"),oe=i("How to train a new tokenizer similar to the one used by a given checkpoint on a new corpus of texts"),re=u(),C=o("li"),ne=i("The special features of fast tokenizers"),ie=u(),N=o("li"),se=i("The differences between the three main subword tokenization algorithms used in NLP today"),le=u(),S=o("li"),he=i("How to build a tokenizer from scratch with the \u{1F917} Tokenizers library and train it on some data"),B=u(),y=o("p"),fe=i("The techniques introduced in this chapter will prepare you for the section in "),T=o("a"),ce=i("Chapter 7"),ue=i(" where we look at creating a language model for Python source code. Let\u2019s start by looking at what it means to \u201Ctrain\u201D a tokenizer in the first place."),this.h()},l(e){const n=qe('[data-svelte="svelte-1phssyn"]',document.head);m=r(n,"META",{name:!0,content:!0}),n.forEach(a),q=p(e),w=r(e,"H1",{class:!0});var G=s(w);k=r(G,"A",{id:!0,class:!0,href:!0});var de=s(k);P=r(de,"SPAN",{});var me=s(P);Te(_.$$.fragment,me),me.forEach(a),de.forEach(a),j=p(G),L=r(G,"SPAN",{});var we=s(L);D=l(we,"Introduction"),we.forEach(a),G.forEach(a),H=p(e),Te(g.$$.fragment,e),W=p(e),v=r(e,"P",{});var O=s(v);K=l(O,"In "),$=r(O,"A",{href:!0});var ke=s($);Q=l(ke,"Chapter 3"),ke.forEach(a),V=l(O,", we looked at how to fine-tune a model on a given task. When we do that, we use the same tokenizer that the model was pretrained with \u2014 but what do we do when we want to train a model from scratch? In these cases, using a tokenizer that was pretrained on a corpus from another domain or language is typically suboptimal. For example, a tokenizer that\u2019s trained on an English corpus will perform poorly on a corpus of Japanese texts because the use of spaces and punctuation is very different in the two languages."),O.forEach(a),F=p(e),d=r(e,"P",{});var I=s(d);X=l(I,"In this chapter, you will learn how to train a brand new tokenizer on a corpus of texts, so it can then be used to pretrain a language model. This will all be done with the help of the "),z=r(I,"A",{href:!0,rel:!0});var ve=s(z);Y=l(ve,"\u{1F917} Tokenizers"),ve.forEach(a),Z=l(I," library, which provides the \u201Cfast\u201D tokenizers in the "),E=r(I,"A",{href:!0,rel:!0});var ye=s(E);ee=l(ye,"\u{1F917} Transformers"),ye.forEach(a),te=l(I," library. We\u2019ll take a close look at the features that this library provides, and explore how the fast tokenizers differ from the \u201Cslow\u201D versions."),I.forEach(a),J=p(e),x=r(e,"P",{});var be=s(x);ae=l(be,"Topics we will cover include:"),be.forEach(a),M=p(e),f=r(e,"UL",{});var b=s(f);A=r(b,"LI",{});var _e=s(A);oe=l(_e,"How to train a new tokenizer similar to the one used by a given checkpoint on a new corpus of texts"),_e.forEach(a),re=p(b),C=r(b,"LI",{});var ge=s(C);ne=l(ge,"The special features of fast tokenizers"),ge.forEach(a),ie=p(b),N=r(b,"LI",{});var ze=s(N);se=l(ze,"The differences between the three main subword tokenization algorithms used in NLP today"),ze.forEach(a),le=p(b),S=r(b,"LI",{});var Ee=s(S);he=l(Ee,"How to build a tokenizer from scratch with the \u{1F917} Tokenizers library and train it on some data"),Ee.forEach(a),b.forEach(a),B=p(e),y=r(e,"P",{});var R=s(y);fe=l(R,"The techniques introduced in this chapter will prepare you for the section in "),T=r(R,"A",{href:!0});var $e=s(T);ce=l($e,"Chapter 7"),$e.forEach(a),ue=l(R," where we look at creating a language model for Python source code. Let\u2019s start by looking at what it means to \u201Ctrain\u201D a tokenizer in the first place."),R.forEach(a),this.h()},h(){c(m,"name","hf:doc:metadata"),c(m,"content",JSON.stringify(Be)),c(k,"id","introduction"),c(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(k,"href","#introduction"),c(w,"class","relative group"),c($,"href","/course/chapter3"),c(z,"href","https://github.com/huggingface/tokenizers"),c(z,"rel","nofollow"),c(E,"href","https://github.com/huggingface/transformers"),c(E,"rel","nofollow"),c(T,"href","/course/chapter7/6")},m(e,n){t(document.head,m),h(e,q,n),h(e,w,n),t(w,k),t(k,P),Ie(_,P,null),t(w,j),t(w,L),t(L,D),h(e,H,n),Ie(g,e,n),h(e,W,n),h(e,v,n),t(v,K),t(v,$),t($,Q),t(v,V),h(e,F,n),h(e,d,n),t(d,X),t(d,z),t(z,Y),t(d,Z),t(d,E),t(E,ee),t(d,te),h(e,J,n),h(e,x,n),t(x,ae),h(e,M,n),h(e,f,n),t(f,A),t(A,oe),t(f,re),t(f,C),t(C,ne),t(f,ie),t(f,N),t(N,se),t(f,le),t(f,S),t(S,he),h(e,B,n),h(e,y,n),t(y,fe),t(y,T),t(T,ce),t(y,ue),U=!0},p:He,i(e){U||(Pe(_.$$.fragment,e),Pe(g.$$.fragment,e),U=!0)},o(e){Le(_.$$.fragment,e),Le(g.$$.fragment,e),U=!1},d(e){a(m),e&&a(q),e&&a(w),Ae(_),e&&a(H),Ae(g,e),e&&a(W),e&&a(v),e&&a(F),e&&a(d),e&&a(J),e&&a(x),e&&a(M),e&&a(f),e&&a(B),e&&a(y)}}}const Be={local:"introduction",title:"Introduction"};function Ue(pe){return We(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class je extends Ce{constructor(m){super();Ne(this,m,Ue,Me,Se,{})}}export{je as default,Be as metadata};
