// import and set up
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const sql = require('./db/DB');
const CRUD = require('./db/CRUD')
const cookie = require('cookie-parser');
const port = 2023;
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookie());
app.set('views',path.join(__dirname, "views"));
app.set('view engine', 'pug');

//routing 
app.get('/', (req,res)=>{
    //var userA = req.cookies.SignedUser;
    //res.sendFile(path.join(__dirname, "views/signUp.html"))    
    res.render('index');
});

app.post('/signUpForm', (req,res)=>{
    res.cookie('SignedUser', req.body.signUpName);
    //res.sendFile(path.join(__dirname, "views/logIn.html"))
    res.redirect('/login');
});

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/logIn.html"))
});

app.post('/logInForm', (req,res)=>{
    var userLI = req.body.logInName;
    var userSU = req.cookies.SignedUser;
    //console.log(userLI);
    //console.log(userSU);
    if (userLI == userSU) {
        res.redirect('/home');    
    } else {
        res.redirect('/login');
    }
    
});

app.get('/home', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/logOut.html'))
});

app.get('/signOut', (req,res)=>{
    res.clearCookie('SignedUser');
    res.redirect('/');
});


app.get('/selectAll', CRUD.selectAllUsers)

// set up listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
});
