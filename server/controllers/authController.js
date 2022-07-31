const router = require('express').Router()

const authService = require('../services/authService')

router.post('/register',async (req,res)=>{

    try {
        const user = await authService.register(req.body)
       return res.json(user)
 
    } catch (error) {
     return res.json( {error: error.message})
    }
})
router.post('/login',async(req,res)=>{
    try {
       const user =  await authService.login(req.body)
      const token =  await authService.createToken(user)
      return res.json({userName: user.userName , token})
    } catch (error) {
        return res.json({error: error.message})
    }
  })

module.exports = router