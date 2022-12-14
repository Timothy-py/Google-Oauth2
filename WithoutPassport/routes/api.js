const router = require('express').Router();

router.get('/index', (req, res)=>{
    return res.status(200).send('Authentication Service with Google Oauth2 without Passportjs')
})

module.exports = router;