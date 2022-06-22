
enum Epessoa{
    FISICA = 2, //quando você atribuir o valor de numeração no primeiro enum criado, não há necessidade de completar os outros enums
    JURIDICA
}

var cliente: Epessoa
cliente = Epessoa.FISICA

console.log(cliente)

var senac: Epessoa
senac = Epessoa.JURIDICA
console.log(senac)