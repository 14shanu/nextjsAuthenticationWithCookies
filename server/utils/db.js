const Pool = require('pg').Pool

const pool =new Pool({
    user:process.env.DBUSER,
    host:process.env.DBHOST,
    database:process.env.DBDATABASE,
    password:process.env.DBPASSWORD,
    port:process.env.DBPORT,

})

module.exports =pool