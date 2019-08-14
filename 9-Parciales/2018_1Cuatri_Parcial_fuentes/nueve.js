function mostrar() {
    var marca;
    var peso;
    var temperatura;
    var respuesta;
    var tempPar = 0;
    var flag = 0;
    var pesoMax;
    var marcaMax;
    var bajoCero = 0;
    var acumPeso = 0;
    var promedio;
    var pesoMin;
    var contador = 0

    do {
        marca = prompt("Ingrese el nombre de la marca:")
        
        peso = parseInt(prompt("Ingrese el peso del producto:"))

        while (isNaN(peso) || peso < 1 || peso > 100) {
            peso = parseInt(prompt("El peso ingresado no es valido, vuelva a ingresar el peso:"))
        }
        
        temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento:"))
    
        while (temperatura < -30 || temperatura > 30) {
            temperatura = parseInt(prompt("Temperatura no valida. Ingrese la temperatura de almacenamiento nuevamente:"))
        }

        if (temperatura % 2 == 0) {
            tempPar++;
        }
        if (flag == 0 || peso > pesoMax) {
            pesoMax = peso;
            marcaMax = marca;

        }
        if (flag == 0 || peso < pesoMin) {
            pesoMin = peso;
            flag = 1;
        }
        if (temperatura < 0) {
            bajoCero++;
        }
        acumPeso = acumPeso + peso;
        contador++;




        respuesta = prompt("¿Desea seguir ingresando datos?");
    } while (respuesta == "si")
    promedio = acumPeso / contador;

    document.write("La cantidad de temperaturas pares es " + tempPar + "<br>");
    document.write("La marca del producto mas pesado es " + marcaMax + "<br>");
    document.write("La cantidad de productos conservados bajo cero es " + bajoCero + "<br>");
    document.write("El promedio del peso de los productos es " + promedio + "<br>");
    document.write("El peso maximo es  " + pesoMax + " y el peso minimo es " + pesoMin + "<br>");

}
