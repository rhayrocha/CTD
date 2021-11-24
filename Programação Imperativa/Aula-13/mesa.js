/*  let dado = {
    "nome" : "Rhay",
    "apelido" : "Rocha",
    "idade" : 99,
    "usuario" : "rhayrocha",
    "email" : "rhayrocha@gmail.com",
}  */


let dados = {
    nConta : 123456,
    tipoConta : 'corrente',
    saldo : 0,
    titular : "rhay rocha",
}

console.log(dados);


function Contas() {
    this.nConta = this.nConta,
    this.tipoConta = this.tipoConta,
    this.saldo = this.saldo,
    this.titular = this.titular
}

let cliente1 = new Contas(5486273622,"Conta Corrente",27771,"Abigael Natte");
let cliente2 = new Contas(1183971869,"Conta Poupança",8675,"Ramon Connell");
let cliente3 = new Contas(9582019689,"Conta Poupança",27363,"Jarret Lafuente");
let cliente4 = new Contas(1761924656,"Conta Poupança",32415, "Ansel Ardley");
let cliente5 = new Contas(7401971607,"Conta Poupança",18789,"Jacki Shurmer");
let cliente6 = new Contas(630841470,"Conta Corrente",28776,"Jobi Mawtus");
let cliente7 = new Contas(4223508636,"Conta Corrente",2177,"Thomasin Latour");
let cliente8 = new Contas(185979521,"Conta Poupança",25994,"Lonnie Verheijden");
let cliente9 = new Contas(3151956165,"Conta Corrente",7601,"Alonso Wannan");
let cliente10 = new Contas(2138105881,"Conta Poupança",33196,"Bendite Huggett");


