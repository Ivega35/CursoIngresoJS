/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numUno;
    var numDos;
    numUno=document.getElementById("numeroUno").value;
    numDos=document.getElementById("numeroDos").value;
    numUno=parseInt(numUno);
    numDos=parseInt(numDos);
    alert(numUno+numDos);
}

