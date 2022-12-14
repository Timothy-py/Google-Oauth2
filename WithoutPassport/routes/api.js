const router = require('express').Router();
const oauth2Client = require('../utils/google-client')

router.get('/index', (req, res)=>{
    return res.status(200).send('Authentication Service with Google Oauth2 without Passportjs')
})

router.get('/google', (req, res)=>{
    const scopes = [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ]

    return 
})

module.exports = router;