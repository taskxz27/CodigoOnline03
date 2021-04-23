function calcularAreaTriangulo(base, altura){
    //console.log("Estoy ejecutandome dentro de una función")
    let area = base * altura / 2
    //console.log(area)
    return area
}

console.log(calcularAreaTriangulo(50,25))

//ÁMBITO - Scope
//console.log(area)

//ámbito global = todo el documento
let nombre = "Daniel"  //esta variable seria de ámbito global

function imprimirNombre(){
 
    //ambito local
    nombre = "Álvaro"
    console.log(nombre) 
    var variable = 42   
}

imprimirNombre()
//console.log(variable)