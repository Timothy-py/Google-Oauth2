const router = require('express').Router();

// const {} = require('../controllers')

router.get('/index', (req, res)=>{
    return res.status(200).send('Authentication Service with Google Oauth2')
})


module.exports = router;