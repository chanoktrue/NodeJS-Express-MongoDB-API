const jwt = require('jsonwebtoken')

exports.auth = async (req, res, next) => { 
    try {
        const token = req.headers['authtoken']

        if (!token) {
            return res.status(401).send('Invalid auth token.')
        }

        const decoded = jwt.verify(token, 'jwtsecret')
        console.log(decoded.user)
        

        next()
    }catch (err) {
        res.status(400).send('auth error')
    }
}