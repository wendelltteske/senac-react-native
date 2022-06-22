var numeros = [10, 5, 50, 60, 800, 15, -1]

function ordenar(numeros){
    var crescente = numeros.length
    for (let i = 0; i < crescente; i++){
        for(var ordem = 0; ordem < (crescente - i - 1); ordem++){
            if(numeros[ordem] > numeros[ordem + 1]){
                var conversao = numeros[ordem]
                numeros[ordem] = numeros[ordem + 1]
                numeros[ordem + 1] = conversao
            }
        }
    }
}

ordenar(numeros)
console.log(numeros)