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

async function addInterestController(req, res, next){
    try{
        const {name, email, phone} = req.body
        const idImmobile = req.params.idImmobile
        const idUser = req.userId

        const result = await UserService.addInterestService(idImmobile, name, email, phone, idUser)

        res.status(201).json(result)
    }
    catch(error){
        next(error)
    }
}

async function findByUserInterestController (req, res, next){
    try {
        const idUser = req.userId
        const result = await UserService.findInterestUserService(idUser)
        res.status(200).json(result)
    } 
    catch (error) {
        next(error)
    }
}

async function addFavoritesController(req, res, next){
    try{
        const idUser = req.userId
        const idImmobile = req.params.idImmobile
        const result = await UserService.addFavoritesService(idImmobile, idUser)

        res.status(201).json(result)
    }
    catch(error){
        next(error)
    }
}
async function findByUserFavoritesController(req, res, next){
    try{
        const idUser = req.userId
        const result = await UserService.findFavoritesUserService(idUser)

        res.status(201).json(result)
    }
    catch(error){
        next(error)
    }
}

async function deleteImmobileFavoriteService(req, res,next) {
    try {
        const idUser = req.userId
        const idImmobile = req.params.idImmobile
        const result = await UserService.deleteImmobileFavoriteService(idImmobile, idUser)

        res.status(201).json(result)
    } 
    catch (error) {
        next(error)
    }
}
module.exports = {
    createUserController,
    updateUserController,
    findByIdController,
    addInterestController,
    addFavoritesController,
    findByUserInterestController,
    findByUserFavoritesController,
    deleteImmobileFavoriteService
}