const cors = require('cors')
const express = require('express')
const authRouter = require('./authRouter')

require('dotenv').config()

const app = express()

app
    .use(cors())
    .use(express.urlencoded({ extended: true }))
    .use(express.json({ limit: process.env.BODY_SIZE }))
    app.use("/auth", authRouter)

    // ROUTES
    .get('/', (_, res) => res.send('<h1>HELLO FROM EXPRESS 👋</h1>'))

module.exports = app