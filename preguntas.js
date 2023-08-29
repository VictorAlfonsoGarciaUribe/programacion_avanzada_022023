//arreglo de preguntas que luego vamos a pasar por una funcion que exportaremos 
let preguntas = [
    "¿Cual es su nombre?",
    "¿Cual es su edad?",
    "¿cual es tu lenguaje favorito?"
]
//Funcion con array 
function preguntar(i){
    ProcessingInstruction.stdout.write(preguntar[i])
}


//Funcion que exportamos a otro archivo 
function saludo (nombre){
return "hola"+nombre;
}
exports= {saludo:saludo,
        preguntas:preguntas,
        preguntar:preguntar
}

//console.log(exports)