let a = 100
let b = 4

let suma = a + b
console.log("suma", suma)

let resta = a - b
console.log("resta", resta)

let multiplicacion = a * b
console.log("multiplicar", multiplicacion)

let division = a / b
console.log("division", division)

let raiz = Math.sqrt(144)
console.log("Raíz Cuadrada", raiz)

let residuo = 101 % 4
console.log("residuo", residuo)

//CONCATENACION

let saludo = "Hola soy "

let nombre = "Álvaro"

console.log(saludo + nombre + ", que tal")

console.log(nombre + " " + 27 + " años")

let miEdad = 27

let texto = `Hola soy ${nombre} soy de Chorrillos y tengo ${miEdad}`
console.log(texto)

//PROMPT
//Es la primera manera de capturar datos

let cantidadPerretes = prompt("Cuantas mascotas tienes?")

console.log(`Mascotas ${cantidadPerretes}`)

//let mascotasConvertidas1 = parseInt(cantidadPerretes)
let mascotasConvertidas1 = +cantidadPerretes
console.log(typeof mascotasConvertidas1)
