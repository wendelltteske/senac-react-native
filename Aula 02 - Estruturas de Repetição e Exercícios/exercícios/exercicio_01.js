var nome = 'Wendell'

var anoAtual = 2022
var mesAtual = 4
var diaAtual = 26

var anoNasc = 2004
var mesNasc = 8
var diaNasc = 16

var idade = anoAtual - anoNasc
if(mesAtual < mesNasc | diaAtual < diaNasc){
    idade--
}

console.log(`Olá, ${nome}! Você tem ${idade} anos`)