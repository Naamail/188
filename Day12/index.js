const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const createDB = require('./DB/CreateDB_CRUD');
const sql = require("./DB/db")
const port = 2023;
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('views',path.join(__dirname, "views"));
app.set('view engine', 'pug');

app.get('/', (req,res)=>{
    res.send("hi");
});


//// here you create the DB
app.get('/createTable', createDB.createTable);
app.get('/insertData', createDB.insertData);
app.get('/dropTable', createDB.dropTable);

app.listen(port, ()=>{
    console.log("server is running", port);
})
