function carregar(){

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas`
    

    if (hora >= 0 && hora < 12){
        
        img.src = 'img-manha.png'
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora <= 18){
        
        img.src = 'img-tarde.png'
        document.body.style.background = '#b9846f'
        document.getElementById('imagem').width = "300";

    } else {
        
        img.src = 'img-noite.png'
        document.body.style.background = '#515154'

    }
} 