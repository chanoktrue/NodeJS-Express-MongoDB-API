const User = require('../Models/Usre')
const Token = require('../Models/Token')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { token } = require('morgan')

exports.register = async (req, res) => {
    try {
        const {userName, password} = req.body

        // 1.CheckUser
        var user = await User.findOne({userName: userName})
        if (user) {
            return res.status(400).send('User already exists.')
        }

        // 2.Encrypt
        const salt = await bcrypt.genSalt(10)
        user = new User({
            userName,
            password
        })
        user.password = await bcrypt.hash(password, salt)
        
        // 3.Save
        user.save()
        res.status(200).send('Register complete.')   
    }catch (err) {
        res.status(400).send('Server error')
    }
}

exports.login = async (req, res) => {
    try {
        const {userName, password} = req.body
        
        // 1.CheckUser        
        var user = await User.findOneAndUpdate({userName}, {new: true})
        if (!user) {
            return res.status(400).send('User not found.')
        }

        // 2.CheckPassword
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).send('Password invalide.')
        }

        // 3. payload
        const payload = {
            userName: {
                userName: user.userName
            }
        }

        // 4.Gererate token 
        jwt.sign(payload, 'jwtsecret', {expiresIn: (60 * 5)}, (err, token) => {
            if (err) throw err
            
            console.log(`UserId: ${user.id}`)
            console.log(`Token: ${token}`)
            // const tokens = Token({userId: id, token: token}).save()


            res.status(200).json({token, payload})
        })  


    }catch (err) {
        res.status(400).send(`Server error ${err}`)
    }    
}

