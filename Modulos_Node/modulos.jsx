
//Conocer la memoria libre del equipo 
const os= require("os");

console.log('Memoria Libre: '+ os.freemem()/ 1000000000 + ' Gigas');

//Crear archivos 
//Recibe 3 parametros 1 nombre, 2 archivos y el 3 la funcion 

const fs = require ("fs")

fs.writeFile('./texto.txt','Hola desde Archivo', function (err){
if(err){
    console.log("ocurrio un error")
}
console.log("Archivo creado con exito")

})

//Funcion readFile 
//Recibe 2 parametros, donde esta la ubicación del archivo, la funcion que recibe (un error y los datos que leyo)

fs.readFile("./texto.txt", function (err, data){
    if (err){
        console.log ("Ocurrio un error ")}
    console.log(data.toString())
})

//Modulo de HTTP se encarga de conectar y crear un servidor, enviar bases de datos enviar rutas 

//Vamos a crear un servidor de manera muy sencilla 

//llama a HTTP 
const http = require("http");
const { func } = require("prop-types");
//Crear servidor 
//Recibe una funcion como parametro

http.createServer(function(req, res){
    //Especificar la respuesta si es HTML si es texto plano o archivos o datos en json
    //200 es el codigo de respuesta y despues el tipo de respuesta 
    res.writeHead(200, {"Content-type":"text/html"})
    //Respuesta cuando entra al servidor
    res.write("<h1>Hola desde node</h1>");
    res.end();
}).listen(3000)
//Listen es la que escucha y se entra desde un navegador a localhost:3000 


//MEJORA DE CODIGO 

//Primero el modulo http con funciones para crear un servidor 
const http = require("http");
//Llamar la respuesta cuando se crea el servidor 
function peticion (req, res){
    res.writeHead(200, {"Content-type":"text/html"});
    res.write("<h1>Hola de nuevo </h1>")
    //Cierra o finaliza con 
    res.end();
}
//Crea un servidor 
let server = http.createServer( peticion )
//Se crea un objeto que tiene funciones integradas puedo escuchar al servidor 
server.listen(3000, function(){
    console.log("Servidor OK en el puerto 3000")
});
