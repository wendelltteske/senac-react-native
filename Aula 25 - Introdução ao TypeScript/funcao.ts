function somar(n1: number, n2: number): number{
    return n1 + n2
}

function ola(nome: string):void{ //void significa que não tem retorno
    console.log(`Olá, ${nome}`)
}

var x: number = somar(10, 20)
console.log(x)

ola('Maria')