function AppError (message, statusCode){
    this.message = message
    this.statusCode = statusCode
}

module.exports = AppError