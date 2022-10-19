const { Router } = require('express');
const { check } = require('express-validator');
const { store_carrera } = require('../controllers/carrera.controller');
const { validarCampos } = require('../middlewares/validar-campos');



const router = Router();

router.post('/', [
    check('Nombre', 'El campo nombre debe de ser de tipo string').isString(),
    check('Nombre', 'El campo nombre no contiene informacion').notEmpty(),
    check('Duracion', 'El campo duracion debe de ser de tipo numerico').isNumeric(),
    check('Duracion', 'El campo duracion no contiene informacion').notEmpty(),
    validarCampos
], store_carrera)

module.exports = router;