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