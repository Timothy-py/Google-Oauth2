require('dotenv').config()
const express = require('express')
const passport = require('passport')
const expressSession = require('express-session')
const MemoryStore = require('memorystore')(expressSession)
const passportSetup = require('./utils/passport')

const routes = require('./routes/api')


const app = express()

app.use(expressSession({
    secret: [process.env.SECRET_1, process.env.SECRET_2],
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 86400000},
    store: new MemoryStore({
        checkPeriod: 86400000
    })
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())

app.use('/api', routes)


app.listen('3000', ()=>{
    console.log('App is listening on PORT:3000')
})

module.exports = app;