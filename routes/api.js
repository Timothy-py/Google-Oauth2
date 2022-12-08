const router = require('express').Router();
const passport = require('passport')

const {
    loginSuccess,
    loginFailed,
    profile,
    logout
} = require('../controllers/controller')


router.get('/index', (req, res)=>{
    return res.status(200).send('Authentication Service with Google Oauth2')
})

router.get('/login/success', loginSuccess)
router.get('/login/failed', loginFailed)

router.get('/google', passport.authenticate('google', ['profile', 'email']))

router.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: '/api/profile',
        failureRedirect: '/api/login/failed'
    })
)

router.get('/profile', profile)

router.get('/logout', logout)


module.exports = router;