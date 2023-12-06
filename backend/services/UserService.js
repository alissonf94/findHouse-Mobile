const UserModel = require("../models/UserModel")
const AppError = require("..")

async function createUserService({name, cpf, email, password}){
    
    if(!name || !cpf || !email || !password){
        throw new AppError("all fields for registration'", 400)
    }
    const user = await UserModel.create(
        {
            name: name,
            cpf: cpf,
            email: email,
            password: password,
        })
    
    return user;
}

module.exports = {
    createUserService
}