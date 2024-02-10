function sorteia() 
{
   

   //id e navegador 
   var min = document.getElementById("min").value;
   var max = document.getElementById("max").value;
   var numeroEscolhido = document.getElementById("numeroEscolhido").value;
   numeroSorteio = Math.round (Math.random()*(max-min) + min);

   console.log ("valor min "+ min);
   console.log ("valor max " + max);
   console.log (numeroSorteio);
   console.log (numeroEscolhido);

  
  let diva =document.getElementById("resultado")
  diva.innerHTML = ("numero sorteado: " +numeroSorteio+ " numero escolhido: " +numeroEscolhido)
  
   //navegador
//document.write("numero sorteado: " +numeroSorteio+ " numero escolhido: " +numeroEscolhido);
}