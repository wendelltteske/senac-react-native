var opcao = "S"

var contador = 5
while(opcao.toLowerCase() == 's'){
    if(contador > 0){
        console.log(`Contagem regressiva: ${contador}`)
    } else{
        opcao = 'n'
    } contador--
}
console.log("BOOM!")