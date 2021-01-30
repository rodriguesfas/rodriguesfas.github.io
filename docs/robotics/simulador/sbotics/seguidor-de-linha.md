Seguidor de Linha
#Seguidor de linha 1
Segue linha para frente.

Curvas de 180º para esquerda e direita.

Supera gueps.

Supera redutor de velocidade.

  numero sensorEsq1 = 0
  numero sensorEsq2 = 0
  numero sensorDir1 = 0
  numero sensorDir2 = 0

  numero limiar = 24

  tarefa ciclo{
  enquanto (verdadeiro) farei{
      escrevernumero(1, luz(2))
      escrevernumero(2, luz(3))
      escrevernumero(3, luz(4))

      se (luz(2)>limiar e luz(3)<limiar e luz(4)>limiar) entao {
          frente(200)
      }senao se (luz(2)>limiar e luz(4)>limiar) entao{
          frente(100)
      }senao se(luz(2)<limiar) entao{
          mover(negativo(100), 100)
          esperar(100)
      }senao se(luz(4)<limiar) entao{
          mover(100, negativo(100))
          esperar(100)      
      }
  }
  }

  inicio
      ciclo()   
  fim
#Seguidor de linha 2
Levanta escavadeira ao iniciar.

Segue linha para frente.

Curvas de 180º para esqueda e direia.

Curvas de 90º para esqueda e direita.

Detecta obstáculo.

Supera gueps.

Supera redutor de velocidade.

Baixa escavadeira quando sobe a rampa.

  numero sensorEsq1 = 0
  numero sensorDir1 = 0
  numero sensorEsq2 = 0
  numero sensorDir2 = 0

  numero limiar = 20
  numero val1 = 0
  numero val2 = 0
  numero mut = 2

  booleano estanarampa = falso

  tarefa levantarEscavadeira{
      velocidadeatuador(150)
      levantar(1000)
  }

  tarefa baixarEscavadeira{
      velocidadeatuador(50)
      baixar(1000)
  }

  tarefa seguidor{
      sensorEsq1 = luz(2)
      sensorDir1 = luz(4)
      sensorEsq2 = luz(1)
      sensorDir2 = luz(5)
      
      se (sensorEsq1 > limiar e sensorDir1 > limiar) entao {
      frente(40)
      }senao se(sensorEsq1 < limiar e sensorDir1 > limiar ou cor(1)=="VERDE" ou cor(2)=="VERDE") entao {
          se (cor(1) == "VERDE" ou cor(2) == "VERDE") entao{
              frente(100)
              esperar(600)
              
              enquanto (luz(3) > limiar ) farei {
                  direita(100)
              }
              
              tras(40)
              esperar (500)
          }
          senao se (sensorEsq1 < limiar e sensorEsq2 < limiar) entao{
              frente(150)
              esperar(600)
              direita(200)
              esperar(4000)
              tras(40)
              esperar(500)
          }
          senao{
              val1 = subtrair(sensorEsq1, sensorDir1)
              val2 = multiplicar(val1, mut)
              mover(negativo(100), 100)
              esperar(val2)
          }
      }senao se(sensorEsq1 > limiar e sensorDir1 < limiar) entao {
          se (cor(4)=="VERDE" ou cor(5)=="VERDE") entao{
              frente(100)
              esperar(600)
                  
              enquanto (luz(3) > limiar ) farei {
                  esquerda(100)
              }
              
              tras(40)
              esperar(500)
          }
          senao se (sensorDir1 < limiar e sensorDir2 < limiar) entao{
              frente(150)
              esperar(600)
              esquerda(200)
              esperar(4000)
              tras(40)
              esperar(500)
          }
          senao{
              val1 = subtrair(sensorEsq1, sensorDir1)
              val2 = multiplicar(val1, mut)
              mover(100, negativo(100))
              esperar(val2)
          }    
      }
  }

  tarefa desvio {
      se (ultra(1)<8) entao {
          direita(100)
          esperar(3500)
          frente(100)
          esperar (1200)
          esquerda(100)
          esperar (3000)
          frente(150)
          esperar (1200)
          esquerda(200)
          esperar (3200)

          enquanto (luz (1) > limiar e luz (2) > limiar) farei {
              frente (20)
          }

          frente (100)
          esperar (700)
          direita(200)
          esperar(3000)
      }
  }

  tarefa resgateDireita{
      
  }

  tarefa resgateEsquerda{

  }

  inicio
      levantarEscavadeira()
      
      enquanto(verdadeiro)farei{
      se(inclinacao()>=300 e ultra(3) < 22 e ultra(4) < 22 e estanarampa == falso) entao{
              estanarampa = verdadeiro
              baixarEscavadeira()
          }
          
          se(estanarampa == falso) entao{
              desvio()
          }

          escrevernumero(1, ultra(3))
          escrevernumero(2, ultra(4))

          se(ultra(3) > 70 e ultra(4) < 40 e estanarampa == verdadeiro)entao{
              escrever(3, "Parede à esquerda, faça o regate para a direita.")
              resgateDireita()
          }senao se(ultra(4) > 70 e ultra(3) < 40 e estanarampa == verdadeiro)entao{
              escrever(3, "Parede à dieita, faça o resgate para a esquerda.")
              resgateEsquerda()
          }

          seguidor()
      }
  fim
#Créditos
Prof. Alex
Prof. Assis