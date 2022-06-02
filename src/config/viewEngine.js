//view engine: help use logic in html file,
//https://expressjs.com/en/resources/template-engines.html
// most use: ejs, express-handlebars,same with php(lavarel)-blade, java( jsp)


import express from "express";
//const express = require('express');

const configViewEngine = (app) => {
    app.use(express.static('./src/public'));
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
}

export default configViewEngine;