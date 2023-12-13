const UserModel = require("../models/UserModel")
const AppError = require("..")
const bcrypt = require('bcrypt')
const immobileService = require("./ImmobileService")
const InterestService = require("./InterestService")

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
    
    let user;
    if(password === "" && imageProfile=== "")
    {
        user = await UserModel.updateOne(
            {_id: id},
            {
                name: name,
                email: email,
            })
    }
    else if(password===""){
        user = await UserModel.updateOne(
            {_id: id},
            {
                name: name,
                email: email,
                imageProfile: imageProfile,
            })
    }
    else if(imageProfile===""){
        user = await UserModel.updateOne(
            {_id: id},
            {
                name: name,
                email: email,
                password: password
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

async function addInterestService (idImmobile, name, email, phone, idUser){
    const immobile = await immobileService.fidnByIdImmobilesService(idImmobile)
    
    if(!immobile){
        throw new AppError("Not found", 404)
    }
    const user = await UserModel.findById(idUser)

    const interest = await InterestService.createInterest(name, email, phone, immobile)
    
    user.myInterest.push(interest)

    await UserModel.updateOne({_id: idUser},{myInterest: user.myInterest})

    return interest
}
async function addFavoritesService (idImmobile,idUser){
    const immobile = await immobileService.fidnByIdImmobilesService(idImmobile)
    
    if(!immobile){
        throw new AppError("Not found", 404)
    }

    const user = await UserModel.findById(idUser)
 
    const verifyFavorites = await user.myFavorites.filter(immobile => immobile === idImmobile)
    
    if (verifyFavorites.length !== 0) {
        throw new AppError("This immobile is already favorites", 400)
    }
    user.myFavorites.push(immobile)

    await UserModel.updateOne({_id: idUser},{myFavorites: user.myFavorites})

    return user.myFavorites
}

async function findInterestUserService(idUser){
    const user = await UserModel.findOne({_id: idUser}).populate({
        path: "myInterest",
        populate:
            {
                path: "immobile",
                model: "ImmobileModel"
            }
    }).exec()

    return user.myInterest
}

async function findFavoritesUserService(idUser){
    const user = await UserModel.findOne({_id: idUser}).populate({
        path: "myFavorites",
    
    }).exec()

    return user.myFavorites
}
async function deleteImmobileFavoriteService(idImmobile, idUser) {
   
   const immobile = await immobileService.fidnByIdImmobilesService(idImmobile)
   
   if(!immobile){
    throw new AppError("Not found", 404)
   }
   const user = await UserModel.findById(idUser)
   
   user.myFavorites = await removeImmobile(user.myFavorites, immobile._id)

   await UserModel.updateOne({_id: idUser},{myFavorites: user.myFavorites})

   return immobile
}

function removeImmobile(immobiles, idImmobile) {
   for (let i = 0; i < immobiles.length; i++) {

       if (immobiles[i]._id.toHexString() == idImmobile) {
           immobiles.splice(i, 1)
       }
   }
   return immobiles
}

module.exports = {
    createUserService, 
    updateUserService,
    findByIdUserService,
    findInterestUserService,
    findFavoritesUserService,
    addInterestService,
    addFavoritesService,
    deleteImmobileFavoriteService
}