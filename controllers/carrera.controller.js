const { request, response } = require('express');
const { store } = require('../services/carrera.service')

const store_carrera = async (req = request, res = response) => {
    try {
        const peticion = await store(req.body)
        return res.status(peticion.statusCode).send(peticion)
    } catch (error) {
        return res.status(500).send({
            success: false,
            data: null,
            message: "Algo salio mal",
        });
    }
}


module.exports = {
    store_carrera
}