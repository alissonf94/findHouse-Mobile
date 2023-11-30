const UserService = require("../services/ClientService")

async function createUserController(req, res, next){
    try {
        const result =  await UserService.createUserService(req.body)

        res.status(201).json(result)
    } 
    catch (error) {
        next(error)
    }
}

module.exports = {
    createUserController
}