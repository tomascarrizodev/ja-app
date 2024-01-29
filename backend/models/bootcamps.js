const mongoose = require('mongoose')
const { randomUUID } = require('crypto')

const ID = mongoose.Schema.Types.ObjectId

const bootcampsSchema = new mongoose.Schema({
  "bootcamps_id": {
    type: 'UUID',
    default: () => randomUUID()
  },
  "user_id": {
    type: 'UUID',
    ref: 'User'
  },
  "bootcamps": [bootcampSchema]
})

const Bootcamps = mongoose.model('Bootcamps', bootcampsSchema)

const bootcampSchema = new mongoose.Schema({
  "bootcamp_id": {
    type: 'UUID',
    default: () => randomUUID()
  },
  "bootcamps_id": {
    type: 'UUID',
    ref: 'Bootcamps'
  },
  "bootcamp_title": String,
  "company": String,
  "duration": Date,
  "description": String
})

bootcampsSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Bootcamp = mongoose.model('Bootcamp', bootcampSchema)

module.exports = { Bootcamps, Bootcamp }