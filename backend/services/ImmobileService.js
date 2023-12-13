const ImmobileModel = require("../models/ImmobileModel");
const AppError = require("../erros/AppError");

async function createImmobileService({name, description, price, agent, city, imageProfile, images}) {
    if (!name || !description || !price || !agent || !city) {
        throw new AppError("all fields for create", 400);
    }

    const imobbile = await ImmobileModel.create({
        name: name,
        description: description,
        price: price,
        agent: agent,
        city: city,
        imageProfile: imageProfile,
        images: images
    });
    
    return imobbile;
}

async function findAllImmobilesService() { 
    const Immobiles = await  ImmobileModel.find({});
    return Immobiles
}

async function  fidnByIdImmobilesService(id){
    const immobile = await ImmobileModel.findById(id)

    if(!immobile){
        throw new AppError("Not found", 404)
    }

    return immobile
}


module.exports = {
    createImmobileService,
    findAllImmobilesService,
    fidnByIdImmobilesService
};