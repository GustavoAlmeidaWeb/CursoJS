let num = [5,8,9,3,2]

//ADICIONA VALOR AO ULTIMO CAMPO
num.push(7)
//

console.log(num)
console.log(`O VETOR TEM ${num.length} POSIÇÕES`)
console.log(`O PRIMEIRO VALOR O VETOR É ${num[0]}`)

// mostra onde está um determinado valor dentro do array
let pos = num.indexOf(2)
if(pos == -1){
    console.log('o valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}

// VETOR EM ORDEM CRESCENTE
num.sort()
console.log(num)

