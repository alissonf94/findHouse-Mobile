const ImmobileService = require('../services/ImmobileService');



async function createImmbileController(req, res, next) {
    try {
        const result = await ImmobileService.createImmobileService(req.body)
        res.status(201).json(result)
    }
    catch (error) {
        next(error)
    }
}


async function findAllImmobilesController(req, res, next) {
    try {
        const result = await ImmobileService.findAllImmobilesService()
        res.status(201).json(result)
    } 
    catch (error) {
        next(error)
    }
}

module.exports = {
    createImmbileController,
    findAllImmobilesController
}