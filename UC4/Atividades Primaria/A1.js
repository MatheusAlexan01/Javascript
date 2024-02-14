
let pao = 0.12;
let broa = 1.50;
let qtdPaes = 22;
let qtdBroa = 44;
let arrecadacaoDia = (pao * qtdPaes) + (broa * qtdBroa);
let porcentagem = arrecadacaoDia / 100 * 10;
console.log(`O total arrecadado foi ${arrecadacaoDia}.`);
console.log(`Já a porcentagem foi ${porcentagem.toFixed(2)}.`);
