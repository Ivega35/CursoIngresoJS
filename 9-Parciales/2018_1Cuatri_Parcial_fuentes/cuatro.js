function mostrar() {
    var num1 = prompt("ingrese el primero numero:");
    var num2 = prompt("ingrese el segundo numero:");
    var resultado;

    if (num1 == num2) {
        resultado = num1 + num2;
        alert(resultado);
    }
    if (num1 > num2) {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        resultado = num1 - num2;
        alert(resultado);
    }
    if (num1 < num2) {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        resultado = num1 + num2;
        if (resultado > 10) {
            alert("el resultado es " + resultado + " y supero el 10")
        }
        else {
            alert(resultado);
        }
    }
}
