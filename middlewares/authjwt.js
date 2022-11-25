const jwt = require("jsonwebtoken")
const config = require("../configs/auth.config")

verifyToken = (req, res, next) => {

    let token = req.headers["x-access-token"];

    //if no token was provided
    if(!token) {
        return res.status(403).send({
            message: "No Token provided!"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        //if token provided, but the wrong one. 
        if(err) {
            return res.status(401).send({
                message: "Unauthorised!"
            });
        }
       next()
    })

}

const authjwt = {
    verifyToken: verifyToken
}

module.exports = authjwt