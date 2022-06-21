import{S as No,i as Do,s as Io,e as t,k as m,w as c,t as p,M as Uo,c as r,d as a,m as u,a as n,x as l,h as f,b as i,G as o,g as d,y as h,L as Qo,q as v,o as $,B as g,v as Ho}from"../../chunks/vendor-hf-doc-builder.js";import{I as q}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as So}from"../../chunks/CodeBlock-hf-doc-builder.js";import{Q as x}from"../../chunks/Question-hf-doc-builder.js";function Lo(Wa){let _,He,w,D,he,T,xa,ve,_a,Le,le,wa,Me,b,I,$e,V,ba,B,Ea,ge,ja,ya,Oe,F,Re,J,ze,U,Aa,qe,ka,Pa,Ge,K,Te,E,Q,xe,W,Ca,j,Sa,_e,Na,Da,we,Ia,Ua,Ve,X,Be,y,H,be,Y,Qa,Ee,Ha,Fe,Z,Je,A,L,je,ee,La,ye,Ma,Ke,ae,We,k,M,Ae,oe,Oa,ke,Ra,Xe,se,Ye,te,Ze,P,O,Pe,re,za,Ce,Ga,ea,ne,aa,C,R,Se,ie,Ta,Ne,Va,oa,de,sa,S,z,De,me,Ba,Ie,Fa,ta,ue,ra,N,G,Ue,ce,Ja,Qe,Ka,na,pe,ia;return T=new q({}),V=new q({}),F=new x({props:{choices:[{text:"Localmente, por exemplo no seu laptop",explain:"Correto! Voc\xEA pode passar os caminhos dos arquivos locais para o argumento <code>data_files</code> de <code>load_dataset()</code> para carregar conjuntos de dados localmente.",correct:!0},{text:"Do Hugging Face Hub",explain:"Correto! Voc\xEA pode carregar conjuntos de dados no Hub fornecendo o ID do conjunto de dados, por exemplo, <code>load_dataset('emotion')</code>.",correct:!0},{text:"De um servidor remoto",explain:"Correto! Voc\xEA pode passar URLs para o argumento <code>data_files</code> de <code>load_dataset()</code> para carregar arquivos remotos.",correct:!0}]}}),J=new So({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

dataset = load_dataset(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mrpc&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)`}}),K=new x({props:{choices:[{text:"<code>dataset.sample(50)</code>",explain:"Isso est\xE1 incorreto -- n\xE3o h\xE1 m\xE9todo <code>Dataset.sample()</code>."},{text:"<code>dataset.shuffle().select(range(50))</code>",explain:"Correto! Como voc\xEA viu neste cap\xEDtulo, voc\xEA primeiro embaralha o conjunto de dados e depois seleciona as amostras dele.",correct:!0},{text:"<code>dataset.select(range(50)).shuffle()</code>",explain:"Isso est\xE1 incorreto - embora o c\xF3digo seja executado, ele embaralha apenas os primeiros 50 elementos do conjunto de dados."}]}}),W=new q({}),X=new x({props:{choices:[{text:"<code>pets_dataset.filter(lambda x : x['name'].startswith('L'))</code>",explain:"Correto! Usar uma fun\xE7\xE3o lambda do Python para esses filtros r\xE1pidos \xE9 uma \xF3tima ideia. Voc\xEA consegue pensar em outra solu\xE7\xE3o?",correct:!0},{text:"<code>pets_dataset.filter(lambda x['name'].startswith('L'))</code>",explain:"Isso est\xE1 incorreto -- uma fun\xE7\xE3o lambda assume a forma geral <code>lambda *arguments* : *expression*</code>, ent\xE3o voc\xEA precisa fornecer argumentos neste caso."},{text:"Criar uma fun\xE7\xE3o assim <code>def filter_names(x): return x['name'].startswith('L')</code> e executa-la <code>pets_dataset.filter(filter_names)</code>.",explain:"Correto! Assim como com <code>Dataset.map()</code>, voc\xEA pode passar fun\xE7\xF5es expl\xEDcitas para <code>Dataset.filter()</code>. Isso \xE9 \xFAtil quando voc\xEA tem alguma l\xF3gica complexa que n\xE3o \xE9 adequado para uma fun\xE7\xE3o lambda curta. Qual das outras solu\xE7\xF5es funcionaria?",correct:!0}]}}),Y=new q({}),Z=new x({props:{choices:[{text:"Um mapeamento entre CPU e GPU RAM",explain:"N\xE3o \xE9 isso - tente novamente!"},{text:"Um mapeamento entre RAM e armazenamento do sistema de arquivos",explain:"Correto! Os \u{1F917} Datasets tratam cada conjunto de dados como um arquivo mapeado na mem\xF3ria. Isso permite que a biblioteca acesse e opere em elementos do conjunto de dados sem precisar carreg\xE1-lo totalmente na mem\xF3ria.",correct:!0},{text:"Um mapeamento entre dois arquivos no cache \u{1F917} Datasets",explain:"Isto n\xE3o est\xE1 correto - tente novamente!"}]}}),ee=new q({}),ae=new x({props:{choices:[{text:"Acessar arquivos mapeados na mem\xF3ria \xE9 mais r\xE1pido do que ler ou gravar no disco.",explain:"Correto! Isso permite que \u{1F917} Datasets sejam extremamente r\xE1pidos. Mas esse n\xE3o \xE9 o \xFAnico benef\xEDcio.",correct:!0},{text:"As aplica\xE7\xF5es podem acessar segmentos de dados em um arquivo extremamente grande sem precisar ler o arquivo inteiro na RAM primeiro.",explain:"Correto! Isso permite que \u{1F917} Datasets carregue conjuntos de dados de v\xE1rios gigabytes em seu laptop sem explodir sua CPU. Que outra vantagem o mapeamento de mem\xF3ria oferece?",correct:!0},{text:"Consome menos energia, ent\xE3o sua bateria dura mais.",explain:"Isto n\xE3o est\xE1 correto - tente novamente!"}]}}),oe=new q({}),se=new So({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

dataset = load_dataset(<span class="hljs-string">&quot;allocine&quot;</span>, streaming=<span class="hljs-literal">True</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
dataset[<span class="hljs-number">0</span>]`}}),te=new x({props:{choices:[{text:"Ele tenta fazer stream de um conjunto de dados grande demais para caber na RAM.",explain:"Isso n\xE3o est\xE1 correto - conjuntos de dados de streaming s\xE3o descompactados em tempo real e voc\xEA pode processar conjuntos de dados de terabytes com muito pouca RAM!"},{text:"Ele tenta acessar um <code>IterableDataset</code>.",explain:"Correto! Um <code>IterableDataset</code> \xE9 um gerador, n\xE3o um cont\xEAiner, ent\xE3o voc\xEA deve acessar seus elementos usando <code>next(iter(dataset))</code>.",correct:!0},{text:"O conjunto de dados <code>allocine</code> n\xE3o tem uma divis\xE3o <code>train</code>.",explain:"Isso est\xE1 incorreto - confira o cart\xE3o de conjunto de dados [<code>allocine</code>](https://huggingface.co/datasets/allocine) no Hub para ver quais divis\xF5es ele cont\xE9m."}]}}),re=new q({}),ne=new x({props:{choices:[{text:"Ele fornece informa\xE7\xF5es sobre o uso pretendido e as tarefas suportadas do conjunto de dados para que outras pessoas na comunidade possam tomar uma decis\xE3o informada sobre o uso.",explain:"Correto! Conjuntos de dados n\xE3o documentados podem ser usados para treinar modelos que podem n\xE3o refletir as inten\xE7\xF5es dos criadores do conjunto de dados ou podem produzir modelos cujo status legal \xE9 obscuro se forem treinados em dados que violam restri\xE7\xF5es de privacidade ou licenciamento. Este n\xE3o \xE9 o \xFAnico benef\xEDcio, no entanto!",correct:!0},{text:"Ajuda a chamar a aten\xE7\xE3o para os preconceitos que est\xE3o presentes em um corpus.",explain:"Correto! Quase todos os conjuntos de dados t\xEAm algum tipo de vi\xE9s, o que pode produzir consequ\xEAncias negativas em contrapartida. Estar ciente disso ajuda os criadores de modelos a entender como lidar com os vieses. Em que mais os cart\xF5es de conjunto de dados ajudam?",correct:!0},{text:"Melhora as chances de que outras pessoas da comunidade usem meu conjunto de dados.",explain:"Correto! Um cart\xE3o de conjunto de dados bem escrito tender\xE1 a aumentar o uso de seu precioso conjunto de dados. Que outros benef\xEDcios ele oferece?",correct:!0}]}}),ie=new q({}),de=new x({props:{choices:[{text:"Uma maneira de pesquisar correspond\xEAncias exatas entre as palavras em uma consulta e os documentos em um corpus",explain:"Isso est\xE1 incorreto - esse tipo de pesquisa \xE9 chamado de *pesquisa l\xE9xica* e \xE9 o que voc\xEA normalmente v\xEA nos mecanismos de pesquisa tradicionais."},{text:"Uma maneira de pesquisar documentos correspondentes entendendo o significado contextual de uma consulta",explain:"Correto! A pesquisa sem\xE2ntica usa vetores incorporados para representar consultas e documentos e usa uma m\xE9trica de similaridade para medir a quantidade de sobreposi\xE7\xE3o entre eles. De que outra forma voc\xEA poderia descrev\xEA-la?",correct:!0},{text:"Uma maneira de melhorar a precis\xE3o da pesquisa",explain:"Correto! Os mecanismos de pesquisa sem\xE2ntica podem capturar a inten\xE7\xE3o de uma consulta muito melhor do que a correspond\xEAncia de palavras-chave e normalmente recuperam documentos com maior precis\xE3o. Mas essa n\xE3o \xE9 a \xFAnica resposta certa - o que mais a pesquisa sem\xE2ntica oferece?",correct:!0}]}}),me=new q({}),ue=new x({props:{choices:[{text:"Uma consulta curta e um par\xE1grafo mais longo que responde \xE0 consulta",explain:"Correto!",correct:!0},{text:"Consultas e par\xE1grafos com aproximadamente o mesmo tamanho",explain:"Este \xE9 realmente um exemplo de pesquisa sem\xE2ntica sim\xE9trica - tente novamente!"},{text:"Uma consulta longa e um par\xE1grafo mais curto que responde \xE0 consulta",explain:"Isso est\xE1 incorreto - tente novamente!"}]}}),ce=new q({}),pe=new x({props:{choices:[{text:"N\xE3o",explain:"Isso est\xE1 incorreto -- \u{1F917} Datasets atualmente suporta dados tabulares, \xE1udio e de vis\xE3o computacional. Confira o <a href='https://huggingface.co/datasets/mnist'>conjunto de dados MNIST</a> no Hub para um exemplo de vis\xE3o computacional."},{text:"Sim",explain:"Correto! Confira os desenvolvimentos interessantes com fala e vis\xE3o na biblioteca \u{1F917} Transformers para ver como \u{1F917} Datasets \xE9 usado nesses dom\xEDnios.",correct:!0}]}}),{c(){_=t("meta"),He=m(),w=t("h1"),D=t("a"),he=t("span"),c(T.$$.fragment),xa=m(),ve=t("span"),_a=p("Question\xE1rio de fim de cap\xEDtulo"),Le=p(`

Este cap\xEDtulo cobriu muita coisa! N\xE3o se preocupe se voc\xEA n\xE3o entendeu todos os detalhes; os pr\xF3ximos cap\xEDtulos o ajudar\xE3o a entender como as coisas funcionam.
`),le=t("p"),wa=p("Antes de prosseguir, vamos testar o que voc\xEA aprendeu neste cap\xEDtulo."),Me=m(),b=t("h3"),I=t("a"),$e=t("span"),c(V.$$.fragment),ba=m(),B=t("span"),Ea=p("1. A fun\xE7\xE3o "),ge=t("code"),ja=p("load_dataset()"),ya=p(" em \u{1F917} Datasets permite carregar um dataset de qual dos seguintes locais?"),Oe=m(),c(F.$$.fragment),Re=p(`
### 2. Suponha que voc\xEA carregue uma das tarefas GLUE da seguinte forma:

	`),c(J.$$.fragment),ze=m(),U=t("p"),Aa=p("Qual dos seguintes comandos produzir\xE1 uma amostra aleat\xF3ria de 50 elementos do "),qe=t("code"),ka=p("conjunto de dados"),Pa=p("?"),Ge=m(),c(K.$$.fragment),Te=m(),E=t("h3"),Q=t("a"),xe=t("span"),c(W.$$.fragment),Ca=m(),j=t("span"),Sa=p("3. Suponha que voc\xEA tenha um conjunto de dados sobre animais dom\xE9sticos chamado "),_e=t("code"),Na=p("pets_dataset"),Da=p(", que tem uma coluna "),we=t("code"),Ia=p("name"),Ua=p(" que denota o nome de cada animal. Qual das seguintes abordagens permitiria filtrar o conjunto de dados para todos os animais de estima\xE7\xE3o cujos nomes come\xE7am com a letra \u201CL\u201D?"),Ve=m(),c(X.$$.fragment),Be=m(),y=t("h3"),H=t("a"),be=t("span"),c(Y.$$.fragment),Qa=m(),Ee=t("span"),Ha=p("4. O que \xE9 mapeamento de mem\xF3ria?"),Fe=m(),c(Z.$$.fragment),Je=m(),A=t("h3"),L=t("a"),je=t("span"),c(ee.$$.fragment),La=m(),ye=t("span"),Ma=p("5. Quais dos seguintes s\xE3o os principais benef\xEDcios do mapeamento de mem\xF3ria?"),Ke=m(),c(ae.$$.fragment),We=m(),k=t("h3"),M=t("a"),Ae=t("span"),c(oe.$$.fragment),Oa=m(),ke=t("span"),Ra=p("6. Por que o c\xF3digo a seguir falha?"),Xe=m(),c(se.$$.fragment),Ye=m(),c(te.$$.fragment),Ze=m(),P=t("h3"),O=t("a"),Pe=t("span"),c(re.$$.fragment),za=m(),Ce=t("span"),Ga=p("7. Quais dos seguintes s\xE3o os principais benef\xEDcios de criar um cart\xE3o de conjunto de dados?"),ea=m(),c(ne.$$.fragment),aa=m(),C=t("h3"),R=t("a"),Se=t("span"),c(ie.$$.fragment),Ta=m(),Ne=t("span"),Va=p("8. O que \xE9 pesquisa sem\xE2ntica?"),oa=m(),c(de.$$.fragment),sa=m(),S=t("h3"),z=t("a"),De=t("span"),c(me.$$.fragment),Ba=m(),Ie=t("span"),Fa=p("9. Para pesquisa sem\xE2ntica assim\xE9trica, voc\xEA geralmente tem:"),ta=m(),c(ue.$$.fragment),ra=m(),N=t("h3"),G=t("a"),Ue=t("span"),c(ce.$$.fragment),Ja=m(),Qe=t("span"),Ka=p("10. Posso usar \u{1F917} Datasets para carregar dados para uso em outros dom\xEDnios, como processamento de fala (audios)?"),na=m(),c(pe.$$.fragment),this.h()},l(e){const s=Uo('[data-svelte="svelte-1phssyn"]',document.head);_=r(s,"META",{name:!0,content:!0}),s.forEach(a),He=u(e),w=r(e,"H1",{class:!0});var da=n(w);D=r(da,"A",{id:!0,class:!0,href:!0});var Xa=n(D);he=r(Xa,"SPAN",{});var Ya=n(he);l(T.$$.fragment,Ya),Ya.forEach(a),Xa.forEach(a),xa=u(da),ve=r(da,"SPAN",{});var Za=n(ve);_a=f(Za,"Question\xE1rio de fim de cap\xEDtulo"),Za.forEach(a),da.forEach(a),Le=f(e,`

Este cap\xEDtulo cobriu muita coisa! N\xE3o se preocupe se voc\xEA n\xE3o entendeu todos os detalhes; os pr\xF3ximos cap\xEDtulos o ajudar\xE3o a entender como as coisas funcionam.
`),le=r(e,"P",{});var eo=n(le);wa=f(eo,"Antes de prosseguir, vamos testar o que voc\xEA aprendeu neste cap\xEDtulo."),eo.forEach(a),Me=u(e),b=r(e,"H3",{class:!0});var ma=n(b);I=r(ma,"A",{id:!0,class:!0,href:!0});var ao=n(I);$e=r(ao,"SPAN",{});var oo=n($e);l(V.$$.fragment,oo),oo.forEach(a),ao.forEach(a),ba=u(ma),B=r(ma,"SPAN",{});var ua=n(B);Ea=f(ua,"1. A fun\xE7\xE3o "),ge=r(ua,"CODE",{});var so=n(ge);ja=f(so,"load_dataset()"),so.forEach(a),ya=f(ua," em \u{1F917} Datasets permite carregar um dataset de qual dos seguintes locais?"),ua.forEach(a),ma.forEach(a),Oe=u(e),l(F.$$.fragment,e),Re=f(e,`
### 2. Suponha que voc\xEA carregue uma das tarefas GLUE da seguinte forma:

	`),l(J.$$.fragment,e),ze=u(e),U=r(e,"P",{});var ca=n(U);Aa=f(ca,"Qual dos seguintes comandos produzir\xE1 uma amostra aleat\xF3ria de 50 elementos do "),qe=r(ca,"CODE",{});var to=n(qe);ka=f(to,"conjunto de dados"),to.forEach(a),Pa=f(ca,"?"),ca.forEach(a),Ge=u(e),l(K.$$.fragment,e),Te=u(e),E=r(e,"H3",{class:!0});var pa=n(E);Q=r(pa,"A",{id:!0,class:!0,href:!0});var ro=n(Q);xe=r(ro,"SPAN",{});var no=n(xe);l(W.$$.fragment,no),no.forEach(a),ro.forEach(a),Ca=u(pa),j=r(pa,"SPAN",{});var fe=n(j);Sa=f(fe,"3. Suponha que voc\xEA tenha um conjunto de dados sobre animais dom\xE9sticos chamado "),_e=r(fe,"CODE",{});var io=n(_e);Na=f(io,"pets_dataset"),io.forEach(a),Da=f(fe,", que tem uma coluna "),we=r(fe,"CODE",{});var mo=n(we);Ia=f(mo,"name"),mo.forEach(a),Ua=f(fe," que denota o nome de cada animal. Qual das seguintes abordagens permitiria filtrar o conjunto de dados para todos os animais de estima\xE7\xE3o cujos nomes come\xE7am com a letra \u201CL\u201D?"),fe.forEach(a),pa.forEach(a),Ve=u(e),l(X.$$.fragment,e),Be=u(e),y=r(e,"H3",{class:!0});var la=n(y);H=r(la,"A",{id:!0,class:!0,href:!0});var uo=n(H);be=r(uo,"SPAN",{});var co=n(be);l(Y.$$.fragment,co),co.forEach(a),uo.forEach(a),Qa=u(la),Ee=r(la,"SPAN",{});var po=n(Ee);Ha=f(po,"4. O que \xE9 mapeamento de mem\xF3ria?"),po.forEach(a),la.forEach(a),Fe=u(e),l(Z.$$.fragment,e),Je=u(e),A=r(e,"H3",{class:!0});var fa=n(A);L=r(fa,"A",{id:!0,class:!0,href:!0});var lo=n(L);je=r(lo,"SPAN",{});var fo=n(je);l(ee.$$.fragment,fo),fo.forEach(a),lo.forEach(a),La=u(fa),ye=r(fa,"SPAN",{});var ho=n(ye);Ma=f(ho,"5. Quais dos seguintes s\xE3o os principais benef\xEDcios do mapeamento de mem\xF3ria?"),ho.forEach(a),fa.forEach(a),Ke=u(e),l(ae.$$.fragment,e),We=u(e),k=r(e,"H3",{class:!0});var ha=n(k);M=r(ha,"A",{id:!0,class:!0,href:!0});var vo=n(M);Ae=r(vo,"SPAN",{});var $o=n(Ae);l(oe.$$.fragment,$o),$o.forEach(a),vo.forEach(a),Oa=u(ha),ke=r(ha,"SPAN",{});var go=n(ke);Ra=f(go,"6. Por que o c\xF3digo a seguir falha?"),go.forEach(a),ha.forEach(a),Xe=u(e),l(se.$$.fragment,e),Ye=u(e),l(te.$$.fragment,e),Ze=u(e),P=r(e,"H3",{class:!0});var va=n(P);O=r(va,"A",{id:!0,class:!0,href:!0});var qo=n(O);Pe=r(qo,"SPAN",{});var xo=n(Pe);l(re.$$.fragment,xo),xo.forEach(a),qo.forEach(a),za=u(va),Ce=r(va,"SPAN",{});var _o=n(Ce);Ga=f(_o,"7. Quais dos seguintes s\xE3o os principais benef\xEDcios de criar um cart\xE3o de conjunto de dados?"),_o.forEach(a),va.forEach(a),ea=u(e),l(ne.$$.fragment,e),aa=u(e),C=r(e,"H3",{class:!0});var $a=n(C);R=r($a,"A",{id:!0,class:!0,href:!0});var wo=n(R);Se=r(wo,"SPAN",{});var bo=n(Se);l(ie.$$.fragment,bo),bo.forEach(a),wo.forEach(a),Ta=u($a),Ne=r($a,"SPAN",{});var Eo=n(Ne);Va=f(Eo,"8. O que \xE9 pesquisa sem\xE2ntica?"),Eo.forEach(a),$a.forEach(a),oa=u(e),l(de.$$.fragment,e),sa=u(e),S=r(e,"H3",{class:!0});var ga=n(S);z=r(ga,"A",{id:!0,class:!0,href:!0});var jo=n(z);De=r(jo,"SPAN",{});var yo=n(De);l(me.$$.fragment,yo),yo.forEach(a),jo.forEach(a),Ba=u(ga),Ie=r(ga,"SPAN",{});var Ao=n(Ie);Fa=f(Ao,"9. Para pesquisa sem\xE2ntica assim\xE9trica, voc\xEA geralmente tem:"),Ao.forEach(a),ga.forEach(a),ta=u(e),l(ue.$$.fragment,e),ra=u(e),N=r(e,"H3",{class:!0});var qa=n(N);G=r(qa,"A",{id:!0,class:!0,href:!0});var ko=n(G);Ue=r(ko,"SPAN",{});var Po=n(Ue);l(ce.$$.fragment,Po),Po.forEach(a),ko.forEach(a),Ja=u(qa),Qe=r(qa,"SPAN",{});var Co=n(Qe);Ka=f(Co,"10. Posso usar \u{1F917} Datasets para carregar dados para uso em outros dom\xEDnios, como processamento de fala (audios)?"),Co.forEach(a),qa.forEach(a),na=u(e),l(pe.$$.fragment,e),this.h()},h(){i(_,"name","hf:doc:metadata"),i(_,"content",JSON.stringify(Mo)),i(D,"id","questionrio-de-fim-de-captulo"),i(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(D,"href","#questionrio-de-fim-de-captulo"),i(w,"class","relative group"),i(I,"id","1.-a-fun\xE7\xE3o-<code>load_dataset()</code>-em-\u{1F917}-datasets-permite-carregar-um-dataset-de-qual-dos-seguintes-locais?"),i(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(I,"href","#1.-a-fun\xE7\xE3o-<code>load_dataset()</code>-em-\u{1F917}-datasets-permite-carregar-um-dataset-de-qual-dos-seguintes-locais?"),i(b,"class","relative group"),i(Q,"id","3.-suponha-que-voc\xEA-tenha-um-conjunto-de-dados-sobre-animais-dom\xE9sticos-chamado-<code>pets_dataset</code>,-que-tem-uma-coluna-<code>name</code>-que-denota-o-nome-de-cada-animal.-qual-das-seguintes-abordagens-permitiria-filtrar-o-conjunto-de-dados-para-todos-os-animais-de-estima\xE7\xE3o-cujos-nomes-come\xE7am-com-a-letra-\u201Cl\u201D?"),i(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(Q,"href","#3.-suponha-que-voc\xEA-tenha-um-conjunto-de-dados-sobre-animais-dom\xE9sticos-chamado-<code>pets_dataset</code>,-que-tem-uma-coluna-<code>name</code>-que-denota-o-nome-de-cada-animal.-qual-das-seguintes-abordagens-permitiria-filtrar-o-conjunto-de-dados-para-todos-os-animais-de-estima\xE7\xE3o-cujos-nomes-come\xE7am-com-a-letra-\u201Cl\u201D?"),i(E,"class","relative group"),i(H,"id","4.-o-que-\xE9-mapeamento-de-mem\xF3ria?"),i(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(H,"href","#4.-o-que-\xE9-mapeamento-de-mem\xF3ria?"),i(y,"class","relative group"),i(L,"id","5.-quais-dos-seguintes-s\xE3o-os-principais-benef\xEDcios-do-mapeamento-de-mem\xF3ria?"),i(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(L,"href","#5.-quais-dos-seguintes-s\xE3o-os-principais-benef\xEDcios-do-mapeamento-de-mem\xF3ria?"),i(A,"class","relative group"),i(M,"id","6.-por-que-o-c\xF3digo-a-seguir-falha?"),i(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(M,"href","#6.-por-que-o-c\xF3digo-a-seguir-falha?"),i(k,"class","relative group"),i(O,"id","7.-quais-dos-seguintes-s\xE3o-os-principais-benef\xEDcios-de-criar-um-cart\xE3o-de-conjunto-de-dados?"),i(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(O,"href","#7.-quais-dos-seguintes-s\xE3o-os-principais-benef\xEDcios-de-criar-um-cart\xE3o-de-conjunto-de-dados?"),i(P,"class","relative group"),i(R,"id","8.-o-que-\xE9-pesquisa-sem\xE2ntica?"),i(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(R,"href","#8.-o-que-\xE9-pesquisa-sem\xE2ntica?"),i(C,"class","relative group"),i(z,"id","9.-para-pesquisa-sem\xE2ntica-assim\xE9trica,-voc\xEA-geralmente-tem:"),i(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(z,"href","#9.-para-pesquisa-sem\xE2ntica-assim\xE9trica,-voc\xEA-geralmente-tem:"),i(S,"class","relative group"),i(G,"id","10.-posso-usar-\u{1F917}-datasets-para-carregar-dados-para-uso-em-outros-dom\xEDnios,-como-processamento-de-fala-(audios)?"),i(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(G,"href","#10.-posso-usar-\u{1F917}-datasets-para-carregar-dados-para-uso-em-outros-dom\xEDnios,-como-processamento-de-fala-(audios)?"),i(N,"class","relative group")},m(e,s){o(document.head,_),d(e,He,s),d(e,w,s),o(w,D),o(D,he),h(T,he,null),o(w,xa),o(w,ve),o(ve,_a),d(e,Le,s),d(e,le,s),o(le,wa),d(e,Me,s),d(e,b,s),o(b,I),o(I,$e),h(V,$e,null),o(b,ba),o(b,B),o(B,Ea),o(B,ge),o(ge,ja),o(B,ya),d(e,Oe,s),h(F,e,s),d(e,Re,s),h(J,e,s),d(e,ze,s),d(e,U,s),o(U,Aa),o(U,qe),o(qe,ka),o(U,Pa),d(e,Ge,s),h(K,e,s),d(e,Te,s),d(e,E,s),o(E,Q),o(Q,xe),h(W,xe,null),o(E,Ca),o(E,j),o(j,Sa),o(j,_e),o(_e,Na),o(j,Da),o(j,we),o(we,Ia),o(j,Ua),d(e,Ve,s),h(X,e,s),d(e,Be,s),d(e,y,s),o(y,H),o(H,be),h(Y,be,null),o(y,Qa),o(y,Ee),o(Ee,Ha),d(e,Fe,s),h(Z,e,s),d(e,Je,s),d(e,A,s),o(A,L),o(L,je),h(ee,je,null),o(A,La),o(A,ye),o(ye,Ma),d(e,Ke,s),h(ae,e,s),d(e,We,s),d(e,k,s),o(k,M),o(M,Ae),h(oe,Ae,null),o(k,Oa),o(k,ke),o(ke,Ra),d(e,Xe,s),h(se,e,s),d(e,Ye,s),h(te,e,s),d(e,Ze,s),d(e,P,s),o(P,O),o(O,Pe),h(re,Pe,null),o(P,za),o(P,Ce),o(Ce,Ga),d(e,ea,s),h(ne,e,s),d(e,aa,s),d(e,C,s),o(C,R),o(R,Se),h(ie,Se,null),o(C,Ta),o(C,Ne),o(Ne,Va),d(e,oa,s),h(de,e,s),d(e,sa,s),d(e,S,s),o(S,z),o(z,De),h(me,De,null),o(S,Ba),o(S,Ie),o(Ie,Fa),d(e,ta,s),h(ue,e,s),d(e,ra,s),d(e,N,s),o(N,G),o(G,Ue),h(ce,Ue,null),o(N,Ja),o(N,Qe),o(Qe,Ka),d(e,na,s),h(pe,e,s),ia=!0},p:Qo,i(e){ia||(v(T.$$.fragment,e),v(V.$$.fragment,e),v(F.$$.fragment,e),v(J.$$.fragment,e),v(K.$$.fragment,e),v(W.$$.fragment,e),v(X.$$.fragment,e),v(Y.$$.fragment,e),v(Z.$$.fragment,e),v(ee.$$.fragment,e),v(ae.$$.fragment,e),v(oe.$$.fragment,e),v(se.$$.fragment,e),v(te.$$.fragment,e),v(re.$$.fragment,e),v(ne.$$.fragment,e),v(ie.$$.fragment,e),v(de.$$.fragment,e),v(me.$$.fragment,e),v(ue.$$.fragment,e),v(ce.$$.fragment,e),v(pe.$$.fragment,e),ia=!0)},o(e){$(T.$$.fragment,e),$(V.$$.fragment,e),$(F.$$.fragment,e),$(J.$$.fragment,e),$(K.$$.fragment,e),$(W.$$.fragment,e),$(X.$$.fragment,e),$(Y.$$.fragment,e),$(Z.$$.fragment,e),$(ee.$$.fragment,e),$(ae.$$.fragment,e),$(oe.$$.fragment,e),$(se.$$.fragment,e),$(te.$$.fragment,e),$(re.$$.fragment,e),$(ne.$$.fragment,e),$(ie.$$.fragment,e),$(de.$$.fragment,e),$(me.$$.fragment,e),$(ue.$$.fragment,e),$(ce.$$.fragment,e),$(pe.$$.fragment,e),ia=!1},d(e){a(_),e&&a(He),e&&a(w),g(T),e&&a(Le),e&&a(le),e&&a(Me),e&&a(b),g(V),e&&a(Oe),g(F,e),e&&a(Re),g(J,e),e&&a(ze),e&&a(U),e&&a(Ge),g(K,e),e&&a(Te),e&&a(E),g(W),e&&a(Ve),g(X,e),e&&a(Be),e&&a(y),g(Y),e&&a(Fe),g(Z,e),e&&a(Je),e&&a(A),g(ee),e&&a(Ke),g(ae,e),e&&a(We),e&&a(k),g(oe),e&&a(Xe),g(se,e),e&&a(Ye),g(te,e),e&&a(Ze),e&&a(P),g(re),e&&a(ea),g(ne,e),e&&a(aa),e&&a(C),g(ie),e&&a(oa),g(de,e),e&&a(sa),e&&a(S),g(me),e&&a(ta),g(ue,e),e&&a(ra),e&&a(N),g(ce),e&&a(na),g(pe,e)}}}const Mo={local:"questionrio-de-fim-de-captulo",title:"Question\xE1rio de fim de cap\xEDtulo"};function Oo(Wa){return Ho(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Vo extends No{constructor(_){super();Do(this,_,Oo,Lo,Io,{})}}export{Vo as default,Mo as metadata};
