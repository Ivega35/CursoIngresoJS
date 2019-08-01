function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){
    case "Abril":
    case "Mayo":
    case "Junio":        
        alert("Falta para el invierno")
        break; 
    case "Julio":
    case "Agosto":    
    alert("abrigate que hace frio")
        break; 
    default: 
    alert("ya pasamos el frio, ahora el calor!!") 
    break;       
}




}//FIN DE LA FUNCIÓN