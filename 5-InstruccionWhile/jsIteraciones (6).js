function mostrar()
{

	var contador;
	var acumulador=0;
	var dato;

	for(contador=0;contador<5;contador++){
		do{
		dato=parseInt(prompt("ingrese un numero: "))
		}while(isNaN(dato))//isNaN es para asegurar que es un numero

		acumulador= acumulador + dato
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN