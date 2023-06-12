const mysql = require('mysql2');
const SQL = require('./db');

module.exports = (req,res)=>{
    const Q1 = "CREATE TABLE usersAA (name VARCHAR(255),password VARCHAR(255))";
    SQL.query(Q1, (err, mysqlres)=>{
        if (err) {
            console.log(err);
            res.send(err);
            return;
        }
        
        console.log("table created");
        res.send('table created');
        return;        
    }) 
};

