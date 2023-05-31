// import and set up
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const sql = require('./DB/DB');
const port = 2023;
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//routing 
app.get('/', (req,res)=>{
    //res.send("Hi Day 8!!");
    res.sendFile(path.join(__dirname, "views/index.html"))
});

app.get('/formHandler', (req,res)=>{
    //res.send(req.query);
    // validate info exists

    // pull info
    const NewSignUp = {
        email: req.query.UserEmail, 
        name: req.query.UserName
    };
    // run insert query
    const Q1 = "INSERT INTO SignUps SET ?";
    sql.query(Q1, NewSignUp, (err, mysqlres)=>{
        if (err) {
            console.log(err);
            res.send("something went wrong");    
            return;
        }
        res.send("thank you!");
        return;
    });
});

// set up listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
});
