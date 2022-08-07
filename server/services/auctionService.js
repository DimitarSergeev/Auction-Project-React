

const Auction = require('../models/AuctionModel')

exports.createOffer = (offerData)=> Auction.create(offerData)