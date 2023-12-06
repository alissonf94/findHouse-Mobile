const UserModel = require("../models/UserModel")
const AppError = require("..")
const bcrypt = require('bcrypt')

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
            imageProfile: ""
        })
    
    return user;
}

async function updateUserService(id, {name, email, password, imageProfile}){
    
    if(!name || !email || !imageProfile){
        throw new AppError("all fields for registration", 400)
    }
    let user;
    if(password === "")
    {
        user = await UserModel.updateOne(
            {_id: id},
            {
                name: name,
                email: email,
                imageProfile: imageProfile,
            })
    }
    else{
        password = await bcrypt.hash(password, 10)
        user = await UserModel.updateOne(
            {_id: id},
            {
                name: name,
                email: email,
                password: password,
                imageProfile: imageProfile,
            })
    }
   
    
    return user
}

async function findByIdUserService (id){
    const user = await UserModel.findById(id)

    if(!user){
        throw new AppError("Not found", 404)
    }

    return user
}
module.exports = {
    createUserService, 
    updateUserService,
    findByIdUserService
}