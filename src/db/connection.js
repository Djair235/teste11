const mysql2 = require("mysql2/promise")

const connection = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "13588317",
    database: "api"
})
module.exports = connection
