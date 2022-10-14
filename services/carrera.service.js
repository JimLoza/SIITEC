const { responseErrorService, responseService } = require('../helpers/response.help')
const pool = require('../database/config')

const store = async (payload) => {
    console.log(payload.Nombre, payload.Duracion);
    const data = [payload.Nombre, payload.Duracion]
    const con = await pool.getConnection();
    try {
        con.query("INSERT INTO carrera(Nombre, Duracion) VALUES (?, ?)", data);
        con.end();
        return responseService(true, 200, payload, "Ok")
    } catch (error) {
        console.log(error);
        con.end();
        return responseErrorService();
    }
}


module.exports = {
    store
}