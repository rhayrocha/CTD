let aluno = function Aluno (nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas
    this.notas = notas
    this.calcularMedia = function(){
        var media = this.notas.reduce((total, valor) => total + valor) / this.notas.length;
        return media
    }
    this.addFalta = function() {
        this.faltas++
    }
}

module.exports = aluno