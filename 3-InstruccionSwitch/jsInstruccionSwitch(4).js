function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño){
        case "Febrero":
            alert("tiene 28 dias")
            break; 
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert("tiene 31 dias")
            break; 
        default:
            alert("tiene 30 dias")
            break;                                
    }
	
	



}//FIN DE LA FUNCIÓN