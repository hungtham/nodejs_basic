// const express = require('express');
import express from "express";
import getMethod from '../controller/homeController.js';



let router = express.Router();

const initWebRoute = (app) => {
    //app.METHOD(PATH, HANDLER)
    //Method: https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods

    router.get('/', getMethod.getHomepage);
    router.get('/detail/user/:userId', getMethod.getDetailPage);//after : is declare variable name, and return value when go to link
    // localhost//detail/2/hieu   => userID : 2, name: hieu( through req.params)

    router.get('/about', (req, res) => {
        res.send('Hello Express2!');
    })

    return app.use('/', router);
}

export default initWebRoute;