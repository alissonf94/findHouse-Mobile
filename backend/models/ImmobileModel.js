const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImmbileSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    agent: { type: String, required: true },
    city: { type: String, required: true },
    imageProfile: {type: String, required: true},
    images: [{type: String, required: true}]
});

module.exports = mongoose.model("ImmobileModel", ImmbileSchema);