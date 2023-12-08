'use strict'
const express = require("express")
const UserRouter = express.Router()

const UserController = require("../controllers/UserControler")

UserRouter.route("/register").post((req, res, next) => UserController.createUserController(req, res, next))
UserRouter.route("/profile/update").put((req, res, next) => UserController.updateUserController(req, res, next))
UserRouter.route("/user").get((req, res, next) => UserController.findByIdController(req, res, next))
UserRouter.route("/user/interest").get((req, res, next) => UserController.findByUserInterestController(req, res, next))
UserRouter.route("/user/interest/:idImmobile").put((req, res, next) => UserController.addInterestController(req, res, next))
UserRouter.route("/user/favorites/:idImmobile").put((req, res, next) => UserController.addFavoritesController(req, res, next))
UserRouter.route("/user/favorites").get((req, res, next) => UserController.findByUserFavoritesController(req, res, next))
UserRouter.route("/user/favorites/:idImmobile").delete((req, res, next) => UserController.deleteImmobileFavoriteService(req, res, next))
module.exports = UserRouter