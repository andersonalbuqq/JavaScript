function carregar(){ 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora>=0 && hora<12){
        //bom dia
        img.src = 'fotomanha.png'
        window.document.body.style.background = '#fec782'
    } else if(hora<18){
        //boa tarde
        img.src = 'fototarde.png'
        window.document.body.style.background = '#a96a41'
    }else{
        //boa noite
        img.src = 'fotonoite.png'
        window.document.body.style.background = '#0a5ebf'
    }
}