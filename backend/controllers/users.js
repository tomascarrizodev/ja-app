const userRouter = require('express').Router()
const User = require('../models/user')

userRouter.get('/users', async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = userRouter