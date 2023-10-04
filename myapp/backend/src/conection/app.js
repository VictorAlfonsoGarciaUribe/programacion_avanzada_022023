const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const cors = require("cors")
const expressMyConnection = require('express-myconnection');

const app = express();


// Importando rutas
const routes = require('../routes/routes');
// Usando Rutas
app.use('/', routes);

// Configuración puerto 
app.set('port', process.env.PORT || 3000);

  // Configuración de cors
  const corsOptions = {
    origin: 'http://localhost:5173/', // Origen de front
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  app.use(cors(corsOptions));

// Configuración de la vista enlace con React
app.use('/static', express.static(path.join(__dirname, 'frontend', 'dist')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});





// Configuración de middlewares
const dbConfig = {
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'tienda',
  charset: 'utf8mb4',
};

// Agregar el middleware de conexión
app.use(expressMyConnection(mysql, dbConfig, 'single'));

app.use(morgan('dev'));

// Configurar el análisis del cuerpo de la solicitud (body-parser incorporado)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Iniciar el servidor
app.listen(app.get('port'), () => {
  console.log('Servidor en el puerto 3000');
});