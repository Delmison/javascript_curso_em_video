/*var num = [5,8,3,2,9]
num.push(1)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro número é  ${num[0]}`)
*/
/*
var valores=[8,1,3,4,2,9]
//valores.sort()
for (var pos=0; pos <valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

var valores=[8,1,3,4,2,9]
valores.sort()
for (var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}