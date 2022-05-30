import express from 'express';

//const path = require('path');
import configViewEngine from './config/viewEngine.js';

const app = express()
const port = 8080;

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get('/about', (req, res) => {
    res.send('Hello Express2!');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})