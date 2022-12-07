require('dotenv').config()
const express = require('express')
const passport = require('passport')
const passportSetup = require('./utils/passport')

const routes = require('./routes/api')


const app = express()

app.use(passport.initialize())
app.use(express.json())
app.use('/api', routes)


app.listen('3000', ()=>{
    console.log('App is listening on PORT:3000')
})

module.exports = app;