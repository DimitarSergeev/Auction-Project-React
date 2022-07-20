const router = require('express').Router()

router.get('/login',(req,res)=>{
    return res.json({message: 'You login succsefully'})
})

module.exports = router