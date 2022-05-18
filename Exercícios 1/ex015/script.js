function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){

        alert('ERRO - VERIFIQUE OS DADOS E TENTE NOVAMENTE')
        
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
       // res.innerHTML = `A idade é ${idade}` 
        var genero = ''

        // MESMA COISA QUE CRIAR NO HTML <IMG ID="FOTO"> 
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            
            genero = 'Homem'

            //Mostra foto de acordo com idade HOMEM

            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'homem-crianca.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 60){
                //adulto 
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'homem-idoso.png')
            }

        //Mostra foto de acordo com idade MULHER

        } else if (fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'mulher-crianca.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 60){
                //adulto 
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }

        }
        res.innerHTML = `Detectamos que é ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}
