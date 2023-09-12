
const express = require('express');
const router = express.Router();

// Requerir el método controller
const controller = require('../controllers/controller')

router.get('/', controller.index);

// Rutas
router.get('/', controller.index);
router.post('/', controller.index);


module.exports = router;