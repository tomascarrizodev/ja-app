const mongoose = require('mongoose')
const { randomUUID } = require('crypto')

const ID = mongoose.Schema.Types.ObjectId

const socialNetsSchema = new mongoose.Schema({
  "social_nets_id": {
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
  "social_net": [socialNetSchema]
})

const SocialNets = mongoose.model('SocialNets', socialNetsSchema)

socialNetsSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const socialNetSchema = new mongoose.Schema({
  "social_net_id": {
    type: 'UUID',
    default: () => randomUUID()
  },
  "social_nets_id": {
    type: 'UUID',
    ref: 'SocialNets'
  },
  "contact_id": {
    type: 'UUID',
    ref: 'Contact'
  },
  "user_id": {
    type: 'UUID',
    ref: 'User'
  },
  "social_net_name": String,
  "social_net_url": String
})

const SocialNet = mongoose.model('SocialNet', socialNetSchema)

module.exports = { SocialNets, SocialNet }