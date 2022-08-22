import{S as Ui,i as Xi,s as Ki,e as c,k as o,w as v,t as s,M as Ji,c as i,d as h,m as u,a as l,x as f,h as g,b as a,G as t,g as r,y as d,L as Wi,q as y,o as b,B as k,v as Yi}from"../../chunks/vendor-hf-doc-builder.js";import{I as _}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as Zi}from"../../chunks/CodeBlock-hf-doc-builder.js";function nl(Sc){let $,fh,w,L,Cn,W,pt,Tn,mt,dh,yn,vt,yh,bn,ft,bh,I,dt,Ln,yt,bt,kh,D,kt,Y,_t,Et,_h,kn,$t,Eh,p,In,wt,Pt,Dn,qt,xt,Vn,At,Nt,jn,Mt,St,Bn,Ht,Ct,On,Tt,Lt,Rn,It,$h,_n,Dt,wh,P,V,Qn,Z,Vt,zn,jt,Ph,En,Bt,qh,q,j,Fn,nn,Ot,Gn,Rt,xh,$n,Qt,Ah,x,B,Un,hn,zt,Xn,Ft,Nh,O,Gt,Kn,Ut,Xt,Mh,A,R,Jn,tn,Kt,Wn,Jt,Sh,wn,Wt,Hh,N,Q,Yn,cn,Yt,Zn,Zt,Ch,Pn,nc,Th,M,z,nh,ln,hc,hh,tc,Lh,qn,cc,Ih,S,F,th,en,ic,ch,lc,Dh,xn,ec,Vh,H,G,ih,rn,rc,lh,ac,jh,An,oc,Bh,E,eh,an,rh,uc,sc,ah,on,oh,gc,pc,uh,un,sh,mc,Oh,U,vc,sn,fc,dc,Rh,C,X,gh,gn,yc,ph,bc,Qh,Nn,kc,zh,T,K,mh,pn,_c,vh,Ec,Fh,Mn,$c,Gh,J,wc,mn,Pc,qc,Uh,vn,Xh,Sn,xc,Kh,fn,dn,Ac,Nc,Jh;return W=new _({}),Z=new _({}),nn=new _({}),hn=new _({}),tn=new _({}),cn=new _({}),ln=new _({}),en=new _({}),rn=new _({}),gn=new _({}),pn=new _({}),vn=new Zi({props:{code:`---
language: fr
license: mit
datasets:
- oscar
---`,highlighted:`<span class="hljs-meta">---</span>
<span class="hljs-attr">language:</span> <span class="hljs-string">fr</span>
<span class="hljs-attr">license:</span> <span class="hljs-string">mit</span>
<span class="hljs-attr">datasets:</span>
<span class="hljs-bullet">-</span> <span class="hljs-string">oscar</span>
<span class="hljs-meta">---</span>`}}),{c(){$=c("meta"),fh=o(),w=c("h1"),L=c("a"),Cn=c("span"),v(W.$$.fragment),pt=o(),Tn=c("span"),mt=s("X\xE2y d\u1EF1ng c\xE1c th\u1EBB m\xF4 h\xECnh"),dh=o(),yn=c("p"),vt=s("Th\u1EBB m\xF4 h\xECnh l\xE0 m\u1ED9t t\u1EC7p \u0111\u01B0\u1EE3c cho l\xE0 quan tr\u1ECDng nh\u01B0 m\xF4 h\xECnh v\xE0 t\u1EC7p tokenizer trong kho l\u01B0u tr\u1EEF m\xF4 h\xECnh. \u0110\xE2y l\xE0 \u0111\u1ECBnh ngh\u0129a ch\u1EE7 \u0111\u1EA1o c\u1EE7a m\xF4 h\xECnh, \u0111\u1EA3m b\u1EA3o kh\u1EA3 n\u0103ng t\xE1i s\u1EED d\u1EE5ng c\u1EE7a c\xE1c th\xE0nh vi\xEAn trong c\u1ED9ng \u0111\u1ED3ng v\xE0 kh\u1EA3 n\u0103ng t\xE1i t\u1EA1o k\u1EBFt qu\u1EA3, \u0111\u1ED3ng th\u1EDDi cung c\u1EA5p m\u1ED9t n\u1EC1n t\u1EA3ng m\xE0 c\xE1c th\xE0nh vi\xEAn kh\xE1c c\xF3 th\u1EC3 x\xE2y d\u1EF1ng c\xE1c t\xE1c ph\u1EA9m c\u1EE7a h\u1ECD."),yh=o(),bn=c("p"),ft=s("Vi\u1EC7c ghi l\u1EA1i qu\xE1 tr\xECnh hu\u1EA5n luy\u1EC7n v\xE0 \u0111\xE1nh gi\xE1 gi\xFAp nh\u1EEFng ng\u01B0\u1EDDi kh\xE1c hi\u1EC3u nh\u1EEFng g\xEC mong \u0111\u1EE3i \u1EDF m\u1ED9t m\xF4 h\xECnh - v\xE0 cung c\u1EA5p \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin li\xEAn quan \u0111\u1EBFn d\u1EEF li\u1EC7u \u0111\xE3 \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng v\xE0 qu\xE1 tr\xECnh ti\u1EC1n x\u1EED l\xFD v\xE0 h\u1EADu x\u1EED l\xFD \u0111\xE3 \u0111\u01B0\u1EE3c th\u1EF1c hi\u1EC7n \u0111\u1EA3m b\u1EA3o r\u1EB1ng c\xE1c h\u1EA1n ch\u1EBF, th\xE0nh ki\u1EBFn \u200B\u200Bv\xE0 b\u1ED1i c\u1EA3nh trong \u0111\xF3 m\xF4 h\xECnh \u0111ang v\xE0 kh\xF4ng h\u1EEFu \xEDch c\xF3 th\u1EC3 \u0111\u01B0\u1EE3c x\xE1c \u0111\u1ECBnh v\xE0 hi\u1EC3u."),bh=o(),I=c("p"),dt=s("V\xEC v\u1EADy, t\u1EA1o m\u1ED9t th\u1EBB m\xF4 h\xECnh x\xE1c \u0111\u1ECBnh r\xF5 r\xE0ng m\xF4 h\xECnh c\u1EE7a b\u1EA1n l\xE0 m\u1ED9t b\u01B0\u1EDBc r\u1EA5t quan tr\u1ECDng. \u1EDE \u0111\xE2y, ch\xFAng t\xF4i cung c\u1EA5p m\u1ED9t s\u1ED1 m\u1EB9o s\u1EBD gi\xFAp b\u1EA1n \u0111i\u1EC1u n\xE0y. Vi\u1EC7c t\u1EA1o th\u1EBB m\xF4 h\xECnh \u0111\u01B0\u1EE3c th\u1EF1c hi\u1EC7n th\xF4ng qua t\u1EC7p "),Ln=c("em"),yt=s("README.md"),bt=s(" m\xE0 b\u1EA1n \u0111\xE3 th\u1EA5y tr\u01B0\u1EDBc \u0111\xF3, \u0111\xE2y l\xE0 m\u1ED9t t\u1EC7p Markdown."),kh=o(),D=c("p"),kt=s("Kh\xE1i ni\u1EC7m \u201Cth\u1EBB m\xF4 h\xECnh\u201D b\u1EAFt ngu\u1ED3n t\u1EEB m\u1ED9t h\u01B0\u1EDBng nghi\xEAn c\u1EE9u c\u1EE7a Google, l\u1EA7n \u0111\u1EA7u ti\xEAn \u0111\u01B0\u1EE3c chia s\u1EBB trong b\xE0i b\xE1o "),Y=c("a"),_t=s("\u201CModel Cards for Model Reporting\u201D"),Et=s(" c\u1EE7a Margaret Mitchell v\xE0 c\u1ED9ng s\u1EF1. Nhi\u1EC1u th\xF4ng tin \u1EDF \u0111\xE2y d\u1EF1a tr\xEAn b\xE0i b\xE1o \u0111\xF3 v\xE0 ch\xFAng t\xF4i khuy\xEAn b\u1EA1n n\xEAn xem qua \u0111\u1EC3 hi\u1EC3u t\u1EA1i sao th\u1EBB m\xF4 h\xECnh l\u1EA1i quan tr\u1ECDng nh\u01B0 v\u1EADy trong m\u1ED9t th\u1EBF gi\u1EDBi coi tr\u1ECDng kh\u1EA3 n\u0103ng t\xE1i t\u1EA1o, kh\u1EA3 n\u0103ng t\xE1i s\u1EED d\u1EE5ng v\xE0 t\xEDnh c\xF4ng b\u1EB1ng."),_h=o(),kn=c("p"),$t=s("Th\u1EBB m\xF4 h\xECnh th\u01B0\u1EDDng b\u1EAFt \u0111\u1EA7u v\u1EDBi t\u1ED5ng quan r\u1EA5t ng\u1EAFn g\u1ECDn, c\u1EA5p cao v\u1EC1 m\u1EE5c \u0111\xEDch c\u1EE7a m\xF4 h\xECnh, ti\u1EBFp theo l\xE0 c\xE1c chi ti\u1EBFt b\u1ED5 sung trong c\xE1c ph\u1EA7n sau:"),Eh=o(),p=c("ul"),In=c("li"),wt=s("M\xF4 t\u1EA3 v\u1EC1 m\xF4 h\xECnh"),Pt=o(),Dn=c("li"),qt=s("M\u1EE5c \u0111\xEDch s\u1EED d\u1EE5ng & gi\u1EDBi h\u1EA1n"),xt=o(),Vn=c("li"),At=s("C\xE1ch s\u1EED d\u1EE5ng"),Nt=o(),jn=c("li"),Mt=s("H\u1EA1n ch\u1EBF v\xE0 sai l\u1EC7ch"),St=o(),Bn=c("li"),Ht=s("D\u1EEF li\u1EC7u hu\u1EA5n luy\u1EC7n"),Ct=o(),On=c("li"),Tt=s("Quy tr\xECnh hu\u1EA5n luy\u1EC7n"),Lt=o(),Rn=c("li"),It=s("Nh\u1EEFng k\u1EBFt qu\u1EA3 \u0111\xE1nh gi\xE1"),$h=o(),_n=c("p"),Dt=s("Ch\xFAng ta h\xE3y xem m\u1ED7i ph\u1EA7n n\xE0y n\xEAn ch\u1EE9a nh\u1EEFng g\xEC."),wh=o(),P=c("h3"),V=c("a"),Qn=c("span"),v(Z.$$.fragment),Vt=o(),zn=c("span"),jt=s("M\xF4 t\u1EA3 v\u1EC1 m\xF4 h\xECnh"),Ph=o(),En=c("p"),Bt=s("M\xF4 t\u1EA3 v\u1EC1 m\xF4 h\xECnh cung c\u1EA5p c\xE1c chi ti\u1EBFt c\u01A1 b\u1EA3n v\u1EC1 m\xF4 h\xECnh. \u0110i\u1EC1u n\xE0y bao g\u1ED3m ki\u1EBFn \u200B\u200Btr\xFAc, phi\xEAn b\u1EA3n, n\u1EBFu n\xF3 \u0111\u01B0\u1EE3c gi\u1EDBi thi\u1EC7u trong m\u1ED9t b\xE0i b\xE1o, n\u1EBFu c\xF3 s\u1EB5n b\u1EA3n tri\u1EC3n khai g\u1ED1c, t\xE1c gi\u1EA3 v\xE0 th\xF4ng tin chung v\u1EC1 m\xF4 h\xECnh. B\u1EA5t k\u1EF3 b\u1EA3n quy\u1EC1n n\xE0o c\u0169ng n\xEAn \u0111\u01B0\u1EE3c ghi nh\u1EADn \u1EDF \u0111\xE2y. Th\xF4ng tin chung v\u1EC1 quy tr\xECnh hu\u1EA5n luy\u1EC7n, c\xE1c th\xF4ng s\u1ED1 v\xE0 tuy\xEAn b\u1ED1 t\u1EEB ch\u1ED1i tr\xE1ch nhi\u1EC7m quan tr\u1ECDng c\u0169ng c\xF3 th\u1EC3 \u0111\u01B0\u1EE3c \u0111\u1EC1 c\u1EADp trong ph\u1EA7n n\xE0y."),qh=o(),q=c("h3"),j=c("a"),Fn=c("span"),v(nn.$$.fragment),Ot=o(),Gn=c("span"),Rt=s("M\u1EE5c \u0111\xEDch s\u1EED d\u1EE5ng & gi\u1EDBi h\u1EA1n"),xh=o(),$n=c("p"),Qt=s("\u1EDE \u0111\xE2y, b\u1EA1n m\xF4 t\u1EA3 c\xE1c tr\u01B0\u1EDDng h\u1EE3p s\u1EED d\u1EE5ng m\xE0 m\xF4 h\xECnh, bao g\u1ED3m c\xE1c ng\xF4n ng\u1EEF, tr\u01B0\u1EDDng v\xE0 m\u1EA3ng chuy\xEAn m\xF4n m\xE0 n\xF3 c\xF3 th\u1EC3 \u0111\u01B0\u1EE3c \xE1p d\u1EE5ng. Ph\u1EA7n n\xE0y c\u1EE7a th\u1EBB m\xF4 h\xECnh c\u0169ng c\xF3 th\u1EC3 ghi l\u1EA1i c\xE1c khu v\u1EF1c \u0111\u01B0\u1EE3c bi\u1EBFt l\xE0 n\u1EB1m ngo\xE0i ph\u1EA1m vi c\u1EE7a m\xF4 h\xECnh ho\u1EB7c n\u01A1i n\xF3 c\xF3 kh\u1EA3 n\u0103ng ho\u1EA1t \u0111\u1ED9ng d\u01B0\u1EDBi m\u1EE9c t\u1ED1i \u01B0u."),Ah=o(),x=c("h3"),B=c("a"),Un=c("span"),v(hn.$$.fragment),zt=o(),Xn=c("span"),Ft=s("C\xE1ch s\u1EED d\u1EE5ng"),Nh=o(),O=c("p"),Gt=s("Ph\u1EA7n n\xE0y n\xEAn bao g\u1ED3m m\u1ED9t s\u1ED1 v\xED d\u1EE5 v\u1EC1 c\xE1ch s\u1EED d\u1EE5ng m\xF4 h\xECnh. \u0110i\u1EC1u n\xE0y c\xF3 th\u1EC3 gi\u1EDBi thi\u1EC7u c\xE1ch s\u1EED d\u1EE5ng h\xE0m  "),Kn=c("code"),Ut=s("pipeline()"),Xt=s(", c\xE1ch s\u1EED d\u1EE5ng m\xF4 h\xECnh v\xE0 tokenizer, v\xE0 b\u1EA5t k\u1EF3 \u0111o\u1EA1n m\xE3 n\xE0o kh\xE1c m\xE0 b\u1EA1n ngh\u0129 c\xF3 th\u1EC3 h\u1EEFu \xEDch."),Mh=o(),A=c("h3"),R=c("a"),Jn=c("span"),v(tn.$$.fragment),Kt=o(),Wn=c("span"),Jt=s("D\u1EEF li\u1EC7u hu\u1EA5n luy\u1EC7n"),Sh=o(),wn=c("p"),Wt=s("Ph\u1EA7n n\xE0y ph\u1EA3i ch\u1EC9 ra (c\xE1c) t\u1EADp d\u1EEF li\u1EC7u n\xE0o m\xE0 m\xF4 h\xECnh \u0111\xE3 \u0111\u01B0\u1EE3c hu\u1EA5n luy\u1EC7n. M\u1ED9t m\xF4 t\u1EA3 ng\u1EAFn g\u1ECDn v\u1EC1 (c\xE1c) t\u1EADp d\u1EEF li\u1EC7u c\u0169ng \u0111\u01B0\u1EE3c hoan ngh\xEAnh."),Hh=o(),N=c("h3"),Q=c("a"),Yn=c("span"),v(cn.$$.fragment),Yt=o(),Zn=c("span"),Zt=s("Quy tr\xECnh hu\u1EA5n luy\u1EC7n"),Ch=o(),Pn=c("p"),nc=s("Trong ph\u1EA7n n\xE0y, b\u1EA1n n\xEAn m\xF4 t\u1EA3 t\u1EA5t c\u1EA3 c\xE1c kh\xEDa c\u1EA1nh li\xEAn quan c\u1EE7a vi\u1EC7c hu\u1EA5n luy\u1EC7n m\xE0 h\u1EEFu \xEDch t\u1EEB g\xF3c \u0111\u1ED9 kh\u1EA3 n\u0103ng t\xE1i t\u1EA1o. \u0110i\u1EC1u n\xE0y bao g\u1ED3m b\u1EA5t k\u1EF3 qu\xE1 tr\xECnh ti\u1EC1n x\u1EED l\xFD v\xE0 h\u1EADu x\u1EED l\xFD n\xE0o \u0111\xE3 \u0111\u01B0\u1EE3c th\u1EF1c hi\u1EC7n tr\xEAn d\u1EEF li\u1EC7u, c\u0169ng nh\u01B0 c\xE1c chi ti\u1EBFt nh\u01B0 s\u1ED1 epoch m\xE0 m\xF4 h\xECnh \u0111\u01B0\u1EE3c hu\u1EA5n luy\u1EC7n, k\xEDch th\u01B0\u1EDBc l\xF4, t\u1ED1c \u0111\u1ED9 h\u1ECDc, v.v."),Th=o(),M=c("h3"),z=c("a"),nh=c("span"),v(ln.$$.fragment),hc=o(),hh=c("span"),tc=s("Bi\u1EBFn v\xE0 ch\u1EC9 s\u1ED1 th\u01B0\u1EDBc \u0111o"),Lh=o(),qn=c("p"),cc=s("\u1EDE \u0111\xE2y, b\u1EA1n n\xEAn m\xF4 t\u1EA3 c\xE1c s\u1ED1 li\u1EC7u b\u1EA1n s\u1EED d\u1EE5ng \u0111\u1EC3 \u0111\xE1nh gi\xE1, v\xE0 c\xE1c y\u1EBFu t\u1ED1 kh\xE1c nhau m\xE0 b\u1EA1n \u0111ang \u0111o l\u01B0\u1EDDng. \u0110\u1EC1 c\u1EADp \u0111\u1EBFn (c\xE1c) ch\u1EC9 s\u1ED1 n\xE0o \u0111\xE3 \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng, t\u1EADp d\u1EEF li\u1EC7u n\xE0o \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng v\xE0 t\u1EADp d\u1EEF li\u1EC7u \u0111\u01B0\u1EE3c ph\xE2n chia nh\u01B0 th\u1EBF n\xE0o, gi\xFAp d\u1EC5 d\xE0ng so s\xE1nh hi\u1EC7u su\u1EA5t c\u1EE7a m\xF4 h\xECnh c\u1EE7a b\u1EA1n so v\u1EDBi hi\u1EC7u su\u1EA5t c\u1EE7a c\xE1c m\xF4 h\xECnh kh\xE1c. Nh\u1EEFng \u0111i\u1EC1u n\xE0y ph\u1EA3i \u0111\u01B0\u1EE3c th\xF4ng b\xE1o b\u1EDFi c\xE1c ph\u1EA7n tr\u01B0\u1EDBc, ch\u1EB3ng h\u1EA1n nh\u01B0 \u0111\u1ED1i t\u01B0\u1EE3ng ng\u01B0\u1EDDi d\xF9ng v\xE0 c\xE1c tr\u01B0\u1EDDng h\u1EE3p s\u1EED d\u1EE5ng."),Ih=o(),S=c("h3"),F=c("a"),th=c("span"),v(en.$$.fragment),ic=o(),ch=c("span"),lc=s("Nh\u1EEFng k\u1EBFt qu\u1EA3 \u0111\xE1nh gi\xE1"),Dh=o(),xn=c("p"),ec=s("Cu\u1ED1i c\xF9ng, cung c\u1EA5p ch\u1EC9 b\xE1o v\u1EC1 m\u1EE9c \u0111\u1ED9 ho\u1EA1t \u0111\u1ED9ng c\u1EE7a m\xF4 h\xECnh tr\xEAn t\u1EADp d\u1EEF li\u1EC7u \u0111\xE1nh gi\xE1. N\u1EBFu m\xF4 h\xECnh s\u1EED d\u1EE5ng ng\u01B0\u1EE1ng quy\u1EBFt \u0111\u1ECBnh, h\xE3y cung c\u1EA5p ng\u01B0\u1EE1ng quy\u1EBFt \u0111\u1ECBnh \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng trong \u0111\xE1nh gi\xE1 ho\u1EB7c cung c\u1EA5p th\xF4ng tin chi ti\u1EBFt v\u1EC1 \u0111\xE1nh gi\xE1 \u1EDF c\xE1c ng\u01B0\u1EE1ng kh\xE1c nhau ph\u1EE5c v\u1EE5 cho c\xE1c m\u1EE5c \u0111\xEDch s\u1EED d\u1EE5ng."),Vh=o(),H=c("h2"),G=c("a"),ih=c("span"),v(rn.$$.fragment),rc=o(),lh=c("span"),ac=s("V\xED d\u1EE5"),jh=o(),An=c("p"),oc=s("H\xE3y xem ph\u1EA7n sau \u0111\u1EC3 bi\u1EBFt m\u1ED9t v\xE0i v\xED d\u1EE5 v\u1EC1 th\u1EBB m\xF4 h\xECnh \u0111\u01B0\u1EE3c ch\u1EBF t\u1EA1o t\u1ED1t:"),Bh=o(),E=c("ul"),eh=c("li"),an=c("a"),rh=c("code"),uc=s("bert-base-cased"),sc=o(),ah=c("li"),on=c("a"),oh=c("code"),gc=s("gpt2"),pc=o(),uh=c("li"),un=c("a"),sh=c("code"),mc=s("distilbert"),Oh=o(),U=c("p"),vc=s("Tham kh\u1EA3o th\xEAm c\xE1c v\xED d\u1EE5 t\u1EEB c\xE1c t\u1ED5 ch\u1EE9c v\xE0 c\xF4ng ty kh\xE1c nhau "),sn=c("a"),fc=s("t\u1EA1i \u0111\xE2y"),dc=s("."),Rh=o(),C=c("h2"),X=c("a"),gh=c("span"),v(gn.$$.fragment),yc=o(),ph=c("span"),bc=s("L\u01B0u \xFD"),Qh=o(),Nn=c("p"),kc=s("Th\u1EBB m\xF4 h\xECnh kh\xF4ng ph\u1EA3i l\xE0 r\xE0ng bu\u1ED9c khi xu\u1EA5t b\u1EA3n m\xF4 h\xECnh v\xE0 b\u1EA1n kh\xF4ng c\u1EA7n ph\u1EA3i bao g\u1ED3m t\u1EA5t c\u1EA3 c\xE1c ph\u1EA7n \u0111\u01B0\u1EE3c m\xF4 t\u1EA3 \u1EDF tr\xEAn khi t\u1EA1o th\u1EBB m\xF4 h\xECnh. Tuy nhi\xEAn, t\xE0i li\u1EC7u r\xF5 r\xE0ng v\u1EC1 m\xF4 h\xECnh c\xF3 th\u1EC3 mang l\u1EA1i l\u1EE3i \xEDch cho ng\u01B0\u1EDDi d\xF9ng trong t\u01B0\u01A1ng lai, v\xEC v\u1EADy ch\xFAng t\xF4i khuy\xEAn b\u1EA1n n\xEAn \u0111i\u1EC1n v\xE0o nhi\u1EC1u ph\u1EA7n nh\u1EA5t c\xF3 th\u1EC3 theo kh\u1EA3 n\u0103ng v\xE0 ki\u1EBFn \u200B\u200Bth\u1EE9c c\u1EE7a m\xECnh."),zh=o(),T=c("h2"),K=c("a"),mh=c("span"),v(pn.$$.fragment),_c=o(),vh=c("span"),Ec=s("Si\xEAu d\u1EEF li\u1EC7u th\u1EBB m\xF4 h\xECnh"),Fh=o(),Mn=c("p"),$c=s("N\u1EBFu b\u1EA1n \u0111\xE3 kh\xE1m ph\xE1 m\u1ED9t ch\xFAt v\u1EC1 Hugging Face Hub, b\u1EA1n s\u1EBD th\u1EA5y r\u1EB1ng m\u1ED9t s\u1ED1 ki\u1EC3u m\xF4 h\xECnh thu\u1ED9c m\u1ED9t s\u1ED1 nh\xF3m nh\u1EA5t \u0111\u1ECBnh: b\u1EA1n c\xF3 th\u1EC3 l\u1ECDc ch\xFAng theo t\xE1c v\u1EE5, ng\xF4n ng\u1EEF, th\u01B0 vi\u1EC7n, v.v. C\xE1c nh\xF3m m\xE0 m\u1ED9t m\xF4 h\xECnh thu\u1ED9c v\u1EC1 \u0111\u01B0\u1EE3c x\xE1c \u0111\u1ECBnh theo si\xEAu d\u1EEF li\u1EC7u b\u1EA1n th\xEAm v\xE0o ti\xEAu \u0111\u1EC1 th\u1EBB m\xF4 h\xECnh."),Gh=o(),J=c("p"),wc=s("V\xED d\u1EE5: n\u1EBFu b\u1EA1n xem "),mn=c("a"),Pc=s("th\u1EBB m\xF4 h\xECnh camembert-base`"),qc=s(", b\u1EA1n s\u1EBD th\u1EA5y c\xE1c d\xF2ng sau trong ti\xEAu \u0111\u1EC1 th\u1EBB m\xF4 h\xECnh:"),Uh=o(),v(vn.$$.fragment),Xh=o(),Sn=c("p"),xc=s("Si\xEAu d\u1EEF li\u1EC7u n\xE0y \u0111\u01B0\u1EE3c ph\xE2n t\xEDch b\u1EDFi Hugging Face Hub, sau \u0111\xF3 x\xE1c \u0111\u1ECBnh m\xF4 h\xECnh n\xE0y l\xE0 cho ti\u1EBFng Ph\xE1p, c\xF3 gi\u1EA5y ph\xE9p MIT, \u0111\u01B0\u1EE3c hu\u1EA5n luy\u1EC7n tr\xEAn t\u1EADp d\u1EEF li\u1EC7u Oscar."),Kh=o(),fn=c("p"),dn=c("a"),Ac=s("Th\xF4ng s\u1ED1 k\u1EF9 thu\u1EADt th\u1EBB m\xF4 h\xECnh b\u1EA3n \u0111\u1EA7y \u0111\u1EE7"),Nc=s(" cho ph\xE9p ch\u1EC9 \u0111\u1ECBnh ng\xF4n ng\u1EEF, gi\u1EA5y ph\xE9p, th\u1EBB, b\u1ED9 d\u1EEF li\u1EC7u, s\u1ED1 li\u1EC7u c\u0169ng nh\u01B0 k\u1EBFt qu\u1EA3 \u0111\xE1nh gi\xE1 m\xF4 h\xECnh thu \u0111\u01B0\u1EE3c khi hu\u1EA5n luy\u1EC7n."),this.h()},l(n){const e=Ji('[data-svelte="svelte-1phssyn"]',document.head);$=i(e,"META",{name:!0,content:!0}),e.forEach(h),fh=u(n),w=i(n,"H1",{class:!0});var Wh=l(w);L=i(Wh,"A",{id:!0,class:!0,href:!0});var Hc=l(L);Cn=i(Hc,"SPAN",{});var Cc=l(Cn);f(W.$$.fragment,Cc),Cc.forEach(h),Hc.forEach(h),pt=u(Wh),Tn=i(Wh,"SPAN",{});var Tc=l(Tn);mt=g(Tc,"X\xE2y d\u1EF1ng c\xE1c th\u1EBB m\xF4 h\xECnh"),Tc.forEach(h),Wh.forEach(h),dh=u(n),yn=i(n,"P",{});var Lc=l(yn);vt=g(Lc,"Th\u1EBB m\xF4 h\xECnh l\xE0 m\u1ED9t t\u1EC7p \u0111\u01B0\u1EE3c cho l\xE0 quan tr\u1ECDng nh\u01B0 m\xF4 h\xECnh v\xE0 t\u1EC7p tokenizer trong kho l\u01B0u tr\u1EEF m\xF4 h\xECnh. \u0110\xE2y l\xE0 \u0111\u1ECBnh ngh\u0129a ch\u1EE7 \u0111\u1EA1o c\u1EE7a m\xF4 h\xECnh, \u0111\u1EA3m b\u1EA3o kh\u1EA3 n\u0103ng t\xE1i s\u1EED d\u1EE5ng c\u1EE7a c\xE1c th\xE0nh vi\xEAn trong c\u1ED9ng \u0111\u1ED3ng v\xE0 kh\u1EA3 n\u0103ng t\xE1i t\u1EA1o k\u1EBFt qu\u1EA3, \u0111\u1ED3ng th\u1EDDi cung c\u1EA5p m\u1ED9t n\u1EC1n t\u1EA3ng m\xE0 c\xE1c th\xE0nh vi\xEAn kh\xE1c c\xF3 th\u1EC3 x\xE2y d\u1EF1ng c\xE1c t\xE1c ph\u1EA9m c\u1EE7a h\u1ECD."),Lc.forEach(h),yh=u(n),bn=i(n,"P",{});var Ic=l(bn);ft=g(Ic,"Vi\u1EC7c ghi l\u1EA1i qu\xE1 tr\xECnh hu\u1EA5n luy\u1EC7n v\xE0 \u0111\xE1nh gi\xE1 gi\xFAp nh\u1EEFng ng\u01B0\u1EDDi kh\xE1c hi\u1EC3u nh\u1EEFng g\xEC mong \u0111\u1EE3i \u1EDF m\u1ED9t m\xF4 h\xECnh - v\xE0 cung c\u1EA5p \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin li\xEAn quan \u0111\u1EBFn d\u1EEF li\u1EC7u \u0111\xE3 \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng v\xE0 qu\xE1 tr\xECnh ti\u1EC1n x\u1EED l\xFD v\xE0 h\u1EADu x\u1EED l\xFD \u0111\xE3 \u0111\u01B0\u1EE3c th\u1EF1c hi\u1EC7n \u0111\u1EA3m b\u1EA3o r\u1EB1ng c\xE1c h\u1EA1n ch\u1EBF, th\xE0nh ki\u1EBFn \u200B\u200Bv\xE0 b\u1ED1i c\u1EA3nh trong \u0111\xF3 m\xF4 h\xECnh \u0111ang v\xE0 kh\xF4ng h\u1EEFu \xEDch c\xF3 th\u1EC3 \u0111\u01B0\u1EE3c x\xE1c \u0111\u1ECBnh v\xE0 hi\u1EC3u."),Ic.forEach(h),bh=u(n),I=i(n,"P",{});var Yh=l(I);dt=g(Yh,"V\xEC v\u1EADy, t\u1EA1o m\u1ED9t th\u1EBB m\xF4 h\xECnh x\xE1c \u0111\u1ECBnh r\xF5 r\xE0ng m\xF4 h\xECnh c\u1EE7a b\u1EA1n l\xE0 m\u1ED9t b\u01B0\u1EDBc r\u1EA5t quan tr\u1ECDng. \u1EDE \u0111\xE2y, ch\xFAng t\xF4i cung c\u1EA5p m\u1ED9t s\u1ED1 m\u1EB9o s\u1EBD gi\xFAp b\u1EA1n \u0111i\u1EC1u n\xE0y. Vi\u1EC7c t\u1EA1o th\u1EBB m\xF4 h\xECnh \u0111\u01B0\u1EE3c th\u1EF1c hi\u1EC7n th\xF4ng qua t\u1EC7p "),Ln=i(Yh,"EM",{});var Dc=l(Ln);yt=g(Dc,"README.md"),Dc.forEach(h),bt=g(Yh," m\xE0 b\u1EA1n \u0111\xE3 th\u1EA5y tr\u01B0\u1EDBc \u0111\xF3, \u0111\xE2y l\xE0 m\u1ED9t t\u1EC7p Markdown."),Yh.forEach(h),kh=u(n),D=i(n,"P",{});var Zh=l(D);kt=g(Zh,"Kh\xE1i ni\u1EC7m \u201Cth\u1EBB m\xF4 h\xECnh\u201D b\u1EAFt ngu\u1ED3n t\u1EEB m\u1ED9t h\u01B0\u1EDBng nghi\xEAn c\u1EE9u c\u1EE7a Google, l\u1EA7n \u0111\u1EA7u ti\xEAn \u0111\u01B0\u1EE3c chia s\u1EBB trong b\xE0i b\xE1o "),Y=i(Zh,"A",{href:!0,rel:!0});var Vc=l(Y);_t=g(Vc,"\u201CModel Cards for Model Reporting\u201D"),Vc.forEach(h),Et=g(Zh," c\u1EE7a Margaret Mitchell v\xE0 c\u1ED9ng s\u1EF1. Nhi\u1EC1u th\xF4ng tin \u1EDF \u0111\xE2y d\u1EF1a tr\xEAn b\xE0i b\xE1o \u0111\xF3 v\xE0 ch\xFAng t\xF4i khuy\xEAn b\u1EA1n n\xEAn xem qua \u0111\u1EC3 hi\u1EC3u t\u1EA1i sao th\u1EBB m\xF4 h\xECnh l\u1EA1i quan tr\u1ECDng nh\u01B0 v\u1EADy trong m\u1ED9t th\u1EBF gi\u1EDBi coi tr\u1ECDng kh\u1EA3 n\u0103ng t\xE1i t\u1EA1o, kh\u1EA3 n\u0103ng t\xE1i s\u1EED d\u1EE5ng v\xE0 t\xEDnh c\xF4ng b\u1EB1ng."),Zh.forEach(h),_h=u(n),kn=i(n,"P",{});var jc=l(kn);$t=g(jc,"Th\u1EBB m\xF4 h\xECnh th\u01B0\u1EDDng b\u1EAFt \u0111\u1EA7u v\u1EDBi t\u1ED5ng quan r\u1EA5t ng\u1EAFn g\u1ECDn, c\u1EA5p cao v\u1EC1 m\u1EE5c \u0111\xEDch c\u1EE7a m\xF4 h\xECnh, ti\u1EBFp theo l\xE0 c\xE1c chi ti\u1EBFt b\u1ED5 sung trong c\xE1c ph\u1EA7n sau:"),jc.forEach(h),Eh=u(n),p=i(n,"UL",{});var m=l(p);In=i(m,"LI",{});var Bc=l(In);wt=g(Bc,"M\xF4 t\u1EA3 v\u1EC1 m\xF4 h\xECnh"),Bc.forEach(h),Pt=u(m),Dn=i(m,"LI",{});var Oc=l(Dn);qt=g(Oc,"M\u1EE5c \u0111\xEDch s\u1EED d\u1EE5ng & gi\u1EDBi h\u1EA1n"),Oc.forEach(h),xt=u(m),Vn=i(m,"LI",{});var Rc=l(Vn);At=g(Rc,"C\xE1ch s\u1EED d\u1EE5ng"),Rc.forEach(h),Nt=u(m),jn=i(m,"LI",{});var Qc=l(jn);Mt=g(Qc,"H\u1EA1n ch\u1EBF v\xE0 sai l\u1EC7ch"),Qc.forEach(h),St=u(m),Bn=i(m,"LI",{});var zc=l(Bn);Ht=g(zc,"D\u1EEF li\u1EC7u hu\u1EA5n luy\u1EC7n"),zc.forEach(h),Ct=u(m),On=i(m,"LI",{});var Fc=l(On);Tt=g(Fc,"Quy tr\xECnh hu\u1EA5n luy\u1EC7n"),Fc.forEach(h),Lt=u(m),Rn=i(m,"LI",{});var Gc=l(Rn);It=g(Gc,"Nh\u1EEFng k\u1EBFt qu\u1EA3 \u0111\xE1nh gi\xE1"),Gc.forEach(h),m.forEach(h),$h=u(n),_n=i(n,"P",{});var Uc=l(_n);Dt=g(Uc,"Ch\xFAng ta h\xE3y xem m\u1ED7i ph\u1EA7n n\xE0y n\xEAn ch\u1EE9a nh\u1EEFng g\xEC."),Uc.forEach(h),wh=u(n),P=i(n,"H3",{class:!0});var nt=l(P);V=i(nt,"A",{id:!0,class:!0,href:!0});var Xc=l(V);Qn=i(Xc,"SPAN",{});var Kc=l(Qn);f(Z.$$.fragment,Kc),Kc.forEach(h),Xc.forEach(h),Vt=u(nt),zn=i(nt,"SPAN",{});var Jc=l(zn);jt=g(Jc,"M\xF4 t\u1EA3 v\u1EC1 m\xF4 h\xECnh"),Jc.forEach(h),nt.forEach(h),Ph=u(n),En=i(n,"P",{});var Wc=l(En);Bt=g(Wc,"M\xF4 t\u1EA3 v\u1EC1 m\xF4 h\xECnh cung c\u1EA5p c\xE1c chi ti\u1EBFt c\u01A1 b\u1EA3n v\u1EC1 m\xF4 h\xECnh. \u0110i\u1EC1u n\xE0y bao g\u1ED3m ki\u1EBFn \u200B\u200Btr\xFAc, phi\xEAn b\u1EA3n, n\u1EBFu n\xF3 \u0111\u01B0\u1EE3c gi\u1EDBi thi\u1EC7u trong m\u1ED9t b\xE0i b\xE1o, n\u1EBFu c\xF3 s\u1EB5n b\u1EA3n tri\u1EC3n khai g\u1ED1c, t\xE1c gi\u1EA3 v\xE0 th\xF4ng tin chung v\u1EC1 m\xF4 h\xECnh. B\u1EA5t k\u1EF3 b\u1EA3n quy\u1EC1n n\xE0o c\u0169ng n\xEAn \u0111\u01B0\u1EE3c ghi nh\u1EADn \u1EDF \u0111\xE2y. Th\xF4ng tin chung v\u1EC1 quy tr\xECnh hu\u1EA5n luy\u1EC7n, c\xE1c th\xF4ng s\u1ED1 v\xE0 tuy\xEAn b\u1ED1 t\u1EEB ch\u1ED1i tr\xE1ch nhi\u1EC7m quan tr\u1ECDng c\u0169ng c\xF3 th\u1EC3 \u0111\u01B0\u1EE3c \u0111\u1EC1 c\u1EADp trong ph\u1EA7n n\xE0y."),Wc.forEach(h),qh=u(n),q=i(n,"H3",{class:!0});var ht=l(q);j=i(ht,"A",{id:!0,class:!0,href:!0});var Yc=l(j);Fn=i(Yc,"SPAN",{});var Zc=l(Fn);f(nn.$$.fragment,Zc),Zc.forEach(h),Yc.forEach(h),Ot=u(ht),Gn=i(ht,"SPAN",{});var ni=l(Gn);Rt=g(ni,"M\u1EE5c \u0111\xEDch s\u1EED d\u1EE5ng & gi\u1EDBi h\u1EA1n"),ni.forEach(h),ht.forEach(h),xh=u(n),$n=i(n,"P",{});var hi=l($n);Qt=g(hi,"\u1EDE \u0111\xE2y, b\u1EA1n m\xF4 t\u1EA3 c\xE1c tr\u01B0\u1EDDng h\u1EE3p s\u1EED d\u1EE5ng m\xE0 m\xF4 h\xECnh, bao g\u1ED3m c\xE1c ng\xF4n ng\u1EEF, tr\u01B0\u1EDDng v\xE0 m\u1EA3ng chuy\xEAn m\xF4n m\xE0 n\xF3 c\xF3 th\u1EC3 \u0111\u01B0\u1EE3c \xE1p d\u1EE5ng. Ph\u1EA7n n\xE0y c\u1EE7a th\u1EBB m\xF4 h\xECnh c\u0169ng c\xF3 th\u1EC3 ghi l\u1EA1i c\xE1c khu v\u1EF1c \u0111\u01B0\u1EE3c bi\u1EBFt l\xE0 n\u1EB1m ngo\xE0i ph\u1EA1m vi c\u1EE7a m\xF4 h\xECnh ho\u1EB7c n\u01A1i n\xF3 c\xF3 kh\u1EA3 n\u0103ng ho\u1EA1t \u0111\u1ED9ng d\u01B0\u1EDBi m\u1EE9c t\u1ED1i \u01B0u."),hi.forEach(h),Ah=u(n),x=i(n,"H3",{class:!0});var tt=l(x);B=i(tt,"A",{id:!0,class:!0,href:!0});var ti=l(B);Un=i(ti,"SPAN",{});var ci=l(Un);f(hn.$$.fragment,ci),ci.forEach(h),ti.forEach(h),zt=u(tt),Xn=i(tt,"SPAN",{});var ii=l(Xn);Ft=g(ii,"C\xE1ch s\u1EED d\u1EE5ng"),ii.forEach(h),tt.forEach(h),Nh=u(n),O=i(n,"P",{});var ct=l(O);Gt=g(ct,"Ph\u1EA7n n\xE0y n\xEAn bao g\u1ED3m m\u1ED9t s\u1ED1 v\xED d\u1EE5 v\u1EC1 c\xE1ch s\u1EED d\u1EE5ng m\xF4 h\xECnh. \u0110i\u1EC1u n\xE0y c\xF3 th\u1EC3 gi\u1EDBi thi\u1EC7u c\xE1ch s\u1EED d\u1EE5ng h\xE0m  "),Kn=i(ct,"CODE",{});var li=l(Kn);Ut=g(li,"pipeline()"),li.forEach(h),Xt=g(ct,", c\xE1ch s\u1EED d\u1EE5ng m\xF4 h\xECnh v\xE0 tokenizer, v\xE0 b\u1EA5t k\u1EF3 \u0111o\u1EA1n m\xE3 n\xE0o kh\xE1c m\xE0 b\u1EA1n ngh\u0129 c\xF3 th\u1EC3 h\u1EEFu \xEDch."),ct.forEach(h),Mh=u(n),A=i(n,"H3",{class:!0});var it=l(A);R=i(it,"A",{id:!0,class:!0,href:!0});var ei=l(R);Jn=i(ei,"SPAN",{});var ri=l(Jn);f(tn.$$.fragment,ri),ri.forEach(h),ei.forEach(h),Kt=u(it),Wn=i(it,"SPAN",{});var ai=l(Wn);Jt=g(ai,"D\u1EEF li\u1EC7u hu\u1EA5n luy\u1EC7n"),ai.forEach(h),it.forEach(h),Sh=u(n),wn=i(n,"P",{});var oi=l(wn);Wt=g(oi,"Ph\u1EA7n n\xE0y ph\u1EA3i ch\u1EC9 ra (c\xE1c) t\u1EADp d\u1EEF li\u1EC7u n\xE0o m\xE0 m\xF4 h\xECnh \u0111\xE3 \u0111\u01B0\u1EE3c hu\u1EA5n luy\u1EC7n. M\u1ED9t m\xF4 t\u1EA3 ng\u1EAFn g\u1ECDn v\u1EC1 (c\xE1c) t\u1EADp d\u1EEF li\u1EC7u c\u0169ng \u0111\u01B0\u1EE3c hoan ngh\xEAnh."),oi.forEach(h),Hh=u(n),N=i(n,"H3",{class:!0});var lt=l(N);Q=i(lt,"A",{id:!0,class:!0,href:!0});var ui=l(Q);Yn=i(ui,"SPAN",{});var si=l(Yn);f(cn.$$.fragment,si),si.forEach(h),ui.forEach(h),Yt=u(lt),Zn=i(lt,"SPAN",{});var gi=l(Zn);Zt=g(gi,"Quy tr\xECnh hu\u1EA5n luy\u1EC7n"),gi.forEach(h),lt.forEach(h),Ch=u(n),Pn=i(n,"P",{});var pi=l(Pn);nc=g(pi,"Trong ph\u1EA7n n\xE0y, b\u1EA1n n\xEAn m\xF4 t\u1EA3 t\u1EA5t c\u1EA3 c\xE1c kh\xEDa c\u1EA1nh li\xEAn quan c\u1EE7a vi\u1EC7c hu\u1EA5n luy\u1EC7n m\xE0 h\u1EEFu \xEDch t\u1EEB g\xF3c \u0111\u1ED9 kh\u1EA3 n\u0103ng t\xE1i t\u1EA1o. \u0110i\u1EC1u n\xE0y bao g\u1ED3m b\u1EA5t k\u1EF3 qu\xE1 tr\xECnh ti\u1EC1n x\u1EED l\xFD v\xE0 h\u1EADu x\u1EED l\xFD n\xE0o \u0111\xE3 \u0111\u01B0\u1EE3c th\u1EF1c hi\u1EC7n tr\xEAn d\u1EEF li\u1EC7u, c\u0169ng nh\u01B0 c\xE1c chi ti\u1EBFt nh\u01B0 s\u1ED1 epoch m\xE0 m\xF4 h\xECnh \u0111\u01B0\u1EE3c hu\u1EA5n luy\u1EC7n, k\xEDch th\u01B0\u1EDBc l\xF4, t\u1ED1c \u0111\u1ED9 h\u1ECDc, v.v."),pi.forEach(h),Th=u(n),M=i(n,"H3",{class:!0});var et=l(M);z=i(et,"A",{id:!0,class:!0,href:!0});var mi=l(z);nh=i(mi,"SPAN",{});var vi=l(nh);f(ln.$$.fragment,vi),vi.forEach(h),mi.forEach(h),hc=u(et),hh=i(et,"SPAN",{});var fi=l(hh);tc=g(fi,"Bi\u1EBFn v\xE0 ch\u1EC9 s\u1ED1 th\u01B0\u1EDBc \u0111o"),fi.forEach(h),et.forEach(h),Lh=u(n),qn=i(n,"P",{});var di=l(qn);cc=g(di,"\u1EDE \u0111\xE2y, b\u1EA1n n\xEAn m\xF4 t\u1EA3 c\xE1c s\u1ED1 li\u1EC7u b\u1EA1n s\u1EED d\u1EE5ng \u0111\u1EC3 \u0111\xE1nh gi\xE1, v\xE0 c\xE1c y\u1EBFu t\u1ED1 kh\xE1c nhau m\xE0 b\u1EA1n \u0111ang \u0111o l\u01B0\u1EDDng. \u0110\u1EC1 c\u1EADp \u0111\u1EBFn (c\xE1c) ch\u1EC9 s\u1ED1 n\xE0o \u0111\xE3 \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng, t\u1EADp d\u1EEF li\u1EC7u n\xE0o \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng v\xE0 t\u1EADp d\u1EEF li\u1EC7u \u0111\u01B0\u1EE3c ph\xE2n chia nh\u01B0 th\u1EBF n\xE0o, gi\xFAp d\u1EC5 d\xE0ng so s\xE1nh hi\u1EC7u su\u1EA5t c\u1EE7a m\xF4 h\xECnh c\u1EE7a b\u1EA1n so v\u1EDBi hi\u1EC7u su\u1EA5t c\u1EE7a c\xE1c m\xF4 h\xECnh kh\xE1c. Nh\u1EEFng \u0111i\u1EC1u n\xE0y ph\u1EA3i \u0111\u01B0\u1EE3c th\xF4ng b\xE1o b\u1EDFi c\xE1c ph\u1EA7n tr\u01B0\u1EDBc, ch\u1EB3ng h\u1EA1n nh\u01B0 \u0111\u1ED1i t\u01B0\u1EE3ng ng\u01B0\u1EDDi d\xF9ng v\xE0 c\xE1c tr\u01B0\u1EDDng h\u1EE3p s\u1EED d\u1EE5ng."),di.forEach(h),Ih=u(n),S=i(n,"H3",{class:!0});var rt=l(S);F=i(rt,"A",{id:!0,class:!0,href:!0});var yi=l(F);th=i(yi,"SPAN",{});var bi=l(th);f(en.$$.fragment,bi),bi.forEach(h),yi.forEach(h),ic=u(rt),ch=i(rt,"SPAN",{});var ki=l(ch);lc=g(ki,"Nh\u1EEFng k\u1EBFt qu\u1EA3 \u0111\xE1nh gi\xE1"),ki.forEach(h),rt.forEach(h),Dh=u(n),xn=i(n,"P",{});var _i=l(xn);ec=g(_i,"Cu\u1ED1i c\xF9ng, cung c\u1EA5p ch\u1EC9 b\xE1o v\u1EC1 m\u1EE9c \u0111\u1ED9 ho\u1EA1t \u0111\u1ED9ng c\u1EE7a m\xF4 h\xECnh tr\xEAn t\u1EADp d\u1EEF li\u1EC7u \u0111\xE1nh gi\xE1. N\u1EBFu m\xF4 h\xECnh s\u1EED d\u1EE5ng ng\u01B0\u1EE1ng quy\u1EBFt \u0111\u1ECBnh, h\xE3y cung c\u1EA5p ng\u01B0\u1EE1ng quy\u1EBFt \u0111\u1ECBnh \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng trong \u0111\xE1nh gi\xE1 ho\u1EB7c cung c\u1EA5p th\xF4ng tin chi ti\u1EBFt v\u1EC1 \u0111\xE1nh gi\xE1 \u1EDF c\xE1c ng\u01B0\u1EE1ng kh\xE1c nhau ph\u1EE5c v\u1EE5 cho c\xE1c m\u1EE5c \u0111\xEDch s\u1EED d\u1EE5ng."),_i.forEach(h),Vh=u(n),H=i(n,"H2",{class:!0});var at=l(H);G=i(at,"A",{id:!0,class:!0,href:!0});var Ei=l(G);ih=i(Ei,"SPAN",{});var $i=l(ih);f(rn.$$.fragment,$i),$i.forEach(h),Ei.forEach(h),rc=u(at),lh=i(at,"SPAN",{});var wi=l(lh);ac=g(wi,"V\xED d\u1EE5"),wi.forEach(h),at.forEach(h),jh=u(n),An=i(n,"P",{});var Pi=l(An);oc=g(Pi,"H\xE3y xem ph\u1EA7n sau \u0111\u1EC3 bi\u1EBFt m\u1ED9t v\xE0i v\xED d\u1EE5 v\u1EC1 th\u1EBB m\xF4 h\xECnh \u0111\u01B0\u1EE3c ch\u1EBF t\u1EA1o t\u1ED1t:"),Pi.forEach(h),Bh=u(n),E=i(n,"UL",{});var Hn=l(E);eh=i(Hn,"LI",{});var qi=l(eh);an=i(qi,"A",{href:!0,rel:!0});var xi=l(an);rh=i(xi,"CODE",{});var Ai=l(rh);uc=g(Ai,"bert-base-cased"),Ai.forEach(h),xi.forEach(h),qi.forEach(h),sc=u(Hn),ah=i(Hn,"LI",{});var Ni=l(ah);on=i(Ni,"A",{href:!0,rel:!0});var Mi=l(on);oh=i(Mi,"CODE",{});var Si=l(oh);gc=g(Si,"gpt2"),Si.forEach(h),Mi.forEach(h),Ni.forEach(h),pc=u(Hn),uh=i(Hn,"LI",{});var Hi=l(uh);un=i(Hi,"A",{href:!0,rel:!0});var Ci=l(un);sh=i(Ci,"CODE",{});var Ti=l(sh);mc=g(Ti,"distilbert"),Ti.forEach(h),Ci.forEach(h),Hi.forEach(h),Hn.forEach(h),Oh=u(n),U=i(n,"P",{});var ot=l(U);vc=g(ot,"Tham kh\u1EA3o th\xEAm c\xE1c v\xED d\u1EE5 t\u1EEB c\xE1c t\u1ED5 ch\u1EE9c v\xE0 c\xF4ng ty kh\xE1c nhau "),sn=i(ot,"A",{href:!0,rel:!0});var Li=l(sn);fc=g(Li,"t\u1EA1i \u0111\xE2y"),Li.forEach(h),dc=g(ot,"."),ot.forEach(h),Rh=u(n),C=i(n,"H2",{class:!0});var ut=l(C);X=i(ut,"A",{id:!0,class:!0,href:!0});var Ii=l(X);gh=i(Ii,"SPAN",{});var Di=l(gh);f(gn.$$.fragment,Di),Di.forEach(h),Ii.forEach(h),yc=u(ut),ph=i(ut,"SPAN",{});var Vi=l(ph);bc=g(Vi,"L\u01B0u \xFD"),Vi.forEach(h),ut.forEach(h),Qh=u(n),Nn=i(n,"P",{});var ji=l(Nn);kc=g(ji,"Th\u1EBB m\xF4 h\xECnh kh\xF4ng ph\u1EA3i l\xE0 r\xE0ng bu\u1ED9c khi xu\u1EA5t b\u1EA3n m\xF4 h\xECnh v\xE0 b\u1EA1n kh\xF4ng c\u1EA7n ph\u1EA3i bao g\u1ED3m t\u1EA5t c\u1EA3 c\xE1c ph\u1EA7n \u0111\u01B0\u1EE3c m\xF4 t\u1EA3 \u1EDF tr\xEAn khi t\u1EA1o th\u1EBB m\xF4 h\xECnh. Tuy nhi\xEAn, t\xE0i li\u1EC7u r\xF5 r\xE0ng v\u1EC1 m\xF4 h\xECnh c\xF3 th\u1EC3 mang l\u1EA1i l\u1EE3i \xEDch cho ng\u01B0\u1EDDi d\xF9ng trong t\u01B0\u01A1ng lai, v\xEC v\u1EADy ch\xFAng t\xF4i khuy\xEAn b\u1EA1n n\xEAn \u0111i\u1EC1n v\xE0o nhi\u1EC1u ph\u1EA7n nh\u1EA5t c\xF3 th\u1EC3 theo kh\u1EA3 n\u0103ng v\xE0 ki\u1EBFn \u200B\u200Bth\u1EE9c c\u1EE7a m\xECnh."),ji.forEach(h),zh=u(n),T=i(n,"H2",{class:!0});var st=l(T);K=i(st,"A",{id:!0,class:!0,href:!0});var Bi=l(K);mh=i(Bi,"SPAN",{});var Oi=l(mh);f(pn.$$.fragment,Oi),Oi.forEach(h),Bi.forEach(h),_c=u(st),vh=i(st,"SPAN",{});var Ri=l(vh);Ec=g(Ri,"Si\xEAu d\u1EEF li\u1EC7u th\u1EBB m\xF4 h\xECnh"),Ri.forEach(h),st.forEach(h),Fh=u(n),Mn=i(n,"P",{});var Qi=l(Mn);$c=g(Qi,"N\u1EBFu b\u1EA1n \u0111\xE3 kh\xE1m ph\xE1 m\u1ED9t ch\xFAt v\u1EC1 Hugging Face Hub, b\u1EA1n s\u1EBD th\u1EA5y r\u1EB1ng m\u1ED9t s\u1ED1 ki\u1EC3u m\xF4 h\xECnh thu\u1ED9c m\u1ED9t s\u1ED1 nh\xF3m nh\u1EA5t \u0111\u1ECBnh: b\u1EA1n c\xF3 th\u1EC3 l\u1ECDc ch\xFAng theo t\xE1c v\u1EE5, ng\xF4n ng\u1EEF, th\u01B0 vi\u1EC7n, v.v. C\xE1c nh\xF3m m\xE0 m\u1ED9t m\xF4 h\xECnh thu\u1ED9c v\u1EC1 \u0111\u01B0\u1EE3c x\xE1c \u0111\u1ECBnh theo si\xEAu d\u1EEF li\u1EC7u b\u1EA1n th\xEAm v\xE0o ti\xEAu \u0111\u1EC1 th\u1EBB m\xF4 h\xECnh."),Qi.forEach(h),Gh=u(n),J=i(n,"P",{});var gt=l(J);wc=g(gt,"V\xED d\u1EE5: n\u1EBFu b\u1EA1n xem "),mn=i(gt,"A",{href:!0,rel:!0});var zi=l(mn);Pc=g(zi,"th\u1EBB m\xF4 h\xECnh camembert-base`"),zi.forEach(h),qc=g(gt,", b\u1EA1n s\u1EBD th\u1EA5y c\xE1c d\xF2ng sau trong ti\xEAu \u0111\u1EC1 th\u1EBB m\xF4 h\xECnh:"),gt.forEach(h),Uh=u(n),f(vn.$$.fragment,n),Xh=u(n),Sn=i(n,"P",{});var Fi=l(Sn);xc=g(Fi,"Si\xEAu d\u1EEF li\u1EC7u n\xE0y \u0111\u01B0\u1EE3c ph\xE2n t\xEDch b\u1EDFi Hugging Face Hub, sau \u0111\xF3 x\xE1c \u0111\u1ECBnh m\xF4 h\xECnh n\xE0y l\xE0 cho ti\u1EBFng Ph\xE1p, c\xF3 gi\u1EA5y ph\xE9p MIT, \u0111\u01B0\u1EE3c hu\u1EA5n luy\u1EC7n tr\xEAn t\u1EADp d\u1EEF li\u1EC7u Oscar."),Fi.forEach(h),Kh=u(n),fn=i(n,"P",{});var Mc=l(fn);dn=i(Mc,"A",{href:!0,rel:!0});var Gi=l(dn);Ac=g(Gi,"Th\xF4ng s\u1ED1 k\u1EF9 thu\u1EADt th\u1EBB m\xF4 h\xECnh b\u1EA3n \u0111\u1EA7y \u0111\u1EE7"),Gi.forEach(h),Nc=g(Mc," cho ph\xE9p ch\u1EC9 \u0111\u1ECBnh ng\xF4n ng\u1EEF, gi\u1EA5y ph\xE9p, th\u1EBB, b\u1ED9 d\u1EEF li\u1EC7u, s\u1ED1 li\u1EC7u c\u0169ng nh\u01B0 k\u1EBFt qu\u1EA3 \u0111\xE1nh gi\xE1 m\xF4 h\xECnh thu \u0111\u01B0\u1EE3c khi hu\u1EA5n luy\u1EC7n."),Mc.forEach(h),this.h()},h(){a($,"name","hf:doc:metadata"),a($,"content",JSON.stringify(hl)),a(L,"id","xy-dng-cc-th-m-hnh"),a(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(L,"href","#xy-dng-cc-th-m-hnh"),a(w,"class","relative group"),a(Y,"href","https://arxiv.org/abs/1810.03993"),a(Y,"rel","nofollow"),a(V,"id","m-t-v-m-hnh"),a(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(V,"href","#m-t-v-m-hnh"),a(P,"class","relative group"),a(j,"id","mc-ch-s-dng-gii-hn"),a(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(j,"href","#mc-ch-s-dng-gii-hn"),a(q,"class","relative group"),a(B,"id","cch-s-dng"),a(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(B,"href","#cch-s-dng"),a(x,"class","relative group"),a(R,"id","d-liu-hun-luyn"),a(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(R,"href","#d-liu-hun-luyn"),a(A,"class","relative group"),a(Q,"id","quy-trnh-hun-luyn"),a(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(Q,"href","#quy-trnh-hun-luyn"),a(N,"class","relative group"),a(z,"id","bin-v-ch-s-thc-o"),a(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(z,"href","#bin-v-ch-s-thc-o"),a(M,"class","relative group"),a(F,"id","nhng-kt-qu-nh-gi"),a(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(F,"href","#nhng-kt-qu-nh-gi"),a(S,"class","relative group"),a(G,"id","v-d"),a(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(G,"href","#v-d"),a(H,"class","relative group"),a(an,"href","https://huggingface.co/bert-base-cased"),a(an,"rel","nofollow"),a(on,"href","https://huggingface.co/gpt2"),a(on,"rel","nofollow"),a(un,"href","https://huggingface.co/distilbert-base-uncased"),a(un,"rel","nofollow"),a(sn,"href","https://github.com/huggingface/model_card/blob/master/examples.md"),a(sn,"rel","nofollow"),a(X,"id","lu"),a(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(X,"href","#lu"),a(C,"class","relative group"),a(K,"id","siu-d-liu-th-m-hnh"),a(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(K,"href","#siu-d-liu-th-m-hnh"),a(T,"class","relative group"),a(mn,"href","https://huggingface.co/camembert-base/blob/main/README.md"),a(mn,"rel","nofollow"),a(dn,"href","https://github.com/huggingface/hub-docs/blame/main/modelcard.md"),a(dn,"rel","nofollow")},m(n,e){t(document.head,$),r(n,fh,e),r(n,w,e),t(w,L),t(L,Cn),d(W,Cn,null),t(w,pt),t(w,Tn),t(Tn,mt),r(n,dh,e),r(n,yn,e),t(yn,vt),r(n,yh,e),r(n,bn,e),t(bn,ft),r(n,bh,e),r(n,I,e),t(I,dt),t(I,Ln),t(Ln,yt),t(I,bt),r(n,kh,e),r(n,D,e),t(D,kt),t(D,Y),t(Y,_t),t(D,Et),r(n,_h,e),r(n,kn,e),t(kn,$t),r(n,Eh,e),r(n,p,e),t(p,In),t(In,wt),t(p,Pt),t(p,Dn),t(Dn,qt),t(p,xt),t(p,Vn),t(Vn,At),t(p,Nt),t(p,jn),t(jn,Mt),t(p,St),t(p,Bn),t(Bn,Ht),t(p,Ct),t(p,On),t(On,Tt),t(p,Lt),t(p,Rn),t(Rn,It),r(n,$h,e),r(n,_n,e),t(_n,Dt),r(n,wh,e),r(n,P,e),t(P,V),t(V,Qn),d(Z,Qn,null),t(P,Vt),t(P,zn),t(zn,jt),r(n,Ph,e),r(n,En,e),t(En,Bt),r(n,qh,e),r(n,q,e),t(q,j),t(j,Fn),d(nn,Fn,null),t(q,Ot),t(q,Gn),t(Gn,Rt),r(n,xh,e),r(n,$n,e),t($n,Qt),r(n,Ah,e),r(n,x,e),t(x,B),t(B,Un),d(hn,Un,null),t(x,zt),t(x,Xn),t(Xn,Ft),r(n,Nh,e),r(n,O,e),t(O,Gt),t(O,Kn),t(Kn,Ut),t(O,Xt),r(n,Mh,e),r(n,A,e),t(A,R),t(R,Jn),d(tn,Jn,null),t(A,Kt),t(A,Wn),t(Wn,Jt),r(n,Sh,e),r(n,wn,e),t(wn,Wt),r(n,Hh,e),r(n,N,e),t(N,Q),t(Q,Yn),d(cn,Yn,null),t(N,Yt),t(N,Zn),t(Zn,Zt),r(n,Ch,e),r(n,Pn,e),t(Pn,nc),r(n,Th,e),r(n,M,e),t(M,z),t(z,nh),d(ln,nh,null),t(M,hc),t(M,hh),t(hh,tc),r(n,Lh,e),r(n,qn,e),t(qn,cc),r(n,Ih,e),r(n,S,e),t(S,F),t(F,th),d(en,th,null),t(S,ic),t(S,ch),t(ch,lc),r(n,Dh,e),r(n,xn,e),t(xn,ec),r(n,Vh,e),r(n,H,e),t(H,G),t(G,ih),d(rn,ih,null),t(H,rc),t(H,lh),t(lh,ac),r(n,jh,e),r(n,An,e),t(An,oc),r(n,Bh,e),r(n,E,e),t(E,eh),t(eh,an),t(an,rh),t(rh,uc),t(E,sc),t(E,ah),t(ah,on),t(on,oh),t(oh,gc),t(E,pc),t(E,uh),t(uh,un),t(un,sh),t(sh,mc),r(n,Oh,e),r(n,U,e),t(U,vc),t(U,sn),t(sn,fc),t(U,dc),r(n,Rh,e),r(n,C,e),t(C,X),t(X,gh),d(gn,gh,null),t(C,yc),t(C,ph),t(ph,bc),r(n,Qh,e),r(n,Nn,e),t(Nn,kc),r(n,zh,e),r(n,T,e),t(T,K),t(K,mh),d(pn,mh,null),t(T,_c),t(T,vh),t(vh,Ec),r(n,Fh,e),r(n,Mn,e),t(Mn,$c),r(n,Gh,e),r(n,J,e),t(J,wc),t(J,mn),t(mn,Pc),t(J,qc),r(n,Uh,e),d(vn,n,e),r(n,Xh,e),r(n,Sn,e),t(Sn,xc),r(n,Kh,e),r(n,fn,e),t(fn,dn),t(dn,Ac),t(fn,Nc),Jh=!0},p:Wi,i(n){Jh||(y(W.$$.fragment,n),y(Z.$$.fragment,n),y(nn.$$.fragment,n),y(hn.$$.fragment,n),y(tn.$$.fragment,n),y(cn.$$.fragment,n),y(ln.$$.fragment,n),y(en.$$.fragment,n),y(rn.$$.fragment,n),y(gn.$$.fragment,n),y(pn.$$.fragment,n),y(vn.$$.fragment,n),Jh=!0)},o(n){b(W.$$.fragment,n),b(Z.$$.fragment,n),b(nn.$$.fragment,n),b(hn.$$.fragment,n),b(tn.$$.fragment,n),b(cn.$$.fragment,n),b(ln.$$.fragment,n),b(en.$$.fragment,n),b(rn.$$.fragment,n),b(gn.$$.fragment,n),b(pn.$$.fragment,n),b(vn.$$.fragment,n),Jh=!1},d(n){h($),n&&h(fh),n&&h(w),k(W),n&&h(dh),n&&h(yn),n&&h(yh),n&&h(bn),n&&h(bh),n&&h(I),n&&h(kh),n&&h(D),n&&h(_h),n&&h(kn),n&&h(Eh),n&&h(p),n&&h($h),n&&h(_n),n&&h(wh),n&&h(P),k(Z),n&&h(Ph),n&&h(En),n&&h(qh),n&&h(q),k(nn),n&&h(xh),n&&h($n),n&&h(Ah),n&&h(x),k(hn),n&&h(Nh),n&&h(O),n&&h(Mh),n&&h(A),k(tn),n&&h(Sh),n&&h(wn),n&&h(Hh),n&&h(N),k(cn),n&&h(Ch),n&&h(Pn),n&&h(Th),n&&h(M),k(ln),n&&h(Lh),n&&h(qn),n&&h(Ih),n&&h(S),k(en),n&&h(Dh),n&&h(xn),n&&h(Vh),n&&h(H),k(rn),n&&h(jh),n&&h(An),n&&h(Bh),n&&h(E),n&&h(Oh),n&&h(U),n&&h(Rh),n&&h(C),k(gn),n&&h(Qh),n&&h(Nn),n&&h(zh),n&&h(T),k(pn),n&&h(Fh),n&&h(Mn),n&&h(Gh),n&&h(J),n&&h(Uh),k(vn,n),n&&h(Xh),n&&h(Sn),n&&h(Kh),n&&h(fn)}}}const hl={local:"xy-dng-cc-th-m-hnh",sections:[{local:null,sections:[{local:"m-t-v-m-hnh",title:"M\xF4 t\u1EA3 v\u1EC1 m\xF4 h\xECnh"},{local:"mc-ch-s-dng-gii-hn",title:"M\u1EE5c \u0111\xEDch s\u1EED d\u1EE5ng & gi\u1EDBi h\u1EA1n"},{local:"cch-s-dng",title:"C\xE1ch s\u1EED d\u1EE5ng"},{local:"d-liu-hun-luyn",title:"D\u1EEF li\u1EC7u hu\u1EA5n luy\u1EC7n"},{local:"quy-trnh-hun-luyn",title:"Quy tr\xECnh hu\u1EA5n luy\u1EC7n"},{local:"bin-v-ch-s-thc-o",title:"Bi\u1EBFn v\xE0 ch\u1EC9 s\u1ED1 th\u01B0\u1EDBc \u0111o"},{local:"nhng-kt-qu-nh-gi",title:"Nh\u1EEFng k\u1EBFt qu\u1EA3 \u0111\xE1nh gi\xE1"}],title:null},{local:"v-d",title:"V\xED d\u1EE5"},{local:"lu",title:"L\u01B0u \xFD"},{local:"siu-d-liu-th-m-hnh",title:"Si\xEAu d\u1EEF li\u1EC7u th\u1EBB m\xF4 h\xECnh"}],title:"X\xE2y d\u1EF1ng c\xE1c th\u1EBB m\xF4 h\xECnh"};function tl(Sc){return Yi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class el extends Ui{constructor($){super();Xi(this,$,tl,nl,Ki,{})}}export{el as default,hl as metadata};
