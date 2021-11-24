 function carro (modelo, cor){
    this.modelo = modelo;
    this.cor = cor;
    lista : [];
    this.pular = function(){
        return 'meu ' + this.modelo + ' esta pulando';
    }
}

let carro1 = new carro('Ford', 'vermelho' );

console.log(carro1.cor()); */

let dadosCarro = {
    "cor":  "branco",
    "placa": "axc-1598",
    "qtdPortas": 4
}

let strCarro = JSON.stringify(dadosCarro);
console.log(strCarro);