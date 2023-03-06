const express = require("express");
const router = require('../router')
require("dotenv").config();

const app = express();


app.get('/hello', (req, res, next) => {
    return res.send('hello world')
})

app.use(router);

app.listen(process.env.PORT, () => {
    console.table('server run on localhost.')
})