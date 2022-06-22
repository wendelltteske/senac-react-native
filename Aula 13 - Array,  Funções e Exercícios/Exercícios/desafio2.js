
function soma(somaAlgarismos) {
    var total = 0
    for (let soma_alg = 0; soma_alg < somaAlgarismos.length; soma_alg++) {
        total = total + somaAlgarismos[soma_alg]
    }
    return total
}

var retorno = soma([1,2,3,4,5,6])
console.log(retorno)

var numeros = [10,20,30,40]
console.log(soma(numeros))