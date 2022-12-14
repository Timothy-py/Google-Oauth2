const url_parser = require('url')
const axios = require('axios')

const googleClient = require('../utils/google-client')

exports.getUserProfile = async (req, res)=> {
    try {
        const url = req.url
        const parse = url_parser.parse(url, true)
        const code = parse.query.code

        const { tokens } = await googleClient.getToken(code)

        const GOOGLE_API_URL = `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`

        const googleUser = await axios.get(GOOGLE_API_URL, {
            headers: {
                Authorization: `Bearer ${tokens.id_token}`
            }
        })

        console.log(googleUser.data)
        return res.redirect('/api/authenticate')
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'An error occured',
            error: error.message
        })
    }
}


exports.authenticateUser = async (req, res)=> {
    // implement functionality to sigin or signup user and send JWT
    res.status(200).send('User authenticated')
}