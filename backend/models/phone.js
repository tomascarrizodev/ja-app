const mongoose = require('mongoose')
const { randomUUID } = require('crypto')

const ID = mongoose.Schema.Types.ObjectId

const phoneSchema = new mongoose.Schema({
  "phone_id": {
    type: 'UUID',
    default: () => randomUUID()
  },
  "user_id": {
    type: 'UUID',
    ref: 'User'
  },
  "contact_id": {
    type: 'UUID',
    ref: 'Contact'
  },
  "country": {
    type: String,
    ref: 'User'
  },
  "phone_code": Number,
  "phone_number": Number,
  "private": Boolean
})

phoneSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Phone', phoneSchema)