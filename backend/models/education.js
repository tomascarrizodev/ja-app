const mongoose = require('mongoose')
const { randomUUID } = require('crypto')

const ID = mongoose.Schema.Types.ObjectId

const educationSchema = new mongoose.Schema({
  "education_id": {
    type: 'UUID',
    default: () => randomUUID()
  },
  "user_id": {
    type: 'UUID',
    ref: "User"
  },
  "title": String,
  "university": String,
  "max_level": String,
  "courses_id": {
    type: 'UUID',
    ref: 'Courses'
  },
  "bootscamps_id": {
    type: 'UUID',
    ref: 'Bootcamps'
  }
})

educationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Education', educationSchema)