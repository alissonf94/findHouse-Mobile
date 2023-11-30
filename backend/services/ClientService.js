const UserModel = require("../models/UserModel")
const AppError = require("..")

async function createUserService({name, lastname, cpf, email, password}){
    
    if(!name || !lastname || !cpf || !email || !password){
        throw new AppError("all fields for registration'", 400)
    }
    const user = await UserModel.create(
        {
            name: name,
            lastname: lastname,
            cpf: cpf,
            email: email,
            password: password,
        })
    
    return user;
}

module.exports = {
    createUserService
}