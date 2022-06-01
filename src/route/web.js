// const express = require('express');
import express from "express";
import getHomePage from '../controller/homeController.js';

let router = express.Router();

const initWebRoute = (app) => {
    //app.METHOD(PATH, HANDLER)
    //Method: https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods

    router.get('/', getHomePage);
    router.get('/about', (req, res) => {
        res.send('Hello Express2!');
    })

    return app.use('/', router);
}

export default initWebRoute;