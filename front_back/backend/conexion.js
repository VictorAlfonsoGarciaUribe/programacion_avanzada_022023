const express = require("express");
const mysql = require("mysql");
const cors = require("cors")

const app = express();
const puerto = 3000;



//configuracion de la conexion con la bd
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"tienda"
});

//establecer conexion con la BD
db.connect((err)=>{
    if(err){
        console.error("Error al conectarse a la BD" + err)
    }else{
        console.log('Conectado');
    }
});

//cors
//Estudiar cors unblok
app.use(cors());

// Configuración de cors
 
 

  // Configuración de cors
const corsOptions = {
    origin: 'http://127.0.0.1:5500', // Cambia esto al origen de tu aplicación web
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  app.use(cors(corsOptions));

//Servidor
app.listen(puerto,()=>{
    console.log(`Server on port ${puerto}`);
})

//Convertir los datos de la BD a JSON
app.use(express.json());

/*Rutas para obtener los datos de la BD*/
app.get("/productos",function(req,res){
    db.query("SELECT * FROM productos", (err,result)=>{
        if(err){
            console.log("Error al btener los datos"+err);
            res.status(500).json({error: "error con la tabla productos"})
            return;
        }
        res.json(result)
    })
})