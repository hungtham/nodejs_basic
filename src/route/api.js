
import express from "express";
import APIMethod from '../controller/APIController.js'
let router = express.Router();

const initAPIRoute = (app) => {
    //resfull api standart
    router.get('/users', APIMethod.getAllUsersAPI);//method get: read data
    router.post('/create-user', APIMethod.createNewUserAPI);//method post: create data
    router.put('/update-user/', APIMethod.updateUserAPI);//method put : update data
    router.delete('/delete-user/:id', APIMethod.deleteUserAPI);//method delete: delete data

    return app.use('/api/v1/', router);
}

export default initAPIRoute;
