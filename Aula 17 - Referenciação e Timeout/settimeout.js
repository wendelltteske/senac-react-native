function ola(){
    console.log('ola')
}

function tchau(){
    console.log('tchau')
}

function conversa(){
    setTimeout(
        function(){
            console.log('como vai?')
        }, 3000 //tempo em milisegundos
    )
}

/* invocar a função
    - note que o pograma
      executa conforme as 
      funções estão invocadas! */
ola()
conversa()
tchau()