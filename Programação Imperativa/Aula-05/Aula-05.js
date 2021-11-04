function somar(a, b){
    console.log( "Dentro da function ");
    return ( a + b);
}

console.log(somar(10, 5) );

function nomePessoa(nome, idade){
    return nome + " tem a idade de " + idade + " Anos";
}

console.log( nomePessoa("Marcos", 25)); //Função anonima

let sub = function(x, y){
    console.log(x - y)
}

sub(10 , 5);