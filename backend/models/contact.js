const mongoose = require('mongoose')
const { randomUUID } = require('crypto')

const ID = mongoose.Schema.Types.ObjectId

const contactSchema = new mongoose.Schema({
  "contact_id": {
    type: 'UUID',
    default: () => randomUUID()
  },
  "user_id": {
    type: 'UUID',
    ref: 'User'
  },
  "email_id": {
    type: 'UUID',
    ref: 'Email'
  },
  "phone_id": {
    type: 'UUID',
    ref: 'Phone'
  },
  "social_net_id": {
    type: 'UUID',
    ref: 'SocialNet'
  }
})

contactSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Contact', contactSchema)