function gerar(){
    var num = document.getElementById('txttabuada')
    var res = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('[ERRO] Por favor, digite um número')
    }else{
        var n = Number(num.value)
        var c = 1
        res.innerHTML=''
        for(var i = n;c <=10;c++){
            var item = document.createElement('option')
            item.text=`${n} x ${c} = ${n*c}`
            item.value=`tab${c}`
            res.appendChild(item)
        }
    }
}
