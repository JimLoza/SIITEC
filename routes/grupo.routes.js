const { Router } = require('express');
const { store_grupo } = require('../controllers/grupo.controller');
const router = Router();

router.post('/', store_grupo)






module.exports = router;