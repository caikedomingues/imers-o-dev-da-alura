


/* Primeiro exemplo que imprime os valores do 1 ao 3 no terminal
rodada = 1

while(rodada <= 3){

    console.log('numero da rodada: ' + rodada)

    rodada = rodada + 1
}*/


/*Resolvi fazer o exericicio um pouco diferente da aula, aqui eu também adicionei
a validação dos valores informados pelos usuários. */

/*Variável que irá conter o numero da rodada que o jogo está */
rodada = 1

/*While que irá executar os comandos do jogo 3 vezes (por que são 3 rodadas).
Basicamente o while irá executar os comandos enquanto o valor da variável rodada
for menor ou igual a 3. */
while(rodada <= 3){

    /*A cada rodada iremos atribuir + 1 valor na variável rodada com o
    objetivo de avançar o numero de rodadas conforme o usuário acerte
    os pisos*/
    rodada = rodada + 1

    /*Ira solicitar que o usuário escolha uma opção */
    escolhaJogador = prompt("Nivel: " + rodada + ", escolha vidro (1, 2 ou 3)")

    /*Ira obrigar o usuário a escolher novamente caso ele escolha um valor
    diferente de 1, 2 ou 3. */
    while(escolhaJogador != 1 && escolhaJogador != 2 && escolhaJogador != 3){

        /*Ira informar o usuário sobre o erro */
        alert('Por favor, escolha apenas 1, 2, 3')

        /*Irá solicitar novamente a escolha de uma opção */
        escolhaJogador = prompt("Nivel: " + rodada + ", escolha vidro (1, 2 ou 3)")

    }

    /*Ira gerar numeros aleatórios entre 1 e 3 */
    pisoQuebrado = Math.floor(Math.random() * 3) + 1

    /*Validações das jogadas realizadas pelo usuário */

    if(escolhaJogador == pisoQuebrado){

        /*Se a opção do jogador for igual a opção escolhida pelo
        computador, ele irá perder o jogo e o loop será encerrado
        sianlizando o fim do jogo.*/
        alert('O vidro quebrou! Acabou o jogo pra você')

        /*Encerra o loop */
        break;

    }else{

        /*Se a opção do usuário for diferente da opção escolhida
        pelo computador, ele irá ganhar a rodada e avançara para
        a próxima fase */
        alert('Você passou para o próximo nivel')

        /*Ira informar a opção do jogador */
        alert('O piso quebrado estava na ponte: ' + pisoQuebrado)

        /*Se o usuário ganhar a ultima rodada, iremos imprimir
        uma mensagem de felicitações ao usuário, para isso
        iremos verificar se o valor da rodada é maior que 3
        (números de rodadas disponiveis) */
        if(rodada > 3){

            alert('Parabens, você sobreviveu')

        }
    }







}