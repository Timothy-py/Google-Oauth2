const express = require('express')

const routes = require('./routes/api')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use('/api/auth', routes)


app.listen('3000', ()=>{
    console.log('App is listening on PORT:3000')
})

module.exports = app;