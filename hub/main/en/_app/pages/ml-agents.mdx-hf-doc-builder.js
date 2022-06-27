import{S as Fl,i as Tl,s as Dl,e as l,k as f,w as v,t as n,N as zl,c as o,d as a,m as p,a as s,x as y,h as i,b as u,P as Gl,G as t,g as h,y as w,L as Vl,q as _,o as E,B as $,v as Bl}from"../chunks/vendor-hf-doc-builder.js";import{I as ne}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as Ba}from"../chunks/CodeBlock-hf-doc-builder.js";function Wl(Wa){let b,Qe,A,H,ye,G,St,we,xt,Xe,V,_e,Ht,Mt,Ze,L,M,Ee,B,jt,$e,qt,et,g,Nt,be,Ct,Ot,W,Ut,Yt,tt,ie,Ft,at,c,Ae,Tt,Dt,Le,zt,Gt,ke,Vt,Bt,Ie,Wt,lt,J,Pe,Ja,ot,k,j,Se,R,Jt,xe,Rt,st,K,nt,I,q,He,Q,Kt,Me,Qt,it,X,rt,re,Xt,ht,N,he,je,Zt,ea,ta,ue,qe,aa,la,ut,P,C,Ne,Z,oa,Ce,sa,ft,d,Oe,na,ia,ee,ra,Ue,ha,ua,fa,Ye,pa,ca,Fe,da,pt,S,O,Te,te,ma,De,ga,ct,ae,dt,fe,va,mt,m,pe,ze,ya,wa,_a,ce,Ge,Ea,$a,ba,U,Ve,Aa,La,Be,ka,Ia,Pa,de,We,Sa,xa,gt,x,Y,Je,le,Ha,Re,Ma,vt,F,me,ja,oe,qa,Na,ge,Ca,se,Oa,yt;return G=new ne({}),B=new ne({}),R=new ne({}),K=new Ba({props:{code:"",highlighted:`<span class="hljs-comment"># Clone the repository</span>
git <span class="hljs-built_in">clone</span> https://github.com/huggingface/ml-agents/

<span class="hljs-comment"># Go inside the repository and install the package</span>
<span class="hljs-built_in">cd</span> ml-agents
pip3 install -e ./ml-agents-envs
pip3 install -e ./ml-agents`}}),Q=new ne({}),X=new Ba({props:{code:'mlagents-load-from-hf --repo-id="ThomasSimonini/MLAgents-Pyramids" --local-dir="./downloads"',highlighted:'mlagents-load-<span class="hljs-keyword">from</span>-hf --repo-<span class="hljs-built_in">id</span>=<span class="hljs-string">&quot;ThomasSimonini/MLAgents-Pyramids&quot;</span> --local-<span class="hljs-built_in">dir</span>=<span class="hljs-string">&quot;./downloads&quot;</span>'}}),Z=new ne({}),te=new ne({}),ae=new Ba({props:{code:'mlagents-push-to-hf --run-id="First Training" --local-dir="results/First Training" --repo-id="ThomasSimonini/MLAgents-Pyramids" --commit-message="Pyramids"',highlighted:'mlagents-push-to-hf --run-id<span class="hljs-operator">=</span><span class="hljs-string">&quot;First Training&quot;</span> --local-dir<span class="hljs-operator">=</span><span class="hljs-string">&quot;results/First Training&quot;</span> --repo-id<span class="hljs-operator">=</span><span class="hljs-string">&quot;ThomasSimonini/MLAgents-Pyramids&quot;</span> --commit-message<span class="hljs-operator">=</span><span class="hljs-string">&quot;Pyramids&quot;</span>'}}),le=new ne({}),{c(){b=l("meta"),Qe=f(),A=l("h1"),H=l("a"),ye=l("span"),v(G.$$.fragment),St=f(),we=l("span"),xt=n("Using ML-Agents at Hugging Face"),Xe=f(),V=l("p"),_e=l("code"),Ht=n("ml-agents"),Mt=n(" is an open-source toolkit that enables games and simulations made with Unity to serve as environments for training intelligent agents."),Ze=f(),L=l("h2"),M=l("a"),Ee=l("span"),v(B.$$.fragment),jt=f(),$e=l("span"),qt=n("Exploring ML-Agents in the Hub"),et=f(),g=l("p"),Nt=n("You can find "),be=l("code"),Ct=n("ml-agents"),Ot=n(" models by filtering at the left of the "),W=l("a"),Ut=n("models page"),Yt=n("."),tt=f(),ie=l("p"),Ft=n("All models on the Hub come up with useful features:"),at=f(),c=l("ol"),Ae=l("li"),Tt=n("An automatically generated model card with a description, a training configuration, and more."),Dt=f(),Le=l("li"),zt=n("Metadata tags that help for discoverability."),Gt=f(),ke=l("li"),Vt=n("Tensorboard summary files to visualize the training metrics."),Bt=f(),Ie=l("li"),Wt=n("A link to the Spaces web demo where you can visualize your agent playing in your browser."),lt=f(),J=l("div"),Pe=l("img"),ot=f(),k=l("h2"),j=l("a"),Se=l("span"),v(R.$$.fragment),Jt=f(),xe=l("span"),Rt=n("Install the library"),st=n(`

To install the \`ml-agents\` library, you need to clone the repo:

	`),v(K.$$.fragment),nt=f(),I=l("h2"),q=l("a"),He=l("span"),v(Q.$$.fragment),Kt=f(),Me=l("span"),Qt=n("Using existing models"),it=n(`

You can simply download a model from the Hub using \`mlagents-load-from-hf\`.

	`),v(X.$$.fragment),rt=f(),re=l("p"),Xt=n("You need to define two parameters:"),ht=f(),N=l("ul"),he=l("li"),je=l("code"),Zt=n("--repo-id"),ea=n(": the name of the Hugging Face repo you want to download."),ta=f(),ue=l("li"),qe=l("code"),aa=n("--local-dir"),la=n(": the path to download the model."),ut=f(),P=l("h2"),C=l("a"),Ne=l("span"),v(Z.$$.fragment),oa=f(),Ce=l("span"),sa=n("Visualize an agent playing"),ft=n(`

You can easily watch any \`ml-agent\` playing directly in your browser:
`),d=l("ol"),Oe=l("li"),na=n("Go to your model repo."),ia=f(),ee=l("li"),ra=n("In the "),Ue=l("code"),ha=n("Watch Your Agent Play"),ua=n(" section, click on the link."),fa=f(),Ye=l("li"),pa=n("In the demo, on step 1, choose your model repository, which is the model id."),ca=f(),Fe=l("li"),da=n("In step 2, choose what model you want to replay."),pt=f(),S=l("h2"),O=l("a"),Te=l("span"),v(te.$$.fragment),ma=f(),De=l("span"),ga=n("Sharing your models"),ct=n(`

You can easily upload your models using \`mlagents-push-to-hf\`:

	`),v(ae.$$.fragment),dt=f(),fe=l("p"),va=n("You need to define four parameters:"),mt=f(),m=l("ul"),pe=l("li"),ze=l("code"),ya=n("--run-id"),wa=n(": the name of the training run id."),_a=f(),ce=l("li"),Ge=l("code"),Ea=n("--local-dir"),$a=n(": where the model was saved."),ba=f(),U=l("li"),Ve=l("code"),Aa=n("--repo-id"),La=n(": the name of the Hugging Face repo you want to create or update. It\u2019s "),Be=l("code"),ka=n("<your huggingface username>/<the repo name>"),Ia=n("."),Pa=f(),de=l("li"),We=l("code"),Sa=n("--commit-message"),xa=n("."),gt=f(),x=l("h2"),Y=l("a"),Je=l("span"),v(le.$$.fragment),Ha=f(),Re=l("span"),Ma=n("Additional resources"),vt=f(),F=l("ul"),me=l("li"),ja=n("Hugging Face ML-Agents "),oe=l("a"),qa=n("documentation"),Na=f(),ge=l("li"),Ca=n("Official Unity ML-Agents Spaces "),se=l("a"),Oa=n("demos"),this.h()},l(e){const r=zl('[data-svelte="svelte-1phssyn"]',document.head);b=o(r,"META",{name:!0,content:!0}),r.forEach(a),Qe=p(e),A=o(e,"H1",{class:!0});var wt=s(A);H=o(wt,"A",{id:!0,class:!0,href:!0});var Ra=s(H);ye=o(Ra,"SPAN",{});var Ka=s(ye);y(G.$$.fragment,Ka),Ka.forEach(a),Ra.forEach(a),St=p(wt),we=o(wt,"SPAN",{});var Qa=s(we);xt=i(Qa,"Using ML-Agents at Hugging Face"),Qa.forEach(a),wt.forEach(a),Xe=p(e),V=o(e,"P",{});var Ua=s(V);_e=o(Ua,"CODE",{});var Xa=s(_e);Ht=i(Xa,"ml-agents"),Xa.forEach(a),Mt=i(Ua," is an open-source toolkit that enables games and simulations made with Unity to serve as environments for training intelligent agents."),Ua.forEach(a),Ze=p(e),L=o(e,"H2",{class:!0});var _t=s(L);M=o(_t,"A",{id:!0,class:!0,href:!0});var Za=s(M);Ee=o(Za,"SPAN",{});var el=s(Ee);y(B.$$.fragment,el),el.forEach(a),Za.forEach(a),jt=p(_t),$e=o(_t,"SPAN",{});var tl=s($e);qt=i(tl,"Exploring ML-Agents in the Hub"),tl.forEach(a),_t.forEach(a),et=p(e),g=o(e,"P",{});var ve=s(g);Nt=i(ve,"You can find "),be=o(ve,"CODE",{});var al=s(be);Ct=i(al,"ml-agents"),al.forEach(a),Ot=i(ve," models by filtering at the left of the "),W=o(ve,"A",{href:!0,rel:!0});var ll=s(W);Ut=i(ll,"models page"),ll.forEach(a),Yt=i(ve,"."),ve.forEach(a),tt=p(e),ie=o(e,"P",{});var ol=s(ie);Ft=i(ol,"All models on the Hub come up with useful features:"),ol.forEach(a),at=p(e),c=o(e,"OL",{});var T=s(c);Ae=o(T,"LI",{});var sl=s(Ae);Tt=i(sl,"An automatically generated model card with a description, a training configuration, and more."),sl.forEach(a),Dt=p(T),Le=o(T,"LI",{});var nl=s(Le);zt=i(nl,"Metadata tags that help for discoverability."),nl.forEach(a),Gt=p(T),ke=o(T,"LI",{});var il=s(ke);Vt=i(il,"Tensorboard summary files to visualize the training metrics."),il.forEach(a),Bt=p(T),Ie=o(T,"LI",{});var rl=s(Ie);Wt=i(rl,"A link to the Spaces web demo where you can visualize your agent playing in your browser."),rl.forEach(a),T.forEach(a),lt=p(e),J=o(e,"DIV",{class:!0});var hl=s(J);Pe=o(hl,"IMG",{src:!0}),hl.forEach(a),ot=p(e),k=o(e,"H2",{class:!0});var Et=s(k);j=o(Et,"A",{id:!0,class:!0,href:!0});var ul=s(j);Se=o(ul,"SPAN",{});var fl=s(Se);y(R.$$.fragment,fl),fl.forEach(a),ul.forEach(a),Jt=p(Et),xe=o(Et,"SPAN",{});var pl=s(xe);Rt=i(pl,"Install the library"),pl.forEach(a),Et.forEach(a),st=i(e,`

To install the \`ml-agents\` library, you need to clone the repo:

	`),y(K.$$.fragment,e),nt=p(e),I=o(e,"H2",{class:!0});var $t=s(I);q=o($t,"A",{id:!0,class:!0,href:!0});var cl=s(q);He=o(cl,"SPAN",{});var dl=s(He);y(Q.$$.fragment,dl),dl.forEach(a),cl.forEach(a),Kt=p($t),Me=o($t,"SPAN",{});var ml=s(Me);Qt=i(ml,"Using existing models"),ml.forEach(a),$t.forEach(a),it=i(e,`

You can simply download a model from the Hub using \`mlagents-load-from-hf\`.

	`),y(X.$$.fragment,e),rt=p(e),re=o(e,"P",{});var gl=s(re);Xt=i(gl,"You need to define two parameters:"),gl.forEach(a),ht=p(e),N=o(e,"UL",{});var bt=s(N);he=o(bt,"LI",{});var Ya=s(he);je=o(Ya,"CODE",{});var vl=s(je);Zt=i(vl,"--repo-id"),vl.forEach(a),ea=i(Ya,": the name of the Hugging Face repo you want to download."),Ya.forEach(a),ta=p(bt),ue=o(bt,"LI",{});var Fa=s(ue);qe=o(Fa,"CODE",{});var yl=s(qe);aa=i(yl,"--local-dir"),yl.forEach(a),la=i(Fa,": the path to download the model."),Fa.forEach(a),bt.forEach(a),ut=p(e),P=o(e,"H2",{class:!0});var At=s(P);C=o(At,"A",{id:!0,class:!0,href:!0});var wl=s(C);Ne=o(wl,"SPAN",{});var _l=s(Ne);y(Z.$$.fragment,_l),_l.forEach(a),wl.forEach(a),oa=p(At),Ce=o(At,"SPAN",{});var El=s(Ce);sa=i(El,"Visualize an agent playing"),El.forEach(a),At.forEach(a),ft=i(e,`

You can easily watch any \`ml-agent\` playing directly in your browser:
`),d=o(e,"OL",{});var D=s(d);Oe=o(D,"LI",{});var $l=s(Oe);na=i($l,"Go to your model repo."),$l.forEach(a),ia=p(D),ee=o(D,"LI",{});var Lt=s(ee);ra=i(Lt,"In the "),Ue=o(Lt,"CODE",{});var bl=s(Ue);ha=i(bl,"Watch Your Agent Play"),bl.forEach(a),ua=i(Lt," section, click on the link."),Lt.forEach(a),fa=p(D),Ye=o(D,"LI",{});var Al=s(Ye);pa=i(Al,"In the demo, on step 1, choose your model repository, which is the model id."),Al.forEach(a),ca=p(D),Fe=o(D,"LI",{});var Ll=s(Fe);da=i(Ll,"In step 2, choose what model you want to replay."),Ll.forEach(a),D.forEach(a),pt=p(e),S=o(e,"H2",{class:!0});var kt=s(S);O=o(kt,"A",{id:!0,class:!0,href:!0});var kl=s(O);Te=o(kl,"SPAN",{});var Il=s(Te);y(te.$$.fragment,Il),Il.forEach(a),kl.forEach(a),ma=p(kt),De=o(kt,"SPAN",{});var Pl=s(De);ga=i(Pl,"Sharing your models"),Pl.forEach(a),kt.forEach(a),ct=i(e,`

You can easily upload your models using \`mlagents-push-to-hf\`:

	`),y(ae.$$.fragment,e),dt=p(e),fe=o(e,"P",{});var Sl=s(fe);va=i(Sl,"You need to define four parameters:"),Sl.forEach(a),mt=p(e),m=o(e,"UL",{});var z=s(m);pe=o(z,"LI",{});var Ta=s(pe);ze=o(Ta,"CODE",{});var xl=s(ze);ya=i(xl,"--run-id"),xl.forEach(a),wa=i(Ta,": the name of the training run id."),Ta.forEach(a),_a=p(z),ce=o(z,"LI",{});var Da=s(ce);Ge=o(Da,"CODE",{});var Hl=s(Ge);Ea=i(Hl,"--local-dir"),Hl.forEach(a),$a=i(Da,": where the model was saved."),Da.forEach(a),ba=p(z),U=o(z,"LI",{});var Ke=s(U);Ve=o(Ke,"CODE",{});var Ml=s(Ve);Aa=i(Ml,"--repo-id"),Ml.forEach(a),La=i(Ke,": the name of the Hugging Face repo you want to create or update. It\u2019s "),Be=o(Ke,"CODE",{});var jl=s(Be);ka=i(jl,"<your huggingface username>/<the repo name>"),jl.forEach(a),Ia=i(Ke,"."),Ke.forEach(a),Pa=p(z),de=o(z,"LI",{});var za=s(de);We=o(za,"CODE",{});var ql=s(We);Sa=i(ql,"--commit-message"),ql.forEach(a),xa=i(za,"."),za.forEach(a),z.forEach(a),gt=p(e),x=o(e,"H2",{class:!0});var It=s(x);Y=o(It,"A",{id:!0,class:!0,href:!0});var Nl=s(Y);Je=o(Nl,"SPAN",{});var Cl=s(Je);y(le.$$.fragment,Cl),Cl.forEach(a),Nl.forEach(a),Ha=p(It),Re=o(It,"SPAN",{});var Ol=s(Re);Ma=i(Ol,"Additional resources"),Ol.forEach(a),It.forEach(a),vt=p(e),F=o(e,"UL",{});var Pt=s(F);me=o(Pt,"LI",{});var Ga=s(me);ja=i(Ga,"Hugging Face ML-Agents "),oe=o(Ga,"A",{href:!0,rel:!0});var Ul=s(oe);qa=i(Ul,"documentation"),Ul.forEach(a),Ga.forEach(a),Na=p(Pt),ge=o(Pt,"LI",{});var Va=s(ge);Ca=i(Va,"Official Unity ML-Agents Spaces "),se=o(Va,"A",{href:!0,rel:!0});var Yl=s(se);Oa=i(Yl,"demos"),Yl.forEach(a),Va.forEach(a),Pt.forEach(a),this.h()},h(){u(b,"name","hf:doc:metadata"),u(b,"content",JSON.stringify(Jl)),u(H,"id","using-mlagents-at-hugging-face"),u(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(H,"href","#using-mlagents-at-hugging-face"),u(A,"class","relative group"),u(M,"id","exploring-mlagents-in-the-hub"),u(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(M,"href","#exploring-mlagents-in-the-hub"),u(L,"class","relative group"),u(W,"href","https://huggingface.co/models?library=ml-agents"),u(W,"rel","nofollow"),Gl(Pe.src,Ja="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/ml-agents-demo.gif")||u(Pe,"src",Ja),u(J,"class","flex justify-center"),u(j,"id","install-the-library"),u(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(j,"href","#install-the-library"),u(k,"class","relative group"),u(q,"id","using-existing-models"),u(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(q,"href","#using-existing-models"),u(I,"class","relative group"),u(C,"id","visualize-an-agent-playing"),u(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(C,"href","#visualize-an-agent-playing"),u(P,"class","relative group"),u(O,"id","sharing-your-models"),u(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(O,"href","#sharing-your-models"),u(S,"class","relative group"),u(Y,"id","additional-resources"),u(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Y,"href","#additional-resources"),u(x,"class","relative group"),u(oe,"href","https://github.com/huggingface/ml-agents"),u(oe,"rel","nofollow"),u(se,"href","https://huggingface.co/unity"),u(se,"rel","nofollow")},m(e,r){t(document.head,b),h(e,Qe,r),h(e,A,r),t(A,H),t(H,ye),w(G,ye,null),t(A,St),t(A,we),t(we,xt),h(e,Xe,r),h(e,V,r),t(V,_e),t(_e,Ht),t(V,Mt),h(e,Ze,r),h(e,L,r),t(L,M),t(M,Ee),w(B,Ee,null),t(L,jt),t(L,$e),t($e,qt),h(e,et,r),h(e,g,r),t(g,Nt),t(g,be),t(be,Ct),t(g,Ot),t(g,W),t(W,Ut),t(g,Yt),h(e,tt,r),h(e,ie,r),t(ie,Ft),h(e,at,r),h(e,c,r),t(c,Ae),t(Ae,Tt),t(c,Dt),t(c,Le),t(Le,zt),t(c,Gt),t(c,ke),t(ke,Vt),t(c,Bt),t(c,Ie),t(Ie,Wt),h(e,lt,r),h(e,J,r),t(J,Pe),h(e,ot,r),h(e,k,r),t(k,j),t(j,Se),w(R,Se,null),t(k,Jt),t(k,xe),t(xe,Rt),h(e,st,r),w(K,e,r),h(e,nt,r),h(e,I,r),t(I,q),t(q,He),w(Q,He,null),t(I,Kt),t(I,Me),t(Me,Qt),h(e,it,r),w(X,e,r),h(e,rt,r),h(e,re,r),t(re,Xt),h(e,ht,r),h(e,N,r),t(N,he),t(he,je),t(je,Zt),t(he,ea),t(N,ta),t(N,ue),t(ue,qe),t(qe,aa),t(ue,la),h(e,ut,r),h(e,P,r),t(P,C),t(C,Ne),w(Z,Ne,null),t(P,oa),t(P,Ce),t(Ce,sa),h(e,ft,r),h(e,d,r),t(d,Oe),t(Oe,na),t(d,ia),t(d,ee),t(ee,ra),t(ee,Ue),t(Ue,ha),t(ee,ua),t(d,fa),t(d,Ye),t(Ye,pa),t(d,ca),t(d,Fe),t(Fe,da),h(e,pt,r),h(e,S,r),t(S,O),t(O,Te),w(te,Te,null),t(S,ma),t(S,De),t(De,ga),h(e,ct,r),w(ae,e,r),h(e,dt,r),h(e,fe,r),t(fe,va),h(e,mt,r),h(e,m,r),t(m,pe),t(pe,ze),t(ze,ya),t(pe,wa),t(m,_a),t(m,ce),t(ce,Ge),t(Ge,Ea),t(ce,$a),t(m,ba),t(m,U),t(U,Ve),t(Ve,Aa),t(U,La),t(U,Be),t(Be,ka),t(U,Ia),t(m,Pa),t(m,de),t(de,We),t(We,Sa),t(de,xa),h(e,gt,r),h(e,x,r),t(x,Y),t(Y,Je),w(le,Je,null),t(x,Ha),t(x,Re),t(Re,Ma),h(e,vt,r),h(e,F,r),t(F,me),t(me,ja),t(me,oe),t(oe,qa),t(F,Na),t(F,ge),t(ge,Ca),t(ge,se),t(se,Oa),yt=!0},p:Vl,i(e){yt||(_(G.$$.fragment,e),_(B.$$.fragment,e),_(R.$$.fragment,e),_(K.$$.fragment,e),_(Q.$$.fragment,e),_(X.$$.fragment,e),_(Z.$$.fragment,e),_(te.$$.fragment,e),_(ae.$$.fragment,e),_(le.$$.fragment,e),yt=!0)},o(e){E(G.$$.fragment,e),E(B.$$.fragment,e),E(R.$$.fragment,e),E(K.$$.fragment,e),E(Q.$$.fragment,e),E(X.$$.fragment,e),E(Z.$$.fragment,e),E(te.$$.fragment,e),E(ae.$$.fragment,e),E(le.$$.fragment,e),yt=!1},d(e){a(b),e&&a(Qe),e&&a(A),$(G),e&&a(Xe),e&&a(V),e&&a(Ze),e&&a(L),$(B),e&&a(et),e&&a(g),e&&a(tt),e&&a(ie),e&&a(at),e&&a(c),e&&a(lt),e&&a(J),e&&a(ot),e&&a(k),$(R),e&&a(st),$(K,e),e&&a(nt),e&&a(I),$(Q),e&&a(it),$(X,e),e&&a(rt),e&&a(re),e&&a(ht),e&&a(N),e&&a(ut),e&&a(P),$(Z),e&&a(ft),e&&a(d),e&&a(pt),e&&a(S),$(te),e&&a(ct),$(ae,e),e&&a(dt),e&&a(fe),e&&a(mt),e&&a(m),e&&a(gt),e&&a(x),$(le),e&&a(vt),e&&a(F)}}}const Jl={local:"using-mlagents-at-hugging-face",sections:[{local:"exploring-mlagents-in-the-hub",title:"Exploring ML-Agents in the Hub"},{local:"install-the-library",title:"Install the library"},{local:"using-existing-models",title:"Using existing models"},{local:"visualize-an-agent-playing",title:"Visualize an agent playing"},{local:"sharing-your-models",title:"Sharing your models"},{local:"additional-resources",title:"Additional resources"}],title:"Using ML-Agents at Hugging Face"};function Rl(Wa){return Bl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Zl extends Fl{constructor(b){super();Tl(this,b,Rl,Wl,Dl,{})}}export{Zl as default,Jl as metadata};
