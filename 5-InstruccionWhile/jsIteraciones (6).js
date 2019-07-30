function mostrar()
{

	var contador=0;
	var acumulador=0;
	var dato;

	while(contador<5){
		dato=parseInt(prompt("ingrese un numero: "))
		acumulador= acumulador + dato
		contador++
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN