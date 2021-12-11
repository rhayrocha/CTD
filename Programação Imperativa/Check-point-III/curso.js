let curso = function Curso (nome, notaAprovacao, maxFaltas, alunos) {
    this.nome = nome,
    this.notaAprovacao = notaAprovacao,
    this.maxFaltas = maxFaltas,
    this.Alunos = alunos,
    this.addAluno = function (aluno){
        this.Alunos.push(aluno)
    }
}

module.exports = curso
