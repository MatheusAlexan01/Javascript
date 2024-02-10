function Resultado(){

    var total = Number(document.getElementById("total").value);
    var Nulos = Number(document.getElementById("Nulos").value);
    var Brancos = Number(document.getElementById("Brancos").value);
    var Validos = Number(document.getElementById("Validos").value);
    var partidoA = Number(document.getElementById("A").value);
    var partidoB = Number(document.getElementById("B").value);
    //var calculo1 = ((total*Nulos)/100);
    //var calculo2 = ((total*Brancos)/100);
    //var calculo3 = ((total*Validos)/100);

    if((total == (Nulos+ Brancos+ Validos)) && (Validos == (partidoA + partidoB))){
        var calculo1 = ((Nulos/total)*100);
        var calculo2 = ((Brancos/total)*100);
        var calculo3 = ((Validos/total)*100);
        var calculo4 = ((partidoA/total)*100);
        var calculo5 = ((partidoB/total)*100);
        document.write(`O total de votos foram ${total}, os nulos ${calculo1.toFixed(1)}%, os brancos ${calculo2.toFixed(1)}% e os validos ${calculo3.toFixed(1)}%
        , o partido A ${calculo4.toFixed(1)}% e por fim o partido B ${calculo5.toFixed(1)}%.`)
    }else{
        
        
        document.write("Eleição Petista")
        



}
}