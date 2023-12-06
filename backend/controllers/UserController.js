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

async function addFavoriteImovel(req, res, next) {
    try {
        const userId = req.userId;
        const imovelId = req.params.id;

        const result = await UserService.addImovelToFavorites(userId, imovelId);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

async function removeFavoriteImovel(req, res, next) {
    try {
        const userId = req.userId;
        const imovelId = req.params.id; 

        const result = await UserService.removeImovelFromFavorites(userId, imovelId);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

async function addMeetingController(req, res, next) {
    try {
        const userId = req.userId;
        const { imovelId, scheduledTime } = req.body;

        const result = await UserService.addMeeting(userId, imovelId, scheduledTime);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

async function removeMeetingController(req, res, next) {
    try {
        const userId = req.userId;
        const meetingId = req.params.id;

        const result = await UserService.removeMeeting(userId, meetingId);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createUserController,
    updateUserController,
    findByIdController,
    addFavoriteImovel,
    removeFavoriteImovel,
    addMeetingController,
    removeMeetingController
}