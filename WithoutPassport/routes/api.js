const router = require('express').Router();

const googleClient = require('../utils/google-client');

const {
    getUserProfile,
    authenticateUser
} = require('../controllers/controller')

router.get('/index', (req, res)=>{
    return res.status(200).send('Authentication Service with Google Oauth2 without Passportjs')
})

router.get('/google', (req, res)=>{
    const scopes = [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ]

    const oauthscreenurl = googleClient.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: scopes
    })
    res.redirect(oauthscreenurl)
})

router.get('/google/callback', getUserProfile)

router.get('/authenticate', authenticateUser)

module.exports = router;

