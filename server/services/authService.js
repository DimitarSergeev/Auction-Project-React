const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/env')


const User = require('../models/UserModel')

exports.getOne = (userId) => User.findById(userId)

exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw ({
            message: 'email or password dont match!'
        })
    }
    let isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
        throw {
            message: 'email or password dont match!'
        };
    }

    return user

}

exports.register = async ({ email, userName, password, repeatPassword }) => {

    if (password !== repeatPassword) {
        throw {
            message: 'Passwords dont match!'
        }
    }


    let createdUser = await User.create({
        email,
        userName,
        password,

    });

    return createdUser

}

exports.createToken = (user) => {
    const payload = { _id: user._id, email: user.email }
    const options = { expiresIn: '1d' }
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secret, options, (err, decodedToken) => {
            if (err) {
                return reject(err)
            }
            resolve(decodedToken)
        })
    })
}