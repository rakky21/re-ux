const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8080;

//  HTTP request logger
app.use(morgan("tiny"));


app.get('/api', (req, res) => {
    const data = {
        username: 'primera',
        age: 5
    };
    res.json(data)
});

app.get('/api/name', (req, res) => {
    const data = {
        username: 'persona',
        age: 5
    };
    res.json(data)
});

app.listen( PORT, console.log(`server is starting ${PORT}`))