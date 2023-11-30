'use strict'
const express = require("express")
const UserRouter = express.Router()

const UserController = require("../controllers/UserControler")

UserRouter.route("/register").post((req, res, next) => UserController.createUserController(req, res, next))

module.exports = UserRouter