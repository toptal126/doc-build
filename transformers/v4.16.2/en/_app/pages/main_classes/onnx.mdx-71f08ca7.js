import{S as zn,i as Bn,s as Gn,e as n,k as i,w as c,t as l,L as jn,c as a,d as r,m as f,a as o,x as u,h as p,b as s,J as t,g as m,y as d,K as Jn,q as g,o as v,B as _}from"../../chunks/vendor-b1433968.js";import{D as b}from"../../chunks/Docstring-ff504c58.js";import{I as $e}from"../../chunks/IconCopyLink-7029626d.js";function Kn(Ht){let O,xe,w,E,Ae,ee,zt,De,Bt,at,T,Gt,qe,jt,Jt,ot,I,Kt,we,Ut,Qt,st,N,W,Te,te,Rt,Ie,Yt,it,ye,Zt,ft,C,Ee,er,be,tr,rr,Oe,nr,Ce,ar,or,Ne,sr,Pe,ir,lt,P,F,We,re,fr,Fe,lr,pt,$,ne,pr,Me,hr,mr,M,ae,cr,Xe,ur,dr,X,oe,gr,Le,vr,_r,L,se,$r,Ve,xr,wr,V,ie,yr,He,Er,ht,k,H,ze,fe,br,Be,Or,mt,S,z,le,Cr,Ge,Nr,Pr,B,pe,kr,he,Sr,je,Ar,Dr,ct,A,G,Je,me,qr,Ke,Tr,ut,ke,dt,D,j,Ue,ce,Ir,Qe,Wr,gt,J,Fr,Re,Mr,Xr,vt,q,K,Ye,ue,Lr,Ze,Vr,_t,x,U,de,Hr,et,zr,Br,Q,ge,Gr,tt,jr,Jr,R,ve,Kr,rt,Ur,Qr,Y,_e,Rr,nt,Yr,$t;return ee=new $e({}),te=new $e({}),re=new $e({}),ne=new b({props:{name:"class transformers.onnx.OnnxConfig",anchor:"transformers.onnx.OnnxConfig",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/onnx/config.py#L52"}}),ae=new b({props:{name:"flatten_output_collection_property",anchor:"transformers.onnx.OnnxConfig.flatten_output_collection_property",parameters:[{name:"name",val:": str"},{name:"field",val:": typing.Iterable[typing.Any]"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/onnx/config.py#L245",returnDescription:`
<p>Outputs with flattened structure and key mapping this new structure.</p>
`,returnType:`
<p>(Dict[str, Any])</p>
`}}),oe=new b({props:{name:"from_model_config",anchor:"transformers.onnx.OnnxConfig.from_model_config",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/onnx/config.py#L92",returnDescription:`
<p>OnnxConfig for this model</p>
`}}),se=new b({props:{name:"generate_dummy_inputs",anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs",parameters:[{name:"tokenizer",val:": PreTrainedTokenizer"},{name:"batch_size",val:": int = -1"},{name:"seq_length",val:": int = -1"},{name:"is_pair",val:": bool = False"},{name:"framework",val:": typing.Optional[transformers.file_utils.TensorType] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/onnx/config.py#L198",returnDescription:`
<p>Mapping[str, Tensor] holding the kwargs to provide to the model\u2019s forward function</p>
`}}),ie=new b({props:{name:"use_external_data_format",anchor:"transformers.onnx.OnnxConfig.use_external_data_format",parameters:[{name:"num_parameters",val:": int"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/onnx/config.py#L181",returnDescription:`
<p>True if model.num_parameters() * size_of(float32) >= 2Gb False otherwise</p>
`}}),fe=new $e({}),le=new b({props:{name:"fill_with_past_key_values_",anchor:"transformers.onnx.OnnxConfigWithPast.fill_with_past_key_values_",parameters:[{name:"inputs_or_outputs",val:": typing.Mapping[str, typing.Mapping[int, str]]"},{name:"direction",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/onnx/config.py#L366"}}),pe=new b({props:{name:"with_past",anchor:"transformers.onnx.OnnxConfigWithPast.with_past",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/onnx/config.py#L275",returnDescription:`
<p>OnnxConfig with <code>.use_past = True</code></p>
`}}),me=new $e({}),ce=new $e({}),ue=new $e({}),de=new b({props:{name:"check_supported_model_or_raise",anchor:"transformers.onnx.FeaturesManager.check_supported_model_or_raise",parameters:[{name:"model",val:": PreTrainedModel"},{name:"feature",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/onnx/features.py#L288",returnDescription:`
<p>(str) The type of the model (OnnxConfig) The OnnxConfig instance holding the model export properties.</p>
`}}),ge=new b({props:{name:"get_model_class_for_feature",anchor:"transformers.onnx.FeaturesManager.get_model_class_for_feature",parameters:[{name:"feature",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/onnx/features.py#L254",returnDescription:`
<p>The AutoModel class corresponding to the feature.</p>
`}}),ve=new b({props:{name:"get_model_from_feature",anchor:"transformers.onnx.FeaturesManager.get_model_from_feature",parameters:[{name:"feature",val:": str"},{name:"model",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/onnx/features.py#L273",returnDescription:`
<p>The instance of the model.</p>
`}}),_e=new b({props:{name:"get_supported_features_for_model_type",anchor:"transformers.onnx.FeaturesManager.get_supported_features_for_model_type",parameters:[{name:"model_type",val:": str"},{name:"model_name",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/onnx/features.py#L226",returnDescription:`
<p>The dictionary mapping each feature to a corresponding OnnxConfig constructor.</p>
`}}),{c(){O=n("meta"),xe=i(),w=n("h1"),E=n("a"),Ae=n("span"),c(ee.$$.fragment),zt=i(),De=n("span"),Bt=l("Exporting \u{1F917} Transformers models to ONNX"),at=i(),T=n("p"),Gt=l("\u{1F917} Transformers provides a "),qe=n("code"),jt=l("transformers.onnx"),Jt=l(` package that enables you to
convert model checkpoints to an ONNX graph by leveraging configuration objects.`),ot=i(),I=n("p"),Kt=l("See the "),we=n("a"),Ut=l("guide"),Qt=l(` on exporting \u{1F917} Transformers models for more
details.`),st=i(),N=n("h2"),W=n("a"),Te=n("span"),c(te.$$.fragment),Rt=i(),Ie=n("span"),Yt=l("ONNX Configurations"),it=i(),ye=n("p"),Zt=l(`We provide three abstract classes that you should inherit from, depending on the
type of model architecture you wish to export:`),ft=i(),C=n("ul"),Ee=n("li"),er=l("Encoder-based models inherit from "),be=n("a"),tr=l("OnnxConfig"),rr=i(),Oe=n("li"),nr=l("Decoder-based models inherit from "),Ce=n("a"),ar=l("OnnxConfigWithPast"),or=i(),Ne=n("li"),sr=l("Encoder-decoder models inherit from "),Pe=n("a"),ir=l("OnnxSeq2SeqConfigWithPast"),lt=i(),P=n("h3"),F=n("a"),We=n("span"),c(re.$$.fragment),fr=i(),Fe=n("span"),lr=l("OnnxConfig"),pt=i(),$=n("div"),c(ne.$$.fragment),pr=i(),Me=n("p"),hr=l("Base class for ONNX exportable model describing metadata on how to export the model through the ONNX format."),mr=i(),M=n("div"),c(ae.$$.fragment),cr=i(),Xe=n("p"),ur=l(`Flatten any potential nested structure expanding the name of the field with the index of the element within the
structure.`),dr=i(),X=n("div"),c(oe.$$.fragment),gr=i(),Le=n("p"),vr=l("Instantiate a OnnxConfig for a specific model"),_r=i(),L=n("div"),c(se.$$.fragment),$r=i(),Ve=n("p"),xr=l("Generate inputs to provide to the ONNX exporter for the specific framework"),wr=i(),V=n("div"),c(ie.$$.fragment),yr=i(),He=n("p"),Er=l("Flag indicating if the model requires using external data format"),ht=i(),k=n("h3"),H=n("a"),ze=n("span"),c(fe.$$.fragment),br=i(),Be=n("span"),Or=l("OnnxConfigWithPast"),mt=i(),S=n("div"),z=n("div"),c(le.$$.fragment),Cr=i(),Ge=n("p"),Nr=l("Fill the input_or_ouputs mapping with past_key_values dynamic axes considering."),Pr=i(),B=n("div"),c(pe.$$.fragment),kr=i(),he=n("p"),Sr=l("Instantiate a OnnxConfig with "),je=n("code"),Ar=l("use_past"),Dr=l(" attribute set to True"),ct=i(),A=n("h3"),G=n("a"),Je=n("span"),c(me.$$.fragment),qr=i(),Ke=n("span"),Tr=l("OnnxSeq2SeqConfigWithPast"),ut=i(),ke=n("div"),dt=i(),D=n("h2"),j=n("a"),Ue=n("span"),c(ce.$$.fragment),Ir=i(),Qe=n("span"),Wr=l("ONNX Features"),gt=i(),J=n("p"),Fr=l("Each ONNX configuration is associated with a set of "),Re=n("em"),Mr=l("features"),Xr=l(` that enable you
to export models for different types of topologies or tasks.`),vt=i(),q=n("h3"),K=n("a"),Ye=n("span"),c(ue.$$.fragment),Lr=i(),Ze=n("span"),Vr=l("FeaturesManager"),_t=i(),x=n("div"),U=n("div"),c(de.$$.fragment),Hr=i(),et=n("p"),zr=l("Check whether or not the model has the requested features."),Br=i(),Q=n("div"),c(ge.$$.fragment),Gr=i(),tt=n("p"),jr=l("Attempt to retrieve an AutoModel class from a feature name."),Jr=i(),R=n("div"),c(ve.$$.fragment),Kr=i(),rt=n("p"),Ur=l("Attempt to retrieve a model from a model\u2019s name and the feature to be enabled."),Qr=i(),Y=n("div"),c(_e.$$.fragment),Rr=i(),nt=n("p"),Yr=l("Try to retrieve the feature -> OnnxConfig constructor map from the model type."),this.h()},l(e){const h=jn('[data-svelte="svelte-1phssyn"]',document.head);O=a(h,"META",{name:!0,content:!0}),h.forEach(r),xe=f(e),w=a(e,"H1",{class:!0});var xt=o(w);E=a(xt,"A",{id:!0,class:!0,href:!0});var rn=o(E);Ae=a(rn,"SPAN",{});var nn=o(Ae);u(ee.$$.fragment,nn),nn.forEach(r),rn.forEach(r),zt=f(xt),De=a(xt,"SPAN",{});var an=o(De);Bt=p(an,"Exporting \u{1F917} Transformers models to ONNX"),an.forEach(r),xt.forEach(r),at=f(e),T=a(e,"P",{});var wt=o(T);Gt=p(wt,"\u{1F917} Transformers provides a "),qe=a(wt,"CODE",{});var on=o(qe);jt=p(on,"transformers.onnx"),on.forEach(r),Jt=p(wt,` package that enables you to
convert model checkpoints to an ONNX graph by leveraging configuration objects.`),wt.forEach(r),ot=f(e),I=a(e,"P",{});var yt=o(I);Kt=p(yt,"See the "),we=a(yt,"A",{href:!0});var sn=o(we);Ut=p(sn,"guide"),sn.forEach(r),Qt=p(yt,` on exporting \u{1F917} Transformers models for more
details.`),yt.forEach(r),st=f(e),N=a(e,"H2",{class:!0});var Et=o(N);W=a(Et,"A",{id:!0,class:!0,href:!0});var fn=o(W);Te=a(fn,"SPAN",{});var ln=o(Te);u(te.$$.fragment,ln),ln.forEach(r),fn.forEach(r),Rt=f(Et),Ie=a(Et,"SPAN",{});var pn=o(Ie);Yt=p(pn,"ONNX Configurations"),pn.forEach(r),Et.forEach(r),it=f(e),ye=a(e,"P",{});var hn=o(ye);Zt=p(hn,`We provide three abstract classes that you should inherit from, depending on the
type of model architecture you wish to export:`),hn.forEach(r),ft=f(e),C=a(e,"UL",{});var Se=o(C);Ee=a(Se,"LI",{});var Zr=o(Ee);er=p(Zr,"Encoder-based models inherit from "),be=a(Zr,"A",{href:!0});var mn=o(be);tr=p(mn,"OnnxConfig"),mn.forEach(r),Zr.forEach(r),rr=f(Se),Oe=a(Se,"LI",{});var en=o(Oe);nr=p(en,"Decoder-based models inherit from "),Ce=a(en,"A",{href:!0});var cn=o(Ce);ar=p(cn,"OnnxConfigWithPast"),cn.forEach(r),en.forEach(r),or=f(Se),Ne=a(Se,"LI",{});var tn=o(Ne);sr=p(tn,"Encoder-decoder models inherit from "),Pe=a(tn,"A",{href:!0});var un=o(Pe);ir=p(un,"OnnxSeq2SeqConfigWithPast"),un.forEach(r),tn.forEach(r),Se.forEach(r),lt=f(e),P=a(e,"H3",{class:!0});var bt=o(P);F=a(bt,"A",{id:!0,class:!0,href:!0});var dn=o(F);We=a(dn,"SPAN",{});var gn=o(We);u(re.$$.fragment,gn),gn.forEach(r),dn.forEach(r),fr=f(bt),Fe=a(bt,"SPAN",{});var vn=o(Fe);lr=p(vn,"OnnxConfig"),vn.forEach(r),bt.forEach(r),pt=f(e),$=a(e,"DIV",{class:!0});var y=o($);u(ne.$$.fragment,y),pr=f(y),Me=a(y,"P",{});var _n=o(Me);hr=p(_n,"Base class for ONNX exportable model describing metadata on how to export the model through the ONNX format."),_n.forEach(r),mr=f(y),M=a(y,"DIV",{class:!0});var Ot=o(M);u(ae.$$.fragment,Ot),cr=f(Ot),Xe=a(Ot,"P",{});var $n=o(Xe);ur=p($n,`Flatten any potential nested structure expanding the name of the field with the index of the element within the
structure.`),$n.forEach(r),Ot.forEach(r),dr=f(y),X=a(y,"DIV",{class:!0});var Ct=o(X);u(oe.$$.fragment,Ct),gr=f(Ct),Le=a(Ct,"P",{});var xn=o(Le);vr=p(xn,"Instantiate a OnnxConfig for a specific model"),xn.forEach(r),Ct.forEach(r),_r=f(y),L=a(y,"DIV",{class:!0});var Nt=o(L);u(se.$$.fragment,Nt),$r=f(Nt),Ve=a(Nt,"P",{});var wn=o(Ve);xr=p(wn,"Generate inputs to provide to the ONNX exporter for the specific framework"),wn.forEach(r),Nt.forEach(r),wr=f(y),V=a(y,"DIV",{class:!0});var Pt=o(V);u(ie.$$.fragment,Pt),yr=f(Pt),He=a(Pt,"P",{});var yn=o(He);Er=p(yn,"Flag indicating if the model requires using external data format"),yn.forEach(r),Pt.forEach(r),y.forEach(r),ht=f(e),k=a(e,"H3",{class:!0});var kt=o(k);H=a(kt,"A",{id:!0,class:!0,href:!0});var En=o(H);ze=a(En,"SPAN",{});var bn=o(ze);u(fe.$$.fragment,bn),bn.forEach(r),En.forEach(r),br=f(kt),Be=a(kt,"SPAN",{});var On=o(Be);Or=p(On,"OnnxConfigWithPast"),On.forEach(r),kt.forEach(r),mt=f(e),S=a(e,"DIV",{class:!0});var St=o(S);z=a(St,"DIV",{class:!0});var At=o(z);u(le.$$.fragment,At),Cr=f(At),Ge=a(At,"P",{});var Cn=o(Ge);Nr=p(Cn,"Fill the input_or_ouputs mapping with past_key_values dynamic axes considering."),Cn.forEach(r),At.forEach(r),Pr=f(St),B=a(St,"DIV",{class:!0});var Dt=o(B);u(pe.$$.fragment,Dt),kr=f(Dt),he=a(Dt,"P",{});var qt=o(he);Sr=p(qt,"Instantiate a OnnxConfig with "),je=a(qt,"CODE",{});var Nn=o(je);Ar=p(Nn,"use_past"),Nn.forEach(r),Dr=p(qt," attribute set to True"),qt.forEach(r),Dt.forEach(r),St.forEach(r),ct=f(e),A=a(e,"H3",{class:!0});var Tt=o(A);G=a(Tt,"A",{id:!0,class:!0,href:!0});var Pn=o(G);Je=a(Pn,"SPAN",{});var kn=o(Je);u(me.$$.fragment,kn),kn.forEach(r),Pn.forEach(r),qr=f(Tt),Ke=a(Tt,"SPAN",{});var Sn=o(Ke);Tr=p(Sn,"OnnxSeq2SeqConfigWithPast"),Sn.forEach(r),Tt.forEach(r),ut=f(e),ke=a(e,"DIV",{class:!0});var Hn=o(ke);Hn.forEach(r),dt=f(e),D=a(e,"H2",{class:!0});var It=o(D);j=a(It,"A",{id:!0,class:!0,href:!0});var An=o(j);Ue=a(An,"SPAN",{});var Dn=o(Ue);u(ce.$$.fragment,Dn),Dn.forEach(r),An.forEach(r),Ir=f(It),Qe=a(It,"SPAN",{});var qn=o(Qe);Wr=p(qn,"ONNX Features"),qn.forEach(r),It.forEach(r),gt=f(e),J=a(e,"P",{});var Wt=o(J);Fr=p(Wt,"Each ONNX configuration is associated with a set of "),Re=a(Wt,"EM",{});var Tn=o(Re);Mr=p(Tn,"features"),Tn.forEach(r),Xr=p(Wt,` that enable you
to export models for different types of topologies or tasks.`),Wt.forEach(r),vt=f(e),q=a(e,"H3",{class:!0});var Ft=o(q);K=a(Ft,"A",{id:!0,class:!0,href:!0});var In=o(K);Ye=a(In,"SPAN",{});var Wn=o(Ye);u(ue.$$.fragment,Wn),Wn.forEach(r),In.forEach(r),Lr=f(Ft),Ze=a(Ft,"SPAN",{});var Fn=o(Ze);Vr=p(Fn,"FeaturesManager"),Fn.forEach(r),Ft.forEach(r),_t=f(e),x=a(e,"DIV",{class:!0});var Z=o(x);U=a(Z,"DIV",{class:!0});var Mt=o(U);u(de.$$.fragment,Mt),Hr=f(Mt),et=a(Mt,"P",{});var Mn=o(et);zr=p(Mn,"Check whether or not the model has the requested features."),Mn.forEach(r),Mt.forEach(r),Br=f(Z),Q=a(Z,"DIV",{class:!0});var Xt=o(Q);u(ge.$$.fragment,Xt),Gr=f(Xt),tt=a(Xt,"P",{});var Xn=o(tt);jr=p(Xn,"Attempt to retrieve an AutoModel class from a feature name."),Xn.forEach(r),Xt.forEach(r),Jr=f(Z),R=a(Z,"DIV",{class:!0});var Lt=o(R);u(ve.$$.fragment,Lt),Kr=f(Lt),rt=a(Lt,"P",{});var Ln=o(rt);Ur=p(Ln,"Attempt to retrieve a model from a model\u2019s name and the feature to be enabled."),Ln.forEach(r),Lt.forEach(r),Qr=f(Z),Y=a(Z,"DIV",{class:!0});var Vt=o(Y);u(_e.$$.fragment,Vt),Rr=f(Vt),nt=a(Vt,"P",{});var Vn=o(nt);Yr=p(Vn,"Try to retrieve the feature -> OnnxConfig constructor map from the model type."),Vn.forEach(r),Vt.forEach(r),Z.forEach(r),this.h()},h(){s(O,"name","hf:doc:metadata"),s(O,"content",JSON.stringify(Un)),s(E,"id","exporting-transformers-models-to-onnx"),s(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(E,"href","#exporting-transformers-models-to-onnx"),s(w,"class","relative group"),s(we,"href","../serialization"),s(W,"id","onnx-configurations"),s(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(W,"href","#onnx-configurations"),s(N,"class","relative group"),s(be,"href","/docs/transformers/v4.16.2/en/main_classes/onnx#transformers.onnx.OnnxConfig"),s(Ce,"href","/docs/transformers/v4.16.2/en/main_classes/onnx#transformers.onnx.OnnxConfigWithPast"),s(Pe,"href","/docs/transformers/v4.16.2/en/main_classes/onnx#transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(F,"id","transformers.onnx.OnnxConfig"),s(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(F,"href","#transformers.onnx.OnnxConfig"),s(P,"class","relative group"),s(M,"class","docstring"),s(X,"class","docstring"),s(L,"class","docstring"),s(V,"class","docstring"),s($,"class","docstring"),s(H,"id","transformers.onnx.OnnxConfigWithPast"),s(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(H,"href","#transformers.onnx.OnnxConfigWithPast"),s(k,"class","relative group"),s(z,"class","docstring"),s(B,"class","docstring"),s(S,"class","docstring"),s(G,"id","transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(G,"href","#transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(A,"class","relative group"),s(ke,"class","docstring"),s(j,"id","onnx-features"),s(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(j,"href","#onnx-features"),s(D,"class","relative group"),s(K,"id","transformers.onnx.FeaturesManager"),s(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(K,"href","#transformers.onnx.FeaturesManager"),s(q,"class","relative group"),s(U,"class","docstring"),s(Q,"class","docstring"),s(R,"class","docstring"),s(Y,"class","docstring"),s(x,"class","docstring")},m(e,h){t(document.head,O),m(e,xe,h),m(e,w,h),t(w,E),t(E,Ae),d(ee,Ae,null),t(w,zt),t(w,De),t(De,Bt),m(e,at,h),m(e,T,h),t(T,Gt),t(T,qe),t(qe,jt),t(T,Jt),m(e,ot,h),m(e,I,h),t(I,Kt),t(I,we),t(we,Ut),t(I,Qt),m(e,st,h),m(e,N,h),t(N,W),t(W,Te),d(te,Te,null),t(N,Rt),t(N,Ie),t(Ie,Yt),m(e,it,h),m(e,ye,h),t(ye,Zt),m(e,ft,h),m(e,C,h),t(C,Ee),t(Ee,er),t(Ee,be),t(be,tr),t(C,rr),t(C,Oe),t(Oe,nr),t(Oe,Ce),t(Ce,ar),t(C,or),t(C,Ne),t(Ne,sr),t(Ne,Pe),t(Pe,ir),m(e,lt,h),m(e,P,h),t(P,F),t(F,We),d(re,We,null),t(P,fr),t(P,Fe),t(Fe,lr),m(e,pt,h),m(e,$,h),d(ne,$,null),t($,pr),t($,Me),t(Me,hr),t($,mr),t($,M),d(ae,M,null),t(M,cr),t(M,Xe),t(Xe,ur),t($,dr),t($,X),d(oe,X,null),t(X,gr),t(X,Le),t(Le,vr),t($,_r),t($,L),d(se,L,null),t(L,$r),t(L,Ve),t(Ve,xr),t($,wr),t($,V),d(ie,V,null),t(V,yr),t(V,He),t(He,Er),m(e,ht,h),m(e,k,h),t(k,H),t(H,ze),d(fe,ze,null),t(k,br),t(k,Be),t(Be,Or),m(e,mt,h),m(e,S,h),t(S,z),d(le,z,null),t(z,Cr),t(z,Ge),t(Ge,Nr),t(S,Pr),t(S,B),d(pe,B,null),t(B,kr),t(B,he),t(he,Sr),t(he,je),t(je,Ar),t(he,Dr),m(e,ct,h),m(e,A,h),t(A,G),t(G,Je),d(me,Je,null),t(A,qr),t(A,Ke),t(Ke,Tr),m(e,ut,h),m(e,ke,h),m(e,dt,h),m(e,D,h),t(D,j),t(j,Ue),d(ce,Ue,null),t(D,Ir),t(D,Qe),t(Qe,Wr),m(e,gt,h),m(e,J,h),t(J,Fr),t(J,Re),t(Re,Mr),t(J,Xr),m(e,vt,h),m(e,q,h),t(q,K),t(K,Ye),d(ue,Ye,null),t(q,Lr),t(q,Ze),t(Ze,Vr),m(e,_t,h),m(e,x,h),t(x,U),d(de,U,null),t(U,Hr),t(U,et),t(et,zr),t(x,Br),t(x,Q),d(ge,Q,null),t(Q,Gr),t(Q,tt),t(tt,jr),t(x,Jr),t(x,R),d(ve,R,null),t(R,Kr),t(R,rt),t(rt,Ur),t(x,Qr),t(x,Y),d(_e,Y,null),t(Y,Rr),t(Y,nt),t(nt,Yr),$t=!0},p:Jn,i(e){$t||(g(ee.$$.fragment,e),g(te.$$.fragment,e),g(re.$$.fragment,e),g(ne.$$.fragment,e),g(ae.$$.fragment,e),g(oe.$$.fragment,e),g(se.$$.fragment,e),g(ie.$$.fragment,e),g(fe.$$.fragment,e),g(le.$$.fragment,e),g(pe.$$.fragment,e),g(me.$$.fragment,e),g(ce.$$.fragment,e),g(ue.$$.fragment,e),g(de.$$.fragment,e),g(ge.$$.fragment,e),g(ve.$$.fragment,e),g(_e.$$.fragment,e),$t=!0)},o(e){v(ee.$$.fragment,e),v(te.$$.fragment,e),v(re.$$.fragment,e),v(ne.$$.fragment,e),v(ae.$$.fragment,e),v(oe.$$.fragment,e),v(se.$$.fragment,e),v(ie.$$.fragment,e),v(fe.$$.fragment,e),v(le.$$.fragment,e),v(pe.$$.fragment,e),v(me.$$.fragment,e),v(ce.$$.fragment,e),v(ue.$$.fragment,e),v(de.$$.fragment,e),v(ge.$$.fragment,e),v(ve.$$.fragment,e),v(_e.$$.fragment,e),$t=!1},d(e){r(O),e&&r(xe),e&&r(w),_(ee),e&&r(at),e&&r(T),e&&r(ot),e&&r(I),e&&r(st),e&&r(N),_(te),e&&r(it),e&&r(ye),e&&r(ft),e&&r(C),e&&r(lt),e&&r(P),_(re),e&&r(pt),e&&r($),_(ne),_(ae),_(oe),_(se),_(ie),e&&r(ht),e&&r(k),_(fe),e&&r(mt),e&&r(S),_(le),_(pe),e&&r(ct),e&&r(A),_(me),e&&r(ut),e&&r(ke),e&&r(dt),e&&r(D),_(ce),e&&r(gt),e&&r(J),e&&r(vt),e&&r(q),_(ue),e&&r(_t),e&&r(x),_(de),_(ge),_(ve),_(_e)}}}const Un={local:"exporting-transformers-models-to-onnx",sections:[{local:"onnx-configurations",sections:[{local:"transformers.onnx.OnnxConfig",title:"OnnxConfig"},{local:"transformers.onnx.OnnxConfigWithPast",title:"OnnxConfigWithPast"},{local:"transformers.onnx.OnnxSeq2SeqConfigWithPast",title:"OnnxSeq2SeqConfigWithPast"}],title:"ONNX Configurations"},{local:"onnx-features",sections:[{local:"transformers.onnx.FeaturesManager",title:"FeaturesManager"}],title:"ONNX Features"}],title:"Exporting \u{1F917} Transformers models to ONNX"};function Qn(Ht,O,xe){let{fw:w}=O;return Ht.$$set=E=>{"fw"in E&&xe(0,w=E.fw)},[w]}class ea extends zn{constructor(O){super();Bn(this,O,Qn,Kn,Gn,{fw:0})}}export{ea as default,Un as metadata};
