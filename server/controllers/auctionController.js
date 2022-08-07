const router = require('express').Router()


const auctionService = require('../services/auctionService')

router.post('/create',async(req,res)=>{
    try {
        const auctionOffer = await auctionService.createOffer(req.body)
        return res.json(auctionOffer)
    } catch (error) {
         res.status(400)
         return res.json({ error: error.message })
    }
})

module.exports = router