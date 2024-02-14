var presento = 50;
var queijo = 50;
var hambuguer = 100;
var QuantiSandui = 22;
console.log (`Para fazer ${QuantiSandui} sanduíche é necessario= `)

var comida = [presento,queijo,hambuguer];

var kiloQueijo = comida[0] / 1000;
var NecesssarioQueijo = kiloQueijo * QuantiSandui;
console.log(`Foi necessario ${NecesssarioQueijo.toFixed(2)}KG de Queijo.`)

var kiloPresunto = comida[1] / 1000;
var NecesssarioPresunto = kiloPresunto * QuantiSandui;
console.log(`Foi necessario ${NecesssarioPresunto.toFixed(2)}KG de Presunto.`)

var KiloBuger = comida[2] / 1000
var NecesssarioHambuger = KiloBuger * QuantiSandui
console.log (`Foi necessario ${NecesssarioHambuger.toFixed(2)}KG de Hambuguer.`)

