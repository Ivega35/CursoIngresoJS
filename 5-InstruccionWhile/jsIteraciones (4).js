function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(numero<0 || numero>10){

		numero=prompt("El numero no esta entre 0 y 10. Reingrese el numero:")
	
	}
	alert( numero )

}//FIN DE LA FUNCIÓN