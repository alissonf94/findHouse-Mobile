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


async function addImovelToFavorites(userId, imovelId) {
    try {
        const user = await UserModel.findById(userId);

        if (!user) {
            throw new AppError('User not found', 404);
        }

        if (!user.favorites.includes(imovelId)) {
            user.favorites.push(imovelId);
            await user.save();
        }

        return user;
    } catch (error) {
        throw new AppError(error.message, 500);
    }
}


async function removeImovelFromFavorites(userId, imovelId) {
    try {
        const user = await UserModel.findById(userId);

        if (!user) {
            throw new AppError('User not found', 404);
        }

        const index = user.favorites.indexOf(imovelId);
        if (index > -1) {
            user.favorites.splice(index, 1);
            await user.save();
        }

        return user;
    } catch (error) {
        throw new AppError(error.message, 500);
    }
}

async function addMeeting(userId, imovelId, scheduledTime) {
    try {
        const user = await UserModel.findById(userId);

        if (!user) {
            throw new AppError('User not found', 404);
        }

        user.meetings.push({
            imovelId: imovelId,
            scheduledTime: scheduledTime
        });

        await user.save();
        return user;
    } catch (error) {
        throw new AppError(error.message, 500);
    }
}

async function removeMeeting(userId, meetingId) {
    try {
        const user = await UserModel.findById(userId);

        if (!user) {
            throw new AppError('User not found', 404);
        }

        const meetingIndex = user.meetings.findIndex(meeting => meeting._id.toString() === meetingId);
        if (meetingIndex !== -1) {
            user.meetings.splice(meetingIndex, 1);
            await user.save();
        } else {
            throw new AppError('Meeting not found', 404);
        }

        return user;
    } catch (error) {
        throw new AppError(error.message, 500);
    }
}

module.exports = {
    createUserService, 
    updateUserService,
    findByIdUserService,
    addImovelToFavorites,
    removeImovelFromFavorites,
    addMeeting,
    removeMeeting
}