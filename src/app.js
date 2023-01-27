const cors = require('cors')
const express = require('express')
const authRouter = require('./authRouter')

require('dotenv').config()

const app = express()

app
    .use(express.urlencoded({ extended: true }))
    .use(express.json({ limit: process.env.BODY_SIZE }))
    .use(cors())

    .use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
    })

    .use("/auth", authRouter)

module.exports = app