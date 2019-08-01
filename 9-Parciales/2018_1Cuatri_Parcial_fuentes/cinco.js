function mostrar() {
    var planeta = prompt("Ingrese el nombre de un planeta del sistema solar:")

    switch (planeta) {
        case "mercurio":
        case "venus":
            alert("Aca hace mas calor");
            break;
        case "tierra":
            alert("Aca vivimos.")
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert("aca hace mas frio");
            break; 
        default:
            alert("Ese no es un planeta del sistema solar")
            break;        
    }
}
