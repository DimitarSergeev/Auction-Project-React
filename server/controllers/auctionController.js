const router = require('express').Router()

const tokenHelper = require('../utils/tokenHelper')
const auctionService = require('../services/auctionService')

router.post('/offer/create',async(req,res)=>{
    let data = req.body
    if (req.body.certificate === "No" && req.body.nameCert) {
        const {nameCert,...corectData} = req.body
        data = corectData
    }
const validToken = tokenHelper.validateToken(req.headers['x-authorization'])
if (!validToken) {
    return res.json({ error: 'The Authorization token has expired, please login !' })
}
    try {
        const auctionOffer = await auctionService.createOffer(data)
        return res.json(auctionOffer)
    } catch (error) {
         res.status(400)
         return res.json({ error: error.message })
    }
})

module.exports = router