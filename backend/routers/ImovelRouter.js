'use strict'
const express = require("express")
const ImovelRouter = express.Router()

const ImovelController = require('../controllers/ImovelController')

ImovelRouter.route("/create/imovel").post((req, res, next) => ImovelController.createImovelController(req, res, next))
ImovelRouter.route("/get/imovel/:id").get((req, res, next) => ImovelController.getImovel(req, res, next))
ImovelRouter.route("/get/imoveis").get((req, res, next) => ImovelController.getImovels(req, res, next))
ImovelRouter.route("/update/imovel/:id").put((req, res, next) => ImovelController.updateImovel(req, res, next))



module.exports = ImovelRouter