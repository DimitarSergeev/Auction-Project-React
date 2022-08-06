const router = require('express').Router()

const authService = require('../services/authService')
const {sessionName} = require('../config/env')

router.post('/register', async (req, res) => {

  try {
    const user = await authService.register(req.body)
    return res.json(user)

  } catch (error) {
    res.status(400)

    return res.json({ error: error.message })
  }
})
router.post('/login', async (req, res) => {
  try {
    const user = await authService.login(req.body)
    const token = await authService.createToken(user)
    
    return res.json({ userName: user.userName, token })
  } catch (error) {
    res.status(404)
    return res.json({ error: error.message })
  }
})
router.get('/logout', (req, res) => {
  res.clearCookie(sessionName)
  res.redirect('/')
})

module.exports = router