webpackJsonp([6],{EYnv:function(a,o){},NHnr:function(a,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});n("nrd6");var e=n("7+uW"),t=n("C/JF"),s=n("fhbW"),i=n("U0v6"),r={name:"MainApp",mixins:[n("q9Qt").a],data:function(){return{loading:!1}},mounted:function(){var a=this;this.$router.beforeEach(function(o,n,e){a.loading=!0,window.setTimeout(e,400)}),this.$router.afterEach(function(o,n){window.setTimeout(function(){a.loading=!1},400)})}},c={render:function(){var a=this.$createElement,o=this._self._c||a;return o("div",{attrs:{id:"app"}},[this.loadingFile?this._e():o("router-view"),o("div",{staticClass:"loader",class:{active:this.loading||this.loadingFile}},[this._v("Carregando..."),o("div",{staticClass:"pong"})])],1)},staticRenderFns:[]},d=n("VU/8")(r,c,!1,null,null,null).exports,u=n("/ocq");e.a.use(u.a);var p=new u.a({routes:[{path:"/",name:"Home",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"lO7g"))}},{path:"/problema",name:"O Problema",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"ECFM"))}},{path:"/causa",name:"A Causa",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"bGzh"))}},{path:"/solucao",name:"A Solução",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"1mGc"))}}]});n("yiVF"),n("EYnv"),n("sS50");delete L.Icon.Default.prototype._getIconUrl,L.Icon.Default.mergeOptions({iconRetinaUrl:n("qXhe"),iconUrl:n("TJ5S"),shadowUrl:n("wkq0")}),t.library.add(s.a,s.b),e.a.component("fa-icon",i.FontAwesomeIcon),e.a.config.productionTip=!1,new e.a({el:"#app",router:p,components:{App:d},template:"<App/>"})},"R/gG":function(a,o){a.exports='standardStyles:\n  white: &style.white\n    bgColor: white\n  black: &style.black\n    bgColor: black\n    color: \'#dfdfdf\'\n  lightGray: &style.lightGray\n    bgColor: \'#f0f0f0\'\n  gray: &style.gray\n    bgColor: \'#dfdfdf\'\n  red: &style.red\n    bgColor: \'#ffe4e4\'\n  blue: &style.blue\n    bgColor: \'#e4e4ff\'\n  green: &style.green\n    bgColor: \'#e4ffe4\'\n\nstandardCoords:\n  Litoral: &coords.Litoral\n    lat: -24.2\n    lng: -46.5\n    zoom: 8\n  Cananéia: &coords.Cananéia [-25.0244, -47.9323]\n  IlhaComprida: &coords.IlhaComprida [-24.76, -47.57]\n  IlhaCompridaIguape: &coords.IlhaCompridaIguape [-24.70, -47.50]\n  Iguape: &coords.Iguape [-24.65, -47.38]\n  Peruíbe: &coords.Peruíbe [-24.3173, -46.9956]\n  PeruíbeItanhaém: &coords.PeruíbeItanhaém [-24.24, -46.88]\n  Itanhaém: &coords.Itanhaém [-24.1817, -46.785]\n  Mongaguá: &coords.Mongaguá [-24.125, -46.6802]\n  MongaguáPraiaGrande: &coords.MongaguáPraiaGrande [-24.07, -46.58]\n  PraiaGrande: &coords.PraiaGrande [-24.02, -46.45]\n  SãoVicente: &coords.SãoVicente [-23.97, -46.37]\n  Santos: &coords.Santos [-23.97, -46.32]\n  Guarujá: &coords.Guarujá [-23.9948, -46.2569]\n  Bertioga: &coords.Bertioga [-23.8156, -46.0373]\n  BertiogaSãoSebastião: &coords.BertiogaSãoSebastião [-23.76, -45.8]\n  SãoSebastião: &coords.SãoSebastião [-23.81, -45.5]\n  Ilhabela: &coords.Ilhabela [-23.779, -45.3557]\n  Caraguatatuba: &coords.Caraguatatuba [-23.6255, -45.4241]\n  CaraguatatubaUbatuba: &coords.CaraguatatubaUbatuba [-23.55, -45.25]\n  Ubatuba: &coords.Ubatuba [-23.45, -45.06]\n\nappTitle: Reanimar\nappCaption: Um ensaio sobre a vida marinha.\n\nactOne:\n  title: \'I: A Mortalidade\'\n  caption: O que acontece nas praias paulistas\n\n  frames:\n    -\n      style: *style.black\n      title: Mais de 4.500 animais marinhos\n      content:\n        -\n          text: |\n            Esse é o número de animais que foram encontrados nas praias de São Paulo entre agosto de 2017 e agosto de 2018. Isso significa que, para cada humano que morre no mar, 6 animais marinhos morrem em terra entre Cananéia e Ubatuba.\n    -\n      title: O monitoramento\n      style: *style.lightGray\n      content:\n        -\n          text: |\n            Desde 2012, a Petrobras patrocina o Projeto de Monitoramento de Praias (PMP), que foi uma exigência dos órgãos ambientais para autorizar a extração de petróleo e gás natural do Pólo Pré-sal da Bacia de Santos. O projeto tem como objetivo incentivar a pesquisa dos impactos dessa exploração na vida marinha.\n\n            O PMP atua em vários Estados do Brasil, patrocinando institutos que efetuam pesquisa nas regiões atribúidas a eles, além do monitoramento das praias e resgate dos animais encontrados.\n\n    -\n      title: Quem monitora as praias paulistas\n      content:\n        -\n          iconText:\n            icon: http://ipecpesquisas.org.br/wp-content/uploads/2012/08/lo.png\n            text: |\n              **IPEC**: atua em Cananéia, Ilha Comprida e Iguape\n        -\n          iconText:\n            icon: http://www.biopesca.org.br/img/top_logo.png\n            text: |\n              **Biopesca**: trabalha entre Peruíbe e Praia Grande\n        -\n          iconText:\n            icon: https://www.ecoloja.art.br/image/cache/catalog/Projetos/GREMAR-500x500.jpg\n            text: |\n              **Gremar**: monitora as praias de São Vicente a Bertioga\n        -\n          iconText:\n            icon: http://3.bp.blogspot.com/_JJJ4o4Jcg48/RxTLulr2eCI/AAAAAAAADKE/A4lvL2I7rYw/s1600/logo_argo.jpg\n            text: |\n              **Argonauta**: cuida do Litoral Norte, entre São Sabestião e a divisa com o Rio de Janeiro\n\n        -\n          text: |\n            No entanto, apenas uma pequena parcela destes animais é encontrada com vida, e uma ainda menor retorna ao seu hábitat natural.\n        -\n          chart:\n            type: ColumnChart\n            options:\n              fontName: Roboto\n              height: 540\n              isStacked: true\n              title: Animais encontrados no litoral de São Paulo (Jun/2017-Jun/2018)\n              colors: [\'#f88\', \'#8af\']\n              legend:\n                position: bottom\n              backgroundColor:\n                fill: transparent\n            data:\n              - [Classe, Mortos, Vivos]\n              - ["Répteis (tartarugas)", 3065, 637]\n              - ["Aves (albatrozes e pinguins)", 416, 175]\n              - ["Mamíferos (golfinhos, baleias e botos)", 466, 17]\n        -\n          text: |\n            Embora estejam num bom momento graças ao patrocínio, as ONGs ainda dependem do seu acionamento por pessoas comuns para efetuar alguns resgates. "Nem sempre estamos por perto quando encontram algum animal, então as pessoas ajudam muito", conta Nelson Sater, gerente administrativo do Instituto Biopesca. Uma grande ajuda para o instituto é a dos pescadores artesanais, que ficam várias horas nos mesmos pontos da praia. "Eu tô com [o projeto] desde 2001", relata Roberto, pescador artesanal de Praia Grande. "Quando encontro um animal morto, sempre chamo o pessoal. Tô aqui pescando desde 1968, já vi de tudo", comenta.\n\n    -\n      title: As regiões monitoradas\n      style: *style.blue\n      content:\n        -\n          chart:\n            type: BarChart\n            options:\n              fontName: Roboto\n              height: 540\n              title: Ocorrências por região em São Paulo (Jun/2017-Jun/2018)\n              legend: bottom\n              backgroundColor:\n                fill: transparent\n            data:\n              - [Classe, Litoral Norte, Região Metropolitana (Praia Grande-Bertioga), Litoral Sul (Cananéia-Mongaguá)]\n              - ["Répteis (tartarugas)", 1475, 811, 1416]\n              - ["Aves (albatrozes e pinguins)", 137, 148, 306]\n              - ["Mamíferos (golfinhos, baleias e botos)", 165, 110, 208]\n              - [Total, 1777, 1069, 1930]\n\n    - title: Volume de ocorrências por cidade\n      content:\n        -\n          text: |\n            Quem mora na praia está acostumado com a presença de animais marinhos. É difícil encontrar quem nunca tenha visto um bicho encalhado pelo menos uma vez. "Eu já vi mais de quinze", conta Caio Araújo, desenvolvedor de 21 anos. "O que mais vejo é pinguim e tartaruga, mas já vi tubarão, baleia e até foca", conta o rapaz, que vive em Itanhaém desde que nasceu. Vendo animais marinhos com tanta frequência, é difícil imaginar que isso é algo fora do comum.\n\n            No entanto, o fato é que muitos animais enfrentam problemas por causa de ações humanas, como a presença do lixo nos mares, derramamento de óleo e até os impactos no fundo do mar, causados pela extração de petróleo. "Muitos animais que dependem da localização sonora acabam se desorientando no fundo do mar devido à ação humana", comenta Fábio Giordano, pesquisador e coordenador do curso de Biologia Marinha da Universidade Santa Cecília.\n        -\n          text: |\n            Os círculos no mapa indicam o volume de ocorrências em cada região. Quanto maior o círculo, mais ocorrências na área.\n\n            Esse mapa interativo não mostra apenas em quais locais mais animais são encontrados, mas também os pontos onde o monitoramento é mais carente, uma vez que regiões de difícil acesso - como a região de Boracéia, em Bertioga - têm uma cobertura mais carente.\n\n            É possível, ainda que não comprovado, que o número de ocorrências nessas áreas seja similar ao das outras áreas, mas que não haja pessoas suficientes para que a proteção desses animais seja suficiente.\n\n            <small>*Clique ou toque nos círculos para ver detalhes sobre a região.*</small>\n          map:\n            settings: *coords.Litoral\n            markers:\n              -\n                position: [-25.0064579, -47.9268818]\n                popupText: |\n                  **IPEC - Instituto de Pesquisas Cananéia**\n\n                  Principal instituto de pesquisa marinha do Vale do Ribeira. Responsável pelo monitoramento de Cananéia, Ilha Comprida e Iguape pelo PMP.\n              -\n                position: [-24.185314,-46.7886039]\n                popupText: |\n                  **Instituto Gremar (posto de estabilização)**\n\n                  Serve como ponto intermediário para o resgate de animais encontrados nas praias.\n              -\n                position: [-24.0048938,-46.4028284]\n                popupText: |\n                  **Instituto Biopesca**\n\n                  Responsável pelo monitoramento das praias entre as cidades de Peruíbe e Praia Grande.\n              -\n                position: [-23.9060064,-46.2025308]\n                popupText: |\n                  **Instituto Gremar**\n\n                  Responsável pelo monitoramento das praias entre as cidades de São Vicente e Bertioga.\n              -\n                position: [-23.4453423,-45.0722052]\n                popupText: |\n                  **Instituto Argonauta**\n\n                  Responsável pelo monitoramento das praias do Litoral Norte Paulista (região do Vale do Paraíba), entre as cidades de São Sebastião e Ubatuba.\n            circles:\n              -\n                position: *coords.Cananéia\n                popupText: |\n                  **Cananéia**\n\n                  Sede do IPEC - Instituto de Pesquisas Cananéia.\n\n                  Ocorrências: 159\n                size: 159\n              -\n                position: *coords.IlhaComprida\n                popupText: |\n                  **IlhaComprida**\n\n                  Ocorrências: 26\n                size: 26\n              -\n                position: *coords.IlhaCompridaIguape\n                popupText: |\n                  **Ilha Comprida/Iguape**\n\n                  Ocorrências: 688\n                size: 688\n              -\n                position: *coords.Iguape\n                popupText: |\n                  **Iguape**\n\n                  Ocorrências: 58\n                size: 58\n              -\n                position: *coords.Peruíbe\n                popupText: |\n                  **Peruíbe**\n\n                  Ocorrências: 80\n                size: 80\n              -\n                position: *coords.PeruíbeItanhaém\n                popupText: |\n                  **Peruíbe/Itanhaém**\n\n                  Ocorrências: 354\n                size: 354\n              -\n                position: *coords.Itanhaém\n                popupText: |\n                  **Itanhaém**\n\n                  Sede secundária do Instituto Gremar.\n\n                  Ocorrências: 218\n                size: 218\n              -\n                position: *coords.Mongaguá\n                popupText: |\n                  **Mongaguá**\n\n                  Ocorrências: 146\n                size: 146\n              -\n                position: *coords.MongaguáPraiaGrande\n                popupText: |\n                  **Mongaguá/Praia Grande**\n\n                  Ocorrências: 201\n                size: 201\n              -\n                position: *coords.PraiaGrande\n                popupText: |\n                  **Praia Grande**\n\n                  Sede do Instituto Biopesca.\n\n                  Ocorrências: 176\n                size: 176\n              -\n                position: *coords.SãoVicente\n                popupText: |\n                  **São Vicente**\n\n                  Ocorrências: 101\n                size: 101\n              -\n                position: *coords.Santos\n                popupText: |\n                  **Santos**\n\n                  Ocorrências: 82\n                size: 82\n              -\n                position: *coords.Guarujá\n                popupText: |\n                  **Guarujá**\n\n                  Sede primária do Instituto Gremar.\n\n                  Ocorrências: 351\n                size: 351\n              -\n                position: *coords.Bertioga\n                popupText: |\n                  **Bertioga**\n\n                  Ocorrências: 310\n                size: 310\n              -\n                position: *coords.BertiogaSãoSebastião\n                popupText: |\n                  **Boracéia (Bertioga/São Sebastião)**\n\n                  Ocorrências: 49\n                size: 49\n              -\n                position: *coords.SãoSebastião\n                popupText: |\n                  **São Sebastião**\n\n                  Ocorrências: 321\n                size: 321\n              -\n                position: *coords.Ilhabela\n                popupText: |\n                  **Ilhabela**\n\n                  Ocorrências: 410\n                size: 410\n              -\n                position: *coords.Caraguatatuba\n                popupText: |\n                  **Caraguatatuba**\n\n                  Ocorrências: 273\n                size: 273\n              -\n                position: *coords.CaraguatatubaUbatuba\n                popupText: |\n                  **Praia de Tabatinga (Caraguatatuba/Ubatuba)**\n\n                  Ocorrências: 20\n                size: 20\n              -\n                position: *coords.Ubatuba\n                popupText: |\n                  **Ubatuba**\n\n                  Sede do Instituto Argonauta.\n\n                  Ocorrências: 753\n                size: 753\n\nactTwo:\n  title: \'II: As Causas\'\n  caption: A raiz do problema\n  frames:\n    -\n      title: A grande lixeira do mar\n      style: *style.gray\n      content:\n        -\n          text: |\n            O lixo gerado pelo homem já é tema das discussões ambientais há algumas décadas. Embora hoje em dia todos estejam acostumados com esse debate, o tema de avaliação do impacto ambiental apenas tomou forma no final da década de 1960.\n\n            No entanto, este debate ainda precisa ganhar mais força. Estudos na área da ecologia reconhecem que os humanos são responsáveis pela mortalidade de 80% dos animais marinhos no litoral do Brasil entre Santa Catarina e São Paulo.\n        -\n          picture:\n            src: /reanimar/reanimar/static/vila.gilda.PNG\n            legend: Com mais de 20 mil habitantes, a Vila Gilda é a maior favela sobre palafitas do Brasil (Google/2011)\n          text: |\n            O fato é que quanto mais gente, mais lixo, e a população do litoral paulista só aumenta. Estudos mostram que 95% da população da Baixada Santista, área mais desenvolvida da costa de São Paulo, já vive em área urbana. Além disso, existe outro agravante: as habitações subnormais, ou seja, casas em condições precárias ou em áreas irregulares, como favelas e casas sobre palafitas. "Estamos acostumados a falar sobre as praias, os turistas", afirma Giordano. "No entanto, um problema muito sério existe numa região invisível da cidade de Santos", continua, referindo-se à favela de palafitas da Vila Gilda, a maior do país. "As pessoas nessas áreas irregulares não têm saneamento básico nem coleta de lixo. É um problema não só ambiental, mas social, e que afeta a todos nós."\n        -\n          chart:\n            type: LineChart\n            options:\n              fontName: Roboto\n              height: 540\n              title: Crescimento populacional na Baixada Santista\n              colors: [\'#3a3\', \'#a33\', \'#33a\']\n              legend:\n                position: bottom\n              backgroundColor:\n                fill: \'#f0f0f0\'\n              trendLines:\n                0:\n                  type: exponential\n            data:\n              - [Ano, População rural ou suburbana, População urbana, População total]\n              - ["1940", 66005, 128814, 194819]\n              - ["1950", 66427, 200960, 267387]\n              - ["1960", 23925, 398148, 422073]\n              - ["1970", 23759, 629682, 653441]\n              - ["1980", 5203, 956046, 961249]\n              - ["1991", 5245, 1215004, 1220249]\n              - ["2000", 6046, 1470774, 1476820]\n        -\n          text: |\n            O lixo que vai parar nos oceanos também tem relação com o turismo. Em 2016, [a cidade de Santos recolheu 140 toneladas de lixo das praias após o *Réveillon*](http://g1.globo.com/sp/santos-regiao/noticia/2016/01/santos-recolhe-140-toneladas-de-lixo-na-orla-da-praia-apos-reveillon.html).\n\n    -\n      title: Outras causas\n      style: *style.lightGray\n      content:\n        -\n          iconText:\n            text: O plástico descartado irregularmente por pessoas nas praias\n            icon: https://static.thenounproject.com/png/1741489-200.png\n            iconBgColor: \'#88ff88\'\n        -\n          iconText:\n            text: A pesca, principalmente em alto mar\n            iconBgColor: \'#88aaff\'\n            icon: https://d30y9cdsu7xlg0.cloudfront.net/png/196935-200.png\n        -\n          iconText:\n            text: Derramamentos de óleo e produtos químicos de embarcações\n            iconBgColor: \'#ffff88\'\n            icon: https://static.thenounproject.com/png/375-200.png\n        -\n          iconText:\n            text: As mudanças climáticas e as correntes dos oceanos\n            iconBgColor: \'#ffaa88\'\n            icon: https://static.thenounproject.com/png/170-200.png\n    -\n      title: A exploração do petróleo na Baixada Santista\n      content:\n        -\n          text: |\n            Desde 2006 há conhecimento do petróleo na camada pré-sal brasileira. Em anos recentes, se tornou objeto de estudo e investimentos na Bacia de Santos, situada entre os estados de Santa Catarina e São Paulo, e também em outros pontos do litoral brasileiro.\n\n            Essa extração se dá através da perfuração do solo marinho com máquinas pesadas, o que causa estrondos no fundo do mar que desorientam animais que dependem das correntes e das ondas sonoras para se orientar, causando encalhes. "Existem estudos feitos na região para medir o impacto da extração de petróleo nesse ecossistema", explica Fábio Giordano, "mas eles ainda não acontecem num volume tão grande quanto seria ideal. É complexo, pois os pesquisadores não têm muito espaço para acompanhar os trabalhos feitos em alto mar. E eles ficam nas bases por semanas, não é todo mundo que aguenta", conclui.\n\n            Por esses motivos, é difícil medir o impacto direto da extração de petróleo na vida marinha. No entanto, existem métodos. O PMP também busca analisar se os animais encontrados têm presença de óleo e determinar suas causas de morte com precisão, o que auxilia na tomada de decisão por parte do governo e das empresas. \n\n    -\n      title: \'"A Baía da Poluição"\'\n      style: *style.blue\n      content:\n        -\n          video: N85EShNnYT8\n\nactThree:\n  title: \'III: A Solução\'\n  caption: O que é feito para mudar a situação\n  frames:\n    -\n      title: Educação ambiental\n      style: *style.green\n      content:\n        -\n          picture:\n            src: /reanimar/reanimar/static/pescadores.jpg\n            legend: O [Projeto Pescador Amigo](http://www.biopesca.org.br/o_que_fazemos.htm#pa) foi uma iniciativa que criou vínculos entre os pescadores artesanais do Litoral Sul e as Unidades de Conservação\n          text: |\n            Muitos dos projetos atuantes na região da Baixada Santista contribuem para a educação ambiental com ações nas praias, escolas e áreas públicas.\n\n            De [parcerias entre o poder público e as universidades](http://www.santos.sp.gov.br/?q=content/lancadas-acoes-de-educacao-ambiental-em-santos) à [participação em diversos programas de conscientização](http://www.biopesca.org.br/o_que_fazemos.htm#ea) e a [produção a pesquisas acadêmicas](http://www.biopesca.org.br/o_que_fazemos.htm#pesquisas), vários órgãos fazem parte do esforço para espalhar o conhecimento sobre o meio ambiente.\n\n            "É extremamente necessário que mais pessoas participem, ou pelo menos não ajudem a destruir o meio ambiente", comenta Gabriela Silva, bióloga marinha que trabalha no Instituto Biopesca.\n\n\n    -\n      title: O PMP\n    -\n      title: A limpeza das praias\n    -\n      title: Como ajudar?\n    -\n      title: Galeria de fotos\n'},TJ5S:function(a,o){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="},q9Qt:function(a,o,n){"use strict";var e=n("Xxa5"),t=n.n(e),s=n("exGp"),i=n.n(s),r=n("mtWM"),c=n.n(r),d=n("5JMb"),u=n.n(d),p=n("R/gG"),m=(n.n(p),this),l=i()(t.a.mark(function a(){var o,n;return t.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:a.next=2;break;case 2:return a.next=4,c.a.get("/reanimar/reanimar/src/content.yaml");case 4:return o=a.sent,n=o.data,a.abrupt("return",u.a.parse(n));case 7:case"end":return a.stop()}},a,m)}))();o.a={data:function(){return{loadingFile:!0,text:{}}},mounted:function(){var a=this;return i()(t.a.mark(function o(){return t.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=3,l;case 3:a.text=o.sent,a.loadingFile=!1;case 5:case"end":return o.stop()}},o,a)}))()}}},qXhe:function(a,o){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcY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"},wkq0:function(a,o){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC"},yiVF:function(a,o){}},["NHnr"]);
//# sourceMappingURL=app.4524252731a0db72c435.js.map