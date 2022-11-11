function contar(){
var ini = document.getElementById('txtini')
var fim = document.getElementById('txtfim')
var passo = document.getElementById('txtpasso')
var res = document.getElementById('res')
if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
    res.innerHTML='Impossível contar!'
   // alert('[Erro]  Faltam dados!')
}else{
    res.innerHTML ='Contando:<br>'
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (p<=0){
        alert('Passo inválido! Considerando PASSO 1')
        p=1
    }
    if(i < f ){
        //Contagem crescente
        for(var c = i;c <=f;c += p){
            res.innerHTML += `${c} \u{1F449}`
        }
        
    }else{
        //Contagem regressiva
        for(var c =i; c>=f; c-=p){
            res.innerHTML +=`${c} \u{1F449}`
        }
    }
    res.innerHTML +=`\u{1F3C1}`
}
}