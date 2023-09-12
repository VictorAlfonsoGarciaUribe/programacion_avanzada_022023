const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const expressMyConnection = require('express-myconnection');

const app = express();

// Configurar Express para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));


// Importando rutas
const customerRoutes = require('./routes/customer');

// Configuración
app.set('port', process.env.PORT || 3000);

// Configuración de la vista
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuración de middlewares
const dbConfig = {
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'crudnodejsmysql',
  charset: 'utf8mb4',
};

// Agregar el middleware de conexión
app.use(expressMyConnection(mysql, dbConfig, 'single'));

app.use(morgan('dev'));

// Configurar el análisis del cuerpo de la solicitud (body-parser incorporado)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/', customerRoutes);

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
app.listen(app.get('port'), () => {
  console.log('Servidor en el puerto 3000');
});