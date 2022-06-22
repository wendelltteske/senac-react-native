console.log("Olá, mundo!") //mostrar na tela

/* Tipo var: */
var nome = 'Thomas'
var nome = 'Wendell'
//pode ser modificada e declarada mais de uma vez
console.log(nome)

/* Tipo const: */
const sobrenome = 'Teske'
//não pode ser modificada e nem declarada mais de uma vez
console.log(sobrenome)

/* Tipo let: */
let idade = 10
idade = 17
//pode ser modificada, mas não pode ser declarada no mesmo bloco
console.log(idade)

console.log(`Olá! Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos!`)