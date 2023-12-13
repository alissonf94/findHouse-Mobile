const AuthService = require("../services/AuthService")

async function loginController (req, res, next){
    
    try{
        const {email, password} = req.body
        const result = await AuthService.loginService(email, password)
        res.status(201).json(result)
        
    }
    catch(error){
        next(error)
    }
}

 
module.exports = {
    loginController
}