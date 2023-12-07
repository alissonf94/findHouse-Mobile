'use strict'
const express = require("express")
const ImmobileRouter = express.Router()

const ImmobileController = require('../controllers/ImmobileController')

ImmobileRouter.route("/create/immobile").post((req, res, next) => ImmobileController.createImmbileController(req, res, next))

ImmobileRouter.route("/immobiles").get((req, res, next) => ImmobileController.findAllImmobilesController(req, res, next))

module.exports = ImmobileRouter