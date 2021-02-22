const express = require('express')
const morgan = require("morgan")
const path = require('path')
// Routes
const adRoutes = require('./routes/ad')

const app = express()
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

const keys = require('./config')

app.use(express.static('public'))

app.use(morgan('combined'))

// Маршруты
app.use('/', adRoutes)

module.exports = app