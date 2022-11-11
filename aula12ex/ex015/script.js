function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML=`Idade calculada: ${idade}` 
        var genero = ''
        var img= document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero='Homem'
            if(idade >=0 && idade < 10){
                //Crianca
                img.setAttribute('src','fotocriancamenino.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src','fotojovemhomem.png')
            }else if (idade < 50 ){
                //Adulto
                img.setAttribute('src','homem.png')
            }else {
                img.setAttribute('src','fotosenhor.png')
            }
        }else if(fsex[1].checked) {
            genero='Mulher'
            if(idade >=0 && idade < 10){
                //Crianca
                img.setAttribute('src','fotocriancamenina.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src','fotojovemmulher.png')
            }else if (idade < 50 ){
                //Adulto
                img.setAttribute('src','mulher.png')
            }else{
                //Idoso
                img.setAttribute('src','fotosenhora.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}