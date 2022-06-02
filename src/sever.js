// const express = require('express');
//const path = require('path');
import express from "express";
import configViewEngine from './config/viewEngine.js';
import initWebRoute from './route/web.js';

// import connection from './config/connectDB.js'


const app = express();
const port = process.env.PORT || 8080;

//middleware: config express suport send data to sever, to get data easily
// https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//setup viewengine
configViewEngine(app);

//initweb route
initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})