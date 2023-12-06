const ImovelModel = require('../services/ImovelService');


    // Criação da house.
     async function createImovelService(req, res, next){
        try {
            const result =  await ImovelService.createImovelService(req.body)
            res.status(201).json(result)
        } 
        catch (error) {
            next(error)
        }
    }

    // Pegando houses
    async function getImovels(req, res, next){
        try{
            const result = await ImovelService.getImovels(req.body)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }

    // Pegando uma house especifica.
    async function getImovel(req, res, next){
        
        const ImovelId = req.params.id;

        try{
            const result = await ImovelService.getImovel(ImovelId)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }

    // Atualizar dados de alguma house.
    async function updateImovel (req, res, next){
        
        const ImovelId = req.params.id;
        const updatedFields = req.body;
        
        try {
            const result = await ImovelService.updateImovel(ImovelId, updatedFields);
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }

    module.exports = {
        createImovelService, getImovels, updateImovel, getImovel
    }
