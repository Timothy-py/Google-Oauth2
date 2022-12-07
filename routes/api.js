const router = require('express').Router();

const {
    loginSuccess,
    loginFailed
} = require('../controllers/controller')

router.get('/index', (req, res)=>{
    return res.status(200).send('Authentication Service with Google Oauth2')
})

router.get('/login/success', loginSuccess)
router.get('/login/failed', loginFailed)


module.exports = router;