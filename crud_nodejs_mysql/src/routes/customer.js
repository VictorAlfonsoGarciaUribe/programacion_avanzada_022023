
const express = require('express');
const router = express.Router();

// Requerir el método controller
const customerController = require('../controllers/customerController')

router.get('/', customerController.login);

// Rutas
router.get('/', customerController.login);
router.post('/login', customerController.login_in);
router.get('/register', customerController.register);
router.post('/register', customerController.save_register);
router.get('/list', customerController.list);
router.post('/add', customerController.save);
router.get('/delete/:id', customerController.delete);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);

router.get('/update/:id', customerController.edit);
module.exports = router;