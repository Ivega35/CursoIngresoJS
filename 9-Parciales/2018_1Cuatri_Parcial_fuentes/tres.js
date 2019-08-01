function mostrar()
{   var precio;
    var porcentaje;
    var resultado;

    precio=parseInt(prompt("ingrese el precio"));
    porcentaje=parseInt(prompt("Ingrese el porcentaje de descuento"));
    resultado= (porcentaje*precio)/100;
    document.getElementById("elPrecioFinal").value=resultado;

}
