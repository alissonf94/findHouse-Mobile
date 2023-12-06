const UserService = require("../services/UserService")

async function createUserController(req, res, next){
    try {
        const result =  await UserService.createUserService(req.body)

        res.status(201).json(result)
    } 
    catch (error) {
        next(error)
    }
}

async function updateUserController (req, res, next){
    try {
        const {name, email, password, imageProfile} = req.body
        const id = req.userId
        const result = await UserService.updateUserService(id, {name, email, password, imageProfile})

        res.status(201).json(result)
    } 
    catch (error){
        next(error)
    }
}

async function findByIdController(req, res, next){
    try {
        const id = req.userId
        const result =  await UserService.findByIdUserService(id)

        res.status(200).json(result)
    } 
    catch (error) {
        next(error)
    }
}
module.exports = {
    createUserController,
    updateUserController,
    findByIdController
}