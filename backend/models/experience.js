const mongoose = require('mongoose')
const { randomUUID } = require('crypto') 

const ID = mongoose.Schema.Types.ObjectId

const experienceSchema = new mongoose.Schema({
  "experience_id": {
    type: 'UUID',
    default: () => randomUUID()
  },
  "user_id": {
    type: 'UUID',
    ref: 'User'
  },
  "responsabilities": [String],
  "experience_field": String,
  "job_position": String,
  "company": String,
  "entrance": Date,
  "desire_position": String,
  "previous_exp_id": {
    type: 'UUID',
    ref: 'PreviousExp'
  }
})

experienceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Experience', experienceSchema)