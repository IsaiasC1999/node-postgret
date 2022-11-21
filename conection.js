const {Pool} = require('pg')



const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port:5432,
    password: "isa1999",
    database: 'Pruebas-Isaias'
})

module.exports = {pool}