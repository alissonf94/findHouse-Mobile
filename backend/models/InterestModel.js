const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const interestSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        immobile: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ImmobileModel"
        }
    }
)

module.exports = mongoose.model("InterestModel", interestSchema);
