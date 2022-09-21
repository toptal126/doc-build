import{S as qa,i as xa,s as Ca,e as r,k as h,w as _e,t as l,N as Oa,c as s,d as t,m as u,a as o,x as be,h as n,b as i,P as ke,G as a,g as p,y as Ee,L as La,q as $e,o as Pe,B as Ae,v as Ra}from"../chunks/vendor-hf-doc-builder.js";import{I as Te}from"../chunks/IconCopyLink-hf-doc-builder.js";function Da(zt){let y,Ge,S,T,ae,q,tt,re,at,Ie,F,rt,Ne,d,Wt,He,K,st,Me,_,G,se,x,ot,oe,it,qe,g,ie,lt,nt,C,ct,pt,le,ht,ut,ne,ft,dt,xe,b,j,Jt,gt,B,Yt,Ce,f,mt,V,vt,wt,ce,yt,St,pe,_t,bt,z,kt,Et,Oe,W,$t,Le,I,he,J,Pt,At,ue,Y,Tt,Re,k,N,fe,O,Gt,de,It,De,m,Nt,L,Ht,Mt,ge,qt,xt,Ue,E,H,me,R,Ct,ve,Ot,Fe,v,Lt,we,Rt,Dt,D,Ut,Ft,Ke,$,Q,Qt,Kt,X,Xt,je,P,M,ye,U,jt,Se,Bt,Be,Z,Vt,Ve;return q=new Te({}),x=new Te({}),O=new Te({}),R=new Te({}),U=new Te({}),{c(){y=r("meta"),Ge=h(),S=r("h1"),T=r("a"),ae=r("span"),_e(q.$$.fragment),tt=h(),re=r("span"),at=l("Spaces Overview"),Ie=h(),F=r("p"),rt=l("Hugging Face Spaces make it easy for you to create and deploy ML-powered demos in minutes. Watch the following video for a quick introduction to Spaces:"),Ne=h(),d=r("iframe"),He=h(),K=r("p"),st=l("In the following sections, you\u2019ll learn the basics of creating a Space, configuring it, and deploying your code to it."),Me=h(),_=r("h2"),G=r("a"),se=r("span"),_e(x.$$.fragment),ot=h(),oe=r("span"),it=l("Creating a new Space"),qe=h(),g=r("p"),ie=r("strong"),lt=l("To make a new Space"),nt=l(", visit the "),C=r("a"),ct=l("Spaces main page"),pt=l(" and click on "),le=r("strong"),ht=l("Create new Space"),ut=l(". Along with choosing a name for your Space, selecting an optional license, and setting your Space\u2019s visibility, you\u2019ll be prompted to choose the "),ne=r("strong"),ft=l("SDK"),dt=l(" for your Space. The Hub offers three SDK options: Gradio, Streamlit, and static HTML. If you select \u201CGradio\u201D as your SDK, you\u2019ll be navigated to a new repo showing the following page:"),xe=h(),b=r("div"),j=r("img"),gt=h(),B=r("img"),Ce=h(),f=r("p"),mt=l("Under the hood, Spaces stores your code inside a git repository, just like the model and dataset repositories. Thanks to this, the same tools we use for all the "),V=r("a"),vt=l("other repositories on the Hub"),wt=l(" ("),ce=r("code"),yt=l("git"),St=l(" and "),pe=r("code"),_t=l("git-lfs"),bt=l(") also work for Spaces. Follow the same flow as in "),z=r("a"),kt=l("Getting Started with Repositories"),Et=l(" to add files to your Space. Each time a new commit is pushed, the Space will automatically rebuild and restart."),Oe=h(),W=r("p"),$t=l("For step-by-step tutorials to creating your first Space, see the guides below:"),Le=h(),I=r("ul"),he=r("li"),J=r("a"),Pt=l("Creating a Gradio Space"),At=h(),ue=r("li"),Y=r("a"),Tt=l("Creating a Streamlit Space"),Re=h(),k=r("h2"),N=r("a"),fe=r("span"),_e(O.$$.fragment),Gt=h(),de=r("span"),It=l("Hardware resources"),De=h(),m=r("p"),Nt=l("Each Spaces environment is limited to 16GB RAM and 8 CPU cores. Individuals and Organization "),L=r("a"),Ht=l("subscribers"),Mt=l(" (Lab, Startup, and Enterprise) can access Spaces with one T4 GPU on a case-by-case basis. Please email us at "),ge=r("strong"),qt=l("website at huggingface.co"),xt=l(" to request a T4 GPU."),Ue=h(),E=r("h2"),H=r("a"),me=r("span"),_e(R.$$.fragment),Ct=h(),ve=r("span"),Ot=l("Managing secrets"),Fe=h(),v=r("p"),Lt=l("If your app requires secret keys or tokens, don\u2019t hard-code them inside your app! Instead, go to the "),we=r("strong"),Rt=l("Settings"),Dt=l(" page of your Space repository and enter your secrets there. The secrets will be exposed to your app with "),D=r("a"),Ut=l("Streamlit Secrets Management"),Ft=l(" if you use Streamlit, and as environment variables in other cases."),Ke=h(),$=r("div"),Q=r("img"),Kt=h(),X=r("img"),je=h(),P=r("h2"),M=r("a"),ye=r("span"),_e(U.$$.fragment),jt=h(),Se=r("span"),Bt=l("Networking"),Be=h(),Z=r("p"),Vt=l("If your Space needs to make any network requests, you can make requests through the standard HTTP and HTTPS ports (80 and 443) along with port 8080. Any requests going to other ports will be blocked."),this.h()},l(e){const c=Oa('[data-svelte="svelte-1phssyn"]',document.head);y=s(c,"META",{name:!0,content:!0}),c.forEach(t),Ge=u(e),S=s(e,"H1",{class:!0});var ze=o(S);T=s(ze,"A",{id:!0,class:!0,href:!0});var Zt=o(T);ae=s(Zt,"SPAN",{});var ea=o(ae);be(q.$$.fragment,ea),ea.forEach(t),Zt.forEach(t),tt=u(ze),re=s(ze,"SPAN",{});var ta=o(re);at=n(ta,"Spaces Overview"),ta.forEach(t),ze.forEach(t),Ie=u(e),F=s(e,"P",{});var aa=o(F);rt=n(aa,"Hugging Face Spaces make it easy for you to create and deploy ML-powered demos in minutes. Watch the following video for a quick introduction to Spaces:"),aa.forEach(t),Ne=u(e),d=s(e,"IFRAME",{width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0}),o(d).forEach(t),He=u(e),K=s(e,"P",{});var ra=o(K);st=n(ra,"In the following sections, you\u2019ll learn the basics of creating a Space, configuring it, and deploying your code to it."),ra.forEach(t),Me=u(e),_=s(e,"H2",{class:!0});var We=o(_);G=s(We,"A",{id:!0,class:!0,href:!0});var sa=o(G);se=s(sa,"SPAN",{});var oa=o(se);be(x.$$.fragment,oa),oa.forEach(t),sa.forEach(t),ot=u(We),oe=s(We,"SPAN",{});var ia=o(oe);it=n(ia,"Creating a new Space"),ia.forEach(t),We.forEach(t),qe=u(e),g=s(e,"P",{});var A=o(g);ie=s(A,"STRONG",{});var la=o(ie);lt=n(la,"To make a new Space"),la.forEach(t),nt=n(A,", visit the "),C=s(A,"A",{href:!0,rel:!0});var na=o(C);ct=n(na,"Spaces main page"),na.forEach(t),pt=n(A," and click on "),le=s(A,"STRONG",{});var ca=o(le);ht=n(ca,"Create new Space"),ca.forEach(t),ut=n(A,". Along with choosing a name for your Space, selecting an optional license, and setting your Space\u2019s visibility, you\u2019ll be prompted to choose the "),ne=s(A,"STRONG",{});var pa=o(ne);ft=n(pa,"SDK"),pa.forEach(t),dt=n(A," for your Space. The Hub offers three SDK options: Gradio, Streamlit, and static HTML. If you select \u201CGradio\u201D as your SDK, you\u2019ll be navigated to a new repo showing the following page:"),A.forEach(t),xe=u(e),b=s(e,"DIV",{class:!0});var Je=o(b);j=s(Je,"IMG",{class:!0,src:!0}),gt=u(Je),B=s(Je,"IMG",{class:!0,src:!0}),Je.forEach(t),Ce=u(e),f=s(e,"P",{});var w=o(f);mt=n(w,"Under the hood, Spaces stores your code inside a git repository, just like the model and dataset repositories. Thanks to this, the same tools we use for all the "),V=s(w,"A",{href:!0});var ha=o(V);vt=n(ha,"other repositories on the Hub"),ha.forEach(t),wt=n(w," ("),ce=s(w,"CODE",{});var ua=o(ce);yt=n(ua,"git"),ua.forEach(t),St=n(w," and "),pe=s(w,"CODE",{});var fa=o(pe);_t=n(fa,"git-lfs"),fa.forEach(t),bt=n(w,") also work for Spaces. Follow the same flow as in "),z=s(w,"A",{href:!0});var da=o(z);kt=n(da,"Getting Started with Repositories"),da.forEach(t),Et=n(w," to add files to your Space. Each time a new commit is pushed, the Space will automatically rebuild and restart."),w.forEach(t),Oe=u(e),W=s(e,"P",{});var ga=o(W);$t=n(ga,"For step-by-step tutorials to creating your first Space, see the guides below:"),ga.forEach(t),Le=u(e),I=s(e,"UL",{});var Ye=o(I);he=s(Ye,"LI",{});var ma=o(he);J=s(ma,"A",{href:!0});var va=o(J);Pt=n(va,"Creating a Gradio Space"),va.forEach(t),ma.forEach(t),At=u(Ye),ue=s(Ye,"LI",{});var wa=o(ue);Y=s(wa,"A",{href:!0});var ya=o(Y);Tt=n(ya,"Creating a Streamlit Space"),ya.forEach(t),wa.forEach(t),Ye.forEach(t),Re=u(e),k=s(e,"H2",{class:!0});var Qe=o(k);N=s(Qe,"A",{id:!0,class:!0,href:!0});var Sa=o(N);fe=s(Sa,"SPAN",{});var _a=o(fe);be(O.$$.fragment,_a),_a.forEach(t),Sa.forEach(t),Gt=u(Qe),de=s(Qe,"SPAN",{});var ba=o(de);It=n(ba,"Hardware resources"),ba.forEach(t),Qe.forEach(t),De=u(e),m=s(e,"P",{});var ee=o(m);Nt=n(ee,"Each Spaces environment is limited to 16GB RAM and 8 CPU cores. Individuals and Organization "),L=s(ee,"A",{href:!0,rel:!0});var ka=o(L);Ht=n(ka,"subscribers"),ka.forEach(t),Mt=n(ee," (Lab, Startup, and Enterprise) can access Spaces with one T4 GPU on a case-by-case basis. Please email us at "),ge=s(ee,"STRONG",{});var Ea=o(ge);qt=n(Ea,"website at huggingface.co"),Ea.forEach(t),xt=n(ee," to request a T4 GPU."),ee.forEach(t),Ue=u(e),E=s(e,"H2",{class:!0});var Xe=o(E);H=s(Xe,"A",{id:!0,class:!0,href:!0});var $a=o(H);me=s($a,"SPAN",{});var Pa=o(me);be(R.$$.fragment,Pa),Pa.forEach(t),$a.forEach(t),Ct=u(Xe),ve=s(Xe,"SPAN",{});var Aa=o(ve);Ot=n(Aa,"Managing secrets"),Aa.forEach(t),Xe.forEach(t),Fe=u(e),v=s(e,"P",{});var te=o(v);Lt=n(te,"If your app requires secret keys or tokens, don\u2019t hard-code them inside your app! Instead, go to the "),we=s(te,"STRONG",{});var Ta=o(we);Rt=n(Ta,"Settings"),Ta.forEach(t),Dt=n(te," page of your Space repository and enter your secrets there. The secrets will be exposed to your app with "),D=s(te,"A",{href:!0,rel:!0});var Ga=o(D);Ut=n(Ga,"Streamlit Secrets Management"),Ga.forEach(t),Ft=n(te," if you use Streamlit, and as environment variables in other cases."),te.forEach(t),Ke=u(e),$=s(e,"DIV",{class:!0});var Ze=o($);Q=s(Ze,"IMG",{class:!0,src:!0}),Kt=u(Ze),X=s(Ze,"IMG",{class:!0,src:!0}),Ze.forEach(t),je=u(e),P=s(e,"H2",{class:!0});var et=o(P);M=s(et,"A",{id:!0,class:!0,href:!0});var Ia=o(M);ye=s(Ia,"SPAN",{});var Na=o(ye);be(U.$$.fragment,Na),Na.forEach(t),Ia.forEach(t),jt=u(et),Se=s(et,"SPAN",{});var Ha=o(Se);Bt=n(Ha,"Networking"),Ha.forEach(t),et.forEach(t),Be=u(e),Z=s(e,"P",{});var Ma=o(Z);Vt=n(Ma,"If your Space needs to make any network requests, you can make requests through the standard HTTP and HTTPS ports (80 and 443) along with port 8080. Any requests going to other ports will be blocked."),Ma.forEach(t),this.h()},h(){i(y,"name","hf:doc:metadata"),i(y,"content",JSON.stringify(Ua)),i(T,"id","spaces-overview"),i(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(T,"href","#spaces-overview"),i(S,"class","relative group"),i(d,"width","560"),i(d,"height","315"),ke(d.src,Wt="https://www.youtube-nocookie.com/embed/3bSVKNKb_PY")||i(d,"src",Wt),i(d,"title","Spaces intro"),i(d,"frameborder","0"),i(d,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),d.allowFullscreen=!0,i(G,"id","creating-a-new-space"),i(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(G,"href","#creating-a-new-space"),i(_,"class","relative group"),i(C,"href","https://huggingface.co/spaces"),i(C,"rel","nofollow"),i(j,"class","block dark:hidden"),ke(j.src,Jt="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/spaces-blank-space.png")||i(j,"src",Jt),i(B,"class","hidden dark:block"),ke(B.src,Yt="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/spaces-blank-space-dark.png")||i(B,"src",Yt),i(b,"class","flex justify-center"),i(V,"href","./repositories"),i(z,"href","./repositories-getting-started"),i(J,"href","./spaces-sdks-gradio"),i(Y,"href","./spaces-sdks-streamlit"),i(N,"id","hardware-resources"),i(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(N,"href","#hardware-resources"),i(k,"class","relative group"),i(L,"href","https://huggingface.co/pricing"),i(L,"rel","nofollow"),i(H,"id","managing-secrets"),i(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(H,"href","#managing-secrets"),i(E,"class","relative group"),i(D,"href","https://blog.streamlit.io/secrets-in-sharing-apps/"),i(D,"rel","nofollow"),i(Q,"class","block dark:hidden"),ke(Q.src,Qt="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/secrets.png")||i(Q,"src",Qt),i(X,"class","hidden dark:block"),ke(X.src,Xt="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/secrets-dark.png")||i(X,"src",Xt),i($,"class","flex justify-center"),i(M,"id","networking"),i(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(M,"href","#networking"),i(P,"class","relative group")},m(e,c){a(document.head,y),p(e,Ge,c),p(e,S,c),a(S,T),a(T,ae),Ee(q,ae,null),a(S,tt),a(S,re),a(re,at),p(e,Ie,c),p(e,F,c),a(F,rt),p(e,Ne,c),p(e,d,c),p(e,He,c),p(e,K,c),a(K,st),p(e,Me,c),p(e,_,c),a(_,G),a(G,se),Ee(x,se,null),a(_,ot),a(_,oe),a(oe,it),p(e,qe,c),p(e,g,c),a(g,ie),a(ie,lt),a(g,nt),a(g,C),a(C,ct),a(g,pt),a(g,le),a(le,ht),a(g,ut),a(g,ne),a(ne,ft),a(g,dt),p(e,xe,c),p(e,b,c),a(b,j),a(b,gt),a(b,B),p(e,Ce,c),p(e,f,c),a(f,mt),a(f,V),a(V,vt),a(f,wt),a(f,ce),a(ce,yt),a(f,St),a(f,pe),a(pe,_t),a(f,bt),a(f,z),a(z,kt),a(f,Et),p(e,Oe,c),p(e,W,c),a(W,$t),p(e,Le,c),p(e,I,c),a(I,he),a(he,J),a(J,Pt),a(I,At),a(I,ue),a(ue,Y),a(Y,Tt),p(e,Re,c),p(e,k,c),a(k,N),a(N,fe),Ee(O,fe,null),a(k,Gt),a(k,de),a(de,It),p(e,De,c),p(e,m,c),a(m,Nt),a(m,L),a(L,Ht),a(m,Mt),a(m,ge),a(ge,qt),a(m,xt),p(e,Ue,c),p(e,E,c),a(E,H),a(H,me),Ee(R,me,null),a(E,Ct),a(E,ve),a(ve,Ot),p(e,Fe,c),p(e,v,c),a(v,Lt),a(v,we),a(we,Rt),a(v,Dt),a(v,D),a(D,Ut),a(v,Ft),p(e,Ke,c),p(e,$,c),a($,Q),a($,Kt),a($,X),p(e,je,c),p(e,P,c),a(P,M),a(M,ye),Ee(U,ye,null),a(P,jt),a(P,Se),a(Se,Bt),p(e,Be,c),p(e,Z,c),a(Z,Vt),Ve=!0},p:La,i(e){Ve||($e(q.$$.fragment,e),$e(x.$$.fragment,e),$e(O.$$.fragment,e),$e(R.$$.fragment,e),$e(U.$$.fragment,e),Ve=!0)},o(e){Pe(q.$$.fragment,e),Pe(x.$$.fragment,e),Pe(O.$$.fragment,e),Pe(R.$$.fragment,e),Pe(U.$$.fragment,e),Ve=!1},d(e){t(y),e&&t(Ge),e&&t(S),Ae(q),e&&t(Ie),e&&t(F),e&&t(Ne),e&&t(d),e&&t(He),e&&t(K),e&&t(Me),e&&t(_),Ae(x),e&&t(qe),e&&t(g),e&&t(xe),e&&t(b),e&&t(Ce),e&&t(f),e&&t(Oe),e&&t(W),e&&t(Le),e&&t(I),e&&t(Re),e&&t(k),Ae(O),e&&t(De),e&&t(m),e&&t(Ue),e&&t(E),Ae(R),e&&t(Fe),e&&t(v),e&&t(Ke),e&&t($),e&&t(je),e&&t(P),Ae(U),e&&t(Be),e&&t(Z)}}}const Ua={local:"spaces-overview",sections:[{local:"creating-a-new-space",title:"Creating a new Space"},{local:"hardware-resources",title:"Hardware resources"},{local:"managing-secrets",title:"Managing secrets"},{local:"networking",title:"Networking"}],title:"Spaces Overview"};function Fa(zt){return Ra(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ba extends qa{constructor(y){super();xa(this,y,Fa,Da,Ca,{})}}export{Ba as default,Ua as metadata};
