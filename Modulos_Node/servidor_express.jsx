// Una vez tenemos claro que se instalo express mediante npm install express 
// Confirmamos que si por que aparece el archivo package-lock.json

// Crear un servidor con express 

//Declaramos una constante con express que internamente utiliza el modulo http

const express = require ('express');

//Este modelo nos devuelve un objeto que vamos a almacenar en una constante que se convierte en el servidor

const app = express ();

//Configurar el servidor como json 
app.use(express.json());

//Ruta al servidor (Hasta el momento el no tiene)

app.get('/', (req, res)=>{
    res.send('hello world')
})

//Para crear una nueva ruta
app.get('/Servicios', (req, res)=>{
    res.send('Ruta de servicios')
})

//Para escuchar el servidor llamamos la constante 

app.listen(3000, () => {
    console.log('server on port 3000')
} )

//Tipos de ruta get => Para obtener datos 
//post para mandar datos 
//put para actualizar datos 
//delete para borrar datos

//###midilwere, funciones archivos estaticos 