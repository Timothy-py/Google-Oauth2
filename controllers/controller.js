exports.loginSuccess = async (req, res)=> {
    if(!req.user){
        res.status(403).json({
            message: 'Not Authorized'
        })
    }
    return res.status(200).json({
        message: "Logged in successfully",
        user: req.user
    })
}

exports.loginFailed = (req, res) => {
    res.status(401).json({
        message: 'Failed Login'
    })
}

exports.profile = (req, res) => {
    res.status(200).json({
        message: "User profile",
        user: req.user
    })
}

exports.logout = (req, res) => {
    req.logout()
    res.redirect(process.env.CLIENT_URL)
}