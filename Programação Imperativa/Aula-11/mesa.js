let arrayParaInserirElemento = ["filme1","filme2", "filme3", "filme4", "filme5"];


function passagemDeElementos(arrayParaInserirElemento, arrayDeOndeExtrairElemento){   
    for(var arrayPosicionado = arrayDeOndeExtrairElemento.length; arrayPosicionado >= 1; arrayPosicionado--){
        arrayParaInserirElemento.push(arrayDeOndeExtrairElemento.pop()) 
    }
    console.log(arrayParaInserirElemento)
 }

 converterMaiusculas(array)