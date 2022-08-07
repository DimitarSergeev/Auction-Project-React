const router = require('express').Router()

const authController = require('./controllers/authController')
const auctionController = require('./controllers/auctionController')

router.use('/auth',authController)
router.use('/auction', auctionController)


module.exports = router