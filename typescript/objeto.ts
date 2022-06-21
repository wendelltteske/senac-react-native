
interface IFornecedor{ //características que o fornecedor precisa conter
    id: number
    nome: string
    email: string
    fone: string
    cpf: (string | number)
}

var fornecedor: IFornecedor = {id:0, nome:'', email:'', fone:'', cpf:''}

fornecedor.id = 10
fornecedor.nome = 'Antartica'
fornecedor.email = 'pinguim@gmail.com'
fornecedor.fone = '202020'
fornecedor.cpf = 123

console.log(fornecedor)