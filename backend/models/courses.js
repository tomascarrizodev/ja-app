const mongoose = require('mongoose')
const { randomUUID } = require('crypto')

const ID = mongoose.Schema.Types.ObjectId

const coursesSchema = new mongoose.Schema({
  "courses_id": {
    type: 'UUID',
    default: () => randomUUID()
  },
  "user_id": {
    type: 'UUID',
    ref: 'User'
  },
  "courses": [courseSchema]
})

const Courses = mongoose.model('Courses', coursesSchema)

const courseSchema = new mongoose.Schema({
  "course_id": {
    type: 'UUID',
    default: () => randomUUID()
  },
  "courses_id": {
    type: 'UUID',
    ref: 'Courses'
  },
  "course_title": String,
  "company": String,
  "duration": Date,
  "description": String
})

coursesSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Course = mongoose.model('Course', courseSchema)

module.exports = { Courses, Course }