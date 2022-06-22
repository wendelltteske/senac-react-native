var produto = {
    descrição: "arroz",
    preco: 10,
    quantidade: 3,
    subtotal: function () {
        return this.preco * this.quantidade
    }
}

var produto2 = {
    descrição: "maça",
    preco: 7,
    quantidade: 5,
    subtotal: function () {
        return this.preco * this.quantidade
    }
}

var produto3 = {
    descrição: "feijão",
    preco: 15,
    quantidade: 4,
    subtotal: function () {
        return this.preco * this.quantidade
    }
}

var produto4 = {
    descrição: "ovo",
    preco: 1.5,
    quantidade: 30,
    subtotal: function () {
        return this.preco * this.quantidade
    }
}

var produto5 = {
    descrição: "banana",
    preco: 6,
    quantidade: 6,
    subtotal: function () {
        return this.preco * this.quantidade
    }
}

var carrinho = []
carrinho.push(produto)
carrinho.push(produto5)

let i = 0;
let total = 0;
while (i < carrinho.length) {
    total += carrinho[i].subtotal()
    i++
}
console.log(total.toFixed(2))