const requestValidator = require("./requestValidator.js")
const verifySignUp = require('./verifySignUp')
const authjwt = require("./authjwt")

module.exports = {

    //export all middlewares files that exist
    requestValidator,
    verifySignUp,
    authjwt
}