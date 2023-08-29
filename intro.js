//importar funcion desde otro archivo 
let saludar = require("./preguntas.js")


//Imprimir en consola
console.log("Hola desde Node")

//Imprimir datos 
process.stdout.write("Escribe nombre \n");

//Solicitar datos por consola node 

var ingresadato = process.stdin;

//Usar el dato solicitado en consola

ingresadato.on("data", function(data){
console.log(saludar.saludo(data));

//Cierra la ejecucion de solicitud de datos 
process.exit();

})

//**********Ejercicio 2 *********/
//Importar funcion con un destructury
let {preguntas, preguntar} = require("./preguntas.js")

//Defino variable de arreglo 
let respuestas = []
// Ingresar datos al arreglo respuestas 
process.stdin.on("data", function(data){
    respuestas.push
    
    //Cierra la ejecucion de solicitud de datos 
    process.exit();
    
    })

    //Aprender modulos HTTP, OS, FS