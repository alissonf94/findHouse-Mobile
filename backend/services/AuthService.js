const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const AppError = require("../erros/AppError")
const UserModel = require("../models/UserModel")

async function loginService(email, password){
    const user = await UserModel.findOne({email: email})

    if(!user)
        throw new AppError("Registration or passord incorrect", 403)

    valididyPassword(password, user.password)
    
    const userLogin = {
        id: user._id,
        email: user.email
    }

    const secret = process.env.SECRET
    const token = jwt.sign({studentLogin: userLogin}, secret, {expiresIn: 86400})

    return token
}

function valididyPassword (passordLogin, passwordUser){
    const verifyPassword = bcrypt.compareSync(passordLogin, passwordUser)

    if(!verifyPassword)
        throw new AppError("Registration or passord incorrect", 403)
}


module.exports = {
    loginService
}