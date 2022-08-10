const mongoose = require('mongoose')

const auctionSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Product need have Title'],
        minlength: [4, 'Product need be min 4 charter length']
    },
    imageUrl: {
        type: String,
        required : [true, 'Image url is required'],
        validate: [/^https?/, 'Image need start with http/s']
    },
    createOn: {
        type: Number,
        required: [true, 'The year of production is mandatory'],
        min: [1, 'Year of creation can not be less thah 0']
    },
    startPrice: {
        type: Number,
        required: [true, 'The product must have a price'],
        min: [100, 'Min start price is 100$']
    },
    buyNow: {
        type: Number,
        min: [500, 'Min buyNow price is 500$']
    },
    description:{
        type: String,
        required: [true, 'Product must have a description!'],
        minlength: [10, 'Product description need be min 10 charter length']
    },
    certificate: {
        type: String,
        required: [true, 'Please select one of the certificate options']
    },
    nameCert: {
        type: String,
        required: false,
    },
    timer: {
        required: true,
        type: Date,
    }
})


const Auction = mongoose.model('Auction',auctionSchema)

module.exports = Auction