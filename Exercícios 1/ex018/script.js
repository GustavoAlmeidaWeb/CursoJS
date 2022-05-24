function adicionarValores(){

let numero = []
let valor = Number(document.getElementById('valor').value)
let select = document.getElementById('addValor')
let pos = numero.indexOf(valor)

if (valor >=1 && valor <= 100 && valor != 0 && pos == -1){
   
    numero.push(valor)
    
    let item = document.createElement('option')
    item.text = `O valor ${valor} foi adicionado`
    select.appendChild(item)

    alert(numero)
    

} else {
    alert('Valor inválido ou já existente')
}
}