const SQL = require('./db');


const createTable = (req,res)=>{
    const Q1 = 'CREATE TABLE IF NOT EXISTS `customersAAA` (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, email varchar(255) NOT NULL, name varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8';    
    SQL.connection.query(Q1, (err,mysqlres)=>{
        console.log("in query");
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.send("hi");
        return;
    })};

module.exports = {createTable};

