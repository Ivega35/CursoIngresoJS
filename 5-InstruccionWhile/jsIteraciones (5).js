function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (!(sexo== "f" || sexo=="m")){
    sexo=prompt("El sexo ingresado no existe. Ingreselo nuevamente:")

}
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN