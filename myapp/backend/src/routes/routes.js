
const express = require('express');
const router = express.Router();

// Requerir el método controller
const controller = require('../controllers/controller')



// Rutas
router.get('/', controller.productos);
router.get('/inventario', controller.inventario);
 

module.exports = router;