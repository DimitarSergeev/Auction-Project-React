const jwt = require('jsonwebtoken')
let { secret,sessionName,blackList } = require('../config/env')

const {promisify}  = require('util')
const jwtVerify = promisify(jwt.verify)

exports.validateToken = (token) => blackList.find(x => x == token) ? false : true

// exports.clearOldTokens = async () =>{
//    let dateNow = new Date()
//    let timeNow = dateNow.getTime()
//    console.log(timeNow);
//   blackList = blackList.filter(async (x) => {
//     let decodedToken = await jwtVerify(x, secret)
//     console.log(decodedToken.exp);
//     if (decodedToken.exp > timeNow) {
//         return x  
//     }
//   })
// }