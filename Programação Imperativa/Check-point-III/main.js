let Aluno = require('./aluno')
let Curso = require('./curso')

let aluno1 = new Aluno (
    "marcos",
    7,
    [2,7]
    )

let curso1 = new Curso(
    "promImp",
    7,
    9,
    []

)

curso1.addAluno("aluno1")

console.log(aluno1)
console.log(curso1)

