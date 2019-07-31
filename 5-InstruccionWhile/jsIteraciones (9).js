function mostrar() {

	var contador = 0;
	var maximo = 0;
	var minimo = 0;
	var numero;
	var respuesta;
	var flag = true

	do{
	do {
		numero = parseInt(prompt("ingrese un numero:"))
	} while (isNaN(numero))
	if (flag = true) {
		flag = false
		maximo = numero
		minimo = numero
	}
	if (numero > maximo) {
		maximo = numero
	}
	if (numero < minimo) {
		minimo = numero
	}



	respuesta = prompt("desea seguir ingresando numeros?")

} while (respuesta == 'si')

	document.getElementById("minimo").value = minimo
document.getElementById("maximo").value = maximo


}//FIN DE LA FUNCIÓN