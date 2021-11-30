function transformaParaMaiusculo(palavras)
{
    for (let i = 0, j = palavras.length; i < j; i++) {
         palavras[i] = palavras[i].toUpperCase();
    }

    return palavras;
}

console.log(transformaParaMaiusculo(["arroz", "blusa", "lápis"]));