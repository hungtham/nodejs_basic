// const express = require('express');
//const path = require('path');
// import configViewEngine from './config/viewEngine.js';
// import initWebRoute from './route/web.js'
import express from "express";
import initWebRoute from './route/web.js';
import configViewEngine from './config/viewEngine.js';
// import connection from './config/connectDB.js'


const app = express();
const port = process.env.PORT || 8080;

//setup viewengine
configViewEngine(app);

//initweb route
initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})