const InterestModel = require("../models/InterestModel")

async function createInterest(name, email, phone, immobile){
    return await InterestModel.create(
        {
            name: name,
            email: email,
            phone: phone,
            immobile: immobile
        }
    )
}

module.exports = {createInterest}