import{S as wt,i as Ht,s as qt,e as r,k as p,t as f,M as Ut,c as o,d as l,m,a,h as i,b as q,G as e,g as _,L as ct,v as $t}from"../../chunks/vendor-hf-doc-builder.js";function bt(Lt){let u,U,E,B,$,P,D,b,c,F,k,N,K,A,h,Q,C,n,d,y,V,W,X,S,I,Y,Z,g,T,M,tt,lt,et,G,w,st,rt,ot,O,H,at,ft,J,R,it,j,L,_t,z,x,nt;return{c(){u=r("meta"),U=p(),E=r("h1"),B=f("\u81EA\u7136\u8BED\u8A00\u5904\u7406"),$=p(),P=r("p"),D=f("\u5728\u8FDB\u5165 Transformer \u6A21\u578B\u4E4B\u524D\uFF0C\u8BA9\u6211\u4EEC\u5FEB\u901F\u6982\u8FF0\u4E00\u4E0B\u81EA\u7136\u8BED\u8A00\u5904\u7406\u662F\u4EC0\u4E48\u4EE5\u53CA\u6211\u4EEC\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u91CD\u89C6\u5B83\u3002"),b=p(),c=r("h2"),F=f("\u4EC0\u4E48\u662F\u81EA\u7136\u8BED\u8A00\u5904\u7406\uFF1F"),k=p(),N=r("p"),K=f("NLP \u662F\u8BED\u8A00\u5B66\u548C\u673A\u5668\u5B66\u4E60\u4EA4\u53C9\u9886\u57DF\uFF0C\u4E13\u6CE8\u4E8E\u7406\u89E3\u4E0E\u4EBA\u7C7B\u8BED\u8A00\u76F8\u5173\u7684\u4E00\u5207\u3002 NLP \u4EFB\u52A1\u7684\u76EE\u6807\u4E0D\u4EC5\u662F\u5355\u72EC\u7406\u89E3\u5355\u4E2A\u5355\u8BCD\uFF0C\u800C\u4E14\u662F\u80FD\u591F\u7406\u89E3\u8FD9\u4E9B\u5355\u8BCD\u7684\u4E0A\u4E0B\u6587\u3002"),A=p(),h=r("p"),Q=f("\u4EE5\u4E0B\u662F\u5E38\u89C1 NLP \u4EFB\u52A1\u7684\u5217\u8868\uFF0C\u6BCF\u4E2A\u4EFB\u52A1\u90FD\u6709\u4E00\u4E9B\u793A\u4F8B\uFF1A"),C=p(),n=r("ul"),d=r("li"),y=r("strong"),V=f("\u5BF9\u6574\u4E2A\u53E5\u5B50\u8FDB\u884C\u5206\u7C7B"),W=f(": \u83B7\u53D6\u8BC4\u8BBA\u7684\u60C5\u7EEA\uFF0C\u68C0\u6D4B\u7535\u5B50\u90AE\u4EF6\u662F\u5426\u4E3A\u5783\u573E\u90AE\u4EF6\uFF0C\u786E\u5B9A\u53E5\u5B50\u5728\u8BED\u6CD5\u4E0A\u662F\u5426\u6B63\u786E\u6216\u4E24\u4E2A\u53E5\u5B50\u5728\u903B\u8F91\u4E0A\u662F\u5426\u76F8\u5173"),X=p(),S=r("li"),I=r("strong"),Y=f("\u5BF9\u53E5\u5B50\u4E2D\u7684\u6BCF\u4E2A\u8BCD\u8FDB\u884C\u5206\u7C7B"),Z=f(": \u8BC6\u522B\u53E5\u5B50\u7684\u8BED\u6CD5\u6210\u5206\uFF08\u540D\u8BCD\u3001\u52A8\u8BCD\u3001\u5F62\u5BB9\u8BCD\uFF09\u6216\u547D\u540D\u5B9E\u4F53\uFF08\u4EBA\u3001\u5730\u70B9\u3001\u7EC4\u7EC7\uFF09"),g=p(),T=r("li"),M=r("strong"),tt=f("\u751F\u6210\u6587\u672C\u5185\u5BB9"),lt=f(": \u7528\u81EA\u52A8\u751F\u6210\u7684\u6587\u672C\u5B8C\u6210\u63D0\u793A\uFF0C\u7528\u5C4F\u853D\u8BCD\u586B\u5145\u6587\u672C\u4E2D\u7684\u7A7A\u767D"),et=p(),G=r("li"),w=r("strong"),st=f("\u4ECE\u6587\u672C\u4E2D\u63D0\u53D6\u7B54\u6848"),rt=f(": \u7ED9\u5B9A\u95EE\u9898\u548C\u4E0A\u4E0B\u6587\uFF0C\u6839\u636E\u4E0A\u4E0B\u6587\u4E2D\u63D0\u4F9B\u7684\u4FE1\u606F\u63D0\u53D6\u95EE\u9898\u7684\u7B54\u6848"),ot=p(),O=r("li"),H=r("strong"),at=f("\u4ECE\u8F93\u5165\u6587\u672C\u751F\u6210\u65B0\u53E5\u5B50"),ft=f(": \u5C06\u6587\u672C\u7FFB\u8BD1\u6210\u53E6\u4E00\u79CD\u8BED\u8A00\uFF0C\u603B\u7ED3\u6587\u672C"),J=p(),R=r("p"),it=f("NLP \u4E0D\u4EC5\u9650\u4E8E\u4E66\u9762\u6587\u672C\u3002\u5B83\u8FD8\u89E3\u51B3\u4E86\u8BED\u97F3\u8BC6\u522B\u548C\u8BA1\u7B97\u673A\u89C6\u89C9\u4E2D\u7684\u590D\u6742\u6311\u6218\uFF0C\u4F8B\u5982\u751F\u6210\u97F3\u9891\u6837\u672C\u7684\u8F6C\u5F55\u6216\u56FE\u50CF\u63CF\u8FF0\u3002"),j=p(),L=r("h2"),_t=f("\u4E3A\u4EC0\u4E48\u5177\u6709\u6311\u6218\u6027\uFF1F"),z=p(),x=r("p"),nt=f("\u8BA1\u7B97\u673A\u5904\u7406\u4FE1\u606F\u7684\u65B9\u5F0F\u4E0E\u4EBA\u7C7B\u4E0D\u540C\u3002\u4F8B\u5982\uFF0C\u5F53\u6211\u4EEC\u8BFB\u5230\u201C\u6211\u997F\u4E86\u201D\u8FD9\u53E5\u8BDD\u65F6\uFF0C\u6211\u4EEC\u5F88\u5BB9\u6613\u7406\u89E3\u5B83\u7684\u610F\u601D\u3002\u540C\u6837\uFF0C\u7ED9\u5B9A\u4E24\u4E2A\u53E5\u5B50\uFF0C\u4F8B\u5982\u201C\u6211\u5F88\u997F\u201D\u548C\u201C\u6211\u5F88\u4F24\u5FC3\u201D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8F7B\u677E\u786E\u5B9A\u5B83\u4EEC\u7684\u76F8\u4F3C\u7A0B\u5EA6\u3002\u5BF9\u4E8E\u673A\u5668\u5B66\u4E60 (ML) \u6A21\u578B\uFF0C\u6B64\u7C7B\u4EFB\u52A1\u66F4\u52A0\u56F0\u96BE\u3002\u6587\u672C\u9700\u8981\u4EE5\u4E00\u79CD\u4F7F\u6A21\u578B\u80FD\u591F\u4ECE\u4E2D\u5B66\u4E60\u7684\u65B9\u5F0F\u8FDB\u884C\u5904\u7406\u3002\u800C\u4E14\u7531\u4E8E\u8BED\u8A00\u5F88\u590D\u6742\uFF0C\u6211\u4EEC\u9700\u8981\u4ED4\u7EC6\u8003\u8651\u5FC5\u987B\u5982\u4F55\u8FDB\u884C\u8FD9\u79CD\u5904\u7406\u3002\u5173\u4E8E\u5982\u4F55\u8868\u793A\u6587\u672C\u5DF2\u7ECF\u505A\u4E86\u5F88\u591A\u7814\u7A76\uFF0C\u6211\u4EEC\u5C06\u5728\u4E0B\u4E00\u7AE0\u4E2D\u4ECB\u7ECD\u4E00\u4E9B\u65B9\u6CD5\u3002"),this.h()},l(t){const s=Ut('[data-svelte="svelte-1phssyn"]',document.head);u=o(s,"META",{name:!0,content:!0}),s.forEach(l),U=m(t),E=o(t,"H1",{id:!0});var Pt=a(E);B=i(Pt,"\u81EA\u7136\u8BED\u8A00\u5904\u7406"),Pt.forEach(l),$=m(t),P=o(t,"P",{});var Nt=a(P);D=i(Nt,"\u5728\u8FDB\u5165 Transformer \u6A21\u578B\u4E4B\u524D\uFF0C\u8BA9\u6211\u4EEC\u5FEB\u901F\u6982\u8FF0\u4E00\u4E0B\u81EA\u7136\u8BED\u8A00\u5904\u7406\u662F\u4EC0\u4E48\u4EE5\u53CA\u6211\u4EEC\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u91CD\u89C6\u5B83\u3002"),Nt.forEach(l),b=m(t),c=o(t,"H2",{id:!0});var ht=a(c);F=i(ht,"\u4EC0\u4E48\u662F\u81EA\u7136\u8BED\u8A00\u5904\u7406\uFF1F"),ht.forEach(l),k=m(t),N=o(t,"P",{});var dt=a(N);K=i(dt,"NLP \u662F\u8BED\u8A00\u5B66\u548C\u673A\u5668\u5B66\u4E60\u4EA4\u53C9\u9886\u57DF\uFF0C\u4E13\u6CE8\u4E8E\u7406\u89E3\u4E0E\u4EBA\u7C7B\u8BED\u8A00\u76F8\u5173\u7684\u4E00\u5207\u3002 NLP \u4EFB\u52A1\u7684\u76EE\u6807\u4E0D\u4EC5\u662F\u5355\u72EC\u7406\u89E3\u5355\u4E2A\u5355\u8BCD\uFF0C\u800C\u4E14\u662F\u80FD\u591F\u7406\u89E3\u8FD9\u4E9B\u5355\u8BCD\u7684\u4E0A\u4E0B\u6587\u3002"),dt.forEach(l),A=m(t),h=o(t,"P",{});var St=a(h);Q=i(St,"\u4EE5\u4E0B\u662F\u5E38\u89C1 NLP \u4EFB\u52A1\u7684\u5217\u8868\uFF0C\u6BCF\u4E2A\u4EFB\u52A1\u90FD\u6709\u4E00\u4E9B\u793A\u4F8B\uFF1A"),St.forEach(l),C=m(t),n=o(t,"UL",{});var v=a(n);d=o(v,"LI",{});var pt=a(d);y=o(pt,"STRONG",{});var Tt=a(y);V=i(Tt,"\u5BF9\u6574\u4E2A\u53E5\u5B50\u8FDB\u884C\u5206\u7C7B"),Tt.forEach(l),W=i(pt,": \u83B7\u53D6\u8BC4\u8BBA\u7684\u60C5\u7EEA\uFF0C\u68C0\u6D4B\u7535\u5B50\u90AE\u4EF6\u662F\u5426\u4E3A\u5783\u573E\u90AE\u4EF6\uFF0C\u786E\u5B9A\u53E5\u5B50\u5728\u8BED\u6CD5\u4E0A\u662F\u5426\u6B63\u786E\u6216\u4E24\u4E2A\u53E5\u5B50\u5728\u903B\u8F91\u4E0A\u662F\u5426\u76F8\u5173"),pt.forEach(l),X=m(v),S=o(v,"LI",{});var mt=a(S);I=o(mt,"STRONG",{});var Gt=a(I);Y=i(Gt,"\u5BF9\u53E5\u5B50\u4E2D\u7684\u6BCF\u4E2A\u8BCD\u8FDB\u884C\u5206\u7C7B"),Gt.forEach(l),Z=i(mt,": \u8BC6\u522B\u53E5\u5B50\u7684\u8BED\u6CD5\u6210\u5206\uFF08\u540D\u8BCD\u3001\u52A8\u8BCD\u3001\u5F62\u5BB9\u8BCD\uFF09\u6216\u547D\u540D\u5B9E\u4F53\uFF08\u4EBA\u3001\u5730\u70B9\u3001\u7EC4\u7EC7\uFF09"),mt.forEach(l),g=m(v),T=o(v,"LI",{});var vt=a(T);M=o(vt,"STRONG",{});var Ot=a(M);tt=i(Ot,"\u751F\u6210\u6587\u672C\u5185\u5BB9"),Ot.forEach(l),lt=i(vt,": \u7528\u81EA\u52A8\u751F\u6210\u7684\u6587\u672C\u5B8C\u6210\u63D0\u793A\uFF0C\u7528\u5C4F\u853D\u8BCD\u586B\u5145\u6587\u672C\u4E2D\u7684\u7A7A\u767D"),vt.forEach(l),et=m(v),G=o(v,"LI",{});var ut=a(G);w=o(ut,"STRONG",{});var Rt=a(w);st=i(Rt,"\u4ECE\u6587\u672C\u4E2D\u63D0\u53D6\u7B54\u6848"),Rt.forEach(l),rt=i(ut,": \u7ED9\u5B9A\u95EE\u9898\u548C\u4E0A\u4E0B\u6587\uFF0C\u6839\u636E\u4E0A\u4E0B\u6587\u4E2D\u63D0\u4F9B\u7684\u4FE1\u606F\u63D0\u53D6\u95EE\u9898\u7684\u7B54\u6848"),ut.forEach(l),ot=m(v),O=o(v,"LI",{});var Et=a(O);H=o(Et,"STRONG",{});var xt=a(H);at=i(xt,"\u4ECE\u8F93\u5165\u6587\u672C\u751F\u6210\u65B0\u53E5\u5B50"),xt.forEach(l),ft=i(Et,": \u5C06\u6587\u672C\u7FFB\u8BD1\u6210\u53E6\u4E00\u79CD\u8BED\u8A00\uFF0C\u603B\u7ED3\u6587\u672C"),Et.forEach(l),v.forEach(l),J=m(t),R=o(t,"P",{});var yt=a(R);it=i(yt,"NLP \u4E0D\u4EC5\u9650\u4E8E\u4E66\u9762\u6587\u672C\u3002\u5B83\u8FD8\u89E3\u51B3\u4E86\u8BED\u97F3\u8BC6\u522B\u548C\u8BA1\u7B97\u673A\u89C6\u89C9\u4E2D\u7684\u590D\u6742\u6311\u6218\uFF0C\u4F8B\u5982\u751F\u6210\u97F3\u9891\u6837\u672C\u7684\u8F6C\u5F55\u6216\u56FE\u50CF\u63CF\u8FF0\u3002"),yt.forEach(l),j=m(t),L=o(t,"H2",{id:!0});var It=a(L);_t=i(It,"\u4E3A\u4EC0\u4E48\u5177\u6709\u6311\u6218\u6027\uFF1F"),It.forEach(l),z=m(t),x=o(t,"P",{});var Mt=a(x);nt=i(Mt,"\u8BA1\u7B97\u673A\u5904\u7406\u4FE1\u606F\u7684\u65B9\u5F0F\u4E0E\u4EBA\u7C7B\u4E0D\u540C\u3002\u4F8B\u5982\uFF0C\u5F53\u6211\u4EEC\u8BFB\u5230\u201C\u6211\u997F\u4E86\u201D\u8FD9\u53E5\u8BDD\u65F6\uFF0C\u6211\u4EEC\u5F88\u5BB9\u6613\u7406\u89E3\u5B83\u7684\u610F\u601D\u3002\u540C\u6837\uFF0C\u7ED9\u5B9A\u4E24\u4E2A\u53E5\u5B50\uFF0C\u4F8B\u5982\u201C\u6211\u5F88\u997F\u201D\u548C\u201C\u6211\u5F88\u4F24\u5FC3\u201D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8F7B\u677E\u786E\u5B9A\u5B83\u4EEC\u7684\u76F8\u4F3C\u7A0B\u5EA6\u3002\u5BF9\u4E8E\u673A\u5668\u5B66\u4E60 (ML) \u6A21\u578B\uFF0C\u6B64\u7C7B\u4EFB\u52A1\u66F4\u52A0\u56F0\u96BE\u3002\u6587\u672C\u9700\u8981\u4EE5\u4E00\u79CD\u4F7F\u6A21\u578B\u80FD\u591F\u4ECE\u4E2D\u5B66\u4E60\u7684\u65B9\u5F0F\u8FDB\u884C\u5904\u7406\u3002\u800C\u4E14\u7531\u4E8E\u8BED\u8A00\u5F88\u590D\u6742\uFF0C\u6211\u4EEC\u9700\u8981\u4ED4\u7EC6\u8003\u8651\u5FC5\u987B\u5982\u4F55\u8FDB\u884C\u8FD9\u79CD\u5904\u7406\u3002\u5173\u4E8E\u5982\u4F55\u8868\u793A\u6587\u672C\u5DF2\u7ECF\u505A\u4E86\u5F88\u591A\u7814\u7A76\uFF0C\u6211\u4EEC\u5C06\u5728\u4E0B\u4E00\u7AE0\u4E2D\u4ECB\u7ECD\u4E00\u4E9B\u65B9\u6CD5\u3002"),Mt.forEach(l),this.h()},h(){q(u,"name","hf:doc:metadata"),q(u,"content",JSON.stringify(kt)),q(E,"id",""),q(c,"id",""),q(L,"id","")},m(t,s){e(document.head,u),_(t,U,s),_(t,E,s),e(E,B),_(t,$,s),_(t,P,s),e(P,D),_(t,b,s),_(t,c,s),e(c,F),_(t,k,s),_(t,N,s),e(N,K),_(t,A,s),_(t,h,s),e(h,Q),_(t,C,s),_(t,n,s),e(n,d),e(d,y),e(y,V),e(d,W),e(n,X),e(n,S),e(S,I),e(I,Y),e(S,Z),e(n,g),e(n,T),e(T,M),e(M,tt),e(T,lt),e(n,et),e(n,G),e(G,w),e(w,st),e(G,rt),e(n,ot),e(n,O),e(O,H),e(H,at),e(O,ft),_(t,J,s),_(t,R,s),e(R,it),_(t,j,s),_(t,L,s),e(L,_t),_(t,z,s),_(t,x,s),e(x,nt)},p:ct,i:ct,o:ct,d(t){l(u),t&&l(U),t&&l(E),t&&l($),t&&l(P),t&&l(b),t&&l(c),t&&l(k),t&&l(N),t&&l(A),t&&l(h),t&&l(C),t&&l(n),t&&l(J),t&&l(R),t&&l(j),t&&l(L),t&&l(z),t&&l(x)}}}const kt={local:"",sections:[{local:"",title:"\u4EC0\u4E48\u662F\u81EA\u7136\u8BED\u8A00\u5904\u7406\uFF1F"},{local:"",title:"\u4E3A\u4EC0\u4E48\u5177\u6709\u6311\u6218\u6027\uFF1F"}],title:"\u81EA\u7136\u8BED\u8A00\u5904\u7406"};function At(Lt){return $t(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Jt extends wt{constructor(u){super();Ht(this,u,At,bt,qt,{})}}export{Jt as default,kt as metadata};
