const mongoose = require('mongoose')
const { randomUUID } = require('crypto')

const ID = mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema({
  "user_id": {
    type: 'UUID',
    default: () => randomUUID()
  },
  "username": {
    type: String,
    required: true,
    unique: true
  },
  "email_registered": {
    type: String,
    required: true,
    unique: true
  },
  "firstname": {
    type: String,
    required: true
  },
  "lastname": {
    type: String,
    required: true
  },
  "password": {
    type: String,
    required: true
  },
  "password_salt": {
    type: String,
    required: true
  },
  "country": String,
  "address_id": {
    type: ID,
    ref: 'Address'
  },
  "contact_id": {
    type: ID,
    ref: 'Contact'
  },
  "education_id": {
    type: ID,
    ref: 'Education'
  },
  "experience_id": {
    typr: ID,
    ref: 'Experience'
  },
  "profile_id": {
    type: ID,
    ref: 'Profile'
  },
  "settings_id": {
    type: ID,
    ref: 'Settings'
  }
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('User', userSchema)