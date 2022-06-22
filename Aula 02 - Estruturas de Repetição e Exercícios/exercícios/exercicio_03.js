var nome = 'Wendell'

var n1 = 10
var n2 = 10
var n3 = 9.5

var media = (n1 + n2 + n3)/3
var situacao = 'Aprovado'

if(media < 6){
    var situacao = 'Reprovado'
}

console.log(`Aluno ${nome}, a sua média é ${media.toFixed(2)} e você está ${situacao}!`)