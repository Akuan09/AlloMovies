const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "am_db_host",
    user: "movies_db",
    password: "am_pw" ,
    database : "movies_db"
});   

module.exports = db;