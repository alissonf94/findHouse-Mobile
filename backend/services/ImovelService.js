const ImovelModel = require("../models/ImovelModel");
const AppError = require("..");

async function createImovelService({code, name, description, price, agent, city }) {
    if (!name || !description || !price || !agent || !city) {
        throw new AppError("all fields for create", 400);
    }

    const Imovel = await ImovelModel.create({
        name: name,
        description: description,
        price: price,
        agent: agent,
        city: city,
    });
    return Imovel;
}

function getImovels() { 
    
    Imovels = ImovelModel.find({});
    return Imovels
}

async function getImovelById(ImovelId) {
    
    Imovel = await ImovelModel.findById(ImovelId)
    return Imovel
}


async function updateImovel(ImovelId, updatedFields) {
    
    const result = await ImovelModel.updateOne({ _id: ImovelId}, updatedFields);
    return result;
}
    

module.exports = {
    createImovelService,
    getImovels,
    updateImovel,
    getImovelById
};
