'use strict'
const express = require("express")
const UserRouter = express.Router()

const UserController = require("../controllers/UserControler")

UserRouter.route("/register").post((req, res, next) => UserController.createUserController(req, res, next))
UserRouter.route("/profile/update").put((req, res, next) => UserController.updateUserController(req, res, next))
UserRouter.route("/user").get((req, res, next) => UserController.findByIdController(req, res, next))
UserRouter.route('/favorite/add/:id').post((req, res, next) => UserController.addFavoriteImovel(req, res, next));
UserRouter.route('/favorite/remove/:id').delete((req, res, next) => UserController.removeFavoriteImovel(req, res, next));

module.exports = UserRouter