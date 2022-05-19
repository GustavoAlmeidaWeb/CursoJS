function calcularTabuada(){
  
    var n = document.getElementById('txtnum').value
    var res = document.getElementById('resultado')
    
    
     for (c=1;c<=10;c++){
         var conta = Number(n*c)
         // console.log(`${n} x ${c} = ${conta}`)
         res.innerHTML += `<p>${n} x ${c} = ${conta}</p>`
     }
 }