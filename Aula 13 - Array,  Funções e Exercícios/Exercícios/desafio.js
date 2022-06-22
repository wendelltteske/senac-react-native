function imc(peso,altura){
    altura = altura ^ 2
    var resultado = peso / altura
    console.log(resultado.toFixed(1))

    if(resultado <= 18){
        console.log("Classificação: abaixo do peso")
    } else if (resultado >=18.5 & resultado <=24.5){
        console.log("Classificação: normal")
    } else if (resultado >=25 & resultado <=29.9){
        console.log("Classificação: sobrepeso")
    } else if (resultado >=30 & resultado <=34.9){
        console.log("Classificação: Obesidade grau I")
    } else if (resultado >=35 & resultado <=39.9){
        console.log("Classificação: Obesidade grau II")
    } else if (resultado >=40){
        console.log("Classificação: Obesidade elevada")
    }
}

imc(80,1.87)