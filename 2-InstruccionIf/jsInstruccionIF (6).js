function mostrar()
{
    var edad=parseInt(document.getElementById("edad").value);
   
    if(edad >= 13 && edad <=17){
        alert("Es adolescente")
    }
    else if(edad>=18){
        alert("Es mayor de edad");
    }
    else if(edad<13){
        alert("Es niño")
    }
    }

    




//FIN DE LA FUNCIÓN