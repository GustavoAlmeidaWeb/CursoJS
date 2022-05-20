function contar(){
   
    var inicio = document.getElementById('num-inicio')
    var final = document.getElementById('num-final')
    var passo = document.getElementById('num-passo')
    var res = document.getElementById('resultado')

    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        
        alert('Impossivel contar')

    } else {
        res.innerHTML = `Contando: </br>`
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)

        if(p <= 0 ){
            alert('Passo Invalido! Considerando PASSO 1')
            p = 1
        }
        if( i < f){
            //CONTAR EM ORDEM CRESCENTE
            for(let c = i; c <= f; c += p){

                res.innerHTML += `${c} \u{1F449}`
            }

        } else {
            //CONTAR EM ORDEM DECRESCENTE
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}