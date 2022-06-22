function um(){
    console.log("um")
}

function dois(){
    console.log("dois")
}


function mostraResultado (result){
    console.log(` ${result}`)
}
function mostrar (result){
    console.log(`Resultado é: ${result}`)
}

function soma(n1, n2, callback){
    let resultado = n1 + n2
    callback (resultado)
}

soma (10,20, mostraResultado)
soma (10,20, mostrar)