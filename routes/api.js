const router = require('express').Router();

const {
    loginSuccess
} = require('../controllers/controller')

router.get('/index', (req, res)=>{
    return res.status(200).send('Authentication Service with Google Oauth2')
})

router.get('/login/success', loginSuccess)


module.exports = router;