interface CarrinhoCompras{
    codigo: number
    produto: [{
        quantidade: number
        descricao: string
        valor: number
    }]
}

var carrinhoCompras: CarrinhoCompras = {codigo:1, produto:[{quantidade:10, descricao:'frango', valor:13.45}]}
console.log(carrinhoCompras)