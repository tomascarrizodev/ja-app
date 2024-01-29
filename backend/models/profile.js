const mongoose = require('mongoose')
const { randomUUID } = require('crypto')

const ID = mongoose.Schema.Types.ObjectId

const profileSchema = new mongoose.Schema({
  "user_id": {
    type: 'UUID',
    ref: 'User'
  },
  "profile_id": {
    type: 'UUID',
    default: () => randomUUID()
  },
  "presentation": String,
  "firstname": String,
  "lastname": String,
  "birthdate": Date,
  "lenguages": [String],
  "gender_id": {
    type: 'UUID',
    ref: 'Gender'
  }
})

profileSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Profile', profileSchema)