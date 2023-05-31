// import and init
const express = require('express');
const app = express();
const path = require('path');
const port = 2020;
app.use(express.static(path.join(__dirname, "static")))

// routing 
app.get('/', (req,res)=> {
    console.log('THIS IS THE BODY:     ', req.query);
    res.send("hi express");
});

app.get('/page2', (req,res)=>{
    console.log('THIS IS THE BODY:     ', req.params);
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get('/page3', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/page3.html"))
});

app.get('/page4', (req,res)=>{
    // print request query:
    console.log('THIS IS THE BODY:     ', req.query);
    res.sendFile(path.join(__dirname, "views/page4.html"))
});

app.get('/formHandler', (req, res)=>{
    var x = req.query;
    //res.send(x);
    res.send("Thank You!");
});

// set up listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
});
