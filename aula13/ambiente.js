/* Teste logico feito no final */
/*var c = 1 
do {
    console.log(`Tudo certo ${c}`)
    c++
}while (c <=6)*/

/* Teste logico feito no inicio */
/*var c = 1 
while(c <=6){
    console.log(`Tudo certo ${c}`)
    c++
}*/

/*for(c = 1;c <=10;c++){
    console.log(`Tudo certo ${c}`)
}*/
for (var i=1; i<=100; i=i+1) {
    var resultado = resultado + "<td>";
    for (var j=0; j<=10; j=j+1) {
      var multiplicacao = i*j;
      console.log(`${multiplicacao}`)
}
}