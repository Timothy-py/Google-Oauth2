const router = require('express').Router();
const url_parser = require('url')
const axios = require('axios')

const googleClient = require('../utils/google-client')

router.get('/index', (req, res)=>{
    return res.status(200).send('Authentication Service with Google Oauth2 without Passportjs')
})

router.get('/google', (req, res)=>{
    const scopes = [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ]

    const generateUrl = googleClient.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: scopes
    })
    res.redirect(generateUrl)
})

router.get('/google/callback', async (req, res)=>{
    const url = req.url
    const parse = url_parser.parse(url, true)
    const code = parse.query.code
    
    // const {tokens} = 
})

module.exports = router;

