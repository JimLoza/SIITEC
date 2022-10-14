const express = require('express');
const cors = require('cors');

const {  } = require('../database/config')
class Server {

    constructor(){
        this.app = express()
        this.port= process.env.PORT;
        this.carreraPath = '/api/carrera'
        this.materiaPath = '/api/materia'
        this.grupoPath = '/api/grupo'
        this.horarioPath = '/api/horario'
        
        //Middlewares
        this.middlewares();
        //Routes
        this.routes();
    }


    middlewares(){
        //cors
        this.app.use( cors() );

        //Parseo del body
        this.app.use( express.json() );
    
        //Directorio publico
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use( this.carreraPath, require('../routes/carrera.routes') )
        this.app.use( this.materiaPath, require('../routes/materia.routes') )
        this.app.use( this.grupoPath, require('../routes/grupo.routes') )
        this.app.use( this.horarioPath, require('../routes/horario.routes') )
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        } );
    }

}


module.exports = Server;