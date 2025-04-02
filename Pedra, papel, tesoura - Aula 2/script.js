

/*irá solicitar que o usuário informe a sua idade */
idade = prompt("Quantos anos você tem?")

/*Primeiro vamos verificar se o usuário é maior de idade, ou seja
se a idade dele é maior ou igual a 18 */
if(idade >= 18){

    /* Se ele for maior de idade, iremos executar os segunites comandos */
    /*Mensagens de saudaçoes ao usuário */
    alert('Você pode jogar jokenpo')

    alert('Vamos começar a jogar')

    /*Resolvi fazer um pouco diferente da aula com o objetivo de
     não precisar atualizar a página para jogar novamente*/

     /*Primeiro vamos criar um loop que ira repetir infinitamente
     os comandos até estabelecermos uma condição para encerra-lo */
    while(true){

        /*Ira permitir que o jogador escolha uma opção */
        escolhaJogador = prompt("Digite 1 - pedra, 2 - papel ou 3 - tesoura")

        /*Ira verificar se o usuário digitou um valor diferente de 1, 2 ou 3 */
        while(escolhaJogador!= 1 && escolhaJogador != 2 && escolhaJogador != 3){

            /*Se o valor for diferente dos valores disponiveis, o sistema irá informar
            o usuário sobre o erro e solicitará que ele escolha novamente uma opção */
            alert('Por favor, digite apenas 1 - pedra, 2 - papel ou 3 - tesoura')

            /*Ira solicitar novamente uma entrada */
            escolhaJogador = prompt("Digite 1 - pedra, 2 - papel ou 3 - tesoura")

        }

    /*Math.random: Essa função gera um número decimal aleatório entre 0
    (inclusivo) e 1 (exclusivo). Isso significa que o resultado pode ser
    0, mas nunca será exatamente 1.
    
    Math.random() * 3: Aqui, multiplicamos o número aleatório gerado
    por 3. Isso estende o intervalo para números decimais entre 0 (inclusivo) e 3 (exclusivo)

    Math.floor(Math.random * 3): É uma função que arredonda um número decimal para o menor número inteiro mais próximo. Por exemplo: 
    Se Math.random() * 3 for 2.8, Math.floor() retornará 2.
    Se Math.random() * 3 for 0.5, Math.floor() retornará 0.
    Portanto, essa parte do código gera um numero aleatório entre 0 e 2

    Math.floor(Math.random() * 3) + 1: Finalmente, adicionamos 1 ao numero inteiro gerado. Isso desloca o intervalo de 0-2 para 1-3. 
    Com isso, o resultado final é um numero aleatório entre 1, 2 ou 3.
    */
    escolhaComputador = Math.floor(Math.random() * 3) + 1

                        /* Regras do jogo */
    
    // Jogador pedra, Computador pedra -> empate
    // Jogador tesoura, Computador tesoura -> empate
    // Jogador papel, Computador papel -> empate

    // Possibilidades pedra
    // Jogador pedra, Computador Tesoura -> jogador vence
    // Jogador pedra, Computador Pedra -> Computador vence

    // Possibilidades papel
    // Jogador papel, Computador pedra -> jogador vence
    // Jogador papel, Computador tesoura -> Computador vence

    // Possibilidades tesoura
    // Jogador tesoura, Computador papel -> Jogador vence
    // Jogador tesoura, Computador pedra -> Computador vence

    // 1- pedra
    // 2 - papel
    // 3 - tesoura
    
    /*Basicamente esse trecho irá validar as jogadas do jogador e do computador com o objetivo de verificar quem ganhou ou perdeu.  Observação: O sistema também verifica se houve empate */
    if(escolhaJogador == escolhaComputador){

        if(escolhaComputador == 1){

            alert('O computador jogou pedra')

        }else if(escolhaComputador == 2){

            alert('O computador jogou papel')

        }else{

            alert('O computador jogou tesoura')
        }

        alert('Deu empate')

    }else if(escolhaJogador == 1 && escolhaComputador == 2){

        alert('o computador jogou papel')
        alert('Você perdeu')

    }else if(escolhaJogador == 1 && escolhaComputador == 3){

        alert('O computador jogou tesoura')

        alert('Você ganhou')

    }else if(escolhaJogador == 2 && escolhaComputador == 1){

        alert('O computador jogou pedra')

        alert('Você ganhou')

    }else if(escolhaJogador == 2 && escolhaComputador == 3){

        alert('O computador jogou tesoura')

        alert('você perdeu')

    }else if(escolhaJogador == 3 && escolhaComputador == 1){

        alert('O computador jogou pedra')
        alert('Você perdeu')

    }else if(escolhaJogador == 3 && escolhaComputador == 2){

        alert('O computador jogou papel')
        alert('você ganhou')
    }
    

    /*Após cada jogada iremos perguntar para o jogador se ele quer tentar mais uma vez */
    sim_nao = prompt("Você quer tentar mais uma vez? (Digite apenas sim ou não)").toUpperCase()

    /*Basicamente, essa estrutura irá verficar se ele quer ou não continuar */
    if(sim_nao == "NÃO"){

        /*SE a resposta for não encerraremos o jogo */
        alert('Jogo encerrado')

        break;

    }else if(sim_nao == "SIM"){

        /*Se a resposta for sim, iremos repetir todo o processo de execução do sistema */
        continue;

    }else{

        /*Se ele digitar um valor diferente de "sim" ou "não", iremos informa-lo sobre o erro e
        solicitaremos que ele tente novamente responder a pergunta */
        alert('Por favor, digite apenas sim ou não')

        sim_nao = prompt("Você quer tentar mais uma vez? (Digite apenas sim ou não)").toUpperCase()

        if(sim_nao == "NÃO"){

            alert('Jogo encerrado')

            break;

        }else if(sim_nao == "SIM"){

            continue;
        }


    }
    
    }

    }else{

    /*Se ele for menor que dezoito anos, ele não poderá jogar o jogo */

    alert('Você não pode jogar jokenpo')
}