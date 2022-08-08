const router = require('express').Router()

const authService = require('../services/authService')
const {sessionName} = require('../config/env')
// const tokenHelper = require('../utils/tokenHelper')
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
  authService.logout(req.headers['x-authorization'])
  // tokenHelper.clearOldTokens()
  return res.status(204)
})

module.exports = router