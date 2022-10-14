const { Router } = require('express')
const { store_carrera } = require('../controllers/carrera.controller')

const router = Router();

router.post('/', store_carrera)

module.exports = router;