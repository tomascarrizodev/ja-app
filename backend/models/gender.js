const mongoose = require('mongoose')
const { randomUUID } = require('crypto')

const genderSchema = new mongoose.Schema({
  "gender_id": {
    type: 'UUID',
    default: () => randomUUID()
  },
  "user_id": {
    type: 'UUID',
    ref: 'User'
  },
  "profile_id": {
    type: 'UUID',
    ref: 'Profile'
  },
  "gender": String,
  "private": Boolean
})

genderSchema.set('toJSON', {
  transform: (document, returnObj) => {
    delete returnObj._id
    delete returnObj.__v
  }
})

module.exports = mongoose.model('Gender', genderSchema)