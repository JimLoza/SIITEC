const responseService = (succes, statusCode, data, message) => {
    return {
        
        succes,
        statusCode,
        data,
        message
    }
}

const responseErrorService = () => {
    return {
        succes: false,
        statusCode: 500,
        data: null,
        message: 'Problema con el servidor'
    };
}

module.exports = {
    responseService,
    responseErrorService
}