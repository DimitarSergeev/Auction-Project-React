const router = require('express').Router()

const tokenHelper = require('../utils/tokenHelper')
const auctionService = require('../services/auctionService')
const authService = require('../services/authService')

router.get('/', async (req, res) => {
    const offerts = await auctionService.getAll().lean()
    let firstIndex = offerts.length - 3
    if (firstIndex < 0) {
        firstIndex = 0
    }
    const lastTree = offerts.slice(firstIndex)
    return res.json(lastTree)
})

router.get('/auction', async (req, res) => {
    const offerts = await auctionService.getAll().lean()
    return res.json(offerts)
})

router.post('/offer/create', async (req, res) => {
    let data = { ...req.body, timer: Date.now() }
    if (req.body.certificate === "No" && req.body.nameCert) {
        const { nameCert, ...corectData } = req.body
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

router.get('/offer/:offerId/details', async (req, res) => {
    try {
        const offert = await auctionService.getOne(req.params.offerId).lean()
        return res.json(offert)
    } catch (error) {
        res.status(400)
        return res.json({ error: error.message })
    }
})

router.patch('/:offerId', async (req, res) => {
    try {
        const offer = await auctionService.getOne(req.params.offerId)
        offer.startPrice = req.body.startPrice
        offer.winBet = req.body.winBet
        await offer.save()
        return res.json(offer)

    } catch (error) {
        return res.json({ error: error.message })
    }
})
router.post('/edit/offer/:offerId', async (req, res) => {
    let data = req.body
    if (data.certificate === "No" && req.body.nameCert) {
        const { nameCert, ...corectData } = req.body
        data = corectData
    }
    const validToken = tokenHelper.validateToken(req.headers['x-authorization'])
    if (!validToken) {
        return res.json({ error: 'The Authorization token has expired, please login !' })
    }
    try {
        const editedOffer = await auctionService.edit(req.params.offerId, data).lean()
        return res.json(editedOffer)
    } catch (error) {
        res.status(400)
        return res.json({ error: error.message })
    }
})

router.get('/:offerId/:userId', async (req, res) => {
    try {
        const offer = await auctionService.getOne(req.params.offerId)
        const user = await authService.getOne(req.params.userId)
        if (offer.winBet) {
            offer.buyNow = offer.startPrice
        }
        offer.owner = req.params.userId
        await offer.save()
        user.Mycollection.push(offer)
        await user.save()
        return res.json(user)

    } catch (error) {
        return res.json({ error: error.message })
    }
})

router.get('/:offerId', async (req, res) => {
    await auctionService.delete(req.params.offerId)
    console.log('delete');
    return res.status(204)
})
module.exports = router