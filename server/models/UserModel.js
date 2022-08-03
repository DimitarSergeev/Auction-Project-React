const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { saltRounds } = require('../config/env')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is requierd'],
        validate: [/^[a-zA-Z0-9]{4,}@[a-zA-Z]+.[a-zA-Z]{2,}/, 'Email need look like username@abv.bg']

    },
    userName: {
        type: String,
        required: [true, 'Username is requierd'],
        minlength: [4, 'Username need be min 4 charter length']

    },
    password: {
        type: String,
        required: [true, 'Password is requierd'],
        minlength: 6

    },

})

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, saltRounds)
        .then(hasedPassword => {
            this.password = hasedPassword
            next()
        })
})

const User = mongoose.model('User', userSchema)

module.exports = User

