function mostrar() {
    var nota;
    var sexo;
    var contador;
    var acumulador = 0
    var promedio;
    var flag = 0
    var baja;
    var desaprobados = 0;
    var sexobaja

    for (contador = 1; contador <= 5; contador++) {
        nota = parseInt(prompt("Ingrese la nota del alumno " + contador))
        while (isNaN(nota) || nota > 10 || nota < 1) {
            nota = prompt("nota no valida, vuelva a ingresar nota de alumno " + contador + ":")
        }
        sexo = prompt("Ingrese el sexo del alumno " + contador)
        while (sexo != "f" && sexo != "m") {
            sexo = prompt("sexo no valido, vuelva a ingresar sexo de alumno " + contador + ":")
        }


        if (flag == 0) {
            baja = nota;
            flag = 1;
        }
        if (nota < baja) {
            baja = nota;
            sexobaja = sexo;
        }
        if (nota >= 6 && sexo == 'm') {
            desaprobados++;
        }
        acumulador = acumulador + nota;
    }
    promedio = acumulador / 5;
    alert("el promedio de las notas es " + promedio);
    alert("la nota mas baja es " + baja + " y su sexo es " + sexobaja + ".");
    alert(" la cantidad de varones que su nota es menor o igual a 6 es de " + desaprobados);
}
