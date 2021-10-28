function adicionar(a, b) {
    return(a + b)
}

function subtracao(a, b) {
    return(a - b)
}

function multiplicacao(a, b) {
    return(a * b)
}

function divisao(a, b) {
    return(a / b)
}

console.log ("-------------- Teste de Operações / Calculadora --------------")

console.log("Resultado da soma: " + adicionar(1, 2))
console.log("Resultado da subtração: " + subtracao(1, 2))
console.log("Resultado da multiplição: " + multiplicacao(1, 2))
console.log("Resultado da divisão: " + divisao(0, 2))


function quadradoDoNumero(a) {
    return ( multiplicacao(a, a));
}

console.log("O quadrado do número é " + quadradoDoNumero(2));

function mediaDeTresNumeros (a, b, c) {
   var temp = adicionar(a, b)
   var temp2 = adicionar(temp, c)
   return (divisao(temp2, 3))
}

console.log("A média é: " + mediaDeTresNumeros(1, 2, 3))

function calculaPorcentagem (a, b) {
    var temp = multiplicacao(a, b)
    return (divisao(temp, 100))
}

console.log("O resultado da porcentagem é: " + calculaPorcentagem(400, 20))