const mongoose = require('mongoose')
const { randomUUID } = require('crypto')

const ID = mongoose.Schema.Types.ObjectId

const previousExpSchema = new mongoose.Schema({
  "previous_exp_id": {
    type: 'UUID',
    default: () => randomUUID()
  },
  "user_id": {
    type: 'UUID',
    ref: 'User'
  },
  "previous_exps": [previousExpsSchema]
})

const PreviousExp = mongoose.model('PreviousExp', previousExpSchema)

const previousExpsSchema = new mongoose.Schema({
  "previous_exp_main_id": {
    type: 'UUID',
    default: () => randomUUID()
  },
  "previous_exp_id": {
    type: 'UUID',
    ref: 'PreviousExp'
  },
  "job_position": String,
  "company": String,
  "duration": Date,
  "responsabilities": [String]
})

previousExpSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const PreviousExps = mongoose.model('PreviousExps', previousExpsSchema) 

module.exports = { PreviousExp, PreviousExps }