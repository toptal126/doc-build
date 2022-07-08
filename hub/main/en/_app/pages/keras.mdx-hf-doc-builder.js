import{S as As,i as Ps,s as Is,e as s,k as c,w as C,t as i,N as js,c as r,d as a,m as f,a as o,x as D,h as n,b as l,P as be,G as t,g as h,y as L,L as Ts,q as G,o as M,B as U,v as Ss}from"../chunks/vendor-hf-doc-builder.js";import{I as Ue}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as Oa}from"../chunks/CodeBlock-hf-doc-builder.js";function Hs(Ca){let b,Re,y,I,ye,R,xt,ke,At,Fe,F,we,Pt,It,Be,k,j,Ee,B,jt,$e,Tt,Ye,g,St,xe,Ht,Kt,Y,qt,Nt,Je,ue,Ot,Ve,_,Ae,Ct,Dt,Pe,Lt,Gt,Ie,Mt,ze,w,T,je,J,Ut,Te,Rt,Qe,S,Ft,Se,Bt,Yt,We,V,Xe,p,Jt,He,Vt,zt,Ke,Qt,Wt,z,Xt,Zt,Ze,Q,et,H,ea,qe,ta,aa,tt,E,he,Da,sa,ce,La,at,$,fe,Ga,ra,de,Ma,st,x,K,Ne,W,oa,Oe,la,rt,d,ia,Ce,na,ua,De,ha,ca,Le,fa,da,X,pa,ma,ot,Z,lt,pe,ga,it,A,me,Ua,_a,ge,Ra,nt,P,q,Ge,ee,va,Me,ba,ut,m,te,ya,ae,ka,wa,Ea,se,$a,re,xa,Aa,Pa,oe,Ia,le,ja,Ta,Sa,ie,Ha,ne,Ka,qa,ht;return R=new Ue({}),B=new Ue({}),J=new Ue({}),V=new Oa({props:{code:'pip install huggingface_hub["tensorflow"]',highlighted:'pip <span class="hljs-keyword">install</span> huggingface_hub[<span class="hljs-string">&quot;tensorflow&quot;</span>]'}}),Q=new Oa({props:{code:`from huggingface_hub import from_pretrained_keras

model = from_pretrained_keras("keras-io/mobile-vit-xxs")
prediction = model.predict(image)
prediction = tf.squeeze(tf.round(prediction))
print(f'The image is a {classes[(np.argmax(prediction))]}!')

# The image is a sunflower!`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> from_pretrained_keras

model = from_pretrained_keras(<span class="hljs-string">&quot;keras-io/mobile-vit-xxs&quot;</span>)
prediction = model.predict(image)
prediction = tf.squeeze(tf.<span class="hljs-built_in">round</span>(prediction))
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&#x27;The image is a <span class="hljs-subst">{classes[(np.argmax(prediction))]}</span>!&#x27;</span>)

<span class="hljs-comment"># The image is a sunflower!</span>`}}),W=new Ue({}),Z=new Oa({props:{code:`from huggingface_hub import push_to_hub_keras

push_to_hub_keras(model,
    "your-username/your-model-name",
    "your-tensorboard-log-directory",
    tags = ["object-detection", "some_other_tag"],
    **model_save_kwargs,
)`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> push_to_hub_keras

push_to_hub_keras(model,
    <span class="hljs-string">&quot;your-username/your-model-name&quot;</span>,
    <span class="hljs-string">&quot;your-tensorboard-log-directory&quot;</span>,
    tags = [<span class="hljs-string">&quot;object-detection&quot;</span>, <span class="hljs-string">&quot;some_other_tag&quot;</span>],
    **model_save_kwargs,
)`}}),ee=new Ue({}),{c(){b=s("meta"),Re=c(),y=s("h1"),I=s("a"),ye=s("span"),C(R.$$.fragment),xt=c(),ke=s("span"),At=i("Using Keras at Hugging Face"),Fe=c(),F=s("p"),we=s("code"),Pt=i("keras"),It=i(" is an open-source machine learning library that uses a consistent and simple API to build models leveraging TensorFlow and its ecosystem."),Be=c(),k=s("h2"),j=s("a"),Ee=s("span"),C(B.$$.fragment),jt=c(),$e=s("span"),Tt=i("Exploring Keras in the Hub"),Ye=c(),g=s("p"),St=i("You can find over 200 "),xe=s("code"),Ht=i("keras"),Kt=i(" models by filtering at the left of the "),Y=s("a"),qt=i("models page"),Nt=i("."),Je=c(),ue=s("p"),Ot=i("All models on the Hub come up with useful feature:"),Ve=c(),_=s("ol"),Ae=s("li"),Ct=i("An automatically generated model card with a description, a plot of the model, and more."),Dt=c(),Pe=s("li"),Lt=i("Metadata tags that help for discoverability and contain information such as license."),Gt=c(),Ie=s("li"),Mt=i("If provided by the model owner, TensorBoard logs are hosted on the Keras repositories."),ze=c(),w=s("h2"),T=s("a"),je=s("span"),C(J.$$.fragment),Ut=c(),Te=s("span"),Rt=i("Using existing models"),Qe=c(),S=s("p"),Ft=i("The "),Se=s("code"),Bt=i("huggingface_hub"),Yt=i(" library is a lightweight Python client with utility functions to download models from the Hub."),We=c(),C(V.$$.fragment),Xe=c(),p=s("p"),Jt=i("Once you have the library installed, you just need to use the "),He=s("code"),Vt=i("from_pretrained_keras"),zt=i(" method. Read more about "),Ke=s("code"),Qt=i("from_pretrained_keras"),Wt=c(),z=s("a"),Xt=i("here"),Zt=i("."),Ze=c(),C(Q.$$.fragment),et=c(),H=s("p"),ea=i("If you want to see how to load a specific model, you can click "),qe=s("strong"),ta=i("Use in keras"),aa=i(" and you will be given a working snippet that you can load it!"),tt=c(),E=s("div"),he=s("img"),sa=c(),ce=s("img"),at=c(),$=s("div"),fe=s("img"),ra=c(),de=s("img"),st=c(),x=s("h2"),K=s("a"),Ne=s("span"),C(W.$$.fragment),oa=c(),Oe=s("span"),la=i("Sharing your models"),rt=c(),d=s("p"),ia=i("You can share your "),Ce=s("code"),na=i("keras"),ua=i(" models by using the "),De=s("code"),ha=i("push_to_hub_keras"),ca=i(" method. This will generate a model card that includes your model\u2019s hyperparameters, plot of your model and couple of sections related to the usage purpose of your model, model biases and limitations about putting the model in production. This saves the metrics of your model in a JSON file as well. Read more about "),Le=s("code"),fa=i("push_to_hub_keras"),da=c(),X=s("a"),pa=i("here"),ma=i("."),ot=c(),C(Z.$$.fragment),lt=c(),pe=s("p"),ga=i("The repository will host your TensorBoard traces like below."),it=c(),A=s("div"),me=s("img"),_a=c(),ge=s("img"),nt=c(),P=s("h2"),q=s("a"),Ge=s("span"),C(ee.$$.fragment),va=c(),Me=s("span"),ba=i("Additional resources"),ut=c(),m=s("ul"),te=s("li"),ya=i("Keras Developer "),ae=s("a"),ka=i("Guides"),wa=i("."),Ea=c(),se=s("li"),$a=i("Keras "),re=s("a"),xa=i("examples"),Aa=i("."),Pa=c(),oe=s("li"),Ia=i("Keras "),le=s("a"),ja=i("examples on \u{1F917} Hub"),Ta=i("."),Sa=c(),ie=s("li"),Ha=i("For more capabilities of the Keras integration, check out "),ne=s("a"),Ka=i("Putting Keras on \u{1F917} Hub for Collaborative Training and Reproducibility"),qa=i(" tutorial."),this.h()},l(e){const u=js('[data-svelte="svelte-1phssyn"]',document.head);b=r(u,"META",{name:!0,content:!0}),u.forEach(a),Re=f(e),y=r(e,"H1",{class:!0});var ct=o(y);I=r(ct,"A",{id:!0,class:!0,href:!0});var Fa=o(I);ye=r(Fa,"SPAN",{});var Ba=o(ye);D(R.$$.fragment,Ba),Ba.forEach(a),Fa.forEach(a),xt=f(ct),ke=r(ct,"SPAN",{});var Ya=o(ke);At=n(Ya,"Using Keras at Hugging Face"),Ya.forEach(a),ct.forEach(a),Fe=f(e),F=r(e,"P",{});var Na=o(F);we=r(Na,"CODE",{});var Ja=o(we);Pt=n(Ja,"keras"),Ja.forEach(a),It=n(Na," is an open-source machine learning library that uses a consistent and simple API to build models leveraging TensorFlow and its ecosystem."),Na.forEach(a),Be=f(e),k=r(e,"H2",{class:!0});var ft=o(k);j=r(ft,"A",{id:!0,class:!0,href:!0});var Va=o(j);Ee=r(Va,"SPAN",{});var za=o(Ee);D(B.$$.fragment,za),za.forEach(a),Va.forEach(a),jt=f(ft),$e=r(ft,"SPAN",{});var Qa=o($e);Tt=n(Qa,"Exploring Keras in the Hub"),Qa.forEach(a),ft.forEach(a),Ye=f(e),g=r(e,"P",{});var _e=o(g);St=n(_e,"You can find over 200 "),xe=r(_e,"CODE",{});var Wa=o(xe);Ht=n(Wa,"keras"),Wa.forEach(a),Kt=n(_e," models by filtering at the left of the "),Y=r(_e,"A",{href:!0,rel:!0});var Xa=o(Y);qt=n(Xa,"models page"),Xa.forEach(a),Nt=n(_e,"."),_e.forEach(a),Je=f(e),ue=r(e,"P",{});var Za=o(ue);Ot=n(Za,"All models on the Hub come up with useful feature:"),Za.forEach(a),Ve=f(e),_=r(e,"OL",{});var ve=o(_);Ae=r(ve,"LI",{});var es=o(Ae);Ct=n(es,"An automatically generated model card with a description, a plot of the model, and more."),es.forEach(a),Dt=f(ve),Pe=r(ve,"LI",{});var ts=o(Pe);Lt=n(ts,"Metadata tags that help for discoverability and contain information such as license."),ts.forEach(a),Gt=f(ve),Ie=r(ve,"LI",{});var as=o(Ie);Mt=n(as,"If provided by the model owner, TensorBoard logs are hosted on the Keras repositories."),as.forEach(a),ve.forEach(a),ze=f(e),w=r(e,"H2",{class:!0});var dt=o(w);T=r(dt,"A",{id:!0,class:!0,href:!0});var ss=o(T);je=r(ss,"SPAN",{});var rs=o(je);D(J.$$.fragment,rs),rs.forEach(a),ss.forEach(a),Ut=f(dt),Te=r(dt,"SPAN",{});var os=o(Te);Rt=n(os,"Using existing models"),os.forEach(a),dt.forEach(a),Qe=f(e),S=r(e,"P",{});var pt=o(S);Ft=n(pt,"The "),Se=r(pt,"CODE",{});var ls=o(Se);Bt=n(ls,"huggingface_hub"),ls.forEach(a),Yt=n(pt," library is a lightweight Python client with utility functions to download models from the Hub."),pt.forEach(a),We=f(e),D(V.$$.fragment,e),Xe=f(e),p=r(e,"P",{});var N=o(p);Jt=n(N,"Once you have the library installed, you just need to use the "),He=r(N,"CODE",{});var is=o(He);Vt=n(is,"from_pretrained_keras"),is.forEach(a),zt=n(N," method. Read more about "),Ke=r(N,"CODE",{});var ns=o(Ke);Qt=n(ns,"from_pretrained_keras"),ns.forEach(a),Wt=f(N),z=r(N,"A",{href:!0,rel:!0});var us=o(z);Xt=n(us,"here"),us.forEach(a),Zt=n(N,"."),N.forEach(a),Ze=f(e),D(Q.$$.fragment,e),et=f(e),H=r(e,"P",{});var mt=o(H);ea=n(mt,"If you want to see how to load a specific model, you can click "),qe=r(mt,"STRONG",{});var hs=o(qe);ta=n(hs,"Use in keras"),hs.forEach(a),aa=n(mt," and you will be given a working snippet that you can load it!"),mt.forEach(a),tt=f(e),E=r(e,"DIV",{class:!0});var gt=o(E);he=r(gt,"IMG",{class:!0,src:!0}),sa=f(gt),ce=r(gt,"IMG",{class:!0,src:!0}),gt.forEach(a),at=f(e),$=r(e,"DIV",{class:!0});var _t=o($);fe=r(_t,"IMG",{class:!0,src:!0}),ra=f(_t),de=r(_t,"IMG",{class:!0,src:!0}),_t.forEach(a),st=f(e),x=r(e,"H2",{class:!0});var vt=o(x);K=r(vt,"A",{id:!0,class:!0,href:!0});var cs=o(K);Ne=r(cs,"SPAN",{});var fs=o(Ne);D(W.$$.fragment,fs),fs.forEach(a),cs.forEach(a),oa=f(vt),Oe=r(vt,"SPAN",{});var ds=o(Oe);la=n(ds,"Sharing your models"),ds.forEach(a),vt.forEach(a),rt=f(e),d=r(e,"P",{});var v=o(d);ia=n(v,"You can share your "),Ce=r(v,"CODE",{});var ps=o(Ce);na=n(ps,"keras"),ps.forEach(a),ua=n(v," models by using the "),De=r(v,"CODE",{});var ms=o(De);ha=n(ms,"push_to_hub_keras"),ms.forEach(a),ca=n(v," method. This will generate a model card that includes your model\u2019s hyperparameters, plot of your model and couple of sections related to the usage purpose of your model, model biases and limitations about putting the model in production. This saves the metrics of your model in a JSON file as well. Read more about "),Le=r(v,"CODE",{});var gs=o(Le);fa=n(gs,"push_to_hub_keras"),gs.forEach(a),da=f(v),X=r(v,"A",{href:!0,rel:!0});var _s=o(X);pa=n(_s,"here"),_s.forEach(a),ma=n(v,"."),v.forEach(a),ot=f(e),D(Z.$$.fragment,e),lt=f(e),pe=r(e,"P",{});var vs=o(pe);ga=n(vs,"The repository will host your TensorBoard traces like below."),vs.forEach(a),it=f(e),A=r(e,"DIV",{class:!0});var bt=o(A);me=r(bt,"IMG",{class:!0,src:!0}),_a=f(bt),ge=r(bt,"IMG",{class:!0,src:!0}),bt.forEach(a),nt=f(e),P=r(e,"H2",{class:!0});var yt=o(P);q=r(yt,"A",{id:!0,class:!0,href:!0});var bs=o(q);Ge=r(bs,"SPAN",{});var ys=o(Ge);D(ee.$$.fragment,ys),ys.forEach(a),bs.forEach(a),va=f(yt),Me=r(yt,"SPAN",{});var ks=o(Me);ba=n(ks,"Additional resources"),ks.forEach(a),yt.forEach(a),ut=f(e),m=r(e,"UL",{});var O=o(m);te=r(O,"LI",{});var kt=o(te);ya=n(kt,"Keras Developer "),ae=r(kt,"A",{href:!0,rel:!0});var ws=o(ae);ka=n(ws,"Guides"),ws.forEach(a),wa=n(kt,"."),kt.forEach(a),Ea=f(O),se=r(O,"LI",{});var wt=o(se);$a=n(wt,"Keras "),re=r(wt,"A",{href:!0,rel:!0});var Es=o(re);xa=n(Es,"examples"),Es.forEach(a),Aa=n(wt,"."),wt.forEach(a),Pa=f(O),oe=r(O,"LI",{});var Et=o(oe);Ia=n(Et,"Keras "),le=r(Et,"A",{href:!0,rel:!0});var $s=o(le);ja=n($s,"examples on \u{1F917} Hub"),$s.forEach(a),Ta=n(Et,"."),Et.forEach(a),Sa=f(O),ie=r(O,"LI",{});var $t=o(ie);Ha=n($t,"For more capabilities of the Keras integration, check out "),ne=r($t,"A",{href:!0,rel:!0});var xs=o(ne);Ka=n(xs,"Putting Keras on \u{1F917} Hub for Collaborative Training and Reproducibility"),xs.forEach(a),qa=n($t," tutorial."),$t.forEach(a),O.forEach(a),this.h()},h(){l(b,"name","hf:doc:metadata"),l(b,"content",JSON.stringify(Ks)),l(I,"id","using-keras-at-hugging-face"),l(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(I,"href","#using-keras-at-hugging-face"),l(y,"class","relative group"),l(j,"id","exploring-keras-in-the-hub"),l(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(j,"href","#exploring-keras-in-the-hub"),l(k,"class","relative group"),l(Y,"href","https://huggingface.co/models?library=keras&sort=downloads"),l(Y,"rel","nofollow"),l(T,"id","using-existing-models"),l(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(T,"href","#using-existing-models"),l(w,"class","relative group"),l(z,"href","https://huggingface.co/docs/huggingface_hub/main/en/package_reference/mixins#huggingface_hub.from_pretrained_keras"),l(z,"rel","nofollow"),l(he,"class","block dark:hidden"),be(he.src,Da="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/libraries-keras_snippet1.png")||l(he,"src",Da),l(ce,"class","hidden dark:block"),be(ce.src,La="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/libraries-keras_snippet1-dark.png")||l(ce,"src",La),l(E,"class","flex justify-center"),l(fe,"class","block dark:hidden"),be(fe.src,Ga="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/libraries-keras_snippet2.png")||l(fe,"src",Ga),l(de,"class","hidden dark:block"),be(de.src,Ma="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/libraries-keras_snippet2-dark.png")||l(de,"src",Ma),l($,"class","flex justify-center"),l(K,"id","sharing-your-models"),l(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(K,"href","#sharing-your-models"),l(x,"class","relative group"),l(X,"href","https://huggingface.co/docs/huggingface_hub/main/en/package_reference/mixins#huggingface_hub.push_to_hub_keras"),l(X,"rel","nofollow"),l(me,"class","block dark:hidden"),be(me.src,Ua="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/libraries-keras_tensorboard.png")||l(me,"src",Ua),l(ge,"class","hidden dark:block"),be(ge.src,Ra="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/libraries-keras_tensorboard-dark.png")||l(ge,"src",Ra),l(A,"class","flex justify-center"),l(q,"id","additional-resources"),l(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(q,"href","#additional-resources"),l(P,"class","relative group"),l(ae,"href","https://keras.io/guides/"),l(ae,"rel","nofollow"),l(re,"href","https://keras.io/examples/"),l(re,"rel","nofollow"),l(le,"href","https://huggingface.co/keras-io"),l(le,"rel","nofollow"),l(ne,"href","https://merveenoyan.medium.com/putting-keras-on-hub-for-collaborative-training-and-reproducibility-9018301de877"),l(ne,"rel","nofollow")},m(e,u){t(document.head,b),h(e,Re,u),h(e,y,u),t(y,I),t(I,ye),L(R,ye,null),t(y,xt),t(y,ke),t(ke,At),h(e,Fe,u),h(e,F,u),t(F,we),t(we,Pt),t(F,It),h(e,Be,u),h(e,k,u),t(k,j),t(j,Ee),L(B,Ee,null),t(k,jt),t(k,$e),t($e,Tt),h(e,Ye,u),h(e,g,u),t(g,St),t(g,xe),t(xe,Ht),t(g,Kt),t(g,Y),t(Y,qt),t(g,Nt),h(e,Je,u),h(e,ue,u),t(ue,Ot),h(e,Ve,u),h(e,_,u),t(_,Ae),t(Ae,Ct),t(_,Dt),t(_,Pe),t(Pe,Lt),t(_,Gt),t(_,Ie),t(Ie,Mt),h(e,ze,u),h(e,w,u),t(w,T),t(T,je),L(J,je,null),t(w,Ut),t(w,Te),t(Te,Rt),h(e,Qe,u),h(e,S,u),t(S,Ft),t(S,Se),t(Se,Bt),t(S,Yt),h(e,We,u),L(V,e,u),h(e,Xe,u),h(e,p,u),t(p,Jt),t(p,He),t(He,Vt),t(p,zt),t(p,Ke),t(Ke,Qt),t(p,Wt),t(p,z),t(z,Xt),t(p,Zt),h(e,Ze,u),L(Q,e,u),h(e,et,u),h(e,H,u),t(H,ea),t(H,qe),t(qe,ta),t(H,aa),h(e,tt,u),h(e,E,u),t(E,he),t(E,sa),t(E,ce),h(e,at,u),h(e,$,u),t($,fe),t($,ra),t($,de),h(e,st,u),h(e,x,u),t(x,K),t(K,Ne),L(W,Ne,null),t(x,oa),t(x,Oe),t(Oe,la),h(e,rt,u),h(e,d,u),t(d,ia),t(d,Ce),t(Ce,na),t(d,ua),t(d,De),t(De,ha),t(d,ca),t(d,Le),t(Le,fa),t(d,da),t(d,X),t(X,pa),t(d,ma),h(e,ot,u),L(Z,e,u),h(e,lt,u),h(e,pe,u),t(pe,ga),h(e,it,u),h(e,A,u),t(A,me),t(A,_a),t(A,ge),h(e,nt,u),h(e,P,u),t(P,q),t(q,Ge),L(ee,Ge,null),t(P,va),t(P,Me),t(Me,ba),h(e,ut,u),h(e,m,u),t(m,te),t(te,ya),t(te,ae),t(ae,ka),t(te,wa),t(m,Ea),t(m,se),t(se,$a),t(se,re),t(re,xa),t(se,Aa),t(m,Pa),t(m,oe),t(oe,Ia),t(oe,le),t(le,ja),t(oe,Ta),t(m,Sa),t(m,ie),t(ie,Ha),t(ie,ne),t(ne,Ka),t(ie,qa),ht=!0},p:Ts,i(e){ht||(G(R.$$.fragment,e),G(B.$$.fragment,e),G(J.$$.fragment,e),G(V.$$.fragment,e),G(Q.$$.fragment,e),G(W.$$.fragment,e),G(Z.$$.fragment,e),G(ee.$$.fragment,e),ht=!0)},o(e){M(R.$$.fragment,e),M(B.$$.fragment,e),M(J.$$.fragment,e),M(V.$$.fragment,e),M(Q.$$.fragment,e),M(W.$$.fragment,e),M(Z.$$.fragment,e),M(ee.$$.fragment,e),ht=!1},d(e){a(b),e&&a(Re),e&&a(y),U(R),e&&a(Fe),e&&a(F),e&&a(Be),e&&a(k),U(B),e&&a(Ye),e&&a(g),e&&a(Je),e&&a(ue),e&&a(Ve),e&&a(_),e&&a(ze),e&&a(w),U(J),e&&a(Qe),e&&a(S),e&&a(We),U(V,e),e&&a(Xe),e&&a(p),e&&a(Ze),U(Q,e),e&&a(et),e&&a(H),e&&a(tt),e&&a(E),e&&a(at),e&&a($),e&&a(st),e&&a(x),U(W),e&&a(rt),e&&a(d),e&&a(ot),U(Z,e),e&&a(lt),e&&a(pe),e&&a(it),e&&a(A),e&&a(nt),e&&a(P),U(ee),e&&a(ut),e&&a(m)}}}const Ks={local:"using-keras-at-hugging-face",sections:[{local:"exploring-keras-in-the-hub",title:"Exploring Keras in the Hub"},{local:"using-existing-models",title:"Using existing models"},{local:"sharing-your-models",title:"Sharing your models"},{local:"additional-resources",title:"Additional resources"}],title:"Using Keras at Hugging Face"};function qs(Ca){return Ss(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ds extends As{constructor(b){super();Ps(this,b,qs,Hs,Is,{})}}export{Ds as default,Ks as metadata};
