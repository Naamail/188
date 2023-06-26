const SQL = require('./db');
const csv = require('csvtojson');
const path = require('path');


const createTable = (req,res)=>{
    const Q1 = 'CREATE TABLE IF NOT EXISTS `TableA` (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, email varchar(255) NOT NULL, name varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8';    
    SQL.query(Q1, (err,mysqlres)=>{
        //console.log("in query");
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.send("hi - table created");
        return;
    })};

const insertData = (req,res)=>{
    const csvPath = path.join(__dirname, "data.csv");
    /// this is new
    csv().fromFile(csvPath).then((jsonObj)=>{
        console.log(jsonObj);
        for (let i = 0; i < jsonObj.length; i++) {
            const element = jsonObj[i];
            console.log(element);
            const NewCsvData = {
                name: element.name,
                email: element.email
            }; 
            const Q4 = "insert into TableA set ?";
            SQL.query(Q4, NewCsvData, (err, mysqlres)=>{
            if (err) {
                throw err
            }
            //res.send('Data inserted into table');
            });}
        
        });
    res.send("Sababa");
    };

    
const dropTable = (req,res)=>{
    const Q2 = 'drop TABLE `TableA`;';    
    SQL.query(Q2, (err,mysqlres)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.send("hi - table dropped");
        return;
    })};

module.exports = {createTable, dropTable, insertData};

