

                                 /*Organizando as ideias */
// Preciso criar a lista com os 3 jogadores
// Calcular a força de cada jogador, e depois somar para saber
// a força do time.
// Calcular a força de cada jogador do time do computador
// comparar os dois times para saber quem venceu, perdeu ou empatou

/*Primeiro, vamos criar um array vázio que irá conter 3 espaços para
o usuário escolher 3 personagens */
personagem = ["", "", ""]

/*Aqui, vamos criar o array vazio de 3 espaços que irá conter os personagens
escolhidos pelo computador (seu adversário) */
viloes = ["", "", ""]

/*Tanto os seus personagens quanto os do computador terão como valor inicial
0 */
forcaPersonagem = 0

forcaViloes = 0

/*For do usuário: Iremos criar o laço que irá executar 3 vezes o comando
de inserção de personagens escolhidos pelo usuário */
for(let i = 1; i <= 3; i++){

    /*Ira solicitar que o usuário digite o nome de 3 personagens */
    EscolhaPersonagem = prompt("Escolha o seu "+ i + "° personagem ")

    /*Vamos adicionar os personagens escolhidos no array de personagens. 
    Para isso, vamos selecionar como indice a variável i que contém
    as 3 posições do array personagem. Após inserir o i como indice,
    vamos atribuir ao array os 3 personagens informados via prompt */
    personagem[i] = EscolhaPersonagem

    /*Por ultimo, sera necessário somar as forças do time com o objetivo
    de realizar a comparação de forças com o time adversário. Para isso
    sera necessário somar os valores aleatórios gerados pelo random que
    irá possuir um intervalo de 1 a 10
    floor: Arredonta os valores para baixo
    + 1: Permite que o gerador entregue numeros no intervalo de 1 a 10,
    não de 0 a 9 */
    forcaPersonagem =forcaPersonagem +  Math.floor(Math.random() * 10) + 1

}

/*Impressão dos personages escolhidos pelo usuário */
alert('O seu array contém esses personagens: ' + personagem)

/*For dos vilões: Iremos criar o laço que irá executar 3 vezes o comando
de inserção de personagens escolhidos pelo computador*/
for(let i = 1; i <= 3; i++){

    /*Ira gerar 5 indices aleatórios que irão poderão ocupar
     os 3 espaços aleatórios do array de personagens do computador */
    indiceAleatório = Math.floor(Math.random() * 5) 

    /*Ira conter os 5 possiveis nomes (ja que são 5 indices) que poderão ocupar o array de
    vilões (que possui apenas 3 espaços)*/
    viloes_possiveis = ["Nazare Tedesco", "Odete Roitman", "Carminha", "Laura Prudente da Costa"]

    /*Vamos adicionar os personagens escolhidos no array de vilões. 
    Para isso, vamos selecionar como indice a variável i que contém
    as 3 posições do array personagem. Após inserir o i como indice,
    vamos atribuir ao array, o array que contem os 5 nomes possiveis,
    porem o indice do array viloes_possiveis será justamente os indices
    aleatórios. Dessa maneira os 3 espaços serão preenchidos por apenas
    3 dos 5 personagens que terão seus indices gerados aleatóriamente */
    viloes[i] = viloes_possiveis[indiceAleatório]

    /*Por ultimo, sera necessário somar as forças do time com o objetivo
    de realizar a comparação de forças com o time do usuário. Para isso
    sera necessário somar os valores aleatórios gerados pelo random que
    irá possuir um intervalo de 1 a 10
    floor: Arredonta os valores para baixo
    + 1: Permite que o gerador entregue numeros no intervalo de 1 a 10,
    não de 0 a 9 */
    forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1

}

/*Impressão dos personagens escolhidos pelo computador. */
alert('O array de vilões contém esses personagens: ' + viloes)

/*Agora iremos comparar as forças e definir quem ganhou a disputa */
if(forcaPersonagem > forcaViloes){

    /*Se a força do usuário for maior que a do computador.
    O usuário ganhará a disputa */
    alert('Parabens você ganhou o cabo de guerra')
    alert('Força do seu time: ' + forcaPersonagem)
    alert('Forca do time adversário: ' + forcaViloes)

}else if(forcaPersonagem < forcaViloes){

    /*Se a força do usuário for menor que a do computador.
    O usuário perderá a disputa */
    alert('Os vilões venceram o cabo de guerra')
    alert('Força do seu time: ' + forcaPersonagem)
    alert('Forca do time adversário: ' + forcaViloes)


}else{
    /*Se a força do usuário for igual a do computador.
    O usuário empatará a disputa */
    alert('A disputa empatou')
    alert('Força do seu time: ' + forcaPersonagem)
    alert('Forca do time adversário: ' + forcaViloes)

}