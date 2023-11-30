'use strict'
const express = require("express")
const AuthRouter = express.Router()

const AuthController = require('../controllers/AuthController')

AuthRouter.route('/login').post((req, res, next) => AuthController.loginController(req, res, next))

module.exports = AuthRouter