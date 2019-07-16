function mostrar()
{
    var numUno=(prompt("ingrese el primer numero"));
    var numDos=(prompt("ingrese el segundo numero"));
    var resultado;
    
    if (numUno==numDos){
        alert(numUno+numDos);
    }
    
    else if(numUno>numDos){
        numUno=parseInt(numUno);
        numDos=parseInt(numDos);
        resultado=(numUno-numDos);
        alert(resultado);
    }
    else if(numUno<numDos){
        numUno=parseInt(numUno);
        numDos=parseInt(numDos);
        resultado=numUno+numDos;
        alert(resultado);
        if (resultado > 10){
            alert("la suma es "+resultado+" y es mayor a 10");
        }

    }
}
