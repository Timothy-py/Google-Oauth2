const googleClient = require('../utils/google-client')

module.exports = (req, res, next) => {
    const scopes = [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ]

    const generateUrl = googleClient.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: scopes
    })
    if(generateUrl){
        return generateUrl
    }
    
    next()
}