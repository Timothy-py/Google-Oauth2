const express = require('express')

// const routes = require('./routes/api')

const app = express()

app.use(express.json())
// app.use('/api/auth', routes)

app.get('/index', (req, res)=>{
    return res.status(200).send('Authentication Service with Google Oauth2')
})

app.listen('3000', ()=>{
    console.log('App is listening on PORT:3000')
})

module.exports = app;