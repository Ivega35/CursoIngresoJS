function mostrar() {
    var letra;
    var numero;
    var respuesta;
    var pares = 0;
    var impares = 0;
    var resto;
    var ceros = 0
    var pos = 0;
    var sumNeg = 0;
    var promedio;
    var contPos = 0;
    var flag = 0;
    var maximo;
    var minimo;
    var letMax;
    var letMin;

    do {
        letra = prompt("Ingrese una letra:");
        while (!isNaN(letra)) {
            letra = prompt("El dato ingresado no es una letra, ingrese una letra:");
        }
        numero = parseInt(prompt("ingrese un numero:"));
        while (isNaN(numero) || numero < -100 || numero > 100) {
            numero = parseInt(prompt("el numero ingresado no es valido, vuelva a ingresar el numero:"));
        }
        resto = numero % 2;
        if (resto == 0 && numero != 0) {
            pares++;
        }
        else if (resto != 0 && numero != 0) {
            impares++;
        }
        else {
            ceros++;
        }
        if (numero >= 0) {
            pos = pos + numero;
            contPos++
        }
        else {
            sumNeg = sumNeg + numero;
        }
        if (flag == 0 || numero > maximo) {
            maximo = numero;
            letMax = letra;
        }
        if (flag == 0 || numero < minimo) {
            minimo = numero;
            letMin = letra;
            flag = 1;
        }


        respuesta = prompt("¿Desea seguir ingresando numeros?")

    } while (respuesta == "si")
    promedio = pos / contPos

    document.write("la cantidad de numeros pares es " + pares + "<br>");
    document.write("La cantidad de numeros impares es " + impares + "<br>");
    document.write("La cantidad de ceros es " + ceros + "<br>");
    document.write("El promedio de todos los numeros positivos es " + promedio + "<br>");
    document.write("La suma de todos los numeros negativos es " + sumNeg + "<br>");
    document.write("el numero maximo es " + maximo + " y su letra asociada es " + letMax + "<br>");
    document.write("El numero minimo es " + minimo + " y su letra asociada es " + letMin + "<br>");

}