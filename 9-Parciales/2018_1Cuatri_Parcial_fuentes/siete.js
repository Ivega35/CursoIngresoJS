function mostrar() {
    var nota;
    var sexo;
    var contador;
    var acumulador = 0
    var promedio;
    var flag = true
    var baja;
    var desaprobados = 0;
    var sexobaja

    for(contador=1; contador<=5 ; contador++){

        do{
            nota = parseInt(prompt("Ingrese la nota del alumno " + contador))
            acumulador = acumulador + nota
        }while (isNaN(nota))


        do{
            sexo = prompt("Ingrese el sexo del alumno " + contador)
        }while (sexo=='m')

        if (flag = true){
            baja = nota
            flag = false
        }
        if(nota < baja){
            baja = nota
            sexobaja = sexo
        }
        if(nota >= 6 && sexo == 'm'){
          desaprobados++
        }
    }
    promedio = acumulador / 5;
    alert("el promedio de las notas es " + promedio);
    alert("la nota mas baja es " + baja + " y su sexo es " + sexobaja + ".");
    alert(" la cantidad de varones que su nota es menor o igual a 6 es de " + desaprobados);
}
