function fatorial(n){
    let fat = 1
    for (let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

// 5! = 5 x 4 x 3 x 2 x 1 = 120

// RECURSIVIDADE

function fatorial_rec(n1){
    if (n1 == 1){
        return 1
    } else {
       return n1 * fatorial_rec(n1-1)
    }
}

console.log(fatorial_rec(5))