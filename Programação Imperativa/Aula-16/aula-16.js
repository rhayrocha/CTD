function acaoCarro(callback){
    return callback()
}

function andar(){
    console.log("o carro está andando");
}

function parar(){
    console.log("o carro parou");
}

acaoCarro(andar);

acaoCarro(parar);