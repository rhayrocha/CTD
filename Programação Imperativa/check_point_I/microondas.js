// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

let temp_padrao = null;

function microondas(prato, tempo) {

    switch (prato) {
        case  1:
            temp_padrao = 10;
            break;
        case  2:
            temp_padrao = 8;
            break;
        case  3:
            temp_padrao = 15;
            break;
        case  4:
            temp_padrao = 12;
            break;
        case  5:
            temp_padrao = 8;
            break;
        default:
            console.log("Prato inexistente")
            temp_padrao = null;
            tempo = null;
            break;
    }

    if(tempo > (2 * temp_padrao) && tempo < (3 * temp_padrao)){
        console.log("a comida queimou")
    }
        else if (tempo == null && temp_padrao == null) {
            console.log(" ")
        }
        else if (tempo < temp_padrao){
            console.log("tempo insuficiente")
        }

        else if ( tempo >= (3 * temp_padrao)) {
            console.log( "kabumm")
        }

    else{
        console.log("Prato pronto, bom apetite!!!")
    }
}
microondas( 5, 15)