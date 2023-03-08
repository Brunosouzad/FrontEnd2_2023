let meuArray = [1,2,4,8]
let total = meuArray.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
})

console.log(total);