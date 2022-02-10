(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{172:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return m}));var a=r(0),t=r.n(a);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var u=t.a.createContext({}),c=function(e){var n=t.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=c(e.components);return t.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},d=t.a.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?t.a.createElement(m,s(s({ref:n},u),{},{components:r})):t.a.createElement(m,s({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return s})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return p}));var a=r(3),t=r(7),o=(r(0),r(172)),i=["components"],s={},l={unversionedId:"robotics/sbotics/seguidor-de-linha",id:"robotics/sbotics/seguidor-de-linha",isDocsHomePage:!1,title:"seguidor-de-linha",description:"Seguidor de Linha",source:"@site/docs/robotics/sbotics/seguidor-de-linha.md",slug:"/robotics/sbotics/seguidor-de-linha",permalink:"/docs/robotics/sbotics/seguidor-de-linha",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/robotics/sbotics/seguidor-de-linha.md",version:"current"},u=[],c={toc:u};function p(e){var n=e.components,r=Object(t.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Seguidor de Linha\n#Seguidor de linha 1\nSegue linha para frente."),Object(o.b)("p",null,"Curvas de 180\xba para esquerda e direita."),Object(o.b)("p",null,"Supera gueps."),Object(o.b)("p",null,"Supera redutor de velocidade."),Object(o.b)("p",null,"  numero sensorEsq1 = 0\nnumero sensorEsq2 = 0\nnumero sensorDir1 = 0\nnumero sensorDir2 = 0"),Object(o.b)("p",null,"  numero limiar = 24"),Object(o.b)("p",null,"  tarefa ciclo{\nenquanto (verdadeiro) farei{\nescrevernumero(1, luz(2))\nescrevernumero(2, luz(3))\nescrevernumero(3, luz(4))"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  se (luz(2)>limiar e luz(3)<limiar e luz(4)>limiar) entao {\n      frente(200)\n  }senao se (luz(2)>limiar e luz(4)>limiar) entao{\n      frente(100)\n  }senao se(luz(2)<limiar) entao{\n      mover(negativo(100), 100)\n      esperar(100)\n  }senao se(luz(4)<limiar) entao{\n      mover(100, negativo(100))\n      esperar(100)      \n  }\n")),Object(o.b)("p",null,"  }\n}"),Object(o.b)("p",null,"  inicio\nciclo()",Object(o.b)("br",{parentName:"p"}),"\n","fim\n#Seguidor de linha 2\nLevanta escavadeira ao iniciar."),Object(o.b)("p",null,"Segue linha para frente."),Object(o.b)("p",null,"Curvas de 180\xba para esqueda e direia."),Object(o.b)("p",null,"Curvas de 90\xba para esqueda e direita."),Object(o.b)("p",null,"Detecta obst\xe1culo."),Object(o.b)("p",null,"Supera gueps."),Object(o.b)("p",null,"Supera redutor de velocidade."),Object(o.b)("p",null,"Baixa escavadeira quando sobe a rampa."),Object(o.b)("p",null,"  numero sensorEsq1 = 0\nnumero sensorDir1 = 0\nnumero sensorEsq2 = 0\nnumero sensorDir2 = 0"),Object(o.b)("p",null,"  numero limiar = 20\nnumero val1 = 0\nnumero val2 = 0\nnumero mut = 2"),Object(o.b)("p",null,"  booleano estanarampa = falso"),Object(o.b)("p",null,"  tarefa levantarEscavadeira{\nvelocidadeatuador(150)\nlevantar(1000)\n}"),Object(o.b)("p",null,"  tarefa baixarEscavadeira{\nvelocidadeatuador(50)\nbaixar(1000)\n}"),Object(o.b)("p",null,"  tarefa seguidor{\nsensorEsq1 = luz(2)\nsensorDir1 = luz(4)\nsensorEsq2 = luz(1)\nsensorDir2 = luz(5)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'  se (sensorEsq1 > limiar e sensorDir1 > limiar) entao {\n  frente(40)\n  }senao se(sensorEsq1 < limiar e sensorDir1 > limiar ou cor(1)=="VERDE" ou cor(2)=="VERDE") entao {\n      se (cor(1) == "VERDE" ou cor(2) == "VERDE") entao{\n          frente(100)\n          esperar(600)\n          \n          enquanto (luz(3) > limiar ) farei {\n              direita(100)\n          }\n          \n          tras(40)\n          esperar (500)\n      }\n      senao se (sensorEsq1 < limiar e sensorEsq2 < limiar) entao{\n          frente(150)\n          esperar(600)\n          direita(200)\n          esperar(4000)\n          tras(40)\n          esperar(500)\n      }\n      senao{\n          val1 = subtrair(sensorEsq1, sensorDir1)\n          val2 = multiplicar(val1, mut)\n          mover(negativo(100), 100)\n          esperar(val2)\n      }\n  }senao se(sensorEsq1 > limiar e sensorDir1 < limiar) entao {\n      se (cor(4)=="VERDE" ou cor(5)=="VERDE") entao{\n          frente(100)\n          esperar(600)\n              \n          enquanto (luz(3) > limiar ) farei {\n              esquerda(100)\n          }\n          \n          tras(40)\n          esperar(500)\n      }\n      senao se (sensorDir1 < limiar e sensorDir2 < limiar) entao{\n          frente(150)\n          esperar(600)\n          esquerda(200)\n          esperar(4000)\n          tras(40)\n          esperar(500)\n      }\n      senao{\n          val1 = subtrair(sensorEsq1, sensorDir1)\n          val2 = multiplicar(val1, mut)\n          mover(100, negativo(100))\n          esperar(val2)\n      }    \n  }\n')),Object(o.b)("p",null,"  }"),Object(o.b)("p",null,"  tarefa desvio {\nse (ultra(1)<8) entao {\ndireita(100)\nesperar(3500)\nfrente(100)\nesperar (1200)\nesquerda(100)\nesperar (3000)\nfrente(150)\nesperar (1200)\nesquerda(200)\nesperar (3200)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"      enquanto (luz (1) > limiar e luz (2) > limiar) farei {\n          frente (20)\n      }\n\n      frente (100)\n      esperar (700)\n      direita(200)\n      esperar(3000)\n  }\n")),Object(o.b)("p",null,"  }"),Object(o.b)("p",null,"  tarefa resgateDireita{"),Object(o.b)("p",null,"  }"),Object(o.b)("p",null,"  tarefa resgateEsquerda{"),Object(o.b)("p",null,"  }"),Object(o.b)("p",null,"  inicio\nlevantarEscavadeira()"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'  enquanto(verdadeiro)farei{\n  se(inclinacao()>=300 e ultra(3) < 22 e ultra(4) < 22 e estanarampa == falso) entao{\n          estanarampa = verdadeiro\n          baixarEscavadeira()\n      }\n      \n      se(estanarampa == falso) entao{\n          desvio()\n      }\n\n      escrevernumero(1, ultra(3))\n      escrevernumero(2, ultra(4))\n\n      se(ultra(3) > 70 e ultra(4) < 40 e estanarampa == verdadeiro)entao{\n          escrever(3, "Parede \xe0 esquerda, fa\xe7a o regate para a direita.")\n          resgateDireita()\n      }senao se(ultra(4) > 70 e ultra(3) < 40 e estanarampa == verdadeiro)entao{\n          escrever(3, "Parede \xe0 dieita, fa\xe7a o resgate para a esquerda.")\n          resgateEsquerda()\n      }\n\n      seguidor()\n  }\n')),Object(o.b)("p",null,"  fim\n#Cr\xe9ditos\nProf. Alex\nProf. Assis"))}p.isMDXComponent=!0}}]);