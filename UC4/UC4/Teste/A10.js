
const valoresMoedas = [0.01, 0.05, 0.1, 0.25, 0.5, 1]; // tipos de moedas


const quantidadesMoedas = [10, 5, 13, 7, 12, 22]; // quantidade de cada moeada

var total=0;

for(i =0;i<valoresMoedas.length;i++){
 total += valoresMoedas[i] * quantidadesMoedas[i];


}

var totalReias = total.toFixed(2);

console.log(`Pedrinho economizou um total de R$${totalReias}.`)