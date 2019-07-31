function mostrar() {


	var positivo = 0;
	var negativo = 1;
	var numero;
	var respuesta = 'si';

	while (respuesta == "si") {
		do{
		numero = parseInt(prompt("Ingrese un numero:"))
		}while (isNaN(numero))
		if (numero >= 0) {
			positivo = positivo + numero
		}
		else {
			negativo = negativo * numero
		}

		respuesta = prompt("quiere seguir ingresando numeros?")
	}

	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN