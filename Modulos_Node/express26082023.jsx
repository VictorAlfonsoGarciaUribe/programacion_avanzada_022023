

const express = require ('express');

const app = express ();

//Middlewares -- Funciona para cualquier ruta
    //- Funciona para procesar datos antes de que lleguen a la ruta 

    //Static Files es un Middleware que se encarga de mandar archivos al fontend

//Vamos a crear una funcion que registre las peticiones que lleguen al servidor
function logger(req, res, next){
    console.log ('request recived');
    //Antes de que llegue a su ruta final tendra que pasar por aqui antes y para ello usamos next
    next();

}


//app.all para ruta especifica 
app.all('./user', (req, res, next)=>{
    //Todo lo que se enrute para user debera pasar por aqui primero 
    console.log('Por aqui paso');
    next();
});


app.use(express.json());
//Para ejecutar el Middleware siempre se usara el app.use(funcion)
app.use(logger)


//Vamos a crear 2 usuarios en un array

let usuarios = [
    {
        "nombre" : "Victor",
        "apellido" : "Garcia"
    },
    {
        "nombre" : "Alejo",
        "apellido" : "Garcia"
    }
]

app.get('/', (req, res)=>{
    res.send('hello world')
})

//Ruta para obtener datos del usuario 
app.get('/Usuarios', (req, res)=>{
    res.json(usuarios)
})




app.listen(3000, () => {
    console.log('server on port 3000')
} )



