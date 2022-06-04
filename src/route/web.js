// const express = require('express');
import express from "express";
import getMethod from '../controller/homeController.js';
import multer from 'multer';



let router = express.Router();

const initWebRoute = (app) => {
    //app.METHOD(PATH, HANDLER)
    //Method: https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods

    router.get('/', getMethod.getHomepage);
    router.get('/detail/user/:id', getMethod.getDetailPage);//after : is declare variable name, and return value when go to link
    // localhost//detail/2/hieu   => id : 2, name: hieu( through req.params)
    router.post('/create-new-user', getMethod.createNewUser);
    router.post('/delete-user', getMethod.deleteUser);
    router.get('/edit-user/:id', getMethod.getEditPage);
    router.post('/update-user', getMethod.postUpdateUser);

    router.get('/upload-file', getMethod.uploadFilePage);
    router.post('/upload-profile-pic', getMethod.handleUploadFile.upload.single('profile_pic'), getMethod.handleUploadFile);


    router.get('/about', (req, res) => {
        res.send('Hello Express2!');
    })

    return app.use('/', router);
}

export default initWebRoute;