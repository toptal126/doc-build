import{S as Ho,i as To,s as qo,e as a,k as h,w as c,t as $,M as Fo,c as r,d as t,m as u,a as n,x as p,h as v,b as s,G as o,g as l,y as f,L as Io,q as d,o as m,B as g,v as Wo}from"../../chunks/vendor-hf-doc-builder.js";import{I as w}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{Q as y}from"../../chunks/Question-hf-doc-builder.js";function Bo(Rt){let x,Le,b,F,me,J,wt,ge,yt,Ye,fe,xt,Ce,k,I,$e,U,bt,ve,kt,Oe,Q,ze,_,W,we,R,_t,ye,Et,De,j,Me,E,B,xe,K,At,be,St,Je,V,Ue,A,L,ke,X,Pt,_e,Gt,Qe,Z,Re,S,Y,Ee,ee,Nt,Ae,Ht,je,te,Ke,P,C,Se,oe,Tt,Pe,qt,Ve,ae,Xe,G,O,Ge,re,Ft,Ne,It,Ze,ne,et,N,z,He,ie,Wt,Te,Bt,tt,se,ot,H,D,qe,le,Lt,he,Yt,Fe,Ct,Ot,at,ue,rt,T,M,Ie,ce,zt,q,Dt,We,Mt,Jt,Be,Ut,Qt,nt,pe,it;return J=new w({}),U=new w({}),Q=new y({props:{choices:[{text:"Create a demo for your machine learning model",explain:"With a few lines of python code you can generate a demo for your ML model using our library of pre-built components.",correct:!0},{text:"Share your machine learning model with others",explain:"Using the <code>share=True</code> parameter in the launch method, you can generate a share link to send to anyone.",correct:!0},{text:"Debug your model",explain:"One advantage of a gradio demo is being able to test your model with real data which you can change and observe the model's predictions change in real time, helping you debug your model.",correct:!0},{text:"Train your model",explain:"Gradio is designed to be used for model inference, AFTER your model is trained."}]}}),R=new w({}),j=new y({props:{choices:[{text:"True",explain:"Gradio works with PyTorch models, but also works for any type of machine learning model!"},{text:"False",explain:"Gradio is model agnostic, meaning you can create a demo for any type of machine learning model.",correct:!0}]}}),K=new w({}),V=new y({props:{choices:[{text:"Standard python IDEs",explain:"Gradio works great with your favorite IDE.",correct:!0},{text:"Google Colab notebooks",explain:"You can create and launch a demo within your Google colab notebook.",correct:!0},{text:"Jupyter notebooks",explain:"Good choice - You can create and launch a demo within your Jupyter notebook.",correct:!0}]}}),X=new w({}),Z=new y({props:{choices:[{text:"True",explain:"Gradio works with pretty much any data type, not just NLP."},{text:"False",explain:"Gradio supplies developers with a library of pre-built components for pretty much all data types.",correct:!0}]}}),ee=new w({}),te=new y({props:{choices:[{text:"Multiple inputs and outputs",explain:"Multiple inputs and outputs is possible with gradio. All you need to do is pass in a list of inputs and outputs to their corresponding parameters",correct:!0},{text:"State for data persistance",explain:"Gradio is capable of adding state to your interface.",correct:!0},{text:"Username and passwords authentication",explain:"Pass in a list of username/password tuples to the launch method to add authentication.",correct:!0},{text:"Automatic analytics for who uses your gradio demo",explain:"Try again - Gradio does not supply developers analytics on who uses their demos."},{text:"Loading a model from Hugging Face's model hub or Hugging Face Spaces",explain:"Absolutely - load any Hugging Face model using the <code>gr.Interface.load()</code> method",correct:!0}]}}),oe=new w({}),ae=new y({props:{choices:[{text:"gr.Interface.load('huggingface/{user}/{model_name}')",explain:"This is a valid method of loading a Hugging Face model from the Hub",correct:!0},{text:"gr.Interface.load('model/{user}/{model_name}')",explain:"This is a valid method of loading a Hugging Face model from the Hub",correct:!0},{text:"gr.Interface.load('demos/{user}/{model_name}')",explain:"Try again -- you cannot load a model by using the 'demos' prefix."},{text:"gr.Interface.load('spaces/{user}/{model_name}')",explain:"This is a valid method of loading a Hugging Face model from Spaces",correct:!0}]}}),re=new w({}),ne=new y({props:{choices:[{text:"Pass in an extra parameter into your prediction function, which represents the state of the interface.",explain:"An extra parameter storing history or state of your interface is necessary.",correct:!0},{text:"At the end of the prediction function, return the updated value of the state as an extra return value.",explain:"This history or state value needs to be returned by your function.",correct:!0},{text:"Add the state input and state output components when creating your Interface",explain:"Gradio provides a state input and output component to persist data.",correct:!0}]}}),ie=new w({}),se=new y({props:{choices:[{text:"Textbox.",explain:"Yes, you can create textboxes with the Textbox component.",correct:!0},{text:"Graph.",explain:"There is currently no Graph component."},{text:"Image.",explain:"Yes, you can create an image upload widget with the Image component.",correct:!0},{text:"Audio.",explain:"Yes, you can create an audio upload widget with the Audio component.",correct:!0}]}}),le=new w({}),ue=new y({props:{choices:[{text:"Combine multiple demos into one web app",explain:"You can use the `with gradio.Tabs():` to add tabs for multiple demos",correct:!0},{text:"Assign event triggers such as clicked/changed/etc to `Blocks` components",explain:"When you assign an event, you pass in three parameters: fn: the function that should be called, inputs: the (list) of input component(s), and outputs: the (list) of output components that should be called.",correct:!0},{text:"Automatically determine which `Blocks` component should be interactive vs. static",explain:"Based on the event triggers you define, `Blocks` automatically figures out whether a component should accept user input or not.",correct:!0},{text:"Create multi-step demos; meaning allowing you to reuse the output of one component as the input to the next",explain:"You can use a component for the input of one event trigger but the output of another.",correct:!0}]}}),ce=new w({}),pe=new y({props:{choices:[{text:"True",explain:"Just like `Interface`, all of the sharing and hosting capabilities are the same for `Blocks` demos!",correct:!0},{text:"False",explain:"Just like `Interface`, all of the sharing and hosting capabilities are the same for `Blocks` demos!",correct:!1}]}}),{c(){x=a("meta"),Le=h(),b=a("h1"),F=a("a"),me=a("span"),c(J.$$.fragment),wt=h(),ge=a("span"),yt=$("End-of-chapter quiz"),Ye=h(),fe=a("p"),xt=$("Let\u2019s test what you learned in this chapter!"),Ce=h(),k=a("h3"),I=a("a"),$e=a("span"),c(U.$$.fragment),bt=h(),ve=a("span"),kt=$("1. What can you use Gradio to do?"),Oe=h(),c(Q.$$.fragment),ze=h(),_=a("h3"),W=a("a"),we=a("span"),c(R.$$.fragment),_t=h(),ye=a("span"),Et=$("2. Gradio ONLY works with PyTorch models"),De=h(),c(j.$$.fragment),Me=h(),E=a("h3"),B=a("a"),xe=a("span"),c(K.$$.fragment),At=h(),be=a("span"),St=$("3. Where can you launch a Gradio demo from?"),Je=h(),c(V.$$.fragment),Ue=h(),A=a("h3"),L=a("a"),ke=a("span"),c(X.$$.fragment),Pt=h(),_e=a("span"),Gt=$("4. Gradio is designed primarily for NLP models"),Qe=h(),c(Z.$$.fragment),Re=h(),S=a("h3"),Y=a("a"),Ee=a("span"),c(ee.$$.fragment),Nt=h(),Ae=a("span"),Ht=$("5. Which of the following features are supported by Gradio?"),je=h(),c(te.$$.fragment),Ke=h(),P=a("h3"),C=a("a"),Se=a("span"),c(oe.$$.fragment),Tt=h(),Pe=a("span"),qt=$("6. Which of the following are valid ways of loading a Hugging Face model from Hub or Spaces?"),Ve=h(),c(ae.$$.fragment),Xe=h(),G=a("h3"),O=a("a"),Ge=a("span"),c(re.$$.fragment),Ft=h(),Ne=a("span"),It=$("7. Select all the steps necessary for adding state to your Gradio interface"),Ze=h(),c(ne.$$.fragment),et=h(),N=a("h3"),z=a("a"),He=a("span"),c(ie.$$.fragment),Wt=h(),Te=a("span"),Bt=$("8. Which of the following are components included in the Gradio library?"),tt=h(),c(se.$$.fragment),ot=h(),H=a("h3"),D=a("a"),qe=a("span"),c(le.$$.fragment),Lt=h(),he=a("span"),Yt=$("9. What does Gradio "),Fe=a("code"),Ct=$("Blocks"),Ot=$(" allow you to do?"),at=h(),c(ue.$$.fragment),rt=h(),T=a("h3"),M=a("a"),Ie=a("span"),c(ce.$$.fragment),zt=h(),q=a("span"),Dt=$("10. You can share a public link to a "),We=a("code"),Mt=$("Blocks"),Jt=$(" demo and host a "),Be=a("code"),Ut=$("Blocks"),Qt=$(" demo on Hugging Face spaces."),nt=h(),c(pe.$$.fragment),this.h()},l(e){const i=Fo('[data-svelte="svelte-1phssyn"]',document.head);x=r(i,"META",{name:!0,content:!0}),i.forEach(t),Le=u(e),b=r(e,"H1",{class:!0});var st=n(b);F=r(st,"A",{id:!0,class:!0,href:!0});var jt=n(F);me=r(jt,"SPAN",{});var Kt=n(me);p(J.$$.fragment,Kt),Kt.forEach(t),jt.forEach(t),wt=u(st),ge=r(st,"SPAN",{});var Vt=n(ge);yt=v(Vt,"End-of-chapter quiz"),Vt.forEach(t),st.forEach(t),Ye=u(e),fe=r(e,"P",{});var Xt=n(fe);xt=v(Xt,"Let\u2019s test what you learned in this chapter!"),Xt.forEach(t),Ce=u(e),k=r(e,"H3",{class:!0});var lt=n(k);I=r(lt,"A",{id:!0,class:!0,href:!0});var Zt=n(I);$e=r(Zt,"SPAN",{});var eo=n($e);p(U.$$.fragment,eo),eo.forEach(t),Zt.forEach(t),bt=u(lt),ve=r(lt,"SPAN",{});var to=n(ve);kt=v(to,"1. What can you use Gradio to do?"),to.forEach(t),lt.forEach(t),Oe=u(e),p(Q.$$.fragment,e),ze=u(e),_=r(e,"H3",{class:!0});var ht=n(_);W=r(ht,"A",{id:!0,class:!0,href:!0});var oo=n(W);we=r(oo,"SPAN",{});var ao=n(we);p(R.$$.fragment,ao),ao.forEach(t),oo.forEach(t),_t=u(ht),ye=r(ht,"SPAN",{});var ro=n(ye);Et=v(ro,"2. Gradio ONLY works with PyTorch models"),ro.forEach(t),ht.forEach(t),De=u(e),p(j.$$.fragment,e),Me=u(e),E=r(e,"H3",{class:!0});var ut=n(E);B=r(ut,"A",{id:!0,class:!0,href:!0});var no=n(B);xe=r(no,"SPAN",{});var io=n(xe);p(K.$$.fragment,io),io.forEach(t),no.forEach(t),At=u(ut),be=r(ut,"SPAN",{});var so=n(be);St=v(so,"3. Where can you launch a Gradio demo from?"),so.forEach(t),ut.forEach(t),Je=u(e),p(V.$$.fragment,e),Ue=u(e),A=r(e,"H3",{class:!0});var ct=n(A);L=r(ct,"A",{id:!0,class:!0,href:!0});var lo=n(L);ke=r(lo,"SPAN",{});var ho=n(ke);p(X.$$.fragment,ho),ho.forEach(t),lo.forEach(t),Pt=u(ct),_e=r(ct,"SPAN",{});var uo=n(_e);Gt=v(uo,"4. Gradio is designed primarily for NLP models"),uo.forEach(t),ct.forEach(t),Qe=u(e),p(Z.$$.fragment,e),Re=u(e),S=r(e,"H3",{class:!0});var pt=n(S);Y=r(pt,"A",{id:!0,class:!0,href:!0});var co=n(Y);Ee=r(co,"SPAN",{});var po=n(Ee);p(ee.$$.fragment,po),po.forEach(t),co.forEach(t),Nt=u(pt),Ae=r(pt,"SPAN",{});var fo=n(Ae);Ht=v(fo,"5. Which of the following features are supported by Gradio?"),fo.forEach(t),pt.forEach(t),je=u(e),p(te.$$.fragment,e),Ke=u(e),P=r(e,"H3",{class:!0});var ft=n(P);C=r(ft,"A",{id:!0,class:!0,href:!0});var mo=n(C);Se=r(mo,"SPAN",{});var go=n(Se);p(oe.$$.fragment,go),go.forEach(t),mo.forEach(t),Tt=u(ft),Pe=r(ft,"SPAN",{});var $o=n(Pe);qt=v($o,"6. Which of the following are valid ways of loading a Hugging Face model from Hub or Spaces?"),$o.forEach(t),ft.forEach(t),Ve=u(e),p(ae.$$.fragment,e),Xe=u(e),G=r(e,"H3",{class:!0});var dt=n(G);O=r(dt,"A",{id:!0,class:!0,href:!0});var vo=n(O);Ge=r(vo,"SPAN",{});var wo=n(Ge);p(re.$$.fragment,wo),wo.forEach(t),vo.forEach(t),Ft=u(dt),Ne=r(dt,"SPAN",{});var yo=n(Ne);It=v(yo,"7. Select all the steps necessary for adding state to your Gradio interface"),yo.forEach(t),dt.forEach(t),Ze=u(e),p(ne.$$.fragment,e),et=u(e),N=r(e,"H3",{class:!0});var mt=n(N);z=r(mt,"A",{id:!0,class:!0,href:!0});var xo=n(z);He=r(xo,"SPAN",{});var bo=n(He);p(ie.$$.fragment,bo),bo.forEach(t),xo.forEach(t),Wt=u(mt),Te=r(mt,"SPAN",{});var ko=n(Te);Bt=v(ko,"8. Which of the following are components included in the Gradio library?"),ko.forEach(t),mt.forEach(t),tt=u(e),p(se.$$.fragment,e),ot=u(e),H=r(e,"H3",{class:!0});var gt=n(H);D=r(gt,"A",{id:!0,class:!0,href:!0});var _o=n(D);qe=r(_o,"SPAN",{});var Eo=n(qe);p(le.$$.fragment,Eo),Eo.forEach(t),_o.forEach(t),Lt=u(gt),he=r(gt,"SPAN",{});var $t=n(he);Yt=v($t,"9. What does Gradio "),Fe=r($t,"CODE",{});var Ao=n(Fe);Ct=v(Ao,"Blocks"),Ao.forEach(t),Ot=v($t," allow you to do?"),$t.forEach(t),gt.forEach(t),at=u(e),p(ue.$$.fragment,e),rt=u(e),T=r(e,"H3",{class:!0});var vt=n(T);M=r(vt,"A",{id:!0,class:!0,href:!0});var So=n(M);Ie=r(So,"SPAN",{});var Po=n(Ie);p(ce.$$.fragment,Po),Po.forEach(t),So.forEach(t),zt=u(vt),q=r(vt,"SPAN",{});var de=n(q);Dt=v(de,"10. You can share a public link to a "),We=r(de,"CODE",{});var Go=n(We);Mt=v(Go,"Blocks"),Go.forEach(t),Jt=v(de," demo and host a "),Be=r(de,"CODE",{});var No=n(Be);Ut=v(No,"Blocks"),No.forEach(t),Qt=v(de," demo on Hugging Face spaces."),de.forEach(t),vt.forEach(t),nt=u(e),p(pe.$$.fragment,e),this.h()},h(){s(x,"name","hf:doc:metadata"),s(x,"content",JSON.stringify(Lo)),s(F,"id","endofchapter-quiz"),s(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(F,"href","#endofchapter-quiz"),s(b,"class","relative group"),s(I,"id","1.-what-can-you-use-gradio-to-do?"),s(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(I,"href","#1.-what-can-you-use-gradio-to-do?"),s(k,"class","relative group"),s(W,"id","2.-gradio-only-works-with-pytorch-models"),s(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(W,"href","#2.-gradio-only-works-with-pytorch-models"),s(_,"class","relative group"),s(B,"id","3.-where-can-you-launch-a-gradio-demo-from?"),s(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(B,"href","#3.-where-can-you-launch-a-gradio-demo-from?"),s(E,"class","relative group"),s(L,"id","4.-gradio-is-designed-primarily-for-nlp-models"),s(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(L,"href","#4.-gradio-is-designed-primarily-for-nlp-models"),s(A,"class","relative group"),s(Y,"id","5.-which-of-the-following-features-are-supported-by-gradio?"),s(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(Y,"href","#5.-which-of-the-following-features-are-supported-by-gradio?"),s(S,"class","relative group"),s(C,"id","6.-which-of-the-following-are-valid-ways-of-loading-a-hugging-face-model-from-hub-or-spaces?"),s(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(C,"href","#6.-which-of-the-following-are-valid-ways-of-loading-a-hugging-face-model-from-hub-or-spaces?"),s(P,"class","relative group"),s(O,"id","7.-select-all-the-steps-necessary-for-adding-state-to-your-gradio-interface"),s(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(O,"href","#7.-select-all-the-steps-necessary-for-adding-state-to-your-gradio-interface"),s(G,"class","relative group"),s(z,"id","8.-which-of-the-following-are-components-included-in-the-gradio-library?"),s(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(z,"href","#8.-which-of-the-following-are-components-included-in-the-gradio-library?"),s(N,"class","relative group"),s(D,"id","9.-what-does-gradio-<code>blocks</code>-allow-you-to-do?"),s(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(D,"href","#9.-what-does-gradio-<code>blocks</code>-allow-you-to-do?"),s(H,"class","relative group"),s(M,"id","10.-you-can-share-a-public-link-to-a-<code>blocks</code>-demo-and-host-a-<code>blocks</code>-demo-on-hugging-face-spaces."),s(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(M,"href","#10.-you-can-share-a-public-link-to-a-<code>blocks</code>-demo-and-host-a-<code>blocks</code>-demo-on-hugging-face-spaces."),s(T,"class","relative group")},m(e,i){o(document.head,x),l(e,Le,i),l(e,b,i),o(b,F),o(F,me),f(J,me,null),o(b,wt),o(b,ge),o(ge,yt),l(e,Ye,i),l(e,fe,i),o(fe,xt),l(e,Ce,i),l(e,k,i),o(k,I),o(I,$e),f(U,$e,null),o(k,bt),o(k,ve),o(ve,kt),l(e,Oe,i),f(Q,e,i),l(e,ze,i),l(e,_,i),o(_,W),o(W,we),f(R,we,null),o(_,_t),o(_,ye),o(ye,Et),l(e,De,i),f(j,e,i),l(e,Me,i),l(e,E,i),o(E,B),o(B,xe),f(K,xe,null),o(E,At),o(E,be),o(be,St),l(e,Je,i),f(V,e,i),l(e,Ue,i),l(e,A,i),o(A,L),o(L,ke),f(X,ke,null),o(A,Pt),o(A,_e),o(_e,Gt),l(e,Qe,i),f(Z,e,i),l(e,Re,i),l(e,S,i),o(S,Y),o(Y,Ee),f(ee,Ee,null),o(S,Nt),o(S,Ae),o(Ae,Ht),l(e,je,i),f(te,e,i),l(e,Ke,i),l(e,P,i),o(P,C),o(C,Se),f(oe,Se,null),o(P,Tt),o(P,Pe),o(Pe,qt),l(e,Ve,i),f(ae,e,i),l(e,Xe,i),l(e,G,i),o(G,O),o(O,Ge),f(re,Ge,null),o(G,Ft),o(G,Ne),o(Ne,It),l(e,Ze,i),f(ne,e,i),l(e,et,i),l(e,N,i),o(N,z),o(z,He),f(ie,He,null),o(N,Wt),o(N,Te),o(Te,Bt),l(e,tt,i),f(se,e,i),l(e,ot,i),l(e,H,i),o(H,D),o(D,qe),f(le,qe,null),o(H,Lt),o(H,he),o(he,Yt),o(he,Fe),o(Fe,Ct),o(he,Ot),l(e,at,i),f(ue,e,i),l(e,rt,i),l(e,T,i),o(T,M),o(M,Ie),f(ce,Ie,null),o(T,zt),o(T,q),o(q,Dt),o(q,We),o(We,Mt),o(q,Jt),o(q,Be),o(Be,Ut),o(q,Qt),l(e,nt,i),f(pe,e,i),it=!0},p:Io,i(e){it||(d(J.$$.fragment,e),d(U.$$.fragment,e),d(Q.$$.fragment,e),d(R.$$.fragment,e),d(j.$$.fragment,e),d(K.$$.fragment,e),d(V.$$.fragment,e),d(X.$$.fragment,e),d(Z.$$.fragment,e),d(ee.$$.fragment,e),d(te.$$.fragment,e),d(oe.$$.fragment,e),d(ae.$$.fragment,e),d(re.$$.fragment,e),d(ne.$$.fragment,e),d(ie.$$.fragment,e),d(se.$$.fragment,e),d(le.$$.fragment,e),d(ue.$$.fragment,e),d(ce.$$.fragment,e),d(pe.$$.fragment,e),it=!0)},o(e){m(J.$$.fragment,e),m(U.$$.fragment,e),m(Q.$$.fragment,e),m(R.$$.fragment,e),m(j.$$.fragment,e),m(K.$$.fragment,e),m(V.$$.fragment,e),m(X.$$.fragment,e),m(Z.$$.fragment,e),m(ee.$$.fragment,e),m(te.$$.fragment,e),m(oe.$$.fragment,e),m(ae.$$.fragment,e),m(re.$$.fragment,e),m(ne.$$.fragment,e),m(ie.$$.fragment,e),m(se.$$.fragment,e),m(le.$$.fragment,e),m(ue.$$.fragment,e),m(ce.$$.fragment,e),m(pe.$$.fragment,e),it=!1},d(e){t(x),e&&t(Le),e&&t(b),g(J),e&&t(Ye),e&&t(fe),e&&t(Ce),e&&t(k),g(U),e&&t(Oe),g(Q,e),e&&t(ze),e&&t(_),g(R),e&&t(De),g(j,e),e&&t(Me),e&&t(E),g(K),e&&t(Je),g(V,e),e&&t(Ue),e&&t(A),g(X),e&&t(Qe),g(Z,e),e&&t(Re),e&&t(S),g(ee),e&&t(je),g(te,e),e&&t(Ke),e&&t(P),g(oe),e&&t(Ve),g(ae,e),e&&t(Xe),e&&t(G),g(re),e&&t(Ze),g(ne,e),e&&t(et),e&&t(N),g(ie),e&&t(tt),g(se,e),e&&t(ot),e&&t(H),g(le),e&&t(at),g(ue,e),e&&t(rt),e&&t(T),g(ce),e&&t(nt),g(pe,e)}}}const Lo={local:"endofchapter-quiz",title:"End-of-chapter quiz"};function Yo(Rt){return Wo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Do extends Ho{constructor(x){super();To(this,x,Yo,Bo,qo,{})}}export{Do as default,Lo as metadata};
