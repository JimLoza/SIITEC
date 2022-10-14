const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: process.env.HOST,
    port: process.env.PORTDB,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE
});
console.log('Base de datos conectada');
module.exports = pool;