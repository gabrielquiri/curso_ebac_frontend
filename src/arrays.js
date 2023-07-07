const alunos = ['maria'];

const alunos2 = alunos.map(function(itemAtual){
    return {
        nome: itemAtual,
        nota: 3
    }
})

console.log(alunos2)

const alunos1 = ['lucas'];

const alunos3 = alunos1.map(function(itemAtual){
    return {
        nome: itemAtual,
        nota: 7
    }
})

console.log(alunos3)

const alunos8 = ['vitor'];

const alunos4 = alunos8.map(function(itemAtual){
    return {
        nome: itemAtual,
        nota: 4
    }
})

console.log(alunos4)

const alunos6 = ['gabriel'];

const alunos5 = alunos6.map(function(itemAtual){
    return {
        nome: itemAtual,
        nota: 10
    }
})

console.log(alunos5)

const aprovados1 = alunos2.filter(function(item) {
    return item.nota >= 6
})

console.log(aprovados1)

const aprovados2 = alunos3.filter(function(item) {
    return item.nota >= 6
})

console.log(aprovados2)

const aprovados3 = alunos4.filter(function(item) {
    return item.nota >= 6
})

console.log(aprovados3)

const aprovados4 = alunos5.filter(function(item) {
    return item.nota >= 6
})

console.log(aprovados4)