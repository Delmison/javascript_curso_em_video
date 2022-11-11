function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 18
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        msg.innerHTML = `Bom dia agora são ${hora} horas.`
        img.src= 'fotomanha.png'
        document.body.style.background='#ffc492'
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE
        msg.innerHTML = `Boa tarde agora são ${hora} horas.`
        img.src= 'fototarde.png'
        document.body.style.background='#ffab11'
    }else{
        //BOA NOITE
        msg.innerHTML = `Boa noite agora são ${hora} horas.`
        img.src= 'fotonoite.png'
        document.body.style.background='#18333e'
    }
}
