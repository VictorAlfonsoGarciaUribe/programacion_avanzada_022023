

const express = require ('express');

const app = express ();

app.use(express.json());

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



