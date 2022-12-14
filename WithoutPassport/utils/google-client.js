const googleAPI = require('googleapis')

const oauth2Client = new googleAPI.Auth.OAuth2Client({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: 'http://localhost:3000/api/google/callback'
})


module.exports = oauth2Client