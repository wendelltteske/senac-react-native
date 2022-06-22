var numeros = [1,30,40,4,5,6,10]
var menor = numeros[0]
var maior = numeros[0]

for(let i = 1; i < numeros.length; i++){
    if(numeros[i] < menor){
        menor = numeros[i]
    }

    if(numeros[i] > maior){
        maior = numeros[i]
    }
}
console.log(`Menor número: ${menor}`)
console.log(`Maior número: ${maior}`)