"use strict";

var notas = [6.8,3.5,9.1]
var soma =0;
for(var i=0;i<notas.length;i++){
    soma+=notas[i];


}


var media = soma / 3;
console.log(`As Notas Foram ${notas}`)
console.log(`Media do caro aluno foi ${media.toFixed(1)}.`);
