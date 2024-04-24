
// torrar('pao de forma', 'Ronalde', 15.50)
        // a fuction vai verificar se tem algum nome acima, se não tiver ele vai usar o nome padrão q é (Neto)
        // caso não tiver o nome aq (Ronalde), ele vai mostra o nome Neto que é um valor padrão


// function torrar(pao, nome = 'Neto', valor){
//     console.log('torrada feita com ' + pao )
//     console.log('esse pedido é de ' + nome)
//     console.log('O valor desse pedido é de: ' + valor)
// }

//-----------------------------------------------------------------------------------------------------------------------------

// let resultado = soma (5, 5)

// function soma(a, b){
//     let somatorio = a + b
   // return somatorio // o return vai guardar o resultado da soma dentro de "soma" e fica guardado, até chamar esse resultado
// }
// console.log('o resultado da soma é: ' + resultado )

//----------------------------------------------------------------------------------------------------------------------------------------

// let nomeNovo = espaso('Ronalde gonçalve da silva neto')
// function espaso(name){
//     let nome = name.split(" ")[0]
//     return nome

// }
// console.log('bem vindo:  ' + nomeNovo)
                                // Mesma forma que fuciona no codigo de cima
let nomeNovo = espaso('Ronalde gonçalve da silva neto', ' ')
console.log('bem vindo:  ' + nomeNovo)
nomeNovo = espaso('Neto-gonçalve-da-silva-neto', '-')
console.log('bem vindo:  ' + nomeNovo)
function espaso(name, splitChar){
    let nome = name.split(splitChar)[0]
    return nome
}
//-----------------------------------------------------------------------------------------------------------------------------------------

