/* 
    TODO: Logout User & Delete Cookie (JWT Token) (from single device)
*/

require('dotenv').config()
require('./db/connect')
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const cookieParser = require('cookie-parser')
const custom = require('./routers/registration')
const app = express()

//* static files
const staticPath = path.join(__dirname, '../public')
app.use(express.static(staticPath))

//* tempate engine
const templatePath = path.join(__dirname, '../template/views')
const partialsPath = path.join(__dirname, '../template/partials')
app.set('view engine', 'hbs')
app.set('views', templatePath)
hbs.registerPartials(partialsPath)

//* middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended : true }))
app.use(custom);

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`http://127.0.0.1:${port}`))