"use strict";(self.webpackChunkrodriguesfas_github_io=self.webpackChunkrodriguesfas_github_io||[]).push([[8404],{5680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>m});var a=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),u=l(r),g=o,m=u["".concat(c,".").concat(g)]||u[g]||p[g]||i;return r?a.createElement(m,s(s({ref:t},d),{},{components:r})):a.createElement(m,s({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=g;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n[u]="string"==typeof e?e:o,s[1]=n;for(var l=2;l<i;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},424:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>l});var a=r(8168),o=(r(6540),r(5680));const i={id:"sumario",title:"sBotics"},s=void 0,n={unversionedId:"robotica/sbotics/sumario",id:"robotica/sbotics/sumario",title:"sBotics",description:"O qu\xea ?",source:"@site/docs/robotica/sbotics/sumario.md",sourceDirName:"robotica/sbotics",slug:"/robotica/sbotics/sumario",permalink:"/fr/docs/robotica/sbotics/sumario",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/robotica/sbotics/sumario.md",tags:[],version:"current",frontMatter:{id:"sumario",title:"sBotics"},sidebar:"tutorialSidebar",previous:{title:"Seguidor de Linha",permalink:"/fr/docs/robotica/sbotics/seguidor-de-linha"},next:{title:"Sum\xe1rio",permalink:"/fr/docs/robotica/simulator/sumario"}},c={},l=[{value:"O qu\xea ?",id:"o-qu\xea-",level:2},{value:"Linguagem R-Educ",id:"linguagem-r-educ",level:2},{value:"Tutoriais",id:"tutoriais",level:2},{value:"Seguir Linha",id:"seguir-linha",level:3},{value:"Detectar Cor Preto e Branco",id:"detectar-cor-preto-e-branco",level:3},{value:"Detectar Cor Verde",id:"detectar-cor-verde",level:3},{value:"Detecta Cor Prata",id:"detecta-cor-prata",level:3},{value:"Detectar Cor Vermelho",id:"detectar-cor-vermelho",level:3},{value:"Detectar Cor Azul",id:"detectar-cor-azul",level:3},{value:"Obst\xe1culos",id:"obst\xe1culos",level:3},{value:"Redutores de Velocidade",id:"redutores-de-velocidade",level:3},{value:"Gap",id:"gap",level:3},{value:"Intersec\xe7\xf5es e becos sem sa\xedda",id:"intersec\xe7\xf5es-e-becos-sem-sa\xedda",level:3},{value:"Passagem",id:"passagem",level:3},{value:"Gangorra",id:"gangorra",level:3},{value:"V\xedtimas",id:"v\xedtimas",level:3},{value:"\xc1rea de Resgate",id:"\xe1rea-de-resgate",level:3},{value:"Marcador de percurso",id:"marcador-de-percurso",level:3},{value:"Linha de chegada",id:"linha-de-chegada",level:3},{value:"Artigos",id:"artigos",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"o-qu\xea-"},"O qu\xea ?"),(0,o.yg)("p",null,"O sBotics \xe9 uma plataforma de simula\xe7\xe3o dos n\xedveis 1 e 2 da prova pr\xe1tica estadual da Olimp\xedada Brasileira de Rob\xf3tica. Na abordagem comum desta prova utiliza-se kits e rob\xf3tica para simular o resgate de uma v\xedtima em um ambiente de desastre. O sBotics oferece uma alternativa para aqueles que desejam testar seus conhecimentos de rob\xf3tica e programa\xe7\xe3o."),(0,o.yg)("p",null,"Acesse o ",(0,o.yg)("a",{parentName:"p",href:"https://weduc.natalnet.br/sbotics/"},"sBotics website oficial"),", baixe o programa conforme a vers\xe3o do seu computador, instale e se cadastre na plataforma :)"),(0,o.yg)("h2",{id:"linguagem-r-educ"},"Linguagem R-Educ"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://weduc.natalnet.br/sbotics/tutorial/reduc"},"Tutorial da linguagem R-Educ")),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://weduc.natalnet.br/sbotics/tutorial/reduc"},"Tutorial da fun\xe7\xf5es")),(0,o.yg)("h2",{id:"tutoriais"},"Tutoriais"),(0,o.yg)("h3",{id:"seguir-linha"},"Seguir Linha"),(0,o.yg)("h3",{id:"detectar-cor-preto-e-branco"},"Detectar Cor Preto e Branco"),(0,o.yg)("h3",{id:"detectar-cor-verde"},"Detectar Cor Verde"),(0,o.yg)("h3",{id:"detecta-cor-prata"},"Detecta Cor Prata"),(0,o.yg)("h3",{id:"detectar-cor-vermelho"},"Detectar Cor Vermelho"),(0,o.yg)("h3",{id:"detectar-cor-azul"},"Detectar Cor Azul"),(0,o.yg)("h3",{id:"obst\xe1culos"},"Obst\xe1culos"),(0,o.yg)("h3",{id:"redutores-de-velocidade"},"Redutores de Velocidade"),(0,o.yg)("h3",{id:"gap"},"Gap"),(0,o.yg)("h3",{id:"intersec\xe7\xf5es-e-becos-sem-sa\xedda"},"Intersec\xe7\xf5es e becos sem sa\xedda"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Pista"',title:'"Pista"'},'{"settings":{"rescue_zone":{"live_victims":0,"dead_victims":0,"point_position":1,"ramp":0,"exit":0},"robot_permissions":{"robot_one":true,"robot_two":true,"robot_three":true,"robot_four":true,"robot_five":true,"custom_robots":false},"time_of_day":"12:00","description":"Arena sem t\xc3\xadtulo","robot_has_to_follow_line":false,"time_limit_stops_code_execution":false,"finish_execution_after_code":false,"change_position_in_routine":false,"obstacle_dodging_time":50,"obstacle_pushing":true,"distance_based_checkpoint_scoring":false,"standard_robocup_jr_scoring":false,"rescue_kit_enabled":false,"lack_of_progress":false,"number_of_checkpoints":0,"time_limit":6,"level_two_evacuation_point":false,"level_two_rescue_kit":false,"marker_start_margin":0,"give_up_button":false,"give_up_penalty":false,"fixed_rescue_zone_checkpoint":false,"fixed_rescue_zone_ramp_checkpoint":false,"fixed_rescue_zone_exit_checkpoint":false,"place_markers_after_rescue_zone":false},"tiles":[{"id":1,"x":0,"z":0,"y":0,"type":"straight_line","rotation":0,"properties":{"has_checkpoint":false}},{"id":1},{"id":1,"x":0,"z":1,"y":0,"type":"straight_line","rotation":0,"properties":{"has_checkpoint":false}},{"id":1,"x":0,"z":2,"y":0,"type":"straight_line","rotation":0,"properties":{"has_checkpoint":false}},{"id":1,"x":0,"z":3,"y":0,"type":"straight_line","rotation":0,"properties":{"has_checkpoint":false}},{"id":1,"x":0,"z":4,"y":0,"type":"straight_line","rotation":0,"properties":{"has_checkpoint":false}},{"id":32,"x":0,"z":5,"y":0,"type":"straight_line","rotation":0,"properties":{"has_checkpoint":false}}]}\n\n')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},"")),(0,o.yg)("h3",{id:"passagem"},"Passagem"),(0,o.yg)("h3",{id:"gangorra"},"Gangorra"),(0,o.yg)("h3",{id:"v\xedtimas"},"V\xedtimas"),(0,o.yg)("h3",{id:"\xe1rea-de-resgate"},"\xc1rea de Resgate"),(0,o.yg)("h3",{id:"marcador-de-percurso"},"Marcador de percurso"),(0,o.yg)("h3",{id:"linha-de-chegada"},"Linha de chegada"),(0,o.yg)("h2",{id:"artigos"},"Artigos"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"http://sistemaolimpo.org/midias/uploads/5b77490951a1a53800ddc3ee32a5d1e8.pdf"},"UMA METODOLOGIA PARA ROB\xd4 SEGUIDOR DE LINHA")))}p.isMDXComponent=!0}}]);