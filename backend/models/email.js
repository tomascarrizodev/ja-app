const mongoose = require('mongoose')
const { randomUUID } = require('crypto')

const ID = mongoose.Schema.Types.ObjectId

const emailSchema = new mongoose.Schema({
  "email_id": {
    type: 'UUID',
    default: () => randomUUID()
  },
  "user_id": {
    type: 'UUID',
    ref: 'User'
  },
  "email_registered": {
    type: String,
    ref: 'User'
  },
  "email_contact": String,
  "private": Boolean
})

emailSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Email', emailSchema)