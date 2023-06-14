const mysql = require('mysql2');
const config = require('./db.config');

const connection = mysql.createConnection({
    host: config.HOST,
    database: config.DB,
    password: config.PASSWORD,
    user: config.USER
});

connection.connect(error=>{
    if (error) throw error;
    console.log("=== 1 =====");
    console.log("connection: " , connection);
    console.log("=== 1 =====");
});
    
module.exports = connection;