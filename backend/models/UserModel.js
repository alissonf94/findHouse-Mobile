const mongoose = require('mongoose');
const Schema =  mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema(
  {
    name:
    {
      type: String,
      required: true
    },
    cpf:
    {
      type: String,
      required: true
    },
    email:
    {
      type: String,
      required: true
    },
    password:
    {
      type: String,
      required: true
    },
    imageProfile: {
      type: String,
      maxlength: 10000
    },
    myInterest: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'InterestModel'
    }],
    myFavorites: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "ImmobileModel"
    }]
  }
)

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

module.exports = mongoose.model('UserModel', UserSchema);
