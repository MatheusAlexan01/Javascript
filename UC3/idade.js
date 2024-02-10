function resultado(){

    var idade = Number(document.getElementById("idade").value);
    var tempo = "criança";
    



if(idade<=12){

    

}else{
    
    if(idade<=18){
        
        tempo ="adolecente"//document.write("Você tem " + idade + " então você é um adolcente")

    }else{
        if(idade<=24){

           tempo ="jovem adulto" //document.write("Você tem " +idade + " Então você é um jovem adulto")

        }else{
           if(idade<=60){
            tempo = "Adulto"
            
        }else{
             tempo = "Idoso"

            }
        }

    }


}

//document.write(` ${idade} ${tempo}`)
var diva = document.getElementById("dino")
diva.innerHTML = `Você tem ${idade} anos de idade, então você é um <strong>${tempo}<strong>.`
}