const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/AuctionProject';

exports.initializeDatabase = () => mongoose.connect(connectionString);