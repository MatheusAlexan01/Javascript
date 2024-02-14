var horaNormal= 200 //ele trabalhou 200 horas normais.
var HoraExtra= 55   // ele trabalhou 55 horas extras.

var salariobruto = horaNormal * 10 + HoraExtra * 15
var desconto = salariobruto *10/100
var salarioLiquido = salariobruto - (desconto)


console.log(`O salario Liquido foi ${salarioLiquido}R$ o desconto de impostos foi ${desconto}R$.`)


