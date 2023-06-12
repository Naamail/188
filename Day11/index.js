const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = 2023;
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
