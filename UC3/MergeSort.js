function mergeSort(numero) {
    if (numero.length <= 1) {  
      return numero;
    }
  
    var meio = (numero.length / 2);
    var esquerda = numero.slice(0, meio);
    var direita = numero.slice(meio);
  
    return merge(mergeSort(esquerda), mergeSort(direita));
  }
  
  function merge(esquerda, direita) {
    var resultado = [];
    var indiceEsquerda = 0;
    var indiceDireita = 0;
  
    
    while (indiceEsquerda < esquerda.length && indiceDireita < direita.length) {
    
      if (esquerda[indiceEsquerda] < direita[indiceDireita]) {
        resultado.push(esquerda[indiceEsquerda]);
        indiceEsquerda++;
        
  
      } else {
        resultado.push(direita[indiceDireita]);
        indiceDireita++;
       
      }
      
    }
    return resultado.concat(esquerda.slice(indiceEsquerda)).concat(direita.slice(indiceDireita));
  }
  
  
  const numeroDesordenado = [130, 40, 1, 32, 45, 345, 72, 21, 10, 57];
  const numeroOrdenado = mergeSort(numeroDesordenado)
  console.log(numeroOrdenado);
  