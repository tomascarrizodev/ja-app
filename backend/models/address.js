const mongoose = require('mongoose')
const { randomUUID } = require('crypto')

const ID = mongoose.Schema.Types.ObjectId

const addressSchema = new mongoose.Schema({
  "address_id": {
    type: 'UUID',
    default: () => randomUUID()
  },
  "user_id": {
    type: 'UUID',
    ref: 'User'
  },
  "country": {
    type: String,
    ref: 'User'
  },
  "state": String,
  "city": String,
  "postal_code": Number
})

addressSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Address', addressSchema)