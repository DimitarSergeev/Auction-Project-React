

const Auction = require('../models/AuctionModel')

exports.createOffer = (offerData)=> Auction.create(offerData)
exports.getAll = () => Auction.find()
exports.getOne = (offerId) => Auction.findById(offerId)
exports.delete = (offerId) => Auction.findByIdAndDelete(offerId)
exports.edit = (offerId,offerData) => Auction.findByIdAndUpdate(offerId,offerData,{runValidators: true})
