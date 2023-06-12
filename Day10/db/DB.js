// import 
const SQL = require('mysql2');
const dbConfig = require('./DB.config');
// create connection
const connection = SQL.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});
// open the connection
connection.connect(error =>{
    if (error) throw error;
    console.log("connected to DB");
    /// create your tables
    /*Create a table named "customers":*/
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });

});

module.exports = connection;