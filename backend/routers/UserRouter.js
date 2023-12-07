'use strict'
const express = require("express")
const UserRouter = express.Router()

const UserController = require("../controllers/UserController")

UserRouter.route("/register").post((req, res, next) => UserController.createUserController(req, res, next))
UserRouter.route("/profile/update").put((req, res, next) => UserController.updateUserController(req, res, next))
UserRouter.route("/user").get((req, res, next) => UserController.findByIdController(req, res, next))
UserRouter.route('/favorite/add/:id').post((req, res, next) => UserController.addFavoriteImovel(req, res, next));
UserRouter.route('/favorite/remove/:id').delete((req, res, next) => UserController.removeFavoriteImovel(req, res, next));
UserRouter.route('/favorites').get((req, res, next) => UserController.getFavoritesController(req, res, next));
UserRouter.route('/meeting/add').post((req, res, next) => UserController.addMeetingController(req, res, next));
UserRouter.route('/meeting/remove/:id').delete((req, res, next) => UserController.removeMeetingController(req, res, next));
UserRouter.route('/meetings').get((req, res, next) => UserController.getMeetingsController(req, res, next));

module.exports = UserRouter