//Micro desafio 1
function teste1(x, y){
    return y - x
}

teste1(10,40);

//Micro desafio 2

function teste2(x, y) {
    return x * y
    console.log(x)
    return x / 2
}
teste2(10);

//Crie uma função que converta polegadas em centímetros. Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
function polCm(x){
    return(x * 2.54)
}
console.log(polCm(2) + " cm");

//Crie uma função que receba uma string e a converta em um URL. ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function stringUrl(x){
    return(x="http://www." + x + ".com.br")
}
console.log(stringUrl("funcaojs"));

//Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
function exclama(x) {
    return(x + " !")
}
console.log(exclama("Ola"));

//Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
function idCachorro(idade) {
    return(idade / 7 + " Anos")
}
console.log(idCachorro(14));

//Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
function horaHomem(salario) {
    return(salario / 160)
}
console.log(horaHomem(1040));

//Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 
function imc(peso,altura) {
    return(peso/ (altura * altura))
}
console.log(imc(80,1.7));

//Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. Investigue o que o método de .toUpperCase() faz.
function up(min) {
    return(min.toUpperCase())
}
console.log(up("teste"));

//Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro. Dica: Isso te ajudará a entender o que o operador typeof faz.
function tipoParam(x) {
    return(typeof x)
}
console.log(tipoParam(23.4));

//Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência. Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.
function cir(raio) {
    return(console.log("O Valor da circunferência é ", 2*Math.PI*raio))
}
cir(4);