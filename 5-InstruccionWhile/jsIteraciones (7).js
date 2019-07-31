function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;

	do{
		do{
			numero=parseInt(prompt("Ingrese un numero:"))
		}while (isNaN(numero))
		
		acumulador=acumulador+numero
		contador++
		respuesta=prompt("quiere seguir ingresando numeros?")
	}while( respuesta=="si")


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN