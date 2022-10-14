const { responseErrorService, responseService } = require('../helpers/response.help')
const pool = require('../database/config')

const store = async (payload) => {
    console.log(payload.Nombre, payload.Grado);
    const data = [payload.ID_Grupo, payload.Nombre, payload.Grado]
    const con = await pool.getConnection();
    try {
        con.query("INSERT INTO grupo(ID_Grupo,Nombre, Grado) VALUES (?,?,?)", data);
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